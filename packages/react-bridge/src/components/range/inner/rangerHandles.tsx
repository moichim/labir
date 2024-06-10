import { Ranger } from "@tanstack/react-ranger";
import React from "react";
import { Orientation } from "../../../utilities/orientation";

type RangerHandlesProps = {
  ranger: Ranger<HTMLDivElement>;
  orientation: Orientation;
  trackSizeInPx?: number;
  handleColor?: React.CSSProperties["color"]
  handleBackground?: React.CSSProperties["backgroundColor"]
};

export const RangerHandles: React.FC<RangerHandlesProps> = ({
  trackSizeInPx = 20,
  handleColor = "white",
  handleBackground = "black",
  ...props
}) => {
  return (
    <>
      {props.ranger
        .handles()
        .map(
          (
            {
              value,
              onKeyDownHandler,
              onMouseDownHandler,
              onTouchStart
            },
            index
          ) => {
            const css: React.CSSProperties = {
              position: "absolute",
              cursor: "pointer",
              border: 0,
              background: "transparent",
              fontSize: "12px",
            };

            const innerCss: React.CSSProperties = {
              position: "absolute",
              background: handleBackground,
              color: handleColor,
              width: "40px",
              fontSize: "12px",
            };

            const arrowCss: React.CSSProperties = {
              position: "absolute",
              width: 10,
              height: 10,
              transform: "rotate(40deg)",
              background: handleBackground
            };

            if (props.orientation === Orientation.HORIZONTAL) {
              css.top = "0%";
              css.left = `${props.ranger.getPercentageForValue(value)}%`;

              innerCss.left = "-20px";
              innerCss.top = `${trackSizeInPx + 5}px`;
              innerCss.textAlign = "center";

              arrowCss.top = -3;
              arrowCss.left = "40%";
            } else {
              css.left = "0%";
              css.top = `${props.ranger.getPercentageForValue(value)}%`;

              innerCss.left = `${trackSizeInPx + 5}px`;
              innerCss.marginTop = "-10px";

              arrowCss.left = -3;
              arrowCss.top = 4;
            }

            return (
              <button
                key={index}
                role="slider"
                aria-valuemin={props.ranger.options.min}
                aria-valuemax={props.ranger.options.max}
                aria-valuenow={value}
                onKeyDown={onKeyDownHandler}
                onMouseDown={onMouseDownHandler}
                onTouchStart={onTouchStart}
                style={css}
              >
                <div className="track" style={innerCss}>
                  <div style={arrowCss}></div>
                  <div
                    style={{
                      backgroundColor: handleBackground,
                      color: handleColor,
                      width: "100%",
                      //height: `15px`,
                      position: "absolute",
                      padding: "2px",
                      textAlign: "center",
                    }}
                  >
                    {value.toFixed(2)}
                  </div>
                </div>
              </button>
            );
          }
        )}
    </>
  );
};
