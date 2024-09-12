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
    public selfElement: FileDropinElement = this;

    @state()
    protected container: Ref<HTMLDivElement> = createRef();

    @state()
    protected loaded: boolean = false;

    @state()
    protected hover: boolean = false;

    @state()
    listener?: DropinElementListener;

    public static styles = css`

        .container {

        }

        .dropin {
            background: var( --thermal-slate );
            width: 100%;
            aspect-ratio: 4 / 3;
            transition: background-color .3s ease-in-out;
            cursor: pointer;
        }

        .hover {
            background: var( --thermal-slate-light );
        }
    
    `;


    constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.selfElement = this;
    }


    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if (this.container.value !== undefined) {

            this.container.value.addEventListener("mouseenter", () => {
                this.hover = true;
            });

            this.container.value.addEventListener("mouseleave", () => {
                this.hover = false;
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

        this.log(this.onSuccess);

        this.onLoading.call();

        const result = results[0];

        if (result) {

            if (result instanceof ThermalFileReader) {

                const instance = await result.createInstance(this.group);

                this.reader = result;

                this.loading = false;

                this.file = instance;

                // Call all callbacks
                this.onSuccess.call(instance);

                instance.group.registry.postLoadedProcessing();

            } else if (result instanceof ThermalFileFailure) {

                this.failure = result;

                this.onFailure.call(result);

            }

        }

        this.loaded = true;

    }



    /** Rendering */

    protected render(): unknown {

        if (this.file === undefined && this.loaded === false) {

            const dropinClasses = {
                dropin: true,
                hover: this.hover
            }

            return html`

                <div>
                    <div class="container">
                        <div ${ref(this.container)} class="${classMap(dropinClasses)}">

                            <div>Drag a thermal file here</div>

                            <div>${supportedFileTypes.map(item => item.map(item => item.extension))}</div>

                            <div>${this.listener?.input}</div>
                        
                        </div>
                    </div>
                </div>
            `;

        }

        return html`
            ${this.loaded ? html`<slot></slot>` : nothing}
            <slot name="mark"></slot>
        `;
    }

}