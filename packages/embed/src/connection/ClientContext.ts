import Client from "@labir/server"
import { createContext } from "@lit/context"

export const clientContext = createContext<Client>( "client-context" );