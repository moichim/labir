import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { notationDurationContext, notationListContext } from "./NotationContext";
import { NotationEntry } from "./NotationEntry";

/** @deprecated */
@customElement("notation-timeline")
export class NotationContent extends BaseElement {

    @state()
    @consume({ context: notationListContext, subscribe: true })
    protected entries!: NotationEntry[];

    @consume({ context: notationDurationContext, subscribe: true })
    protected duration!: number;

    protected renderEntry( entry: NotationEntry ) {

        if ( entry.from !== undefined && entry.to !== undefined ) {

            const left = entry.from / this.duration * 100;
            const right = entry.to / this.duration * 100;
            const width = right - left;

            return html`<div class="entry" style="left: ${left}%; width: ${width}%;">
                ${entry.label !== undefined ? html`<div class="entry-tooltip">
                    <div>${entry.label}</div>
                </div>` : nothing }
            </div>`;

        }

        return nothing;

    }

    static styles?: CSSResultGroup | undefined = css`
    
        ::host {
            width: 100%;
            box-sizing: border-box;
            height: 5px;
            position: relative;
            margin-bottom: 5px;
            margin-top: 3px;
            display: block;
        }

        .container {
            width: 100%;
            position: relative;
            height: 5px;
            top: 0px;
        }

        .entry {
            height: 5px;
            border-radius: 5px;
            background: var(--thermal-foreground);
            position: absolute;
            top: 0px;
            cursor: pointer;
            border-left: 1px solid var(--thermal-foreground);
        }

        .entry:nth-child(2n) {
            background-color: var(--thermal-slate-dark);
        }

        .entry-tooltip {
            display: none;
        }

        .entry:hover {

            background: green;

            .entry-tooltip {

                display: block;
                position: absolute;
                left: 50%;
                bottom: 1em;
                width: 0px;
                text-align: center;

                > div {

                    display: inline;
                    padding: 3px;
                    white-space: preserve nowrap;
                    background: gray;
                    text-align: center;

                    

                }
            }

        }

    `;

    protected render() {
        return html`<div class="container">
            ${map(this.entries, this.renderEntry.bind(this))}
        </div>`;
    }

}