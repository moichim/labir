import { ThermalRegistry, ThermalFileInstance } from '@labir/core';
import React, { FC, PropsWithChildren } from 'react';
import { ButtonProps, InputProps } from '@headlessui/react';

type PaletteColor = "primary" | "secondary" | "gray" | "success" | "danger";

type ThermalButtonProps = ButtonProps & {
    variant?: PaletteColor;
};

type ThermalRangeAutoButtonProps$1 = ThermalButtonProps & {
    registry: ThermalRegistry;
};
declare const ThermalRangeAutoButton: FC<ThermalRangeAutoButtonProps$1>;

type ThermalRangeAutoButtonProps = ThermalButtonProps & {
    registry: ThermalRegistry;
};
declare const ThermalRangeFullButton: FC<ThermalRangeAutoButtonProps>;

declare const DownloadDropdown: React.FC<{
    instance: ThermalFileInstance;
}>;

declare const PaletteDropdown: React.FC;

type ThermalInputProps = InputProps & {
    variant?: PaletteColor;
};

type ThermalHistogramResolutionInputProps = ThermalInputProps & {
    registry: ThermalRegistry;
};
declare const ThermalHistogramResolutionInput: FC<ThermalHistogramResolutionInputProps>;

type ThermalOpacityInputProps = ThermalInputProps & {
    registry: ThermalRegistry;
};
declare const ThermalOpacityInput: FC<ThermalOpacityInputProps>;

type BarProps = PropsWithChildren & {
    secondRow?: React.ReactNode;
    name?: React.ReactNode;
};
declare const Bar: FC<BarProps>;

declare const CssContextProvider: React.FC<React.PropsWithChildren & {
    appRoot?: Element;
}>;

export { Bar, CssContextProvider, DownloadDropdown, PaletteDropdown, ThermalHistogramResolutionInput, ThermalOpacityInput, ThermalRangeAutoButton, ThermalRangeFullButton };
