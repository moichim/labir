import { Instance, playbackSpeed, ThermalFileFailure } from "@labir/core"
import { createContext } from "@lit/context"

export type CurrentFrameContext = {
    index: number,
    ms: number,
    time: string,
    percentage: number,
    absolute: number
}

export type DurationContext = {
    ms: number,
    time: string
}

type PlayingContext = boolean;

type FileContext = Instance;

type FailureContext = ThermalFileFailure;

type PlaybackSpeedContext = keyof typeof playbackSpeed;

type RecordingContext = boolean;
type MayStopContext = boolean;

export const currentFrameContext = createContext<CurrentFrameContext|undefined>( "playback" );

export const durationContext = createContext<DurationContext|undefined>( "duration" );

export const playingContext = createContext<PlayingContext>( "playing" );

export const fileContext = createContext<FileContext|undefined>( "file" );

export const FailureContext = createContext<FailureContext|undefined>( "failure" );

export const playbackSpeedContext = createContext<PlaybackSpeedContext>( "playbackSpeed" );

export const recordingContext = createContext<RecordingContext>( "recording" );

export const mayStopContext = createContext<MayStopContext>( "mayStop" );