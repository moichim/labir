// Range

import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { IWithCursorPosition } from "./drives/CursorPositionDrive";
import { IWithOpacity } from "./drives/OpacityDrive";
import { IWithPalette } from "./drives/PaletteDrive";
import { IWithRange } from "./drives/RangeDriver";
import { IWithFiles } from "./lists/filesState";
import { IWithGroups } from "./lists/GroupsState";
import { IWithCursorValue } from "./states/CursorValueDrive";
import { IWithLoading } from "./states/LoadingState";
import { IWithMinmaxGroup } from "./states/MinmaxGroupProperty";
import { IWithMinmaxRegistry } from "./states/MinmaxRegistryState";
import { IWithRedording } from "./time/recording/RecordingDrive";



/**
 * Object types
 */

/** Base object of the thermal tree */
interface IThermalObjectBase {
    destroySelfAndBelow: () => void,
    removeAllChildren: () => void,
    reset: () => void
}

/** Base object for container tree containers */
interface IThermalContainer
    extends IThermalObjectBase { }

/** An instance and its properties */
export interface IThermalInstance
    extends IThermalObjectBase,
    IWithCursorValue, IWithRedording {
        group: ThermalGroup
    }


/** Thermal group definition with all its properties */
export interface IThermalGroup
    extends IThermalContainer,
    IWithMinmaxGroup,
    IWithFiles,
    IWithCursorPosition { }

/** Thermal registry definition with all its properties */
export interface IThermalRegistry
    extends IThermalContainer,
    IWithGroups,
    IWithOpacity,
    IWithLoading,
    IWithMinmaxRegistry,
    IWithRange,
    IWithPalette { }
