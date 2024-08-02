import { ThermalRegistry } from "@labir/core";
import { ManagerConsumer } from "./ManagerConsumer";
import { getDefaultRegistry } from "../providers/getters";

export abstract class RegistryConsumer extends ManagerConsumer {

    private _registry!: ThermalRegistry;

    /** Accessible after connectedCallback, not in the constructor */
    public get registry() {
        return this._registry;
    }

    public constructor() {
        super();

        this._registry = this.getParentRegistry();

    }

    private getParentRegistry(): ThermalRegistry {
    
        let node = this.parentElement;
        let registry: ThermalRegistry | undefined;
    
    
        // If there is no parent, return the default manager instead
        if (!node) {
            return getDefaultRegistry( this.manager );
        }
    
        // Otherwise iterate over all parents and look for manager
        while (node && !registry) {
    
            if ("registry" in node) {
                if (node.registry instanceof ThermalRegistry) {
                    registry = node.registry;
                    node = null;
                }
            }
    
            if (node) {
                node = node.parentElement;
            }
    
        }
    
        // Return the found manager or the default one
        return registry 
            ? registry 
            : getDefaultRegistry( this.manager );
    
    
    }

}