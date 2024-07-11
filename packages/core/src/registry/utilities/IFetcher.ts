import { ThermalFetcherCallbackType } from "./ThermalFetcher";

export interface IFetcher {
    
    request( thermalUrl: string, visibleUrl?: string, callback?: ThermalFetcherCallbackType ): void,


}