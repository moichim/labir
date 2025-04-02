import { Instance, ThermalFileFailure } from "@labir/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { calculateTicks, renderTicks, Tick, ticksCss } from "../../utils/timelineTicks";





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

    @state()
    listener?: ReturnType<typeof setTimeout>;


    connectedCallback(): void {

        super.connectedCallback();

        this.group.registry.batch.onBatchComplete.set(
            this.UUID,
            this.onRegistryBatchEnded.bind(this)
        );

        this.group.files.addListener(this.UUID, (value) => {
            if ( this.listener !== undefined ) {
                clearTimeout( this.listener );
            }
            this.listener = setTimeout( async () => {
               this.onRegistryBatchEnded( value );
            }, 0 );
        });

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



    protected calculateTicks(
        width: number,
        duration: number
    ) {
        this.ticks = calculateTicks( width, duration );
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


        ${ticksCss}
    
    `;

    protected getTimelineElement(): HTMLDivElement | null {
        return this.renderRoot.querySelector(".timeline");
    }


    protected render(): unknown {

        if (this.has === false) {
            return nothing;
        }

        return html`<div class="container ticks-horizontal-indent">

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

            ${this.longestDurationInMs !== undefined 
                ? renderTicks( this.longestDurationInMs, this.ticks, this.ms, this.pointerMs )
                : nothing
            }

        </div>`;
    }

}