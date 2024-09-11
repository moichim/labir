import { format } from "date-fns";

export const msToTime = ( ms: number ) => {
    const value = Math.max( 0, Math.round( ms ) );
    const date = new Date;
    date.setTime( value );
    return format( date, "mm:ss:SSS" );
}

export const timeToMs = ( time: string ) => {

    const value = time
        .replaceAll( " ", "" )
        .replaceAll( ".", "" )
        .replaceAll( "-", "" );

    const pieces = value.split( ":" );

    if ( pieces.length !== 3 ) {
        throw new Error( `Invalid time format! ${value}` );
    }

    const mins = parseInt( pieces[0] );
    const seconds = parseInt( pieces[1] );
    const millis = parseInt( pieces[2] );

    return ( mins * 60 * 1000 )
        + ( seconds * 1000 )
        + millis;


}