import { PropertyListenerFn } from "../abstractProperty";

export interface ITimelineDrive {

    value: number,
    play(): void,
    pause(): void,
    stop(): void,
    setValueByPercent( percent: number ): void;
    addListener( key: string, fn: PropertyListenerFn<number> ): void;
    removeListener( key: string ): void;
}