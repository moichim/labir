import { provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { AbstractThermalElement } from "../index.export";
import { localeContext, localeConverter, Locales } from "../translations/localeContext";

export abstract class AbstractApp extends AbstractThermalElement {

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;

}