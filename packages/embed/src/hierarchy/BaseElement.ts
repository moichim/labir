import i18next from "i18next";
import { LitElement } from "lit";
import { state } from "lit/decorators.js";

import { v4 as uuid } from "uuid";

export abstract class BaseElement extends LitElement {

    private _UUID?: string

    public get UUID() {
        if ( this._UUID === undefined ) {
            this._UUID = uuid();
        }
        return this._UUID;
    };

    log( ...args: unknown[] ) {
        console.log( this.tagName, this.UUID.substring(0,5), ...args );
    }

    static shadowRootOptions: ShadowRootInit = {
        ...LitElement.shadowRootOptions,
        mode: "open"
    }

    @state()
    locale: string = i18next.language;

    connectedCallback(): void {
        super.connectedCallback();
        i18next.on("languageChanged", (locale) => {
            // this.requestUpdate();
            this.locale = locale;
        })
    }


}