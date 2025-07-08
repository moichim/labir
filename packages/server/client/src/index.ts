import { Client } from "./Client";
import type { ApiResponseType } from "./routes/ResponseTypes";
import type { GetInfoDataType } from "./routes/get/GetInfo";
import type { GetFilesDataType } from "./routes/get/GetFiles";
import type { GetGridDataType } from "./routes/get/GetGrid";
import type { GetCurrentUserTreeDataType } from "./routes/get/GetCurrentUserTree";
import type { LoginDataType } from "./routes/post/Login";
import type { UpdateFolderDataType } from "./routes/post/UpdateFolder";

export default Client;

export type {
    ApiResponseType,
    GetInfoDataType as GetDefaultDataType,
    GetFilesDataType,
    GetGridDataType,
    GetCurrentUserTreeDataType,
    LoginDataType as PostLoginDataType,
    UpdateFolderDataType as PostUpdateFolderDataType
}