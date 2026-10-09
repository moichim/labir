import { GroupController } from "./GroupController";
import { IBaseElement } from "../../controllers/IBaseElement";
import { AbstractHierarchyController } from "./AbstractHierarchyController";
import { AbstractFileResult, Instance, ThermalFileReader, ThermalGroup, TimeFormat } from "@labirthermal/core";
import { FileController } from "./FileController";
import { html, nothing, PropertyValueMap } from "lit";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

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

    public backupReadersFromInstances(
        instances: Instance[]
    ): void {
        this.backup.clear();
        instances.forEach(instance => this.backup.add(instance.reader));
    }

    public backupReaders(
        readers: ThermalFileReader[]
    ): void {
        this.backup.clear();
        readers.forEach(reader => this.backup.add(reader));
    }



    public async restoreTheEntireBackup(): Promise<void> {

        this.host.fileController.removeInstance();

        return this.group.files.batchCreateInstances(Array.from(this.backup), true);

    }

    public async showOneAndBackup(
        instance: Instance
    ): Promise<void> {
        const reader = instance.reader;
        this.backup.clear();
        this.backupReadersFromInstances(this.group.files.value);
        this.host.fileController.host.registryController.setHighlight(undefined);
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
        icon: string,
        iconStyle: string,
        tooltip: string,
        active: boolean,
        onClick: () => void,
        slot?: string
    ): unknown {
        return html`
            <thermal-btn
                icon="${icon}"
                iconStyle="${iconStyle}"
                tooltip=${ifDefined( active ? undefined : tooltip )}
                variant=${active ? "background" : "default"}
                @click=${onClick}
                slot=${slot}
            >
            </thermal-btn>
        `;
    }

    public renderLayoutSwitch(
        slot?: string
    ): unknown {

        return html`<thermal-btn-group>
            ${this._renderButton(
                "list",
                "micro",
                "Switch to table view",
                this._asTable,
                () => this.setAsTable(true),
                slot
            )}
            ${this._renderButton(
                "grid",
                "micro",
                "Switch to grid view",
                !this._asTable,
                () => this.setAsTable(false),
                slot
            )}
        </thermal-btn-group>`;

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
            flexDirection: "column",
            fontSize: "small"
        };

        return html`<div slot="${slot}" style=${styleMap(divStyles)}>
        <input type="range" min="1" max="${max}" step="1" .value=${this._numColumns} @input=${(e: Event) => {
                const target = e.target as HTMLInputElement;
                this.setNumColumns(parseInt(target.value, 10));
            }}>
        <div style=${styleMap({ textAlign: "center", fontSize: ".7em",opacity: ".7", marginTop: "-0.2rem" })}>Columns: ${this._numColumns} sloupců</div>
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

    private async handleFileDropAdd(
        results: AbstractFileResult[]
    ) {

        const fileReaders: ThermalFileReader[] = [];

        for ( const result of results ) {
            if ( result instanceof ThermalFileReader) {
                fileReaders.push(result);
                this.backup.add(result);
            }
        }

        await this.group.files.batchCreateInstances(fileReaders, false);
        

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
            // background: "var(--thermal-background)",
            // borderRadius: "var(--thermal-radius)",
            // padding: "0.5em",
            gap: "0.5em"
        };

        return html`<div slot="${slot}" style=${styleMap(divStyles)}>

            <thermal-btn 
                variant="text" 
                style="cursor: default; font-size: .9em;"
                icon="folder"
                iconStyle="micro"
            >${this.group.files.value.length} nahraných souborů</thermal-btn>

            <thermal-btn
                tooltip="Smazat všechny soubory a nahrát nové"
                icon="trash"
                iconStyle="micro"
                variant="background"
                @click=${() => {
                    this.host.fileController.host.registryController.setHighlight(undefined);
                    this.clearBackup();
                    this.group.files.removeAllInstances();
                }}
            ></thermal-btn>
            <group-dropin-input 
                slot="bar-pre"
                variant="background"
                icon="upload"
                iconStyle="micro"
                tooltip="Nahrát další soubory"
                .onDrop=${async (results: AbstractFileResult[]) => {
                    await this.handleFileDropAdd(results);
                }}
            ></group-dropin-input>
            <group-download-dropdown 
                variant="background"
                icon="download"
                iconStyle="micro"
            >
                <span slot="invoker">Stáhnout skupinu</span>
            </group-download-dropdown>
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
            // background: "var(--thermal-background)",
            // borderRadius: "var(--thermal-radius)",
            // padding: "0.5em",
            gap: "0.5em"
        };

        const isSingular = this.backup.size <= 1;

        const backLabel = isSingular ? "Zavřít" : "Zpět";
        const backTooltip = isSingular ? "Zavřít soubor a nahrát nový/é" : `Zpět na Vašich ${ this.backup.size } souborů`;
        const backIcon = isSingular ? "close" : "back";
        const backIconStyle = isSingular ? "micro" : "micro";

        return html`<div style=${styleMap(divStyles)} slot=${slot}>

            <thermal-btn 
                variant="text" 
                tooltip="Název souboru" 
                style="cursor: default; font-size: .9em;"
                icon="image"
                iconStyle="micro"
            >${instance.fileName}</thermal-btn>

            <thermal-btn 
                variant="text" 
                tooltip="Čas pořízení snímku" 
                style="cursor: default; font-size: .9em;"
                icon="clock"
                iconStyle="outline"
            >${TimeFormat.human( instance.timestamp )}</thermal-btn>

            <thermal-btn
                icon=${backIcon}
                iconStyle=${backIconStyle}
                tooltip="${backTooltip}"
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
            >${backLabel}</thermal-btn>
            <file-info-button>
                <thermal-btn 
                    slot="invoker" 
                    icon="info" 
                    iconStyle="solid"
                    variant="background"
                >Informace o souboru</thermal-btn>
            </file-info-button>

            <file-download-dropdown
                icon="download"
                iconStyle="micro"
                variant="background"
            ></file-download-dropdown>

        </div>`;
    }

    /** Assumes the contexts to be provided by the host element */
    public renderDetailBody(): unknown {

        const containerStyles: StyleInfo = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1em",
            width: "100%"
        };


        return html`<div style=${styleMap(containerStyles)}>
            <div>
                <file-canvas></file-canvas>
                <file-timeline></file-timeline>
            </div>
            <file-analysis-complex
                table-mode="full"
                forceinteractiveanalysis="true"
                graph-activation-enabled="true"
            ></file-analysis-complex>
        </div>`;
    }




}