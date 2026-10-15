import { Instance } from "../file/instance";


export abstract class BaseStructureObject {

    public abstract getInstances(): Instance[];

    public abstract destroySelfAndBelow(): void;

    public abstract removeAllChildren(): void;

    public abstract reset(): void;

}