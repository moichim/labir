import { ApiInfoResponse, FolderInfoBase, GroupOfFiles } from "@labir/api";
import { createContext } from "@lit/context";



export enum FOLDER_MODE {
    LOADING = 0,
    INTRO = 1,
    GROUPS = 2,
    FILE = 3,
}

export enum FOLDER_GROUPING {
    FOLDERS = "everything",
    HOURS = "hours",
    DAYS = "days",
    WEEKS = "weeks",
    MONTHS = "months",
    YEARS = "years"
}


/** One group of content */
export type DataGroup = {
    key: string,
    label: string,
    description?: string,
    files: GroupOfFiles
}


export type ApiInfoContext = ApiInfoResponse | undefined;
export const apiInfoContext = createContext<ApiInfoContext>( "folder-api-info" );


/** Multiple groups of content */
export type DataGroups = DataGroup[];
export const dataGroupsContext = createContext<DataGroups|undefined>( "folder-data-groups" );

/** Current state context */
export type CurrentStateContext = FOLDER_MODE;
export const currentStateContext = createContext<CurrentStateContext>( "folder-current-state" );

/** Set the current state */
export type CurrentStateSetterContext = (state: FOLDER_MODE) => void;
export const currentStateSetterContext = createContext<CurrentStateSetterContext>("folder-current-state-setter");

/** Current groupping type */
export type CurrentGrouppingContext = FOLDER_GROUPING;
export const currentGroupingContext = createContext<CurrentGrouppingContext>("folder-current-groupping");

/** Set current groupping */
export type CurrentGrouppingSetterContext = (state: FOLDER_GROUPING) => void;
export const currentGrouppingSetterContext = createContext<CurrentGrouppingSetterContext>("folder-current-groupping-setter");

/** Grid state */
export type GridState = boolean;
export const gridContext = createContext<GridState>("folder-grid");

/** Grid state setter */
export type GridStateSetter = ( grid: boolean ) => void;
export const gridSetterContext = createContext<GridStateSetter>("folder-grid-setter");

/** Only parameter */
export type OnlyGroups = string[];
export const onlysContext = createContext<OnlyGroups>("folder-only");

export type OnlySettingsContext = {
    all: () => void;
    add: (folder: string) => void;
    remove: (folder: string) => void;
    only: (folders: string[]) => void;
};

export const onlySettingsContext = createContext<OnlySettingsContext>("folder-only-settings");