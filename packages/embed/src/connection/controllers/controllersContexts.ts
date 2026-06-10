import { createContext } from "@lit/context";
import { ClientController } from "./ClientController";
import { ContentController } from "./ContentController";
import { DisplayController } from "./DisplayController";
import { FileSelectionController } from "./FileSelectionController";
import { FolderSelectionController } from "./FolderSelectionController";

export const ControlledClientContext = createContext<ClientController>("controlled-client-controller");

export const ControlledContentContext = createContext<ContentController>("controlled-content-controller");

export const DisplayControllerContext = createContext<DisplayController>("connected-display-controller");

export const FileSelectionControllerContext = createContext<FileSelectionController>("connected-file-selection-controller");

export const FolderSelectionControllerContext = createContext<FolderSelectionController>("connected-folder-selection-controller");