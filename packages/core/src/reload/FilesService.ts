import { FileRequest } from "./FileRequest";
import { AbstractFileResult } from "./AbstractFileResult";

export class FilesService {

    /** Map of peoding requesta */
    protected readonly requestsByUrl: Map<string, FileRequest> = new Map;

    /** Number of currently pending requests */
    public get requestsCount() { return this.requestsByUrl.size; }

    /** Is an URL currently pending? */
    public fileIsPending( url: string ) {
        return this.requestsByUrl.has( url );
    }

    /** Cache of loaded files */
    protected readonly cacheByUrl: Map<string, AbstractFileResult> = new Map;

    /** Number of cached results */
    public get cachedServicesCount() {
        return this.cacheByUrl.size;
    }

    /** Is the URL already in the cache? */
    public fileIsInCache( url: string ) {
        return this.cacheByUrl.has( url );
    }

    async loadFile(
        thermalUrl: string,
        visibleUrl?: string
    ): Promise<AbstractFileResult> {


        // Look in the cache and eventually return the cached version
        if (this.cacheByUrl.has(thermalUrl)) {
            return this.cacheByUrl.get(thermalUrl)!;
        }

        // Look in the requests and hook into a pending request
        else if (this.requestsByUrl.has(thermalUrl)) {
            return this.requestsByUrl.get(thermalUrl)!.load();
        } 

        // Otherwise create a new request
        else {

            const request = FileRequest.fromUrl(thermalUrl, visibleUrl);

            // Register the request
            this.requestsByUrl.set(thermalUrl, request);

            // Perform the request
            const result = await request.load();

            // Clear the request
            this.requestsByUrl.delete(thermalUrl);

            // Register the result
            this.cacheByUrl.set(thermalUrl, result);

            return result;

        }

    }

}