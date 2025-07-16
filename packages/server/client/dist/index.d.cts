import { CallbacksManager } from '@labir/core';

type ServerInfo = {
    url: string;
    name?: string;
    description?: string;
    version: string;
};
type Identity = {
    user: string;
    path: string;
    token: string;
    meta: {
        login: string;
        name: string;
        description: string | null;
        institution: string | null;
        access: string[];
    };
};
type TagInfo = {
    name: string;
    description?: string | null;
    color?: string | null;
};
interface ApiEditableEntity {
}
type BreadcrumbItem = {
    name: string;
    slug: string;
    path: string;
    protected: boolean;
    current: boolean;
    type: "folder" | "server" | "user";
};
interface FolderInfo extends ApiEditableEntity {
    entity: "folder";
    api: string;
    path: string;
    slug: string;
    name: string;
    description: string | null;
    thumb: string | null;
    meta: Record<string, any>;
    lrc_count: number;
    protected: boolean;
    may_have_files?: boolean;
    may_manage_files_in: boolean;
    may_manage_folders_in: boolean;
    may_read_folder: boolean;
    own_tags: [] | {
        [index: string]: TagInfo;
    };
    parent_tags: [] | {
        [index: string]: TagInfo;
    };
}
type Comment = {
    message: string;
    timestamp: number;
    by: {
        name: string;
        institution: string | null;
        description: string | null;
    };
};
interface FileInfo extends ApiEditableEntity {
    entity: "file";
    /** URL address of the file itself */
    url: string;
    /** Optioanl label of the file */
    label: string | null;
    /** Optional description of the file */
    description: string | null;
    /** Name of the file including its extension */
    fileName: string;
    /** Slug of the folder in which this file is located */
    folder: string;
    /** Slug of the parent folder of the `folder` */
    parent: string;
    /** A path of the `folder` relative to the www/data. Usable in all api calls. */
    path: string;
    /** URL of the visual image or false */
    visual: string | false;
    /** URL of the preview file or undefined */
    preview: string | false;
    /** Timestamp of the file stored in its .json file. */
    timestamp: number;
    /** Timestamp of the upload date */
    uploaded: number;
    uploadedby: null | {
        login: string;
        name: string;
        description: string | null;
        institution: string | null;
    };
    /** This file is assigned to these tags. Tags may be defined in `_tags.json` of the `parent` folder */
    tags: string[];
    /** A human-redable date - is taken from the timestamp */
    dateHuman: string;
    /** An api root of this file may serve for calling subsequent requests related to this file */
    apiRoot: string;
    /** Storage of the analyses */
    analyses: string[];
    /** Stoage of comments */
    comments: Comment[];
}
type TagDefinition = {
    slug: string;
    count: number;
    meta?: {
        name?: string;
        description?: string;
        color?: string;
    };
};
type TagWithContent = TagDefinition & {
    folders: {
        [index: string]: FileInfo[];
    };
};
type TagsWithContent = {
    [index: string]: TagWithContent;
};
type TreeItem = {
    entity: "treeitem";
    path: string;
    api: string;
    slug: string;
    name: string;
    descriotion: string | null;
    lrc_count: number;
    protected: boolean;
    may_have_files: boolean;
    metadata: Record<string, any>;
    subfolders: TreeItem[];
};
/** @deprecated updating of tags should go without this object. There should be a type for tags in response...  */
type TagUpdateObject = {
    [slug: string]: {
        name: string;
        description?: string;
        color?: string;
    };
};

declare class Auth {
    protected readonly client: Client;
    protected identity?: Identity;
    protected session?: string;
    readonly onIdentity: CallbacksManager<(identity: Identity | undefined) => void>;
    constructor(client: Client);
    isLoggedIn(): boolean;
    login(identity: Identity): void;
    logout(): void;
    setSession(value: string | undefined): void;
    getSession(): string | undefined;
    getIdentity(): Identity | undefined;
    getAuthorisationHeader(): string | undefined;
    private toBase64;
    private manualBase64Encode;
}

