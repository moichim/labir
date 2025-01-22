/** Folder information definition */
export type FolderInfoBase = {
    name: string,
    url: string,
    lrc_count: number,
    folder: string
} & {
    [index: string]: string
}

/** Definition of a file */
export type FolderFileType = {
    file_name: string,
    lrc: string,
    png?: string,
    timestamp: number
}

/** Group of files in any group */
export type GroupOfFiles = {
    [index: string]: FolderFileType
}

/** Group of files as defined in time grouping responses */
export type TimeRecordGroup = {
    name: string,
    count: number,
    files: GroupOfFiles
}



type ApiResponseBase = {
    time: number,
    success: boolean
}

/** @route / */
export type ApiInfoResponse = ApiResponseBase & {
    folders: {
        [index: string]: FolderInfoBase
    }
}



/** @route /{folder} */
export type ApiFolderContentResponse = ApiResponseBase & {
    info: FolderInfoBase,
    files: FolderFileType[]
}



/** @route /?{time} */
export type ApiTimeGroupResponse = ApiResponseBase & {
    data: {
        [index: string]: {
            [index: string]: TimeRecordGroup
        }
    }
}

/** @route /?everything */
export type ApiEverythingResponse = ApiResponseBase & {

    folders: {
        [index: string]: FolderInfoBase & {
            files: GroupOfFiles
        }
    }

}