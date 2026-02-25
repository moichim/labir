import { customElement, property } from "lit/decorators.js";
import { ControlledConsumer } from "../../../abstraction/ControlledConsumer";
import { FolderInfo } from "@labirthermal/server";
import { html } from "lit";
import { ConnectedLocationSelector, LocationSelectorMode } from "../../selection/move/ConnectedLocationSelector";
import { b } from "vitest/dist/chunks/suite.d.FvehnV49";
import { createRef, ref, Ref } from "lit/directives/ref.js";

@customElement("connected-folder-move-dialog")
export class ConnectedFolderMoveDialog extends ControlledConsumer {

    @property({ type: Object })
    public folder!: FolderInfo;

    private selectionRef: Ref<ConnectedLocationSelector> = createRef();

    private renderTrigger(): unknown {

        return html`<thermal-btn
            tooltip="Přesunout složku"
            slot="invoker"
            icon="move"
            iconStyle="mini"
        ></thermal-btn>`;

    }

    private renderDialog(): unknown {


        const onSelect = async ( path: string ) => {


            if ( this.folder || ! this.selectionRef.value) {

                const result = await this.client.api.routes.post.moveFolder(
                    this.folder.path,
                    path
                ).execute();

                if ( result.success ) {
                    this.selectionRef.value?.closeDialogue();

                    await this.display.navigateToFolderAndLoad( path );
                }

            }

        }

        return html`<connected-location-selector
            mode=${LocationSelectorMode.FOLDER}
            .asDialogue=${true}
            operationLabel="Přesunout sem"
            .onSelect=${onSelect}
            ${ref(this.selectionRef)}
        >
            ${this.renderTrigger()}
        </connected-location-selector>`;
    }

    protected render(): unknown {
        return this.renderDialog();
    }


}