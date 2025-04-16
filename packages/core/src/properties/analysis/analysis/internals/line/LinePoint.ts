import { AbstractPoint, PointPlacement } from "../AbstractPoint";
import { AbstractHandlePoint } from "../area/AbstractHandlePoint";
import { LineAnalysis } from "./LineAnalysis";

export class LinePoint extends AbstractPoint {

    // protected readonly onX: (x: number) => void;
    // protected readonly onY: (x: number) => void;


    public mayMoveToX(value: number): boolean {
        return value >= 0 && value < this.file.width;
    }
    public mayMoveToY(value: number): boolean {
        return value >= 0 && value < this.file.height;
    }
    protected analyzeXFromTool(value: number): { x: number; placement: PointPlacement; } {
        return {
            x: value,
            placement: PointPlacement.MIDDLE
        }
    }
    protected sideEffectOnXFromTool(value: number, placement: PointPlacement): void {
        // this.onX.call( this, value );
    }
    protected analyzeYFromTool(value: number): { y: number; placement: PointPlacement; } {
        return {
            y: value,
            placement: PointPlacement.MIDDLE
        }
    }
    protected sideEffectOnYFromTool(value: number, placement: PointPlacement): void {
        // throw new Error("Method not implemented.");
    }
    protected onSetColor(value: string): void {
        this.innerElement.style.backgroundColor = value;
    }
    public getRadius(): number {
        return 10;
    }
    
    protected actionOnActivate(): void {
        this.setColor(this.activeColor);
    }
    protected actionOnDeactivate(): void {
        this.setColor(
            this.isInSelectedLayer()
                ? this.initialColor
                : this.inactiveColor
        );
    }



    createInnerElement(): HTMLDivElement {
        const inner = document.createElement("div");
        inner.style.position = "absolute";
        inner.style.top = "-5px";
        inner.style.left = "-5px";
        inner.style.width = "10px";
        inner.style.height = "10px";
        inner.style.position = "absolute";
        inner.style.backgroundColor = this.color;
        return inner;
    }

    public actionOnMouseEnter(): void {
        if (this.innerElement && this.isInSelectedLayer() ) {
            this.innerElement.style.boxShadow = "0px 0px 10px 2px white";
            this.innerElement.style.borderWidth = "1px";
            this.innerElement.style.borderStyle = "solid";
            this.innerElement.style.borderColor = "white";
        }
    }
    public actionOnMouseLeave(): void {
        if (this.innerElement) {
            this.innerElement.style.removeProperty("box-shadow");
            this.innerElement.style.removeProperty("border-width");
            this.innerElement.style.removeProperty("border-style");
            this.innerElement.style.removeProperty("border-color");
        }
    }
    
}