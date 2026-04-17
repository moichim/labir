import { ThermalRangeOrUndefined, ThermalRegistry } from "@labirthermal/core";
import { createContext } from "@lit/context";

export const registryContext = createContext<ThermalRegistry>("registry-instance");

export const registryOpacityContext = createContext<number>("registry-opacity");

export const registryRangeFromContext = createContext<undefined | number>("registry-range-from");


export const registryRangeToContext = createContext<undefined | number>("registry-range-to");

export const registryLoadingContext = createContext<boolean>("registry-loading");

export const registryMinContext = createContext<number | undefined>("registry-min");

export const registryMaxContext = createContext<number | undefined>("registry-max");

/** 
 * Highlight is an optional range of temperatures highlighted graphically on the thermal scale. It is used to indicate for example:
 * - what is the range of a file within min/max of the entire group
 * - what is the range of an analysis within the min/max of a file
 * - what is the min/max of a group of files within multiple groups of files
 * 
 * This context is exposed by a registry provider. It need to be consumed manually.
 */
export const registryHighlightContext = createContext<ThermalRangeOrUndefined>("registry-highlight");

/**
 * Highlight setter needs to be used in order to set/unset a temperature range on the thermal scale.
 */
export const setRegistryHighlightContext = createContext<(value: ThermalRangeOrUndefined) => void>("registry-highlight-setter");