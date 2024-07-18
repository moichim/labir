import { AbstractFile } from "../../file/AbstractFile";
import { ILrcFrame } from "../../loading/mainThread/parsers/lrc/LrcTrame";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { ITimelineDrive } from "./ITimeline";

export interface IWithTimeline extends IBaseProperty {
    timeline: TimelineDriveOld
}



export type FrameType = ILrcFrame & {
    /** Index of the frame within the sequence */
    index: number,
    /** Milisecondes since start of the sequence */
    ms: number,
}

type Frames = Array<FrameType>;
type FramesByTimestamp = Map<number, FrameType>;
type FramesByMs = Map<number, FrameType>;
type FramesByIndex = Map<number, FrameType>;

export type TimelineFrameChangedEventListener = (frame: FrameType) => void

/** Stores the frames and the time pointer which is in the miliseconds @deprecated */
export class TimelineDriveOld extends AbstractProperty<number, AbstractFile> implements ITimelineDrive {

    protected readonly frames: Frames;
    public get duration() { return this.parent.duration; }
    public get frameCount() { return this.frames.length; }

    public readonly framesByTimestamp: FramesByTimestamp = new Map();
    public readonly framesByMs: FramesByMs = new Map();
    public readonly framesByIndex: FramesByIndex = new Map();
    public readonly localTimeline: number[] = [];

    protected _currentFrame: FrameType;
    protected set currentFrame(
        frame: FrameType
    ) {
        if ( frame.ms !== this._currentFrame.ms ) {
            this._currentFrame = frame;
            this._onChangeListeners.forEach(fn => fn(this._currentFrame));
            this.parent.pixels = frame.pixels;
        }
    }
    public get currentFrame() {
        return this._currentFrame;
    }

    public get nextFrame() {
        const current = this.currentFrame;
        const nextIndex = current.index + 1;
        if (nextIndex <= this.frameCount) {
            return this.framesByIndex.get(nextIndex);
        }
        return undefined;
    }

    public get nextFrameTimeoutDuration() {
        if (this.nextFrame !== undefined) {
            return this.nextFrame.ms - this.currentFrame.ms;
        }
        return undefined;
    }


    protected _onChangeListeners: Map<string, TimelineFrameChangedEventListener> = new Map;

    /** Event listener to changement of the current frame.
     * - the current frame is not changed every time the value changes
     * - the current frame is changed only when the ms value points fo a new previous frame
     */
    public addChangeListener(
        identificator: string,
        fn: TimelineFrameChangedEventListener
    ) {
        this._onChangeListeners.set(identificator, fn);
    }

    public removeChangeListener(
        identificator: string
    ) {
        this._onChangeListeners.delete(identificator);
    }


    public constructor(
        public readonly parent: AbstractFile,
        initial: number
    ) {
        super(parent, initial);

        const startOfSequence = this.parent.frames[0].timestamp;

        this.frames = this.parent.frames.map((frame, index) => {

            const ms = frame.timestamp - startOfSequence;
            // Create the value
            const value = {
                ...frame,
                index,
                ms: ms
            };

            // Bind the value to maps
            this.framesByIndex.set(index, value);
            this.framesByMs.set(value.ms, value);
            this.framesByTimestamp.set(value.timestamp, value);

            // Add the MS to the MS drive
            this.localTimeline.push(value.ms);

            // Return the value
            return value;

        });

        this._currentFrame = this.frames[0];

    }

    /** 
     * Get the next frame to a given MS
     * @todo improve the performance
     * @internal
     */
    getNextFrameToMs(
        ms: number
    ) {

        // Find the first timestamp in local timeline
        const nextTimestamp = this.localTimeline.find(timestamp => timestamp > ms);

        if (nextTimestamp === undefined) {
            return undefined;
        }

        return this.framesByMs.get(nextTimestamp)!;

    }

    /** 
     * Get the previous frame to a given MS 
     * @todo improve performance
     * @internal
     */
    getPreviousFrameToMs(
        ms: number
    ) {

        const previousTimestamp = this.localTimeline.reverse().find(timestamp => timestamp < ms);

        if (previousTimestamp === undefined) {
            return undefined;
        }

        return this.framesByMs.get(previousTimestamp)!;

    }



    /** Check if the value is within the duration */
    protected validate(value: number): number {

        // Negative value is not allowed
        if (value < 0)
            return 0;

        // Value must be within the duration
        return value <= this.duration
            ? value
            : this.duration;

    }

    /** Any time the value is set, check if there is a frame and eventually setit */
    protected afterSetEffect(
        value: number
    ): void {

        if ( value === this.currentFrame.ms ) {
            // Do nothing
        }
        // If the value exists in the timeline, activate it
        else if (this.localTimeline.includes(value)) {
            const newFrame = this.framesByMs.get( value )!;
            if ( this.currentFrame.ms !== newFrame.ms )
                this.currentFrame = newFrame;
        }
        // Otherwise, activate the previous frame
        else {
            const prevFrame = this.getPreviousFrameToMs(value);
            if (prevFrame) {
                if ( prevFrame.ms !== this.currentFrame.ms )
                    this.currentFrame = prevFrame;
            }
        }
    }

    setMs(ms: number) {
        this.value = ms;
    }

    setValueByPercent(
        percentage: number
    ) {
        const percent = Math.min( Math.max( percentage, 0 ), 100 );
        const time = ( this.duration / 100 ) * percent;
        this.value = Math.floor( time );
    }

    goToNextFrame() {
        if (this.nextFrame) {
            this.value = this.nextFrame.ms;
        }
    }

    static formatDuration( ms: number ) {
        const millis = ms % 1000;
        const secs = ( ms - millis ) % ( 1000 * 60 );
        const mins = ( ms - millis - secs ) / ( 1000 * 60 * 60 );

        return [
            mins, secs, millis
        ].join( ":" );
    }

    protected timer?: ReturnType<typeof setTimeout>;
    play() {

        this.timer = setInterval( () => {
            this.goToNextFrame();
        }, this.nextFrameTimeoutDuration );

    }
    pause() {
        clearInterval( this.timer );
    }
    stop() {
        clearInterval( this.timer );
        this.setMs(0);
    }



}