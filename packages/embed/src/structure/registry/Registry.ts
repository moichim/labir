import { ContextProvider } from "@lit/context";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryContextNew } from "../../components/structure/contextsNew";
import { ElementWithManager } from "../manger/ElementWithManager";

@customElement("registry-new")
export class RegistryElement extends ElementWithManager {
    
    registry = new ContextProvider( this, {
        context: RegistryContextNew,
        initialValue: undefined
    } );

    connectedCallback(): void {
        super.connectedCallback();
        console.log( "manažer", this.manager.value );
    }
    

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}