import { consume } from "@lit/context";
import i18next, { t } from "i18next";
import { html, LitElement } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { v4 as uuid } from "uuid";
import { T } from "../translations/Languages";
import { localeContext } from "../translations/localeContext";

/** All the webcomponents of \@labirthermal/embed (and its extensions) should be based on the abstract class `AbstractThermalElement`. */
export abstract class AbstractThermalElement extends LitElement {

    declare public requestUpdate

    private _UUID?: string

    public get UUID() {
        if ( this._UUID === undefined ) {
            this._UUID = uuid();
        }
        return this._UUID;
    };

    public getUUID(
        msg: string
    ): string {
        return this.UUID + "_" + msg;
    }

    public log( ...args: unknown[] ) {
        console.log( this.tagName, this.UUID.substring(0,5), ...args );
    }

    static shadowRootOptions: ShadowRootInit = {
        ...LitElement.shadowRootOptions,
        mode: "open"
    }

    @consume({context: localeContext, subscribe: true})
    protected _locale?: string;

    /** Stable callback so the global language subscription can be removed on disconnect. */
    private readonly languageChanged = (locale: string): void => {
        this._locale = locale;
    };

    connectedCallback(): void {
        super.connectedCallback();
        this._locale = i18next.language;
        i18next.on("languageChanged", this.languageChanged);
    }

    disconnectedCallback(): void {
        i18next.off("languageChanged", this.languageChanged);
        super.disconnectedCallback();
    }

    protected i( str: string ): unknown {
        return html`${unsafeSVG( str )}`;
    }

    /** Returns a translated string */
    public t( key: keyof typeof T): string {
        return t( T[key] );
    }

    


}