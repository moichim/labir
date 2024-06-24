"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useThermalManagerPaletteDrive } from "../../properties/drives/useThermalRegistryPaletteDrive";
import { PaletteGgradientDisplay } from "./PaletteGradientDisplay";

/**
 * @deprecated Should not be used. Implement it in final UI instead
 */
export const PaletteDropdownHeadless: React.FC = () => {
  const palette = useThermalManagerPaletteDrive(uuidv4());

  return (
    <Menu>
      <MenuButton>
        <>
          <PaletteGgradientDisplay {...palette.palette} />
        </>
      </MenuButton>
      <MenuItems unmount={true}>
          {Object.entries(palette.availablePalettes).map(([key, item]) => (
            <MenuItem key={key} as={Button} onClick={() => {
              palette.set(key);
            }}>
                <PaletteGgradientDisplay
                  {...item}
                />
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
};
