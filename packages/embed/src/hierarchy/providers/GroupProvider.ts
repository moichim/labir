import { ThermalGroup } from "@labir/core";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RegistryConsumer } from "../consumers/RegistryConsumer";
import { getDefaultGroup } from "./getters";

@customElement("group-provider")
export class GroupProviderElement extends RegistryConsumer {

    /** Registry is stored internally because it is created in connected callback - not in the constructor */
    private _group!: ThermalGroup;

    /** Accessible after connectedCallback, not in the constructor */
    public get group() {
        return this._group;
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
            this._group = this.registry.groups.addOrGetGroup( this.id );
        } else {
            this._group = getDefaultGroup( this.registry );
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