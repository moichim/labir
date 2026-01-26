import { toBlob } from "html-to-image";
import { FileVideoExport } from "../FileVideoExport";

type RecordedFrame = {
    index: number,
    offset: number,
    blob: Blob
};

type RecordedFrameBuffer = RecordedFrame[];

export class VideoDomExport {

    private buffer: RecordedFrameBuffer = [];
    private context?: CanvasRenderingContext2D;

    private get innerInstance() { return this.parent.innerInstance; }
    private get exportElement() { return this.parent.exportElement; }
    private get compilationCanvas() { return this.parent.compilationCanvas; }

    private width!: number;
    private height!: number;

    constructor(
        private readonly parent: FileVideoExport
    ) {

    }

    /** Clear the recording buffer entirely */
    public clearBuffer(): this {
        this.buffer = [];
        return this;
    }

    private async recordCurrentFrame(
        index: number,
        offset: number
    ) {

        if (!this.exportElement) {
            return false;
        }

        try {
            const blob = await toBlob(this.exportElement);

            this.buffer.push({
                index,
                offset,
                blob: blob!
            });
        } catch (error) {
            console.error(error);
        }

    }

    /** Vezme frame z bufferu a vykreslí ho do canvasu. Nic víc nedělá */
    private async applyFrameTocanvas(
        index: number
    ) {

        const frame = this.buffer.find(f => f.index === index);
        if (frame && this.context) {

            const img = await createImageBitmap(frame.blob);

            this.context.drawImage(img, 0, 0);

        }

    }

    public async performRecordingDom() {

        this.buffer = [];

        this.width = this.exportElement?.offsetWidth ?? 0;
        this.height = this.exportElement?.offsetHeight ?? 0;

        if (this.innerInstance && this.exportElement) {

            for (let frame of this.innerInstance.timeline.frames) {

                // Go to the current frame
                await this.innerInstance.timeline.setRelativeTime(frame.relative);

                // Store the appearance of the export DOM
                await this.recordCurrentFrame(
                    frame.index,
                    frame.offset
                );

            }

        }

    }

    /** Vezme data z bufferu a vykreslí je do canvasu v patřičných časech */
    public async performCanvasAnimation() {

        if (this.buffer.length === 0) {
            alert("Nemám žádný buffer");
            return;
        }

        if (this.compilationCanvas === undefined) {
            alert("Nemám žádný kompoziční canvas");
            return;
        }

        this.context = this.compilationCanvas.getContext("2d")!;

        const output = this.innerInstance?.recording.getOutputMimeType()!;

        this.compilationCanvas.width = this.width;
        this.compilationCanvas.height = this.height;

        const stream = this.compilationCanvas.captureStream(30);

        const recorder = new MediaRecorder(
            stream, {
            mimeType: output?.mime ?? "video/webm"
        }
        );

        this.parent.log("Klikl jsem na start", Date.now());
        recorder.start();

        recorder.onstart = async () => {

            for (let frame of this.buffer) {

                await this.applyFrameTocanvas(frame.index);

                const nextFrame = this.buffer.find(f => f.index === frame.index + 1);

                if (nextFrame) {
                    // Následuje nějaký frame => počkej na jeho offset
                    const delay = nextFrame.offset;
                    await new Promise(resolve => setTimeout(resolve, delay));
                } else {
                    // Poslední frame => konec
                    break;
                }

                recorder.stop();

            }


        }







        recorder.ondataavailable = (e) => {

            const videoBlob = new Blob([e.data], { type: output.mime });

            const url = URL.createObjectURL(videoBlob);

            const filename = [
                "recording",
                output?.ext ?? "webm"
            ].join(".");

            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(url);

        };




    }

    public async performFileDownload(): Promise<void> {
        this.parent.log("Video soubor je stažen");
    }


}