var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/buttons/ThermalRangeAutoButton.tsx
import { useRangeButtonAuto } from "@labir/react-bridge";
import React3 from "react";

// src/components/ui/thermalButton.tsx
import { Button } from "@headlessui/react";
import React2, { forwardRef } from "react";

// src/theme/Skin.ts
var _Skin = class _Skin {
  static key(key) {
    return `--${_Skin.prefix}-${key}`;
  }
  static value(key) {
    return `var( ${_Skin.key(key)} )`;
  }
  static colorKey(color, tone = 500) {
    return `--${_Skin.prefix}-${color}-${tone}`;
  }
  static colorValue(color, tone = 500) {
    return _Skin.value(`${color}-${tone}`);
  }
  static breakpointValue(bp) {
    return _Skin.value(`bp-${bp}`);
  }
  static gapValue(aspect) {
    if (aspect === void 0)
      return _Skin.value("gap");
    return `calc( ${_Skin.value("gap")} * ${aspect} )`;
  }
};
_Skin.prefix = "lrc";
var Skin = _Skin;

// src/context/CssContext.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useInsertionEffect,
  useMemo,
  useRef
} from "react";

// package.json
var package_default = {
  name: "@labir/emotion",
  version: "1.2.5",
  description: "An UI for @labir/react-bridge based on @emotion/react",
  main: "index.js",
  module: "dist/index.mjs",
  types: "dist/index.d.ts",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
    vite: "vite",
    build: "tsup src/index.ts --format cjs,esm --dts --tsconfig tsconfig.lib.json",
    lint: "eslint src"
  },
  author: "Jan J\xE1chim <jachim5@gmail.com>",
  license: "ISC",
  repository: {
    type: "git",
    url: "https://github.com/moichim/labir"
  },
  dependencies: {
    "@headlessui/react": "^2.0.4",
    "@labir/core": "workspace:*",
    "@labir/react-bridge": "workspace:*",
    classnames: "^2.5.1",
    react: "^18.3.1",
    "react-code-blocks": "^0.1.6",
    "react-dom": "^18.3.1",
    "usehooks-ts": "^3.1.0",
    uuid: "^9.0.1"
  },
  devDependencies: {
    "@eslint/js": "^9.3.0",
    "@types/node": "^20.12.12",
    "@types/react": "^18.3.2",
    "@types/react-dom": "^18.3.0",
    "@types/uuid": "^9.0.8",
    "@vitejs/plugin-react": "^4.3.0",
    eslint: "^8.57.0",
    tsup: "^8.0.2",
    typescript: "^5.4.5",
    "typescript-eslint": "^7.10.0",
    vite: "^5.2.11"
  }
};

