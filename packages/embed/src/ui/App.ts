import i18next, { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { languagesObject, T } from "../translations/Languages";
import { booleanConverter } from "../utils/booleanConverter";

const isChromium = "chrome" in window;

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

    @property({ type: String, reflect: true, attribute: true, converter: booleanConverter(false) })
    showfullscreen: boolean = false;

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

    @property({converter: booleanConverter(false)})
    chromiumwarning: boolean = false;



    protected appRef: Ref<HTMLDivElement> = createRef();
    protected headerRef: Ref<HTMLDivElement> = createRef();

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
            position: relative;        

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
            box-sizing: border-box;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding-top: 0px;

            .app-header {
                padding-top: calc( var( --thermal-gap ) / 3 );
            }

            header,
            .content {
                width: 100%;
            }
        }

        .app-fullscreen-button {
            svg {
                width: 1em;
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

        .app-header {
            position: sticky;
            top: 0;
            z-index: 9999;
            background: var(--thermal-slate-light);
            background: linear-gradient(var(--thermal-slate-light) calc(100% - 10px), transparent);
        }

        footer.chromium {
            color: var(--thermal-foreground);
            font-size: 12px;
            opacity: .5;
            display: flex;
            gap: 5px;
            margin-top: 10px;
            svg {
                width: 1em;
            }
            a {
                color: var(--thermal-foreground);
            }
        }
    
    `;





    protected render(): unknown {

        const showChromiumWarning = isChromium === true && this.chromiumwarning === true;

        return html`

    <div class="container ${this.dark ? "dark" : "normal"}" ${ref(this.appRef)}>

        <header ${ref(this.headerRef)} class="app-header">
            
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

                
                ${ this.showfullscreen === true ? html`
                    <thermal-button class="app-fullscreen-button" @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen === "on"
                            ? html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V2.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L2.22 3.28a.75.75 0 0 1 0-1.06Zm10.5 0a.75.75 0 1 1 1.06 1.06L11.56 5.5h1.69a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 6.25v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22ZM2.75 9h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H2.75a.75.75 0 0 1 0-1.5ZM9 9.75A.75.75 0 0 1 9.75 9h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0v-3.5Z" clip-rule="evenodd" />
                            </svg>`
                            : html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd" />
                            </svg>`
                        }
                        </div>
                    </thermal-button>
                ` : nothing }

                <thermal-dropdown>

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

            ${showChromiumWarning === true 
                ? html`<footer class="chromium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>

                    <span>Chromium-based browsers provide a slightly worse performance during the playback. Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</span>
                </footer>`
                : nothing
            }

    </div>
        
        `
    }

}