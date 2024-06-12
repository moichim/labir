import { ThermalRegistry } from '@labir/core';
import { FC, PropsWithChildren } from 'react';
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

declare const ThermalEmotionProvider: FC<PropsWithChildren>;

type BarProps = PropsWithChildren & {};
declare const Bar: FC<BarProps>;

export { Bar, ThermalEmotionProvider, ThermalHistogramResolutionInput, ThermalOpacityInput, ThermalRangeAutoButton, ThermalRangeFullButton };
