var g = Object.defineProperty;
var y = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => y(r, typeof t != "symbol" ? t + "" : t, e);
class q {
  constructor(t) {
    i(this, "identity");
    i(this, "session");
    this.client = t;
  }
  isLoggedIn() {
    return this.identity !== void 0;
  }
  login(t) {
    this.identity = t;
  }
  setSession(t) {
    this.session = t;
  }
  getSession() {
    return this.session;
  }
  getIdentity() {
    return this.identity;
  }
  getAuthorisationHeader() {
    if (this.identity)
      return `Basic ${Buffer.from(`${this.identity.user}:${this.identity.token}`).toString("base64")}`;
  }
}
class m {
  constructor(t) {
    i(this, "path");
    i(this, "method", "GET");
    i(this, "action");
    i(this, "query", /* @__PURE__ */ new Map());
    i(this, "body", {});
    i(this, "headers", {});
    i(this, "files", {});
    this.client = t;
  }
  setPath(t) {
    return t = t.replace(/^\/+|\/+$/g, ""), this.path = t, this;
  }
  setMethod(t) {
    return this.method = t, this;
  }
  setAction(t) {
    return this.action = t, this;
  }
  addQueryParameter(t, e) {
    return this.query.set(t, e), this;
  }
  addBodyParameter(t, e) {
    return this.body[t] = e, this;
  }
  addHeader(t, e) {
    return this.headers[t] = e, this;
  }
  addFile(t, e) {
    return this.files[t] = e, this;
  }
  createRequestInit() {
    const t = [
      "connect",
      "login",
      "currentusertree"
    ].includes(this.action || "");
    if (this.path === void 0 && !t)
      return !1;
    let e = this.client.getServerUrl();
    t || (e += this.path);
    const s = {};
    this.action !== void 0 && (s.action = this.action), this.query.size > 0 && this.query.forEach((f, p) => {
      s[p] = f;
    }), Object.keys(s).length > 0 && (e += "?", e += new URLSearchParams(s).toString());
    const n = new URL(e), o = { ...this.headers };
    this.client.auth.isLoggedIn() && (o.Authorization = this.client.auth.getAuthorisationHeader() || "");
    const a = this.client.auth.getSession();
    a && (o.Cookie = a);
    const h = {
      method: this.method,
      headers: o,
      credentials: "include"
    };
    return {
      url: n,
      options: h
    };
  }
  /**
   * Vytvoří Request s application/json body (bez souborů)
   */
  createRequestJson() {
    const t = this.createRequestInit();
    if (t !== !1) {
      const { url: e, options: s } = t;
      this.method === "POST" && Object.keys(this.body).length > 0 && (s.body = JSON.stringify(this.body));
      const n = {
        ...s,
        headers: {
          ...s.headers,
          "Content-Type": "application/json"
        }
      };
      return new Request(e, n);
    }
    return !1;
  }
  /**
   * Vytvoří Request s multipart/form-data (pro upload souborů)
   */
  createRequestFormData() {
    const t = this.createRequestInit();
    if (t === !1)
      return !1;
    const { url: e, options: s } = t, n = new FormData();
    for (const [a, h] of Object.entries(this.body))
      n.append(a, typeof h == "object" ? JSON.stringify(h) : String(h));
    for (const [a, h] of Object.entries(this.files))
      n.append(a, h, h.name);
    const o = {
      ...s,
      body: n
    };
    return o.headers && typeof o.headers == "object" && delete o.headers["Content-Type"], new Request(e, o);
  }
  createRequest() {
    return Object.keys(this.files).length > 0 ? this.createRequestFormData() : this.createRequestJson();
  }
  getAction() {
    return this.action;
  }
}
class u {
  constructor(t) {
    i(this, "request");
    this.client = t, this.request = this.client.createRequest();
  }
}
class w extends u {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("connect"), this;
  }
  async execute() {
    const t = await this.client.fetch(this.request);
    if (t.success) {
      const e = t;
      e.data.identity !== !1 && this.client.auth.login(e.data.identity);
    }
    return t;
  }
}
class P extends u {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("currentusertree"), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class c extends u {
  setPath(t) {
    return this.request.setPath(t), this;
  }
}
class v extends c {
  init() {
    return this.request.setMethod("GET"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class T extends c {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("file"), this;
  }
  setFileName(t) {
    return this.request.addQueryParameter("file", t), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class l extends c {
  constructor() {
    super(...arguments);
    i(this, "tags", []);
  }
  setFrom(e) {
    const s = e instanceof Date ? e.getTime() : e;
    return this.request.addQueryParameter("from", s.toString()), this;
  }
  setTo(e) {
    const s = e instanceof Date ? e.getTime() : e;
    return this.request.addQueryParameter("to", s.toString()), this;
  }
  setTags(e) {
    return this.tags = e, this.applyTags(), this;
  }
  addTag(e) {
    return this.tags.includes(e) || (this.tags.push(e), this.applyTags()), this;
  }
  removeTag(e) {
    const s = this.tags.length;
    return this.tags = this.tags.filter((n) => n !== e), this.tags.length !== s && this.applyTags(), this;
  }
  /**
   * Internal method used to propagate changed tags to the request.
   */
  applyTags() {
    return this.request.addQueryParameter("tags", this.tags.join(",")), this;
  }
}
class b extends l {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("files"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class B extends l {
  constructor() {
    super(...arguments);
    i(this, "folders", []);
    i(this, "by", "hour");
  }
  init() {
    return this.request.setMethod("GET"), this.request.setAction("grid"), this.request.addQueryParameter("by", this.by), this;
  }
  setBy(e) {
    return this.by = e, this.request.addQueryParameter("by", e), this;
  }
  setFolders(e) {
    return this.folders = e, this.applyFolders(), this;
  }
  addFolder(e) {
    return this.folders.includes(e) || (this.folders.push(e), this.applyFolders()), this;
  }
  removeFolder(e) {
    const s = this.folders.length;
    return this.folders = this.folders.filter((n) => n !== e), this.folders.length !== s && this.applyFolders(), this;
  }
  applyFolders() {
    return this.request.addQueryParameter("folders", this.folders.join(",")), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class F {
  constructor(t) {
    this.client = t;
  }
  connect() {
    return new w(this.client).init();
  }
  default(t) {
    return new v(this.client).init().setPath(t);
  }
  files(t) {
    return new b(this.client).init().setPath(t);
  }
  grid(t) {
    return new B(this.client).init().setPath(t);
  }
  file(t, e) {
    return new T(this.client).init().setPath(t).setFileName(e);
  }
  currentUserTree() {
    return new P(this.client).init();
  }
}
class x extends c {
  constructor() {
    super(...arguments);
    // Tag buffer for accumulating tags one by one
    i(this, "tagBuffer", {});
    i(this, "accessBuffer", {});
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("create"), this;
  }
  setName(e) {
    return this.request.addBodyParameter("name", e), this;
  }
  setDescription(e) {
    return this.request.addBodyParameter("description", e), this;
  }
  setMeta(e) {
    return this.request.addBodyParameter("meta", e), this;
  }
  /**
   * Přidej jeden tag (klíčem je název, hodnotou objekt s name, description, color)
   */
  addTag(e, s, n) {
    return this.tagBuffer[e] = { name: e }, s !== void 0 && (this.tagBuffer[e].description = s), n !== void 0 && (this.tagBuffer[e].color = n), this;
  }
  /**
   * Nastaví access.show (viditelnost složky)
   */
  setShow(e) {
    return this.accessBuffer.show = e, this;
  }
  /**
   * Nastaví access.may_have_files (zda složka může obsahovat soubory)
   */
  setMayHaveFiles(e) {
    return this.accessBuffer.may_have_files = e, this;
  }
  async execute() {
    return Object.keys(this.tagBuffer).length > 0 && this.request.addBodyParameter("tags", this.tagBuffer), Object.keys(this.accessBuffer).length > 0 && this.request.addBodyParameter("access", this.accessBuffer), await this.client.fetch(this.request);
  }
}
class E extends u {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("login"), this;
  }
  setUser(t) {
    return this.request.addBodyParameter("user", t), this;
  }
  setPassword(t) {
    return this.request.addBodyParameter("password", t), this;
  }
  async execute() {
    const t = await this.client.fetch(this.request);
    if (t.success) {
      const e = t;
      this.client.auth.login(e.data.login);
    }
    return t;
  }
}
class S extends c {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("move"), this;
  }
  setTarget(t) {
    return this.request.addBodyParameter("target", t), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class R extends c {
  constructor() {
    super(...arguments);
    i(this, "tagBuffer", {});
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("update"), this;
  }
  setName(e) {
    return this.request.addBodyParameter("name", e), this;
  }
  setDescription(e) {
    return this.request.addBodyParameter("description", e), this;
  }
  addTag(e, s, n, o) {
    return this.tagBuffer[e] = { name: s }, n !== void 0 && (this.tagBuffer[e].description = n), o !== void 0 && (this.tagBuffer[e].color = o), this.request.addBodyParameter("addTags", this.tagBuffer), this;
  }
  removeTags(e) {
    return this.request.addBodyParameter("removeTags", e), this;
  }
  setMetadata(e) {
    this.request.addBodyParameter("meta", e);
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class O extends c {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("uploadfile"), this;
  }
  setLrc(t) {
    return this.request.addFile("lrc", t), this;
  }
  setVisual(t) {
    return this.request.addFile("visual", t), this;
  }
  setPreview(t) {
    return this.request.addFile("preview", t), this;
  }
  /**
   * Nastaví label pro uploadovaný soubor
   */
  setLabel(t) {
    return this.request.addBodyParameter("label", t), this;
  }
  /**
   * Nastaví description pro uploadovaný soubor
   */
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  /**
   * Nastaví tagy pro uploadovaný soubor
   */
  setTags(t) {
    return this.request.addBodyParameter("tags", t), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class M {
  constructor(t) {
    this.client = t;
  }
  login(t, e) {
    return new E(this.client).init().setUser(t).setPassword(e);
  }
  createFolder(t, e) {
    return new x(this.client).init().setName(e).setPath(t);
  }
  updateFolder(t) {
    return new R(this.client).init().setPath(t);
  }
  moveFolder(t, e) {
    return new S(this.client).init().setPath(t).setTarget(e);
  }
  uploadFile(t, e) {
    return new O(this.client).init().setPath(t).setLrc(e);
  }
}
class U {
  constructor(t) {
    /** 
     * All the available GET routed of the API 
     */
    i(this, "get");
    /**
     * All the available POST routes of the API
     */
    i(this, "post");
    this.client = t, this.get = new F(this.client), this.post = new M(this.client);
  }
}
class A {
  constructor(t) {
    i(this, "observers", /* @__PURE__ */ new Set());
    i(this, "connected", !1);
    this.client = t;
  }
  observe(t) {
    return this.observers.has(t) || this.observers.add(t), this;
  }
  unobserve(t) {
    return this.observers.has(t) && this.observers.delete(t), this;
  }
  emit(t, e = !1, s) {
    this.onEmit(t, e, s);
  }
}
class d {
  constructor(t, e) {
    i(this, "pending");
    this.entity = t, this.name = e;
  }
  /** Is there a pending change in this property? */
  isPending() {
    return this.pending !== void 0;
  }
  /** Gets the value that shall be persisted. */
  getEnqueued() {
    return this.pending;
  }
  /** Enqueue a change of the new value */
  enqueue(t) {
    this.pending = t;
  }
  /** Reset any mutations */
  reset() {
    this.pending = void 0;
  }
  /** Generate the report entry for mutations message */
  report(t = void 0) {
    return t !== void 0 ? [this.name, t] : !1;
  }
}
class j extends A {
  constructor(e, s) {
    super(e);
    i(this, "info");
    i(this, "update");
    this.path = s, this.update = {
      name: new d(this, "name"),
      description: new d(this, "description")
    };
  }
  forEveryUpdate(e) {
    Object.values(this.update).forEach(e);
  }
  resetUpdaates() {
    this.forEveryUpdate((e) => e.reset());
  }
  async persist() {
    const e = this.client.routes.post.updateFolder(this.path);
    this.update.name.isPending() && e.setName(this.update.name.getEnqueued()), this.update.description.isPending() && e.setDescription(this.update.description.getEnqueued());
    const s = await e.execute();
    if (s.success === !0) {
      this.info = s.data.result.info;
      const n = [];
      this.forEveryUpdate((a) => {
        if (this.info !== void 0 && a.isPending()) {
          const h = a.report(this.info[a.name]);
          h !== !1 && n.push(h), a.reset();
        }
      });
      const o = Object.fromEntries(n);
      return this.emit("updated", !0, o), this.info;
    }
  }
  current() {
    return this.info;
  }
  async connect() {
    const s = await this.client.routes.get.default(this.path).execute();
    return s.success === !0 ? (this.info = s.data.folder, this.connected = !0, this.emit("connected", !0), !0) : !1;
  }
  disconnect() {
    this.connected = !1, this.emit("disconnected", !1);
  }
  onEmit(e, s, n) {
    this.observers.forEach((o) => {
      const a = s ? this.current() : void 0;
      o.onFolderChanged(e, a, n);
    });
  }
}
class G {
  constructor(t) {
    i(this, "folders", /* @__PURE__ */ new Map());
    this.client = t;
  }
  /** 
   * Creates a connection to a folder
  */
  async connectToFolder(t, e) {
    if (this.folders.has(t)) {
      const o = this.folders.get(t);
      return o.observe(e), o;
    }
    const s = new j(this.client, t);
    if (s.observe(e), this.folders.set(t, s), !await s.connect())
      throw new Error(`Could not connect to folder at path: ${t}`);
    return s;
  }
}
class k {
  constructor(t) {
    /** 
     * The core server URL ending with a slash */
    i(this, "serverUrl");
    /**
     * The authentication service stores the session ID and also the identity of the currently logged in user.
     * - The authentication itself is provided by the operation `PostLogin` which is accessible through the `routes.post.login()` method.
     */
    i(this, "auth");
    /**
     * The factories for creating requests to the API.
     */
    i(this, "routes");
    /**
     * Access server entities directly and manipulate them using a comfortable API.
     * 
     * All entities are observable by their consuming objects, so there should be only one instance of every entity by its given identification.
     */
    i(this, "entities", new G(this));
    /**
     * Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
     */
    i(this, "connected", !1);
    this.serverUrl = t.trim(), this.serverUrl.endsWith("/") || (this.serverUrl += "/"), this.auth = new q(this), this.routes = new U(this);
  }
  /** 
   * Tests the availability of the server, establishes the connection and stores the following data crucial for all subsequent requests:
   * - PHPSESSID is stored in `Auth.setSesson()` 
   * - if a logged-in user was found on the session, its credentials will be stored in `Auth.login()`
   */
  async connect() {
    if (this.connected)
      throw new Error("Client is already connected.");
    const e = await this.routes.get.connect().execute();
    return e.success === !0 && (this.connected = !0), e;
  }
  /** 
   * Was this `Client` already connected using `Client.connect()`? 
   */
  isConnected() {
    return this.connected;
  }
  /**
   * Creates a new RequestFactory instance
   * - do not use this method directly, use the `routes` property instead
   */
  createRequest() {
    return new m(this);
  }
  /**
   * @returns The server URL with a trailing slash
   */
  getServerUrl() {
    return this.serverUrl;
  }
  /** 
   * Automatically process every incoming response. 
   * - store the session ID in Auth class
   */
  processResponse(t) {
    const s = (t.headers.get("set-cookie") || "").match(/PHPSESSID=([^;]+)/);
    this.auth.setSession(s ? s[0] : void 0);
  }
  /** 
   * Processes a request factory created using `routes` 
   * 
   * All request factories need to be executed this way because there are necessary checks & processes upon every request:
   * - request is refused until the client is connected
   * - handling of unavailable server errors
   * - storage of the PHPSESSID in the `Auth` class
   * 
   * @todo implement emission of events using the `EventEmitter` class
   * @param factory The request factory to execute
   */
  async fetch(t) {
    if (t.getAction() !== "connect" && this.connected === !1)
      throw new Error("Client is not connected to the server!");
    const e = t.createRequest();
    if (!e)
      throw new Error("Invalid request configuration");
    let s;
    try {
      s = await fetch(e);
    } catch {
      throw new Error("Server is not available or network error occurred.");
    }
    this.processResponse(s);
    const n = await s.json();
    if (n.raw = {
      request: e,
      response: s
    }, !s.ok)
      throw new Error("Request was not successfull at all!");
    return n;
  }
}
export {
  k as default
};
