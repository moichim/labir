import { customElement } from "lit/decorators.js";
import { ControlledConsumer } from "../abstraction/ControlledConsumer";
import { html, nothing } from "lit";
import { FolderInfo } from "@labirthermal/server";
import { FileInfo } from "packages/server/client/dist";
import { ifDefined } from "lit/directives/if-defined";

@customElement("test-consumer")
export class Consumer extends ControlledConsumer {

    connectedCallback(): void {
        super.connectedCallback();
        this.content.subscribeToFileUpdates( this );
        this.content.subscribeToFolderUpdates( this );
        this.content.subscribeToSubfoldersUpdates( this );
        this.content.subscribeToGridUpdates( this );
        this.client.subscribeToIdentityChanges( this );
    
    }

    private renderGridHeader(): unknown {

        if ( this.content.grid === undefined ) {
            return nothing;
        }

        const items = Object.values( this.content.grid.header );

        return items.map( header => html`<span style="margin-right: 10px; font-weight: bold;">${ header.name }</span>` );

    }

    private renderGridGroups(): unknown {

        if ( this.content.grid === undefined ) {
            return nothing;
        }

        const items = Object.values( this.content.grid.groups );

        return items.map( group => html`<div>
            <h4>${ group.label }</h4>
            </div>
            ` );


    }

    protected render(): unknown {

        this.log( this.content.file );

        return html`<div>

            ${ this.content.file !== undefined ? html`<file-canvas></file-canvas>` : nothing }

            ${ this.content.file !== undefined ? html`<p>Current File: ${ this.content.file.fileName }</p>` : nothing }

            <folder-files-new
                .onFileClick=${ ( file: FileInfo ) => {
                    this.display.navigateToPreloadedFile(
                        this.content.folder!,
                        file
                    )
                } }
            ></folder-files-new>


            <folder-subfolders-new
                .onFolderClick=${ ( folder: FolderInfo ) => {
                    this.display.navigateToFolderAndLoad( folder.path );
                } }
            ></folder-subfolders-new>

            ${this.content.folder
                ? html`<folder-edit-dialog-new 
                    .folder=${ this.content.folder }
                    label="editovat složku"
                ></folder-edit-dialog-new>`
                : nothing
            }

            <p>Consumer Component</p>
            <p>Content Folder Name: ${ this.content.folder?.name }</p>
            <button @click=${async () => {
                await this.display.navigateToFolderAndLoad("/mikroklima/root");
                this.log( this.content.folder );
            }}>Load /mikroklima/root Folder</button>
            <button @click=${async () => {
                this.log( this.client.identity );
            }}>Log Identity</button>
            <button @click=${async () => {
                if ( this.content.folder?.path ) {
                    this.display.navigateToFolderAndLoad( this.content.folder.path )
                }
            }}>Grid</button>
            <button @click=${async () => {
                if ( this.content.folder?.path ) {
                    
                }
            }}>list</button>
            <div>
            ${this.content.subfolders.map( subfolder => {
                return html`<server-folder-thumbnail 
                    .folder=${ subfolder }
                    @click=${() => {
                        this.display.navigateToFolderAndLoad( subfolder.path );
                    }}
                ></server-folder-thumbnail>`;
            } )}
            </div>

            <i>${this.client.identity?.user}</i>

            <div>

            <h2>Grid Content</h2>

                ${this.renderGridHeader()}
                ${this.renderGridGroups()}

            </div>
        </div>`;
    }

}