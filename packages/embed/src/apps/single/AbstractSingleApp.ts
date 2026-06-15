import { AvailableThermalPalette, Instance } from "@labirthermal/core";
import { AbstractAppWithFiles } from "../AbstractAppWithFiles";
import { property } from "lit/decorators/property.js";
import { booleanConverter, FileProviderElement } from "../../index.export";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { html, nothing, PropertyValues } from "lit";
import { initLocalesInTopLevelElement } from "../../translations/localeContext";
import { ifDefined } from "lit/directives/if-defined.js";

export abstract class AbstractSingleApp extends AbstractAppWithFiles {


    /** Internal reference to the file provider element... */
    protected fileProviderRef: Ref<FileProviderElement> = createRef();

    /** The reference on the instance object once it is loaded. */
    protected abstract get instance(): Instance;

    @property({ type: String })
    public url?: string;

    @property({ type: String })
    public visible?: string;

    @property({ type: String })
    public palette?: AvailableThermalPalette = "jet";

    @property({ type: Number })
    public from?: number;

    @property({ type: Number })
    public to?: number;

    @property({ type: Number })
    public opacity: number = 1;

    @property({ type: String, reflect: true })
    public analysis1?: string;

    @property({ type: String, reflect: true })
    public analysis2?: string;

    @property({ type: String, reflect: true })
    public analysis3?: string;

    @property({ type: String, reflect: true })
    public analysis4?: string;

    @property({ type: String, reflect: true })
    public analysis5?: string;

    @property({ type: String, reflect: true })
    public analysis6?: string;

    @property({ type: String, reflect: true })
    public analysis7?: string;

    /** Global parameter indicating whether the histogram will be displayed in the template. */
    @property({
        type: Boolean,
        reflect: true,
        attribute: "show-histogram",
        converter: booleanConverter( true )
    })
    public showHistogram: boolean = true;

    /** Global parameter indicating whether the thermal scale will be displayed in the template. */
    @property({
        type: Boolean,
        reflect: true,
        attribute: "show-thermal-scale",
        converter: booleanConverter( true )
    })
    public showThermalScale: boolean = true;

    /** Internal UUID for `@labirthermal/core` requests. */
    private UUID_INTERNAL: string = this.getUUID("internal");


    /** List of analysis slot property names. */
    private static readonly ANALYSIS_SLOTS = [
        "analysis1",
        "analysis2",
        "analysis3",
        "analysis4",
        "analysis5",
        "analysis6",
        "analysis7"
    ] as const;


    firstUpdated( _changedProperties: PropertyValues<AbstractSingleApp> ): void {

        super.firstUpdated( _changedProperties );

        // Register intl listeners
        initLocalesInTopLevelElement(this);

        // Register listeners to internal properties of the file, group, registry
        this.hydrateInternalListeners();

    }


    protected hydrateInternalListeners(): void {

        if ( this.fileProviderRef.value ) {
            this.fileProviderRef.value.onSuccess.set(
                this.UUID_INTERNAL,
                () => this.hydrateInstanceAfterLoad( this.instance )
            );
        }

    }


    /**
     * Create listeners to an instance object
     */
    protected hydrateInstanceAfterLoad(
        instance: Instance
    ): void {

        /** Sync internal registry changes to the top level properties */
        instance.group.registry.range.addListener(
            this.UUID_INTERNAL,
            value => {

                if (value === undefined) {
                    this.from = undefined;
                    this.to = undefined;
                } else if (
                    this.from !== value.from
                    || this.to !== value.to
                ) {
                    this.from = value.from;
                    this.to = value.to;
                }

            }
        );

        /** Sync internal opacity changes to the top level property */
        instance.group.registry.opacity.addListener(
            this.UUID_INTERNAL,
            value => {
                if (value !== this.opacity) {
                    this.opacity = value;
                }
            }
        );

        /** Sync palette changes to the top level property */
        instance.group.registry.palette.addListener(
            this.UUID_INTERNAL,
            value => {
                if (value !== this.palette) {
                    this.palette = value;
                }
            }
        );

        /** Sync analysis 1 changes to top level property */
        instance.slots.onSlot1Serialize.set(this.UUID, value => {
            if (this.analysis1 !== value) {
                this.analysis1 = value;
            }
        });

        /** Sync analysis 2 changes to top level property */
        instance.slots.onSlot2Serialize.set(this.UUID, value => {
            if (this.analysis2 !== value) {
                this.analysis2 = value;
            }
        });

        /** Sync analysis 3 changes to top level property */
        instance.slots.onSlot3Serialize.set(this.UUID, value => {
            if (this.analysis3 !== value) {
                this.analysis3 = value;
            }
        });

        /** Sync analysis 4 changes to top level property */
        instance.slots.onSlot4Serialize.set(this.UUID, value => {
            if (this.analysis4 !== value) {
                this.analysis4 = value;
            }
        });

        /** Sync analysis 5 changes to top level property */
        instance.slots.onSlot5Serialize.set(this.UUID, value => {
            if (this.analysis5 !== value) {
                this.analysis5 = value;
            }
        });

        /** Sync analysis 6 changes to top level property */
        instance.slots.onSlot6Serialize.set(this.UUID, value => {
            if (this.analysis6 !== value) {
                this.analysis6 = value;
            }
        });

        /** Sync analysis 7 changes to top level property */
        instance.slots.onSlot7Serialize.set(this.UUID, value => {
            if (this.analysis7 !== value) {
                this.analysis7 = value;
            }
        });

    }