// src/theme/Variables.ts
var Variables = class {
  constructor() {
    this.primary = {
      50: "#f3f8f9",
      100: "#dbf1fa",
      200: "#b1e1f4",
      300: "#7dc2e3",
      400: "#469fcd",
      500: "#347eb6",
      600: "#2c649d",
      700: "#254b7c",
      800: "#1b3358",
      900: "#101f3a"
    };
    this.secondary = {
      "50": "#fbfbf7",
      100: "#f9f1d9",
      200: "#f1dbae",
      300: "#ddb579",
      400: "#c6894a",
      500: "#a9672b",
      600: "#8b4c1b",
      700: "#693917",
      800: "#472711",
      900: "#2c170c"
    };
    this.gray = {
      50: "#f9f9f8",
      100: "#f0f0f1",
      200: "#dddde0",
      300: "#b9babe",
      400: "#8f9295",
      500: "#717071",
      600: "#5b5555",
      700: "#464040",
      800: "#302b2d",
      900: "#1d1b1d"
    };
    this.success = {
      50: "#f4f7f2",
      100: "#e5f0db",
      200: "#c2e7ae",
      300: "#88cb78",
      400: "#3fab47",
      500: "#2a9026",
      600: "#237a1a",
      700: "#1f5d17",
      800: "#173f14",
      900: "#102610"
    };
    this.danger = {
      "50": "#fcfcfa",
      100: "#f9f2ed",
      200: "#f3d7d9",
      300: "#e4adb2",
      400: "#d77e86",
      500: "#c25960",
      600: "#a53e43",
      700: "#7d2e31",
      800: "#561f21",
      900: "#321313"
    };
    // Breakpoints
    this.breakpoints = {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1450
    };
    // Gaps
    this.gap = {
      xs: "15px",
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "22px"
    };
    // Font sizes
    this.fontSize = {
      xs: "15px",
      sm: "15px",
      md: "15px",
      lg: "15px",
      xl: "15px"
    };
    this.fontStyles = {};
  }
  /** Get get variables definition of one palette */
  getColorVariables(color, inverse = false) {
    const slot = this[color];
    if (inverse === false) {
      return Object.fromEntries(Object.entries(slot).map(([tone, value]) => {
        return [Skin.key(`${color}-${tone}`), value];
      }));
    }
    const items = {};
    items[Skin.key(`${color}-50`)] = slot["900"];
    items[Skin.key(`${color}-100`)] = slot["800"];
    items[Skin.key(`${color}-200`)] = slot["700"];
    items[Skin.key(`${color}-300`)] = slot["600"];
    items[Skin.key(`${color}-400`)] = slot["500"];
    items[Skin.key(`${color}-500`)] = slot["400"];
    items[Skin.key(`${color}-600`)] = slot["300"];
    items[Skin.key(`${color}-700`)] = slot["200"];
    items[Skin.key(`${color}-800`)] = slot["100"];
    items[Skin.key(`${color}-900`)] = slot["50"];
    return items;
  }
  /** Get variables of all colors */
  getColorsVariables(inverse = false) {
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.getColorVariables("primary", inverse)), this.getColorVariables("secondary", inverse)), this.getColorVariables("gray", inverse)), this.getColorVariables("success", inverse)), this.getColorVariables("danger", inverse));
  }
  getFontVariables() {
    return {
      [Skin.key("font-size-xs")]: this.fontSize.xs,
      [Skin.key("font-size-sm")]: this.fontSize.sm,
      [Skin.key("font-size-md")]: this.fontSize.md,
      [Skin.key("font-size-lg")]: this.fontSize.lg,
      [Skin.key("font-size-xl")]: this.fontSize.xl
    };
  }
  getGapVariables() {
    return {
      [Skin.key("gap-xs")]: this.gap.xs,
      [Skin.key("gap-sm")]: this.gap.sm,
      [Skin.key("gap-md")]: this.gap.md,
      [Skin.key("gap-lg")]: this.gap.lg,
      [Skin.key("gap-xl")]: this.gap.xl
    };
  }
  getBreakpointsVariables() {
    return {
      [Skin.key("bp-xs")]: `${this.breakpoints.xs}px`,
      [Skin.key("bp-sm")]: `${this.breakpoints.sm}px`,
      [Skin.key("bp-md")]: `${this.breakpoints.md}px`,
      [Skin.key("bp-lg")]: `${this.breakpoints.lg}px`,
      [Skin.key("bp-xl")]: `${this.breakpoints.xl}px`
    };
  }
  /** Dump index of variables into a string */
  static printCss(styles) {
    return Object.entries(styles).map(([property, value]) => `${property}:${value};`).join("\n");
  }
};

