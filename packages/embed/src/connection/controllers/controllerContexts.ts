import { createContext } from "@lit/context";
import { ClientController } from "./ClientController";
import { ContentController } from "./ContentController";
import { DisplayController } from "./DisplayController";

export const ControlledClientContext = createContext<ClientController>("controlled-client-controller");

export const ControlledContentContext = createContext<ContentController>("controlled-content-controller");

export const DisplayControllerContext = createContext<DisplayController>("display-controller");