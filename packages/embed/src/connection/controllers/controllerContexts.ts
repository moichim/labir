import { createContext } from "@lit/context";
import { ClientController } from "./ClientController";
import { ContentController } from "./ContentController";
import { DisplayController } from "./DisplayController";
import { SelectionController } from "./SelectionController";

export const ControlledClientContext = createContext<ClientController>("controlled-client-controller");

export const ControlledContentContext = createContext<ContentController>("controlled-content-controller");

export const DisplayControllerContext = createContext<DisplayController>("connected-display-controller");

export const SelectionControllerContext = createContext<SelectionController>("connected-selection-controller");