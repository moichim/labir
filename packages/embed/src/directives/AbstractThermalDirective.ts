import { Directive } from "lit/directive.js";
import { T } from "../translations/Languages";
import { t } from "i18next";

export abstract class AbstractThermalDirective extends Directive {

    protected t(
        key: keyof typeof T
    ): string {
        return t(T[key]);
    }

}