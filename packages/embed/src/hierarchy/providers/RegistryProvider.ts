import { ThermalRegistry } from "@labir/core";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ManagerConsumer } from "../consumers/ManagerConsumer";
import { getDefaultRegistry } from "./getters";

@customElement("registry-provider")
export class RegistryProviderElement extends ManagerConsumer {

    /** Registry is stored internally because it is created in connected callback - not in the constructor */
    private _registry!: ThermalRegistry;

    /** Accessible after connectedCallback, not in the constructor */
    public get registry() {
        return this._registry;
    }

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public id!: string;


    connectedCallback(): void {
        super.connectedCallback();
        if ( this.id ) {
            this._registry = this.manager.addOrGetRegistry( this.id );
        } else {
            this._registry = getDefaultRegistry( this.manager );
        }
        
    }

    attributeChangedCallback(
        name: string, 
        _old: string | null, 
        value: string | null
    ): void {

        super.attributeChangedCallback( name, _old, value );

        if ( name === "id" ) {
            // if ( this._registry === undefined && value ) {
                // this._registry = this.manager.addOrGetRegistry( value );
            // }
        }
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}