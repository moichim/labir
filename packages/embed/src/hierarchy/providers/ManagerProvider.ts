import { AvailableThermalPalette } from "@labirthermal/core";
import { property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";

export class ManagerProviderElement extends AbstractManagerProvider {

    @property({ 
        type: String, 
        reflect: true, 
        attribute: true 
    })
    public slug!: string;

    @property({
        type: String,
        reflect: true
    })
    public palette: AvailableThermalPalette = "jet";

    @property({ 
        type: Boolean, 
        reflect: true 
    })
    public advancedPalettes: boolean = false;

    @property({ 
        type: String, 
        reflect: true 
    })
    public smoothThermograms: boolean = false;

    @property({ 
        type: String, 
        reflect: true 
    })
    public smoothGraph: boolean = false;

    @property({
        type: Boolean, 
        reflect: true
    })
    public autoclear: boolean = false;

}