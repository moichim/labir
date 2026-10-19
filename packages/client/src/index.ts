import { ApiClient } from "./ApiClient";
import type { ApiResponseType } from "./routes/ResponseTypes";
import type { GetInfoDataType } from "./routes/get/GetInfo";
import type { GetFilesDataType } from "./routes/get/GetFiles";
import type { GetGridDataType } from "./routes/get/GetGrid";
import type { GetCurrentUserTreeDataType } from "./routes/get/GetCurrentUserTree";
import type { PostLoginDataType } from "./routes/post/Login";
import type { PostUpdateFolderDataType } from "./routes/post/UpdateFolder";

import type { ServerInfo, Identity, FolderInfo, FileInfo, TagInfo, TagDefinition, TreeItem, Comment, BreadcrumbItem } from "./responseEntities";

export { GridGrouping } from "./routes/get/GetGrid";

export type {
    ApiResponseType,
    GetInfoDataType,
    GetFilesDataType,
    GetGridDataType,
    GetCurrentUserTreeDataType,
    PostLoginDataType,
    PostUpdateFolderDataType,

    ServerInfo,
    Identity,
    FolderInfo,
    FileInfo,
    TagInfo,
    TagDefinition,
    TreeItem,
    Comment,
    BreadcrumbItem
}

export default ApiClient;