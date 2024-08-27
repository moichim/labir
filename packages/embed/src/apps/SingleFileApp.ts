import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../hierarchy/consumers/FileConsumer";

@customElement("file-app")
export class SingleFileApp extends FileConsumer {

  public onLoadingStart(): void {
      // throw new Error("Method not implemented.");
  }
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
  
  `;

  protected render(): unknown {

    return html`
        <thermal-app>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file ? this.file.fileName : "Načítám..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar slot="bar">
              <registry-range-auto-button ></registry-range-auto-button>
              <registry-range-full-button ></registry-range-full-button>
              <file-info-button></file-info-button>
              <file-download-dropdown ></file-download-dropdown>
              <file-share-button ></file-share-button>
              <app-info-button ></app-info-button>
            </thermal-bar>
          </div>
            
            
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>

            <registry-ticks-bar slot="pre"></registry-ticks-bar>
            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
        </thermal-app>
    `;
  }

}