Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });
let _labirthermal_core = require("@labirthermal/core");

//#region src/authentication/Auth.ts
var Auth = class {
	identity;
	session;
	onIdentity = new _labirthermal_core.CallbacksManager();
	constructor(client) {
		this.client = client;
	}
	isLoggedIn() {
		return this.identity !== void 0;
	}
	login(identity, userFolders) {
		this.identity = identity;
		this.onIdentity.call(this.identity, userFolders);
	}
	logout() {
		this.identity = void 0;
		this.onIdentity.call(void 0);
	}
	setSession(value) {
		this.session = value;
	}
	getSession() {
		return this.session;
	}
	getIdentity() {
		return this.identity;
	}
	getAuthorisationHeader() {
		if (this.identity) return `Basic ${this.toBase64(`${this.identity.user}:${this.identity.token}`)}`;
	}
	toBase64(str) {
		if (typeof Buffer !== "undefined") return Buffer.from(str).toString("base64");
		if (typeof btoa !== "undefined") return btoa(str);
		return this.manualBase64Encode(str);
	}
	manualBase64Encode(str) {
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		let result = "";
		for (let i = 0; i < str.length; i += 3) {
			const chunk = str.charCodeAt(i) << 16 | (i + 1 < str.length ? str.charCodeAt(i + 1) << 8 : 0) | (i + 2 < str.length ? str.charCodeAt(i + 2) : 0);
			result += chars[chunk >> 18 & 63] + chars[chunk >> 12 & 63] + chars[chunk >> 6 & 63] + chars[chunk & 63];
		}
		const padding = str.length % 3;
		if (padding > 0) result = result.slice(0, -padding) + "=".repeat(padding);
		return result;
	}
};

//#endregion
//#region src/entities/AbstractEntity.ts
var AbstractEntity = class {
	observers = /* @__PURE__ */ new Set();
	connected = false;
	constructor(client) {
		this.client = client;
	}
	observe(observer) {
		if (!this.observers.has(observer)) this.observers.add(observer);
		return this;
	}
	unobserve(observer) {
		if (this.observers.has(observer)) this.observers.delete(observer);
		return this;
	}
	emit(message, includeState = false, customData) {
		this.onEmit(message, includeState, customData);
	}
};

//#endregion
//#region src/entities/MutableProperty.ts
/** A property that may accept changes and generates its report when changed */
var MutableProperty = class {
	constructor(entity, name) {
		this.entity = entity;
		this.name = name;
	}
	pending;
	/** Is there a pending change in this property? */
	isPending() {
		return this.pending !== void 0;
	}
	/** Gets the value that shall be persisted. */
	getEnqueued() {
		return this.pending;
	}
	/** Enqueue a change of the new value */
	enqueue(newValue) {
		this.pending = newValue;
	}
	/** Reset any mutations */
	reset() {
		this.pending = void 0;
	}
	/** Generate the report entry for mutations message */
	report(updatedValue = void 0) {
		if (updatedValue !== void 0) return [this.name, updatedValue];
		return false;
	}
};

//#endregion
//#region src/entities/Folder.ts
var Folder = class extends AbstractEntity {
	info;
	update;
	constructor(client, path) {
		super(client);
		this.path = path;
		this.update = {
			name: new MutableProperty(this, "name"),
			description: new MutableProperty(this, "description")
		};
	}
	forEveryUpdate(fn) {
		Object.values(this.update).forEach(fn);
	}
	resetUpdaates() {
		this.forEveryUpdate((property) => property.reset());
	}
	async persist() {
		const request = this.client.routes.post.updateFolder(this.path);
		if (this.update.name.isPending()) request.setName(this.update.name.getEnqueued());
		if (this.update.description.isPending()) request.setDescription(this.update.description.getEnqueued());
		const result = await request.execute();
		if (result.success === true) {
			this.info = result.data.result.info;
			const mutations = [];
			this.forEveryUpdate((property) => {
				if (this.info !== void 0 && property.isPending()) {
					const report = property.report(this.info[property.name]);
					if (report !== false) mutations.push(report);
					property.reset();
				}
			});
			const report = Object.fromEntries(mutations);
			this.emit("updated", true, report);
			return this.info;
		}
	}
	current() {
		return this.info;
	}
	async connect() {
		const response = await this.client.routes.get.info(this.path).execute();
		if (response.success === true) {
			this.info = response.data.folder;
			this.connected = true;
			this.emit("connected", true);
			return true;
		}
		return false;
	}
	disconnect() {
		this.connected = false;
		this.emit("disconnected", false);
	}
	onEmit(message, includeState, customData) {
		this.observers.forEach((observer) => {
			const info = includeState ? this.current() : void 0;
			observer.onFolderChanged(message, info, customData);
		});
	}
};

