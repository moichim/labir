import { LitElement } from "lit";

import { v4 as uuid} from "uuid";

export abstract class BaseElement extends LitElement {

    public readonly UUID = uuid();

    log( ...args: unknown[] ) {
        console.log( this.tagName, this.UUID.substring(0,5), ...args );
    }

    static shadowRootOptions: ShadowRootInit = {
        ...LitElement.shadowRootOptions,
        mode: "open"
    }

}