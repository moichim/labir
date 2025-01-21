import { Instance, ThermalFileFailure } from "@labir/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";
import { format } from "date-fns";
import { TICK, Tick, MinuteDivision } from "../../../utils/timelineTicks";





@customElement("group-timeline")
export class GroupTimeline extends GroupConsumer {

    public static TICK_WIDTH = 50;
    public static TICK_POINTER_HEIGHT = 3;

    @state()
    longestDurationInMs?: number;

    @state()
    ms: number = 0;

    @state()
    pointerMs?: number;

    @state()
    playing: boolean = false;

    @state()
    instances: Instance[] = [];

    @state()
    has: boolean = false;

    @state()
    ticks: Tick[] = [];

    protected timelineRef: Ref<HTMLDivElement> = createRef();
    protected indicatorRef: Ref<HTMLDivElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        throw new Error("Method not implemented.");
    }


    connectedCallback(): void {

        super.connectedCallback();

        this.group.registry.batch.onBatchComplete.set(
            this.UUID,
            this.onRegistryBatchEnded.bind(this)
        );

        this.group.playback.addListener(this.UUID, value => this.ms = value);

        this.group.playback.onPlayingStatusChange.set(this.UUID, value => this.playing = value);

        this.group.playback.onHasAnyCallback.set(this.UUID, value => this.has = value);

    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);


        // Project the local status to the affected instances
        if (_changedProperties.has("ms")) {
            if (this.ms !== undefined) {

                if (this.ms !== this.group.playback.value)
                    this.group.playback.setValueByRelativeMs(this.ms);

                if (this.indicatorRef.value) {
                    this.indicatorRef.value.style.width = this.msToPercent(this.ms) + "%";
                }

            }
        }

    }


    protected onRegistryBatchEnded(
        results: (Instance | ThermalFileFailure)[]
    ): void {

        let length = 0;

        this.forEveryAffectedInstance(instance => instance.unmountFromDom());

        this.instances = results
            .filter(result => {
                if (result instanceof ThermalFileFailure)
                    return false;
                return result.group.id === this.group.id
            }) as Instance[];

        this.instances.forEach(result => {

            if (result.timeline.duration > length) {
                length = result.timeline.duration;
            }
        });

        this.longestDurationInMs = length;

        setTimeout(() => {

            const timeline = this.getTimelineElement();

            if (timeline && this.longestDurationInMs !== undefined) {

                this.calculateTicks(timeline.clientWidth, this.longestDurationInMs);


                const resizeObserver = new ResizeObserver((entries) => {

                    const e = entries[0];

                    if (this.longestDurationInMs) {
                        this.calculateTicks(e.contentRect.width, this.longestDurationInMs);
                    }

                });

                resizeObserver.observe(timeline);

            }

        }, 0);



    }

    protected tick(
        ms: number,
        duration: number,
        type: TICK
    ): Tick {
        return {
            ms: ms,
            percent: ms / duration * 100,
            type,
            label: format(ms, "m:ss")
        }
    }
    

    protected processTicksMinute(
        from: number,
        to: number,
        count: MinuteDivision,
        duration: number
    ): Tick[] {

        const ticks: Tick[] = [];


        let c = 1;

        let partial = (to - from) / count;

        while (c < count) {

            const value = from + (c * partial);
            if (value < duration) {
                ticks.push(
                    this.tick(
                        value,
                        duration,
                        TICK.MINOR
                    )
                );
            }

            c += 1;
        }

        // Append the minute end if necessary
        if (to < duration) {
            ticks.push(this.tick(to, duration, TICK.MAJOR));
        }

        return ticks;

    }


    protected calculateTicks(
        width: number,
        duration: number
    ) {

        const minute = 60 * 1000;

        const numTicks = Math.floor(width / GroupTimeline.TICK_WIDTH);

        const numMinutes = Math.floor(duration / (60 * 1000));

        let ticksPerMinuteRaw = numTicks / numMinutes;

        let ticksPerMinute: MinuteDivision = 2;

        if (ticksPerMinuteRaw >= 2) ticksPerMinute = 4;
        if (ticksPerMinuteRaw >= 6) ticksPerMinute = 6;
        if (ticksPerMinuteRaw >= 12) ticksPerMinute = 12;
        if (ticksPerMinuteRaw >= 30) ticksPerMinute = 30;

        const ticks: Tick[] = [];

        let from = 0;
        let to = minute;

        while (from < duration) {

            this.processTicksMinute(
                from, to,
                ticksPerMinute,
                duration
            ).forEach(tick => ticks.push(tick));

            // Add a minute
            from += minute;
            to += minute;

        }


        ticks.push(this.tick(0, duration, TICK.BOUND));
        ticks.push(this.tick(duration, duration, TICK.BOUND));


        this.ticks = ticks;



    }

    protected forEveryAffectedInstance(fn: (instance: Instance) => void) {
        this.instances.forEach(fn);
    }

    protected percentToMs(
        percent: number
    ) {

        if (this.longestDurationInMs === undefined) {
            return undefined;
        }

        return Math.floor(this.longestDurationInMs * (percent / 100));

    }

    protected msToPercent(
        ms: number
    ) {

        if (this.longestDurationInMs === undefined) {
            return undefined;
        }

        return (ms / this.longestDurationInMs) * 100;

    }

    protected getValueFromEvent(event: MouseEvent): {
        ms: number | undefined,
        percent: number
    } {

        const layerX = event.layerX;
        const target = event.target as HTMLDivElement;
        const layerWidth = target.clientWidth;

        const percent = layerX / layerWidth * 100;

        const ms = this.percentToMs(percent);

        return { percent, ms }

    }

    protected handlePlayButtonClick() {
        this.group.playback.playing
            ? this.group.playback.stop()
            : this.group.playback.play();
    }

    protected handleTimelineClick(event: MouseEvent) {
        const layerX = event.layerX;
        const target = event.target as HTMLDivElement;
        const layerWidth = target.clientWidth;

        const percent = layerX / layerWidth * 100;

        const ms = this.percentToMs(percent);

        if (ms) {
            this.ms = ms;
        }
    }

    protected handleTimelineEnter(event: MouseEvent) {
        const { ms } = this.getValueFromEvent(event);
        this.pointerMs = ms;
    }

    protected handleTimelineMove(event: MouseEvent) {
        const { ms } = this.getValueFromEvent(event);
        this.pointerMs = ms;
    }

    protected handleTimelineLeave() {
        this.pointerMs = undefined;
    }


    static styles?: CSSResultGroup | undefined = css`


        :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

        }

        .container {

            padding-left: ${GroupTimeline.TICK_WIDTH / 2}px;
            padding-right: ${GroupTimeline.TICK_WIDTH / 2}px;

            padding-top: calc( var(--thermal-fs) + 6px);

        }

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
        }

        .background {
            width: 100%;
            height: 100%;
            background-color: var( --thermal-slate );
            pointer-events: none;
        }

        .indicator {
            height: 100%;
            position: absolute;
            content:"";
            top: 0;
            left: 0;
            background-color: var( --thermal-primary );
            pointer-events: none;
        }


        .indicator-cursor {
            position: absolute;
            width: 0px;
            right: 0;
            font-size: var( --fs-sm );
        }

        .indicator-cursor__primary {
            --cursor-bg: var( --thermal-primary );
            --cursor-color: white;
        }

        .indicator-cursor__pointer {
            --cursor-bg: var( --thermal-foreground );
            --cursor-color: white;

            .indicator-cursor-arrow {
                position: absolute;
                top: calc( var( --thermal-fs ) * -1 - 6px);
            }

            .indicator-cursor-label {
                position: absolute;
                top: calc( var( --thermal-fs ) * -2 - 3px );
            }
        }

        .indicator-cursor-arrow {
            position: relative;
            width: 6px;
            height: 6px;
            content: "";
            background: var( --cursor-bg );
            left: -4px;
            rotate: 45deg;
        }

        .indicator-cursor-label {
            position: relative;
            top: -3px;
            width: ${GroupTimeline.TICK_WIDTH}px;
            left: -${GroupTimeline.TICK_WIDTH / 2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${GroupTimeline.TICK_POINTER_HEIGHT}px);
            position: relative;
        }

        .tick {
            position: absolute;
            width: 0;
            color: var( --tick-color );
            opacity: var( --tick-opacity );
            font-size: var( --fs-sm );
        }

        .tick-bound {

            --tick-color: var( --thermal-foreground );

            .tick-label {
                background: var(--thermal-slate-dark);
                color: var(--thermal-background);
                position: relative;
                top: -3px;
            }

            .tick-pointer {
                width: 6px;
                height: 6px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -3px;
                rotate: 45deg;
            }
            
        }

        .tick-major {
            --tick-color: var( --thermal-slate-dark );
        }

        .tick-minor {
            --tick-color: var( --thermal-slate );
        }


        .tick-pointer {
            height: ${GroupTimeline.TICK_POINTER_HEIGHT}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
        }

        .tick-label {
            width: ${GroupTimeline.TICK_WIDTH}px;
            position: relative;
            left: -${GroupTimeline.TICK_WIDTH / 2}px;
            text-align: center;
            color: currentcolor;
        }
    
    `;

    protected getTimelineElement(): HTMLDivElement | null {
        return this.renderRoot.querySelector(".timeline");
    }


    protected render(): unknown {

        if (this.has === false) {
            return nothing;
        }

        return html`<div class="container">

            <div 
                class="timeline" 
                ${ref(this.timelineRef)}
                @click=${(event: MouseEvent) => this.handleTimelineClick(event)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${ref(this.indicatorRef)}></div>
            </div>

            <div class="ticks">
                ${this.ticks.map(tick => html`<div 
                    class="tick tick-${tick.type}"
                    style="left:${tick.percent}%"
                >
                    <div class="tick-pointer"></div>
                    <div class="tick-label">${tick.label}</div>
                </div>`)}

                <div class="indicator-cursor indicator-cursor__primary" style="left: ${this.msToPercent(this.ms)}%">
                    <div class="indicator-cursor-arrow"></div>
                    <div class="indicator-cursor-label">${format(this.ms, "m:ss:SSS")}</div>
                </div>

                ${this.pointerMs !== undefined
                ? html`<div class="indicator-cursor indicator-cursor__pointer" style="left: ${this.msToPercent(this.pointerMs)}%">
                        <div class="indicator-cursor-arrow"></div>
                        <div class="indicator-cursor-label">${format(this.pointerMs, "m:ss:SSS")}</div>
                    </div>`
                : nothing
            }

            </div>

        </div>`;
    }

}