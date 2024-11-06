import { ParsedFileBaseInfo } from "../loading/workers/parsers/structure";
import { CallbacksManager } from "../properties/callbacksManager";

export class FileMeta {

    private _current: ParsedFileBaseInfo;

    public get current() { return this._current; }

    public onChange = new CallbacksManager<(value: ParsedFileBaseInfo) => void>;

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