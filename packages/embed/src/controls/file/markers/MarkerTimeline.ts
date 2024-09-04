import { consume } from "@lit/context";
import { css, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { fileMsContext } from "../../../hierarchy/providers/context/FileContexts";


@customElement("file-marker-timeline")
export class FileMarker extends FileConsumer {
    public onInstanceCreated(): void {
        // throw new Error("Method not implemented.");
    }
    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    @consume({ context: fileMsContext, subscribe: true })
    @state()
    protected ms: number = 0;

    @property({ type: Number, reflect: true, attribute: true })
    public start!: number;

    @property({ type: Number, reflect: true, attribute: true })
    public end!: number;

    @state()
    protected active: boolean = false;


    public get durationInMs() {
        return this.end - this.start;
    }

    public get percentageStart() {

        if (this.duration) {
            return this.start / this.duration.ms * 100;
        }

        return 0;

    }

    public get percentageDuration() {
        if (this.duration) {
            return this.durationInMs / this.duration.ms * 100;
        }

        return 0;
    }

    protected get percentageCursor() {
        if (this.currentFrame === undefined) {
            return 0;
        }
        return this.currentFrame.percentage;
    }


    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate(_changedProperties);

        if (_changedProperties.has("ms")) {

            if (this.start <= this.ms && this.end >= this.ms) {
                if (this.active === false) {
                    this.active = true;
                }
            } else {
                if (this.active === true) {
                    this.active = false;
                }
            }
        }
    }


    static styles = css`
        .container {
            position: relative;
            height: 10px;
            background: var( --thermal-slate );
            width: 100%;
            cursor: pointer;
            border-top: 1px dotted var( --thermal-slate-light );

            transition: background-color .2s ease-in-out;

            &:hover {
                background: var( --thermal-slate-light );
                .bar {
                    background: var( --thermal-primary );
                }
            }
        }

        .bar {
            transition: background-color .2s ease-in-out;
            position: relative;
            height: 100%;
            background: var( --thermal-primary-dark );
        }

        .active {
            .bar {
                background: var( --thermal-primary );
            }

            .cursor {
                background: red;
            }
            
        }


        .cursor {

        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background: var( --thermal-foreground );
        
        }


    `;


    protected render(): unknown {
        const classes = {
            container: true,
            active: this.active
        };

        return html`

            <div class="${classMap(classes)}" @click=${async () => {

                if (this.file) {
                    const frame = await this.file.timeline.findNextRelative(this.start);

                    if (frame) {
                        this.file?.timeline.setRelativeTime(frame.relative)
                    }
                }

            }}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `;
    }

}