type AvailableMethod = "GET" | "POST";
/**
 * An universal factory of requests to LabIR servers.
 *
 * It is intended to be used in the `routes` factories, such as `GetRoutesFactory` or `PostRoutesFactory`.
 *
 * These classes take care of all the parameters settings and this RequestFactory shall never be exposed publically.
 *
 * **Functionality**
 * - accepts the query parameters, body and header contents
 * - creates a `Request` object that is used internally by `Client.fetch()`
 * - takes care of passing credentials and session ID to the request
 *
 */
declare class RequestFactory {
    protected readonly client: Client;
    protected path?: string;
    protected method: AvailableMethod;
    protected action?: string;
    protected query: Map<string, string>;
    protected body: {
        [key: string]: any;
    };
    protected headers: {
        [key: string]: string;
    };
    protected files: {
        [key: string]: File;
    };
    constructor(client: Client);
    setPath(value: string): RequestFactory;
    setMethod(value: AvailableMethod): RequestFactory;
    setAction(value: string): RequestFactory;
    addQueryParameter(key: string, value: string): RequestFactory;
    addBodyParameter(key: string, value: any): RequestFactory;
    addHeader(key: string, value: string): RequestFactory;
    addFile(key: string, file: File): RequestFactory;
    protected createRequestInit(): {
        url: URL;
        options: RequestInit;
    } | false;
    /**
     * Vytvoří Request s application/json body (bez souborů)
     */
    protected createRequestJson(): Request | false;
    /**
     * Vytvoří Request s multipart/form-data (pro upload souborů)
     */
    protected createRequestFormData(): Request | false;
    createRequest(): Request | false;
    getAction(): string | undefined;
}

type ApiResponseDataType = {};
/**
 * The response of LabIR server to any request.
 */
type ApiResponseType<R extends ApiResponseDataType = ApiResponseDataType> = {
    message: string;
    code: number;
    colophon: {
        time: number;
        path: string | null;
        action: string;
        server: ServerInfo;
    };
    raw: {
        request: Request;
        response: Response;
    };
} & ({
    success: true;
    data: R;
} | {
    success: false;
    data: undefined;
});

/** A base class for all routes. It is intentionally concieved very universally, because it might happen that one operation would consist of several subsequent requests. */
declare abstract class Operation<R extends ApiResponseDataType> {
    protected readonly client: Client;
    protected readonly request: RequestFactory;
    constructor(client: Client);
    /** In a factory, the operation needs to be initialised before returning. */
    abstract init(): this;
    /** Perform the operation and all its requests. */
    abstract execute(): Promise<ApiResponseType<R>>;
}

type GetConnectDataType = {
    identity: false | Identity;
};
declare class GetConnect extends Operation<GetConnectDataType> {
    init(): this;
    execute(): Promise<ApiResponseType<GetConnectDataType>>;
}

type GetCurrentUserTreeDataType = {
    tree: TreeItem[];
};
/**
 * Get the list of all folders accessible to the currently logged in user.
 */
declare class GetCurrentUserTree extends Operation<GetCurrentUserTreeDataType> {
    init(): this;
    execute(): Promise<ApiResponseType<GetCurrentUserTreeDataType>>;
}

/** A base operation that needs to have a path specified. */
declare abstract class OperationWithPath<R extends ApiResponseDataType> extends Operation<R> {
    setPath(path: string): this;
}

type GetInfoDataType = {
    breadcrumb: BreadcrumbItem[];
    folder: FolderInfo;
    subfolders: false | {
        [index: string]: FolderInfo;
    };
};
declare class GetInto extends OperationWithPath<GetInfoDataType> {
    init(): this;
    execute(): Promise<ApiResponseType<GetInfoDataType>>;
}

