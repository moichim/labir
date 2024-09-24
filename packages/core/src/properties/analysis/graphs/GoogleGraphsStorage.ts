import { format } from "date-fns";
import { AreaAnalysisData, PointAnalysisData } from "../../../loading/workers/parsers/structure";
import { AnalysisDataState, AnalysisDataStateValue, ValueRow } from "../AnalysisDataState";
import { AbstractAnalysis } from "../internals/AbstractAnalysis";
import { RectangleAnalysis } from "../internals/area/rectangle/RectangleAnalysis";
import { PointAnalysis } from "../internals/point/PointAnalysis";
import { AbstractAreaAnalysis } from "../internals/area/AbstractAreaAnalysis";

type RawData = {
    name: string,
    color: string,
    data: PointAnalysisData|AreaAnalysisData,
    analysis: AbstractAnalysis
}

export class GoogleGraphsStorage {

    protected readonly activeGraphs: Map<string,AbstractAnalysis> = new Map;

    protected readonly raw = new Map<string, RawData>();

    public get all(): RawData[] {
        return Array.from( this.raw.values() );
    }

    protected output: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

    public constructor(
        private readonly parent: AnalysisDataState
    ) { }

    setPointAnalysis( name: string, color: string, data: PointAnalysisData, analysis: PointAnalysis ) {

        this.raw.set( name, {
            name,
            color,
            data,
            analysis
        });

        this.parent.dangerouslyUpdateValue( this.formatOutput() );

    }

    setAreaAnalysis( name: string, color: string, data: AreaAnalysisData, analysis: AbstractAreaAnalysis ) {

        this.raw.set( name, {
            name,
            color,
            data,
            analysis
        });

        this.parent.dangerouslyUpdateValue( this.formatOutput() );
    }

    removeAnalysis(...name: string[]) {

        name.forEach( n => {
            this.raw.delete( n );
        });

        this.parent.dangerouslyUpdateValue( this.formatOutput() );
    }

    protected formatOutput(): AnalysisDataStateValue {

        const output: AnalysisDataStateValue = {
            values: [["Time"]],
            colors: []
        }

        // Push names and colors
        this.raw.forEach( (rata, name) => {

            if ( Object.values( rata.data )[0] instanceof Object ) {

                if ( rata.analysis.graphMinActive) {
                    output.values[0].push( name + " MIN");
                    output.colors.push( rata.color );
                }

                if ( rata.analysis.graphMaxActive ) {
                    output.values[0].push( name + " MAX");
                    output.colors.push( rata.color );
                }

                if ( rata.analysis.graphAvgActive ) {
                    output.values[0].push( name + " AVG");
                    output.colors.push( rata.color );
                }


            } else {

                if ( rata.analysis.graphAvgActive ) {
                    output.values[0].push( name );
                    output.colors.push( rata.color );
                }

            }

        });


        // Push temperatures
        for (const analysis of this.raw.values()) {
            
            Object.entries( analysis.data ).forEach( ([timestamp, value]: [string,number|{min: number, max: number, avg: number}], index) => {

                const row = output.values[index + 1];

                if ( row === undefined ) {
                    output.values[index + 1] = [format( parseInt( timestamp ), "m:ss:SSS" ) ];
                }

                const array = output.values[index + 1] as ValueRow;

                if ( value instanceof Object ) {

                    if ( analysis.analysis.graphMinActive ) {
                        array.push( value.min );
                    }
                    if ( analysis.analysis.graphMaxActive ) {
                        array.push( value.max );
                    }
                    if ( analysis.analysis.graphAvgActive ) {
                        array.push( value.avg );
                    }

                } else {

                    if (analysis.analysis.graphAvgActive) {
                        array.push( value );
                    }
                    
                }

            });

        }

        return output;


    }

    public has( name: string ) {
        return this.raw.has( name );
    }

    public forEach(
        callback: ( rdata: RawData) => void
    ): void {
        this.raw.forEach( callback);
    }



}