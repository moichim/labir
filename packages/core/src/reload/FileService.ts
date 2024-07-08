import { FileRequest } from "./FileRequest";
import { FileResult } from "./FileResult";

export class FileService {

    requestsByUrl: Map<string, FileRequest> = new Map;

    cacheByUrl: Map<string, FileResult> = new Map;

    async loadFile(
        thermalUrl: string,
        visibleUrl?: string
    ): Promise<FileResult> {


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