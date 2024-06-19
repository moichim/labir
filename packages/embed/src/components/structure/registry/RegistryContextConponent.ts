import { ContextProvider } from "@lit/context";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingManager } from "../manager/ElementInherigingManager";
import { RegistryContext } from "../contexts";

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

        blockquote {
            color: gray
        }

        h2 {
            color: yellow;
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
            <slot></slot>
        `
    }

}