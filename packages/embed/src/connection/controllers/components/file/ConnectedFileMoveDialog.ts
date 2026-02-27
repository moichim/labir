import { html, nothing } from "lit";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { ConnectedLocationSelector, LocationSelectorMode } from "../selection/move/ConnectedLocationSelector";
import { customElement, property } from "lit/decorators.js";
import { FileInfo } from "@labirthermal/server";

@customElement( "connected-file-move-dialog" )
export class ConnectedFileMoveDialog extends ControlledConsumer {

    @property({ type: Object })
    public file?: FileInfo;

    private dialogRef: Ref<ConnectedLocationSelector> = createRef();

    connectedCallback(): void {
        super.connectedCallback();

        this.content.subscribeToFileUpdates( this );

    }

    protected render(): unknown {
        
        return html`<connected-location-selector
            .asDialogue=${true}
            ${ref(this.dialogRef)}
            .mode=${LocationSelectorMode.FILE}
            dialogTitle="Přesunout soubor"
            operationLabel="Přesunout do"
            .onSelect=${ async ( path: string ) => {

                if ( !this.file ) {
                    return nothing;
                }

                await this.client.api.routes.post.moveFile(
                    this.file.path,
                    this.file.fileName,
                    path
                ).execute();

                this.dialogRef.value?.closeDialogue();

                this.display.navigateToFolderAndLoad( path );

            } }
        >
            <thermal-btn
                slot="invoker"
                icon="move"
                iconStyle="mini"
                tooltip="Přesunout"
            ></thermal-btn>
        </connected-location-selector>`;

    }


}