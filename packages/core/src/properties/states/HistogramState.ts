"use client";

import { ThermalRegistry, ThermalStatistics } from "../../hierarchy/ThermalRegistry";
import { Instance } from "../../file/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { LrcParser } from "../../loading/workers/parsers/lrc/LrcParser";

export interface IWithHistogram extends IBaseProperty {
    histogram: HistogramState
}

/** Handles the histogram creation and subscription.
 * - should be used only in registries
 */
export class HistogramState extends AbstractProperty<ThermalStatistics[], ThermalRegistry> {

    protected _resolution = 150;
    public get resolution() { return this._resolution; };

    /** Map of temperature => countOfPixels in the scaled down resolution @deprecated */
    protected buffer: Map<number, number> = new Map<number, number>();
    /** Total countOfPixels in every image @deprecated */
    protected bufferPixelsCount: number = 0;
    /** @deprecated */
    protected _bufferResolution = 1000;
    public set bufferResolution(value: number) { this._bufferResolution = Math.round(Math.max(value, 1000)) }
    public get bufferResolution() { return this._bufferResolution; }

    /** Set the historgam resolution
     * - does not recalculate the value!
     * - to recalculate value, call `recalculateWithCurrentSetting`
     * 
     * @notice Higher the number, lower the resolution.
     * @deprecated Resolution is calculated in a separate thread, no resolution changes allowed
    */
    public setResolution(value: number) {
        this._resolution = Math.round(Math.min(Math.max(value, 2), 400));
    }

    /** If incorrect resolution is being set, set empty array @todo there may be an error in +1*/
    protected validate(value: ThermalStatistics[]): ThermalStatistics[] {
        return value;
    }

    protected afterSetEffect() {

    }


    /** Recalculates the value using all current instances and with che current resolution @deprecated should not recalculate the histogram on the fly*/
    public recalculateWithCurrentSetting() {
        this.recalculateHistogram();
        return this.value;
    }


    /** 
     * Recalculate the histogram buffer using web workers.
     * This is an async operation using `workerpool`
     */
    public recalculateHistogramBufferInWorker() {

        // Start async operation
        if (this.parent.minmax.value !== undefined
            && this.parent.groups.value.length !== 0
            && this.parent.minmax.distanceInCelsius !== undefined
        ) {

            // Get all pixels of all images
            const pixels = this.parent.groups.value.map(group => {
                return group.files.value.map(instance => instance.getPixelsForHistogram());
            });

            // REcalculate the buffer in a worker
            this.parent.pool.exec((
                instancesPixels: number[][][],
                min: number,
                max: number,
                distance: number,
                resolution: number
            ) => {

                const mergedPixels = instancesPixels.reduce((state, current) => {

                    const inner = current.reduce((state, current) => {
                        return [...state, ...current]
                    }, [] as number[]);

                    return [...state, ...inner];

                }, [] as number[]);

                let sortedPixels = mergedPixels.sort((a, b) => a - b);

                const step = distance / resolution;

                let nextStep: number | false = min + step;

                const result: Map<number,number> = new Map();
                let resultCount: number = 0;

                while ( nextStep !== false ) {
                    const nextIndex = sortedPixels.findIndex( num => num > ( nextStep as number ) );
                    const pixelCount = sortedPixels.slice( 0, nextIndex ).length;
                    result.set( nextStep - step / 2, pixelCount );
                    resultCount += pixelCount;

                    sortedPixels = sortedPixels.slice( nextIndex );
                    const nextStepTemporary: number = nextStep + step;
                    nextStep = nextStepTemporary < max
                        ? nextStepTemporary
                        : false
                }

                return {
                    result,
                    resultCount
                }
            }, [
                pixels,
                this.parent.minmax.value.min,
                this.parent.minmax.value.max,
                this.parent.minmax.distanceInCelsius,
                this._bufferResolution
            ]).then(result => {
                this.buffer = result.result;
                this.bufferPixelsCount = result.resultCount;
                this.recalculateWithCurrentSetting();
            });

        } // End async operation

    }

    protected async recalculateHistogram() {

        // All living instances
        const allFiles = this.parent.groups.value.map( group => group.files.value ).reduce( (state, current) => {

            state = state.concat( current )

            return state;

        }, [] as Instance[] );

        const allBuffers = allFiles.map( reader => reader.reader.buffer );

        const result = await this.parent.pool.exec( LrcParser.registryHistogram, [allBuffers] );

        this.value = result;

    }


}