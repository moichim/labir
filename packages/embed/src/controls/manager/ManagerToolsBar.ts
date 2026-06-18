import { ThermalManager, ThermalTool } from "@labirthermal/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import { state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { AbstractManagerConsumer } from "../../hierarchy/consumers/AbstractManagerConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/ManagerContext";
import { T } from "../../translations/Languages";


/**
 * A standard toolbar that is either horizontal or vertical.
 */
export class ManagerToolBar extends AbstractManagerConsumer {

    @consume({ context: toolContext, subscribe: true })
    @state()
    protected value!: ThermalTool;

    @consume({ context: toolsContext, subscribe: true })
    @state()
    protected tools!: ThermalManager["tool"]["tools"];

    /** Handle user input events */
    protected onSelect(tool: ThermalTool) {
        this.manager.tool.selectTool(tool);
    }

    static styles = css`
:host {
    display: flex;
    font-size: var(--thermal-fs);
    flex-direction: column;
    gap: 0.25em;
}

:host([horizontal="true"]) {
    flex-direction: row;
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

    protected renderTool(
        key: string,
        tool: ThermalTool
    ): unknown {
        const classes = {
            [key]: true,
            button: true,
            active: tool.key === this.value.key
        };
        return html`<thermal-btn 
    tooltip=${t(T[tool.name as keyof typeof T])}
    tooltip-placement="right"
    class=${classMap(classes)} 
    @click=${() => { this.manager.tool.selectTool(tool) }}
    variant=${tool.key === this.value.key ? "background" : "default"}
>
    ${unsafeSVG(tool.icon)}
</thermal-btn>`
    }

    protected render(): unknown {

        if (this.manager === undefined) {
            return nothing;
        }

        return Object.entries(this.manager.tool.tools).map(([key, tool]) => {

            return this.renderTool(key, tool);

        });
    }

}