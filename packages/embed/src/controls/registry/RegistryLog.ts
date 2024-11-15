import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { ThermalMinmaxOrUndefined, ThermalRangeOrUndefined } from "@labir/core";

/** @deprecated */
@customElement("registry-log")
export class RegistryLog extends RegistryConsumer {

    @state()
    protected minmax: ThermalMinmaxOrUndefined;

    @state()
    protected range: ThermalRangeOrUndefined;

    @state()
    protected opacity!: number;

    @state()
    protected palette!: string;

    connectedCallback(): void {
        super.connectedCallback()

        this.registry.opacity.addListener( this.UUID, value => {
            this.opacity = value;
        } );

        this.registry.range.addListener( this.UUID, value => {
            this.range = value;
        } );

        this.registry.minmax.addListener( this.UUID, value => {
            this.minmax = value;
        } );

        this.registry.palette.addListener( this.UUID, value => {
            this.palette = value.toString();
        } );
    }

    protected renderRow(
        label: string,
        content?: string
    ) {
        return html`<tr>
            <td>${label}</td>
            <td>${content ?? "undefined" }</td>
        </tr>`;
    }

    protected getTableData() {
        const table: {
            [index: string]: string
        } = {};

        table["ID"] = this.registry.id;

        table["OPACITY"] = this.registry.opacity.value.toString();

        table[ "GROUP COUNT" ] = this.registry.groups.value.length.toString();

        table["PALETTE"] = this.palette;

        table["RANGE"] = this.range === undefined
            ? "undefined"
            : Object.values( this.range ).join( " - " );

        table["MINMAX"] = this.minmax === undefined
            ? "undefined"
            : Object.values( this.minmax ).join( " - " );

        return table;
    }

    protected render(): unknown {
        return html`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${ Object.entries( this.getTableData() ).map( ([label, value]) => this.renderRow( label, value ) ) }
                
                </table>
            </div>
        
        </div>`;
    }

}