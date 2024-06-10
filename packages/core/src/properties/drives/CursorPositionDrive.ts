import { ThermalGroup } from "../../group/ThermalGroup";
import { AbstractProperty, IBaseProperty } from "../abstractProperty";

/** The cursor position coordinates */
export type ThermalCursorPosition = {
    x: number,
    y: number
}

/** The cursor position coordinates or undefined */
export type ThermalCursorPositionOrundefined = ThermalCursorPosition | undefined;

/** An object that has CursorPositionDrive should implement it in one particular way. */
export interface IWithCursorPosition extends IBaseProperty {
    cursorPosition: CursorPositionDrive;
}

/** Handles cursor position */
export class CursorPositionDrive extends AbstractProperty<ThermalCursorPositionOrundefined, ThermalGroup>{

    protected _hover: boolean = this.value !== undefined;
    public get hover() { return this._hover; }


    protected validate(value: ThermalCursorPositionOrundefined): ThermalCursorPositionOrundefined {
        return value;
    }

    // After the position changes, update the hover & project the position in all instances
    protected afterSetEffect(value: ThermalCursorPositionOrundefined) {

        this._hover = this.value !== undefined;

        this.parent.instances.forEveryInstance( instance => instance.recieveCursorPosition( value ) );

    }

    public recieveCursorPosition(
        position: ThermalCursorPositionOrundefined
    ) {
        this.value = position;
    }
    
}