import { html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseSingleApp } from "../BaseSingleApp";

@customElement("thermal-file-app")
export class SingleFileAppIsolated extends BaseSingleApp {

  protected render(): unknown {

    if ( this.url === "" ) {
      return nothing;
    }

    return html`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${ifDefined( this.from )}
        to=${ifDefined( this.to )}
        opacity=${ifDefined(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${ifDefined(this.visible)}
            analysis1=${ifDefined(this.analysis1)}
            analysis2=${ifDefined(this.analysis2)}
            analysis3=${ifDefined(this.analysis3)}
            analysis4=${ifDefined(this.analysis4)}
            analysis5=${ifDefined(this.analysis5)}
            analysis6=${ifDefined(this.analysis6)}
            analysis7=${ifDefined(this.analysis7)}
            speed=${ifDefined(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${ifDefined(this.author )} 
                recorded=${ifDefined(this.recorded )} 
                license=${ifDefined(this.license )}
                label=${ifDefined(this.label)}  
                showabout=${this.showabout}
                showembed=${this.showembed}
                showfullscreen=${this.showfullscreen}
                showhistogram=${this.showhistogram}
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `;
  }

}

