// import * as workerpool from "workerpool"

const workerpool = await import( "workerpool" );

const pool = workerpool.pool({
    maxWorkers: 6,
});

export default pool;