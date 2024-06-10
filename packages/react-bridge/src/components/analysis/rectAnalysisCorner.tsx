import React, { MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";

type RectAnalysisCorner = {
    xPercent: number,
    yPercent: number,
    size: number,
    stroke: number,
    color: React.CSSProperties["color"],
    cursorX?: number,
    cursorY?: number,
    onDrag?: ( x: number, y: number ) => void
}

export const RectAnalysisCorner: React.FC<RectAnalysisCorner> = props => {

    const ref = useRef<SVGRectElement>();

    const [hover, setHover] = useState( false );
    const [dragging, setDragging] = useState( false );

    const x = `calc( ${props.xPercent}% - ${props.size/2}px)`;
    const y = `calc( ${props.yPercent}% - ${props.size/2}px)`;
    const size = useMemo( () => {
        if ( hover ) return `${props.size * 1.3}px`
        return `${props.size}px` 
    }, [hover, props.size]);

    const color = useMemo( () => {
        return hover ? "yellow" : props.color;
    }, [hover, props.color] );

    const onMouseDown: MouseEventHandler<SVGRectElement> = () => {
        if (dragging === false) setDragging( true );
    }

    const onMouseUp: MouseEventHandler<SVGRectElement> = () => {
        if ( dragging === true ) setDragging( false );
    }

    useEffect( () => {
        console.log( dragging );
    }, [dragging] );


    useEffect( () => {

        if ( dragging ) {
            props.onDrag( props.cursorX, props.cursorY );
        }

    }, [props.cursorX, props.cursorY] );


    return <rect 
        ref={ref}
        x={x}
        y={y}
        width={size}
        height={size}
        fill={color}
        strokeWidth={props.stroke}
        stroke={"black"}
        
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}

        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onBlur={() => setHover(false)}
        onDrag={console.log}
        style={{
            // transition: "all .3s ease-in-out"
        }}
    />
}