import { ContextConsumer } from "@lit/context";
import { html, LitElement, PropertyValues } from "lit";
import { state } from "lit/decorators.js";
import { ManagerContextNew } from "../../components/structure/contextsNew";

export abstract class ElementWithManager extends LitElement {
    
    @state()
    public manager = new ContextConsumer( 
        this, 
        { context: ManagerContextNew, subscribe: true } 
    );

    connectedCallback(): void {
        super.connectedCallback();
        console.log( "new context", this.manager );
    }
    protected updated(_changedProperties: PropertyValues): void {
        super.updated( _changedProperties );
        console.log( _changedProperties, this.manager.value );
    }

    protected render(): unknown {
        return html`<slot></slot>`;
    }

}