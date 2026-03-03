import { customElement, state } from "lit/decorators.js";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";
import { css, CSSResultGroup, html, nothing } from "lit";
import { ThermalDialog } from "packages/embed/src/ui/Dialog";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { ConnectedLocationSelector } from "./move/ConnectedLocationSelector";
import { ThermalGroup, zip } from "@labirthermal/core";
import { consume } from "@lit/context";
import { groupContext } from "../../../../hierarchy/providers/context/GroupContext";

@customElement("connected-folder-selection-actions")
export class ConnectedFolderSelectionActions extends ControlledConsumer {

    @state()
    private progress: number = 0;

    @state()
    private total: number = 0;

    private dialogDeleteRef: Ref<ThermalDialog> = createRef();
    private dialogSaveAnalysesRef: Ref<ThermalDialog> = createRef();
    private dialogClearAnalysesRef: Ref<ThermalDialog> = createRef();
    private dialogMoveRef: Ref<ConnectedLocationSelector> = createRef();

    @consume( { context: groupContext, subscribe: true } )
    private group?: ThermalGroup;


    connectedCallback(): void {
        super.connectedCallback();
        this.selectionFolder.subscribeToSelectionChange(this);
        this.content.subscribeToFilesUpdates(this);
    }

    private getCount(): number {
        return this.selectionFolder.array.length;
    }

    private renderTrigger(): unknown {

        return html`<span slot="invoker">${this.getCount()} vybraných</span>`;

    }

    private renderOptionClear(): unknown {

        return html`<thermal-btn 
            @click=${() => {
                this.selectionFolder.clearSelection();
            }}
            slot="option"
            icon="close"
            iconStyle="micro"
            align="left"
        >Zrušit výběr</thermal-btn>`;

    }

    private renderOptionAll(): unknown {

        const allSelected = this.selectionFolder.array.length === this.content.files?.length;

        const callback = allSelected
            ? undefined
            : () => {
                if (this.content.subfolders) {
                    this.selectionFolder.addMultipleToSelection(this.content.subfolders);
                }
            }

        return html`<thermal-btn
            @click=${callback}
            slot="option"
            disabled=${allSelected ? "true" : "false"}
            icon="bigger"
            iconStyle="mini"
            align="left"
        >Vybrat všechny</thermal-btn>`;


    }

    

    private renderOptionGrid(): unknown {

        return html`<thermal-btn
            slot="option"
            @click=${ () => {
                this.dialogDeleteRef.value?.setOpen();

                this.display


            } }
            icon="grid"
            iconStyle="micro"
            align="left"
        >Zobrazit mřížku ze složek</thermal-btn>`;

    }

    private renderDialogGrid(): unknown {

        const callback = async () => {

            this.progress = 0;
            this.total = this.selectionFolder.array.length;

            await this.selectionFolder.forEverySelectedAsync(async folder => {

                // await this.client.api.routes.post.deleteFolder(folder.path, folder.folderName).execute();

                this.progress++;

            });

            this.progress = 0;
            this.total = 0;

            this.dialogDeleteRef.value?.setClose();
            this.selectionFile.clearSelection();
            this.display.reloadCurrentState();

            return true;

        }

        let progress: unknown = nothing;

        if (this.progress > 0) {
            progress = html`<div>
                <div slot="option">Mažu ${this.progress} z ${this.total} souborů...</div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${(this.progress / this.total) * 100}%"></div>
                </div>
            </div>`;
        }

        return html`<thermal-dialog
            label="Smazat vybrané soubory"
            ${ref(this.dialogDeleteRef)}
        >
            

            <div slot="content">
            
                <p>Opravdu chcete trvale smazat ${this.selectionFolder.array.length} složek?</p>

                <ul>
                    ${this.selectionFolder.array.map(folder => html`<li>${folder.name}</li>`)}
                </ul>

                ${progress}
            
            </div>

            <thermal-btn @click=${callback} slot="button" variant="primary">Proveď</thermal-btn>

        </thermal-dialog>`;

    }


    private renderOptionMove(): unknown {

        return html`<thermal-btn
            slot="option"
            @click=${() => {
                this.log( this.dialogMoveRef.value );
                this.dialogMoveRef.value?.openDialogue();
            }}
            icon="move"
            iconStyle="mini"
            align="left"
        >Přesunout</thermal-btn>`;

    }


    private renderDialogMove(): unknown {
        return html`<connected-location-selector
            .asDialogue=${true}
            ${ ref( this.dialogMoveRef )}
            mode="folder"
            dialogTitle="Přesunout vybrané složky"
            operationLabel="Přesunout do"
            .onSelect=${async ( path: string ) => {
                

                await this.selectionFolder.forEverySelectedAsync( async( folder ) => {

                    await this.client.api.routes.post.moveFolder(
                        folder.path,
                        path
                    ).execute();

                } );

                this.dialogMoveRef.value?.closeDialogue();

                this.display.navigateToFolderAndLoad( path );

            }}
        >
        </connected-location-selector>`;
    }


    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: flex;
            align-items: center;
            gap: .5em;
        }

        thermal-icon {
            width: 1em;
        }

        .progress {
            position: relative;
            width: 100%;
            height: 1em;
            background-color: var( --thermal-slate-dark );
            border-radius: var( --thermal-radius );
            overflow: hidden;
            border: 1px solid var( --thermal-slate-dark );
        }

        .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: var( --thermal-primary );
        }
    
    `;


    private renderDropdownSelection(): unknown {

        return html`<thermal-dropdown
            variant="primary"
        >
            ${this.renderTrigger()}
            ${this.renderOptionClear()}
            ${this.renderOptionAll()}
        </thermal-dropdown>`;

    }

    private renderArrow(): unknown {

        return html`<thermal-icon icon="right" variant="micro"></thermal-icon>`;

    }

    private renderDropdownActions(): unknown {

        return html`<thermal-dropdown
            variant="foreground"
        >
            <span slot="invoker">Zvolte akci</span>
            ${this.renderOptionMove()}
            ${this.renderOptionGrid()}
        </thermal-dropdown>`;

    }

    private renderDalogs(): unknown {
        return [
            this.renderDialogGrid(),
            this.renderDialogMove()
        ];
    }

    protected render(): unknown {

        if (this.selectionFolder.array.length === 0) {
            return nothing;
        }

        return [
            this.renderDropdownSelection(),
            this.renderArrow(),
            this.renderDropdownActions(),
            this.renderDalogs()
        ];

    }


}