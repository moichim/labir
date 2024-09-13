import { AbstractFileResult, DropinElementListener, supportedFileTypes, ThermalFileFailure, ThermalFileReader } from "@labir/core";
import { provide } from "@lit/context";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { AbstractFileProvider } from "./AbstractFileProvider";
import { fileProviderContext } from "./context/FileContexts";

@customElement("file-dropin")
export class FileDropinElement extends AbstractFileProvider {



    @provide({ context: fileProviderContext })
    public providedSelf: FileDropinElement = this;

    @state()
    protected container: Ref<HTMLDivElement> = createRef();

    @state()
    protected ready: boolean = false;

    @state()
    protected hover: boolean = false;

    @state()
    public listener?: DropinElementListener;

    


    connectedCallback(): void {
        super.connectedCallback();
        this.providedSelf = this;
    }


    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if (this.container.value !== undefined) {

            this.container.value.addEventListener("mouseenter", () => {
                // this.hover = true;
            });

            this.container.value.addEventListener("mouseleave", () => {
                // this.hover = false;
            });

            this.listener = this.manager.service.handleDropzone(this.container.value);

            this.listener.onMouseEnter.add(this.UUID, () => {
                this.hover = true;
                this.log("enter");
            });

            this.listener.onMouseLeave.add(this.UUID, () => {
                this.hover = false;
                this.log("leave");
            });

            this.listener.onDrop.add(this.UUID, this.handleDrop.bind(this));

        }

    }

    public async handleDrop(results: AbstractFileResult[]) {

        this.onLoadingStart.call();

        const result = results[0];

        if (result) {

            if (result instanceof ThermalFileReader) {

                const instance = await result.createInstance(this.group);

                this.file = instance;

                // Call all callbacks
                this.onSuccess.call( instance );

                this.recieveInstance( instance );

                instance.group.registry.postLoadedProcessing();

            } else if (result instanceof ThermalFileFailure) {

                this.failure = result;

                this.onFailure.call(result);

            }

        }

        this.ready = true;
        this.loading = false;

    }


    public static styles = css`

        .container {

            

        }

        .dropin {
            
            width: 100%;
            aspect-ratio: 4 / 3;
            transition: all .3s ease-in-out;
            cursor: pointer;

            border-radius: var( --thermal-radius );
            padding: var( --thermal-gap );
            box-sizing: border-box;

            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;

            background: var( --thermal-slate );
            color: var( --thermal-foreground );

        }

        .dropin-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .dropin-title {
            font-weight: bold;
        }

        .dropin-supported-files {

            font-size: small !important;

        }

        .hover {
            opacity: .7;
        }

        thermal-button {
            cursor: pointer;
        }
    
    `;



    /** Rendering */

    protected render(): unknown {

        if ( this.ready === false) {

            const dropinClasses = {
                dropin: true,
                hover: this.hover
            }

            return html`

                    <div class="container">
                        <div ${ref(this.container)} class="${classMap(dropinClasses)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${supportedFileTypes.map(item => item.map(item => "." + item.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${() => {
                                        this.listener?.input?.click();
                                    }}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `;

        }

        return html`
            ${this.ready ? html`<slot></slot>` : nothing}
            <slot name="mark"></slot>
        `;
    }

}