type GetFileDataType = {
    file: FileInfo;
};
declare class GetFile extends OperationWithPath<GetFileDataType> {
    init(): this;
    setFileName(value: string): this;
    execute(): Promise<ApiResponseType<GetFileDataType>>;
}

/** An operation containing filters based on time and tags. Needs to have path specified. */
declare abstract class OperationWithFilters<R extends ApiResponseDataType> extends OperationWithPath<R> {
    private tags;
    setFrom(value: number | Date): this;
    setTo(value: number | Date): this;
    setTags(value: string[]): this;
    addTag(value: string): this;
    removeTag(value: string): this;
    /**
     * Internal method used to propagate changed tags to the request.
     */
    private applyTags;
}

type GetFilesDataType = {
    folder: FolderInfo;
    subfolders: {
        [index: string]: FolderInfo;
    };
    time: {
        files: {
            from: number;
            to: number;
        };
    };
    count: {
        displayed: number;
        omitted: number;
        total: number;
    };
    files: FileInfo[];
    tags: TagsWithContent;
};
declare class GetFiles extends OperationWithFilters<GetFilesDataType> {
    init(): this;
    execute(): Promise<ApiResponseType<GetFilesDataType>>;
}

type GetGridDataType = {
    folder: FolderInfo;
    all_subdirectories: {
        [index: string]: FolderInfo;
    };
    header: {
        [index: string]: FolderInfo;
    };
    groups: {
        [index: string]: {
            label: string;
            from: number;
            to: number;
            folders: {
                [index: string]: FileInfo[];
            };
        };
    };
    time: {
        selection: {
            from: number;
            to: number;
        };
        files: {
            from: number;
            to: number;
        };
    };
    count: {
        displayed: number;
        omitted: number;
        total: number;
    };
    tags: TagsWithContent;
};
declare enum GridGrouping {
    HOUR = "hour",
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    YEAR = "year"
}
declare class GetGrid extends OperationWithFilters<GetGridDataType> {
    protected folders: string[];
    protected by: GridGrouping;
    init(): this;
    setBy(value: GridGrouping): this;
    setFolders(value: string[]): this;
    addFolder(value: string): this;
    removeFolder(value: string): this;
    protected applyFolders(): this;
    execute(): Promise<ApiResponseType<GetGridDataType>>;
}

/**
 * Factory for creating GET routes
 */
declare class GetRoutesFactory {
    protected readonly client: Client;
    constructor(client: Client);
    /**
     * Connects to a server, eventually returning the existing identity of the currently logged-in user.
     *
     * If you want to load existing user identity, you need to pass the PHPSESSID to the client before calling this method using `auth.setSession()`.
     *
     * ```typescript
     * const client = new Client("http://localhost:8080");
     * await client.auth.setSession("PHPSESSID=1234567890abcdef"); // Set the session ID
     * await client.connect(); // This method is accessible from the Client object itself
     * ```
     */
    connect(): GetConnect;
    /**
     * Get information about a folder.
     *
     * ```typescript
     * const client = new Client("http://localhost:8080");
     * await client.connect();
     * const request = client.routes.get.info("path/to/folder");
     * // Configure request:
     * request.setPath("path/to/folder"); // already set by factory
     * const result = await request.execute();
     * ```
     *
     * @param path Path of the folder.
     */
    info(path: string): GetInto;
    /**
     * List of files in the given folder.
     *
     * ```typescript
     * const client = new Client("http://localhost:8080");
     * await client.connect();
     * const request = client.routes.get.files("path/to/folder");
     * request
     *  .setFrom(new Date("2023-01-01")) // Optional filter
     *  .setTo(new Date("2023-12-31")) // Optional filter
     *  .addTag("tag-slug"); // Optional filter
     * const result = await request.execute();
     * ```
     *
     * @param path Path to the folder from which you want to get the files
     */
    files(path: string): GetFiles;
    /**
     * List of files in the given folder.
     *
     * ```typescript
     * const client = new Client("http://localhost:8080");
     * await client.connect();
     * const request = client.routes.get.files("path/to/folder");
     * // Configure request:
     * request.setFrom(new Date("2023-01-01")); // Optional filter
     * request.setTo(new Date("2023-12-31"));   // Optional filter
     * request.addTag("tag-slug");              // Optional filter
     * const result = await request.execute();
     * ```
     *
     * @param path Path to the folder from which you want to get the files
     */
    grid(path: string): GetGrid;
    /**
     * Generate the grid from subfolders inside the given directory.
     *
     * ```typescript
     * const client = new Client("http://localhost:8080");
     * await client.connect();
     * const request = client.routes.get.grid("path/to/folder");
     * const result = await request.execute();
     * ```
     *
     * @param path Path to the folder from which you want the grid to be generated
     * @param filename Name of the LRC file
     */
    file(path: string, filename: string): GetFile;
    /**
     * Get list of folders accessible by the currently logged-in user.
     *
     * ```typescript
     * const client = new Client("http://localhost:8080");
     * await client.connect();
     * const request = client.routes.get.currentUserTree();
     * const result = await request.execute();
     * ```
     */
    currentUserTree(): GetCurrentUserTree;
}

