import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { css, CSSResultGroup, html, LitElement, nothing, PropertyValues } from "lit";
import "lit-code";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { booleanConverter } from "../utils/converters/booleanConverter";



@customElement('playground-element')
export class PlaygroundElement extends BaseElement {

    private codeEditorRef: Ref<LitElement & {
        setCode(code: string): void;
    }> = createRef();

    @state()
    @queryAssignedElements({ slot: 'code', flatten: true })
    private _listItems!: Array<HTMLElement>;

    @property({ type: String })
    public title: string = "Interactive Playground";

    @property({ type: String })
    public subtitle?: string;

    @property({ type: Boolean, reflect: true, converter: booleanConverter(false)})
    protected fullscreen: boolean = false;

    @state()
    private fullscreenIcon: string = "bigger";

    @state()
    private fullscreenTooltip: string = "Fullscreen";

    @state()
    private browserTitle: string = "Labirthermal Playground";


    @state()
    private code: string = "";

    @state()
    private defaultCode?: string;







    protected static LIB_LIT_CODE_ID: string = "playground-element-lit-code";
    protected static LIB_PRISM_JS_ID: string = "playground-element-prism-js";
    protected static LIB_PRISM_CSS_ID: string = "playground-element-prism-css";
    public static get LIBS_IMPORTED(): boolean {
        const lit_code = document.getElementById(PlaygroundElement.LIB_LIT_CODE_ID);
        const prism = document.getElementById(PlaygroundElement.LIB_PRISM_JS_ID);
        const prism_css = document.getElementById(PlaygroundElement.LIB_PRISM_CSS_ID);
        return Boolean(lit_code && prism && prism_css);
    }

    private static INJECTED_SCRIPT: string = `<script>
    (function() {
        const send = (type, args) => {
            window.parent.postMessage({ type, args }, '*');
        };
        ['log', 'error', 'warn', 'info'].forEach(fn => {
            const orig = console[fn];
            console[fn] = function(...args) {
                send(fn, args);
                orig.apply(console, args);
            };
        });
    })();
</script>`;



    private importJsLib(
        id: string,
        url: string
    ): void {
        const element = document.createElement("script");
        element.id = id;
        element.src = url;
        element.async = true;
        document.head.appendChild(element);
    }

    private importCssLib(
        id: string,
        url: string
    ): void {
        const element = document.createElement("link");
        element.id = id;
        element.rel = "stylesheet";
        element.href = url;
        document.head.appendChild(element);
    }

    public connectedCallback(): void {

        super.connectedCallback();
        this.importCssLib(
            PlaygroundElement.LIB_PRISM_CSS_ID,
            "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/themes/prism.min.css"
        );
        this.importJsLib(
            PlaygroundElement.LIB_PRISM_JS_ID,
            "https://cdn.jsdelivr.net/npm/prismjs@1.30.0/plugins/autoloader/prism-autoloader.min.js"
        );

        const slot = this.shadowRoot?.querySelector("slot[name=code]") as HTMLSlotElement;
        if (slot) {
            slot.addEventListener("slotchange", () => {
                const updated = this.getSlottedCode();
                if (updated) {
                    this.setCode(updated);
                    this.setDefaultCode(updated);
                }
            });
        }

        document.addEventListener("fullscreenchange", this.handleFullscreenChange);

    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
        document.removeEventListener("fullscreenchange", this.handleFullscreenChange);
    }

