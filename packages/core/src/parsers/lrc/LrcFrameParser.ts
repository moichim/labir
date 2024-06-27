import { ILrcFrame } from "./LrcTrame";
import { LrcUtils } from "./LrcUtils";

export class LrcFrameParser {

    constructor(
        protected readonly arrayBuffer: ArrayBuffer,
        protected readonly width: number,
        protected readonly height: number,
        protected readonly dataType: number,
        protected readonly frameCount: number,
        protected readonly frameByteSize: number
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

        const baseIndex = ( index * this.frameByteSize );

        

        const frameArrayBuffer = this.arrayBuffer.slice( 
            baseIndex, 
            // baseIndex + this.frameByteSize +1 
        );

        const view = new DataView( frameArrayBuffer );

        console.log( "baseIndex", this.frameCount );

        // Get frame timestamp
        const frameData: ILrcFrame = {
            timestamp: LrcUtils.readDotnetTimestamp( 0, view ),
            min: LrcUtils.readFloat32( 8, view ),
            max: LrcUtils.readFloat32( 12, view ),
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
            isTauSet: LrcUtils.read8bNumber( 53, view )
        }

        console.log( {
            "should have pixels": this.width * this.height,
            "frameViewByteLength": view.byteLength,
            "fieldDataByteLength": view.byteLength - 54,
            "fieldDataDividedByFour": ( view.byteLength - 54 ) / 4
        } );

        const pixels = LrcUtils.readTemperatureArray( 54, view, this.dataType, frameData.min, frameData.max );

        console.log( this.width * this.height, pixels.length, pixels );

        console.log( frameData);

        // Get frame max

        // Get frame emissivity

        // Get reflected

    }

}