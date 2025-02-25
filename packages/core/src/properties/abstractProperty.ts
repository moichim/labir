import { Instance } from "../file/instance";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { ThermalStatistics } from "../hierarchy/ThermalRegistry";
import { ThermalMinmaxOrUndefined } from "./scale/abstractMinmaxProperty";
import { AnalysisDataStateValue } from "./analysis/data/AnalysisDataState";
import { AbstractAnalysis } from "./analysis/analysis/internals/AbstractAnalysis";
import { ThermalCursorPositionOrUndefined } from "./cursor/CursorPositionDrive";
import { ThermalRangeOrUndefined } from "./scale/RangeDriver";
import { AbstractTool } from "./analysis/tool/internals/AbstractTool";
import { AnalysisSlotsMap } from "./analysis/slots/AnalysisSlotsDrive";
import { ThermalGraphGroupDataOrUndefined } from "./analysis/group/AnalysisGroupGraph";

type PropertyListenersTypes = boolean
    | number
    | string
    | ThermalRangeOrUndefined
    | ThermalMinmaxOrUndefined
    | ThermalCursorPositionOrUndefined
    | ThermalGroup[]
    | ThermalStatistics[]
    | Instance[]
    | AbstractAnalysis[]
    | AbstractTool
    | AnalysisDataStateValue
    | AnalysisSlotsMap
    | ThermalGraphGroupDataOrUndefined;

export type PropertyListenerFn<T extends PropertyListenersTypes> = (value: T) => void

export interface IBaseProperty { }


/** 
 * A common basis for all observable properties 
 * @internal 
 */
export abstract class AbstractProperty<
    ValueType extends PropertyListenersTypes,
    ParentType extends IBaseProperty
> {

    protected _value: ValueType;

    public constructor(
        public readonly parent: ParentType,
        public readonly _initial: ValueType
    ) {
        this._value = this.validate(this._initial);
    }

    public reset() {
        this.value = this._initial;
    }

    protected abstract validate(value: ValueType): ValueType;

    protected abstract afterSetEffect(value: ValueType): void

    /** Get the current value @readonly */
    public get value() {
        return this._value;
    };

    /** Set the value and call all listeners */
    protected set value(
        value: ValueType
    ) {
        this._value = this.validate(value);
        this.afterSetEffect(this._value);
        Object.values(this._listeners).forEach(listener => listener(this._value));
    }

    protected _listeners: {
        [index: string]: PropertyListenerFn<ValueType>
    } = {}

    addListener(
        id: string,
        listener: PropertyListenerFn<ValueType>
    ) {

        if (id in this._listeners) {
            delete this._listeners[id];
        }
        this._listeners[id] = listener;
    }

    removeListener(
        id: string
    ) {
        if (id in this._listeners) {
            delete this._listeners[id];
        }
    }

    clearAllListeners() {
        this._listeners = {};
    }

}