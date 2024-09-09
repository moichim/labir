import { Instance } from "../../../../file/instance";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { TestArea } from "./TestArea";
import { CornerPoint } from "./CornerPoint";
import { CenterPoint } from "./CenterPoint";

export class TestAnalysis extends AbstractAnalysis {


    public readonly tl: CornerPoint;
    public readonly tr: CornerPoint;
    public readonly bl: CornerPoint;
    public readonly br: CornerPoint;

    public readonly center: CenterPoint;

    public readonly area: TestArea;

    public left!: number;
    public top!: number;
    public width!: number;
    public height!: number;

    constructor(
        key: string,
        file: Instance
    ) {
        super(key, file);

        // Create points
        this.tl = this.addPoint("tl", 10, 10, "pink");
        this.tr = this.addPoint("tr", 100, 10, "orange");
        this.bl = this.addPoint("bl", 10, 100, "lightgray");
        this.br = this.addPoint("br", 100, 100, "violet");

        this.tl.syncXWith(this.bl);
        this.tl.syncYWith(this.tr);

        this.tr.syncXWith(this.br);
        this.tr.syncYWith(this.tl);

        this.bl.syncXWith(this.tl);
        this.bl.syncYWith(this.br);

        this.br.syncXWith(this.tr);
        this.br.syncYWith(this.bl);

        this.area = new TestArea(this, 10, 100, 10, 100);

        this.calculateBounds();

        this.onResize.add("sync the area", () => {
            this.calculateBounds();
        });

        const center = this.area.center;
        this.center = new CenterPoint("center", center.x, center.y, this, "black");

        this.points.set("center", this.center);

    }

    public init(): void {
        this.points.forEach(point => point.createElement());
        this.points.forEach(point => point.draw());
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

        if (this.center) {
            const { x, y } = this.area.center;
            this.center.x = x;
            this.center.y = y;
        }
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