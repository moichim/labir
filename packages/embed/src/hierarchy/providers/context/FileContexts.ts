import { Instance, PlaybackSpeeds, ThermalFileFailure } from "@labirthermal/core";
import { createContext } from "@lit/context";
import { AbstractFileProvider } from "../../abstraction/AbstractFileProvider";
import { FileProviderController } from "../../controllers/FileController";

type FileContext = Instance;
export const fileContext = createContext<FileContext|undefined>( "file" );



type FailureContext = ThermalFileFailure;
export const FailureContext = createContext<FailureContext|undefined>( "failure" );



type LoadingContext = boolean;
export const loadingContext = createContext<LoadingContext>( "file-loading" );





export type FileProviderContext = AbstractFileProvider;
export const fileProviderContext = createContext<FileProviderContext>( "file-provider-element" );


type PlayingContext = boolean;
export const playingContext = createContext<PlayingContext>( "playing" );




type PlaybackSpeedContext = PlaybackSpeeds | undefined;
export const playbackSpeedContext = createContext<PlaybackSpeedContext>( "playbackSpeed" );




type MayStopContext = boolean;
export const mayStopContext = createContext<MayStopContext>( "mayStop" );

