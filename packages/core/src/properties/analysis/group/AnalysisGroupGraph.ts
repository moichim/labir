import { ThermalGroup } from "../../../hierarchy/ThermalGroup";
import { AbstractProperty } from "../../abstractProperty";

export type ThermalGroupGraphData = [
    string[],
    ...[Date,...number[]][]
]

export type ThermalGraphDefinition = {
    data: ThermalGroupGraphData,
    colors: string[]
}

export type ThermalGraphGroupDataOrUndefined = ThermalGraphDefinition | undefined;

export class AnalysisGroupGraph extends AbstractProperty<ThermalGraphGroupDataOrUndefined, ThermalGroup> {


    public static LISTENER_ID = "AnalysisGroupGraph";

    constructor(parent: ThermalGroup) {
        super(parent, undefined);
    }


    protected timeout?: ReturnType<typeof setTimeout>;


    protected calculateData() {


        let colors: string[] = [];
        let header: string[] = [];
        const data: [Date, ...number[]][] = [];


        // Get the header
        const orderedFiles = this.parent.files.value.sort( (a,b) => a.timestamp - b.timestamp );

        const firstRow = orderedFiles[0].analysisData.value.values[0];
        header = firstRow;

        colors = orderedFiles[0].analysisData.value.colors;



        this.parent.files.forEveryInstance( instance => {

            const row: [Date,...number[]] = [
                new Date( instance.timestamp )
            ];

            instance.analysis.value.forEach( async ( analysis ) => {
                
                if ( analysis.graph.state.MIN === true && analysis.min) {
                    row.push( analysis.min );
                }

                if ( analysis.graph.state.MAX === true && analysis.max) {
                    row.push( analysis.max );
                }

                if ( analysis.graph.state.AVG === true && analysis.avg) {
                    row.push( analysis.avg );
                }

            } );

            if ( row.length > 1 ) {
                data.push( row );
            }

        });

        if ( colors.length > 0 ) {
            this.value = {
                colors: colors,
                data: [header, ...data]
            }
        } else {
            this.value = undefined;
        }

        console.log( "Přepočítal jsem data", this.value );

    }



    public turnOn() {

        this.parent.files.forEveryInstance( instance => {

            instance.analysisData.addListener( AnalysisGroupGraph.LISTENER_ID, () => {

                if ( this.timeout !== undefined ) {
                    clearTimeout( this.timeout );
                }
                this.timeout = setTimeout( () => {
                    this.calculateData();
                }, 0 );

            });

        });

    }

    public turnOff() {
        
        this.parent.files.forEveryInstance( instance => {

            instance.analysisData.removeListener( AnalysisGroupGraph.LISTENER_ID );

        });
    }

    public _wtf() {

        this.parent.files.forEveryInstance( instance => {

            instance.analysis.layers.forEach( analysis => {
                analysis.graph.setAvgActivation( true );
            } );

        });

    }






    protected validate(value: ThermalGraphGroupDataOrUndefined): ThermalGraphGroupDataOrUndefined {
        return value;
        // throw new Error("Method not implemented.");
    }
    protected afterSetEffect(): void {
        /*
        // throw new Error("Method not implemented.");
        console.log( "Přepočítal jsem grafí data", value.colors);

        if ( value !== undefined ) {
            value.data.forEach( value => console.log(value) );
        }

        // console.log( value.slice(1) );

        */

    }

}