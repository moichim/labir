import { ThermalRegistry } from "@labir/core";
import { createContext } from "@lit/context";

export type RegistryContext = ThermalRegistry;

export const registryContext =  createContext<RegistryContext>("registry-instance");

export type RegistryOpacityContext = number;

export const registryOpacityContext = createContext<RegistryOpacityContext>( "registry-opacity" );

export type RegistryRangeFromContext = undefined| number;
export const registryRangeFromContext = createContext<RegistryRangeFromContext>( "registry-range-from" );

export type RegistryRangeToContext = undefined|number;
export const registryRangeToContext = createContext<RegistryRangeToContext>( "registry-range-to" );

export type RegistryLoadingContext = boolean;
export const registryLoadingContext = createContext<RegistryLoadingContext>( "registry-loading" );