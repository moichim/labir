import { AvailableThermalPalettes, ThermalManager, ThermalPaletteType, ThermalTool } from "@labirthermal/core";
import { createContext } from "@lit/context";

export type ManagerContext = ThermalManager;
export const managerContext =  createContext<ManagerContext>("manager-instance");

export type ManagerPaletteContext = {
    key: AvailableThermalPalettes,
    data: ThermalPaletteType
}
export const managerPaletteContext = createContext<ManagerPaletteContext>( "manager-palette-context" );

export type ManagerSmoothContext = boolean;
export const managerSmoothContext = createContext<ManagerSmoothContext>( "manager-smooth-context" );

export type ManagerGraphFunctionContext = boolean;
export const managerGraphFunctionContext = createContext<ManagerGraphFunctionContext>("manager-graph-function-context");

export type LanguageContextType = "string";
export const languageContext = createContext<LanguageContextType>( "language" );

export type ToolContext = ThermalTool;
export const toolContext = createContext<ToolContext>( "tool-context" );

export type ToolsContext = ThermalManager["tool"]["tools"];
export const toolsContext = createContext<ToolsContext>( "tools-context" );