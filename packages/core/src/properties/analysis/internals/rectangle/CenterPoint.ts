import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractHandlePoint } from "../AbstractHandlePoint";
import { AbstractPoint } from "../AbstractPoint";
import { RectangleAnalysis } from "./RectangleAnalysis";

/** @deprecated Not implemented at all */
export class CenterPoint extends AbstractHandlePoint {


    declare analysis: RectangleAnalysis;


    public getRadius(): number {
        return 10;
    }

    public mayMoveToX(value: number): boolean {

        if ( this.active === false ) {
            return true;
        }

        const leftBoundary = this.analysis.width / 2;
        const rightBoundary = this.file.width - ( this.analysis.width / 2 );

        const result = value > leftBoundary && value < rightBoundary;

        console.log( "y", {
            result, leftBoundary, rightBoundary, value
        } );

        return result;

    }

    public mayMoveToY(value: number): boolean {

        if ( this.active === false ) {
            return true;
        }

        const topBoundary = this.analysis.height / 2;
        const bottomBoundary = this.analysis.file.height - ( this.analysis.height / 2 );

        const result = value < bottomBoundary && value > topBoundary;

        console.log( "y", {
            result, topBoundary, bottomBoundary, value
        } );

        return result;
    
    }

    


    
    public onPointerDown(): void {
        throw new Error("Method not implemented.");
    }
    
    public onPointerUp(): void {
        throw new Error("Method not implemented.");
    }
    public onMove(): void {
        throw new Error("Method not implemented.");
    }

    protected onActivate(): void {
        if ( this.innerElement ) {
            this.innerElement.style.backgroundColor = "yellow";
        }
    }

    
    protected onDeactivate(): void {
        if ( this.innerElement ) {
            this.innerElement.style.backgroundColor = this.color;
        }
    }
    
}