"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ThermalFileInstance } from "@labir/core";
import React, { useMemo } from "react";
import { useCss, useHeadCss } from "../../context/CssContext";
import { Skin } from "../../theme/Skin";
import { ThermalButton } from "../ui/thermalButton";

export const DownloadDropdown: React.FC<{ instance: ThermalFileInstance }> = (
  props
) => {
  const css = useMemo(
    () => `
    
.lrc__downloadDropdown__items {
    background: ${Skin.colorValue("gray", 100)};
    padding: ${Skin.gapValue(0.25)};
    box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 200)};
    border: 1px solid ${Skin.colorValue("gray", 300)};
    border-radius: 5px;
    z-index: 9999;
}

.lrc__downloadDropdown__item {
    font-size: ${Skin.value("font-size")};
    padding: ${Skin.gapValue(0.5)} ${Skin.gapValue(0.7)};
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 5px;
    display: block;
    color: white;

    &:hover {
        background: ${Skin.colorValue("gray", 200)};
    }
}

.lrc-dark .lrc__paletteDropdown__item {
  color: white;
  box-shadow: 3px 3px 10px ${Skin.colorValue( "gray", 50 )};
}

`,
    []
  );

  useCss("downloadDropdown", css);

  useHeadCss("downloadDropdown", css);

  const items = useMemo(() => {
    const links = [
      {
        href: props.instance.url,
        text: "Stáhnout LRC soubor",
      },
    ];

    return links;
  }, [props.instance]);

  return (
    <>
      <Menu>
        <MenuButton as={ThermalButton}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>{props.instance.url} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ width: "1em" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </MenuButton>
        <MenuItems
          anchor={{
            to: "bottom",
            gap: "5px",
            offset: "5px",
            padding: "5px",
          }}
          portal={false}
          as="nav"
          style={{
            background: "red",
          }}
          className={"lrc__downloadDropdown__items lrc-dark lrc-app__root"}
        >
          {items.map((item) => (
            <MenuItem
              key={item.text}
              as="a"
              href={item.href}
              className="lrc__downloadDropdown__item"
            >
              {item.text}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
};
