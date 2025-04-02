import { TimeFormat } from "@labir/core";
import { css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { format } from "date-fns";
import { ApiTimeGrouping } from "@labir/api";

@customElement("file-label")
export class FileCanvas extends FileConsumer {

    @property({type: String})
    public grouping?: ApiTimeGrouping;

    @property({type: String})
    public label?: string;

    public onInstanceCreated(): void {}

    public onFailure(): void {}

    static styles = css`
        :host {
            display: contents;
        }
    `;

    protected render(): unknown {

        if ( this.file === undefined ) {
            return nothing;
        } else if ( this.label !== undefined ) {
            return this.label;
        } else if ( this.grouping !== undefined ) {

            switch ( this.grouping ) {
                case "hours":
                case "days":
                    return format( this.file.timestamp, "HH:mm" );
                case "weeks":
                case "months":
                case "years":
                    return TimeFormat.human( this.file.timestamp );
                default:
                    return TimeFormat.human( this.file.timestamp );
            }

        }

        return this.file.fileName;

    }

}