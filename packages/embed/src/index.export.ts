// Shared utils
import { booleanConverter } from "./utils/converters/booleanConverter";
import { durationConverter } from "./utils/converters/durationConverter";
import icons from "./utils/icons";
export {
    booleanConverter,
    durationConverter,
    icons
};


// The necessary abstractions

export { AbstractThermalElement } from "./hierarchy/AbstractThermalElement";


// Contexts
export {
    fileContext,
    fileCurrentFrameContext,
    fileMsContext,
    filePlayingContext
} from "./hierarchy/providers/context/FileContexts";

export {
    groupContext
} from "./hierarchy/providers/context/GroupContext";

export {
    registryContext,
    registryHighlightContext,
    registryLoadingContext,
    registryMaxContext,
    registryMinContext,
    registryOpacityContext,
    registryRangeFromContext,
    registryRangeToContext,
    setRegistryHighlightContext
} from "./hierarchy/providers/context/RegistryContext";

export {
    languageContext,
    managerContext,
    managerSmoothContext,
    toolContext
} from "./hierarchy/providers/context/ManagerContext";


// The UI

export { ThermalAppElement } from "./ui/App";
export { ThermalBarElement } from "./ui/Bar";
export { ThermalBtnElement } from "./ui/Btn";
export type { BtnSizes, BtnVariants } from "./ui/Btn";
export { ThermalDialogElement } from "./ui/Dialog";
export { ThermalDropdownElement } from "./ui/Dropdown";
export { ThermalDropinElement } from "./ui/Dropin";
export { ThermalExpandableElement } from "./ui/Expandable";
export { ThermalFieldElement } from "./ui/Field";
export { ThermalIconElement } from "./ui/Icon";
export { ThermalLoadingElement } from "./ui/Loading";
export { ThermalRadioElement } from "./ui/Radio";
export { ThermalSlotElement } from "./ui/Slot";
export { ThermalSpinnerElement } from "./ui/Spinner";
export { ThermalTipElement } from "./ui/Tip";

// The providers abstractions

export { AbstractFileProvider } from "./hierarchy/abstraction/AbstractFileProvider";
export { AbstractGroupProvider } from "./hierarchy/abstraction/AbstractGroupProvider";
export { AbstractManagerProvider } from "./hierarchy/abstraction/AbstractManagerProvider";
export { AbstractRegistryProvider } from "./hierarchy/abstraction/AbstractRegistryProvider";

// The consumers abstraction

export { AbstractFileConsumer } from "./hierarchy/consumers/AbstractFileConsumer";
export { AbstractGroupConsumer } from "./hierarchy/consumers/AbstractGroupConsumer";
export { AbstractManagerConsumer } from "./hierarchy/consumers/AbstractManagerConsumer";
export { AbstractRegistryConsumer } from "./hierarchy/consumers/AbstractRegistryConsumer";

// Independent controls
export { AppInfoButton } from "./controls/independent/AppInfoButton";
export { DisplayPanel } from "./controls/independent/DisplayPanel";
export { ConfigDialog } from "./controls/independent/ConfigDialog";

// The providers elements

export { FileCopyElement } from "./hierarchy/providers/FileCopy";
export { FileMirrorElement } from "./hierarchy/providers/FileMirror";
export { FileProviderElement } from "./hierarchy/providers/FileProvider";
export { GroupProviderElement } from "./hierarchy/providers/GroupProvider";
export { ManagerProviderElement } from "./hierarchy/providers/ManagerProvider";
export { RegistryProviderElement } from "./hierarchy/providers/RegistryProvider";

// Manager controls

export { ManagerExportPanel } from "./controls/manager/ManagerExportPanel";
export { ManagerGraphSmoothSwitch } from "./controls/manager/ManagerGraphSmoothSwitch";
export { ManagerImageSmoothSwitch } from "./controls/manager/ManagerImageSmoothSwitch";
export { ManagerPaletteButtons } from "./controls/manager/ManagerPaletteButtons";
export { ManagerPaletteDropdown } from "./controls/manager/ManagerPaletteDropdown";
export { ManagerToolBar } from "./controls/manager/ManagerToolsBar";

// Registry controls

export { RegistryRangeForm } from "./controls/registry/RegistryRangeForm";
export { RegistryTicksBar } from "./controls/registry/RegistryTicksBar";
export { RegistryRangeSlider } from "./controls/registry/RegistryRangeSlider";
export { RegistrySetFullRangeElement } from "./controls/registry/RangeFullButton";
export { RegistrySetAutoRangeElement } from "./controls/registry/RangeAutoButton";
export { RegistryRangeDisplay } from "./controls/registry/RegistryRangeDisplay";
export { RegistryOpacitySlider } from "./controls/registry/RegistryOpacitySlider";

// Group controls

export { GroupChart } from "./controls/group/GroupChart";
export { GroupAnalysisSyncButton } from "./controls/group/GroupAnalysisSyncButton";
export { GroupDownloadDropdown } from "./controls/group/GroupDownloadDropdown";
export { GroupDownloadButtons } from "./controls/group/GroupDownloadButtons";
export { GroupDropin } from "./controls/group/GroupDropin";
export { GroupDropinInput } from "./controls/group/GroupDropinInput";
export { GroupRangePropagator } from "./controls/group/GroupRangePropagator";
export { GroupTimeline } from "./controls/group/GroupTimeline";
