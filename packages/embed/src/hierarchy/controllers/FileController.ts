import { CallbacksManager, Instance, SlotNumber } from "@labirthermal/core";
import { PropertyValues, ReactiveController, ReactiveControllerHost } from "lit";
import { ThermalFileFailure } from "packages/core/dist";
import { CurrentFrameContext, FileCursorContext } from "../providers/context/FileContexts";

export interface ComponentWithFileProvider extends ReactiveControllerHost {

    UUID: string;

    file?: Instance;

    failure?: ThermalFileFailure;

    loading?: boolean;

    ready?: boolean;

    cursor?: FileCursorContext;

    ms?: number;
    analysis1?: string;
    analysis2?: string;
    analysis3?: string;
    analysis4?: string;
    analysis5?: string;
    analysis6?: string;
    analysis7?: string;

}


export class FileProviderController implements ReactiveController {

    declare host: ComponentWithFileProvider;

    private readonly UUID_INTERNAL: string;

    public readonly onSuccess: CallbacksManager< (instance: Instance) => void > = new CallbacksManager();

    public readonly onFailure: CallbacksManager< (failure: ThermalFileFailure) => void > = new CallbacksManager();

    

    public constructor(host: ComponentWithFileProvider) {

        this.host = host;
        this.UUID_INTERNAL = this.host.UUID + "__file-provider-controller";
        this.host.addController(this);

    }

    hostConnected(): void {
        
    }

    public onUpdated(
        _changedProperties: PropertyValues<ComponentWithFileProvider>
    ): void {

        // If the MS Was changed from the outside, update the file internal timeline

        if ( _changedProperties.has("ms") && this.host.file && this.host.ms ) {

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

                if ( safeMs !== this.host.file.timeline.currentMs ) {
                    this.host.file.timeline.setRelativeTime(safeMs);
                }

            }

            if ( this.host.file && this.host.file.duration ) {

            }

        }

        // Perform the updates of analyses

        this.handleAnalysisUpdate( 1, _changedProperties );
        this.handleAnalysisUpdate( 2, _changedProperties );
        this.handleAnalysisUpdate( 3, _changedProperties );
        this.handleAnalysisUpdate( 4, _changedProperties );
        this.handleAnalysisUpdate( 5, _changedProperties );
        this.handleAnalysisUpdate( 6, _changedProperties );
        this.handleAnalysisUpdate( 7, _changedProperties );

    }

    private handleAnalysisUpdate(
        index: SlotNumber,
        _changedProperties: PropertyValues<ComponentWithFileProvider>
    ): void {

        const field = `analysis${index}` as keyof ComponentWithFileProvider;

        if ( _changedProperties.has(field) && this.host.file ) {

            const slot = this.host.file.slots.getSlot( index );

            const oldValue = _changedProperties.get(field) as string | undefined | null;

            const newValue = this.host[field] as string | undefined | null;

            // If the slot had not existed before, create the analysis and set it as selected
            if ( 
                slot
                && newValue
                && oldValue
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
                this.host.file.slots.removeSlotAndAnalysis( index );
            }

            // In other cases, the analysis was only modified, so update it
            else if (
                slot
                && newValue
            ) {
                slot.recieveSerialized( newValue );
            }



        }


    }

    public removeFile(
        instance?: Instance
    ): void {

        // Clear the existing instance contexts
        if ( instance ) {
            instance.unmountFromDom();
            instance.slots.onSlot1Serialize.delete(this.UUID_INTERNAL);
            instance.slots.onSlot2Serialize.delete(this.UUID_INTERNAL);
            instance.slots.onSlot3Serialize.delete(this.UUID_INTERNAL);
            instance.slots.onSlot4Serialize.delete(this.UUID_INTERNAL);
            instance.slots.onSlot5Serialize.delete(this.UUID_INTERNAL);
            instance.slots.onSlot6Serialize.delete(this.UUID_INTERNAL);
            instance.slots.onSlot7Serialize.delete(this.UUID_INTERNAL);
            instance.timeline.callbacksChangeFrame.delete(this.UUID_INTERNAL);
        }

        // Clear the component properties and contexts
        this.host.file = undefined;
        this.host.failure = undefined;
        this.host.ready = undefined;
        this.host.loading = undefined;
        this.host.analysis1 = undefined;
        this.host.analysis2 = undefined;
        this.host.analysis3 = undefined;
        this.host.analysis4 = undefined;
        this.host.analysis5 = undefined;
        this.host.analysis6 = undefined;
        this.host.analysis7 = undefined;
        this.host.ms = undefined;
        this.host.cursor = undefined;

    }



    public recieveInstance(
        instance: Instance
    ): void {

        if ( this.host.file ) {
            this.removeFile(this.host.file);
        }

        this.initialiseListeners( instance );

        this.host.file = instance;


    }

    private initialiseListeners(
        instance: Instance
    ): void {

        // Synchronise the internal MS state with the component state
        instance.timeline.callbacksChangeFrame.set(
            this.UUID_INTERNAL,
            ( frame ) => {
                if ( this.host.ms !== frame.relative ) {
                    this.host.ms = frame.relative;
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

    public internalStateToAttributes(
        instance: Instance
    ): void {

        this.host.ms = instance.timeline.currentMs;

        this.host.analysis1 = instance.slots.getSlotValue( 1 );
        this.host.analysis2 = instance.slots.getSlotValue( 2 );
        this.host.analysis3 = instance.slots.getSlotValue( 3 );
        this.host.analysis4 = instance.slots.getSlotValue( 4 );
        this.host.analysis5 = instance.slots.getSlotValue( 5 );
        this.host.analysis6 = instance.slots.getSlotValue( 6 );
        this.host.analysis7 = instance.slots.getSlotValue( 7 );

    }

    public attributesToInternalState(
        instance: Instance
    ): void {

        if ( this.host.ms !== undefined ) {
            instance.timeline.setRelativeTime( this.host.ms );
        }

        const imposeAnalysis = (
            slot: number,
            value?: string
        ) => {
            if ( value ) {
                instance.slots.createAnalysisFromSerialized(
                    value,
                    slot
                );
            }
        }

        imposeAnalysis( 1, this.host.analysis1 );
        imposeAnalysis( 2, this.host.analysis2 );
        imposeAnalysis( 3, this.host.analysis3 );
        imposeAnalysis( 4, this.host.analysis4 );
        imposeAnalysis( 5, this.host.analysis5 );
        imposeAnalysis( 6, this.host.analysis6 );
        imposeAnalysis( 7, this.host.analysis7 );

    }




}