import { Instance, SlotNumber, ThermalGroup } from "@labirthermal/core";
import { createContext } from "@lit/context";
import { PropertyValues, ReactiveController, ReactiveControllerHost } from "lit";
import { ThermalFileFailure } from "packages/core/dist";
import { FileConsumerController } from "./FileConsumerController";
import { BaseElement } from "../BaseElement";

export interface ComponentWithFileProvider extends ReactiveControllerHost {

    UUID: string;

    group?: ThermalGroup;

    file?: Instance;

    failure?: ThermalFileFailure;

    loading?: boolean;

    ready?: boolean;

    ms?: number;
    playing?: boolean;
    analysis1?: string;
    analysis2?: string;
    analysis3?: string;
    analysis4?: string;
    analysis5?: string;
    analysis6?: string;
    analysis7?: string;

}

export const FileContextProviderContext = createContext<FileProviderController>( "file-context-provider" );


export class FileProviderController implements ReactiveController {

    declare host: ComponentWithFileProvider;

    private readonly UUID_INTERNAL: string;

    /** Alias on the instance assigned to the host */
    public get instance(): Instance | undefined { return this.host.file; }

    /** Alias on the current time in milliseconds */
    public get ms(): number | undefined { return this.host.ms; }

    /** Alias on the current state of the analysis1 property of the host */
    public get analysis1(): string | undefined { return this.host.analysis1; }
    /** Alias on the current state of the analysis2 property of the host */
    public get analysis2(): string | undefined { return this.host.analysis2; }
    /** Alias on the current state of the analysis3 property of the host */
    public get analysis3(): string | undefined { return this.host.analysis3; }
    /** Alias on the current state of the analysis4 property of the host */
    public get analysis4(): string | undefined { return this.host.analysis4; }
    /** Alias on the current state of the analysis5 property of the host */
    public get analysis5(): string | undefined { return this.host.analysis5; }
    /** Alias on the current state of the analysis6 property of the host */
    public get analysis6(): string | undefined { return this.host.analysis6; }
    /** Alias on the current state of the analysis7 property of the host */
    public get analysis7(): string | undefined { return this.host.analysis7; }


    private consumersInstancesCallback: Map<
        BaseElement, 
        (instance?: Instance) => void
    > = new Map();
    
    private consumersFailureCallback: Map<
        BaseElement, 
        (failure?: ThermalFileFailure) => void
    > = new Map();



    public constructor(host: ComponentWithFileProvider) {

        this.host = host;
        this.UUID_INTERNAL = this.host.UUID + "__file-provider-controller";
        this.host.addController(this);

    }

    hostConnected(): void {
        console.log( "Tady je kontroler" );
    }

    public onUpdated(
        _changedProperties: PropertyValues<ComponentWithFileProvider>
    ): void {

        // If the file property was changed, update the instance and contexts accordingly
        if (_changedProperties.has("file")) {

            if (this.host.file) {
                this.recieveInstance(this.host.file);
            } {

                const previousInstance = _changedProperties.get("file") as Instance | undefined;

                if (previousInstance) {
                    this.removeFile(previousInstance);
                }

            }

        }

        else if (this.host.file) {

            // If the MS Was changed from the outside, update the file internal timeline

            if (_changedProperties.has("ms") && this.host.ms) {

                // If the parameter value is not a number, ignore it
                if (isNaN(this.host.ms)) {

                } else {

                    const safeMs = Math.round(
                        Math.abs(
                            Math.min(
                                this.host.file.duration,
                                this.host.ms
                            )
                        )
                    );

                    if (safeMs !== this.host.file.timeline.currentMs) {
                        this.host.file.timeline.setRelativeTime(safeMs);
                    }

                }

                if (this.host.file && this.host.file.duration) {

                }

            }

            // Perform the updates of analyses

            this.handleAnalysisUpdate(1, _changedProperties);
            this.handleAnalysisUpdate(2, _changedProperties);
            this.handleAnalysisUpdate(3, _changedProperties);
            this.handleAnalysisUpdate(4, _changedProperties);
            this.handleAnalysisUpdate(5, _changedProperties);
            this.handleAnalysisUpdate(6, _changedProperties);
            this.handleAnalysisUpdate(7, _changedProperties);

        }

    }

