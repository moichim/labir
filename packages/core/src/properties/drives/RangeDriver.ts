import { ThermalRegistry } from "../../registry/ThermalRegistry";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";


/** The range should allways contain both properties. */
export type ThermalRangeType = {
    from: number,
    to: number
}
/** The range or undefined */
export type ThermalRangeOrUndefined = ThermalRangeType | undefined;

/** @deprecated */
export type ThermalRangeDataType = ThermalRangeOrUndefined & {
    from: number,
    to: number
}



/** An object with range should implement it in a unified way */
export interface IWithRange extends IBaseProperty {}

/** Handles the thermal range display. */
export class RangeDriver extends AbstractProperty< ThermalRangeOrUndefined, ThermalRegistry> {


    /** 
     * Make sure the range is allways within the minmax values.
     * 
     * If this method should work, the value needs to be set before the minmax is calculated.
     */
    protected validate(value: ThermalRangeOrUndefined): ThermalRangeOrUndefined {

        if ( value === undefined ) {
            return undefined;
        } 
        
        const minmax = this.parent.minmax.value;

        if ( minmax === undefined ) {
            return value;
        }

        const result = {...value};

        if ( value.from < minmax.min )
            result.from = minmax.min;

        if ( value.to > minmax.max )
            result.to = minmax.max;

        return result;

    }

    /**
     * Whenever the range changes, propagate the value to all instances
     */
    protected afterSetEffect(value: ThermalRangeOrUndefined) {
    
        if ( value )
            this.parent.forEveryInstance( instance => instance.recieveRange( value ) );

    }


    /** 
     * Imposes a range to itself and below
     * - needs to be called before the minmax is calculated!
     */
    public imposeRange( value: ThermalRangeOrUndefined ) {
        
        // If new and old are undefined, do nothing
        if ( value === undefined && this.value === undefined ) {
            // ..do nothing
        }
        // If the new one is undefined and old one exists, set undefined
        else if ( value === undefined && this.value !== undefined ) {
            this.value = value;
        } 
        // If there is no value and the new one exists
        if ( value !== undefined && this.value === undefined ) {
            this.value = value;
        }
        // If the value changes...
        else if ( value !== undefined && this.value !== undefined ) {

            // ... set it only if it is different
            if ( this.value.from !== value.from || this.value.to !== value.to ) {
                this.value = value;
            }

        }

        return this.value;
    }


    /** Sets the range to the current minmax values */
    public applyMinmax() {
        if ( this.parent.minmax.value ) {
            this.imposeRange( { from: this.parent.minmax.value.min, to: this.parent.minmax.value.max } );
        }
    }

    /** Sets the range automatically based on the current histogram */
    public applyAuto() {
        
        if ( this.parent.histogram.value ) {

            const length = this.parent.histogram.value.length;
            const percentage = 100 / length;

            const histogramBarsOverPercentage = this.parent.histogram.value.filter( bar => bar.height >= percentage );

            console.log( this.parent.histogram.value );

            const newRange: ThermalRangeOrUndefined = {
                from: histogramBarsOverPercentage[0].from,
                to: histogramBarsOverPercentage[
                    histogramBarsOverPercentage.length - 1
                ].to
            };

            this.imposeRange( newRange );

        }


    }

}