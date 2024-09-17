import { AbstractFile } from "../../../../../file/AbstractFile";
import { AbstractArea } from "../AbstractArea";
import { AbstractAreaAnalysis } from "../AbstractAreaAnalysis";
import { EllipsisArea } from "./EllipsisArea";

export class EllipsisAnalysis extends AbstractAreaAnalysis {


    public static startAddingAtPoint(
        key: string,
        color: string,
        file: AbstractFile,
        top: number,
        left: number
    ): EllipsisAnalysis {

        const item = new EllipsisAnalysis(
            key,
            color,
            file,
            top,
            left
        );

        item.br.activate();

        return item;

    }


    public static build(
        key: string,
        color: string,
        file: AbstractFile,
        _top: number,
        _left: number,
        _right: number,
        _bottom: number
    ): EllipsisAnalysis {

        const {top, left, width, height } = EllipsisAnalysis.calculateDimensionsFromCorners( _top, _left, _right, _bottom );

        const item = new EllipsisAnalysis(
            key, 
            color, 
            file, 
            top, 
            left, 
            width, 
            height
        );

        return item;

    }


    protected buildArea(x: number, y: number, width?: number, height?: number ): AbstractArea {

        if ( width !== undefined && height !== undefined ) {
            return new EllipsisArea(
                this,
                x,
                y,
                x + width,
                y + height
            );
        }

        return new EllipsisArea(this, x, y, x, y);
    }

    protected getValues(): { min?: number; max?: number; avg?: number; } {

        const fromX = this.left;
        const toX = this.left + this.width;
        const fromY = this.top;
        const toY = this.top + this.height;

        let min = Infinity;
        let max = -Infinity;
        let count = 0;
        let sum = 0;

        for (let y = fromY; y < toY; y++) {

            const rowOffset = this.file.width * y;

            for (let x = fromX; x <= toX; x++) {

                const point = this.file.pixels[ rowOffset + x ];

                if ( point < min ) {
                    min = point;
                }
                if ( point > max ) {
                    max = point;
                }

                sum += point;
                count++;

            }
        }

        return {
            min,
            max,
            avg: sum / count
        }

    }

}