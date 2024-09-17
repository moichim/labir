import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractPoint } from "../AbstractPoint";

export class PointPoint extends AbstractPoint {
    

    public static size = 20;
    public static sizePx( aspect: number = 1 ) {
        return Math.round( PointPoint.size * aspect ).toString() + "px";
    }

    protected axisX?: HTMLDivElement;
    protected axisY?: HTMLDivElement;
    protected center?: HTMLDivElement;

    public constructor(
        key: string,
        top: number,
        left: number,
        analysis: AbstractAnalysis,
        color: string
    ) {
        super(
            key,
            top,
            left,
            analysis,
            color
        )

        this.axisX = this.buildAxisX();
        this.axisY = this.buildAxisY();
        this.center = this.buildCenter();

        this.innerElement.appendChild( this.axisX );
        this.innerElement.appendChild( this.axisY );
        this.innerElement.appendChild( this.center );

        this.analysis.onValues.set( this.key, () => {
            
            const colorFromCurrentPalette = this.analysis.file.getColorAtPoint(this.x, this.y);
            
            if ( this.center && colorFromCurrentPalette ) {
                this.center.style.backgroundColor = colorFromCurrentPalette;
            }

        } );

    }

    public mayMoveToX(value: number): boolean {
        return value <= this.file.width && value >= 0;
    }

    public mayMoveToY(value: number): boolean {
        return value <= this.file.height && value >= 0;
    }
    createInnerElement(): HTMLDivElement {
        const element = document.createElement( "div" );

        element.style.position = "absolute";
        element.style.top = PointPoint.sizePx( -.5 );
        element.style.left = PointPoint.sizePx( -.5 );
        element.style.width = PointPoint.sizePx();
        element.style.height = PointPoint.sizePx();

        return element;
    }

    protected buildAxisX(): HTMLDivElement {
        const axis = document.createElement( "div" );
        axis.style.position = "absolute";
        axis.style.width = "100%";
        axis.style.height = "1px";
        axis.style.left = "0px";
        axis.style.top = PointPoint.sizePx( .5 );
        return axis;
    }

    protected buildAxisY(): HTMLDivElement {
        const axis = document.createElement( "div" );
        axis.style.position = "absolute";
        axis.style.width = "1px";
        axis.style.height = "100%";
        axis.style.left = PointPoint.sizePx( .5 );
        axis.style.top = "0px";
        return axis;
    }

    protected buildCenter(): HTMLDivElement {
        
        const center = document.createElement( "div" );
        center.style.position = "absolute";
        center.style.top = `calc( ${PointPoint.sizePx(.5)} - 3px )`;
        center.style.left = `calc( ${PointPoint.sizePx(.5)} - 3px )`;;
        center.style.width = "5px";
        center.style.height = "5px";
        center.style.borderStyle = "solid";
        center.style.borderWidth = "1px";

        const currentColor = this.analysis.file.getColorAtPoint( this.x, this.y )
        if ( currentColor )
            center.style.backgroundColor = currentColor;

        return center;
    }

    protected onSetColor(value: string): void {
        console.log( "setting color", value, this.axisX, this.axisY );
        if ( this.axisX ) {
            this.axisX.style.backgroundColor = value;
        }
        if ( this.axisY ) {
            this.axisY.style.backgroundColor = value;
        }
        if ( this.center ) {
            this.center.style.borderColor = value;
        }
    }


    protected actionOnMouseEnter(): void {
        console.log( "mouseenter point", this, this.isInSelectedLayer() );
        if ( this.isInSelectedLayer() ) {
            this.setColor( "yellow" );
        }
        
    }
    protected actionOnMouseLeave(): void {
        console.log( "mouseleave point", this, this.isInSelectedLayer() );
        if (this.isInSelectedLayer()) {
            this.setColor( this.analysis.initialColor );
        } else {
            this.setColor( "black" );
        }
        // throw new Error("Method not implemented.");
    }

    protected actionOnActivate(): void {
        if ( this.innerElement ) {
            this.setColor( "yellow" );
        }
    }
    protected actionOnDeactivate(): void {
        if ( this.innerElement ) {
            this.setColor( this.color );
        }
    }
    
    public getRadius(): number {
        return 10;
    }

    

}