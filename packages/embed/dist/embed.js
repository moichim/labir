const po="@labir/embed",Nn="1.2.18",mo="Embedded display of thermograms",go="dist/embed.js",vo="module",Un={type:"git",url:"https://github.com/moichim/labir"},bo={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Hn="Jan Jáchim <jachim5@gmail.com>",yo="ISC",wo={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/emotion":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11"},xo={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Ps={name:po,version:Nn,description:mo,main:go,type:vo,repository:Un,scripts:bo,author:Hn,license:yo,dependencies:wo,devDependencies:xo};var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ko(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var fs={exports:{}};const $o={},Eo=Object.freeze(Object.defineProperty({__proto__:null,default:$o},Symbol.toStringTag,{value:"Module"})),Zt=ko(Eo);/**
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
 */(function(t,e){(function(r,i){i(e)})(ds,function(r){var i={},s={exports:{}};(function($){var A=function(H){return typeof H<"u"&&H.versions!=null&&H.versions.node!=null&&H+""=="[object process]"};$.exports.isNode=A,$.exports.platform=typeof process<"u"&&A(process)?"node":"browser";var C=$.exports.platform==="node"&&Zt;$.exports.isMainThread=$.exports.platform==="node"?(!C||C.isMainThread)&&!process.connected:typeof Window<"u",$.exports.cpus=$.exports.platform==="browser"?self.navigator.hardwareConcurrency:Zt.cpus().length})(s);var n=s.exports,a={},l;function c(){if(l)return a;l=1;function $(H,ve){var Y=this;if(!(this instanceof $))throw new SyntaxError("Constructor must be called with the new operator");if(typeof H!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Oe=[],de=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var R=function(X,ae){Oe.push(X),de.push(ae)};this.then=function(O,X){return new $(function(ae,Be){var qe=O?A(O,ae,Be):ae,pt=X?A(X,ae,Be):Be;R(qe,pt)},Y)};var fe=function(X){return Y.resolved=!0,Y.rejected=!1,Y.pending=!1,Oe.forEach(function(ae){ae(X)}),R=function(Be,qe){Be(X)},fe=x=function(){},Y},x=function(X){return Y.resolved=!1,Y.rejected=!0,Y.pending=!1,de.forEach(function(ae){ae(X)}),R=function(Be,qe){qe(X)},fe=x=function(){},Y};this.cancel=function(){return ve?ve.cancel():x(new C),Y},this.timeout=function(O){if(ve)ve.timeout(O);else{var X=setTimeout(function(){x(new T("Promise timed out after "+O+" ms"))},O);Y.always(function(){clearTimeout(X)})}return Y},H(function(O){fe(O)},function(O){x(O)})}function A(H,ve,Y){return function(Oe){try{var de=H(Oe);de&&typeof de.then=="function"&&typeof de.catch=="function"?de.then(ve,Y):ve(de)}catch(R){Y(R)}}}$.prototype.catch=function(H){return this.then(null,H)},$.prototype.always=function(H){return this.then(H,H)},$.all=function(H){return new $(function(ve,Y){var Oe=H.length,de=[];Oe?H.forEach(function(R,fe){R.then(function(x){de[fe]=x,Oe--,Oe==0&&ve(de)},function(x){Oe=0,Y(x)})}):ve(de)})},$.defer=function(){var H={};return H.promise=new $(function(ve,Y){H.resolve=ve,H.reject=Y}),H};function C(H){this.message=H||"promise cancelled",this.stack=new Error().stack}C.prototype=new Error,C.prototype.constructor=Error,C.prototype.name="CancellationError",$.CancellationError=C;function T(H){this.message=H||"timeout exceeded",this.stack=new Error().stack}return T.prototype=new Error,T.prototype.constructor=Error,T.prototype.name="TimeoutError",$.TimeoutError=T,a.Promise=$,a}function d($,A){(A==null||A>$.length)&&(A=$.length);for(var C=0,T=Array(A);C<A;C++)T[C]=$[C];return T}function g($,A){var C=typeof Symbol<"u"&&$[Symbol.iterator]||$["@@iterator"];if(!C){if(Array.isArray($)||(C=ee($))||A){C&&($=C);var T=0,H=function(){};return{s:H,n:function(){return T>=$.length?{done:!0}:{done:!1,value:$[T++]}},e:function(de){throw de},f:H}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ve,Y=!0,Oe=!1;return{s:function(){C=C.call($)},n:function(){var de=C.next();return Y=de.done,de},e:function(de){Oe=!0,ve=de},f:function(){try{Y||C.return==null||C.return()}finally{if(Oe)throw ve}}}}function p($,A,C){return(A=k(A))in $?Object.defineProperty($,A,{value:C,enumerable:!0,configurable:!0,writable:!0}):$[A]=C,$}function w($,A){var C=Object.keys($);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols($);A&&(T=T.filter(function(H){return Object.getOwnPropertyDescriptor($,H).enumerable})),C.push.apply(C,T)}return C}function _($){for(var A=1;A<arguments.length;A++){var C=arguments[A]!=null?arguments[A]:{};A%2?w(Object(C),!0).forEach(function(T){p($,T,C[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(C)):w(Object(C)).forEach(function(T){Object.defineProperty($,T,Object.getOwnPropertyDescriptor(C,T))})}return $}function E($,A){if(typeof $!="object"||!$)return $;var C=$[Symbol.toPrimitive];if(C!==void 0){var T=C.call($,A||"default");if(typeof T!="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(A==="string"?String:Number)($)}function k($){var A=E($,"string");return typeof A=="symbol"?A:A+""}function L($){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},L($)}function ee($,A){if($){if(typeof $=="string")return d($,A);var C={}.toString.call($).slice(8,-1);return C==="Object"&&$.constructor&&(C=$.constructor.name),C==="Map"||C==="Set"?Array.from($):C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)?d($,A):void 0}}var I={exports:{}},Q={},pe;function ue(){return pe||(pe=1,Q.validateOptions=function(A,C,T){if(A){var H=A?Object.keys(A):[],ve=H.find(function(Oe){return!C.includes(Oe)});if(ve)throw new Error('Object "'+T+'" contains an unknown option "'+ve+'"');var Y=C.find(function(Oe){return Object.prototype[Oe]&&!H.includes(Oe)});if(Y)throw new Error('Object "'+T+'" contains an inherited option "'+Y+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return A}},Q.workerOptsNames=["credentials","name","type"],Q.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],Q.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),Q}var Ce,F;function ne(){return F||(F=1,Ce=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Ce}var $e;function _e(){if($e)return I.exports;$e=1;var $=c(),A=$.Promise,C=n,T=ue(),H=T.validateOptions,ve=T.forkOptsNames,Y=T.workerThreadOptsNames,Oe=T.workerOptsNames,de="__workerpool-terminate__";function R(){var U=x();if(!U)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return U}function fe(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":L(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function x(){try{return Zt}catch(U){if(L(U)==="object"&&U!==null&&U.code==="MODULE_NOT_FOUND")return null;throw U}}function O(){if(C.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var U=new Blob([ne()],{type:"text/javascript"});return window.URL.createObjectURL(U)}else return __dirname+"/worker.js"}function X(U,K){if(K.workerType==="web")return fe(),ae(U,K.workerOpts,Worker);if(K.workerType==="thread")return P=R(),Be(U,P,K);if(K.workerType==="process"||!K.workerType)return qe(U,pt(K),Zt);if(C.platform==="browser")return fe(),ae(U,K.workerOpts,Worker);var P=x();return P?Be(U,P,K):qe(U,pt(K),Zt)}function ae(U,K,P){H(K,Oe,"workerOpts");var z=new P(U,K);return z.isBrowserWorker=!0,z.on=function(be,me){this.addEventListener(be,function(Se){me(Se.data)})},z.send=function(be,me){this.postMessage(be,me)},z}function Be(U,K,P){var z,be;H(P==null?void 0:P.workerThreadOpts,Y,"workerThreadOpts");var me=new K.Worker(U,_({stdout:(z=P==null?void 0:P.emitStdStreams)!==null&&z!==void 0?z:!1,stderr:(be=P==null?void 0:P.emitStdStreams)!==null&&be!==void 0?be:!1},P==null?void 0:P.workerThreadOpts));return me.isWorkerThread=!0,me.send=function(Se,oe){this.postMessage(Se,oe)},me.kill=function(){return this.terminate(),!0},me.disconnect=function(){this.terminate()},P!=null&&P.emitStdStreams&&(me.stdout.on("data",function(Se){return me.emit("stdout",Se)}),me.stderr.on("data",function(Se){return me.emit("stderr",Se)})),me}function qe(U,K,P){H(K.forkOpts,ve,"forkOpts");var z=P.fork(U,K.forkArgs,K.forkOpts),be=z.send;return z.send=function(me){return be.call(z,me)},K.emitStdStreams&&(z.stdout.on("data",function(me){return z.emit("stdout",me)}),z.stderr.on("data",function(me){return z.emit("stderr",me)})),z.isChildProcess=!0,z}function pt(U){U=U||{};var K=process.execArgv.join(" "),P=K.indexOf("--inspect")!==-1,z=K.indexOf("--debug-brk")!==-1,be=[];return P&&(be.push("--inspect="+U.debugPort),z&&be.push("--debug-brk")),process.execArgv.forEach(function(me){me.indexOf("--max-old-space-size")>-1&&be.push(me)}),Object.assign({},U,{forkArgs:U.forkArgs,forkOpts:Object.assign({},U.forkOpts,{execArgv:(U.forkOpts&&U.forkOpts.execArgv||[]).concat(be),stdio:U.emitStdStreams?"pipe":void 0})})}function rt(U){for(var K=new Error(""),P=Object.keys(U),z=0;z<P.length;z++)K[P[z]]=U[P[z]];return K}function nt(U,K){if(Object.keys(U.processing).length===1){var P=Object.values(U.processing)[0];P.options&&typeof P.options.on=="function"&&P.options.on(K)}}function Tt(U,K){var P=this,z=K||{};this.script=U||O(),this.worker=X(this.script,z),this.debugPort=z.debugPort,this.forkOpts=z.forkOpts,this.forkArgs=z.forkArgs,this.workerOpts=z.workerOpts,this.workerThreadOpts=z.workerThreadOpts,this.workerTerminateTimeout=z.workerTerminateTimeout,U||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(oe){nt(P,{stdout:oe.toString()})}),this.worker.on("stderr",function(oe){nt(P,{stderr:oe.toString()})}),this.worker.on("message",function(oe){if(!P.terminated)if(typeof oe=="string"&&oe==="ready")P.worker.ready=!0,me();else{var Ke=oe.id,Ne=P.processing[Ke];Ne!==void 0&&(oe.isEvent?Ne.options&&typeof Ne.options.on=="function"&&Ne.options.on(oe.payload):(delete P.processing[Ke],P.terminating===!0&&P.terminate(),oe.error?Ne.resolver.reject(rt(oe.error)):Ne.resolver.resolve(oe.result)))}});function be(oe){P.terminated=!0;for(var Ke in P.processing)P.processing[Ke]!==void 0&&P.processing[Ke].resolver.reject(oe);P.processing=Object.create(null)}function me(){var oe=g(P.requestQueue.splice(0)),Ke;try{for(oe.s();!(Ke=oe.n()).done;){var Ne=Ke.value;P.worker.send(Ne.message,Ne.transfer)}}catch(Hr){oe.e(Hr)}finally{oe.f()}}var Se=this.worker;this.worker.on("error",be),this.worker.on("exit",function(oe,Ke){var Ne=`Workerpool Worker terminated Unexpectedly
`;Ne+="    exitCode: `"+oe+"`\n",Ne+="    signalCode: `"+Ke+"`\n",Ne+="    workerpool.script: `"+P.script+"`\n",Ne+="    spawnArgs: `"+Se.spawnargs+"`\n",Ne+="    spawnfile: `"+Se.spawnfile+"`\n",Ne+="    stdout: `"+Se.stdout+"`\n",Ne+="    stderr: `"+Se.stderr+"`\n",be(new Error(Ne))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Tt.prototype.methods=function(){return this.exec("methods")},Tt.prototype.exec=function(U,K,P,z){P||(P=A.defer());var be=++this.lastId;this.processing[be]={id:be,resolver:P,options:z};var me={message:{id:be,method:U,params:K},transfer:z&&z.transfer};this.terminated?P.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(me.message,me.transfer):this.requestQueue.push(me);var Se=this;return P.promise.catch(function(oe){if(oe instanceof A.CancellationError||oe instanceof A.TimeoutError)return delete Se.processing[be],Se.terminateAndNotify(!0).then(function(){throw oe},function(Ke){throw Ke});throw oe})},Tt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Tt.prototype.terminate=function(U,K){var P=this;if(U){for(var z in this.processing)this.processing[z]!==void 0&&this.processing[z].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof K=="function"&&(this.terminationHandler=K),this.busy())this.terminating=!0;else{var be=function(oe){if(P.terminated=!0,P.cleaning=!1,P.worker!=null&&P.worker.removeAllListeners&&P.worker.removeAllListeners("message"),P.worker=null,P.terminating=!1,P.terminationHandler)P.terminationHandler(oe,P);else if(oe)throw oe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){be(new Error("worker already killed!"));return}var me=setTimeout(function(){P.worker&&P.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(me),P.worker&&(P.worker.killed=!0),be()}),this.worker.ready?this.worker.send(de):this.requestQueue.push({message:de}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");be()}},Tt.prototype.terminateAndNotify=function(U,K){var P=A.defer();return K&&P.promise.timeout(K),this.terminate(U,function(z,be){z?P.reject(z):P.resolve(be)}),P.promise},I.exports=Tt,I.exports._tryRequireWorkerThreads=x,I.exports._setupProcessWorker=qe,I.exports._setupBrowserWorker=ae,I.exports._setupWorkerThreadWorker=Be,I.exports.ensureWorkerThreads=R,I.exports}var ge,J;function ke(){if(J)return ge;J=1;var $=65535;ge=A;function A(){this.ports=Object.create(null),this.length=0}return A.prototype.nextAvailableStartingAt=function(C){for(;this.ports[C]===!0;)C++;if(C>=$)throw new Error("WorkerPool debug port limit reached: "+C+">= "+$);return this.ports[C]=!0,this.length++,C},A.prototype.releasePort=function(C){delete this.ports[C],this.length--},ge}var te,f;function v(){if(f)return te;f=1;var $=c(),A=$.Promise,C=_e(),T=n,H=ke(),ve=new H;function Y(x,O){typeof x=="string"?this.script=x||null:(this.script=null,O=x),this.workers=[],this.tasks=[],O=O||{},this.forkArgs=Object.freeze(O.forkArgs||[]),this.forkOpts=Object.freeze(O.forkOpts||{}),this.workerOpts=Object.freeze(O.workerOpts||{}),this.workerThreadOpts=Object.freeze(O.workerThreadOpts||{}),this.debugPortStart=O.debugPortStart||43210,this.nodeWorker=O.nodeWorker,this.workerType=O.workerType||O.nodeWorker||"auto",this.maxQueueSize=O.maxQueueSize||1/0,this.workerTerminateTimeout=O.workerTerminateTimeout||1e3,this.onCreateWorker=O.onCreateWorker||function(){return null},this.onTerminateWorker=O.onTerminateWorker||function(){return null},this.emitStdStreams=O.emitStdStreams||!1,O&&"maxWorkers"in O?(Oe(O.maxWorkers),this.maxWorkers=O.maxWorkers):this.maxWorkers=Math.max((T.cpus||4)-1,1),O&&"minWorkers"in O&&(O.minWorkers==="max"?this.minWorkers=this.maxWorkers:(de(O.minWorkers),this.minWorkers=O.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&C.ensureWorkerThreads()}Y.prototype.exec=function(x,O,X){if(O&&!Array.isArray(O))throw new TypeError('Array expected as argument "params"');if(typeof x=="string"){var ae=A.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Be=this.tasks,qe={method:x,params:O,resolver:ae,timeout:null,options:X};Be.push(qe);var pt=ae.promise.timeout;return ae.promise.timeout=function(nt){return Be.indexOf(qe)!==-1?(qe.timeout=nt,ae.promise):pt.call(ae.promise,nt)},this._next(),ae.promise}else{if(typeof x=="function")return this.exec("run",[String(x),O],X);throw new TypeError('Function or string expected as argument "method"')}},Y.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var x=this;return this.exec("methods").then(function(O){var X={};return O.forEach(function(ae){X[ae]=function(){return x.exec(ae,Array.prototype.slice.call(arguments))}}),X})},Y.prototype._next=function(){if(this.tasks.length>0){var x=this._getWorker();if(x){var O=this,X=this.tasks.shift();if(X.resolver.promise.pending){var ae=x.exec(X.method,X.params,X.resolver,X.options).then(O._boundNext).catch(function(){if(x.terminated)return O._removeWorker(x)}).then(function(){O._next()});typeof X.timeout=="number"&&ae.timeout(X.timeout)}else O._next()}}},Y.prototype._getWorker=function(){for(var x=this.workers,O=0;O<x.length;O++){var X=x[O];if(X.busy()===!1)return X}return x.length<this.maxWorkers?(X=this._createWorkerHandler(),x.push(X),X):null},Y.prototype._removeWorker=function(x){var O=this;return ve.releasePort(x.debugPort),this._removeWorkerFromList(x),this._ensureMinWorkers(),new A(function(X,ae){x.terminate(!1,function(Be){O.onTerminateWorker({forkArgs:x.forkArgs,forkOpts:x.forkOpts,workerThreadOpts:x.workerThreadOpts,script:x.script}),Be?ae(Be):X(x)})})},Y.prototype._removeWorkerFromList=function(x){var O=this.workers.indexOf(x);O!==-1&&this.workers.splice(O,1)},Y.prototype.terminate=function(x,O){var X=this;this.tasks.forEach(function(rt){rt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ae=function(nt){ve.releasePort(nt.debugPort),this._removeWorkerFromList(nt)},Be=ae.bind(this),qe=[],pt=this.workers.slice();return pt.forEach(function(rt){var nt=rt.terminateAndNotify(x,O).then(Be).always(function(){X.onTerminateWorker({forkArgs:rt.forkArgs,forkOpts:rt.forkOpts,workerThreadOpts:rt.workerThreadOpts,script:rt.script})});qe.push(nt)}),A.all(qe)},Y.prototype.stats=function(){var x=this.workers.length,O=this.workers.filter(function(X){return X.busy()}).length;return{totalWorkers:x,busyWorkers:O,idleWorkers:x-O,pendingTasks:this.tasks.length,activeTasks:O}},Y.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var x=this.workers.length;x<this.minWorkers;x++)this.workers.push(this._createWorkerHandler())},Y.prototype._createWorkerHandler=function(){var x=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new C(x.script||this.script,{forkArgs:x.forkArgs||this.forkArgs,forkOpts:x.forkOpts||this.forkOpts,workerOpts:x.workerOpts||this.workerOpts,workerThreadOpts:x.workerThreadOpts||this.workerThreadOpts,debugPort:ve.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Oe(x){if(!R(x)||!fe(x)||x<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function de(x){if(!R(x)||!fe(x)||x<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function R(x){return typeof x=="number"}function fe(x){return Math.round(x)==x}return te=Y,te}var B={},ie,Ee;function he(){if(Ee)return ie;Ee=1;function $(A,C){this.message=A,this.transfer=C}return ie=$,ie}var _t;function Xt(){return _t||(_t=1,function($){var A=he(),C="__workerpool-terminate__",T={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")T.on=function(R,fe){addEventListener(R,function(x){fe(x.data)})},T.send=function(R,fe){fe?postMessage(R,fe):postMessage(R)};else if(typeof process<"u"){var H;try{H=Zt}catch(R){if(!(L(R)==="object"&&R!==null&&R.code==="MODULE_NOT_FOUND"))throw R}if(H&&H.parentPort!==null){var ve=H.parentPort;T.send=ve.postMessage.bind(ve),T.on=ve.on.bind(ve),T.exit=process.exit.bind(process)}else T.on=process.on.bind(process),T.send=function(R){process.send(R)},T.on("disconnect",function(){process.exit(1)}),T.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Y(R){return Object.getOwnPropertyNames(R).reduce(function(fe,x){return Object.defineProperty(fe,x,{value:R[x],enumerable:!0})},{})}function Oe(R){return R&&typeof R.then=="function"&&typeof R.catch=="function"}T.methods={},T.methods.run=function(fe,x){var O=new Function("return ("+fe+").apply(null, arguments);");return O.apply(O,x)},T.methods.methods=function(){return Object.keys(T.methods)},T.terminationHandler=void 0,T.cleanupAndExit=function(R){var fe=function(){T.exit(R)};if(!T.terminationHandler)return fe();var x=T.terminationHandler(R);Oe(x)?x.then(fe,fe):fe()};var de=null;T.on("message",function(R){if(R===C)return T.cleanupAndExit(0);try{var fe=T.methods[R.method];if(fe){de=R.id;var x=fe.apply(fe,R.params);Oe(x)?x.then(function(O){O instanceof A?T.send({id:R.id,result:O.message,error:null},O.transfer):T.send({id:R.id,result:O,error:null}),de=null}).catch(function(O){T.send({id:R.id,result:null,error:Y(O)}),de=null}):(x instanceof A?T.send({id:R.id,result:x.message,error:null},x.transfer):T.send({id:R.id,result:x,error:null}),de=null)}else throw new Error('Unknown method "'+R.method+'"')}catch(O){T.send({id:R.id,result:null,error:Y(O)})}}),T.register=function(R,fe){if(R)for(var x in R)R.hasOwnProperty(x)&&(T.methods[x]=R[x]);fe&&(T.terminationHandler=fe.onTerminate),T.send("ready")},T.emit=function(R){if(de){if(R instanceof A){T.send({id:de,isEvent:!0,payload:R.message},R.transfer);return}T.send({id:de,isEvent:!0,payload:R})}},$.add=T.register,$.emit=T.emit}(B)),B}var ze=n.platform,kt=n.isMainThread,Pi=n.cpus;function tt($,A){var C=v();return new C($,A)}var Ct=i.pool=tt;function gr($,A){var C=Xt();C.add($,A)}var lt=i.worker=gr;function Me($){var A=Xt();A.emit($)}var Ur=i.workerEmit=Me,Ai=c(),Ue=Ai.Promise,Ci=i.Promise=Ue,Ti=i.Transfer=he(),Si=i.platform=ze,Mi=i.isMainThread=kt,Di=i.cpus=Pi;r.Promise=Ci,r.Transfer=Ti,r.cpus=Di,r.default=i,r.isMainThread=Mi,r.platform=Si,r.pool=Ct,r.worker=lt,r.workerEmit=Ur,Object.defineProperty(r,"__esModule",{value:!0})})})(fs,fs.exports);var Oo=fs.exports,ps={exports:{}};(function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ds<"u"&&ds,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(a){var l=typeof n<"u"&&n||typeof self<"u"&&self||typeof l<"u"&&l,c={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function d(f){return f&&DataView.prototype.isPrototypeOf(f)}if(c.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],p=ArrayBuffer.isView||function(f){return f&&g.indexOf(Object.prototype.toString.call(f))>-1};function w(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function _(f){return typeof f!="string"&&(f=String(f)),f}function E(f){var v={next:function(){var B=f.shift();return{done:B===void 0,value:B}}};return c.iterable&&(v[Symbol.iterator]=function(){return v}),v}function k(f){this.map={},f instanceof k?f.forEach(function(v,B){this.append(B,v)},this):Array.isArray(f)?f.forEach(function(v){this.append(v[0],v[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(v){this.append(v,f[v])},this)}k.prototype.append=function(f,v){f=w(f),v=_(v);var B=this.map[f];this.map[f]=B?B+", "+v:v},k.prototype.delete=function(f){delete this.map[w(f)]},k.prototype.get=function(f){return f=w(f),this.has(f)?this.map[f]:null},k.prototype.has=function(f){return this.map.hasOwnProperty(w(f))},k.prototype.set=function(f,v){this.map[w(f)]=_(v)},k.prototype.forEach=function(f,v){for(var B in this.map)this.map.hasOwnProperty(B)&&f.call(v,this.map[B],B,this)},k.prototype.keys=function(){var f=[];return this.forEach(function(v,B){f.push(B)}),E(f)},k.prototype.values=function(){var f=[];return this.forEach(function(v){f.push(v)}),E(f)},k.prototype.entries=function(){var f=[];return this.forEach(function(v,B){f.push([B,v])}),E(f)},c.iterable&&(k.prototype[Symbol.iterator]=k.prototype.entries);function L(f){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}function ee(f){return new Promise(function(v,B){f.onload=function(){v(f.result)},f.onerror=function(){B(f.error)}})}function I(f){var v=new FileReader,B=ee(v);return v.readAsArrayBuffer(f),B}function Q(f){var v=new FileReader,B=ee(v);return v.readAsText(f),B}function pe(f){for(var v=new Uint8Array(f),B=new Array(v.length),ie=0;ie<v.length;ie++)B[ie]=String.fromCharCode(v[ie]);return B.join("")}function ue(f){if(f.slice)return f.slice(0);var v=new Uint8Array(f.byteLength);return v.set(new Uint8Array(f)),v.buffer}function Ce(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:c.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:c.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():c.arrayBuffer&&c.blob&&d(f)?(this._bodyArrayBuffer=ue(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||p(f))?this._bodyArrayBuffer=ue(f):this._bodyText=f=Object.prototype.toString.call(f):this._bodyText="",this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var f=L(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=L(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(I)}),this.text=function(){var f=L(this);if(f)return f;if(this._bodyBlob)return Q(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(pe(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(_e)}),this.json=function(){return this.text().then(JSON.parse)},this}var F=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ne(f){var v=f.toUpperCase();return F.indexOf(v)>-1?v:f}function $e(f,v){if(!(this instanceof $e))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v=v||{};var B=v.body;if(f instanceof $e){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,v.headers||(this.headers=new k(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!B&&f._bodyInit!=null&&(B=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=v.credentials||this.credentials||"same-origin",(v.headers||!this.headers)&&(this.headers=new k(v.headers)),this.method=ne(v.method||this.method||"GET"),this.mode=v.mode||this.mode||null,this.signal=v.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&B)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(B),(this.method==="GET"||this.method==="HEAD")&&(v.cache==="no-store"||v.cache==="no-cache")){var ie=/([?&])_=[^&]*/;if(ie.test(this.url))this.url=this.url.replace(ie,"$1_="+new Date().getTime());else{var Ee=/\?/;this.url+=(Ee.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}$e.prototype.clone=function(){return new $e(this,{body:this._bodyInit})};function _e(f){var v=new FormData;return f.trim().split("&").forEach(function(B){if(B){var ie=B.split("="),Ee=ie.shift().replace(/\+/g," "),he=ie.join("=").replace(/\+/g," ");v.append(decodeURIComponent(Ee),decodeURIComponent(he))}}),v}function ge(f){var v=new k,B=f.replace(/\r?\n[\t ]+/g," ");return B.split("\r").map(function(ie){return ie.indexOf(`
`)===0?ie.substr(1,ie.length):ie}).forEach(function(ie){var Ee=ie.split(":"),he=Ee.shift().trim();if(he){var _t=Ee.join(":").trim();v.append(he,_t)}}),v}Ce.call($e.prototype);function J(f,v){if(!(this instanceof J))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v||(v={}),this.type="default",this.status=v.status===void 0?200:v.status,this.ok=this.status>=200&&this.status<300,this.statusText=v.statusText===void 0?"":""+v.statusText,this.headers=new k(v.headers),this.url=v.url||"",this._initBody(f)}Ce.call(J.prototype),J.prototype.clone=function(){return new J(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new k(this.headers),url:this.url})},J.error=function(){var f=new J(null,{status:0,statusText:""});return f.type="error",f};var ke=[301,302,303,307,308];J.redirect=function(f,v){if(ke.indexOf(v)===-1)throw new RangeError("Invalid status code");return new J(null,{status:v,headers:{location:f}})},a.DOMException=l.DOMException;try{new a.DOMException}catch{a.DOMException=function(v,B){this.message=v,this.name=B;var ie=Error(v);this.stack=ie.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function te(f,v){return new Promise(function(B,ie){var Ee=new $e(f,v);if(Ee.signal&&Ee.signal.aborted)return ie(new a.DOMException("Aborted","AbortError"));var he=new XMLHttpRequest;function _t(){he.abort()}he.onload=function(){var ze={status:he.status,statusText:he.statusText,headers:ge(he.getAllResponseHeaders()||"")};ze.url="responseURL"in he?he.responseURL:ze.headers.get("X-Request-URL");var kt="response"in he?he.response:he.responseText;setTimeout(function(){B(new J(kt,ze))},0)},he.onerror=function(){setTimeout(function(){ie(new TypeError("Network request failed"))},0)},he.ontimeout=function(){setTimeout(function(){ie(new TypeError("Network request failed"))},0)},he.onabort=function(){setTimeout(function(){ie(new a.DOMException("Aborted","AbortError"))},0)};function Xt(ze){try{return ze===""&&l.location.href?l.location.href:ze}catch{return ze}}he.open(Ee.method,Xt(Ee.url),!0),Ee.credentials==="include"?he.withCredentials=!0:Ee.credentials==="omit"&&(he.withCredentials=!1),"responseType"in he&&(c.blob?he.responseType="blob":c.arrayBuffer&&Ee.headers.get("Content-Type")&&Ee.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(he.responseType="arraybuffer")),v&&typeof v.headers=="object"&&!(v.headers instanceof k)?Object.getOwnPropertyNames(v.headers).forEach(function(ze){he.setRequestHeader(ze,_(v.headers[ze]))}):Ee.headers.forEach(function(ze,kt){he.setRequestHeader(kt,ze)}),Ee.signal&&(Ee.signal.addEventListener("abort",_t),he.onreadystatechange=function(){he.readyState===4&&Ee.signal.removeEventListener("abort",_t)}),he.send(typeof Ee._bodyInit>"u"?null:Ee._bodyInit)})}return te.polyfill=!0,l.fetch||(l.fetch=te,l.Headers=k,l.Request=$e,l.Response=J),a.Headers=k,a.Request=$e,a.Response=J,a.fetch=te,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(ps,ps.exports);var Po=ps.exports;const Ao=_o(Po);var Co={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},To=`\r
`,So="\uFEFF",hi=t=>Object.assign({},Co,t);class Mo extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let Do=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class Lo extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}let Fo=class extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}};var pr=t=>t,st=t=>t,kr=pr,di=pr,ir=pr,cn=pr,un=pr,Ro=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},jo=t=>cn(typeof t=="object"?t.key:t),Bo=t=>un(typeof t=="object"?t.displayLabel:t),No=(t,...e)=>e.reduce((r,i)=>i(r),t),Uo=t=>e=>t.useBom?di(st(e)+So):e,Ho=t=>e=>t.showTitle?As(di(st(e)+t.title))(ir("")):e,As=t=>e=>di(st(t)+st(e)+To),Wn=t=>(e,r)=>Wo(t)(ir(st(e)+st(r))),Wo=t=>e=>pr(st(e)+t.fieldSeparator),Io=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new Do("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=ir("");for(let s=0;s<e.length;s++){const n=Bo(e[s]);i=Wn(t)(i,In(t,st(n)))}return i=ir(st(i).slice(0,-1)),As(r)(i)},Vo=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=ir("");for(let l=0;l<e.length;l++){const c=jo(e[l]),d=r[n][st(c)];a=Wn(t)(a,In(t,d))}a=ir(st(a).slice(0,-1)),s=As(s)(a)}return s},qo=t=>+t===t&&(!isFinite(t)||!!(t%1)),zo=(t,e)=>{if(qo(e)){if(t.decimalSeparator==="locale")return kr(e.toLocaleString());if(t.decimalSeparator)return kr(e.toString().replace(".",t.decimalSeparator))}return kr(e.toString())},Jr=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+Ro(e,t.quoteCharacter)+t.quoteCharacter),kr(r)},Yo=(t,e)=>{const r=e?"true":"false";return kr(t.boolDisplay[r])},Go=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?Jr(t,t.replaceUndefinedWith+""):e===null?Jr(t,"null"):Jr(t,""),In=(t,e)=>{if(typeof e=="number")return zo(t,e);if(typeof e=="string")return Jr(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Yo(t,e);if(e===null||typeof e>"u")return Go(t,e);throw new Fo(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Xo=t=>e=>{const r=hi(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=No(di(""),Uo(r),Ho(r),Io(r,i),Vo(r,i,e));if(st(s).length<1)throw new Mo("Output is empty. Is your data formatted correctly?");return s},Qo=t=>e=>{const r=hi(t),i=st(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Ko=t=>e=>{if(!window)throw new Lo("Downloading only supported in a browser environment.");const r=Qo(t)(e),i=hi(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function De(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function ut(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function hn(t,e){const r=De(t);return isNaN(e)?ut(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function Vn(t,e){const r=De(t);if(isNaN(e))return ut(t,NaN);if(!e)return r;const i=r.getDate(),s=ut(t,r.getTime());s.setMonth(r.getMonth()+e+1,0);const n=s.getDate();return i>=n?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}function Zo(t,e){const r=+De(t);return ut(t,r+e)}const qn=6048e5,Jo=864e5,el=36e5;function tl(t,e){return Zo(t,e*el)}let rl={};function Lr(){return rl}function sr(t,e){var l,c,d,g;const r=Lr(),i=(e==null?void 0:e.weekStartsOn)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??r.weekStartsOn??((g=(d=r.locale)==null?void 0:d.options)==null?void 0:g.weekStartsOn)??0,s=De(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ti(t){return sr(t,{weekStartsOn:1})}function zn(t){const e=De(t),r=e.getFullYear(),i=ut(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=ti(i),n=ut(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=ti(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function ms(t){const e=De(t);return e.setHours(0,0,0,0),e}function dn(t){const e=De(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function il(t,e){const r=ms(t),i=ms(e),s=+r-dn(r),n=+i-dn(i);return Math.round((s-n)/Jo)}function sl(t){const e=zn(t),r=ut(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),ti(r)}function nl(t,e){return Vn(t,e*12)}function al(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Yn(t){if(!al(t)&&typeof t!="number")return!1;const e=De(t);return!isNaN(Number(e))}function ol(t){const e=De(t);return e.setHours(23,59,59,999),e}function ll(t){const e=De(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function cl(t){const e=De(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ul(t){const e=De(t),r=e.getFullYear();return e.setFullYear(r+1,0,0),e.setHours(23,59,59,999),e}function Gn(t){const e=De(t),r=ut(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}function hl(t){const e=De(t);return e.setMinutes(59,59,999),e}function dl(t,e){var l,c;const r=Lr(),i=r.weekStartsOn??((c=(l=r.locale)==null?void 0:l.options)==null?void 0:c.weekStartsOn)??0,s=De(t),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const fl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},pl=(t,e,r)=>{let i;const s=fl[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function ss(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const ml={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gl={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},vl={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bl={date:ss({formats:ml,defaultWidth:"full"}),time:ss({formats:gl,defaultWidth:"full"}),dateTime:ss({formats:vl,defaultWidth:"full"})},yl={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},wl=(t,e,r,i)=>yl[t];function wr(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const xl={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_l={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},kl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},$l={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},El={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ol={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Pl=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Al={ordinalNumber:Pl,era:wr({values:xl,defaultWidth:"wide"}),quarter:wr({values:_l,defaultWidth:"wide",argumentCallback:t=>t-1}),month:wr({values:kl,defaultWidth:"wide"}),day:wr({values:$l,defaultWidth:"wide"}),dayPeriod:wr({values:El,defaultWidth:"wide",formattingValues:Ol,defaultFormattingWidth:"wide"})};function xr(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(l)?Tl(l,p=>p.test(a)):Cl(l,p=>p.test(a));let d;d=t.valueCallback?t.valueCallback(c):c,d=r.valueCallback?r.valueCallback(d):d;const g=e.slice(a.length);return{value:d,rest:g}}}function Cl(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function Tl(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Sl(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const Ml=/^(\d+)(th|st|nd|rd)?/i,Dl=/\d+/i,Ll={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fl={any:[/^b/i,/^(a|c)/i]},Rl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},jl={any:[/1/i,/2/i,/3/i,/4/i]},Bl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ul={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Hl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Il={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Vl={ordinalNumber:Sl({matchPattern:Ml,parsePattern:Dl,valueCallback:t=>parseInt(t,10)}),era:xr({matchPatterns:Ll,defaultMatchWidth:"wide",parsePatterns:Fl,defaultParseWidth:"any"}),quarter:xr({matchPatterns:Rl,defaultMatchWidth:"wide",parsePatterns:jl,defaultParseWidth:"any",valueCallback:t=>t+1}),month:xr({matchPatterns:Bl,defaultMatchWidth:"wide",parsePatterns:Nl,defaultParseWidth:"any"}),day:xr({matchPatterns:Ul,defaultMatchWidth:"wide",parsePatterns:Hl,defaultParseWidth:"any"}),dayPeriod:xr({matchPatterns:Wl,defaultMatchWidth:"any",parsePatterns:Il,defaultParseWidth:"any"})},ql={code:"en-US",formatDistance:pl,formatLong:bl,formatRelative:wl,localize:Al,match:Vl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function zl(t){const e=De(t);return il(e,Gn(e))+1}function Yl(t){const e=De(t),r=+ti(e)-+sl(e);return Math.round(r/qn)+1}function Xn(t,e){var g,p,w,_;const r=De(t),i=r.getFullYear(),s=Lr(),n=(e==null?void 0:e.firstWeekContainsDate)??((p=(g=e==null?void 0:e.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((_=(w=s.locale)==null?void 0:w.options)==null?void 0:_.firstWeekContainsDate)??1,a=ut(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=sr(a,e),c=ut(t,0);c.setFullYear(i,0,n),c.setHours(0,0,0,0);const d=sr(c,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function Gl(t,e){var l,c,d,g;const r=Lr(),i=(e==null?void 0:e.firstWeekContainsDate)??((c=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:c.firstWeekContainsDate)??r.firstWeekContainsDate??((g=(d=r.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??1,s=Xn(t,e),n=ut(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),sr(n,e)}function Xl(t,e){const r=De(t),i=+sr(r,e)-+Gl(r,e);return Math.round(i/qn)+1}function ce(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Mt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return ce(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ce(r+1,2)},d(t,e){return ce(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ce(t.getHours()%12||12,e.length)},H(t,e){return ce(t.getHours(),e.length)},m(t,e){return ce(t.getMinutes(),e.length)},s(t,e){return ce(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return ce(s,e.length)}},Jt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fn={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Mt.y(t,e)},Y:function(t,e,r,i){const s=Xn(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return ce(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):ce(n,e.length)},R:function(t,e){const r=zn(t);return ce(r,e.length)},u:function(t,e){const r=t.getFullYear();return ce(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ce(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ce(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Mt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ce(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Xl(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):ce(s,e.length)},I:function(t,e,r){const i=Yl(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):ce(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Mt.d(t,e)},D:function(t,e,r){const i=zl(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ce(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return ce(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return ce(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return ce(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=Jt.noon:i===0?s=Jt.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=Jt.evening:i>=12?s=Jt.afternoon:i>=4?s=Jt.morning:s=Jt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Mt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Mt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ce(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):ce(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Mt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Mt.s(t,e)},S:function(t,e){return Mt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return mn(i);case"XXXX":case"XX":return Wt(i);case"XXXXX":case"XXX":default:return Wt(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return mn(i);case"xxxx":case"xx":return Wt(i);case"xxxxx":case"xxx":default:return Wt(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+pn(i,":");case"OOOO":default:return"GMT"+Wt(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+pn(i,":");case"zzzz":default:return"GMT"+Wt(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return ce(i,e.length)},T:function(t,e,r){const i=t.getTime();return ce(i,e.length)}};function pn(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+ce(n,2)}function mn(t,e){return t%60===0?(t>0?"-":"+")+ce(Math.abs(t)/60,2):Wt(t,e)}function Wt(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=ce(Math.trunc(i/60),2),n=ce(i%60,2);return r+s+e+n}const gn=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Qn=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ql=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return gn(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",gn(i,e)).replace("{{time}}",Qn(s,e))},Kl={p:Qn,P:Ql},Zl=/^D+$/,Jl=/^Y+$/,ec=["D","DD","YY","YYYY"];function tc(t){return Zl.test(t)}function rc(t){return Jl.test(t)}function ic(t,e,r){const i=sc(t,e,r);if(console.warn(i),ec.includes(t))throw new RangeError(i)}function sc(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const nc=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ac=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oc=/^'([^]*?)'?$/,lc=/''/g,cc=/[a-zA-Z]/;function Kn(t,e,r){var g,p,w,_;const i=Lr(),s=i.locale??ql,n=i.firstWeekContainsDate??((p=(g=i.locale)==null?void 0:g.options)==null?void 0:p.firstWeekContainsDate)??1,a=i.weekStartsOn??((_=(w=i.locale)==null?void 0:w.options)==null?void 0:_.weekStartsOn)??0,l=De(t);if(!Yn(l))throw new RangeError("Invalid time value");let c=e.match(ac).map(E=>{const k=E[0];if(k==="p"||k==="P"){const L=Kl[k];return L(E,s.formatLong)}return E}).join("").match(nc).map(E=>{if(E==="''")return{isToken:!1,value:"'"};const k=E[0];if(k==="'")return{isToken:!1,value:uc(E)};if(fn[k])return{isToken:!0,value:E};if(k.match(cc))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:E}});s.localize.preprocessor&&(c=s.localize.preprocessor(l,c));const d={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return c.map(E=>{if(!E.isToken)return E.value;const k=E.value;(rc(k)||tc(k))&&ic(k,e,String(t));const L=fn[k[0]];return L(l,k,s.localize,d)}).join("")}function uc(t){const e=t.match(oc);return e?e[1].replace(lc,"'"):t}function Cs(t,e){const r=De(t);if(!Yn(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const c=ce(r.getDate(),2),d=ce(r.getMonth()+1,2);n=`${ce(r.getFullYear(),4)}${a}${d}${a}${c}`}if(s!=="date"){const c=ce(r.getHours(),2),d=ce(r.getMinutes(),2),g=ce(r.getSeconds(),2);n=`${n}${n===""?"":" "}${c}${l}${d}${l}${g}`}return n}function hc(t){const e=De(t);return e.setMinutes(0,0,0),e}var Fr=class{get pool(){return this._pool||(this._pool=Oo.pool({})),this._pool}},ot=class{constructor(t,e){this.parent=t,this._initial=e,this._listeners={},this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},dc=class extends ot{constructor(t,e){super(t,e),this.parent=t,this.framesByTimestamp=new Map,this.framesByMs=new Map,this.framesByIndex=new Map,this.localTimeline=[],this._onChangeListeners=new Map;const r=this.parent.frames[0].timestamp;this.frames=this.parent.frames.map((i,s)=>{const n=i.timestamp-r,a={...i,index:s,ms:n};return this.framesByIndex.set(s,a),this.framesByMs.set(a.ms,a),this.framesByTimestamp.set(a.timestamp,a),this.localTimeline.push(a.ms),a}),this._currentFrame=this.frames[0],console.log("timeline",this.localTimeline)}get duration(){return this.parent.duration}get frameCount(){return this.frames.length}set currentFrame(t){t.ms!==this._currentFrame.ms&&(this._currentFrame=t,this._onChangeListeners.forEach(e=>e(this._currentFrame)),this.parent.pixels=t.pixels)}get currentFrame(){return this._currentFrame}get nextFrame(){const e=this.currentFrame.index+1;if(e<=this.frameCount)return this.framesByIndex.get(e)}get nextFrameTimeoutDuration(){if(this.nextFrame!==void 0)return this.nextFrame.ms-this.currentFrame.ms}addChangeListener(t,e){this._onChangeListeners.set(t,e)}removeChangeListener(t){this._onChangeListeners.delete(t)}getNextFrameToMs(t){const e=this.localTimeline.find(r=>r>t);if(e!==void 0)return this.framesByMs.get(e)}getPreviousFrameToMs(t){const e=this.localTimeline.reverse().find(r=>r<t);if(e!==void 0)return this.framesByMs.get(e)}validate(t){return t<0?0:t<=this.duration?t:this.duration}afterSetEffect(t){if(t!==this.currentFrame.ms)if(this.localTimeline.includes(t)){const e=this.framesByMs.get(t);this.currentFrame.ms!==e.ms&&(this.currentFrame=e)}else{const e=this.getPreviousFrameToMs(t);e&&e.ms!==this.currentFrame.ms&&(this.currentFrame=e)}}setMs(t){this.value=t}setPercentage(t){const e=Math.min(Math.max(t,0),100),r=this.duration/100*e;this.value=Math.floor(r),console.log("Nastavil jsem čas na",this.value)}goToNextFrame(){this.nextFrame&&(this.value=this.nextFrame.ms)}static formatDuration(t){const e=t%1e3,r=(t-e)%(1e3*60);return[(t-e-r)/(1e3*60*60),r,e].join(":")}play(){this.timer=setInterval(()=>{this.goToNextFrame()},this.nextFrameTimeoutDuration)}pause(){clearInterval(this.timer)}stop(){clearInterval(this.timer),this.setMs(0)}},Zn=class extends ot{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Jn=class extends Fr{constructor(t,e,r,i,s,n,a,l,c,d,g){super(),this.frames=[],this.signature="unknown",this.version=-1,this.streamCount=-1,this.fileDataType=-1,this.unit=-1,this._isHover=!1,this.root=null,this._mounted=!1,this._onHover=void 0,this._onClick=void 0,this.group=t,this.id=this.formatId(e),this.url=e,this.thermalUrl=e,this.visibleUrl=g,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=r,this.height=i,this.timestamp=n,this.duration=a,this.min=l,this.max=c,this.frameCount=d,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get isHover(){return this._isHover}set isHover(t){this._isHover=t}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(t){this._mounted=t}get pixels(){return this._pixels}set pixels(t){this._pixels=t,this.onSetPixels(t)}attachToDom(t){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=t,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const e=this.width,r=this.root.clientWidth,i=e/r,s=Math.round(t.offsetX*i),n=Math.round(t.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:n}),this._onHover&&this._onHover(t,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=t=>{this._onClick&&this._onClick(t,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(t){this.attachToDom(t)}unmountFromDom(){this.detachFromDom()}draw(){console.log("drawing",this.fileName,this.group.id),this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(t){console.log(t),this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(t){this.cursorValue.recalculateFromCursor(t),t!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(t.x,t.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(t,e){const r=e*this.width+t;return this.pixels[r]}recieveRange(t){t!==void 0&&this.draw()}reset(){}recieveOpacity(t){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=t)}setHoverHandler(t){this._onHover=t}setHoverCursor(t){this.root&&this.root.style.cursor!==t&&(this.root.style.cursor=t)}setClickHandler(t=void 0){this._onClick=t}},fc=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=hi({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(s=>{const{pixels:n,...a}=s;return console.log(n),a}),i=Xo(e)(r);Ko(e)(i)}},fi=class{constructor(t){this.instance=t,this._mounted=!1}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},gt=class gs{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=gs.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=gs.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},ea=class extends fi{constructor(t,e){super(t),this._url=e,this.container=gt.createVisibleLayer(),this._url&&(this.image=gt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(t){this._url=t,this.image&&t&&(this.image.src=t)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},ta=class extends fi{constructor(t){super(t),this._opacity=1,this.container=gt.createCanvasContainer(),this.canvas=gt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,console.log(this.instance.width,this.instance),this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(t){this._opacity=Math.max(Math.min(t,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}draw(){const t=this.to-this.from;for(let e=0;e<=this.width;e++)for(let r=0;r<=this.height;r++){const i=e+r*this.width;let s=this.pixels[i];s<this.from&&(s=this.from),s>this.to&&(s=this.to);const a=(s-this.from)/t,l=Math.round(255*a),c=this.getPalette()[l];this.context.fillStyle=c,this.context.fillRect(e,r,1,1)}}exportAsPng(){const t=this.canvas.toDataURL(),e=document.createElement("a");e.download=this.instance.fileName.replace(".lrc","_exported.png"),e.href=t,e.click()}},ra=class extends fi{constructor(t){super(t),this._show=!1,this._hover=!1,this.layerRoot=gt.createCursorLayerRoot(),this.center=gt.createCursorLayerCenter(),this.axisX=gt.createCursorLayerX(),this.axisY=gt.createCursorLayerY(),this.label=gt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(t){this._show=t,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(t){this._hover=t,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(t,e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(t*i),n=Math.round(e*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),t>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),e>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${r.toFixed(3)} °C`}}setValue(t){t&&(this.label.innerHTML=`${t.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(t){return`${t}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},ia=class extends fi{constructor(t){super(t),this.container=gt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},pc=class extends Jn{constructor(t,e){super(e,t.url,t.width,t.height,t.pixels,t.timestamp,t.duration,t.min,t.max,t.frameCount,t.visibleUrl),this.source=t,this.group=e}get dataType(){return this.source.fileDataType}getPixelsForHistogram(){return this.source.pixelsForHistogram}postInit(){return this.signature=this.source.signature,this.unit=this.source.unit,this.version=this.source.version,this.streamCount=this.source.streamCount,this.fileDataType=this.source.fileDataType,this.frames=this.source.frames,this.timeline=new dc(this,0),this.pixels=this.timeline.currentFrame.pixels,this.canvasLayer=new ta(this),this.visibleLayer=new ea(this,this.visibleUrl),this.cursorLayer=new ra(this),this.listenerLayer=new ia(this),this.cursorValue=new Zn(this,void 0),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){if(console.log("setting pixels",t),this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const e=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(e)}}get unitHuman(){return this.unit===0?"none":this.unit===1?"intensity":this.unit===2?"°C":this.unit===3?"Kelvin":"unit not specified"}get dataTypeHuman(){return this.dataType===0?"Float16":this.dataType===1?"Float32":this.dataType===2?"Int16":"error parsing data type"}get export(){if(!this._export){const t=new fc(this);this._export=t}return this._export}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){this.export.thermalDataAsCsv()}},Vt=class extends Fr{constructor(t,e,r,i,s,n,a,l,c,d,g,p,w,_,E){super(),this.url=t,this.signature=e,this.version=r,this.streamCount=i,this.fileDataType=s,this.unit=n,this.width=a,this.height=l,this.timestamp=c,this.pixels=d,this.min=g,this.max=p,this.frameCount=w,this.frames=_,this.visibleUrl=E,this.fileName=this.url.substring(this.url.lastIndexOf("/")+1);let k=[];this.frames.forEach(L=>{k=k.concat(L.pixels)}),this.pixelsForHistogram=k,this.duration=this.frames.length===0?0:this.frames[this.frames.length-1].timestamp-this.frames[0].timestamp}static async fromUrl(t,e){try{return await vs.fromUrl(t,e)}catch{return null}}static async fromUrlWithErrors(t,e){return await vs.fromUrl(t,e)}createInstance(t){const e=new pc(this,t);return e.postInit(),e}},mc=class{constructor(t,e,r){this.url=t,this.blob=e,this.visibleUrl=r,this.isValidTimestamp=i=>Number.isInteger(i),this.isValidWidth=i=>Number.isInteger(i),this.isValidHeight=i=>Number.isInteger(i),this.isValidPixels=i=>i!==void 0&&i.length===this.width*this.height,this.isValidMin=i=>i!==void 0,this.isValidMax=i=>i!==void 0,this.isValidFrameCount=i=>Number.isInteger(i),this.isValidFrames=i=>i===void 0||this.frameCount===void 0?!1:i.length===this.frameCount,this.errors=[]}async init(){const t=await this.blob.arrayBuffer();this.data=new DataView(t);const e=t.slice(25);return this.frameSubset=e,this}async parse(){return await this.init(),await this.parseFile(),this.getThermalFile()}parseTimestamp(){const t=this.getTimestamp();this.isValidTimestamp(t)||this.logValidationError("timestamp",t),this.timestamp=t}parseWidth(){const t=this.getWidth();this.isValidWidth(t)||this.logValidationError("width",t),this.width=t}parseHeight(){const t=this.getHeight();this.isValidHeight(t)||this.logValidationError("height",t),this.height=t}async parsePixels(){const t=this.getPixels();this.pixels=t}parseMin(){const t=this.getMin();this.isValidMin(t)||this.logValidationError("min",t),this.min=t}parseMax(){const t=this.getMax();this.isValidMax(t)||this.logValidationError("max",t),this.max=t}parseFrameCount(){const t=this.getFrameCount();this.isValidFrameCount(t)||this.logValidationError("frameCount",t),this.frameCount=t}parseFrames(){const t=this.getFrames();this.isValidFrames(t)||this.logValidationError("frames",t.toString()),this.frames=t}logError(t){console.error(t),this.errors.push(t)}logValidationError(t,e){const r=`Invalid ${t} of ${this.url}: '${e.toString()}'`;this.logError(r)}getErrors(){return this.errors}encodeErrors(){return this.errors.join("+|+")}static decodeErrors(t){return t.split("+|+")}},Ge=class{static readDotnetTimestamp(t,e){const r=e.getBigInt64(t,!0),i=62135596800000n,s=10000n,n=24n*60n*60n*1000n*s,a=0x4000000000000000n,l=0x8000000000000000n;let d=r&0x3FFFFFFFFFFFFFFFn;r&l&&(d>a-n&&(d-=a),d<0&&(d+=n));const p=d/s-i;return Number(p)}static readFloat32(t,e){return e.getFloat32(t,!0)}static read8bNumber(t,e){return e.getUint8(t)}static readTemperatureArray(t,e,r,i,s){const n=e.buffer.slice(t);if(r===0){const a=new Uint16Array(n),l=Math.abs(i-s),c=65535;return[...a].map(d=>{const g=d/c;return i+l*g})}else if(r===1)return[...new Float32Array(n)];return[]}},gc=class{constructor(t,e,r,i,s,n,a){this.arrayBuffer=t,this.width=e,this.height=r,this.dataType=i,this.frameCount=s,this.frameByteSize=n,this.pixelByteSize=a}parseFrame(t){if(!Number.isInteger(t))throw new Error(`The frame index ${t} is invalid!`);const e=t*this.frameByteSize,r=e+this.frameByteSize,i=this.arrayBuffer.slice(e,r),s=new DataView(i),n=Ge.readFloat32(8,s),a=Ge.readFloat32(12,s);return{timestamp:Ge.readDotnetTimestamp(0,s),min:n,max:a,modeMinInKelvin:Ge.readFloat32(16,s),modeMaxInKelvin:Ge.readFloat32(20,s),emissivity:Ge.readFloat32(24,s),reflectedTemperaatureInKelvin:Ge.readFloat32(28,s),distance:Ge.readFloat32(32,s),atmosphereTemperatureInKelvin:Ge.readFloat32(36,s),relativeHumidity:Ge.readFloat32(40,s),tau:Ge.readFloat32(44,s),windowTemperature:Ge.readFloat32(48,s),windowTransmissivity:Ge.readFloat32(52,s),isTauSet:Ge.read8bNumber(53,s),pixels:Ge.readTemperatureArray(57,s,this.dataType,n,a)}}},vc=class extends mc{constructor(){super(...arguments),this.isValidSignature=t=>t==="LRC\0",this.isValidVersion=t=>t===2,this.isStreamCountValid=t=>t===1,this.isDataTypeValid=t=>t===void 0?!1:[0,1,2].includes(t),this.isValidUnit=t=>t===2}async parseFile(){await this.parseSignature(),this.parseVersion(),this.parseDataType(),this.parseStreamCount(),this.parseTimestamp(),this.parseUnit(),this.parseWidth(),this.parseHeight(),this.parseFrameCount(),this.parseFrames(),this.parseMin(),this.parseMax(),await this.parsePixels()}async parseSignature(){const t=await this.readString(0,4);this.isValidSignature(t)||this.logValidationError("signature",t),this._signature=t}parseVersion(){const t=this.read8bNumber(4);this.isValidVersion(t)||this.logValidationError("version",t),this._version=t}parseStreamCount(){const t=this.read8bNumber(14);this.isStreamCountValid(t)||this.logValidationError("streamCount",t),this._streamCount=t}parseDataType(){const t=this.read8bNumber(15);this.isDataTypeValid(t)||this.logValidationError("fileDataType",t),this._fileDataType=t,this._pixelByteLength=t===0?2:4}get pixelByteLength(){return this._pixelByteLength}parseUnit(){const t=this.read8bNumber(16);this.isValidUnit(t)||this.logValidationError("unit",t),this._unit=t}getFrameCount(){return this.getNumberOfFrames()}getMin(){return this.frames.reduce((t,e)=>e.min<t?e.min:t,1/0)}getMax(){return this.frames.reduce((t,e)=>e.max>t?e.max:t,-1/0)}getWidth(){return this.read16bNumber(17)}getHeight(){return this.read16bNumber(19)}getTimestamp(){return Ge.readDotnetTimestamp(5,this.data)}getFrameSize(){if(this._fileDataType===void 0||this.width===void 0||this.height===void 0||this.pixelByteLength===void 0)throw new Error("Trying to read frame size before necessary attributes are known");return 57+this.width*this.height*this.pixelByteLength}getNumberOfFrames(){const t=this.getFrameSize();return this.frameSubset.byteLength/t}getFrames(){const t=[],e=new gc(this.frameSubset,this.width,this.height,this._fileDataType,this.frameCount,this.getFrameSize(),this.pixelByteLength);for(let r=0;r<this.frameCount;r++)t.push(e.parseFrame(r));return t}async readTemperatureArray(t){const e=(await this.blob.arrayBuffer()).slice(t,t+this.width*this.height*this.pixelByteLength);if(this._fileDataType===0){const r=new Uint16Array(e),i=Math.abs(this.min-this.max),s=65535;return[...r].map(n=>{const a=n/s;return this.min+i*a})}else if(this._fileDataType===1)return[...new Float32Array(e)];return[]}getPixels(){return this.frames&&this.frames.length>0?this.frames[0].pixels:[]}isValid(){return this.errors.length===0&&this.isValidSignature(this._signature)&&this.isStreamCountValid(this._streamCount)&&this.isDataTypeValid(this._fileDataType)&&this.isValidVersion(this._version)&&this.isValidUnit(this._unit)&&this.isValidTimestamp(this.timestamp)&&this.isValidWidth(this.width)&&this.isValidHeight(this.height)&&this.isValidPixels(this.pixels)&&this.isValidMin(this.min)&&this.isValidMax(this.max)&&this.isValidFrameCount(this.frameCount)}getThermalFile(){if(!this.isValid())throw new Error(this.encodeErrors());return new Vt(this.url,this._signature,this._version,this._streamCount,this._fileDataType,this._unit,this.width,this.height,this.timestamp,this.pixels,this.min,this.max,this.frameCount,this.frames,this.visibleUrl)}async readString(t,e){return await this.blob.slice(t,e).text()}read16bNumber(t){return this.data.getUint16(t,!0)}read8bNumber(t){return this.data.getUint8(t)}},vs=class bs{constructor(){}static async fromUrl(e,r){const i=new bs;return i.thermalUrl=e,i.visibleUrl=r,await i.loadFromUrl()}async loadFromUrl(){const e=await Ao(this.thermalUrl);if(this.blob=await e.blob(),e.status!==200)throw new Error(`There was an error loading '${this.thermalUrl}'`);return this.parser=this.getParserInstance(),await this.parser.parse()}static async fromFile(e){const r=new bs;return r.thermalUrl=e.name,r.blob=e,await r.loadFromBlob()}async loadFromBlob(){return this.parser=this.getParserInstance(),await this.parser.parse()}getParserInstance(){if(this.thermalUrl.endsWith(".lrc"))return new vc(this.thermalUrl,this.blob,this.visibleUrl);throw new Error("No parser found!")}},bc=class extends ot{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},yc=class extends ot{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e);console.log(this.parent.histogram.value);const i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},wc=class extends ot{constructor(){super(...arguments),this._hover=this.value!==void 0}get hover(){return this._hover}validate(t){return t}afterSetEffect(t){this._hover=this.value!==void 0,this.parent.instances.forEveryInstance(e=>e.recieveCursorPosition(t)),this.parent.files.forEveryInstance(e=>e.recieveCursorPosition(t))}recieveCursorPosition(t){this.value=t}},xc=class extends ot{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(t,e,r){this.parent.registry.fetcher.request(t,e,(i,s)=>{if(i instanceof Vt){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(t,e){this._requestedRemovals.has(t)?e&&this._requestedRemovals.get(t).callbacks.push(e):this._requestedRemovals.set(t,{url:t,callbacks:e?[e]:[]})}async cleanup(){const t=Object.values(this._requestedRemovals).map(e=>e.url);this.value=this.value.filter(e=>{var i;return t.includes(e.url)?((i=this._requestedRemovals.get(e.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(t){return t}afterSetEffect(t){this.map.clear(),t.forEach(e=>this._map.set(e.url,e))}addFile(t){return this._map.has(t.url)?this._map.get(t.url):(this.value=[...this.value,t],t)}instantiateSource(t){if(this._map.has(t.url))return this._map.get(t.url);{const e=t.createInstance(this.parent);return this.value=[...this.value,e],e}}instantiateSources(t){const e=[];t.forEach(r=>{this._map.has(r.url)||e.push(r.createInstance(this.parent))}),this.value=e}removeAllInstances(){this.forEveryInstance(t=>t.destroySelfAndBelow()),this.value=[]}forEveryInstance(t){this.value.forEach(e=>t(e))}},_c=class extends ot{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(t,e,r){this.parent.registry.fetcher.request(t,e,(i,s)=>{if(i instanceof Vt){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(t,e){this._requestedRemovals.has(t)?e&&this._requestedRemovals.get(t).callbacks.push(e):this._requestedRemovals.set(t,{url:t,callbacks:e?[e]:[]})}async cleanup(){const t=Object.values(this._requestedRemovals).map(e=>e.url);this.value=this.value.filter(e=>{var i;return t.includes(e.url)?((i=this._requestedRemovals.get(e.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(t){return t}afterSetEffect(t){this.map.clear(),t.forEach(e=>this._map.set(e.url,e))}instantiateSource(t){if(this._map.has(t.url))return this._map.get(t.url);{const e=t.createInstance(this.parent);return this.value=[...this.value,e],e}}instantiateSources(t){const e=[];t.forEach(r=>{this._map.has(r.url)||e.push(r.createInstance(this.parent))}),this.value=e}removeAllInstances(){this.forEveryInstance(t=>t.destroySelfAndBelow()),this.value=[]}forEveryInstance(t){this.value.forEach(e=>t(e))}},sa=class extends ot{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},kc=class extends sa{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.instances.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},$c=class extends Fr{constructor(t,e,r,i){super(),this.registry=t,this.id=e,this.name=r,this.description=i,this.hash=Math.random(),this.minmax=new kc(this,void 0),this.instances=new _c(this,[]),this.files=new xc(this,[]),this.cursorPosition=new wc(this,void 0),this.forEveryInstance=s=>{this.instances.value.forEach(n=>s(n))}}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.instances.removeAllInstances()}reset(){this.instances.reset(),this.minmax.reset(),this.cursorPosition.reset()}},Ec=class extends ot{constructor(){super(...arguments),this._map=new Map}get map(){return this._map}validate(t){return t}afterSetEffect(t){this._map.clear(),t.forEach(e=>this._map.set(e.id,e))}addOrGetGroup(t,e,r){if(this._map.has(t))return this._map.get(t);const i=new $c(this.parent,t,e,r);return this._map.set(t,i),this.value.push(i),this.value=[...this.value],i}removeGroup(t){var e;this._map.has(t)&&((e=this._map.get(t))==null||e.destroySelfAndBelow(),this._map.delete(t),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(t=>t.destroySelfAndBelow()),this.value=[]}},Oc=class extends ot{constructor(){super(...arguments),this._resolution=150,this.buffer=new Map,this.bufferPixelsCount=0,this._bufferResolution=1e3}get resolution(){return this._resolution}set bufferResolution(t){this._bufferResolution=Math.round(Math.max(t,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(t){this._resolution=Math.round(Math.min(Math.max(t,2),400))}validate(t){return t.length!==this.resolution+1&&t.length,t}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}refreshBufferFromCurrentPixels(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const t=this.parent.groups.value.map(e=>e.instances.value.map(r=>r.getPixelsForHistogram()));this.parent.pool.exec((e,r,i,s,n)=>{let l=e.reduce((w,_)=>{const E=_.reduce((k,L)=>[...k,...L],[]);return[...w,...E]},[]).sort((w,_)=>w-_);const c=s/n;let d=r+c;const g=new Map;let p=0;for(;d!==!1;){const w=l.findIndex(k=>k>d),_=l.slice(0,w).length;g.set(d-c/2,_),p+=_,l=l.slice(w);const E=d+c;d=E<i?E:!1}return{result:g,resultCount:p}},[t,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(e=>{this.buffer=e.result,this.bufferPixelsCount=e.resultCount,this.recalculateWithCurrentSetting()})}}recalculateHistogram(){if(this.parent.minmax.value!==void 0&&this.parent.minmax.distanceInCelsius!==void 0){let t=Array.from(this.buffer.keys()),e=Array.from(this.buffer.values());const r=this.parent.minmax.value,i=this.parent.minmax.distanceInCelsius/this.resolution,s=[];let n=0,a=r.min;for(;a<r.max;){const c=a,d=a+i,g=t.findIndex(E=>E>=d),w=e.slice(0,g).reduce((E,k)=>E+k,0),_=w/this.bufferPixelsCount;s.push({from:c,to:d,percentage:_,count:w}),n<w&&(n=w),t=t.slice(g),e=e.slice(g),a+=i}const l=s.map(c=>({...c,height:c.count/n*100}));this.value=l}}_getHistorgramFromAllGroups(){if(this.parent.minmax.value===void 0||this.parent.groups.value.length,this.parent.minmax.value===void 0||this.parent.groups.value.length===0)return[];{const t=this.parent.groups.value.reduce((d,g)=>{const p=g.instances.value.reduce((w,_)=>(w=[...w,..._.pixels],w),[]);return[...d,...p]},[]),e=[],r=this.resolution,s=(this.parent.minmax.value.max-this.parent.minmax.value.min)/r;for(let d=0;d<r;d++){const g=s*d+this.parent.minmax.value.min,p=g+s;e.push([g,p])}const n=[];let a=t.length;for(const d of e){const g=t.filter(p=>p>=d[0]&&p<d[1]).length;a=a+g,n.push({from:d[0],to:d[1],count:g})}const l=n.map(d=>({...d,percentage:d.count/a*100})),c=Math.max(...l.map(d=>d.percentage));return l.map(d=>({...d,height:d.percentage/c*100}))}}},Pc=class extends ot{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Ac=class extends sa{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Cc=class{constructor(t){this.registry=t,this.requests=new Map}get requestArray(){return Array.from(this.requests.values())}request(t,e,r){var i;if(this.requests.has(t))r&&((i=this.requests.get(t))==null||i.callbacks.push(r));else{const s={thermalUrl:t,visibleUrl:e,callbacks:r?[r]:[]};this.requests.set(t,s)}this.timer===void 0&&(this.timer=setTimeout(this.resolve.bind(this),0))}async resolve(){const t=await Promise.all(this.requestArray.map(async e=>{const r={request:e};if(this.registry.manager.isUrlRegistered(e.thermalUrl))r.output=this.registry.manager.sourcesByUrl[e.thermalUrl];else try{const i=await Vt.fromUrlWithErrors(e.thermalUrl,e.visibleUrl);i&&(r.output=i)}catch(i){i instanceof Error&&(r.output=i.message)}return r})).then(e=>e.map(r=>(r.output instanceof Vt?r.request.callbacks.forEach(i=>{i(r.output),this.registry.manager.registerSource(r.output)}):r.request.callbacks.forEach(i=>{r.output instanceof Vt||i(void 0,r.output??"Něco se pokazilo")}),r.output)));return clearTimeout(this.timer),this.timer=void 0,this.registry.postLoadedProcessing(),t}},vn=class ys extends EventTarget{constructor(e,r,i){super(),this.group=e,this.url=r,this.visibleUrl=i}static single(e,r,i){return new ys(e,r,i)}static multiple(e,r){return r.map(i=>new ys(e,i.thermalUrl,i.visibleUrl))}async fetch(){if(this.group.registry.manager.isUrlRegistered(this.url))return{file:this.group.registry.manager.sourcesByUrl[this.url],request:this};const e=await Vt.fromUrl(this.url,this.visibleUrl);if(e){if(e!==null)return{file:e,request:this}}else return null;return null}},Tc=class{constructor(t){this.registry=t,this._requests=[]}get requests(){return this._requests}get loading(){return this.registry.loading.value}requestFile(t,e,r){if(this.loading===!0){console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);return}this._requests.push(vn.single(t,e,r))}requestFiles(t,e){if(this.loading===!0){console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);return}this._requests=[...this._requests,...vn.multiple(t,e)]}async resolveQuery(){this.loading;const t=await Promise.all(this._requests.map(r=>r.fetch())),e={};for(const r of t)if(r!==null){const i=this.registry.manager.registerSource(r.file);r.request.group.id in e?e[r.request.group.id].push(i):e[r.request.group.id]=[i]}for(const r in e){const i=this.registry.groups.map.get(r);i==null||i.instances.instantiateSources(e[r])}return this._requests=[],this.registry.groups.value}},Sc=class extends Fr{constructor(t,e,r){super(),this.id=t,this.manager=e,this.hash=Math.random(),this.loader=new Tc(this),this.groups=new Ec(this,[]),this.fetcher=new Cc(this),this.opacity=new bc(this,1),this.minmax=new Ac(this,void 0),this.loading=new Pc(this,!1),this.range=new yc(this,void 0),this.histogram=new Oc(this,[]),this.palette=this.manager.palette,r&&r.histogramResolution!==void 0&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}get service(){return this.manager.service}forEveryGroup(t){this.groups.value.forEach(t)}forEveryInstance(t){this.forEveryGroup(e=>e.instances.forEveryInstance(t)),this.forEveryGroup(e=>e.files.forEveryInstance(t))}async loadFiles(t){this.reset(),Object.entries(t).forEach(([e,r])=>{const i=this.groups.addOrGetGroup(e);r.forEach(s=>{this.loader.requestFile(i,s.thermalUrl,s.visibleUrl)})}),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async loadOneFile(t,e){this.reset();const r=this.groups.addOrGetGroup(e);this.loader.requestFile(r,t.thermalUrl,t.visibleUrl),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async processDroppedFiles(t,e){this.reset(),this.loading.markAsLoading(),this.removeAllChildren();const r=await Promise.all(t.map(s=>vs.fromFile(s))).then(s=>s.filter(n=>n!==null));r.forEach(s=>this.manager.registerSource(s)),this.groups.addOrGetGroup(e).instances.instantiateSources(r),this.postLoadedProcessing()}enqueueFile(t,e,r){const i=this.groups.addOrGetGroup(t);this.loader.requestFile(i,e,r)}async loadQuery(){this.reset(),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}postLoadedProcessing(){console.log("postprocessing"),this.forEveryGroup(t=>t.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.refreshBufferFromCurrentPixels(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(t=>t.reset()),this.loader.loading===!1&&(this.opacity.reset(),this.minmax.reset())}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},Mc=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},Dc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Lc=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Fc=Mc(),na={iron:{pixels:Lc,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:Dc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:Fc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},Rc=class extends ot{get availablePalettes(){return na}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},aa=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},bn=class oa extends aa{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new oa(e.url,e.code,e.message)}},la=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},jc=class ca extends Jn{constructor(e,r,i,s,n,a,l,c,d,g,p,w,_,E,k,L){super(e,r.thermalUrl,i,s,d,n,l,p,w,a,r.visibleUrl),this.group=e,this.service=r,this.width=i,this.height=s,this.timestamp=n,this.frameCount=a,this.duration=l,this.frameInterval=c,this.fps=g,this.min=p,this.max=w,this.bytesize=_,this.averageEmissivity=E,this.averageReflectedKelvins=k,this.frame=L,this.pixels=L.pixels}exportAsPng(){throw new Error("Method not implemented.")}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}postInit(){return this.canvasLayer=new ta(this),this.visibleLayer=new ea(this,this.visibleUrl),this.cursorLayer=new ra(this),this.listenerLayer=new ia(this),this.cursorValue=new Zn(this,void 0),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(e){if(console.log(e),this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const r=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(r)}}getPixelsForHistogram(){return[]}static fromService(e,r,i,s){return new ca(e,r,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,s.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,s).postInit()}},Bc=class extends aa{constructor(t,e,r,i){super(r,i),this.buffer=t,this.parser=e,this.id=Math.random(),this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=this.parser.baseInfo(this.buffer);return t.then(e=>this.baseInfoCache=e),t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const e=this.getFrameSubset(t);return await this.parser.frameData(e.array,e.dataType)}async createInstance(t){const e=await this.baseInfo(),r=await this.frameData(0),i=jc.fromService(t,this,e,r);return t.files.addFile(i),i}},Nc=[{extension:"lrc",minme:"application/octet-stream"}],Uc=(t,e)=>{const r=e.endsWith("lrc"),s=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&s},Hc=t=>{const e=new DataView(t);return{width:e.getUint16(17,!0),height:e.getUint16(19,!0)}},Wc=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),s=t.byteLength,n=(F,ne)=>{const $e=F.getBigInt64(ne,!0),_e=62135596800000n,ge=10000n,J=24n*60n*60n*1000n*ge,ke=0x4000000000000000n,te=0x8000000000000000n;let v=$e&0x3FFFFFFFFFFFFFFFn;$e&te&&(v>ke-J&&(v-=ke),v<0&&(v+=J));const ie=v/ge-_e;return Number(ie)},a=n(e,5),l=e.getUint8(15);let c=2;l===1&&(c=4);const d=57,g=r*i*c,p=d+g,w=t.slice(25),_=w.byteLength/p,E=F=>{const ne=F*p,$e=ne+p,_e=w.slice(ne,$e),ge=new DataView(_e),J=ge.getFloat32(8,!0),ke=ge.getFloat32(12,!0),te=n(ge,0),f=ge.getFloat32(24,!0),v=ge.getFloat32(28,!0);return{timestamp:te,min:J,max:ke,emissivity:f,reflectedKelvins:v}},k=[];for(let F=0;F<_;F++){const ne=E(F);k.push(ne)}const L={emissivity:0,reflectedKelvins:0};let ee=1/0,I=-1/0;const Q=[];k.forEach(F=>{L.emissivity=L.emissivity+F.emissivity,L.reflectedKelvins=L.reflectedKelvins+F.reflectedKelvins,F.min<ee&&(ee=F.min),F.max>I&&(I=F.max),Q.push(F.timestamp)});const pe=k[k.length-1].timestamp-k[0].timestamp,ue=pe/_,Ce=1e3/ue;return{width:r,height:i,timestamp:a,bytesize:s,frameCount:_,duration:pe,frameInterval:ue,fps:Ce,timestamps:Q,min:ee,max:I,averageEmissivity:L.emissivity/k.length,averageReflectedKelvins:L.reflectedKelvins/k.length}},Ic=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),s=r.getUint16(17,!0),n=r.getUint16(19,!0),a=i===1?4:2,l=57,c=s*n*a,d=l+c,g=t.slice(25),p=e*d,w=p+d;return{array:g.slice(p,w),dataType:i}},Vc=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,l=0x4000000000000000n,c=0x8000000000000000n;let g=i&0x3FFFFFFFFFFFFFFFn;i&c&&(g>l-a&&(g-=l),g<0&&(g+=a));const w=g/n-s,_=Number(w),E=r.getFloat32(8,!0),k=r.getFloat32(12,!0),L=r.getFloat32(24,!0),ee=r.getFloat32(28,!0),I=t.slice(57);let Q=[];if(e===0){const pe=new Uint16Array(I),ue=Math.abs(E-k),Ce=65535;pe.forEach(F=>{const ne=F/Ce;Q.push(E+ue*ne)})}else e===1&&(Q=Array.from(new Float32Array(I)));return{timestamp:_,min:E,max:k,emissivity:L,reflectedKelvins:ee,pixels:Q}},qc=Object.freeze({name:"LabIR Recording (.lrc)",description:"Radiometric data saved by thermal cameras TIMI Edu and by measurement systems developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"}],extensions:Nc,is:Uc,dimensions:Hc,baseInfo:Wc,getFrameSubset:Ic,frameData:Vc}),zc={LrcParser:qc},ua=Object.values(zc),Yc=(t,e)=>{const r=ua.find(i=>i.is(t,e));if(r===void 0)throw new la(2,e,`No parser found for '${e}'.`);return r};ua.map(t=>t.extensions);var Gc=class ha{constructor(e,r){this.thermalUrl=e,this.visibleUrl=r}static fromUrl(e,r){return new ha(e,r)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new bn(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const s=Yc(i,this.thermalUrl);return this.pocessTheService(new Bc(i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof la)return this.pocessTheService(bn.fromError(s));throw s}}pocessTheService(e){return e}},Xc=class{constructor(t){this.manager=t,this.requestsByUrl=new Map,this.cacheByUrl=new Map}static isolatedInstance(t="isolated_registry"){const r=new Ts().addOrGetRegistry(t);return{service:r.service,registry:r}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Gc.fromUrl(t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Ts=class extends Fr{constructor(t){super(),this.registries={},this.palette=new Rc(this,"jet"),this.service=new Xc(this),this._sourcesByUrl={},this.isUrlRegistered=e=>Object.keys(this.sourcesByUrl).includes(e),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(t){Object.values(this.registries).forEach(e=>t(e))}addOrGetRegistry(t,e){return this.registries[t]===void 0&&(this.registries[t]=new Sc(t,this,e)),this.registries[t]}removeRegistry(t){this.registries[t]!==void 0&&(this.registries[t].destroySelfAndBelow(),delete this.registries[t])}get sourcesByUrl(){return this._sourcesByUrl}getSourcesArray(){return Object.values(this.sourcesByUrl)}getRegisteredUrls(){return Object.keys(this.sourcesByUrl)}registerSource(t){return this.getRegisteredUrls().includes(t.url)?this.sourcesByUrl[t.url]:(this.sourcesByUrl[t.url]=t,t)}},Ss=class{};Ss.inputToDate=t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t};var ht=class Dt extends Ss{static humanRangeDates(e,r){return e=Dt.inputToDate(e),r=Dt.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Dt.humanDate(e):[Dt.humanDate(e),Dt.humanDate(r)].join(" - ")}static human(e){return`${Dt.humanDate(e)} ${Dt.humanTime(e,!0)} `}};ht.isoDate=t=>(t=ht.inputToDate(t),Cs(t,{representation:"date"}));ht.isoTime=t=>(t=ht.inputToDate(t),Cs(t,{representation:"time"}));ht.isoComplete=t=>(t=ht.inputToDate(t),Cs(t));ht.humanTime=(t,e=!1)=>(t=ht.inputToDate(t),Kn(t,e?"HH:mm:ss":"HH:mm"));ht.humanDate=(t,e=!1)=>(t=ht.inputToDate(t),Kn(t,e?"d. M.":"d. M. yyyy"));var Qc=ht,tr=class extends Ss{};tr.down=(t,e)=>e==="jednu hodinu"?hc(t):e==="jeden den"?ms(t):e==="jeden týden"?sr(t):e==="jeden měsíc"?cl(t):Gn(t);tr.up=(t,e)=>e==="jednu hodinu"?hl(t):e==="jeden den"?ol(t):e==="jeden týden"?dl(t):e==="jeden měsíc"?ll(t):ul(t);tr.pick=(t,e)=>[tr.down(t,e),tr.up(t,e)];tr.modify=(t,e,r)=>{switch(r){case"jednu hodinu":return tl(t,e);case"jeden den":return hn(t,e);case"jeden týden":return hn(t,e*7);case"jeden měsíc":return Vn(t,e);case"jeden rok":return nl(t,e)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let da=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pi=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new da(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Kc=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zc=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Pr=class extends Kc{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const c=new Set;for(const[d,{consumerHost:g}]of this.subscriptions)c.has(d)||(c.add(d),g.dispatchEvent(new da(this.context,d,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Zc(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jc({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Pr(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Pr(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=globalThis,Ms=ei.ShadowRoot&&(ei.ShadyCSS===void 0||ei.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ds=Symbol(),yn=new WeakMap;let fa=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Ds)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ms&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=yn.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&yn.set(r,e))}return e}toString(){return this.cssText}};const eu=t=>new fa(typeof t=="string"?t:t+"",void 0,Ds),Ve=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new fa(r,t,Ds)},tu=(t,e)=>{if(Ms)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=ei.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},wn=Ms?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return eu(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ru,defineProperty:iu,getOwnPropertyDescriptor:su,getOwnPropertyNames:nu,getOwnPropertySymbols:au,getPrototypeOf:ou}=Object,Ft=globalThis,xn=Ft.trustedTypes,lu=xn?xn.emptyScript:"",ns=Ft.reactiveElementPolyfillSupport,$r=(t,e)=>t,ri={toAttribute(t,e){switch(e){case Boolean:t=t?lu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ls=(t,e)=>!ru(t,e),_n={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ls};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ft.litPropertyMetadata??(Ft.litPropertyMetadata=new WeakMap);class er extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=_n){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&iu(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=su(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_n}static _$Ei(){if(this.hasOwnProperty($r("elementProperties")))return;const e=ou(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r("properties"))){const r=this.properties,i=[...nu(r),...au(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(wn(s))}else e!==void 0&&r.push(wn(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tu(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ri).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:ri;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ls)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}er.elementStyles=[],er.shadowRootOptions={mode:"open"},er[$r("elementProperties")]=new Map,er[$r("finalized")]=new Map,ns==null||ns({ReactiveElement:er}),(Ft.reactiveElementVersions??(Ft.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=globalThis,ii=Er.trustedTypes,kn=ii?ii.createPolicy("lit-html",{createHTML:t=>t}):void 0,pa="$lit$",Lt=`lit$${Math.random().toFixed(9).slice(2)}$`,ma="?"+Lt,cu=`<${ma}>`,qt=document,Ar=()=>qt.createComment(""),Cr=t=>t===null||typeof t!="object"&&typeof t!="function",ga=Array.isArray,uu=t=>ga(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",as=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$n=/-->/g,En=/>/g,Ht=RegExp(`>|${as}(?:([^\\s"'>=/]+)(${as}*=${as}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),On=/'/g,Pn=/"/g,va=/^(?:script|style|textarea|title)$/i,hu=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),G=hu(1),nr=Symbol.for("lit-noChange"),Ae=Symbol.for("lit-nothing"),An=new WeakMap,It=qt.createTreeWalker(qt,129);function ba(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return kn!==void 0?kn.createHTML(e):e}const du=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=_r;for(let l=0;l<r;l++){const c=t[l];let d,g,p=-1,w=0;for(;w<c.length&&(a.lastIndex=w,g=a.exec(c),g!==null);)w=a.lastIndex,a===_r?g[1]==="!--"?a=$n:g[1]!==void 0?a=En:g[2]!==void 0?(va.test(g[2])&&(s=RegExp("</"+g[2],"g")),a=Ht):g[3]!==void 0&&(a=Ht):a===Ht?g[0]===">"?(a=s??_r,p=-1):g[1]===void 0?p=-2:(p=a.lastIndex-g[2].length,d=g[1],a=g[3]===void 0?Ht:g[3]==='"'?Pn:On):a===Pn||a===On?a=Ht:a===$n||a===En?a=_r:(a=Ht,s=void 0);const _=a===Ht&&t[l+1].startsWith("/>")?" ":"";n+=a===_r?c+cu:p>=0?(i.push(d),c.slice(0,p)+pa+c.slice(p)+Lt+_):c+Lt+(p===-2?l:_)}return[ba(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class Tr{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,c=this.parts,[d,g]=du(e,r);if(this.el=Tr.createElement(d,i),It.currentNode=this.el.content,r===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=It.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(pa)){const w=g[a++],_=s.getAttribute(p).split(Lt),E=/([.?@])?(.*)/.exec(w);c.push({type:1,index:n,name:E[2],strings:_,ctor:E[1]==="."?pu:E[1]==="?"?mu:E[1]==="@"?gu:mi}),s.removeAttribute(p)}else p.startsWith(Lt)&&(c.push({type:6,index:n}),s.removeAttribute(p));if(va.test(s.tagName)){const p=s.textContent.split(Lt),w=p.length-1;if(w>0){s.textContent=ii?ii.emptyScript:"";for(let _=0;_<w;_++)s.append(p[_],Ar()),It.nextNode(),c.push({type:2,index:++n});s.append(p[w],Ar())}}}else if(s.nodeType===8)if(s.data===ma)c.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(Lt,p+1))!==-1;)c.push({type:7,index:n}),p+=Lt.length-1}n++}}static createElement(e,r){const i=qt.createElement("template");return i.innerHTML=e,i}}function ar(t,e,r=t,i){var a,l;if(e===nr)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=Cr(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=ar(t,s._$AS(t,e.values),s,i)),e}class fu{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??qt).importNode(r,!0);It.currentNode=s;let n=It.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Rr(n,n.nextSibling,this,e):c.type===1?d=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(d=new vu(n,this,e)),this._$AV.push(d),c=i[++l]}a!==(c==null?void 0:c.index)&&(n=It.nextNode(),a++)}return It.currentNode=qt,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Rr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=Ae,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ar(this,e,r),Cr(e)?e===Ae||e==null||e===""?(this._$AH!==Ae&&this._$AR(),this._$AH=Ae):e!==this._$AH&&e!==nr&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):uu(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Ae&&Cr(this._$AH)?this._$AA.nextSibling.data=e:this.T(qt.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Tr.createElement(ba(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new fu(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=An.get(e.strings);return r===void 0&&An.set(e.strings,r=new Tr(e)),r}k(e){ga(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Rr(this.S(Ar()),this.S(Ar()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class mi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=Ae,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ae}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=ar(this,e,r,0),a=!Cr(e)||e!==this._$AH&&e!==nr,a&&(this._$AH=e);else{const l=e;let c,d;for(e=n[0],c=0;c<n.length-1;c++)d=ar(this,l[i+c],r,c),d===nr&&(d=this._$AH[c]),a||(a=!Cr(d)||d!==this._$AH[c]),d===Ae?e=Ae:e!==Ae&&(e+=(d??"")+n[c+1]),this._$AH[c]=d}a&&!s&&this.j(e)}j(e){e===Ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pu extends mi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ae?void 0:e}}class mu extends mi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ae)}}class gu extends mi{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=ar(this,e,r,0)??Ae)===nr)return;const i=this._$AH,s=e===Ae&&i!==Ae||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Ae&&(i===Ae||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class vu{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ar(this,e)}}const os=Er.litHtmlPolyfillSupport;os==null||os(Tr,Rr),(Er.litHtmlVersions??(Er.litHtmlVersions=[])).push("3.1.4");const bu=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Rr(e.insertBefore(Ar(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vt=class extends er{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bu(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return nr}};var Bn;vt._$litElement$=!0,vt.finalized=!0,(Bn=globalThis.litElementHydrateSupport)==null||Bn.call(globalThis,{LitElement:vt});const ls=globalThis.litElementPolyfillSupport;ls==null||ls({LitElement:vt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yu={attribute:!0,type:String,converter:ri,reflect:!1,hasChanged:Ls},wu=(t=yu,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const c=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,c,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const c=this[a];e.call(this,l),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+i)};function Te(t){return(e,r)=>typeof r=="object"?wu(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(t){return Te({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xu=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gi(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return xu(e,r,{get(){var c;const a=(c=this.renderRoot)==null?void 0:c.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}class ya extends vt{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),Ps.version,this.hash].join("__")}log(...e){console.log(this.identificator,...e)}}const wa="manager",xa="registry",_a="group",ka="group";var _u=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,$a=(t,e,r,i)=>{for(var s=i>1?void 0:i?ku(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&_u(e,r,s),s};let si=class extends ya{constructor(){super(...arguments),this.manager=new Ts}getClassName(){return"ThermalManagerElement"}render(){return G`
            <slot></slot>
        `}};si.styles=Ve`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;$a([Jc({context:wa})],si.prototype,"manager",2);si=$a([Le("thermal-manager")],si);class Fs extends ya{constructor(){super(...arguments),this._injectedManager=new pi(this,{context:wa,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new Ts}}var $u=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,Ea=(t,e,r,i)=>{for(var s=i>1?void 0:i?Eu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$u(e,r,s),s};let Sr=class extends Fs{constructor(){super(...arguments),this.uuid=Sr.DEFAULT_NAME,this.provider=new Pr(this,{context:xa,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const t=this.manager.addOrGetRegistry(this.uuid);this.provider.setValue(t,!0)}render(){return G`
            <slot></slot>
        `}};Sr.DEFAULT_NAME="default_registry";Ea([Te({type:String,attribute:!0,reflect:!0})],Sr.prototype,"uuid",2);Sr=Ea([Le("thermal-registry")],Sr);var Ou=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,Oa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ou(e,r,s),s};class xt extends Fs{constructor(){super(...arguments),this._injectedRegistry=new pi(this,{context:xa,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}Oa([We()],xt.prototype,"_registry",2);Oa([We()],xt.prototype,"registry",1);var Au=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,vi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Au(e,r,s),s};let zt=class extends xt{constructor(){super(...arguments),this.uuid=zt.DEFAULT_NAME,this.provider=new Pr(this,{context:_a,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.provider.setValue(this.group,!0)}updated(t){t.has("name")&&this.log(t,this.name)}render(){return G`
            <slot></slot>
        `}};zt.DEFAULT_NAME="default_group";vi([Te({type:String,attribute:!0,reflect:!0})],zt.prototype,"uuid",2);vi([Te({type:String,attribute:!0,reflect:!0})],zt.prototype,"name",2);vi([Te({type:String,attribute:!0,reflect:!0})],zt.prototype,"description",2);zt=vi([Le("thermal-group")],zt);class Rs extends xt{constructor(){super(...arguments),this._injectedGroup=new pi(this,{context:_a,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tu=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Su={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mu=t=>(...e)=>({_$litDirective$:t,values:e});class Du{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),Or(s,e);return!0},ni=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Pa=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Ru(e)}};function Lu(t){this._$AN!==void 0?(ni(this),this._$AM=t,Pa(this)):this._$AM=t}function Fu(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)Or(i[n],!1),ni(i[n]);else i!=null&&(Or(i,!1),ni(i));else Or(this,t)}const Ru=t=>{t.type==Su.CHILD&&(t._$AP??(t._$AP=Fu),t._$AQ??(t._$AQ=Lu))};class ju extends Du{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Pa(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(Or(this,e),ni(this))}setValue(e){if(Tu(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=()=>new Bu;class Bu{}const cs=new WeakMap,Qe=Mu(class extends ju{render(t){return Ae}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),Ae}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=cs.get(e);r===void 0&&(r=new WeakMap,cs.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=cs.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Nu=Object.defineProperty,Uu=Object.getOwnPropertyDescriptor,Pt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Uu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Nu(e,r,s),s};let dt=class extends Rs{constructor(){super(),this.canvasContainer=Xe(),this.errors=[],this.provider=new Pr(this,{context:ka,initialValue:void 0})}getClassName(){return"FileContextElement"}onFileChanged(t,e){console.log(t,e)}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}enqueueInTheRegistry(){if(this.thermal){const t=(e,r)=>{e?(this.log("file loaded",this.thermal),this.provider.setValue(e),this.file=e,this.errors=[]):r&&(this.errors=r.split("+|+"))};this.group.instances.enqueueAdd(this.thermal,this.visible,t.bind(this))}}willUpdate(t){super.willUpdate(t),t.has("thermal")||t.has("visible"),t.has("file")&&this.file&&this.file.unmountFromDom()}update(t){var e,r;if(super.update(t),t.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(e=this.file)==null||e.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return G`

            
        ${this.barElements.length>=0?G`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?G`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?G`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${Qe(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?G`
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
                                    ${this.errors.map(t=>G`<li>${t}</li>`)}
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
    
    `;Pt([Te({type:String,reflect:!0})],dt.prototype,"thermal",2);Pt([Te({type:String,reflect:!0})],dt.prototype,"visible",2);Pt([Te({type:Object})],dt.prototype,"file",2);Pt([We()],dt.prototype,"errors",2);Pt([gi({slot:"bar",flatten:!0})],dt.prototype,"barItems",2);Pt([We()],dt.prototype,"provider",2);Pt([gi({slot:"bar",flatten:!0})],dt.prototype,"barElements",2);Pt([gi({slot:"pre",flatten:!0})],dt.prototype,"pre",2);dt=Pt([Le("thermal-image")],dt);var Hu=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,Aa=(t,e,r,i)=>{for(var s=i>1?void 0:i?Wu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Hu(e,r,s),s};let ai=class extends vt{constructor(){super(),this.dialogRef=Xe(),this.closeButtonRef=Xe(),this.invokerRef=Xe()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return G`
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

        
    
    `;Aa([Te({type:String,reflect:!0})],ai.prototype,"label",2);ai=Aa([Le("thermal-dialog")],ai);var Iu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,js=(t,e,r,i)=>{for(var s=i>1?void 0:i?Vu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Iu(e,r,s),s};let Yt=class extends vt{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return G`
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
    
    `;js([Te({type:String,converter:{fromAttribute:t=>Yt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Yt.prototype,"variant",2);js([Te({type:String})],Yt.prototype,"size",2);Yt=js([Le("thermal-button")],Yt);const or=Math.min,$t=Math.max,oi=Math.round,Rt=t=>({x:t,y:t}),qu={left:"right",right:"left",bottom:"top",top:"bottom"},zu={start:"end",end:"start"};function Cn(t,e,r){return $t(t,or(e,r))}function jr(t,e){return typeof t=="function"?t(e):t}function Et(t){return t.split("-")[0]}function bi(t){return t.split("-")[1]}function Ca(t){return t==="x"?"y":"x"}function Ta(t){return t==="y"?"height":"width"}function Br(t){return["top","bottom"].includes(Et(t))?"y":"x"}function Sa(t){return Ca(Br(t))}function Yu(t,e,r){r===void 0&&(r=!1);const i=bi(t),s=Sa(t),n=Ta(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=li(a)),[a,li(a)]}function Gu(t){const e=li(t);return[ws(t),e,ws(e)]}function ws(t){return t.replace(/start|end/g,e=>zu[e])}function Xu(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Qu(t,e,r,i){const s=bi(t);let n=Xu(Et(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(ws)))),n}function li(t){return t.replace(/left|right|bottom|top/g,e=>qu[e])}function Ku(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ma(t){return typeof t!="number"?Ku(t):{top:t,right:t,bottom:t,left:t}}function lr(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Tn(t,e,r){let{reference:i,floating:s}=t;const n=Br(e),a=Sa(e),l=Ta(a),c=Et(e),d=n==="y",g=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,w=i[l]/2-s[l]/2;let _;switch(c){case"top":_={x:g,y:i.y-s.height};break;case"bottom":_={x:g,y:i.y+i.height};break;case"right":_={x:i.x+i.width,y:p};break;case"left":_={x:i.x-s.width,y:p};break;default:_={x:i.x,y:i.y}}switch(bi(e)){case"start":_[a]-=w*(r&&d?-1:1);break;case"end":_[a]+=w*(r&&d?-1:1);break}return _}const Zu=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:g,y:p}=Tn(d,i,c),w=i,_={},E=0;for(let k=0;k<l.length;k++){const{name:L,fn:ee}=l[k],{x:I,y:Q,data:pe,reset:ue}=await ee({x:g,y:p,initialPlacement:i,placement:w,strategy:s,middlewareData:_,rects:d,platform:a,elements:{reference:t,floating:e}});g=I??g,p=Q??p,_={..._,[L]:{..._[L],...pe}},ue&&E<=50&&(E++,typeof ue=="object"&&(ue.placement&&(w=ue.placement),ue.rects&&(d=ue.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):ue.rects),{x:g,y:p}=Tn(d,w,c)),k=-1)}return{x:g,y:p,placement:w,strategy:s,middlewareData:_}};async function Da(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:g="viewport",elementContext:p="floating",altBoundary:w=!1,padding:_=0}=jr(e,t),E=Ma(_),L=l[w?p==="floating"?"reference":"floating":p],ee=lr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(L)))==null||r?L:L.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:g,strategy:c})),I=p==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,Q=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),pe=await(n.isElement==null?void 0:n.isElement(Q))?await(n.getScale==null?void 0:n.getScale(Q))||{x:1,y:1}:{x:1,y:1},ue=lr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:I,offsetParent:Q,strategy:c}):I);return{top:(ee.top-ue.top+E.top)/pe.y,bottom:(ue.bottom-ee.bottom+E.bottom)/pe.y,left:(ee.left-ue.left+E.left)/pe.x,right:(ue.right-ee.right+E.right)/pe.x}}const Ju=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:c,elements:d}=e,{mainAxis:g=!0,crossAxis:p=!0,fallbackPlacements:w,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:k=!0,...L}=jr(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const ee=Et(s),I=Et(l)===l,Q=await(c.isRTL==null?void 0:c.isRTL(d.floating)),pe=w||(I||!k?[li(l)]:Gu(l));!w&&E!=="none"&&pe.push(...Qu(l,k,E,Q));const ue=[l,...pe],Ce=await Da(e,L),F=[];let ne=((i=n.flip)==null?void 0:i.overflows)||[];if(g&&F.push(Ce[ee]),p){const J=Yu(s,a,Q);F.push(Ce[J[0]],Ce[J[1]])}if(ne=[...ne,{placement:s,overflows:F}],!F.every(J=>J<=0)){var $e,_e;const J=((($e=n.flip)==null?void 0:$e.index)||0)+1,ke=ue[J];if(ke)return{data:{index:J,overflows:ne},reset:{placement:ke}};let te=(_e=ne.filter(f=>f.overflows[0]<=0).sort((f,v)=>f.overflows[1]-v.overflows[1])[0])==null?void 0:_e.placement;if(!te)switch(_){case"bestFit":{var ge;const f=(ge=ne.map(v=>[v.placement,v.overflows.filter(B=>B>0).reduce((B,ie)=>B+ie,0)]).sort((v,B)=>v[1]-B[1])[0])==null?void 0:ge[0];f&&(te=f);break}case"initialPlacement":te=l;break}if(s!==te)return{reset:{placement:te}}}return{}}}};function La(t){const e=or(...t.map(n=>n.left)),r=or(...t.map(n=>n.top)),i=$t(...t.map(n=>n.right)),s=$t(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function eh(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>lr(La(s)))}const th=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:c,y:d}=jr(t,e),g=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),p=eh(g),w=lr(La(g)),_=Ma(l);function E(){if(p.length===2&&p[0].left>p[1].right&&c!=null&&d!=null)return p.find(L=>c>L.left-_.left&&c<L.right+_.right&&d>L.top-_.top&&d<L.bottom+_.bottom)||w;if(p.length>=2){if(Br(r)==="y"){const _e=p[0],ge=p[p.length-1],J=Et(r)==="top",ke=_e.top,te=ge.bottom,f=J?_e.left:ge.left,v=J?_e.right:ge.right,B=v-f,ie=te-ke;return{top:ke,bottom:te,left:f,right:v,width:B,height:ie,x:f,y:ke}}const L=Et(r)==="left",ee=$t(...p.map(_e=>_e.right)),I=or(...p.map(_e=>_e.left)),Q=p.filter(_e=>L?_e.left===I:_e.right===ee),pe=Q[0].top,ue=Q[Q.length-1].bottom,Ce=I,F=ee,ne=F-Ce,$e=ue-pe;return{top:pe,bottom:ue,left:Ce,right:F,width:ne,height:$e,x:Ce,y:pe}}return w}const k=await n.getElementRects({reference:{getBoundingClientRect:E},floating:i.floating,strategy:a});return s.reference.x!==k.reference.x||s.reference.y!==k.reference.y||s.reference.width!==k.reference.width||s.reference.height!==k.reference.height?{reset:{rects:k}}:{}}}};async function rh(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Et(r),l=bi(r),c=Br(r)==="y",d=["left","top"].includes(a)?-1:1,g=n&&c?-1:1,p=jr(e,t);let{mainAxis:w,crossAxis:_,alignmentAxis:E}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof E=="number"&&(_=l==="end"?E*-1:E),c?{x:_*g,y:w*d}:{x:w*d,y:_*g}}const ih=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,c=await rh(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+c.x,y:n+c.y,data:{...c,placement:a}}}}},sh=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:L=>{let{x:ee,y:I}=L;return{x:ee,y:I}}},...c}=jr(t,e),d={x:r,y:i},g=await Da(e,c),p=Br(Et(s)),w=Ca(p);let _=d[w],E=d[p];if(n){const L=w==="y"?"top":"left",ee=w==="y"?"bottom":"right",I=_+g[L],Q=_-g[ee];_=Cn(I,_,Q)}if(a){const L=p==="y"?"top":"left",ee=p==="y"?"bottom":"right",I=E+g[L],Q=E-g[ee];E=Cn(I,E,Q)}const k=l.fn({...e,[w]:_,[p]:E});return{...k,data:{x:k.x-r,y:k.y-i}}}}};function mr(t){return Fa(t)?(t.nodeName||"").toLowerCase():"#document"}function it(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Bt(t){var e;return(e=(Fa(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Fa(t){return t instanceof Node||t instanceof it(t).Node}function bt(t){return t instanceof Element||t instanceof it(t).Element}function yt(t){return t instanceof HTMLElement||t instanceof it(t).HTMLElement}function Sn(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof it(t).ShadowRoot}function Nr(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=ft(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function nh(t){return["table","td","th"].includes(mr(t))}function yi(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Bs(t){const e=Ns(),r=ft(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function ah(t){let e=jt(t);for(;yt(e)&&!cr(e);){if(yi(e))return null;if(Bs(e))return e;e=jt(e)}return null}function Ns(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cr(t){return["html","body","#document"].includes(mr(t))}function ft(t){return it(t).getComputedStyle(t)}function wi(t){return bt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function jt(t){if(mr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Sn(t)&&t.host||Bt(t);return Sn(e)?e.host:e}function Ra(t){const e=jt(t);return cr(e)?t.ownerDocument?t.ownerDocument.body:t.body:yt(e)&&Nr(e)?e:Ra(e)}function xs(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Ra(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=it(s);return n?e.concat(a,a.visualViewport||[],Nr(s)?s:[],a.frameElement&&r?xs(a.frameElement):[]):e.concat(s,xs(s,[],r))}function ja(t){const e=ft(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=yt(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=oi(r)!==n||oi(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function Ba(t){return bt(t)?t:t.contextElement}function rr(t){const e=Ba(t);if(!yt(e))return Rt(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=ja(e);let a=(n?oi(r.width):r.width)/i,l=(n?oi(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const oh=Rt(0);function Na(t){const e=it(t);return!Ns()||!e.visualViewport?oh:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function lh(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==it(t)?!1:e}function Mr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Ba(t);let a=Rt(1);e&&(i?bt(i)&&(a=rr(i)):a=rr(t));const l=lh(n,r,i)?Na(n):Rt(0);let c=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,g=s.width/a.x,p=s.height/a.y;if(n){const w=it(n),_=i&&bt(i)?it(i):i;let E=w,k=E.frameElement;for(;k&&i&&_!==E;){const L=rr(k),ee=k.getBoundingClientRect(),I=ft(k),Q=ee.left+(k.clientLeft+parseFloat(I.paddingLeft))*L.x,pe=ee.top+(k.clientTop+parseFloat(I.paddingTop))*L.y;c*=L.x,d*=L.y,g*=L.x,p*=L.y,c+=Q,d+=pe,E=it(k),k=E.frameElement}}return lr({width:g,height:p,x:c,y:d})}function ch(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=Bt(i),l=e?yi(e.floating):!1;if(i===a||l&&n)return r;let c={scrollLeft:0,scrollTop:0},d=Rt(1);const g=Rt(0),p=yt(i);if((p||!p&&!n)&&((mr(i)!=="body"||Nr(a))&&(c=wi(i)),yt(i))){const w=Mr(i);d=rr(i),g.x=w.x+i.clientLeft,g.y=w.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-c.scrollLeft*d.x+g.x,y:r.y*d.y-c.scrollTop*d.y+g.y}}function uh(t){return Array.from(t.getClientRects())}function Ua(t){return Mr(Bt(t)).left+wi(t).scrollLeft}function hh(t){const e=Bt(t),r=wi(t),i=t.ownerDocument.body,s=$t(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=$t(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Ua(t);const l=-r.scrollTop;return ft(i).direction==="rtl"&&(a+=$t(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function dh(t,e){const r=it(t),i=Bt(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,c=0;if(s){n=s.width,a=s.height;const d=Ns();(!d||d&&e==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:n,height:a,x:l,y:c}}function fh(t,e){const r=Mr(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=yt(t)?rr(t):Rt(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,c=s*n.x,d=i*n.y;return{width:a,height:l,x:c,y:d}}function Mn(t,e,r){let i;if(e==="viewport")i=dh(t,r);else if(e==="document")i=hh(Bt(t));else if(bt(e))i=fh(e,r);else{const s=Na(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return lr(i)}function Ha(t,e){const r=jt(t);return r===e||!bt(r)||cr(r)?!1:ft(r).position==="fixed"||Ha(r,e)}function ph(t,e){const r=e.get(t);if(r)return r;let i=xs(t,[],!1).filter(l=>bt(l)&&mr(l)!=="body"),s=null;const n=ft(t).position==="fixed";let a=n?jt(t):t;for(;bt(a)&&!cr(a);){const l=ft(a),c=Bs(a);!c&&l.position==="fixed"&&(s=null),(n?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Nr(a)&&!c&&Ha(t,a))?i=i.filter(g=>g!==a):s=l,a=jt(a)}return e.set(t,i),i}function mh(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?yi(e)?[]:ph(e,this._c):[].concat(r),i],l=a[0],c=a.reduce((d,g)=>{const p=Mn(e,g,s);return d.top=$t(p.top,d.top),d.right=or(p.right,d.right),d.bottom=or(p.bottom,d.bottom),d.left=$t(p.left,d.left),d},Mn(e,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function gh(t){const{width:e,height:r}=ja(t);return{width:e,height:r}}function vh(t,e,r){const i=yt(e),s=Bt(e),n=r==="fixed",a=Mr(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const c=Rt(0);if(i||!i&&!n)if((mr(e)!=="body"||Nr(s))&&(l=wi(e)),i){const p=Mr(e,!0,n,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else s&&(c.x=Ua(s));const d=a.left+l.scrollLeft-c.x,g=a.top+l.scrollTop-c.y;return{x:d,y:g,width:a.width,height:a.height}}function us(t){return ft(t).position==="static"}function Dn(t,e){return!yt(t)||ft(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wa(t,e){const r=it(t);if(yi(t))return r;if(!yt(t)){let s=jt(t);for(;s&&!cr(s);){if(bt(s)&&!us(s))return s;s=jt(s)}return r}let i=Dn(t,e);for(;i&&nh(i)&&us(i);)i=Dn(i,e);return i&&cr(i)&&us(i)&&!Bs(i)?r:i||ah(t)||r}const bh=async function(t){const e=this.getOffsetParent||Wa,r=this.getDimensions,i=await r(t.floating);return{reference:vh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function yh(t){return ft(t).direction==="rtl"}const wh={convertOffsetParentRelativeRectToViewportRelativeRect:ch,getDocumentElement:Bt,getClippingRect:mh,getOffsetParent:Wa,getElementRects:bh,getClientRects:uh,getDimensions:gh,getScale:rr,isElement:bt,isRTL:yh},xh=ih,_h=sh,kh=Ju,$h=th,Eh=(t,e,r)=>{const i=new Map,s={platform:wh,...r},n={...s.platform,_c:i};return Zu(t,e,{...s,platform:n})};var Oh=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,xi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ph(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Oh(e,r,s),s};let ur=class extends vt{constructor(){super(...arguments),this.dropdownRef=Xe(),this.invokerRef=Xe(),this.optionsRef=Xe(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Eh(this.invokerRef.value,this.optionsRef.value,{middleware:[xh(2),kh(),$h(),_h()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return G`

            <div class="dropdown" ${Qe(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Qe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?G`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:G`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
    
    `;xi([gi({slot:"option"})],ur.prototype,"_options",2);xi([Te({type:String,reflect:!0})],ur.prototype,"open",2);xi([Te({type:String,reflect:!0})],ur.prototype,"variant",2);ur=xi([Le("thermal-dropdown")],ur);var Ah=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,_i=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ch(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ah(e,r,s),s};let hr=class extends vt{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Xe(),this.contentRef=Xe(),this.rulerContentRef=Xe()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return G`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Qe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Qe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Qe(this.contentRef)}>

                    ${this.collapsed===!1?G`
                        <slot></slot>    
                    `:Ae}
                
                </div>

            </div>

            ${this.collapsed?G`
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

    `;_i([We()],hr.prototype,"collapsed",2);_i([We()],hr.prototype,"lastContentWidth",2);_i([We()],hr.prototype,"drawerRef",2);hr=_i([Le("thermal-bar")],hr);var Th=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,Ia=(t,e,r,i)=>{for(var s=i>1?void 0:i?Sh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Th(e,r,s),s};let ci=class extends Fs{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.manager.palette.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(t){this.manager.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return G`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return G`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(na).map(([t,e])=>G`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
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

    `;Ia([Te({type:String,reflect:!0,attribute:!0})],ci.prototype,"value",2);ci=Ia([Le("thermal-palette")],ci);var Mh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Va=(t,e,r,i)=>{for(var s=i>1?void 0:i?Dh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Mh(e,r,s),s};let ui=class extends xt{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return G`
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
    
    `;Va([Te({type:Number,reflect:!0,attribute:!0})],ui.prototype,"value",2);ui=Va([Le("thermal-opacity")],ui);var Lh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Rh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Fh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lh(e,r,s),s};let Ln=class extends xt{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return G`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};Ln=Rh([Le("thermal-range-auto")],Ln);var jh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,Nh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Bh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&jh(e,r,s),s};let Fn=class extends xt{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return G`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};Fn=Nh([Le("thermal-range-minmax")],Fn);var Uh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,ki=(t,e,r,i)=>{for(var s=i>1?void 0:i?Hh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Uh(e,r,s),s};class At extends Rs{constructor(){super(...arguments),this._injectedFile=new pi(this,{context:ka,subscribe:!0}),this.ready=!1}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}update(e){return super.update(e),!0}}ki([We()],At.prototype,"_injectedFile",2);ki([We()],At.prototype,"_file",2);ki([We()],At.prototype,"file",1);ki([We()],At.prototype,"ready",2);var Wh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,Vh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ih(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wh(e,r,s),s};let _s=class extends At{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}onFileLoaded(){}render(){var t,e,r,i,s,n,a,l,c,d,g,p,w;return G`
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
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&G`
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
                            ${((s=this._injectedFile.value)==null?void 0:s.visibleUrl)&&G`
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
                            <td>${((n=this._injectedFile.value)==null?void 0:n.timestamp)&&Qc.human(this._injectedFile.value.timestamp)}</td>
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
                            <td>${(p=this._injectedFile.value)==null?void 0:p.unitHuman}</td>
                        </tr>
                        <tr>
                            <td>Data type</td>
                            <td>${(w=this._injectedFile.value)==null?void 0:w.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `}};_s.styles=Ve`

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
    
    `;_s=Vh([Le("thermal-file-info")],_s);var qh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Yh=(t,e,r,i)=>{for(var s=i>1?void 0:i?zh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&qh(e,r,s),s};let ks=class extends vt{render(){return G`
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
        `}};ks.styles=Ve`

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
    
    `;ks=Yh([Le("thermal-app-info")],ks);var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Qh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Xh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Gh(e,r,s),s};let $s=class extends At{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return G`

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

        
        `}};$s.styles=Ve`

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
    
    `;$s=Qh([Le("thermal-file-name")],$s);var Kh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Jh=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Kh(e,r,s),s};let Es=class extends At{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return G`

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
    
    `;Es=Jh([Le("thermal-file-download")],Es);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,h,b)=>h in o?t(o,h,{enumerable:!0,configurable:!0,writable:!0,value:b}):o[h]=b,i=(o,h,b)=>(r(o,typeof h!="symbol"?h+"":h,b),b),s=(o,h)=>` ${h&&h.length>0?h.map(b=>`<link rel="stylesheet" href="${b}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",c="pointers-max-distance",d="range-dragging",g="data",p="min",w="max",_="step",E="round",k="type",L="theme",ee="rtl",I="btt",Q="disabled",pe="keyboard-disabled",ue="mousewheel-disabled",Ce="slider-width",F="slider-height",ne="slider-radius",$e="slider-bg",_e="slider-bg-hover",ge="slider-bg-fill",J="pointer-width",ke="pointer-height",te="pointer-radius",f="pointer-bg",v="pointer-bg-hover",B="pointer-bg-focus",ie="pointer-shadow",Ee="pointer-shadow-hover",he="pointer-shadow-focus",_t="pointer-border",Xt="pointer-border-hover",ze="pointer-border-focus",kt="animate-onclick",Pi="css-links",tt="vertical",Ct="horizontal",gr=(o,h,b,m,S)=>{let W=h-o;return W===0?b:(m-b)*(S-o)/W+b},lt=o=>!isNaN(parseFloat(o))&&isFinite(o),Me=(o,h)=>lt(o)?Number(o):h,Ur=(o,h)=>h===0?0:Math.round(o/h)*h,Ai=(o,h=1/0)=>{if(h===1/0)return o;let b=e(10,h);return Math.round(o*b)/b},Ue=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Ci=(o,h)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:h}}))},Ti=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:h}}))},Si=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:h}}))},Mi=(o,h)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:h}}))},Di=(o,h)=>{if(!h||h.length<=0)return;let b=h.map(S=>lt(S)?Me(S,S):S),m={values:b||[]};m.value=b[0],m.value0=b[0],m.value1=b[0];for(let S=1;S<b.length;S++)m[`value${S+1}`]=b[S];o.dispatchEvent(new CustomEvent("change",{detail:m}))},$=(o,h,b)=>{let m=0,S,W,Z,M,D=!1,re=(q,Pe,Ie,He,Fe,Re)=>{let Ze=m;Ie!==void 0&&q>Ie&&(q=Ie),Pe!==void 0&&q<Pe&&(q=Pe),m=q;let Je=m;return(He===tt&&Re||He===Ct&&Fe)&&(Je=100-Je),He===tt?h.style.top=`${Je}%`:h.style.left=`${Je}%`,Ze!==m},le=q=>q===h||h.contains(q),N=(q,Pe,Ie,He)=>{S=q,W=Pe,Z=Ie,M=He},we=q=>{D=q,h.classList.toggle("disabled",D),D?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},at=(q,Pe)=>{Pe==null?h.removeAttribute(q):h.setAttribute(q,Pe)},Ye=q=>h.getAttribute(q),V=q=>{if(!D){switch(q.key){case"ArrowLeft":{q.preventDefault(),typeof S=="function"&&S(b);break}case"ArrowRight":{q.preventDefault(),typeof W=="function"&&W(b);break}case"ArrowUp":{q.preventDefault(),typeof Z=="function"&&Z(b);break}case"ArrowDown":{q.preventDefault(),typeof M=="function"&&M(b);break}}Mi(o,q)}},se=()=>{D||Ci(o,h)};return h.className=`pointer pointer-${b}`,h.addEventListener("keydown",V),h.addEventListener("click",se),{$pointer:h,get percent(){return m},get disabled(){return D},set disabled(q){we(q)},updatePosition:re,isClicked:le,setCallbacks:N,setAttr:at,getAttr:Ye,destroy:()=>{h.removeEventListener("keydown",V),h.removeEventListener("click",se),h.remove()}}},A=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let h=o.split(","),b=[],m=!0;for(let S=0;S<h.length;S++){let W=h[S].trim();W!==""&&(b.push(W),lt(W)||(m=!1))}return m?b.map(S=>Number(S)):b},C=(o,h)=>h?h.findIndex(b=>b===o||b.toString().trim()===o.toString().trim()):-1,T=o=>({updatePosition:(h,b,m,S)=>{if(b.length<=0)return;let W=b.length===1,Z=b[0],M=b[b.length-1];h===tt?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),W?o.style.height=`${Z}%`:o.style.height=`${Math.abs(Z-M)}%`,S?(o.style.bottom="0%",W?o.style.top="auto":o.style.top=`${Math.min(100-M,100-Z)}%`):(o.style.bottom="auto",W?o.style.top="0%":o.style.top=`${Math.min(Z,M)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),W?o.style.width=`${Z}%`:o.style.width=`${Math.abs(Z-M)}%`,m?(o.style.right="0%",W?o.style.left="auto":o.style.left=`${Math.min(100-M,100-Z)}%`):(o.style.right="auto",W?o.style.left="0%":o.style.left=`${Math.min(Z,M)}%`))}}),H="--animate-onclick",ve="--width",Y="--height",Oe="--panel-bg-border-radius",de="--panel-bg",R="--panel-bg-hover",fe="--panel-bg-fill",x="--pointer-width",O="--pointer-height",X="--pointer-border-radius",ae="--pointer-bg",Be="--pointer-bg-hover",qe="--pointer-bg-focus",pt="--pointer-shadow",rt="--pointer-shadow-hover",nt="--pointer-shadow-focus",Tt="--pointer-border",U="--pointer-border-hover",K="--pointer-border-focus",P=(o,h,b)=>{let m=new Map;for(let S of o.attributes){let W=S.nodeName.trim().toLowerCase();if(!h.test(W))continue;let Z=W.replace(/\D/g,"").trim(),M=Z===""||Z==="0"||Z==="1"?0:Me(Z,0)-1,D=b&&typeof b=="function"?b(S.value):S.value;m.set(M,D)}return m},z=o=>{if(!o)return null;let h=o.getAttribute(Pi);if(!h)return null;let b=h.split(";"),m=[];for(let S of b)S.trim()!==""&&m.push(S.trim());return m},be=[[ve,Ce,"sliderWidth",null],[Y,F,"sliderHeight",null],[Oe,ne,"sliderRadius",null],[de,$e,"sliderBg",null],[R,_e,"sliderBgHover",null],[fe,ge,"sliderBgFill",null],[x,J,"pointer#Width",/^pointer([0-9]*)-width$/],[O,ke,"pointer#Height",/^pointer([0-9]*)-height$/],[X,te,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ae,f,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Be,v,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[qe,B,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[pt,ie,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[rt,Ee,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[nt,he,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Tt,_t,"pointer#Border",/^pointer([0-9]*)-border$/],[U,Xt,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[K,ze,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],me=(o,h,b)=>{let m=null,S=[],W=new Map,Z=(V,se=h)=>{let q=[...se.classList];for(let Pe of q)Pe.startsWith(V)&&h.classList.remove(Pe)},M=()=>{Z("shape");let V=h.querySelectorAll(".pointer");for(let se of V)Z("shape",se)},D=V=>{m=V,Z("theme-"),typeof V=="string"&&h.classList.add(`theme-${V}`)},re=()=>{if(M(),!(S.length<=0)){h.classList.add("shape",`shape-${S[0]}`);for(let V=1;V<S.length;V++){let se=S[V];if(!se)continue;let q=h.querySelector(`.pointer-${V}`);!q||q.classList.add("shape",`shape-${se}`)}}},le=(V,se)=>{S[V]=se,re()},N=()=>{M();let V=P(o,/^pointer([0-9]*)-shape$/);if(!(V.size<=0)){for(let se of V){let q=se[0];S[q]=se[1]}re()}},we=(V,se)=>`${V}-${se}`,at=(V,se,q)=>{let Pe=b[q];if(!Pe)return;let Ie=q===0?h:Pe.$pointer;if(se==null){W.has(we(V,q))&&W.delete(we(V,q)),Ie.style.removeProperty(V);return}W.set(we(V,q),se),Ie.style.setProperty(V,se)},Ye=(V,se)=>W.get(we(V,se));return(()=>{for(let V of be){let[se,q,Pe,Ie]=V;if(Ie){let Fe=P(o,Ie);for(let Re of Fe){let Ze=Re[0],Je=Re[1];at(se,Je,Ze)}}else{let Fe=o.getAttribute(q);at(se,Fe,0)}let He=[];if(Pe.indexOf("#")===-1)He.push([Pe,0]);else{He.push([Pe.replace("#",""),0]),He.push([Pe.replace("#","0"),0]),He.push([Pe.replace("#","1"),0]);for(let Fe=1;Fe<b.length;Fe++)He.push([Pe.replace("#",(Fe+1).toString()),Fe])}for(let Fe of He)try{let Re=Fe[0],Ze=Fe[1];Object.prototype.hasOwnProperty.call(o,Re)||Object.defineProperty(o,Re,{get(){return Ye(se,Ze)},set:Je=>{at(se,Je,Ze)}})}catch(Re){console.error(Re)}}D(o.getAttribute(L)),N()})(),{setStyle:at,getStyle:Ye,get theme(){return m},set theme(V){D(V)},get pointerShapes(){return S},setPointerShape:le}},Se="animate-on-click",oe="range-dragging",Ke=(o,h,b,m)=>{let S=[],W=le=>{for(let N of S)N.update&&typeof N.update=="function"&&N.update(le)},Z=()=>{for(let le of S)le.destroy&&typeof le.destroy=="function"&&le.destroy()},M=(le,N)=>{for(let we of S)we.onAttrChange&&typeof we.onAttrChange=="function"&&we.onAttrChange(le,N)},D=le=>{if(le.gettersAndSetters){for(let N of le.gettersAndSetters)if(!(!N.name||!N.attributes))try{Object.prototype.hasOwnProperty.call(o,N.name)||Object.defineProperty(o,N.name,N.attributes)}catch(we){console.error("defineSettersGetters error:",we)}}},re=le=>{var N;if(!le.css)return;let we=(N=o.shadowRoot)==null?void 0:N.querySelector("style");!we||(we.innerHTML+=le.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let le of window.tcRangeSliderPlugins){let N=le();S.push(N),N.init&&typeof N.init=="function"&&(N.init(o,h,b,m),D(N),re(N))}},update:W,onAttrChange:M,destroy:Z}},Ne=10,Hr=20,za=(o,h)=>{let b=new Map,m=/^value([0-9]*)$/;for(let M of o.attributes){let D=M.nodeName.trim().toLowerCase();if(!m.test(D))continue;let re=D.replace("value","").trim(),le=re===""||re==="0"||re==="1"?0:Me(re,0)-1,N=lt(M.value)?Me(M.value,0):M.value;b.set(le,N)}let S=Math.max(...Array.from(b.keys())),W=[];W.push([$(o,h,0),b.get(0)]);let Z=h;for(let M=1;M<=S;M++){let D=h.cloneNode(!0);Z.after(D),Z=D,W.push([$(o,D,M),b.get(M)])}return W},Ws=(o,h,b,m,S,W,Z)=>{try{Object.defineProperty(o,m,{configurable:!0,get(){if(!h)return;let M=h.pointers[b];if(!M)return;let D=h.getTextValue(M.percent);return lt(D)?Me(D,D):D},set:M=>{h.pointers[b]?h==null||h.setValue(M,b):h==null||h.addPointer(M)}}),Object.defineProperty(o,S,{configurable:!0,get(){var M,D;return(D=(M=h==null?void 0:h.pointers[b])==null?void 0:M.getAttr("aria-label"))!=null?D:void 0},set:M=>{!h||h.setAriaLabel(b,M)}}),Object.defineProperty(o,W,{configurable:!0,get(){var M,D;return(D=(M=h==null?void 0:h.styles)==null?void 0:M.pointerShapes[b])!=null?D:null},set:M=>{!h||!h.styles||h.styles.setPointerShape(b,M)}}),Object.defineProperty(o,Z,{configurable:!0,get(){var M;return(M=h==null?void 0:h.pointers[b].disabled)!=null?M:!1},set:M=>{if(!h)return;let D=h==null?void 0:h.pointers[b];!D||(D.disabled=M)}})}catch(M){console.error(M)}},Ya=(o,h)=>{let b=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let m=2;m<Ne;m++)b.push([`value${m}`,`ariaLabel${m}`,`pointer${m}Shape`,`pointer${m}Disabled`,m-1]);for(let m of b)Ws(o,h,m[4],m[0],m[1],m[2],m[3])},Is=(o,h,b)=>{var m;let S=(m=b.shadowRoot)==null?void 0:m.querySelector(".container");if(S)for(let W of o)h?S.prepend(W.$pointer):S.append(W.$pointer)},Ga=(o,h)=>{if(!(!h||o.length<=1)){for(let b of o)b.$pointer.style.zIndex=Hr.toString();h.$pointer.style.zIndex=(Hr*2).toString()}},Li=0,vr=100,Qt=2,Vs="0.3s",Xa=(o,h,b)=>{let m=b.map(u=>u[0]),S=null,W=null,Z=null,M=null,D=Li,re=vr,le,N,we=Ct,at=Qt,Ye=!1,V=!1,se=!1,q=0,Pe=1/0,Ie=!1,He,Fe,Re=!1,Ze=!1,Je=!1,St=Vs,qs=[],zs=u=>{Re||(u.preventDefault&&u.preventDefault(),Nt(u),window.addEventListener("mousemove",Nt),window.addEventListener("mouseup",Wr),Ti(o,u))},Wr=u=>{Re||(He=void 0,Fe=void 0,window.removeEventListener("mousemove",Nt),window.removeEventListener("mouseup",Wr),St&&h.classList.add(Se),Si(o,u))},Za=(u,y)=>{if(m.length<=0)return;if(m.length===1)return m[0].isClicked(u)&&St&&h.classList.remove(Se),m[0];let j=eo(u);if(Ie){let ye=y,ct=Vr(ye);ct!==void 0&&(ye=Ur(ye,ct)),j?(He=ye,Fe=0,St&&h.classList.remove(Se)):He!==void 0&&(Fe=ye-He,He=ye)}if(!Ja(u)&&!j){for(let ye of m)if(!(!ye.isClicked(u)||ye.disabled))return St&&h.classList.remove(Se),ye;for(let ye of m)if(S===ye)return ye}let xe=1/0,je=null;for(let ye of m){if(ye.disabled)continue;let ct=Math.abs(y-ye.percent);ct<xe&&(xe=ct,je=ye)}return je},Ys=()=>m.findIndex(u=>S===u&&!u.disabled),Nt=u=>{let y;if(we===tt){let{height:xe,top:je}=h.getBoundingClientRect(),ye=u.type.indexOf("mouse")!==-1?u.clientY:u.touches[0].clientY;y=Math.min(Math.max(0,ye-je),xe)*100/xe}else{let{width:xe,left:je}=h.getBoundingClientRect(),ye=u.type.indexOf("mouse")!==-1?u.clientX:u.touches[0].clientX;y=Math.min(Math.max(0,ye-je),xe)*100/xe}if((Ye||V)&&(y=100-y),S=Za(u.target,y),S&&Ga(m,S),Ie&&m.length>1&&Fe!==void 0){let xe=m[0],je=m[m.length-1],ye=xe.percent+Fe<0,ct=je.percent+Fe>100;if(ye||ct)return;for(let Zr=0;Zr<m.length;Zr++)et(Zr,m[Zr].percent+Fe);return}let j=Ys();j!==-1&&(et(j,y),S==null||S.$pointer.focus())},Ir=u=>{if(Re||document.activeElement!==o||S!=null&&S.disabled)return;u.stopPropagation(),u.preventDefault();let y=u.deltaY<0,j=Ye||V,xe=y?!j:j,je=Ys();je!==-1&&(xe?br(je,m[je].percent):yr(je,m[je].percent))},Gs=u=>{Re||Ze||(we===tt?V?et(u,100):et(u,0):Ye?yr(u,m[u].percent):br(u,m[u].percent))},Xs=u=>{Re||Ze||(we===tt?V?et(u,0):et(u,100):Ye?br(u,m[u].percent):yr(u,m[u].percent))},Qs=u=>{Re||Ze||(we===tt?V?yr(u,m[u].percent):br(u,m[u].percent):Ye?et(u,100):et(u,0))},Ks=u=>{Re||Ze||(we===tt?V?br(u,m[u].percent):yr(u,m[u].percent):Ye?et(u,0):et(u,100))},Ja=u=>u.classList.contains("panel"),eo=u=>u.classList.contains("panel-fill"),br=(u,y)=>{if(y===void 0)return;let j=Vr(y);j==null&&(j=1),y-=j,y<0&&(y=0),et(u,y)},yr=(u,y)=>{if(y===void 0)return;let j=Vr(y);j==null&&(j=1),y+=j,y>100&&(y=100),et(u,y)},Ut=()=>{!M||M.update({percents:Zs(),values:Js(),$pointers:en(),min:tn(),max:rn(),data:ji(),step:Ri(),round:Ni(),type:Bi(),textMin:qr(),textMax:zr(),rightToLeft:Wi(),bottomToTop:Ii(),pointersOverlap:Yi(),pointersMinDistance:Ui(),pointersMaxDistance:Hi(),rangeDragging:Gi(),disabled:Vi(),keyboardDisabled:qi(),mousewheelDisabled:zi()})},to=()=>{Ut()},ro=u=>{if(!(se||m.length<=1||re===D))if(u===0){let y=Pe*100/(re-D);return Math.max(0,m[u+1].percent-y)}else{let y=q*100/(re-D);return Math.min(m[u-1].percent+y,100)}},io=u=>{if(!(se||m.length<=1||re===D))if(u===m.length-1){let y=Pe*100/(re-D);return Math.min(m[u-1].percent+y,100)}else{let y=q*100/(re-D);return Math.max(0,m[u+1].percent-y)}},Vr=u=>{let y;if(typeof le=="function"){let j=gr(0,100,D,re,u);y=le(j,u)}else y=le;if(lt(y)){let j=re-D;return y=j===0?0:y*100/j,y}},Kt=u=>{if(u===void 0)return;let y=gr(0,100,D,re,u);return N!==void 0?N[Math.round(y)]:Ai(y,at)},qr=()=>N!==void 0?N[D]:D,zr=()=>N!==void 0?N[re]:re,Ri=()=>le,so=u=>{var y;return u<=0||se?qr():(y=Kt(m[u-1].percent))!=null?y:""},no=u=>{var y;return m.length<=1||u>=m.length-1||se?zr():(y=Kt(m[u+1].percent))!=null?y:""},Zs=()=>m.map(u=>u.percent),Js=()=>m.map(u=>Kt(u.percent)),en=()=>m.map(u=>u.$pointer),tn=()=>D,rn=()=>re,ji=()=>N,Bi=()=>we,Ni=()=>at,Ui=()=>q,Hi=()=>Pe,ao=u=>qs[u],Wi=()=>Ye,Ii=()=>V,Vi=()=>Re,qi=()=>Ze,zi=()=>Je,Yi=()=>se,Gi=()=>Ie,et=(u,y)=>{if(y===void 0)return;let j=Vr(y);j!==void 0&&(y=Ur(y,j));let xe=m[u];if(!xe)return;let je=xe.updatePosition(y,ro(u),io(u),we,Ye,V);W==null||W.updatePosition(we,m.map(ye=>ye.percent),Ye,V),Ut();for(let ye of m){let ct=Kt(ye.percent);ct!==void 0&&(ye.setAttr("aria-valuenow",ct.toString()),ye.setAttr("aria-valuetext",ct.toString()))}lo(),je&&Di(o,m.map(ye=>Kt(ye.percent)))},mt=()=>{for(let u=0;u<m.length;u++)et(u,m[u].percent)},oo=(u,y)=>{D=N!==void 0?0:Me(u,Li),re=N!==void 0?N.length-1:Me(y,vr),Yr(D),Gr(re)},lo=()=>{var u,y;for(let j=0;j<m.length;j++){let xe=m[j];xe.setAttr("aria-valuemin",((u=so(j))!=null?u:"").toString()),xe.setAttr("aria-valuemax",((y=no(j))!=null?y:"").toString())}},Yr=u=>{D=Me(u,Li),D>re&&(re=D+vr),mt()},Gr=u=>{re=Me(u,vr),re<D&&(re=D+vr),mt()},sn=u=>{se=!0;for(let y=0;y<u.length;y++)Xr(u[y],y);se=!1;for(let y=0;y<u.length;y++)Xr(u[y],y)},Xr=(u,y)=>{let j;N!==void 0?(j=u==null?0:C(u,N),j===-1&&(j=0)):(j=Me(u,D),j<D&&(j=D),j>re&&(j=re));let xe=gr(D,re,0,100,j);et(y,xe)},Qr=u=>{if(u==null){le=void 0;return}if(typeof u=="function"){le=u,mt();return}if(lt(u)){le=Me(u,1);let y=Math.abs(re-D);le>y&&(le=void 0),mt();return}le=void 0},Xi=u=>{se=u,mt()},Qi=u=>{(!lt(u)||u<0)&&(u=0),q=u},Ki=u=>{(!lt(u)||u<0)&&(u=1/0),Pe=u},Zi=u=>{Re=u,h.classList.toggle("disabled",Re),Re?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},nn=u=>{Ze=u},an=u=>{Je=u,Je?document.removeEventListener("wheel",Ir):document.addEventListener("wheel",Ir,{passive:!1})},Ji=u=>{if(u==null){N=void 0;return}if(N=A(u),N===void 0||N.length<=0){N=void 0;return}Yr(0),Gr(N.length-1),le===void 0&&Qr(1)},es=u=>{var y;typeof u=="string"?we=u.trim().toLowerCase()===tt?tt:Ct:we=Ct;let j=(y=o.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!j)return;j.className=`range-slider-box type-${we}`,mt();let xe=we===tt?"vertical":"horizontal";for(let je of m)je.setAttr("aria-orientation",xe)},ts=u=>{Ye=u,m.length>1&&Is(m,Ye,o),mt(),Ut()},rs=u=>{V=u,m.length>1&&Is(m,V,o),mt(),Ut()},is=u=>{at=Me(u,Qt),at<0&&(at=Qt),Ut()},on=u=>{u==null||u.toString().trim().toLowerCase()==="false"?(St=void 0,h.style.removeProperty(H),h.classList.remove(Se)):(St=u.toString(),h.style.setProperty(H,St),h.classList.add(Se))},ln=(u,y)=>{let j=m[u];!j||(j.setAttr("aria-label",y),qs[u]=y)},Kr=u=>{if(He=void 0,m.length<=1){Ie=!1,h.classList.remove(oe);return}Ie=u,h.classList.toggle(oe,Ie)},co=()=>{Zi(Ue(o.getAttribute(Q))),Ze=Ue(o.getAttribute(pe)),Je=Ue(o.getAttribute(ue));let u=P(o,/^pointer([0-9]*)-disabled$/,y=>Ue(y));for(let y of u){let j=y[0];!m[j]||(m[j].disabled=y[1])}},uo=()=>{let u=P(o,/^aria-label([0-9]*)$/);for(let y of u){let j=y[0];ln(j,y[1])}},ho=u=>{let y=m.length,j=m[y-1].$pointer,xe=j.cloneNode(!0);j.after(xe);let je=$(o,xe,y);return je.setCallbacks(Gs,Xs,Qs,Ks),m.push(je),Xr(u,y),mt(),Ut(),y},fo=()=>{let u=m.length,y=m[u-1];return y?(y.destroy(),m.pop(),m.length<=1&&Kr(!1),mt(),Ut(),u-1):-1};return(()=>{var u,y;for(let xe of m)xe.setCallbacks(Gs,Xs,Qs,Ks);let j=(u=o.shadowRoot)==null?void 0:u.querySelector(".panel-fill");j&&(W=T(j)),es(o.getAttribute(k)),ts(Ue(o.getAttribute(ee))),rs(Ue(o.getAttribute(I))),oo(o.getAttribute(p),o.getAttribute(w)),Qr(o.getAttribute(_)),Ji(o.getAttribute(g)),sn(b.map(xe=>xe[1])),Xi(Ue(o.getAttribute(a))),Qi(Me(o.getAttribute(l),0)),Ki(Me(o.getAttribute(c),1/0)),Kr(Ue(o.getAttribute(d))),is(Me(o.getAttribute(E),Qt)),co(),uo(),Z=me(o,h,m),on((y=o.getAttribute(kt))!=null?y:Vs),h.addEventListener("mousedown",zs),h.addEventListener("mouseup",Wr),h.addEventListener("touchmove",Nt),h.addEventListener("touchstart",Nt),Je||document.addEventListener("wheel",Ir,{passive:!1}),M=Ke(o,to,{setValues:sn,setMin:Yr,setMax:Gr,setStep:Qr,setPointersOverlap:Xi,setPointersMinDistance:Qi,setPointersMaxDistance:Ki,setDisabled:Zi,setType:es,setRightToLeft:ts,setBottomToTop:rs,setRound:is,setKeyboardDisabled:nn,setMousewheelDisabled:an,setRangeDragging:Kr,setData:Ji},{getPercents:Zs,getValues:Js,getPointerElements:en,getMin:tn,getMax:rn,getStep:Ri,getData:ji,getType:Bi,getRound:Ni,getTextMin:qr,getTextMax:zr,isRightToLeft:Wi,isBottomToTop:Ii,isDisabled:Vi,isKeyboardDisabled:qi,isMousewheelDisabled:zi,isPointersOverlap:Yi,isRangeDraggingEnabled:Gi,getPointersMinDistance:Ui,getPointersMaxDistance:Hi}),M.init()})(),{get pointers(){return m},get styles(){return Z},get pluginsManager(){return M},get min(){return qr()},get max(){return zr()},get step(){return Ri()},get pointersOverlap(){return Yi()},set pointersOverlap(u){Xi(u)},get pointersMinDistance(){return Ui()},set pointersMinDistance(u){Qi(u)},get pointersMaxDistance(){return Hi()},set pointersMaxDistance(u){Ki(u)},get disabled(){return Vi()},set disabled(u){Zi(u)},get data(){return ji()},get type(){return Bi()},set type(u){es(u)},get rightToLeft(){return Wi()},set rightToLeft(u){ts(u)},get bottomToTop(){return Ii()},set bottomToTop(u){rs(u)},get round(){return Ni()},set round(u){is(u)},get animateOnClick(){return St},set animateOnClick(u){on(u)},get keyboardDisabled(){return qi()},set keyboardDisabled(u){nn(u)},get mousewheelDisabled(){return zi()},set mousewheelDisabled(u){an(u)},get rangeDragging(){return Gi()},set rangeDragging(u){Kr(u)},setMin:Yr,setMax:Gr,setValue:Xr,setStep:Qr,setData:Ji,getTextValue:Kt,setAriaLabel:ln,getAriaLabel:ao,addPointer:ho,removePointer:fo,destroy:()=>{h.removeEventListener("mousedown",zs),h.removeEventListener("mouseup",Wr),h.removeEventListener("touchmove",Nt),h.removeEventListener("touchstart",Nt),document.removeEventListener("wheel",Ir);for(let u of m)u.destroy();M==null||M.destroy()}}},Qa=(o,h,b)=>{let m=be.find(([M,D,re,le])=>D.replace("#","")===h.replace(/\d+/g,""));if(m&&o.styles){let[M,D,re,le]=m,N=h.replace(/\D/g,"").trim(),we=N===""||N==="0"||N==="1"?0:Me(N,0)-1;o.styles.setStyle(M,b,we);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(h,b),h){case p:{o.setMin(b);break}case w:{o.setMax(b);break}case _:{o.setStep(b);break}case a:{o.pointersOverlap=Ue(b);break}case l:{o.pointersMinDistance=Me(b,0);break}case d:{o.rangeDragging=Ue(b);break}case c:{o.pointersMaxDistance=Me(b,1/0);break}case Q:{o.disabled=Ue(b);break}case pe:{o.keyboardDisabled=Ue(b);break}case ue:{o.mousewheelDisabled=Ue(b);break}case g:{o.setData(b);break}case k:{o.type=b;break}case ee:{o.rightToLeft=Ue(b);break}case I:{o.bottomToTop=Ue(b);break}case E:{o.round=Me(b,Qt);break}case L:{o.styles&&(o.styles.theme=b);break}case kt:{o.animateOnClick=b;break}}let S=null;if(/^value([0-9]*)$/.test(h)&&(S="value"),/^pointer([0-9]*)-disabled$/.test(h)&&(S="pointer-disabled"),/^aria-label([0-9]*)$/.test(h)&&(S="aria-label"),/^pointer([0-9]*)-shape$/.test(h)&&(S="pointer-shape"),!S)return;let W=h.replace(/\D/g,"").trim(),Z=W===""||W==="0"||W==="1"?0:Me(W,0)-1;switch(S){case"value":{o.setValue(b,Z);break}case"pointer-disabled":{let M=o==null?void 0:o.pointers[Z];if(!M)return;M.disabled=Ue(b);break}case"aria-label":{o.setAriaLabel(Z,b);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(Z,b);break}}},Ka=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.disabled)!=null?h:!1}set data(o){var h;(h=this.slider)==null||h.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var h;(h=this.slider)==null||h.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var h;(h=this.slider)==null||h.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,h;return(h=(o=this.slider)==null?void 0:o.round)!=null?h:Qt}set type(o){!this.slider||(this.slider.type=o??Ct)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||Ct}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?h:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?h:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?h:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,h,b;return(b=(h=(o=this.slider)==null?void 0:o.styles)==null?void 0:h.theme)!=null?b:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,h;return(h=(o=this.slider)==null?void 0:o.rightToLeft)!=null?h:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,h;return(h=(o=this.slider)==null?void 0:o.bottomToTop)!=null?h:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?h:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?h:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,h;return(h=(o=this.slider)==null?void 0:o.rangeDragging)!=null?h:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ue(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var h,b;if(!this.slider)return;let m=(b=(h=this.slider)==null?void 0:h.addPointer(o))!=null?b:0;Ws(this,this.slider,m,`value${m+1}`,`ariaLabel${m+1}`,`pointerShape${m+1}`,`pointer${m+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let h=document.createElement("style");h.textContent=o,this.shadowRoot.appendChild(h)}connectedCallback(){var o,h;if(!this.shadowRoot)return;this._externalCSSList=z(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let b=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!b)return;let m=(h=this.shadowRoot)==null?void 0:h.getElementById("range-slider");if(!m)return;let S=za(this,b);this.slider=Xa(this,m,S),Ya(this,this.slider),this._observer=new MutationObserver(W=>{W.forEach(Z=>{var M;if(!this.slider||Z.type!=="attributes")return;let D=Z.attributeName;!D||Qa(this.slider,D,(M=this.getAttribute(D))!=null?M:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Fi=Ka;window.tcRangeSlider=Fi,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Fi),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Fi{})})();(()=>{var t=(l,c,d,g,p)=>{let w=c-l;return w===0?d:(g-d)*(p-l)/w+d},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,c)=>e(l)?Number(l):c,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,c=null,d=null,g=null,p=null,w=!1,_=s,E=n,k=()=>{var F;let ne=(F=l==null?void 0:l.shadowRoot)==null?void 0:F.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),g=document.createElement("div"),g.classList.add("mark-points"),d.append(g),p=document.createElement("div"),p.classList.add("mark-values"),d.append(p),ne.append(d)},L=()=>{!c||!d||d.classList.toggle("is-reversed",c.isRightToLeft()||c.isBottomToTop())},ee=()=>{var F;if(!d||!c)return;let ne=c.getMin(),$e=c.getMax(),_e=c.getType()==="vertical",ge=c.isRightToLeft()||c.isBottomToTop();for(let ke=0;ke<_;ke++){let te=document.createElement("div");te.classList.add("mark",`mark-${ke}`);let f=_===0?0:ke*100/(_-1);_e?ge?te.style.top=`${100-f}%`:te.style.top=`${f}%`:ge?te.style.left=`${100-f}%`:te.style.left=`${f}%`,g==null||g.append(te)}let J=c.getData();for(let ke=0;ke<E;ke++){let te=document.createElement("div");te.classList.add("mark-value",`mark-value-${ke}`);let f=E===0?0:ke*100/(E-1),v=t(0,E-1,ne,$e,ke);te.textContent=(J?(F=J[Math.round(v)])!=null?F:"":v).toString(),_e?ge?te.style.top=`${100-f}%`:te.style.top=`${f}%`:ge?te.style.left=`${100-f}%`:te.style.left=`${f}%`,p==null||p.append(te)}},I=(F,ne)=>{Ce(),_=F,E=ne,_<=0&&(_=s),E<=0&&(E=n),k(),ee(),L()},Q=F=>{w=F,w?(k(),ee(),L()):Ce()},pe=F=>{!d||d.style.setProperty("--marks-color",F)},ue=F=>{!d||d.style.setProperty("--values-color",F)},Ce=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(F,ne,$e,_e)=>{var ge,J;c=_e,l=F,w=i(l.getAttribute("marks")),w&&(I(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),pe((ge=l.getAttribute("marks-color"))!=null?ge:"#cbd5e1"),ue((J=l.getAttribute("marks-values-color"))!=null?J:"#475569"))},onAttrChange:(F,ne)=>{F==="marks"&&Q(i(ne)),F==="marks-count"&&I(r(ne,s),E),F==="marks-values-count"&&I(_,r(ne,n)),F==="marks-color"&&pe(ne),F==="marks-values-color"&&ue(ne)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return w??!1},set:F=>{Q(i(F))}}},{name:"marksCount",attributes:{get(){return _??s},set:F=>{I(r(F,s),E)}}},{name:"marksValuesCount",attributes:{get(){return _??s},set:F=>{I(_,r(F,n))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:F=>{pe(F)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:F=>{ue(F)}}}],destroy:Ce,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,Gt=(t,e,r,i)=>{for(var s=i>1?void 0:i?td(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ed(e,r,s),s};let Ot=class extends xt{constructor(){super(...arguments),this.sliderRef=Xe()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.identificator,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return G`

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

        `}};Ot.styles=Ve`

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
    
    `;Gt([Te({type:Number,reflect:!0})],Ot.prototype,"min",2);Gt([Te({type:Number,reflect:!0})],Ot.prototype,"max",2);Gt([Te({type:Number,reflect:!0})],Ot.prototype,"from",2);Gt([Te({type:Number,reflect:!0})],Ot.prototype,"to",2);Gt([We()],Ot.prototype,"palette",2);Gt([We()],Ot.prototype,"sliderRef",2);Ot=Gt([Le("thermal-range")],Ot);var rd=Object.defineProperty,id=Object.getOwnPropertyDescriptor,$i=(t,e,r,i)=>{for(var s=i>1?void 0:i?id(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&rd(e,r,s),s};let dr=class extends xt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.identificator,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return G`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":Ae}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>G`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():G`
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


    `;$i([We()],dr.prototype,"histogram",2);$i([Te({type:Boolean,reflect:!0})],dr.prototype,"interactive",2);$i([Te({type:String,reflect:!0})],dr.prototype,"height",2);dr=$i([Le("thermal-histogram")],dr);var sd=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,Ei=(t,e,r,i)=>{for(var s=i>1?void 0:i?nd(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&sd(e,r,s),s};let wt=class extends xt{constructor(){super(...arguments),this.ticksRef=Xe(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(t){super.firstUpdated(t),this.registry.minmax.addListener(this.identificator,e=>{this.minmax=e,this.calculateTicks(e,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/wt.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return G`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Qe(this.ticksRef)}>

                    ${this.ticks.map(t=>G`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(wt.TICK_FIXED)}
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


    `;Ei([Te({type:String,reflect:!0})],wt.prototype,"placement",2);Ei([We()],wt.prototype,"minmax",2);Ei([We()],wt.prototype,"ticks",2);wt=Ei([Le("thermal-ticks")],wt);var ad=Object.defineProperty,od=Object.getOwnPropertyDescriptor,ld=(t,e,r,i)=>{for(var s=i>1?void 0:i?od(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ad(e,r,s),s};let Os=class extends At{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){var t;return G`
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
        `}};Os.styles=Ve`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Os=ld([Le("thermal-file-share")],Os);var cd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Oi=(t,e,r,i)=>{for(var s=i>1?void 0:i?ud(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&cd(e,r,s),s};let fr=class extends At{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=Xe(),this.barRef=Xe()}getClassName(){return"TimelineElement"}update(t){var e,r;return(e=this._injectedFile.value)==null||e.timeline.removeListener(this.identificator),(r=this._injectedFile.value)==null||r.timeline.addListener(this.identificator,i=>{this.percentage=i/this._injectedFile.value.duration*100,this.ms=this.formatDuration(this._injectedFile.value.timeline.value)}),super.update(t)}formatDuration(t){const e=t%1e3,r=1e3*60,i=Math.floor(t/r),s=(t-i*r-e)/1e3,n=(a,l)=>{const c=a.toString();if(c.length===l)return c;if(c.length<l){const d=l-c.length;let g="";for(let p=0;p<d;p++)g=g+"0";return g+c}};return[i,n(s,2),n(e,3)].join(":")}play(){this._injectedFile.value&&(this.playing=!0,this._injectedFile.value.timeline.play())}pause(){this._injectedFile.value&&(this.playing=!1,this._injectedFile.value.timeline.pause())}applyBar(t){if(this.log(t),t.clientX,this.timelineRef.value&&this.barRef.value&&this._injectedFile.value){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this._injectedFile.value.timeline.setPercentage(r)}}render(){return this._injectedFile.value===void 0||this._injectedFile.value.timeline.duration===0?Ae:G`
            <div class="container">


                ${this._injectedFile.value!==void 0?G`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?G`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:G`
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
    
    `;Oi([We()],fr.prototype,"playing",2);Oi([We()],fr.prototype,"percentage",2);Oi([We()],fr.prototype,"ms",2);fr=Oi([Le("thermal-timeline")],fr);var hd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,Us=(t,e,r,i)=>{for(var s=i>1?void 0:i?dd(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hd(e,r,s),s};let Dr=class extends Rs{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=Xe()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return G`
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
                ${this.fullscreen==="on"?G`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:G`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
  
  `;Us([Te({type:String,reflect:!0})],Dr.prototype,"url",2);Us([Te({type:String,reflect:!0})],Dr.prototype,"fullscreen",2);Dr=Us([Le("thermal-file-app")],Dr);const hs=window.matchMedia("(prefers-color-scheme: dark)"),Hs="thermal-dark-mode",Rn=()=>{document.body.classList.add(Hs)},fd=()=>{document.body.classList.remove(Hs)},pd=()=>{hs.matches&&Rn();const t=e=>{e.matches?Rn():fd()};hs.addEventListener("change",t),hs.addListener(t)},md=Ps.version.toString().replaceAll(".","-"),qa=t=>`thermal__${t}__${md}`,gd=t=>document.getElementById(qa(t))!==null,jn=(t,e)=>{if(!gd(t)){const r=document.createElement("style");r.setAttribute("id",qa(t)),r.innerHTML=e,document.head.appendChild(r)}},vd=()=>{jn("rootVariables",`

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


            
        
        `),jn("darkModeOverrides",`
        
            body.${Hs} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Nn}
Author: ${Hn}
Repository: ${Un.url}
`);pd();vd();document.addEventListener("DOMContentLoaded",()=>{});
