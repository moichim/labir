import { Instance } from "../../../file/instance";
import { AbstractProperty, IBaseProperty } from "../../abstractProperty";
import { CallbacksManager } from "../../callbacksManager";

export interface IWithRedording extends IBaseProperty {
    recording: RecordingDrive
}

export class RecordingDrive extends AbstractProperty<boolean, Instance> {

    declare parent: Instance;

    protected stream?: MediaStream;
    protected recorder?: MediaRecorder;
    protected mimeType?: string;

    protected _isRecording: boolean = false;
    protected _mayStop: boolean = true;
    public get mayStop() {return this._mayStop;}
    protected set mayStop( value: boolean ) {
        this._mayStop = value;
        this.callbackMayStop.call( this.mayStop );
    }

    protected recordedChunks: Blob[] = [];

    public readonly callbackMayStop = new CallbacksManager<(value: boolean)=>void>();



    protected validate(value: boolean): boolean {
        return value;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected afterSetEffect(value: boolean): void {}

    public start() {

        if (this.value === true) {
            throw new Error("Recording already in process - can not start another one");
        }

        const { stream, recorder } = this.initRecording();

        this.stream = stream;
        this.recorder = recorder;

        this.value = true;

        this.recorder.addEventListener("dataavailable", event => {
            if (event.data.size > 0) {
                this.recordedChunks.push(event.data);
                this.download();
                this.clearRecording();
            }

        });

        this.recorder.start();

    }

    public end() {

        if (this.value === false) {
            throw new Error("Recording has not started yet - can not end it!");
        }

        if (this.recorder === undefined) {
            throw new Error("Error ending recording - no MediaRecorder instance created.");
        }

        this.recorder.stop();
        this.value = false;
        this.mayStop = true;

    }

    /** Records the entire file from start to the end. */
    public async recordEntireFile() {

        if ( this.value === true ) {
            throw new Error( "Already recording the entire file. Can not start until the current recording ends." );
        }

        await this.parent.timeline.setValueByPercent(0);

        this.mayStop = false;

        const cllbackId = "recording entire file";

        this.parent.timeline.callbacksEnd.add(cllbackId, () => {
            this.end();
            this.parent.timeline.callbacksEnd.delete(cllbackId);
        });

        this.parent.timeline.play();

        this.start();

    }

    protected initRecording() {

        if (this.stream || this.recorder) {
            throw new Error("Recording was already initialised! Can not initialise it again until it stops!");
        }

        const stream = this.parent.canvasLayer.canvas.captureStream(25);

        const types = [
            "video/mp4",
            "video/webm;codecs=h264",
            "video/webm;codecs=vp8",
            "video/webm;codecs=daala",
            "video/webm",
        ];

        types.forEach(type => {
            if (this.mimeType === undefined && MediaRecorder.isTypeSupported(type))
                this.mimeType = type;
        });

        const options: MediaRecorderOptions = {
            mimeType: this.mimeType
        }

        const recorder = new MediaRecorder(stream, options);

        return {
            stream,
            recorder,
            options
        }

    }

    protected download() {
        const blob = new Blob(this.recordedChunks, {
            type: this.mimeType
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.style.display = "none";
        a.href = url;
        a.download = this.parent.fileName
        .replace(".lrc", `__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value!.from.toFixed(2)}_to-${this.parent.group.registry.range.value!.to.toFixed(2)}.webm`);
        document.body.appendChild(a);

        a.click();
        window.URL.revokeObjectURL(url);
    }

    protected clearRecording() {
        if (this.recorder) {
            this.recorder.stop();
            delete this.recorder;
        }

        if (this.stream) {
            delete this.stream;
        }

        if (this.recordedChunks.length > 0) {
            this.recordedChunks = [];
        }

        this.value = false;
        this.mimeType = undefined;
    }

}