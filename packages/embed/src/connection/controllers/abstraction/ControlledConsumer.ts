import { consume } from "@lit/context";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { ControlledClientContext, ControlledContentContext } from "../controllerContexts";
import { ClientController } from "../ClientController";
import { ContentController } from "../ContentController";
import { CallbacksManager } from "@labirthermal/core";

export abstract class ControlledConsumer extends BaseElement {

    /**  */
    @consume({ context: ControlledClientContext, subscribe: true })
    protected client!: ClientController<any>;

    @consume({ context: ControlledContentContext, subscribe: true })
    protected content!: ContentController<any>;

    private static readonly LISTENER_SUFFIX = "__consumer_internal";

    private _listenerId: string = `${this.UUID}_${ControlledConsumer.LISTENER_SUFFIX}`;

    private get listenerID(): string {
        return this._listenerId;
    }

    private forAllListeners( callback: ( manager: CallbacksManager<any> ) => void ): void {
        [
            // Content updates
            this.content.onFolderUpdate,
            this.content.onBreadcrumbUpdate,
            this.content.onSubfoldersUpdate,
            this.content.onFilesUpdate,
            this.content.onGridUpdate,
            this.content.onFileUpdate,
            this.content.onLoadingChange,

            // Client updates
            this.client.onLoadingChange,
            this.client.onIdentity,

        ].forEach( manager => callback( manager ) );
    }

    private subscribeUpdateToManager(
        manager: CallbacksManager<any>
    ): void {
        manager.set(
            this.listenerID,
            () => this.requestUpdate()
        );
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        // Clear all listeners
        this.forAllListeners( manager => {
            manager.delete( this.listenerID );
        } );

    }
    

    /** Refresh this component upon folder change */
    protected subscribeToFolderUpdates(): void {

        this.subscribeUpdateToManager(
            this.content.onFolderUpdate
        );
    }

    /** Refresh this component upon breadcrumb change */
    protected subscribeToBreadcrumbUpdates(): void {
        this.subscribeUpdateToManager(
            this.content.onBreadcrumbUpdate
        );
    }

    /** Refresh this component upon subfolders change */
    protected subscribeToSubfoldersUpdates(): void {
        this.subscribeUpdateToManager(
            this.content.onSubfoldersUpdate
        );
    }

    /** Refresh this component upon files change */
    protected subscribeToFilesUpdates(): void {
        this.subscribeUpdateToManager(
            this.content.onFilesUpdate
        );
    }
    
    /** Refresh this component upon grid change */
    protected subscribeToGridUpdates(): void {
        this.subscribeUpdateToManager(
            this.content.onGridUpdate
        );
    }

    /** Refresh this component upon file change */
    protected subscribeToFileUpdates(): void {
        this.subscribeUpdateToManager(
            this.content.onFileUpdate
        );
    }

    /** Refresh this component upon content loading changes */
    protected subscribeToContentloadingChanges(): void {
        this.subscribeUpdateToManager(
            this.content.onLoadingChange
        );
    }

    /** Refresh whenever identity changes */
    protected subscribeToIdentityChanges(): void {
        this.subscribeUpdateToManager(
            this.client.onIdentity
        );
    }

    /** Refresh this component upon client loading changes */
    protected subscribeToClientloadingChanges(): void {
        this.subscribeUpdateToManager(
            this.client.onLoadingChange
        );
    }

}