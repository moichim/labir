import { ColorTone, PaletteColor } from "./Variables";

export class Skin {

    protected static readonly prefix = "lrc";

    public static key( key: string ) {
        return `--${Skin.prefix}-${key}`;
    };

    public static value( key: string ) {
        return `var( ${Skin.key( key )} )`
    }

    public static colorKey(color: PaletteColor, tone: ColorTone = 500): string {
        return `--${Skin.prefix}-${color}-${tone}`;
    }

    public static colorValue( color: PaletteColor, tone: ColorTone = 500 ) {
        return Skin.value( `${color}-${tone}` );
    }
}