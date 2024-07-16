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
  AbstractFile: () => AbstractFile,
  FileFailureService: () => FileFailureService,
  FileReaderService: () => FileReaderService,
  GRAYSCALE: () => GRAYSCALE,
  IRON: () => IRON,
  Instance: () => Instance,
  JET: () => JET,
  ThermalFileInstance: () => ThermalFileInstance,
  ThermalFileSource: () => ThermalFileSource,
  ThermalGroup: () => ThermalGroup,
  ThermalManager: () => ThermalManager,
  ThermalPalettes: () => ThermalPalettes,
  ThermalRegistry: () => ThermalRegistry,
  TimeFormat: () => TimeFormat,
  TimePeriod: () => TimePeriod,
  TimeRound: () => TimeRound,
  pool: () => pool_default
});
module.exports = __toCommonJS(src_exports);

// src/utils/time/pool.ts
var workerpool = __toESM(require("workerpool"));
var pool2 = workerpool.pool({
  maxWorkers: 6
});
var pool_default = pool2;

// src/base/BaseStructureObject.ts
var BaseStructureObject = class {
  constructor() {
    this.pool = pool_default;
  }
};

// src/parsers/thermalLoader.ts
var import_cross_fetch = __toESM(require("cross-fetch"));

// src/properties/abstractProperty.ts
var AbstractProperty = class {
  constructor(parent, _initial) {
    this.parent = parent;
    this._initial = _initial;
    this._listeners = {};
    this._value = this.validate(this._initial);
  }
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

// src/properties/time/TimelineDriveOld.ts
var TimelineDriveOld = class extends AbstractProperty {
  constructor(parent, initial) {
    super(parent, initial);
    this.parent = parent;
    this.framesByTimestamp = /* @__PURE__ */ new Map();
    this.framesByMs = /* @__PURE__ */ new Map();
    this.framesByIndex = /* @__PURE__ */ new Map();
    this.localTimeline = [];
    this._onChangeListeners = /* @__PURE__ */ new Map();
    const startOfSequence = this.parent.frames[0].timestamp;
    this.frames = this.parent.frames.map((frame, index) => {
      const ms = frame.timestamp - startOfSequence;
      const value = {
        ...frame,
        index,
        ms
      };
      this.framesByIndex.set(index, value);
      this.framesByMs.set(value.ms, value);
      this.framesByTimestamp.set(value.timestamp, value);
      this.localTimeline.push(value.ms);
      return value;
    });
    this._currentFrame = this.frames[0];
  }
  get duration() {
    return this.parent.duration;
  }
  get frameCount() {
    return this.frames.length;
  }
  set currentFrame(frame) {
    if (frame.ms !== this._currentFrame.ms) {
      this._currentFrame = frame;
      this._onChangeListeners.forEach((fn) => fn(this._currentFrame));
      this.parent.pixels = frame.pixels;
    }
  }
  get currentFrame() {
    return this._currentFrame;
  }
  get nextFrame() {
    const current = this.currentFrame;
    const nextIndex = current.index + 1;
    if (nextIndex <= this.frameCount) {
      return this.framesByIndex.get(nextIndex);
    }
    return void 0;
  }
  get nextFrameTimeoutDuration() {
    if (this.nextFrame !== void 0) {
      return this.nextFrame.ms - this.currentFrame.ms;
    }
    return void 0;
  }
  /** Event listener to changement of the current frame.
   * - the current frame is not changed every time the value changes
   * - the current frame is changed only when the ms value points fo a new previous frame
   */
  addChangeListener(identificator, fn) {
    this._onChangeListeners.set(identificator, fn);
  }
  removeChangeListener(identificator) {
    this._onChangeListeners.delete(identificator);
  }
  /** 
   * Get the next frame to a given MS
   * @todo improve the performance
   * @internal
   */
  getNextFrameToMs(ms) {
    const nextTimestamp = this.localTimeline.find((timestamp) => timestamp > ms);
    if (nextTimestamp === void 0) {
      return void 0;
    }
    return this.framesByMs.get(nextTimestamp);
  }
  /** 
   * Get the previous frame to a given MS 
   * @todo improve performance
   * @internal
   */
  getPreviousFrameToMs(ms) {
    const previousTimestamp = this.localTimeline.reverse().find((timestamp) => timestamp < ms);
    if (previousTimestamp === void 0) {
      return void 0;
    }
    return this.framesByMs.get(previousTimestamp);
  }
  /** Check if the value is within the duration */
  validate(value) {
    if (value < 0)
      return 0;
    return value <= this.duration ? value : this.duration;
  }
  /** Any time the value is set, check if there is a frame and eventually setit */
  afterSetEffect(value) {
    if (value === this.currentFrame.ms) {
    } else if (this.localTimeline.includes(value)) {
      const newFrame = this.framesByMs.get(value);
      if (this.currentFrame.ms !== newFrame.ms)
        this.currentFrame = newFrame;
    } else {
      const prevFrame = this.getPreviousFrameToMs(value);
      if (prevFrame) {
        if (prevFrame.ms !== this.currentFrame.ms)
          this.currentFrame = prevFrame;
      }
    }
  }
  setMs(ms) {
    this.value = ms;
  }
  setValueByPercent(percentage) {
    const percent = Math.min(Math.max(percentage, 0), 100);
    const time = this.duration / 100 * percent;
    this.value = Math.floor(time);
  }
  goToNextFrame() {
    if (this.nextFrame) {
      this.value = this.nextFrame.ms;
    }
  }
  static formatDuration(ms) {
    const millis = ms % 1e3;
    const secs = (ms - millis) % (1e3 * 60);
    const mins = (ms - millis - secs) / (1e3 * 60 * 60);
    return [
      mins,
      secs,
      millis
    ].join(":");
  }
  play() {
    this.timer = setInterval(() => {
      this.goToNextFrame();
    }, this.nextFrameTimeoutDuration);
  }
  pause() {
    clearInterval(this.timer);
  }
  stop() {
    clearInterval(this.timer);
    this.setMs(0);
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

// src/file/IFileInstance.ts
var AbstractFile = class extends BaseStructureObject {
  constructor(group, thermalUrl, width, height, initialPixels, timestamp, duration, min, max, frameCount, visibleUrl) {
    super();
    this.frames = [];
    this.signature = "unknown";
    this.version = -1;
    this.streamCount = -1;
    this.fileDataType = -1;
    this.unit = -1;
    this._isHover = false;
    // DOM root
    this.root = null;
    this._mounted = false;
    /** @deprecated */
    this._onHover = void 0;
    this._onClick = void 0;
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
  get isHover() {
    return this._isHover;
  }
  set isHover(value) {
    this._isHover = value;
  }
  get mountedBaseLayers() {
    return this._mounted;
  }
  set mountedBaseLayers(value) {
    this._mounted = value;
  }
  get pixels() {
    return this._pixels;
  }
  set pixels(value) {
    this._pixels = value;
    this.onSetPixels(value);
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
  mountListener() {
    if (this.root === void 0) {
      console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);
      return;
    }
    this.listenerLayer.mount();
    this.listenerLayer.getLayerRoot().onmousemove = (event) => {
      this.cursorLayer.show = true;
      this.isHover = true;
      const client = this.width;
      const parent = this.root.clientWidth;
      const aspect = client / parent;
      const x = Math.round(event.offsetX * aspect);
      const y = Math.round(event.offsetY * aspect);
      this.group.cursorPosition.recieveCursorPosition({ x, y });
      if (this._onHover)
        this._onHover(event, this);
    };
    this.listenerLayer.getLayerRoot().onmouseleave = () => {
      this.cursorLayer.show = false;
      this.isHover = false;
      this.group.cursorPosition.recieveCursorPosition(void 0);
    };
    this.listenerLayer.getLayerRoot().onclick = (event) => {
      if (this._onClick)
        this._onClick(event, this);
    };
  }
  unmountListener() {
    this.listenerLayer.unmount();
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
  recieveCursorPosition(position) {
    this.cursorValue.recalculateFromCursor(position);
    if (position !== void 0 && this.cursorValue.value !== void 0) {
      this.cursorLayer.setCursor(position.x, position.y, this.cursorValue.value);
      this.cursorLayer.show = true;
    } else {
      this.cursorLayer.show = false;
      this.cursorLayer.resetCursor();
    }
  }
  getTemperatureAtPoint(x, y) {
    const index = y * this.width + x;
    return this.pixels[index];
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
  /** @deprecated */
  setHoverHandler(handler) {
    this._onHover = handler;
  }
  /** @deprecated */
  setHoverCursor(value) {
    if (this.root) {
      if (this.root.style.cursor !== value)
        this.root.style.cursor = value;
    }
  }
  setClickHandler(handler = void 0) {
    this._onClick = handler;
  }
};

// src/file/instanceUtils/ThermalFileExports.ts
var import_export_to_csv = require("export-to-csv");
var ThermalFileExport = class {
  constructor(file) {
    this.file = file;
  }
  canvasAsPng() {
    return this.file.canvasLayer.exportAsPng();
  }
  thermalDataAsCsv(fileNameSuffix = "__thermal-data") {
    const csvConfig = (0, import_export_to_csv.mkConfig)({ useKeysAsHeaders: true, fieldSeparator: ";", filename: this.file.fileName.replace(".lrc", fileNameSuffix) });
    const data = this.file.frames.map((frame) => {
      const { pixels, ...data2 } = frame;
      pixels;
      return data2;
    });
    const csv = (0, import_export_to_csv.generateCsv)(csvConfig)(data);
    (0, import_export_to_csv.download)(csvConfig)(csv);
  }
};

// src/file/instanceUtils/AbstractLayer.ts
var AbstractLayer = class {
  constructor(instance) {
    this.instance = instance;
    this._mounted = false;
  }
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
    return canvas;
  }
  static createDateLayer() {
    const layer = document.createElement("div");
    layer.classList.add("dateLayer");
    layer.style.margin = "0px";
    layer.style.padding = "0px";
    layer.style.position = "absolute";
    layer.style.top = "0px";
    layer.style.left = "0%";
    layer.style.width = "100%";
    layer.style.fontSize = "small";
    return layer;
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
    return axe;
  }
  static createCursorLayerX() {
    const axeX = _ThermalDomFactory.createCursorLayerAxeBase();
    axeX.classList.add("cursorLayerAxeX");
    axeX.style.width = "1px";
    axeX.style.height = "20px";
    axeX.style.top = "-10px";
    return axeX;
  }
  static createCursorLayerY() {
    const axeY = _ThermalDomFactory.createCursorLayerAxeBase();
    axeY.classList.add("cursorLayerAxeY");
    axeY.style.width = "20px";
    axeY.style.height = "1px";
    axeY.style.left = "-10px";
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
    return axeLabel;
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

// src/file/instanceUtils/thermalCanvasLayer.ts
var ThermalCanvasLayer = class extends AbstractLayer {
  constructor(instance) {
    super(instance);
    this.pool = pool_default;
    this._opacity = 1;
    this.container = ThermalDomFactory.createCanvasContainer();
    this.canvas = ThermalDomFactory.createCanvas();
    this.canvas.width = this.instance.width;
    this.canvas.height = this.instance.height;
    this.context = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);
  }
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
    return this.instance.group.registry.range.value ? this.instance.group.registry.range.value.from : this.instance.min;
  }
  get to() {
    return this.instance.group.registry.range.value ? this.instance.group.registry.range.value.to : this.instance.max;
  }
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
  constructor(instance) {
    super(instance);
    // Set visible / invisible
    this._show = false;
    this._hover = false;
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
  get show() {
    return this._show;
  }
  set show(value) {
    this._show = value;
    this.layerRoot.style.opacity = this._show ? "1" : "0";
  }
  get hover() {
    return this._hover;
  }
  set hover(value) {
    this._hover = value;
    this.label.style.backgroundColor = this._hover ? "black" : "rgba( 0,0,0,0.5 )";
  }
  setCursor(x, y, value) {
    if (this.instance.root === null) {
    } else {
      const aspect = this.instance.root.offsetWidth / this.instance.width;
      const centerX = Math.round(x * aspect);
      const centerY = Math.round(y * aspect);
      this.center.style.left = this.px(centerX);
      this.center.style.top = this.px(centerY);
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
      this.label.innerHTML = `${value.toFixed(3)} \xB0C`;
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

// src/file/ThermalFileInstance.ts
var ThermalFileInstance = class extends AbstractFile {
  // Necessary properties are calculated in the constructor
  constructor(source, group) {
    super(
      group,
      source.url,
      source.width,
      source.height,
      source.pixels,
      source.timestamp,
      source.duration,
      source.min,
      source.max,
      source.frameCount,
      source.visibleUrl
    );
    this.source = source;
    this.group = group;
  }
  get dataType() {
    return this.source.fileDataType;
  }
  getPixelsForHistogram() {
    return this.source.pixelsForHistogram;
  }
  /** @deprecated */
  postInit() {
    this.signature = this.source.signature;
    this.unit = this.source.unit;
    this.version = this.source.version;
    this.streamCount = this.source.streamCount;
    this.fileDataType = this.source.fileDataType;
    this.frames = this.source.frames;
    this.timeline = new TimelineDriveOld(this, 0);
    this.pixels = this.timeline.currentFrame.pixels;
    this.canvasLayer = new ThermalCanvasLayer(this);
    this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
    this.cursorLayer = new ThermalCursorLayer(this);
    this.listenerLayer = new ThermalListenerLayer(this);
    this.cursorValue = new CursorValueDrive(this, void 0);
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
        const value2 = this.getTemperatureAtPoint(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y);
        this.cursorLayer.setValue(value2);
      }
    }
  }
  //////  Human readable data shall be moved elsewhere!
  get unitHuman() {
    return this.unit === 0 ? "none" : this.unit === 1 ? "intensity" : this.unit === 2 ? "\xB0C" : this.unit === 3 ? "Kelvin" : "unit not specified";
  }
  get dataTypeHuman() {
    return this.dataType === 0 ? "Float16" : this.dataType === 1 ? "Float32" : this.dataType === 2 ? "Int16" : "error parsing data type";
  }
  /** Lazy-loaded `ThermalFileExport` object */
  get export() {
    if (!this._export) {
      const newExport = new ThermalFileExport(this);
      this._export = newExport;
    }
    return this._export;
  }
  /** 
   * Export the current canvas state as PNG 
   * @deprecated call this.export directly
  */
  exportAsPng() {
    this.export.canvasAsPng();
  }
  /** 
   * Export thermal parameters as CSV table 
   * @deprecated call this.export directly
  */
  exportThermalDataAsSvg() {
    this.export.thermalDataAsCsv();
  }
};

// src/file/ThermalFileSource.ts
var ThermalFileSource = class extends BaseStructureObject {
  constructor(url, signature, version, streamCount, fileDataType, unit, width, height, timestamp, pixels, min, max, frameCount, frames, visibleUrl) {
    super();
    this.url = url;
    this.signature = signature;
    this.version = version;
    this.streamCount = streamCount;
    this.fileDataType = fileDataType;
    this.unit = unit;
    this.width = width;
    this.height = height;
    this.timestamp = timestamp;
    this.pixels = pixels;
    this.min = min;
    this.max = max;
    this.frameCount = frameCount;
    this.frames = frames;
    this.visibleUrl = visibleUrl;
    this.fileName = this.url.substring(this.url.lastIndexOf("/") + 1);
    let totalPixelsBuffer = [];
    this.frames.forEach((frame) => {
      totalPixelsBuffer = totalPixelsBuffer.concat(frame.pixels);
    });
    this.pixelsForHistogram = totalPixelsBuffer;
    this.duration = this.frames.length === 0 ? 0 : this.frames[this.frames.length - 1].timestamp - this.frames[0].timestamp;
  }
  static async fromUrl(thermalUrl, visibleUrl) {
    try {
      const file = await ThermalLoader.fromUrl(thermalUrl, visibleUrl);
      return file;
    } catch (error) {
      return null;
    }
  }
  static async fromUrlWithErrors(thermalUrl, visibleUrl) {
    return await ThermalLoader.fromUrl(thermalUrl, visibleUrl);
  }
  createInstance(group) {
    const instance = new ThermalFileInstance(this, group);
    instance.postInit();
    return instance;
  }
};

// src/parsers/AbstractParser.ts
var AbstractParser = class {
  constructor(url, blob, visibleUrl) {
    this.url = url;
    this.blob = blob;
    this.visibleUrl = visibleUrl;
    this.isValidTimestamp = (value) => Number.isInteger(value);
    this.isValidWidth = (value) => Number.isInteger(value);
    this.isValidHeight = (value) => Number.isInteger(value);
    this.isValidPixels = (value) => {
      return value !== void 0 && value.length === this.width * this.height;
    };
    this.isValidMin = (value) => value !== void 0;
    this.isValidMax = (value) => value !== void 0;
    this.isValidFrameCount = (value) => Number.isInteger(value);
    this.isValidFrames = (value) => {
      if (value === void 0) return false;
      if (this.frameCount === void 0) return false;
      else
        return value.length === this.frameCount;
    };
    // Error logging
    /** Buffer of errors that occured during the parsing. */
    this.errors = [];
  }
  /** Create the dataview */
  async init() {
    const buffer = await this.blob.arrayBuffer();
    this.data = new DataView(buffer);
    const frameSubset = buffer.slice(25);
    this.frameSubset = frameSubset;
    return this;
  }
  /** The only public endpoint. This method does all the business. */
  async parse() {
    await this.init();
    await this.parseFile();
    return this.getThermalFile();
  }
  parseTimestamp() {
    const value = this.getTimestamp();
    if (!this.isValidTimestamp(value))
      this.logValidationError("timestamp", value);
    this.timestamp = value;
  }
  parseWidth() {
    const value = this.getWidth();
    if (!this.isValidWidth(value))
      this.logValidationError("width", value);
    this.width = value;
  }
  parseHeight() {
    const value = this.getHeight();
    if (!this.isValidHeight(value))
      this.logValidationError("height", value);
    this.height = value;
  }
  async parsePixels() {
    const value = this.getPixels();
    this.pixels = value;
  }
  parseMin() {
    const value = this.getMin();
    if (!this.isValidMin(value))
      this.logValidationError("min", value);
    this.min = value;
  }
  parseMax() {
    const value = this.getMax();
    if (!this.isValidMax(value))
      this.logValidationError("max", value);
    this.max = value;
  }
  parseFrameCount() {
    const value = this.getFrameCount();
    if (!this.isValidFrameCount(value))
      this.logValidationError("frameCount", value);
    this.frameCount = value;
  }
  parseFrames() {
    const value = this.getFrames();
    if (!this.isValidFrames(value))
      this.logValidationError("frames", value.toString());
    this.frames = value;
  }
  /** Store an error. */
  logError(message) {
    console.error(message);
    this.errors.push(message);
  }
  /** Store an error during parsing. */
  logValidationError(property, value) {
    const msg = `Invalid ${property} of ${this.url}: '${value.toString()}'`;
    this.logError(msg);
  }
  getErrors() {
    return this.errors;
  }
  encodeErrors() {
    return this.errors.join("+|+");
  }
  /**  @deprecated Is not in use */
  static decodeErrors(errorsString) {
    return errorsString.split("+|+");
  }
};

// src/parsers/lrc/LrcUtils.ts
var LrcUtils = class {
  static readDotnetTimestamp(byteOffset, view) {
    const bigIntTime = view.getBigInt64(byteOffset, true);
    const UnixEpoch = 62135596800000n;
    const TicksPerMillisecond = 10000n;
    const TicksPerDay = 24n * 60n * 60n * 1000n * TicksPerMillisecond;
    const TicksCeiling = 0x4000000000000000n;
    const LocalMask = 0x8000000000000000n;
    const TicksMask = 0x3FFFFFFFFFFFFFFFn;
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
  }
  static readFloat32(index, view) {
    return view.getFloat32(index, true);
  }
  static read8bNumber(index, view) {
    return view.getUint8(index);
  }
  static readTemperatureArray(index, view, dataType, min, max) {
    const subset = view.buffer.slice(index);
    if (dataType === 0) {
      const array = new Uint16Array(subset);
      const distance = Math.abs(min - max);
      const UINT16_MAX = 65535;
      return [...array].map((pixel) => {
        const mappedValue = pixel / UINT16_MAX;
        return min + distance * mappedValue;
      });
    } else if (dataType === 1) {
      return [...new Float32Array(subset)];
    }
    return [];
  }
};

// src/parsers/lrc/LrcFrameParser.ts
var LrcFrameParser = class {
  constructor(arrayBuffer, width, height, dataType, frameCount, frameByteSize, pixelByteSize) {
    this.arrayBuffer = arrayBuffer;
    this.width = width;
    this.height = height;
    this.dataType = dataType;
    this.frameCount = frameCount;
    this.frameByteSize = frameByteSize;
    this.pixelByteSize = pixelByteSize;
  }
  parseFrame(index) {
    if (!Number.isInteger(index)) {
      throw new Error(`The frame index ${index} is invalid!`);
    }
    const frameSubsetStart = index * this.frameByteSize;
    const frameSubsetEnd = frameSubsetStart + this.frameByteSize;
    const frameArrayBuffer = this.arrayBuffer.slice(
      frameSubsetStart,
      frameSubsetEnd
    );
    const view = new DataView(frameArrayBuffer);
    const frameMin = LrcUtils.readFloat32(8, view);
    const frameMax = LrcUtils.readFloat32(12, view);
    const frameData2 = {
      timestamp: LrcUtils.readDotnetTimestamp(0, view),
      min: frameMin,
      max: frameMax,
      modeMinInKelvin: LrcUtils.readFloat32(16, view),
      modeMaxInKelvin: LrcUtils.readFloat32(20, view),
      emissivity: LrcUtils.readFloat32(24, view),
      reflectedTemperaatureInKelvin: LrcUtils.readFloat32(28, view),
      distance: LrcUtils.readFloat32(32, view),
      atmosphereTemperatureInKelvin: LrcUtils.readFloat32(36, view),
      relativeHumidity: LrcUtils.readFloat32(40, view),
      tau: LrcUtils.readFloat32(44, view),
      windowTemperature: LrcUtils.readFloat32(48, view),
      windowTransmissivity: LrcUtils.readFloat32(52, view),
      isTauSet: LrcUtils.read8bNumber(53, view),
      pixels: LrcUtils.readTemperatureArray(57, view, this.dataType, frameMin, frameMax)
    };
    return frameData2;
  }
};

// src/parsers/lrc/lrcParser.ts
var LrcParser = class extends AbstractParser {
  constructor() {
    super(...arguments);
    // Signature
    this.isValidSignature = (value) => value === "LRC\0";
    // Version
    this.isValidVersion = (value) => value === 2;
    // Stream count
    // pro LRC z běžné kamery musí být vždy 1
    // Je-li streamů více, obsahují doplňkové údaje viz Unit
    this.isStreamCountValid = (value) => value === 1;
    // File data type
    // 0 = float16
    // 1 = float32 - tento je z LabIR Edu kamery
    // 2 = int16
    this.isDataTypeValid = (value) => value === void 0 ? false : [0, 1, 2].includes(value);
    // Unit
    // 0 = none
    // 1 = intensity (surová data z termokamery - nelze přepočítat bez kalibrační křivky snímače)
    // 2 = stupně celsia
    // 3 = kelviny (přepočítat jednoduše)
    // 4 = čas (mimo kontext - neřešit)
    // 5 = úhel v radiánech čas (mimo kontext - neřešit)
    this.isValidUnit = (value) => value === 2;
  }
  async parseFile() {
    await this.parseSignature();
    this.parseVersion();
    this.parseDataType();
    this.parseStreamCount();
    this.parseTimestamp();
    this.parseUnit();
    this.parseWidth();
    this.parseHeight();
    this.parseFrameCount();
    this.parseFrames();
    this.parseMin();
    this.parseMax();
    await this.parsePixels();
  }
  async parseSignature() {
    const value = await this.readString(0, 4);
    if (!this.isValidSignature(value)) {
      this.logValidationError("signature", value);
    }
    this._signature = value;
  }
  parseVersion() {
    const value = this.read8bNumber(4);
    if (!this.isValidVersion(value))
      this.logValidationError("version", value);
    this._version = value;
  }
  parseStreamCount() {
    const value = this.read8bNumber(14);
    if (!this.isStreamCountValid(value))
      this.logValidationError("streamCount", value);
    this._streamCount = value;
  }
  parseDataType() {
    const value = this.read8bNumber(15);
    if (!this.isDataTypeValid(value))
      this.logValidationError("fileDataType", value);
    this._fileDataType = value;
    this._pixelByteLength = value === 0 ? 2 : 4;
  }
  /** Get byteSize of one pixel depending on the file data type */
  get pixelByteLength() {
    return this._pixelByteLength;
  }
  parseUnit() {
    const value = this.read8bNumber(16);
    if (!this.isValidUnit(value))
      this.logValidationError("unit", value);
    this._unit = value;
  }
  getFrameCount() {
    return this.getNumberOfFrames();
  }
  // Min
  getMin() {
    return this.frames.reduce((state, current) => {
      if (current.min < state) {
        return current.min;
      }
      return state;
    }, Infinity);
  }
  getMax() {
    return this.frames.reduce((state, current) => {
      if (current.max > state) {
        return current.max;
      }
      return state;
    }, -Infinity);
  }
  // Width
  getWidth() {
    return this.read16bNumber(17);
  }
  // Height
  getHeight() {
    return this.read16bNumber(19);
  }
  // Read the file timestamp from index 5 (first frame timestamp is in index 25)
  getTimestamp() {
    return LrcUtils.readDotnetTimestamp(5, this.data);
  }
  /** @todo Why must we add 4 bytes at the end of a frame? */
  getFrameSize() {
    if (this._fileDataType === void 0 || this.width === void 0 || this.height === void 0 || this.pixelByteLength === void 0) {
      throw new Error("Trying to read frame size before necessary attributes are known");
    } else {
      const frameHeaderSize = 57;
      const dataSize = this.width * this.height * this.pixelByteLength;
      return frameHeaderSize + dataSize;
    }
  }
  getNumberOfFrames() {
    const frameSize = this.getFrameSize();
    return this.frameSubset.byteLength / frameSize;
  }
  getFrames() {
    const frames = [];
    const frameParser = new LrcFrameParser(
      this.frameSubset,
      this.width,
      this.height,
      this._fileDataType,
      this.frameCount,
      this.getFrameSize(),
      this.pixelByteLength
    );
    for (let i = 0; i < this.frameCount; i++) {
      frames.push(frameParser.parseFrame(i));
    }
    return frames;
  }
  /** @deprecated Should move to parsing from frames */
  async readTemperatureArray(index) {
    const subset = (await this.blob.arrayBuffer()).slice(index, index + this.width * this.height * this.pixelByteLength);
    if (this._fileDataType === 0) {
      const array = new Uint16Array(subset);
      const distance = Math.abs(this.min - this.max);
      const UINT16_MAX = 65535;
      return [...array].map((pixel) => {
        const mappedValue = pixel / UINT16_MAX;
        return this.min + distance * mappedValue;
      });
    } else if (this._fileDataType === 1) {
      return [...new Float32Array(subset)];
    }
    return [];
  }
  // Pixels
  getPixels() {
    if (this.frames) {
      if (this.frames.length > 0)
        return this.frames[0].pixels;
    }
    return [];
  }
  isValid() {
    return this.errors.length === 0 && this.isValidSignature(this._signature) && this.isStreamCountValid(this._streamCount) && this.isDataTypeValid(this._fileDataType) && this.isValidVersion(this._version) && this.isValidUnit(this._unit) && this.isValidTimestamp(this.timestamp) && this.isValidWidth(this.width) && this.isValidHeight(this.height) && this.isValidPixels(this.pixels) && this.isValidMin(this.min) && this.isValidMax(this.max) && this.isValidFrameCount(this.frameCount);
  }
  getThermalFile() {
    if (!this.isValid()) {
      throw new Error(
        this.encodeErrors()
      );
    }
    return new ThermalFileSource(
      this.url,
      this._signature,
      this._version,
      this._streamCount,
      this._fileDataType,
      this._unit,
      this.width,
      this.height,
      this.timestamp,
      this.pixels,
      this.min,
      this.max,
      this.frameCount,
      this.frames,
      this.visibleUrl
    );
  }
  // Binary operations
  async readString(startIndex, stringLength) {
    return await this.blob.slice(startIndex, stringLength).text();
  }
  read16bNumber(index) {
    return this.data.getUint16(index, true);
  }
  read8bNumber(index) {
    return this.data.getUint8(index);
  }
};

// src/parsers/thermalLoader.ts
var ThermalLoader = class _ThermalLoader {
  constructor() {
  }
  /** Load a thermal file from an URL and return a `ThermalFileSource` instance. */
  static async fromUrl(thermalUrl, visibleUrl) {
    const loader = new _ThermalLoader();
    loader.thermalUrl = thermalUrl;
    loader.visibleUrl = visibleUrl;
    return await loader.loadFromUrl();
  }
  async loadFromUrl() {
    const response = await (0, import_cross_fetch.default)(this.thermalUrl);
    this.blob = await response.blob();
    if (response.status !== 200) {
      throw new Error(`There was an error loading '${this.thermalUrl}'`);
    }
    this.parser = this.getParserInstance();
    return await this.parser.parse();
  }
  /** Load a thermal file from a provided Blob/File and return a `ThermalFileSource` instance. */
  static async fromFile(file) {
    const loader = new _ThermalLoader();
    loader.thermalUrl = file.name;
    loader.blob = file;
    return await loader.loadFromBlob();
  }
  async loadFromBlob() {
    this.parser = this.getParserInstance();
    return await this.parser.parse();
  }
  /** 
   * Determine the file type and return the corresponding parser. 
   * @todo In the future, new parsers shall be added.
   */
  getParserInstance() {
    if (this.thermalUrl.endsWith(".lrc")) {
      return new LrcParser(this.thermalUrl, this.blob, this.visibleUrl);
    }
    throw new Error("No parser found!");
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

// src/properties/drives/RangeDriver.ts
var RangeDriver = class extends AbstractProperty {
  /** 
   * Make sure the range is allways within the minmax values.
   * 
   * If this method should work, the value needs to be set before the minmax is calculated.
   */
  validate(value) {
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
    if (value === void 0 && this.value === void 0) {
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
      this.imposeRange({ from: this.parent.minmax.value.min, to: this.parent.minmax.value.max });
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
      this.imposeRange(newRange);
    }
  }
};

// src/properties/drives/CursorPositionDrive.ts
var CursorPositionDrive = class extends AbstractProperty {
  constructor() {
    super(...arguments);
    this._hover = this.value !== void 0;
  }
  get hover() {
    return this._hover;
  }
  validate(value) {
    return value;
  }
  // After the position changes, update the hover & project the position in all instances
  afterSetEffect(value) {
    this._hover = this.value !== void 0;
    this.parent.instances.forEveryInstance((instance) => instance.recieveCursorPosition(value));
    this.parent.files.forEveryInstance((instance) => instance.recieveCursorPosition(value));
  }
  recieveCursorPosition(position) {
    this.value = position;
  }
};

// src/properties/lists/filesState.ts
var FilesState = class extends AbstractProperty {
  constructor() {
    super(...arguments);
    this._requestedRemovals = /* @__PURE__ */ new Map();
    this._map = /* @__PURE__ */ new Map();
  }
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

// src/properties/lists/InstancesState.ts
var InstancesState = class extends AbstractProperty {
  constructor() {
    super(...arguments);
    this._requestedRemovals = /* @__PURE__ */ new Map();
    this._map = /* @__PURE__ */ new Map();
  }
  enqueueAdd(thermalUrl, visibleUrl, callback) {
    this.parent.registry.fetcher.request(thermalUrl, visibleUrl, (source, error) => {
      if (source instanceof ThermalFileSource) {
        const instance = this.instantiateSource(source);
        if (callback) {
          callback(instance);
        }
      } else if (callback) {
        callback(void 0, error ?? "N\u011Bco se pokazilo v instanci");
      }
    });
  }
  enqueueRemove(thermalUrl, callback) {
    if (this._requestedRemovals.has(thermalUrl)) {
      if (callback)
        this._requestedRemovals.get(thermalUrl).callbacks.push(callback);
    } else {
      this._requestedRemovals.set(thermalUrl, {
        url: thermalUrl,
        callbacks: callback ? [callback] : []
      });
    }
  }
  async cleanup() {
    const flatRemovalUrls = Object.values(this._requestedRemovals).map((item) => item.url);
    this.value = this.value.filter((instance) => {
      const shouldRemove = flatRemovalUrls.includes(instance.url);
      if (shouldRemove) {
        this._requestedRemovals.get(instance.url)?.callbacks.forEach((callback) => callback());
        return true;
      }
      return false;
    });
    this._requestedRemovals.clear();
    this.parent.registry.postLoadedProcessing();
  }
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
  /** 
   * Creation of of single instance 
   * @deprecated Instances should not be created one by one, since every single action triggers the listeners
   */
  instantiateSource(source) {
    if (!this._map.has(source.url)) {
      const instance = source.createInstance(this.parent);
      this.value = [...this.value, instance];
      return instance;
    } else {
      return this._map.get(source.url);
    }
  }
  /**
   * Creation of instances at once
   * - triggers listeners only once
   */
  instantiateSources(sources) {
    const newValue = [];
    sources.forEach((source) => {
      if (!this._map.has(source.url)) {
        newValue.push(source.createInstance(this.parent));
      }
    });
    this.value = newValue;
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

// src/group/ThermalGroup.ts
var ThermalGroup = class extends BaseStructureObject {
  constructor(registry, id, name, description) {
    super();
    this.registry = registry;
    this.id = id;
    this.name = name;
    this.description = description;
    this.hash = Math.random();
    this.minmax = new MinmaxGroupProperty(this, void 0);
    this.instances = new InstancesState(this, []);
    this.files = new FilesState(this, []);
    this.cursorPosition = new CursorPositionDrive(this, void 0);
    /** Iteration */
    this.forEveryInstance = (fn) => {
      this.instances.value.forEach((instance) => fn(instance));
    };
  }
  /**
   * Destruction
   */
  /** Remove all instances, reset the minmax */
  destroySelfAndBelow() {
    this.removeAllChildren();
    this.minmax.reset();
  }
  removeAllChildren() {
    this.instances.removeAllInstances();
  }
  reset() {
    this.instances.reset();
    this.minmax.reset();
    this.cursorPosition.reset();
  }
};

// src/properties/lists/GroupsState.ts
var GroupsState = class extends AbstractProperty {
  constructor() {
    super(...arguments);
    this._map = /* @__PURE__ */ new Map();
  }
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

// src/loading/workers/parsers/histogram.ts
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
        const array = new Uint16Array(pixelsSubset);
        const UINT16_MAX = 65535;
        array.forEach((pixel) => {
          const mappedValue = pixel / UINT16_MAX;
        });
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

// src/loading/workers/parsers/LrcParser.ts
var extensions = [{
  extension: "lrc",
  minme: "application/octet-stream"
}];
var is = (data, url) => {
  const hasCorrectExtension = url.endsWith("lrc");
  const decoder = new TextDecoder();
  const hasCorrectSignature = decoder.decode(data.slice(0, 4)) === "LRC\0";
  return hasCorrectExtension && hasCorrectSignature;
};
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
    const TicksMask = 0x3FFFFFFFFFFFFFFFn;
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
  const TicksMask = 0x3FFFFFFFFFFFFFFFn;
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
var parser = {
  name: "LabIR Recording (.lrc)",
  description: "Radiometric data saved by thermal cameras TIMI Edu and by measurement systems developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",
  devices: [{
    deviceName: "TIMI Edu Infrared Camera",
    deviceUrl: "https://edu.labir.cz",
    manufacturer: "TIMI Creation, s.r.o.",
    manufacturerUrl: "https://timic.cz"
  }],
  extensions,
  is,
  baseInfo,
  getFrameSubset,
  frameData,
  registryHistogram
};
var LrcParser2 = Object.freeze(parser);

// src/properties/states/HistogramState.ts
var HistogramState = class extends AbstractProperty {
  constructor() {
    super(...arguments);
    this._resolution = 150;
    /** Map of temperature => countOfPixels in the scaled down resolution */
    this.buffer = /* @__PURE__ */ new Map();
    /** Total countOfPixels in every image */
    this.bufferPixelsCount = 0;
    /**  */
    this._bufferResolution = 1e3;
  }
  get resolution() {
    return this._resolution;
  }
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
  */
  setResolution(value) {
    this._resolution = Math.round(Math.min(Math.max(value, 2), 400));
  }
  /** If incorrect resolution is being set, set empty array @todo there may be an error in +1*/
  validate(value) {
    if (value.length !== this.resolution + 1 && value.length !== 0) {
    }
    return value;
  }
  afterSetEffect() {
  }
  /** Recalculates the value using all current instances and with che current resolution */
  recalculateWithCurrentSetting() {
    this.recalculateHistogram();
    return this.value;
  }
  /** 
   * Recalculate the histogram buffer using web workers.
   * This is an async operation using `workerpool`
   */
  refreshBufferFromCurrentPixels() {
    if (this.parent.minmax.value !== void 0 && this.parent.groups.value.length !== 0 && this.parent.minmax.distanceInCelsius !== void 0) {
      const pixels = this.parent.groups.value.map((group) => {
        return group.instances.value.map((instance) => instance.getPixelsForHistogram());
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
    const result = await this.parent.pool.exec(LrcParser2.registryHistogram, [allBuffers]);
    this.value = result;
  }
  /** Get the pixels from images, calculate the 1000 and store that in the buffer. @deprecated */
  _getHistorgramFromAllGroups() {
    if (this.parent.minmax.value === void 0 || this.parent.groups.value.length === 0) {
    }
    if (this.parent.minmax.value === void 0 || this.parent.groups.value.length === 0) {
      return [];
    } else {
      const allPixels = this.parent.groups.value.reduce((state, current) => {
        const pixels = current.instances.value.reduce((buf, instance) => {
          buf = [...buf, ...instance.pixels];
          return buf;
        }, []);
        return [...state, ...pixels];
      }, []);
      const segments = [];
      const numSegments = this.resolution;
      const difference = this.parent.minmax.value.max - this.parent.minmax.value.min;
      const segment = difference / numSegments;
      for (let i = 0; i < numSegments; i++) {
        const from = segment * i + this.parent.minmax.value.min;
        const to = from + segment;
        segments.push([from, to]);
      }
      const results = [];
      let sum = allPixels.length;
      for (const i of segments) {
        const count = allPixels.filter((pixel) => {
          return pixel >= i[0] && pixel < i[1];
        }).length;
        sum = sum + count;
        results.push({
          from: i[0],
          to: i[1],
          count
        });
      }
      const recalculated = results.map((i) => {
        return {
          ...i,
          percentage: i.count / sum * 100
        };
      });
      const max = Math.max(...recalculated.map((item) => item.percentage));
      return recalculated.map((item) => {
        return {
          ...item,
          height: item.percentage / max * 100
        };
      });
    }
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

// src/loading/sequential/ThermalFetcher.ts
var ThermalFetcher = class {
  constructor(registry) {
    this.registry = registry;
    this.requests = /* @__PURE__ */ new Map();
  }
  get requestArray() {
    return Array.from(this.requests.values());
  }
  request(thermalUrl, visibleUrl, callback) {
    if (this.requests.has(thermalUrl)) {
      if (callback) {
        this.requests.get(thermalUrl)?.callbacks.push(callback);
      }
    } else {
      const newRequest = {
        thermalUrl,
        visibleUrl,
        callbacks: callback ? [callback] : []
      };
      this.requests.set(thermalUrl, newRequest);
    }
    if (this.timer === void 0) {
      this.timer = setTimeout(this.resolve.bind(this), 0);
    }
  }
  async resolve() {
    const result = await Promise.all(
      this.requestArray.map(async (request) => {
        const result2 = {
          request
        };
        if (this.registry.manager.isUrlRegistered(request.thermalUrl)) {
          result2.output = this.registry.manager.sourcesByUrl[request.thermalUrl];
        } else {
          try {
            const source = await ThermalFileSource.fromUrlWithErrors(request.thermalUrl, request.visibleUrl);
            if (source) {
              result2.output = source;
            }
          } catch (error) {
            if (error instanceof Error) {
              result2.output = error.message;
            }
          }
        }
        return result2;
      })
    ).then((results) => {
      return results.map((result2) => {
        if (result2.output instanceof ThermalFileSource) {
          result2.request.callbacks.forEach((callback) => {
            callback(result2.output);
            this.registry.manager.registerSource(result2.output);
          });
        } else {
          result2.request.callbacks.forEach((callback) => {
            if (result2.output instanceof ThermalFileSource === false)
              callback(void 0, result2.output ?? "N\u011Bco se pokazilo");
          });
        }
        return result2.output;
      });
    });
    clearTimeout(this.timer);
    this.timer = void 0;
    this.registry.postLoadedProcessing();
    return result;
  }
};

// src/loading/batch/ThermalRequest.ts
var ThermalRequest = class _ThermalRequest extends EventTarget {
  constructor(group, url, visibleUrl) {
    super();
    this.group = group;
    this.url = url;
    this.visibleUrl = visibleUrl;
  }
  static single(group, thermalUrl, visibleUrl) {
    return new _ThermalRequest(group, thermalUrl, visibleUrl);
  }
  static multiple(group, requests) {
    return requests.map((request) => new _ThermalRequest(group, request.thermalUrl, request.visibleUrl));
  }
  async fetch() {
    if (this.group.registry.manager.isUrlRegistered(this.url)) {
      return {
        file: this.group.registry.manager.sourcesByUrl[this.url],
        request: this
      };
    }
    const file = await ThermalFileSource.fromUrl(this.url, this.visibleUrl);
    if (!file) {
      return null;
    } else if (file !== null) {
      return {
        file,
        request: this
      };
    }
    return null;
  }
};

// src/loading/batch/ThermalRegistryLoader.ts
var ThermalRegistryLoader = class {
  constructor(registry) {
    this.registry = registry;
    /** Buffer of all pending requests */
    this._requests = [];
  }
  get requests() {
    return this._requests;
  }
  /** Loading state is stored in the registry */
  get loading() {
    return this.registry.loading.value;
  }
  /** Request a single file. To fetch it, call ``resolveQuery` */
  requestFile(group, thermalUrl, visibleUrl) {
    if (this.loading === true) {
      console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);
      return;
    }
    this._requests.push(ThermalRequest.single(group, thermalUrl, visibleUrl));
  }
  /** Request multiple files. To fetch them, call ``resolveQuery` */
  requestFiles(group, requests) {
    if (this.loading === true) {
      console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);
      return;
    }
    this._requests = [
      ...this._requests,
      ...ThermalRequest.multiple(group, requests)
    ];
  }
  /** @todo If there is an error, it is here. In the instancing, it seems that deleted groups remain and instances are binded to old groups. */
  async resolveQuery() {
    if (this.loading === true) {
    }
    const result = await Promise.all(
      this._requests.map((request) => request.fetch())
    );
    const mapByGroups = {};
    for (const response of result) {
      if (response !== null) {
        const file = this.registry.manager.registerSource(response.file);
        if (response.request.group.id in mapByGroups === false) {
          mapByGroups[response.request.group.id] = [file];
        } else {
          mapByGroups[response.request.group.id].push(file);
        }
      }
    }
    for (const groupId in mapByGroups) {
      const groupInstance = this.registry.groups.map.get(groupId);
      groupInstance?.instances.instantiateSources(mapByGroups[groupId]);
    }
    this._requests = [];
    return this.registry.groups.value;
  }
};

// src/registry/ThermalRegistry.ts
var ThermalRegistry = class extends BaseStructureObject {
  constructor(id, manager, options) {
    super();
    this.id = id;
    this.manager = manager;
    this.hash = Math.random();
    /** Takes care of the entire loading */
    this.loader = new ThermalRegistryLoader(this);
    /** Groups are stored in an observable property */
    this.groups = new GroupsState(this, []);
    this.fetcher = new ThermalFetcher(this);
    /**
     * Observable properties and drives
     */
    /** 
     * Opacity property 
     */
    this.opacity = new OpacityDrive(this, 1);
    /** 
     * Minmax property 
     */
    this.minmax = new MinmaxRegistryProperty(this, void 0);
    /**
     * Loading
     */
    this.loading = new LoadingState(this, false);
    /**
     * Range
     */
    this.range = new RangeDriver(this, void 0);
    /**
     * Histogram
     */
    this.histogram = new HistogramState(this, []);
    this.palette = this.manager.palette;
    if (options) {
      if (options.histogramResolution !== void 0) {
        if (options.histogramResolution > 0)
          this.histogram.setResolution(options.histogramResolution);
      }
    }
  }
  /** Service */
  get service() {
    return this.manager.service;
  }
  /** Iterator methods */
  forEveryGroup(fn) {
    this.groups.value.forEach(fn);
  }
  forEveryInstance(fn) {
    this.forEveryGroup((group) => group.instances.forEveryInstance(fn));
    this.forEveryGroup((group) => group.files.forEveryInstance(fn));
  }
  async loadFiles(files) {
    this.reset();
    Object.entries(files).forEach(([groupId, files2]) => {
      const group = this.groups.addOrGetGroup(groupId);
      files2.forEach((file) => {
        this.loader.requestFile(group, file.thermalUrl, file.visibleUrl);
      });
    });
    this.loading.markAsLoading();
    await this.loader.resolveQuery();
    this.postLoadedProcessing();
  }
  /** Load the registry with only one file. */
  async loadOneFile(file, groupId) {
    this.reset();
    const group = this.groups.addOrGetGroup(groupId);
    this.loader.requestFile(group, file.thermalUrl, file.visibleUrl);
    this.loading.markAsLoading();
    await this.loader.resolveQuery();
    this.postLoadedProcessing();
  }
  /** Completely flush the entire registry and process evyrything from the files that are being dropped here. */
  async processDroppedFiles(files, groupId) {
    this.reset();
    this.loading.markAsLoading();
    this.removeAllChildren();
    const parsedFiles = await Promise.all(
      files.map((file) => ThermalLoader.fromFile(file))
    ).then((results) => {
      return results.filter((file) => {
        return file !== null;
      });
    });
    parsedFiles.forEach((source) => this.manager.registerSource(source));
    const group = this.groups.addOrGetGroup(groupId);
    group.instances.instantiateSources(parsedFiles);
    this.postLoadedProcessing();
  }
  /** Register a single file request */
  enqueueFile(groupId, thermalUrl, visibleUrl) {
    const group = this.groups.addOrGetGroup(groupId);
    this.loader.requestFile(group, thermalUrl, visibleUrl);
  }
  // Load all the enqueued requests
  async loadQuery() {
    this.reset();
    this.loading.markAsLoading();
    await this.loader.resolveQuery();
    this.postLoadedProcessing();
  }
  /** 
   * Actions to take after the registry is loaded 
   * - recalculate the minmax of groups
   * - recalculate minmax of registry
   * - impose new minmax as new range
   * - recalculate the histogram
  */
  postLoadedProcessing() {
    this.forEveryGroup((group) => group.minmax.recalculateFromInstances());
    this.minmax.recalculateFromGroups();
    if (this.minmax.value)
      this.range.imposeRange({ from: this.minmax.value.min, to: this.minmax.value.max });
    this.histogram.refreshBufferFromCurrentPixels();
    this.loading.markAsLoaded();
  }
  reset() {
    this.forEveryGroup((group) => group.reset());
    if (this.loader.loading === false) {
      this.opacity.reset();
      this.minmax.reset();
    }
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

// src/loading/workers/AbstractFileResult.ts
var AbstractFileResult = class {
  constructor(thermalUrl, visibleUrl) {
    this.thermalUrl = thermalUrl;
    this.visibleUrl = visibleUrl;
  }
};

// src/loading/workers/errors/FileFailureService.ts
var FileFailureService = class _FileFailureService extends AbstractFileResult {
  constructor(thermalUrl, code, message) {
    super(thermalUrl);
    this.code = code;
    this.message = message;
  }
  isSuccess() {
    return false;
  }
  static fromError(error) {
    return new _FileFailureService(error.url, error.code, error.message);
  }
};

// src/loading/workers/errors/FileLoadingError.ts
var FileLoadingError = class extends Error {
  constructor(code, url, message) {
    super(message);
    this.code = code;
    this.url = url;
  }
};

// src/properties/time/internals/FrameBuffer.ts
var FrameBuffer = class {
  constructor(drive, firstFrame) {
    this.drive = drive;
    /** Number of images to preload at once */
    this.bufferSize = 4;
    /** The actual buffer holding pair of step & frame */
    this.buffer = /* @__PURE__ */ new Map();
    this.currentFrame = firstFrame;
  }
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
  /** Accessor to array of steps preloaded in the given moment */
  get preloadedSteps() {
    return Array.from(this.buffer.keys());
  }
  /** Accessor to array of relative timestamps preloaded in the given moment */
  get preloadedTimestampsRelative() {
    return this.preloadedSteps.map((step) => step.relative);
  }
  async init() {
    return await this.preload(this.currentStep);
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
    const status = await this.preload(step);
    this.currentFrame = frame;
    return status;
  }
  /** Preload frame data to the buffer based on the provided step */
  async preload(step) {
    const subsetStart = step.index + 1 < this.drive.relativeSteps.length ? step.index + 1 : NaN;
    const subsetEnd = isNaN(subsetStart) ? NaN : this.drive._validateIndex(subsetStart + this.bufferSize);
    if (isNaN(subsetStart) || isNaN(subsetEnd) || subsetStart > subsetEnd) {
      if (step.relative === this.drive.parent.duration) {
        this.buffer.clear();
      }
      return {
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
      currentFrame: this.currentFrame,
      currentStep: this.currentStep,
      relativeTime: this.drive.value,
      buffer: this.preloadedSteps,
      preloaded: true,
      hasChanged: true
    };
  }
};

// src/properties/time/TimelineDrive.ts
var TimelineDrive = class extends AbstractProperty {
  constructor(parent, initial, steps, initialFrameData) {
    super(parent, Math.max(Math.min(initial, steps.length), 0));
    this.steps = steps;
    this.stepsByAbsolute = /* @__PURE__ */ new Map();
    this.stepsByRelative = /* @__PURE__ */ new Map();
    this.stepsByIndex = /* @__PURE__ */ new Map();
    this.relativeSteps = [];
    this._onChangeListeners = /* @__PURE__ */ new Map();
    this._isPlayying = false;
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
  get duration() {
    return this.parent.duration;
  }
  get frameCount() {
    return this.steps.length;
  }
  get currentStep() {
    return this._currentStep;
  }
  get isPlaying() {
    return this._isPlayying;
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
  /** Event listener to changement of the current frame.
   * - the current frame is not changed every time the value changes
   * - the current frame is changed only when the ms value points fo a new previous frame
   */
  addChangeListener(identificator, fn) {
    this._onChangeListeners.set(identificator, fn);
  }
  removeChangeListener(identificator) {
    this._onChangeListeners.delete(identificator);
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
      return result;
    }
    return {
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
  createNextStepTimer() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
    }
    if (!this.isSequence || this._isPlayying === false) {
      return;
    }
    this.timer = setTimeout(() => {
      const next = this.findNextRelative(this._currentStep.relative);
      if (next) {
        this.value = next.relative;
        if (this._isPlayying) {
          this.value = next.relative;
          this._currentStep = next;
          this.buffer.recieveStep(next);
          this.createNextStepTimer();
        }
      } else {
        this._isPlayying = false;
      }
    }, this._currentStep.offset);
  }
  play() {
    if (this.steps.length > 1) {
      this._isPlayying = true;
      this.createNextStepTimer();
    }
  }
  pause() {
    this._isPlayying = false;
    clearTimeout(this.timer);
  }
  stop() {
    this.pause();
    this.value = 0;
  }
};

// src/loading/workers/instance.ts
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
    throw new Error("Method not implemented.");
  }
  exportThermalDataAsSvg() {
    throw new Error("Method not implemented.");
  }
  postInit() {
    this.canvasLayer = new ThermalCanvasLayer(this);
    this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
    this.cursorLayer = new ThermalCursorLayer(this);
    this.listenerLayer = new ThermalListenerLayer(this);
    this.cursorValue = new CursorValueDrive(this, void 0);
    this.timeline = new TimelineDrive(this, 0, this.timelineData, this.firstFrame);
    this.timeline.init();
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
        const value2 = this.getTemperatureAtPoint(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y);
        this.cursorLayer.setValue(value2);
      }
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
};

// src/loading/workers/FileReaderService.ts
var FileReaderService = class extends AbstractFileResult {
  constructor(buffer, parser2, thermalUrl, visibleUrl) {
    super(thermalUrl, visibleUrl);
    this.buffer = buffer;
    this.parser = parser2;
    /** For the purpose of testing we have a unique ID */
    this.id = Math.random();
    this.pool = pool_default;
    this.fileName = this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/") + 1);
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
  async createInstance(group) {
    const baseInfo2 = await this.baseInfo();
    const firstFrame = await this.frameData(0);
    const instance = Instance.fromService(group, this, baseInfo2, firstFrame);
    group.files.addFile(instance);
    return instance;
  }
};

// src/loading/workers/parsers/index.ts
var parsers = {
  LrcParser: LrcParser2
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

// src/loading/workers/FileRequest.ts
var FileRequest = class _FileRequest {
  constructor(thermalUrl, visibleUrl) {
    this.thermalUrl = thermalUrl;
    this.visibleUrl = visibleUrl;
  }
  static fromUrl(thermalUrl, visibleUrl) {
    return new _FileRequest(thermalUrl, visibleUrl);
  }
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
        new FileFailureService(
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
        new FileReaderService(
          buffer,
          parser2,
          this.thermalUrl,
          this.visibleUrl
        )
      );
    } catch (error) {
      if (error instanceof FileLoadingError) {
        return this.pocessTheService(
          FileFailureService.fromError(error)
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

// src/loading/workers/FilesService.ts
var FilesService = class {
  constructor(manager) {
    this.manager = manager;
    this.pool = pool_default;
    /** Map of peoding requesta */
    this.requestsByUrl = /* @__PURE__ */ new Map();
    /** Cache of loaded files */
    this.cacheByUrl = /* @__PURE__ */ new Map();
  }
  static isolatedInstance(registryName = "isolated_registry") {
    const manager = new ThermalManager();
    const registry = manager.addOrGetRegistry(registryName);
    return {
      service: registry.service,
      registry
    };
  }
  /** Number of currently pending requests */
  get requestsCount() {
    return this.requestsByUrl.size;
  }
  /** Is an URL currently pending? */
  fileIsPending(url) {
    return this.requestsByUrl.has(url);
  }
  /** Number of cached results */
  get cachedServicesCount() {
    return this.cacheByUrl.size;
  }
  /** Is the URL already in the cache? */
  fileIsInCache(url) {
    return this.cacheByUrl.has(url);
  }
  async loadFile(thermalUrl, visibleUrl) {
    if (this.cacheByUrl.has(thermalUrl)) {
      return this.cacheByUrl.get(thermalUrl);
    } else if (this.requestsByUrl.has(thermalUrl)) {
      return this.requestsByUrl.get(thermalUrl).load();
    } else {
      const request = FileRequest.fromUrl(thermalUrl, visibleUrl);
      this.requestsByUrl.set(thermalUrl, request);
      const result = await request.load();
      this.requestsByUrl.delete(thermalUrl);
      this.cacheByUrl.set(thermalUrl, result);
      return result;
    }
  }
};

// src/manager/ThermalManager.ts
var ThermalManager = class extends BaseStructureObject {
  constructor(options) {
    super();
    /* registries */
    this.registries = {};
    /** The palette is stored absolutely globally */
    /**
     * Palette
     */
    this.palette = new PaletteDrive(this, "jet");
    this.service = new FilesService(this);
    /** Sources cache */
    this._sourcesByUrl = {};
    this.isUrlRegistered = (url) => Object.keys(this.sourcesByUrl).includes(url);
    this.id = Math.random();
    if (options) {
      if (options.palette) {
        this.palette.setPalette(options.palette);
      }
    }
  }
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
  get sourcesByUrl() {
    return this._sourcesByUrl;
  }
  getSourcesArray() {
    return Object.values(this.sourcesByUrl);
  }
  getRegisteredUrls() {
    return Object.keys(this.sourcesByUrl);
  }
  registerSource(source) {
    if (!this.getRegisteredUrls().includes(source.url)) {
      this.sourcesByUrl[source.url] = source;
      return source;
    }
    return this.sourcesByUrl[source.url];
  }
};

// src/utils/time/formatting.ts
var import_date_fns = require("date-fns");

// src/utils/time/base.ts
var TimeUtilsBase = class {
};
/** Convert an input to a date object */
TimeUtilsBase.inputToDate = (value) => {
  if (typeof value === "number") {
    const d = /* @__PURE__ */ new Date();
    d.setTime(value);
    return d;
  }
  return value;
};

// src/utils/time/formatting.ts
var _TimeFormat = class _TimeFormat extends TimeUtilsBase {
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
/** YYYY-MM-DD */
_TimeFormat.isoDate = (value) => {
  value = _TimeFormat.inputToDate(value);
  return (0, import_date_fns.formatISO9075)(value, { representation: "date" });
};
/** HH:MM:SS */
_TimeFormat.isoTime = (value) => {
  value = _TimeFormat.inputToDate(value);
  return (0, import_date_fns.formatISO9075)(value, { representation: "time" });
};
/** YYYY-MM-DD HH:MM:SS */
_TimeFormat.isoComplete = (value) => {
  value = _TimeFormat.inputToDate(value);
  return (0, import_date_fns.formatISO9075)(value);
};
/** HH:mm */
_TimeFormat.humanTime = (value, showSeconds = false) => {
  value = _TimeFormat.inputToDate(value);
  return (0, import_date_fns.format)(value, showSeconds ? "HH:mm:ss" : "HH:mm");
};
/** j. M. ???? (y) */
_TimeFormat.humanDate = (value, includeYear = false) => {
  value = _TimeFormat.inputToDate(value);
  return (0, import_date_fns.format)(value, includeYear ? "d. M." : "d. M. yyyy");
};
var TimeFormat = _TimeFormat;

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
var _TimeRound = class _TimeRound extends TimeUtilsBase {
};
_TimeRound.down = (value, roundTo) => {
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
_TimeRound.up = (value, roundTo) => {
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
_TimeRound.pick = (value, period) => {
  return [
    _TimeRound.down(value, period),
    _TimeRound.up(value, period)
  ];
};
_TimeRound.modify = (value, amount, period) => {
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
var TimeRound = _TimeRound;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AbstractFile,
  FileFailureService,
  FileReaderService,
  GRAYSCALE,
  IRON,
  Instance,
  JET,
  ThermalFileInstance,
  ThermalFileSource,
  ThermalGroup,
  ThermalManager,
  ThermalPalettes,
  ThermalRegistry,
  TimeFormat,
  TimePeriod,
  TimeRound,
  pool
});
