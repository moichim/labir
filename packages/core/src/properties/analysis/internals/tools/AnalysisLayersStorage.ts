import { CallbacksManager } from "../../../callbacksManager";
import { AnalysisDrive } from "../../AnalysisDrive";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { EllipsisAnalysis } from "../area/ellipsis/EllipsisAnalysis";
import { PointAnalysis } from "../point/PointAnalysis";
import { RectangleAnalysis } from "../area/rectangle/RectangleAnalysis";



type AnalysisAddedCallback = (analysis: AbstractAnalysis, layers: AbstractAnalysis[]) => void;
type AnalysisRemovedCallback = (key: string) => void;
type SelectionChangeEvent = ( selectedAnalysis: AbstractAnalysis[] ) => void;

export class AnalysisLayersStorage extends Map<string, AbstractAnalysis> {

    /** Array of all layers ordered from oldest to the newest */
    protected layers: Array<AbstractAnalysis> = [];


    /** Fired whenever an analysis is added */
    public readonly onAdd = new CallbacksManager<AnalysisAddedCallback>();

    /** Fired whenever an analysis is removed */
    public readonly onRemove = new CallbacksManager<AnalysisRemovedCallback>();

    /** Fired whenever the selection list changes */
    public readonly onSelectionChange = new CallbacksManager<SelectionChangeEvent>();


    /** Array of available colors */
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
    
    protected addAnalysis(
        analysis: AbstractAnalysis
    ) {

        if ( this.has( analysis.key ) ) {
            this.removeAnalysis( analysis.key );
        }

        // Add the color to the analysis
        analysis.setColor( analysis.initialColor );

        this.set(analysis.key, analysis);
        analysis.init();

        // Add analysis to layer
        this.layers = [ ...this.layers, analysis ];

        this.onAdd.call(analysis, this.all);
        this.drive.dangerouslySetValueFromStorage( this.all );

        return this;

    }

    
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




    /** Add a rectangular analysis in the given position and start editing it. */
    public createRectFrom( top: number, left: number ) {

        const newAnalysis = RectangleAnalysis.startAddingAtPoint(
            this.getNextName( "Rectangle" ),
            this.getNextColor(),
            this.drive.parent,
            top,
            left
        );

        this.addAnalysis( newAnalysis );

        return newAnalysis;

    }


    /** Build an ellyptical analysis at the given position. */
    public placeRectAt(
        key: string,
        top: number,
        left: number,
        right: number,
        bottom: number
    ) {
        const newAnalysis = RectangleAnalysis.build(
            key,
            this.getNextColor(),
            this.drive.parent,
            top,
            left,
            right,
            bottom
        );

        this.addAnalysis( newAnalysis );

        return newAnalysis;
    }


    /** Add an ellyptical analysis in the given position and start editing it */
    public createEllipsisFrom( top: number, left: number ) {

        const newAnalysis = EllipsisAnalysis.startAddingAtPoint(
            this.getNextName( "Ellipsis" ),
            this.getNextColor(),
            this.drive.parent,
            top, 
            left
        );

        this.addAnalysis( newAnalysis );

        return newAnalysis;

    }


    /** Build an ellyptical analysis at the given position. */
    public placeEllipsisAt(
        key: string,
        top: number,
        left: number,
        right: number,
        bottom: number
    ) {
        const newAnalysis = EllipsisAnalysis.build(
            key,
            this.getNextColor(),
            this.drive.parent,
            top,
            left,
            right,
            bottom
        );

        this.addAnalysis( newAnalysis );

        return newAnalysis;
    }


    public createPointAt(
        top: number,
        left: number
    ) {

        const newAnalysis = PointAnalysis.addAtPoint(
            this.getNextName( "Point" ),
            this.getNextColor(),
            this.drive.parent,
            top,
            left
        );

        this.addAnalysis( newAnalysis );

        return newAnalysis;

    }


    selectAll() {
        // Select unselected analysis without any emission
        this.all.filter( analysis =>  {
            if ( analysis.selected === false) {
                analysis.setSelected( false, false );
            }
        } );
        // Call the selection change event
        this.onSelectionChange.call( this.selectedOnly );
    }

    deselectAll() {

        // Deselect all selected
        this.selectedOnly.forEach( analysis => {
            analysis.setDeselected( false );
        } );

        // Call the selection change event
        this.onSelectionChange.call( this.selectedOnly );

    }



    /** Accessors */


    /** Array of all analysis ordered from the oldest to the newest. */
    public get all() {
        return this.layers;
    }

    /** Array of all active analysis ordered from the oldest to the newest. */
    public get selectedOnly() {
        return this.all.filter(analysis => analysis.selected === true);
    }



    /** Get color for the next analysis */
    protected getNextColor() {
        const nextNum = this.all.length;
        if ( nextNum < this.colors.length ) {
            return this.colors[ nextNum ];
        } else {
            return this.colors[ nextNum % this.colors.length ];
        }
    }


    /** Get name for the next analysis */
    protected getNextName( type: string ) {
        return `${type} ${this.all.length}`;
    }


}