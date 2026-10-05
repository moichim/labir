import { CallbacksManager, Instance } from "@labirthermal/core";
import type { FileController, IElementWithFileController } from "./FileController";
import { AnalysisSlot } from "@labirthermal/core/src/properties/analysis/slots/AnalysisSlot";
import { PropertyValues } from "lit";

export class FileAnalysisSynchronisator {

    private readonly _attribute: keyof IElementWithFileController;

    private get _currentAttributeValue(): string | undefined {
        return this._controller.host[this._attribute] as string | undefined;
    }
    private get _currentInternalValue(): string | undefined {
        return this._slotObject?.serialized as string | undefined;
    }

    private _fileObject?: Instance;
    private _slotObject?: AnalysisSlot;
    private _serializeManager?: CallbacksManager< ( value: string | undefined ) => void >;



    constructor(
        private readonly _controller: FileController,
        private readonly _slotNumber: number
    ) {

        this._attribute = `analysis${this._slotNumber}` as keyof IElementWithFileController;

    }

    /** Enables the listeners and internal objects necessary for synchronisation of the file analysis slot */
    public fileAssigned(
        instance: Instance
    ): void {

        this._fileObject = instance;
        this._slotObject = instance.slots.getSlot(this._slotNumber);
        this._serializeManager = new CallbacksManager< ( value: string | undefined ) => void >();

        // Assign the internal listener
        this._serializeManager.set(
            this._controller.UUID,
            value => {

                if ( value !== this._currentAttributeValue ) {
                    this._dangerouslySetHostAttribute(value);
                }

            }
        );

        // Create initial analysis
        if ( this._currentAttributeValue ) {
            this._dangerouslyPropagateHostAttributeToAnalysis(this._currentAttributeValue);
        }

    }


    /** Deactivates the listeners and internal objects - stopping the synchronisation of analyses */
    public fileUnassigned(): void {

        // Remove the internal listener from the serialize manager
        this._serializeManager?.delete(this._controller.UUID);

        // Clear the object references
        this._fileObject = undefined;
        this._slotObject = undefined;
        this._serializeManager = undefined;

    }


    /** Looks for the changed attributes of the host and propagates them to internal state if necessary */
    public handleHostUpdate(
        changedValues: PropertyValues<typeof this._controller.host>
    ): void {


        // If the file attribute has changed, reflect it to the local internal logic
        if ( changedValues.has( "file" ) ) {

            // If the internal file reference is still the same as the host's reference, do nothing
            if ( this._controller.host.file === this._fileObject ) {
                return;
            }

            // If there was an internal file, unassign it
            if ( this._fileObject ) {
                this.fileUnassigned();
            }

            // If the host has a new file, assign it internally
            if ( this._controller.host.file ) {
                this.fileAssigned( this._controller.host.file );
            }

        }

        // If the host attribute of this analysis has changed, propagate its value to the internal analysis state
        if ( changedValues.has(this._attribute) ) {

            if ( this._currentInternalValue !== this._currentAttributeValue ) {
                this._dangerouslyPropagateHostAttributeToAnalysis(this._currentAttributeValue);
            }

        }
    }


    /** Very carrefully set the host attribute to the given value - does not do any checks or controles */
    private _dangerouslySetHostAttribute(
        value: string | undefined
    ): void {
        ( this._controller.host[this._attribute] as string | undefined ) = value;
    }

    /** Very carrefully propagate the host attribute value to the analysis slot - this method manipulates the internal state of @labirthermal/core */
    private _dangerouslyPropagateHostAttributeToAnalysis(
        value: string | undefined
    ): void {

        // Do nothing if there is no slot object
        if ( !this._slotObject || !this._fileObject ) return;

        // Sanitize the value
        value = value?.trim();

        // Make sure the value is not empty
        if ( value === "" ) value = undefined;

        // Look for the existing analysis in the slot
        const existingAnalysis = this._slotObject.analysis;

        // If the analysis should be deleted, do it
        if ( value === undefined && existingAnalysis) {
            existingAnalysis.file.analysis.layers.removeAnalysis(existingAnalysis.key);
        } 
        // If an existing analysis should be updated, do it
        else if ( value !== undefined && existingAnalysis ) {
            this._slotObject.recieveSerialized(value);
        }
        // If a new analysis should be created, do it
        else if ( value !== undefined && !existingAnalysis ) {
            const analysis = this._fileObject.slots.createAnalysisFromSerialized(value, this._slotNumber);
            analysis?.setSelected( true ); /** @todo Toto asi nebude úplně nutné, ne? */
        }

    }

}