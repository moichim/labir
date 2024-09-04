import { ThermalManager } from "@labir/core";
import { createContext } from "@lit/context";

export type ManagerContext = ThermalManager;

export const managerContext =  createContext<ManagerContext>("manager-instance");