"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  AbstractAnalysis: () => AbstractAnalysis,
  AbstractAreaAnalysis: () => AbstractAreaAnalysis,
  AbstractFileResult: () => AbstractFileResult,
  AbstractTool: () => AbstractTool,
  AddEllipsisTool: () => AddEllipsisTool,
  AddRectangleTool: () => AddRectangleTool,
  AnalysisGraph: () => AnalysisGraph,
  CallbacksManager: () => CallbacksManager,
  CornerPoint: () => CornerPoint,
  DropinElementListener: () => DropinElementListener,
  EditTool: () => EditTool,
  EllipsisAnalysis: () => EllipsisAnalysis,
  GRAYSCALE: () => GRAYSCALE,
  IRON: () => IRON,
  InspectTool: () => InspectTool,
  Instance: () => Instance,
  JET: () => JET,
  PointAnalysis: () => PointAnalysis,
  RectangleAnalysis: () => RectangleAnalysis,
  ThermalFileFailure: () => ThermalFileFailure,
  ThermalFileReader: () => ThermalFileReader,
  ThermalGroup: () => ThermalGroup,
  ThermalManager: () => ThermalManager,
  ThermalPalettes: () => ThermalPalettes,
  ThermalRegistry: () => ThermalRegistry,
  TimeFormat: () => TimeFormat,
  TimePeriod: () => TimePeriod,
  TimeRound: () => TimeRound,
  availableAnalysisColors: () => availableAnalysisColors,
  getPool: () => getPool,
  playbackSpeed: () => playbackSpeed,
  supportedFileTypes: () => supportedFileTypes,
  supportedFileTypesInputProperty: () => supportedFileTypesInputProperty
});
module.exports = __toCommonJS(src_exports);

// src/properties/abstractProperty.ts
var AbstractProperty = class {
  constructor(parent, _initial) {
    this.parent = parent;
    this._initial = _initial;
    this._value = this.validate(this._initial);
  }
  _value;
  reset() {
    this.value = this._initial;
  }
  /** Get the current value @readonly */
  get value() {
    return this._value;
  }
  /** Set the value and call all listeners */
  set value(value) {
    this._value = this.validate(value);
    this.afterSetEffect(this._value);
    Object.values(this._listeners).forEach((listener) => listener(this._value));
  }
  _listeners = {};
  addListener(id, listener) {
    if (id in this._listeners) {
      delete this._listeners[id];
    }
    this._listeners[id] = listener;
  }
  removeListener(id) {
    if (id in this._listeners) {
      delete this._listeners[id];
    }
  }
  clearAllListeners() {
    this._listeners = {};
  }
};

// src/properties/abstractMinmaxProperty.ts
var AbstractMinmaxProperty = class extends AbstractProperty {
  /** Get the current distance between min and max */
  get distanceInCelsius() {
    if (this.value === void 0) {
      return void 0;
    }
    return Math.abs(this.value.min - this.value.max);
  }
};

// src/properties/drives/CursorPositionDrive.ts
var CursorPositionDrive = class extends AbstractProperty {
  _hover = this.value !== void 0;
  get hover() {
    return this._hover;
  }
  validate(value) {
    return value;
  }
  // After the position changes, update the hover & project the position in all instances
  afterSetEffect(value) {
    this._hover = this.value !== void 0;
    this.parent.files.forEveryInstance((instance) => instance.recieveCursorPosition(value));
  }
  recieveCursorPosition(position) {
    this.value = position;
  }
};

// src/properties/drives/RangeDriver.ts
var RangeDriver = class extends AbstractProperty {
  fixedRange;
  setFixedRange(value) {
    if (value) {
      if (value.from > value.to) {
        const fromTmp = value.from;
        value.from = value.to;
        value.to = fromTmp;
      }
    }
    this.fixedRange = value;
    if (value) {
      this.imposeRange(this.fixedRange);
    }
  }
  get currentRange() {
    if (this.fixedRange === void 0) {
      return this.value;
    }
    return this.fixedRange;
  }
  /** 
   * Make sure the range is allways within the minmax values.
   * 
   * If this method should work, the value needs to be set before the minmax is calculated.
   */
  validate(value) {
    if (this.fixedRange !== void 0) {
      return this.fixedRange;
    }
    if (value === void 0) {
      return void 0;
    }
    const minmax = this.parent.minmax.value;
    if (minmax === void 0) {
      return value;
    }
    const result = { ...value };
    if (value.from < minmax.min)
      result.from = minmax.min;
    if (value.to > minmax.max)
      result.to = minmax.max;
    return result;
  }
  /**
   * Whenever the range changes, propagate the value to all instances
   */
  afterSetEffect(value) {
    if (value)
      this.parent.forEveryInstance((instance) => instance.recieveRange(value));
  }
  /** 
   * Imposes a range to itself and below
   * - needs to be called before the minmax is calculated!
   */
  imposeRange(value) {
    if (this.fixedRange) {
      this.value = this.fixedRange;
    } else if (value === void 0 && this.value === void 0) {
    } else if (value === void 0 && this.value !== void 0) {
      this.value = value;
    }
    if (value !== void 0 && this.value === void 0) {
      this.value = value;
    } else if (value !== void 0 && this.value !== void 0) {
      if (this.value.from !== value.from || this.value.to !== value.to) {
        this.value = value;
      }
    }
    return this.value;
  }
  /** Sets the range to the current minmax values */
  applyMinmax() {
    if (this.parent.minmax.value) {
      const newRange = { from: this.parent.minmax.value.min, to: this.parent.minmax.value.max };
      if (this.fixedRange) {
        this.setFixedRange(newRange);
      } else {
        this.imposeRange(newRange);
      }
    }
  }
  /** Sets the range automatically based on the current histogram */
  applyAuto() {
    if (this.parent.histogram.value) {
      const length = this.parent.histogram.value.length;
      const percentage = 100 / length;
      const histogramBarsOverPercentage = this.parent.histogram.value.filter((bar) => bar.height >= percentage);
      const newRange = {
        from: histogramBarsOverPercentage[0].from,
        to: histogramBarsOverPercentage[histogramBarsOverPercentage.length - 1].to
      };
      if (this.fixedRange) {
        this.setFixedRange(newRange);
      } else {
        this.imposeRange(newRange);
      }
    }
  }
};

// src/file/palettes.ts
var generateGrayscalePalette = () => {
  const result = [];
  for (let i = 0; i <= 255; i++) {
    result.push(`rgb(${i},${i},${i})`);
  }
  return result;
};
var JET = [
  "rgb( 0, 0, 127 )",
  "rgb( 0, 0, 131)",
  "rgb( 0, 0, 135)",
  "rgb( 0, 0, 139)",
  "rgb( 0, 0, 143)",
  "rgb( 0, 0, 147)",
  "rgb( 0, 0, 151)",
  "rgb( 0, 0, 155)",
  "rgb( 0, 0, 159)",
  "rgb( 0, 0, 163)",
  "rgb( 0, 0, 167)",
  "rgb( 0, 0, 171)",
  "rgb( 0, 0, 175)",
  "rgb( 0, 0, 179)",
  "rgb( 0, 0, 183)",
  "rgb( 0, 0, 187)",
  "rgb( 0, 0, 191)",
  "rgb( 0, 0, 195)",
  "rgb( 0, 0, 199)",
  "rgb( 0, 0, 203)",
  "rgb( 0, 0, 207)",
  "rgb( 0, 0, 211)",
  "rgb( 0, 0, 215)",
  "rgb( 0, 0, 219)",
  "rgb( 0, 0, 223)",
  "rgb( 0, 0, 227)",
  "rgb( 0, 0, 231)",
  "rgb( 0, 0, 235)",
  "rgb( 0, 0, 239)",
  "rgb( 0, 0, 243)",
  "rgb( 0, 0, 247)",
  "rgb( 0, 0, 251)",
  "rgb( 0, 0, 255)",
  "rgb( 0, 4, 255)",
  "rgb( 0, 8, 255)",
  "rgb( 0, 12, 255)",
  "rgb( 0, 16, 255)",
  "rgb( 0, 20, 255)",
  "rgb( 0, 24, 255)",
  "rgb( 0, 28, 255)",
  "rgb( 0, 32, 255)",
  "rgb( 0, 36, 255)",
  "rgb( 0, 40, 255)",
  "rgb( 0, 44, 255)",
  "rgb( 0, 48, 255)",
  "rgb( 0, 52, 255)",
  "rgb( 0, 56, 255)",
  "rgb( 0, 60, 255)",
  "rgb( 0, 64, 255)",
  "rgb( 0, 68, 255)",
  "rgb( 0, 72, 255)",
  "rgb( 0, 76, 255)",
  "rgb( 0, 80, 255)",
  "rgb( 0, 84, 255)",
  "rgb( 0, 88, 255)",
  "rgb( 0, 92, 255)",
  "rgb( 0, 96, 255)",
  "rgb( 0, 100, 255)",
  "rgb( 0, 104, 255)",
  "rgb( 0, 108, 255)",
  "rgb( 0, 112, 255)",
  "rgb( 0, 116, 255)",
  "rgb( 0, 120, 255)",
  "rgb( 0, 124, 255)",
  "rgb( 0, 128, 255)",
  "rgb( 0, 132, 255)",
  "rgb( 0, 136, 255)",
  "rgb( 0, 140, 255)",
  "rgb( 0, 144, 255)",
  "rgb( 0, 148, 255)",
  "rgb( 0, 152, 255)",
  "rgb( 0, 156, 255)",
  "rgb( 0, 160, 255)",
  "rgb( 0, 164, 255)",
  "rgb( 0, 168, 255)",
  "rgb( 0, 172, 255)",
  "rgb( 0, 176, 255)",
  "rgb( 0, 180, 255)",
  "rgb( 0, 184, 255)",
  "rgb( 0, 188, 255)",
  "rgb( 0, 192, 255)",
  "rgb( 0, 196, 255)",
  "rgb( 0, 200, 255)",
  "rgb( 0, 204, 255)",
  "rgb( 0, 208, 255)",
  "rgb( 0, 212, 255)",
  "rgb( 0, 216, 255)",
  "rgb( 0, 220, 255)",
  "rgb( 0, 224, 255)",
  "rgb( 0, 228, 255)",
  "rgb( 0, 232, 255)",
  "rgb( 0, 236, 255)",
  "rgb( 0, 240, 255)",
  "rgb( 0, 244, 255)",
  "rgb( 0, 248, 255)",
  "rgb( 0, 252, 255)",
  "rgb( 1, 255, 253)",
  "rgb( 5, 255, 249)",
  "rgb( 9, 255, 245)",
  "rgb( 13, 255, 241)",
  "rgb( 17, 255, 237)",
  "rgb( 21, 255, 233)",
  "rgb( 25, 255, 229)",
  "rgb( 29, 255, 225)",
  "rgb( 33, 255, 221)",
  "rgb( 37, 255, 217)",
  "rgb( 41, 255, 213)",
  "rgb( 45, 255, 209)",
  "rgb( 49, 255, 205)",
  "rgb( 53, 255, 201)",
  "rgb( 57, 255, 197)",
  "rgb( 61, 255, 193)",
  "rgb( 65, 255, 189)",
  "rgb( 69, 255, 185)",
  "rgb( 73, 255, 181)",
  "rgb( 77, 255, 177)",
  "rgb( 81, 255, 173)",
  "rgb( 85, 255, 169)",
  "rgb( 89, 255, 165)",
  "rgb( 93, 255, 161)",
  "rgb( 97, 255, 157)",
  "rgb( 101, 255, 153)",
  "rgb( 105, 255, 149)",
  "rgb( 109, 255, 145)",
  "rgb( 113, 255, 141)",
  "rgb( 117, 255, 137)",
  "rgb( 121, 255, 133)",
  "rgb( 125, 255, 129)",
  "rgb( 129, 255, 125)",
  "rgb( 133, 255, 121)",
  "rgb( 137, 255, 117)",
  "rgb( 141, 255, 113)",
  "rgb( 145, 255, 109)",
  "rgb( 149, 255, 105)",
  "rgb( 153, 255, 101)",
  "rgb( 157, 255, 97)",
  "rgb( 161, 255, 93)",
  "rgb( 165, 255, 89)",
  "rgb( 169, 255, 85)",
  "rgb( 173, 255, 81)",
  "rgb( 177, 255, 77)",
  "rgb( 181, 255, 73)",
  "rgb( 185, 255, 69)",
  "rgb( 189, 255, 65)",
  "rgb( 193, 255, 61)",
  "rgb( 197, 255, 57)",
  "rgb( 201, 255, 53)",
  "rgb( 205, 255, 49)",
  "rgb( 209, 255, 45)",
  "rgb( 213, 255, 41)",
  "rgb( 217, 255, 37)",
  "rgb( 221, 255, 33)",
  "rgb( 225, 255, 29)",
  "rgb( 229, 255, 25)",
  "rgb( 233, 255, 21)",
  "rgb( 237, 255, 17)",
  "rgb( 241, 255, 13)",
  "rgb( 245, 255, 9)",
  "rgb( 249, 255, 5)",
  "rgb( 253, 255, 1)",
  "rgb( 255, 252, 1)",
  "rgb( 255, 248, 1)",
  "rgb( 255, 244, 1)",
  "rgb( 255, 240, 1)",
  "rgb( 255, 236, 1)",
  "rgb( 255, 232, 1)",
  "rgb( 255, 228, 1)",
  "rgb( 255, 224, 1)",
  "rgb( 255, 220, 1)",
  "rgb( 255, 216, 1)",
  "rgb( 255, 212, 1)",
  "rgb( 255, 208, 1)",
  "rgb( 255, 204, 1)",
  "rgb( 255, 200, 1)",
  "rgb( 255, 196, 1)",
  "rgb( 255, 192, 1)",
  "rgb( 255, 188, 1)",
  "rgb( 255, 184, 1)",
  "rgb( 255, 180, 1)",
  "rgb( 255, 176, 1)",
  "rgb( 255, 172, 1)",
  "rgb( 255, 168, 1)",
  "rgb( 255, 164, 1)",
  "rgb( 255, 160, 1)",
  "rgb( 255, 156, 1)",
  "rgb( 255, 152, 1)",
  "rgb( 255, 148, 1)",
  "rgb( 255, 144, 1)",
  "rgb( 255, 140, 1)",
  "rgb( 255, 136, 1)",
  "rgb( 255, 132, 1)",
  "rgb( 255, 128, 1)",
  "rgb( 255, 124, 1)",
  "rgb( 255, 120, 1)",
  "rgb( 255, 116, 1)",
  "rgb( 255, 112, 1)",
  "rgb( 255, 108, 1)",
  "rgb( 255, 104, 1)",
  "rgb( 255, 100, 1)",
  "rgb( 255, 96, 1)",
  "rgb( 255, 92, 1)",
  "rgb( 255, 88, 1)",
  "rgb( 255, 84, 1)",
  "rgb( 255, 80, 1)",
  "rgb( 255, 76, 1)",
  "rgb( 255, 72, 1)",
  "rgb( 255, 68, 1)",
  "rgb( 255, 64, 1)",
  "rgb( 255, 60, 1)",
  "rgb( 255, 56, 1)",
  "rgb( 255, 52, 1)",
  "rgb( 255, 48, 1)",
  "rgb( 255, 44, 1)",
  "rgb( 255, 40, 1)",
  "rgb( 255, 36, 1)",
  "rgb( 255, 32, 1)",
  "rgb( 255, 28, 1)",
  "rgb( 255, 24, 1)",
  "rgb( 255, 20, 1)",
  "rgb( 255, 16, 1)",
  "rgb( 255, 12, 1)",
  "rgb( 255, 8, 1)",
  "rgb( 255, 4, 1)",
  "rgb( 255, 0, 1)",
  "rgb( 251, 0, 1)",
  "rgb( 247, 0, 1)",
  "rgb( 243, 0, 1)",
  "rgb( 239, 0, 1)",
  "rgb( 235, 0, 1)",
  "rgb( 231, 0, 1)",
  "rgb( 227, 0, 1)",
  "rgb( 223, 0, 1)",
  "rgb( 219, 0, 1)",
  "rgb( 215, 0, 1)",
  "rgb( 211, 0, 1)",
  "rgb( 207, 0, 1)",
  "rgb( 203, 0, 1)",
  "rgb( 199, 0, 1)",
  "rgb( 195, 0, 1)",
  "rgb( 191, 0, 1)",
  "rgb( 187, 0, 1)",
  "rgb( 183, 0, 1)",
  "rgb( 179, 0, 1)",
  "rgb( 175, 0, 1)",
  "rgb( 171, 0, 1)",
  "rgb( 167, 0, 1)",
  "rgb( 163, 0, 1)",
  "rgb( 159, 0, 1)",
  "rgb( 155, 0, 1)",
  "rgb( 151, 0, 1)",
  "rgb( 147, 0, 1)",
  "rgb( 143, 0, 1)",
  "rgb( 139, 0, 1)",
  "rgb( 135, 0, 1)",
  "rgb( 131, 0, 1)",
  "rgb( 127, 0, 1)"
];
var IRON = [
  "rgb( 0, 0, 0 )",
  "rgb(0, 0, 13 )",
  "rgb(0, 0, 29 )",
  "rgb(0, 0, 39 )",
  "rgb(0, 0, 46 )",
  "rgb(0, 0, 53 )",
  "rgb(0, 0, 60 )",
  "rgb(0, 0, 67 )",
  "rgb(0, 0, 74 )",
  "rgb(0, 0, 81 )",
  "rgb(1, 0, 85 )",
  "rgb(2, 0, 89 )",
  "rgb(3, 0, 94 )",
  "rgb(4, 0, 98 )",
  "rgb(5, 0, 101 )",
  "rgb(6, 0, 105 )",
  "rgb(8, 0, 109 )",
  "rgb(10, 0, 113 )",
  "rgb(12, 0, 116 )",
  "rgb(13, 0, 118 )",
  "rgb(15, 0, 120 )",
  "rgb(18, 0, 121 )",
  "rgb(21, 0, 123 )",
  "rgb(24, 0, 126 )",
  "rgb(27, 0, 128 )",
  "rgb(30, 0, 130 )",
  "rgb(33, 0, 133 )",
  "rgb(37, 0, 135 )",
  "rgb(40, 0, 137 )",
  "rgb(44, 0, 138 )",
  "rgb(47, 0, 140 )",
  "rgb(50, 0, 141 )",
  "rgb(53, 0, 142 )",
  "rgb(57, 0, 144 )",
  "rgb(59, 0, 145 )",
  "rgb(62, 0, 147 )",
  "rgb(64, 0, 148 )",
  "rgb(67, 0, 149 )",
  "rgb(70, 0, 150 )",
  "rgb(72, 0, 150 )",
  "rgb(75, 0, 151 )",
  "rgb(78, 0, 151 )",
  "rgb(81, 0, 151 )",
  "rgb(84, 0, 152 )",
  "rgb(87, 0, 152 )",
  "rgb(90, 0, 153 )",
  "rgb(93, 0, 154 )",
  "rgb(96, 0, 155 )",
  "rgb(99, 0, 155 )",
  "rgb(102, 0, 155 )",
  "rgb(105, 0, 155 )",
  "rgb(108, 0, 156 )",
  "rgb(111, 0, 156 )",
  "rgb(113, 0, 157 )",
  "rgb(116, 0, 157 )",
  "rgb(119, 0, 157 )",
  "rgb(122, 0, 157 )",
  "rgb(125, 0, 157 )",
  "rgb(128, 0, 157 )",
  "rgb(131, 0, 157 )",
  "rgb(133, 0, 157 )",
  "rgb(136, 0, 157 )",
  "rgb(138, 0, 157 )",
  "rgb(141, 0, 157 )",
  "rgb(144, 0, 156 )",
  "rgb(148, 0, 156 )",
  "rgb(150, 0, 155 )",
  "rgb(153, 0, 155 )",
  "rgb(155, 0, 155 )",
  "rgb(158, 0, 155 )",
  "rgb(160, 0, 155 )",
  "rgb(162, 0, 155 )",
  "rgb(165, 0, 154 )",
  "rgb(167, 0, 154 )",
  "rgb(169, 0, 154 )",
  "rgb(171, 0, 153 )",
  "rgb(173, 0, 153 )",
  "rgb(175, 1, 152 )",
  "rgb(176, 1, 152 )",
  "rgb(177, 1, 151 )",
  "rgb(179, 1, 150 )",
  "rgb(181, 2, 149 )",
  "rgb(183, 2, 149 )",
  "rgb(184, 3, 149 )",
  "rgb(185, 4, 149 )",
  "rgb(187, 5, 148 )",
  "rgb(188, 5, 147 )",
  "rgb(190, 6, 146 )",
  "rgb(191, 6, 146 )",
  "rgb(192, 7, 145 )",
  "rgb(193, 8, 144 )",
  "rgb(194, 9, 143 )",
  "rgb(195, 11, 142 )",
  "rgb(196, 12, 141 )",
  "rgb(198, 13, 139 )",
  "rgb(199, 14, 138 )",
  "rgb(200, 16, 136 )",
  "rgb(202, 18, 134 )",
  "rgb(202, 19, 133 )",
  "rgb(204, 21, 131 )",
  "rgb(205, 22, 129 )",
  "rgb(206, 23, 126 )",
  "rgb(207, 25, 123 )",
  "rgb(208, 26, 121 )",
  "rgb(209, 28, 118 )",
  "rgb(210, 29, 116 )",
  "rgb(211, 31, 114 )",
  "rgb(212, 33, 111 )",
  "rgb(213, 35, 108 )",
  "rgb(214, 37, 104 )",
  "rgb(215, 38, 101 )",
  "rgb(216, 40, 98 )",
  "rgb(218, 43, 95 )",
  "rgb(219, 45, 91 )",
  "rgb(219, 47, 87 )",
  "rgb(220, 48, 82 )",
  "rgb(221, 50, 76 )",
  "rgb(222, 52, 71 )",
  "rgb(223, 53, 65 )",
  "rgb(224, 55, 59 )",
  "rgb(224, 56, 54 )",
  "rgb(225, 58, 48 )",
  "rgb(226, 60, 42 )",
  "rgb(227, 62, 37 )",
  "rgb(228, 64, 31 )",
  "rgb(228, 66, 28 )",
  "rgb(229, 67, 26 )",
  "rgb(230, 69, 23 )",
  "rgb(230, 71, 22 )",
  "rgb(231, 73, 19 )",
  "rgb(232, 74, 18 )",
  "rgb(232, 76, 16 )",
  "rgb(233, 77, 14 )",
  "rgb(234, 78, 12 )",
  "rgb(234, 80, 11 )",
  "rgb(235, 82, 10 )",
  "rgb(235, 84, 9 )",
  "rgb(236, 86, 8 )",
  "rgb(236, 87, 8 )",
  "rgb(237, 89, 7 )",
  "rgb(237, 91, 6 )",
  "rgb(238, 92, 5 )",
  "rgb(238, 94, 5 )",
  "rgb(239, 95, 4 )",
  "rgb(239, 97, 4 )",
  "rgb(240, 99, 3 )",
  "rgb(240, 100, 3 )",
  "rgb(241, 102, 3 )",
  "rgb(241, 103, 3 )",
  "rgb(241, 105, 2 )",
  "rgb(241, 106, 2 )",
  "rgb(241, 107, 2 )",
  "rgb(242, 109, 1 )",
  "rgb(242, 111, 1 )",
  "rgb(243, 112, 1 )",
  "rgb(243, 114, 1 )",
  "rgb(244, 115, 0 )",
  "rgb(244, 117, 0 )",
  "rgb(244, 119, 0 )",
  "rgb(244, 121, 0 )",
  "rgb(245, 123, 0 )",
  "rgb(245, 126, 0 )",
  "rgb(246, 128, 0 )",
  "rgb(246, 129, 0 )",
  "rgb(247, 131, 0 )",
  "rgb(247, 133, 0 )",
  "rgb(247, 135, 0 )",
  "rgb(248, 136, 0 )",
  "rgb(248, 137, 0 )",
  "rgb(248, 139, 0 )",
  "rgb(248, 140, 0 )",
  "rgb(249, 142, 0 )",
  "rgb(249, 143, 0 )",
  "rgb(249, 144, 0 )",
  "rgb(249, 146, 0 )",
  "rgb(250, 148, 0 )",
  "rgb(250, 150, 0 )",
  "rgb(251, 152, 0 )",
  "rgb(251, 155, 0 )",
  "rgb(252, 157, 0 )",
  "rgb(252, 159, 0 )",
  "rgb(253, 161, 0 )",
  "rgb(253, 163, 0 )",
  "rgb(253, 165, 0 )",
  "rgb(253, 168, 0 )",
  "rgb(253, 170, 0 )",
  "rgb(253, 172, 0 )",
  "rgb(253, 173, 0 )",
  "rgb(254, 175, 0 )",
  "rgb(254, 177, 0 )",
  "rgb(254, 178, 0 )",
  "rgb(254, 180, 0 )",
  "rgb(254, 182, 0 )",
  "rgb(254, 184, 0 )",
  "rgb(254, 186, 0 )",
  "rgb(254, 187, 0 )",
  "rgb(254, 189, 0 )",
  "rgb(254, 191, 0 )",
  "rgb(254, 193, 0 )",
  "rgb(254, 195, 0 )",
  "rgb(254, 197, 0 )",
  "rgb(254, 199, 0 )",
  "rgb(254, 200, 0 )",
  "rgb(254, 202, 1 )",
  "rgb(254, 203, 1 )",
  "rgb(254, 204, 2 )",
  "rgb(254, 206, 3 )",
  "rgb(254, 207, 4 )",
  "rgb(254, 209, 6 )",
  "rgb(254, 211, 8 )",
  "rgb(254, 213, 9 )",
  "rgb(254, 214, 11 )",
  "rgb(254, 216, 12 )",
  "rgb(255, 218, 14 )",
  "rgb(255, 219, 15 )",
  "rgb(255, 220, 19 )",
  "rgb(255, 221, 23 )",
  "rgb(255, 222, 27 )",
  "rgb(255, 224, 31 )",
  "rgb(255, 225, 35 )",
  "rgb(255, 226, 38 )",
  "rgb(255, 228, 42 )",
  "rgb(255, 229, 48 )",
  "rgb(255, 230, 53 )",
  "rgb(255, 231, 59 )",
  "rgb(255, 233, 65 )",
  "rgb(255, 234, 71 )",
  "rgb(255, 235, 76 )",
  "rgb(255, 237, 83 )",
  "rgb(255, 238, 89 )",
  "rgb(255, 239, 95 )",
  "rgb(255, 239, 102 )",
  "rgb(255, 240, 109 )",
  "rgb(255, 241, 115 )",
  "rgb(255, 241, 123 )",
  "rgb(255, 242, 132 )",
  "rgb(255, 243, 139 )",
  "rgb(255, 244, 146 )",
  "rgb(255, 244, 153 )",
  "rgb(255, 245, 160 )",
  "rgb(255, 245, 167 )",
  "rgb(255, 246, 174 )",
  "rgb(255, 247, 181 )",
  "rgb(255, 248, 187 )",
  "rgb(255, 248, 193 )",
  "rgb(255, 249, 198 )",
  "rgb(255, 249, 203 )",
  "rgb(255, 250, 209 )",
  "rgb(255, 251, 215 )",
  "rgb(255, 252, 221 )",
  "rgb(255, 253, 227 )",
  "rgb(255, 253, 232 )",
  "rgb(255, 254, 237 )",
  "rgb(255, 254, 242 )",
  "rgb(255, 255, 247 )",
  "rgb(255, 255, 249 )"
];
var GRAYSCALE = generateGrayscalePalette();
var ThermalPalettes = {
  iron: {
    pixels: IRON,
    name: "paleta IRON",
    gradient: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"
  },
  jet: {
    pixels: JET,
    name: "paleta JET",
    gradient: "linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"
  },
  grayscale: {
    pixels: GRAYSCALE,
    name: "Stupn\u011B \u0161ed\xE9",
    gradient: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"
  }
};

