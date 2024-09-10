import { AbstractFile } from "../../../file/AbstractFile";
import { Instance } from "../../../file/instance";
import { CallbacksManager } from "../../callbacksManager";
import { AbstractPoint } from "./AbstractPoint";


type AnalysisEvent = ( analysis: AbstractAnalysis ) => void;

export abstract class AbstractAnalysis {

    /** Activation status */
    protected _active: boolean = true;
    public get active() { return this._active; }
    public readonly onActivation = new CallbacksManager<AnalysisEvent>();
    public readonly onDeactivation = new CallbacksManager<AnalysisEvent>();

    /** Selection status */
    protected _selected: boolean = false;
    public get selected() { return this._selected; }
    public readonly onSelected = new CallbacksManager<AnalysisEvent>;
    public readonly onDeselected = new CallbacksManager<AnalysisEvent>;

    public readonly layerRoot: HTMLDivElement;
    public readonly renderRoot: HTMLElement;

    public readonly points: Map<string,AbstractPoint> = new Map;

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
        this.deactivate();
        this.renderRoot.removeChild( this.layerRoot );
    }

    /** Activation / Deactivation */

    public activate() {
        this._active = true;
        this.onActivation.call( this );
    }

    public deactivate() {
        this._active = false;
        this.onDeactivation.call( this );
    }

    /** Selection / Deselection */
    
    public setSelected() {
        this._selected = true;
        this.onSelected.call( this );
        this.setColor( this.initialColor );
    }

    public setDeselected() {
        this._selected = false;
        this.onDeselected.call( this );
        this.setColor( "black" );
    }

    onResize = new CallbacksManager<() => void>;

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