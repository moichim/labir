var l = Object.defineProperty;
var g = (i, e, t) => e in i ? l(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => g(i, typeof e != "symbol" ? e + "" : e, t);
class f {
  constructor(e) {
    r(this, "identity");
    r(this, "session");
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
class q {
  constructor(e) {
    r(this, "path");
    r(this, "method", "GET");
    r(this, "action");
    r(this, "query", /* @__PURE__ */ new Map());
    r(this, "body", {});
    r(this, "headers", {});
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
  createRequest() {
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
    this.action !== void 0 && (s.action = this.action), this.query.size > 0 && this.query.forEach((c, d) => {
      s[d] = c;
    }), Object.keys(s).length > 0 && (t += "?", t += new URLSearchParams(s).toString());
    const n = new URL(t), a = {
      ...this.headers,
      "Content-Type": "application/json"
    }, o = this.client.auth.getSession();
    o && (a.Cookie = o), this.client.auth.isLoggedIn() && (a.Authorization = this.client.auth.getAuthorisationHeader() || "");
    const u = {
      method: this.method,
      headers: a,
      credentials: "include"
      // Include credentials for cross-origin requests
    };
    return this.method === "POST" && Object.keys(this.body).length > 0 && (u.body = JSON.stringify(this.body)), new Request(
      n,
      u
    );
  }
  getAction() {
    return this.action;
  }
}
class h {
  constructor(e) {
    this.client = e;
  }
}
class p extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this.request.setAction("connect"), this;
  }
  async execute() {
    const t = await this.client.fetch(this.request);
    if (t.success) {
      const s = t;
      s.data.identity !== !1 && this.client.auth.login(s.data.identity);
    }
    return t;
  }
}
class y extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this.request.setAction("currentusertree"), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class m extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this;
  }
  setPath(t) {
    return this.request.setPath(t), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class w extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this.request.setAction("file"), this;
  }
  setPath(t) {
    return this.request.setPath(t), this;
  }
  setFileName(t) {
    return this.request.addQueryParameter("file", t), this;
  }
  execute() {
    return this.client.fetch(this.request);
  }
}
class P extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
    r(this, "tags", []);
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this.request.setAction("files"), this;
  }
  setPath(t) {
    return this.request.setPath(t), this;
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
  applyTags() {
    return this.request.addQueryParameter("tags", this.tags.join(",")), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class T extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
    r(this, "tags", []);
    r(this, "folders", []);
    r(this, "by", "hour");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this.request.setAction("grid"), this.request.addQueryParameter("by", this.by), this;
  }
  setPath(t) {
    return this.request.setPath(t), this;
  }
  setBy(t) {
    return this.by = t, this.request.addQueryParameter("by", t), this;
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
  applyTags() {
    return this.request.addQueryParameter("tags", this.tags.join(",")), this;
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
class R {
  constructor(e) {
    this.client = e;
  }
  connect() {
    return new p(this.client).init();
  }
  default() {
    return new m(this.client).init();
  }
  files() {
    return new P(this.client).init();
  }
  grid() {
    return new T(this.client).init();
  }
  file() {
    return new w(this.client).init();
  }
  currentUserTree() {
    return new y(this.client).init();
  }
}
class S extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("POST"), this.request.setAction("login"), this;
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
      const s = t;
      this.client.auth.login(s.data.login);
    }
    return t;
  }
}
class B extends h {
  constructor() {
    super(...arguments);
    r(this, "request");
    r(this, "tagBuffer", {});
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("POST"), this.request.setAction("update"), this;
  }
  setPath(t) {
    return this.request.setPath(t), this;
  }
  setName(t) {
    return this.request.addBodyParameter("name", t), this;
  }
  setDescription(t) {
    return this.request.addBodyParameter("description", t), this;
  }
  addTags(t) {
    return this.tagBuffer = { ...this.tagBuffer, ...t }, this.request.addBodyParameter("addTags", this.tagBuffer), this;
  }
  addTag(t, s, n, a) {
    return this.tagBuffer[t] = { name: s }, n !== void 0 && (this.tagBuffer[t].description = n), a !== void 0 && (this.tagBuffer[t].color = a), this.request.addBodyParameter("addTags", this.tagBuffer), this;
  }
  removeTags(t) {
    return this.request.addBodyParameter("removeTags", t), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class x {
  constructor(e) {
    this.client = e;
  }
  login() {
    return new S(this.client).init();
  }
  updateFolder() {
    return new B(this.client).init();
  }
}
class F {
  constructor(e) {
    /** 
     * All the available GET routed of the API 
     */
    r(this, "get");
    /**
     * All the available POST routes of the API
     */
    r(this, "post");
    this.client = e, this.get = new R(this.client), this.post = new x(this.client);
  }
}
class A {
  constructor(e) {
    /** 
     * The core server URL ending with a slash */
    r(this, "serverUrl");
    /**
     * The authentication service stores the session ID and also the identity of the currently logged in user.
     * - The authentication itself is provided by the operation `PostLogin` which is accessible through the `routes.post.login()` method.
     */
    r(this, "auth");
    /**
     * The factories for creating requests to the API.
     */
    r(this, "routes");
    /**
     * Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
     */
    r(this, "connected", !1);
    this.serverUrl = e.trim(), this.serverUrl.endsWith("/") || (this.serverUrl += "/"), this.auth = new f(this), this.routes = new F(this);
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
    return new q(this);
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
  A as default
};
