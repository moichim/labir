import { ThermalFileInstance } from "@labir/core";
import { ContextConsumer } from "@lit/context";
import { FileContext } from "../contexts";
import { ElementInheritingGroup } from "../group/ElementInheritingGroup";
import { state } from "lit/decorators.js";

export abstract class ElementInheritingFile extends ElementInheritingGroup {

    private _injectedFile = new ContextConsumer( this, { context: FileContext, subscribe: true } );

    @state()
    private _file?: ThermalFileInstance;

    /** The registry instance injected from above or created in place. */
    public get file() {return this._file;}

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedFile.value ) {
            this._file = this._injectedFile.value;
        }

    }

    

}