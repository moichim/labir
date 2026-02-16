import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";
import { managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerPaletteContextConverter, managerPaletteContextDefaultValue, managerSmoothContext } from "./context/ManagerContext";

@customElement("manager-provider")
export class ManagerProviderElement extends AbstractManagerProvider {


    @property({ 
        type: String, 
        reflect: true, 
        attribute: true 
    })
    slug!: string;

    @provide({ context: managerPaletteContext })
    @property({
        type: String,
        attribute: true,
        reflect: true,
        converter: managerPaletteContextConverter
    })
    public palette: ManagerPaletteContext = managerPaletteContextDefaultValue;

    @provide({ context: managerSmoothContext })
    @property({ 
        type: String, 
        reflect: true, 
        attribute: true 
    })
    smooth: boolean = false;

    @provide({ context: managerGraphFunctionContext })
    @property({ 
        type: String, 
        reflect: true, 
        attribute: true
    })
    graphSmooth: ManagerGraphFunctionContext = false;

}