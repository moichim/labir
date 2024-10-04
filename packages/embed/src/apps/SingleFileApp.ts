import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FileConsumer } from "../hierarchy/consumers/FileConsumer";

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


  public onInstanceCreated(
    // instance: Instance
  ): void {
    // throw new Error("Method not implemented.");
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
        this.registry.range.setFixedRange({
          from: this.from,
          to: this.to
        });
      }
    }

  }

  protected render(): unknown {

    return html`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file ? this.file.fileName : "Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
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
            <file-analysis-graph slot="post"></file-analysis-graph>
        </thermal-app>
    `;
  }

}