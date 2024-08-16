import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-download-dropdown")
export class FileDownloadButton extends FileConsumer {
    public onLoadingStart(): void {
        // throw new Error("Method not implemented.");
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

        if ( this.instance === undefined ) {
            return nothing;
        }

        return html`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this.instance 
                    ? "Download"
                    : "Načítám..."
                }
                </div>

                    <div slot="option">
                        <thermal-button @click="${() => window.open(this.instance!.thermalUrl)}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${() => this.instance!.exportAsPng()}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${() => this.instance!.exportThermalDataAsSvg()}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `
    }

}