type CreateDataType = {
    result: {
        slug?: string;
        name?: string;
        description?: string;
        info?: any;
    };
};
/**
 * Vytvoření nové složky (viz actionCreate v PHP)
 * Parametry: name (povinné), description (volitelné), meta (volitelné), tags (volitelné), access (volitelné)
 */
declare class CreateFolder extends OperationWithPath<CreateDataType> {
    protected tagBuffer: Record<string, any>;
    protected accessBuffer: {
        show?: boolean;
        may_have_files?: boolean;
    };
    init(): this;
    setName(name: string): this;
    setDescription(description: string): this;
    setMeta(meta: Record<string, any>): this;
    /**
     * Přidej jeden tag (klíčem je název, hodnotou objekt s name, description, color)
     */
    addTag(name: string, description?: string, color?: string): this;
    /**
     * Nastaví access.show (viditelnost složky)
     */
    setShow(show: boolean): this;
    /**
     * Nastaví access.may_have_files (zda složka může obsahovat soubory)
     */
    setMayHaveFiles(mayHaveFiles: boolean): this;
    execute(): Promise<ApiResponseType<CreateDataType>>;
}

type DeleteFolderDataType = {};
declare class DeleteFolder extends OperationWithPath<DeleteFolderDataType> {
    init(): this;
    execute(): Promise<ApiResponseType<DeleteFolderDataType>>;
}

/** A base operation that needs to have a path specified. */
declare abstract class OperationWithFile<R extends ApiResponseDataType> extends OperationWithPath<R> {
    setFile(filename: string): this;
}

type FileAddCommentDataType = {
    file: FileInfo;
};
declare class FileAddComment extends OperationWithFile<FileAddCommentDataType> {
    init(): this;
    /**
     * Nastaví text komentáře, který bude odeslán na server.
     *
     * @param message Text komentáře
     */
    setMessage(message: string): this;
    execute(): Promise<ApiResponseType<FileAddCommentDataType>>;
}

type FileClearCommentsDataType = {
    file: FileInfo;
};
declare class FileClearComments extends OperationWithFile<FileClearCommentsDataType> {
    init(): this;
    /**
     * Executes the request to clear comments on a file.
     */
    execute(): Promise<ApiResponseType<FileClearCommentsDataType>>;
}

type FileDeleteCommentDataType = {
    file: FileInfo;
};
declare class FileDeleteComment extends OperationWithFile<FileDeleteCommentDataType> {
    init(): this;
    setCommentTimestamp(timestamp: number): this;
    execute(): Promise<ApiResponseType<FileDeleteCommentDataType>>;
}

