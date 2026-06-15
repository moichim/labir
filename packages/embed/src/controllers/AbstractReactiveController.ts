import { ReactiveController } from "lit";
import { IBaseElement } from "./IBaseElement";

export abstract class AbstractReactiveController<T extends IBaseElement> implements ReactiveController {

    host: T;

    constructor( host: T ) {
        this.host = host;
        host.addController(this);
    }

    abstract hostConnected(): void;
    
    abstract hostDisconnected(): void;

    /** Logs anything using the host's logging mechanism. Adds the controller's className as the first argument. */
    protected log(...args: any[]): void {
        this.host.log( 
            this.constructor.name, 
            ...args 
        );
    }

}