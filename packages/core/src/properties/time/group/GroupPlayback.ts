import { Instance } from "../../../file/instance";
import { ThermalGroup } from "../../../hierarchy/ThermalGroup";
import { AbstractProperty } from "../../abstractProperty";
import { CallbacksManager } from "../../callbacksManager";

export class GroupPlayback extends AbstractProperty<number, ThermalGroup> {

    protected _hasAnyPlayback: boolean = false;
    public get hasAnyPlayback() {
        return this._hasAnyPlayback;
    }
    protected setHasAnyPlayback( value: boolean ) {
        if ( this._hasAnyPlayback !== value ) {
            this._hasAnyPlayback = value;
            this.onHasAnyCallback.call( value );
        }
    }
    public readonly onHasAnyCallback = new CallbacksManager<(value:boolean) => void>
    protected recalculateHasAnyPlayback(
        instances: Instance[]
    ) {
        let temporaryHas = false;

        instances.forEach( i => {
            if ( i.timeline.isSequence ) {
                temporaryHas = true;
            }
        } );

        this.setHasAnyPlayback( temporaryHas );
    }

    protected _playing: boolean = false;
    public get playing() { return this._playing; }
    protected set playing( value: boolean ) {
        if ( this._playing !== value ) {
            this._playing = value;
            this.onPlaying.call( this._playing );
        }
    }

    protected step: number = 0;

    public readonly onPlaying = new CallbacksManager<(value: boolean) => void>

    protected _interval: number = 20;
    public get interval() { return this._interval; }
    public setInterval(
        value: number
    ) {
        this._interval = Math.round( value );
        this.onFramerate.call( this._interval );
    }
    public readonly onFramerate = new CallbacksManager<(value: number) => void>

    protected _duration: number = 0;
    public get duration() { return this._duration; }
    protected set duration(value: number) {
        if (value !== this._duration) {
            this._duration = value;
            this.onDuration.call(this._duration);
        }
    }
    public readonly onDuration = new CallbacksManager<(value: number | undefined) => void>
    protected recalculateDuration(
        instances: Instance[]
    ) {
        let temporaryDuration = 0;

        instances.forEach( instance => {
            if ( instance.timeline.duration > temporaryDuration ) {
                temporaryDuration = instance.timeline.duration;
            }
        } );

        this.duration = temporaryDuration;
    }


    protected UUID = this.parent.id + "__listener";

    constructor(
        parent: ThermalGroup,
        initial: number
    ) {
        super(parent, initial);

        this.recalculateDuration( this.parent.files.value );
        this.recalculateHasAnyPlayback( this.parent.files.value );

        /**
         * Listen to completed batches to retrieve 
         * the maximal duration
         */
        this.parent.registry.batch.onBatchComplete.set(
            this.UUID,
            results => {

                const instances = results.filter( res => res instanceof Instance ) as Instance[];

                this.recalculateDuration( instances );
                this.recalculateHasAnyPlayback( instances );
                this.value = this.value;

            

            }
        );

        console.log( this.parent.registry.batch );

        this.onDuration.set( "test", console.log );
    }


    protected validate(value: number): number {
        if ( this.duration === undefined ) {
            return 0;
        }
        return Math.min( Math.max( value, 0 ), this.duration )
    }
    protected afterSetEffect(value: number): void {

        this.parent.files.forEveryInstance( instance => instance.timeline.setRelativeTime( value ) );

    }

    public setValueByPercent(
        percent: number
    ) {

        const ms = this.percentToMs( percent );

        if ( ms !== undefined ) {
            this.value = ms;
        }

    }

    public setValueByRelativeMs(
        relativeMs: number
    ) {

        if ( this.duration === undefined ) return false;

        this.value = relativeMs;

    }

    protected timer?: ReturnType<typeof setTimeout>;

    protected percentToMs(
        percent: number
    ) {

        if ( this.duration === undefined ) {
            return undefined;
        }

        return Math.floor( this.duration * (percent / 100) );

    }

    protected msToPercent(
        ms: number
    ) {

        if ( this.duration === undefined ) {
            return undefined;
        }

        return ( ms / this.duration ) * 100;

    }

    /**
     * Get one step duration
     */
    protected getBaseStepInterval(
        duration: number
    ) {
        return duration / this.interval;
    }

    /**
     * Get number of steps within the duration
     */
    protected getNumberOfSteps(
        duration: number
    ) {
        return duration / this.getBaseStepInterval(duration);
    }

    /**
     * Get the MS value of the next step
     */
    protected getNextStepMs(
        duration: number,
        ms: number
    ) {
        const stepSize = this.getBaseStepInterval( duration );
        const nextStepSize = Math.ceil( ms / stepSize ) * stepSize;
        if ( nextStepSize === 0 ) {
            return stepSize;
        }
        return Math.min( duration, nextStepSize );
    }

    /**
     * Get the next interval value for the next step
     */
    protected getNextStepInterval(
        duration: number,
        ms: number
    ) {
        const nextStepMs = this.getNextStepMs( duration, ms );
        return nextStepMs - ms;
    }


    /**
     * The main method that shall create a timer leading to the next step.
     * 
     * It might be called recursively to ensure fluent playback.
     */
    protected createTimerStep(
        recursive: boolean = false
    ) {

        if ( this.duration === undefined || this.playing === false ) {
            return;
        }

        const nextStep = this.step + 1;
        const nextValue = nextStep * this.interval;
        this.step = nextStep;

        if ( nextValue <= this.duration ) {

            if ( this.timer ) {
                clearTimeout( this.timer );
            }

            this.timer = setTimeout( () => {
                this.createTimerStep( recursive );
                this.value = nextValue;

            }, this.interval );

        } else {
            this.playing = false;
        }


    }

    /**
     * Play the entire group
     */
    play() {

        if ( this.playing === false ) {
            this.playing = true;
            this.createTimerStep(true);
            console.log( "START", this.duration, this.interval, this.getNextStepInterval( this.duration, this.value ) );
        }

    }

    /**
     * Stop the entire group
     */
    stop() {

        if ( this.playing === true ) {
            this.playing = false;
            if ( this.timer ) {
                clearTimeout( this.timer );
            }
        }

    }

    /**
     * Set the MS value to 0
     */
    reset() {
        if ( this.value !== 0 ) {
            this.value = 0;
            this.step = 0;
        }
    }









}