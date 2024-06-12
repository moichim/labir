import { ColorTone, PaletteColor, Variables } from "./Variables";

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

    public static breakpointValue( bp: keyof Variables["breakpoints"] ) {
        return Skin.value( `bp-${bp}` );
    }

    public static gapValue( aspect?: number ) {

        if (aspect === undefined) 
            return Skin.value( "gap" );
        return `calc( ${Skin.value("gap")} * ${aspect} )`;

    }
}