"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
  HistogramResolutionInputHeadless: () => HistogramResolutionInputHeadless,
  OpacityInputHeadless: () => OpacityInputHeadless,
  Orientation: () => Orientation,
  PaletteDropdownHeadless: () => PaletteDropdownHeadless,
  RangeButtonAutoHeadless: () => RangeButtonAutoHeadless,
  RangeButtonFullHeadless: () => RangeButtonFullHeadless,
  RangeHeadless: () => RangeHeadless,
  ThermalInstance: () => ThermalInstance,
  ThermalProvider: () => ThermalProvider,
  useThermalContext: () => useThermalContext,
  useThermalGroupCursorPositionDrive: () => useThermalGroupCursorPositionDrive,
  useThermalGroupInstancesState: () => useThermalGroupInstancesState,
  useThermalGroupMinmaxState: () => useThermalGroupMinmaxState,
  useThermalManagerPaletteDrive: () => useThermalManagerPaletteDrive,
  useThermalObjectPurpose: () => useThermalObjectPurpose,
  useThermalRegistry: () => useThermalRegistry,
  useThermalRegistryGroupsState: () => useThermalRegistryGroupsState,
  useThermalRegistryHistogramState: () => useThermalRegistryHistogramState,
  useThermalRegistryLoadingState: () => useThermalRegistryLoadingState,
  useThermalRegistryMinmaxState: () => useThermalRegistryMinmaxState,
  useThermalRegistryOpacityDrive: () => useThermalRegistryOpacityDrive,
  useThermalRegistryRangeDrive: () => useThermalRegistryRangeDrive
});
module.exports = __toCommonJS(src_exports);

// src/components/histogramResolutionInput/histogramResolutionInputHeadless.tsx
var import_react3 = require("@headlessui/react");

// src/context/useThermalObjectPurpose.ts
var import_core = require("@labir/core");
var import_react = require("react");
var import_uuid = require("uuid");
var useThermalObjectPurpose = (object, purpose, individual = false) => {
  return (0, import_react.useMemo)(() => {
    const iteration = (Math.random() * 1e4).toFixed(0);
    let objectType = "object";
    if (object instanceof import_core.ThermalRegistry)
      objectType = "registry";
    else if (object instanceof import_core.ThermalGroup)
      objectType = "group";
    else if (object instanceof import_core.ThermalFileInstance)
      objectType = "instance";
    const buffer = [
      objectType,
      object.id,
      purpose,
      iteration
    ];
    if (individual === true) {
      buffer.push((0, import_uuid.v4)());
    }
    return buffer.join("__");
  }, []);
};

// src/properties/states/useThermalRegistryHistogramState.ts
var import_react2 = require("react");
var useThermalRegistryHistogramState = (registry, purpose) => {
  const [value, setValue] = (0, import_react2.useState)(registry.histogram.value);
  (0, import_react2.useEffect)(() => {
    registry.histogram.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.histogram.removeListener(purpose);
  }, [registry, value, setValue]);
  const setResolution = (0, import_react2.useMemo)(() => registry.histogram.setResolution.bind(registry.histogram), [registry]);
  const recalculate = (0, import_react2.useMemo)(() => registry.histogram.recalculateWithCurrentSetting.bind(registry.histogram), [registry]);
  const resolution = (0, import_react2.useMemo)(() => registry.histogram.resolution, [registry.histogram.resolution]);
  (0, import_react2.useEffect)(() => {
    return () => registry.histogram.removeListener(purpose);
  }, []);
  return {
    value,
    setResolution,
    recalculate,
    resolution
  };
};

// src/components/histogramResolutionInput/histogramResolutionInputHeadless.tsx
var import_react4 = __toESM(require("react"));
var import_uuid2 = require("uuid");
var HistogramResolutionInputHeadless = (_a) => {
  var _b = _a, { registry, min = 2, max = 200, type = "number" } = _b, props = __objRest(_b, ["registry", "min", "max", "type"]);
  const ID = useThermalObjectPurpose(
    registry,
    "RangeButtonAutoHeadless_" + (0, import_uuid2.v4)()
  );
  const histogram = useThermalRegistryHistogramState(registry, ID);
  const [internal, setInternal] = (0, import_react4.useState)(histogram.resolution);
  (0, import_react4.useEffect)(() => {
    if (internal)
      if (internal >= 2 && internal <= 200) {
        if (internal !== histogram.resolution) {
          histogram.setResolution(Math.round(internal));
        }
      } else {
        setInternal(Math.min(Math.max(internal, 2), 200));
      }
  }, [internal, histogram.resolution, histogram.setResolution]);
  (0, import_react4.useEffect)(() => {
    if (internal !== histogram.resolution) {
      setInternal(histogram.resolution);
    }
  }, [histogram.value]);
  const onBlur = (0, import_react4.useCallback)(() => {
    if (isNaN(internal)) {
      setInternal(histogram.resolution);
    } else if (internal < 2 || internal > 200) {
      setInternal(Math.min(Math.max(internal, 2), 200));
    }
  }, [internal, histogram.resolution]);
  const onChange = (0, import_react4.useCallback)(
    (event) => {
      setInternal(parseInt(event.target.value));
      setTimeout(histogram.recalculate, 0);
    },
    [histogram.recalculate]
  );
  return /* @__PURE__ */ import_react4.default.createElement(
    import_react3.Input,
    __spreadProps(__spreadValues({}, props), {
      type,
      step: 1,
      min,
      max,
      onChange,
      onBlur,
      value: internal
    })
  );
};

// src/components/instance/thermalInstance.tsx
var import_classnames = __toESM(require("classnames"));
var import_react6 = __toESM(require("react"));
var import_react_dom = require("react-dom");

