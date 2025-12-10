import { customElement } from "lit/decorators.js";
import { ControlledConsumer } from "../abstraction/ControlledConsumer";
import { html, nothing } from "lit";

@customElement("test-consumer")
export class Consumer extends ControlledConsumer {

    connectedCallback(): void {
        super.connectedCallback();
        this.subscribeToFolderUpdates();
        this.subscribeToSubfoldersUpdates();
        this.subscribeToGridUpdates();
        this.subscribeToIdentityChanges();
    }

    private renderGridHeader(): unknown {

        if ( this.content.grid === undefined ) {
            return nothing;
        }

        const items = Object.values( this.content.grid.header );

        return items.map( header => html`<span style="margin-right: 10px; font-weight: bold;">${ header.name }</span>` );

    }

    private renderGridGroups(): unknown {

        this.log( this.content.grid );

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
        return html`<div>

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
                await this.content.fetchAllContentByState("/mikroklima/root");
                this.log( this.content.folder );
            }}>Load /mikroklima Folder</button>
            <button @click=${async () => {
                this.log( this.client.identity );
            }}>Log Identity</button>
            <button @click=${async () => {
                if ( this.content.folder?.path ) {
                    await this.content.fetchAllContentByState(this.content.folder?.path, undefined, true);
                }
            }}>Grid</button>
            <button @click=${async () => {
                if ( this.content.folder?.path ) {
                    await this.content.fetchAllContentByState(this.content.folder?.path, undefined, false);
                }
            }}>list</button>
            <div>
            ${this.content.subfolders.map( subfolder => {
                return html`<server-folder-thumbnail 
                    .folder=${ subfolder }
                    @click=${() => {
                        console.log( "jsem tu", subfolder );
                        this.content.dangerouslySetFolder( subfolder );
                        this.content.fetchAllContentByState( subfolder.path );
                        this.log( subfolder );
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