import { InputProps, ButtonProps } from '@headlessui/react';
import * as _labir_core from '@labir/core';
import { ThermalRegistry, ThermalFileInstance, ThermalPaletteType, ThermalRangeOrUndefined, ThermalManager, ThermalManagerOptions, ThermalGroup, ThermalRegistryOptions, ThermalCursorPositionOrundefined, ThermalMinmaxOrUndefined } from '@labir/core';
import React, { MouseEvent } from 'react';

type HistogramResolutionInputHeadlessProps = InputProps & {
    registry: ThermalRegistry;
};
declare const HistogramResolutionInputHeadless: React.FC<HistogramResolutionInputHeadlessProps>;

type ThermalInstanceEventHandler = (listenerLayerEvent: MouseEvent<HTMLDivElement>, instance: ThermalFileInstance) => void;
type ThermalInstanceProps = React.PropsWithChildren & {
    instance: ThermalFileInstance;
    onMouseEnter?: ThermalInstanceEventHandler;
    onClick?: ThermalInstanceEventHandler;
    onMouseLeave?: ThermalInstanceEventHandler;
    onMouseMove?: ThermalInstanceEventHandler;
    style?: React.CSSProperties;
    className?: string;
};
/**
 * Displays an instance
 *
 * Creates the DOM inside which the instance shall be rendered.
 */
declare const ThermalInstance: React.FC<ThermalInstanceProps>;

type OpacityInputHeadlessProps = InputProps & {
    registry: ThermalRegistry;
};
declare const OpacityInputHeadless: React.FC<OpacityInputHeadlessProps>;

/** @jsx jsx */

type PaletteMenuProps = {
    onClick: () => void;
    focus: boolean;
    disabled: boolean;
    close: () => void;
    palette: ThermalPaletteType;
    active: boolean;
};

type PaletteDropdownHeadless = {
    renderItem?: React.FC<PaletteMenuProps>;
};
declare const PaletteDropdownHeadless: React.FC<PaletteDropdownHeadless>;

declare enum Orientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

type RangePropsExposed = {
    registry: ThermalRegistry;
    step: number;
    isLocked?: boolean;
    rangeOverride?: ThermalRangeOrUndefined;
    orientation?: Orientation;
    useHistogram?: boolean;
    trackSizeInPx?: number;
    trackBg?: React.CSSProperties["backgroundColor"];
    ticksLineColor?: React.CSSProperties["backgroundColor"];
    ticksLabelColor?: React.CSSProperties["color"];
    handleBG?: React.CSSProperties["backgroundColor"];
    handleColor?: React.CSSProperties["color"];
    histogramSizeInPx?: number;
    histogramBackground?: React.CSSProperties["backgroundColor"];
    histogramBorderColor?: React.CSSProperties["borderColor"];
    histogramBorderWidthInPx?: number;
    histogramBarBackground?: React.CSSProperties["backgroundColor"];
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
type RangePropsHeadless = RangeHeadlessInnerProps & {
    renderContainer?: React.FC<React.PropsWithChildren>;
    renderSkeleton?: React.FC;
};
declare const RangeHeadless: React.FC<RangePropsHeadless>;

type RangeButtonFullHeadlessProps$1 = ButtonProps & {
    registry: ThermalRegistry;
};
declare const RangeButtonAutoHeadless: React.FC<RangeButtonFullHeadlessProps$1>;

type RangeButtonFullHeadlessProps = ButtonProps & {
    registry: ThermalRegistry;
};
declare const RangeButtonFullHeadless: React.FC<RangeButtonFullHeadlessProps>;

type ThermalContextProps = React.PropsWithChildren & {
    options?: ThermalManagerOptions;
    /** Provide an external instance of the manager. */
    externalManagerInstance?: ThermalManager;
};
/** Everything must run inside a global context which stores an `ThermalManager` instance */
declare const ThermalProvider: React.FC<ThermalContextProps>;
/** Get the global `ThermalManager` instance from the context. */
declare const useThermalContext: () => ThermalManager;

/** Creates and stores a thermal object!s ID for the purpose of listeners */
declare const useThermalObjectPurpose: (object: ThermalRegistry | ThermalGroup | ThermalFileInstance, purpose: string, individual?: boolean | undefined) => string;

/**
 * Creates and stores a registry instance.
 *
 * Does not remove the instance on unmount. To destroy the instance, call the manager's method `removeRegistry`
*/
declare const useThermalRegistry: (registryId: string, options?: ThermalRegistryOptions) => _labir_core.ThermalRegistry;

declare const useThermalGroupCursorPositionDrive: (group: ThermalGroup, purpose: string) => {
    value: ThermalCursorPositionOrundefined;
    setCursorPosition: (position: ThermalCursorPositionOrundefined) => void;
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
    value: ThermalFileInstance[];
    instantiateSources: (sources: _labir_core.ThermalFileSource[]) => void;
    removeAllInstances: () => void;
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

export { HistogramResolutionInputHeadless, OpacityInputHeadless, Orientation, PaletteDropdownHeadless, RangeButtonAutoHeadless, RangeButtonFullHeadless, RangeHeadless, ThermalInstance, ThermalProvider, useThermalContext, useThermalGroupCursorPositionDrive, useThermalGroupInstancesState, useThermalGroupMinmaxState, useThermalManagerPaletteDrive, useThermalObjectPurpose, useThermalRegistry, useThermalRegistryGroupsState, useThermalRegistryHistogramState, useThermalRegistryLoadingState, useThermalRegistryMinmaxState, useThermalRegistryOpacityDrive, useThermalRegistryRangeDrive };
