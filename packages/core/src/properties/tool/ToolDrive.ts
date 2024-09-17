import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { AddEllipsisTool } from "../analysis/internals/area/ellipsis/AddEllipsisTool";
import { AddPointTool } from "../analysis/internals/point/AddPointTool";
import { AddRectangleTool } from "../analysis/internals/area/rectangle/AddRectangleTool";
import { AbstractTool, ITool } from "./internals/AbstractTool";
import { EditTool } from "./internals/EditTool";
import { InspectTool } from "./internals/InspectTool";

export interface IWithTool extends IBaseProperty {
    tool: ToolDrive
}

/** Registry of defined tools in the form of key:class */
export const definedTools = {
    inspect: InspectTool,
    addPoint: AddPointTool,
    addRectangle: AddRectangleTool,
    addEllipsis: AddEllipsisTool,
    edit: EditTool
}

/** Instantiates the tool for the given group. Uses `definedTools` as source. */
const createDefinedTools = (group: ThermalGroup) => {
    const arrayOfEntries = Object.entries( definedTools ).map(([key, cls]) => {
        return [
            key as ToolKeys,
            new cls(group) as ThermalTool
        ]
    });

    return Object.fromEntries( arrayOfEntries ) as {
        [index in ToolKeys]: ThermalTool
    }
}

/** Indicies of defined tools */
type ToolKeys = keyof typeof definedTools;

/** The tool type merging Abstract class and the interface */
export type ThermalTool = AbstractTool & ITool & {
    key: string
};

export class ToolDrive extends AbstractProperty<ThermalTool, ThermalGroup> {

    /** Create own set of tools from the registry of tools */
    protected _tools = createDefinedTools( this.parent );

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