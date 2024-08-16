import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref } from "lit/directives/ref.js";
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

  connectedCallback(): void {
    super.connectedCallback();

    window.addEventListener( "fullscreenchange", () => {
      if ( ! document.fullscreenElement ) {
        this.fullscreen = "off";
      }
    } );

  }

  static styles = css`

    .container {

      padding: calc( var( --thermal-gap ) / 3 );
      background-color: var( --thermal-slate-light );
      border: 1px solid var( --thermal-slate );
      border-radius: var( --thermal-radius );
      // box-shadow: var( --thermal-shadow );

    }

    .fullscreen-on {

      border: 0;
      border-radius: 0;
      // background: var( --thermal-slate-base-dark );

      ::part( file-canvas-wrapper ) {

        display: flex;
        align-items: center;
        justify-content: center;

        padding: var( --thermal-gap );
        box-sizing: border-box;
        height: 100%;

      }

      ::part( file-canvas-container ) {

        max-width: 100vw;
        max-height: 100vh;
        
        aspect-ratio: 4 / 3;
        margin:: 0 auto;7

        width: 80vw;

      }

      @media ( min-height: 800px ) {
        ::part( file-canvas-container ) {
            width: 70vw;
        }
      }
    }
  
  `;

  @property({type: String, reflect: true})
  fullscreen: string = "off";

  protected appRef: Ref<HTMLDivElement> = createRef();

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    super.attributeChangedCallback( name, _old, value );

    if ( name === "fullscreen" ) {
      if ( value === "on" ) {

        this.appRef.value?.requestFullscreen();
        // ...
      } else if ( value === "off" ) {
        // ...
        if ( document.fullscreenElement ) 
          document.exitFullscreen();
      }
    }

  }

  toggleFullscreen() {
    if ( this.fullscreen === "on" ) {
      this.fullscreen = "off";
    } else {
      this.fullscreen = "on";
    }
  }

  protected render(): unknown {

    return html`
        <thermal-app>
          <thermal-button slot="bar" variant="foreground" interactive="false">${this.instance ? this.instance.fileName : "Načítám..."}</thermal-button>

            <file-info-button slot="bar"></file-info-button>
            <file-download-dropdown slot="bar"></file-download-dropdown>
            
            <manager-palette-dropdown slot="bar"></manager-palette-dropdown>
            <registry-range-auto-button slot="bar"></registry-range-auto-button>
            <registry-range-full-button slot="bar"></registry-range-full-button>
            <file-share-button slot="bar"></file-share-button>
            <app-info-button slot="bar"></app-info-button>
            
            <registry-histogram></registry-histogram>
            <registry-range-slider></registry-range-slider>

            <registry-ticks-bar></registry-ticks-bar>
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
        </thermal-app>
    `;
  }

}