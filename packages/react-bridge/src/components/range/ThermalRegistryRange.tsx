import React, { useMemo } from "react";
import { ThermalRangeOrUndefined, ThermalRegistry } from "@labir/core";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryRangeDrive } from "../../properties/drives/useThermalRegistryRangeDrive";
import { useThermalRegistryLoadingState } from "../../properties/states/useThermalRegistryLoadingState";
import { useThermalRegistryMinmaxState } from "../../properties/states/useThermalRegistryMinmaxState";
import { RangeHeadlessSkeleton } from "./RangeHeadlessSkeleton";
import { RangerHeadlessContainer } from "./RangerHeadlessContainer";
import { Orientation } from "../../utilities/orientation";
import { RangerHeadlessInner } from "./inner/rangerHeadlessInner";

export type RangePropsExposed = {
  registry: ThermalRegistry;
  step: number;
  isLocked?: boolean;
  rangeOverride?: ThermalRangeOrUndefined;
  orientation?: Orientation,
  useHistogram?: boolean,
  trackSizeInPx?: number,

  trackBg?: React.CSSProperties["backgroundColor"],

  ticksLineColor?: React.CSSProperties["backgroundColor"],
  ticksLabelColor?: React.CSSProperties["color"],

  handleBG?: React.CSSProperties["backgroundColor"],
  handleColor?: React.CSSProperties["color"],
  histogramSizeInPx?: number,
  
  histogramBackground?: React.CSSProperties["backgroundColor"],
  histogramBorderColor?: React.CSSProperties["borderColor"],
  histogramBorderWidthInPx?: number,
  histogramBarBackground?: React.CSSProperties["backgroundColor"],
  
  /** @deprecated preferrably do not use classes */
  histogramClass?: string,
  /** @deprecated preferrably do not use classes */
  histogramBarClass?: string,
  /** @deprecated preferrably do not use classes */
  trackClass?: string,
  /** @deprecated preferrably do not use classes */
  containerClass?: string
};

export type RangeHeadlessInnerProps = RangePropsExposed;

type ThermalRangeProps = RangeHeadlessInnerProps & {
  renderContainer?: React.FC<React.PropsWithChildren>;
  renderSkeleton?: React.FC;
};

export const ThermalRegistryRange: React.FC<ThermalRangeProps> = ({
  renderSkeleton = RangeHeadlessSkeleton,
  renderContainer = RangerHeadlessContainer,
  isLocked = false,
  rangeOverride = undefined,
  orientation = Orientation.HORIZONTAL,
  useHistogram = true,
  trackSizeInPx: trackHeightInPx = 20,
  ...props
}) => {
  const purpose = useThermalObjectPurpose(props.registry, "headless-slider");
  const minmax = useThermalRegistryMinmaxState(props.registry, purpose);
  const { value: loading } = useThermalRegistryLoadingState(
    props.registry,
    purpose
  );
  const range = useThermalRegistryRangeDrive(props.registry, purpose);

  const isReady = useMemo(() => {
    return (
      minmax.value !== undefined &&
      range.value !== undefined &&
      loading === false
    );
  }, [minmax, loading]);

  const Skeleton = renderSkeleton;
  const Container = renderContainer;

  return (
    <Container>
      {isReady === false && <Skeleton />}
      {isReady === true && (
        <RangerHeadlessInner
          isLocked={isLocked}
          rangeOverride={rangeOverride}
          useHistogram={useHistogram}
          {...props}
          orientation={orientation}
          trackSizeInPx={trackHeightInPx}
        />
      )}
    </Container>
  );
};
