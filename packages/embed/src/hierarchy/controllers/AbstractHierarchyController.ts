import { PropertyDeclaration, PropertyValues } from "lit";
import { AbstractReactiveController } from "../../controllers/AbstractReactiveController";
import { IBaseElement } from "../../controllers/IBaseElement";

/** Common internal state for host elements that should be only internal states. */
export const INTERNAL_STATE_DECLARATION: PropertyDeclaration = { reflect: false, state: true }

export type HostReactiveProperties<T> = {
    [key in keyof T]: PropertyDeclaration;
}

/** Abstract base class for controllers related to the hierarchy of `@labirthermal/core`.  */
export abstract class AbstractHierarchyController<T extends IBaseElement> extends AbstractReactiveController<T> {

    abstract hostUpdatedWatcher(value: PropertyValues<T>): void;

    /** Retrieve the default slug from the host element, falling back to the element UUID. Should be called only in host connected. */
    protected _getDefaultSlugFromHost(
        primaryAttributeName: string
    ): string {
        return this.host.getAttribute(primaryAttributeName) ?? this.host.getAttribute("slug") ?? this.UUID;
    }
    
}