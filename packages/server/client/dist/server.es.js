var l = Object.defineProperty;
var q = (r, t, e) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var i = (r, t, e) => q(r, typeof t != "symbol" ? t + "" : t, e);
class f {
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
class y {
  constructor(t) {
    i(this, "path");
    i(this, "method", "GET");
    i(this, "action");
    i(this, "query", /* @__PURE__ */ new Map());
    i(this, "body", {});
    i(this, "headers", {});
    this.client = t;
  }
  setPath(t) {
    return this.path = t, this;
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
  createRequest() {
    const t = ["connect", "login"].includes(this.action || "");
    if (this.path === void 0 && !t)
      return !1;
    let e = this.client.getServerUrl();
    t || (e += this.path);
    const s = {};
    this.action !== void 0 && (s.action = this.action), this.query.size > 0 && this.query.forEach((u, d) => {
      s[d] = u;
    }), Object.keys(s).length > 0 && (e += "?", e += new URLSearchParams(s).toString());
    const n = new URL(e), o = {
      ...this.headers,
      "Content-Type": "application/json"
    }, h = this.client.auth.getSession();
    h && (o.Cookie = h), this.client.auth.isLoggedIn() && (o.Authorization = this.client.auth.getAuthorisationHeader() || "");
    const a = {
      method: this.method,
      headers: o,
      credentials: "include"
      // Include credentials for cross-origin requests
    };
    return this.method === "POST" && Object.keys(this.body).length > 0 && (a.body = JSON.stringify(this.body)), new Request(
      n,
      a
    );
  }
  getAction() {
    return this.action;
  }
}
class c {
  constructor(t) {
    this.client = t;
  }
}
class w extends c {
  constructor() {
    super(...arguments);
    i(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this.request.setAction("connect"), this;
  }
  async execute() {
    const e = await this.client.fetch(this.request);
    if (e.success) {
      const s = e;
      s.data.identity !== !1 && this.client.auth.login(s.data.identity);
    }
    return e;
  }
}
class g extends c {
  constructor() {
    super(...arguments);
    i(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("GET"), this;
  }
  setPath(e) {
    return this.request.setPath(e), this;
  }
  async execute() {
    return await this.client.fetch(this.request);
  }
}
class p extends c {
  constructor() {
    super(...arguments);
    i(this, "request");
  }
  init() {
    return this.request = this.client.createRequest(), this.request.setMethod("POST"), this.request.setAction("login"), this;
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
      const s = e;
      this.client.auth.login(s.data.login);
    }
    return e;
  }
}
class v {
  constructor(t) {
    this.client = t;
  }
  GetDefault() {
    return new g(this.client).init();
  }
  GetConnect() {
    return new w(this.client).init();
  }
  PostLogin() {
    return new p(this.client).init();
  }
}
class P {
  constructor(t) {
    /** 
     * The core server URL ending with a slash */
    i(this, "serverUrl");
    i(this, "auth");
    i(this, "routes");
    i(this, "connected", !1);
    this.serverUrl = t.trim(), this.serverUrl.endsWith("/") || (this.serverUrl += "/"), this.auth = new f(this), this.routes = new v(this);
  }
  /** 
   * Testuje připojení k serveru 
   */
  async connect() {
    if (this.connected)
      throw new Error("Client is already connected.");
    const e = await this.routes.GetConnect().execute();
    return e.success === !0 && (this.connected = !0), e;
  }
  isConnected() {
    return this.connected;
  }
  /**
   * Creates a new RequestFactory instance
   */
  createRequest() {
    return new y(this);
  }
  /**
   * 
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
    if (n.request = e, n.response = s, !s.ok)
      throw new Error("Request was not successfull at all!");
    return n.success, n;
  }
}
export {
  P as default
};
