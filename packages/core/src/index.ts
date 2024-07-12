// Core structure
import { ThermalManager, ThermalManagerOptions } from "./manager/ThermalManager";
import { ThermalRegistry, ThermalRegistryOptions } from "./registry/ThermalRegistry";
import { ThermalGroup } from "./group/ThermalGroup";
import { ThermalFileSource } from "./file/ThermalFileSource";
import { ThermalFileRequest } from "./registry/utilities/ThermalRequest";

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

import { InstanceFetchCallback } from "./properties/lists/InstancesState"
import { AbstractFile } from "./file/IFileInstance";
import { ThermalFileInstance } from "./file/ThermalFileInstance";

import { Instance } from "./reload/instance";
import { FileReaderService } from "./reload/FileReaderService";
import { FileFailureService } from "./reload/errors/FileFailureService";
import pool from "./utils/time/pool";



export {

    pool,

    // Manager
    ThermalManager,
    ThermalManagerOptions,  

    // Registry
    ThermalRegistry,
    ThermalRegistryOptions, 
    ThermalFileRequest,
    InstanceFetchCallback,

    // Group
    ThermalGroup, 

    // File
    ThermalFileSource, 
    ThermalFileInstance,
    AbstractFile,
    Instance,
    FileFailureService,
    FileReaderService,

    
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
    TimeFormat, TimePeriod, TimeRound
};

