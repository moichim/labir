import * as workerpool from "workerpool"

const pool = workerpool.pool({
    maxWorkers: 6,
});

export default pool;