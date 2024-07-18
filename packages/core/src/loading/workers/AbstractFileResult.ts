/** Both `ThermalFileReader` and `ThermalFileFailure` share common attributes since they are both results of `FilesService.loadFile()` */
export abstract class AbstractFileResult{
    
    constructor(
        public readonly thermalUrl: string,
        public readonly visibleUrl?: string
    ) {

    }

    /** @deprecated to identify success, use `instanceof` */
    public abstract isSuccess(): boolean;
}