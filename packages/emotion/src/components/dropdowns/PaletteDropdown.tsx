"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import {
  PaletteItem,
  useThermalManagerPaletteDrive,
} from "@labir/react-bridge";
import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCss, useHeadCss } from "../../context/CssContext";
import { Skin } from "../../theme/Skin";
import { ThermalButton } from "../ui/thermalButton";


export const PaletteDropdown: React.FC = () => {
  const palette = useThermalManagerPaletteDrive(uuidv4());

  const css = useMemo( () => `
    
  .lrc__paletteDropdown__items {
      background: ${Skin.colorValue("gray", 100)};
      padding: ${Skin.gapValue(0.25)};
      box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 200)};
      border: 1px solid ${Skin.colorValue("gray", 300)};
      border-radius: 5px;
  }

  .lrc__paletteDropdown__item {
      font-size: ${Skin.value("font-size")};
      padding: ${Skin.gapValue(.5)} ${Skin.gapValue(.3)};
      font-family: sans-serif;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
          background: ${Skin.colorValue("gray", 200)};
      }
  }

  .lrc-dark .lrc__paletteDropdown__item {
    color: white;
    box-shadow: 3px 3px 10px ${Skin.colorValue( "gray", 50 )};
  }

`, [] );

  useCss(
    "paletteDropdown",
    css
  );

  useHeadCss( "paletteDropdown", css );

  return (
    <>
      <Menu>
        <MenuButton as={ThermalButton}>
          <>
            <PaletteItem {...palette.palette} />
          </>
        </MenuButton>
        <MenuItems
          anchor={{
            to: "bottom",
            gap: "5px",
            offset: "0px",
            padding: "5px",
          }}
          portal={false}
          as="nav"
          style={{
            background: "red",
          }}
          className={"lrc__paletteDropdown__items lrc-dark lrc-app__root"}
        >
          {Object.entries(palette.availablePalettes).map(([key, item]) => (
            <MenuItem
              key={key}
              as="div"
              onClick={() => palette.set(key)}
              className="lrc__paletteDropdown__item"
            >
              <PaletteItem {...item} />
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
};
