const go="@labir/embed",Un="1.2.20",vo="Embedded display of thermograms",bo="dist/embed.js",yo="module",Hn={type:"git",url:"https://github.com/moichim/labir"},wo={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Wn="Jan Jáchim <jachim5@gmail.com>",xo="ISC",_o={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/emotion":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11"},ko={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Os={name:go,version:Un,description:vo,main:bo,type:yo,repository:Hn,scripts:wo,author:Wn,license:xo,dependencies:_o,devDependencies:ko};var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function So(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var s=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return e[i]}})}),r}var ps={exports:{}};const Po={},Eo=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"})),Zt=So(Eo);/**
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
 */(function(e,t){(function(r,i){i(t)})(fs,function(r){var i={},s={exports:{}};(function(S){var A=function(W){return typeof W<"u"&&W.versions!=null&&W.versions.node!=null&&W+""=="[object process]"};S.exports.isNode=A,S.exports.platform=typeof process<"u"&&A(process)?"node":"browser";var O=S.exports.platform==="node"&&Zt;S.exports.isMainThread=S.exports.platform==="node"?(!O||O.isMainThread)&&!process.connected:typeof Window<"u",S.exports.cpus=S.exports.platform==="browser"?self.navigator.hardwareConcurrency:Zt.cpus().length})(s);var n=s.exports,a={},l;function c(){if(l)return a;l=1;function S(W,be){var G=this;if(!(this instanceof S))throw new SyntaxError("Constructor must be called with the new operator");if(typeof W!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Pe=[],pe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var R=function(Z,oe){Pe.push(Z),pe.push(oe)};this.then=function(P,Z){return new S(function(oe,Be){var qe=P?A(P,oe,Be):oe,pt=Z?A(Z,oe,Be):Be;R(qe,pt)},G)};var me=function(Z){return G.resolved=!0,G.rejected=!1,G.pending=!1,Pe.forEach(function(oe){oe(Z)}),R=function(Be,qe){Be(Z)},me=k=function(){},G},k=function(Z){return G.resolved=!1,G.rejected=!0,G.pending=!1,pe.forEach(function(oe){oe(Z)}),R=function(Be,qe){qe(Z)},me=k=function(){},G};this.cancel=function(){return be?be.cancel():k(new O),G},this.timeout=function(P){if(be)be.timeout(P);else{var Z=setTimeout(function(){k(new T("Promise timed out after "+P+" ms"))},P);G.always(function(){clearTimeout(Z)})}return G},W(function(P){me(P)},function(P){k(P)})}function A(W,be,G){return function(Pe){try{var pe=W(Pe);pe&&typeof pe.then=="function"&&typeof pe.catch=="function"?pe.then(be,G):be(pe)}catch(R){G(R)}}}S.prototype.catch=function(W){return this.then(null,W)},S.prototype.always=function(W){return this.then(W,W)},S.all=function(W){return new S(function(be,G){var Pe=W.length,pe=[];Pe?W.forEach(function(R,me){R.then(function(k){pe[me]=k,Pe--,Pe==0&&be(pe)},function(k){Pe=0,G(k)})}):be(pe)})},S.defer=function(){var W={};return W.promise=new S(function(be,G){W.resolve=be,W.reject=G}),W};function O(W){this.message=W||"promise cancelled",this.stack=new Error().stack}O.prototype=new Error,O.prototype.constructor=Error,O.prototype.name="CancellationError",S.CancellationError=O;function T(W){this.message=W||"timeout exceeded",this.stack=new Error().stack}return T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="TimeoutError",S.TimeoutError=T,a.Promise=S,a}function d(S,A){(A==null||A>S.length)&&(A=S.length);for(var O=0,T=Array(A);O<A;O++)T[O]=S[O];return T}function m(S,A){var O=typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(!O){if(Array.isArray(S)||(O=ee(S))||A){O&&(S=O);var T=0,W=function(){};return{s:W,n:function(){return T>=S.length?{done:!0}:{done:!1,value:S[T++]}},e:function(pe){throw pe},f:W}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be,G=!0,Pe=!1;return{s:function(){O=O.call(S)},n:function(){var pe=O.next();return G=pe.done,pe},e:function(pe){Pe=!0,be=pe},f:function(){try{G||O.return==null||O.return()}finally{if(Pe)throw be}}}}function p(S,A,O){return(A=_(A))in S?Object.defineProperty(S,A,{value:O,enumerable:!0,configurable:!0,writable:!0}):S[A]=O,S}function x(S,A){var O=Object.keys(S);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(S);A&&(T=T.filter(function(W){return Object.getOwnPropertyDescriptor(S,W).enumerable})),O.push.apply(O,T)}return O}function y(S){for(var A=1;A<arguments.length;A++){var O=arguments[A]!=null?arguments[A]:{};A%2?x(Object(O),!0).forEach(function(T){p(S,T,O[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(O)):x(Object(O)).forEach(function(T){Object.defineProperty(S,T,Object.getOwnPropertyDescriptor(O,T))})}return S}function $(S,A){if(typeof S!="object"||!S)return S;var O=S[Symbol.toPrimitive];if(O!==void 0){var T=O.call(S,A||"default");if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)(S)}function _(S){var A=$(S,"string");return typeof A=="symbol"?A:A+""}function C(S){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},C(S)}function ee(S,A){if(S){if(typeof S=="string")return d(S,A);var O={}.toString.call(S).slice(8,-1);return O==="Object"&&S.constructor&&(O=S.constructor.name),O==="Map"||O==="Set"?Array.from(S):O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)?d(S,A):void 0}}var H={exports:{}},z={},ge;function he(){return ge||(ge=1,z.validateOptions=function(A,O,T){if(A){var W=A?Object.keys(A):[],be=W.find(function(Pe){return!O.includes(Pe)});if(be)throw new Error('Object "'+T+'" contains an unknown option "'+be+'"');var G=O.find(function(Pe){return Object.prototype[Pe]&&!W.includes(Pe)});if(G)throw new Error('Object "'+T+'" contains an inherited option "'+G+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return A}},z.workerOptsNames=["credentials","name","type"],z.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],z.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),z}var Oe,B;function xe(){return B||(B=1,Oe=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Oe}var J;function de(){if(J)return H.exports;J=1;var S=c(),A=S.Promise,O=n,T=he(),W=T.validateOptions,be=T.forkOptsNames,G=T.workerThreadOptsNames,Pe=T.workerOptsNames,pe="__workerpool-terminate__";function R(){var U=k();if(!U)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return U}function me(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":C(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function k(){try{return Zt}catch(U){if(C(U)==="object"&&U!==null&&U.code==="MODULE_NOT_FOUND")return null;throw U}}function P(){if(O.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var U=new Blob([xe()],{type:"text/javascript"});return window.URL.createObjectURL(U)}else return __dirname+"/worker.js"}function Z(U,te){if(te.workerType==="web")return me(),oe(U,te.workerOpts,Worker);if(te.workerType==="thread")return E=R(),Be(U,E,te);if(te.workerType==="process"||!te.workerType)return qe(U,pt(te),Zt);if(O.platform==="browser")return me(),oe(U,te.workerOpts,Worker);var E=k();return E?Be(U,E,te):qe(U,pt(te),Zt)}function oe(U,te,E){W(te,Pe,"workerOpts");var Y=new E(U,te);return Y.isBrowserWorker=!0,Y.on=function(ye,ve){this.addEventListener(ye,function(Ce){ve(Ce.data)})},Y.send=function(ye,ve){this.postMessage(ye,ve)},Y}function Be(U,te,E){var Y,ye;W(E==null?void 0:E.workerThreadOpts,G,"workerThreadOpts");var ve=new te.Worker(U,y({stdout:(Y=E==null?void 0:E.emitStdStreams)!==null&&Y!==void 0?Y:!1,stderr:(ye=E==null?void 0:E.emitStdStreams)!==null&&ye!==void 0?ye:!1},E==null?void 0:E.workerThreadOpts));return ve.isWorkerThread=!0,ve.send=function(Ce,le){this.postMessage(Ce,le)},ve.kill=function(){return this.terminate(),!0},ve.disconnect=function(){this.terminate()},E!=null&&E.emitStdStreams&&(ve.stdout.on("data",function(Ce){return ve.emit("stdout",Ce)}),ve.stderr.on("data",function(Ce){return ve.emit("stderr",Ce)})),ve}function qe(U,te,E){W(te.forkOpts,be,"forkOpts");var Y=E.fork(U,te.forkArgs,te.forkOpts),ye=Y.send;return Y.send=function(ve){return ye.call(Y,ve)},te.emitStdStreams&&(Y.stdout.on("data",function(ve){return Y.emit("stdout",ve)}),Y.stderr.on("data",function(ve){return Y.emit("stderr",ve)})),Y.isChildProcess=!0,Y}function pt(U){U=U||{};var te=process.execArgv.join(" "),E=te.indexOf("--inspect")!==-1,Y=te.indexOf("--debug-brk")!==-1,ye=[];return E&&(ye.push("--inspect="+U.debugPort),Y&&ye.push("--debug-brk")),process.execArgv.forEach(function(ve){ve.indexOf("--max-old-space-size")>-1&&ye.push(ve)}),Object.assign({},U,{forkArgs:U.forkArgs,forkOpts:Object.assign({},U.forkOpts,{execArgv:(U.forkOpts&&U.forkOpts.execArgv||[]).concat(ye),stdio:U.emitStdStreams?"pipe":void 0})})}function rt(U){for(var te=new Error(""),E=Object.keys(U),Y=0;Y<E.length;Y++)te[E[Y]]=U[E[Y]];return te}function at(U,te){if(Object.keys(U.processing).length===1){var E=Object.values(U.processing)[0];E.options&&typeof E.options.on=="function"&&E.options.on(te)}}function Tt(U,te){var E=this,Y=te||{};this.script=U||P(),this.worker=Z(this.script,Y),this.debugPort=Y.debugPort,this.forkOpts=Y.forkOpts,this.forkArgs=Y.forkArgs,this.workerOpts=Y.workerOpts,this.workerThreadOpts=Y.workerThreadOpts,this.workerTerminateTimeout=Y.workerTerminateTimeout,U||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(le){at(E,{stdout:le.toString()})}),this.worker.on("stderr",function(le){at(E,{stderr:le.toString()})}),this.worker.on("message",function(le){if(!E.terminated)if(typeof le=="string"&&le==="ready")E.worker.ready=!0,ve();else{var Ke=le.id,Ne=E.processing[Ke];Ne!==void 0&&(le.isEvent?Ne.options&&typeof Ne.options.on=="function"&&Ne.options.on(le.payload):(delete E.processing[Ke],E.terminating===!0&&E.terminate(),le.error?Ne.resolver.reject(rt(le.error)):Ne.resolver.resolve(le.result)))}});function ye(le){E.terminated=!0;for(var Ke in E.processing)E.processing[Ke]!==void 0&&E.processing[Ke].resolver.reject(le);E.processing=Object.create(null)}function ve(){var le=m(E.requestQueue.splice(0)),Ke;try{for(le.s();!(Ke=le.n()).done;){var Ne=Ke.value;E.worker.send(Ne.message,Ne.transfer)}}catch(Hr){le.e(Hr)}finally{le.f()}}var Ce=this.worker;this.worker.on("error",ye),this.worker.on("exit",function(le,Ke){var Ne=`Workerpool Worker terminated Unexpectedly
`;Ne+="    exitCode: `"+le+"`\n",Ne+="    signalCode: `"+Ke+"`\n",Ne+="    workerpool.script: `"+E.script+"`\n",Ne+="    spawnArgs: `"+Ce.spawnargs+"`\n",Ne+="    spawnfile: `"+Ce.spawnfile+"`\n",Ne+="    stdout: `"+Ce.stdout+"`\n",Ne+="    stderr: `"+Ce.stderr+"`\n",ye(new Error(Ne))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Tt.prototype.methods=function(){return this.exec("methods")},Tt.prototype.exec=function(U,te,E,Y){E||(E=A.defer());var ye=++this.lastId;this.processing[ye]={id:ye,resolver:E,options:Y};var ve={message:{id:ye,method:U,params:te},transfer:Y&&Y.transfer};this.terminated?E.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ve.message,ve.transfer):this.requestQueue.push(ve);var Ce=this;return E.promise.catch(function(le){if(le instanceof A.CancellationError||le instanceof A.TimeoutError)return delete Ce.processing[ye],Ce.terminateAndNotify(!0).then(function(){throw le},function(Ke){throw Ke});throw le})},Tt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Tt.prototype.terminate=function(U,te){var E=this;if(U){for(var Y in this.processing)this.processing[Y]!==void 0&&this.processing[Y].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof te=="function"&&(this.terminationHandler=te),this.busy())this.terminating=!0;else{var ye=function(le){if(E.terminated=!0,E.cleaning=!1,E.worker!=null&&E.worker.removeAllListeners&&E.worker.removeAllListeners("message"),E.worker=null,E.terminating=!1,E.terminationHandler)E.terminationHandler(le,E);else if(le)throw le};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){ye(new Error("worker already killed!"));return}var ve=setTimeout(function(){E.worker&&E.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ve),E.worker&&(E.worker.killed=!0),ye()}),this.worker.ready?this.worker.send(pe):this.requestQueue.push({message:pe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");ye()}},Tt.prototype.terminateAndNotify=function(U,te){var E=A.defer();return te&&E.promise.timeout(te),this.terminate(U,function(Y,ye){Y?E.reject(Y):E.resolve(ye)}),E.promise},H.exports=Tt,H.exports._tryRequireWorkerThreads=k,H.exports._setupProcessWorker=qe,H.exports._setupBrowserWorker=oe,H.exports._setupWorkerThreadWorker=Be,H.exports.ensureWorkerThreads=R,H.exports}var _e,Q;function fe(){if(Q)return _e;Q=1;var S=65535;_e=A;function A(){this.ports=Object.create(null),this.length=0}return A.prototype.nextAvailableStartingAt=function(O){for(;this.ports[O]===!0;)O++;if(O>=S)throw new Error("WorkerPool debug port limit reached: "+O+">= "+S);return this.ports[O]=!0,this.length++,O},A.prototype.releasePort=function(O){delete this.ports[O],this.length--},_e}var ie,f;function b(){if(f)return ie;f=1;var S=c(),A=S.Promise,O=de(),T=n,W=fe(),be=new W;function G(k,P){typeof k=="string"?this.script=k||null:(this.script=null,P=k),this.workers=[],this.tasks=[],P=P||{},this.forkArgs=Object.freeze(P.forkArgs||[]),this.forkOpts=Object.freeze(P.forkOpts||{}),this.workerOpts=Object.freeze(P.workerOpts||{}),this.workerThreadOpts=Object.freeze(P.workerThreadOpts||{}),this.debugPortStart=P.debugPortStart||43210,this.nodeWorker=P.nodeWorker,this.workerType=P.workerType||P.nodeWorker||"auto",this.maxQueueSize=P.maxQueueSize||1/0,this.workerTerminateTimeout=P.workerTerminateTimeout||1e3,this.onCreateWorker=P.onCreateWorker||function(){return null},this.onTerminateWorker=P.onTerminateWorker||function(){return null},this.emitStdStreams=P.emitStdStreams||!1,P&&"maxWorkers"in P?(Pe(P.maxWorkers),this.maxWorkers=P.maxWorkers):this.maxWorkers=Math.max((T.cpus||4)-1,1),P&&"minWorkers"in P&&(P.minWorkers==="max"?this.minWorkers=this.maxWorkers:(pe(P.minWorkers),this.minWorkers=P.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&O.ensureWorkerThreads()}G.prototype.exec=function(k,P,Z){if(P&&!Array.isArray(P))throw new TypeError('Array expected as argument "params"');if(typeof k=="string"){var oe=A.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Be=this.tasks,qe={method:k,params:P,resolver:oe,timeout:null,options:Z};Be.push(qe);var pt=oe.promise.timeout;return oe.promise.timeout=function(at){return Be.indexOf(qe)!==-1?(qe.timeout=at,oe.promise):pt.call(oe.promise,at)},this._next(),oe.promise}else{if(typeof k=="function")return this.exec("run",[String(k),P],Z);throw new TypeError('Function or string expected as argument "method"')}},G.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var k=this;return this.exec("methods").then(function(P){var Z={};return P.forEach(function(oe){Z[oe]=function(){return k.exec(oe,Array.prototype.slice.call(arguments))}}),Z})},G.prototype._next=function(){if(this.tasks.length>0){var k=this._getWorker();if(k){var P=this,Z=this.tasks.shift();if(Z.resolver.promise.pending){var oe=k.exec(Z.method,Z.params,Z.resolver,Z.options).then(P._boundNext).catch(function(){if(k.terminated)return P._removeWorker(k)}).then(function(){P._next()});typeof Z.timeout=="number"&&oe.timeout(Z.timeout)}else P._next()}}},G.prototype._getWorker=function(){for(var k=this.workers,P=0;P<k.length;P++){var Z=k[P];if(Z.busy()===!1)return Z}return k.length<this.maxWorkers?(Z=this._createWorkerHandler(),k.push(Z),Z):null},G.prototype._removeWorker=function(k){var P=this;return be.releasePort(k.debugPort),this._removeWorkerFromList(k),this._ensureMinWorkers(),new A(function(Z,oe){k.terminate(!1,function(Be){P.onTerminateWorker({forkArgs:k.forkArgs,forkOpts:k.forkOpts,workerThreadOpts:k.workerThreadOpts,script:k.script}),Be?oe(Be):Z(k)})})},G.prototype._removeWorkerFromList=function(k){var P=this.workers.indexOf(k);P!==-1&&this.workers.splice(P,1)},G.prototype.terminate=function(k,P){var Z=this;this.tasks.forEach(function(rt){rt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var oe=function(at){be.releasePort(at.debugPort),this._removeWorkerFromList(at)},Be=oe.bind(this),qe=[],pt=this.workers.slice();return pt.forEach(function(rt){var at=rt.terminateAndNotify(k,P).then(Be).always(function(){Z.onTerminateWorker({forkArgs:rt.forkArgs,forkOpts:rt.forkOpts,workerThreadOpts:rt.workerThreadOpts,script:rt.script})});qe.push(at)}),A.all(qe)},G.prototype.stats=function(){var k=this.workers.length,P=this.workers.filter(function(Z){return Z.busy()}).length;return{totalWorkers:k,busyWorkers:P,idleWorkers:k-P,pendingTasks:this.tasks.length,activeTasks:P}},G.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var k=this.workers.length;k<this.minWorkers;k++)this.workers.push(this._createWorkerHandler())},G.prototype._createWorkerHandler=function(){var k=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new O(k.script||this.script,{forkArgs:k.forkArgs||this.forkArgs,forkOpts:k.forkOpts||this.forkOpts,workerOpts:k.workerOpts||this.workerOpts,workerThreadOpts:k.workerThreadOpts||this.workerThreadOpts,debugPort:be.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Pe(k){if(!R(k)||!me(k)||k<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function pe(k){if(!R(k)||!me(k)||k<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function R(k){return typeof k=="number"}function me(k){return Math.round(k)==k}return ie=G,ie}var j={},K,Se;function ne(){if(Se)return K;Se=1;function S(A,O){this.message=A,this.transfer=O}return K=S,K}var _t;function Xt(){return _t||(_t=1,function(S){var A=ne(),O="__workerpool-terminate__",T={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")T.on=function(R,me){addEventListener(R,function(k){me(k.data)})},T.send=function(R,me){me?postMessage(R,me):postMessage(R)};else if(typeof process<"u"){var W;try{W=Zt}catch(R){if(!(C(R)==="object"&&R!==null&&R.code==="MODULE_NOT_FOUND"))throw R}if(W&&W.parentPort!==null){var be=W.parentPort;T.send=be.postMessage.bind(be),T.on=be.on.bind(be),T.exit=process.exit.bind(process)}else T.on=process.on.bind(process),T.send=function(R){process.send(R)},T.on("disconnect",function(){process.exit(1)}),T.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function G(R){return Object.getOwnPropertyNames(R).reduce(function(me,k){return Object.defineProperty(me,k,{value:R[k],enumerable:!0})},{})}function Pe(R){return R&&typeof R.then=="function"&&typeof R.catch=="function"}T.methods={},T.methods.run=function(me,k){var P=new Function("return ("+me+").apply(null, arguments);");return P.apply(P,k)},T.methods.methods=function(){return Object.keys(T.methods)},T.terminationHandler=void 0,T.cleanupAndExit=function(R){var me=function(){T.exit(R)};if(!T.terminationHandler)return me();var k=T.terminationHandler(R);Pe(k)?k.then(me,me):me()};var pe=null;T.on("message",function(R){if(R===O)return T.cleanupAndExit(0);try{var me=T.methods[R.method];if(me){pe=R.id;var k=me.apply(me,R.params);Pe(k)?k.then(function(P){P instanceof A?T.send({id:R.id,result:P.message,error:null},P.transfer):T.send({id:R.id,result:P,error:null}),pe=null}).catch(function(P){T.send({id:R.id,result:null,error:G(P)}),pe=null}):(k instanceof A?T.send({id:R.id,result:k.message,error:null},k.transfer):T.send({id:R.id,result:k,error:null}),pe=null)}else throw new Error('Unknown method "'+R.method+'"')}catch(P){T.send({id:R.id,result:null,error:G(P)})}}),T.register=function(R,me){if(R)for(var k in R)R.hasOwnProperty(k)&&(T.methods[k]=R[k]);me&&(T.terminationHandler=me.onTerminate),T.send("ready")},T.emit=function(R){if(pe){if(R instanceof A){T.send({id:pe,isEvent:!0,payload:R.message},R.transfer);return}T.send({id:pe,isEvent:!0,payload:R})}},S.add=T.register,S.emit=T.emit}(j)),j}var ze=n.platform,kt=n.isMainThread,Ai=n.cpus;function tt(S,A){var O=b();return new O(S,A)}var Ot=i.pool=tt;function gr(S,A){var O=Xt();O.add(S,A)}var lt=i.worker=gr;function Me(S){var A=Xt();A.emit(S)}var Ur=i.workerEmit=Me,Oi=c(),Ue=Oi.Promise,Ti=i.Promise=Ue,Ci=i.Transfer=ne(),Mi=i.platform=ze,Di=i.isMainThread=kt,Fi=i.cpus=Ai;r.Promise=Ti,r.Transfer=Ci,r.cpus=Fi,r.default=i,r.isMainThread=Di,r.platform=Mi,r.pool=Ot,r.worker=lt,r.workerEmit=Ur,Object.defineProperty(r,"__esModule",{value:!0})})})(ps,ps.exports);var Ao=ps.exports,ms={exports:{}};(function(e,t){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof fs<"u"&&fs,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(a){var l=typeof n<"u"&&n||typeof self<"u"&&self||typeof l<"u"&&l,c={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function d(f){return f&&DataView.prototype.isPrototypeOf(f)}if(c.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],p=ArrayBuffer.isView||function(f){return f&&m.indexOf(Object.prototype.toString.call(f))>-1};function x(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function y(f){return typeof f!="string"&&(f=String(f)),f}function $(f){var b={next:function(){var j=f.shift();return{done:j===void 0,value:j}}};return c.iterable&&(b[Symbol.iterator]=function(){return b}),b}function _(f){this.map={},f instanceof _?f.forEach(function(b,j){this.append(j,b)},this):Array.isArray(f)?f.forEach(function(b){this.append(b[0],b[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(b){this.append(b,f[b])},this)}_.prototype.append=function(f,b){f=x(f),b=y(b);var j=this.map[f];this.map[f]=j?j+", "+b:b},_.prototype.delete=function(f){delete this.map[x(f)]},_.prototype.get=function(f){return f=x(f),this.has(f)?this.map[f]:null},_.prototype.has=function(f){return this.map.hasOwnProperty(x(f))},_.prototype.set=function(f,b){this.map[x(f)]=y(b)},_.prototype.forEach=function(f,b){for(var j in this.map)this.map.hasOwnProperty(j)&&f.call(b,this.map[j],j,this)},_.prototype.keys=function(){var f=[];return this.forEach(function(b,j){f.push(j)}),$(f)},_.prototype.values=function(){var f=[];return this.forEach(function(b){f.push(b)}),$(f)},_.prototype.entries=function(){var f=[];return this.forEach(function(b,j){f.push([j,b])}),$(f)},c.iterable&&(_.prototype[Symbol.iterator]=_.prototype.entries);function C(f){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}function ee(f){return new Promise(function(b,j){f.onload=function(){b(f.result)},f.onerror=function(){j(f.error)}})}function H(f){var b=new FileReader,j=ee(b);return b.readAsArrayBuffer(f),j}function z(f){var b=new FileReader,j=ee(b);return b.readAsText(f),j}function ge(f){for(var b=new Uint8Array(f),j=new Array(b.length),K=0;K<b.length;K++)j[K]=String.fromCharCode(b[K]);return j.join("")}function he(f){if(f.slice)return f.slice(0);var b=new Uint8Array(f.byteLength);return b.set(new Uint8Array(f)),b.buffer}function Oe(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:c.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:c.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():c.arrayBuffer&&c.blob&&d(f)?(this._bodyArrayBuffer=he(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||p(f))?this._bodyArrayBuffer=he(f):this._bodyText=f=Object.prototype.toString.call(f):this._bodyText="",this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var f=C(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=C(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(H)}),this.text=function(){var f=C(this);if(f)return f;if(this._bodyBlob)return z(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ge(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(de)}),this.json=function(){return this.text().then(JSON.parse)},this}var B=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function xe(f){var b=f.toUpperCase();return B.indexOf(b)>-1?b:f}function J(f,b){if(!(this instanceof J))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');b=b||{};var j=b.body;if(f instanceof J){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,b.headers||(this.headers=new _(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!j&&f._bodyInit!=null&&(j=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new _(b.headers)),this.method=xe(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&j)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(j),(this.method==="GET"||this.method==="HEAD")&&(b.cache==="no-store"||b.cache==="no-cache")){var K=/([?&])_=[^&]*/;if(K.test(this.url))this.url=this.url.replace(K,"$1_="+new Date().getTime());else{var Se=/\?/;this.url+=(Se.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}J.prototype.clone=function(){return new J(this,{body:this._bodyInit})};function de(f){var b=new FormData;return f.trim().split("&").forEach(function(j){if(j){var K=j.split("="),Se=K.shift().replace(/\+/g," "),ne=K.join("=").replace(/\+/g," ");b.append(decodeURIComponent(Se),decodeURIComponent(ne))}}),b}function _e(f){var b=new _,j=f.replace(/\r?\n[\t ]+/g," ");return j.split("\r").map(function(K){return K.indexOf(`
`)===0?K.substr(1,K.length):K}).forEach(function(K){var Se=K.split(":"),ne=Se.shift().trim();if(ne){var _t=Se.join(":").trim();b.append(ne,_t)}}),b}Oe.call(J.prototype);function Q(f,b){if(!(this instanceof Q))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');b||(b={}),this.type="default",this.status=b.status===void 0?200:b.status,this.ok=this.status>=200&&this.status<300,this.statusText=b.statusText===void 0?"":""+b.statusText,this.headers=new _(b.headers),this.url=b.url||"",this._initBody(f)}Oe.call(Q.prototype),Q.prototype.clone=function(){return new Q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new _(this.headers),url:this.url})},Q.error=function(){var f=new Q(null,{status:0,statusText:""});return f.type="error",f};var fe=[301,302,303,307,308];Q.redirect=function(f,b){if(fe.indexOf(b)===-1)throw new RangeError("Invalid status code");return new Q(null,{status:b,headers:{location:f}})},a.DOMException=l.DOMException;try{new a.DOMException}catch{a.DOMException=function(b,j){this.message=b,this.name=j;var K=Error(b);this.stack=K.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function ie(f,b){return new Promise(function(j,K){var Se=new J(f,b);if(Se.signal&&Se.signal.aborted)return K(new a.DOMException("Aborted","AbortError"));var ne=new XMLHttpRequest;function _t(){ne.abort()}ne.onload=function(){var ze={status:ne.status,statusText:ne.statusText,headers:_e(ne.getAllResponseHeaders()||"")};ze.url="responseURL"in ne?ne.responseURL:ze.headers.get("X-Request-URL");var kt="response"in ne?ne.response:ne.responseText;setTimeout(function(){j(new Q(kt,ze))},0)},ne.onerror=function(){setTimeout(function(){K(new TypeError("Network request failed"))},0)},ne.ontimeout=function(){setTimeout(function(){K(new TypeError("Network request failed"))},0)},ne.onabort=function(){setTimeout(function(){K(new a.DOMException("Aborted","AbortError"))},0)};function Xt(ze){try{return ze===""&&l.location.href?l.location.href:ze}catch{return ze}}ne.open(Se.method,Xt(Se.url),!0),Se.credentials==="include"?ne.withCredentials=!0:Se.credentials==="omit"&&(ne.withCredentials=!1),"responseType"in ne&&(c.blob?ne.responseType="blob":c.arrayBuffer&&Se.headers.get("Content-Type")&&Se.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(ne.responseType="arraybuffer")),b&&typeof b.headers=="object"&&!(b.headers instanceof _)?Object.getOwnPropertyNames(b.headers).forEach(function(ze){ne.setRequestHeader(ze,y(b.headers[ze]))}):Se.headers.forEach(function(ze,kt){ne.setRequestHeader(kt,ze)}),Se.signal&&(Se.signal.addEventListener("abort",_t),ne.onreadystatechange=function(){ne.readyState===4&&Se.signal.removeEventListener("abort",_t)}),ne.send(typeof Se._bodyInit>"u"?null:Se._bodyInit)})}return ie.polyfill=!0,l.fetch||(l.fetch=ie,l.Headers=_,l.Request=J,l.Response=Q),a.Headers=_,a.Request=J,a.Response=Q,a.fetch=ie,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;t=s.fetch,t.default=s.fetch,t.fetch=s.fetch,t.Headers=s.Headers,t.Request=s.Request,t.Response=s.Response,e.exports=t})(ms,ms.exports);var Oo=ms.exports;const To=$o(Oo);var Co={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Mo=`\r
`,Do="\uFEFF",hi=e=>Object.assign({},Co,e);class Fo extends Error{constructor(t){super(t),this.name="CsvGenerationError"}}let Ro=class extends Error{constructor(t){super(t),this.name="EmptyHeadersError"}};class Lo extends Error{constructor(t){super(t),this.name="CsvDownloadEnvironmentError"}}let jo=class extends Error{constructor(t){super(t),this.name="UnsupportedDataFormatError"}};var pr=e=>e,st=e=>e,kr=pr,di=pr,ir=pr,hn=pr,dn=pr,Bo=function(e,t){return t=='"'&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e},No=e=>hn(typeof e=="object"?e.key:e),Uo=e=>dn(typeof e=="object"?e.displayLabel:e),Ho=(e,...t)=>t.reduce((r,i)=>i(r),e),Wo=e=>t=>e.useBom?di(st(t)+Do):t,Io=e=>t=>e.showTitle?Ts(di(st(t)+e.title))(ir("")):t,Ts=e=>t=>di(st(e)+st(t)+Mo),In=e=>(t,r)=>Vo(e)(ir(st(t)+st(r))),Vo=e=>t=>pr(st(t)+e.fieldSeparator),qo=(e,t)=>r=>{if(!e.showColumnHeaders)return r;if(t.length<1)throw new Ro("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=ir("");for(let s=0;s<t.length;s++){const n=Uo(t[s]);i=In(e)(i,Vn(e,st(n)))}return i=ir(st(i).slice(0,-1)),Ts(r)(i)},zo=(e,t,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=ir("");for(let l=0;l<t.length;l++){const c=No(t[l]),d=r[n][st(c)];a=In(e)(a,Vn(e,d))}a=ir(st(a).slice(0,-1)),s=Ts(s)(a)}return s},Yo=e=>+e===e&&(!isFinite(e)||!!(e%1)),Go=(e,t)=>{if(Yo(t)){if(e.decimalSeparator==="locale")return kr(t.toLocaleString());if(e.decimalSeparator)return kr(t.toString().replace(".",e.decimalSeparator))}return kr(t.toString())},Jr=(e,t)=>{let r=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf(`
`)>-1||t.indexOf("\r")>-1)&&(r=e.quoteCharacter+Bo(t,e.quoteCharacter)+e.quoteCharacter),kr(r)},Xo=(e,t)=>{const r=t?"true":"false";return kr(e.boolDisplay[r])},Qo=(e,t)=>typeof t>"u"&&e.replaceUndefinedWith!==void 0?Jr(e,e.replaceUndefinedWith+""):t===null?Jr(e,"null"):Jr(e,""),Vn=(e,t)=>{if(typeof t=="number")return Go(e,t);if(typeof t=="string")return Jr(e,t);if(typeof t=="boolean"&&e.boolDisplay)return Xo(e,t);if(t===null||typeof t>"u")return Qo(e,t);throw new jo(`
    typeof ${typeof t} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Ko=e=>t=>{const r=hi(e),i=r.useKeysAsHeaders?Object.keys(t[0]):r.columnHeaders;let s=Ho(di(""),Wo(r),Io(r),qo(r,i),zo(r,i,t));if(st(s).length<1)throw new Fo("Output is empty. Is your data formatted correctly?");return s},Zo=e=>t=>{const r=hi(e),i=st(t),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Jo=e=>t=>{if(!window)throw new Lo("Downloading only supported in a browser environment.");const r=Zo(e)(t),i=hi(e),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function De(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ut(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function fn(e,t){const r=De(e);return isNaN(t)?ut(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function qn(e,t){const r=De(e);if(isNaN(t))return ut(e,NaN);if(!t)return r;const i=r.getDate(),s=ut(e,r.getTime());s.setMonth(r.getMonth()+t+1,0);const n=s.getDate();return i>=n?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}function el(e,t){const r=+De(e);return ut(e,r+t)}const zn=6048e5,tl=864e5,rl=36e5;function il(e,t){return el(e,t*rl)}let sl={};function Fr(){return sl}function sr(e,t){var l,c,d,m;const r=Fr(),i=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??r.weekStartsOn??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,s=De(e),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ti(e){return sr(e,{weekStartsOn:1})}function Yn(e){const t=De(e),r=t.getFullYear(),i=ut(e,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=ti(i),n=ut(e,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=ti(n);return t.getTime()>=s.getTime()?r+1:t.getTime()>=a.getTime()?r:r-1}function gs(e){const t=De(e);return t.setHours(0,0,0,0),t}function pn(e){const t=De(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function nl(e,t){const r=gs(e),i=gs(t),s=+r-pn(r),n=+i-pn(i);return Math.round((s-n)/tl)}function al(e){const t=Yn(e),r=ut(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),ti(r)}function ol(e,t){return qn(e,t*12)}function ll(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Gn(e){if(!ll(e)&&typeof e!="number")return!1;const t=De(e);return!isNaN(Number(t))}function cl(e){const t=De(e);return t.setHours(23,59,59,999),t}function ul(e){const t=De(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function hl(e){const t=De(e);return t.setDate(1),t.setHours(0,0,0,0),t}function dl(e){const t=De(e),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function Xn(e){const t=De(e),r=ut(e,0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}function fl(e){const t=De(e);return t.setMinutes(59,59,999),t}function pl(e,t){var l,c;const r=Fr(),i=r.weekStartsOn??((c=(l=r.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??0,s=De(e),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const ml={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gl=(e,t,r)=>{let i;const s=ml[e];return typeof s=="string"?i=s:t===1?i=s.one:i=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ns(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const vl={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},bl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yl={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wl={date:ns({formats:vl,defaultWidth:"full"}),time:ns({formats:bl,defaultWidth:"full"}),dateTime:ns({formats:yl,defaultWidth:"full"})},xl={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_l=(e,t,r,i)=>xl[e];function wr(e){return(t,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=e.formattingValues[l]||e.formattingValues[a]}else{const a=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[l]||e.values[a]}const n=e.argumentCallback?e.argumentCallback(t):t;return s[n]}}const kl={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$l={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Sl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},El={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Al={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ol=(e,t)=>{const r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Tl={ordinalNumber:Ol,era:wr({values:kl,defaultWidth:"wide"}),quarter:wr({values:$l,defaultWidth:"wide",argumentCallback:e=>e-1}),month:wr({values:Sl,defaultWidth:"wide"}),day:wr({values:Pl,defaultWidth:"wide"}),dayPeriod:wr({values:El,defaultWidth:"wide",formattingValues:Al,defaultFormattingWidth:"wide"})};function xr(e){return(t,r={})=>{const i=r.width,s=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=t.match(s);if(!n)return null;const a=n[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?Ml(l,p=>p.test(a)):Cl(l,p=>p.test(a));let d;d=e.valueCallback?e.valueCallback(c):c,d=r.valueCallback?r.valueCallback(d):d;const m=t.slice(a.length);return{value:d,rest:m}}}function Cl(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Ml(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Dl(e){return(t,r={})=>{const i=t.match(e.matchPattern);if(!i)return null;const s=i[0],n=t.match(e.parsePattern);if(!n)return null;let a=e.valueCallback?e.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=t.slice(s.length);return{value:a,rest:l}}}const Fl=/^(\d+)(th|st|nd|rd)?/i,Rl=/\d+/i,Ll={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},jl={any:[/^b/i,/^(a|c)/i]},Bl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Nl={any:[/1/i,/2/i,/3/i,/4/i]},Ul={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Hl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Il={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ql={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zl={ordinalNumber:Dl({matchPattern:Fl,parsePattern:Rl,valueCallback:e=>parseInt(e,10)}),era:xr({matchPatterns:Ll,defaultMatchWidth:"wide",parsePatterns:jl,defaultParseWidth:"any"}),quarter:xr({matchPatterns:Bl,defaultMatchWidth:"wide",parsePatterns:Nl,defaultParseWidth:"any",valueCallback:e=>e+1}),month:xr({matchPatterns:Ul,defaultMatchWidth:"wide",parsePatterns:Hl,defaultParseWidth:"any"}),day:xr({matchPatterns:Wl,defaultMatchWidth:"wide",parsePatterns:Il,defaultParseWidth:"any"}),dayPeriod:xr({matchPatterns:Vl,defaultMatchWidth:"any",parsePatterns:ql,defaultParseWidth:"any"})},Yl={code:"en-US",formatDistance:gl,formatLong:wl,formatRelative:_l,localize:Tl,match:zl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Gl(e){const t=De(e);return nl(t,Xn(t))+1}function Xl(e){const t=De(e),r=+ti(t)-+al(t);return Math.round(r/zn)+1}function Qn(e,t){var m,p,x,y;const r=De(e),i=r.getFullYear(),s=Fr(),n=(t==null?void 0:t.firstWeekContainsDate)??((p=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((y=(x=s.locale)==null?void 0:x.options)==null?void 0:y.firstWeekContainsDate)??1,a=ut(e,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=sr(a,t),c=ut(e,0);c.setFullYear(i,0,n),c.setHours(0,0,0,0);const d=sr(c,t);return r.getTime()>=l.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function Ql(e,t){var l,c,d,m;const r=Fr(),i=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,s=Qn(e,t),n=ut(e,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),sr(n,t)}function Kl(e,t){const r=De(e),i=+sr(r,t)-+Ql(r,t);return Math.round(i/zn)+1}function ue(e,t){const r=e<0?"-":"",i=Math.abs(e).toString().padStart(t,"0");return r+i}const Mt={y(e,t){const r=e.getFullYear(),i=r>0?r:1-r;return ue(t==="yy"?i%100:i,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):ue(r+1,2)},d(e,t){return ue(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return ue(e.getHours()%12||12,t.length)},H(e,t){return ue(e.getHours(),t.length)},m(e,t){return ue(e.getMinutes(),t.length)},s(e,t){return ue(e.getSeconds(),t.length)},S(e,t){const r=t.length,i=e.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return ue(s,t.length)}},Jt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mn={G:function(e,t,r){const i=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const i=e.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Mt.y(e,t)},Y:function(e,t,r,i){const s=Qn(e,i),n=s>0?s:1-s;if(t==="YY"){const a=n%100;return ue(a,2)}return t==="Yo"?r.ordinalNumber(n,{unit:"year"}):ue(n,t.length)},R:function(e,t){const r=Yn(e);return ue(r,t.length)},u:function(e,t){const r=e.getFullYear();return ue(r,t.length)},Q:function(e,t,r){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return ue(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,r){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return ue(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,r){const i=e.getMonth();switch(t){case"M":case"MM":return Mt.M(e,t);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,r){const i=e.getMonth();switch(t){case"L":return String(i+1);case"LL":return ue(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){const s=Kl(e,i);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):ue(s,t.length)},I:function(e,t,r){const i=Xl(e);return t==="Io"?r.ordinalNumber(i,{unit:"week"}):ue(i,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Mt.d(e,t)},D:function(e,t,r){const i=Gl(e);return t==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ue(i,t.length)},E:function(e,t,r){const i=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,r,i){const s=e.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return ue(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,i){const s=e.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return ue(n,t.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const i=e.getDay(),s=i===0?7:i;switch(t){case"i":return String(s);case"ii":return ue(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const i=e.getHours();let s;switch(i===12?s=Jt.noon:i===0?s=Jt.midnight:s=i/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const i=e.getHours();let s;switch(i>=17?s=Jt.evening:i>=12?s=Jt.afternoon:i>=4?s=Jt.morning:s=Jt.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let i=e.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Mt.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Mt.H(e,t)},K:function(e,t,r){const i=e.getHours()%12;return t==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ue(i,t.length)},k:function(e,t,r){let i=e.getHours();return i===0&&(i=24),t==="ko"?r.ordinalNumber(i,{unit:"hour"}):ue(i,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Mt.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Mt.s(e,t)},S:function(e,t){return Mt.S(e,t)},X:function(e,t,r){const i=e.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return vn(i);case"XXXX":case"XX":return Wt(i);case"XXXXX":case"XXX":default:return Wt(i,":")}},x:function(e,t,r){const i=e.getTimezoneOffset();switch(t){case"x":return vn(i);case"xxxx":case"xx":return Wt(i);case"xxxxx":case"xxx":default:return Wt(i,":")}},O:function(e,t,r){const i=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+gn(i,":");case"OOOO":default:return"GMT"+Wt(i,":")}},z:function(e,t,r){const i=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+gn(i,":");case"zzzz":default:return"GMT"+Wt(i,":")}},t:function(e,t,r){const i=Math.trunc(e.getTime()/1e3);return ue(i,t.length)},T:function(e,t,r){const i=e.getTime();return ue(i,t.length)}};function gn(e,t=""){const r=e>0?"-":"+",i=Math.abs(e),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+t+ue(n,2)}function vn(e,t){return e%60===0?(e>0?"-":"+")+ue(Math.abs(e)/60,2):Wt(e,t)}function Wt(e,t=""){const r=e>0?"-":"+",i=Math.abs(e),s=ue(Math.trunc(i/60),2),n=ue(i%60,2);return r+s+t+n}const bn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Kn=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Zl=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return bn(e,t);let n;switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"});break}return n.replace("{{date}}",bn(i,t)).replace("{{time}}",Kn(s,t))},Jl={p:Kn,P:Zl},ec=/^D+$/,tc=/^Y+$/,rc=["D","DD","YY","YYYY"];function ic(e){return ec.test(e)}function sc(e){return tc.test(e)}function nc(e,t,r){const i=ac(e,t,r);if(console.warn(i),rc.includes(e))throw new RangeError(i)}function ac(e,t,r){const i=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const oc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,lc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,cc=/^'([^]*?)'?$/,uc=/''/g,hc=/[a-zA-Z]/;function Zn(e,t,r){var m,p,x,y;const i=Fr(),s=i.locale??Yl,n=i.firstWeekContainsDate??((p=(m=i.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,a=i.weekStartsOn??((y=(x=i.locale)==null?void 0:x.options)==null?void 0:y.weekStartsOn)??0,l=De(e);if(!Gn(l))throw new RangeError("Invalid time value");let c=t.match(lc).map($=>{const _=$[0];if(_==="p"||_==="P"){const C=Jl[_];return C($,s.formatLong)}return $}).join("").match(oc).map($=>{if($==="''")return{isToken:!1,value:"'"};const _=$[0];if(_==="'")return{isToken:!1,value:dc($)};if(mn[_])return{isToken:!0,value:$};if(_.match(hc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:$}});s.localize.preprocessor&&(c=s.localize.preprocessor(l,c));const d={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return c.map($=>{if(!$.isToken)return $.value;const _=$.value;(sc(_)||ic(_))&&nc(_,t,String(e));const C=mn[_[0]];return C(l,_,s.localize,d)}).join("")}function dc(e){const t=e.match(cc);return t?t[1].replace(uc,"'"):e}function Cs(e,t){const r=De(e);if(!Gn(r))throw new RangeError("Invalid time value");const i=(t==null?void 0:t.format)??"extended",s=(t==null?void 0:t.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const c=ue(r.getDate(),2),d=ue(r.getMonth()+1,2);n=`${ue(r.getFullYear(),4)}${a}${d}${a}${c}`}if(s!=="date"){const c=ue(r.getHours(),2),d=ue(r.getMinutes(),2),m=ue(r.getSeconds(),2);n=`${n}${n===""?"":" "}${c}${l}${d}${l}${m}`}return n}function fc(e){const t=De(e);return t.setMinutes(0,0,0),t}var pc=Ao.pool({maxWorkers:8}),fi=pc,Rr=class{constructor(){this.pool=fi}},nt=class{constructor(e,t){this.parent=e,this._initial=t,this._listeners={},this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(e){this._value=this.validate(e),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(t=>t(this._value))}addListener(e,t){e in this._listeners&&delete this._listeners[e],this._listeners[e]=t}removeListener(e){e in this._listeners&&delete this._listeners[e]}clearAllListeners(){this._listeners={}}},mc=class extends nt{constructor(e,t){super(e,t),this.parent=e,this.framesByTimestamp=new Map,this.framesByMs=new Map,this.framesByIndex=new Map,this.localTimeline=[],this._onChangeListeners=new Map;const r=this.parent.frames[0].timestamp;this.frames=this.parent.frames.map((i,s)=>{const n=i.timestamp-r,a={...i,index:s,ms:n};return this.framesByIndex.set(s,a),this.framesByMs.set(a.ms,a),this.framesByTimestamp.set(a.timestamp,a),this.localTimeline.push(a.ms),a}),this._currentFrame=this.frames[0]}get duration(){return this.parent.duration}get frameCount(){return this.frames.length}set currentFrame(e){e.ms!==this._currentFrame.ms&&(this._currentFrame=e,this._onChangeListeners.forEach(t=>t(this._currentFrame)),this.parent.pixels=e.pixels)}get currentFrame(){return this._currentFrame}get nextFrame(){const t=this.currentFrame.index+1;if(t<=this.frameCount)return this.framesByIndex.get(t)}get nextFrameTimeoutDuration(){if(this.nextFrame!==void 0)return this.nextFrame.ms-this.currentFrame.ms}addChangeListener(e,t){this._onChangeListeners.set(e,t)}removeChangeListener(e){this._onChangeListeners.delete(e)}getNextFrameToMs(e){const t=this.localTimeline.find(r=>r>e);if(t!==void 0)return this.framesByMs.get(t)}getPreviousFrameToMs(e){const t=this.localTimeline.reverse().find(r=>r<e);if(t!==void 0)return this.framesByMs.get(t)}validate(e){return e<0?0:e<=this.duration?e:this.duration}afterSetEffect(e){if(e!==this.currentFrame.ms)if(this.localTimeline.includes(e)){const t=this.framesByMs.get(e);this.currentFrame.ms!==t.ms&&(this.currentFrame=t)}else{const t=this.getPreviousFrameToMs(e);t&&t.ms!==this.currentFrame.ms&&(this.currentFrame=t)}}setMs(e){this.value=e}setValueByPercent(e){const t=Math.min(Math.max(e,0),100),r=this.duration/100*t;this.value=Math.floor(r),console.log("Nastavil jsem čas na",this.value)}goToNextFrame(){this.nextFrame&&(this.value=this.nextFrame.ms)}static formatDuration(e){const t=e%1e3,r=(e-t)%(1e3*60);return[(e-t-r)/(1e3*60*60),r,t].join(":")}play(){this.timer=setInterval(()=>{this.goToNextFrame()},this.nextFrameTimeoutDuration)}pause(){clearInterval(this.timer)}stop(){clearInterval(this.timer),this.setMs(0)}},Jn=class extends nt{validate(e){return e}afterSetEffect(){}recalculateFromCursor(e){e&&(this.value=this._getValueAtCoordinate(e.x,e.y))}_getValueAtCoordinate(e,t){if(e===void 0||t===void 0)return;const r=e+t*this.parent.width;return this.parent.pixels[r]}},ea=class extends Rr{constructor(e,t,r,i,s,n,a,l,c,d,m){super(),this.frames=[],this.signature="unknown",this.version=-1,this.streamCount=-1,this.fileDataType=-1,this.unit=-1,this._isHover=!1,this.root=null,this._mounted=!1,this._onHover=void 0,this._onClick=void 0,this.group=e,this.id=this.formatId(t),this.url=t,this.thermalUrl=t,this.visibleUrl=m,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=r,this.height=i,this.timestamp=n,this.duration=a,this.min=l,this.max=c,this.frameCount=d,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const t=this.width,r=this.root.clientWidth,i=t/r,s=Math.round(e.offsetX*i),n=Math.round(e.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:n}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){console.log("drawing",this.fileName,this.group.id),this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){console.log(e),this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,t){const r=t*this.width+e;return this.pixels[r]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},gc=class{constructor(e){this.file=e}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(e="__thermal-data"){const t=hi({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",e)}),r=this.file.frames.map(s=>{const{pixels:n,...a}=s;return console.log(n),a}),i=Ko(t)(r);Jo(t)(i)}},pi=class{constructor(e){this.instance=e,this._mounted=!1}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},gt=class vs{static createCanvasContainer(){const t=document.createElement("div");return t.classList.add("thermalCanvasWrapper"),t.style.position="relative",t}static createCanvas(){const t=document.createElement("canvas");return t.classList.add("thermalCanvas"),t.style.padding="0px",t.style.margin="0px",t.style.objectFit="contain",t.style.width="100%",t.style.height="100%",t.style.objectPosition="top left",t}static createDateLayer(){const t=document.createElement("div");return t.classList.add("dateLayer"),t.style.margin="0px",t.style.padding="0px",t.style.position="absolute",t.style.top="0px",t.style.left="0%",t.style.width="100%",t.style.fontSize="small",t}static createDateLayerInner(){const t=document.createElement("div");return t.classList.add("dateLayerInner"),t.style.margin="0px",t.style.padding=".3rem 0rem",t.style.backgroundColor="black",t.style.color="white",t.style.borderRadius=".5rem .5rem 0 0",t.style.width="calc(100% + 4px )",t.style.position="absolute",t.style.top="0rem",t.style.left="-2px",t.style.opacity="0",t.style.transition="opacity .1s ease-in-out",t.style.textAlign="center",t}static createVisibleLayer(){const t=document.createElement("div");return t.classList.add("visibleLayer"),t.style.margin="0px",t.style.padding="0px",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t}static createVisibleImage(){const t=document.createElement("img");return t.classList.add("visibleLayerImage"),t.style.padding="0px",t.style.margin="0px",t.style.objectFit="contain",t.style.width="100%",t.style.height="100%",t.style.objectPosition="top left",t}static createListener(){const t=document.createElement("div");return t.classList.add("thermalListener"),t.style.margin="0px",t.style.padding="0px",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.cursor="pointer",t.setAttribute("id",Math.random().toString()),t}static createCursorLayerRoot(){const t=document.createElement("div");return t.classList.add("cursorLayerRoot"),t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.opacity="0",t.style.overflow="hidden",t.style.lineHeight="1rem",t}static createCursorLayerCenter(){const t=document.createElement("div");return t.classList.add("cursorLayerCenter"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.width="0px",t.style.height="0px",t}static createCursorLayerAxeBase(){const t=document.createElement("div");return t.classList.add("cursorLayerAxe"),t.style.backdropFilter="invert(100)",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.content="",t}static createCursorLayerX(){const t=vs.createCursorLayerAxeBase();return t.classList.add("cursorLayerAxeX"),t.style.width="1px",t.style.height="20px",t.style.top="-10px",t}static createCursorLayerY(){const t=vs.createCursorLayerAxeBase();return t.classList.add("cursorLayerAxeY"),t.style.width="20px",t.style.height="1px",t.style.left="-10px",t}static createCursorLayerLabel(){const t=document.createElement("div");return t.classList.add("cursorLayerLabel"),t.style.position="absolute",t.style.padding="1px 3px",t.style.backgroundColor="rgba( 0,0,0,0.5 )",t.style.color="white",t.style.whiteSpace="nowrap",t.style.fontSize="small",t.style.borderRadius="5px",t}},ta=class extends pi{constructor(e,t){super(e),this._url=t,this.container=gt.createVisibleLayer(),this._url&&(this.image=gt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},ra=class extends pi{constructor(e){super(e),this.pool=fi,this._opacity=1,this.container=gt.createCanvasContainer(),this.canvas=gt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),t=await this.pool.exec(async(r,i,s,n,a,l)=>{const d=new OffscreenCanvas(s,n).getContext("2d"),m=i-r;for(let y=0;y<=s;y++)for(let $=0;$<=n;$++){const _=y+$*s;let C=a[_];C<r&&(C=r),C>i&&(C=i);const H=(C-r)/m,z=Math.round(255*H),ge=l[z];d.fillStyle=ge,d.fillRect(y,$,1,1)}const p=d.getImageData(0,0,s,n);return await createImageBitmap(p)},[this.from,this.to,this.width,this.height,this.pixels,e],{});console.log(this.pool.stats()),this.context.drawImage(t,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},ia=class extends pi{constructor(e){super(e),this._show=!1,this._hover=!1,this.layerRoot=gt.createCursorLayerRoot(),this.center=gt.createCursorLayerCenter(),this.axisX=gt.createCursorLayerX(),this.axisY=gt.createCursorLayerY(),this.label=gt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,t,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${r.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},sa=class extends pi{constructor(e){super(e),this.container=gt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},vc=class extends ea{constructor(e,t){super(t,e.url,e.width,e.height,e.pixels,e.timestamp,e.duration,e.min,e.max,e.frameCount,e.visibleUrl),this.source=e,this.group=t}get dataType(){return this.source.fileDataType}getPixelsForHistogram(){return this.source.pixelsForHistogram}postInit(){return this.signature=this.source.signature,this.unit=this.source.unit,this.version=this.source.version,this.streamCount=this.source.streamCount,this.fileDataType=this.source.fileDataType,this.frames=this.source.frames,this.timeline=new mc(this,0),this.pixels=this.timeline.currentFrame.pixels,this.canvasLayer=new ra(this),this.visibleLayer=new ta(this,this.visibleUrl),this.cursorLayer=new ia(this),this.listenerLayer=new sa(this),this.cursorValue=new Jn(this,void 0),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(e){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const t=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(t)}}get unitHuman(){return this.unit===0?"none":this.unit===1?"intensity":this.unit===2?"°C":this.unit===3?"Kelvin":"unit not specified"}get dataTypeHuman(){return this.dataType===0?"Float16":this.dataType===1?"Float32":this.dataType===2?"Int16":"error parsing data type"}get export(){if(!this._export){const e=new gc(this);this._export=e}return this._export}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){this.export.thermalDataAsCsv()}},Vt=class extends Rr{constructor(e,t,r,i,s,n,a,l,c,d,m,p,x,y,$){super(),this.url=e,this.signature=t,this.version=r,this.streamCount=i,this.fileDataType=s,this.unit=n,this.width=a,this.height=l,this.timestamp=c,this.pixels=d,this.min=m,this.max=p,this.frameCount=x,this.frames=y,this.visibleUrl=$,this.fileName=this.url.substring(this.url.lastIndexOf("/")+1);let _=[];this.frames.forEach(C=>{_=_.concat(C.pixels)}),this.pixelsForHistogram=_,this.duration=this.frames.length===0?0:this.frames[this.frames.length-1].timestamp-this.frames[0].timestamp}static async fromUrl(e,t){try{return await bs.fromUrl(e,t)}catch{return null}}static async fromUrlWithErrors(e,t){return await bs.fromUrl(e,t)}createInstance(e){const t=new vc(this,e);return t.postInit(),t}},bc=class{constructor(e,t,r){this.url=e,this.blob=t,this.visibleUrl=r,this.isValidTimestamp=i=>Number.isInteger(i),this.isValidWidth=i=>Number.isInteger(i),this.isValidHeight=i=>Number.isInteger(i),this.isValidPixels=i=>i!==void 0&&i.length===this.width*this.height,this.isValidMin=i=>i!==void 0,this.isValidMax=i=>i!==void 0,this.isValidFrameCount=i=>Number.isInteger(i),this.isValidFrames=i=>i===void 0||this.frameCount===void 0?!1:i.length===this.frameCount,this.errors=[]}async init(){const e=await this.blob.arrayBuffer();this.data=new DataView(e);const t=e.slice(25);return this.frameSubset=t,this}async parse(){return await this.init(),await this.parseFile(),this.getThermalFile()}parseTimestamp(){const e=this.getTimestamp();this.isValidTimestamp(e)||this.logValidationError("timestamp",e),this.timestamp=e}parseWidth(){const e=this.getWidth();this.isValidWidth(e)||this.logValidationError("width",e),this.width=e}parseHeight(){const e=this.getHeight();this.isValidHeight(e)||this.logValidationError("height",e),this.height=e}async parsePixels(){const e=this.getPixels();this.pixels=e}parseMin(){const e=this.getMin();this.isValidMin(e)||this.logValidationError("min",e),this.min=e}parseMax(){const e=this.getMax();this.isValidMax(e)||this.logValidationError("max",e),this.max=e}parseFrameCount(){const e=this.getFrameCount();this.isValidFrameCount(e)||this.logValidationError("frameCount",e),this.frameCount=e}parseFrames(){const e=this.getFrames();this.isValidFrames(e)||this.logValidationError("frames",e.toString()),this.frames=e}logError(e){console.error(e),this.errors.push(e)}logValidationError(e,t){const r=`Invalid ${e} of ${this.url}: '${t.toString()}'`;this.logError(r)}getErrors(){return this.errors}encodeErrors(){return this.errors.join("+|+")}static decodeErrors(e){return e.split("+|+")}},Ge=class{static readDotnetTimestamp(e,t){const r=t.getBigInt64(e,!0),i=62135596800000n,s=10000n,n=24n*60n*60n*1000n*s,a=0x4000000000000000n,l=0x8000000000000000n;let d=r&0x3FFFFFFFFFFFFFFFn;r&l&&(d>a-n&&(d-=a),d<0&&(d+=n));const p=d/s-i;return Number(p)}static readFloat32(e,t){return t.getFloat32(e,!0)}static read8bNumber(e,t){return t.getUint8(e)}static readTemperatureArray(e,t,r,i,s){const n=t.buffer.slice(e);if(r===0){const a=new Uint16Array(n),l=Math.abs(i-s),c=65535;return[...a].map(d=>{const m=d/c;return i+l*m})}else if(r===1)return[...new Float32Array(n)];return[]}},yc=class{constructor(e,t,r,i,s,n,a){this.arrayBuffer=e,this.width=t,this.height=r,this.dataType=i,this.frameCount=s,this.frameByteSize=n,this.pixelByteSize=a}parseFrame(e){if(!Number.isInteger(e))throw new Error(`The frame index ${e} is invalid!`);const t=e*this.frameByteSize,r=t+this.frameByteSize,i=this.arrayBuffer.slice(t,r),s=new DataView(i),n=Ge.readFloat32(8,s),a=Ge.readFloat32(12,s);return{timestamp:Ge.readDotnetTimestamp(0,s),min:n,max:a,modeMinInKelvin:Ge.readFloat32(16,s),modeMaxInKelvin:Ge.readFloat32(20,s),emissivity:Ge.readFloat32(24,s),reflectedTemperaatureInKelvin:Ge.readFloat32(28,s),distance:Ge.readFloat32(32,s),atmosphereTemperatureInKelvin:Ge.readFloat32(36,s),relativeHumidity:Ge.readFloat32(40,s),tau:Ge.readFloat32(44,s),windowTemperature:Ge.readFloat32(48,s),windowTransmissivity:Ge.readFloat32(52,s),isTauSet:Ge.read8bNumber(53,s),pixels:Ge.readTemperatureArray(57,s,this.dataType,n,a)}}},wc=class extends bc{constructor(){super(...arguments),this.isValidSignature=e=>e==="LRC\0",this.isValidVersion=e=>e===2,this.isStreamCountValid=e=>e===1,this.isDataTypeValid=e=>e===void 0?!1:[0,1,2].includes(e),this.isValidUnit=e=>e===2}async parseFile(){await this.parseSignature(),this.parseVersion(),this.parseDataType(),this.parseStreamCount(),this.parseTimestamp(),this.parseUnit(),this.parseWidth(),this.parseHeight(),this.parseFrameCount(),this.parseFrames(),this.parseMin(),this.parseMax(),await this.parsePixels()}async parseSignature(){const e=await this.readString(0,4);this.isValidSignature(e)||this.logValidationError("signature",e),this._signature=e}parseVersion(){const e=this.read8bNumber(4);this.isValidVersion(e)||this.logValidationError("version",e),this._version=e}parseStreamCount(){const e=this.read8bNumber(14);this.isStreamCountValid(e)||this.logValidationError("streamCount",e),this._streamCount=e}parseDataType(){const e=this.read8bNumber(15);this.isDataTypeValid(e)||this.logValidationError("fileDataType",e),this._fileDataType=e,this._pixelByteLength=e===0?2:4}get pixelByteLength(){return this._pixelByteLength}parseUnit(){const e=this.read8bNumber(16);this.isValidUnit(e)||this.logValidationError("unit",e),this._unit=e}getFrameCount(){return this.getNumberOfFrames()}getMin(){return this.frames.reduce((e,t)=>t.min<e?t.min:e,1/0)}getMax(){return this.frames.reduce((e,t)=>t.max>e?t.max:e,-1/0)}getWidth(){return this.read16bNumber(17)}getHeight(){return this.read16bNumber(19)}getTimestamp(){return Ge.readDotnetTimestamp(5,this.data)}getFrameSize(){if(this._fileDataType===void 0||this.width===void 0||this.height===void 0||this.pixelByteLength===void 0)throw new Error("Trying to read frame size before necessary attributes are known");return 57+this.width*this.height*this.pixelByteLength}getNumberOfFrames(){const e=this.getFrameSize();return this.frameSubset.byteLength/e}getFrames(){const e=[],t=new yc(this.frameSubset,this.width,this.height,this._fileDataType,this.frameCount,this.getFrameSize(),this.pixelByteLength);for(let r=0;r<this.frameCount;r++)e.push(t.parseFrame(r));return e}async readTemperatureArray(e){const t=(await this.blob.arrayBuffer()).slice(e,e+this.width*this.height*this.pixelByteLength);if(this._fileDataType===0){const r=new Uint16Array(t),i=Math.abs(this.min-this.max),s=65535;return[...r].map(n=>{const a=n/s;return this.min+i*a})}else if(this._fileDataType===1)return[...new Float32Array(t)];return[]}getPixels(){return this.frames&&this.frames.length>0?this.frames[0].pixels:[]}isValid(){return this.errors.length===0&&this.isValidSignature(this._signature)&&this.isStreamCountValid(this._streamCount)&&this.isDataTypeValid(this._fileDataType)&&this.isValidVersion(this._version)&&this.isValidUnit(this._unit)&&this.isValidTimestamp(this.timestamp)&&this.isValidWidth(this.width)&&this.isValidHeight(this.height)&&this.isValidPixels(this.pixels)&&this.isValidMin(this.min)&&this.isValidMax(this.max)&&this.isValidFrameCount(this.frameCount)}getThermalFile(){if(!this.isValid())throw new Error(this.encodeErrors());return new Vt(this.url,this._signature,this._version,this._streamCount,this._fileDataType,this._unit,this.width,this.height,this.timestamp,this.pixels,this.min,this.max,this.frameCount,this.frames,this.visibleUrl)}async readString(e,t){return await this.blob.slice(e,t).text()}read16bNumber(e){return this.data.getUint16(e,!0)}read8bNumber(e){return this.data.getUint8(e)}},bs=class ys{constructor(){}static async fromUrl(t,r){const i=new ys;return i.thermalUrl=t,i.visibleUrl=r,await i.loadFromUrl()}async loadFromUrl(){const t=await To(this.thermalUrl);if(this.blob=await t.blob(),t.status!==200)throw new Error(`There was an error loading '${this.thermalUrl}'`);return this.parser=this.getParserInstance(),await this.parser.parse()}static async fromFile(t){const r=new ys;return r.thermalUrl=t.name,r.blob=t,await r.loadFromBlob()}async loadFromBlob(){return this.parser=this.getParserInstance(),await this.parser.parse()}getParserInstance(){if(this.thermalUrl.endsWith(".lrc"))return new wc(this.thermalUrl,this.blob,this.visibleUrl);throw new Error("No parser found!")}},xc=class extends nt{validate(e){return Math.min(Math.max(0,e),1)}afterSetEffect(e){this.parent.forEveryInstance(t=>t.recieveOpacity(e))}imposeOpacity(e){return this.value=e,this.value}},_c=class extends nt{validate(e){if(e===void 0)return;const t=this.parent.minmax.value;if(t===void 0)return e;const r={...e};return e.from<t.min&&(r.from=t.min),e.to>t.max&&(r.to=t.max),r}afterSetEffect(e){e&&this.parent.forEveryInstance(t=>t.recieveRange(e))}imposeRange(e){return e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const t=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=t);console.log(this.parent.histogram.value);const i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},kc=class extends nt{constructor(){super(...arguments),this._hover=this.value!==void 0}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.instances.forEveryInstance(t=>t.recieveCursorPosition(e)),this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},$c=class extends nt{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(e,t,r){this.parent.registry.fetcher.request(e,t,(i,s)=>{if(i instanceof Vt){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(e,t){this._requestedRemovals.has(e)?t&&this._requestedRemovals.get(e).callbacks.push(t):this._requestedRemovals.set(e,{url:e,callbacks:t?[t]:[]})}async cleanup(){const e=Object.values(this._requestedRemovals).map(t=>t.url);this.value=this.value.filter(t=>{var i;return e.includes(t.url)?((i=this._requestedRemovals.get(t.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}instantiateSource(e){if(this._map.has(e.url))return this._map.get(e.url);{const t=e.createInstance(this.parent);return this.value=[...this.value,t],t}}instantiateSources(e){const t=[];e.forEach(r=>{this._map.has(r.url)||t.push(r.createInstance(this.parent))}),this.value=t}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},Sc=class extends nt{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(e,t,r){this.parent.registry.fetcher.request(e,t,(i,s)=>{if(i instanceof Vt){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(e,t){this._requestedRemovals.has(e)?t&&this._requestedRemovals.get(e).callbacks.push(t):this._requestedRemovals.set(e,{url:e,callbacks:t?[t]:[]})}async cleanup(){const e=Object.values(this._requestedRemovals).map(t=>t.url);this.value=this.value.filter(t=>{var i;return e.includes(t.url)?((i=this._requestedRemovals.get(t.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}instantiateSource(e){if(this._map.has(e.url))return this._map.get(e.url);{const t=e.createInstance(this.parent);return this.value=[...this.value,t],t}}instantiateSources(e){const t=[];e.forEach(r=>{this._map.has(r.url)||t.push(r.createInstance(this.parent))}),this.value=t}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},na=class extends nt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Pc=class extends na{validate(e){return e}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const e=this.parent.files.value;if(console.log(e),e.length!==0)return e.reduce((t,r)=>r.min<t.min||r.max>t.max?{min:r.min<t.min?r.min:t.min,max:r.max>t.max?r.max:t.max}:t,{min:1/0,max:-1/0})}},Ec=class extends Rr{constructor(e,t,r,i){super(),this.registry=e,this.id=t,this.name=r,this.description=i,this.hash=Math.random(),this.minmax=new Pc(this,void 0),this.instances=new Sc(this,[]),this.files=new $c(this,[]),this.cursorPosition=new kc(this,void 0),this.forEveryInstance=s=>{this.instances.value.forEach(n=>s(n))}}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.instances.removeAllInstances()}reset(){this.instances.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Ac=class extends nt{constructor(){super(...arguments),this._map=new Map}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,r){if(this._map.has(e))return this._map.get(e);const i=new Ec(this.parent,e,t,r);return this._map.set(e,i),this.value.push(i),this.value=[...this.value],i}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Oc=class extends nt{constructor(){super(...arguments),this._resolution=150,this.buffer=new Map,this.bufferPixelsCount=0,this._bufferResolution=1e3}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e.length!==this.resolution+1&&e.length,e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}refreshBufferFromCurrentPixels(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.instances.value.map(r=>r.getPixelsForHistogram()));this.parent.pool.exec((t,r,i,s,n)=>{let l=t.reduce((x,y)=>{const $=y.reduce((_,C)=>[..._,...C],[]);return[...x,...$]},[]).sort((x,y)=>x-y);const c=s/n;let d=r+c;const m=new Map;let p=0;for(;d!==!1;){const x=l.findIndex(_=>_>d),y=l.slice(0,x).length;m.set(d-c/2,y),p+=y,l=l.slice(x);const $=d+c;d=$<i?$:!1}return{result:m,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}recalculateHistogram(){if(this.parent.minmax.value!==void 0&&this.parent.minmax.distanceInCelsius!==void 0){let e=Array.from(this.buffer.keys()),t=Array.from(this.buffer.values());const r=this.parent.minmax.value,i=this.parent.minmax.distanceInCelsius/this.resolution,s=[];let n=0,a=r.min;for(;a<r.max;){const c=a,d=a+i,m=e.findIndex($=>$>=d),x=t.slice(0,m).reduce(($,_)=>$+_,0),y=x/this.bufferPixelsCount;s.push({from:c,to:d,percentage:y,count:x}),n<x&&(n=x),e=e.slice(m),t=t.slice(m),a+=i}const l=s.map(c=>({...c,height:c.count/n*100}));this.value=l}}_getHistorgramFromAllGroups(){if(this.parent.minmax.value===void 0||this.parent.groups.value.length,this.parent.minmax.value===void 0||this.parent.groups.value.length===0)return[];{const e=this.parent.groups.value.reduce((d,m)=>{const p=m.instances.value.reduce((x,y)=>(x=[...x,...y.pixels],x),[]);return[...d,...p]},[]),t=[],r=this.resolution,s=(this.parent.minmax.value.max-this.parent.minmax.value.min)/r;for(let d=0;d<r;d++){const m=s*d+this.parent.minmax.value.min,p=m+s;t.push([m,p])}const n=[];let a=e.length;for(const d of t){const m=e.filter(p=>p>=d[0]&&p<d[1]).length;a=a+m,n.push({from:d[0],to:d[1],count:m})}const l=n.map(d=>({...d,percentage:d.count/a*100})),c=Math.max(...l.map(d=>d.percentage));return l.map(d=>({...d,height:d.percentage/c*100}))}}},Tc=class extends nt{validate(e){return e}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Cc=class extends na{validate(e){return e}afterSetEffect(){}recalculateFromGroups(){const e=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(e),this.value}_getMinmaxFromAllGroups(e){return e.length===0?void 0:e.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Mc=class{constructor(e){this.registry=e,this.requests=new Map}get requestArray(){return Array.from(this.requests.values())}request(e,t,r){var i;if(this.requests.has(e))r&&((i=this.requests.get(e))==null||i.callbacks.push(r));else{const s={thermalUrl:e,visibleUrl:t,callbacks:r?[r]:[]};this.requests.set(e,s)}this.timer===void 0&&(this.timer=setTimeout(this.resolve.bind(this),0))}async resolve(){const e=await Promise.all(this.requestArray.map(async t=>{const r={request:t};if(this.registry.manager.isUrlRegistered(t.thermalUrl))r.output=this.registry.manager.sourcesByUrl[t.thermalUrl];else try{const i=await Vt.fromUrlWithErrors(t.thermalUrl,t.visibleUrl);i&&(r.output=i)}catch(i){i instanceof Error&&(r.output=i.message)}return r})).then(t=>t.map(r=>(r.output instanceof Vt?r.request.callbacks.forEach(i=>{i(r.output),this.registry.manager.registerSource(r.output)}):r.request.callbacks.forEach(i=>{r.output instanceof Vt||i(void 0,r.output??"Něco se pokazilo")}),r.output)));return clearTimeout(this.timer),this.timer=void 0,this.registry.postLoadedProcessing(),e}},yn=class ws extends EventTarget{constructor(t,r,i){super(),this.group=t,this.url=r,this.visibleUrl=i}static single(t,r,i){return new ws(t,r,i)}static multiple(t,r){return r.map(i=>new ws(t,i.thermalUrl,i.visibleUrl))}async fetch(){if(this.group.registry.manager.isUrlRegistered(this.url))return{file:this.group.registry.manager.sourcesByUrl[this.url],request:this};const t=await Vt.fromUrl(this.url,this.visibleUrl);if(t){if(t!==null)return{file:t,request:this}}else return null;return null}},Dc=class{constructor(e){this.registry=e,this._requests=[]}get requests(){return this._requests}get loading(){return this.registry.loading.value}requestFile(e,t,r){if(this.loading===!0){console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);return}this._requests.push(yn.single(e,t,r))}requestFiles(e,t){if(this.loading===!0){console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);return}this._requests=[...this._requests,...yn.multiple(e,t)]}async resolveQuery(){this.loading;const e=await Promise.all(this._requests.map(r=>r.fetch())),t={};for(const r of e)if(r!==null){const i=this.registry.manager.registerSource(r.file);r.request.group.id in t?t[r.request.group.id].push(i):t[r.request.group.id]=[i]}for(const r in t){const i=this.registry.groups.map.get(r);i==null||i.instances.instantiateSources(t[r])}return this._requests=[],this.registry.groups.value}},Fc=class extends Rr{constructor(e,t,r){super(),this.id=e,this.manager=t,this.hash=Math.random(),this.loader=new Dc(this),this.groups=new Ac(this,[]),this.fetcher=new Mc(this),this.opacity=new xc(this,1),this.minmax=new Cc(this,void 0),this.loading=new Tc(this,!1),this.range=new _c(this,void 0),this.histogram=new Oc(this,[]),this.palette=this.manager.palette,r&&r.histogramResolution!==void 0&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}get service(){return this.manager.service}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.instances.forEveryInstance(e)),this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFiles(e){this.reset(),Object.entries(e).forEach(([t,r])=>{const i=this.groups.addOrGetGroup(t);r.forEach(s=>{this.loader.requestFile(i,s.thermalUrl,s.visibleUrl)})}),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async loadOneFile(e,t){this.reset();const r=this.groups.addOrGetGroup(t);this.loader.requestFile(r,e.thermalUrl,e.visibleUrl),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async processDroppedFiles(e,t){this.reset(),this.loading.markAsLoading(),this.removeAllChildren();const r=await Promise.all(e.map(s=>bs.fromFile(s))).then(s=>s.filter(n=>n!==null));r.forEach(s=>this.manager.registerSource(s)),this.groups.addOrGetGroup(t).instances.instantiateSources(r),this.postLoadedProcessing()}enqueueFile(e,t,r){const i=this.groups.addOrGetGroup(e);this.loader.requestFile(i,t,r)}async loadQuery(){this.reset(),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}postLoadedProcessing(){console.log("postprocessing"),this.forEveryInstance(console.log),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.refreshBufferFromCurrentPixels(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.loader.loading===!1&&(this.opacity.reset(),this.minmax.reset())}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Rc=()=>{const e=[];for(let t=0;t<=255;t++)e.push(`rgb(${t},${t},${t})`);return e},Lc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],jc=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Bc=Rc(),aa={iron:{pixels:jc,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Lc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Bc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Nc=class extends nt{get availablePalettes(){return aa}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(e){return e}afterSetEffect(e){this.parent.forEveryRegistry(t=>{t.forEveryInstance(r=>r.recievePalette(e))})}setPalette(e){this.value=e}},oa=class{constructor(e,t){this.thermalUrl=e,this.visibleUrl=t}},xs=class la extends oa{constructor(t,r,i){super(t),this.code=r,this.message=i}isSuccess(){return!1}static fromError(t){return new la(t.url,t.code,t.message)}},ca=class extends Error{constructor(e,t,r){super(r),this.code=e,this.url=t}},Uc=class{constructor(e,t){this.drive=e,this._bufferBySteps=new Map,this.bufferSize=4,this.isSequence=e.parent.frameCount>1,this.currentFrame=t}get currentFrame(){return this._currentFrame}set currentFrame(e){this._currentFrame=e,this.propagate()}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get bufferedStepsArray(){return Array.from(this._bufferBySteps.keys())}get bufferRelativeTimestamps(){return this.bufferedStepsArray.map(e=>e.relative)}async init(){return await this.preload(this.currentStep)}async recieveStep(e){let t=this._bufferBySteps.get(e);t===void 0&&(t=await this.drive.parent.service.frameData(e.index)),this._currentFrame=t;const r=await this.preload(e);return this.propagate(),r}propagate(){this.drive.parent.pixels=this.currentFrame.pixels}async preload(e){const t=e.index+1<this.drive.relativeSteps.length?e.index+1:NaN,r=isNaN(t)?NaN:this.drive._validateIndex(t+this.bufferSize);if(isNaN(t)||isNaN(r)||t>r)return e.relative===this.drive.parent.duration&&this._bufferBySteps.clear(),{relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.bufferedStepsArray,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=t&&a.index<r),s=i.filter(a=>!this.bufferedStepsArray.includes(a)),n=await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)));return console.log("On",e,"Steps that should be",i),n.forEach((a,l)=>{const c=s[l];this._bufferBySteps.set(c,a)}),this.bufferedStepsArray.forEach(a=>{i.includes(a)||this._bufferBySteps.delete(a)}),{currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.bufferedStepsArray,preloaded:!0,hasChanged:!0}}},Hc=class extends nt{constructor(e,t,r,i){super(e,Math.max(Math.min(t,r.length),0)),this.steps=r,this.stepsByAbsolute=new Map,this.stepsByRelative=new Map,this.stepsByIndex=new Map,this.relativeSteps=[],this._onChangeListeners=new Map,this._isPlayying=!1,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.steps.forEach(s=>{this.stepsByIndex.set(s.index,s),this.stepsByAbsolute.set(s.absolute,s),this.stepsByRelative.set(s.relative,s),this.relativeSteps.push(s.relative)}),this.buffer=new Uc(this,i)}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlayying}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}addChangeListener(e,t){this._onChangeListeners.set(e,t)}removeChangeListener(e){this._onChangeListeners.delete(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),r=Math.ceil(t*this.steps.length)+5,i=this._validateIndex(r-40),s=this._validateIndex(r),a=this.steps.slice(i,s).reverse().find(l=>l.relative<=e);return console.log("find previous from",e,a),a!==void 0?a:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),r=Math.floor(t*this.steps.length)-5,i=this._validateIndex(r),s=this._validateIndex(r+40),n=this.steps.slice(i,s);console.log(e,n);const a=n.find(l=>l.relative>e);return console.log(a),a!==void 0?a:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);return t!==this._currentStep?(this._currentStep=t,{...await this.buffer.recieveStep(this._currentStep)}):{relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0),console.log("percent!!!",e);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}enqueueStep(){this.timer!==void 0&&clearTimeout(this.timer),this.steps.length!==1&&this._isPlayying!==!1&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlayying&&(console.log(this.value,e),this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.enqueueStep())):this._isPlayying=!1},this._currentStep.offset))}play(){this.steps.length>1&&(console.log("Spouštím hru!"),this._isPlayying=!0,this.enqueueStep())}pause(){this._isPlayying=!1,clearTimeout(this.timer)}stop(){this.pause(),this.value=0}},Wc=class ua extends ea{constructor(t,r,i,s,n,a,l,c,d,m,p,x,y,$,_,C,ee){super(t,r.thermalUrl,i,s,d,n,l,p,x,a,r.visibleUrl),this.group=t,this.service=r,this.width=i,this.height=s,this.timestamp=n,this.frameCount=a,this.duration=l,this.frameInterval=c,this.fps=m,this.min=p,this.max=x,this.bytesize=y,this.averageEmissivity=$,this.averageReflectedKelvins=_,this.firstFrame=C,this.timelineData=ee,this.pixels=C.pixels}exportAsPng(){throw new Error("Method not implemented.")}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}postInit(){return this.canvasLayer=new ra(this),this.visibleLayer=new ta(this,this.visibleUrl),this.cursorLayer=new ia(this),this.listenerLayer=new sa(this),this.cursorValue=new Jn(this,void 0),this.timeline=new Hc(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(console.log("Pixels changed in",this.thermalUrl),this.mountedBaseLayers&&(console.log("Drawing!!!"),this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const r=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(r)}}getPixelsForHistogram(){return[]}static fromService(t,r,i,s){return new ua(t,r,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,s.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,s,i.timeline).postInit()}},ha=class extends oa{constructor(e,t,r,i){super(r,i),this.buffer=e,this.parser=t,this.id=Math.random(),this.pool=fi,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const t=this.getFrameSubset(e);return await this.parser.frameData(t.array,t.dataType)}async createInstance(e){const t=await this.baseInfo(),r=await this.frameData(0),i=Wc.fromService(e,this,t,r);return e.files.addFile(i),i}},Ic=[{extension:"lrc",minme:"application/octet-stream"}],Vc=(e,t)=>{const r=t.endsWith("lrc"),s=new TextDecoder().decode(e.slice(0,4))==="LRC\0";return r&&s},qc=async e=>{const t=new DataView(e),r=t.getUint16(17,!0),i=t.getUint16(19,!0),s=e.byteLength,n=(J,de)=>{const _e=J.getBigInt64(de,!0),Q=62135596800000n,fe=10000n,ie=24n*60n*60n*1000n*fe,f=0x4000000000000000n,b=0x8000000000000000n;let K=_e&0x3FFFFFFFFFFFFFFFn;_e&b&&(K>f-ie&&(K-=f),K<0&&(K+=ie));const ne=K/fe-Q;return Number(ne)},a=n(t,5),l=t.getUint8(15);let c=2;l===1&&(c=4);const d=57,m=r*i*c,p=d+m,x=e.slice(25),y=x.byteLength/p,$=J=>{const de=J*p,_e=de+p,Q=x.slice(de,_e),fe=new DataView(Q),ie=fe.getFloat32(8,!0),f=fe.getFloat32(12,!0),b=n(fe,0),j=fe.getFloat32(24,!0),K=fe.getFloat32(28,!0);return{timestamp:b,min:ie,max:f,emissivity:j,reflectedKelvins:K}},_=[];for(let J=0;J<y;J++){const de=$(J);_.push(de)}const C={emissivity:0,reflectedKelvins:0};let ee=1/0,H=-1/0;const z=[];_.forEach(J=>{C.emissivity=C.emissivity+J.emissivity,C.reflectedKelvins=C.reflectedKelvins+J.reflectedKelvins,J.min<ee&&(ee=J.min),J.max>H&&(H=J.max),z.push(J.timestamp)});const ge=z[0],he=[];z.forEach((J,de)=>{const _e=z[de+1];let Q=0;_e===void 0&&(Q=0),Q=_e-J;const fe=J-ge;he.push({absolute:J,relative:fe,offset:isNaN(Q)?0:Q,index:de})});const Oe=_[_.length-1].timestamp-_[0].timestamp,B=Oe/y,xe=1e3/B;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:y,duration:Oe,frameInterval:B,fps:xe,timeline:he,min:ee,max:H,averageEmissivity:C.emissivity/_.length,averageReflectedKelvins:C.reflectedKelvins/_.length}},zc=(e,t)=>{console.log("poptávám index",t);const r=new DataView(e.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,c=s*n*a,d=l+c,m=e.slice(25),p=t*d,x=p+d;return{array:m.slice(p,x),dataType:i}},Yc=async(e,t)=>{const r=new DataView(e),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,c=0x8000000000000000n;let m=i&0x3FFFFFFFFFFFFFFFn;i&c&&(m>l-a&&(m-=l),m<0&&(m+=a));const x=m/n-s,y=Number(x),$=r.getFloat32(8,!0),_=r.getFloat32(12,!0),C=r.getFloat32(24,!0),ee=r.getFloat32(28,!0),H=e.slice(57);let z=[];if(t===0){const ge=new Uint16Array(H),he=Math.abs($-_),Oe=65535;ge.forEach(B=>{const xe=B/Oe;z.push($+he*xe)})}else t===1&&(z=Array.from(new Float32Array(H)));return{timestamp:y,min:$,max:_,emissivity:C,reflectedKelvins:ee,pixels:z}},Gc=Object.freeze({name:"LabIR Recording (.lrc)",description:"Radiometric data saved by thermal cameras TIMI Edu and by measurement systems developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"}],extensions:Ic,is:Vc,baseInfo:qc,getFrameSubset:zc,frameData:Yc}),Xc={LrcParser:Gc},da=Object.values(Xc),Qc=(e,t)=>{const r=da.find(i=>i.is(e,t));if(r===void 0)throw new ca(2,t,`No parser found for '${t}'.`);return r};da.map(e=>e.extensions);var Kc=class fa{constructor(t,r){this.thermalUrl=t,this.visibleUrl=r}static fromUrl(t,r){return new fa(t,r)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(t){const r=await t;if(r.status!==200)return this.pocessTheService(new xs(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=Qc(i,this.thermalUrl);return this.pocessTheService(new ha(i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof ca)return this.pocessTheService(xs.fromError(s));throw s}}pocessTheService(t){return t}},Zc=class{constructor(e){this.manager=e,this.pool=fi,this.requestsByUrl=new Map,this.cacheByUrl=new Map}static isolatedInstance(e="isolated_registry"){const r=new Ms().addOrGetRegistry(e);return{service:r.service,registry:r}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(e){return this.requestsByUrl.has(e)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(e){return this.cacheByUrl.has(e)}async loadFile(e,t){if(this.cacheByUrl.has(e))return this.cacheByUrl.get(e);if(this.requestsByUrl.has(e))return this.requestsByUrl.get(e).load();{const r=Kc.fromUrl(e,t);this.requestsByUrl.set(e,r);const i=await r.load();return this.requestsByUrl.delete(e),this.cacheByUrl.set(e,i),i}}},Ms=class extends Rr{constructor(e){super(),this.registries={},this.palette=new Nc(this,"jet"),this.service=new Zc(this),this._sourcesByUrl={},this.isUrlRegistered=t=>Object.keys(this.sourcesByUrl).includes(t),this.id=Math.random(),e&&e.palette&&this.palette.setPalette(e.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Fc(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}get sourcesByUrl(){return this._sourcesByUrl}getSourcesArray(){return Object.values(this.sourcesByUrl)}getRegisteredUrls(){return Object.keys(this.sourcesByUrl)}registerSource(e){return this.getRegisteredUrls().includes(e.url)?this.sourcesByUrl[e.url]:(this.sourcesByUrl[e.url]=e,e)}},Ds=class{};Ds.inputToDate=e=>{if(typeof e=="number"){const t=new Date;return t.setTime(e),t}return e};var ht=class Dt extends Ds{static humanRangeDates(t,r){return t=Dt.inputToDate(t),r=Dt.inputToDate(r),t.getUTCDate()===r.getUTCDate()?Dt.humanDate(t):[Dt.humanDate(t),Dt.humanDate(r)].join(" - ")}static human(t){return`${Dt.humanDate(t)} ${Dt.humanTime(t,!0)} `}};ht.isoDate=e=>(e=ht.inputToDate(e),Cs(e,{representation:"date"}));ht.isoTime=e=>(e=ht.inputToDate(e),Cs(e,{representation:"time"}));ht.isoComplete=e=>(e=ht.inputToDate(e),Cs(e));ht.humanTime=(e,t=!1)=>(e=ht.inputToDate(e),Zn(e,t?"HH:mm:ss":"HH:mm"));ht.humanDate=(e,t=!1)=>(e=ht.inputToDate(e),Zn(e,t?"d. M.":"d. M. yyyy"));var Jc=ht,tr=class extends Ds{};tr.down=(e,t)=>t==="jednu hodinu"?fc(e):t==="jeden den"?gs(e):t==="jeden týden"?sr(e):t==="jeden měsíc"?hl(e):Xn(e);tr.up=(e,t)=>t==="jednu hodinu"?fl(e):t==="jeden den"?cl(e):t==="jeden týden"?pl(e):t==="jeden měsíc"?ul(e):dl(e);tr.pick=(e,t)=>[tr.down(e,t),tr.up(e,t)];tr.modify=(e,t,r)=>{switch(r){case"jednu hodinu":return il(e,t);case"jeden den":return fn(e,t);case"jeden týden":return fn(e,t*7);case"jeden měsíc":return qn(e,t);case"jeden rok":return ol(e,t)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pa=class extends Event{constructor(t,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mi=class{constructor(t,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=t,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new pa(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eu=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){const i=r||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,r,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:r});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tu=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},Er=class extends eu{constructor(t,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const c=new Set;for(const[d,{consumerHost:m}]of this.subscriptions)c.has(d)||(c.add(d),m.dispatchEvent(new pa(this.context,d,!0)));a.stopPropagation()},this.host=t,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new tu(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ru({context:e}){return(t,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Er(this,{context:e}))}),{get(){return t.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),t.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{t.constructor.addInitializer(a=>{i.set(a,new Er(a,{context:e}))});const s=Object.getOwnPropertyDescriptor(t,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(t,r,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=globalThis,Fs=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rs=Symbol(),wn=new WeakMap;let ma=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Rs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Fs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=wn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wn.set(r,t))}return t}toString(){return this.cssText}};const iu=e=>new ma(typeof e=="string"?e:e+"",void 0,Rs),Ve=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[n+1],e[0]);return new ma(r,e,Rs)},su=(e,t)=>{if(Fs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),s=ei.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,e.appendChild(i)}},xn=Fs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return iu(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nu,defineProperty:au,getOwnPropertyDescriptor:ou,getOwnPropertyNames:lu,getOwnPropertySymbols:cu,getPrototypeOf:uu}=Object,Rt=globalThis,_n=Rt.trustedTypes,hu=_n?_n.emptyScript:"",as=Rt.reactiveElementPolyfillSupport,$r=(e,t)=>e,ri={toAttribute(e,t){switch(t){case Boolean:e=e?hu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ls=(e,t)=>!nu(e,t),kn={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ls};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Rt.litPropertyMetadata??(Rt.litPropertyMetadata=new WeakMap);class er extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=kn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,r);s!==void 0&&au(this.prototype,t,s)}}static getPropertyDescriptor(t,r,i){const{get:s,set:n}=ou(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??kn}static _$Ei(){if(this.hasOwnProperty($r("elementProperties")))return;const t=uu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r("properties"))){const r=this.properties,i=[...lu(r),...cu(r)];for(const s of i)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)r.unshift(xn(s))}else t!==void 0&&r.push(xn(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return su(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EC(t,r){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ri).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,r){var n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ri;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Ls)(this[t],r))return;this.P(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,i){this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}er.elementStyles=[],er.shadowRootOptions={mode:"open"},er[$r("elementProperties")]=new Map,er[$r("finalized")]=new Map,as==null||as({ReactiveElement:er}),(Rt.reactiveElementVersions??(Rt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=globalThis,ii=Sr.trustedTypes,$n=ii?ii.createPolicy("lit-html",{createHTML:e=>e}):void 0,ga="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,va="?"+Ft,du=`<${va}>`,qt=document,Ar=()=>qt.createComment(""),Or=e=>e===null||typeof e!="object"&&typeof e!="function",ba=Array.isArray,fu=e=>ba(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",os=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sn=/-->/g,Pn=/>/g,Ht=RegExp(`>|${os}(?:([^\\s"'>=/]+)(${os}*=${os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),En=/'/g,An=/"/g,ya=/^(?:script|style|textarea|title)$/i,pu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),X=pu(1),nr=Symbol.for("lit-noChange"),Ae=Symbol.for("lit-nothing"),On=new WeakMap,It=qt.createTreeWalker(qt,129);function wa(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $n!==void 0?$n.createHTML(t):t}const mu=(e,t)=>{const r=e.length-1,i=[];let s,n=t===2?"<svg>":"",a=_r;for(let l=0;l<r;l++){const c=e[l];let d,m,p=-1,x=0;for(;x<c.length&&(a.lastIndex=x,m=a.exec(c),m!==null);)x=a.lastIndex,a===_r?m[1]==="!--"?a=Sn:m[1]!==void 0?a=Pn:m[2]!==void 0?(ya.test(m[2])&&(s=RegExp("</"+m[2],"g")),a=Ht):m[3]!==void 0&&(a=Ht):a===Ht?m[0]===">"?(a=s??_r,p=-1):m[1]===void 0?p=-2:(p=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?Ht:m[3]==='"'?An:En):a===An||a===En?a=Ht:a===Sn||a===Pn?a=_r:(a=Ht,s=void 0);const y=a===Ht&&e[l+1].startsWith("/>")?" ":"";n+=a===_r?c+du:p>=0?(i.push(d),c.slice(0,p)+ga+c.slice(p)+Ft+y):c+Ft+(p===-2?l:y)}return[wa(e,n+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class Tr{constructor({strings:t,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=t.length-1,c=this.parts,[d,m]=mu(t,r);if(this.el=Tr.createElement(d,i),It.currentNode=this.el.content,r===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=It.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(ga)){const x=m[a++],y=s.getAttribute(p).split(Ft),$=/([.?@])?(.*)/.exec(x);c.push({type:1,index:n,name:$[2],strings:y,ctor:$[1]==="."?vu:$[1]==="?"?bu:$[1]==="@"?yu:gi}),s.removeAttribute(p)}else p.startsWith(Ft)&&(c.push({type:6,index:n}),s.removeAttribute(p));if(ya.test(s.tagName)){const p=s.textContent.split(Ft),x=p.length-1;if(x>0){s.textContent=ii?ii.emptyScript:"";for(let y=0;y<x;y++)s.append(p[y],Ar()),It.nextNode(),c.push({type:2,index:++n});s.append(p[x],Ar())}}}else if(s.nodeType===8)if(s.data===va)c.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(Ft,p+1))!==-1;)c.push({type:7,index:n}),p+=Ft.length-1}n++}}static createElement(t,r){const i=qt.createElement("template");return i.innerHTML=t,i}}function ar(e,t,r=e,i){var a,l;if(t===nr)return t;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=Or(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(e),s._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(t=ar(e,s._$AS(e,t.values),s,i)),t}class gu{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??qt).importNode(r,!0);It.currentNode=s;let n=It.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Lr(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new wu(n,this,t)),this._$AV.push(d),c=i[++l]}a!==(c==null?void 0:c.index)&&(n=It.nextNode(),a++)}return It.currentNode=qt,s}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Lr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,s){this.type=2,this._$AH=Ae,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ar(this,t,r),Or(t)?t===Ae||t==null||t===""?(this._$AH!==Ae&&this._$AR(),this._$AH=Ae):t!==this._$AH&&t!==nr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fu(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Ae&&Or(this._$AH)?this._$AA.nextSibling.data=t:this.T(qt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Tr.createElement(wa(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new gu(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let r=On.get(t.strings);return r===void 0&&On.set(t.strings,r=new Tr(t)),r}k(t){ba(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of t)s===r.length?r.push(i=new Lr(this.S(Ar()),this.S(Ar()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class gi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,s,n){this.type=1,this._$AH=Ae,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ae}_$AI(t,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=ar(this,t,r,0),a=!Or(t)||t!==this._$AH&&t!==nr,a&&(this._$AH=t);else{const l=t;let c,d;for(t=n[0],c=0;c<n.length-1;c++)d=ar(this,l[i+c],r,c),d===nr&&(d=this._$AH[c]),a||(a=!Or(d)||d!==this._$AH[c]),d===Ae?t=Ae:t!==Ae&&(t+=(d??"")+n[c+1]),this._$AH[c]=d}a&&!s&&this.j(t)}j(t){t===Ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vu extends gi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ae?void 0:t}}class bu extends gi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ae)}}class yu extends gi{constructor(t,r,i,s,n){super(t,r,i,s,n),this.type=5}_$AI(t,r=this){if((t=ar(this,t,r,0)??Ae)===nr)return;const i=this._$AH,s=t===Ae&&i!==Ae||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Ae&&(i===Ae||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class wu{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ar(this,t)}}const ls=Sr.litHtmlPolyfillSupport;ls==null||ls(Tr,Lr),(Sr.litHtmlVersions??(Sr.litHtmlVersions=[])).push("3.1.4");const xu=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Lr(t.insertBefore(Ar(),n),n,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vt=class extends er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xu(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return nr}};var Nn;vt._$litElement$=!0,vt.finalized=!0,(Nn=globalThis.litElementHydrateSupport)==null||Nn.call(globalThis,{LitElement:vt});const cs=globalThis.litElementPolyfillSupport;cs==null||cs({LitElement:vt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _u={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ls},ku=(e=_u,t,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,e),i==="accessor"){const{name:a}=r;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,e)},init(l){return l!==void 0&&this.P(a,void 0,e),l}}}if(i==="setter"){const{name:a}=r;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,e)}}throw Error("Unsupported decorator location: "+i)};function Te(e){return(t,r)=>typeof r=="object"?ku(e,t,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(e){return Te({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $u=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vi(e){return(t,r)=>{const{slot:i,selector:s}=e??{},n="slot"+(i?`[name=${i}]`:":not([name])");return $u(t,r,{get(){var c;const a=(c=this.renderRoot)==null?void 0:c.querySelector(n),l=(a==null?void 0:a.assignedElements(e))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}class xa extends vt{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),Os.version,this.hash].join("__")}log(...t){console.log(this.identificator,...t)}}const _a="manager",ka="registry",$a="group",Sa="group";var Su=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,Pa=(e,t,r,i)=>{for(var s=i>1?void 0:i?Pu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Su(t,r,s),s};let si=class extends xa{constructor(){super(...arguments),this.manager=new Ms}getClassName(){return"ThermalManagerElement"}render(){return X`
            <slot></slot>
        `}};si.styles=Ve`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;Pa([ru({context:_a})],si.prototype,"manager",2);si=Pa([Fe("thermal-manager")],si);class js extends xa{constructor(){super(...arguments),this._injectedManager=new mi(this,{context:_a,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new Ms}}var Eu=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Ea=(e,t,r,i)=>{for(var s=i>1?void 0:i?Au(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Eu(t,r,s),s};let Cr=class extends js{constructor(){super(...arguments),this.uuid=Cr.DEFAULT_NAME,this.provider=new Er(this,{context:ka,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.uuid);this.provider.setValue(e,!0)}render(){return X`
            <slot></slot>
        `}};Cr.DEFAULT_NAME="default_registry";Ea([Te({type:String,attribute:!0,reflect:!0})],Cr.prototype,"uuid",2);Cr=Ea([Fe("thermal-registry")],Cr);var Ou=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,Aa=(e,t,r,i)=>{for(var s=i>1?void 0:i?Tu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ou(t,r,s),s};class xt extends js{constructor(){super(...arguments),this._injectedRegistry=new mi(this,{context:ka,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}Aa([We()],xt.prototype,"_registry",2);Aa([We()],xt.prototype,"registry",1);var Cu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,bi=(e,t,r,i)=>{for(var s=i>1?void 0:i?Mu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Cu(t,r,s),s};let zt=class extends xt{constructor(){super(...arguments),this.uuid=zt.DEFAULT_NAME,this.provider=new Er(this,{context:$a,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.provider.setValue(this.group,!0)}updated(e){e.has("name")&&this.log(e,this.name)}render(){return X`
            <slot></slot>
        `}};zt.DEFAULT_NAME="default_group";bi([Te({type:String,attribute:!0,reflect:!0})],zt.prototype,"uuid",2);bi([Te({type:String,attribute:!0,reflect:!0})],zt.prototype,"name",2);bi([Te({type:String,attribute:!0,reflect:!0})],zt.prototype,"description",2);zt=bi([Fe("thermal-group")],zt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Du=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fu={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ru=e=>(...t)=>({_$litDirective$:e,values:t});class Lu{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=(e,t)=>{var i;const r=e._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,t,!1),Pr(s,t);return!0},ni=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},Oa=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Nu(t)}};function ju(e){this._$AN!==void 0?(ni(this),this._$AM=e,Oa(this)):this._$AM=e}function Bu(e,t=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let n=r;n<i.length;n++)Pr(i[n],!1),ni(i[n]);else i!=null&&(Pr(i,!1),ni(i));else Pr(this,e)}const Nu=e=>{e.type==Fu.CHILD&&(e._$AP??(e._$AP=Bu),e._$AQ??(e._$AQ=ju))};class Uu extends Lu{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),Oa(this),this.isConnected=t._$AU}_$AO(t,r=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Pr(this,t),ni(this))}setValue(t){if(Du(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=()=>new Hu;class Hu{}const us=new WeakMap,Qe=Ru(class extends Uu{render(e){return Ae}update(e,[t]){var i;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),Ae}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let r=us.get(t);r===void 0&&(r=new WeakMap,us.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=us.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class Bs extends xt{constructor(){super(...arguments),this._injectedGroup=new mi(this,{context:$a,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}var Wu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,Et=(e,t,r,i)=>{for(var s=i>1?void 0:i?Iu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Wu(t,r,s),s};let dt=class extends Bs{constructor(){super(),this.canvasContainer=Xe(),this.errors=[],this.provider=new Er(this,{context:Sa,initialValue:void 0})}getClassName(){return"FileContextElement"}onFileChanged(e,t){console.log(e,t)}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}async enqueueInTheRegistry(){if(this.thermal){const e=await this.registry.service.loadFile(this.thermal,this.visible);if(e instanceof xs)this.errors=[e.message];else if(e instanceof ha){const t=await e.createInstance(this.group);this.file=t,this.provider.setValue(t),this.errors=[],this.registry.postLoadedProcessing(),console.log(this.group)}}}willUpdate(e){super.willUpdate(e),e.has("thermal")||e.has("visible"),e.has("file")&&this.file&&this.file.unmountFromDom()}update(e){var t,r;if(super.update(e),e.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(t=this.file)==null||t.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return X`

            
        ${this.barElements.length>=0?X`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?X`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?X`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${Qe(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?X`
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
                                    ${this.errors.map(e=>X`<li>${e}</li>`)}
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
        
        `}};dt.styles=Ve`

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
    
    `;Et([Te({type:String,reflect:!0})],dt.prototype,"thermal",2);Et([Te({type:String,reflect:!0})],dt.prototype,"visible",2);Et([Te({type:Object})],dt.prototype,"file",2);Et([We()],dt.prototype,"errors",2);Et([vi({slot:"bar",flatten:!0})],dt.prototype,"barItems",2);Et([We()],dt.prototype,"provider",2);Et([vi({slot:"bar",flatten:!0})],dt.prototype,"barElements",2);Et([vi({slot:"pre",flatten:!0})],dt.prototype,"pre",2);dt=Et([Fe("thermal-image")],dt);var Vu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Ta=(e,t,r,i)=>{for(var s=i>1?void 0:i?qu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Vu(t,r,s),s};let ai=class extends vt{constructor(){super(),this.dialogRef=Xe(),this.closeButtonRef=Xe(),this.invokerRef=Xe()}setClose(){var e;(e=this.dialogRef.value)==null||e.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var e;(e=this.dialogRef.value)==null||e.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),e==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return X`
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
        `}};ai.styles=Ve`

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

        
    
    `;Ta([Te({type:String,reflect:!0})],ai.prototype,"label",2);ai=Ta([Fe("thermal-dialog")],ai);var zu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,Ns=(e,t,r,i)=>{for(var s=i>1?void 0:i?Yu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&zu(t,r,s),s};let Yt=class extends vt{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return X`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Yt.VARIANTS=["slate","primary","foreground","background"];Yt.styles=Ve`

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
    
    `;Ns([Te({type:String,converter:{fromAttribute:e=>Yt.VARIANTS.includes(e)?e:"slate",toAttribute:e=>e}})],Yt.prototype,"variant",2);Ns([Te({type:String})],Yt.prototype,"size",2);Yt=Ns([Fe("thermal-button")],Yt);const or=Math.min,$t=Math.max,oi=Math.round,Lt=e=>({x:e,y:e}),Gu={left:"right",right:"left",bottom:"top",top:"bottom"},Xu={start:"end",end:"start"};function Tn(e,t,r){return $t(e,or(t,r))}function jr(e,t){return typeof e=="function"?e(t):e}function St(e){return e.split("-")[0]}function yi(e){return e.split("-")[1]}function Ca(e){return e==="x"?"y":"x"}function Ma(e){return e==="y"?"height":"width"}function Br(e){return["top","bottom"].includes(St(e))?"y":"x"}function Da(e){return Ca(Br(e))}function Qu(e,t,r){r===void 0&&(r=!1);const i=yi(e),s=Da(e),n=Ma(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=li(a)),[a,li(a)]}function Ku(e){const t=li(e);return[_s(e),t,_s(t)]}function _s(e){return e.replace(/start|end/g,t=>Xu[t])}function Zu(e,t,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return r?t?s:i:t?i:s;case"left":case"right":return t?n:a;default:return[]}}function Ju(e,t,r,i){const s=yi(e);let n=Zu(St(e),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),t&&(n=n.concat(n.map(_s)))),n}function li(e){return e.replace(/left|right|bottom|top/g,t=>Gu[t])}function eh(e){return{top:0,right:0,bottom:0,left:0,...e}}function Fa(e){return typeof e!="number"?eh(e):{top:e,right:e,bottom:e,left:e}}function lr(e){const{x:t,y:r,width:i,height:s}=e;return{width:i,height:s,top:r,left:t,right:t+i,bottom:r+s,x:t,y:r}}function Cn(e,t,r){let{reference:i,floating:s}=e;const n=Br(t),a=Da(t),l=Ma(a),c=St(t),d=n==="y",m=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,x=i[l]/2-s[l]/2;let y;switch(c){case"top":y={x:m,y:i.y-s.height};break;case"bottom":y={x:m,y:i.y+i.height};break;case"right":y={x:i.x+i.width,y:p};break;case"left":y={x:i.x-s.width,y:p};break;default:y={x:i.x,y:i.y}}switch(yi(t)){case"start":y[a]-=x*(r&&d?-1:1);break;case"end":y[a]+=x*(r&&d?-1:1);break}return y}const th=async(e,t,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:m,y:p}=Cn(d,i,c),x=i,y={},$=0;for(let _=0;_<l.length;_++){const{name:C,fn:ee}=l[_],{x:H,y:z,data:ge,reset:he}=await ee({x:m,y:p,initialPlacement:i,placement:x,strategy:s,middlewareData:y,rects:d,platform:a,elements:{reference:e,floating:t}});m=H??m,p=z??p,y={...y,[C]:{...y[C],...ge}},he&&$<=50&&($++,typeof he=="object"&&(he.placement&&(x=he.placement),he.rects&&(d=he.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):he.rects),{x:m,y:p}=Cn(d,x,c)),_=-1)}return{x:m,y:p,placement:x,strategy:s,middlewareData:y}};async function Ra(e,t){var r;t===void 0&&(t={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:p="floating",altBoundary:x=!1,padding:y=0}=jr(t,e),$=Fa(y),C=l[x?p==="floating"?"reference":"floating":p],ee=lr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(C)))==null||r?C:C.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:m,strategy:c})),H=p==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,z=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),ge=await(n.isElement==null?void 0:n.isElement(z))?await(n.getScale==null?void 0:n.getScale(z))||{x:1,y:1}:{x:1,y:1},he=lr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:H,offsetParent:z,strategy:c}):H);return{top:(ee.top-he.top+$.top)/ge.y,bottom:(he.bottom-ee.bottom+$.bottom)/ge.y,left:(ee.left-he.left+$.left)/ge.x,right:(he.right-ee.right+$.right)/ge.x}}const rh=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:x,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:_=!0,...C}=jr(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const ee=St(s),H=St(l)===l,z=await(c.isRTL==null?void 0:c.isRTL(d.floating)),ge=x||(H||!_?[li(l)]:Ku(l));!x&&$!=="none"&&ge.push(...Ju(l,_,$,z));const he=[l,...ge],Oe=await Ra(t,C),B=[];let xe=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&B.push(Oe[ee]),p){const Q=Qu(s,a,z);B.push(Oe[Q[0]],Oe[Q[1]])}if(xe=[...xe,{placement:s,overflows:B}],!B.every(Q=>Q<=0)){var J,de;const Q=(((J=n.flip)==null?void 0:J.index)||0)+1,fe=he[Q];if(fe)return{data:{index:Q,overflows:xe},reset:{placement:fe}};let ie=(de=xe.filter(f=>f.overflows[0]<=0).sort((f,b)=>f.overflows[1]-b.overflows[1])[0])==null?void 0:de.placement;if(!ie)switch(y){case"bestFit":{var _e;const f=(_e=xe.map(b=>[b.placement,b.overflows.filter(j=>j>0).reduce((j,K)=>j+K,0)]).sort((b,j)=>b[1]-j[1])[0])==null?void 0:_e[0];f&&(ie=f);break}case"initialPlacement":ie=l;break}if(s!==ie)return{reset:{placement:ie}}}return{}}}};function La(e){const t=or(...e.map(n=>n.left)),r=or(...e.map(n=>n.top)),i=$t(...e.map(n=>n.right)),s=$t(...e.map(n=>n.bottom));return{x:t,y:r,width:i-t,height:s-r}}function ih(e){const t=e.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<t.length;s++){const n=t[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>lr(La(s)))}const sh=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=t,{padding:l=2,x:c,y:d}=jr(e,t),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),p=ih(m),x=lr(La(m)),y=Fa(l);function $(){if(p.length===2&&p[0].left>p[1].right&&c!=null&&d!=null)return p.find(C=>c>C.left-y.left&&c<C.right+y.right&&d>C.top-y.top&&d<C.bottom+y.bottom)||x;if(p.length>=2){if(Br(r)==="y"){const de=p[0],_e=p[p.length-1],Q=St(r)==="top",fe=de.top,ie=_e.bottom,f=Q?de.left:_e.left,b=Q?de.right:_e.right,j=b-f,K=ie-fe;return{top:fe,bottom:ie,left:f,right:b,width:j,height:K,x:f,y:fe}}const C=St(r)==="left",ee=$t(...p.map(de=>de.right)),H=or(...p.map(de=>de.left)),z=p.filter(de=>C?de.left===H:de.right===ee),ge=z[0].top,he=z[z.length-1].bottom,Oe=H,B=ee,xe=B-Oe,J=he-ge;return{top:ge,bottom:he,left:Oe,right:B,width:xe,height:J,x:Oe,y:ge}}return x}const _=await n.getElementRects({reference:{getBoundingClientRect:$},floating:i.floating,strategy:a});return s.reference.x!==_.reference.x||s.reference.y!==_.reference.y||s.reference.width!==_.reference.width||s.reference.height!==_.reference.height?{reset:{rects:_}}:{}}}};async function nh(e,t){const{placement:r,platform:i,elements:s}=e,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=St(r),l=yi(r),c=Br(r)==="y",d=["left","top"].includes(a)?-1:1,m=n&&c?-1:1,p=jr(t,e);let{mainAxis:x,crossAxis:y,alignmentAxis:$}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof $=="number"&&(y=l==="end"?$*-1:$),c?{x:y*m,y:x*d}:{x:x*d,y:y*m}}const ah=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=t,c=await nh(t,e);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:a}}}}},oh=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:s}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:C=>{let{x:ee,y:H}=C;return{x:ee,y:H}}},...c}=jr(e,t),d={x:r,y:i},m=await Ra(t,c),p=Br(St(s)),x=Ca(p);let y=d[x],$=d[p];if(n){const C=x==="y"?"top":"left",ee=x==="y"?"bottom":"right",H=y+m[C],z=y-m[ee];y=Tn(H,y,z)}if(a){const C=p==="y"?"top":"left",ee=p==="y"?"bottom":"right",H=$+m[C],z=$-m[ee];$=Tn(H,$,z)}const _=l.fn({...t,[x]:y,[p]:$});return{..._,data:{x:_.x-r,y:_.y-i}}}}};function mr(e){return ja(e)?(e.nodeName||"").toLowerCase():"#document"}function it(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Bt(e){var t;return(t=(ja(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ja(e){return e instanceof Node||e instanceof it(e).Node}function bt(e){return e instanceof Element||e instanceof it(e).Element}function yt(e){return e instanceof HTMLElement||e instanceof it(e).HTMLElement}function Mn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof it(e).ShadowRoot}function Nr(e){const{overflow:t,overflowX:r,overflowY:i,display:s}=ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(s)}function lh(e){return["table","td","th"].includes(mr(e))}function wi(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Us(e){const t=Hs(),r=ft(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function ch(e){let t=jt(e);for(;yt(t)&&!cr(t);){if(wi(t))return null;if(Us(t))return t;t=jt(t)}return null}function Hs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cr(e){return["html","body","#document"].includes(mr(e))}function ft(e){return it(e).getComputedStyle(e)}function xi(e){return bt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function jt(e){if(mr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Mn(e)&&e.host||Bt(e);return Mn(t)?t.host:t}function Ba(e){const t=jt(e);return cr(t)?e.ownerDocument?e.ownerDocument.body:e.body:yt(t)&&Nr(t)?t:Ba(t)}function ks(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=Ba(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),a=it(s);return n?t.concat(a,a.visualViewport||[],Nr(s)?s:[],a.frameElement&&r?ks(a.frameElement):[]):t.concat(s,ks(s,[],r))}function Na(e){const t=ft(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=yt(e),n=s?e.offsetWidth:r,a=s?e.offsetHeight:i,l=oi(r)!==n||oi(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function Ua(e){return bt(e)?e:e.contextElement}function rr(e){const t=Ua(e);if(!yt(t))return Lt(1);const r=t.getBoundingClientRect(),{width:i,height:s,$:n}=Na(t);let a=(n?oi(r.width):r.width)/i,l=(n?oi(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const uh=Lt(0);function Ha(e){const t=it(e);return!Hs()||!t.visualViewport?uh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hh(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==it(e)?!1:t}function Mr(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),n=Ua(e);let a=Lt(1);t&&(i?bt(i)&&(a=rr(i)):a=rr(e));const l=hh(n,r,i)?Ha(n):Lt(0);let c=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,m=s.width/a.x,p=s.height/a.y;if(n){const x=it(n),y=i&&bt(i)?it(i):i;let $=x,_=$.frameElement;for(;_&&i&&y!==$;){const C=rr(_),ee=_.getBoundingClientRect(),H=ft(_),z=ee.left+(_.clientLeft+parseFloat(H.paddingLeft))*C.x,ge=ee.top+(_.clientTop+parseFloat(H.paddingTop))*C.y;c*=C.x,d*=C.y,m*=C.x,p*=C.y,c+=z,d+=ge,$=it(_),_=$.frameElement}}return lr({width:m,height:p,x:c,y:d})}function dh(e){let{elements:t,rect:r,offsetParent:i,strategy:s}=e;const n=s==="fixed",a=Bt(i),l=t?wi(t.floating):!1;if(i===a||l&&n)return r;let c={scrollLeft:0,scrollTop:0},d=Lt(1);const m=Lt(0),p=yt(i);if((p||!p&&!n)&&((mr(i)!=="body"||Nr(a))&&(c=xi(i)),yt(i))){const x=Mr(i);d=rr(i),m.x=x.x+i.clientLeft,m.y=x.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+m.x,y:r.y*d.y-c.scrollTop*d.y+m.y}}function fh(e){return Array.from(e.getClientRects())}function Wa(e){return Mr(Bt(e)).left+xi(e).scrollLeft}function ph(e){const t=Bt(e),r=xi(e),i=e.ownerDocument.body,s=$t(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=$t(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Wa(e);const l=-r.scrollTop;return ft(i).direction==="rtl"&&(a+=$t(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function mh(e,t){const r=it(e),i=Bt(e),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(s){n=s.width,a=s.height;const d=Hs();(!d||d&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:a,x:l,y:c}}function gh(e,t){const r=Mr(e,!0,t==="fixed"),i=r.top+e.clientTop,s=r.left+e.clientLeft,n=yt(e)?rr(e):Lt(1),a=e.clientWidth*n.x,l=e.clientHeight*n.y,c=s*n.x,d=i*n.y;return{width:a,height:l,x:c,y:d}}function Dn(e,t,r){let i;if(t==="viewport")i=mh(e,r);else if(t==="document")i=ph(Bt(e));else if(bt(t))i=gh(t,r);else{const s=Ha(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return lr(i)}function Ia(e,t){const r=jt(e);return r===t||!bt(r)||cr(r)?!1:ft(r).position==="fixed"||Ia(r,t)}function vh(e,t){const r=t.get(e);if(r)return r;let i=ks(e,[],!1).filter(l=>bt(l)&&mr(l)!=="body"),s=null;const n=ft(e).position==="fixed";let a=n?jt(e):e;for(;bt(a)&&!cr(a);){const l=ft(a),c=Us(a);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Nr(a)&&!c&&Ia(e,a))?i=i.filter(m=>m!==a):s=l,a=jt(a)}return t.set(e,i),i}function bh(e){let{element:t,boundary:r,rootBoundary:i,strategy:s}=e;const a=[...r==="clippingAncestors"?wi(t)?[]:vh(t,this._c):[].concat(r),i],l=a[0],c=a.reduce((d,m)=>{const p=Dn(t,m,s);return d.top=$t(p.top,d.top),d.right=or(p.right,d.right),d.bottom=or(p.bottom,d.bottom),d.left=$t(p.left,d.left),d},Dn(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function yh(e){const{width:t,height:r}=Na(e);return{width:t,height:r}}function wh(e,t,r){const i=yt(t),s=Bt(t),n=r==="fixed",a=Mr(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const c=Lt(0);if(i||!i&&!n)if((mr(t)!=="body"||Nr(s))&&(l=xi(t)),i){const p=Mr(t,!0,n,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else s&&(c.x=Wa(s));const d=a.left+l.scrollLeft-c.x,m=a.top+l.scrollTop-c.y;return{x:d,y:m,width:a.width,height:a.height}}function hs(e){return ft(e).position==="static"}function Fn(e,t){return!yt(e)||ft(e).position==="fixed"?null:t?t(e):e.offsetParent}function Va(e,t){const r=it(e);if(wi(e))return r;if(!yt(e)){let s=jt(e);for(;s&&!cr(s);){if(bt(s)&&!hs(s))return s;s=jt(s)}return r}let i=Fn(e,t);for(;i&&lh(i)&&hs(i);)i=Fn(i,t);return i&&cr(i)&&hs(i)&&!Us(i)?r:i||ch(e)||r}const xh=async function(e){const t=this.getOffsetParent||Va,r=this.getDimensions,i=await r(e.floating);return{reference:wh(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function _h(e){return ft(e).direction==="rtl"}const kh={convertOffsetParentRelativeRectToViewportRelativeRect:dh,getDocumentElement:Bt,getClippingRect:bh,getOffsetParent:Va,getElementRects:xh,getClientRects:fh,getDimensions:yh,getScale:rr,isElement:bt,isRTL:_h},$h=ah,Sh=oh,Ph=rh,Eh=sh,Ah=(e,t,r)=>{const i=new Map,s={platform:kh,...r},n={...s.platform,_c:i};return th(e,t,{...s,platform:n})};var Oh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,_i=(e,t,r,i)=>{for(var s=i>1?void 0:i?Th(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Oh(t,r,s),s};let ur=class extends vt{constructor(){super(...arguments),this.dropdownRef=Xe(),this.invokerRef=Xe(),this.optionsRef=Xe(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Ah(this.invokerRef.value,this.optionsRef.value,{middleware:[$h(2),Ph(),Eh(),Sh()],placement:"bottom-start",strategy:"fixed"}).then(({x:e,y:t})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${e}px`,this.optionsRef.value.style.top=`${t}px`)})}updated(e){super.updated(e),this.placeOptions()}firstUpdated(e){super.firstUpdated(e),this._options.forEach(t=>{t.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(e,t,r){var i,s,n,a;e==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return X`

            <div class="dropdown" ${Qe(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Qe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?X`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:X`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};ur.styles=Ve`

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
    
    `;_i([vi({slot:"option"})],ur.prototype,"_options",2);_i([Te({type:String,reflect:!0})],ur.prototype,"open",2);_i([Te({type:String,reflect:!0})],ur.prototype,"variant",2);ur=_i([Fe("thermal-dropdown")],ur);var Ch=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,ki=(e,t,r,i)=>{for(var s=i>1?void 0:i?Mh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ch(t,r,s),s};let hr=class extends vt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Xe(),this.contentRef=Xe(),this.rulerContentRef=Xe()}connectedCallback(){super.connectedCallback()}firstUpdated(e){super.firstUpdated(e),this.observer=new ResizeObserver(t=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=t[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return X`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Qe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Qe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Qe(this.contentRef)}>

                    ${this.collapsed===!1?X`
                        <slot></slot>    
                    `:Ae}
                
                </div>

            </div>

            ${this.collapsed?X`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:Ae}
        
        `}};hr.styles=Ve`

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

    `;ki([We()],hr.prototype,"collapsed",2);ki([We()],hr.prototype,"lastContentWidth",2);ki([We()],hr.prototype,"drawerRef",2);hr=ki([Fe("thermal-bar")],hr);var Dh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,qa=(e,t,r,i)=>{for(var s=i>1?void 0:i?Fh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Dh(t,r,s),s};let ci=class extends js{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const e=t=>{if(typeof t=="string"){const r=t;this.value=r}};this.manager.palette.addListener(this.identificator,e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(e){this.manager.palette.setPalette(e),this.value=e}paletteTemplate(e,t){return X`

            <div class="button ${t}">
                <span class="palette" style="background:${e.gradient}"></span>
                <!-- <span>${e.name}</span> -->
            </div>
        
        `}render(){return X`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(aa).map(([e,t])=>X`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(e)} variant="${t.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(t)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};ci.styles=Ve`

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

    `;qa([Te({type:String,reflect:!0,attribute:!0})],ci.prototype,"value",2);ci=qa([Fe("thermal-palette")],ci);var Rh=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,za=(e,t,r,i)=>{for(var s=i>1?void 0:i?Lh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Rh(t,r,s),s};let ui=class extends xt{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const e=t=>{this.value!==t&&(this.value=t,this.renderRoot.querySelector("#handler").value=t.toString())};this.registry.opacity.addListener(this.identificator,e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(e){const t=parseFloat(e.target.value);this.value=t,this.registry.opacity.imposeOpacity(t)}updated(e){super.updated(e),e.has("value")&&parseFloat(e.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return X`
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
        `}};ui.styles=Ve`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;za([Te({type:Number,reflect:!0,attribute:!0})],ui.prototype,"value",2);ui=za([Fe("thermal-opacity")],ui);var jh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,Nh=(e,t,r,i)=>{for(var s=i>1?void 0:i?Bh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&jh(t,r,s),s};let Rn=class extends xt{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return X`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};Rn=Nh([Fe("thermal-range-auto")],Rn);var Uh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,Wh=(e,t,r,i)=>{for(var s=i>1?void 0:i?Hh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Uh(t,r,s),s};let Ln=class extends xt{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return X`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};Ln=Wh([Fe("thermal-range-minmax")],Ln);var Ih=Object.defineProperty,Vh=Object.getOwnPropertyDescriptor,$i=(e,t,r,i)=>{for(var s=i>1?void 0:i?Vh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ih(t,r,s),s};class At extends Bs{constructor(){super(...arguments),this._injectedFile=new mi(this,{context:Sa,subscribe:!0}),this.ready=!1}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}update(t){return super.update(t),!0}}$i([We()],At.prototype,"_injectedFile",2);$i([We()],At.prototype,"_file",2);$i([We()],At.prototype,"file",1);$i([We()],At.prototype,"ready",2);var qh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Yh=(e,t,r,i)=>{for(var s=i>1?void 0:i?zh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&qh(t,r,s),s};let $s=class extends At{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}onFileLoaded(){}render(){var e,t,r,i,s,n,a,l,c,d,m,p,x;return X`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>
                        <tr>
                            <td>File name</td>
                            <td>${(e=this._injectedFile.value)==null?void 0:e.fileName}</td>
                        </tr>
                        <tr>
                            <td>Thermal file URL</td>
                            <td>${(t=this._injectedFile.value)==null?void 0:t.url}
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&X`
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
                            ${((s=this._injectedFile.value)==null?void 0:s.visibleUrl)&&X`
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
                            <td>${((n=this._injectedFile.value)==null?void 0:n.timestamp)&&Jc.human(this._injectedFile.value.timestamp)}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>${(a=this._injectedFile.value)==null?void 0:a.width} x ${(l=this._injectedFile.value)==null?void 0:l.height} px <small>(${(c=this._injectedFile.value)==null?void 0:c.pixels.length} pixels)</small></td>
                        </tr>
                        <tr>
                            <td>Signature</td>
                            <td>${(d=this._injectedFile.value)==null?void 0:d.signature}</td>
                        </tr>
                        <tr>
                            <td>Frames</td>
                            <td>${(m=this._injectedFile.value)==null?void 0:m.frames.length}</td>
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
                            <td>${(p=this._injectedFile.value)==null?void 0:p.unitHuman}</td>
                        </tr>
                        <tr>
                            <td>Data type</td>
                            <td>${(x=this._injectedFile.value)==null?void 0:x.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `}};$s.styles=Ve`

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
    
    `;$s=Yh([Fe("thermal-file-info")],$s);var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Qh=(e,t,r,i)=>{for(var s=i>1?void 0:i?Xh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Gh(t,r,s),s};let Ss=class extends vt{render(){return X`
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
                        <p>version ${Os.version}</p>
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
        `}};Ss.styles=Ve`

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
    
    `;Ss=Qh([Fe("thermal-app-info")],Ss);var Kh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Jh=(e,t,r,i)=>{for(var s=i>1?void 0:i?Zh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Kh(t,r,s),s};let Ps=class extends At{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return X`

            <thermal-button variant="foreground">
            ${this._injectedFile.value?this._injectedFile.value.fileName:"Loading..."}
            </thermal-button>

            <!--
            
            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value?this._injectedFile.value.fileName:"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>{var e;return window.open((e=this._injectedFile.value)==null?void 0:e.url)}}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var e;return(e=this._injectedFile.value)==null?void 0:e.exportAsPng()}}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var e;return(e=this._injectedFile.value)==null?void 0:e.exportThermalDataAsSvg()}}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

            -->

        
        `}};Ps.styles=Ve`

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
    
    `;Ps=Jh([Fe("thermal-file-name")],Ps);var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,rd=(e,t,r,i)=>{for(var s=i>1?void 0:i?td(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&ed(t,r,s),s};let Es=class extends At{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return X`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>{var e;return window.open((e=this._injectedFile.value)==null?void 0:e.url)}}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var e;return(e=this._injectedFile.value)==null?void 0:e.exportAsPng()}}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var e;return(e=this._injectedFile.value)==null?void 0:e.exportThermalDataAsSvg()}}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `}};Es.styles=Ve`

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
    
    `;Es=rd([Fe("thermal-file-download")],Es);(()=>{var e=Object.defineProperty,t=Math.pow,r=(o,h,v)=>h in o?e(o,h,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[h]=v,i=(o,h,v)=>(r(o,typeof h!="symbol"?h+"":h,v),v),s=(o,h)=>` ${h&&h.length>0?h.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",d="range-dragging",m="data",p="min",x="max",y="step",$="round",_="type",C="theme",ee="rtl",H="btt",z="disabled",ge="keyboard-disabled",he="mousewheel-disabled",Oe="slider-width",B="slider-height",xe="slider-radius",J="slider-bg",de="slider-bg-hover",_e="slider-bg-fill",Q="pointer-width",fe="pointer-height",ie="pointer-radius",f="pointer-bg",b="pointer-bg-hover",j="pointer-bg-focus",K="pointer-shadow",Se="pointer-shadow-hover",ne="pointer-shadow-focus",_t="pointer-border",Xt="pointer-border-hover",ze="pointer-border-focus",kt="animate-onclick",Ai="css-links",tt="vertical",Ot="horizontal",gr=(o,h,v,g,M)=>{let I=h-o;return I===0?v:(g-v)*(M-o)/I+v},lt=o=>!isNaN(parseFloat(o))&&isFinite(o),Me=(o,h)=>lt(o)?Number(o):h,Ur=(o,h)=>h===0?0:Math.round(o/h)*h,Oi=(o,h=1/0)=>{if(h===1/0)return o;let v=t(10,h);return Math.round(o*v)/v},Ue=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Ti=(o,h)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:h}}))},Ci=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:h}}))},Mi=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:h}}))},Di=(o,h)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:h}}))},Fi=(o,h)=>{if(!h||h.length<=0)return;let v=h.map(M=>lt(M)?Me(M,M):M),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let M=1;M<v.length;M++)g[`value${M+1}`]=v[M];o.dispatchEvent(new CustomEvent("change",{detail:g}))},S=(o,h,v)=>{let g=0,M,I,re,D,F=!1,se=(q,Ee,Ie,He,Re,Le)=>{let Ze=g;Ie!==void 0&&q>Ie&&(q=Ie),Ee!==void 0&&q<Ee&&(q=Ee),g=q;let Je=g;return(He===tt&&Le||He===Ot&&Re)&&(Je=100-Je),He===tt?h.style.top=`${Je}%`:h.style.left=`${Je}%`,Ze!==g},ce=q=>q===h||h.contains(q),N=(q,Ee,Ie,He)=>{M=q,I=Ee,re=Ie,D=He},ke=q=>{F=q,h.classList.toggle("disabled",F),F?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},ot=(q,Ee)=>{Ee==null?h.removeAttribute(q):h.setAttribute(q,Ee)},Ye=q=>h.getAttribute(q),V=q=>{if(!F){switch(q.key){case"ArrowLeft":{q.preventDefault(),typeof M=="function"&&M(v);break}case"ArrowRight":{q.preventDefault(),typeof I=="function"&&I(v);break}case"ArrowUp":{q.preventDefault(),typeof re=="function"&&re(v);break}case"ArrowDown":{q.preventDefault(),typeof D=="function"&&D(v);break}}Di(o,q)}},ae=()=>{F||Ti(o,h)};return h.className=`pointer pointer-${v}`,h.addEventListener("keydown",V),h.addEventListener("click",ae),{$pointer:h,get percent(){return g},get disabled(){return F},set disabled(q){ke(q)},updatePosition:se,isClicked:ce,setCallbacks:N,setAttr:ot,getAttr:Ye,destroy:()=>{h.removeEventListener("keydown",V),h.removeEventListener("click",ae),h.remove()}}},A=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let h=o.split(","),v=[],g=!0;for(let M=0;M<h.length;M++){let I=h[M].trim();I!==""&&(v.push(I),lt(I)||(g=!1))}return g?v.map(M=>Number(M)):v},O=(o,h)=>h?h.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,T=o=>({updatePosition:(h,v,g,M)=>{if(v.length<=0)return;let I=v.length===1,re=v[0],D=v[v.length-1];h===tt?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),I?o.style.height=`${re}%`:o.style.height=`${Math.abs(re-D)}%`,M?(o.style.bottom="0%",I?o.style.top="auto":o.style.top=`${Math.min(100-D,100-re)}%`):(o.style.bottom="auto",I?o.style.top="0%":o.style.top=`${Math.min(re,D)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),I?o.style.width=`${re}%`:o.style.width=`${Math.abs(re-D)}%`,g?(o.style.right="0%",I?o.style.left="auto":o.style.left=`${Math.min(100-D,100-re)}%`):(o.style.right="auto",I?o.style.left="0%":o.style.left=`${Math.min(re,D)}%`))}}),W="--animate-onclick",be="--width",G="--height",Pe="--panel-bg-border-radius",pe="--panel-bg",R="--panel-bg-hover",me="--panel-bg-fill",k="--pointer-width",P="--pointer-height",Z="--pointer-border-radius",oe="--pointer-bg",Be="--pointer-bg-hover",qe="--pointer-bg-focus",pt="--pointer-shadow",rt="--pointer-shadow-hover",at="--pointer-shadow-focus",Tt="--pointer-border",U="--pointer-border-hover",te="--pointer-border-focus",E=(o,h,v)=>{let g=new Map;for(let M of o.attributes){let I=M.nodeName.trim().toLowerCase();if(!h.test(I))continue;let re=I.replace(/\D/g,"").trim(),D=re===""||re==="0"||re==="1"?0:Me(re,0)-1,F=v&&typeof v=="function"?v(M.value):M.value;g.set(D,F)}return g},Y=o=>{if(!o)return null;let h=o.getAttribute(Ai);if(!h)return null;let v=h.split(";"),g=[];for(let M of v)M.trim()!==""&&g.push(M.trim());return g},ye=[[be,Oe,"sliderWidth",null],[G,B,"sliderHeight",null],[Pe,xe,"sliderRadius",null],[pe,J,"sliderBg",null],[R,de,"sliderBgHover",null],[me,_e,"sliderBgFill",null],[k,Q,"pointer#Width",/^pointer([0-9]*)-width$/],[P,fe,"pointer#Height",/^pointer([0-9]*)-height$/],[Z,ie,"pointer#Radius",/^pointer([0-9]*)-radius$/],[oe,f,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Be,b,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[qe,j,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[pt,K,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[rt,Se,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[at,ne,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Tt,_t,"pointer#Border",/^pointer([0-9]*)-border$/],[U,Xt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[te,ze,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ve=(o,h,v)=>{let g=null,M=[],I=new Map,re=(V,ae=h)=>{let q=[...ae.classList];for(let Ee of q)Ee.startsWith(V)&&h.classList.remove(Ee)},D=()=>{re("shape");let V=h.querySelectorAll(".pointer");for(let ae of V)re("shape",ae)},F=V=>{g=V,re("theme-"),typeof V=="string"&&h.classList.add(`theme-${V}`)},se=()=>{if(D(),!(M.length<=0)){h.classList.add("shape",`shape-${M[0]}`);for(let V=1;V<M.length;V++){let ae=M[V];if(!ae)continue;let q=h.querySelector(`.pointer-${V}`);!q||q.classList.add("shape",`shape-${ae}`)}}},ce=(V,ae)=>{M[V]=ae,se()},N=()=>{D();let V=E(o,/^pointer([0-9]*)-shape$/);if(!(V.size<=0)){for(let ae of V){let q=ae[0];M[q]=ae[1]}se()}},ke=(V,ae)=>`${V}-${ae}`,ot=(V,ae,q)=>{let Ee=v[q];if(!Ee)return;let Ie=q===0?h:Ee.$pointer;if(ae==null){I.has(ke(V,q))&&I.delete(ke(V,q)),Ie.style.removeProperty(V);return}I.set(ke(V,q),ae),Ie.style.setProperty(V,ae)},Ye=(V,ae)=>I.get(ke(V,ae));return(()=>{for(let V of ye){let[ae,q,Ee,Ie]=V;if(Ie){let Re=E(o,Ie);for(let Le of Re){let Ze=Le[0],Je=Le[1];ot(ae,Je,Ze)}}else{let Re=o.getAttribute(q);ot(ae,Re,0)}let He=[];if(Ee.indexOf("#")===-1)He.push([Ee,0]);else{He.push([Ee.replace("#",""),0]),He.push([Ee.replace("#","0"),0]),He.push([Ee.replace("#","1"),0]);for(let Re=1;Re<v.length;Re++)He.push([Ee.replace("#",(Re+1).toString()),Re])}for(let Re of He)try{let Le=Re[0],Ze=Re[1];Object.prototype.hasOwnProperty.call(o,Le)||Object.defineProperty(o,Le,{get(){return Ye(ae,Ze)},set:Je=>{ot(ae,Je,Ze)}})}catch(Le){console.error(Le)}}F(o.getAttribute(C)),N()})(),{setStyle:ot,getStyle:Ye,get theme(){return g},set theme(V){F(V)},get pointerShapes(){return M},setPointerShape:ce}},Ce="animate-on-click",le="range-dragging",Ke=(o,h,v,g)=>{let M=[],I=ce=>{for(let N of M)N.update&&typeof N.update=="function"&&N.update(ce)},re=()=>{for(let ce of M)ce.destroy&&typeof ce.destroy=="function"&&ce.destroy()},D=(ce,N)=>{for(let ke of M)ke.onAttrChange&&typeof ke.onAttrChange=="function"&&ke.onAttrChange(ce,N)},F=ce=>{if(ce.gettersAndSetters){for(let N of ce.gettersAndSetters)if(!(!N.name||!N.attributes))try{Object.prototype.hasOwnProperty.call(o,N.name)||Object.defineProperty(o,N.name,N.attributes)}catch(ke){console.error("defineSettersGetters error:",ke)}}},se=ce=>{var N;if(!ce.css)return;let ke=(N=o.shadowRoot)==null?void 0:N.querySelector("style");!ke||(ke.innerHTML+=ce.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ce of window.tcRangeSliderPlugins){let N=ce();M.push(N),N.init&&typeof N.init=="function"&&(N.init(o,h,v,g),F(N),se(N))}},update:I,onAttrChange:D,destroy:re}},Ne=10,Hr=20,Ga=(o,h)=>{let v=new Map,g=/^value([0-9]*)$/;for(let D of o.attributes){let F=D.nodeName.trim().toLowerCase();if(!g.test(F))continue;let se=F.replace("value","").trim(),ce=se===""||se==="0"||se==="1"?0:Me(se,0)-1,N=lt(D.value)?Me(D.value,0):D.value;v.set(ce,N)}let M=Math.max(...Array.from(v.keys())),I=[];I.push([S(o,h,0),v.get(0)]);let re=h;for(let D=1;D<=M;D++){let F=h.cloneNode(!0);re.after(F),re=F,I.push([S(o,F,D),v.get(D)])}return I},Vs=(o,h,v,g,M,I,re)=>{try{Object.defineProperty(o,g,{configurable:!0,get(){if(!h)return;let D=h.pointers[v];if(!D)return;let F=h.getTextValue(D.percent);return lt(F)?Me(F,F):F},set:D=>{h.pointers[v]?h==null||h.setValue(D,v):h==null||h.addPointer(D)}}),Object.defineProperty(o,M,{configurable:!0,get(){var D,F;return(F=(D=h==null?void 0:h.pointers[v])==null?void 0:D.getAttr("aria-label"))!=null?F:void 0},set:D=>{!h||h.setAriaLabel(v,D)}}),Object.defineProperty(o,I,{configurable:!0,get(){var D,F;return(F=(D=h==null?void 0:h.styles)==null?void 0:D.pointerShapes[v])!=null?F:null},set:D=>{!h||!h.styles||h.styles.setPointerShape(v,D)}}),Object.defineProperty(o,re,{configurable:!0,get(){var D;return(D=h==null?void 0:h.pointers[v].disabled)!=null?D:!1},set:D=>{if(!h)return;let F=h==null?void 0:h.pointers[v];!F||(F.disabled=D)}})}catch(D){console.error(D)}},Xa=(o,h)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ne;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)Vs(o,h,g[4],g[0],g[1],g[2],g[3])},qs=(o,h,v)=>{var g;let M=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(M)for(let I of o)h?M.prepend(I.$pointer):M.append(I.$pointer)},Qa=(o,h)=>{if(!(!h||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Hr.toString();h.$pointer.style.zIndex=(Hr*2).toString()}},Ri=0,vr=100,Qt=2,zs="0.3s",Ka=(o,h,v)=>{let g=v.map(u=>u[0]),M=null,I=null,re=null,D=null,F=Ri,se=vr,ce,N,ke=Ot,ot=Qt,Ye=!1,V=!1,ae=!1,q=0,Ee=1/0,Ie=!1,He,Re,Le=!1,Ze=!1,Je=!1,Ct=zs,Ys=[],Gs=u=>{Le||(u.preventDefault&&u.preventDefault(),Nt(u),window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",Wr),Ci(o,u))},Wr=u=>{Le||(He=void 0,Re=void 0,window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",Wr),Ct&&h.classList.add(Ce),Mi(o,u))},eo=(u,w)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(u)&&Ct&&h.classList.remove(Ce),g[0];let L=ro(u);if(Ie){let we=w,ct=Vr(we);ct!==void 0&&(we=Ur(we,ct)),L?(He=we,Re=0,Ct&&h.classList.remove(Ce)):He!==void 0&&(Re=we-He,He=we)}if(!to(u)&&!L){for(let we of g)if(!(!we.isClicked(u)||we.disabled))return Ct&&h.classList.remove(Ce),we;for(let we of g)if(M===we)return we}let $e=1/0,je=null;for(let we of g){if(we.disabled)continue;let ct=Math.abs(w-we.percent);ct<$e&&($e=ct,je=we)}return je},Xs=()=>g.findIndex(u=>M===u&&!u.disabled),Nt=u=>{let w;if(ke===tt){let{height:$e,top:je}=h.getBoundingClientRect(),we=u.type.indexOf("mouse")!==-1?u.clientY:u.touches[0].clientY;w=Math.min(Math.max(0,we-je),$e)*100/$e}else{let{width:$e,left:je}=h.getBoundingClientRect(),we=u.type.indexOf("mouse")!==-1?u.clientX:u.touches[0].clientX;w=Math.min(Math.max(0,we-je),$e)*100/$e}if((Ye||V)&&(w=100-w),M=eo(u.target,w),M&&Qa(g,M),Ie&&g.length>1&&Re!==void 0){let $e=g[0],je=g[g.length-1],we=$e.percent+Re<0,ct=je.percent+Re>100;if(we||ct)return;for(let Zr=0;Zr<g.length;Zr++)et(Zr,g[Zr].percent+Re);return}let L=Xs();L!==-1&&(et(L,w),M==null||M.$pointer.focus())},Ir=u=>{if(Le||document.activeElement!==o||M!=null&&M.disabled)return;u.stopPropagation(),u.preventDefault();let w=u.deltaY<0,L=Ye||V,$e=w?!L:L,je=Xs();je!==-1&&($e?br(je,g[je].percent):yr(je,g[je].percent))},Qs=u=>{Le||Ze||(ke===tt?V?et(u,100):et(u,0):Ye?yr(u,g[u].percent):br(u,g[u].percent))},Ks=u=>{Le||Ze||(ke===tt?V?et(u,0):et(u,100):Ye?br(u,g[u].percent):yr(u,g[u].percent))},Zs=u=>{Le||Ze||(ke===tt?V?yr(u,g[u].percent):br(u,g[u].percent):Ye?et(u,100):et(u,0))},Js=u=>{Le||Ze||(ke===tt?V?br(u,g[u].percent):yr(u,g[u].percent):Ye?et(u,0):et(u,100))},to=u=>u.classList.contains("panel"),ro=u=>u.classList.contains("panel-fill"),br=(u,w)=>{if(w===void 0)return;let L=Vr(w);L==null&&(L=1),w-=L,w<0&&(w=0),et(u,w)},yr=(u,w)=>{if(w===void 0)return;let L=Vr(w);L==null&&(L=1),w+=L,w>100&&(w=100),et(u,w)},Ut=()=>{!D||D.update({percents:en(),values:tn(),$pointers:rn(),min:sn(),max:nn(),data:Bi(),step:ji(),round:Ui(),type:Ni(),textMin:qr(),textMax:zr(),rightToLeft:Ii(),bottomToTop:Vi(),pointersOverlap:Gi(),pointersMinDistance:Hi(),pointersMaxDistance:Wi(),rangeDragging:Xi(),disabled:qi(),keyboardDisabled:zi(),mousewheelDisabled:Yi()})},io=()=>{Ut()},so=u=>{if(!(ae||g.length<=1||se===F))if(u===0){let w=Ee*100/(se-F);return Math.max(0,g[u+1].percent-w)}else{let w=q*100/(se-F);return Math.min(g[u-1].percent+w,100)}},no=u=>{if(!(ae||g.length<=1||se===F))if(u===g.length-1){let w=Ee*100/(se-F);return Math.min(g[u-1].percent+w,100)}else{let w=q*100/(se-F);return Math.max(0,g[u+1].percent-w)}},Vr=u=>{let w;if(typeof ce=="function"){let L=gr(0,100,F,se,u);w=ce(L,u)}else w=ce;if(lt(w)){let L=se-F;return w=L===0?0:w*100/L,w}},Kt=u=>{if(u===void 0)return;let w=gr(0,100,F,se,u);return N!==void 0?N[Math.round(w)]:Oi(w,ot)},qr=()=>N!==void 0?N[F]:F,zr=()=>N!==void 0?N[se]:se,ji=()=>ce,ao=u=>{var w;return u<=0||ae?qr():(w=Kt(g[u-1].percent))!=null?w:""},oo=u=>{var w;return g.length<=1||u>=g.length-1||ae?zr():(w=Kt(g[u+1].percent))!=null?w:""},en=()=>g.map(u=>u.percent),tn=()=>g.map(u=>Kt(u.percent)),rn=()=>g.map(u=>u.$pointer),sn=()=>F,nn=()=>se,Bi=()=>N,Ni=()=>ke,Ui=()=>ot,Hi=()=>q,Wi=()=>Ee,lo=u=>Ys[u],Ii=()=>Ye,Vi=()=>V,qi=()=>Le,zi=()=>Ze,Yi=()=>Je,Gi=()=>ae,Xi=()=>Ie,et=(u,w)=>{if(w===void 0)return;let L=Vr(w);L!==void 0&&(w=Ur(w,L));let $e=g[u];if(!$e)return;let je=$e.updatePosition(w,so(u),no(u),ke,Ye,V);I==null||I.updatePosition(ke,g.map(we=>we.percent),Ye,V),Ut();for(let we of g){let ct=Kt(we.percent);ct!==void 0&&(we.setAttr("aria-valuenow",ct.toString()),we.setAttr("aria-valuetext",ct.toString()))}uo(),je&&Fi(o,g.map(we=>Kt(we.percent)))},mt=()=>{for(let u=0;u<g.length;u++)et(u,g[u].percent)},co=(u,w)=>{F=N!==void 0?0:Me(u,Ri),se=N!==void 0?N.length-1:Me(w,vr),Yr(F),Gr(se)},uo=()=>{var u,w;for(let L=0;L<g.length;L++){let $e=g[L];$e.setAttr("aria-valuemin",((u=ao(L))!=null?u:"").toString()),$e.setAttr("aria-valuemax",((w=oo(L))!=null?w:"").toString())}},Yr=u=>{F=Me(u,Ri),F>se&&(se=F+vr),mt()},Gr=u=>{se=Me(u,vr),se<F&&(se=F+vr),mt()},an=u=>{ae=!0;for(let w=0;w<u.length;w++)Xr(u[w],w);ae=!1;for(let w=0;w<u.length;w++)Xr(u[w],w)},Xr=(u,w)=>{let L;N!==void 0?(L=u==null?0:O(u,N),L===-1&&(L=0)):(L=Me(u,F),L<F&&(L=F),L>se&&(L=se));let $e=gr(F,se,0,100,L);et(w,$e)},Qr=u=>{if(u==null){ce=void 0;return}if(typeof u=="function"){ce=u,mt();return}if(lt(u)){ce=Me(u,1);let w=Math.abs(se-F);ce>w&&(ce=void 0),mt();return}ce=void 0},Qi=u=>{ae=u,mt()},Ki=u=>{(!lt(u)||u<0)&&(u=0),q=u},Zi=u=>{(!lt(u)||u<0)&&(u=1/0),Ee=u},Ji=u=>{Le=u,h.classList.toggle("disabled",Le),Le?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},on=u=>{Ze=u},ln=u=>{Je=u,Je?document.removeEventListener("wheel",Ir):document.addEventListener("wheel",Ir,{passive:!1})},es=u=>{if(u==null){N=void 0;return}if(N=A(u),N===void 0||N.length<=0){N=void 0;return}Yr(0),Gr(N.length-1),ce===void 0&&Qr(1)},ts=u=>{var w;typeof u=="string"?ke=u.trim().toLowerCase()===tt?tt:Ot:ke=Ot;let L=(w=o.shadowRoot)==null?void 0:w.querySelector(".range-slider-box");if(!L)return;L.className=`range-slider-box type-${ke}`,mt();let $e=ke===tt?"vertical":"horizontal";for(let je of g)je.setAttr("aria-orientation",$e)},rs=u=>{Ye=u,g.length>1&&qs(g,Ye,o),mt(),Ut()},is=u=>{V=u,g.length>1&&qs(g,V,o),mt(),Ut()},ss=u=>{ot=Me(u,Qt),ot<0&&(ot=Qt),Ut()},cn=u=>{u==null||u.toString().trim().toLowerCase()==="false"?(Ct=void 0,h.style.removeProperty(W),h.classList.remove(Ce)):(Ct=u.toString(),h.style.setProperty(W,Ct),h.classList.add(Ce))},un=(u,w)=>{let L=g[u];!L||(L.setAttr("aria-label",w),Ys[u]=w)},Kr=u=>{if(He=void 0,g.length<=1){Ie=!1,h.classList.remove(le);return}Ie=u,h.classList.toggle(le,Ie)},ho=()=>{Ji(Ue(o.getAttribute(z))),Ze=Ue(o.getAttribute(ge)),Je=Ue(o.getAttribute(he));let u=E(o,/^pointer([0-9]*)-disabled$/,w=>Ue(w));for(let w of u){let L=w[0];!g[L]||(g[L].disabled=w[1])}},fo=()=>{let u=E(o,/^aria-label([0-9]*)$/);for(let w of u){let L=w[0];un(L,w[1])}},po=u=>{let w=g.length,L=g[w-1].$pointer,$e=L.cloneNode(!0);L.after($e);let je=S(o,$e,w);return je.setCallbacks(Qs,Ks,Zs,Js),g.push(je),Xr(u,w),mt(),Ut(),w},mo=()=>{let u=g.length,w=g[u-1];return w?(w.destroy(),g.pop(),g.length<=1&&Kr(!1),mt(),Ut(),u-1):-1};return(()=>{var u,w;for(let $e of g)$e.setCallbacks(Qs,Ks,Zs,Js);let L=(u=o.shadowRoot)==null?void 0:u.querySelector(".panel-fill");L&&(I=T(L)),ts(o.getAttribute(_)),rs(Ue(o.getAttribute(ee))),is(Ue(o.getAttribute(H))),co(o.getAttribute(p),o.getAttribute(x)),Qr(o.getAttribute(y)),es(o.getAttribute(m)),an(v.map($e=>$e[1])),Qi(Ue(o.getAttribute(a))),Ki(Me(o.getAttribute(l),0)),Zi(Me(o.getAttribute(c),1/0)),Kr(Ue(o.getAttribute(d))),ss(Me(o.getAttribute($),Qt)),ho(),fo(),re=ve(o,h,g),cn((w=o.getAttribute(kt))!=null?w:zs),h.addEventListener("mousedown",Gs),h.addEventListener("mouseup",Wr),h.addEventListener("touchmove",Nt),h.addEventListener("touchstart",Nt),Je||document.addEventListener("wheel",Ir,{passive:!1}),D=Ke(o,io,{setValues:an,setMin:Yr,setMax:Gr,setStep:Qr,setPointersOverlap:Qi,setPointersMinDistance:Ki,setPointersMaxDistance:Zi,setDisabled:Ji,setType:ts,setRightToLeft:rs,setBottomToTop:is,setRound:ss,setKeyboardDisabled:on,setMousewheelDisabled:ln,setRangeDragging:Kr,setData:es},{getPercents:en,getValues:tn,getPointerElements:rn,getMin:sn,getMax:nn,getStep:ji,getData:Bi,getType:Ni,getRound:Ui,getTextMin:qr,getTextMax:zr,isRightToLeft:Ii,isBottomToTop:Vi,isDisabled:qi,isKeyboardDisabled:zi,isMousewheelDisabled:Yi,isPointersOverlap:Gi,isRangeDraggingEnabled:Xi,getPointersMinDistance:Hi,getPointersMaxDistance:Wi}),D.init()})(),{get pointers(){return g},get styles(){return re},get pluginsManager(){return D},get min(){return qr()},get max(){return zr()},get step(){return ji()},get pointersOverlap(){return Gi()},set pointersOverlap(u){Qi(u)},get pointersMinDistance(){return Hi()},set pointersMinDistance(u){Ki(u)},get pointersMaxDistance(){return Wi()},set pointersMaxDistance(u){Zi(u)},get disabled(){return qi()},set disabled(u){Ji(u)},get data(){return Bi()},get type(){return Ni()},set type(u){ts(u)},get rightToLeft(){return Ii()},set rightToLeft(u){rs(u)},get bottomToTop(){return Vi()},set bottomToTop(u){is(u)},get round(){return Ui()},set round(u){ss(u)},get animateOnClick(){return Ct},set animateOnClick(u){cn(u)},get keyboardDisabled(){return zi()},set keyboardDisabled(u){on(u)},get mousewheelDisabled(){return Yi()},set mousewheelDisabled(u){ln(u)},get rangeDragging(){return Xi()},set rangeDragging(u){Kr(u)},setMin:Yr,setMax:Gr,setValue:Xr,setStep:Qr,setData:es,getTextValue:Kt,setAriaLabel:un,getAriaLabel:lo,addPointer:po,removePointer:mo,destroy:()=>{h.removeEventListener("mousedown",Gs),h.removeEventListener("mouseup",Wr),h.removeEventListener("touchmove",Nt),h.removeEventListener("touchstart",Nt),document.removeEventListener("wheel",Ir);for(let u of g)u.destroy();D==null||D.destroy()}}},Za=(o,h,v)=>{let g=ye.find(([D,F,se,ce])=>F.replace("#","")===h.replace(/\d+/g,""));if(g&&o.styles){let[D,F,se,ce]=g,N=h.replace(/\D/g,"").trim(),ke=N===""||N==="0"||N==="1"?0:Me(N,0)-1;o.styles.setStyle(D,v,ke);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(h,v),h){case p:{o.setMin(v);break}case x:{o.setMax(v);break}case y:{o.setStep(v);break}case a:{o.pointersOverlap=Ue(v);break}case l:{o.pointersMinDistance=Me(v,0);break}case d:{o.rangeDragging=Ue(v);break}case c:{o.pointersMaxDistance=Me(v,1/0);break}case z:{o.disabled=Ue(v);break}case ge:{o.keyboardDisabled=Ue(v);break}case he:{o.mousewheelDisabled=Ue(v);break}case m:{o.setData(v);break}case _:{o.type=v;break}case ee:{o.rightToLeft=Ue(v);break}case H:{o.bottomToTop=Ue(v);break}case $:{o.round=Me(v,Qt);break}case C:{o.styles&&(o.styles.theme=v);break}case kt:{o.animateOnClick=v;break}}let M=null;if(/^value([0-9]*)$/.test(h)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(h)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(h)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(h)&&(M="pointer-shape"),!M)return;let I=h.replace(/\D/g,"").trim(),re=I===""||I==="0"||I==="1"?0:Me(I,0)-1;switch(M){case"value":{o.setValue(v,re);break}case"pointer-disabled":{let D=o==null?void 0:o.pointers[re];if(!D)return;D.disabled=Ue(v);break}case"aria-label":{o.setAriaLabel(re,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(re,v);break}}},Ja=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.disabled)!=null?h:!1}set data(o){var h;(h=this.slider)==null||h.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var h;(h=this.slider)==null||h.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var h;(h=this.slider)==null||h.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,h;return(h=(o=this.slider)==null?void 0:o.round)!=null?h:Qt}set type(o){!this.slider||(this.slider.type=o??Ot)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Ot}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?h:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?h:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?h:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,h,v;return(v=(h=(o=this.slider)==null?void 0:o.styles)==null?void 0:h.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,h;return(h=(o=this.slider)==null?void 0:o.rightToLeft)!=null?h:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,h;return(h=(o=this.slider)==null?void 0:o.bottomToTop)!=null?h:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?h:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?h:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,h;return(h=(o=this.slider)==null?void 0:o.rangeDragging)!=null?h:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ue(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var h,v;if(!this.slider)return;let g=(v=(h=this.slider)==null?void 0:h.addPointer(o))!=null?v:0;Vs(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let h=document.createElement("style");h.textContent=o,this.shadowRoot.appendChild(h)}connectedCallback(){var o,h;if(!this.shadowRoot)return;this._externalCSSList=Y(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let g=(h=this.shadowRoot)==null?void 0:h.getElementById("range-slider");if(!g)return;let M=Ga(this,v);this.slider=Ka(this,g,M),Xa(this,this.slider),this._observer=new MutationObserver(I=>{I.forEach(re=>{var D;if(!this.slider||re.type!=="attributes")return;let F=re.attributeName;!F||Za(this.slider,F,(D=this.getAttribute(F))!=null?D:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Li=Ja;window.tcRangeSlider=Li,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Li),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Li{})})();(()=>{var e=(l,c,d,m,p)=>{let x=c-l;return x===0?d:(m-d)*(p-l)/x+d},t=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,c)=>t(l)?Number(l):c,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,c=null,d=null,m=null,p=null,x=!1,y=s,$=n,_=()=>{var B;let xe=(B=l==null?void 0:l.shadowRoot)==null?void 0:B.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),d.append(m),p=document.createElement("div"),p.classList.add("mark-values"),d.append(p),xe.append(d)},C=()=>{!c||!d||d.classList.toggle("is-reversed",c.isRightToLeft()||c.isBottomToTop())},ee=()=>{var B;if(!d||!c)return;let xe=c.getMin(),J=c.getMax(),de=c.getType()==="vertical",_e=c.isRightToLeft()||c.isBottomToTop();for(let fe=0;fe<y;fe++){let ie=document.createElement("div");ie.classList.add("mark",`mark-${fe}`);let f=y===0?0:fe*100/(y-1);de?_e?ie.style.top=`${100-f}%`:ie.style.top=`${f}%`:_e?ie.style.left=`${100-f}%`:ie.style.left=`${f}%`,m==null||m.append(ie)}let Q=c.getData();for(let fe=0;fe<$;fe++){let ie=document.createElement("div");ie.classList.add("mark-value",`mark-value-${fe}`);let f=$===0?0:fe*100/($-1),b=e(0,$-1,xe,J,fe);ie.textContent=(Q?(B=Q[Math.round(b)])!=null?B:"":b).toString(),de?_e?ie.style.top=`${100-f}%`:ie.style.top=`${f}%`:_e?ie.style.left=`${100-f}%`:ie.style.left=`${f}%`,p==null||p.append(ie)}},H=(B,xe)=>{Oe(),y=B,$=xe,y<=0&&(y=s),$<=0&&($=n),_(),ee(),C()},z=B=>{x=B,x?(_(),ee(),C()):Oe()},ge=B=>{!d||d.style.setProperty("--marks-color",B)},he=B=>{!d||d.style.setProperty("--values-color",B)},Oe=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(B,xe,J,de)=>{var _e,Q;c=de,l=B,x=i(l.getAttribute("marks")),x&&(H(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),ge((_e=l.getAttribute("marks-color"))!=null?_e:"#cbd5e1"),he((Q=l.getAttribute("marks-values-color"))!=null?Q:"#475569"))},onAttrChange:(B,xe)=>{B==="marks"&&z(i(xe)),B==="marks-count"&&H(r(xe,s),$),B==="marks-values-count"&&H(y,r(xe,n)),B==="marks-color"&&ge(xe),B==="marks-values-color"&&he(xe)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return x??!1},set:B=>{z(i(B))}}},{name:"marksCount",attributes:{get(){return y??s},set:B=>{H(r(B,s),$)}}},{name:"marksValuesCount",attributes:{get(){return y??s},set:B=>{H(y,r(B,n))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:B=>{ge(B)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:B=>{he(B)}}}],destroy:Oe,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var id=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,Gt=(e,t,r,i)=>{for(var s=i>1?void 0:i?sd(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&id(t,r,s),s};let Pt=class extends xt{constructor(){super(...arguments),this.sliderRef=Xe()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,e=>{e&&(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.identificator,e=>{e&&(this.from=e.from,this.to=e.to)})}firstUpdated(e){super.firstUpdated(e);const t=this.sliderRef.value;t.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),t.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),t.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return X`

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

        `}};Pt.styles=Ve`

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
    
    `;Gt([Te({type:Number,reflect:!0})],Pt.prototype,"min",2);Gt([Te({type:Number,reflect:!0})],Pt.prototype,"max",2);Gt([Te({type:Number,reflect:!0})],Pt.prototype,"from",2);Gt([Te({type:Number,reflect:!0})],Pt.prototype,"to",2);Gt([We()],Pt.prototype,"palette",2);Gt([We()],Pt.prototype,"sliderRef",2);Pt=Gt([Fe("thermal-range")],Pt);var nd=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,Si=(e,t,r,i)=>{for(var s=i>1?void 0:i?ad(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&nd(t,r,s),s};let dr=class extends xt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(e){super.firstUpdated(e),this.registry.histogram.addListener(this.identificator,t=>{this.histogram=t})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return X`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":Ae}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(e=>X`
                            <div class="histogram-bar">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():X`
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
        `}};dr.styles=Ve`

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


    `;Si([We()],dr.prototype,"histogram",2);Si([Te({type:Boolean,reflect:!0})],dr.prototype,"interactive",2);Si([Te({type:String,reflect:!0})],dr.prototype,"height",2);dr=Si([Fe("thermal-histogram")],dr);var od=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,Pi=(e,t,r,i)=>{for(var s=i>1?void 0:i?ld(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&od(t,r,s),s};let wt=class extends xt{constructor(){super(...arguments),this.ticksRef=Xe(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(e){super.firstUpdated(e),this.registry.minmax.addListener(this.identificator,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(t=>{const r=t[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(e,t,r){return e<t?t:e>r?r:e}map(e,t,r,i,s){const n=(e-t)*(s-i)/(r-t)+i;return this.clamp(n,i,s)}calculateTicks(e,t){if(e===void 0)this.ticks=[];else{const r=[0],i=Math.floor(t/wt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(e,n)).filter(n=>n!==void 0)}}calculateOneTick(e,t){if(e!==void 0){const r=this.map(t,0,100,e.min,e.max);return{percentage:t,value:r}}}render(){return X`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Qe(this.ticksRef)}>

                    ${this.ticks.map(e=>X`
                            <div class="tick" >
                                <div class="tick-value">
                                ${e.value.toFixed(wt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};wt.TICK_WIDTH=40;wt.TICK_FIXED=2;wt.styles=Ve`

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


    `;Pi([Te({type:String,reflect:!0})],wt.prototype,"placement",2);Pi([We()],wt.prototype,"minmax",2);Pi([We()],wt.prototype,"ticks",2);wt=Pi([Fe("thermal-ticks")],wt);var cd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,hd=(e,t,r,i)=>{for(var s=i>1?void 0:i?ud(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&cd(t,r,s),s};let As=class extends At{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){var e;return X`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot; https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js &quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${(e=this._injectedFile.value)==null?void 0:e.url}c&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `}};As.styles=Ve`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;As=hd([Fe("thermal-file-share")],As);var dd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,Ei=(e,t,r,i)=>{for(var s=i>1?void 0:i?fd(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&dd(t,r,s),s};let fr=class extends At{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=Xe(),this.barRef=Xe()}getClassName(){return"TimelineElement"}update(e){var t,r;return(t=this._injectedFile.value)==null||t.timeline.removeListener(this.identificator),(r=this._injectedFile.value)==null||r.timeline.addListener(this.identificator,i=>{this.percentage=i/this._injectedFile.value.duration*100,this.ms=this.formatDuration(this._injectedFile.value.timeline.value)}),super.update(e)}formatDuration(e){const t=e%1e3,r=1e3*60,i=Math.floor(e/r),s=(e-i*r-t)/1e3,n=(a,l)=>{const c=a.toString();if(c.length===l)return c;if(c.length<l){const d=l-c.length;let m="";for(let p=0;p<d;p++)m=m+"0";return m+c}};return[i,n(s,2),n(t,3)].join(":")}play(){this._injectedFile.value&&(this.playing=!0,this._injectedFile.value.timeline.play())}pause(){this._injectedFile.value&&(this.playing=!1,this._injectedFile.value.timeline.pause())}applyBar(e){if(this.log(e),e.clientX,this.timelineRef.value&&this.barRef.value&&this._injectedFile.value){const r=(e.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this._injectedFile.value.timeline.setValueByPercent(r)}}render(){return this._injectedFile.value===void 0||this._injectedFile.value.timeline.duration===0?Ae:X`
            <div class="container">


                ${this._injectedFile.value!==void 0?X`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?X`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:X`
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
                    `:Ae}
            
            </div>

          `}};fr.styles=Ve`
    
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
    
    `;Ei([We()],fr.prototype,"playing",2);Ei([We()],fr.prototype,"percentage",2);Ei([We()],fr.prototype,"ms",2);fr=Ei([Fe("thermal-timeline")],fr);var pd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Ws=(e,t,r,i)=>{for(var s=i>1?void 0:i?md(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&pd(t,r,s),s};let Dr=class extends Bs{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=Xe()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(e,t,r){var i;super.attributeChangedCallback(e,t,r),e==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return X`
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
                ${this.fullscreen==="on"?X`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:X`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
              
            </thermal-image>

          </div>
          <thermal-group>
      </thermal-registry>
    </thermal-manager>
    `}};Dr.styles=Ve`

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
  
  `;Ws([Te({type:String,reflect:!0})],Dr.prototype,"url",2);Ws([Te({type:String,reflect:!0})],Dr.prototype,"fullscreen",2);Dr=Ws([Fe("thermal-file-app")],Dr);const ds=window.matchMedia("(prefers-color-scheme: dark)"),Is="thermal-dark-mode",jn=()=>{document.body.classList.add(Is)},gd=()=>{document.body.classList.remove(Is)},vd=()=>{ds.matches&&jn();const e=t=>{t.matches?jn():gd()};ds.addEventListener("change",e),ds.addListener(e)},bd=Os.version.toString().replaceAll(".","-"),Ya=e=>`thermal__${e}__${bd}`,yd=e=>document.getElementById(Ya(e))!==null,Bn=(e,t)=>{if(!yd(e)){const r=document.createElement("style");r.setAttribute("id",Ya(e)),r.innerHTML=t,document.head.appendChild(r)}},wd=()=>{Bn("rootVariables",`

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


            
        
        `),Bn("darkModeOverrides",`
        
            body.${Is} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Un}
Author: ${Wn}
Repository: ${Hn.url}
`);vd();wd();document.addEventListener("DOMContentLoaded",()=>{});
