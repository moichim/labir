import * as _labir_core from '@labir/core';
import { ThermalRegistry, AbstractFile, ThermalPaletteType, ThermalRangeOrUndefined, ThermalManager, ThermalManagerOptions, ThermalGroup, ThermalRegistryOptions, ThermalCursorPositionOrUndefined, ThermalMinmaxOrUndefined } from '@labir/core';
import React$1, { MouseEvent, ChangeEventHandler } from 'react';
import * as react_dropzone from 'react-dropzone';

type ThermalDropinProps = {
    registry: ThermalRegistry;
    groupId: string;
};
/** @deprecated Should implement the hook individually! */
declare const ThermalDropin: React$1.FC<ThermalDropinProps>;

declare const useThermalDropin: (registry: ThermalRegistry, groupId: string) => {
    group: _labir_core.ThermalGroup;
    instances: {
        value: _labir_core.AbstractFile[];
    };
    dropzone: react_dropzone.DropzoneState;
};

declare enum Orientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

type RegistryHistogramProps = {
    orientation?: Orientation;
    registry: ThermalRegistry;
    sizeInPx?: number;
    borderColor?: React$1.CSSProperties["borderColor"];
    borderWidthInPx?: React$1.CSSProperties["borderWidth"];
    barBackground?: React$1.CSSProperties["backgroundColor"];
    background?: React$1.CSSProperties["backgroundColor"];
};
declare const ThermalRegistryHistogram: React$1.FC<RegistryHistogramProps>;

declare const useHistogramResolutionInput: (registry: ThermalRegistry) => {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    internal: number;
};

type ThermalInstanceEventHandler = (listenerLayerEvent: MouseEvent<HTMLDivElement>, instance: AbstractFile) => void;
type ThermalInstanceProps = React$1.PropsWithChildren & {
    instance: AbstractFile;
    onMouseEnter?: ThermalInstanceEventHandler;
    onClick?: ThermalInstanceEventHandler;
    onMouseLeave?: ThermalInstanceEventHandler;
    onMouseMove?: ThermalInstanceEventHandler;
    style?: React$1.CSSProperties;
    className?: string;
};
/**
 * Displays an instance
 *
 * Creates the DOM inside which the instance shall be rendered.
 */
declare const ThermalInstance: React$1.FC<ThermalInstanceProps>;

declare const useOpacityInput: (registry: ThermalRegistry) => {
    onChange: ChangeEventHandler<HTMLInputElement>;
    opacity: {
        value: number;
        set: (value: number) => number;
    };
};

/** Display a palette gradient and its name for the purpose of buttons & dropdowns */
declare const PaletteGgradientDisplay: React$1.FC<ThermalPaletteType & {
    style?: React$1.CSSProperties;
}>;

type RangePropsExposed = {
    registry: ThermalRegistry;
    step: number;
    isLocked?: boolean;
    rangeOverride?: ThermalRangeOrUndefined;
    orientation?: Orientation;
    useHistogram?: boolean;
    trackSizeInPx?: number;
    trackBg?: React$1.CSSProperties["backgroundColor"];
    ticksLineColor?: React$1.CSSProperties["backgroundColor"];
    ticksLabelColor?: React$1.CSSProperties["color"];
    handleBG?: React$1.CSSProperties["backgroundColor"];
    handleColor?: React$1.CSSProperties["color"];
    histogramSizeInPx?: number;
    histogramBackground?: React$1.CSSProperties["backgroundColor"];
    histogramBorderColor?: React$1.CSSProperties["borderColor"];
    histogramBorderWidthInPx?: number;
    histogramBarBackground?: React$1.CSSProperties["backgroundColor"];
    /** @deprecated preferrably do not use classes */
    histogramClass?: string;
    /** @deprecated preferrably do not use classes */
    histogramBarClass?: string;
    /** @deprecated preferrably do not use classes */
    trackClass?: string;
    /** @deprecated preferrably do not use classes */
    containerClass?: string;
};
type RangeHeadlessInnerProps = RangePropsExposed;
type ThermalRangeProps = RangeHeadlessInnerProps & {
    renderContainer?: React$1.FC<React$1.PropsWithChildren>;
    renderSkeleton?: React$1.FC;
};
declare const ThermalRegistryRange: React$1.FC<ThermalRangeProps>;

/**
 * A functionality of the button that sets the registry range to automatic based on current histogram
 */
declare const useRangeButtonAuto: (registry: ThermalRegistry) => {
    onClick: () => void;
};

declare const useRangeButtonFull: (registry: ThermalRegistry) => {
    onClick: () => void;
};

