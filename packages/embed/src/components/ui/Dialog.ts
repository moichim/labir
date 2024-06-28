import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";

@customElement( "thermal-dialog" )
export class Dialog extends LitElement {

    protected dialogRef: Ref<HTMLDialogElement> = createRef();
    protected closeButtonRef: Ref<HTMLButtonElement> = createRef();
    protected invokerRef: Ref<HTMLSlotElement> = createRef();

    @property( {type: String, reflect: true} )
    public label?: string;

    constructor() {
        
        super();

    }

    setClose() {
        this.dialogRef.value?.close();
        window.document.body.style.removeProperty("overflow-y");
        window.document.body.style.removeProperty( "height" );
    }

    setOpen() {
        this.dialogRef.value?.showModal();
        window.document.body.style.overflowY = "hidden";
        window.document.body.style.height = "100vh";
    }

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {

        super.attributeChangedCallback( name, _old, value );

        if ( name === "open") {

            const val = value === "true";

            if ( val ) {
                this.setOpen();
            } else {
                this.setClose();
            }

        } 

    }

    connectedCallback(): void {
        super.connectedCallback();
    }
    
    static styles = css`

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: 1px;
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(10px);
            }

            min-width: 150px;

            @media ( min-width: 300px ) {
                min-width: 250px;
            }

            @media ( min-width: 600px ) {
                min-width: 450px;
                max-width: 700px;
            }
        }

        .dialog-header {
            display: flex;
            flex-wrap: no-wrap;
            justify-content: space-between; 
        }

        .dialog-title {
            margin: 0;
            padding: 0;
        }

        .dialog-content {
            padding: var( --thermal-gap ) 0;
        }

        .dialog-footer {

            width: 100%;
            display: flex;
            justify-content: flex-end;
            gap: 10px;

        }

        

        .dialog-close {

            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var( --thermal-foreground );
            cursor: pointer;

            width: calc( var( --thermal-gap ) * 1.5);

            &:hover {
                color: var( --thermal-primary );
            }
        
        }

        
    
    `;

    render() {
        return html`
            <slot name="invoker" ${ref( this.invokerRef )} @click=${this.setOpen}></slot>
            <dialog ${ref( this.dialogRef )} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${ref( this.closeButtonRef )} @click=${this.setClose}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                    </button>
                
                
                </header>
                	
                <div class="dialog-content">
                    <slot name="content"></slot>
                </div>

                <div class="dialog-footer">
                    <slot name="button"></slot>
                    <thermal-button variant="foreground" @click=${this.setClose}>Close</thermal-button>
                </div>
                
            
            </dialog>
        `
    }

}