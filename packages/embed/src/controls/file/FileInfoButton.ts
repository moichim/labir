import { customElement } from "lit/decorators.js";
import { css, html, nothing } from "lit";
import { Instance, ThermalFileFailure, TimeFormat } from "@labir/core";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

@customElement("file-info-button")
export class FileInfoButton extends FileConsumer {
    public onLoadingStart(): void {
        // throw new Error("Method not implemented.");
    }

    protected onFileLoaded(): void {
        // throw new Error("Method not implemented.");
    }

    public onInstanceCreated(instance: Instance): void {
        // this.log( instance );
        instance;
    }

    public onFailure(error: ThermalFileFailure): void {
        // this.log( error );
        error;
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

        .small,
        small {
            font-size: calc( var( --thermal-fs-sm ) * .8 );
        }

        .opaque {
            opacity: .5;
        }

        h2 {
            font-size: 1.4rem;
        }

        h3 {
            font-size: var( --thermal-fs-small );
            margin: .2rem 0 .1rem 0;
            padding: 0;
            font-weight: normal;    
        }

        ul {
            margin: 0;
            padding: 0;
            padding-left: 1rem;
        }

        a {
            color: var( --thermal-primary );
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;

    protected renderRow(
        label: string,
        value: string
    ) {
        return `<tr>
            <td style="width: 110px">${label}</td>
            <td>${value}</td>
        </tr>`;
    }

    protected renderNumericalRow(
        label: string,
        value: number,
        fixed: number = 4,
        unit?: string
    ) {

        const val = value.toFixed( fixed );
        const output = unit !== undefined
            ? val + " " + unit
            : val;

        return this.renderRow( label, output );
    }

    protected renderDownloadRow(
        label: string,
        text: string,
        href: string,
        title: string
    ) {
        return this.renderRow( 
            label, 
            `<span>${text}</span>
            <a href=${href} target="_blank" title="${title}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>` 
        );
    }

    protected render(): unknown {

        if ( ! this.file ) {
            return nothing;
        }

        return html`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>

                        ${ unsafeHTML( this.renderRow( "Thermal file name", this.file.fileName ) ) }

                        ${ unsafeHTML( this.renderDownloadRow( "Thermal file URL", this.file.thermalUrl, this.file.thermalUrl, "Download thermal file" ) ) }

                        ${ this.file.visibleUrl 
                            ? unsafeHTML( this.renderDownloadRow( 
                                "Visible file URL", 
                                this.file.visibleUrl, 
                                this.file.visibleUrl, 
                                "Download visible file" 
                            ) )
                            : nothing 
                        }

                        ${ unsafeHTML( this.renderRow( "Time", TimeFormat.human( this.file.timestamp ) ) ) }

                        ${ unsafeHTML( this.renderNumericalRow(
                            "Duration",
                            this.file.duration,
                            0,
                            "ms"
                        ) ) }

                        ${ unsafeHTML( this.renderRow( 
                            "Resolution", 
                            `${this.file.width} x ${this.file.height} px <small class="opaque">${this.file.pixels.length} pixels</small>` 
                        ) ) }

                        ${ unsafeHTML( this.renderNumericalRow(
                            "Bytesize",
                            this.file.bytesize,
                            0
                        ) ) }
                        
                        ${ unsafeHTML( this.renderNumericalRow(
                            "Maximal temperature",
                            this.file.max,
                            10,
                            "°C"
                        ) ) }

                        ${ unsafeHTML( this.renderNumericalRow(
                            "Minimal temperature",
                            this.file.min,
                            10,
                            "°C"
                        ) ) }

                        

                    </table>

                    <h2>File type</h2>
                    <table>
                    ${ unsafeHTML( this.renderRow(
                        "Type",
                        this.file.service.parser.name
                    ) ) }
                    ${ unsafeHTML( this.renderRow(
                        "Description",
                        this.file.service.parser.description
                    ) ) }

                    <tr>
                        <td>Supported devices</td>
                        <td><ul>${this.file.service.parser.devices.map( device => html`<li>
                            <h3><a href="${device.deviceUrl}" target="_blank">${device.deviceName}</a></h3>
                            <div class="small">${device.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${device.manufacturerUrl}" target="_blank">${device.manufacturer}</a></div>
                        </li>` )}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `
    }

}