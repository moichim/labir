const vo="@labir/embed",Un="1.2.21",bo="Embedded display of thermograms",yo="dist/embed.js",wo="module",Hn={type:"git",url:"https://github.com/moichim/labir"},xo={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Wn="Jan Jáchim <jachim5@gmail.com>",_o="ISC",ko={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/emotion":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11"},$o={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Os={name:vo,version:Un,description:bo,main:yo,type:wo,repository:Hn,scripts:xo,author:Wn,license:_o,dependencies:ko,devDependencies:$o};var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Po(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Eo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var s=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return e[i]}})}),r}var ps={exports:{}};const So={},To=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"})),Kt=Eo(To);/**
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
 */(function(e,t){(function(r,i){i(t)})(fs,function(r){var i={},s={exports:{}};(function(P){var O=function(V){return typeof V<"u"&&V.versions!=null&&V.versions.node!=null&&V+""=="[object process]"};P.exports.isNode=O,P.exports.platform=typeof process<"u"&&O(process)?"node":"browser";var A=P.exports.platform==="node"&&Kt;P.exports.isMainThread=P.exports.platform==="node"?(!A||A.isMainThread)&&!process.connected:typeof Window<"u",P.exports.cpus=P.exports.platform==="browser"?self.navigator.hardwareConcurrency:Kt.cpus().length})(s);var n=s.exports,a={},l;function c(){if(l)return a;l=1;function P(V,we){var K=this;if(!(this instanceof P))throw new SyntaxError("Constructor must be called with the new operator");if(typeof V!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Se=[],ve=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var L=function(ee,de){Se.push(ee),ve.push(de)};this.then=function(S,ee){return new P(function(de,Be){var qe=S?O(S,de,Be):de,pt=ee?O(ee,de,Be):Be;L(qe,pt)},K)};var be=function(ee){return K.resolved=!0,K.rejected=!1,K.pending=!1,Se.forEach(function(de){de(ee)}),L=function(Be,qe){Be(ee)},be=k=function(){},K},k=function(ee){return K.resolved=!1,K.rejected=!0,K.pending=!1,ve.forEach(function(de){de(ee)}),L=function(Be,qe){qe(ee)},be=k=function(){},K};this.cancel=function(){return we?we.cancel():k(new A),K},this.timeout=function(S){if(we)we.timeout(S);else{var ee=setTimeout(function(){k(new C("Promise timed out after "+S+" ms"))},S);K.always(function(){clearTimeout(ee)})}return K},V(function(S){be(S)},function(S){k(S)})}function O(V,we,K){return function(Se){try{var ve=V(Se);ve&&typeof ve.then=="function"&&typeof ve.catch=="function"?ve.then(we,K):we(ve)}catch(L){K(L)}}}P.prototype.catch=function(V){return this.then(null,V)},P.prototype.always=function(V){return this.then(V,V)},P.all=function(V){return new P(function(we,K){var Se=V.length,ve=[];Se?V.forEach(function(L,be){L.then(function(k){ve[be]=k,Se--,Se==0&&we(ve)},function(k){Se=0,K(k)})}):we(ve)})},P.defer=function(){var V={};return V.promise=new P(function(we,K){V.resolve=we,V.reject=K}),V};function A(V){this.message=V||"promise cancelled",this.stack=new Error().stack}A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="CancellationError",P.CancellationError=A;function C(V){this.message=V||"timeout exceeded",this.stack=new Error().stack}return C.prototype=new Error,C.prototype.constructor=Error,C.prototype.name="TimeoutError",P.TimeoutError=C,a.Promise=P,a}function d(P,O){(O==null||O>P.length)&&(O=P.length);for(var A=0,C=Array(O);A<O;A++)C[A]=P[A];return C}function m(P,O){var A=typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(!A){if(Array.isArray(P)||(A=U(P))||O){A&&(P=A);var C=0,V=function(){};return{s:V,n:function(){return C>=P.length?{done:!0}:{done:!1,value:P[C++]}},e:function(ve){throw ve},f:V}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var we,K=!0,Se=!1;return{s:function(){A=A.call(P)},n:function(){var ve=A.next();return K=ve.done,ve},e:function(ve){Se=!0,we=ve},f:function(){try{K||A.return==null||A.return()}finally{if(Se)throw we}}}}function p(P,O,A){return(O=x(O))in P?Object.defineProperty(P,O,{value:A,enumerable:!0,configurable:!0,writable:!0}):P[O]=A,P}function _(P,O){var A=Object.keys(P);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(P);O&&(C=C.filter(function(V){return Object.getOwnPropertyDescriptor(P,V).enumerable})),A.push.apply(A,C)}return A}function y(P){for(var O=1;O<arguments.length;O++){var A=arguments[O]!=null?arguments[O]:{};O%2?_(Object(A),!0).forEach(function(C){p(P,C,A[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(A)):_(Object(A)).forEach(function(C){Object.defineProperty(P,C,Object.getOwnPropertyDescriptor(A,C))})}return P}function E(P,O){if(typeof P!="object"||!P)return P;var A=P[Symbol.toPrimitive];if(A!==void 0){var C=A.call(P,O||"default");if(typeof C!="object")return C;throw new TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(P)}function x(P){var O=E(P,"string");return typeof O=="symbol"?O:O+""}function $(P){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},$(P)}function U(P,O){if(P){if(typeof P=="string")return d(P,O);var A={}.toString.call(P).slice(8,-1);return A==="Object"&&P.constructor&&(A=P.constructor.name),A==="Map"||A==="Set"?Array.from(P):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?d(P,O):void 0}}var j={exports:{}},W={},oe;function re(){return oe||(oe=1,W.validateOptions=function(O,A,C){if(O){var V=O?Object.keys(O):[],we=V.find(function(Se){return!A.includes(Se)});if(we)throw new Error('Object "'+C+'" contains an unknown option "'+we+'"');var K=A.find(function(Se){return Object.prototype[Se]&&!V.includes(Se)});if(K)throw new Error('Object "'+C+'" contains an inherited option "'+K+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return O}},W.workerOptsNames=["credentials","name","type"],W.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],W.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),W}var $e,B;function he(){return B||(B=1,$e=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),$e}var X;function ne(){if(X)return j.exports;X=1;var P=c(),O=P.Promise,A=n,C=re(),V=C.validateOptions,we=C.forkOptsNames,K=C.workerThreadOptsNames,Se=C.workerOptsNames,ve="__workerpool-terminate__";function L(){var I=k();if(!I)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return I}function be(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":$(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function k(){try{return Kt}catch(I){if($(I)==="object"&&I!==null&&I.code==="MODULE_NOT_FOUND")return null;throw I}}function S(){if(A.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var I=new Blob([he()],{type:"text/javascript"});return window.URL.createObjectURL(I)}else return __dirname+"/worker.js"}function ee(I,ie){if(ie.workerType==="web")return be(),de(I,ie.workerOpts,Worker);if(ie.workerType==="thread")return T=L(),Be(I,T,ie);if(ie.workerType==="process"||!ie.workerType)return qe(I,pt(ie),Kt);if(A.platform==="browser")return be(),de(I,ie.workerOpts,Worker);var T=k();return T?Be(I,T,ie):qe(I,pt(ie),Kt)}function de(I,ie,T){V(ie,Se,"workerOpts");var Q=new T(I,ie);return Q.isBrowserWorker=!0,Q.on=function(xe,ye){this.addEventListener(xe,function(Ce){ye(Ce.data)})},Q.send=function(xe,ye){this.postMessage(xe,ye)},Q}function Be(I,ie,T){var Q,xe;V(T==null?void 0:T.workerThreadOpts,K,"workerThreadOpts");var ye=new ie.Worker(I,y({stdout:(Q=T==null?void 0:T.emitStdStreams)!==null&&Q!==void 0?Q:!1,stderr:(xe=T==null?void 0:T.emitStdStreams)!==null&&xe!==void 0?xe:!1},T==null?void 0:T.workerThreadOpts));return ye.isWorkerThread=!0,ye.send=function(Ce,fe){this.postMessage(Ce,fe)},ye.kill=function(){return this.terminate(),!0},ye.disconnect=function(){this.terminate()},T!=null&&T.emitStdStreams&&(ye.stdout.on("data",function(Ce){return ye.emit("stdout",Ce)}),ye.stderr.on("data",function(Ce){return ye.emit("stderr",Ce)})),ye}function qe(I,ie,T){V(ie.forkOpts,we,"forkOpts");var Q=T.fork(I,ie.forkArgs,ie.forkOpts),xe=Q.send;return Q.send=function(ye){return xe.call(Q,ye)},ie.emitStdStreams&&(Q.stdout.on("data",function(ye){return Q.emit("stdout",ye)}),Q.stderr.on("data",function(ye){return Q.emit("stderr",ye)})),Q.isChildProcess=!0,Q}function pt(I){I=I||{};var ie=process.execArgv.join(" "),T=ie.indexOf("--inspect")!==-1,Q=ie.indexOf("--debug-brk")!==-1,xe=[];return T&&(xe.push("--inspect="+I.debugPort),Q&&xe.push("--debug-brk")),process.execArgv.forEach(function(ye){ye.indexOf("--max-old-space-size")>-1&&xe.push(ye)}),Object.assign({},I,{forkArgs:I.forkArgs,forkOpts:Object.assign({},I.forkOpts,{execArgv:(I.forkOpts&&I.forkOpts.execArgv||[]).concat(xe),stdio:I.emitStdStreams?"pipe":void 0})})}function rt(I){for(var ie=new Error(""),T=Object.keys(I),Q=0;Q<T.length;Q++)ie[T[Q]]=I[T[Q]];return ie}function at(I,ie){if(Object.keys(I.processing).length===1){var T=Object.values(I.processing)[0];T.options&&typeof T.options.on=="function"&&T.options.on(ie)}}function At(I,ie){var T=this,Q=ie||{};this.script=I||S(),this.worker=ee(this.script,Q),this.debugPort=Q.debugPort,this.forkOpts=Q.forkOpts,this.forkArgs=Q.forkArgs,this.workerOpts=Q.workerOpts,this.workerThreadOpts=Q.workerThreadOpts,this.workerTerminateTimeout=Q.workerTerminateTimeout,I||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(fe){at(T,{stdout:fe.toString()})}),this.worker.on("stderr",function(fe){at(T,{stderr:fe.toString()})}),this.worker.on("message",function(fe){if(!T.terminated)if(typeof fe=="string"&&fe==="ready")T.worker.ready=!0,ye();else{var Ke=fe.id,Ne=T.processing[Ke];Ne!==void 0&&(fe.isEvent?Ne.options&&typeof Ne.options.on=="function"&&Ne.options.on(fe.payload):(delete T.processing[Ke],T.terminating===!0&&T.terminate(),fe.error?Ne.resolver.reject(rt(fe.error)):Ne.resolver.resolve(fe.result)))}});function xe(fe){T.terminated=!0;for(var Ke in T.processing)T.processing[Ke]!==void 0&&T.processing[Ke].resolver.reject(fe);T.processing=Object.create(null)}function ye(){var fe=m(T.requestQueue.splice(0)),Ke;try{for(fe.s();!(Ke=fe.n()).done;){var Ne=Ke.value;T.worker.send(Ne.message,Ne.transfer)}}catch(Hr){fe.e(Hr)}finally{fe.f()}}var Ce=this.worker;this.worker.on("error",xe),this.worker.on("exit",function(fe,Ke){var Ne=`Workerpool Worker terminated Unexpectedly
`;Ne+="    exitCode: `"+fe+"`\n",Ne+="    signalCode: `"+Ke+"`\n",Ne+="    workerpool.script: `"+T.script+"`\n",Ne+="    spawnArgs: `"+Ce.spawnargs+"`\n",Ne+="    spawnfile: `"+Ce.spawnfile+"`\n",Ne+="    stdout: `"+Ce.stdout+"`\n",Ne+="    stderr: `"+Ce.stderr+"`\n",xe(new Error(Ne))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return At.prototype.methods=function(){return this.exec("methods")},At.prototype.exec=function(I,ie,T,Q){T||(T=O.defer());var xe=++this.lastId;this.processing[xe]={id:xe,resolver:T,options:Q};var ye={message:{id:xe,method:I,params:ie},transfer:Q&&Q.transfer};this.terminated?T.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ye.message,ye.transfer):this.requestQueue.push(ye);var Ce=this;return T.promise.catch(function(fe){if(fe instanceof O.CancellationError||fe instanceof O.TimeoutError)return delete Ce.processing[xe],Ce.terminateAndNotify(!0).then(function(){throw fe},function(Ke){throw Ke});throw fe})},At.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},At.prototype.terminate=function(I,ie){var T=this;if(I){for(var Q in this.processing)this.processing[Q]!==void 0&&this.processing[Q].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof ie=="function"&&(this.terminationHandler=ie),this.busy())this.terminating=!0;else{var xe=function(fe){if(T.terminated=!0,T.cleaning=!1,T.worker!=null&&T.worker.removeAllListeners&&T.worker.removeAllListeners("message"),T.worker=null,T.terminating=!1,T.terminationHandler)T.terminationHandler(fe,T);else if(fe)throw fe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){xe(new Error("worker already killed!"));return}var ye=setTimeout(function(){T.worker&&T.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ye),T.worker&&(T.worker.killed=!0),xe()}),this.worker.ready?this.worker.send(ve):this.requestQueue.push({message:ve}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");xe()}},At.prototype.terminateAndNotify=function(I,ie){var T=O.defer();return ie&&T.promise.timeout(ie),this.terminate(I,function(Q,xe){Q?T.reject(Q):T.resolve(xe)}),T.promise},j.exports=At,j.exports._tryRequireWorkerThreads=k,j.exports._setupProcessWorker=qe,j.exports._setupBrowserWorker=de,j.exports._setupWorkerThreadWorker=Be,j.exports.ensureWorkerThreads=L,j.exports}var ge,z;function ue(){if(z)return ge;z=1;var P=65535;ge=O;function O(){this.ports=Object.create(null),this.length=0}return O.prototype.nextAvailableStartingAt=function(A){for(;this.ports[A]===!0;)A++;if(A>=P)throw new Error("WorkerPool debug port limit reached: "+A+">= "+P);return this.ports[A]=!0,this.length++,A},O.prototype.releasePort=function(A){delete this.ports[A],this.length--},ge}var te,f;function b(){if(f)return te;f=1;var P=c(),O=P.Promise,A=ne(),C=n,V=ue(),we=new V;function K(k,S){typeof k=="string"?this.script=k||null:(this.script=null,S=k),this.workers=[],this.tasks=[],S=S||{},this.forkArgs=Object.freeze(S.forkArgs||[]),this.forkOpts=Object.freeze(S.forkOpts||{}),this.workerOpts=Object.freeze(S.workerOpts||{}),this.workerThreadOpts=Object.freeze(S.workerThreadOpts||{}),this.debugPortStart=S.debugPortStart||43210,this.nodeWorker=S.nodeWorker,this.workerType=S.workerType||S.nodeWorker||"auto",this.maxQueueSize=S.maxQueueSize||1/0,this.workerTerminateTimeout=S.workerTerminateTimeout||1e3,this.onCreateWorker=S.onCreateWorker||function(){return null},this.onTerminateWorker=S.onTerminateWorker||function(){return null},this.emitStdStreams=S.emitStdStreams||!1,S&&"maxWorkers"in S?(Se(S.maxWorkers),this.maxWorkers=S.maxWorkers):this.maxWorkers=Math.max((C.cpus||4)-1,1),S&&"minWorkers"in S&&(S.minWorkers==="max"?this.minWorkers=this.maxWorkers:(ve(S.minWorkers),this.minWorkers=S.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&A.ensureWorkerThreads()}K.prototype.exec=function(k,S,ee){if(S&&!Array.isArray(S))throw new TypeError('Array expected as argument "params"');if(typeof k=="string"){var de=O.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Be=this.tasks,qe={method:k,params:S,resolver:de,timeout:null,options:ee};Be.push(qe);var pt=de.promise.timeout;return de.promise.timeout=function(at){return Be.indexOf(qe)!==-1?(qe.timeout=at,de.promise):pt.call(de.promise,at)},this._next(),de.promise}else{if(typeof k=="function")return this.exec("run",[String(k),S],ee);throw new TypeError('Function or string expected as argument "method"')}},K.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var k=this;return this.exec("methods").then(function(S){var ee={};return S.forEach(function(de){ee[de]=function(){return k.exec(de,Array.prototype.slice.call(arguments))}}),ee})},K.prototype._next=function(){if(this.tasks.length>0){var k=this._getWorker();if(k){var S=this,ee=this.tasks.shift();if(ee.resolver.promise.pending){var de=k.exec(ee.method,ee.params,ee.resolver,ee.options).then(S._boundNext).catch(function(){if(k.terminated)return S._removeWorker(k)}).then(function(){S._next()});typeof ee.timeout=="number"&&de.timeout(ee.timeout)}else S._next()}}},K.prototype._getWorker=function(){for(var k=this.workers,S=0;S<k.length;S++){var ee=k[S];if(ee.busy()===!1)return ee}return k.length<this.maxWorkers?(ee=this._createWorkerHandler(),k.push(ee),ee):null},K.prototype._removeWorker=function(k){var S=this;return we.releasePort(k.debugPort),this._removeWorkerFromList(k),this._ensureMinWorkers(),new O(function(ee,de){k.terminate(!1,function(Be){S.onTerminateWorker({forkArgs:k.forkArgs,forkOpts:k.forkOpts,workerThreadOpts:k.workerThreadOpts,script:k.script}),Be?de(Be):ee(k)})})},K.prototype._removeWorkerFromList=function(k){var S=this.workers.indexOf(k);S!==-1&&this.workers.splice(S,1)},K.prototype.terminate=function(k,S){var ee=this;this.tasks.forEach(function(rt){rt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var de=function(at){we.releasePort(at.debugPort),this._removeWorkerFromList(at)},Be=de.bind(this),qe=[],pt=this.workers.slice();return pt.forEach(function(rt){var at=rt.terminateAndNotify(k,S).then(Be).always(function(){ee.onTerminateWorker({forkArgs:rt.forkArgs,forkOpts:rt.forkOpts,workerThreadOpts:rt.workerThreadOpts,script:rt.script})});qe.push(at)}),O.all(qe)},K.prototype.stats=function(){var k=this.workers.length,S=this.workers.filter(function(ee){return ee.busy()}).length;return{totalWorkers:k,busyWorkers:S,idleWorkers:k-S,pendingTasks:this.tasks.length,activeTasks:S}},K.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var k=this.workers.length;k<this.minWorkers;k++)this.workers.push(this._createWorkerHandler())},K.prototype._createWorkerHandler=function(){var k=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new A(k.script||this.script,{forkArgs:k.forkArgs||this.forkArgs,forkOpts:k.forkOpts||this.forkOpts,workerOpts:k.workerOpts||this.workerOpts,workerThreadOpts:k.workerThreadOpts||this.workerThreadOpts,debugPort:we.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Se(k){if(!L(k)||!be(k)||k<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function ve(k){if(!L(k)||!be(k)||k<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function L(k){return typeof k=="number"}function be(k){return Math.round(k)==k}return te=K,te}var N={},Z,Ee;function le(){if(Ee)return Z;Ee=1;function P(O,A){this.message=O,this.transfer=A}return Z=P,Z}var _t;function Gt(){return _t||(_t=1,function(P){var O=le(),A="__workerpool-terminate__",C={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")C.on=function(L,be){addEventListener(L,function(k){be(k.data)})},C.send=function(L,be){be?postMessage(L,be):postMessage(L)};else if(typeof process<"u"){var V;try{V=Kt}catch(L){if(!($(L)==="object"&&L!==null&&L.code==="MODULE_NOT_FOUND"))throw L}if(V&&V.parentPort!==null){var we=V.parentPort;C.send=we.postMessage.bind(we),C.on=we.on.bind(we),C.exit=process.exit.bind(process)}else C.on=process.on.bind(process),C.send=function(L){process.send(L)},C.on("disconnect",function(){process.exit(1)}),C.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function K(L){return Object.getOwnPropertyNames(L).reduce(function(be,k){return Object.defineProperty(be,k,{value:L[k],enumerable:!0})},{})}function Se(L){return L&&typeof L.then=="function"&&typeof L.catch=="function"}C.methods={},C.methods.run=function(be,k){var S=new Function("return ("+be+").apply(null, arguments);");return S.apply(S,k)},C.methods.methods=function(){return Object.keys(C.methods)},C.terminationHandler=void 0,C.cleanupAndExit=function(L){var be=function(){C.exit(L)};if(!C.terminationHandler)return be();var k=C.terminationHandler(L);Se(k)?k.then(be,be):be()};var ve=null;C.on("message",function(L){if(L===A)return C.cleanupAndExit(0);try{var be=C.methods[L.method];if(be){ve=L.id;var k=be.apply(be,L.params);Se(k)?k.then(function(S){S instanceof O?C.send({id:L.id,result:S.message,error:null},S.transfer):C.send({id:L.id,result:S,error:null}),ve=null}).catch(function(S){C.send({id:L.id,result:null,error:K(S)}),ve=null}):(k instanceof O?C.send({id:L.id,result:k.message,error:null},k.transfer):C.send({id:L.id,result:k,error:null}),ve=null)}else throw new Error('Unknown method "'+L.method+'"')}catch(S){C.send({id:L.id,result:null,error:K(S)})}}),C.register=function(L,be){if(L)for(var k in L)L.hasOwnProperty(k)&&(C.methods[k]=L[k]);be&&(C.terminationHandler=be.onTerminate),C.send("ready")},C.emit=function(L){if(ve){if(L instanceof O){C.send({id:ve,isEvent:!0,payload:L.message},L.transfer);return}C.send({id:ve,isEvent:!0,payload:L})}},P.add=C.register,P.emit=C.emit}(N)),N}var ze=n.platform,kt=n.isMainThread,Ti=n.cpus;function tt(P,O){var A=b();return new A(P,O)}var Ot=i.pool=tt;function gr(P,O){var A=Gt();A.add(P,O)}var lt=i.worker=gr;function Me(P){var O=Gt();O.emit(P)}var Ur=i.workerEmit=Me,Oi=c(),Ue=Oi.Promise,Ai=i.Promise=Ue,Ci=i.Transfer=le(),Mi=i.platform=ze,Di=i.isMainThread=kt,Fi=i.cpus=Ti;r.Promise=Ai,r.Transfer=Ci,r.cpus=Fi,r.default=i,r.isMainThread=Di,r.platform=Mi,r.pool=Ot,r.worker=lt,r.workerEmit=Ur,Object.defineProperty(r,"__esModule",{value:!0})})})(ps,ps.exports);var Oo=ps.exports,ms={exports:{}};(function(e,t){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof fs<"u"&&fs,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(a){var l=typeof n<"u"&&n||typeof self<"u"&&self||typeof l<"u"&&l,c={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function d(f){return f&&DataView.prototype.isPrototypeOf(f)}if(c.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],p=ArrayBuffer.isView||function(f){return f&&m.indexOf(Object.prototype.toString.call(f))>-1};function _(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function y(f){return typeof f!="string"&&(f=String(f)),f}function E(f){var b={next:function(){var N=f.shift();return{done:N===void 0,value:N}}};return c.iterable&&(b[Symbol.iterator]=function(){return b}),b}function x(f){this.map={},f instanceof x?f.forEach(function(b,N){this.append(N,b)},this):Array.isArray(f)?f.forEach(function(b){this.append(b[0],b[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(b){this.append(b,f[b])},this)}x.prototype.append=function(f,b){f=_(f),b=y(b);var N=this.map[f];this.map[f]=N?N+", "+b:b},x.prototype.delete=function(f){delete this.map[_(f)]},x.prototype.get=function(f){return f=_(f),this.has(f)?this.map[f]:null},x.prototype.has=function(f){return this.map.hasOwnProperty(_(f))},x.prototype.set=function(f,b){this.map[_(f)]=y(b)},x.prototype.forEach=function(f,b){for(var N in this.map)this.map.hasOwnProperty(N)&&f.call(b,this.map[N],N,this)},x.prototype.keys=function(){var f=[];return this.forEach(function(b,N){f.push(N)}),E(f)},x.prototype.values=function(){var f=[];return this.forEach(function(b){f.push(b)}),E(f)},x.prototype.entries=function(){var f=[];return this.forEach(function(b,N){f.push([N,b])}),E(f)},c.iterable&&(x.prototype[Symbol.iterator]=x.prototype.entries);function $(f){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}function U(f){return new Promise(function(b,N){f.onload=function(){b(f.result)},f.onerror=function(){N(f.error)}})}function j(f){var b=new FileReader,N=U(b);return b.readAsArrayBuffer(f),N}function W(f){var b=new FileReader,N=U(b);return b.readAsText(f),N}function oe(f){for(var b=new Uint8Array(f),N=new Array(b.length),Z=0;Z<b.length;Z++)N[Z]=String.fromCharCode(b[Z]);return N.join("")}function re(f){if(f.slice)return f.slice(0);var b=new Uint8Array(f.byteLength);return b.set(new Uint8Array(f)),b.buffer}function $e(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:c.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:c.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():c.arrayBuffer&&c.blob&&d(f)?(this._bodyArrayBuffer=re(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||p(f))?this._bodyArrayBuffer=re(f):this._bodyText=f=Object.prototype.toString.call(f):this._bodyText="",this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var f=$(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=$(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(j)}),this.text=function(){var f=$(this);if(f)return f;if(this._bodyBlob)return W(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(oe(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(ne)}),this.json=function(){return this.text().then(JSON.parse)},this}var B=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function he(f){var b=f.toUpperCase();return B.indexOf(b)>-1?b:f}function X(f,b){if(!(this instanceof X))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');b=b||{};var N=b.body;if(f instanceof X){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,b.headers||(this.headers=new x(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!N&&f._bodyInit!=null&&(N=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new x(b.headers)),this.method=he(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&N)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(N),(this.method==="GET"||this.method==="HEAD")&&(b.cache==="no-store"||b.cache==="no-cache")){var Z=/([?&])_=[^&]*/;if(Z.test(this.url))this.url=this.url.replace(Z,"$1_="+new Date().getTime());else{var Ee=/\?/;this.url+=(Ee.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}X.prototype.clone=function(){return new X(this,{body:this._bodyInit})};function ne(f){var b=new FormData;return f.trim().split("&").forEach(function(N){if(N){var Z=N.split("="),Ee=Z.shift().replace(/\+/g," "),le=Z.join("=").replace(/\+/g," ");b.append(decodeURIComponent(Ee),decodeURIComponent(le))}}),b}function ge(f){var b=new x,N=f.replace(/\r?\n[\t ]+/g," ");return N.split("\r").map(function(Z){return Z.indexOf(`
`)===0?Z.substr(1,Z.length):Z}).forEach(function(Z){var Ee=Z.split(":"),le=Ee.shift().trim();if(le){var _t=Ee.join(":").trim();b.append(le,_t)}}),b}$e.call(X.prototype);function z(f,b){if(!(this instanceof z))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');b||(b={}),this.type="default",this.status=b.status===void 0?200:b.status,this.ok=this.status>=200&&this.status<300,this.statusText=b.statusText===void 0?"":""+b.statusText,this.headers=new x(b.headers),this.url=b.url||"",this._initBody(f)}$e.call(z.prototype),z.prototype.clone=function(){return new z(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new x(this.headers),url:this.url})},z.error=function(){var f=new z(null,{status:0,statusText:""});return f.type="error",f};var ue=[301,302,303,307,308];z.redirect=function(f,b){if(ue.indexOf(b)===-1)throw new RangeError("Invalid status code");return new z(null,{status:b,headers:{location:f}})},a.DOMException=l.DOMException;try{new a.DOMException}catch{a.DOMException=function(b,N){this.message=b,this.name=N;var Z=Error(b);this.stack=Z.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function te(f,b){return new Promise(function(N,Z){var Ee=new X(f,b);if(Ee.signal&&Ee.signal.aborted)return Z(new a.DOMException("Aborted","AbortError"));var le=new XMLHttpRequest;function _t(){le.abort()}le.onload=function(){var ze={status:le.status,statusText:le.statusText,headers:ge(le.getAllResponseHeaders()||"")};ze.url="responseURL"in le?le.responseURL:ze.headers.get("X-Request-URL");var kt="response"in le?le.response:le.responseText;setTimeout(function(){N(new z(kt,ze))},0)},le.onerror=function(){setTimeout(function(){Z(new TypeError("Network request failed"))},0)},le.ontimeout=function(){setTimeout(function(){Z(new TypeError("Network request failed"))},0)},le.onabort=function(){setTimeout(function(){Z(new a.DOMException("Aborted","AbortError"))},0)};function Gt(ze){try{return ze===""&&l.location.href?l.location.href:ze}catch{return ze}}le.open(Ee.method,Gt(Ee.url),!0),Ee.credentials==="include"?le.withCredentials=!0:Ee.credentials==="omit"&&(le.withCredentials=!1),"responseType"in le&&(c.blob?le.responseType="blob":c.arrayBuffer&&Ee.headers.get("Content-Type")&&Ee.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(le.responseType="arraybuffer")),b&&typeof b.headers=="object"&&!(b.headers instanceof x)?Object.getOwnPropertyNames(b.headers).forEach(function(ze){le.setRequestHeader(ze,y(b.headers[ze]))}):Ee.headers.forEach(function(ze,kt){le.setRequestHeader(kt,ze)}),Ee.signal&&(Ee.signal.addEventListener("abort",_t),le.onreadystatechange=function(){le.readyState===4&&Ee.signal.removeEventListener("abort",_t)}),le.send(typeof Ee._bodyInit>"u"?null:Ee._bodyInit)})}return te.polyfill=!0,l.fetch||(l.fetch=te,l.Headers=x,l.Request=X,l.Response=z),a.Headers=x,a.Request=X,a.Response=z,a.fetch=te,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;t=s.fetch,t.default=s.fetch,t.fetch=s.fetch,t.Headers=s.Headers,t.Request=s.Request,t.Response=s.Response,e.exports=t})(ms,ms.exports);var Ao=ms.exports;const Co=Po(Ao);var Mo={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Do=`\r
`,Fo="\uFEFF",ui=e=>Object.assign({},Mo,e);class Lo extends Error{constructor(t){super(t),this.name="CsvGenerationError"}}let Ro=class extends Error{constructor(t){super(t),this.name="EmptyHeadersError"}};class jo extends Error{constructor(t){super(t),this.name="CsvDownloadEnvironmentError"}}let Bo=class extends Error{constructor(t){super(t),this.name="UnsupportedDataFormatError"}};var pr=e=>e,st=e=>e,kr=pr,di=pr,ir=pr,un=pr,dn=pr,No=function(e,t){return t=='"'&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e},Uo=e=>un(typeof e=="object"?e.key:e),Ho=e=>dn(typeof e=="object"?e.displayLabel:e),Wo=(e,...t)=>t.reduce((r,i)=>i(r),e),Io=e=>t=>e.useBom?di(st(t)+Fo):t,Vo=e=>t=>e.showTitle?As(di(st(t)+e.title))(ir("")):t,As=e=>t=>di(st(e)+st(t)+Do),In=e=>(t,r)=>qo(e)(ir(st(t)+st(r))),qo=e=>t=>pr(st(t)+e.fieldSeparator),zo=(e,t)=>r=>{if(!e.showColumnHeaders)return r;if(t.length<1)throw new Ro("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=ir("");for(let s=0;s<t.length;s++){const n=Ho(t[s]);i=In(e)(i,Vn(e,st(n)))}return i=ir(st(i).slice(0,-1)),As(r)(i)},Yo=(e,t,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=ir("");for(let l=0;l<t.length;l++){const c=Uo(t[l]),d=r[n][st(c)];a=In(e)(a,Vn(e,d))}a=ir(st(a).slice(0,-1)),s=As(s)(a)}return s},Go=e=>+e===e&&(!isFinite(e)||!!(e%1)),Xo=(e,t)=>{if(Go(t)){if(e.decimalSeparator==="locale")return kr(t.toLocaleString());if(e.decimalSeparator)return kr(t.toString().replace(".",e.decimalSeparator))}return kr(t.toString())},Jr=(e,t)=>{let r=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf(`
`)>-1||t.indexOf("\r")>-1)&&(r=e.quoteCharacter+No(t,e.quoteCharacter)+e.quoteCharacter),kr(r)},Qo=(e,t)=>{const r=t?"true":"false";return kr(e.boolDisplay[r])},Ko=(e,t)=>typeof t>"u"&&e.replaceUndefinedWith!==void 0?Jr(e,e.replaceUndefinedWith+""):t===null?Jr(e,"null"):Jr(e,""),Vn=(e,t)=>{if(typeof t=="number")return Xo(e,t);if(typeof t=="string")return Jr(e,t);if(typeof t=="boolean"&&e.boolDisplay)return Qo(e,t);if(t===null||typeof t>"u")return Ko(e,t);throw new Bo(`
    typeof ${typeof t} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Zo=e=>t=>{const r=ui(e),i=r.useKeysAsHeaders?Object.keys(t[0]):r.columnHeaders;let s=Wo(di(""),Io(r),Vo(r),zo(r,i),Yo(r,i,t));if(st(s).length<1)throw new Lo("Output is empty. Is your data formatted correctly?");return s},Jo=e=>t=>{const r=ui(e),i=st(t),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},el=e=>t=>{if(!window)throw new jo("Downloading only supported in a browser environment.");const r=Jo(e)(t),i=ui(e),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function De(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ht(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function fn(e,t){const r=De(e);return isNaN(t)?ht(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function qn(e,t){const r=De(e);if(isNaN(t))return ht(e,NaN);if(!t)return r;const i=r.getDate(),s=ht(e,r.getTime());s.setMonth(r.getMonth()+t+1,0);const n=s.getDate();return i>=n?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}function tl(e,t){const r=+De(e);return ht(e,r+t)}const zn=6048e5,rl=864e5,il=36e5;function sl(e,t){return tl(e,t*il)}let nl={};function Fr(){return nl}function sr(e,t){var l,c,d,m;const r=Fr(),i=(t==null?void 0:t.weekStartsOn)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??r.weekStartsOn??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,s=De(e),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ti(e){return sr(e,{weekStartsOn:1})}function Yn(e){const t=De(e),r=t.getFullYear(),i=ht(e,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=ti(i),n=ht(e,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=ti(n);return t.getTime()>=s.getTime()?r+1:t.getTime()>=a.getTime()?r:r-1}function gs(e){const t=De(e);return t.setHours(0,0,0,0),t}function pn(e){const t=De(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function al(e,t){const r=gs(e),i=gs(t),s=+r-pn(r),n=+i-pn(i);return Math.round((s-n)/rl)}function ol(e){const t=Yn(e),r=ht(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),ti(r)}function ll(e,t){return qn(e,t*12)}function cl(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Gn(e){if(!cl(e)&&typeof e!="number")return!1;const t=De(e);return!isNaN(Number(t))}function hl(e){const t=De(e);return t.setHours(23,59,59,999),t}function ul(e){const t=De(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function dl(e){const t=De(e);return t.setDate(1),t.setHours(0,0,0,0),t}function fl(e){const t=De(e),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function Xn(e){const t=De(e),r=ht(e,0);return r.setFullYear(t.getFullYear(),0,1),r.setHours(0,0,0,0),r}function pl(e){const t=De(e);return t.setMinutes(59,59,999),t}function ml(e,t){var l,c;const r=Fr(),i=r.weekStartsOn??((c=(l=r.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??0,s=De(e),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const gl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},vl=(e,t,r)=>{let i;const s=gl[e];return typeof s=="string"?i=s:t===1?i=s.one:i=s.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ns(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const bl={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wl={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xl={date:ns({formats:bl,defaultWidth:"full"}),time:ns({formats:yl,defaultWidth:"full"}),dateTime:ns({formats:wl,defaultWidth:"full"})},_l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},kl=(e,t,r,i)=>_l[e];function wr(e){return(t,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=e.formattingValues[l]||e.formattingValues[a]}else{const a=e.defaultWidth,l=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[l]||e.values[a]}const n=e.argumentCallback?e.argumentCallback(t):t;return s[n]}}const $l={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Pl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},El={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Sl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ol={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Al=(e,t)=>{const r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Cl={ordinalNumber:Al,era:wr({values:$l,defaultWidth:"wide"}),quarter:wr({values:Pl,defaultWidth:"wide",argumentCallback:e=>e-1}),month:wr({values:El,defaultWidth:"wide"}),day:wr({values:Sl,defaultWidth:"wide"}),dayPeriod:wr({values:Tl,defaultWidth:"wide",formattingValues:Ol,defaultFormattingWidth:"wide"})};function xr(e){return(t,r={})=>{const i=r.width,s=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=t.match(s);if(!n)return null;const a=n[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?Dl(l,p=>p.test(a)):Ml(l,p=>p.test(a));let d;d=e.valueCallback?e.valueCallback(c):c,d=r.valueCallback?r.valueCallback(d):d;const m=t.slice(a.length);return{value:d,rest:m}}}function Ml(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function Dl(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function Fl(e){return(t,r={})=>{const i=t.match(e.matchPattern);if(!i)return null;const s=i[0],n=t.match(e.parsePattern);if(!n)return null;let a=e.valueCallback?e.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=t.slice(s.length);return{value:a,rest:l}}}const Ll=/^(\d+)(th|st|nd|rd)?/i,Rl=/\d+/i,jl={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Bl={any:[/^b/i,/^(a|c)/i]},Nl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ul={any:[/1/i,/2/i,/3/i,/4/i]},Hl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Il={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Vl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ql={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zl={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Yl={ordinalNumber:Fl({matchPattern:Ll,parsePattern:Rl,valueCallback:e=>parseInt(e,10)}),era:xr({matchPatterns:jl,defaultMatchWidth:"wide",parsePatterns:Bl,defaultParseWidth:"any"}),quarter:xr({matchPatterns:Nl,defaultMatchWidth:"wide",parsePatterns:Ul,defaultParseWidth:"any",valueCallback:e=>e+1}),month:xr({matchPatterns:Hl,defaultMatchWidth:"wide",parsePatterns:Wl,defaultParseWidth:"any"}),day:xr({matchPatterns:Il,defaultMatchWidth:"wide",parsePatterns:Vl,defaultParseWidth:"any"}),dayPeriod:xr({matchPatterns:ql,defaultMatchWidth:"any",parsePatterns:zl,defaultParseWidth:"any"})},Gl={code:"en-US",formatDistance:vl,formatLong:xl,formatRelative:kl,localize:Cl,match:Yl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Xl(e){const t=De(e);return al(t,Xn(t))+1}function Ql(e){const t=De(e),r=+ti(t)-+ol(t);return Math.round(r/zn)+1}function Qn(e,t){var m,p,_,y;const r=De(e),i=r.getFullYear(),s=Fr(),n=(t==null?void 0:t.firstWeekContainsDate)??((p=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((y=(_=s.locale)==null?void 0:_.options)==null?void 0:y.firstWeekContainsDate)??1,a=ht(e,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=sr(a,t),c=ht(e,0);c.setFullYear(i,0,n),c.setHours(0,0,0,0);const d=sr(c,t);return r.getTime()>=l.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function Kl(e,t){var l,c,d,m;const r=Fr(),i=(t==null?void 0:t.firstWeekContainsDate)??((c=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,s=Qn(e,t),n=ht(e,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),sr(n,t)}function Zl(e,t){const r=De(e),i=+sr(r,t)-+Kl(r,t);return Math.round(i/zn)+1}function me(e,t){const r=e<0?"-":"",i=Math.abs(e).toString().padStart(t,"0");return r+i}const Mt={y(e,t){const r=e.getFullYear(),i=r>0?r:1-r;return me(t==="yy"?i%100:i,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):me(r+1,2)},d(e,t){return me(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return me(e.getHours()%12||12,t.length)},H(e,t){return me(e.getHours(),t.length)},m(e,t){return me(e.getMinutes(),t.length)},s(e,t){return me(e.getSeconds(),t.length)},S(e,t){const r=t.length,i=e.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return me(s,t.length)}},Zt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mn={G:function(e,t,r){const i=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const i=e.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Mt.y(e,t)},Y:function(e,t,r,i){const s=Qn(e,i),n=s>0?s:1-s;if(t==="YY"){const a=n%100;return me(a,2)}return t==="Yo"?r.ordinalNumber(n,{unit:"year"}):me(n,t.length)},R:function(e,t){const r=Yn(e);return me(r,t.length)},u:function(e,t){const r=e.getFullYear();return me(r,t.length)},Q:function(e,t,r){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return me(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,r){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return me(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,r){const i=e.getMonth();switch(t){case"M":case"MM":return Mt.M(e,t);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,r){const i=e.getMonth();switch(t){case"L":return String(i+1);case"LL":return me(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){const s=Zl(e,i);return t==="wo"?r.ordinalNumber(s,{unit:"week"}):me(s,t.length)},I:function(e,t,r){const i=Ql(e);return t==="Io"?r.ordinalNumber(i,{unit:"week"}):me(i,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Mt.d(e,t)},D:function(e,t,r){const i=Xl(e);return t==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):me(i,t.length)},E:function(e,t,r){const i=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,r,i){const s=e.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return me(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,r,i){const s=e.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return me(n,t.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,r){const i=e.getDay(),s=i===0?7:i;switch(t){case"i":return String(s);case"ii":return me(s,t.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,r){const s=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,t,r){const i=e.getHours();let s;switch(i===12?s=Zt.noon:i===0?s=Zt.midnight:s=i/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,r){const i=e.getHours();let s;switch(i>=17?s=Zt.evening:i>=12?s=Zt.afternoon:i>=4?s=Zt.morning:s=Zt.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let i=e.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Mt.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Mt.H(e,t)},K:function(e,t,r){const i=e.getHours()%12;return t==="Ko"?r.ordinalNumber(i,{unit:"hour"}):me(i,t.length)},k:function(e,t,r){let i=e.getHours();return i===0&&(i=24),t==="ko"?r.ordinalNumber(i,{unit:"hour"}):me(i,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Mt.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Mt.s(e,t)},S:function(e,t){return Mt.S(e,t)},X:function(e,t,r){const i=e.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return vn(i);case"XXXX":case"XX":return Wt(i);case"XXXXX":case"XXX":default:return Wt(i,":")}},x:function(e,t,r){const i=e.getTimezoneOffset();switch(t){case"x":return vn(i);case"xxxx":case"xx":return Wt(i);case"xxxxx":case"xxx":default:return Wt(i,":")}},O:function(e,t,r){const i=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+gn(i,":");case"OOOO":default:return"GMT"+Wt(i,":")}},z:function(e,t,r){const i=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+gn(i,":");case"zzzz":default:return"GMT"+Wt(i,":")}},t:function(e,t,r){const i=Math.trunc(e.getTime()/1e3);return me(i,t.length)},T:function(e,t,r){const i=e.getTime();return me(i,t.length)}};function gn(e,t=""){const r=e>0?"-":"+",i=Math.abs(e),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+t+me(n,2)}function vn(e,t){return e%60===0?(e>0?"-":"+")+me(Math.abs(e)/60,2):Wt(e,t)}function Wt(e,t=""){const r=e>0?"-":"+",i=Math.abs(e),s=me(Math.trunc(i/60),2),n=me(i%60,2);return r+s+t+n}const bn=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Kn=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Jl=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return bn(e,t);let n;switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"});break}return n.replace("{{date}}",bn(i,t)).replace("{{time}}",Kn(s,t))},ec={p:Kn,P:Jl},tc=/^D+$/,rc=/^Y+$/,ic=["D","DD","YY","YYYY"];function sc(e){return tc.test(e)}function nc(e){return rc.test(e)}function ac(e,t,r){const i=oc(e,t,r);if(console.warn(i),ic.includes(e))throw new RangeError(i)}function oc(e,t,r){const i=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const lc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cc=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hc=/^'([^]*?)'?$/,uc=/''/g,dc=/[a-zA-Z]/;function Zn(e,t,r){var m,p,_,y;const i=Fr(),s=i.locale??Gl,n=i.firstWeekContainsDate??((p=(m=i.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,a=i.weekStartsOn??((y=(_=i.locale)==null?void 0:_.options)==null?void 0:y.weekStartsOn)??0,l=De(e);if(!Gn(l))throw new RangeError("Invalid time value");let c=t.match(cc).map(E=>{const x=E[0];if(x==="p"||x==="P"){const $=ec[x];return $(E,s.formatLong)}return E}).join("").match(lc).map(E=>{if(E==="''")return{isToken:!1,value:"'"};const x=E[0];if(x==="'")return{isToken:!1,value:fc(E)};if(mn[x])return{isToken:!0,value:E};if(x.match(dc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:E}});s.localize.preprocessor&&(c=s.localize.preprocessor(l,c));const d={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return c.map(E=>{if(!E.isToken)return E.value;const x=E.value;(nc(x)||sc(x))&&ac(x,t,String(e));const $=mn[x[0]];return $(l,x,s.localize,d)}).join("")}function fc(e){const t=e.match(hc);return t?t[1].replace(uc,"'"):e}function Cs(e,t){const r=De(e);if(!Gn(r))throw new RangeError("Invalid time value");const i=(t==null?void 0:t.format)??"extended",s=(t==null?void 0:t.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const c=me(r.getDate(),2),d=me(r.getMonth()+1,2);n=`${me(r.getFullYear(),4)}${a}${d}${a}${c}`}if(s!=="date"){const c=me(r.getHours(),2),d=me(r.getMinutes(),2),m=me(r.getSeconds(),2);n=`${n}${n===""?"":" "}${c}${l}${d}${l}${m}`}return n}function pc(e){const t=De(e);return t.setMinutes(0,0,0),t}var mc=Oo.pool({maxWorkers:6}),fi=mc,Lr=class{constructor(){this.pool=fi}},nt=class{constructor(e,t){this.parent=e,this._initial=t,this._listeners={},this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(e){this._value=this.validate(e),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(t=>t(this._value))}addListener(e,t){e in this._listeners&&delete this._listeners[e],this._listeners[e]=t}removeListener(e){e in this._listeners&&delete this._listeners[e]}clearAllListeners(){this._listeners={}}},gc=class extends nt{constructor(e,t){super(e,t),this.parent=e,this.framesByTimestamp=new Map,this.framesByMs=new Map,this.framesByIndex=new Map,this.localTimeline=[],this._onChangeListeners=new Map;const r=this.parent.frames[0].timestamp;this.frames=this.parent.frames.map((i,s)=>{const n=i.timestamp-r,a={...i,index:s,ms:n};return this.framesByIndex.set(s,a),this.framesByMs.set(a.ms,a),this.framesByTimestamp.set(a.timestamp,a),this.localTimeline.push(a.ms),a}),this._currentFrame=this.frames[0]}get duration(){return this.parent.duration}get frameCount(){return this.frames.length}set currentFrame(e){e.ms!==this._currentFrame.ms&&(this._currentFrame=e,this._onChangeListeners.forEach(t=>t(this._currentFrame)),this.parent.pixels=e.pixels)}get currentFrame(){return this._currentFrame}get nextFrame(){const t=this.currentFrame.index+1;if(t<=this.frameCount)return this.framesByIndex.get(t)}get nextFrameTimeoutDuration(){if(this.nextFrame!==void 0)return this.nextFrame.ms-this.currentFrame.ms}addChangeListener(e,t){this._onChangeListeners.set(e,t)}removeChangeListener(e){this._onChangeListeners.delete(e)}getNextFrameToMs(e){const t=this.localTimeline.find(r=>r>e);if(t!==void 0)return this.framesByMs.get(t)}getPreviousFrameToMs(e){const t=this.localTimeline.reverse().find(r=>r<e);if(t!==void 0)return this.framesByMs.get(t)}validate(e){return e<0?0:e<=this.duration?e:this.duration}afterSetEffect(e){if(e!==this.currentFrame.ms)if(this.localTimeline.includes(e)){const t=this.framesByMs.get(e);this.currentFrame.ms!==t.ms&&(this.currentFrame=t)}else{const t=this.getPreviousFrameToMs(e);t&&t.ms!==this.currentFrame.ms&&(this.currentFrame=t)}}setMs(e){this.value=e}setValueByPercent(e){const t=Math.min(Math.max(e,0),100),r=this.duration/100*t;this.value=Math.floor(r)}goToNextFrame(){this.nextFrame&&(this.value=this.nextFrame.ms)}static formatDuration(e){const t=e%1e3,r=(e-t)%(1e3*60);return[(e-t-r)/(1e3*60*60),r,t].join(":")}play(){this.timer=setInterval(()=>{this.goToNextFrame()},this.nextFrameTimeoutDuration)}pause(){clearInterval(this.timer)}stop(){clearInterval(this.timer),this.setMs(0)}},Jn=class extends nt{validate(e){return e}afterSetEffect(){}recalculateFromCursor(e){e&&(this.value=this._getValueAtCoordinate(e.x,e.y))}_getValueAtCoordinate(e,t){if(e===void 0||t===void 0)return;const r=e+t*this.parent.width;return this.parent.pixels[r]}},ea=class extends Lr{constructor(e,t,r,i,s,n,a,l,c,d,m){super(),this.frames=[],this.signature="unknown",this.version=-1,this.streamCount=-1,this.fileDataType=-1,this.unit=-1,this._isHover=!1,this.root=null,this._mounted=!1,this._onHover=void 0,this._onClick=void 0,this.group=e,this.id=this.formatId(t),this.url=t,this.thermalUrl=t,this.visibleUrl=m,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=r,this.height=i,this.timestamp=n,this.duration=a,this.min=l,this.max=c,this.frameCount=d,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const t=this.width,r=this.root.clientWidth,i=t/r,s=Math.round(e.offsetX*i),n=Math.round(e.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:n}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,t){const r=t*this.width+e;return this.pixels[r]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},vc=class{constructor(e){this.file=e}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(e="__thermal-data"){const t=ui({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",e)}),r=this.file.frames.map(s=>{const{pixels:n,...a}=s;return console.log(n),a}),i=Zo(t)(r);el(t)(i)}},pi=class{constructor(e){this.instance=e,this._mounted=!1}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},gt=class vs{static createCanvasContainer(){const t=document.createElement("div");return t.classList.add("thermalCanvasWrapper"),t.style.position="relative",t}static createCanvas(){const t=document.createElement("canvas");return t.classList.add("thermalCanvas"),t.style.padding="0px",t.style.margin="0px",t.style.objectFit="contain",t.style.width="100%",t.style.height="100%",t.style.objectPosition="top left",t}static createDateLayer(){const t=document.createElement("div");return t.classList.add("dateLayer"),t.style.margin="0px",t.style.padding="0px",t.style.position="absolute",t.style.top="0px",t.style.left="0%",t.style.width="100%",t.style.fontSize="small",t}static createDateLayerInner(){const t=document.createElement("div");return t.classList.add("dateLayerInner"),t.style.margin="0px",t.style.padding=".3rem 0rem",t.style.backgroundColor="black",t.style.color="white",t.style.borderRadius=".5rem .5rem 0 0",t.style.width="calc(100% + 4px )",t.style.position="absolute",t.style.top="0rem",t.style.left="-2px",t.style.opacity="0",t.style.transition="opacity .1s ease-in-out",t.style.textAlign="center",t}static createVisibleLayer(){const t=document.createElement("div");return t.classList.add("visibleLayer"),t.style.margin="0px",t.style.padding="0px",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t}static createVisibleImage(){const t=document.createElement("img");return t.classList.add("visibleLayerImage"),t.style.padding="0px",t.style.margin="0px",t.style.objectFit="contain",t.style.width="100%",t.style.height="100%",t.style.objectPosition="top left",t}static createListener(){const t=document.createElement("div");return t.classList.add("thermalListener"),t.style.margin="0px",t.style.padding="0px",t.style.height="100%",t.style.width="100%",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.cursor="pointer",t.setAttribute("id",Math.random().toString()),t}static createCursorLayerRoot(){const t=document.createElement("div");return t.classList.add("cursorLayerRoot"),t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.opacity="0",t.style.overflow="hidden",t.style.lineHeight="1rem",t}static createCursorLayerCenter(){const t=document.createElement("div");return t.classList.add("cursorLayerCenter"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.width="0px",t.style.height="0px",t}static createCursorLayerAxeBase(){const t=document.createElement("div");return t.classList.add("cursorLayerAxe"),t.style.backdropFilter="invert(100)",t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.content="",t}static createCursorLayerX(){const t=vs.createCursorLayerAxeBase();return t.classList.add("cursorLayerAxeX"),t.style.width="1px",t.style.height="20px",t.style.top="-10px",t}static createCursorLayerY(){const t=vs.createCursorLayerAxeBase();return t.classList.add("cursorLayerAxeY"),t.style.width="20px",t.style.height="1px",t.style.left="-10px",t}static createCursorLayerLabel(){const t=document.createElement("div");return t.classList.add("cursorLayerLabel"),t.style.position="absolute",t.style.padding="1px 3px",t.style.backgroundColor="rgba( 0,0,0,0.5 )",t.style.color="white",t.style.whiteSpace="nowrap",t.style.fontSize="small",t.style.borderRadius="5px",t}},ta=class extends pi{constructor(e,t){super(e),this._url=t,this.container=gt.createVisibleLayer(),this._url&&(this.image=gt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},ra=class extends pi{constructor(e){super(e),this.pool=fi,this._opacity=1,this.container=gt.createCanvasContainer(),this.canvas=gt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),t=await this.pool.exec(async(r,i,s,n,a,l)=>{const d=new OffscreenCanvas(s,n).getContext("2d"),m=i-r;for(let y=0;y<=s;y++)for(let E=0;E<=n;E++){const x=y+E*s;let $=a[x];$<r&&($=r),$>i&&($=i);const j=($-r)/m,W=Math.round(255*j),oe=l[W];d.fillStyle=oe,d.fillRect(y,E,1,1)}const p=d.getImageData(0,0,s,n);return await createImageBitmap(p)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(t,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},ia=class extends pi{constructor(e){super(e),this._show=!1,this._hover=!1,this.layerRoot=gt.createCursorLayerRoot(),this.center=gt.createCursorLayerCenter(),this.axisX=gt.createCursorLayerX(),this.axisY=gt.createCursorLayerY(),this.label=gt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,t,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${r.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},sa=class extends pi{constructor(e){super(e),this.container=gt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},bc=class extends ea{constructor(e,t){super(t,e.url,e.width,e.height,e.pixels,e.timestamp,e.duration,e.min,e.max,e.frameCount,e.visibleUrl),this.source=e,this.group=t}get dataType(){return this.source.fileDataType}getPixelsForHistogram(){return this.source.pixelsForHistogram}postInit(){return this.signature=this.source.signature,this.unit=this.source.unit,this.version=this.source.version,this.streamCount=this.source.streamCount,this.fileDataType=this.source.fileDataType,this.frames=this.source.frames,this.timeline=new gc(this,0),this.pixels=this.timeline.currentFrame.pixels,this.canvasLayer=new ra(this),this.visibleLayer=new ta(this,this.visibleUrl),this.cursorLayer=new ia(this),this.listenerLayer=new sa(this),this.cursorValue=new Jn(this,void 0),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(e){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const t=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(t)}}get unitHuman(){return this.unit===0?"none":this.unit===1?"intensity":this.unit===2?"°C":this.unit===3?"Kelvin":"unit not specified"}get dataTypeHuman(){return this.dataType===0?"Float16":this.dataType===1?"Float32":this.dataType===2?"Int16":"error parsing data type"}get export(){if(!this._export){const e=new vc(this);this._export=e}return this._export}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){this.export.thermalDataAsCsv()}},er=class extends Lr{constructor(e,t,r,i,s,n,a,l,c,d,m,p,_,y,E){super(),this.url=e,this.signature=t,this.version=r,this.streamCount=i,this.fileDataType=s,this.unit=n,this.width=a,this.height=l,this.timestamp=c,this.pixels=d,this.min=m,this.max=p,this.frameCount=_,this.frames=y,this.visibleUrl=E,this.fileName=this.url.substring(this.url.lastIndexOf("/")+1);let x=[];this.frames.forEach($=>{x=x.concat($.pixels)}),this.pixelsForHistogram=x,this.duration=this.frames.length===0?0:this.frames[this.frames.length-1].timestamp-this.frames[0].timestamp}static async fromUrl(e,t){try{return await bs.fromUrl(e,t)}catch{return null}}static async fromUrlWithErrors(e,t){return await bs.fromUrl(e,t)}createInstance(e){const t=new bc(this,e);return t.postInit(),t}},yc=class{constructor(e,t,r){this.url=e,this.blob=t,this.visibleUrl=r,this.isValidTimestamp=i=>Number.isInteger(i),this.isValidWidth=i=>Number.isInteger(i),this.isValidHeight=i=>Number.isInteger(i),this.isValidPixels=i=>i!==void 0&&i.length===this.width*this.height,this.isValidMin=i=>i!==void 0,this.isValidMax=i=>i!==void 0,this.isValidFrameCount=i=>Number.isInteger(i),this.isValidFrames=i=>i===void 0||this.frameCount===void 0?!1:i.length===this.frameCount,this.errors=[]}async init(){const e=await this.blob.arrayBuffer();this.data=new DataView(e);const t=e.slice(25);return this.frameSubset=t,this}async parse(){return await this.init(),await this.parseFile(),this.getThermalFile()}parseTimestamp(){const e=this.getTimestamp();this.isValidTimestamp(e)||this.logValidationError("timestamp",e),this.timestamp=e}parseWidth(){const e=this.getWidth();this.isValidWidth(e)||this.logValidationError("width",e),this.width=e}parseHeight(){const e=this.getHeight();this.isValidHeight(e)||this.logValidationError("height",e),this.height=e}async parsePixels(){const e=this.getPixels();this.pixels=e}parseMin(){const e=this.getMin();this.isValidMin(e)||this.logValidationError("min",e),this.min=e}parseMax(){const e=this.getMax();this.isValidMax(e)||this.logValidationError("max",e),this.max=e}parseFrameCount(){const e=this.getFrameCount();this.isValidFrameCount(e)||this.logValidationError("frameCount",e),this.frameCount=e}parseFrames(){const e=this.getFrames();this.isValidFrames(e)||this.logValidationError("frames",e.toString()),this.frames=e}logError(e){console.error(e),this.errors.push(e)}logValidationError(e,t){const r=`Invalid ${e} of ${this.url}: '${t.toString()}'`;this.logError(r)}getErrors(){return this.errors}encodeErrors(){return this.errors.join("+|+")}static decodeErrors(e){return e.split("+|+")}},Ge=class{static readDotnetTimestamp(e,t){const r=t.getBigInt64(e,!0),i=62135596800000n,s=10000n,n=24n*60n*60n*1000n*s,a=0x4000000000000000n,l=0x8000000000000000n;let d=r&0x3FFFFFFFFFFFFFFFn;r&l&&(d>a-n&&(d-=a),d<0&&(d+=n));const p=d/s-i;return Number(p)}static readFloat32(e,t){return t.getFloat32(e,!0)}static read8bNumber(e,t){return t.getUint8(e)}static readTemperatureArray(e,t,r,i,s){const n=t.buffer.slice(e);if(r===0){const a=new Uint16Array(n),l=Math.abs(i-s),c=65535;return[...a].map(d=>{const m=d/c;return i+l*m})}else if(r===1)return[...new Float32Array(n)];return[]}},wc=class{constructor(e,t,r,i,s,n,a){this.arrayBuffer=e,this.width=t,this.height=r,this.dataType=i,this.frameCount=s,this.frameByteSize=n,this.pixelByteSize=a}parseFrame(e){if(!Number.isInteger(e))throw new Error(`The frame index ${e} is invalid!`);const t=e*this.frameByteSize,r=t+this.frameByteSize,i=this.arrayBuffer.slice(t,r),s=new DataView(i),n=Ge.readFloat32(8,s),a=Ge.readFloat32(12,s);return{timestamp:Ge.readDotnetTimestamp(0,s),min:n,max:a,modeMinInKelvin:Ge.readFloat32(16,s),modeMaxInKelvin:Ge.readFloat32(20,s),emissivity:Ge.readFloat32(24,s),reflectedTemperaatureInKelvin:Ge.readFloat32(28,s),distance:Ge.readFloat32(32,s),atmosphereTemperatureInKelvin:Ge.readFloat32(36,s),relativeHumidity:Ge.readFloat32(40,s),tau:Ge.readFloat32(44,s),windowTemperature:Ge.readFloat32(48,s),windowTransmissivity:Ge.readFloat32(52,s),isTauSet:Ge.read8bNumber(53,s),pixels:Ge.readTemperatureArray(57,s,this.dataType,n,a)}}},xc=class extends yc{constructor(){super(...arguments),this.isValidSignature=e=>e==="LRC\0",this.isValidVersion=e=>e===2,this.isStreamCountValid=e=>e===1,this.isDataTypeValid=e=>e===void 0?!1:[0,1,2].includes(e),this.isValidUnit=e=>e===2}async parseFile(){await this.parseSignature(),this.parseVersion(),this.parseDataType(),this.parseStreamCount(),this.parseTimestamp(),this.parseUnit(),this.parseWidth(),this.parseHeight(),this.parseFrameCount(),this.parseFrames(),this.parseMin(),this.parseMax(),await this.parsePixels()}async parseSignature(){const e=await this.readString(0,4);this.isValidSignature(e)||this.logValidationError("signature",e),this._signature=e}parseVersion(){const e=this.read8bNumber(4);this.isValidVersion(e)||this.logValidationError("version",e),this._version=e}parseStreamCount(){const e=this.read8bNumber(14);this.isStreamCountValid(e)||this.logValidationError("streamCount",e),this._streamCount=e}parseDataType(){const e=this.read8bNumber(15);this.isDataTypeValid(e)||this.logValidationError("fileDataType",e),this._fileDataType=e,this._pixelByteLength=e===0?2:4}get pixelByteLength(){return this._pixelByteLength}parseUnit(){const e=this.read8bNumber(16);this.isValidUnit(e)||this.logValidationError("unit",e),this._unit=e}getFrameCount(){return this.getNumberOfFrames()}getMin(){return this.frames.reduce((e,t)=>t.min<e?t.min:e,1/0)}getMax(){return this.frames.reduce((e,t)=>t.max>e?t.max:e,-1/0)}getWidth(){return this.read16bNumber(17)}getHeight(){return this.read16bNumber(19)}getTimestamp(){return Ge.readDotnetTimestamp(5,this.data)}getFrameSize(){if(this._fileDataType===void 0||this.width===void 0||this.height===void 0||this.pixelByteLength===void 0)throw new Error("Trying to read frame size before necessary attributes are known");return 57+this.width*this.height*this.pixelByteLength}getNumberOfFrames(){const e=this.getFrameSize();return this.frameSubset.byteLength/e}getFrames(){const e=[],t=new wc(this.frameSubset,this.width,this.height,this._fileDataType,this.frameCount,this.getFrameSize(),this.pixelByteLength);for(let r=0;r<this.frameCount;r++)e.push(t.parseFrame(r));return e}async readTemperatureArray(e){const t=(await this.blob.arrayBuffer()).slice(e,e+this.width*this.height*this.pixelByteLength);if(this._fileDataType===0){const r=new Uint16Array(t),i=Math.abs(this.min-this.max),s=65535;return[...r].map(n=>{const a=n/s;return this.min+i*a})}else if(this._fileDataType===1)return[...new Float32Array(t)];return[]}getPixels(){return this.frames&&this.frames.length>0?this.frames[0].pixels:[]}isValid(){return this.errors.length===0&&this.isValidSignature(this._signature)&&this.isStreamCountValid(this._streamCount)&&this.isDataTypeValid(this._fileDataType)&&this.isValidVersion(this._version)&&this.isValidUnit(this._unit)&&this.isValidTimestamp(this.timestamp)&&this.isValidWidth(this.width)&&this.isValidHeight(this.height)&&this.isValidPixels(this.pixels)&&this.isValidMin(this.min)&&this.isValidMax(this.max)&&this.isValidFrameCount(this.frameCount)}getThermalFile(){if(!this.isValid())throw new Error(this.encodeErrors());return new er(this.url,this._signature,this._version,this._streamCount,this._fileDataType,this._unit,this.width,this.height,this.timestamp,this.pixels,this.min,this.max,this.frameCount,this.frames,this.visibleUrl)}async readString(e,t){return await this.blob.slice(e,t).text()}read16bNumber(e){return this.data.getUint16(e,!0)}read8bNumber(e){return this.data.getUint8(e)}},bs=class ys{constructor(){}static async fromUrl(t,r){const i=new ys;return i.thermalUrl=t,i.visibleUrl=r,await i.loadFromUrl()}async loadFromUrl(){const t=await Co(this.thermalUrl);if(this.blob=await t.blob(),t.status!==200)throw new Error(`There was an error loading '${this.thermalUrl}'`);return this.parser=this.getParserInstance(),await this.parser.parse()}static async fromFile(t){const r=new ys;return r.thermalUrl=t.name,r.blob=t,await r.loadFromBlob()}async loadFromBlob(){return this.parser=this.getParserInstance(),await this.parser.parse()}getParserInstance(){if(this.thermalUrl.endsWith(".lrc"))return new xc(this.thermalUrl,this.blob,this.visibleUrl);throw new Error("No parser found!")}},_c=class extends nt{validate(e){return Math.min(Math.max(0,e),1)}afterSetEffect(e){this.parent.forEveryInstance(t=>t.recieveOpacity(e))}imposeOpacity(e){return this.value=e,this.value}},kc=class extends nt{validate(e){if(e===void 0)return;const t=this.parent.minmax.value;if(t===void 0)return e;const r={...e};return e.from<t.min&&(r.from=t.min),e.to>t.max&&(r.to=t.max),r}afterSetEffect(e){e&&this.parent.forEveryInstance(t=>t.recieveRange(e))}imposeRange(e){return e===void 0&&this.value===void 0||e===void 0&&this.value!==void 0&&(this.value=e),e!==void 0&&this.value===void 0?this.value=e:e!==void 0&&this.value!==void 0&&(this.value.from!==e.from||this.value.to!==e.to)&&(this.value=e),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const t=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=t),i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},$c=class extends nt{constructor(){super(...arguments),this._hover=this.value!==void 0}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.instances.forEveryInstance(t=>t.recieveCursorPosition(e)),this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Pc=class extends nt{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},Ec=class extends nt{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(e,t,r){this.parent.registry.fetcher.request(e,t,(i,s)=>{if(i instanceof er){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(e,t){this._requestedRemovals.has(e)?t&&this._requestedRemovals.get(e).callbacks.push(t):this._requestedRemovals.set(e,{url:e,callbacks:t?[t]:[]})}async cleanup(){const e=Object.values(this._requestedRemovals).map(t=>t.url);this.value=this.value.filter(t=>{var i;return e.includes(t.url)?((i=this._requestedRemovals.get(t.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.url,t))}instantiateSource(e){if(this._map.has(e.url))return this._map.get(e.url);{const t=e.createInstance(this.parent);return this.value=[...this.value,t],t}}instantiateSources(e){const t=[];e.forEach(r=>{this._map.has(r.url)||t.push(r.createInstance(this.parent))}),this.value=t}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},na=class extends nt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Sc=class extends na{validate(e){return e}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const e=this.parent.files.value;if(e.length!==0)return e.reduce((t,r)=>r.min<t.min||r.max>t.max?{min:r.min<t.min?r.min:t.min,max:r.max>t.max?r.max:t.max}:t,{min:1/0,max:-1/0})}},Tc=class extends Lr{constructor(e,t,r,i){super(),this.registry=e,this.id=t,this.name=r,this.description=i,this.hash=Math.random(),this.minmax=new Sc(this,void 0),this.instances=new Ec(this,[]),this.files=new Pc(this,[]),this.cursorPosition=new $c(this,void 0),this.forEveryInstance=s=>{this.instances.value.forEach(n=>s(n))}}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.instances.removeAllInstances()}reset(){this.instances.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Oc=class extends nt{constructor(){super(...arguments),this._map=new Map}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,r){if(this._map.has(e))return this._map.get(e);const i=new Tc(this.parent,e,t,r);return this._map.set(e,i),this.value.push(i),this.value=[...this.value],i}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Ac=async e=>{let t=[];const r=async $=>{console.log("reading file",$);const U=new DataView($.slice(0,25)),j=U.getUint8(15),W=U.getUint16(17,!0),oe=U.getUint16(19,!0),re=j===1?4:2,$e=57,B=W*oe*re,he=$e+B,X=$.slice(25),ne=X.byteLength/he;let ge=[];console.log("file was analysed",{dataType:j,pixelByteSize:re,streamLength:X.byteLength,frameCount:ne});for(let z=0;z<ne;z++){const te=z*he+57,f=te+B,b=X.slice(te,f);j===0?new Uint16Array(b).forEach(Z=>{}):j===1&&(ge=ge.concat(Array.from(new Float32Array(b))))}return ge};(await Promise.all(e.map($=>r($)))).forEach($=>{t=t.concat($)}),t.sort(($,U)=>$-U);const s=t[0],n=t[t.length-1],a=Math.abs(s-n),l=200,c=a/l,d=[];let m=[...t];for(let $=0;$<l;$++){const U=s+c*$,j=U+c,W=m.findIndex(he=>he>j),re=m.slice(0,W-1).length,$e=re/t.length*100,B={from:U,to:j,count:re,percentage:$e};d.push(B),m=m.slice(W)}const p=[...d].sort(($,U)=>$.percentage-U.percentage),_=p[0].percentage,y=p[p.length-1].percentage,E=Math.abs(_-y),x=d.map($=>({...$,height:$.percentage/E*100}));return console.log(e.length,x),x},Cc=[{extension:"lrc",minme:"application/octet-stream"}],Mc=(e,t)=>{const r=t.endsWith("lrc"),s=new TextDecoder().decode(e.slice(0,4))==="LRC\0";return r&&s},Dc=async e=>{const t=new DataView(e),r=t.getUint16(17,!0),i=t.getUint16(19,!0),s=e.byteLength,n=(X,ne)=>{const ge=X.getBigInt64(ne,!0),z=62135596800000n,ue=10000n,te=24n*60n*60n*1000n*ue,f=0x4000000000000000n,b=0x8000000000000000n;let Z=ge&0x3FFFFFFFFFFFFFFFn;ge&b&&(Z>f-te&&(Z-=f),Z<0&&(Z+=te));const le=Z/ue-z;return Number(le)},a=n(t,5),l=t.getUint8(15);let c=2;l===1&&(c=4);const d=57,m=r*i*c,p=d+m,_=e.slice(25),y=_.byteLength/p,E=X=>{const ne=X*p,ge=ne+p,z=_.slice(ne,ge),ue=new DataView(z),te=ue.getFloat32(8,!0),f=ue.getFloat32(12,!0),b=n(ue,0),N=ue.getFloat32(24,!0),Z=ue.getFloat32(28,!0);return{timestamp:b,min:te,max:f,emissivity:N,reflectedKelvins:Z}},x=[];for(let X=0;X<y;X++){const ne=E(X);x.push(ne)}const $={emissivity:0,reflectedKelvins:0};let U=1/0,j=-1/0;const W=[];x.forEach(X=>{$.emissivity=$.emissivity+X.emissivity,$.reflectedKelvins=$.reflectedKelvins+X.reflectedKelvins,X.min<U&&(U=X.min),X.max>j&&(j=X.max),W.push(X.timestamp)});const oe=W[0],re=[];W.forEach((X,ne)=>{const ge=W[ne+1];let z=0;ge===void 0&&(z=0),z=ge-X;const ue=X-oe;re.push({absolute:X,relative:ue,offset:isNaN(z)?0:z,index:ne})});const $e=x[x.length-1].timestamp-x[0].timestamp,B=$e/y,he=1e3/B;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:y,duration:$e,frameInterval:B,fps:he,timeline:re,min:U,max:j,averageEmissivity:$.emissivity/x.length,averageReflectedKelvins:$.reflectedKelvins/x.length}},Fc=(e,t)=>{const r=new DataView(e.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,c=s*n*a,d=l+c,m=e.slice(25),p=t*d,_=p+d;return{array:m.slice(p,_),dataType:i}},Lc=async(e,t)=>{const r=new DataView(e),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,c=0x8000000000000000n;let m=i&0x3FFFFFFFFFFFFFFFn;i&c&&(m>l-a&&(m-=l),m<0&&(m+=a));const _=m/n-s,y=Number(_),E=r.getFloat32(8,!0),x=r.getFloat32(12,!0),$=r.getFloat32(24,!0),U=r.getFloat32(28,!0),j=e.slice(57);let W=[];if(t===0){const oe=new Uint16Array(j),re=Math.abs(E-x),$e=65535;oe.forEach(B=>{const he=B/$e;W.push(E+re*he)})}else t===1&&(W=Array.from(new Float32Array(j)));return{timestamp:y,min:E,max:x,emissivity:$,reflectedKelvins:U,pixels:W}},Rc={name:"LabIR Recording (.lrc)",description:"Radiometric data saved by thermal cameras TIMI Edu and by measurement systems developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"}],extensions:Cc,is:Mc,baseInfo:Dc,getFrameSubset:Fc,frameData:Lc,registryHistogram:Ac},aa=Object.freeze(Rc),jc=class extends nt{constructor(){super(...arguments),this._resolution=150,this.buffer=new Map,this.bufferPixelsCount=0,this._bufferResolution=1e3}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e.length!==this.resolution+1&&e.length,e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}refreshBufferFromCurrentPixels(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.instances.value.map(r=>r.getPixelsForHistogram()));this.parent.pool.exec((t,r,i,s,n)=>{let l=t.reduce((_,y)=>{const E=y.reduce((x,$)=>[...x,...$],[]);return[..._,...E]},[]).sort((_,y)=>_-y);const c=s/n;let d=r+c;const m=new Map;let p=0;for(;d!==!1;){const _=l.findIndex(x=>x>d),y=l.slice(0,_).length;m.set(d-c/2,y),p+=y,l=l.slice(_);const E=d+c;d=E<i?E:!1}return{result:m,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){console.log("začínám kalkulovat histogram");const t=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.service.buffer);console.log("all buffers",t);const r=await this.parent.pool.exec(aa.registryHistogram,[t]);this.value=r,console.log("result z vlákna",r)}_getHistorgramFromAllGroups(){if(this.parent.minmax.value===void 0||this.parent.groups.value.length,this.parent.minmax.value===void 0||this.parent.groups.value.length===0)return[];{const e=this.parent.groups.value.reduce((d,m)=>{const p=m.instances.value.reduce((_,y)=>(_=[..._,...y.pixels],_),[]);return[...d,...p]},[]),t=[],r=this.resolution,s=(this.parent.minmax.value.max-this.parent.minmax.value.min)/r;for(let d=0;d<r;d++){const m=s*d+this.parent.minmax.value.min,p=m+s;t.push([m,p])}const n=[];let a=e.length;for(const d of t){const m=e.filter(p=>p>=d[0]&&p<d[1]).length;a=a+m,n.push({from:d[0],to:d[1],count:m})}const l=n.map(d=>({...d,percentage:d.count/a*100})),c=Math.max(...l.map(d=>d.percentage));return l.map(d=>({...d,height:d.percentage/c*100}))}}},Bc=class extends nt{validate(e){return e}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Nc=class extends na{validate(e){return e}afterSetEffect(){}recalculateFromGroups(){const e=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(e),this.value}_getMinmaxFromAllGroups(e){return e.length===0?void 0:e.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Uc=class{constructor(e){this.registry=e,this.requests=new Map}get requestArray(){return Array.from(this.requests.values())}request(e,t,r){var i;if(this.requests.has(e))r&&((i=this.requests.get(e))==null||i.callbacks.push(r));else{const s={thermalUrl:e,visibleUrl:t,callbacks:r?[r]:[]};this.requests.set(e,s)}this.timer===void 0&&(this.timer=setTimeout(this.resolve.bind(this),0))}async resolve(){const e=await Promise.all(this.requestArray.map(async t=>{const r={request:t};if(this.registry.manager.isUrlRegistered(t.thermalUrl))r.output=this.registry.manager.sourcesByUrl[t.thermalUrl];else try{const i=await er.fromUrlWithErrors(t.thermalUrl,t.visibleUrl);i&&(r.output=i)}catch(i){i instanceof Error&&(r.output=i.message)}return r})).then(t=>t.map(r=>(r.output instanceof er?r.request.callbacks.forEach(i=>{i(r.output),this.registry.manager.registerSource(r.output)}):r.request.callbacks.forEach(i=>{r.output instanceof er||i(void 0,r.output??"Něco se pokazilo")}),r.output)));return clearTimeout(this.timer),this.timer=void 0,this.registry.postLoadedProcessing(),e}},yn=class ws extends EventTarget{constructor(t,r,i){super(),this.group=t,this.url=r,this.visibleUrl=i}static single(t,r,i){return new ws(t,r,i)}static multiple(t,r){return r.map(i=>new ws(t,i.thermalUrl,i.visibleUrl))}async fetch(){if(this.group.registry.manager.isUrlRegistered(this.url))return{file:this.group.registry.manager.sourcesByUrl[this.url],request:this};const t=await er.fromUrl(this.url,this.visibleUrl);if(t){if(t!==null)return{file:t,request:this}}else return null;return null}},Hc=class{constructor(e){this.registry=e,this._requests=[]}get requests(){return this._requests}get loading(){return this.registry.loading.value}requestFile(e,t,r){if(this.loading===!0){console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);return}this._requests.push(yn.single(e,t,r))}requestFiles(e,t){if(this.loading===!0){console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);return}this._requests=[...this._requests,...yn.multiple(e,t)]}async resolveQuery(){this.loading;const e=await Promise.all(this._requests.map(r=>r.fetch())),t={};for(const r of e)if(r!==null){const i=this.registry.manager.registerSource(r.file);r.request.group.id in t?t[r.request.group.id].push(i):t[r.request.group.id]=[i]}for(const r in t){const i=this.registry.groups.map.get(r);i==null||i.instances.instantiateSources(t[r])}return this._requests=[],this.registry.groups.value}},Wc=class extends Lr{constructor(e,t,r){super(),this.id=e,this.manager=t,this.hash=Math.random(),this.loader=new Hc(this),this.groups=new Oc(this,[]),this.fetcher=new Uc(this),this.opacity=new _c(this,1),this.minmax=new Nc(this,void 0),this.loading=new Bc(this,!1),this.range=new kc(this,void 0),this.histogram=new jc(this,[]),this.palette=this.manager.palette,r&&r.histogramResolution!==void 0&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}get service(){return this.manager.service}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.instances.forEveryInstance(e)),this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFiles(e){this.reset(),Object.entries(e).forEach(([t,r])=>{const i=this.groups.addOrGetGroup(t);r.forEach(s=>{this.loader.requestFile(i,s.thermalUrl,s.visibleUrl)})}),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async loadOneFile(e,t){this.reset();const r=this.groups.addOrGetGroup(t);this.loader.requestFile(r,e.thermalUrl,e.visibleUrl),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async processDroppedFiles(e,t){this.reset(),this.loading.markAsLoading(),this.removeAllChildren();const r=await Promise.all(e.map(s=>bs.fromFile(s))).then(s=>s.filter(n=>n!==null));r.forEach(s=>this.manager.registerSource(s)),this.groups.addOrGetGroup(t).instances.instantiateSources(r),this.postLoadedProcessing()}enqueueFile(e,t,r){const i=this.groups.addOrGetGroup(e);this.loader.requestFile(i,t,r)}async loadQuery(){this.reset(),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}postLoadedProcessing(){console.log("postprocessing"),this.forEveryInstance(console.log),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.refreshBufferFromCurrentPixels(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.loader.loading===!1&&(this.opacity.reset(),this.minmax.reset())}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Ic=()=>{const e=[];for(let t=0;t<=255;t++)e.push(`rgb(${t},${t},${t})`);return e},Vc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],qc=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],zc=Ic(),oa={iron:{pixels:qc,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Vc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:zc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Yc=class extends nt{get availablePalettes(){return oa}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(e){return e}afterSetEffect(e){this.parent.forEveryRegistry(t=>{t.forEveryInstance(r=>r.recievePalette(e))})}setPalette(e){this.value=e}},la=class{constructor(e,t){this.thermalUrl=e,this.visibleUrl=t}},xs=class ca extends la{constructor(t,r,i){super(t),this.code=r,this.message=i}isSuccess(){return!1}static fromError(t){return new ca(t.url,t.code,t.message)}},ha=class extends Error{constructor(e,t,r){super(r),this.code=e,this.url=t}},Gc=class{constructor(e,t){this.drive=e,this.bufferSize=4,this.buffer=new Map,this.currentFrame=t}get currentFrame(){return this._currentFrame}set currentFrame(e){this._currentFrame=e,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(e=>e.relative)}async init(){return await this.preload(this.currentStep)}async recieveStep(e){let t=this.buffer.get(e);t===void 0&&(t=await this.drive.parent.service.frameData(e.index));const r=await this.preload(e);return this.currentFrame=t,r}async preload(e){const t=e.index+1<this.drive.relativeSteps.length?e.index+1:NaN,r=isNaN(t)?NaN:this.drive._validateIndex(t+this.bufferSize);if(isNaN(t)||isNaN(r)||t>r)return e.relative===this.drive.parent.duration&&this.buffer.clear(),{relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=t&&a.index<r),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,l)=>{const c=s[l];this.buffer.set(c,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Xc=class extends nt{constructor(e,t,r,i){super(e,Math.max(Math.min(t,r.length),0)),this.steps=r,this.stepsByAbsolute=new Map,this.stepsByRelative=new Map,this.stepsByIndex=new Map,this.relativeSteps=[],this._onChangeListeners=new Map,this._isPlayying=!1,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(s=>{this.stepsByIndex.set(s.index,s),this.stepsByAbsolute.set(s.absolute,s),this.stepsByRelative.set(s.relative,s),this.relativeSteps.push(s.relative)}),this.buffer=new Gc(this,i)}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlayying}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}addChangeListener(e,t){this._onChangeListeners.set(e,t)}removeChangeListener(e){this._onChangeListeners.delete(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),r=Math.ceil(t*this.steps.length)+5,i=this._validateIndex(r-40),s=this._validateIndex(r),a=this.steps.slice(i,s).reverse().find(l=>l.relative<=e);return a!==void 0?a:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),r=Math.floor(t*this.steps.length)-5,i=this._validateIndex(r),s=this._validateIndex(r+40),a=this.steps.slice(i,s).find(l=>l.relative>e);return a!==void 0?a:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);return t!==this._currentStep?(this._currentStep=t,{...await this.buffer.recieveStep(this._currentStep)}):{relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlayying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlayying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.createNextStepTimer())):this._isPlayying=!1},this._currentStep.offset))}play(){this.steps.length>1&&(this._isPlayying=!0,this.createNextStepTimer())}pause(){this._isPlayying=!1,clearTimeout(this.timer)}stop(){this.pause(),this.value=0}},Qc=class ua extends ea{constructor(t,r,i,s,n,a,l,c,d,m,p,_,y,E,x,$,U){super(t,r.thermalUrl,i,s,d,n,l,p,_,a,r.visibleUrl),this.group=t,this.service=r,this.width=i,this.height=s,this.timestamp=n,this.frameCount=a,this.duration=l,this.frameInterval=c,this.fps=m,this.min=p,this.max=_,this.bytesize=y,this.averageEmissivity=E,this.averageReflectedKelvins=x,this.firstFrame=$,this.timelineData=U,this.pixels=$.pixels}exportAsPng(){throw new Error("Method not implemented.")}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}postInit(){return this.canvasLayer=new ra(this),this.visibleLayer=new ta(this,this.visibleUrl),this.cursorLayer=new ia(this),this.listenerLayer=new sa(this),this.cursorValue=new Jn(this,void 0),this.timeline=new Xc(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const r=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(r)}}getPixelsForHistogram(){return[]}static fromService(t,r,i,s){return new ua(t,r,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,s.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,s,i.timeline).postInit()}},da=class extends la{constructor(e,t,r,i){super(r,i),this.buffer=e,this.parser=t,this.id=Math.random(),this.pool=fi,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const t=this.getFrameSubset(e);return await this.parser.frameData(t.array,t.dataType)}async createInstance(e){const t=await this.baseInfo(),r=await this.frameData(0),i=Qc.fromService(e,this,t,r);return e.files.addFile(i),i}},Kc={LrcParser:aa},fa=Object.values(Kc),Zc=(e,t)=>{const r=fa.find(i=>i.is(e,t));if(r===void 0)throw new ha(2,t,`No parser found for '${t}'.`);return r};fa.map(e=>e.extensions);var Jc=class pa{constructor(t,r){this.thermalUrl=t,this.visibleUrl=r}static fromUrl(t,r){return new pa(t,r)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(t){const r=await t;if(r.status!==200)return this.pocessTheService(new xs(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=Zc(i,this.thermalUrl);return this.pocessTheService(new da(i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof ha)return this.pocessTheService(xs.fromError(s));throw s}}pocessTheService(t){return t}},eh=class{constructor(e){this.manager=e,this.pool=fi,this.requestsByUrl=new Map,this.cacheByUrl=new Map}static isolatedInstance(e="isolated_registry"){const r=new Ms().addOrGetRegistry(e);return{service:r.service,registry:r}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(e){return this.requestsByUrl.has(e)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(e){return this.cacheByUrl.has(e)}async loadFile(e,t){if(this.cacheByUrl.has(e))return this.cacheByUrl.get(e);if(this.requestsByUrl.has(e))return this.requestsByUrl.get(e).load();{const r=Jc.fromUrl(e,t);this.requestsByUrl.set(e,r);const i=await r.load();return this.requestsByUrl.delete(e),this.cacheByUrl.set(e,i),i}}},Ms=class extends Lr{constructor(e){super(),this.registries={},this.palette=new Yc(this,"jet"),this.service=new eh(this),this._sourcesByUrl={},this.isUrlRegistered=t=>Object.keys(this.sourcesByUrl).includes(t),this.id=Math.random(),e&&e.palette&&this.palette.setPalette(e.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Wc(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}get sourcesByUrl(){return this._sourcesByUrl}getSourcesArray(){return Object.values(this.sourcesByUrl)}getRegisteredUrls(){return Object.keys(this.sourcesByUrl)}registerSource(e){return this.getRegisteredUrls().includes(e.url)?this.sourcesByUrl[e.url]:(this.sourcesByUrl[e.url]=e,e)}},Ds=class{};Ds.inputToDate=e=>{if(typeof e=="number"){const t=new Date;return t.setTime(e),t}return e};var ut=class Dt extends Ds{static humanRangeDates(t,r){return t=Dt.inputToDate(t),r=Dt.inputToDate(r),t.getUTCDate()===r.getUTCDate()?Dt.humanDate(t):[Dt.humanDate(t),Dt.humanDate(r)].join(" - ")}static human(t){return`${Dt.humanDate(t)} ${Dt.humanTime(t,!0)} `}};ut.isoDate=e=>(e=ut.inputToDate(e),Cs(e,{representation:"date"}));ut.isoTime=e=>(e=ut.inputToDate(e),Cs(e,{representation:"time"}));ut.isoComplete=e=>(e=ut.inputToDate(e),Cs(e));ut.humanTime=(e,t=!1)=>(e=ut.inputToDate(e),Zn(e,t?"HH:mm:ss":"HH:mm"));ut.humanDate=(e,t=!1)=>(e=ut.inputToDate(e),Zn(e,t?"d. M.":"d. M. yyyy"));var th=ut,tr=class extends Ds{};tr.down=(e,t)=>t==="jednu hodinu"?pc(e):t==="jeden den"?gs(e):t==="jeden týden"?sr(e):t==="jeden měsíc"?dl(e):Xn(e);tr.up=(e,t)=>t==="jednu hodinu"?pl(e):t==="jeden den"?hl(e):t==="jeden týden"?ml(e):t==="jeden měsíc"?ul(e):fl(e);tr.pick=(e,t)=>[tr.down(e,t),tr.up(e,t)];tr.modify=(e,t,r)=>{switch(r){case"jednu hodinu":return sl(e,t);case"jeden den":return fn(e,t);case"jeden týden":return fn(e,t*7);case"jeden měsíc":return qn(e,t);case"jeden rok":return ll(e,t)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ma=class extends Event{constructor(t,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mi=class{constructor(t,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=t,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ma(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let rh=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){const i=r||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,r,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:r});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ih=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},Sr=class extends rh{constructor(t,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const c=new Set;for(const[d,{consumerHost:m}]of this.subscriptions)c.has(d)||(c.add(d),m.dispatchEvent(new ma(this.context,d,!0)));a.stopPropagation()},this.host=t,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ih(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sh({context:e}){return(t,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Sr(this,{context:e}))}),{get(){return t.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),t.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{t.constructor.addInitializer(a=>{i.set(a,new Sr(a,{context:e}))});const s=Object.getOwnPropertyDescriptor(t,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(t,r,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=globalThis,Fs=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ls=Symbol(),wn=new WeakMap;let ga=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Ls)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Fs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=wn.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wn.set(r,t))}return t}toString(){return this.cssText}};const nh=e=>new ga(typeof e=="string"?e:e+"",void 0,Ls),Ve=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[n+1],e[0]);return new ga(r,e,Ls)},ah=(e,t)=>{if(Fs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),s=ei.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,e.appendChild(i)}},xn=Fs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return nh(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oh,defineProperty:lh,getOwnPropertyDescriptor:ch,getOwnPropertyNames:hh,getOwnPropertySymbols:uh,getPrototypeOf:dh}=Object,Lt=globalThis,_n=Lt.trustedTypes,fh=_n?_n.emptyScript:"",as=Lt.reactiveElementPolyfillSupport,$r=(e,t)=>e,ri={toAttribute(e,t){switch(t){case Boolean:e=e?fh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Rs=(e,t)=>!oh(e,t),kn={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Rs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Lt.litPropertyMetadata??(Lt.litPropertyMetadata=new WeakMap);class Jt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=kn){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,r);s!==void 0&&lh(this.prototype,t,s)}}static getPropertyDescriptor(t,r,i){const{get:s,set:n}=ch(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??kn}static _$Ei(){if(this.hasOwnProperty($r("elementProperties")))return;const t=dh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r("properties"))){const r=this.properties,i=[...hh(r),...uh(r)];for(const s of i)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)r.unshift(xn(s))}else t!==void 0&&r.push(xn(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ah(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EC(t,r){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ri).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,r){var n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ri;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Rs)(this[t],r))return;this.P(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,i){this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[$r("elementProperties")]=new Map,Jt[$r("finalized")]=new Map,as==null||as({ReactiveElement:Jt}),(Lt.reactiveElementVersions??(Lt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=globalThis,ii=Pr.trustedTypes,$n=ii?ii.createPolicy("lit-html",{createHTML:e=>e}):void 0,va="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,ba="?"+Ft,ph=`<${ba}>`,Vt=document,Tr=()=>Vt.createComment(""),Or=e=>e===null||typeof e!="object"&&typeof e!="function",ya=Array.isArray,mh=e=>ya(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",os=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pn=/-->/g,En=/>/g,Ht=RegExp(`>|${os}(?:([^\\s"'>=/]+)(${os}*=${os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sn=/'/g,Tn=/"/g,wa=/^(?:script|style|textarea|title)$/i,gh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),J=gh(1),nr=Symbol.for("lit-noChange"),Oe=Symbol.for("lit-nothing"),On=new WeakMap,It=Vt.createTreeWalker(Vt,129);function xa(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $n!==void 0?$n.createHTML(t):t}const vh=(e,t)=>{const r=e.length-1,i=[];let s,n=t===2?"<svg>":"",a=_r;for(let l=0;l<r;l++){const c=e[l];let d,m,p=-1,_=0;for(;_<c.length&&(a.lastIndex=_,m=a.exec(c),m!==null);)_=a.lastIndex,a===_r?m[1]==="!--"?a=Pn:m[1]!==void 0?a=En:m[2]!==void 0?(wa.test(m[2])&&(s=RegExp("</"+m[2],"g")),a=Ht):m[3]!==void 0&&(a=Ht):a===Ht?m[0]===">"?(a=s??_r,p=-1):m[1]===void 0?p=-2:(p=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?Ht:m[3]==='"'?Tn:Sn):a===Tn||a===Sn?a=Ht:a===Pn||a===En?a=_r:(a=Ht,s=void 0);const y=a===Ht&&e[l+1].startsWith("/>")?" ":"";n+=a===_r?c+ph:p>=0?(i.push(d),c.slice(0,p)+va+c.slice(p)+Ft+y):c+Ft+(p===-2?l:y)}return[xa(e,n+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class Ar{constructor({strings:t,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=t.length-1,c=this.parts,[d,m]=vh(t,r);if(this.el=Ar.createElement(d,i),It.currentNode=this.el.content,r===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=It.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(va)){const _=m[a++],y=s.getAttribute(p).split(Ft),E=/([.?@])?(.*)/.exec(_);c.push({type:1,index:n,name:E[2],strings:y,ctor:E[1]==="."?yh:E[1]==="?"?wh:E[1]==="@"?xh:gi}),s.removeAttribute(p)}else p.startsWith(Ft)&&(c.push({type:6,index:n}),s.removeAttribute(p));if(wa.test(s.tagName)){const p=s.textContent.split(Ft),_=p.length-1;if(_>0){s.textContent=ii?ii.emptyScript:"";for(let y=0;y<_;y++)s.append(p[y],Tr()),It.nextNode(),c.push({type:2,index:++n});s.append(p[_],Tr())}}}else if(s.nodeType===8)if(s.data===ba)c.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(Ft,p+1))!==-1;)c.push({type:7,index:n}),p+=Ft.length-1}n++}}static createElement(t,r){const i=Vt.createElement("template");return i.innerHTML=t,i}}function ar(e,t,r=e,i){var a,l;if(t===nr)return t;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=Or(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(e),s._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(t=ar(e,s._$AS(e,t.values),s,i)),t}class bh{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??Vt).importNode(r,!0);It.currentNode=s;let n=It.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Rr(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new _h(n,this,t)),this._$AV.push(d),c=i[++l]}a!==(c==null?void 0:c.index)&&(n=It.nextNode(),a++)}return It.currentNode=Vt,s}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Rr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,s){this.type=2,this._$AH=Oe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ar(this,t,r),Or(t)?t===Oe||t==null||t===""?(this._$AH!==Oe&&this._$AR(),this._$AH=Oe):t!==this._$AH&&t!==nr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mh(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Oe&&Or(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vt.createTextNode(t)),this._$AH=t}$(t){var n;const{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ar.createElement(xa(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new bh(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let r=On.get(t.strings);return r===void 0&&On.set(t.strings,r=new Ar(t)),r}k(t){ya(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of t)s===r.length?r.push(i=new Rr(this.S(Tr()),this.S(Tr()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class gi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,s,n){this.type=1,this._$AH=Oe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Oe}_$AI(t,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=ar(this,t,r,0),a=!Or(t)||t!==this._$AH&&t!==nr,a&&(this._$AH=t);else{const l=t;let c,d;for(t=n[0],c=0;c<n.length-1;c++)d=ar(this,l[i+c],r,c),d===nr&&(d=this._$AH[c]),a||(a=!Or(d)||d!==this._$AH[c]),d===Oe?t=Oe:t!==Oe&&(t+=(d??"")+n[c+1]),this._$AH[c]=d}a&&!s&&this.j(t)}j(t){t===Oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yh extends gi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Oe?void 0:t}}class wh extends gi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Oe)}}class xh extends gi{constructor(t,r,i,s,n){super(t,r,i,s,n),this.type=5}_$AI(t,r=this){if((t=ar(this,t,r,0)??Oe)===nr)return;const i=this._$AH,s=t===Oe&&i!==Oe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Oe&&(i===Oe||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class _h{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ar(this,t)}}const ls=Pr.litHtmlPolyfillSupport;ls==null||ls(Ar,Rr),(Pr.litHtmlVersions??(Pr.litHtmlVersions=[])).push("3.1.4");const kh=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Rr(t.insertBefore(Tr(),n),n,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vt=class extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kh(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return nr}};var Nn;vt._$litElement$=!0,vt.finalized=!0,(Nn=globalThis.litElementHydrateSupport)==null||Nn.call(globalThis,{LitElement:vt});const cs=globalThis.litElementPolyfillSupport;cs==null||cs({LitElement:vt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $h={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Rs},Ph=(e=$h,t,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,e),i==="accessor"){const{name:a}=r;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,e)},init(l){return l!==void 0&&this.P(a,void 0,e),l}}}if(i==="setter"){const{name:a}=r;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,e)}}throw Error("Unsupported decorator location: "+i)};function Ae(e){return(t,r)=>typeof r=="object"?Ph(e,t,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(e){return Ae({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eh=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vi(e){return(t,r)=>{const{slot:i,selector:s}=e??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Eh(t,r,{get(){var c;const a=(c=this.renderRoot)==null?void 0:c.querySelector(n),l=(a==null?void 0:a.assignedElements(e))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}class _a extends vt{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),Os.version,this.hash].join("__")}log(...t){console.log(this.identificator,...t)}}const ka="manager",$a="registry",Pa="group",Ea="group";var Sh=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Sa=(e,t,r,i)=>{for(var s=i>1?void 0:i?Th(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Sh(t,r,s),s};let si=class extends _a{constructor(){super(...arguments),this.manager=new Ms}getClassName(){return"ThermalManagerElement"}render(){return J`
            <slot></slot>
        `}};si.styles=Ve`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;Sa([sh({context:ka})],si.prototype,"manager",2);si=Sa([Fe("thermal-manager")],si);class js extends _a{constructor(){super(...arguments),this._injectedManager=new mi(this,{context:ka,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new Ms}}var Oh=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,Ta=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ah(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Oh(t,r,s),s};let Cr=class extends js{constructor(){super(...arguments),this.uuid=Cr.DEFAULT_NAME,this.provider=new Sr(this,{context:$a,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.uuid);this.provider.setValue(e,!0)}render(){return J`
            <slot></slot>
        `}};Cr.DEFAULT_NAME="default_registry";Ta([Ae({type:String,attribute:!0,reflect:!0})],Cr.prototype,"uuid",2);Cr=Ta([Fe("thermal-registry")],Cr);var Ch=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Oa=(e,t,r,i)=>{for(var s=i>1?void 0:i?Mh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ch(t,r,s),s};class xt extends js{constructor(){super(...arguments),this._injectedRegistry=new mi(this,{context:$a,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}Oa([We()],xt.prototype,"_registry",2);Oa([We()],xt.prototype,"registry",1);var Dh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,bi=(e,t,r,i)=>{for(var s=i>1?void 0:i?Fh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Dh(t,r,s),s};let qt=class extends xt{constructor(){super(...arguments),this.uuid=qt.DEFAULT_NAME,this.provider=new Sr(this,{context:Pa,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.provider.setValue(this.group,!0)}updated(e){e.has("name")&&this.log(e,this.name)}render(){return J`
            <slot></slot>
        `}};qt.DEFAULT_NAME="default_group";bi([Ae({type:String,attribute:!0,reflect:!0})],qt.prototype,"uuid",2);bi([Ae({type:String,attribute:!0,reflect:!0})],qt.prototype,"name",2);bi([Ae({type:String,attribute:!0,reflect:!0})],qt.prototype,"description",2);qt=bi([Fe("thermal-group")],qt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lh=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rh={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},jh=e=>(...t)=>({_$litDirective$:e,values:t});class Bh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=(e,t)=>{var i;const r=e._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,t,!1),Er(s,t);return!0},ni=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},Aa=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Hh(t)}};function Nh(e){this._$AN!==void 0?(ni(this),this._$AM=e,Aa(this)):this._$AM=e}function Uh(e,t=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let n=r;n<i.length;n++)Er(i[n],!1),ni(i[n]);else i!=null&&(Er(i,!1),ni(i));else Er(this,e)}const Hh=e=>{e.type==Rh.CHILD&&(e._$AP??(e._$AP=Uh),e._$AQ??(e._$AQ=Nh))};class Wh extends Bh{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),Aa(this),this.isConnected=t._$AU}_$AO(t,r=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Er(this,t),ni(this))}setValue(t){if(Lh(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=()=>new Ih;class Ih{}const hs=new WeakMap,Qe=jh(class extends Wh{render(e){return Oe}update(e,[t]){var i;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),Oe}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let r=hs.get(t);r===void 0&&(r=new WeakMap,hs.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=hs.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class Bs extends xt{constructor(){super(...arguments),this._injectedGroup=new mi(this,{context:Pa,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}var Vh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,St=(e,t,r,i)=>{for(var s=i>1?void 0:i?qh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Vh(t,r,s),s};let dt=class extends Bs{constructor(){super(),this.canvasContainer=Xe(),this.errors=[],this.provider=new Sr(this,{context:Ea,initialValue:void 0})}getClassName(){return"FileContextElement"}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}async enqueueInTheRegistry(){if(this.thermal){const e=await this.registry.service.loadFile(this.thermal,this.visible);if(e instanceof xs)this.errors=[e.message];else if(e instanceof da){const t=await e.createInstance(this.group);this.file=t,this.provider.setValue(t),this.errors=[],this.registry.postLoadedProcessing()}}}willUpdate(e){super.willUpdate(e),e.has("thermal")||e.has("visible"),e.has("file")&&this.file&&this.file.unmountFromDom()}update(e){var t,r;if(super.update(e),e.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(t=this.file)==null||t.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return J`

            
        ${this.barElements.length>=0?J`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?J`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?J`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${Qe(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?J`
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
                                    ${this.errors.map(e=>J`<li>${e}</li>`)}
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
    
    `;St([Ae({type:String,reflect:!0})],dt.prototype,"thermal",2);St([Ae({type:String,reflect:!0})],dt.prototype,"visible",2);St([Ae({type:Object})],dt.prototype,"file",2);St([We()],dt.prototype,"errors",2);St([vi({slot:"bar",flatten:!0})],dt.prototype,"barItems",2);St([We()],dt.prototype,"provider",2);St([vi({slot:"bar",flatten:!0})],dt.prototype,"barElements",2);St([vi({slot:"pre",flatten:!0})],dt.prototype,"pre",2);dt=St([Fe("thermal-image")],dt);var zh=Object.defineProperty,Yh=Object.getOwnPropertyDescriptor,Ca=(e,t,r,i)=>{for(var s=i>1?void 0:i?Yh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&zh(t,r,s),s};let ai=class extends vt{constructor(){super(),this.dialogRef=Xe(),this.closeButtonRef=Xe(),this.invokerRef=Xe()}setClose(){var e;(e=this.dialogRef.value)==null||e.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var e;(e=this.dialogRef.value)==null||e.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),e==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return J`
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

        
    
    `;Ca([Ae({type:String,reflect:!0})],ai.prototype,"label",2);ai=Ca([Fe("thermal-dialog")],ai);var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Ns=(e,t,r,i)=>{for(var s=i>1?void 0:i?Xh(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Gh(t,r,s),s};let zt=class extends vt{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return J`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};zt.VARIANTS=["slate","primary","foreground","background"];zt.styles=Ve`

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
    
    `;Ns([Ae({type:String,converter:{fromAttribute:e=>zt.VARIANTS.includes(e)?e:"slate",toAttribute:e=>e}})],zt.prototype,"variant",2);Ns([Ae({type:String})],zt.prototype,"size",2);zt=Ns([Fe("thermal-button")],zt);const or=Math.min,$t=Math.max,oi=Math.round,Rt=e=>({x:e,y:e}),Qh={left:"right",right:"left",bottom:"top",top:"bottom"},Kh={start:"end",end:"start"};function An(e,t,r){return $t(e,or(t,r))}function jr(e,t){return typeof e=="function"?e(t):e}function Pt(e){return e.split("-")[0]}function yi(e){return e.split("-")[1]}function Ma(e){return e==="x"?"y":"x"}function Da(e){return e==="y"?"height":"width"}function Br(e){return["top","bottom"].includes(Pt(e))?"y":"x"}function Fa(e){return Ma(Br(e))}function Zh(e,t,r){r===void 0&&(r=!1);const i=yi(e),s=Fa(e),n=Da(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=li(a)),[a,li(a)]}function Jh(e){const t=li(e);return[_s(e),t,_s(t)]}function _s(e){return e.replace(/start|end/g,t=>Kh[t])}function eu(e,t,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return r?t?s:i:t?i:s;case"left":case"right":return t?n:a;default:return[]}}function tu(e,t,r,i){const s=yi(e);let n=eu(Pt(e),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),t&&(n=n.concat(n.map(_s)))),n}function li(e){return e.replace(/left|right|bottom|top/g,t=>Qh[t])}function ru(e){return{top:0,right:0,bottom:0,left:0,...e}}function La(e){return typeof e!="number"?ru(e):{top:e,right:e,bottom:e,left:e}}function lr(e){const{x:t,y:r,width:i,height:s}=e;return{width:i,height:s,top:r,left:t,right:t+i,bottom:r+s,x:t,y:r}}function Cn(e,t,r){let{reference:i,floating:s}=e;const n=Br(t),a=Fa(t),l=Da(a),c=Pt(t),d=n==="y",m=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,_=i[l]/2-s[l]/2;let y;switch(c){case"top":y={x:m,y:i.y-s.height};break;case"bottom":y={x:m,y:i.y+i.height};break;case"right":y={x:i.x+i.width,y:p};break;case"left":y={x:i.x-s.width,y:p};break;default:y={x:i.x,y:i.y}}switch(yi(t)){case"start":y[a]-=_*(r&&d?-1:1);break;case"end":y[a]+=_*(r&&d?-1:1);break}return y}const iu=async(e,t,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:m,y:p}=Cn(d,i,c),_=i,y={},E=0;for(let x=0;x<l.length;x++){const{name:$,fn:U}=l[x],{x:j,y:W,data:oe,reset:re}=await U({x:m,y:p,initialPlacement:i,placement:_,strategy:s,middlewareData:y,rects:d,platform:a,elements:{reference:e,floating:t}});m=j??m,p=W??p,y={...y,[$]:{...y[$],...oe}},re&&E<=50&&(E++,typeof re=="object"&&(re.placement&&(_=re.placement),re.rects&&(d=re.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):re.rects),{x:m,y:p}=Cn(d,_,c)),x=-1)}return{x:m,y:p,placement:_,strategy:s,middlewareData:y}};async function Ra(e,t){var r;t===void 0&&(t={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:p="floating",altBoundary:_=!1,padding:y=0}=jr(t,e),E=La(y),$=l[_?p==="floating"?"reference":"floating":p],U=lr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement($)))==null||r?$:$.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:m,strategy:c})),j=p==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,W=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),oe=await(n.isElement==null?void 0:n.isElement(W))?await(n.getScale==null?void 0:n.getScale(W))||{x:1,y:1}:{x:1,y:1},re=lr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:j,offsetParent:W,strategy:c}):j);return{top:(U.top-re.top+E.top)/oe.y,bottom:(re.bottom-U.bottom+E.bottom)/oe.y,left:(U.left-re.left+E.left)/oe.x,right:(re.right-U.right+E.right)/oe.x}}const su=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:m=!0,crossAxis:p=!0,fallbackPlacements:_,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:x=!0,...$}=jr(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const U=Pt(s),j=Pt(l)===l,W=await(c.isRTL==null?void 0:c.isRTL(d.floating)),oe=_||(j||!x?[li(l)]:Jh(l));!_&&E!=="none"&&oe.push(...tu(l,x,E,W));const re=[l,...oe],$e=await Ra(t,$),B=[];let he=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&B.push($e[U]),p){const z=Zh(s,a,W);B.push($e[z[0]],$e[z[1]])}if(he=[...he,{placement:s,overflows:B}],!B.every(z=>z<=0)){var X,ne;const z=(((X=n.flip)==null?void 0:X.index)||0)+1,ue=re[z];if(ue)return{data:{index:z,overflows:he},reset:{placement:ue}};let te=(ne=he.filter(f=>f.overflows[0]<=0).sort((f,b)=>f.overflows[1]-b.overflows[1])[0])==null?void 0:ne.placement;if(!te)switch(y){case"bestFit":{var ge;const f=(ge=he.map(b=>[b.placement,b.overflows.filter(N=>N>0).reduce((N,Z)=>N+Z,0)]).sort((b,N)=>b[1]-N[1])[0])==null?void 0:ge[0];f&&(te=f);break}case"initialPlacement":te=l;break}if(s!==te)return{reset:{placement:te}}}return{}}}};function ja(e){const t=or(...e.map(n=>n.left)),r=or(...e.map(n=>n.top)),i=$t(...e.map(n=>n.right)),s=$t(...e.map(n=>n.bottom));return{x:t,y:r,width:i-t,height:s-r}}function nu(e){const t=e.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<t.length;s++){const n=t[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>lr(ja(s)))}const au=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=t,{padding:l=2,x:c,y:d}=jr(e,t),m=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),p=nu(m),_=lr(ja(m)),y=La(l);function E(){if(p.length===2&&p[0].left>p[1].right&&c!=null&&d!=null)return p.find($=>c>$.left-y.left&&c<$.right+y.right&&d>$.top-y.top&&d<$.bottom+y.bottom)||_;if(p.length>=2){if(Br(r)==="y"){const ne=p[0],ge=p[p.length-1],z=Pt(r)==="top",ue=ne.top,te=ge.bottom,f=z?ne.left:ge.left,b=z?ne.right:ge.right,N=b-f,Z=te-ue;return{top:ue,bottom:te,left:f,right:b,width:N,height:Z,x:f,y:ue}}const $=Pt(r)==="left",U=$t(...p.map(ne=>ne.right)),j=or(...p.map(ne=>ne.left)),W=p.filter(ne=>$?ne.left===j:ne.right===U),oe=W[0].top,re=W[W.length-1].bottom,$e=j,B=U,he=B-$e,X=re-oe;return{top:oe,bottom:re,left:$e,right:B,width:he,height:X,x:$e,y:oe}}return _}const x=await n.getElementRects({reference:{getBoundingClientRect:E},floating:i.floating,strategy:a});return s.reference.x!==x.reference.x||s.reference.y!==x.reference.y||s.reference.width!==x.reference.width||s.reference.height!==x.reference.height?{reset:{rects:x}}:{}}}};async function ou(e,t){const{placement:r,platform:i,elements:s}=e,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Pt(r),l=yi(r),c=Br(r)==="y",d=["left","top"].includes(a)?-1:1,m=n&&c?-1:1,p=jr(t,e);let{mainAxis:_,crossAxis:y,alignmentAxis:E}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof E=="number"&&(y=l==="end"?E*-1:E),c?{x:y*m,y:_*d}:{x:_*d,y:y*m}}const lu=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=t,c=await ou(t,e);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:a}}}}},cu=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:s}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:$=>{let{x:U,y:j}=$;return{x:U,y:j}}},...c}=jr(e,t),d={x:r,y:i},m=await Ra(t,c),p=Br(Pt(s)),_=Ma(p);let y=d[_],E=d[p];if(n){const $=_==="y"?"top":"left",U=_==="y"?"bottom":"right",j=y+m[$],W=y-m[U];y=An(j,y,W)}if(a){const $=p==="y"?"top":"left",U=p==="y"?"bottom":"right",j=E+m[$],W=E-m[U];E=An(j,E,W)}const x=l.fn({...t,[_]:y,[p]:E});return{...x,data:{x:x.x-r,y:x.y-i}}}}};function mr(e){return Ba(e)?(e.nodeName||"").toLowerCase():"#document"}function it(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Bt(e){var t;return(t=(Ba(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ba(e){return e instanceof Node||e instanceof it(e).Node}function bt(e){return e instanceof Element||e instanceof it(e).Element}function yt(e){return e instanceof HTMLElement||e instanceof it(e).HTMLElement}function Mn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof it(e).ShadowRoot}function Nr(e){const{overflow:t,overflowX:r,overflowY:i,display:s}=ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(s)}function hu(e){return["table","td","th"].includes(mr(e))}function wi(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Us(e){const t=Hs(),r=ft(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function uu(e){let t=jt(e);for(;yt(t)&&!cr(t);){if(wi(t))return null;if(Us(t))return t;t=jt(t)}return null}function Hs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cr(e){return["html","body","#document"].includes(mr(e))}function ft(e){return it(e).getComputedStyle(e)}function xi(e){return bt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function jt(e){if(mr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Mn(e)&&e.host||Bt(e);return Mn(t)?t.host:t}function Na(e){const t=jt(e);return cr(t)?e.ownerDocument?e.ownerDocument.body:e.body:yt(t)&&Nr(t)?t:Na(t)}function ks(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const s=Na(e),n=s===((i=e.ownerDocument)==null?void 0:i.body),a=it(s);return n?t.concat(a,a.visualViewport||[],Nr(s)?s:[],a.frameElement&&r?ks(a.frameElement):[]):t.concat(s,ks(s,[],r))}function Ua(e){const t=ft(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=yt(e),n=s?e.offsetWidth:r,a=s?e.offsetHeight:i,l=oi(r)!==n||oi(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function Ha(e){return bt(e)?e:e.contextElement}function rr(e){const t=Ha(e);if(!yt(t))return Rt(1);const r=t.getBoundingClientRect(),{width:i,height:s,$:n}=Ua(t);let a=(n?oi(r.width):r.width)/i,l=(n?oi(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const du=Rt(0);function Wa(e){const t=it(e);return!Hs()||!t.visualViewport?du:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function fu(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==it(e)?!1:t}function Mr(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),n=Ha(e);let a=Rt(1);t&&(i?bt(i)&&(a=rr(i)):a=rr(e));const l=fu(n,r,i)?Wa(n):Rt(0);let c=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,m=s.width/a.x,p=s.height/a.y;if(n){const _=it(n),y=i&&bt(i)?it(i):i;let E=_,x=E.frameElement;for(;x&&i&&y!==E;){const $=rr(x),U=x.getBoundingClientRect(),j=ft(x),W=U.left+(x.clientLeft+parseFloat(j.paddingLeft))*$.x,oe=U.top+(x.clientTop+parseFloat(j.paddingTop))*$.y;c*=$.x,d*=$.y,m*=$.x,p*=$.y,c+=W,d+=oe,E=it(x),x=E.frameElement}}return lr({width:m,height:p,x:c,y:d})}function pu(e){let{elements:t,rect:r,offsetParent:i,strategy:s}=e;const n=s==="fixed",a=Bt(i),l=t?wi(t.floating):!1;if(i===a||l&&n)return r;let c={scrollLeft:0,scrollTop:0},d=Rt(1);const m=Rt(0),p=yt(i);if((p||!p&&!n)&&((mr(i)!=="body"||Nr(a))&&(c=xi(i)),yt(i))){const _=Mr(i);d=rr(i),m.x=_.x+i.clientLeft,m.y=_.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+m.x,y:r.y*d.y-c.scrollTop*d.y+m.y}}function mu(e){return Array.from(e.getClientRects())}function Ia(e){return Mr(Bt(e)).left+xi(e).scrollLeft}function gu(e){const t=Bt(e),r=xi(e),i=e.ownerDocument.body,s=$t(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=$t(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Ia(e);const l=-r.scrollTop;return ft(i).direction==="rtl"&&(a+=$t(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function vu(e,t){const r=it(e),i=Bt(e),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(s){n=s.width,a=s.height;const d=Hs();(!d||d&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:a,x:l,y:c}}function bu(e,t){const r=Mr(e,!0,t==="fixed"),i=r.top+e.clientTop,s=r.left+e.clientLeft,n=yt(e)?rr(e):Rt(1),a=e.clientWidth*n.x,l=e.clientHeight*n.y,c=s*n.x,d=i*n.y;return{width:a,height:l,x:c,y:d}}function Dn(e,t,r){let i;if(t==="viewport")i=vu(e,r);else if(t==="document")i=gu(Bt(e));else if(bt(t))i=bu(t,r);else{const s=Wa(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return lr(i)}function Va(e,t){const r=jt(e);return r===t||!bt(r)||cr(r)?!1:ft(r).position==="fixed"||Va(r,t)}function yu(e,t){const r=t.get(e);if(r)return r;let i=ks(e,[],!1).filter(l=>bt(l)&&mr(l)!=="body"),s=null;const n=ft(e).position==="fixed";let a=n?jt(e):e;for(;bt(a)&&!cr(a);){const l=ft(a),c=Us(a);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Nr(a)&&!c&&Va(e,a))?i=i.filter(m=>m!==a):s=l,a=jt(a)}return t.set(e,i),i}function wu(e){let{element:t,boundary:r,rootBoundary:i,strategy:s}=e;const a=[...r==="clippingAncestors"?wi(t)?[]:yu(t,this._c):[].concat(r),i],l=a[0],c=a.reduce((d,m)=>{const p=Dn(t,m,s);return d.top=$t(p.top,d.top),d.right=or(p.right,d.right),d.bottom=or(p.bottom,d.bottom),d.left=$t(p.left,d.left),d},Dn(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xu(e){const{width:t,height:r}=Ua(e);return{width:t,height:r}}function _u(e,t,r){const i=yt(t),s=Bt(t),n=r==="fixed",a=Mr(e,!0,n,t);let l={scrollLeft:0,scrollTop:0};const c=Rt(0);if(i||!i&&!n)if((mr(t)!=="body"||Nr(s))&&(l=xi(t)),i){const p=Mr(t,!0,n,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else s&&(c.x=Ia(s));const d=a.left+l.scrollLeft-c.x,m=a.top+l.scrollTop-c.y;return{x:d,y:m,width:a.width,height:a.height}}function us(e){return ft(e).position==="static"}function Fn(e,t){return!yt(e)||ft(e).position==="fixed"?null:t?t(e):e.offsetParent}function qa(e,t){const r=it(e);if(wi(e))return r;if(!yt(e)){let s=jt(e);for(;s&&!cr(s);){if(bt(s)&&!us(s))return s;s=jt(s)}return r}let i=Fn(e,t);for(;i&&hu(i)&&us(i);)i=Fn(i,t);return i&&cr(i)&&us(i)&&!Us(i)?r:i||uu(e)||r}const ku=async function(e){const t=this.getOffsetParent||qa,r=this.getDimensions,i=await r(e.floating);return{reference:_u(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function $u(e){return ft(e).direction==="rtl"}const Pu={convertOffsetParentRelativeRectToViewportRelativeRect:pu,getDocumentElement:Bt,getClippingRect:wu,getOffsetParent:qa,getElementRects:ku,getClientRects:mu,getDimensions:xu,getScale:rr,isElement:bt,isRTL:$u},Eu=lu,Su=cu,Tu=su,Ou=au,Au=(e,t,r)=>{const i=new Map,s={platform:Pu,...r},n={...s.platform,_c:i};return iu(e,t,{...s,platform:n})};var Cu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,_i=(e,t,r,i)=>{for(var s=i>1?void 0:i?Mu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Cu(t,r,s),s};let hr=class extends vt{constructor(){super(...arguments),this.dropdownRef=Xe(),this.invokerRef=Xe(),this.optionsRef=Xe(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Au(this.invokerRef.value,this.optionsRef.value,{middleware:[Eu(2),Tu(),Ou(),Su()],placement:"bottom-start",strategy:"fixed"}).then(({x:e,y:t})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${e}px`,this.optionsRef.value.style.top=`${t}px`)})}updated(e){super.updated(e),this.placeOptions()}firstUpdated(e){super.firstUpdated(e),this._options.forEach(t=>{t.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(e,t,r){var i,s,n,a;e==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return J`

            <div class="dropdown" ${Qe(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Qe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?J`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:J`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};hr.styles=Ve`

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
    
    `;_i([vi({slot:"option"})],hr.prototype,"_options",2);_i([Ae({type:String,reflect:!0})],hr.prototype,"open",2);_i([Ae({type:String,reflect:!0})],hr.prototype,"variant",2);hr=_i([Fe("thermal-dropdown")],hr);var Du=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,ki=(e,t,r,i)=>{for(var s=i>1?void 0:i?Fu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Du(t,r,s),s};let ur=class extends vt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Xe(),this.contentRef=Xe(),this.rulerContentRef=Xe()}connectedCallback(){super.connectedCallback()}firstUpdated(e){super.firstUpdated(e),this.observer=new ResizeObserver(t=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=t[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return J`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Qe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Qe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Qe(this.contentRef)}>

                    ${this.collapsed===!1?J`
                        <slot></slot>    
                    `:Oe}
                
                </div>

            </div>

            ${this.collapsed?J`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:Oe}
        
        `}};ur.styles=Ve`

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

    `;ki([We()],ur.prototype,"collapsed",2);ki([We()],ur.prototype,"lastContentWidth",2);ki([We()],ur.prototype,"drawerRef",2);ur=ki([Fe("thermal-bar")],ur);var Lu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,za=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ru(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Lu(t,r,s),s};let ci=class extends js{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const e=t=>{if(typeof t=="string"){const r=t;this.value=r}};this.manager.palette.addListener(this.identificator,e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(e){this.manager.palette.setPalette(e),this.value=e}paletteTemplate(e,t){return J`

            <div class="button ${t}">
                <span class="palette" style="background:${e.gradient}"></span>
                <!-- <span>${e.name}</span> -->
            </div>
        
        `}render(){return J`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(oa).map(([e,t])=>J`
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

    `;za([Ae({type:String,reflect:!0,attribute:!0})],ci.prototype,"value",2);ci=za([Fe("thermal-palette")],ci);var ju=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,Ya=(e,t,r,i)=>{for(var s=i>1?void 0:i?Bu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&ju(t,r,s),s};let hi=class extends xt{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const e=t=>{this.value!==t&&(this.value=t,this.renderRoot.querySelector("#handler").value=t.toString())};this.registry.opacity.addListener(this.identificator,e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(e){const t=parseFloat(e.target.value);this.value=t,this.registry.opacity.imposeOpacity(t)}updated(e){super.updated(e),e.has("value")&&parseFloat(e.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return J`
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
        `}};hi.styles=Ve`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Ya([Ae({type:Number,reflect:!0,attribute:!0})],hi.prototype,"value",2);hi=Ya([Fe("thermal-opacity")],hi);var Nu=Object.defineProperty,Uu=Object.getOwnPropertyDescriptor,Hu=(e,t,r,i)=>{for(var s=i>1?void 0:i?Uu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Nu(t,r,s),s};let Ln=class extends xt{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return J`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};Ln=Hu([Fe("thermal-range-auto")],Ln);var Wu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,Vu=(e,t,r,i)=>{for(var s=i>1?void 0:i?Iu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Wu(t,r,s),s};let Rn=class extends xt{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return J`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};Rn=Vu([Fe("thermal-range-minmax")],Rn);var qu=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,$i=(e,t,r,i)=>{for(var s=i>1?void 0:i?zu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&qu(t,r,s),s};class Tt extends Bs{constructor(){super(...arguments),this._injectedFile=new mi(this,{context:Ea,subscribe:!0}),this.ready=!1}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}update(t){return super.update(t),!0}}$i([We()],Tt.prototype,"_injectedFile",2);$i([We()],Tt.prototype,"_file",2);$i([We()],Tt.prototype,"file",1);$i([We()],Tt.prototype,"ready",2);var Yu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,Xu=(e,t,r,i)=>{for(var s=i>1?void 0:i?Gu(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Yu(t,r,s),s};let $s=class extends Tt{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}onFileLoaded(){}render(){var e,t,r,i,s,n,a,l,c,d,m,p,_;return J`
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
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&J`
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
                            ${((s=this._injectedFile.value)==null?void 0:s.visibleUrl)&&J`
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
                            <td>${((n=this._injectedFile.value)==null?void 0:n.timestamp)&&th.human(this._injectedFile.value.timestamp)}</td>
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
                            <td>${(_=this._injectedFile.value)==null?void 0:_.dataTypeHuman}</td>
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
    
    `;$s=Xu([Fe("thermal-file-info")],$s);var Qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Zu=(e,t,r,i)=>{for(var s=i>1?void 0:i?Ku(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Qu(t,r,s),s};let Ps=class extends vt{render(){return J`
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
        `}};Ps.styles=Ve`

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
    
    `;Ps=Zu([Fe("thermal-app-info")],Ps);var Ju=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,td=(e,t,r,i)=>{for(var s=i>1?void 0:i?ed(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&Ju(t,r,s),s};let Es=class extends Tt{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return J`

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
    
    `;Es=td([Fe("thermal-file-name")],Es);var rd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,sd=(e,t,r,i)=>{for(var s=i>1?void 0:i?id(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&rd(t,r,s),s};let Ss=class extends Tt{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return J`

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

        
        `}};Ss.styles=Ve`

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
    
    `;Ss=sd([Fe("thermal-file-download")],Ss);(()=>{var e=Object.defineProperty,t=Math.pow,r=(o,u,v)=>u in o?e(o,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):o[u]=v,i=(o,u,v)=>(r(o,typeof u!="symbol"?u+"":u,v),v),s=(o,u)=>` ${u&&u.length>0?u.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",d="range-dragging",m="data",p="min",_="max",y="step",E="round",x="type",$="theme",U="rtl",j="btt",W="disabled",oe="keyboard-disabled",re="mousewheel-disabled",$e="slider-width",B="slider-height",he="slider-radius",X="slider-bg",ne="slider-bg-hover",ge="slider-bg-fill",z="pointer-width",ue="pointer-height",te="pointer-radius",f="pointer-bg",b="pointer-bg-hover",N="pointer-bg-focus",Z="pointer-shadow",Ee="pointer-shadow-hover",le="pointer-shadow-focus",_t="pointer-border",Gt="pointer-border-hover",ze="pointer-border-focus",kt="animate-onclick",Ti="css-links",tt="vertical",Ot="horizontal",gr=(o,u,v,g,M)=>{let q=u-o;return q===0?v:(g-v)*(M-o)/q+v},lt=o=>!isNaN(parseFloat(o))&&isFinite(o),Me=(o,u)=>lt(o)?Number(o):u,Ur=(o,u)=>u===0?0:Math.round(o/u)*u,Oi=(o,u=1/0)=>{if(u===1/0)return o;let v=t(10,u);return Math.round(o*v)/v},Ue=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Ai=(o,u)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:u}}))},Ci=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:u}}))},Mi=(o,u)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:u}}))},Di=(o,u)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:u}}))},Fi=(o,u)=>{if(!u||u.length<=0)return;let v=u.map(M=>lt(M)?Me(M,M):M),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let M=1;M<v.length;M++)g[`value${M+1}`]=v[M];o.dispatchEvent(new CustomEvent("change",{detail:g}))},P=(o,u,v)=>{let g=0,M,q,se,D,F=!1,ae=(G,Te,Ie,He,Le,Re)=>{let Ze=g;Ie!==void 0&&G>Ie&&(G=Ie),Te!==void 0&&G<Te&&(G=Te),g=G;let Je=g;return(He===tt&&Re||He===Ot&&Le)&&(Je=100-Je),He===tt?u.style.top=`${Je}%`:u.style.left=`${Je}%`,Ze!==g},pe=G=>G===u||u.contains(G),H=(G,Te,Ie,He)=>{M=G,q=Te,se=Ie,D=He},ke=G=>{F=G,u.classList.toggle("disabled",F),F?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},ot=(G,Te)=>{Te==null?u.removeAttribute(G):u.setAttribute(G,Te)},Ye=G=>u.getAttribute(G),Y=G=>{if(!F){switch(G.key){case"ArrowLeft":{G.preventDefault(),typeof M=="function"&&M(v);break}case"ArrowRight":{G.preventDefault(),typeof q=="function"&&q(v);break}case"ArrowUp":{G.preventDefault(),typeof se=="function"&&se(v);break}case"ArrowDown":{G.preventDefault(),typeof D=="function"&&D(v);break}}Di(o,G)}},ce=()=>{F||Ai(o,u)};return u.className=`pointer pointer-${v}`,u.addEventListener("keydown",Y),u.addEventListener("click",ce),{$pointer:u,get percent(){return g},get disabled(){return F},set disabled(G){ke(G)},updatePosition:ae,isClicked:pe,setCallbacks:H,setAttr:ot,getAttr:Ye,destroy:()=>{u.removeEventListener("keydown",Y),u.removeEventListener("click",ce),u.remove()}}},O=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let u=o.split(","),v=[],g=!0;for(let M=0;M<u.length;M++){let q=u[M].trim();q!==""&&(v.push(q),lt(q)||(g=!1))}return g?v.map(M=>Number(M)):v},A=(o,u)=>u?u.findIndex(v=>v===o||v.toString().trim()===o.toString().trim()):-1,C=o=>({updatePosition:(u,v,g,M)=>{if(v.length<=0)return;let q=v.length===1,se=v[0],D=v[v.length-1];u===tt?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),q?o.style.height=`${se}%`:o.style.height=`${Math.abs(se-D)}%`,M?(o.style.bottom="0%",q?o.style.top="auto":o.style.top=`${Math.min(100-D,100-se)}%`):(o.style.bottom="auto",q?o.style.top="0%":o.style.top=`${Math.min(se,D)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),q?o.style.width=`${se}%`:o.style.width=`${Math.abs(se-D)}%`,g?(o.style.right="0%",q?o.style.left="auto":o.style.left=`${Math.min(100-D,100-se)}%`):(o.style.right="auto",q?o.style.left="0%":o.style.left=`${Math.min(se,D)}%`))}}),V="--animate-onclick",we="--width",K="--height",Se="--panel-bg-border-radius",ve="--panel-bg",L="--panel-bg-hover",be="--panel-bg-fill",k="--pointer-width",S="--pointer-height",ee="--pointer-border-radius",de="--pointer-bg",Be="--pointer-bg-hover",qe="--pointer-bg-focus",pt="--pointer-shadow",rt="--pointer-shadow-hover",at="--pointer-shadow-focus",At="--pointer-border",I="--pointer-border-hover",ie="--pointer-border-focus",T=(o,u,v)=>{let g=new Map;for(let M of o.attributes){let q=M.nodeName.trim().toLowerCase();if(!u.test(q))continue;let se=q.replace(/\D/g,"").trim(),D=se===""||se==="0"||se==="1"?0:Me(se,0)-1,F=v&&typeof v=="function"?v(M.value):M.value;g.set(D,F)}return g},Q=o=>{if(!o)return null;let u=o.getAttribute(Ti);if(!u)return null;let v=u.split(";"),g=[];for(let M of v)M.trim()!==""&&g.push(M.trim());return g},xe=[[we,$e,"sliderWidth",null],[K,B,"sliderHeight",null],[Se,he,"sliderRadius",null],[ve,X,"sliderBg",null],[L,ne,"sliderBgHover",null],[be,ge,"sliderBgFill",null],[k,z,"pointer#Width",/^pointer([0-9]*)-width$/],[S,ue,"pointer#Height",/^pointer([0-9]*)-height$/],[ee,te,"pointer#Radius",/^pointer([0-9]*)-radius$/],[de,f,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Be,b,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[qe,N,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[pt,Z,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[rt,Ee,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[at,le,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[At,_t,"pointer#Border",/^pointer([0-9]*)-border$/],[I,Gt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[ie,ze,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ye=(o,u,v)=>{let g=null,M=[],q=new Map,se=(Y,ce=u)=>{let G=[...ce.classList];for(let Te of G)Te.startsWith(Y)&&u.classList.remove(Te)},D=()=>{se("shape");let Y=u.querySelectorAll(".pointer");for(let ce of Y)se("shape",ce)},F=Y=>{g=Y,se("theme-"),typeof Y=="string"&&u.classList.add(`theme-${Y}`)},ae=()=>{if(D(),!(M.length<=0)){u.classList.add("shape",`shape-${M[0]}`);for(let Y=1;Y<M.length;Y++){let ce=M[Y];if(!ce)continue;let G=u.querySelector(`.pointer-${Y}`);!G||G.classList.add("shape",`shape-${ce}`)}}},pe=(Y,ce)=>{M[Y]=ce,ae()},H=()=>{D();let Y=T(o,/^pointer([0-9]*)-shape$/);if(!(Y.size<=0)){for(let ce of Y){let G=ce[0];M[G]=ce[1]}ae()}},ke=(Y,ce)=>`${Y}-${ce}`,ot=(Y,ce,G)=>{let Te=v[G];if(!Te)return;let Ie=G===0?u:Te.$pointer;if(ce==null){q.has(ke(Y,G))&&q.delete(ke(Y,G)),Ie.style.removeProperty(Y);return}q.set(ke(Y,G),ce),Ie.style.setProperty(Y,ce)},Ye=(Y,ce)=>q.get(ke(Y,ce));return(()=>{for(let Y of xe){let[ce,G,Te,Ie]=Y;if(Ie){let Le=T(o,Ie);for(let Re of Le){let Ze=Re[0],Je=Re[1];ot(ce,Je,Ze)}}else{let Le=o.getAttribute(G);ot(ce,Le,0)}let He=[];if(Te.indexOf("#")===-1)He.push([Te,0]);else{He.push([Te.replace("#",""),0]),He.push([Te.replace("#","0"),0]),He.push([Te.replace("#","1"),0]);for(let Le=1;Le<v.length;Le++)He.push([Te.replace("#",(Le+1).toString()),Le])}for(let Le of He)try{let Re=Le[0],Ze=Le[1];Object.prototype.hasOwnProperty.call(o,Re)||Object.defineProperty(o,Re,{get(){return Ye(ce,Ze)},set:Je=>{ot(ce,Je,Ze)}})}catch(Re){console.error(Re)}}F(o.getAttribute($)),H()})(),{setStyle:ot,getStyle:Ye,get theme(){return g},set theme(Y){F(Y)},get pointerShapes(){return M},setPointerShape:pe}},Ce="animate-on-click",fe="range-dragging",Ke=(o,u,v,g)=>{let M=[],q=pe=>{for(let H of M)H.update&&typeof H.update=="function"&&H.update(pe)},se=()=>{for(let pe of M)pe.destroy&&typeof pe.destroy=="function"&&pe.destroy()},D=(pe,H)=>{for(let ke of M)ke.onAttrChange&&typeof ke.onAttrChange=="function"&&ke.onAttrChange(pe,H)},F=pe=>{if(pe.gettersAndSetters){for(let H of pe.gettersAndSetters)if(!(!H.name||!H.attributes))try{Object.prototype.hasOwnProperty.call(o,H.name)||Object.defineProperty(o,H.name,H.attributes)}catch(ke){console.error("defineSettersGetters error:",ke)}}},ae=pe=>{var H;if(!pe.css)return;let ke=(H=o.shadowRoot)==null?void 0:H.querySelector("style");!ke||(ke.innerHTML+=pe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let pe of window.tcRangeSliderPlugins){let H=pe();M.push(H),H.init&&typeof H.init=="function"&&(H.init(o,u,v,g),F(H),ae(H))}},update:q,onAttrChange:D,destroy:se}},Ne=10,Hr=20,Xa=(o,u)=>{let v=new Map,g=/^value([0-9]*)$/;for(let D of o.attributes){let F=D.nodeName.trim().toLowerCase();if(!g.test(F))continue;let ae=F.replace("value","").trim(),pe=ae===""||ae==="0"||ae==="1"?0:Me(ae,0)-1,H=lt(D.value)?Me(D.value,0):D.value;v.set(pe,H)}let M=Math.max(...Array.from(v.keys())),q=[];q.push([P(o,u,0),v.get(0)]);let se=u;for(let D=1;D<=M;D++){let F=u.cloneNode(!0);se.after(F),se=F,q.push([P(o,F,D),v.get(D)])}return q},Vs=(o,u,v,g,M,q,se)=>{try{Object.defineProperty(o,g,{configurable:!0,get(){if(!u)return;let D=u.pointers[v];if(!D)return;let F=u.getTextValue(D.percent);return lt(F)?Me(F,F):F},set:D=>{u.pointers[v]?u==null||u.setValue(D,v):u==null||u.addPointer(D)}}),Object.defineProperty(o,M,{configurable:!0,get(){var D,F;return(F=(D=u==null?void 0:u.pointers[v])==null?void 0:D.getAttr("aria-label"))!=null?F:void 0},set:D=>{!u||u.setAriaLabel(v,D)}}),Object.defineProperty(o,q,{configurable:!0,get(){var D,F;return(F=(D=u==null?void 0:u.styles)==null?void 0:D.pointerShapes[v])!=null?F:null},set:D=>{!u||!u.styles||u.styles.setPointerShape(v,D)}}),Object.defineProperty(o,se,{configurable:!0,get(){var D;return(D=u==null?void 0:u.pointers[v].disabled)!=null?D:!1},set:D=>{if(!u)return;let F=u==null?void 0:u.pointers[v];!F||(F.disabled=D)}})}catch(D){console.error(D)}},Qa=(o,u)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<Ne;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)Vs(o,u,g[4],g[0],g[1],g[2],g[3])},qs=(o,u,v)=>{var g;let M=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(M)for(let q of o)u?M.prepend(q.$pointer):M.append(q.$pointer)},Ka=(o,u)=>{if(!(!u||o.length<=1)){for(let v of o)v.$pointer.style.zIndex=Hr.toString();u.$pointer.style.zIndex=(Hr*2).toString()}},Li=0,vr=100,Xt=2,zs="0.3s",Za=(o,u,v)=>{let g=v.map(h=>h[0]),M=null,q=null,se=null,D=null,F=Li,ae=vr,pe,H,ke=Ot,ot=Xt,Ye=!1,Y=!1,ce=!1,G=0,Te=1/0,Ie=!1,He,Le,Re=!1,Ze=!1,Je=!1,Ct=zs,Ys=[],Gs=h=>{Re||(h.preventDefault&&h.preventDefault(),Nt(h),window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",Wr),Ci(o,h))},Wr=h=>{Re||(He=void 0,Le=void 0,window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",Wr),Ct&&u.classList.add(Ce),Mi(o,h))},to=(h,w)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(h)&&Ct&&u.classList.remove(Ce),g[0];let R=io(h);if(Ie){let _e=w,ct=Vr(_e);ct!==void 0&&(_e=Ur(_e,ct)),R?(He=_e,Le=0,Ct&&u.classList.remove(Ce)):He!==void 0&&(Le=_e-He,He=_e)}if(!ro(h)&&!R){for(let _e of g)if(!(!_e.isClicked(h)||_e.disabled))return Ct&&u.classList.remove(Ce),_e;for(let _e of g)if(M===_e)return _e}let Pe=1/0,je=null;for(let _e of g){if(_e.disabled)continue;let ct=Math.abs(w-_e.percent);ct<Pe&&(Pe=ct,je=_e)}return je},Xs=()=>g.findIndex(h=>M===h&&!h.disabled),Nt=h=>{let w;if(ke===tt){let{height:Pe,top:je}=u.getBoundingClientRect(),_e=h.type.indexOf("mouse")!==-1?h.clientY:h.touches[0].clientY;w=Math.min(Math.max(0,_e-je),Pe)*100/Pe}else{let{width:Pe,left:je}=u.getBoundingClientRect(),_e=h.type.indexOf("mouse")!==-1?h.clientX:h.touches[0].clientX;w=Math.min(Math.max(0,_e-je),Pe)*100/Pe}if((Ye||Y)&&(w=100-w),M=to(h.target,w),M&&Ka(g,M),Ie&&g.length>1&&Le!==void 0){let Pe=g[0],je=g[g.length-1],_e=Pe.percent+Le<0,ct=je.percent+Le>100;if(_e||ct)return;for(let Zr=0;Zr<g.length;Zr++)et(Zr,g[Zr].percent+Le);return}let R=Xs();R!==-1&&(et(R,w),M==null||M.$pointer.focus())},Ir=h=>{if(Re||document.activeElement!==o||M!=null&&M.disabled)return;h.stopPropagation(),h.preventDefault();let w=h.deltaY<0,R=Ye||Y,Pe=w?!R:R,je=Xs();je!==-1&&(Pe?br(je,g[je].percent):yr(je,g[je].percent))},Qs=h=>{Re||Ze||(ke===tt?Y?et(h,100):et(h,0):Ye?yr(h,g[h].percent):br(h,g[h].percent))},Ks=h=>{Re||Ze||(ke===tt?Y?et(h,0):et(h,100):Ye?br(h,g[h].percent):yr(h,g[h].percent))},Zs=h=>{Re||Ze||(ke===tt?Y?yr(h,g[h].percent):br(h,g[h].percent):Ye?et(h,100):et(h,0))},Js=h=>{Re||Ze||(ke===tt?Y?br(h,g[h].percent):yr(h,g[h].percent):Ye?et(h,0):et(h,100))},ro=h=>h.classList.contains("panel"),io=h=>h.classList.contains("panel-fill"),br=(h,w)=>{if(w===void 0)return;let R=Vr(w);R==null&&(R=1),w-=R,w<0&&(w=0),et(h,w)},yr=(h,w)=>{if(w===void 0)return;let R=Vr(w);R==null&&(R=1),w+=R,w>100&&(w=100),et(h,w)},Ut=()=>{!D||D.update({percents:en(),values:tn(),$pointers:rn(),min:sn(),max:nn(),data:Bi(),step:ji(),round:Ui(),type:Ni(),textMin:qr(),textMax:zr(),rightToLeft:Ii(),bottomToTop:Vi(),pointersOverlap:Gi(),pointersMinDistance:Hi(),pointersMaxDistance:Wi(),rangeDragging:Xi(),disabled:qi(),keyboardDisabled:zi(),mousewheelDisabled:Yi()})},so=()=>{Ut()},no=h=>{if(!(ce||g.length<=1||ae===F))if(h===0){let w=Te*100/(ae-F);return Math.max(0,g[h+1].percent-w)}else{let w=G*100/(ae-F);return Math.min(g[h-1].percent+w,100)}},ao=h=>{if(!(ce||g.length<=1||ae===F))if(h===g.length-1){let w=Te*100/(ae-F);return Math.min(g[h-1].percent+w,100)}else{let w=G*100/(ae-F);return Math.max(0,g[h+1].percent-w)}},Vr=h=>{let w;if(typeof pe=="function"){let R=gr(0,100,F,ae,h);w=pe(R,h)}else w=pe;if(lt(w)){let R=ae-F;return w=R===0?0:w*100/R,w}},Qt=h=>{if(h===void 0)return;let w=gr(0,100,F,ae,h);return H!==void 0?H[Math.round(w)]:Oi(w,ot)},qr=()=>H!==void 0?H[F]:F,zr=()=>H!==void 0?H[ae]:ae,ji=()=>pe,oo=h=>{var w;return h<=0||ce?qr():(w=Qt(g[h-1].percent))!=null?w:""},lo=h=>{var w;return g.length<=1||h>=g.length-1||ce?zr():(w=Qt(g[h+1].percent))!=null?w:""},en=()=>g.map(h=>h.percent),tn=()=>g.map(h=>Qt(h.percent)),rn=()=>g.map(h=>h.$pointer),sn=()=>F,nn=()=>ae,Bi=()=>H,Ni=()=>ke,Ui=()=>ot,Hi=()=>G,Wi=()=>Te,co=h=>Ys[h],Ii=()=>Ye,Vi=()=>Y,qi=()=>Re,zi=()=>Ze,Yi=()=>Je,Gi=()=>ce,Xi=()=>Ie,et=(h,w)=>{if(w===void 0)return;let R=Vr(w);R!==void 0&&(w=Ur(w,R));let Pe=g[h];if(!Pe)return;let je=Pe.updatePosition(w,no(h),ao(h),ke,Ye,Y);q==null||q.updatePosition(ke,g.map(_e=>_e.percent),Ye,Y),Ut();for(let _e of g){let ct=Qt(_e.percent);ct!==void 0&&(_e.setAttr("aria-valuenow",ct.toString()),_e.setAttr("aria-valuetext",ct.toString()))}uo(),je&&Fi(o,g.map(_e=>Qt(_e.percent)))},mt=()=>{for(let h=0;h<g.length;h++)et(h,g[h].percent)},ho=(h,w)=>{F=H!==void 0?0:Me(h,Li),ae=H!==void 0?H.length-1:Me(w,vr),Yr(F),Gr(ae)},uo=()=>{var h,w;for(let R=0;R<g.length;R++){let Pe=g[R];Pe.setAttr("aria-valuemin",((h=oo(R))!=null?h:"").toString()),Pe.setAttr("aria-valuemax",((w=lo(R))!=null?w:"").toString())}},Yr=h=>{F=Me(h,Li),F>ae&&(ae=F+vr),mt()},Gr=h=>{ae=Me(h,vr),ae<F&&(ae=F+vr),mt()},an=h=>{ce=!0;for(let w=0;w<h.length;w++)Xr(h[w],w);ce=!1;for(let w=0;w<h.length;w++)Xr(h[w],w)},Xr=(h,w)=>{let R;H!==void 0?(R=h==null?0:A(h,H),R===-1&&(R=0)):(R=Me(h,F),R<F&&(R=F),R>ae&&(R=ae));let Pe=gr(F,ae,0,100,R);et(w,Pe)},Qr=h=>{if(h==null){pe=void 0;return}if(typeof h=="function"){pe=h,mt();return}if(lt(h)){pe=Me(h,1);let w=Math.abs(ae-F);pe>w&&(pe=void 0),mt();return}pe=void 0},Qi=h=>{ce=h,mt()},Ki=h=>{(!lt(h)||h<0)&&(h=0),G=h},Zi=h=>{(!lt(h)||h<0)&&(h=1/0),Te=h},Ji=h=>{Re=h,u.classList.toggle("disabled",Re),Re?u.setAttribute("aria-disabled","true"):u.hasAttribute("aria-disabled")&&u.removeAttribute("aria-disabled")},on=h=>{Ze=h},ln=h=>{Je=h,Je?document.removeEventListener("wheel",Ir):document.addEventListener("wheel",Ir,{passive:!1})},es=h=>{if(h==null){H=void 0;return}if(H=O(h),H===void 0||H.length<=0){H=void 0;return}Yr(0),Gr(H.length-1),pe===void 0&&Qr(1)},ts=h=>{var w;typeof h=="string"?ke=h.trim().toLowerCase()===tt?tt:Ot:ke=Ot;let R=(w=o.shadowRoot)==null?void 0:w.querySelector(".range-slider-box");if(!R)return;R.className=`range-slider-box type-${ke}`,mt();let Pe=ke===tt?"vertical":"horizontal";for(let je of g)je.setAttr("aria-orientation",Pe)},rs=h=>{Ye=h,g.length>1&&qs(g,Ye,o),mt(),Ut()},is=h=>{Y=h,g.length>1&&qs(g,Y,o),mt(),Ut()},ss=h=>{ot=Me(h,Xt),ot<0&&(ot=Xt),Ut()},cn=h=>{h==null||h.toString().trim().toLowerCase()==="false"?(Ct=void 0,u.style.removeProperty(V),u.classList.remove(Ce)):(Ct=h.toString(),u.style.setProperty(V,Ct),u.classList.add(Ce))},hn=(h,w)=>{let R=g[h];!R||(R.setAttr("aria-label",w),Ys[h]=w)},Kr=h=>{if(He=void 0,g.length<=1){Ie=!1,u.classList.remove(fe);return}Ie=h,u.classList.toggle(fe,Ie)},fo=()=>{Ji(Ue(o.getAttribute(W))),Ze=Ue(o.getAttribute(oe)),Je=Ue(o.getAttribute(re));let h=T(o,/^pointer([0-9]*)-disabled$/,w=>Ue(w));for(let w of h){let R=w[0];!g[R]||(g[R].disabled=w[1])}},po=()=>{let h=T(o,/^aria-label([0-9]*)$/);for(let w of h){let R=w[0];hn(R,w[1])}},mo=h=>{let w=g.length,R=g[w-1].$pointer,Pe=R.cloneNode(!0);R.after(Pe);let je=P(o,Pe,w);return je.setCallbacks(Qs,Ks,Zs,Js),g.push(je),Xr(h,w),mt(),Ut(),w},go=()=>{let h=g.length,w=g[h-1];return w?(w.destroy(),g.pop(),g.length<=1&&Kr(!1),mt(),Ut(),h-1):-1};return(()=>{var h,w;for(let Pe of g)Pe.setCallbacks(Qs,Ks,Zs,Js);let R=(h=o.shadowRoot)==null?void 0:h.querySelector(".panel-fill");R&&(q=C(R)),ts(o.getAttribute(x)),rs(Ue(o.getAttribute(U))),is(Ue(o.getAttribute(j))),ho(o.getAttribute(p),o.getAttribute(_)),Qr(o.getAttribute(y)),es(o.getAttribute(m)),an(v.map(Pe=>Pe[1])),Qi(Ue(o.getAttribute(a))),Ki(Me(o.getAttribute(l),0)),Zi(Me(o.getAttribute(c),1/0)),Kr(Ue(o.getAttribute(d))),ss(Me(o.getAttribute(E),Xt)),fo(),po(),se=ye(o,u,g),cn((w=o.getAttribute(kt))!=null?w:zs),u.addEventListener("mousedown",Gs),u.addEventListener("mouseup",Wr),u.addEventListener("touchmove",Nt),u.addEventListener("touchstart",Nt),Je||document.addEventListener("wheel",Ir,{passive:!1}),D=Ke(o,so,{setValues:an,setMin:Yr,setMax:Gr,setStep:Qr,setPointersOverlap:Qi,setPointersMinDistance:Ki,setPointersMaxDistance:Zi,setDisabled:Ji,setType:ts,setRightToLeft:rs,setBottomToTop:is,setRound:ss,setKeyboardDisabled:on,setMousewheelDisabled:ln,setRangeDragging:Kr,setData:es},{getPercents:en,getValues:tn,getPointerElements:rn,getMin:sn,getMax:nn,getStep:ji,getData:Bi,getType:Ni,getRound:Ui,getTextMin:qr,getTextMax:zr,isRightToLeft:Ii,isBottomToTop:Vi,isDisabled:qi,isKeyboardDisabled:zi,isMousewheelDisabled:Yi,isPointersOverlap:Gi,isRangeDraggingEnabled:Xi,getPointersMinDistance:Hi,getPointersMaxDistance:Wi}),D.init()})(),{get pointers(){return g},get styles(){return se},get pluginsManager(){return D},get min(){return qr()},get max(){return zr()},get step(){return ji()},get pointersOverlap(){return Gi()},set pointersOverlap(h){Qi(h)},get pointersMinDistance(){return Hi()},set pointersMinDistance(h){Ki(h)},get pointersMaxDistance(){return Wi()},set pointersMaxDistance(h){Zi(h)},get disabled(){return qi()},set disabled(h){Ji(h)},get data(){return Bi()},get type(){return Ni()},set type(h){ts(h)},get rightToLeft(){return Ii()},set rightToLeft(h){rs(h)},get bottomToTop(){return Vi()},set bottomToTop(h){is(h)},get round(){return Ui()},set round(h){ss(h)},get animateOnClick(){return Ct},set animateOnClick(h){cn(h)},get keyboardDisabled(){return zi()},set keyboardDisabled(h){on(h)},get mousewheelDisabled(){return Yi()},set mousewheelDisabled(h){ln(h)},get rangeDragging(){return Xi()},set rangeDragging(h){Kr(h)},setMin:Yr,setMax:Gr,setValue:Xr,setStep:Qr,setData:es,getTextValue:Qt,setAriaLabel:hn,getAriaLabel:co,addPointer:mo,removePointer:go,destroy:()=>{u.removeEventListener("mousedown",Gs),u.removeEventListener("mouseup",Wr),u.removeEventListener("touchmove",Nt),u.removeEventListener("touchstart",Nt),document.removeEventListener("wheel",Ir);for(let h of g)h.destroy();D==null||D.destroy()}}},Ja=(o,u,v)=>{let g=xe.find(([D,F,ae,pe])=>F.replace("#","")===u.replace(/\d+/g,""));if(g&&o.styles){let[D,F,ae,pe]=g,H=u.replace(/\D/g,"").trim(),ke=H===""||H==="0"||H==="1"?0:Me(H,0)-1;o.styles.setStyle(D,v,ke);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(u,v),u){case p:{o.setMin(v);break}case _:{o.setMax(v);break}case y:{o.setStep(v);break}case a:{o.pointersOverlap=Ue(v);break}case l:{o.pointersMinDistance=Me(v,0);break}case d:{o.rangeDragging=Ue(v);break}case c:{o.pointersMaxDistance=Me(v,1/0);break}case W:{o.disabled=Ue(v);break}case oe:{o.keyboardDisabled=Ue(v);break}case re:{o.mousewheelDisabled=Ue(v);break}case m:{o.setData(v);break}case x:{o.type=v;break}case U:{o.rightToLeft=Ue(v);break}case j:{o.bottomToTop=Ue(v);break}case E:{o.round=Me(v,Xt);break}case $:{o.styles&&(o.styles.theme=v);break}case kt:{o.animateOnClick=v;break}}let M=null;if(/^value([0-9]*)$/.test(u)&&(M="value"),/^pointer([0-9]*)-disabled$/.test(u)&&(M="pointer-disabled"),/^aria-label([0-9]*)$/.test(u)&&(M="aria-label"),/^pointer([0-9]*)-shape$/.test(u)&&(M="pointer-shape"),!M)return;let q=u.replace(/\D/g,"").trim(),se=q===""||q==="0"||q==="1"?0:Me(q,0)-1;switch(M){case"value":{o.setValue(v,se);break}case"pointer-disabled":{let D=o==null?void 0:o.pointers[se];if(!D)return;D.disabled=Ue(v);break}case"aria-label":{o.setAriaLabel(se,v);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(se,v);break}}},eo=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.disabled)!=null?u:!1}set data(o){var u;(u=this.slider)==null||u.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var u;(u=this.slider)==null||u.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var u;(u=this.slider)==null||u.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,u;return(u=(o=this.slider)==null?void 0:o.round)!=null?u:Xt}set type(o){!this.slider||(this.slider.type=o??Ot)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Ot}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?u:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?u:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,u;return(u=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?u:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,u,v;return(v=(u=(o=this.slider)==null?void 0:o.styles)==null?void 0:u.theme)!=null?v:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,u;return(u=(o=this.slider)==null?void 0:o.rightToLeft)!=null?u:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,u;return(u=(o=this.slider)==null?void 0:o.bottomToTop)!=null?u:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?u:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,u;return(u=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?u:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,u;return(u=(o=this.slider)==null?void 0:o.rangeDragging)!=null?u:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ue(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var u,v;if(!this.slider)return;let g=(v=(u=this.slider)==null?void 0:u.addPointer(o))!=null?v:0;Vs(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let u=document.createElement("style");u.textContent=o,this.shadowRoot.appendChild(u)}connectedCallback(){var o,u;if(!this.shadowRoot)return;this._externalCSSList=Q(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let v=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!v)return;let g=(u=this.shadowRoot)==null?void 0:u.getElementById("range-slider");if(!g)return;let M=Xa(this,v);this.slider=Za(this,g,M),Qa(this,this.slider),this._observer=new MutationObserver(q=>{q.forEach(se=>{var D;if(!this.slider||se.type!=="attributes")return;let F=se.attributeName;!F||Ja(this.slider,F,(D=this.getAttribute(F))!=null?D:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ri=eo;window.tcRangeSlider=Ri,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ri),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ri{})})();(()=>{var e=(l,c,d,m,p)=>{let _=c-l;return _===0?d:(m-d)*(p-l)/_+d},t=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,c)=>t(l)?Number(l):c,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,c=null,d=null,m=null,p=null,_=!1,y=s,E=n,x=()=>{var B;let he=(B=l==null?void 0:l.shadowRoot)==null?void 0:B.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),d.append(m),p=document.createElement("div"),p.classList.add("mark-values"),d.append(p),he.append(d)},$=()=>{!c||!d||d.classList.toggle("is-reversed",c.isRightToLeft()||c.isBottomToTop())},U=()=>{var B;if(!d||!c)return;let he=c.getMin(),X=c.getMax(),ne=c.getType()==="vertical",ge=c.isRightToLeft()||c.isBottomToTop();for(let ue=0;ue<y;ue++){let te=document.createElement("div");te.classList.add("mark",`mark-${ue}`);let f=y===0?0:ue*100/(y-1);ne?ge?te.style.top=`${100-f}%`:te.style.top=`${f}%`:ge?te.style.left=`${100-f}%`:te.style.left=`${f}%`,m==null||m.append(te)}let z=c.getData();for(let ue=0;ue<E;ue++){let te=document.createElement("div");te.classList.add("mark-value",`mark-value-${ue}`);let f=E===0?0:ue*100/(E-1),b=e(0,E-1,he,X,ue);te.textContent=(z?(B=z[Math.round(b)])!=null?B:"":b).toString(),ne?ge?te.style.top=`${100-f}%`:te.style.top=`${f}%`:ge?te.style.left=`${100-f}%`:te.style.left=`${f}%`,p==null||p.append(te)}},j=(B,he)=>{$e(),y=B,E=he,y<=0&&(y=s),E<=0&&(E=n),x(),U(),$()},W=B=>{_=B,_?(x(),U(),$()):$e()},oe=B=>{!d||d.style.setProperty("--marks-color",B)},re=B=>{!d||d.style.setProperty("--values-color",B)},$e=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(B,he,X,ne)=>{var ge,z;c=ne,l=B,_=i(l.getAttribute("marks")),_&&(j(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),oe((ge=l.getAttribute("marks-color"))!=null?ge:"#cbd5e1"),re((z=l.getAttribute("marks-values-color"))!=null?z:"#475569"))},onAttrChange:(B,he)=>{B==="marks"&&W(i(he)),B==="marks-count"&&j(r(he,s),E),B==="marks-values-count"&&j(y,r(he,n)),B==="marks-color"&&oe(he),B==="marks-values-color"&&re(he)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return _??!1},set:B=>{W(i(B))}}},{name:"marksCount",attributes:{get(){return y??s},set:B=>{j(r(B,s),E)}}},{name:"marksValuesCount",attributes:{get(){return y??s},set:B=>{j(y,r(B,n))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:B=>{oe(B)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:B=>{re(B)}}}],destroy:$e,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var nd=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,Yt=(e,t,r,i)=>{for(var s=i>1?void 0:i?ad(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&nd(t,r,s),s};let Et=class extends xt{constructor(){super(...arguments),this.sliderRef=Xe()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,e=>{e&&(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.identificator,e=>{e&&(this.from=e.from,this.to=e.to)})}firstUpdated(e){super.firstUpdated(e);const t=this.sliderRef.value;t.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),t.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),t.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return J`

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

        `}};Et.styles=Ve`

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
    
    `;Yt([Ae({type:Number,reflect:!0})],Et.prototype,"min",2);Yt([Ae({type:Number,reflect:!0})],Et.prototype,"max",2);Yt([Ae({type:Number,reflect:!0})],Et.prototype,"from",2);Yt([Ae({type:Number,reflect:!0})],Et.prototype,"to",2);Yt([We()],Et.prototype,"palette",2);Yt([We()],Et.prototype,"sliderRef",2);Et=Yt([Fe("thermal-range")],Et);var od=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,Pi=(e,t,r,i)=>{for(var s=i>1?void 0:i?ld(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&od(t,r,s),s};let dr=class extends xt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(e){super.firstUpdated(e),this.registry.histogram.addListener(this.identificator,t=>{this.histogram=t})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return J`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":Oe}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(e=>J`
                            <div class="histogram-bar">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():J`
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


    `;Pi([We()],dr.prototype,"histogram",2);Pi([Ae({type:Boolean,reflect:!0})],dr.prototype,"interactive",2);Pi([Ae({type:String,reflect:!0})],dr.prototype,"height",2);dr=Pi([Fe("thermal-histogram")],dr);var cd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,Ei=(e,t,r,i)=>{for(var s=i>1?void 0:i?hd(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&cd(t,r,s),s};let wt=class extends xt{constructor(){super(...arguments),this.ticksRef=Xe(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(e){super.firstUpdated(e),this.registry.minmax.addListener(this.identificator,t=>{this.minmax=t,this.calculateTicks(t,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(t=>{const r=t[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(e,t,r){return e<t?t:e>r?r:e}map(e,t,r,i,s){const n=(e-t)*(s-i)/(r-t)+i;return this.clamp(n,i,s)}calculateTicks(e,t){if(e===void 0)this.ticks=[];else{const r=[0],i=Math.floor(t/wt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(e,n)).filter(n=>n!==void 0)}}calculateOneTick(e,t){if(e!==void 0){const r=this.map(t,0,100,e.min,e.max);return{percentage:t,value:r}}}render(){return J`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Qe(this.ticksRef)}>

                    ${this.ticks.map(e=>J`
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


    `;Ei([Ae({type:String,reflect:!0})],wt.prototype,"placement",2);Ei([We()],wt.prototype,"minmax",2);Ei([We()],wt.prototype,"ticks",2);wt=Ei([Fe("thermal-ticks")],wt);var ud=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,fd=(e,t,r,i)=>{for(var s=i>1?void 0:i?dd(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&ud(t,r,s),s};let Ts=class extends Tt{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){var e;return J`
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
        `}};Ts.styles=Ve`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Ts=fd([Fe("thermal-file-share")],Ts);var pd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Si=(e,t,r,i)=>{for(var s=i>1?void 0:i?md(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&pd(t,r,s),s};let fr=class extends Tt{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=Xe(),this.barRef=Xe()}getClassName(){return"TimelineElement"}update(e){var t,r;return(t=this._injectedFile.value)==null||t.timeline.removeListener(this.identificator),(r=this._injectedFile.value)==null||r.timeline.addListener(this.identificator,i=>{this.percentage=i/this._injectedFile.value.duration*100,this.ms=this.formatDuration(this._injectedFile.value.timeline.value)}),super.update(e)}formatDuration(e){const t=e%1e3,r=1e3*60,i=Math.floor(e/r),s=(e-i*r-t)/1e3,n=(a,l)=>{const c=a.toString();if(c.length===l)return c;if(c.length<l){const d=l-c.length;let m="";for(let p=0;p<d;p++)m=m+"0";return m+c}};return[i,n(s,2),n(t,3)].join(":")}play(){this._injectedFile.value&&(this.playing=!0,this._injectedFile.value.timeline.play())}pause(){this._injectedFile.value&&(this.playing=!1,this._injectedFile.value.timeline.pause())}applyBar(e){if(this.log(e),e.clientX,this.timelineRef.value&&this.barRef.value&&this._injectedFile.value){const r=(e.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this._injectedFile.value.timeline.setValueByPercent(r)}}render(){return this._injectedFile.value===void 0||this._injectedFile.value.timeline.duration===0?Oe:J`
            <div class="container">


                ${this._injectedFile.value!==void 0?J`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?J`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:J`
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
                    `:Oe}
            
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
    
    `;Si([We()],fr.prototype,"playing",2);Si([We()],fr.prototype,"percentage",2);Si([We()],fr.prototype,"ms",2);fr=Si([Fe("thermal-timeline")],fr);var gd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,Ws=(e,t,r,i)=>{for(var s=i>1?void 0:i?vd(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(i?a(t,r,s):a(s))||s);return i&&s&&gd(t,r,s),s};let Dr=class extends Bs{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=Xe()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(e,t,r){var i;super.attributeChangedCallback(e,t,r),e==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return J`
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
                ${this.fullscreen==="on"?J`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:J`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
  
  `;Ws([Ae({type:String,reflect:!0})],Dr.prototype,"url",2);Ws([Ae({type:String,reflect:!0})],Dr.prototype,"fullscreen",2);Dr=Ws([Fe("thermal-file-app")],Dr);const ds=window.matchMedia("(prefers-color-scheme: dark)"),Is="thermal-dark-mode",jn=()=>{document.body.classList.add(Is)},bd=()=>{document.body.classList.remove(Is)},yd=()=>{ds.matches&&jn();const e=t=>{t.matches?jn():bd()};ds.addEventListener("change",e),ds.addListener(e)},wd=Os.version.toString().replaceAll(".","-"),Ga=e=>`thermal__${e}__${wd}`,xd=e=>document.getElementById(Ga(e))!==null,Bn=(e,t)=>{if(!xd(e)){const r=document.createElement("style");r.setAttribute("id",Ga(e)),r.innerHTML=t,document.head.appendChild(r)}},_d=()=>{Bn("rootVariables",`

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
`);yd();_d();document.addEventListener("DOMContentLoaded",()=>{});
