import { AbstractFile } from "../../file/AbstractFile";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AddTestTool } from "../analysis/internals/test/AddTestTool";
import { AbstractTool, ITool } from "./internals/AbstractTool";
import { InspectTool } from "./internals/InspectTool";

export interface IWithTool extends IBaseProperty {
    tool: ToolDrive
}

export const definedTools = {
    inspect: InspectTool,
    addTest: AddTestTool
}

export type Tool = AbstractTool & ITool;

export class ToolDrive extends AbstractProperty<Tool, AbstractFile >{

    protected _tools = Object.fromEntries( Object.entries(definedTools).map( ([key, cls]) => {
        return [key, new cls]
    } ) );
    public get tools() {
        return this._tools;
    }

    public constructor(
        parent: AbstractFile,
        initial: Tool
    ) {
        super( parent, initial );
    }

    protected validate(value: Tool): Tool {
        return value;
    }
    protected afterSetEffect(value: Tool): void {
        // Activate the selected tool
        value.activate();
        // Deactivate all other tools
        Object.values( this.tools ).forEach( tool => {
            if ( tool.key !== value.key ) {
                tool.deactivate();
            }
        } );
    }

    selectTool(
        tool: Tool| keyof ToolDrive["tools"]
    ) {
        if ( tool instanceof AbstractTool ) {
            this.value = tool;
        } else {
            this.value = this.tools[tool];
        }
    }
}