import { CallbacksManager } from "@labirthermal/core";
import { AbstractThermalElement } from "../hierarchy/AbstractThermalElement";

export class SubscriberManager extends CallbacksManager< () => void > {

    /**
     * Register an element, providing an optional callback that will be called BEFORE the subscribed element's update.
     */
    public subscribe<T extends AbstractThermalElement>(

        /** The element that subscribes to the given changes */
        element: T,

        /** If an optional callback is provided, it will be called AFTER the host was updated and BEFORE the subscriber is updated. This means that the optional callback should modify reactive properties of the element in an efficient manner (avoiding unnecessary re-renders). */
        optionalCallback?: ( element: T ) => void
    ): this {

        this.set(
            element.UUID,
            () => {

                if ( optionalCallback ) {
                    optionalCallback(element);
                }

                element.requestUpdate();

            }
        );

        return this;

    }

    /** 
     * Call the callback on all the subscribers. 
     */
    public notifySubscribers(): void {
        this.call();
    }

}