"use client";

import {
  Orientation,
  RangeHeadless,
  ThermalInstance,
  ThermalProvider,
  useThermalContext,
  useThermalGroupInstancesState,
} from "@labir/react-bridge";
import React, { useEffect } from "react";

export const Scale: React.FC = () => {
  const manager = useThermalContext();

  const registry = manager.addOrGetRegistry("registry_id");

  const group = registry.groups.addOrGetGroup("group_id");

  const instances = useThermalGroupInstancesState(group, "app");

  useEffect(() => {
    registry.loadOneFile(
      {
        thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc",
      },
      group.id
    );
  }, []);

  return (
    <ThermalProvider>
      <RangeHeadless
        registry={registry}
        step={0.1}
        renderSkeleton={() => <article>NAčítačka</article>}
        rangeOverride={undefined}
        histogramSizeInPx={80}
        histogramBorderWidthInPx={0}
        histogramBorderColor="lightgray"
        histogramBarBackground="black"
        histogramBackground="#ddd"
        // histogramBorderWidthInPx={0}
      />

      <RangeHeadless
        registry={registry}
        step={0.2}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
        orientation={Orientation.VERTICAL}
      />

      {instances.value.map((instance) => (
        <ThermalInstance key={instance.id} instance={instance} />
      ))}
    </ThermalProvider>
  );
};
