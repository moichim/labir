import { RefObject, useEffect, useState } from "react";

export const useWidth = (
    ref: RefObject<HTMLElement>
) => {
    const [width, setWidth] = useState<number>();

    useEffect(() => {

        const observer = new ResizeObserver(entries => {
            const [entry] = entries;
            setWidth(entry.contentRect.width);
        });

        if (ref.current !== null) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }

    }, [ref]);

    return width;
}