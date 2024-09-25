import { Instance } from "../../../../file/instance";
import { PointAnalysisData, AreaAnalysisData } from "../../../../loading/workers/parsers/structure";
import { CallbacksManager } from "../../../callbacksManager";
import { AnalysisGraph } from "../../graphs/AnalysisGraph";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { PointPoint } from "./PointPoint";

export class PointAnalysis extends AbstractAnalysis {

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

        this.top = top;
        this.left = left;
        this.width = 1;
        this.height = 1;
        this.center = new PointPoint( "center", top, left, this, color );
        this.points.set( "center", this.center );
        this.center.projectInnerPositionToDom();

        this.center.onX.set( "update point", ( x ) => {
            this.left = x;
        });

        this.center.onY.set( "update point", ( y ) => {
            this.top = y;
        });

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

}