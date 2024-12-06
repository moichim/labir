import { CSSResultGroup, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { BaseElement } from "../../../hierarchy/BaseElement";
import { FileEntry } from "../utils/TimeGrouping";
import { Grouping } from "./TimeGroupElement";

@customElement("time-group-row")
export class TimeGroupRowElement extends BaseElement {

    @property()
    columns: number = 3;

    @property()
    breakpoint: number = 700;

    @property({ type: Object })
    files: FileEntry[] = [];

    @property({ type: String })
    label?: string;

    @property({ type: String })
    info?: string;

    @property({ type: Number })
    from!: number;

    @property({ type: Number })
    to!: number;

    @property({ type: Number })
    cursor?: number;

    @property({ type: String })
    grouping!: Grouping;

    protected observer?: ResizeObserver;

    @state()
    protected collapsed!: boolean;

    connectedCallback(): void {
        super.connectedCallback();

        this.observer = new ResizeObserver(entries => {

            const [entry] = entries;

            const width = entry.contentRect.width;

            const shouldBeCollapsed = width < this.breakpoint;

            if (this.collapsed !== shouldBeCollapsed) {
                this.collapsed = shouldBeCollapsed;
            }

        });

        this.observer.observe(this);

    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.observer?.disconnect();
    }


    public static styles?: CSSResultGroup | undefined = css`

        :host {
            display: block;
        }
    
        .row-title {}

        .row-files {}

        .row-files {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
        }

        
            .file-list-1 time-group-item { width: 100%; }
        
            .file-list-2 time-group-item { width: calc( 50%  - 5px); }

            .file-list-3 time-group-item { width: calc( 33%  - 5px); }

            .file-list-4 time-group-item { width: calc( 25%  - 5px); }

            .file-list-5 time-group-item { width: calc( 20%  - 5px); }

            .file-list-6 time-group-item { width: calc( 100% / 6  - 5px); }

            .file-list-7 time-group-item { width: calc( 100% / 7  - 5px); }

            .file-list-8 time-group-item { width: calc( 100% / 8  - 5px); }

            .file-list-9 time-group-item { width: calc( 100% / 9  - 5px); }

            .file-list-10 time-group-item { width: calc( 100% / 10  - 5px); }


        .file-list-collapsed time-group-item { width: 100% !important; }

    `;

    protected render(): unknown {

        if (this.files.length === 0) {
            // return nothing;
        }

        const sortedImages = this.files.sort((a, b) => {
            return a.instance.timestamp - b.instance.timestamp;
        });

        const title = this.label?.trim() !== "" ? this.label : undefined;

        const info = this.info?.trim() !== "" ? this.info : undefined;

        const listClasses = {
            "row-files": true,
            "row-files__collapsed": this.collapsed,
            [`file-list-${this.columns}`]: true
        }

        return html`

            ${title ? html`<h3 class="row-title">${title}</h3>` : nothing}

            ${info ? html`<p>${info}</p>` : nothing}

            <section class=${classMap(listClasses)}>
            
                ${sortedImages.map(({ instance, innerHtml, label }) => html`<time-group-item .file=${instance} .innerHtml=${innerHtml} .label=${label}></time-group-item>`)}
            
            </section>
        
        `;
    }


}