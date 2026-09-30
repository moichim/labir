import { PropertyValues } from "lit";
import { AbstractReactiveController } from "../../controllers/AbstractReactiveController";
import { IBaseElement } from "../../controllers/IBaseElement";

export abstract class AbstractHierarchyController<T extends IBaseElement> extends AbstractReactiveController<T> {

    private _UUID: string;

    public get UUID(): string {
        return this._UUID;
    }

    constructor(
        host: T
    ) {
        super(host);
        this._UUID = host.UUID + "_controller";
    }

    public abstract hostUpdated(value: PropertyValues<T>): void;
    


}