import { customElement, property, state } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { consume } from "@lit/context";
import { tourableElementContext, TourableElementReference, tourContext, TourStepContext, tourStepContext } from "./tourContext";
import { Tour } from "./Tour";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { computePosition, offset, Placement } from "@floating-ui/dom";
import { classMap } from "lit/directives/class-map.js";
import {arrow} from '@floating-ui/dom';

@customElement("tour-step")
export class TourStep extends BaseElement {


    @property({ type: String })
    label?: string;

    @state()
    protected active: boolean = false;

    @property({ type: String, reflect: true })
    protected displayed: boolean = false;

    @property({type: String})
    public placement: Placement = "bottom"

    @consume({ context: tourContext, subscribe: true })
    protected tour?: Tour;

    @consume({ context: tourStepContext, subscribe: true })
    protected definition: TourStepContext;

    @consume({ context: tourableElementContext, subscribe: true })
    protected elementContext: TourableElementReference;

    connectedCallback(): void {
        super.connectedCallback();

        if (!this.elementContext) {
            this.log("Expecting some ancestor tourable element but recieved none");
        } else {

            this.log({
                rootNode: this.getRootNode(),
                renderRoot: this.renderRoot,
                element: this.elementContext
            });

        }

        this.tour?.onStepActivation.set( "what", console.log );

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.update(_changedProperties);

        if (this.definition && this.elementContext) {

            if (this.definition.ID === this.elementContext.step) {

                this.activate();

            } else {
                this.deactivate();
            }

        } else {
            this.deactivate();
        }
    }

    protected async activate() {

        if (!this.definition || !this.elementContext) {
            return;
        }

        if (this.active === false) {

            this.active = true;
            this.displayed = true;

            this.elementContext.element.style.outline = "2px var( --thermal-primary ) solid";
            this.elementContext.element.style.borderRadius = "var(--thermal-radius)";
            this.elementContext.element.style.boxShadow = "0 0 10px var(--thermal-primary)";

            const size = await computePosition(
                this.elementContext.element,
                this,
                {
                    middleware: [offset(0)],
                    placement: this.placement,
                    // strategy: "fixed"
                }
            );

            this.style.position = "absolute";
            this.style.left = size.x + "px";
            this.style.top = size.y + "px";

            this.log("aktivoval jsem se", this.elementContext);

        }

    }

    protected async deactivate() {

        if ( this.active === true && this.elementContext) {
            this.active = false;
            this.displayed = false;
            this.elementContext.element.style.removeProperty("outline");
            this.elementContext.element.style.removeProperty("border-radius");
            this.elementContext.element.style.removeProperty("box-shadow");
            this.style.removeProperty( "position" );
            this.style.removeProperty( "top" );
            this.style.removeProperty( "left" );
        }

    }

    public static styles?: CSSResultGroup | undefined = css`

        :host {
            background: var( --thermal-primary );
            color: var( --thermal-background );
            padding: var( --thermal-gap );
            /* border: 3px solid var( --thermal-foreground ); */
            z-index: 9999;
            border-radius: var( --thermal-radius );

            font-size: var( --thermal-fs );
            line-height: 1em;
            box-shadow: 0 0 10px var(--thermal-foreground);

        }

        :host( [displayed="false"] ) {
            display: none;
            width: 0px;
            height: 0px;
            overflow: hidden;
        }

        h1 {
            font-size: var( --thermal-fs );
            border-bottom: 1px solid var( --thermal-primary-light );
            margin: 0;
            margin-bottom: 15px;
            padding: 0;
            padding-bottom: 5px;
            display: inline-block;
        }

        .content {
            padding: 0;
            padding-bottom: 15px;
        }

        .buttons {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-end;
            gap: 5px;
        }

        .header {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }

        .close {
            color: var(--thermal-background);
            background: transparent;
            border: 0;
            padding: 0;
            margin: 0;
            cursor: pointer;
            justify-self: end;

            &:hover {
                color: var( --thermal-primary-light );
            }
        }
    
    `;

    protected render(): unknown {

        const classes = {
            "tour-step": true,
            "tour-step__inactive": this.displayed === false,
            "tour-step__active": this.displayed === true
        }

        console.log( this.definition?.props?.hasPrev );

        return html`<div class=${classMap(classes)}>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${() => this.tour?.deactivate()}>X</button> 
            </div>
            <div class="content">
                <slot></slot>
            </div>

            <div class="buttons">

            ${this.definition?.props?.hasPrev
                ? html`<thermal-button @click=${() => this.tour?.previous()} variant="primary">Back</thermal-button>`
                : nothing
            } 
            
                ${this.definition?.props?.hasNext
                    ? html`<thermal-button @click=${() => this.tour?.next()} variant="background">Next</thermal-button>`
                    : nothing
                }          
            
            </div>

        </div>`;
    }



}