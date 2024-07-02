import * as workerpool from "workerpool"
import Pool from "workerpool/types/Pool";

export abstract class BaseStructureObject {

    private _pool?: Pool;

    /** 
     * Lazy loaded instance of web worker pool.
     * @see https://github.com/josdejong/workerpool
    */
    public get pool() {
        if ( ! this._pool )
            this._pool = workerpool.pool();
        return this._pool;
    }

}