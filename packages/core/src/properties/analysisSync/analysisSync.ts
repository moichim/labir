import { Instance } from "../../file/instance";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AnalysisSlot } from "../analysisSlots/AnalysisSlot";

export interface IWithAnalysisSync extends IBaseProperty {
    analysisSync: AnalysisSyncDrive
}


export class AnalysisSyncDrive extends AbstractProperty<boolean, ThermalGroup> {
    protected validate(value: boolean): boolean {
        return value;
    }
    protected afterSetEffect(value: boolean): void {
        // throw new Error("Method not implemented.");

        if ( this._currentPointer ) {
            this._currentPointer.analysis
        }
    }

    public turnOn(
        instance: Instance
    ) {
        this.value = true;
        this.setCurrentPointer( instance );
        this.syncSlots( instance );
    }
    
    public turnOff() {
        this.value = false;
        this.setCurrentPointer( undefined );
    }

    protected _currentPointer?: Instance;

    protected setCurrentPointer(
        instance?: Instance
    ) {

        const eventKey = "__analysis__sync";

        if ( instance !== this._currentPointer ) {

            // Remove existing listeners
            if ( this._currentPointer !== undefined ) {

                this.endSyncingSlot( this._currentPointer, 1 );
                this.endSyncingSlot( this._currentPointer, 2 );
                this.endSyncingSlot( this._currentPointer, 3 );
                this.endSyncingSlot( this._currentPointer, 4 );
                this.endSyncingSlot( this._currentPointer, 5 );
                this.endSyncingSlot( this._currentPointer, 6 );
                this.endSyncingSlot( this._currentPointer, 7 );
                
            }
    
            this._currentPointer = instance;

            // Apply new listeners
            if ( this._currentPointer !== undefined ) {

                this.startSyncingSlot( this._currentPointer, 1 );
                this.startSyncingSlot( this._currentPointer, 2 );
                this.startSyncingSlot( this._currentPointer, 3 );
                this.startSyncingSlot( this._currentPointer, 4 );
                this.startSyncingSlot( this._currentPointer, 5 );
                this.startSyncingSlot( this._currentPointer, 6 );
                this.startSyncingSlot( this._currentPointer, 7 );

            }



        }


    }

