import { AbstractFile } from "../../../file/AbstractFile";

export interface ITool {
    key: string,
    name: string,
    description: string,
    icon: string,
    active: boolean,
    getLabelValue: (x: number, y: number, file: AbstractFile) => string
}

export abstract class AbstractTool {

    public activate(): void {
        this.onActivate();
    }
    protected abstract onActivate(): void;

    public deactivate() {
        this.onDeactivate();
    }
    protected abstract onDeactivate(): void;

    public abstract onClick(x: number, y: number): void;

}