// src/context/CssContext.tsx
var useCssInternal = (appRoot = void 0, prefix = "lrc") => {
  const elementsInHead = useRef({});
  const elementsInRoot = useRef({});
  const head = useMemo(() => document.head, []);
  const root = useMemo(() => {
    return appRoot !== void 0 ? appRoot : document.head;
  }, [appRoot]);
  const getId = useCallback(
    (key) => `${prefix}__${package_default.version}__${key}`,
    [prefix]
  );
  const styleElementFactory = useCallback(
    (key, style) => {
      const element = document.createElement("style");
      element.id = getId(key);
      element.innerHTML = style;
      return element;
    },
    [getId]
  );
  const styleExists = useCallback(
    (key) => {
      return key in elementsInRoot.current;
    },
    [elementsInRoot]
  );
  const getExistingStyle = useCallback(
    (key) => {
      if (styleExists(key)) {
        return elementsInRoot.current[key];
      }
      return void 0;
    },
    [elementsInRoot, styleExists]
  );
  const addHeadCss = useCallback(
    (key, css) => {
      if (key in elementsInHead.current) {
        return;
      }
      const element = styleElementFactory(key, css);
      elementsInHead.current[key] = element;
      head.appendChild(element);
    },
    [head]
  );
  const addCss = useCallback(
    (key, style) => {
      if (styleExists(key)) {
        return;
      }
      const element = styleElementFactory(key, style);
      elementsInRoot.current[key] = element;
      root.appendChild(element);
    },
    [styleExists, styleElementFactory, elementsInRoot, root]
  );
  const removeCss = useCallback(
    (key) => {
      const existing = getExistingStyle(key);
      if (existing !== void 0) {
      }
    },
    [getExistingStyle, elementsInRoot, root]
  );
  return {
    addCss,
    removeCss,
    addHeadCss
  };
};
var cssContextDefaults = {
  addCss: () => {
  },
  removeCss: () => {
  },
  addHeadCss: () => {
  }
};
var CssContext = createContext(cssContextDefaults);
var CssContextProvider = (_a) => {
  var props = __objRest(_a, []);
  const context = useCssInternal(props.appRoot);
  useInsertionEffect(() => {
    const variables = new Variables();
    context.addHeadCss(
      "baseStyles",
      `
            :root {

                ${Variables.printCss(variables.getColorsVariables())}
                ${Variables.printCss(variables.getFontVariables())}
                ${Variables.printCss(variables.getGapVariables())}
                ${Variables.printCss(variables.getBreakpointsVariables())}

                ${Skin.key("gap")}: ${Skin.value("gap-xs")};
                ${Skin.key("font-size")}: ${Skin.value("font-size-xs")};

            }
            
        `
    );
    context.addCss(
      "implementationStyles",
      `
    
      .lrc-light {
        ${Variables.printCss(variables.getColorsVariables())}
      }
      .lrc-dark {
          ${Variables.printCss(variables.getColorsVariables(true))}
      }

      .lrc-app__root {

          @media ( min-width: ${variables.breakpoints.sm}px ) {
              ${Skin.key("gap")}: ${Skin.value("gap-sm")};
              ${Skin.key("font-size")}: ${Skin.value("font-size-sm")};
          }
          @media ( min-width: ${variables.breakpoints.md}px ) {
              ${Skin.key("gap")}: ${Skin.value("gap-md")};
              ${Skin.key("font-size")}: ${Skin.value("font-size-md")};
          }
          @media ( min-width: ${variables.breakpoints.lg}px ) {
              ${Skin.key("gap")}: ${Skin.value("gap-lg")};
              ${Skin.key("font-size")}: ${Skin.value("font-size-lg")};
          }
          @media ( min-width: ${variables.breakpoints.xl}px ) {
              ${Skin.key("gap")}: ${Skin.value("gap-xl")};
              ${Skin.key("font-size")}: ${Skin.value("font-size-xl")};
          }

          font-size: ${Skin.value("font-size")};
          ${Skin.key("font-size")}: ${Skin.value("font-size-xs")};
          font-family: sans-serif;
      }
    
    `
    );
  }, []);
  return /* @__PURE__ */ React.createElement(CssContext.Provider, { value: context }, /* @__PURE__ */ React.createElement("div", { className: "lrc-app__root" }, props.children));
};
var useCss = (key, css) => {
  const context = useContext(CssContext);
  useInsertionEffect(() => {
    context.addCss(key, css);
    return () => {
      context.removeCss(key);
    };
  }, []);
};
var useHeadCss = (key, css) => {
  const context = useContext(CssContext);
  useInsertionEffect(() => {
    context.addHeadCss(key, css);
    return () => {
    };
  }, []);
};

