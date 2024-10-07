import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import {ifDefined} from 'lit/directives/if-defined.js';

@customElement("thermal-file-app")
export class SingleFileAppIsolated extends BaseElement {

  @property({type: String, reflect: true})
  palette: "jet"|"iron"|"grayscle" = "jet";

  @property({type: Number})
  from?: number;

  @property({type: Number})
  to?: number;

  @property({type: Number, reflect: true})
  speed?: number;

  // Declare reactive properties
  @property({ type: String, reflect: true })
  url?: string = "";

  protected render(): unknown {

    if ( this.url === "" ) {
      return nothing;
    }

    return html`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider thermal="${this.url}" open>

              <file-app  from=${ifDefined( this.from )} to=${ifDefined(this.to)} speed=${ifDefined(this.speed)}></file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `;
  }

}

