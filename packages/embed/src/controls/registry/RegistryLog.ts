import { html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { RegistryConsumer } from "../../hierarchy/consumers/RegistryConsumer";
import { ThermalMinmaxOrUndefined } from "@labir/core";

@customElement("registry-log")
export class RegistryLog extends RegistryConsumer {

    @state()
    protected minmax: ThermalMinmaxOrUndefined;

    @state()
    protected opacity!: number;

    connectedCallback(): void {
        super.connectedCallback();

        this.log( "---------", "CONNECTED", this.id, this.registry.id, this.registry.groups.value.length );

        this.registry.opacity.addListener( this.UUID, value => {
            this.log( "opacity", value );
        } );

        this.registry.range.addListener( this.UUID, value => {
            this.log( value ); 
            console.log( value );
        } );

        this.registry.minmax.addListener( this.UUID, this.log );
    }

    protected renderRow(
        label: string,
        content: string
    ) {
        return html`<tr>
            <td>${label}</td>
            <td>${content}</td>
        </tr>`;
    }

    protected render(): unknown {
        return html`<div>
        
            <h2>Registry</h2>

            <div>
                <table>
                
                    ${this.renderRow( "ID", this.registry.id )}

                    ${ this.minmax === undefined
                        ? nothing
                        : this.renderRow( "MIN", this.minmax.min.toString() ) }
                
                </table>
                ${ this.registry.id }
            </div>
        
        </div>`;
    }

}