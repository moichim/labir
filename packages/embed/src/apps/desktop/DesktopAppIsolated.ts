import { html, nothing, PropertyValues } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from "lit/directives/ref.js";
import { BaseSingleApp } from "../BaseSingleApp";
import { getCurrentNotationsByMs, grabNotationsFromSlot, IWithNotationContext, NotationCurrentContext, notationCurrentContext, notationDurationContext, NotationListContext, notationListContext } from "../../controls/file/notation/NotationContext";
import { NotationEntry } from "../../controls/file/notation/NotationEntry";
import { provide } from "@lit/context";

@customElement("thermal-file-analyser")
export class DesktopAppIsolated extends BaseSingleApp implements IWithNotationContext {


  @state()
  ms: number = 0;

  @state()
  @queryAssignedElements({ flatten: true })
  _notationSlot!: Array<HTMLElement>;

  @state()
  notations: NotationEntry[] = [];

  @state()
  @provide({ context: notationDurationContext })
  duration: number = 1000 * 1000;

  @state()
  @provide({ context: notationListContext })
  notationList: NotationListContext = [];

  @state()
  @provide({ context: notationCurrentContext })
  notationCurrent: NotationCurrentContext;

  private observer: MutationObserver | null = null;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this.observeSlotChanges();

    if ( this.fileProviderRef.value ) {
      this.fileProviderRef.value.onSuccess.add( this.UUID, instance => {
        
        this.duration = instance.timeline.duration;

        instance.timeline.addListener( this.UUID, ms => {
          this.updateNotationsMs( ms );
        } );

      } );
    }

  }


  observeSlotChanges() {

    const slot = this.renderRoot?.querySelector('slot[name="notation"]') as HTMLSlotElement | null | undefined;

    if (!slot) return;

    this.notationList = grabNotationsFromSlot(slot.assignedElements());

    this.observer = new MutationObserver(() => {
      this.notationList = grabNotationsFromSlot(slot.assignedElements());
    });

    slot.addEventListener('slotchange', () => {
      this.observer?.disconnect();
      this.notationList = grabNotationsFromSlot(slot.assignedElements());
    });

  }


  updateNotationsMs(ms: number) {
    this.notationCurrent = getCurrentNotationsByMs(ms, this);
  }


  protected render(): unknown {

    if (this.url === "") {
      return nothing;
    }

    return html`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${ifDefined(this.from)}
        to=${ifDefined(this.to)}
        opacity=${ifDefined(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${ref(this.fileProviderRef)}
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

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${ifDefined(this.author)} 
              recorded=${ifDefined(this.recorded)} 
              license=${ifDefined(this.license)}
              label=${ifDefined(this.label)}
              showtutorial=${this.showtutorial}
              showembed=${this.showembed}
              showabout=${this.showabout}
              showfullscreen=${this.showfullscreen}
              showhistogram=${this.showhistogram}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>

    <slot name="notation"></slot>


    
    `;
  }

}

