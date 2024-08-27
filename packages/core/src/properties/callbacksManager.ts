
/**
 * Manage callbacks on optional property values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CallbacksManager<CallbackType extends (...args: any[]) => any> {

    protected callbacks: Map<string,CallbackType> = new Map;

    constructor(
        // protected readonly timeline: TimelineDrive
    ) {

    }

    add( key: string, callback: CallbackType ) {
        this.callbacks.set( key, callback );
    }

    remove( key: string ) {
        this.callbacks.delete( key );
    }

    call( ...args: Parameters<CallbackType> ) {
        this.callbacks.forEach( fn => fn( ...args ) );
    }



}