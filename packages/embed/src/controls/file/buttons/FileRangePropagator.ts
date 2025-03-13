import { customElement } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { consume } from "@lit/context";
import { setRegistryHighlightContext } from "../../../hierarchy/providers/context/RegistryContext";
import { ThermalRangeOrUndefined } from "@labir/core";

@customElement("file-range-propagator")
export class FileRangePropagator extends AbstractFileButton {

    @consume( { context: setRegistryHighlightContext, subscribe: true } )
    protected setter?: ( value?: ThermalRangeOrUndefined ) => void;

    enter() {

        if ( this.setter && this.file) {
            this.setter( {
                from: this.file.min,
                to: this.file.max
            } );
        }

    }
    leave() {
        if ( this.setter ) {
            this.setter( undefined );
        }
    }

    action() {
        if ( this.file ) {
            this.log( this.file.min, this.file.max );
            this.file.group.registry.range.imposeRange({
                from: this.file.min,
                to: this.file.max
            });
        }
    }

    getDefaultLabel(): string {
        return t(T.range).toLowerCase();
    }

    

}