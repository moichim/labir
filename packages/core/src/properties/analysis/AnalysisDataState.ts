import { Instance } from "../../file/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { CallbacksManager } from "../callbacksManager";
import { AnalysisGraphsStorage } from "./graphs/AnalysisGraphsStorage";
import { mkConfig, generateCsv, download } from "export-to-csv";

export interface IWithAnalysisDataState extends IBaseProperty {
    analysisDataState: AnalysisDataState
}

type HeaderRow = string[];
export type ValueRow = [Date, ...number[]];

type DataType = [HeaderRow, ...ValueRow[]];

export type AnalysisDataStateValue = {
    values: DataType,
    colors: string[]
}

export class AnalysisDataState extends AbstractProperty<AnalysisDataStateValue, Instance> {

    protected _hasActiveGraphs: boolean = false;
    public get hasActiveGraphs() {
        return this._hasActiveGraphs;
    }
    public readonly onGraphsPresence = new CallbacksManager<(
        hasActiveGraphs: boolean
    ) => void>()

    public readonly listeners = new AnalysisGraphsStorage(this)

    public constructor(parent: Instance) {
        super(parent, { values: [[]], colors: [] });


        this.listeners.onOutput.set("__mirror_output_to_local_state", async (output) => {

            this.value = output;

            if ( output.colors.length > 0) {
                if ( ! this.hasActiveGraphs ) {
                    this._hasActiveGraphs = true;
                    this.onGraphsPresence.call( true );
                }
            } else {
                if ( this.hasActiveGraphs ) {
                    this._hasActiveGraphs = false;
                    this.onGraphsPresence.call( false );
                }
            }

        });



    }


    protected validate(value: AnalysisDataStateValue): AnalysisDataStateValue {
        // throw new Error("Method not implemented.");
        return value;
    }
    protected afterSetEffect(): void {
        // throw new Error("Method not implemented.");
        // console.log("přišly data", value)
    }

    public dangerouslyUpdateValue(value: AnalysisDataStateValue) {
        this.value = value;
    }

    public downloadData() {

        const { data, header } = this.listeners.generateExportData();
        const csvConfig = mkConfig({
            fieldSeparator: ";",
            filename: `analysis_${this.parent.fileName}_${Date.now()}.csv`,
            columnHeaders: header
        });
        const csv = generateCsv(csvConfig)(data);

        download( csvConfig )( csv );


    }



}