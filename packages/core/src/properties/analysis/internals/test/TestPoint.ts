import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractPoint } from "../AbstractPoint";

export class TestPoint extends AbstractPoint {
    public getRadius(): number {
        return 10;
    }
    public isWithin(x: number, y: number): boolean {

        const offset = this.getRadius() / 2;

        const minX = this.x - offset;
        const maxX = this.x + offset;
        const minY = this.y - offset;
        const maxY = this.y + offset;

        return x >= minX
            && x <= maxX
            && y >= minY
            && y <= maxY;

    }

    public isMoving: boolean = false;

    syncXWith( point: TestPoint ) {
        this.onX.add( `sync X with ${point.key} `, value => {
            if ( point.x !== value ) {
                point.x = value;
            }
        } )
    }

    syncYWith( point: TestPoint ) {
        this.onY.add( `sync Y with ${point.key} `, value => {
            if ( point.y !== value ) {
                point.y = value;
            }
        } )
    }
    
    

    protected inner?: HTMLDivElement;

    constructor(
        protected readonly key: string,
        x: number,
        y: number,
        analysis: AbstractAnalysis,
        protected readonly color: string
    ) {
        super(x,y,analysis);
    }

    createElement() {

        this.element = document.createElement( "div" );
        this.element.style.position = "absolute";

        const inner = document.createElement( "div" );
        inner.style.position = "absolute";
        inner.style.top = "-5px";
        inner.style.left = "-5px";

        inner.style.width = "10px";
        inner.style.height = "10px";
        inner.style.position = "absolute";
        inner.style.backgroundColor = this.color;

        this.inner = inner;

        this.element.appendChild( inner );

        this.root.appendChild( this.element );

    }


    draw(): void {

        if ( this.element ) {
            const position = this.getPercentageCoordinates();

            this.element.style.left = `${position.x}%`;
            this.element.style.top = `${position.y}%`;

        }
    }
    public onPointerDown(): void {
        throw new Error("Method not implemented.");
    }
    public onMouseEnter(): void {
        this._isHover = true;
        if ( this.inner ) 
            this.inner.style.background = "green";
    }
    public onMouseLeave(): void {
        this._isHover = false;
        if ( this.inner ) 
            this.inner.style.background = this.color;
    }
    public onPointerUp(): void {
        throw new Error("Method not implemented.");
    }
    public onMove(): void {
        throw new Error("Method not implemented.");
    }

    protected onActivate(): void {
        if ( this.inner ) {
            this.inner.style.backgroundColor = "yellow";
        }
    }

    
    protected onDeactivate(): void {
        if ( this.inner ) {
            this.inner.style.backgroundColor = this.color;
        }
    }
    
}