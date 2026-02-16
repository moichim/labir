import { provide } from "@lit/context";
import { customElement, property } from "lit/decorators.js";
import { AbstractManagerProvider } from "../abstraction/AbstractManagerProvider";
import { managerGraphFunctionContext, ManagerGraphFunctionContext, ManagerPaletteContext, managerPaletteContext, managerPaletteContextConverter, managerPaletteContextDefaultValue, managerSmoothContext } from "../providers/context/ManagerContext";

@customElement("manager-mirror")
export class ManagerProviderElement extends AbstractManagerProvider {


    @property({ type: String })
    slug!: string;

    @provide({ context: managerPaletteContext })
    @property({
        type: String,
        converter: managerPaletteContextConverter
    })
    public palette: ManagerPaletteContext = managerPaletteContextDefaultValue;

    @provide({ context: managerSmoothContext })
    @property({ 
        type: String 
    })
    smooth: boolean = false;

    @provide({ context: managerGraphFunctionContext })
    @property({ type: String })
    graphSmooth: ManagerGraphFunctionContext = false;

}