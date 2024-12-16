import { AvailableThermalPalettes } from "@labir/core";
import { PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { createRef, Ref } from "lit/directives/ref.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { FileProviderElement } from "../hierarchy/providers/FileProvider";

import {booleanConverter} from "../utils/booleanMapper";
import { provide } from "@lit/context";
import { interactiveAnalysisContext } from "../utils/context";

/** All the parameters that shall be used by a single file app should be defined */
export abstract class BaseSingleApp extends BaseElement {



    @property({ type: String, reflect: true })
    url?: string;

    @property({ type: String, reflect: true })
    visible?: string;

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    @property({ type: Number, reflect: true, attribute: true })
    opacity: number = 1;

    @property({ type: Number, reflect: true })
    from?: number;

    @property({ type: Number, reflect: true })
    to?: number;

    @property()
    author?: string;

    @property()
    recorded?: string;

    @property()
    license?: string;

    @property()
    label?: string;

    @property({ type: String, reflect: false, attribute: true, converter: booleanConverter( false ) })
    showembed: boolean = false;

    @property({ type: String, reflect: false, attribute: true, converter: booleanConverter( false ) })
    showabout: boolean = false;

    @property({ type: String, reflect: false, attribute: true, converter: booleanConverter( false ) })
    showtutorial: boolean = false;

    @property({ type: String, reflect: false, converter: booleanConverter( true ) })
    showfullscreen: boolean = false;

    @property({type: String, reflect: true, converter: booleanConverter( true )})
    showhistogram: boolean = true;

    @provide({context: interactiveAnalysisContext})
    @property({type: String, reflect: true, converter: booleanConverter( true )})
    interactiveanalysis: boolean = true;

    @property({ type: String, reflect: true })
    analysis1?: string;

    @property({ type: String, reflect: true })
    analysis2?: string;

    @property({ type: String, reflect: true })
    analysis3?: string;

    @property({ type: String, reflect: true })
    analysis4?: string;

    @property({ type: String, reflect: true })
    analysis5?: string;

    @property({ type: String, reflect: true })
    analysis6?: string;

    @property({ type: String, reflect: true })
    analysis7?: string;

    @property({ type: String, reflect: true })
    ms?: number;

    @property({ type: String, reflect: true })
    speed?: 0.5 | 1 | 2 | 3 | 5 | 10;

    @property({type: String, reflect: true,  })
    autoclear: boolean = false;


    @state()
    protected hasGraph: boolean = false;

    @state()
    protected hasAnalysis: boolean = false;

    @state()
    protected isSequence: boolean = false;

    protected fileProviderRef: Ref<FileProviderElement> = createRef();


    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        this.hydrateApplisteners();
    }

    protected hydrateApplisteners() {

        if (this.fileProviderRef.value) {
            this.fileProviderRef.value.onSuccess.set(this.UUID, instance => {


                // Assign isSequence
                if (instance.timeline.isSequence !== this.isSequence) {
                    this.isSequence = instance.timeline.isSequence;
                }

                // Assign hasGraph
                const hasGraph = instance.analysisData.value.values.length > 1;
                if (hasGraph !== this.hasGraph) {
                    this.hasGraph = hasGraph;
                }

                // Assign hasAnalyis
                const hasAnalysis = instance.analysis.layers.all.length > 0;
                if (hasAnalysis !== this.hasAnalysis) {
                    this.hasAnalysis = hasAnalysis;
                }



                // Assign minmax palette if different

                instance.timeline.callbackdPlaybackSpeed.set(this.UUID, value => {
                    if (this.speed !== value) {
                        this.speed = value;
                    }
                });


                // Listen to internal range changes

                instance.group.registry.range.addListener(this.UUID + "mirror_changes", value => {

                    if (value !== undefined) {
                        // If the value differ anyhow, change it
                        if (this.from !== value.from) this.from = value.from;
                        if (this.to !== value.to) this.to = value.to;

                    } else if (value === undefined) {

                        // Set From & To as undefined if necessary
                        if (this.from !== undefined) this.from = undefined;
                        if (this.to !== undefined) this.to = undefined;

                    }
                });

                // Listen to opacity changes
                instance.group.registry.opacity.addListener(this.UUID + "mirror_changes", value => {
                    if (value !== this.opacity) {
                        this.opacity = value;
                    }
                });


                // Listen to internal palette changes

                instance.group.registry.palette.addListener(this.UUID + "mirror_changes", value => {
                    if (value !== this.palette) {
                        this.palette = value as AvailableThermalPalettes;
                    }
                });



                // Listen to internal analysis changes

                instance.slots.onSlot1Serialize.set(this.UUID, value => {
                    if (value !== this.analysis1) {
                        this.analysis1 = value;
                    }
                });

                instance.slots.onSlot2Serialize.set(this.UUID, value => {
                    if (value !== this.analysis2) {
                        this.analysis2 = value;
                    }
                });

                instance.slots.onSlot3Serialize.set(this.UUID, value => {
                    if (value !== this.analysis3) {
                        this.analysis3 = value;
                    }
                });

                instance.slots.onSlot4Serialize.set(this.UUID, value => {
                    if (value !== this.analysis4) {
                        this.analysis4 = value;
                    }
                });

                instance.slots.onSlot5Serialize.set(this.UUID, value => {
                    if (value !== this.analysis5) {
                        this.analysis5 = value;
                    }
                });

                instance.slots.onSlot6Serialize.set(this.UUID, value => {
                    if (value !== this.analysis6) {
                        this.analysis6 = value;
                    }
                });

                instance.slots.onSlot7Serialize.set(this.UUID, value => {
                    if (value !== this.analysis7) {
                        this.analysis7 = value;
                    }
                });

                // Listen to hasGraph state changes
                instance.analysisData.addListener(this.UUID, values => {
                    const hasGraph = values.values.length > 1;
                    if (this.hasGraph !== hasGraph) {
                        this.hasGraph = hasGraph;
                    }
                });

                // Listen to hasAnalysis state changes
                instance.analysis.addListener(this.UUID, values => {
                    const hasAnalysis = values.length > 0;
                    if (this.hasAnalysis !== hasAnalysis) {
                        this.hasAnalysis = hasAnalysis;
                    }
                });


            });

        }

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        if ( this.fileProviderRef.value ) {
            if ( this.fileProviderRef.value ) {

            }
        }

    }





}