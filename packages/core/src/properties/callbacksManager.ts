
/**
 * Manage callbacks on optional property values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CallbacksManager<CallbackType extends (...args: any[]) => any> extends Map<string,CallbackType> {

    /** An alternative to built-in `set` method enabling one-shot callbacks */
    add( 
        key: string, 
        callback: CallbackType, 
        oneShot: boolean = false
    ) {
        if ( oneShot ) {

            this.set(key, ((...args: Parameters<CallbackType>) => {
                callback(...args);
                this.delete(key);
            }) as CallbackType);

        } else {
            this.set(key, callback);
        }
    }

    call( ...args: Parameters<CallbackType> ) {
        this.forEach( fn => fn( ...args ) );
    }

}