// src/properties/drives/PaletteDrive.ts
var PaletteDrive = class extends AbstractProperty {
  get availablePalettes() {
    return ThermalPalettes;
  }
  /** All the current palette properties should be accessed through this property. */
  get currentPalette() {
    return this.availablePalettes[this.value];
  }
  /** @deprecated Should not be used at all. Use `currentPalette` instead */
  get currentPixels() {
    return this.currentPalette.pixels;
  }
  validate(value) {
    return value;
  }
  /** Any changes to the value should propagate directly to every instance. */
  afterSetEffect(value) {
    this.parent.forEveryRegistry((registry) => {
      registry.forEveryInstance((instance) => instance.recievePalette(value));
    });
  }
  setPalette(key) {
    this.value = key;
  }
};

// src/utils/time/formatting.ts
var import_date_fns = require("date-fns");

// src/utils/time/base.ts
var TimeUtilsBase = class {
  /** Convert an input to a date object */
  static inputToDate = (value) => {
    if (typeof value === "number") {
      const d = /* @__PURE__ */ new Date();
      d.setTime(value);
      return d;
    }
    return value;
  };
};

// src/utils/time/formatting.ts
var TimeFormat = class _TimeFormat extends TimeUtilsBase {
  /** YYYY-MM-DD */
  static isoDate = (value) => {
    value = _TimeFormat.inputToDate(value);
    return (0, import_date_fns.formatISO9075)(value, { representation: "date" });
  };
  /** HH:MM:SS */
  static isoTime = (value) => {
    value = _TimeFormat.inputToDate(value);
    return (0, import_date_fns.formatISO9075)(value, { representation: "time" });
  };
  /** YYYY-MM-DD HH:MM:SS */
  static isoComplete = (value) => {
    value = _TimeFormat.inputToDate(value);
    return (0, import_date_fns.formatISO9075)(value);
  };
  /** HH:mm */
  static humanTime = (value, showSeconds = false) => {
    value = _TimeFormat.inputToDate(value);
    return (0, import_date_fns.format)(value, showSeconds ? "HH:mm:ss" : "HH:mm");
  };
  /** j. M. ???? (y) */
  static humanDate = (value, includeYear = false) => {
    value = _TimeFormat.inputToDate(value);
    return (0, import_date_fns.format)(value, includeYear ? "d. M." : "d. M. yyyy");
  };
  /** Range */
  static humanRangeDates(from, to) {
    from = _TimeFormat.inputToDate(from);
    to = _TimeFormat.inputToDate(to);
    if (from.getUTCDate() === to.getUTCDate()) {
      return _TimeFormat.humanDate(from);
    }
    return [
      _TimeFormat.humanDate(from),
      _TimeFormat.humanDate(to)
    ].join(" - ");
  }
  static human(date) {
    return `${_TimeFormat.humanDate(date)} ${_TimeFormat.humanTime(date, true)} `;
  }
};

// src/utils/time/periods.ts
var TimePeriod = /* @__PURE__ */ ((TimePeriod2) => {
  TimePeriod2["HOUR"] = "jednu hodinu";
  TimePeriod2["DAY"] = "jeden den";
  TimePeriod2["WEEK"] = "jeden t\xFDden";
  TimePeriod2["MONTH"] = "jeden m\u011Bs\xEDc";
  TimePeriod2["YEAR"] = "jeden rok";
  return TimePeriod2;
})(TimePeriod || {});

// src/utils/time/rounding.ts
var import_date_fns2 = require("date-fns");
var TimeRound = class _TimeRound extends TimeUtilsBase {
  static down = (value, roundTo) => {
    if (roundTo === "jednu hodinu" /* HOUR */)
      return (0, import_date_fns2.startOfHour)(value);
    else if (roundTo === "jeden den" /* DAY */)
      return (0, import_date_fns2.startOfDay)(value);
    else if (roundTo === "jeden t\xFDden" /* WEEK */)
      return (0, import_date_fns2.startOfWeek)(value);
    else if (roundTo === "jeden m\u011Bs\xEDc" /* MONTH */)
      return (0, import_date_fns2.startOfMonth)(value);
    return (0, import_date_fns2.startOfYear)(value);
  };
  static up = (value, roundTo) => {
    if (roundTo === "jednu hodinu" /* HOUR */)
      return (0, import_date_fns2.endOfHour)(value);
    else if (roundTo === "jeden den" /* DAY */)
      return (0, import_date_fns2.endOfDay)(value);
    else if (roundTo === "jeden t\xFDden" /* WEEK */)
      return (0, import_date_fns2.endOfWeek)(value);
    else if (roundTo === "jeden m\u011Bs\xEDc" /* MONTH */)
      return (0, import_date_fns2.endOfMonth)(value);
    return (0, import_date_fns2.endOfYear)(value);
  };
  static pick = (value, period) => {
    return [
      _TimeRound.down(value, period),
      _TimeRound.up(value, period)
    ];
  };
  static modify = (value, amount, period) => {
    switch (period) {
      case "jednu hodinu" /* HOUR */:
        return (0, import_date_fns2.addHours)(value, amount);
      case "jeden den" /* DAY */:
        return (0, import_date_fns2.addDays)(value, amount);
      case "jeden t\xFDden" /* WEEK */:
        return (0, import_date_fns2.addDays)(value, amount * 7);
      case "jeden m\u011Bs\xEDc" /* MONTH */:
        return (0, import_date_fns2.addMonths)(value, amount);
      case "jeden rok" /* YEAR */:
        return (0, import_date_fns2.addYears)(value, amount);
    }
  };
};

// src/base/BaseStructureObject.ts
var BaseStructureObject = class {
  // public readonly pool: Pool;
};

// src/file/AbstractFile.ts
var AbstractFile = class extends BaseStructureObject {
  id;
  horizontalLimit;
  verticalLimit;
  group;
  get pool() {
    return this.group.registry.manager.pool;
  }
  url;
  thermalUrl;
  visibleUrl;
  fileName;
  frameCount;
  signature = "unknown";
  version = -1;
  streamCount = -1;
  fileDataType = -1;
  unit = -1;
  width;
  height;
  timestamp;
  duration;
  min;
  max;
  _isHover = false;
  get isHover() {
    return this._isHover;
  }
  set isHover(value) {
    this._isHover = value;
  }
  // DOM root
  root = null;
  // DOM layers
  canvasLayer;
  visibleLayer;
  cursorLayer;
  listenerLayer;
  // Drives
  timeline;
  cursorValue;
  analysis;
  // Recording is lazyloaded
  recording;
  _mounted = false;
  get mountedBaseLayers() {
    return this._mounted;
  }
  set mountedBaseLayers(value) {
    this._mounted = value;
  }
  _pixels;
  get pixels() {
    return this._pixels;
  }
  set pixels(value) {
    this._pixels = value;
    this.onSetPixels(value);
  }
  constructor(group, thermalUrl, width, height, initialPixels, timestamp, duration, min, max, frameCount, visibleUrl) {
    super();
    this.group = group;
    this.id = this.formatId(thermalUrl);
    this.url = thermalUrl;
    this.thermalUrl = thermalUrl;
    this.visibleUrl = visibleUrl;
    this.fileName = this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/") + 1);
    this.width = width;
    this.height = height;
    this.timestamp = timestamp;
    this.duration = duration;
    this.min = min;
    this.max = max;
    this.frameCount = frameCount;
    this.horizontalLimit = this.width / 4 * 3;
    this.verticalLimit = this.height / 4 * 3;
    this._pixels = initialPixels;
  }
  /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
  attachToDom(container) {
    if (this.root !== null || this.mountedBaseLayers === true) {
      console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`);
      this.detachFromDom();
      this.unmountListener();
    }
    this.root = container;
    this.root.classList.add("thermalImageRoot");
    this.root.style.transition = "border-color .1s ease-in-out";
    this.root.style.zIndex = "10";
    this.root.style.position = "relative";
    this.root.style.lineHeight = "0";
    if (this.visibleLayer.exists)
      this.visibleLayer.mount();
    this.canvasLayer.mount();
    this.cursorLayer.mount();
    this.root.dataset.thermalFile = this.id;
    this.root.dataset.mounted = "true";
    this.mountListener();
    this.mountedBaseLayers = true;
  }
  /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
  detachFromDom() {
    if (this.root === void 0) {
      console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`);
    }
    if (this.root) {
      this.root.dataset.mounted = "false";
      this.root.dataset.thermalFile = void 0;
    }
    this.visibleLayer.unmount();
    this.canvasLayer.unmount();
    this.cursorLayer.unmount();
    this.unmountListener();
    this.mountedBaseLayers = false;
  }
  mountToDom(container) {
    this.attachToDom(container);
  }
  unmountFromDom() {
    this.detachFromDom();
  }
  draw() {
    if (this.mountedBaseLayers === true)
      this.canvasLayer.draw();
  }
  recievePalette(palette) {
    palette;
    this.draw();
  }
  destroySelfAndBelow() {
    this.detachFromDom();
  }
  removeAllChildren() {
    this.detachFromDom();
  }
  getTemperatureAtPoint(x, y) {
    const index = y * this.width + x;
    return this.pixels[index];
  }
  getColorAtPoint(x, y) {
    const temperature = this.getTemperatureAtPoint(x, y);
    const min = this.group.registry.range.value?.from;
    const max = this.group.registry.range.value?.to;
    if (min !== void 0 && max !== void 0) {
      const temperatureRelative = temperature - min;
      const temperatureAspect = temperatureRelative / (max - min);
      const colorIndex = Math.round(255 * temperatureAspect);
      return this.group.registry.palette.currentPalette.pixels[colorIndex];
    }
    return void 0;
  }
  recieveRange(value) {
    if (value !== void 0) {
      this.draw();
    }
  }
  reset() {
  }
  recieveOpacity(value) {
    if (this.visibleLayer && this.canvasLayer) {
      this.canvasLayer.opacity = value;
    }
  }
};

// src/file/instanceUtils/AbstractLayer.ts
var AbstractLayer = class {
  constructor(instance) {
    this.instance = instance;
  }
  _mounted = false;
  get mounted() {
    return this._mounted;
  }
  mount() {
    if (!this._mounted) {
      if (this.instance.root !== null) {
        this._mounted = true;
        this.instance.root.appendChild(this.getLayerRoot());
      }
    }
  }
  unmount() {
    if (this._mounted) {
      if (this.instance.root !== null) {
        this._mounted = false;
        this.instance.root.removeChild(this.getLayerRoot());
      }
    }
  }
  destroy() {
    this.onDestroy();
  }
};

// src/file/instanceUtils/domFactories.ts
var ThermalDomFactory = class _ThermalDomFactory {
  static createCanvasContainer() {
    const container = document.createElement("div");
    container.classList.add("thermalCanvasWrapper");
    container.style.position = "relative";
    container.style.userSelect = "none";
    return container;
  }
  static createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.classList.add("thermalCanvas");
    canvas.style.padding = "0px";
    canvas.style.margin = "0px";
    canvas.style.objectFit = "contain";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.objectPosition = "top left";
    canvas.style.imageRendering = "pixelated";
    canvas.style.userSelect = "none";
    return canvas;
  }
  static createDateLayerInner() {
    const inner = document.createElement("div");
    inner.classList.add("dateLayerInner");
    inner.style.margin = "0px";
    inner.style.padding = ".3rem 0rem";
    inner.style.backgroundColor = "black";
    inner.style.color = "white";
    inner.style.borderRadius = ".5rem .5rem 0 0";
    inner.style.width = "calc(100% + 4px )";
    inner.style.position = "absolute";
    inner.style.top = "0rem";
    inner.style.left = "-2px";
    inner.style.opacity = "0";
    inner.style.transition = "opacity .1s ease-in-out";
    inner.style.textAlign = "center";
    inner.style.userSelect = "none";
    return inner;
  }
  static createVisibleLayer() {
    const layer = document.createElement("div");
    layer.classList.add("visibleLayer");
    layer.style.margin = "0px";
    layer.style.padding = "0px";
    layer.style.height = "100%";
    layer.style.width = "100%";
    layer.style.position = "absolute";
    layer.style.top = "0px";
    layer.style.left = "0px";
    layer.style.userSelect = "none";
    return layer;
  }
  static createVisibleImage() {
    const img = document.createElement("img");
    img.classList.add("visibleLayerImage");
    img.style.padding = "0px";
    img.style.margin = "0px";
    img.style.objectFit = "contain";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectPosition = "top left";
    img.style.userSelect = "none";
    return img;
  }
  static createListener() {
    const listener = document.createElement("div");
    listener.classList.add("thermalListener");
    listener.style.margin = "0px";
    listener.style.padding = "0px";
    listener.style.height = "100%";
    listener.style.width = "100%";
    listener.style.position = "absolute";
    listener.style.top = "0px";
    listener.style.left = "0px";
    listener.style.cursor = "pointer";
    listener.style.touchAction = "none";
    listener.style.userSelect = "none";
    listener.setAttribute("id", Math.random().toString());
    return listener;
  }
  static createCursorLayerRoot() {
    const layer = document.createElement("div");
    layer.classList.add("cursorLayerRoot");
    layer.style.width = "100%";
    layer.style.height = "100%";
    layer.style.position = "absolute";
    layer.style.top = "0";
    layer.style.left = "0";
    layer.style.opacity = "0";
    layer.style.overflow = "hidden";
    layer.style.lineHeight = "1rem";
    layer.style.userSelect = "none";
    return layer;
  }
  static createCursorLayerCenter() {
    const container = document.createElement("div");
    container.classList.add("cursorLayerCenter");
    container.style.position = "absolute";
    container.style.top = "0px";
    container.style.left = "0px";
    container.style.width = "0px";
    container.style.height = "0px";
    container.style.userSelect = "none";
    return container;
  }
  static createCursorLayerAxeBase() {
    const axe = document.createElement("div");
    axe.classList.add("cursorLayerAxe");
    axe.style.backdropFilter = "invert(100)";
    axe.style.position = "absolute";
    axe.style.top = "0px";
    axe.style.left = "0px";
    axe.style.content = "";
    axe.style.userSelect = "none";
    return axe;
  }
  static createCursorLayerX() {
    const axeX = _ThermalDomFactory.createCursorLayerAxeBase();
    axeX.classList.add("cursorLayerAxeX");
    axeX.style.width = "1px";
    axeX.style.height = "20px";
    axeX.style.top = "-10px";
    axeX.style.userSelect = "none";
    return axeX;
  }
  static createCursorLayerY() {
    const axeY = _ThermalDomFactory.createCursorLayerAxeBase();
    axeY.classList.add("cursorLayerAxeY");
    axeY.style.width = "20px";
    axeY.style.height = "1px";
    axeY.style.left = "-10px";
    axeY.style.userSelect = "none";
    return axeY;
  }
  static createCursorLayerLabel() {
    const axeLabel = document.createElement("div");
    axeLabel.classList.add("cursorLayerLabel");
    axeLabel.style.position = "absolute";
    axeLabel.style.padding = "1px 3px";
    axeLabel.style.backgroundColor = "rgba( 0,0,0,0.5 )";
    axeLabel.style.color = "white";
    axeLabel.style.whiteSpace = "nowrap";
    axeLabel.style.fontSize = "small";
    axeLabel.style.borderRadius = "5px";
    axeLabel.style.userSelect = "none";
    return axeLabel;
  }
};

