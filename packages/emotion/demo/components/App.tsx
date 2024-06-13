import {
  Orientation,
  PaletteDropdownHeadless,
  ThermalDropin,
  ThermalInstance,
  ThermalRegistryHistogram,
  ThermalRegistryRange,
  useSingleFileRegistry,
  useThermalGroupInstancesState,
  useThermalRegistry,
  useThermalRegistryOpacityDrive,
  useThermalRegistryRangeDrive,
} from "@labir/react-bridge";
import { useEffect, useState } from "react";
import { Skin } from "../../src/theme/Skin";
import { ThermalRangeAutoButton } from "../../src/components/buttons/ThermalRangeAutoButton";
import { ThermalRangeFullButton } from "../../src/components/buttons/ThermalRangeFullButton";
import { ThermalOpacityInput } from "../../src/components/inputs/ThermalOpacityInput";
import { ThermalHistogramResolutionInput } from "../../src/components/inputs/ThermalHistogramResolutionInput";
import { PaletteDropdown } from "../../src/components/dropdowns/PaletteDropdown";
import { Bar } from "../../src";
import { DownloadDropdown } from "../../src/components/dropdowns/DownloadDropdown";

function App() {
  const [count, setCount] = useState(0);

  const [singleUrl, setSingleUrl] = useState<string>("/tucnaci_04.lrc");
  const single = useSingleFileRegistry(singleUrl);

  const registry = useThermalRegistry("first", { histogramResolution: 200 });
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

  registry.loading.addListener("spy", console.log);

  const opacity = useThermalRegistryOpacityDrive(registry, "spy");
  registry.opacity.addListener("spie", console.log);

  const range = useThermalRegistryRangeDrive(registry, "app");

  const instances = useThermalGroupInstancesState(group, "app");

  const dropinRegistry = useThermalRegistry("dropin", {
    histogramResolution: 200,
  });

  return (
    <>
      <ThermalRangeAutoButton registry={registry} />

      <ThermalRegistryRange
        registry={dropinRegistry}
        step={1}
        renderSkeleton={() => <article>Načítačka</article>}
      />

      <ThermalDropin registry={dropinRegistry} groupId={"zkušební dropin"} />

        <Bar
          name="Jméno"
          secondRow={
            <ThermalRegistryRange
              registry={registry}
              step={0.1}
              renderSkeleton={() => <article>NAčítačka</article>}
              rangeOverride={undefined}
              handleColor={Skin.colorValue("gray", 100)}
              handleBG={Skin.colorValue("primary", 700)}
              ticksLabelColor={Skin.colorValue("gray", 500)}
              ticksLineColor={Skin.colorValue("gray", 300)}
              histogramSizeInPx={40}
              trackBg={Skin.colorValue("gray", 200)}
              histogramBorderColor={Skin.colorValue("gray", 200)}
              histogramBarBackground={Skin.colorValue("primary", 500)}
              histogramBackground={Skin.colorValue("gray", 50)}
              // histogramBorderWidthInPx={0}
            />
          }
        >
          <PaletteDropdown />

          <ThermalRangeAutoButton
            registry={registry}
          />
          <ThermalRangeFullButton registry={registry} />
        </Bar>
      {instances.value.map((instance) => {
        return (
          <div className="instance!!!" key={instance.id}>
            <DownloadDropdown instance={instance} />
            <ThermalInstance
              instance={instance}
              onClick={(event, instance) => {
                console.log("Pohnul jsem se", event, instance);
              }}
            ></ThermalInstance>
          </div>
        );
      })}

      <article>{range.value?.from}</article>
      <h1>Vite + React</h1>
      {opacity.value}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        <div>{registry.loading.value ? "Načítám" : "NAčetl jsem"}</div>
      </div>
    </>
  );
}

export default App;
