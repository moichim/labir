import { ThermalManager } from "@labir/core";
import { LitElement } from "lit";
import { BaseElement } from "../BaseElement";
import { defaultManager } from "../providers/getters";
export abstract class ManagerConsumer extends BaseElement {

    public readonly manager: ThermalManager;

    public constructor() {
        super();

        this.manager = this.getParentManagerOrDefault();

    }

    private getParentManagerOrDefault(): ThermalManager {

        const firstParent = this.parentElement;

        let node = firstParent;
        let manager: ThermalManager | undefined;

        // Otherwise iterate over all parents and look for manager
        while (node && !manager) {


            console.warn("jedu skrz", this, node);

            if ("manager" in node) {
                console.info( "Našel jsem manažera", node.manager );
                manager = node.manager as ThermalManager;
                node = null;
            } 
            else if (node.parentElement !== null) {
                node = node.parentElement;
            }
            else if (node instanceof LitElement) {



                const rootNode = node.getRootNode();

                console.info( "našel jsem root", rootNode );

                if ("host" in rootNode) {
                    node = rootNode.host as HTMLElement;
                } else if (rootNode instanceof DocumentFragment) {
                    // console.warn( "jsem fragment", rootNode );
                    // const r = rootNode.getRootNode();
                    // console.log( r.parentElement?.getRootNode().parentElement );
                    node = null;
                } else {
                    node = null;
                }

                // console.warn( "nový nod", node );

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

}