import { CallbacksManager } from "../../../callbacksManager";
import { AnalysisDrive } from "../../AnalysisDrive";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { EllipsisAnalysis } from "../area/ellipsis/EllipsisAnalysis";
import { PointAnalysis } from "../point/PointAnalysis";
import { RectangleAnalysis } from "../area/rectangle/RectangleAnalysis";
import { SlotInitialisationValue } from "../../../analysisSlots/AnalysisSlotsDrive";


type AnalysisAddedCallback = (analysis: AbstractAnalysis, layers: AbstractAnalysis[]) => void;
type AnalysisRemovedCallback = (key: string) => void;
type SelectionChangeEvent = (selectedAnalysis: AbstractAnalysis[]) => void;

export type SlotUnion = "analysis1" | "analysis2" | "analysis3" | "analysis4" | "analysis5" | "analysis6" | "analysis7";
export type SlotNumber = 1|2|3|4|5|6|7;

export const availableAnalysisColors = [
    "Orange",
    "Lightblue",
    "Green",
    "Brown",
    "Yellow",
    "Blue",
    "Pink",
    "DarkGoldenRod",
    "GreenYellow",
    "SpringGreen",
    "SkyBlue"
];

export class AnalysisLayersStorage extends Map<string, AbstractAnalysis> {

    /** Array of all layers ordered from oldest to the newest */
    protected layers: Array<AbstractAnalysis> = [];

    protected get slots() {return this.drive.parent.slots;}


    /** Fired whenever an analysis is added */
    public readonly onAdd = new CallbacksManager<AnalysisAddedCallback>();

    /** Fired whenever an analysis is removed */
    public readonly onRemove = new CallbacksManager<AnalysisRemovedCallback>();

    /** Fired whenever the selection list changes */
    public readonly onSelectionChange = new CallbacksManager<SelectionChangeEvent>();


    /** Array of available colors */
    public readonly colors = availableAnalysisColors;

    public constructor(
        public readonly drive: AnalysisDrive
    ) {
        super();
    }


    // Adding analysis

    protected addAnalysis(
        analysis: AbstractAnalysis,
        slotNumber?: SlotInitialisationValue
    ) {

        // Remove the existing analysis with the same key if exists
        if (this.has(analysis.key)) {
            this.removeAnalysis(analysis.key);
        }

        // Add the color to the analysis
        analysis.setColor(analysis.initialColor);

        // Store the analysis
        this.set(analysis.key, analysis);

        // Add analysis to layer
        this.layers = [...this.layers, analysis];

        // Assign to slots

        // Get slot number
        let slotNum = slotNumber === true
            ? this.slots.getNextFreeSlotNumber()
            : slotNumber === false
                ? undefined
                : slotNumber;

        if ( slotNum !== undefined ) {

            this.slots.hasSlot( slotNum )
                ? this.slots.replaceSlot( slotNum, analysis )
                : this.slots.initSlot( slotNum, analysis );

        }

        // Call callbacks
        this.onAdd.call(analysis, this.all);
        this.drive.dangerouslySetValueFromStorage(this.all);


        return this;

    }


    removeAnalysis(key: string, alsoRemoveSlot: boolean = true) {
        if (this.has(key)) {

            const analysis = this.get( key );

            if ( analysis ) {

                // Remove from slots
                if ( alsoRemoveSlot ) {
                    this.slots.removeSlotButNotAnalysis( analysis );
                }
                

                // Call the analysis's remove fn
                analysis.remove();

                // Delete here
                this.delete( key );

                // Update layers here
                this.layers = this.layers.filter(analysis => analysis.key !== key);

                // Update the parent value
                this.drive.dangerouslySetValueFromStorage(this.all);

                // Call the callback
                this.onRemove.call(key);

            }

            
        }
    }




    /** Add a rectangular analysis in the given position and start editing it. */
    public createRectFrom(top: number, left: number) {

        const newAnalysis = RectangleAnalysis.startAddingAtPoint(
            this.getNextName("Rectangle"),
            this.getNextColor(),
            this.drive.parent,
            top,
            left
        );

        this.addAnalysis(newAnalysis, true);

        return newAnalysis;

    }


    /** Build an ellyptical analysis at the given position. */
    public placeRectAt(
        name: string,
        top: number,
        left: number,
        right: number,
        bottom: number,
        color?: string,
        slotNumber?: SlotInitialisationValue
    ) {

        const newAnalysis = RectangleAnalysis.build(
            name,
            color ?? this.getNextColor(),
            this.drive.parent,
            top,
            left,
            right,
            bottom
        );

        newAnalysis.ready = true;

        this.addAnalysis(newAnalysis, slotNumber);

        return newAnalysis;
    }


    /** Add an ellyptical analysis in the given position and start editing it */
    public createEllipsisFrom(
        top: number,
        left: number
    ) {

        const newAnalysis = EllipsisAnalysis.startAddingAtPoint(
            this.getNextName("Ellipsis"),
            this.getNextColor(),
            this.drive.parent,
            top,
            left
        );

        this.addAnalysis(newAnalysis, true);

        return newAnalysis;

    }


    /** Build an ellyptical analysis at the given position. */
    public placeEllipsisAt(
        name: string,
        top: number,
        left: number,
        right: number,
        bottom: number,
        color?: string,
        slotNumber?: SlotInitialisationValue
    ) {
        const newAnalysis = EllipsisAnalysis.build(
            name,
            color ?? this.getNextColor(),
            this.drive.parent,
            top,
            left,
            right,
            bottom
        );

        newAnalysis.ready = true;

        this.addAnalysis(newAnalysis, slotNumber);

        return newAnalysis;
    }


    public createPointAt(
        top: number,
        left: number
    ) {

        const newAnalysis = PointAnalysis.addAtPoint(
            this.getNextName("Point"),
            this.getNextColor(),
            this.drive.parent,
            top,
            left
        );

        this.addAnalysis(newAnalysis, true);

        return newAnalysis;

    }

    public placePointAt(
        name: string,
        top: number,
        left: number,
        color?: string,
        slotNumber?: SlotInitialisationValue
    ) {
        const newAnalysis = PointAnalysis.addAtPoint(
            name,
            color ?? this.getNextColor(),
            this.drive.parent,
            top,
            left
        );

        newAnalysis.ready = true;

        this.addAnalysis(newAnalysis,slotNumber);

        return newAnalysis;
    }



    selectAll() {
        // Select unselected analysis without any emission
        this.all.filter(analysis => {
            if (analysis.selected === false) {
                analysis.setSelected(false, false);
            }
        });
        // Call the selection change event
        this.onSelectionChange.call(this.selectedOnly);
    }

    deselectAll() {

        // Deselect all selected
        this.selectedOnly.forEach(analysis => {
            analysis.setDeselected(false);
        });

        // Call the selection change event
        this.onSelectionChange.call(this.selectedOnly);

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

        const usedColors = this.all.map(analysis => analysis.initialColor);

        const availableColors = availableAnalysisColors.filter(color => !usedColors.includes(color));

        if (availableColors.length > 0) {
            return availableColors[0];
        } else {
            return availableAnalysisColors[0];
        }

    }


    /** Get name for the next analysis */
    protected getNextName(type: string) {
        return `${type} ${this.all.length}`;
    }


}