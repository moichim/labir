import { CallbacksManager } from "../../../callbacksManager";
import { AnalysisDrive } from "../../AnalysisDrive";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { AbstractPoint } from "../AbstractPoint";



type AnalysisAddedCallback = (analysis: AbstractAnalysis, layers: AbstractAnalysis[]) => void;
type AnalysisRemovedCallback = (key: string) => void;
type SelectionChangeEvent = ( selectedAnalysis: AbstractAnalysis[] ) => void;

export enum AnalysisAddPosition {
    PREPEND = 0,
    APPEND = 1
}

export class AnalysisStorage extends Map<string, AbstractAnalysis> {

    protected layers: Array<AbstractAnalysis> = [];

    public constructor(
        public readonly drive: AnalysisDrive
    ) {
        super();
    }


    // Adding analysis
    public readonly onAdd = new CallbacksManager<AnalysisAddedCallback>();
    public addAnalysis(
        analysis: AbstractAnalysis,
        where: AnalysisAddPosition = AnalysisAddPosition.PREPEND
    ) {

        if ( this.has( analysis.key ) ) {
            this.removeAnalysis( analysis.key );
        }

        this.set(analysis.key, analysis);
        analysis.init();

        // Add analysis to layer
        if ( where === AnalysisAddPosition.PREPEND ) {
            this.layers = [ analysis, ...this.layers ];
        } else {
            this.layers = [ ...this.layers, analysis ];
        }

        this.onAdd.call(analysis, this.all);
        this.drive.dangerouslySetValueFromStorage( this.all );
        return this;
    }

    // Removing analysis
    public onRemove = new CallbacksManager<AnalysisRemovedCallback>();
    removeAnalysis(key: string) {
        if (this.has(key)) {
            this.delete(key);
            // remove the analysis from layer
            this.layers = this.layers.filter( analysis => analysis.key !== key );
            this.onRemove.call(key);
            this.drive.dangerouslySetValueFromStorage( this.all );
        }
    }


    // Selecting analysis
    public readonly onSelectionChange = new CallbacksManager<SelectionChangeEvent>();

    /** Mark an analysis as selected */
    public select(
        analysis: string | AbstractAnalysis,
        exclusive: boolean = false
    ) {

        const item = analysis instanceof AbstractAnalysis
            ? analysis
            : this.get(analysis);

        if (item) {
            // Set current as selected
            item.setSelected();
            
            // If change is exclusive, deactive all other
            if (exclusive) {

                this.all
                    .filter(analysis => analysis.key !== item.key)
                    .forEach(analysis => analysis.setDeselected());

            }

            this.onSelectionChange.call( this.selectedOnly );

        } else {
            throw new Error(`Analysis ${analysis} not registered yet!`);
        }

        return this;

    }



    public get all() {
        return this.layers;
    }

    public get activeOnly() {
        return this.all.filter(analysis => analysis.active);
    }

    public get selectedOnly() {
        return this.all.filter(analysis => analysis.selected === true);
    }

    public get allPoints() {
        return this.extractPointsFromLayers( this.all )
    }

    public get selectedOnlyPoints() {
        return this.extractPointsFromLayers( this.selectedOnly );
    }

    protected extractPointsFromLayers( 
        layers: AbstractAnalysis[],
        activeOnly: boolean = false
    ) {
        return layers.reduce( (state,current) => {

            const currentPoints = activeOnly
                ? current.arrayOfActivePoints
                : current.arrayOfPoints

            return [...state, ...currentPoints]
        }, [] as AbstractPoint[] );
    }



}