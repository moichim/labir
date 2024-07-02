"use client";

import * as workerpool from "workerpool"
import Pool from "workerpool/types/Pool";

export abstract class BaseStructureObject {

    private _pool?: Pool;

    /** 
     * Lazy loaded instance of web worker pool.
     * @see https://github.com/josdejong/workerpool
    */
    public get pool() {
        if ( ! this._pool ) {
            this._pool = workerpool.pool({
                workerType: "web"
            });
        }
        console.log("maximal number of workers", workerpool )
        return this._pool;
    }

}