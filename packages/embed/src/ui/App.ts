import i18next, { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";
import { languagesObject, T } from "../translations/Languages";
import { booleanConverter } from "../utils/converters/booleanConverter";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { cache } from "lit/directives/cache.js";

@customElement("thermal-app")
export class ThermalAppElement extends AbstractThermalElement {

    @state()
    language: string = i18next.language;

    @state()
    private _overflowCount: number = 0;

    @state()
    private _overflowOpen: boolean = false;

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



    protected headerRef: Ref<HTMLDivElement> = createRef();

    protected contentRef: Ref<HTMLDivElement> = createRef();

    protected barItemsRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    private _overflowObserver: ResizeObserver | null = null;

    private _rafId: number | null = null;

    private _handleFullscreenChange = (): void => {
        if (!document.fullscreenElement) {
            this.fullscreen = "off";
        }
    };

    connectedCallback(): void {
        super.connectedCallback();

        window.addEventListener("fullscreenchange", this._handleFullscreenChange);


        i18next.on("languageChanged", () => {
            // this.log( "languageChanged", this.language, i18next.language );
            this.language = i18next.language;
        });

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener("fullscreenchange", this._handleFullscreenChange);
        if (this._overflowObserver) {
            this._overflowObserver.disconnect();
            this._overflowObserver = null;
        }
        if (this._rafId !== null) {
            cancelAnimationFrame(this._rafId);
            this._rafId = null;
        }
    }

    private _toggleOverflow(): void {
        this._overflowOpen = !this._overflowOpen;
    }

    private _scheduleOverflowUpdate(): void {
        if (this._rafId !== null) cancelAnimationFrame(this._rafId);
        this._rafId = requestAnimationFrame(() => {
            this._rafId = null;
            this._doOverflowUpdate();
        });
    }

    private _doOverflowUpdate(): void {
        const shadow = this.shadowRoot;
        if (!shadow) return;

        // Step 1: Restore all overflow items to their original slots
        const overflowSlot = shadow.querySelector('slot[name="bar-overflow"]') as HTMLSlotElement | null;
        if (overflowSlot) {
            const items = [...overflowSlot.assignedElements()] as HTMLElement[];
            for (const item of items) {
                item.slot = item.dataset.originalSlot ?? "bar-pre";
                delete item.dataset.originalSlot;
            }
        }

        // Step 2: Measure all items (forces synchronous layout reflow)
        const barItems = this.barItemsRef.value;
        if (!barItems) return;

        const preSlot = shadow.querySelector('slot[name="bar-pre"]') as HTMLSlotElement | null;
        const postSlot = shadow.querySelector('slot[name="bar-post"]') as HTMLSlotElement | null;
        const allItems = [
            ...(preSlot?.assignedElements({ flatten: true }) ?? []),
            ...(postSlot?.assignedElements({ flatten: true }) ?? []),
        ] as HTMLElement[];

        if (allItems.length === 0) {
            this._overflowCount = 0;
            return;
        }

        const GAP = 5;
        const HAMBURGER_W = 44; // width of overflow toggle button + gap

        // Calculate total width of all items
        const totalItemsWidth = allItems.reduce(
            (sum, el, i) => sum + el.offsetWidth + (i > 0 ? GAP : 0), 0
        );
        const containerWidth = barItems.offsetWidth;

        if (totalItemsWidth <= containerWidth) {
            // Everything fits
            this._overflowCount = 0;
            this._overflowOpen = false;
            return;
        }

        // Find which items overflow (available = container - hamburger button)
        const availableWidth = containerWidth - HAMBURGER_W;
        let used = 0;
        let firstOverflow = allItems.length;

        for (let i = 0; i < allItems.length; i++) {
            const itemWidth = allItems[i].offsetWidth + (i > 0 ? GAP : 0);
            if (used + itemWidth > availableWidth) {
                firstOverflow = i;
                break;
            }
            used += itemWidth;
        }

        // Assign overflow items
        for (let i = firstOverflow; i < allItems.length; i++) {
            const item = allItems[i];
            item.dataset.originalSlot = item.slot;
            item.slot = "bar-overflow";
        }

        const newCount = allItems.length - firstOverflow;
        this._overflowCount = newCount;
        if (newCount === 0) {
            this._overflowOpen = false;
        }
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
            this.observer.observe(this);

        }

        // Set up overflow ResizeObserver once barItemsRef is available
        if (!this._overflowObserver && this.barItemsRef.value) {
            this._overflowObserver = new ResizeObserver(() => {
                this._scheduleOverflowUpdate();
            });
            this._overflowObserver.observe(this.barItemsRef.value);
            this._scheduleOverflowUpdate();
        }

    }


    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value);

        if (name === "fullscreen") {
            if (value === "on") {

                this.requestFullscreen();
                // ...
            } else if (value === "off" && _old !== null) {
                // Only exit fullscreen if this is a real transition (not initial creation)
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

            display: block;

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative; 
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
        }

        .bar-label {
            flex: 0 1 auto;
            min-width: 50px;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .bar-items {
            flex: 1 1 0;
            min-width: 0;
            display: flex;
            gap: 5px;
            align-items: center;
            --thermal-direction: row;
        }

        .bar-items ::slotted([slot="bar-pre"]),
        .bar-items ::slotted([slot="bar-post"]) {
            flex-shrink: 0;
        }

        .bar-spacer {
            flex: 1 1 0;
            min-width: 0;
        }

        .bar-overflow-toggle {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            color: var(--thermal-foreground);
            cursor: pointer;
            padding: 0.3em 0.5em;
            line-height: 0;
        }

        .bar-overflow-toggle:hover {
            background-color: var(--thermal-slate-light);
        }

        .bar-overflow-panel {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            align-items: center;
            padding: calc( var(--thermal-gap) * 0.4 ) 0;
            border-top: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            --thermal-direction: row;
        }

        .bar-overflow-panel[hidden] {
            display: none;
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
    ${cache( map( ThermalAppElement.languages, lang => html`<div slot="option">
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

        return html`<header ${ref(this.headerRef)} class="app-header">

        <div class="bar">

            <div class="bar-label">
                ${ this.renderLabel() }
            </div>

            <div class="bar-items" ${ref(this.barItemsRef)}>

                <slot name="bar-pre" @slotchange=${this._scheduleOverflowUpdate}></slot>
                <div class="bar-spacer"></div>
                <slot name="bar-post" @slotchange=${this._scheduleOverflowUpdate}></slot>

                ${this._overflowCount > 0 ? html`
                    <button class="bar-overflow-toggle" @click=${this._toggleOverflow} title="Více možností">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>
                ` : nothing}

            </div>

            <slot name="close"></slot>

            ${this.renderFullscreenButton()}

            ${this.renderLanguageSwitcher()}

        </div>

        ${this._overflowCount > 0 ? html`
            <div class="bar-overflow-panel" ?hidden=${!this._overflowOpen}>
                <slot name="bar-overflow"></slot>
            </div>
        ` : nothing}

        ${this.preElements.length >= 0 ? html`<div class="pre">
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
`
    }

}