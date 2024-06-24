"use client";

import {
  Orientation,
  ThermalRegistryRange,
  useThermalContext,
  useThermalGroupInstancesState,
} from "@labir/react-bridge";
import React, { useEffect } from "react";

export const Range: React.FC = () => {
  const manager = useThermalContext();

  const registry = manager.addOrGetRegistry("registry_id");

  const group = registry.groups.addOrGetGroup("group_id");

  const instances = useThermalGroupInstancesState(group, "app");

  useEffect(() => {
    registry.loadFiles({
      [group.id]: [{ thermalUrl: "/image-thermal 2021-11-24 11-18-20.lrc" }],
    });
  }, []);

  return (
    <div style={{ padding: "1rem 0" }}>
      <ThermalRegistryRange
        registry={registry}
        step={0.1}
        rangeOverride={undefined}
        histogramSizeInPx={80}
        histogramBorderWidthInPx={0}
        histogramBorderColor="lightgray"
        histogramBarBackground="black"
        histogramBackground="#ddd"
        // histogramBorderWidthInPx={0}
      />

      <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
        Vertical scale
      </h2>

      <ThermalRegistryRange
        registry={registry}
        step={0.2}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
        orientation={Orientation.VERTICAL}
      />

      <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
        Styled scale
      </h2>

      <ThermalRegistryRange
        registry={registry}
        step={1}
        trackSizeInPx={50}
        histogramSizeInPx={200}
        handleBG="blue"
        handleColor="yellow"
        ticksLabelColor="green"
        ticksLineColor="blue"
        histogramBackground="lightgray"
        histogramBorderColor="white"
        histogramBarBackground="blue"
      />
    </div>
  );
};
