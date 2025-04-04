import { Instance } from "@labir/core";
import { provide } from "@lit/context";
import { PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AbstractFileProvider } from "../abstraction/AbstractFileProvider";
import { fileContext, fileProviderContext } from "../providers/context/FileContexts";

@customElement("file-mirror")
export class FileMirrorElement extends AbstractFileProvider {

    @provide({ context: fileProviderContext })
    protected providedSelf: FileMirrorElement = this;

    @provide({ context: fileContext })
    @property()
    public file?: Instance;

    @property({
        type: Boolean,
        converter: {
            fromAttribute(value: string) {
                return value === "true";
            },
            toAttribute(value: boolean | undefined) {
                if (value === true) {
                    return "true";
                }
                return "false";
            }
        }

    })
    public batch?: boolean;

    @property({
        type: String
    })
    public thermal!: string;

    @property({
        type: String
    })
    public visible?: string;

    @property({ type: String })
    public analysis1?: string;

    @property({ type: String })
    public analysis2?: string;

    @property({ type: String })
    public analysis3?: string;

    @property({ type: String })
    public analysis4?: string;

    @property({ type: String })
    public analysis5?: string;

    @property({ type: String })
    public analysis6?: string;

    @property({ type: String })
    public analysis7?: string;




    public updated(_changedProperties: PropertyValues<FileMirrorElement>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("thermal")) {
            const oldUrl = _changedProperties.get("thermal");

            if (oldUrl) {
                this.group.files.removeFile(oldUrl);
                this.file = undefined;

            }

        }

        if (_changedProperties.has("file")) {
            if (this.file) {
                this.loading = false;
                this.recieveInstance(this.file);

                setTimeout(() => this.file && this.onSuccess.call(this.file), 0);
            }
        }


    }

}