"use client";

import { useRef } from "react";
import * as workerpool from "workerpool";
import { Pool } from "workerpool";

const ComponentWithPool: React.FC<React.PropsWithChildren> = ({children}) => {

    const pool = useRef<Pool>( workerpool.pool() );

    return <div>{children}</div>
}

export default ComponentWithPool;