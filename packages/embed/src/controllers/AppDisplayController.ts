import { ThermalRangeOrUndefined, ThermalRegistry } from "@labirthermal/core";
import { ThermalManager } from "@labirthermal/core";
import { AbstractReactiveController } from "./AbstractReactiveController";
import { IBaseElement } from "./IBaseElement";
import { AvailableThermalPalette } from "@labirthermal/core";
import { PropertyValues } from "lit";
import { ContextProvider, createContext } from "@lit/context";
import { managerAdvancedPalettesContext } from "../hierarchy/providers/context/ManagerContext";

export const appDisplayContext = createContext<AppDisplayController>("app-display-context");

export interface IAppWithThermalDisplayController extends IBaseElement {

    thermalDisplayController: AppDisplayController;

    /** Current thermal palette for the use in standardised thermal application elements */
    palette: AvailableThermalPalette;

    /** Are advanced palettes enabled in the registry? */
    advancedPalettes: boolean;

    /** Are the thermal images smooth? */
    smoothThermograms: boolean;

    /** Opacity of thermal images */
    opacity: number;

    from?: number;
    to?: number;

}

/**
 * Maps the core properties related to thermal display to top-level attributes of the host element and exposes self as a context providing access to core property setters and getters.
 */
export class AppDisplayController extends AbstractReactiveController<IAppWithThermalDisplayController> {

    private _UUID?: string;

    public get UUID(): string {
        if (!this._UUID) {
            this._UUID = this.host.UUID + "_app-display-mapper";
        }
        return this._UUID;
    }


    private _manager?: ThermalManager;
    private _registry?: ThermalRegistry;

    public get advancedPalettes(): boolean {
        return this.host.advancedPalettes;
    }

    private _advancedPalettesContextProvider: ContextProvider<
        typeof managerAdvancedPalettesContext,
        IAppWithThermalDisplayController
    >;

    /** Public accessor to the internal manager object */
    protected get manager(): ThermalManager {
        if (!this._manager) throw new Error("Manager not yet connected.");
        return this._manager;
    }

    /** Public accessor to the internal registry object. */
    protected get registry(): ThermalRegistry {
        if (!this._registry) throw new Error("Registry not yet connected.");
        return this._registry;
    }

    constructor(
        host: IAppWithThermalDisplayController
    ) {
        super(host);

        this._advancedPalettesContextProvider = new ContextProvider(
            this.host,
            { context: managerAdvancedPalettesContext }
        );

    }

    /** Connect the controller to a manager and registry. */
    public dangerouslyConnect(
        manager: ThermalManager,
        registry: ThermalRegistry
    ): void {

        this.dangerouslyDisconnect();

        this._hydrateManagerInternalListeners(manager);
        this._hydrateRegistryInternalListeners(registry);

        this._manager = manager;
        this._registry = registry;

    }


    /** Disconnect the controller from the manager and the registry. This method shall be called only from the top level element (not from the consumers of the context) */
    public dangerouslyDisconnect(): void {
        if (this.manager) this._disconnectManager(this.manager);
        if (this.registry) this._disconnectRegistry(this.registry);
        this._manager = undefined;
        this._registry = undefined;
    }

    /** Removes the current manager from the controller */
    private _disconnectManager(
        manager: ThermalManager
    ): void {
        manager.palette.removeListener(this.UUID);
        manager.smooth.removeListener(this.UUID);
    }

    /** Removes listeners from a registry instance */
    private _disconnectRegistry(
        registry: ThermalRegistry
    ): void {
        registry.range.removeListener(this.UUID);
        registry.minmax.removeListener(this.UUID);
        registry.opacity.removeListener(this.UUID);
    }





    private _hydrateManagerInternalListeners(
        manager: ThermalManager
    ): void {

        manager.palette.addListener(
            this.UUID,
            this._paletteChangedInternally.bind(this)
        );

        manager.smooth.addListener(
            this.UUID,
            this._smoothThermogramsChangedInternally.bind(this)
        );

    }

