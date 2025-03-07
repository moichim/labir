import i18next, { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { languagesObject, T } from "../translations/Languages";


@customElement("thermal-app")
export class ThermalAppUiElement extends BaseElement {

    @state()
    language: string = i18next.language;

    @queryAssignedElements({ slot: "bar", flatten: true })
    barElements!: Array<HTMLElement>;

    @queryAssignedElements({ slot: "pre", flatten: true })
    preElements!: Array<HTMLElement>;

    @queryAssignedElements({ slot: "content", flatten: true })
    contentElements!: Array<HTMLElement>;

    @property({ type: String, reflect: true })
    fullscreen: string = "off";

    @property({ type: String, reflect: true, attribute: true })
    showfullscreen: boolean = true;

    @property( {type: String, reflect: true, attribute: true} )
    dark: boolean = false;

    @property()
    author?: string;

    @property()
    recorded?: string;

    @property()
    license?: string;

    @property()
    label?: string;



    protected appRef: Ref<HTMLDivElement> = createRef();

    protected contentRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    connectedCallback(): void {
        super.connectedCallback();

        window.addEventListener("fullscreenchange", () => {
            if (!document.fullscreenElement) {
                this.fullscreen = "off";
            }
        });

        i18next.on("languageChanged", () => {
            this.language = i18next.language;
        });

    }

    toggleFullscreen() {
        if (this.fullscreen === "on") {
            this.fullscreen = "off";
        } else {
            this.fullscreen = "on";
        }
    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        if (
            this.observer === undefined
            && this.appRef.value instanceof Element
            && this.contentRef.value !== undefined
        ) {

            this.observer = new ResizeObserver((entries) => {
                const entry = entries[0];

                if (this.fullscreen === "on" && this.contentRef.value) {

                    const offsetHeight = 175;
                    const offsetWidth = 0;

                    const windowHeight = entry.contentRect.height;
                    const windowWidth = entry.contentRect.width;

                    const availableHeight = windowHeight - offsetHeight;
                    const availableWidth = windowWidth - offsetWidth;


                    const contentHeight = this.contentRef.value.offsetHeight;

                    const aspect = 4 / 3;

                    let width: number = 0;
                    let height: number = 0;


                    // If define by width only
                    if (contentHeight < availableHeight) {
                        console.log("priorita šířky");
                        width = availableWidth;
                        height = width / aspect;
                    } else {
                        console.log("priorita výšky");
                        height = availableHeight;
                        width = height * aspect;
                    }


                    this.contentRef.value.setAttribute("style", `width: ${width}px !important; height: ${height}px !important; align-self: center; justify-self: center;`);

                }

                else if (this.fullscreen === "off" && this.contentRef.value) {

                    this.contentRef.value.removeAttribute( "style" );

                }


            });
            this.observer.observe(this.appRef.value!);

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

        :host {
            font-family: sans-serif;
            font-weight: normal;
            font-size: var( --thermal-fs );
            line-height: 1em;
        }

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );            

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

            header {
                width: 100%;
            }

            .content {
                background: red;
            }
        }

        .credits {

            display: flex;
            width: 100%;
            flex-wrap: wrap;
            font-size: calc( var(--thermal-fs-sm) * 0.8 );

            & > div {
                padding-top: calc( var(--thermal-gap) * .5 );
                padding-right: var( --thermal-gap );
            }
        
        }

        .credits-field {
            display: inline;
            opacity: .5;
        }

        .credit-value {
            display: inline;
        }

        .content {
            width: 100%;
            box-sizing: border-box;
        }

        .has-content {
            margin-top: calc( var(--thermal-gap) * .5);
            color: var( --thermal-foreground );
            &::before {
                opacity: .5;
                font-size: calc( var(--thermal-fs-sm) * 0.8 );
                display: block;
                padding-bottom: calc( var(--thermal-gap) * .5);
            }
        }
    
    `;





    protected render(): unknown {

        return html`

        <div class="container ${this.dark ? "dark" : "normal"}" ${ref(this.appRef)}>

        <header>
            
        ${this.barElements.length >= 0 ? html`
            <div class="bar">

                <slot name="label">
                    ${this.label
                        ? html`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`
                        : nothing
                    }
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                <thermal-dropdown >

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${[
                        "en",
                        "cs",
                        "de",
                        "fr",
                        "cy",
                    ].map( lang => html`
                        <div slot="option">
                            <thermal-button
                                @click=${() => {
                                    i18next.changeLanguage( lang );
                                    this.language = lang;
                                }}
                            >${languagesObject[lang].flag} ${languagesObject[lang].name}</thermal-button>
                        </div>
                    ` )}
                </thermal-dropdown>

                <!--
                ${ this.showfullscreen === true ? html`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
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
                ` : nothing }

                -->
                
            </div> 
        ` : ""}

        ${this.preElements.length >= 0 ? html`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        ` : ""}

        </header>


            <div class="content" part="app-content" ${ref(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author || this.license || this.recorded 
                ? html`<div class="credits">

                    ${this.recorded 
                        ? html`<div>
                            <div class="credits-field">${t(T.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`
                        : nothing
                    }

                    ${this.author 
                        ? html`<div>
                            <div class="credits-field">${t(T.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`
                        : nothing
                    }

                    ${this.license 
                        ? html`<div>
                            <div class="credits-field">${t(T.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`
                        : nothing
                    }

                </div>`
                : nothing
            }

            <div class="content ${this.contentElements.length > 0 ? "has-content" : ""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `
    }

}