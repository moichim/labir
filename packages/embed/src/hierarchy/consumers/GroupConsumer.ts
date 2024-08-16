import { ThermalGroup } from "@labir/core";
import { getDefaultGroup } from "../providers/getters";
import { RegistryConsumer } from "./RegistryConsumer";
import { LitElement } from "lit";

export abstract class GroupConsumer extends RegistryConsumer {

    private _group!: ThermalGroup;

    /** Accessible after connectedCallback, not in the constructor */
    public get group() {
        return this._group;
    }

    public constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
        this._group = this.getParentGroup();
    }

    private getParentGroup(): ThermalGroup {

        let node = this.parentElement;
        let group: ThermalGroup | undefined;


        // If there is no parent, return the default manager instead
        if (!node) {
            return getDefaultGroup(this.registry);
        }

        // Otherwise iterate over all parents and look for manager
        while (node && !group) {

            if ("group" in node) {
                if (node.group instanceof ThermalGroup) {
                    group = node.group;
                    node = null;
                }
            }

            if (node) {

                if (node.parentElement) {
                    node = node.parentElement;
                }

                else {


                    if (node instanceof LitElement) {

                        const currentNodeRoot = node.getRootNode() as unknown as HTMLElement;

                        if ("host" in currentNodeRoot) {
                            node = currentNodeRoot.host as HTMLElement;
                        }


                    } else {
                        node = node.parentElement;
                    }



                }


            }

        }

        // Return the found manager or the default one
        return group
            ? group
            : getDefaultGroup(this.registry);

    }

}