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
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
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
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// dist/index.js
var require_dist = __commonJS({
  "dist/index.js"(exports, module) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __defProps2 = Object.defineProperties;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
    var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues2 = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp2.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      if (__getOwnPropSymbols2)
        for (var prop of __getOwnPropSymbols2(b)) {
          if (__propIsEnum2.call(b, prop))
            __defNormalProp2(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
    var __objRest2 = (source, exclude) => {
      var target = {};
      for (var prop in source)
        if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
          target[prop] = source[prop];
      if (source != null && __getOwnPropSymbols2)
        for (var prop of __getOwnPropSymbols2(source)) {
          if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
            target[prop] = source[prop];
        }
      return target;
    };
    var __commonJS2 = (cb, mod) => function __require2() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var require_dist2 = __commonJS2({
      "dist/index.js"(exports2, module2) {
        "use strict";
        var __create22 = Object.create;
        var __defProp22 = Object.defineProperty;
        var __defProps22 = Object.defineProperties;
        var __getOwnPropDesc22 = Object.getOwnPropertyDescriptor;
        var __getOwnPropDescs22 = Object.getOwnPropertyDescriptors;
        var __getOwnPropNames22 = Object.getOwnPropertyNames;
        var __getOwnPropSymbols22 = Object.getOwnPropertySymbols;
        var __getProtoOf22 = Object.getPrototypeOf;
        var __hasOwnProp22 = Object.prototype.hasOwnProperty;
        var __propIsEnum22 = Object.prototype.propertyIsEnumerable;
        var __defNormalProp22 = (obj, key, value) => key in obj ? __defProp22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
        var __spreadValues22 = (a, b) => {
          for (var prop in b || (b = {}))
            if (__hasOwnProp22.call(b, prop))
              __defNormalProp22(a, prop, b[prop]);
          if (__getOwnPropSymbols22)
            for (var prop of __getOwnPropSymbols22(b)) {
              if (__propIsEnum22.call(b, prop))
                __defNormalProp22(a, prop, b[prop]);
            }
          return a;
        };
        var __spreadProps22 = (a, b) => __defProps22(a, __getOwnPropDescs22(b));
        var __objRest22 = (source, exclude) => {
          var target = {};
          for (var prop in source)
            if (__hasOwnProp22.call(source, prop) && exclude.indexOf(prop) < 0)
              target[prop] = source[prop];
          if (source != null && __getOwnPropSymbols22)
            for (var prop of __getOwnPropSymbols22(source)) {
              if (exclude.indexOf(prop) < 0 && __propIsEnum22.call(source, prop))
                target[prop] = source[prop];
            }
          return target;
        };
        var __commonJS22 = (cb, mod) => function __require2() {
          return mod || (0, cb[__getOwnPropNames22(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        };
        var __export2 = (target, all) => {
          for (var name in all)
            __defProp22(target, name, { get: all[name], enumerable: true });
        };
        var __copyProps22 = (to, from, except, desc) => {
          if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames22(from))
              if (!__hasOwnProp22.call(to, key) && key !== except)
                __defProp22(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc22(from, key)) || desc.enumerable });
          }
          return to;
        };
        var __toESM22 = (mod, isNodeMode, target) => (target = mod != null ? __create22(__getProtoOf22(mod)) : {}, __copyProps22(
          // If the importer is in node compatibility mode or this is not an ESM
          // file that has been converted to a CommonJS file using a Babel-
          // compatible transform (i.e. "__esModule" has not been set), then set
          // "default" to the CommonJS "module.exports" for node compatibility.
          isNodeMode || !mod || !mod.__esModule ? __defProp22(target, "default", { value: mod, enumerable: true }) : target,
          mod
        ));
        var __toCommonJS2 = (mod) => __copyProps22(__defProp22({}, "__esModule", { value: true }), mod);
        var require_dist22 = __commonJS22({
          "dist/index.js"(exports22, module22) {
            "use strict";
            var __create222 = Object.create;
            var __defProp222 = Object.defineProperty;
            var __defProps222 = Object.defineProperties;
            var __getOwnPropDesc222 = Object.getOwnPropertyDescriptor;
            var __getOwnPropDescs222 = Object.getOwnPropertyDescriptors;
            var __getOwnPropNames222 = Object.getOwnPropertyNames;
            var __getOwnPropSymbols222 = Object.getOwnPropertySymbols;
            var __getProtoOf222 = Object.getPrototypeOf;
            var __hasOwnProp222 = Object.prototype.hasOwnProperty;
            var __propIsEnum222 = Object.prototype.propertyIsEnumerable;
            var __defNormalProp222 = (obj, key, value) => key in obj ? __defProp222(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
            var __spreadValues222 = (a, b) => {
              for (var prop in b || (b = {}))
                if (__hasOwnProp222.call(b, prop))
                  __defNormalProp222(a, prop, b[prop]);
              if (__getOwnPropSymbols222)
                for (var prop of __getOwnPropSymbols222(b)) {
                  if (__propIsEnum222.call(b, prop))
                    __defNormalProp222(a, prop, b[prop]);
                }
              return a;
            };
            var __spreadProps222 = (a, b) => __defProps222(a, __getOwnPropDescs222(b));
            var __objRest222 = (source, exclude) => {
              var target = {};
              for (var prop in source)
                if (__hasOwnProp222.call(source, prop) && exclude.indexOf(prop) < 0)
                  target[prop] = source[prop];
              if (source != null && __getOwnPropSymbols222)
                for (var prop of __getOwnPropSymbols222(source)) {
                  if (exclude.indexOf(prop) < 0 && __propIsEnum222.call(source, prop))
                    target[prop] = source[prop];
                }
              return target;
            };
            var __export22 = (target, all) => {
              for (var name in all)
                __defProp222(target, name, { get: all[name], enumerable: true });
            };
            var __copyProps222 = (to, from, except, desc) => {
              if (from && typeof from === "object" || typeof from === "function") {
                for (let key of __getOwnPropNames222(from))
                  if (!__hasOwnProp222.call(to, key) && key !== except)
                    __defProp222(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc222(from, key)) || desc.enumerable });
              }
              return to;
            };
            var __toESM222 = (mod, isNodeMode, target) => (target = mod != null ? __create222(__getProtoOf222(mod)) : {}, __copyProps222(
              // If the importer is in node compatibility mode or this is not an ESM
              // file that has been converted to a CommonJS file using a Babel-
              // compatible transform (i.e. "__esModule" has not been set), then set
              // "default" to the CommonJS "module.exports" for node compatibility.
              isNodeMode || !mod || !mod.__esModule ? __defProp222(target, "default", { value: mod, enumerable: true }) : target,
              mod
            ));
            var __toCommonJS22 = (mod) => __copyProps222(__defProp222({}, "__esModule", { value: true }), mod);
            var src_exports22 = {};
            __export22(src_exports22, {
              Bar: () => Bar222,
              CssContextProvider: () => CssContextProvider222,
              DownloadDropdown: () => DownloadDropdown222,
              PaletteDropdown: () => PaletteDropdown222,
              Skin: () => Skin322,
              ThermalHistogramResolutionInput: () => ThermalHistogramResolutionInput222,
              ThermalOpacityInput: () => ThermalOpacityInput222,
              ThermalRangeAutoButton: () => ThermalRangeAutoButton222,
              ThermalRangeFullButton: () => ThermalRangeFullButton222,
              useCss: () => useCss222,
              useHeadCss: () => useHeadCss222
            });
            module22.exports = __toCommonJS22(src_exports22);
            var import_react_bridge622 = __require("@labir/react-bridge");
            var import_react4222 = __toESM222(__require("react"));
            var import_react2222 = __require("@headlessui/react");
            var import_react3222 = __toESM222(__require("react"));
            var _Skin222 = class _Skin3 {
              static key(key) {
                return `--${_Skin3.prefix}-${key}`;
              }
              static value(key) {
                return `var( ${_Skin3.key(key)} )`;
              }
              static colorKey(color, tone = 500) {
                return `--${_Skin3.prefix}-${color}-${tone}`;
              }
              static colorValue(color, tone = 500) {
                return _Skin3.value(`${color}-${tone}`);
              }
              static breakpointValue(bp) {
                return _Skin3.value(`bp-${bp}`);
              }
              static gapValue(aspect) {
                if (aspect === void 0)
                  return _Skin3.value("gap");
                return `calc( ${_Skin3.value("gap")} * ${aspect} )`;
              }
            };
            _Skin222.prefix = "lrc";
            var Skin322 = _Skin222;
            var import_react1722 = __toESM222(__require("react"));
            var package_default222 = {
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
            var Variables222 = class {
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
                this.breakpoints = {
                  xs: 0,
                  sm: 640,
                  md: 900,
                  lg: 1200,
                  xl: 1450
                };
                this.gap = {
                  xs: "15px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                  xl: "22px"
                };
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
                    return [Skin322.key(`${color}-${tone}`), value];
                  }));
                }
                const items = {};
                items[Skin322.key(`${color}-50`)] = slot["900"];
                items[Skin322.key(`${color}-100`)] = slot["800"];
                items[Skin322.key(`${color}-200`)] = slot["700"];
                items[Skin322.key(`${color}-300`)] = slot["600"];
                items[Skin322.key(`${color}-400`)] = slot["500"];
                items[Skin322.key(`${color}-500`)] = slot["400"];
                items[Skin322.key(`${color}-600`)] = slot["300"];
                items[Skin322.key(`${color}-700`)] = slot["200"];
                items[Skin322.key(`${color}-800`)] = slot["100"];
                items[Skin322.key(`${color}-900`)] = slot["50"];
                return items;
              }
              /** Get variables of all colors */
              getColorsVariables(inverse = false) {
                return __spreadValues222(__spreadValues222(__spreadValues222(__spreadValues222(__spreadValues222({}, this.getColorVariables("primary", inverse)), this.getColorVariables("secondary", inverse)), this.getColorVariables("gray", inverse)), this.getColorVariables("success", inverse)), this.getColorVariables("danger", inverse));
              }
              getFontVariables() {
                return {
                  [Skin322.key("font-size-xs")]: this.fontSize.xs,
                  [Skin322.key("font-size-sm")]: this.fontSize.sm,
                  [Skin322.key("font-size-md")]: this.fontSize.md,
                  [Skin322.key("font-size-lg")]: this.fontSize.lg,
                  [Skin322.key("font-size-xl")]: this.fontSize.xl
                };
              }
              getGapVariables() {
                return {
                  [Skin322.key("gap-xs")]: this.gap.xs,
                  [Skin322.key("gap-sm")]: this.gap.sm,
                  [Skin322.key("gap-md")]: this.gap.md,
                  [Skin322.key("gap-lg")]: this.gap.lg,
                  [Skin322.key("gap-xl")]: this.gap.xl
                };
              }
              getBreakpointsVariables() {
                return {
                  [Skin322.key("bp-xs")]: `${this.breakpoints.xs}px`,
                  [Skin322.key("bp-sm")]: `${this.breakpoints.sm}px`,
                  [Skin322.key("bp-md")]: `${this.breakpoints.md}px`,
                  [Skin322.key("bp-lg")]: `${this.breakpoints.lg}px`,
                  [Skin322.key("bp-xl")]: `${this.breakpoints.xl}px`
                };
              }
              /** Dump index of variables into a string */
              static printCss(styles) {
                return Object.entries(styles).map(([property, value]) => `${property}:${value};`).join("\n");
              }
            };
            var useCssInternal222 = (appRoot = void 0, prefix = "lrc") => {
              const elementsInHead = (0, import_react1722.useRef)({});
              const elementsInRoot = (0, import_react1722.useRef)({});
              const head = (0, import_react1722.useMemo)(() => document.head, []);
              const root = (0, import_react1722.useMemo)(() => {
                return appRoot !== void 0 ? appRoot : document.head;
              }, [appRoot]);
              const getId = (0, import_react1722.useCallback)(
                (key) => `${prefix}__${package_default222.version}__${key}`,
                [prefix]
              );
              const styleElementFactory = (0, import_react1722.useCallback)(
                (key, style) => {
                  const element = document.createElement("style");
                  element.id = getId(key);
                  element.innerHTML = style;
                  return element;
                },
                [getId]
              );
              const styleExists = (0, import_react1722.useCallback)(
                (key) => {
                  return key in elementsInRoot.current;
                },
                [elementsInRoot]
              );
              const getExistingStyle = (0, import_react1722.useCallback)(
                (key) => {
                  if (styleExists(key)) {
                    return elementsInRoot.current[key];
                  }
                  return void 0;
                },
                [elementsInRoot, styleExists]
              );
              const addHeadCss = (0, import_react1722.useCallback)(
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
              const addCss = (0, import_react1722.useCallback)(
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
              const removeCss = (0, import_react1722.useCallback)(
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
            var cssContextDefaults222 = {
              addCss: () => {
              },
              removeCss: () => {
              },
              addHeadCss: () => {
              }
            };
            var CssContext222 = (0, import_react1722.createContext)(cssContextDefaults222);
            var CssContextProvider222 = (_a) => {
              var props = __objRest222(_a, []);
              const context = useCssInternal222(props.appRoot);
              (0, import_react1722.useInsertionEffect)(() => {
                const variables = new Variables222();
                context.addHeadCss(
                  "baseStyles",
                  `
            :root {

                ${Variables222.printCss(variables.getColorsVariables())}
                ${Variables222.printCss(variables.getFontVariables())}
                ${Variables222.printCss(variables.getGapVariables())}
                ${Variables222.printCss(variables.getBreakpointsVariables())}

                ${Skin322.key("gap")}: ${Skin322.value("gap-xs")};
                ${Skin322.key("font-size")}: ${Skin322.value("font-size-xs")};

            }
            
        `
                );
                context.addCss(
                  "implementationStyles",
                  `
    
      .lrc-light {
        ${Variables222.printCss(variables.getColorsVariables())}
      }
      .lrc-dark {
          ${Variables222.printCss(variables.getColorsVariables(true))}
      }

      .lrc-app__root {

          @media ( min-width: ${variables.breakpoints.sm}px ) {
              ${Skin322.key("gap")}: ${Skin322.value("gap-sm")};
              ${Skin322.key("font-size")}: ${Skin322.value("font-size-sm")};
          }
          @media ( min-width: ${variables.breakpoints.md}px ) {
              ${Skin322.key("gap")}: ${Skin322.value("gap-md")};
              ${Skin322.key("font-size")}: ${Skin322.value("font-size-md")};
          }
          @media ( min-width: ${variables.breakpoints.lg}px ) {
              ${Skin322.key("gap")}: ${Skin322.value("gap-lg")};
              ${Skin322.key("font-size")}: ${Skin322.value("font-size-lg")};
          }
          @media ( min-width: ${variables.breakpoints.xl}px ) {
              ${Skin322.key("gap")}: ${Skin322.value("gap-xl")};
              ${Skin322.key("font-size")}: ${Skin322.value("font-size-xl")};
          }

          font-size: ${Skin322.value("font-size")};
          ${Skin322.key("font-size")}: ${Skin322.value("font-size-xs")};
          font-family: sans-serif;
      }
    
    `
                );
              }, []);
              return /* @__PURE__ */ import_react1722.default.createElement(CssContext222.Provider, { value: context }, /* @__PURE__ */ import_react1722.default.createElement("div", { className: "lrc-app__root" }, props.children));
            };
            var useCss222 = (key, css) => {
              const context = (0, import_react1722.useContext)(CssContext222);
              (0, import_react1722.useInsertionEffect)(() => {
                context.addCss(key, css);
                return () => {
                  context.removeCss(key);
                };
              }, []);
            };
            var useHeadCss222 = (key, css) => {
              const context = (0, import_react1722.useContext)(CssContext222);
              (0, import_react1722.useInsertionEffect)(() => {
                context.addHeadCss(key, css);
                return () => {
                };
              }, []);
            };
            var import_classnames322 = __toESM222(__require("classnames"));
            var ThermalButton222 = (0, import_react3222.forwardRef)((_a, ref) => {
              var _b = _a, {
                variant = "gray"
              } = _b, props = __objRest222(_b, [
                "variant"
              ]);
              useCss222("thermalUiButton", `
    
        .lrc__thermal-ui__button {
            position: relative;
            background: ${Skin322.colorValue(variant, 200)};
            border: 1px solid ${Skin322.colorValue(variant, 300)};
            padding: ${Skin322.gapValue(0.3)} ${Skin322.gapValue(0.5)};
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 200)};

            transition: all .2s ease-in-out;

            &:hover {
                background: ${Skin322.colorValue(variant, 300)};
                border-color: ${Skin322.colorValue(variant, 500)};
            }
        }

        .lrc-dark .lrc__thermal-ui__button {
            color: white;
            box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 50)};
        }

    `);
              return /* @__PURE__ */ import_react3222.default.createElement(import_react2222.Button, __spreadProps222(__spreadValues222({ ref }, props), { className: (0, import_classnames322.default)("lrc__thermal-ui__button") }), props.children);
            });
            var ThermalRangeAutoButton222 = (_a) => {
              var _b = _a, { registry } = _b, props = __objRest222(_b, ["registry"]);
              const { onClick } = (0, import_react_bridge622.useRangeButtonAuto)(registry);
              return /* @__PURE__ */ import_react4222.default.createElement(ThermalButton222, __spreadValues222({ onClick }, props), "Automatick\xFD teplotn\xED rozsah");
            };
            var import_react_bridge2222 = __require("@labir/react-bridge");
            var import_react5222 = __toESM222(__require("react"));
            var ThermalRangeFullButton222 = (_a) => {
              var _b = _a, {
                registry
              } = _b, props = __objRest222(_b, [
                "registry"
              ]);
              const { onClick } = (0, import_react_bridge2222.useRangeButtonFull)(registry);
              return /* @__PURE__ */ import_react5222.default.createElement(ThermalButton222, __spreadValues222({ onClick }, props), "Pln\xFD teplotn\xED rozsah");
            };
            var import_react6222 = __require("@headlessui/react");
            var import_react7222 = __toESM222(__require("react"));
            var DownloadDropdown222 = (props) => {
              const css = (0, import_react7222.useMemo)(
                () => `
    
.lrc__downloadDropdown__items {
    background: ${Skin322.colorValue("gray", 100)};
    padding: ${Skin322.gapValue(0.25)};
    box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 200)};
    border: 1px solid ${Skin322.colorValue("gray", 300)};
    border-radius: 5px;
    z-index: 9999;
}

.lrc__downloadDropdown__item {
    font-size: ${Skin322.value("font-size")};
    padding: ${Skin322.gapValue(0.5)} ${Skin322.gapValue(0.7)};
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 5px;
    display: block;
    color: white;

    &:hover {
        background: ${Skin322.colorValue("gray", 200)};
    }
}

.lrc-dark .lrc__paletteDropdown__item {
  color: white;
  box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 50)};
}

`,
                []
              );
              useCss222("downloadDropdown", css);
              useHeadCss222("downloadDropdown", css);
              const items = (0, import_react7222.useMemo)(() => {
                const links = [
                  {
                    href: props.instance.url,
                    text: "St\xE1hnout LRC soubor"
                  }
                ];
                return links;
              }, [props.instance]);
              return /* @__PURE__ */ import_react7222.default.createElement(import_react7222.default.Fragment, null, /* @__PURE__ */ import_react7222.default.createElement(import_react6222.Menu, null, /* @__PURE__ */ import_react7222.default.createElement(import_react6222.MenuButton, { as: ThermalButton222 }, /* @__PURE__ */ import_react7222.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ import_react7222.default.createElement("span", null, props.instance.url, " "), /* @__PURE__ */ import_react7222.default.createElement(
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
                /* @__PURE__ */ import_react7222.default.createElement(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  }
                )
              ))), /* @__PURE__ */ import_react7222.default.createElement(
                import_react6222.MenuItems,
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
                items.map((item) => /* @__PURE__ */ import_react7222.default.createElement(
                  import_react6222.MenuItem,
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
            var import_react8222 = __require("@headlessui/react");
            var import_react_bridge3222 = __require("@labir/react-bridge");
            var import_react9222 = __toESM222(__require("react"));
            var import_uuid222 = __require("uuid");
            var PaletteDropdown222 = () => {
              const palette = (0, import_react_bridge3222.useThermalManagerPaletteDrive)((0, import_uuid222.v4)());
              const css = (0, import_react9222.useMemo)(() => `
    
  .lrc__paletteDropdown__items {
      background: ${Skin322.colorValue("gray", 100)};
      padding: ${Skin322.gapValue(0.25)};
      box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 200)};
      border: 1px solid ${Skin322.colorValue("gray", 300)};
      border-radius: 5px;
  }

  .lrc__paletteDropdown__item {
      font-size: ${Skin322.value("font-size")};
      padding: ${Skin322.gapValue(0.5)} ${Skin322.gapValue(0.3)};
      font-family: sans-serif;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
          background: ${Skin322.colorValue("gray", 200)};
      }
  }

  .lrc-dark .lrc__paletteDropdown__item {
    color: white;
    box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 50)};
  }

`, []);
              useCss222(
                "paletteDropdown",
                css
              );
              useHeadCss222("paletteDropdown", css);
              return /* @__PURE__ */ import_react9222.default.createElement(import_react9222.default.Fragment, null, /* @__PURE__ */ import_react9222.default.createElement(import_react8222.Menu, null, /* @__PURE__ */ import_react9222.default.createElement(import_react8222.MenuButton, { as: ThermalButton222 }, /* @__PURE__ */ import_react9222.default.createElement(import_react9222.default.Fragment, null, /* @__PURE__ */ import_react9222.default.createElement(import_react_bridge3222.PaletteItem, __spreadValues222({}, palette.palette)))), /* @__PURE__ */ import_react9222.default.createElement(
                import_react8222.MenuItems,
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
                Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ import_react9222.default.createElement(
                  import_react8222.MenuItem,
                  {
                    key,
                    as: "div",
                    onClick: () => palette.set(key),
                    className: "lrc__paletteDropdown__item"
                  },
                  /* @__PURE__ */ import_react9222.default.createElement(import_react_bridge3222.PaletteItem, __spreadValues222({}, item))
                ))
              )));
            };
            var import_react_bridge4222 = __require("@labir/react-bridge");
            var import_react12222 = __toESM222(__require("react"));
            var import_react10222 = __require("@headlessui/react");
            var import_react11222 = __toESM222(__require("react"));
            var import_classnames2222 = __toESM222(__require("classnames"));
            var ThermalInput222 = (_a) => {
              var _b = _a, {
                variant = "primary",
                className
              } = _b, props = __objRest222(_b, [
                "variant",
                "className"
              ]);
              useCss222("thermalUiInput", `
    .lrc__thermal-ui__input {
      border-radius: 5px;
      padding: ${Skin322.gapValue(0.3)} ${Skin322.gapValue(0.5)};

      &[type=range] {
        padding: 0;
        accent-color: ${Skin322.colorValue(variant, 500)};
        padding-top: ${Skin322.gapValue(0.5)};
      }
    }
  `);
              return /* @__PURE__ */ import_react11222.default.createElement(import_react10222.Input, __spreadProps222(__spreadValues222({}, props), { className: (0, import_classnames2222.default)(className, "lrc__thermal-ui__input") }));
            };
            var ThermalHistogramResolutionInput222 = (_a) => {
              var _b = _a, {
                registry,
                type = "number"
              } = _b, props = __objRest222(_b, [
                "registry",
                "type"
              ]);
              const { onChange, internal, onBlur } = (0, import_react_bridge4222.useHistogramResolutionInput)(registry);
              useCss222("button", `
    .button {
      background: red;
      padding: 50px;
    }
  `);
              return /* @__PURE__ */ import_react12222.default.createElement(
                ThermalInput222,
                __spreadValues222({
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
            var import_react_bridge5222 = __require("@labir/react-bridge");
            var import_react13222 = __toESM222(__require("react"));
            var ThermalOpacityInput222 = (_a) => {
              var _b = _a, {
                registry,
                type = "number"
              } = _b, props = __objRest222(_b, [
                "registry",
                "type"
              ]);
              const { onChange, opacity } = (0, import_react_bridge5222.useOpacityInput)(registry);
              return /* @__PURE__ */ import_react13222.default.createElement(
                ThermalInput222,
                __spreadValues222({
                  onChange,
                  value: opacity.value,
                  min: 0,
                  max: 1,
                  step: 0.01,
                  type
                }, props)
              );
            };
            var import_react14222 = __toESM222(__require("react"));
            var Bar222 = (props) => {
              useCss222("thermalBar", `
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${Skin322.gapValue(0.3)};
        background: ${Skin322.colorValue("gray", 100)};
        border: 1px solid ${Skin322.colorValue("gray", 300)};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
        box-shadow: 3px 3px 10px ${Skin322.colorValue("gray", 200)};
    }

    .lrc__bar__name {
        font-weight: bold;
        padding-left: 10px;
    }

    .lrc__bar__secondRow {
        width: 100%;
    }
   
   `);
              return /* @__PURE__ */ import_react14222.default.createElement("div", { className: "lrc__bar" }, props.name && /* @__PURE__ */ import_react14222.default.createElement("div", { className: "lrc__bar__name" }, props.name), props.children, props.secondRow && /* @__PURE__ */ import_react14222.default.createElement("div", { className: "lrc__bar__secondRow" }, props.secondRow), props.mainContent && /* @__PURE__ */ import_react14222.default.createElement("div", { className: "lrc__bar__secondRow" }, props.mainContent));
            };
          }
        });
        var src_exports2 = {};
        __export2(src_exports2, {
          Bar: () => Bar22,
          CssContextProvider: () => CssContextProvider22,
          DownloadDropdown: () => DownloadDropdown22,
          PaletteDropdown: () => PaletteDropdown22,
          Skin: () => Skin32,
          ThermalEmbedModal: () => ThermalEmbedModal22,
          ThermalHistogramResolutionInput: () => ThermalHistogramResolutionInput22,
          ThermalInfoModal: () => ThermalInfoModal22,
          ThermalOpacityInput: () => ThermalOpacityInput22,
          ThermalRangeAutoButton: () => ThermalRangeAutoButton22,
          ThermalRangeFullButton: () => ThermalRangeFullButton22,
          useCss: () => useCss22,
          useHeadCss: () => useHeadCss22
        });
        module2.exports = __toCommonJS2(src_exports2);
        var import_react_bridge62 = __require("@labir/react-bridge");
        var import_react422 = __toESM22(__require("react"));
        var import_react222 = __require("@headlessui/react");
        var import_react322 = __toESM22(__require("react"));
        var _Skin22 = class _Skin3 {
          static key(key) {
            return `--${_Skin3.prefix}-${key}`;
          }
          static value(key) {
            return `var( ${_Skin3.key(key)} )`;
          }
          static colorKey(color, tone = 500) {
            return `--${_Skin3.prefix}-${color}-${tone}`;
          }
          static colorValue(color, tone = 500) {
            return _Skin3.value(`${color}-${tone}`);
          }
          static breakpointValue(bp) {
            return _Skin3.value(`bp-${bp}`);
          }
          static gapValue(aspect) {
            if (aspect === void 0)
              return _Skin3.value("gap");
            return `calc( ${_Skin3.value("gap")} * ${aspect} )`;
          }
        };
        _Skin22.prefix = "lrc";
        var Skin32 = _Skin22;
        var import_react192 = __toESM22(__require("react"));
        var package_default22 = {
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
        var Variables22 = class {
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
            this.breakpoints = {
              xs: 0,
              sm: 640,
              md: 900,
              lg: 1200,
              xl: 1450
            };
            this.gap = {
              xs: "15px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px"
            };
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
                return [Skin32.key(`${color}-${tone}`), value];
              }));
            }
            const items = {};
            items[Skin32.key(`${color}-50`)] = slot["900"];
            items[Skin32.key(`${color}-100`)] = slot["800"];
            items[Skin32.key(`${color}-200`)] = slot["700"];
            items[Skin32.key(`${color}-300`)] = slot["600"];
            items[Skin32.key(`${color}-400`)] = slot["500"];
            items[Skin32.key(`${color}-500`)] = slot["400"];
            items[Skin32.key(`${color}-600`)] = slot["300"];
            items[Skin32.key(`${color}-700`)] = slot["200"];
            items[Skin32.key(`${color}-800`)] = slot["100"];
            items[Skin32.key(`${color}-900`)] = slot["50"];
            return items;
          }
          /** Get variables of all colors */
          getColorsVariables(inverse = false) {
            return __spreadValues22(__spreadValues22(__spreadValues22(__spreadValues22(__spreadValues22({}, this.getColorVariables("primary", inverse)), this.getColorVariables("secondary", inverse)), this.getColorVariables("gray", inverse)), this.getColorVariables("success", inverse)), this.getColorVariables("danger", inverse));
          }
          getFontVariables() {
            return {
              [Skin32.key("font-size-xs")]: this.fontSize.xs,
              [Skin32.key("font-size-sm")]: this.fontSize.sm,
              [Skin32.key("font-size-md")]: this.fontSize.md,
              [Skin32.key("font-size-lg")]: this.fontSize.lg,
              [Skin32.key("font-size-xl")]: this.fontSize.xl
            };
          }
          getGapVariables() {
            return {
              [Skin32.key("gap-xs")]: this.gap.xs,
              [Skin32.key("gap-sm")]: this.gap.sm,
              [Skin32.key("gap-md")]: this.gap.md,
              [Skin32.key("gap-lg")]: this.gap.lg,
              [Skin32.key("gap-xl")]: this.gap.xl
            };
          }
          getBreakpointsVariables() {
            return {
              [Skin32.key("bp-xs")]: `${this.breakpoints.xs}px`,
              [Skin32.key("bp-sm")]: `${this.breakpoints.sm}px`,
              [Skin32.key("bp-md")]: `${this.breakpoints.md}px`,
              [Skin32.key("bp-lg")]: `${this.breakpoints.lg}px`,
              [Skin32.key("bp-xl")]: `${this.breakpoints.xl}px`
            };
          }
          /** Dump index of variables into a string */
          static printCss(styles) {
            return Object.entries(styles).map(([property, value]) => `${property}:${value};`).join("\n");
          }
        };
        var useCssInternal22 = (appRoot = void 0, prefix = "lrc") => {
          const elementsInHead = (0, import_react192.useRef)({});
          const elementsInRoot = (0, import_react192.useRef)({});
          const head = (0, import_react192.useMemo)(() => document.head, []);
          const root = (0, import_react192.useMemo)(() => {
            return appRoot !== void 0 ? appRoot : document.head;
          }, [appRoot]);
          const getId = (0, import_react192.useCallback)(
            (key) => `${prefix}__${package_default22.version}__${key}`,
            [prefix]
          );
          const styleElementFactory = (0, import_react192.useCallback)(
            (key, style) => {
              const element = document.createElement("style");
              element.id = getId(key);
              element.innerHTML = style;
              return element;
            },
            [getId]
          );
          const styleExists = (0, import_react192.useCallback)(
            (key) => {
              return key in elementsInRoot.current;
            },
            [elementsInRoot]
          );
          const getExistingStyle = (0, import_react192.useCallback)(
            (key) => {
              if (styleExists(key)) {
                return elementsInRoot.current[key];
              }
              return void 0;
            },
            [elementsInRoot, styleExists]
          );
          const addHeadCss = (0, import_react192.useCallback)(
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
          const addCss = (0, import_react192.useCallback)(
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
          const removeCss = (0, import_react192.useCallback)(
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
        var cssContextDefaults22 = {
          addCss: () => {
          },
          removeCss: () => {
          },
          addHeadCss: () => {
          }
        };
        var CssContext22 = (0, import_react192.createContext)(cssContextDefaults22);
        var CssContextProvider22 = (_a) => {
          var props = __objRest22(_a, []);
          const context = useCssInternal22(props.appRoot);
          (0, import_react192.useInsertionEffect)(() => {
            const variables = new Variables22();
            context.addHeadCss(
              "baseStyles",
              `
            :root {

                ${Variables22.printCss(variables.getColorsVariables())}
                ${Variables22.printCss(variables.getFontVariables())}
                ${Variables22.printCss(variables.getGapVariables())}
                ${Variables22.printCss(variables.getBreakpointsVariables())}

                ${Skin32.key("gap")}: ${Skin32.value("gap-xs")};
                ${Skin32.key("font-size")}: ${Skin32.value("font-size-xs")};

            }
            
        `
            );
            context.addCss(
              "implementationStyles",
              `
    
      .lrc-light {
        ${Variables22.printCss(variables.getColorsVariables())}
      }
      .lrc-dark {
          ${Variables22.printCss(variables.getColorsVariables(true))}
      }

      .lrc-app__root {

          @media ( min-width: ${variables.breakpoints.sm}px ) {
              ${Skin32.key("gap")}: ${Skin32.value("gap-sm")};
              ${Skin32.key("font-size")}: ${Skin32.value("font-size-sm")};
          }
          @media ( min-width: ${variables.breakpoints.md}px ) {
              ${Skin32.key("gap")}: ${Skin32.value("gap-md")};
              ${Skin32.key("font-size")}: ${Skin32.value("font-size-md")};
          }
          @media ( min-width: ${variables.breakpoints.lg}px ) {
              ${Skin32.key("gap")}: ${Skin32.value("gap-lg")};
              ${Skin32.key("font-size")}: ${Skin32.value("font-size-lg")};
          }
          @media ( min-width: ${variables.breakpoints.xl}px ) {
              ${Skin32.key("gap")}: ${Skin32.value("gap-xl")};
              ${Skin32.key("font-size")}: ${Skin32.value("font-size-xl")};
          }

          font-size: ${Skin32.value("font-size")};
          ${Skin32.key("font-size")}: ${Skin32.value("font-size-xs")};
          font-family: sans-serif;
      }
    
    `
            );
          }, []);
          return /* @__PURE__ */ import_react192.default.createElement(CssContext22.Provider, { value: context }, /* @__PURE__ */ import_react192.default.createElement("div", { className: "lrc-app__root" }, props.children));
        };
        var useCss22 = (key, css) => {
          const context = (0, import_react192.useContext)(CssContext22);
          (0, import_react192.useInsertionEffect)(() => {
            context.addCss(key, css);
            return () => {
              context.removeCss(key);
            };
          }, []);
        };
        var useHeadCss22 = (key, css) => {
          const context = (0, import_react192.useContext)(CssContext22);
          (0, import_react192.useInsertionEffect)(() => {
            context.addHeadCss(key, css);
            return () => {
            };
          }, []);
        };
        var import_classnames32 = __toESM22(__require("classnames"));
        var ThermalButton22 = (0, import_react322.forwardRef)((_a, ref) => {
          var _b = _a, {
            variant = "gray"
          } = _b, props = __objRest22(_b, [
            "variant"
          ]);
          useCss22("thermalUiButton", `
    
        .lrc__thermal-ui__button {
            position: relative;
            background: ${Skin32.colorValue(variant, 200)};
            border: 1px solid ${Skin32.colorValue(variant, 300)};
            padding: ${Skin32.gapValue(0.3)} ${Skin32.gapValue(0.5)};
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 200)};

            transition: all .2s ease-in-out;

            &:hover {
                background: ${Skin32.colorValue(variant, 300)};
                border-color: ${Skin32.colorValue(variant, 500)};
            }
        }

        .lrc-dark .lrc__thermal-ui__button {
            color: white;
            box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 50)};
        }

    `);
          return /* @__PURE__ */ import_react322.default.createElement(import_react222.Button, __spreadProps22(__spreadValues22({ ref }, props), { className: (0, import_classnames32.default)("lrc__thermal-ui__button") }), props.children);
        });
        var ThermalRangeAutoButton22 = (_a) => {
          var _b = _a, { registry } = _b, props = __objRest22(_b, ["registry"]);
          const { onClick } = (0, import_react_bridge62.useRangeButtonAuto)(registry);
          return /* @__PURE__ */ import_react422.default.createElement(ThermalButton22, __spreadValues22({ onClick }, props), "Automatick\xFD teplotn\xED rozsah");
        };
        var import_react_bridge222 = __require("@labir/react-bridge");
        var import_react522 = __toESM22(__require("react"));
        var ThermalRangeFullButton22 = (_a) => {
          var _b = _a, {
            registry
          } = _b, props = __objRest22(_b, [
            "registry"
          ]);
          const { onClick } = (0, import_react_bridge222.useRangeButtonFull)(registry);
          return /* @__PURE__ */ import_react522.default.createElement(ThermalButton22, __spreadValues22({ onClick }, props), "Pln\xFD teplotn\xED rozsah");
        };
        var import_react622 = __require("@headlessui/react");
        var import_react722 = __toESM22(__require("react"));
        var DownloadDropdown22 = (props) => {
          const css = (0, import_react722.useMemo)(
            () => `
    
.lrc__downloadDropdown__items {
    background: ${Skin32.colorValue("gray", 100)};
    padding: ${Skin32.gapValue(0.25)};
    box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 200)};
    border: 1px solid ${Skin32.colorValue("gray", 300)};
    border-radius: 5px;
    z-index: 9999;
}

.lrc__downloadDropdown__item {
    font-size: ${Skin32.value("font-size")};
    padding: ${Skin32.gapValue(0.5)} ${Skin32.gapValue(0.7)};
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 5px;
    display: block;
    color: white;

    &:hover {
        background: ${Skin32.colorValue("gray", 200)};
    }
}

.lrc-dark .lrc__paletteDropdown__item {
  color: white;
  box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 50)};
}

`,
            []
          );
          useCss22("downloadDropdown", css);
          useHeadCss22("downloadDropdown", css);
          const items = (0, import_react722.useMemo)(() => {
            const links = [
              {
                href: props.instance.url,
                text: "St\xE1hnout LRC soubor"
              }
            ];
            return links;
          }, [props.instance]);
          return /* @__PURE__ */ import_react722.default.createElement(import_react722.default.Fragment, null, /* @__PURE__ */ import_react722.default.createElement(import_react622.Menu, null, /* @__PURE__ */ import_react722.default.createElement(import_react622.MenuButton, { as: ThermalButton22 }, /* @__PURE__ */ import_react722.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ import_react722.default.createElement("span", null, props.instance.url, " "), /* @__PURE__ */ import_react722.default.createElement(
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
            /* @__PURE__ */ import_react722.default.createElement(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              }
            )
          ))), /* @__PURE__ */ import_react722.default.createElement(
            import_react622.MenuItems,
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
            items.map((item) => /* @__PURE__ */ import_react722.default.createElement(
              import_react622.MenuItem,
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
        var import_react822 = __require("@headlessui/react");
        var import_react_bridge322 = __require("@labir/react-bridge");
        var import_react922 = __toESM22(__require("react"));
        var import_uuid22 = __require("uuid");
        var PaletteDropdown22 = () => {
          const palette = (0, import_react_bridge322.useThermalManagerPaletteDrive)((0, import_uuid22.v4)());
          const css = (0, import_react922.useMemo)(() => `
    
  .lrc__paletteDropdown__items {
      background: ${Skin32.colorValue("gray", 100)};
      padding: ${Skin32.gapValue(0.25)};
      box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 200)};
      border: 1px solid ${Skin32.colorValue("gray", 300)};
      border-radius: 5px;
  }

  .lrc__paletteDropdown__item {
      font-size: ${Skin32.value("font-size")};
      padding: ${Skin32.gapValue(0.5)} ${Skin32.gapValue(0.3)};
      font-family: sans-serif;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
          background: ${Skin32.colorValue("gray", 200)};
      }
  }

  .lrc-dark .lrc__paletteDropdown__item {
    color: white;
    box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 50)};
  }

`, []);
          useCss22(
            "paletteDropdown",
            css
          );
          useHeadCss22("paletteDropdown", css);
          return /* @__PURE__ */ import_react922.default.createElement(import_react922.default.Fragment, null, /* @__PURE__ */ import_react922.default.createElement(import_react822.Menu, null, /* @__PURE__ */ import_react922.default.createElement(import_react822.MenuButton, { as: ThermalButton22 }, /* @__PURE__ */ import_react922.default.createElement(import_react922.default.Fragment, null, /* @__PURE__ */ import_react922.default.createElement(import_react_bridge322.PaletteItem, __spreadValues22({}, palette.palette)))), /* @__PURE__ */ import_react922.default.createElement(
            import_react822.MenuItems,
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
            Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ import_react922.default.createElement(
              import_react822.MenuItem,
              {
                key,
                as: "div",
                onClick: () => palette.set(key),
                className: "lrc__paletteDropdown__item"
              },
              /* @__PURE__ */ import_react922.default.createElement(import_react_bridge322.PaletteItem, __spreadValues22({}, item))
            ))
          )));
        };
        var import_react_bridge422 = __require("@labir/react-bridge");
        var import_react1222 = __toESM22(__require("react"));
        var import_react1022 = __require("@headlessui/react");
        var import_react1122 = __toESM22(__require("react"));
        var import_classnames222 = __toESM22(__require("classnames"));
        var ThermalInput22 = (_a) => {
          var _b = _a, {
            variant = "primary",
            className
          } = _b, props = __objRest22(_b, [
            "variant",
            "className"
          ]);
          useCss22("thermalUiInput", `
    .lrc__thermal-ui__input {
      border-radius: 5px;
      padding: ${Skin32.gapValue(0.3)} ${Skin32.gapValue(0.5)};

      &[type=range] {
        padding: 0;
        accent-color: ${Skin32.colorValue(variant, 500)};
        padding-top: ${Skin32.gapValue(0.5)};
      }
    }
  `);
          return /* @__PURE__ */ import_react1122.default.createElement(import_react1022.Input, __spreadProps22(__spreadValues22({}, props), { className: (0, import_classnames222.default)(className, "lrc__thermal-ui__input") }));
        };
        var ThermalHistogramResolutionInput22 = (_a) => {
          var _b = _a, {
            registry,
            type = "number"
          } = _b, props = __objRest22(_b, [
            "registry",
            "type"
          ]);
          const { onChange, internal, onBlur } = (0, import_react_bridge422.useHistogramResolutionInput)(registry);
          useCss22("button", `
    .button {
      background: red;
      padding: 50px;
    }
  `);
          return /* @__PURE__ */ import_react1222.default.createElement(
            ThermalInput22,
            __spreadValues22({
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
        var import_react_bridge522 = __require("@labir/react-bridge");
        var import_react1322 = __toESM22(__require("react"));
        var ThermalOpacityInput22 = (_a) => {
          var _b = _a, {
            registry,
            type = "number"
          } = _b, props = __objRest22(_b, [
            "registry",
            "type"
          ]);
          const { onChange, opacity } = (0, import_react_bridge522.useOpacityInput)(registry);
          return /* @__PURE__ */ import_react1322.default.createElement(
            ThermalInput22,
            __spreadValues22({
              onChange,
              value: opacity.value,
              min: 0,
              max: 1,
              step: 0.01,
              type
            }, props)
          );
        };
        var import_react1422 = __require("@headlessui/react");
        var import_react1522 = __require("react");
        var import_dist22 = __toESM22(require_dist22());
        var ThermalModal22 = (props) => {
          const [open, setOpen] = (0, import_react1522.useState)(false);
          const Button2 = props.buttonComponent;
          return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button2, { onClick: () => setOpen(true) }, props.buttonContent), /* @__PURE__ */ React.createElement(
            import_react1422.Dialog,
            {
              open,
              onClose: () => setOpen(false),
              static: true,
              className: "lrc-dark lrc-app__root"
            },
            /* @__PURE__ */ React.createElement(
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
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  style: {
                    maxWidth: "800px",
                    background: import_dist22.Skin.colorValue("gray", 100),
                    padding: import_dist22.Skin.gapValue(),
                    borderColor: import_dist22.Skin.colorValue("gray", 200),
                    borderWidth: 1,
                    borderStyle: "solid",
                    boxShadow: `5px 5px 20px ${import_dist22.Skin.colorValue("gray", 50)}`,
                    borderRadius: 10,
                    color: "white"
                  }
                },
                /* @__PURE__ */ React.createElement(import_react1422.DialogPanel, null, /* @__PURE__ */ React.createElement(import_react1422.DialogTitle, { style: { marginTop: 0 } }, props.title), /* @__PURE__ */ React.createElement("div", { style: { opacity: 0.8 } }, props.content), /* @__PURE__ */ React.createElement(ThermalButton22, { onClick: () => setOpen(false), style: { float: "right" } }, "Zav\u0159\xEDt"))
              )
            )
          ));
        };
        var import_react_code_blocks2 = __require("react-code-blocks");
        var ThermalEmbedModal22 = (props) => {
          return /* @__PURE__ */ React.createElement(
            ThermalModal22,
            {
              title: "Sd\xEDlejte termogram",
              buttonComponent: ThermalButton22,
              buttonContent: "Sd\xEDlet",
              content: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Do va\u0161eho webu vlo\u017E\xEDte tento termogram pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du:"), /* @__PURE__ */ React.createElement(
                import_react_code_blocks2.CopyBlock,
                {
                  text: `<script type="module" src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.js"></script>
<thermal-file url="${props.instance.url}" />`,
                  language: "html",
                  showLineNumbers: true,
                  theme: import_react_code_blocks2.dracula,
                  codeBlock: true
                }
              ))
            }
          );
        };
        var ThermalInfoModal22 = (props) => {
          return /* @__PURE__ */ React.createElement(
            ThermalModal22,
            {
              title: "Informace o termogramu",
              buttonComponent: ThermalButton22,
              buttonContent: "Informace o souboru",
              content: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "N\xE1zev souboru: ", props.instance.url, " "), /* @__PURE__ */ React.createElement("p", null, "Rozli\u0161en\xED: ", props.instance.width, " x ", props.instance.height, " px"), /* @__PURE__ */ React.createElement("p", null, "Minim\xE1ln\xED teplota: ", props.instance.min, " \xB0C"), /* @__PURE__ */ React.createElement("p", null, "Maxim\xE1ln\xED teplota: ", props.instance.max, " \xB0C"), /* @__PURE__ */ React.createElement("p", null, "Signatura: ", props.instance.signature), /* @__PURE__ */ React.createElement("p", null, "Jednotky: ", props.instance.unit === 2 ? "Stupn\u011B celsia" : "kelviny"), /* @__PURE__ */ React.createElement("p", null))
            }
          );
        };
        var import_react1622 = __toESM22(__require("react"));
        var Bar22 = (props) => {
          useCss22("thermalBar", `
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${Skin32.gapValue(0.3)};
        background: ${Skin32.colorValue("gray", 100)};
        border: 1px solid ${Skin32.colorValue("gray", 300)};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
        box-shadow: 3px 3px 10px ${Skin32.colorValue("gray", 200)};
    }

    .lrc__bar__name {
        font-weight: bold;
        padding-left: 10px;
    }

    .lrc__bar__secondRow {
        width: 100%;
    }
   
   `);
          return /* @__PURE__ */ import_react1622.default.createElement("div", { className: "lrc__bar" }, props.name && /* @__PURE__ */ import_react1622.default.createElement("div", { className: "lrc__bar__name" }, props.name), props.children, props.secondRow && /* @__PURE__ */ import_react1622.default.createElement("div", { className: "lrc__bar__secondRow" }, props.secondRow), props.mainContent && /* @__PURE__ */ import_react1622.default.createElement("div", { className: "lrc__bar__secondRow" }, props.mainContent));
        };
      }
    });
    var src_exports = {};
    __export(src_exports, {
      Bar: () => Bar2,
      CssContextProvider: () => CssContextProvider2,
      DownloadDropdown: () => DownloadDropdown2,
      PaletteDropdown: () => PaletteDropdown2,
      Skin: () => Skin3,
      ThermalEmbedModal: () => ThermalEmbedModal2,
      ThermalHistogramResolutionInput: () => ThermalHistogramResolutionInput2,
      ThermalInfoModal: () => ThermalInfoModal2,
      ThermalOpacityInput: () => ThermalOpacityInput2,
      ThermalRangeAutoButton: () => ThermalRangeAutoButton2,
      ThermalRangeFullButton: () => ThermalRangeFullButton2,
      useCss: () => useCss2,
      useHeadCss: () => useHeadCss2
    });
    module.exports = __toCommonJS(src_exports);
    var import_react_bridge6 = __require("@labir/react-bridge");
    var import_react42 = __toESM2(__require("react"));
    var import_react22 = __require("@headlessui/react");
    var import_react32 = __toESM2(__require("react"));
    var _Skin2 = class _Skin3 {
      static key(key) {
        return `--${_Skin3.prefix}-${key}`;
      }
      static value(key) {
        return `var( ${_Skin3.key(key)} )`;
      }
      static colorKey(color, tone = 500) {
        return `--${_Skin3.prefix}-${color}-${tone}`;
      }
      static colorValue(color, tone = 500) {
        return _Skin3.value(`${color}-${tone}`);
      }
      static breakpointValue(bp) {
        return _Skin3.value(`bp-${bp}`);
      }
      static gapValue(aspect) {
        if (aspect === void 0)
          return _Skin3.value("gap");
        return `calc( ${_Skin3.value("gap")} * ${aspect} )`;
      }
    };
    _Skin2.prefix = "lrc";
    var Skin3 = _Skin2;
    var import_react19 = __toESM2(__require("react"));
    var package_default2 = {
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
    var Variables2 = class {
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
        this.breakpoints = {
          xs: 0,
          sm: 640,
          md: 900,
          lg: 1200,
          xl: 1450
        };
        this.gap = {
          xs: "15px",
          sm: "16px",
          md: "18px",
          lg: "20px",
          xl: "22px"
        };
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
            return [Skin3.key(`${color}-${tone}`), value];
          }));
        }
        const items = {};
        items[Skin3.key(`${color}-50`)] = slot["900"];
        items[Skin3.key(`${color}-100`)] = slot["800"];
        items[Skin3.key(`${color}-200`)] = slot["700"];
        items[Skin3.key(`${color}-300`)] = slot["600"];
        items[Skin3.key(`${color}-400`)] = slot["500"];
        items[Skin3.key(`${color}-500`)] = slot["400"];
        items[Skin3.key(`${color}-600`)] = slot["300"];
        items[Skin3.key(`${color}-700`)] = slot["200"];
        items[Skin3.key(`${color}-800`)] = slot["100"];
        items[Skin3.key(`${color}-900`)] = slot["50"];
        return items;
      }
      /** Get variables of all colors */
      getColorsVariables(inverse = false) {
        return __spreadValues2(__spreadValues2(__spreadValues2(__spreadValues2(__spreadValues2({}, this.getColorVariables("primary", inverse)), this.getColorVariables("secondary", inverse)), this.getColorVariables("gray", inverse)), this.getColorVariables("success", inverse)), this.getColorVariables("danger", inverse));
      }
      getFontVariables() {
        return {
          [Skin3.key("font-size-xs")]: this.fontSize.xs,
          [Skin3.key("font-size-sm")]: this.fontSize.sm,
          [Skin3.key("font-size-md")]: this.fontSize.md,
          [Skin3.key("font-size-lg")]: this.fontSize.lg,
          [Skin3.key("font-size-xl")]: this.fontSize.xl
        };
      }
      getGapVariables() {
        return {
          [Skin3.key("gap-xs")]: this.gap.xs,
          [Skin3.key("gap-sm")]: this.gap.sm,
          [Skin3.key("gap-md")]: this.gap.md,
          [Skin3.key("gap-lg")]: this.gap.lg,
          [Skin3.key("gap-xl")]: this.gap.xl
        };
      }
      getBreakpointsVariables() {
        return {
          [Skin3.key("bp-xs")]: `${this.breakpoints.xs}px`,
          [Skin3.key("bp-sm")]: `${this.breakpoints.sm}px`,
          [Skin3.key("bp-md")]: `${this.breakpoints.md}px`,
          [Skin3.key("bp-lg")]: `${this.breakpoints.lg}px`,
          [Skin3.key("bp-xl")]: `${this.breakpoints.xl}px`
        };
      }
      /** Dump index of variables into a string */
      static printCss(styles) {
        return Object.entries(styles).map(([property, value]) => `${property}:${value};`).join("\n");
      }
    };
    var useCssInternal2 = (appRoot = void 0, prefix = "lrc") => {
      const elementsInHead = (0, import_react19.useRef)({});
      const elementsInRoot = (0, import_react19.useRef)({});
      const head = (0, import_react19.useMemo)(() => document.head, []);
      const root = (0, import_react19.useMemo)(() => {
        return appRoot !== void 0 ? appRoot : document.head;
      }, [appRoot]);
      const getId = (0, import_react19.useCallback)(
        (key) => `${prefix}__${package_default2.version}__${key}`,
        [prefix]
      );
      const styleElementFactory = (0, import_react19.useCallback)(
        (key, style) => {
          const element = document.createElement("style");
          element.id = getId(key);
          element.innerHTML = style;
          return element;
        },
        [getId]
      );
      const styleExists = (0, import_react19.useCallback)(
        (key) => {
          return key in elementsInRoot.current;
        },
        [elementsInRoot]
      );
      const getExistingStyle = (0, import_react19.useCallback)(
        (key) => {
          if (styleExists(key)) {
            return elementsInRoot.current[key];
          }
          return void 0;
        },
        [elementsInRoot, styleExists]
      );
      const addHeadCss = (0, import_react19.useCallback)(
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
      const addCss = (0, import_react19.useCallback)(
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
      const removeCss = (0, import_react19.useCallback)(
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
    var cssContextDefaults2 = {
      addCss: () => {
      },
      removeCss: () => {
      },
      addHeadCss: () => {
      }
    };
    var CssContext2 = (0, import_react19.createContext)(cssContextDefaults2);
    var CssContextProvider2 = (_a) => {
      var props = __objRest2(_a, []);
      const context = useCssInternal2(props.appRoot);
      (0, import_react19.useInsertionEffect)(() => {
        const variables = new Variables2();
        context.addHeadCss(
          "baseStyles",
          `
            :root {

                ${Variables2.printCss(variables.getColorsVariables())}
                ${Variables2.printCss(variables.getFontVariables())}
                ${Variables2.printCss(variables.getGapVariables())}
                ${Variables2.printCss(variables.getBreakpointsVariables())}

                ${Skin3.key("gap")}: ${Skin3.value("gap-xs")};
                ${Skin3.key("font-size")}: ${Skin3.value("font-size-xs")};

            }
            
        `
        );
        context.addCss(
          "implementationStyles",
          `
    
      .lrc-light {
        ${Variables2.printCss(variables.getColorsVariables())}
      }
      .lrc-dark {
          ${Variables2.printCss(variables.getColorsVariables(true))}
      }

      .lrc-app__root {

          @media ( min-width: ${variables.breakpoints.sm}px ) {
              ${Skin3.key("gap")}: ${Skin3.value("gap-sm")};
              ${Skin3.key("font-size")}: ${Skin3.value("font-size-sm")};
          }
          @media ( min-width: ${variables.breakpoints.md}px ) {
              ${Skin3.key("gap")}: ${Skin3.value("gap-md")};
              ${Skin3.key("font-size")}: ${Skin3.value("font-size-md")};
          }
          @media ( min-width: ${variables.breakpoints.lg}px ) {
              ${Skin3.key("gap")}: ${Skin3.value("gap-lg")};
              ${Skin3.key("font-size")}: ${Skin3.value("font-size-lg")};
          }
          @media ( min-width: ${variables.breakpoints.xl}px ) {
              ${Skin3.key("gap")}: ${Skin3.value("gap-xl")};
              ${Skin3.key("font-size")}: ${Skin3.value("font-size-xl")};
          }

          font-size: ${Skin3.value("font-size")};
          ${Skin3.key("font-size")}: ${Skin3.value("font-size-xs")};
          font-family: sans-serif;
      }
    
    `
        );
      }, []);
      return /* @__PURE__ */ import_react19.default.createElement(CssContext2.Provider, { value: context }, /* @__PURE__ */ import_react19.default.createElement("div", { className: "lrc-app__root" }, props.children));
    };
    var useCss2 = (key, css) => {
      const context = (0, import_react19.useContext)(CssContext2);
      (0, import_react19.useInsertionEffect)(() => {
        context.addCss(key, css);
        return () => {
          context.removeCss(key);
        };
      }, []);
    };
    var useHeadCss2 = (key, css) => {
      const context = (0, import_react19.useContext)(CssContext2);
      (0, import_react19.useInsertionEffect)(() => {
        context.addHeadCss(key, css);
        return () => {
        };
      }, []);
    };
    var import_classnames3 = __toESM2(__require("classnames"));
    var ThermalButton2 = (0, import_react32.forwardRef)((_a, ref) => {
      var _b = _a, {
        variant = "gray"
      } = _b, props = __objRest2(_b, [
        "variant"
      ]);
      useCss2("thermalUiButton", `
    
        .lrc__thermal-ui__button {
            position: relative;
            background: ${Skin3.colorValue(variant, 200)};
            border: 1px solid ${Skin3.colorValue(variant, 300)};
            padding: ${Skin3.gapValue(0.3)} ${Skin3.gapValue(0.5)};
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 200)};

            transition: all .2s ease-in-out;

            &:hover {
                background: ${Skin3.colorValue(variant, 300)};
                border-color: ${Skin3.colorValue(variant, 500)};
            }
        }

        .lrc-dark .lrc__thermal-ui__button {
            color: white;
            box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 50)};
        }

    `);
      return /* @__PURE__ */ import_react32.default.createElement(import_react22.Button, __spreadProps2(__spreadValues2({ ref }, props), { className: (0, import_classnames3.default)("lrc__thermal-ui__button") }), props.children);
    });
    var ThermalRangeAutoButton2 = (_a) => {
      var _b = _a, { registry } = _b, props = __objRest2(_b, ["registry"]);
      const { onClick } = (0, import_react_bridge6.useRangeButtonAuto)(registry);
      return /* @__PURE__ */ import_react42.default.createElement(ThermalButton2, __spreadValues2({ onClick }, props), "Automatick\xFD teplotn\xED rozsah");
    };
    var import_react_bridge22 = __require("@labir/react-bridge");
    var import_react52 = __toESM2(__require("react"));
    var ThermalRangeFullButton2 = (_a) => {
      var _b = _a, {
        registry
      } = _b, props = __objRest2(_b, [
        "registry"
      ]);
      const { onClick } = (0, import_react_bridge22.useRangeButtonFull)(registry);
      return /* @__PURE__ */ import_react52.default.createElement(ThermalButton2, __spreadValues2({ onClick }, props), "Pln\xFD teplotn\xED rozsah");
    };
    var import_react62 = __require("@headlessui/react");
    var import_react72 = __toESM2(__require("react"));
    var DownloadDropdown2 = (props) => {
      const css = (0, import_react72.useMemo)(
        () => `
    
.lrc__downloadDropdown__items {
    background: ${Skin3.colorValue("gray", 100)};
    padding: ${Skin3.gapValue(0.25)};
    box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 200)};
    border: 1px solid ${Skin3.colorValue("gray", 300)};
    border-radius: 5px;
    z-index: 9999;
}

.lrc__downloadDropdown__item {
    font-size: ${Skin3.value("font-size")};
    padding: ${Skin3.gapValue(0.5)} ${Skin3.gapValue(0.7)};
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 5px;
    display: block;
    color: white;

    &:hover {
        background: ${Skin3.colorValue("gray", 200)};
    }
}

.lrc-dark .lrc__paletteDropdown__item {
  color: white;
  box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 50)};
}

`,
        []
      );
      useCss2("downloadDropdown", css);
      useHeadCss2("downloadDropdown", css);
      const items = (0, import_react72.useMemo)(() => {
        const links = [
          {
            href: props.instance.url,
            text: "St\xE1hnout LRC soubor"
          }
        ];
        return links;
      }, [props.instance]);
      return /* @__PURE__ */ import_react72.default.createElement(import_react72.default.Fragment, null, /* @__PURE__ */ import_react72.default.createElement(import_react62.Menu, null, /* @__PURE__ */ import_react72.default.createElement(import_react62.MenuButton, { as: ThermalButton2 }, /* @__PURE__ */ import_react72.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ import_react72.default.createElement("span", null, props.instance.url, " "), /* @__PURE__ */ import_react72.default.createElement(
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
        /* @__PURE__ */ import_react72.default.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          }
        )
      ))), /* @__PURE__ */ import_react72.default.createElement(
        import_react62.MenuItems,
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
        items.map((item) => /* @__PURE__ */ import_react72.default.createElement(
          import_react62.MenuItem,
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
    var import_react82 = __require("@headlessui/react");
    var import_react_bridge32 = __require("@labir/react-bridge");
    var import_react92 = __toESM2(__require("react"));
    var import_uuid2 = __require("uuid");
    var PaletteDropdown2 = () => {
      const palette = (0, import_react_bridge32.useThermalManagerPaletteDrive)((0, import_uuid2.v4)());
      const css = (0, import_react92.useMemo)(() => `
    
  .lrc__paletteDropdown__items {
      background: ${Skin3.colorValue("gray", 100)};
      padding: ${Skin3.gapValue(0.25)};
      box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 200)};
      border: 1px solid ${Skin3.colorValue("gray", 300)};
      border-radius: 5px;
  }

  .lrc__paletteDropdown__item {
      font-size: ${Skin3.value("font-size")};
      padding: ${Skin3.gapValue(0.5)} ${Skin3.gapValue(0.3)};
      font-family: sans-serif;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
          background: ${Skin3.colorValue("gray", 200)};
      }
  }

  .lrc-dark .lrc__paletteDropdown__item {
    color: white;
    box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 50)};
  }

`, []);
      useCss2(
        "paletteDropdown",
        css
      );
      useHeadCss2("paletteDropdown", css);
      return /* @__PURE__ */ import_react92.default.createElement(import_react92.default.Fragment, null, /* @__PURE__ */ import_react92.default.createElement(import_react82.Menu, null, /* @__PURE__ */ import_react92.default.createElement(import_react82.MenuButton, { as: ThermalButton2 }, /* @__PURE__ */ import_react92.default.createElement(import_react92.default.Fragment, null, /* @__PURE__ */ import_react92.default.createElement(import_react_bridge32.PaletteItem, __spreadValues2({}, palette.palette)))), /* @__PURE__ */ import_react92.default.createElement(
        import_react82.MenuItems,
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
        Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ import_react92.default.createElement(
          import_react82.MenuItem,
          {
            key,
            as: "div",
            onClick: () => palette.set(key),
            className: "lrc__paletteDropdown__item"
          },
          /* @__PURE__ */ import_react92.default.createElement(import_react_bridge32.PaletteItem, __spreadValues2({}, item))
        ))
      )));
    };
    var import_react_bridge42 = __require("@labir/react-bridge");
    var import_react122 = __toESM2(__require("react"));
    var import_react102 = __require("@headlessui/react");
    var import_react112 = __toESM2(__require("react"));
    var import_classnames22 = __toESM2(__require("classnames"));
    var ThermalInput2 = (_a) => {
      var _b = _a, {
        variant = "primary",
        className
      } = _b, props = __objRest2(_b, [
        "variant",
        "className"
      ]);
      useCss2("thermalUiInput", `
    .lrc__thermal-ui__input {
      border-radius: 5px;
      padding: ${Skin3.gapValue(0.3)} ${Skin3.gapValue(0.5)};

      &[type=range] {
        padding: 0;
        accent-color: ${Skin3.colorValue(variant, 500)};
        padding-top: ${Skin3.gapValue(0.5)};
      }
    }
  `);
      return /* @__PURE__ */ import_react112.default.createElement(import_react102.Input, __spreadProps2(__spreadValues2({}, props), { className: (0, import_classnames22.default)(className, "lrc__thermal-ui__input") }));
    };
    var ThermalHistogramResolutionInput2 = (_a) => {
      var _b = _a, {
        registry,
        type = "number"
      } = _b, props = __objRest2(_b, [
        "registry",
        "type"
      ]);
      const { onChange, internal, onBlur } = (0, import_react_bridge42.useHistogramResolutionInput)(registry);
      useCss2("button", `
    .button {
      background: red;
      padding: 50px;
    }
  `);
      return /* @__PURE__ */ import_react122.default.createElement(
        ThermalInput2,
        __spreadValues2({
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
    var import_react_bridge52 = __require("@labir/react-bridge");
    var import_react132 = __toESM2(__require("react"));
    var ThermalOpacityInput2 = (_a) => {
      var _b = _a, {
        registry,
        type = "number"
      } = _b, props = __objRest2(_b, [
        "registry",
        "type"
      ]);
      const { onChange, opacity } = (0, import_react_bridge52.useOpacityInput)(registry);
      return /* @__PURE__ */ import_react132.default.createElement(
        ThermalInput2,
        __spreadValues2({
          onChange,
          value: opacity.value,
          min: 0,
          max: 1,
          step: 0.01,
          type
        }, props)
      );
    };
    var import_react142 = __require("@headlessui/react");
    var import_react152 = __require("react");
    var import_dist2 = __toESM2(require_dist2());
    var ThermalModal2 = (props) => {
      const [open, setOpen] = (0, import_react152.useState)(false);
      const Button2 = props.buttonComponent;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button2, { onClick: () => setOpen(true) }, props.buttonContent), /* @__PURE__ */ React.createElement(
        import_react142.Dialog,
        {
          open,
          onClose: () => setOpen(false),
          static: true,
          className: "lrc-dark lrc-app__root"
        },
        /* @__PURE__ */ React.createElement(
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
          /* @__PURE__ */ React.createElement(
            "div",
            {
              style: {
                maxWidth: "800px",
                background: import_dist2.Skin.colorValue("gray", 100),
                padding: import_dist2.Skin.gapValue(),
                borderColor: import_dist2.Skin.colorValue("gray", 200),
                borderWidth: 1,
                borderStyle: "solid",
                boxShadow: `5px 5px 20px ${import_dist2.Skin.colorValue("gray", 50)}`,
                borderRadius: 10,
                color: "white"
              }
            },
            /* @__PURE__ */ React.createElement(import_react142.DialogPanel, null, /* @__PURE__ */ React.createElement(import_react142.DialogTitle, { style: { marginTop: 0 } }, props.title), /* @__PURE__ */ React.createElement("div", { style: { opacity: 0.8 } }, props.content), /* @__PURE__ */ React.createElement(ThermalButton2, { onClick: () => setOpen(false), style: { float: "right" } }, "Zav\u0159\xEDt"))
          )
        )
      ));
    };
    var import_react_code_blocks = __require("react-code-blocks");
    var import_react162 = __toESM2(__require("react"));
    var ThermalEmbedModal2 = (props) => {
      return /* @__PURE__ */ import_react162.default.createElement(
        ThermalModal2,
        {
          title: "Sd\xEDlejte termogram",
          buttonComponent: ThermalButton2,
          buttonContent: "Sd\xEDlet",
          content: /* @__PURE__ */ import_react162.default.createElement(import_react162.default.Fragment, null, /* @__PURE__ */ import_react162.default.createElement("p", null, "Do va\u0161eho webu vlo\u017E\xEDte tento termogram pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du:"), /* @__PURE__ */ import_react162.default.createElement(
            import_react_code_blocks.CopyBlock,
            {
              text: `<script type="module" src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.js"></script>
<thermal-file url="${props.instance.url}" />`,
              language: "html",
              showLineNumbers: true,
              theme: import_react_code_blocks.dracula,
              codeBlock: true
            }
          ))
        }
      );
    };
    var import_react172 = __toESM2(__require("react"));
    var ThermalInfoModal2 = (props) => {
      return /* @__PURE__ */ import_react172.default.createElement(
        ThermalModal2,
        {
          title: "Informace o termogramu",
          buttonComponent: ThermalButton2,
          buttonContent: "Informace o souboru",
          content: /* @__PURE__ */ import_react172.default.createElement(import_react172.default.Fragment, null, /* @__PURE__ */ import_react172.default.createElement("p", null, "N\xE1zev souboru: ", props.instance.url, " "), /* @__PURE__ */ import_react172.default.createElement("p", null, "Rozli\u0161en\xED: ", props.instance.width, " x ", props.instance.height, " px"), /* @__PURE__ */ import_react172.default.createElement("p", null, "Minim\xE1ln\xED teplota: ", props.instance.min, " \xB0C"), /* @__PURE__ */ import_react172.default.createElement("p", null, "Maxim\xE1ln\xED teplota: ", props.instance.max, " \xB0C"), /* @__PURE__ */ import_react172.default.createElement("p", null, "Signatura: ", props.instance.signature), /* @__PURE__ */ import_react172.default.createElement("p", null, "Jednotky: ", props.instance.unit === 2 ? "Stupn\u011B celsia" : "kelviny"), /* @__PURE__ */ import_react172.default.createElement("p", null))
        }
      );
    };
    var import_react182 = __toESM2(__require("react"));
    var Bar2 = (props) => {
      useCss2("thermalBar", `
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${Skin3.gapValue(0.3)};
        background: ${Skin3.colorValue("gray", 100)};
        border: 1px solid ${Skin3.colorValue("gray", 300)};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
        box-shadow: 3px 3px 10px ${Skin3.colorValue("gray", 200)};
    }

    .lrc__bar__name {
        font-weight: bold;
        padding-left: 10px;
    }

    .lrc__bar__secondRow {
        width: 100%;
    }
   
   `);
      return /* @__PURE__ */ import_react182.default.createElement("div", { className: "lrc__bar" }, props.name && /* @__PURE__ */ import_react182.default.createElement("div", { className: "lrc__bar__name" }, props.name), props.children, props.secondRow && /* @__PURE__ */ import_react182.default.createElement("div", { className: "lrc__bar__secondRow" }, props.secondRow), props.mainContent && /* @__PURE__ */ import_react182.default.createElement("div", { className: "lrc__bar__secondRow" }, props.mainContent));
    };
  }
});

// src/components/buttons/ThermalRangeAutoButton.tsx
import { useRangeButtonAuto } from "@labir/react-bridge";
import React4 from "react";

// src/components/ui/thermalButton.tsx
import { Button } from "@headlessui/react";
import React3, { forwardRef } from "react";

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
import React2, {
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
  return /* @__PURE__ */ React2.createElement(CssContext.Provider, { value: context }, /* @__PURE__ */ React2.createElement("div", { className: "lrc-app__root" }, props.children));
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
  return /* @__PURE__ */ React3.createElement(Button, __spreadProps(__spreadValues({ ref }, props), { className: classNames("lrc__thermal-ui__button") }), props.children);
});

// src/components/buttons/ThermalRangeAutoButton.tsx
var ThermalRangeAutoButton = (_a) => {
  var _b = _a, { registry } = _b, props = __objRest(_b, ["registry"]);
  const { onClick } = useRangeButtonAuto(registry);
  return /* @__PURE__ */ React4.createElement(ThermalButton, __spreadValues({ onClick }, props), "Automatick\xFD teplotn\xED rozsah");
};

// src/components/buttons/ThermalRangeFullButton.tsx
import { useRangeButtonFull } from "@labir/react-bridge";
import React5 from "react";
var ThermalRangeFullButton = (_a) => {
  var _b = _a, {
    registry
  } = _b, props = __objRest(_b, [
    "registry"
  ]);
  const { onClick } = useRangeButtonFull(registry);
  return /* @__PURE__ */ React5.createElement(ThermalButton, __spreadValues({ onClick }, props), "Pln\xFD teplotn\xED rozsah");
};

// src/components/dropdowns/DownloadDropdown.tsx
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React6, { useMemo as useMemo2 } from "react";
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
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Menu, null, /* @__PURE__ */ React6.createElement(MenuButton, { as: ThermalButton }, /* @__PURE__ */ React6.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React6.createElement("span", null, props.instance.url, " "), /* @__PURE__ */ React6.createElement(
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
    /* @__PURE__ */ React6.createElement(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      }
    )
  ))), /* @__PURE__ */ React6.createElement(
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
    items.map((item) => /* @__PURE__ */ React6.createElement(
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
import React7, { useMemo as useMemo3 } from "react";
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
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(Menu2, null, /* @__PURE__ */ React7.createElement(MenuButton2, { as: ThermalButton }, /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(PaletteItem, __spreadValues({}, palette.palette)))), /* @__PURE__ */ React7.createElement(
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
    Object.entries(palette.availablePalettes).map(([key, item]) => /* @__PURE__ */ React7.createElement(
      MenuItem2,
      {
        key,
        as: "div",
        onClick: () => palette.set(key),
        className: "lrc__paletteDropdown__item"
      },
      /* @__PURE__ */ React7.createElement(PaletteItem, __spreadValues({}, item))
    ))
  )));
};

// src/components/inputs/ThermalHistogramResolutionInput.tsx
import { useHistogramResolutionInput } from "@labir/react-bridge";
import React9 from "react";

// src/components/ui/thermalInput.tsx
import { Input } from "@headlessui/react";
import React8 from "react";
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
  return /* @__PURE__ */ React8.createElement(Input, __spreadProps(__spreadValues({}, props), { className: classNames2(className, "lrc__thermal-ui__input") }));
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
  return /* @__PURE__ */ React9.createElement(
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
import React10 from "react";
var ThermalOpacityInput = (_a) => {
  var _b = _a, {
    registry,
    type = "number"
  } = _b, props = __objRest(_b, [
    "registry",
    "type"
  ]);
  const { onChange, opacity } = useOpacityInput(registry);
  return /* @__PURE__ */ React10.createElement(
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
var import_dist = __toESM(require_dist());
import {
  Dialog,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";
import { useState } from "react";
var ThermalModal = (props) => {
  const [open, setOpen] = useState(false);
  const Button2 = props.buttonComponent;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button2, { onClick: () => setOpen(true) }, props.buttonContent), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open,
      onClose: () => setOpen(false),
      static: true,
      className: "lrc-dark lrc-app__root"
    },
    /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            maxWidth: "800px",
            background: import_dist.Skin.colorValue("gray", 100),
            padding: import_dist.Skin.gapValue(),
            borderColor: import_dist.Skin.colorValue("gray", 200),
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: `5px 5px 20px ${import_dist.Skin.colorValue("gray", 50)}`,
            borderRadius: 10,
            color: "white"
          }
        },
        /* @__PURE__ */ React.createElement(DialogPanel, null, /* @__PURE__ */ React.createElement(DialogTitle, { style: { marginTop: 0 } }, props.title), /* @__PURE__ */ React.createElement("div", { style: { opacity: 0.8 } }, props.content), /* @__PURE__ */ React.createElement(ThermalButton, { onClick: () => setOpen(false), style: { float: "right" } }, "Zav\u0159\xEDt"))
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
      content: /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement("p", null, "Do va\u0161eho webu vlo\u017E\xEDte tento termogram pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du:"))
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
