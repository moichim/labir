import { css, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { BaseElement } from "../hierarchy/BaseElement";
import { FileDropinElement } from "../hierarchy/providers/FileDropin";
import { GroupDropin } from "../controls/group/GroupDropin";
import { GroupProviderElement } from "../hierarchy/mirrors/GroupMirror";
import { Instance, TimeFormat } from "@labir/core";
import { t } from "i18next";
import { T } from "../translations/Languages";
import { provide } from "@lit/context";
import { interactiveAnalysisContext } from "../utils/context";

@customElement( "thermal-dropin-app" )
export class DropinAppElement extends BaseElement {

    @state()
    protected dropinRef: Ref<GroupDropin> = createRef();

    @state()
    protected groupRef: Ref<GroupProviderElement> = createRef();

    @state()
    loaded: boolean = false;

    @state()
    protected listener?: ReturnType<typeof setTimeout>;

    @state()
    protected files: Instance[] = [];

    @provide({context: interactiveAnalysisContext})
    protected interactiveanalysis: boolean = true;

    connectedCallback(): void {
        super.connectedCallback();
    }


    public firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated( _changedProperties );

        this.log( this.groupRef.value );

        if ( this.groupRef.value !== undefined ) {

            this.groupRef.value.group.files.addListener( this.UUID, (value) => {

                if ( this.groupRef.value !== undefined ) {

                    this.groupRef.value.group.analysisSync.turnOff();
                    if ( value.length > 0 ) {
                        this.groupRef.value.group.analysisSync.turnOn( value[0] );
                    }
                    
                }
                

                value.forEach( file => {
                    file.analysis.reset();
                    file.analysis.layers.clear();
                    //file.unmountFromDom();
                } );

                if ( this.listener !== undefined ) {
                    clearTimeout( this.listener );
                }
                this.listener = setTimeout( async () => {
                    this.files = value;

                    const registry = this.groupRef.value?.group.registry;

                    if ( registry !== undefined ) {
                        await registry.postLoadedProcessing();
                        if ( registry.minmax.value !== undefined ) {
                            registry.range.imposeRange( {
                                from: registry.minmax.value.min,
                                to: registry.minmax.value.max
                            } );
                        }
                        
                    }
                }, 0 );

                this.log( "files", value );
            });

        }

    }

    protected handleClear() {

        if ( this.groupRef.value !== undefined ) {
            this.groupRef.value.group.files.removeAllInstances();

        }

    }


    public static styles = css`
    
        .browser {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: var(--thermal-gap);
            padding-top: var(--thermal-gap);
        }

        .file {
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            background: var(--thermal-background);

            file-analysis-graph {
                height: 300px;
            }

            header {
                display: flex;
                align-items: center;
            }

            .file-label {
                display: flex;
                flex-grow: 1;
                gap: 5px;
                align-items: center;
                padding-bottom: var(--thermal-gap);
                div {
                    opacity: .5;
                }
            }

            h1, h2 {
                margin: 0;
                padding: 0;
                font-size: var(--thermal-fs);
                line-height: 1em;
            }

            .file-expanded {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--thermal-gap);
            }

        }

        .files-multiple {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));
            gap: var(--thermal-gap);
        }

    `;


    protected renderIntroScene() {

        return html`
            <group-dropin></group-dropin>
        `;

    }

    protected renderBrowserScene() {

        return html`
        <div class="browser-bar">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
        </div>

        <div class="browser">
            
            <div class="browser-tools">
                <group-tool-bar></group-tool-bar>
            </div>
            <div class="browser-content">
                ${this.files.length === 1
                    ? this.renderOneFile()
                    : this.renderMultipleFiles()
                }
            </div>
        </div>
        `;

    }

    protected renderOneFile() {
        return html`
        ${this.files.map( file => this.renderDetail( file, true ) )}
        `;
    }

    protected renderFileHeader( file: Instance ) {
        return html`
            <header>
                <div class="file-label">

                    <thermal-button
                        @click=${() => file.group.files.removeFile( file )}
                        variant="foreground"
                    >x</thermal-button>

                    <file-info-button>
                        <thermal-button slot="invoker">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" height="1.5em" style="margin-bottom: -5px;">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
                            </svg>


                            ${file.fileName}

                        </thermal-button>
                    </file-info-button>

                    <file-range-propagator></file-range-propagator>
                    <file-download-lrc></file-download-lrc>
                    <file-download-png></file-download-png>

                    <div>${TimeFormat.human( file.timestamp )}</div>
                </div>
            </header>
        `;
    }


    protected renderDetail(
        file: Instance,
        expanded: boolean = false
    ) {

        return html`
            <article class="file">
                <file-mirror .file="${file}" autoclear="true">

                    ${this.renderFileHeader(file)}

                    ${expanded === true
                        ? html`
                        <div class="file-expanded">
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                            </div>
                            <div>
                                <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                                <div style="height: 500px;">
                                    <file-analysis-graph></file-analysis-graph>
                                </div>
                            </div>
                        </div>
                        `
                        : html`
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                                <file-analysis-overview></file-analysis-overview>
                                <file-analysis-graph></file-analysis-graph>
                            </div>
                        `
                    }
                
                    
                
                </file-mirror>
            </article>
        `;

    }


    protected renderMultipleFiles() {
        return html`
        <div class="files-multiple">
        ${this.files
            // .sort((a,b)=> a.timestamp - b.timestamp)
            .map( file => this.renderDetail(file, false) )}
        </div>
        `;
        
    }


    protected render(): unknown {
        return html`

            <manager-provider slug="${this.UUID}">

                <registry-provider slug="${this.UUID}">

                    <group-provider ${ref(this.groupRef)} slug="${this.UUID}">

                        <thermal-app label="LabIR Edu Analyser">
                            <div slot="bar" style="flex-grow: 1;">
                                <thermal-bar>
                                    <group-dropin-input></group-dropin-input>
                                    ${this.files.length > 0 ? html`
                                        <thermal-button @click="${()=>this.handleClear()}">${t(T.clear)}</thermal-button>
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                    ` : nothing}
                                    ${this.files.length > 1 ? html`<group-download-dropdown></group-download-dropdown><registry-range-full-button></registry-range-full-button>` : nothing}
                                </thermal-bar>
                            </div>

                            ${ this.files.length === 0 ? this.renderIntroScene() : this.renderBrowserScene() }
                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `;
    }

}