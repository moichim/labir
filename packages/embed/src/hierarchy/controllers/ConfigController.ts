import { ContextProvider, createContext } from "@lit/context";
import { IBaseElement } from "../../controllers/IBaseElement";
import { AbstractReactiveController } from "../../controllers/AbstractReactiveController";

export interface PngExportSettings {
    width: number;
    fontSize: number;
    analyses: boolean;
    thermalScale: boolean;
    license: boolean;
    fileName: boolean;
    fileDate: boolean;
}

export interface GroupExportSettings {
    groupName: boolean;
    columns: number;
}

export interface ConfigSettings {
    export: {
        png: PngExportSettings;
        group: GroupExportSettings;
    };
}

export interface ConfigContextValue {
    settings: ConfigSettings;
    setPngSetting<K extends keyof PngExportSettings>(key: K, value: PngExportSettings[K]): void;
    setGroupSetting<K extends keyof GroupExportSettings>(key: K, value: GroupExportSettings[K]): void;
}

export const configContext = createContext<ConfigContextValue>("config-context");

export class ConfigController extends AbstractReactiveController<IBaseElement> {

    private _settings: ConfigSettings = {
        export: {
            png: {
                width: 1200,
                fontSize: 20,
                analyses: true,
                thermalScale: true,
                license: true,
                fileName: false,
                fileDate: true
            },
            group: {
                groupName: true,
                columns: 2
            }
        }
    };

    private readonly contextProvider: ContextProvider<typeof configContext, IBaseElement>;

    constructor(host: IBaseElement) {
        super(host);

        this.contextProvider = new ContextProvider(host, {
            context: configContext,
            initialValue: this._createContextValue()
        });
    }

    hostConnected(): void {}

    hostDisconnected(): void {}

    public get settings(): ConfigSettings {
        return this._settings;
    }

    public readonly setPngSetting = <K extends keyof PngExportSettings>(
        key: K,
        value: PngExportSettings[K]
    ): void => {
        this._settings = {
            ...this._settings,
            export: {
                ...this._settings.export,
                png: {
                    ...this._settings.export.png,
                    [key]: value
                }
            }
        };
        this._publish();
    };

    public readonly setGroupSetting = <K extends keyof GroupExportSettings>(
        key: K,
        value: GroupExportSettings[K]
    ): void => {
        this._settings = {
            ...this._settings,
            export: {
                ...this._settings.export,
                group: {
                    ...this._settings.export.group,
                    [key]: value
                }
            }
        };
        this._publish();
    };

    private _createContextValue(): ConfigContextValue {
        return {
            settings: this._settings,
            setPngSetting: this.setPngSetting,
            setGroupSetting: this.setGroupSetting
        };
    }

    private _publish(): void {
        this.contextProvider.setValue(this._createContextValue());
    }
}
