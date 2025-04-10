import { consume } from "@lit/context";
import { format } from "date-fns";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import { notationCurrentContext } from "./NotationContext";
import { NotationEntry } from "./NotationEntry";

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
            ${time !== nothing
                ? html`<div class="time">${time}</div>`
                : nothing
            }${label !== nothing
                ? html`<h1 style="${entry.color ? `background-color:${entry.color}` : ''}">${label}</h1>`
                : nothing
            }${img}

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
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0px;
        }

        h1, .time {
            line-height: 1em;
            margin: 0;
            padding: 7px 10px;
            color: var(--thermal-background);
            display: inline-block;
            border: 0;
            outline: 0;
        }

        .content {
            
        }

        h1 {
            font-weight: bold;
            font-size: var(--thermal-fs);
            background: var(--thermal-primary-dark);
            border-radius: 0px var(--thermal-radius) var(--thermal-radius) 0px;
            border-left: 1px solid var(--thermal-foreground);
        }

        .time {
            font-size: 0.7em;
            background: var(--thermal-foreground);
            border-radius: var(--thermal-radius) var(--thermal-radius) var(--thermal-radius) 0px;
            border-left: 1px solid var(--thermal-foreground);
        }

        img {
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 0px var(--thermal-radius) var(--thermal-radius) var(--thermal-radius);
        }
    
    `;


    protected render(): unknown {

        return html`${map(this.entries, this.renderEntry.bind(this))}`;

    }



}