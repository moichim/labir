import Client, { TreeItem } from "@labir/server"
import { createContext } from "@lit/context"
import { GetCurrentUserTree } from "packages/server/client/src/routes/get/GetCurrentUserTree";

export const clientContext = createContext<Client>( "client-context" );

export const currentUserTreeContext = createContext<TreeItem[]>( "current-user-tree-context" );

export const currentUserTreeSetterContext = createContext<(tree: GetCurrentUserTree) => void>( "current-user-tree-setter-context" );