export class LrcUtils {

    public static readDotnetTimestamp( byteOffset: number, view: DataView ) {

        const bigIntTime = view.getBigInt64(byteOffset, true);


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
        const TicksMask: bigint = 0x3FFFFFFFFFFFFFFFn;



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

        return Number(milliseconds)


    }

    public static readFloat32( index: number, view: DataView ) {
        return view.getFloat32( index, true );
    }

    public static read8bNumber( index: number, view: DataView ) {
        return view.getUint8( index );
    }

    public static readTemperatureArray(
        index: number,
        view: DataView,
        dataType: number,
        min: number,
        max: number,
    ): number[] {

        // Get the subset of bytes
        const subset = view.buffer.slice( index );

        console.log( "subset byte length", subset.byteLength );

        // UInt16 array needs to be converted to floats
        if ( dataType === 0 ) {

            const array = new Uint16Array( subset );

            const distance = Math.abs( min - max );
            const UINT16_MAX = 65535; // Math.pow( 2, 16 ) - 1;

            return [...array].map( pixel => {

                const mappedValue = pixel / UINT16_MAX;

                return min + ( distance * mappedValue );

            } );

        } 
        // Float32 shall be outputted without modification
        else if ( dataType === 1 ) {
            
            return [ ...( new Float32Array( subset ) ) ]

        }

        return []


    }

}