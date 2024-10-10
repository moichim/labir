import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { ifDefined } from "lit/directives/if-defined.js";
import { Instance, TimeFormat } from "@labir/core";

@customElement("file-app")
export class SingleFileApp extends FileConsumer {

  @property({ type: Number })
  from?: number;

  @property({ type: Number })
  to?: number;

  @property({ type: Number })
  speed?: 0.5 | 1 | 2 | 3 | 5 | 10;

  @property({ type: String, reflect: true, attribute: true })
  showembed: boolean = true;

  @property({ type: String, reflect: true, attribute: true })
  showabout: boolean = true;

  @property({ type: String, reflect: true, attribute: true })
  showfullscreen: boolean = true;

  @property()
  author?: string;

  @property()
  recorded?: string;

  @property()
  license?: string;

  @property()
  label?: string;


  public onInstanceCreated(
    instance: Instance
  ): void {
    this.recorded = TimeFormat.human( instance.timestamp );
  }
  public onFailure(
    // error: ThermalFileFailure
  ): void {
    // throw new Error("Method not implemented.");
  }

  static styles = css`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;

  protected willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);

    // Project eventual changes into the file
    if (this.file) {
      // Project the speed
      if (this.speed !== undefined) {
        this.file.timeline.playbackSpeed = this.speed;
      }
      // Project the range
      if (this.from !== undefined && this.to !== undefined) {
        this.registry.range.imposeRange({
          from: this.from,
          to: this.to
        });
      }
    }

  }

  protected render(): unknown {

    return html`
        <thermal-app author=${ifDefined(this.author )} recorded=${ifDefined(this.recorded )} license=${ifDefined(this.license )}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file ? 
            this.label ??this.file.fileName 
            : "Loading..."
          }</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label="Display settings">
                <thermal-button slot="invoker">Display settings</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label="Image rendering" 
                    hint="Pixelated mode disables antialising of the thermogram and enables you to see its pixels as they are."
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label="Adjust time scale"
                    hint="Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max)."
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label="Palette"
                    hint="Select colour palette of thermal display."
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${(this.file && this.file.timeline.isSequence) ? html` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `
        : nothing
      }


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed === true ? html`<file-share-button ></file-share-button>` : nothing}
            
              ${this.showabout === true ? html`<app-info-button ></app-info-button>` : nothing}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            ${( this.file && this.file.timeline.isSequence ) 
              ? html`<file-analysis-graph slot="post"></file-analysis-graph>`
              : nothing
            }



          <slot name="content" slot="content"></slot>

        </thermal-app>
    `;
  }

}