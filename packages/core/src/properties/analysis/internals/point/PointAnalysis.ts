import { should } from "vitest";
import { Instance } from "../../../../file/instance";
import { PointAnalysisData } from "../../../../loading/workers/parsers/structure";
import { AnalysisGraph } from "../../../analysisData/graphs/AnalysisGraph";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { PointPoint } from "./PointPoint";

export class PointAnalysis extends AbstractAnalysis {

    public getType(): string {
        return "point";
    }

    protected center!: PointPoint;

    protected _graph: AnalysisGraph|undefined;

    public get graph(): AnalysisGraph {
        if (!this._graph) {
            this._graph = new AnalysisGraph(this);
        }
        return this._graph;
    }

    public static addAtPoint(
        key: string,
        color: string,
        file: Instance,
        top: number,
        left: number
    ): PointAnalysis {
        const item = new PointAnalysis(
            key,
            color,
            file,
            top,
            left
        );

        return item;
    }

    protected constructor(
        key: string,
        color: string,
        file: Instance,
        top: number,
        left: number
    ) {
        super( key, file, color );

        this._top = top;
        this._left = left;
        this._width = 1;
        this._height = 1;
        this.center = new PointPoint( "center", top, left, this, color );
        this.points.set( "center", this.center );
        this.center.projectInnerPositionToDom();

        this.center.onX.set( "update point", ( x ) => {
            this._left = x;
        });

        this.center.onY.set( "update point", ( y ) => {
            this._top = y;
        });

        this.recalculateValues();

    }


    public setColorCallback(value: string): void {
        this.center.setColor( value );
    }

    public isWithin(x: number, y: number): boolean {
        return this.center.isWithin( y, x );
    }
    protected getValues(): { min?: number; max?: number; avg?: number; } {
        const value = this.file.getTemperatureAtPoint( this.center.x, this.center.y );
        return {
            min: value,
            max: value,
            avg: value
        }
    }

    public async getAnalysisData(): Promise<PointAnalysisData> {
        
        return await this.file.service.pointAnalysisData( this.center.x, this.center.y );

    }





    protected validateLeft(value: number): number {
        return Math.max( 0, Math.min( this.file.width, Math.round( value ) ) );
    }
    protected onSetLeft(value: number): void {
        this.center.x = value;
    }




    protected validateTop(value: number): number {
        return Math.max( 0, Math.min( this.file.height, Math.round( value ) ) );
    }
    protected onSetTop(validatedValue: number): void {
        this.center.y = validatedValue;
    }



    protected validateWidth(): number {
        return 0;
    }
    public onSetWidth(): void {}




    protected validateHeight(): number {
        return 0;
    }
    public onSetHeight(): void {}



    public recievedSerialized( input: string ): void {

        this._serialized = input;

        const splitted = input
            .split( ";" )
            .map( segment => segment.trim() );

        let shouldRecalculate: boolean = false;

        const name = splitted[0];

        if ( name !== this.name ) {
            this.setName( name );
        }

        const graphOn = this.serializedSegmentsHasExact( splitted, "avg" );

        if ( graphOn !== this.graph.state.AVG ) {
            this.graph.setAvgActivation( graphOn );
            shouldRecalculate = true;
        }

        const color = this.serializedGetStringValueByKey( splitted, "color" );

        if ( color === undefined ) {
            //
        } else if ( color !== this.initialColor ) {
            this.setInitialColor( color );
        }

        const top = this.serializedGetNumericalValueByKey( splitted, "top" );
        const left = this.serializedGetNumericalValueByKey( splitted, "left" );

        if ( top !== undefined ) {
            this.setTop( top );
            shouldRecalculate = true;
        }

        if ( left !== undefined ) {
            this.setLeft( left );
            shouldRecalculate = true;
        }

        if ( shouldRecalculate ) {
            this.recalculateValues();
        }

        console.log( "parsed", this.serialized );

        
    }

    protected toSerialized(): string {
        
        const output: string[] = [];

        output.push( this.name );
        output.push( "point" );
        output.push( `top:${this.top}` );
        output.push( `left:${this.left}` );
        output.push( `color:${this.color}` );
        if ( this.graph.state.AVG ) {
            output.push("avg");
        }

        return output.join( ";" );

    }


}