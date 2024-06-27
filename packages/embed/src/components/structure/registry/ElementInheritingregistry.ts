import { ThermalRegistry } from "@labir/core";
import { ContextConsumer } from "@lit/context";
import { ElementInheritingManager } from "../manager/ElementInherigingManager";
import { RegistryContext } from "../contexts";
import { state } from "lit/decorators.js";

export abstract class ElementInheritingRegistry extends ElementInheritingManager {

    public _injectedRegistry = new ContextConsumer( this, { context: RegistryContext, subscribe: true } );

    private _registry!: ThermalRegistry;

    /** The registry instance injected from above or created in place. */
    @state()
    public get registry() {return this._registry;}

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedRegistry.value ) {
            this._registry = this._injectedRegistry.value;
        } else {
            this._registry = this.manager.addOrGetRegistry( this.identificator );
        }

    }

    

}