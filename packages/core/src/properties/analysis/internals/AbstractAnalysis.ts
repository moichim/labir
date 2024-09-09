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



    public readonly points: Map<string,AbstractPoint> = new Map;

    public get arrayOfPoints() {
        return Array.from( this.points.values() );
    }

    public get arrayOfActivePoints() {
        return this.arrayOfPoints.filter( point => point.active );
    }

    public constructor(
        public readonly key: string,
        public readonly file: Instance
    ) {
        
    }

    public abstract init(): void;

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
    }

    public setDeselected() {
        this._selected = false;
        this.onDeselected.call( this );
    }

    onResize = new CallbacksManager<() => void>;

    

}