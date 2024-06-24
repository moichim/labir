"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HistogramResolutionInput: () => HistogramResolutionInput,
  OpacityInput: () => OpacityInput,
  PaletteDropdown: () => PaletteDropdown,
  ThermalInstance: () => import_react_bridge4.ThermalInstance,
  ThermalProvider: () => import_react_bridge4.ThermalProvider,
  ThermalRegistryHistogram: () => import_react_bridge4.ThermalRegistryHistogram,
  ThermalRegistryRange: () => import_react_bridge4.ThermalRegistryRange,
  useSingleFileRegistry: () => import_react_bridge4.useSingleFileRegistry,
  useThermalRegistry: () => import_react_bridge4.useThermalRegistry
});
module.exports = __toCommonJS(src_exports);
var import_react_bridge4 = require("@labir/react-bridge");

// src/components/properties/OpacityInput.tsx
var import_react_bridge = require("@labir/react-bridge");
var import_react = require("@nextui-org/react");
var import_jsx_runtime = require("react/jsx-runtime");
var OpacityInput = (_a) => {
  var _b = _a, {
    registry,
    type = "range"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const opacity = (0, import_react_bridge.useOpacityInput)(registry);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Input,
    __spreadProps(__spreadValues({}, props), {
      value: opacity.opacity.toString(),
      type,
      onChange: opacity.onChange
    })
  );
};

// src/components/properties/PaletteDropdown.tsx
var import_react_bridge2 = require("@labir/react-bridge");
var import_react2 = require("@nextui-org/react");
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var PaletteDropdown = ({
  triggerButtonProps = {},
  dropdownProps = {},
  dropdownItemProps = {},
  dropdownMenuProps
  // ...props
}) => {
  const manager = (0, import_react_bridge2.useThermalContext)();
  const purpose = (0, import_react_bridge2.useThermalObjectPurpose)(manager, "PaletteDropdown", true);
  const context = (0, import_react_bridge2.useThermalManagerPaletteDrive)(purpose);
  const items = (0, import_react3.useMemo)(
    () => Object.entries(context.availablePalettes).map(([key, palette]) => __spreadProps(__spreadValues({}, palette), {
      key
    })),
    [context.availablePalettes]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Dropdown, __spreadProps(__spreadValues({}, dropdownProps), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DropdownTrigger, __spreadProps(__spreadValues({}, triggerButtonProps), { as: import_react2.Button, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_bridge2.PaletteGgradientDisplay, __spreadValues({}, context.palette)) })),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.DropdownMenu,
      __spreadProps(__spreadValues({
        "aria-label": "Thermal palette selection"
      }, dropdownMenuProps), {
        items,
        children: (item) => {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.DropdownItem, __spreadProps(__spreadValues({}, dropdownItemProps), { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react_bridge2.PaletteGgradientDisplay,
            {
              name: item.name,
              gradient: item.gradient,
              pixels: item.pixels
            }
          ) }), item.key);
        }
      })
    )
  ] }));
};

// src/components/properties/HistogramResolutionInput.tsx
var import_react_bridge3 = require("@labir/react-bridge");
var import_react4 = require("@nextui-org/react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var HistogramResolutionInput = (_a) => {
  var _b = _a, {
    registry,
    type = "range"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const resolution = (0, import_react_bridge3.useHistogramResolutionInput)(registry);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react4.Input,
    __spreadProps(__spreadValues({}, props), {
      value: resolution.internal.toString(),
      type,
      onChange: resolution.onChange,
      onValueChange: resolution.onBlur
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HistogramResolutionInput,
  OpacityInput,
  PaletteDropdown,
  ThermalInstance,
  ThermalProvider,
  ThermalRegistryHistogram,
  ThermalRegistryRange,
  useSingleFileRegistry,
  useThermalRegistry
});
//# sourceMappingURL=index.js.map