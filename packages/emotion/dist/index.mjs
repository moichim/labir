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
import React2 from "react";

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
  useRef
} from "react";

// package.json
var package_default = {
  name: "@labir/emotion",
  version: "1.2.3",
  description: "An UI for @labir/react-bridge based on @emotion/react",
  main: "index.js",
  module: "dist/index.mjs",
  types: "dist/index.d.ts",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
    vite: "vite",
    build: "tsup src/index.ts --format cjs,esm --dts --tsconfig tsconfig.lib.json"
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
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "22px"
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
var useCssInternal = (prefix = "lrc") => {
  const elements = useRef({});
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
      return key in elements.current;
    },
    [elements]
  );
  const getExistingStyle = useCallback(
    (key) => {
      if (styleExists(key)) {
        return elements.current[key];
      }
      return void 0;
    },
    [elements, styleExists]
  );
  const addCss = useCallback(
    (key, style) => {
      if (styleExists(key)) {
        return;
      }
      const element = styleElementFactory(key, style);
      elements.current[key] = element;
      document.head.appendChild(element);
    },
    [styleExists, styleElementFactory, elements]
  );
  const removeCss = useCallback(
    (key) => {
      const existing = getExistingStyle(key);
      if (existing !== void 0) {
        document.head.removeChild(existing);
        delete elements.current[key];
      }
    },
    [getExistingStyle, elements]
  );
  return {
    addCss,
    removeCss
  };
};
var cssContextDefaults = {
  addCss: () => {
  },
  removeCss: () => {
  }
};
var CssContext = createContext(cssContextDefaults);
var CssContextProvider = (_a) => {
  var props = __objRest(_a, []);
  const context = useCssInternal();
  useInsertionEffect(() => {
    const variables = new Variables();
    context.addCss(
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

// src/components/ui/thermalButton.tsx
import classNames from "classnames";
var ThermalButton = (_a) => {
  var _b = _a, {
    variant = "gray",
    className
  } = _b, props = __objRest(_b, [
    "variant",
    "className"
  ]);
  useCss("thermalUiButton", `
    
        .lrc__thermal-ui__button {
            background: ${Skin.colorValue(variant, 100)};
            border: 0;
            padding: ${Skin.gapValue(0.5)} ${Skin.gapValue(0.75)};
            cursor: pointer;

            &:hover {
                background: ${Skin.colorValue(variant, 300)};
            }
        }

    `);
  return /* @__PURE__ */ React2.createElement(Button, __spreadProps(__spreadValues({}, props), { className: classNames("lrc__thermal-ui__button") }), props.children);
};

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

// src/components/inputs/ThermalHistogramResolutionInput.tsx
import { useHistogramResolutionInput } from "@labir/react-bridge";
import React6 from "react";

// src/components/ui/thermalInput.tsx
import { Input } from "@headlessui/react";
import React5 from "react";
var ThermalInput = (_a) => {
  var _b = _a, {
    variant = "primary"
  } = _b, props = __objRest(_b, [
    "variant"
  ]);
  return /* @__PURE__ */ React5.createElement(Input, __spreadValues({}, props));
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
  return /* @__PURE__ */ React6.createElement(
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
import { useOpacityInput as useOpacityInput2 } from "@labir/react-bridge";
import React7 from "react";
var ThermalOpacityInput = (_a) => {
  var _b = _a, {
    registry,
    type = "number"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const { onChange, opacity } = useOpacityInput2(registry);
  useCss("button", `
    .button {
      background: yellow;
      padding: ${Skin.gapValue(0.5)};
      margin: ${Skin.gapValue()}
    }
  `);
  return /* @__PURE__ */ React7.createElement(
    ThermalInput,
    __spreadValues({
      className: "button",
      onChange,
      value: opacity.value,
      min: 0,
      max: 1,
      step: 0.01,
      type
    }, props)
  );
};

// src/components/ui/Bar.tsx
import React8 from "react";
var Bar = (props) => {
  return /* @__PURE__ */ React8.createElement("div", null, props.children);
};
export {
  Bar,
  CssContextProvider,
  ThermalHistogramResolutionInput,
  ThermalOpacityInput,
  ThermalRangeAutoButton,
  ThermalRangeFullButton
};
