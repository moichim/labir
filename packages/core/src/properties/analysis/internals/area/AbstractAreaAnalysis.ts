import { Instance } from "../../../../file/instance";
import { AnalysisGraph } from "../../../analysisData/graphs/AnalysisGraph";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractArea } from "./AbstractArea";
import { CornerPoint } from "./CornerPoint";
import { RectangleArea } from "./rectangle/RectangleArea";

export abstract class AbstractAreaAnalysis extends AbstractAnalysis {

    protected readonly wPx = (100 / this.file.width / 2).toString() + "%";
    protected readonly hPx = (100 / this.file.height / 2).toString() + "%";


    public readonly tl: CornerPoint;
    public readonly tr: CornerPoint;
    public readonly bl: CornerPoint;
    public readonly br: CornerPoint;

    public readonly area: RectangleArea;

    protected _graph: AnalysisGraph | undefined;

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

        this.onMoveOrResize.set("sync the area", () => {
            this.calculateBounds();
        });

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

        this._left = leftMost;
        this._top = topMost;
        this._width = rightMost - leftMost;
        this._height = bottomMost - topMost;

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


    protected validateLeft(value: number): number {
        return Math.max( 0, value );
    }
    protected onSetLeft( validatedValue: number ): void {
        this.area.left = validatedValue;
        this.leftmostPoint.x = validatedValue;
    }

    protected validateTop(value: number): number {
        return Math.max( 0, value );
    }
    protected onSetTop(validatedValue: number): void {
        this.area.top = validatedValue;
        this.topmostPoint.y = validatedValue;
    }

    protected validateWidth(value: number): number {
        const max = this.file.width - this.left;
        return Math.min( max, value );
    }
    protected onSetWidth(validatedValue: number): void {
        this.area.width = validatedValue;
        this.rightmostPoint.x = this.left + validatedValue;
    }

    protected validateHeight(value: number): number {
        const max = this.file.height - this.top;
        return Math.min( max, value );
    }
    protected onSetHeight(validatedValue: number): void {
        this.area.height = validatedValue;
        this.bottommostPoint.y = this.top + validatedValue;
    }


    public setRight(
        value: number
    ) {

        const validatedValue = Math.min( this.file.width, value );

        const width = this.left - validatedValue;
        this.setWidth( width );

    }

    public setBottom(
        value: number
    ) {

        const validatedValue = Math.min( this.file.height, value );

        const height = this.top - validatedValue;
        this.setHeight( height );
        
    }





    public get leftmostPoint(): CornerPoint {

        let point = this.tl;

        this.points.forEach(p => {
            if (p.x < point.x) {
                point = p as CornerPoint;
            }
        });

        return point;

    }

    public get rightmostPoint(): CornerPoint {

        let point = this.tr;

        this.points.forEach(p => {
            if (p.x > point.x) {
                point = p as CornerPoint;
            }
        });

        return point;

    }

    public get topmostPoint(): CornerPoint {

        let point = this.tl;

        this.points.forEach(p => {
            if (p.y < point.y) {
                point = p as CornerPoint;
            }
        });

        return point;

    }

    public get bottommostPoint(): CornerPoint {

        let point = this.br;

        this.points.forEach(p => {
            if (p.y > point.y) {
                point = p as CornerPoint;
            }

        });

        return point;

    }

    public recievedSerialized(input: string): void {

        this._serialized = input;

        const splitted = input
            .split(";")
            .map(segment => segment.trim());

        let shouldRecalculate: boolean = false;

        const name = splitted[0];

        if (name !== this.name) {
            this.setName(name);
        }

        const graphOn = this.serializedSegmentsHasExact(splitted, "avg");

        if (graphOn !== this.graph.state.AVG) {
            this.graph.setAvgActivation(graphOn);
            shouldRecalculate = true;
        }

        const color = this.serializedGetStringValueByKey(splitted, "color");

        if (color === undefined) {
            //
        } else if (color !== this.initialColor) {
            this.setInitialColor(color);
        }

        const top = this.serializedGetNumericalValueByKey(splitted, "top");
        const left = this.serializedGetNumericalValueByKey(splitted, "left");
        const width = this.serializedGetNumericalValueByKey(splitted, "width");
        const height = this.serializedGetNumericalValueByKey(splitted, "height");

        if (top !== undefined && top !== this.top) {
            
            this.setTop(top);
            shouldRecalculate = true;
        }

        if (left !== undefined && left !== this.left) {
            this.setLeft(left);
            shouldRecalculate = true;
        }

        if (width !== undefined && width !== this.width) {
            this.setWidth( width );
            shouldRecalculate = true;
        }

        if (height !== undefined && height !== this.height) {
            this.setHeight( height );
            shouldRecalculate = true;
        }

        if ( shouldRecalculate ) {
            this.recalculateValues();
        }

        console.log( "parsed", this.serialized );
        

    }

    protected toSerialized(): string {

        const output: string[] = [];

        output.push(this.name);
        output.push(this.getType());
        output.push(`color:${this.color}`);
        output.push(`top:${this.top}`);
        output.push(`left:${this.left}`);
        output.push(`width:${this.width}`);
        output.push(`height:${this.height}`);

        if (this.graph.state.AVG) output.push("avg");
        if (this.graph.state.MIN) output.push("min");
        if (this.graph.state.MAX) output.push("max");

        return output.join(";");

    }


}