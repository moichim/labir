"use client";

import dynamic from "next/dynamic";

const ThermalProvider = dynamic( () => import( "@labir/react-bridge" ).then(mod => mod.ThermalProvider), {
ssr: false
} )

const ThermalComponent: React.FC<React.PropsWithChildren> = (props) => {
  return (
      <ThermalProvider>{props.children}</ThermalProvider>
  );
};

export default ThermalComponent;
