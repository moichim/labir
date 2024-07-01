import { customElement } from "lit/decorators.js";
import { ElementInheritingFile } from "../structure/file/ElementInheritingFile";
import { css, html } from "lit";
import { TimeFormat } from "@labir/core";

@customElement("thermal-file-info")
export class FileInfoButton extends ElementInheritingFile {
    protected getClassName(): string {
        return "FileInfoButton";
    }

    connectedCallback(): void {
        super.connectedCallback();
    }

    protected onFileLoaded(): void {
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
                border-bottom: 1px solid var( --thermal-slate );
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
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>
                        <tr>
                            <td>File name</td>
                            <td>${this._injectedFile.value?.fileName}</td>
                        </tr>
                        <tr>
                            <td>Thermal file URL</td>
                            <td>${this._injectedFile.value?.url}
                                ${this._injectedFile.value?.url && html`
                                    <a href="${this._injectedFile.value.url}" target="_blank" class="download">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>


                                    </a>
                                `}
                            </td>
                        </tr>
                        <tr>
                            <td>Visible file URL</td>
                            <td>${this._injectedFile.value?.visibleUrl ?? "-"}
                            ${this._injectedFile.value?.visibleUrl && html`
                                <a href="${this._injectedFile.value.visibleUrl}" target="_blank" class="download">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                    </svg>


                                </a>
                            `}
                            </td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>${this._injectedFile.value?.timestamp && TimeFormat.human( this._injectedFile.value.timestamp )}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>${this._injectedFile.value?.width} x ${this._injectedFile.value?.height} px <small>(${this._injectedFile.value?.pixels.length} pixels)</small></td>
                        </tr>
                        <tr>
                            <td>Signature</td>
                            <td>${this._injectedFile.value?.signature}</td>
                        </tr>
                        <tr>
                            <td>Frames</td>
                            <td>${this._injectedFile.value?.frames.length}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>${this._injectedFile.value
                                    ? this._injectedFile.value.duration / 1000
                                    : 0} s</td>
                        </tr>
                        <tr>
                            <td>FPS</td>
                            <td>${this._injectedFile.value
                                    ? this._injectedFile.value.frames.length === 1
                                        ? "-"
                                        : ( 60 * 10000 ) / this._injectedFile.value.duration + " s"
                                    : "-"}</td>
                        </tr>
                        <tr>
                            <td>Unit</td>
                            <td>${this._injectedFile.value?.unitHuman}</td>
                        </tr>
                        <tr>
                            <td>Data type</td>
                            <td>${this._injectedFile.value?.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `
    }

}