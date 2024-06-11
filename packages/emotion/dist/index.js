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
import { jsx as jsx2 } from "@emotion/react";

// src/components/ui/thermalButton.tsx
import { jsx, css } from "@emotion/react";
import { Button } from "@headlessui/react";

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

// src/components/ui/thermalButton.tsx
var ThermalButton = (_a) => {
  var _b = _a, {
    variant = "primary"
  } = _b, props = __objRest(_b, [
    "variant"
  ]);
  const styles = css`

        cursor: pointer;
    
        background: ${Skin.colorValue(variant, 300)};

        border: 0;
        padding: .5rem 1rem;
        
        border-radius: 5px;

        transition: all .1s ease-in-out;

        &:hover {
            background: ${Skin.colorValue(variant, 300)};
            box-shadow: 0px 0px 5px ${Skin.colorValue("primary", 500)};
        }
    
    `;
  return /* @__PURE__ */ jsx(Button, __spreadValues({ css: styles }, props), props.children);
};

// src/components/buttons/ThermalRangeAutoButton.tsx
var ThermalRangeAutoButton = (_a) => {
  var _b = _a, { registry } = _b, props = __objRest(_b, ["registry"]);
  const { onClick } = useRangeButtonAuto(registry);
  return /* @__PURE__ */ jsx2(ThermalButton, __spreadValues({ onClick }, props), "Automatick\xFD teplotn\xED rozsah");
};

// src/components/buttons/ThermalRangeFullButton.tsx
import { jsx as jsx3 } from "@emotion/react";
import { useRangeButtonFull } from "@labir/react-bridge";
var ThermalRangeFullButton = (_a) => {
  var _b = _a, {
    registry
  } = _b, props = __objRest(_b, [
    "registry"
  ]);
  const { onClick } = useRangeButtonFull(registry);
  return /* @__PURE__ */ jsx3(ThermalButton, __spreadValues({ onClick }, props), "Pln\xFD teplotn\xED rozsah");
};

// src/components/inputs/ThermalHistogramResolutionInput.tsx
import { jsx as jsx5 } from "@emotion/react";
import { useHistogramResolutionInput } from "@labir/react-bridge";

// src/components/ui/thermalInput.tsx
import { jsx as jsx4, css as css2 } from "@emotion/react";
import { Input } from "@headlessui/react";
var ThermalInput = (_a) => {
  var _b = _a, {
    variant = "primary"
  } = _b, props = __objRest(_b, [
    "variant"
  ]);
  const style = css2`
    
        border: 1px solid ${Skin.colorValue("gray", 300)};

        padding: .5rem 1rem;
        border-radius: 5px;
        display: inline-block;

        transition: all .15s ease-in-out;

        &:focus {
            border-color: ${Skin.colorValue(variant, 500)};
            outline: 0;
        }

        &[type=range] {
            accent-color: ${Skin.colorValue(variant, 400)};
        }
    
    `;
  return /* @__PURE__ */ jsx4(Input, __spreadProps(__spreadValues({}, props), { css: style }));
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
  return /* @__PURE__ */ jsx5(
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
import { jsx as jsx6 } from "@emotion/react";
import { useOpacityInput as useOpacityInput2 } from "@labir/react-bridge";
var ThermalOpacityInput = (_a) => {
  var _b = _a, {
    registry,
    type = "number"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const { onChange, opacity } = useOpacityInput2(registry);
  return /* @__PURE__ */ jsx6(
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

// src/context/ThermalEmotionProvider.tsx
import { useMemo } from "react";
import { jsx as jsx7, Global as Global2, ClassNames as ClassNames2 } from "@emotion/react";

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
    // Line height
    this.lineHeight = {};
    this.fontStyles = {};
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
import { v4 as uuid } from "uuid";
var ThermalEmotionProvider = (props) => {
  const variables = useMemo(() => new Variables(), []);
  const ID = useMemo(() => uuid(), []);
  const appClass = useMemo(() => {
    return `lrc-app-${ID}`;
  }, [ID]);
  const globalStyles = useMemo(() => {
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
  return /* @__PURE__ */ jsx7(React.Fragment, null, /* @__PURE__ */ jsx7(Global2, { styles: globalStyles }), /* @__PURE__ */ jsx7(ClassNames2, null, ({ css: css3, cx }) => /* @__PURE__ */ jsx7(
    "div",
    {
      className: cx(
        appClass,
        "some-class",
        css3`

              h1 {
                font-size: 28px;
              }
            `
      )
    },
    props.children
  )));
};
export {
  ThermalEmotionProvider,
  ThermalHistogramResolutionInput,
  ThermalOpacityInput,
  ThermalRangeAutoButton,
  ThermalRangeFullButton
};
