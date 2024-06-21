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
      background-color: var( --thermal-slate );
      border: 1px solid var( --thermal-slate-dark );
      border-radius: var( --thermal-radius );
      box-shadow: var( --thermal-shadow );

    }
  
  `;


  protected render(): unknown {
    return html`
    <div class="container">

      <thermal-image thermal="${this.url}">
        <thermal-opacity slot="bar"></thermal-opacity>
        <thermal-palette slot="bar"></thermal-palette>
        <thermal-range-auto slot="bar"></thermal-range-auto>
        <thermal-range-minmax slot="bar"></thermal-range-auto>
        <thermal-dialog slot="bar"></thermal-dialog>
      </thermal-image>

    </div>
    `;
  }

}