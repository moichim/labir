import { ThermalRegistry } from "@labir/core";
import { ContextConsumer } from "@lit/context";
import { ElementInheritingManager } from "../manager/ElementInherigingManager";
import { RegistryContext } from "./RegistryContext";
import { ThermalRegistryElement } from "./RegistryContextConponent";

export abstract class ElementInherigingRegistry extends ElementInheritingManager {

    private _injectedRegistry = new ContextConsumer( this, { context: RegistryContext, subscribe: true } );

    public registry!: ThermalRegistry;

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedRegistry.value ) {
            this.registry = this._injectedRegistry.value;
        } else {
            this.registry = this.manager.addOrGetRegistry( ThermalRegistryElement.DEFAULT_NAME );
        }

    }

    

}