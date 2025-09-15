import { FolderInfo, GridGrouping } from "@labir/server";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { subfoldersModeContext, subfoldersModeSetterContext, subgildersGridByMode, subgildersGridByModeSetter } from "../../../ClientContext";
import { FolderMode } from "../../../composition/AppWithState";
import { AbstractModeBar } from "./AbstractModeBar";

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

    static styles?: CSSResultGroup | undefined = [
        super.styles as CSSResultGroup,
        css`

        thermal-dropdown thermal-btn {
            display: block;
        }
    
    `
    ];


    protected render(): unknown {
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
            this.mode === FolderMode.GRID,
            () => {
                this.setMode(FolderMode.GRID);
            },
            "grid",
            undefined,
            "Mřížka souborů",
        )}

            ${this.mode === FolderMode.GRID
                ? html`<thermal-dropdown>
                        <span slot="invoker">Po ${this.by}</span>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.HOUR)}
                        >
                            Po hodinách
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.DAY)}
                        >
                            Po dnech
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            slot="option"
                            @click=${() => this.setBy(GridGrouping.WEEK)}
                        >
                            Po týdnech
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.MONTH)}
                        >
                            Po měsících
                        </thermal-btn>
                        </div>
                        <div slot="option">
                        <thermal-btn 
                            @click=${() => this.setBy(GridGrouping.YEAR)}
                        >
                            Po letech
                        </thermal-btn>
                        </div>
                    </thermal-dropdown>`
                : nothing
            }
        `;
    }

}