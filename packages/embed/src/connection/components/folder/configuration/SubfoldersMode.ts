import { FolderInfo, GetGridDataType, GridGrouping } from "@labir/server";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { subfoldersModeContext, subfoldersModeSetterContext, subgildersGridByMode, subgildersGridByModeSetter } from "../../../ClientContext";
import { FolderMode } from "../../../composition/AppWithState";
import { AbstractModeBar } from "./AbstractModeBar";
import { T } from "../../../../translations/Languages";
import { t } from "i18next";

@customElement("subfolders-mode")
export class SubfoldersMode extends AbstractModeBar {

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: Object })
    public subfolders?: FolderInfo[];

    @state()
    @consume({ context: subfoldersModeContext, subscribe: true })
    private mode: FolderMode = FolderMode.LIST;

    @state()
    @consume({ context: subfoldersModeSetterContext, subscribe: true })
    private setMode: (mode: FolderMode) => void = () => { };

    @state()
    @consume({ context: subgildersGridByMode, subscribe: true })
    private by: GridGrouping = GridGrouping.HOUR;

    @state()
    @consume({ context: subgildersGridByModeSetter, subscribe: true })
    private setBy: (mode: GridGrouping) => void = () => { };

    @property({ type: Array })
    public selectedFolders: string[] = [];

    @state()
    protected selectedFoldersUpdate: string[] = [];

    @property({type: Function})
    public onSelectionChange?: ( selected: string[] ) => void;

    @property({type: Object})
    public grid?: GetGridDataType;

    protected get mayHaveGrid(): boolean {
        return this.subfolders?.find( f => f.lrc_count > 0 ) !== undefined;
    }

    static styles?: CSSResultGroup | undefined = [
        super.styles as CSSResultGroup,
        css`

        :host {
            font-size: var(--thermal-fs);
        }

        thermal-dropdown thermal-btn {
            display: block;
        }

        .selection-table {
            display: table;
            width: 100%;
            border-collapse: collapse;
        }

        .selection-row {
            
            display: table-row;

            padding-bottom: .5em;
            

             &.disabled {
                cursor: not-allowed;
                opacity: .5;
                .selection-cell__name {
                    text-decoration: line-through;
                }
            }

            &.selected {
                .selection-cell {
                    background: var( --thermal-background );
                }
            }
        }

        .selection-cell {
            display: table-cell;
            padding: .25em;

            margin-bottom:.25em;

            border-top: 5px solid var(--thermal-slate-light);
            border-bottom: 5px solid var(--thermal-slate-light);

            &:first-child {
                width: 1em;
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
                border-right: 0;
            }

            &:last-child {
                width: 4em;
                border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
                text-align: right;
                border-left: 0;
            }

        }

        .has-badge {
        
            position: relative;

            &::after {
                content: '';
                position: absolute;
                top: -.3em;
                right: -.3em;
                width: .8em;
                height: .8em;
                background: var(--thermal-danger, #f00);
                border-radius: 50%;
                pointer-events: none;
            }
        
        }
    
    `
    ];

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        if ( this.selectedFolders.length === 0 && this.grid !== undefined ) {
            if ( this.grid !== undefined ) {
                const header = Object.keys( this.grid.header );
                this.selectedFolders = header;
                this.selectedFoldersUpdate = [ ...this.selectedFolders ];
            }
        }
    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( _changedProperties.has("selectedFolders") ) {
            this.selectedFoldersUpdate = [ ...this.selectedFolders ];
        }

        if (  _changedProperties.has("grid") ) {
            if ( this.grid !== undefined ) {
                const header = Object.keys( this.grid.header );
                this.selectedFolders = header;
            }
            
        }
    }

    protected enqueueFolderShow(
        folder: FolderInfo
    ): void {
        if ( ! this.selectedFoldersUpdate.includes( folder.slug ) ) {
            this.selectedFoldersUpdate.push( folder.slug );
            this.requestUpdate();
        }
    }

    protected enqueueFolderHide(
        folder: FolderInfo
    ): void {
        if ( this.selectedFoldersUpdate.includes( folder.slug ) ) {
            this.selectedFoldersUpdate = this.selectedFoldersUpdate.filter( f => f !== folder.slug );
            this.requestUpdate();
        }
    }

    protected async persistChanges(): Promise<boolean> {
        if ( this.onSelectionChange ) {
            this.onSelectionChange( this.selectedFoldersUpdate );
        }

        return true;
    }

    protected isFolderSelected(
        folder: FolderInfo
    ): boolean {
        if ( this.selectedFoldersUpdate.length === 0 ) {
            // return true;
        }
        return this.selectedFoldersUpdate.includes( folder.slug );
    }

    protected renderFolderToggleButton(
        folder: FolderInfo
    ): unknown {

        const selected = this.isFolderSelected( folder );

        const disabled = folder.lrc_count === 0;

        const click = () => {
            this.log( selected, folder );
            if ( disabled ) return;
            if ( selected ) {
                this.enqueueFolderHide( folder );
            } else {
                this.enqueueFolderShow( folder );
            }
        }

        const classes: string[] = [ "selection-row" ];

        if ( disabled ) { classes.push( "disabled" ); }
        if ( selected ) { classes.push( "selected" ); }

        const icon = disabled
            ? "close"
            : selected ? "close" : "check";

        return html`<div 
            class="${classes.join( " " )}"
            @click=${click.bind(this)}
        >
            <div class="selection-cell selection-cell__checkbox">
                <thermal-icon
                    .icon=${ icon }
                    variant="micro"
                    style="width: 1em; display: block;"
                ></thermal-icon>
            </div>
            <div
                class="selection-cell selection-cell__name"
                variant=${selected ? "foreground" : "default"}
                
            >
                ${folder.name}
            </div>
            <div class="selection-cell selection-cell__count">
                ${folder.lrc_count}
                <thermal-icon
                    icon="image"
                    variant="micro"
                    style="width: 1em;display: inline-block; vertical-align: baseline;"
                ></thermal-icon>
            </div>
        </div>`;

    }

    protected renderSelectionTable(): unknown {

        if ( this.grid === undefined ) return nothing;

        return html`

            <div>

                <div class="selection-table">
                ${this.grid.all_subdirectories 
                    ? Object
                    .values( this.grid.all_subdirectories )
                    .map( folder => this.renderFolderToggleButton( folder )
                    )
                : nothing
                }
                </div>

            </div>
        `;
    }

    protected get availableFolders(): string[] {

        if (this.grid === undefined) {return []}

        return this.grid.all_subdirectories
            ? Object
                .values( this.grid.all_subdirectories )
                .filter( f => f.lrc_count > 0 )
                .map( f => f.slug )
            : [];


    }


    protected render(): unknown {

        const hasBadge = this.selectedFolders.length !== this.availableFolders.length;

        return html`
            ${this.renderToggleButton(
            this.mode === FolderMode.LIST,
            () => {
                this.setMode(FolderMode.LIST);
            },
            "folder",
            undefined,
            "Seznam složek",
        )}

        ${this.renderToggleButton(
            this.mode === FolderMode.TABLE,
            () => {
                this.setMode(FolderMode.TABLE);
            },
            "list",
            undefined,
            "Tabulka složek",
        )}

        ${this.mayHaveGrid 
            ? this.renderToggleButton(
            this.mode === FolderMode.GRID,
            () => {
                this.setMode(FolderMode.GRID);
            },
            "grid",
            undefined,
            "Mřížka souborů",
        ) : nothing}

            ${this.mode === FolderMode.GRID && this.mayHaveGrid
                ? html`<thermal-dropdown>
                        <span slot="invoker">${t(T[`by${this.by}s`])}</span>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.HOUR)}
                        >
                            ${t(T.byhours)}
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.DAY)}
                        >
                            ${t(T.bydays)}
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            slot="option"
                            @click=${() => this.setBy(GridGrouping.WEEK)}
                        >
                            ${t(T.byweeks)}
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.MONTH)}
                        >
                            ${t(T.bymonths)}
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.YEAR)}
                        >
                            ${t(T.byyears)}
                        </thermal-btn>
                        </div>
                    </thermal-dropdown>

                    <thermal-dialog 
                        label="Nastavení mřížky"
                        button="Použít nastavení"
                        .beforeClose=${() => this.persistChanges()}
                    >
                        <thermal-btn 
                            icon="adjustment"
                            iconStyle="micro" 
                            slot="invoker"
                            tooltip="Nastavení mřížky"
                            class="${hasBadge ? "has-badge" : ""}"
                        ></thermal-btn>
                        <div slot="content">
                            <h2>Složky</h2>

                            ${this.renderSelectionTable()}

                            
                        </div>
                    </thermal-dialog>`
                : nothing
            }
        `;
    }

}