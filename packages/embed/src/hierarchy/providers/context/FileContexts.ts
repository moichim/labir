import { Instance, playbackSpeed, ThermalFileFailure } from "@labir/core"
import { createContext } from "@lit/context"
import { FileProviderElement } from "../FileProvider";

export type FileProviderContext = FileProviderElement;
export const fileProviderContext = createContext<FileProviderContext>( "file-provider-element" );

type FileContext = Instance;

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

export const fileContext = createContext<FileContext|undefined>( "file" );

type FailureContext = ThermalFileFailure;
export const FailureContext = createContext<FailureContext|undefined>( "failure" );

type PlaybackSpeedContext = keyof typeof playbackSpeed;
export const playbackSpeedContext = createContext<PlaybackSpeedContext>( "playbackSpeed" );

type RecordingContext = boolean;
export const recordingContext = createContext<RecordingContext>( "recording" );


type MayStopContext = boolean;
export const mayStopContext = createContext<MayStopContext>( "mayStop" );