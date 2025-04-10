import { playbackSpeed, PlaybackSpeeds } from "@labir/core";
import { consume } from "@lit/context";
import { css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { playbackSpeedContext } from "../../hierarchy/providers/context/FileContexts";
import { ThermalDropdown } from "../../ui/Dropdown";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("file-playback-speed-dropdown")
export class FilePlaybackSpeedDropdown extends FileConsumer {

    @property({type: String, reflect: true})
    enabled: "on"|"off" = "on";

    @consume({context: playbackSpeedContext, subscribe: true})
    @state()
    protected playbackSpeed: PlaybackSpeeds = 1;
    
    public onInstanceCreated(): void {}

    public onFailure(): void {}

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

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${t(T.playbackspeed)}</div>

                    ${Object.entries( playbackSpeed ).map( ([key]) => {
                        return html`<thermal-button slot="option" @click="${(event: MouseEvent) => {
                        if ( this.file ) {
                            this.file.timeline.playbackSpeed = parseFloat(key) as keyof typeof playbackSpeed;
                        }

                        const target = event.target as HTMLElement;

                        if ( target ) {

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