import { AbstractFileProvider } from "../abstraction/AbstractFileProvider";
import type { IElementWithFileLoadController } from "../controllers/FileLoadController";
import { FileLoadController } from "../controllers/FileLoadController";

export class FileProviderElement extends AbstractFileProvider implements IElementWithFileLoadController {

    public fileLoadController: FileLoadController = new FileLoadController(this);

    public thermal: string | undefined;
    public visible: string | undefined;

}