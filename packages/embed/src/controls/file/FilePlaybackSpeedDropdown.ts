import { playbackSpeed } from "@labir/core";
import { css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { ThermalDropdown } from "../../ui/Dropdown";

@customElement("file-playback-speed-dropdown")
export class FilePlaybackSpeedDropdown extends FileConsumer {
    
    public onInstanceCreated(): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    @property({type: String, reflect: true})
    enabled: "on"|"off" = "on";

    static styles = css`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid var( --thermal-slate-light );
            }
        }

        small {
            opacity: .5;
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            color: var( --thermal-primary );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;

    protected render(): unknown {

        if ( this.file === undefined ) {
            return nothing;
        }

        return html`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries( playbackSpeed ).map( ([key]) => {
                        return html`<thermal-button slot="option" @click="${(event: MouseEvent) => {
                        if ( this.file ) {
                            this.file.timeline.playbackSpeed = parseFloat(key) as keyof typeof playbackSpeed;
                        }

                        const target = event.target as HTMLElement;

                        if ( target ) {
                            console.log( target.parentElement );

                            if ( target.parentElement instanceof ThermalDropdown ) {
                                target.parentElement.setClose();
                            }
                        }
                        }}">${key}x</thermal-button>`;
                    } )}
            
            </thermal-dropdown>

        
        `
    }

}