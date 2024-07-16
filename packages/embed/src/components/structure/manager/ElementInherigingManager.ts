import { ThermalManager } from "@labir/core";
import { ContextConsumer } from "@lit/context";
import { AbstractStructureElement } from "../AbstractStructureElement";
import { ManagerContext } from "../contexts";

export abstract class ElementInheritingManager extends AbstractStructureElement {

    public _injectedManager = new ContextConsumer( this, { context: ManagerContext, subscribe: true } );

    private _manager!: ThermalManager;

    /** The manager instance injected from above or created in place. */
    public get manager() { return this._manager }

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedManager.value ) {
            this._manager = this._injectedManager.value;
        } else {
            this._manager = new ThermalManager;
        }

    }

    

}