/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/react'

import {
  HistogramResolutionInputHeadless,
  OpacityInputHeadless,
  Orientation,
  PaletteDropdownHeadless,
  RangeButtonAutoHeadless,
  RangeButtonFullHeadless,
  RangeHeadless,
  RegistryHistogram,
  ThermalDropin,
  ThermalInstance,
  useSingleFileRegistry,
  useThermalGroupInstancesState,
  useThermalRegistry,
  useThermalRegistryOpacityDrive,
  useThermalRegistryRangeDrive,
} from "@labir/react-bridge";
import { useEffect, useState } from "react";
import { Debug } from "../../src/context/Debug";
import { Skin } from "../../src/theme/Skin";



function App() {
  const [count, setCount] = useState(0);

  const [singleUrl, setSingleUrl] = useState<string>("/tucnaci_04.lrc");
  const single = useSingleFileRegistry(singleUrl);

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

  const dropinRegistry = useThermalRegistry("dropin", {
    histogramResolution: 200,
  });

  const style = css`
    background: ${Skin.colorValue( "gray", 50 )}
  `;

  return (
    <>
      <Debug />

      <RangeHeadless
        registry={dropinRegistry}
        step={1}
        renderSkeleton={() => <article>Načítačka</article>}
      />

      <ThermalDropin registry={dropinRegistry} groupId={"zkušební dropin"} />

      <PaletteDropdownHeadless />

      <OpacityInputHeadless registry={registry} step={0.01} />
      <OpacityInputHeadless registry={registry} type="number" />

      <RangeButtonFullHeadless registry={registry} as={"button"}>
        Děti jsme tady
      </RangeButtonFullHeadless>
      <RangeButtonAutoHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} />

      <HistogramResolutionInputHeadless registry={registry} />
      <HistogramResolutionInputHeadless registry={registry} type="range" />

      <div className="lrc-dark" css={style}>
        <RangeHeadless
          registry={registry}
          step={0.1}
          renderSkeleton={() => <article>NAčítačka</article>}
          rangeOverride={undefined}
          handleColor={Skin.colorValue("gray", 100)}
          handleBG={Skin.colorValue("primary", 700)}
          ticksLabelColor={Skin.colorValue("gray", 500)}
          ticksLineColor={Skin.colorValue("gray", 300)}
          histogramSizeInPx={80}
          trackBg={Skin.colorValue("gray", 100)}
          histogramBorderColor={Skin.colorValue("gray", 200)}
          histogramBarBackground={Skin.colorValue("primary", 500)}
          histogramBackground={Skin.colorValue("gray", 100)}
          // histogramBorderWidthInPx={0}
        />
      </div>
      <RangeHeadless
        registry={registry}
        step={0.2}
        renderSkeleton={() => <article>NAčítačka</article>}
        orientation={Orientation.VERTICAL}
        trackSizeInPx={40}
        histogramSizeInPx={200}
        histogramBorderWidthInPx={0}
      />
      <RangeHeadless
        registry={registry}
        step={1}
        renderSkeleton={() => <article>NAčítačka</article>}
        trackSizeInPx={50}
      />
      <RegistryHistogram registry={registry} />
      {instances.value.map((instance) => {
        return (
          <div className="instance!!!" key={instance.id}>
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
