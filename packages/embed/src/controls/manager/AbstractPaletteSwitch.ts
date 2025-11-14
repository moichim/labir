import { AvailableThermalPalettes, ThermalPalettes, ThermalPaletteType } from "@labirthermal/core";
import { consume } from "@lit/context";
import { PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { advancedPalettesContext } from "../../apps/AbstractControlledApp";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { managerPaletteContext, ManagerPaletteContext } from "../../hierarchy/providers/context/ManagerContext";

export abstract class AbstractPaletteSwitch extends RegistryConsumer {

    @consume({ context: advancedPalettesContext, subscribe: true })
    @state()
    protected advancedPalettesContext: boolean = false;

    @property({ type: Boolean, attribute: "advanced-palettes" })
    public advancedPalettesProperty?: boolean;

    @state()
    protected palettes: ThermalPaletteType[] = [];

    @consume({ context: managerPaletteContext, subscribe: true })
    @state()
    protected value!: ManagerPaletteContext;

    protected updated(_changedProperties: PropertyValues): void {

        const showAdvancedPalettes = this.advancedPalettesProperty ?? this.advancedPalettesContext;
        const basicPalettes = ["iron", "jet", "white_hot", "black_hot"];

        if (_changedProperties.has("advancedPalettesContext") || _changedProperties.has("advancedPalettesProperty")) {

            if (showAdvancedPalettes) {
                this.palettes = Object.values(ThermalPalettes);
            } else {
                
                this.palettes = Object.entries(ThermalPalettes)
                    .filter(([key, palette]) => basicPalettes.includes(key))
                    .map(([key, palette]) => palette);

                if ( ! basicPalettes.includes( this.value.key )  ) {
                    this.onSelect("iron");
                }
            }

        }

        if (  _changedProperties.has("value") && !showAdvancedPalettes && !basicPalettes.includes( this.value.key )  ) {
            this.onSelect("iron");
        }



    }


    /** Handle user input events */
    protected onSelect(palette: AvailableThermalPalettes) {
        this.registry.palette.setPalette(palette);
    }


}