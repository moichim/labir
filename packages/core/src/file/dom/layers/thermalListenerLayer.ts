import { AbstractFile } from "../../AbstractFile";
import ThermalDomFactory from "../domFactories";
import { AbstractLayer } from "./AbstractLayer";

/** Listens for the mouse events. Needs to be placed on top. */
export class ThermalListenerLayer extends AbstractLayer {

    protected container: HTMLDivElement;

    public constructor(
        instance: AbstractFile
    ) {
        super( instance );

        this.container = ThermalDomFactory.createListener();
    }

    public getLayerRoot(): HTMLElement {
        return this.container;
    }
    protected onDestroy(): void {
        this.container.remove();    
    }

}