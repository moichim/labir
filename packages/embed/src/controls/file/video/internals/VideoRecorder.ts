import { Instance } from "@labirthermal/core";
import { toBlob } from "html-to-image";
import { BufferTarget, getFirstEncodableVideoCodec, Mp4OutputFormat, Output, QUALITY_VERY_HIGH, VideoSample, VideoSampleSource } from "mediabunny";
import { VideoRecorderStorage } from "./VideoRecorderStorage";
import { AbstractSingleVideoExport } from "../AbstractSingleVideoExport";

export class VideoRecorder {

    private muxingCanvas?: OffscreenCanvas;
    private muxingContext?: OffscreenCanvasRenderingContext2D;

    private readonly file: Instance;
    private readonly exportedElement: HTMLElement;

    constructor(

        private readonly app: AbstractSingleVideoExport
    ) {

        this.file = app.innerFile!;
        this.exportedElement = app.exportedElement!;

    }

    private getMuxingCanvas(): OffscreenCanvas {

        if (this.muxingCanvas) return this.muxingCanvas;

        const bounds = this.exportedElement.getBoundingClientRect();

        const canvas = new OffscreenCanvas( bounds.width, bounds.height);

        this.muxingCanvas = canvas;

        return this.muxingCanvas;

    }

    private getMuxingContext(): OffscreenCanvasRenderingContext2D {

        if (this.muxingContext) return this.muxingContext;
        if (this.muxingCanvas === undefined) this.getMuxingCanvas();
        this.muxingContext = this.muxingCanvas!.getContext("2d", { alpha: false })!;

        return this.muxingContext;
    }


    private async recordFrames(
        storage: VideoRecorderStorage
    ): Promise<void> {

        for (const frame of this.file.timeline.frames) {

            await this.file.timeline.setRelativeTime(frame.relative);

            await this.file.draw();

            // Convert the html to a blob
            const blob = await toBlob(
                this.exportedElement,
                
                {
                    quality: this.app.renderProps.jpegQuality,
                    type: "image/jpeg",
                }
                
            );

            if (blob) {

                await storage.put(
                    frame.index,
                    frame.relative,
                    blob!
                );

            }

        }

    }


    private async composeVideo(
        storage: VideoRecorderStorage
    ): Promise<void> {

        const output = new Output({
            target: new BufferTarget(), // stored in memory
            format: new Mp4OutputFormat()
        });

        const getSupportedVideoCodecs = output.format.getSupportedVideoCodecs();

        console.log(  "Supported video codecs:", getSupportedVideoCodecs );

        const codec = await getFirstEncodableVideoCodec(
            output.format.getSupportedVideoCodecs() 
        );

        console.log( "selected codec:", codec );

        const source = new VideoSampleSource({
            codec: "vp9",//codec!,
            bitrate: this.app.renderProps.mp4Quality
        });

        output.addVideoTrack( source );

        output.start();

        const canvas = this.getMuxingCanvas();
        const width = canvas.width;
        const height = canvas.height;

        const context = this.getMuxingContext();

        await storage.forEveryRecord( async ( record ) => {

            const blob = new Blob( [ record.buffer ], { type: record.type } );

            const bitmap = await createImageBitmap( blob );
            context.clearRect(0, 0, width, height);
            context.drawImage(bitmap, 0, 0);

            const videoFrame = new VideoFrame(
                canvas,
                {
                    timestamp: record.timeInRelativeMs * 1000
                }
            );

            const sample = new VideoSample(
                videoFrame
            );

            await source.add( sample, {
                keyFrame: true
            } );

            videoFrame.close();
            sample.close();
            bitmap.close();

        } );

        source.close();

        await output.finalize();

        const blob = new Blob([output.target.buffer!], { type: "video/mp4" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "exported-video.mp4";
        a.click();
        a.remove();



    }




    public async capture(): Promise<void> {

        const start = performance.now();

        const storage = new VideoRecorderStorage(this.file);

        await this.recordFrames( storage );

        const mid = performance.now();
        console.log( "Recording time:", mid - start, "ms", ( new Date() ).setTime( mid - start ) );

        await this.composeVideo( storage );

        const end = performance.now();
        console.log( "Composing time:", end - mid, "ms", ( new Date() ).setTime( end - mid ) );

        await storage.clear();

        const clear = performance.now();

        const recordTime = clear - start;
        console.log( "Clear time:", clear - end, "ms", ( new Date() ).setTime( clear - end ) );
        console.log( "Total time:", recordTime, "ms", ( new Date() ).setTime( recordTime ) );





        /*

        const output = new Output({
            target: new BufferTarget(), // stored in memory
            format: new Mp4OutputFormat()
        });


        const source = new VideoSampleSource({
            codec: "vp8",
            bitrate: 1e6
        });

        output.addVideoTrack(source);

        output.start();

        const canvas = this.getMuxingCanvas();
        const width = canvas.width;
        const height = canvas.height;

        const context = this.getMuxingContext();


        for (const frame of this.file.timeline.frames) {

            await this.file.timeline.setRelativeTime(frame.relative);

            await this.file.draw();

            // Convert the html to a blob
            const blob = await toBlob(
                this.exportedElement,
                {
                    quality: 0.85,
                    type: "image/jpeg",
                }
            );

            if (blob) {

                const bitmap = await createImageBitmap(blob);
                context.clearRect(0, 0, width, height);
                context.drawImage(bitmap, 0, 0);

                const videoFrame = new VideoFrame(
                    canvas,
                    {
                        timestamp: frame.relative * 1000
                    }
                );

                const sample = new VideoSample(
                    videoFrame
                );

                await source.add(sample, {
                    keyFrame: true
                });

                videoFrame.close();
                sample.close();
                bitmap.close();

            } else {

                console.error("Did not manage to create blob for frame at relative time:", frame.relative);

            }

        }

        source.close();

        await output.finalize();

        const blob = new Blob([output.target.buffer!], { type: "video/mp4" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "exported-video.mp4";
        a.click();
        a.remove();

        return undefined;

        */
    }





}