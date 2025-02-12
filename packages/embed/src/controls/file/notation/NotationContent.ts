import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { NotationEntry } from "./NotationEntry";
import { consume } from "@lit/context";
import { notationCurrentContext } from "./NotationContext";
import { map } from "lit/directives/map.js";
import { booleanConverter } from "../../../utils/booleanConverter";
import { format } from "date-fns";

/** @deprecated */
@customElement("notation-content")
export class NotationContent extends BaseElement {


    @state()
    @consume({ context: notationCurrentContext, subscribe: true })
    protected entries!: NotationEntry[];

    @property({ converter: booleanConverter(true) })
    public showlabel: boolean = true;

    @property({ converter: booleanConverter(true) })
    public showTime: boolean = true;

    protected renderEntry(entry: NotationEntry) {

        const label = this.showlabel === true
            ? entry.label
            : nothing;

        const time = this.showTime === true
            && entry.from !== undefined
            && entry.to !== undefined
            ? [
                format(entry.from, "mm:ss.SSS"),
                format(entry.to, "mm:ss.SSS")
            ].join(" - ")
            : nothing;

        const content = entry.getRenderContent();

        const img = entry.image !== undefined
            ? html`<img src="${entry.image}" class="builtin-image" />`
            : nothing;

        return html`<article>

            ${label !== nothing
                ? html`<h1>${label}</h1>`
                : nothing
            }

            ${time !== nothing
                ? html`<div class="time">${time}</div>`
                : nothing
            }

            ${img}

            ${content.length > 0
                ? html`<div class="content">
                    ${content}
                </div>`
                : nothing
            }
        </article>`;


    }

    static styles?: CSSResultGroup | undefined = css`
    
        article {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            line-height: 1em;

            width: 100%;
            box-sizing: border-box;
            padding: var(--thermal-gap);
            
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
        }

        h1, .time {
            font-size: var(--thermal-fs);
            font-weight: bold;
            line-height: 1em;
            margin: 0;
            padding: 0;
            margin-bottom: calc( var( --thermal-gap ) * .5);
        }

        .content {
            
        }

        img {
            max-width: 100%;
            height: auto;
        }
    
    `;


    protected render(): unknown {

        return html`${map(this.entries, this.renderEntry.bind(this))}`;

    }



}