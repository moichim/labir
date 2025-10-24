import { ThermalManager, ThermalTool } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";



@customElement("group-tool-bar")
export class GroupToolButtons extends ManagerConsumer {

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
:host {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: var( --thermal-fs );
}

.active {
    color: var( --thermal-foreground );
}

thermal-btn {
    width: 2.5em;
    padding: 3px;
    &:hover {
        color: var(--thermal-primary);
    }
}`;

    protected render(): unknown {

        if (this.manager === undefined) {
            return nothing;
        }

        return Object.entries(this.manager.tool.tools).map(([key, tool]) => {

            const classes = {
                [key]: true,
                button: true,
                active: tool.key === this.value.key
            }

            return html`<thermal-btn 
    tooltip=${t(T[tool.name as keyof typeof T])}
    tooltip-placement="right"
    class=${classMap(classes)} 
    @click=${() => { this.manager.tool.selectTool(tool) }}
    variant=${tool.key === this.value.key ? "background" : "default"}
>
    ${unsafeSVG(tool.icon)}
</thermal-btn>` } );
    }

}