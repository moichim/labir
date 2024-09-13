
/**
 * Manage callbacks on optional property values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CallbacksManager<CallbackType extends (...args: any[]) => any> extends Map<string,CallbackType> {

    /** @deprecated use set method instead */
    add( key: string, callback: CallbackType ) {
        this.set(key, callback);
    }

    call( ...args: Parameters<CallbackType> ) {
        this.forEach( fn => fn( ...args ) );
    }

}