import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement( "thermal-button" )
export class ButtonElement extends LitElement {

    @property( {type: String} )
    public variant: string = "slate";

    @property( {type: String} )
    public size: string = "sm";

    constructor() {
        super();
        console.log( "Jsem tu" );
    }

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
            <button class="">
                <slot></slot>
            </button>
        `;

    }

}