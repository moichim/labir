import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { ElementInheritingGroup } from "../structure/group/ElementInheritingGroup";

@customElement("thermal-file-app")
export class SingleFileApp extends ElementInheritingGroup {
  protected getClassName(): string {
    return "SingleFileApp";
  }

  // Declare reactive properties
  @property({ type: String, reflect: true })
  url?: string = "";

  connectedCallback(): void {
    super.connectedCallback();
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
      background: var( --thermal-slate-base-dark );

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
    <div class="container fullscreen-${this.fullscreen}" ${ref( this.appRef )}>

      <thermal-image thermal="${this.url}">
        <thermal-file-name slot="bar"></thermal-file-name>
        <thermal-file-info slot="bar"></thermal-file-info>
        <thermal-palette slot="bar"></thermal-palette>
        <!--<thermal-range-auto slot="bar"></thermal-range-auto>-->
        <!--<thermal-range-minmax slot="bar"></thermal-range-minmax>-->
        <!--<thermal-opacity slot="bar"></thermal-opacity>-->
        <thermal-range slot="pre"></thermal-range>
        
        <div style="flex-grow: 1" slot="bar"></div>
        <thermal-app-info slot="bar"></thermal-app-info>

        <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
          <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
          ${this.fullscreen === "on"
            ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>`
            : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>`
          }
          </div>
        </thermal-button>
        
      </thermal-image>

    </div>
    `;
  }

}