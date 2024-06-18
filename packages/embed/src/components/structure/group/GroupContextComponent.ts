import { ThermalGroup } from "@labir/core";
import { ContextProvider } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInherigingRegistry } from "../registry/ElementInherigintGegistry";
import { GroupContext } from "./GroupContext";

@customElement("thermal-group")
export class GroupContextElement extends ElementInherigingRegistry {

    static DEFAULT_NAME = "default_group";

    group!: ThermalGroup;

    @property( {type: String, attribute: true, reflect: true} )
    uuid: string = GroupContextElement.DEFAULT_NAME;

    @property( {type: String, attribute: true, reflect: true} )
    name?: string;

    @property( {type: String, attribute: true, reflect: true} )
    description?: string;

    connectedCallback(): void {
        super.connectedCallback();

        this.group = this.registry.groups.addOrGetGroup( this.uuid, this.name, this.description )
        this.provider.setValue( this.group, true );
    }


    private provider = new ContextProvider( this, { context: GroupContext, initialValue: undefined } )
    

    public updated( _changedProperties: Map<string,string> ) {
        console.log( "updated group", this );

        if ( _changedProperties.has( "name" ) ) {
            console.log( _changedProperties, this.name );
        }

    }

    protected render(): unknown {
        return html`
            <h2>Skupina: ${this.group.id}</h2>
            <table>
                <tr>
                    <td>${this.provider.value.name}</td>
                    <td>${this.group.description}</td>
                </tr>
            </table>
            <div>Manager ID: ${this.manager.id}</div>
            <div>REgistry ID: ${this.registry.id}<div>
            <div>Group ID:${this.provider.value.id}<div>
            <slot></slot>
        `
    }

}