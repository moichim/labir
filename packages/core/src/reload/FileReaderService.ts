import { ThermalGroup } from "../group/ThermalGroup";
import { AbstractFileResult } from "./AbstractFileResult";
import { Instance } from "./instance";
import { IParserObject, ParsedFileBaseInfo } from "./parsers/types";



/**
 * Stores the file's `ArrayBuffer` and provides all the data for instance
 * - this service is registered in FilesService
 * - the instances are retrieved using `FilesService.loadOneFile`
 */
export class FileReaderService extends AbstractFileResult {

    /** For the purpose of testing we have a unique ID */
    public readonly id = Math.random();

    /** In-memory cache of the `baseInfo` request. This request might be expensive in larger files or in Vario Cam files. Because the return value is allways the same, there is no need to make the call repeatedly. */
    protected baseInfoCache?: ParsedFileBaseInfo;

    public readonly fileName: string;

    public constructor(
        public readonly buffer: ArrayBuffer,
        public readonly parser: IParserObject,
        thermalUrl: string,
        visibleUrl?: string
    ) {
        super( thermalUrl, visibleUrl );

        this.fileName = this.thermalUrl.substring( this.thermalUrl.lastIndexOf( "/" ) + 1 );
    }

    public isSuccess(): boolean {
        return true;    
    }


    /** Read the fundamental data of the file. If this method had been called before, return the cached result. */
    public async baseInfo(): ReturnType<IParserObject["baseInfo"]> {

        // Return the cached result if any
        if ( this.baseInfoCache ) {
            return this.baseInfoCache;
        }

        // Create the promise
        const baseInfo = this.parser.baseInfo( this.buffer );

        // Make sure the result will be stored in memory
        baseInfo.then( result => this.baseInfoCache = result );

        // Return the promise
        return baseInfo;
    }

    /** 
     * Before requesting a frame, create a dedicated `ArrayBuffer` containing only the frame's data 
     * 
     * **THIS IS SYNCHRONOUSE AND MIGHT BE EXPENSIVE**
     */
    protected getFrameSubset( frameIndex: number ): ReturnType<IParserObject["getFrameSubset"]> {
        return this.parser.getFrameSubset( this.buffer, frameIndex );
    }

    /** Read a given frame
     * @todo Implement index range check
     */
    public async frameData( index: number ): ReturnType<IParserObject["frameData"]> {

        const data = this.getFrameSubset( index );

        return await this.parser.frameData( data.array, data.dataType);

    }


    public async createInstance(
        group: ThermalGroup
    ): Promise<Instance> {
        const baseInfo = await this.baseInfo();
        const firstFrame = await this.frameData( 0 );
        const instance = Instance.fromService( group, this, baseInfo, firstFrame );
        return instance;
    }


    

}