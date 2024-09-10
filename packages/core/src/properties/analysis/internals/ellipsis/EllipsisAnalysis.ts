import { AbstractArea } from "../AbstractArea";
import { AbstractAreaAnalysis } from "../AbstractAreaAnalysis";
import { EllipsisArea } from "./EllipsisArea";

export class EllipsisAnalysis extends AbstractAreaAnalysis {

    protected buildArea(x: number, y: number): AbstractArea {
        return new EllipsisArea(this, x, y, x, y);
    }

    protected getValues(): { min?: number; max?: number; avg?: number; } {

        let fromX = this.left;
        let toX = this.left + this.width;
        let fromY = this.top;
        let toY = this.top + this.height;

        let min = Infinity;
        let max = -Infinity;
        let count = 0;
        let sum = 0;

        for (let y = fromY; y < toY; y++) {

            let rowOffset = this.file.width * y;

            for (let x = fromX; x <= toX; x++) {

                let point = this.file.pixels[ rowOffset + x ];

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