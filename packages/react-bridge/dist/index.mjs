"use client";
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/dropin/ThermalDropin.tsx
import React2 from "react";

// src/components/instance/thermalInstance.tsx
import classNames from "classnames";
import React, {
  useEffect,
  useMemo as useMemo2,
  useRef
} from "react";
import { createPortal } from "react-dom";

// src/components/instance/useInstanceListener.ts
import { useMemo } from "react";
var useInstanceListener = (listener, instance) => {
  return useMemo(() => {
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
  useEffect(() => {
    if (ref.current) {
      instance.mountToDom(ref.current);
      instance.draw();
    }
    return () => instance.unmountFromDom();
  }, [instance]);
  const css = useMemo2(() => {
    const st = style;
    st.position = "relative";
    st.padding = 0;
    st.margin = 0;
    return st;
  }, [style]);
  const classes = useMemo2(() => {
    return classNames(className, "lrc__instance-canvas");
  }, [className]);
  const onClick = useInstanceListener(props.onClick, instance);
  const onMouseEnter = useInstanceListener(props.onMouseEnter, instance);
  const onMouseMove = useInstanceListener(props.onMouseMove, instance);
  const onMouseLeave = useInstanceListener(props.onMouseLeave, instance);
  const listenerElement = useMemo2(() => {
    return instance.listenerLayer.getLayerRoot();
  }, [instance]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      className: classes,
      style: css,
      onClick,
      onMouseEnter,
      onMouseMove,
      onMouseLeave
    }
  ), children && createPortal(children, listenerElement));
};

// src/components/dropin/useThermalDropin.ts
import { ThermalFileReader } from "@labir/core";
import { useDropzone } from "react-dropzone";

// src/properties/lists/useThermalGroupInstancesState.ts
import { useEffect as useEffect2, useState } from "react";
var useThermalGroupInstancesState = (group, purpose) => {
  const [value, setValue] = useState(group.files.value);
  useEffect2(() => {
    group.files.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => group.files.removeListener(purpose);
  }, [group, value, setValue]);
  useEffect2(() => {
    return () => group.files.removeListener(purpose);
  }, []);
  return {
    value
  };
};

