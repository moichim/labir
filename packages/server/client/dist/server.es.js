var g = Object.defineProperty;
var y = (r, e, t) => e in r ? g(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var i = (r, e, t) => y(r, typeof e != "symbol" ? e + "" : e, t);
class q {
  constructor(e) {
    i(this, "identity");
    i(this, "session");
    this.client = e;
  }
  isLoggedIn() {
    return this.identity !== void 0;
  }
  login(e) {
    this.identity = e;
  }
  setSession(e) {
    this.session = e;
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
class P {
  constructor(e) {
    i(this, "path");
    i(this, "method", "GET");
    i(this, "action");
    i(this, "query", /* @__PURE__ */ new Map());
    i(this, "body", {});
    i(this, "headers", {});
    i(this, "files", {});
    this.client = e;
  }
  setPath(e) {
    return e = e.replace(/^\/+|\/+$/g, ""), this.path = e, this;
  }
  setMethod(e) {
    return this.method = e, this;
  }
  setAction(e) {
    return this.action = e, this;
  }
  addQueryParameter(e, t) {
    return this.query.set(e, t), this;
  }
  addBodyParameter(e, t) {
    return this.body[e] = t, this;
  }
  addHeader(e, t) {
    return this.headers[e] = t, this;
  }
  addFile(e, t) {
    return this.files[e] = t, this;
  }
  createRequestInit() {
    const e = [
      "connect",
      "login",
      "currentusertree"
    ].includes(this.action || "");
    if (this.path === void 0 && !e)
      return !1;
    let t = this.client.getServerUrl();
    e || (t += this.path);
    const s = {};
    this.action !== void 0 && (s.action = this.action), this.query.size > 0 && this.query.forEach((m, p) => {
      s[p] = m;
    }), Object.keys(s).length > 0 && (t += "?", t += new URLSearchParams(s).toString());
    const n = new URL(t), a = { ...this.headers };
    this.client.auth.isLoggedIn() && (a.Authorization = this.client.auth.getAuthorisationHeader() || "");
    const h = this.client.auth.getSession();
    h && (a.Cookie = h);
    const o = {
      method: this.method,
      headers: a,
      credentials: "include"
    };
    return {
      url: n,
      options: o
    };
  }
  /**
   * Vytvoří Request s application/json body (bez souborů)
   */
  createRequestJson() {
    const e = this.createRequestInit();
    if (e !== !1) {
      const { url: t, options: s } = e;
      this.method === "POST" && Object.keys(this.body).length > 0 && (s.body = JSON.stringify(this.body));
      const n = {
        ...s,
        headers: {
          ...s.headers,
          "Content-Type": "application/json"
        }
      };
      return new Request(t, n);
    }
    return !1;
  }
  /**
   * Vytvoří Request s multipart/form-data (pro upload souborů)
   */
  createRequestFormData() {
    const e = this.createRequestInit();
    if (e === !1)
      return !1;
    const { url: t, options: s } = e, n = new FormData();
    for (const [h, o] of Object.entries(this.body))
      n.append(h, typeof o == "object" ? JSON.stringify(o) : String(o));
    for (const [h, o] of Object.entries(this.files))
      n.append(h, o, o.name);
    const a = {
      ...s,
      body: n
    };
    return a.headers && typeof a.headers == "object" && delete a.headers["Content-Type"], new Request(t, a);
  }
  createRequest() {
    return Object.keys(this.files).length > 0 ? this.createRequestFormData() : this.createRequestJson();
  }
  getAction() {
    return this.action;
  }
}
class d {
  constructor(e) {
    i(this, "request");
    this.client = e, this.request = this.client.createRequest();
  }
}
class w extends d {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("connect"), this;
  }
  async execute() {
    const e = await this.client.fetch(this.request);
    if (e.success) {
      const t = e;
      t.data.identity !== !1 && this.client.auth.login(t.data.identity);
    }
    return e;
  }
}
class v extends d {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("currentusertree"), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class u extends d {
  setPath(e) {
    return this.request.setPath(e), this;
  }
}
class T extends u {
  init() {
    return this.request.setMethod("GET"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class F extends u {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("file"), this;
  }
  setFileName(e) {
    return this.request.addQueryParameter("file", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class f extends u {
  constructor() {
    super(...arguments);
    i(this, "tags", []);
  }
  setFrom(t) {
    const s = t instanceof Date ? t.getTime() : t;
    return this.request.addQueryParameter("from", s.toString()), this;
  }
  setTo(t) {
    const s = t instanceof Date ? t.getTime() : t;
    return this.request.addQueryParameter("to", s.toString()), this;
  }
  setTags(t) {
    return this.tags = t, this.applyTags(), this;
  }
  addTag(t) {
    return this.tags.includes(t) || (this.tags.push(t), this.applyTags()), this;
  }
  removeTag(t) {
    const s = this.tags.length;
    return this.tags = this.tags.filter((n) => n !== t), this.tags.length !== s && this.applyTags(), this;
  }
  /**
   * Internal method used to propagate changed tags to the request.
   */
  applyTags() {
    return this.request.addQueryParameter("tags", this.tags.join(",")), this;
  }
}
class B extends f {
  init() {
    return this.request.setMethod("GET"), this.request.setAction("files"), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class A extends f {
  constructor() {
    super(...arguments);
    i(this, "folders", []);
    i(this, "by", "hour");
  }
  init() {
    return this.request.setMethod("GET"), this.request.setAction("grid"), this.request.addQueryParameter("by", this.by), this;
  }
  setBy(t) {
    return this.by = t, this.request.addQueryParameter("by", t), this;
  }
  setFolders(t) {
    return this.folders = t, this.applyFolders(), this;
  }
  addFolder(t) {
    return this.folders.includes(t) || (this.folders.push(t), this.applyFolders()), this;
  }
  removeFolder(t) {
    const s = this.folders.length;
    return this.folders = this.folders.filter((n) => n !== t), this.folders.length !== s && this.applyFolders(), this;
  }
  applyFolders() {
    return this.request.addQueryParameter("folders", this.folders.join(",")), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class x {
  constructor(e) {
    this.client = e;
  }
  /**
   * Connects to a server, eventually returning the existing identity of the currently logged-in user.
   * 
   * If you want to load existing user identity, you need to pass the PHPSESSID to the client before calling this method using `auth.setSession()`.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.auth.setSession("PHPSESSID=1234567890abcdef"); // Set the session ID
   * await client.connect(); // This method is accessible from the Client object itself
   * ```
   */
  connect() {
    return new w(this.client).init();
  }
  /**
   * Get information about a folder.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.info("path/to/folder");
   * // Configure request:
   * request.setPath("path/to/folder"); // already set by factory
   * const result = await request.execute();
   * ```
   * 
   * @param path Path of the folder.
   */
  info(e) {
    return new T(this.client).init().setPath(e);
  }
  /**
   * List of files in the given folder.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.files("path/to/folder");
   * request
   *  .setFrom(new Date("2023-01-01")) // Optional filter
   *  .setTo(new Date("2023-12-31")) // Optional filter
   *  .addTag("tag-slug"); // Optional filter
   * const result = await request.execute();
   * ```
   * 
   * @param path Path to the folder from which you want to get the files
   */
  files(e) {
    return new B(this.client).init().setPath(e);
  }
  /**
   * List of files in the given folder.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.files("path/to/folder");
   * // Configure request:
   * request.setFrom(new Date("2023-01-01")); // Optional filter
   * request.setTo(new Date("2023-12-31"));   // Optional filter
   * request.addTag("tag-slug");              // Optional filter
   * const result = await request.execute();
   * ```
   * 
   * @param path Path to the folder from which you want to get the files
   */
  grid(e) {
    return new A(this.client).init().setPath(e);
  }
  /**
   * Generate the grid from subfolders inside the given directory.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.grid("path/to/folder");
   * const result = await request.execute();
   * ```
   * 
   * @param path Path to the folder from which you want the grid to be generated
   * @param filename Name of the LRC file
   */
  file(e, t) {
    return new F(this.client).init().setPath(e).setFileName(t);
  }
  /**
   * Get list of folders accessible by the currently logged-in user.
   * 
   * ```typescript
   * const client = new Client("http://localhost:8080");
   * await client.connect();
   * const request = client.routes.get.currentUserTree();
   * const result = await request.execute();
   * ```
   */
  currentUserTree() {
    return new v(this.client).init();
  }
}
class b extends u {
  constructor() {
    super(...arguments);
    // Tag buffer for accumulating tags one by one
    i(this, "tagBuffer", {});
    i(this, "accessBuffer", {});
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("create"), this;
  }
  setName(t) {
    return this.request.addBodyParameter("name", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  setMeta(t) {
    return this.request.addBodyParameter("meta", t), this;
  }
  /**
   * Přidej jeden tag (klíčem je název, hodnotou objekt s name, description, color)
   */
  addTag(t, s, n) {
    return this.tagBuffer[t] = { name: t }, s !== void 0 && (this.tagBuffer[t].description = s), n !== void 0 && (this.tagBuffer[t].color = n), this;
  }
  /**
   * Nastaví access.show (viditelnost složky)
   */
  setShow(t) {
    return this.accessBuffer.show = t, this;
  }
  /**
   * Nastaví access.may_have_files (zda složka může obsahovat soubory)
   */
  setMayHaveFiles(t) {
    return this.accessBuffer.may_have_files = t, this;
  }
  async execute() {
    return Object.keys(this.tagBuffer).length > 0 && this.request.addBodyParameter("tags", this.tagBuffer), Object.keys(this.accessBuffer).length > 0 && this.request.addBodyParameter("access", this.accessBuffer), await this.client.fetch(this.request);
  }
}
class c extends u {
  setFile(e) {
    return this.request.addQueryParameter("file", e), this;
  }
}
class R extends c {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("fileaddcomment"), this;
  }
  /**
   * Nastaví text komentáře, který bude odeslán na server.
   *
   * @param message Text komentáře
   */
  setMessage(e) {
    return this.request.addBodyParameter("message", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class S extends c {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("fileclearcomments"), this;
  }
  /**
   * Executes the request to clear comments on a file.
   */
  execute() {
    return this.client.fetch(this.request);
  }
}
class C extends c {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("filedeletecomment"), this;
  }
  setCommentTimestamp(e) {
    return this.request.addBodyParameter("timestamp", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class E extends c {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("fileupdatecomment"), this;
  }
  setCommentTimestamp(e) {
    return this.request.addBodyParameter("timestamp", e), this;
  }
  /**
   * Nastaví text komentáře, který bude odeslán na server.
   *
   * @param message Text komentáře
   */
  setMessage(e) {
    return this.request.addBodyParameter("message", e), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class M extends d {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("login"), this;
  }
  setUser(e) {
    return this.request.addBodyParameter("user", e), this;
  }
  setPassword(e) {
    return this.request.addBodyParameter("password", e), this;
  }
  async execute() {
    const e = await this.client.fetch(this.request);
    if (e.success) {
      const t = e;
      this.client.auth.login(t.data.login);
    }
    return e;
  }
}
class O extends u {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("move"), this;
  }
  setTarget(e) {
    return this.request.addBodyParameter("target", e), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class _ extends c {
  constructor() {
    super(...arguments);
    i(this, "_clearTags", !1);
    i(this, "_clearAnalyses", !1);
    i(this, "_tagsAdd", []);
    i(this, "_tagsRemove", []);
    i(this, "_analysisAdd", []);
    i(this, "_analysisRemove", []);
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("updatefile"), this;
  }
  setLabel(t) {
    return this.request.addBodyParameter("label", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  addTag(t) {
    return this._tagsAdd.push(t), this;
  }
  removeTag(t) {
    return this._tagsRemove.push(t), this;
  }
  addAnalysis(t) {
    return this._analysisAdd.push(t), this;
  }
  removeAnalysis(t) {
    return this._analysisRemove.push(t), this;
  }
  clearTags() {
    return this._clearTags = !0, this;
  }
  clearAnalyses() {
    return this._clearAnalyses = !0, this;
  }
  async execute() {
    return this._clearTags === !0 ? this.request.addBodyParameter("clearTags", !0) : (this._tagsAdd.length > 0 && this.request.addBodyParameter("addTags", this._tagsAdd), this._tagsRemove.length > 0 && this.request.addBodyParameter("removeTags", this._tagsRemove)), this._clearAnalyses === !0 ? this.request.addBodyParameter("clearAnalyses", !0) : (this._analysisAdd.length > 0 && this.request.addBodyParameter("addAnalyses", this._analysisAdd), this._analysisRemove.length > 0 && this.request.addBodyParameter("removeAnalyses", this._analysisRemove)), await this.client.fetch(this.request);
  }
}
class U extends u {
  constructor() {
    super(...arguments);
    i(this, "tagBuffer", {});
  }
  init() {
    return this.request.setMethod("POST"), this.request.setAction("update"), this;
  }
  setName(t) {
    return this.request.addBodyParameter("name", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  addTag(t, s, n, a) {
    return this.tagBuffer[t] = { name: s }, n !== void 0 && (this.tagBuffer[t].description = n), a !== void 0 && (this.tagBuffer[t].color = a), this.request.addBodyParameter("addTags", this.tagBuffer), this;
  }
  removeTags(t) {
    return this.request.addBodyParameter("removeTags", t), this;
  }
  setMetadata(t) {
    this.request.addBodyParameter("meta", t);
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class j extends u {
  init() {
    return this.request.setMethod("POST"), this.request.setAction("uploadfile"), this;
  }
  setLrc(e) {
    return this.request.addFile("lrc", e), this;
  }
  setVisual(e) {
    return this.request.addFile("visual", e), this;
  }
  setPreview(e) {
    return this.request.addFile("preview", e), this;
  }
  /**
   * Nastaví label pro uploadovaný soubor
   */
  setLabel(e) {
    return this.request.addBodyParameter("label", e), this;
  }
  /**
   * Nastaví description pro uploadovaný soubor
   */
  setDescription(e) {
    return this.request.addBodyParameter("description", e), this;
  }
  /**
   * Nastaví tagy pro uploadovaný soubor
   */
  setTags(e) {
    return this.request.addBodyParameter("tags", e), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class G {
  constructor(e) {
    this.client = e;
  }
  login(e, t) {
    return new M(this.client).init().setUser(e).setPassword(t);
  }
  createFolder(e, t) {
    return new b(this.client).init().setName(t).setPath(e);
  }
  updateFolder(e) {
    return new U(this.client).init().setPath(e);
  }
  moveFolder(e, t) {
    return new O(this.client).init().setPath(e).setTarget(t);
  }
  uploadFile(e, t) {
    return new j(this.client).init().setPath(e).setLrc(t);
  }
  updateFile(e, t) {
    return new _(this.client).init().setPath(e).setFile(t);
  }
  fileAddComment(e, t, s) {
    return new R(this.client).init().setPath(e).setFile(t).setMessage(s);
  }
  fileClearComments(e, t) {
    return new S(this.client).init().setPath(e).setFile(t);
  }
  fileUpdateComment(e, t, s, n) {
    return new E(this.client).init().setPath(e).setFile(t).setCommentTimestamp(s).setMessage(n);
  }
  fileDeleteComment(e, t, s) {
    return new C(this.client).init().setPath(e).setFile(t).setCommentTimestamp(s);
  }
}
class D {
  constructor(e) {
    /** 
     * All the available GET routed of the API 
     */
    i(this, "get");
    /**
     * All the available POST routes of the API
     */
    i(this, "post");
    this.client = e, this.get = new x(this.client), this.post = new G(this.client);
  }
}
class k {
  constructor(e) {
    i(this, "observers", /* @__PURE__ */ new Set());
    i(this, "connected", !1);
    this.client = e;
  }
  observe(e) {
    return this.observers.has(e) || this.observers.add(e), this;
  }
  unobserve(e) {
    return this.observers.has(e) && this.observers.delete(e), this;
  }
  emit(e, t = !1, s) {
    this.onEmit(e, t, s);
  }
}
class l {
  constructor(e, t) {
    i(this, "pending");
    this.entity = e, this.name = t;
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
  enqueue(e) {
    this.pending = e;
  }
  /** Reset any mutations */
  reset() {
    this.pending = void 0;
  }
  /** Generate the report entry for mutations message */
  report(e = void 0) {
    return e !== void 0 ? [this.name, e] : !1;
  }
}
class L extends k {
  constructor(t, s) {
    super(t);
    i(this, "info");
    i(this, "update");
    this.path = s, this.update = {
      name: new l(this, "name"),
      description: new l(this, "description")
    };
  }
  forEveryUpdate(t) {
    Object.values(this.update).forEach(t);
  }
  resetUpdaates() {
    this.forEveryUpdate((t) => t.reset());
  }
  async persist() {
    const t = this.client.routes.post.updateFolder(this.path);
    this.update.name.isPending() && t.setName(this.update.name.getEnqueued()), this.update.description.isPending() && t.setDescription(this.update.description.getEnqueued());
    const s = await t.execute();
    if (s.success === !0) {
      this.info = s.data.result.info;
      const n = [];
      this.forEveryUpdate((h) => {
        if (this.info !== void 0 && h.isPending()) {
          const o = h.report(this.info[h.name]);
          o !== !1 && n.push(o), h.reset();
        }
      });
      const a = Object.fromEntries(n);
      return this.emit("updated", !0, a), this.info;
    }
  }
  current() {
    return this.info;
  }
  async connect() {
    const s = await this.client.routes.get.info(this.path).execute();
    return s.success === !0 ? (this.info = s.data.folder, this.connected = !0, this.emit("connected", !0), !0) : !1;
  }
  disconnect() {
    this.connected = !1, this.emit("disconnected", !1);
  }
  onEmit(t, s, n) {
    this.observers.forEach((a) => {
      const h = s ? this.current() : void 0;
      a.onFolderChanged(t, h, n);
    });
  }
}
class I {
  constructor(e) {
    i(this, "folders", /* @__PURE__ */ new Map());
    this.client = e;
  }
  /** 
   * Creates a connection to a folder
  */
  async connectToFolder(e, t) {
    if (this.folders.has(e)) {
      const a = this.folders.get(e);
      return a.observe(t), a;
    }
    const s = new L(this.client, e);
    if (s.observe(t), this.folders.set(e, s), !await s.connect())
      throw new Error(`Could not connect to folder at path: ${e}`);
    return s;
  }
}
class N {
  constructor(e) {
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
     * 
     * ```typescript
     * // Create a client
     * const client = new Client("http://localhost:8080");
     * 
     * // Connect it to the server
     * await client.connect();
     * 
     * // Create a request to list files inside a folder
     * const request = client.routes.get.files("path/to/folder");
     * 
     * request
     *  .setFrom( new Date("2023-01-01") ) // Set optional filter
     *  .setTo( new Date("2023-12-31") ) // Set optional filter
     *  .addTag( "tag-slug" ); // Set optional filter
     * 
     * // Execute the request
     * const result = await request.execute();
     * ```
     * 
     * All requests are created as instances of `Operation`, or one of its subclasses.
     * 
     * A request contains a hidden `RequestFactory` that is used to create the actual `Request` object. This object shall never be exposed nor manipulated publically.
     * Every individual `Operation` has its own methods for setting parameters, such as `setPath()`, `addTags()`, etc. 
     * 
     * These methods will store the data in the internal `RequestFactory` object. The `Operation` instance needs to be executed using its asynchronous `execute()` method, which will return a promise that resolves to an `ApiResponseType` object.
     * 
     * Note:
     * - upon creation of the `Client` instance, the route `connect` needs to be called
     * - after connection to the server, other requests are available
     * @package `@labir/server`
     */
    i(this, "routes");
    /**
     * Access server entities directly and manipulate them using a comfortable API.
     * 
     * All entities are observable by their consuming objects, so there should be only one instance of every entity by its given identification.
     */
    i(this, "entities", new I(this));
    /**
     * Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
     */
    i(this, "connected", !1);
    this.serverUrl = e.trim(), this.serverUrl.endsWith("/") || (this.serverUrl += "/"), this.auth = new q(this), this.routes = new D(this);
  }
  /** 
   * Tests the availability of the server, establishes the connection and stores the following data crucial for all subsequent requests:
   * - PHPSESSID is stored in `Auth.setSesson()` 
   * - if a logged-in user was found on the session, its credentials will be stored in `Auth.login()`
   */
  async connect() {
    if (this.connected)
      throw new Error("Client is already connected.");
    const t = await this.routes.get.connect().execute();
    return t.success === !0 && (this.connected = !0), t;
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
    return new P(this);
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
  processResponse(e) {
    const s = (e.headers.get("set-cookie") || "").match(/PHPSESSID=([^;]+)/);
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
  async fetch(e) {
    if (e.getAction() !== "connect" && this.connected === !1)
      throw new Error("Client is not connected to the server!");
    const t = e.createRequest();
    if (!t)
      throw new Error("Invalid request configuration");
    let s;
    try {
      s = await fetch(t);
    } catch {
      throw new Error("Server is not available or network error occurred.");
    }
    this.processResponse(s);
    const n = await s.json();
    if (n.raw = {
      request: t,
      response: s
    }, !s.ok)
      throw new Error("Request was not successfull at all!");
    return n;
  }
}
export {
  N as default
};
