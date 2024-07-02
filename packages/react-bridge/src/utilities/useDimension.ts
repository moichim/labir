"use client";

import { RefObject, useEffect, useState } from "react";
import { Orientation } from "./orientation";

export const useDimension = (
    ref: RefObject<HTMLElement>,
    orientation: Orientation
) => {


    const [dimension, setDimension] = useState<number>();

    useEffect(() => {

        const property = orientation === Orientation.HORIZONTAL
            ? "width"
            : "height";

        const observer = new ResizeObserver(entries => {
            const [entry] = entries;
            setDimension(entry.contentRect[property]);
        });

        if (ref.current !== null) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }

    }, [ref, orientation]);

    return dimension;

}