    private handleFullscreenChange = (): void => {

        if ( ! document.fullscreenElement && this.fullscreen ) {
            this.fullscreen = false;
            this.fullscreenIcon = "bigger";
            this.fullscreenTooltip = "Fullscreen";
        }

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {

        super.firstUpdated(_changedProperties);

        const defaultSrcDoc = this.getSlottedCode();
        if (defaultSrcDoc) {
            this.defaultCode = defaultSrcDoc;
        }

    }



    protected willUpdate(_changedProperties: PropertyValues): void {

        super.willUpdate(_changedProperties);

        if ( _changedProperties.has("title") || _changedProperties.has("code") ) {

            const titleFromCode = this.code.match(/<title>(.*?)<\/title>/i);
            if (titleFromCode && titleFromCode[1]) {
                this.browserTitle = titleFromCode[1];
            } else {
                this.browserTitle = this.title;
            }
        }

        if (_changedProperties.has("defaultCode") && this.defaultCode) {
            this.setCode(this.defaultCode);
            this.setDefaultCode(this.defaultCode);
        }

        if ( _changedProperties.has("fullscreen") ) {
            if (this.fullscreen) {
                this.fullscreenIcon = "smaller";
                this.fullscreenTooltip = "Exit Fullscreen";
            } else {
                this.fullscreenIcon = "bigger";
                this.fullscreenTooltip = "Fullscreen";
            }
        }
    }


    /** Sets the srcdoc prepending the injected script */
    public setCode(srcdoc: string): void {
        this.code = PlaygroundElement.INJECTED_SCRIPT + srcdoc;
    }

    /** Gets the srcdoc without the injected script */
    private getCodeForExport(): string {
        return this.code.replace(PlaygroundElement.INJECTED_SCRIPT, "");
    }

    /** Set the default code & update the current code */
    private setDefaultCode(
        code?: string
    ): void {
        this.defaultCode = code;
        this.codeEditorRef.value?.setCode(code!);
        if (code) this.setCode(code!);
    }


    /** Looks into the first code element slotted inside the code slot and reads its inner html */
    private getSlottedCode(): string | undefined {

        if (this._listItems.length > 0) {
            const element = this._listItems[0];
            if (element.tagName.toLowerCase() === "code") {
                return element.innerHTML;
            }
        }

    }

    static styles?: CSSResultGroup | undefined = css`

/** Variables */

:host {
    --playground-foreground: var( --thermal-foreground );
    --playground-background: var( --thermal-slate-light );
    --playground-primary: var( --thermal-primary );
    --playground-light: var( --thermal-slate-light );
    --playground-radius: var( --thermal-radius );
    --playground-fs: var( --thermal-fs );
    --playground-gap: var( --thermal-gap, 1em );
    --playground-ff-ui: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --playground-ff-mono: monospace;
}

:host {
    display: block;
    width: 100%;
    box-sizing: border-box;

    font-size: var( --playground-fs );
    font-family: var( --playground-ff-ui );
    line-height: 1.2em;

    color: var( --playground-foreground );

}

:host( [fullscreen="true"] ) {
    background: var( --thermal-background );
    padding: var( --playground-gap );
    height: 100vh;
}

.force-hide {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important
    position: absolute !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    top: -999px !important;
    left: -999px !important;
}

.opaque {
    opacity: 0.2;
    transition: opacity 0.3s ease-in-out;
    cursor: help;
    &:hover {
        opacity: 1;
    }
}






/** Overrides */

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-weight: normal;
    color: inherit;
    font-size: inherit;
}


/** UI COMPONENTS */

.tabs {
    display: flex;
    gap: .5em;
    align-items: center;
}
.tab {

}
.tab__bg {
    color: var( --playground-foreground );
    padding: .5em .75em;
    background: var( --playground-background);
    border-radius: var( --playground-radius ) var( --playground-radius ) 0 0;
}

.tab__icon {
    cursor: pointer;
    color: var( --playground-foreground );
    &:hover {
        color: var( --playground-primary );
    }
    &.tab__icon_right {
        justify-self: flex-end;
        margin-left: auto;
    }
}

.tab__title {
    font-weight: bold;
}

/** PARTS OF THE UI */

.head {
        
}

.main {
    background: var( --playground-background );
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var( --playground-gap );

    & > section {
        box-sizing: border-box;
    }
}

.editor {
    
}

.preview {
    padding: 2em;
}

.browser {

    &,
    .browser__header {
        border-radius: var( --playground-radius ) var( --playground-radius ) 0 0;
    }

    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    border: 1px solid buttonborder;

    iframe {
        background: white;
        border: none;
        width: 100%;
        display: block;
    }

    .browser__header {
        box-sizing: border-box;
        width: 100%;
        padding: .5em;
        border-radius: var( --playground-radius ) var( --playground-radius ) 0 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;

        color: graytext;

        background: buttonface;
        
    }

    .browser__buttons {
        display: flex;
        gap: 0.5em;
    }

    .browser__button {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        display: block;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .browser__button_red { background: #ff605c; }
    .browser__button_yellow { background: #ffbd44; }
    .browser__button_green { background: #00ca56; }

    .browser__bar {
        padding: .2em .5em;
        box-sizing: border-box;
        background: field;
        border-radius: .5em;
        display: flex; 
        gap: 1em;
        flex-grow: 1;
    }

    .browser__bar_icons {
        display: flex;
        gap: .5em;
        align-items: center;
        svg {
            display: inline-flex;
            width: 1em;
            height: 1em;
        }
    }

    .browser__bar_title {
        text-align: center;
        flex-grow: 1;
    }

}

.console {

}

/** The code editor */
lit-code {
    --font-family: monospace;
    --font-size:   12pt;
    --line-height: 14pt;
    --lines-width: 40px;

    --editor-bg-color:    var( --playground-background );
    --editor-text-color:  black;
    --editor-caret-color: var(--editor-text-color);
    --editor-sel-color:   #b9ecff;

    --lines-bg-color:     var( --playground-background );
    --lines-text-color:   black;
    --scroll-track-color: #aaa;
    --scroll-thumb-color: #eee;

    /*lit-theme colors for default highlight tokens */
    --hl-color-string:      #00ae22;
    --hl-color-function:    #004eff;
    --hl-color-number:      #dd9031;
    --hl-color-operator:    #5a5a5a;
    --hl-color-class-name:  #78c3ca;
    --hl-color-punctuation: #4a4a4a;
    --hl-color-keyword:     #8500ff;
    --hl-color-comment:     #aaa;
}
    
    `;




    protected render(): unknown {

        return html`<div class="force-hide">
    <slot name="code"></slot>
</div>

<header class="head tabs">
    <h1 class="tab tab__bg tab__title">${this.title}</h1>
    
    <thermal-btn
        class="tab tab__icon"
        variant="text"
        size="lg"
        icon="clipboard"
        iconStyle="outline"
        tooltip="Kopírovat kód"
        @click=${() => { navigator.clipboard.writeText(this.getCodeForExport()); }}
    ></thermal-btn>

    <thermal-btn
        class="tab tab__icon"
        variant="text"
        size="lg"
        icon="download"
        iconStyle="micro"
        tooltip="Stáhnout kód"
        @click=${() => {
            const blob = new Blob([this.getCodeForExport()], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${this.title}.html`;
            a.click();
            URL.revokeObjectURL(url);
        }}
    ></thermal-btn>

