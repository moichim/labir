import { AbstractAnalysis, Instance, PlaybackSpeeds, ThermalFileFailure } from "@labirthermal/core";
import { createContext } from "@lit/context";
import { AbstractFileProvider } from "../../abstraction/AbstractFileProvider";

/** A crucial context exposing the `Instance` object from `AbstractFileProvider` to `AbstractFileConsumers`. */
export const fileContext = createContext<Instance|undefined>( "file" );


export const fileFailureContext = createContext<ThermalFileFailure|undefined>( "failure" );


/** Whether a file request is in progress; independent of readiness or an existing instance. */
export const loadingContext = createContext<boolean>( "file-loading" );


export const readyContext = createContext<boolean>( "file-ready-context" );


export const fileProviderContext = createContext<AbstractFileProvider>( "file-provider-element" );


export const fileMsContext = createContext<number>("file-ms-context");


export type FileCursorContext = number | undefined;

export const fileCursorContext = createContext<FileCursorContext>( "file-cursor" );




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



export const filePlayingContext = createContext<boolean>( "file-playing-context" );




type PlaybackSpeedContext = PlaybackSpeeds | undefined;
export const filePlaybackSpeedContext = createContext<PlaybackSpeedContext>( "file-playback-speed" );



type RecordingContext = boolean;
/** @deprecated */
export const fileRecordingContext = createContext<RecordingContext>( "recording" );



type MayStopContext = boolean;
/** @deprecated */
export const filaMayStopContext = createContext<MayStopContext>( "mayStop" );



export type AnalysisList = AbstractAnalysis[];
export const fileAnalysisListContext = createContext<AnalysisList>( "analysislist" );
