import { provide } from "@lit/context";
import { property } from "lit/decorators.js";
import type { IWithlocale } from "../translations/localeContext";
import { ConfigController } from "../hierarchy/controllers/ConfigController";
import { initLocalesInTopLevelElement, localeContext, localeConverter } from "../translations/localeContext";
import type { Locales } from "../translations/localeContext";
import { booleanConverter } from "../utils/converters/booleanConverter";
import { PropertyValues } from "lit";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";

export abstract class AbstractApp extends AbstractThermalElement implements IWithlocale {

    protected readonly configController = new ConfigController(this);

    @provide({ context: localeContext })
    @property({ reflect: true, converter: localeConverter })
    public locale!: Locales;

    @property({type: String, reflect: true, attribute: "label"})
    public label?: string;

    @property({type: String, reflect: true, attribute: "author"})
    public author?: string;

    @property({type: String, reflect: true, attribute: "license"})
    public license?: string;

    @property({type: Boolean, converter: booleanConverter(false), attribute: "show-fullscreen"})
    public showFullscreen: boolean = false;

    firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        initLocalesInTopLevelElement(this);
    }

}
