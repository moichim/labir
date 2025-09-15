import { GetGridDataType, FileInfo, FolderInfo  } from "@labir/server";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ClientConsumer } from "../../ClientConsumer";

@customElement("subfolders-grid")
export class SubfoldersGrid extends ClientConsumer {

    @property({ type: Object })
    public grid?: GetGridDataType;

    @property(  { type: String } )
    public slug: string = "default_group";

    @state()
    private columnCount: number = 0;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( "grid" in _changedProperties ) {
            this.columnCount = Object.keys( this.grid?.header ?? {} ).length;
        }
    }

    private renderHeader(
        header: GetGridDataType["header"]
    ): unknown {

        const items = Object.values( header );

        if ( items.length === 0 ) {
            return nothing;
        }

        return html`<thead>
            ${items.map( this.renderHeaderCell.bind(this) )}
        </thead>`;

    }

    private renderHeaderCell(
        folder: FolderInfo,
    ): unknown {
        return html`<th class="folder-header">
            ${folder.name}
        </th>`;
    }


    private renderBody(
        body: GetGridDataType["groups"]
    ): unknown {

        const items = Object.values( body );
        if (items.length === 0) {
            return nothing;
        }

        return html`<tbody>
            ${items.map( this.renderBodyRow.bind(this) )}
        </tbody>`;
    }

    private renderBodyRow(item: GetGridDataType["groups"][number]): unknown {

        const folders = Object.values( item.folders );

        return html`

        <group-provider
            slug="${this.slug + item.label}"
            batch="true"
            autoclear="true"
            style="display: contents;"
        >

            ${this.renderBodyRowCellHeader( item.label, item.from, item.to )}

            <tr>
                ${folders.map( folder => this.renderBodyRowCellBody( folder ) )}
            </tr>

        </group-provider>
        `;
    }

    private renderBodyRowCellHeader( label: string, from: number, to: number ): unknown {
        return html`<tr>
            <td class="folder-header">
                ${label}
            </td>
        </tr>`;
    }

    private renderBodyRowCellBody(
        files: FileInfo[]
    ): unknown {

        return html`
            <td>
                ${files.map( file => this.renderBodyRowCellBodyFile( file ) )}
            </td>
        `;

    }

    private renderBodyRowCellBodyFile(
        file: FileInfo
    ): unknown {
        return html`
            <file-provider
                batch="true"
                autoclear="true"
                thermal="${file.url}"
            >
                
                <file-canvas></file-canvas>
            </file-provider>
        
        `;
    }

    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            font-size: var( --thermal-fs );
            color: var(--thermal-foreground);
            display: block;
        }

        table {
            width: 100%;
            table-layout: fixed;
        }

        tr, td, th {
            margin: 0;
            padding: 0;
            border: none;
            border-collapse: collapse;
            text-align: left;
            width: auto;
            box-sizing: border-box;
        }

        thead {
            position: sticky;
            top: 0;
        }
    
    `;

    protected render(): unknown {

        if (this.grid === undefined) {
            return html`<thermal-loading message="Načítám mřížku"></thermal-loading>`;
        }

        return html`

            <table>
                ${this.renderHeader( this.grid?.header ?? [] )}
                
                ${this.renderBody( this.grid?.groups ?? [] )}
            </table>
        
        ${this.slug}`;
    }

}