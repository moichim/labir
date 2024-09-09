import { AbstractFile } from "../../../file/AbstractFile";
import { AbstractTool, ITool } from "./AbstractTool";

export class InspectTool extends AbstractTool implements ITool {
    key = "inspect";
    name: string = "Inspect";
    description: string = "Inspect temperature values";
    icon: string = "";
    active: boolean = false;
    getLabelValue =  (x: number, y: number, file: AbstractFile): string => {
        return file.getTemperatureAtPoint( x, y ).toFixed(2) + " °C"
    };
    protected onActivate(): void {
        // throw new Error("Method not implemented.");
    }
    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }
    
}