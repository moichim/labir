import { AreaAnalysisData, PointAnalysisData } from "../../../loading/workers/parsers/structure";
import { CallbacksManager } from "../../callbacksManager";
import { AbstractAnalysis } from "../internals/AbstractAnalysis";
import { PointAnalysis } from "../internals/point/PointAnalysis";
import { AnalysisGraphsStorage } from "./AnalysisGraphsStorage";

type GraphDataTypes = PointAnalysisData | AreaAnalysisData;

export class AnalysisGraph {

    public constructor(
        public readonly storage: AnalysisGraphsStorage,
        public readonly analysis: AbstractAnalysis
    ) {

        this.hydrate();

    }

    protected _min: boolean = false;
    protected _max: boolean = false;
    protected _avg: boolean = false;

    protected get state() {
        return {
            "MIN": this._min,
            "MAX": this._max,
            "AVG": this._avg
        }
    }

    protected _value?: GraphDataTypes;

    public get value() {
        return this._value;
    }

    protected set value( value: GraphDataTypes|undefined ) {
        this._value = value;
        this.onGraphData.call( value, this.analysis );
    }

    setMinActivation( active: boolean ) {
        if ( this._min !== active ) {
            this._min = active;
            this.emitGraphActivation();
        }
    }

    setMaxActivation( active: boolean ) {
        if ( this._max !== active ) {
            this._max = active;
            this.emitGraphActivation();
        }
    }

    setAvgActivation( active: boolean ) {
        if ( this._avg !== active ) {
            this._avg = active;
            this.emitGraphActivation();
        }
    }

    public readonly onGraphActivation = new CallbacksManager<(
        min: boolean,
        max: boolean,
        avg: boolean
    ) => void>()

    public readonly onGraphData = new CallbacksManager<(
        data: GraphDataTypes|undefined,
        analysis: AbstractAnalysis
    )=>void>

    public readonly onAnalysisSelection = new CallbacksManager<(
        activated: boolean,
        analysis: AbstractAnalysis
    )=>void>

    protected emitGraphActivation() {
        this.onGraphActivation.call(
            this._min,
            this._max,
            this._avg
        );
    }


    protected async hydrate() {

        // Listen to analysis selection
        // This is perhaps redundant, but for the purpose of encapsulation it seems reasonable
        this.analysis.onSelected.set( "__graphs", ( analysis ) => {

            this.onAnalysisSelection.call( true, analysis );
            
        } );

        // Listen to analysis move or resize and fetch data
        this.analysis.onMoveOrResize.set( "__graphs", async ( analysis ) => {

            const data = await analysis.getAnalysisData();
            this.value = data;

        } );

        // Initial graph data
        const data = await this.getGraphData();
        this.value = data;

    }

    protected async getGraphData(): Promise<GraphDataTypes> {
        const data = await this.analysis.getAnalysisData() as GraphDataTypes;
        return data;
    }

    public getGraphColors(): string[] {

        // Return only one color if it is a point analysis
        if ( this.analysis instanceof PointAnalysis ) {
            // point analysis are controlled by the AVG
            if ( this._avg ) {
                return [this.analysis.initialColor];
            } else return [];
        }

        // For area analysis, return only the active scopes
        let output: string[] = [];

        Object.entries( this.state ).forEach( ([key, value]) => {

            if ( value ) {
                output.push( this.analysis.initialColor );
            }
        } );

        return output;
        
    }

    public getGraphLabels(): string[] {

        // Return only one color if it is a point analysis
        if ( this.analysis instanceof PointAnalysis ) {
            // point analysis are controlled by the AVG
            if ( this._avg ) {
                return [this.analysis.key];
            } else return [];
        }

        // For area analysis, return only the active scopes
        let output: string[] = [];

        Object.entries( this.state ).forEach( ([key, value]) => {

            if ( value ) {
                output.push( `${this.analysis.key} ${key}` );
            }
        } );

        return output;

    }

    public hasDataToPrint(): boolean {
        if ( this.analysis instanceof PointAnalysis ) {
            return this._avg;
        }
        return this._min || this._max || this._avg;
    }

    public getDtaAtTime( timestamp: number ): number[] {
        
        if ( this.analysis instanceof PointAnalysis ) {
            if ( this._avg ) {
                const value = this.value as PointAnalysisData;
                return [ value[timestamp] ];
            } else return  [];
        }

        let output: number[] = [];

        const value = this.value as AreaAnalysisData;

        if ( this._min ) {
            output.push( value[timestamp].min );
        }
        if ( this._max ) {
            output.push( value[timestamp].max );
        }
        if ( this._avg ) {
            output.push( value[timestamp].avg );
        }

        return output;
    
    }





    

}