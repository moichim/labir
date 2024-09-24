import { Instance } from "../../file/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
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

    public constructor(parent: Instance) {
        super(parent, { values: [[]], colors: [] });

        this.parent.analysis.layers.onAdd.set("listen to analysisState", async (layer) => {

            const key = "listen to layer state";

            layer.onMoveOrResize.set(key, async (l) => {

                if (l instanceof PointAnalysis) {

                    const data = await this.parent.service.pointAnalysisData(l.left, l.top);

                    this.google.setPointAnalysis(l.key, l.initialColor, data, l );

                } else if (l instanceof RectangleAnalysis) {

                    const data = await this.parent.service.rectAnalysisData(l.left, l.top, l.width, l.height);

                    this.google.setAreaAnalysis(l.key, l.initialColor, data, l );

                } else if (l instanceof EllipsisAnalysis) {

                    const data = await this.parent.service.ellipsisAnalysisData(l.left, l.top, l.width, l.height);
                    this.google.setAreaAnalysis(l.key, l.initialColor, data, l );

                }



            });

            if (layer instanceof PointAnalysis) {

                const data = await this.parent.service.pointAnalysisData(layer.left, layer.top);

                this.google.setPointAnalysis(layer.key, layer.initialColor, data, layer );

            } else if (layer instanceof RectangleAnalysis) {

                const data = await this.parent.service.rectAnalysisData(layer.left, layer.top, layer.width, layer.height);

                this.google.setAreaAnalysis(layer.key, layer.initialColor, data, layer);

            } else if (layer instanceof EllipsisAnalysis) {

                const data = await this.parent.service.ellipsisAnalysisData(layer.left, layer.top, layer.width, layer.height);

                this.google.setAreaAnalysis(layer.key, layer.initialColor, data, layer);

            }


        });

        this.parent.analysis.layers.onRemove.set("listen to analysisState", async (layer) => {

            this.google.removeAnalysis(layer);

        });

        this.parent.analysis.layers.onSelectionChange.set("listen to analysisState", async (layers) => {

            const selectedKeys = layers.map(layer => layer.key);

            const keysInGraphs = this.google.all.map(graph => graph.name);

            const graphsToAdd = selectedKeys.filter(key => !keysInGraphs.includes(key)).map(key => {
                return layers.find(layer => layer.key === key) as AbstractAnalysis;
            });

            const graphToRemove = keysInGraphs.filter(key => !selectedKeys.includes(key));

            // Remove the unused graphs
            this.google.removeAnalysis(...graphToRemove);

            // Add graphs that were activated
            graphsToAdd.forEach(async (analysis) => {

                if (analysis instanceof PointAnalysis) {

                    const data = await this.parent.service.pointAnalysisData(analysis.left, analysis.top);
    
                    this.google.setPointAnalysis(analysis.key, analysis.initialColor, data, analysis );
    
                } else if (analysis instanceof RectangleAnalysis) {
    
                    const data = await this.parent.service.rectAnalysisData(analysis.left, analysis.top, analysis.width, analysis.height);
    
                    this.google.setAreaAnalysis(analysis.key, analysis.initialColor, data, analysis);
    
                } else if (analysis instanceof EllipsisAnalysis) {
    
                    const data = await this.parent.service.ellipsisAnalysisData(analysis.left, analysis.top, analysis.width, analysis.height);
    
                    this.google.setAreaAnalysis(analysis.key, analysis.initialColor, data, analysis);
    
                }


            });

            this.google.forEach(existingGraph => {
                if (!selectedKeys.includes(existingGraph.name)) {
                    this.google.removeAnalysis()
                }
            })

        });

    }


    protected validate(value: AnalysisDataStateValue): AnalysisDataStateValue {
        // throw new Error("Method not implemented.");
        return value;
    }
    protected afterSetEffect(value: AnalysisDataStateValue): void {
        // throw new Error("Method not implemented.");
        console.log("přišly data", value)
    }

    public dangerouslyUpdateValue(value: AnalysisDataStateValue) {
        this.value = value;
    }



}