// src/components/instance/useInstanceListener.ts
var import_react5 = require("react");
var useInstanceListener = (listener, instance) => {
  return (0, import_react5.useMemo)(() => {
    if (listener === void 0) return void 0;
    return (event) => listener(event, instance);
  }, [listener, instance]);
};

// src/components/instance/thermalInstance.tsx
var ThermalInstance = (_a) => {
  var _b = _a, {
    className = "",
    instance,
    style = {},
    children
  } = _b, props = __objRest(_b, [
    "className",
    "instance",
    "style",
    "children"
  ]);
  const ref = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    if (ref.current) {
      instance.mountToDom(ref.current);
      instance.draw();
    }
    return () => instance.unmountFromDom();
  }, [instance]);
  const css2 = (0, import_react6.useMemo)(() => {
    const st = style;
    st.position = "relative";
    st.padding = 0;
    st.margin = 0;
    return st;
  }, [style]);
  const classes = (0, import_react6.useMemo)(() => {
    return (0, import_classnames.default)(className, "lrc__instance-canvas");
  }, [className]);
  const onClick = useInstanceListener(props.onClick, instance);
  const onMouseEnter = useInstanceListener(props.onMouseEnter, instance);
  const onMouseMove = useInstanceListener(props.onMouseMove, instance);
  const onMouseLeave = useInstanceListener(props.onMouseLeave, instance);
  const listenerElement = (0, import_react6.useMemo)(() => {
    return instance.listenerLayer.getLayerRoot();
  }, [instance]);
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      ref,
      className: classes,
      style: css2,
      onClick,
      onMouseEnter,
      onMouseMove,
      onMouseLeave
    }
  ), children && (0, import_react_dom.createPortal)(children, listenerElement));
};

// src/components/opacity/opacityInputHeadless.tsx
var import_react8 = require("@headlessui/react");
var import_react9 = __toESM(require("react"));

// src/properties/drives/useThermalRegistryOpacityDrive.ts
var import_react7 = require("react");
var useThermalRegistryOpacityDrive = (registry, purpose) => {
  const [value, setValue] = (0, import_react7.useState)(registry.opacity.value);
  (0, import_react7.useEffect)(() => {
    registry.opacity.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.opacity.removeListener(purpose);
  }, [registry, value, setValue]);
  const set = (0, import_react7.useMemo)(() => registry.opacity.imposeOpacity.bind(registry.opacity), [registry]);
  (0, import_react7.useEffect)(() => {
    return () => registry.opacity.removeListener(purpose);
  }, []);
  return {
    value,
    set
  };
};

// src/components/opacity/opacityInputHeadless.tsx
var OpacityInputHeadless = (_a) => {
  var _b = _a, {
    registry,
    type = "range",
    min = 0,
    max = 1,
    step = 0.1
  } = _b, props = __objRest(_b, [
    "registry",
    "type",
    "min",
    "max",
    "step"
  ]);
  const purpose = useThermalObjectPurpose(registry, "OpacityInputHeadless", true);
  const opacity = useThermalRegistryOpacityDrive(registry, purpose);
  const onChange = (event) => {
    opacity.set(parseFloat(event.target.value));
  };
  return /* @__PURE__ */ import_react9.default.createElement(
    import_react8.Input,
    __spreadProps(__spreadValues({}, props), {
      type,
      min,
      max,
      step,
      value: opacity.value,
      onChange
    })
  );
};

// src/components/palette/PaletteDropdownHeadless.tsx
var import_react18 = require("@headlessui/react");
var import_uuid3 = require("uuid");

// src/properties/drives/useThermalRegistryPaletteDrive.ts
var import_core4 = require("@labir/core");
var import_react12 = require("react");

// src/context/thermalManagerContext.tsx
var import_react11 = __toESM(require("react"));

// src/context/useThermalManagerInternal.ts
var import_core2 = require("@labir/core");
var import_react10 = require("react");
var useThermalManagerInternal = (options, externalInstance) => {
  return (0, import_react10.useMemo)(() => {
    if (externalInstance) return externalInstance;
    return new import_core2.ThermalManager(options);
  }, []);
};

// src/context/thermalManagerContext.tsx
var import_core3 = require("@labir/core");
var ThermalManagerContext = (0, import_react11.createContext)(new import_core3.ThermalManager());
var ThermalProvider = ({ options, externalManagerInstance, children }) => {
  const value = useThermalManagerInternal(options, externalManagerInstance);
  return /* @__PURE__ */ import_react11.default.createElement(ThermalManagerContext.Provider, { value }, children);
};
var useThermalContext = () => {
  return (0, import_react11.useContext)(ThermalManagerContext);
};

// src/properties/drives/useThermalRegistryPaletteDrive.ts
var useThermalManagerPaletteDrive = (purpose) => {
  const manager = useThermalContext();
  const [value, setValue] = (0, import_react12.useState)(manager.palette.value);
  const [palette, setPalette] = (0, import_react12.useState)(manager.palette.currentPalette);
  (0, import_react12.useEffect)(() => {
    manager.palette.addListener(purpose, (newValue) => {
      setValue(newValue);
      setPalette(manager.palette.currentPalette);
    });
    return () => manager.palette.removeListener(purpose);
  }, [manager, value, setValue, palette, setPalette]);
  const set = (0, import_react12.useMemo)(() => manager.palette.setPalette.bind(manager.palette), [manager]);
  (0, import_react12.useEffect)(() => {
    return () => manager.palette.removeListener(purpose);
  }, []);
  const availablePalettes = (0, import_react12.useMemo)(() => {
    return import_core4.ThermalPalettes;
  }, []);
  return {
    value,
    palette,
    set,
    availablePalettes
  };
};

