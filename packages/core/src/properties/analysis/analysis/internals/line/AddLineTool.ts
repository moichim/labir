import { Instance } from "../../../../../file/instance";
import { ITool } from "../../../tool/internals/AbstractTool";
import { AbstractAddTool } from "../AbstractAddTool";
import { AbstractPoint } from "../AbstractPoint";

export class AddLineTool extends AbstractAddTool implements ITool {

    public readonly key: string = "add-line";
    public readonly name: string = "addlineanalysis";
    public readonly description: string = "clickandaddline";
    public readonly icon: string = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="SmallFinal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4ZM37.72,12.13l2,2.17,4.41-4.07L35.4.78l-4.41,4.07,2.65,2.87L7.93,31.46l-2.65-2.87-4.41,4.07,8.73,9.45,4.41-4.07-2-2.17,25.72-23.74Z"/>
</svg>`;

    protected onActivate(): void {
        this.manager.forEveryInstance(instance => {
            instance.analysis.layers.selectedOnly.forEach(analysis => {
                analysis.setDeselected();
            });
        });
    }

    protected onDeactivate(): void {}

    public onCanvasClick(x: number, y: number, file: Instance): void {
        const newLine = file.analysis.layers.createLineFrom(x,y);
        newLine.setSelected(true);
    }
    public onCanvasLeave(): void {
    }
    public onPointEnter(): void {

    }
    public onPointLeave(): void {
    }
    public onPointMove(point: AbstractPoint, top: number, left: number): void {
        if ( point.isInSelectedLayer() && point.active ) {
            point.setXFromTool( left );
            point.setYFromTool(top);
            point.analysis.onMoveOrResize.call( point.analysis );
        }
    }
    public onPointDown(point: AbstractPoint): void {
    }
    public onPointUp(point: AbstractPoint): void {
        if ( ! point.isInSelectedLayer() ) {
            return;
        }
        point.deactivate();
        point.analysis.file.group.tool.selectTool("edit");
        point.analysis.ready = true;
    }
    public getLabelValue(x: number, y: number, file: Instance): string {
        const temperature = file.group.tool.tools.inspect.getLabelValue(x, y, file);
        return `X:${x}<br />Y:${y}<br />${temperature}`;
    }
    
    
}