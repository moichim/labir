"use client";

import {
  ThermalInstance,
  ThermalRegistryRange,
  useFilesInGroup,
} from "@labir/react-bridge";
import { HistogramResolutionInput, PaletteDropdown } from "@labir/tailwind";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export const TaildiwndExample: React.FC = () => {
  const { registry, instances } = useFilesInGroup(
    [
      "/image-thermal 2023-11-24 14-02-33.lrc",
      "/image-thermal 2023-11-24 14-02-47.lrc",
      "/image-thermal 2024-01-17 14-05-59.lrc",
      "/image-thermal 2024-01-12 10-10-43.lrc",
      "/image-thermal 2024-01-17 14-05-56.lrc",
      "/image-thermal 2024-01-26 10-12-52.lrc",
      "/image-thermal 2024-02-12 10-15-07.lrc",
      "/image-thermal 2024-02-09 11-59-37.lrc",
    ],
    "some_registry",
    "some_group"
  );

  return (
    <div className="py-3 w-full">
      <NextUIProvider>
        <div className="flex flex-wrap p-3 bg-slate-100 rounded-xl">
          <div className="w-full lg:w-1/2 flex flex-wrap items-center">
            <div className="flex flex-wrap">
              {instances.value &&
                instances.value.map((instance) => (
                  <div key={instance.id} className="w-full md:w-1/2 lg:w-1/3">
                    <ThermalInstance instance={instance} />
                  </div>
                ))}
            </div>
            <PaletteDropdown
              triggerButtonProps={{ color: "default", variant: "bordered" }}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <HistogramResolutionInput
              registry={registry}
              label="Histogram resolution"
            />
            <ThermalRegistryRange
              registry={registry}
              step={0.01}
              histogramSizeInPx={300}
              histogramBorderWidthInPx={0}
            />
          </div>
        </div>
      </NextUIProvider>
    </div>
  );
};
