import { ThermalFileInstance } from "@labir/core";
import { ElementInheritingGroup } from "../group/ElementInheritingGroup";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import { PropertyValueMap, css, html } from "lit";
import { ContextProvider } from "@lit/context";
import { FileContext } from "../contexts";

import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-dialog.js';

@customElement("thermal-image")
export class FileContextElement extends ElementInheritingGroup {

    protected getClassName(): string {
        return "FileContextElement";
    }

    canvasContainer: Ref<HTMLDivElement> = createRef();

    @property({ type: String, reflect: true })
    thermal?: string;

    @property({ type: String, reflect: true })
    visible?: string;

    @state()
    file?: ThermalFileInstance

    @state()
    protected errors: string[] = [];


    @queryAssignedElements({ slot: "bar", flatten: true })
    protected barItems?: Array<HTMLElement>

    private provider = new ContextProvider(this, { context: FileContext, initialValue: undefined });

    constructor() {
        super();
    }

    static styles = css`

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

    .container {

        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 4 / 3;
    
        margin: 0;
        padding: 0;
    
        position: relative;

        background: var( --thermal-slate-light );

        color: var( --thermal-foreground );

        font-size: var( --thermal-fs );

    }

    .errors {
        box-sizing: border-box;
        padding: var( --thermal-gap );
        width: 100%;
        height: 100%;
        margin: 0;
        background: var( --thermal-slate-light );
        color: var( --thermal-foreground );

        .wrapper {
        
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: calc( var( --thermal-gap ) * 0.5 );

            box-sizing: border-box;
            width: 100%;
            height: 100%;

            border: 2px dashed var( --thermal-slate-dark );
            border-radius: calc( var( --thermal-radius ) * 2 );

            padding: var( --thermal-gap );

        }

        .icon {
            width: 1.5rem;
        }

        .url {
            font-size: small;
            color: var( --thermal-slate-dark );
        }

        .error-button {
            margin: 0;
            padding: 0;
            background: transparent;
            min-width: 2rem;
            border: 0;
            cursor: pointer;
            font-size: small;
            color: var( --thermal-slate-dark );
            border-bottom: 1px dotted var( --thermal-slate-dark );
        }

        .dialog {

            padding: 2rem;
            background: white;
            max-width: 500px;
            border-radius: 2rem;
            position: relative;

            h2 {
                margin: 0;
                padding: 0;
            }

            dt {
                color: gray;
                margin-bottom: .2rem;
                margin-top: 1rem;
            }

            dd {
                padding: 0;
                margin: 0;
            }

            .close-button {
                position: absolute;
                top: 2rem;
                right: 2rem;
                background: transparent;
                border: 0;
                cursor: pointer;
                font-size: 2rem;
                line-height: 1rem;
                &:hover {
                    color: blue;
                }
            }
        
        }

        

    }


    .bar {
        display: flex;
        gap: var( --thermal-gap );
    }
    
    `;


    public onFileChanged(newValue: ThermalFileInstance | undefined, oldValue: ThermalFileInstance | undefined) {
        console.log(newValue, oldValue);
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.enqueueInTheRegistry();

    }

    disconnectedCallback(): void {
        if (this.file) {
            this.file.unmountFromDom();
        }
    }


    protected enqueueInTheRegistry(): void {
        if (this.thermal)
            this.group.instances.enqueueAdd(this.thermal, this.visible, (instance, error) => {
        console.log( instance );
                if (instance) {
                    this.provider.setValue(instance);
                    this.file = instance;
                    this.errors = [];
                } else if (error) {
                    this.errors = error.split("+|+");
                }
            })
    }

    willUpdate(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        super.willUpdate(_changedProperties)

        // If URLs changed, project them into loader
        if (_changedProperties.has("thermal") || _changedProperties.has("visible")) {
            // ...
        }

        // If file changed, unmount it
        if (_changedProperties.has("file")) {
            if (this.file) {
                this.file.unmountFromDom();
            }
        }
    }

    protected update(changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        super.update(changedProperties);

        // After the update, mount the entire new file to the DOM
        if (changedProperties.has("file")) {

            this.log( "file changed", this.file );

            const root = this.renderRoot.querySelector<HTMLDivElement>("#canvas-container")!;

            this.log( "canvasContainer", this.canvasContainer.value! )

            
            this.file?.mountToDom( root );
            this.file?.draw();

        }
    }

    



    protected render(): unknown {
        return html`
        <div class="bar"><slot name="bar"></slot></div>
        <div class="container">
            <div ${ref(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length > 0 ? html`
                <div class="errors">
                    <div class="wrapper">

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <div>
                        File loading error
                    </div>

                    <div class="url">
                        ${this.thermal}
                    </div>

                        <lion-dialog>
                            
                            <button slot="invoker" class="error-button">
                                details
                            </button>

                            <div slot="content" class="dialog">
                                <h2>Loading errors</h2>
                                <dl>
                                    <dt>URL:</dt>
                                    <dd>${this.thermal}</dd>
                                    <dt>Errors:</dt>
                                    <ul>
                                    ${this.errors.map(error => html`<li>${error}</li>`)}
                                    </ul>
                                </dl>
                                <button
                                    class="close-button"
                                    @click=${(e: { target: { dispatchEvent: (arg0: Event) => void; }; }) => e.target.dispatchEvent(new Event('close-overlay', { bubbles: true }))}
                                >
                                    ⨯
                                </button>
                            </div>
                        </lion-dialog>
                    </div>
                </div>    
            `
                : ""
            }
            <slot></slot>
        </div>
        
        `
    }

}