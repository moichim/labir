import { Instance, ThermalManager } from "@labirthermal/core";
import { AbstractSingleApp } from "./AbstractSingleApp";
import { html } from "lit";

export class ThermalFileAppElement extends AbstractSingleApp {

    protected get instance(): Instance {

        if ( ! this.fileProviderRef.value ) {
            throw new Error("FileProviderElement not found. Make sure to include a <thermal-file-provider> element in the DOM.");
        }

        else if ( ! this.fileProviderRef.value.file ) {
            throw new Error("FileProviderElement does not have a file. Make sure to set the 'url' property of the <thermal-file-provider> element to a valid thermal file URL.");
        }


        return this.fileProviderRef.value?.file
    }

    public get manager(): ThermalManager {
        return this.instance.group.registry.manager;
    }

    render(): unknown {

        return html``;

    }
    
}