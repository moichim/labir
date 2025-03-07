"use client";

import {
  ThermalInstance,
  ThermalRegistryRange,
  useSingleFileRegistry
} from "@labir/react-bridge";
import React from "react";

export const HomepageIntro: React.FC = () => {
  const tucnaci = useSingleFileRegistry("/tucnaci_04.lrc");

  return (
    <div style={{padding: "1rem 0"}}>

      {tucnaci.instance && <ThermalInstance instance={tucnaci.instance} /> }

      <br />

      <ThermalRegistryRange
        registry={tucnaci.registry}
        step={0.1}
        renderSkeleton={() => <article>Načítám data</article>}
        rangeOverride={undefined}
        histogramSizeInPx={60}
        histogramBorderWidthInPx={0}
        histogramBorderColor="lightgray"
        histogramBarBackground="black"
        histogramBackground="#ddd"
        // histogramBorderWidthInPx={0}
      />
    </div>
  );
};
