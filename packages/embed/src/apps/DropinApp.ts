import { css, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { BaseElement } from "../hierarchy/BaseElement";
import { FileDropinElement } from "../hierarchy/providers/FileDropin";

@customElement( "thermal-dropin-app" )
export class DropinAppElement extends BaseElement {

    @state()
    protected dropinRef: Ref<FileDropinElement> = createRef();

    @state()
    loaded: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();

        console.log( this.dropinRef.value );
    }


    public firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated( _changedProperties );

        console.log( this.dropinRef.value, this.dropinRef.value?.listener,  "______" );

        

        setTimeout( () => {

            if ( this.dropinRef.value && this.dropinRef.value.listener) {

                this.dropinRef.value.listener.onDrop.set( this.UUID, () => {
                    // Delete any existing file
                    this.dropinRef.value?.deleteFile();
    
                    // Mark as loading
                    this.loaded = true;
                } );
    
            }

        }, 0 );
    }


    public handleOpenClick() {

        if ( this.dropinRef.value ) {
            if ( this.dropinRef.value.listener ) {

                this.dropinRef.value.group.files.reset();

                this.dropinRef.value.listener.openFileDialog();

            }
        }

    }

    public handleCloseFile() {

        if ( this.dropinRef.value ) {
            if ( this.dropinRef.value.listener ) {

                this.loaded = false;

                this.dropinRef.value.deleteFile();
                this.dropinRef.value.listener.hydrate();
            }
        }

    }

    public static styles = css`
    
        file-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;

    protected render(): unknown {
        return html`

            <manager-provider slug="dropin">

                <registry-provider slug="dropin">

                    <group-provider slug="dropin">

                        <thermal-app showfullscreen="false">

                            <thermal-button slot="bar" variant="foreground" @click=${this.handleOpenClick.bind(this)}>Open file</thermal-button>

                            <div slot="bar" style="flex-grow: 1;">
                                <thermal-bar slot="bar">
                                    <app-info-button></app-info-button>
                                </thermal-bar>
                            </div>

                            ${this.loaded === true ? html`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>` : nothing }

                            <file-dropin ${ref(this.dropinRef)}>

                                <file-app showembed="false" showabout="false"></file-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `;
    }

}