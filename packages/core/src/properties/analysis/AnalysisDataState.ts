import { Instance } from "../../file/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { GoogleGraphsStorage } from "./graphs/GoogleGraphsStorage";
import { AbstractAnalysis } from "./internals/AbstractAnalysis";

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
        super(parent, {values: [[]], colors: []});

        this.parent.analysis.layers.onAdd.set( "listen to analysisState", async (layer) => {

            const key= "listen to layer state";
        
            layer.onMoveOrResize.set( key, async ( l ) => {

                const data = await this.parent.service.pointAnalysisData( l.left, l.top);

                console.log( {
                    lTop: l.top,
                    lLeft: l.left,
                    layerTop: layer.top,
                    layerLeft: layer.left
                },"načetl jsem datatata", Object.values( data )[0] );

                this.google.setPointAnalysis( l.key, layer.color, data );

            });

            const data = await this.parent.service.pointAnalysisData( layer.left, layer.top);

            this.google.setPointAnalysis( layer.key, layer.color, data );


        } );

        this.parent.analysis.layers.onRemove.set( "listen to analysisState", async (layer) => {
            
            this.google.removeAnalysis( layer );
        
        });

        this.parent.analysis.layers.onSelectionChange.set( "listen to analysisState", async (layers) => {

            const selectedKeys = layers.map( layer => layer.key );

            const keysInGraphs = this.google.all.map( graph => graph.name );

            const graphsToAdd = selectedKeys.filter( key => ! keysInGraphs.includes( key )).map( key => {
                return layers.find( layer => layer.key === key ) as AbstractAnalysis;
            } );

            const graphToRemove = keysInGraphs.filter( key => ! selectedKeys.includes( key ));

            // Remove the unused graphs
            this.google.removeAnalysis( ...graphToRemove );

            // Add graphs that were activated
            graphsToAdd.forEach( async ( analysis ) => {

                const data = await analysis.file.service.pointAnalysisData( analysis.left, analysis.top);

                this.google.setPointAnalysis( analysis.key, analysis.color, data );


            });

            this.google.forEach( existingGraph => {
                if ( ! selectedKeys.includes( existingGraph.name )) {
                    this.google.removeAnalysis()
                }
            })

        });

        /*

        this.parent.analysis.addListener( "listen to analysisState", (layers) => {

            const key= "listen to layer state";

            layers.forEach(layer => {

                // layer.onMoveOrResize.delete( key );

                layer.onMoveOrResize.set( key, async () => {

                    const data = await this.parent.service.pointAnalysisData( layer.left, layer.top);

                    this.raw.setPointAnalysis( layer.key, layer.color, data );

                })

            })

        } );

        */
    }


    protected validate(value: AnalysisDataStateValue): AnalysisDataStateValue {
        // throw new Error("Method not implemented.");
        return value;
    }
    protected afterSetEffect(value: AnalysisDataStateValue): void {
        // throw new Error("Method not implemented.");
        console.log( "přišly data", value )
    }

    public dangerouslyUpdateValue(value: AnalysisDataStateValue) {
        this.value = value;
    }



}