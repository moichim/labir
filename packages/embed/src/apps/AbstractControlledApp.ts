import { ThermalManager } from "@labirthermal/core";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";
import { createContext, provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { booleanConverter } from "../utils/converters/booleanConverter";

export const advancedPalettesContext = createContext<boolean>("advanced-palettes");

export const advancedPalettesSetterContext = createContext< ( value: boolean ) => void >( "advanced-palettes-setter" );

export abstract class AbstractControlledApp extends AbstractThermalElement {

    public abstract get manager(): ThermalManager;

}