// src/components/ui/thermalButton.tsx
import classNames from "classnames";
var ThermalButton = forwardRef((_a, ref) => {
  var _b = _a, {
    variant = "gray"
  } = _b, props = __objRest(_b, [
    "variant"
  ]);
  useCss("thermalUiButton", `
    
        .lrc__thermal-ui__button {
            position: relative;
            background: ${Skin.colorValue(variant, 200)};
            border: 1px solid ${Skin.colorValue(variant, 300)};
            padding: ${Skin.gapValue(0.3)} ${Skin.gapValue(0.5)};
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 200)};

            transition: all .2s ease-in-out;

            &:hover {
                background: ${Skin.colorValue(variant, 300)};
                border-color: ${Skin.colorValue(variant, 500)};
            }
        }

        .lrc-dark .lrc__thermal-ui__button {
            color: white;
            box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 50)};
        }

    `);
  return /* @__PURE__ */ React2.createElement(Button, __spreadProps(__spreadValues({ ref }, props), { className: classNames("lrc__thermal-ui__button") }), props.children);
});

// src/components/buttons/ThermalRangeAutoButton.tsx
var ThermalRangeAutoButton = (_a) => {
  var _b = _a, { registry } = _b, props = __objRest(_b, ["registry"]);
  const { onClick } = useRangeButtonAuto(registry);
  return /* @__PURE__ */ React3.createElement(ThermalButton, __spreadValues({ onClick }, props), "Automatick\xFD teplotn\xED rozsah");
};

// src/components/buttons/ThermalRangeFullButton.tsx
import { useRangeButtonFull } from "@labir/react-bridge";
import React4 from "react";
var ThermalRangeFullButton = (_a) => {
  var _b = _a, {
    registry
  } = _b, props = __objRest(_b, [
    "registry"
  ]);
  const { onClick } = useRangeButtonFull(registry);
  return /* @__PURE__ */ React4.createElement(ThermalButton, __spreadValues({ onClick }, props), "Pln\xFD teplotn\xED rozsah");
};

// src/components/dropdowns/DownloadDropdown.tsx
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React5, { useMemo as useMemo2 } from "react";
var DownloadDropdown = (props) => {
  const css = useMemo2(
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
  box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 50)};
}

`,
    []
  );
  useCss("downloadDropdown", css);
  useHeadCss("downloadDropdown", css);
  const items = useMemo2(() => {
    const links = [
      {
        href: props.instance.url,
        text: "St\xE1hnout LRC soubor"
      }
    ];
    return links;
  }, [props.instance]);
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(Menu, null, /* @__PURE__ */ React5.createElement(MenuButton, { as: ThermalButton }, /* @__PURE__ */ React5.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React5.createElement("span", null, props.instance.url, " "), /* @__PURE__ */ React5.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "size-6",
      style: { width: "1em" }
    },
    /* @__PURE__ */ React5.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      }
    )
  ))), /* @__PURE__ */ React5.createElement(
    MenuItems,
    {
      anchor: {
        to: "bottom",
        gap: "5px",
        offset: "5px",
        padding: "5px"
      },
      portal: false,
      as: "nav",
      style: {
        background: "red"
      },
      className: "lrc__downloadDropdown__items lrc-dark lrc-app__root"
    },
    items.map((item) => /* @__PURE__ */ React5.createElement(
      MenuItem,
      {
        key: item.text,
        as: "a",
        href: item.href,
        className: "lrc__downloadDropdown__item"
      },
      item.text
    ))
  )));
};

// src/components/dropdowns/PaletteDropdown.tsx
import {
  Menu as Menu2,
  MenuButton as MenuButton2,
  MenuItem as MenuItem2,
  MenuItems as MenuItems2
} from "@headlessui/react";
import {
  PaletteItem,
  useThermalManagerPaletteDrive
} from "@labir/react-bridge";
import React6, { useMemo as useMemo3 } from "react";
import { v4 as uuidv4 } from "uuid";
var PaletteDropdown = () => {
  const palette = useThermalManagerPaletteDrive(uuidv4());
  const css = useMemo3(() => `
    
  .lrc__paletteDropdown__items {
      background: ${Skin.colorValue("gray", 100)};
      padding: ${Skin.gapValue(0.25)};
      box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 200)};
      border: 1px solid ${Skin.colorValue("gray", 300)};
      border-radius: 5px;
  }

  .lrc__paletteDropdown__item {
      font-size: ${Skin.value("font-size")};
      padding: ${Skin.gapValue(0.5)} ${Skin.gapValue(0.3)};
      font-family: sans-serif;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
          background: ${Skin.colorValue("gray", 200)};
      }
  }

  .lrc-dark .lrc__paletteDropdown__item {
    color: white;
    box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 50)};
  }

