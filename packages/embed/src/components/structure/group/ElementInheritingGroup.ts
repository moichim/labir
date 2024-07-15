import { ElementInheritingRegistry } from "../registry/ElementInheritingregistry";
import { ContextConsumer } from "@lit/context";
import { ThermalGroup } from "@labir/core";
import { GroupContext } from "../contexts";

export abstract class ElementInheritingGroup extends ElementInheritingRegistry {

    public _injectedGroup = new ContextConsumer( this, {context: GroupContext, subscribe: true} );

    private _group!: ThermalGroup;

    /** The group instance injected from above or created in place. */
    public get group() { return this._group }

    connectedCallback(): void {
        super.connectedCallback();

        if ( this._injectedGroup.value ) {
            this._group = this._injectedGroup.value;
        } else {
            this._group = this.registry.groups.addOrGetGroup( this.identificator );
        }
    }
    
}