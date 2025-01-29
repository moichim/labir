import { Instance } from "@labir/core";
import { consume } from "@lit/context";
import { format } from "date-fns";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { currentFrameContext, CurrentFrameContext, durationContext, DurationContext, FileCursorContext, fileCursorContext, FileCursorSetterContext, fileCursorSetterContext, fileMarkersContext, mayStopContext, playingContext } from "../../hierarchy/providers/context/FileContexts";
import { FileMarker } from "./markers/ImageMarker";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { calculateTicks, renderTicks, Tick, ticksCss } from "../../utils/timelineTicks";

@customElement("file-timeline")
export class TimelineElement extends FileConsumer {

    public getTourableRoot(): HTMLElement | undefined {
        return this.containerRef.value;
    }

    @consume({ context: playingContext, subscribe: true })
    @state()
    protected playing: boolean = false;

    @consume({ context: currentFrameContext, subscribe: true })
    @state()
    protected currentFrame?: CurrentFrameContext;

    @consume({ context: durationContext, subscribe: true })
    @state()
    protected duration?: DurationContext;

    @consume({ context: mayStopContext, subscribe: true })
    @state()
    protected mayStop: boolean = true;

    @consume({ context: fileCursorContext, subscribe: true })
    protected cursor: FileCursorContext;

    @consume({ context: fileCursorSetterContext, subscribe: true })
    protected cursorSetter?: FileCursorSetterContext;


    protected timelineRef: Ref<HTMLDivElement> = createRef()
    protected barRef: Ref<HTMLDivElement> = createRef();
    protected containerRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    @property({ type: String, reflect: true })
    public hasPlayButton: boolean = true;

    @property({ type: String, reflect: true })
    public hasInfo: boolean = true;

    @property({ type: String, reflect: true })
    public interactive: boolean = true;

    @consume({ context: fileMarkersContext, subscribe: true })
    public markers: FileMarker[] = [];

    @state()
    protected collapsed: boolean = false;

    public static collapseWidth = 500;

    @state()
    protected ticks: Tick[] = [];

    @state()
    protected pointerMs?: number;

    public onInstanceCreated(instance: Instance): void {
        if (this.containerRef.value) {
            this.ticks = calculateTicks(this.containerRef.value.clientWidth, instance.duration);
        }

    }
    public onFailure(
        // error: ThermalFileFailure
    ): void {
        this.file?.timeline.removeListener(this.UUID);
    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        if (
            this.observer === undefined
            && this.containerRef.value instanceof Element
        ) {

            this.observer = new ResizeObserver((entries) => {
                const entry = entries[0];

                if (this.file)
                    this.ticks = calculateTicks(entry.contentRect.width, this.file.duration);

                if (entry.contentRect.width < TimelineElement.collapseWidth) {
                    if (this.collapsed === false) {
                        this.collapsed = true;
                    }
                } else {
                    if (this.collapsed === true) {
                        this.collapsed = false;
                    }
                }

            });
            this.observer.observe(this.containerRef.value!);

        }



    }


    /** Handlers */


    /** Handle playback buttons */
    protected handlePlayButtonClick() {

        if (this.playing === true && this.mayStop === false) {
            return;
        }

        if (this.playing) {
            this.file?.timeline.stop();
        } else {
            this.file?.timeline.play();
        }

    }

    handleBarClick(event: MouseEvent) {

        event.preventDefault();

        if (this.mayStop === false) {
            return;
        }

        if (this.timelineRef.value && this.barRef.value && this.file) {

            const x = event.clientX - this.timelineRef.value.offsetLeft;

            const percent = x / this.timelineRef.value.clientWidth * 100;

            this.file.timeline.setValueByPercent(percent);

        }
    }

    /** Take a MouseEvent on `this.timelineRef` and calculate the percentage out of it. */
    protected getValueFromEvent(event: MouseEvent) {

        if (this.timelineRef.value && this.file) {
            const x = event.clientX - this.timelineRef.value.offsetLeft;
            const percent = x / this.timelineRef.value.clientWidth * 100;
            const ms = this.file.duration * (percent / 100);
            return {
                percent,
                ms
            };
        }

    }

    handleBarEnter(event: MouseEvent) {

        const eventValues = this.getValueFromEvent(event);

        if (eventValues) {
            this.pointerMs = eventValues.ms;
        }

        if (this.cursorSetter && eventValues) {
            this.cursorSetter(eventValues.percent);
        }
    }

    handleBarHover(event: MouseEvent) {

        event.preventDefault();

        const eventValues = this.getValueFromEvent(event);

        if (eventValues) {
            this.pointerMs = eventValues.ms;
        }

        if (this.cursorSetter && eventValues) {
            this.cursorSetter(eventValues.percent);
        }
    }

