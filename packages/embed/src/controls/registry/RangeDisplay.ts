import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { consume } from "@lit/context";
import { registryRangeFromContext, registryRangeToContext } from "../../hierarchy/providers/context/RegistryContext";
import { createRef, Ref, ref } from "lit/directives/ref.js";

@customElement("registry-range-display")
export class RegistryRangeDisplay extends RegistryConsumer {

    @consume( {context: registryRangeFromContext, subscribe: true} )
    protected from?: number;

    @consume({context: registryRangeToContext, subscribe: true})
    protected to?: number;

    @property({type: String, reflect: true, attribute: true, converter: {
        fromAttribute: (value: string) => {
            return Math.round( parseFloat( value ) )
        },
        toAttribute: (value: number) => {
            return value.toString();
        }
    }})
    fixed: number = 2;

    @property({type: String, reflect: true, attribute: true})
    separator: string = "-";

    protected tourableRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableRef.value;
    }

    protected render(): unknown {

        if ( this.from === undefined || this.to === undefined ) {
            return nothing;
        }

        return html`
            <div ${ref(this.tourableRef)}>
                <span>${this.from?.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${this.to?.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `;
    }

    

}