// src/file/instanceUtils/thermalCanvasLayer.ts
var ThermalCanvasLayer = class extends AbstractLayer {
  get pool() {
    return this.instance.pool;
  }
  container;
  canvas;
  context;
  // protected offscreen: OffscreenCanvas;
  get width() {
    return this.instance.width;
  }
  get height() {
    return this.instance.height;
  }
  get pixels() {
    return this.instance.pixels;
  }
  get from() {
    return this.instance.group.registry.range.currentRange ? this.instance.group.registry.range.currentRange.from : this.instance.min;
  }
  get to() {
    return this.instance.group.registry.range.currentRange ? this.instance.group.registry.range.currentRange.to : this.instance.max;
  }
  _opacity = 1;
  get opacity() {
    return this._opacity;
  }
  set opacity(value) {
    this._opacity = Math.max(Math.min(value, 1), 0);
    if (this._opacity !== 1)
      this.getLayerRoot().style.opacity = this._opacity.toString();
    else {
      this.getLayerRoot().style.removeProperty("opacity");
    }
  }
  constructor(instance) {
    super(instance);
    this.container = ThermalDomFactory.createCanvasContainer();
    this.canvas = ThermalDomFactory.createCanvas();
    this.canvas.width = this.instance.width;
    this.canvas.height = this.instance.height;
    this.context = this.canvas.getContext("2d");
    this.context.imageSmoothingEnabled = false;
    this.container.appendChild(this.canvas);
  }
  getLayerRoot() {
    return this.container;
  }
  onDestroy() {
    this.canvas.remove();
    this.container.remove();
  }
  /** Returns an array of 255 RGB colors */
  getPalette() {
    return this.instance.group.registry.palette.currentPalette.pixels;
  }
  async draw() {
    const paletteColors = this.getPalette();
    const image = await this.pool.exec(async (from, to, width, height, pixels, palette) => {
      const canvas = new OffscreenCanvas(width, height);
      const context = canvas.getContext("2d");
      const displayRange = to - from;
      for (let x = 0; x <= width; x++) {
        for (let y = 0; y <= height; y++) {
          const index = x + y * width;
          let temperature = pixels[index];
          if (temperature < from)
            temperature = from;
          if (temperature > to)
            temperature = to;
          const temperatureRelative = temperature - from;
          const temperatureAspect = temperatureRelative / displayRange;
          const colorIndex = Math.round(255 * temperatureAspect);
          const color = palette[colorIndex];
          context.fillStyle = color;
          context.fillRect(x, y, 1, 1);
        }
      }
      const imageData = context.getImageData(0, 0, width, height);
      const result = await createImageBitmap(imageData);
      return result;
    }, [
      this.from,
      this.to,
      this.width,
      this.height,
      this.pixels,
      paletteColors
    ], {});
    this.context.drawImage(image, 0, 0);
  }
  exportAsPng() {
    const image = this.canvas.toDataURL();
    const link = document.createElement("a");
    link.download = this.instance.fileName.replace(".lrc", "_exported.png");
    link.href = image;
    link.click();
  }
};

// src/file/instanceUtils/thermalCursorLayer.ts
var ThermalCursorLayer = class extends AbstractLayer {
  layerRoot;
  center;
  axisX;
  axisY;
  label;
  constructor(instance) {
    super(instance);
    this.layerRoot = ThermalDomFactory.createCursorLayerRoot();
    this.center = ThermalDomFactory.createCursorLayerCenter();
    this.axisX = ThermalDomFactory.createCursorLayerX();
    this.axisY = ThermalDomFactory.createCursorLayerY();
    this.label = ThermalDomFactory.createCursorLayerLabel();
    this.layerRoot.appendChild(this.center);
    this.center.appendChild(this.axisX);
    this.center.appendChild(this.axisY);
    this.center.appendChild(this.label);
  }
  // Set visible / invisible
  _show = false;
  get show() {
    return this._show;
  }
  set show(value) {
    this._show = value;
    this.layerRoot.style.opacity = this._show ? "1" : "0";
  }
  _hover = false;
  get hover() {
    return this._hover;
  }
  set hover(value) {
    this._hover = value;
    this.label.style.backgroundColor = this._hover ? "black" : "rgba( 0,0,0,0.5 )";
  }
  recalculateLabelPosition(x, y) {
    if (this.instance.root === null) {
    } else {
      const aspect = this.instance.root.offsetWidth / this.instance.width;
      const centerX = Math.round(x * aspect);
      const centerY = Math.round(y * aspect);
      const wPx = 100 / this.instance.width / 2;
      const hPx = 100 / this.instance.height / 2;
      this.center.style.left = `calc( ${this.px(centerX)} + ${wPx}%)`;
      this.center.style.top = `calc( ${this.px(centerY)} + ${hPx}%)`;
      if (x > this.instance.width / 3) {
        this.label.style.right = "3px";
        this.label.style.removeProperty("left");
      } else {
        this.label.style.left = "3px";
        this.label.style.removeProperty("right");
      }
      if (y > this.instance.height / 4) {
        if (this.label.style.bottom !== "3px") {
          this.label.style.bottom = "3px";
          this.label.style.removeProperty("top");
        }
      } else {
        if (this.label.style.top !== "3px") {
          this.label.style.top = "3px";
          this.label.style.removeProperty("bottom");
        }
      }
    }
  }
  /** @deprecated */
  setCursor(x, y, value) {
    if (this.instance.root === null) {
    } else {
      this.recalculateLabelPosition(x, y);
      this.label.innerHTML = `${value.toFixed(3)} \xB0C`;
    }
  }
  setLabel(x, y, value) {
    if (this.instance.root === null) {
    } else {
      this.recalculateLabelPosition(x, y);
      this.label.innerHTML = value;
    }
  }
  setValue(value) {
    if (value)
      this.label.innerHTML = `${value.toFixed(3)} \xB0C`;
  }
  resetCursor() {
    this.center.style.top = "0px";
    this.center.style.left = "0px";
    this.label.style.removeProperty("right");
    this.label.style.removeProperty("bottom");
    this.label.style.top = "3px";
    this.label.style.left = "3px";
    this.label.innerHTML = "";
  }
  px(number) {
    return `${number}px`;
  }
  getLayerRoot() {
    return this.layerRoot;
  }
  onDestroy() {
    this.label.remove();
    this.axisX.remove();
    this.axisY.remove();
    this.center.remove();
    this.layerRoot.remove();
  }
};

// src/file/instanceUtils/thermalListenerLayer.ts
var ThermalListenerLayer = class extends AbstractLayer {
  container;
  constructor(instance) {
    super(instance);
    this.container = ThermalDomFactory.createListener();
  }
  getLayerRoot() {
    return this.container;
  }
  onDestroy() {
    this.container.remove();
  }
};

// src/file/instanceUtils/VisibleLayer.ts
var VisibleLayer = class extends AbstractLayer {
  constructor(instance, _url) {
    super(instance);
    this._url = _url;
    this.container = ThermalDomFactory.createVisibleLayer();
    if (this._url) {
      this.image = ThermalDomFactory.createVisibleImage();
      this.url = this._url;
      this.container.appendChild(this.image);
    }
  }
  container;
  image;
  get url() {
    return this._url;
  }
  set url(value) {
    this._url = value;
    if (this.image && value) {
      this.image.src = value;
    }
  }
  get exists() {
    return this._url !== void 0;
  }
  getLayerRoot() {
    return this.container;
  }
  onDestroy() {
    if (this.image) this.image.remove();
    this.container.remove();
  }
};

// src/properties/time/playback/TimelineDrive.ts
var import_date_fns3 = require("date-fns");

// src/properties/callbacksManager.ts
var CallbacksManager = class extends Map {
  /** @deprecated use set method instead */
  add(key, callback) {
    this.set(key, callback);
  }
  call(...args) {
    this.forEach((fn) => fn(...args));
  }
};

// src/properties/time/playback/internals/FrameBuffer.ts
var FrameBuffer = class {
  constructor(drive, firstFrame) {
    this.drive = drive;
    this.currentFrame = firstFrame;
  }
  /** @internal use accessors to get and set with side effects */
  _currentFrame;
  /** The current frame data @readonly */
  get currentFrame() {
    return this._currentFrame;
  }
  /** Upon every update of current frame, propagate current pixels to the instance */
  set currentFrame(frame) {
    this._currentFrame = frame;
    this.drive.parent.pixels = this.currentFrame.pixels;
  }
  /** Get the current step value calculated from _currentFrame */
  get currentStep() {
    return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp);
  }
  /** Number of images to preload at once */
  bufferSize = 4;
  /** The actual buffer holding pair of step & frame */
  buffer = /* @__PURE__ */ new Map();
  /** Accessor to array of steps preloaded in the given moment */
  get preloadedSteps() {
    return Array.from(this.buffer.keys());
  }
  /** Accessor to array of relative timestamps preloaded in the given moment */
  get preloadedTimestampsRelative() {
    return this.preloadedSteps.map((step) => step.relative);
  }
  async init() {
    return await this.preloadAfterFrameSet(this.currentStep);
  }
  /**
   * Activate a step
   * - look for the buffer for the corresponding frame
   * - if there is a corresponding frame, apply it
   * - if there is none, fetch it
   * - if sequence, fetch buffer
   * 
   * **THIS IS THE MAIN SETTER**
   */
  async recieveStep(step) {
    let frame = this.buffer.get(step);
    if (frame === void 0) {
      frame = await this.drive.parent.service.frameData(step.index);
    }
    this.currentFrame = frame;
    const status = await this.preloadAfterFrameSet(step);
    return status;
  }
  /** Preload frame data to the buffer based on the provided step */
  async preloadAfterFrameSet(step) {
    const subsetStart = step.index + 1 < this.drive.relativeSteps.length ? step.index + 1 : NaN;
    const subsetEnd = isNaN(subsetStart) ? NaN : this.drive._validateIndex(subsetStart + this.bufferSize);
    if (isNaN(subsetStart) || isNaN(subsetEnd) || subsetStart > subsetEnd) {
      if (step.relative === this.drive.parent.duration) {
        this.buffer.clear();
      }
      return {
        absoluteTime: this.drive.currentStep.absolute,
        relativeTime: this.drive.value,
        currentFrame: this.currentFrame,
        currentStep: this.currentStep,
        buffer: this.preloadedSteps,
        preloaded: false,
        hasChanged: true
      };
    }
    const stepsThatShouldBe = Array.from(this.drive.stepsByIndex.values()).filter((step2) => {
      return step2.index >= subsetStart && step2.index < subsetEnd;
    });
    const newSteps = stepsThatShouldBe.filter((step2) => !this.preloadedSteps.includes(step2));
    const newFrames = await Promise.all(newSteps.map((step2) => {
      return this.drive.parent.service.frameData(step2.index);
    }));
    newFrames.forEach((frame, index) => {
      const step2 = newSteps[index];
      this.buffer.set(step2, frame);
    });
    this.preloadedSteps.forEach((step2) => {
      if (!stepsThatShouldBe.includes(step2)) {
        this.buffer.delete(step2);
      }
    });
    return {
      absoluteTime: this.drive.currentStep.absolute,
      currentFrame: this.currentFrame,
      currentStep: this.currentStep,
      relativeTime: this.drive.value,
      buffer: this.preloadedSteps,
      preloaded: true,
      hasChanged: true
    };
  }
};

// src/properties/time/playback/TimelineDrive.ts
var playbackSpeed = {
  1: 1,
  0.5: 2,
  2: 0.5,
  3: 0.333333333333,
  5: 0.25,
  10: 0.1
};
var TimelineDrive = class extends AbstractProperty {
  constructor(parent, initial, steps, initialFrameData) {
    super(parent, Math.max(Math.min(initial, steps.length), 0));
    this.steps = steps;
    this._currentStep = this.steps[this._initial];
    this.startTimestampRelative = 0;
    this.endTimestampRelative = this.steps[this.steps.length - 1].relative;
    this.isSequence = this.parent.timelineData.length > 1;
    this.steps.forEach((step) => {
      this.stepsByIndex.set(step.index, step);
      this.stepsByAbsolute.set(step.absolute, step);
      this.stepsByRelative.set(step.relative, step);
      this.relativeSteps.push(step.relative);
    });
    this.buffer = new FrameBuffer(this, initialFrameData);
  }
  _playbackSpeed = 1;
  get playbackSpeed() {
    return this._playbackSpeed;
  }
  set playbackSpeed(value) {
    this._playbackSpeed = value;
    this.callbackdPlaybackSpeed.call(this._playbackSpeed);
  }
  get playbackSpeedAspect() {
    return playbackSpeed[this.playbackSpeed];
  }
  get duration() {
    return this.parent.duration;
  }
  get frameCount() {
    return this.steps.length;
  }
  startTimestampRelative;
  /** @deprecated not in use? */
  endTimestampRelative;
  stepsByAbsolute = /* @__PURE__ */ new Map();
  stepsByRelative = /* @__PURE__ */ new Map();
  stepsByIndex = /* @__PURE__ */ new Map();
  relativeSteps = [];
  _currentStep;
  get currentStep() {
    return this._currentStep;
  }
  isSequence;
  _isPlaying = false;
  get isPlaying() {
    return this._isPlaying;
  }
  timer;
  buffer;
  // Callbacks & Listeners
  callbackdPlaybackSpeed = new CallbacksManager();
  callbacksPlay = new CallbacksManager();
  callbacksPause = new CallbacksManager();
  callbacksStop = new CallbacksManager();
  callbacksEnd = new CallbacksManager();
  callbacksChangeFrame = new CallbacksManager();
  get currentMs() {
    return this.currentStep.relative;
  }
  get currentPercentage() {
    return this._convertRelativeToPercent(this.currentStep.relative);
  }
  get currentFrameIndex() {
    return this.currentStep.index;
  }
  get currentTime() {
    return this.formatDuration(this.currentStep.relative);
  }
  init() {
    this.buffer.init();
  }
  afterSetEffect(value) {
    value;
    if (this.steps.length === 1) {
      return;
    }
  }
  validate(value) {
    if (this.steps === void 0) {
      return value;
    }
    if (this.steps.length === 1) {
      return 0;
    }
    return this._validateRelativeTime(value);
  }
  _validateRelativeTime(value) {
    return Math.max(Math.min(value, this.steps[this.steps.length - 1].relative), 0);
  }
  _validateIndex(value) {
    return Math.max(Math.min(value, this.steps.length), 0);
  }
  _convertRelativeToAspect(relativeTimeInMs) {
    return relativeTimeInMs / this.duration;
  }
  _convertRelativeToPercent(relativeTimeInMs) {
    return this._convertRelativeToAspect(relativeTimeInMs) * 100;
  }
  _convertPercenttRelative(percent) {
    return this.duration * percent / 100;
  }
  formatDuration(ms) {
    const date = /* @__PURE__ */ new Date(0);
    date.setMilliseconds(ms);
    return (0, import_date_fns3.format)(date, "mm:ss:SSS");
  }
  findPreviousRelative(relativeTimeInMs) {
    if (this.steps.length === 1) {
      return this.steps[0];
    }
    relativeTimeInMs = this._validateRelativeTime(relativeTimeInMs);
    const aspect = this._convertRelativeToAspect(relativeTimeInMs);
    const index = Math.ceil(aspect * this.steps.length) + 5;
    const sliceStart = this._validateIndex(index - 40);
    const sliceEnd = this._validateIndex(index);
    const reversedSubarray = this.steps.slice(sliceStart, sliceEnd).reverse();
    const frame = reversedSubarray.find((f) => {
      return f.relative <= relativeTimeInMs;
    });
    return frame !== void 0 ? frame : this.steps[0];
  }
  findNextRelative(relativeTimeInMs) {
    if (this.steps.length === 1) {
      return this.steps[0];
    }
    const aspect = this._convertRelativeToAspect(relativeTimeInMs);
    const index = Math.floor(aspect * this.steps.length) - 5;
    const subarrayStart = this._validateIndex(index);
    const subarrayEnd = this._validateIndex(index + 40);
    const subarray = this.steps.slice(subarrayStart, subarrayEnd);
    const frame = subarray.find((f) => {
      return f.relative > relativeTimeInMs;
    });
    return frame !== void 0 ? frame : false;
  }
  async setRelativeTime(relativeTimeInMs) {
    relativeTimeInMs = this._validateRelativeTime(relativeTimeInMs);
    this.value = relativeTimeInMs;
    const currentStep = this.findPreviousRelative(this.value);
    if (currentStep !== this._currentStep) {
      this._currentStep = currentStep;
      const result = await this.buffer.recieveStep(this._currentStep);
      this.callbacksChangeFrame.call(this._currentStep);
      return result;
    }
    return {
      absoluteTime: this._currentStep.absolute,
      relativeTime: this.value,
      currentStep: this._currentStep,
      currentFrame: this.buffer.currentFrame,
      buffer: [],
      preloaded: false,
      hasChanged: false
    };
  }
  async setValueByPercent(percent) {
    percent = Math.max(Math.min(percent, 100), 0);
    const convertedToRelativeTime = this._convertPercenttRelative(percent);
    return await this.setRelativeTime(convertedToRelativeTime);
  }
  /** This is the main play method */
  createNextStepTimer() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
    }
    if (!this.isSequence || this._isPlaying === false) {
      return;
    }
    this.timer = setTimeout(() => {
      const next = this.findNextRelative(this._currentStep.relative);
      if (next) {
        this.value = next.relative;
        if (this._isPlaying) {
          this.value = next.relative;
          this._currentStep = next;
          this.buffer.recieveStep(next);
          this.callbacksChangeFrame.call(next);
          this.createNextStepTimer();
        }
      } else {
        this._isPlaying = false;
        this.callbacksEnd.call();
      }
    }, this._currentStep.offset * this.playbackSpeedAspect);
  }
  play() {
    console.log("pokou\u0161\xEDm se hr\xE1t");
    if (this.steps.length > 1) {
      this._isPlaying = true;
      this.createNextStepTimer();
      this.callbacksPlay.call();
    }
  }
  pause() {
    this._isPlaying = false;
    clearTimeout(this.timer);
    this.callbacksPause.call();
  }
  stop() {
    this.pause();
    this.value = 0;
    this.callbacksStop.call();
  }
};

// src/properties/states/CursorValueDrive.ts
var CursorValueDrive = class extends AbstractProperty {
  validate(value) {
    return value;
  }
  // Once the value changes, project it to the cursor layer
  afterSetEffect() {
  }
  recalculateFromCursor(position) {
    if (position)
      this.value = this._getValueAtCoordinate(position.x, position.y);
  }
  _getValueAtCoordinate(x, y) {
    if (x === void 0 || y === void 0) {
      return void 0;
    }
    const index = x + y * this.parent.width;
    const value = this.parent.pixels[index];
    return value;
  }
};

