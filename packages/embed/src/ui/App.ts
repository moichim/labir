import i18next, { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { languagesObject, T } from "../translations/Languages";
import { booleanConverter } from "../utils/converters/booleanConverter";
import { ifDefined } from "lit/directives/if-defined.js";

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

    @property({type: Object})
    onlabel?: () => void;

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
            this.log( "languageChanged", this.language, i18next.language );
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

            .bar-content {
                flex-grow: 1;
            }

            .bar-separator {
                flex-grow: 100;
                content: "";
            }


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

        const fullscreenIcon = this.fullscreen === "on" ? "smaller" : "bigger";
        const fullscreenTooltip = this.fullscreen === "on"
            ? t(T.close)
            : "Fullscreen";

        return html`

    <div class="container ${this.dark ? "dark" : "normal"}" ${ref(this.appRef)}>

        <header ${ref(this.headerRef)} class="app-header">
            
            <div class="bar ${this.barElements.length > 0 ? "has-bar" : "no-bar"}">

                <slot name="label">
                    ${this.label
                        ? html`<thermal-btn variant="foreground" interactive="${this.onlabel !== undefined}" @click=${ifDefined(this.onlabel)}>${this.label}</thermal-btn>`
                        : nothing
                    }
                </slot>

                <slot name="bar-persistent"></slot>

                <div class="bar-content">

                    <thermal-bar>

                        <slot name="bar-pre"></slot>

                        <div class="bar-separator"></div>

                        <slot name="bar-post"></slot>

                    </thermal-bar>
                
                </div>

                <slot name="close"></slot>

                
                ${ this.showfullscreen === true ? html`
                    <thermal-btn class="app-fullscreen-button" @click=${this.toggleFullscreen.bind(this)} icon=${fullscreenIcon} iconStyle="mini" tooltip=${fullscreenTooltip}>
                    </thermal-btn>
                ` : nothing }

                <thermal-dropdown>

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${[
                        "en",
                        "cs",
                        "de",
                        "fr",
                        // "cy",
                    ].map( lang => html`
                        <div slot="option">
                            <thermal-btn
                                @click=${() => {
                                    i18next.changeLanguage( lang );
                                    this.language = lang;
                                }}
                            >${languagesObject[lang].flag} ${languagesObject[lang].name}</thermal-btn>
                        </div>
                    ` )}
                </thermal-dropdown>
                
            </div>

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