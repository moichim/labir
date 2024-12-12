import { html, PropertyValues } from "lit";
import { ManagerConsumer } from "../consumers/ManagerConsumer";
import { RegistryContext } from "../providers/context/RegistryContext";

export abstract class AbstractRegistryProvider extends ManagerConsumer {

    protected UUIDRegistryListeners = this.UUID + "__registry-listener";

    slug!: string;

    public registry!: RegistryContext;

    public opacity: number = 1;

    protected min?: number;

    protected max?: number;

    public from?: number;

    public to?: number;

    public loading: boolean = false;

    public autoclear: boolean = false;


    connectedCallback(): void {

        super.connectedCallback();

        const registry = this.manager.addOrGetRegistry(this.slug);

        this.registry = registry;

        // Set the fixed range if necessary
        if (this.from !== undefined && this.to !== undefined) {
            this.registry.range.imposeRange({
                from: this.from,
                to: this.to
            });
        }

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        if (this.autoclear === true && this.registry !== undefined) {
            this.manager.removeRegistry(this.registry.id);
        }
    }



    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        // Bind opacity to the element property
        this.registry.opacity.addListener(this.UUIDRegistryListeners, value => {
            this.opacity = value;
        });

        // Bind minmax changes to the element state
        this.registry.minmax.addListener(this.UUIDRegistryListeners, value => {
            if (value === undefined) {
                this.min = undefined;
                this.max = undefined;
            } else {
                this.min = value.min;
                this.max = value.max;
            }
        });

        // Bind range changes to the element property
        this.registry.range.addListener(this.UUIDRegistryListeners, value => {

            if (value === undefined) {
                this.from = undefined;
                this.to = undefined;
            } else {
                this.from = value.from;
                this.to = value.to;
            }
        });

        // Bind loading changes to the element property
        this.registry.loading.addListener(this.UUIDRegistryListeners, value => {
            this.loading = value;
        });


    }

    protected updated(_changedProperties: PropertyValues): void {

        super.updated(_changedProperties);

        if (_changedProperties.has("from") || _changedProperties.has("to")) {

            if (this.from !== undefined && this.to !== undefined) {

                this.registry.range.imposeRange({
                    from: this.from,
                    to: this.to
                })

            }

        }

        if (_changedProperties.has("opacity")) {
            const sanitisedOpacity = Math.min(1, Math.max(0, this.opacity));
            if (sanitisedOpacity !== this.registry.opacity.value) {
                this.registry.opacity.imposeOpacity(sanitisedOpacity);
            }
        }

    }


    protected render(): unknown {
        return html`<slot></slot>`;
    }


}