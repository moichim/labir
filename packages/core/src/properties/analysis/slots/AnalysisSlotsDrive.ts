import { Instance } from "../../../file/instance";
import { AbstractProperty } from "../../abstractProperty";
import { AbstractAnalysis } from "../analysis/internals/AbstractAnalysis";
import { AbstractAreaAnalysis } from "../analysis/internals/area/AbstractAreaAnalysis";
import { PointAnalysis } from "../analysis/internals/point/PointAnalysis";
import { CallbacksManager } from "../../callbacksManager";
import { AnalysisSlot } from "./AnalysisSlot";

export type AnalysisSlotsMap = Map<number, AnalysisSlot>;

/** Say the slot number. True = next free. False = no slot at all */
export type SlotInitialisationValue = number | true | false;

/**
 * Create up to 7 slots for analysis of the image.
 * 
 * Value of this property is a map.
 */
export class AnalysisSlotsState extends AbstractProperty<AnalysisSlotsMap, Instance> {

    static MAX_SLOTS = 7;

    /** @deprecated Use particular assignement slot instead */
    public readonly onSlotInit = new CallbacksManager<(number: number, slot: AnalysisSlot) => void>
    /** @deprecated Use particular assignement slot instead */
    public readonly onSlotRemove = new CallbacksManager<(number: number) => void>

    public readonly onSlot1Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    public readonly onSlot2Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    public readonly onSlot3Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    public readonly onSlot4Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    public readonly onSlot5Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    public readonly onSlot6Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;
    public readonly onSlot7Assignement = new CallbacksManager<(slot: AnalysisSlot | undefined) => void>;



    public readonly onSlot1Serialize = new CallbacksManager<(value: string | undefined) => void>;
    public readonly onSlot2Serialize = new CallbacksManager<(value: string | undefined) => void>;
    public readonly onSlot3Serialize = new CallbacksManager<(value: string | undefined) => void>;
    public readonly onSlot4Serialize = new CallbacksManager<(value: string | undefined) => void>;
    public readonly onSlot5Serialize = new CallbacksManager<(value: string | undefined) => void>;
    public readonly onSlot6Serialize = new CallbacksManager<(value: string | undefined) => void>;
    public readonly onSlot7Serialize = new CallbacksManager<(value: string | undefined) => void>;

    /** Calculate the next free slot */
    getNextFreeSlotNumber(): number | undefined {

        for (let i = 1; i <= AnalysisSlotsState.MAX_SLOTS; i++) {
            if (!this.hasSlot(i)) return i;
        }

    }


    assignSlot(
        slot: number,
        analysis: AbstractAnalysis
    ): AnalysisSlot {


        // Remove the existing slot with the same number
        const existingSlot = this.getSlot(slot);
        if (existingSlot !== undefined) {
            this.removeSlotAndAnalysis(slot);
        }

        // Remove the existing slot with the identical analysis
        const analysisSlot = this.getAnalysisSlot(analysis);
        if (analysisSlot !== undefined) {
            this.unassignAnalysisFromItsSlot(this.getSlot(analysisSlot)!.analysis);
        }

        const value = new AnalysisSlot(slot, analysis);

        this.value.set(slot, value);

        const assignementManager = this.getOnAssignementManager(slot);
        const serialisationManager = this.getOnSerializeManager(slot);

        if (assignementManager) assignementManager.call(value);
        if (serialisationManager) serialisationManager.call(value.serialized);

        this.onSlotInit.call(slot, value);

        this.callEffectsAndListeners();

        return value;
    }

    hasSlot(
        slot: number
    ): boolean {
        return this.value.has(slot);
    }

    getSlot(
        slot: number
    ): AnalysisSlot | undefined {
        return this.value.get(slot);
    }

    public getSlotMap() {
        const map = new Map<number,AnalysisSlot|undefined>();

        [1,2,3,4,5,6,7].forEach( number => {

            if ( this.hasSlot( number ) ) {
                map.set( number, this.getSlot( number ) );
            } else {
                map.set( number, undefined );
            }

        } );

        return map;
    }


    getAnalysisSlot(
        analysis: AbstractAnalysis
    ): number | undefined {

        for (const a of this.value.values()) {
            if (a.analysis.key === analysis.key) {
                return a.slot;
            }
        }

    }


    /**
     * Completely remove the slot and also the corresponding analysis
     */
    removeSlotAndAnalysis(
        slot: number
    ) {

        const value = this.value.get(slot);

        if (value) {

            const analysis = value.analysis;

            this.emitOnAssignement(slot, undefined);

            this.value.delete(slot);

            this.parent.analysis.layers.removeAnalysis(analysis.key);

            this.callEffectsAndListeners();

        }
    }


    /**
     * Remove a slot that is assigned to a given analysis, but keep the analysis 
     */
    unassignAnalysisFromItsSlot(
        analysis: AbstractAnalysis
    ) {

        for (const a of this.value.values()) {

            if (a.analysis.key === analysis.key) {

                this.emitOnAssignement(a.slot, undefined);

                this.value.delete(a.slot);

                // Delete all other analysis in the slot of the group only 
                // when the synchronisation is on
                if ( this.parent.group.analysisSync.value === true ) {
                    this.parent.group.analysisSync.deleteSlot( this.parent, a.slot );
                }

                this.callEffectsAndListeners();

            }
        }

    }



