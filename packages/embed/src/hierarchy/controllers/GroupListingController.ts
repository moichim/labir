import { GroupController } from "./GroupController";
import { IBaseElement } from "../../controllers/IBaseElement";
import { AbstractHierarchyController } from "./AbstractHierarchyController";
import { AbstractFileResult, Instance, ThermalFileReader, ThermalGroup, TimeFormat } from "@labirthermal/core";
import { FileController } from "./FileController";
import { html, nothing, PropertyValueMap } from "lit";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";

export enum GroupOrderby {
    DATE = "date",
    LABEL = "label",
    MANUAL = "manual"
}

export enum GroupOrdering {
    ASC = "asc",
    DESC = "desc"
}

type IHostProperties = {
    orderby: GroupOrderby;
    ordering: GroupOrdering;
}

export interface IElementWithGroupListingController extends IBaseElement, IHostProperties {
    groupController: GroupController;
    fileController: FileController;
    groupListingController: GroupListingController;
}

export class GroupListingController extends AbstractHierarchyController<IElementWithGroupListingController> {

    private _UUID: string;

    public get UUID(): string {
        return this._UUID;
    }

    private get group(): ThermalGroup {
        return this.host.groupController.groupObject;
    }

    private backup: Set<ThermalFileReader> = new Set();

    public get hasBackup(): boolean {
        return this.backup.size > 0;
    }

    public constructor(host: IElementWithGroupListingController) {
        super(host);
        this._UUID = host.UUID + "_group-display-controller";
    }

    public clearBackup(): void {
        this.backup.clear();
    }

    public backupReaders(
        instances: Instance[]
    ): void {
        this.backup.clear();
        instances.forEach(instance => this.backup.add(instance.reader));
    }

    public async restoreTheEntireBackup(): Promise<void> {
        this.host.fileController.removeInstance();

        const requests = Array.from(this.backup).map(reader => reader.createInstance(this.group));

        await Promise.all(requests);
    }

    public async showOneAndBackup(
        instance: Instance
    ): Promise<void> {
        const reader = instance.reader;
        this.backup.clear();
        this.backupReaders(this.group.files.value);
        this.host.fileController.removeInstance();
        this.group.files.removeAllInstances();
        await reader.createInstance(this.group);
    }

    public static CLASS_TABLE: string = "group-listing-table";
    public static CLASS_COLUMNS: string = "group-listing-columns";

    private _numColumns: number = 3;
    private _asTable: boolean = false;

    public setNumColumns(numColumns: number): void {
        this._numColumns = numColumns;
        this.host.requestUpdate();
    }

    public setAsTable(asTable: boolean): void {
        this._asTable = asTable;
        this.host.requestUpdate();
    }

    public renderListContainer(
        children: unknown
    ): unknown {

        const styles: StyleInfo = {
            width: "100%"
        };

        if (this._asTable) {
            styles.display = "flex";
            styles.flexDirection = "column";
            styles.gap = "1em";
        } else {
            styles.display = "grid";
            styles.gap = "1em";
            styles.gridTemplateColumns = `repeat(${this._numColumns}, 1fr)`;
        }

        return html`
            <div style=${styleMap(styles)}>
                ${children}
            </div>
        `;

    }

    private _renderButton(
        label: string,
        tooltip: string,
        active: boolean,
        onClick: () => void,
        slot?: string
    ): unknown {
        return html`
            <thermal-btn
                tooltip=${tooltip}
                variant=${active ? "foreground" : "default"}
                @click=${onClick}
                slot=${slot}
            >
                ${label}
            </thermal-btn>
        `;
    }

    public renderLayoutSwitch(
        slot?: string
    ): unknown {

        return [
            this._renderButton(
                "Table View",
                "Switch to table view",
                this._asTable,
                () => this.setAsTable(true),
                slot
            ),
            this._renderButton(
                "Grid View",
                "Switch to grid view",
                !this._asTable,
                () => this.setAsTable(false),
                slot
            )
        ];

    }

    public renderColumnsSlider(
        slot?: string
    ): unknown {

        if (this._asTable) {
            return nothing;
        }

        const max = Math.min(3, this.group.files.value.length);

        const divStyles: StyleInfo = {
            display: "flex",
            flexDirection: "column"
        };

        return html`<div slot="${slot}" style=${styleMap(divStyles)}>
        <input type="range" min="1" max="${max}" step="1" .value=${this._numColumns} @input=${(e: Event) => {
                const target = e.target as HTMLInputElement;
                this.setNumColumns(parseInt(target.value, 10));
            }}>
        <div style=${styleMap({ textAlign: "center", fontSize: "small" })}>Columns: ${this._numColumns} sloupců</div>
        </div>`;

    }




    hostConnected(): void {
        // throw new Error("Method not implemented.");
    }

    hostDisconnected(): void {
        // throw new Error("Method not implemented.");
    }

    hostUpdatedWatcher(value: PropertyValueMap<IElementWithGroupListingController>): void {
        // throw new Error("Method not implemented.");
    }

