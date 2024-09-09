import { CallbacksManager } from "../../callbacksManager";
import { AbstractAnalysis } from "./AbstractAnalysis";

export abstract class AbstractPoint {

    public get file() {
        return this.analysis.file;
    }

    protected _x: number;
    public get x() {
        return this._x;
    }
    public set x(value: number) {
        if (this.mayMoveToX(value)) {
            this._x = value;
            this.onX.call(this._x);
            if (this.container) {
                this.container.style.left = this.getPercentageX() + "%";
            }
        }
    }
    public onX = new CallbacksManager<(x: number) => void>
    public abstract mayMoveToX(value: number): boolean;



    protected _y: number;
    public get y() {
        return this._y;
    }
    public set y(value: number) {
        if (this.mayMoveToY(value)) {
            this._y = value;
            this.onY.call(this._y);
            if (this.container) {
                this.container.style.top = this.getPercentageY() + "%";
            }
        }
    }
    public onY = new CallbacksManager<(y: number) => void>
    public abstract mayMoveToY(value: number): boolean;

    
    protected _color: string;
    protected get color() { return this._color; }
    public setColor( value: string ) {
        this._color = value;
        if ( this.innerElement ) {
            this.innerElement.style.backgroundColor = this._color;
        }
    }


    protected _active: boolean = false;
    public get active() {
        return this._active;
    }

    protected _isHover: boolean = false;
    public get isHover() {
        return this._isHover;
    }

    public get root() {
        return this.analysis.layerRoot;
    }

    public abstract getRadius(): number;

    container: HTMLDivElement;

    innerElement: HTMLDivElement;

    public constructor(
        public readonly key: string,
        x: number,
        y: number,
        public readonly analysis: AbstractAnalysis,
        color: string
    ) {
        this._x = x;
        this._y = y;

        this._color = color;

        // Create the container
        this.container = document.createElement( "div" );
        this.container.style.position = "absolute";
        this.container.id = `analysis_${this.analysis.key}_${this.key}_${this.file.id}`;

        // Create the inner element
        this.innerElement = this.createInnerElement();
        this.container.appendChild( this.innerElement );

        // Set initial position
        this.projectInnerPositionToDom();
        
        // Set the color again once the inner element is created
        this.setColor( color );

        // Display the point
        this.root.appendChild( this.container );


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

    public isInActiveLayer() {
        return this.analysis.active;
    }




    protected getPercentageX() {
        return this.x / this.analysis.file.width * 100;
    }

    protected getPercentageY() {
        return this.y / this.analysis.file.height * 100;
    }

    public getPercentageCoordinates() {
        const x = this.getPercentageX();
        const y = this.getPercentageY();
        return {
            x,
            y
        }
    }

    /** Create the display element */
    abstract createInnerElement(): HTMLDivElement;


    /** Take the internal position value and project it to the DOM element */
    projectInnerPositionToDom(): void {

        if ( this.container ) {
            const position = this.getPercentageCoordinates();

            this.container.style.left = `${position.x}%`;
            this.container.style.top = `${position.y}%`;

        }
    }

    public abstract onPointerDown(): void;

    public mouseEnter() {
        this.onMouseEnter();
    }

    public mouseLeave() {
        this.onMouseLeave();
    }

    protected abstract onMouseEnter(): void;

    protected abstract onMouseLeave(): void;

    public abstract onPointerUp(): void;

    public abstract onMove(): void;

    protected abstract onActivate(): void;

    protected abstract onDeactivate(): void;

    public activate() {
        this._active = true;
        this.onActivate();
    }

    public deactivate() {
        this._active = false;
        this.onDeactivate();
    }

}