"use client";

import Pool from "workerpool/types/Pool";
import pool from "../utils/time/pool";

export abstract class BaseStructureObject {

    public readonly pool: Pool = pool;

}