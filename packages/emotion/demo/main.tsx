import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThermalManager } from "@labir/core";
import { ThermalProvider } from "@labir/react-bridge";
import { CssContextProvider } from "../src/context/CssContext";

const manager = new ThermalManager({
  palette: "iron",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssContextProvider>
      <ThermalProvider
        options={{ palette: "jet" }}
        externalManagerInstance={manager}
      >
        <App />
      </ThermalProvider>
      </CssContextProvider>
  </React.StrictMode>
);
