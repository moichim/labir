import { LitElement } from "lit";
import pjson from "../../../package.json";

/** A base for all elements in the structure. They should all generate their IDs automatically. */
export abstract class AbstractStructureElement extends LitElement {

    /** Get the class name for the purpose of the ID */
    protected abstract getClassName(): string;

    /** A unique string identifying the instance. @todo implem,ent uuid */
    protected hash = ( Math.random() * 10000 ).toFixed( 0 );

    /** Unique ID of the component generated from its class name */
    public readonly identificator: string;

    constructor() {
        
        super();

        // Generate the ID
        this.identificator = [
            this.getClassName(),
            pjson.version,
            this.hash
        ].join(  "__" );

    }

    log( ...args: unknown[] ) {
        console.log( this.identificator, ...args );
    }

}