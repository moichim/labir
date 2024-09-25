import { format } from "date-fns";
import { AreaAnalysisData, PointAnalysisData } from "../../../loading/workers/parsers/structure";
import { AnalysisDataState, AnalysisDataStateValue, ValueRow } from "../AnalysisDataState";
import { EllipsisAnalysis } from "../internals/area/ellipsis/EllipsisAnalysis";
import { RectangleAnalysis } from "../internals/area/rectangle/RectangleAnalysis";
import { PointAnalysis } from "../internals/point/PointAnalysis";
import { AnalysisLayersStorage } from "../internals/storage/AnalysisLayersStorage";
import { AnalysisGraph } from "./AnalysisGraph";
import { CallbacksManager } from "../../callbacksManager";

export class AnalysisGraphsStorage {

    public readonly listenerKey = "___listen-to-graphs___";

    public get layers(): AnalysisLayersStorage {
        return this.drive.parent.analysis.layers;
    }

    protected readonly _graphs = new Map<string, AnalysisGraph>();

    public get graphs() {
        return this._graphs;
    }

    protected addGraph( graph: AnalysisGraph ) {
        this._graphs.set( graph.analysis.key, graph );
        this.onAddGraph.call( graph );
    }
    protected removeGraph( graph: string ) {
        this._graphs.delete( graph );
        this.onRemoveGraph.call( graph );
    }

    protected _output: AnalysisDataStateValue = {
        values: [[]],
        colors: []
    }

    public get output(): AnalysisDataStateValue {
        return this._output;
    }
    protected set output( output: AnalysisDataStateValue ) {
        this._output = output;
        this.onOutput.call( output );
    }

    public onOutput = new CallbacksManager<(
        output: AnalysisDataStateValue
    )=>void>();

    public onAddGraph = new CallbacksManager<(
        graph: AnalysisGraph
    )=>void>()

    public onRemoveGraph = new CallbacksManager<(
        graph: string
    )=>void>()

    public constructor(
        public readonly drive: AnalysisDataState
    ) {

        // listen to layer state
        this.layers.onAdd.set(this.listenerKey, async (layer) => {

            let item = new AnalysisGraph( this, layer);
            this.addGraph(item);
            
            item.onAnalysisSelection.set(this.listenerKey, async (layer) => {
                this.refreshOutput();
            });

            item.onGraphActivation.set(this.listenerKey, async (layer) => {
                this.refreshOutput();
            });

            item.onGraphData.set(this.listenerKey, async (layer) => {
                this.refreshOutput();
            });

        });

        this.layers.onRemove.set(this.listenerKey, async (layer) => {

            this.removeGraph(layer )

        })

    }

    public refreshOutput() {

        const output: AnalysisDataStateValue = {
            values: [["Time"]],
            colors: []
        }

        //if ( ! this.hasGraph() ) {
            // this.output = output;
            //return output;
        //}

        // Push names and colors of active graphs
        this.graphs.forEach( (graph) => {

            // Push labels
            output.values[0].push( ...graph.getGraphLabels() );

            output.colors.push( ...graph.getGraphColors() );

        });

        // Push values
        this.graphs.forEach( (graph) => {
            
            if ( graph.hasDataToPrint() ) {

                if ( graph.value ) {

                    Object.keys( graph.value ).forEach( (key, index) => {

                        let row = output.values[ index + 1];

                        if ( row === undefined ) {
                            row = [ format( parseInt( key ), "m:ss:SSS" ) ];
                            output.values[index + 1] = row;
                        }

                        let array = row as ValueRow;

                        array.push( ...graph.getDtaAtTime( parseInt( key) ) );



                    });


                }

            }

        });

        this.output = output;
        return output;

    }

    hasGraph(): boolean {
        return Object.values( this.graphs ).find( graph => graph.hasDataToPrint() ).length > 0;
    }

}