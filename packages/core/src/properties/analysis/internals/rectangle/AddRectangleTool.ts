import { AbstractFile } from "../../../../file/AbstractFile";
import { AbstractTool, ITool } from "../../../tool/internals/AbstractTool";
import { AbstractAddTool } from "../AbstractAddTool";
import { AbstractPoint } from "../AbstractPoint";

export class AddRectangleTool extends AbstractAddTool implements ITool {
    
    key: string = "add-rect";
    name: string = "Add a rectangular analysis";
    description: string = "Click and drag to add a rectangular analysis to the image.";
    icon: string = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`;
    active: boolean = false;

    public onCanvasClick(x: number, y: number, file: AbstractFile): void {
        const newRect = file.analysis.addRectAt( x, y );
        file.analysis.storage.select( newRect, true );
    }

    public onPointDown(point: AbstractPoint): void {
        
    }

    public onPointUp(point: AbstractPoint): void {
        point.deactivate();
        point.analysis.file.group.tool.selectTool( "edit" );
        point.analysis.ready = true;
        point.analysis.recalculateValues();
        // point.analysis.setSelected();
    }

    public onCanvasLeave(file: AbstractFile): void {
        
    }

    getLabelValue = (x: number, y: number, file: AbstractFile): string => {
        const temperature = file.group.tool.tools.inspect.getLabelValue( x, y, file );
        return `X:${x}<br />Y:${y}<br />${temperature}`;
    }

    protected onActivate(): void {
        // throw new Error("Method not implemented.");
        this.group.forEveryInstance( instance => {
            instance.analysis.value.forEach( analysis => {
                analysis.setDeselected();
            } );
        } );
    }
    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }

    public onPointMove(point: AbstractPoint, x: number, y: number): void {
        if ( point.isInActiveLayer() && point.active ) {
            point.x = x;
            point.y = y;
            point.analysis.onResize.call();
        }
    }

    public onPointLeave(point: AbstractPoint): void {
        
    }

    public onPointEnter(point: AbstractPoint): void {
        
    }
    
}