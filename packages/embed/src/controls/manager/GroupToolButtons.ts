import { ThermalGroup, ThermalTool } from "@labir/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ManagerConsumer } from "../../hierarchy/consumers/ManagerConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";



@customElement("group-tool-buttons")
export class GroupToolButtons extends ManagerConsumer {


    @consume({ context: toolContext, subscribe: true })
    @state()
    value!: ThermalTool;

    @consume({ context: toolsContext, subscribe: true })
    @state()
    tools!: ThermalGroup["tool"]["tools"];

    /** Handle user input events */
    onSelect(tool: ThermalTool) {
        this.manager.tool.selectTool(tool);
    }

    static styles = css`
:host {
    display: flex;
    gap: var(--thermal-gap);
    width: content-width;
    gap: .25em;
    align-items: center;
}
.button {
    padding: 3px;
    width: calc(var(--thermal-gap)*1.2 + 6px);
    height: calc(var(--thermal-gap)*1.2 + 6px);
    &.active {
        background: var(--thermal-background);
    }
}
.thermal-tool-icon {
    width: calc(var(--thermal-gap)*1.2);
    margin: 0;
    padding: 0;
}
`;

    protected render(): unknown {

        if (this.manager === undefined) {
            return nothing;
        }

        return Object.entries(this.manager.tool.tools).map(([key, tool]) => {

            const classes = {
                [key]: true,
                button: true,
                active: this.value !== undefined 
                    ? tool.key === this.value.key 
                    : false
            }

            return html`<thermal-btn 
    class=${classMap(classes)} 
    @click=${() => { this.manager.tool.selectTool(tool) }}
    tooltip="${t(T[tool.name as keyof typeof T])}"
    tooltip-placement="top"
    variant=${tool.key === this.value.key ? "background" : "default"}
>
    ${unsafeSVG(tool.icon)}
</thermal-btn>` }
        );

    }

}