    private _orderFiles(): Instance[] {
        const files = Array.from(this.group.files.value);

        switch (this.host.orderby) {
            case GroupOrderby.LABEL:
                if (this.host.ordering === GroupOrdering.ASC) {
                    files.sort((a, b) => (a.label ?? "").localeCompare(b.label ?? ""));
                } else {
                    files.sort((a, b) => (b.label ?? "").localeCompare(a.label ?? ""));
                }
                break;
            case GroupOrderby.DATE:
                if (this.host.ordering === GroupOrdering.ASC) {
                    files.sort((a, b) => a.timestamp - b.timestamp);
                } else {
                    files.sort((a, b) => b.timestamp - a.timestamp);
                }
                break;
        }

        return files;

    }

    public renderList(
        fileRendererFn: (file: Instance) => unknown,
        emptyRendererFn?: () => unknown,
    ): unknown {

        if (this.group.files.value.length === 0) {
            return emptyRendererFn?.();
        }

        return this._orderFiles().map(fileRendererFn);

    }

    public renderListHeader(
        slot?: string
    ): unknown {

        const divStyles: StyleInfo = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            boxSizing: "border-box",
            background: "var(--thermal-background)",
            borderRadius: "var(--thermal-radius)",
            padding: "0.5em",
            gap: "0.5em"
        };

        return html`<div slot="${slot}" style=${styleMap(divStyles)}>
            <div>${this.group.files.value.length} souborů</div>
            <thermal-btn
                tooltip="Smazat všechny soubory"
                icon="trash"
                iconStyle="solid"
                @click=${() => {
                this.clearBackup();
                this.group.files.removeAllInstances();
            }}
            >Smazat</thermal-btn>
            <group-dropin-input 
                slot="bar-pre"
                .onDrop=${async (results: AbstractFileResult[]) => {

                const existingFiles = this.group.files.value.map(file => file.fileName);

                await Promise.all(results
                    .filter(result => {
                        if (!(result instanceof ThermalFileReader)) {
                            return false;
                        }

                        return !existingFiles.includes(result.fileName);

                    })
                    .map(async result => {
                        if (result instanceof ThermalFileReader) {
                            return await result.createInstance(this.group);
                        }
                    })
                );

                this.backupReaders(this.group.files.value);
            }}
            >Přidat další soubory</group-dropin-input>
            <group-download-dropdown></group-download-dropdown>
            <div style="flex-grow: 1;"></div>
            ${this.renderLayoutSwitch()}
            ${this.renderColumnsSlider()}
        </div>`;

    }

    public renderThumbnail(
        instance: Instance
    ) {

        const showDetail = () => {
            this.showOneAndBackup(instance);
        }

        return html`<file-provider 
            .file=${instance}
            @mouseenter=${() => {
                this.host.groupController.registryController.setHighlight({
                    from: instance.min,
                    to: instance.max
                })
            }}
            @mouseleave=${() => {
                this.host.groupController.registryController.setHighlight(undefined);
            }}
        >
            <header style="display: flex; justify-content: flex-start; gap: .5em; align-items: center; background: var(--thermal-background); padding: .5em; width: 100%; box-sizing: border-box; height: 3em; border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;">
                <div style="cursor: pointer;" @click=${showDetail}>
                    <div>${TimeFormat.human(instance.timestamp)}</div>
                    <div style="font-size: small; opacity: .5;">${instance.fileName}</div>
                </div>

                <div style="flex-grow: 1;"></div>
                <thermal-btn
                    tooltip="Smazat soubor"
                    icon="trash"
                    iconStyle="micro"
                    @click=${async () => {

                        this.backup.delete(instance.reader);

                        this.group.files.removeAllInstances();

                        await this.restoreTheEntireBackup();

                        this.host.requestUpdate();

                    }}
                ></thermal-btn>
                <file-download-dropdown>
                    <thermal-icon
                        icon="download"
                        variant="micro"
                        slot="invoker"
                        style="width: 1.1em;"
                    ></thermal-icon>
                </file-download-dropdown>
                <thermal-btn
                    icon="range"
                    iconStyle="outline"
                    @click=${() => {
                        this.host.groupController.registryController.registryObject.range.imposeRange({
                            from: instance.min,
                            to: instance.max
                        });
                    }}
                ></thermal-btn>
                <thermal-btn
                    tooltip="Zobrazit detail"
                    icon="eye"
                    iconStyle="solid"
                    @click=${showDetail}
                ></thermal-btn>
            </header>
            <file-canvas></file-canvas>
        </file-provider>`;

    }

    public renderDetailHeader(
        instance: Instance,
        slot?: string
    ): unknown {

        const divStyles: StyleInfo = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            boxSizing: "border-box",
            background: "var(--thermal-background)",
            borderRadius: "var(--thermal-radius)",
            padding: "0.5em",
            gap: "0.5em"
        };

        return html`<div style=${styleMap(divStyles)} slot=${slot}>
            <thermal-btn
                icon="back"
                iconStyle="micro"
                tooltip="Zpět na Vašich ${this.backup.size} souborů"
                variant="foreground"
                @click=${() => {
                    if ( this.backup.size <= 1 ) {
                        this.group.files.removeAllInstances();
                        this.host.fileController.removeInstance();
                        this.host.requestUpdate();
                    } else {
                        this.restoreTheEntireBackup();
                    }
                }}
            >Zpět</thermal-btn>
            ${instance.fileName}
            <file-info-button><thermal-btn slot="invoker" icon="info" iconStyle="solid">Informace o souboru</thermal-btn></file-info-button>
            <file-download-dropdown></file-download-dropdown>
        </div>`;
    }

    public renderDetailBody(
        instance: Instance
    ): unknown {
        return html``;
    }




}