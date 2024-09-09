import { AbstractFile } from "../../../../file/AbstractFile";
import { AbstractTool, ITool } from "../../../tool/internals/AbstractTool";
import { AbstractAddTool } from "../AbstractAddTool";
import { AbstractPoint } from "../AbstractPoint";

export class AddRectangleTool extends AbstractAddTool implements ITool {
    
    key: string = "add-rect";
    name: string = "Add a test tool";
    description: string = "";
    icon: string = "";
    active: boolean = false;

    public onCanvasClick(x: number, y: number, file: AbstractFile): void {
        file.analysis.addRectAt( x, y );
    }

    public onPointDown(point: AbstractPoint): void {
        
    }

    public onPointUp(point: AbstractPoint): void {
        point.deactivate();
        point.analysis.file.group.tool.selectTool( "edit" );
    }

    public onCanvasLeave(file: AbstractFile): void {
        
    }

    getLabelValue = (x: number, y: number, file: AbstractFile): string => {
        const temperature = file.group.tool.tools.inspect.getLabelValue( x, y, file );
        return `X:${x}<br />Y:${y}<br />${temperature}`;
    }

    protected onActivate(): void {
        // throw new Error("Method not implemented.");
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