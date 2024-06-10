"use client";

import { HistogramResolutionInputHeadless, OpacityInputHeadless, Orientation, PaletteDropdownHeadless, RangeButtonAutoHeadless, RangeButtonFullHeadless, RangeHeadless, ThermalInstance, useThermalContext, useThermalGroupInstancesState } from "@labir/react-bridge";
import React, { useEffect } from "react";

export const App: React.FC = () => {
  const manager = useThermalContext();

  const registry = manager.addOrGetRegistry("registry_id");

  const group = registry.groups.addOrGetGroup("group_id");

  const instances = useThermalGroupInstancesState(group, "app");

  useEffect(() => {

    registry.loadFiles({
      [group.id]: [
        {thermalUrl: "/image-thermal 2021-11-24 11-18-20.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 14-09-37.lrc"},
        {thermalUrl: "/image-thermal 2024-01-24 10-05-03.lrc"},
        {thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc"},
        {thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc"},
        {thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc"},
        {thermalUrl: "/06__6V_4A__top_IR.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},

        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-47.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-55.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-34.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-43.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-49.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-05-56.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-05-59.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-06-03.lrc"},
        {thermalUrl: "/image-thermal 2024-02-09 11-59-37.lrc"},
        {thermalUrl: "/image-thermal 2024-03-11 11-06-10.lrc"},
        {thermalUrl: "/image-thermal 2024-03-19 09-44-13.lrc"},
        {thermalUrl: "/image-thermal 2024-04-16 12-27-50.lrc"},
        {thermalUrl: "/image-thermal 2024-04-22 14-05-42.lrc"},
        {thermalUrl: "/image-thermal 2024-04-30 10-50-19.lrc"},
        {thermalUrl: "/image-thermal 2024-04-30 10-57-59.lrc"},
        {thermalUrl: "/image-thermal 2024-05-06 12-15-49.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},

        {thermalUrl: "/image-thermal 2021-11-24 11-18-20.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 14-09-37.lrc"},
        {thermalUrl: "/image-thermal 2024-01-24 10-05-03.lrc"},
        {thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc"},
        {thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc"},
        {thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc"},
        {thermalUrl: "/06__6V_4A__top_IR.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-47.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-55.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-34.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-43.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-49.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-05-56.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-05-59.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-06-03.lrc"},
        {thermalUrl: "/image-thermal 2024-02-09 11-59-37.lrc"},
        {thermalUrl: "/image-thermal 2024-03-11 11-06-10.lrc"},
        {thermalUrl: "/image-thermal 2024-03-19 09-44-13.lrc"},
        {thermalUrl: "/image-thermal 2024-04-16 12-27-50.lrc"},
        {thermalUrl: "/image-thermal 2024-04-22 14-05-42.lrc"},
        {thermalUrl: "/image-thermal 2024-04-30 10-50-19.lrc"},
        {thermalUrl: "/image-thermal 2024-04-30 10-57-59.lrc"},
        {thermalUrl: "/image-thermal 2024-05-06 12-15-49.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},


        {thermalUrl: "/image-thermal 2021-11-24 11-18-20.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 14-09-37.lrc"},
        {thermalUrl: "/image-thermal 2024-01-24 10-05-03.lrc"},
        {thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc"},
        {thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc"},
        {thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc"},
        {thermalUrl: "/06__6V_4A__top_IR.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-47.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-55.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-34.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-43.lrc"},
        {thermalUrl: "/image-thermal 2024-01-12 10-10-49.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-05-56.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-05-59.lrc"},
        {thermalUrl: "/image-thermal 2024-01-17 14-06-03.lrc"},
        {thermalUrl: "/image-thermal 2024-02-09 11-59-37.lrc"},
        {thermalUrl: "/image-thermal 2024-03-11 11-06-10.lrc"},
        {thermalUrl: "/image-thermal 2024-03-19 09-44-13.lrc"},
        {thermalUrl: "/image-thermal 2024-04-16 12-27-50.lrc"},
        {thermalUrl: "/image-thermal 2024-04-22 14-05-42.lrc"},
        {thermalUrl: "/image-thermal 2024-04-30 10-50-19.lrc"},
        {thermalUrl: "/image-thermal 2024-04-30 10-57-59.lrc"},
        {thermalUrl: "/image-thermal 2024-05-06 12-15-49.lrc"},
        {thermalUrl: "/image-thermal 2023-11-24 14-02-33.lrc"},
      ]
    });

  }, []);

  return (
    <div>

      <PaletteDropdownHeadless />

      <OpacityInputHeadless registry={registry} />
      <RangeButtonFullHeadless registry={registry}></RangeButtonFullHeadless>
      <RangeButtonAutoHeadless registry={registry}/>
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionInputHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionInputHeadless registry={registry} type="range"/>

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

      {instances.value.map( instance => <div key={instance.id} style={{width: "25%", display: "inline-block"}}><ThermalInstance key={instance.id} instance={instance}/></div> )}

      <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Vertical scale</h2>

      <RangeHeadless
        registry={registry}
        step={0.2}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
        orientation={Orientation.VERTICAL}
      />

      <h2 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">Colorised scale</h2>


      <RangeHeadless
        registry={registry}
        step={1}
        renderSkeleton={() => <article>NAčítačka</article>}
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
