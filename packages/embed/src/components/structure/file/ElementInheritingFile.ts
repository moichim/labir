import { ThermalFileInstance } from "@labir/core";
import { ContextConsumer } from "@lit/context";
import { FileContext } from "../contexts";
import { ElementInheritingGroup } from "../group/ElementInheritingGroup";
import { state } from "lit/decorators.js";
import { PropertyValueMap } from "lit";

export abstract class ElementInheritingFile extends ElementInheritingGroup {

    @state()
    protected _injectedFile = new ContextConsumer( this, { context: FileContext, subscribe: true } );

    @state()
    protected _file?: ThermalFileInstance;

    /** The registry instance injected from above or created in place. */
    @state()
    public get file() {return this._file;}

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedFile.value ) {
            this._file = this._injectedFile.value;
        }

    }

   protected willUpdate(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): boolean {
       super.willUpdate( _changedProperties );

       if ( "_injectedFile" in _changedProperties ) {
        this._file = this._injectedFile.value;
       }

       return true;
   }

    

}