import { AvailableThermalPalette, ThermalManager, ThermalPalettes, ThermalPaletteType, ThermalTool } from "@labirthermal/core";
import { createContext } from "@lit/context";

export type ManagerContext = ThermalManager;
export const managerContext = createContext<ManagerContext>("manager-instance");

export type ManagerPaletteContext = {
    key: AvailableThermalPalette,
    data: ThermalPaletteType
}
export const managerPaletteContext = createContext<ManagerPaletteContext>("manager-palette-context");

/** Take care of the conversion between the attribute and the full context */
export const managerPaletteContextConverter = {
    fromAttribute: (value: AvailableThermalPalette): ManagerPaletteContext => {
        return {
            key: value,
            data: ThermalPalettes[value]
        };
    },
    toAttribute: (value: ManagerPaletteContext): string => {
        return value.key.toString();
    }
}

export const managerPaletteContextDefaultValue: ManagerPaletteContext = {
    key: "jet",
    data: ThermalPalettes["jet"]
}

export type ManagerSmoothContext = boolean;
export const managerSmoothContext = createContext<ManagerSmoothContext>("manager-smooth-context");

export type ManagerGraphFunctionContext = boolean;
export const managerGraphFunctionContext = createContext<ManagerGraphFunctionContext>("manager-graph-function-context");

export type LanguageContextType = "string";
export const languageContext = createContext<LanguageContextType>("language");

export type ToolContext = ThermalTool;
export const toolContext = createContext<ToolContext>("tool-context");

export type ToolsContext = ThermalManager["tool"]["tools"];
export const toolsContext = createContext<ToolsContext>("tools-context");