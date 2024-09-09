import { AbstractFile } from "../../file/AbstractFile";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AbstractAddTool } from "./internals/AbstractAddTool";
import { AbstractAnalysis } from "./internals/AbstractAnalysis";
import { PointsListener } from "./internals/PointsListener";
import { RectangleAnalysis } from "./internals/rectangle/RectangleAnalysis";
import { AnalysisStorage } from "./internals/tools/AnalysisStorage";

export interface IWithAnalysis extends IBaseProperty {
    analysis: AnalysisDrive
}

export class AnalysisDrive extends AbstractProperty<AbstractAnalysis[], AbstractFile> {

    public readonly storage = new AnalysisStorage( this );

    public readonly listener = new PointsListener(this.parent);

    

    public get points() {

        return this.storage.allPoints;
    }

    public get activePoints() {
        return this.storage.allPoints.filter( point => point.active );
    }

    public dangerouslySetValueFromStorage( value: AbstractAnalysis[] ) {
        this.value = value;
    }

    protected validate(value: AbstractAnalysis[]): AbstractAnalysis[] {

        return value;
    }

    protected afterSetEffect(value: AbstractAnalysis[]) {
        value;
    }


    public addRectAt( x: number, y: number ) {

        const analysisName = `Rectangle ${this.value.length}`;

        const newRect = new RectangleAnalysis( analysisName, this.parent, x, y  );

        this.storage.addAnalysis( newRect )

    }



    public getLayerRoot() {
        return this.parent.listenerLayer.getLayerRoot();
    }


    protected getRelativePosition(event: MouseEvent) {

        const absoluteWidth = this.getLayerRoot().clientWidth;
        const fileWidth = this.parent.width;
        const layerX = event.layerX;
        const xAspect = layerX / absoluteWidth;
        const x = Math.round(fileWidth * xAspect);

        const absoluteHeight = this.getLayerRoot().clientHeight;
        const fileHeight = this.parent.height;
        const layerY = event.layerY;
        const yAspect = layerY / absoluteHeight;
        const y = Math.round(fileHeight * yAspect);

        return {
            x,
            y
        }

    }

    activateListeners() {

        this.getLayerRoot().onmouseenter = event => {
            console.log(event);
        }

        this.getLayerRoot().addEventListener("mousemove", event => {

            const position = this.getRelativePosition(event);

            const activeTool = this.parent.group.tool.value;

    
            this.points.forEach( point => {
                
                // Move all active points within all layers
                if ( point.active ) {
                    activeTool.onPointMove( point, position.x, position.y );
                }

                // Detectt eventual mouse enter or mouse leave of points
                const pointIsUnderCursor = point.isWithin( position.x, position.y );

                if ( pointIsUnderCursor && ! point.isHover ) {
                    activeTool.onPointEnter( point );
                }

                else if ( ! pointIsUnderCursor && point.isHover ) {
                    activeTool.onPointLeave( point );
                }



            } );


        });

        this.getLayerRoot().addEventListener("pointerdown", event => {

            const position = this.getRelativePosition(event);

            const activeTool =this.parent.group.tool.value;


            // Call the click of the active tool
            activeTool.onCanvasClick( position.x, position.y, this.parent );

            // Call the click on all points
            this.points.forEach( point => {
                if ( point.isWithin( position.x, position.y ) ) {
                    activeTool.onPointDown( point );
                }
            } );


        })

        this.getLayerRoot().addEventListener("pointerup", () => {

            const activeTool =this.parent.group.tool.value;

            this.points.forEach( point => {
                activeTool.onPointUp( point );
            } );
        
        });

    }

    deactivateListeners() {



    }



}