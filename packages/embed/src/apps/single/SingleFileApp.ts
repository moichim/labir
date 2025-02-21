import { Instance, TimeFormat } from "@labir/core";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { T } from "../../translations/Languages";
import { booleanConverter } from "../../utils/booleanConverter";
import { consume } from "@lit/context";
import { interactiveAnalysisContext } from "../../utils/context";

@customElement("file-app")
export class SingleFileApp extends FileConsumer {


  public getTourableRoot(): HTMLElement | undefined {
    return undefined;
  }

  @property({ type: String, reflect: true, attribute: true,converter: booleanConverter( false ) })
  showembed: boolean = false;

  @property({ type: String, reflect: true, attribute: true, converter: booleanConverter( false ) })
  showabout: boolean = false;

  @property({ type: String, reflect: true, attribute: true, converter: booleanConverter( false ) })
  showfullscreen: boolean = false;

  @property({ type: String, reflect: true, converter: booleanConverter( true ) })
  showhistogram: boolean = true;

  @consume({context: interactiveAnalysisContext, subscribe: true})
  interactiveanalysis: boolean = false;

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
    this.recorded = TimeFormat.human(instance.timestamp);
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

  protected render(): unknown {

    return html`
        <thermal-app author=${ifDefined(this.author)} recorded=${ifDefined(this.recorded)} license=${ifDefined(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file ?
        this.label && this.label.trim().length > 0 ? this.label.trim() : this.file.fileName
        : "Loading..."
      }</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file && this.file.visibleUrl ? html`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>` : nothing}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${t(T.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${t(T.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${t(T.filerendering)} 
                    hint=${t(T.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${t(T.adjusttimescale)}
                    hint=${t(T.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${t(T.colourpalette)}
                    hint=${t(T.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${(this.file && this.file.timeline.isSequence) ? html` <thermal-field 
                    label="${t(T.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `
        : nothing
      }

                  ${(this.file && this.file.timeline.isSequence) ? html` <thermal-field 
                    label="${t(T.graphlines)}"
                    hint=${t(T.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
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
            ${this.interactiveanalysis === true ? html`<group-tool-buttons slot="pre"></group-tool-buttons>`:nothing}
            
            ${this.showhistogram === true ? html`<registry-histogram slot="pre"></registry-histogram>`: nothing}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${(this.file && this.file.timeline.isSequence)
        ? html`<file-analysis-graph slot="post"></file-analysis-graph>`
        : nothing
      }

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `;
  }

}