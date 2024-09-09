import { AbstractFile } from "../../../file/AbstractFile";
import { AbstractPoint } from "../../analysis/internals/AbstractPoint";
import { AbstractTool, ITool } from "./AbstractTool";

export class EditTool extends AbstractTool implements ITool {
    

    key = "edit";

    name = "Edit analysis";

    description = "Use analysis points to edit analysis dimensions.";

    icon = "";

    active = false;

    public getLabelValue(x: number, y: number, file: AbstractFile): string {
        return `X: ${x}<br />Y: ${y}`;
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

        if ( point.isInActiveLayer() ) {
            point.mouseEnter();
        }

    }


    public onPointLeave(point: AbstractPoint): void {
        if ( point.isInActiveLayer() ) {
            point.mouseLeave();
        }
    }


    public onPointMove(point: AbstractPoint, x: number, y: number): void {
        if ( point.isInActiveLayer() && point.active && point.isWithin(x,y)) {
            // Set new position
            point.x = x;
            point.y = y;
            // Call the resize
            point.analysis.onResize.call();
        }
    }

    public onPointDown(point: AbstractPoint): void {
        if ( point.isInActiveLayer() && point.active === false ) {
            point.activate();
        }
    }

    public onPointUp(point: AbstractPoint): void {
        if ( point.active === true) {
            point.deactivate();
        }
    }



}