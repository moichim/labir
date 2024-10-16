import { Instance, ThermalTool, TimeFormat } from "@labir/core";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import {ifDefined} from 'lit/directives/if-defined.js';
import { createRef, ref, Ref } from "lit/directives/ref.js";

@customElement("desktop-app")
export class DesktopFileApp extends FileConsumer {

  @property({ type: Number })
  from?: number;

  @property({ type: Number })
  to?: number;

  @property({ type: Number })
  speed?: 0.5 | 1 | 2 | 3 | 5 | 10;

  @property({ type: String, reflect: true, attribute: true })
  showembed: boolean = true;

  @property({ type: String, reflect: true, attribute: true })
  showabout: boolean = true;

  @property({ type: String, reflect: true, attribute: true })
  showfullscreen: boolean = true;

  @state()
  hasAnalysis: boolean = false;

  @state()
  hasGraph: boolean = false;

  @state()
  tool?: ThermalTool;

  @state()
  isSequence: boolean = true;

  @property()
  author?: string;

  @property()
  recorded?: string;

  @property()
  license?: string;

  @property()
  label?: string;

  contentContainerRef: Ref<HTMLDivElement> = createRef();

  @state()
  protected contentContainerWidth: number = 1000;


  public onInstanceCreated(
    instance: Instance
  ): void {

    this.recorded = TimeFormat.human( instance.timestamp );

    this.hasAnalysis = instance.analysis.layers.all.length > 0;
    this.hasGraph = instance.analysisData.value.values.length > 1;
    this.isSequence = instance.timeline.isSequence;

    instance.timeline.addListener(this.UUID, () => {
      this.isSequence = instance.timeline.isSequence;
    });


    instance.analysis.addListener(this.UUID, values => {
      this.hasAnalysis = values.length > 0;
    })

    instance.analysisData.addListener(this.UUID, values => {
      this.hasGraph = values.values.length > 1;
    });

    this.tool = this.group.tool.value;
    this.group.tool.addListener(this.UUID, tool => {
      this.tool = tool;
    });

  }
  public onFailure(
    // error: ThermalFileFailure
  ): void {
    // throw new Error("Method not implemented.");
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    if ( this.contentContainerRef.value ) {

      this.contentContainerWidth = this.contentContainerRef.value.clientWidth;

            const observer = new ResizeObserver(entries => {
                this.contentContainerWidth = entries[0].contentRect.width;
            });

            observer.observe(this.contentContainerRef.value);

    }
  }

  static styles = css`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }

    .content-container {

      width: 100%;
      font-size: var(--thermal-fs-sm );
    
    }

    .content-container__expanded {
      display: flex;
      gap: calc( var( --thermal-gap ) * .5 );
    }

    .content-container__expanded .content-container__part {

      flex-grow: 1;
      width: 50%;
    
    }

    .content-container:not(.content-container__expanded) .graph {
      height: 300px;
    }

    .content-container__expanded .content-container__tools {
      flex-basis: 1rem;
    }

    .part {

      height: 100%;
    
    }

    .content-container__right__sequence .part {

      height: 50%;
      position: relative;
      overflow: auto;
    
    }

    .content-container__right__sequence .analysis {
      height: calc( 50% - var( --thermal-gap ) );
      margin-bottom: var( --thermal-gap );
    }

    .placeholder {

      padding: var( --thermal-gap );
      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: var( --thermal-gap );

      border: 1px dashed var( --thermal-slate );
      border-radius: var( --thermal-radius );

      height: 100%;

      color: var( --thermal-slate-dark );
      font-size: var(--thermal-fs-sm );
    
    }

    .placeholder-title {
      font-weight: bold;
      font-size: var(--thermal-fs-sm );
    }

    file-analysis-graph {
      
      width: 100%;
      height: 100%;
      
      top: 0;
      left: 0;

      position: absolute;
      overflow: hidden;

    }
  
  `;

  protected willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);

    // Project eventual changes into the file
    if (this.file) {
      // Project the speed
      if (this.speed !== undefined) {
        this.file.timeline.playbackSpeed = this.speed;
      }
      // Project the range
      if (this.from !== undefined && this.to !== undefined) {
        this.registry.range.imposeRange({
          from: this.from,
          to: this.to
        });
      }
    }

  }

  protected render(): unknown {

    return html`
        <thermal-app author=${ifDefined(this.author )} recorded=${ifDefined(this.recorded )} license=${ifDefined(this.license )}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file ? 
            this.label && this.label.trim().length > 0 ? this.label.trim() : this.file.fileName 
            : "Loading..."
          }</thermal-button>

          
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label="Display settings">
                <thermal-button slot="invoker">Display settings</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label="Image rendering" 
                    hint="'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are."
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label="Adjust time scale"
                    hint="Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max)."
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label="Palette"
                    hint="Select colour palette of thermal display."
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${(this.file && this.file.timeline.isSequence) ? html` <thermal-field 
                    label="Playback speed"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `
        : nothing
      }

                  ${(this.file && this.file.timeline.isSequence) ? html` <thermal-field 
                    label="Graph lines"
                    hint="'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'."
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `
        : nothing
      }


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed === true ? html`<file-share-button ></file-share-button>` : nothing}
            
              ${this.showabout === true ? html`<app-info-button ></app-info-button>` : nothing}


            


            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth > 700 ? "content-container__expanded":""}" ${ref(this.contentContainerRef)}>

                <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth > 700 ? html`<group-tool-bar></group-tool-bar>`
                    : html`<group-tool-buttons></group-tool-buttons>`}
                </div>

                <div class="content-container__part content-container__left">


                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre"></registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>
                </div>

                <div class="content-container__part content-container__right ${this.isSequence ? "content-container__right__sequence" : ""}">

                  <div class="part analysis">
                    ${this.hasAnalysis
        ? html`<file-analysis-table></file-analysis-table>`
        : html`<div class="placeholder">
                        <div class="placeholder-title">Analysis</div>
                        <div>You may select areas or points on the thermogram to see statistics here!</div>
                    ${["add-point", "add-rect", "add-ellipsis"].includes(this.tool?.key ?? "") ? html`
                      <div>${this.tool?.description}</div>
                    ` : html`
                      <div>
                        <thermal-button @click=${() => this.group.tool.selectTool("add-point")}>Add a point analysis</thermal-button>
                        <thermal-button @click=${() => this.group.tool.selectTool("add-rect")}>Add a rectangle analysis</thermal-button>
                        <thermal-button @click=${() => this.group.tool.selectTool("add-ellipsis")}>Add a ellipsis analysis</thermal-button>
                      </div>
                    ` }
          
                      </div>`
      }
                  </div>

                  ${this.isSequence ? html`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph ? 1 : 0}"></file-analysis-graph>
                  ${this.hasGraph === false
          ? html`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${this.hasAnalysis === false ? "Add analysis first to see the graph!" : html`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`
          : nothing
        }
                  
                  </div>
                  ` : nothing}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `;
  }

}