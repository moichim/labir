import { ContextProvider } from "@lit/context";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingManager } from "../manager/ElementInherigingManager";
import { RegistryContext } from "./RegistryContext";

@customElement("thermal-registry")
export class ThermalRegistryElement extends ElementInheritingManager {

    static DEFAULT_NAME = "default_registry";

    static styles = css`

    button {
        color: pink;
    }

    div {
        color: navy;
    }
    
    `;

    @property( {type: String, attribute: true, reflect: true} )
    uuid: string = ThermalRegistryElement.DEFAULT_NAME;

    private provider = new ContextProvider( this, { context: RegistryContext, initialValue: undefined } )


    connectedCallback(): void {
        super.connectedCallback();

        const registry = this.manager.addOrGetRegistry( this.uuid )
        this.provider.setValue( registry, true );
    }

    

    public updated() {
        console.log( this );
    }

    protected render(): unknown {
        return html`
            <h2>Registr ${this.provider.value.id}</h2>
            <div>${this.manager.id}</div>
            <slot></slot>
        `
    }

}