import { Instance, ThermalFileFailure } from "@labir/core";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";

@customElement("group-timeline")
export class GroupTimeline extends GroupConsumer {

    @state()
    longestDurationInMs?: number;

    @state()
    ms: number = 0;

    @state()
    playing: boolean = false;

    @state()
    instances: Instance[] = [];

    @state()
    has: boolean = false;

    protected timelineRef: Ref<HTMLDivElement> = createRef();
    protected indicatorRef: Ref<HTMLDivElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        throw new Error("Method not implemented.");
    }


    connectedCallback(): void {

        super.connectedCallback();

        this.group.registry.batch.onBatchComplete.set(this.UUID, (results) => {
            this.onRegistryBatchEnded(results);
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

        if (this.timelineRef.value) {
            this.timelineRef.value.addEventListener("click", event => {

                const layerX = event.layerX;
                const target = event.target as HTMLDivElement;
                const layerWidth = target.clientWidth;

                const percent = layerX / layerWidth * 100;

                const ms = this.percentToMs(percent);

                if (ms) {
                    this.ms = ms;
                }

            });
        }

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

    protected handlePlayButtonClick() {
        this.group.playback.playing
            ? this.group.playback.stop()
            : this.group.playback.play();
    }


    static styles?: CSSResultGroup | undefined = css`

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
            cursor: pointer;
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

    
    `;


    protected render(): unknown {

        if (this.has === false) {
            return nothing;
        }

        return html`<div>

            <div 
                class="timeline" 
                @click=${(event: MouseEvent) => {
                const layerX = event.layerX;
                const target = event.target as HTMLDivElement;
                const layerWidth = target.clientWidth;

                const percent = layerX / layerWidth * 100;

                const ms = this.percentToMs(percent);

                if (ms) {
                    this.ms = ms;
                }
            }}
            >
                <div class="background"></div>
                <div class="indicator" ${ref(this.indicatorRef)}></div>
            </div>

            <thermal-button @click=${() => this.handlePlayButtonClick()}>
                ${this.playing === true ? "Stop" : "Play"}
            </thermal-button>
        </div>`;
    }

}