type FileUpdateCommentDataType = {
    file: FileInfo;
};
declare class FileUpdateComment extends OperationWithFile<FileUpdateCommentDataType> {
    init(): this;
    setCommentTimestamp(timestamp: number): this;
    /**
     * Nastaví text komentáře, který bude odeslán na server.
     *
     * @param message Text komentáře
     */
    setMessage(message: string): this;
    execute(): Promise<ApiResponseType<FileUpdateCommentDataType>>;
}

type LoginDataType = {
    login: Identity;
};
declare class Login extends Operation<LoginDataType> {
    init(): this;
    setUser(user: string): this;
    setPassword(password: string): this;
    execute(): Promise<ApiResponseType<LoginDataType>>;
}

type LogoutDataType = {};
declare class Logout extends Operation<LogoutDataType> {
    init(): this;
    execute(): Promise<ApiResponseType<LogoutDataType>>;
}

type MoveFolderDataType = {};
declare class MoveFolder extends OperationWithPath<MoveFolderDataType> {
    init(): this;
    setTarget(target: string): this;
    execute(): Promise<ApiResponseType<MoveFolderDataType>>;
}

type UpdateFileDataType = {
    file: FileInfo;
};
declare class UpdateFile extends OperationWithFile<UpdateFileDataType> {
    protected _clearTags: boolean;
    protected _clearAnalyses: boolean;
    protected _tagsAdd: string[];
    protected _tagsRemove: string[];
    protected _analysisAdd: string[];
    protected _analysisRemove: string[];
    init(): this;
    setLabel(value: string): this;
    setDescription(value: string): this;
    addTag(tag: string): this;
    removeTag(tag: string): this;
    addAnalysis(analysis: string): this;
    removeAnalysis(analysis: string): this;
    clearTags(): this;
    clearAnalyses(): this;
    execute(): Promise<ApiResponseType<UpdateFileDataType>>;
}

type UpdateFolderDataType = {
    result: {
        /** The new slug of the updated folder */
        slug?: string;
        /** The new name of the updated folder */
        name?: string;
        /** The new description of the updsated folder */
        description?: string;
        /** The old slug of the folder (in case it moved) */
        oldSlug?: string;
        /** The standard folder info */
        info: FolderInfo;
        /** Whether the folder itself renames on the disk */
        moved: boolean;
    };
};
declare class UpdateFolder extends OperationWithPath<UpdateFolderDataType> {
    protected tagBuffer: TagUpdateObject;
    init(): this;
    setName(value: string): this;
    setDescription(value: string): this;
    addTag(key: string, name: string, description?: string, color?: string): this;
    removeTags(tags: string[]): this;
    setMetadata(value: Record<string, any>): void;
    execute(): Promise<ApiResponseType<UpdateFolderDataType>>;
}

type UploadFileDataType = {
    file: FileInfo;
};
declare class UploadFile extends OperationWithPath<UploadFileDataType> {
    init(): this;
    setLrc(file: File): this;
    setVisual(file: File): this;
    setPreview(file: File): this;
    /**
     * Nastaví label pro uploadovaný soubor
     */
    setLabel(label: string): this;
    /**
     * Nastaví description pro uploadovaný soubor
     */
    setDescription(description: string): this;
    /**
     * Nastaví tagy pro uploadovaný soubor
     */
    setTags(tags: string[]): this;
    execute(): Promise<ApiResponseType<UploadFileDataType>>;
}

declare class PostRoutesFactory {
    protected readonly client: Client;
    constructor(client: Client);
    login(login: string, password: string): Login;
    logout(): Logout;
    createFolder(
    /** An obligatory path of the folder in which the new Folder shall be created */
    targetPath: string, 
    /** Name of the new folder - will be webalised for the real folder name in the file system */
    newFolderName: string): CreateFolder;
    updateFolder(path: string): UpdateFolder;
    moveFolder(folderPath: string, target: string): MoveFolder;
    uploadFile(folderPath: string, file: File): UploadFile;
    updateFile(folderPath: string, filename: string): UpdateFile;
    fileAddComment(folderPath: string, filename: string, message: string): FileAddComment;
    fileClearComments(folderPath: string, filename: string): FileClearComments;
    fileUpdateComment(folderPath: string, filename: string, timestamp: number, message: string): FileUpdateComment;
    fileDeleteComment(folderPath: string, filename: string, timestamp: number): FileDeleteComment;
    deleteFolder(folderPath: string): DeleteFolder;
}

