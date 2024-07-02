"use client";

import classNames from "classnames";
import React, { forwardRef, useMemo } from "react";
import { Orientation } from "../../../utilities/orientation";

type RangerTrackProps = HTMLDivElement &
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  React.PropsWithChildren<any> &
  React.PropsWithRef<HTMLDivElement> & {
    orientation?: Orientation;
    backgroundColor?: React.CSSProperties["backgroundColor"];
    className?: string;
    volumeInPx?: number;
  };

export const RangerTrack: React.FC<RangerTrackProps> = forwardRef<
  HTMLDivElement,
  RangerTrackProps
>(
  (
    {
      orientation = Orientation.HORIZONTAL,
      className,
      backgroundColor = "#ddd",
      volumeInPx = 20,
      ...props
    },
    ref
  ) => {
    const styles: React.CSSProperties = useMemo(() => {
      const css: React.CSSProperties = {
        position: "relative",
        userSelect: "none",
        background: backgroundColor,
      };

      if (orientation === Orientation.HORIZONTAL) {
        css.height = `${volumeInPx}px`;
        css.width = "100%";
        css.marginBottom = "30px";
      } else {
        css.width = `${volumeInPx}px`;
        css.height = "100%";
        css.marginRight = "50px";
      }
      return css;
    }, [backgroundColor, orientation, volumeInPx]);

    // Classes are combined and memoised
    const classes = useMemo(
      () =>
        classNames(
          "lrc__ranger-track",
          `lrc__ranger-track__${orientation}`,
          className
        ),
      [className, orientation]
    );

    return (
      <div ref={ref} className={classes} style={styles} {...props}>
        {props.children}
      </div>
    );
  }
);
