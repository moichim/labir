"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuProps,
} from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { useThermalManagerPaletteDrive } from "../../properties/drives/useThermalRegistryPaletteDrive";
import React from "react";
import { PaletteMenu } from "./default/PaletteMenu";
import { PaletteMenuButton } from "./default/PaletteMenuButton";
import { PaletteItem } from "./PaletteItem";
import { PaletteMenuItem, PaletteMenuProps } from "./default/PaletteMenuItem";

type PaletteDropdownHeadless = {
  renderItem?: React.FC<PaletteMenuProps>;
};

export const PaletteDropdownHeadless: React.FC<PaletteDropdownHeadless> = ({
  renderItem = PaletteMenuItem
}) => {
  const palette = useThermalManagerPaletteDrive(uuidv4());

  const Item = renderItem;

  return (
    <Menu as={PaletteMenu}>
      <MenuButton as={PaletteMenuButton}>
        <>
          <PaletteItem {...palette.palette} />
        </>
      </MenuButton>
      <MenuItems as="p" unmount={true}>
          {Object.entries(palette.availablePalettes).map(([key, item]) => (
            <MenuItem key={key}>
              {(itemProps) => (
                <Item
                  palette={item}
                  {...itemProps}
                  onClick={() => {
                    palette.set(key);
                  }}
                  active={palette.value === key}
                />
              )}
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
};
