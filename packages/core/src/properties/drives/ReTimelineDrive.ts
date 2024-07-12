import { AbstractFile } from "../../file/IFileInstance";
import { Instance } from "../../reload/instance";
import { ParsedFileBaseInfo, ParsedFileFrame, ParsedTimelineFrame } from "../../reload/parsers/types";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { FrameBuffer } from "./FrameBuffer";
import { ITimelineDrive } from "./ITimeline";

export interface IWithTimeline extends IBaseProperty {
    timeline: ReTimelineDrive
}



type FramesMap = Map<number, ParsedTimelineFrame>

export type ReTimelineFrameChangedEventListener = (frame: ParsedTimelineFrame) => void

/** Stores the frames and the time pointer which is in the miliseconds */
export class ReTimelineDrive extends AbstractProperty<number, AbstractFile> implements ITimelineDrive {

    declare public readonly parent: Instance;

    public get duration() { return this.parent.duration; }
    public get frameCount() { return this.steps.length; }
    public readonly startTimestampRelative: number;
    /** @deprecated not in use? */
    public readonly endTimestampRelative: number;

    public readonly stepsByAbsolute: FramesMap = new Map();
    public readonly stepsByRelative: FramesMap = new Map();
    public readonly stepsByIndex: FramesMap = new Map();
    public readonly relativeSteps: number[] = [];

    protected currentStep: ParsedTimelineFrame;
    protected _onChangeListeners: Map<string, ReTimelineFrameChangedEventListener> = new Map;

    protected playing: boolean = false;
    protected timer?: ReturnType<typeof setTimeout>;

    public readonly buffer: FrameBuffer;



    public constructor(
        parent: AbstractFile,
        initial: number,
        public readonly steps: ParsedFileBaseInfo["timeline"],
        initialFrameData: ParsedFileFrame
    ) {
        super(parent, Math.max(Math.min(initial, steps.length), 0));

        this.currentStep = this.steps[this._initial];
        this.startTimestampRelative = 0;
        this.endTimestampRelative = this.steps[this.steps.length - 1].relative;

        this.steps.forEach(step => {
            this.stepsByIndex.set(step.index, step);
            this.stepsByAbsolute.set(step.absolute, step);
            this.stepsByRelative.set(step.relative, step);
            this.relativeSteps.push(step.relative);
        });

        this.buffer = new FrameBuffer(this, initialFrameData);

    }

    protected afterSetEffect(value: number): void {

        value;

        // Do nothing if no sequence
        if ( this.steps.length === 1 ) {
            return;
        }

    }

    protected validate(value: number): number {
        if ( this.steps === undefined ) {
            return value;
        }
        if (this.steps.length === 1) {
            return 0;
        }
        return this._validateRelativeTime(value);
    }

    public _validateRelativeTime(value: number): number {
        return Math.max(Math.min(value, this.steps[this.steps.length - 1].relative), 0);
    }

    public _validateIndex(value: number): number {
        return Math.max(Math.min(value, this.steps.length), 0);
    }

    public _convertRelativeToAspect(relativeTimeInMs: number) {
        return relativeTimeInMs / this.duration;
    }

    public _convertRelativeToPercent(relativeTimeInMs: number) {
        return this._convertRelativeToAspect(relativeTimeInMs) * 100;
    }

    public _convertPercenttRelative(percent: number) {
        return (this.duration * percent) / 100;
    }




    /** Event listener to changement of the current frame.
     * - the current frame is not changed every time the value changes
     * - the current frame is changed only when the ms value points fo a new previous frame
     */
    public addChangeListener(
        identificator: string,
        fn: ReTimelineFrameChangedEventListener
    ) {
        this._onChangeListeners.set(identificator, fn);
    }

    public removeChangeListener(
        identificator: string
    ) {
        this._onChangeListeners.delete(identificator);
    }

    public findPreviousRelative(relativeTimeInMs: number) {

        // Return The first step if no sequence
        if ( this.steps.length === 1 ) {
            return this.steps[0];
        }

        relativeTimeInMs = this._validateRelativeTime(relativeTimeInMs);

        const aspect = this._convertRelativeToAspect(relativeTimeInMs);

        const index = Math.ceil(aspect * this.steps.length) + 5;

        const sliceStart = this._validateIndex(index - 40);
        const sliceEnd = this._validateIndex(index);

        const reversedSubarray = this.steps
            .slice(sliceStart, sliceEnd)
            .reverse();

        const frame = reversedSubarray.find(f => {
            return f.relative <= relativeTimeInMs
        });

        console.log( "find previous", frame );

        return frame !== undefined
            ? frame
            : this.steps[0];


    }

    public findNextRelative(relativeTimeInMs: number) {

        // Return The first step if no sequence
        if ( this.steps.length === 1 ) {
            return this.steps[0];
        }

        const aspect = this._convertRelativeToAspect(relativeTimeInMs);

        const index = Math.floor(aspect * this.steps.length) - 5;

        const subarrayStart = this._validateIndex(index);
        const subarrayEnd = this._validateIndex(index + 40);

        const subarray = this.steps.slice(subarrayStart, subarrayEnd);

        const frame = subarray.find(f => {
            return f.relative >= relativeTimeInMs
        });

        return frame !== undefined
            ? frame
            : false;

    }

    public async setRelativeTime(relativeTimeInMs: number) {
        relativeTimeInMs = this._validateRelativeTime(relativeTimeInMs);
        this.value = relativeTimeInMs;

        

        this.currentStep = this.findPreviousRelative(this.value);

        let preloadedFrame = this.buffer.bufferByAbsoluteTime.get(this.currentStep.absolute);

        // console.log( "Current step", this.currentStep, preloadedFrame, Object.keys( this.buffer.bufferByAbsoluteTime ) );

        // Pokud je frame přednačtený, nastav jej
        if (preloadedFrame !== undefined) {
            console.log( "je přednastaveno", relativeTimeInMs, preloadedFrame.timestamp );
            await this.buffer.setFrame(preloadedFrame);
            return preloadedFrame;
        }
        // Pokud není přednačtený
        else {

            preloadedFrame = await this.parent.service.frameData(this.currentStep.index)

            await this.buffer.setFrame(preloadedFrame);

            return preloadedFrame;
        }
    }

    public setValueByPercent(percent: number) {
        percent = Math.min(Math.max(percent, 100), 0);
        const value = this._validateRelativeTime(Math.round(percent * this.duration));
        this.value = value;
    }



    protected enqueueStep() {

        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }

        // Do nothing for no sequences
        if ( this.steps.length === 1 ) {
            return;
        }

        // Do nothing when not playing
        if ( this.playing === false ) {
            return;
        }

        

        this.timer = setTimeout( () => {
            const next = this.findNextRelative( this.currentStep.relative );

            if ( next ) {
                this.value = next.relative;
                if ( this.playing ) {
                    this.enqueueStep();
                }

            } else {
                this.playing = false;
            }

        }, this.currentStep.offset )

    }


    play() {

        if ( this.steps.length > 1 ) {
            this.playing = true;
            this.enqueueStep();
        }

    }
    pause() {
        this.playing = false;
        clearTimeout( this.timer );
    }
    stop() {
        this.pause();
        this.value = 0;
    }



}