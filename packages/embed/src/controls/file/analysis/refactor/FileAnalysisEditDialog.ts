import { Instance, ThermalFileFailure } from "@labirthermal/core";
import { AbstractOneAnalysisElement } from "./AbstractOneAnalyisElement";
import { nothing } from "lit/html.js";
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

    public renderTableHeader(): unknown {

        if ( this.file === undefined ) return nothing;

    }


}