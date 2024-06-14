import React, { FC, PropsWithChildren } from 'react';
import { ThermalRegistry, ThermalFileInstance } from '@labir/core';
import { ButtonProps, InputProps } from '@headlessui/react';

type ThermalFileComponentProps = {
    url: string;
};
declare const ThermalFileApp: React.FC<ThermalFileComponentProps>;

type ColorTone = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type ColorPalette = {
    [index in ColorTone]: CSSStyleDeclaration["color"];
};
type PaletteColor = "primary" | "secondary" | "gray" | "success" | "danger";
declare class Variables {
    primary: ColorPalette;
    secondary: ColorPalette;
    gray: ColorPalette;
    success: ColorPalette;
    danger: ColorPalette;
    breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    gap: {
        [index in keyof Variables["breakpoints"]]: CSSStyleDeclaration["paddingTop"];
    };
    fontSize: {
        [index in keyof Variables["breakpoints"]]: CSSStyleDeclaration["fontSize"];
    };
    fontStyles: {
        [index: string]: {
            fontSize?: number;
            lineHeight?: number;
            ThemeColor?: "primary" | "secondary" | "text" | "background";
            color?: CSSStyleDeclaration["color"];
            fontWeight?: CSSStyleDeclaration["fontWeight"];
        };
    };
    /** Get get variables definition of one palette */
    getColorVariables(color: PaletteColor, inverse?: undefined | boolean): {
        [k: string]: string;
    };
    /** Get variables of all colors */
    getColorsVariables(inverse?: boolean | undefined): {
        [x: string]: string;
    };
    getFontVariables(): {
        [x: string]: string;
    };
    getGapVariables(): {
        [x: string]: string;
    };
    getBreakpointsVariables(): {
        [x: string]: string;
    };
    /** Dump index of variables into a string */
    static printCss(styles: {
        [index: string]: string;
    }): string;
}

type ThermalButtonProps = ButtonProps & {
    variant?: PaletteColor;
};
declare const ThermalButton: FC<ThermalButtonProps>;

type ThermalRangeAutoButtonProps$1 = ThermalButtonProps & {
    registry: ThermalRegistry;
};
declare const ThermalRangeAutoButton: React.FC<ThermalRangeAutoButtonProps$1>;

type ThermalRangeAutoButtonProps = ThermalButtonProps & {
    registry: ThermalRegistry;
};
declare const ThermalRangeFullButton: React.FC<ThermalRangeAutoButtonProps>;

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
declare const ThermalHistogramResolutionInput: React.FC<ThermalHistogramResolutionInputProps>;

type ThermalOpacityInputProps = ThermalInputProps & {
    registry: ThermalRegistry;
};
declare const ThermalOpacityInput: React.FC<ThermalOpacityInputProps>;

type InstanceEmbedModalProps$1 = {
    instance: ThermalFileInstance;
};
declare const ThermalEmbedModal: React.FC<InstanceEmbedModalProps$1>;

type InstanceEmbedModalProps = {
    instance: ThermalFileInstance;
};
declare const ThermalInfoModal: React.FC<InstanceEmbedModalProps>;

type BarProps = PropsWithChildren & {
    secondRow?: React.ReactNode;
    mainContent?: React.ReactNode;
    name?: React.ReactNode;
};
declare const Bar: FC<BarProps>;

declare const CssContextProvider: React.FC<React.PropsWithChildren & {
    appRoot?: Element;
}>;
declare const useCss: (key: string, css: string) => void;
declare const useHeadCss: (key: string, css: string) => void;

declare class Skin {
    protected static readonly prefix = "lrc";
    static key(key: string): string;
    static value(key: string): string;
    static colorKey(color: PaletteColor, tone?: ColorTone): string;
    static colorValue(color: PaletteColor, tone?: ColorTone): string;
    static breakpointValue(bp: keyof Variables["breakpoints"]): string;
    static gapValue(aspect?: number): string;
}

export { Bar, CssContextProvider, DownloadDropdown, PaletteDropdown, Skin, ThermalButton, ThermalEmbedModal, ThermalFileApp, ThermalHistogramResolutionInput, ThermalInfoModal, ThermalOpacityInput, ThermalRangeAutoButton, ThermalRangeFullButton, useCss, useHeadCss };
