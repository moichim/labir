export { ThermalInstance, ThermalProvider, ThermalRegistryHistogram, ThermalRegistryRange, useSingleFileRegistry, useThermalRegistry } from '@labir/react-bridge';
import { ThermalRegistry, ThermalPaletteType } from '@labir/core';
import { InputProps, ButtonProps, DropdownProps, DropdownItemProps, DropdownMenuProps } from '@nextui-org/react';

type OpacityInputProps$1 = InputProps & {
    registry: ThermalRegistry;
};
/**
 * An input controlling opacity of a ThermalRegistry
 * @package `@labir/tailwind`
 */
declare const OpacityInput: React.FC<OpacityInputProps$1>;

type PaletteDropdownProps = {
    triggerButtonProps?: ButtonProps;
    dropdownProps?: DropdownProps;
    dropdownItemProps?: DropdownItemProps;
    dropdownMenuProps?: DropdownMenuProps<{
        key: string;
    } & ThermalPaletteType>;
};
/**
 * A palette dropdown
 * @package `@labir/tailwind`
 */
declare const PaletteDropdown: React.FC<PaletteDropdownProps>;

type OpacityInputProps = InputProps & {
    registry: ThermalRegistry;
};
/**
 * An input controlling opacity of a ThermalRegistry
 * @package `@labir/tailwind`
 */
declare const HistogramResolutionInput: React.FC<OpacityInputProps>;

export { HistogramResolutionInput, OpacityInput, PaletteDropdown };
