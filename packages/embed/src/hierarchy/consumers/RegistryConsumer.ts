import { ThermalRegistry } from "@labir/core";
import { ManagerConsumer } from "./ManagerConsumer";
import { getDefaultRegistry } from "../providers/getters";
import { RegistryProviderElement } from "../providers/RegistryProvider";
import { LitElement } from "lit";

export abstract class RegistryConsumer extends ManagerConsumer {

    private _registry!: ThermalRegistry;

    /** Accessible after connectedCallback, not in the constructor */
    public get registry() {
        return this._registry;
    }

    public constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
        this._registry = this.getParentRegistry();
    }

    private getParentRegistry(): ThermalRegistry {

        let currentParent: HTMLElement | RegistryProviderElement | null = this.parentElement;

        let reg: ThermalRegistry | undefined;

        if ( currentParent === null ) {
            return getDefaultRegistry( this.manager );
        }

        while ( currentParent && reg === undefined) {

            if ( currentParent instanceof RegistryProviderElement ) {
                reg = currentParent.registry;
            }

            // If parent is a custom element, there is a chance that the parent is above the shadow DOM
                if ( currentParent instanceof LitElement ) {

                    // If the parent has a parent, take it
                    if ( currentParent.parentElement ) {
                        currentParent = currentParent.parentElement
                    } 
                    // If the parent has no parent, it means the component is nested and therefore we need to look beyond the shadow root boundaries
                    else {

                        const node = currentParent.getRootNode() as unknown as Element;

                        if ( "host" in node ) {
                            currentParent = node.host as HTMLElement; //eslint-disable-line
                        }
                    }

                } else {
                    currentParent = currentParent.parentElement;
                }

            

        }

        return reg
            ? reg
            : getDefaultRegistry( this.manager );
    
    
    }

}