// src/properties/time/recording/RecordingDrive.ts
var RecordingDrive = class extends AbstractProperty {
  stream;
  recorder;
  mimeType;
  _isRecording = false;
  _mayStop = true;
  get mayStop() {
    return this._mayStop;
  }
  set mayStop(value) {
    this._mayStop = value;
    this.callbackMayStop.call(this.mayStop);
  }
  recordedChunks = [];
  callbackMayStop = new CallbacksManager();
  validate(value) {
    return value;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterSetEffect(value) {
  }
  start() {
    if (this.value === true) {
      throw new Error("Recording already in process - can not start another one");
    }
    const { stream, recorder } = this.initRecording();
    this.stream = stream;
    this.recorder = recorder;
    this.value = true;
    this.recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
        this.download();
        this.clearRecording();
      }
    });
    this.recorder.start();
  }
  end() {
    if (this.value === false) {
      throw new Error("Recording has not started yet - can not end it!");
    }
    if (this.recorder === void 0) {
      throw new Error("Error ending recording - no MediaRecorder instance created.");
    }
    this.recorder.stop();
    this.value = false;
    this.mayStop = true;
  }
  /** Records the entire file from start to the end. */
  async recordEntireFile() {
    if (this.value === true) {
      throw new Error("Already recording the entire file. Can not start until the current recording ends.");
    }
    await this.parent.timeline.setValueByPercent(0);
    this.mayStop = false;
    const cllbackId = "recording entire file";
    this.parent.timeline.callbacksEnd.add(cllbackId, () => {
      console.log("playback ended");
      this.end();
      this.parent.timeline.callbacksEnd.delete(cllbackId);
    });
    this.parent.timeline.play();
    this.start();
  }
  initRecording() {
    if (this.stream || this.recorder) {
      throw new Error("Recording was already initialised! Can not initialise it again until it stops!");
    }
    const stream = this.parent.canvasLayer.canvas.captureStream(25);
    const types = [
      "video/mp4",
      "video/webm;codecs=h264",
      "video/webm;codecs=vp8",
      "video/webm;codecs=daala",
      "video/webm"
    ];
    types.forEach((type) => {
      if (this.mimeType === void 0 && MediaRecorder.isTypeSupported(type))
        this.mimeType = type;
    });
    const options = {
      mimeType: this.mimeType
    };
    const recorder = new MediaRecorder(stream, options);
    return {
      stream,
      recorder,
      options
    };
  }
  download() {
    const blob = new Blob(this.recordedChunks, {
      type: this.mimeType
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = this.parent.fileName.replace(".lrc", `__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`);
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
  clearRecording() {
    if (this.recorder) {
      this.recorder.stop();
      delete this.recorder;
    }
    if (this.stream) {
      delete this.stream;
    }
    if (this.recordedChunks.length > 0) {
      this.recordedChunks = [];
    }
    this.value = false;
    this.mimeType = void 0;
  }
};

// src/file/instanceUtils/ThermalFileExports.ts
var ThermalFileExport = class {
  constructor(file) {
    this.file = file;
  }
  canvasAsPng() {
    return this.file.canvasLayer.exportAsPng();
  }
  thermalDataAsCsv() {
    throw new Error("Not implemented");
  }
};

// src/properties/analysis/internals/AbstractAnalysis.ts
var AbstractAnalysis = class {
  constructor(key, file, initialColor) {
    this.key = key;
    this.file = file;
    this._initialColor = initialColor;
    this.nameInitial = key;
    this._name = key;
    this.layerRoot = document.createElement("div");
    this.layerRoot.style.position = "absolute";
    this.layerRoot.style.top = "0px";
    this.layerRoot.style.left = "0px";
    this.layerRoot.style.width = "100%";
    this.layerRoot.style.height = "100%";
    this.layerRoot.style.overflow = "hidden";
    this.layerRoot.id = `analysis_${this.key}`;
    this.renderRoot.appendChild(this.layerRoot);
    this.onMoveOrResize.set("call recalculate values when a control point moves", () => {
      this.recalculateValues();
    });
  }
  /** Selection status */
  _selected = false;
  get selected() {
    return this._selected;
  }
  onSelected = new CallbacksManager();
  onDeselected = new CallbacksManager();
  /** Actions taken when the value changes. Called internally by `this.recalculateValues()` */
  onValues = new CallbacksManager();
  /** Actions taken when the analysis moves or resizes anyhow. This is very much important and it is called from the edit tool. */
  onMoveOrResize = new CallbacksManager();
  /** The main DOM element of this analysis. Is placed in `this.renderRoot` */
  layerRoot;
  /** Alias of the file's canvasLayer root. The analysis DOM will be placed here. */
  get renderRoot() {
    return this.file.canvasLayer.getLayerRoot();
  }
  points = /* @__PURE__ */ new Map();
  left;
  top;
  width;
  height;
  /** Access all the file's analysis layers. */
  get layers() {
    return this.file.analysis.layers;
  }
  _min;
  get min() {
    return this._min;
  }
  _max;
  get max() {
    return this._max;
  }
  _avg;
  get avg() {
    return this._avg;
  }
  get arrayOfPoints() {
    return Array.from(this.points.values());
  }
  get arrayOfActivePoints() {
    return this.arrayOfPoints.filter((point) => point.active);
  }
  _color = "black";
  get color() {
    return this._color;
  }
  setColor(value) {
    this._color = value;
    this.setColorCallback(value);
    this.onSetColor.call(value);
  }
  onSetColor = new CallbacksManager();
  _initialColor;
  get initialColor() {
    return this._initialColor;
  }
  setInitialColor(value) {
    this._initialColor = value;
    this.onSetInitialColor.call(value);
    if (this.selected === true) {
      this.setColor(value);
    }
  }
  onSetInitialColor = new CallbacksManager();
  // public readonly initialColor: string;
  activeColor = "yellow";
  inactiveColor = "black";
  _graphMinActive = false;
  get graphMinActive() {
    return this._graphMinActive;
  }
  _graphMaxActive = false;
  get graphMaxActive() {
    return this._graphMaxActive;
  }
  _graphAvgActive = false;
  get graphAvgActive() {
    return this._graphAvgActive;
  }
  onGraphActivation = new CallbacksManager();
  emitGraphActivation() {
    this.onGraphActivation.call(
      this._graphMinActive,
      this._graphMaxActive,
      this._graphAvgActive
    );
  }
  /** Indicated whether the analysis is in the state of initial creation (using mouse drag) or if it is already finalized. */
  ready = false;
  nameInitial;
  _name;
  get name() {
    return this._name;
  }
  setName(value) {
    this._name = value;
    this.onSetName.call(value);
  }
  onSetName = new CallbacksManager();
  remove() {
    this.setDeselected();
    this.renderRoot.removeChild(this.layerRoot);
  }
  /** Selection / Deselection */
  setSelected(exclusive = false, emitGlobalEvent = true) {
    if (this.selected === true) {
      return;
    }
    this._selected = true;
    this.onSelected.call(this);
    this.setColor(this.initialColor);
    if (exclusive === true) {
      this.layers.all.filter((analysis) => analysis.key !== this.key).forEach((analysis) => {
        if (analysis.selected) {
          analysis.setDeselected(false);
        }
      });
    }
    if (emitGlobalEvent === true) {
      this.layers.onSelectionChange.call(this.layers.selectedOnly);
    }
  }
  setDeselected(emitGlobalEvent = true) {
    if (this.selected === false) {
      return;
    }
    this._selected = false;
    this.onDeselected.call(this);
    this.setColor(this.inactiveColor);
    this.arrayOfActivePoints.forEach((point) => point.deactivate());
    if (emitGlobalEvent === true) {
      this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);
    }
  }
  /** Recalculate the analysis' values from the current position and dimensions. Called whenever the analysis is resized or whenever file's `pixels` change. */
  recalculateValues() {
    const { min, max, avg } = this.getValues();
    this._min = min;
    this._max = max;
    this._avg = avg;
    this.onValues.call(this.min, this.max, this.avg);
  }
};

// src/properties/analysis/internals/AbstractPoint.ts
var AbstractPoint = class {
  constructor(key, top, left, analysis, color) {
    this.key = key;
    this.analysis = analysis;
    this.pxX = 100 / this.analysis.file.width;
    this.pxY = 100 / this.analysis.file.height;
    this._x = left;
    this._y = top;
    this._color = color;
    this.container = document.createElement("div");
    this.container.style.position = "absolute";
    this.container.id = `analysis_${this.analysis.key}_${this.key}_${this.file.id}`;
    this.innerElement = this.createInnerElement();
    this.container.appendChild(this.innerElement);
    this.projectInnerPositionToDom();
    this.setColor(color);
    this.root.appendChild(this.container);
  }
  get file() {
    return this.analysis.file;
  }
  pxX;
  _x;
  get x() {
    return this._x;
  }
  set x(value) {
    if (this.mayMoveToX(value)) {
      const prev = this._x;
      this._x = value;
      this.onX.call(this._x, prev);
      if (this.container) {
        this.container.style.left = this.getPercentageX() + "%";
      }
    }
  }
  onX = new CallbacksManager();
  pxY;
  _y;
  get y() {
    return this._y;
  }
  set y(value) {
    if (this.mayMoveToY(value)) {
      const prev = this._y;
      this._y = value;
      this.onY.call(this._y, prev);
      if (this.container) {
        this.container.style.top = this.getPercentageY() + "%";
      }
    }
  }
  onY = new CallbacksManager();
  _color;
  get color() {
    return this._color;
  }
  setColor(value) {
    this._color = value;
    this.onSetColor(value);
  }
  get initialColor() {
    return this.analysis.initialColor;
  }
  get activeColor() {
    return this.analysis.activeColor;
  }
  get inactiveColor() {
    return this.analysis.inactiveColor;
  }
  _active = false;
  get active() {
    return this._active;
  }
  _isHover = false;
  get isHover() {
    return this._isHover;
  }
  _isDragging = false;
  get isDragging() {
    return this._isDragging;
  }
  get root() {
    return this.analysis.layerRoot;
  }
  /** The container is allways positioned by percents. The container dimension is allways 1x1. The container contains the inner element which handles the display. */
  container;
  /** The display element. */
  innerElement;
  isWithin(top, left) {
    const offset = this.getRadius() / 2;
    const minX = this.x - offset;
    const maxX = this.x + offset;
    const minY = this.y - offset;
    const maxY = this.y + offset;
    return left >= minX && left <= maxX && top >= minY && top <= maxY;
  }
  isInSelectedLayer() {
    return this.analysis.selected;
  }
  getPercentageX() {
    return this.x / this.analysis.file.width * 100;
  }
  getPercentageY() {
    return this.y / this.analysis.file.height * 100;
  }
  getPercentageCoordinates() {
    const x = this.getPercentageX();
    const y = this.getPercentageY();
    return {
      x,
      y
    };
  }
  /** Take the internal position value and project it to the DOM element */
  projectInnerPositionToDom() {
    if (this.container) {
      const position = this.getPercentageCoordinates();
      this.container.style.left = `${position.x}%`;
      this.container.style.top = `${position.y}%`;
    }
  }
  mouseEnter() {
    if (this.isHover === false) {
      this._isHover = true;
      this.actionOnMouseEnter();
      this.onMouseEnter.call(this);
    }
  }
  mouseLeave() {
    if (this.isHover === true) {
      this._isHover = false;
      this.actionOnMouseLeave();
      this.onMouseLeave.call(this);
    }
  }
  onMouseEnter = new CallbacksManager();
  onMouseLeave = new CallbacksManager();
  onActivate = new CallbacksManager();
  onDeactivate = new CallbacksManager();
  activate() {
    this._active = true;
    this.actionOnActivate();
  }
  deactivate() {
    this._active = false;
    this.actionOnDeactivate();
  }
};

// src/properties/analysis/internals/point/PointPoint.ts
var PointPoint = class _PointPoint extends AbstractPoint {
  static size = 20;
  static sizePx(aspect = 1) {
    return Math.round(_PointPoint.size * aspect).toString() + "px";
  }
  axisX;
  axisY;
  center;
  getPercentXTranslationFromValue() {
    return this.pxX / 2;
  }
  getPercentYTranslationFromValue() {
    return this.pxY / 2;
  }
  constructor(key, top, left, analysis, color) {
    super(
      key,
      top,
      left,
      analysis,
      color
    );
    this.axisX = this.buildAxisX();
    this.axisY = this.buildAxisY();
    this.center = this.buildCenter();
    this.innerElement.appendChild(this.axisX);
    this.innerElement.appendChild(this.axisY);
    this.innerElement.appendChild(this.center);
    this.analysis.onValues.set(this.key, () => {
      const colorFromCurrentPalette = this.analysis.file.getColorAtPoint(this.x, this.y);
      if (this.center && colorFromCurrentPalette) {
        this.center.style.backgroundColor = colorFromCurrentPalette;
      }
    });
  }
  mayMoveToX(value) {
    return value <= this.file.width && value >= 0;
  }
  mayMoveToY(value) {
    return value <= this.file.height && value >= 0;
  }
  createInnerElement() {
    const element = document.createElement("div");
    element.classList.add("innerElement");
    element.style.position = "absolute";
    element.style.top = _PointPoint.sizePx(-0.5);
    element.style.left = _PointPoint.sizePx(-0.5);
    element.style.width = _PointPoint.sizePx();
    element.style.height = _PointPoint.sizePx();
    return element;
  }
  buildAxisX() {
    const axis = document.createElement("div");
    axis.style.position = "absolute";
    axis.style.width = "100%";
    axis.style.height = "1px";
    axis.style.left = "0px";
    axis.style.top = _PointPoint.sizePx(0.5);
    return axis;
  }
  buildAxisY() {
    const axis = document.createElement("div");
    axis.style.position = "absolute";
    axis.style.width = "1px";
    axis.style.height = "100%";
    axis.style.left = _PointPoint.sizePx(0.5);
    axis.style.top = "0px";
    return axis;
  }
  buildCenter() {
    const center = document.createElement("div");
    center.style.position = "absolute";
    center.style.top = `calc( ${_PointPoint.sizePx(0.5)} - 3px )`;
    center.style.left = `calc( ${_PointPoint.sizePx(0.5)} - 3px )`;
    ;
    center.style.width = "5px";
    center.style.height = "5px";
    center.style.borderStyle = "solid";
    center.style.borderWidth = "1px";
    const currentColor = this.analysis.file.getColorAtPoint(this.x, this.y);
    if (currentColor)
      center.style.backgroundColor = currentColor;
    return center;
  }
  onSetColor(value) {
    if (this.axisX) {
      this.axisX.style.backgroundColor = value;
    }
    if (this.axisY) {
      this.axisY.style.backgroundColor = value;
    }
    if (this.center) {
      this.center.style.borderColor = value;
    }
  }
  actionOnMouseEnter() {
    if (this.isInSelectedLayer()) {
      this.setColor(this.activeColor);
      this.setBoxShadow("white");
    }
  }
  actionOnMouseLeave() {
    if (this.isInSelectedLayer()) {
      this.setColor(this.analysis.initialColor);
    } else {
      this.setColor(this.inactiveColor);
    }
    this.setBoxShadow(void 0);
  }
  actionOnActivate() {
    if (this.innerElement) {
      this.setColor(this.activeColor);
    }
  }
  actionOnDeactivate() {
    if (this.innerElement) {
      this.setColor(this.inactiveColor);
    }
  }
  getRadius() {
    return 10;
  }
  setBoxShadow(color = void 0) {
    if (color === void 0) {
      this.axisX?.style.removeProperty("box-shadow");
      this.axisY?.style.removeProperty("box-shadow");
      this.center?.style.removeProperty("box-shadow");
    } else {
      const shadow = `0 0 5px 2px ${color}`;
      if (this.axisX) this.axisX.style.boxShadow = shadow;
      if (this.axisY) this.axisY.style.boxShadow = shadow;
      if (this.center) this.center.style.boxShadow = shadow;
    }
  }
};

// src/properties/analysis/internals/point/PointAnalysis.ts
var PointAnalysis = class _PointAnalysis extends AbstractAnalysis {
  getType() {
    return "point";
  }
  center;
  _graph;
  get graph() {
    if (!this._graph) {
      this._graph = new AnalysisGraph(this);
    }
    return this._graph;
  }
  static addAtPoint(key, color, file, top, left) {
    const item = new _PointAnalysis(
      key,
      color,
      file,
      top,
      left
    );
    return item;
  }
  constructor(key, color, file, top, left) {
    super(key, file, color);
    this.top = top;
    this.left = left;
    this.width = 1;
    this.height = 1;
    this.center = new PointPoint("center", top, left, this, color);
    this.points.set("center", this.center);
    this.center.projectInnerPositionToDom();
    this.center.onX.set("update point", (x) => {
      this.left = x;
    });
    this.center.onY.set("update point", (y) => {
      this.top = y;
    });
    this.recalculateValues();
  }
  setColorCallback(value) {
    this.center.setColor(value);
  }
  isWithin(x, y) {
    return this.center.isWithin(y, x);
  }
  getValues() {
    const value = this.file.getTemperatureAtPoint(this.center.x, this.center.y);
    return {
      min: value,
      max: value,
      avg: value
    };
  }
  async getAnalysisData() {
    return await this.file.service.pointAnalysisData(this.center.x, this.center.y);
  }
  setLeft(value) {
    const validatedValue = Math.max(0, Math.min(this.file.width, Math.round(value)));
    this.center.x = validatedValue;
  }
  setTop(value) {
    const validatedValue = Math.max(0, Math.min(this.file.height, Math.round(value)));
    this.center.y = validatedValue;
  }
};

// src/properties/analysis/graphs/AnalysisGraph.ts
var AnalysisGraph = class {
  constructor(analysis) {
    this.analysis = analysis;
    this.hydrate();
  }
  _min = false;
  _max = false;
  _avg = false;
  get state() {
    return {
      "MIN": this._min,
      "MAX": this._max,
      "AVG": this._avg
    };
  }
  _value;
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.onGraphData.call(value, this.analysis);
  }
  setMinActivation(active) {
    if (this._min !== active) {
      this._min = active;
      this.emitGraphActivation();
    }
  }
  setMaxActivation(active) {
    if (this._max !== active) {
      this._max = active;
      this.emitGraphActivation();
    }
  }
  setAvgActivation(active) {
    if (this._avg !== active) {
      this._avg = active;
      this.emitGraphActivation();
    }
  }
  onGraphActivation = new CallbacksManager();
  onGraphData = new CallbacksManager();
  onAnalysisSelection = new CallbacksManager();
  emitGraphActivation() {
    this.onGraphActivation.call(
      this._min,
      this._max,
      this._avg
    );
  }
  async hydrate() {
    this.analysis.onSetInitialColor.set("__graphs", () => {
      this.analysis.file.analysisData.listeners.refreshOutput();
    });
    this.analysis.onSelected.set("__graphs", (analysis) => {
      this.onAnalysisSelection.call(true, analysis);
    });
    this.analysis.onMoveOrResize.set("__graphs", async (analysis) => {
      const data2 = await analysis.getAnalysisData();
      this.value = data2;
    });
    const data = await this.getGraphData();
    this.value = data;
  }
  async getGraphData() {
    const data = await this.analysis.getAnalysisData();
    return data;
  }
  getGraphColors() {
    if (this.analysis instanceof PointAnalysis) {
      if (this._avg) {
        return [this.analysis.initialColor];
      } else return [];
    }
    const output = [];
    Object.entries(this.state).forEach(([key, value]) => {
      key;
      if (value) {
        output.push(this.analysis.initialColor);
      }
    });
    return output;
  }
  getGraphLabels() {
    if (this.analysis instanceof PointAnalysis) {
      if (this._avg) {
        return [this.analysis.name];
      } else return [];
    }
    const output = [];
    Object.entries(this.state).forEach(([key, value]) => {
      if (value) {
        output.push(`${this.analysis.name} ${key}`);
      }
    });
    return output;
  }
  hasDataToPrint() {
    if (this.analysis instanceof PointAnalysis) {
      return this._avg;
    }
    return this._min || this._max || this._avg;
  }
  getDtaAtTime(timestamp) {
    if (this.analysis instanceof PointAnalysis) {
      if (this._avg) {
        const value2 = this.value;
        return [value2[timestamp]];
      } else return [];
    }
    const output = [];
    const value = this.value;
    if (this._min) {
      output.push(value[timestamp].min);
    }
    if (this._max) {
      output.push(value[timestamp].max);
    }
    if (this._avg) {
      output.push(value[timestamp].avg);
    }
    return output;
  }
};

// src/properties/analysis/internals/area/AbstractHandlePoint.ts
var AbstractHandlePoint = class extends AbstractPoint {
  constructor(key, top, left, analysis, color) {
    super(key, top, left, analysis, color);
    this._color = color;
    this.setColor(color);
  }
  createInnerElement() {
    const inner = document.createElement("div");
    inner.style.position = "absolute";
    inner.style.top = "-5px";
    inner.style.left = "-5px";
    inner.style.width = "10px";
    inner.style.height = "10px";
    inner.style.position = "absolute";
    inner.style.backgroundColor = this.color;
    return inner;
  }
  actionOnMouseEnter() {
    if (this.innerElement && this.isInSelectedLayer()) {
      this.innerElement.style.boxShadow = "0px 0px 10px 2px white";
      this.innerElement.style.borderWidth = "1px";
      this.innerElement.style.borderStyle = "solid";
      this.innerElement.style.borderColor = "white";
    }
  }
  actionOnMouseLeave() {
    if (this.innerElement) {
      this.innerElement.style.removeProperty("box-shadow");
      this.innerElement.style.removeProperty("border-width");
      this.innerElement.style.removeProperty("border-style");
      this.innerElement.style.removeProperty("border-color");
    }
  }
};

// src/properties/analysis/internals/area/CornerPoint.ts
var CornerPoint = class extends AbstractHandlePoint {
  getRadius() {
    return 10;
  }
  getPercentXTranslationFromValue(value) {
    if (this.analysis.width + this.analysis.left === value) {
      return this.pxX;
    }
    return 0;
  }
  getPercentYTranslationFromValue(value) {
    if (this.analysis.height + this.analysis.top === value) {
      return this.pxY;
    }
    return 0;
  }
  mayMoveToX(value) {
    return value <= this.file.width && value >= 0;
  }
  mayMoveToY(value) {
    return value <= this.file.height && value >= 0;
  }
  isMoving = false;
  onSetColor(value) {
    if (this.innerElement)
      this.innerElement.style.backgroundColor = value;
  }
  syncXWith(point) {
    this.onX.add(`sync X with ${point.key} `, (value) => {
      if (point.x !== value) {
        point.x = value;
      }
    });
  }
  syncYWith(point) {
    this.onY.add(`sync Y with ${point.key} `, (value) => {
      if (point.y !== value) {
        point.y = value;
      }
    });
  }
  actionOnActivate() {
    if (this.innerElement) {
      this.setColor(this.activeColor);
    }
  }
  actionOnDeactivate() {
    if (this.innerElement) {
      this.setColor(
        this.isInSelectedLayer() ? this.initialColor : this.inactiveColor
      );
    }
  }
};