// src/components/palette/PaletteDropdownHeadless.tsx
var import_react19 = __toESM(require("react"));

// src/components/palette/default/PaletteMenu.tsx
var import_react13 = __toESM(require("react"));
var PaletteMenu = (_a, ref) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  console.log(props, ref);
  return /* @__PURE__ */ import_react13.default.createElement("div", __spreadProps(__spreadValues({}, props), { style: { position: "relative" } }), children);
};

// src/components/palette/default/PaletteMenuButton.tsx
var import_react14 = require("@headlessui/react");
var PaletteMenuButton = (props) => {
  return /* @__PURE__ */ React.createElement(import_react14.Button, __spreadValues({}, props));
};

// src/components/palette/PaletteItem.tsx
var import_react15 = __toESM(require("react"));
var PaletteItem = (props) => {
  return /* @__PURE__ */ import_react15.default.createElement(
    "div",
    {
      style: __spreadProps(__spreadValues({}, props.style), {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      })
    },
    /* @__PURE__ */ import_react15.default.createElement(
      "div",
      {
        style: {
          width: "50px",
          background: props.gradient,
          height: "10px",
          borderRadius: "5px"
        }
      }
    ),
    /* @__PURE__ */ import_react15.default.createElement("div", null, props.name)
  );
};

// src/components/palette/default/PaletteMenuItem.tsx
var import_react16 = require("@headlessui/react");
var import_react17 = require("@emotion/react");
var PaletteMenuItem = (props) => {
  const style = import_react17.css`

        margin: 0;
        padding: 1rem;
        border: 0;
        background: 0;
        cursor: pointer;

        :hover {
            background: red;
        }

        &.focused {
            color: green;
        }
    
    `;
  return /* @__PURE__ */ (0, import_react17.jsx)(
    import_react16.Button,
    {
      onClick: props.onClick,
      css: style,
      className: props.active ? "focused" : "unfocused"
    },
    /* @__PURE__ */ (0, import_react17.jsx)(PaletteItem, __spreadValues({}, props.palette))
  );
};

// src/components/palette/PaletteDropdownHeadless.tsx
var PaletteDropdownHeadless = ({
  renderItem = PaletteMenuItem
}) => {
  const palette = useThermalManagerPaletteDrive((0, import_uuid3.v4)());
  const Item = renderItem;
  return /* @__PURE__ */ import_react19.default.createElement(import_react18.Menu, { as: PaletteMenu }, /* @__PURE__ */ import_react19.default.createElement(import_react18.MenuButton, { as: PaletteMenuButton }, /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(PaletteItem, __spreadValues({}, palette.palette)))), /* @__PURE__ */ import_react19.default.createElement(import_react18.MenuItems, { as: "p", unmount: true }, Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ import_react19.default.createElement(import_react18.MenuItem, { key }, (itemProps) => /* @__PURE__ */ import_react19.default.createElement(
    Item,
    __spreadProps(__spreadValues({
      palette: item
    }, itemProps), {
      onClick: () => {
        palette.set(key);
      },
      active: palette.value === key
    })
  )))));
};

// src/components/range/RangeHeadless.tsx
var import_react35 = __toESM(require("react"));

// src/properties/drives/useThermalRegistryRangeDrive.ts
var import_react20 = require("react");
var useThermalRegistryRangeDrive = (registry, purpose) => {
  const [value, setValue] = (0, import_react20.useState)(registry.range.value);
  (0, import_react20.useEffect)(() => {
    registry.range.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.range.removeListener(purpose);
  }, [registry, value, setValue]);
  const set = (0, import_react20.useMemo)(() => registry.range.imposeRange.bind(registry.range), [registry]);
  (0, import_react20.useEffect)(() => {
    return () => registry.range.removeListener(purpose);
  }, []);
  return {
    value,
    set
  };
};

// src/properties/states/useThermalRegistryLoadingState.ts
var import_react21 = require("react");
var useThermalRegistryLoadingState = (registry, purpose) => {
  const [value, setValue] = (0, import_react21.useState)(registry.loading.value);
  (0, import_react21.useEffect)(() => {
    registry.loading.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.loading.removeListener(purpose);
  }, [registry, value, setValue]);
  (0, import_react21.useEffect)(() => {
    return () => registry.loading.removeListener(purpose);
  }, []);
  return {
    value
  };
};

// src/properties/states/useThermalRegistryMinmaxState.ts
var import_react22 = require("react");
var useThermalRegistryMinmaxState = (registry, purpose) => {
  const [value, setValue] = (0, import_react22.useState)(registry.minmax.value);
  (0, import_react22.useEffect)(() => {
    registry.minmax.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.minmax.removeListener(purpose);
  }, [registry, setValue]);
  (0, import_react22.useEffect)(() => {
    return () => registry.minmax.removeListener(purpose);
  }, []);
  return {
    value
  };
};

// src/components/range/RangeHeadlessSkeleton.tsx
var import_react23 = __toESM(require("react"));
var RangeHeadlessSkeleton = () => {
  return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement("style", null, `@keyframes mymove {
                0%: {
                    left: 0%;
                    width: 25%;
                },
                50%: {
                    left: 30px;
                    width: 400px;
                }
                100%: {
                    left: 100%;
                    width: 25%;
                }
            }`), /* @__PURE__ */ import_react23.default.createElement("div", { style: { width: "100%", height: "20px" } }, /* @__PURE__ */ import_react23.default.createElement(
    "div",
    {
      style: {
        height: "5px",
        animation: "mymove 1s infinite",
        position: "absolute",
        backgroundColor: "black",
        content: ""
      }
    }
  )));
};

// src/components/range/RangerHeadlessContainer.tsx
var import_react24 = __toESM(require("react"));
var RangerHeadlessContainer = (props) => {
  return /* @__PURE__ */ import_react24.default.createElement("div", null, props.children);
};

