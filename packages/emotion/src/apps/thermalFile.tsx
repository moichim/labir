import {
  Bar,
  DownloadDropdown,
  PaletteDropdown,
  Skin,
  ThermalButton,
  ThermalEmbedModal,
  ThermalInfoModal,
  ThermalRangeAutoButton,
  ThermalRangeFullButton,
} from "../../src";
import {
  ThermalInstance,
  ThermalRegistryRange,
  useSingleFileRegistry
} from "@labir/react-bridge";
import React, { useCallback, useEffect, useRef, useState } from "react";

type ThermalFileComponentProps = {
  url: string;
};

export const ThermalFileApp: React.FC<ThermalFileComponentProps> = (props) => {

  const { registry, instance } = useSingleFileRegistry( props.url );

  const containerRef = useRef<HTMLDivElement>(null);

  const [ isFullscreen, setIsFullscreen ] = useState<boolean>(false);


  const toggleFullscreen = useCallback( () => {

    if ( containerRef.current ) {

        if ( isFullscreen ) {
            document.exitFullscreen();
            setIsFullscreen( false );
        } else {
            containerRef.current.requestFullscreen().then( () => setIsFullscreen( true ) );
        }

    }

  }, [ containerRef, isFullscreen, setIsFullscreen ] );

  useEffect( () => {

    const listener = (event: Event) => {
        console.log( event );
    }

    document.addEventListener( "fullscreenchange", listener );

    return () => document.removeEventListener( "fullscreenchange", listener );

  }, [] );

  return (
    <>

    {instance && <div key={instance.id} className="lrc-dark" ref={containerRef}>
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
            <ThermalButton onClick={toggleFullscreen}>{isFullscreen ? "Zavřít" : "Otevřít"}</ThermalButton>
          </Bar>
          
        </div>}

    </>
  );
};
