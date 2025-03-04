import { createContext } from "@lit/context";

export type ContextSetter<T extends any> = ( value: T ) => void

export const pngExportColorContext = createContext<string>( "png-export-color-context" );
export const pngExportColorSetterContext = createContext<ContextSetter<string>>("png-export-color-setter-context");


export const pngExportWidthContext = createContext<number>("pngExportWidthContext");
export const pngExportWidthSetterContext = createContext<ContextSetter<number>>( "pngExportWidthSetterContext" );


export const pngExportFsContext = createContext<number>("png-export-width-context");
export const pngExportFsSetterContext = createContext<ContextSetter<number>>( "png-export-width-setter-context" );


export const pngExportAnalysisContext = createContext<number>("pngExportAnalysisContext");
export const pngExportAnalysisSetterContext = createContext<ContextSetter<number>>( "pngExportAnalysisSetterContext" );


export const pngExportInfoContext = createContext<number>("pngExportInfoContext");
export const pngExportInfoSetterContext = createContext<ContextSetter<number>>( "pngExportInfoSetterContext" );


export const pngExportScaleContext = createContext<number>("pngExportScaleContext");
export const pngExportScaleSetterContext = createContext<ContextSetter<number>>( "pngExportScaleSetterContext" )






export const pngAuthorContext = createContext<string|undefined>("pngAuthorContext");
export const pngAuthorSetterContext = createContext<ContextSetter<string|undefined>>("pngAuthorSetterContext");


export const pngLicenseContext = createContext<string|undefined>("pngLicenseContext");
export const pngLicenseSetterContext = createContext<ContextSetter<string|undefined>>("pngLicenseSetterContext");