    /** 
     * Create an analysis from a serialized state 
     */
    public createFromSerialized(
        serialized: string,
        slotNumber?: SlotInitialisationValue
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
            if (top > this.parent.height - 1) top = this.parent.height - 1;
        }

        // Clamp left
        if (left !== undefined) {
            if (left < 0) left = 0;
            if (left > this.parent.width - 1) left = this.parent.width - 1;
        }

        let analysis: AbstractAnalysis | undefined;


        // 1. Create the analysis

        if (type === "point") {

            if (top === undefined || left === undefined) {
                return;
            }

            analysis = this.parent.analysis.layers.placePointAt(name, top, left, color, false);


        } else {

            if (top === undefined || left === undefined || width === undefined || height === undefined) {
                return;
            }

            // Clamp width
            if (width < 0) width = 0;
            if (width + left > this.parent.width - 1) width = this.parent.width - left - 1;

            // Clamp height
            if (height < 0) height = 0;
            if (height + top > this.parent.height - 1) height = this.parent.height - top - 1;

            analysis = type === "rectangle"
                ? this.parent.analysis.layers.placeRectAt(name, top, left, width + left, height + top, color, false)
                : this.parent.analysis.layers.placeEllipsisAt(name, top, left, width + left, height + top, color, false);

        }

        // 2. Setup the analysis once it is created

        if (analysis !== undefined) {

            // Initialise graphs

            if (analysis instanceof PointAnalysis) {
                if (avg) analysis.graph.setAvgActivation(true);
            } else if (analysis instanceof AbstractAreaAnalysis) {
                if (avg) analysis.graph.setAvgActivation(true);
                if (min) analysis.graph.setMinActivation(true);
                if (max) analysis.graph.setMaxActivation(true);
            }

            // Initialise slot & emit serialised

            if ( slotNumber === false ) {
                // do nothing
            } else if ( slotNumber === true ) {

                const nextFreeSlot = this.getNextFreeSlotNumber();

                if (nextFreeSlot !== undefined ) 
                    this.assignSlot( nextFreeSlot, analysis );

            } else if ( slotNumber !== undefined ) {
                this.assignSlot( slotNumber, analysis );
            }

            return analysis;

        }


    }


    protected validate(value: AnalysisSlotsMap): AnalysisSlotsMap {
        return value;
    }


    protected afterSetEffect(): void { }


    /** 
     * Internal replacement of standard callbacks call. Here, the value is stored as a map reference, therefore there are no reassignements. Standard callbacks are called upon reassignement. This method is called in their place. 
     */
    private callEffectsAndListeners() {
        Object.values(this._listeners).forEach(listener => listener(this.value));
    }


    /** 
     * Whenever a slot is assigned, call both particular and general listeners 
     */
    private emitOnAssignement(
        slot: number,
        value: AnalysisSlot | undefined
    ): void {

        // Call particular assignement manager
        const assignement = this.getOnAssignementManager(slot);
        if (assignement) assignement.call(value);

        // Call particular serialized manager
        const serialization = this.getOnSerializeManager(slot);
        if (serialization) serialization.call(value ? value.serialized : undefined);

        // Call general callback
        if (value) {
            this.onSlotInit.call(slot, value);
        } else {
            this.onSlotRemove.call(slot);
        }

    }


    /** 
     * Whenever a slit serializes call the particular manager 
     */
    private emitSerializedValue(
        slot: number,
        value: string | undefined
    ) {

        const manager = this.getOnSerializeManager(slot);
        if (manager) {
            manager.call(value);
        }

    }


    /**
     * Get a callback manager that is triggered upon a slot serialisation
     */
    public getOnSerializeManager(slot: number) {
        if (slot === 1) return this.onSlot1Serialize;
        else if (slot === 2) return this.onSlot2Serialize;
        else if (slot === 3) return this.onSlot3Serialize;
        else if (slot === 4) return this.onSlot4Serialize;
        else if (slot === 5) return this.onSlot5Serialize;
        else if (slot === 6) return this.onSlot6Serialize;
        else if (slot === 7) return this.onSlot7Serialize;
    }


    /**
     * Get a callback manager that is triggered whenever a slot is assigned
     */
    public getOnAssignementManager(slot: number) {
        if (slot === 1) return this.onSlot1Assignement;
        else if (slot === 2) return this.onSlot2Assignement;
        else if (slot === 3) return this.onSlot3Assignement;
        else if (slot === 4) return this.onSlot4Assignement;
        else if (slot === 5) return this.onSlot5Assignement;
        else if (slot === 6) return this.onSlot6Assignement;
        else if (slot === 7) return this.onSlot7Assignement;
    }


    /**
     * Get value of a given slot
     */
    public getSlotValue(slot: number): string | undefined {
        if (this.hasSlot(slot)) {
            return this.getSlot(slot)?.serialized;
        }
    }


    /** 
     * Call a function on every existing slot skipping empty slots. 
     */
    public forEveryExistingSlot( fn: (slot:AnalysisSlot, num: number)=>void ) {

        const forSlot = ( num: number ) => {
            const slot = this.getSlot( num );
            if ( slot ) {
                fn( slot, num );
            }
        }

        for ( let i = 1; i <= 7; i++ ) {
            forSlot( i );
        }

    }


}