type ThermalContextProps = React$1.PropsWithChildren & {
    options?: ThermalManagerOptions;
    /** Provide an external instance of the manager. */
    externalManagerInstance?: ThermalManager;
};
/** Everything must run inside a global context which stores an `ThermalManager` instance */
declare const ThermalProvider: React$1.FC<ThermalContextProps>;
/** Get the global `ThermalManager` instance from the context. */
declare const useThermalContext: () => ThermalManager;

/** Creates and stores a thermal object!s ID for the purpose of listeners */
declare const useThermalObjectPurpose: (object: ThermalRegistry | ThermalGroup | AbstractFile | ThermalManager, purpose: string, individual?: boolean | undefined) => string;

/**
 * Creates and stores a registry instance.
 *
 * Does not remove the instance on unmount. To destroy the instance, call the manager's method `removeRegistry`
*/
declare const useThermalRegistry: (registryId: string, options?: ThermalRegistryOptions) => _labir_core.ThermalRegistry;

declare const useThermalGroupCursorPositionDrive: (group: ThermalGroup, purpose: string) => {
    value: ThermalCursorPositionOrUndefined;
    setCursorPosition: (position: ThermalCursorPositionOrUndefined) => void;
    hover: boolean;
};

declare const useThermalRegistryOpacityDrive: (registry: ThermalRegistry, purpose: string) => {
    value: number;
    set: (value: number) => number;
};

declare const useThermalManagerPaletteDrive: (purpose: string) => {
    value: string | number;
    palette: ThermalPaletteType;
    set: (key: string | number) => void;
    availablePalettes: {
        [index: string]: ThermalPaletteType;
    };
};

declare const useThermalRegistryRangeDrive: (registry: ThermalRegistry, purpose: string) => {
    value: ThermalRangeOrUndefined;
    set: (value: ThermalRangeOrUndefined) => ThermalRangeOrUndefined;
};

declare const useThermalGroupInstancesState: (group: ThermalGroup, purpose: string) => {
    value: AbstractFile[];
};

declare const useThermalRegistryGroupsState: (registry: ThermalRegistry, purpose: string) => {
    value: ThermalGroup[];
    addOrGetGroup: (groupId: string, name?: string | undefined, description?: string | undefined) => ThermalGroup;
    removeAllGroups: () => void;
    removeGroup: (groupId: string) => void;
};

declare const useThermalGroupMinmaxState: (group: ThermalGroup, purpose: string) => {
    value: ThermalMinmaxOrUndefined;
};

type ThermalHistogramStatisticsEntry = {
    from: number;
    to: number;
    percentage: number;
    count: number;
    height: number;
};
declare const useThermalRegistryHistogramState: (registry: ThermalRegistry, purpose: string) => {
    value: ThermalHistogramStatisticsEntry[];
    setResolution: (value: number) => void;
    recalculate: () => {
        from: number;
        to: number;
        percentage: number;
        count: number;
        height: number;
    }[];
    resolution: number;
};

declare const useThermalRegistryLoadingState: (registry: ThermalRegistry, purpose: string) => {
    value: boolean;
};

declare const useThermalRegistryMinmaxState: (registry: ThermalRegistry, purpose: string) => {
    value: ThermalMinmaxOrUndefined;
};

/**
 * Shorthand hook that loads files in a group
 */
declare const useFilesInGroup: (urls: string[], registryId: string, groupId: string) => {
    registry: _labir_core.ThermalRegistry;
    group: _labir_core.ThermalGroup;
    instances: {
        value: _labir_core.AbstractFile[];
    };
};

/**
 * Shorthand hook that takes care of an isolated single file registry.
 * Creates:
 * - a registry named after the URL + UUID
 * - one default group inside it
 * - extracts the instance once it is ready
 * Upon unmount and upon URL change, remove the entire registry
 */
declare const useSingleFileRegistry: (thermalUrl: string, visibleUrl?: string) => {
    registry: _labir_core.ThermalRegistry;
    group: _labir_core.ThermalGroup;
    instance: AbstractFile | undefined;
};

export { Orientation, PaletteGgradientDisplay, ThermalDropin, ThermalInstance, ThermalProvider, ThermalRegistryHistogram, ThermalRegistryRange, useFilesInGroup, useHistogramResolutionInput, useOpacityInput, useRangeButtonAuto, useRangeButtonFull, useSingleFileRegistry, useThermalContext, useThermalDropin, useThermalGroupCursorPositionDrive, useThermalGroupInstancesState, useThermalGroupMinmaxState, useThermalManagerPaletteDrive, useThermalObjectPurpose, useThermalRegistry, useThermalRegistryGroupsState, useThermalRegistryHistogramState, useThermalRegistryLoadingState, useThermalRegistryMinmaxState, useThermalRegistryOpacityDrive, useThermalRegistryRangeDrive };
