import { useRanger } from "@tanstack/react-ranger";
import React, { useRef } from "react";
import { useThermalObjectPurpose } from "../../../context/useThermalObjectPurpose";
import { useThermalManagerPaletteDrive } from "../../../properties/drives/useThermalRegistryPaletteDrive";
import { Orientation } from "../../../utilities/orientation";
import { RegistryHistogram } from "../../histogram/registryHistogram";
import { RangeHeadlessInnerProps } from "../RangeHeadless";
import { RangerHandles } from "./rangerHandles";
import { RangerTick } from "./rangerTick";
import { RangerTrack } from "./rangerTrack";
import { useRangerTicks } from "./useRangerTicks";
import { useRangerValues } from "./useRangerValues";
import { RangerContainerInner } from "./RangerContainerInner";
import { RangerPalette } from "./rangerPalette";

type Props = RangeHeadlessInnerProps;

export const RangerHeadlessInner: React.FC<Props> = ({
  orientation = Orientation.HORIZONTAL,
  useHistogram = true,
  trackSizeInPx: trackHeightInPx = 20,

  trackBg = "#ddd",
  trackClass = undefined,

  handleBG = "black",
  handleColor = "white",

  histogramSizeInPx = 20,
  histogramBorderColor = "lightgray",
  histogramBorderWidthInPx = 1,
  histogramBarBackground = "black",
  histogramBackground = "white",

  ticksLabelColor = "black",
  ticksLineColor = "#ccc",

  ...props
}) => {
  const purpose = useThermalObjectPurpose(
    props.registry,
    "ThermalRangeHeadlessInner"
  );

  const rangerRef = useRef<HTMLDivElement>(null);

  const palette = useThermalManagerPaletteDrive(purpose);

  const rangerValue = useRangerValues(
    props.registry,
    props.isLocked,
    props.rangeOverride
  );

  const rangerTicks = useRangerTicks(
    rangerRef,
    rangerValue.minmax,
    orientation
  );

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    min: rangerValue.min,
    max: rangerValue.max,
    values: rangerValue.values,
    onChange: rangerValue.onChange,
    stepSize: props.step,
    ticks: rangerTicks,
    onDrag: rangerValue.onDrag,
  });

  return (
    <RangerContainerInner orientation={orientation}>
      {useHistogram && (
        <RegistryHistogram
          registry={props.registry}
          sizeInPx={histogramSizeInPx}
          borderColor={histogramBorderColor}
          borderWidthInPx={histogramBorderWidthInPx}
          barBackground={histogramBarBackground}
          background={histogramBackground}
          orientation={orientation}
        />
      )}

      <RangerTrack
        volumeInPx={trackHeightInPx}
        ref={rangerRef}
        aria-label="WTF!!"
        orientation={orientation}
        backgroundColor={trackBg}
        className={trackClass}
      >
        {rangerInstance.getTicks().map(({key, ...tick}) => (
          <RangerTick
            key={key}
            {...tick}
            orientation={orientation}
            trackSizeInPx={trackHeightInPx}
            tickLabelColor={ticksLabelColor}
            tickLineColor={ticksLineColor}
          />
        ))}

        {rangerInstance.sortedValues && (
          <RangerPalette
            palette={palette.palette}
            ranger={rangerInstance}
            values={rangerValue}
            orientation={orientation}
            volumeInPx={trackHeightInPx}
          />
        )}

        <RangerHandles
          ranger={rangerInstance}
          orientation={orientation}
          trackSizeInPx={trackHeightInPx}
          handleBackground={handleBG}
          handleColor={handleColor}
        />
      </RangerTrack>
    </RangerContainerInner>
  );
};
