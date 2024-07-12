import * as workerpool from "workerpool"

const pool = workerpool.pool({
    maxWorkers: 8,
    onTerminateWorker: what => console.log( what )
});

export default pool;