// src/properties/analysis/internals/area/AbstractAreaAnalysis.ts
var AbstractAreaAnalysis = class extends AbstractAnalysis {
  wPx = (100 / this.file.width / 2).toString() + "%";
  hPx = (100 / this.file.height / 2).toString() + "%";
  tl;
  tr;
  bl;
  br;
  area;
  _graph;
  get graph() {
    if (!this._graph) {
      this._graph = new AnalysisGraph(this);
    }
    return this._graph;
  }
  isWithin(x, y) {
    return x >= this.left && x <= this.left + this.width && y >= this.top && y <= this.top + this.height;
  }
  static calculateDimensionsFromCorners(top, left, right, bottom) {
    const t = Math.min(top, bottom);
    const b = Math.max(top, bottom);
    const l = Math.min(left, right);
    const r = Math.max(left, right);
    const w = r - l;
    const h = b - t;
    return {
      top: t,
      left: l,
      width: w,
      height: h
    };
  }
  constructor(key, color, file, top, left, width, height) {
    super(key, file, color);
    let right = left;
    let bottom = top;
    if (width !== void 0 && height !== void 0) {
      right = left + width;
      bottom = top + height;
    }
    this.area = this.buildArea(top, left, width, height);
    this.tl = this.addPoint("tl", top, left);
    this.tr = this.addPoint("tr", top, right);
    this.bl = this.addPoint("bl", bottom, left);
    this.br = this.addPoint("br", bottom, right);
    this.tl.syncXWith(this.bl);
    this.tl.syncYWith(this.tr);
    this.tr.syncXWith(this.br);
    this.tr.syncYWith(this.tl);
    this.bl.syncXWith(this.tl);
    this.bl.syncYWith(this.br);
    this.br.syncXWith(this.tr);
    this.br.syncYWith(this.bl);
    this.calculateBounds();
    this.onMoveOrResize.set("sync the area", () => {
      this.calculateBounds();
    });
    this.points.forEach((point) => point.projectInnerPositionToDom());
  }
  setColorCallback(value) {
    this.points.forEach((point) => point.setColor(value));
    this.area.setColor(value);
  }
  calculateBounds() {
    let leftMost = this.file.width;
    let rightMost = 0;
    let topMost = this.file.height;
    let bottomMost = 0;
    this.points.forEach((point) => {
      if (point.x > rightMost) {
        rightMost = point.x;
      }
      if (point.x < leftMost) {
        leftMost = point.x;
      }
      if (point.y < topMost) {
        topMost = point.y;
      }
      if (point.y > bottomMost) {
        bottomMost = point.y;
      }
    });
    this.left = leftMost;
    this.top = topMost;
    this.width = rightMost - leftMost;
    this.height = bottomMost - topMost;
    this.area.left = this.left;
    this.area.top = this.top;
    this.area.height = this.height;
    this.area.width = this.width;
  }
  addPoint(role, top, left) {
    const point = new CornerPoint(role, top, left, this, this.color);
    this.points.set(role, point);
    return point;
  }
  setLeft(value) {
    this.leftmostPoint.x = value;
  }
  setRight(value) {
    this.rightmostPoint.x = value;
  }
  setTop(value) {
    this.topmostPoint.y = value;
  }
  setBottom(value) {
    this.bottommostPoint.y = value;
  }
  get leftmostPoint() {
    let point = this.tl;
    this.points.forEach((p) => {
      if (p.x < point.x) {
        point = p;
      }
    });
    return point;
  }
  get rightmostPoint() {
    let point = this.tr;
    this.points.forEach((p) => {
      if (p.x > point.x) {
        point = p;
      }
    });
    return point;
  }
  get topmostPoint() {
    let point = this.tl;
    this.points.forEach((p) => {
      if (p.y < point.y) {
        point = p;
      }
    });
    return point;
  }
  get bottommostPoint() {
    let point = this.br;
    this.points.forEach((p) => {
      if (p.y > point.y) {
        point = p;
      }
    });
    return point;
  }
};

// src/properties/analysis/internals/area/AbstractArea.ts
var AbstractArea = class {
  constructor(analysis, top, right, left, bottom) {
    this.analysis = analysis;
    this.build();
    this.top = top;
    this.left = left;
    this.width = right;
    this.height = bottom;
  }
  get fileWidth() {
    return this.analysis.file.width;
  }
  get fileHeight() {
    return this.analysis.file.height;
  }
  get root() {
    return this.analysis.layerRoot;
  }
  element;
  _top;
  _width;
  _left;
  _height;
  get top() {
    return this._top;
  }
  set top(value) {
    this._top = value;
    if (this.element) {
      this.element.style.top = `${this._top / this.fileHeight * 100}%`;
    }
  }
  get left() {
    return this._left;
  }
  set left(value) {
    this._left = value;
    if (this.element) {
      this.element.style.left = `${this._left / this.fileWidth * 100}%`;
    }
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
    if (this.element) {
      this.element.style.height = `${this.height / this.fileHeight * 100}%`;
    }
  }
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
    if (this.element) {
      this.element.style.width = `${this.width / this.fileWidth * 100}%`;
    }
  }
  get center() {
    return {
      x: this.left + this.width / 2,
      y: this.top + this.height / 2
    };
  }
  build() {
    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.onBuild();
    this.root.appendChild(this.element);
  }
  setColor(value) {
    this.onSetColor(value);
  }
};

// src/properties/analysis/internals/area/ellipsis/EllipsisArea.ts
var EllipsisArea = class extends AbstractArea {
  onBuild() {
    this.element.style.borderWidth = "1px";
    this.element.style.borderColor = this.analysis.color;
    this.element.style.borderStyle = "solid";
    this.element.style.borderRadius = "50%";
  }
  onSetColor(value) {
    this.element.style.borderColor = value;
  }
};

// src/properties/analysis/internals/area/ellipsis/EllipsisAnalysis.ts
var EllipsisAnalysis = class _EllipsisAnalysis extends AbstractAreaAnalysis {
  getType() {
    return "ellipsis";
  }
  static startAddingAtPoint(key, color, file, top, left) {
    const item = new _EllipsisAnalysis(
      key,
      color,
      file,
      top,
      left
    );
    item.br.activate();
    return item;
  }
  static build(key, color, file, _top, _left, _right, _bottom) {
    const { top, left, width, height } = _EllipsisAnalysis.calculateDimensionsFromCorners(_top, _left, _right, _bottom);
    const item = new _EllipsisAnalysis(
      key,
      color,
      file,
      top,
      left,
      width,
      height
    );
    item.recalculateValues();
    return item;
  }
  buildArea(x, y, width, height) {
    if (width !== void 0 && height !== void 0) {
      return new EllipsisArea(
        this,
        x,
        y,
        x + width,
        y + height
      );
    }
    return new EllipsisArea(this, x, y, x, y);
  }
  getValues() {
    const fromX = this.left;
    const toX = this.left + this.width;
    const fromY = this.top;
    const toY = this.top + this.height;
    let min = Infinity;
    let max = -Infinity;
    let count = 0;
    let sum = 0;
    for (let y = fromY; y < toY; y++) {
      const rowOffset = this.file.width * y;
      for (let x = fromX; x <= toX; x++) {
        if (this.isWithin(x, y)) {
          const point = this.file.pixels[rowOffset + x];
          if (point < min) {
            min = point;
          }
          if (point > max) {
            max = point;
          }
          sum += point;
          count++;
        }
      }
    }
    return {
      min,
      max,
      avg: sum / count
    };
  }
  isWithin(x, y) {
    const centerX = this.left + this.width / 2;
    const centerY = this.top + this.height / 2;
    const normalizedX = (x - centerX) / (this.width / 2);
    const normalizedY = (y - centerY) / (this.height / 2);
    return normalizedX * normalizedX + normalizedY * normalizedY <= 1;
  }
  async getAnalysisData() {
    return await this.file.service.ellipsisAnalysisData(
      this.left,
      this.top,
      this.width,
      this.height
    );
  }
};

// src/properties/analysis/internals/area/rectangle/RectangleArea.ts
var RectangleArea = class extends AbstractArea {
  onBuild() {
    this.element.style.borderWidth = "1px";
    this.element.style.borderColor = this.analysis.color;
    this.element.style.borderStyle = "solid";
  }
  onSetColor(value) {
    this.element.style.borderColor = value;
  }
};

// src/properties/analysis/internals/area/rectangle/RectangleAnalysis.ts
var RectangleAnalysis = class _RectangleAnalysis extends AbstractAreaAnalysis {
  getType() {
    return "rectangle";
  }
  static startAddingAtPoint(key, color, file, top, left) {
    const item = new _RectangleAnalysis(
      key,
      color,
      file,
      top,
      left
    );
    item.br.activate();
    return item;
  }
  static build(key, color, file, _top, _left, _right, _bottom) {
    const { top, left, width, height } = _RectangleAnalysis.calculateDimensionsFromCorners(_top, _left, _right, _bottom);
    const item = new _RectangleAnalysis(
      key,
      color,
      file,
      top,
      left,
      width,
      height
    );
    item.recalculateValues();
    return item;
  }
  buildArea(x, y, width, height) {
    if (width !== void 0 && height !== void 0) {
      return new RectangleArea(
        this,
        x,
        y,
        x + width,
        y + height
      );
    }
    return new RectangleArea(this, x, y, x, y);
  }
  getValues() {
    const fromX = this.left;
    const toX = this.left + this.width;
    const fromY = this.top;
    const toY = this.top + this.height;
    let min = Infinity;
    let max = -Infinity;
    let count = 0;
    let sum = 0;
    for (let y = fromY; y < toY; y++) {
      const rowOffset = this.file.width * y;
      for (let x = fromX; x <= toX; x++) {
        const point = this.file.pixels[rowOffset + x];
        if (point < min) {
          min = point;
        }
        if (point > max) {
          max = point;
        }
        sum += point;
        count++;
      }
    }
    return {
      min,
      max,
      avg: sum / count
    };
  }
  async getAnalysisData() {
    return await this.file.service.rectAnalysisData(
      this.left,
      this.top,
      this.width,
      this.height
    );
  }
};

// src/properties/analysis/internals/storage/AnalysisLayersStorage.ts
var availableAnalysisColors = [
  "Orange",
  "Lightblue",
  "Green",
  "Brown",
  "Yellow",
  "Blue",
  "Pink",
  "DarkGoldenRod",
  "GreenYellow",
  "SpringGreen",
  "SkyBlue"
];
var AnalysisLayersStorage = class extends Map {
  constructor(drive) {
    super();
    this.drive = drive;
  }
  /** Array of all layers ordered from oldest to the newest */
  layers = [];
  /** Fired whenever an analysis is added */
  onAdd = new CallbacksManager();
  /** Fired whenever an analysis is removed */
  onRemove = new CallbacksManager();
  /** Fired whenever the selection list changes */
  onSelectionChange = new CallbacksManager();
  /** Array of available colors */
  colors = availableAnalysisColors;
  // Adding analysis
  addAnalysis(analysis) {
    if (this.has(analysis.key)) {
      this.removeAnalysis(analysis.key);
    }
    analysis.setColor(analysis.initialColor);
    this.set(analysis.key, analysis);
    this.layers = [...this.layers, analysis];
    this.onAdd.call(analysis, this.all);
    this.drive.dangerouslySetValueFromStorage(this.all);
    return this;
  }
  removeAnalysis(key) {
    if (this.has(key)) {
      this.get(key)?.remove();
      this.delete(key);
      this.layers = this.layers.filter((analysis) => analysis.key !== key);
      this.onRemove.call(key);
      this.drive.dangerouslySetValueFromStorage(this.all);
    }
  }
  /** Add a rectangular analysis in the given position and start editing it. */
  createRectFrom(top, left) {
    const newAnalysis = RectangleAnalysis.startAddingAtPoint(
      this.getNextName("Rectangle"),
      this.getNextColor(),
      this.drive.parent,
      top,
      left
    );
    this.addAnalysis(newAnalysis);
    return newAnalysis;
  }
  /** Build an ellyptical analysis at the given position. */
  placeRectAt(name, top, left, right, bottom, color) {
    const newAnalysis = RectangleAnalysis.build(
      name,
      color ?? this.getNextColor(),
      this.drive.parent,
      top,
      left,
      right,
      bottom
    );
    newAnalysis.ready = true;
    this.addAnalysis(newAnalysis);
    return newAnalysis;
  }
  /** Add an ellyptical analysis in the given position and start editing it */
  createEllipsisFrom(top, left) {
    const newAnalysis = EllipsisAnalysis.startAddingAtPoint(
      this.getNextName("Ellipsis"),
      this.getNextColor(),
      this.drive.parent,
      top,
      left
    );
    this.addAnalysis(newAnalysis);
    return newAnalysis;
  }
  /** Build an ellyptical analysis at the given position. */
  placeEllipsisAt(name, top, left, right, bottom, color) {
    const newAnalysis = EllipsisAnalysis.build(
      name,
      color ?? this.getNextColor(),
      this.drive.parent,
      top,
      left,
      right,
      bottom
    );
    newAnalysis.ready = true;
    this.addAnalysis(newAnalysis);
    return newAnalysis;
  }
  createPointAt(top, left) {
    const newAnalysis = PointAnalysis.addAtPoint(
      this.getNextName("Point"),
      this.getNextColor(),
      this.drive.parent,
      top,
      left
    );
    this.addAnalysis(newAnalysis);
    return newAnalysis;
  }
  placePointAt(name, top, left, color) {
    const newAnalysis = PointAnalysis.addAtPoint(
      name,
      color ?? this.getNextColor(),
      this.drive.parent,
      top,
      left
    );
    newAnalysis.ready = true;
    this.addAnalysis(newAnalysis);
    return newAnalysis;
  }
  selectAll() {
    this.all.filter((analysis) => {
      if (analysis.selected === false) {
        analysis.setSelected(false, false);
      }
    });
    this.onSelectionChange.call(this.selectedOnly);
  }
  deselectAll() {
    this.selectedOnly.forEach((analysis) => {
      analysis.setDeselected(false);
    });
    this.onSelectionChange.call(this.selectedOnly);
  }
  /** Accessors */
  /** Array of all analysis ordered from the oldest to the newest. */
  get all() {
    return this.layers;
  }
  /** Array of all active analysis ordered from the oldest to the newest. */
  get selectedOnly() {
    return this.all.filter((analysis) => analysis.selected === true);
  }
  /** Get color for the next analysis */
  getNextColor() {
    const usedColors = this.all.map((analysis) => analysis.initialColor);
    const availableColors = availableAnalysisColors.filter((color) => !usedColors.includes(color));
    if (availableColors.length > 0) {
      return availableColors[0];
    } else {
      return availableAnalysisColors[0];
    }
  }
  /** Get name for the next analysis */
  getNextName(type) {
    return `${type} ${this.all.length}`;
  }
};

// src/properties/analysis/internals/storage/AnalysisPointsAccessor.ts
var AnalysisPointsAccessor = class {
  constructor(drive) {
    this.drive = drive;
  }
  /** Get all points from all layers */
  get all() {
    return this.extractPointsFromLayers(this.drive.layers.all);
  }
  /** Get all points from selected layers */
  get allInSelectedLayers() {
    return this.extractPointsFromLayers(this.drive.layers.selectedOnly);
  }
  /** Get only active points from selected layers */
  get activeInSelectedLayers() {
    return this.extractPointsFromLayers(this.drive.layers.selectedOnly, true);
  }
  /** Extract points from all provided layers */
  extractPointsFromLayers(layers, activeOnly = false) {
    return layers.reduce((state, current) => {
      const currentPoints = activeOnly ? current.arrayOfActivePoints : current.arrayOfPoints;
      return [...state, ...currentPoints];
    }, []);
  }
};

// src/properties/analysis/AnalysisDrive.ts
var AnalysisDrive = class extends AbstractProperty {
  layers = new AnalysisLayersStorage(this);
  points = new AnalysisPointsAccessor(this);
  /** Listeners shall be binded to the file's listener layer. Alias of the file's listener layer root. */
  get listenerLayerContainer() {
    return this.parent.listenerLayer.getLayerRoot();
  }
  /** Alias of the current `ToolDrive` value. */
  get currentTool() {
    return this.parent.group.tool.value;
  }
  /** Cached listener on `this.listenerLayerContainer` - pointermove event. */
  bindedPointerMoveListener;
  /** Cached listener on `this.listenerLayerContainer` - pointerdown event. */
  bindedPointerDownListener;
  /** Cached listener on `this.listenerLayerContainer` - pointerup event. */
  bindedPointerUpListener;
  /** 
   * Value of this drive is stored in `AnalysisLayersStorage` and from there, it is mirrored to the drive.
   * It is better to add listeners to the storage, not to the drive.
   */
  dangerouslySetValueFromStorage(value) {
    this.value = value;
  }
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  /** Calculate the top/left position from a `MouseEvent` */
  getRelativePosition(event) {
    const absoluteWidth = this.listenerLayerContainer.clientWidth;
    const fileWidth = this.parent.width;
    const layerX = event.layerX;
    const xAspect = layerX / absoluteWidth;
    const x = Math.round(fileWidth * xAspect);
    const absoluteHeight = this.listenerLayerContainer.clientHeight;
    const fileHeight = this.parent.height;
    const layerY = event.layerY;
    const yAspect = layerY / absoluteHeight;
    const y = Math.round(fileHeight * yAspect);
    return {
      top: y,
      left: x
    };
  }
  /** Activate listeners for the current drive on the file's listener layer. */
  activateListeners() {
    this.bindedPointerMoveListener = (event) => {
      const position = this.getRelativePosition(event);
      this.points.all.forEach((point) => {
        if (point.active) {
          this.currentTool.onPointMove(point, position.top, position.left);
        }
        const pointIsUnderCursor = point.isWithin(position.top, position.left);
        if (pointIsUnderCursor) {
          this.currentTool.onPointEnter(point);
        } else if (!pointIsUnderCursor) {
          this.currentTool.onPointLeave(point);
        }
      });
    };
    this.bindedPointerDownListener = (event) => {
      const position = this.getRelativePosition(event);
      this.currentTool.onCanvasClick(position.top, position.left, this.parent);
      this.points.all.forEach((point) => {
        if (point.isWithin(position.top, position.left)) {
          this.currentTool.onPointDown(point);
        }
      });
    };
    this.bindedPointerUpListener = () => {
      this.points.all.forEach((point) => {
        this.currentTool.onPointUp(point);
      });
    };
    this.listenerLayerContainer.addEventListener("pointermove", this.bindedPointerMoveListener);
    this.listenerLayerContainer.addEventListener("pointerdown", this.bindedPointerDownListener);
    this.listenerLayerContainer.addEventListener("pointerup", this.bindedPointerUpListener);
  }
  /** Remove all listeners from the file's listener layer */
  deactivateListeners() {
    if (this.bindedPointerMoveListener) {
      this.listenerLayerContainer.removeEventListener("pointermove", this.bindedPointerMoveListener);
    }
    if (this.bindedPointerDownListener) {
      this.listenerLayerContainer.removeEventListener("pointerdown", this.bindedPointerDownListener);
    }
    if (this.bindedPointerUpListener) {
      this.listenerLayerContainer.removeEventListener("pointerup", this.bindedPointerUpListener);
    }
  }
};

