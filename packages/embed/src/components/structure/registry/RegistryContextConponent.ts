import { ContextProvider } from "@lit/context";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingManager } from "../manager/ElementInherigingManager";
import { RegistryContext } from "../contexts";

@customElement("thermal-registry")
export class ThermalRegistryElement extends ElementInheritingManager {

    protected getClassName(): string {
        return "ThermalRegistryElement";
    }

    static DEFAULT_NAME = "default_registry";

    @property( {type: String, attribute: true, reflect: true} )
    uuid: string = ThermalRegistryElement.DEFAULT_NAME;

    private registryProvider = new ContextProvider( this, { context: RegistryContext, initialValue: undefined } )


    connectedCallback(): void {
        super.connectedCallback();

        const registry = this.manager.addOrGetRegistry( this.uuid )
        this.registryProvider.setValue( registry, true );
    }

    protected render(): unknown {
        return html`
            <slot></slot>
        `
    }

}