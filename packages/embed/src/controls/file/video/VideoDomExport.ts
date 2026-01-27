import { toBlob, toCanvas } from "html-to-image";
import { FileVideoExport } from "../FileVideoExport";

type RecordedFrame = {
    index: number,
    offset: number,
    blob: Blob
};

type RecordedFrameMeta = {
    index: number,
    offset: number
};

export class VideoDomExport {

    private static readonly DB_NAME = "labir-video";
    private static readonly STORE_NAME = "frames";
    private static readonly PREFETCH_WINDOW = 5;

    private buffer: RecordedFrameMeta[] = [];
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

    /** Open IndexedDB connection */
    private async openDb(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(VideoDomExport.DB_NAME, 1);
            req.onupgradeneeded = () => {
                const db = req.result;
                if (!db.objectStoreNames.contains(VideoDomExport.STORE_NAME)) {
                    db.createObjectStore(VideoDomExport.STORE_NAME, { keyPath: "index" });
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }

    /** Store frame in IndexedDB */
    private async putFrame(index: number, offset: number, blob: Blob): Promise<void> {
        try {
            const db = await this.openDb();
            const tx = db.transaction(VideoDomExport.STORE_NAME, "readwrite");
            tx.objectStore(VideoDomExport.STORE_NAME).put({ index, offset, blob });
            await new Promise<void>((resolve, reject) => {
                tx.oncomplete = () => resolve();
                tx.onerror = () => reject(tx.error);
            });
            db.close();
        } catch (error) {
            console.error("Failed to store frame in IndexedDB:", error);
            throw error;
        }
    }

    /** Retrieve frame from IndexedDB */
    private async getFrame(index: number): Promise<RecordedFrame | undefined> {
        try {
            const db = await this.openDb();
            const tx = db.transaction(VideoDomExport.STORE_NAME, "readonly");
            const req = tx.objectStore(VideoDomExport.STORE_NAME).get(index);
            const result = await new Promise<RecordedFrame | undefined>((resolve, reject) => {
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });
            db.close();
            return result;
        } catch (error) {
            console.error("Failed to retrieve frame from IndexedDB:", error);
            return undefined;
        }
    }

    /** Delete frame from IndexedDB */
    private async deleteFrame(index: number): Promise<void> {
        try {
            const db = await this.openDb();
            const tx = db.transaction(VideoDomExport.STORE_NAME, "readwrite");
            tx.objectStore(VideoDomExport.STORE_NAME).delete(index);
            await new Promise<void>((resolve, reject) => {
                tx.oncomplete = () => resolve();
                tx.onerror = () => reject(tx.error);
            });
            db.close();
        } catch (error) {
            console.error("Failed to delete frame from IndexedDB:", error);
        }
    }

    /** Clear all frames from IndexedDB */
    private async clearAllFrames(): Promise<void> {
        try {
            const db = await this.openDb();
            const tx = db.transaction(VideoDomExport.STORE_NAME, "readwrite");
            tx.objectStore(VideoDomExport.STORE_NAME).clear();
            await new Promise<void>((resolve, reject) => {
                tx.oncomplete = () => resolve();
                tx.onerror = () => reject(tx.error);
            });
            db.close();
        } catch (error) {
            console.error("Failed to clear frames from IndexedDB:", error);
        }
    }

    /** Clear the recording buffer entirely */
    public async clearBuffer(): Promise<this> {
        this.buffer = [];
        await this.clearAllFrames();
        return this;
    }

    private async recordCurrentFrame(
        relative: number
    ) {

        if (!this.exportElement) {
            return false;
        }

        try {

            const blob = await toBlob(this.exportElement, {
                quality: 0.85,
                type: "image/jpeg",
            });

            const imageData = await createImageBitmap(blob!)!;

            this.context?.drawImage(imageData, 0, 0, this.width, this.height);
            imageData.close();

            const frameTime = relative * 1000;

            const frame = new VideoFrame(
                this.compilationCanvas!,
                {
                    timestamp: frameTime
                }
            )



        } catch (error) {
            console.error("Failed to record frame:", error);
        }

    }

    /** Prefetch frame from IndexedDB */
    private async prefetchFrame(index: number): Promise<RecordedFrame | undefined> {
        return await this.getFrame(index);
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
                    frame.relative
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

        const chunks: Blob[] = [];
        recorder.ondataavailable = (e) => {
            if (e.data && e.data.size) {
                chunks.push(e.data);
            }
        };

        this.parent.log("Recording started", Date.now());
        recorder.start();

        try {
            // Prefetch map for smooth playback
            const prefetchCache = new Map<number, Promise<RecordedFrame | undefined>>();

            // Initial prefetch of first frames
            for (let i = 0; i < Math.min(VideoDomExport.PREFETCH_WINDOW, this.buffer.length); i++) {
                const meta = this.buffer[i];
                prefetchCache.set(meta.index, this.prefetchFrame(meta.index));
            }

            // Main rendering loop
            for (let i = 0; i < this.buffer.length; i++) {
                const meta = this.buffer[i];

                // Get frame from prefetch cache
                const framePromise = prefetchCache.get(meta.index);
                const frame = framePromise ? await framePromise : await this.getFrame(meta.index);

                if (frame && this.context) {
                    // Draw frame to canvas
                    const img = await createImageBitmap(frame.blob);
                    this.context.clearRect(0, 0, this.compilationCanvas.width, this.compilationCanvas.height);
                    this.context.drawImage(img, 0, 0, this.compilationCanvas.width, this.compilationCanvas.height);
                    img.close?.();
                }

                // Calculate delay until next frame
                const nextMeta = this.buffer[i + 1];
                const delay = nextMeta ? nextMeta.offset : 1000 / 30;

                await new Promise(resolve => setTimeout(resolve, delay));

                // Delete processed frame from IndexedDB to free space
                await this.deleteFrame(meta.index);

                // Prefetch next frame in window
                const prefetchIndex = i + VideoDomExport.PREFETCH_WINDOW;
                if (prefetchIndex < this.buffer.length) {
                    const prefetchMeta = this.buffer[prefetchIndex];
                    prefetchCache.set(prefetchMeta.index, this.prefetchFrame(prefetchMeta.index));
                }

                // Clean up old prefetch promises
                prefetchCache.delete(meta.index);
            }

            // Stop recorder after all frames are rendered
            recorder.stop();

            // Wait for recorder to finish and download
            recorder.onstop = () => {
                const videoBlob = new Blob(chunks, { type: output.mime });
                const url = URL.createObjectURL(videoBlob);
                const filename = ["recording", output?.ext ?? "webm"].join(".");
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(url);
                this.parent.log("Recording completed and downloaded", Date.now());
            };

        } catch (error) {
            console.error("Failed during canvas animation:", error);
            recorder.stop();
            throw error;
        } finally {
            // Cleanup: ensure all frames are deleted from IndexedDB
            await this.clearAllFrames();
            this.buffer = [];
        }

    }

    public async performFileDownload(): Promise<void> {
        this.parent.log("Video soubor je stažen");
    }


}