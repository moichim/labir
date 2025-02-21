import { Instance } from "@labir/core";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { T } from "../../translations/Languages";
import { AbstractMultipleApp } from "./AbstractMultipleApp";
import { HtmlResult } from "./HtmlResult";

export type InstanceInteractionCallback = (instance: Instance) => void;

export class InstanceRenderer {

    public constructor(
        protected readonly element: AbstractMultipleApp
    ) { }


    public static styles: CSSResultGroup | undefined = css`


        .file {
            box-sizing: border-box;
            padding: 2.5px;
        }

        .file article {
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            background-color: var(--thermal-slate-light);
        }

        .file thermal-file-mirror {
            display: block;
        }

        .file-title {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var( --thermal-foreground );
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            padding: calc( var(--thermal-fs) * .5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .file-title > h3 {
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
            text-overflow: ellipsis;
            overflow: hidden;

            strong {
                font-weight: bold;
            }
            span {
                opacity: .5;
                padding-left: 10px;
            }
        }

        .file-title > h3 > span {
            white-space: nowrap;
        }

        .file-title > div {
            flex-grow: 1;
            display: flex;
            gap: 5px;
            justify-content: flex-end;
        }

        .file-info-button {
            cursor: pointer;
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
        }

        .file-info-button:hover {
            color: var(--thermal-background);
            background-color: var(--thermal-primary);
        }

        .timeline {
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
        }

    `;


    protected renderInfo(
        label?: string,
        innerHtml?: string
    ): HtmlResult {

        if (!innerHtml) {
            return nothing;
        }

        const trimmedInfo = innerHtml.trim();

        if (trimmedInfo.length === 0) {
            return nothing;
        }

        return html`<thermal-dialog label="Note for ${label}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${t(T.note).toLocaleLowerCase()}</button>
            <div slot="content">${unsafeHTML(innerHtml)}</div>
        </thermal-dialog>`
    }

    protected renderHeaderContent(
        preservetimelabel: boolean,
        time: string,
        label?: string,
    ): HtmlResult {

        if ( label === undefined || label.trim().length === 0 ) {
            return html`<strong>${time}</strong>`;
        }

        else if ( preservetimelabel === true ) {
            return html`<strong>${label}</strong><span>${time}</span>`;
        }

        return html`<strong>${label}</strong>`;


    }


    public renderInstance(
        instance: Instance,
        time: string,
        preservetime: boolean,
        label?: string,
        innerHtml?: string,
    ): HtmlResult {

        return html`<div class="file">

            <article>

                <file-mirror  .file=${instance}>
                
                    <div class="file-title">
                    
                        <h3>
                            ${this.renderHeaderContent(preservetime, time, label )}
                        </h3>

                        <div>

                            ${this.renderInfo(label, innerHtml)}

                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${t(T.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>
                        
                        </div>

                    </div>

                    <file-canvas></file-canvas>
                    ${instance.timeline.isSequence
                ? html`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`
                : nothing
            }
                    
                    <file-analysis-overview></file-analysis-overview>

                </file-mirror>

            </article>
        
        </div>`;

    }

}
