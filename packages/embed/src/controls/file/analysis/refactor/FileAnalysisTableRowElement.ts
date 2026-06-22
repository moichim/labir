import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { AbstractOneAnalysisElement } from "./AbstractOneAnalyisElement";
import { html, nothing } from "lit/html.js";
import { property } from "lit/decorators/property.js";

export class FileAnalysisTableElement extends AbstractOneAnalysisElement {

    /** Indicates whether the component toes show the minimal value */
    @property({ type: Boolean, attribute: "shows-min" })
    public showsMin: boolean = true;

    @property({ type: Boolean, attribute: "shows-max" })
    public showsMax: boolean = true;

    @property({ type: Boolean, attribute: "shows-avg" })
    public showsAvg: boolean = true;

    @property({ type: Boolean, attribute: "value-activation-enabled" })
    public valueActivationEnabled: boolean = true;

    @property({ type: Boolean, attribute: "edit-enabled" })
    public editEnabled: boolean = false;

    /** Should the component allow selection of the analysis? */
    @property({ type: Boolean, attribute: "selection-enabled" })
    public selectionEnabled: boolean = true;

    /** Should this component show the name of the analysis? */
    @property({ type: Boolean, attribute: "shows-name" })
    public showsName: boolean = true;

    /** Should the name be edited in place or in the edit dialogue? */
    @property({ type: Boolean, attribute: "name-inplace-edit" })
    public nameInplaceEdit: boolean = false;

    /** Should the color be edited in place or in the edit dialogue? */
    @property({ type: Boolean, attribute: "color-inplace-edit" })
    public colorInplaceEdit: boolean = false;

    public onInstanceCreated(instance: Instance): void {
        //
    }

    public onFailure(error: ThermalFileFailure): void {
        //
    }

    private renderTh(
        icon?: unknown,
        label?: string,
        onClick?: () => void
    ): unknown {
        
        return html`<th
            @click=${onClick}
            title=${label ?? nothing}
        >
            ${icon ? html`<thermal-icon .icon=${icon}></thermal-icon>` : nothing}
            ${label ?? nothing}
        ></th>`;

    }


    private renderValueString(
        value: number | false
    ): unknown {
        return value === false ? "-" : value.toFixed(2);
    }

    private renderValueText(): unknown {

        return html`<td></td>`;

    }



    private renderTdValue(
        value: number | false,
        active: boolean = false,
        tooltip?: string
    ): unknown {

        const val = value === false ? "-" : value.toFixed(2);

        return html`<td></td>`;
    }



    public renderTableHeader(): unknown {

        if ( this.file === undefined ) return nothing;

    }


}