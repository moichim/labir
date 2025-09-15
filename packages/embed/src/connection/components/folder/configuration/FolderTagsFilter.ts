import { FolderInfo, TagDefinition } from "@labir/server";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tagsFilterContext, tagsFilterSetterContext } from "../../../ClientContext";
import { ClientConsumer } from "../../ClientConsumer";

@customElement("folder-tags-filter")
export class FolderTagsFilter extends ClientConsumer {

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Object })
    public tags: {
        [index: string]: TagDefinition
    } = {};

    @property({ type: Function })
    public onTagClick: (tag: TagDefinition) => void = () => { };

    @consume({ context: tagsFilterContext, subscribe: true })
    protected tagsFilter: string[] = [];

    @consume({ context: tagsFilterSetterContext, subscribe: true })
    protected setTagsFilter: (tags: string[]) => void = () => { };

    public static styles?: CSSResultGroup = css`
        :host {
            margin-left: auto;
        }

        .tags-filter {
            display: flex;
            flex-wrap: wrap;
            gap: .5em;
            align-items: flex-start;
            justify-content: flex-end;
        }

        .tag-button {
            border-radius: 0 var(--thermal-radius) var(--thermal-radius) 0;
            padding: .25em .5em .25em 1em;
            border: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: .5em;
            position: relative;
            font-size: .7em;

            /* Simulace trojúhelníka s hladce zakulaceným hrotem */
            clip-path: polygon(1em 0%, 100% 0%, 100% 100%, 1em 100%, 0.2em 65%, 0.15em 55%, 0.15em 45%, 0.2em 35%);
            
            /* Default slate-light background */
            background-color: var(--thermal-slate-light) !important;
            color: var(--thermal-slate) !important;
            
            transition: all 0.2s ease;
        }       

        .tag-button.active {
            /* Active tags show their color */
            background-color: var(--tag-color) !important;
            color: var(--tag-text-color) !important;
        }

        .tag-button:hover {
            /* Hover shows the color */
            background-color: var(--tag-color) !important;
            color: var(--tag-text-color) !important;
        }
    `;

    protected getContrastColor(backgroundColor: string): string {
        // Převod hex na RGB
        let hex = backgroundColor.replace('#', '');
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }

        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        // Výpočet jasu podle W3C formulky
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // Pokud je jas > 128, použij černou, jinak bílou
        return brightness > 128 ? '#000000' : '#FFFFFF';
    }

    protected renderTag(tag: TagDefinition): unknown {

        const name = tag.meta?.name || tag.slug;
        const background = tag.meta?.color || "#ccc";
        const active = this.tagsFilter.includes(tag.slug);

        const textColor = this.getContrastColor(background);

        return html`<button
            class="tag-button ${active ? 'active' : ''}"
            @click=${() => {
                this.onTagClick(tag);
            }}
            style="--tag-color: ${background}; --tag-text-color: ${textColor};"
        >${name}</button>`;

    }


    protected render(): unknown {

        const tags = this.tags
            && Object
                .entries(this.tags)
                .filter(([_, tag]) => tag.count > 0)
            || [];

        return tags.length > 0 ? html`
            <div class="tags-filter">
                ${tags.map(([_, tag]) => this.renderTag(tag))}
            </div>
        ` : nothing;

    }

}