import { AvailableThermalPalette, ThermalPalettes, ThermalRegistry } from "@labirthermal/core";
import { appDisplayContext, AppDisplayController, IAppWithThermalDisplayController } from "../controllers/AppDisplayController";
import { AbstractApp } from "./AbstractApp";
import { PaletteDrive } from "@labirthermal/core/src/properties/scale/PaletteDrive";
import { property } from "lit/decorators.js"
import { numberRangeConverter } from "../utils/converters/numberRangeConverter";
import { html, PropertyValues } from "lit";
import { provide } from "@lit/context";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { ThermalManager } from "@labirthermal/core";
import { ifDefined } from "lit/directives/if-defined.js";


const allowedPaletteKeys = Object.keys(ThermalPalettes);


/** @deprecated */
export class AbstractAppWithThermalDisplay extends AbstractApp implements IAppWithThermalDisplayController {


    @provide({ context: appDisplayContext })
    public thermalDisplayController: AppDisplayController = new AppDisplayController(this);


    @property({
        type: String,
        reflect: true,
        attribute: "palette",
        converter: {
            fromAttribute: (value: string) => {
                if (!allowedPaletteKeys.includes(value)) return "iron";
                return value as AvailableThermalPalette;
            },
            toAttribute: (value: AvailableThermalPalette) => {
                return value as string;
            }
        }
    })
    public palette: AvailableThermalPalette = "iron";

    @property({
        reflect: true,
        attribute: "advanced-palettes",
        converter: booleanConverter(true)
    })
    advancedPalettes: boolean = false;

    @property({
        reflect: true,
        attribute: "smooth-thermograms",
        converter: booleanConverter(false)
    })
    smoothThermograms: boolean = false;

    @property({
        reflect: true,
        attribute: "opacity",
        converter: numberRangeConverter(
            1,
            0.0,
            1.0
        )
    })
    opacity: number = 1;

    @property({
        type: Number,
        attribute: "from",
        reflect: true
    })
    from?: number | undefined;

    @property({
        type: Number,
        attribute: "to",
        reflect: true
    })
    to?: number | undefined;


    private managerRef: Ref<AbstractManagerProvider> = createRef();
    private registryRef: Ref<AbstractRegistryProvider> = createRef();

    public get manager(): ThermalManager | undefined {
        return this.managerRef.value?.managerObject;
    }

    public get registry(): ThermalRegistry | undefined {
        return this.registryRef.value?.registryObject;
    }


    protected firstUpdated(_changedProperties: PropertyValues): void {

        super.firstUpdated(_changedProperties);

        const manager = this.manager;
        const registry = this.registry;

        if (
            manager === undefined
            || registry === undefined
        ) {
            throw new Error("No manager or registry provided");
        }

        // Activate the display controller with defaults
        this.thermalDisplayController.dangerouslyConnect(
            manager,
            registry
        );

        // Impose the initial values from this element to the controller
        this.thermalDisplayController.hostFirstUpdated();
    }


    protected updated(changedProperties: PropertyValues<AbstractAppWithThermalDisplay>): void {

        super.updated(changedProperties);

        this.thermalDisplayController.hostUpdated(changedProperties);

    }

    protected renderProviders(
        children: unknown
    ) {

        return html`
        Provajdrz
        <manager-provider
            slug=${this.UUID}
            ${ref(this.managerRef)}
            palette=${this.palette}
            desktop="true"
        >
            
            <registry-provider
                slug=${this.UUID}
                ${ref(this.registryRef)}
                from=${ifDefined(this.from)}
                to=${ifDefined(this.to)}
                opacity=${ifDefined(this.opacity)}
            >

                ${children}
                
            </registry-provider>
        
        </manager-provider>`;

    }




}