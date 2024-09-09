import { AbstractFile } from "../../../../file/AbstractFile";
import { AbstractTool, ITool } from "../../../tool/internals/AbstractTool";

export class AddTestTool extends AbstractTool implements ITool {
    protected onActivate(): void {
        // throw new Error("Method not implemented.");
    }
    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }
    key: string = "add-rect";
    name: string = "Add a test tool";
    description: string = "";
    icon: string = "";
    active: boolean = false;
    getLabelValue = (x: number, y: number, file: AbstractFile): string => {
        const temperature = file.group.registry.manager.tool.tools.inspect.getLabelValue( x, y, file );
        return `X:${x}<br />Y:${y}<br />${temperature}`;
    }
    
}