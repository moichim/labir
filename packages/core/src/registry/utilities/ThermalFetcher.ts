import { ThermalFileSource } from "../../file/ThermalFileSource";
import { ThermalRegistry } from "../ThermalRegistry";

type ThermalFetcherCallbackType = (
    source?: ThermalFileSource,
    errors?: string
) => void;

type ThermalFetcherRequest = {
    thermalUrl: string,
    visibleUrl?: string,
    callbacks: ThermalFetcherCallbackType[]
}

export class ThermalFetcher {

    protected requests: Map<string,ThermalFetcherRequest> = new Map<string,ThermalFetcherRequest>();

    public get requestArray() {
        return Array.from( this.requests.values() )
    }

    protected timer?: ReturnType<typeof setTimeout>

    constructor(
        public readonly registry: ThermalRegistry
    ) {}

    public request(
        thermalUrl: string,
        visibleUrl?: string,
        callback?: ThermalFetcherCallbackType
    ) {

        if ( this.requests.has( thermalUrl ) ) {
            if ( callback ) {
                this.requests.get( thermalUrl )?.callbacks.push( callback )
            }
        } else {
            const newRequest = {
                thermalUrl,
                visibleUrl,
                callbacks: callback ? [ callback ] : []
            };
            this.requests.set( thermalUrl, newRequest );
        }

        // Register the request in next tick
        if ( this.timer === undefined ) {
            this.timer = setTimeout(this.resolve.bind(this), 0);
        }

    }

    public async resolve() {

        const result = await Promise.all(
            this.requestArray.map( async ( request ) => {                

                // Prepare the result object
                const result: {
                    output?: ThermalFileSource | string,
                    request: ThermalFetcherRequest
                } = { 
                    request: request
                }

                // First, look to the cache and try to grab the file from there
                if ( this.registry.manager.isUrlRegistered( request.thermalUrl ) ) {
                    result.output = this.registry.manager.sourcesByUrl[ request.thermalUrl ]
                } 
                // If the file is not in the cache, request it
                else {

                    try {

                        const source = await ThermalFileSource.fromUrlWithErrors( request.thermalUrl, request.visibleUrl );
    
                        if ( source ) {
                            result.output = source
                        }
    
                    } catch ( error ) {

                        if ( error instanceof Error ) {
                            result.output = error.message
                        }
                        
                    }

                }

                

                return result;

            } )
        ).then( results => {

            // iterate all requests
            return results.map( result => {

                // If the file is OK, call the callback with it
                if ( result.output instanceof ThermalFileSource ) {
                    result.request.callbacks.forEach( ( callback ) => {
                        // Callback
                        callback( result.output as ThermalFileSource )
                        // Do not forget to register the file!
                        this.registry.manager.registerSource( result.output as ThermalFileSource );

                    } );
                }

                // If the result is missing or if there was an error, call the callback with error
                else {
                    result.request.callbacks.forEach( callback => {
                        if ( result.output instanceof ThermalFileSource === false )
                            callback( undefined, result.output ?? "Něco se pokazilo" );
                    } );
                }

                return result.output;

            } )

            
        } );

        clearTimeout( this.timer );
        this.timer = undefined;

        this.registry.postLoadedProcessing();

        return result;
    }

}