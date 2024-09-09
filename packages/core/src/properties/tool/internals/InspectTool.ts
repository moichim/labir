import { AbstractFile } from "../../../file/AbstractFile";
import { AbstractPoint } from "../../analysis/internals/AbstractPoint";
import { AbstractTool, ITool } from "./AbstractTool";

export class InspectTool extends AbstractTool implements ITool {
    
    key = "inspect";
    
    name: string = "Inspect";
    
    description: string = "Inspect temperature values";
    
    icon: string = "";
    
    active: boolean = false;

    public onCanvasClick(x: number, y: number, file: AbstractFile): void {
        // throw new Error("Method not implemented.");
    }

    public onCanvasLeave(file: AbstractFile): void {
        //
    }

    getLabelValue =  (x: number, y: number, file: AbstractFile): string => {
        return file.getTemperatureAtPoint( x, y ).toFixed(2) + " °C"
    };
    
    protected onActivate(): void {
        // throw new Error("Method not implemented.");
    }
    
    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }


    
    public onPointEnter(point: AbstractPoint): void {
        //
    }

    public onPointLeave(point: AbstractPoint): void {
        // 
    }

    public onPointMove(point: AbstractPoint, x: number, y: number): void {
        //   
    }

    public onPointDown(point: AbstractPoint): void {
        
    }

    public onPointUp(point: AbstractPoint): void {
        
    }
    
}