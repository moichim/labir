import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { FileProviderElement } from "../../hierarchy/providers/FileProvider";
import { provide } from "@lit/context";
import { ifDefined } from "lit/directives/if-defined.js";
import { AvailableThermalPalettes } from "@labir/core";
import { booleanConverter } from "../../utils/booleanConverter";
import { interactiveAnalysisContext } from "../../utils/context";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { classMap } from "lit/directives/class-map.js";
import { getCurrentNotationsByMs, grabNotationsFromSlot, IWithNotationContext, NotationCurrentContext, notationCurrentContext, notationDurationContext, NotationListContext, notationListContext } from "../../controls/file/notation/NotationContext";
import { NotationEntry } from "../../controls/file/notation/NotationEntry";

@customElement("thermal-lesson-app")
export class LessonElement extends BaseElement implements IWithNotationContext {

  protected fileProviderRef: Ref<FileProviderElement> = createRef();

  @property({ type: String, reflect: true })
  url?: string;

  @property({ type: String, reflect: true })
  visible?: string;

  @property({ type: String, reflect: true, attribute: true })
  palette: AvailableThermalPalettes = "jet";

  @property({ type: Number, reflect: true, attribute: true })
  opacity: number = 1;

  @property({ type: Number, reflect: true })
  from?: number;

  @property({ type: Number, reflect: true })
  to?: number;

  @property()
  author?: string;

  @property()
  recorded?: string;

  @property()
  license?: string;

  @property()
  label?: string;

  @property({ type: String, reflect: false, attribute: true, converter: booleanConverter(false) })
  showembed: boolean = false;

  @property({ type: String, reflect: false, attribute: true, converter: booleanConverter(false) })
  showabout: boolean = false;

  @property({ type: String, reflect: false, attribute: true, converter: booleanConverter(false) })
  showtutorial: boolean = false;

  @property({ type: String, reflect: false, converter: booleanConverter(true) })
  showfullscreen: boolean = false;

  @property({ type: String, reflect: true, converter: booleanConverter(true) })
  showhistogram: boolean = true;

  @provide({ context: interactiveAnalysisContext })
  @property({ type: String, reflect: true, converter: booleanConverter(true) })
  interactiveanalysis: boolean = true;

  @property({ type: String, reflect: true })
  analysis1?: string;

  @property({ type: String, reflect: true })
  analysis2?: string;

  @property({ type: String, reflect: true })
  analysis3?: string;

  @property({ type: String, reflect: true })
  analysis4?: string;

  @property({ type: String, reflect: true })
  analysis5?: string;

  @property({ type: String, reflect: true })
  analysis6?: string;

  @property({ type: String, reflect: true })
  analysis7?: string;

  @property({ type: String, reflect: true })
  ms?: number;

  @property({ type: String, reflect: true })
  speed?: 0.5 | 1 | 2 | 3 | 5 | 10;

  @property({ type: String, reflect: true, })
  autoclear: boolean = false;

  @state()
  protected collapsed: boolean = false;

  protected observerResize?: ResizeObserver;


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

  private observerMutation: MutationObserver | null = null;


  connectedCallback(): void {
    super.connectedCallback();

    this.observerResize = new ResizeObserver(entries => {

      const entry = entries[0];

      if (entry) {
        if (entry.contentRect.width > 1000) {
          if (this.collapsed === true) this.collapsed = false;
        } else {
          if (this.collapsed === false) this.collapsed = true
        }
      }

    });

    this.observerResize.observe(this);

  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    
    this.observeSlotChanges();

    if ( this.fileProviderRef.value ) {

      this.fileProviderRef.value.onSuccess.add( this.UUID, instance => {

        this.duration = instance.timeline.duration;

        instance.timeline.addListener( this.UUID, ms => {
          this.ms = ms;
          this.updateNotationsMs( ms );
        } );

      } );

    }

  }

  observeSlotChanges() {

    const slot = this.renderRoot?.querySelector('slot[name="notation"]') as HTMLSlotElement | null | undefined;

    // this.log("SLOT", slot);

    if (!slot) return;

    // this.log("SLOT", slot.assignedElements());

    this.notationList = grabNotationsFromSlot(slot.assignedElements());

    this.observerMutation = new MutationObserver(() => {
      this.notationList = grabNotationsFromSlot(slot.assignedElements());
    });

    slot.addEventListener('slotchange', () => {
      this.observerMutation?.disconnect();
      this.notationList = grabNotationsFromSlot(slot.assignedElements());
    });

  }


  updateNotationsMs(ms: number) {

    this.notationCurrent = getCurrentNotationsByMs(ms, this);

  }



  static styles?: CSSResultGroup | undefined = css`
  
    :host {
      width: 100%;
      display: block;
    }


    .content {

      width: 100%;
      box-sizing: border-box;

      &.content__collapsed {

        display: grid;
        grid-template-columns: 25px calc(100% - 25px);

      }

      &.content__expanded {
        display: grid;
        grid-template-columns: 25px 1fr 1fr;
        gap: var(--thermal-gap);

      }

    }
  
  `;




  protected render(): unknown {


    const title = this.fileProviderRef.value === undefined
      ? t(T.loading)
      : this.label ?? this.fileProviderRef.value.file?.fileName ?? t(T.file);


    const contentClasses = {
      "content": true,
      "content__collapsed": this.collapsed,
      "content__expanded": !this.collapsed
    }

    return html`<manager-provider
      slug="manager_${this.UUID}"
      palette=${this.palette}
      autoclear=${this.autoclear}
    >
      <registry-provider 
        slug="registry_${this.UUID}"
        from=${ifDefined(this.from)}
        to=${ifDefined(this.to)}
        opacity=${ifDefined(this.opacity)}
        autoclear=${this.autoclear}
      >
        <group-provider 
          slug="group_${this.UUID}"
        >
          
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
            
            <thermal-app
              author=${ifDefined(this.author)} 
              recorded=${ifDefined(this.recorded)} 
              license=${ifDefined(this.license)}
              label="${title}"
            >

              <div class="${classMap(contentClasses)}">

                <div class="content-part content-part__tools">
                  <group-tool-bar></group-tool-bar>
                </div>

                <div class="content-part content-part__left">
                  
                  <registry-histogram expandable="true"></registry-histogram>
                  <registry-range-slider></registry-range-slider>
                  <registry-ticks-bar></registry-ticks-bar>

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>

                </div>

                <div class="content-part content-part__right">
                  <file-analysis-table></file-analysis-table>
                  <notation-content></notation-content>
                </div>

              </div>
            
            </thermal-app>
          
          </file-provider>
        
        </group-provider>
      </registry-provider>
    </manager-provider>
    
    <slot name="notation"></slot>
    
    `;
  }

}