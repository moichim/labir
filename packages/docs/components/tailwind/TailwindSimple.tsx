"use client";

import {
  ThermalInstance,
  ThermalRegistryRange,
  useSingleFileRegistry,
} from "@labir/react-bridge";
import { PaletteDropdown } from "@labir/tailwind";
import { NextUIProvider } from "@nextui-org/react";

const TailwindExample: React.FC = () => {
  const { registry, instance } = useSingleFileRegistry("/tucnaci_04.lrc");

  return (
    <div className="py-3 w-full">
      <NextUIProvider>
        <div className="flex flex-wrap p-3 bg-slate-100 rounded-xl gap-2">
          <div className="flex flex-col gap-3">
            <PaletteDropdown
              triggerButtonProps={{ color: "default", variant: "bordered" }}
            />
          </div>

          <div className="grow">
            <ThermalRegistryRange registry={registry} step={0.01} />
          </div>
        </div>

        <div className="py-3">
          {instance && <ThermalInstance instance={instance} />}
        </div>
      </NextUIProvider>
    </div>
  );
};

export default TailwindExample