import { AbstractAnalysis } from "../analysis/internals/AbstractAnalysis";
import { CallbacksManager } from "../callbacksManager";

export class AnalysisSlot {

    private _analysis: AbstractAnalysis;
    public get analysis() { return this._analysis; }

    private _serialized: string;
    public get serialized() { return this._serialized; }
    public readonly onSerialize = new CallbacksManager<(serializedValue: string, analysis: AbstractAnalysis) => void>;

    protected enqueuedSerialisation?: ReturnType<typeof setTimeout>;

    public constructor(
        public readonly slot: number,
        analysis: AbstractAnalysis
    ) {
        this._analysis = analysis;
        this.hydrate(analysis);
        this._serialized = this.analysis.toSerialized();
    }

    public setAnalysis(
        analysis: AbstractAnalysis
    ) {
        this.dehydrate(this._analysis);
        // Remove the existing analysis completely
        this.analysis.file.analysis.layers.removeAnalysis( this.analysis.key );
        this._analysis = analysis;
        this.hydrate(this._analysis);
    }

    private listenerKey(operation: string): string {
        return `slot ${this.slot} ${operation}`;
    }

    public dehydrate(analysis: AbstractAnalysis) {

        analysis.onSerializableChange.delete(this.listenerKey("serializable change"));

    }

    private hydrate(analysis: AbstractAnalysis) {

        // Serialize whenever name changes
        analysis.onSerializableChange.set(this.listenerKey("serializable change"), (analysis, change) => { 
            console.log( "recieved", change );
            this.enqueueSerialisation();
        });

    }

    protected enqueueSerialisation() {
        if (!this.enqueuedSerialisation) {
            this.enqueuedSerialisation = setTimeout(() => {
                this.serialize();
                this.enqueuedSerialisation = undefined;
            }, 0);
        }
    }

    protected serialize() {
        this._serialized = this.analysis.toSerialized();
        this.onSerialize.call(this._serialized, this.analysis);
        console.log( "serializing" );
    }

    public recieveSerialized(
        serialized: string
    ) {

        this.analysis.recievedSerialized(serialized);

        const newSerialized = this.analysis.toSerialized();
        console.log( newSerialized, serialized );

        if (newSerialized !== serialized) {
            this._serialized = newSerialized;
            this.onSerialize.call(this._serialized, this.analysis);
        }

    }

}