// src/utilities/orientation.tsx
var Orientation = /* @__PURE__ */ ((Orientation2) => {
  Orientation2["HORIZONTAL"] = "horizontal";
  Orientation2["VERTICAL"] = "vertical";
  return Orientation2;
})(Orientation || {});

// src/components/range/inner/rangerHeadlessInner.tsx
var import_react_ranger = require("@tanstack/react-ranger");
var import_react34 = __toESM(require("react"));

// src/components/histogram/registryHistogram.tsx
var import_react25 = __toESM(require("react"));
var RegistryHistogram = (_a) => {
  var _b = _a, {
    sizeInPx = 20,
    borderColor = "lightgray",
    borderWidthInPx = 1,
    barBackground = "black",
    background = "transparent",
    orientation = "horizontal" /* HORIZONTAL */
  } = _b, props = __objRest(_b, [
    "sizeInPx",
    "borderColor",
    "borderWidthInPx",
    "barBackground",
    "background",
    "orientation"
  ]);
  const purpose = useThermalObjectPurpose(props.registry, "thermalHistogram");
  const histogram = useThermalRegistryHistogramState(props.registry, purpose);
  const borderWidth = (0, import_react25.useMemo)(() => `${borderWidthInPx}px`, [borderWidthInPx]);
  const border = (0, import_react25.useMemo)(
    () => `${borderWidth} solid ${borderColor}`,
    [borderColor, borderWidth, histogram.value, histogram.resolution]
  );
  const mainCss = (0, import_react25.useMemo)(() => {
    const css2 = {
      borderStyle: "solid",
      borderColor,
      backgroundColor: background,
      display: "flex"
    };
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css2.width = "100%";
      css2.marginBottom = "25px";
      css2.borderRightWidth = 0;
      css2.borderTopWidth = borderWidth;
      css2.borderBottomWidth = borderWidth;
      css2.borderLeftWidth = borderWidth;
    } else {
      css2.borderBottomWidth = 0;
      css2.borderLeftWidth = borderWidth;
      css2.borderRightWidth = borderWidth;
      css2.borderTopWidth = borderWidth;
      css2.marginLeft = "100px";
      css2.height = "100%";
      css2.position = "absolute";
      css2.flexDirection = "column";
    }
    return css2;
  }, [borderColor, background, orientation, histogram.value, histogram.resolution]);
  const barCss = (0, import_react25.useMemo)(() => {
    const css2 = {
      position: "relative",
      boxSizing: "border-box",
      flexGrow: "1"
    };
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css2.height = `${sizeInPx}px`;
      css2.width = `${100 / histogram.value.length}%`;
      css2.borderRight = border;
    } else {
      css2.width = `${sizeInPx}px`;
      css2.height = `${100 / histogram.value.length}%`;
      css2.borderBottom = border;
    }
    return css2;
  }, [border, borderWidth, orientation, sizeInPx, histogram.value, histogram.resolution]);
  const valueCss = (0, import_react25.useMemo)(() => {
    const css2 = {
      position: "absolute",
      content: "",
      background: barBackground
    };
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css2.bottom = "0px";
      css2.left = "0px";
      css2.width = "100%";
    } else {
      css2.height = "100%";
      css2.top = "0px";
      css2.left = "0px";
    }
    return css2;
  }, [orientation, barBackground, histogram.value, histogram.resolution]);
  return /* @__PURE__ */ import_react25.default.createElement("div", { style: mainCss }, histogram.value && histogram.value.map((entry) => {
    const height = `${entry.height}%`;
    const css2 = __spreadValues({}, valueCss);
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css2.height = height;
    } else {
      css2.width = height;
    }
    return /* @__PURE__ */ import_react25.default.createElement("div", { key: entry.from, style: barCss, "data-height": entry.height, "data-count": entry.count, "data-percentage": entry.percentage }, /* @__PURE__ */ import_react25.default.createElement("div", { style: css2 }));
  }));
};

// src/components/range/inner/rangerHandles.tsx
var import_react26 = __toESM(require("react"));
var RangerHandles = (_a) => {
  var _b = _a, {
    trackSizeInPx = 20,
    handleColor = "white",
    handleBackground = "black"
  } = _b, props = __objRest(_b, [
    "trackSizeInPx",
    "handleColor",
    "handleBackground"
  ]);
  return /* @__PURE__ */ import_react26.default.createElement(import_react26.default.Fragment, null, props.ranger.handles().map(
    ({
      value,
      onKeyDownHandler,
      onMouseDownHandler,
      onTouchStart
    }, index) => {
      const css2 = {
        position: "absolute",
        cursor: "pointer",
        border: 0,
        background: "transparent",
        fontSize: "12px"
      };
      const innerCss = {
        position: "absolute",
        background: handleBackground,
        color: handleColor,
        width: "40px",
        fontSize: "12px"
      };
      const arrowCss = {
        position: "absolute",
        width: 10,
        height: 10,
        transform: "rotate(40deg)",
        background: handleBackground
      };
      if (props.orientation === "horizontal" /* HORIZONTAL */) {
        css2.top = "0%";
        css2.left = `${props.ranger.getPercentageForValue(value)}%`;
        innerCss.left = "-20px";
        innerCss.top = `${trackSizeInPx + 5}px`;
        innerCss.textAlign = "center";
        arrowCss.top = -3;
        arrowCss.left = "40%";
      } else {
        css2.left = "0%";
        css2.top = `${props.ranger.getPercentageForValue(value)}%`;
        innerCss.left = `${trackSizeInPx + 5}px`;
        innerCss.marginTop = "-10px";
        arrowCss.left = -3;
        arrowCss.top = 4;
      }
      return /* @__PURE__ */ import_react26.default.createElement(
        "button",
        {
          key: index,
          role: "slider",
          "aria-valuemin": props.ranger.options.min,
          "aria-valuemax": props.ranger.options.max,
          "aria-valuenow": value,
          onKeyDown: onKeyDownHandler,
          onMouseDown: onMouseDownHandler,
          onTouchStart,
          style: css2
        },
        /* @__PURE__ */ import_react26.default.createElement("div", { className: "track", style: innerCss }, /* @__PURE__ */ import_react26.default.createElement("div", { style: arrowCss }), /* @__PURE__ */ import_react26.default.createElement(
          "div",
          {
            style: {
              backgroundColor: handleBackground,
              color: handleColor,
              width: "100%",
              //height: `15px`,
              position: "absolute",
              padding: "2px",
              textAlign: "center"
            }
          },
          value.toFixed(2)
        ))
      );
    }
  ));
};

