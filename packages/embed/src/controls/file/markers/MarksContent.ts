import { consume } from "@lit/context";
import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { fileMarkersContext } from "../../../hierarchy/providers/context/FileContexts";
import { FileMarker } from "./ImageMarker";

import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement("file-marks-content")
export class MarkersContent extends FileConsumer {
    public onInstanceCreated(): void {
        // ... nothing
    }
    public onFailure(
        // error: ThermalFileFailure
    ): void {
        this.file?.timeline.removeListener(this.UUID);
    }


    @consume( {context: fileMarkersContext, subscribe: true} )
    public markers!: FileMarker[];

    static styles = css`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;



    protected render(): unknown {

        return html`
            <div>


            ${this.markers.map( marker => {
                if (marker.active)
                    return html`<div class="item">
                    <h2>${marker.label}</h2>
                    ${unsafeHTML( marker.innerHTML )}
                    </div>`
                return nothing;
            } )}

            
            
            </div>

          `;
    }
}

export type TimelineHighlightData = {
    fromMs: number,
    toMs: number,
    text: string
}