declare class Routes {
    protected readonly client: Client;
    /**
     * All the available GET routed of the API
     */
    readonly get: GetRoutesFactory;
    /**
     * All the available POST routes of the API
     */
    readonly post: PostRoutesFactory;
    constructor(client: Client);
}

interface EntityObserver<E extends ApiEditableEntity> {
}
declare abstract class AbstractEntity<E extends ApiEditableEntity, C extends EntityObserver<E>> {
    protected readonly client: Client;
    protected observers: Set<C>;
    protected connected: boolean;
    constructor(client: Client);
    abstract connect(): Promise<boolean>;
    abstract disconnect(): void;
    abstract persist(): Promise<E | void>;
    abstract current(): E | undefined;
    observe(observer: C): this;
    unobserve(observer: C): this;
    protected emit(message: string, includeState?: boolean, customData?: {
        [key: string]: any;
    }): void;
    protected abstract onEmit(message: string, includeState: boolean, customData?: {
        [key: string]: any;
    }): void;
}

type MutablePropertyType = string | number | boolean;
/** A property that may accept changes and generates its report when changed */
declare class MutableProperty<E extends AbstractEntity<any, any>, T extends MutablePropertyType> {
    protected entity: E;
    readonly name: string;
    constructor(entity: E, name: string);
    protected pending?: T;
    /** Is there a pending change in this property? */
    isPending(): boolean;
    /** Gets the value that shall be persisted. */
    getEnqueued(): T | undefined;
    /** Enqueue a change of the new value */
    enqueue(newValue: T): void;
    /** Reset any mutations */
    reset(): void;
    /** Generate the report entry for mutations message */
    report(updatedValue?: T | undefined): [string, T] | false;
}

type ConnectsToFolder = EntityObserver<FolderInfo> & {
    onFolderChanged(message: string, currentState?: FolderInfo, changes?: {
        [key: string]: any;
    }): void;
};
declare class Folder extends AbstractEntity<FolderInfo, ConnectsToFolder> {
    protected path: string;
    protected info?: FolderInfo;
    readonly update: {
        name: MutableProperty<Folder, string>;
        description: MutableProperty<Folder, string>;
    };
    constructor(client: Client, path: string);
    private forEveryUpdate;
    resetUpdaates(): void;
    persist(): Promise<FolderInfo | void>;
    current(): FolderInfo | undefined;
    connect(): Promise<boolean>;
    disconnect(): void;
    protected onEmit(message: string, includeState: boolean, customData?: {
        [key: string]: any;
    }): void;
}

declare class Entities {
    protected readonly client: Client;
    protected readonly folders: Map<string, Folder>;
    constructor(client: Client);
    /**
     * Creates a connection to a folder
    */
    connectToFolder(path: string, observer: ConnectsToFolder): Promise<Folder>;
}

/**
 * The client for accessing a remote LabIR server.
 * - needs to call the asynchronouse method `connect()` method before any other request
 * - if `auth.setSession()` is called before connection, the session ID shall be passed to the connected server. In case there is a logged-in user in the given session its credentials will be sent back and the user will be logged in automatically right after the connection.
 * - otherwise, a standard login request needs to be performed via the `routes.post.login()`
 */