    private handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<ComponentWithFileProvider>
    ): void {

        const field = `analysis${index}` as keyof ComponentWithFileProvider;

        if (_changedProperties.has(field) && this.host.file) {

            const slot = this.host.file.slots.getSlot(index);

            const oldValue = _changedProperties.get(field) as string | undefined | null;

            const newValue = this.host[field] as string | undefined | null;

            // If the slot had not existed before, create the analysis and set it as selected
            if (
                slot
                && newValue
                && !oldValue
            ) {

                const analysis = this.host.file.slots.createAnalysisFromSerialized(
                    newValue,
                    index
                );

                analysis?.setSelected(
                    false,
                    true
                );

            }

            // If the slot was emptied, remove the analysis
            else if (
                slot
                && !newValue
                && oldValue
            ) {
                this.host.file.slots.removeSlotAndAnalysis(index);
            }

            // In other cases, the analysis was only modified, so update it
            else if (
                slot
                && newValue
                && newValue !== oldValue
            ) {
                slot.recieveSerialized(newValue);
            }



        }


    }

    public removeFile(
        instance: Instance
    ): void {

        // Clear the existing instance contexts
        this.clearListeners(instance);

        // Core classes
        this.host.file = undefined;
        this.host.failure = undefined;
        // File states
        this.host.ms = undefined;
        this.host.ready = undefined;
        this.host.loading = undefined;
        this.host.playing = undefined;
        // Analyses
        this.host.analysis1 = undefined;
        this.host.analysis2 = undefined;
        this.host.analysis3 = undefined;
        this.host.analysis4 = undefined;
        this.host.analysis5 = undefined;
        this.host.analysis6 = undefined;
        this.host.analysis7 = undefined;

        this.announceChangeOfInstance(undefined);

    }

    public recieveInstance(
        instance: Instance
    ): void {

        // Remove an existing instance if any
        if (this.host.file) {
            this.clearListeners(this.host.file);
        }

        this.host.failure = undefined;
        this.host.loading = false;
        this.host.ready = true;
        this.host.playing = instance.timeline.isPlaying;

        // Initialise the listeners for the new instance
        this.initialiseListeners(instance);

        // Assignement must occure before annnouncing the change of instance
        this.host.file = instance;

        // Call the update of all consumers
        this.announceChangeOfInstance(instance);

    }

    private initialiseListeners(
        instance: Instance
    ): void {

        // Synchronise the internal MS state with the component state
        instance.timeline.callbacksChangeFrame.set(
            this.UUID_INTERNAL,
            (frame) => {
                if (this.host.ms !== frame.relative) {
                    this.host.ms = frame.relative;
                }
            }
        );

        // Synchronise the internal playing state with the component state
        instance.timeline.callbacksPlay.set(
            this.UUID_INTERNAL,
            () => {
                if (this.host.playing !== true) {
                    this.host.playing = true;
                }
            }
        );

        instance.timeline.callbacksPause.set(
            this.UUID_INTERNAL,
            () => {
                if (this.host.playing !== false) {
                    this.host.playing = false;
                }
            }
        );
        
        instance.timeline.callbacksEnd.set(
            this.UUID_INTERNAL,
            () => {
                if (this.host.playing !== false) {
                    this.host.playing = false;
                }
            }
        );

        instance.timeline.callbacksStop.set(
            this.UUID_INTERNAL,
            () => {
                if (this.host.playing !== false) {
                    this.host.playing = false;
                }
            }
        );

        // Initialise the analysis states synchronisation

        instance.slots.onSlot1Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis1 = value
        );

        instance.slots.onSlot2Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis2 = value
        );

        instance.slots.onSlot3Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis3 = value
        );

        instance.slots.onSlot4Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis4 = value
        );

        instance.slots.onSlot5Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis5 = value
        );

        instance.slots.onSlot6Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis6 = value
        );

        instance.slots.onSlot7Serialize.set(
            this.UUID_INTERNAL,
            value => this.host.analysis7 = value
        );

    }

    private clearListeners(
        instance: Instance
    ): void {

        instance.slots.onSlot1Serialize.delete(this.UUID_INTERNAL);
        instance.slots.onSlot2Serialize.delete(this.UUID_INTERNAL);
        instance.slots.onSlot3Serialize.delete(this.UUID_INTERNAL);
        instance.slots.onSlot4Serialize.delete(this.UUID_INTERNAL);
        instance.slots.onSlot5Serialize.delete(this.UUID_INTERNAL);
        instance.slots.onSlot6Serialize.delete(this.UUID_INTERNAL);
        instance.slots.onSlot7Serialize.delete(this.UUID_INTERNAL);
        instance.timeline.callbacksChangeFrame.delete(this.UUID_INTERNAL);
        instance.timeline.callbacksPlay.delete(this.UUID_INTERNAL);
        instance.timeline.callbacksPause.delete(this.UUID_INTERNAL);
        instance.timeline.callbacksEnd.delete(this.UUID_INTERNAL);

    }

    public internalStateToAttributes(
        instance: Instance
    ): void {

        this.host.ms = instance.timeline.currentMs;

        this.host.analysis1 = instance.slots.getSlotValue(1);
        this.host.analysis2 = instance.slots.getSlotValue(2);
        this.host.analysis3 = instance.slots.getSlotValue(3);
        this.host.analysis4 = instance.slots.getSlotValue(4);
        this.host.analysis5 = instance.slots.getSlotValue(5);
        this.host.analysis6 = instance.slots.getSlotValue(6);
        this.host.analysis7 = instance.slots.getSlotValue(7);

    }

    public attributesToInternalState(
        instance: Instance
    ): void {

        if (this.host.ms !== undefined) {
            instance.timeline.setRelativeTime(this.host.ms);
        }

        const imposeAnalysis = (
            slot: number,
            value?: string
        ) => {
            if (value) {
                instance.slots.createAnalysisFromSerialized(
                    value,
                    slot
                );
            }
        }

        imposeAnalysis(1, this.host.analysis1);
        imposeAnalysis(2, this.host.analysis2);
        imposeAnalysis(3, this.host.analysis3);
        imposeAnalysis(4, this.host.analysis4);
        imposeAnalysis(5, this.host.analysis5);
        imposeAnalysis(6, this.host.analysis6);
        imposeAnalysis(7, this.host.analysis7);

    }

    public registerConsumer(
        consumer: BaseElement,
        onInstance: (instance?: Instance) => void,
        onFailure: (failure?: ThermalFileFailure) => void
    ): void {
        this.consumersInstancesCallback.set(consumer, onInstance);
        this.consumersFailureCallback.set(consumer, onFailure);
    }

    public unregisterConsumer(
        consumer: BaseElement
    ): void {
        this.consumersInstancesCallback.delete(consumer);
        this.consumersFailureCallback.delete(consumer);
    }

    private announceChangeOfInstance(instance?: Instance): void {

        for (const callback of this.consumersInstancesCallback.values()) {
            callback(instance);
        }

    }

    private announceChangeOfFailure(failure?: ThermalFileFailure): void {

        for (const callback of this.consumersFailureCallback.values()) {
            callback(failure);
        }

    }


}