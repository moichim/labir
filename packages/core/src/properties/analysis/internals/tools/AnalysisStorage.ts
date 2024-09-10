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

    public readonly colors = [
        "orange",
        "lightblue",
        "green",
        "brown",
        "yellow",
        "blue",
        "pink"
    ];

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

        // Add the color to the analysis
        analysis.setColor( analysis.initialColor );

        this.set(analysis.key, analysis);
        analysis.init();

        this.layers = [ ...this.layers, analysis ];

        // Add analysis to layer
        /*
        if ( where === AnalysisAddPosition.PREPEND ) {
            this.layers = [ analysis, ...this.layers ];
        } else {
            this.layers = [ ...this.layers, analysis ];
        }
        */

        this.onAdd.call(analysis, this.all);
        this.drive.dangerouslySetValueFromStorage( this.all );
        return this;
    }

    // Removing analysis
    public onRemove = new CallbacksManager<AnalysisRemovedCallback>();
    removeAnalysis(key: string) {
        if (this.has(key)) {
            this.get( key )?.remove();
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

    public deselect(
        analysis: AbstractAnalysis
    ) {
        analysis.setDeselected();
        this.onSelectionChange.call( this.selectedOnly );
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

    public getNextColor() {
        let nextNum = this.all.length;
        if ( nextNum < this.colors.length ) {
            return this.colors[ nextNum ];
        } else {
            return this.colors[ nextNum % this.colors.length ];
        }
    }



}