    ${this.defaultCode ? html`<thermal-btn
        class="tab tab__icon"
        variant="text" 
        size="lg"
        icon="back"
        iconStyle="micro"
        tooltip="Resetovat kód"
        @click=${() => {
            this.setCode(this.defaultCode!);
            this.codeEditorRef.value?.setCode(this.defaultCode!);
        }}
    ></thermal-btn>` : nothing}

    ${this.subtitle ? html`<span class="opaque">${this.subtitle}</span>` : nothing}

    <thermal-btn
        class="tab tab__icon tab__icon_right"
        variant="text"
        size="lg"
        icon="${this.fullscreenIcon}"
        iconStyle="mini"
        tooltip="${this.fullscreenTooltip}"
        @click=${() => {
            if (this.fullscreen) {
                document.exitFullscreen();
                return;
            } else {
                this.fullscreen = true;
                this.requestFullscreen();
            }
        }}
    ></thermal-btn>

</header>

<main class="main">
    
    <section class="editor">
        <lit-code 
            language="html"
            linenumbers="true"
            ${ref(this.codeEditorRef)}
            @update=${(e: CustomEvent) => {
                this.code = PlaygroundElement.INJECTED_SCRIPT + e.detail as string;
            }}
        ></lit-code>
    </section>

    <section class="preview">

        <div class="browser">
            <div class="browser__header">
                <div class="browser__buttons">
                    <button class="browser__button browser__button_red"></button>
                    <button class="browser__button browser__button_yellow"></button>
                    <button class="browser__button browser__button_green"></button>
                </div>
                <div class="browser__bar_icons">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <div class="browser__bar">
                    <div class="browser__bar_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <div class="browser__bar_title">
                        ${this.browserTitle}
                    </div>
                    <div class="browser__bar_icons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                        </svg>
                    </div>
                </div>
                <div class="browser__bar_icons">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <iframe .srcdoc=${this.code} />
        </div>
    </section>

</main>`;

    }

}