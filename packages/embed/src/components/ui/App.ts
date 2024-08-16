import { LitElement, css, html } from "lit";
import { customElement, queryAssignedElements } from "lit/decorators.js";


@customElement("thermal-app")
export class FileContextElement extends LitElement {


    @queryAssignedElements({ slot: "bar", flatten: true })
    protected barItems?: Array<HTMLElement>;

    @queryAssignedElements( { slot: "bar", flatten: true } )
    barElements!:Array<HTMLElement>;

    @queryAssignedElements( { slot: "pre", flatten: true } )
    pre!:Array<HTMLElement>;

    constructor() {
        super();
    }

    static styles = css`

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            // box-shadow: var( --thermal-shadow );

        }

        

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }
    
    `;

    
    


    protected render(): unknown {

        return html`

        <div class="container">
            
        ${ this.barElements.length >= 0 ? html`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        ` : "" }

        ${ this.pre.length >= 0 ? html`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        ` : "" }


        <slot></slot>

        </div>
        
        `
    }

}