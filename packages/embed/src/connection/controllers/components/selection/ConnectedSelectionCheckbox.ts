import { customElement, property } from "lit/decorators.js";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";
import { FileInfo } from "@labirthermal/server";
import { css, CSSResultGroup, html, PropertyValues } from "lit";

/** Connected file selection checkbox component */
@customElement( "connected-file-selection-checkbox" )
export class ConnectedFileSelectionCheckbox extends ControlledConsumer {

    @property({ type: Object})
    public file!: FileInfo;

    connectedCallback(): void {
        super.connectedCallback();
        this.selection.subscribeToSelectionChange(this);
    }



    private renderCheckbox(
        isSelected: boolean
    ): unknown {

        return html`<input 
            type="checkbox" 
            .checked=${isSelected} 
            @change=${(e: Event) => {
                const target = e.target as HTMLInputElement;
                if ( target.checked ) {
                    this.selection.addToSelection( this.file );
                }
                else {
                    this.selection.removeFromSelection( this.file );
                }
            }}
        />`;

    }

    private renderButton(
        isSelected: boolean
    ): unknown {

        const callback = isSelected
            ? () => this.selection.removeFromSelection( this.file )
            : () => this.selection.addToSelection( this.file );

        return html`<thermal-btn @click=${callback.bind(this)}>${isSelected ? 'Odstranit' : 'Přidat'}</thermal-btn>`;

    }


    static styles?: CSSResultGroup | undefined = css`
    
        :host {

            &:hover {
                cursor: pointer;
            }
        
        }

        input {
        
            accent-color: var( --thermal-primary );
            background-color: var( --thermal-slate-light );
            cursor: pointer;
        
        }
    
    `;



    protected render(): unknown {

        const isSelected = this.selection.fileIsSelected( this.file );

        return this.renderCheckbox( isSelected );

    }


}