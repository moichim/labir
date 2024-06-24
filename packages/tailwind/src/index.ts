import { ThermalProvider, ThermalInstance, ThermalRegistryHistogram, ThermalRegistryRange, useSingleFileRegistry, useThermalRegistry } from "@labir/react-bridge";

import { OpacityInput } from "./components/properties/OpacityInput";
import { PaletteDropdown } from "./components/properties/PaletteDropdown";
import { HistogramResolutionInput } from "./components/properties/HistogramResolutionInput";


export {

    // Reexport core stuff that is necessary to go along with this package
    ThermalProvider,
    ThermalInstance,
    ThermalRegistryHistogram,
    ThermalRegistryRange,
    useSingleFileRegistry,
    useThermalRegistry,

    OpacityInput,
    HistogramResolutionInput,
    PaletteDropdown
    

}