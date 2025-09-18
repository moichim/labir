import { customElement, property } from "lit/decorators.js";
import { AbstractFileButton } from "./AbstractFileButton";
import { t } from "i18next";
import { T } from "../../../translations/Languages";
import { consume } from "@lit/context";
import { setRegistryHighlightContext } from "../../../hierarchy/providers/context/RegistryContext";
import { Instance, ThermalRangeOrUndefined } from "@labir/core";
import { booleanConverter } from "../../../utils/converters/booleanConverter";

@customElement("file-range-propagator")
export class FileRangePropagator extends AbstractFileButton {

    @consume( { context: setRegistryHighlightContext, subscribe: true } )
    protected setter?: ( value?: ThermalRangeOrUndefined ) => void;

    protected tooltip: string = t(T.range)

    @property({type: String, converter: booleanConverter(false)})
    public hideLabel: boolean = false;

    public onInstanceCreated(file: Instance): void {
        this.tooltip = [
            file.min.toFixed(2),
            "—",
            file.max.toFixed(2),
            "°C"
        ].join( " " );
    }

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
        if ( this.hideLabel ) return "";
        return t(T.range).toLowerCase();
    }

    

}