    protected getSlotListeners( instance: Instance, slotNumber: number ) {
        if ( slotNumber === 1 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot1Serialize,
                assign: instance.slots.onSlot1Assignement
            }
        } else if ( slotNumber === 2 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot2Serialize,
                assign: instance.slots.onSlot2Assignement
            }
        } else if ( slotNumber === 3 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot3Serialize,
                assign: instance.slots.onSlot3Assignement
            }
        } else if ( slotNumber === 4 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot4Serialize,
                assign: instance.slots.onSlot4Assignement
            }
        } else if ( slotNumber === 5 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot5Serialize,
                assign: instance.slots.onSlot5Assignement
            }
        } else if ( slotNumber === 6 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot6Serialize,
                assign: instance.slots.onSlot6Assignement
            }
        } else if ( slotNumber === 7 ) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot7Serialize,
                assign: instance.slots.onSlot7Assignement
            }
        }
    }

    static LISTENER_KEY = "__analysis__sync";


    /** @deprecated */
    public syncSlotSerialised( instance: Instance, slotNumber: number ) {

        const currentSerialized = instance.slots.getSlot( slotNumber )?.serialized;

        this.forEveryOtherSlot( instance, slotNumber, (slot, file) => {

            if ( slot === undefined && currentSerialized ) {
                file.slots.createFromSerialized( currentSerialized, slotNumber );
            } else if ( slot !== undefined && currentSerialized ) {
                slot.recieveSerialized( currentSerialized );
            } else if ( slot !== undefined && currentSerialized === undefined ) {
                file.slots.removeSlotAndAnalysis( slotNumber );
            }

        } )
    }

    public startSyncingSlot( instance: Instance, slotNumber: number ) {
        const { slot, assign, serialise } = this.getSlotListeners( instance, slotNumber )!;

        serialise.set( AnalysisSyncDrive.LISTENER_KEY, value => {
            this.forEveryOtherSlot( instance, slotNumber, (sl,f) => {
                // Create new slots if not yet existing
                if ( sl === undefined && value ) {
                    const analysis = f.slots.createFromSerialized( value, slotNumber );
                    analysis?.setSelected();
                } 
                // Update existing slots
                else if ( sl !== undefined && value ) {
                    sl.recieveSerialized( value );
                } 
                // Remove slots that are no more
                else if ( sl !== undefined && value === undefined ) {
                    sl.analysis.file.slots.removeSlotAndAnalysis( slotNumber );
                }
            } );
        } );

        if ( slot !== undefined ) {
            /*
            slot.analysis.onDeselected.set( AnalysisSyncDrive.LISTENER_KEY, () => {
                this.forEveryOtherSlot( instance, slotNumber, sl => {
                    if ( sl ) sl.analysis.setDeselected( false );
                } )
            } );
            slot.analysis.onSelected.set( AnalysisSyncDrive.LISTENER_KEY, () => {
                this.forEveryOtherSlot( instance, slotNumber, sl => {
                    if ( sl ) sl.analysis.setSelected( false );
                } );
            } );
            */
        }

    }

    endSyncingSlot( instance: Instance, slotNumber: number ) {

        this.forEveryOtherSlot( instance, slotNumber, slot => {
            const {assign, serialise} = this.getSlotListeners( instance, slotNumber )!;

            assign.delete( AnalysisSyncDrive.LISTENER_KEY );
            serialise.delete( AnalysisSyncDrive.LISTENER_KEY );

        } )

    }

    deleteSlot( instance: Instance, slotNumber: number ) {
        this.forEveryOtherSlot( instance, slotNumber, slot => {
            slot?.analysis.file.slots.removeSlotAndAnalysis( slotNumber );
        } );
    }

    setSlotSelected( instance: Instance, slotNumber: number ) {
        this.forEveryOtherSlot( instance, slotNumber, slot => {
            slot?.analysis.setSelected( true );
        } );
    }

    setSlotDeselected( instance: Instance, slotNumber: number ) {
        this.forEveryOtherSlot( instance, slotNumber, slot => {
            slot?.analysis.setDeselected( true );
        } );
    }

    /**
     * Get array of files excludint the one provided
     */
    protected allExceptOne(
        instance: Instance
    ) {
        return this.parent.files.value.filter( file => file !== instance );
    }


    /** 
     * Execute a given function on all files slot 
     */
    protected forEveryOtherSlot(
        instance: Instance,
        slotNumber: number,
        fn: (slot: AnalysisSlot|undefined, file: Instance) => void
    ) {
        this.allExceptOne( instance ).forEach( file => {

            const item = file.slots.getSlot( slotNumber );

            fn( item, file );

        } );
    }

    public syncSlots( instance: Instance ) {

        if ( this.value === false ) {
            return;
        }

        this.setCurrentPointer( instance );

        const allOtherFiles = this.parent.files.value.filter( file => file !== instance );

        const map = instance.slots.getSlotMap();

        allOtherFiles.forEach( file => {

            for ( let [slt, value] of map ) {

                if ( value === undefined ) {
                    file.slots.removeSlotAndAnalysis( slt );
                } else {

                    const existingSerialized = file.slots.getSlot( slt )?.serialized;
                    const newSerialized = value.serialized;

                    if ( existingSerialized !== newSerialized ) {

                        if ( file.slots.hasSlot( slt ) ) {
                            file.slots.getSlot( slt )?.recieveSerialized( newSerialized );
                        } else {
                            const slot = file.slots.createFromSerialized( newSerialized, slt );
                            slot?.setSelected( false );
                        }

                    }

                    
                }

            }

        } );



    }
}