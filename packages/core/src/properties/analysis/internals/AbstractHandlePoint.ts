import { AbstractAnalysis } from "./AbstractAnalysis";
import { AbstractPoint } from "./AbstractPoint";

export abstract class AbstractHandlePoint extends AbstractPoint {

    constructor(
        key: string,
        x: number,
        y: number,
        analysis: AbstractAnalysis,
        color: string
    ) {
        super(key, x,y,analysis, color);
        this._color = color;
        this.setColor(color);
    }



    createInnerElement(): HTMLDivElement {

        const inner = document.createElement( "div" );
        inner.style.position = "absolute";
        inner.style.top = "-5px";
        inner.style.left = "-5px";

        inner.style.width = "10px";
        inner.style.height = "10px";
        inner.style.position = "absolute";
        inner.style.backgroundColor = this.color;

        return inner;

    }

    public onMouseEnter(): void {
        this._isHover = true;
        if ( this.innerElement ) {
            this.innerElement.style.boxShadow = "0px 0px 10px white";
            this.innerElement.style.borderWidth = "1px";
            this.innerElement.style.borderStyle = "solid";
            this.innerElement.style.borderColor = "white";
        }
    }
    public onMouseLeave(): void {
        this._isHover = false;
        if ( this.innerElement ) {
            this.innerElement.style.removeProperty( "box-shadow" );
            this.innerElement.style.removeProperty( "border-width" );
            this.innerElement.style.removeProperty( "border-style" );
            this.innerElement.style.removeProperty( "border-color" );
        }
    }

}