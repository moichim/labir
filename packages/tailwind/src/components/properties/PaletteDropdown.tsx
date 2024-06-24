import { ThermalPaletteType } from "@labir/core";
import {
  PaletteGgradientDisplay,
  useThermalContext,
  useThermalManagerPaletteDrive,
  useThermalObjectPurpose,
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
} from "@nextui-org/react";
import { useMemo } from "react";

type PaletteDropdownProps = {
  triggerButtonProps?: ButtonProps;
  dropdownProps?: DropdownProps;
  dropdownItemProps?: DropdownItemProps;
  dropdownMenuProps?: DropdownMenuProps<{
    key: string
  } & ThermalPaletteType>;
};

/** 
 * A palette dropdown
 * @package `@labir/tailwind`
 */
export const PaletteDropdown: React.FC<PaletteDropdownProps> = ({
  triggerButtonProps = {},
  dropdownProps = {},
  dropdownItemProps = {},
  dropdownMenuProps,
  // ...props
}) => {
  const manager = useThermalContext();

  const purpose = useThermalObjectPurpose(manager, "PaletteDropdown", true);

  const context = useThermalManagerPaletteDrive(purpose);

  const items = useMemo(
    () =>
      Object.entries(context.availablePalettes).map(([key, palette]) => ({
        ...palette,
        key: key,
      })),
    [context.availablePalettes]
  );

  // const { items, ...wtf } = dropdownMenuProps;

  return (
    <Dropdown {...dropdownProps}>
      <DropdownTrigger {...triggerButtonProps} as={Button}>
        <PaletteGgradientDisplay {...context.palette} />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Thermal palette selection"
        {...dropdownMenuProps}
        items={items}
      >
        {(item) => {
          return (
            <DropdownItem key={item.key} {...dropdownItemProps}>
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
