import React, { useMemo } from "react";

import { ThermalRegistry } from "@labir/core";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryHistogramState } from "../../properties/states/useThermalRegistryHistogramState";
import { Orientation } from "../../utilities/orientation";

type RegistryHistogramProps = {
  orientation?: Orientation;
  registry: ThermalRegistry;
  sizeInPx?: number;
  borderColor?: React.CSSProperties["borderColor"];
  borderWidthInPx?: React.CSSProperties["borderWidth"];
  barBackground?: React.CSSProperties["backgroundColor"];
  background?: React.CSSProperties["backgroundColor"];
};

export const ThermalRegistryHistogram: React.FC<RegistryHistogramProps> = ({
  sizeInPx = 20,
  borderColor = "lightgray",
  borderWidthInPx = 1,
  barBackground = "black",
  background = "transparent",
  orientation = Orientation.HORIZONTAL,
  ...props
}) => {
  const purpose = useThermalObjectPurpose(props.registry, "thermalHistogram");

  const histogram = useThermalRegistryHistogramState(props.registry, purpose);

  const borderWidth = useMemo(() => `${borderWidthInPx}px`, [borderWidthInPx]);

  const border = useMemo(
    () => `${borderWidth} solid ${borderColor}`,
    [borderColor, borderWidth, histogram.value, histogram.resolution]
  );

  const mainCss: React.CSSProperties = useMemo(() => {
    const css: React.CSSProperties = {
      borderStyle: "solid",
      borderColor: borderColor,
      backgroundColor: background,
      display: "flex",
    };
    if (orientation === Orientation.HORIZONTAL) {
      css.width = "100%";
      css.marginBottom = "25px";
      css.borderRightWidth = 0;
      css.borderTopWidth = borderWidth;
      css.borderBottomWidth = borderWidth
      css.borderLeftWidth = borderWidth
    } else {
      css.borderBottomWidth = 0;
      css.borderLeftWidth = borderWidth;
      css.borderRightWidth = borderWidth;
      css.borderTopWidth = borderWidth;
      css.marginLeft = "100px";
      css.height = "100%";
      css.position = "absolute";
      css.flexDirection = "column";
    }
    return css;
  }, [borderColor, background, orientation, histogram.value, histogram.resolution]);

  const barCss = useMemo(() => {
    const css: React.CSSProperties = {
      position: "relative",
      boxSizing: "border-box",
      flexGrow: "1"
    };
    if (orientation === Orientation.HORIZONTAL) {
      css.height = `${sizeInPx}px`;
      css.width = `${100 / histogram.value.length}%`;
      css.borderRight = border;
    } else {
      css.width = `${sizeInPx}px`;
      css.height = `${100 / histogram.value.length}%`;
      css.borderBottom = border;
    }
    return css;
  }, [border, borderWidth, orientation, sizeInPx, histogram.value, histogram.resolution]);

  const valueCss = useMemo(() => {
    const css: React.CSSProperties = {
      position: "absolute",
      content: "",
      background: barBackground,
    };
    if (orientation === Orientation.HORIZONTAL) {
      css.bottom = "0px";
      css.left = "0px";
      css.width = "100%";
    } else {
      css.height = "100%";
      css.top = "0px";
      css.left = "0px";
    }
    return css;
  }, [orientation, barBackground, histogram.value, histogram.resolution]);

  return (
    <div style={mainCss}>
      {histogram.value &&
        histogram.value.map((entry) => {
          const height = `${entry.height}%`;

          const css = {
            ...valueCss,
          };
          if (orientation === Orientation.HORIZONTAL) {
            css.height = height;
          } else {
            css.width = height;
          }
          return (
            <div key={entry.from} style={barCss} data-height={entry.height} data-count={entry.count} data-percentage={entry.percentage}>
              <div style={css}></div>
            </div>
          );
        })}
    </div>
  );
};
