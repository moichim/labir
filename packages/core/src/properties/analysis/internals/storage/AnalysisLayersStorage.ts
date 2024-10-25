import { CallbacksManager } from "../../../callbacksManager";
import { AnalysisDrive } from "../../AnalysisDrive";
import { AbstractAnalysis } from "../AbstractAnalysis";
import { EllipsisAnalysis } from "../area/ellipsis/EllipsisAnalysis";
import { PointAnalysis } from "../point/PointAnalysis";
import { RectangleAnalysis } from "../area/rectangle/RectangleAnalysis";


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


    /** Fired whenever an analysis is added */
    public readonly onAdd = new CallbacksManager<AnalysisAddedCallback>();

    /** Fired whenever an analysis is removed */
    public readonly onRemove = new CallbacksManager<AnalysisRemovedCallback>();

    /** Fired whenever the selection list changes */
    public readonly onSelectionChange = new CallbacksManager<SelectionChangeEvent>();


    /** Array of available colors */
    public readonly colors = availableAnalysisColors;

    protected analysis1?: AbstractAnalysis;
    protected analysis2?: AbstractAnalysis;
    protected analysis3?: AbstractAnalysis;
    protected analysis4?: AbstractAnalysis;
    protected analysis5?: AbstractAnalysis;
    protected analysis6?: AbstractAnalysis;
    protected analysis7?: AbstractAnalysis;

    public get slot1() { return this.analysis1; }
    public get slot2() { return this.analysis2; }
    public get slot3() { return this.analysis3; }
    public get slot4() { return this.analysis4; }
    public get slot5() { return this.analysis5; }
    public get slot6() { return this.analysis6; }
    public get slot7() { return this.analysis7; }

    public readonly onSlot1 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();
    public readonly onSlot2 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();
    public readonly onSlot3 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();
    public readonly onSlot4 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();
    public readonly onSlot5 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();
    public readonly onSlot6 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();
    public readonly onSlot7 = new CallbacksManager<(analysis: AbstractAnalysis | undefined) => void>();


    protected hasFreeSlots() {

        return this.analysis1 === undefined
            || this.analysis2 === undefined
            || this.analysis3 === undefined
            || this.analysis4 === undefined
            || this.analysis5 === undefined
            || this.analysis6 === undefined
            || this.analysis7 === undefined;

    }

    protected getFreeSlotIndex():1|2|3|4|5|6|7|undefined {
        if (!this.hasFreeSlots()) {
            return undefined;
        }

        if (this.analysis1 === undefined) return 1;
        if (this.analysis2 === undefined) return 2;
        if (this.analysis3 === undefined) return 3;
        if (this.analysis4 === undefined) return 4;
        if (this.analysis5 === undefined) return 5;
        if (this.analysis6 === undefined) return 6;
        if (this.analysis7 === undefined) return 7;

        return undefined;

    }

    protected getFreeSlot(): SlotUnion | undefined {

        if (!this.hasFreeSlots()) {
            return undefined;
        }

        const index = this.getFreeSlotIndex();
        if ( index !== undefined ) {
            return `analysis${index}` as SlotUnion;
        }

        return undefined;

    }

    protected getAnalysisSlotIndex(analysis: AbstractAnalysis): 1|2|3|4|5|6|7|undefined {
        if ( this.analysis1 && this.analysis1.key === analysis.key )
            return 1;
        else if ( this.analysis2 && this.analysis2.key === analysis.key )
            return 2;
        else if ( this.analysis3 && this.analysis3.key === analysis.key )
            return 3;
        else if ( this.analysis4 && this.analysis4.key === analysis.key )
            return 4;
        else if ( this.analysis5 && this.analysis5.key === analysis.key )
            return 5;
        else if ( this.analysis6 && this.analysis6.key === analysis.key )
            return 6;
        else if ( this.analysis7 && this.analysis7.key === analysis.key )
            return 7;
        else
            return undefined;

    }

    public constructor(
        public readonly drive: AnalysisDrive
    ) {
        super();
    }


    // Adding analysis

    protected addAnalysis(
        analysis: AbstractAnalysis,
        slotNumber?: SlotNumber
    ) {

        if (!this.hasFreeSlots()) {
            console.log( "does not have free slots" );
            return;
        }

        if (this.has(analysis.key)) {
            const existingIndex = this.getAnalysisSlotIndex( analysis );
            if ( existingIndex !== undefined ) {
                const manager = this[`onSlot${existingIndex}`];
                manager.call( undefined );
            }
            this.removeAnalysis(analysis.key);
        }

        let slot = slotNumber !== undefined
            ? slotNumber
            : this.getFreeSlotIndex();

        const slotName = `analysis${slot}` as SlotUnion;
        const slotCallbackName = `onSlot${slot}` as keyof AnalysisLayersStorage;

        if ( slot !== undefined ) {
            this[slotName] = analysis;
            const manager = this[slotCallbackName] as CallbacksManager< (analysis: AbstractAnalysis) => void >;
            manager.call( analysis );
        }

        // Add the color to the analysis
        analysis.setColor(analysis.initialColor);

        this.set(analysis.key, analysis);

        // Add analysis to layer
        this.layers = [...this.layers, analysis];

        this.onAdd.call(analysis, this.all);
        this.drive.dangerouslySetValueFromStorage(this.all);

        return this;

    }


    removeAnalysis(key: string) {
        if (this.has(key)) {

            const slot = this.getAnalysisSlotIndex( this.get(key)! );
            if ( slot ) {
                this[`analysis${1}`] = undefined;
                const manager = this[`onSlot${slot}`];
                manager.call( undefined );
            }
            this.get(key)?.remove();
            this.delete(key);
            // remove the analysis from layer
            this.layers = this.layers.filter(analysis => analysis.key !== key);
            this.onRemove.call(key);
            this.drive.dangerouslySetValueFromStorage(this.all);
            
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

        this.addAnalysis(newAnalysis);

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
        slotNumber?: SlotNumber
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

        this.addAnalysis(newAnalysis);

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
        slotNumber?: SlotNumber
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

        this.addAnalysis(newAnalysis);

        return newAnalysis;

    }

    public placePointAt(
        name: string,
        top: number,
        left: number,
        color?: string,
        slotNumber?: SlotNumber
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

    public createFromSerialized(
        serialized: string,
        slotNumber?: SlotNumber
    ): AbstractAnalysis | undefined {

        const splitted = serialized
            .split(";")
            .map(segment => segment.trim());

        if (splitted.length < 2) {
            return;
        }

        const name = splitted[0] !== undefined && splitted[0].length > 0 ? splitted[0] : undefined;

        if (name === undefined) {
            return;
        }

        const type = splitted[1];

        if (!["rectangle", "ellipsis", "point"].includes(type)) {
            return;
        }

        let top = AbstractAnalysis.serializedGetNumericalValueByKey(splitted, "top");
        let left = AbstractAnalysis.serializedGetNumericalValueByKey(splitted, "left");
        const color = AbstractAnalysis.serializedGetStringValueByKey(splitted, "color");

        let width = AbstractAnalysis.serializedGetNumericalValueByKey(splitted, "width");
        let height = AbstractAnalysis.serializedGetNumericalValueByKey(splitted, "height");


        const avg = AbstractAnalysis.serializedSegmentsHasExact(splitted, "avg");
        const min = AbstractAnalysis.serializedSegmentsHasExact(splitted, "min");
        const max = AbstractAnalysis.serializedSegmentsHasExact(splitted, "max");

        // Clamp top
        if (top !== undefined) {
            if (top < 0) top = 0;
            if (top > this.drive.parent.height - 1) top = this.drive.parent.height - 1;
        }

        // Clamp left
        if (left !== undefined) {
            if (left < 0) left = 0;
            if (left > this.drive.parent.width - 1) left = this.drive.parent.width - 1;
        }

        if (type === "point") {

            if (top === undefined || left === undefined) {
                return;
            }

            const analysis = this.placePointAt(name, top, left, color, slotNumber);
            if (avg) {
                analysis.graph.setAvgActivation(true);
            }
            return analysis;

        } else {

            if (top === undefined || left === undefined || width === undefined || height === undefined) {
                return;
            }

            // Clamp width
            if (width < 0) width = 0;
            if (width + left > this.drive.parent.width - 1) width = this.drive.parent.width - left - 1;

            // Clamp height
            if (height < 0) height = 0;
            if (height + top > this.drive.parent.height - 1) height = this.drive.parent.height - top - 1;


            const analysis = type === "rectangle"
                ? this.placeRectAt(name, top, left, width + left, height + top, color, slotNumber)
                : this.placeEllipsisAt(name, top, left, width + left, height + top, color, slotNumber);
            if (avg) analysis.graph.setAvgActivation(true);
            if (min) analysis.graph.setMinActivation(true);
            if (max) analysis.graph.setMaxActivation(true);



            return analysis;


        }


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