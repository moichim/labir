export abstract class AbstractFileResult{
    
    constructor(
        public readonly thermalUrl: string,
        public readonly visibleUrl?: string
    ) {

    }

    /** @deprecated to identify success, use `instanceof` */
    public abstract isSuccess(): boolean;
}