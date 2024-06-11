"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ThermalEmotionProvider: () => ThermalEmotionProvider
});
module.exports = __toCommonJS(src_exports);

// src/context/ThermalEmotionProvider.tsx
var import_react = __toESM(require("react"), 1);
var import_react2 = require("@emotion/react");

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
};
_Skin.prefix = "lrc";
var Skin = _Skin;

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
  }
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
  getColors(inverse = false) {
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.getColorVariables("primary", inverse)), this.getColorVariables("secondary", inverse)), this.getColorVariables("gray", inverse)), this.getColorVariables("success", inverse)), this.getColorVariables("danger", inverse));
  }
};

// src/context/ThermalEmotionProvider.tsx
var import_uuid = require("uuid");
var ThermalEmotionProvider = (props) => {
  const variables = (0, import_react.useMemo)(() => new Variables(), []);
  const ID = (0, import_react.useMemo)(() => (0, import_uuid.v4)(), []);
  const appClass = (0, import_react.useMemo)(() => {
    return `lrc-app-${ID}`;
  }, [ID]);
  const globalStyles = (0, import_react.useMemo)(() => {
    return {
      ":root": __spreadValues({}, variables.getColors(false)),
      ".lrc-light": __spreadValues({}, variables.getColors(false)),
      ".lrc-dark": __spreadValues({}, variables.getColors(true)),
      [`.${appClass}`]: {
        fontSize: "17px",
        fontFamily: "sans-serif"
      }
    };
  }, [variables]);
  return /* @__PURE__ */ (0, import_react2.jsx)(import_react.default.Fragment, null, /* @__PURE__ */ (0, import_react2.jsx)(import_react2.Global, { styles: globalStyles }), /* @__PURE__ */ (0, import_react2.jsx)(import_react2.ClassNames, null, ({ css, cx }) => /* @__PURE__ */ (0, import_react2.jsx)(
    "div",
    {
      className: cx(
        appClass,
        "some-class",
        css`

              h1 {
                font-size: 28px;
              }
            `
      )
    },
    props.children
  )));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThermalEmotionProvider
});
