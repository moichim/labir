import { ParsedFileFrame, ParsedTimelineFrame } from "../../reload/parsers/types";
import { ReTimelineDrive } from "./ReTimelineDrive";

export class FrameBuffer {


    protected _currentFrame!: ParsedFileFrame;

    public get currentFrame() {
        return this._currentFrame;
    }

    public set currentFrame( frame: ParsedFileFrame ) {
        this._currentFrame = frame;
        this.propagate();
    }

    public get currentStep() {
        return this.drive.stepsByAbsolute.get( this._currentFrame.timestamp)!;
    }

    protected _bufferBySteps: Map<ParsedTimelineFrame,ParsedFileFrame> = new Map;

    public get bufferedStepsArray() {
        return Array.from( this._bufferBySteps.keys() );
    }

    

    public get bufferRelativeTimestamps() {
        return this.bufferedStepsArray.map( step => step.relative );
    }

    /*

    protected get __bufferedIndicies() {
        return this.bufferedStepsArray.map( step => step.index );
    }

    protected get _bufferedAbsoluteTimestamps() {
        return this.bufferedStepsArray.map( step => step.absolute );
    }

    */


    readonly bufferSize:number =  4;

    public readonly isSequence: boolean;


    constructor(
        protected readonly drive: ReTimelineDrive,
        firstFrame: ParsedFileFrame
    ) {

        this.isSequence = drive.parent.frameCount > 1;

        this.currentFrame = firstFrame;

    }

    public async init() {

        return await this.preload( this.currentStep );

    }



    /**
     * Activate a step
     * - look for the buffer for the corresponding frame
     * - if there is a corresponding frame, apply it
     * - if there is none, fetch it
     * - if sequence, fetch buffer
     */
    public async recieveStep(
        step: ParsedTimelineFrame
    ) {

        // CURRENT FRAME

        // Look for buffered frame
        let frame = this._bufferBySteps.get( step );

        // If the frame is not buffered, fetch it
        if ( frame === undefined ) {
            frame = await this.drive.parent.service.frameData( step.index );
        }

        // Store the new frame
        this._currentFrame = frame;




        // BUFFER

        const update = await this.preload( step );

        this.propagate();

        
        return update;


    }



    protected propagate() {
        this.drive.parent.pixels = this.currentFrame.pixels;
    }


    protected async preload( step: ParsedTimelineFrame ) {

        // Get steps that should be in the buffer

        // Select steps from this index
        const subsetStart = step.index + 1 < this.drive.relativeSteps.length
            ? step.index + 1
            : NaN;

        // Select steps to this index
        const subsetEnd = isNaN( subsetStart )
            ? NaN
            : this.drive._validateIndex( subsetStart + this.bufferSize );

        // Do nothing if subset is invalid
        if (
            ( isNaN( subsetStart ) || isNaN( subsetEnd ) )
            || subsetStart > subsetEnd
        ) {

            if ( step.relative === this.drive.parent.duration ) {
                this._bufferBySteps.clear();
            }

            return {
                relativeTime: this.drive.value,
                currentFrame: this.currentFrame,
                currentStep: this.currentStep,
                buffer: this.bufferedStepsArray,
                preloaded: false,
                hasChanged: true
            };
        }

        // Steps that should be in the buffer
        const stepsThatShouldBe = Array.from( this.drive.stepsByIndex.values() ).filter( step => {
            return step.index >= subsetStart && step.index < subsetEnd
        } );


        // Get only those new steps that are not in the buffer
        const newSteps = stepsThatShouldBe.filter( step => ! this.bufferedStepsArray.includes( step ) );

        // Asynchronously read the frames
        const newFrames = await Promise.all( newSteps.map( step => {
            return this.drive.parent.service.frameData( step.index )
        } ) );

        console.log( "On",step, "Steps that should be", stepsThatShouldBe );

        // Add new steps to the registry
        newFrames.forEach( ( frame, index ) => {
            const step = newSteps[index];
            this._bufferBySteps.set( step, frame );
        } );

        // Remove all values that are not in new Steps
        this.bufferedStepsArray.forEach( (step) => {

            if ( ! stepsThatShouldBe.includes( step ) ) {
                this._bufferBySteps.delete( step );
            }

        } );

        return {
            currentFrame: this.currentFrame,
            currentStep: this.currentStep,
            relativeTime: this.drive.value,
            buffer: this.bufferedStepsArray,
            preloaded: true,
            hasChanged: true
        }

    }

}