// src/components/range/inner/rangerTick.tsx
var import_react27 = __toESM(require("react"));
var RangerTick = (_a) => {
  var _b = _a, {
    orientation = "horizontal" /* HORIZONTAL */,
    trackSizeInPx = 20,
    tickLineColor = "#ccc",
    tickLabelColor = "black"
  } = _b, props = __objRest(_b, [
    "orientation",
    "trackSizeInPx",
    "tickLineColor",
    "tickLabelColor"
  ]);
  const mainCss = {
    position: "absolute",
    fontSize: "12px",
    textAlign: "center",
    display: "flex",
    alignItems: "center"
  };
  const childCommonCss = {};
  const markerCSS = __spreadProps(__spreadValues({}, childCommonCss), {
    backgroundColor: tickLineColor,
    content: ""
  });
  const labelCss = __spreadProps(__spreadValues({}, childCommonCss), {
    color: tickLabelColor
  });
  if (orientation === "horizontal" /* HORIZONTAL */) {
    mainCss.transform = "translateX(-50%)";
    mainCss.top = "-20px";
    mainCss.width = "28px";
    mainCss.textAlign = "center";
    mainCss.left = `${props.percentage}%`;
    mainCss.flexDirection = "column";
    labelCss.width = "100%";
    labelCss.textAlign = "center";
    markerCSS.width = "1px";
    markerCSS.height = `${trackSizeInPx + 10}px`;
  } else {
    mainCss.top = `${props.percentage}%`;
    mainCss.left = "-5px";
    mainCss.textAlign = "left";
    mainCss.transform = "translateY(-50%)";
    markerCSS.order = "0";
    markerCSS.width = `${trackSizeInPx + 10}px`;
    markerCSS.height = "1px";
    labelCss.order = "1";
    labelCss.paddingLeft = "5px";
  }
  return /* @__PURE__ */ import_react27.default.createElement(
    "div",
    {
      style: mainCss
    },
    /* @__PURE__ */ import_react27.default.createElement("span", { style: labelCss }, props.value.toFixed(2)),
    /* @__PURE__ */ import_react27.default.createElement("span", { style: markerCSS })
  );
};

// src/components/range/inner/rangerTrack.tsx
var import_classnames2 = __toESM(require("classnames"));
var import_react28 = __toESM(require("react"));
var RangerTrack = (0, import_react28.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      orientation = "horizontal" /* HORIZONTAL */,
      className,
      backgroundColor = "#ddd",
      volumeInPx = 20
    } = _b, props = __objRest(_b, [
      "orientation",
      "className",
      "backgroundColor",
      "volumeInPx"
    ]);
    const styles = (0, import_react28.useMemo)(() => {
      const css2 = {
        position: "relative",
        userSelect: "none",
        background: backgroundColor
      };
      if (orientation === "horizontal" /* HORIZONTAL */) {
        css2.height = `${volumeInPx}px`;
        css2.width = "100%";
        css2.marginBottom = "30px";
      } else {
        css2.width = `${volumeInPx}px`;
        css2.height = "100%";
        css2.marginRight = "50px";
      }
      return css2;
    }, [backgroundColor, orientation, volumeInPx]);
    const classes = (0, import_react28.useMemo)(
      () => (0, import_classnames2.default)(
        "lrc__ranger-track",
        `lrc__ranger-track__${orientation}`,
        className
      ),
      [className, orientation]
    );
    return /* @__PURE__ */ import_react28.default.createElement("div", __spreadValues({ ref, className: classes, style: styles }, props), props.children);
  }
);

// src/components/range/inner/useRangerTicks.ts
var import_react30 = require("react");

// src/utilities/useDimension.ts
var import_react29 = require("react");
var useDimension = (ref, orientation) => {
  const [dimension, setDimension] = (0, import_react29.useState)();
  (0, import_react29.useEffect)(() => {
    const property = orientation === "horizontal" /* HORIZONTAL */ ? "width" : "height";
    const observer = new ResizeObserver((entries) => {
      const [entry] = entries;
      setDimension(entry.contentRect[property]);
    });
    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, orientation]);
  return dimension;
};

// src/components/range/inner/useRangerTicks.ts
var useRangerTicks = (ref, minmax, orientation) => {
  const [ticks, setTicks] = (0, import_react30.useState)([]);
  const width = useDimension(ref, orientation);
  (0, import_react30.useEffect)(() => {
    if (minmax.value && width !== void 0) {
      const totalDistance = Math.abs(
        minmax.value.min - minmax.value.max
      );
      const num = Math.floor(width / 40);
      const tickStep = totalDistance / num;
      const ticksBuffer = [];
      for (let i = 1; i < num; i++) {
        ticksBuffer.push(minmax.value.min + i * tickStep);
      }
      ticksBuffer.push(minmax.value.min);
      ticksBuffer.push(minmax.value.max);
      setTicks(ticksBuffer);
    }
  }, [minmax.value, width]);
  return ticks;
};

