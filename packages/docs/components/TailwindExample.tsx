import { ThermalOpacityInput } from "@labir/emotion";
import {
  ThermalInstance,
  ThermalProvider,
  useThermalGroupInstancesState,
  useThermalObjectPurpose,
  useThermalRegistry,
} from "@labir/react-bridge";
import { useEffect } from "react";
import {OpacityInput} from "@labir/tailwind"

export const TaildiwndExample: React.FC = () => {
  const registry = useThermalRegistry("first", { histogramResolution: 200 });

  const purpose = useThermalObjectPurpose(registry, "TailwindExample");

  const group = registry.groups.addOrGetGroup(
    "test",
    "testovací skupina",
    "popiska testovací skupiny"
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      registry.loadFiles({
        [group.id]: [
          { thermalUrl: "/tucnaci_04.lrc" },
          { thermalUrl: "/image-thermal 2021-11-24 11-18-20.lrc" },
          { thermalUrl: "/image-thermal 2024-01-12 14-09-37.lrc" },
          { thermalUrl: "/image-thermal 2024-01-24 10-05-03.lrc" },
          { thermalUrl: "/image-thermal 2024-01-26 10-12-52.lrc" },
          { thermalUrl: "/image-thermal 2024-02-12 10-15-07.lrc" },
        ],
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [registry, group]);

  const instances = useThermalGroupInstancesState(group, purpose);

  return (
    <div className="py-3">
      <ThermalProvider>
        <ThermalOpacityInput registry={registry} type="range"/>
        <OpacityInput registry={registry}/>
        {instances.value.map((instance) => (
          <ThermalInstance key={instance.id} instance={instance} />
        ))}
      </ThermalProvider>
    </div>
  );
};
