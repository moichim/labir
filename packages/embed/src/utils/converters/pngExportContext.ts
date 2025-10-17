import { createContext, provide } from "@lit/context";
import { BaseElement } from "../../hierarchy/BaseElement";
import { AbstractControlledApp } from "../../apps/AbstractControlledApp";

export type ContextSetter<T> = (value: T) => void


export const pngExportWidthContext = createContext<number>("pngExportWidthContext");
export const pngExportWidthSetterContext = createContext<ContextSetter<number>>("pngExportWidthSetterContext");


export const pngExportFsContext = createContext<number>("png-export-width-context");
export const pngExportFsSetterContext = createContext<ContextSetter<number>>("png-export-width-setter-context");


export const pngExportAnalysisContext = createContext<boolean>("pngExportAnalysisContext");
export const pngExportAnalysisSetterContext = createContext<ContextSetter<boolean>>("pngExportAnalysisSetterContext");


export const pngExportScaleContext = createContext<boolean>("pngExportScaleContext");
export const pngExportScaleSetterContext = createContext<ContextSetter<boolean>>("pngExportScaleSetterContext")

export const pngExportFileNameContext = createContext<boolean>("pngExportFileNameContext");
export const pngExportFileNameSetterContext = createContext<ContextSetter<boolean>>("pngExportFileNameSetterContext")

export const pngExportFileDateContext = createContext<boolean>("pngExportFileDateContext");
export const pngExportFileDateSetterContext = createContext<ContextSetter<boolean>>("pngExportFileDateSetterContext")

export const pngExportLicenseContext = createContext<boolean>("pngExportLicenseContext");
export const pngExportLicenseSetterContext = createContext<ContextSetter<boolean>>("pngExportLicenseSetterContext")

export const pngExportColumnsContext = createContext<number>("pngExportColumnsContext");
export const pngExportColumnsSetterContext = createContext<ContextSetter<number>>("pngExportColumnsSetterContext")

export const pngExportGroupNameContext = createContext<boolean>("pngExportGroupNameContext");
export const pngExportGroupNameSetterContext = createContext<ContextSetter<boolean>>("pngExportGroupNameSetterContext")


export interface IWithPngExportContext {

    pngWidth: number;
    pngFs: number;
    pngAnalyses: boolean;
    pngExportScale: boolean;
    pngExportLicense: boolean;
    pngExportFileName: boolean;
    pngExportFileDate: boolean;
    pngExportColumns: number;
    pngExportGroupName: boolean;

    pngWidthSetter: ContextSetter<number>;
    pngFsSetter: ContextSetter<number>;
    pngExportAnalysesSetter: ContextSetter<boolean>;
    pngExportScaleSetter: ContextSetter<boolean>;
    pngExportLicenseSetter: ContextSetter<boolean>;
    pngExportFileNameSetter: ContextSetter<boolean>;
    pngExportFileDateSetter: ContextSetter<boolean>;
    pngExportColumnsSetter: ContextSetter<number>;
    pngExportGroupNameSetter: ContextSetter<boolean>;

}

export abstract class BaseAppWithPngExportContext extends AbstractControlledApp implements IWithPngExportContext {

    @provide({ context: pngExportWidthContext })
    public pngWidth: number = 1200;
    @provide({ context: pngExportWidthSetterContext })
    public pngWidthSetter = (value: number) => {
        this.pngWidth = value;
    }


    @provide({ context: pngExportFsContext })
    public pngFs: number = 20;
    @provide({ context: pngExportFsSetterContext })
    public pngFsSetter = (value: number) => {
        this.pngFs = value;
    }


    @provide({ context: pngExportAnalysisContext })
    public pngAnalyses: boolean = true;
    @provide({ context: pngExportAnalysisSetterContext })
    public pngExportAnalysesSetter: ContextSetter<boolean> = value => this.pngAnalyses = value;


    @provide({ context: pngExportScaleContext })
    public pngExportScale: boolean = true;
    @provide({ context: pngExportScaleSetterContext })
    public pngExportScaleSetter: ContextSetter<boolean> = value => this.pngExportScale = value;


    @provide({ context: pngExportLicenseContext })
    public pngExportLicense: boolean = true;
    @provide({ context: pngExportLicenseSetterContext })
    public pngExportLicenseSetter: ContextSetter<boolean> = value => this.pngExportLicense = value;


    @provide({ context: pngExportFileNameContext })
    public pngExportFileName: boolean = false;
    @provide({ context: pngExportFileNameSetterContext })
    public pngExportFileNameSetter: ContextSetter<boolean> = value => this.pngExportFileName = value;


    @provide({ context: pngExportFileDateContext })
    public pngExportFileDate: boolean = true;
    @provide({ context: pngExportFileDateSetterContext })
    public pngExportFileDateSetter: ContextSetter<boolean> = value => this.pngExportFileDate = value;


    @provide({ context: pngExportColumnsContext })
    public pngExportColumns: number = 2;
    @provide({ context: pngExportColumnsSetterContext })
    public pngExportColumnsSetter: ContextSetter<number> = value => this.pngExportColumns = value;


    @provide({ context: pngExportGroupNameContext })
    public pngExportGroupName: boolean = true;
    @provide({ context: pngExportGroupNameSetterContext })
    public pngExportGroupNameSetter: ContextSetter<boolean> = value => this.pngExportGroupName = value;
}






export const pngAuthorContext = createContext<string | undefined>("pngAuthorContext");
export const pngAuthorSetterContext = createContext<ContextSetter<string | undefined>>("pngAuthorSetterContext");