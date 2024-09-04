import { AvailableThermalPalettes, ThermalManager, ThermalPaletteType } from "@labir/core";
import { createContext } from "@lit/context";

export type ManagerContext = ThermalManager;
export const managerContext =  createContext<ManagerContext>("manager-instance");

export type ManagerPaletteContext = {
    key: AvailableThermalPalettes,
    data: ThermalPaletteType
}
export const managerPaletteContext = createContext<ManagerPaletteContext>( "manager-palette-context" );