import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@lion/ui/define/lion-option.js';
import '@lion/ui/define/lion-select-rich.js';

@customElement( "thermal-dialog" )
export class DialogElement extends LitElement {

    @property( {type: String} )
    public variant: string = "slate";

    @property( {type: String} )
    public size: string = "sm";

    static styles = css`

    button {
        
        cursor: pointer;
    
        margin: 0;
        padding: calc( var( --thermal-gap ) * .3 ) calc( var( --thermal-gap ) * .5 );
        
        background: var( --thermal-slate-light );
        color: var( --thermal-foreground );
        
        border: 1px solid var( --thermal-slate-dark );
        border-radius: var( --thermal-radius );
        box-shadow: var( --thermal-shadow );

        &:hover {
        
        }
    }
    
    `;

    render() {

        return html`
            <lion-dialog>

                    <thermal-button slot="invoker" class="error-button">
                        details
                    </thermal-button>
                            
                

                <div slot="content" class="dialog">

                    <h2>
                        <slot name="title"></slot>
                    </h2>
                    
                    <div class="content">
                        <slot name="content"></slot>
                    </div>

                    <button
                        class="close-button"
                        @click=${(e: { target: { dispatchEvent: (arg0: Event) => void; }; }) => e.target.dispatchEvent(new Event('close-overlay', { bubbles: true }))}
                    >
                                    ⨯
                    </button>
                </div>
            </lion-dialog>
        `;

    }

}