    beforeUpdate(changedProperties: PropertyValues<AbstractSingleApp>): void {

        // If the range has changed, project it into the core the core registry
        const fromChanged = changedProperties.has("from");
        const toChanged = changedProperties.has("to");

        if ( fromChanged || toChanged ) {
            this.projectRangeToInternalRegistryIfDiffers(this.from, this.to);
        }

        // When the opacity changes, project it into the core registry
        this.whenPropertyChanged(changedProperties, "opacity", (prev) => {
            if ( this.opacity !== prev ) {
                this.instance.group.registry.opacity.imposeOpacity( this.opacity );
            }
        });

        // When the palette changes, project it into the core registry
        this.whenPropertyChanged(changedProperties, "palette", (prev) => {
            if ( this.palette !== prev && this.palette !== undefined ) {
                this.instance.group.registry.palette.setPalette( this.palette );
            } 
        });

        // Iterate over all analysis slots properties
        AbstractSingleApp.ANALYSIS_SLOTS.forEach((slotParameterName, index) => {
            this.beforeUpdatedAnalysisSlot(
                changedProperties,
                slotParameterName,
                index
            );
        });


    }


    /** Look on internal properties, look for a particular value and if it changed, execute a callback. */
    private whenPropertyChanged<T>(
        changedProperties: PropertyValues<AbstractSingleApp>,
        propertyName: keyof AbstractSingleApp,
        callback: (prev: T) => void
    ) {

        if ( changedProperties.has(propertyName) ) {
            callback(changedProperties.get(propertyName) as T);
        }

    }


    private beforeUpdatedAnalysisSlot(
        changedProperties: PropertyValues<AbstractSingleApp>,
        slotParameterName: keyof AbstractSingleApp,
        index: number
    ): void {

        this.whenPropertyChanged(
            changedProperties, 
            slotParameterName,
            previousValue => {

                if ( ! this.instance ) {
                    return;
                }

                const slotNum = index + 1;

                const newValue = this[slotParameterName] as string | undefined;

                const internalValue = this.instance.slots.getSlot(index)?.serialized;

                if ( newValue !== internalValue ) {

                    const slotObject = this.instance.slots.getSlot( slotNum );

                    // If the new value is undefined, remove the slot and its analysis.
                    if ( newValue === undefined ) {
                        this.instance.slots.removeSlotAndAnalysis( slotNum );
                    } 
                    // If the slot value exists and the internal slot object as well, update the internal slot value
                    else if ( slotObject ) {
                        slotObject.recieveSerialized( newValue );
                    } 
                    // If the slot object does not exist, create a new analysis from the serialiuzed value and create a new slot from the serialized
                    else {
                        this.instance.slots.createAnalysisFromSerialized( newValue, slotNum );
                    }

                }

            }
        );

    }


    private projectRangeToInternalRegistryIfDiffers(
        from: number | undefined,
        to: number | undefined
    ): void {

        const rangeObject = this.instance.group.registry.range;

        // If both values are set, impose them into the registry
        if ( from !== undefined && to !== undefined ) {

            // Impose them only when at least one of them differs
            if ( from !== rangeObject.value?.from || to !== rangeObject.value?.to ) {
                rangeObject.imposeRange({
                    from,
                    to
                });
            }

        }

        // If no value is being set, impose undefined into the registry
        else {

            // Impose undefined only when not undefined already
            if ( rangeObject.value !== undefined ) {
                rangeObject.imposeRange(undefined);
            }
    
        }

    }


    /** Render the scale depending on the current settings */
    protected renderScale(): unknown {

        return html`${this.renderHistogram()}${this.renderThermalScale()}${this.renderTicksBar()}`;

    }


    /** Render the thermal scale depending on the current settings */
    private renderThermalScale(): unknown {
        
        if ( ! this.showThermalScale ) {
            return nothing;
        }

        return html`<registry-range-slider></registry-range-slider>`;

    }


    /** Render the histogram depending on the current settings */
    private renderHistogram(): unknown {

        if ( ! this.showHistogram ) {
            return nothing;
        }

        return html`<registry-histogram expandable="true"></registry-histogram>`;

    }


    /** Render the ticks bar depending on the current settings */
    private renderTicksBar(): unknown {

        if ( ! this.showThermalScale || ! this.showHistogram ) {
            return nothing;
        }

        return html`<registry-ticks-bar></registry-ticks-bar>`;

    }

    /** Render the internal providers with global parameters */
    protected renderProviders(
        content: unknown
    ): unknown {

        return html`<manager-provider 
    slug="${this.UUID}"
    palette="${this.palette}"
>
    <registry-provider 
        slug="${this.UUID}"
        from="${ifDefined(this.from)}"
        to="${ifDefined(this.to)}"
        opacity="${this.opacity}"
    >
        <group-provider slug="${this.UUID}">
        
            <file-provider 
                ${ref(this.fileProviderRef)} 
                thermal="${this.url}"
                visible="${ifDefined(this.visible)}"
                batch="true"
                analysis1="${ifDefined(this.analysis1)}"
                analysis2="${ifDefined(this.analysis2)}"
                analysis3="${ifDefined(this.analysis3)}"
                analysis4="${ifDefined(this.analysis4)}"
                analysis5="${ifDefined(this.analysis5)}"
                analysis6="${ifDefined(this.analysis6)}"
                analysis7="${ifDefined(this.analysis7)}"
                autoclear="true"
            >
                <notation-provider>
        
                    <slot name="notation" slot="notation"></slot>
        
                    ${content}
        
                </notation-provider>
        
            </file-provider>
        
        </group-provider>
    </registry-provider>
</manager-provider>`;

    }


}