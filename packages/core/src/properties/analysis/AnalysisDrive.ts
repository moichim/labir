import { AbstractFile } from "../../file/AbstractFile";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AbstractAnalysis } from "./internals/AbstractAnalysis";
import { AbstractPoint } from "./internals/AbstractPoint";
import { PointsListener } from "./internals/PointsListener";
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

    /** Make sure the value is allways between 0 and 1 */
    protected validate(value: AbstractAnalysis[]): AbstractAnalysis[] {

        return value;
        // return Math.min( Math.max( 0, value ), 1 );
    }

    /** 
     * Whenever the opacity changes, propagate the value to all instances
     */
    protected afterSetEffect(value: AbstractAnalysis[]) {
        value;
    }


    public addAnalysis(analysis: AbstractAnalysis) {
        this.value = [...this.value, analysis];
        analysis.init();
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

            // Move active points

            this.activePoints
                .forEach( point => {
                    point.x = position.x;
                    point.y = position.y;
                } );

            // Mark hovered points as hovered
            this.points.forEach( point => {
                if ( point.isWithin( position.x, position.y ) ) {
                    if ( ! point.isHover ) {
                        point.mouseEnter();
                    }
                } else {
                    if ( point.isHover ) {
                        point.mouseLeave();
                    }
                }
            } );

        });

        this.getLayerRoot().addEventListener("pointerdown", event => {
            const position = this.getRelativePosition(event);

            // Activate points within
            this.points
                .filter(point => point.isWithin(position.x, position.y))
                .forEach(point => point.activate());

        })

        this.getLayerRoot().addEventListener("pointerup", () => {
            // deactivate all points
            this.activePoints.forEach( point => point.deactivate() );
        });

    }

    deactivateListeners() {



    }



}