import { AbstractFile } from "../../../../file/AbstractFile";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { PointPoint } from "./PointPoint";

export class PointAnalysis extends AbstractAnalysis {
    

    protected center!: PointPoint;

    public static addAtPoint(
        key: string,
        color: string,
        file: AbstractFile,
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
        file: AbstractFile,
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

        this.center.onX.set( "move x", () => {
            this.recalculateValues();
        } );

        this.center.onY.set( "move y", () => {
            this.recalculateValues();
        } );
    }

    public setColorCallback(value: string): void {
        this.center.setColor( value );
    }

    public init(): void {
        // throw new Error("Method not implemented.");
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

}