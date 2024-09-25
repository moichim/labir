import { Instance } from "../../../file/instance";
import { AreaAnalysisData, PointAnalysisData } from "../../../loading/workers/parsers/structure";
import { CallbacksManager } from "../../callbacksManager";
import { AnalysisGraph } from "../graphs/AnalysisGraph";
import { AbstractPoint } from "./AbstractPoint";


type AnalysisEvent = (analysis: AbstractAnalysis) => void;

export abstract class AbstractAnalysis {

    public abstract get graph(): AnalysisGraph;

    /** Selection status */
    protected _selected: boolean = false;
    public get selected() { return this._selected; }
    public readonly onSelected = new CallbacksManager<AnalysisEvent>;
    public readonly onDeselected = new CallbacksManager<AnalysisEvent>;

    /** Actions taken when the value changes. Called internally by `this.recalculateValues()` */
    public readonly onValues = new CallbacksManager<(min?: number, max?: number, avg?: number) => void>;

    /** Actions taken when the analysis moves or resizes anyhow. This is very much important and it is called from the edit tool. */
    public readonly onMoveOrResize = new CallbacksManager<(analysis: AbstractAnalysis) => void>

    /** The main DOM element of this analysis. Is placed in `this.renderRoot` */
    public readonly layerRoot: HTMLDivElement;

    /** Alias of the file's canvasLayer root. The analysis DOM will be placed here. */
    public get renderRoot(): HTMLElement {
        return this.file.canvasLayer.getLayerRoot()
    }

    public readonly points: Map<string, AbstractPoint> = new Map;

    public left!: number;
    public top!: number;
    public width!: number;
    public height!: number;


    /** Access all the file's analysis layers. */
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
        return Array.from(this.points.values());
    }

    public get arrayOfActivePoints() {
        return this.arrayOfPoints.filter(point => point.active);
    }

    protected _color: string = "black";
    public get color() { return this._color; }
    public setColor(value: string) {
        this._color = value;
        this.setColorCallback(value);
        this.onSetColor.call(value);
    }
    protected abstract setColorCallback(value: string): void;
    public onSetColor = new CallbacksManager<(value: string) => void>;

    public readonly initialColor: string;
    public readonly activeColor = "yellow";
    public readonly inactiveColor = "black";

    protected _graphMinActive: boolean = false;
    public get graphMinActive(): boolean {
        return this._graphMinActive;
    }

    protected _graphMaxActive: boolean = false;
    public get graphMaxActive(): boolean {
        return this._graphMaxActive;
    }

    protected _graphAvgActive: boolean = false;
    public get graphAvgActive(): boolean {
        return this._graphAvgActive;
    }

    public readonly onGraphActivation = new CallbacksManager<(
        min: boolean,
        max: boolean,
        avg: boolean
    ) => void>()

    protected emitGraphActivation() {
        this.onGraphActivation.call(
            this._graphMinActive,
            this._graphMaxActive,
            this._graphAvgActive
        );
    }
    /** Indicated whether the analysis is in the state of initial creation (using mouse drag) or if it is already finalized. */
    public ready: boolean = false;

    public constructor(
        public readonly key: string,
        public readonly file: Instance,
        initialColor: string
    ) {

        this.initialColor = initialColor;

        // Create the layer root
        this.layerRoot = document.createElement("div");
        this.layerRoot.style.position = "absolute";
        this.layerRoot.style.top = "0px";
        this.layerRoot.style.left = "0px";
        this.layerRoot.style.width = "100%";
        this.layerRoot.style.height = "100%";
        this.layerRoot.style.overflow = "hidden";
        this.layerRoot.id = `analysis_${this.key}`;

        this.renderRoot.appendChild(this.layerRoot);

        // This callback is absolutely crucial and may never be removed!
        /** @todo what happend if the callback key is set rendomly? I do not want this callback to be overriden anyhow! */
        this.onMoveOrResize.set("call recalculate values when a control point moves", () => {
            this.recalculateValues();
        });

    }

    public remove() {
        this.setDeselected();
        this.renderRoot.removeChild(this.layerRoot);
    }

    /** Selection / Deselection */

    public setSelected(
        exclusive: boolean = false,
        emitGlobalEvent: boolean = true
    ) {

        if (this.selected === true) {
            return;
        }

        // Internal mechanisms
        this._selected = true;
        this.onSelected.call(this);
        this.setColor(this.initialColor);

        // Eventually disable all other analysis
        if (exclusive === true) {
            this.layers.all
                .filter(analysis => analysis.key !== this.key)
                .forEach(analysis => {
                    if (analysis.selected) {
                        analysis.setDeselected(false);
                    }
                })
        }

        // Call selected listener
        if (emitGlobalEvent === true) {
            this.layers.onSelectionChange.call(this.layers.selectedOnly);
        }

    }

    public setDeselected(emitGlobalEvent: boolean = true) {

        if (this.selected === false) {
            return;
        }

        // Internal mechanisms
        this._selected = false;
        this.onDeselected.call(this);
        this.setColor(this.inactiveColor);

        // Deactivate all points
        this.arrayOfActivePoints.forEach(point => point.deactivate());

        // Eventually call global mechanisms
        if (emitGlobalEvent === true) {
            this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);
        }
    }


    /** Detect whether a coordinate is withing the analysis. */
    public abstract isWithin(x: number, y: number): boolean;

    /** Recalculate the analysis' values from the current position and dimensions. Called whenever the analysis is resized or whenever file's `pixels` change. */
    public recalculateValues() {

        const { min, max, avg } = this.getValues();
        this._min = min;
        this._max = max;
        this._avg = avg;
        this.onValues.call(this.min, this.max, this.avg);
    }

    /** Obtain the current values of the analysis using current position and dimensions */
    protected abstract getValues(): { min?: number, max?: number, avg?: number }

    /** Override this method to get proper analysis data. */
    public abstract getAnalysisData(): Promise<PointAnalysisData | AreaAnalysisData>;





}