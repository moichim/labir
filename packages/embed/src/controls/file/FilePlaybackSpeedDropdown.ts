import { playbackSpeed, PlaybackSpeeds } from "@labirthermal/core";
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

        thermal-btn {
            width: 100%;
        }
    
    `;

    protected render(): unknown {

        if ( this.file === undefined ) {
            return nothing;
        }

        return html`<thermal-dropdown variant="foreground" interactive="${this.enabled}" .tooltip=${t(T.playbackspeed)}>

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                ${Object.entries( playbackSpeed ).map( ([key]) => {
                    return html`<thermal-btn 
                        slot="option" 
                        variant="${ this.playbackSpeed.toString() === key ? "background" : "default" }"
                        @click="${(event: MouseEvent) => {
                        if ( this.file ) {
                            this.file.timeline.playbackSpeed = parseFloat(key) as keyof typeof playbackSpeed;
                        }

                        const target = event.target as HTMLElement;

                        if ( target ) {

                            if ( target.parentElement instanceof ThermalDropdown ) {
                                target.parentElement.setClose();
                            }
                        }
                        }}"
                    >
                        ${key}x
                    </thermal-btn>`;
                } )}
            
            </thermal-dropdown>`
    }

}