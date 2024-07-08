import { ErrorTypes, FileServiceStates } from "../FileReaderService";
import { AbstractProperty } from "./AbstractObservable";

export class FileStatusObservable extends AbstractProperty<FileServiceStates> {

    protected validate(): FileServiceStates {
        throw new Error("Method not implemented.");
    }
    protected afterSetEffect(): void {
        throw new Error("Method not implemented.");
    }

}