import { consume } from "@lit/context";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { ControlledClientContext, ControlledContentContext, DisplayControllerContext, FileSelectionControllerContext } from "../controllerContexts";
import { ClientController } from "../ClientController";
import { ContentController } from "../ContentController";
import { CallbacksManager } from "@labirthermal/core";
import { DisplayController } from "../DisplayController";
import { FileSelectionController } from "../FileSelectionController";

export abstract class ControlledConsumer extends BaseElement {

    /**  */
    @consume({ context: ControlledClientContext, subscribe: true })
    protected client!: ClientController;

    @consume({ context: ControlledContentContext, subscribe: true })
    protected content!: ContentController;

    @consume({context: DisplayControllerContext, subscribe: true})
    protected display!: DisplayController;

    @consume({ context: FileSelectionControllerContext, subscribe: true })
    protected selection!: FileSelectionController;


    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.content.unsubscribeFromAll( this );
        this.display.unsubscribeFromAll( this );

    }



}