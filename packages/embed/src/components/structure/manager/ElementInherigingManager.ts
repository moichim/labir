import { ContextConsumer } from "@lit/context";
import { LitElement } from "lit";
import { ManagerContext } from "./ManagerContext";
import { ThermalManager } from "@labir/core";

export abstract class ElementInheritingManager extends LitElement {

    private _injectedManager = new ContextConsumer( this, { context: ManagerContext, subscribe: true } );

    public manager!: ThermalManager;

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedManager.value ) {
            this.manager = this._injectedManager.value;
        } else {
            this.manager = new ThermalManager;
        }

    }

    

}