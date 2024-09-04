import { consume } from "@lit/context";
import { nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { fileMsContext } from "../../../hierarchy/providers/context/FileContexts";
import { msToTime, timeToMs } from "./utils";

const converter = {
    fromAttribute: ( value: string|null ) => {
        if (value === null)
            return null;
        return timeToMs( value );
    },
    toAttribute: ( value: number|null ) => {
        if ( value === null )
            return null;
        return msToTime( value );
    }
}


@customElement("file-marker")
export class FileMarker extends FileConsumer {
    public onInstanceCreated(): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    @consume({context: fileMsContext, subscribe: true})
    @state()
    protected ms: number = 0;

    @property({type: String, reflect: true, attribute: true, converter})
    public start!: number;

    @property( {type: String, reflect: true, attribute: true, converter} )
    public end?: number;

    @property({type: String, reflect: true, attribute: true, converter})
    public dur?: number;

    @state()
    protected active: boolean = false;


    public get fromMs() {
        return this.start;
    }

    public get endMs() {
        if ( this.end !== undefined ) {
            return this.end;
        } else if ( this.dur !== undefined ) {
            return this.fromMs + this.dur;
        } else {
            return this.fromMs + 300;
        }
    }


    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate( _changedProperties );

        if ( _changedProperties.has( "ms" ) ) {

            if ( this.fromMs <= this.ms && this.endMs >= this.ms ) {
                if ( this.active === false ) {
                    this.active = true;
                }
            } else {
                if ( this.active === true ) {
                    this.active = false;
                }
            }
        }
    }


    protected render(): unknown {

        return nothing;
    }

}