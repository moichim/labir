import { ThermalFileSource } from "../file/ThermalFileSource";
import { ILrcFrame } from "./lrc/LrcTrame";


/** 
 * A base class for all parsers.
 */
export default abstract class AbstractParser {

    /** DataView on the entire file contents. */
    protected data!: DataView;

    /** FrameBuffer */
    protected frameSubset!: ArrayBuffer;

    public constructor(
        protected url: string,
        protected blob: Blob,
        protected visibleUrl?: string
    ) {
    }


    /** Create the dataview */
    protected async init() {
        const buffer = await this.blob.arrayBuffer();
        this.data = new DataView(buffer);
        const frameSubset = buffer.slice( 25 );
        this.frameSubset = frameSubset;
        return this;
    }



    /** The only public endpoint. This method does all the business. */
    public async parse(): Promise<ThermalFileSource | null> {
        await this.init();
        await this.parseFile();
        return this.getThermalFile();
    }


    /** Parse the file once it is loaded. Log errors in the process. */
    protected abstract parseFile(): Promise<void>;


    /** Checks if the file is valid. Must be called after parsing. */
    public abstract isValid(): boolean;


    /** Create an instance of Thermal file (if the file is valid). */
    protected abstract getThermalFile(): ThermalFileSource | null;




    // Common data parsing

    // Timestamp
    protected timestamp?: number;
    protected isValidTimestamp = (
        value: number | undefined
    ) => Number.isInteger(value);
    protected abstract getTimestamp(): number;
    protected parseTimestamp() {
        const value = this.getTimestamp();
        if (!this.isValidTimestamp(value))
            this.logValidationError("timestamp", value);
        this.timestamp = value;
    }


    // Width
    protected width?: number;
    protected isValidWidth = (value: number | undefined) => Number.isInteger(value);
    protected abstract getWidth(): number;
    protected parseWidth() {
        const value = this.getWidth();
        if (!this.isValidWidth(value))
            this.logValidationError("width", value);
        this.width = value;
    }

    // Height
    protected height?: number;
    protected isValidHeight = (value: number | undefined) => Number.isInteger(value);
    protected abstract getHeight(): number;
    protected parseHeight() {
        const value = this.getHeight();
        if (!this.isValidHeight(value))
            this.logValidationError("height", value);
        this.height = value;
    }

    // Common data parsing
    protected pixels?: number[];
    protected abstract getPixels(): number[];
    protected isValidPixels = (value: number[] | undefined) => {
        return value !== undefined && value.length === (this.width! * this.height!)
    }
    protected async parsePixels() {
        const value = this.getPixels();
        this.pixels = value;
    }

    // Min
    protected min?: number;
    protected isValidMin = (value: number | undefined) => value !== undefined;
    protected abstract getMin(): number;
    protected parseMin() {
        const value = this.getMin();
        if (!this.isValidMin(value))
            this.logValidationError("min", value);
        this.min = value;
    }

    // Max
    protected max?: number;
    protected isValidMax = (value: number | undefined) => value !== undefined;
    protected abstract getMax(): number;
    protected parseMax() {
        const value = this.getMax();
        if (!this.isValidMax(value))
            this.logValidationError("max", value);
        this.max = value;
    }


    // Frame count
    protected frameCount?: number;
    protected isValidFrameCount = ( value: number |undefined ) => Number.isInteger( value )
    protected abstract getFrameCount(): number;
    protected parseFrameCount() {
        const value = this.getFrameCount();
        if ( ! this.isValidFrameCount( value ) )
            this.logValidationError( "frameCount", value );
        this.frameCount = value;
    }

    protected frames?: ILrcFrame[];
    protected isValidFrames = ( value: ILrcFrame[] | undefined ) => {
        if ( value === undefined ) return false;
        if ( this.frameCount === undefined ) return false;
        else
            return value.length === this.frameCount 
    }
    protected abstract getFrames(): ILrcFrame[];
    protected parseFrames() {
        const value = this.getFrames();
        if ( ! this.isValidFrames(value) )
            this.logValidationError( "frames", value.toString() ); 
        this.frames = value;
    }





    // Error logging


    /** Buffer of errors that occured during the parsing. */
    protected errors: string[] = [];

    /** Store an error. */
    protected logError(
        message: string
    ) {
        console.error(message);
        this.errors.push(message);
    }

    /** Store an error during parsing. */
    protected logValidationError(
        property: string,
        value: number | string
    ) {
        const msg = `Invalid ${property} of ${this.url}: '${value.toString()}'`;
        this.logError(msg);
    }

    public getErrors() {
        return this.errors;
    }

    public encodeErrors() {
        return this.errors.join( "+|+" )
    }

    /**  @deprecated Is not in use */
    public static decodeErrors( errorsString: string ) {
        return errorsString.split( "+|+" );
        
    }


}