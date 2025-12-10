import { createContext } from "@lit/context";
import { ClientController } from "./ClientController";
import { ContentController } from "./ContentController";

export const ControlledClientContext = createContext<ClientController<any>>("controlled-client-controller");

export const ControlledContentContext = createContext<ContentController<any>>("controlled-content-controller");