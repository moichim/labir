import { provide } from "@lit/context";
import { property } from "lit/decorators.js";
import { AbstractThermalElement } from "../index.export";
import { ConfigController } from "../hierarchy/controllers/ConfigController";
import { localeContext, localeConverter, Locales } from "../translations/localeContext";
import { booleanConverter } from "../utils/converters/booleanConverter";

export abstract class AbstractApp extends AbstractThermalElement {

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
}
