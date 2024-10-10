import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import {ifDefined} from 'lit/directives/if-defined.js';

@customElement("thermal-desktop-app")
export class DesktopAppIsolated extends BaseElement {

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

  @property({type: String, reflect: true})
  analysis1?: string;

  @property({type: String, reflect: true})
  analysis2?: string;

  @property({type: String, reflect: true})
  analysis3?: string;

  @property({type: String, reflect: true})
  analysis4?: string;

  @property({type: String, reflect: true})
  analysis5?: string;

  @property({type: String, reflect: true})
  analysis6?: string;

  @property({type: String, reflect: true})
  analysis7?: string;

  @property()
  author?: string;

  @property()
  recorded?: string;

  @property()
  license?: string;

  @property()
  label?: string;

  protected render(): unknown {

    if ( this.url === "" ) {
      return nothing;
    }

    return html`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider slug="registry_${this.UUID}">

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}"
            analysis1=${ifDefined(this.analysis1)}
            analysis2=${ifDefined(this.analysis2)}
            analysis3=${ifDefined(this.analysis3)}
            analysis4=${ifDefined(this.analysis4)}
            analysis5=${ifDefined(this.analysis5)}
            analysis6=${ifDefined(this.analysis6)}
            analysis7=${ifDefined(this.analysis7)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              from=${ifDefined( this.from )} 
              to=${ifDefined(this.to)} 
              speed=${ifDefined(this.speed)} 
              author=${ifDefined(this.author )} 
              recorded=${ifDefined(this.recorded )} 
              license=${ifDefined(this.license )}
              label=${ifDefined(this.label)}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `;
  }

}

