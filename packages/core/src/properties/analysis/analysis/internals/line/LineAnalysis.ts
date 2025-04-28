import { Instance } from "../../../../../file/instance";
import { PointAnalysisData, AreaAnalysisData } from "../../../../../loading/workers/parsers/structure";
import { AnalysisGraph } from "../../../data/graphs/AnalysisGraph";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { PointPlacement } from "../AbstractPoint";
import { LinePoint } from "./LinePoint";

export type LineAnalysisData = {}

export class LineAnalysis extends AbstractAnalysis {

    public readonly point1: LinePoint;
    public readonly point2: LinePoint;

    protected readonly svg: SVGSVGElement;
    protected readonly line: SVGLineElement;

    protected constructor(
        key: string,
        color: string,
        file: Instance,
        top: number,
        left: number
    ) {
        super(key, file, color);

        // Create the points

        this.point1 = new LinePoint(
            "one",
            top, left, this, color, PointPlacement.START, PointPlacement.START
        );
        this.point1.deactivate();

        this.point2 = new LinePoint(
            "two",
            top, left, this, color, PointPlacement.END, PointPlacement.END
        );
        this.point2.activate();

        this.points.set(this.point1.key, this.point1);
        this.points.set(this.point2.key, this.point2);

        // Create the SVG element

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("viewBox", `0 0 ${this.file.width} ${this.file.height}`);
        this.svg.style.width = "100%";
        this.svg.style.height = "100%";

        // Create the line element

        this.line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttribute("x1", left.toString());
        this.line.setAttribute("x2", left.toString());
        this.line.setAttribute("y1", top.toString());
        this.line.setAttribute("y2", top.toString());
        this.line.style.stroke = color;
        this.line.style.strokeWidth = "1px";
        this.line.setAttribute("vector-effect", "non-scaling-stroke");


        // Create synchronisation listeners

        this.point1.onX.set("sync_X", (x) => {
            this.line.setAttribute("x1", x.toString());
        });

        this.point1.onY.set("sync_y", (y) => {
            this.line.setAttribute("y1", y.toString());
        });

        this.point2.onX.set("sync_X", (x) => {
            this.line.setAttribute("x2", x.toString());
        });

        this.point2.onY.set("sync_y", (y) => {
            this.line.setAttribute("y2", y.toString());
        });

        this.svg.appendChild(this.line);

        this.layerRoot.appendChild(this.svg);

    }


    private calculatePercentageX(value: number) {
        return value / this.file.width * 100;
    }

    private calculatePercentageY(value: number) {
        return value / this.file.height * 100;
    }

    public static startAddingAtPoint(
        key: string,
        color: string,
        file: Instance,
        top: number,
        left: number
    ): LineAnalysis {
        const item = new LineAnalysis(
            key,
            color,
            file,
            top,
            left
        );

        return item;
    }

    public recievedSerialized(input: string): void {
        // throw new Error("Method not implemented.");
        console.log( input );
    }
    public toSerialized(): string {

        const output: string[] = [];

        output.push( this.name );
        output.push( "point" );
        output.push( `x1:${this.point1.x}` );
        output.push( `y1:${this.point1.y}` );
        output.push( `x2:${this.point2.x}` );
        output.push( `y2:${this.point2.y}` );
        output.push( `color:${this.initialColor}` );
        if ( this.graph.state.AVG ) {
            output.push("avg");
        }
        if ( this.graph.state.MIN ) {
            output.push("min");
        }
        if ( this.graph.state.MAX ) {
            output.push("max");
        }

        return output.join(";");
    }

    public get graph(): AnalysisGraph {
        // throw new Error("Method not implemented.");
        return new AnalysisGraph(this);
    }
    protected onSetTop(validatedValue: number): void {
        // throw new Error("Method not implemented.");
    }
    protected onSetLeft(validatedValue: number): void {
        //  throw new Error("Method not implemented.");
    }
    protected onSetWidth(validatedValue: number): void {
        // throw new Error("Method not implemented.");
    }
    protected onSetHeight(validatedValue: number): void {
        // throw new Error("Method not implemented.");
    }
    protected validateWidth(value: number): number {
        return value;
    }
    protected validateHeight(value: number): number {
        return value;
    }
    protected getVerticalDimensionFromNewValue(bottom: number, preferredSide: "top" | "bottom"): { top: number; bottom: number; height: number; } {
        throw new Error("Method not implemented.");
    }
    protected getHorizontalDimensionsFromNewValue(value: number, preferredSide: "left" | "right"): { left: number; right: number; width: number; } {
        throw new Error("Method not implemented.");
    }
    protected setColorCallback(value: string): void {
        this.line.style.stroke = value;
        this.point1.setColor(value);
        this.point2.setColor(value);
    }
    public getType(): string {
        return "line";
    }
    public isWithin(x: number, y: number): boolean {
        const x1 = this.point1.x;
        const y1 = this.point1.y;
        const x2 = this.point2.x;
        const y2 = this.point2.y;

        // Vypočítáme vzdálenost bodu od přímky
        const distance = Math.abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1) / Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);

        // Tolerance pro vzdálenost bodu od přímky
        const tolerance = 0.5; // Např. 1 pixel

        // Zkontrolujeme, zda bod leží na přímce v rámci tolerance
        if (distance > tolerance) {
            return false;
        }

        // Zkontrolujeme, zda bod leží mezi body point1 a point2
        const withinX = x >= Math.min(x1, x2) && x <= Math.max(x1, x2);
        const withinY = y >= Math.min(y1, y2) && y <= Math.max(y1, y2);

        return withinX && withinY;
    }
    protected getValues(): { min?: number; max?: number; avg?: number; } {

        let min = Infinity;
        let max = -Infinity;
        let count = 0;
        let sum = 0;

        let minX = Math.min(this.point1.x, this.point2.x);
        let maxX = Math.max(this.point1.x, this.point2.x);
        let minY = Math.min(this.point1.y, this.point2.y);
        let maxY = Math.max(this.point1.y, this.point2.y);

        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {

                if (this.isWithin(x, y)) {
                    const point = this.file.pixels[y * this.file.width + x];

                    if (point < min) {
                        min = point;
                    }
                    if (point > max) {
                        max = point;
                    }

                    sum += point;
                    count++;
                }
            }

        }


        return {
            min: min === Infinity ? undefined : min,
            max: max === -Infinity ? undefined : max,
            avg: count === 0 ? undefined : sum / count
        }
    }
    public async getAnalysisData(): Promise<LineAnalysisData> {
        const data = await this.file.reader.lineAnalysisData(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
        return data;
    }



}