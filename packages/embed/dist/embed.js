function ia(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const n=Object.getOwnPropertyDescriptor(i,s);n&&Object.defineProperty(t,s,n.get?n:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const sa="@labir/embed",Bn="1.2.17",na="Embedded display of thermograms",oa="dist/embed.js",aa="module",Nn={type:"git",url:"https://github.com/moichim/labir"},la={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Hn="Jan Jáchim <jachim5@gmail.com>",ca="ISC",ua={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/emotion":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11"},ha={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Ps={name:sa,version:Bn,description:na,main:oa,type:aa,repository:Nn,scripts:la,author:Hn,license:ca,dependencies:ua,devDependencies:ha};var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function da(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var fs={exports:{}};(function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ds<"u"&&ds,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(o){var l=typeof n<"u"&&n||typeof self<"u"&&self||typeof l<"u"&&l,h={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function d(f){return f&&DataView.prototype.isPrototypeOf(f)}if(h.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=ArrayBuffer.isView||function(f){return f&&g.indexOf(Object.prototype.toString.call(f))>-1};function _(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function k(f){return typeof f!="string"&&(f=String(f)),f}function P(f){var v={next:function(){var j=f.shift();return{done:j===void 0,value:j}}};return h.iterable&&(v[Symbol.iterator]=function(){return v}),v}function A(f){this.map={},f instanceof A?f.forEach(function(v,j){this.append(j,v)},this):Array.isArray(f)?f.forEach(function(v){this.append(v[0],v[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(v){this.append(v,f[v])},this)}A.prototype.append=function(f,v){f=_(f),v=k(v);var j=this.map[f];this.map[f]=j?j+", "+v:v},A.prototype.delete=function(f){delete this.map[_(f)]},A.prototype.get=function(f){return f=_(f),this.has(f)?this.map[f]:null},A.prototype.has=function(f){return this.map.hasOwnProperty(_(f))},A.prototype.set=function(f,v){this.map[_(f)]=k(v)},A.prototype.forEach=function(f,v){for(var j in this.map)this.map.hasOwnProperty(j)&&f.call(v,this.map[j],j,this)},A.prototype.keys=function(){var f=[];return this.forEach(function(v,j){f.push(j)}),P(f)},A.prototype.values=function(){var f=[];return this.forEach(function(v){f.push(v)}),P(f)},A.prototype.entries=function(){var f=[];return this.forEach(function(v,j){f.push([j,v])}),P(f)},h.iterable&&(A.prototype[Symbol.iterator]=A.prototype.entries);function F(f){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}function de(f){return new Promise(function(v,j){f.onload=function(){v(f.result)},f.onerror=function(){j(f.error)}})}function Q(f){var v=new FileReader,j=de(v);return v.readAsArrayBuffer(f),j}function se(f){var v=new FileReader,j=de(v);return v.readAsText(f),j}function ye(f){for(var v=new Uint8Array(f),j=new Array(v.length),ne=0;ne<v.length;ne++)j[ne]=String.fromCharCode(v[ne]);return j.join("")}function be(f){if(f.slice)return f.slice(0);var v=new Uint8Array(f.byteLength);return v.set(new Uint8Array(f)),v.buffer}function je(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:h.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:h.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:h.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():h.arrayBuffer&&h.blob&&d(f)?(this._bodyArrayBuffer=be(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):h.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||m(f))?this._bodyArrayBuffer=be(f):this._bodyText=f=Object.prototype.toString.call(f):this._bodyText="",this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):h.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},h.blob&&(this.blob=function(){var f=F(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=F(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(Q)}),this.text=function(){var f=F(this);if(f)return f;if(this._bodyBlob)return se(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ye(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},h.formData&&(this.formData=function(){return this.text().then(Oe)}),this.json=function(){return this.text().then(JSON.parse)},this}var U=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function we(f){var v=f.toUpperCase();return U.indexOf(v)>-1?v:f}function De(f,v){if(!(this instanceof De))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v=v||{};var j=v.body;if(f instanceof De){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,v.headers||(this.headers=new A(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!j&&f._bodyInit!=null&&(j=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=v.credentials||this.credentials||"same-origin",(v.headers||!this.headers)&&(this.headers=new A(v.headers)),this.method=we(v.method||this.method||"GET"),this.mode=v.mode||this.mode||null,this.signal=v.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&j)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(j),(this.method==="GET"||this.method==="HEAD")&&(v.cache==="no-store"||v.cache==="no-cache")){var ne=/([?&])_=[^&]*/;if(ne.test(this.url))this.url=this.url.replace(ne,"$1_="+new Date().getTime());else{var xe=/\?/;this.url+=(xe.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}De.prototype.clone=function(){return new De(this,{body:this._bodyInit})};function Oe(f){var v=new FormData;return f.trim().split("&").forEach(function(j){if(j){var ne=j.split("="),xe=ne.shift().replace(/\+/g," "),oe=ne.join("=").replace(/\+/g," ");v.append(decodeURIComponent(xe),decodeURIComponent(oe))}}),v}function Ce(f){var v=new A,j=f.replace(/\r?\n[\t ]+/g," ");return j.split("\r").map(function(ne){return ne.indexOf(`
`)===0?ne.substr(1,ne.length):ne}).forEach(function(ne){var xe=ne.split(":"),oe=xe.shift().trim();if(oe){var _t=xe.join(":").trim();v.append(oe,_t)}}),v}je.call(De.prototype);function ce(f,v){if(!(this instanceof ce))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v||(v={}),this.type="default",this.status=v.status===void 0?200:v.status,this.ok=this.status>=200&&this.status<300,this.statusText=v.statusText===void 0?"":""+v.statusText,this.headers=new A(v.headers),this.url=v.url||"",this._initBody(f)}je.call(ce.prototype),ce.prototype.clone=function(){return new ce(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new A(this.headers),url:this.url})},ce.error=function(){var f=new ce(null,{status:0,statusText:""});return f.type="error",f};var Pe=[301,302,303,307,308];ce.redirect=function(f,v){if(Pe.indexOf(v)===-1)throw new RangeError("Invalid status code");return new ce(null,{status:v,headers:{location:f}})},o.DOMException=l.DOMException;try{new o.DOMException}catch{o.DOMException=function(v,j){this.message=v,this.name=j;var ne=Error(v);this.stack=ne.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function ue(f,v){return new Promise(function(j,ne){var xe=new De(f,v);if(xe.signal&&xe.signal.aborted)return ne(new o.DOMException("Aborted","AbortError"));var oe=new XMLHttpRequest;function _t(){oe.abort()}oe.onload=function(){var Ye={status:oe.status,statusText:oe.statusText,headers:Ce(oe.getAllResponseHeaders()||"")};Ye.url="responseURL"in oe?oe.responseURL:Ye.headers.get("X-Request-URL");var kt="response"in oe?oe.response:oe.responseText;setTimeout(function(){j(new ce(kt,Ye))},0)},oe.onerror=function(){setTimeout(function(){ne(new TypeError("Network request failed"))},0)},oe.ontimeout=function(){setTimeout(function(){ne(new TypeError("Network request failed"))},0)},oe.onabort=function(){setTimeout(function(){ne(new o.DOMException("Aborted","AbortError"))},0)};function Gt(Ye){try{return Ye===""&&l.location.href?l.location.href:Ye}catch{return Ye}}oe.open(xe.method,Gt(xe.url),!0),xe.credentials==="include"?oe.withCredentials=!0:xe.credentials==="omit"&&(oe.withCredentials=!1),"responseType"in oe&&(h.blob?oe.responseType="blob":h.arrayBuffer&&xe.headers.get("Content-Type")&&xe.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(oe.responseType="arraybuffer")),v&&typeof v.headers=="object"&&!(v.headers instanceof A)?Object.getOwnPropertyNames(v.headers).forEach(function(Ye){oe.setRequestHeader(Ye,k(v.headers[Ye]))}):xe.headers.forEach(function(Ye,kt){oe.setRequestHeader(kt,Ye)}),xe.signal&&(xe.signal.addEventListener("abort",_t),oe.onreadystatechange=function(){oe.readyState===4&&xe.signal.removeEventListener("abort",_t)}),oe.send(typeof xe._bodyInit>"u"?null:xe._bodyInit)})}return ue.polyfill=!0,l.fetch||(l.fetch=ue,l.Headers=A,l.Request=De,l.Response=ce),o.Headers=A,o.Request=De,o.Response=ce,o.fetch=ue,o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(fs,fs.exports);var fa=fs.exports;const pa=Wn(fa);var ps={exports:{}};const ma={},ga=Object.freeze(Object.defineProperty({__proto__:null,default:ma},Symbol.toStringTag,{value:"Module"})),Kt=da(ga);/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 9.1.3
 * @date    2024-06-28
 *
 * @license
 * Copyright (C) 2014-2022 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */(function(t,e){(function(r,i){i(e)})(ds,function(r){var i={},s={exports:{}};(function(x){var E=function(H){return typeof H<"u"&&H.versions!=null&&H.versions.node!=null&&H+""=="[object process]"};x.exports.isNode=E,x.exports.platform=typeof process<"u"&&E(process)?"node":"browser";var C=x.exports.platform==="node"&&Kt;x.exports.isMainThread=x.exports.platform==="node"?(!C||C.isMainThread)&&!process.connected:typeof Window<"u",x.exports.cpus=x.exports.platform==="browser"?self.navigator.hardwareConcurrency:Kt.cpus().length})(s);var n=s.exports,o={},l;function h(){if(l)return o;l=1;function x(H,fe){var Y=this;if(!(this instanceof x))throw new SyntaxError("Constructor must be called with the new operator");if(typeof H!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var _e=[],ae=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var L=function(G,ee){_e.push(G),ae.push(ee)};this.then=function($,G){return new x(function(ee,Be){var qe=$?E($,ee,Be):ee,pt=G?E(G,ee,Be):Be;L(qe,pt)},Y)};var le=function(G){return Y.resolved=!0,Y.rejected=!1,Y.pending=!1,_e.forEach(function(ee){ee(G)}),L=function(Be,qe){Be(G)},le=w=function(){},Y},w=function(G){return Y.resolved=!1,Y.rejected=!0,Y.pending=!1,ae.forEach(function(ee){ee(G)}),L=function(Be,qe){qe(G)},le=w=function(){},Y};this.cancel=function(){return fe?fe.cancel():w(new C),Y},this.timeout=function($){if(fe)fe.timeout($);else{var G=setTimeout(function(){w(new T("Promise timed out after "+$+" ms"))},$);Y.always(function(){clearTimeout(G)})}return Y},H(function($){le($)},function($){w($)})}function E(H,fe,Y){return function(_e){try{var ae=H(_e);ae&&typeof ae.then=="function"&&typeof ae.catch=="function"?ae.then(fe,Y):fe(ae)}catch(L){Y(L)}}}x.prototype.catch=function(H){return this.then(null,H)},x.prototype.always=function(H){return this.then(H,H)},x.all=function(H){return new x(function(fe,Y){var _e=H.length,ae=[];_e?H.forEach(function(L,le){L.then(function(w){ae[le]=w,_e--,_e==0&&fe(ae)},function(w){_e=0,Y(w)})}):fe(ae)})},x.defer=function(){var H={};return H.promise=new x(function(fe,Y){H.resolve=fe,H.reject=Y}),H};function C(H){this.message=H||"promise cancelled",this.stack=new Error().stack}C.prototype=new Error,C.prototype.constructor=Error,C.prototype.name="CancellationError",x.CancellationError=C;function T(H){this.message=H||"timeout exceeded",this.stack=new Error().stack}return T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="TimeoutError",x.TimeoutError=T,o.Promise=x,o}function d(x,E){(E==null||E>x.length)&&(E=x.length);for(var C=0,T=Array(E);C<E;C++)T[C]=x[C];return T}function g(x,E){var C=typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"];if(!C){if(Array.isArray(x)||(C=de(x))||E){C&&(x=C);var T=0,H=function(){};return{s:H,n:function(){return T>=x.length?{done:!0}:{done:!1,value:x[T++]}},e:function(ae){throw ae},f:H}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fe,Y=!0,_e=!1;return{s:function(){C=C.call(x)},n:function(){var ae=C.next();return Y=ae.done,ae},e:function(ae){_e=!0,fe=ae},f:function(){try{Y||C.return==null||C.return()}finally{if(_e)throw fe}}}}function m(x,E,C){return(E=A(E))in x?Object.defineProperty(x,E,{value:C,enumerable:!0,configurable:!0,writable:!0}):x[E]=C,x}function _(x,E){var C=Object.keys(x);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(x);E&&(T=T.filter(function(H){return Object.getOwnPropertyDescriptor(x,H).enumerable})),C.push.apply(C,T)}return C}function k(x){for(var E=1;E<arguments.length;E++){var C=arguments[E]!=null?arguments[E]:{};E%2?_(Object(C),!0).forEach(function(T){m(x,T,C[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(C)):_(Object(C)).forEach(function(T){Object.defineProperty(x,T,Object.getOwnPropertyDescriptor(C,T))})}return x}function P(x,E){if(typeof x!="object"||!x)return x;var C=x[Symbol.toPrimitive];if(C!==void 0){var T=C.call(x,E||"default");if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(x)}function A(x){var E=P(x,"string");return typeof E=="symbol"?E:E+""}function F(x){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},F(x)}function de(x,E){if(x){if(typeof x=="string")return d(x,E);var C={}.toString.call(x).slice(8,-1);return C==="Object"&&x.constructor&&(C=x.constructor.name),C==="Map"||C==="Set"?Array.from(x):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?d(x,E):void 0}}var Q={exports:{}},se={},ye;function be(){return ye||(ye=1,se.validateOptions=function(E,C,T){if(E){var H=E?Object.keys(E):[],fe=H.find(function(_e){return!C.includes(_e)});if(fe)throw new Error('Object "'+T+'" contains an unknown option "'+fe+'"');var Y=C.find(function(_e){return Object.prototype[_e]&&!H.includes(_e)});if(Y)throw new Error('Object "'+T+'" contains an inherited option "'+Y+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return E}},se.workerOptsNames=["credentials","name","type"],se.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],se.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),se}var je,U;function we(){return U||(U=1,je=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),je}var De;function Oe(){if(De)return Q.exports;De=1;var x=h(),E=x.Promise,C=n,T=be(),H=T.validateOptions,fe=T.forkOptsNames,Y=T.workerThreadOptsNames,_e=T.workerOptsNames,ae="__workerpool-terminate__";function L(){var N=w();if(!N)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return N}function le(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":F(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function w(){try{return Kt}catch(N){if(F(N)==="object"&&N!==null&&N.code==="MODULE_NOT_FOUND")return null;throw N}}function $(){if(C.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var N=new Blob([we()],{type:"text/javascript"});return window.URL.createObjectURL(N)}else return __dirname+"/worker.js"}function G(N,X){if(X.workerType==="web")return le(),ee(N,X.workerOpts,Worker);if(X.workerType==="thread")return O=L(),Be(N,O,X);if(X.workerType==="process"||!X.workerType)return qe(N,pt(X),Kt);if(C.platform==="browser")return le(),ee(N,X.workerOpts,Worker);var O=w();return O?Be(N,O,X):qe(N,pt(X),Kt)}function ee(N,X,O){H(X,_e,"workerOpts");var q=new O(N,X);return q.isBrowserWorker=!0,q.on=function(pe,he){this.addEventListener(pe,function(Ee){he(Ee.data)})},q.send=function(pe,he){this.postMessage(pe,he)},q}function Be(N,X,O){var q,pe;H(O==null?void 0:O.workerThreadOpts,Y,"workerThreadOpts");var he=new X.Worker(N,k({stdout:(q=O==null?void 0:O.emitStdStreams)!==null&&q!==void 0?q:!1,stderr:(pe=O==null?void 0:O.emitStdStreams)!==null&&pe!==void 0?pe:!1},O==null?void 0:O.workerThreadOpts));return he.isWorkerThread=!0,he.send=function(Ee,te){this.postMessage(Ee,te)},he.kill=function(){return this.terminate(),!0},he.disconnect=function(){this.terminate()},O!=null&&O.emitStdStreams&&(he.stdout.on("data",function(Ee){return he.emit("stdout",Ee)}),he.stderr.on("data",function(Ee){return he.emit("stderr",Ee)})),he}function qe(N,X,O){H(X.forkOpts,fe,"forkOpts");var q=O.fork(N,X.forkArgs,X.forkOpts),pe=q.send;return q.send=function(he){return pe.call(q,he)},X.emitStdStreams&&(q.stdout.on("data",function(he){return q.emit("stdout",he)}),q.stderr.on("data",function(he){return q.emit("stderr",he)})),q.isChildProcess=!0,q}function pt(N){N=N||{};var X=process.execArgv.join(" "),O=X.indexOf("--inspect")!==-1,q=X.indexOf("--debug-brk")!==-1,pe=[];return O&&(pe.push("--inspect="+N.debugPort),q&&pe.push("--debug-brk")),process.execArgv.forEach(function(he){he.indexOf("--max-old-space-size")>-1&&pe.push(he)}),Object.assign({},N,{forkArgs:N.forkArgs,forkOpts:Object.assign({},N.forkOpts,{execArgv:(N.forkOpts&&N.forkOpts.execArgv||[]).concat(pe),stdio:N.emitStdStreams?"pipe":void 0})})}function rt(N){for(var X=new Error(""),O=Object.keys(N),q=0;q<O.length;q++)X[O[q]]=N[O[q]];return X}function nt(N,X){if(Object.keys(N.processing).length===1){var O=Object.values(N.processing)[0];O.options&&typeof O.options.on=="function"&&O.options.on(X)}}function Tt(N,X){var O=this,q=X||{};this.script=N||$(),this.worker=G(this.script,q),this.debugPort=q.debugPort,this.forkOpts=q.forkOpts,this.forkArgs=q.forkArgs,this.workerOpts=q.workerOpts,this.workerThreadOpts=q.workerThreadOpts,this.workerTerminateTimeout=q.workerTerminateTimeout,N||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(te){nt(O,{stdout:te.toString()})}),this.worker.on("stderr",function(te){nt(O,{stderr:te.toString()})}),this.worker.on("message",function(te){if(!O.terminated)if(typeof te=="string"&&te==="ready")O.worker.ready=!0,he();else{var Ke=te.id,Ne=O.processing[Ke];Ne!==void 0&&(te.isEvent?Ne.options&&typeof Ne.options.on=="function"&&Ne.options.on(te.payload):(delete O.processing[Ke],O.terminating===!0&&O.terminate(),te.error?Ne.resolver.reject(rt(te.error)):Ne.resolver.resolve(te.result)))}});function pe(te){O.terminated=!0;for(var Ke in O.processing)O.processing[Ke]!==void 0&&O.processing[Ke].resolver.reject(te);O.processing=Object.create(null)}function he(){var te=g(O.requestQueue.splice(0)),Ke;try{for(te.s();!(Ke=te.n()).done;){var Ne=Ke.value;O.worker.send(Ne.message,Ne.transfer)}}catch(Wr){te.e(Wr)}finally{te.f()}}var Ee=this.worker;this.worker.on("error",pe),this.worker.on("exit",function(te,Ke){var Ne=`Workerpool Worker terminated Unexpectedly
`;Ne+="    exitCode: `"+te+"`\n",Ne+="    signalCode: `"+Ke+"`\n",Ne+="    workerpool.script: `"+O.script+"`\n",Ne+="    spawnArgs: `"+Ee.spawnargs+"`\n",Ne+="    spawnfile: `"+Ee.spawnfile+"`\n",Ne+="    stdout: `"+Ee.stdout+"`\n",Ne+="    stderr: `"+Ee.stderr+"`\n",pe(new Error(Ne))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Tt.prototype.methods=function(){return this.exec("methods")},Tt.prototype.exec=function(N,X,O,q){O||(O=E.defer());var pe=++this.lastId;this.processing[pe]={id:pe,resolver:O,options:q};var he={message:{id:pe,method:N,params:X},transfer:q&&q.transfer};this.terminated?O.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(he.message,he.transfer):this.requestQueue.push(he);var Ee=this;return O.promise.catch(function(te){if(te instanceof E.CancellationError||te instanceof E.TimeoutError)return delete Ee.processing[pe],Ee.terminateAndNotify(!0).then(function(){throw te},function(Ke){throw Ke});throw te})},Tt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Tt.prototype.terminate=function(N,X){var O=this;if(N){for(var q in this.processing)this.processing[q]!==void 0&&this.processing[q].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof X=="function"&&(this.terminationHandler=X),this.busy())this.terminating=!0;else{var pe=function(te){if(O.terminated=!0,O.cleaning=!1,O.worker!=null&&O.worker.removeAllListeners&&O.worker.removeAllListeners("message"),O.worker=null,O.terminating=!1,O.terminationHandler)O.terminationHandler(te,O);else if(te)throw te};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){pe(new Error("worker already killed!"));return}var he=setTimeout(function(){O.worker&&O.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(he),O.worker&&(O.worker.killed=!0),pe()}),this.worker.ready?this.worker.send(ae):this.requestQueue.push({message:ae}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");pe()}},Tt.prototype.terminateAndNotify=function(N,X){var O=E.defer();return X&&O.promise.timeout(X),this.terminate(N,function(q,pe){q?O.reject(q):O.resolve(pe)}),O.promise},Q.exports=Tt,Q.exports._tryRequireWorkerThreads=w,Q.exports._setupProcessWorker=qe,Q.exports._setupBrowserWorker=ee,Q.exports._setupWorkerThreadWorker=Be,Q.exports.ensureWorkerThreads=L,Q.exports}var Ce,ce;function Pe(){if(ce)return Ce;ce=1;var x=65535;Ce=E;function E(){this.ports=Object.create(null),this.length=0}return E.prototype.nextAvailableStartingAt=function(C){for(;this.ports[C]===!0;)C++;if(C>=x)throw new Error("WorkerPool debug port limit reached: "+C+">= "+x);return this.ports[C]=!0,this.length++,C},E.prototype.releasePort=function(C){delete this.ports[C],this.length--},Ce}var ue,f;function v(){if(f)return ue;f=1;var x=h(),E=x.Promise,C=Oe(),T=n,H=Pe(),fe=new H;function Y(w,$){typeof w=="string"?this.script=w||null:(this.script=null,$=w),this.workers=[],this.tasks=[],$=$||{},this.forkArgs=Object.freeze($.forkArgs||[]),this.forkOpts=Object.freeze($.forkOpts||{}),this.workerOpts=Object.freeze($.workerOpts||{}),this.workerThreadOpts=Object.freeze($.workerThreadOpts||{}),this.debugPortStart=$.debugPortStart||43210,this.nodeWorker=$.nodeWorker,this.workerType=$.workerType||$.nodeWorker||"auto",this.maxQueueSize=$.maxQueueSize||1/0,this.workerTerminateTimeout=$.workerTerminateTimeout||1e3,this.onCreateWorker=$.onCreateWorker||function(){return null},this.onTerminateWorker=$.onTerminateWorker||function(){return null},this.emitStdStreams=$.emitStdStreams||!1,$&&"maxWorkers"in $?(_e($.maxWorkers),this.maxWorkers=$.maxWorkers):this.maxWorkers=Math.max((T.cpus||4)-1,1),$&&"minWorkers"in $&&($.minWorkers==="max"?this.minWorkers=this.maxWorkers:(ae($.minWorkers),this.minWorkers=$.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&C.ensureWorkerThreads()}Y.prototype.exec=function(w,$,G){if($&&!Array.isArray($))throw new TypeError('Array expected as argument "params"');if(typeof w=="string"){var ee=E.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Be=this.tasks,qe={method:w,params:$,resolver:ee,timeout:null,options:G};Be.push(qe);var pt=ee.promise.timeout;return ee.promise.timeout=function(nt){return Be.indexOf(qe)!==-1?(qe.timeout=nt,ee.promise):pt.call(ee.promise,nt)},this._next(),ee.promise}else{if(typeof w=="function")return this.exec("run",[String(w),$],G);throw new TypeError('Function or string expected as argument "method"')}},Y.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var w=this;return this.exec("methods").then(function($){var G={};return $.forEach(function(ee){G[ee]=function(){return w.exec(ee,Array.prototype.slice.call(arguments))}}),G})},Y.prototype._next=function(){if(this.tasks.length>0){var w=this._getWorker();if(w){var $=this,G=this.tasks.shift();if(G.resolver.promise.pending){var ee=w.exec(G.method,G.params,G.resolver,G.options).then($._boundNext).catch(function(){if(w.terminated)return $._removeWorker(w)}).then(function(){$._next()});typeof G.timeout=="number"&&ee.timeout(G.timeout)}else $._next()}}},Y.prototype._getWorker=function(){for(var w=this.workers,$=0;$<w.length;$++){var G=w[$];if(G.busy()===!1)return G}return w.length<this.maxWorkers?(G=this._createWorkerHandler(),w.push(G),G):null},Y.prototype._removeWorker=function(w){var $=this;return fe.releasePort(w.debugPort),this._removeWorkerFromList(w),this._ensureMinWorkers(),new E(function(G,ee){w.terminate(!1,function(Be){$.onTerminateWorker({forkArgs:w.forkArgs,forkOpts:w.forkOpts,workerThreadOpts:w.workerThreadOpts,script:w.script}),Be?ee(Be):G(w)})})},Y.prototype._removeWorkerFromList=function(w){var $=this.workers.indexOf(w);$!==-1&&this.workers.splice($,1)},Y.prototype.terminate=function(w,$){var G=this;this.tasks.forEach(function(rt){rt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ee=function(nt){fe.releasePort(nt.debugPort),this._removeWorkerFromList(nt)},Be=ee.bind(this),qe=[],pt=this.workers.slice();return pt.forEach(function(rt){var nt=rt.terminateAndNotify(w,$).then(Be).always(function(){G.onTerminateWorker({forkArgs:rt.forkArgs,forkOpts:rt.forkOpts,workerThreadOpts:rt.workerThreadOpts,script:rt.script})});qe.push(nt)}),E.all(qe)},Y.prototype.stats=function(){var w=this.workers.length,$=this.workers.filter(function(G){return G.busy()}).length;return{totalWorkers:w,busyWorkers:$,idleWorkers:w-$,pendingTasks:this.tasks.length,activeTasks:$}},Y.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var w=this.workers.length;w<this.minWorkers;w++)this.workers.push(this._createWorkerHandler())},Y.prototype._createWorkerHandler=function(){var w=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new C(w.script||this.script,{forkArgs:w.forkArgs||this.forkArgs,forkOpts:w.forkOpts||this.forkOpts,workerOpts:w.workerOpts||this.workerOpts,workerThreadOpts:w.workerThreadOpts||this.workerThreadOpts,debugPort:fe.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function _e(w){if(!L(w)||!le(w)||w<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function ae(w){if(!L(w)||!le(w)||w<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function L(w){return typeof w=="number"}function le(w){return Math.round(w)==w}return ue=Y,ue}var j={},ne,xe;function oe(){if(xe)return ne;xe=1;function x(E,C){this.message=E,this.transfer=C}return ne=x,ne}var _t;function Gt(){return _t||(_t=1,function(x){var E=oe(),C="__workerpool-terminate__",T={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")T.on=function(L,le){addEventListener(L,function(w){le(w.data)})},T.send=function(L,le){le?postMessage(L,le):postMessage(L)};else if(typeof process<"u"){var H;try{H=Kt}catch(L){if(!(F(L)==="object"&&L!==null&&L.code==="MODULE_NOT_FOUND"))throw L}if(H&&H.parentPort!==null){var fe=H.parentPort;T.send=fe.postMessage.bind(fe),T.on=fe.on.bind(fe),T.exit=process.exit.bind(process)}else T.on=process.on.bind(process),T.send=function(L){process.send(L)},T.on("disconnect",function(){process.exit(1)}),T.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Y(L){return Object.getOwnPropertyNames(L).reduce(function(le,w){return Object.defineProperty(le,w,{value:L[w],enumerable:!0})},{})}function _e(L){return L&&typeof L.then=="function"&&typeof L.catch=="function"}T.methods={},T.methods.run=function(le,w){var $=new Function("return ("+le+").apply(null, arguments);");return $.apply($,w)},T.methods.methods=function(){return Object.keys(T.methods)},T.terminationHandler=void 0,T.cleanupAndExit=function(L){var le=function(){T.exit(L)};if(!T.terminationHandler)return le();var w=T.terminationHandler(L);_e(w)?w.then(le,le):le()};var ae=null;T.on("message",function(L){if(L===C)return T.cleanupAndExit(0);try{var le=T.methods[L.method];if(le){ae=L.id;var w=le.apply(le,L.params);_e(w)?w.then(function($){$ instanceof E?T.send({id:L.id,result:$.message,error:null},$.transfer):T.send({id:L.id,result:$,error:null}),ae=null}).catch(function($){T.send({id:L.id,result:null,error:Y($)}),ae=null}):(w instanceof E?T.send({id:L.id,result:w.message,error:null},w.transfer):T.send({id:L.id,result:w,error:null}),ae=null)}else throw new Error('Unknown method "'+L.method+'"')}catch($){T.send({id:L.id,result:null,error:Y($)})}}),T.register=function(L,le){if(L)for(var w in L)L.hasOwnProperty(w)&&(T.methods[w]=L[w]);le&&(T.terminationHandler=le.onTerminate),T.send("ready")},T.emit=function(L){if(ae){if(L instanceof E){T.send({id:ae,isEvent:!0,payload:L.message},L.transfer);return}T.send({id:ae,isEvent:!0,payload:L})}},x.add=T.register,x.emit=T.emit}(j)),j}var Ye=n.platform,kt=n.isMainThread,Pi=n.cpus;function tt(x,E){var C=v();return new C(x,E)}var Ct=i.pool=tt;function gr(x,E){var C=Gt();C.add(x,E)}var at=i.worker=gr;function Te(x){var E=Gt();E.emit(x)}var Hr=i.workerEmit=Te,Ei=h(),He=Ei.Promise,Ci=i.Promise=He,Ti=i.Transfer=oe(),Si=i.platform=Ye,Mi=i.isMainThread=kt,Di=i.cpus=Pi;r.Promise=Ci,r.Transfer=Ti,r.cpus=Di,r.default=i,r.isMainThread=Mi,r.platform=Si,r.pool=Ct,r.worker=at,r.workerEmit=Hr,Object.defineProperty(r,"__esModule",{value:!0})})})(ps,ps.exports);var Es=ps.exports;const ba=Wn(Es),va=ia({__proto__:null,default:ba},[Es]);var ya={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},wa=`\r
`,xa="\uFEFF",hi=t=>Object.assign({},ya,t);class _a extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let ka=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class $a extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}let Oa=class extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}};var pr=t=>t,st=t=>t,kr=pr,di=pr,ir=pr,cn=pr,un=pr,Aa=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},Pa=t=>cn(typeof t=="object"?t.key:t),Ea=t=>un(typeof t=="object"?t.displayLabel:t),Ca=(t,...e)=>e.reduce((r,i)=>i(r),t),Ta=t=>e=>t.useBom?di(st(e)+xa):e,Sa=t=>e=>t.showTitle?Cs(di(st(e)+t.title))(ir("")):e,Cs=t=>e=>di(st(t)+st(e)+wa),Un=t=>(e,r)=>Ma(t)(ir(st(e)+st(r))),Ma=t=>e=>pr(st(e)+t.fieldSeparator),Da=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new ka("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=ir("");for(let s=0;s<e.length;s++){const n=Ea(e[s]);i=Un(t)(i,Vn(t,st(n)))}return i=ir(st(i).slice(0,-1)),Cs(r)(i)},La=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let o=ir("");for(let l=0;l<e.length;l++){const h=Pa(e[l]),d=r[n][st(h)];o=Un(t)(o,Vn(t,d))}o=ir(st(o).slice(0,-1)),s=Cs(s)(o)}return s},Ra=t=>+t===t&&(!isFinite(t)||!!(t%1)),Fa=(t,e)=>{if(Ra(e)){if(t.decimalSeparator==="locale")return kr(e.toLocaleString());if(t.decimalSeparator)return kr(e.toString().replace(".",t.decimalSeparator))}return kr(e.toString())},Jr=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+Aa(e,t.quoteCharacter)+t.quoteCharacter),kr(r)},ja=(t,e)=>{const r=e?"true":"false";return kr(t.boolDisplay[r])},Ba=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?Jr(t,t.replaceUndefinedWith+""):e===null?Jr(t,"null"):Jr(t,""),Vn=(t,e)=>{if(typeof e=="number")return Fa(t,e);if(typeof e=="string")return Jr(t,e);if(typeof e=="boolean"&&t.boolDisplay)return ja(t,e);if(e===null||typeof e>"u")return Ba(t,e);throw new Oa(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Na=t=>e=>{const r=hi(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=Ca(di(""),Ta(r),Sa(r),Da(r,i),La(r,i,e));if(st(s).length<1)throw new _a("Output is empty. Is your data formatted correctly?");return s},Ha=t=>e=>{const r=hi(t),i=st(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Wa=t=>e=>{if(!window)throw new $a("Downloading only supported in a browser environment.");const r=Ha(t)(e),i=hi(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,o=document.createElement("a");o.download=n,o.href=URL.createObjectURL(r),o.setAttribute("visibility","hidden"),document.body.appendChild(o),o.click(),document.body.removeChild(o)};function Se(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ct(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function hn(t,e){const r=Se(t);return isNaN(e)?ct(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function In(t,e){const r=Se(t);if(isNaN(e))return ct(t,NaN);if(!e)return r;const i=r.getDate(),s=ct(t,r.getTime());s.setMonth(r.getMonth()+e+1,0);const n=s.getDate();return i>=n?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}function Ua(t,e){const r=+Se(t);return ct(t,r+e)}const qn=6048e5,Va=864e5,Ia=36e5;function qa(t,e){return Ua(t,e*Ia)}let Ya={};function Lr(){return Ya}function sr(t,e){var l,h,d,g;const r=Lr(),i=(e==null?void 0:e.weekStartsOn)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((g=(d=r.locale)==null?void 0:d.options)==null?void 0:g.weekStartsOn)??0,s=Se(t),n=s.getDay(),o=(n<i?7:0)+n-i;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function ti(t){return sr(t,{weekStartsOn:1})}function Yn(t){const e=Se(t),r=e.getFullYear(),i=ct(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=ti(i),n=ct(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const o=ti(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=o.getTime()?r:r-1}function ms(t){const e=Se(t);return e.setHours(0,0,0,0),e}function dn(t){const e=Se(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function za(t,e){const r=ms(t),i=ms(e),s=+r-dn(r),n=+i-dn(i);return Math.round((s-n)/Va)}function Ga(t){const e=Yn(t),r=ct(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),ti(r)}function Xa(t,e){return In(t,e*12)}function Qa(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function zn(t){if(!Qa(t)&&typeof t!="number")return!1;const e=Se(t);return!isNaN(Number(e))}function Ka(t){const e=Se(t);return e.setHours(23,59,59,999),e}function Za(t){const e=Se(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function Ja(t){const e=Se(t);return e.setDate(1),e.setHours(0,0,0,0),e}function el(t){const e=Se(t),r=e.getFullYear();return e.setFullYear(r+1,0,0),e.setHours(23,59,59,999),e}function Gn(t){const e=Se(t),r=ct(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}function tl(t){const e=Se(t);return e.setMinutes(59,59,999),e}function rl(t,e){var l,h;const r=Lr(),i=r.weekStartsOn??((h=(l=r.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??0,s=Se(t),n=s.getDay(),o=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+o),s.setHours(23,59,59,999),s}const il={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},sl=(t,e,r)=>{let i;const s=il[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ss(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const nl={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ol={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},al={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ll={date:ss({formats:nl,defaultWidth:"full"}),time:ss({formats:ol,defaultWidth:"full"}),dateTime:ss({formats:al,defaultWidth:"full"})},cl={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ul=(t,e,r,i)=>cl[t];function wr(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):o;s=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[o]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const hl={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},pl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ml={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},gl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},bl=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},vl={ordinalNumber:bl,era:wr({values:hl,defaultWidth:"wide"}),quarter:wr({values:dl,defaultWidth:"wide",argumentCallback:t=>t-1}),month:wr({values:fl,defaultWidth:"wide"}),day:wr({values:pl,defaultWidth:"wide"}),dayPeriod:wr({values:ml,defaultWidth:"wide",formattingValues:gl,defaultFormattingWidth:"wide"})};function xr(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const o=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(l)?wl(l,m=>m.test(o)):yl(l,m=>m.test(o));let d;d=t.valueCallback?t.valueCallback(h):h,d=r.valueCallback?r.valueCallback(d):d;const g=e.slice(o.length);return{value:d,rest:g}}}function yl(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function wl(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function xl(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let o=t.valueCallback?t.valueCallback(n[0]):n[0];o=r.valueCallback?r.valueCallback(o):o;const l=e.slice(s.length);return{value:o,rest:l}}}const _l=/^(\d+)(th|st|nd|rd)?/i,kl=/\d+/i,$l={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ol={any:[/^b/i,/^(a|c)/i]},Al={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pl={any:[/1/i,/2/i,/3/i,/4/i]},El={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Cl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Tl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Sl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ml={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dl={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ll={ordinalNumber:xl({matchPattern:_l,parsePattern:kl,valueCallback:t=>parseInt(t,10)}),era:xr({matchPatterns:$l,defaultMatchWidth:"wide",parsePatterns:Ol,defaultParseWidth:"any"}),quarter:xr({matchPatterns:Al,defaultMatchWidth:"wide",parsePatterns:Pl,defaultParseWidth:"any",valueCallback:t=>t+1}),month:xr({matchPatterns:El,defaultMatchWidth:"wide",parsePatterns:Cl,defaultParseWidth:"any"}),day:xr({matchPatterns:Tl,defaultMatchWidth:"wide",parsePatterns:Sl,defaultParseWidth:"any"}),dayPeriod:xr({matchPatterns:Ml,defaultMatchWidth:"any",parsePatterns:Dl,defaultParseWidth:"any"})},Rl={code:"en-US",formatDistance:sl,formatLong:ll,formatRelative:ul,localize:vl,match:Ll,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Fl(t){const e=Se(t);return za(e,Gn(e))+1}function jl(t){const e=Se(t),r=+ti(e)-+Ga(e);return Math.round(r/qn)+1}function Xn(t,e){var g,m,_,k;const r=Se(t),i=r.getFullYear(),s=Lr(),n=(e==null?void 0:e.firstWeekContainsDate)??((m=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:m.firstWeekContainsDate)??s.firstWeekContainsDate??((k=(_=s.locale)==null?void 0:_.options)==null?void 0:k.firstWeekContainsDate)??1,o=ct(t,0);o.setFullYear(i+1,0,n),o.setHours(0,0,0,0);const l=sr(o,e),h=ct(t,0);h.setFullYear(i,0,n),h.setHours(0,0,0,0);const d=sr(h,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function Bl(t,e){var l,h,d,g;const r=Lr(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(d=r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??1,s=Xn(t,e),n=ct(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),sr(n,e)}function Nl(t,e){const r=Se(t),i=+sr(r,e)-+Bl(r,e);return Math.round(i/qn)+1}function ie(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Mt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return ie(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ie(r+1,2)},d(t,e){return ie(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ie(t.getHours()%12||12,e.length)},H(t,e){return ie(t.getHours(),e.length)},m(t,e){return ie(t.getMinutes(),e.length)},s(t,e){return ie(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return ie(s,e.length)}},Zt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fn={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Mt.y(t,e)},Y:function(t,e,r,i){const s=Xn(t,i),n=s>0?s:1-s;if(e==="YY"){const o=n%100;return ie(o,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):ie(n,e.length)},R:function(t,e){const r=Yn(t);return ie(r,e.length)},u:function(t,e){const r=t.getFullYear();return ie(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ie(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ie(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Mt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ie(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Nl(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):ie(s,e.length)},I:function(t,e,r){const i=jl(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):ie(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Mt.d(t,e)},D:function(t,e,r){const i=Fl(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ie(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return ie(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return ie(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return ie(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=Zt.noon:i===0?s=Zt.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=Zt.evening:i>=12?s=Zt.afternoon:i>=4?s=Zt.morning:s=Zt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Mt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Mt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ie(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):ie(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Mt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Mt.s(t,e)},S:function(t,e){return Mt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return mn(i);case"XXXX":case"XX":return Ut(i);case"XXXXX":case"XXX":default:return Ut(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return mn(i);case"xxxx":case"xx":return Ut(i);case"xxxxx":case"xxx":default:return Ut(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+pn(i,":");case"OOOO":default:return"GMT"+Ut(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+pn(i,":");case"zzzz":default:return"GMT"+Ut(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return ie(i,e.length)},T:function(t,e,r){const i=t.getTime();return ie(i,e.length)}};function pn(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+ie(n,2)}function mn(t,e){return t%60===0?(t>0?"-":"+")+ie(Math.abs(t)/60,2):Ut(t,e)}function Ut(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=ie(Math.trunc(i/60),2),n=ie(i%60,2);return r+s+e+n}const gn=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Qn=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Hl=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return gn(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",gn(i,e)).replace("{{time}}",Qn(s,e))},Wl={p:Qn,P:Hl},Ul=/^D+$/,Vl=/^Y+$/,Il=["D","DD","YY","YYYY"];function ql(t){return Ul.test(t)}function Yl(t){return Vl.test(t)}function zl(t,e,r){const i=Gl(t,e,r);if(console.warn(i),Il.includes(t))throw new RangeError(i)}function Gl(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Xl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ql=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Kl=/^'([^]*?)'?$/,Zl=/''/g,Jl=/[a-zA-Z]/;function Kn(t,e,r){var g,m,_,k;const i=Lr(),s=i.locale??Rl,n=i.firstWeekContainsDate??((m=(g=i.locale)==null?void 0:g.options)==null?void 0:m.firstWeekContainsDate)??1,o=i.weekStartsOn??((k=(_=i.locale)==null?void 0:_.options)==null?void 0:k.weekStartsOn)??0,l=Se(t);if(!zn(l))throw new RangeError("Invalid time value");let h=e.match(Ql).map(P=>{const A=P[0];if(A==="p"||A==="P"){const F=Wl[A];return F(P,s.formatLong)}return P}).join("").match(Xl).map(P=>{if(P==="''")return{isToken:!1,value:"'"};const A=P[0];if(A==="'")return{isToken:!1,value:ec(P)};if(fn[A])return{isToken:!0,value:P};if(A.match(Jl))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return{isToken:!1,value:P}});s.localize.preprocessor&&(h=s.localize.preprocessor(l,h));const d={firstWeekContainsDate:n,weekStartsOn:o,locale:s};return h.map(P=>{if(!P.isToken)return P.value;const A=P.value;(Yl(A)||ql(A))&&zl(A,e,String(t));const F=fn[A[0]];return F(l,A,s.localize,d)}).join("")}function ec(t){const e=t.match(Kl);return e?e[1].replace(Zl,"'"):t}function Ts(t,e){const r=Se(t);if(!zn(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const o=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const h=ie(r.getDate(),2),d=ie(r.getMonth()+1,2);n=`${ie(r.getFullYear(),4)}${o}${d}${o}${h}`}if(s!=="date"){const h=ie(r.getHours(),2),d=ie(r.getMinutes(),2),g=ie(r.getSeconds(),2);n=`${n}${n===""?"":" "}${h}${l}${d}${l}${g}`}return n}function tc(t){const e=Se(t);return e.setMinutes(0,0,0),e}var ft=class{constructor(t,e){this.parent=t,this._initial=e,this._listeners={},this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},rc=class extends ft{constructor(t,e){super(t,e),this.parent=t,this.framesByTimestamp=new Map,this.framesByMs=new Map,this.framesByIndex=new Map,this.localTimeline=[],this._onChangeListeners=new Map;const r=this.parent.frames[0].timestamp;this.frames=this.parent.frames.map((i,s)=>{const n=i.timestamp-r,o={...i,index:s,ms:n};return this.framesByIndex.set(s,o),this.framesByMs.set(o.ms,o),this.framesByTimestamp.set(o.timestamp,o),this.localTimeline.push(o.ms),o}),this._currentFrame=this.frames[0],console.log("timeline",this.localTimeline)}get duration(){return this.parent.duration}get frameCount(){return this.frames.length}set currentFrame(t){t.ms!==this._currentFrame.ms&&(this._currentFrame=t,this._onChangeListeners.forEach(e=>e(this._currentFrame)),console.log("změnil se mi frame"),this.parent.pixels=t.pixels)}get currentFrame(){return this._currentFrame}get nextFrame(){const e=this.currentFrame.index+1;if(e<=this.frameCount)return this.framesByIndex.get(e)}get nextFrameTimeoutDuration(){if(this.nextFrame!==void 0)return this.nextFrame.ms-this.currentFrame.ms}addChangeListener(t,e){this._onChangeListeners.set(t,e)}removeChangeListener(t){this._onChangeListeners.delete(t)}getNextFrameToMs(t){const e=this.localTimeline.find(r=>r>t);if(e!==void 0)return this.framesByMs.get(e)}getPreviousFrameToMs(t){const e=this.localTimeline.reverse().find(r=>r<t);if(e!==void 0)return this.framesByMs.get(e)}validate(t){return t<0?0:t<=this.duration?t:this.duration}afterSetEffect(t){if(t!==this.currentFrame.ms)if(this.localTimeline.includes(t)){const e=this.framesByMs.get(t);this.currentFrame.ms!==e.ms&&(this.currentFrame=e)}else{const e=this.getPreviousFrameToMs(t);e&&e.ms!==this.currentFrame.ms&&(this.currentFrame=e)}}setMs(t){this.value=t}setPercentage(t){const e=Math.min(Math.max(t,0),100),r=this.duration/100*e;this.value=Math.floor(r),console.log("Nastavil jsem čas na",this.value)}goToNextFrame(){this.nextFrame&&(this.value=this.nextFrame.ms)}static formatDuration(t){const e=t%1e3,r=(t-e)%(1e3*60);return[(t-e-r)/(1e3*60*60),r,e].join(":")}play(){this.timer=setInterval(()=>{this.goToNextFrame()},this.nextFrameTimeoutDuration)}pause(){clearInterval(this.timer)}stop(){clearInterval(this.timer),this.setMs(0)}},ic=class extends ft{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Rr=class{get pool(){return this._pool||(this._pool=Es.pool({workerType:"web"})),console.log("maximal number of workers",va),this._pool}},sc=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=hi({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(s=>{const{pixels:n,...o}=s;return console.log(n),o}),i=Na(e)(r);Wa(e)(i)}},fi=class{constructor(t){this.instance=t,this._mounted=!1}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},gt=class gs{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=gs.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=gs.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},nc=class extends fi{constructor(t,e){super(t),this._url=e,this.container=gt.createVisibleLayer(),this._url&&(this.image=gt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(t){this._url=t,this.image&&t&&(this.image.src=t)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},oc=class extends fi{constructor(t){super(t),this._opacity=1,this.container=gt.createCanvasContainer(),this.canvas=gt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(t){this._opacity=Math.max(Math.min(t,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}draw(){const t=this.to-this.from;for(let e=0;e<=this.width;e++)for(let r=0;r<=this.height;r++){const i=e+r*this.width;let s=this.pixels[i];s<this.from&&(s=this.from),s>this.to&&(s=this.to);const o=(s-this.from)/t,l=Math.round(255*o),h=this.getPalette()[l];this.context.fillStyle=h,this.context.fillRect(e,r,1,1)}}exportAsPng(){const t=this.canvas.toDataURL(),e=document.createElement("a");e.download=this.instance.fileName.replace(".lrc","_exported.png"),e.href=t,e.click()}},ac=class extends fi{constructor(t){super(t),this._show=!1,this._hover=!1,this.layerRoot=gt.createCursorLayerRoot(),this.center=gt.createCursorLayerCenter(),this.axisX=gt.createCursorLayerX(),this.axisY=gt.createCursorLayerY(),this.label=gt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(t){this._show=t,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(t){this._hover=t,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(t,e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(t*i),n=Math.round(e*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),t>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),e>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${r.toFixed(3)} °C`}}setValue(t){t&&(this.label.innerHTML=`${t.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(t){return`${t}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},lc=class extends fi{constructor(t){super(t),this.container=gt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},cc=class extends Rr{constructor(t,e){super(),this.source=t,this.group=e,this.root=null,this.canvasLayer=new oc(this),this.visibleLayer=new nc(this,this.visibleUrl),this.cursorLayer=new ac(this),this.listenerLayer=new lc(this),this._mounted=!1,this._onHover=void 0,this._onClick=void 0,this.cursorValue=new ic(this,void 0),this._isHover=!1,this.timeline=new rc(this,0),this.id=`instance_${this.group.id}_${this.source.url}`,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=this.timeline.currentFrame.pixels}get url(){return this.source.url}get fileName(){return this.source.fileName}get visibleUrl(){return this.source.visibleUrl}get signature(){return this.source.signature}get dataType(){return this.source.fileDataType}get unit(){return this.source.unit}get width(){return this.source.width}get height(){return this.source.height}get timestamp(){return this.source.timestamp}get version(){return this.source.version}get streamCount(){return this.source.streamCount}get fileDataType(){return this.source.fileDataType}get frameCount(){return this.source.frameCount}get frames(){return this.source.frames}get duration(){return this.source.duration}get min(){return this.source.min}get max(){return this.source.max}get pixelsForHistogram(){return this.source.pixelsForHistogram}get pixels(){return this._pixels}set pixels(t){if(this._pixels=t,this._mounted&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const e=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(e)}}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}reset(){}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(t){this._mounted=t}attachToDom(t){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=t,this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const e=this.width,r=this.root.clientWidth,i=e/r,s=Math.round(t.offsetX*i),n=Math.round(t.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:n}),this._onHover&&this._onHover(t,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=t=>{this._onClick&&this._onClick(t,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(t){this.attachToDom(t)}unmountFromDom(){this.detachFromDom()}setHoverHandler(t){this._onHover=t}setHoverCursor(t){this.root&&this.root.style.cursor!==t&&(this.root.style.cursor=t)}setClickHandler(t=void 0){this._onClick=t}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(t){console.log(t),this.draw()}get isHover(){return this._isHover}set isHover(t){this._isHover=t}recieveCursorPosition(t){this.cursorValue.recalculateFromCursor(t),t!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(t.x,t.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(t,e){const r=e*this.width+t;return this.pixels[r]}recieveRange(t){t!==void 0&&this.draw()}recieveOpacity(t){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=t)}get unitHuman(){return this.unit===0?"none":this.unit===1?"intensity":this.unit===2?"°C":this.unit===3?"Kelvin":"unit not specified"}get dataTypeHuman(){return this.dataType===0?"Float16":this.dataType===1?"Float32":this.dataType===2?"Int16":"error parsing data type"}get export(){if(!this._export){const t=new sc(this);this._export=t}return this._export}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){this.export.thermalDataAsCsv()}},er=class extends Rr{constructor(t,e,r,i,s,n,o,l,h,d,g,m,_,k,P){super(),this.url=t,this.signature=e,this.version=r,this.streamCount=i,this.fileDataType=s,this.unit=n,this.width=o,this.height=l,this.timestamp=h,this.pixels=d,this.min=g,this.max=m,this.frameCount=_,this.frames=k,this.visibleUrl=P,this.fileName=this.url.substring(this.url.lastIndexOf("/")+1);let A=[];this.frames.forEach(F=>{A=A.concat(F.pixels)}),this.pixelsForHistogram=A,this.duration=this.frames.length===0?0:this.frames[this.frames.length-1].timestamp-this.frames[0].timestamp}static async fromUrl(t,e){try{return await bs.fromUrl(t,e)}catch{return null}}static async fromUrlWithErrors(t,e){return await bs.fromUrl(t,e)}createInstance(t){return new cc(this,t)}},uc=class{constructor(t,e,r){this.url=t,this.blob=e,this.visibleUrl=r,this.isValidTimestamp=i=>Number.isInteger(i),this.isValidWidth=i=>Number.isInteger(i),this.isValidHeight=i=>Number.isInteger(i),this.isValidPixels=i=>i!==void 0&&i.length===this.width*this.height,this.isValidMin=i=>i!==void 0,this.isValidMax=i=>i!==void 0,this.isValidFrameCount=i=>Number.isInteger(i),this.isValidFrames=i=>i===void 0||this.frameCount===void 0?!1:i.length===this.frameCount,this.errors=[]}async init(){const t=await this.blob.arrayBuffer();this.data=new DataView(t);const e=t.slice(25);return this.frameSubset=e,this}async parse(){return await this.init(),await this.parseFile(),this.getThermalFile()}parseTimestamp(){const t=this.getTimestamp();this.isValidTimestamp(t)||this.logValidationError("timestamp",t),this.timestamp=t}parseWidth(){const t=this.getWidth();this.isValidWidth(t)||this.logValidationError("width",t),this.width=t}parseHeight(){const t=this.getHeight();this.isValidHeight(t)||this.logValidationError("height",t),this.height=t}async parsePixels(){const t=this.getPixels();this.pixels=t}parseMin(){const t=this.getMin();this.isValidMin(t)||this.logValidationError("min",t),this.min=t}parseMax(){const t=this.getMax();this.isValidMax(t)||this.logValidationError("max",t),this.max=t}parseFrameCount(){const t=this.getFrameCount();this.isValidFrameCount(t)||this.logValidationError("frameCount",t),this.frameCount=t}parseFrames(){const t=this.getFrames();this.isValidFrames(t)||this.logValidationError("frames",t.toString()),this.frames=t}logError(t){console.error(t),this.errors.push(t)}logValidationError(t,e){const r=`Invalid ${t} of ${this.url}: '${e.toString()}'`;this.logError(r)}getErrors(){return this.errors}encodeErrors(){return this.errors.join("+|+")}static decodeErrors(t){return t.split("+|+")}},Ge=class{static readDotnetTimestamp(t,e){const r=e.getBigInt64(t,!0),i=62135596800000n,s=10000n,n=24n*60n*60n*1000n*s,o=0x4000000000000000n,l=0x8000000000000000n;let d=r&0x3FFFFFFFFFFFFFFFn;r&l&&(d>o-n&&(d-=o),d<0&&(d+=n));const m=d/s-i;return Number(m)}static readFloat32(t,e){return e.getFloat32(t,!0)}static read8bNumber(t,e){return e.getUint8(t)}static readTemperatureArray(t,e,r,i,s){const n=e.buffer.slice(t);if(r===0){const o=new Uint16Array(n),l=Math.abs(i-s),h=65535;return[...o].map(d=>{const g=d/h;return i+l*g})}else if(r===1)return[...new Float32Array(n)];return[]}},hc=class{constructor(t,e,r,i,s,n,o){this.arrayBuffer=t,this.width=e,this.height=r,this.dataType=i,this.frameCount=s,this.frameByteSize=n,this.pixelByteSize=o}parseFrame(t){if(!Number.isInteger(t))throw new Error(`The frame index ${t} is invalid!`);const e=t*this.frameByteSize,r=e+this.frameByteSize,i=this.arrayBuffer.slice(e,r),s=new DataView(i),n=Ge.readFloat32(8,s),o=Ge.readFloat32(12,s);return{timestamp:Ge.readDotnetTimestamp(0,s),min:n,max:o,modeMinInKelvin:Ge.readFloat32(16,s),modeMaxInKelvin:Ge.readFloat32(20,s),emissivity:Ge.readFloat32(24,s),reflectedTemperaatureInKelvin:Ge.readFloat32(28,s),distance:Ge.readFloat32(32,s),atmosphereTemperatureInKelvin:Ge.readFloat32(36,s),relativeHumidity:Ge.readFloat32(40,s),tau:Ge.readFloat32(44,s),windowTemperature:Ge.readFloat32(48,s),windowTransmissivity:Ge.readFloat32(52,s),isTauSet:Ge.read8bNumber(53,s),pixels:Ge.readTemperatureArray(57,s,this.dataType,n,o)}}},dc=class extends uc{constructor(){super(...arguments),this.isValidSignature=t=>t==="LRC\0",this.isValidVersion=t=>t===2,this.isStreamCountValid=t=>t===1,this.isDataTypeValid=t=>t===void 0?!1:[0,1,2].includes(t),this.isValidUnit=t=>t===2}async parseFile(){await this.parseSignature(),this.parseVersion(),this.parseDataType(),this.parseStreamCount(),this.parseTimestamp(),this.parseUnit(),this.parseWidth(),this.parseHeight(),this.parseFrameCount(),this.parseFrames(),this.parseMin(),this.parseMax(),await this.parsePixels()}async parseSignature(){const t=await this.readString(0,4);this.isValidSignature(t)||this.logValidationError("signature",t),this._signature=t}parseVersion(){const t=this.read8bNumber(4);this.isValidVersion(t)||this.logValidationError("version",t),this._version=t}parseStreamCount(){const t=this.read8bNumber(14);this.isStreamCountValid(t)||this.logValidationError("streamCount",t),this._streamCount=t}parseDataType(){const t=this.read8bNumber(15);this.isDataTypeValid(t)||this.logValidationError("fileDataType",t),this._fileDataType=t,this._pixelByteLength=t===0?2:4}get pixelByteLength(){return this._pixelByteLength}parseUnit(){const t=this.read8bNumber(16);this.isValidUnit(t)||this.logValidationError("unit",t),this._unit=t}getFrameCount(){return this.getNumberOfFrames()}getMin(){return this.frames.reduce((t,e)=>e.min<t?e.min:t,1/0)}getMax(){return this.frames.reduce((t,e)=>e.max>t?e.max:t,-1/0)}getWidth(){return this.read16bNumber(17)}getHeight(){return this.read16bNumber(19)}getTimestamp(){return Ge.readDotnetTimestamp(5,this.data)}getFrameSize(){if(this._fileDataType===void 0||this.width===void 0||this.height===void 0||this.pixelByteLength===void 0)throw new Error("Trying to read frame size before necessary attributes are known");return 57+this.width*this.height*this.pixelByteLength}getNumberOfFrames(){const t=this.getFrameSize();return this.frameSubset.byteLength/t}getFrames(){const t=[],e=new hc(this.frameSubset,this.width,this.height,this._fileDataType,this.frameCount,this.getFrameSize(),this.pixelByteLength);for(let r=0;r<this.frameCount;r++)t.push(e.parseFrame(r));return t}async readTemperatureArray(t){const e=(await this.blob.arrayBuffer()).slice(t,t+this.width*this.height*this.pixelByteLength);if(this._fileDataType===0){const r=new Uint16Array(e),i=Math.abs(this.min-this.max),s=65535;return[...r].map(n=>{const o=n/s;return this.min+i*o})}else if(this._fileDataType===1)return[...new Float32Array(e)];return[]}getPixels(){return this.frames&&this.frames.length>0?this.frames[0].pixels:[]}isValid(){return this.errors.length===0&&this.isValidSignature(this._signature)&&this.isStreamCountValid(this._streamCount)&&this.isDataTypeValid(this._fileDataType)&&this.isValidVersion(this._version)&&this.isValidUnit(this._unit)&&this.isValidTimestamp(this.timestamp)&&this.isValidWidth(this.width)&&this.isValidHeight(this.height)&&this.isValidPixels(this.pixels)&&this.isValidMin(this.min)&&this.isValidMax(this.max)&&this.isValidFrameCount(this.frameCount)}getThermalFile(){if(!this.isValid())throw new Error(this.encodeErrors());return new er(this.url,this._signature,this._version,this._streamCount,this._fileDataType,this._unit,this.width,this.height,this.timestamp,this.pixels,this.min,this.max,this.frameCount,this.frames,this.visibleUrl)}async readString(t,e){return await this.blob.slice(t,e).text()}read16bNumber(t){return this.data.getUint16(t,!0)}read8bNumber(t){return this.data.getUint8(t)}},bs=class vs{constructor(){}static async fromUrl(e,r){const i=new vs;return i.thermalUrl=e,i.visibleUrl=r,await i.loadFromUrl()}async loadFromUrl(){const e=await pa(this.thermalUrl);if(this.blob=await e.blob(),e.status!==200)throw new Error(`There was an error loading '${this.thermalUrl}'`);return this.parser=this.getParserInstance(),await this.parser.parse()}static async fromFile(e){const r=new vs;return r.thermalUrl=e.name,r.blob=e,await r.loadFromBlob()}async loadFromBlob(){return this.parser=this.getParserInstance(),await this.parser.parse()}getParserInstance(){if(this.thermalUrl.endsWith(".lrc"))return new dc(this.thermalUrl,this.blob,this.visibleUrl);throw new Error("No parser found!")}},fc=class extends ft{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},pc=class extends ft{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e);console.log(this.parent.histogram.value);const i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},mc=class extends ft{constructor(){super(...arguments),this._hover=this.value!==void 0}get hover(){return this._hover}validate(t){return t}afterSetEffect(t){this._hover=this.value!==void 0,this.parent.instances.forEveryInstance(e=>e.recieveCursorPosition(t))}recieveCursorPosition(t){this.value=t}},gc=class extends ft{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(t,e,r){this.parent.registry.fetcher.request(t,e,(i,s)=>{if(i instanceof er){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(t,e){this._requestedRemovals.has(t)?e&&this._requestedRemovals.get(t).callbacks.push(e):this._requestedRemovals.set(t,{url:t,callbacks:e?[e]:[]})}async cleanup(){const t=Object.values(this._requestedRemovals).map(e=>e.url);this.value=this.value.filter(e=>{var i;return t.includes(e.url)?((i=this._requestedRemovals.get(e.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(t){return t}afterSetEffect(t){this.map.clear(),t.forEach(e=>this._map.set(e.url,e))}instantiateSource(t){if(this._map.has(t.url))return this._map.get(t.url);{const e=t.createInstance(this.parent);return this.value=[...this.value,e],e}}instantiateSources(t){const e=[];t.forEach(r=>{this._map.has(r.url)||e.push(r.createInstance(this.parent))}),this.value=e}removeAllInstances(){this.forEveryInstance(t=>t.destroySelfAndBelow()),this.value=[]}forEveryInstance(t){this.value.forEach(e=>t(e))}},Zn=class extends ft{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},bc=class extends Zn{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.instances.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},vc=class extends Rr{constructor(t,e,r,i){super(),this.registry=t,this.id=e,this.name=r,this.description=i,this.hash=Math.random(),this.minmax=new bc(this,void 0),this.instances=new gc(this,[]),this.cursorPosition=new mc(this,void 0),this.forEveryInstance=s=>{this.instances.value.forEach(n=>s(n))}}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.instances.removeAllInstances()}reset(){this.instances.reset(),this.minmax.reset(),this.cursorPosition.reset()}},yc=class extends ft{constructor(){super(...arguments),this._map=new Map}get map(){return this._map}validate(t){return t}afterSetEffect(t){this._map.clear(),t.forEach(e=>this._map.set(e.id,e))}addOrGetGroup(t,e,r){if(this._map.has(t))return this._map.get(t);const i=new vc(this.parent,t,e,r);return this._map.set(t,i),this.value.push(i),this.value=[...this.value],i}removeGroup(t){var e;this._map.has(t)&&((e=this._map.get(t))==null||e.destroySelfAndBelow(),this._map.delete(t),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(t=>t.destroySelfAndBelow()),this.value=[]}},wc=class extends ft{constructor(){super(...arguments),this._resolution=150,this.buffer=new Map,this.bufferPixelsCount=0,this._bufferResolution=1e3}get resolution(){return this._resolution}set bufferResolution(t){this._bufferResolution=Math.round(Math.max(t,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(t){this._resolution=Math.round(Math.min(Math.max(t,2),400))}validate(t){return t.length!==this.resolution+1&&t.length,t}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}refreshBufferFromCurrentPixels(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const t=this.parent.groups.value.map(e=>e.instances.value.map(r=>r.pixelsForHistogram));this.parent.pool.exec((e,r,i,s,n)=>{let l=e.reduce((_,k)=>{const P=k.reduce((A,F)=>[...A,...F],[]);return[..._,...P]},[]).sort((_,k)=>_-k);const h=s/n;let d=r+h;const g=new Map;let m=0;for(;d!==!1;){const _=l.findIndex(A=>A>d),k=l.slice(0,_).length;g.set(d-h/2,k),m+=k,l=l.slice(_);const P=d+h;d=P<i?P:!1}return{result:g,resultCount:m}},[t,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(e=>{this.buffer=e.result,this.bufferPixelsCount=e.resultCount,this.recalculateWithCurrentSetting()})}}recalculateHistogram(){if(this.parent.minmax.value!==void 0&&this.parent.minmax.distanceInCelsius!==void 0){let t=Array.from(this.buffer.keys()),e=Array.from(this.buffer.values());const r=this.parent.minmax.value,i=this.parent.minmax.distanceInCelsius/this.resolution,s=[];let n=0,o=r.min;for(;o<r.max;){const h=o,d=o+i,g=t.findIndex(P=>P>=d),_=e.slice(0,g).reduce((P,A)=>P+A,0),k=_/this.bufferPixelsCount;s.push({from:h,to:d,percentage:k,count:_}),n<_&&(n=_),t=t.slice(g),e=e.slice(g),o+=i}const l=s.map(h=>({...h,height:h.count/n*100}));this.value=l}}_getHistorgramFromAllGroups(){if(this.parent.minmax.value===void 0||this.parent.groups.value.length,this.parent.minmax.value===void 0||this.parent.groups.value.length===0)return[];{const t=this.parent.groups.value.reduce((d,g)=>{const m=g.instances.value.reduce((_,k)=>(_=[..._,...k.pixels],_),[]);return[...d,...m]},[]),e=[],r=this.resolution,s=(this.parent.minmax.value.max-this.parent.minmax.value.min)/r;for(let d=0;d<r;d++){const g=s*d+this.parent.minmax.value.min,m=g+s;e.push([g,m])}const n=[];let o=t.length;for(const d of e){const g=t.filter(m=>m>=d[0]&&m<d[1]).length;o=o+g,n.push({from:d[0],to:d[1],count:g})}const l=n.map(d=>({...d,percentage:d.count/o*100})),h=Math.max(...l.map(d=>d.percentage));return l.map(d=>({...d,height:d.percentage/h*100}))}}},xc=class extends ft{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},_c=class extends Zn{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},kc=class{constructor(t){this.registry=t,this.requests=new Map}get requestArray(){return Array.from(this.requests.values())}request(t,e,r){var i;if(this.requests.has(t))r&&((i=this.requests.get(t))==null||i.callbacks.push(r));else{const s={thermalUrl:t,visibleUrl:e,callbacks:r?[r]:[]};this.requests.set(t,s)}this.timer===void 0&&(this.timer=setTimeout(this.resolve.bind(this),0))}async resolve(){const t=await Promise.all(this.requestArray.map(async e=>{const r={request:e};if(this.registry.manager.isUrlRegistered(e.thermalUrl))r.output=this.registry.manager.sourcesByUrl[e.thermalUrl];else try{const i=await er.fromUrlWithErrors(e.thermalUrl,e.visibleUrl);i&&(r.output=i)}catch(i){i instanceof Error&&(r.output=i.message)}return r})).then(e=>e.map(r=>(r.output instanceof er?r.request.callbacks.forEach(i=>{i(r.output),this.registry.manager.registerSource(r.output)}):r.request.callbacks.forEach(i=>{r.output instanceof er||i(void 0,r.output??"Něco se pokazilo")}),r.output)));return clearTimeout(this.timer),this.timer=void 0,this.registry.postLoadedProcessing(),t}},bn=class ys extends EventTarget{constructor(e,r,i){super(),this.group=e,this.url=r,this.visibleUrl=i}static single(e,r,i){return new ys(e,r,i)}static multiple(e,r){return r.map(i=>new ys(e,i.thermalUrl,i.visibleUrl))}async fetch(){if(this.group.registry.manager.isUrlRegistered(this.url))return{file:this.group.registry.manager.sourcesByUrl[this.url],request:this};const e=await er.fromUrl(this.url,this.visibleUrl);if(e){if(e!==null)return{file:e,request:this}}else return null;return null}},$c=class{constructor(t){this.registry=t,this._requests=[]}get requests(){return this._requests}get loading(){return this.registry.loading.value}requestFile(t,e,r){if(this.loading===!0){console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);return}this._requests.push(bn.single(t,e,r))}requestFiles(t,e){if(this.loading===!0){console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);return}this._requests=[...this._requests,...bn.multiple(t,e)]}async resolveQuery(){this.loading;const t=await Promise.all(this._requests.map(r=>r.fetch())),e={};for(const r of t)if(r!==null){const i=this.registry.manager.registerSource(r.file);r.request.group.id in e?e[r.request.group.id].push(i):e[r.request.group.id]=[i]}for(const r in e){const i=this.registry.groups.map.get(r);i==null||i.instances.instantiateSources(e[r])}return this._requests=[],this.registry.groups.value}},Oc=class extends Rr{constructor(t,e,r){super(),this.id=t,this.manager=e,this.hash=Math.random(),this.loader=new $c(this),this.groups=new yc(this,[]),this.fetcher=new kc(this),this.opacity=new fc(this,1),this.minmax=new _c(this,void 0),this.loading=new xc(this,!1),this.range=new pc(this,void 0),this.histogram=new wc(this,[]),this.palette=this.manager.palette,r&&r.histogramResolution!==void 0&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}forEveryGroup(t){this.groups.value.forEach(t)}forEveryInstance(t){this.forEveryGroup(e=>e.instances.forEveryInstance(t))}async loadFiles(t){this.reset(),Object.entries(t).forEach(([e,r])=>{const i=this.groups.addOrGetGroup(e);r.forEach(s=>{this.loader.requestFile(i,s.thermalUrl,s.visibleUrl)})}),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async loadOneFile(t,e){this.reset();const r=this.groups.addOrGetGroup(e);this.loader.requestFile(r,t.thermalUrl,t.visibleUrl),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async processDroppedFiles(t,e){this.reset(),this.loading.markAsLoading(),this.removeAllChildren();const r=await Promise.all(t.map(s=>bs.fromFile(s))).then(s=>s.filter(n=>n!==null));r.forEach(s=>this.manager.registerSource(s)),this.groups.addOrGetGroup(e).instances.instantiateSources(r),this.postLoadedProcessing()}enqueueFile(t,e,r){const i=this.groups.addOrGetGroup(t);this.loader.requestFile(i,e,r)}async loadQuery(){this.reset(),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}postLoadedProcessing(){console.log("postprocessing"),this.forEveryGroup(t=>t.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.refreshBufferFromCurrentPixels(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(t=>t.reset()),this.loader.loading===!1&&(this.opacity.reset(),this.minmax.reset())}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Ac=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Pc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Ec=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Cc=Ac(),Jn={iron:{pixels:Ec,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Pc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Cc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Tc=class extends ft{get availablePalettes(){return Jn}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},eo=class extends Rr{constructor(t){super(),this.registries={},this.palette=new Tc(this,"jet"),this._sourcesByUrl={},this.isUrlRegistered=e=>Object.keys(this.sourcesByUrl).includes(e),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(t){Object.values(this.registries).forEach(e=>t(e))}addOrGetRegistry(t,e){return this.registries[t]===void 0&&(this.registries[t]=new Oc(t,this,e)),this.registries[t]}removeRegistry(t){this.registries[t]!==void 0&&(this.registries[t].destroySelfAndBelow(),delete this.registries[t])}get sourcesByUrl(){return this._sourcesByUrl}getSourcesArray(){return Object.values(this.sourcesByUrl)}getRegisteredUrls(){return Object.keys(this.sourcesByUrl)}registerSource(t){return this.getRegisteredUrls().includes(t.url)?this.sourcesByUrl[t.url]:(this.sourcesByUrl[t.url]=t,t)}},Ss=class{};Ss.inputToDate=t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t};var ut=class Dt extends Ss{static humanRangeDates(e,r){return e=Dt.inputToDate(e),r=Dt.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Dt.humanDate(e):[Dt.humanDate(e),Dt.humanDate(r)].join(" - ")}static human(e){return`${Dt.humanDate(e)} ${Dt.humanTime(e,!0)} `}};ut.isoDate=t=>(t=ut.inputToDate(t),Ts(t,{representation:"date"}));ut.isoTime=t=>(t=ut.inputToDate(t),Ts(t,{representation:"time"}));ut.isoComplete=t=>(t=ut.inputToDate(t),Ts(t));ut.humanTime=(t,e=!1)=>(t=ut.inputToDate(t),Kn(t,e?"HH:mm:ss":"HH:mm"));ut.humanDate=(t,e=!1)=>(t=ut.inputToDate(t),Kn(t,e?"d. M.":"d. M. yyyy"));var Sc=ut,tr=class extends Ss{};tr.down=(t,e)=>e==="jednu hodinu"?tc(t):e==="jeden den"?ms(t):e==="jeden týden"?sr(t):e==="jeden měsíc"?Ja(t):Gn(t);tr.up=(t,e)=>e==="jednu hodinu"?tl(t):e==="jeden den"?Ka(t):e==="jeden týden"?rl(t):e==="jeden měsíc"?Za(t):el(t);tr.pick=(t,e)=>[tr.down(t,e),tr.up(t,e)];tr.modify=(t,e,r)=>{switch(r){case"jednu hodinu":return qa(t,e);case"jeden den":return hn(t,e);case"jeden týden":return hn(t,e*7);case"jeden měsíc":return In(t,e);case"jeden rok":return Xa(t,e)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let to=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pi=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,o)),this.unsubscribe=o},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new to(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mc=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dc=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Pr=class extends Mc{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=o=>{const l=o.composedPath()[0];o.context===this.context&&l!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,l,o.subscribe))},this.onProviderRequest=o=>{const l=o.composedPath()[0];if(o.context!==this.context||l===this.host)return;const h=new Set;for(const[d,{consumerHost:g}]of this.subscriptions)h.has(d)||(h.add(d),g.dispatchEvent(new to(this.context,d,!0)));o.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Dc(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lc({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Pr(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(o=>{i.set(o,new Pr(o,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const o=new WeakMap;n={get(){return o.get(this)},set(l){i.get(this).setValue(l),o.set(this,l)},configurable:!0,enumerable:!0}}else{const o=s.set;n={...s,set(l){i.get(this).setValue(l),o==null||o.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=globalThis,Ms=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ds=Symbol(),vn=new WeakMap;let ro=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Ds)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ms&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=vn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&vn.set(r,e))}return e}toString(){return this.cssText}};const Rc=t=>new ro(typeof t=="string"?t:t+"",void 0,Ds),Ie=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new ro(r,t,Ds)},Fc=(t,e)=>{if(Ms)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=ei.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},yn=Ms?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Rc(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jc,defineProperty:Bc,getOwnPropertyDescriptor:Nc,getOwnPropertyNames:Hc,getOwnPropertySymbols:Wc,getPrototypeOf:Uc}=Object,Rt=globalThis,wn=Rt.trustedTypes,Vc=wn?wn.emptyScript:"",ns=Rt.reactiveElementPolyfillSupport,$r=(t,e)=>t,ri={toAttribute(t,e){switch(e){case Boolean:t=t?Vc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ls=(t,e)=>!jc(t,e),xn={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ls};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Rt.litPropertyMetadata??(Rt.litPropertyMetadata=new WeakMap);class Jt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=xn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&Bc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Nc(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xn}static _$Ei(){if(this.hasOwnProperty($r("elementProperties")))return;const e=Uc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r("properties"))){const r=this.properties,i=[...Hc(r),...Wc(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(yn(s))}else e!==void 0&&r.push(yn(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ri).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:ri;this._$Em=s,this[s]=l.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ls)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[$r("elementProperties")]=new Map,Jt[$r("finalized")]=new Map,ns==null||ns({ReactiveElement:Jt}),(Rt.reactiveElementVersions??(Rt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=globalThis,ii=Or.trustedTypes,_n=ii?ii.createPolicy("lit-html",{createHTML:t=>t}):void 0,io="$lit$",Lt=`lit$${Math.random().toFixed(9).slice(2)}$`,so="?"+Lt,Ic=`<${so}>`,It=document,Er=()=>It.createComment(""),Cr=t=>t===null||typeof t!="object"&&typeof t!="function",no=Array.isArray,qc=t=>no(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",os=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kn=/-->/g,$n=/>/g,Wt=RegExp(`>|${os}(?:([^\\s"'>=/]+)(${os}*=${os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),On=/'/g,An=/"/g,oo=/^(?:script|style|textarea|title)$/i,Yc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),z=Yc(1),nr=Symbol.for("lit-noChange"),$e=Symbol.for("lit-nothing"),Pn=new WeakMap,Vt=It.createTreeWalker(It,129);function ao(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _n!==void 0?_n.createHTML(e):e}const zc=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",o=_r;for(let l=0;l<r;l++){const h=t[l];let d,g,m=-1,_=0;for(;_<h.length&&(o.lastIndex=_,g=o.exec(h),g!==null);)_=o.lastIndex,o===_r?g[1]==="!--"?o=kn:g[1]!==void 0?o=$n:g[2]!==void 0?(oo.test(g[2])&&(s=RegExp("</"+g[2],"g")),o=Wt):g[3]!==void 0&&(o=Wt):o===Wt?g[0]===">"?(o=s??_r,m=-1):g[1]===void 0?m=-2:(m=o.lastIndex-g[2].length,d=g[1],o=g[3]===void 0?Wt:g[3]==='"'?An:On):o===An||o===On?o=Wt:o===kn||o===$n?o=_r:(o=Wt,s=void 0);const k=o===Wt&&t[l+1].startsWith("/>")?" ":"";n+=o===_r?h+Ic:m>=0?(i.push(d),h.slice(0,m)+io+h.slice(m)+Lt+k):h+Lt+(m===-2?l:k)}return[ao(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class Tr{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,h=this.parts,[d,g]=zc(e,r);if(this.el=Tr.createElement(d,i),Vt.currentNode=this.el.content,r===2){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(s=Vt.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const m of s.getAttributeNames())if(m.endsWith(io)){const _=g[o++],k=s.getAttribute(m).split(Lt),P=/([.?@])?(.*)/.exec(_);h.push({type:1,index:n,name:P[2],strings:k,ctor:P[1]==="."?Xc:P[1]==="?"?Qc:P[1]==="@"?Kc:mi}),s.removeAttribute(m)}else m.startsWith(Lt)&&(h.push({type:6,index:n}),s.removeAttribute(m));if(oo.test(s.tagName)){const m=s.textContent.split(Lt),_=m.length-1;if(_>0){s.textContent=ii?ii.emptyScript:"";for(let k=0;k<_;k++)s.append(m[k],Er()),Vt.nextNode(),h.push({type:2,index:++n});s.append(m[_],Er())}}}else if(s.nodeType===8)if(s.data===so)h.push({type:2,index:n});else{let m=-1;for(;(m=s.data.indexOf(Lt,m+1))!==-1;)h.push({type:7,index:n}),m+=Lt.length-1}n++}}static createElement(e,r){const i=It.createElement("template");return i.innerHTML=e,i}}function or(t,e,r=t,i){var o,l;if(e===nr)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=Cr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=or(t,s._$AS(t,e.values),s,i)),e}class Gc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??It).importNode(r,!0);Vt.currentNode=s;let n=Vt.nextNode(),o=0,l=0,h=i[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new Fr(n,n.nextSibling,this,e):h.type===1?d=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(d=new Zc(n,this,e)),this._$AV.push(d),h=i[++l]}o!==(h==null?void 0:h.index)&&(n=Vt.nextNode(),o++)}return Vt.currentNode=It,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Fr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=$e,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=or(this,e,r),Cr(e)?e===$e||e==null||e===""?(this._$AH!==$e&&this._$AR(),this._$AH=$e):e!==this._$AH&&e!==nr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==$e&&Cr(this._$AH)?this._$AA.nextSibling.data=e:this.T(It.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Tr.createElement(ao(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new Gc(s,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(e){let r=Pn.get(e.strings);return r===void 0&&Pn.set(e.strings,r=new Tr(e)),r}k(e){no(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Fr(this.S(Er()),this.S(Er()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class mi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=$e,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$e}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=or(this,e,r,0),o=!Cr(e)||e!==this._$AH&&e!==nr,o&&(this._$AH=e);else{const l=e;let h,d;for(e=n[0],h=0;h<n.length-1;h++)d=or(this,l[i+h],r,h),d===nr&&(d=this._$AH[h]),o||(o=!Cr(d)||d!==this._$AH[h]),d===$e?e=$e:e!==$e&&(e+=(d??"")+n[h+1]),this._$AH[h]=d}o&&!s&&this.j(e)}j(e){e===$e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xc extends mi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$e?void 0:e}}class Qc extends mi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$e)}}class Kc extends mi{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=or(this,e,r,0)??$e)===nr)return;const i=this._$AH,s=e===$e&&i!==$e||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==$e&&(i===$e||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Zc{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){or(this,e)}}const as=Or.litHtmlPolyfillSupport;as==null||as(Tr,Fr),(Or.litHtmlVersions??(Or.litHtmlVersions=[])).push("3.1.4");const Jc=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Fr(e.insertBefore(Er(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bt=class extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return nr}};var jn;bt._$litElement$=!0,bt.finalized=!0,(jn=globalThis.litElementHydrateSupport)==null||jn.call(globalThis,{LitElement:bt});const ls=globalThis.litElementPolyfillSupport;ls==null||ls({LitElement:bt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ls},tu=(t=eu,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(l){const h=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,h,t)},init(l){return l!==void 0&&this.P(o,void 0,t),l}}}if(i==="setter"){const{name:o}=r;return function(l){const h=this[o];e.call(this,l),this.requestUpdate(o,h,t)}}throw Error("Unsupported decorator location: "+i)};function Ae(t){return(e,r)=>typeof r=="object"?tu(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ue(t){return Ae({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ru=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gi(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return ru(e,r,{get(){var h;const o=(h=this.renderRoot)==null?void 0:h.querySelector(n),l=(o==null?void 0:o.assignedElements(t))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}class lo extends bt{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),Ps.version,this.hash].join("__")}log(...e){console.log(this.identificator,...e)}}const co="manager",uo="registry",ho="group",fo="group";var iu=Object.defineProperty,su=Object.getOwnPropertyDescriptor,po=(t,e,r,i)=>{for(var s=i>1?void 0:i?su(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&iu(e,r,s),s};let si=class extends lo{constructor(){super(...arguments),this.manager=new eo}getClassName(){return"ThermalManagerElement"}render(){return z`
            <slot></slot>
        `}};si.styles=Ie`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;po([Lc({context:co})],si.prototype,"manager",2);si=po([Me("thermal-manager")],si);class Rs extends lo{constructor(){super(...arguments),this._injectedManager=new pi(this,{context:co,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new eo}}var nu=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,mo=(t,e,r,i)=>{for(var s=i>1?void 0:i?ou(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&nu(e,r,s),s};let Sr=class extends Rs{constructor(){super(...arguments),this.uuid=Sr.DEFAULT_NAME,this.provider=new Pr(this,{context:uo,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const t=this.manager.addOrGetRegistry(this.uuid);this.provider.setValue(t,!0)}render(){return z`
            <slot></slot>
        `}};Sr.DEFAULT_NAME="default_registry";mo([Ae({type:String,attribute:!0,reflect:!0})],Sr.prototype,"uuid",2);Sr=mo([Me("thermal-registry")],Sr);var au=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,go=(t,e,r,i)=>{for(var s=i>1?void 0:i?lu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&au(e,r,s),s};class xt extends Rs{constructor(){super(...arguments),this._injectedRegistry=new pi(this,{context:uo,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}go([Ue()],xt.prototype,"_registry",2);go([Ue()],xt.prototype,"registry",1);var cu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,bi=(t,e,r,i)=>{for(var s=i>1?void 0:i?uu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&cu(e,r,s),s};let qt=class extends xt{constructor(){super(...arguments),this.uuid=qt.DEFAULT_NAME,this.provider=new Pr(this,{context:ho,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.provider.setValue(this.group,!0)}updated(t){t.has("name")&&this.log(t,this.name)}render(){return z`
            <slot></slot>
        `}};qt.DEFAULT_NAME="default_group";bi([Ae({type:String,attribute:!0,reflect:!0})],qt.prototype,"uuid",2);bi([Ae({type:String,attribute:!0,reflect:!0})],qt.prototype,"name",2);bi([Ae({type:String,attribute:!0,reflect:!0})],qt.prototype,"description",2);qt=bi([Me("thermal-group")],qt);class Fs extends xt{constructor(){super(...arguments),this._injectedGroup=new pi(this,{context:ho,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const du={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fu=t=>(...e)=>({_$litDirective$:t,values:e});class pu{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),Ar(s,e);return!0},ni=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},bo=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),bu(e)}};function mu(t){this._$AN!==void 0?(ni(this),this._$AM=t,bo(this)):this._$AM=t}function gu(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)Ar(i[n],!1),ni(i[n]);else i!=null&&(Ar(i,!1),ni(i));else Ar(this,t)}const bu=t=>{t.type==du.CHILD&&(t._$AP??(t._$AP=gu),t._$AQ??(t._$AQ=mu))};class vu extends pu{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),bo(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Ar(this,e),ni(this))}setValue(e){if(hu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=()=>new yu;class yu{}const cs=new WeakMap,Qe=fu(class extends vu{render(t){return $e}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),$e}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=cs.get(e);r===void 0&&(r=new WeakMap,cs.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=cs.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var wu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,Pt=(t,e,r,i)=>{for(var s=i>1?void 0:i?xu(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&wu(e,r,s),s};let ht=class extends Fs{constructor(){super(),this.canvasContainer=Xe(),this.errors=[],this.provider=new Pr(this,{context:fo,initialValue:void 0})}getClassName(){return"FileContextElement"}onFileChanged(t,e){console.log(t,e)}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}enqueueInTheRegistry(){if(this.thermal){const t=(e,r)=>{e?(this.log("file loaded",this.thermal),this.provider.setValue(e),this.file=e,this.errors=[]):r&&(this.errors=r.split("+|+"))};this.group.instances.enqueueAdd(this.thermal,this.visible,t.bind(this))}}willUpdate(t){super.willUpdate(t),t.has("thermal")||t.has("visible"),t.has("file")&&this.file&&this.file.unmountFromDom()}update(t){var e,r;if(super.update(t),t.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(e=this.file)==null||e.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return z`

            
        ${this.barElements.length>=0?z`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?z`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?z`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${Qe(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?z`
                <div class="errors">
                    <div class="wrapper">

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <div>
                        File loading error
                    </div>

                    <div class="url">
                        ${this.thermal}
                    </div>

                        <thermal-dialog-component label="Loading error">

                            <thermal-button slot="invoker">Info</thermal-button>

                            <div slot="content">
                            
                                <dl>
                                    <dt>URL:</dt>
                                    <dd>${this.thermal}</dd>
                                    <dt>Errors:</dt>
                                    <ul>
                                    ${this.errors.map(t=>z`<li>${t}</li>`)}
                                    </ul>
                                </dl>
                            
                            </div>
                        
                        
                        </thermal-dialog-component>

                    </div>
                </div>    
            `:""}
            <slot></slot>

            </div>
        </div>
        
        `}};ht.styles=Ie`

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .container {

            box-sizing: border-box;
            width: 100%;
            aspect-ratio: 4 / 3;
        
            margin: 0;
            padding: 0;
        
            position: relative;

            background: var( --thermal-slate-light );

            color: var( --thermal-foreground );

            font-size: var( --thermal-fs );

        }

        .errors {
            box-sizing: border-box;
            padding: var( --thermal-gap );
            width: 100%;
            height: 100%;
            margin: 0;
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );

            .wrapper {
            
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: calc( var( --thermal-gap ) * 0.5 );

                box-sizing: border-box;
                width: 100%;
                height: 100%;

                border: 2px dashed var( --thermal-slate-dark );
                border-radius: calc( var( --thermal-radius ) * 2 );

                padding: var( --thermal-gap );

            }

            .icon {
                width: 1.5rem;
            }

            .url {
                font-size: small;
                color: var( --thermal-slate-dark );
            }

            .error-button {
                margin: 0;
                padding: 0;
                background: transparent;
                min-width: 2rem;
                border: 0;
                cursor: pointer;
                font-size: small;
                color: var( --thermal-slate-dark );
                border-bottom: 1px dotted var( --thermal-slate-dark );
            }        

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

            /* HTML: <div class="loader"></div> */

        .placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var( --thermal-slate );
        }
        .loader {
        width: calc( var( --thermal-gap ) * 2);
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(var(--thermal-background) calc(50% - 10px),#0000 0 calc(50% + 10px),var(--thermal-background) 0);
        background: 
            var(--c) 0%   100%,
            var(--c) 50%  100%,
            var(--c) 100% 100%;
        background-size: 20% calc(200% + 20px);
        animation:l4 1s infinite linear;
        }
        @keyframes l4 {
            33%  {background-position: 0% 50%,50% 100%,100% 100%}
            50%  {background-position: 0%  0%,50%  50%,100% 100%}
            66%  {background-position: 0%  0%,50%   0%,100%  50%}
            100% {background-position: 0%  0%,50%   0%,100%   0%}
        }
    
    `;Pt([Ae({type:String,reflect:!0})],ht.prototype,"thermal",2);Pt([Ae({type:String,reflect:!0})],ht.prototype,"visible",2);Pt([Ae({type:Object})],ht.prototype,"file",2);Pt([Ue()],ht.prototype,"errors",2);Pt([gi({slot:"bar",flatten:!0})],ht.prototype,"barItems",2);Pt([Ue()],ht.prototype,"provider",2);Pt([gi({slot:"bar",flatten:!0})],ht.prototype,"barElements",2);Pt([gi({slot:"pre",flatten:!0})],ht.prototype,"pre",2);ht=Pt([Me("thermal-image")],ht);var _u=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,vo=(t,e,r,i)=>{for(var s=i>1?void 0:i?ku(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&_u(e,r,s),s};let oi=class extends bt{constructor(){super(),this.dialogRef=Xe(),this.closeButtonRef=Xe(),this.invokerRef=Xe()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return z`
            <slot name="invoker" ${Qe(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Qe(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Qe(this.closeButtonRef)} @click=${this.setClose}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                    </button>
                
                
                </header>
                	
                <div class="dialog-content">
                    <slot name="content"></slot>
                </div>

                <div class="dialog-footer">
                    <slot name="button"></slot>
                    <thermal-button variant="foreground" @click=${this.setClose}>Close</thermal-button>
                </div>
                
            
            </dialog>
        `}};oi.styles=Ie`

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: 1px;
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(10px);
            }

            min-width: 150px;

            @media ( min-width: 300px ) {
                min-width: 250px;
            }

            @media ( min-width: 600px ) {
                min-width: 450px;
                max-width: 700px;
            }
        }

        .dialog-header {
            display: flex;
            flex-wrap: no-wrap;
            justify-content: space-between; 
        }

        .dialog-title {
            margin: 0;
            padding: 0;
        }

        .dialog-content {
            padding: var( --thermal-gap ) 0;
        }

        .dialog-footer {

            width: 100%;
            display: flex;
            justify-content: flex-end;
            gap: 10px;

        }

        

        .dialog-close {

            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var( --thermal-foreground );
            cursor: pointer;

            width: calc( var( --thermal-gap ) * 1.5);

            &:hover {
                color: var( --thermal-primary );
            }
        
        }

        
    
    `;vo([Ae({type:String,reflect:!0})],oi.prototype,"label",2);oi=vo([Me("thermal-dialog")],oi);var $u=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,js=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ou(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&$u(e,r,s),s};let Yt=class extends bt{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return z`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Yt.VARIANTS=["slate","primary","foreground","background"];Yt.styles=Ie`

    button {
        
        cursor: pointer;
    
        margin: 0;
        padding: calc( var( --thermal-gap ) * .3 ) calc( var( --thermal-gap ) * .5 );
        
        background: var( --thermal-slate-light );
        color: var( --thermal-foreground );
        
        border: 1px solid var( --thermal-slate );
        border-radius: var( --thermal-radius );

        transition: all .4 ease-in-out;

        box-shadow: var( --thermal-shadow-none );
        

        &:hover {
            box-shadow: var( --thermal-shadow );
        }

        &.slate {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
        }
        &.primary {
            background: var( --thermal-primary );
            color: white;
        }
        &.foreground {
            background: var( --thermal-foreground );
            color: var( --thermal-background );
        }
        &.background {
            background: var( --thermal-background );
            color: var( --thermal-foreground );
        }
    }
    
    `;js([Ae({type:String,converter:{fromAttribute:t=>Yt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Yt.prototype,"variant",2);js([Ae({type:String})],Yt.prototype,"size",2);Yt=js([Me("thermal-button")],Yt);const ar=Math.min,$t=Math.max,ai=Math.round,Ft=t=>({x:t,y:t}),Au={left:"right",right:"left",bottom:"top",top:"bottom"},Pu={start:"end",end:"start"};function En(t,e,r){return $t(t,ar(e,r))}function jr(t,e){return typeof t=="function"?t(e):t}function Ot(t){return t.split("-")[0]}function vi(t){return t.split("-")[1]}function yo(t){return t==="x"?"y":"x"}function wo(t){return t==="y"?"height":"width"}function Br(t){return["top","bottom"].includes(Ot(t))?"y":"x"}function xo(t){return yo(Br(t))}function Eu(t,e,r){r===void 0&&(r=!1);const i=vi(t),s=xo(t),n=wo(s);let o=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(o=li(o)),[o,li(o)]}function Cu(t){const e=li(t);return[ws(t),e,ws(e)]}function ws(t){return t.replace(/start|end/g,e=>Pu[e])}function Tu(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:o;default:return[]}}function Su(t,e,r,i){const s=vi(t);let n=Tu(Ot(t),r==="start",i);return s&&(n=n.map(o=>o+"-"+s),e&&(n=n.concat(n.map(ws)))),n}function li(t){return t.replace(/left|right|bottom|top/g,e=>Au[e])}function Mu(t){return{top:0,right:0,bottom:0,left:0,...t}}function _o(t){return typeof t!="number"?Mu(t):{top:t,right:t,bottom:t,left:t}}function lr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Cn(t,e,r){let{reference:i,floating:s}=t;const n=Br(e),o=xo(e),l=wo(o),h=Ot(e),d=n==="y",g=i.x+i.width/2-s.width/2,m=i.y+i.height/2-s.height/2,_=i[l]/2-s[l]/2;let k;switch(h){case"top":k={x:g,y:i.y-s.height};break;case"bottom":k={x:g,y:i.y+i.height};break;case"right":k={x:i.x+i.width,y:m};break;case"left":k={x:i.x-s.width,y:m};break;default:k={x:i.x,y:i.y}}switch(vi(e)){case"start":k[o]-=_*(r&&d?-1:1);break;case"end":k[o]+=_*(r&&d?-1:1);break}return k}const Du=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:o}=r,l=n.filter(Boolean),h=await(o.isRTL==null?void 0:o.isRTL(e));let d=await o.getElementRects({reference:t,floating:e,strategy:s}),{x:g,y:m}=Cn(d,i,h),_=i,k={},P=0;for(let A=0;A<l.length;A++){const{name:F,fn:de}=l[A],{x:Q,y:se,data:ye,reset:be}=await de({x:g,y:m,initialPlacement:i,placement:_,strategy:s,middlewareData:k,rects:d,platform:o,elements:{reference:t,floating:e}});g=Q??g,m=se??m,k={...k,[F]:{...k[F],...ye}},be&&P<=50&&(P++,typeof be=="object"&&(be.placement&&(_=be.placement),be.rects&&(d=be.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:s}):be.rects),{x:g,y:m}=Cn(d,_,h)),A=-1)}return{x:g,y:m,placement:_,strategy:s,middlewareData:k}};async function ko(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:o,elements:l,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:g="viewport",elementContext:m="floating",altBoundary:_=!1,padding:k=0}=jr(e,t),P=_o(k),F=l[_?m==="floating"?"reference":"floating":m],de=lr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(F)))==null||r?F:F.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:g,strategy:h})),Q=m==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,se=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),ye=await(n.isElement==null?void 0:n.isElement(se))?await(n.getScale==null?void 0:n.getScale(se))||{x:1,y:1}:{x:1,y:1},be=lr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:Q,offsetParent:se,strategy:h}):Q);return{top:(de.top-be.top+P.top)/ye.y,bottom:(be.bottom-de.bottom+P.bottom)/ye.y,left:(de.left-be.left+P.left)/ye.x,right:(be.right-de.right+P.right)/ye.x}}const Lu=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:o,initialPlacement:l,platform:h,elements:d}=e,{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:_,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:A=!0,...F}=jr(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const de=Ot(s),Q=Ot(l)===l,se=await(h.isRTL==null?void 0:h.isRTL(d.floating)),ye=_||(Q||!A?[li(l)]:Cu(l));!_&&P!=="none"&&ye.push(...Su(l,A,P,se));const be=[l,...ye],je=await ko(e,F),U=[];let we=((i=n.flip)==null?void 0:i.overflows)||[];if(g&&U.push(je[de]),m){const ce=Eu(s,o,se);U.push(je[ce[0]],je[ce[1]])}if(we=[...we,{placement:s,overflows:U}],!U.every(ce=>ce<=0)){var De,Oe;const ce=(((De=n.flip)==null?void 0:De.index)||0)+1,Pe=be[ce];if(Pe)return{data:{index:ce,overflows:we},reset:{placement:Pe}};let ue=(Oe=we.filter(f=>f.overflows[0]<=0).sort((f,v)=>f.overflows[1]-v.overflows[1])[0])==null?void 0:Oe.placement;if(!ue)switch(k){case"bestFit":{var Ce;const f=(Ce=we.map(v=>[v.placement,v.overflows.filter(j=>j>0).reduce((j,ne)=>j+ne,0)]).sort((v,j)=>v[1]-j[1])[0])==null?void 0:Ce[0];f&&(ue=f);break}case"initialPlacement":ue=l;break}if(s!==ue)return{reset:{placement:ue}}}return{}}}};function $o(t){const e=ar(...t.map(n=>n.left)),r=ar(...t.map(n=>n.top)),i=$t(...t.map(n=>n.right)),s=$t(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function Ru(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>lr($o(s)))}const Fu=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:o}=e,{padding:l=2,x:h,y:d}=jr(t,e),g=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),m=Ru(g),_=lr($o(g)),k=_o(l);function P(){if(m.length===2&&m[0].left>m[1].right&&h!=null&&d!=null)return m.find(F=>h>F.left-k.left&&h<F.right+k.right&&d>F.top-k.top&&d<F.bottom+k.bottom)||_;if(m.length>=2){if(Br(r)==="y"){const Oe=m[0],Ce=m[m.length-1],ce=Ot(r)==="top",Pe=Oe.top,ue=Ce.bottom,f=ce?Oe.left:Ce.left,v=ce?Oe.right:Ce.right,j=v-f,ne=ue-Pe;return{top:Pe,bottom:ue,left:f,right:v,width:j,height:ne,x:f,y:Pe}}const F=Ot(r)==="left",de=$t(...m.map(Oe=>Oe.right)),Q=ar(...m.map(Oe=>Oe.left)),se=m.filter(Oe=>F?Oe.left===Q:Oe.right===de),ye=se[0].top,be=se[se.length-1].bottom,je=Q,U=de,we=U-je,De=be-ye;return{top:ye,bottom:be,left:je,right:U,width:we,height:De,x:je,y:ye}}return _}const A=await n.getElementRects({reference:{getBoundingClientRect:P},floating:i.floating,strategy:o});return s.reference.x!==A.reference.x||s.reference.y!==A.reference.y||s.reference.width!==A.reference.width||s.reference.height!==A.reference.height?{reset:{rects:A}}:{}}}};async function ju(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Ot(r),l=vi(r),h=Br(r)==="y",d=["left","top"].includes(o)?-1:1,g=n&&h?-1:1,m=jr(e,t);let{mainAxis:_,crossAxis:k,alignmentAxis:P}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return l&&typeof P=="number"&&(k=l==="end"?P*-1:P),h?{x:k*g,y:_*d}:{x:_*d,y:k*g}}const Bu=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:o,middlewareData:l}=e,h=await ju(e,t);return o===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:n+h.y,data:{...h,placement:o}}}}},Nu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:l={fn:F=>{let{x:de,y:Q}=F;return{x:de,y:Q}}},...h}=jr(t,e),d={x:r,y:i},g=await ko(e,h),m=Br(Ot(s)),_=yo(m);let k=d[_],P=d[m];if(n){const F=_==="y"?"top":"left",de=_==="y"?"bottom":"right",Q=k+g[F],se=k-g[de];k=En(Q,k,se)}if(o){const F=m==="y"?"top":"left",de=m==="y"?"bottom":"right",Q=P+g[F],se=P-g[de];P=En(Q,P,se)}const A=l.fn({...e,[_]:k,[m]:P});return{...A,data:{x:A.x-r,y:A.y-i}}}}};function mr(t){return Oo(t)?(t.nodeName||"").toLowerCase():"#document"}function it(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Bt(t){var e;return(e=(Oo(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Oo(t){return t instanceof Node||t instanceof it(t).Node}function vt(t){return t instanceof Element||t instanceof it(t).Element}function yt(t){return t instanceof HTMLElement||t instanceof it(t).HTMLElement}function Tn(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof it(t).ShadowRoot}function Nr(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=dt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function Hu(t){return["table","td","th"].includes(mr(t))}function yi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Bs(t){const e=Ns(),r=dt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Wu(t){let e=jt(t);for(;yt(e)&&!cr(e);){if(yi(e))return null;if(Bs(e))return e;e=jt(e)}return null}function Ns(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cr(t){return["html","body","#document"].includes(mr(t))}function dt(t){return it(t).getComputedStyle(t)}function wi(t){return vt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function jt(t){if(mr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Tn(t)&&t.host||Bt(t);return Tn(e)?e.host:e}function Ao(t){const e=jt(t);return cr(e)?t.ownerDocument?t.ownerDocument.body:t.body:yt(e)&&Nr(e)?e:Ao(e)}function xs(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Ao(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),o=it(s);return n?e.concat(o,o.visualViewport||[],Nr(s)?s:[],o.frameElement&&r?xs(o.frameElement):[]):e.concat(s,xs(s,[],r))}function Po(t){const e=dt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=yt(t),n=s?t.offsetWidth:r,o=s?t.offsetHeight:i,l=ai(r)!==n||ai(i)!==o;return l&&(r=n,i=o),{width:r,height:i,$:l}}function Eo(t){return vt(t)?t:t.contextElement}function rr(t){const e=Eo(t);if(!yt(e))return Ft(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Po(e);let o=(n?ai(r.width):r.width)/i,l=(n?ai(r.height):r.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Uu=Ft(0);function Co(t){const e=it(t);return!Ns()||!e.visualViewport?Uu:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Vu(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==it(t)?!1:e}function Mr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Eo(t);let o=Ft(1);e&&(i?vt(i)&&(o=rr(i)):o=rr(t));const l=Vu(n,r,i)?Co(n):Ft(0);let h=(s.left+l.x)/o.x,d=(s.top+l.y)/o.y,g=s.width/o.x,m=s.height/o.y;if(n){const _=it(n),k=i&&vt(i)?it(i):i;let P=_,A=P.frameElement;for(;A&&i&&k!==P;){const F=rr(A),de=A.getBoundingClientRect(),Q=dt(A),se=de.left+(A.clientLeft+parseFloat(Q.paddingLeft))*F.x,ye=de.top+(A.clientTop+parseFloat(Q.paddingTop))*F.y;h*=F.x,d*=F.y,g*=F.x,m*=F.y,h+=se,d+=ye,P=it(A),A=P.frameElement}}return lr({width:g,height:m,x:h,y:d})}function Iu(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",o=Bt(i),l=e?yi(e.floating):!1;if(i===o||l&&n)return r;let h={scrollLeft:0,scrollTop:0},d=Ft(1);const g=Ft(0),m=yt(i);if((m||!m&&!n)&&((mr(i)!=="body"||Nr(o))&&(h=wi(i)),yt(i))){const _=Mr(i);d=rr(i),g.x=_.x+i.clientLeft,g.y=_.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-h.scrollLeft*d.x+g.x,y:r.y*d.y-h.scrollTop*d.y+g.y}}function qu(t){return Array.from(t.getClientRects())}function To(t){return Mr(Bt(t)).left+wi(t).scrollLeft}function Yu(t){const e=Bt(t),r=wi(t),i=t.ownerDocument.body,s=$t(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=$t(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-r.scrollLeft+To(t);const l=-r.scrollTop;return dt(i).direction==="rtl"&&(o+=$t(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:o,y:l}}function zu(t,e){const r=it(t),i=Bt(t),s=r.visualViewport;let n=i.clientWidth,o=i.clientHeight,l=0,h=0;if(s){n=s.width,o=s.height;const d=Ns();(!d||d&&e==="fixed")&&(l=s.offsetLeft,h=s.offsetTop)}return{width:n,height:o,x:l,y:h}}function Gu(t,e){const r=Mr(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=yt(t)?rr(t):Ft(1),o=t.clientWidth*n.x,l=t.clientHeight*n.y,h=s*n.x,d=i*n.y;return{width:o,height:l,x:h,y:d}}function Sn(t,e,r){let i;if(e==="viewport")i=zu(t,r);else if(e==="document")i=Yu(Bt(t));else if(vt(e))i=Gu(e,r);else{const s=Co(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return lr(i)}function So(t,e){const r=jt(t);return r===e||!vt(r)||cr(r)?!1:dt(r).position==="fixed"||So(r,e)}function Xu(t,e){const r=e.get(t);if(r)return r;let i=xs(t,[],!1).filter(l=>vt(l)&&mr(l)!=="body"),s=null;const n=dt(t).position==="fixed";let o=n?jt(t):t;for(;vt(o)&&!cr(o);){const l=dt(o),h=Bs(o);!h&&l.position==="fixed"&&(s=null),(n?!h&&!s:!h&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Nr(o)&&!h&&So(t,o))?i=i.filter(g=>g!==o):s=l,o=jt(o)}return e.set(t,i),i}function Qu(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const o=[...r==="clippingAncestors"?yi(e)?[]:Xu(e,this._c):[].concat(r),i],l=o[0],h=o.reduce((d,g)=>{const m=Sn(e,g,s);return d.top=$t(m.top,d.top),d.right=ar(m.right,d.right),d.bottom=ar(m.bottom,d.bottom),d.left=$t(m.left,d.left),d},Sn(e,l,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Ku(t){const{width:e,height:r}=Po(t);return{width:e,height:r}}function Zu(t,e,r){const i=yt(e),s=Bt(e),n=r==="fixed",o=Mr(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const h=Ft(0);if(i||!i&&!n)if((mr(e)!=="body"||Nr(s))&&(l=wi(e)),i){const m=Mr(e,!0,n,e);h.x=m.x+e.clientLeft,h.y=m.y+e.clientTop}else s&&(h.x=To(s));const d=o.left+l.scrollLeft-h.x,g=o.top+l.scrollTop-h.y;return{x:d,y:g,width:o.width,height:o.height}}function us(t){return dt(t).position==="static"}function Mn(t,e){return!yt(t)||dt(t).position==="fixed"?null:e?e(t):t.offsetParent}function Mo(t,e){const r=it(t);if(yi(t))return r;if(!yt(t)){let s=jt(t);for(;s&&!cr(s);){if(vt(s)&&!us(s))return s;s=jt(s)}return r}let i=Mn(t,e);for(;i&&Hu(i)&&us(i);)i=Mn(i,e);return i&&cr(i)&&us(i)&&!Bs(i)?r:i||Wu(t)||r}const Ju=async function(t){const e=this.getOffsetParent||Mo,r=this.getDimensions,i=await r(t.floating);return{reference:Zu(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function eh(t){return dt(t).direction==="rtl"}const th={convertOffsetParentRelativeRectToViewportRelativeRect:Iu,getDocumentElement:Bt,getClippingRect:Qu,getOffsetParent:Mo,getElementRects:Ju,getClientRects:qu,getDimensions:Ku,getScale:rr,isElement:vt,isRTL:eh},rh=Bu,ih=Nu,sh=Lu,nh=Fu,oh=(t,e,r)=>{const i=new Map,s={platform:th,...r},n={...s.platform,_c:i};return Du(t,e,{...s,platform:n})};var ah=Object.defineProperty,lh=Object.getOwnPropertyDescriptor,xi=(t,e,r,i)=>{for(var s=i>1?void 0:i?lh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ah(e,r,s),s};let ur=class extends bt{constructor(){super(...arguments),this.dropdownRef=Xe(),this.invokerRef=Xe(),this.optionsRef=Xe(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){oh(this.invokerRef.value,this.optionsRef.value,{middleware:[rh(2),sh(),nh(),ih()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,o;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(o=this.dropdownRef.value)==null||o.classList.remove("dropdown__open")))}render(){return z`

            <div class="dropdown" ${Qe(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Qe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?z`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:z`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Qe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};ur.styles=Ie`

        .dropdown {
            width: max-content;
        }

        .dropdown-invoker {
            width: max-content;
            display: flex;
        }

        .dropdown-invoker-wrapper {
            display: flex;
            align-items: center;
        }

        .dropdown-invoker-wrapper-icon {
            width: calc( var( --thermal-gap ) * .856 );
            line-height: 0;
            padding-left: calc( var( --thermal-gap ) * .5 );
        }

        .dropdown-options {

            z-index: 9999;

            width: max-content;
            /** position: absolute; */
            position: fixed;
            top: 0;
            left: 0;
            
            padding: calc( var( --thermal-gap ) * .5);

            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );

            background-color: var( --thermal-slate-light );

            box-shadow: var( --thermal-shadow );

            display: none;

            ::slotted( div:not(:last-child) ) {
                margin-bottom: calc( var( --thermal-gap ) * .5 );
            }

        }

        .dropdown-options__show {
            display: block;
        }

        .clicker {
            display: none;
        }

        .dropdown__open {
        
            .clicker {
                z-index: 9998;
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                //  backdrop-filter: blur(1px);
            }
        }
    
    `;xi([gi({slot:"option"})],ur.prototype,"_options",2);xi([Ae({type:String,reflect:!0})],ur.prototype,"open",2);xi([Ae({type:String,reflect:!0})],ur.prototype,"variant",2);ur=xi([Me("thermal-dropdown")],ur);var ch=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,_i=(t,e,r,i)=>{for(var s=i>1?void 0:i?uh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&ch(e,r,s),s};let hr=class extends bt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Xe(),this.contentRef=Xe(),this.rulerContentRef=Xe()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return z`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Qe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Qe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Qe(this.contentRef)}>

                    ${this.collapsed===!1?z`
                        <slot></slot>    
                    `:$e}
                
                </div>

            </div>

            ${this.collapsed?z`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:$e}
        
        `}};hr.styles=Ie`

        .container {
            // width: 100%;
        }


        .ruler {
            width: 100%;
        }

        .ruler-item {}

        .ruler-item__current {
            border: 1px solid transparent;
            height: 0;
            margin-top: -1px;
            content: "";
        }

        .ruler-item__content {
            border: 1px solid red;
            position: absolute;
            display: none;
        }


        .content {
            
            display: flex;
            gap: calc( 5px );
            width: max-content;

            align-items: center;
        
        }



        .icon {
            width: var( --thermal-gap );
            line-height: 0;
        }

    `;_i([Ue()],hr.prototype,"collapsed",2);_i([Ue()],hr.prototype,"lastContentWidth",2);_i([Ue()],hr.prototype,"drawerRef",2);hr=_i([Me("thermal-bar")],hr);var hh=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Do=(t,e,r,i)=>{for(var s=i>1?void 0:i?dh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&hh(e,r,s),s};let ci=class extends Rs{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.manager.palette.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(t){this.manager.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return z`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return z`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Jn).map(([t,e])=>z`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};ci.styles=Ie`

    .container {
        display: flex;
        width: content-width;
        gap: 5px;
    }

    .button {
        margin: 0;
        border: 0;
        line-height: 0;
    }

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        // height: .9em;
        border-radius: 1rem;
    }

    `;Do([Ae({type:String,reflect:!0,attribute:!0})],ci.prototype,"value",2);ci=Do([Me("thermal-palette")],ci);var fh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,Lo=(t,e,r,i)=>{for(var s=i>1?void 0:i?ph(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&fh(e,r,s),s};let ui=class extends xt{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return z`
            <input
                id="handler"
                class="thermal-opacity-handler"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value="${this.value}"
                @input="${this.onInputChange}"
            />
            <slot></slot>
        `}};ui.styles=Ie`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Lo([Ae({type:Number,reflect:!0,attribute:!0})],ui.prototype,"value",2);ui=Lo([Me("thermal-opacity")],ui);var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,bh=(t,e,r,i)=>{for(var s=i>1?void 0:i?gh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&mh(e,r,s),s};let Dn=class extends xt{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return z`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};Dn=bh([Me("thermal-range-auto")],Dn);var vh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,wh=(t,e,r,i)=>{for(var s=i>1?void 0:i?yh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&vh(e,r,s),s};let Ln=class extends xt{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return z`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};Ln=wh([Me("thermal-range-minmax")],Ln);var xh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,ki=(t,e,r,i)=>{for(var s=i>1?void 0:i?_h(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&xh(e,r,s),s};class Et extends Fs{constructor(){super(...arguments),this._injectedFile=new pi(this,{context:fo,subscribe:!0}),this.ready=!1}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}update(e){return super.update(e),!0}}ki([Ue()],Et.prototype,"_injectedFile",2);ki([Ue()],Et.prototype,"_file",2);ki([Ue()],Et.prototype,"file",1);ki([Ue()],Et.prototype,"ready",2);var kh=Object.defineProperty,$h=Object.getOwnPropertyDescriptor,Oh=(t,e,r,i)=>{for(var s=i>1?void 0:i?$h(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&kh(e,r,s),s};let _s=class extends Et{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}onFileLoaded(){}render(){var t,e,r,i,s,n,o,l,h,d,g,m,_;return z`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>
                        <tr>
                            <td>File name</td>
                            <td>${(t=this._injectedFile.value)==null?void 0:t.fileName}</td>
                        </tr>
                        <tr>
                            <td>Thermal file URL</td>
                            <td>${(e=this._injectedFile.value)==null?void 0:e.url}
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&z`
                                    <a href="${this._injectedFile.value.url}" target="_blank" class="download">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>


                                    </a>
                                `}
                            </td>
                        </tr>
                        <tr>
                            <td>Visible file URL</td>
                            <td>${((i=this._injectedFile.value)==null?void 0:i.visibleUrl)??"-"}
                            ${((s=this._injectedFile.value)==null?void 0:s.visibleUrl)&&z`
                                <a href="${this._injectedFile.value.visibleUrl}" target="_blank" class="download">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                    </svg>


                                </a>
                            `}
                            </td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>${((n=this._injectedFile.value)==null?void 0:n.timestamp)&&Sc.human(this._injectedFile.value.timestamp)}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>${(o=this._injectedFile.value)==null?void 0:o.width} x ${(l=this._injectedFile.value)==null?void 0:l.height} px <small>(${(h=this._injectedFile.value)==null?void 0:h.pixels.length} pixels)</small></td>
                        </tr>
                        <tr>
                            <td>Signature</td>
                            <td>${(d=this._injectedFile.value)==null?void 0:d.signature}</td>
                        </tr>
                        <tr>
                            <td>Frames</td>
                            <td>${(g=this._injectedFile.value)==null?void 0:g.frames.length}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>${this._injectedFile.value?this._injectedFile.value.duration/1e3:0} s</td>
                        </tr>
                        <tr>
                            <td>FPS</td>
                            <td>${this._injectedFile.value?this._injectedFile.value.frames.length===1?"-":60*1e4/this._injectedFile.value.duration+" s":"-"}</td>
                        </tr>
                        <tr>
                            <td>Unit</td>
                            <td>${(m=this._injectedFile.value)==null?void 0:m.unitHuman}</td>
                        </tr>
                        <tr>
                            <td>Data type</td>
                            <td>${(_=this._injectedFile.value)==null?void 0:_.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `}};_s.styles=Ie`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid var( --thermal-slate );
            }
        }

        small {
            opacity: .5;
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            color: var( --thermal-primary );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;_s=Oh([Me("thermal-file-info")],_s);var Ah=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,Eh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ph(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ah(e,r,s),s};let ks=class extends bt{render(){return z`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker">About</thermal-button>
                <div slot="content">
                    <div class="content">
                        <div class="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="531.66" height="166.67" viewBox="0 0 531.66 166.67">
                                <g id="Vrstva_2" data-name="Vrstva 2">
                                    <g id="Podkres">
                                        <path
                                            d="M286.47,78.12c-1.77-1.54-4.43-2.32-8-2.32H261.56V95.59H278.5c3.54,0,6.2-.78,8-2.36s2.66-4.14,2.66-7.68S288.25,79.66,286.47,78.12Z" 
                                            fill="currentcolor"
                                            />
                                        <path
                                            d="M262,0,186,29.54h-.21V166.67h152V29.54H338ZM232.52,134.09H217.06V63.79h15.46Zm58.68,0a27.45,27.45,0,0,1-1.58-8c-.19-3.08-.49-6-.88-8.86-.53-3.67-1.64-6.36-3.35-8.07s-4.5-2.56-8.37-2.56H261.56v27.47H246.11V63.79H284a22.61,22.61,0,0,1,8.52,1.53A19.8,19.8,0,0,1,299,69.5a18.2,18.2,0,0,1,4.13,6.16,19.75,19.75,0,0,1,1.43,7.53A21.14,21.14,0,0,1,302,93.92a16.37,16.37,0,0,1-8.52,6.89v.2a11.89,11.89,0,0,1,4.73,2.41,13.28,13.28,0,0,1,3.05,3.84,17.8,17.8,0,0,1,1.72,4.87,42.51,42.51,0,0,1,.74,5.32c.07,1.12.13,2.43.2,3.94s.18,3,.35,4.63a30.6,30.6,0,0,0,.78,4.47,10.2,10.2,0,0,0,1.63,3.6Z"
                                            fill="currentcolor"
                                         />
                                        <path d="M414,63.79v13H376.89V91.85H411v12H376.89v17.23H414.8v13H361.43V63.79Z" fill="currentcolor" />
                                        <path
                                            d="M459.89,127.59a14.43,14.43,0,0,1-6.45,6,23.53,23.53,0,0,1-19.05-.4,20,20,0,0,1-7.14-6,27.21,27.21,0,0,1-4.23-8.72,36.59,36.59,0,0,1-1.43-10.23A34.4,34.4,0,0,1,423,98.3a25.75,25.75,0,0,1,4.23-8.42,20.53,20.53,0,0,1,16.89-8.07,20,20,0,0,1,8.61,1.92,15,15,0,0,1,6.45,5.66h.2V63.79h14v70.3H460.09v-6.5Zm-.59-25.15a14.68,14.68,0,0,0-2-5.12,11.34,11.34,0,0,0-3.69-3.6,10.83,10.83,0,0,0-5.71-1.38,11.33,11.33,0,0,0-5.81,1.38,10.93,10.93,0,0,0-3.79,3.64,16.39,16.39,0,0,0-2.07,5.17,27.93,27.93,0,0,0-.64,6.06,25.91,25.91,0,0,0,.69,5.91,16,16,0,0,0,2.22,5.26,12,12,0,0,0,3.84,3.74,10.29,10.29,0,0,0,5.56,1.43,11.12,11.12,0,0,0,5.76-1.38,10.36,10.36,0,0,0,3.69-3.69,16.42,16.42,0,0,0,2-5.27,31.24,31.24,0,0,0,.59-6.1A30.51,30.51,0,0,0,459.3,102.44Z" fill="currentcolor" />
                                        <path
                                            d="M518.37,134.09V127h-.29a15.75,15.75,0,0,1-6.9,6.4,20.37,20.37,0,0,1-8.66,2,24.39,24.39,0,0,1-9.21-1.48,13.32,13.32,0,0,1-5.66-4.18,16.59,16.59,0,0,1-2.9-6.6,40.82,40.82,0,0,1-.84-8.61V83.19h14v28.75q0,6.3,2,9.4t7,3.1q5.72,0,8.27-3.4t2.56-11.17V83.19h14v50.9Z" fill="currentcolor"/>
                                        <path d="M15.46,63.79v57.3H49.72v13H0V63.79Z" fill="currentcolor"/>
                                        <path
                                            d="M56.32,98.84a16.13,16.13,0,0,1,2.46-8.17,16.77,16.77,0,0,1,5.51-5.22,23.86,23.86,0,0,1,7.53-2.8,42.71,42.71,0,0,1,8.42-.84,57.28,57.28,0,0,1,7.78.54,23.87,23.87,0,0,1,7.19,2.12,14.2,14.2,0,0,1,5.31,4.38,12.23,12.23,0,0,1,2.07,7.43v26.49a53.68,53.68,0,0,0,.39,6.59,12.18,12.18,0,0,0,1.38,4.73H90.18a21.91,21.91,0,0,1-.64-2.41,20.76,20.76,0,0,1-.34-2.51A18.29,18.29,0,0,1,81.32,134a31.55,31.55,0,0,1-9.25,1.38,25,25,0,0,1-6.79-.89,15.64,15.64,0,0,1-5.52-2.75A13,13,0,0,1,56.07,127a15.91,15.91,0,0,1-1.33-6.79,14.81,14.81,0,0,1,1.53-7.14,12.72,12.72,0,0,1,3.94-4.48,17.47,17.47,0,0,1,5.51-2.51A58.91,58.91,0,0,1,72,104.75q3.15-.5,6.2-.79a36.91,36.91,0,0,0,5.42-.89,9.35,9.35,0,0,0,3.74-1.72,3.79,3.79,0,0,0,1.28-3.3,7.44,7.44,0,0,0-.74-3.59,5.45,5.45,0,0,0-2-2.07,7.7,7.7,0,0,0-2.85-1,22.69,22.69,0,0,0-3.5-.25,10.63,10.63,0,0,0-6.5,1.77c-1.57,1.19-2.49,3.15-2.75,5.91Zm32.29,10.34a6.25,6.25,0,0,1-2.22,1.23,22.33,22.33,0,0,1-2.85.74c-1,.2-2.09.36-3.2.49s-2.23.3-3.35.49a25.6,25.6,0,0,0-3.1.79,9.21,9.21,0,0,0-2.66,1.33,6.34,6.34,0,0,0-1.82,2.12,6.78,6.78,0,0,0-.69,3.25,6.61,6.61,0,0,0,.69,3.15,5.25,5.25,0,0,0,1.87,2,7.85,7.85,0,0,0,2.76,1,17.31,17.31,0,0,0,3.25.29,12.37,12.37,0,0,0,6.4-1.37,9.19,9.19,0,0,0,3.34-3.3,10.36,10.36,0,0,0,1.33-3.89,25.55,25.55,0,0,0,.25-3.15Z" fill="currentcolor"/>
                                        <path
                                            d="M127.4,63.79v25.6h.2a15,15,0,0,1,6.94-5.76,23.54,23.54,0,0,1,9.1-1.82A19.34,19.34,0,0,1,158,88.21a24.53,24.53,0,0,1,4.87,8.32,34.8,34.8,0,0,1,1.87,12.06,34.8,34.8,0,0,1-1.87,12.06A24.62,24.62,0,0,1,158,129a19.44,19.44,0,0,1-14.33,6.4,26.9,26.9,0,0,1-10-1.77,12.8,12.8,0,0,1-6.69-6h-.2v6.5H113.42V63.79ZM150,102.48a16.35,16.35,0,0,0-2.16-5.21,11.52,11.52,0,0,0-3.69-3.6,11.41,11.41,0,0,0-10.69,0,11.28,11.28,0,0,0-3.74,3.6,16.13,16.13,0,0,0-2.16,5.21,27.23,27.23,0,0,0-.69,6.21,26.72,26.72,0,0,0,.69,6.1,16.09,16.09,0,0,0,2.16,5.22,11.15,11.15,0,0,0,3.74,3.59,11.41,11.41,0,0,0,10.69,0,11.38,11.38,0,0,0,3.69-3.59,16.32,16.32,0,0,0,2.16-5.22,26.72,26.72,0,0,0,.69-6.1A27.23,27.23,0,0,0,150,102.48Z" fill="currentcolor" />
                                    </g>
                                </g>
                            </svg>
                    </div>
                    
                    <div style="text-align: center">
                        <p>A webapp reading thermal images from infrared cameras TIMI Edu.</p>
                        <p>version ${Ps.version}</p>
                    </div>


                    <hr />

                    <div class="row">

                        <div>
                            <h3>Source code</h3>
                            <p>
                                <a href="https://github.com/moichim/labir" target="_blank">github.com/moichim/labir</a>
                            </p>
                        </div>


                        <div>
                            <h3>Authors</h3>
                            <p>The code is being developed by the <a href="https://irt.zcu.cz/" target="_blank">Infrared technologies</a> research team at <a href="https://ntc.zcu.cz" target="_blank">NTC UWB</a> in Pilsen.</p>
                        </div>

                    </div>
                </div>
                </div>
            </thermal-dialog-component>
        `}};ks.styles=Ie`

        .content {
            color: var( --thermal-foreground );
        }

        hr {
            border-top-color: currentcolor;
            border-bottom-width: 0;
        }

        small {
            opacity: .5;
        }

        a {
            color: var( --thermal-primary );
        }

        .logo {
            max-width: 200px;
            margin: 0 auto;
            padding: var( --thermal-gap ) 0;
            svg {
                width: 100%;
                height: auto;
            }
        }

        .row {

            &:not(:last-child) {
                padding-bottom: var( --thermal-gap );
                padding-top: var( --thermal-gap );
            }
        
        }

        @media ( min-width: 700px ) {
            .row {

                display: flex;
                flex-wrap: wrap;

                margin: 0 calc( var( --thermal-gap ) * -1 );

                & > div {

                    box-sizing: border-box;
                    width: 50%;
                    padding: 0 var( --thermal-gap );

                }
            
            }
        
        }
    
    `;ks=Eh([Me("thermal-app-info")],ks);var Ch=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Sh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Th(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ch(e,r,s),s};let $s=class extends Et{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return z`

            <thermal-button variant="foreground">
            ${this._injectedFile.value?this._injectedFile.value.fileName:"Loading..."}
            </thermal-button>

            <!--
            
            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value?this._injectedFile.value.fileName:"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>{var t;return window.open((t=this._injectedFile.value)==null?void 0:t.url)}}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportAsPng()}}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportThermalDataAsSvg()}}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

            -->

        
        `}};$s.styles=Ie`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid var( --thermal-slate-light );
            }
        }

        small {
            opacity: .5;
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            color: var( --thermal-primary );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;$s=Sh([Me("thermal-file-name")],$s);var Mh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Lh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Mh(e,r,s),s};let Os=class extends Et{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return z`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>{var t;return window.open((t=this._injectedFile.value)==null?void 0:t.url)}}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportAsPng()}}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportThermalDataAsSvg()}}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `}};Os.styles=Ie`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: 1px solid var( --thermal-slate-light );
            }
        }

        small {
            opacity: .5;
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            color: var( --thermal-primary );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;Os=Lh([Me("thermal-file-download")],Os);(()=>{var t=Object.defineProperty,e=Math.pow,r=(a,u,b)=>u in a?t(a,u,{enumerable:!0,configurable:!0,writable:!0,value:b}):a[u]=b,i=(a,u,b)=>(r(a,typeof u!="symbol"?u+"":u,b),b),s=(a,u)=>` ${u&&u.length>0?u.map(b=>`<link rel="stylesheet" href="${b}" />`).join(""):""} <style> ${a} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",o="pointers-overlap",l="pointers-min-distance",h="pointers-max-distance",d="range-dragging",g="data",m="min",_="max",k="step",P="round",A="type",F="theme",de="rtl",Q="btt",se="disabled",ye="keyboard-disabled",be="mousewheel-disabled",je="slider-width",U="slider-height",we="slider-radius",De="slider-bg",Oe="slider-bg-hover",Ce="slider-bg-fill",ce="pointer-width",Pe="pointer-height",ue="pointer-radius",f="pointer-bg",v="pointer-bg-hover",j="pointer-bg-focus",ne="pointer-shadow",xe="pointer-shadow-hover",oe="pointer-shadow-focus",_t="pointer-border",Gt="pointer-border-hover",Ye="pointer-border-focus",kt="animate-onclick",Pi="css-links",tt="vertical",Ct="horizontal",gr=(a,u,b,p,S)=>{let W=u-a;return W===0?b:(p-b)*(S-a)/W+b},at=a=>!isNaN(parseFloat(a))&&isFinite(a),Te=(a,u)=>at(a)?Number(a):u,Hr=(a,u)=>u===0?0:Math.round(a/u)*u,Ei=(a,u=1/0)=>{if(u===1/0)return a;let b=e(10,u);return Math.round(a*b)/b},He=a=>a==null?!1:typeof a=="boolean"?a:a.trim().toLowerCase()==="true",Ci=(a,u)=>{a.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Ti=(a,u)=>{a.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Si=(a,u)=>{a.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Mi=(a,u)=>{a.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Di=(a,u)=>{if(!u||u.length<=0)return;let b=u.map(S=>at(S)?Te(S,S):S),p={values:b||[]};p.value=b[0],p.value0=b[0],p.value1=b[0];for(let S=1;S<b.length;S++)p[`value${S+1}`]=b[S];a.dispatchEvent(new CustomEvent("change",{detail:p}))},x=(a,u,b)=>{let p=0,S,W,K,M,D=!1,Z=(I,ke,Ve,We,Le,Re)=>{let Ze=p;Ve!==void 0&&I>Ve&&(I=Ve),ke!==void 0&&I<ke&&(I=ke),p=I;let Je=p;return(We===tt&&Re||We===Ct&&Le)&&(Je=100-Je),We===tt?u.style.top=`${Je}%`:u.style.left=`${Je}%`,Ze!==p},re=I=>I===u||u.contains(I),B=(I,ke,Ve,We)=>{S=I,W=ke,K=Ve,M=We},ge=I=>{D=I,u.classList.toggle("disabled",D),D?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},ot=(I,ke)=>{ke==null?u.removeAttribute(I):u.setAttribute(I,ke)},ze=I=>u.getAttribute(I),V=I=>{if(!D){switch(I.key){case"ArrowLeft":{I.preventDefault(),typeof S=="function"&&S(b);break}case"ArrowRight":{I.preventDefault(),typeof W=="function"&&W(b);break}case"ArrowUp":{I.preventDefault(),typeof K=="function"&&K(b);break}case"ArrowDown":{I.preventDefault(),typeof M=="function"&&M(b);break}}Mi(a,I)}},J=()=>{D||Ci(a,u)};return u.className=`pointer pointer-${b}`,u.addEventListener("keydown",V),u.addEventListener("click",J),{$pointer:u,get percent(){return p},get disabled(){return D},set disabled(I){ge(I)},updatePosition:Z,isClicked:re,setCallbacks:B,setAttr:ot,getAttr:ze,destroy:()=>{u.removeEventListener("keydown",V),u.removeEventListener("click",J),u.remove()}}},E=a=>{if(a==null)return;if(Array.isArray(a))return a;if(a.trim()==="")return;let u=a.split(","),b=[],p=!0;for(let S=0;S<u.length;S++){let W=u[S].trim();W!==""&&(b.push(W),at(W)||(p=!1))}return p?b.map(S=>Number(S)):b},C=(a,u)=>u?u.findIndex(b=>b===a||b.toString().trim()===a.toString().trim()):-1,T=a=>({updatePosition:(u,b,p,S)=>{if(b.length<=0)return;let W=b.length===1,K=b[0],M=b[b.length-1];u===tt?(a.style.removeProperty("width"),a.style.removeProperty("right"),a.style.removeProperty("left"),W?a.style.height=`${K}%`:a.style.height=`${Math.abs(K-M)}%`,S?(a.style.bottom="0%",W?a.style.top="auto":a.style.top=`${Math.min(100-M,100-K)}%`):(a.style.bottom="auto",W?a.style.top="0%":a.style.top=`${Math.min(K,M)}%`)):(a.style.removeProperty("height"),a.style.removeProperty("top"),a.style.removeProperty("bottom"),W?a.style.width=`${K}%`:a.style.width=`${Math.abs(K-M)}%`,p?(a.style.right="0%",W?a.style.left="auto":a.style.left=`${Math.min(100-M,100-K)}%`):(a.style.right="auto",W?a.style.left="0%":a.style.left=`${Math.min(K,M)}%`))}}),H="--animate-onclick",fe="--width",Y="--height",_e="--panel-bg-border-radius",ae="--panel-bg",L="--panel-bg-hover",le="--panel-bg-fill",w="--pointer-width",$="--pointer-height",G="--pointer-border-radius",ee="--pointer-bg",Be="--pointer-bg-hover",qe="--pointer-bg-focus",pt="--pointer-shadow",rt="--pointer-shadow-hover",nt="--pointer-shadow-focus",Tt="--pointer-border",N="--pointer-border-hover",X="--pointer-border-focus",O=(a,u,b)=>{let p=new Map;for(let S of a.attributes){let W=S.nodeName.trim().toLowerCase();if(!u.test(W))continue;let K=W.replace(/\D/g,"").trim(),M=K===""||K==="0"||K==="1"?0:Te(K,0)-1,D=b&&typeof b=="function"?b(S.value):S.value;p.set(M,D)}return p},q=a=>{if(!a)return null;let u=a.getAttribute(Pi);if(!u)return null;let b=u.split(";"),p=[];for(let S of b)S.trim()!==""&&p.push(S.trim());return p},pe=[[fe,je,"sliderWidth",null],[Y,U,"sliderHeight",null],[_e,we,"sliderRadius",null],[ae,De,"sliderBg",null],[L,Oe,"sliderBgHover",null],[le,Ce,"sliderBgFill",null],[w,ce,"pointer#Width",/^pointer([0-9]*)-width$/],[$,Pe,"pointer#Height",/^pointer([0-9]*)-height$/],[G,ue,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ee,f,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Be,v,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[qe,j,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[pt,ne,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[rt,xe,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[nt,oe,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Tt,_t,"pointer#Border",/^pointer([0-9]*)-border$/],[N,Gt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[X,Ye,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],he=(a,u,b)=>{let p=null,S=[],W=new Map,K=(V,J=u)=>{let I=[...J.classList];for(let ke of I)ke.startsWith(V)&&u.classList.remove(ke)},M=()=>{K("shape");let V=u.querySelectorAll(".pointer");for(let J of V)K("shape",J)},D=V=>{p=V,K("theme-"),typeof V=="string"&&u.classList.add(`theme-${V}`)},Z=()=>{if(M(),!(S.length<=0)){u.classList.add("shape",`shape-${S[0]}`);for(let V=1;V<S.length;V++){let J=S[V];if(!J)continue;let I=u.querySelector(`.pointer-${V}`);!I||I.classList.add("shape",`shape-${J}`)}}},re=(V,J)=>{S[V]=J,Z()},B=()=>{M();let V=O(a,/^pointer([0-9]*)-shape$/);if(!(V.size<=0)){for(let J of V){let I=J[0];S[I]=J[1]}Z()}},ge=(V,J)=>`${V}-${J}`,ot=(V,J,I)=>{let ke=b[I];if(!ke)return;let Ve=I===0?u:ke.$pointer;if(J==null){W.has(ge(V,I))&&W.delete(ge(V,I)),Ve.style.removeProperty(V);return}W.set(ge(V,I),J),Ve.style.setProperty(V,J)},ze=(V,J)=>W.get(ge(V,J));return(()=>{for(let V of pe){let[J,I,ke,Ve]=V;if(Ve){let Le=O(a,Ve);for(let Re of Le){let Ze=Re[0],Je=Re[1];ot(J,Je,Ze)}}else{let Le=a.getAttribute(I);ot(J,Le,0)}let We=[];if(ke.indexOf("#")===-1)We.push([ke,0]);else{We.push([ke.replace("#",""),0]),We.push([ke.replace("#","0"),0]),We.push([ke.replace("#","1"),0]);for(let Le=1;Le<b.length;Le++)We.push([ke.replace("#",(Le+1).toString()),Le])}for(let Le of We)try{let Re=Le[0],Ze=Le[1];Object.prototype.hasOwnProperty.call(a,Re)||Object.defineProperty(a,Re,{get(){return ze(J,Ze)},set:Je=>{ot(J,Je,Ze)}})}catch(Re){console.error(Re)}}D(a.getAttribute(F)),B()})(),{setStyle:ot,getStyle:ze,get theme(){return p},set theme(V){D(V)},get pointerShapes(){return S},setPointerShape:re}},Ee="animate-on-click",te="range-dragging",Ke=(a,u,b,p)=>{let S=[],W=re=>{for(let B of S)B.update&&typeof B.update=="function"&&B.update(re)},K=()=>{for(let re of S)re.destroy&&typeof re.destroy=="function"&&re.destroy()},M=(re,B)=>{for(let ge of S)ge.onAttrChange&&typeof ge.onAttrChange=="function"&&ge.onAttrChange(re,B)},D=re=>{if(re.gettersAndSetters){for(let B of re.gettersAndSetters)if(!(!B.name||!B.attributes))try{Object.prototype.hasOwnProperty.call(a,B.name)||Object.defineProperty(a,B.name,B.attributes)}catch(ge){console.error("defineSettersGetters error:",ge)}}},Z=re=>{var B;if(!re.css)return;let ge=(B=a.shadowRoot)==null?void 0:B.querySelector("style");!ge||(ge.innerHTML+=re.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let re of window.tcRangeSliderPlugins){let B=re();S.push(B),B.init&&typeof B.init=="function"&&(B.init(a,u,b,p),D(B),Z(B))}},update:W,onAttrChange:M,destroy:K}},Ne=10,Wr=20,Fo=(a,u)=>{let b=new Map,p=/^value([0-9]*)$/;for(let M of a.attributes){let D=M.nodeName.trim().toLowerCase();if(!p.test(D))continue;let Z=D.replace("value","").trim(),re=Z===""||Z==="0"||Z==="1"?0:Te(Z,0)-1,B=at(M.value)?Te(M.value,0):M.value;b.set(re,B)}let S=Math.max(...Array.from(b.keys())),W=[];W.push([x(a,u,0),b.get(0)]);let K=u;for(let M=1;M<=S;M++){let D=u.cloneNode(!0);K.after(D),K=D,W.push([x(a,D,M),b.get(M)])}return W},Us=(a,u,b,p,S,W,K)=>{try{Object.defineProperty(a,p,{configurable:!0,get(){if(!u)return;let M=u.pointers[b];if(!M)return;let D=u.getTextValue(M.percent);return at(D)?Te(D,D):D},set:M=>{u.pointers[b]?u==null||u.setValue(M,b):u==null||u.addPointer(M)}}),Object.defineProperty(a,S,{configurable:!0,get(){var M,D;return(D=(M=u==null?void 0:u.pointers[b])==null?void 0:M.getAttr("aria-label"))!=null?D:void 0},set:M=>{!u||u.setAriaLabel(b,M)}}),Object.defineProperty(a,W,{configurable:!0,get(){var M,D;return(D=(M=u==null?void 0:u.styles)==null?void 0:M.pointerShapes[b])!=null?D:null},set:M=>{!u||!u.styles||u.styles.setPointerShape(b,M)}}),Object.defineProperty(a,K,{configurable:!0,get(){var M;return(M=u==null?void 0:u.pointers[b].disabled)!=null?M:!1},set:M=>{if(!u)return;let D=u==null?void 0:u.pointers[b];!D||(D.disabled=M)}})}catch(M){console.error(M)}},jo=(a,u)=>{let b=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let p=2;p<Ne;p++)b.push([`value${p}`,`ariaLabel${p}`,`pointer${p}Shape`,`pointer${p}Disabled`,p-1]);for(let p of b)Us(a,u,p[4],p[0],p[1],p[2],p[3])},Vs=(a,u,b)=>{var p;let S=(p=b.shadowRoot)==null?void 0:p.querySelector(".container");if(S)for(let W of a)u?S.prepend(W.$pointer):S.append(W.$pointer)},Bo=(a,u)=>{if(!(!u||a.length<=1)){for(let b of a)b.$pointer.style.zIndex=Wr.toString();u.$pointer.style.zIndex=(Wr*2).toString()}},Li=0,br=100,Xt=2,Is="0.3s",No=(a,u,b)=>{let p=b.map(c=>c[0]),S=null,W=null,K=null,M=null,D=Li,Z=br,re,B,ge=Ct,ot=Xt,ze=!1,V=!1,J=!1,I=0,ke=1/0,Ve=!1,We,Le,Re=!1,Ze=!1,Je=!1,St=Is,qs=[],Ys=c=>{Re||(c.preventDefault&&c.preventDefault(),Nt(c),window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",Ur),Ti(a,c))},Ur=c=>{Re||(We=void 0,Le=void 0,window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",Ur),St&&u.classList.add(Ee),Si(a,c))},Uo=(c,y)=>{if(p.length<=0)return;if(p.length===1)return p[0].isClicked(c)&&St&&u.classList.remove(Ee),p[0];let R=Io(c);if(Ve){let me=y,lt=Ir(me);lt!==void 0&&(me=Hr(me,lt)),R?(We=me,Le=0,St&&u.classList.remove(Ee)):We!==void 0&&(Le=me-We,We=me)}if(!Vo(c)&&!R){for(let me of p)if(!(!me.isClicked(c)||me.disabled))return St&&u.classList.remove(Ee),me;for(let me of p)if(S===me)return me}let ve=1/0,Fe=null;for(let me of p){if(me.disabled)continue;let lt=Math.abs(y-me.percent);lt<ve&&(ve=lt,Fe=me)}return Fe},zs=()=>p.findIndex(c=>S===c&&!c.disabled),Nt=c=>{let y;if(ge===tt){let{height:ve,top:Fe}=u.getBoundingClientRect(),me=c.type.indexOf("mouse")!==-1?c.clientY:c.touches[0].clientY;y=Math.min(Math.max(0,me-Fe),ve)*100/ve}else{let{width:ve,left:Fe}=u.getBoundingClientRect(),me=c.type.indexOf("mouse")!==-1?c.clientX:c.touches[0].clientX;y=Math.min(Math.max(0,me-Fe),ve)*100/ve}if((ze||V)&&(y=100-y),S=Uo(c.target,y),S&&Bo(p,S),Ve&&p.length>1&&Le!==void 0){let ve=p[0],Fe=p[p.length-1],me=ve.percent+Le<0,lt=Fe.percent+Le>100;if(me||lt)return;for(let Zr=0;Zr<p.length;Zr++)et(Zr,p[Zr].percent+Le);return}let R=zs();R!==-1&&(et(R,y),S==null||S.$pointer.focus())},Vr=c=>{if(Re||document.activeElement!==a||S!=null&&S.disabled)return;c.stopPropagation(),c.preventDefault();let y=c.deltaY<0,R=ze||V,ve=y?!R:R,Fe=zs();Fe!==-1&&(ve?vr(Fe,p[Fe].percent):yr(Fe,p[Fe].percent))},Gs=c=>{Re||Ze||(ge===tt?V?et(c,100):et(c,0):ze?yr(c,p[c].percent):vr(c,p[c].percent))},Xs=c=>{Re||Ze||(ge===tt?V?et(c,0):et(c,100):ze?vr(c,p[c].percent):yr(c,p[c].percent))},Qs=c=>{Re||Ze||(ge===tt?V?yr(c,p[c].percent):vr(c,p[c].percent):ze?et(c,100):et(c,0))},Ks=c=>{Re||Ze||(ge===tt?V?vr(c,p[c].percent):yr(c,p[c].percent):ze?et(c,0):et(c,100))},Vo=c=>c.classList.contains("panel"),Io=c=>c.classList.contains("panel-fill"),vr=(c,y)=>{if(y===void 0)return;let R=Ir(y);R==null&&(R=1),y-=R,y<0&&(y=0),et(c,y)},yr=(c,y)=>{if(y===void 0)return;let R=Ir(y);R==null&&(R=1),y+=R,y>100&&(y=100),et(c,y)},Ht=()=>{!M||M.update({percents:Zs(),values:Js(),$pointers:en(),min:tn(),max:rn(),data:ji(),step:Fi(),round:Ni(),type:Bi(),textMin:qr(),textMax:Yr(),rightToLeft:Ui(),bottomToTop:Vi(),pointersOverlap:zi(),pointersMinDistance:Hi(),pointersMaxDistance:Wi(),rangeDragging:Gi(),disabled:Ii(),keyboardDisabled:qi(),mousewheelDisabled:Yi()})},qo=()=>{Ht()},Yo=c=>{if(!(J||p.length<=1||Z===D))if(c===0){let y=ke*100/(Z-D);return Math.max(0,p[c+1].percent-y)}else{let y=I*100/(Z-D);return Math.min(p[c-1].percent+y,100)}},zo=c=>{if(!(J||p.length<=1||Z===D))if(c===p.length-1){let y=ke*100/(Z-D);return Math.min(p[c-1].percent+y,100)}else{let y=I*100/(Z-D);return Math.max(0,p[c+1].percent-y)}},Ir=c=>{let y;if(typeof re=="function"){let R=gr(0,100,D,Z,c);y=re(R,c)}else y=re;if(at(y)){let R=Z-D;return y=R===0?0:y*100/R,y}},Qt=c=>{if(c===void 0)return;let y=gr(0,100,D,Z,c);return B!==void 0?B[Math.round(y)]:Ei(y,ot)},qr=()=>B!==void 0?B[D]:D,Yr=()=>B!==void 0?B[Z]:Z,Fi=()=>re,Go=c=>{var y;return c<=0||J?qr():(y=Qt(p[c-1].percent))!=null?y:""},Xo=c=>{var y;return p.length<=1||c>=p.length-1||J?Yr():(y=Qt(p[c+1].percent))!=null?y:""},Zs=()=>p.map(c=>c.percent),Js=()=>p.map(c=>Qt(c.percent)),en=()=>p.map(c=>c.$pointer),tn=()=>D,rn=()=>Z,ji=()=>B,Bi=()=>ge,Ni=()=>ot,Hi=()=>I,Wi=()=>ke,Qo=c=>qs[c],Ui=()=>ze,Vi=()=>V,Ii=()=>Re,qi=()=>Ze,Yi=()=>Je,zi=()=>J,Gi=()=>Ve,et=(c,y)=>{if(y===void 0)return;let R=Ir(y);R!==void 0&&(y=Hr(y,R));let ve=p[c];if(!ve)return;let Fe=ve.updatePosition(y,Yo(c),zo(c),ge,ze,V);W==null||W.updatePosition(ge,p.map(me=>me.percent),ze,V),Ht();for(let me of p){let lt=Qt(me.percent);lt!==void 0&&(me.setAttr("aria-valuenow",lt.toString()),me.setAttr("aria-valuetext",lt.toString()))}Zo(),Fe&&Di(a,p.map(me=>Qt(me.percent)))},mt=()=>{for(let c=0;c<p.length;c++)et(c,p[c].percent)},Ko=(c,y)=>{D=B!==void 0?0:Te(c,Li),Z=B!==void 0?B.length-1:Te(y,br),zr(D),Gr(Z)},Zo=()=>{var c,y;for(let R=0;R<p.length;R++){let ve=p[R];ve.setAttr("aria-valuemin",((c=Go(R))!=null?c:"").toString()),ve.setAttr("aria-valuemax",((y=Xo(R))!=null?y:"").toString())}},zr=c=>{D=Te(c,Li),D>Z&&(Z=D+br),mt()},Gr=c=>{Z=Te(c,br),Z<D&&(Z=D+br),mt()},sn=c=>{J=!0;for(let y=0;y<c.length;y++)Xr(c[y],y);J=!1;for(let y=0;y<c.length;y++)Xr(c[y],y)},Xr=(c,y)=>{let R;B!==void 0?(R=c==null?0:C(c,B),R===-1&&(R=0)):(R=Te(c,D),R<D&&(R=D),R>Z&&(R=Z));let ve=gr(D,Z,0,100,R);et(y,ve)},Qr=c=>{if(c==null){re=void 0;return}if(typeof c=="function"){re=c,mt();return}if(at(c)){re=Te(c,1);let y=Math.abs(Z-D);re>y&&(re=void 0),mt();return}re=void 0},Xi=c=>{J=c,mt()},Qi=c=>{(!at(c)||c<0)&&(c=0),I=c},Ki=c=>{(!at(c)||c<0)&&(c=1/0),ke=c},Zi=c=>{Re=c,u.classList.toggle("disabled",Re),Re?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},nn=c=>{Ze=c},on=c=>{Je=c,Je?document.removeEventListener("wheel",Vr):document.addEventListener("wheel",Vr,{passive:!1})},Ji=c=>{if(c==null){B=void 0;return}if(B=E(c),B===void 0||B.length<=0){B=void 0;return}zr(0),Gr(B.length-1),re===void 0&&Qr(1)},es=c=>{var y;typeof c=="string"?ge=c.trim().toLowerCase()===tt?tt:Ct:ge=Ct;let R=(y=a.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!R)return;R.className=`range-slider-box type-${ge}`,mt();let ve=ge===tt?"vertical":"horizontal";for(let Fe of p)Fe.setAttr("aria-orientation",ve)},ts=c=>{ze=c,p.length>1&&Vs(p,ze,a),mt(),Ht()},rs=c=>{V=c,p.length>1&&Vs(p,V,a),mt(),Ht()},is=c=>{ot=Te(c,Xt),ot<0&&(ot=Xt),Ht()},an=c=>{c==null||c.toString().trim().toLowerCase()==="false"?(St=void 0,u.style.removeProperty(H),u.classList.remove(Ee)):(St=c.toString(),u.style.setProperty(H,St),u.classList.add(Ee))},ln=(c,y)=>{let R=p[c];!R||(R.setAttr("aria-label",y),qs[c]=y)},Kr=c=>{if(We=void 0,p.length<=1){Ve=!1,u.classList.remove(te);return}Ve=c,u.classList.toggle(te,Ve)},Jo=()=>{Zi(He(a.getAttribute(se))),Ze=He(a.getAttribute(ye)),Je=He(a.getAttribute(be));let c=O(a,/^pointer([0-9]*)-disabled$/,y=>He(y));for(let y of c){let R=y[0];!p[R]||(p[R].disabled=y[1])}},ea=()=>{let c=O(a,/^aria-label([0-9]*)$/);for(let y of c){let R=y[0];ln(R,y[1])}},ta=c=>{let y=p.length,R=p[y-1].$pointer,ve=R.cloneNode(!0);R.after(ve);let Fe=x(a,ve,y);return Fe.setCallbacks(Gs,Xs,Qs,Ks),p.push(Fe),Xr(c,y),mt(),Ht(),y},ra=()=>{let c=p.length,y=p[c-1];return y?(y.destroy(),p.pop(),p.length<=1&&Kr(!1),mt(),Ht(),c-1):-1};return(()=>{var c,y;for(let ve of p)ve.setCallbacks(Gs,Xs,Qs,Ks);let R=(c=a.shadowRoot)==null?void 0:c.querySelector(".panel-fill");R&&(W=T(R)),es(a.getAttribute(A)),ts(He(a.getAttribute(de))),rs(He(a.getAttribute(Q))),Ko(a.getAttribute(m),a.getAttribute(_)),Qr(a.getAttribute(k)),Ji(a.getAttribute(g)),sn(b.map(ve=>ve[1])),Xi(He(a.getAttribute(o))),Qi(Te(a.getAttribute(l),0)),Ki(Te(a.getAttribute(h),1/0)),Kr(He(a.getAttribute(d))),is(Te(a.getAttribute(P),Xt)),Jo(),ea(),K=he(a,u,p),an((y=a.getAttribute(kt))!=null?y:Is),u.addEventListener("mousedown",Ys),u.addEventListener("mouseup",Ur),u.addEventListener("touchmove",Nt),u.addEventListener("touchstart",Nt),Je||document.addEventListener("wheel",Vr,{passive:!1}),M=Ke(a,qo,{setValues:sn,setMin:zr,setMax:Gr,setStep:Qr,setPointersOverlap:Xi,setPointersMinDistance:Qi,setPointersMaxDistance:Ki,setDisabled:Zi,setType:es,setRightToLeft:ts,setBottomToTop:rs,setRound:is,setKeyboardDisabled:nn,setMousewheelDisabled:on,setRangeDragging:Kr,setData:Ji},{getPercents:Zs,getValues:Js,getPointerElements:en,getMin:tn,getMax:rn,getStep:Fi,getData:ji,getType:Bi,getRound:Ni,getTextMin:qr,getTextMax:Yr,isRightToLeft:Ui,isBottomToTop:Vi,isDisabled:Ii,isKeyboardDisabled:qi,isMousewheelDisabled:Yi,isPointersOverlap:zi,isRangeDraggingEnabled:Gi,getPointersMinDistance:Hi,getPointersMaxDistance:Wi}),M.init()})(),{get pointers(){return p},get styles(){return K},get pluginsManager(){return M},get min(){return qr()},get max(){return Yr()},get step(){return Fi()},get pointersOverlap(){return zi()},set pointersOverlap(c){Xi(c)},get pointersMinDistance(){return Hi()},set pointersMinDistance(c){Qi(c)},get pointersMaxDistance(){return Wi()},set pointersMaxDistance(c){Ki(c)},get disabled(){return Ii()},set disabled(c){Zi(c)},get data(){return ji()},get type(){return Bi()},set type(c){es(c)},get rightToLeft(){return Ui()},set rightToLeft(c){ts(c)},get bottomToTop(){return Vi()},set bottomToTop(c){rs(c)},get round(){return Ni()},set round(c){is(c)},get animateOnClick(){return St},set animateOnClick(c){an(c)},get keyboardDisabled(){return qi()},set keyboardDisabled(c){nn(c)},get mousewheelDisabled(){return Yi()},set mousewheelDisabled(c){on(c)},get rangeDragging(){return Gi()},set rangeDragging(c){Kr(c)},setMin:zr,setMax:Gr,setValue:Xr,setStep:Qr,setData:Ji,getTextValue:Qt,setAriaLabel:ln,getAriaLabel:Qo,addPointer:ta,removePointer:ra,destroy:()=>{u.removeEventListener("mousedown",Ys),u.removeEventListener("mouseup",Ur),u.removeEventListener("touchmove",Nt),u.removeEventListener("touchstart",Nt),document.removeEventListener("wheel",Vr);for(let c of p)c.destroy();M==null||M.destroy()}}},Ho=(a,u,b)=>{let p=pe.find(([M,D,Z,re])=>D.replace("#","")===u.replace(/\d+/g,""));if(p&&a.styles){let[M,D,Z,re]=p,B=u.replace(/\D/g,"").trim(),ge=B===""||B==="0"||B==="1"?0:Te(B,0)-1;a.styles.setStyle(M,b,ge);return}switch(a&&a.pluginsManager&&a.pluginsManager.onAttrChange(u,b),u){case m:{a.setMin(b);break}case _:{a.setMax(b);break}case k:{a.setStep(b);break}case o:{a.pointersOverlap=He(b);break}case l:{a.pointersMinDistance=Te(b,0);break}case d:{a.rangeDragging=He(b);break}case h:{a.pointersMaxDistance=Te(b,1/0);break}case se:{a.disabled=He(b);break}case ye:{a.keyboardDisabled=He(b);break}case be:{a.mousewheelDisabled=He(b);break}case g:{a.setData(b);break}case A:{a.type=b;break}case de:{a.rightToLeft=He(b);break}case Q:{a.bottomToTop=He(b);break}case P:{a.round=Te(b,Xt);break}case F:{a.styles&&(a.styles.theme=b);break}case kt:{a.animateOnClick=b;break}}let S=null;if(/^value([0-9]*)$/.test(u)&&(S="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(S="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(S="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(S="pointer-shape"),!S)return;let W=u.replace(/\D/g,"").trim(),K=W===""||W==="0"||W==="1"?0:Te(W,0)-1;switch(S){case"value":{a.setValue(b,K);break}case"pointer-disabled":{let M=a==null?void 0:a.pointers[K];if(!M)return;M.disabled=He(b);break}case"aria-label":{a.setAriaLabel(K,b);break}case"pointer-shape":{a.styles&&a.styles.setPointerShape(K,b);break}}},Wo=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(a){this.slider&&this.slider.setStep(a)}get step(){var a;return(a=this.slider)==null?void 0:a.step}set disabled(a){this.slider&&(this.slider.disabled=a)}get disabled(){var a,u;return(u=(a=this.slider)==null?void 0:a.disabled)!=null?u:!1}set data(a){var u;(u=this.slider)==null||u.setData(a)}get data(){var a;return(a=this.slider)==null?void 0:a.data}set min(a){var u;(u=this.slider)==null||u.setMin(a)}get min(){var a;return(a=this.slider)==null?void 0:a.min}set max(a){var u;(u=this.slider)==null||u.setMax(a)}get max(){var a;return(a=this.slider)==null?void 0:a.max}set round(a){!this.slider||(this.slider.round=a)}get round(){var a,u;return(u=(a=this.slider)==null?void 0:a.round)!=null?u:Xt}set type(a){!this.slider||(this.slider.type=a??Ct)}get type(){var a;return((a=this.slider)==null?void 0:a.type)||Ct}set pointersOverlap(a){!this.slider||(this.slider.pointersOverlap=a)}get pointersOverlap(){var a,u;return(u=(a=this.slider)==null?void 0:a.pointersOverlap)!=null?u:!1}set pointersMinDistance(a){!this.slider||(this.slider.pointersMinDistance=a)}get pointersMinDistance(){var a,u;return(u=(a=this.slider)==null?void 0:a.pointersMinDistance)!=null?u:0}set pointersMaxDistance(a){!this.slider||(this.slider.pointersMaxDistance=a)}get pointersMaxDistance(){var a,u;return(u=(a=this.slider)==null?void 0:a.pointersMaxDistance)!=null?u:1/0}set theme(a){!this.slider||!this.slider.styles||(this.slider.styles.theme=a)}get theme(){var a,u,b;return(b=(u=(a=this.slider)==null?void 0:a.styles)==null?void 0:u.theme)!=null?b:null}set rtl(a){!this.slider||(this.slider.rightToLeft=a)}get rtl(){var a,u;return(u=(a=this.slider)==null?void 0:a.rightToLeft)!=null?u:!1}set btt(a){!this.slider||(this.slider.bottomToTop=a)}get btt(){var a,u;return(u=(a=this.slider)==null?void 0:a.bottomToTop)!=null?u:!1}set keyboardDisabled(a){!this.slider||(this.slider.keyboardDisabled=a)}get keyboardDisabled(){var a,u;return(u=(a=this.slider)==null?void 0:a.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(a){!this.slider||(this.slider.mousewheelDisabled=a)}get mousewheelDisabled(){var a,u;return(u=(a=this.slider)==null?void 0:a.mousewheelDisabled)!=null?u:!1}set animateOnClick(a){!this.slider||(this.slider.animateOnClick=a)}get animateOnClick(){var a;return(a=this.slider)==null?void 0:a.animateOnClick}get rangeDragging(){var a,u;return(u=(a=this.slider)==null?void 0:a.rangeDragging)!=null?u:!1}set rangeDragging(a){this.slider&&(this.slider.rangeDragging=He(a))}get externalCSSList(){return this._externalCSSList}addPointer(a){var u,b;if(!this.slider)return;let p=(b=(u=this.slider)==null?void 0:u.addPointer(a))!=null?b:0;Us(this,this.slider,p,`value${p+1}`,`ariaLabel${p+1}`,`pointerShape${p+1}`,`pointer${p+1}Disabled`)}removePointer(){var a;!this.slider||(a=this.slider)==null||a.removePointer()}addCSS(a){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=a,this.shadowRoot.appendChild(u)}connectedCallback(){var a,u;if(!this.shadowRoot)return;this._externalCSSList=q(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let b=(a=this.shadowRoot)==null?void 0:a.querySelector(".pointer");if(!b)return;let p=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!p)return;let S=Fo(this,b);this.slider=No(this,p,S),jo(this,this.slider),this._observer=new MutationObserver(W=>{W.forEach(K=>{var M;if(!this.slider||K.type!=="attributes")return;let D=K.attributeName;!D||Ho(this.slider,D,(M=this.getAttribute(D))!=null?M:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ri=Wo;window.tcRangeSlider=Ri,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ri),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ri{})})();(()=>{var t=(l,h,d,g,m)=>{let _=h-l;return _===0?d:(g-d)*(m-l)/_+d},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,h)=>e(l)?Number(l):h,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,o=()=>{let l=null,h=null,d=null,g=null,m=null,_=!1,k=s,P=n,A=()=>{var U;let we=(U=l==null?void 0:l.shadowRoot)==null?void 0:U.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),d.append(g),m=document.createElement("div"),m.classList.add("mark-values"),d.append(m),we.append(d)},F=()=>{!h||!d||d.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},de=()=>{var U;if(!d||!h)return;let we=h.getMin(),De=h.getMax(),Oe=h.getType()==="vertical",Ce=h.isRightToLeft()||h.isBottomToTop();for(let Pe=0;Pe<k;Pe++){let ue=document.createElement("div");ue.classList.add("mark",`mark-${Pe}`);let f=k===0?0:Pe*100/(k-1);Oe?Ce?ue.style.top=`${100-f}%`:ue.style.top=`${f}%`:Ce?ue.style.left=`${100-f}%`:ue.style.left=`${f}%`,g==null||g.append(ue)}let ce=h.getData();for(let Pe=0;Pe<P;Pe++){let ue=document.createElement("div");ue.classList.add("mark-value",`mark-value-${Pe}`);let f=P===0?0:Pe*100/(P-1),v=t(0,P-1,we,De,Pe);ue.textContent=(ce?(U=ce[Math.round(v)])!=null?U:"":v).toString(),Oe?Ce?ue.style.top=`${100-f}%`:ue.style.top=`${f}%`:Ce?ue.style.left=`${100-f}%`:ue.style.left=`${f}%`,m==null||m.append(ue)}},Q=(U,we)=>{je(),k=U,P=we,k<=0&&(k=s),P<=0&&(P=n),A(),de(),F()},se=U=>{_=U,_?(A(),de(),F()):je()},ye=U=>{!d||d.style.setProperty("--marks-color",U)},be=U=>{!d||d.style.setProperty("--values-color",U)},je=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(U,we,De,Oe)=>{var Ce,ce;h=Oe,l=U,_=i(l.getAttribute("marks")),_&&(Q(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),ye((Ce=l.getAttribute("marks-color"))!=null?Ce:"#cbd5e1"),be((ce=l.getAttribute("marks-values-color"))!=null?ce:"#475569"))},onAttrChange:(U,we)=>{U==="marks"&&se(i(we)),U==="marks-count"&&Q(r(we,s),P),U==="marks-values-count"&&Q(k,r(we,n)),U==="marks-color"&&ye(we),U==="marks-values-color"&&be(we)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return _??!1},set:U=>{se(i(U))}}},{name:"marksCount",attributes:{get(){return k??s},set:U=>{Q(r(U,s),P)}}},{name:"marksValuesCount",attributes:{get(){return k??s},set:U=>{Q(k,r(U,n))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:U=>{ye(U)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:U=>{be(U)}}}],destroy:je,css:`
:root{
  --marks-color: #cbd5e1;
  --values-color: #475569;
}
  
.marks{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100%;
  left: 0;
  color: var(--values-color, #475569);
}

.type-vertical .marks{
  width: auto;
  height: 100%;
  top: 0;
  left: 100%;
  flex-direction: row;
}
    
.mark-points{
  width: 100%;
  height: 1rem;
  position: relative;
  margin-top: 5px;
}  

.type-vertical .mark-points {
  width: 1rem;
  height: 100%;
  margin-top: 0;
  margin-left: 5px;
}

.mark-values{
  width: 100%;
  height: 1rem;
  position: relative;
}

.type-vertical .mark-values {
  width: 1rem;
  height: 100%;
  margin-left: 0.7rem;
}

.mark{
  background: var(--marks-color, #cbd5e1);
  width: 2px;
  height: 5px;
  position: absolute;
  transform: translateX(-50%);
}  

.type-vertical .mark {
    width: 5px;
    height: 2px;
    transform: translateY(-50%);
}

.mark-value{
  position: absolute;
  transform: translateX(-50%);
}

.type-vertical .mark-value{
    transform: translateY(-50%);
}
    `}};window.tcRangeSliderPlugins.push(o)})();var Rh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,zt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Rh(e,r,s),s};let At=class extends xt{constructor(){super(...arguments),this.sliderRef=Xe()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.identificator,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return z`

        <div class="container ${this.canRanderSlider()?"ready":"loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Qe(this.sliderRef)}
                slider-width="100%"
                slider-height="0.9rem"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-radius="0"

                slider-bg="var( --thermal-slate )"
                slider-bg-hover="var( --thermal-slate )"
                slider-bg-fill="${this.palette.gradient}"

                pointer-bg="${this.palette.pixels[0]}"
                pointer2-bg="${this.palette.pixels[this.palette.pixels.length-1]}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        `}};At.styles=Ie`

        .container {
            height: var( --thermal-gap );
            padding: calc( var( --thermal-gap ) * .5 );
            padding-top: 0;
            padding-bottom: 0;
            margin-bottom: -6px;
        }

        .loading {

            .skeleton {
                background: var( --thermal-slate );
                height: .9rem;
            }

            tc-range-slider {
                display: none;
            }
        }

        .ready {

            .skeleton {
                display: none;
            }

        }
    
    `;zt([Ae({type:Number,reflect:!0})],At.prototype,"min",2);zt([Ae({type:Number,reflect:!0})],At.prototype,"max",2);zt([Ae({type:Number,reflect:!0})],At.prototype,"from",2);zt([Ae({type:Number,reflect:!0})],At.prototype,"to",2);zt([Ue()],At.prototype,"palette",2);zt([Ue()],At.prototype,"sliderRef",2);At=zt([Me("thermal-range")],At);var jh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,$i=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&jh(e,r,s),s};let dr=class extends xt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.identificator,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return z`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":$e}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>z`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():z`
            <thermal-dialog label="Histogram">

                <div slot="invoker">
                    ${this.renderHistogram()}
                </div>

                <div slot="content">
                    <div style="margin: 0 calc( var( --thermal-gap ) * -0.5 )">
                        <thermal-ticks placement="bottom"></thermal-ticks>
                        <thermal-range></thermal-range>
                    </div>
                    <thermal-histogram slot="pre" height="400px"></thermal-histogram>
                    
                    <div style="margin: 0 calc( var( --thermal-gap ) * -0.5 )">
                        <thermal-ticks></thermal-ticks>
                    </div>
                </div>
            
            </thermal-dialog>
        `}};dr.styles=Ie`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );

            &.loading {
                .histogram {
                    background: var( --thermal-slate );
                }
            }
        }

        .histogram {
            display: flex;
            width: 100%;
            background:  white;
            // height: calc( var( --thermal-gap ) * 1.5);
        }

        .histogram-bar {
            flex-grow: 1;
            position: relative;
            height: 100%;
        }

        .histogram-bar-inner {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            background: black;
        }

        .interactive {
            cursor: pointer;
            &:hover {
                opacity: .8;
            }
        }


    `;$i([Ue()],dr.prototype,"histogram",2);$i([Ae({type:Boolean,reflect:!0})],dr.prototype,"interactive",2);$i([Ae({type:String,reflect:!0})],dr.prototype,"height",2);dr=$i([Me("thermal-histogram")],dr);var Nh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,Oi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Nh(e,r,s),s};let wt=class extends xt{constructor(){super(...arguments),this.ticksRef=Xe(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(t){super.firstUpdated(t),this.registry.minmax.addListener(this.identificator,e=>{this.minmax=e,this.calculateTicks(e,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/wt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return z`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Qe(this.ticksRef)}>

                    ${this.ticks.map(t=>z`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(wt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};wt.TICK_WIDTH=40;wt.TICK_FIXED=2;wt.styles=Ie`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            height: var( --thermal-fs );
            
        }

        .skeleton {
            height: 100%;
            background: var( --thermal-slate );
        }

        .ready {
            .skeleton {
                display: none;
            }
        }

        .ticks {
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            width: 100%;
            position: relative;
            color: var( --thermal-slate-dark );
            font-family: sans-serif;
        }

        .tick {

            position: relative;

            &::before {
                display: block;
                content: "";
                width: 1px;
                height: 5px;
                //background: currentcolor;
            }
        
        }

        .placement-top {
            margin-bottom: calc( var( --thermal-gap ) * .5 );
            .tick {
                &::before {
                    background: currentcolor;
                }
            }
        }

        .placement-bottom {
            .tick {
                &::before {
                    display: block;
                    content: "";
                    width: 1px;
                    height: 5px;
                    background: currentcolor;

                    position: absolute;
                    top: 12px;
                }
            }
        }

        .tick-value {

            position: absolute;
            width: 40px;
            left: -20px;
            text-align: center;
        
        }


    `;Oi([Ae({type:String,reflect:!0})],wt.prototype,"placement",2);Oi([Ue()],wt.prototype,"minmax",2);Oi([Ue()],wt.prototype,"ticks",2);wt=Oi([Me("thermal-ticks")],wt);var Wh=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,Vh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Uh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Wh(e,r,s),s};let As=class extends Et{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){var t;return z`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot; https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js &quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${(t=this._injectedFile.value)==null?void 0:t.url}c&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `}};As.styles=Ie`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;As=Vh([Me("thermal-file-share")],As);var Ih=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Ai=(t,e,r,i)=>{for(var s=i>1?void 0:i?qh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Ih(e,r,s),s};let fr=class extends Et{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=Xe(),this.barRef=Xe()}getClassName(){return"TimelineElement"}update(t){var e,r;return(e=this._injectedFile.value)==null||e.timeline.removeListener(this.identificator),(r=this._injectedFile.value)==null||r.timeline.addListener(this.identificator,i=>{this.percentage=i/this._injectedFile.value.duration*100,this.ms=this.formatDuration(this._injectedFile.value.timeline.value)}),super.update(t)}formatDuration(t){const e=t%1e3,r=1e3*60,i=Math.floor(t/r),s=(t-i*r-e)/1e3,n=(o,l)=>{const h=o.toString();if(h.length===l)return h;if(h.length<l){const d=l-h.length;let g="";for(let m=0;m<d;m++)g=g+"0";return g+h}};return[i,n(s,2),n(e,3)].join(":")}play(){this._injectedFile.value&&(this.playing=!0,this._injectedFile.value.timeline.play())}pause(){this._injectedFile.value&&(this.playing=!1,this._injectedFile.value.timeline.pause())}applyBar(t){if(this.log(t),t.clientX,this.timelineRef.value&&this.barRef.value&&this._injectedFile.value){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this._injectedFile.value.timeline.setPercentage(r)}}render(){return this._injectedFile.value===void 0||this._injectedFile.value.timeline.duration===0?$e:z`
            <div class="container">


                ${this._injectedFile.value!==void 0?z`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?z`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:z`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor">
                                ${this.ms}
                            </div>

                            <div class="item timeline" @click=${this.applyBar.bind(this)} ${Qe(this.timelineRef)}>
                                <div class="bar" style="width: ${this.percentage}%" ${Qe(this.barRef)}></div>
                            </div>

                            <div class="item">${this.formatDuration(this._injectedFile.value.timeline.duration)}</div>
                        </div>
                    `:$e}
            
            </div>

          `}};fr.styles=Ie`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

        }

        .item {
        
        }

        .button {
            width: var( --thermal-gap );
            cursor: pointer;
            transition: color .3 ease-in-out;
            color: var( --thermal-foreground );
            &:hover {
                color: var( --thermal-primary );
            }
        }

        .cursor {
            width: calc( var( --thermal-gap ) * 5 );
        }

        .duration {
        
        }

        .timeline {

            flex-grow: 1;
            background: var( --thermal-slate );
            height: var( --thermal-gap );
            cursor: pointer;
        }

        .bar {
            height: 100%;
            background: var( --thermal-primary );
            content: "";
        }
    
    `;Ai([Ue()],fr.prototype,"playing",2);Ai([Ue()],fr.prototype,"percentage",2);Ai([Ue()],fr.prototype,"ms",2);fr=Ai([Me("thermal-timeline")],fr);var Yh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Hs=(t,e,r,i)=>{for(var s=i>1?void 0:i?zh(e,r):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(s=(i?o(e,r,s):o(s))||s);return i&&s&&Yh(e,r,s),s};let Dr=class extends Fs{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=Xe()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return z`
    <thermal-manager>
      <thermal-registry>
        <thermal-group>
          <div class="container fullscreen-${this.fullscreen}" ${Qe(this.appRef)}>

            <thermal-image thermal="${this.url}">
              <thermal-file-name slot="bar"></thermal-file-name>
              
              
              
              <!--<thermal-opacity slot="bar"></thermal-opacity>-->
              <thermal-histogram slot="pre" interactive></thermal-histogram>
              <thermal-range slot="pre"></thermal-range>
              <thermal-ticks slot="pre"></thermal-ticks>
              <thermal-timeline></thermal-timeline>

              <div slot="bar" style="flex-grow: 4;">
                <thermal-bar>
                    <thermal-file-info></thermal-file-info>
                    <thermal-file-download></thermal-file-download>
                    <thermal-palette></thermal-palette>
                    <thermal-dropdown>
                      <div slot="invoker">Adjustment</div>
                      <thermal-range-auto slot="option"></thermal-range-auto>
                      <thermal-range-minmax slot="option"></thermal-range-minmax>
                      <!--<thermal-opacity slot="option"></thermal-opacity>-->
                    </thermal-dropdown>

                    <thermal-file-share></thermal-file-share>

                    <thermal-app-info></thermal-app-info>
                </thermal-bar>
              </div>
              

              <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
                <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
                ${this.fullscreen==="on"?z`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:z`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
              
            </thermal-image>

          </div>
          <thermal-group>
      </thermal-registry>
    </thermal-manager>
    `}};Dr.styles=Ie`

    .container {

      padding: calc( var( --thermal-gap ) / 3 );
      background-color: var( --thermal-slate-light );
      border: 1px solid var( --thermal-slate );
      border-radius: var( --thermal-radius );
      // box-shadow: var( --thermal-shadow );

    }

    .fullscreen-on {

      border: 0;
      border-radius: 0;
      // background: var( --thermal-slate-base-dark );

      ::part( file-canvas-wrapper ) {

        display: flex;
        align-items: center;
        justify-content: center;

        padding: var( --thermal-gap );
        box-sizing: border-box;
        height: 100%;

      }

      ::part( file-canvas-container ) {

        max-width: 100vw;
        max-height: 100vh;
        
        aspect-ratio: 4 / 3;
        margin:: 0 auto;7

        width: 80vw;

      }

      @media ( min-height: 800px ) {
        ::part( file-canvas-container ) {
            width: 70vw;
        }
      }
    }
  
  `;Hs([Ae({type:String,reflect:!0})],Dr.prototype,"url",2);Hs([Ae({type:String,reflect:!0})],Dr.prototype,"fullscreen",2);Dr=Hs([Me("thermal-file-app")],Dr);const hs=window.matchMedia("(prefers-color-scheme: dark)"),Ws="thermal-dark-mode",Rn=()=>{document.body.classList.add(Ws)},Gh=()=>{document.body.classList.remove(Ws)},Xh=()=>{hs.matches&&Rn();const t=e=>{e.matches?Rn():Gh()};hs.addEventListener("change",t),hs.addListener(t)},Qh=Ps.version.toString().replaceAll(".","-"),Ro=t=>`thermal__${t}__${Qh}`,Kh=t=>document.getElementById(Ro(t))!==null,Fn=(t,e)=>{if(!Kh(t)){const r=document.createElement("style");r.setAttribute("id",Ro(t)),r.innerHTML=e,document.head.appendChild(r)}},Zh=()=>{Fn("rootVariables",`

        :root {

            /** Colors */
            --thermal-foreground: black;
            --thermal-background: white;

            /** Primary - base */
            --thermal-primary-base: blue;
            --thermal-primary-base-dark: navy;
            --thermal-primary-base-light: lightblue;

            /** Primary */
            --thermal-primary: var( --thermal-primary-base );
            --thermal-primary-light: var( --thermal-primary-base-light );
            --thermal-primary-dark: var( --thermal-primary-base-dark );

            /** Slate -base */
            --thermal-slate-base: #8e8c8f;
            --thermal-slate-base-light: #dad7db;
            --thermal-slate-base-dark: #49474a;

            /** Slate */
            --thermal-slate: var( --thermal-slate-base );
            --thermal-slate-light: var( --thermal-slate-base-light );
            --thermal-slate-dark: var( --thermal-slate-base-dark );

            /** Gaps */
            --thermal-gap-base: 16px;
            --thermal-gap-sm: 17px;
            --thermal-gap-md: 18px;
            --thermal-gap-lg: 19px;
            --thermal-gap-xl: 20px; 
            --thermal-gap: var( --thermal-gap-base );

            /** Font sizes */
            --thermal-fs-base: 16px;
            --thermal-fs-sm: 16px;
            --thermal-fs-md: 16px;
            --thermal-fs-lg: 16px;
            --thermal-fs-xl: 16px; 
            --thermal-fs: var( --thermal-fs-base );
            --thermal-fs-small: calc( var( --thermal-fs ) * 0.9 );
            --thermal-fs-large: calc( var( --thermal-fs ) * 1.2 );

            /** Round corners */
            --thermal-radius-base: 5px;
            --thermal-radius-sm: 6px;
            --thermal-radius-md: 7px;
            --thermal-radius-lg: 8px;
            --thermal-radius-xl: 9px;
            --thermal-radius: var( --thermal-radius-base );

            /** Shadows */
            --thermal-shadow: 0px 0px 5px var( --thermal-slate-dark );
            --thermal-shadow-none: 0px 0px 0px transparent;
        
        }

        :root {
        
            @media ( min-width: 640px ) {
                --thermal-gap: var( --thermal-gap-sm );
                --thermal-fs: var( --thermal-fs-sm );
                --thermal-radius: var( --thermal-radius-sm );
            }

            @media ( min-width: 960px ) {
                --thermal-gap: var( --thermal-gap-md );
                --thermal-fs: var( --thermal-fs-md );
                --thermal-radius: var( --thermal-radius-md );
            }
            
            @media ( min-width: 1250px ) {
                --thermal-gap: var( --thermal-gap-lg );
                --thermal-fs: var( --thermal-fs-lg );
                --thermal-radius: var( --thermal-radius-lg );
            }

            @media ( min-width: 1440px ) {
                --thermal-gap: var( --thermal-gap-xl );
                --thermal-fs: var( --thermal-fs-xl );
                --thermal-radius: var( --thermal-radius-xl );
            }
        
        }


            
        
        `),Fn("darkModeOverrides",`
        
            body.${Ws} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Bn}
Author: ${Hn}
Repository: ${Nn.url}
`);Xh();Zh();document.addEventListener("DOMContentLoaded",()=>{});
