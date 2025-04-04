import { ThermalGroup, ThermalTool } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";
import { booleanConverter } from "../../utils/converters/booleanConverter";



@customElement("group-tool-buttons")
export class GroupToolButtons extends ManagerConsumer {


    @consume({ context: toolContext, subscribe: true })
    @state()
    value!: ThermalTool;

    @consume({ context: toolsContext, subscribe: true })
    @state()
    tools!: ThermalGroup["tool"]["tools"];

    @state()
    hint!: keyof T;

    @property({type: String, reflect: true, converter: booleanConverter(false)})
    showhint: boolean = true;

    @property({reflect: true, converter: booleanConverter(false) })
    showpopup: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();
        this.hint = this.value.description as keyof T;
        this.manager.tool.addListener(this.UUID + "spying on hints", value => {
            this.hint = value.description as keyof T;
        });
    }

    /** Handle user input events */
    onSelect(tool: ThermalTool) {
        this.manager.tool.selectTool(tool);
    }

    static styles = css`

    :host {
        width: 100%;
        display: flex;
        gap: var( --thermal-gap );
    }

    .switchers {
        display: flex;
        width: content-width;
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

        position: relative;
    
    }

    .switch {

        line-height: 0;
        cursor: pointer;

        transition: all .2s ease-in-out;

        width: calc( var( --thermal-gap ) * 1.2 + 6px);
        height: calc( var( --thermal-gap ) * 1.2 + 6px);

        &.active {
            background: var(--thermal-background);
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
        margin: 0;
        padding: 0;
    }

    .tool-name {
        font-weight: bold;
    }
    
    .tool-description {
        opacity: .5;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }


    .button > div {
        display: none;
        position: absolute;
        top: 2rem;
        padding: 7px 10px;
        background: var(--thermal-primary);
        color: var(--thermal-background);
        border: 1px solid var(--thermal-slate);
        border-radius: var(--thermal-radius);
        white-space: preserve nowrap;
        font-size: 12px;
        line-height: 16px;
    }

    .button:hover {
        color: var(--thermal-primary);
        border-color: var(--thermal-primary);
    }

    .button:hover > div {
        display: block;
    }

    `;

    protected render(): unknown {

        if (this.manager === undefined) {
            return nothing;
        }

        return html`
                <div class="switchers">
                    ${Object.entries(this.manager.tool.tools).map(([key, tool]) => {

            const classes = {
                [key]: true,
                button: true,
                switch: true,
                active: this.value !== undefined 
                    ? tool.key === this.value.key 
                    : false
            }

            return html`
                        
                        <button 
                            class=${classMap(classes)} 
                            @click=${() => { this.manager.tool.selectTool(tool) }}
                            @mouseenter=${() => {
                    this.hint = tool.name as keyof T;
                }}
                            @mouseleave=${() => {
                    this.hint = this.value.description as keyof T;
                }}
                        >
                            ${unsafeSVG(tool.icon)}

                            ${this.showpopup === true
                            ? html`<div>${t(T[tool.name as keyof typeof T])}</div>`
                            : nothing}

                        </button>
                        
                    ` }
        )}
                </div>

                ${this.showhint === true
                    ? html` <div class="current">
                        <div class="tool-description">${t( T[ this.hint as keyof typeof T ] )}</div>
                    </div>`
                    : nothing
                }

        `;
    }

}