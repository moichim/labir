import { css, CSSResultGroup, html, PropertyValues } from "lit";
import { GroupConsumer } from "../../../hierarchy/consumers/GroupConsumer";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import { Instance, ThermalFileFailure } from "@labir/core";
import { createRef, ref, Ref } from "lit/directives/ref.js";

@customElement("group-timeline")
export class GroupTimeline extends GroupConsumer {

    @state()
    longestDurationInMs?: number;

    @state()
    ms: number = 0;

    @state()
    instances: Instance[] = [];

    protected timelineRef: Ref<HTMLDivElement> = createRef();
    protected indicatorRef: Ref<HTMLDivElement> = createRef();

    public getTourableRoot(): HTMLElement | undefined {
        throw new Error("Method not implemented.");
    }


    connectedCallback(): void {
        super.connectedCallback();

        this.group.registry.batch.onBatchComplete.set(this.UUID, this.onRegistryBatchEnded.bind(this));

        

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);
        
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);


        // Project the local status to the affected instances
        if (_changedProperties.has("ms")) {
            if (this.ms !== undefined) {
                this.forEveryAffectedInstance(instance => {
                    if (this.ms) {
                        instance.timeline.setRelativeTime(this.ms);

                        if ( this.indicatorRef.value ) {
                            this.indicatorRef.value.style.width = this.msToPercent( this.ms ) + "%";
                        }

                    }
                        

                });
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

        if ( this.timelineRef.value ) {
            this.timelineRef.value.addEventListener( "click", event => {

                const layerX = event.layerX;
                const target = event.target as HTMLDivElement;
                const layerWidth = target.clientWidth;

                const percent = layerX / layerWidth * 100;

                const ms = this.percentToMs( percent );

                this.log( this.ms, ms );

                this.ms = ms;

                
            } );
        }

    }

    protected forEveryAffectedInstance(fn: (instance: Instance) => void) {
        this.instances.forEach(fn);
    }

    protected percentToMs(
        percent: number
    ) {

        if ( this.longestDurationInMs === undefined ) {
            return undefined;
        }

        return Math.floor( this.longestDurationInMs * (percent / 100) );

    }

    protected msToPercent(
        ms: number
    ) {

        if ( this.longestDurationInMs === undefined ) {
            return undefined;
        }

        return ( ms / this.longestDurationInMs ) * 100;

    }


    static styles?: CSSResultGroup | undefined = css`

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
        }

        .background {
            width: 100%;
            height: 100%;
            background-color: var( --thermal-slate );
        }

        .indicator {
            height: 100%;
            position: absolute;
            content:"";
            top: 0;
            left: 0;
            background-color: var( --thermal-primary );
        }

    
    `;


    protected render(): unknown {
        return html`<div>
            Tajmlajna
            ${this.longestDurationInMs}

            <div class="timeline" ${ref(this.timelineRef)}>
                <div class="background"></div>
                <div class="indicator" ${ref(this.indicatorRef)}></div>
            </div>

            <thermal-button @click=${() => this.forEveryAffectedInstance( instance => instance.timeline.play() )}>Play</thermal-button>
        </div>`;
    }

}