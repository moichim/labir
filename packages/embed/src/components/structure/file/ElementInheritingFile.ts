import { AbstractFile } from "@labir/core";
import { ContextConsumer } from "@lit/context";
import { FileContext } from "../contexts";
import { ElementInheritingGroup } from "../group/ElementInheritingGroup";
import { state } from "lit/decorators.js";
import { PropertyValueMap } from "lit";

export abstract class ElementInheritingFile extends ElementInheritingGroup {

    @state()
    protected _injectedFile = new ContextConsumer(this, { context: FileContext, subscribe: true });

    @state()
    public _file?: AbstractFile;

    /** The registry instance injected from above or created in place. */
    @state()
    public get file() { return this._file; }

    @state()
    protected ready: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();

        if (this._injectedFile.value) {
            this._file = this._injectedFile.value;
        }

    }

    protected update(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): boolean {
        super.update(_changedProperties);

        if ("_injectedFile" in _changedProperties) {
            // this._file = this._injectedFile.value;
            // this.ready = this._injectedFile.value !== undefined;
            // this.onFileLoaded( this._file );
        }

        return true;
    }



}