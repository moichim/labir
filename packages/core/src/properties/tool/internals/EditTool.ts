import { AbstractFile } from "../../../file/AbstractFile";
import { AbstractPoint } from "../../analysis/internals/AbstractPoint";
import { CornerPoint } from "../../analysis/internals/rectangle/CornerPoint";
import { AbstractTool, ITool } from "./AbstractTool";

export class EditTool extends AbstractTool implements ITool {
    

    key = "edit";

    name = "Edit analysis";

    description = "Drag corners of selected analysis to edit their dimensions.";

    icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`;

    active = false;

    public getLabelValue(x: number, y: number, file: AbstractFile): string {


        const hoveredAnalysis = file.analysis.storage.activeOnly
            .filter( analysis => analysis.isWithin( x, y ) )
            .map( analysis => analysis.key );

        const analysis = hoveredAnalysis.length > 0
            ? hoveredAnalysis.join("<br />") +  "<br />"
            : "";


        return `${analysis}X: ${x}<br />Y: ${y}`;
    }

    public onActivate(): void {
        
    }

    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }


    public onCanvasClick(x: number, y: number, file: AbstractFile): void {
        // throw new Error("Method not implemented.");
    }

    public onCanvasLeave( file: AbstractFile ) {
        // fix all points
        
    }


    public onPointEnter(point: AbstractPoint): void {

        if ( point.isInSelectedLayer() ) {
            point.mouseEnter();
        }

    }


    public onPointLeave(point: AbstractPoint): void {
        if ( point.isInSelectedLayer() ) {
            point.mouseLeave();
        }
    }


    public onPointMove(point: AbstractPoint, x: number, y: number): void {

        
        if ( point.isInSelectedLayer() && point.active && point.isWithin(x,y)) {

            // Set new position
            point.x = x;
            point.y = y;

            // Call the resize
            if ( point instanceof CornerPoint ) {
                point.analysis.onResize.call();
            }
            
        }
    }

    public onPointDown(point: AbstractPoint): void {
        if ( point.isInSelectedLayer() && point.active === false ) {
            point.activate();
        }
    }

    public onPointUp(point: AbstractPoint): void {
        if ( point.active === true) {
            point.deactivate();
        }
    }



}