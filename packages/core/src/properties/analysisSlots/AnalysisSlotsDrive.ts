import { Instance } from "../../file/instance";
import { AbstractProperty } from "../abstractProperty";
import { AbstractAnalysis } from "../analysis/internals/AbstractAnalysis";
import { CallbacksManager } from "../callbacksManager";
import { AnalysisSlot } from "./AnalysisSlot";

export type AnalysisSlotsMap = Map<number,AnalysisSlot>;

/** Say the slot number. True = next free. False = no slot at all */
export type SlotInitialisationValue = number|true|false;

export class AnalysisSlotsState extends AbstractProperty<AnalysisSlotsMap, Instance> {

    static MAX_SLOTS = 7;

    public readonly onSlotInit = new CallbacksManager<(number: number, slot: AnalysisSlot) =>void>
    public readonly onSlotRemove = new CallbacksManager<(number: number, slot: AnalysisSlot) =>void>

    public readonly onSlot1 = new CallbacksManager<( value: string|undefined ) => void>;
    public readonly onSlot2 = new CallbacksManager<( value: string|undefined ) => void>;
    public readonly onSlot3 = new CallbacksManager<( value: string|undefined ) => void>;
    public readonly onSlot4 = new CallbacksManager<( value: string|undefined ) => void>;
    public readonly onSlot5 = new CallbacksManager<( value: string|undefined ) => void>;
    public readonly onSlot6 = new CallbacksManager<( value: string|undefined ) => void>;
    public readonly onSlot7 = new CallbacksManager<( value: string|undefined ) => void>;
    
    getNextFreeSlotNumber(): number|undefined {

        for ( let i=1;i<= AnalysisSlotsState.MAX_SLOTS;i++ ) {
            if ( !this.hasSlot(i) ) return i;
        }

    }


    initSlot(
        slot: number,
        analysis: AbstractAnalysis
    ): AnalysisSlot {
        if ( this.hasSlot(slot) ) {
            throw new Error( `Slot ${slot} already taken! Clear it first or use 'replaceSlot' instead.` );
        }

        console.log( "initialising slot", 1, analysis );
        const value = new AnalysisSlot( slot, analysis );
        this.value.set( slot, value );
        this.onSlotInit.call( slot, value );
        this.callEffectsAndListeners();
        return value;
    }

    hasSlot(
        slot: number
    ): boolean {
        return this.value.has( slot );
    }

    getSlot(
        slot: number
    ): AnalysisSlot|undefined {
        return this.value.get( slot );
    }

    replaceSlot(
        slot: number,
        analysis: AbstractAnalysis
    ): AnalysisSlot {

        const value = this.getSlot( slot );

        if ( value && value.analysis.key !== analysis.key ) {
            this.parent.analysis.layers.removeAnalysis( value.analysis.key, false );
            value.setAnalysis( analysis );
            this.onSlotInit.call( slot, value );
            this.callEffectsAndListeners();
            return value;
        } else {
            return this.initSlot( slot, analysis );
        }

    }

    removeSlotAndAnalysis(
        slot: number
    ) {

        const value = this.value.get( slot );

        if ( value ) {

            const analysis = value.analysis;

            this.onSlotRemove.call( slot, value );

            if ( slot === 1 ) this.onSlot1.call( undefined );
            else if ( slot === 2 ) this.onSlot2.call( undefined );
            else if ( slot === 3 ) this.onSlot3.call( undefined );
            else if ( slot === 4 ) this.onSlot4.call( undefined );
            else if ( slot === 5 ) this.onSlot5.call( undefined );
            else if ( slot === 6 ) this.onSlot6.call( undefined );
            else if ( slot === 7 ) this.onSlot7.call( undefined );

            this.value.delete( slot );
            this.parent.analysis.layers.removeAnalysis( analysis.key, false );
            this.callEffectsAndListeners();
        }
    }

    getAnalysisSlot(
        analysis: AbstractAnalysis
    ): number|undefined {

        for ( let a of this.value.values() ) {
            if ( a.analysis.key === analysis.key ) {
                return a.slot;
            }
        }

    }

    removeSlotButNotAnalysis(
        analysis: AbstractAnalysis
    ) {

        for ( let a of this.value.values() ) {
            if ( a.analysis.key === analysis.key ) {
                this.onSlotRemove.call( a.slot, a );
                

                if ( a.slot === 1 ) this.onSlot1.call( undefined );
                else if ( a.slot === 2 ) this.onSlot2.call( undefined );
                else if ( a.slot === 3 ) this.onSlot3.call( undefined );
                else if ( a.slot === 4 ) this.onSlot4.call( undefined );
                else if ( a.slot === 5 ) this.onSlot5.call( undefined );
                else if ( a.slot === 6 ) this.onSlot6.call( undefined );
                else if ( a.slot === 7 ) this.onSlot7.call( undefined );

                this.value.delete( a.slot );
                this.callEffectsAndListeners();

            }
        }

    }



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

        if (type === "point") {

            if (top === undefined || left === undefined) {
                return;
            }

            const analysis = this.parent.analysis.layers.placePointAt(name, top, left, color, slotNumber);
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
            if (width + left > this.parent.width - 1) width = this.parent.width - left - 1;

            // Clamp height
            if (height < 0) height = 0;
            if (height + top > this.parent.height - 1) height = this.parent.height - top - 1;


            const analysis = type === "rectangle"
                ? this.parent.analysis.layers.placeRectAt(name, top, left, width + left, height + top, color, slotNumber)
                : this.parent.analysis.layers.placeEllipsisAt(name, top, left, width + left, height + top, color, slotNumber);
            if (avg) analysis.graph.setAvgActivation(true);
            if (min) analysis.graph.setMinActivation(true);
            if (max) analysis.graph.setMaxActivation(true);



            return analysis;


        }


    }




    protected validate(value: AnalysisSlotsMap): AnalysisSlotsMap {
        return value;
    }
    protected afterSetEffect(value: AnalysisSlotsMap): void {
        // throw new Error("Method not implemented.");
    }

    protected callEffectsAndListeners() {
        this.afterSetEffect( this.value );
        Object.values( this._listeners ).forEach( listener => listener( this.value ) );
    }

}