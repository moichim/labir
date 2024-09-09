import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractHandlePoint } from "../AbstractHandlePoint";
import { AbstractPoint } from "../AbstractPoint";

export class CenterPoint extends AbstractHandlePoint {
    public getRadius(): number {
        return 10;
    }

    public mayMoveToX(value: number): boolean {
        
        console.log( value );

        return value <= this.file.width && value >= 0;
    }

    public mayMoveToY(value: number): boolean {
        console.log( value );
        return value <= this.file.height && value >= 0;
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