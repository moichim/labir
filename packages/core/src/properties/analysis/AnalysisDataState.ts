import { Instance } from "../../file/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AnalysisGraphsStorage } from "./graphs/AnalysisGraphsStorage";
import { GoogleGraphsStorage } from "./graphs/GoogleGraphsStorage";
import { AbstractAnalysis } from "./internals/AbstractAnalysis";
import { EllipsisAnalysis } from "./internals/area/ellipsis/EllipsisAnalysis";
import { RectangleAnalysis } from "./internals/area/rectangle/RectangleAnalysis";
import { PointAnalysis } from "./internals/point/PointAnalysis";

export interface IWithAnalysisDataState extends IBaseProperty {
    analysisDataState: AnalysisDataState
}

type HeaderRow = string[];
export type ValueRow = [string, ...number[]];

type DataType = [HeaderRow, ...ValueRow[]];

export type AnalysisDataStateValue = {
    values: DataType,
    colors: string[]
}

export class AnalysisDataState extends AbstractProperty<AnalysisDataStateValue, Instance> {

    protected readonly google = new GoogleGraphsStorage(this);

    protected readonly listeners = new AnalysisGraphsStorage(this)

    public constructor(parent: Instance) {
        super(parent, { values: [[]], colors: [] });


        this.listeners.onOutput.set("__mirror_output_to_local_state", async (output) => {

            this.value = output;

        });

        

    }


    protected validate(value: AnalysisDataStateValue): AnalysisDataStateValue {
        // throw new Error("Method not implemented.");
        return value;
    }
    protected afterSetEffect(value: AnalysisDataStateValue): void {
        // throw new Error("Method not implemented.");
        // console.log("přišly data", value)
    }

    public dangerouslyUpdateValue(value: AnalysisDataStateValue) {
        this.value = value;
    }



}