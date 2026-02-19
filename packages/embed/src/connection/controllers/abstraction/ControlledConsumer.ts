import { consume } from "@lit/context";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { ControlledClientContext, ControlledContentContext, DisplayControllerContext, SelectionControllerContext } from "../controllerContexts";
import { ClientController } from "../ClientController";
import { ContentController } from "../ContentController";
import { CallbacksManager } from "@labirthermal/core";
import { DisplayController } from "../DisplayController";
import { SelectionController } from "../SelectionController";

export abstract class ControlledConsumer extends BaseElement {

    /**  */
    @consume({ context: ControlledClientContext, subscribe: true })
    protected client!: ClientController;

    @consume({ context: ControlledContentContext, subscribe: true })
    protected content!: ContentController;

    @consume({context: DisplayControllerContext, subscribe: true})
    protected display!: DisplayController;

    @consume({ context: SelectionControllerContext, subscribe: true })
    protected selection!: SelectionController;


    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.content.unsubscribeFromAll( this );
        this.display.unsubscribeFromAll( this );

    }



}