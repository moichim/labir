import { css, CSSResultGroup, html } from "lit";
import { customElement } from "lit/decorators.js";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";
import { FolderListDisplayMode } from "../../DisplayController";

@customElement("connected-config-subfolder-mode")
export class ConnectedConfigSubfolderMode extends ControlledConsumer {

    static styles?: CSSResultGroup | undefined = css`

        :host {
            font-size: var(--thermal-fs);
        }

        thermal-dropdown thermal-btn {
            display: block;
        }
    
    `;

    connectedCallback(): void {
        super.connectedCallback();

        this.content.subscribeToSubfoldersUpdates(this);
        this.display.subscribeToFolderDisplayMode(this);
        
    }

    protected renderToggleButton(
        active: boolean,
        onClick: () => void,
        icon: string,
        iconStyle: string,
        tooltip: string
    ) {

        return html`<thermal-btn
            variant=${active ? "foreground" : "default"}
            @click=${onClick}
            icon=${icon}
            iconStyle=${iconStyle}
            tooltip=${tooltip}
        ></thermal-btn>`;

    }


    protected render(): unknown {

        const items = [
            this.renderToggleButton(
                this.display.folderListDisplayMode === FolderListDisplayMode.LIST,
                () => this.display.setFolderDisplayMode(FolderListDisplayMode.LIST),
                "folder",
                "micro",
                "Seznam složek"
            ),
            this.renderToggleButton(
                this.display.folderListDisplayMode === FolderListDisplayMode.TABLE,
                () => this.display.setFolderDisplayMode(FolderListDisplayMode.TABLE),
                "list",
                "solid",
                "Tabulka složek"
            )
        ];


        if ( this.display.canHaveGrid( this.content.subfolders ) ) {
            items.push(
                this.renderToggleButton(
                    this.display.folderListDisplayMode === FolderListDisplayMode.GRID,
                    () => this.display.setFolderDisplayMode(FolderListDisplayMode.GRID),
                    "grid",
                    "solid",
                    "Mřížka složek"
                )
            );
        }


        return items;


    }

}