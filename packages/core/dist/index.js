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
  GRAYSCALE: () => GRAYSCALE,
  IRON: () => IRON,
  JET: () => JET,
  ThermalFileInstance: () => ThermalFileInstance,
  ThermalFileSource: () => ThermalFileSource,
  ThermalGroup: () => ThermalGroup,
  ThermalManager: () => ThermalManager,
  ThermalPalettes: () => ThermalPalettes,
  ThermalRegistry: () => ThermalRegistry,
  TimeFormat: () => import_time.TimeFormat,
  TimePeriod: () => import_time.TimePeriod,
  TimeRound: () => import_time.TimeRound
});
module.exports = __toCommonJS(src_exports);

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
    container.classList.add("thermalCanvasWeapper");
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
    this._opacity = 1;
    this.container = ThermalDomFactory.createCanvasContainer();
    this.canvas = ThermalDomFactory.createCanvas();
    this.canvas.width = this.instance.width;
    this.canvas.height = this.instance.height;
    this.context = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);
  }
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
  draw() {
    const displayRange = this.to - this.from;
    for (let x = 0; x <= this.width; x++) {
      for (let y = 0; y <= this.height; y++) {
        const index = x + y * this.width;
        let temperature = this.pixels[index];
        if (temperature < this.from)
          temperature = this.from;
        if (temperature > this.to)
          temperature = this.to;
        const temperatureRelative = temperature - this.from;
        const temperatureAspect = temperatureRelative / displayRange;
        const colorIndex = Math.round(255 * temperatureAspect);
        const color = this.getPalette()[colorIndex];
        this.context.fillStyle = color;
        this.context.fillRect(x, y, 1, 1);
      }
    }
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
var ThermalFileInstance = class extends EventTarget {
  constructor(source, group) {
    super();
    this.source = source;
    this.group = group;
    // The root container
    this.root = null;
    // The canvas layer
    this.canvasLayer = new ThermalCanvasLayer(this);
    // The visible layer
    this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
    /// The cursor layer
    this.cursorLayer = new ThermalCursorLayer(this);
    // The listener layer
    this.listenerLayer = new ThermalListenerLayer(this);
    /**
     * Dom bindings
     */
    this._mounted = false;
    /**
     * Onmousemove interactions
     */
    this._onHover = void 0;
    /**
     * Onclick interactions
     */
    this._onClick = void 0;
    /** 
     * CursorValue & hover state 
    */
    this.cursorValue = new CursorValueDrive(this, void 0);
    this._isHover = false;
    this.id = `instance_${this.group.id}_${this.source.url}`;
    this.horizontalLimit = this.width / 4 * 3;
    this.verticalLimit = this.height / 4 * 3;
  }
  // Core properties are mirrored from the source
  get url() {
    return this.source.url;
  }
  get signature() {
    return this.source.signature;
  }
  get unit() {
    return this.source.unit;
  }
  get width() {
    return this.source.width;
  }
  get height() {
    return this.source.height;
  }
  get timestamp() {
    return this.source.timestamp;
  }
  get pixels() {
    return this.source.pixels;
  }
  get min() {
    return this.source.min;
  }
  get max() {
    return this.source.max;
  }
  get visibleUrl() {
    return this.source.visibleUrl;
  }
  destroySelfAndBelow() {
    this.detachFromDom();
  }
  removeAllChildren() {
    this.detachFromDom();
  }
  reset() {
  }
  get mountedBaseLayers() {
    return this._mounted;
  }
  set mountedBaseLayers(value) {
    this._mounted = value;
  }
  /** @todo what if the instance remounts back to another element? The layers should be mounted as well! */
  attachToDom(container) {
    if (this.root !== null || this.mountedBaseLayers === true) {
      console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`);
      this.detachFromDom();
      this.unmountListener();
    }
    this.root = container;
    this.root.style.transition = "border-color .1s ease-in-out";
    this.root.style.zIndex = "10";
    this.root.style.position = "relative";
    if (this.visibleLayer.exists)
      this.visibleLayer.mount();
    this.canvasLayer.mount();
    this.cursorLayer.mount();
    this.root.dataset.thermalFile = this.id;
    this.root.dataset.mounted = "true";
    this.mountListener();
    this.mountedBaseLayers = true;
  }
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
  /**
   * Load listener layer and activate all listeners.
   * Should be called as a last mount layer.
   * @todo refactor this with variants!
   */
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
  setHoverHandler(handler) {
    this._onHover = handler;
  }
  setHoverCursor(value) {
    if (this.root) {
      if (this.root.style.cursor !== value)
        this.root.style.cursor = value;
    }
  }
  setClickHandler(handler = void 0) {
    this._onClick = handler;
  }
  /**
   * Drawing
   */
  draw() {
    if (this.mountedBaseLayers === true)
      this.canvasLayer.draw();
  }
  /** Recieve a palette setting */
  recievePalette(palette) {
    console.log(palette);
    this.draw();
  }
  get isHover() {
    return this._isHover;
  }
  set isHover(value) {
    this._isHover = value;
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
  /**
   * Range
   */
  /** Recieve the range from the registry and redraw */
  recieveRange(value) {
    if (value !== void 0) {
      this.draw();
    }
  }
  /**
   * Opacity
   */
  /** Recieve the opacity from the registry and project it to the canvas layer */
  recieveOpacity(value) {
    if (this.visibleLayer && this.canvasLayer) {
      this.canvasLayer.opacity = value;
    }
  }
};

// src/parsers/thermalLoader.ts
var import_cross_fetch = __toESM(require("cross-fetch"));

// src/parsers/AbstractParser.ts
var AbstractParser = class {
  constructor(url, blob, visibleUrl) {
    this.url = url;
    this.visibleUrl = visibleUrl;
    this.isValidTimestamp = (value) => Number.isInteger(value);
    this.isValidWidth = (value) => Number.isInteger(value);
    this.isValidHeight = (value) => Number.isInteger(value);
    this.isValidPixels = (value) => {
      return value !== void 0 && value.length === this.width * this.height;
    };
    this.isValidMin = (value) => value !== void 0;
    this.isValidMax = (value) => value !== void 0;
    // Error logging
    /** Buffer of errors that occured during the parsing. */
    this.errors = [];
    this.url = url;
    this.blob = blob;
  }
  /** The only public endpoint. This method does all the business. */
  async parse() {
    await this.init();
    await this.parseFile();
    return this.getThermalFile();
  }
  // Shared parsing & validation
  /** Parsing of all common attributes @deprecated */
  async parseBaseAttributes() {
    this.parseWidth();
    this.parseHeight();
    this.parseTimestamp();
    await this.parsePixels();
    this.parseMin();
    this.parseMax();
  }
  /** Validation of all core attributes */
  isValidBase() {
    return this.errors.length === 0 && this.isValidTimestamp(this.timestamp) && this.isValidWidth(this.width) && this.isValidHeight(this.height) && this.isValidPixels(this.pixels) && this.isValidMin(this.min) && this.isValidMax(this.max);
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
    const value = await this.getPixels();
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
  /** Store an error. */
  logError(message) {
    console.error(message);
    this.errors.push(message);
  }
  /** Store an error during parsing. */
  logValidationError(property, value) {
    const msg = `Invalid ${property} of ${this.url}: ${value.toString()}`;
    this.logError(msg);
  }
  getErrors() {
    return this.errors;
  }
  // protected uint8array!: Uint8Array;
  // protected float32array!: Float32Array;
  async init() {
    const buffer = await this.blob.arrayBuffer();
    this.data = new DataView(buffer);
    return this;
  }
  async readString(startIndex, stringLength) {
    return await this.blob.slice(startIndex, stringLength).text();
  }
  read8bNumber(index) {
    return this.data.getUint8(index);
  }
  read16bNumber(index) {
    return this.data.getUint16(index, true);
  }
};

// src/parsers/lrcParser.ts
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
  }
  parseUnit() {
    const value = this.read8bNumber(16);
    if (!this.isValidUnit(value))
      this.logValidationError("unit", value);
    this._unit = value;
  }
  // Width
  getWidth() {
    return this.read16bNumber(17);
  }
  // Height
  getHeight() {
    return this.read16bNumber(19);
  }
  // Timestamp
  getTimestamp() {
    const bigIntTime = this.data.getBigInt64(25, true);
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
  /** @deprecated */
  toFloat32(bytes) {
    const value = bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3];
    return value / 4294967295;
  }
  async readTemperatureArray(index) {
    const subset = (await this.blob.arrayBuffer()).slice(index);
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
    return this.readTemperatureArray(82);
  }
  // Min
  getMin() {
    return this.data.getFloat32(33, true);
  }
  getMax() {
    return this.data.getFloat32(37, true);
  }
  isValid() {
    return this.errors.length === 0 && this.isValidSignature(this._signature) && this.isStreamCountValid(this._streamCount) && this.isDataTypeValid(this._fileDataType) && this.isValidVersion(this._version) && this.isValidUnit(this._unit) && this.isValidBase();
  }
  getThermalFile() {
    if (!this.isValid()) {
      console.error(this.getErrors());
      return null;
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
      this.visibleUrl
    );
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
    this.parser = this.assignParserInstance();
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
    this.parser = this.assignParserInstance();
    return await this.parser.parse();
  }
  /** 
   * Determine the file type and return the corresponding parser. 
   * @todo In the future, new parsers shall be added.
   */
  assignParserInstance() {
    return new LrcParser(this.thermalUrl, this.blob, this.visibleUrl);
  }
};

// src/file/ThermalFileSource.ts
var ThermalFileSource = class _ThermalFileSource extends EventTarget {
  constructor(url, signature, version, streamCount, fileDataType, unit, width, height, timestamp, pixels, min, max, visibleUrl) {
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
    this.visibleUrl = visibleUrl;
  }
  static async fromUrl(thermalUrl, visibleUrl) {
    const file = await ThermalLoader.fromUrl(thermalUrl, visibleUrl);
    if (!file)
      return null;
    return file;
  }
  serialize() {
    return JSON.stringify(this);
  }
  static fromStorage(stored) {
    const parsed = JSON.parse(stored);
    return new _ThermalFileSource(
      parsed.url,
      parsed.signature,
      parsed.version,
      parsed.streamCount,
      parsed.fileDataType,
      parsed.unit,
      parsed.width,
      parsed.height,
      parsed.timestamp,
      parsed.pixels,
      parsed.min,
      parsed.max,
      parsed.visibleUrl
    );
  }
  createInstance(group) {
    return new ThermalFileInstance(this, group);
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
  }
  recieveCursorPosition(position) {
    this.value = position;
  }
};

// src/properties/lists/InstancesState.ts
var InstancesState = class extends AbstractProperty {
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
    const instances = this.parent.instances.value;
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
var ThermalGroup = class {
  constructor(registry, id, name, description) {
    this.registry = registry;
    this.id = id;
    this.name = name;
    this.description = description;
    this.hash = Math.random();
    this.minmax = new MinmaxGroupProperty(this, void 0);
    this.instances = new InstancesState(this, []);
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

// src/properties/states/HistogramState.ts
var HistogramState = class extends AbstractProperty {
  constructor() {
    super(...arguments);
    this._resolution = 50;
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
    this._resolution = Math.round(Math.min(Math.max(value, 2), 200));
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
  refreshBufferFromCurrentPixels() {
    const buffer = /* @__PURE__ */ new Map();
    let bufferTotal = 0;
    if (this.parent.minmax !== void 0 && this.parent.groups.value.length !== 0) {
      const distance = this.parent.minmax.distanceInCelsius;
      if (distance !== void 0) {
        const step = distance / this._bufferResolution;
        const minmax = this.parent.minmax.value;
        let pixels = [];
        this.parent.forEveryInstance((instance) => {
          pixels = [...pixels, ...instance.pixels];
        });
        pixels.sort((a, b) => {
          return a - b;
        });
        let nextStep = minmax.min + step;
        while (nextStep !== false) {
          const nextIndex = pixels.findIndex((num) => num >= nextStep);
          const pixelCount = pixels.slice(0, nextIndex).length;
          buffer.set(nextStep - step / 2, pixelCount);
          bufferTotal += pixelCount;
          pixels = pixels.slice(nextIndex);
          const nextStepTemporary = nextStep + step;
          nextStep = nextStepTemporary <= minmax.max ? nextStepTemporary : false;
        }
      }
    }
    this.buffer = buffer;
    this.bufferPixelsCount = bufferTotal;
  }
  recalculateHistogram() {
    if (this.parent.minmax.value !== void 0 && this.parent.minmax.distanceInCelsius !== void 0) {
      let temperaturesFromBuffer = Array.from(this.buffer.keys());
      let countsFromBuffer = Array.from(this.buffer.values());
      const minmax = this.parent.minmax.value;
      const step = this.parent.minmax.distanceInCelsius / this.resolution;
      const bufferItems = [];
      let bufferMaxCount = 0;
      let pointer = minmax.min;
      while (pointer < minmax.max) {
        const currentStepMin = pointer;
        const currentStepMax = pointer + step;
        const nextIndex = temperaturesFromBuffer.findIndex((num) => num >= currentStepMax);
        const countsSubArray = countsFromBuffer.slice(0, nextIndex);
        const currentNumberOfPixels = countsSubArray.reduce((state, current) => {
          return state + current;
        }, 0);
        const currentPercentage = currentNumberOfPixels / this.bufferPixelsCount;
        bufferItems.push({
          from: currentStepMin,
          to: currentStepMax,
          percentage: currentPercentage,
          count: currentNumberOfPixels
        });
        if (bufferMaxCount < currentNumberOfPixels) {
          bufferMaxCount = currentNumberOfPixels;
        }
        temperaturesFromBuffer = temperaturesFromBuffer.slice(nextIndex);
        countsFromBuffer = countsFromBuffer.slice(nextIndex);
        pointer += step;
      }
      const result = bufferItems.map((item) => {
        return {
          ...item,
          height: item.count / bufferMaxCount * 100
        };
      });
      this.value = result;
    }
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

// src/registry/utilities/ThermalRequest.ts
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

// src/registry/utilities/ThermalRegistryLoader.ts
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
var ThermalRegistry = class {
  constructor(id, manager, options) {
    this.id = id;
    this.manager = manager;
    this.hash = Math.random();
    /** Takes care of the entire loading */
    this.loader = new ThermalRegistryLoader(this);
    /** Groups are stored in an observable property */
    this.groups = new GroupsState(this, []);
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
  /** Iterator methods */
  forEveryGroup(fn) {
    this.groups.value.forEach(fn);
  }
  forEveryInstance(fn) {
    this.forEveryGroup((group) => group.instances.forEveryInstance(fn));
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
  /** Actions to take after the registry is loaded */
  postLoadedProcessing() {
    this.forEveryGroup((group) => group.minmax.recalculateFromInstances());
    this.minmax.recalculateFromGroups();
    if (this.minmax.value)
      this.range.imposeRange({ from: this.minmax.value.min, to: this.minmax.value.max });
    this.histogram.refreshBufferFromCurrentPixels();
    this.histogram.recalculateWithCurrentSetting();
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
      registry.forEveryGroup((group) => group.instances.forEveryInstance((instance) => instance.recievePalette(value)));
    });
  }
  setPalette(key) {
    this.value = key;
  }
};

// src/manager/ThermalManager.ts
var ThermalManager = class extends EventTarget {
  constructor(options) {
    super();
    /* registries */
    this.registries = {};
    /** The palette is stored absolutely globally */
    /**
     * Palette
     */
    this.palette = new PaletteDrive(this, "jet");
    /** Sources cache */
    this._sourcesByUrl = {};
    this.isUrlRegistered = (url) => Object.keys(this.sourcesByUrl).includes(url);
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

// src/index.ts
var import_time = require("@labir/time");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GRAYSCALE,
  IRON,
  JET,
  ThermalFileInstance,
  ThermalFileSource,
  ThermalGroup,
  ThermalManager,
  ThermalPalettes,
  ThermalRegistry,
  TimeFormat,
  TimePeriod,
  TimeRound
});
