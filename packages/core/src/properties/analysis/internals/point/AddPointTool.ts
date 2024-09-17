import { AbstractFile } from "../../../../file/AbstractFile";
import { ITool } from "../../../tool/internals/AbstractTool";
import { AbstractAddTool } from "../AbstractAddTool";
import { AbstractPoint } from "../AbstractPoint";

export class AddPointTool extends AbstractAddTool implements ITool {

    key: string = "add-point";
    name: string = "Add a point analysis";
    description: string = "Click to add a point analysis.";
    icon: string = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`;
    active: boolean = false;

    public onCanvasClick(x: number, y: number, file: AbstractFile): void {
        const newPoint = file.analysis.layers.createPointAt(x, y);
        newPoint.setSelected( true );
    }

    public onPointDown(): void {

    }

    public onPointUp(point: AbstractPoint): void {
        point.deactivate();
        point.analysis.file.group.tool.selectTool("edit");
        point.analysis.ready = true;
        point.analysis.recalculateValues();

    }

    public onCanvasLeave(): void {

    }

    getLabelValue = (x: number, y: number, file: AbstractFile): string => {
        const temperature = file.group.tool.tools.inspect.getLabelValue(x, y, file);
        return `X:${x}<br />Y:${y}<br />${temperature}`;
    }

    protected onActivate(): void {
        // throw new Error("Method not implemented.");
        this.group.forEveryInstance(instance => {
            instance.analysis.layers.selectedOnly.forEach(analysis => {
                analysis.setDeselected();
            });
        });
    }
    protected onDeactivate(): void {
        // throw new Error("Method not implemented.");
    }

    public onPointMove(): void {
        /**
        if (point.isInSelectedLayer() && point.active) {
            point.x = left;
            point.y = top;
            point.analysis.onResize.call();
        }
        */
    }

    public onPointLeave(): void {

    }

    public onPointEnter(): void {

    }

}