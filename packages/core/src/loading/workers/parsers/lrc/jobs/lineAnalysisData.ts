import { LineAnalysisData } from "../../structure";

export const lineAnalysisData = async (
    entireFileBuffer: ArrayBuffer,
    x1: number,
    y1: number,
    x2: number,
    y2: number
): Promise<LineAnalysisData> => {

    const view = new DataView(entireFileBuffer);

    const fileWidth = view.getUint16(17, true);
    const fileHeight = view.getUint16(19, true);

    // DataType byte 15
    const dataType = view.getUint8(15);

    const isOnLine = (x: number, y: number): boolean => {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.abs(dy * x - dx * y + x2 * y1 - y2 * x1) / Math.sqrt(dx * dx + dy * dy);
        return distance < 1; // Tolerance for being "on the line"
    };

    const output: LineAnalysisData = {};

    // Iterate over frames and calculate data
    const frameHeaderByteSize = 57;
    let pixelByteSize = 2; // Assuming int16 for simplicity
    if (dataType === 1) pixelByteSize = 4;
    const framePixelsSize = fileWidth * fileHeight * pixelByteSize;
    const frameSize = frameHeaderByteSize + framePixelsSize;

    const streamSubset = entireFileBuffer.slice(25);

    const frameCount = streamSubset.byteLength / frameSize;


    const readTimestamp = (readingView: DataView, index: number) => {
        // Timestamp


        const bigIntTime = readingView.getBigInt64(index, true);

        // Constant representing the Unix epoch in milliseconds
        const UnixEpoch: bigint = 62135596800000n;

        // Constants related to ticks (assuming ticks are stored as milliseconds)
        const TicksPerMillisecond: bigint = 10000n;
        const TicksPerDay: bigint = 24n * 60n * 60n * 1000n * TicksPerMillisecond;

        // Maximum value a 64-bit signed integer can hold
        const TicksCeiling: bigint = 0x4000000000000000n; // Assuming int64_t behaves like a signed 64-bit integer


        // Mask to extract the sign bit from a 64-bit unsigned integer
        const LocalMask: bigint = 0x8000000000000000n;

        // Mask to extract the tick value from a 64-bit unsigned integer
        const TicksMask: bigint = 0x3fffffffffffffffn;

        let ticks = bigIntTime & TicksMask;

        const isLocalTime = bigIntTime & LocalMask;

        if (isLocalTime) {

            if (ticks > (TicksCeiling - TicksPerDay)) {
                ticks -= TicksCeiling;
            }

            if (ticks < 0) {
                ticks += TicksPerDay;
            }

        }

        // the time is UTC, needs to be converted to local time zone
        const milliseconds = ticks / TicksPerMillisecond - UnixEpoch;

        return Number(milliseconds);

    };

    const readFrame = (index: number) => {

        const frameSubsetStart = index * frameSize;
        const frameSubsetEnd = frameSubsetStart + frameSize;
        const frameArrayBuffer = streamSubset.slice(frameSubsetStart, frameSubsetEnd);

        const frameView = new DataView(frameArrayBuffer);
        const timestamp = readTimestamp(frameView, 0 );
        const min = frameView.getFloat32(8, true);
        const max = frameView.getFloat32(12, true);
        const range = max - min;

        let _min = Infinity;
        let _max = -Infinity;
        let sum = 0;
        let count = 0;

        const xStart = Math.min(x1, x2);
        const xEnd = Math.max(x1, x2);
        const yStart = Math.min(y1, y2);
        const yEnd = Math.max(y1, y2);

        for (let y = yStart; y <= yEnd; y++) {
            for (let x = xStart; x <= xEnd; x++) {

                if (isOnLine(x, y)) {

                    const pointIndex = frameHeaderByteSize + (y * fileWidth + x) * pixelByteSize;

                    let value: number = NaN;

                    if (dataType === 1) {
                        value = frameView.getFloat32(pointIndex, true);
                    } else {
                        const valueRaw = frameView.getInt16(pointIndex, true);
                        const UINT16_MAX = 65535;
                        const mappedValue = valueRaw / UINT16_MAX;
                        value = min + (range * mappedValue);
                    }

                    _min = Math.min(_min, value);
                    _max = Math.max(_max, value);
                    sum += value;
                    count++;

                }

            }
        }

        return {
            timestamp: Number(timestamp),
            result: {
                min: _min,
                max: _max,
                avg: sum / count,
                count
            }
        };
    };

    for (let i = 0; i < frameCount; i++) {
        const frame = readFrame(i);
        output[frame.timestamp] = frame.result;
    }

    return output;
};