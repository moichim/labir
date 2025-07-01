import { RequestFactory } from "../../request/RequestFactory";
import { FileInfo, FolderInfo, TagsWithContent } from "../../types";
import { Operation } from "../Operation";
import { ApiResponseType } from "../ResponseTypes";

export type GetGridDataType = {
    folder: FolderInfo,
    all_subdirectories: {
        [index: string]: FolderInfo
    },
    header: {
        [index: string]: FolderInfo
    },
    groups: {
        [index: string]: {
            label: string,
            from: number,
            to: number,
            folders: {
                [index: string]: FileInfo[]
            }
        }
    }
    time: {
        selection: {
            from: number,
            to: number
        },
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

export enum GridGrouping {
    HOUR = "hour",
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    YEAR = "year"
}

export class GetGrid extends Operation<GetGridDataType> {

    protected request!: RequestFactory;

    protected tags: string[] = [];

    protected folders: string[] = [];

    protected by: GridGrouping = GridGrouping.HOUR;

    public init(): this {
        this.request = this.client.createRequest();
        this.request.setMethod( "GET" );
        this.request.setAction( "grid" );
        this.request.addQueryParameter("by", this.by);
        return this;
    }

    public setPath(
        path: string
    ): this {
        this.request.setPath(path);
        return this;
    }

    public setBy(
        value: GridGrouping
    ): this {
        this.by = value;
        this.request.addQueryParameter("by", value);
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

    public setFolders(
        value: string[]
    ): this {
        this.folders = value;
        this.applyFolders();
        return this;
    }

    public addFolder(
        value: string
    ): this {
        if (!this.folders.includes(value)) {
            this.folders.push(value);
            this.applyFolders();
        }
        return this;
    }

    public removeFolder(
        value: string
    ): this {
        const originalLength = this.folders.length;
        this.folders = this.folders.filter(folder => folder !== value);
        if (this.folders.length !== originalLength) {
            this.applyFolders();
        }
        return this;
    }

    protected applyFolders(): this {
        this.request.addQueryParameter("folders", this.folders.join(","));
        return this;
    }

    public async execute(): Promise<ApiResponseType<GetGridDataType>> {
        const response = await this.client.fetch<GetGridDataType>(this.request);
        return response;
    }


}