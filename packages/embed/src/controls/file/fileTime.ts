import { TimeFormat } from "@labir/core";
import { css, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-time")
export class FileCanvas extends FileConsumer {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }

    public onInstanceCreated(): void {}

    public onFailure(): void {}

    static styles = css``;

    protected render(): unknown {

        if ( this.file === undefined ) {
            return nothing;
        }

        return TimeFormat.human( this.file.timestamp );

    }

}