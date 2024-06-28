import { ThermalStatistics, ThermalRegistry } from "../../registry/ThermalRegistry";
import { ThermalMinmaxType } from "../abstractMinmaxProperty";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";

export interface IWithHistogram extends IBaseProperty {
    histogram: HistogramState
}

/** Handles the histogram creation and subscription.
 * - should be used only in registries
 */
export class HistogramState extends AbstractProperty<ThermalStatistics[], ThermalRegistry> {

    protected _resolution = 150;
    public get resolution() { return this._resolution; };

    /** Map of temperature => countOfPixels in the scaled down resolution */
    protected buffer: Map<number,number> = new Map<number,number>();
    /** Total countOfPixels in every image */
    protected bufferPixelsCount: number = 0;
    /**  */
    protected _bufferResolution = 1000;
    public set bufferResolution( value: number ) { this._bufferResolution = Math.round( Math.max( value, 1000 ) ) }
    public get bufferResolution() { return this._bufferResolution; }

    /** Set the historgam resolution
     * - does not recalculate the value!
     * - to recalculate value, call `recalculateWithCurrentSetting`
     * 
     * @notice Higher the number, lower the resolution.
    */
    public setResolution(value: number) {
        this._resolution = Math.round( Math.min(Math.max(value, 2), 400) );
    }

    /** If incorrect resolution is being set, set empty array @todo there may be an error in +1*/
    protected validate(value: ThermalStatistics[]): ThermalStatistics[] {
        if (value.length !== this.resolution + 1 && value.length !== 0) {
            /*
            console.warn(`Tried to set a histogram with an incorrect resolution. 
            Desired resolution: '${this.resolution}'. Number of histogram pieces ${value.length}. 
            => No changes in the histogram were made - using the old value instead the new one.` );
            */
            // return this.value;
        }
        return value;
    }

    protected afterSetEffect() {

    }


    /** Recalculates the value using all current instances and with che current resolution */
    public recalculateWithCurrentSetting() {
        this.recalculateHistogram();
        return this.value;
    }


    public refreshBufferFromCurrentPixels() {

        const buffer: Map<number,number> = new Map<number,number>();
        let bufferTotal = 0;

        if (this.parent.minmax !== undefined && this.parent.groups.value.length !== 0) {

            const distance = this.parent.minmax.distanceInCelsius;

            if (distance !== undefined)  {

                const step = distance / this._bufferResolution;
                const minmax = this.parent.minmax.value as ThermalMinmaxType;

                // Collect pixels
                let pixels: number[] = [];
                this.parent.forEveryInstance(instance => {
                    pixels = pixels.concat( instance.pixelsForHistogram );
                });

                // Sort pixels
                pixels.sort((a, b) => {
                    return a - b;
                });

                // Calculate the buffer
                let nextStep: number|false = minmax.min + step;
                while ( nextStep !== false ) {

                    // Find the nearest larger item
                    const nextIndex = pixels.findIndex( num => num >= ( nextStep as number ) );

                    const pixelCount = pixels.slice(0, nextIndex).length;
                    // Create the subarray
                    buffer.set( nextStep - step/2, pixelCount );
                    bufferTotal += pixelCount;

                    // Modify the pixels
                    pixels = pixels.slice( nextIndex );

                    // Modify the nextStep
                    const nextStepTemporary: number = nextStep + step;
                    nextStep = nextStepTemporary <= minmax.max
                        ? nextStepTemporary
                        : false;

                }


            }

        }

        this.buffer = buffer;
        this.bufferPixelsCount = bufferTotal;

    }

    protected recalculateHistogram() {

        if ( this.parent.minmax.value !== undefined && this.parent.minmax.distanceInCelsius !== undefined ) {

            let temperaturesFromBuffer = Array.from( this.buffer.keys() );
            let countsFromBuffer = Array.from( this.buffer.values() );
            const minmax = this.parent.minmax.value;
            const step = this.parent.minmax.distanceInCelsius / this.resolution;

            const bufferItems: {
                from: number,
                to: number,
                count: number,
                percentage: number
            }[] = [];

            let bufferMaxCount = 0;

            let pointer = minmax.min;
            while ( pointer < minmax.max ) {

                const currentStepMin = pointer;
                const currentStepMax = pointer +  step;

                const nextIndex = temperaturesFromBuffer.findIndex( num => num >= currentStepMax );

                const countsSubArray = countsFromBuffer.slice( 0, nextIndex );

                const currentNumberOfPixels = countsSubArray.reduce( (state,current) => {
                    return state + current;
                }, 0 );

                const currentPercentage = currentNumberOfPixels / this.bufferPixelsCount;

                // Assign new temporary item
                bufferItems.push({
                    from: currentStepMin,
                    to: currentStepMax,
                    percentage: currentPercentage,
                    count: currentNumberOfPixels
                });

                // If current count is higher than maximal count, raise it
                if ( bufferMaxCount < currentNumberOfPixels ) {
                    bufferMaxCount = currentNumberOfPixels;
                }

                // Modify the buffers
                temperaturesFromBuffer = temperaturesFromBuffer.slice( nextIndex );
                countsFromBuffer = countsFromBuffer.slice( nextIndex );

                // At the end, rise the pointer
                pointer += step;

            }
            

            const result: ThermalStatistics[] = bufferItems.map( item => {
                return {
                    ...item,
                    height: item.count / bufferMaxCount * 100
                }
            } );

            this.value = result;


        }

    }


    /** Get the pixels from images, calculate the 1000 and store that in the buffer. @deprecated */
    public _getHistorgramFromAllGroups() {


        if (this.parent.minmax.value === undefined || this.parent.groups.value.length === 0) {
            // Do nothing
        }

        if (this.parent.minmax.value === undefined || this.parent.groups.value.length === 0) {
            return [];
        } else {

            // Get all pixels
            const allPixels = this.parent.groups.value.reduce((
                state,
                current
            ) => {

                const pixels = current.instances.value.reduce((buf, instance) => {

                    buf = [...buf, ...instance.pixels];

                    return buf;

                }, [] as number[]);

                return [...state, ...pixels]

            }, [] as number[]);


            // Calculate the ten segments
            const segments: [number, number][] = [];

            const numSegments = this.resolution;
            const difference = this.parent.minmax.value.max - this.parent.minmax.value.min;
            const segment = difference / numSegments;

            for (let i = 0; i < numSegments; i++) {

                const from = (segment * i) + this.parent.minmax.value.min;
                const to = from + segment;

                segments.push([from, to]);

            }

            const results: {
                from: number,
                to: number,
                count: number
            }[] = [];

            let sum = allPixels.length;

            for (const i of segments) {

                const count = allPixels.filter(pixel => {
                    return pixel >= i[0] && pixel < i[1];
                }).length;

                sum = sum + count;

                results.push({
                    from: i[0],
                    to: i[1],
                    count: count
                });

            }

            const recalculated = results.map(i => {
                return {
                    ...i,
                    percentage: i.count / sum * 100,
                }
            });

            const max = Math.max(...recalculated.map(item => item.percentage));

            return recalculated.map(item => {
                return {
                    ...item,
                    height: item.percentage / max * 100
                }
            }) as ThermalStatistics[];

        }


    }

}