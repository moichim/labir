import Client, { GridGrouping, TreeItem } from "@labirthermal/server";
import { createContext } from "@lit/context";
import { GetCurrentUserTree } from "packages/server/client/src/routes/get/GetCurrentUserTree";
import { FolderMode } from "./composition/AppWithState";

export const clientContext = createContext<Client>( "client-context" );

export const currentUserTreeContext = createContext<TreeItem[]>( "current-user-tree-context" );

export const currentUserTreeSetterContext = createContext<(tree: GetCurrentUserTree) => void>( "current-user-tree-setter-context" );

export const compactContext = createContext<boolean>( "compact-context" );

export const compactContextSetter = createContext<(compact: boolean) => void>( "compact-context-setter" );


export enum DisplayMode {
    GRID = "grid",
    TABLE = "table"
}

export const displayModeContext = createContext<DisplayMode>( "display-mode-context" );

export const displayModeSetterContext = createContext<(mode: DisplayMode) => void>( "display-mode-setter-context" );


export const showDiscussionContext = createContext<number>( "display-discussion-context" );

export const showDiscussionSetterContext = createContext<(columns: boolean) => void>( "display-discussion-setter-context" );

export const editTagsContext = createContext<boolean>( "edit-tags-context" );

export const editTagsSetterContext = createContext<(edit: boolean) => void>( "edit-tags-setter-context" );


export const syncAnalysisContext = createContext<boolean>( "sync-analysis-context-connected" );

export const syncAnalysisSetterContext = createContext<(sync: boolean) => void>( "sync-analysis-setter-context-connected" );



export const tagsFilterContext = createContext<string[]>( "tags-filter-context" );

export const tagsFilterSetterContext = createContext<(tags: string[]) => void>( "tags-filter-setter-context" );

export const subfoldersModeContext = createContext<FolderMode>("subfolders-mode-context");

export const subfoldersModeSetterContext = createContext<(mode: FolderMode) => void>("subfolders-mode-setter-context");

export const subgildersGridByMode = createContext<GridGrouping>("subfolders-grid-by-mode");

export const subgildersGridByModeSetter = createContext<(mode: GridGrouping) => void>("subfolders-grid-by-mode-setter");

export const lockedBrowsingTo = createContext<string|undefined>("locked-location-context");

export const lockedBrowsingToSetter = createContext<(locked: string|undefined) => void>("locked-location-setter-context");