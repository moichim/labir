import { ThermalDropin } from "./components/dropin/ThermalDropin";
import { useThermalDropin } from "./components/dropin/useThermalDropin";
import { ThermalRegistryHistogram } from "./components/histogram/thermalRegistryHistogram";
import { useHistogramResolutionInput } from "./components/histogramResolutionInput/useHistogramResolutionInput";
import { ThermalInstance } from "./components/instance/thermalInstance";
import { useOpacityInput } from "./components/opacity/useOpacityInput";
import { PaletteDropdownHeadless } from "./components/palette/PaletteDropdownHeadless";
import { ThermalRegistryRange } from "./components/range/ThermalRegistryRange";
import { useRangeButtonAuto } from "./components/rangeButtonAuto.tsx/useRangeButtonAuto";
import { useRangeButtonFull } from "./components/rangeButtonFull/useRangeButtonFull";
import { ThermalProvider, useThermalContext } from "./context/thermalManagerContext";
import { useThermalObjectPurpose } from "./context/useThermalObjectPurpose";
import { useThermalRegistry } from "./context/useThermalRegistry";
import { useThermalGroupCursorPositionDrive } from "./properties/drives/useThermalGroupCursorPositionDrive";
import { useThermalRegistryOpacityDrive } from "./properties/drives/useThermalRegistryOpacityDrive";
import { useThermalManagerPaletteDrive } from "./properties/drives/useThermalRegistryPaletteDrive";
import { useThermalRegistryRangeDrive } from "./properties/drives/useThermalRegistryRangeDrive";
import { useThermalGroupInstancesState } from "./properties/lists/useThermalGroupInstancesState";
import { useThermalRegistryGroupsState } from "./properties/lists/useThermalRegistryGroupsState";
import { useThermalGroupMinmaxState } from "./properties/states/useThermalGroupMinmaxState";
import { useThermalRegistryHistogramState } from "./properties/states/useThermalRegistryHistogramState";
import { useThermalRegistryLoadingState } from "./properties/states/useThermalRegistryLoadingState";
import { useThermalRegistryMinmaxState } from "./properties/states/useThermalRegistryMinmaxState";
import { useSingleFileRegistry } from "./shorthands/useSingleFileRegistry";
import { Orientation } from "./utilities/orientation";



export {

    // The global context & hooks
    ThermalProvider,
    useThermalContext,
    useThermalObjectPurpose,
    useThermalRegistry,

    // Component hooks
    useRangeButtonAuto,
    useRangeButtonFull,
    useOpacityInput,
    useHistogramResolutionInput,
    useThermalDropin,

    // ThermalRange component
    ThermalRegistryRange,

    // Histogram component
    ThermalRegistryHistogram,
    Orientation,

    // Instance component
    ThermalInstance,



    ThermalDropin,

    // Deprecated components
    PaletteDropdownHeadless,


    // Shorthand hooks
    useSingleFileRegistry,


    // Properties hooks
    useThermalGroupCursorPositionDrive,
    useThermalGroupInstancesState,
    useThermalGroupMinmaxState,
    useThermalManagerPaletteDrive,
    useThermalRegistryGroupsState,
    useThermalRegistryHistogramState,
    useThermalRegistryLoadingState,
    useThermalRegistryMinmaxState,
    useThermalRegistryOpacityDrive,
    useThermalRegistryRangeDrive
};

