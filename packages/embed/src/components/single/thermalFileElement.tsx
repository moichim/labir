import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Root, createRoot } from "react-dom/client";
import { BaseComponent } from "../baseComponent";
import { ThermalFile } from "./thermalFile";
import React from "react";

@customElement("thermal-file")
export class ThermalFileElement extends LitElement {
  #reactRoot?: Root;

  updated(): void {
    const container = this.renderRoot.querySelector("#webcomponent-root")!;

    if (this.#reactRoot === undefined) {
      this.#reactRoot = createRoot(container);
    }

    console.log(container);

    this.#reactRoot.render(
      <BaseComponent appRoot={container}>
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
