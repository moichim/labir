import { LitElement } from "lit";

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


}