// src/properties/analysis/graphs/AnalysisGraphsStorage.ts
var import_date_fns4 = require("date-fns");
var AnalysisGraphsStorage = class {
  constructor(drive) {
    this.drive = drive;
    this.layers.onAdd.set(this.listenerKey, async (layer) => {
      const item = layer.graph;
      this.addGraph(item);
      item.onAnalysisSelection.set(this.listenerKey, async () => {
        this.refreshOutput();
      });
      item.onGraphActivation.set(this.listenerKey, async () => {
        this.refreshOutput();
      });
      item.onGraphData.set(this.listenerKey, async () => {
        this.refreshOutput();
      });
      item.analysis.onSetName.set(this.listenerKey, () => {
        this.refreshOutput();
      });
    });
    this.layers.onRemove.set(this.listenerKey, async (layer) => {
      this.removeGraph(layer);
      this.refreshOutput();
    });
  }
  listenerKey = "___listen-to-graphs___";
  get layers() {
    return this.drive.parent.analysis.layers;
  }
  _graphs = /* @__PURE__ */ new Map();
  get graphs() {
    return this._graphs;
  }
  addGraph(graph) {
    this._graphs.set(graph.analysis.key, graph);
    this.onAddGraph.call(graph);
  }
  removeGraph(graph) {
    this._graphs.delete(graph);
    this.onRemoveGraph.call(graph);
  }
  _output = {
    values: [[]],
    colors: []
  };
  get output() {
    return this._output;
  }
  set output(output) {
    this._output = output;
    this.onOutput.call(output);
  }
  onOutput = new CallbacksManager();
  onAddGraph = new CallbacksManager();
  onRemoveGraph = new CallbacksManager();
  refreshOutput() {
    const output = {
      values: [["Time"]],
      colors: []
    };
    this.graphs.forEach((graph) => {
      output.values[0].push(...graph.getGraphLabels());
      output.colors.push(...graph.getGraphColors());
    });
    this.graphs.forEach((graph) => {
      if (graph.hasDataToPrint()) {
        if (graph.value) {
          Object.keys(graph.value).forEach((key, index) => {
            let row = output.values[index + 1];
            if (row === void 0) {
              const date = /* @__PURE__ */ new Date();
              date.setTime(parseInt(key));
              row = [date];
              output.values[index + 1] = row;
            }
            const array = row;
            array.push(...graph.getDtaAtTime(parseInt(key)));
          });
        }
      }
    });
    this.output = output;
    return output;
  }
  hasGraph() {
    return Object.values(this.graphs).find((graph) => graph.hasDataToPrint()).length > 0;
  }
  generateExportData() {
    const dataBuffer = {};
    const header = [
      {
        key: "time_relative",
        displayLabel: "Relative Time"
      },
      {
        key: "time_absolute",
        displayLabel: "Absolute Time"
      },
      {
        key: "millisecondy",
        displayLabel: "Milliseconds"
      },
      {
        key: "timestamp",
        displayLabel: "Timestamp"
      }
    ];
    for (const graph of this.graphs.values()) {
      const labels = graph.getGraphLabels();
      for (const label of labels) {
        header.push({
          key: label,
          displayLabel: `${label} (${graph.analysis.initialColor}, ${graph.analysis.width} x ${graph.analysis.height} px)`
        });
      }
      if (graph.value) {
        Object.keys(graph.value).forEach((key) => {
          if (!Object.keys(dataBuffer).includes(key)) {
            const timestamp_relative = parseInt(key);
            const timestamp_absolute = timestamp_relative + graph.analysis.file.timestamp;
            dataBuffer[key] = {
              [header[0].key]: (0, import_date_fns4.format)(timestamp_relative, "m:ss:SSS") + " ",
              [header[1].key]: (0, import_date_fns4.format)(timestamp_absolute, "d. M.y m:ss:SSS") + " ",
              [header[2].key]: timestamp_relative,
              [header[3].key]: timestamp_absolute
            };
          }
          const values = graph.getDtaAtTime(parseInt(key));
          labels.forEach((label, index) => {
            dataBuffer[key][label] = values[index];
          });
        });
      }
    }
    return {
      header,
      data: Object.values(dataBuffer)
    };
  }
};

// src/properties/analysis/AnalysisDataState.ts
var import_export_to_csv = require("export-to-csv");
var AnalysisDataState = class extends AbstractProperty {
  _hasActiveGraphs = false;
  get hasActiveGraphs() {
    return this._hasActiveGraphs;
  }
  onGraphsPresence = new CallbacksManager();
  listeners = new AnalysisGraphsStorage(this);
  constructor(parent) {
    super(parent, { values: [[]], colors: [] });
    this.listeners.onOutput.set("__mirror_output_to_local_state", async (output) => {
      this.value = output;
      if (output.colors.length > 0) {
        if (!this.hasActiveGraphs) {
          this._hasActiveGraphs = true;
          this.onGraphsPresence.call(true);
        }
      } else {
        if (this.hasActiveGraphs) {
          this._hasActiveGraphs = false;
          this.onGraphsPresence.call(false);
        }
      }
    });
  }
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  dangerouslyUpdateValue(value) {
    this.value = value;
  }
  downloadData() {
    const { data, header } = this.listeners.generateExportData();
    const csvConfig = (0, import_export_to_csv.mkConfig)({
      fieldSeparator: ";",
      filename: `analysis_${this.parent.fileName}_${Date.now()}.csv`,
      columnHeaders: header
    });
    const csv = (0, import_export_to_csv.generateCsv)(csvConfig)(data);
    (0, import_export_to_csv.download)(csvConfig)(csv);
  }
};

// src/file/instance.ts
var Instance = class _Instance extends AbstractFile {
  constructor(group, service, width, height, timestamp, frameCount, duration, frameInterval, initialPixels, fps, min, max, bytesize, averageEmissivity, averageReflectedKelvins, firstFrame, timelineData) {
    super(
      group,
      service.thermalUrl,
      width,
      height,
      initialPixels,
      timestamp,
      duration,
      min,
      max,
      frameCount,
      service.visibleUrl
    );
    this.group = group;
    this.service = service;
    this.width = width;
    this.height = height;
    this.timestamp = timestamp;
    this.frameCount = frameCount;
    this.duration = duration;
    this.frameInterval = frameInterval;
    this.fps = fps;
    this.min = min;
    this.max = max;
    this.bytesize = bytesize;
    this.averageEmissivity = averageEmissivity;
    this.averageReflectedKelvins = averageReflectedKelvins;
    this.firstFrame = firstFrame;
    this.timelineData = timelineData;
    this.pixels = firstFrame.pixels;
  }
  exportAsPng() {
    this.export.canvasAsPng();
  }
  exportThermalDataAsSvg() {
    throw new Error("Method not implemented.");
  }
  /**
   * Exports
   */
  _export;
  /** Lazy-loaded `ThermalFileExport` object */
  get export() {
    if (!this._export) {
      const newExport = new ThermalFileExport(this);
      this._export = newExport;
    }
    return this._export;
  }
  postInit() {
    this.canvasLayer = new ThermalCanvasLayer(this);
    this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
    this.cursorLayer = new ThermalCursorLayer(this);
    this.listenerLayer = new ThermalListenerLayer(this);
    this.cursorValue = new CursorValueDrive(this, void 0);
    this.timeline = new TimelineDrive(this, 0, this.timelineData, this.firstFrame);
    this.timeline.init();
    this.recording = new RecordingDrive(this, false);
    this.analysis = new AnalysisDrive(this, []);
    this.analysisData = new AnalysisDataState(this);
    return this;
  }
  formatId(thermalUrl) {
    return `instance_${this.group.id}_${thermalUrl}`;
  }
  onSetPixels(value) {
    value;
    if (this.mountedBaseLayers) {
      this.draw();
      this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value);
      if (this.group.cursorPosition.value) {
        const label = this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y, this);
        this.cursorLayer.setLabel(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y, label);
      }
      this.analysis.value.forEach((analysis) => analysis.recalculateValues());
    }
  }
  getPixelsForHistogram() {
    return [];
  }
  static fromService(group, service, baseInfo2, firstFrame) {
    const instance = new _Instance(
      group,
      service,
      baseInfo2.width,
      baseInfo2.height,
      baseInfo2.timestamp,
      baseInfo2.frameCount,
      baseInfo2.duration,
      baseInfo2.frameInterval,
      firstFrame.pixels,
      baseInfo2.fps,
      baseInfo2.min,
      baseInfo2.max,
      baseInfo2.bytesize,
      baseInfo2.averageEmissivity,
      baseInfo2.averageReflectedKelvins,
      firstFrame,
      baseInfo2.timeline
    );
    return instance.postInit();
  }
  mountListener() {
    if (this.root === void 0) {
      console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);
      return;
    }
    this.listenerLayer.mount();
    this.analysis.activateListeners();
    this.listenerLayer.getLayerRoot().onmousemove = (event) => {
      this.cursorLayer.show = true;
      this.isHover = true;
      const client = this.width;
      const parent = this.root.clientWidth;
      const aspect = client / parent;
      const x = Math.round(event.offsetX * aspect);
      const y = Math.round(event.offsetY * aspect);
      this.group.cursorPosition.recieveCursorPosition({ x, y });
    };
    this.listenerLayer.getLayerRoot().onmouseleave = () => {
      this.cursorLayer.show = false;
      this.isHover = false;
      this.group.cursorPosition.recieveCursorPosition(void 0);
    };
  }
  unmountListener() {
    this.listenerLayer.unmount();
    this.analysis.deactivateListeners();
  }
  recieveCursorPosition(position) {
    if (position !== void 0) {
      const label = this.group.tool.value.getLabelValue(position.x, position.y, this);
      this.cursorLayer.setLabel(position.x, position.y, label);
      this.cursorLayer.show = true;
    } else {
      this.cursorLayer.show = false;
      this.cursorLayer.resetCursor();
    }
    this.cursorValue.recalculateFromCursor(position);
  }
};

// src/properties/lists/filesState.ts
var FilesState = class extends AbstractProperty {
  _map = /* @__PURE__ */ new Map();
  get map() {
    return this._map;
  }
  validate(value) {
    return value;
  }
  /**
   * Whenever the instances change, recreate the index
   */
  afterSetEffect(value) {
    this.map.clear();
    value.forEach((instance) => this._map.set(instance.url, instance));
  }
  addFile(file) {
    if (!this._map.has(file.url)) {
      this.value = [...this.value, file];
      return file;
    } else {
      return this._map.get(file.url);
    }
  }
  removeFile(file) {
    const entry = file instanceof Instance ? file : this.map.get(file);
    if (entry) {
      entry.unmountFromDom();
      this.value = this.value.filter((e) => e.thermalUrl !== entry.url);
    }
  }
  /**
   * Removal
   */
  removeAllInstances() {
    this.forEveryInstance((instance) => instance.destroySelfAndBelow());
    this.value = [];
  }
  /** 
   * Iteration through all instances
   */
  forEveryInstance(fn) {
    this.value.forEach((instance) => fn(instance));
  }
};

// src/properties/states/MinmaxGroupProperty.ts
var MinmaxGroupProperty = class extends AbstractMinmaxProperty {
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  /** Call this method once all instances are created */
  recalculateFromInstances() {
    this.value = this._getMinmaxFromInstances();
    return this.value;
  }
  _getMinmaxFromInstances() {
    const instances = this.parent.files.value;
    if (instances.length === 0)
      return void 0;
    return instances.reduce((state, current) => {
      if (current.min < state.min || current.max > state.max) {
        return {
          min: current.min < state.min ? current.min : state.min,
          max: current.max > state.max ? current.max : state.max
        };
      }
      return state;
    }, { min: Infinity, max: -Infinity });
  }
};

// src/properties/tool/internals/AbstractTool.ts
var AbstractTool = class {
  constructor(group) {
    this.group = group;
  }
  active = false;
  /** Action taken upon tool activation */
  activate() {
    this.onActivate();
  }
  /** Actions taken upon tool deactivation */
  deactivate() {
    this.onDeactivate();
  }
};

// src/properties/tool/internals/InspectTool.ts
var InspectTool = class extends AbstractTool {
  key = "inspect";
  name = "Inspect temperatures";
  description = "Use mouse to inspect temperature values.";
  icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`;
  onActivate() {
  }
  onDeactivate() {
  }
  onCanvasClick() {
  }
  onCanvasLeave() {
  }
  onPointEnter() {
  }
  onPointLeave() {
  }
  onPointMove() {
  }
  onPointDown() {
  }
  onPointUp() {
  }
  getLabelValue = (x, y, file) => {
    if (file === void 0) return "";
    return file.getTemperatureAtPoint(x, y).toFixed(2) + " \xB0C";
  };
};

// src/properties/analysis/internals/AbstractAddTool.ts
var AbstractAddTool = class extends AbstractTool {
};

// src/properties/analysis/internals/area/ellipsis/AddEllipsisTool.ts
var AddEllipsisTool = class extends AbstractAddTool {
  key = "add-ellipsis";
  name = "Add an elyptical analysis";
  description = "Click and drag on the thermogram to add an elyptical analysis.";
  icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`;
  onActivate() {
    this.group.forEveryInstance((instance) => {
      instance.analysis.layers.selectedOnly.forEach((analysis) => {
        analysis.setDeselected();
      });
    });
  }
  onDeactivate() {
  }
  onCanvasLeave() {
  }
  onCanvasClick(top, left, file) {
    const newRect = file.analysis.layers.createEllipsisFrom(top, left);
    newRect.setSelected(true);
  }
  onPointDown() {
  }
  onPointUp(point) {
    point.deactivate();
    point.analysis.file.group.tool.selectTool("edit");
    point.analysis.ready = true;
    if (point.analysis.width <= 0 || point.analysis.height <= 0) {
      point.analysis.layers.removeAnalysis(point.analysis.key);
    }
  }
  onPointMove(point, top, left) {
    if (point.isInSelectedLayer() && point.active) {
      point.x = left;
      point.y = top;
      point.analysis.onMoveOrResize.call(point.analysis);
    }
  }
  onPointLeave() {
  }
  onPointEnter() {
  }
  getLabelValue = (x, y, file) => {
    const temperature = file.group.tool.tools.inspect.getLabelValue(x, y, file);
    return `X:${x}<br />Y:${y}<br />${temperature}`;
  };
};

// src/properties/analysis/internals/point/AddPointTool.ts
var AddPointTool = class extends AbstractAddTool {
  key = "add-point";
  name = "Add a point analysis";
  description = "Click on the thermogram to add a point analysis.";
  icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`;
  onActivate() {
    this.group.forEveryInstance((instance) => {
      instance.analysis.layers.selectedOnly.forEach((analysis) => {
        analysis.setDeselected();
      });
    });
  }
  onDeactivate() {
  }
  onCanvasLeave() {
  }
  onCanvasClick(x, y, file) {
    const newPoint = file.analysis.layers.createPointAt(x, y);
    newPoint.setSelected(true);
  }
  onPointDown() {
  }
  onPointUp(point) {
    point.deactivate();
    point.analysis.file.group.tool.selectTool("edit");
    point.analysis.ready = true;
    point.analysis.onMoveOrResize.call(point.analysis);
  }
  onPointMove() {
  }
  onPointLeave() {
  }
  onPointEnter() {
  }
  getLabelValue = (x, y, file) => {
    const temperature = file.group.tool.tools.inspect.getLabelValue(x, y, file);
    return `X:${x}<br />Y:${y}<br />${temperature}`;
  };
};

// src/properties/analysis/internals/area/rectangle/AddRectangleTool.ts
var AddRectangleTool = class extends AbstractAddTool {
  key = "add-rect";
  name = "Add a rectangular analysis";
  description = "Click and drag on the thermogram to add a rectangular analysis.";
  icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`;
  onActivate() {
    this.group.forEveryInstance((instance) => {
      instance.analysis.layers.selectedOnly.forEach((analysis) => {
        analysis.setDeselected();
      });
    });
  }
  onDeactivate() {
  }
  onCanvasLeave() {
  }
  onCanvasClick(x, y, file) {
    const newRect = file.analysis.layers.createRectFrom(x, y);
    newRect.setSelected(true);
  }
  onPointDown() {
  }
  onPointUp(point) {
    point.deactivate();
    point.analysis.file.group.tool.selectTool("edit");
    point.analysis.ready = true;
    if (point.analysis.width <= 0 || point.analysis.height <= 0) {
      point.analysis.layers.removeAnalysis(point.analysis.key);
    }
  }
  onPointMove(point, top, left) {
    if (point.isInSelectedLayer() && point.active) {
      point.x = left;
      point.y = top;
      point.analysis.onMoveOrResize.call(point.analysis);
    }
  }
  onPointLeave() {
  }
  onPointEnter() {
  }
  getLabelValue = (x, y, file) => {
    const temperature = file.group.tool.tools.inspect.getLabelValue(x, y, file);
    return `X:${x}<br />Y:${y}<br />${temperature}`;
  };
};

