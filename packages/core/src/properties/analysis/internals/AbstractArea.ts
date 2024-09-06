import { AbstractAnalysis } from "./AbstractAnalysis";

export abstract class AbstractArea {

    public get fileWidth() {
        return this.analysis.file.width;
    }

    public get fileHeight() {
        return this.analysis.file.height;
    }

    public get root() {
        return this.analysis.file.canvasLayer.getLayerRoot();
    }

    protected element!: HTMLDivElement;


    protected _top: number;
    protected _right: number;
    protected _left: number;
    protected _bottom: number;

    public get top() {return this._top;}
    protected set top( value: number ) {
        this._top = value;
        if ( this.element ) {
            this.element.style.top = `${this._top / this.fileHeight * 100}%`;
        }
    }


    public get left() { return this._left; }
    public set left( value: number ) {
        this._left = value;
        if ( this.element ) {
            this.element.style.left = `${this._left / this.fileWidth * 100}%`;
        }
    }

    public get bottom() {
        return this._bottom;
    }
    public set bottom( value ) {
        this._bottom = value;
        if ( this.element ) {
            this.element.style.height = `${( this.bottom - this.top ) / this.fileHeight * 100 }%`;
        }
    }

    public get right() {
        return this._right;
    }
    public set right( value: number ) {
        this._right = value;
        if ( this.element ) {
            this.element.style.width = `${(this.right - this.left) / this.fileWidth * 100}%`;
        }
    }

    constructor(
        public readonly analysis: AbstractAnalysis,
        top: number,
        right: number,
        left: number,
        bottom: number
    ) {

        this.build();

        this.top = top;
        this.left = left;
        this.right = right;
        
        this.bottom = bottom;

        

    }

    public build() {

        this.element = document.createElement( "div" );

        this.element.style.opacity = ".5";
        this.element.style.backgroundColor = "white";
        this.element.style.position = "absolute";


        this.root.appendChild( this.element );
    }

    setTop(value: number) {

        if ( value > this.bottom ) {
            this.top = this.bottom;
            this.bottom = value;
        } else {
            this._top = value;
        }

    }

    setBottom( value: number ) {
        if (value < this.top ) {
            this.bottom = this.top;
            this.top = value;
        } else {
            this.bottom = value;
        }
    }

    setLeft( value: number ) {
        if ( value > this.right ) {
            this.left = this.right;
            this.right = value;
        } else {
            this.left = value;
        }
    }

    setRight( value: number ) {
        if ( value < this.right ) {
            this.right = this.left;
            this.left = value;
        } else {
            this.right = value;
        }
    }

}