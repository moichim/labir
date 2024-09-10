import { AbstractFile } from "../../../file/AbstractFile";
import { AbstractAnalysis } from "./AbstractAnalysis";
import { AbstractArea } from "./AbstractArea";
import { CornerPoint } from "./rectangle/CornerPoint";
import { RectangleArea } from "./rectangle/RectangleArea";

export abstract class AbstractAreaAnalysis extends AbstractAnalysis {

    
    public readonly tl: CornerPoint;
    public readonly tr: CornerPoint;
    public readonly bl: CornerPoint;
    public readonly br: CornerPoint;

    public readonly corners: CornerPoint[] = []

    public readonly area: RectangleArea;

    public left!: number;
    public top!: number;
    public width!: number;
    public height!: number;

    public isWithin(x: number, y: number): boolean {
        return x >= this.left
            && x <= this.left + this.width
            && y >= this.top
            && y <= this.top + this.height
    }

    protected abstract buildArea(x: number, y: number): AbstractArea;

    constructor(
        key: string,
        file: AbstractFile,
        x: number,
        y: number,
        color: string
    ) {
        super(key, file, color);

        this.area = this.buildArea(x,y);

        // Create points
        this.tl = this.addPoint("tl", x, y, "pink");
        this.tr = this.addPoint("tr", x, y, "orange");
        this.bl = this.addPoint("bl", x, y, "lightgray");
        this.br = this.addPoint("br", x, y, "violet");
        this.corners = [
            this.tl,
            this.tr,
            this.br,
            this.bl
        ];

        this.tl.syncXWith(this.bl);
        this.tl.syncYWith(this.tr);

        this.tr.syncXWith(this.br);
        this.tr.syncYWith(this.tl);

        this.bl.syncXWith(this.tl);
        this.bl.syncYWith(this.br);

        this.br.syncXWith(this.tr);
        this.br.syncYWith(this.bl);

        this.br.activate();

        this.calculateBounds();

        this.onResize.add("sync the area", () => {
            this.calculateBounds();
            this.recalculateValues();
        });

    }

    public setColorCallback(value: string): void {
        this.points.forEach( point => point.setColor( value ) );
        this.area.setColor(value)
    }

    public init(): void {
        this.points.forEach(point => point.createInnerElement());
        this.points.forEach(point => point.projectInnerPositionToDom());
    }

    protected draw(): void {
        // throw new Error("Method not implemented.");
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
        this.area.height = this.height;
        this.area.width = this.width;
        this.area.top = this.top;

    }

    addPoint(
        role: string,
        x: number,
        y: number,
        color: string
    ) {
        const point = new CornerPoint(role, x, y, this, color);
        this.points.set(role, point);
        return point;
    }

}