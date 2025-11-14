import { AbstractAnalysis, Instance, PlaybackSpeeds, ThermalFileFailure } from "@labirthermal/core";
import { createContext } from "@lit/context";
import { FileMarker } from "../../../controls/file/markers/ImageMarker";
import { AbstractFileProvider } from "../../abstraction/AbstractFileProvider";

type FileContext = Instance;
export const fileContext = createContext<FileContext|undefined>( "file" );



type FailureContext = ThermalFileFailure;
export const FailureContext = createContext<FailureContext|undefined>( "failure" );



type LoadingContext = boolean;
export const loadingContext = createContext<LoadingContext>( "file-loading" );




type LoadedContext = boolean;
export const loadedContext = createContext<LoadedContext>( "file-loaded" );




export type FileProviderContext = AbstractFileProvider;
export const fileProviderContext = createContext<FileProviderContext>( "file-provider-element" );



export type FileMsContext = number;
export const fileMsContext = createContext<FileMsContext>("file-ms-context");

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
export const currentFrameContext = createContext<CurrentFrameContext|undefined>( "playback" );



export type DurationContext = {
    ms: number,
    time: string
}
export const durationContext = createContext<DurationContext|undefined>( "duration" );



type PlayingContext = boolean;
export const playingContext = createContext<PlayingContext>( "playing" );




type PlaybackSpeedContext = PlaybackSpeeds | undefined;
export const playbackSpeedContext = createContext<PlaybackSpeedContext>( "playbackSpeed" );



type RecordingContext = boolean;
export const recordingContext = createContext<RecordingContext>( "recording" );



type MayStopContext = boolean;
export const mayStopContext = createContext<MayStopContext>( "mayStop" );



export type AnalysisList = AbstractAnalysis[];
export const analysisList = createContext<AnalysisList>( "analysislist" );



type FileMarkersContext = FileMarker[];
export const fileMarkersContext = createContext<FileMarkersContext>( "file-markers-context" );