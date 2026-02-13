import { customElement, property, state } from "lit/decorators.js";
import { ControlledConsumer } from "./ControlledConsumer";
import { html, PropertyValues } from "lit";

@customElement("connected-provider")
export class ConnectedProvider extends ControlledConsumer {

    @state()
    private counter: number = 0;

    connectedCallback(): void {
        
        super.connectedCallback();

        this.display.subscribeOnRecrteateContext( this, () => {
            this.counter++;
        } );

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
    }

    protected render(): unknown {
        return html`<div>
            <p>Connected Provider</p>
            <p>Navigate count: ${ this.counter }</p>
        </div>`;
    }


}