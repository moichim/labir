
import { ThermalPalettes } from "../../file/palettes";
import { ThermalManager } from "../../manager/ThermalManager";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";

export type PaletteId = keyof typeof ThermalPalettes;

export interface IWithPalette extends IBaseProperty {
    palette: PaletteDrive
}

export class PaletteDrive extends AbstractProperty< PaletteId, ThermalManager > {

    public get availablePalettes() {
        return ThermalPalettes;
    }

    /** All the current palette properties should be accessed through this property. */
    public get currentPalette() {
        return this.availablePalettes[ this.value ];
    }

    /** @deprecated Should not be used at all. Use `currentPalette` instead */
    public get currentPixels() {
        return this.currentPalette.pixels;
    }

    
    protected validate(value: PaletteId): PaletteId {
        return value;
    }

    /** Any changes to the value should propagate directly to every instance. */
    protected afterSetEffect(value: PaletteId) {

        this.parent.forEveryRegistry( registry => {

            registry.forEveryInstance( instance => instance.recievePalette( value ) );

        } );
            
    }

    public setPalette( key: PaletteId ) {
        this.value = key;
    }

}