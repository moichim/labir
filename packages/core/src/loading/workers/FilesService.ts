import { ThermalManager } from "../../hierarchy/ThermalManager";
import { AbstractFileResult } from "./AbstractFileResult";
import { FileRequest } from "./FileRequest";

import Pool from "workerpool/types/Pool";
import { DropinElementListener } from "./dropin/DropinElementManager";
import { FileErrors } from "./errors";
import { determineParser } from "./parsers";
import { ThermalFileFailure } from "./ThermalFileFailure";
import { ThermalFileReader } from "./ThermalFileReader";

export class FilesService {

    public get pool() {
        return this.manager.pool;
    }

    constructor(
        public readonly manager: ThermalManager,
    ) {

    }

    public static isolatedInstance(pool: Pool, registryName: string = "isolated_registry") {
        const manager = new ThermalManager(pool);
        const registry = manager.addOrGetRegistry(registryName);
        return {
            service: registry.service,
            registry
        }
    }



    /** Map of peoding requesta */
    protected readonly requestsByUrl: Map<string, FileRequest> = new Map;

    /** Number of currently pending requests */
    public get requestsCount() { return this.requestsByUrl.size; }

    /** Is an URL currently pending? */
    public fileIsPending(url: string) {
        return this.requestsByUrl.has(url);
    }

    /** Cache of loaded files */
    protected readonly cacheByUrl: Map<string, AbstractFileResult> = new Map;

    /** Number of cached results */
    public get cachedServicesCount() {
        return this.cacheByUrl.size;
    }

    /** Is the URL already in the cache? */
    public fileIsInCache(url: string) {
        return this.cacheByUrl.has(url);
    }

    /** Process a file obrained from anywhere */
    async loadUploadedFile(file: File): Promise<AbstractFileResult> {

        try {

            const buffer = await file.arrayBuffer();

            const parser = determineParser(buffer, file.name);

            return new ThermalFileReader(this, buffer, parser, file.name)

        } catch (error) {

            return new ThermalFileFailure(
                file.name,
                FileErrors.PARSING_ERROR,
                (error as Error).message
            );

        }


    }


    /** Create a dropzone listener on a HTML element */
    public handleDropzone(
        element: HTMLElement
    ) {
        return DropinElementListener.listenOnElement( this, element );
    }

   
    /** Load a file from URL, eventually using already cached result */
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

            const request = FileRequest.fromUrl(this, thermalUrl, visibleUrl);

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