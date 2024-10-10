
export type ParsedAnalysis = {
    name: string,
    color?: string,
    type: "point" | "rectangle" | "ellipsis"
}

export type ParsedPointAnalysis = ParsedAnalysis & {
    type: "point",
    top: number,
    left: number,
    avg: boolean
}

export type ParsedAreaAnalysis = ParsedAnalysis & {
    type: "rectangle" | "ellipsis",
    top: number,
    left: number,
    width: number,
    height: number,
    avg: boolean,
    min: boolean,
    max: boolean
}


export function analysis() {
}

export const fromAttribute = (value: string): ParsedAnalysis => {

    const splitted = value.split( ";" );


    

    const has = (
        str: string
    ) => {
        return splitted.find( s => s === str ) ?  true : false;
    }

    const stringValueByKey = (
        key: string
    ): string|undefined => {
        const regexp = new RegExp(`${key}:*`);
        const item = splitted.find( s => {
            if ( s.match( regexp ) ) {
                return isNaN( parseInt( s.split( ":" )[1] ) );
            }
        } );

        return item?.split( ":" )[1].trim();
    }

    const numericalValueByKey = (
        key: string
    ) => {
        const regexp = new RegExp(`${key}:\\d+`);
        const item = splitted.find( s => s.match( regexp ) );
        if ( item === undefined ) {
            throw new Error( `Error parsing analysis property '${key}'!` );
        }
        return parseInt( item.split( ":" )[1] );
    }

    const name = splitted[0];
    const type = splitted[1].trim();
    const color = stringValueByKey( "color" );


    let output: ParsedAnalysis;

    if ( type === "point" ) {
        output = {
            name,
            type,
            color,
            top: numericalValueByKey( "top" ),
            left: numericalValueByKey( "left" ),
            avg: has("avg")
        } as ParsedPointAnalysis;
    } else {
        output = {
            name,
            type,
            color,
            top: numericalValueByKey( "top" ),
            left: numericalValueByKey( "left" ),
            width: numericalValueByKey( "width" ),
            height: numericalValueByKey( "height" ),
            avg: has("avg"),
            min: has("min"),
            max: has("max")
        } as ParsedAreaAnalysis
    }

    return output;
}

export const toAttribute = ( value: ParsedAnalysis ): string => {

    const output: string[] = [];

    const pushStringValue = (key: string, val: string|undefined) => {
        if ( val !== undefined ) {
            output.push( `${key}:${val}` );
        }
    }

    const pushNumericalValue = (key: string, val: number) => {
        output.push( `${key}:${val}` );
    }

    const pushBooleanValue = (key: string, val: boolean) => {
        if ( val ) {
            output.push( key );
        }
    }


    output.push( value.name );
    output.push( value.type );

    pushStringValue( "color", value.color );

    if ( value.type === "point" ) {
        const def = value as ParsedPointAnalysis;
        pushNumericalValue( "top", def.top );
        pushNumericalValue( "left", def.left );
        pushBooleanValue( "avg", def.avg );
    } else {
        const def = value as ParsedAreaAnalysis;
        pushNumericalValue("top", def.top);
        pushNumericalValue("left", def.left);
        pushNumericalValue("width", def.width);
        pushNumericalValue("height", def.height);
        pushBooleanValue("avg", def.avg);
        pushBooleanValue("min", def.min);
        pushBooleanValue("max", def.max);
    }



    return output.join(";");
}