//#endregion
//#region src/entities/Entities.ts
var Entities = class {
	folders = /* @__PURE__ */ new Map();
	constructor(client) {
		this.client = client;
	}
	/** 
	* Creates a connection to a folder
	*/
	async connectToFolder(path, observer) {
		if (this.folders.has(path)) {
			const entity = this.folders.get(path);
			entity.observe(observer);
			return entity;
		}
		const folder = new Folder(this.client, path);
		folder.observe(observer);
		this.folders.set(path, folder);
		if (!await folder.connect()) throw new Error(`Could not connect to folder at path: ${path}`);
		return folder;
	}
};

//#endregion
//#region src/request/RequestFactory.ts
/**
* An universal factory of requests to LabIR servers.
* 
* It is intended to be used in the `routes` factories, such as `GetRoutesFactory` or `PostRoutesFactory`. 
* 
* These classes take care of all the parameters settings and this RequestFactory shall never be exposed publically.
* 
* **Functionality**
* - accepts the query parameters, body and header contents
* - creates a `Request` object that is used internally by `Client.fetch()`
* - takes care of passing credentials and session ID to the request
* 
*/
var RequestFactory = class {
	path = void 0;
	method = "GET";
	action = void 0;
	query = /* @__PURE__ */ new Map();
	body = {};
	headers = {};
	files = {};
	constructor(client) {
		this.client = client;
	}
	setPath(value) {
		value = value.replace(/^\/+|\/+$/g, "");
		this.path = value;
		return this;
	}
	setMethod(value) {
		this.method = value;
		return this;
	}
	setAction(value) {
		this.action = value;
		return this;
	}
	addQueryParameter(key, value) {
		this.query.set(key, value);
		return this;
	}
	addBodyParameter(key, value) {
		this.body[key] = value;
		return this;
	}
	addHeader(key, value) {
		this.headers[key] = value;
		return this;
	}
	addFile(key, file) {
		this.files[key] = file;
		return this;
	}
	createRequestInit() {
		const isValidRequestToRoot = [
			"connect",
			"login",
			"logout",
			"currentusertree"
		].includes(this.action || "");
		if (this.path === void 0 && !isValidRequestToRoot) return false;
		let address = this.client.getServerUrl();
		if (!isValidRequestToRoot) address += this.path;
		const queryString = {};
		if (this.action !== void 0) queryString["action"] = this.action;
		if (this.query.size > 0) this.query.forEach((value, key) => {
			queryString[key] = value;
		});
		if (Object.keys(queryString).length > 0) {
			address += "?";
			address += new URLSearchParams(queryString).toString();
		}
		const url = new URL(address);
		const headers = { ...this.headers };
		if (this.client.auth.isLoggedIn()) headers["Authorization"] = this.client.auth.getAuthorisationHeader() || "";
		const session = this.client.auth.getSession();
		if (session) headers["Cookie"] = session;
		return {
			url,
			options: {
				method: this.method,
				headers,
				credentials: "include"
			}
		};
	}
	/**
	* Vytvoří Request s application/json body (bez souborů)
	*/
	createRequestJson() {
		const init = this.createRequestInit();
		if (init !== false) {
			const { url, options } = init;
			if (this.method === "POST" && Object.keys(this.body).length > 0) options.body = JSON.stringify(this.body);
			const finaleOptions = {
				...options,
				headers: {
					...options.headers,
					"Content-Type": "application/json"
				}
			};
			return new Request(url, finaleOptions);
		}
		return false;
	}
	/**
	* Vytvoří Request s multipart/form-data (pro upload souborů)
	*/
	createRequestFormData() {
		const init = this.createRequestInit();
		if (init === false) return false;
		const { url, options } = init;
		const formData = new FormData();
		for (const [key, value] of Object.entries(this.body)) formData.append(key, typeof value === "object" ? JSON.stringify(value) : String(value));
		for (const [key, file] of Object.entries(this.files)) formData.append(key, file, file.name);
		const finaleOptions = {
			...options,
			body: formData
		};
		if (finaleOptions.headers && typeof finaleOptions.headers === "object") delete finaleOptions.headers["Content-Type"];
		return new Request(url, finaleOptions);
	}
	createRequest() {
		if (Object.keys(this.files).length > 0) return this.createRequestFormData();
		else return this.createRequestJson();
	}
	getAction() {
		return this.action;
	}
};

