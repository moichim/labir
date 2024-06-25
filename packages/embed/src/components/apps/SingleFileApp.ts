import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ElementInheritingGroup } from "../structure/group/ElementInheritingGroup";

@customElement("thermal-file-app")
export class SingleFileApp extends ElementInheritingGroup {
  protected getClassName(): string {
    return "SingleFileApp";
  }

  // Declare reactive properties
  @property({ type: String, reflect: true })
  url?: string = "";

  connectedCallback(): void {
    super.connectedCallback();
    this.log(this.registry);
  }

  static styles = css`

    .container {

      padding: calc( var( --thermal-gap ) / 3 );
      background-color: var( --thermal-slate-light );
      border: 1px solid var( --thermal-slate );
      border-radius: var( --thermal-radius );
      // box-shadow: var( --thermal-shadow );

    }
  
  `;


  protected render(): unknown {
    return html`
    <div class="container">

      <thermal-image thermal="${this.url}">
        <thermal-file-name slot="bar"></thermal-file-name>
        <thermal-file-info slot="bar"></thermal-file-info>
        <thermal-palette slot="bar"></thermal-palette>
        <thermal-range-auto slot="bar"></thermal-range-auto>
        <thermal-range-minmax slot="bar"></thermal-range-minmax>
        <!--<thermal-opacity slot="bar"></thermal-opacity>-->
        <div style="flex-grow: 1" slot="bar"></div>
        <thermal-app-info slot="bar"></thermal-app-info>
        
      </thermal-image>

    </div>
    `;
  }

}