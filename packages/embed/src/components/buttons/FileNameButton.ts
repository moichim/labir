import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ElementInheritingFile } from "../structure/file/ElementInheritingFile";

@customElement("thermal-file-name")
export class FileNameButton extends ElementInheritingFile {
    protected getClassName(): string {
        return "FileNameButton";
    }

    connectedCallback(): void {
        super.connectedCallback();
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
        return html`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value 
                    ? this._injectedFile.value.fileName
                    : "Načítám..."
                }
                </div>

                    <div slot="option">
                        <thermal-button @click="${() => window.open(this._injectedFile.value?.url)}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${() => this._injectedFile.value?.exportAsPng()}>Export as PNG</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `
    }

}