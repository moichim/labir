import { TemplateResult } from "lit";
import { state } from "lit/decorators.js";
import { BaseAppWithPngExportContext } from "../../utils/converters/pngExportContext";

export enum AppState {
    LOADING = "loading",
    POSTER = "poster",
    USER = "user",
    FOLDER = "folder",
    DETAIL = "detail"
}

export enum FolderMode {
    GRID = "grid-files",
    TABLE = "table-subfolders",
    LIST = "list-subfolders"
}


/** 
 * This is the core layer which handles the states. Base states are implemented here, but most are implemented in the AppWithContent layer.
 */
export abstract class AppWithState extends BaseAppWithPngExportContext {

    @state()
    private _appState: AppState = AppState.LOADING;
    public get state(): AppState { return this._appState; }
    protected set state(state: AppState) {
        this._appState = state;
        this.requestUpdate();
    }

    @state()
    private _customStateContent?: string | TemplateResult;
    public get customStateContent(): string | TemplateResult | undefined { return this._customStateContent; }




    @state()
    private _error?: string;
    public get error(): string | undefined { 
        return this._error; 
    }

    protected setError(error: string): void {
        this._error = error;
        this.requestUpdate();
    }

    protected clearError(): void {
        this._error = undefined;
        this.requestUpdate();
    }

    protected setStateLoading(
        message?: string
    ): void {
        this._appState = AppState.LOADING;
        this._customStateContent = message;
        this.requestUpdate();
    }

    protected setStatePoster(
        html: TemplateResult
    ): void {
        this._appState = AppState.POSTER;
        this._customStateContent = html;
        this.requestUpdate();
    }

}