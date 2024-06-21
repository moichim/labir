"use client";

import {
    ThermalInstance,
    useSingleFileRegistry
} from "@labir/react-bridge";
import React from "react";

export const File: React.FC = () => {
  const tucnaci = useSingleFileRegistry("/tucnaci_04.lrc");

  return (
    <div style={{ padding: "1rem 0" }}>
      {tucnaci.instance && <ThermalInstance instance={tucnaci.instance} />}
    </div>
  );
};