// src/components/range/inner/useRangerValues.ts
var import_react31 = require("react");
var useRangerValues = (registry, isLocked, rangeOverride) => {
  const purpose = useThermalObjectPurpose(registry, "useRangerValues");
  const minmax = useThermalRegistryMinmaxState(registry, purpose);
  const range = useThermalRegistryRangeDrive(registry, purpose);
  const min = (0, import_react31.useMemo)(() => {
    return minmax.value.min;
  }, [minmax.value]);
  const max = (0, import_react31.useMemo)(() => {
    return minmax.value.max;
  }, [minmax.value]);
  const initialState = (0, import_react31.useMemo)(() => {
    if (rangeOverride !== void 0) {
      return [rangeOverride.from, rangeOverride.to];
    } else if (range.value !== void 0) {
      return [range.value.from, range.value.to];
    }
    return [minmax.value.min, minmax.value.max];
  }, []);
  const [internal, setInternalState] = (0, import_react31.useState)(initialState);
  (0, import_react31.useEffect)(() => {
    registry.range.addListener(purpose, (value) => {
      if (value !== void 0) {
        if (isLocked === false && rangeOverride === void 0) {
          setInternalState([value.from, value.to]);
        }
      }
    });
  }, [isLocked, registry]);
  (0, import_react31.useEffect)(() => {
    if (rangeOverride !== void 0) {
      if (rangeOverride.from !== internal[0] || rangeOverride.to !== internal[1]) {
        setInternalState([rangeOverride.from, rangeOverride.to]);
      }
    }
  }, [rangeOverride]);
  const onChange = (0, import_react31.useCallback)((instance) => {
    if (isLocked === true) {
      return;
    }
    if (rangeOverride !== void 0) {
      return;
    }
    range.set({
      from: instance.sortedValues[0],
      to: instance.sortedValues[1]
    });
  }, []);
  const onDrag = (0, import_react31.useCallback)((instance) => {
    if (isLocked === true) {
      return;
    }
    if (rangeOverride !== void 0) {
      return;
    }
    if (instance.sortedValues[0] >= instance.sortedValues[1]) {
      return;
    }
    setInternalState([...instance.sortedValues]);
  }, []);
  return {
    min,
    max,
    values: internal,
    onChange,
    onDrag,
    minmax,
    range
  };
};

// src/components/range/inner/RangerContainerInner.tsx
var import_classnames3 = __toESM(require("classnames"));
var import_react32 = __toESM(require("react"));
var RangerContainerInner = (_a) => {
  var _b = _a, {
    orientation = "horizontal" /* HORIZONTAL */,
    className,
    style = {}
  } = _b, props = __objRest(_b, [
    "orientation",
    "className",
    "style"
  ]);
  const css2 = __spreadProps(__spreadValues({}, style), {
    position: "relative",
    display: "flex"
  });
  if (orientation === "horizontal" /* HORIZONTAL */) {
    css2.paddingTop = "20px";
    css2.paddingBottom = "20px";
    css2.width = "100%";
    css2.flexDirection = "column";
  } else {
    css2.paddingLeft = "20px";
    css2.paddingRight = "20px";
    css2.height = "400px";
  }
  const wrapperCss = (0, import_react32.useMemo)(() => {
    const css3 = {};
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css3.paddingLeft = "20px";
      css3.paddingRight = "20px";
    } else {
      css3.paddingTop = "10px";
      css3.paddingBottom = "10px";
    }
    return css3;
  }, [orientation]);
  const classes = (0, import_classnames3.default)(
    "lrc-ranger-container",
    `lrc-ranger-container__${orientation}`,
    className
  );
  return /* @__PURE__ */ import_react32.default.createElement("div", { style: wrapperCss }, /* @__PURE__ */ import_react32.default.createElement("div", { className: classes, style: css2 }, props.children));
};

// src/components/range/inner/rangerPalette.tsx
var import_react33 = __toESM(require("react"));
var RangerPalette = (props) => {
  const startInPercent = (0, import_react33.useMemo)(() => {
    return `${props.ranger.getPercentageForValue(props.values.values[0])}%`;
  }, [props.ranger, props.values]);
  const dimensionInPercent = (0, import_react33.useMemo)(() => {
    return `${props.ranger.getPercentageForValue(props.values.values[1]) - props.ranger.getPercentageForValue(props.values.values[0])}%`;
  }, [props.ranger, props.values]);
  const css2 = {
    position: "absolute",
    background: props.palette.gradient
  };
  if (props.orientation === "horizontal" /* HORIZONTAL */) {
    css2.left = startInPercent;
    css2.width = dimensionInPercent;
    css2.top = "0px";
    css2.height = `${props.volumeInPx}px`;
  } else {
    css2.top = startInPercent;
    css2.height = dimensionInPercent;
    css2.left = "0px";
    css2.width = `${props.volumeInPx}px`;
    css2.background = props.palette.gradient.replace("90deg", "0deg");
  }
  return /* @__PURE__ */ import_react33.default.createElement(
    "div",
    {
      style: css2,
      className: "lrc-ranger-highlight"
    }
  );
};

