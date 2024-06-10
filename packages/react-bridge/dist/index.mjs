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

// src/components/histogramResolutionInput/histogramResolutionInputHeadless.tsx
import { Input } from "@headlessui/react";

// src/context/useThermalObjectPurpose.ts
import { ThermalRegistry, ThermalGroup, ThermalFileInstance } from "@labir/core";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
var useThermalObjectPurpose = (object, purpose, individual = false) => {
  return useMemo(() => {
    const iteration = (Math.random() * 1e4).toFixed(0);
    let objectType = "object";
    if (object instanceof ThermalRegistry)
      objectType = "registry";
    else if (object instanceof ThermalGroup)
      objectType = "group";
    else if (object instanceof ThermalFileInstance)
      objectType = "instance";
    const buffer = [
      objectType,
      object.id,
      purpose,
      iteration
    ];
    if (individual === true) {
      buffer.push(uuidv4());
    }
    return buffer.join("__");
  }, []);
};

// src/properties/states/useThermalRegistryHistogramState.ts
import { useEffect, useMemo as useMemo2, useState } from "react";
var useThermalRegistryHistogramState = (registry, purpose) => {
  const [value, setValue] = useState(registry.histogram.value);
  useEffect(() => {
    registry.histogram.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.histogram.removeListener(purpose);
  }, [registry, value, setValue]);
  const setResolution = useMemo2(() => registry.histogram.setResolution.bind(registry.histogram), [registry]);
  const recalculate = useMemo2(() => registry.histogram.recalculateWithCurrentSetting.bind(registry.histogram), [registry]);
  const resolution = useMemo2(() => registry.histogram.resolution, [registry.histogram.resolution]);
  useEffect(() => {
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
import React2, { useCallback, useEffect as useEffect2, useState as useState2 } from "react";
import { v4 as uuid } from "uuid";
var HistogramResolutionInputHeadless = (_a) => {
  var _b = _a, { registry, min = 2, max = 200, type = "number" } = _b, props = __objRest(_b, ["registry", "min", "max", "type"]);
  const ID = useThermalObjectPurpose(
    registry,
    "RangeButtonAutoHeadless_" + uuid()
  );
  const histogram = useThermalRegistryHistogramState(registry, ID);
  const [internal, setInternal] = useState2(histogram.resolution);
  useEffect2(() => {
    if (internal)
      if (internal >= 2 && internal <= 200) {
        if (internal !== histogram.resolution) {
          histogram.setResolution(Math.round(internal));
        }
      } else {
        setInternal(Math.min(Math.max(internal, 2), 200));
      }
  }, [internal, histogram.resolution, histogram.setResolution]);
  useEffect2(() => {
    if (internal !== histogram.resolution) {
      setInternal(histogram.resolution);
    }
  }, [histogram.value]);
  const onBlur = useCallback(() => {
    if (isNaN(internal)) {
      setInternal(histogram.resolution);
    } else if (internal < 2 || internal > 200) {
      setInternal(Math.min(Math.max(internal, 2), 200));
    }
  }, [internal, histogram.resolution]);
  const onChange = useCallback(
    (event) => {
      setInternal(parseInt(event.target.value));
      setTimeout(histogram.recalculate, 0);
    },
    [histogram.recalculate]
  );
  return /* @__PURE__ */ React2.createElement(
    Input,
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
import classNames from "classnames";
import React3, {
  useEffect as useEffect3,
  useMemo as useMemo4,
  useRef
} from "react";
import { createPortal } from "react-dom";

// src/components/instance/useInstanceListener.ts
import { useMemo as useMemo3 } from "react";
var useInstanceListener = (listener, instance) => {
  return useMemo3(() => {
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
  const ref = useRef(null);
  useEffect3(() => {
    if (ref.current) {
      instance.mountToDom(ref.current);
      instance.draw();
    }
    return () => instance.unmountFromDom();
  }, [instance]);
  const css2 = useMemo4(() => {
    const st = style;
    st.position = "relative";
    st.padding = 0;
    st.margin = 0;
    return st;
  }, [style]);
  const classes = useMemo4(() => {
    return classNames(className, "lrc__instance-canvas");
  }, [className]);
  const onClick = useInstanceListener(props.onClick, instance);
  const onMouseEnter = useInstanceListener(props.onMouseEnter, instance);
  const onMouseMove = useInstanceListener(props.onMouseMove, instance);
  const onMouseLeave = useInstanceListener(props.onMouseLeave, instance);
  const listenerElement = useMemo4(() => {
    return instance.listenerLayer.getLayerRoot();
  }, [instance]);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(
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
  ), children && createPortal(children, listenerElement));
};

// src/components/opacity/opacityInputHeadless.tsx
import { Input as Input2 } from "@headlessui/react";
import React4 from "react";

// src/properties/drives/useThermalRegistryOpacityDrive.ts
import { useEffect as useEffect4, useMemo as useMemo5, useState as useState3 } from "react";
var useThermalRegistryOpacityDrive = (registry, purpose) => {
  const [value, setValue] = useState3(registry.opacity.value);
  useEffect4(() => {
    registry.opacity.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.opacity.removeListener(purpose);
  }, [registry, value, setValue]);
  const set = useMemo5(() => registry.opacity.imposeOpacity.bind(registry.opacity), [registry]);
  useEffect4(() => {
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
  return /* @__PURE__ */ React4.createElement(
    Input2,
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
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from "@headlessui/react";
import { v4 as uuidv42 } from "uuid";

// src/properties/drives/useThermalRegistryPaletteDrive.ts
import { ThermalPalettes } from "@labir/core";
import { useEffect as useEffect5, useState as useState4, useMemo as useMemo7 } from "react";

// src/context/thermalManagerContext.tsx
import React5, { createContext, useContext } from "react";

// src/context/useThermalManagerInternal.ts
import { ThermalManager } from "@labir/core";
import { useMemo as useMemo6 } from "react";
var useThermalManagerInternal = (options, externalInstance) => {
  return useMemo6(() => {
    if (externalInstance) return externalInstance;
    return new ThermalManager(options);
  }, []);
};

// src/context/thermalManagerContext.tsx
import { ThermalManager as ThermalManager2 } from "@labir/core";
var ThermalManagerContext = createContext(new ThermalManager2());
var ThermalProvider = ({ options, externalManagerInstance, children }) => {
  const value = useThermalManagerInternal(options, externalManagerInstance);
  return /* @__PURE__ */ React5.createElement(ThermalManagerContext.Provider, { value }, children);
};
var useThermalContext = () => {
  return useContext(ThermalManagerContext);
};

// src/properties/drives/useThermalRegistryPaletteDrive.ts
var useThermalManagerPaletteDrive = (purpose) => {
  const manager = useThermalContext();
  const [value, setValue] = useState4(manager.palette.value);
  const [palette, setPalette] = useState4(manager.palette.currentPalette);
  useEffect5(() => {
    manager.palette.addListener(purpose, (newValue) => {
      setValue(newValue);
      setPalette(manager.palette.currentPalette);
    });
    return () => manager.palette.removeListener(purpose);
  }, [manager, value, setValue, palette, setPalette]);
  const set = useMemo7(() => manager.palette.setPalette.bind(manager.palette), [manager]);
  useEffect5(() => {
    return () => manager.palette.removeListener(purpose);
  }, []);
  const availablePalettes = useMemo7(() => {
    return ThermalPalettes;
  }, []);
  return {
    value,
    palette,
    set,
    availablePalettes
  };
};

// src/components/palette/PaletteDropdownHeadless.tsx
import React8 from "react";

// src/components/palette/default/PaletteMenu.tsx
import React6 from "react";
var PaletteMenu = (_a, ref) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  console.log(props, ref);
  return /* @__PURE__ */ React6.createElement("div", __spreadProps(__spreadValues({}, props), { style: { position: "relative" } }), children);
};

// src/components/palette/default/PaletteMenuButton.tsx
import { Button } from "@headlessui/react";
var PaletteMenuButton = (props) => {
  return /* @__PURE__ */ React.createElement(Button, __spreadValues({}, props));
};

// src/components/palette/PaletteItem.tsx
import React7 from "react";
var PaletteItem = (props) => {
  return /* @__PURE__ */ React7.createElement(
    "div",
    {
      style: __spreadProps(__spreadValues({}, props.style), {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      })
    },
    /* @__PURE__ */ React7.createElement(
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
    /* @__PURE__ */ React7.createElement("div", null, props.name)
  );
};

// src/components/palette/default/PaletteMenuItem.tsx
import { Button as Button2 } from "@headlessui/react";
import { css, jsx } from "@emotion/react";
var PaletteMenuItem = (props) => {
  const style = css`

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
  return /* @__PURE__ */ jsx(
    Button2,
    {
      onClick: props.onClick,
      css: style,
      className: props.active ? "focused" : "unfocused"
    },
    /* @__PURE__ */ jsx(PaletteItem, __spreadValues({}, props.palette))
  );
};

// src/components/palette/PaletteDropdownHeadless.tsx
var PaletteDropdownHeadless = ({
  renderItem = PaletteMenuItem
}) => {
  const palette = useThermalManagerPaletteDrive(uuidv42());
  const Item = renderItem;
  return /* @__PURE__ */ React8.createElement(Menu, { as: PaletteMenu }, /* @__PURE__ */ React8.createElement(MenuButton, { as: PaletteMenuButton }, /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(PaletteItem, __spreadValues({}, palette.palette)))), /* @__PURE__ */ React8.createElement(MenuItems, { as: "p", unmount: true }, Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ React8.createElement(MenuItem, { key }, (itemProps) => /* @__PURE__ */ React8.createElement(
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
import React18, { useMemo as useMemo14 } from "react";

// src/properties/drives/useThermalRegistryRangeDrive.ts
import { useEffect as useEffect6, useMemo as useMemo8, useState as useState5 } from "react";
var useThermalRegistryRangeDrive = (registry, purpose) => {
  const [value, setValue] = useState5(registry.range.value);
  useEffect6(() => {
    registry.range.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.range.removeListener(purpose);
  }, [registry, value, setValue]);
  const set = useMemo8(() => registry.range.imposeRange.bind(registry.range), [registry]);
  useEffect6(() => {
    return () => registry.range.removeListener(purpose);
  }, []);
  return {
    value,
    set
  };
};

// src/properties/states/useThermalRegistryLoadingState.ts
import { useEffect as useEffect7, useState as useState6 } from "react";
var useThermalRegistryLoadingState = (registry, purpose) => {
  const [value, setValue] = useState6(registry.loading.value);
  useEffect7(() => {
    registry.loading.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.loading.removeListener(purpose);
  }, [registry, value, setValue]);
  useEffect7(() => {
    return () => registry.loading.removeListener(purpose);
  }, []);
  return {
    value
  };
};

// src/properties/states/useThermalRegistryMinmaxState.ts
import { useEffect as useEffect8, useState as useState7 } from "react";
var useThermalRegistryMinmaxState = (registry, purpose) => {
  const [value, setValue] = useState7(registry.minmax.value);
  useEffect8(() => {
    registry.minmax.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.minmax.removeListener(purpose);
  }, [registry, setValue]);
  useEffect8(() => {
    return () => registry.minmax.removeListener(purpose);
  }, []);
  return {
    value
  };
};

// src/components/range/RangeHeadlessSkeleton.tsx
import React9 from "react";
var RangeHeadlessSkeleton = () => {
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("style", null, `@keyframes mymove {
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
            }`), /* @__PURE__ */ React9.createElement("div", { style: { width: "100%", height: "20px" } }, /* @__PURE__ */ React9.createElement(
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
import React10 from "react";
var RangerHeadlessContainer = (props) => {
  return /* @__PURE__ */ React10.createElement("div", null, props.children);
};

// src/utilities/orientation.tsx
var Orientation = /* @__PURE__ */ ((Orientation2) => {
  Orientation2["HORIZONTAL"] = "horizontal";
  Orientation2["VERTICAL"] = "vertical";
  return Orientation2;
})(Orientation || {});

// src/components/range/inner/rangerHeadlessInner.tsx
import { useRanger } from "@tanstack/react-ranger";
import React17, { useRef as useRef2 } from "react";

// src/components/histogram/registryHistogram.tsx
import React11, { useMemo as useMemo9 } from "react";
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
  const borderWidth = useMemo9(() => `${borderWidthInPx}px`, [borderWidthInPx]);
  const border = useMemo9(
    () => `${borderWidth} solid ${borderColor}`,
    [borderColor, borderWidth, histogram.value, histogram.resolution]
  );
  const mainCss = useMemo9(() => {
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
  const barCss = useMemo9(() => {
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
  const valueCss = useMemo9(() => {
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
  return /* @__PURE__ */ React11.createElement("div", { style: mainCss }, histogram.value && histogram.value.map((entry) => {
    const height = `${entry.height}%`;
    const css2 = __spreadValues({}, valueCss);
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css2.height = height;
    } else {
      css2.width = height;
    }
    return /* @__PURE__ */ React11.createElement("div", { key: entry.from, style: barCss, "data-height": entry.height, "data-count": entry.count, "data-percentage": entry.percentage }, /* @__PURE__ */ React11.createElement("div", { style: css2 }));
  }));
};

// src/components/range/inner/rangerHandles.tsx
import React12 from "react";
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
  return /* @__PURE__ */ React12.createElement(React12.Fragment, null, props.ranger.handles().map(
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
      return /* @__PURE__ */ React12.createElement(
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
        /* @__PURE__ */ React12.createElement("div", { className: "track", style: innerCss }, /* @__PURE__ */ React12.createElement("div", { style: arrowCss }), /* @__PURE__ */ React12.createElement(
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
import React13 from "react";
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
  return /* @__PURE__ */ React13.createElement(
    "div",
    {
      style: mainCss
    },
    /* @__PURE__ */ React13.createElement("span", { style: labelCss }, props.value.toFixed(2)),
    /* @__PURE__ */ React13.createElement("span", { style: markerCSS })
  );
};

// src/components/range/inner/rangerTrack.tsx
import classNames2 from "classnames";
import React14, { forwardRef, useMemo as useMemo10 } from "react";
var RangerTrack = forwardRef(
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
    const styles = useMemo10(() => {
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
    const classes = useMemo10(
      () => classNames2(
        "lrc__ranger-track",
        `lrc__ranger-track__${orientation}`,
        className
      ),
      [className, orientation]
    );
    return /* @__PURE__ */ React14.createElement("div", __spreadValues({ ref, className: classes, style: styles }, props), props.children);
  }
);

// src/components/range/inner/useRangerTicks.ts
import { useEffect as useEffect10, useState as useState9 } from "react";

// src/utilities/useDimension.ts
import { useEffect as useEffect9, useState as useState8 } from "react";
var useDimension = (ref, orientation) => {
  const [dimension, setDimension] = useState8();
  useEffect9(() => {
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
  const [ticks, setTicks] = useState9([]);
  const width = useDimension(ref, orientation);
  useEffect10(() => {
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
import { useCallback as useCallback2, useEffect as useEffect11, useMemo as useMemo11, useState as useState10 } from "react";
var useRangerValues = (registry, isLocked, rangeOverride) => {
  const purpose = useThermalObjectPurpose(registry, "useRangerValues");
  const minmax = useThermalRegistryMinmaxState(registry, purpose);
  const range = useThermalRegistryRangeDrive(registry, purpose);
  const min = useMemo11(() => {
    return minmax.value.min;
  }, [minmax.value]);
  const max = useMemo11(() => {
    return minmax.value.max;
  }, [minmax.value]);
  const initialState = useMemo11(() => {
    if (rangeOverride !== void 0) {
      return [rangeOverride.from, rangeOverride.to];
    } else if (range.value !== void 0) {
      return [range.value.from, range.value.to];
    }
    return [minmax.value.min, minmax.value.max];
  }, []);
  const [internal, setInternalState] = useState10(initialState);
  useEffect11(() => {
    registry.range.addListener(purpose, (value) => {
      if (value !== void 0) {
        if (isLocked === false && rangeOverride === void 0) {
          setInternalState([value.from, value.to]);
        }
      }
    });
  }, [isLocked, registry]);
  useEffect11(() => {
    if (rangeOverride !== void 0) {
      if (rangeOverride.from !== internal[0] || rangeOverride.to !== internal[1]) {
        setInternalState([rangeOverride.from, rangeOverride.to]);
      }
    }
  }, [rangeOverride]);
  const onChange = useCallback2((instance) => {
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
  const onDrag = useCallback2((instance) => {
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
import classNames3 from "classnames";
import React15, { useMemo as useMemo12 } from "react";
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
  const wrapperCss = useMemo12(() => {
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
  const classes = classNames3(
    "lrc-ranger-container",
    `lrc-ranger-container__${orientation}`,
    className
  );
  return /* @__PURE__ */ React15.createElement("div", { style: wrapperCss }, /* @__PURE__ */ React15.createElement("div", { className: classes, style: css2 }, props.children));
};

// src/components/range/inner/rangerPalette.tsx
import React16, { useMemo as useMemo13 } from "react";
var RangerPalette = (props) => {
  const startInPercent = useMemo13(() => {
    return `${props.ranger.getPercentageForValue(props.values.values[0])}%`;
  }, [props.ranger, props.values]);
  const dimensionInPercent = useMemo13(() => {
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
  return /* @__PURE__ */ React16.createElement(
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
  const rangerRef = useRef2(null);
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
  const rangerInstance = useRanger({
    getRangerElement: () => rangerRef.current,
    min: rangerValue.min,
    max: rangerValue.max,
    values: rangerValue.values,
    onChange: rangerValue.onChange,
    stepSize: props.step,
    ticks: rangerTicks,
    onDrag: rangerValue.onDrag
  });
  return /* @__PURE__ */ React17.createElement(RangerContainerInner, { orientation }, useHistogram && /* @__PURE__ */ React17.createElement(
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
  ), /* @__PURE__ */ React17.createElement(
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
      return /* @__PURE__ */ React17.createElement(
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
    rangerInstance.sortedValues && /* @__PURE__ */ React17.createElement(
      RangerPalette,
      {
        palette: palette.palette,
        ranger: rangerInstance,
        values: rangerValue,
        orientation,
        volumeInPx: trackHeightInPx
      }
    ),
    /* @__PURE__ */ React17.createElement(
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
  const isReady = useMemo14(() => {
    return minmax.value !== void 0 && range.value !== void 0 && loading === false;
  }, [minmax, loading]);
  const Skeleton = renderSkeleton;
  const Container = renderContainer;
  return /* @__PURE__ */ React18.createElement(Container, null, isReady === false && /* @__PURE__ */ React18.createElement(Skeleton, null), isReady === true && /* @__PURE__ */ React18.createElement(
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
import React19, { useCallback as useCallback3 } from "react";
import { Button as Button4 } from "@headlessui/react";
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
  const onClick = useCallback3(() => {
    const length = histogram.value.length;
    const percentage = 100 / length;
    const newRangeTemp = histogram.value.filter((item) => item.height >= percentage);
    const newRange = { from: newRangeTemp[0].from, to: newRangeTemp[newRangeTemp.length - 1].to };
    range.set(newRange);
  }, [minmax.value, range.set, histogram.resolution]);
  return /* @__PURE__ */ React19.createElement(Button4, __spreadProps(__spreadValues({}, props), { onClick }), children);
};

// src/components/rangeButtonFull/rangeButtonFullHeadless.tsx
import React20, { useCallback as useCallback4 } from "react";
import { Button as Button5 } from "@headlessui/react";
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
  const onClick = useCallback4(() => {
    if (minmax.value !== void 0)
      range.set({ from: minmax.value.min, to: minmax.value.max });
  }, [minmax.value, range.set]);
  return /* @__PURE__ */ React20.createElement(Button5, __spreadProps(__spreadValues({}, props), { onClick }), children);
};

// src/context/useThermalRegistry.ts
import { useMemo as useMemo15 } from "react";
var useThermalRegistry = (registryId, options) => {
  const manager = useThermalContext();
  const registry = useMemo15(() => {
    return manager.addOrGetRegistry(registryId, options);
  }, [registryId, manager]);
  return registry;
};

// src/properties/drives/useThermalGroupCursorPositionDrive.ts
import { useEffect as useEffect12, useMemo as useMemo16, useState as useState11 } from "react";
var useThermalGroupCursorPositionDrive = (group, purpose) => {
  const [value, setValue] = useState11(group.cursorPosition.value);
  const [hover, setHover] = useState11(group.cursorPosition.hover);
  useEffect12(() => {
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
  const setCursorPosition = useMemo16(() => group.cursorPosition.recieveCursorPosition.bind(group.cursorPosition), [group]);
  useEffect12(() => {
    return () => group.cursorPosition.removeListener(purpose);
  }, []);
  return {
    value,
    setCursorPosition,
    hover
  };
};

// src/properties/lists/useThermalGroupInstancesState.ts
import { useEffect as useEffect13, useMemo as useMemo17, useState as useState12 } from "react";
var useThermalGroupInstancesState = (group, purpose) => {
  const [value, setValue] = useState12(group.instances.value);
  useEffect13(() => {
    group.instances.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => group.instances.removeListener(purpose);
  }, [group, value, setValue]);
  const instantiateSources = useMemo17(() => group.instances.instantiateSources, [group]);
  const removeAllInstances = useMemo17(() => group.instances.removeAllInstances, [group]);
  useEffect13(() => {
    return () => group.instances.removeListener(purpose);
  }, []);
  return {
    value,
    instantiateSources,
    removeAllInstances
  };
};

// src/properties/lists/useThermalRegistryGroupsState.ts
import { useEffect as useEffect14, useMemo as useMemo18, useState as useState13 } from "react";
var useThermalRegistryGroupsState = (registry, purpose) => {
  const [value, setValue] = useState13(registry.groups.value);
  useEffect14(() => {
    registry.groups.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.groups.removeListener(purpose);
  }, [registry]);
  const addOrGetGroup = useMemo18(() => registry.groups.addOrGetGroup, [registry]);
  const removeAllGroups = useMemo18(() => registry.groups.removeAllGroups, [registry]);
  const removeGroup = useMemo18(() => registry.groups.removeGroup, [registry]);
  useEffect14(() => {
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
import { useEffect as useEffect15, useState as useState14 } from "react";
var useThermalGroupMinmaxState = (group, purpose) => {
  const [value, setValue] = useState14(group.minmax.value);
  useEffect15(() => {
    group.minmax.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => group.minmax.removeListener(purpose);
  }, [group, setValue]);
  useEffect15(() => {
    return () => group.minmax.removeListener(purpose);
  }, []);
  return {
    value
  };
};
export {
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
};
