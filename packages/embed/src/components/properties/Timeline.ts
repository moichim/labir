import { PropertyValueMap, css, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { ElementInheritingFile } from "../structure/file/ElementInheritingFile";

@customElement("thermal-timeline")
export class TimelineElement extends ElementInheritingFile {
    protected getClassName(): string {
        return "TimelineElement";
    }

    @state()
    protected playing = false;

    @state()
    protected percentage: number = 0;

    @state()
    protected ms: string = "0:00:000";

    protected timelineRef: Ref<HTMLDivElement> = createRef()
    protected barRef: Ref<HTMLDivElement> = createRef();


    protected update(_changedProperties: Map<PropertyKey, unknown> | PropertyValueMap<this>): boolean {

        this._injectedFile.value?.timeline.removeListener(this.identificator);

        this._injectedFile.value?.timeline.addListener(this.identificator, value => {
            this.percentage = value / this._injectedFile.value!.duration * 100;
            this.ms = this.formatDuration(this._injectedFile.value!.timeline.value);
        });

        return super.update(_changedProperties);
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
            width: calc( var( --thermal-gap ) * 5 );
        }

        .duration {
        
        }

        .timeline {

            flex-grow: 1;
            background: var( --thermal-slate );
            height: var( --thermal-gap );
            cursor: pointer;
        }

        .bar {
            height: 100%;
            background: var( --thermal-primary );
            content: "";
        }
    
    `;

    protected formatDuration(ms: number) {
        const millis = ms % 1000;
        const minute = (1000 * 60);
        const mins = Math.floor(ms / minute);

        const seconds = (ms - (mins * minute) - millis) / 1000;

        const toFixed = (val: number, fixed: number) => {
            const vals = val.toString();
            if (vals.length === fixed) {
                return vals;
            } else if (vals.length < fixed) {

                const difference = fixed - vals.length;

                let result = "";
                for (let i = 0; i < difference; i++) {
                    result = result + "0";
                }

                return result + vals;

            }
        }

        return [
            mins,
            toFixed(seconds, 2),
            toFixed(millis, 3)
        ].join(":");
    }

    play() {
        if (this._injectedFile.value) {

            this.playing = true;
            this._injectedFile.value.timeline.play();

        }
    }

    pause() {
        if (this._injectedFile.value) {
            this.playing = false;
            this._injectedFile.value.timeline.pause();
        }
    }

    applyBar(event: MouseEvent) {
        this.log(event);
        event.clientX
        if (this.timelineRef.value && this.barRef.value && this._injectedFile.value) {

            const x = event.clientX - this.timelineRef.value.offsetLeft;

            const percent = x / this.timelineRef.value.clientWidth * 100;

            this._injectedFile.value.timeline.setValueByPercent(percent);

        }
    }

    protected render(): unknown {

        if (this._injectedFile.value === undefined) {
            return nothing;
        }

        else if ( this._injectedFile.value.timeline.duration === 0 ) {
            return nothing;
        }

        return html`
            <div class="container">


                ${this._injectedFile.value !== undefined

                ? html`
                        <div class="container">

                            <div class="item button" @click=${this.playing ? this.pause.bind(this) : this.play.bind(this)}>


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


                            <div class="item cursor">
                                ${this.ms}
                            </div>

                            <div class="item timeline" @click=${this.applyBar.bind(this)} ${ref(this.timelineRef)}>
                                <div class="bar" style="width: ${this.percentage}%" ${ref(this.barRef)}></div>
                            </div>

                            <div class="item">${this.formatDuration(this._injectedFile.value!.timeline.duration)}</div>
                        </div>
                    `
                : nothing
            }
            
            </div>

          `;
    }
}