// src/context/useThermalObjectPurpose.ts
import { ThermalRegistry, ThermalGroup, ThermalManager, Instance } from "@labir/core";
import { useMemo as useMemo3 } from "react";
import { v4 as uuidv4 } from "uuid";
var useThermalObjectPurpose = (object, purpose, individual = false) => {
  return useMemo3(() => {
    const iteration = (Math.random() * 1e4).toFixed(0);
    let objectType = "object";
    if (object instanceof ThermalRegistry)
      objectType = "registry";
    else if (object instanceof ThermalGroup)
      objectType = "group";
    else if (object instanceof Instance)
      objectType = "instance";
    else if (object instanceof ThermalManager)
      objectType = "manager";
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

// src/components/dropin/useThermalDropin.ts
var useThermalDropin = (registry, groupId) => {
  const ID = useThermalObjectPurpose(registry, "useThermalDropin", true);
  const group = registry.groups.addOrGetGroup(groupId);
  const dropzone = useDropzone({
    onDrop: (acceptedFiles) => __async(void 0, null, function* () {
      yield Promise.all(
        acceptedFiles.map((file) => __async(void 0, null, function* () {
          const result = yield registry.service.loadUploadedFile(file);
          if (result instanceof ThermalFileReader) {
            return yield result.createInstance(group);
          }
        }))
      );
      registry.postLoadedProcessing();
    }),
    accept: {
      "application/x-binary": [".lrc"]
    }
  });
  const instances = useThermalGroupInstancesState(group, ID);
  return {
    group,
    instances,
    dropzone
  };
};

// src/components/dropin/ThermalDropin.tsx
var ThermalDropin = (props) => {
  const { instances, dropzone } = useThermalDropin(
    props.registry,
    props.groupId
  );
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("div", __spreadValues({}, dropzone.getRootProps()), "Dropin", /* @__PURE__ */ React2.createElement("input", __spreadValues({}, dropzone.getInputProps())), dropzone.isDragActive ? /* @__PURE__ */ React2.createElement("p", null, "Drop the files here ...") : /* @__PURE__ */ React2.createElement("p", null, "Drag 'n' drop some files here, or click to select files")), instances.value.map((instance) => /* @__PURE__ */ React2.createElement(ThermalInstance, { key: instance.id, instance })));
};

// src/components/histogram/thermalRegistryHistogram.tsx
import React3, { useMemo as useMemo5 } from "react";

// src/properties/states/useThermalRegistryHistogramState.ts
import { useEffect as useEffect3, useMemo as useMemo4, useState as useState2 } from "react";
var useThermalRegistryHistogramState = (registry, purpose) => {
  const [value, setValue] = useState2(registry.histogram.value);
  useEffect3(() => {
    registry.histogram.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.histogram.removeListener(purpose);
  }, [registry, value, setValue]);
  const setResolution = useMemo4(() => registry.histogram.setResolution.bind(registry.histogram), [registry]);
  const recalculate = useMemo4(() => registry.histogram.recalculateWithCurrentSetting.bind(registry.histogram), [registry]);
  const resolution = useMemo4(() => registry.histogram.resolution, [registry.histogram.resolution]);
  useEffect3(() => {
    return () => registry.histogram.removeListener(purpose);
  }, []);
  return {
    value,
    setResolution,
    recalculate,
    resolution
  };
};

// src/utilities/orientation.tsx
var Orientation = /* @__PURE__ */ ((Orientation2) => {
  Orientation2["HORIZONTAL"] = "horizontal";
  Orientation2["VERTICAL"] = "vertical";
  return Orientation2;
})(Orientation || {});

// src/components/histogram/thermalRegistryHistogram.tsx
var ThermalRegistryHistogram = (_a) => {
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
  const borderWidth = useMemo5(() => `${borderWidthInPx}px`, [borderWidthInPx]);
  const border = useMemo5(
    () => `${borderWidth} solid ${borderColor}`,
    [borderColor, borderWidth, histogram.value, histogram.resolution]
  );
  const mainCss = useMemo5(() => {
    const css = {
      borderStyle: "solid",
      borderColor,
      backgroundColor: background,
      display: "flex"
    };
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css.width = "100%";
      css.marginBottom = "25px";
      css.borderRightWidth = 0;
      css.borderTopWidth = borderWidth;
      css.borderBottomWidth = borderWidth;
      css.borderLeftWidth = borderWidth;
    } else {
      css.borderBottomWidth = 0;
      css.borderLeftWidth = borderWidth;
      css.borderRightWidth = borderWidth;
      css.borderTopWidth = borderWidth;
      css.marginLeft = "100px";
      css.height = "100%";
      css.position = "absolute";
      css.flexDirection = "column";
    }
    return css;
  }, [borderColor, background, orientation, histogram.value, histogram.resolution]);
  const barCss = useMemo5(() => {
    const css = {
      position: "relative",
      boxSizing: "border-box",
      flexGrow: "1"
    };
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css.height = `${sizeInPx}px`;
      css.width = `${100 / histogram.value.length}%`;
      css.borderRight = border;
    } else {
      css.width = `${sizeInPx}px`;
      css.height = `${100 / histogram.value.length}%`;
      css.borderBottom = border;
    }
    return css;
  }, [border, borderWidth, orientation, sizeInPx, histogram.value, histogram.resolution]);
  const valueCss = useMemo5(() => {
    const css = {
      position: "absolute",
      content: "",
      background: barBackground
    };
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css.bottom = "0px";
      css.left = "0px";
      css.width = "100%";
    } else {
      css.height = "100%";
      css.top = "0px";
      css.left = "0px";
    }
    return css;
  }, [orientation, barBackground, histogram.value, histogram.resolution]);
  return /* @__PURE__ */ React3.createElement("div", { style: mainCss }, histogram.value && histogram.value.map((entry) => {
    const height = `${entry.height}%`;
    const css = __spreadValues({}, valueCss);
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css.height = height;
    } else {
      css.width = height;
    }
    return /* @__PURE__ */ React3.createElement("div", { key: entry.from, style: barCss, "data-height": entry.height, "data-count": entry.count, "data-percentage": entry.percentage }, /* @__PURE__ */ React3.createElement("div", { style: css }));
  }));
};

