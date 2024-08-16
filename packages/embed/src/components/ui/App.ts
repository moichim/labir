import { LitElement, css, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";


@customElement("thermal-app")
export class FileContextElement extends LitElement {


    @queryAssignedElements({ slot: "bar", flatten: true })
    protected barItems?: Array<HTMLElement>;

    @queryAssignedElements({ slot: "bar", flatten: true })
    barElements!: Array<HTMLElement>;

    @queryAssignedElements({ slot: "pre", flatten: true })
    pre!: Array<HTMLElement>;

    @property({ type: String, reflect: true })
    fullscreen: string = "off";

    protected appRef: Ref<HTMLDivElement> = createRef();

    connectedCallback(): void {
        super.connectedCallback();

        window.addEventListener("fullscreenchange", () => {
            if (!document.fullscreenElement) {
                this.fullscreen = "off";
            }
        });

    }

    toggleFullscreen() {
        console.log( "fullscreen" );
        if (this.fullscreen === "on") {
            this.fullscreen = "off";
        } else {
            this.fullscreen = "on";
        }
    }


    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value);

        if (name === "fullscreen") {
            if (value === "on") {

                this.appRef.value?.requestFullscreen();
                // ...
            } else if (value === "off") {
                // ...
                if (document.fullscreenElement)
                    document.exitFullscreen();
            }
        }

    }


    static styles = css`

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            // box-shadow: var( --thermal-shadow );

            

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        :host([fullscreen="on"]) .container {
            border: 0;
            border-radius: 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
        }
    
    `;





    protected render(): unknown {

        return html`

        <div class="container" ${ref(this.appRef)}>

        <header>
            
        ${this.barElements.length >= 0 ? html`
            <div class="bar">
                <slot name="bar"></slot>
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
            </div> 
        ` : ""}

        ${this.pre.length >= 0 ? html`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        ` : ""}

        </header>


            <div class="content" part="app-content">
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

        </div>
        
        `
    }

}