import Client, { TreeItem } from "@labir/server"
import { createContext } from "@lit/context"
import { GetCurrentUserTree } from "packages/server/client/src/routes/get/GetCurrentUserTree";

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