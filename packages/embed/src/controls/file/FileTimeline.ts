import { Instance } from "@labir/core";
import { format } from "date-fns";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-timeline")
export class TimelineElement extends FileConsumer {
    public onLoadingStart(): void {
        this.file?.timeline.removeListener(this.UUID);
    }
    public onInstanceCreated(): void {
        // ... nothing
    }
    public onFailure(
        // error: ThermalFileFailure
    ): void {
        this.file?.timeline.removeListener(this.UUID);
    }

    protected timelineRef: Ref<HTMLDivElement> = createRef()
    protected barRef: Ref<HTMLDivElement> = createRef();

    protected containerRef: Ref<HTMLDivElement> = createRef();

    protected observer!: ResizeObserver;

    @state()
    protected collapsed: boolean = false;

    public static collapseWidth = 500;

    protected update(changedProperties: PropertyValues): void {
        super.update( changedProperties );

        if ( 
            this.observer === undefined
            && this.containerRef.value instanceof Element
         ) {

            this.observer = new ResizeObserver( ( entries ) => {
                const entry = entries[0];
    
                if (entry.contentRect.width < TimelineElement.collapseWidth) {
                    if ( this.collapsed === false ) {
                        this.collapsed = true;
                    }
                } else {
                    if ( this.collapsed === true ) {
                        this.collapsed = false;
                    }
                }
    
            } );
            this.observer.observe( this.containerRef.value! );

        }

        

    }


    static styles = css`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

        }

        .item {
            font-size: var( --thermal-fs );
            order: 2;
        }

        .button {
            width: var( --thermal-gap );
            cursor: pointer;
            transition: color .3 ease-in-out;
            color: var( --thermal-foreground );
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
            font-size: var( --thermal-fs-small );
        }

        .real {
            display: flex;
            gap: 1rem;
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
            background: var( --thermal-slate );
            height: var( --thermal-gap );
            cursor: pointer;
        }
        .timeline-bar {
            width: 100%;
            height: 100%;
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
        }

        .collapsed {
            .container {
                flex-wrap: wrap;
            }
            .timeline {
                order: 1;
                width: 100%;
                height: 10px;
            }

            .cursor {
                flex-grow: 1;
            }
            &.real {
                flex-wrap: wrap;
                gap: 2px;
            }
        }

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }
    
    `;


    

    @state()
    protected highlights: TimelineHighlightData[] = []

    public recieveHighlights( highlights: TimelineHighlightData[] ) {
        this.highlights = highlights;
    }




    /** Handlers */


    /** Handle playback buttons */
    protected handlePlayButtonClick() {

        if ( this.playing === true && this.mayStop === false ) {
            return;
        }

        if ( this.playing ) {
            this.parentFileProviderElement?.stop();
        } else {
            this.parentFileProviderElement?.play();
        }

    }

    handleBarClick(event: MouseEvent) {

        if ( this.mayStop === false ) {
            return;
        }
        
        if (this.timelineRef.value && this.barRef.value && this.file) {

            const x = event.clientX - this.timelineRef.value.offsetLeft;

            const percent = x / this.timelineRef.value.clientWidth * 100;

            this.log( percent );

            this.file.timeline.setValueByPercent(percent);

        }
    }






    protected render(): unknown {

        const file = this.file as Instance;

        if (file === undefined) {
            return nothing;
        }

        else if ( file.duration === 0 ) {
            return nothing;
        }

        else if ( this.parentFileProviderElement === undefined ) {
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
                        <div class="container">

                            <div class="${classMap(playButtonClasses)}" @click=${this.handlePlayButtonClick.bind(this)}>


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

                            </div>


                            <div class="item cursor inline small">
                                ${this.currentFrame?.time}
                            </div>

                            <div class="${classMap(barClasses)}" @click=${this.handleBarClick.bind(this)} ${ref(this.timelineRef)}>
                                <div class="timeline-bar">
                                    <div class="bar" style="width: ${this.currentFrame ? this.currentFrame.percentage : 0}%" ${ref(this.barRef)}></div>
                                </div>
                                <div class="timeline-marks">
                                    ${this.highlights.length > 0 
                                        ? this.highlights.map( mark => {
                                        const start = mark.fromMs / file.duration * 100;
                                        const width = ( mark.toMs - mark.fromMs ) / file.duration * 100
                                        return html`
                                        <div class="mark" style="left: ${start}%; width: ${ width }%"></div>
                                    `
                                    })
                                    : nothing}
                                </div>
                            </div>

                            <div class="item inline small">${this.duration?.time}</div>

                            <file-playback-speed-dropdown enabled="${this.mayStop ? "on" : "off"}" class="item"></file-playback-speed-dropdown>
                        </div>
                    `
                : nothing
            }

            
            
            </div>

            ${ this.currentFrame !== undefined
                ? html`<div class="small real ${this.collapsed ? "collapsed" : ""}">
                        <div>
                            <span class="label">Date:</span> 
                            <span class="inline">${format(this.currentFrame.absolute, "d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">Time:</span> 
                            <span class="inline">${format(this.currentFrame.absolute, "H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">Frame:</span> 
                            <span class="inline">${this.currentFrame.index + 1} / ${this.file?.frameCount}</span>
                        </div>
                    </div>`
                : nothing
            }

          `;
    }
}

export type TimelineHighlightData = {
    fromMs: number,
    toMs: number,
    text: string
}