import { Instance, ThermalGroup, ThermalManager, ThermalRegistry } from "@labir/core";
import { createContext } from "@lit/context";


export enum ThermalContext {
    MANAGER = "manager",
    REGISTRY = "registry",
    GROUP = "group",
    FILE = "file"
}


// Manager

export type ManagerContextType = ThermalManager
export const ManagerContext = createContext<ManagerContextType>( ThermalContext.MANAGER )


// Registry 

export type RegistryContextType = ThermalRegistry;
export const RegistryContext = createContext<RegistryContextType>( ThermalContext.REGISTRY )


// Group

export type GroupContextType = ThermalGroup;
export const GroupContext = createContext<GroupContextType>( ThermalContext.GROUP )


// File

export type FileContextType = Instance;
export const FileContext = createContext<FileContextType>( ThermalContext.GROUP )