// src/components/histogramResolutionInput/useHistogramResolutionInput.ts
import { useCallback, useEffect as useEffect4, useState as useState3 } from "react";
var useHistogramResolutionInput = (registry) => {
  const ID = useThermalObjectPurpose(
    registry,
    "useHistogramResolutionInput",
    true
  );
  const histogram = useThermalRegistryHistogramState(registry, ID);
  const [internal, setInternal] = useState3(histogram.resolution);
  useEffect4(() => {
    if (internal)
      if (internal >= 2 && internal <= 400) {
        if (internal !== histogram.resolution) {
          histogram.setResolution(Math.round(internal));
        }
      } else {
        setInternal(Math.min(Math.max(internal, 2), 200));
      }
  }, [internal, histogram.resolution, histogram.setResolution]);
  useEffect4(() => {
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
  return {
    onChange,
    onBlur,
    internal
  };
};

// src/properties/drives/useThermalRegistryOpacityDrive.ts
import { useEffect as useEffect5, useMemo as useMemo6, useState as useState4 } from "react";
var useThermalRegistryOpacityDrive = (registry, purpose) => {
  const [value, setValue] = useState4(registry.opacity.value);
  useEffect5(() => {
    registry.opacity.addListener(purpose, (newValue) => {
      if (newValue !== value) {
        setValue(newValue);
      }
    });
    return () => registry.opacity.removeListener(purpose);
  }, [registry, value, setValue]);
  const set = useMemo6(() => registry.opacity.imposeOpacity.bind(registry.opacity), [registry]);
  useEffect5(() => {
    return () => registry.opacity.removeListener(purpose);
  }, []);
  return {
    value,
    set
  };
};

// src/components/opacity/useOpacityInput.ts
var useOpacityInput = (registry) => {
  const purpose = useThermalObjectPurpose(registry, "useOpacityInput", true);
  const opacity = useThermalRegistryOpacityDrive(registry, purpose);
  const onChange = (event) => {
    opacity.set(parseFloat(event.target.value));
  };
  return {
    onChange,
    opacity
  };
};

// src/components/palette/PaletteGradientDisplay.tsx
import React4 from "react";
var PaletteGgradientDisplay = (props) => {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      style: __spreadProps(__spreadValues({}, props.style), {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      })
    },
    /* @__PURE__ */ React4.createElement(
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
    /* @__PURE__ */ React4.createElement("div", null, props.name)
  );
};

// src/components/range/ThermalRegistryRange.tsx
import React14, { useMemo as useMemo14 } from "react";

// src/properties/drives/useThermalRegistryRangeDrive.ts
import { useEffect as useEffect6, useMemo as useMemo7, useState as useState5 } from "react";
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
  const set = useMemo7(() => registry.range.imposeRange.bind(registry.range), [registry]);
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
import React5 from "react";
var RangeHeadlessSkeleton = () => {
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("style", null, `@keyframes mymove {
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
            }`), /* @__PURE__ */ React5.createElement("div", { style: { width: "100%", height: "20px" } }, /* @__PURE__ */ React5.createElement(
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
import React6 from "react";
var RangerHeadlessContainer = (props) => {
  return /* @__PURE__ */ React6.createElement("div", null, props.children);
};

// src/components/range/inner/rangerHeadlessInner.tsx
import { useRanger } from "@tanstack/react-ranger";
import React13, { useRef as useRef2 } from "react";

// src/properties/drives/useThermalRegistryPaletteDrive.ts
import { ThermalPalettes } from "@labir/core";
import { useEffect as useEffect9, useMemo as useMemo9, useState as useState8 } from "react";

// src/context/thermalManagerContext.tsx
import React7, { createContext, useContext } from "react";

// src/context/useThermalManagerInternal.ts
import { ThermalManager as ThermalManager2 } from "@labir/core";
import { useMemo as useMemo8 } from "react";
var useThermalManagerInternal = (pool, options, externalInstance) => {
  return useMemo8(() => {
    if (externalInstance)
      return externalInstance;
    return new ThermalManager2(pool, options);
  }, []);
};

// src/context/thermalManagerContext.tsx
var ThermalManagerContext = createContext(null);
var ThermalProvider = ({ pool, options, externalManagerInstance, children }) => {
  const value = useThermalManagerInternal(pool, options, externalManagerInstance);
  return /* @__PURE__ */ React7.createElement(ThermalManagerContext.Provider, { value }, children);
};
var useThermalContext = () => {
  return useContext(ThermalManagerContext);
};

// src/properties/drives/useThermalRegistryPaletteDrive.ts
var useThermalManagerPaletteDrive = (purpose) => {
  const manager = useThermalContext();
  const [value, setValue] = useState8(manager.palette.value);
  const [palette, setPalette] = useState8(manager.palette.currentPalette);
  useEffect9(() => {
    manager.palette.addListener(purpose, (newValue) => {
      setValue(newValue);
      setPalette(manager.palette.currentPalette);
    });
    return () => manager.palette.removeListener(purpose);
  }, [manager, value, setValue, palette, setPalette]);
  const set = useMemo9(() => manager.palette.setPalette.bind(manager.palette), [manager]);
  useEffect9(() => {
    return () => manager.palette.removeListener(purpose);
  }, []);
  const availablePalettes = useMemo9(() => {
    return ThermalPalettes;
  }, []);
  return {
    value,
    palette,
    set,
    availablePalettes
  };
};

// src/components/range/inner/rangerHandles.tsx
import React8 from "react";
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
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, props.ranger.handles().map(
    ({
      value,
      onKeyDownHandler,
      onMouseDownHandler,
      onTouchStart
    }, index) => {
      const css = {
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
        css.top = "0%";
        css.left = `${props.ranger.getPercentageForValue(value)}%`;
        innerCss.left = "-20px";
        innerCss.top = `${trackSizeInPx + 5}px`;
        innerCss.textAlign = "center";
        arrowCss.top = -3;
        arrowCss.left = "40%";
      } else {
        css.left = "0%";
        css.top = `${props.ranger.getPercentageForValue(value)}%`;
        innerCss.left = `${trackSizeInPx + 5}px`;
        innerCss.marginTop = "-10px";
        arrowCss.left = -3;
        arrowCss.top = 4;
      }
      return /* @__PURE__ */ React8.createElement(
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
          style: css
        },
        /* @__PURE__ */ React8.createElement("div", { className: "track", style: innerCss }, /* @__PURE__ */ React8.createElement("div", { style: arrowCss }), /* @__PURE__ */ React8.createElement(
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
import React9 from "react";
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
    mainCss.width = "35px";
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
  return /* @__PURE__ */ React9.createElement(
    "div",
    {
      style: mainCss
    },
    /* @__PURE__ */ React9.createElement("span", { style: labelCss }, props.value.toFixed(2)),
    /* @__PURE__ */ React9.createElement("span", { style: markerCSS })
  );
};

// src/components/range/inner/rangerTrack.tsx
import classNames2 from "classnames";
import React10, { forwardRef, useMemo as useMemo10 } from "react";
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
      const css = {
        position: "relative",
        userSelect: "none",
        background: backgroundColor
      };
      if (orientation === "horizontal" /* HORIZONTAL */) {
        css.height = `${volumeInPx}px`;
        css.width = "100%";
        css.marginBottom = "30px";
      } else {
        css.width = `${volumeInPx}px`;
        css.height = "100%";
        css.marginRight = "50px";
      }
      return css;
    }, [backgroundColor, orientation, volumeInPx]);
    const classes = useMemo10(
      () => classNames2(
        "lrc__ranger-track",
        `lrc__ranger-track__${orientation}`,
        className
      ),
      [className, orientation]
    );
    return /* @__PURE__ */ React10.createElement("div", __spreadValues({ ref, className: classes, style: styles }, props), props.children);
  }
);

// src/components/range/inner/useRangerTicks.ts
import { useEffect as useEffect11, useState as useState10 } from "react";

// src/utilities/useDimension.ts
import { useEffect as useEffect10, useState as useState9 } from "react";
var useDimension = (ref, orientation) => {
  const [dimension, setDimension] = useState9();
  useEffect10(() => {
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
  const [ticks, setTicks] = useState10([]);
  const width = useDimension(ref, orientation);
  useEffect11(() => {
    if (minmax.value && width !== void 0) {
      const totalDistance = Math.abs(
        minmax.value.min - minmax.value.max
      );
      const num = Math.floor(width / 50);
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
import { useCallback as useCallback2, useEffect as useEffect12, useMemo as useMemo11, useState as useState11 } from "react";
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
  const [internal, setInternalState] = useState11(initialState);
  useEffect12(() => {
    registry.range.addListener(purpose, (value) => {
      if (value !== void 0) {
        if (isLocked === false && rangeOverride === void 0) {
          setInternalState([value.from, value.to]);
        }
      }
    });
  }, [isLocked, registry]);
  useEffect12(() => {
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
import React11, { useMemo as useMemo12 } from "react";
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
  const css = __spreadProps(__spreadValues({}, style), {
    position: "relative",
    display: "flex"
  });
  if (orientation === "horizontal" /* HORIZONTAL */) {
    css.width = "100%";
    css.flexDirection = "column";
  } else {
    css.paddingLeft = "20px";
    css.paddingRight = "20px";
    css.height = "400px";
  }
  const wrapperCss = useMemo12(() => {
    const css2 = {};
    if (orientation === "horizontal" /* HORIZONTAL */) {
      css2.paddingLeft = "20px";
      css2.paddingRight = "20px";
    } else {
      css2.paddingTop = "10px";
      css2.paddingBottom = "10px";
    }
    return css2;
  }, [orientation]);
  const classes = classNames3(
    "lrc-ranger-container",
    `lrc-ranger-container__${orientation}`,
    className
  );
  return /* @__PURE__ */ React11.createElement("div", { style: wrapperCss }, /* @__PURE__ */ React11.createElement("div", { className: classes, style: css }, props.children));
};

// src/components/range/inner/rangerPalette.tsx
import React12, { useMemo as useMemo13 } from "react";
var RangerPalette = (props) => {
  const startInPercent = useMemo13(() => {
    return `${props.ranger.getPercentageForValue(props.values.values[0])}%`;
  }, [props.ranger, props.values]);
  const dimensionInPercent = useMemo13(() => {
    return `${props.ranger.getPercentageForValue(props.values.values[1]) - props.ranger.getPercentageForValue(props.values.values[0])}%`;
  }, [props.ranger, props.values]);
  const css = {
    position: "absolute",
    background: props.palette.gradient
  };
  if (props.orientation === "horizontal" /* HORIZONTAL */) {
    css.left = startInPercent;
    css.width = dimensionInPercent;
    css.top = "0px";
    css.height = `${props.volumeInPx}px`;
  } else {
    css.top = startInPercent;
    css.height = dimensionInPercent;
    css.left = "0px";
    css.width = `${props.volumeInPx}px`;
    css.background = props.palette.gradient.replace("90deg", "0deg");
  }
  return /* @__PURE__ */ React12.createElement(
    "div",
    {
      style: css,
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
  return /* @__PURE__ */ React13.createElement(RangerContainerInner, { orientation }, useHistogram && /* @__PURE__ */ React13.createElement(
    ThermalRegistryHistogram,
    {
      registry: props.registry,
      sizeInPx: histogramSizeInPx,
      borderColor: histogramBorderColor,
      borderWidthInPx: histogramBorderWidthInPx,
      barBackground: histogramBarBackground,
      background: histogramBackground,
      orientation
    }
  ), /* @__PURE__ */ React13.createElement(
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
      return /* @__PURE__ */ React13.createElement(
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
    rangerInstance.sortedValues && /* @__PURE__ */ React13.createElement(
      RangerPalette,
      {
        palette: palette.palette,
        ranger: rangerInstance,
        values: rangerValue,
        orientation,
        volumeInPx: trackHeightInPx
      }
    ),
    /* @__PURE__ */ React13.createElement(
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

// src/components/range/ThermalRegistryRange.tsx
var ThermalRegistryRange = (_a) => {
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
  return /* @__PURE__ */ React14.createElement(Container, null, isReady === false && /* @__PURE__ */ React14.createElement(Skeleton, null), isReady === true && /* @__PURE__ */ React14.createElement(
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

// src/components/rangeButtonAuto.tsx/useRangeButtonAuto.ts
import { useCallback as useCallback3 } from "react";
var useRangeButtonAuto = (registry) => {
  const ID = useThermalObjectPurpose(registry, "useRangeButtonAuto");
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
  return {
    onClick
  };
};

// src/components/rangeButtonFull/useRangeButtonFull.ts
import { useCallback as useCallback4 } from "react";
var useRangeButtonFull = (registry) => {
  const ID = useThermalObjectPurpose(registry, "useRangeButtonFull");
  const range = useThermalRegistryRangeDrive(registry, ID);
  const minmax = useThermalRegistryMinmaxState(registry, ID);
  const onClick = useCallback4(() => {
    if (minmax.value !== void 0)
      range.set({ from: minmax.value.min, to: minmax.value.max });
  }, [minmax.value, range.set]);
  return {
    onClick
  };
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
import { useEffect as useEffect13, useMemo as useMemo16, useState as useState12 } from "react";
var useThermalGroupCursorPositionDrive = (group, purpose) => {
  const [value, setValue] = useState12(group.cursorPosition.value);
  const [hover, setHover] = useState12(group.cursorPosition.hover);
  useEffect13(() => {
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
  useEffect13(() => {
    return () => group.cursorPosition.removeListener(purpose);
  }, []);
  return {
    value,
    setCursorPosition,
    hover
  };
};

// src/properties/lists/useThermalRegistryGroupsState.ts
import { useEffect as useEffect14, useMemo as useMemo17, useState as useState13 } from "react";
var useThermalRegistryGroupsState = (registry, purpose) => {
  const [value, setValue] = useState13(registry.groups.value);
  useEffect14(() => {
    registry.groups.addListener(purpose, (newValue) => {
      setValue(newValue);
    });
    return () => registry.groups.removeListener(purpose);
  }, [registry]);
  const addOrGetGroup = useMemo17(() => registry.groups.addOrGetGroup, [registry]);
  const removeAllGroups = useMemo17(() => registry.groups.removeAllGroups, [registry]);
  const removeGroup = useMemo17(() => registry.groups.removeGroup, [registry]);
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

// src/shorthands/useFilesInGroup.ts
import { useEffect as useEffect16, useMemo as useMemo18 } from "react";
var useFilesInGroup = (urls, registryId, groupId) => {
  const manager = useThermalContext();
  const registryIdMemoised = useMemo18(() => registryId, []);
  const groupIdMemoised = useMemo18(() => groupId, []);
  const registry = useMemo18(() => manager.addOrGetRegistry(registryIdMemoised), []);
  const group = useMemo18(() => registry.groups.addOrGetGroup(groupIdMemoised), []);
  useEffect16(() => {
    registry.loadFullMultipleFiles({
      [group.id]: urls.map((url) => ({
        thermalUrl: url
      }))
    });
  }, []);
  useEffect16(() => {
    () => manager.removeRegistry(registryIdMemoised);
  }, []);
  const instances = useThermalGroupInstancesState(group, registryIdMemoised);
  useEffect16(() => {
  }, [registry]);
  return {
    registry,
    group,
    instances
  };
};

// src/shorthands/useSingleFileRegistry.ts
import { useEffect as useEffect17, useMemo as useMemo19, useState as useState15 } from "react";
import { v4 as uuid } from "uuid";
var useSingleFileRegistry = (thermalUrl, visibleUrl) => {
  const manager = useThermalContext();
  const registryId = useMemo19(() => {
    return `isolated_context_${thermalUrl}_${uuid()}`;
  }, [thermalUrl]);
  const groupId = useMemo19(() => "isolated_default_group", []);
  const registry = manager.addOrGetRegistry(registryId);
  const group = registry.groups.addOrGetGroup(groupId);
  useEffect17(() => {
    registry.loadFullOneFile({
      thermalUrl,
      visibleUrl
    }, group.id);
    return () => registry.destroySelfInTheManager();
  }, [thermalUrl]);
  const [instance, setInstance] = useState15();
  const instances = useThermalGroupInstancesState(group, registryId);
  useEffect17(() => {
    if (instances.value.length > 0) {
      setInstance(instances.value[0]);
    } else {
      setInstance(void 0);
    }
  }, [instances.value]);
  useEffect17(() => {
  }, [registry]);
  return {
    registry,
    group,
    instance
  };
};
export {
  Orientation,
  PaletteGgradientDisplay,
  ThermalDropin,
  ThermalInstance,
  ThermalProvider,
  ThermalRegistryHistogram,
  ThermalRegistryRange,
  useFilesInGroup,
  useHistogramResolutionInput,
  useOpacityInput,
  useRangeButtonAuto,
  useRangeButtonFull,
  useSingleFileRegistry,
  useThermalContext,
  useThermalDropin,
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
