import { ElementInheritingRegistry } from "../registry/ElementInherigintGegistry";
import { ContextConsumer } from "@lit/context";
import { ThermalGroup } from "@labir/core";
import { GroupContextElement } from "./GroupContextComponent";
import { GroupContext } from "../contexts";

export class ElementInheritingGroup extends ElementInheritingRegistry {

    private _injectedGroup = new ContextConsumer( this, {context: GroupContext, subscribe: true} );

    public group!: ThermalGroup;

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedGroup.value ) {
            this.group = this._injectedGroup.value;
        } else {
            this.group = this.registry.groups.addOrGetGroup( GroupContextElement.DEFAULT_NAME );
        }
    }
    
}