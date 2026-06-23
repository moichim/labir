import { Instance, ThermalManager } from "@labirthermal/core";
import { css, html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";
import { AbstractSingleApp } from "./AbstractSingleApp";

export class ThermalFileAppElement extends AbstractSingleApp {

    protected get instance(): Instance {

        if (!this.fileProviderRef.value) {
            throw new Error("FileProviderElement not found. Make sure to include a <thermal-file-provider> element in the DOM.");
        }

        else if (!this.fileProviderRef.value.file) {
            throw new Error("FileProviderElement does not have a file. Make sure to set the 'url' property of the <thermal-file-provider> element to a valid thermal file URL.");
        }


        return this.fileProviderRef.value?.file
    }

    public get manager(): ThermalManager {
        return this.instance.group.registry.manager;
    }

    static styles = css`

        manager-provider,
        registry-provider,
        group-provider,
        file-provider {
            display: contents;
        }
    
    `;

    protected renderProviders(content: unknown): unknown {

        return html`<manager-provider
            slug=${this.UUID}
            .palette=${this.palette}
        >
            <registry-provider
                slug=${this.UUID}
                from=${ifDefined(this.from)}
                to=${ifDefined(this.to)}
                opacity=${this.opacity}
            >
                <group-provider slug=${this.UUID}>
                    <file-provider
                        ${ref(this.fileProviderRef)}
                        thermal=${this.url}
                        visible=${ifDefined(this.visible)}
                        batch=${true}
                        .autoclear=${true}
                        analysis1="${ifDefined(this.analysis1)}"
                        analysis2="${ifDefined(this.analysis2)}"
                        analysis3="${ifDefined(this.analysis3)}"
                        analysis4="${ifDefined(this.analysis4)}"
                        analysis5="${ifDefined(this.analysis5)}"
                        analysis6="${ifDefined(this.analysis6)}"
                        analysis7="${ifDefined(this.analysis7)}"
                    >
                        ${content}
                    </file-provider>
                </group-provider>
            </registry-provider>    
        </manager-provider>`;


    }

    render(): unknown {

        return this.renderProviders(html`<thermal-app label="something">
        
            <file-canvas></file-canvas>
            
        </thermal-app>`);

    }

}