import { ThermalGroup, ThermalTool } from "@labir/core";
import { consume } from "@lit/context";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/GroupContext";


import { classMap } from 'lit/directives/class-map.js';



import { unsafeSVG } from 'lit/directives/unsafe-svg.js';



@customElement("group-tool-buttons")
export class GroupToolButtons extends GroupConsumer {


    @consume({ context: toolContext, subscribe: true })
    @state()
    value!: ThermalTool;

    @consume({ context: toolsContext, subscribe: true })
    @state()
    tools!: ThermalGroup["tool"]["tools"];

    @state()
    hint!: string;

    connectedCallback(): void {
        super.connectedCallback();
        this.hint = this.value.description;
        this.group.tool.addListener( this.UUID + "spying on hints", value => {
            this.hint = value.description;
        } );
    }


    




    /** Handle user input events */
    onSelect(tool: ThermalTool) {
        this.group.tool.selectTool(tool);
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
    
    }

    .switch {

        line-height: 0;
        cursor: pointer;

        transition: all .25s ease-in-out;

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
    }

    `;

    protected render(): unknown {

        if (this.group === undefined) {
            return nothing;
        }

        return html`
                <div class="switchers">
                    ${Object.entries(this.group.tool.tools).map(([key, tool]) => {

                const classes = {
                    button: true,
                    switch: true,
                    active: tool.key === this.value.key
                }

                return html`
                        
                        <button 
                            class=${classMap(classes)} 
                            @click=${() => { this.group.tool.selectTool(tool) }}
                            @mouseenter=${()=>{
                                this.hint = tool.name;
                            }}
                            @mouseleave=${()=>{
                                this.hint = this.value.description;
                            }}
                        >
                            ${unsafeSVG(tool.icon)}
                        </button>
                        
                    ` }
            )}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>
        `;
    }

}