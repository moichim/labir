import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { createRef, ref, Ref } from "lit/directives/ref.js";

@customElement("file-download-dropdown")
export class FileDownloadButton extends FileConsumer {

    protected tourableElementRef: Ref<HTMLElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        return this.tourableElementRef.value;
    }
    
    public onInstanceCreated(): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    static styles = css`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid var( --thermal-slate-light );
            }
        }

        small {
            opacity: .5;
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            color: var( --thermal-primary );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;

    protected render(): unknown {

        if ( this.file === undefined ) {
            return nothing;
        }

        return html`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${ref(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file 
                            ? "Download"
                            : "Načítám..."
                        }
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${() => window.open(this.file!.thermalUrl)}">Download original file (${this.file.reader.parser.extensions[0].extension.toUpperCase()})</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${() => this.file!.export.downloadPng()}>Export current frame as PNG image</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence
                        ? html`<div slot="option">
                            <thermal-button @click="${() => this.file?.recording.recordEntireFile()}">Convert entire sequence to video</thermal-button>
                        </div>`
                        : nothing
                    }
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `
    }

}