// src/components/range/inner/rangerHeadlessInner.tsx
var RangerHeadlessInner = (_a) => {
  var _b = _a, {
    orientation = "horizontal" /* HORIZONTAL */,
    useHistogram = true,
    trackSizeInPx: trackHeightInPx = 20,
    trackBg = "#ddd",
    trackClass = void 0,
    handleBG = "black",
    handleColor = "white",
    histogramSizeInPx = 20,
    histogramBorderColor = "lightgray",
    histogramBorderWidthInPx = 1,
    histogramBarBackground = "black",
    histogramBackground = "white",
    ticksLabelColor = "black",
    ticksLineColor = "#ccc"
  } = _b, props = __objRest(_b, [
    "orientation",
    "useHistogram",
    "trackSizeInPx",
    "trackBg",
    "trackClass",
    "handleBG",
    "handleColor",
    "histogramSizeInPx",
    "histogramBorderColor",
    "histogramBorderWidthInPx",
    "histogramBarBackground",
    "histogramBackground",
    "ticksLabelColor",
    "ticksLineColor"
  ]);
  const purpose = useThermalObjectPurpose(
    props.registry,
    "ThermalRangeHeadlessInner"
  );
  const rangerRef = (0, import_react34.useRef)(null);
  const palette = useThermalManagerPaletteDrive(purpose);
  const rangerValue = useRangerValues(
    props.registry,
    props.isLocked,
    props.rangeOverride
  );
  const rangerTicks = useRangerTicks(
    rangerRef,
    rangerValue.minmax,
    orientation
  );
  const rangerInstance = (0, import_react_ranger.useRanger)({
    getRangerElement: () => rangerRef.current,
    min: rangerValue.min,
    max: rangerValue.max,
    values: rangerValue.values,
    onChange: rangerValue.onChange,
    stepSize: props.step,
    ticks: rangerTicks,
    onDrag: rangerValue.onDrag
  });
  return /* @__PURE__ */ import_react34.default.createElement(RangerContainerInner, { orientation }, useHistogram && /* @__PURE__ */ import_react34.default.createElement(
    RegistryHistogram,
    {
      registry: props.registry,
      sizeInPx: histogramSizeInPx,
      borderColor: histogramBorderColor,
      borderWidthInPx: histogramBorderWidthInPx,
      barBackground: histogramBarBackground,
      background: histogramBackground,
      orientation
    }
  ), /* @__PURE__ */ import_react34.default.createElement(
    RangerTrack,
    {
      volumeInPx: trackHeightInPx,
      ref: rangerRef,
      "aria-label": "WTF!!",
      orientation,
      backgroundColor: trackBg,
      className: trackClass
    },
    rangerInstance.getTicks().map((_a2) => {
      var _b2 = _a2, { key } = _b2, tick = __objRest(_b2, ["key"]);
      return /* @__PURE__ */ import_react34.default.createElement(
        RangerTick,
        __spreadProps(__spreadValues({
          key
        }, tick), {
          orientation,
          trackSizeInPx: trackHeightInPx,
          tickLabelColor: ticksLabelColor,
          tickLineColor: ticksLineColor
        })
      );
    }),
    rangerInstance.sortedValues && /* @__PURE__ */ import_react34.default.createElement(
      RangerPalette,
      {
        palette: palette.palette,
        ranger: rangerInstance,
        values: rangerValue,
        orientation,
        volumeInPx: trackHeightInPx
      }
    ),
    /* @__PURE__ */ import_react34.default.createElement(
      RangerHandles,
      {
        ranger: rangerInstance,
        orientation,
        trackSizeInPx: trackHeightInPx,
        handleBackground: handleBG,
        handleColor
      }
    )
  ));
};

// src/components/range/RangeHeadless.tsx
var RangeHeadless = (_a) => {
  var _b = _a, {
    renderSkeleton = RangeHeadlessSkeleton,
    renderContainer = RangerHeadlessContainer,
    isLocked = false,
    rangeOverride = void 0,
    orientation = "horizontal" /* HORIZONTAL */,
    useHistogram = true,
    trackSizeInPx: trackHeightInPx = 20
  } = _b, props = __objRest(_b, [
    "renderSkeleton",
    "renderContainer",
    "isLocked",
    "rangeOverride",
    "orientation",
    "useHistogram",
    "trackSizeInPx"
  ]);
  const purpose = useThermalObjectPurpose(props.registry, "headless-slider");
  const minmax = useThermalRegistryMinmaxState(props.registry, purpose);
  const { value: loading } = useThermalRegistryLoadingState(
    props.registry,
    purpose
  );
  const range = useThermalRegistryRangeDrive(props.registry, purpose);
  const isReady = (0, import_react35.useMemo)(() => {
    return minmax.value !== void 0 && range.value !== void 0 && loading === false;
  }, [minmax, loading]);
  const Skeleton = renderSkeleton;
  const Container = renderContainer;
  return /* @__PURE__ */ import_react35.default.createElement(Container, null, isReady === false && /* @__PURE__ */ import_react35.default.createElement(Skeleton, null), isReady === true && /* @__PURE__ */ import_react35.default.createElement(
    RangerHeadlessInner,
    __spreadProps(__spreadValues({
      isLocked,
      rangeOverride,
      useHistogram
    }, props), {
      orientation,
      trackSizeInPx: trackHeightInPx
    })
  ));
};

// src/components/rangeButtonAuto.tsx/rangeButtonAutoHeadless.tsx
var import_react36 = __toESM(require("react"));
var import_react37 = require("@headlessui/react");
var RangeButtonAutoHeadless = (_a) => {
  var _b = _a, {
    registry,
    children = "Automatick\xFD teplotn\xED rozsah"
  } = _b, props = __objRest(_b, [
    "registry",
    "children"
  ]);
  const ID = useThermalObjectPurpose(registry, "RangeButtonAutoHeadless");
  const range = useThermalRegistryRangeDrive(registry, ID);
  const minmax = useThermalRegistryMinmaxState(registry, ID);
  const histogram = useThermalRegistryHistogramState(registry, ID);
  const onClick = (0, import_react36.useCallback)(() => {
    const length = histogram.value.length;
    const percentage = 100 / length;
    const newRangeTemp = histogram.value.filter((item) => item.height >= percentage);
    const newRange = { from: newRangeTemp[0].from, to: newRangeTemp[newRangeTemp.length - 1].to };
    range.set(newRange);
  }, [minmax.value, range.set, histogram.resolution]);
  return /* @__PURE__ */ import_react36.default.createElement(import_react37.Button, __spreadProps(__spreadValues({}, props), { onClick }), children);
};

