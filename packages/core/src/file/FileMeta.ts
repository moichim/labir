import { ParsedFileBaseInfo } from "../loading/workers/parsers/structure";
import { CallbacksManager } from "../properties/callbacksManager";

export class FileMeta {

    private _current: ParsedFileBaseInfo;

    public get current() { return this._current; }

    public onChange = new CallbacksManager<(value: ParsedFileBaseInfo) => void>;

    public get width() { return this.current.width; }
    public get height() { return this.current.height; }

    constructor(
        baseInfo: ParsedFileBaseInfo
    ) {
        this._current = baseInfo;
    }

    set( value: ParsedFileBaseInfo ) {
        this._current = value;
        this.onChange.call( this.current );
    }

}