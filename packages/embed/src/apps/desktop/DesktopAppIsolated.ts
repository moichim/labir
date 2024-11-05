import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import {ifDefined} from 'lit/directives/if-defined.js';
import { BaseApp } from "../BaseApp";
import { ref } from "lit/directives/ref.js";

@customElement("thermal-desktop-app")
export class DesktopAppIsolated extends BaseApp {

  protected render(): unknown {

    if ( this.url === "" ) {
      return nothing;
    }

    return html`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${ifDefined( this.from )}
        to=${ifDefined( this.to )}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${ref(this.fileProviderRef)}
            thermal="${this.url}"
            analysis1=${ifDefined(this.analysis1)}
            analysis2=${ifDefined(this.analysis2)}
            analysis3=${ifDefined(this.analysis3)}
            analysis4=${ifDefined(this.analysis4)}
            analysis5=${ifDefined(this.analysis5)}
            analysis6=${ifDefined(this.analysis6)}
            analysis7=${ifDefined(this.analysis7)}
            speed=${ifDefined(this.speed)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
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

