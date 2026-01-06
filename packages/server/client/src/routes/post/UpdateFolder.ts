import { FolderInfo, TagUpdateObject } from "../../responseEntities";
import { OperationWithPath } from "../OperationWithPath";
import { ApiResponseType } from "../ResponseTypes";

export type UpdateFolderDataType = {
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

export class UpdateFolder extends OperationWithPath<UpdateFolderDataType> {

    protected tagBuffer: TagUpdateObject = {};

    protected accessBuffer: { show?: boolean; may_have_files?: boolean } = {};

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

    public setThumbnail(
        value: File
    ): this {

        this.request.addFile( "thumbnail", value );
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

    /**
     * Nastaví access.may_have_files (zda složka může obsahovat soubory)
     */
    public setMayHaveFiles(mayHaveFiles: boolean): this {
        this.accessBuffer.may_have_files = mayHaveFiles;
        return this;
    }

    /**
     * Nastaví access.show (viditelnost složky)
     */
    public setShow(show: boolean): this {
        this.accessBuffer.show = show;
        return this;
    }


    public async execute(): Promise<ApiResponseType<UpdateFolderDataType>> {


        // Přidej access, pokud je nastaven
        if (Object.keys(this.accessBuffer).length > 0) {
            this.request.addBodyParameter("access", this.accessBuffer);
        }

        const response = await this.client.fetch<UpdateFolderDataType>(this.request);

        return response;
    }

}