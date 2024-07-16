"use client";

import { RefObject, useLayoutEffect, useState } from "react";

export const useDimensions = (
    ref: RefObject<HTMLElement>
) => {
    const [dimensions, setDimensions] = useState<undefined|{x:number,y:number,width:number,height:number}>(undefined);
    useLayoutEffect(()=>{
        setDimensions( ref.current?.getBoundingClientRect().toJSON() );
    },[ref.current]);
    return dimensions;
}