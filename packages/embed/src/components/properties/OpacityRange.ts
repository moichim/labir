import { customElement, property, state } from "lit/decorators.js";
import { ElementInheritingRegistry } from "../structure/registry/ElementInherigintGegistry";
import { PropertyValueMap, html } from "lit";

@customElement("thermal-opacity")
export class OpacityRangeElement extends ElementInheritingRegistry {


    @property({ type: Number })
    value!: number;

    @state()
    protected internal!: number;

    connectedCallback(): void {
        super.connectedCallback();

        console.log( "WTF!!!", this.registry );
        this.value = this.registry.opacity.value;
        this.internal = this.value;

        const input = this.renderRoot.querySelector<HTMLInputElement>( "input" )!;

        input.addEventListener( "input", console.log )

    }

    onInputChange( event: {target: {value: number}} ) {

        this.internal = event.target.value;

        this.registry.opacity.imposeOpacity( event.target.value );

        // console.log( event.target.value );
        // this.registry.opacity.imposeOpacity()
    }

    protected willUpdate(_changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
        console.log( _changedProperties );
    }

    protected render(): unknown {
        return html`

        <div>
            <div>Jsem opacita</div>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value="${this.internal}"
                @input="${this.onInputChange}"
            />

            HALOOOO

            <slot></slot>
        </div>
        `;
    }

}