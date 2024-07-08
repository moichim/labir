export abstract class FileResult{
    
    constructor(
        public readonly thermalUrl: string,
        public readonly visibleUrl?: string
    ) {

    }

    public abstract isSuccess(): boolean;
}