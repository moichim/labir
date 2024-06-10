import { Input, InputProps } from "@headlessui/react";
import { ThermalRegistry } from "@labir/core";
import { useThermalObjectPurpose } from "../../context/useThermalObjectPurpose";
import { useThermalRegistryHistogramState } from "../../properties/states/useThermalRegistryHistogramState";
import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

type HistogramResolutionInputHeadlessProps = InputProps & {
  registry: ThermalRegistry;
};

export const HistogramResolutionInputHeadless: React.FC<
  HistogramResolutionInputHeadlessProps
> = ({ registry, min = 2, max = 200, type = "number", ...props }) => {
  const ID = useThermalObjectPurpose(
    registry,
    "RangeButtonAutoHeadless_" + uuid()
  );
  const histogram = useThermalRegistryHistogramState(registry, ID);

  const [internal, setInternal] = useState<number>(histogram.resolution);

  // Whenever the internal value changes, project it into histogram
  useEffect(() => {
    if (internal)
      if (internal >= 2 && internal <= 200) {
        if (internal !== histogram.resolution) {
          histogram.setResolution(Math.round(internal));
        }
      } else {
        setInternal(Math.min(Math.max(internal, 2), 200));
      }
  }, [internal, histogram.resolution, histogram.setResolution]);

  // Whenever the histogram recalculates, update the internal value
  useEffect(() => {
    if (internal !== histogram.resolution) {
      setInternal(histogram.resolution);
    }
  }, [histogram.value]);

  // On blur make sure the value is valid
  const onBlur = useCallback(() => {
    if (isNaN(internal)) {
      setInternal(histogram.resolution);
    } else if (internal < 2 || internal > 200) {
      setInternal(Math.min(Math.max(internal, 2), 200));
    }
  }, [internal, histogram.resolution]);

  // On every change update the internal value and eventually recalculate
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInternal(parseInt(event.target.value));
      setTimeout(histogram.recalculate, 0);
    },
    [histogram.recalculate]
  );

  return (
    <Input
      {...props}
      type={type}
      step={1}
      min={min}
      max={max}
      onChange={onChange}
      onBlur={onBlur}
      value={internal}
    />
  );
};
