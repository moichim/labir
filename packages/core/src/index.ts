// Core structure

// Data types
import { ThermalMinmaxOrUndefined } from "./properties/abstractMinmaxProperty";
import { ThermalCursorPositionOrUndefined } from "./properties/drives/CursorPositionDrive";
import { ThermalRangeOrUndefined } from "./properties/drives/RangeDriver";

// Palette
import { GRAYSCALE, IRON, JET, ThermalPalettes, ThermalPaletteType } from "./file/palettes";
import { PaletteId } from "./properties/drives/PaletteDrive";

// Utilities - time
import { TimeFormat } from "./utils/time/formatting";
import { TimePeriod } from "./utils/time/periods";
import { TimeRound } from "./utils/time/rounding";

import { AvailableThermalPalettes } from "./file/palettes";

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
import { AbstractAnalysis } from "./properties/analysis/internals/AbstractAnalysis";
import { AddEllipsisTool } from "./properties/analysis/internals/area/ellipsis/AddEllipsisTool";
import { EllipsisAnalysis } from "./properties/analysis/internals/area/ellipsis/EllipsisAnalysis";
import { AddRectangleTool } from "./properties/analysis/internals/area/rectangle/AddRectangleTool";
import { CornerPoint } from "./properties/analysis/internals/area/CornerPoint";
import { RectangleAnalysis } from "./properties/analysis/internals/area/rectangle/RectangleAnalysis";
import { PointAnalysis } from "./properties/analysis/internals/point/PointAnalysis";
import { CallbacksManager } from "./properties/callbacksManager";
import { playbackSpeed, PlaybackSpeeds } from "./properties/time/playback/TimelineDrive";
import { AbstractTool } from "./properties/tool/internals/AbstractTool";
import { EditTool } from "./properties/tool/internals/EditTool";
import { InspectTool } from "./properties/tool/internals/InspectTool";
import { ThermalTool } from "./properties/tool/ToolDrive";
import { getPool } from "./utils/pool";

import { AnalysisDataStateValue } from "./properties/analysisData/AnalysisDataState";
import { AbstractAreaAnalysis } from "./properties/analysis/internals/area/AbstractAreaAnalysis";
import { AnalysisGraph } from "./properties/analysisData/graphs/AnalysisGraph";
import { availableAnalysisColors } from "./properties/analysis/internals/storage/AnalysisLayersStorage";
import {SlotUnion, SlotNumber} from "./properties/analysis/internals/storage/AnalysisLayersStorage";

export {

    // Analysis
    AbstractAnalysis, AbstractFileResult,
    // Analysis
    AbstractTool, AddEllipsisTool, AddRectangleTool, AvailableThermalPalettes, CallbacksManager,
    // Points
    CornerPoint, DropinElementListener, EditTool, EllipsisAnalysis,
    // General utilities
    getPool,
    // Palette
    GRAYSCALE, InspectTool,
    // File
    Instance, IRON,
    JET,
    PaletteId, ParsedTimelineFrame, playbackSpeed, PlaybackSpeeds, PointAnalysis, RectangleAnalysis, supportedFileTypes, ThermalCursorPositionOrUndefined, ThermalFileFailure, ThermalFileReader,
    // Group
    ThermalGroup,
    // Manager
    ThermalManager,
    ThermalManagerOptions, ThermalMinmaxOrUndefined, ThermalPalettes, ThermalPaletteType,
    // Core datatypes
    ThermalRangeOrUndefined,
    // Registry
    ThermalRegistry,
    ThermalRegistryOptions, ThermalTool,
    // Utils - Time
    TimeFormat, TimePeriod, TimeRound,

    AnalysisDataStateValue,
    AbstractAreaAnalysis,
    AnalysisGraph,
    supportedFileTypesInputProperty,
    availableAnalysisColors,
    SlotUnion,
    SlotNumber
    
};









