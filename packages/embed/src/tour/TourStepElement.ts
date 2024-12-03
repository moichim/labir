import { consume } from "@lit/context";
import { property, state } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";
import { Tour } from "./Tour";
import { tourContext } from "./tourContext";
import { TourStepDefinition } from "./TourStepDefinition";
import { html, nothing } from "lit";

export abstract class TourStepElement extends BaseElement {

    @consume({ context: tourContext, subscribe: true })
    tourController?: Tour

    @property({ type: String })
    tourStepId?: string;

    @property({ type: String })
    tourTitle?: string

    @property({ type: String })
    tourDescription?: string;

    @state()
    protected tourActive: boolean = false;

    @state()
    protected tourLocalDefinitionIfActive?: TourStepDefinition;


    connectedCallback(): void {
        super.connectedCallback();

        if (this.tourController) {


            /** 
             * Listen for incoming changes of the current tour step. 
             * 
             * If the incoming step matches the local ID, store the definition to indicate it is active.
             */
            this.tourController.onStepActivation.set(this.UUID, (
                step
            ) => {

                if (this.tourStepId === undefined) {
                    return;
                }

                if (step === undefined) {
                    this.tourLocalDefinitionIfActive = undefined;
                    return;
                }

                else {

                    if ( step.ID !== this.tourStepId ) {
                        this.tourLocalDefinitionIfActive = step;
                    } else {
                        this.tourLocalDefinitionIfActive = undefined;
                    }

                }

            });
        }

    }

    protected renderTour() {

        if (this.tourLocalDefinitionIfActive === undefined) {
            return nothing;
        }

        else {
            return html`
                <div>
                    <h1>${this.tourTitle}</h1>
                    <p>${this.tourDescription}</p>

                    <thermal-button @click=${() => this.tourController?.previous()}>Previous</thermal-button>

                    <thermal-button @click=${() => this.tourController?.next()}>Next</thermal-button>
                </div>
            `;
        }

    }



}