import { ThermalManager } from "@labirthermal/core";
import { BaseElement } from "../hierarchy/BaseElement";
import { createContext, provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { booleanConverter } from "../utils/converters/booleanConverter";

export const advancedPalettesContext = createContext<boolean>("advanced-palettes");

export const advancedPalettesSetterContext = createContext< ( value: boolean ) => void >( "advanced-palettes-setter" );

export abstract class AbstractControlledApp extends BaseElement {

    public abstract get manager(): ThermalManager;

    @property({ type: Boolean, reflect: true, attribute: "advanced-palettes", converter: booleanConverter(false) })
    @provide({ context: advancedPalettesContext })
    public advancedPalettes: boolean = false;

    @provide({ context: advancedPalettesSetterContext })
    protected setAdvancedPalettes = ( value: boolean ) => {
        this.advancedPalettes = value;
    }

}