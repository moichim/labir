import { AvailableThermalPalette, ThermalManager, ThermalPaletteType, ThermalTool } from "@labirthermal/core";
import { createContext } from "@lit/context";

export const managerContext =  createContext<ThermalManager>("manager-instance");

export type ManagerPaletteContext = {
    key: AvailableThermalPalette,
    data: ThermalPaletteType
}
export const managerPaletteContext = createContext<ManagerPaletteContext>( "manager-palette-context" );


export const managerSmoothContext = createContext<boolean>( "manager-smooth-context" );


export const managerGraphFunctionContext = createContext<boolean>("manager-graph-function-context");


export const languageContext = createContext<string>( "language" );


export const toolContext = createContext<ThermalTool>( "tool-context" );

type ToolsContext = ThermalManager["tool"]["tools"];
/** @deprecated I do not know wha is this here. */
export const toolsContext = createContext<ToolsContext>( "tools-context" );

export const interactiveAnalysisContext = createContext<boolean>( "interactive-analysis-context" );