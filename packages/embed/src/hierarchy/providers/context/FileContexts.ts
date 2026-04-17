import { AbstractAnalysis, Instance, PlaybackSpeeds, ThermalFileFailure } from "@labirthermal/core";
import { createContext } from "@lit/context";
import { AbstractFileProvider } from "../../abstraction/AbstractFileProvider";

/** A crucial context exposing the `Instance` object from `AbstractFileProvider` to `AbstractFileConsumers`. */
export const fileContext = createContext<Instance|undefined>( "file" );


export const fileFailureContext = createContext<ThermalFileFailure|undefined>( "failure" );


/** @deprecated Not used - remove */
export const loadingContext = createContext<boolean>( "file-loading" );


/** @deprecated Not used - remove */
export const loadedContext = createContext<boolean>( "file-loaded" );


export const fileProviderContext = createContext<AbstractFileProvider>( "file-provider-element" );


export const fileMsContext = createContext<number>("file-ms-context");


export type FileCursorContext = undefined | {
        absolute: number,
        ms: number,
        percentage: number
}

export const fileCursorContext = createContext<FileCursorContext>( "file-cursor" );

export type FileCursorSetterContext = (percent: number|undefined) => void;

export const fileCursorSetterContext = createContext<FileCursorSetterContext>( "file-cursor-setter" );




export type CurrentFrameContext = {
    index: number,
    ms: number,
    time: string,
    percentage: number,
    absolute: number
}
export const fileCurrentFrameContext = createContext<CurrentFrameContext|undefined>( "playback" );



export type DurationContext = {
    ms: number,
    time: string
}
export const durationContext = createContext<DurationContext|undefined>( "duration" );



type PlayingContext = boolean;
export const filePlayingContext = createContext<PlayingContext>( "file-playing-context" );




type PlaybackSpeedContext = PlaybackSpeeds | undefined;
export const filePlaybackSpeedContext = createContext<PlaybackSpeedContext>( "file-playback-speed" );



type RecordingContext = boolean;
/** @deprecated */
export const fileRecordingContext = createContext<RecordingContext>( "recording" );



type MayStopContext = boolean;
/** @deprecated */
export const filaMayStopContext = createContext<MayStopContext>( "mayStop" );



export type AnalysisList = AbstractAnalysis[];
export const fileAnalysisList = createContext<AnalysisList>( "analysislist" );
