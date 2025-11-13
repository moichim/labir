// Core structure

// Data types

// Palette
import { WHITE_HOT, IRON, JET, ThermalPalettes, ThermalPaletteType, AvailableThermalPalettes } from "./file/utils/palettes";

// Utilities - time
import { TimeFormat } from "./utils/time/formatting";
import { TimePeriod } from "./utils/time/periods";
import { TimeRound } from "./utils/time/rounding";
import { Instance } from "./file/instance";
import { ThermalGroup } from "./hierarchy/ThermalGroup";
import { ThermalManager, ThermalManagerOptions } from "./hierarchy/ThermalManager";
import { ThermalRegistry, ThermalRegistryOptions } from "./hierarchy/ThermalRegistry";
import { ThermalFileFailure } from "./loading/workers/ThermalFileFailure";
import { ThermalFileReader } from "./loading/workers/ThermalFileReader";
import { AbstractFileResult } from "./loading/workers/AbstractFileResult";
import { DropinElementListener } from "./loading/workers/dropin/DropinElementManager";
import { supportedFileTypes, supportedFileTypesInputProperty } from "./loading/workers/parsers";
import { ParsedTimelineFrame } from "./loading/workers/parsers/structure";
import { CallbacksManager } from "./properties/callbacksManager";
import { playbackSpeed, PlaybackSpeeds } from "./properties/time/playback/TimelineDrive";
import { getPool } from "./utils/pool";

import { ThermalMinmaxOrUndefined } from "./properties/scale/abstractMinmaxProperty";
import { ThermalRangeOrUndefined } from "./properties/scale/RangeDriver";
import { ThermalCursorPositionOrUndefined } from "./properties/cursor/CursorPositionDrive";
import { AnalysisDataStateValue } from "./properties/analysis/data/AnalysisDataState";
import { AbstractAreaAnalysis } from "./properties/analysis/analysis/internals/area/AbstractAreaAnalysis";
import { AnalysisGraph } from "./properties/analysis/data/graphs/AnalysisGraph";
import { availableAnalysisColors, SlotNumber, SlotUnion } from "./properties/analysis/analysis/storage/AnalysisLayersStorage";
import { ThermalTool } from "./properties/analysis/tool/ToolDrive";
import { InspectTool } from "./properties/analysis/tool/internals/InspectTool";
import { AbstractTool } from "./properties/analysis/tool/internals/AbstractTool";
import { EditTool } from "./properties/analysis/tool/internals/EditTool";
import { AbstractAnalysis } from "./properties/analysis/analysis/internals/AbstractAnalysis";
import { AddEllipsisTool } from "./properties/analysis/analysis/internals/area/ellipsis/AddEllipsisTool";
import { AddRectangleTool } from "./properties/analysis/analysis/internals/area/rectangle/AddRectangleTool";
import { EllipsisAnalysis } from "./properties/analysis/analysis/internals/area/ellipsis/EllipsisAnalysis";
import { CornerPoint } from "./properties/analysis/analysis/internals/area/CornerPoint";
import { PointAnalysis } from "./properties/analysis/analysis/internals/point/PointAnalysis";
import { RectangleAnalysis } from "./properties/analysis/analysis/internals/area/rectangle/RectangleAnalysis";
import { PaletteId } from "./properties/scale/PaletteDrive";
import { AbstractAddTool } from "./properties/analysis/analysis/internals/AbstractAddTool";

import { Batch } from "./loading/batch/Batch";

import { version } from "../package.json";

console.info(version, "@labir/core");


export {

    Batch,

    // Analysis
    AbstractAnalysis, AbstractFileResult, AbstractAddTool,
    // Analysis
    AbstractTool, AddEllipsisTool, AddRectangleTool, CallbacksManager,
    // Points
    CornerPoint, DropinElementListener, EditTool, EllipsisAnalysis,
    // General utilities
    getPool,
    // Palette
    WHITE_HOT as GRAYSCALE, InspectTool,
    // File
    Instance, IRON,
    JET,
    playbackSpeed, PointAnalysis, RectangleAnalysis, supportedFileTypes, ThermalFileFailure, ThermalFileReader,
    // Group
    ThermalGroup,
    // Manager
    ThermalManager,
    ThermalPalettes,
    // Core datatypes

    // Registry
    ThermalRegistry,

    // Utils - Time
    TimeFormat, TimePeriod, TimeRound,


    AbstractAreaAnalysis,
    AnalysisGraph,
    supportedFileTypesInputProperty,
    availableAnalysisColors,


};

export type {
    SlotUnion,
    SlotNumber,
    AnalysisDataStateValue,
    ThermalRegistryOptions, ThermalTool,
    ThermalRangeOrUndefined,
    ThermalPaletteType,
    ThermalManagerOptions, ThermalMinmaxOrUndefined,
    ThermalCursorPositionOrUndefined,
    PlaybackSpeeds,
    PaletteId, ParsedTimelineFrame,
    AvailableThermalPalettes,
}









