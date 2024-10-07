import { ThermalManager } from "../../hierarchy/ThermalManager";
import { AbstractProperty } from "../abstractProperty";


/** Controls image smoothing */
export class SmoothDrive extends AbstractProperty<boolean, ThermalManager> {
    protected validate(value: boolean): boolean {
        return value;
    }
    protected afterSetEffect(value: boolean): void {

        this.parent.forEveryRegistry( registry => registry.forEveryInstance( instance => {
            instance.canvasLayer.canvas.style.imageRendering = value === true ? "auto" : "pixelated";
        } ) );

    }

    setSmooth(value: boolean) {
        this.value = value;
    }
}