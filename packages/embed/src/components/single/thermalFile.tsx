import {
  Bar,
  DownloadDropdown,
  PaletteDropdown,
  Skin,
  ThermalEmbedModal,
  ThermalInfoModal,
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
        <div key={instance.id} className="lrc-dark">
          <Bar
            secondRow={<ThermalRegistryRange 
                registry={registry} step={0.1} 
                trackBg={Skin.colorValue( "gray", 300 )}
                ticksLineColor={Skin.colorValue( "gray", 500 )}
                ticksLabelColor={Skin.colorValue( "gray", 500 )}
                handleBG={Skin.colorValue( "gray", 900 )}
                handleColor={Skin.colorValue( "gray", 50 )}
                histogramBackground={Skin.colorValue( "gray", 200 )}
                histogramBarBackground={Skin.colorValue( "gray", 600 )}
                histogramBorderWidthInPx={0}
                histogramSizeInPx={40}
            />}
            mainContent={<ThermalInstance instance={instance} />}
          >
            
            <DownloadDropdown instance={instance} />
            <ThermalInfoModal instance={instance} />
            <PaletteDropdown />
            <ThermalRangeAutoButton registry={registry} />
            <ThermalRangeFullButton registry={registry} />
            <ThermalEmbedModal instance={ instance } />
          </Bar>

          
        </div>
      ))}
    </>
  );
};
