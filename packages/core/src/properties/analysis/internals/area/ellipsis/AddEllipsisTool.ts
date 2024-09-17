import { AbstractFile } from "../../../../../file/AbstractFile";
import { ITool } from "../../../../tool/internals/AbstractTool";
import { AbstractAddTool } from "../../AbstractAddTool";
import { AbstractPoint } from "../../AbstractPoint";

export class AddEllipsisTool extends AbstractAddTool implements ITool {
    
    key: string = "add-ellipsis";
    name: string = "Add an elyptical analysis";
    description: string = "Click and drag to add an elyptical analysis.";
    icon: string = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`;
    active: boolean = false;

    public onCanvasClick(top: number, left: number, file: AbstractFile): void {
        const newRect = file.analysis.layers.createEllipsisFrom( top, left );

        newRect.setSelected( true );

    }

    public onPointDown(): void {
        
    }

    public onPointUp(point: AbstractPoint): void {
        point.deactivate();
        point.analysis.file.group.tool.selectTool( "edit" );
        point.analysis.ready = true;
        point.analysis.recalculateValues();
        if ( point.analysis.width <= 0 || point.analysis.height <= 0 ) {
            point.analysis.layers.removeAnalysis( point.analysis.key );
        }
    }

    public onCanvasLeave(): void {
        
    }

    getLabelValue = (x: number, y: number, file: AbstractFile): string => {
        const temperature = file.group.tool.tools.inspect.getLabelValue( x, y, file );
        return `X:${x}<br />Y:${y}<br />${temperature}`;
    }

    protected onActivate(): void {
        // throw new Error("Method not implemented.");
        this.group.forEveryInstance( instance => {
            instance.analysis.layers.selectedOnly.forEach( analysis => {
                analysis.setDeselected();
            } );
        } );
    }
    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }

    public onPointMove(point: AbstractPoint, top: number, left: number): void {
        if ( point.isInSelectedLayer() && point.active ) {
            point.x = left;
            point.y = top;
            point.analysis.onResize.call();
        }
    }

    public onPointLeave(): void {
        
    }

    public onPointEnter(): void {
        
    }
    
}