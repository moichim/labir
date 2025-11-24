import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { css, CSSResultGroup, html, LitElement, nothing, PropertyValues } from "lit";
import "lit-code";
import { createRef, ref, Ref } from "lit/directives/ref.js";



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

        if (_changedProperties.has("defaultCode") && this.defaultCode) {
            this.setCode(this.defaultCode);
            this.setDefaultCode(this.defaultCode);
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

    iframe {
        background: white;
        border: none;
        width: 100%;
        display: block;
    }

    .browser__header {
        box-sizing: border-box;
        height: 2em;
        background: gray;
        border-radius: var( --playground-radius ) var( --playground-radius ) 0 0;
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
        variant="plain"
        size="lg"
        icon="clipboard"
        iconStyle="outline"
        tooltip="Kopírovat kód"
        @click=${() => { navigator.clipboard.writeText(this.getCodeForExport()); }}
    ></thermal-btn>

    <thermal-btn
        class="tab tab__icon"
        variant="plain"
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
        variant="plain" 
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
            </div>
            <iframe .srcdoc=${this.code} />
        </div>
    </section>

</main>`;

    }

}