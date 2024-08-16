import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../hierarchy/BaseElement";

@customElement("thermal-file-app")
export class SingleFileApp extends BaseElement {

  // Declare reactive properties
  @property({ type: String, reflect: true })
  url?: string = "";

  protected render(): unknown {

    if ( this.url === "" ) {
      return nothing;
    }

    return html`

    <manager-provider id="manager_${this.UUID}">

      <registry-provider id="registry_${this.UUID}">

        <group-provider id="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `;
  }

}