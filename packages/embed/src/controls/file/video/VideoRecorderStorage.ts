import { Instance } from "@labirthermal/core";
import { FileVideoExport } from "../FileVideoExport";

import { set, createStore, UseStore, get, clear } from 'idb-keyval'

export type VideoExportFrameRecord = {
    index: number,
    timeInRelativeMs: number,
    buffer: ArrayBuffer,
    type: string
}

export class VideoRecorderStorage {

    private static readonly STORE_NAME = "frame";

    // mutex promise: resolved = volno, pending = někdo zapisuje
    private writeLock: Promise<void> = Promise.resolve();

    private readonly storedIndicies: number[] = [];

    private get DB_NAME(): string {
        return [
            "labirthermal-video-export",
            this.file.id ?? "default"
        ].join("_");
    }

    public constructor(
        private readonly file: Instance
    ) {

    }

    private store?: UseStore;


    private async getStore() {

        if ( this.store ) return this.store;

        this.store = createStore(
            this.DB_NAME,
            VideoRecorderStorage.STORE_NAME
        );

        return this.store;

    }

    public async put(
        index: number,
        relative: number,
        blob: Blob
    ): Promise<void> {

        const buffer = await blob.arrayBuffer();

        const record: VideoExportFrameRecord = {
            index,
            timeInRelativeMs: relative,
            buffer: buffer,
            type: blob.type
        };

        const store = await this.getStore();

        await set(index, record, store);

        this.storedIndicies.push(index);

    }

    public async forEveryRecord(
        callback: (record: VideoExportFrameRecord) => Promise<void>
    ): Promise<void> {

        // Sort the stored indicies for sure
        this.storedIndicies.sort((a, b) => a - b);

        const store = await this.getStore(); 

        for (const index of this.storedIndicies) {

            const record = await get<VideoExportFrameRecord|undefined>(index, store);

            if ( record ) {
                await callback(record);
            }
        }

    }

    public async clear(): Promise<void> {

        const store = await this.getStore();

        clear(store);

        this.storedIndicies.length = 0;

    }


}