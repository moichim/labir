import { Instance } from "../../file/instance";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";
import { ThermalCursorPositionOrUndefined } from "../drives/CursorPositionDrive";

export interface IWithCursorValue extends IBaseProperty {
    cursorValue: CursorValueDrive;
}

export class CursorValueDrive extends AbstractProperty<number|undefined, Instance>{



    protected validate(value: number|undefined): number|undefined {
        return value;
    }

    // Once the value changes, project it to the cursor layer
    protected afterSetEffect() {

    }

    public recalculateFromCursor(
        position: ThermalCursorPositionOrUndefined
    ) {
        if ( position )
            this.value = this._getValueAtCoordinate( position.x, position.y );
    }

    protected _getValueAtCoordinate(
        x: number | undefined,
        y: number | undefined
    ) {

        if (
            x === undefined 
            || y === undefined 
            || x === this.parent.meta.width 
            || y === this.parent.meta.height 
        ) {
            return undefined;
        }

        const index = x + (y * this.parent.meta.width);
        const value = this.parent.pixels[index];
        return value;

    }
    
}