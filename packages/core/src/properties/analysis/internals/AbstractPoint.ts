import { CallbacksManager } from "../../callbacksManager";
import { AbstractAnalysis } from "./AbstractAnalysis";

export abstract class AbstractPoint {

    protected _x: number;
    public get x() {
        return this._x;
    }
    public set x( value: number ) {
        this._x = value;
        this.onX.call( this._x );
        if ( this.element ) {
            this.element.style.left = this.getPercentageX() + "%";
        }
    }
    public onX = new CallbacksManager<(x:number)=>void>

    protected _y: number;
    public get y() {
        return this._y;
    }

    
    public set y( value: number ) {
        this._y = value;
        this.onY.call( this._y );
        if ( this.element ) {
            this.element.style.top = this.getPercentageY() + "%";
        }
    }
    public onY = new CallbacksManager<(y:number)=>void>

    protected _active: boolean = false;
    public get active() {
        return this._active;
    }

    protected _isHover: boolean = false;
    public get isHover() {
        return this._isHover;
    }

    public get root() {
        return this.analysis.file.canvasLayer.getLayerRoot();
    }

    public abstract getRadius(): number;

    public abstract isWithin( x: number, y: number ): boolean;

    element?: HTMLDivElement;

    public constructor(
        x: number,
        y: number,
        public readonly analysis: AbstractAnalysis
    ) {
        this._x = x;
        this._y = y;
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

    abstract createElement(): void;

    abstract draw(): void;

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