`, []);
  useCss(
    "paletteDropdown",
    css
  );
  useHeadCss("paletteDropdown", css);
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Menu2, null, /* @__PURE__ */ React6.createElement(MenuButton2, { as: ThermalButton }, /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(PaletteItem, __spreadValues({}, palette.palette)))), /* @__PURE__ */ React6.createElement(
    MenuItems2,
    {
      anchor: {
        to: "bottom",
        gap: "5px",
        offset: "0px",
        padding: "5px"
      },
      portal: false,
      as: "nav",
      style: {
        background: "red"
      },
      className: "lrc__paletteDropdown__items lrc-dark lrc-app__root"
    },
    Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ React6.createElement(
      MenuItem2,
      {
        key,
        as: "div",
        onClick: () => palette.set(key),
        className: "lrc__paletteDropdown__item"
      },
      /* @__PURE__ */ React6.createElement(PaletteItem, __spreadValues({}, item))
    ))
  )));
};

// src/components/inputs/ThermalHistogramResolutionInput.tsx
import { useHistogramResolutionInput } from "@labir/react-bridge";
import React8 from "react";

// src/components/ui/thermalInput.tsx
import { Input } from "@headlessui/react";
import React7 from "react";
import classNames2 from "classnames";
var ThermalInput = (_a) => {
  var _b = _a, {
    variant = "primary",
    className
  } = _b, props = __objRest(_b, [
    "variant",
    "className"
  ]);
  useCss("thermalUiInput", `
    .lrc__thermal-ui__input {
      border-radius: 5px;
      padding: ${Skin.gapValue(0.3)} ${Skin.gapValue(0.5)};

      &[type=range] {
        padding: 0;
        accent-color: ${Skin.colorValue(variant, 500)};
        padding-top: ${Skin.gapValue(0.5)};
      }
    }
  `);
  return /* @__PURE__ */ React7.createElement(Input, __spreadProps(__spreadValues({}, props), { className: classNames2(className, "lrc__thermal-ui__input") }));
};

// src/components/inputs/ThermalHistogramResolutionInput.tsx
var ThermalHistogramResolutionInput = (_a) => {
  var _b = _a, {
    registry,
    type = "number"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const { onChange, internal, onBlur } = useHistogramResolutionInput(registry);
  useCss("button", `
    .button {
      background: red;
      padding: 50px;
    }
  `);
  return /* @__PURE__ */ React8.createElement(
    ThermalInput,
    __spreadValues({
      onChange,
      onBlur,
      value: internal,
      min: 0,
      max: 200,
      step: 1,
      type
    }, props)
  );
};

// src/components/inputs/ThermalOpacityInput.tsx
import { useOpacityInput } from "@labir/react-bridge";
import React9 from "react";
var ThermalOpacityInput = (_a) => {
  var _b = _a, {
    registry,
    type = "number"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const { onChange, opacity } = useOpacityInput(registry);
  return /* @__PURE__ */ React9.createElement(
    ThermalInput,
    __spreadValues({
      onChange,
      value: opacity.value,
      min: 0,
      max: 1,
      step: 0.01,
      type
    }, props)
  );
};

// src/components/ui/ThermalModal.tsx
import {
  Dialog,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import React10, { useState } from "react";
var ThermalModal = (props) => {
  const [open, setOpen] = useState(false);
  const Button2 = props.buttonComponent;
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(Button2, { onClick: () => setOpen(true) }, props.buttonContent), /* @__PURE__ */ React10.createElement(
    Dialog,
    {
      open,
      onClose: () => setOpen(false),
      static: true,
      className: "lrc-dark lrc-app__root"
    },
    /* @__PURE__ */ React10.createElement(
      "div",
      {
        style: {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          // background: "red",
          backdropFilter: "blur(10px)",
          top: 0,
          left: 0,
          zIndex: 9999,
          display: open ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif"
        }
      },
      /* @__PURE__ */ React10.createElement(
        "div",
        {
          style: {
            maxWidth: "800px",
            background: Skin.colorValue("gray", 100),
            padding: Skin.gapValue(),
            borderColor: Skin.colorValue("gray", 200),
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: `5px 5px 20px ${Skin.colorValue("gray", 50)}`,
            borderRadius: 10,
            color: "white"
          }
        },
        /* @__PURE__ */ React10.createElement(DialogPanel, null, /* @__PURE__ */ React10.createElement(DialogTitle, { style: { marginTop: 0 } }, props.title), /* @__PURE__ */ React10.createElement("div", { style: { opacity: 0.8 } }, props.content), /* @__PURE__ */ React10.createElement(ThermalButton, { onClick: () => setOpen(false), style: { float: "right" } }, "Zav\u0159\xEDt"))
      )
    )
  ));
};

// src/components/modals/InstanceEmbedModal.tsx
import React11 from "react";
var ThermalEmbedModal = (props) => {
  return /* @__PURE__ */ React11.createElement(
    ThermalModal,
    {
      title: "Sd\xEDlejte termogram",
      buttonComponent: ThermalButton,
      buttonContent: "Sd\xEDlet",
      content: /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement("p", null, "Do va\u0161eho webu vlo\u017E\xEDte tento termogram pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du:"), /* @__PURE__ */ React11.createElement("pre", null, `<script type="module" src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.js"></script>