// src/components/rangeButtonFull/rangeButtonFullHeadless.tsx
var import_react38 = __toESM(require("react"));
var import_react39 = require("@headlessui/react");
var RangeButtonFullHeadless = (_a) => {
  var _b = _a, {
    registry,
    children = "Nastavit paletu na cel\xFD rozsah teplot"
  } = _b, props = __objRest(_b, [
    "registry",
    "children"
  ]);
  const ID = useThermalObjectPurpose(registry, "RangeButtonFullHeadless");
  const range = useThermalRegistryRangeDrive(registry, ID);
  const minmax = useThermalRegistryMinmaxState(registry, ID);
  const onClick = (0, import_react38.useCallback)(() => {
    if (minmax.value !== void 0)
      range.set({ from: minmax.value.min, to: minmax.value.max });
  }, [minmax.value, range.set]);
  return /* @__PURE__ */ import_react38.default.createElement(import_react39.Button, __spreadProps(__spreadValues({}, props), { onClick }), children);
};

// src/context/useThermalRegistry.ts
var import_react40 = require("react");
var useThermalRegistry = (registryId, options) => {
  const manager = useThermalContext();
  const registry = (0, import_react40.useMemo)(() => {
    return manager.addOrGetRegistry(registryId, options);
  }, [registryId, manager]);
  return registry;
};

// src/properties/drives/useThermalGroupCursorPositionDrive.ts
var import_react41 = require("react");
var useThermalGroupCursorPositionDrive = (group, purpose) => {
  const [value, setValue] = (0, import_react41.useState)(group.cursorPosition.value);
  const [hover, setHover] = (0, import_react41.useState)(group.cursorPosition.hover);
  (0, import_react41.useEffect)(() => {
    group.cursorPosition.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
      if (hover !== group.cursorPosition.hover) {
        setHover(group.cursorPosition.hover);
      }
    });
    return () => group.cursorPosition.removeListener(purpose);
  }, [group, value, setValue]);
  const setCursorPosition = (0, import_react41.useMemo)(() => group.cursorPosition.recieveCursorPosition.bind(group.cursorPosition), [group]);
  (0, import_react41.useEffect)(() => {
    return () => group.cursorPosition.removeListener(purpose);
  }, []);
  return {
    value,
    setCursorPosition,
    hover
  };
};

// src/properties/lists/useThermalGroupInstancesState.ts
var import_react42 = require("react");
var useThermalGroupInstancesState = (group, purpose) => {
  const [value, setValue] = (0, import_react42.useState)(group.instances.value);
  (0, import_react42.useEffect)(() => {
    group.instances.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => group.instances.removeListener(purpose);
  }, [group, value, setValue]);
  const instantiateSources = (0, import_react42.useMemo)(() => group.instances.instantiateSources, [group]);
  const removeAllInstances = (0, import_react42.useMemo)(() => group.instances.removeAllInstances, [group]);
  (0, import_react42.useEffect)(() => {
    return () => group.instances.removeListener(purpose);
  }, []);
  return {
    value,
    instantiateSources,
    removeAllInstances
  };
};

// src/properties/lists/useThermalRegistryGroupsState.ts
var import_react43 = require("react");
var useThermalRegistryGroupsState = (registry, purpose) => {
  const [value, setValue] = (0, import_react43.useState)(registry.groups.value);
  (0, import_react43.useEffect)(() => {
    registry.groups.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.groups.removeListener(purpose);
  }, [registry]);
  const addOrGetGroup = (0, import_react43.useMemo)(() => registry.groups.addOrGetGroup, [registry]);
  const removeAllGroups = (0, import_react43.useMemo)(() => registry.groups.removeAllGroups, [registry]);
  const removeGroup = (0, import_react43.useMemo)(() => registry.groups.removeGroup, [registry]);
  (0, import_react43.useEffect)(() => {
    return () => registry.groups.removeListener(purpose);
  }, []);
  return {
    value,
    addOrGetGroup,
    removeAllGroups,
    removeGroup
  };
};

// src/properties/states/useThermalGroupMinmaxState.ts
var import_react44 = require("react");
var useThermalGroupMinmaxState = (group, purpose) => {
  const [value, setValue] = (0, import_react44.useState)(group.minmax.value);
  (0, import_react44.useEffect)(() => {
    group.minmax.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => group.minmax.removeListener(purpose);
  }, [group, setValue]);
  (0, import_react44.useEffect)(() => {
    return () => group.minmax.removeListener(purpose);
  }, []);
  return {
    value
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HistogramResolutionInputHeadless,
  OpacityInputHeadless,
  Orientation,
  PaletteDropdownHeadless,
  RangeButtonAutoHeadless,
  RangeButtonFullHeadless,
  RangeHeadless,
  ThermalInstance,
  ThermalProvider,
  useThermalContext,
  useThermalGroupCursorPositionDrive,
  useThermalGroupInstancesState,
  useThermalGroupMinmaxState,
  useThermalManagerPaletteDrive,
  useThermalObjectPurpose,
  useThermalRegistry,
  useThermalRegistryGroupsState,
  useThermalRegistryHistogramState,
  useThermalRegistryLoadingState,
  useThermalRegistryMinmaxState,
  useThermalRegistryOpacityDrive,
  useThermalRegistryRangeDrive
});
