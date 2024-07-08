import { FileReaderService, FileServiceStates } from "../FileReaderService";

type PropertyListenersTypes = FileServiceStates;

type PropertyListenerFn<T extends PropertyListenersTypes> = (value: T) => void


/** 
 * A common basis for internal observable
 * @internal 
 */
export abstract class AbstractProperty<
    ValueType extends PropertyListenersTypes
> {

    protected _value: ValueType;

    public constructor(
        public readonly parent: FileReaderService,
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