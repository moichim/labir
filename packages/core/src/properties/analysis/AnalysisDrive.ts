import { AbstractFile } from "../../file/AbstractFile";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AbstractAnalysis } from "./internals/AbstractAnalysis";
import { AnalysisLayersStorage } from "./internals/tools/AnalysisLayersStorage";
import { AnalysisPointsAccessor } from "./internals/tools/AnalysisPointsAccessor";

export interface IWithAnalysis extends IBaseProperty {
    analysis: AnalysisDrive
}

export class AnalysisDrive extends AbstractProperty<AbstractAnalysis[], AbstractFile> {

    public readonly layers = new AnalysisLayersStorage(this);

    public readonly points = new AnalysisPointsAccessor(this);




    /** Value may be modified only from `AnalysisLayersStorage`! */
    public dangerouslySetValueFromStorage(value: AbstractAnalysis[]) {
        this.value = value;
    }

    protected validate(value: AbstractAnalysis[]): AbstractAnalysis[] {

        return value;
    }

    protected afterSetEffect(value: AbstractAnalysis[]) {
        value;
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
            top: y,
            left: x
        }

    }

    activateListeners() {

        this.getLayerRoot().addEventListener("pointermove", event => {

            const position = this.getRelativePosition(event);

            const activeTool = this.parent.group.tool.value;

            this.points.all.forEach(point => {

                // Move all active points within all layers
                if (point.active) {
                    activeTool.onPointMove(point, position.top, position.left);
                }

                // Detectt eventual mouse enter or mouse leave of points
                const pointIsUnderCursor = point.isWithin(position.top, position.left);

                if (pointIsUnderCursor && !point.isHover) {
                    activeTool.onPointEnter(point);
                }

                else if (!pointIsUnderCursor && point.isHover) {
                    activeTool.onPointLeave(point);
                }



            });


        });

        this.getLayerRoot().addEventListener("pointerdown", event => {

            const position = this.getRelativePosition(event);

            const activeTool = this.parent.group.tool.value;


            // Call the click of the active tool
            activeTool.onCanvasClick(position.top, position.left, this.parent);

            // Call the click on all points
            this.points.all.forEach(point => {
                if (point.isWithin(position.top, position.left)) {
                    activeTool.onPointDown(point);
                }
            });


        })

        this.getLayerRoot().addEventListener("pointerup", () => {

            const activeTool = this.parent.group.tool.value;

            this.points.all.forEach(point => {
                activeTool.onPointUp(point);
            });

        });

    }

    deactivateListeners() {



    }



}