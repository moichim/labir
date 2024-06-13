import {
  Bar,
  DownloadDropdown,
  PaletteDropdown,
  ThermalRangeAutoButton,
  ThermalRangeFullButton,
} from "@labir/emotion";
import {
  ThermalInstance,
  ThermalRegistryRange,
  useThermalContext,
  useThermalGroupInstancesState,
} from "@labir/react-bridge";
import React, { useEffect } from "react";

type ThermalFileComponentProps = {
  url: string;
};

export const ThermalFile: React.FC<ThermalFileComponentProps> = (props) => {
  const manager = useThermalContext();

  const registry = manager.addOrGetRegistry("default", {
    histogramResolution: 200,
  });
  const group = registry.groups.addOrGetGroup("default");
  const instances = useThermalGroupInstancesState(group, "default");

  useEffect(() => {
    registry.loadOneFile({ thermalUrl: props.url }, group.id);
  }, [props.url]);

  return (
    <>
      {instances.value.map((instance) => (
        <div key={instance.id}>
          <Bar
            secondRow={<ThermalRegistryRange registry={registry} step={0.1} />}
          >
            <DownloadDropdown instance={instance} />
            <PaletteDropdown />
            <ThermalRangeAutoButton registry={registry} />
            <ThermalRangeFullButton registry={registry} />
          </Bar>

          <ThermalInstance instance={instance} />
        </div>
      ))}
    </>
  );
};
