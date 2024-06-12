import { ThermalRegistry } from '@labir/core';
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

type BarProps = PropsWithChildren & {};
declare const Bar: FC<BarProps>;

declare const CssContextProvider: React.FC<React.PropsWithChildren>;

export { Bar, CssContextProvider, ThermalHistogramResolutionInput, ThermalOpacityInput, ThermalRangeAutoButton, ThermalRangeFullButton };