// src/properties/tool/internals/EditTool.ts
var EditTool = class extends AbstractTool {
  key = "edit";
  name = "Edit analysis";
  description = "Drag corners of any selected analysis.";
  icon = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`;
  onActivate() {
  }
  onDeactivate() {
  }
  onCanvasLeave() {
  }
  onCanvasClick() {
  }
  onPointEnter(point) {
    point.mouseEnter();
  }
  onPointLeave(point) {
    if (point.active === false) {
      point.mouseLeave();
    }
  }
  onPointMove(point, top, left) {
    if (point.isInSelectedLayer() && point.active) {
      point.x = left;
      point.y = top;
      point.analysis.onMoveOrResize.call(point.analysis);
    }
  }
  onPointDown(point) {
    if (point.isInSelectedLayer() && point.active === false) {
      point.activate();
    }
  }
  onPointUp(point) {
    if (point.active === true) {
      point.deactivate();
    }
  }
  getLabelValue(x, y, file) {
    const temperature = file.getTemperatureAtPoint(x, y);
    const hoveredAnalysis = file.analysis.layers.all.filter((analysis2) => analysis2.isWithin(x, y)).map((analysis2) => {
      if (analysis2.selected) {
        return `<span style="color:${analysis2.initialColor}">${analysis2.name}</span>`;
      } else {
        return `<s style="color:${analysis2.initialColor}">${analysis2.name}</s>`;
      }
    });
    const analysis = hoveredAnalysis.length > 0 ? hoveredAnalysis.join("<br />") + "<br />" : "";
    return `${analysis}${temperature && temperature.toFixed(2) + " \xB0C<br />"}X: ${x}<br />Y: ${y}`;
  }
};

// src/properties/tool/ToolDrive.ts
var toolsRegistry = [
  InspectTool,
  AddPointTool,
  AddRectangleTool,
  AddEllipsisTool,
  EditTool
];
var createDefinedTools = (group) => {
  const arrayOfEntries = toolsRegistry.map((cls) => {
    const instance = new cls(group);
    return [
      instance.key,
      instance
    ];
  });
  return Object.fromEntries(arrayOfEntries);
};
var ToolDrive = class extends AbstractProperty {
  /** Create own set of tools from the registry of tools */
  _tools = createDefinedTools(this.parent);
  /** Readonly list of available tools */
  get tools() {
    return this._tools;
  }
  constructor(parent, initial) {
    super(parent, initial);
  }
  validate(value) {
    return value;
  }
  afterSetEffect(value) {
    if (value) {
      value.activate();
      Object.values(this.tools).forEach((tool) => {
        if (tool.key !== value.key) {
          tool.deactivate();
        }
      });
    }
  }
  /** Pick a tool. Its activation is handled by the `afterSetEffect` */
  selectTool(tool) {
    if (tool instanceof AbstractTool) {
      this.value = tool;
    } else {
      this.value = this.tools[tool];
    }
  }
};

// src/hierarchy/ThermalGroup.ts
var ThermalGroup = class extends BaseStructureObject {
  constructor(registry, id, name, description) {
    super();
    this.registry = registry;
    this.id = id;
    this.name = name;
    this.description = description;
  }
  hash = Math.random();
  get pool() {
    return this.registry.manager.pool;
  }
  minmax = new MinmaxGroupProperty(this, void 0);
  /** Tool drive */
  tool = new ToolDrive(this, new InspectTool(this));
  files = new FilesState(this, []);
  cursorPosition = new CursorPositionDrive(this, void 0);
  /** Iteration */
  forEveryInstance = (fn) => {
    this.files.value.forEach((instance) => fn(instance));
  };
  /**
   * Destruction
   */
  /** Remove all instances, reset the minmax */
  destroySelfAndBelow() {
    this.removeAllChildren();
    this.minmax.reset();
  }
  removeAllChildren() {
    this.files.removeAllInstances();
  }
  reset() {
    this.files.reset();
    this.minmax.reset();
    this.cursorPosition.reset();
  }
};

// src/hierarchy/ThermalManager.ts
var workerpool = __toESM(require("workerpool"));

// src/loading/workers/AbstractFileResult.ts
var AbstractFileResult = class {
  constructor(thermalUrl, visibleUrl) {
    this.thermalUrl = thermalUrl;
    this.visibleUrl = visibleUrl;
  }
};

// src/loading/workers/ThermalFileFailure.ts
var ThermalFileFailure = class _ThermalFileFailure extends AbstractFileResult {
  constructor(thermalUrl, code, message) {
    super(thermalUrl);
    this.code = code;
    this.message = message;
  }
  isSuccess() {
    return false;
  }
  static fromError(error) {
    return new _ThermalFileFailure(error.url, error.code, error.message);
  }
};

// src/loading/workers/errors.ts
var FileLoadingError = class extends Error {
  constructor(code, url, message) {
    super(message);
    this.code = code;
    this.url = url;
  }
};

// src/loading/workers/ThermalFileReader.ts
var ThermalFileReader = class extends AbstractFileResult {
  constructor(service, buffer, parser2, thermalUrl, visibleUrl) {
    super(thermalUrl, visibleUrl);
    this.service = service;
    this.buffer = buffer;
    this.parser = parser2;
    this.fileName = this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/") + 1);
  }
  /** For the purpose of testing we have a unique ID */
  id = Math.random();
  /** In-memory cache of the `baseInfo` request. This request might be expensive in larger files or in Vario Cam files. Because the return value is allways the same, there is no need to make the call repeatedly. */
  baseInfoCache;
  fileName;
  get pool() {
    return this.service.pool;
  }
  isSuccess() {
    return true;
  }
  /** Read the fundamental data of the file. If this method had been called before, return the cached result. */
  async baseInfo() {
    if (this.baseInfoCache) {
      return this.baseInfoCache;
    }
    const baseInfo2 = await this.pool.exec(this.parser.baseInfo, [this.buffer]);
    this.baseInfoCache = baseInfo2;
    return baseInfo2;
  }
  /** 
   * Before requesting a frame, create a dedicated `ArrayBuffer` containing only the frame's data 
   * 
   * **THIS IS SYNCHRONOUSE AND MIGHT BE EXPENSIVE**
   */
  getFrameSubset(frameIndex) {
    return this.parser.getFrameSubset(this.buffer, frameIndex);
  }
  /** Read a given frame
   * @todo Implement index range check
   */
  async frameData(index) {
    const data = this.getFrameSubset(index);
    const result = await this.parser.frameData(data.array, data.dataType);
    return result;
  }
  async pointAnalysisData(x, y) {
    return await this.parser.pointAnalysisData(this.buffer, x, y);
  }
  async rectAnalysisData(x, y, width, height) {
    return await this.parser.rectAnalysisData(this.buffer, x, y, width, height);
  }
  async ellipsisAnalysisData(x, y, width, height) {
    return await this.parser.ellipsisAnalysisData(this.buffer, x, y, width, height);
  }
  async createInstance(group) {
    const baseInfo2 = await this.baseInfo();
    const firstFrame = await this.frameData(0);
    const instance = Instance.fromService(group, this, baseInfo2, firstFrame);
    group.files.addFile(instance);
    return instance;
  }
};

// src/loading/workers/parsers/lrc/jobs/baseInfo.ts
var baseInfo = async (entireFileBuffer) => {
  const view = new DataView(entireFileBuffer);
  const width = view.getUint16(17, true);
  const height = view.getUint16(19, true);
  const bytesize = entireFileBuffer.byteLength;
  const readTimestamp = (readingView, index) => {
    const bigIntTime = readingView.getBigInt64(index, true);
    const UnixEpoch = 62135596800000n;
    const TicksPerMillisecond = 10000n;
    const TicksPerDay = 24n * 60n * 60n * 1000n * TicksPerMillisecond;
    const TicksCeiling = 0x4000000000000000n;
    const LocalMask = 0x8000000000000000n;
    const TicksMask = 0x3fffffffffffffffn;
    let ticks = bigIntTime & TicksMask;
    const isLocalTime = bigIntTime & LocalMask;
    if (isLocalTime) {
      if (ticks > TicksCeiling - TicksPerDay) {
        ticks -= TicksCeiling;
      }
      if (ticks < 0) {
        ticks += TicksPerDay;
      }
    }
    const milliseconds = ticks / TicksPerMillisecond - UnixEpoch;
    return Number(milliseconds);
  };
  const timestamp = readTimestamp(view, 5);
  const dataType = view.getUint8(15);
  let pixelByteSize = 2;
  if (dataType === 1) pixelByteSize = 4;
  const frameHeaderByteSize = 57;
  const framePixelsSize = width * height * pixelByteSize;
  const frameSize = frameHeaderByteSize + framePixelsSize;
  const streamSubset = entireFileBuffer.slice(25);
  const frameCount = streamSubset.byteLength / frameSize;
  const readFrame = (index) => {
    const frameSubsetStart = index * frameSize;
    const frameSubsetEnd = frameSubsetStart + frameSize;
    const frameArrayBuffer = streamSubset.slice(frameSubsetStart, frameSubsetEnd);
    const frameView = new DataView(frameArrayBuffer);
    const min = frameView.getFloat32(8, true);
    const max = frameView.getFloat32(12, true);
    const timestamp2 = readTimestamp(frameView, 0);
    const emissivity = frameView.getFloat32(24, true);
    const reflectedKelvins = frameView.getFloat32(28, true);
    return {
      timestamp: timestamp2,
      min,
      max,
      emissivity,
      reflectedKelvins
    };
  };
  const frames = [];
  for (let i = 0; i < frameCount; i++) {
    const frame = readFrame(i);
    frames.push(frame);
  }
  const sums = {
    emissivity: 0,
    reflectedKelvins: 0
  };
  let currentMin = Infinity;
  let currentMax = -Infinity;
  const timestamps = [];
  frames.forEach((frame) => {
    sums.emissivity = sums.emissivity + frame.emissivity;
    sums.reflectedKelvins = sums.reflectedKelvins + frame.reflectedKelvins;
    if (frame.min < currentMin) {
      currentMin = frame.min;
    }
    if (frame.max > currentMax) {
      currentMax = frame.max;
    }
    timestamps.push(frame.timestamp);
  });
  const timelineStart = timestamps[0];
  let timelineCursor = 0;
  const timeline = [];
  const f = [];
  timestamps.forEach((t, index) => {
    const next = timestamps[index + 1];
    let offset = 0;
    if (next === void 0) {
      offset = 0;
    }
    offset = next - t;
    const relative = t - timelineStart;
    timeline.push(offset);
    timelineCursor = timelineCursor + offset;
    f.push({
      absolute: t,
      relative,
      // isNaN( relativeTime ) ? 0 : relativeTime,
      offset: isNaN(offset) ? 0 : offset,
      index
    });
  });
  const duration = frames[frames.length - 1].timestamp - frames[0].timestamp;
  const frameInterval = duration / frameCount;
  const fps = 1e3 / frameInterval;
  return {
    width,
    height,
    timestamp,
    bytesize,
    frameCount,
    duration,
    frameInterval,
    fps,
    timeline: f,
    min: currentMin,
    max: currentMax,
    averageEmissivity: sums.emissivity / frames.length,
    averageReflectedKelvins: sums.reflectedKelvins / frames.length
  };
};

// src/loading/workers/parsers/lrc/jobs/getFrameSubset.ts
var getFrameSubset = (entireFileBuffer, index) => {
  const headerView = new DataView(entireFileBuffer.slice(0, 25));
  const dataType = headerView.getUint8(15);
  const width = headerView.getUint16(17, true);
  const height = headerView.getUint16(19, true);
  const pixelByteSize = dataType === 1 ? 4 : 2;
  const frameHeaderSize = 57;
  const framePixelsSize = width * height * pixelByteSize;
  const frameSize = frameHeaderSize + framePixelsSize;
  const streamSubset = entireFileBuffer.slice(25);
  const frameSubsetStart = index * frameSize;
  const frameSubsetEnd = frameSubsetStart + frameSize;
  const frameSubset = streamSubset.slice(frameSubsetStart, frameSubsetEnd);
  return {
    array: frameSubset,
    dataType
  };
};
var frameData = async (frameSubset, dataType) => {
  const view = new DataView(frameSubset);
  const bigIntTime = view.getBigInt64(0, true);
  const UnixEpoch = 62135596800000n;
  const TicksPerMillisecond = 10000n;
  const TicksPerDay = 24n * 60n * 60n * 1000n * TicksPerMillisecond;
  const TicksCeiling = 0x4000000000000000n;
  const LocalMask = 0x8000000000000000n;
  const TicksMask = 0x3fffffffffffffffn;
  let ticks = bigIntTime & TicksMask;
  const isLocalTime = bigIntTime & LocalMask;
  if (isLocalTime) {
    if (ticks > TicksCeiling - TicksPerDay) {
      ticks -= TicksCeiling;
    }
    if (ticks < 0) {
      ticks += TicksPerDay;
    }
  }
  const milliseconds = ticks / TicksPerMillisecond - UnixEpoch;
  const timestamp = Number(milliseconds);
  const min = view.getFloat32(8, true);
  const max = view.getFloat32(12, true);
  const emissivity = view.getFloat32(24, true);
  const reflectedKelvins = view.getFloat32(28, true);
  const subset = frameSubset.slice(57);
  let pixels = [];
  if (dataType === 0) {
    const array = new Uint16Array(subset);
    const distance = Math.abs(min - max);
    const UINT16_MAX = 65535;
    array.forEach((pixel) => {
      const mappedValue = pixel / UINT16_MAX;
      pixels.push(min + distance * mappedValue);
    });
  } else if (dataType === 1) {
    pixels = Array.from(new Float32Array(subset));
  }
  return {
    timestamp,
    min,
    max,
    emissivity,
    reflectedKelvins,
    pixels
  };
};

// src/loading/workers/parsers/lrc/jobs/pointAnalysisData.ts
var pointAnalysisData = async (entireFileBuffer, x, y) => {
  const view = new DataView(entireFileBuffer);
  const width = view.getUint16(17, true);
  const height = view.getUint16(19, true);
  const readTimestamp = (readingView, index) => {
    const bigIntTime = readingView.getBigInt64(index, true);
    const UnixEpoch = 62135596800000n;
    const TicksPerMillisecond = 10000n;
    const TicksPerDay = 24n * 60n * 60n * 1000n * TicksPerMillisecond;
    const TicksCeiling = 0x4000000000000000n;
    const LocalMask = 0x8000000000000000n;
    const TicksMask = 0x3fffffffffffffffn;
    let ticks = bigIntTime & TicksMask;
    const isLocalTime = bigIntTime & LocalMask;
    if (isLocalTime) {
      if (ticks > TicksCeiling - TicksPerDay) {
        ticks -= TicksCeiling;
      }
      if (ticks < 0) {
        ticks += TicksPerDay;
      }
    }
    const milliseconds = ticks / TicksPerMillisecond - UnixEpoch;
    return Number(milliseconds);
  };
  const dataType = view.getUint8(15);
  let pixelByteSize = 2;
  if (dataType === 1) pixelByteSize = 4;
  const frameHeaderByteSize = 57;
  const framePixelsSize = width * height * pixelByteSize;
  const frameSize = frameHeaderByteSize + framePixelsSize;
  const streamSubset = entireFileBuffer.slice(25);
  const frameCount = streamSubset.byteLength / frameSize;
  const output = {};
  const readFrame = (index) => {
    const frameSubsetStart = index * frameSize;
    const frameSubsetEnd = frameSubsetStart + frameSize;
    const frameArrayBuffer = streamSubset.slice(frameSubsetStart, frameSubsetEnd);
    const frameView = new DataView(frameArrayBuffer);
    const timestamp = readTimestamp(frameView, 0);
    const min = frameView.getFloat32(8, true);
    const max = frameView.getFloat32(12, true);
    const range = max - min;
    const frameHeaderByteSize2 = 57;
    const pointIndex = frameHeaderByteSize2 + y * pixelByteSize * width + x * pixelByteSize;
    let temperature = 0;
    if (dataType === 1) {
      temperature = frameView.getFloat32(pointIndex, true);
    } else if (dataType === 0) {
      console.log("jsem uvnit\u0159 varia");
      const rawtemperature = frameView.getInt16(pointIndex, true);
      const UINT16_MAX = 65535;
      const mappedValue = rawtemperature / UINT16_MAX;
      temperature = min + range * mappedValue;
    }
    return {
      timestamp,
      temperature
    };
  };
  let firstTimestamp = 0;
  for (let i = 0; i < frameCount; i++) {
    const frame = readFrame(i);
    if (firstTimestamp === 0) {
      firstTimestamp = frame.timestamp;
    }
    output[frame.timestamp - firstTimestamp] = frame.temperature;
  }
  return output;
};

// src/loading/workers/parsers/lrc/jobs/rectAnalysisData.ts
var rectAnalysisData = async (entireFileBuffer, left, top, _width, _height) => {
  const view = new DataView(entireFileBuffer);
  const fileWidth = view.getUint16(17, true);
  const fileHeight = view.getUint16(19, true);
  const readTimestamp = (readingView, index) => {
    const bigIntTime = readingView.getBigInt64(index, true);
    const UnixEpoch = 62135596800000n;
    const TicksPerMillisecond = 10000n;
    const TicksPerDay = 24n * 60n * 60n * 1000n * TicksPerMillisecond;
    const TicksCeiling = 0x4000000000000000n;
    const LocalMask = 0x8000000000000000n;
    const TicksMask = 0x3fffffffffffffffn;
    let ticks = bigIntTime & TicksMask;
    const isLocalTime = bigIntTime & LocalMask;
    if (isLocalTime) {
      if (ticks > TicksCeiling - TicksPerDay) {
        ticks -= TicksCeiling;
      }
      if (ticks < 0) {
        ticks += TicksPerDay;
      }
    }
    const milliseconds = ticks / TicksPerMillisecond - UnixEpoch;
    return Number(milliseconds);
  };
  const dataType = view.getUint8(15);
  let pixelByteSize = 2;
  if (dataType === 1) pixelByteSize = 4;
  const frameHeaderByteSize = 57;
  const framePixelsSize = fileWidth * fileHeight * pixelByteSize;
  const frameSize = frameHeaderByteSize + framePixelsSize;
  const streamSubset = entireFileBuffer.slice(25);
  const frameCount = streamSubset.byteLength / frameSize;
  const output = {};
  const readFrame = (index) => {
    const frameSubsetStart = index * frameSize;
    const frameSubsetEnd = frameSubsetStart + frameSize;
    const frameArrayBuffer = streamSubset.slice(frameSubsetStart, frameSubsetEnd);
    const frameView = new DataView(frameArrayBuffer);
    const timestamp = readTimestamp(frameView, 0);
    const min = frameView.getFloat32(8, true);
    const max = frameView.getFloat32(12, true);
    const range = max - min;
    const frameHeaderByteSize2 = 57;
    const fromX = left;
    const toX = left + _width;
    const fromY = top;
    const toY = top + _height;
    let _min = Infinity;
    let _max = -Infinity;
    let count = 0;
    let sum = 0;
    for (let y = fromY; y <= toY; y++) {
      const rowOffset = y * fileWidth;
      for (let x = fromX; x <= toX; x++) {
        const pointIndex = frameHeaderByteSize2 + (rowOffset + x) * pixelByteSize;
        let value = NaN;
        if (dataType === 1) {
          value = frameView.getFloat32(pointIndex, true);
        } else {
          const valueRaw = frameView.getInt16(pointIndex, true);
          const UINT16_MAX = 65535;
          const mappedValue = valueRaw / UINT16_MAX;
          value = min + range * mappedValue;
        }
        if (value < _min) {
          _min = value;
        }
        if (value > _max) {
          _max = value;
        }
        sum += value;
        count++;
      }
    }
    const result = {
      min: _min,
      max: _max,
      avg: sum / count,
      count
    };
    return {
      timestamp,
      result
    };
  };
  let firstTimestamp = 0;
  for (let i = 0; i < frameCount; i++) {
    const frame = readFrame(i);
    if (firstTimestamp === 0) {
      firstTimestamp = frame.timestamp;
    }
    output[frame.timestamp - firstTimestamp] = frame.result;
  }
  return output;
};

// src/loading/workers/parsers/lrc/jobs/histogram.ts
var registryHistogram = async (files) => {
  let pixels = [];
  const readFile = async (file) => {
    const headerView = new DataView(file.slice(0, 25));
    const dataType = headerView.getUint8(15);
    const width = headerView.getUint16(17, true);
    const height = headerView.getUint16(19, true);
    const pixelByteSize = dataType === 1 ? 4 : 2;
    const frameHeaderSize = 57;
    const framePixelsSize = width * height * pixelByteSize;
    const frameSize = frameHeaderSize + framePixelsSize;
    const streamSubset = file.slice(25);
    const frameCount = streamSubset.byteLength / frameSize;
    let filePixels = [];
    for (let i = 0; i < frameCount; i++) {
      const frameStart = i * frameSize;
      const pixelsSubsetStart = frameStart + 57;
      const pixelsSubsetEnd = pixelsSubsetStart + framePixelsSize;
      const pixelsSubset = streamSubset.slice(pixelsSubsetStart, pixelsSubsetEnd);
      if (dataType === 0) {
      } else if (dataType === 1) {
        filePixels = filePixels.concat(Array.from(new Float32Array(pixelsSubset)));
      }
    }
    return filePixels;
  };
  const result = await Promise.all(files.map((file) => readFile(file)));
  result.forEach((fileResult) => {
    pixels = pixels.concat(fileResult);
  });
  pixels.sort((a, b) => {
    return a - b;
  });
  const min = pixels[0];
  const max = pixels[pixels.length - 1];
  const distance = Math.abs(min - max);
  const resolution = 200;
  const step = distance / resolution;
  const bars = [];
  let buf = [...pixels];
  for (let i = 0; i < resolution; i++) {
    const from = min + step * i;
    const to = from + step;
    const nextUpIndex = buf.findIndex((pixel) => pixel > to);
    const subs = buf.slice(0, nextUpIndex - 1);
    const count = subs.length;
    const percentage = count / pixels.length * 100;
    const bar = {
      from,
      to,
      count,
      percentage
    };
    bars.push(bar);
    buf = buf.slice(nextUpIndex);
  }
  const sortedByPercentage = [...bars].sort((a, b) => {
    return a.percentage - b.percentage;
  });
  const minPercent = sortedByPercentage[0].percentage;
  const maxPercent = sortedByPercentage[sortedByPercentage.length - 1].percentage;
  const percentDistance = Math.abs(minPercent - maxPercent);
  const final = bars.map((bar) => {
    return {
      ...bar,
      height: bar.percentage / percentDistance * 100
    };
  });
  return final;
};

// src/loading/workers/parsers/lrc/jobs/is.ts
var is = (data, url) => {
  const hasCorrectExtension = url.endsWith("lrc");
  const decoder = new TextDecoder();
  const hasCorrectSignature = decoder.decode(data.slice(0, 4)) === "LRC\0";
  return hasCorrectExtension && hasCorrectSignature;
};

// src/loading/workers/parsers/lrc/jobs/ellipsisAnalysisData.ts
var ellipsisAnalysisData = async (entireFileBuffer, left, top, _width, _height) => {
  const view = new DataView(entireFileBuffer);
  const fileWidth = view.getUint16(17, true);
  const fileHeight = view.getUint16(19, true);
  const readTimestamp = (readingView, index) => {
    const bigIntTime = readingView.getBigInt64(index, true);
    const UnixEpoch = 62135596800000n;
    const TicksPerMillisecond = 10000n;
    const TicksPerDay = 24n * 60n * 60n * 1000n * TicksPerMillisecond;
    const TicksCeiling = 0x4000000000000000n;
    const LocalMask = 0x8000000000000000n;
    const TicksMask = 0x3fffffffffffffffn;
    let ticks = bigIntTime & TicksMask;
    const isLocalTime = bigIntTime & LocalMask;
    if (isLocalTime) {
      if (ticks > TicksCeiling - TicksPerDay) {
        ticks -= TicksCeiling;
      }
      if (ticks < 0) {
        ticks += TicksPerDay;
      }
    }
    const milliseconds = ticks / TicksPerMillisecond - UnixEpoch;
    return Number(milliseconds);
  };
  const dataType = view.getUint8(15);
  let pixelByteSize = 2;
  if (dataType === 1) pixelByteSize = 4;
  const frameHeaderByteSize = 57;
  const framePixelsSize = fileWidth * fileHeight * pixelByteSize;
  const frameSize = frameHeaderByteSize + framePixelsSize;
  const streamSubset = entireFileBuffer.slice(25);
  const frameCount = streamSubset.byteLength / frameSize;
  const output = {};
  const isWithin = (x, y) => {
    const centerX = left + _width / 2;
    const centerY = top + _height / 2;
    const normalizedX = (x - centerX) / (_width / 2);
    const normalizedY = (y - centerY) / (_height / 2);
    return normalizedX * normalizedX + normalizedY * normalizedY <= 1;
  };
  const readFrame = (index) => {
    const frameSubsetStart = index * frameSize;
    const frameSubsetEnd = frameSubsetStart + frameSize;
    const frameArrayBuffer = streamSubset.slice(frameSubsetStart, frameSubsetEnd);
    const frameView = new DataView(frameArrayBuffer);
    const timestamp = readTimestamp(frameView, 0);
    const min = frameView.getFloat32(8, true);
    const max = frameView.getFloat32(12, true);
    const range = max - min;
    const frameHeaderByteSize2 = 57;
    const fromX = left;
    const toX = left + _width;
    const fromY = top;
    const toY = top + _height;
    let _min = Infinity;
    let _max = -Infinity;
    let count = 0;
    let sum = 0;
    for (let y = fromY; y <= toY; y++) {
      const rowOffset = y * fileWidth;
      for (let x = fromX; x <= toX; x++) {
        if (isWithin(x, y)) {
          const pointIndex = frameHeaderByteSize2 + (rowOffset + x) * pixelByteSize;
          let value = NaN;
          if (dataType === 1) {
            value = frameView.getFloat32(pointIndex, true);
          } else {
            const valueRaw = frameView.getInt16(pointIndex, true);
            const UINT16_MAX = 65535;
            const mappedValue = valueRaw / UINT16_MAX;
            value = min + range * mappedValue;
          }
          if (value < _min) {
            _min = value;
          }
          if (value > _max) {
            _max = value;
          }
          sum += value;
          count++;
        }
      }
    }
    const result = {
      min: _min,
      max: _max,
      avg: sum / count,
      count
    };
    return {
      timestamp,
      result
    };
  };
  let firstTimestamp = 0;
  for (let i = 0; i < frameCount; i++) {
    const frame = readFrame(i);
    if (firstTimestamp === 0) {
      firstTimestamp = frame.timestamp;
    }
    output[frame.timestamp - firstTimestamp] = frame.result;
  }
  return output;
};

// src/loading/workers/parsers/lrc/LrcParser.ts
var extensions = [{
  extension: "lrc",
  minme: "application/octet-stream"
}];
var parser = {
  name: "LabIR Recording (.lrc)",
  description: "Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",
  devices: [
    {
      deviceName: "TIMI Edu Infrared Camera",
      deviceUrl: "https://edu.labir.cz",
      deviceDescription: "A thermal camera designed for school education.",
      manufacturer: "TIMI Creation, s.r.o.",
      manufacturerUrl: "https://timic.cz"
    },
    {
      deviceName: "Custom measurement systems by IRT UWB in Pilsen (CZ)",
      deviceUrl: "https://irt.zcu.cz",
      deviceDescription: "A thermal camera designed for school education.",
      manufacturer: "IRT UWB in Pilsen (CZ)",
      manufacturerUrl: "https://irt.zcu.cz"
    }
  ],
  extensions,
  is,
  baseInfo,
  getFrameSubset,
  frameData,
  registryHistogram,
  pointAnalysisData,
  rectAnalysisData,
  ellipsisAnalysisData
};
var LrcParser = Object.freeze(parser);

// src/loading/workers/parsers/index.ts
var parsers = {
  LrcParser
};
var parsersArray = Object.values(parsers);
var determineParser = (buffer, url) => {
  const parser2 = parsersArray.find((parser3) => parser3.is(buffer, url));
  if (parser2 === void 0) {
    throw new FileLoadingError(2 /* MIME_UNSUPPORTED */, url, `No parser found for '${url}'.`);
  }
  return parser2;
};
var supportedFileTypes = parsersArray.map((parser2) => parser2.extensions);
var supportedFileTypesInputProperty = supportedFileTypes.map(
  (type) => type.map((entry) => entry.minme + ", ." + entry.extension).join(", ")
).join(", ");

// src/loading/workers/FileRequest.ts
var FileRequest = class _FileRequest {
  constructor(service, thermalUrl, visibleUrl) {
    this.service = service;
    this.thermalUrl = thermalUrl;
    this.visibleUrl = visibleUrl;
  }
  static fromUrl(service, thermalUrl, visibleUrl) {
    return new _FileRequest(service, thermalUrl, visibleUrl);
  }
  /**
   * The request is stored internally, so that multiple calls of `load` will allways result in one single `Promise` - to this one.
   */
  response;
  /**
   * Fetch a file, process the response and return the promise
   * - the promise is stored internally
   * - if the request is already loading/processing, any subsequent calls use the stored promise object
   */
  async load() {
    if (this.response === void 0) {
      this.response = this.processResponse(fetch(this.thermalUrl));
    }
    return this.response;
  }
  /** 
   * Process the raw response:
   * - decide if the file exists
   * - assign parser to the file
   * - create the service
   */
  async processResponse(response) {
    const res = await response;
    if (res.status !== 200) {
      return this.pocessTheService(
        new ThermalFileFailure(
          this.thermalUrl,
          1 /* FILE_NOT_FOUND */,
          `File '${this.thermalUrl}' was not found.`
        )
      );
    }
    const buffer = await res.arrayBuffer();
    try {
      const parser2 = determineParser(buffer, this.thermalUrl);
      return this.pocessTheService(
        new ThermalFileReader(
          this.service,
          buffer,
          parser2,
          this.thermalUrl,
          this.visibleUrl
        )
      );
    } catch (error) {
      if (error instanceof FileLoadingError) {
        return this.pocessTheService(
          ThermalFileFailure.fromError(error)
        );
      } else {
        throw error;
      }
    }
  }
  /**
   * Actions taken on the `AbstractFileResult` object
   * @todo because there are no side effects, this method might appear redundant
   */
  pocessTheService(result) {
    return result;
  }
};

// src/loading/workers/dropin/DropinElementManager.ts
var DropinElementListener = class _DropinElementListener {
  constructor(service, element) {
    this.service = service;
    this.element = element;
    this.bindedLeaveListener = this.handleLeave.bind(this);
    this.bindedEnterListener = this.handleEnter.bind(this);
    this.bindedDropListener = this.handleDrop.bind(this);
    this.bindedInputChangeListener = this.handleInputChange.bind(this);
    this.bindedDragoverListener = this.handleDragover.bind(this);
    this.bindedClickListener = this.handleClick.bind(this);
  }
  _hover = false;
  get hover() {
    return this._hover;
  }
  onMouseEnter = new CallbacksManager();
  onMouseLeave = new CallbacksManager();
  onDrop = new CallbacksManager();
  onProcessingEnd = new CallbacksManager();
  /** An invissible input element */
  input;
  hydrated = false;
  // Listeners are not added from the class, but binded
  // into the following properties
  bindedEnterListener;
  bindedLeaveListener;
  bindedDropListener;
  bindedInputChangeListener;
  bindedDragoverListener;
  bindedClickListener;
  static listenOnElement(service, element) {
    const listener = new _DropinElementListener(service, element);
    listener.hydrate();
    return listener;
  }
  /** Bind all event listeners to the provided element */
  hydrate() {
    if (this.hydrated === false) {
      this.hydrated = true;
      this.input = this.getInput();
      this.element.addEventListener("dragover", this.bindedDragoverListener);
      this.element.addEventListener("dragleave", this.bindedLeaveListener);
      this.element.addEventListener("dragend", this.bindedLeaveListener);
      this.element.addEventListener("pointerdown", this.bindedClickListener);
      this.element.addEventListener("drop", this.bindedDropListener);
      this.input.addEventListener("change", this.bindedInputChangeListener);
    }
  }
  /** Remove all event listeners from the element */
  dehydrate() {
    if (this.hydrated === true) {
      this.hydrated = false;
      if (this.input)
        this.input.remove();
      this.element.removeEventListener("dragover", this.bindedDragoverListener);
      this.element.removeEventListener("dragleave", this.bindedLeaveListener);
      this.element.removeEventListener("dragend", this.bindedLeaveListener);
      this.element.removeEventListener("pointerdown", this.bindedClickListener);
      this.element.removeEventListener("drop", this.bindedDropListener);
    }
  }
  handleClick(event) {
    event.preventDefault();
    if (this.input)
      this.input.click();
  }
  handleDragover(event) {
    event.preventDefault();
    this.handleEnter();
  }
  async handleDrop(event) {
    event.preventDefault();
    const results = [];
    const transfer = event.dataTransfer;
    if (transfer && transfer.files) {
      for (const file of Array.from(transfer.files)) {
        if (file) {
          const service = await this.service.loadUploadedFile(file);
          results.push(service);
        }
      }
    }
    this.onDrop.call(results);
    this.handleLeave();
    return results;
  }
  async handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    if (target.files) {
      const file = target.files[0];
      const result = await this.service.loadUploadedFile(file);
      this.onDrop.call([result]);
      this.handleLeave();
    }
  }
  handleEnter() {
    if (this._hover === false) {
      this._hover = true;
      this.onMouseEnter.call();
    }
  }
  handleLeave() {
    if (this._hover === true) {
      this._hover = false;
      this.onMouseLeave.call();
    }
  }
  /** Build the internal input */
  getInput() {
    const element = document.createElement("input");
    element.type = "file";
    element.accept = supportedFileTypesInputProperty;
    return element;
  }
  openFileDialog() {
    this.input?.click();
  }
};

// src/loading/workers/FilesService.ts
var FilesService = class {
  constructor(manager) {
    this.manager = manager;
  }
  get pool() {
    return this.manager.pool;
  }
  static isolatedInstance(pool4, registryName = "isolated_registry") {
    const manager = new ThermalManager(pool4);
    const registry = manager.addOrGetRegistry(registryName);
    return {
      service: registry.service,
      registry
    };
  }
  /** Map of peoding requesta */
  requestsByUrl = /* @__PURE__ */ new Map();
  /** Number of currently pending requests */
  get requestsCount() {
    return this.requestsByUrl.size;
  }
  /** Is an URL currently pending? */
  fileIsPending(url) {
    return this.requestsByUrl.has(url);
  }
  /** Cache of loaded files */
  cacheByUrl = /* @__PURE__ */ new Map();
  /** Number of cached results */
  get cachedServicesCount() {
    return this.cacheByUrl.size;
  }
  /** Is the URL already in the cache? */
  fileIsInCache(url) {
    return this.cacheByUrl.has(url);
  }
  /** Process a file obrained from anywhere */
  async loadUploadedFile(file) {
    try {
      const buffer = await file.arrayBuffer();
      const parser2 = determineParser(buffer, file.name);
      return new ThermalFileReader(this, buffer, parser2, file.name);
    } catch (error) {
      return new ThermalFileFailure(
        file.name,
        3 /* PARSING_ERROR */,
        error.message
      );
    }
  }
  /** Create a dropzone listener on a HTML element */
  handleDropzone(element) {
    return DropinElementListener.listenOnElement(this, element);
  }
  /** Load a file from URL, eventually using already cached result */
  async loadFile(thermalUrl, visibleUrl) {
    if (this.cacheByUrl.has(thermalUrl)) {
      return this.cacheByUrl.get(thermalUrl);
    } else if (this.requestsByUrl.has(thermalUrl)) {
      return this.requestsByUrl.get(thermalUrl).load();
    } else {
      const request = FileRequest.fromUrl(this, thermalUrl, visibleUrl);
      this.requestsByUrl.set(thermalUrl, request);
      const result = await request.load();
      this.requestsByUrl.delete(thermalUrl);
      this.cacheByUrl.set(thermalUrl, result);
      return result;
    }
  }
};

// src/properties/drives/OpacityDrive.ts
var OpacityDrive = class extends AbstractProperty {
  /** Make sure the value is allways between 0 and 1 */
  validate(value) {
    return Math.min(Math.max(0, value), 1);
  }
  /** 
   * Whenever the opacity changes, propagate the value to all instances
   */
  afterSetEffect(value) {
    this.parent.forEveryInstance((instance) => instance.recieveOpacity(value));
  }
  /** Impose an opacity to all instances */
  imposeOpacity(value) {
    this.value = value;
    return this.value;
  }
};

// src/properties/lists/GroupsState.ts
var GroupsState = class extends AbstractProperty {
  _map = /* @__PURE__ */ new Map();
  get map() {
    return this._map;
  }
  validate(value) {
    return value;
  }
  afterSetEffect(value) {
    this._map.clear();
    value.forEach((group) => this._map.set(group.id, group));
  }
  addOrGetGroup(groupId, name, description) {
    if (this._map.has(groupId)) {
      return this._map.get(groupId);
    }
    const group = new ThermalGroup(this.parent, groupId, name, description);
    this._map.set(groupId, group);
    this.value.push(group);
    this.value = [...this.value];
    return group;
  }
  removeGroup(groupId) {
    if (!this._map.has(groupId)) {
      return;
    }
    this._map.get(groupId)?.destroySelfAndBelow();
    this._map.delete(groupId);
    this.value = Array.from(this._map.values());
  }
  removeAllGroups() {
    this.value.forEach((group) => group.destroySelfAndBelow());
    this.value = [];
  }
};

// src/properties/states/HistogramState.ts
var HistogramState = class extends AbstractProperty {
  _resolution = 150;
  get resolution() {
    return this._resolution;
  }
  /** Map of temperature => countOfPixels in the scaled down resolution @deprecated */
  buffer = /* @__PURE__ */ new Map();
  /** Total countOfPixels in every image @deprecated */
  bufferPixelsCount = 0;
  /** @deprecated */
  _bufferResolution = 1e3;
  set bufferResolution(value) {
    this._bufferResolution = Math.round(Math.max(value, 1e3));
  }
  get bufferResolution() {
    return this._bufferResolution;
  }
  /** Set the historgam resolution
   * - does not recalculate the value!
   * - to recalculate value, call `recalculateWithCurrentSetting`
   * 
   * @notice Higher the number, lower the resolution.
   * @deprecated Resolution is calculated in a separate thread, no resolution changes allowed
  */
  setResolution(value) {
    this._resolution = Math.round(Math.min(Math.max(value, 2), 400));
  }
  /** If incorrect resolution is being set, set empty array @todo there may be an error in +1*/
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  /** Recalculates the value using all current instances and with che current resolution @deprecated should not recalculate the histogram on the fly*/
  recalculateWithCurrentSetting() {
    this.recalculateHistogram();
    return this.value;
  }
  /** 
   * Recalculate the histogram buffer using web workers.
   * This is an async operation using `workerpool`
   */
  recalculateHistogramBufferInWorker() {
    if (this.parent.minmax.value !== void 0 && this.parent.groups.value.length !== 0 && this.parent.minmax.distanceInCelsius !== void 0) {
      const pixels = this.parent.groups.value.map((group) => {
        return group.files.value.map((instance) => instance.getPixelsForHistogram());
      });
      this.parent.pool.exec((instancesPixels, min, max, distance, resolution) => {
        const mergedPixels = instancesPixels.reduce((state, current) => {
          const inner = current.reduce((state2, current2) => {
            return [...state2, ...current2];
          }, []);
          return [...state, ...inner];
        }, []);
        let sortedPixels = mergedPixels.sort((a, b) => a - b);
        const step = distance / resolution;
        let nextStep = min + step;
        const result = /* @__PURE__ */ new Map();
        let resultCount = 0;
        while (nextStep !== false) {
          const nextIndex = sortedPixels.findIndex((num) => num > nextStep);
          const pixelCount = sortedPixels.slice(0, nextIndex).length;
          result.set(nextStep - step / 2, pixelCount);
          resultCount += pixelCount;
          sortedPixels = sortedPixels.slice(nextIndex);
          const nextStepTemporary = nextStep + step;
          nextStep = nextStepTemporary < max ? nextStepTemporary : false;
        }
        return {
          result,
          resultCount
        };
      }, [
        pixels,
        this.parent.minmax.value.min,
        this.parent.minmax.value.max,
        this.parent.minmax.distanceInCelsius,
        this._bufferResolution
      ]).then((result) => {
        this.buffer = result.result;
        this.bufferPixelsCount = result.resultCount;
        this.recalculateWithCurrentSetting();
      });
    }
  }
  async recalculateHistogram() {
    const allFiles = this.parent.groups.value.map((group) => group.files.value).reduce((state, current) => {
      state = state.concat(current);
      return state;
    }, []);
    const allBuffers = allFiles.map((reader) => reader.service.buffer);
    const result = await this.parent.pool.exec(LrcParser.registryHistogram, [allBuffers]);
    this.value = result;
  }
};

// src/properties/states/LoadingState.ts
var LoadingState = class extends AbstractProperty {
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  markAsLoading() {
    this.value = true;
  }
  markAsLoaded() {
    this.value = false;
  }
};

// src/properties/states/MinmaxRegistryState.ts
var MinmaxRegistryProperty = class extends AbstractMinmaxProperty {
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  recalculateFromGroups() {
    const groups = this.parent.groups.value;
    this.value = this._getMinmaxFromAllGroups(groups);
    return this.value;
  }
  _getMinmaxFromAllGroups(groups) {
    if (groups.length === 0) {
      return void 0;
    }
    const minmax = groups.reduce((state, current) => {
      if (current.minmax.value === void 0) {
        return state;
      }
      return {
        min: current.minmax.value.min < state.min ? current.minmax.value.min : state.min,
        max: current.minmax.value.max > state.max ? current.minmax.value.max : state.max
      };
    }, { min: Infinity, max: -Infinity });
    return minmax;
  }
};

// src/hierarchy/ThermalRegistry.ts
var ThermalRegistry = class extends BaseStructureObject {
  constructor(id, manager, options) {
    super();
    this.id = id;
    this.manager = manager;
    this.palette = this.manager.palette;
    if (options) {
      if (options.histogramResolution !== void 0) {
        if (options.histogramResolution > 0)
          this.histogram.setResolution(options.histogramResolution);
      }
    }
  }
  hash = Math.random();
  /** Service */
  get service() {
    return this.manager.service;
  }
  get pool() {
    return this.manager.pool;
  }
  /** Groups are stored in an observable property */
  groups = new GroupsState(this, []);
  /** Iterator methods */
  forEveryGroup(fn) {
    this.groups.value.forEach(fn);
  }
  forEveryInstance(fn) {
    this.forEveryGroup((group) => group.files.forEveryInstance(fn));
  }
  /** Full load of the registry with multiple files @deprecated */
  async loadFullMultipleFiles(files) {
    this.reset();
    this.loading.markAsLoading();
    const servicesByGroup = await Promise.all(Object.entries(files).map(async ([groupId, fs]) => {
      const group = this.groups.addOrGetGroup(groupId);
      const groupFiles = await Promise.all(fs.map((file) => {
        return this.service.loadFile(file.thermalUrl, file.visibleUrl);
      }));
      return {
        group,
        groupFiles
      };
    }));
    await Promise.all(servicesByGroup.map(async ({ group, groupFiles }) => {
      const instances = await Promise.all(groupFiles.map(async (service) => {
        if (service instanceof ThermalFileReader) {
          return await service.createInstance(group);
        } else {
          return false;
        }
      }));
      return instances;
    }));
    this.postLoadedProcessing();
  }
  /** Load the registry with only one file. @deprecated */
  async loadFullOneFile(file, groupId) {
    this.reset();
    const group = this.groups.addOrGetGroup(groupId);
    const result = await this.service.loadFile(file.thermalUrl, file.visibleUrl);
    if (result instanceof ThermalFileReader) {
      await result.createInstance(group);
    }
    this.loading.markAsLoading();
    this.postLoadedProcessing();
  }
  /** Completely flush the entire registry and process evyrything from the files that are being dropped here. @deprecated */
  async processDroppedFiles(files, groupId) {
    files;
    groupId;
    throw new Error("Method not implemented");
  }
  /** 
   * Actions to take after the registry is loaded 
   * - recalculate the minmax of groups
   * - recalculate minmax of registry
   * - impose new minmax as new range
   * - recalculate the histogram
  */
  async postLoadedProcessing() {
    this.forEveryGroup((group) => group.minmax.recalculateFromInstances());
    this.minmax.recalculateFromGroups();
    if (this.minmax.value)
      this.range.imposeRange({ from: this.minmax.value.min, to: this.minmax.value.max });
    this.histogram.recalculateHistogramBufferInWorker();
    this.loading.markAsLoaded();
  }
  reset() {
    this.forEveryGroup((group) => group.reset());
    this.opacity.reset();
    this.minmax.reset();
  }
  removeAllChildren() {
    this.groups.removeAllGroups();
  }
  destroySelfAndBelow() {
    this.reset();
  }
  destroySelfInTheManager() {
    this.manager.removeRegistry(this.id);
  }
  /**
   * Observable properties and drives
   */
  /** 
   * Opacity property 
   */
  opacity = new OpacityDrive(this, 1);
  /** 
   * Minmax property 
   */
  minmax = new MinmaxRegistryProperty(this, void 0);
  /**
   * Loading
   */
  loading = new LoadingState(this, false);
  /**
   * Range
   */
  range = new RangeDriver(this, void 0);
  /**
   * Histogram
   */
  histogram = new HistogramState(this, []);
  /**
   * Palette
   */
  palette;
};

// src/properties/drives/SmoothDrive.ts
var SmoothDrive = class extends AbstractProperty {
  validate(value) {
    return value;
  }
  afterSetEffect(value) {
    this.parent.forEveryRegistry((registry) => registry.forEveryInstance((instance) => {
      instance.canvasLayer.canvas.style.imageRendering = value === true ? "auto" : "pixelated";
    }));
  }
  setSmooth(value) {
    this.value = value;
  }
};

// src/properties/drives/GraphSmoothDrive.ts
var GraphSmoothDrive = class extends AbstractProperty {
  validate(value) {
    return value;
  }
  afterSetEffect() {
  }
  setGraphSmooth(value) {
    this.value = value;
  }
};

// src/hierarchy/ThermalManager.ts
var ThermalManager = class extends BaseStructureObject {
  id;
  /** Service for creation of loading and caching the files. */
  service = new FilesService(this);
  /** Index of existing registries */
  registries = {};
  /** A palette is common to all registries within the manager */
  palette = new PaletteDrive(this, "jet");
  smooth = new SmoothDrive(this, false);
  graphSmooth = new GraphSmoothDrive(this, false);
  pool;
  constructor(pool4, options) {
    super();
    this.pool = pool4 ? pool4 : workerpool.pool();
    this.id = Math.random();
    if (options) {
      if (options.palette) {
        this.palette.setPalette(options.palette);
      }
    }
  }
  /* registries */
  forEveryRegistry(fn) {
    Object.values(this.registries).forEach((registry) => fn(registry));
  }
  addOrGetRegistry(id, options) {
    if (this.registries[id] === void 0) {
      this.registries[id] = new ThermalRegistry(id, this, options);
    }
    return this.registries[id];
  }
  removeRegistry(id) {
    if (this.registries[id] !== void 0) {
      const registry = this.registries[id];
      registry.destroySelfAndBelow();
      delete this.registries[id];
    }
  }
};

// src/utils/pool.ts
var workerpool2 = __toESM(require("workerpool"));
var pool3 = void 0;
var getPool = async () => {
  if (!pool3) {
    pool3 = workerpool2.pool({
      maxWorkers: 6
    });
  }
  return pool3;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AbstractAnalysis,
  AbstractAreaAnalysis,
  AbstractFileResult,
  AbstractTool,
  AddEllipsisTool,
  AddRectangleTool,
  AnalysisGraph,
  CallbacksManager,
  CornerPoint,
  DropinElementListener,
  EditTool,
  EllipsisAnalysis,
  GRAYSCALE,
  IRON,
  InspectTool,
  Instance,
  JET,
  PointAnalysis,
  RectangleAnalysis,
  ThermalFileFailure,
  ThermalFileReader,
  ThermalGroup,
  ThermalManager,
  ThermalPalettes,
  ThermalRegistry,
  TimeFormat,
  TimePeriod,
  TimeRound,
  availableAnalysisColors,
  getPool,
  playbackSpeed,
  supportedFileTypes,
  supportedFileTypesInputProperty
});
