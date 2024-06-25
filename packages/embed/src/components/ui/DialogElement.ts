import { LitElement, css, html } from 'lit';
import { customElement, property, queryAssignedElements, queryAssignedNodes } from 'lit/decorators.js';
import {Ref, createRef} from 'lit/directives/ref.js';

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

    @property({type: Boolean, reflect: true})
    open: boolean = false;

    toggleOpen() {
        console.log( "this" );
        this.open = !this.open;
    }

    setOpen() {
        this.open = true;
    }

    setClose() {
        this.open = false;
    }

    @queryAssignedNodes({slot: 'content', flatten: false})
    _content!: Array<HTMLElement>;

    @queryAssignedElements({slot: 'title'})
    _title!: Array<HTMLElement>;

    templateRef: Ref<HTMLTemplateElement> = createRef();

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {

        super.attributeChangedCallback( name, _old, value );

        if ( name === "open") {
            this.open = value === "true";
        } 

    }


    render() {

        return html`

            <thermal-dialog-component label="Jsem zder obsah">
                <thermal-button slot="invoker">Jsem invoker</thermal-button>
                <div slot="content">Jsem v obsahu a jsem úplně strašně moc širokej a neser mne</div>
                <thermal-button slot="button">Zavrieť</thermal-button>
            </thermal-dialog-component>

            <thermal-button @click=${this.setOpen}>Button</thermal-button>

        `;

    }

}