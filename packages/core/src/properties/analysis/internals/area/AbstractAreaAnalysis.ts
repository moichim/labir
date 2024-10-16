import { Instance } from "../../../../file/instance";
import { AnalysisGraph } from "../../graphs/AnalysisGraph";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractArea } from "./AbstractArea";
import { CornerPoint } from "./CornerPoint";
import { RectangleArea } from "./rectangle/RectangleArea";

export abstract class AbstractAreaAnalysis extends AbstractAnalysis {

    protected readonly wPx = ( 100 / this.file.width / 2 ).toString() + "%";
    protected readonly hPx = ( 100 / this.file.height / 2 ).toString() + "%";


    public readonly tl: CornerPoint;
    public readonly tr: CornerPoint;
    public readonly bl: CornerPoint;
    public readonly br: CornerPoint;

    public readonly area: RectangleArea;

    protected _graph: AnalysisGraph|undefined;

    public get graph(): AnalysisGraph {
        if (!this._graph) {
            this._graph = new AnalysisGraph(this);
        }
        return this._graph;
    }
    

    public isWithin(x: number, y: number): boolean {
        return x >= this.left
            && x <= this.left + this.width
            && y >= this.top
            && y <= this.top + this.height
    }

    protected abstract buildArea(left: number, top: number, width?: number, height?: number): AbstractArea;



    public static calculateDimensionsFromCorners(
        top: number,
        left: number,
        right: number,
        bottom: number
    ) {

        const t = Math.min(top, bottom);
        const b = Math.max(top, bottom);
        const l = Math.min(left, right);
        const r = Math.max(left, right);

        const w = r - l;
        const h = b - t;

        return {
            top: t,
            left: l,
            width: w,
            height: h
        }

    }



    protected constructor(
        key: string,
        color: string,
        file: Instance,
        top: number,
        left: number,
        width?: number,
        height?: number
    ) {
        super(key, file, color);


        let right = left;
        let bottom = top;

        if (width !== undefined && height !== undefined) {
            right = left + width;
            bottom = top + height;
        }

        this.area = this.buildArea(top, left, width, height);


        // Create points
        this.tl = this.addPoint("tl", top, left);
        this.tr = this.addPoint("tr", top, right);
        this.bl = this.addPoint("bl", bottom, left);
        this.br = this.addPoint("br", bottom, right);

        this.tl.syncXWith(this.bl);
        this.tl.syncYWith(this.tr);

        this.tr.syncXWith(this.br);
        this.tr.syncYWith(this.tl);

        this.bl.syncXWith(this.tl);
        this.bl.syncYWith(this.br);

        this.br.syncXWith(this.tr);
        this.br.syncYWith(this.bl);

        this.calculateBounds();

        /*
        this.onResize.add("sync the area", () => {
            this.calculateBounds();
            this.recalculateValues();
        });
        */

        this.onMoveOrResize.set( "sync the area", () => {
            this.calculateBounds();
        } );

        /** @todo Look if this is really necessary */
        this.points.forEach(point => point.projectInnerPositionToDom());

    }

    public setColorCallback(value: string): void {
        this.points.forEach(point => point.setColor(value));
        this.area.setColor(value)
    }

    protected calculateBounds() {

        let leftMost: number = this.file.width;
        let rightMost: number = 0;
        let topMost: number = this.file.height;
        let bottomMost: number = 0;

        this.points.forEach(point => {
            if (point.x > rightMost) {
                rightMost = point.x;
            }
            if (point.x < leftMost) {
                leftMost = point.x;
            }
            if (point.y < topMost) {
                topMost = point.y;
            }
            if (point.y > bottomMost) {
                bottomMost = point.y;
            }
        });

        this.left = leftMost;
        this.top = topMost;
        this.width = rightMost - leftMost;
        this.height = bottomMost - topMost;

        this.area.left = this.left;
        this.area.top = this.top;
        this.area.height = this.height;
        this.area.width = this.width;

    }

    protected addPoint(
        role: string,
        top: number,
        left: number
    ) {
        const point = new CornerPoint(role, top, left, this, this.color);
        this.points.set(role, point);
        return point;
    }

    public setLeft(
        value: number
    ) {
        this.leftmostPoint.x = value;
    }

    public setRight(
        value: number
    ) {
        this.rightmostPoint.x = value;
    }

    public setTop(
        value: number
    ) {
        this.topmostPoint.y = value;
    }

    public setBottom(
        value: number
    ) {
        this.bottommostPoint.y = value;
    }





    public get leftmostPoint(): CornerPoint {
    
        let point = this.tl;

        this.points.forEach( p => {
            if ( p.x < point.x ) {
                point = p as CornerPoint;
            }
        } );

        return point;
    
    }

    public get rightmostPoint(): CornerPoint {
    
        let point = this.tr;

        this.points.forEach( p => {
            if ( p.x > point.x ) {
                point = p as CornerPoint;
            }
        } );

        return point;
    
    }

    public get topmostPoint(): CornerPoint {
    
        let point = this.tl;

        this.points.forEach( p => {
            if ( p.y < point.y ) {
                point = p as CornerPoint;
            }
        } );

        return point;
    
    }

    public get bottommostPoint(): CornerPoint {
    
        let point = this.br;

        this.points.forEach( p => {
            if ( p.y > point.y ) {
                point = p as CornerPoint;
            }

        });

        return point;

    }


}