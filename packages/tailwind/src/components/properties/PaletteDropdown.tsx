"use client";

import { ThermalPaletteType } from "@labir/core";
import {
  PaletteGgradientDisplay,
  useThermalManagerPaletteDrive
} from "@labir/react-bridge";
import {
  Button,
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownItemProps,
  DropdownMenu,
  DropdownMenuProps,
  DropdownProps,
  DropdownTrigger,
} from "@heroui/react";
import { useMemo } from "react";

type PaletteDropdownProps = {
  triggerButtonProps?: ButtonProps;
  dropdownProps?: DropdownProps;
  dropdownItemProps?: DropdownItemProps;
  dropdownMenuProps?: DropdownMenuProps<
    {
      key: string;
    } & ThermalPaletteType
  >;
};

/**
 * A palette dropdown
 * @package `@labir/tailwind`
 */
export const PaletteDropdown: React.FC<PaletteDropdownProps> = ({
  triggerButtonProps = {
    variant: "bordered",
    color: "default"
  },
}) => {

  const context = useThermalManagerPaletteDrive("wtf");

  const items = useMemo(
    () =>
      Object.entries(context.availablePalettes).map(([key, palette]) => ({
        ...palette,
        key: key,
      })),
    [context.availablePalettes]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button {...triggerButtonProps} className="bg-brimary-500">
          <PaletteGgradientDisplay {...context.palette} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Thermal palette selection"
        items={items}
        onAction={(key) => {
          context.set( key )
        }}
      >
        {(item) => {
          return (
            <DropdownItem key={item.key} textValue={item.name}>
              <PaletteGgradientDisplay
                name={item.name}
                gradient={item.gradient}
                pixels={item.pixels}
              />
            </DropdownItem>
          );
        }}
      </DropdownMenu>
    </Dropdown>
  );
};
