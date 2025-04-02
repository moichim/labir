import { ThermalManager, ThermalTool } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";



@customElement("group-tool-bar")
export class GroupToolButtons extends ManagerConsumer {

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }


    @consume({ context: toolContext, subscribe: true })
    @state()
    value!: ThermalTool;

    @consume({ context: toolsContext, subscribe: true })
    @state()
    tools!: ThermalManager["tool"]["tools"];

    connectedCallback(): void {
        super.connectedCallback();
    }

    /** Handle user input events */
    onSelect(tool: ThermalTool) {
        this.manager.tool.selectTool(tool);
    }

    static styles = css`

    aside {
        display: flex;
        flex-direction: column;
        gap: 5px;
        aligni-items: center;
    }

    .button {

        margin: 0;
        border: 1px solid var(--thermal-slate);
        background-color: var(--thermal-slate-light );
        color: var( --thermal-foreground );
        border-radius: var( --thermal-radius );
        padding: 3px;
    
    }

    .switch {

        line-height: 0;
        cursor: pointer;

        transition: all .25s ease-in-out;

        width: calc( var( --thermal-gap ) * 1.2 + 6px);
        height: calc( var( --thermal-gap ) * 1.2 + 6px);

        &:hover,
        &.active {
            color: var( --thermal-primary );
        }

    }

    .current {
        flex-grow: 1;
        font-size: var( --thermal-fs-small );
        display: flex;
        align-items: center;
        gap: 7px;
        color: var( --thermal-foreground );
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .thermal-tool-icon {
        width: calc( var( --thermal-gap ) * 1.2 );
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .tool-name {
        font-weight: bold;
    }


    .item {
        position: relative;
        .tooltip {
            display: none;
        }

        &:hover {
            .tooltip {
                display: block;
            }
        }
    }

    .tooltip {
        position: absolute;
        top: 0;
        left: calc( var( --thermal-gap ) * 1.2 + 15px );
        min-width: 100px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid var(--thermal-slate);
        background: var(--thermal-primary);
        border-radius: var(--thermal-radius);
        color: white;
        z-index: 9999999;
        white-space: preserve nowrap;
        font-size: calc( var(--thermal-fs) * .8 );
    }

    `;

    protected render(): unknown {

        if (this.manager === undefined) {
            return nothing;
        }

        return html`

            <aside ${ref(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([key, tool]) => {

            const classes = {
                [key]: true,
                button: true,
                switch: true,
                active: tool.key === this.value.key
            }

            return html`
                        <div class="item">
                            <button 
                                class=${classMap(classes)} 
                                @click=${() => { this.manager.tool.selectTool(tool) }}
                            >
                                ${unsafeSVG(tool.icon)}
                            </button>
                            <div class="tooltip">${t(T[tool.name as keyof typeof T])}</div>
                        </div>
                        

                    ` }
        )}

            </aside>

            <slot name="tour"></slot>
        `;
    }

}