import { AbstractFile } from "../../file/AbstractFile";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AddEllipsisTool } from "../analysis/internals/ellipsis/AddEllipsisTool";
import { AddRectangleTool } from "../analysis/internals/rectangle/AddRectangleTool";
import { AbstractTool, ITool } from "./internals/AbstractTool";
import { EditTool } from "./internals/EditTool";
import { InspectTool } from "./internals/InspectTool";

export interface IWithTool extends IBaseProperty {
    tool: ToolDrive
}

export const definedTools = {
    inspect: InspectTool,
    addRectangle: AddRectangleTool,
    addEllipsis: AddEllipsisTool,
    edit: EditTool
}

type ToolKeys = keyof typeof definedTools;

export type ThermalTool = AbstractTool & ITool & {
    key: string
};

export class ToolDrive extends AbstractProperty<ThermalTool, ThermalGroup> {

    /** Create own set of tools from the registry of tools */
    protected _tools = Object.fromEntries<ThermalTool>(Object.entries(definedTools).map(([key, cls]) => {
        return [
            key as ToolKeys,
            new cls(this.parent)
        ]
    })) as {
            [index in ToolKeys]: ThermalTool
        };
    /** Readonly list of available tools */
    public get tools() {
        return this._tools;
    }

    public constructor(
        parent: ThermalGroup,
        initial: ThermalTool
    ) {
        super(parent, initial);
    }

    protected validate(value: ThermalTool): ThermalTool {
        return value;
    }
    protected afterSetEffect(value: ThermalTool): void {
        // Activate the selected tool
        if (value) {
            value.activate();
            // Deactivate all other tools
            Object.values(this.tools).forEach(tool => {
                if (tool.key !== value.key) {
                    tool.deactivate();
                }
            });
        }

    }

    /** Pick a tool. Its activation is handled by the `afterSetEffect` */
    selectTool(
        tool: ThermalTool | keyof ToolDrive["tools"]
    ) {
        if (tool instanceof AbstractTool) {
            this.value = tool;
        } else {
            this.value = this.tools[tool];
        }
    }
}