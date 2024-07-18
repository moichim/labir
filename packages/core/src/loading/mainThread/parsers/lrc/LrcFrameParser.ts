import { ILrcFrame } from "./LrcTrame";
import { LrcUtils } from "./LrcUtils";

export class LrcFrameParser {

    constructor(
        protected readonly arrayBuffer: ArrayBuffer,
        protected readonly width: number,
        protected readonly height: number,
        protected readonly dataType: number,
        protected readonly frameCount: number,
        protected readonly frameByteSize: number,
        protected readonly pixelByteSize: number
    ) {

    }

    parseFrame(
        index: number
    ) {
        if ( 
            ! Number.isInteger( index ) 
            // || index < this.frameCount
            // || index > this.frameCount
        ) {
            throw new Error( `The frame index ${index} is invalid!` );
        }

        const frameSubsetStart = index * this.frameByteSize;
        const frameSubsetEnd = frameSubsetStart + this.frameByteSize

        const frameArrayBuffer = this.arrayBuffer.slice( 
            frameSubsetStart, 
            frameSubsetEnd
        );

        const view = new DataView( frameArrayBuffer );

        const frameMin = LrcUtils.readFloat32(8, view);
        const frameMax = LrcUtils.readFloat32(12, view);
        // Get frame timestamp
        const frameData: ILrcFrame = {
            timestamp: LrcUtils.readDotnetTimestamp( 0, view ),
            min: frameMin,
            max: frameMax,
            modeMinInKelvin: LrcUtils.readFloat32( 16, view ),
            modeMaxInKelvin: LrcUtils.readFloat32( 20, view ),
            emissivity: LrcUtils.readFloat32( 24, view ),
            reflectedTemperaatureInKelvin: LrcUtils.readFloat32( 28, view ),
            distance: LrcUtils.readFloat32( 32, view ),
            atmosphereTemperatureInKelvin: LrcUtils.readFloat32( 36, view ),
            relativeHumidity: LrcUtils.readFloat32( 40, view ),
            tau: LrcUtils.readFloat32( 44, view ),
            windowTemperature: LrcUtils.readFloat32( 48, view ),
            windowTransmissivity: LrcUtils.readFloat32( 52, view ),
            isTauSet: LrcUtils.read8bNumber( 53, view ),
            pixels: LrcUtils.readTemperatureArray( 57, view, this.dataType, frameMin, frameMax )
        };

        return frameData;

    }

}