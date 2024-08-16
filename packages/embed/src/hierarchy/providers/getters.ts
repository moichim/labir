import { ThermalGroup, ThermalManager, ThermalRegistry } from "@labir/core";
import { LitElement } from "lit";
import { ManagerProviderElement } from "./ManagerProvider";

export const defaultManager = new ThermalManager;

export const defaultRegistryKey = "__internal_default_registry";

export const defaultGroupyKey = "__internal_default_group";

export const getParentManagerOrDefault = (
    firstParent: HTMLElement | null | undefined
) => {

    console.warn( "firstParent", firstParent );

    let node = firstParent;
    let manager: ThermalManager | undefined;


    // If there is no parent, return the default manager instead
    if (!node) {
        return defaultManager;
    }

    // Otherwise iterate over all parents and look for manager
    while (node && !manager) {


        console.log(node, node instanceof ManagerProviderElement, node.parentElement);

        if ( node instanceof ManagerProviderElement ) {
            manager = node.manager;
            node = null;
        } else if ( node.parentElement !== null ) {
            node = node.parentElement;
        } else if ( node instanceof LitElement ) {

            

            const rootNode = node.getRootNode();

                if ("host" in rootNode) {
                    node = rootNode.host as HTMLElement;
                } else if ( rootNode instanceof DocumentFragment ) {
                    console.warn( "jsem fragment", rootNode );
                    const r = rootNode.getRootNode();
                    console.log( r.parentElement?.getRootNode().parentElement );
                    node = null;
                } else {
                    node = null;
                }

                console.warn( "nový nod", node );

        } else {
            node = node.parentElement;
        }

        /*
        if ("manager" in node) {
            manager = node.manager as ThermalManager;
            node = null;
        }
        else if (node.parentElement) {
            node = node.parentElement;
        } else if (node instanceof LitElement) {

            if (node.parentElement) {
                node = node.parentElement;
            } else {
                const rootNode = node.getRootNode();

                if ("host" in rootNode) {
                    node = rootNode.host as HTMLElement;
                } else {
                    node = null;
                }
            }

        } else {
            node = node.parentElement;
        }

        */

    }

    // Return the found manager or the default one
    return manager
        ? manager
        : defaultManager;


}

export const getDefaultRegistry = (
    manager: ThermalManager
) => {
    return manager.addOrGetRegistry(defaultRegistryKey);
}

export const getDefaultGroup = (
    registry: ThermalRegistry
): ThermalGroup => {
    return registry.groups.addOrGetGroup(defaultGroupyKey);
}