<thermal-file url="${props.instance.url}" />`))
    }
  );
};

// src/components/modals/InstanceInfoModal.tsx
import React12 from "react";
var ThermalInfoModal = (props) => {
  return /* @__PURE__ */ React12.createElement(
    ThermalModal,
    {
      title: "Informace o termogramu",
      buttonComponent: ThermalButton,
      buttonContent: "Informace o souboru",
      content: /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement("p", null, "N\xE1zev souboru: ", props.instance.url, " "), /* @__PURE__ */ React12.createElement("p", null, "Rozli\u0161en\xED: ", props.instance.width, " x ", props.instance.height, " px"), /* @__PURE__ */ React12.createElement("p", null, "Minim\xE1ln\xED teplota: ", props.instance.min, " \xB0C"), /* @__PURE__ */ React12.createElement("p", null, "Maxim\xE1ln\xED teplota: ", props.instance.max, " \xB0C"), /* @__PURE__ */ React12.createElement("p", null, "Signatura: ", props.instance.signature), /* @__PURE__ */ React12.createElement("p", null, "Jednotky: ", props.instance.unit === 2 ? "Stupn\u011B celsia" : "kelviny"), /* @__PURE__ */ React12.createElement("p", null))
    }
  );
};

// src/components/ui/Bar.tsx
import React13 from "react";
var Bar = (props) => {
  useCss("thermalBar", `
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${Skin.gapValue(0.3)};
        background: ${Skin.colorValue("gray", 100)};
        border: 1px solid ${Skin.colorValue("gray", 300)};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
        box-shadow: 3px 3px 10px ${Skin.colorValue("gray", 200)};
    }

    .lrc__bar__name {
        font-weight: bold;
        padding-left: 10px;
    }

    .lrc__bar__secondRow {
        width: 100%;
    }
   
   `);
  return /* @__PURE__ */ React13.createElement("div", { className: "lrc__bar" }, props.name && /* @__PURE__ */ React13.createElement("div", { className: "lrc__bar__name" }, props.name), props.children, props.secondRow && /* @__PURE__ */ React13.createElement("div", { className: "lrc__bar__secondRow" }, props.secondRow), props.mainContent && /* @__PURE__ */ React13.createElement("div", { className: "lrc__bar__secondRow" }, props.mainContent));
};
export {
  Bar,
  CssContextProvider,
  DownloadDropdown,
  PaletteDropdown,
  Skin,
  ThermalEmbedModal,
  ThermalHistogramResolutionInput,
  ThermalInfoModal,
  ThermalOpacityInput,
  ThermalRangeAutoButton,
  ThermalRangeFullButton,
  useCss,
  useHeadCss
};
