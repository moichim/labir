// Core structure

// Data types
import { ThermalMinmaxOrUndefined } from "./properties/abstractMinmaxProperty";
import { ThermalCursorPositionOrUndefined } from "./properties/drives/CursorPositionDrive";
import { ThermalRangeOrUndefined } from "./properties/drives/RangeDriver";

// Palette
import { PaletteId } from "./properties/drives/PaletteDrive";
import { GRAYSCALE, IRON, JET, ThermalPaletteType, ThermalPalettes } from "./file/palettes";

// Utilities - time
import { TimeFormat } from "./utils/time/formatting";
import { TimePeriod } from "./utils/time/periods";
import { TimeRound } from "./utils/time/rounding";

import { AvailableThermalPalettes } from "./file/palettes";

import { ThermalManager, ThermalManagerOptions } from "./hierarchy/ThermalManager";
import { AbstractFile } from "./file/AbstractFile";
import { Instance } from "./file/instance";
import { ThermalGroup } from "./hierarchy/ThermalGroup";
import { ThermalRegistry, ThermalRegistryOptions } from "./hierarchy/ThermalRegistry";
import { ThermalFileRequest } from "./loading/mainThread/batch/ThermalRequest";
import { ThermalFileReader } from "./loading/workers/ThermalFileReader";
import { ThermalFileFailure } from "./loading/workers/ThermalFileFailure";


import { getPool } from "./utils/pool"
import { playbackSpeed } from "./properties/time/playback/TimelineDrive";
import { AbstractTool } from "./properties/tool/internals/AbstractTool";
import { InspectTool } from "./properties/tool/internals/InspectTool";
import { AddRectangleTool } from "./properties/analysis/internals/rectangle/AddRectangleTool";
import { AbstractAnalysis } from "./properties/analysis/internals/AbstractAnalysis";
import { RectangleAnalysis } from "./properties/analysis/internals/rectangle/RectangleAnalysis";
import { CornerPoint } from "./properties/analysis/internals/rectangle/CornerPoint";
import { ThermalTool } from "./properties/tool/ToolDrive";



export {

    getPool,

    // Manager
    ThermalManager,
    ThermalManagerOptions,

    // Registry
    ThermalRegistry,
    ThermalRegistryOptions,
    ThermalFileRequest,

    // Group
    ThermalGroup,

    // File
    AbstractFile,
    Instance,
    ThermalFileReader,
    ThermalFileFailure,
    playbackSpeed,


    // Core datatypes
    ThermalRangeOrUndefined,
    ThermalMinmaxOrUndefined,
    ThermalCursorPositionOrUndefined,

    // Palette
    GRAYSCALE,
    IRON,
    JET,
    PaletteId,
    ThermalPaletteType,
    ThermalPalettes,
    AvailableThermalPalettes,

    // Utils - Time
    TimeFormat, TimePeriod, TimeRound,

    // Analysis
    AbstractTool,
    InspectTool,
    AddRectangleTool,
    AbstractAnalysis,
    RectangleAnalysis,
    CornerPoint,
    ThermalTool
};

