// Core structure

// Data types

// Palette

// Utilities - time
import { Instance } from "./file/instance";
import { ThermalGroup } from "./hierarchy/ThermalGroup";
import { ThermalManager, ThermalManagerOptions } from "./hierarchy/ThermalManager";
import { ThermalRegistry, ThermalRegistryOptions } from "./hierarchy/ThermalRegistry";
import { AbstractFileResult } from "./loading/workers/AbstractFileResult";
import { DropinElementListener } from "./loading/workers/dropin/DropinElementManager";
import { supportedFileTypes, supportedFileTypesInputProperty } from "./loading/workers/parsers";
import { ParsedTimelineFrame } from "./loading/workers/parsers/structure";
import { ThermalFileFailure } from "./loading/workers/ThermalFileFailure";
import { ThermalFileReader } from "./loading/workers/ThermalFileReader";
import { CallbacksManager } from "./properties/callbacksManager";
import { playbackSpeed, PlaybackSpeeds } from "./properties/time/playback/TimelineDrive";
import { getPool } from "./utils/pool";
import { TimeFormat } from "./utils/time/formatting";
import { TimePeriod } from "./utils/time/periods";
import { TimeRound } from "./utils/time/rounding";

import { AbstractAddTool } from "./properties/analysis/analysis/internals/AbstractAddTool";
import { AbstractAnalysis } from "./properties/analysis/analysis/internals/AbstractAnalysis";
import { AbstractAreaAnalysis } from "./properties/analysis/analysis/internals/area/AbstractAreaAnalysis";
import { CornerPoint } from "./properties/analysis/analysis/internals/area/CornerPoint";
import { AddEllipsisTool } from "./properties/analysis/analysis/internals/area/ellipsis/AddEllipsisTool";
import { EllipsisAnalysis } from "./properties/analysis/analysis/internals/area/ellipsis/EllipsisAnalysis";
import { AddRectangleTool } from "./properties/analysis/analysis/internals/area/rectangle/AddRectangleTool";
import { RectangleAnalysis } from "./properties/analysis/analysis/internals/area/rectangle/RectangleAnalysis";
import { PointAnalysis } from "./properties/analysis/analysis/internals/point/PointAnalysis";
import { availableAnalysisColors, SlotNumber, SlotUnion } from "./properties/analysis/analysis/storage/AnalysisLayersStorage";
import { AnalysisDataStateValue } from "./properties/analysis/data/AnalysisDataState";
import { AnalysisGraph } from "./properties/analysis/data/graphs/AnalysisGraph";
import { AbstractTool } from "./properties/analysis/tool/internals/AbstractTool";
import { EditTool } from "./properties/analysis/tool/internals/EditTool";
import { InspectTool } from "./properties/analysis/tool/internals/InspectTool";
import { ThermalTool } from "./properties/analysis/tool/ToolDrive";
import { ThermalCursorPositionOrUndefined } from "./properties/cursor/CursorPositionDrive";
import { ThermalMinmaxOrUndefined } from "./properties/scale/abstractMinmaxProperty";
import { ThermalRangeOrUndefined } from "./properties/scale/RangeDriver";

import { Batch } from "./loading/batch/Batch";

import { version } from "../package.json";

console.info("@labirthermal/core", version);


export {
    AbstractAddTool,
    // Analysis
    AbstractAnalysis, AbstractAreaAnalysis, AbstractFileResult,
    // Analysis
    AbstractTool, AddEllipsisTool, AddRectangleTool, AnalysisGraph, availableAnalysisColors, Batch, CallbacksManager,
    // Points
    CornerPoint, DropinElementListener, EditTool, EllipsisAnalysis,
    // General utilities
    getPool, InspectTool,
    // File
    Instance,
    playbackSpeed, PointAnalysis, RectangleAnalysis, supportedFileTypes, supportedFileTypesInputProperty, ThermalFileFailure, ThermalFileReader,
    // Group
    ThermalGroup,
    // Manager
    ThermalManager,
    // Core datatypes
    // Registry
    ThermalRegistry,

    // Utils - Time
    TimeFormat, TimePeriod, TimeRound
};

// Palette related exports
export { ThermalPalettes } from "./properties/scale/palettes";
export type { AvailableThermalPalette, ThermalPaletteType } from "./properties/scale/palettes";


export type {
    AnalysisDataStateValue,
    /** Palette types */
    ParsedTimelineFrame, PlaybackSpeeds, SlotNumber, SlotUnion, ThermalCursorPositionOrUndefined, ThermalManagerOptions, ThermalMinmaxOrUndefined, ThermalRangeOrUndefined, ThermalRegistryOptions, ThermalTool
};









