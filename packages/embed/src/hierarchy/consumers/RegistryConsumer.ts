import { ThermalRegistry } from "@labir/core";
import { ManagerConsumer } from "./ManagerConsumer";
import { getDefaultRegistry } from "../providers/getters";
import { RegistryProviderElement } from "../providers/RegistryProvider";

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

            currentParent = currentParent.parentElement;

        }

        return reg
            ? reg
            : getDefaultRegistry( this.manager );
    
    
    }

}