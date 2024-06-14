import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Root, createRoot } from "react-dom/client";
import { BaseComponent } from "../baseComponent";
import { ThermalFile } from "./thermalFile";
import React from "react";
import { ThermalManager } from "@labir/core";

declare global {
  interface Window {
    manager?: ThermalManager;
  }
}

@customElement("thermal-file")
export class ThermalFileElement extends LitElement {
  #reactRoot?: Root;

  manager: ThermalManager;

  constructor() {
    super();

    if (window.manager) {
        this.manager = window.manager;
    } else {
        this.manager = new ThermalManager();
        window.manager = this.manager;
    }
  }

  updated(): void {
    const container = this.renderRoot.querySelector("#webcomponent-root")!;

    if (this.#reactRoot === undefined) {
      this.#reactRoot = createRoot(container);
    }

    console.log( this.manager );

    this.#reactRoot.render(
      <BaseComponent appRoot={container} externalManagerinstance={this.manager}>
        <ThermalFile url={this.url!} />
      </BaseComponent>
    );
  }

  // Declare reactive properties
  @property({ type: String, reflect: true })
  url?: string = "";

  // Render the UI as a function of component state
  render() {
    return html`<div id="webcomponent-root"></div>`;
  }
}