    handleBarMouseLeave() {
        if (this.cursorSetter) {
            this.cursorSetter(undefined);
        }
        this.pointerMs = undefined;
    }

    static styles = css`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

            color: var( --thermal-foreground );

        }


        .button {
            width: calc( var( --thermal-gap ) * 1.5 );

            font-size: var( --thermal-fs );
            line-height: var(--thermal-fs );

            cursor: pointer;
            transition: color .3 ease-in-out;

            color: var( --thermal-foreground );
            background-color: var(--thermal-slate-light);
            
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);

            padding: 4px;

            &:hover {
                color: var( --thermal-primary );
            }
        }

        .cursor {
            width: 70px;
        }

        .duration {
        
        }

        .small {
            font-size: calc( var( --thermal-fs ) * .7 );
            color: var( --thermal-foreground );
        }

        .real {
            display: flex;
            gap: var( --thermal-fs-small );
            align-items: center;
            padding-top: 5px;
            justify-content: space-between;
            width: 100%;

            .label { opacity: .5; }
        }

        .inline {
            white-space: nowrap;
        }

        .timeline {
            flex-grow: 1;
            cursor: pointer;
        }

        .timeline-bar {
            width: 100%;
            height: var( --thermal-fs );
            background: var( --thermal-slate );
            transition: background-color .2s ease-in-out;
            position: relative;
        }

        .timeline-marks {
            width: 100%;
        }

        .mark {
            background: red;
            height: 5px;
            position: relative;
        }

        .bar {
            height: 100%;
            background: var( --thermal-primary );
            content: "";
            border-right: 1px solid var( --thermal-foreground );
        }

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }

        .pointer {
            position: absolute;
            width: 1px;
            background: var( --thermal-background );
            height: 100%;
            top: 0;
        }

        ${ticksCss}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;






    protected render(): unknown {

        const file = this.file as Instance;

        if (file === undefined) {
            return nothing;
        }

        else if (file.duration === 0) {
            return nothing;
        }

        const containerClasses = {
            container: true,
            collapsed: this.collapsed
        }

        const mayClasses = {
            may: this.mayStop === true,
            mayNot: this.mayStop === false
        }

        const playButtonClasses = {
            item: true,
            button: true,
            ...mayClasses
        }

        const barClasses = {
            item: true,
            timeline: true,
            ...mayClasses
        }

        return html`
            <div class="${classMap(containerClasses)}" ${ref(this.containerRef)}>


                ${file !== undefined

                ? html`
                        <div class="ticks-horizontal-indent">


                            <div class="${classMap(barClasses)}"  ${ref(this.timelineRef)}>
                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame ? this.currentFrame.percentage : 0}%" ${ref(this.barRef)}></div>
                                    ${this.cursor ? html`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>` : ""}
                                </div>

                                <div>
                                    ${this.markers.map(element => {
                    return html`<file-marker-timeline start=${element.fromMs} end=${element.endMs} ></file-marker-timeline>`
                })}
                                </div>

                            </div>


                            ${(this.currentFrame)
                        ? renderTicks(
                            file.duration,
                            this.ticks,
                            this.currentFrame.ms,
                            this.pointerMs
                        )
                        : nothing
                    }

                            


                            ${this.hasPlayButton === true
                        ? html`

                                    <div class="controls">

                                        <thermal-button @click=${() => {
                                file.timeline.prev();
                            }}>${t(T.prev)}</thermal-button>


                                        <button class="${classMap(playButtonClasses)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                        ${this.playing
                                ? html`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                            </svg>
                                            `
                                : html`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                            </svg>
                                            `
                            }

                                    </button>

                                    

                                    <thermal-button @click=${() => {
                                file.timeline.next();
                            }}>${t(T.next)}</thermal-button>

                                    <thermal-button @click=${()=>file.timeline.setRelativeTime(0)}>${t(T.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop ? "on" : "off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `
                        : nothing
                    }

                            
                        </div>
                    `
                : nothing
            }

            
            
            </div>

            ${this.currentFrame !== undefined && this.hasInfo === true
                ? html`<div class="small real ${this.collapsed ? "collapsed" : ""}">
                        <div>
                            <span class="label">${t(T.date)}:</span> 
                            <span class="inline">${format(this.currentFrame.absolute, "d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${t(T.time)}:</span> 
                            <span class="inline">${format(this.currentFrame.absolute, "H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${t(T.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index + 1} / ${this.file?.frameCount}</span>
                        </div>
                    </div>`
                : nothing
            }

            <slot name="tour"></slot>

          `;
    }
}

export type TimelineHighlightData = {
    fromMs: number,
    toMs: number,
    text: string
}