import { Instance } from "../../file/instance";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AnalysisSlot } from "../analysisSlots/AnalysisSlot";
import { GroupExportCSV } from "./utils/GroupExportCSV";
import { GroupExportPNG } from "./utils/GroupExportPNG";

export interface IWithAnalysisSync extends IBaseProperty {
    analysisSync: AnalysisSyncDrive
}


export class AnalysisSyncDrive extends AbstractProperty<boolean, ThermalGroup> {
    protected validate(value: boolean): boolean {
        return value;
    }
    protected afterSetEffect(): void {
    }

    public turnOn(
        instance: Instance
    ) {
        this.value = true;
        this.setCurrentPointer(instance);
        this.syncSlots(instance);
    }

    public turnOff() {
        this.value = false;
        this.setCurrentPointer(undefined);
    }

    protected _currentPointer?: Instance;

    public forEveryExistingSlot(fn: (slot: AnalysisSlot, num: number) => void) {
        if (this._currentPointer === undefined) {
            return;
        }

        this._currentPointer.slots.forEveryExistingSlot(fn);

    }

    protected setCurrentPointer(
        instance?: Instance
    ) {

        if (instance !== this._currentPointer) {

            // Remove existing listeners
            if (this._currentPointer !== undefined) {

                this.endSyncingSlot(this._currentPointer, 1);
                this.endSyncingSlot(this._currentPointer, 2);
                this.endSyncingSlot(this._currentPointer, 3);
                this.endSyncingSlot(this._currentPointer, 4);
                this.endSyncingSlot(this._currentPointer, 5);
                this.endSyncingSlot(this._currentPointer, 6);
                this.endSyncingSlot(this._currentPointer, 7);

            }

            this._currentPointer = instance;

            // Apply new listeners
            if (this._currentPointer !== undefined) {

                this.startSyncingSlot(this._currentPointer, 1);
                this.startSyncingSlot(this._currentPointer, 2);
                this.startSyncingSlot(this._currentPointer, 3);
                this.startSyncingSlot(this._currentPointer, 4);
                this.startSyncingSlot(this._currentPointer, 5);
                this.startSyncingSlot(this._currentPointer, 6);
                this.startSyncingSlot(this._currentPointer, 7);

            }



        }


    }

    protected getSlotListeners(instance: Instance, slotNumber: number) {
        if (slotNumber === 1) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot1Serialize,
                assign: instance.slots.onSlot1Assignement
            }
        } else if (slotNumber === 2) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot2Serialize,
                assign: instance.slots.onSlot2Assignement
            }
        } else if (slotNumber === 3) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot3Serialize,
                assign: instance.slots.onSlot3Assignement
            }
        } else if (slotNumber === 4) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot4Serialize,
                assign: instance.slots.onSlot4Assignement
            }
        } else if (slotNumber === 5) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot5Serialize,
                assign: instance.slots.onSlot5Assignement
            }
        } else if (slotNumber === 6) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot6Serialize,
                assign: instance.slots.onSlot6Assignement
            }
        } else if (slotNumber === 7) {
            return {
                slot: instance.slots.getSlot(slotNumber),
                serialise: instance.slots.onSlot7Serialize,
                assign: instance.slots.onSlot7Assignement
            }
        }
    }

    static LISTENER_KEY = "__analysis__sync";


    public startSyncingSlot(instance: Instance, slotNumber: number) {
        const { serialise } = this.getSlotListeners(instance, slotNumber)!;

        serialise.set(AnalysisSyncDrive.LISTENER_KEY, value => {
            this.forEveryOtherSlot(instance, slotNumber, (sl, f) => {
                // Create new slots if not yet existing
                if (sl === undefined && value) {
                    const analysis = f.slots.createFromSerialized(value, slotNumber);
                    analysis?.setSelected();
                }
                // Update existing slots
                else if (sl !== undefined && value) {
                    sl.recieveSerialized(value);
                }
                // Remove slots that are no more
                else if (sl !== undefined && value === undefined) {
                    sl.analysis.file.slots.removeSlotAndAnalysis(slotNumber);
                }
            });
        });

    }

    public endSyncingSlot(instance: Instance, slotNumber: number) {

        this.forEveryOtherSlot(instance, slotNumber, () => {
            const { assign, serialise } = this.getSlotListeners(instance, slotNumber)!;

            assign.delete(AnalysisSyncDrive.LISTENER_KEY);
            serialise.delete(AnalysisSyncDrive.LISTENER_KEY);

        })

    }

    deleteSlot(instance: Instance, slotNumber: number) {
        this.forEveryOtherSlot(instance, slotNumber, slot => {
            slot?.analysis.file.slots.removeSlotAndAnalysis(slotNumber);
        });
    }

    setSlotSelected(instance: Instance, slotNumber: number) {
        this.forEveryOtherSlot(instance, slotNumber, slot => {
            slot?.analysis.setSelected(false);
        });
    }

    setSlotDeselected(instance: Instance, slotNumber: number) {
        this.forEveryOtherSlot(instance, slotNumber, slot => {
            slot?.analysis.setDeselected();
        });
    }

    /**
     * Get array of files excludint the one provided
     */
    protected allExceptOne(
        instance: Instance
    ) {
        return this.parent.files.value.filter(file => file !== instance);
    }


    /** 
     * Execute a given function on all files slot 
     */
    protected forEveryOtherSlot(
        instance: Instance,
        slotNumber: number,
        fn: (slot: AnalysisSlot | undefined, file: Instance) => void
    ) {
        this.allExceptOne(instance).forEach(file => {

            const item = file.slots.getSlot(slotNumber);

            fn(item, file);

        });
    }

    /** @deprecated Should sync individual slots only. This method synces all slots at once. */
    public syncSlots(instance: Instance) {

        if (this.value === false) {
            return;
        }

        this.setCurrentPointer(instance);

        const allOtherFiles = this.parent.files.value.filter(file => file !== instance);

        const map = instance.slots.getSlotMap();

        allOtherFiles.forEach(file => {

            for (const [slt, value] of map) {

                if (value === undefined) {
                    file.slots.removeSlotAndAnalysis(slt);
                } else {

                    const existingSerialized = file.slots.getSlot(slt)?.serialized;
                    const newSerialized = value.serialized;

                    if (existingSerialized !== newSerialized) {

                        if (file.slots.hasSlot(slt)) {
                            file.slots.getSlot(slt)?.recieveSerialized(newSerialized);
                        } else {
                            const slot = file.slots.createFromSerialized(newSerialized, slt);
                            slot?.setSelected(false);
                        }

                    }


                }

            }

        });



    }


    protected _csv?: GroupExportCSV;
    /** Lazy loaded CSV export object. */
    public get csv() {
        if (!this._csv) {
            this._csv = new GroupExportCSV(this);
        }
        return this._csv;
    }

    protected _png?: GroupExportPNG;
    /** Lazy loaded PNG export object. */
    public get png() {
        if (!this._png) {
            this._png = new GroupExportPNG(this);
        }
        return this._png;
    }

}