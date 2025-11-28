import i18next, { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { languagesObject, T } from "../translations/Languages";
import { booleanConverter } from "../utils/converters/booleanConverter";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { cache } from "lit/directives/cache.js";

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

    @property()
    labelIcon?: string;
    
    @property()
    labelIconStyle?: string;

    @property()
    labelTooltip?: string;

    @property()
    labelVariant: string = "foreground";

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
            // this.log( "languageChanged", this.language, i18next.language );
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
            color: var( --thermal-foreground );
        }

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
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
    
    `;



    private renderLabel(): unknown {

        const interactive = this.onlabel !== undefined;

        const interactiveProp = interactive ? "true" : "false";

        const slotInner = this.label
            ? html`<thermal-btn
    variant="${this.labelVariant}"
    interactive=${interactiveProp}
    icon=${ifDefined(this.labelIcon)}
    iconStyle=${ifDefined(this.labelIconStyle)}
    tooltip=${ifDefined(this.labelTooltip)}
    @click=${ifDefined(this.onlabel)}
>${this.label}</thermal-btn>`
            : nothing;

        return html`
    <slot name="label">
        ${slotInner}
    </slot>`;

    }


    private renderCreditField(label: string, value?: string): unknown {
        if ( value === undefined || value.trim().length === 0 ) return nothing;
        return html`<div>
    <div class="credits-field">${label}:</div>
    <div class="credit-value">${value}</div>
</div>`;
    }

    private renderCredits(): unknown {

        if ( this.author || this.license || this.recorded ) {

            return html`<div class="credits">
    ${this.renderCreditField(t(T.recordedat), this.recorded)}
    ${this.renderCreditField(t(T.author), this.author)}
    ${this.renderCreditField(t(T.license), this.license)}
</div>`;

        }

        return nothing;

    }

    private static readonly languages = [
        "en",
        "cs",
        "de",
        "fr",
        "cy",
    ];

    private renderLanguageSwitcher(): unknown {

        return html`<thermal-dropdown>
    <span slot="invoker">${this.language.toUpperCase()}</span>
    ${cache( map( ThermalAppUiElement.languages, lang => html`<div slot="option">
        <thermal-btn
            @click=${() => {
                i18next.changeLanguage( lang );
                this.language = lang;
            }}
        >${languagesObject[lang].flag} ${languagesObject[lang].name}</thermal-btn>
    </div>` ) )}
</thermal-dropdown>`;

    }

    private renderFullscreenButton(): unknown {

        if ( this.showfullscreen === false ) {
            return nothing;
        }

        return html`<thermal-btn
    class="app-fullscreen-button"
    @click=${this.toggleFullscreen.bind(this)}
    icon=${this.fullscreen === "on" ? "smaller" : "bigger"}
    iconStyle="mini"
    tooltip=${this.fullscreen === "on" ? t(T.close) : "Fullscreen"}
></thermal-btn>`;

    }



    protected render(): unknown {

        return html`<div class="container ${this.dark ? "dark" : "normal"}" ${ref(this.appRef)}>

    <header ${ref(this.headerRef)} class="app-header">

        <div class="bar ${this.barElements.length > 0 ? "has-bar" : "no-bar"}">

            ${ this.renderLabel() }

            <slot name="bar-persistent"></slot>

            <div class="bar-content">

                <thermal-bar>

                    <slot name="bar-pre"></slot>
                    <div class="bar-separator"></div>
                    <slot name="bar-post"></slot>

                </thermal-bar>
                
            </div>

            <slot name="close"></slot>

            ${this.renderFullscreenButton()}

            ${this.renderLanguageSwitcher()}

        </div>

        ${this.preElements.length >= 0 ? html`<div class="pre" class="pre">
            <slot name="pre"></slot>
        </div>` : ""}

    </header>

    <div class="content" part="app-content" ${ref(this.contentRef)}>
        <slot></slot>
    </div>

    <div class="post">
        <slot name="post"></slot>
    </div>

    ${this.renderCredits()}

    <div class="content ${this.contentElements.length > 0 ? "has-content" : ""}">
        <slot name="content"></slot>
    </div>
</div>`
    }

}