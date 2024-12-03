import { AvailableThermalPalettes, ThermalManager, ThermalPaletteType } from "@labir/core";
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