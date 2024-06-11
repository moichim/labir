import { useEffect, useState } from "react";
import {
  useThermalGroupInstancesState,
  useThermalRegistryRangeDrive,
} from "../../src";
import { ThermalDropin } from "../../src/components/dropin/ThermalDropin";
import { ThermalRegistryHistogram } from "../../src/components/histogram/thermalRegistryHistogram";
import { HistogramResolutionInputHeadless } from "../../src/components/histogramResolutionInput/histogramResolutionInputHeadless";
import { ThermalInstance } from "../../src/components/instance/thermalInstance";
import { OpacityInputHeadless } from "../../src/components/opacity/opacityInputHeadless";
import { PaletteDropdownHeadless } from "../../src/components/palette/PaletteDropdownHeadless";
import { ThermalRegistryRange } from "../../src/components/range/ThermalRegistryRange";
import { RangeButtonAutoHeadless } from "../../src/components/rangeButtonAuto.tsx/rangeButtonAutoHeadless";
import { RangeButtonFullHeadless } from "../../src/components/rangeButtonFull/rangeButtonFullHeadless";
import { useThermalRegistry } from "../../src/context/useThermalRegistry";
import { useThermalRegistryOpacityDrive } from "../../src/properties/drives/useThermalRegistryOpacityDrive";
import { useSingleFileRegistry } from "../../src/shorthands/useSingleFileRegistry";
import { Orientation } from "../../src/utilities/orientation";

function App() {
  const [count, setCount] = useState(0);

  const [ singleUrl, setSingleUrl ] = useState<string>("/tucnaci_04.lrc");
  const single = useSingleFileRegistry( singleUrl );

  const registry = useThermalRegistry("first", { histogramResolution: 100 });
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

  const dropinRegistry = useThermalRegistry( "dropin", {
    histogramResolution: 200
  } );

  return (
    <>

      <ThermalRegistryRange
        registry={dropinRegistry}
        step={1}
        renderSkeleton={() => <article>Načítačka</article>}
      />

      <ThermalDropin registry={dropinRegistry} groupId={"zkušební dropin"} />


      <PaletteDropdownHeadless />

      <OpacityInputHeadless registry={registry} step={0.01}/>
      <OpacityInputHeadless registry={registry} type="number"/>

      <RangeButtonFullHeadless registry={registry} as={"button"}>Děti jsme tady</RangeButtonFullHeadless>
      <RangeButtonAutoHeadless registry={registry}/>
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionInputHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} type="range"/>

      <ThermalRegistryRange
        registry={registry}
        step={0.1}
        renderSkeleton={() => <article>NAčítačka</article>}
        rangeOverride={undefined}
        handleBG="blue"
        handleColor="yellow"
        ticksLabelColor="green"
        ticksLineColor="blue"
        histogramSizeInPx={80}
        histogramBorderColor="lightgray"
        histogramBarBackground="blue"
        histogramBackground="yellow"
        // histogramBorderWidthInPx={0}
      />
      <ThermalRegistryRange
        registry={registry}
        step={0.2}
        renderSkeleton={() => <article>NAčítačka</article>}
        orientation={Orientation.VERTICAL}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
      />
      <ThermalRegistryRange
        registry={registry}
        step={1}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={50}
      />
      <ThermalRegistryHistogram registry={registry} />
      {instances.value.map((instance) => {
        return (
          <div className="instance!!!" key={instance.id}>
            <ThermalInstance
              instance={instance}
              onClick={(event, instance) => {
                console.log("Pohnul jsem se", event, instance);
              }}
            >
            </ThermalInstance>
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
