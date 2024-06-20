import { ThermalGroup } from "@labir/core";
import { ContextProvider } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingRegistry } from "../registry/ElementInherigintGegistry";
import { GroupContext } from "../contexts";

@customElement("thermal-group")
export class GroupContextElement extends ElementInheritingRegistry {

    protected getClassName(): string {
        return "ThermalManagerElement";
    }

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

        if ( _changedProperties.has( "name" ) ) {
            this.log( _changedProperties, this.name );
        }

    }

    protected render(): unknown {
        return html`
            <slot></slot>
        `
    }

}