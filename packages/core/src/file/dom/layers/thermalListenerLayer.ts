import { Instance } from "../../instance";
import { AbstractLayer } from "./AbstractLayer";
import ThermalDomFactory from "../domFactories";

/** Listens for the mouse events. Needs to be placed on top. */
export class ThermalListenerLayer extends AbstractLayer {

    protected container: HTMLDivElement;

    public constructor(
        instance: Instance
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