//#endregion
//#region src/routes/Operation.ts
/** 
* A base class for all routes. It is intentionally concieved very universally, because it might happen that one operation would consist of several subsequent requests. 
* @package `@labirthermal/client`
* @author Jan Jáchim <jachim@ntc.zcu.cz>*/
var Operation = class {
	request;
	constructor(client) {
		this.client = client;
		this.request = this.client.createRequest();
	}
};

//#endregion
//#region src/routes/get/GetConnect.ts
/**
* Get route for connecting to a remote folder on a remote server.
* @package `@labirthermal/client`
*/
var GetConnect = class extends Operation {
	init() {
		this.request.setMethod("GET");
		this.request.setAction("connect");
		return this;
	}
	async execute() {
		const response = await this.client.fetch(this.request);
		if (response.success) {
			if (response.data.identity !== false) this.client.auth.login(response.data.identity, response.data.userFolders);
		}
		return response;
	}
};

//#endregion
//#region src/routes/get/GetCurrentUserTree.ts
/**
* Get the list of all folders accessible to the currently logged in user.
* @package `@labirthermal/client`
*/
var GetCurrentUserTree = class extends Operation {
	init() {
		this.request.setMethod("GET");
		this.request.setAction("currentusertree");
		return this;
	}
	execute() {
		return this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/OperationWithPath.ts
/** 
* A base operation that needs to have a path specified. 
* @package `@labirthermal/client`
*/
var OperationWithPath = class extends Operation {
	setPath(path) {
		this.request.setPath(path);
		return this;
	}
};

//#endregion
//#region src/routes/get/GetInfo.ts
/**
* Get route for retrieving folder information from the server.
* @package `@labirthermal/client`
*/
var GetInto = class extends OperationWithPath {
	init() {
		this.request.setMethod("GET");
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/get/GetFile.ts
/**
* Get route for retrieving a file's information from the server.
* @package `@labirthermal/client`
*/
var GetFile = class extends OperationWithPath {
	init() {
		this.request.setMethod("GET");
		this.request.setAction("file");
		return this;
	}
	setFileName(value) {
		this.request.addQueryParameter("file", value);
		return this;
	}
	execute() {
		return this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/OperationWithPathAndFilters.ts
/** 
* An operation containing filters based on time and tags. Needs to have path specified. 
* @package `@labirthermal/client`
*/
var OperationWithFilters = class extends OperationWithPath {
	tags = [];
	setFrom(value) {
		const timestamp = value instanceof Date ? value.getTime() : value;
		this.request.addQueryParameter("from", timestamp.toString());
		return this;
	}
	setTo(value) {
		const timestamp = value instanceof Date ? value.getTime() : value;
		this.request.addQueryParameter("to", timestamp.toString());
		return this;
	}
	setTags(value) {
		this.tags = value;
		this.applyTags();
		return this;
	}
	addTag(value) {
		if (!this.tags.includes(value)) {
			this.tags.push(value);
			this.applyTags();
		}
		return this;
	}
	removeTag(value) {
		const originalLength = this.tags.length;
		this.tags = this.tags.filter((tag) => tag !== value);
		if (this.tags.length !== originalLength) this.applyTags();
		return this;
	}
	/**
	* Internal method used to propagate changed tags to the request.
	*/
	applyTags() {
		this.request.addQueryParameter("tags", this.tags.join(","));
		return this;
	}
};

//#endregion
//#region src/routes/get/GetFiles.ts
/**
* Get route for retrieving files information from a folder on the server.
* @package `@labirthermal/client`
*/
var GetFiles = class extends OperationWithFilters {
	init() {
		this.request.setMethod("GET");
		this.request.setAction("files");
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/get/GetGrid.ts
let GridGrouping = /* @__PURE__ */ function(GridGrouping) {
	GridGrouping["HOUR"] = "hour";
	GridGrouping["DAY"] = "day";
	GridGrouping["WEEK"] = "week";
	GridGrouping["MONTH"] = "month";
	GridGrouping["YEAR"] = "year";
	return GridGrouping;
}({});
/**
* Get route for retrieving grid content from the server, grouped by time intervals.
* @package `@labirthermal/client`
*/
var GetGrid = class extends OperationWithFilters {
	folders = [];
	by = GridGrouping.HOUR;
	init() {
		this.request.setMethod("GET");
		this.request.setAction("grid");
		this.request.addQueryParameter("by", this.by);
		return this;
	}
	setBy(value) {
		this.by = value;
		this.request.addQueryParameter("by", value);
		return this;
	}
	setFolders(value) {
		this.folders = value;
		this.applyFolders();
		return this;
	}
	addFolder(value) {
		if (!this.folders.includes(value)) {
			this.folders.push(value);
			this.applyFolders();
		}
		return this;
	}
	removeFolder(value) {
		const originalLength = this.folders.length;
		this.folders = this.folders.filter((folder) => folder !== value);
		if (this.folders.length !== originalLength) this.applyFolders();
		return this;
	}
	applyFolders() {
		this.request.addQueryParameter("folders", this.folders.join(","));
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/factories/GetRoutesFactory.ts
/**
* Factory for creating GET routes
* 
* @package `@labirthermal/webcomponents`
*/
var GetRoutesFactory = class {
	constructor(client) {
		this.client = client;
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
		return new GetConnect(this.client).init();
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
	info(path) {
		return new GetInto(this.client).init().setPath(path);
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
	files(path) {
		return new GetFiles(this.client).init().setPath(path);
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
	grid(path) {
		return new GetGrid(this.client).init().setPath(path);
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
	file(path, filename) {
		return new GetFile(this.client).init().setPath(path).setFileName(filename);
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
		return new GetCurrentUserTree(this.client).init();
	}
};

//#endregion
//#region src/routes/post/CreateFolder.ts
/**
* Vytvoření nové složky (viz actionCreate v PHP)
* Parametry: name (povinné), description (volitelné), meta (volitelné), tags (volitelné), access (volitelné)
*
* @package `@labirthermal/client`
*/
var CreateFolder = class extends OperationWithPath {
	tagBuffer = {};
	accessBuffer = {};
	init() {
		this.request.setMethod("POST");
		this.request.setAction("create");
		return this;
	}
	setName(name) {
		this.request.addBodyParameter("name", name);
		return this;
	}
	setDescription(description) {
		this.request.addBodyParameter("description", description);
		return this;
	}
	setMeta(meta) {
		this.request.addBodyParameter("meta", meta);
		return this;
	}
	/**
	* Přidej jeden tag (klíčem je název, hodnotou objekt s name, description, color)
	*/
	addTag(name, description, color) {
		this.tagBuffer[name] = { name };
		if (description !== void 0) this.tagBuffer[name].description = description;
		if (color !== void 0) this.tagBuffer[name].color = color;
		return this;
	}
	/**
	* Nastaví access.show (viditelnost složky)
	*/
	setShow(show) {
		this.accessBuffer.show = show;
		return this;
	}
	/**
	* Nastaví access.may_have_files (zda složka může obsahovat soubory)
	*/
	setMayHaveFiles(mayHaveFiles) {
		this.accessBuffer.may_have_files = mayHaveFiles;
		return this;
	}
	async execute() {
		if (Object.keys(this.tagBuffer).length > 0) this.request.addBodyParameter("tags", this.tagBuffer);
		if (Object.keys(this.accessBuffer).length > 0) this.request.addBodyParameter("access", this.accessBuffer);
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/OperationWithFile.ts
/** 
* A base operation that needs to have a path specified.
* @package `@labirthermal/client`
*/
var OperationWithFile = class extends OperationWithPath {
	setFile(filename) {
		this.request.addQueryParameter("file", filename);
		return this;
	}
};

//#endregion
//#region src/routes/post/DeleteFile.ts
/**
* Post route for deleting a file on the server.
* @package `@labirthermal/client`
*/
var DeleteFile = class extends OperationWithFile {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("filedelete");
		return this;
	}
	setLrc(file) {
		this.request.addFile("lrc", file);
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/DeleteFolder.ts
/**
* Post route for deleting a folder on the server.
* @package `@labirthermal/client`
*/
var DeleteFolder = class extends OperationWithPath {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("delete");
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/FileAddComment.ts
/**
* Post route for adding a comment to a file on the server.
* @package `@labirthermal/client`
*/
var FileAddComment = class extends OperationWithFile {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("fileaddcomment");
		return this;
	}
	/**
	* Nastaví text komentáře, který bude odeslán na server.
	*
	* @param message Text komentáře
	*/
	setMessage(message) {
		this.request.addBodyParameter("message", message);
		return this;
	}
	execute() {
		return this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/FileClearComments.ts
/**
* Post route for clearing all comments on a file on the server.
* @package `@labirthermal/client`
*/
var FileClearComments = class extends OperationWithFile {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("fileclearcomments");
		return this;
	}
	/**
	* Executes the request to clear comments on a file.
	*/
	execute() {
		return this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/FileDeleteComment.ts
/**
* Post route for deleting a file's comment on the server.
* @package `@labirthermal/client`
*/
var FileDeleteComment = class extends OperationWithFile {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("filedeletecomment");
		return this;
	}
	setCommentTimestamp(timestamp) {
		this.request.addBodyParameter("timestamp", timestamp);
		return this;
	}
	execute() {
		return this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/FileUpdateComment.ts
/**
* Post route for updating a file's comment on the server.
* @package `@labirthermal/client`
*/
var FileUpdateComment = class extends OperationWithFile {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("fileupdatecomment");
		return this;
	}
	setCommentTimestamp(timestamp) {
		this.request.addBodyParameter("timestamp", timestamp);
		return this;
	}
	/**
	* Nastaví text komentáře, který bude odeslán na server.
	*
	* @param message Text komentáře
	*/
	setMessage(message) {
		this.request.addBodyParameter("message", message);
		return this;
	}
	execute() {
		return this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/Login.ts
/**
* Post route for logging in a user to the server.
* @package `@labirthermal/client`
*/
var Login = class extends Operation {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("login");
		return this;
	}
	setUser(user) {
		this.request.addBodyParameter("user", user);
		return this;
	}
	setPassword(password) {
		this.request.addBodyParameter("password", password);
		return this;
	}
	async execute() {
		const response = await this.client.fetch(this.request);
		if (response.success) this.client.auth.login(response.data.login, response.data.userFolders);
		return response;
	}
};

//#endregion
//#region src/routes/post/Logout.ts
/**
* Post route for logging out a user from the server.
* @package `@labirthermal/client`
*/
var Logout = class extends Operation {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("logout");
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/MoveFolder.ts
/**
* Post route for moving a folder within one server.
* @package `@labirthermal/client`
*/
var MoveFolder = class extends OperationWithPath {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("move");
		return this;
	}
	setTarget(target) {
		this.request.addBodyParameter("target", target);
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/UpdateFile.ts
/**
* Post route for updating metadata of a file on the server.
* @package `@labirthermal/client`
*/
var UpdateFile = class extends OperationWithFile {
	_clearTags = false;
	_clearAnalyses = false;
	_tagsAdd = [];
	_tagsRemove = [];
	_analysisAdd = [];
	_analysisRemove = [];
	init() {
		this.request.setMethod("POST");
		this.request.setAction("updatefile");
		return this;
	}
	setLabel(value) {
		this.request.addBodyParameter("label", value);
		return this;
	}
	setDescription(value) {
		this.request.addBodyParameter("description", value);
		return this;
	}
	addTag(tag) {
		this._tagsAdd.push(tag);
		return this;
	}
	removeTag(tag) {
		this._tagsRemove.push(tag);
		return this;
	}
	addAnalysis(analysis) {
		this._analysisAdd.push(analysis);
		return this;
	}
	removeAnalysis(analysis) {
		this._analysisRemove.push(analysis);
		return this;
	}
	clearTags() {
		this._clearTags = true;
		return this;
	}
	clearAnalyses() {
		this._clearAnalyses = true;
		return this;
	}
	async execute() {
		this.request.addBodyParameter("clearTags", this._clearTags);
		if (this._tagsAdd.length > 0) this.request.addBodyParameter("addTags", this._tagsAdd);
		if (this._tagsRemove.length > 0) this.request.addBodyParameter("removeTags", this._tagsRemove);
		this.request.addBodyParameter("clearAnalyses", this._clearAnalyses);
		if (this._analysisAdd.length > 0) this.request.addBodyParameter("addAnalyses", this._analysisAdd);
		if (this._analysisRemove.length > 0) this.request.addBodyParameter("removeAnalyses", this._analysisRemove);
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/UpdateFolder.ts
/**
* Post route for updating a folder on the server.
* @package `@labirthermal/client`
*/
var UpdateFolder = class extends OperationWithPath {
	tagBuffer = {};
	init() {
		this.request.setMethod("POST");
		this.request.setAction("update");
		return this;
	}
	setName(value) {
		this.request.addBodyParameter("name", value);
		return this;
	}
	setDescription(value) {
		this.request.addBodyParameter("description", value);
		return this;
	}
	setThumbnail(value) {
		this.request.addFile("thumbnail", value);
		return this;
	}
	addTag(key, name, description, color) {
		this.tagBuffer[key] = { name };
		if (description !== void 0) this.tagBuffer[key].description = description;
		if (color !== void 0) this.tagBuffer[key].color = color;
		this.request.addBodyParameter("addTags", this.tagBuffer);
		return this;
	}
	removeTags(tags) {
		this.request.addBodyParameter("removeTags", tags);
		return this;
	}
	setMayHaveFiles(value) {
		this.request.addBodyParameter("mayHaveFiles", value);
		return this;
	}
	setMetadata(value) {
		this.request.addBodyParameter("meta", value);
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/UploadFile.ts
/**
* Post route for uploading a file to a server folder.
* @package `@labirthermal/client`
*/
var UploadFile = class extends OperationWithPath {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("uploadfile");
		return this;
	}
	setLrc(file) {
		this.request.addFile("lrc", file);
		return this;
	}
	setVisual(file) {
		this.request.addFile("visual", file);
		return this;
	}
	setPreview(file) {
		this.request.addFile("preview", file);
		return this;
	}
	/**
	* Nastaví label pro uploadovaný soubor
	*/
	setLabel(label) {
		this.request.addBodyParameter("label", label);
		return this;
	}
	/**
	* Nastaví description pro uploadovaný soubor
	*/
	setDescription(description) {
		this.request.addBodyParameter("description", description);
		return this;
	}
	/**
	* Nastaví tagy pro uploadovaný soubor
	*/
	setTags(tags) {
		this.request.addBodyParameter("tags", tags);
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/post/MoveFile.ts
/**
* Post route for moving a file within one server.
* @package `@labirthermal/client`
*/
var MoveFile = class extends OperationWithFile {
	init() {
		this.request.setMethod("POST");
		this.request.setAction("movefile");
		return this;
	}
	setTarget(target) {
		this.request.addBodyParameter("target", target);
		return this;
	}
	async execute() {
		return await this.client.fetch(this.request);
	}
};

//#endregion
//#region src/routes/factories/PostRoutesFactory.ts
/**
* Factory for creating POST routes
* 
* @package `@labirthermal/webcomponents`
*/
var PostRoutesFactory = class {
	constructor(client) {
		this.client = client;
	}
	login(login, password) {
		return new Login(this.client).init().setUser(login).setPassword(password);
	}
	logout() {
		return new Logout(this.client).init();
	}
	createFolder(targetPath, newFolderName) {
		return new CreateFolder(this.client).init().setName(newFolderName).setPath(targetPath);
	}
	updateFolder(path) {
		return new UpdateFolder(this.client).init().setPath(path);
	}
	moveFolder(folderPath, target) {
		return new MoveFolder(this.client).init().setPath(folderPath).setTarget(target);
	}
	uploadFile(folderPath, file) {
		return new UploadFile(this.client).init().setPath(folderPath).setLrc(file);
	}
	updateFile(folderPath, filename) {
		return new UpdateFile(this.client).init().setPath(folderPath).setFile(filename);
	}
	fileAddComment(folderPath, filename, message) {
		return new FileAddComment(this.client).init().setPath(folderPath).setFile(filename).setMessage(message);
	}
	fileClearComments(folderPath, filename) {
		return new FileClearComments(this.client).init().setPath(folderPath).setFile(filename);
	}
	fileUpdateComment(folderPath, filename, timestamp, message) {
		return new FileUpdateComment(this.client).init().setPath(folderPath).setFile(filename).setCommentTimestamp(timestamp).setMessage(message);
	}
	fileDeleteComment(folderPath, filename, timestamp) {
		return new FileDeleteComment(this.client).init().setPath(folderPath).setFile(filename).setCommentTimestamp(timestamp);
	}
	deleteFolder(folderPath) {
		return new DeleteFolder(this.client).init().setPath(folderPath);
	}
	deleteFile(folderPath, fileName) {
		return new DeleteFile(this.client).setPath(folderPath).setFile(fileName).init();
	}
	moveFile(folderPath, fileName, target) {
		return new MoveFile(this.client).init().setPath(folderPath).setFile(fileName).setTarget(target);
	}
};

//#endregion
//#region src/routes/factories/Routes.ts
/** 
* Object containing instances of all available API routes. 
* @package `@labirthermal/webcomponents`
*/
var Routes = class {
	/** 
	* All the available GET routed of the API 
	*/
	get;
	/**
	* All the available POST routes of the API
	*/
	post;
	constructor(client) {
		this.client = client;
		this.get = new GetRoutesFactory(this.client);
		this.post = new PostRoutesFactory(this.client);
	}
};

//#endregion
//#region src/ApiClient.ts
/**
* The client for accessing a remote LabIR server.
* 
* - needs to call the asynchronouse method `connect()` method before any other request
* 
* - if `auth.setSession()` is called before connection, the session ID shall be passed to the connected server. In case there is a logged-in user in the given session its credentials will be sent back and the user will be logged in automatically right after the connection.
* 
* - otherwise, a standard login request needs to be performed via the `routes.post.login()`
* 
* @package `@labirthermal/client`
* 
*/
var ApiClient = class {
	/** 
	* The core server URL ending with a slash 
	*/
	serverUrl;
	_serverInfo;
	get serverInfo() {
		return this._serverInfo;
	}
	/**
	* The authentication service stores the session ID and also the identity of the currently logged in user.
	* - The authentication itself is provided by the operation `PostLogin` which is accessible through the `routes.post.login()` method.
	*/
	auth;
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
	*/
	routes;
	/**
	* Access server entities directly and manipulate them using a comfortable API.
	* 
	* All entities are observable by their consuming objects, so there should be only one instance of every entity by its given identification.
	*/
	entities = new Entities(this);
	/**
	* Needs to be set to `true` before any requests are made (with the exception of the `connect()` route).
	*/
	connected = false;
	onConnection = new _labirthermal_core.CallbacksManager();
	onResult = new _labirthermal_core.CallbacksManager();
	activeRequests = 0;
	onLoading = new _labirthermal_core.CallbacksManager();
	get loading() {
		return this.activeRequests > 0;
	}
	constructor(serverUrl, apiRoot = "/api/") {
		this.apiRoot = apiRoot;
		let composedUrl = serverUrl.trim();
		if (composedUrl.endsWith("/")) composedUrl = composedUrl.slice(0, -1);
		composedUrl += apiRoot.trim();
		this.serverUrl = composedUrl;
		if (!this.serverUrl.endsWith("/")) this.serverUrl += "/";
		this.auth = new Auth(this);
		this.routes = new Routes(this);
	}
	/** 
	* Tests the availability of the server, establishes the connection and stores the following data crucial for all subsequent requests:
	* - PHPSESSID is stored in `Auth.setSesson()` 
	* - if a logged-in user was found on the session, its credentials will be stored in `Auth.login()`
	*/
	async connect() {
		if (this.connected) throw new Error("Client is already connected.");
		const request = this.routes.get.connect();
		try {
			const response = await request.execute();
			if (response.success === true) {
				this.connected = true;
				this._serverInfo = response.colophon.server;
				this.onConnection.call(response.colophon.server);
			} else {
				this.onConnection.call(false);
				this.onLoading.call(false);
			}
			return response;
		} catch (error) {
			this.onConnection.call(false);
			this.onLoading.call(false);
			return {
				success: false,
				code: 404,
				message: "Server is not available or network error occurred.",
				data: void 0,
				raw: {
					request: {},
					response: {}
				},
				colophon: {
					time: Date.now(),
					server: {
						name: "Unknown",
						version: "unknown",
						url: "unknown"
					},
					action: "connect",
					path: "/"
				}
			};
		}
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
		return new RequestFactory(this);
	}
	/**
	* @returns The server URL with a trailing slash
	*/
	getServerUrl() {
		return this.serverUrl;
	}
	/**
	* @returns The API root path with slashes (e.g. '/api/')
	*/
	getApiRoot() {
		if (this.apiRoot.endsWith("/") && this.apiRoot.startsWith("/")) return this.apiRoot;
		else if (this.apiRoot.endsWith("/")) return "/" + this.apiRoot;
		else if (this.apiRoot.startsWith("/")) return this.apiRoot + "/";
		return "/" + this.apiRoot + "/";
	}
	getPublicUrl() {
		if (this.serverUrl.endsWith(this.apiRoot)) return this.serverUrl.slice(0, -this.apiRoot.length);
		return this.serverUrl;
	}
	/** 
	* Automatically process every incoming response. 
	* - store the session ID in Auth class
	*/
	processResponse(response) {
		const match = (response.headers.get("set-cookie") || "").match(/PHPSESSID=([^;]+)/);
		this.auth.setSession(match ? match[0] : void 0);
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
	async fetch(factory) {
		if (this.activeRequests === 0) this.onLoading.call(true);
		this.activeRequests++;
		if (factory.getAction() !== "connect" && this.connected === false) throw new Error("Client is not connected to the server!");
		const request = factory.createRequest();
		if (!request) throw new Error("Invalid request configuration");
		let response;
		try {
			response = await fetch(request);
		} catch (error) {
			throw new Error("Server is not available or network error occurred.");
		}
		this.processResponse(response);
		try {
			const json = await response.clone().json();
			json.raw = {
				request,
				response
			};
			if (!response.ok) throw new Error("Request was not successfull at all!");
			this.activeRequests--;
			if (this.activeRequests === 0) this.onLoading.call(false);
			this.onResult.call(json.colophon.time, json.success, json.code, json.message, request.method);
			return json;
		} catch (error) {
			const text = await response.clone().text();
			console.error("API Call ended with an error!", {
				request: request.url,
				JSerror: error,
				responseText: text
			});
			return { success: false };
		}
	}
};

//#endregion
//#region src/index.ts
var src_default = ApiClient;

//#endregion
exports.GridGrouping = GridGrouping;
exports.default = src_default;
//# sourceMappingURL=index.cjs.map