import { AbstractFile } from "../../../file/AbstractFile";
import { CallbacksManager } from "../../callbacksManager";
import { AbstractPoint } from "./AbstractPoint";


type AnalysisEvent = ( analysis: AbstractAnalysis ) => void;

export abstract class AbstractAnalysis {

    /** Selection status */
    protected _selected: boolean = false;
    public get selected() { return this._selected; }
    public readonly onSelected = new CallbacksManager<AnalysisEvent>;
    public readonly onDeselected = new CallbacksManager<AnalysisEvent>;

    public readonly onResize = new CallbacksManager<() => void>;

    public readonly layerRoot: HTMLDivElement;
    public readonly renderRoot: HTMLElement;

    public readonly points: Map<string,AbstractPoint> = new Map;

    public left!: number;
    public top!: number;
    public width!: number;
    public height!: number;


    public get layers() {
        return this.file.analysis.layers;
    }

    protected _min?: number;
    public get min() {
        return this._min;
    }
    
    protected _max?: number;
    public get max() {
        return this._max;
    }

    protected _avg?: number;
    public get avg() {
        return this._avg;
    }


    public get arrayOfPoints() {
        return Array.from( this.points.values() );
    }

    public get arrayOfActivePoints() {
        return this.arrayOfPoints.filter( point => point.active );
    }

    protected _color: string = "black";
    public get color() {return this._color;}
    public setColor( value: string ) {
        this._color = value;
        this.setColorCallback(value);
        this.onSetColor.call( value );
    }
    protected abstract setColorCallback( value: string ): void;
    public onSetColor = new CallbacksManager<(value:string) => void>;


    public ready: boolean = false;

    public constructor(
        public readonly key: string,
        public readonly file: AbstractFile,
        public readonly initialColor: string
    ) {

        // Append the render root
        this.renderRoot = this.file.canvasLayer.getLayerRoot();

        // Create the layer root
        this.layerRoot = document.createElement( "div" );
        this.layerRoot.style.position = "absolute";
        this.layerRoot.style.top = "0px";
        this.layerRoot.style.left = "0px";
        this.layerRoot.style.width = "100%";
        this.layerRoot.style.height = "100%";
        this.layerRoot.style.overflow = "hidden";
        this.layerRoot.id = `analysis_${this.key}`;

        this.renderRoot.appendChild( this.layerRoot );

    }

    public abstract init(): void;

    public remove() {
        this.setDeselected();
        this.renderRoot.removeChild( this.layerRoot );
    }

    /** Selection / Deselection */
    
    public setSelected( 
        exclusive: boolean = false,
        emitGlobalEvent: boolean = true
    ) {

        if ( this.selected === true ) {
            return;
        }

        // Internal mechanisms
        this._selected = true;
        this.onSelected.call( this );
        this.setColor( this.initialColor );

        // Eventually disable all other analysis
        if ( exclusive === true ) {
            this.layers.all
                .filter( analysis => analysis.key !== this.key )
                .forEach( analysis => {
                    if ( analysis.selected ) {
                        analysis.setDeselected( false );
                    }
                } )
        }

        // Call selected listener
        if ( emitGlobalEvent === true ) {
            this.layers.onSelectionChange.call( this.layers.selectedOnly );
        }

    }

    public setDeselected( emitGlobalEvent: boolean = true ) {

        if ( this.selected === false ) {
            return;
        }

        // Internal mechanisms
        this._selected = false;
        this.onDeselected.call( this );
        this.setColor( "black" );

        // Deactivate all points
        this.arrayOfActivePoints.forEach( point => point.deactivate() );

        // Eventually call global mechanisms
        if ( emitGlobalEvent === true ) {
            this.file.analysis.layers.onSelectionChange.call( this.file.analysis.layers.selectedOnly );
        }
    }

    

    public abstract isWithin( x: number, y: number): boolean;

    public recalculateValues() {
        const { min, max, avg } = this.getValues();
        this._min = min;
        this._max = max;
        this._avg = avg;
        this.onValues.call( this.min, this.max, this.avg );
    }

    protected abstract getValues(): {min?: number, max?: number, avg?: number}

    public readonly onValues = new CallbacksManager< (min?: number, max?: number, avg?: number) => void >;

    

}