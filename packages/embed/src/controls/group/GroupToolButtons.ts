import { AbstractTool, AvailableThermalPalettes, ThermalGroup, ThermalPaletteType, ThermalPalettes, ThermalTool } from "@labir/core";
import { consume } from "@lit/context";
import { css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { ManagerPaletteContext, managerPaletteContext } from "../../hierarchy/providers/context/ManagerContext";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { toolContext, toolsContext } from "../../hierarchy/providers/context/GroupContext";



@customElement("group-tool-buttons")
export class GroupToolButtons extends GroupConsumer {


    @consume({context: toolContext, subscribe: true})
    @state()
    value!: ThermalTool;

    @consume( {context: toolsContext, subscribe: true} )
    @state()
    tools!: ThermalGroup["tool"]["tools"]



    /** Handle user input events */
    onSelect( tool: ThermalTool ) {
        this.group.tool.selectTool( tool );
    }

    static styles = css`

    .container {
        display: flex;
        width: content-width;
        gap: 5px;
    }

    .button {
        margin: 0;
        border: 0;
        line-height: 0;
        display: flex;
        align-items: center;
        gap: 3px;
    }

    .palette {
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        border-radius: 1rem;
    }

    `;

    protected render(): unknown {

        this.log( this.value.name, this.value.active );


        if ( this.group === undefined ) {
            return nothing;
        }

        return html`
            <div class="container">
                ${Object.entries( this.group.tool.tools ).map( ([key,tool]) => html`
                    
                    <thermal-button  variant="${tool.key === this.value.key ? "background" : "slate"}" @click=${ () => { this.group.tool.selectTool( tool ) } }>
                        ${tool.name}
                    </thermal-button>
                    
                `)}
            </div>
        `;
    }

}