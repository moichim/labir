import { customElement, state } from "lit/decorators.js";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";
import { css, CSSResultGroup, html, nothing } from "lit";
import { ThermalDialog } from "packages/embed/src/ui/Dialog";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { ConnectedLocationSelector } from "./move/ConnectedLocationSelector";

@customElement("connected-selection-actions")
export class ConnectedSelectionActions extends ControlledConsumer {

    @state()
    private progress: number = 0;

    @state()
    private total: number = 0;

    private dialogDeleteRef: Ref<ThermalDialog> = createRef();
    private dialogSaveAnalysesRef: Ref<ThermalDialog> = createRef();
    private dialogClearAnalysesRef: Ref<ThermalDialog> = createRef();
    private dialogMoveRef: Ref<ConnectedLocationSelector> = createRef();


    connectedCallback(): void {
        super.connectedCallback();
        this.selection.subscribeToSelectionChange(this);
        this.content.subscribeToFilesUpdates(this);
    }

    private getCount(): number {
        return this.selection.array.length;
    }

    private renderTrigger(): unknown {

        return html`<span slot="invoker">${this.getCount()} vybraných</span>`;

    }

    private renderOptionClear(): unknown {

        return html`<thermal-btn 
            @click=${() => {
                this.selection.clearSelection();
            }}
            slot="option"
        >Zrušit výběr</thermal-btn>`;

    }

    private renderOptionAll(): unknown {

        const allSelected = this.selection.array.length === this.content.files?.length;

        const callback = allSelected
            ? undefined
            : () => {
                if (this.content.files) {
                    this.selection.addMultipleToSelection(this.content.files);
                }
            }

        return html`<thermal-btn
            @click=${callback}
            slot="option"
            disabled=${allSelected ? "true" : "false"}
        >Vybrat všechny</thermal-btn>`;


    }

    

    private renderOptionDelete(): unknown {

        return html`<thermal-btn
            slot="option"
            @click=${ () => {
                this.dialogDeleteRef.value?.setOpen();
            } }
        >Trvale smazat</thermal-btn>`;

    }

    private renderDialogDelete(): unknown {

        const callback = async () => {

            this.progress = 0;
            this.total = this.selection.array.length;

            await this.selection.forEverySelectedAsync(async file => {

                await this.client.api.routes.post.deleteFile(file.path, file.fileName).execute();

                this.progress++;

            });

            this.progress = 0;
            this.total = 0;

            this.dialogDeleteRef.value?.setClose();
            this.selection.clearSelection();
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
            
                <p>Opravdu chcete trvale smazat ${this.selection.array.length} souborů?</p>

                <ul>
                    ${this.selection.array.map(file => html`<li>${file.fileName}</li>`)}
                </ul>

                ${progress}
            
            </div>

            <thermal-btn @click=${callback} slot="button" variant="primary">Proveď</thermal-btn>

        </thermal-dialog>`;

    }

    private renderOptionClearAnalyses(): unknown {

        return html`<thermal-btn
            slot="option"
            @click=${ () => {
                this.dialogClearAnalysesRef.value?.setOpen();
            } }
        >Smazat analýzy na serveru</thermal-btn>`;

    }

    private renderDialogClearAnalyses(): unknown {

        const callback = async () => {

            this.progress = 0;
            this.total = this.selection.array.length;

            await this.selection.forEverySelectedAsync(async file => {

                await this.client.api.routes.post.updateFile(
                    file.path,
                    file.fileName
                ).clearAnalyses().execute();

                this.progress++;

            });

            this.progress = 0;
            this.total = 0;

            this.dialogClearAnalysesRef.value?.setClose();
            this.selection.clearSelection();
            this.display.reloadCurrentState();

            return true;

        }

        let progress: unknown = nothing;

        if (this.progress > 0) {
            progress = html`<div>
                <div slot="option">Mažu analýzy ${this.progress}. z ${this.total} souborů...</div>
                <div class="progress">
                    <div class="progress-bar" style="width: ${(this.progress / this.total) * 100}%"></div>
                </div>
            </div>`;
        }

        return html`<thermal-dialog
            label="Smazat analýzy u vybraných souborů"
            ${ref(this.dialogClearAnalysesRef)}
        >

            <div slot="content">
            
                <p>Opravdu chcete trvale smazat analýzy u ${this.selection.array.length} souborů?</p>

                <ul>
                    ${this.selection.array.map(file => html`<li>${file.fileName}</li>`)}
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
                this.dialogMoveRef.value?.openDialogue();
            }}
        >Přesunout</thermal-btn>`;

    }


    private renderDialogMove(): unknown {
        return html`<connected-location-selector
            .asDialogue=${true}
            ${ ref( this.dialogMoveRef )}
            mode="file"
            dialogTitle="Přesunout vybrané soubory"
            operationLabel="Přesunout sem"
            .onSelect=${async ( path: string ) => {
                

                await this.selection.forEverySelectedAsync( async( file ) => {

                    const result = await this.client.api.routes.post.moveFile(
                        file.path,
                        file.fileName,
                        path
                    ).execute();

                    this.log( result );

                    this.log( `Přesouvám ${file.fileName} z ${file.path} do ${path}. Výsledek: ${result.success}` );

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
            ${this.renderOptionDelete()}
            ${this.renderOptionClearAnalyses()}
            ${this.renderOptionMove()}
        </thermal-dropdown>`;

    }

    private renderDalogs(): unknown {
        return [
            this.renderDialogDelete(),
            this.renderDialogClearAnalyses(),
            this.renderDialogMove()
        ];
    }

    protected render(): unknown {

        if (this.selection.getSelectedFiles().length === 0) {
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