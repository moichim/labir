import { Skin } from "./Skin";

export type ColorTone = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type ColorPalette = {
    [index in ColorTone]: CSSStyleDeclaration["color"]
}

export type PaletteColor = "primary"|"secondary"|"gray"|"success"|"danger";


export class Variables {

    primary: ColorPalette = {
        50: '#f3f8f9',
        100: '#dbf1fa',
        200: '#b1e1f4',
        300: '#7dc2e3',
        400: '#469fcd',
        500: '#347eb6',
        600: '#2c649d',
        700: '#254b7c',
        800: '#1b3358',
        900: '#101f3a',
    };
    secondary: ColorPalette = {
        '50': '#fbfbf7',
        100: '#f9f1d9',
        200: '#f1dbae',
        300: '#ddb579',
        400: '#c6894a',
        500: '#a9672b',
        600: '#8b4c1b',
        700: '#693917',
        800: '#472711',
        900: '#2c170c',
    };
    gray: ColorPalette = {
        50: '#f9f9f8',
        100: '#f0f0f1',
        200: '#dddde0',
        300: '#b9babe',
        400: '#8f9295',
        500: '#717071',
        600: '#5b5555',
        700: '#464040',
        800: '#302b2d',
        900: '#1d1b1d',
    };
    success: ColorPalette = {
        50: '#f4f7f2',
        100: '#e5f0db',
        200: '#c2e7ae',
        300: '#88cb78',
        400: '#3fab47',
        500: '#2a9026',
        600: '#237a1a',
        700: '#1f5d17',
        800: '#173f14',
        900: '#102610',
    };
    danger: ColorPalette = {
        '50': '#fcfcfa',
        100: '#f9f2ed',
        200: '#f3d7d9',
        300: '#e4adb2',
        400: '#d77e86',
        500: '#c25960',
        600: '#a53e43',
        700: '#7d2e31',
        800: '#561f21',
        900: '#321313',
    };

    // Breakpoints
    breakpoints = {
        xs: 0,
        sm: 640,
        md: 900,
        lg: 1200,
        xl: 1450
    }

    // Gaps
    gap: {
        [index in keyof Variables["breakpoints"]]: CSSStyleDeclaration["paddingTop"]
    } = {
        xs: "15px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px"
    }

    // Font sizes
    fontSize: {
        [index in keyof Variables["breakpoints"]]: CSSStyleDeclaration["fontSize"]
    } = {
        xs: "15px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px"
    }

    fontStyles: {
        [index: string]: {
            fontSize?: number,
            lineHeight?: number,
            ThemeColor?: "primary" | "secondary" | "text" | "background",
            color?: CSSStyleDeclaration["color"],
            fontWeight?: CSSStyleDeclaration["fontWeight"]
        }
    } = {};


    /** Get get variables definition of one palette */
    public getColorVariables( color: PaletteColor,inverse: undefined|boolean = false ) {
        
        const slot = this[color];

        if ( inverse === false ) {
            return Object.fromEntries( Object.entries( slot ).map( ([tone, value]) => {
                return [ Skin.key( `${color}-${tone}` ), value ]
            } ) );
        }

        const items: {
            [index: string] : string
        } = {};

        items[ Skin.key( `${color}-50` ) ] = slot["900"];
        items[ Skin.key( `${color}-100` ) ] = slot["800"];
        items[ Skin.key( `${color}-200` ) ] = slot["700"];
        items[ Skin.key( `${color}-300` ) ] = slot["600"];
        items[ Skin.key( `${color}-400` ) ] = slot["500"];
        items[ Skin.key( `${color}-500` ) ] = slot["400"];
        items[ Skin.key( `${color}-600` ) ] = slot["300"];
        items[ Skin.key( `${color}-700` ) ] = slot["200"];
        items[ Skin.key( `${color}-800` ) ] = slot["100"];
        items[ Skin.key( `${color}-900` ) ] = slot["50"];

        return items;

    }


    /** Get variables of all colors */
    public getColorsVariables( inverse: boolean|undefined = false ) {

        return {
            ...this.getColorVariables("primary", inverse),
            ...this.getColorVariables("secondary", inverse),
            ...this.getColorVariables("gray", inverse),
            ...this.getColorVariables("success", inverse),
            ...this.getColorVariables("danger", inverse),
        }

    }

    public getFontVariables() {

        return {
            [Skin.key( "font-size-xs" )]: this.fontSize.xs,
            [Skin.key( "font-size-sm" )]: this.fontSize.sm,
            [Skin.key( "font-size-md" )]: this.fontSize.md,
            [Skin.key( "font-size-lg" )]: this.fontSize.lg,
            [Skin.key( "font-size-xl" )]: this.fontSize.xl,
        }

    }

    public getGapVariables() {

        return {
            [Skin.key( "gap-xs" )]: this.gap.xs,
            [Skin.key( "gap-sm" )]: this.gap.sm,
            [Skin.key( "gap-md" )]: this.gap.md,
            [Skin.key( "gap-lg" )]: this.gap.lg,
            [Skin.key( "gap-xl" )]: this.gap.xl,
        }

    }

    public getBreakpointsVariables() {

        return {
            [Skin.key( "bp-xs" )]: `${this.breakpoints.xs}px`,
            [Skin.key( "bp-sm" )]: `${this.breakpoints.sm}px`,
            [Skin.key( "bp-md" )]: `${this.breakpoints.md}px`,
            [Skin.key( "bp-lg" )]: `${this.breakpoints.lg}px`,
            [Skin.key( "bp-xl" )]: `${this.breakpoints.xl}px`
        }

    }


    /** Dump index of variables into a string */
    public static printCss(styles: {[index: string]: string}): string {
        return Object
            .entries( styles )
            .map( ([property,value]) => `${property}:${value};` )
            .join("\n")
    }

}