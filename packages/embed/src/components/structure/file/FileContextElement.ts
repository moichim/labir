import { InstanceFetchCallback, ThermalFileInstance } from "@labir/core";
import { ElementInheritingGroup } from "../group/ElementInheritingGroup";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import {ref, Ref, createRef} from 'lit/directives/ref.js';
import { PropertyValueMap, css, html } from "lit";
import { ContextProvider } from "@lit/context";
import { FileContext } from "../contexts";


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

    @state()
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

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

            /* HTML: <div class="loader"></div> */

        .placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var( --thermal-slate );
        }
        .loader {
        width: calc( var( --thermal-gap ) * 2);
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(var(--thermal-background) calc(50% - 10px),#0000 0 calc(50% + 10px),var(--thermal-background) 0);
        background: 
            var(--c) 0%   100%,
            var(--c) 50%  100%,
            var(--c) 100% 100%;
        background-size: 20% calc(200% + 20px);
        animation:l4 1s infinite linear;
        }
        @keyframes l4 {
            33%  {background-position: 0% 50%,50% 100%,100% 100%}
            50%  {background-position: 0%  0%,50%  50%,100% 100%}
            66%  {background-position: 0%  0%,50%   0%,100%  50%}
            100% {background-position: 0%  0%,50%   0%,100%   0%}
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
        if (this.thermal) {

            const listener: InstanceFetchCallback = (instance, error): void => {
                if (instance) {
                    this.log( "file loaded", this.thermal );
                    this.provider.setValue(instance);
                    this.file = instance;
                    this.errors = [];
                } else if (error) {
                    this.errors = error.split("+|+");
                }
            };

            this.group.instances.enqueueAdd(this.thermal, this.visible, listener.bind( this ) )
        }
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

            const root = this.renderRoot.querySelector<HTMLDivElement>("#canvas-container")!;
            
            this.file?.mountToDom( root );
            this.file?.draw();

        }
    }

    
    @queryAssignedElements( { slot: "bar", flatten: true } )
    barElements!:Array<HTMLElement>;

    @queryAssignedElements( { slot: "pre", flatten: true } )
    pre!:Array<HTMLElement>;


    protected render(): unknown {
        return html`

            
        ${ this.barElements.length >= 0 ? html`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        ` : "" }

        ${ this.pre.length >= 0 ? html`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        ` : "" }


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${ this.file === undefined ? html`
                <div class="placeholder"><div class="loader"></div></div>
            ` : "" }
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

                        <thermal-dialog-component label="Loading error">

                            <thermal-button slot="invoker">Info</thermal-button>

                            <div slot="content">
                            
                                <dl>
                                    <dt>URL:</dt>
                                    <dd>${this.thermal}</dd>
                                    <dt>Errors:</dt>
                                    <ul>
                                    ${this.errors.map(error => html`<li>${error}</li>`)}
                                    </ul>
                                </dl>
                            
                            </div>
                        
                        
                        </thermal-dialog-component>

                    </div>
                </div>    
            `
                : ""
            }
            <slot></slot>

            </div>
        </div>
        
        `
    }

}