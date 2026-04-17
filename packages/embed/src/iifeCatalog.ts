import { ManagerExportPanel } from "./controls/manager/ManagerExportPanel";
import { ManagerGraphSmoothSwitch } from "./controls/manager/ManagerGraphSmoothSwitch";
import { ManagerImageSmoothSwitch } from "./controls/manager/ManagerImageSmoothSwitch";
import { ManagerPaletteButtons } from "./controls/manager/ManagerPaletteButtons";
import { ManagerPaletteDropdown } from "./controls/manager/ManagerPaletteDropdown";
import { ManagerToolBar } from "./controls/manager/ManagerToolsBar";
import { FileMirrorElement } from "./hierarchy/providers/FileMirror";
import { FileCopyElement } from "./hierarchy/providers/FileCopy";
import { FileProviderElement } from "./hierarchy/providers/FileProvider";
import { GroupProviderElement } from "./hierarchy/providers/GroupProvider";
import { ManagerProviderElement } from "./hierarchy/providers/ManagerProvider";
import { RegistryProviderElement } from "./hierarchy/providers/RegistryProvider";
import { ThermalAppElement } from "./ui/App";
import { ThermalBarElement } from "./ui/Bar";
import { ThermalBtnElement } from "./ui/Btn";
import { ThermalDialogElement } from "./ui/Dialog";
import { ThermalDropdownElement } from "./ui/Dropdown";
import { ThermalDropinElement } from "./ui/Dropin";
import { ThermalExpandableElement } from "./ui/Expandable";
import { ThermalFieldElement } from "./ui/Field";
import { ThermalIconElement } from "./ui/Icon";
import { ThermalLoadingElement } from "./ui/Loading";
import { ThermalRadioElement } from "./ui/Radio";
import { ThermalSlotElement } from "./ui/Slot";
import { ThermalSpinnerElement } from "./ui/Spinner";
import { ThermalTipElement } from "./ui/Tip";
import { AatAppElement } from "./apps/AustralianApparentTemperature";
import { DropinAppElement } from "./apps/ThermalDropinApp";
import { ThermalFileAppElement } from "./apps/ThermalFileApp";
import { ThermalGroupAppElement } from "./apps/ThermalGroupApp";

/**
 * List of the UI components
 */
export const elementsUi = {
    "thermal-app": ThermalAppElement,
    "thermal-bar": ThermalBarElement,
    "thermal-btn": ThermalBtnElement,
    "thermal-dialog": ThermalDialogElement,
    "thermal-dropdown": ThermalDropdownElement,
    "thermal-dropin": ThermalDropinElement,
    "thermal-expandable": ThermalExpandableElement,
    "thermal-field": ThermalFieldElement,
    "thermal-icon": ThermalIconElement,
    "thermal-loading": ThermalLoadingElement,
    "thermal-radio": ThermalRadioElement,
    "thermal-slot": ThermalSlotElement,
    "thermal-spinner": ThermalSpinnerElement,
    "thermal-tip": ThermalTipElement
} as const;

/**
 * List of provider components
 */
export const elementsProviders = {
    "file-provider": FileProviderElement,
    "group-provider": GroupProviderElement,
    "registry-provider": RegistryProviderElement,
    "manager-provider": ManagerProviderElement,

    "file-copy": FileCopyElement,

    "file-mirror": FileMirrorElement,

} as const;


const elementsManagerControls = {
    "manager-image-smooth-switch": ManagerImageSmoothSwitch,
    "manager-graph-smooth-switch": ManagerGraphSmoothSwitch,
    "manager-palette-dropdown": ManagerPaletteDropdown,
    "manager-palette-buttons": ManagerPaletteButtons,
    "manager-tool-bar": ManagerToolBar,
    /** @deprecated This sort of export should never be used. Please, do export thermal images only through the LIT components instead of the `@labirthermal/core` export. */
    "manager-export-panel": ManagerExportPanel
} as const;

const elementsRegistryControls = {

} as const;



const elementsApplications = {
    "apparent-temperature-aat": AatAppElement,
    "thermal-dropin-app": DropinAppElement,
    "thermal-file-app": ThermalFileAppElement,
    "thermal-group-app": ThermalGroupAppElement
} as const;


export const elementsAll = {
    ...elementsUi,
    ...elementsProviders,
    ...elementsManagerControls,
    ...elementsRegistryControls,
    ...elementsApplications
} as const;