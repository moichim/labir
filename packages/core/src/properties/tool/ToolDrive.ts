import { AbstractFile } from "../../file/AbstractFile";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AddRectangleTool } from "../analysis/internals/rectangle/AddRectangleTool";
import { AbstractTool, ITool } from "./internals/AbstractTool";
import { EditTool } from "./internals/EditTool";
import { InspectTool } from "./internals/InspectTool";

export interface IWithTool extends IBaseProperty {
    tool: ToolDrive
}

export const definedTools = {
    inspect: InspectTool,
    addTest: AddRectangleTool,
    edit: EditTool
}

export type Tool = AbstractTool & ITool;

export class ToolDrive extends AbstractProperty<Tool, ThermalGroup >{

    /** Create own set of tools from the registry of tools */
    protected _tools = Object.fromEntries( Object.entries(definedTools).map( ([key, cls]) => {
        return [key, new cls]
    } ) );
    /** Readonly list of available tools */
    public get tools() {
        return this._tools;
    }

    public constructor(
        parent: ThermalGroup,
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

    /** Pick a tool. Its activation is handled by the `afterSetEffect` */
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