    private _hydrateRegistryInternalListeners(
        registry: ThermalRegistry
    ): void {

        // Opacity
        registry.opacity.addListener(
            this.UUID,
            this._opacityChangedInternally.bind(this)
        );

        // Range
        registry.range.addListener(
            this.UUID,
            this._rangeChangedInternally.bind(this)
        );

    }


    hostConnected(): void {

    }

    hostDisconnected(): void {
        this.dangerouslyDisconnect();
    }

    /** Nastaví defaultní parametry do core */
    public hostFirstUpdated(): void {

        // Palette
        if (this.host.palette) {
            this._paletteChangedInElement(this.host.palette);
        }

        // Opacity
        if (this.host.opacity) {
            this._opacityChangedInElement(this.host.opacity);
        }

        // Smooth thermograms
        if (this.host.smoothThermograms) {
            this._smoothThermogramsChangedInElement(this.host.smoothThermograms);
        }

        // Range
        if (this.host.from !== undefined && this.host.to !== undefined) {
            this._rangeChangedInElement(this.host.from, this.host.to);
        }


    }




    public hostUpdated(
        values: PropertyValues<IAppWithThermalDisplayController>
    ): void {

        if (values.has("palette")) {
            this._paletteChangedInElement(this.host.palette);
        }

        if (values.has("smoothThermograms")) {
            this._smoothThermogramsChangedInElement(this.host.smoothThermograms);
        }

        if (values.has("opacity")) {
            this._opacityChangedInElement(this.host.opacity);
        }

        if (values.has("from") || values.has("to")) {
            this._rangeChangedInElement(this.host.from, this.host.to);
        }

    }



    /** The palette has changed in the top-level element's property */
    private _paletteChangedInElement(
        valueInHost: AvailableThermalPalette
    ): void {

        if (valueInHost !== this.manager.palette.value) {
            this.manager.palette.setPalette(valueInHost);
        }

    }

    /** Palette was changed internally in the core. */
    private _paletteChangedInternally(
        internalValue: AvailableThermalPalette
    ): void {

        if (internalValue !== this.host.palette) {
            this.host.palette = internalValue;
        }

    }

    /** Smooth thermograms changed in the element */
    private _smoothThermogramsChangedInElement(
        valueInElement: boolean
    ): void {

        if (this.manager.smooth.value !== valueInElement) {
            this.manager.smooth.setSmooth(valueInElement);
        }

    }

    /** Smooth thermograms changed in the core */
    private _smoothThermogramsChangedInternally(
        internalValue: boolean
    ): void {

        if (internalValue !== this.manager.smooth.value) {
            this.host.smoothThermograms = internalValue;
        }

    }

    private _opacityChangedInElement(
        valueInElement: number
    ) {
        if (this.registry.opacity.value !== valueInElement) {
            this.registry.opacity.imposeOpacity(valueInElement);
        }
    }

    private _opacityChangedInternally(
        internalValue: number
    ) {
        if (internalValue !== this.host.opacity) {
            this.host.opacity = internalValue;
        }
    }

    private _rangeChangedInternally(
        internalValue: ThermalRangeOrUndefined
    ): void {

        if (internalValue === undefined) {

            if (this.host.from !== undefined) {
                this.host.from = undefined;
                this.host.requestUpdate();
            }

            if (this.host.to !== undefined) {
                this.host.to = undefined;
                this.host.requestUpdate();
            }

        } else {

            if (internalValue.from !== this.host.from) {
                this.host.from = internalValue.from;
                this.host.requestUpdate();
            }

            if (internalValue.to !== this.host.to) {
                this.host.to = internalValue.to;
                this.host.requestUpdate();
            }

        }

    }

    private _rangeChangedInElement(
        valueFromInElement?: number,
        valueToInElement?: number
    ) {

        // Do nothing when no range is used
        if (!this.registry.range.value) {
            return;
        }

        if (
            valueFromInElement !== undefined
            && valueToInElement !== undefined
        ) {
            this.registry.range.imposeRange({
                from: valueFromInElement,
                to: valueToInElement
            });
        }

    }


}