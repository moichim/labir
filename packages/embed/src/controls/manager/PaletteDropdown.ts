import { AvailableThermalPalettes, ThermalPaletteType, ThermalPalettes } from "@labir/core";
import { consume } from "@lit/context";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { ManagerPaletteContext, managerPaletteContext } from "../../hierarchy/providers/context/ManagerContext";
import { createRef, ref, Ref } from "lit/directives/ref.js";



@customElement("registry-palette-dropdown")
export class PaletteDropdownElement extends RegistryConsumer {

    protected tourableElemtnRef: Ref<HTMLElement> = createRef();
    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElemtnRef.value;
    }

    @consume({context: managerPaletteContext, subscribe: true})
    value!: ManagerPaletteContext;

    /** Handle user input events */
    onSelect( palette: AvailableThermalPalettes ) {
        this.registry.palette.setPalette( palette );
    }

    static styles = css`

    .container {
        display: flex;
        width: content-width;
        gap: 5px;
    }

    .button {
        margin: 0;
        border: 0;
        line-height: 0;
    }

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        // height: .9em;
        border-radius: var( --thermal-fs-small );
    }

    `;

    protected paletteTemplate(
        palette: ThermalPaletteType,
        className?: string
    ) {
        return html`

            <div class="button ${className}">
                <span class="palette" style="background:${palette.gradient}"></span>
                <!-- <span>${palette.name}</span> -->
            </div>
        
        `;
    }

    protected render(): unknown {
        return html`

            <thermal-dropdown variant="foreground" ${ref(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries( ThermalPalettes ).map( ([key,palette]) => html`
                    <div slot="option"><thermal-button @click=${() => this.onSelect( key as AvailableThermalPalettes )} variant="${palette.name === this.manager.palette.currentPalette.name  ? "background" : "slate"}">
                        ${this.paletteTemplate( palette )}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `;
    }

}