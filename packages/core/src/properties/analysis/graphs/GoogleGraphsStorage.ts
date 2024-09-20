import { PointAnalysisData } from "../../../loading/workers/parsers/structure";
import { AnalysisDataState, AnalysisDataStateValue, ValueRow } from "../AnalysisDataState";

type RawData = {
    name: string,
    color: string,
    data: PointAnalysisData
}

export class GoogleGraphsStorage {

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

    setPointAnalysis( name: string, color: string, data: PointAnalysisData ) {

        this.raw.set( name, {
            name,
            color,
            data
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

            output.values[0].push( name );
            output.colors.push( rata.color );

        });


        // Push temperatures
        for (const analysis of this.raw.values()) {
            
            Object.entries( analysis.data ).forEach( ([timestamp, temperature], index) => {

                const row = output.values[index + 1];

                if ( row === undefined ) {
                    output.values[index + 1] = [timestamp];
                }

                const array = output.values[index + 1] as ValueRow;

                array.push( temperature );

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