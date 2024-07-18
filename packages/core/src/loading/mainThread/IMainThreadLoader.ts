import { ThermalFetcherCallbackType } from "./sequential/ThermalFetcher";

export interface IMainThreadLoader {
    
    request( thermalUrl: string, visibleUrl?: string, callback?: ThermalFetcherCallbackType ): void,


}