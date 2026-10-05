import { Instance, PlaybackSpeeds, ThermalFileFailure } from "@labirthermal/core";
import { provide } from "@lit/context";
import { html, PropertyValues } from "lit";
import { state } from "lit/decorators.js";
import { AbstractGroupConsumer } from "../consumers/AbstractGroupConsumer";
import type { IElementWithFileController } from "../controllers/FileController";
import { FileController } from "../controllers/FileController";
import { AnalysisList, loadingContext } from "../providers/context/FileContexts";

export abstract class AbstractFileProvider extends AbstractGroupConsumer implements IElementWithFileController {

    public static properties = {
        ...FileController.HOST_PROPERTIES
    };

    public fileController: FileController = new FileController(this);

    public file?: Instance;

    public failure?: ThermalFileFailure;

    @provide({ context: loadingContext })
    @state()
    public loading: boolean = false;

    protected ready: boolean = false;

    public ms: number = 0;

    public playbackSpeed: PlaybackSpeeds = 1;

    public recording: boolean = false;

    public playing: boolean = false;

    /** List of all analyses taken from the `Instance.analysis.layers.all` */
    public analyses: AnalysisList = [];


    public analysis1?: string;
    public analysis2?: string;
    public analysis3?: string;
    public analysis4?: string;
    public analysis5?: string;
    public analysis6?: string;
    public analysis7?: string;

    public autoHighlight: boolean = false;



    public updated(_changedProperties: PropertyValues<AbstractFileProvider>): void {
        super.updated(_changedProperties);

        this.fileController.hostUpdatedWatcher(_changedProperties);

    }


    /** Register instance callback listeners. @deprecated */
    public recieveInstance(
        instance: Instance
    ) {

        this.fileController.receiveInstance(instance);

    }


    /** @deprecated */
    public removeInstance(
        instance: Instance
    ) {

        this.fileController.removeInstance();

    }


    public deleteFile() {
        if (this.file) {
            this.removeInstance(this.file);
        }
    }


    protected render(): unknown {
        return html`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `;
    }

}