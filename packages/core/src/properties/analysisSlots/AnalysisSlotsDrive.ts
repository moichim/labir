import { Instance } from "../../file/instance";
import { AbstractProperty } from "../abstractProperty";
import { AbstractAnalysis } from "../analysis/internals/AbstractAnalysis";
import { CallbacksManager } from "../callbacksManager";
import { AnalysisSlot } from "./AnalysisSlot";

export type AnalysisSlotsMap = Map<number,AnalysisSlot>;

export class AnalysisSlotsState extends AbstractProperty<AnalysisSlotsMap, Instance> {

    public readonly onSlotInit = new CallbacksManager<(number: number, slot: AnalysisSlot) =>void>
    public readonly onSlotRemove = new CallbacksManager<(number: number, slot: AnalysisSlot) =>void>


    initSlot(
        slot: number,
        analysis: AbstractAnalysis
    ) {
        if ( this.hasSlot(slot) ) {
            throw new Error( `Slot ${slot} already taken! Clear it first or use 'replaceSlot' instead.` );
        }
        const value = new AnalysisSlot( slot, analysis );
        this.value.set( slot, value );
        this.onSlotInit.call( slot, value );
        this.callEffectsAndListeners();
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
    ) {

        const value = this.getSlot( slot );

        if ( value && value.analysis.key !== analysis.key ) {
            this.parent.analysis.layers.removeAnalysis( value.analysis.key );
            value.setAnalysis( analysis );
            this.onSlotInit.call( slot, value );
            this.callEffectsAndListeners();
        } else {
            this.initSlot( slot, analysis );
        }
    }

    removeSlot(
        slot: number
    ) {

        const value = this.value.get( slot );

        if ( value ) {
            this.onSlotRemove.call( slot, value );
            this.parent.analysis.layers.removeAnalysis( value.analysis.key );
            this.value.delete( slot );
            this.callEffectsAndListeners();
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