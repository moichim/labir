import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractHandlePoint } from "../AbstractHandlePoint";
import { AbstractPoint } from "../AbstractPoint";

export class CornerPoint extends AbstractHandlePoint {
    public getRadius(): number {
        return 10;
    }

    public mayMoveToX(value: number): boolean {
        return value <= this.file.width && value >= 0;
    }

    public mayMoveToY(value: number): boolean {
        return value <= this.file.height && value >= 0;
    }

    

    public isMoving: boolean = false;

    syncXWith( point: CornerPoint ) {
        this.onX.add( `sync X with ${point.key} `, value => {
            if ( point.x !== value ) {
                point.x = value;
            }
        } )
    }

    syncYWith( point: CornerPoint ) {
        this.onY.add( `sync Y with ${point.key} `, value => {
            if ( point.y !== value ) {
                point.y = value;
            }
        } )
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