import { MouseEventHandler, useMemo, useRef, useState } from "react";
import { useWidth } from "../../utilities/useWidth";
import { RectAnalysisCorner } from "./rectAnalysisCorner";

type RectAnalysisProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  name: React.ReactNode;
};

export const RectAnalysis: React.FC<RectAnalysisProps> = (props) => {
  const ref = useRef<HTMLDivElement>();
  const width = useWidth(ref);
  const strokeWidth = useMemo(() => 80 / width, [width]);
  const squareSize = useMemo(() => strokeWidth * 10, [strokeWidth]);

  const [xPosition, setXPosition] = useState<number>(props.x);
  const [yPosition, setYPosition] = useState<number>(props.y);
  const [wDimension] = useState<number>(props.w);
  const [hDimension] = useState<number>( props.h );

  const [cursorX, setCursorX ] = useState<number>();
  const [cursorY, setCursorY] = useState<number>();

  const onMouseMove: MouseEventHandler<HTMLDivElement> = ( event ) => {
    const div = event.target as HTMLDivElement;
    const rect = div.getBoundingClientRect();
    const x = ( event.clientX - rect.left ) / width * 100;
    const y = ( event.clientY - rect.top ) / width * 100;
    setCursorX( x )
    setCursorY( y );
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" pointerEvents={"fill"}>
        <rect
          x={xPosition}
          width={props.w}
          y={yPosition}
          height={props.h}
          fill="transparent"
          stroke={"black"}
          strokeWidth={strokeWidth}
          onMouseEnter={console.log}
          onMouseLeave={console.log}
        ></rect>
        <RectAnalysisCorner 
            xPercent={xPosition}
            yPercent={yPosition}
            size={squareSize}
            stroke={strokeWidth}
            color="blue"
            cursorX={cursorX}
            cursorY={cursorY}
            onDrag={(x,y)=>{
                setXPosition(x);
                setYPosition(y);
            }}
        />
        <RectAnalysisCorner 
            xPercent={xPosition + wDimension}
            yPercent={yPosition}
            size={squareSize}
            stroke={strokeWidth}
            color="blue"
        />
        <RectAnalysisCorner 
            xPercent={xPosition}
            yPercent={yPosition + hDimension}
            size={squareSize}
            stroke={strokeWidth}
            color="blue"
        />
        <RectAnalysisCorner 
            xPercent={xPosition + wDimension}
            yPercent={yPosition + hDimension}
            size={squareSize}
            stroke={strokeWidth}
            color="blue"
        />
        <RectAnalysisCorner 
            xPercent={xPosition + wDimension/ 2}
            yPercent={yPosition + hDimension / 2}
            size={squareSize}
            stroke={strokeWidth}
            color="blue"
        />
      </svg>
    </div>
  );
};
