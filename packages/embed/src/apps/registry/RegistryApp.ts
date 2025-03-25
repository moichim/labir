import { AvailableThermalPalettes, ThermalRegistry } from "@labir/core";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, Ref } from 'lit/directives/ref.js';
import { createOrGetManager } from "../../hierarchy/providers/getters";
import { RegistryProviderElement } from "../../hierarchy/providers/RegistryProvider";
import { AbstractMultipleApp } from "../multiple/AbstractMultipleApp";
import { Grouping, TimeGroupElement } from "./parts/TimeGroupElement";
import { initLocalesInTopLevelElement, IWithlocale, localeContext, localeConverter, Locales } from "../../translations/localeContext";
import { provide } from "@lit/context";

@customElement("thermal-registry-app")
export class TimeApp extends AbstractMultipleApp implements IWithlocale {

    protected registryProviderRef: Ref<RegistryProviderElement> = createRef();

    @property({ type: String, reflect: true, attribute: true })
    palette: AvailableThermalPalettes = "jet";

    @property({ type: Number, reflect: true })
    from?: number;

    @property({ type: Number, reflect: true })
    to?: number;

    @property()
    slug!: string;

    @property({ type: String, reflect: true })
    public grouping: Grouping = "none";

    @property({ type: String, reflect: true })
    columns: number = 3;

    @property({ type: Number, reflect: true })
    breakpoint: number = 700;

    @property({ type: String, reflect: true })
    groups: number = 3;

    @property({ type: String, reflect: true })
    autogroups: boolean = true;

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;


    @queryAssignedElements({
        flatten: true
    })
    @state()
    entries!: Array<Node>;

    @state()
    protected registry?: ThermalRegistry


    connectedCallback(): void {
        super.connectedCallback();

        const manager = createOrGetManager(this.slug);
        this.registry = manager.addOrGetRegistry(this.slug);

        this.registry.manager.palette.setPalette(this.palette);

        if (this.from !== undefined && this.to !== undefined) {
            this.registry.range.imposeRange({
                from: this.from,
                to: this.to
            });
        }
    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has("entries")) {
            console.log("Změnily se mi entrýz, budu je připínat.", this.entries);
        }

        if (_changedProperties.has("grouping") && this.grouping) {
            this.forEveryGroup(group => group.grouping = this.grouping);
        }

        if (_changedProperties.has("columns") && this.columns) {
            this.forEveryGroup(group => group.columns = this.columns);
        }

        if (_changedProperties.has("breakpoint") && this.breakpoint) {
            this.forEveryGroup(group => group.breakpoint = this.breakpoint);
        }

        if (_changedProperties.has("groups") && this.autogroups) {
            this.forEveryGroup(group => group.width = this.groups);
        }

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        initLocalesInTopLevelElement( this );

        this.forEveryGroup(group => {

            group.setManagerSlug(this.slug);
            group.width = this.groups;
            group.onInstanceEnter = (instance) => {
                this.highlightFrom = instance.min;
                this.highlightTo = instance.max;
            }
            group.onInstanceLeave = () => {
                this.highlightFrom = undefined;
                this.highlightTo = undefined;
            }

            group.groupRenderer = this.groupRenderer;
        });
    }

    protected forEveryGroup(
        fn: (group: TimeGroupElement) => void
    ) {

        const forOneNode = (node: Node, fn: (group: TimeGroupElement) => void) => {

            if (node instanceof TimeGroupElement) {
                fn(node);
                return;
            } else {
                if (node.hasChildNodes()) {

                    const children = Array.from(node.childNodes);

                    children.forEach(n => {
                        if (n instanceof Element) {
                            forOneNode(n, fn);
                            return;
                        }
                    });

                }
                return;
            }

        }

        this.entries.forEach(node => forOneNode(node, fn));

    }

    public static styles?: CSSResultGroup | undefined = css`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;




    protected render(): unknown {
        return html`
        <manager-provider slug="${this.slug}">

            <registry-provider slug="${this.slug}">
                <thermal-app>

                    <thermal-button variant="foreground" interactive="false" slot="bar">Skupinové zobrazení</thermal-button>

                    <div slot="bar" style="flex-grow: 4;">
                        
                        <thermal-bar slot="bar">
                            <registry-palette-dropdown></registry-palette-dropdown>

                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${(event: InputEvent) => {
                const target = event.target as HTMLInputElement;
                const value = target.value;
                this.columns = parseInt(value);
            }}></input>

                            <input type="range" min="1" max="10" step="1" value=${this.groups} @input=${(event: InputEvent) => {
                const target = event.target as HTMLInputElement;
                const value = target.value;
                this.groups = parseInt(value);
            }}></input>
                        

                            <thermal-dropdown>
                                <span slot="invoker">${this.grouping === "none" ? "Do not grop" : "Group by " + this.grouping}</span>

                                <div slot="option">
                                    <thermal-button @click="${() => this.grouping = "none"}">Do not group</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${() => this.grouping = "hour"}">Group by hour</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${() => this.grouping = "day"}">Group by day</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${() => this.grouping = "week"}">Group by week</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${() => this.grouping = "month"}">Group by month</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${() => this.grouping = "year"}">Group by year</thermal-button>
                                </div>

                            </thermal-dropdown>

                            <registry-range-full-button
                                                @mouseenter=${() => {
                this.highlightFrom = this.registry?.minmax.value?.min;
                this.highlightTo = this.registry?.minmax.value?.max;
            }}
                                                @focus=${() => {
                this.highlightFrom = this.registry?.minmax.value?.min;
                this.highlightTo = this.registry?.minmax.value?.max;
            }}
                                                @mouseleave=${() => {
                this.highlightFrom = undefined;
                this.highlightTo = undefined;
            }}
                                                @blur=${() => {
                this.highlightFrom = undefined;
                this.highlightTo = undefined;
            }}
                                            ></registry-range-full-button>

                        </thermal-bar>
                        
                    </div>

                    <registry-histogram></registry-histogram>
                    <registry-range-slider></registry-range-slider>
                    <registry-ticks-bar highlightFrom=${ifDefined(this.highlightFrom)} highlightTo=${ifDefined(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `;
    }


}