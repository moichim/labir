import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { consume } from "@lit/context";
import { AnalysisList, analysisList } from "../../hierarchy/providers/context/FileContexts";
import {map} from 'lit/directives/map.js';

@customElement("file-analysis-list")
export class FileAnalysisList extends FileConsumer {

    @consume( {context: analysisList, subscribe: true})
    analysis: AnalysisList = [];

    @state()
    protected allSelected: boolean = false;

    public onInstanceCreated(): void {

        if ( this.file !== undefined ) {
            this.file.analysis.storage.onSelectionChange.add( this.UUID, value => {
                if ( this.file ) {
                    this.allSelected = this.file.analysis.value.length === value.length;
                }
                
            } );
        }

    }

    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }


    static styles?: CSSResultGroup | undefined = css`
        .container {
        
            overflow: hidden;
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
            margin-top: calc( var( --thermal-gap ) / 3 );
        
        }

        .container table {
            width: 100%;
            border-collapse:collapse;
            font-size: var( --thermal-fs-small );
        }

        .container table caption {
            display: none !important;
        }

        .container table th {
            text-align: left;
            padding: calc( var( --thermal-gap ) / 3 );
        }

        .container table file-analysis-row {
            border-bottom: 1px var( --thermal-foreground ) dotted;
        }

        .container table file-analysis-row:first-child {
            border-top: 1px var( --thermal-foreground ) dotted;
        }

        .selected {
            width: calc( var( --thermal-gap ) / 2 );
            height: calc( var( --thermal-gap ) / 2 );
            border-radius: 50%;
            border: 2px solid var( --thermal-slate );
            display: inline-block;
            cursor: pointer;

            &.all {
                background-color: var( --thermal-foreground );
            }
        }
    `;


    protected render(): unknown {

        if ( this.analysis.length === 0 ) {
            return nothing;
        }


        return html`
            <div class="container">

            <table>

                <caption>
                    Current analysis on the file ${this.file?.fileName}
                </caption>

                <thead>
                    <tr>
                        <th>
                            <div 
                                class="selected ${this.allSelected ? "all" : ""}"
                                @click=${() => {
                                    if ( this.allSelected ) {
                                        this.allSelected = false;
                                        this.analysis.forEach( analysis => analysis.setDeselected() );
                                    } else {
                                        this.allSelected = true;
                                        this.analysis.forEach( analysis => analysis.setSelected() );
                                    }
                                }}
                            ></div>
                            Analysis
                        </th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Avg</th>
                    </tr>
                </thead>

                <tbody>

                    ${map( this.analysis, item => html`
                        <file-analysis-row .analysis=${item}></file-analysis-row>
                    ` )}

                </tbody>

            </table>
            
            </div>
        
        `;
    }

}