import { ThermalRangeOrUndefined, ThermalRegistry } from "@labir/core";
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

export type RegistryMinContext = number|undefined;
export const registryMinContext = createContext<RegistryMinContext>("registry-min");

export type RegistryMaxContext = number|undefined;
export const registryMaxContext = createContext<RegistryMaxContext>("registry-max");

export const registryHighlightContext = createContext<ThermalRangeOrUndefined>("registry-highlight");
export const setRegistryHighlightContext = createContext<( value: ThermalRangeOrUndefined ) => void>( "registry-highlight-setter" );