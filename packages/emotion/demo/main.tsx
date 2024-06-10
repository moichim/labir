import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThermalManager } from "@labir/core";
import { ThermalProvider } from "@labir/react-bridge";
import { ThermalEmotionProvider } from "../src";

const manager = new ThermalManager({
  palette: "iron",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThermalEmotionProvider>
      <ThermalProvider
        options={{ palette: "jet" }}
        externalManagerInstance={manager}
      >
        <App />
      </ThermalProvider>
    </ThermalEmotionProvider>
  </React.StrictMode>
);
