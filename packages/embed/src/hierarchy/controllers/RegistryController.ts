import { ThermalRegistry, ThermalManager } from "@labirthermal/core";
import { PropertyValues, ReactiveController, ReactiveControllerHost } from "lit";
import { _ } from "vitest/dist/chunks/reporters.d.BFLkQcL6";

export interface ComponentWithRegistryProvider extends ReactiveControllerHost {

    UUID: string;

    slug: string;

    /** The consumed manager injected during the connection */
    manager: ThermalManager;

    registry: ThermalRegistry;

    opacity: number;

    min?: number;
    max?: number;

    from?: number;
    to?: number;

    loading: boolean;

    autoclear: boolean;


}

export class RegistryProviderController implements ReactiveController {

    declare host: ComponentWithRegistryProvider;

    private readonly UUID_INTERNAL: string;

    public constructor(host: ComponentWithRegistryProvider) {

        this.host = host;                      
        this.UUID_INTERNAL = this.host.UUID + "__registry-provider-controller";
        this.host.addController(this);
    }

    hostConnected(): void {
        
        this.host.registry = this.createRegistry(this.host.slug);

    }

    hostDisconnected(): void {
        
        if ( this.host.registry && this.host.autoclear ) {
            this.host.manager.removeRegistry(this.host.registry.id);
        }

    }

    onUpdate(
        _changedProperties: PropertyValues<ComponentWithRegistryProvider>
    ): void {

        // Project the FROM/TO properties to the internal registry value
        if ( _changedProperties.has("from") || _changedProperties.has("to") ) {

            if ( 
                this.host.from !== undefined 
                && this.host.to !== undefined
            ) {

                this.host.registry.range.imposeRange({
                    from: this.host.from,
                    to: this.host.to
                });

            }

        }

        // Project the opacity property to the internal registry value
        if ( _changedProperties.has("opacity") ) {

            const sanitizedOpacity = Math.max( 0, Math.min( 1, this.host.opacity ) );

            if ( sanitizedOpacity !== this.host.registry.opacity.value ) {

                this.host.registry.opacity.imposeOpacity(sanitizedOpacity);

            }

        }

    }




    private createRegistry(
        slug: string
    ): ThermalRegistry {

        const registry = this.host.manager.addOrGetRegistry(slug);

        registry.palette.setPalette( this.host.manager.palette.value );

        if (this.host.from !== undefined && this.host.to !== undefined) {
            registry.range.imposeRange({
                from: this.host.from,
                to: this.host.to
            });
        }

        return registry;

    }

    public initListeners(
        registry: ThermalRegistry
    ): void {

        // Opacity
        registry.opacity.addListener(
            this.UUID_INTERNAL,
            value => this.host.opacity = value
        );

        // Range
        registry.range.addListener(
            this.UUID_INTERNAL,
            value => {

                if ( value ) {
                    this.host.from = value.from;
                    this.host.to = value.to;
                } else {
                    this.host.from = undefined;
                    this.host.to = undefined;
                }

            }
        );

        // Minmax
        registry.minmax.addListener(
            this.UUID_INTERNAL,
            value => {
                if ( value ) {
                    this.host.min = value.min;
                    this.host.max = value.max;
                } else {
                    this.host.min = undefined;
                    this.host.max = undefined;
                }
            }
        );

        // Loading
        registry.loading.addListener(
            this.UUID_INTERNAL,
            value => this.host.loading = value
        );

    }



}