import { AbstractHandlePoint } from "../AbstractHandlePoint";

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
    protected onSetColor(value: string): void {
        if ( this.innerElement )
            this.innerElement.style.backgroundColor = value;
    }

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

    protected actionOnActivate(): void {
        if ( this.innerElement ) {
            this.setColor( this.activeColor );
        }
    }

    
    protected actionOnDeactivate(): void {
        if ( this.innerElement ) {
            this.setColor( this.isInSelectedLayer() 
                ? this.initialColor 
                : this.inactiveColor
            );
        }
    }


    
}