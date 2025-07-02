import { RequestFactory } from "../../request/RequestFactory";
import { FolderInfo, TagUpdateObject } from "../../types";
import { Operation } from "../Operation";
import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type PostUpdateFolderDataType = {
    result: {
        /** The new slug of the updated folder */
        slug?: string,
        /** The new name of the updated folder */
        name?: string,
        /** The new description of the updsated folder */
        description?: string,
        /** The old slug of the folder (in case it moved) */
        oldSlug?: string,
        /** The standard folder info */
        info: FolderInfo,
        /** Whether the folder itself renames on the disk */
        moved: boolean
    },
    
}

export class PostUpdateFolder extends OperationWithPath<PostUpdateFolderDataType> {

    protected tagBuffer: TagUpdateObject = {};

    public init(): this {
        this.request.setMethod("POST");
        this.request.setAction("update");
        return this;
    }

    public setName(
        value: string
    ): this {

        this.request.addBodyParameter("name", value);
        return this;
    }

    public setDescription(
        value: string
    ): this {
        this.request.addBodyParameter("description", value);
        return this;
    }

    public addTag(
        key: string,
        name: string,
        description?: string,
        color?: string
    ): this {
        this.tagBuffer[key] = { name };
        if (description !== undefined) this.tagBuffer[key].description = description;
        if (color !== undefined) this.tagBuffer[key].color = color;
        this.request.addBodyParameter("addTags", this.tagBuffer);
        return this;
    }

    public removeTags(
        tags: string[]
    ): this {
        this.request.addBodyParameter("removeTags", tags);
        return this;
    }

    public setMetadata(
        value: Record<string, any>
    ) {
        this.request.addBodyParameter("meta", value);
    }


    public async execute(): Promise<ApiResponseType<PostUpdateFolderDataType>> {

        const response = await this.client.fetch<PostUpdateFolderDataType>(this.request);

        return response;
    }

}