declare class Client {
    /**
     * The core server URL ending with a slash */
    protected serverUrl: string;
    protected _serverInfo?: ServerInfo;
    get serverInfo(): ServerInfo | undefined;
    /**
     * The authentication service stores the session ID and also the identity of the currently logged in user.
     * - The authentication itself is provided by the operation `PostLogin` which is accessible through the `routes.post.login()` method.
     */
    readonly auth: Auth;
    /**
     * The factories for creating requests to the API.
     *
     * ```typescript
     * // Create a client
     * const client = new Client("http://localhost:8080");
     *
     * // Connect it to the server
     * await client.connect();
     *
     * // Create a request to list files inside a folder
     * const request = client.routes.get.files("path/to/folder");
     *
     * request
     *  .setFrom( new Date("2023-01-01") ) // Set optional filter
     *  .setTo( new Date("2023-12-31") ) // Set optional filter
     *  .addTag( "tag-slug" ); // Set optional filter
     *
     * // Execute the request
     * const result = await request.execute();
     * ```
     *
     * All requests are created as instances of `Operation`, or one of its subclasses.
     *
     * A request contains a hidden `RequestFactory` that is used to create the actual `Request` object. This object shall never be exposed nor manipulated publically.
     * Every individual `Operation` has its own methods for setting parameters, such as `setPath()`, `addTags()`, etc.
     *
     * These methods will store the data in the internal `RequestFactory` object. The `Operation` instance needs to be executed using its asynchronous `execute()` method, which will return a promise that resolves to an `ApiResponseType` object.
     *
     * Note:
     * - upon creation of the `Client` instance, the route `connect` needs to be called
     * - after connection to the server, other requests are available
     * @package `@labir/server`
     */
    readonly routes: Routes;
    /**
     * Access server entities directly and manipulate them using a comfortable API.
     *
     * All entities are observable by their consuming objects, so there should be only one instance of every entity by its given identification.
     */
    readonly entities: Entities;
    /**
     * Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
     */
    protected connected: boolean;
    readonly onConnection: CallbacksManager<(status: false | ServerInfo) => void>;
    readonly onResult: CallbacksManager<(timestamp: number, success: boolean, code: boolean, message: boolean, method: string) => void>;
    protected activeRequests: number;
    readonly onLoading: CallbacksManager<(loading: boolean) => void>;
    get loading(): boolean;
    constructor(serverUrl: string);
    /**
     * Tests the availability of the server, establishes the connection and stores the following data crucial for all subsequent requests:
     * - PHPSESSID is stored in `Auth.setSesson()`
     * - if a logged-in user was found on the session, its credentials will be stored in `Auth.login()`
     */
    connect(): Promise<ApiResponseType<GetConnectDataType>>;
    /**
     * Was this `Client` already connected using `Client.connect()`?
     */
    isConnected(): boolean;
    /**
     * Creates a new RequestFactory instance
     * - do not use this method directly, use the `routes` property instead
     */
    createRequest(): RequestFactory;
    /**
     * @returns The server URL with a trailing slash
     */
    getServerUrl(): string;
    /**
     * Automatically process every incoming response.
     * - store the session ID in Auth class
     */
    protected processResponse(response: Response): void;
    /**
     * Processes a request factory created using `routes`
     *
     * All request factories need to be executed this way because there are necessary checks & processes upon every request:
     * - request is refused until the client is connected
     * - handling of unavailable server errors
     * - storage of the PHPSESSID in the `Auth` class
     *
     * @todo implement emission of events using the `EventEmitter` class
     * @param factory The request factory to execute
     */
    fetch<R extends ApiResponseDataType>(factory: RequestFactory): Promise<ApiResponseType<R>>;
}

export { type ApiResponseType, type Comment, type FileInfo, type FolderInfo, type GetCurrentUserTreeDataType, type GetInfoDataType as GetDefaultDataType, type GetFilesDataType, type GetGridDataType, type Identity, type LoginDataType as PostLoginDataType, type UpdateFolderDataType as PostUpdateFolderDataType, type ServerInfo, type TagDefinition, type TagInfo, type TreeItem, Client as default };
