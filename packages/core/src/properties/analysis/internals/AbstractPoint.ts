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
            const prev = this._x;
            this._x = value;
            this.onX.call(this._x, prev);
            if (this.container) {
                this.container.style.left = this.getPercentageX() + "%";
            }
        }
    }
    public onX = new CallbacksManager<(x: number, prev: number) => void>
    public abstract mayMoveToX(value: number): boolean;



    protected _y: number;
    public get y() {
        return this._y;
    }
    public set y(value: number) {
        if (this.mayMoveToY(value)) {
            const prev = this._y;
            this._y = value;
            this.onY.call(this._y, prev);
            if (this.container) {
                this.container.style.top = this.getPercentageY() + "%";
            }
        }
    }
    public onY = new CallbacksManager<(y: number, prev: number) => void>
    public abstract mayMoveToY(value: number): boolean;


    protected _color: string;
    protected get color() { return this._color; }
    public setColor(value: string) {
        this._color = value;
        this.onSetColor(value);
    }
    protected abstract onSetColor(value: string): void;
    public get initialColor(): string {
        return this.analysis.initialColor;
    }
    public get activeColor() {
        return this.analysis.activeColor;
    };
    public get inactiveColor() {
        return this.analysis.inactiveColor;
    };


    protected _active: boolean = false;
    public get active() {
        return this._active;
    }

    protected _isHover: boolean = false;
    public get isHover() {
        return this._isHover;
    }

    protected _isDragging: boolean = false;
    public get isDragging() {
        return this._isDragging;
    }

    public get root() {
        return this.analysis.layerRoot;
    }

    /** Get the size of the point's area in the file's listener layer. The active area serves for emulation of PointerEvents of this point. */
    public abstract getRadius(): number;

    /** The container is allways positioned by percents. The container dimension is allways 1x1. The container contains the inner element which handles the display. */
    container: HTMLDivElement;

    /** The display element. */
    innerElement: HTMLDivElement;

    public constructor(
        public readonly key: string,
        top: number,
        left: number,
        public readonly analysis: AbstractAnalysis,
        color: string
    ) {
        this._x = left;
        this._y = top;

        this._color = color;

        // Create the container
        this.container = document.createElement("div");
        this.container.style.position = "absolute";
        this.container.id = `analysis_${this.analysis.key}_${this.key}_${this.file.id}`;


        // Create the inner element
        this.innerElement = this.createInnerElement();
        this.container.appendChild(this.innerElement);

        // Set initial position (affects the container)
        this.projectInnerPositionToDom();

        // Set the color again once the inner element is created
        this.setColor(color);

        // Display the point
        this.root.appendChild(this.container);


    }

    public isWithin(top: number, left: number): boolean {

        const offset = this.getRadius() / 2;

        const minX = this.x - offset;
        const maxX = this.x + offset;
        const minY = this.y - offset;
        const maxY = this.y + offset;

        return left >= minX
            && left <= maxX
            && top >= minY
            && top <= maxY;

    }

    public isInSelectedLayer() {
        return this.analysis.selected;
    }




    protected getPercentageX() {
        return this.x / this.analysis.file.width * 100;
    }

    protected getPercentageY() {
        return this.y / this.analysis.file.height * 100;
    }

    protected getPercentageCoordinates() {
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
    public projectInnerPositionToDom(): void {

        if (this.container) {
            const position = this.getPercentageCoordinates();

            this.container.style.left = `${position.x}%`;
            this.container.style.top = `${position.y}%`;

        }
    }

    public mouseEnter() {
        if (this.isHover === false) {
            this._isHover = true;
            this.actionOnMouseEnter();
            this.onMouseEnter.call(this);
        }
    }

    public mouseLeave() {
        if ( this.isHover === true ) {
            this._isHover = false;
            this.actionOnMouseLeave();
            this.onMouseLeave.call(this);
        }
    }

    public readonly onMouseEnter = new CallbacksManager<(point: ThisType<AbstractPoint>) => void>;
    public readonly onMouseLeave = new CallbacksManager<(point: ThisType<AbstractPoint>) => void>;

    public readonly onActivate = new CallbacksManager<(point: ThisType<AbstractPoint>) => void>;
    public readonly onDeactivate = new CallbacksManager<(point: ThisType<AbstractPoint>) => void>;

    protected abstract actionOnMouseEnter(): void;

    protected abstract actionOnMouseLeave(): void;

    protected abstract actionOnActivate(): void;

    protected abstract actionOnDeactivate(): void;

    public activate() {
        this._active = true;
        this.actionOnActivate();
    }

    public deactivate() {
        this._active = false;
        this.actionOnDeactivate();
    }

}