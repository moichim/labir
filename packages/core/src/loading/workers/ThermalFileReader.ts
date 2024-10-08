import { Instance } from "../../file/instance";
import { ThermalGroup } from "../../hierarchy/ThermalGroup";
import { AbstractFileResult } from "./AbstractFileResult";
import { IParserObject, ParsedFileBaseInfo } from "./parsers/structure";

import { FilesService } from "./FilesService";

/**
 * Stores the file's `ArrayBuffer` and provides all the data for instance
 * - this service is registered in FilesService
 * - the instances are retrieved using `FilesService.loadOneFile`
 */
export class ThermalFileReader extends AbstractFileResult {

    /** For the purpose of testing we have a unique ID */
    public readonly id = Math.random();

    /** In-memory cache of the `baseInfo` request. This request might be expensive in larger files or in Vario Cam files. Because the return value is allways the same, there is no need to make the call repeatedly. */
    protected baseInfoCache?: ParsedFileBaseInfo;

    public readonly fileName: string;

    private get pool() {
        return this.service.pool;
    }

    public constructor(
        public readonly service: FilesService,
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

        const baseInfo = await this.pool.exec( this.parser.baseInfo, [ this.buffer ] );

        this.baseInfoCache = baseInfo;

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

        const result = await this.parser.frameData( data.array, data.dataType);

        return result;

    }

    public async pointAnalysisData( x: number, y: number ): ReturnType<IParserObject["pointAnalysisData"]> {
        return await this.parser.pointAnalysisData( this.buffer, x, y );
    }

    public async rectAnalysisData( x: number, y: number, width: number, height: number ): ReturnType<IParserObject["rectAnalysisData"]> {
        return await this.parser.rectAnalysisData( this.buffer, x, y, width, height );
    }

    public async ellipsisAnalysisData( x: number, y: number, width: number, height: number ): ReturnType<IParserObject["ellipsisAnalysisData"]> {
        return await this.parser.ellipsisAnalysisData( this.buffer, x, y, width, height );
    }


    public async createInstance(
        group: ThermalGroup
    ): Promise<Instance> {
        const baseInfo = await this.baseInfo();
        const firstFrame = await this.frameData( 0 );
        const instance = Instance.fromService( group, this, baseInfo, firstFrame );

        group.files.addFile( instance );
        return instance;
    }


    

}