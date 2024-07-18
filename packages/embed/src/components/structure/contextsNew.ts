import { Instance, ThermalGroup, ThermalManager, ThermalRegistry } from "@labir/core";
import { createContext } from "@lit/context";


export enum ThermalContextNew {
    MANAGER = "manager",
    REGISTRY = "registry",
    GROUP = "group",
    FILE = "file"
}


// Manager

export type ManagerContextType = ThermalManager
export const ManagerContextNew = createContext<ManagerContextType>( ThermalContextNew.MANAGER )


// Registry 

export type RegistryContextType = ThermalRegistry;
export const RegistryContextNew = createContext<RegistryContextType>( ThermalContextNew.REGISTRY )


// Group

export type GroupContextType = ThermalGroup;
export const GroupContextNew = createContext<GroupContextType>( ThermalContextNew.GROUP )


// File

export type FileContextType = Instance;
export const FileContextNew = createContext<FileContextType>( ThermalContextNew.GROUP )