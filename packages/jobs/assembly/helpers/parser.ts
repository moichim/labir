import { readTimestamp } from "./readTimestamp";

class FileInfo {
    constructor(
        public width: u16,
        public height: u16,
        public bytesize: u32,
        public timestamp: f64
    ) {}
}

export function baseInfo( file: ArrayBuffer ): number {

    const view = new DataView(file);

    const width = view.getUint16(17, true);
    const height = view.getUint16(19, true);

    const bytesize = file.byteLength;

    const timestamp = readTimestamp(view, 5);

    return bytesize;

}