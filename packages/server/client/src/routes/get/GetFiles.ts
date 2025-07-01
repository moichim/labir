import { RequestFactory } from "../../request/RequestFactory";
import { FileInfo, FolderInfo, TagsWithContent } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetFilesDataType = {
    folder: FolderInfo,
    subfolders: {
        [index: string]: FolderInfo
    },
    time: {
        files: {
            from: number,
            to: number
        }
    },
    count: {
        displayed: number,
        omitted: number,
        total: number
    },
    files: FileInfo[],
    tags: TagsWithContent
}

export class GetFiles extends Operation<GetFilesDataType> {

    protected request!: RequestFactory;

    protected tags: string[] = [];

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod( "GET" );
        this.request.setAction( "files" );
        return this;
    }

    public setPath(
        path: string
    ): this {
        this.request.setPath(path);
        return this;
    }

    public setFrom(
        value: number | Date
    ): this {
        const timestamp = value instanceof Date
            ? value.getTime()
            : value;
        this.request.addQueryParameter("from", timestamp.toString());
        return this;
    }

    public setTo(
        value: number | Date
    ): this {
        const timestamp = value instanceof Date
            ? value.getTime()
            : value;
        this.request.addQueryParameter("to", timestamp.toString());
        return this;
    }

    public setTags(
        value: string[]
    ): this {

        this.tags = value;
        this.applyTags();
        return this;
    }

    public addTag(
        value: string
    ): this {

        // Add the tag only if it is not already present
        if ( ! this.tags.includes(value) ) {
            this.tags.push(value);
            this.applyTags();    
        }
        return this;
    }

    public removeTag(
        value: string
    ): this {

        const originalLength = this.tags.length;

        // Filter out the tag to be removed
        this.tags = this.tags.filter( tag => tag !== value );

        // Apply the change if the length has changed
        if ( this.tags.length !== originalLength ) {
            this.applyTags();
        }

        return this;
    }

    protected applyTags(): this {
        this.request.addQueryParameter("tags", this.tags.join(","));
        return this;
    }


    public async execute(): Promise<ApiResponseType<GetFilesDataType>> {
        const response = await this.client.fetch<GetFilesDataType>(this.request);
        return response;
    }


}