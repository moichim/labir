import { ThermalFileInstance, ThermalRegistry } from "@labir/core";
import { ThermalGroup } from "@labir/core";
import { createContext } from "@lit/context";
import { ThermalManager } from "@labir/core";


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

export type FileContextType = ThermalFileInstance;
export const FileContext = createContext<FileContextType>( ThermalContext.GROUP )