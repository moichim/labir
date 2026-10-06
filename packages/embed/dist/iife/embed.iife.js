!function(){"use strict";var e,t,i,r,s,o="undefined"!=typeof document?document.currentScript:null;let a=class extends Event{constructor(e,t,i,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=r??!1}};let n=class{constructor(e,t,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context){const e=t;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new a(this.context,this.host,this.t,this.subscribe))}},l=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}},h=class extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}},c=class extends l{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;const t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context)return;if((e.contextTarget??e.composedPath()[0])===this.host)return;const t=new Set;for(const[i,{consumerHost:r}]of this.subscriptions)t.has(i)||(t.add(i),r.dispatchEvent(new a(this.context,r,i,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new h(this.context,this.host))}};function d({context:e}){return(t,i)=>{const r=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new c(this,{context:e,initialValue:t})),t}};{t.constructor.addInitializer(t=>{r.set(t,new c(t,{context:e}))});const s=Object.getOwnPropertyDescriptor(t,i);let o;if(void 0===s){const e=new WeakMap;o={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{const e=s.set;o={...s,set(t){r.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,o)}}}function p({context:e,subscribe:t}){return(i,r)=>{"object"==typeof r?r.addInitializer(function(){new n(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new n(i,{context:e,callback:e=>{i[r]=e},subscribe:t})})}}const u=e=>"string"==typeof e,m=()=>{let e,t;const i=new Promise((i,r)=>{e=i,t=r});return i.resolve=e,i.reject=t,i},g=e=>null==e?"":""+e,f=/###/g,y=e=>e&&e.indexOf("###")>-1?e.replace(f,"."):e,v=e=>!e||u(e),b=(e,t,i)=>{const r=u(t)?t.split("."):t;let s=0;for(;s<r.length-1;){if(v(e))return{};const t=y(r[s]);!e[t]&&i&&(e[t]=new i),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++s}return v(e)?{}:{obj:e,k:y(r[s])}},w=(e,t,i)=>{const{obj:r,k:s}=b(e,t,Object);if(void 0!==r||1===t.length)return void(r[s]=i);let o=t[t.length-1],a=t.slice(0,t.length-1),n=b(e,a,Object);for(;void 0===n.obj&&a.length;)o=`${a[a.length-1]}.${o}`,a=a.slice(0,a.length-1),n=b(e,a,Object),n?.obj&&void 0!==n.obj[`${n.k}.${o}`]&&(n.obj=void 0);n.obj[`${n.k}.${o}`]=i},x=(e,t)=>{const{obj:i,k:r}=b(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,r))return i[r]},S=(e,t,i)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(r in e?u(e[r])||e[r]instanceof String||u(t[r])||t[r]instanceof String?i&&(e[r]=t[r]):S(e[r],t[r],i):e[r]=t[r]);return e},k=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var C={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const E=e=>u(e)?e.replace(/[&<>"'\/]/g,e=>C[e]):e;const T=[" ",",","?","!",";"],_=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}(20),A=(e,t,i=".")=>{if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const r=t.split(i);let s=e;for(let o=0;o<r.length;){if(!s||"object"!=typeof s)return;let e,t="";for(let a=o;a<r.length;++a)if(a!==o&&(t+=i),t+=r[a],e=s[t],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&a<r.length-1)continue;o+=a-o+1;break}s=e}return s},P=e=>e?.replace("_","-"),$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console?.[e]?.apply?.(console,t)}};class R{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||$,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,r){return r&&!this.debug?null:(u(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new R(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new R(this.logger,e)}}var L=new R;class D{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const i=this.observers[e].get(t)||0;this.observers[e].set(t,i+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e,...t){if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(([e,i])=>{for(let r=0;r<i;r++)e(...t)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(([i,r])=>{for(let s=0;s<r;s++)i.apply(i,[e,...t])})}}}class O extends D{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,r={}){const s=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,o=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):u(i)&&s?a.push(...i.split(s)):a.push(i)));const n=x(this.data,a);return!n&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),!n&&o&&u(i)?A(this.data?.[e]?.[t],i,s):n}addResource(e,t,i,r,s={silent:!1}){const o=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),w(this.data,a,r),s.silent||this.emit("added",e,t,i,r)}addResources(e,t,i,r={silent:!1}){for(const s in i)(u(i[s])||Array.isArray(i[s]))&&this.addResource(e,t,s,i[s],{silent:!0});r.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,r,s,o={silent:!1,skipCopy:!1}){let a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=t,t=a[1]),this.addNamespaces(t);let n=x(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?S(n,i,s):n={...n,...i},w(this.data,a,n),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var M={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,r,s){return e.forEach(e=>{t=this.processors[e]?.process(t,i,r,s)??t}),t}};const I=Symbol("i18next/PATH_KEY");function U(e,t){const{[I]:i}=e(function(){const e=[],t=Object.create(null);let i;return t.get=(r,s)=>(i?.revoke?.(),s===I?e:(e.push(s),i=Proxy.revocable(r,t),i.proxy)),Proxy.revocable(Object.create(null),t).proxy}());return i.join(t?.keySeparator??".")}const z={},F=e=>!u(e)&&"boolean"!=typeof e&&"number"!=typeof e;class B extends D{constructor(e,t={}){var i,r;super(),i=e,r=this,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach(e=>{i[e]&&(r[e]=i[e])}),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=L.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(null==e)return!1;const r=this.resolve(e,i);if(void 0===r?.res)return!1;const s=F(r.res);return!1!==i.returnObjects||!s}extractFromKey(e,t){let i=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||((e,t,i)=>{t=t||"",i=i||"";const r=T.filter(e=>t.indexOf(e)<0&&i.indexOf(e)<0);if(0===r.length)return!0;const s=_.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);let o=!s.test(e);if(!o){const t=e.indexOf(i);t>0&&!s.test(e.substring(0,t))&&(o=!0)}return o})(e,i,r));if(o&&!a){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:u(s)?[s]:s};const o=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(o[0])>-1)&&(s=o.shift()),e=o.join(r)}return{key:e,namespaces:u(s)?[s]:s}}translate(e,t,i){let r="object"==typeof t?{...t}:t;if("object"!=typeof r&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof r&&(r={...r}),r||(r={}),null==e)return"";"function"==typeof e&&(e=U(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]);const s=void 0!==r.returnDetails?r.returnDetails:this.options.returnDetails,o=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,{key:a,namespaces:n}=this.extractFromKey(e[e.length-1],r),l=n[n.length-1];let h=void 0!==r.nsSeparator?r.nsSeparator:this.options.nsSeparator;void 0===h&&(h=":");const c=r.lng||this.language,d=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===c?.toLowerCase())return d?s?{res:`${l}${h}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:`${l}${h}${a}`:s?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:a;const p=this.resolve(e,r);let m=p?.res;const g=p?.usedKey||a,f=p?.exactUsedKey||a,y=void 0!==r.joinArrays?r.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,b=void 0!==r.count&&!u(r.count),w=B.hasDefaultValue(r),x=b?this.pluralResolver.getSuffix(c,r.count,r):"",S=r.ordinal&&b?this.pluralResolver.getSuffix(c,r.count,{ordinal:!1}):"",k=b&&!r.ordinal&&0===r.count,C=k&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${x}`]||r[`defaultValue${S}`]||r.defaultValue;let E=m;v&&!m&&w&&(E=C);const T=F(E),_=Object.prototype.toString.apply(E);if(!(v&&E&&T&&["[object Number]","[object Function]","[object RegExp]"].indexOf(_)<0)||u(y)&&Array.isArray(E))if(v&&u(y)&&Array.isArray(m))m=m.join(y),m&&(m=this.extendTranslation(m,e,r,i));else{let t=!1,s=!1;!this.isValidLookup(m)&&w&&(t=!0,m=C),this.isValidLookup(m)||(s=!0,m=a);const n=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&s?void 0:m,d=w&&C!==m&&this.options.updateMissing;if(s||t||d){if(this.logger.log(d?"updateKey":"missingKey",c,l,a,d?C:m),o){const e=this.resolve(a,{...r,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let r=0;r<t.length;r++)e.push(t[r]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(r.lng||this.language):e.push(r.lng||this.language);const i=(e,t,i)=>{const s=w&&i!==m?i:n;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,s,d,r):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,s,d,r),this.emit("missingKey",e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,r);k&&r[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{i([e],a+t,r[`defaultValue${t}`]||C)})}):i(e,a,C))}m=this.extendTranslation(m,e,r,p,i),s&&m===a&&this.options.appendNamespaceToMissingKey&&(m=`${l}${h}${a}`),(s||t)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${h}${a}`:a,t?m:void 0,r))}else{if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,E,{...r,ns:n}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(p.res=e,p.usedParams=this.getUsedParamsDetails(r),p):e}if(o){const e=Array.isArray(E),t=e?[]:{},i=e?f:g;for(const s in E)if(Object.prototype.hasOwnProperty.call(E,s)){const e=`${i}${o}${s}`;t[s]=w&&!m?this.translate(e,{...r,defaultValue:F(C)?C[s]:void 0,joinArrays:!1,ns:n}):this.translate(e,{...r,joinArrays:!1,ns:n}),t[s]===e&&(t[s]=E[s])}m=t}}return s?(p.res=m,p.usedParams=this.getUsedParamsDetails(r),p):m}extendTranslation(e,t,i,r,s){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const o=u(e)&&(void 0!==i?.interpolation?.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(o){const t=e.match(this.interpolator.nestingRegexp);a=t&&t.length}let n=i.replace&&!u(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),e=this.interpolator.interpolate(e,n,i.lng||this.language||r.usedLng,i),o){const t=e.match(this.interpolator.nestingRegexp);a<(t&&t.length)&&(i.nest=!1)}!i.lng&&r&&r.res&&(i.lng=this.language||r.usedLng),!1!==i.nest&&(e=this.interpolator.nest(e,(...e)=>s?.[0]!==e[0]||i.context?this.translate(...e,t):(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null),i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,a=u(o)?[o]:o;return null!=e&&a?.length&&!1!==i.applyPostProcessor&&(e=M.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,r,s,o,a;return u(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(i))return;const n=this.extractFromKey(e,t),l=n.key;r=l;let h=n.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const c=void 0!==t.count&&!u(t.count),d=c&&!t.ordinal&&0===t.count,p=void 0!==t.context&&(u(t.context)||"number"==typeof t.context)&&""!==t.context,m=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);h.forEach(e=>{this.isValidLookup(i)||(a=e,z[`${m[0]}-${e}`]||!this.utils?.hasLoadedNamespace||this.utils?.hasLoadedNamespace(a)||(z[`${m[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(r=>{if(this.isValidLookup(i))return;o=r;const a=[l];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(a,l,r,e,t);else{let e;c&&(e=this.pluralResolver.getSuffix(r,t.count,t));const i=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(t.ordinal&&0===e.indexOf(s)&&a.push(l+e.replace(s,this.options.pluralSeparator)),a.push(l+e),d&&a.push(l+i)),p){const r=`${l}${this.options.contextSeparator||"_"}${t.context}`;a.push(r),c&&(t.ordinal&&0===e.indexOf(s)&&a.push(r+e.replace(s,this.options.pluralSeparator)),a.push(r+e),d&&a.push(r+i))}}let n;for(;n=a.pop();)this.isValidLookup(i)||(s=n,i=this.getResource(r,e,n,t))}))})}),{res:i,usedKey:r,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,i,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,i,r):this.resourceStore.getResource(e,t,i,r)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!u(e.replace);let r=i?e.replace:e;if(i&&void 0!==e.count&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,12)&&void 0!==e[i])return!0;return!1}}class N{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=L.create("languageUtils")}getScriptPartFromCode(e){if(!(e=P(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=P(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(u(e)&&e.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch(t){}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const i=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(i)||(t=i)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const i=this.getScriptPartFromCode(e);if(this.isSupportedCode(i))return t=i;const r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?e:e.indexOf("-")<0&&r.indexOf("-")<0?void 0:e.indexOf("-")>0&&r.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===r||0===e.indexOf(r)&&r.length>1?e:void 0)}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),u(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),r=[],s=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return u(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&s(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&s(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&s(this.getLanguagePartFromCode(e))):u(e)&&s(this.formatLanguageCode(e)),i.forEach(e=>{r.indexOf(e)<0&&s(this.formatLanguageCode(e))}),r}}const j={zero:0,one:1,two:2,few:3,many:4,other:5},V={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class H{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=L.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=P("dev"===e?"en":e),r=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let o;try{o=new Intl.PluralRules(i,{type:r})}catch(a){if("undefined"==typeof Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),V;if(!e.match(/-|_/))return V;const i=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(i,t)}return this.pluralRulesCache[s]=o,o}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((e,t)=>j[e]-j[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t,i={}){const r=this.getRule(e,i);return r?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const W=(e,t,i,r=".",s=!0)=>{let o=((e,t,i)=>{const r=x(e,i);return void 0!==r?r:x(t,i)})(e,t,i);return!o&&s&&u(i)&&(o=A(e,i,r),void 0===o&&(o=A(t,i,r))),o},G=e=>e.replace(/\$/g,"$$$$");class q{constructor(e={}){this.logger=L.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:r,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:n,formatSeparator:l,unescapeSuffix:h,unescapePrefix:c,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:u,nestingSuffixEscaped:m,nestingOptionsSeparator:g,maxReplaces:f,alwaysFormat:y}=e.interpolation;this.escape=void 0!==t?t:E,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==r&&r,this.prefix=s?k(s):o||"{{",this.suffix=a?k(a):n||"}}",this.formatSeparator=l||",",this.unescapePrefix=h?"":c||"-",this.unescapeSuffix=this.unescapePrefix?"":h||"",this.nestingPrefix=d?k(d):p||k("$t("),this.nestingSuffix=u?k(u):m||k(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=f||1e3,this.alwaysFormat=void 0!==y&&y,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,r){let s,o,a;const n=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=e=>{if(e.indexOf(this.formatSeparator)<0){const s=W(t,n,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(s,void 0,i,{...r,...t,interpolationkey:e}):s}const s=e.split(this.formatSeparator),o=s.shift().trim(),a=s.join(this.formatSeparator).trim();return this.format(W(t,n,o,this.options.keySeparator,this.options.ignoreJSONStructure),a,i,{...r,...t,interpolationkey:o})};this.resetRegExp();const h=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,c=void 0!==r?.interpolation?.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>G(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?G(this.escape(e)):G(e)}].forEach(t=>{for(a=0;s=t.regex.exec(e);){const i=s[1].trim();if(o=l(i),void 0===o)if("function"==typeof h){const t=h(e,s,r);o=u(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,i))o="";else{if(c){o=s[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${e}`),o=""}else u(o)||this.useRawValueToEscape||(o=g(o));const n=t.safeValue(o);if(e=e.replace(s[0],n),c?(t.regex.lastIndex+=o.length,t.regex.lastIndex-=s[0].length):t.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let r,s,o;const a=(e,t)=>{const i=this.nestingOptionsSeparator;if(e.indexOf(i)<0)return e;const r=e.split(new RegExp(`${k(i)}[ ]*{`));let s=`{${r[1]}`;e=r[0],s=this.interpolate(s,o);const a=s.match(/'/g),n=s.match(/"/g);((a?.length??0)%2==0&&!n||(n?.length??0)%2!=0)&&(s=s.replace(/'/g,'"'));try{o=JSON.parse(s),t&&(o={...t,...o})}catch(l){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,l),`${e}${i}${s}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let n=[];o={...i},o=o.replace&&!u(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const l=/{.*}/.test(r[1])?r[1].lastIndexOf("}")+1:r[1].indexOf(this.formatSeparator);if(-1!==l&&(n=r[1].slice(l).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,l)),s=t(a.call(this,r[1].trim(),o),o),s&&r[0]===e&&!u(s))return s;u(s)||(s=g(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),n.length&&(s=n.reduce((e,t)=>this.format(e,t,i.lng,{...i,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const Y=e=>{const t={};return(i,r,s)=>{let o=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(o={...o,[s.interpolationkey]:void 0});const a=r+JSON.stringify(o);let n=t[a];return n||(n=e(P(r),s),t[a]=n),n(i)}},Z=e=>(t,i,r)=>e(P(i),r)(t);class X{constructor(e={}){this.logger=L.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Y:Z;this.formats={number:i((e,t)=>{const i=new Intl.NumberFormat(e,{...t});return e=>i.format(e)}),currency:i((e,t)=>{const i=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>i.format(e)}),datetime:i((e,t)=>{const i=new Intl.DateTimeFormat(e,{...t});return e=>i.format(e)}),relativetime:i((e,t)=>{const i=new Intl.RelativeTimeFormat(e,{...t});return e=>i.format(e,t.range||"day")}),list:i((e,t)=>{const i=new Intl.ListFormat(e,{...t});return e=>i.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Y(t)}format(e,t,i,r={}){const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(e=>e.indexOf(")")>-1)){const e=s.findIndex(e=>e.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,e)].join(this.formatSeparator)}return s.reduce((e,t)=>{const{formatName:s,formatOptions:o}=(e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const s=r[1].substring(0,r[1].length-1);"currency"===t&&s.indexOf(":")<0?i.currency||(i.currency=s.trim()):"relativetime"===t&&s.indexOf(":")<0?i.range||(i.range=s.trim()):s.split(";").forEach(e=>{if(e){const[t,...r]=e.split(":"),s=r.join(":").trim().replace(/^'+|'+$/g,""),o=t.trim();i[o]||(i[o]=s),"false"===s&&(i[o]=!1),"true"===s&&(i[o]=!0),isNaN(s)||(i[o]=parseInt(s,10))}})}return{formatName:t,formatOptions:i}})(t);if(this.formats[s]){let t=e;try{const a=r?.formatParams?.[r.interpolationkey]||{},n=a.locale||a.lng||r.locale||r.lng||i;t=this.formats[s](e,n,{...o,...r,...a})}catch(a){this.logger.warn(a)}return t}return this.logger.warn(`there was no format function for ${s}`),e},e)}}class K extends D{constructor(e,t,i,r={}){super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=L.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(i,r.backend,r)}queueLoad(e,t,i,r){const s={},o={},a={},n={};return e.forEach(e=>{let r=!0;t.forEach(t=>{const a=`${e}|${t}`;!i.reload&&this.store.hasResourceBundle(e,t)?this.state[a]=2:this.state[a]<0||(1===this.state[a]?void 0===o[a]&&(o[a]=!0):(this.state[a]=1,r=!1,void 0===o[a]&&(o[a]=!0),void 0===s[a]&&(s[a]=!0),void 0===n[t]&&(n[t]=!0)))}),r||(a[e]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(n)}}loaded(e,t,i){const r=e.split("|"),s=r[0],o=r[1];t&&this.emit("failedLoading",s,o,t),!t&&i&&this.store.addResourceBundle(s,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(i=>{((e,t,i)=>{const{obj:r,k:s}=b(e,t,Object);r[s]=r[s]||[],r[s].push(i)})(i.loaded,[s],o),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(i,e),t&&i.errors.push(t),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach(e=>{a[e]||(a[e]={});const t=i.loaded[e];t.length&&t.forEach(t=>{void 0===a[e][t]&&(a[e][t]=!0)})}),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(e=>!e.done)}read(e,t,i,r=0,s=this.retryTimeout,o){if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:i,tried:r,wait:s,callback:o});this.readingCalls++;const a=(a,n)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}a&&n&&r<this.maxRetries?setTimeout(()=>{this.read.call(this,e,t,i,r+1,2*s,o)},s):o(a,n)},n=this.backend[i].bind(this.backend);if(2!==n.length)return n(e,t,a);try{const i=n(e,t);i&&"function"==typeof i.then?i.then(e=>a(null,e)).catch(a):a(null,i)}catch(l){a(l)}}prepareLoading(e,t,i={},r){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();u(e)&&(e=this.languageUtils.toResolveHierarchy(e)),u(t)&&(t=[t]);const s=this.queueLoad(e,t,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),r=i[0],s=i[1];this.read(r,s,"read",void 0,void 0,(i,o)=>{i&&this.logger.warn(`${t}loading namespace ${s} for language ${r} failed`,i),!i&&o&&this.logger.log(`${t}loaded namespace ${s} for language ${r}`,o),this.loaded(e,i,o)})}saveMissing(e,t,i,r,s,o={},a=()=>{}){if(!this.services?.utils?.hasLoadedNamespace||this.services?.utils?.hasLoadedNamespace(t)){if(null!=i&&""!==i){if(this.backend?.create){const l={...o,isUpdate:s},h=this.backend.create.bind(this.backend);if(h.length<6)try{let s;s=5===h.length?h(e,t,i,r,l):h(e,t,i,r),s&&"function"==typeof s.then?s.then(e=>a(null,e)).catch(a):a(null,s)}catch(n){a(n)}else h(e,t,i,r,a,l)}e&&e[0]&&this.store.addResource(e[0],t,i,r)}}else this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const Q=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),u(e[1])&&(t.defaultValue=e[1]),u(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const i=e[3]||e[2];Object.keys(i).forEach(e=>{t[e]=i[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),J=e=>(u(e.ns)&&(e.ns=[e.ns]),u(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),u(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs?.indexOf?.("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),"boolean"==typeof e.initImmediate&&(e.initAsync=e.initImmediate),e),ee=()=>{},te="__i18next_supportNoticeShown";class ie extends D{constructor(e={},t){var i;if(super(),this.options=J(e),this.services={},this.logger=L,this.modules={external:[]},i=this,Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(e=>{"function"==typeof i[e]&&(i[e]=i[e].bind(i))}),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,"function"==typeof e&&(t=e,e={}),null==e.defaultNS&&e.ns&&(u(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=Q();var r;this.options={...i,...this.options,...J(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator),"function"!=typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler),!1===this.options.showSupportNotice||(r=this,r?.modules?.backend?.name?.indexOf("Locize")>0||r?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||r?.options?.backend?.backends&&r.options.backend.backends.some(e=>e?.name?.indexOf("Locize")>0||e?.constructor?.name?.indexOf("Locize")>0)||r?.options?.backend?.projectId||r?.options?.backend?.backendOptions&&r.options.backend.backendOptions.some(e=>e?.projectId))||"undefined"!=typeof globalThis&&globalThis[te]||("undefined"!=typeof console&&void 0!==console.info&&console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),"undefined"!=typeof globalThis&&(globalThis[te]=!0));const s=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let e;this.modules.logger?L.init(s(this.modules.logger),this.options):L.init(null,this.options),e=this.modules.formatter?this.modules.formatter:X;const t=new N(this.options);this.store=new O(this.options.resources,this.options);const r=this.services;r.logger=L,r.resourceStore=this.store,r.languageUtils=t,r.pluralResolver=new H(t,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix});this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),!e||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(r.formatter=s(e),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new q(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new K(s(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(r.languageDetector=s(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=s(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new B(this.services,this.options),this.translator.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||(t=ee),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(e=>{this[e]=(...t)=>this.store[e](...t)});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});const o=m(),a=()=>{const e=(e,i)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(i),t(e,i)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),o}loadResources(e,t=ee){let i=t;const r=u(e)?e:this.language;if("function"==typeof e&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===r?.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return i();const e=[],t=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)})};if(r)t(r);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e))}this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),i(e)})}else i(null)}reloadResources(e,t,i){const r=m();return"function"==typeof e&&(i=e,e=void 0),"function"==typeof t&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ee),this.services.backendConnector.reload(e,t,e=>{r.resolve(),i(e)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&M.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=m();this.emit("languageChanging",e);const r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},s=(s,o)=>{o?this.isLanguageChangingTo===e&&(r(o),this.translator.changeLanguage(o),this.isLanguageChangingTo=void 0,this.emit("languageChanged",o),this.logger.log("languageChanged",o)):this.isLanguageChangingTo=void 0,i.resolve((...e)=>this.t(...e)),t&&t(s,(...e)=>this.t(...e))},o=t=>{e||t||!this.services.languageDetector||(t=[]);const i=u(t)?t:t&&t[0],o=this.store.hasLanguageSomeTranslations(i)?i:this.services.languageUtils.getBestMatchFromCodes(u(t)?[t]:t);o&&(this.language||r(o),this.translator.language||this.translator.changeLanguage(o),this.services.languageDetector?.cacheUserLanguage?.(o)),this.loadResources(o,e=>{s(e,o)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),i}getFixedT(e,t,i){const r=(e,t,...s)=>{let o;o="object"!=typeof t?this.options.overloadTranslationOptionHandler([e,t].concat(s)):{...t},o.lng=o.lng||r.lng,o.lngs=o.lngs||r.lngs,o.ns=o.ns||r.ns,""!==o.keyPrefix&&(o.keyPrefix=o.keyPrefix||i||r.keyPrefix);const a=this.options.keySeparator||".";let n;return o.keyPrefix&&Array.isArray(e)?n=e.map(e=>("function"==typeof e&&(e=U(e,{...this.options,...t})),`${o.keyPrefix}${a}${e}`)):("function"==typeof e&&(e=U(e,{...this.options,...t})),n=o.keyPrefix?`${o.keyPrefix}${a}${e}`:e),this.t(n,o)};return u(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,s=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const o=(e,t)=>{const i=this.services.backendConnector.state[`${e}|${t}`];return-1===i||0===i||2===i};if(t.precheck){const e=t.precheck(this,o);if(void 0!==e)return e}return!!this.hasResourceBundle(i,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!o(i,e)||r&&!o(s,e)))}loadNamespaces(e,t){const i=m();return this.options.ns?(u(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=m();u(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return s.length?(this.options.preload=r.concat(s),this.loadResources(e=>{i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(i){}const t=this.services?.languageUtils||new N(Q());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new ie(e,t);return i.createInstance=ie.createInstance,i}cloneInstance(e={},t=ee){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new ie(r);void 0===e.debug&&void 0===e.prefix||(s.logger=s.logger.clone(e));if(["store","services","language"].forEach(e=>{s[e]=this[e]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((i,r)=>(i[r]={...e[t][r]},i),e[t]),e),{});s.store=new O(e,r),s.services.resourceStore=s.store}if(e.interpolation){const t={...Q().interpolation,...this.options.interpolation,...e.interpolation},i={...r,interpolation:t};s.services.interpolator=new q(i)}return s.translator=new B(s.services,r),s.translator.on("*",(e,...t)=>{s.emit(e,...t)}),s.init(r,t),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const re=ie.createInstance();re.createInstance,re.dir,re.init,re.loadResources,re.reloadResources,re.use,re.changeLanguage,re.getFixedT;const se=re.t;re.exists,re.setDefaultNamespace,re.hasLoadedNamespace,re.loadNamespaces,re.loadLanguages;const oe=globalThis,ae=oe.ShadowRoot&&(void 0===oe.ShadyCSS||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),le=new WeakMap;let he=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ae&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=le.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(t,e))}return e}toString(){return this.cssText}};const ce=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new he(i,e,ne)},de=ae?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new he("string"==typeof e?e:e+"",void 0,ne))(t)})(e):e,{is:pe,defineProperty:ue,getOwnPropertyDescriptor:me,getOwnPropertyNames:ge,getOwnPropertySymbols:fe,getPrototypeOf:ye}=Object,ve=globalThis,be=ve.trustedTypes,we=be?be.emptyScript:"",xe=ve.reactiveElementPolyfillSupport,Se=(e,t)=>e,ke={toAttribute(e,t){switch(t){case Boolean:e=e?we:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(r){i=null}}return i}},Ce=(e,t)=>!pe(e,t),Ee={attribute:!0,type:String,converter:ke,reflect:!1,useDefault:!1,hasChanged:Ce};Symbol.metadata??=Symbol("metadata"),ve.litPropertyMetadata??=new WeakMap;let Te=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&ue(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=me(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const o=r?.call(this);s?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;const e=ye(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){const e=this.properties,t=[...ge(e),...fe(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(de(e))}else void 0!==e&&t.push(de(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(ae)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),r=oe.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:ke).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ke;this._$Em=r;const o=s.fromAttribute(t,e.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(void 0!==e){const o=this.constructor;if(!1===r&&(s=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??Ce)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==s||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[Se("elementProperties")]=new Map,Te[Se("finalized")]=new Map,xe?.({ReactiveElement:Te}),(ve.reactiveElementVersions??=[]).push("2.1.2");const _e=globalThis,Ae=e=>e,Pe=_e.trustedTypes,$e=Pe?Pe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Re="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,De="?"+Le,Oe=`<${De}>`,Me=document,Ie=()=>Me.createComment(""),Ue=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ze=Array.isArray,Fe="[ \t\n\f\r]",Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,je=/>/g,Ve=RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),He=/'/g,We=/"/g,Ge=/^(?:script|style|textarea|title)$/i,qe=(Qe=1,(e,...t)=>({_$litType$:Qe,strings:e,values:t})),Ye=Symbol.for("lit-noChange"),Ze=Symbol.for("lit-nothing"),Xe=new WeakMap,Ke=Me.createTreeWalker(Me,129);var Qe;function Je(e,t){if(!ze(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$e?$e.createHTML(t):t}let et=class e{constructor({strings:t,_$litType$:i},r){let s;this.parts=[];let o=0,a=0;const n=t.length-1,l=this.parts,[h,c]=((e,t)=>{const i=e.length-1,r=[];let s,o=2===t?"<svg>":3===t?"<math>":"",a=Be;for(let n=0;n<i;n++){const t=e[n];let i,l,h=-1,c=0;for(;c<t.length&&(a.lastIndex=c,l=a.exec(t),null!==l);)c=a.lastIndex,a===Be?"!--"===l[1]?a=Ne:void 0!==l[1]?a=je:void 0!==l[2]?(Ge.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=Ve):void 0!==l[3]&&(a=Ve):a===Ve?">"===l[0]?(a=s??Be,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?Ve:'"'===l[3]?We:He):a===We||a===He?a=Ve:a===Ne||a===je?a=Be:(a=Ve,s=void 0);const d=a===Ve&&e[n+1].startsWith("/>")?" ":"";o+=a===Be?t+Oe:h>=0?(r.push(i),t.slice(0,h)+Re+t.slice(h)+Le+d):t+Le+(-2===h?n:d)}return[Je(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]})(t,i);if(this.el=e.createElement(h,r),Ke.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=Ke.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(Re)){const t=c[a++],i=s.getAttribute(e).split(Le),r=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?ot:"?"===r[1]?at:"@"===r[1]?nt:st}),s.removeAttribute(e)}else e.startsWith(Le)&&(l.push({type:6,index:o}),s.removeAttribute(e));if(Ge.test(s.tagName)){const e=s.textContent.split(Le),t=e.length-1;if(t>0){s.textContent=Pe?Pe.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],Ie()),Ke.nextNode(),l.push({type:2,index:++o});s.append(e[t],Ie())}}}else if(8===s.nodeType)if(s.data===De)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(Le,e+1));)l.push({type:7,index:o}),e+=Le.length-1}o++}}static createElement(e,t){const i=Me.createElement("template");return i.innerHTML=e,i}};function tt(e,t,i=e,r){if(t===Ye)return t;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const o=Ue(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(e),s._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(t=tt(e,s._$AS(e,t.values),s,r)),t}let it=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??Me).importNode(t,!0);Ke.currentNode=r;let s=Ke.nextNode(),o=0,a=0,n=i[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new rt(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new lt(s,this,e)),this._$AV.push(t),n=i[++a]}o!==n?.index&&(s=Ke.nextNode(),o++)}return Ke.currentNode=Me,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=Ze,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=tt(this,e,t),Ue(e)?e===Ze||null==e||""===e?(this._$AH!==Ze&&this._$AR(),this._$AH=Ze):e!==this._$AH&&e!==Ye&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>ze(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ze&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(Me.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=et.createElement(Je(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new it(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Xe.get(e.strings);return void 0===t&&Xe.set(e.strings,t=new et(e)),t}k(e){ze(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new rt(this.O(Ie()),this.O(Ie()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=Ae(e).nextSibling;Ae(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=Ze,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ze}_$AI(e,t=this,i,r){const s=this.strings;let o=!1;if(void 0===s)e=tt(this,e,t,0),o=!Ue(e)||e!==this._$AH&&e!==Ye,o&&(this._$AH=e);else{const r=e;let a,n;for(e=s[0],a=0;a<s.length-1;a++)n=tt(this,r[i+a],t,a),n===Ye&&(n=this._$AH[a]),o||=!Ue(n)||n!==this._$AH[a],n===Ze?e=Ze:e!==Ze&&(e+=(n??"")+s[a+1]),this._$AH[a]=n}o&&!r&&this.j(e)}j(e){e===Ze?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ot extends st{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ze?void 0:e}}let at=class extends st{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ze)}},nt=class extends st{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=tt(this,e,t,0)??Ze)===Ye)return;const i=this._$AH,r=e===Ze&&i!==Ze||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Ze&&(i===Ze||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},lt=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){tt(this,e)}};const ht={I:rt},ct=_e.litHtmlPolyfillSupport;ct?.(et,rt),(_e.litHtmlVersions??=[]).push("3.3.2");const dt=(e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=i?.renderBefore??null;r._$litPart$=s=new rt(t.insertBefore(Ie(),e),e,void 0,i??{})}return s._$AI(e),s},pt=globalThis;let ut=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ye}};ut._$litElement$=!0,ut.finalized=!0,pt.litElementHydrateSupport?.({LitElement:ut});const mt=pt.litElementPolyfillSupport;mt?.({LitElement:ut}),(pt.litElementVersions??=[]).push("4.2.2");const gt=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ft={attribute:!0,type:String,converter:ke,reflect:!1,hasChanged:Ce},yt=(e=ft,t,i)=>{const{kind:r,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,s,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];t.call(this,i),this.requestUpdate(r,s,e,!0,i)}}throw Error("Unsupported decorator location: "+r)};function vt(e){return(t,i)=>"object"==typeof i?yt(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function bt(e){return vt({...e,state:!0,attribute:!1})}function wt(e){return(t,i)=>{const{slot:r,selector:s}=e??{},o="slot"+(r?`[name=${r}]`:":not([name])");return((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){const t=this.renderRoot?.querySelector(o),i=t?.assignedElements(e)??[];return void 0===s?i:i.filter(e=>e.matches(s))}})}}const xt=e=>e??Ze,{I:St}=ht,kt=e=>e,Ct=(e,t)=>void 0!==e?._$litType$,Et=()=>document.createComment(""),Tt=(e,t,i)=>{const r=e._$AA.parentNode,s=e._$AB;if(void 0===i){const t=r.insertBefore(Et(),s),o=r.insertBefore(Et(),s);i=new St(t,o,e,e.options)}else{const t=i._$AB.nextSibling,o=i._$AM,a=o!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==o._$AU&&i._$AP(t)}if(t!==s||a){let e=i._$AA;for(;e!==t;){const t=kt(e).nextSibling;kt(r).insertBefore(e,s),e=t}}}return i},_t={},At=(e,t=_t)=>e._$AH=t,Pt=e=>e._$AH,$t=1,Rt=2,Lt=3,Dt=4,Ot=5,Mt=6,It=e=>(...t)=>({_$litDirective$:e,values:t});let Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const zt=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const r of i)r._$AO?.(t,!1),zt(r,t);return!0},Ft=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},Bt=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Vt(t)}};function Nt(e){void 0!==this._$AN?(Ft(this),this._$AM=e,Bt(this)):this._$AM=e}function jt(e,t=!1,i=0){const r=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(r))for(let o=i;o<r.length;o++)zt(r[o],!1),Ft(r[o]);else null!=r&&(zt(r,!1),Ft(r));else zt(this,e)}const Vt=e=>{e.type==Rt&&(e._$AP??=jt,e._$AQ??=Nt)};let Ht=class extends Ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Bt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(zt(this,e),Ft(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};const Wt=()=>new Gt;let Gt=class{};const qt=new WeakMap,Yt=It(class extends Ht{render(e){return Ze}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Ze}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=qt.get(t);void 0===i&&(i=new WeakMap,qt.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?qt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});let Zt=class extends Ut{constructor(e){if(super(e),this.it=Ze,e.type!==Rt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ze||null==e)return this._t=void 0,this.it=e;if(e===Ye)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Zt.directiveName="unsafeHTML",Zt.resultType=1;const Xt=It(Zt);let Kt=class extends Zt{};Kt.directiveName="unsafeSVG",Kt.resultType=2;const Qt=It(Kt),Jt=[];for(let Bw=0;Bw<256;++Bw)Jt.push((Bw+256).toString(16).slice(1));let ei;const ti=new Uint8Array(16);const ii={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function ri(e,t,i){const r=(e=e||{}).random??e.rng?.()??function(){if(!ei){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ei=crypto.getRandomValues.bind(crypto)}return ei(ti)}();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=15&r[6]|64,r[8]=63&r[8]|128,function(e,t=0){return(Jt[e[t+0]]+Jt[e[t+1]]+Jt[e[t+2]]+Jt[e[t+3]]+"-"+Jt[e[t+4]]+Jt[e[t+5]]+"-"+Jt[e[t+6]]+Jt[e[t+7]]+"-"+Jt[e[t+8]]+Jt[e[t+9]]+"-"+Jt[e[t+10]]+Jt[e[t+11]]+Jt[e[t+12]]+Jt[e[t+13]]+Jt[e[t+14]]+Jt[e[t+15]]).toLowerCase()}(r)}const si="localeContext",oi=e=>{re.on("languageChanged",t=>{e.locale=t}),void 0===e.locale?e.locale=re.language:re.changeLanguage(e.locale)},ai={cs:["cs","cz","cs_CZ","cs_CS"],fr:["fr","fr_FR","fr_CA"],de:["de","de_DE","de_AT","de_CH"],cy:["cy","cy_GB","cy"],en:["en","en_US","en_GB","en_CA","en_AU","en_NZ","en_IE","en_ZA"]},ni={fromAttribute:e=>{let t,i=0;for(;i<Object.keys(ai).length&&void 0===t;){const r=Object.keys(ai)[i];ai[r].includes(e)&&(t=r),i++}return t??"en"},toAttribute:e=>e};var li=(e=>(e.moreoptions="moreoptions",e.loading="loading",e.config="config",e.temperature="temperature",e.upload="upload",e.uploadafile="uploadafile",e.selectfile="selectfile",e.addfiles="addfiles",e.clear="clear",e.dragorselectfile="dragorselectfile",e.share="share",e.fileloadingerror="fileloadingerror",e.embedhint="embedhint",e.embedlibrary="embedlibrary",e.embedcomponent="embedcomponent",e.copy="copy",e.create="create",e.remotefoldersbrowseraddfolderhint="remotefoldersbrowseraddfolderhint",e.file="file",e.layout_simple="layout_simple",e.layout_advanced="layout_advanced",e.layout_nogui="layout_nogui",e.layout_lesson="layout_lesson",e.next="next",e.prev="prev",e.back="back",e.close="close",e.open="open",e.detail="detail",e.showeverything="showeverything",e.palette="palette",e.description="description",e.author="author",e.license="license",e.recordedat="recordedat",e.displaysettings="displaysettings",e.filerendering="filerendering",e.pixelated="pixelated",e.smooth="smooth",e.filerenderinghint="filerenderinghint",e.adjusttimescale="adjusttimescale",e.automaticrange="automaticrange",e.fullrange="fullrange",e.adjusttimescalehint="adjusttimescalehint",e.colourpalettehint="colourpalettehint",e.palettename="palettename",e.fileinfo="fileinfo",e.thermalfilename="thermalfilename",e.thermalfileurl="thermalfileurl",e.thermalfiledownload="thermalfiledownload",e.visiblefilename="visiblefilename",e.visiblefileurl="visiblefileurl",e.visiblefiledownload="visiblefiledownload",e.togglevisibleimage="togglevisibleimage",e.time="time",e.duration="duration",e.resolution="resolution",e.bytesize="bytesize",e.minimaltemperature="minimaltemperature",e.maximaltemperature="maximaltemperature",e.filetype="filetype",e.type="type",e.supporteddevices="supporteddevices",e.numfiles="numfiles",e.download="download",e.downloadoriginalfiles="downloadoriginalfiles",e.downloadoriginalfileshint="downloadoriginalfileshint",e.downloadoriginalfile="downloadoriginalfile",e.exportcurrentframeaspng="exportcurrentframeaspng",e.convertentiresequencetovideo="convertentiresequencetovideo",e.pngofindividualimages="pngofindividualimages",e.pngofindividualimageshint="pngofindividualimageshint",e.pngofentiregroup="pngofentiregroup",e.pngofentiregrouphint="pngofentiregrouphint",e.csvofanalysisdata="csvofanalysisdata",e.csvofanalysisdatahint="csvofanalysisdatahint",e.exportimagewidth="exportimagewidth",e.exportimagefontsize="exportimagefontsize",e.exportgroupname="exportgroupname",e.exportfilenames="exportfilenames",e.numberofcolumns="numberofcolumns",e.exportdimensions="exportdimensions",e.exportgroup="exportgroup",e.thermalscale="thermalscale",e.thermalrange="thermalrange",e.filedate="filedate",e.folder="folder",e.folders="folders",e.showingfolder="showingfolder",e.showingfolders="showingfolders",e.and="and",e.or="or",e.doyouwanttoadd="doyouwanttoadd",e.youmayalsoadd="youmayalsoadd",e.range="range",e.info="info",e.note="note",e.group="group",e.donotgroup="donotgroup",e.groupby="groupby",e.groupped="groupped",e.bydays="bydays",e.byhours="byhours",e.byweeks="byweeks",e.bymonths="bymonths",e.byyears="byyears",e.play="play",e.pause="pause",e.stop="stop",e.date="date",e.frame="frame",e.playbackspeed="playbackspeed",e.graphlines="graphlines",e.straightlines="straightlines",e.smoothlines="smoothlines",e.graphlineshint="graphlineshint",e.reload="reload",e.analysis="analysis",e.analyses="analyses",e.avg="avg",e.min="min",e.max="max",e.size="size",e.edit="edit",e.editsth="editsth",e.remove="remove",e.addpoint="addpoint",e.addrectangle="addrectangle",e.addellipsis="addellipsis",e.analysishint="analysishint",e.graph="graph",e.graphhint1="graphhint1",e.graphhint2="graphhint2",e.rectangle="rectangle",e.ellipsis="ellipsis",e.point="point",e.name="name",e.color="color",e.top="top",e.left="left",e.right="right",e.bottom="bottom",e.columns="columns",e.fromto="fromto",e.downloadgraphdataascsv="downloadgraphdataascsv",e.apparenttemperature="apparenttemperature",e.airtemperature="airtemperature",e.relativeairhumidity="relativeairhumidity",e.windspeed="windspeed",e.inpercent="inpercent",e.apparenttemperatureverbose="apparenttemperatureverbose",e.youfeelwarmer="youfeelwarmer",e.youfeelcolder="youfeelcolder",e.apparenttemperaturehint="apparenttemperaturehint",e.analysissync="analysissync",e.inspecttemperatures="inspecttemperatures",e.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",e.editanalysis="editanalysis",e.dragcornersofselectedanalysis="dragcornersofselectedanalysis",e.addpointanalysis="addpointanalysis",e.clickandaddpoint="clickandaddpoint",e.addrectangleanalysis="addrectangleanalysis",e.clickandaddrectangle="clickandaddrectangle",e.addellipsisanalysis="addellipsisanalysis",e.clickandaddellipsis="clickandaddellipsis",e.tutorial="tutorial",e.colourpalette="colourpalette",e.palettehint="palettehint",e.remotefoldersbrowser="remotefoldersbrowser",e.server="server",e.networklog="networklog",e.editfile="editfile",e.editfolder="editfolder",e.editcomment="editcomment",e.user="user",e.griddisplay="griddisplay",e.tabledisplay="tabledisplay",e.deletefile="deletefile",e.deletefolder="deletefolder",e.comments="comments",e.deletecomment="deletecomment",e.savecomment="savecomment",e.addcomment="addcomment",e.nocomments="nocomments",e.savechanges="savechanges",e.uploadfile="uploadfile",e.compactview="compactview",e.showdiscussion="showdiscussion",e.edittags="edittags",e.assignedtags="assignedtags",e.availabletags="availabletags",e.connectioninformation="connectioninformation",e.serverurl="serverurl",e.servername="servername",e.login="login",e.logout="logout",e.logoutmessage="logoutmessage",e.loginerror="logineerror",e.password="password",e.accessibletologgedinusers="accessibletologgedinusers",e.display="display",e.content="content",e.syncanalyses="syncanalyses",e.overviewofyourfolders="overviewofyourfolders",e.uploadedby="uploadedby",e.uploadeddat="uploadeddat",e.createfolder="createfolder",e.subfolder="subfolder",e.createsubfolder="createsubfolder",e.delete="delete",e.export="export",e.exportcontent="exportcontent",e.histogram="histogram",e.timeline="timeline",e.exportwidth="exportwidth",e.exportmargin="exportmargin",e.exportgap="exportgap",e.exportgrahpheight="exportgrahpheight",e.imagecompression="imagecompression",e.videoquality="videoquality",e.exportvideo="exportvideo",e.exportpng="exportpng",e.exportrecordingframes="exportrecordingframes",e.exportencodingfile="exportencodingfile",e.exportdonotclosewindowhint="exportdonotclosewindowhint",e.theme="theme",e.light="light",e.dark="dark",e.foldermayhavefiles="foldermayhavefiles",e.foldermayhavesubfolders="foldermayhavesubfolders",e))(li||{});const hi=Object.fromEntries([{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}].map(e=>[e.code,e]));var ci=Object.defineProperty;const di=class extends ut{get UUID(){var e;return void 0===this._UUID&&(this._UUID=ii.randomUUID&&!e?ii.randomUUID():ri(e)),this._UUID}getUUID(e){return this.UUID+"_"+e}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),re.on("languageChanged",e=>{this._locale=e})}i(e){return qe`${Qt(e)}`}t(e){return se(li[e])}};di.shadowRootOptions={...ut.shadowRootOptions,mode:"open"};let pi=di;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&ci(t,i,s)})([p({context:si,subscribe:!0})],pi.prototype,"_locale");var ui=Object.defineProperty,mi=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&ui(t,i,o),o};const gi={fromAttribute(e){if("string"==typeof e){const t=e.trim();return t.length>0?parseFloat(t):void 0}},toAttribute:e=>void 0!==e?e.toString():void 0},fi=class extends pi{constructor(){super(...arguments),this.tRef=Wt(),this.vRef=Wt(),this.vunitsRef=Wt(),this.haRef=Wt(),this.vunits="mps"}kphToMps(e){return.2778*e}calculateE(e,t){return e*(6.105/100)*Math.exp(17.27*t/(237.7+t))}calculateTa(e,t,i){return e+.33*t-.7*i-4}firstUpdated(e){super.firstUpdated(e),oi(this),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.temperature=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(e,t){if(e.has(t)){const e=this[t],i=this[`${t}Ref`];i.value&&(i.value.value=null!=e?e.toString():""),this.recalculateVa()}}recalculateVa(){if(void 0!==this.temperature&&void 0!==this.ha&&void 0!==this.v){const e="mps"===this.vunits?this.v:this.kphToMps(this.v),t=this.calculateE(this.ha,this.temperature),i=this.calculateTa(this.temperature,t,e);this.ta=i}else this.ta=void 0}shouldUpdate(e){return super.shouldUpdate(e),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}willUpdate(e){super.willUpdate(e),this.processValueChange(e,"t"),this.processValueChange(e,"v"),this.processValueChange(e,"ha"),e.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(e,t,i,r,s,o,a,n,l){const h="string"==typeof r?Xt(r):r;return qe`
            <div class="field">

                <div class="column column__label">
                    <label for=${t}>
                        ${i}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${Yt(e)} 
                            id=${t}
                            name=${t}
                            value=${xt(s)}
                            min=${xt(o)}
                            max=${xt(a)}
                            step=${xt(n)}
                            type="number"
                            @blur=${e=>{const i=e.target,r=i.value.trim();this[t]=""===r||null==r?void 0:parseFloat(i.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?qe`<label for=${t}>${l}</label>`:Ze}

                </div>

            </div>

            
        `}renderResult(e,t){const i=e-t,r={diff:Math.abs(i).toFixed(2),app:e.toFixed(2),t:t},s=se(li.apparenttemperatureverbose,r),o=se(i<0?li.youfeelcolder:li.youfeelwarmer,r),a=e.toFixed(2);return qe`<div class="result">

            <p class="result_label">${se(li.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${o}</p>
        
        </div>`}render(){return qe`
            <thermal-app 
                label=${se(li.apparenttemperature)} 
                author="LabIR Edu" 
                license="CC BY-SA 4.0"
            >

                <thermal-dialog label=${se(li.info)} slot="bar-pre">
                    <thermal-btn slot="invoker">${se(li.info)}</thermal-btn>
                    <div slot="content">
                        ${Xt(se(li.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${void 0!==this.t||void 0!==this.v||void 0!==this.ha?qe`<thermal-btn @click=${()=>{this.temperature=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-btn>`:Ze}


                <section class="table">

                ${this.renderNumberField(this.tRef,"temperature",se(li.airtemperature),"°C",this.temperature,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",se(li.windspeed),qe`<select 
                    @change=${e=>{const t=e.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${Yt(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",se(li.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${void 0!==this.ta&&void 0!==this.temperature?this.renderResult(this.ta,this.temperature):Ze}
                </div>
                

            </thermal-app>
        `}};fi.styles=ce`

        .table {
            display: table;
            width: 100%;
            border-collapse: collapse;
        }
    
        .field {

            width: 100%;
            display: table-row;

        }

        .column {
            display: table-cell;
            padding: calc( var(--thermal-gap) * .5 );
        }

        .column__label {
            text-align: right;
        }

        .column__value {
        
        }

        .input_wrapper {

            background: var( --thermal-background );

            width: 200px;
            padding: calc( var( --thermal-gap ) / 2 );

            border-radius: var( --thermal-radius );
        
        }

        input {

            font-size: var(--thermal-fs);
            width: 120px;
            text-align: right;
            border: 0;
            border-bottom: 1px var(--thermal-border-style)var( --thermal-slate-light );
            background: transparent;
            color: var( --thermal-foreground );

            -moz-appearance: textfield;

            &:focus {
                outline: 0;
                border-bottom: 1px var(--thermal-border-style)var( --thermal-primary );
            }
        
        }

        select, option, input {
            font-size: var(--thermal-fs);
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate-light );
            border-radius: var( --thermal-radius );
        }



        .result {

            padding: calc(var(--thermal-gap) * .7);
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            text-align: center;

            & > p {
                margin: 0;
                padding: calc( var( --thermal-gap ) * .25 );
            }

        }

        .result_value {
            font-weight: bold;
            font-size: calc( var(--thermal-fs) * 1.2 )
        }

        .result_label {
        }

        .result_comment {
            font-size: calc( var(--thermal-fs) * .8 )
        }

        .tabindex {
            border-radius: var( --thermal-radius );
            &:focus {
                outline: 3px var(--thermal-border-style)var(--thermal-primary);
            }
        }


    `;let yi=fi;mi([vt({type:String,reflect:!0,attribute:"t",converter:gi})],yi.prototype,"temperature"),mi([vt({type:String,reflect:!0,attribute:!0,converter:gi})],yi.prototype,"v"),mi([vt({type:String,reflect:!0,attribute:!0,converter:gi})],yi.prototype,"ha"),mi([bt()],yi.prototype,"ta"),mi([vt({type:String,reflect:!0,attribute:!0})],yi.prototype,"vunits"),mi([d({context:si}),vt({reflect:!0,converter:ni})],yi.prototype,"locale");class vi{constructor(e){this.host=e,e.addController(this)}log(...e){this.host.log(this.constructor.name,...e)}}function bi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function wi(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if("function"==typeof t){var i=function e(){var i=!1;try{i=this instanceof e}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),i}var xi={exports:{}};const Si=wi(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var ki;var Ci=(ki||(ki=1,function(e){var t={},i={exports:{}};!function(e){var t=function(e){return void 0!==e&&null!=e.versions&&null!=e.versions.node&&e+""=="[object process]"};e.exports.isNode=t,e.exports.platform="undefined"!=typeof process&&t(process)?"node":"browser";var i="node"===e.exports.platform&&Si;e.exports.isMainThread="node"===e.exports.platform?(!i||i.isMainThread)&&!process.connected:"undefined"!=typeof Window,e.exports.cpus="browser"===e.exports.platform?self.navigator.hardwareConcurrency:Si.cpus().length}(i);var r=i.exports;function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,i){return t=p(t),v(e,g()?Reflect.construct(t,i||[],p(e).constructor):t.apply(e,i))}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t,i){if(g())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var s=new(e.bind.apply(e,r));return i&&b(s,i.prototype),s}function h(e,t,i){return Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=k(e))||t){i&&(e=i);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,n=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return a=e.done,e},e:function(e){n=!0,o=e},f:function(){try{a||null==i.return||i.return()}finally{if(n)throw o}}}}function d(e,t,i){return(t=x(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function m(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(g=function(){return!!e})()}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach(function(t){d(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function v(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function x(e){var t=w(e,"string");return"symbol"==typeof t?t:t+""}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(e){if("string"==typeof e)return s(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}function C(e){var t="function"==typeof Map?new Map:void 0;return C=function(e){if(null===e||!m(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return l(e,arguments,p(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),b(i,e)},C(e)}var E,T={exports:{}},_={};function A(){if(E)return _;function e(s,o){var a=this;if(!(this instanceof e))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof s)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var n=[],l=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var h=function(e,t){n.push(e),l.push(t)};this.then=function(i,r){return new e(function(e,s){var o=i?t(i,e,s):e,a=r?t(r,e,s):s;h(o,a)},a)};var c=function(e){return a.resolved=!0,a.rejected=!1,a.pending=!1,n.forEach(function(t){t(e)}),h=function(t,i){t(e)},c=d=function(){},a},d=function(e){return a.resolved=!1,a.rejected=!0,a.pending=!1,l.forEach(function(t){t(e)}),h=function(t,i){i(e)},c=d=function(){},a};this.cancel=function(){return o?o.cancel():d(new i),a},this.timeout=function(e){if(o)o.timeout(e);else{var t=setTimeout(function(){d(new r("Promise timed out after "+e+" ms"))},e);a.always(function(){clearTimeout(t)})}return a},s(function(e){c(e)},function(e){d(e)})}function t(e,t,i){return function(r){try{var s=e(r);s&&"function"==typeof s.then&&"function"==typeof s.catch?s.then(t,i):t(s)}catch(o){i(o)}}}function i(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function r(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return E=1,e.prototype.catch=function(e){return this.then(null,e)},e.prototype.always=function(e){return this.then(e,e)},e.prototype.finally=function(t){var i=this,r=function(){return new e(function(e){return e()}).then(t).then(function(){return i})};return this.then(r,r)},e.all=function(t){return new e(function(e,i){var r=t.length,s=[];r?t.forEach(function(t,o){t.then(function(t){s[o]=t,0==--r&&e(s)},function(e){r=0,i(e)})}):e(s)})},e.defer=function(){var t={};return t.promise=new e(function(e,i){t.resolve=e,t.reject=i}),t},i.prototype=new Error,i.prototype.constructor=Error,i.prototype.name="CancellationError",e.CancellationError=i,r.prototype=new Error,r.prototype.constructor=Error,r.prototype.name="TimeoutError",e.TimeoutError=r,_.Promise=e,_}var P,$,R={};function L(){return $?P:($=1,P='!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0,this[Symbol.toStringTag]="Promise";var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?s(e,t,r):t,i=n?s(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new u),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function s(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function u(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},u.prototype=new Error,u.prototype.constructor=Error,u.prototype.name="CancellationError",i.CancellationError=u,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,s="__workerpool-cleanup__",u={exit:function(){}},c={addAbortListener:function(e){u.abortListeners.push(e)},emit:u.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)u.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},u.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;u.send=f.postMessage.bind(f),u.on=f.on.bind(f),u.exit=process.exit.bind(process)}else u.on=process.on.bind(process),u.send=function(e){process.send(e)},u.on("disconnect",(function(){process.exit(1)})),u.exit=process.exit.bind(process)}function d(e){return e&&e.toJSON?JSON.parse(JSON.stringify(e)):JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)))}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}u.methods={},u.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},u.methods.methods=function(){return Object.keys(u.methods)},u.terminationHandler=void 0,u.abortListenerTimeout=1e3,u.abortListeners=[],u.terminateAndExit=function(e){var n=function(){u.exit(e)};if(!u.terminationHandler)return n();var t=u.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},u.cleanup=function(e){if(!u.abortListeners.length)return u.send({id:e,method:s,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=u.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),u.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),u.abortListeners.length||(u.abortListeners=[])}),(function(){clearTimeout(n),u.exit()}));return new i((function(e,n){o.then(e,n),r.then(e,n)})).then((function(){u.send({id:e,method:s,error:null})}),(function(n){u.send({id:e,method:s,error:n?d(n):null})}))};var p=null;u.on("message",(function(e){if("__workerpool-terminate__"===e)return u.terminateAndExit(0);if(e.method===s)return u.cleanup(e.id);try{var n=u.methods[e.method];if(!n)throw new Error(\'Unknown method "\'+e.method+\'"\');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?u.send({id:e.id,result:n.message,error:null},n.transfer):u.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){u.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?u.send({id:e.id,result:r.message,error:null},r.transfer):u.send({id:e.id,result:r,error:null}),p=null)}catch(n){u.send({id:e.id,result:null,error:d(n)})}})),u.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(u.methods[t]=e[t],u.methods[t].worker=c);n&&(u.terminationHandler=n.onTerminate,u.abortListenerTimeout=n.abortListenerTimeout||1e3),u.send("ready")},u.emit=function(e){if(p){if(e instanceof t)return void u.send({id:p,isEvent:!0,payload:e.message},e.transfer);u.send({id:p,isEvent:!0,payload:e})}},n.add=u.register,n.emit=u.emit}(t),n(t)}));\n//# sourceMappingURL=worker.min.js.map\n')}R.validateOptions=function(e,t,i){if(e){var r=e?Object.keys(e):[],s=r.find(function(e){return!t.includes(e)});if(s)throw new Error('Object "'+i+'" contains an unknown option "'+s+'"');var o=t.find(function(e){return Object.prototype[e]&&!r.includes(e)});if(o)throw new Error('Object "'+i+'" contains an inherited option "'+o+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return e}},R.workerOptsNames=["credentials","name","type"],R.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],R.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"];var D=A().Promise,O=r,M=R.validateOptions,I=R.forkOptsNames,U=R.workerThreadOptsNames,z=R.workerOptsNames,F="__workerpool-terminate__",B="__workerpool-cleanup__";function N(){var e=V();if(!e)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return e}function j(){if("function"!=typeof Worker&&("object"!==("undefined"==typeof Worker?"undefined":S(Worker))||"function"!=typeof Worker.prototype.constructor))throw new Error("WorkerPool: Web Workers not supported")}function V(){try{return Si}catch(e){if("object"===S(e)&&null!==e&&"MODULE_NOT_FOUND"===e.code)return null;throw e}}function H(){if("browser"===O.platform){if("undefined"==typeof Blob)throw new Error("Blob not supported by the browser");if(!window.URL||"function"!=typeof window.URL.createObjectURL)throw new Error("URL.createObjectURL not supported by the browser");var e=new Blob([L()],{type:"text/javascript"});return window.URL.createObjectURL(e)}return __dirname+"/worker.js"}function W(e,t){if("web"===t.workerType)return j(),G(e,t.workerOpts,Worker);if("thread"===t.workerType)return q(e,i=N(),t);if("process"!==t.workerType&&t.workerType){if("browser"===O.platform)return j(),G(e,t.workerOpts,Worker);var i=V();return i?q(e,i,t):Y(e,Z(t),Si)}return Y(e,Z(t),Si)}function G(e,t,i){M(t,z,"workerOpts");var r=new i(e,t);return r.isBrowserWorker=!0,r.on=function(e,t){this.addEventListener(e,function(e){t(e.data)})},r.send=function(e,t){this.postMessage(e,t)},r}function q(e,t,i){var r,s;M(null==i?void 0:i.workerThreadOpts,U,"workerThreadOpts");var o=new t.Worker(e,y({stdout:null!==(r=null==i?void 0:i.emitStdStreams)&&void 0!==r&&r,stderr:null!==(s=null==i?void 0:i.emitStdStreams)&&void 0!==s&&s},null==i?void 0:i.workerThreadOpts));return o.isWorkerThread=!0,o.send=function(e,t){this.postMessage(e,t)},o.kill=function(){return this.terminate(),!0},o.disconnect=function(){this.terminate()},null!=i&&i.emitStdStreams&&(o.stdout.on("data",function(e){return o.emit("stdout",e)}),o.stderr.on("data",function(e){return o.emit("stderr",e)})),o}function Y(e,t,i){M(t.forkOpts,I,"forkOpts");var r=i.fork(e,t.forkArgs,t.forkOpts),s=r.send;return r.send=function(e){return s.call(r,e)},t.emitStdStreams&&(r.stdout.on("data",function(e){return r.emit("stdout",e)}),r.stderr.on("data",function(e){return r.emit("stderr",e)})),r.isChildProcess=!0,r}function Z(e){e=e||{};var t=process.execArgv.join(" "),i=-1!==t.indexOf("--inspect"),r=-1!==t.indexOf("--debug-brk"),s=[];return i&&(s.push("--inspect="+e.debugPort),r&&s.push("--debug-brk")),process.execArgv.forEach(function(e){e.indexOf("--max-old-space-size")>-1&&s.push(e)}),Object.assign({},e,{forkArgs:e.forkArgs,forkOpts:Object.assign({},e.forkOpts,{execArgv:(e.forkOpts&&e.forkOpts.execArgv||[]).concat(s),stdio:e.emitStdStreams?"pipe":void 0})})}function X(e){for(var t=new Error(""),i=Object.keys(e),r=0;r<i.length;r++)t[i[r]]=e[i[r]];return t}function K(e,t){Object.values(e.processing).forEach(function(e){var i;return null==e||null===(i=e.options)||void 0===i?void 0:i.on(t)}),Object.values(e.tracking).forEach(function(e){var i;return null==e||null===(i=e.options)||void 0===i?void 0:i.on(t)})}function Q(e,t){var i=this,r=t||{};function s(e){for(var t in i.terminated=!0,i.processing)void 0!==i.processing[t]&&i.processing[t].resolver.reject(e);i.processing=Object.create(null)}function o(){var e,t=c(i.requestQueue.splice(0));try{for(t.s();!(e=t.n()).done;){var r=e.value;i.worker.send(r.message,r.transfer)}}catch(s){t.e(s)}finally{t.f()}}this.script=e||H(),this.worker=W(this.script,r),this.debugPort=r.debugPort,this.forkOpts=r.forkOpts,this.forkArgs=r.forkArgs,this.workerOpts=r.workerOpts,this.workerThreadOpts=r.workerThreadOpts,this.workerTerminateTimeout=r.workerTerminateTimeout,e||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(e){K(i,{stdout:e.toString()})}),this.worker.on("stderr",function(e){K(i,{stderr:e.toString()})}),this.worker.on("message",function(e){if(!i.terminated)if("string"==typeof e&&"ready"===e)i.worker.ready=!0,o();else{var t,r=e.id;if(void 0!==(t=i.processing[r])?e.isEvent?t.options&&"function"==typeof t.options.on&&t.options.on(e.payload):(delete i.processing[r],!0===i.terminating&&i.terminate(),e.error?t.resolver.reject(X(e.error)):t.resolver.resolve(e.result)):void 0!==(t=i.tracking[r])&&e.isEvent&&t.options&&"function"==typeof t.options.on&&t.options.on(e.payload),e.method===B){var s=i.tracking[e.id];void 0!==s&&(e.error?(clearTimeout(s.timeoutId),s.resolver.reject(X(e.error))):(i.tracking&&clearTimeout(s.timeoutId),s.resolver.reject(new J(s.error)))),delete i.tracking[r]}}});var a=this.worker;this.worker.on("error",function(e){var t=e&&e.message?e.message:String(e||"Unknown worker error");s(new ee("Workerpool Worker error: "+t,e))}),this.worker.on("exit",function(e,t){var r="Workerpool Worker terminated Unexpectedly\n";r+="    exitCode: `"+e+"`\n",r+="    signalCode: `"+t+"`\n",r+="    workerpool.script: `"+i.script+"`\n",r+="    spawnArgs: `"+a.spawnargs+"`\n",r+="    spawnfile: `"+a.spawnfile+"`\n",r+="    stdout: `"+a.stdout+"`\n",r+="    stderr: `"+a.stderr+"`\n",s(new ee(r))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}function J(e){this.error=e,this.stack=(new Error).stack}Q.prototype.methods=function(){return this.exec("methods")},Q.prototype.exec=function(e,t,i,r){i||(i=D.defer());var s=++this.lastId;this.processing[s]={id:s,resolver:i,options:r};var o={message:{id:s,method:e,params:t},transfer:r&&r.transfer};this.terminated?i.reject(new ee("Worker is terminated")):this.worker.ready?this.worker.send(o.message,o.transfer):this.requestQueue.push(o);var a=this;return i.promise.catch(function(e){if(e instanceof D.CancellationError||e instanceof D.TimeoutError)return a.tracking[s]={id:s,resolver:D.defer(),options:r,error:e},delete a.processing[s],a.tracking[s].resolver.promise=a.tracking[s].resolver.promise.catch(function(e){if(delete a.tracking[s],e instanceof J)throw e.error;return a.terminateAndNotify(!0).then(function(){throw e},function(e){throw e})}),a.worker.send({id:s,method:B}),a.tracking[s].timeoutId=setTimeout(function(){a.tracking[s].resolver.reject(e)},a.workerTerminateTimeout),a.tracking[s].resolver.promise;throw e})},Q.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Q.prototype.terminate=function(e,t){var i=this;if(e){for(var r in this.processing)void 0!==this.processing[r]&&this.processing[r].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var s=0,o=Object.values(i.tracking);s<o.length;s++){var a=o[s];clearTimeout(a.timeoutId),a.resolver.reject(new Error("Worker Terminating"))}if(i.tracking=Object.create(null),"function"==typeof t&&(this.terminationHandler=t),this.busy())this.terminating=!0;else{var n=function(e){if(i.terminated=!0,i.cleaning=!1,null!=i.worker&&i.worker.removeAllListeners&&i.worker.removeAllListeners("message"),i.worker=null,i.terminating=!1,i.terminationHandler)i.terminationHandler(e,i);else if(e)throw e};if(this.worker){if("function"==typeof this.worker.kill){if(this.worker.killed)return void n(new Error("worker already killed!"));var l=setTimeout(function(){i.worker&&i.worker.kill()},this.workerTerminateTimeout);return this.worker.once("exit",function(){clearTimeout(l),i.worker&&(i.worker.killed=!0),n()}),this.worker.ready?this.worker.send(F):this.requestQueue.push({message:F}),void(this.cleaning=!0)}if("function"!=typeof this.worker.terminate)throw new Error("Failed to terminate worker");this.worker.terminate(),this.worker.killed=!0}n()}},Q.prototype.terminateAndNotify=function(e,t){var i=D.defer();return t&&i.promise.timeout(t),this.terminate(e,function(e,t){e?i.reject(e):i.resolve(t)}),i.promise};var ee=function(e){function t(e,i){var r;return n(this,t),(r=a(this,t,[e||"worker terminated"])).cause=i,r}return u(t,e),h(t)}(C(Error));T.exports=Q,T.exports._tryRequireWorkerThreads=V,T.exports._setupProcessWorker=Y,T.exports._setupBrowserWorker=G,T.exports._setupWorkerThreadWorker=q,T.exports.ensureWorkerThreads=N,T.exports.TerminateError=ee;var te,ie,re,se,oe,ae,ne=T.exports;function le(){if(ie)return te;function e(){this.tasks=[]}function t(){this.tasks=[]}return ie=1,e.prototype.push=function(e){this.tasks.push(e)},e.prototype.pop=function(){return this.tasks.shift()},e.prototype.size=function(){return this.tasks.length},e.prototype.contains=function(e){return this.tasks.includes(e)},e.prototype.clear=function(){this.tasks.length=0},t.prototype.push=function(e){this.tasks.push(e)},t.prototype.pop=function(){return this.tasks.pop()},t.prototype.size=function(){return this.tasks.length},t.prototype.contains=function(e){return this.tasks.includes(e)},t.prototype.clear=function(){this.tasks.length=0},te={FIFOQueue:e,LIFOQueue:t}}function he(){if(se)return re;se=1;var e=65535;function t(){this.ports=Object.create(null),this.length=0}return re=t,t.prototype.nextAvailableStartingAt=function(t){for(;!0===this.ports[t];)t++;if(t>=e)throw new Error("WorkerPool debug port limit reached: "+t+">= "+e);return this.ports[t]=!0,this.length++,t},t.prototype.releasePort=function(e){delete this.ports[e],this.length--},re}function ce(){if(ae)return oe;ae=1;var e=A().Promise,t=ne,i=r,s=le(),o=s.FIFOQueue,a=s.LIFOQueue,n=new(he());function l(e,r){"string"==typeof e?this.script=e||null:(this.script=null,r=e),this.workers=[],this.taskQueue=this._createQueue(r&&r.queueStrategy||"fifo"),r=r||{},this.forkArgs=Object.freeze(r.forkArgs||[]),this.forkOpts=Object.freeze(r.forkOpts||{}),this.workerOpts=Object.freeze(r.workerOpts||{}),this.workerThreadOpts=Object.freeze(r.workerThreadOpts||{}),this.debugPortStart=r.debugPortStart||43210,this.nodeWorker=r.nodeWorker,this.workerType=r.workerType||r.nodeWorker||"auto",this.maxQueueSize=r.maxQueueSize||1/0,this.workerTerminateTimeout=r.workerTerminateTimeout||1e3,this.onCreateWorker=r.onCreateWorker||function(){return null},this.onTerminateWorker=r.onTerminateWorker||function(){return null},this.emitStdStreams=r.emitStdStreams||!1,r&&"maxWorkers"in r?(h(r.maxWorkers),this.maxWorkers=r.maxWorkers):this.maxWorkers=Math.max((i.cpus||4)-1,1),r&&"minWorkers"in r&&("max"===r.minWorkers?this.minWorkers=this.maxWorkers:(c(r.minWorkers),this.minWorkers=r.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),"thread"===this.workerType&&t.ensureWorkerThreads()}function h(e){if(!d(e)||!p(e)||e<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function c(e){if(!d(e)||!p(e)||e<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function d(e){return"number"==typeof e}function p(e){return Math.round(e)==e}return l.prototype.exec=function(t,i,r){if(i&&!Array.isArray(i))throw new TypeError('Array expected as argument "params"');if("string"==typeof t){var s=e.defer();if(this.taskQueue.size()>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var o={method:t,params:i,resolver:s,timeout:null,options:r};this.taskQueue.push(o);var a=s.promise.timeout,n=this.taskQueue;return s.promise.timeout=function(e){return n.contains(o)?(o.timeout=e,s.promise):a.call(s.promise,e)},this._next(),s.promise}if("function"==typeof t)return this.exec("run",[String(t),i],r);throw new TypeError('Function or string expected as argument "method"')},l.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var e=this;return this.exec("methods").then(function(t){var i={};return t.forEach(function(t){i[t]=function(){return e.exec(t,Array.prototype.slice.call(arguments))}}),i})},l.prototype._next=function(){if(this.taskQueue.size()>0){var e=this._getWorker();if(e){var t=this,i=this.taskQueue.pop();if(i.resolver.promise.pending){var r=e.exec(i.method,i.params,i.resolver,i.options).then(t._boundNext).catch(function(){if(e.terminated)return t._removeWorker(e)}).then(function(){t._next()});"number"==typeof i.timeout&&r.timeout(i.timeout)}else t._next()}}},l.prototype._getWorker=function(){for(var e=this.workers,t=0;t<e.length;t++){var i=e[t];if(!1===i.busy())return i}return e.length<this.maxWorkers?(i=this._createWorkerHandler(),e.push(i),i):null},l.prototype._removeWorker=function(t){var i=this;return n.releasePort(t.debugPort),this._removeWorkerFromList(t),this._ensureMinWorkers(),new e(function(e,r){t.terminate(!1,function(s){i.onTerminateWorker({forkArgs:t.forkArgs,forkOpts:t.forkOpts,workerThreadOpts:t.workerThreadOpts,script:t.script}),s?r(s):e(t)})})},l.prototype._removeWorkerFromList=function(e){var t=this.workers.indexOf(e);-1!==t&&this.workers.splice(t,1)},l.prototype.terminate=function(t,i){for(var r=this,s=this.taskQueue;s.size()>0;){var o=s.pop();if(!o)break;o.resolver.reject(new Error("Pool terminated"))}s.clear();var a=function(e){n.releasePort(e.debugPort),this._removeWorkerFromList(e)}.bind(this),l=[];return this.workers.slice().forEach(function(e){var s=e.terminateAndNotify(t,i).then(a).always(function(){r.onTerminateWorker({forkArgs:e.forkArgs,forkOpts:e.forkOpts,workerThreadOpts:e.workerThreadOpts,script:e.script})});l.push(s)}),e.all(l)},l.prototype.stats=function(){var e=this.workers.length,t=this.workers.filter(function(e){return e.busy()}).length;return{totalWorkers:e,busyWorkers:t,idleWorkers:e-t,pendingTasks:this.taskQueue.size(),activeTasks:t}},l.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var e=this.workers.length;e<this.minWorkers;e++)this.workers.push(this._createWorkerHandler())},l.prototype._createWorkerHandler=function(){var e=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new t(e.script||this.script,{forkArgs:e.forkArgs||this.forkArgs,forkOpts:e.forkOpts||this.forkOpts,workerOpts:e.workerOpts||this.workerOpts,workerThreadOpts:e.workerThreadOpts||this.workerThreadOpts,debugPort:n.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})},l.prototype._createQueue=function(e){if("string"==typeof e)switch(e){case"fifo":return new o;case"lifo":return new a;default:throw new Error("Unknown queue strategy: "+e)}if(!e)throw new Error("Queue strategy cannot be null or undefined");for(var t=["push","pop","size","contains","clear"],i=0;i<t.length;i++){var r=t[i];if("function"!=typeof e[r])throw new Error("Queue strategy must implement method: "+r)}return e},oe=l}var de,pe,ue,me={};function ge(){if(pe)return de;function e(e,t){this.message=e,this.transfer=t}return pe=1,de=e}function fe(){return ue||(ue=1,function(e){var t=ge(),i=A().Promise,r="__workerpool-terminate__",s="__workerpool-cleanup__",o=1e3,a={exit:function(){}},n={addAbortListener:function(e){a.abortListeners.push(e)},emit:a.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)a.on=function(e,t){addEventListener(e,function(e){t(e.data)})},a.send=function(e,t){t?postMessage(e,t):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var l;try{l=Si}catch(u){if("object"!==S(u)||null===u||"MODULE_NOT_FOUND"!==u.code)throw u}if(l&&null!==l.parentPort){var h=l.parentPort;a.send=h.postMessage.bind(h),a.on=h.on.bind(h),a.exit=process.exit.bind(process)}else a.on=process.on.bind(process),a.send=function(e){process.send(e)},a.on("disconnect",function(){process.exit(1)}),a.exit=process.exit.bind(process)}function c(e){return e&&e.toJSON?JSON.parse(JSON.stringify(e)):JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)))}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}a.methods={},a.methods.run=function(e,t){var i=new Function("return ("+e+").apply(this, arguments);");return i.worker=n,i.apply(i,t)},a.methods.methods=function(){return Object.keys(a.methods)},a.terminationHandler=void 0,a.abortListenerTimeout=o,a.abortListeners=[],a.terminateAndExit=function(e){var t=function(){a.exit(e)};if(!a.terminationHandler)return t();var r=a.terminationHandler(e);return d(r)?(r.then(t,t),r):(t(),new i(function(e,t){t(new Error("Worker terminating"))}))},a.cleanup=function(e){if(!a.abortListeners.length)return a.send({id:e,method:s,error:c(new Error("Worker terminating"))}),new i(function(e){e()});var t,r=function(){a.exit()},o=function(){a.abortListeners.length||(a.abortListeners=[])},n=a.abortListeners.map(function(e){return e()}),l=new i(function(e,i){t=setTimeout(function(){i(new Error("Timeout occured waiting for abort handler, killing worker"))},a.abortListenerTimeout)}),h=i.all(n).then(function(){clearTimeout(t),o()},function(){clearTimeout(t),r()});return new i(function(e,t){h.then(e,t),l.then(e,t)}).then(function(){a.send({id:e,method:s,error:null})},function(t){a.send({id:e,method:s,error:t?c(t):null})})};var p=null;a.on("message",function(e){if(e===r)return a.terminateAndExit(0);if(e.method===s)return a.cleanup(e.id);try{var i=a.methods[e.method];if(!i)throw new Error('Unknown method "'+e.method+'"');p=e.id;var o=i.apply(i,e.params);d(o)?o.then(function(i){i instanceof t?a.send({id:e.id,result:i.message,error:null},i.transfer):a.send({id:e.id,result:i,error:null}),p=null}).catch(function(t){a.send({id:e.id,result:null,error:c(t)}),p=null}):(o instanceof t?a.send({id:e.id,result:o.message,error:null},o.transfer):a.send({id:e.id,result:o,error:null}),p=null)}catch(n){a.send({id:e.id,result:null,error:c(n)})}}),a.register=function(e,t){if(e)for(var i in e)e.hasOwnProperty(i)&&(a.methods[i]=e[i],a.methods[i].worker=n);t&&(a.terminationHandler=t.onTerminate,a.abortListenerTimeout=t.abortListenerTimeout||o),a.send("ready")},a.emit=function(e){if(p){if(e instanceof t)return void a.send({id:p,isEvent:!0,payload:e.message},e.transfer);a.send({id:p,isEvent:!0,payload:e})}},e.add=a.register,e.emit=a.emit}(me)),me}var ye=r.platform,ve=r.isMainThread,be=r.cpus,we=ne.TerminateError;function xe(e,t){return new(ce())(e,t)}var Se=t.pool=xe;function ke(e,t){fe().add(e,t)}var Ce=t.worker=ke;function Ee(e){fe().emit(e)}var Te=t.workerEmit=Ee,_e=A().Promise,Ae=t.Promise=_e,Pe=t.Transfer=ge(),$e=t.platform=ye,Re=t.isMainThread=ve,Le=t.cpus=be,De=t.TerminateError=we;e.Promise=Ae,e.TerminateError=De,e.Transfer=Pe,e.cpus=Le,e.default=t,e.isMainThread=Re,e.platform=$e,e.pool=Se,e.worker=Ce,e.workerEmit=Te,Object.defineProperty(e,"__esModule",{value:!0})}(xi.exports)),xi.exports),Ei={775:e=>{e.exports=function(e,t,i,r){var s=self||window;try{try{var o;try{o=new s.Blob([e])}catch(h){(o=new(s.BlobBuilder||s.WebKitBlobBuilder||s.MozBlobBuilder||s.MSBlobBuilder)).append(e),o=o.getBlob()}var a=s.URL||s.webkitURL,n=a.createObjectURL(o),l=new s[t](n,i);return a.revokeObjectURL(n),l}catch(c){return new s[t]("data:application/javascript,".concat(encodeURIComponent(e)),i)}}catch(d){if(!r)throw Error("Inline worker is not supported");return new s[t](r,i)}}}},Ti={};function _i(e){var t=Ti[e];if(void 0!==t)return t.exports;var i=Ti[e]={exports:{}};return Ei[e](i,i.exports,_i),i.exports}_i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return _i.d(t,{a:t}),t},_i.d=(e,t)=>{for(var i in t)_i.o(t,i)&&!_i.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},_i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;if("string"==typeof(o&&"SCRIPT"===o.tagName.toUpperCase()&&o.src||new URL("embed.iife.js",document.baseURI).href)&&(e=o&&"SCRIPT"===o.tagName.toUpperCase()&&o.src||new URL("embed.iife.js",document.baseURI).href),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_i.p=e})();var Ai={};_i.d(Ai,{QR:()=>$i,bt:()=>ji,B3:()=>Hi,yU:()=>Ni,As:()=>Vi});let Pi=null;const $i=(e,t=0)=>{Pi||(()=>{const e=Int32Array,t=new e(256),i=new e(4096);let r,s,o;for(s=0;s<256;s++){r=s;for(let e=0;e<8;e++)r=1&r?-306674912^r>>>1:r>>>1;i[s]=t[s]=r}for(s=0;s<256;s++)for(o=t[s],r=256+s;r<4096;r+=256)o=i[r]=o>>>8^t[255&o];for(Pi=[t],s=1;s<16;s++)Pi[s]=i.subarray(256*s,256*(s+1))})();const[i,r,s,o,a,n,l,h,c,d,p,u,m,g,f,y]=Pi;let v=~t,b=0;const w=e.length-15;for(;b<w;)v=y[e[b++]^255&v]^f[e[b++]^v>>8&255]^g[e[b++]^v>>16&255]^m[e[b++]^v>>>24]^u[e[b++]]^p[e[b++]]^d[e[b++]]^c[e[b++]]^h[e[b++]]^l[e[b++]]^n[e[b++]]^a[e[b++]]^o[e[b++]]^s[e[b++]]^r[e[b++]]^i[e[b++]];for(;b<e.length;)v=v>>>8^i[255&(v^e[b++])];return~v>>>0},Ri=new TextEncoder,Li=new TextDecoder("utf-8"),Di="undefined"!=typeof CompressionStream,Oi="undefined"!=typeof DecompressionStream;async function Mi(e,t,i,r=new Date){const s=e,o=Ri.encode(t),a=s.length,n=$i(s),{mtime:l,mdate:h}={mtime:((c=r).getSeconds()/2|0)+(c.getMinutes()<<5)+(c.getHours()<<11),mdate:c.getDate()+(c.getMonth()+1<<5)+(c.getFullYear()-1980<<9)};var c;let d=a,p=0,u=s;if(i&&Di)try{const e=new CompressionStream("gzip"),t=e.writable.getWriter(),i=e.readable.getReader();t.write(s),t.close();const r=[];let o=0;for(;;){const{value:e,done:t}=await i.read();if(t)break;e&&(r.push(e),o+=e.length)}const n=new Uint8Array(o);let l=0;for(const s of r)n.set(s,l),l+=s.length;const h=n.subarray(10,o-8);h.length<a&&(d=h.length,u=h,p=8)}catch(y){}const m=30+o.length,g=new Uint8Array(m);let f=0;return g[f++]=80,g[f++]=75,g[f++]=3,g[f++]=4,g[f++]=20,g[f++]=0,g[f++]=0,g[f++]=0,g[f++]=p,g[f++]=0,g[f++]=255&l,g[f++]=l>>8,g[f++]=255&h,g[f++]=h>>8,g[f++]=255&n,g[f++]=n>>8&255,g[f++]=n>>16&255,g[f++]=n>>24,g[f++]=255&d,g[f++]=d>>8&255,g[f++]=d>>16&255,g[f++]=d>>24,g[f++]=255&a,g[f++]=a>>8&255,g[f++]=a>>16&255,g[f++]=a>>24,g[f++]=255&o.length,g[f++]=o.length>>8,g[f++]=0,g[f++]=0,g.set(o,30),{localHeader:g,compressedData:u,uncompressedSize:a,compressedSize:d,crc:n,method:p}}function Ii(e){const t=[],i=[];let r=0;for(let d=0;d<e.length;d++){const s=e[d];t[d]=r,i.push(s.localHeader),i.push(s.compressedData),r+=s.localHeader.length+s.compressedData.length}const s=r;for(let d=0;d<e.length;d++){const r=e[d],s=r.localHeader[26]+(r.localHeader[27]<<8),o=r.localHeader.subarray(30,30+s),a=new Uint8Array(46+o.length);let n=0;a[n++]=80,a[n++]=75,a[n++]=1,a[n++]=2,a[n++]=20,a[n++]=0,a[n++]=20,a[n++]=0,a.set(r.localHeader.subarray(6,26),n),n+=20,a[n++]=255&o.length,a[n++]=o.length>>8,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=255&t[d],a[n++]=t[d]>>8&255,a[n++]=t[d]>>16&255,a[n++]=t[d]>>24,a.set(o,n),i.push(a)}const o=i.slice(2*e.length).reduce((e,t)=>e+t.length,0),a=new Uint8Array(22);let n=0;a[n++]=80,a[n++]=75,a[n++]=5,a[n++]=6,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=0,a[n++]=255&e.length,a[n++]=e.length>>8,a[n++]=255&e.length,a[n++]=e.length>>8,a[n++]=255&o,a[n++]=o>>8&255,a[n++]=o>>16&255,a[n++]=o>>24,a[n++]=255&s,a[n++]=s>>8&255,a[n++]=s>>16&255,a[n++]=s>>24,a[n++]=0,a[n++]=0,i.push(a);const l=i.reduce((e,t)=>e+t.length,0),h=new Uint8Array(l);let c=0;for(const d of i)h.set(d,c),c+=d.length;return new File([h],"archive.zip",{type:"application/zip",lastModified:Date.now()})}var Ui=_i(775),zi=_i.n(Ui);function Fi(){return zi()('let e=null;const t=(t,r=0)=>{e||(()=>{const t=Int32Array,r=new t(256),s=new t(4096);let n,o,a;for(o=0;o<256;o++){n=o;for(let e=0;e<8;e++)n=1&n?-306674912^n>>>1:n>>>1;s[o]=r[o]=n}for(o=0;o<256;o++)for(a=r[o],n=256+o;n<4096;n+=256)a=s[n]=a>>>8^r[255&a];for(e=[r],o=1;o<16;o++)e[o]=s.subarray(256*o,256*(o+1))})();const[s,n,o,a,c,l,d,i,f,m,g,h,u,p,w,y]=e;let S=~r,b=0;const z=t.length-15;for(;b<z;)S=y[t[b++]^255&S]^w[t[b++]^S>>8&255]^p[t[b++]^S>>16&255]^u[t[b++]^S>>>24]^h[t[b++]]^g[t[b++]]^m[t[b++]]^f[t[b++]]^i[t[b++]]^d[t[b++]]^l[t[b++]]^c[t[b++]]^a[t[b++]]^o[t[b++]]^n[t[b++]]^s[t[b++]];for(;b<t.length;)S=S>>>8^s[255&(S^t[b++])];return~S>>>0},r=new TextEncoder,s=(new TextDecoder("utf-8"),"undefined"!=typeof CompressionStream);self.onmessage=async e=>{const{fileData:n,fileName:o,compressWhenPossible:a}=e.data;try{const e=await async function(e,n,o,a=new Date){const c=e,l=r.encode(n),d=c.length,i=t(c),{mtime:f,mdate:m}={mtime:((g=a).getSeconds()/2|0)+(g.getMinutes()<<5)+(g.getHours()<<11),mdate:g.getDate()+(g.getMonth()+1<<5)+(g.getFullYear()-1980<<9)};var g;let h=d,u=0,p=c;if(o&&s)try{const e=new CompressionStream("gzip"),t=e.writable.getWriter(),r=e.readable.getReader();t.write(c),t.close();const s=[];let n=0;for(;;){const{value:e,done:t}=await r.read();if(t)break;e&&(s.push(e),n+=e.length)}const o=new Uint8Array(n);let a=0;for(const e of s)o.set(e,a),a+=e.length;const l=o.subarray(10,n-8);l.length<d&&(h=l.length,p=l,u=8)}catch(e){}const w=30+l.length,y=new Uint8Array(w);let S=0;return y[S++]=80,y[S++]=75,y[S++]=3,y[S++]=4,y[S++]=20,y[S++]=0,y[S++]=0,y[S++]=0,y[S++]=u,y[S++]=0,y[S++]=255&f,y[S++]=f>>8,y[S++]=255&m,y[S++]=m>>8,y[S++]=255&i,y[S++]=i>>8&255,y[S++]=i>>16&255,y[S++]=i>>24,y[S++]=255&h,y[S++]=h>>8&255,y[S++]=h>>16&255,y[S++]=h>>24,y[S++]=255&d,y[S++]=d>>8&255,y[S++]=d>>16&255,y[S++]=d>>24,y[S++]=255&l.length,y[S++]=l.length>>8,y[S++]=0,y[S++]=0,y.set(l,30),{localHeader:y,compressedData:p,uncompressedSize:d,compressedSize:h,crc:i,method:u}}(new Uint8Array(n),o,a),c=new Uint8Array(e.localHeader.length+e.compressedData.length);c.set(e.localHeader),c.set(e.compressedData,e.localHeader.length),self.postMessage({result:c.buffer,fileName:o,uncompressedSize:e.uncompressedSize,compressedSize:e.compressedSize,crc:e.crc,method:e.method},{transfer:[c.buffer]})}catch(e){self.postMessage({error:e})}};',"Worker",void 0,_i.p+"singleFileZip.worker.js")}function Bi(){return zi()('let e=null;const t=(t,r=0)=>{e||(()=>{const t=Int32Array,r=new t(256),n=new t(4096);let a,s,o;for(s=0;s<256;s++){a=s;for(let e=0;e<8;e++)a=1&a?-306674912^a>>>1:a>>>1;n[s]=r[s]=a}for(s=0;s<256;s++)for(o=r[s],a=256+s;a<4096;a+=256)o=n[a]=o>>>8^r[255&o];for(e=[r],s=1;s<16;s++)e[s]=n.subarray(256*s,256*(s+1))})();const[n,a,s,o,i,f,c,l,w,g,u,d,U,m,p,y]=e;let b=~r,h=0;const D=t.length-15;for(;h<D;)b=y[t[h++]^255&b]^p[t[h++]^b>>8&255]^m[t[h++]^b>>16&255]^U[t[h++]^b>>>24]^d[t[h++]]^u[t[h++]]^g[t[h++]]^w[t[h++]]^l[t[h++]]^c[t[h++]]^f[t[h++]]^i[t[h++]]^o[t[h++]]^s[t[h++]]^a[t[h++]]^n[t[h++]];for(;h<t.length;)b=b>>>8^n[255&(b^t[h++])];return~b>>>0},r=(new TextEncoder,new TextDecoder("utf-8")),n="undefined"!=typeof DecompressionStream;self.onmessage=async e=>{try{const a=await async function(e){const a=new DataView(e.buffer),s=[];let o=0;for(;o<e.length&&67324752===a.getUint32(o,!0);){o+=4;const i=a.getUint16(o+4,!0),f=a.getUint16(o+6,!0),c=a.getUint16(o+8,!0),l=a.getUint32(o+10,!0),w=a.getUint32(o+14,!0),g=a.getUint32(o+18,!0),u=a.getUint16(o+22,!0),d=a.getUint16(o+24,!0);o+=26;const U=r.decode(e.subarray(o,o+u));o+=u+d;const m=new Date(1980+(c>>9&127),(c>>5&15)-1,31&c,f>>11&31,f>>5&63,2*(31&f));let p;if(0===i){if(p=e.subarray(o,o+w),t(p)!==l)throw new Error(`CRC32 mismatch for ${U}`)}else{if(8!==i||!n)throw new Error(`Unsupported compression method ${i}`);{const t=new Uint8Array(w+18);t.set([31,139,8,0,0,0,0,0,0,3]),t.set(e.subarray(o,o+w),10),new DataView(t.buffer).setUint32(w+10,l,!0),new DataView(t.buffer).setUint32(w+14,g,!0);const r=new DecompressionStream("gzip"),n=r.writable.getWriter(),a=r.readable.getReader();n.write(t),n.close(),p=new Uint8Array(g);let s=0;for(;;){const{value:e,done:t}=await a.read();if(t)break;p.set(e,s),s+=e.length}}}s.push({name:U,data:p.buffer,lastModified:m.getTime()}),o+=w}return s}(new Uint8Array(e.data.zipData));self.postMessage({result:a},{transfer:a.map((e=>e.data))})}catch(e){self.postMessage({error:e})}};',"Worker",void 0,_i.p+"unzip.worker.js")}async function Ni(e,t=!0){const i=[];for(const r of e){const e=new Uint8Array(await r.arrayBuffer()),s=await Mi(e,r.name,t,new Date(r.lastModified));i.push(s)}return Ii(i)}async function ji(e){const t=new Uint8Array(await e.arrayBuffer());return(await async function(e){const t=new DataView(e.buffer),i=[];let r=0;for(;r<e.length&&67324752===t.getUint32(r,!0);){r+=4;const s=t.getUint16(r+4,!0),o=t.getUint16(r+6,!0),a=t.getUint16(r+8,!0),n=t.getUint32(r+10,!0),l=t.getUint32(r+14,!0),h=t.getUint32(r+18,!0),c=t.getUint16(r+22,!0),d=t.getUint16(r+24,!0);r+=26;const p=Li.decode(e.subarray(r,r+c));r+=c+d;const u=new Date(1980+(a>>9&127),(a>>5&15)-1,31&a,o>>11&31,o>>5&63,2*(31&o));let m;if(0===s){if(m=e.subarray(r,r+l),$i(m)!==n)throw new Error(`CRC32 mismatch for ${p}`)}else{if(8!==s||!Oi)throw new Error(`Unsupported compression method ${s}`);{const t=new Uint8Array(l+18);t.set([31,139,8,0,0,0,0,0,0,3]),t.set(e.subarray(r,r+l),10),new DataView(t.buffer).setUint32(l+10,n,!0),new DataView(t.buffer).setUint32(l+14,h,!0);const i=new DecompressionStream("gzip"),s=i.writable.getWriter(),o=i.readable.getReader();s.write(t),s.close(),m=new Uint8Array(h);let a=0;for(;;){const{value:e,done:t}=await o.read();if(t)break;m.set(e,a),a+=e.length}}}i.push({name:p,data:m.buffer,lastModified:u.getTime()}),r+=l}return i}(t)).map(e=>new File([e.data],e.name,{lastModified:e.lastModified}))}async function Vi(e,t=!0,i=200){const r=e.map(e=>()=>new Promise((i,r)=>{const s=new Fi;s.onmessage=e=>{if(e.data.error)r(new Error(e.data.error));else{const t=new Uint8Array(e.data.result),r={localHeader:t.subarray(0,30+t[26]+(t[27]<<8)),compressedData:t.subarray(30+t[26]+(t[27]<<8)),uncompressedSize:e.data.uncompressedSize,compressedSize:e.data.compressedSize,crc:e.data.crc,method:e.data.method};i(r)}s.terminate()},s.onerror=e=>{r(e),s.terminate()},e.arrayBuffer().then(i=>{s.postMessage({fileData:i,fileName:e.name,compressWhenPossible:t},[i])})}));return Ii(await async function(e,t){if(!Array.isArray(e)||0===e.length)return Promise.resolve([]);if(t<1)throw new Error("maxConcurrency must be at least 1");const i=new Array(e.length),r=new Set;let s=0;const o=async()=>{for(;s<e.length;){const n=s++,l=(0,e[n])();r.add(l);try{const e=await l;i[n]=e}catch(a){i[n]=await Promise.reject(a)}finally{r.delete(l)}s<e.length&&r.size<t&&await o()}},a=Math.min(t,e.length),n=Array(a).fill(null).map(()=>o());return await Promise.all(n),i}(r,i))}async function Hi(e){return new Promise((t,i)=>{const r=new Bi;r.onmessage=e=>{if(e.data.error)i(new Error(e.data.error));else{const i=e.data.result.map(e=>new File([e.data],e.name,{lastModified:e.lastModified}));t(i)}r.terminate()},r.onerror=e=>{i(e),r.terminate()},e.arrayBuffer().then(e=>r.postMessage({zipData:e},[e]))})}var Wi,Gi,qi=Ai.yU;(Gi=Wi||(Wi={})).csv="text/csv",Gi.tsv="text/tab-separated-values",Gi.plain="text/plain";var Yi=e=>e,Zi=e=>e,Xi=Yi,Ki=Yi,Qi=Yi,Ji=Yi,er=Yi,tr={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:Wi.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},ir=e=>Object.assign({},tr,e);class rr extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class sr extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class or extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class ar extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var nr=e=>Ji("object"==typeof e?e.key:e),lr=e=>er("object"==typeof e?e.displayLabel:e),hr=e=>t=>Ki(e+t+"\r\n"),cr=e=>(t,i)=>dr(e)(Qi(t+i)),dr=e=>t=>t+e.fieldSeparator,pr=(e,t)=>{if((e=>+e===e&&(!isFinite(e)||Boolean(e%1)))(t)){if("locale"===e.decimalSeparator)return Xi(t.toLocaleString());if(e.decimalSeparator)return Xi(t.toString().replace(".",e.decimalSeparator))}return Xi(t.toString())},ur=(e,t)=>{let i=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf("\n")>-1||t.indexOf("\r")>-1)&&(i=e.quoteCharacter+function(e,t){return'"'==t&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e}(t,e.quoteCharacter)+e.quoteCharacter),Xi(i)},mr=(e,t)=>{if("number"==typeof t)return pr(e,t);if("string"==typeof t)return ur(e,t);if("boolean"==typeof t&&e.boolDisplay)return((e,t)=>{const i=t?"true":"false";return Xi(e.boolDisplay[i])})(e,t);if(null==t)return((e,t)=>void 0===t&&void 0!==e.replaceUndefinedWith?ur(e,e.replaceUndefinedWith+""):ur(e,null===t?"null":""))(e,t);throw new ar(`\n    typeof ${typeof t} isn't supported. Only number, string, boolean, null and undefined are supported.\n    Please convert the data in your object to one of those before generating the CSV.\n    `)},gr=e=>t=>{const i=ir(e),r=i.useKeysAsHeaders?Object.keys(t[0]):i.columnHeaders;let s=((e,...t)=>t.reduce((e,t)=>t(e),e))(Ki(""),(e=>t=>e.useBom?Ki(t+"\ufeff"):t)(i),(e=>t=>e.showTitle?hr(Ki(t+e.title))(Qi("")):t)(i),((e,t)=>i=>{if(!e.showColumnHeaders)return i;if(t.length<1)throw new sr("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let r=Qi("");for(let s=0;s<t.length;s++){const i=lr(t[s]);r=cr(e)(r,mr(e,Zi(i)))}return r=Qi(r.slice(0,-1)),hr(i)(r)})(i,r),((e,t,i)=>r=>{let s=r;for(var o=0;o<i.length;o++){let r=Qi("");for(let s=0;s<t.length;s++){const a=nr(t[s]),n=i[o][Zi(a)];r=cr(e)(r,mr(e,n))}r=Qi(Zi(r).slice(0,-1)),s=hr(s)(r)}return s})(i,r,t));if(s.length<1)throw new rr("Output is empty. Is your data formatted correctly?");return s},fr=e=>t=>{if(!window)throw new or("Downloading only supported in a browser environment.");const i=(e=>t=>{const i=ir(e),r=t,s=i.useTextFile?"text/plain":i.mediaType;return new Blob([r],{type:`${s};charset=utf8;`})})(e)(t),r=ir(e),s=r.useTextFile?"txt":r.fileExtension,o=`${r.filename}.${s}`,a=document.createElement("a");a.download=o,a.href=URL.createObjectURL(i),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};const yr=6048e5,vr=Symbol.for("constructDateFrom");function br(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&vr in e?e[vr](t):e instanceof Date?new e.constructor(t):new Date(t)}function wr(e,t){return br(t||e,e)}let xr={};function Sr(){return xr}function kr(e,t){const i=Sr(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0,s=wr(e,t?.in),o=s.getDay(),a=(o<r?7:0)+o-r;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Cr(e,t){return kr(e,{...t,weekStartsOn:1})}function Er(e,t){const i=wr(e,t?.in),r=i.getFullYear(),s=br(i,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const o=Cr(s),a=br(i,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);const n=Cr(a);return i.getTime()>=o.getTime()?r+1:i.getTime()>=n.getTime()?r:r-1}function Tr(e){const t=wr(e),i=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return i.setUTCFullYear(t.getFullYear()),+e-+i}function _r(e,t){const i=wr(e,t?.in);return i.setHours(0,0,0,0),i}function Ar(e,t,i){const[r,s]=function(e,...t){const i=br.bind(null,t.find(e=>"object"==typeof e));return t.map(i)}(0,e,t),o=_r(r),a=_r(s),n=+o-Tr(o),l=+a-Tr(a);return Math.round((n-l)/864e5)}function Pr(e){return!(!((t=e)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof e||isNaN(+wr(e)));var t}function $r(e,t){const i=wr(e,t?.in),r=i.getMonth();return i.setFullYear(i.getFullYear(),r+1,0),i.setHours(23,59,59,999),i}function Rr(e,t){const i=wr(e,t?.in);return i.setDate(1),i.setHours(0,0,0,0),i}function Lr(e,t){const i=wr(e,t?.in);return i.setFullYear(i.getFullYear(),0,1),i.setHours(0,0,0,0),i}function Dr(e,t){const i=Sr(),r=i.weekStartsOn??i.locale?.options?.weekStartsOn??0,s=wr(e,t?.in),o=s.getDay(),a=6+(o<r?-7:0)-(o-r);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Or={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Mr(e){return(t={})=>{const i=t.width?String(t.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}}const Ir={date:Mr({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Mr({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Mr({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Ur={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function zr(e){return(t,i)=>{let r;if("formatting"===(i?.context?String(i.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,s=i?.width?String(i.width):t;r=e.formattingValues[s]||e.formattingValues[t]}else{const t=e.defaultWidth,s=i?.width?String(i.width):e.defaultWidth;r=e.values[s]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Fr(e){return(t,i={})=>{const r=i.width,s=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(s);if(!o)return null;const a=o[0],n=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(n)?function(e,t){for(let i=0;i<e.length;i++)if(t(e[i]))return i;return}(n,e=>e.test(a)):function(e,t){for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t(e[i]))return i;return}(n,e=>e.test(a));let h;h=e.valueCallback?e.valueCallback(l):l,h=i.valueCallback?i.valueCallback(h):h;return{value:h,rest:t.slice(a.length)}}}var Br;const Nr={code:"en-US",formatDistance:(e,t,i)=>{let r;const s=Or[e];return r="string"==typeof s?s:1===t?s.one:s.other.replace("{{count}}",t.toString()),i?.addSuffix?i.comparison&&i.comparison>0?"in "+r:r+" ago":r},formatLong:Ir,formatRelative:(e,t,i,r)=>Ur[e],localize:{ordinalNumber:(e,t)=>{const i=Number(e),r=i%100;if(r>20||r<10)switch(r%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},era:zr({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:zr({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:zr({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:zr({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:zr({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Br={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const i=e.match(Br.matchPattern);if(!i)return null;const r=i[0],s=e.match(Br.parsePattern);if(!s)return null;let o=Br.valueCallback?Br.valueCallback(s[0]):s[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:e.slice(r.length)}}),era:Fr({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Fr({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:Fr({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Fr({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Fr({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function jr(e,t){const i=wr(e,t?.in),r=+Cr(i)-+function(e,t){const i=Er(e,t),r=br(e,0);return r.setFullYear(i,0,4),r.setHours(0,0,0,0),Cr(r)}(i);return Math.round(r/yr)+1}function Vr(e,t){const i=wr(e,t?.in),r=i.getFullYear(),s=Sr(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,a=br(t?.in||e,0);a.setFullYear(r+1,0,o),a.setHours(0,0,0,0);const n=kr(a,t),l=br(t?.in||e,0);l.setFullYear(r,0,o),l.setHours(0,0,0,0);const h=kr(l,t);return+i>=+n?r+1:+i>=+h?r:r-1}function Hr(e,t){const i=wr(e,t?.in),r=+kr(i,t)-+function(e,t){const i=Sr(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,s=Vr(e,t),o=br(t?.in||e,0);return o.setFullYear(s,0,r),o.setHours(0,0,0,0),kr(o,t)}(i,t);return Math.round(r/yr)+1}function Wr(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const Gr={y(e,t){const i=e.getFullYear(),r=i>0?i:1-i;return Wr("yy"===t?r%100:r,t.length)},M(e,t){const i=e.getMonth();return"M"===t?String(i+1):Wr(i+1,2)},d:(e,t)=>Wr(e.getDate(),t.length),a(e,t){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];default:return"am"===i?"a.m.":"p.m."}},h:(e,t)=>Wr(e.getHours()%12||12,t.length),H:(e,t)=>Wr(e.getHours(),t.length),m:(e,t)=>Wr(e.getMinutes(),t.length),s:(e,t)=>Wr(e.getSeconds(),t.length),S(e,t){const i=t.length,r=e.getMilliseconds();return Wr(Math.trunc(r*Math.pow(10,i-3)),t.length)}},qr="midnight",Yr="noon",Zr="morning",Xr="afternoon",Kr="evening",Qr="night",Jr={G:function(e,t,i){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return i.era(r,{width:"abbreviated"});case"GGGGG":return i.era(r,{width:"narrow"});default:return i.era(r,{width:"wide"})}},y:function(e,t,i){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return i.ordinalNumber(r,{unit:"year"})}return Gr.y(e,t)},Y:function(e,t,i,r){const s=Vr(e,r),o=s>0?s:1-s;if("YY"===t){return Wr(o%100,2)}return"Yo"===t?i.ordinalNumber(o,{unit:"year"}):Wr(o,t.length)},R:function(e,t){return Wr(Er(e),t.length)},u:function(e,t){return Wr(e.getFullYear(),t.length)},Q:function(e,t,i){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return Wr(r,2);case"Qo":return i.ordinalNumber(r,{unit:"quarter"});case"QQQ":return i.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(r,{width:"narrow",context:"formatting"});default:return i.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,i){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return Wr(r,2);case"qo":return i.ordinalNumber(r,{unit:"quarter"});case"qqq":return i.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(r,{width:"narrow",context:"standalone"});default:return i.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,i){const r=e.getMonth();switch(t){case"M":case"MM":return Gr.M(e,t);case"Mo":return i.ordinalNumber(r+1,{unit:"month"});case"MMM":return i.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(r,{width:"narrow",context:"formatting"});default:return i.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,i){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return Wr(r+1,2);case"Lo":return i.ordinalNumber(r+1,{unit:"month"});case"LLL":return i.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(r,{width:"narrow",context:"standalone"});default:return i.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,i,r){const s=Hr(e,r);return"wo"===t?i.ordinalNumber(s,{unit:"week"}):Wr(s,t.length)},I:function(e,t,i){const r=jr(e);return"Io"===t?i.ordinalNumber(r,{unit:"week"}):Wr(r,t.length)},d:function(e,t,i){return"do"===t?i.ordinalNumber(e.getDate(),{unit:"date"}):Gr.d(e,t)},D:function(e,t,i){const r=function(e,t){const i=wr(e,t?.in);return Ar(i,Lr(i))+1}(e);return"Do"===t?i.ordinalNumber(r,{unit:"dayOfYear"}):Wr(r,t.length)},E:function(e,t,i){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return i.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(r,{width:"short",context:"formatting"});default:return i.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,i,r){const s=e.getDay(),o=(s-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return Wr(o,2);case"eo":return i.ordinalNumber(o,{unit:"day"});case"eee":return i.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(s,{width:"short",context:"formatting"});default:return i.day(s,{width:"wide",context:"formatting"})}},c:function(e,t,i,r){const s=e.getDay(),o=(s-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return Wr(o,t.length);case"co":return i.ordinalNumber(o,{unit:"day"});case"ccc":return i.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(s,{width:"narrow",context:"standalone"});case"cccccc":return i.day(s,{width:"short",context:"standalone"});default:return i.day(s,{width:"wide",context:"standalone"})}},i:function(e,t,i){const r=e.getDay(),s=0===r?7:r;switch(t){case"i":return String(s);case"ii":return Wr(s,t.length);case"io":return i.ordinalNumber(s,{unit:"day"});case"iii":return i.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(r,{width:"short",context:"formatting"});default:return i.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,i){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(r,{width:"narrow",context:"formatting"});default:return i.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,i){const r=e.getHours();let s;switch(s=12===r?Yr:0===r?qr:r/12>=1?"pm":"am",t){case"b":case"bb":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(s,{width:"narrow",context:"formatting"});default:return i.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,t,i){const r=e.getHours();let s;switch(s=r>=17?Kr:r>=12?Xr:r>=4?Zr:Qr,t){case"B":case"BB":case"BBB":return i.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(s,{width:"narrow",context:"formatting"});default:return i.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,t,i){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),i.ordinalNumber(t,{unit:"hour"})}return Gr.h(e,t)},H:function(e,t,i){return"Ho"===t?i.ordinalNumber(e.getHours(),{unit:"hour"}):Gr.H(e,t)},K:function(e,t,i){const r=e.getHours()%12;return"Ko"===t?i.ordinalNumber(r,{unit:"hour"}):Wr(r,t.length)},k:function(e,t,i){let r=e.getHours();return 0===r&&(r=24),"ko"===t?i.ordinalNumber(r,{unit:"hour"}):Wr(r,t.length)},m:function(e,t,i){return"mo"===t?i.ordinalNumber(e.getMinutes(),{unit:"minute"}):Gr.m(e,t)},s:function(e,t,i){return"so"===t?i.ordinalNumber(e.getSeconds(),{unit:"second"}):Gr.s(e,t)},S:function(e,t){return Gr.S(e,t)},X:function(e,t,i){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return ts(r);case"XXXX":case"XX":return is(r);default:return is(r,":")}},x:function(e,t,i){const r=e.getTimezoneOffset();switch(t){case"x":return ts(r);case"xxxx":case"xx":return is(r);default:return is(r,":")}},O:function(e,t,i){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+es(r,":");default:return"GMT"+is(r,":")}},z:function(e,t,i){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+es(r,":");default:return"GMT"+is(r,":")}},t:function(e,t,i){return Wr(Math.trunc(+e/1e3),t.length)},T:function(e,t,i){return Wr(+e,t.length)}};function es(e,t=""){const i=e>0?"-":"+",r=Math.abs(e),s=Math.trunc(r/60),o=r%60;return 0===o?i+String(s):i+String(s)+t+Wr(o,2)}function ts(e,t){if(e%60==0){return(e>0?"-":"+")+Wr(Math.abs(e)/60,2)}return is(e,t)}function is(e,t=""){const i=e>0?"-":"+",r=Math.abs(e);return i+Wr(Math.trunc(r/60),2)+t+Wr(r%60,2)}const rs=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ss=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},os={p:ss,P:(e,t)=>{const i=e.match(/(P+)(p+)?/)||[],r=i[1],s=i[2];if(!s)return rs(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",rs(r,t)).replace("{{time}}",ss(s,t))}},as=/^D+$/,ns=/^Y+$/,ls=["D","DD","YY","YYYY"];const hs=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cs=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ds=/^'([^]*?)'?$/,ps=/''/g,us=/[a-zA-Z]/;function ms(e,t,i){const r=Sr(),s=r.locale??Nr,o=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,a=r.weekStartsOn??r.locale?.options?.weekStartsOn??0,n=wr(e,i?.in);if(!Pr(n))throw new RangeError("Invalid time value");let l=t.match(cs).map(e=>{const t=e[0];if("p"===t||"P"===t){return(0,os[t])(e,s.formatLong)}return e}).join("").match(hs).map(e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:gs(e)};if(Jr[t])return{isToken:!0,value:e};if(t.match(us))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});s.localize.preprocessor&&(l=s.localize.preprocessor(n,l));const h={firstWeekContainsDate:o,weekStartsOn:a,locale:s};return l.map(i=>{if(!i.isToken)return i.value;const r=i.value;(function(e){return ns.test(e)}(r)||function(e){return as.test(e)}(r))&&function(e,t,i){const r=function(e,t,i){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${i}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,i);if(console.warn(r),ls.includes(e))throw new RangeError(r)}(r,t,String(e));return(0,Jr[r[0]])(n,r,s.localize,h)}).join("")}function gs(e){const t=e.match(ds);return t?t[1].replace(ps,"'"):e}function fs(e,t){const i=wr(e,t?.in);if(!Pr(i))throw new RangeError("Invalid time value");const r=t?.format??"extended",s=t?.representation??"complete";let o="";const a="extended"===r?"-":"",n="extended"===r?":":"";if("time"!==s){const e=Wr(i.getDate(),2),t=Wr(i.getMonth()+1,2);o=`${Wr(i.getFullYear(),4)}${a}${t}${a}${e}`}if("date"!==s){o=`${o}${""===o?"":" "}${Wr(i.getHours(),2)}${n}${Wr(i.getMinutes(),2)}${n}${Wr(i.getSeconds(),2)}`}return o}var ys,vs,bs={exports:{}};const ws=bi((ys||(ys=1,vs=bs,function(){var e=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var i,r,s=t(e).toLowerCase();return(i="application/font-woff",r="image/jpeg",{woff:i,woff2:i,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:r,jpeg:r,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[s]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):function(e){return new Promise(function(t){for(var i=window.atob(e.toDataURL().split(",")[1]),r=i.length,s=new Uint8Array(r),o=0;o<r;o++)s[o]=i.charCodeAt(o);t(new Blob([s],{type:"image/png"}))})}(e)},resolveUrl:function(e,t){var i=document.implementation.createHTMLDocument(),r=i.createElement("base");i.head.appendChild(r);var s=i.createElement("a");return i.body.appendChild(s),r.href=t,s.href=e,s.href},getAndEncode:function(e){var t=3e4;return a.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise(function(i){var r,s=new XMLHttpRequest;if(s.onreadystatechange=n,s.ontimeout=l,s.responseType="blob",s.timeout=t,s.open("GET",e,!0),s.send(),a.impl.options.imagePlaceholder){var o=a.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(r=o[1])}function n(){if(4===s.readyState)if(200===s.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];i(e)},t.readAsDataURL(s.response)}else r?i(r):h("cannot fetch resource: "+e+", status: "+s.status)}function l(){r?i(r):h("timeout of "+t+"ms occured while fetching resource: "+e)}function h(e){console.error(e),i("")}})},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise(function(i){setTimeout(function(){i(t)},e)})}},asArray:function(e){for(var t=[],i=e.length,r=0;r<i;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise(function(t,i){var r=new Image;r.onload=function(){t(r)},r.onerror=i,r.src=e})},width:function(e){var t=i(e,"border-left-width"),r=i(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=i(e,"border-top-width"),r=i(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function i(e,t){var i=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(i.replace("px",""))}}(),t=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,t,o){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then(function(i){var r=Promise.resolve(e);return i.forEach(function(e){r=r.then(function(i){return s(i,e,t,o)})}),r});function a(){return!i(e)}},shouldProcess:i,impl:{readUrls:r,inline:s}};function i(e){return-1!==e.search(t)}function r(i){for(var r,s=[];null!==(r=t.exec(i));)s.push(r[1]);return s.filter(function(t){return!e.isDataUrl(t)})}function s(t,i,r,s){return Promise.resolve(i).then(function(t){return r?e.resolveUrl(t,r):t}).then(s||e.getAndEncode).then(function(t){return e.dataAsUrl(t,e.mimeType(i))}).then(function(r){return t.replace((s=i,new RegExp("(url\\(['\"]?)("+e.escape(s)+")(['\"]?\\))","g")),"$1"+r+"$3");var s})}}(),i=function(){return{resolveAll:function(){return i().then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})},impl:{readAll:i}};function i(){return Promise.resolve(e.asArray(document.styleSheets)).then(function(t){var i=[];return t.forEach(function(t){try{e.asArray(t.cssRules||[]).forEach(i.push.bind(i))}catch(r){console.log("Error while reading CSS rules from "+t.href,r.toString())}}),i}).then(function(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return t.shouldProcess(e.style.getPropertyValue("src"))})}).then(function(e){return e.map(i)});function i(e){return{resolve:function(){var i=(e.parentStyleSheet||{}).href;return t.inlineAll(e.cssText,i)},src:function(){return e.style.getPropertyValue("src")}}}}}(),r=function(){return{inlineAll:function r(s){return s instanceof Element?o(s).then(function(){return s instanceof HTMLImageElement?i(s).inline():Promise.all(e.asArray(s.childNodes).map(function(e){return r(e)}))}):Promise.resolve(s);function o(e){var i=e.style.getPropertyValue("background");return i?t.inlineAll(i).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}},impl:{newImage:i}};function i(t){return{inline:function(i){return e.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(i||e.getAndEncode).then(function(i){return e.dataAsUrl(i,e.mimeType(t.src))}).then(function(e){return new Promise(function(i,r){t.onload=i,t.onerror=r,t.src=e})})}}}}(),s=void 0,o=!1,a={toSvg:n,toPng:function(e,t){return l(e,t||{}).then(function(e){return e.toDataURL()})},toJpeg:function(e,t){return l(e,t=t||{}).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})},toBlob:function(t,i){return l(t,i||{}).then(e.canvasToBlob)},toPixelData:function(t,i){return l(t,i||{}).then(function(i){return i.getContext("2d").getImageData(0,0,e.width(t),e.height(t)).data})},impl:{fontFaces:i,images:r,util:e,inliner:t,options:{}}};function n(t,i){return function(e){void 0===e.imagePlaceholder?a.impl.options.imagePlaceholder=s:a.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?a.impl.options.cacheBust=o:a.impl.options.cacheBust=e.cacheBust}(i=i||{}),Promise.resolve(t).then(function(e){return h(e,i.filter,!0)}).then(c).then(d).then(function(e){return i.bgcolor&&(e.style.backgroundColor=i.bgcolor),i.width&&(e.style.width=i.width+"px"),i.height&&(e.style.height=i.height+"px"),i.style&&Object.keys(i.style).forEach(function(t){e.style[t]=i.style[t]}),e}).then(function(r){return function(t,i,r){return Promise.resolve(t).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(e.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+i+'" height="'+r+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}(r,i.width||e.width(t),i.height||e.height(t))})}function l(t,i){return n(t,i).then(e.makeImage).then(e.delay(100)).then(function(r){var s=function(t){var r=document.createElement("canvas");if(r.width=i.width||e.width(t),r.height=i.height||e.height(t),i.bgcolor){var s=r.getContext("2d");s.fillStyle=i.bgcolor,s.fillRect(0,0,r.width,r.height)}return r}(t);return s.getContext("2d").drawImage(r,0,0),s})}function h(t,i,r){return r||!i||i(t)?Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?e.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(r){return function(t,i,r){var s=t.childNodes;return 0===s.length?Promise.resolve(i):o(i,e.asArray(s),r).then(function(){return i});function o(e,t,i){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return h(t,i)}).then(function(t){t&&e.appendChild(t)})}),r}}(t,r,i)}).then(function(i){return function(t,i){return i instanceof Element?Promise.resolve().then(r).then(s).then(o).then(a).then(function(){return i}):i;function r(){function r(t,i){function r(t,i){e.asArray(t).forEach(function(e){i.setProperty(e,t.getPropertyValue(e),t.getPropertyPriority(e))})}t.cssText?i.cssText=t.cssText:r(t,i)}r(window.getComputedStyle(t),i.style)}function s(){function r(r){var s=window.getComputedStyle(t,r),o=s.getPropertyValue("content");if(""!==o&&"none"!==o){var a=e.uid();i.className=i.className+" "+a;var n=document.createElement("style");n.appendChild(l(a,r,s)),i.appendChild(n)}function l(t,i,r){var s="."+t+":"+i,o=r.cssText?a(r):n(r);return document.createTextNode(s+"{"+o+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function n(t){return e.asArray(t).map(i).join("; ")+";";function i(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}}[":before",":after"].forEach(function(e){r(e)})}function o(){t instanceof HTMLTextAreaElement&&(i.innerHTML=t.value),t instanceof HTMLInputElement&&i.setAttribute("value",t.value)}function a(){i instanceof SVGElement&&(i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i instanceof SVGRectElement&&["width","height"].forEach(function(e){var t=i.getAttribute(e);t&&i.style.setProperty(e,t)}))}}(t,i)}):Promise.resolve()}function c(e){return i.resolveAll().then(function(t){var i=document.createElement("style");return e.appendChild(i),i.appendChild(document.createTextNode(t)),e})}function d(e){return r.inlineAll(e).then(function(){return e})}vs.exports=a}()),bs.exports));var xs=class extends Map{add(e,t,i=!1){i?this.set(e,(...i)=>{t(...i),this.delete(e)}):this.set(e,t)}call(...e){this.forEach(t=>t(...e))}},Ss=class{},ks=class{_layers=[];get layers(){return this._layers}onLayers=new xs;setLayers(e){e.length!==this._layers.length&&(this._layers=e,this.onLayers.call(this.layers))}constructor(e){this.parent=e}getActiveFilters(){return this.layers.filter(e=>!1===e.bypass)}addFilter(e){this.layers.includes(e)&&console.error(`filter ${e} is already in ${this.parent}`),this._layers.push(e),this.onLayers.call(this.layers)}removeFilter(e){this.layers.includes(e)&&(this._layers=this.layers.filter(t=>t!==e),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(e=>{e.applyAllAvailableFilters()})}getFiltersArray(){}};let Cs=function(e){return e[e.NOT_SPECIFIED=0]="NOT_SPECIFIED",e[e.FILE_NOT_FOUND=1]="FILE_NOT_FOUND",e[e.MIME_UNSUPPORTED=2]="MIME_UNSUPPORTED",e[e.PARSING_ERROR=3]="PARSING_ERROR",e[e.OUT_OF_MEMORY=4]="OUT_OF_MEMORY",e}({});var Es=class extends Error{constructor(e,t,i){super(i),this.code=e,this.url=t}};const Ts={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:[{extension:"lrc",minme:"application/octet-stream"}],is:(e,t)=>{const i=t.endsWith("lrc"),r="LRC\0"===(new TextDecoder).decode(e.slice(0,4));return i&&r},baseInfo:async e=>{const t=new DataView(e),i=t.getUint16(17,!0),r=t.getUint16(19,!0),s=e.byteLength,o=(e,t)=>{const i=e.getBigInt64(t,!0),r=864000000000n,s=4611686018427387904n;let o=4611686018427387903n&i;9223372036854775808n&i&&(o>4611685154427387904n&&(o-=s),o<0&&(o+=r));return Number(o/10000n-62135596800000n)};let a=2;1===t.getUint8(15)&&(a=4);const n=57+i*r*a,l=e.slice(25),h=l.byteLength/n,c=e=>{const t=e*n,i=t+n,r=l.slice(t,i),s=new DataView(r),a=s.getFloat32(8,!0),h=s.getFloat32(12,!0);return{timestamp:o(s,0),min:a,max:h,emissivity:s.getFloat32(24,!0),reflectedKelvins:s.getFloat32(28,!0)}},d=[];for(let x=0;x<h;x++){const e=c(x);d.push(e)}const p={emissivity:0,reflectedKelvins:0};let u=1/0,m=-1/0;const g=[];d.forEach(e=>{p.emissivity=p.emissivity+e.emissivity,p.reflectedKelvins=p.reflectedKelvins+e.reflectedKelvins,e.min<u&&(u=e.min),e.max>m&&(m=e.max),g.push(e.timestamp)});const f=g[0],y=[];g.forEach((e,t)=>{const i=g[t+1];let r=0;r=void 0===i?0:i-e;const s=e-f;y.push({absolute:e,relative:s,offset:isNaN(r)?0:r,index:t})});const v=d[d.length-1].timestamp-d[0].timestamp,b=v/h,w=1e3/b;return{width:i,height:r,timestamp:d[0].timestamp,bytesize:s,frameCount:h,duration:v,frameInterval:b,fps:w,timeline:y,min:u,max:m,averageEmissivity:p.emissivity/d.length,averageReflectedKelvins:p.reflectedKelvins/d.length}},getFrameSubset:(e,t)=>{const i=new DataView(e.slice(0,25)),r=i.getUint8(15),s=57+i.getUint16(17,!0)*i.getUint16(19,!0)*(1===r?4:2),o=t*s,a=o+s;return{array:e.slice(25).slice(o,a),dataType:r}},frameData:async(e,t)=>{const i=new DataView(e),r=i.getBigInt64(0,!0),s=864000000000n,o=4611686018427387904n;let a=4611686018427387903n&r;9223372036854775808n&r&&(a>4611685154427387904n&&(a-=o),a<0&&(a+=s));const n=Number(a/10000n-62135596800000n),l=i.getFloat32(8,!0),h=i.getFloat32(12,!0),c=i.getFloat32(24,!0),d=i.getFloat32(28,!0),p=e.slice(57);let u=[];if(0===t){const e=new Uint16Array(p),t=Math.abs(l-h),i=65535;e.forEach(e=>{const r=e/i;u.push(l+t*r)})}else 1===t&&(u=Array.from(new Float32Array(p)));return{timestamp:n,min:l,max:h,emissivity:c,reflectedKelvins:d,pixels:u}},registryHistogram:async e=>{let t=[];(await Promise.all(e.map(e=>(async e=>{const t=new DataView(e.slice(0,25)),i=t.getUint8(15),r=t.getUint16(17,!0)*t.getUint16(19,!0)*(1===i?4:2),s=57+r,o=e.slice(25),a=o.byteLength/s;let n=[];for(let l=0;l<a;l++){const e=l*s,t=e+57,a=t+r,h=o.slice(t,a);if(0===i){const t=new DataView(o.slice(e,56)),i=t.getFloat32(8,!0),r=t.getFloat32(12,!0),s=new Uint16Array(h),a=Math.abs(i-r),l=65535;s.forEach(e=>{const t=e/l;n.push(i+a*t)})}else 1===i&&(n=n.concat(Array.from(new Float32Array(h))))}return n})(e)))).forEach(e=>{t=t.concat(e)}),t.sort((e,t)=>e-t);const i=t[0],r=t[t.length-1],s=Math.abs(i-r)/255,o=[];let a=[...t];for(let d=0;d<255;d++){const e=i+s*d,r=e+s,n=a.findIndex(e=>e>r);if(0===n){const t={from:e,to:r,count:0,percentage:0};o.push(t)}else{const i=a.slice(0,n-1).length,s={from:e,to:r,count:i,percentage:i/t.length*100};o.push(s),a=a.slice(n)}}const n=[...o].sort((e,t)=>e.percentage-t.percentage),l=n[0].percentage,h=n[n.length-1].percentage,c=Math.abs(l-h);return o.map(e=>({...e,height:e.percentage/c*100}))},pointAnalysisData:async(e,t,i)=>{const r=new DataView(e),s=r.getUint16(17,!0),o=r.getUint16(19,!0),a=r.getUint8(15);let n=2;1===a&&(n=4);const l=57+s*o*n,h=e.slice(25),c=h.byteLength/l,d={},p=e=>{const r=e*l,o=r+l,c=h.slice(r,o),d=new DataView(c),p=((e,t)=>{const i=e.getBigInt64(t,!0),r=864000000000n,s=4611686018427387904n;let o=4611686018427387903n&i;return 9223372036854775808n&i&&(o>4611685154427387904n&&(o-=s),o<0&&(o+=r)),Number(o/10000n-62135596800000n)})(d,0),u=d.getFloat32(8,!0),m=d.getFloat32(12,!0)-u,g=57+i*n*s+t*n;let f=0;return 1===a?f=d.getFloat32(g,!0):0===a&&(f=u+m*(d.getInt16(g,!0)/65535)),{timestamp:p,temperature:f}};let u=0;for(let m=0;m<c;m++){const e=p(m);0===u&&(u=e.timestamp),d[e.timestamp-u]=e.temperature}return d},rectAnalysisData:async(e,t,i,r,s)=>{const o=new DataView(e),a=o.getUint16(17,!0),n=o.getUint16(19,!0),l=o.getUint8(15);let h=2;1===l&&(h=4);const c=57+a*n*h,d=e.slice(25),p=d.byteLength/c,u={},m=e=>{const o=e*c,n=o+c,p=d.slice(o,n),u=new DataView(p),m=((e,t)=>{const i=e.getBigInt64(t,!0),r=864000000000n,s=4611686018427387904n;let o=4611686018427387903n&i;return 9223372036854775808n&i&&(o>4611685154427387904n&&(o-=s),o<0&&(o+=r)),Number(o/10000n-62135596800000n)})(u,0),g=u.getFloat32(8,!0),f=u.getFloat32(12,!0)-g,y=t,v=t+r,b=i+s;let w=1/0,x=-1/0,S=0,k=0;for(let t=i;t<=b;t++){const e=t*a;for(let t=y;t<=v;t++){const i=57+(e+t)*h;let r=NaN;r=1===l?u.getFloat32(i,!0):g+f*(u.getInt16(i,!0)/65535),r<w&&(w=r),r>x&&(x=r),k+=r,S++}}return{timestamp:m,result:{min:w,max:x,avg:k/S,count:S}}};let g=0;for(let f=0;f<p;f++){const e=m(f);0===g&&(g=e.timestamp),u[e.timestamp-g]=e.result}return u},ellipsisAnalysisData:async(e,t,i,r,s)=>{const o=new DataView(e),a=o.getUint16(17,!0),n=o.getUint16(19,!0),l=o.getUint8(15);let h=2;1===l&&(h=4);const c=57+a*n*h,d=e.slice(25),p=d.byteLength/c,u={},m=(e,o)=>{const a=(e-(t+r/2))/(r/2),n=(o-(i+s/2))/(s/2);return a*a+n*n<=1},g=e=>{const o=e*c,n=o+c,p=d.slice(o,n),u=new DataView(p),g=((e,t)=>{const i=e.getBigInt64(t,!0),r=864000000000n,s=4611686018427387904n;let o=4611686018427387903n&i;return 9223372036854775808n&i&&(o>4611685154427387904n&&(o-=s),o<0&&(o+=r)),Number(o/10000n-62135596800000n)})(u,0),f=u.getFloat32(8,!0),y=u.getFloat32(12,!0)-f,v=t,b=t+r,w=i+s;let x=1/0,S=-1/0,k=0,C=0;for(let t=i;t<=w;t++){const e=t*a;for(let i=v;i<=b;i++)if(m(i,t)){const t=57+(e+i)*h;let r=NaN;r=1===l?u.getFloat32(t,!0):f+y*(u.getInt16(t,!0)/65535),r<x&&(x=r),r>S&&(S=r),C+=r,k++}}return{timestamp:g,result:{min:x,max:S,avg:C/k,count:k}}};let f=0;for(let y=0;y<p;y++){const e=g(y);0===f&&(f=e.timestamp),u[e.timestamp-f]=e.result}return u}},_s=Object.freeze(Ts),As={LrcParser:_s},Ps=Object.values(As),$s=(e,t)=>{const i=Ps.find(i=>i.is(e,t));if(void 0===i)throw new Es(Cs.MIME_UNSUPPORTED,t,`No parser found for '${t}'.`);return i},Rs=Ps.map(e=>e.extensions).map(e=>e.map(e=>e.minme+", ."+e.extension).join(", ")).join(", ");var Ls=class e{_hover=!1;get hover(){return this._hover}onMouseEnter=new xs;onMouseLeave=new xs;onDrop=new xs;onProcessingEnd=new xs;input;hydrated=!1;multiple;bindedEnterListener;bindedLeaveListener;bindedDropListener;bindedInputChangeListener;bindedDragoverListener;bindedClickListener;constructor(e,t,i=!0){this.service=e,this.element=t,this.multiple=i,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}static listenOnElement(t,i,r=!0){const s=new e(t,i,r);return s.hydrate(),s}hydrate(){!1===this.hydrated&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){!0===this.hydrated&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleFiles(e){let t=[];if(this.multiple)t=await Promise.all(e.map(async e=>await this.service.loadUploadedFile(e)));else{const i=e[0];i&&t.push(await this.service.loadUploadedFile(i))}return t}async handleDrop(e){e.preventDefault(),this.onDrop.call();let t=[];const i=e.dataTransfer;return i&&i.files&&(t=await this.handleFiles(Array.from(i.files))),this.onProcessingEnd.call(t,e),this.handleLeave(),{results:t,event:e}}async handleInputChange(e){e.preventDefault(),this.onDrop.call();const t=e.target;let i=[];return t.files&&(i=await this.handleFiles(Array.from(t.files)),this.onProcessingEnd.call(i,e),this.handleLeave()),{results:i,event:e}}handleEnter(){!1===this._hover&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){!0===this._hover&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Rs,this.multiple&&(e.multiple=!0),e}openFileDialog(e=!0){void 0!==this.input&&(this.input.multiple=e,this.input.click())}},Ds=class{constructor(e,t){this.thermalUrl=e,this.visibleUrl=t}},Os=class e extends Ds{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(t){return new e(t.url,t.code,t.message)}},Ms=class{_value;get value(){return this._value}get valueInitial(){return this._initial}set value(e){this._value=this.validate(e),this.afterSetEffect(this._value),this._listeners.call(this._value)}_listeners=new xs;constructor(e,t){this.parent=e,this._initial=t,this._value=this.validate(this._initial)}reset(){this.value=this._initial}addListener(e,t){this._listeners.set(e,t)}removeListener(e){this._listeners.delete(e)}clearAllListeners(){this._listeners.clear()}callAllListenersWithCurrentValue(){this._listeners.call(this._value)}},Is=class e{static LISTENER_PROMOTE_PROPERTIES_CHANGE="pch";static LISTENER_PROMOTE_MOVE_RESIZE="mvr";static SERIALISABLE_CHANGES=["name","color","min","max","avg"];static VALID_ANALYSIS_TYPES=["point","ellipsis","rectangle"];static COLOR_ACTIVE="yellow";static COLOR_INACTIVE="black";_ready=!1;get ready(){return this._ready}setReady(){if(this.ready)throw new Error("Trying to set ready an analysis that is already ready!");this._ready=!0}layerRoot;get renderRoot(){return this.file.dom.canvasLayer.getLayerRoot()}points=new Map;get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(e=>e.active)}get layers(){return this.file.analysis.layers}_selected=!1;get selected(){return this._selected}onSelected=new xs;onDeselected=new xs;onSerializableChange=new xs;onValues=new xs;onMoveOrResize=new xs;onSetInitialColor=new xs;onSetColor=new xs;onSetName=new xs;_min;_max;_avg;get min(){return this._min}get max(){return this._max}get avg(){return this._avg}_top;_left;_width;_height;get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(e){if(isNaN(e))return;if(e===this.top)return;const{top:t,height:i}=this.getVerticalDimensionFromNewValue(e,"top");let r=!1;t!==this.top&&(this._top=t,this.onSetTop(t),r=!0),i!==this.height&&(this._height=i,this.onSetHeight(i),r=!0),r&&this.onSerializableChange.call(this,"top")}setLeft(e){if(isNaN(e))return;if(e===this.left)return;const{left:t,width:i}=this.getHorizontalDimensionsFromNewValue(e,"left");let r=!1;t!==this.left&&(this._left=t,this.onSetLeft(t),r=!0),i!==this.width&&(this._width=i,this.onSetWidth(i),r=!0),r&&this.onSerializableChange.call(this,"left")}setWidth(e){if(e===this.height)return;const t=this.validateWidth(e);isNaN(t)||t===this.width||(this._width=t,this.onSetWidth(t),this.onSerializableChange.call(this,"width"))}setHeight(e){if(e===this.height)return;const t=this.validateHeight(e);isNaN(t)||t===this.height||(this._height=t,this.onSetHeight(t),this.onSerializableChange.call(this,"height"))}setBottom(e){if(isNaN(e))return;if(e===this.bottom)return;const{top:t,height:i}=this.getVerticalDimensionFromNewValue(e,"bottom");let r=!1;t!==this.top&&(this._top=t,this.onSetTop(t),r=!0),i!==this.height&&(this._height=i,this.onSetHeight(i),r=!0),r&&this.onSerializableChange.call(this,"bottom")}setRight(e){if(isNaN(e))return;if(e===this.right)return;const{left:t,width:i}=this.getHorizontalDimensionsFromNewValue(e,"right");let r=!1;t!==this.left&&(this._left=t,this.onSetLeft(t),r=!0),i!==this.width&&(this._width=i,this.onSetWidth(i),r=!0),r&&this.onSerializableChange.call(this,"right")}_color=e.COLOR_INACTIVE;get color(){return this._color}setColor(e){this._color=e,this.setColorCallback(e),this.onSetColor.call(e)}_initialColor;get initialColor(){return this._initialColor}setInitialColor(e){e!==this.initialColor&&(this._initialColor=e,this.onSetInitialColor.call(e),this.onSerializableChange.call(this,"color"),!0===this.selected&&this.setColor(e))}nameInitial;_name;get name(){return this._name}setName(e){e!==this.name&&(this._name=e,this.onSerializableChange.call(this,"name"),this.onSetName.call(e))}constructor(t,i,r){this.key=t,this.file=i,this._initialColor=r,this.nameInitial=t,this._name=t,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set(e.LISTENER_PROMOTE_MOVE_RESIZE,()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize"),this.layers.onAnySerializableChange.call(this,Xs.RESIZEMOVE)}),this.onSerializableChange.set(e.LISTENER_PROMOTE_PROPERTIES_CHANGE,(t,i)=>{e.SERIALISABLE_CHANGES.includes(i)&&this.layers.onAnySerializableChange.call(t,Xs.PROPERTIESCHANGE)})}serializedIsValid(t){const i=t.split(";").map(e=>e.trim());return!(i.length<2)&&(!!e.VALID_ANALYSIS_TYPES.includes(i[1])&&i[1]===this.getType())}static serializedSegmentsHasExact(e,t){return!!e.find(e=>e===t)}static serializedGetStringValueByKey(e,t){const i=new RegExp(`${t}:*`);return e.find(e=>{if(e.match(i))return isNaN(parseInt(e.split(":")[1]))})?.split(":")[1].trim()}static serializedGetNumericalValueByKey(e,t){const i=new RegExp(`${t}:\\d+`),r=e.find(e=>e.match(i));if(void 0!==r)return parseInt(r.split(":")[1])}destroyDom(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(e=!1,t=!0){if(!0===this.selected)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),!0===e&&this.layers.all.filter(e=>e.key!==this.key).forEach(e=>{e.selected&&e.setDeselected(!1)}),!0===t&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const i=this.file.slots.getAnalysisSlot(this);i&&this.file.group.analysisSync.setSlotSelected(this.file,i)}setDeselected(t=!0){if(!1===this.selected)return;this._selected=!1,this.onDeselected.call(this),this.setColor(e.COLOR_INACTIVE),this.arrayOfActivePoints.forEach(e=>e.deactivate()),!0===t&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const i=this.file.slots.getAnalysisSlot(this);i&&this.file.group.analysisSync.setSlotDeselected(this.file,i)}recalculateValues(){const{min:e,max:t,avg:i}=this.getValues();this._min=e,this._max=t,this._avg=i,this.onValues.call(this.min,this.max,this.avg)}dangerouslySetValues(e,t=void 0,i=void 0){this._avg=e,this._min=t,this._max=i,this.onValues.call(this.min,this.max,this.avg)}};let Us=function(e){return e[e.START=1]="START",e[e.MIDDLE=2]="MIDDLE",e[e.END=3]="END",e}({});var zs=class{get file(){return this.analysis.file}pxX;_x;get x(){return this._x}onX=new xs;pxY;_y;get y(){return this._y}onY=new xs;setXFromTool(e){const{x:t,placement:i}=this.analyzeXFromTool(e);if(this.mayMoveToX(t)){const e=this.x;this._x=t;const r=this.getXStyle(t,i);this.container.style.left=r,this.sideEffectOnXFromTool(t,i),this.onX.call(this.x,e)}}setXDirectly(e,t){if(this.mayMoveToX(e)){const i=this.x;this._x=e;const r=this.getXStyle(e,t);this.container.style.left=r,this.onX.call(this.x,i)}}setYFromTool(e){const{y:t,placement:i}=this.analyzeYFromTool(e);if(this.mayMoveToY(t)){const e=this.y;this._y=t;const r=this.getYStyle(t,i);this.container.style.top=r,this.sideEffectOnYFromTool(t,i),this.onY.call(this.y,e)}}setYDirectly(e,t){if(this.mayMoveToY(e)){const i=this.y;this._y=e;const r=this.getYStyle(e,t);this.container.style.top=r,this.onY.call(this.y,i)}}getXStyle(e,t){const i=this.calculatePercentageX(e),r=t===Us.START?0:t===Us.END?this.pxX:this.pxX/2;return this.formatPositionStyle(i,r)}getYStyle(e,t){const i=this.calculatePercentageY(e),r=t===Us.START?0:t===Us.END?this.pxY:this.pxY/2;return this.formatPositionStyle(i,r)}formatPositionStyle(e,t){return 0===t||isNaN(t)?`${e}%`:`calc( ${e}% + ${t}% )`}_color;get color(){return this._color}setColor(e){this._color=e,this.onSetColor(e)}get initialColor(){return this.analysis.initialColor}get activeColor(){return Bs.COLOR_ACTIVE}get inactiveColor(){return Bs.COLOR_INACTIVE}_active=!1;get active(){return this._active}_isHover=!1;get isHover(){return this._isHover}_isDragging=!1;get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}container;innerElement;constructor(e,t,i,r,s,o,a){this.key=e,this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=i,this._y=t,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(i,o),this.setYDirectly(t,a),this.root.appendChild(this.container)}isWithin(e,t){const i=this.getRadius()/2,r=this.x-i,s=this.x+i,o=this.y-i,a=this.y+i;return t>=r&&t<=s&&e>=o&&e<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(e){return e/this.analysis.file.width*100}calculatePercentageY(e){return e/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){return{x:this.getPercentageX(),y:this.getPercentageY()}}mouseEnter(){!1===this.isHover&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){!0===this.isHover&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}onMouseEnter=new xs;onMouseLeave=new xs;onActivate=new xs;onDeactivate=new xs;activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Fs=class e extends zs{static size=20;static sizePx(t=1){return Math.round(e.size*t).toString()+"px"}axisX;axisY;center;analyzeXFromTool(e){return{x:e,placement:Us.MIDDLE}}analyzeYFromTool(e){return{y:e,placement:Us.MIDDLE}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}constructor(e,t,i,r,s){super(e,t,i,r,s,Us.MIDDLE,Us.MIDDLE),this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const e=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&e&&(this.center.style.backgroundColor=e)})}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=e.sizePx(-.5),t.style.left=e.sizePx(-.5),t.style.width=e.sizePx(),t.style.height=e.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=e.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=e.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${e.sizePx(.5)} - 3px )`,t.style.left=`calc( ${e.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(e){this.axisX&&(this.axisX.style.backgroundColor=e),this.axisY&&(this.axisY.style.backgroundColor=e),this.center&&(this.center.style.borderColor=e)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(e=void 0){if(void 0===e)this.axisX?.style.removeProperty("box-shadow"),this.axisY?.style.removeProperty("box-shadow"),this.center?.style.removeProperty("box-shadow");else{const t=`0 0 5px 2px ${e}`;this.axisX&&(this.axisX.style.boxShadow=t),this.axisY&&(this.axisY.style.boxShadow=t),this.center&&(this.center.style.boxShadow=t)}}},Bs=class e extends Is{getType(){return"point"}center;_graph;get graph(){return this._graph||(this._graph=new Ns(this)),this._graph}static addAtPoint(t,i,r,s,o){return new e(t,i,r,s,o)}constructor(e,t,i,r,s){super(e,i,t),this._top=r,this._left=s,this._width=0,this._height=0,this.center=new Fs("center",r,s,this,t),this.points.set("center",this.center),this.recalculateValues()}setColorCallback(e){this.center.setColor(e)}isWithin(e,t){return this.center.isWithin(t,e)}getValues(){const e=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:e,max:e,avg:e}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(e){this.center.setXDirectly(e,Us.MIDDLE),this.onSerializableChange.call(this,"left")}onSetTop(e){this.center.setYDirectly(e,Us.MIDDLE),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(e){const t=Math.min(this.file.height-1,Math.max(0,Math.round(e)));return{top:t,bottom:t,height:0}}getHorizontalDimensionsFromNewValue(e){const t=Math.min(this.file.width-1,Math.max(0,Math.round(e)));return{left:t,right:t,width:0}}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(e=>e.trim());let i=!1;const r=t[0];r!==this.name&&this.setName(r);const s=Is.serializedSegmentsHasExact(t,"avg");s!==this.graph.state.AVG&&(this.graph.setAvgActivation(s),i=!0);const o=Is.serializedGetStringValueByKey(t,"color");void 0===o||o!==this.initialColor&&this.setInitialColor(o);const a=Is.serializedGetNumericalValueByKey(t,"top"),n=Is.serializedGetNumericalValueByKey(t,"left");void 0!==a&&(this.setTop(a),i=!0),void 0!==n&&(this.setLeft(n),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push("point"),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`color:${this.initialColor}`),this.graph.state.AVG&&e.push("avg"),e.join(";")}},Ns=class{constructor(e){this.analysis=e,this.hydrate()}_min=!1;_max=!1;_avg=!1;get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}_value;get value(){return this._value}set value(e){this._value=e,this.onGraphData.call(e,this.analysis)}setMinActivation(e){this._min!==e&&(this._min=e,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(e){this._max!==e&&(this._max=e,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(e){this._avg!==e&&(this._avg=e,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}onGraphActivation=new xs;onGraphData=new xs;onAnalysisSelection=new xs;emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{this.value=await e.getAnalysisData()}),this.value=await this.getGraphData()}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Bs)return this._avg?[this.analysis.initialColor]:[];const e=[];return Object.values(this.state).forEach(t=>{t&&e.push(this.analysis.initialColor)}),e}getGraphLabels(){if(this.analysis instanceof Bs)return this._avg?[this.analysis.name]:[];const e=[];return Object.entries(this.state).forEach(([t,i])=>{i&&e.push(`${this.analysis.name} ${t}`)}),e}hasDataToPrint(){return this.analysis instanceof Bs?this._avg:this._min||this._max||this._avg}getDtaAtTime(e){if(this.analysis instanceof Bs)return this._avg?[this.value[e]]:[];const t=[],i=this.value;return this._min&&t.push(i[e].min),this._max&&t.push(i[e].max),this._avg&&t.push(i[e].avg),t}},js=class extends zs{constructor(e,t,i,r,s,o,a){super(e,t,i,r,s,o,a)}createInnerElement(){const e=document.createElement("div");return e.style.position="absolute",e.style.top="-5px",e.style.left="-5px",e.style.width="10px",e.style.height="10px",e.style.position="absolute",e.style.backgroundColor=this.color,e}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Vs=class extends js{_pairX;_pairY;get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){return{x:e,placement:this.isLeftSide?Us.START:Us.END}}analyzeYFromTool(e){return{y:e,placement:this.isTopSide?Us.START:Us.END}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(e=>{e.setXDirectly(e.x,Us.START)}):this.analysis.rightSidePoints.forEach(e=>{e.setXDirectly(e.x,Us.END)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(e=>{e.setYDirectly(e.y,Us.START)}):this.analysis.bottomSidePoints.forEach(e=>{e.setYDirectly(e.y,Us.END)})}isMoving=!1;onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Hs=class extends Is{wPx=(100/this.file.width/2).toString()+"%";hPx=(100/this.file.height/2).toString()+"%";tl;tr;bl;br;area;_graph;get graph(){return this._graph||(this._graph=new Ns(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,r){const s=Math.min(e,r),o=Math.max(e,r),a=Math.min(t,i);return{top:s,left:a,width:Math.max(t,i)-a,height:o-s}}constructor(e,t,i,r,s,o,a){super(e,i,t);let n=s,l=r;void 0!==o&&void 0!==a&&(n=s+o,l=r+a),this.area=this.buildArea(r,s,o,a),this.tl=this.addPoint("tl",r,s,Us.START,Us.START),this.tr=this.addPoint("tr",r,n,Us.END,Us.START),this.bl=this.addPoint("bl",l,s,Us.START,Us.END),this.br=this.addPoint("br",l,n,Us.END,Us.END),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,r=0;this.points.forEach(s=>{s.x>t&&(t=s.x),s.x<e&&(e=s.x),s.y<i&&(i=s.y),s.y>r&&(r=s.y)}),this._left=e,this._top=i,this._width=t-e,this._height=r-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,r,s){const o=new Vs(e,t,i,this,this.color,r,s);return this.points.set(e,o),o}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,Us.START)}),this.forPoints(this.rightSidePoints,e=>{e.setXDirectly(this.right,Us.END)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,Us.START)}),this.forPoints(this.bottomSidePoints,e=>{e.setYDirectly(this.bottom,Us.END)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,e=>{e.setXDirectly(this.left,Us.START)}),this.forPoints(this.rightSidePoints,e=>{e.setXDirectly(this.right,Us.END)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,e=>{e.setYDirectly(this.top,Us.START)}),this.forPoints(this.bottomSidePoints,e=>{e.setYDirectly(this.bottom,Us.END)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),r=this.file.height-1,s="top"===t?this.bottom:this.top;return i<=0?{top:0,bottom:s,height:s}:i>r?{top:s,bottom:r,height:r-s}:"bottom"===t?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),r=this.file.width-1,s="left"===t?this.right:this.left;return i<=0?{left:0,right:s,width:s}:i>r?{left:s,right:r,width:r-s}:"right"===t?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(e=>t(e))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(e=>e.trim());let i=!1;const r=t[0];r!==this.name&&this.setName(r);const s=Is.serializedSegmentsHasExact(t,"avg");s!==this.graph.state.AVG&&this.graph.setAvgActivation(s);const o=Is.serializedSegmentsHasExact(t,"min");o!==this.graph.state.MIN&&this.graph.setMinActivation(o);const a=Is.serializedSegmentsHasExact(t,"max");a!==this.graph.state.MAX&&this.graph.setMaxActivation(a);const n=Is.serializedGetStringValueByKey(t,"color");void 0===n||n!==this.initialColor&&this.setInitialColor(n);const l=Is.serializedGetNumericalValueByKey(t,"top"),h=Is.serializedGetNumericalValueByKey(t,"left"),c=Is.serializedGetNumericalValueByKey(t,"width"),d=Is.serializedGetNumericalValueByKey(t,"height");void 0!==l&&l!==this.top&&(this.setTop(l),i=!0),void 0!==h&&h!==this.left&&(this.setLeft(h),i=!0),void 0!==c&&c!==this.width&&(this.setWidth(c),i=!0),void 0!==d&&d!==this.height&&(this.setHeight(d),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},Ws=class{pxX;pxY;get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}element;_top;_width;_left;_height;get top(){return this._top}set top(e){this._top=e,this.element&&(this.element.style.top=this._top/this.fileHeight*100+"%")}get left(){return this._left}set left(e){this._left=e,this.element&&(this.element.style.left=this._left/this.fileWidth*100+"%")}get height(){return this._height}set height(e){this._height=e,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(e){this._width=e,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}constructor(e,t,i,r,s){this.analysis=e,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=t,this.left=r,this.width=i,this.height=s}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(e){this.onSetColor(e)}},Gs=class extends Ws{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(e){this.element.style.borderColor=e}},qs=class e extends Hs{getType(){return"ellipsis"}static startAddingAtPoint(t,i,r,s,o){const a=new e(t,i,r,s,o);return a.br.activate(),a}static build(t,i,r,s,o,a,n){const{top:l,left:h,width:c,height:d}=e.calculateDimensionsFromCorners(s,o,a,n),p=new e(t,i,r,l,h,c,d);return p.recalculateValues(),p}buildArea(e,t,i,r){return void 0!==i&&void 0!==r?new Gs(this,e,t,e+i,t+r):new Gs(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,r=this.top+this.height;let s=1/0,o=-1/0,a=0,n=0;for(let l=i;l<r;l++){const i=this.file.width*l;for(let r=e;r<=t;r++)if(this.isWithin(r,l)){const e=this.file.pixels[i+r];e<s&&(s=e),e>o&&(o=e),n+=e,a++}}return{min:s,max:o,avg:n/a}}isWithin(e,t){const i=this.left+this.width/2,r=this.top+this.height/2,s=(e-i)/(this.width/2),o=(t-r)/(this.height/2);return s*s+o*o<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Ys=class extends Ws{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(e){this.element.style.borderColor=e}},Zs=class e extends Hs{getType(){return"rectangle"}static startAddingAtPoint(t,i,r,s,o){const a=new e(t,i,r,s,o);return a.br.activate(),a}static build(t,i,r,s,o,a,n){const{top:l,left:h,width:c,height:d}=e.calculateDimensionsFromCorners(s,o,a,n),p=new e(t,i,r,l,h,c,d);return p.recalculateValues(),p}buildArea(e,t,i,r){return void 0!==i&&void 0!==r?new Ys(this,e,t,e+i,t+r):new Ys(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,r=this.top+this.height;let s=1/0,o=-1/0,a=0,n=0;for(let l=i;l<r;l++){const i=this.file.width*l;for(let r=e;r<=t;r++){const e=this.file.pixels[i+r];e<s&&(s=e),e>o&&(o=e),n+=e,a++}}return{min:s,max:o,avg:n/a}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}};let Xs=function(e){return e[e.ADD=0]="ADD",e[e.REMOVE=1]="REMOVE",e[e.RESIZEMOVE=2]="RESIZEMOVE",e[e.PROPERTIESCHANGE=3]="PROPERTIESCHANGE",e[e.GRAPH=4]="GRAPH",e}({});const Ks=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"];var Qs=class extends Map{layers=[];get slots(){return this.drive.parent.slots}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>!0===e.selected)}onAdd=new xs;onRemove=new xs;onSelectionChange=new xs;onAnySerializableChange=new xs;colors=Ks;constructor(e){super(),this.drive=e}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=!0===t?this.slots.getNextFreeSlotNumber():!1===t?void 0:t;return void 0!==i&&this.slots.assignAnalysisToSlot(i,e),this.onAdd.call(e,this.all),this.onAnySerializableChange.call(e,Xs.ADD),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.destroyDom(),this.delete(e),this.layers=this.layers.filter(t=>t.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e),this.onAnySerializableChange.call(t,Xs.REMOVE))}}removeAllAnalyses(){this.forEach(e=>{this.removeAnalysis(e.key)})}createRectFrom(e,t){const i=Zs.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,r,s,o,a){const n=Zs.build(e,o??this.getNextColor(),this.drive.parent,t,i,r,s);return n.setReady(),this.addAnalysis(n,a),n}createEllipsisFrom(e,t){const i=qs.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,r,s,o,a){const n=qs.build(e,o??this.getNextColor(),this.drive.parent,t,i,r,s);return n.setReady(),this.addAnalysis(n,a),n}createPointAt(e,t){const i=Bs.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,r,s){const o=Bs.addAtPoint(e,r??this.getNextColor(),this.drive.parent,t,i);return o.setReady(),this.addAnalysis(o,s),o}selectAll(){this.all.filter(e=>{!1===e.selected&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}getNextColor(){const e=this.all.map(e=>e.initialColor),t=Ks.filter(t=>!e.includes(t));return t.length>0?t[0]:Ks[0]}getNextName(e){let t=this.all.length;for(;this.has(`${e} ${t}`);)t++;return`${e} ${t}`}},Js=class{constructor(e){this.drive=e}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(e,t=!1){return e.reduce((e,i)=>[...e,...t?i.arrayOfActivePoints:i.arrayOfPoints],[])}},eo=class extends Ms{layers=new Qs(this);points=new Js(this);listener;get currentTool(){return this.parent.group.tool.value}bindedPointerMoveListener;bindedPointerDownListener;bindedPointerUpListener;dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,r=e.layerX/t,s=Math.round(i*r),o=this.listener.clientHeight,a=this.parent.height,n=e.layerY/o;return{top:Math.round(a*n),left:s}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=e=>{const t=this.getRelativePosition(e);this.points.all.forEach(e=>{e.active&&this.currentTool.onPointMove(e,t.top,t.left);const i=e.isWithin(t.top,t.left);i?this.currentTool.onPointEnter(e):i||this.currentTool.onPointLeave(e)})},this.bindedPointerDownListener=e=>{const t=this.getRelativePosition(e);this.currentTool.onCanvasClick(t.top,t.left,this.parent),this.points.all.forEach(e=>{e.isWithin(t.top,t.left)&&this.currentTool.onPointDown(e)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(e=>{this.currentTool.onPointUp(e)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},to=class{listenerKey="___listen-to-graphs___";get layers(){return this.drive.parent.analysis.layers}_graphs=new Map;get graphs(){return this._graphs}addGraph(e){this._graphs.set(e.analysis.key,e),this.onAddGraph.call(e)}removeGraph(e){this._graphs.delete(e),this.onRemoveGraph.call(e)}_output={values:[[]],colors:[]};get output(){return this._output}set output(e){this._output=e,this.onOutput.call(e)}onOutput=new xs;onAddGraph=new xs;onRemoveGraph=new xs;constructor(e){this.drive=e,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}refreshOutput(){const e={values:[["Time"]],colors:[]};return this.graphs.forEach(t=>{e.values[0].push(...t.getGraphLabels()),e.colors.push(...t.getGraphColors())}),this.graphs.forEach(t=>{t.hasDataToPrint()&&t.value&&Object.keys(t.value).forEach((i,r)=>{let s=e.values[r+1];if(void 0===s){const t=new Date;t.setTime(parseInt(i)),s=[t],e.values[r+1]=s}s.push(...t.getDtaAtTime(parseInt(i)))})}),this.output=e,e}hasGraph(){return Object.values(this.graphs).find(e=>e.hasDataToPrint()).length>0}generateExportData(){const e={},t=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const i of this.graphs.values()){const r=i.getGraphLabels();for(const e of r)t.push({key:e,displayLabel:`${e} (${i.analysis.initialColor}, ${i.analysis.width} x ${i.analysis.height} px)`});i.value&&Object.keys(i.value).forEach(s=>{if(!Object.keys(e).includes(s)){const r=parseInt(s),o=r+i.analysis.file.timestamp;e[s]={[t[0].key]:ms(r,"m:ss:SSS")+" ",[t[1].key]:ms(o,"d. M.y m:ss:SSS")+" ",[t[2].key]:r,[t[3].key]:o}}const o=i.getDtaAtTime(parseInt(s));r.forEach((t,i)=>{e[s][t]=o[i]})})}return{header:t,data:Object.values(e)}}},io=class extends Ms{_hasActiveGraphs=!1;get hasActiveGraphs(){return this._hasActiveGraphs}onGraphsPresence=new xs;listeners=new to(this);constructor(e){super(e,{values:[[]],colors:[]}),this.listeners.onOutput.set("__mirror_output_to_local_state",async e=>{this.value=e,e.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=ir({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),r=gr(i)(e);fr(i)(r)}async updateAllAnalysesValues(){const e=this.parent;try{const t=e.analysis.value.map(e=>e instanceof Bs?[e.getType(),e.key,e.top,e.left,1,1]:[e.getType(),e.key,e.top,e.left,e.width,e.height]);(await e.pool.exec(async(e,t,i,r)=>{const s=r.map(e=>({id:e[1],type:e[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let o=0;o<e;o++)for(let a=0;a<t;a++){const n=i[o+a*e],l=(e,t,i,r,s,o)=>{const a=(e-(i+s/2))/(s/2),n=(t-(r+o/2))/(o/2);return a*a+n*n<=1};r.forEach((i,r)=>{const h=s[r],c=i[0],d=i[2],p=i[3],u=i[4],m=i[5];"point"===c?o===p&&a===d&&(h.avg.value=n):"rectangle"===c?o>=p&&o<p+u&&a>=d&&a<d+m&&(n<h.min.value&&(h.min.value=n),n>h.max.value&&(h.max.value=n),h.avg.count=h.avg.count+1,h.avg.sum=h.avg.sum+n):"ellipsis"===c&&l(o,a,p,d,e,t)&&(n<h.min.value&&(h.min.value=n),n>h.max.value&&(h.max.value=n),h.avg.count=h.avg.count+1,h.avg.sum=h.avg.sum+n)})}return{stats:s.map(e=>({id:e.id,min:e.min.value!==1/0?e.min.value:void 0,max:e.max.value!==-1/0?e.max.value:void 0,avg:"point"===e.type?e.avg.value:e.avg.sum/e.avg.count}))}},[e.width,e.height,e.pixels,t],{})).stats.forEach(t=>{e.analysis.layers.get(t.id)?.dangerouslySetValues(t.avg,t.min,t.max)})}catch(t){t instanceof Error&&console.error(t)}}},ro=class{_analysis;get analysis(){return this._analysis}_serialized;get serialized(){return this._serialized}onSerialize=new xs;enqueuedSerialisation;constructor(e,t){this.slot=e,this._analysis=t,this.hydrate(t),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}listenerKey(e){return`slot ${this.slot} ${e}`}dehydrate(e){e.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(e){e.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(e){this.analysis.recievedSerialized(e);const t=this.analysis.toSerialized();t!==e&&(this._serialized=t,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(e){const t=this.analysis.file.slots.getOnSerializeManager(this.slot);t&&(t.call(e),this.analysis.file.slots.markAsChanged())}},so=class e extends Ms{static MAX_SLOTS=7;onAnySlotChanged=new xs;_onAnySlotChangedTimeout;markAsChanged(){this._onAnySlotChangedTimeout&&clearTimeout(this._onAnySlotChangedTimeout),this._onAnySlotChangedTimeout=setTimeout(()=>{this.onAnySlotChanged.call(),this._onAnySlotChangedTimeout=void 0},0)}onSlot1Assignement=new xs;onSlot2Assignement=new xs;onSlot3Assignement=new xs;onSlot4Assignement=new xs;onSlot5Assignement=new xs;onSlot6Assignement=new xs;onSlot7Assignement=new xs;onSlot1Serialize=new xs;onSlot2Serialize=new xs;onSlot3Serialize=new xs;onSlot4Serialize=new xs;onSlot5Serialize=new xs;onSlot6Serialize=new xs;onSlot7Serialize=new xs;getNextFreeSlotNumber(){for(let t=1;t<=e.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignAnalysisToSlot(e,t){void 0!==this.getSlot(e)&&this.removeSlotAndAnalysis(e);const i=this.getAnalysisSlot(t);void 0!==i&&this.unassignAnalysisFromItsSlot(this.getSlot(i).analysis);const r=new ro(e,t);this.value.set(e,r);const s=this.getOnAssignementManager(e),o=this.getOnSerializeManager(e);return s&&s.call(r),o&&o.call(r.serialized),this.callAllListenersWithCurrentValue(),r}hasSlot(e){return this.value.has(e)}getSlot(e){return this.value.get(e)}getFullSlotsMap(){const e=new Map;return[1,2,3,4,5,6,7].forEach(t=>{this.hasSlot(t)?e.set(t,this.getSlot(t)):e.set(t,void 0)}),e}getAnalysisSlot(e){for(const t of this.value.values())if(t.analysis.key===e.key)return t.slot}removeSlotAndAnalysis(e){const t=this.value.get(e);if(t){const i=t.analysis;this.emitOnAssignement(e,void 0),this.value.delete(e),this.parent.analysis.layers.removeAnalysis(i.key),this.callAllListenersWithCurrentValue()}}unassignAnalysisFromItsSlot(e){for(const t of this.value.values())t.analysis.key===e.key&&(this.emitOnAssignement(t.slot,void 0),this.value.delete(t.slot),!0===this.parent.group.analysisSync.value&&this.parent.group.analysisSync.deleteSlot(this.parent,t.slot),this.callAllListenersWithCurrentValue())}createAnalysisFromSerialized(e,t){const i=e.split(";").map(e=>e.trim());if(i.length<2)return;const r=void 0!==i[0]&&i[0].length>0?i[0]:void 0;if(void 0===r)return;const s=i[1];if(!["rectangle","ellipsis","point"].includes(s))return;let o=Is.serializedGetNumericalValueByKey(i,"top"),a=Is.serializedGetNumericalValueByKey(i,"left");const n=Is.serializedGetStringValueByKey(i,"color");let l=Is.serializedGetNumericalValueByKey(i,"width"),h=Is.serializedGetNumericalValueByKey(i,"height");const c=Is.serializedSegmentsHasExact(i,"avg"),d=Is.serializedSegmentsHasExact(i,"min"),p=Is.serializedSegmentsHasExact(i,"max");let u;if(void 0!==o&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),void 0!==a&&(a<0&&(a=0),a>this.parent.width-1&&(a=this.parent.width-1)),"point"===s){if(void 0===o||void 0===a)return;u=this.parent.analysis.layers.placePointAt(r,o,a,n,!1)}else{if(void 0===o||void 0===a||void 0===l||void 0===h)return;l<0&&(l=0),l+a>this.parent.width-1&&(l=this.parent.width-a-1),h<0&&(h=0),h+o>this.parent.height-1&&(h=this.parent.height-o-1),u="rectangle"===s?this.parent.analysis.layers.placeRectAt(r,o,a,l+a,h+o,n,!1):this.parent.analysis.layers.placeEllipsisAt(r,o,a,l+a,h+o,n,!1)}if(void 0!==u){if(u instanceof Bs?c&&u.graph.setAvgActivation(!0):u instanceof Hs&&(c&&u.graph.setAvgActivation(!0),d&&u.graph.setMinActivation(!0),p&&u.graph.setMaxActivation(!0)),!1===t);else if(!0===t){const e=this.getNextFreeSlotNumber();void 0!==e&&this.assignAnalysisToSlot(e,u)}else void 0!==t&&this.assignAnalysisToSlot(t,u);return u}}validate(e){return e}afterSetEffect(){}emitOnAssignement(e,t){const i=this.getOnAssignementManager(e);i&&i.call(t);const r=this.getOnSerializeManager(e);r&&r.call(t?t.serialized:void 0)}getOnSerializeManager(e){return 1===e?this.onSlot1Serialize:2===e?this.onSlot2Serialize:3===e?this.onSlot3Serialize:4===e?this.onSlot4Serialize:5===e?this.onSlot5Serialize:6===e?this.onSlot6Serialize:7===e?this.onSlot7Serialize:void 0}getOnAssignementManager(e){return 1===e?this.onSlot1Assignement:2===e?this.onSlot2Assignement:3===e?this.onSlot3Assignement:4===e?this.onSlot4Assignement:5===e?this.onSlot5Assignement:6===e?this.onSlot6Assignement:7===e?this.onSlot7Assignement:void 0}getSlotValue(e){if(this.hasSlot(e))return this.getSlot(e)?.serialized}forEveryExistingSlot(e){for(let t=1;t<=7;t++){const i=this.getSlot(t);i&&e(i,t)}}},oo=class extends Ms{validate(e){return e}afterSetEffect(){}recalculateFromCursor(e){e&&(this.value=this._getValueAtCoordinate(e.x,e.y))}_getValueAtCoordinate(e,t){if(void 0===e||void 0===t||e===this.parent.meta.width||t===this.parent.meta.height)return;const i=e+t*this.parent.meta.width;return this.parent.pixels[i]}},ao=class{_currentFrame;get currentFrame(){return this._currentFrame}set currentFrame(e){this._currentFrame=e,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}bufferSize=3;buffer=new Map;get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(e=>e.relative)}constructor(e,t){this.drive=e,this.currentFrame=t}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(e){let t=this.buffer.get(e);return void 0===t&&(t=await this.drive.parent.reader.frameData(e.index)),this.currentFrame=t,await this.preloadAfterFrameSet(e)}async preloadAfterFrameSet(e){const t=e.index+1<this.drive.relativeSteps.length?e.index+1:NaN,i=isNaN(t)?NaN:this.drive._validateIndex(t+this.bufferSize);if(isNaN(t)||isNaN(i)||t>i||t===i)return e.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const r=Array.from(this.drive.stepsByIndex.values()).filter(e=>e.index>=t&&e.index<i),s=r.filter(e=>!this.preloadedSteps.includes(e));return(await Promise.all(s.map(e=>this.drive.parent.reader.frameData(e.index)))).forEach((e,t)=>{const i=s[t];this.buffer.set(i,e)}),this.preloadedSteps.forEach(e=>{r.includes(e)||this.buffer.delete(e)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}};const no={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1};var lo=class extends Ms{_playbackSpeed=1;get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return no[this.playbackSpeed]}onFrame=new xs;get duration(){return this.parent.duration}get frameCount(){return this.steps.length}startTimestampRelative;endTimestampRelative;stepsByAbsolute=new Map;stepsByRelative=new Map;stepsByIndex=new Map;relativeSteps=[];_currentStep;get currentStep(){return this._currentStep}isSequence;_isPlaying=!1;get isPlaying(){return this._isPlaying}timer;buffer;callbackdPlaybackSpeed=new xs;callbacksPlay=new xs;callbacksPause=new xs;callbacksStop=new xs;callbacksEnd=new xs;callbacksChangeFrame=new xs;get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}constructor(e,t,i,r){super(e,Math.max(Math.min(t,i.length),0)),this.steps=i,this._currentStep=this.steps[this.valueInitial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(e=>{this.stepsByIndex.set(e.index,e),this.stepsByAbsolute.set(e.absolute,e),this.stepsByRelative.set(e.relative,e),this.relativeSteps.push(e.relative)}),this.buffer=new ao(this,r)}init(){this.buffer.init()}afterSetEffect(){this.onFrame.call(this._currentStep),this.steps.length}validate(e){return void 0===this.steps?e:1===this.steps.length?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return 100*this._convertRelativeToAspect(e)}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),ms(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);this.setRelativeTime(e.relative)}findPreviousOrThis(e){return this.stepsByRelative.has(e)?this.stepsByRelative.get(e):this.findPreviousRelative(e)}findPreviousRelative(e){if(1===this.steps.length)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e);let i,r=Math.max(Math.ceil(t*this.steps.length)+5,this.steps.length);for(;r>=0&&void 0===i;){const t=this.stepsByIndex.get(r);void 0!==t&&t.relative<e&&(i=t),r-=1}return void 0!==i?i:this.steps[0]}findNextRelative(e){if(1===this.steps.length)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,r=this._validateIndex(i),s=this._validateIndex(i+40),o=this.steps.slice(r,s).find(t=>t.relative>e);return void 0!==o&&o}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousOrThis(this.value);if(t!==this._currentStep){this._currentStep=t;const e=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),e}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){void 0!==this.timer&&clearTimeout(this.timer),this.isSequence&&!1!==this._isPlaying&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},ho=class extends Ms{stream;recorder;mimeType;fileExt;_isRecording=!1;_mayStop=!0;get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}recordedChunks=[];callbackMayStop=new xs;validate(e){return e}afterSetEffect(e){}start(){if(!0===this.value)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",e=>{e.data.size>0&&(this.recordedChunks.push(e.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(!1===this.value)throw new Error("Recording has not started yet - can not end it!");if(void 0===this.recorder)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(!0===this.value)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}getOutputMimeType(){let e;for(const t of[{mime:"video/webm;codecs=vp9",ext:"webm"},{mime:"video/webm;codecs=vp8",ext:"webm"},{mime:"video/webm;codecs=vp9,opus",ext:"webm"},{mime:"video/webm;codecs=vp8,opus",ext:"webm"},{mime:"video/webm",ext:"webm"},{mime:"video/mp4;codecs=h264",ext:"mp4"},{mime:"video/mp4",ext:"mp4"}])MediaRecorder.isTypeSupported(t.mime)&&(e=t);return e}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25),t=this.getOutputMimeType();if(void 0===t)throw new Error("No supported mime type found for MediaRecorder!");this.mimeType=t.mime,this.fileExt=t.ext;const i={mimeType:this.mimeType};return{stream:e,recorder:new MediaRecorder(e,i),options:i}}createRecordingFileName(){const e=this.parent.fileName,t="__"+["from_"+this.parent.group.registry.range.value.from.toFixed(2),"to_"+this.parent.group.registry.range.value.to.toFixed(2)].join("__")+"."+(this.fileExt?this.fileExt:"webm");return e.replace(/\.lrc$/i,t)}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.createRecordingFileName(),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t),document.body.removeChild(i)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},co=class e{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e.part="thermal-canvas-wrapper",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e.part="thermal-file-canvas",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const t=e.createCursorLayerAxeBase();return t.classList.add("cursorLayerAxeX"),t.style.width="1px",t.style.height="20px",t.style.top="-10px",t.style.userSelect="none",t}static createCursorLayerY(){const t=e.createCursorLayerAxeBase();return t.classList.add("cursorLayerAxeY"),t.style.width="20px",t.style.height="1px",t.style.left="-10px",t.style.userSelect="none",t}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},po=class{constructor(e){this.instance=e}_mounted=!1;get mounted(){return this._mounted}mount(){this._mounted||null!==this.instance.root&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&null!==this.instance.dom?.root&&(this._mounted=!1,this.instance.dom?.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},uo=class extends po{container;canvas;_opacity=1;get opacity(){return this._opacity}set opacity(e){null!==this.instance.visibleUrl&&void 0!==this.instance.visibleUrl&&0!==this.instance.visibleUrl.trim().length&&(this._opacity=Math.max(Math.min(e,1),0),1!==this._opacity?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity"))}constructor(e){super(e),this.container=co.createCanvasContainer(),this.canvas=co.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.canvas.setAttribute("data-video-canvas",""),this.canvas.setAttribute("crossorigin","anonymous"),this.canvas.setAttribute("crossOrigin","Anonymous"),this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}},mo=class extends po{layerRoot;center;axisX;axisY;label;constructor(e){super(e),this.layerRoot=co.createCursorLayerRoot(),this.center=co.createCursorLayerCenter(),this.axisX=co.createCursorLayerX(),this.axisY=co.createCursorLayerY(),this.label=co.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}_show=!1;get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}_hover=!1;get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(null===this.instance.root);else{const i=this.instance.root.offsetWidth/this.instance.width,r=Math.round(e*i),s=Math.round(t*i),o=100/this.instance.width/2,a=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(r)} + ${o}%)`,this.center.style.top=`calc( ${this.px(s)} + ${a}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?"3px"!==this.label.style.bottom&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):"3px"!==this.label.style.top&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){null===this.instance.root||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){null===this.instance.root||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},go=class extends po{container;constructor(e){super(e),this.container=co.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},fo=class extends po{container;image;get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return void 0!==this._url}constructor(e,t){super(e),this._url=t,this.container=co.createVisibleLayer(),this._url&&(this.image=co.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},yo=class e{static CLASS_BASE="thermalImageRoot";static CLASS_BUILT=e.CLASS_BASE+"__built";static CLASS_HYDRATED=e.CLASS_BASE+"__mounted";static CLASS_HOVER=e.CLASS_BASE+"__hover";_built=!1;get built(){return this._built}setBuilt(t){this._built=t,!0===t?(this.root.classList.add(e.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.parent.onMount.call()):(this.root.classList.remove(e.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"),this.parent.onUnmount.call())}_hydrated=!1;get hydrated(){return this._hydrated}setHydrated(t){this._hydrated=t,!0===t?(this.root.classList.add(e.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(e.CLASS_HYDRATED),delete this.root.dataset.hydrated)}_hover=!1;get hover(){return this._hover}setHover(t){this._hover=t,!0===t?(this.root.classList.add(e.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(e.CLASS_HOVER),delete this.root.dataset.hover)}_canvasLayer;get canvasLayer(){return this._canvasLayer}_visibleLayer;get visibleLayer(){return this._visibleLayer}_cursorLayer;get cursorLayer(){return this._cursorLayer}_listenerLayer;get listenerLayer(){return this._listenerLayer}constructor(t,i){this.parent=t,this.root=i,this.root.classList.add(e.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}build(){null!==this.root&&!0===this.built&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy()),this._canvasLayer=new uo(this.parent),this._visibleLayer=new fo(this.parent,this.parent.visibleUrl),this._cursorLayer=new mo(this.parent),this._listenerLayer=new go(this.parent),this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){!0===this.built&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(!0===this.hydrated&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(e.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){void 0!==this.listenerLayer?(!0===this.hydrated&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)):console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`)}dehydrate(){!1!==this.hydrated?void 0!==this.listenerLayer?(this.parent.dehydrateListener(this),this.setHydrated(!1)):console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`):console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`)}},vo=class{_initialised=!1;get initialised(){return this._initialised}get registry(){return this.file.group.registry}get width(){return this.file.width}get height(){return this.file.height}get from(){return void 0===this.registry.range.value?this.file.min:this.registry.range.value.from}get to(){return void 0===this.registry.range.value?this.file.max:this.registry.range.value.to}get palette(){return this.registry.palette.currentPalette.pixels}constructor(e,t){this.file=e,this.canvas=t}async init(){if(!this.initialised)return await this.onInit()?(this._initialised=!0,void(await this.render())):void console.warn(`Renderer of ${this.file.id} failed to initialise`);console.warn(`Renderer of ${this.file.id} is already initialised`)}async render(){if(this.initialised)return await this.executeRender();console.warn(`Renderer of ${this.file.id} is not initialised`)}},bo=class extends vo{get pool(){return this.registry.pool}context;async onInit(){const e=this.canvas.getContext("2d");return null!==e&&(this.context=e,!0)}async executeRender(){const e=await this.pool.exec(async(e,t,i,r,s,o)=>{const a=new OffscreenCanvas(i,r).getContext("2d"),n=t-e;for(let h=0;h<i;h++)for(let l=0;l<r;l++){let r=s[h+l*i];r<e&&(r=e),r>t&&(r=t);const c=(r-e)/n;a.fillStyle=o[Math.floor((o.length-1)*c)],a.fillRect(h,l,1,1)}const l=a.getImageData(0,0,i,r);return await createImageBitmap(l)},[this.from,this.to,this.width,this.height,this.file.pixels,this.palette],{});this.context.drawImage(e,0,0)}async destroy(){}},wo=class e extends vo{context;program;fragmentShader;vertexShader;pixelsBuffer;pixelsTexture;paletteBuffer;paletteTexture;vertexBuffer;get listenerIdPalette(){return this.file.id+"_palette"}get listenerIdRange(){return this.file.id+"_range"}get listenerIdPixels(){return this.file.id+"_pixels"}async onInit(){const e=this.canvas.getContext("webgl2",{preserveDrawingBuffer:!0});if(null===e)return!1;this.context=e,this.pixelsBuffer=this.initPixelsBuffer(),this.pixelsTexture=this.initPixelsTexture(),this.paletteBuffer=this.initPaletteBuffer(),this.paletteTexture=this.initPaletteTexture(),this.registry.palette.addListener(this.listenerIdPalette,()=>{const e=this.registry.palette.currentPalette.texturePixels;this.writePaletteTexture(e)}),this.registry.range.addListener(this.listenerIdRange,()=>{const e=this.registry.range.currentRange,t=e?e.from:this.file.min,i=e?e.to:this.file.max;this.writeRangeUniform(t,i)}),this.file.timeline.addListener(this.listenerIdPixels,()=>{const e=this.file.pixels;this.writePixelsTexture(e)}),this.initGl();const t=this.registry.range.currentRange,i=t?t.from:this.file.min,r=t?t.to:this.file.max;this.writeRangeUniform(i,r);const s=this.registry.palette.currentPalette.texturePixels;return this.writePaletteTexture(s),this.writePixelsTexture(this.file.pixels),this.context.viewport(0,0,this.canvas.width,this.canvas.height),!0}static VERTEX_SHADER="#version 300 es\n        in vec2 a_position;\n        out vec2 v_uv;\n        void main() {\n            v_uv = ( a_position + 1.0 ) * 0.5;\n            v_uv.y = 1.0 - v_uv.y;  // Převrácení Y osy pro správnou orientaci textury\n            gl_Position = vec4(a_position, 0.0, 1.0);\n        }\n    ";static FRAGMENT_SHADER="#version 300 es\n        precision highp float;\n        in vec2 v_uv;\n        uniform sampler2D u_pixels;\n        uniform sampler2D u_palette;\n        uniform float u_from;\n        uniform float u_to;\n        out vec4 outColor;\n        void main() {\n            float temp = texture(u_pixels, v_uv).r;\n            float t = clamp( (temp - u_from) / (u_to - u_from), 0.0, 1.0 );\n            outColor = texture( u_palette, vec2(t, 0.5) );\n        }\n    ";initGl(){const t=this.context;this.vertexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),this.vertexShader=t.createShader(t.VERTEX_SHADER),t.shaderSource(this.vertexShader,e.VERTEX_SHADER),t.compileShader(this.vertexShader),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),t.shaderSource(this.fragmentShader,e.FRAGMENT_SHADER),t.compileShader(this.fragmentShader),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),t.linkProgram(this.program),t.useProgram(this.program);const i=t.getAttribLocation(this.program,"a_position");t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0)}createTexture(e,t,i,r,s,o){const a=this.context.createTexture();return this.context.bindTexture(this.context.TEXTURE_2D,a),this.context.texImage2D(this.context.TEXTURE_2D,0,i,e,t,0,r,s,o),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),a}initPixelsBuffer(){return new Float32Array(this.file.pixels)}initPixelsTexture(){return this.createTexture(this.width,this.height,this.context.R32F,this.context.RED,this.context.FLOAT,this.pixelsBuffer)}writePixelsTexture(e){Float32Array,this.pixelsBuffer.set(e,0),this.context.bindTexture(this.context.TEXTURE_2D,this.pixelsTexture),this.context.texSubImage2D(this.context.TEXTURE_2D,0,0,0,this.width,this.height,this.context.RED,this.context.FLOAT,this.pixelsBuffer)}initPaletteBuffer(){return new Float32Array(1024)}initPaletteTexture(){return this.createTexture(256,1,this.context.RGBA32F,this.context.RGBA,this.context.FLOAT,this.paletteBuffer)}writePaletteTexture(e){e instanceof Float32Array?(this.paletteBuffer.set(e,0),this.context.bindTexture(this.context.TEXTURE_2D,this.paletteTexture),this.context.texSubImage2D(this.context.TEXTURE_2D,0,0,0,256,1,this.context.RGBA,this.context.FLOAT,this.paletteBuffer)):(this.context.bindTexture(this.context.TEXTURE_2D,this.paletteTexture),this.context.texSubImage2D(this.context.TEXTURE_2D,0,0,0,256,1,this.context.RGBA,this.context.UNSIGNED_BYTE,e))}writeRangeUniform(e,t){const i=this.context;i.useProgram(this.program);const r=i.getUniformLocation(this.program,"u_from"),s=i.getUniformLocation(this.program,"u_to");i.uniform1f(r,e),i.uniform1f(s,t)}async executeRender(){const e=this.context;e.useProgram(this.program),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer);const t=e.getUniformLocation(this.program,"u_pixels"),i=e.getUniformLocation(this.program,"u_palette");e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.pixelsTexture),e.uniform1i(t,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.paletteTexture),e.uniform1i(i,1),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_STRIP,0,4)}async destroy(){this.context.deleteProgram(this.program),this.context.deleteShader(this.vertexShader),this.context.deleteShader(this.fragmentShader),this.context.deleteTexture(this.pixelsTexture),this.context.deleteTexture(this.paletteTexture)}},xo=class{_current;get current(){return this._current}_onChange;get onChange(){return this._onChange||(this._onChange=new xs),this._onChange}get width(){return this.current.width}get height(){return this.current.height}constructor(e){this._current=e}set(e){this._current=e,this.onChange.call(this.current)}},So=class extends Ss{id;horizontalLimit;verticalLimit;group;get pool(){return this.group.registry.manager.pool}thermalUrl;_visibleUrl;get visibleUrl(){return this._visibleUrl}fileName;signature="unknown";version=-1;streamCount=-1;fileDataType=-1;unit=-1;meta;get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}_dom;get dom(){return this._dom}onMount=new xs;onUnmount=new xs;renderer;get hover(){return!!this.dom&&this.dom.hover}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}timeline;cursorValue;analysis;recording;_mounted=!1;get mounted(){return this._mounted}set mounted(e){this._mounted=e}_built=!1;get built(){return this._built}set built(e){this._built=e}_preferWebGl=!0;get preferWebGl(){return this._preferWebGl}switchToCPURenderer(){if(this.renderer instanceof bo)return;this.renderer?.destroy();const e=this.dom?.root;this.unmountFromDom(),this.mountToDom(e),this.renderer=new bo(this,this.dom.canvasLayer.canvas),this.renderer.init()}_pixels;get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}constructor(e,t,i,r,s){super(),this.group=e,this.id=this.formatId(r),this.meta=new xo(t),this.thermalUrl=r,this._visibleUrl=s,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}removeVisibleFile(){return this._visibleUrl=void 0,this}setPreferWebGl(e){return this._preferWebGl=e,this}rendererFactory(e){return!0===this._preferWebGl&&e.getContext("webgl2")?new wo(this,e):new bo(this,e)}mountToDom(e){void 0!==this._dom&&(this._dom.destroy(),this._dom=void 0),this._dom=new yo(this,e),this._dom.build(),this.renderer=this.rendererFactory(this._dom.canvasLayer.canvas),this.renderer.init(),this._dom.hydrate()}unmountFromDom(){this.renderer?.destroy(),this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await Promise.resolve(),await(this.renderer?.render())}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.destroySelfAndBelow()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),r=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[r]}getColorAtPoint(e,t){const i=this.getTemperatureAtPoint(e,t),r=this.group.registry.range.value?.from,s=this.group.registry.range.value?.to;if(void 0!==r&&void 0!==s){const e=(i-r)/(s-r),t=Math.round(255*e);return this.group.registry.palette.currentPalette.pixels[t]}}reset(){}},ko=class e{static FONT_SIZE_NORMAL="16px";static FONT_SIZE_SMALL="12px";static COLOR_BASE="black";static COLOR_GRAY="gray";static COLOR_LIGHT="lightgray";static WIDTH="1600px";static FONT_FAMILY="sans-serif";static GAP_BASE="10px";static GAP_SMALL="5px";static DEBUG=!1;wrapper;container;_exporting=!1;get exporting(){return this._exporting}onExportingStatusChange=new xs;setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(t,i,r=e.FONT_SIZE_NORMAL,s="normal",o=e.COLOR_BASE){const a=document.createElement(t);return a.innerHTML=i,a.style.fontSize=r,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=o,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(t,i){const r=document.createElement("div");return r.style.width=t.toFixed(0)+"px",r.style.fontSize=e.FONT_SIZE_NORMAL,r.style.fontFamily=e.FONT_FAMILY,r.style.color=e.COLOR_BASE,r.style.backgroundColor=i,r}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e+=".png"),e}async downloadPng(e){const t=this.getFinalParams(e);t.fileName=this.makeSureFileNameIsValid(t.fileName),!0!==this.exporting?(this.setExporting(!0),this.buildDom(t),this.onDownload(t)):console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`)}downloadImage(e,t){ws.toPng(t).then(t=>{const i=document.createElement("a");i.download=e,i.href=t,i.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(t,i,r,s,o,a,n,l,h){const c=t.clientWidth,d=c/100,p=document.createElement("div");p.style.width="100%",p.style.position="relative",p.style.paddingLeft="30px",p.style.paddingRight="30px",p.style.boxSizing="border-box";const u=document.createElement("div");u.style.width="100%",u.style.position="relative",u.style.backgroundColor=n,u.style.height="30px";const m=r-i,g=s-i,f=o-i,y=g/m*100,v=f/m*100,b=document.createElement("div");b.style.position="absolute",b.style.backgroundImage=a,b.style.height="100%",b.style.top="0px",b.style.left=y+"%",b.style.width=v-y+"%",u.appendChild(b),p.appendChild(u);const w=document.createElement("div");w.style.width="100%",w.style.height="40px",w.style.position="relative";const x=(t,r=!1,s,o)=>{const a=t/m*100,n=document.createElement("div");n.style.position="absolute",n.style.top="0px",n.style.left=`calc( ${a}% - 30px )`,n.style.width="60px",n.style.textAlign="center",n.style.lineHeight="0px";const l=document.createElement("div"),h=document.createElement("div"),c=document.createElement("div");l.innerHTML=(i+t).toFixed(2)+" °C",l.style.display="inline-block",l.style.fontSize=e.FONT_SIZE_SMALL,l.style.lineHeight="1em",l.style.padding="3px",l.style.position="relative",h.style.width="100%",h.style.height="7px",h.style.textAlign="center",h.style.position="relative",h.style.lineHeight="0px",c.style.content="",c.style.display="inline-block",r?(c.style.width="14px",c.style.height="14px",c.style.rotate="45deg",c.style.backgroundColor=o,l.style.backgroundColor=o,l.style.zIndex="99",l.style.color=s):(c.style.width="1px",c.style.height="7px",c.style.backgroundColor=s),h.appendChild(c),n.appendChild(h),n.appendChild(l),w.appendChild(n)};if(h){const e=document.createElement("div");e.style.position="absolute",e.style.border=`2px solid ${l}`,e.style.height="100%",e.style.boxSizing="border-box";const t=(h.from-i)/m*100,r=(h.to-i)/m*100-t;e.style.left=t+"%",e.style.width=r+"%",u.appendChild(e),x(h.from-i,!0,"white",n),x(h.to-i,!0,"white",n)}const S=m/d;let k=0;for(;k<=m;)x(k,!1,l,"transparent"),k+=S;return x(g,!0,"white",l),x(f,!0,"white",l),p.appendChild(w),p}},Co=class{static inputToDate=e=>{if("number"==typeof e){const t=new Date;return t.setTime(e),t}return e}},Eo=class e extends Co{static isoDate=t=>fs(t=e.inputToDate(t),{representation:"date"});static isoTime=t=>fs(t=e.inputToDate(t),{representation:"time"});static isoComplete=t=>fs(t=e.inputToDate(t));static humanTime=(t,i=!1)=>ms(t=e.inputToDate(t),i?"HH:mm:ss":"HH:mm");static humanDate=(t,i=!1)=>ms(t=e.inputToDate(t),i?"d. M.":"d. M. yyyy");static humanRangeDates(t,i){return t=e.inputToDate(t),i=e.inputToDate(i),t.getUTCDate()===i.getUTCDate()?e.humanDate(t):[e.humanDate(t),e.humanDate(i)].join(" - ")}static human(t){return`${e.humanDate(t)} ${e.humanTime(t,!0)} `}},To=class e extends ko{static DEFAULT_PARAMS={fileName:"sth",width:1200,fontSize:20,textColor:"black",backgroundColor:"white",showAnalysis:!0,showFileName:!1,showFileDate:!1,license:void 0,showThermalScale:!0};localInstance;get canvas(){return this.file.canvasLayer.canvas}constructor(e){super(),this.file=e}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){this.localInstance?.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...e.DEFAULT_PARAMS,...t,fileName:i}}async onDownload(t){const i=Math.random().toString(),r=this.file.group.registry.manager,s=r.addOrGetRegistry(i),o=s.groups.addOrGetGroup(i),a=`${t.fontSize}px`;r.palette.setPalette(this.file.group.registry.manager.palette.value),s.range.imposeRange(this.file.group.registry.range.value),this.localInstance=await this.file.reader.createInstance(o),this.localInstance.removeVisibleFile();const n=this.file.timeline.currentStep.relative;if(0!==n&&this.localInstance.timeline.setRelativeTime(n),this.container){this.container.style.lineHeight=1.5*t.fontSize+"px";const i=this.file.group.registry.minmax.value.min,r=this.file.group.registry.minmax.value.max;if(t.showFileName||t.showFileDate){const e=document.createElement("div");if(e.style.paddingBottom=t.fontSize/3+"px",t.showFileDate){const i=Eo.human(this.file.timestamp);e.appendChild(this.createElementWithText("span",i,a,"bold",t.textColor))}if(t.showFileName){const i=(t.showFileDate?" - ":"")+this.file.fileName,r=t.showFileDate?"normal":"bold";e.appendChild(this.createElementWithText("span",i,a,r,t.textColor))}this.container.appendChild(e)}if(!0===t.showThermalScale){const e=i!==this.file.meta.current.min||r!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,i,r,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",e))}if(this.localInstance.mountToDom(this.container),this.localInstance.dom&&this.localInstance.dom.visibleLayer&&(this.localInstance.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const i=document.createElement("table");i.style.width="100%",i.style.borderCollapse="collapse",i.style.marginTop=t.fontSize/3+"px";const r=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(i=>{const s=this.createElementWithText("th",i,a,void 0,e.COLOR_GRAY);s.style.textAlign="left",s.style.borderBottom=`1px solid ${e.COLOR_LIGHT}`,s.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,r.appendChild(s)}),i.appendChild(r),this.container.appendChild(i),this.file.slots.forEveryExistingSlot((r,s)=>{const o=this.localInstance?.slots.createAnalysisFromSerialized(r.serialized,s);if(o){const s=document.createElement("tr"),n=this.createElementWithText("td",r.analysis.name,a,void 0,r.analysis.initialColor);n.style.borderBottom=`1px solid ${e.COLOR_LIGHT}`,n.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,s.appendChild(n);const l=(i,r)=>{const o=this.createElementWithText("td",r?r.toFixed(3)+" °C":"",a,void 0);o.style.borderBottom=`1px solid ${e.COLOR_LIGHT}`,o.style.paddingTop=t.fontSize/3+"px",o.style.paddingBottom=t.fontSize/3+"px",s.appendChild(o)};r.analysis instanceof Hs?(l(r.analysis.initialColor,o.avg),l(r.analysis.initialColor,o.min),l(r.analysis.initialColor,o.max)):r.analysis instanceof Bs&&(l(r.analysis.initialColor,o.avg),l(r.analysis.initialColor),l(r.analysis.initialColor)),i.appendChild(s)}})}if(t.author||t.license){const i=document.createElement("div");i.style.lineHeight="1.5em",i.style.color=e.COLOR_GRAY,i.style.paddingTop=t.fontSize/3+"px",t.author&&i.appendChild(this.createElementWithText("span",t.author,a)),t.author&&t.license&&i.appendChild(this.createElementWithText("span"," - ",a)),t.license&&i.appendChild(this.createElementWithText("span",t.license,a)),this.container.appendChild(i)}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},0)}}},_o=class e extends So{slots;_export;get export(){return this._export||(this._export=new To(this)),this._export}constructor(e,t,i,r){super(e,i,r.pixels,t.thermalUrl,t.visibleUrl),this.group=e,this.reader=t,this.firstFrame=r,this.setPixels(r.pixels)}hydrateListener(e){if(!e.listenerLayer||!e.cursorLayer)return;const t=e.listenerLayer.getLayerRoot();t&&(e.parent.analysis.activateListeners(t),e.listenerLayer.getLayerRoot().onmousemove=t=>{e.cursorLayer&&e.cursorLayer.setShow(!0),e.setHover(!0);const i=e.parent.meta.width/e.root.clientWidth,r=Math.round(t.offsetX*i),s=Math.round(t.offsetY*i);e.parent.group.cursorPosition.recieveCursorPosition({x:r,y:s})},e.listenerLayer.getLayerRoot().onmouseleave=()=>{e.cursorLayer&&e.cursorLayer.setShow(!1),e.setHover(!1),e.parent.group.cursorPosition.recieveCursorPosition(void 0)},e.listenerLayer.getLayerRoot().onmouseenter=()=>{this.group.analysisSync.setCurrentPointer(this)})}dehydrateListener(e){e.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new oo(this,void 0),this.timeline=new lo(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new ho(this,!1),this.analysis=new eo(this,[]),this.analysisData=new io(this),this.slots=new so(this,new Map),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(){if(this.dom&&this.dom.built){if(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value){const e=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);this.dom.cursorLayer?.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,e)}this.analysisData.updateAllAnalysesValues()}}getPixelsForHistogram(){return[]}static fromService(t,i,r,s){return new e(t,i,r,s).buildServices()}recieveCursorPosition(e){if(void 0!==e){const t=Math.min(this.meta.width,Math.max(0,e.x)),i=Math.min(this.meta.height,Math.max(0,e.y)),r=this.group.tool.value.getLabelValue(t,i,this);this.dom&&(this.dom.cursorLayer?.setLabel(t,i,r),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&(this.dom.cursorLayer?.resetCursor(),this.dom.cursorLayer?.setShow(!1));this.cursorValue.recalculateFromCursor(e)}filters=new ks(this);getInstances(){return[this]}getAllApplicableFilters(){return[...this.group.registry.manager.filters.getActiveFilters(),...this.group.registry.filters.getActiveFilters(),...this.group.filters.getActiveFilters(),...this.filters.getActiveFilters()]}async applyAllAvailableFilters(){const e=await this.reader.baseInfo(),t=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const e=this.root;this.unmountFromDom(),this.mountToDom(e)}this.meta.set(e),this.setPixels(t.pixels)}},Ao=class extends Ds{id=Math.random();baseInfoCache;fileName;get pool(){return this.service.pool}originalBuffer;_buffer;get buffer(){return this._buffer}set buffer(e){this._buffer=e}constructor(e,t,i,r,s,o){super(r,s),this.service=e,this.parser=i,this._buffer=t,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),!0===o&&(this.originalBuffer=this.copyBuffer(this.buffer))}isSuccess(){return!0}copyBuffer(e){const t=new ArrayBuffer(e.byteLength),i=new Uint8Array(t);return i.set(new Uint8Array(e)),i.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const t=this.getFrameSubset(e);return await this.parser.frameData(t.array,t.dataType)}async pointAnalysisData(e,t){return await this.parser.pointAnalysisData(this.buffer,e,t)}async rectAnalysisData(e,t,i,r){return await this.parser.rectAnalysisData(this.buffer,e,t,i,r)}async ellipsisAnalysisData(e,t,i,r){return await this.parser.ellipsisAnalysisData(this.buffer,e,t,i,r)}async applyFilters(e){if(void 0===this.originalBuffer)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const t of e)this.buffer=await t.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(e){const t=this.cloneForInstance(),i=await t.baseInfo(),r=await t.frameData(0),s=_o.fromService(e,t,i,r);return e.files.addFile(s),s}},Po=class e{constructor(e,t,i){this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(t,i,r){return new e(t,i,r)}response;async load(){return void 0===this.response&&(this.response=this.processResponse(await fetch(this.thermalUrl))),this.response}async processResponse(e){const t=e;if(200!==t.status)return this.pocessTheService(new Os(this.thermalUrl,Cs.FILE_NOT_FOUND,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const e=$s(i,this.thermalUrl);return this.pocessTheService(new Ao(this.service,i,e,this.thermalUrl,this.visibleUrl))}catch(r){if(r instanceof Es)return this.pocessTheService(Os.fromError(r));throw r}}pocessTheService(e){return e}},$o=class{get pool(){return this.manager.pool}constructor(e){this.manager=e}static isolatedInstance(e,t="isolated_registry"){const i=new Ta(e).addOrGetRegistry(t);return{service:i.service,registry:i}}requestsByUrl=new Map;get requestsCount(){return this.requestsByUrl.size}fileIsPending(e){return this.requestsByUrl.has(e)}cacheByUrl=new Map;get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(e){return this.cacheByUrl.has(e)}async loadUploadedFile(e){try{const t=await e.arrayBuffer(),i=$s(t,e.name);return new Ao(this,t,i,e.name)}catch(t){return new Os(e.name,Cs.PARSING_ERROR,t.message)}}handleDropzone(e,t=!0){return Ls.listenOnElement(this,e,t)}async loadFile(e,t){if(this.cacheByUrl.has(e))return this.cacheByUrl.get(e);if(this.requestsByUrl.has(e))return this.requestsByUrl.get(e).load();{const i=Po.fromUrl(this,e,t);this.requestsByUrl.set(e,i);const r=await i.load();return this.requestsByUrl.delete(e),this.cacheByUrl.set(e,r),r}}async loadFiles(e){return Promise.all(e.map(async e=>{const t=await this.loadFile(e.lrc,e.png);return e.callback&&await e.callback(t),t}))}},Ro=class extends Ms{validate(e){return e}afterSetEffect(){}setGraphSmooth(e){this.value=e}};const Lo=e=>{const t=new Array(256),i=[...e].sort((e,t)=>e.percent-t.percent);for(let r=0;r<256;r++){const e=r/255*100;let s=i[0],o=i[i.length-1];for(let t=0;t<i.length-1;t++)if(e>=i[t].percent&&e<=i[t+1].percent){s=i[t],o=i[t+1];break}const a=o.percent-s.percent,n=0===a?0:(e-s.percent)/a;t[r]=`rgb(${Math.round(s.color[0]+n*(o.color[0]-s.color[0]))},${Math.round(s.color[1]+n*(o.color[1]-s.color[1]))},${Math.round(s.color[2]+n*(o.color[2]-s.color[2]))})`}return t},Do=e=>`linear-gradient(90deg, ${[...e].sort((e,t)=>e.percent-t.percent).map(e=>`rgb(${e.color.join(",")}) ${e.percent}%`).join(", ")})`,Oo=e=>{const t=[...e].sort((e,t)=>e.percent-t.percent),i=new Float32Array(1024);for(let r=0;r<256;r++){const e=r/255*100;let s=t[0],o=t[t.length-1];for(let i=0;i<t.length-1;i++)if(e>=t[i].percent&&e<=t[i+1].percent){s=t[i],o=t[i+1];break}const a=(e-s.percent)/(o.percent-s.percent||1),n=s.color[0]+(o.color[0]-s.color[0])*a,l=s.color[1]+(o.color[1]-s.color[1])*a,h=s.color[2]+(o.color[2]-s.color[2])*a;i[4*r]=n/255,i[4*r+1]=l/255,i[4*r+2]=h/255,i[4*r+3]=1}return i},Mo=[{percent:0,color:[0,0,0]},{percent:30,color:[10,12,77]},{percent:49,color:[86,20,101]},{percent:64,color:[255,0,0]},{percent:84,color:[249,255,0]},{percent:100,color:[255,255,255]}],Io=[{percent:0,color:[31,0,157]},{percent:8,color:[0,5,255]},{percent:36,color:[0,255,239]},{percent:66,color:[255,252,0]},{percent:94,color:[255,2,0]},{percent:100,color:[145,0,0]}],Uo=[{percent:0,color:[0,0,0]},{percent:100,color:[255,255,255]}],zo=[{percent:0,color:[255,255,255]},{percent:100,color:[0,0,0]}],Fo=[{percent:0,color:[0,0,0]},{percent:12,color:[30,78,149]},{percent:32,color:[33,128,127]},{percent:41,color:[102,48,108]},{percent:64,color:[233,37,37]},{percent:90,color:[255,255,0]},{percent:100,color:[255,255,255]}],Bo=[{percent:0,color:[17,13,133]},{percent:15,color:[23,50,248]},{percent:30,color:[75,245,255]},{percent:55,color:[100,91,86]},{percent:70,color:[239,86,28]},{percent:87,color:[255,255,0]},{percent:100,color:[255,255,255]}],No=[{percent:0,color:[12,11,65]},{percent:23,color:[36,108,212]},{percent:42,color:[100,255,30]},{percent:55,color:[255,255,0]},{percent:80,color:[255,0,69]},{percent:100,color:[255,255,255]}],jo=[{percent:0,color:[0,0,0]},{percent:13,color:[212,0,217]},{percent:25,color:[21,28,151]},{percent:37,color:[55,230,255]},{percent:50,color:[17,75,22]},{percent:62,color:[255,255,0]},{percent:80,color:[119,0,11]},{percent:90,color:[255,40,32]},{percent:100,color:[255,255,255]}],Vo=Lo(Mo),Ho=Lo(Io),Wo=Lo(Uo),Go=Lo(zo),qo=Lo(Fo),Yo=Lo(Bo),Zo=Lo(No),Xo=Lo(jo),Ko={iron:{name:"IRON",gradient:Do(Mo),pixels:Vo,texturePixels:Oo(Mo),slug:"iron"},jet:{name:"JET",gradient:Do(Io),pixels:Ho,texturePixels:Oo(Io),slug:"jet"},white_hot:{name:"White Hot",gradient:Do(Uo),pixels:Wo,texturePixels:Oo(Uo),slug:"white_hot"},black_hot:{name:"Black Hot",gradient:Do(zo),pixels:Go,texturePixels:Oo(zo),slug:"black_hot"},lava:{name:"Lava",gradient:Do(Fo),pixels:qo,texturePixels:Oo(Fo),slug:"lava"},arctic:{name:"Arctic",gradient:Do(Bo),pixels:Yo,texturePixels:Oo(Bo),slug:"arctic"},rainbow:{name:"Rainbow",gradient:Do(No),pixels:Zo,texturePixels:Oo(No),slug:"rainbow"},rainbow_hc:{name:"Rainbow HC",gradient:Do(jo),pixels:Xo,texturePixels:Oo(jo),slug:"rainbow_hc"}};var Qo=class extends Ms{get availablePalettes(){return Ko}get currentPalette(){return this.availablePalettes[this.value]}validate(e){return e}afterSetEffect(){this.parent.forEveryRegistry(e=>{e.forEveryInstance(e=>e.draw())})}setPalette(e){this.value=e}sanitizeInputKey(e){if(null==e)return"jet";const t=this.availablePalettes[e];return t?t.slug:"jet"}},Jo=class extends Ms{validate(e){return e}afterSetEffect(e){this.parent.forEveryRegistry(t=>t.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=!0===e?"auto":"pixelated"}))}setSmooth(e){this.value=e}},ea=class e{_loading=!1;get loading(){return this._loading}onResolve=new xs;timeout=void 0;queue=[];get size(){return this.queue.length}constructor(e,t){this.loader=e,this.id=t}static init(t,i){return new e(t,i)}static initWithRequest(t,i,r=void 0,s,o){const a=new e(t);return a.request(i,r,s,o),a}request(e,t,i,r){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:r}),void 0!==this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const e=await Promise.all(this.queue.map(async e=>({result:await this.loader.registry.service.loadFile(e.thermalUrl,e.visibleUrl),callback:e.callback,group:e.group}))),t=await Promise.all(e.map(async e=>({result:e.result instanceof Ao?await e.result.createInstance(e.group):await e.result,callback:e.callback})));this.loader.registry.postLoadedProcessing();const i=await Promise.all(t.map(async e=>(await e.callback(e.result),e.result)));this.loader.onBatchComplete.call(i),this.loader.batchFinished(this),this.onResolve.call(i)},0)}close(){this._loading=!0}},ta=class{onBatchStart=new xs;onBatchComplete=new xs;set=new Set;get numberOfBatches(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(e=>!1===e.loading)}get hasLoadingBatches(){return Array.from(this.set).some(e=>!0===e.loading)}get numLoadingBatches(){return Array.from(this.set).filter(e=>!0===e.loading).length}constructor(e){this.registry=e}getBatchById(e){const t=Array.from(this.set).find(t=>t.id===e);if(t)return t;const i=ea.init(this,e);return this.set.add(i),i}request(e,t,i,r,s){let o=s?this.getBatchById(s):this.currentOpenBatch;return void 0===o&&(o=ea.init(this),this.set.add(o),this.registry.loading.markAsLoading()),o.request(e,t,i,r),o}closeBatch(){void 0!==this.currentOpenBatch&&this.currentOpenBatch.close()}batchFinished(e){this.set.delete(e),0===this.numberOfBatches&&this.registry.loading.markAsLoaded()}},ia=class extends Ms{validate(e){return Math.min(Math.max(0,e),1)}afterSetEffect(e){this.parent.forEveryInstance(t=>{void 0!==t.dom&&void 0!==t.dom.canvasLayer&&void 0!==t.dom.visibleLayer&&(t.dom.canvasLayer.opacity=e)})}imposeOpacity(e){return this.value=e,this.value}},ra=class extends Ms{get currentRange(){return this.value}validate(e){if(void 0===e)return;const t=this.parent.minmax.value;if(void 0===t)return e;const i={...e};return e.from<t.min&&(i.from=t.min),e.to>t.max&&(i.to=t.max),i}afterSetEffect(e){e&&this.parent.forEveryInstance(e=>e.draw())}imposeRange(e){return void 0===e&&void 0===this.value||void 0===e&&void 0!==this.value&&(this.value=e),void 0!==e&&void 0===this.value?this.value=e:void 0!==e&&void 0!==this.value&&(this.value.from===e.from&&this.value.to===e.to||(this.value=e)),this.value}applyMinmax(){if(this.parent.minmax.value){const e={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(e)}}applyAuto(){if(this.parent.histogram.value){const e=10,t=this.parent.histogram.value.filter(t=>t.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},sa=class{constructor(e){this.drive=e}formatAnalysisDisplayName(e,t){const i=`${e.name} (${e.getType()}, ${e.initialColor}})`;return e instanceof Hs&&t?i+" "+t.toUpperCase():i}formatAnalysisKey(e,t){const i=e.key;return e instanceof Hs&&t?i+"_"+t:i}formatFrameSlotValue(e,t){if(e.analysis instanceof Hs&&t){let i=e.analysis.avg;return"min"===t&&(i=e.analysis.min),"max"===t&&(i=e.analysis.max),{key:this.formatAnalysisKey(e.analysis,t),value:i.toString()}}return{key:this.formatAnalysisKey(e.analysis),value:e.analysis.avg.toString()}}getData(){const e=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Hs?(e.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),e.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),e.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):e.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const t=[];return this.drive.parent.files.value.sort((e,t)=>e.timestamp-t.timestamp).forEach(e=>{const i={file:e.fileName,timestamp:Eo.human(e.timeline.currentStep.absolute),frame:e.timeline.currentStep.index};e.slots.forEveryExistingSlot(e=>{if(e.analysis instanceof Hs){const t=this.formatFrameSlotValue(e,"min"),r=this.formatFrameSlotValue(e,"max"),s=this.formatFrameSlotValue(e,"avg");i[t.key]=t.value,i[r.key]=r.value,i[s.key]=s.value}else{const t=this.formatFrameSlotValue(e);i[t.key]=t.value}}),t.push(i)}),{header:e,data:t}}downloadAsCsv(){const e=this.drive.parent,t=e.name??e.id??e.hash,{header:i,data:r}=this.getData(),s=ir({fieldSeparator:";",filename:`group_${t}`,columnHeaders:i}),o=gr(s)(r);fr(s)(o)}},oa=class e extends ko{static DEFAULT_PROPS={fileName:"export.png",columns:3,width:1600,showAnalysis:!0,showFileDate:!0,showFileName:!1,showThermalScale:!0,license:void 0,textColor:"black",fontSize:12,showGroupName:!0,backgroundColor:"white"};get group(){return this.drive.parent}localGroup;header;list;constructor(e){super(),this.drive=e}buildHeader(){return document.createElement("div")}buildList(){const e=document.createElement("div");return e.style.boxSizing="border-box",e.style.width="100%",e.style.display="flex",e.style.flexWrap="wrap",e}buildInstance(t,i,r,s,o,a){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=e.GAP_SMALL,n.style.boxSizing="border-box";const l=document.createElement("div");if(n.appendChild(l),s||o){const i=document.createElement("div");if(s){const e=this.createElementWithText("div",`${Eo.human(t.timeline.currentStep.absolute)}`,a,"bold");i.appendChild(e)}if(o){const r=this.createElementWithText("div",s?" - "+t.fileName:t.fileName,e.FONT_SIZE_SMALL,s?"normal":"bold");i.appendChild(r)}l.appendChild(i)}if(this.list){const i=this.group.files.value.find(e=>e.fileName===t.fileName);if(i&&t.timeline.setRelativeTime(i?.timeline.currentMs),this.list.appendChild(n),t.removeVisibleFile(),t.setPreferWebGl(!1),t.mountToDom(l),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),r){const r=i;if(r&&r.analysis.value.length>0){const i=document.createElement("table");i.style.width="100%",i.style.borderCollapse="collapse";const s=document.createElement("tr");["","AVG","MIN","MAX"].forEach(t=>{const i=this.createElementWithText("th",t,a,void 0,e.COLOR_GRAY);i.style.padding=e.GAP_SMALL+"px",i.style.textAlign="left",s.appendChild(i)}),i.appendChild(s),l.appendChild(i),r.slots.forEveryExistingSlot((r,s)=>{const o=t.slots.createAnalysisFromSerialized(r.serialized,s);if(o){const t=document.createElement("tr"),s=this.createElementWithText("td",r.analysis.name,a,void 0,r.analysis.initialColor);s.style.borderTop=`1px solid ${e.COLOR_LIGHT}`,s.style.padding=`${e.GAP_SMALL}px 0px ${e.GAP_SMALL} 0px`,t.appendChild(s);const n=(i,r)=>{const s=this.createElementWithText("td",r?r.toFixed(3)+" °C":"",a,void 0);s.style.borderTop=`1px solid ${e.COLOR_LIGHT}`,s.style.paddingTop=`${e.GAP_SMALL}px`,s.style.paddingBottom=`${e.GAP_SMALL}px`,t.appendChild(s)};r.analysis instanceof Hs?(n(r.analysis.initialColor,o.avg),n(r.analysis.initialColor,o.min),n(r.analysis.initialColor,o.max)):r.analysis instanceof Bs&&(n(r.analysis.initialColor,o.avg),n(r.analysis.initialColor),n(r.analysis.initialColor)),i.appendChild(t)}})}}}}onBuildDom(){this.header=this.buildHeader(),this.list=this.buildList(),this.container?.appendChild(this.header),this.container?.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(e=>e.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){const i=Math.random().toFixed(),r=this.group.registry.manager,s=r.addOrGetRegistry(i),o=s.groups.addOrGetGroup(this.group.id);if(t.showGroupName&&this.header){const i=t.label?t.label:this.group.label;this.header.appendChild(this.createElementWithText("div",i,t.fontSize.toString()+"px","bold")),this.header.style.paddingBottom=e.GAP_BASE}t.showThermalScale&&this.list?.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=o,r.palette.setPalette(this.group.registry.manager.palette.value),s.range.imposeRange(this.group.registry.range.value);let a;this.group.files.sortedFiles.map(e=>e.thermalUrl).forEach(e=>{a=s.batch.request(e,void 0,o,async()=>{})}),a.onResolve.set("temporary export listener",e=>{const i=100/t.columns;e.forEach(e=>{e instanceof _o&&this.buildInstance(e,i,t.showAnalysis,t.showFileDate,t.showFileName,t.fontSize.toString()+"px")}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t?.fileName?t.fileName:`group__${this.group.label}__export`;return void 0===t?{...e.DEFAULT_PROPS,fileName:i}:{...e.DEFAULT_PROPS,...t,fileName:i}}},aa=class e extends Ms{static LISTENER_KEY="__analysis__sync";onSlotSync=new xs;_currentPointer;get currentPointer(){return this._currentPointer}_csv;get csv(){return this._csv||(this._csv=new sa(this)),this._csv}_png;get png(){return this._png||(this._png=new oa(this)),this._png}validate(e){return e}afterSetEffect(){}turnOn(e){this.value=!0,this.setCurrentPointer(e)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(e){void 0!==this._currentPointer&&this._currentPointer.slots.forEveryExistingSlot(e)}setCurrentPointer(e){void 0===e&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),e!==this._currentPointer&&(void 0!==this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=e,void 0!==this._currentPointer&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(e,t){const i=e.slots.getSlot(t);return 1===t?{slot:i,serialise:e.slots.onSlot1Serialize,assign:e.slots.onSlot1Assignement}:2===t?{slot:i,serialise:e.slots.onSlot2Serialize,assign:e.slots.onSlot2Assignement}:3===t?{slot:i,serialise:e.slots.onSlot3Serialize,assign:e.slots.onSlot3Assignement}:4===t?{slot:i,serialise:e.slots.onSlot4Serialize,assign:e.slots.onSlot4Assignement}:5===t?{slot:i,serialise:e.slots.onSlot5Serialize,assign:e.slots.onSlot5Assignement}:6===t?{slot:i,serialise:e.slots.onSlot6Serialize,assign:e.slots.onSlot6Assignement}:7===t?{slot:i,serialise:e.slots.onSlot7Serialize,assign:e.slots.onSlot7Assignement}:void 0}startSyncingSlot(t,i){const{serialise:r}=this.getSlotListeners(t,i);r.set(e.LISTENER_KEY,e=>{this.forEveryOtherSlot(t,i,(t,r)=>{!1!==r.group.analysisSync.value&&(this.onSlotSync.call(e,i),void 0===t&&e?r.slots.createAnalysisFromSerialized(e,i)?.setSelected():void 0!==t&&e?(t.recieveSerialized(e),this.onSlotSync.call(t?t.serialized:void 0,i)):void 0!==t&&void 0===e&&t.analysis.file.slots.removeSlotAndAnalysis(i))})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:r,serialise:s}=this.getSlotListeners(t,i);r.delete(e.LISTENER_KEY),s.delete(e.LISTENER_KEY)})}deleteSlot(e,t){this.forEveryOtherSlot(e,t,e=>{e?.analysis.file.slots.removeSlotAndAnalysis(t)})}setSlotSelected(e,t){this.forEveryOtherSlot(e,t,e=>{e?.analysis.setSelected(!1)})}setSlotDeselected(e,t){this.forEveryOtherSlot(e,t,e=>{e?.analysis.setDeselected()})}forEveryOtherSlot(e,t,i){this.parent.files.forEveryInstance(r=>{r!==e&&i(r.slots.getSlot(t),r)})}recieveSlotSerialized(e,t){this.parent.files.forEveryInstance(i=>{if(i!==this.currentPointer&&!1!==i.group.analysisSync.value)if(e){const r=i.slots.getSlot(t);r?r.recieveSerialized(e):i.slots.createAnalysisFromSerialized(e,t)}else i.slots.removeSlotAndAnalysis(t)})}copyOneSlotToAllInstances(e,t){this.setCurrentPointer(e);const i=e.slots.getSlot(t),r=i?.serialized??i?.analysis.toSerialized();this.parent.files.forEveryInstance(i=>{i!==e&&(i.slots.hasSlot(t)&&i.slots.removeSlotAndAnalysis(t),r&&i.slots.createAnalysisFromSerialized(r,t)?.setSelected())})}copyAllSlotsToAllInstances(e){[1,2,3,4,5,6,7].forEach(t=>{this.copyOneSlotToAllInstances(e,t)})}},na=class extends Ms{_hover=void 0!==this.value;get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=void 0!==this.value,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},la=class extends Ms{_map=new Map;get map(){return this._map}validate(e){return e.sort((e,t)=>e.timestamp-t.timestamp)}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(e=>this._map.set(e.thermalUrl,e))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof _o?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(e=>e.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){const e=[];this.forEveryInstance(t=>{const i=new Blob([t.reader.buffer],{type:"application/octet-stream"}),r=new File([i],t.fileName,{type:"application/octet-stream"});e.push(r)}),qi(e,!0).then(e=>{const t=document.createElement("a");t.download=`${this.parent.name||this.parent.id||"thermal_group"}_files.zip`,t.href=URL.createObjectURL(e),document.body.appendChild(t),t.click(),document.body.removeChild(t),t.remove()})}},ha=class extends Ms{get distanceInCelsius(){if(void 0!==this.value)return Math.abs(this.value.min-this.value.max)}},ca=class extends ha{validate(e){return e}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const e=this.parent.files.value;if(0!==e.length)return e.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},da=class extends Ms{_hasAnyPlayback=!1;get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}onHasAnyCallback=new xs;recalculateHasAnyPlayback(e){let t=!1;e.forEach(e=>{e.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}_playing=!1;get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}onPlayingStatusChange=new xs;loopStep=0;loopTimer;_loopInterval=20;get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}onLoopIntervalChanged=new xs;_duration=0;get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}onDurationChanged=new xs;recalculateDuration(e){let t=0;e.forEach(e=>{e.timeline.duration>t&&(t=e.timeline.duration)}),this.duration=t}UUID=this.parent.id+"__listener";constructor(e,t){super(e,t),this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,e=>{const t=e.filter(e=>e instanceof _o);this.recalculateDuration(t),this.recalculateHasAnyPlayback(t),this.value=this.value})}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(void 0===this.duration||!1===this.playing)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){!1===this.playing&&(this.playing=!0,this.createTimerStep(!0))}stop(){!0===this.playing&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){0!==this.value&&(this.value=0,this.loopStep=0)}},pa=class e extends Ms{static LISTENER_ID="AnalysisGroupGraph";constructor(e){super(e,void 0)}timeout;calculateData(){const e=[],t=[],i=[],r=this.parent.files.value.sort((e,t)=>e.timestamp-t.timestamp),s=r[0].analysisData.value.values[0];t.push(...s),e.push(...r[0].analysisData.value.colors),this.parent.files.forEveryInstance(e=>{const t=[new Date(e.timestamp)];e.analysis.value.forEach(async e=>{!0===e.graph.state.MIN&&e.min&&t.push(e.min),!0===e.graph.state.MAX&&e.max&&t.push(e.max),!0===e.graph.state.AVG&&e.avg&&t.push(e.avg)}),t.length>1&&i.push(t)}),e.length>0?this.value={colors:e,data:[t,...i]}:this.value=void 0}turnOn(){this.parent.files.forEveryInstance(t=>{t.analysisData.addListener(e.LISTENER_ID,()=>{void 0!==this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.calculateData()},0)})})}turnOff(){this.parent.files.forEveryInstance(t=>{t.analysisData.removeListener(e.LISTENER_ID)})}validate(e){return e}afterSetEffect(){}},ua=class extends Ss{hash=Math.random();get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}constructor(e,t,i,r){super(),this.registry=e,this.id=t,this.name=i,this.description=r}minmax=new ca(this,void 0);get tool(){return this.registry.manager.tool}files=new la(this,[]);cursorPosition=new na(this,void 0);analysisSync=new aa(this,!1);analysisGraph=new pa(this);_playback;get playback(){return this._playback||(this._playback=new da(this,0)),this._playback}forEveryInstance=e=>{this.files.value.forEach(t=>e(t))};destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}filters=new ks(this);getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},ma=class extends Ms{_map=new Map;get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(e=>this._map.set(e.id,e))}addExistingGroup(e){this.value.map(e=>e.hash).includes(e.hash)||(this.value=[...this.value,e])}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const r=new ua(this.parent,e,t,i);return this._map.set(e,r),this.value.push(r),this.value=[...this.value],r}removeGroup(e){this._map.has(e)&&(this._map.get(e)?.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},ga=class extends Ms{_resolution=150;get resolution(){return this._resolution}buffer=new Map;bufferPixelsCount=0;_bufferResolution=1e3;set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}_loading=!1;get loading(){return this._loading}set loading(e){this._loading=e}onCalculationStart=new xs;onCalculationEnd=new xs;setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateHistogramBufferInWorker(){if(void 0!==this.parent.minmax.value&&0!==this.parent.groups.value.length&&void 0!==this.parent.minmax.distanceInCelsius){const e=this.parent.groups.value.map(e=>e.files.value.map(e=>e.getPixelsForHistogram()));this.parent.pool.exec((e,t,i,r,s)=>{let o=e.reduce((e,t)=>[...e,...t.reduce((e,t)=>[...e,...t],[])],[]).sort((e,t)=>e-t);const a=r/s;let n=t+a;const l=new Map;let h=0;for(;!1!==n;){const e=o.findIndex(e=>e>n),t=o.slice(0,e).length;l.set(n-a/2,t),h+=t,o=o.slice(e);const r=n+a;n=r<i&&r}return{result:l,resultCount:h}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(e=>{this.buffer=e.result,this.bufferPixelsCount=e.resultCount,this.recalculateHistogram()})}}async recalculateHistogram(){this.onCalculationStart.call(),this.loading=!0;const e=this.parent.groups.value.map(e=>e.files.value).reduce((e,t)=>e=e.concat(t),[]).map(e=>e.reader.buffer);try{this.value=await this.parent.pool.exec(_s.registryHistogram,[e]),this.loading=!1,this.onCalculationEnd.call(!0)}catch(t){this.loading=!1,this.onCalculationEnd.call(!1),console.error("Error calculating histogram",t)}}},fa=class extends Ms{validate(e){return e}afterSetEffect(){}markAsLoading(){!1===this.value&&(this.value=!0)}markAsLoaded(){!0===this.value&&(this.value=!1)}},ya=class extends ha{validate(e){return e}afterSetEffect(){}recalculateFromGroups(){const e=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(e),this.value}_getMinmaxFromAllGroups(e){if(0!==e.length)return e.reduce((e,t)=>void 0===t.minmax.value?e:{min:t.minmax.value.min<e.min?t.minmax.value.min:e.min,max:t.minmax.value.max>e.max?t.minmax.value.max:e.max},{min:1/0,max:-1/0})}},va=class extends Ss{hash=Math.random();constructor(e,t,i){super(),this.id=e,this.manager=t,this.palette=this.manager.palette,i&&void 0!==i.histogramResolution&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}groups=new ma(this,[]);forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([e,t])=>({group:this.groups.addOrGetGroup(e),groupFiles:await Promise.all(t.map(e=>this.service.loadFile(e.thermalUrl,e.visibleUrl)))}))),i=await Promise.all(t.map(async({group:e,groupFiles:t})=>await Promise.all(t.map(async t=>t instanceof Ao&&await t.createInstance(e)))));return this.postLoadedProcessing(),i}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),r=await this.service.loadFile(e.thermalUrl,e.visibleUrl),s=r instanceof Ao?await r.createInstance(i):r;return this.loading.markAsLoaded(),this.postLoadedProcessing(),s}_batch;get batch(){return this._batch||(this._batch=new ta(this)),this._batch}registerRequest(e,t=void 0,i,r){this.batch.request(e,t,i,r)}onProcessingStart=new xs;onProcessingEnd=new xs;async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(void 0===this.range.value)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);e===this.range.value.from&&t===this.range.value.to||this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}opacity=new ia(this,1);minmax=new ya(this,void 0);loading=new fa(this,!1);range=new ra(this,void 0);histogram=new ga(this,[]);palette;filters=new ks(this);getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},ba=class{active=!1;constructor(e){this.manager=e}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},wa=class extends ba{},xa=class extends ba{key="inspect";name="inspecttemperatures";description="usemousetoinspecttemperaturevalues";icon='<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>\n</svg>';onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}getLabelValue=(e,t,i)=>{if(void 0===i)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch(r){return console.error("Error getting tool label at point",r),""}}};const Sa=[xa,class extends wa{key="add-point";name="addpointanalysis";description="clickandaddpoint";icon='<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>\n</svg>';onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(e=>{e.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.setReady(),e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}getLabelValue=(e,t,i)=>`X:${e}<br />Y:${t}<br />${i.group.tool.tools.inspect.getLabelValue(e,t,i)}`},class extends wa{key="add-rect";name="addrectangleanalysis";description="clickandaddrectangle";icon='<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>\n</svg>';onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(e=>{e.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.setReady(),e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();void 0!==t&&e.file.slots.assignAnalysisToSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}getLabelValue=(e,t,i)=>`X:${e}<br />Y:${t}<br />${i.group.tool.tools.inspect.getLabelValue(e,t,i)}`},class extends wa{key="add-ellipsis";name="addellipsisanalysis";description="clickandaddellipsis";icon='<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>\n</svg>';onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(e=>{e.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.setReady(),e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=so.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();void 0!==t&&e.file.slots.assignAnalysisToSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}getLabelValue=(e,t,i)=>`X:${e}<br />Y:${t}<br />${i.group.tool.tools.inspect.getLabelValue(e,t,i)}`},class extends ba{key="edit";name="editanalysis";description="dragcornersofselectedanalysis";icon='<?xml version="1.0" encoding="UTF-8"?>\n<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>\n</svg>';onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){!1===e.active&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&!1===e.active&&e.activate()}onPointUp(e){!0===e.active&&e.deactivate()}getLabelValue(e,t,i){const r=i.getTemperatureAtPoint(e,t),s=i.analysis.layers.all.filter(i=>i.isWithin(e,t)).map(e=>{const t=e.selected?"span":"s";return`<${t} style="color: ${e.initialColor};">\n                    ${e.name}\n                </${t}>`});return`${s.length>0?s.join("<br />")+"<br />":""}${r&&r.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}}];var ka=class extends Ms{_tools=(e=>{const t=Sa.map(t=>{const i=new t(e);return[i.key,i]});return Object.fromEntries(t)})(this.parent);get tools(){return this._tools}constructor(e,t){super(e,t)}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){this.value=e instanceof ba?e:this.tools[e]}};const Ca="chrome"in window?{maxWorkers:4}:{},Ea=Ci.pool(Ca);var Ta=class extends Ss{id;service=new $o(this);registries={};palette=new Qo(this,"jet");smooth=new Jo(this,!1);graphSmooth=new Ro(this,!1);tool=new ka(this,new xa(this));pool;constructor(e,t){super(),this.pool=e||Ea,this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return void 0===this.registries[e]&&(this.registries[e]=new va(e,this,t)),this.registries[e]}removeRegistry(e){void 0!==this.registries[e]&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}filters=new ks(this);getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}};console.info("@labirthermal/core","1.3.4");class _a extends xs{subscribe(e,t){return this.set(e.UUID,()=>{t&&t(e),e.requestUpdate()}),this}notifySubscribers(){this.call()}}class Aa extends vi{constructor(){super(...arguments),this._subscribers=new _a}hostConnected(){}hostDisconnected(){this._subscribers.clear()}log(...e){this.host.log(this.constructor.name,...e)}get exportWidth(){return this.host.pngExportWidth}get exportFontSize(){return this.host.pngExportFontSize}get exportsAnalyses(){return this.host.pngExportsAnalysis}get exportsFileName(){return this.host.pngExportsFileName}get exportsThermalScale(){return this.host.pngExportsThermalScale}get exportsFileDate(){return this.host.pngExportsFileDate}get exportLicense(){return this.host.pngExportLicense}subscribe(e,t){this._subscribers.subscribe(e,t)}ubsubscribe(e){this._subscribers.delete(e.UUID)}setWidth(e){this.host.pngExportWidth=e,this._subscribers.notifySubscribers()}setFontSize(e){this.host.pngExportFontSize=e,this._subscribers.notifySubscribers()}setAnalyses(e){this.host.pngExportsAnalysis=e,this._subscribers.notifySubscribers()}setFileName(e){this.host.pngExportsFileName=e,this._subscribers.notifySubscribers()}setThermalScale(e){this.host.pngExportsThermalScale=e,this._subscribers.notifySubscribers()}setFileDate(e){this.host.pngExportsFileDate=e,this._subscribers.notifySubscribers()}setLicense(e=void 0){this.host.pngExportLicense=e,this._subscribers.notifySubscribers()}}const Pa=e=>({fromAttribute:t=>null==t||0===t?.trim().length?e:"true"===t,toAttribute:e=>!0===e?"true":"false"}),$a={lock:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path fill-rule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clip-rule="evenodd" />\n</svg>\n'},document:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />\n</svg>'},eye:{solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />\n                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />\n        </svg>'},play:{solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />\n        </svg>'},pause:{solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />\n        </svg>'},info:{mini:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n            <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />\n        </svg>',solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />\n        </svg>',outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />\n</svg>'},settings:{solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n  <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />\n</svg>',outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />\n  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />\n</svg>\n'},back:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" />\n</svg>'},share:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />\n        </svg>',mini:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n            <path d="M13 4.5a2.5 2.5 0 1 1 .702 1.737L6.97 9.604a2.518 2.518 0 0 1 0 .792l6.733 3.367a2.5 2.5 0 1 1-.671 1.341l-6.733-3.367a2.5 2.5 0 1 1 0-3.475l6.733-3.366A2.52 2.52 0 0 1 13 4.5Z" />\n        </svg>'},folder:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H12.5A1.5 1.5 0 0 1 14 5.5v1.401a2.986 2.986 0 0 0-1.5-.401h-9c-.546 0-1.059.146-1.5.401V3.5ZM2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8h-9A1.5 1.5 0 0 0 2 9.5Z" />\n        </svg>'},wifi:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path fill-rule="evenodd" d="M14.188 7.063a8.75 8.75 0 0 0-12.374 0 .75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06Zm-2.121 2.121a5.75 5.75 0 0 0-8.132 0 .75.75 0 0 1-1.06-1.06 7.25 7.25 0 0 1 10.252 0 .75.75 0 0 1-1.06 1.06Zm-2.122 2.122a2.75 2.75 0 0 0-3.889 0 .75.75 0 1 1-1.06-1.061 4.25 4.25 0 0 1 6.01 0 .75.75 0 0 1-1.06 1.06Zm-2.828 1.06a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />\n        </svg>'},user:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n        <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 9c-1.825 0-3.422.977-4.295 2.437A5.49 5.49 0 0 0 8 13.5a5.49 5.49 0 0 0 4.294-2.063A4.997 4.997 0 0 0 8 9Z" clip-rule="evenodd" />\n        </svg>'},image:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n        <path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />\n        </svg>'},upwards:{outline:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n        <path fill-rule="evenodd" d="M20.24 20.249a.75.75 0 0 0-.75-.75H8.989V5.56l2.47 2.47a.75.75 0 0 0 1.06-1.061l-3.75-3.75a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l2.47-2.469V20.25c0 .414.335.75.75.75h11.25a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd" />\n        </svg>'},copy:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />\n        </svg>',mini:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n            <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />\n            <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />\n        </svg>'},right:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />\n        </svg>'},trash:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />\n        </svg>'},addfolder:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n        <path fill-rule="evenodd" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H9.621a1.5 1.5 0 0 1-1.06-.44L7.439 2.44A1.5 1.5 0 0 0 6.38 2H3.5ZM8 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 8 6Z" clip-rule="evenodd" />\n        </svg>'},upload:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />\n            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />\n        </svg>'},close:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />\n        </svg>'},edit:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />\n        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />\n        </svg>'},comment:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path fill-rule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clip-rule="evenodd" />\n        </svg>'},grid:{solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n            <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clip-rule="evenodd" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z" />\n        </svg>'},list:{solid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n            <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />\n        </svg>'},check:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />\n        </svg>'},"check-circle":{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />\n</svg>'},"circle-dots":{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />\n</svg>'},save:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M5 3h11l3 3v13H5V3Z" />\n            <path stroke-linecap="round" stroke-linejoin="round" d="M7 3v4h8V3M7 10h10M7 12h8" />\n            <circle cx="17" cy="15" r="1.5" stroke="currentColor" fill="none" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="size-4">\n            <path d="M2 2h9l3 3v8H2V2Zm2 1v3h6V3H4Zm0 4h8v1H4V7Zm0 2h6v1H4V9Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />\n        </svg>'},restore:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">\n  <path fillRule="evenodd" d="M6.25 12.5A2.75 2.75 0 0 0 9 9.75V4.56L6.78 6.78a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L10.5 4.56v5.19a4.25 4.25 0 0 1-8.5 0v-1a.75.75 0 0 1 1.5 0v1a2.75 2.75 0 0 0 2.75 2.75Z" clipRule="evenodd" />\n</svg>'},unlink:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n            <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0l4.46 4.46c.128-.178.272-.349.432-.508l3-3a4 4 0 0 1 5.657 5.656l-1.225 1.225a.75.75 0 1 1-1.06-1.06l1.224-1.225a2.5 2.5 0 0 0-3.536-3.536l-3 3a2.504 2.504 0 0 0-.406.533l2.59 2.59a2.49 2.49 0 0 0-.79-1.254.75.75 0 1 1 .977-1.138 3.997 3.997 0 0 1 1.306 3.886l4.871 4.87a.75.75 0 1 1-1.06 1.061l-5.177-5.177-.006-.005-4.134-4.134a.65.65 0 0 1-.005-.006L2.22 3.28a.75.75 0 0 1 0-1.06Zm3.237 7.727a.75.75 0 0 1 0 1.06l-1.225 1.225a2.5 2.5 0 0 0 3.536 3.536l1.879-1.879a.75.75 0 1 1 1.06 1.06L8.83 16.83a4 4 0 0 1-5.657-5.657l1.224-1.225a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />\n        </svg>'},link:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />\n            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />\n        </svg>'},zoom:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />\n            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />\n        </svg>'},adjustment:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n            <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />\n        </svg>',outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />\n        </svg>'},range:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n            <g>\n                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="1.5"/>\n                <line x1="5" y1="9" x2="5" y2="15" stroke="currentColor" stroke-width="2"/>\n                <line x1="19" y1="9" x2="19" y2="15" stroke="currentColor" stroke-width="2"/>\n            </g>\n        </svg>',micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="size-4">\n            <g>\n                <line x1="3" y1="8" x2="13" y2="8" stroke="currentColor" stroke-width="1"/>\n                <line x1="3" y1="6" x2="3" y2="10" stroke="currentColor" stroke-width="1.5"/>\n                <line x1="13" y1="6" x2="13" y2="10" stroke="currentColor" stroke-width="1.5"/>\n            </g>\n        </svg>'},bigger:{mini:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n  <path d="m13.28 7.78 3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 0 0 1.06 1.06ZM2 17.25v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22a.75.75 0 0 1 1.06 1.06L4.56 16.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.747.747 0 0 1-.75-.75ZM12.22 13.28l3.22 3.22h-2.69a.75.75 0 0 0 0 1.5h4.5a.747.747 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06ZM3.5 4.56l3.22 3.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V4.56Z" />\n</svg>\n'},smaller:{mini:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n  <path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L5.44 6.5H2.75a.75.75 0 0 0 0 1.5h4.5A.75.75 0 0 0 8 7.25v-4.5a.75.75 0 0 0-1.5 0v2.69L3.28 2.22ZM13.5 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-2.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L13.5 5.44V2.75ZM3.28 17.78l3.22-3.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06ZM13.5 14.56l3.22 3.22a.75.75 0 1 0 1.06-1.06l-3.22-3.22h2.69a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69Z" />\n</svg>'},ellipsis:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />\n</svg>'},download:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />\n  <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />\n</svg>',outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />\n</svg>'},clipboard:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />\n</svg>'},bulb:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />\n</svg>'},reload:{micro:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">\n  <path fill-rule="evenodd" d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z" clip-rule="evenodd" />\n</svg>'},warning:{outline:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />\n</svg>'},move:{mini:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">\n  <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clip-rule="evenodd" />\n  <path fill-rule="evenodd" d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z" clip-rule="evenodd" />\n</svg>'}},Ra=(e,t,i,r)=>{const s=$a[e][t];if(!s)return console.warn(`Icon variant "${String(t)}" not found for icon "${String(e)}"`),qe``;let o=s;return(i||r)&&(o=o.includes('class="')?o.replace(/class="([^"]*)"/,`class="$1 ${i||""}"`):o.replace(/<svg([^>]*)>/,`<svg$1 class="${i||""}">`),r&&(o=o.includes('style="')?o.replace(/style="([^"]*)"/,`style="$1; ${r}"`):o.replace(/<svg([^>]*)>/,`<svg$1 style="${r}">`))),o},La=(()=>{const e={};for(const t in $a){const i=t;e[i]={};const r=$a[i];for(const s in r)e[i][s]=(e,i)=>Ra(t,s,e,i)}return e})(),Da="file",Oa="failure",Ma="file-loading",Ia="file-cursor",Ua="file-cursor-setter",za="playback",Fa="duration",Ba="file-playing-context",Na="file-playback-speed",ja="recording",Va="mayStop",Ha="registry-opacity",Wa="registry-range-from",Ga="registry-range-to",qa="registry-loading",Ya="registry-min",Za="registry-max",Xa="registry-highlight",Ka="registry-highlight-setter",Qa="manager-palette-context",Ja="manager-smooth-context",en="manager-graph-function-context",tn="tool-context",rn="interactive-analysis-context",sn=e=>{return t=e,null!=t?._$litType$?.h?e._$litType$.h:e.strings;var t},on=It(class extends Ut{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){const i=Ct(this.it)?sn(this.it):null,r=Ct(t)?sn(t):null;if(null!==i&&(null===r||i!==r)){const t=Pt(e).pop();let r=this.et.get(i);if(void 0===r){const e=document.createDocumentFragment();r=dt(Ze,e),r.setConnected(!1),this.et.set(i,r)}At(r,[t]),Tt(r,0,t)}if(null!==r){if(null===i||i!==r){const t=this.et.get(r);if(void 0!==t){const i=Pt(t).pop();e._$AR(),Tt(e,0,i),At(e,[i])}}this.it=t}else this.it=void 0;return this.render(t)}});function*an(e,t){if(void 0!==e){let i=0;for(const r of e)yield t(r,i++)}}var nn=Object.defineProperty,ln=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&nn(t,i,o),o};const hn=(e=class extends pi{constructor(){super(...arguments),this.language=re.language,this._overflowCount=0,this._overflowOpen=!1,this.fullscreen="off",this.showfullscreen=!1,this.dark=!1,this.labelVariant="foreground",this.chromiumwarning=!1,this.headerRef=Wt(),this.contentRef=Wt(),this.barItemsRef=Wt(),this._overflowObserver=null,this._rafId=null,this._handleFullscreenChange=()=>{document.fullscreenElement||(this.fullscreen="off")}}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",this._handleFullscreenChange),re.on("languageChanged",()=>{this.language=re.language})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fullscreenchange",this._handleFullscreenChange),this._overflowObserver&&(this._overflowObserver.disconnect(),this._overflowObserver=null),null!==this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null)}_toggleOverflow(){this._overflowOpen=!this._overflowOpen}_scheduleOverflowUpdate(){null!==this._rafId&&cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>{this._rafId=null,this._doOverflowUpdate()})}_doOverflowUpdate(){const e=this.shadowRoot;if(!e)return;const t=e.querySelector('slot[name="bar-overflow"]');if(t){const e=[...t.assignedElements()];for(const t of e)t.slot=t.dataset.originalSlot??"bar-pre",delete t.dataset.originalSlot}const i=this.barItemsRef.value;if(!i)return;const r=e.querySelector('slot[name="bar-pre"]'),s=e.querySelector('slot[name="bar-post"]'),o=[...r?.assignedElements({flatten:!0})??[],...s?.assignedElements({flatten:!0})??[]];if(0===o.length)return void(this._overflowCount=0);const a=o.reduce((e,t,i)=>e+t.offsetWidth+(i>0?5:0),0),n=i.offsetWidth;if(a<=n)return this._overflowCount=0,void(this._overflowOpen=!1);const l=n-44;let h=0,c=o.length;for(let p=0;p<o.length;p++){const e=o[p].offsetWidth+(p>0?5:0);if(h+e>l){c=p;break}h+=e}for(let p=c;p<o.length;p++){const e=o[p];e.dataset.originalSlot=e.slot,e.slot="bar-overflow"}const d=o.length-c;this._overflowCount=d,0===d&&(this._overflowOpen=!1)}toggleFullscreen(){"on"===this.fullscreen?this.fullscreen="off":this.fullscreen="on"}update(e){super.update(e),void 0===this.observer&&void 0!==this.contentRef.value&&(this.observer=new ResizeObserver(e=>{const t=e[0];if("on"===this.fullscreen&&this.contentRef.value){const e=175,i=t.contentRect.height;t.contentRect.width;const r=i-e;this.contentRef.value.offsetHeight<r?console.log("priorita šířky"):console.log("priorita výšky")}else"off"===this.fullscreen&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this)),!this._overflowObserver&&this.barItemsRef.value&&(this._overflowObserver=new ResizeObserver(()=>{this._scheduleOverflowUpdate()}),this._overflowObserver.observe(this.barItemsRef.value),this._scheduleOverflowUpdate())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"fullscreen"===e&&("on"===i?this.requestFullscreen():"off"===i&&null!==t&&document.fullscreenElement&&document.exitFullscreen())}renderLabel(){const e=void 0!==this.onlabel?"true":"false",t=this.label?qe`<thermal-btn
    variant="${this.labelVariant}"
    interactive=${e}
    icon=${xt(this.labelIcon)}
    iconStyle=${xt(this.labelIconStyle)}
    tooltip=${xt(this.labelTooltip)}
    @click=${xt(this.onlabel)}
>${this.label}</thermal-btn>`:Ze;return qe`
    <slot name="label">
        ${t}
    </slot>`}renderCreditField(e,t){return void 0===t||0===t.trim().length?Ze:qe`<div>
    <div class="credits-field">${e}:</div>
    <div class="credit-value">${t}</div>
</div>`}renderCredits(){return this.author||this.license||this.recorded?qe`<div class="credits">
    ${this.renderCreditField(se(li.recordedat),this.recorded)}
    ${this.renderCreditField(se(li.author),this.author)}
    ${this.renderCreditField(se(li.license),this.license)}
</div>`:Ze}renderLanguageSwitcher(){return qe`<thermal-dropdown>
    <span slot="invoker">${this.language.toUpperCase()}</span>
    ${on(an(e.languages,e=>qe`<div slot="option">
        <thermal-btn
            @click=${()=>{re.changeLanguage(e),this.language=e}}
        >${hi[e].flag} ${hi[e].name}</thermal-btn>
    </div>`))}
</thermal-dropdown>`}renderFullscreenButton(){return!1===this.showfullscreen?Ze:qe`<thermal-btn
    class="app-fullscreen-button"
    @click=${this.toggleFullscreen.bind(this)}
    icon=${"on"===this.fullscreen?"smaller":"bigger"}
    iconStyle="mini"
    tooltip=${"on"===this.fullscreen?se(li.close):"Fullscreen"}
></thermal-btn>`}renderOverflowToggle(){if(0===this._overflowCount)return Ze;let e="adjustment",t="outline",i="default";return this._overflowOpen&&(e="close",t="outline",i="bg"),qe`<thermal-btn 
    @click=${this._toggleOverflow} 
    tooltip="${this.t("moreoptions")}}" 
    icon=${e} 
    iconStyle=${t} 
    variant=${i}
></thermal-btn>`}render(){return qe`<header ${Yt(this.headerRef)} class="app-header">

        <div class="bar">

            <div class="bar-label">
                ${this.renderLabel()}
            </div>

            <div class="bar-items" ${Yt(this.barItemsRef)}>

                <slot name="bar-pre" @slotchange=${this._scheduleOverflowUpdate}></slot>
                <div class="bar-spacer"></div>
                <slot name="bar-post" @slotchange=${this._scheduleOverflowUpdate}></slot>

                ${this.renderOverflowToggle()}

            </div>

            <slot name="close"></slot>

            ${this.renderFullscreenButton()}

            ${this.renderLanguageSwitcher()}

        </div>

        ${this._overflowCount>0?qe`
            <div class="bar-overflow-panel" ?hidden=${!this._overflowOpen}>
                <slot name="bar-overflow"></slot>
            </div>
        `:Ze}

        ${this.preElements.length>=0?qe`<div class="pre">
            <slot name="pre"></slot>
        </div>`:""}

    </header>

    <div class="content" part="app-content" ${Yt(this.contentRef)}>
        <slot></slot>
    </div>

    <div class="post">
        <slot name="post"></slot>
    </div>

    ${this.renderCredits()}

    <div class="content ${this.contentElements.length>0?"has-content":""}">
        <slot name="content"></slot>
    </div>
`}},e.styles=ce`

        :host {
            font-family: sans-serif;
            font-weight: normal;
            font-size: var( --thermal-fs );
            line-height: 1em;
            color: var( --thermal-foreground );

            display: block;

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative; 
        }

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative;        

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .bar-label {
            flex: 0 1 auto;
            min-width: 50px;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .bar-items {
            flex: 1 1 0;
            min-width: 0;
            display: flex;
            gap: 5px;
            align-items: center;
            --thermal-direction: row;
        }

        .bar-items ::slotted([slot="bar-pre"]),
        .bar-items ::slotted([slot="bar-post"]) {
            flex-shrink: 0;
        }

        .bar-spacer {
            flex: 1 1 0;
            min-width: 0;
        }

        .bar-overflow-toggle {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            color: var(--thermal-foreground);
            cursor: pointer;
            padding: 0.3em 0.5em;
            line-height: 0;
        }

        .bar-overflow-toggle:hover {
            background-color: var(--thermal-slate-light);
        }

        .bar-overflow-panel {
            
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            align-items: center;
            padding: calc( var(--thermal-gap) * 0.4 ) 0;
            
            border-top: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            --thermal-direction: row;

            padding: .3em;
            
            background: var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            margin-bottom: .5em;

            > slot > * {
                width: 100%; 
            }

        }

        .bar-overflow-panel[hidden] {
            display: none;
        }

        :host([fullscreen="on"]) .container {
            border: 0;
            border-radius: 0;
            box-sizing: border-box;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            padding-top: 0px;

            .app-header {
                padding-top: calc( var( --thermal-gap ) / 3 );
            }

            header,
            .content {
                width: 100%;
            }
        }


        .credits {

            display: flex;
            width: 100%;
            flex-wrap: wrap;
            font-size: calc( var(--thermal-fs-sm) * 0.8 );

            & > div {
                padding-top: calc( var(--thermal-gap) * .5 );
                padding-right: var( --thermal-gap );
            }
        
        }

        .credits-field {
            display: inline;
            opacity: .5;
        }

        .credit-value {
            display: inline;
        }

        .content {
            width: 100%;
            box-sizing: border-box;
        }

        .has-content {
            margin-top: calc( var(--thermal-gap) * .5);
            &::before {
                opacity: .5;
                font-size: calc( var(--thermal-fs-sm) * 0.8 );
                display: block;
                padding-bottom: calc( var(--thermal-gap) * .5);
            }
        }

        .app-header {
            position: sticky;
            top: 0;
            z-index: 9999;
            background: var(--thermal-slate-light);
            background: linear-gradient(var(--thermal-slate-light) calc(100% - 10px), transparent);
        }
    
    `,e.languages=["en","cs","de","fr","cy"],e);ln([bt()],hn.prototype,"language"),ln([bt()],hn.prototype,"_overflowCount"),ln([bt()],hn.prototype,"_overflowOpen"),ln([wt({slot:"pre",flatten:!0})],hn.prototype,"preElements"),ln([wt({slot:"content",flatten:!0})],hn.prototype,"contentElements"),ln([vt({type:String,reflect:!0})],hn.prototype,"fullscreen"),ln([vt({type:String,reflect:!0,converter:Pa(!1),attribute:"show-fullscreen"})],hn.prototype,"showfullscreen"),ln([vt({type:String,reflect:!0,attribute:!0})],hn.prototype,"dark"),ln([vt()],hn.prototype,"author"),ln([vt()],hn.prototype,"recorded"),ln([vt()],hn.prototype,"license"),ln([vt()],hn.prototype,"label"),ln([vt()],hn.prototype,"labelIcon"),ln([vt()],hn.prototype,"labelIconStyle"),ln([vt()],hn.prototype,"labelTooltip"),ln([vt()],hn.prototype,"labelVariant"),ln([vt({type:Object})],hn.prototype,"onlabel"),ln([vt({converter:Pa(!1)})],hn.prototype,"chromiumwarning");let cn=hn;var dn=Object.defineProperty,pn=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&dn(t,i,o),o};const un=class extends ut{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Wt(),this.contentRef=Wt(),this.rulerContentRef=Wt()}connectedCallback(){super.connectedCallback()}firstUpdated(e){super.firstUpdated(e),this.hydrateObserver()}hydrateObserver(){this.drawerRef.value&&void 0===this.observer&&(this.observer=new ResizeObserver(e=>{if(!1===this.collapsed){const e=this.contentRef.value.clientWidth;this.lastContentWidth=e}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):!1===this.collapsed&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value))}disconnectedCallback(){super.disconnectedCallback(),this.drawerRef.value&&this.observer.unobserve(this.drawerRef.value),this.observer&&this.observer.disconnect()}render(){return qe`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Yt(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Yt(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Yt(this.contentRef)}>

                    ${!1===this.collapsed?qe`
                        <slot></slot>    
                    `:Ze}
                
                </div>

            </div>

            ${this.collapsed?qe`
                <thermal-dropdown class="collapsed-menu">
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option" stacked="true"></slot>
                </thermal-dropdown>
            `:Ze}
        
        `}};un.styles=ce`

        .container {
            // width: 100%;
            display: flex;
            gap: 5px;
            position: relative;
        }


        .ruler {
            width: 100%;
            position: absolute;
            height: 0;
            top: 0;
            left: 0;
        }

        .ruler-item {}

        .ruler-item__current {
            border: var(--thermal-border-width) var(--thermal-border-style) transparent;
            height: 0;
            margin-top: -1px;
            content: "";
        }

        .ruler-item__content {
            border: var(--thermal-border-width) var(--thermal-border-style) red;
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

        .collapsed-menu {
            --thermal-direction: column;
            --thermal-collapsible-display: block !important;
            --thermal-collapsible-width: 100%;
            --thermal-collapsible-grow: 1;
        }

    `;let mn=un;pn([bt()],mn.prototype,"collapsed"),pn([bt()],mn.prototype,"lastContentWidth");const gn=Math.min,fn=Math.max,yn=Math.round,vn=Math.floor,bn=e=>({x:e,y:e}),wn={left:"right",right:"left",bottom:"top",top:"bottom"};function xn(e,t,i){return fn(e,gn(t,i))}function Sn(e,t){return"function"==typeof e?e(t):e}function kn(e){return e.split("-")[0]}function Cn(e){return e.split("-")[1]}function En(e){return"x"===e?"y":"x"}function Tn(e){return"y"===e?"height":"width"}function _n(e){const t=e[0];return"t"===t||"b"===t?"y":"x"}function An(e){return En(_n(e))}function Pn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const $n=["left","right"],Rn=["right","left"],Ln=["top","bottom"],Dn=["bottom","top"];function On(e,t,i,r){const s=Cn(e);let o=function(e,t,i){switch(e){case"top":case"bottom":return i?t?Rn:$n:t?$n:Rn;case"left":case"right":return t?Ln:Dn;default:return[]}}(kn(e),"start"===i,r);return s&&(o=o.map(e=>e+"-"+s),t&&(o=o.concat(o.map(Pn)))),o}function Mn(e){const t=kn(e);return wn[t]+e.slice(t.length)}function In(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Un(e){const{x:t,y:i,width:r,height:s}=e;return{width:r,height:s,top:i,left:t,right:t+r,bottom:i+s,x:t,y:i}}function zn(e,t,i){let{reference:r,floating:s}=e;const o=_n(t),a=An(t),n=Tn(a),l=kn(t),h="y"===o,c=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2,p=r[n]/2-s[n]/2;let u;switch(l){case"top":u={x:c,y:r.y-s.height};break;case"bottom":u={x:c,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:d};break;case"left":u={x:r.x-s.width,y:d};break;default:u={x:r.x,y:r.y}}switch(Cn(t)){case"start":u[a]-=p*(i&&h?-1:1);break;case"end":u[a]+=p*(i&&h?-1:1)}return u}async function Fn(e,t){var i;void 0===t&&(t={});const{x:r,y:s,platform:o,rects:a,elements:n,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=Sn(t,e),m=In(u),g=n[p?"floating"===d?"reference":"floating":d],f=Un(await o.getClippingRect({element:null==(i=await(null==o.isElement?void 0:o.isElement(g)))||i?g:g.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(n.floating)),boundary:h,rootBoundary:c,strategy:l})),y="floating"===d?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==o.getOffsetParent?void 0:o.getOffsetParent(n.floating)),b=await(null==o.isElement?void 0:o.isElement(v))&&await(null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},w=Un(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:y,offsetParent:v,strategy:l}):y);return{top:(f.top-w.top+m.top)/b.y,bottom:(w.bottom-f.bottom+m.bottom)/b.y,left:(f.left-w.left+m.left)/b.x,right:(w.right-f.right+m.right)/b.x}}function Bn(e){const t=gn(...e.map(e=>e.left)),i=gn(...e.map(e=>e.top));return{x:t,y:i,width:fn(...e.map(e=>e.right))-t,height:fn(...e.map(e=>e.bottom))-i}}const Nn=new Set(["left","top"]);function jn(){return"undefined"!=typeof window}function Vn(e){return Gn(e)?(e.nodeName||"").toLowerCase():"#document"}function Hn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Wn(e){var t;return null==(t=(Gn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Gn(e){return!!jn()&&(e instanceof Node||e instanceof Hn(e).Node)}function qn(e){return!!jn()&&(e instanceof Element||e instanceof Hn(e).Element)}function Yn(e){return!!jn()&&(e instanceof HTMLElement||e instanceof Hn(e).HTMLElement)}function Zn(e){return!(!jn()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Hn(e).ShadowRoot)}function Xn(e){const{overflow:t,overflowX:i,overflowY:r,display:s}=al(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&"inline"!==s&&"contents"!==s}function Kn(e){return/^(table|td|th)$/.test(Vn(e))}function Qn(e){try{if(e.matches(":popover-open"))return!0}catch(t){}try{return e.matches(":modal")}catch(t){return!1}}const Jn=/transform|translate|scale|rotate|perspective|filter/,el=/paint|layout|strict|content/,tl=e=>!!e&&"none"!==e;let il;function rl(e){const t=qn(e)?al(e):e;return tl(t.transform)||tl(t.translate)||tl(t.scale)||tl(t.rotate)||tl(t.perspective)||!sl()&&(tl(t.backdropFilter)||tl(t.filter))||Jn.test(t.willChange||"")||el.test(t.contain||"")}function sl(){return null==il&&(il="undefined"!=typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),il}function ol(e){return/^(html|body|#document)$/.test(Vn(e))}function al(e){return Hn(e).getComputedStyle(e)}function nl(e){return qn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ll(e){if("html"===Vn(e))return e;const t=e.assignedSlot||e.parentNode||Zn(e)&&e.host||Wn(e);return Zn(t)?t.host:t}function hl(e){const t=ll(e);return ol(t)?e.ownerDocument?e.ownerDocument.body:e.body:Yn(t)&&Xn(t)?t:hl(t)}function cl(e,t,i){var r;void 0===t&&(t=[]),void 0===i&&(i=!0);const s=hl(e),o=s===(null==(r=e.ownerDocument)?void 0:r.body),a=Hn(s);if(o){const e=dl(a);return t.concat(a,a.visualViewport||[],Xn(s)?s:[],e&&i?cl(e):[])}return t.concat(s,cl(s,[],i))}function dl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pl(e){const t=al(e);let i=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=Yn(e),o=s?e.offsetWidth:i,a=s?e.offsetHeight:r,n=yn(i)!==o||yn(r)!==a;return n&&(i=o,r=a),{width:i,height:r,$:n}}function ul(e){return qn(e)?e:e.contextElement}function ml(e){const t=ul(e);if(!Yn(t))return bn(1);const i=t.getBoundingClientRect(),{width:r,height:s,$:o}=pl(t);let a=(o?yn(i.width):i.width)/r,n=(o?yn(i.height):i.height)/s;return a&&Number.isFinite(a)||(a=1),n&&Number.isFinite(n)||(n=1),{x:a,y:n}}const gl=bn(0);function fl(e){const t=Hn(e);return sl()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:gl}function yl(e,t,i,r){void 0===t&&(t=!1),void 0===i&&(i=!1);const s=e.getBoundingClientRect(),o=ul(e);let a=bn(1);t&&(r?qn(r)&&(a=ml(r)):a=ml(e));const n=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==Hn(e))&&t}(o,i,r)?fl(o):bn(0);let l=(s.left+n.x)/a.x,h=(s.top+n.y)/a.y,c=s.width/a.x,d=s.height/a.y;if(o){const e=Hn(o),t=r&&qn(r)?Hn(r):r;let i=e,s=dl(i);for(;s&&r&&t!==i;){const e=ml(s),t=s.getBoundingClientRect(),r=al(s),o=t.left+(s.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(s.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,h*=e.y,c*=e.x,d*=e.y,l+=o,h+=a,i=Hn(s),s=dl(i)}}return Un({width:c,height:d,x:l,y:h})}function vl(e,t){const i=nl(e).scrollLeft;return t?t.left+i:yl(Wn(e)).left+i}function bl(e,t){const i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-vl(e,i),y:i.top+t.scrollTop}}function wl(e,t,i){let r;if("viewport"===t)r=function(e,t){const i=Hn(e),r=Wn(e),s=i.visualViewport;let o=r.clientWidth,a=r.clientHeight,n=0,l=0;if(s){o=s.width,a=s.height;const e=sl();(!e||e&&"fixed"===t)&&(n=s.offsetLeft,l=s.offsetTop)}const h=vl(r);if(h<=0){const e=r.ownerDocument,t=e.body,i=getComputedStyle(t),s="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,a=Math.abs(r.clientWidth-t.clientWidth-s);a<=25&&(o-=a)}else h<=25&&(o+=h);return{width:o,height:a,x:n,y:l}}(e,i);else if("document"===t)r=function(e){const t=Wn(e),i=nl(e),r=e.ownerDocument.body,s=fn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=fn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-i.scrollLeft+vl(e);const n=-i.scrollTop;return"rtl"===al(r).direction&&(a+=fn(t.clientWidth,r.clientWidth)-s),{width:s,height:o,x:a,y:n}}(Wn(e));else if(qn(t))r=function(e,t){const i=yl(e,!0,"fixed"===t),r=i.top+e.clientTop,s=i.left+e.clientLeft,o=Yn(e)?ml(e):bn(1);return{width:e.clientWidth*o.x,height:e.clientHeight*o.y,x:s*o.x,y:r*o.y}}(t,i);else{const i=fl(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Un(r)}function xl(e,t){const i=ll(e);return!(i===t||!qn(i)||ol(i))&&("fixed"===al(i).position||xl(i,t))}function Sl(e,t,i){const r=Yn(t),s=Wn(t),o="fixed"===i,a=yl(e,!0,o,t);let n={scrollLeft:0,scrollTop:0};const l=bn(0);function h(){l.x=vl(s)}if(r||!r&&!o)if(("body"!==Vn(t)||Xn(s))&&(n=nl(t)),r){const e=yl(t,!0,o,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else s&&h();o&&!r&&s&&h();const c=!s||r||o?bn(0):bl(s,n);return{x:a.left+n.scrollLeft-l.x-c.x,y:a.top+n.scrollTop-l.y-c.y,width:a.width,height:a.height}}function kl(e){return"static"===al(e).position}function Cl(e,t){if(!Yn(e)||"fixed"===al(e).position)return null;if(t)return t(e);let i=e.offsetParent;return Wn(e)===i&&(i=i.ownerDocument.body),i}function El(e,t){const i=Hn(e);if(Qn(e))return i;if(!Yn(e)){let t=ll(e);for(;t&&!ol(t);){if(qn(t)&&!kl(t))return t;t=ll(t)}return i}let r=Cl(e,t);for(;r&&Kn(r)&&kl(r);)r=Cl(r,t);return r&&ol(r)&&kl(r)&&!rl(r)?i:r||function(e){let t=ll(e);for(;Yn(t)&&!ol(t);){if(rl(t))return t;if(Qn(t))return null;t=ll(t)}return null}(e)||i}const Tl={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:r,strategy:s}=e;const o="fixed"===s,a=Wn(r),n=!!t&&Qn(t.floating);if(r===a||n&&o)return i;let l={scrollLeft:0,scrollTop:0},h=bn(1);const c=bn(0),d=Yn(r);if((d||!d&&!o)&&(("body"!==Vn(r)||Xn(a))&&(l=nl(r)),d)){const e=yl(r);h=ml(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}const p=!a||d||o?bn(0):bl(a,l);return{width:i.width*h.x,height:i.height*h.y,x:i.x*h.x-l.scrollLeft*h.x+c.x+p.x,y:i.y*h.y-l.scrollTop*h.y+c.y+p.y}},getDocumentElement:Wn,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:r,strategy:s}=e;const o=[..."clippingAncestors"===i?Qn(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let r=cl(e,[],!1).filter(e=>qn(e)&&"body"!==Vn(e)),s=null;const o="fixed"===al(e).position;let a=o?ll(e):e;for(;qn(a)&&!ol(a);){const t=al(a),i=rl(a);i||"fixed"!==t.position||(s=null),(o?!i&&!s:!i&&"static"===t.position&&s&&("absolute"===s.position||"fixed"===s.position)||Xn(a)&&!i&&xl(e,a))?r=r.filter(e=>e!==a):s=t,a=ll(a)}return t.set(e,r),r}(t,this._c):[].concat(i),r],a=wl(t,o[0],s);let n=a.top,l=a.right,h=a.bottom,c=a.left;for(let d=1;d<o.length;d++){const e=wl(t,o[d],s);n=fn(e.top,n),l=gn(e.right,l),h=gn(e.bottom,h),c=fn(e.left,c)}return{width:l-c,height:h-n,x:c,y:n}},getOffsetParent:El,getElementRects:async function(e){const t=this.getOffsetParent||El,i=this.getDimensions,r=await i(e.floating);return{reference:Sl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=pl(e);return{width:t,height:i}},getScale:ml,isElement:qn,isRTL:function(e){return"rtl"===al(e).direction}};function _l(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Al(e,t,i,r){void 0===r&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,h=ul(e),c=s||o?[...h?cl(h):[],...t?cl(t):[]]:[];c.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),o&&e.addEventListener("resize",i)});const d=h&&n?function(e,t){let i,r=null;const s=Wn(e);function o(){var e;clearTimeout(i),null==(e=r)||e.disconnect(),r=null}return function a(n,l){void 0===n&&(n=!1),void 0===l&&(l=1),o();const h=e.getBoundingClientRect(),{left:c,top:d,width:p,height:u}=h;if(n||t(),!p||!u)return;const m={rootMargin:-vn(d)+"px "+-vn(s.clientWidth-(c+p))+"px "+-vn(s.clientHeight-(d+u))+"px "+-vn(c)+"px",threshold:fn(0,gn(1,l))||1};let g=!0;function f(t){const r=t[0].intersectionRatio;if(r!==l){if(!g)return a();r?a(!1,r):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==r||_l(h,e.getBoundingClientRect())||a(),g=!1}try{r=new IntersectionObserver(f,{...m,root:s.ownerDocument})}catch(y){r=new IntersectionObserver(f,m)}r.observe(e)}(!0),o}(h,i):null;let p,u=-1,m=null;a&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===h&&m&&t&&(m.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),i()}),h&&!l&&m.observe(h),t&&m.observe(t));let g=l?yl(e):null;return l&&function t(){const r=yl(e);g&&!_l(g,r)&&i();g=r,p=requestAnimationFrame(t)}(),i(),()=>{var e;c.forEach(e=>{s&&e.removeEventListener("scroll",i),o&&e.removeEventListener("resize",i)}),null==d||d(),null==(e=m)||e.disconnect(),m=null,l&&cancelAnimationFrame(p)}}const Pl=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,r;const{x:s,y:o,placement:a,middlewareData:n}=t,l=await async function(e,t){const{placement:i,platform:r,elements:s}=e,o=await(null==r.isRTL?void 0:r.isRTL(s.floating)),a=kn(i),n=Cn(i),l="y"===_n(i),h=Nn.has(a)?-1:1,c=o&&l?-1:1,d=Sn(t,e);let{mainAxis:p,crossAxis:u,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return n&&"number"==typeof m&&(u="end"===n?-1*m:m),l?{x:u*c,y:p*h}:{x:p*h,y:u*c}}(t,e);return a===(null==(i=n.offset)?void 0:i.placement)&&null!=(r=n.arrow)&&r.alignmentOffset?{}:{x:s+l.x,y:o+l.y,data:{...l,placement:a}}}}},$l=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:r,placement:s,platform:o}=t,{mainAxis:a=!0,crossAxis:n=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...h}=Sn(e,t),c={x:i,y:r},d=await o.detectOverflow(t,h),p=_n(kn(s)),u=En(p);let m=c[u],g=c[p];if(a){const e="y"===u?"bottom":"right";m=xn(m+d["y"===u?"top":"left"],m,m-d[e])}if(n){const e="y"===p?"bottom":"right";g=xn(g+d["y"===p?"top":"left"],g,g-d[e])}const f=l.fn({...t,[u]:m,[p]:g});return{...f,data:{x:f.x-i,y:f.y-r,enabled:{[u]:a,[p]:n}}}}}},Rl=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,r;const{placement:s,middlewareData:o,rects:a,initialPlacement:n,platform:l,elements:h}=t,{mainAxis:c=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...f}=Sn(e,t);if(null!=(i=o.arrow)&&i.alignmentOffset)return{};const y=kn(s),v=_n(n),b=kn(n)===n,w=await(null==l.isRTL?void 0:l.isRTL(h.floating)),x=p||(b||!g?[Mn(n)]:function(e){const t=Mn(e);return[Pn(e),t,Pn(t)]}(n)),S="none"!==m;!p&&S&&x.push(...On(n,g,m,w));const k=[n,...x],C=await l.detectOverflow(t,f),E=[];let T=(null==(r=o.flip)?void 0:r.overflows)||[];if(c&&E.push(C[y]),d){const e=function(e,t,i){void 0===i&&(i=!1);const r=Cn(e),s=An(e),o=Tn(s);let a="x"===s?r===(i?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Mn(a)),[a,Mn(a)]}(s,a,w);E.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:s,overflows:E}],!E.every(e=>e<=0)){var _,A;const e=((null==(_=o.flip)?void 0:_.index)||0)+1,t=k[e];if(t){if(!("alignment"===d&&v!==_n(t))||T.every(e=>_n(e.placement)!==v||e.overflows[0]>0))return{data:{index:e,overflows:T},reset:{placement:t}}}let i=null==(A=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:A.placement;if(!i)switch(u){case"bestFit":{var P;const e=null==(P=T.filter(e=>{if(S){const t=_n(e.placement);return t===v||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:P[0];e&&(i=e);break}case"initialPlacement":i=n}if(s!==i)return{reset:{placement:i}}}return{}}}},Ll=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:r,placement:s,rects:o,platform:a,elements:n,middlewareData:l}=t,{element:h,padding:c=0}=Sn(e,t)||{};if(null==h)return{};const d=In(c),p={x:i,y:r},u=An(s),m=Tn(u),g=await a.getDimensions(h),f="y"===u,y=f?"top":"left",v=f?"bottom":"right",b=f?"clientHeight":"clientWidth",w=o.reference[m]+o.reference[u]-p[u]-o.floating[m],x=p[u]-o.reference[u],S=await(null==a.getOffsetParent?void 0:a.getOffsetParent(h));let k=S?S[b]:0;k&&await(null==a.isElement?void 0:a.isElement(S))||(k=n.floating[b]||o.floating[m]);const C=w/2-x/2,E=k/2-g[m]/2-1,T=gn(d[y],E),_=gn(d[v],E),A=T,P=k-g[m]-_,$=k/2-g[m]/2+C,R=xn(A,$,P),L=!l.arrow&&null!=Cn(s)&&$!==R&&o.reference[m]/2-($<A?T:_)-g[m]/2<0,D=L?$<A?$-A:$-P:0;return{[u]:p[u]+D,data:{[u]:R,centerOffset:$-R-D,...L&&{alignmentOffset:D}},reset:L}}}),Dl=function(e){return void 0===e&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:r,rects:s,platform:o,strategy:a}=t,{padding:n=2,x:l,y:h}=Sn(e,t),c=Array.from(await(null==o.getClientRects?void 0:o.getClientRects(r.reference))||[]),d=function(e){const t=e.slice().sort((e,t)=>e.y-t.y),i=[];let r=null;for(let s=0;s<t.length;s++){const e=t[s];!r||e.y-r.y>r.height/2?i.push([e]):i[i.length-1].push(e),r=e}return i.map(e=>Un(Bn(e)))}(c),p=Un(Bn(c)),u=In(n);const m=await o.getElementRects({reference:{getBoundingClientRect:function(){if(2===d.length&&d[0].left>d[1].right&&null!=l&&null!=h)return d.find(e=>l>e.left-u.left&&l<e.right+u.right&&h>e.top-u.top&&h<e.bottom+u.bottom)||p;if(d.length>=2){if("y"===_n(i)){const e=d[0],t=d[d.length-1],r="top"===kn(i),s=e.top,o=t.bottom,a=r?e.left:t.left,n=r?e.right:t.right;return{top:s,bottom:o,left:a,right:n,width:n-a,height:o-s,x:a,y:s}}const e="left"===kn(i),t=fn(...d.map(e=>e.right)),r=gn(...d.map(e=>e.left)),s=d.filter(i=>e?i.left===r:i.right===t),o=s[0].top,a=s[s.length-1].bottom;return{top:o,bottom:a,left:r,right:t,width:t-r,height:a-o,x:r,y:o}}return p}},floating:r.floating,strategy:a});return s.reference.x!==m.reference.x||s.reference.y!==m.reference.y||s.reference.width!==m.reference.width||s.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}},Ol=(e,t,i)=>{const r=new Map,s={platform:Tl,...i},o={...s.platform,_c:r};return(async(e,t,i)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:a}=i,n=a.detectOverflow?a:{...a,detectOverflow:Fn},l=await(null==a.isRTL?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:c,y:d}=zn(h,r,l),p=r,u=0;const m={};for(let g=0;g<o.length;g++){const i=o[g];if(!i)continue;const{name:f,fn:y}=i,{x:v,y:b,data:w,reset:x}=await y({x:c,y:d,initialPlacement:r,placement:p,strategy:s,middlewareData:m,rects:h,platform:n,elements:{reference:e,floating:t}});c=null!=v?v:c,d=null!=b?b:d,m[f]={...m[f],...w},x&&u<50&&(u++,"object"==typeof x&&(x.placement&&(p=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:s}):x.rects),({x:c,y:d}=zn(h,p,l))),g=-1)}return{x:c,y:d,placement:p,strategy:s,middlewareData:m}})(e,t,{...s,platform:o})};var Ml=Object.defineProperty,Il=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Ml(t,i,o),o};const Ul=class extends pi{constructor(){super(...arguments),this.tooltipPlacement="top",this.iconStyle="outline",this.tabindex=0,this.align="center",this.showTooltip=async()=>{if(!this.tooltipElement||!this.arrowElement)return;this.tooltipElement.style.visibility="visible",this.tooltipElement.style.opacity="1";const e=async()=>{if(!this.tooltipElement||!this.arrowElement)return;const{x:e,y:t,placement:i,middlewareData:r}=await Ol(this,this.tooltipElement,{placement:this.tooltipPlacement,middleware:[Pl(6),Rl(),$l({padding:8}),Ll({element:this.arrowElement})]});Object.assign(this.tooltipElement.style,{left:`${e}px`,top:`${t}px`});const{x:s,y:o}=r.arrow||{},a={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];Object.assign(this.arrowElement.style,{left:null!=s?`${s}px`:"",top:null!=o?`${o}px`:"",right:"",bottom:"",[a]:"-4px"})};e(),this.cleanupAutoUpdate=Al(this,this.tooltipElement,e)},this.hideTooltip=()=>{this.tooltipElement&&(this.tooltipElement.style.opacity="0",this.tooltipElement.style.visibility="hidden",this.cleanupAutoUpdate&&(this.cleanupAutoUpdate(),this.cleanupAutoUpdate=void 0))},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopPropagation())},this.handleKeydown=e=>{this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}}firstUpdated(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("click",this.handleClick),this.tooltip&&(this.addEventListener("mouseenter",this.showTooltip),this.addEventListener("mouseleave",this.hideTooltip),this.addEventListener("focus",this.showTooltip),this.addEventListener("blur",this.hideTooltip))}updated(e){e.has("tooltip")&&(this.tooltip?(this.addEventListener("mouseenter",this.showTooltip),this.addEventListener("mouseleave",this.hideTooltip),this.addEventListener("focus",this.showTooltip),this.addEventListener("blur",this.hideTooltip)):(this.removeEventListener("mouseenter",this.showTooltip),this.removeEventListener("mouseleave",this.hideTooltip),this.removeEventListener("focus",this.showTooltip),this.removeEventListener("blur",this.hideTooltip)))}removeTooltip(){this.tooltipElement=void 0,this.arrowElement=void 0,this.cleanupAutoUpdate&&(this.cleanupAutoUpdate(),this.cleanupAutoUpdate=void 0),this.removeEventListener("mouseenter",this.showTooltip),this.removeEventListener("mouseleave",this.hideTooltip),this.removeEventListener("focus",this.showTooltip),this.removeEventListener("blur",this.hideTooltip)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("click",this.handleClick),this.removeTooltip(),this.highlightTimeout&&(clearTimeout(this.highlightTimeout),this.highlightTimeout=void 0),this.classList.remove("highlight")}renderBadge(){return this.badge?qe`<span class="badge" style="background-color: ${this.badge}"></span>`:Ze}highlight(e){if(e<=0)return;this.highlightTimeout&&(clearTimeout(this.highlightTimeout),this.highlightTimeout=void 0),this.classList.add("highlight");const t=()=>{this.classList.remove("highlight"),this.highlightTimeout&&(clearTimeout(this.highlightTimeout),this.highlightTimeout=void 0),this.removeEventListener("mouseenter",t),this.removeEventListener("focus",t)};this.addEventListener("mouseenter",t),this.addEventListener("focus",t),this.highlightTimeout=window.setTimeout(t,e)}render(){let e=Ze;if(this.icon&&this.icon in La){const t=La[this.icon];"function"==typeof t[this.iconStyle]&&(e=t[this.iconStyle]("btn-icon"))}let t=Ze;return this.tooltip&&(t=qe`
                <div
                    class="thermal-tooltip"
                    style="position: absolute; top: 0; left: 0; visibility: hidden; opacity: 0; transition: opacity 0.2s ease-in-out;"
                    @mouseenter=${this.showTooltip}
                    @mouseleave=${this.hideTooltip}
                    @focus=${this.showTooltip}
                    @blur=${this.hideTooltip}
                    ${Yt(e=>{this.tooltipElement=e})}
                >
                    ${this.tooltip}
                    <div class="thermal-tooltip-arrow" ${Yt(e=>{this.arrowElement=e})}></div>
                </div>
            `),qe`
            ${Qt(e)}${this.pre?qe`<span class="prefix">${this.pre}</span>`:Ze}<slot></slot>
            ${t}
            ${this.renderBadge()}
        `}};Ul.styles=ce`

        :host {

            font-family: var( --thermal-font-family );
            font-size: calc( var( --thermal-fs ) * .8);
            line-height: var( --thermal-line-height );
        
            --color: var( --thermal-foreground );
            --color-hover: var( --color );

            --bg: var( --thermal-slate-light );
            --bg-hover: var( --bg );

            --border-width: var(--thermal-border-width);
            --border-style: var(--thermal-border-style);
            --border-color: var( --thermal-slate );
            --border-color-hover: var( --border-color );

            --radius: var(--thermal-radius);
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
            
            --padding: .5em .7em;
            --icon-size: 1em;
            --gap: .5em;
            --opacity: 1;
            --letter-spacing: normal;

            --cursor: pointer;
            --transition-duration: .15s;

            --tooltip-bg: var(--thermal-foreground, black);
            --tooltip-color: var( --thermal-background, white);
            --tooltip-padding: 0.5em 0.75em;
            --tooltip-border-radius: var(--thermal-radius, 4px);
            --tooltip-font-size: 0.9em;
            --tooltip-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        }



        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 0;
            gap: var(--gap);
            vertical-align: middle;
            
            position: relative;

            margin: 0;
            padding: var(--padding);
            width: fit-content;
            box-sizing: border-box;

            border-width: var( --border-width );
            border-style: var( --border-style );
            border-color: var( --border-color );
            border-radius: var( --radius );
            
            background-color: var(--bg);
            color: var(--color);

            box-shadow: var( --shadow ); 
            
            cursor: var( --cursor );
            opacity: var( --opacity );
            
            --letter-spacing: var( --letter-spacing );
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;

            transition: all var(--transition-duration) ease-in-out;

            /* Focus styling */
            outline: none;

            
        }

        :host([align="left"]) {
            justify-content: flex-start;
        }


        :host(:focus),
        :host(:focus-visible),
        :host(:hover) {
            outline: none;
            box-shadow: var( --shadow-hover );
            background-color: var(--bg-hover);
            color: var(--color-hover);
            border-color: var( --border-color-hover );
        }

        svg,
        span {
            vertical-align: middle;
            display: inline-block;
        }



        :host([disabled=true]),
        :host([disabled="true"])
        :host([disabled="true"]:hover),
        :host([disabled="true"]:focus) {

            
            color: color-mix(in srgb, var(--color) 50%, transparent);
            background: color-mix(in srgb, var(--bg) 50%, transparent);
            border-color: color-mix(in srgb, var(--border-color) 50%, transparent);
            --cursor: not-allowed;
            --shadow: none;
            --shadow-hover: none;

            button {
                outline: 0 !important;
                pointer-events: none;
            }
        }


        :host([interactive="false"]),
        :host([interactive=false]),
        :host([interactive="false"]:hover),
        :host([interactive=false]:hover),
        :host([interactive="false"]:focus),
        :host([interactive=false]:focus) {
            --shadow-hover: none;
            --cursor: text;
            --color-hover: var( --color );
            --bg-hover: var( --bg );
        }





        :host([size="sm"]),
        :host([size=sm]) {
            --padding: .1em .2em;
            line-height: 1.2;
            --letter-spacing: 0.5px;
            font-size: .7em;
        }

        :host([size="lg"]),
        :host([size=lg]) {
            --padding: .5em .7em;
            line-height: 1.2;
            font-size: 1em;
        }

        :host([size="xl"]),
        :host([size=xl]) {
            line-height: 1.2;
            font-size: 2em;
        }

        :host([plain="true"]),
        :host([plain=true]) {
            --border-color: transparent;
            --border-color-hover: transparent;
            --border-width: 0px;
            border: none !important;
        }







        :host([variant="primary"]),
        :host([variant=primary]) {
            
            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-primary );
            --bg-hover: var( --thermal-primary-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );

        }

        :host([variant="foreground"]),
        :host([variant=foreground]) {

            --color: var( --thermal-background );
            --color-hover: var( --thermal-background );
            
            --bg: var( --thermal-foreground );
            --bg-hover: var( --thermal-slate-dark );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }


        :host([variant="background"]),
        :host([variant=background]) {

            --color: var( --thermal-foreground );
            --color-hover: var( --thermal-foreground );
            
            --bg: var( --thermal-background );
            --bg-hover: var( --bg );

            --border-color: var( --thermal-slate );
            
            --shadow: none;
            --shadow-hover: var( --thermal-shadow );
        }



        :host([variant="text"]),
        :host([variant=text]) {

            --bg: transparent;
            --bg-hover: transparent;

            --border-color: transparent;
            --border-color-hover: transparent;

            --border-width: 0px;
            border: none !important;

            --shadow: none;
            --shadow-hover: none;

            --padding: 0px;
            --letter-spacing: normal;
        }

        



        .btn-icon {
            width: 1.3em;
        }


        /* Global tooltip styles */

        .thermal-tooltip {
            background-color: var(--tooltip-bg, #334155);
            color: var(--tooltip-color, white);
            padding: var(--tooltip-padding, 0.5em 0.75em);
            border-radius: var(--tooltip-border-radius, 4px);
            font-size: var(--tooltip-font-size, 1em);
            box-shadow: var(--tooltip-box-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
            z-index: 9999;
            pointer-events: none;
            word-wrap: break-word;
            font-size: calc( var( --thermal-fs ) * 0.8 );
        }

        .thermal-tooltip-arrow {
            position: absolute;
            width: 8px;
            height: 8px;
            background: inherit;
            transform: rotate(45deg);
        }

        .prefix {
            font-weight: bold;
            padding-right: 0.25em;
        }

        .badge {
            position: absolute;
            top: 0;
            right: 0;
            width: .5em;
            height: .5em;
            background: red;
            border-radius: 50%;
        }

        /* highlight animation for attention-grabbing effect */
        @keyframes thermal-highlight {
            0%,100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        :host(.highlight) {
            animation: thermal-highlight 0.4s ease-in-out infinite;
            box-shadow: var(--thermal-shadow);
        }

    `;let zl=Ul;Il([vt({type:String,attribute:"tooltip-placement"})],zl.prototype,"tooltipPlacement"),Il([vt({type:String})],zl.prototype,"pre"),Il([vt({type:String,attribute:!0,reflect:!0})],zl.prototype,"variant"),Il([vt({type:String,attribute:!0,reflect:!0})],zl.prototype,"size"),Il([vt({type:String})],zl.prototype,"icon"),Il([vt({type:String})],zl.prototype,"iconStyle"),Il([vt({type:String,converter:Pa(!1)})],zl.prototype,"disabled"),Il([vt({type:String,converter:Pa(!1)})],zl.prototype,"interactive"),Il([vt({type:Boolean,attribute:!0})],zl.prototype,"plain"),Il([vt({type:String})],zl.prototype,"tooltip"),Il([vt({type:Number,reflect:!0})],zl.prototype,"tabindex"),Il([vt({type:String,attribute:"badge",reflect:!0})],zl.prototype,"badge"),Il([vt({type:String,reflect:!0})],zl.prototype,"align");var Fl=Object.defineProperty,Bl=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Fl(t,i,o),o};const Nl=class extends ut{constructor(){super(...arguments),this.button=se(li.close),this.dialogRef=Wt(),this.closeButtonRef=Wt(),this.invokerRef=Wt(),this.isFullscreen=!1,this._open=!1}get open(){return this._open}setClose(){this.dialogRef.value?.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height"),this.removeAttribute("open"),this._open=!1,this.onCloseEveryTime&&this.onCloseEveryTime()}setOpen(){this.dialogRef.value?.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh",this.setAttribute("open","true"),this._open=!0}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"open"===e){"true"===i?this.setOpen():this.setClose()}}connectedCallback(){super.connectedCallback()}render(){return qe`
            <slot name="invoker" ${Yt(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Yt(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Yt(this.closeButtonRef)} @click=${this.setClose}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                    </button>
                
                
                </header>
                	
                <div class="dialog-content">
                    ${this._open?qe`<slot name="content"></slot>`:Ze}
                </div>

                <div class="dialog-footer">
                    <slot name="button"></slot>
                    <thermal-btn variant="foreground" @click=${async()=>{if(this.beforeClose){await this.beforeClose()&&this.setClose()}else this.setClose()}}>
                        ${this.button}
                    </thermal-btn>
                </div>
                
            
            </dialog>
        `}async closeFromTheOutside(){if(this.beforeClose){await this.beforeClose()&&this.setClose()}else this.setClose()}};Nl.shadowRootOptions={...ut.shadowRootOptions,mode:"open"},Nl.styles=ce`

        :host {

            display: contents;

        }

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-style: var( --thermal-border-style );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: var(--thermal-border-width);
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(3px);
            }

            min-width: 150px;
            box-sizing: border-box;

            @media ( min-width: 300px ) {
                min-width: 250px;
            }

            @media ( min-width: 600px ) {
                min-width: 450px;
            }
        }

        .dialog-header {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between; 
        }

        .dialog-title {
            margin: 0;
            padding: 0;
        }

        .dialog-content {
            padding: var( --thermal-gap ) 0;
            white-space: normal;
        }

        .dialog-footer {

            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
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

        :host([is-fullscreen="true"][open]) .dialog {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;

            .dialog-content {
                overflow: auto;
            }
        }

        
    
    `;let jl=Nl;Bl([vt({type:String,reflect:!1})],jl.prototype,"button"),Bl([vt({type:Boolean,reflect:!0,converter:Pa(!1),attribute:"is-fullscreen"})],jl.prototype,"isFullscreen"),Bl([vt({type:String,reflect:!0})],jl.prototype,"label"),Bl([vt({type:Object})],jl.prototype,"beforeClose"),Bl([bt()],jl.prototype,"_open"),Bl([vt({type:Object})],jl.prototype,"onCloseEveryTime");const Vl=It(class extends Ut{constructor(e){if(super(e),e.type!==$t||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const e=!!t[r];e===this.st.has(r)||this.nt?.has(r)||(e?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Ye}});var Hl=Object.defineProperty,Wl=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Hl(t,i,o),o};const Gl=class extends pi{constructor(){super(...arguments),this.dropdownRef=Wt(),this.invokerRef=Wt(),this.optionsRef=Wt(),this.isOpen="close",this.interactive="on"}setOpen(){this.isOpen="open"}setClose(){this.isOpen="close"}toggle(){"off"!==this.interactive&&("open"===this.isOpen?this.isOpen="close":this.isOpen="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){this.invokerRef.value&&this.optionsRef.value&&Ol(this.invokerRef.value,this.optionsRef.value,{middleware:[Pl(2),Rl(),Dl(),$l()],placement:"bottom-start",strategy:"fixed"}).then(({x:e,y:t})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${e}px`,this.optionsRef.value.style.top=`${t}px`)})}updated(e){super.updated(e),e.has("isOpen")&&this.placeOptions()}firstUpdated(e){super.firstUpdated(e),this._options.forEach(e=>{e.childNodes.forEach(e=>e.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"isopen"===e&&("open"===i?(this.optionsRef.value?.classList.add("dropdown-options__show"),this.dropdownRef.value?.classList.add("dropdown__open")):(this.optionsRef.value?.classList.remove("dropdown-options__show"),this.dropdownRef.value?.classList.remove("dropdown__open")))}render(){const e={"dropdown-invoker":!0,may:"on"===this.interactive,mayNot:"off"===this.interactive},t="off"===this.interactive?"true":"false";return qe`

            <div class="dropdown" ${Yt(this.dropdownRef)}>
                <thermal-btn 
                    ${Yt(this.invokerRef)} 
                    class="${Vl(e)}" 
                    @click=${this.toggle.bind(this)} 
                    variant=${xt(this.variant)}
                    size=${xt(this.size)}
                    ?plain=${this.plain}
                    disabled=${t}
                    tooltip="${void 0!==this.tooltip?this.tooltip:""}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">
                        ${"close"===this.isOpen?qe`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:qe`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-btn>
                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Yt(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        `}};Gl.shadowRootOptions={...ut.shadowRootOptions},Gl.styles=ce`

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }

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
            
            padding: 5px 10px;

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
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
            }
        }

        slot[name="option"]::slotted(*) {

            width: 100%;

            margin-top: 5px;
            margin-bottom: 5px;
            width: 100%;

        }


    
    `;let ql=Gl;Wl([wt({slot:"option"})],ql.prototype,"_options"),Wl([vt({type:String,reflect:!0})],ql.prototype,"isOpen"),Wl([vt({type:String,reflect:!0,attribute:!0})],ql.prototype,"interactive"),Wl([vt({type:String,reflect:!0})],ql.prototype,"variant"),Wl([vt({type:String,reflect:!0,attribute:!0})],ql.prototype,"size"),Wl([vt({type:String})],ql.prototype,"plain"),Wl([vt({type:String,attribute:!0})],ql.prototype,"tooltip");var Yl=Object.defineProperty;const Zl=class extends pi{render(){return qe`
            <div class="bg"></div>
            <div class="content">
                <div>Thermal Dropin Component</div>
            </div>
        `}};Zl.styles=ce`
    
        :host {
            display: block;
            box-sizing: border-box;

            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);

            

            border: var(--thermal-border-width) var(--thermal-slate)var(--thermal-border-style);
            border-radius: var(--thermal-radius);

            transition: all .5s ease-in-out;

            position: relative;
            overflow: hidden;

            cursor: pointer;
            
        }

        .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: all .3s ease-in-out;

            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
        }

        .content {
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            padding: var(--thermal-gap);
            box-sizing: border-box;
        }

        :host {
        
            &:hover,
            &:focus {
            
                .bg {
                    transform: scale(1.05);
                }
            
            }
        
        }

        :host(:hover),
        :host(:focus) {
        
            .bg {
                transform: scale(1.05);
            }

        
        }
    
    `;let Xl=Zl;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Yl(t,i,s)})([vt({type:String})],Xl.prototype,"prompt");var Kl=Object.defineProperty,Ql=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Kl(t,i,o),o};const Jl=class extends pi{constructor(){super(...arguments),this.closeIcon=!1,this.iconStyle="outline",this.expanded=!1}render(){const e=this.expanded&&this.variantExpanded?this.variantExpanded:this.variant;return qe`<thermal-btn
    .variant=${xt(e)}
    .size=${xt(this.size)}
    .icon=${xt(this.icon)}
    .iconStyle=${this.iconStyle}
    .disabled=${xt(this.disabled)}
    .plain=${xt(this.plain)}
    .tooltip=${xt(this.tooltip)}
    .interactive=${xt(this.interactive)}
    @click=${()=>this.expanded=!this.expanded}
>${xt(this.label)}${this.closeIcon&&this.expanded?qe`<thermal-icon
    icon="close"
    variant="micro"
></thermal-icon>`:Ze}</thermal-btn>
<aside class="content">
    <slot></slot>
</aside>
`}};Jl.styles=ce`
:host {
    --color: var(--thermal-foreground);
    --background: var(--thermal-slate-light);
    --font-size: var(--thermal-fs);
    --border-color: var(--thermal-slate);
    --border-radius: var(--thermal-radius);
    --display: block;
    --position: relative;
    --width: 100%;
    --padding: var(--thermal-gap);
    --spacing: var(--thermal-gap);
    --box-shadow: none;

    font-size: var(--font-size);
    color: var(--color);
}

aside.content {

    display: none;
    position: var(--position);

    box-sizing: border-box;
    width: var(--width);
    box-sizing: border-box;

    background: var(--background);
    border: var(--thermal-border-width) var(--thermal-border-style) var(--border-color);
    border-radius: var(--border-radius);
    padding: var(--padding);
    box-shadow: var(--box-shadow);

}

:host([expanded="true"]) aside.content {
    display: var(--display);
    margin-top: var(--spacing);
}

thermal-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
}
`;let eh=Jl;Ql([vt({type:String})],eh.prototype,"label"),Ql([vt({attribute:!0,reflect:!0,converter:Pa(!1)})],eh.prototype,"closeIcon"),Ql([vt({type:String,attribute:!0,reflect:!0})],eh.prototype,"variant"),Ql([vt({type:String,attribute:!0,reflect:!0})],eh.prototype,"variantExpanded"),Ql([vt({type:String,attribute:!0,reflect:!0})],eh.prototype,"size"),Ql([vt({type:String})],eh.prototype,"icon"),Ql([vt({type:String})],eh.prototype,"iconStyle"),Ql([vt({type:String,converter:Pa(!1)})],eh.prototype,"disabled"),Ql([vt({type:String,converter:Pa(!1)})],eh.prototype,"interactive"),Ql([vt({type:Boolean,attribute:!0})],eh.prototype,"plain"),Ql([vt({type:String})],eh.prototype,"tooltip"),Ql([vt({converter:Pa(!1),reflect:!0})],eh.prototype,"expanded");var th=Object.defineProperty,ih=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&th(t,i,o),o};const rh=class extends ut{render(){return qe`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&qe`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};rh.styles=ce`
    
        :host {

            display: table-row;
            width: 100%;
            font-size: var( --thermal-fs );

        }

        .cell {

            display: table-cell;
            padding: calc( var( --thermal-gap ) * .5 );
        
        }

        .label {

        }

        .content {

        }

        .hint {
            font-size: calc( var( --thermal-fs-sm ) * .75 );
            padding-top: .5em;
            opacity: .5;
            max-width: 300px;
        }

    `;let sh=rh;ih([vt({type:String})],sh.prototype,"label"),ih([vt({type:String})],sh.prototype,"hint");var oh=Object.defineProperty,ah=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&oh(t,i,o),o};class nh extends pi{connectedCallback(){super.connectedCallback(),this.updateIcon()}updated(e){super.updated(e),this.updateIcon()}updateIcon(){if(void 0!==this.icon&&""!==this.icon.trim()&&void 0!==this.variant&&""!==this.variant.trim()){const e=!(!this.icon||""===this.icon.trim())&&this.icon,t=La[e];if(t&&this.variant in t){const e=t[this.variant];this.element=e(this.classes,this.css)}}else this.element=void 0}render(){return this.element?qe`${Qt(this.element)}`:Ze}}ah([vt({type:String,reflect:!0})],nh.prototype,"icon"),ah([vt({type:String,reflect:!0})],nh.prototype,"variant"),ah([vt({type:String,reflect:!0})],nh.prototype,"classes"),ah([vt({type:String,reflect:!0})],nh.prototype,"css");var lh=Object.defineProperty,hh=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&lh(t,i,o),o};const ch=class extends pi{constructor(){super(...arguments),this.loaded=!1,this.loading=!0,this.bordercolor="var(--thermal-slate)",this.bgcolor="var(--thermal-slate-light)",this.textcolor="var(--thermal-slate-dark)"}updated(e){super.updated(e),this.style.borderColor=this.bordercolor,this.style.backgroundColor=this.bgcolor,this.style.color=this.textcolor}render(){const e=[];return this.loading?e.push(qe`<thermal-spinner style="display: block"></thermal-spinner>`):(e.push(qe`<thermal-icon icon="${this.icon}" variant="${this.iconStyle}" style="height: 2em; aspect-ratio: 1 / 1; display: block;"></thermal-icon>`),this.message&&e.push(qe`<div>${this.message}</div>`)),e.push(qe`<slot></slot>`),e}};ch.styles=ce`
    
        :host {
            font-size: var(--thermal-fs);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .5em;
            width: 100%;
            min-height: 300px;

            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            box-sizing: border-box;
            padding: var(--thermal-gap);
            color: var(--thermal-slate-dark);
            background: var(--thermal-slate-light);
            
        }
    
    `;let dh=ch;hh([bt()],dh.prototype,"loaded"),hh([vt({type:Boolean,reflect:!0})],dh.prototype,"loading"),hh([vt({type:String})],dh.prototype,"icon"),hh([vt({type:String})],dh.prototype,"iconStyle"),hh([vt({type:String})],dh.prototype,"message"),hh([vt({type:String})],dh.prototype,"bordercolor"),hh([vt({type:String})],dh.prototype,"bgcolor"),hh([vt({type:String})],dh.prototype,"textcolor");var ph=Object.defineProperty,uh=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&ph(t,i,o),o};const mh=class extends pi{constructor(){super(...arguments),this.type="radio",this.checked=!1}handleChange(e){const t=e.target;this.checked=t.checked,this.onChange&&this.onChange(this.checked),this.requestUpdate()}updated(e){if(e.has("checked")){const e=this.shadowRoot?.querySelector("input");e&&(e.checked=this.checked)}}handleClick(e){e.preventDefault(),this.checked=!this.checked,this.onChange&&this.onChange(this.checked),this.requestUpdate()}connectedCallback(){super.connectedCallback()}render(){return qe`
            <label class="radio" @click=${this.handleClick}>
                <input
                    type="${this.type}"
                    checked="${this.checked}"
                />
                <span><slot></slot></span>
            </label>
        `}};mh.styles=ce`
    
        :host {
            display: contents;
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        .radio {

            display: flex;
            align-items: center;
            gap: .25em;

            cursor: pointer;

            input,
            span {
                display: block;
            }

            span {
                font-size: .8em;
            }

            input[type="radio"] {
                transform: translateY(-.15em);
                pointer-events: none;
            }
        }

        input {    
            pointer-events: none;
        }
    
    `;let gh=mh;uh([vt({type:String,reflect:!0})],gh.prototype,"type"),uh([vt({type:Boolean,reflect:!0})],gh.prototype,"checked"),uh([vt({type:Function})],gh.prototype,"onChange");var fh=Object.defineProperty,yh=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&fh(t,i,o),o};const vh=class extends pi{constructor(){super(...arguments),this._slottedElements=[]}get slottedElements(){return Array.from(this.children)}handleSlotChange(e){const t=e.target;this._slottedElements=t.assignedElements(),this.requestUpdate()}render(){return 0===this.slottedElements.length?Ze:qe`<section>

            ${this.label?qe`<h3>${this.label}</h3>`:Ze}
            <div class="content">
                <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
        </section>
        `}};vh.styles=ce`

        :host {
            font-size: var( --thermal-fs );
        }
    
        h3 {

            margin: 0 0 .5em 0;
            padding: 0;
            
            font-weight: normal;
            font-size: .7em;
            text-transform: uppercase;

            color: var(--thermal-slate);
            
            display: flex;
            align-items: center;
            gap: .5em;

            &::after {
                content: "";
                flex: 1;
                height: var(--thermal-border-width);
                background: var(--thermal-slate-light);
            }

        }

        .content {
            display: flex;
            flex-wrap: wrap;
            gap: .5em;
        }

        :host(:hover) {
            h3 {
                color: var(--thermal-foreground);
                &::after {
                    background: var(--thermal-slate);
                }
            }


        }
    
    `;let bh=vh;yh([vt()],bh.prototype,"label"),yh([bt()],bh.prototype,"_slottedElements");var wh=Object.defineProperty,xh=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&wh(t,i,o),o};const Sh=class extends pi{constructor(){super(...arguments),this.color="var(--thermal-primary)"}render(){return qe`
            <div class="spinner" style="border-color: ${this.color}; border-top-color: transparent;"></div>
            ${this.message?qe`<div class="message">${this.message}</div>`:Ze}
        `}};Sh.shadowRootOptions={...ut.shadowRootOptions,mode:"open"},Sh.styles=ce`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            text-align: center;
        }
        .spinner {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 5px solid var(--thermal-primary);
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .message {
            margin-top: var(--thermal-gap);
            color: var(--thermal-slate-dark);
        }
    `;let kh=Sh;xh([vt({type:String})],kh.prototype,"message"),xh([vt({type:String})],kh.prototype,"color");var Ch=Object.defineProperty,Eh=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Ch(t,i,o),o};const Th=class extends pi{constructor(){super(...arguments),this.icon="bulb",this.iconStyle="outline"}render(){return qe`<thermal-icon 
    icon=${this.icon} 
    variant=${this.iconStyle}
></thermal-icon>
<div class="tip-content">
    <slot></slot>
</div>`}};Th.styles=ce`
:host {

    --color: var(--thermal-foreground);
    --background: var(--thermal-slate-light);
    --font-size: var(--thermal-fs);
    --border-color: var(--thermal-slate);
    --icon-size: 1.5em;
    --radius: var(--thermal-radius);
    --padding: .5em;
    --spacing: var(--thermal-gap);
    --align-items: flex-start;

    font-size: var(--font-size);
    color: var(--color);
    background: var(--background);
    
    border: var(--thermal-border-width) var(--thermal-border-style) var(--border-color);
    border-radius: var(--radius);

    width: 100%;
    box-sizing: border-box;
    padding: var(--padding);

    display: flex;
    align-items: var(--align-items);
    gap: var(--spacing);

}

thermal-icon {
    display: block;
    width: var(--icon-size);
    height: var(--icon-size);
    color: var(--border-color);
}

:host( [variant="info"] ) {
    --background: #bed5fdff;
    --color: #0e46a1;
    --border-color: var(--color);
}

:host([variant="error"]) {
    --background: #e2b1b1ff;
    --color: #a10e0e;
    --border-color: var(--color);
}
`;let _h=Th;Eh([vt({type:String})],_h.prototype,"icon"),Eh([vt({type:String})],_h.prototype,"iconStyle");const Ah={reflect:!1,state:!0};class Ph extends vi{_getDefaultSlugFromHost(e){return this.host.getAttribute(e)??this.host.getAttribute("slug")??this.UUID}}const $h="group-controller-context",Rh=class extends Ph{get UUID(){return this._UUID}get groupObject(){return this.host.groupObject}get slug(){return this.host.groupSlug}get autoclearGroup(){return this.host.autoclearGroup}constructor(e){super(e),this._UUID=e.UUID+"_group-controller",this.groupControllerContextProvider=new c(this.host,{context:$h,initialValue:this}),this.groupObjectContextProvider=new c(this.host,{context:"group-instance"})}hostConnected(){const e=this._getDefaultSlugFromHost("group-slug");this.host.groupSlug=e,this.host.groupObject=this.host.registryController.addOrGetGroup(e),this.groupObjectContextProvider.setValue(this.host.groupObject),this.log(this.host.groupObject)}hostDisconnected(){this.autoclearGroup&&this.host.groupObject&&this.host.registryController.removeGroup(this.host.groupObject)}hostUpdatedWatcher(e){}};Rh.HOST_PROPERTIES={managerController:Ah,registryController:Ah,groupSlug:{type:String,reflect:!0,attribute:"group-slug"},groupObject:Ah,autoclearGroup:{type:Boolean,reflect:!0,attribute:"autoclear-group",converter:Pa(!0)},groupController:Ah};let Lh=Rh;const Dh=new Ta;window.Thermal={managers:new Map},window.Thermal.managers.set("default",Dh);const Oh=(e,t)=>{if(void 0===e)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(e))return window.Thermal.managers.get(e);{const i=new Ta(void 0,t);return window.Thermal.managers.set(e,i),i}},Mh={fromAttribute:e=>null!=e&&"string"==typeof e&&""!==e&&e in Ko?e:"iron",toAttribute:e=>e},Ih="manager-controller-context",Uh=class extends Ph{get UUID(){return this._UUID}get slug(){return this.host.managerSlug}get managerObject(){return this.host.managerObject}get palette(){return this.host.palette}get smoothThermograms(){return this.host.smoothThermograms}get tool(){return this.host.tool}get toolObject(){return this.managerObject.tool.value}get smoothGraph(){return this.host.smoothGraph}constructor(e){super(e),this._UUID=e.UUID+"_manager-controller",this.managerControllerContextProvider=new c(this.host,{context:Ih,initialValue:this}),this.managerObjectContextPtovider=new c(this.host,{context:"manager-instance"}),this.paletteContextProvider=new c(this.host,{context:Qa}),this.advancedPalettesContextProvider=new c(this.host,{context:"manager-advanced-palettes-context"}),this.smoothThermogramsContextProvider=new c(this.host,{context:Ja}),this.toolContextProvider=new c(this.host,{context:tn}),this.smoothGraphContextProvider=new c(this.host,{context:en})}hostConnected(){const e=this._getDefaultSlugFromHost("manager-slug");this.host.managerSlug=e,this.host.managerObject=Oh(e),this.managerObjectContextPtovider.setValue(this.host.managerObject);const t=Mh.fromAttribute(this.host.palette);this.setPalette(t),this.managerObject.palette.addListener(this.UUID,this.setPalette.bind(this)),this.setAdvancedPalettes(this.host.advancedPalettes),this.setSmoothThermograms(this.host.smoothThermograms),this.managerObject.smooth.addListener(this.UUID,this.setSmoothThermograms.bind(this)),this.setSmoothGraph(this.host.smoothGraph),this.managerObject.graphSmooth.addListener(this.UUID,this.setSmoothGraph.bind(this)),this._setToolByKey(this.host.tool),this.managerObject.tool.addListener(this.UUID,this.setTool.bind(this))}hostDisconnected(){this.managerObject.palette.removeListener(this.UUID),this.managerObject.smooth.removeListener(this.UUID),this.managerObject.graphSmooth.removeListener(this.UUID),this.managerObject.tool.removeListener(this.UUID)}hostUpdate(){this.host.palette&&this.host.palette!==this.managerObject.palette.value&&this.setPalette(this.host.palette),this.host.advancedPalettes&&this.host.advancedPalettes!==this.advancedPalettesContextProvider.value&&this.setAdvancedPalettes(this.host.advancedPalettes)}hostUpdatedWatcher(e){e&&(e.has("palette")&&this.setPalette(this.host.palette),e.has("advancedPalettes")&&this.setAdvancedPalettes(this.host.advancedPalettes),e.has("smoothThermograms")&&this.setSmoothThermograms(this.host.smoothThermograms),e.has("smoothGraph")&&this.setSmoothGraph(this.host.smoothGraph),e.has("tool")&&this._setToolByKey(this.host.tool))}createRegistry(e){return this.managerObject.addOrGetRegistry(e)}_paletteStringToContextValue(e){return{key:e,data:Ko[e]}}setAdvancedPalettes(e){this.host.advancedPalettes!==e&&(this.host.advancedPalettes=e),this.advancedPalettesContextProvider.value!==e&&this.advancedPalettesContextProvider.setValue(e)}setPalette(e){const t=Mh.fromAttribute(e);this.managerObject.palette.value!==t&&this.managerObject.palette.setPalette(t),this.paletteContextProvider.value?this.paletteContextProvider.value.key!==t&&this.paletteContextProvider.setValue(this._paletteStringToContextValue(t)):this.paletteContextProvider.setValue(this._paletteStringToContextValue(t)),this.host.palette!==t&&(this.host.palette=t)}setSmoothThermograms(e){this.host.smoothThermograms!==e&&(this.host.smoothThermograms=e),this.smoothThermogramsContextProvider.value!==e&&this.smoothThermogramsContextProvider.setValue(e),this.managerObject.smooth.value!==e&&this.managerObject.smooth.setSmooth(e)}setTool(e){e&&e.key!==this.host.tool&&(this.host.tool=e.key),this.toolContextProvider.value!==e&&this.toolContextProvider.setValue(e),this.managerObject.tool.value!==e&&this.managerObject.tool.selectTool(e)}_setToolByKey(e){const t=this._toolStringToObject(e);this.setTool(t)}_toolStringToObject(e="inspect"){const t=this.managerObject.tool.tools[e];return t||this.managerObject.tool.tools.inspect,t}setSmoothGraph(e){this.host.smoothGraph!==e&&(this.host.smoothGraph=e),this.smoothGraphContextProvider.value!==e&&this.smoothGraphContextProvider.setValue(e)}};Uh.HOST_PROPERTIES={managerSlug:{type:String,reflect:!1,attribute:"manager-slug"},managerObject:Ah,managerController:Ah,palette:{type:String,reflect:!0,attribute:"palette",converter:Mh},advancedPalettes:{reflect:!0,attribute:"advanced-palettes",converter:Pa(!1)},smoothThermograms:{reflect:!0,attribute:"smooth-thermograms",converter:Pa(!1)},smoothGraph:{reflect:!0,attribute:"smooth-graph",converter:Pa(!1)},tool:{type:String,reflect:!0,attribute:"tool"}};let zh=Uh;var Fh=Object.defineProperty;class Bh extends pi{get manager(){return this.managerController.managerObject}}((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Fh(t,i,s)})([p({context:Ih,subscribe:!0})],Bh.prototype,"managerController");const Nh="registry-controller-context",jh=class extends Ph{get UUID(){return this._UUID}get registryObject(){return this.host.registryObject}get slug(){return this.host.registrySlug}get opacity(){return this.host.opacity}get min(){return this.host.min}get max(){return this.host.max}get from(){return this.host.from}get to(){return this.host.to}get loading(){return this.host.loading}constructor(e){super(e),this._UUID=e.UUID+"_registry-controller",this.registryControllerContextProvider=new c(this.host,{context:Nh,initialValue:this}),this.registryObjectContextProvider=new c(this.host,{context:"registry-instance"}),this.opacityContextProvider=new c(this.host,{context:Ha}),this.minContextProvider=new c(this.host,{context:Ya}),this.maxContextProvider=new c(this.host,{context:Za}),this.fromContextProvider=new c(this.host,{context:Wa}),this.toContextProvider=new c(this.host,{context:Ga}),this.loadingContextProvider=new c(this.host,{context:qa}),this.highlightContextProvider=new c(this.host,{context:Xa})}hostConnected(){const e=this._getDefaultSlugFromHost("registry-slug");this.host.registrySlug=e,this.host.registryObject=this.host.managerController.createRegistry(e),this.registryObjectContextProvider.setValue(this.host.registryObject),this.setOpacity(this.host.opacity??1),this.registryObject.opacity.addListener(this.UUID,this.setOpacity.bind(this)),this.registryObject.minmax.addListener(this.UUID,e=>{void 0===e?(this.host.min=void 0,this.host.max=void 0,this.minContextProvider.setValue(void 0),this.maxContextProvider.setValue(void 0)):(e.min!==this.host.min&&(this.host.min=e.min),e.max!==this.host.max&&(this.host.max=e.max),e.min!==this.minContextProvider.value&&this.minContextProvider.setValue(e.min),e.max!==this.maxContextProvider.value&&this.maxContextProvider.setValue(e.max))}),this.registryObject.range.addListener(this.UUID,this._rangeListener.bind(this)),this.registryObject.loading.addListener(this.UUID,this._loadingListener.bind(this))}hostDisconnected(){this.registryObject.opacity.removeListener(this.UUID),this.registryObject.minmax.removeListener(this.UUID),this.registryObject.range.removeListener(this.UUID),this.registryObject.loading.removeListener(this.UUID)}hostUpdatedWatcher(e){e.has("opacity")&&this.setOpacity(this.host.opacity??1),(e.has("from")||e.has("to"))&&(void 0===this.host.from||void 0===this.host.to?this._clearRange():this.setRange(this.host.from,this.host.to))}addOrGetGroup(e){return this.registryObject.groups.addOrGetGroup(e)}removeGroup(e){this.registryObject.groups.removeGroup(e.id)}setOpacity(e){const t=isNaN(e)?1:Math.max(0,Math.min(1,e));this.host.opacity!==t&&(this.host.opacity=t),this.registryObject.opacity.value!==t&&this.registryObject.opacity.imposeOpacity(t),this.opacityContextProvider.value!==t&&this.opacityContextProvider.setValue(t)}setRange(e,t){void 0!==this.registryObject.range.value&&this.registryObject.range.value.from===e&&this.registryObject.range.value.to===t||this.registryObject.range.imposeRange({from:e,to:t});const i=this.registryObject.range.value;void 0===i?this._clearRange():(this.host.from=i.from,this.host.to=i.to,this.fromContextProvider.setValue(i.from),this.toContextProvider.setValue(i.to))}setRangeFull(){void 0!==this.host.min&&void 0!==this.host.max&&this.setRange(this.host.min,this.host.max)}_rangeListener(e){void 0!==e?this.setRange(e.from,e.to):this._clearRange()}_clearRange(){this.host.from=void 0,this.host.to=void 0,this.fromContextProvider.setValue(void 0),this.toContextProvider.setValue(void 0)}_loadingListener(e){e!==this.host.loading&&(this.host.loading=e),e!==this.loadingContextProvider.value&&this.loadingContextProvider.setValue(e)}setHighlight(e){this.highlightContextProvider.value!==e&&this.highlightContextProvider.setValue(e)}};jh.HOST_PROPERTIES={managerController:Ah,registrySlug:{type:String,reflect:!1,attribute:"registry-slug"},registryObject:Ah,registryController:Ah,opacity:{type:Number,reflect:!0,attribute:"opacity"},min:{type:Number,reflect:!1,state:!0},max:{type:Number,reflect:!1,state:!0},from:{type:Number,reflect:!0,attribute:"from"},to:{type:Number,reflect:!0,attribute:"to"},loading:{type:Boolean,attribute:"is-loading",reflect:!0}};let Vh=jh;var Hh=Object.defineProperty;class Wh extends Bh{get registry(){return this.registryController.registryObject}}((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Hh(t,i,s)})([p({context:Nh,subscribe:!0})],Wh.prototype,"registryController");var Gh=Object.defineProperty;class qh extends Wh{get group(){return this.groupController.groupObject}}((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Gh(t,i,s)})([p({context:$h,subscribe:!0})],qh.prototype,"groupController");class Yh{constructor(e,t){this._controller=e,this._slotNumber=t,this._attribute=`analysis${this._slotNumber}`}static normalize(e){return e?.trim()||void 0}get UUID_LISTENER(){return this._controller.UUID+"_"+this._attribute}get _attributeValue(){return this._controller.host[this._attribute]}set _attributeValue(e){e!==this._controller.host[this._attribute]&&(this._controller.host[this._attribute]=e)}get _mountKey(){return`${this._controller.UUID}_slot_${this._slotNumber}`}get _internalSerialized(){return this._slotObject?.serialized}get _slotObject(){return this._fileObject?.slots.getSlot(this._slotNumber)}fileAssigned(e,t=!1){this._fileObject=e,e.slots.getOnSerializeManager(this._slotNumber)?.set(this._controller.UUID,e=>{e!==this._attributeValue&&(this._attributeValue=e)});const i=()=>{const e=Yh.normalize(this._attributeValue);t||void 0===e?this._attributeValue=this._slotObject?.serialized:this._applyToCore(e)};e.dom?.built?i():e.onMount.set(this._mountKey,()=>{i()})}fileUnassigned(){this._fileObject?.slots.getOnSerializeManager(this._slotNumber)?.delete(this._controller.UUID),this._fileObject?.onMount.delete(this._mountKey),this._fileObject=void 0}handleHostUpdate(e){if(e.has(this._attribute)){const e=Yh.normalize(this._attributeValue);this._internalSerialized!==e&&this._fileObject?.dom?.built&&this._applyToCore(e)}}_applyToCore(e){const t=this._fileObject;if(!t)return;const i=this._slotObject;if(void 0===e)i&&t.slots.removeSlotAndAnalysis(this._slotNumber);else if(i){i.recieveSerialized(e);const r=t.dom?.canvasLayer?.getLayerRoot();r&&!r.contains(i.analysis.layerRoot)&&r.appendChild(i.analysis.layerRoot)}else t.slots.createAnalysisFromSerialized(e,this._slotNumber)?.setSelected()}}class Zh{constructor(e){this._controller=e,this._synchronisators=[];for(let t=1;t<=7;t++)this._synchronisators.push(new Yh(this._controller,t))}_forEach(e){for(const t of this._synchronisators)e(t)}handleHostUpdate(e){this._forEach(t=>t.handleHostUpdate(e))}handleFileAssigned(e,t=!1){this._forEach(i=>i.fileAssigned(e,t))}handleFileUnassigned(){this._forEach(e=>e.fileUnassigned())}}const Xh="file-controller-context",Kh={type:String,reflect:!0},Qh=class extends Ph{constructor(e){super(e),this.onLoadingStart=new xs,this.onSuccess=new xs,this.onFailure=new xs,this._analysisSynchronisators=new Zh(this),this._UUID=e.UUID+"_file-controller",this.fileControllerContextProvider=new c(this.host,{context:Xh,initialValue:this}),this.fileContextProvider=new c(this.host,{context:Da}),this.fileFailureContextProvider=new c(this.host,{context:Oa}),this.readyContextProvider=new c(this.host,{context:"file-ready-context",initialValue:!1}),this.fileDurationContextProvider=new c(this.host,{context:Fa}),this.fileCurrentFrameContextProvider=new c(this.host,{context:za}),this.fileCursorContextProvider=new c(this.host,{context:Ia}),this.fileMsContextProvider=new c(this.host,{context:"file-ms-context"}),this.filePlaybackSpeedContextProvider=new c(this.host,{context:Na}),this.filePlayingContextProvider=new c(this.host,{context:Ba}),this.fileRecordingContextProvider=new c(this.host,{context:ja}),this.fileMayStopContextProvider=new c(this.host,{context:Va}),this.fileAnalysesContextProvider=new c(this.host,{context:"analysislist"}),this._propagateHighlightCache=e=>this._propagateHighlight(),this._unpropagateHighlightCache=e=>this._unpropagateHighlight()}get UUID(){return this._UUID}get fileObject(){return this.host.file}get failure(){return this.host.failure}get ms(){return this.host.ms}get playbackSpeed(){return this.host.playbackSpeed}get analysis1(){return this.host.analysis1}get analysis2(){return this.host.analysis2}get analysis3(){return this.host.analysis3}get analysis4(){return this.host.analysis4}get analysis5(){return this.host.analysis5}get analysis6(){return this.host.analysis6}get analysis7(){return this.host.analysis7}get autoHighlight(){return this.host.autoHighlight}get ready(){return this.readyContextProvider.value}get recording(){return this.fileRecordingContextProvider.value}get playing(){return this.filePlayingContextProvider.value}get mayStop(){return this.fileMayStopContextProvider.value}get cursor(){return this.fileCursorContextProvider.value}get currentFrame(){return this.fileCurrentFrameContextProvider.value}get analyses(){return this.fileAnalysesContextProvider.value}get duration(){return this.fileDurationContextProvider.value}hostConnected(){this.host.addEventListener("mouseenter",this._propagateHighlightCache),this.host.addEventListener("focus",this._propagateHighlightCache),this.host.addEventListener("mouseleave",this._unpropagateHighlightCache),this.host.addEventListener("blur",this._unpropagateHighlightCache),this._attached&&(this._propagateContexts(this._attached),this._bindListeners(this._attached,!0))}hostDisconnected(){this.host.removeEventListener("mouseenter",this._propagateHighlightCache),this.host.removeEventListener("focus",this._propagateHighlightCache),this.host.removeEventListener("mouseleave",this._unpropagateHighlightCache),this.host.removeEventListener("blur",this._unpropagateHighlightCache),this._unpropagateHighlight(),this._attached&&this._unbindListeners(this._attached)}hostUpdatedWatcher(e){e.has("file")&&this._syncAssignment(),this._analysisSynchronisators.handleHostUpdate(e),e.has("ms")&&this.setMs(this.host.ms),e.has("playbackSpeed")&&this.host.file&&this.host.file.timeline.isSequence&&this.host.playbackSpeed!==this.host.file.timeline.playbackSpeed&&(this.host.file.timeline.playbackSpeed=this.host.playbackSpeed)}_propagateContexts(e){this.fileContextProvider.setValue(e),this.readyContextProvider.setValue(!0),this.fileDurationContextProvider.setValue({ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)}),this._propagateInstanceCurrentFrame(e),this._propagateInstanceAnalysesArray(e),this.fileMsContextProvider.setValue(e.timeline.currentMs),this.filePlaybackSpeedContextProvider.setValue(e.timeline.playbackSpeed),this.filePlayingContextProvider.setValue(e.timeline.isPlaying),this.fileMayStopContextProvider.setValue(e.recording.mayStop),this.fileRecordingContextProvider.setValue(e.recording.value)}_resetAllContexts(){this.readyContextProvider.setValue(!1),this.fileDurationContextProvider.setValue(void 0),this.fileCurrentFrameContextProvider.setValue(void 0),this.fileAnalysesContextProvider.setValue([]),this.fileContextProvider.setValue(void 0),this.fileRecordingContextProvider.setValue(!1),this.filePlayingContextProvider.setValue(!1),this.fileMayStopContextProvider.setValue(!0),this.fileMsContextProvider.setValue(0),this.fileCursorContextProvider.setValue(void 0)}_syncAssignment(){const e=this.host.file;if(e===this._attached)return;const t=this._attached;t&&this._detach(t),e?this._attach(e,void 0!==t):(this._resetAllContexts(),this.host.ms=0)}_attach(e,t){this._attached=e,this.fileContextProvider.setValue(e),this.host.failure=void 0,this.fileFailureContextProvider.setValue(void 0),void 0!==this.host.playbackSpeed&&(e.timeline.playbackSpeed=this.host.playbackSpeed),this._propagateContexts(e),this._bindListeners(e),!t&&this.host.ms>0&&e.timeline.isSequence?this.setMs(this.host.ms):this.host.ms=e.timeline.currentMs,this.onSuccess.call(e)}_detach(e){this._unbindListeners(e),this._unpropagateHighlight(),this._attached=void 0,e.unmountFromDom()}_bindListeners(e,t=!1){e.timeline.callbacksPlay.set(this.UUID,()=>{this.filePlayingContextProvider.setValue(!0)}),e.timeline.callbacksPause.set(this.UUID,()=>{this.filePlayingContextProvider.setValue(!1)}),e.timeline.callbacksStop?.set(this.UUID,()=>{this.filePlayingContextProvider.setValue(!1)}),e.timeline.callbacksEnd?.set(this.UUID,()=>{this.filePlayingContextProvider.setValue(!1)}),e.timeline.callbacksChangeFrame.set(this.UUID,t=>{const i={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute};this.fileCurrentFrameContextProvider.setValue(i),this.host.ms=t.relative,this.fileMsContextProvider.setValue(t.relative)}),e.timeline.callbackdPlaybackSpeed.set(this.UUID,e=>{this.host.playbackSpeed=e,this.filePlaybackSpeedContextProvider.setValue(e)}),e.recording.callbackMayStop.set(this.UUID,e=>{this.fileMayStopContextProvider.setValue(e)}),e.recording.addListener(this.UUID,e=>{this.fileRecordingContextProvider.setValue(e)}),e.analysis.addListener(this.UUID,e=>{this.fileAnalysesContextProvider.setValue(e)}),this._analysisSynchronisators.handleFileAssigned(e,t)}_unbindListeners(e){e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.recording.callbackMayStop?.delete(this.UUID),e.analysis.removeListener(this.UUID),this._analysisSynchronisators.handleFileUnassigned()}receiveInstance(e){this.host.file=e,this._syncAssignment()}removeInstance(){this.host.file=void 0,this._syncAssignment()}receiveFailure(e){this.removeInstance(),this.host.failure=e,this.fileFailureContextProvider.setValue(e),this.onFailure.call(e)}_propagateInstanceCurrentFrame(e){this.fileCurrentFrameContextProvider.setValue({ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute})}_propagateInstanceAnalysesArray(e){this.fileAnalysesContextProvider.setValue(e.analysis.layers.all)}setTimeCursor(e){e!==this.fileCursorContextProvider.value&&(this.host.requestUpdate(),this.fileCursorContextProvider.setValue(e))}setTimePercentage(e){const t=this._attached;if(!t?.timeline.isSequence)return;const i=Math.max(0,Math.min(e,100));i!==t.timeline.currentPercentage&&t.timeline.setValueByPercent(i)}play(){this._attached?.timeline.play()}stop(){this._attached?.timeline.stop()}pause(){this._attached?.timeline.pause()}setMs(e){const t=this._attached;if(!t?.timeline.isSequence)return;const i=Math.max(0,Math.min(e,t.timeline.duration));i!==t.timeline.currentMs&&t.timeline.setRelativeTime(i)}_propagateHighlight(){this.autoHighlight&&this.fileObject&&(this.host.setAttribute("is-highlight","true"),this.host.registryController.setHighlight({from:this.fileObject.min,to:this.fileObject.max}))}_unpropagateHighlight(){this.host.hasAttribute("is-highlight")&&(this.host.removeAttribute("is-highlight"),this.host.registryController.setHighlight(void 0))}startLoading(){this.onLoadingStart.call(),this.readyContextProvider.setValue(!1)}endLoading(){this.readyContextProvider.setValue(!0)}};Qh.HOST_PROPERTIES={managerController:Ah,registryController:Ah,groupController:Ah,fileController:Ah,file:Ah,failure:Ah,ms:{type:Number,reflect:!0,attribute:"ms"},playbackSpeed:{type:Number,reflect:!0,attribute:"speed"},analysis1:Kh,analysis2:Kh,analysis3:Kh,analysis4:Kh,analysis5:Kh,analysis6:Kh,analysis7:Kh,autoHighlight:{type:Boolean,reflect:!0,attribute:"autohighlight"}};let Jh=Qh;var ec=Object.defineProperty;const tc=class extends qh{constructor(){super(...arguments),this.fileController=new Jh(this),this.loading=!1,this.ready=!1,this.ms=0,this.playbackSpeed=1,this.recording=!1,this.playing=!1,this.analyses=[],this.autoHighlight=!1}updated(e){super.updated(e),this.fileController.hostUpdatedWatcher(e)}recieveInstance(e){this.fileController.receiveInstance(e)}removeInstance(e){this.fileController.removeInstance()}deleteFile(){this.file&&this.removeInstance(this.file)}render(){return qe`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};tc.properties={...Jh.HOST_PROPERTIES};let ic=tc;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&ec(t,i,s)})([d({context:Ma}),bt()],ic.prototype,"loading");const rc=class extends Wh{constructor(){super(...arguments),this.groupController=new Lh(this),this.autoclearGroup=!0}updated(e){super.updated(e),this.groupController.hostUpdatedWatcher(e)}render(){return qe`<slot></slot>`}};rc.properties={...Lh.HOST_PROPERTIES};let sc=rc;var oc=Object.defineProperty,ac=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&oc(t,i,o),o};const nc=class extends pi{constructor(){super(...arguments),this.managerController=new zh(this),this.palette="jet",this.advancedPalettes=!1,this.smoothThermograms=!1,this.smoothGraph=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),!0===this.autoclear&&void 0!==this.managerObject&&(e=>{let t;if(window.Thermal.managers.forEach((i,r)=>{i.id===e.id&&(t=r)}),console.log("removing",e),void 0!==t){console.log("found and removing",t);const e=window.Thermal.managers.get(t);e&&(e.forEveryRegistry(t=>e.removeRegistry(t.id)),window.Thermal.managers.delete(t))}})(this.managerObject)}willUpdate(e){super.willUpdate(e),this.log("Will update called with changed properties",e)}updated(e){super.updated(e),this.log("Updated called with changed properties",e),this.managerController.hostUpdatedWatcher(e)}render(){return qe`<slot></slot>`}};nc.properties={...zh.HOST_PROPERTIES};let lc=nc;ac([vt({type:String,reflect:!0})],lc.prototype,"palette"),ac([vt({type:Boolean,reflect:!0})],lc.prototype,"advancedPalettes"),ac([vt({type:String,reflect:!0})],lc.prototype,"smoothThermograms"),ac([vt({type:String,reflect:!0})],lc.prototype,"smoothGraph");var hc=Object.defineProperty;const cc=class extends Bh{constructor(){super(...arguments),this.registryController=new Vh(this),this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}disconnectedCallback(){super.disconnectedCallback(),!0===this.autoclear&&void 0!==this.registryObject&&this.manager.removeRegistry(this.registryObject.id)}updated(e){super.updated(e),this.registryController.hostUpdatedWatcher(e)}render(){return qe`<slot></slot>`}};cc.properties={...Vh.HOST_PROPERTIES};let dc=cc;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&hc(t,i,s)})([d({context:Ka})],dc.prototype,"setHighlight");var pc=Object.defineProperty,uc=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&pc(t,i,o),o};class mc extends qh{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}disconnectedCallback(){super.disconnectedCallback(),this.fileController&&(this.fileController.onSuccess.delete(this.UUID),this.fileController.onFailure.delete(this.UUID))}hookCallbacks(){if(!this.fileController)throw new Error("Tento komponent není v souboru!");this.fileController.onSuccess.set(this.UUID,e=>{this.onInstanceCreated(e),this.loading=!1}),this.fileController.onFailure.set(this.UUID,e=>{this.onFailure(e),this.loading=!1})}}uc([p({context:Xh,subscribe:!0})],mc.prototype,"fileController"),uc([p({context:Ma,subscribe:!0}),bt()],mc.prototype,"loading"),uc([p({context:Da,subscribe:!0}),bt()],mc.prototype,"file"),uc([p({context:Oa,subscribe:!0}),bt()],mc.prototype,"failure"),uc([p({context:ja,subscribe:!0}),bt()],mc.prototype,"recording");const gc="@labirthermal/webcomponents",fc="1.3.4";var yc=Object.getOwnPropertyDescriptor;let vc=class extends pi{render(){return qe`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-btn slot="invoker">About</thermal-btn>
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
                        <p>version ${fc}</p>
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
            </thermal-dialog>

        `}};vc.styles=ce`

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
    
    `,vc=((e,t,i,r)=>{for(var s,o=r>1?void 0:r?yc(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o})([gt("app-info-button")],vc);var bc=Object.defineProperty,wc=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&bc(t,i,o),o};const xc="advanced-palettes",Sc="advanced-palettes-setter";class kc extends pi{constructor(){super(...arguments),this.advancedPalettes=!1,this.setAdvancedPalettes=e=>{this.advancedPalettes=e}}}wc([vt({type:Boolean,reflect:!0,attribute:"advanced-palettes",converter:Pa(!1)}),d({context:xc})],kc.prototype,"advancedPalettes"),wc([d({context:Sc})],kc.prototype,"setAdvancedPalettes");var Cc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,Tc=(e,t,i,r)=>{for(var s,o=r>1?void 0:r?Ec(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r?s(t,i,o):s(o))||o);return r&&o&&Cc(t,i,o),o};let _c=class extends pi{constructor(){super(...arguments),this.advancedPalettes=!1,this.advancedPalettesSetter=()=>{}}render(){return qe`
        <thermal-field label="${se(li.colourpalette)}" hint="Zvolte, jaké chcete používat palety.">
            <thermal-btn 
                variant="${this.advancedPalettes?"default":"foreground"}"
                @click=${()=>this.advancedPalettesSetter(!1)}
                tooltip="IRON, JET, White hot, Black hot"
            >Základní</thermal-btn>
            <thermal-btn 
                variant="${this.advancedPalettes?"foreground":"default"}"
                @click=${()=>this.advancedPalettesSetter(!0)}
                tooltip="Všechny dostupné palety"
            >Pokročilé</thermal-btn>
        </thermal-field>
        <thermal-field label="${se(li.filerendering)}" hint="${se(li.filerenderinghint)}">
            <manager-image-smooth-switch></manager-image-smooth-switch>
        </thermal-field>
        <thermal-field label="${se(li.graphlines)}" hint="${se(li.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `}};_c.styles=ce`
    
        :host {
            display: contents;
        }
    
    `,Tc([p({context:xc,subscribe:!0}),bt()],_c.prototype,"advancedPalettes",2),Tc([p({context:Sc,subscribe:!0}),bt()],_c.prototype,"advancedPalettesSetter",2),_c=Tc([gt("display-panel")],_c);var Ac=Object.getOwnPropertyDescriptor;let Pc=class extends pi{render(){return qe`<thermal-dialog
            label="Nastavení aplikace"
        >
            <thermal-btn 
                slot="invoker"
                icon="settings"
                iconStyle="solid"
                tooltip=${this.t("config")}
            ></thermal-btn>

            <div slot="content">
                <manager-export-panel></manager-export-panel>
                <display-panel></display-panel>
            </div>
        </thermal-dialog>`}};Pc=((e,t,i,r)=>{for(var s,o=r>1?void 0:r?Ac(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o})([gt("config-dialog")],Pc);var $c=Object.defineProperty,Rc=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&$c(t,i,o),o};const Lc=class extends pi{constructor(){super(...arguments),this.withAnalyses=!0,this.managerController=new zh(this),this.advancedPalettes=!0,this.smoothThermograms=!1,this.smoothGraph=!1,this.tool="edit",this.registryController=new Vh(this),this.opacity=1,this.loading=!1,this.groupController=new Lh(this),this.autoclearGroup=!0,this.fileController=new Jh(this),this.ms=0,this.playbackSpeed=1,this.autoHighlight=!1,this._canRenderChildren=!1}getSlugManager(){return this._slugBase+"__copy-manager"}getSlugRegistry(){return this._slugBase+"__copy-registry"}getSlugGroup(){return this._slugBase+"__copy-group"}connectedCallback(){const e=this.originalFile,t=e.thermalUrl+"__"+this.UUID.substring(0,6);this._slugBase=t,this.setAttribute("manager-slug",this.getSlugManager()),this.setAttribute("group-slug",this.getSlugGroup()),this.setAttribute("registry-slug",this.getSlugRegistry()),this.palette=this.originalFile.group.registry.manager.palette.value,this.opacity=this.originalFile.group.registry.opacity.value,this.ms=e.timeline.currentMs,this.withAnalyses&&this.copyAnalysesFromParent(),super.connectedCallback(),this.originalFile.reader.createInstance(this.groupObject).then(t=>{if(!this.isConnected)return;this.registryObject.postLoadedProcessing(),this.fileController.receiveInstance(t);const i=e.group.registry.range.value;i&&this.registryObject?.range.imposeRange(i),this._canRenderChildren=!0})}disconnectedCallback(){super.disconnectedCallback(),this._canRenderChildren=!1,this.fileController.removeInstance(),this.registryController.removeGroup(this.groupObject),this.managerObject.removeRegistry(this.registryObject.id),window.Thermal.managers.delete(this.managerSlug)}copyAnalysesFromParent(){const e=this.originalFile.slots;this.analysis1=e.getSlot(1)?.serialized,this.analysis2=e.getSlot(2)?.serialized,this.analysis3=e.getSlot(3)?.serialized,this.analysis4=e.getSlot(4)?.serialized,this.analysis5=e.getSlot(5)?.serialized,this.analysis6=e.getSlot(6)?.serialized,this.analysis7=e.getSlot(7)?.serialized}clearAnalyses(){this.analysis1=void 0,this.analysis2=void 0,this.analysis3=void 0,this.analysis4=void 0,this.analysis5=void 0,this.analysis6=void 0,this.analysis7=void 0}updated(e){super.updated(e),e.has("withAnalyses")&&void 0!==e.get("withAnalyses")&&(this.withAnalyses?this.copyAnalysesFromParent():this.clearAnalyses()),this.managerController.hostUpdatedWatcher(e),this.registryController.hostUpdatedWatcher(e),this.groupController.hostUpdatedWatcher(e),this.fileController.hostUpdatedWatcher(e)}render(){return qe`${this._canRenderChildren?qe`<slot></slot>`:Ze}`}};Lc.properties={...zh.HOST_PROPERTIES,...Vh.HOST_PROPERTIES,...Lh.HOST_PROPERTIES,...Jh.HOST_PROPERTIES},Lc.styles=ce`
    
        :host,
        registry-provider,
        group-provider {
            display: contents;
        }

    `;let Dc=Lc;Rc([vt({type:Object,attribute:!1})],Dc.prototype,"originalFile"),Rc([vt({type:Boolean,attribute:!1})],Dc.prototype,"withAnalyses"),Rc([bt()],Dc.prototype,"_canRenderChildren");var Oc=Object.defineProperty,Mc=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Oc(t,i,o),o};class Ic extends ic{constructor(){super(...arguments),this.providedSelf=this}updated(e){if(super.updated(e),e.has("thermal")){const t=e.get("thermal");t&&(this.group.files.removeFile(t),this.file=void 0)}e.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}}Mc([d({context:"file-provider-element"})],Ic.prototype,"providedSelf"),Mc([d({context:Da}),vt()],Ic.prototype,"file"),Mc([vt({type:Boolean,converter:{fromAttribute:e=>"true"===e,toAttribute:e=>!0===e?"true":"false"}})],Ic.prototype,"batch"),Mc([vt({type:String})],Ic.prototype,"thermal"),Mc([vt({type:String})],Ic.prototype,"visible"),Mc([vt({type:String})],Ic.prototype,"analysis1"),Mc([vt({type:String})],Ic.prototype,"analysis2"),Mc([vt({type:String})],Ic.prototype,"analysis3"),Mc([vt({type:String})],Ic.prototype,"analysis4"),Mc([vt({type:String})],Ic.prototype,"analysis5"),Mc([vt({type:String})],Ic.prototype,"analysis6"),Mc([vt({type:String})],Ic.prototype,"analysis7");const Uc=class extends Ph{get UUID(){return this._UUID}get group(){return this.host.fileController.host.groupController.groupObject}get registry(){return this.group.registry}constructor(e){super(e),this._UUID=e.UUID}hostUpdatedWatcher(e){e.has("thermal")&&this.host.thermal&&this._load(this.host.thermal,this.host.visible)}hostConnected(){}hostDisconnected(){}async _load(e,t){this.host.fileController.fileObject&&this.group.files.removeFile(this.host.fileController.fileObject),this.host.fileController.startLoading();return this.registry.batch.request(e,t,this.group,async e=>{e instanceof _o?this.host.fileController.receiveInstance(e):e instanceof Os&&this.host.fileController.receiveFailure(e)})}};Uc.HOST_PROPERTIES={thermal:{type:String,reflect:!0,attribute:"thermal"},visible:{type:String,reflect:!0,attribute:"visible"}};let zc=Uc;var Fc=Object.defineProperty,Bc=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Fc(t,i,o),o};class Nc extends lc{constructor(){super(...arguments),this.autoclear=!1}}Bc([vt({type:String,reflect:!0,attribute:!0})],Nc.prototype,"slug"),Bc([vt({type:Boolean,reflect:!0})],Nc.prototype,"autoclear");var jc=Object.defineProperty,Vc=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&jc(t,i,o),o};const Hc="pngExportWidthContext",Wc="pngExportWidthSetterContext",Gc="png-export-width-context",qc="png-export-width-setter-context",Yc="pngExportAnalysisContext",Zc="pngExportAnalysisSetterContext",Xc="pngExportScaleContext",Kc="pngExportScaleSetterContext",Qc="pngExportFileNameContext",Jc="pngExportFileNameSetterContext",ed="pngExportFileDateContext",td="pngExportFileDateSetterContext",id="pngExportLicenseContext",rd="pngExportLicenseSetterContext",sd="pngExportColumnsContext",od="pngExportColumnsSetterContext",ad="pngExportGroupNameContext",nd="pngExportGroupNameSetterContext";class ld extends kc{constructor(){super(...arguments),this.pngWidth=1200,this.pngWidthSetter=e=>{this.pngWidth=e},this.pngFs=20,this.pngFsSetter=e=>{this.pngFs=e},this.pngAnalyses=!0,this.pngExportAnalysesSetter=e=>this.pngAnalyses=e,this.pngExportScale=!0,this.pngExportScaleSetter=e=>this.pngExportScale=e,this.pngExportLicense=!0,this.pngExportLicenseSetter=e=>this.pngExportLicense=e,this.pngExportFileName=!1,this.pngExportFileNameSetter=e=>this.pngExportFileName=e,this.pngExportFileDate=!0,this.pngExportFileDateSetter=e=>this.pngExportFileDate=e,this.pngExportColumns=2,this.pngExportColumnsSetter=e=>this.pngExportColumns=e,this.pngExportGroupName=!0,this.pngExportGroupNameSetter=e=>this.pngExportGroupName=e}}Vc([d({context:Hc})],ld.prototype,"pngWidth"),Vc([d({context:Wc})],ld.prototype,"pngWidthSetter"),Vc([d({context:Gc})],ld.prototype,"pngFs"),Vc([d({context:qc})],ld.prototype,"pngFsSetter"),Vc([d({context:Yc})],ld.prototype,"pngAnalyses"),Vc([d({context:Zc})],ld.prototype,"pngExportAnalysesSetter"),Vc([d({context:Xc})],ld.prototype,"pngExportScale"),Vc([d({context:Kc})],ld.prototype,"pngExportScaleSetter"),Vc([d({context:id})],ld.prototype,"pngExportLicense"),Vc([d({context:rd})],ld.prototype,"pngExportLicenseSetter"),Vc([d({context:Qc})],ld.prototype,"pngExportFileName"),Vc([d({context:Jc})],ld.prototype,"pngExportFileNameSetter"),Vc([d({context:ed})],ld.prototype,"pngExportFileDate"),Vc([d({context:td})],ld.prototype,"pngExportFileDateSetter"),Vc([d({context:sd})],ld.prototype,"pngExportColumns"),Vc([d({context:od})],ld.prototype,"pngExportColumnsSetter"),Vc([d({context:ad})],ld.prototype,"pngExportGroupName"),Vc([d({context:nd})],ld.prototype,"pngExportGroupNameSetter");var hd=Object.defineProperty,cd=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&hd(t,i,o),o};const dd=class extends pi{renderRow(e,t,i){return qe`<thermal-field label="${e}">
                <div>${t}</div>
                ${i||Ze}
            </thermal-field>`}renderGroup(e,t){return qe`<fieldset>
            <legend>${e}</legend>
            ${t}
        </fieldset>`}formatTip(e){return e?qe`<div class="hint">${e}</div>`:""}renderCheckbox(e,t,i,r){const s=qe`<input name="${e}" type="checkbox" ?checked="${i}" @input=${e=>{const t=e.target.checked;r(t)}}>`;return qe`<div>${s}<label for="${e}">${t}</label></div>`}renderSlider(e,t,i,r,s,o,a,n,l){const h=qe`<input 
                name="${e}"
                value="${i}"
                min="${s}"
                max="${o}"
                step="${a}"
                type="range"
                @input="${e=>{const t=Math.min(o,Math.max(0,parseFloat(e.target.value)));n(t)}}"
            ></input>`,c=qe`<strong>${i} ${r}</strong> (${s} - ${o} ${r})${l?"<br />"+l:""}`,d=this.formatTip(c);return this.renderRow(t,h,d)}updated(e){if(super.updated(e),void 0===this.pngFs||void 0===this.pngWidth||void 0===this.pngWidthSetter||void 0===this.pngFsSetter)return;const t=["pngFs","pngWidth"];for(const i of t)if(e.has(i)){const e=this[i],t=this.shadowRoot?.querySelector(`input[name="${i}"]`);if(t&&e){const r=t.value;parseInt(r)!==e&&(t.value=e.toString(),this.log(`Updated ${i} from ${r} to ${e}`))}}}render(){return void 0===this.pngFs||void 0===this.pngWidth||void 0===this.pngWidthSetter||this.pngFsSetter,qe`

        ${this.renderGroup(se(li.exportcontent),qe`
            ${this.renderCheckbox("pngExportAnalyses",se(li.analyses),this.pngAnalyses,this.pngExportAnalysesSetter.bind(this))}
            ${this.renderCheckbox("pngExportScale",se(li.thermalscale),this.pngExportScale,this.pngExportScaleSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileName",se(li.exportfilenames),this.pngExportFileName,this.pngExportFileNameSetter.bind(this))}
            ${this.renderCheckbox("pngExportFileDate",se(li.filedate),this.pngExportFileDate,this.pngExportFileDateSetter.bind(this))}
        `)}

        ${this.renderGroup(se(li.exportdimensions),qe`
            ${this.renderSlider("pngWidth",se(li.exportimagewidth),this.pngWidth,"px",500,2e3,50,this.pngWidthSetter.bind(this))}

            ${this.renderSlider("pngFs",se(li.exportimagefontsize),this.pngFs,"px",10,50,1,this.pngFsSetter.bind(this))}
        `)}

        ${this.renderGroup(se(li.exportgroup),qe`
            ${this.renderCheckbox("pngExportGroupName",se(li.exportgroupname),this.pngExportGroupName,this.pngExportGroupNameSetter.bind(this))}
            ${this.renderSlider("pngColumns",se(li.exportfilenames),this.pngExportColumns,"sloupců",1,5,1,this.pngExportColumnsSetter.bind(this))}
        `)}

        `}};dd.styles=ce`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }

            fieldset {
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);
                margin-bottom: var(--thermal-gap);

                legend {
                    border-radius: var(--thermal-radius);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                    padding: 0.3em 0.5em;
                }

            }
        
        `;let pd=dd;cd([p({context:Hc,subscribe:!0})],pd.prototype,"pngWidth"),cd([p({context:Wc,subscribe:!0})],pd.prototype,"pngWidthSetter"),cd([p({context:Gc,subscribe:!0})],pd.prototype,"pngFs"),cd([p({context:qc,subscribe:!0})],pd.prototype,"pngFsSetter"),cd([p({context:Yc,subscribe:!0})],pd.prototype,"pngAnalyses"),cd([p({context:Zc,subscribe:!0})],pd.prototype,"pngExportAnalysesSetter"),cd([p({context:Xc,subscribe:!0})],pd.prototype,"pngExportScale"),cd([p({context:Kc,subscribe:!0})],pd.prototype,"pngExportScaleSetter"),cd([p({context:id,subscribe:!0})],pd.prototype,"pngExportLicense"),cd([p({context:rd,subscribe:!0})],pd.prototype,"pngExportLicenseSetter"),cd([p({context:Qc,subscribe:!0})],pd.prototype,"pngExportFileName"),cd([p({context:Jc,subscribe:!0})],pd.prototype,"pngExportFileNameSetter"),cd([p({context:ed,subscribe:!0})],pd.prototype,"pngExportFileDate"),cd([p({context:td,subscribe:!0})],pd.prototype,"pngExportFileDateSetter"),cd([p({context:sd,subscribe:!0})],pd.prototype,"pngExportColumns"),cd([p({context:od,subscribe:!0})],pd.prototype,"pngExportColumnsSetter"),cd([p({context:ad,subscribe:!0})],pd.prototype,"pngExportGroupName"),cd([p({context:nd,subscribe:!0})],pd.prototype,"pngExportGroupNameSetter");var ud=Object.defineProperty;const md=class extends Bh{render(){return qe`

            <div>

                <thermal-btn
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${se(li.straightlines)}</thermal-btn>

                <thermal-btn
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${se(li.smoothlines)}</thermal-btn>

            </div>
        `}};md.styles=ce`
    
        :host {}

    `;let gd=md;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&ud(t,i,s)})([p({context:en,subscribe:!0})],gd.prototype,"smooth");var fd=Object.defineProperty;const yd=class extends Bh{render(){return qe`<thermal-btn
    variant=${this.smooth?"default":"foreground"}
    @click=${()=>this.manager.smooth.setSmooth(!1)}
>${se(li.pixelated)}</thermal-btn>

<thermal-btn
    variant=${this.smooth?"foreground":"default"}
    @click=${()=>this.manager.smooth.setSmooth(!0)}
>${se(li.smooth)}</thermal-btn>`}};yd.styles=ce`
    
        :host {
            display: block;
        }

    `;let vd=yd;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&fd(t,i,s)})([p({context:Ja,subscribe:!0})],vd.prototype,"smooth");var bd=Object.defineProperty,wd=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&bd(t,i,o),o};class xd extends Bh{constructor(){super(...arguments),this.advancedPalettesContext=!1,this.palettes=[]}updated(e){const t=this.advancedPalettesProperty??this.advancedPalettesContext,i=["iron","jet","white_hot","black_hot"];(e.has("advancedPalettesContext")||e.has("advancedPalettesProperty"))&&(t?this.palettes=Object.values(Ko):(this.palettes=Object.entries(Ko).filter(([e,t])=>i.includes(e)).map(([e,t])=>t),i.includes(this.value.key)||this.onSelect("iron"))),!e.has("value")||t||i.includes(this.value.key)||this.onSelect("iron")}onSelect(e){this.manager.palette.setPalette(e)}}wd([p({context:xc,subscribe:!0}),bt()],xd.prototype,"advancedPalettesContext"),wd([vt({type:Boolean,attribute:"advanced-palettes"})],xd.prototype,"advancedPalettesProperty"),wd([bt()],xd.prototype,"palettes"),wd([p({context:Qa,subscribe:!0}),bt()],xd.prototype,"value");const Sd=class extends xd{paletteTemplate(e){return qe`<span class="palette" style="background:${e.gradient}"></span>`}render(){return this.palettes.map(e=>qe`<thermal-btn 
    @click=${()=>this.onSelect(e.slug)} 
    variant="${e.name===this.manager.palette.currentPalette.name?"background":"default"}"
    tooltip="${se(li.palettename,{name:e.name})}"
>
    ${this.paletteTemplate(e)}
</thermal-btn>`)}};Sd.styles=ce`
:host {
    display: flex;
    width: content-width;
    gap: 5px;
}

.palette {
    width: calc( var( --thermal-gap ) * 2 );
    height: calc( var( --thermal-fs ) * .8 );
    border-radius: var( --thermal-fs-small );
}`;let kd=Sd;const Cd=class extends xd{paletteTemplate(e,t){return qe`<span class="palette" style="background:${e.gradient}"></span><span>${e.name}</span>`}render(){return qe`

            <thermal-dropdown .tooltip=${se(li.colourpalette)}>
                    <span slot="invoker" class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>

                ${this.palettes.map(e=>qe`
                    <div slot="option"><thermal-btn @click=${()=>this.onSelect(e.slug)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-btn></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};Cd.styles=ce`

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        border-radius: var( --thermal-fs-small );
    }

    thermal-btn {
        width: 100%;
        justify-content: flex-start;
    }

    `;let Ed=Cd;var Td=Object.defineProperty;const _d=class extends Bh{onSelect(e){this.manager.tool.selectTool(e)}renderTool(e,t){const i={[e]:!0,button:!0,active:t.key===this.value.key};return qe`<thermal-btn 
    tooltip=${se(li[t.name])}
    tooltip-placement="right"
    class=${Vl(i)} 
    @click=${()=>{this.manager.tool.selectTool(t)}}
    variant=${t.key===this.value.key?"background":"default"}
>
    ${Qt(t.icon)}
</thermal-btn>`}render(){return void 0===this.manager?Ze:Object.entries(this.manager.tool.tools).map(([e,t])=>this.renderTool(e,t))}};_d.styles=ce`
:host {
    display: flex;
    font-size: var(--thermal-fs);
    flex-direction: column;
    gap: 0.25em;
}

:host([horizontal="true"]) {
    flex-direction: row;
}

.active {
    color: var( --thermal-foreground );
}

thermal-btn {
    width: 2.5em;
    padding: 3px;
    &:hover {
        color: var(--thermal-primary);
    }
}`;let Ad=_d;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Td(t,i,s)})([p({context:tn,subscribe:!0}),bt()],Ad.prototype,"value");var Pd=Object.defineProperty,$d=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Pd(t,i,o),o};const Rd=class extends Wh{constructor(){super(...arguments),this.stacked=!1,this.step=1,this.availableSteps=[.01,.1,.5,1,5,10],this.inputValues={from:"",to:""},this.isUpdatingFromRegistry=!1,this.hasHistogram=!1}firstUpdated(e){super.firstUpdated(e),this.hydrate()}disconnectedCallback(){super.disconnectedCallback(),this.dehydrate(),this.debounceTimer&&clearTimeout(this.debounceTimer)}hydrate(){void 0!==this.registry&&(this.recieveMinmax(this.registry.minmax.value),this.recieveRange(this.registry.range.value),this.registry.minmax.addListener(this.UUID,this.recieveMinmax.bind(this)),this.registry.range.addListener(this.UUID,this.recieveRange.bind(this)),this.registry.histogram.addListener(this.UUID,e=>{this.hasHistogram=!!e}))}dehydrate(){void 0!==this.registry&&(this.registry.minmax.removeListener(this.UUID),this.registry.range.removeListener(this.UUID))}recieveMinmax(e){e?(this.min!==e.min&&(this.min=e.min),this.max!==e.max&&(this.max=e.max)):(this.min=void 0,this.max=void 0,this.from=void 0,this.to=void 0,this.inputValues={from:"",to:""})}recieveRange(e){this.isUpdatingFromRegistry=!0,e?(this.from!==e.from&&(this.from=e.from,this.inputValues={...this.inputValues,from:e.from?.toFixed(2)??""}),this.to!==e.to&&(this.to=e.to,this.inputValues={...this.inputValues,to:e.to?.toFixed(2)??""})):(this.from=void 0,this.to=void 0,this.inputValues={from:"",to:""}),this.isUpdatingFromRegistry=!1}updateFrom(e){this.registry&&void 0!==e&&void 0!==this.to&&(this.from=e,this.registry.range.imposeRange({from:e,to:this.to}))}updateTo(e){this.registry&&void 0!==e&&void 0!==this.from&&(this.to=e,this.registry.range.imposeRange({from:this.from,to:e}))}debouncedUpdate(e,t){this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=window.setTimeout(()=>{if(this.isUpdatingFromRegistry)return;const i=parseFloat(t);isNaN(i)||("from"===e&&this.isValidFromValue(i)?this.updateFrom(i):"to"===e&&this.isValidToValue(i)&&this.updateTo(i))},300)}isValidFromValue(e){return!(void 0!==this.min&&e<this.min)&&!(void 0!==this.to&&e>this.to)}isValidToValue(e){return!(void 0!==this.max&&e>this.max)&&!(void 0!==this.from&&e<this.from)}canStepFrom(e){if(void 0===this.from)return!1;const t="up"===e?this.from+this.step:this.from-this.step;return this.isValidFromValue(t)}canStepTo(e){if(void 0===this.to)return!1;const t="up"===e?this.to+this.step:this.to-this.step;return this.isValidToValue(t)}canSetMin(){return void 0!==this.min&&void 0!==this.to&&this.min<=this.to&&this.from!==this.min}canSetMax(){return void 0!==this.max&&void 0!==this.from&&this.max>=this.from&&this.to!==this.max}stepFrom(e){if(void 0===this.from||!this.canStepFrom(e))return;const t="up"===e?this.from+this.step:this.from-this.step,i=parseFloat(t.toFixed(2));this.inputValues.from=i.toFixed(2),this.updateFrom(i)}stepTo(e){if(void 0===this.to||!this.canStepTo(e))return;const t="up"===e?this.to+this.step:this.to-this.step,i=parseFloat(t.toFixed(2));this.inputValues.to=i.toFixed(2),this.updateTo(i)}setMinValue(){this.canSetMin()&&void 0!==this.min&&(this.inputValues.from=this.min.toFixed(2),this.updateFrom(this.min))}setMaxValue(){this.canSetMax()&&void 0!==this.max&&(this.inputValues.to=this.max.toFixed(2),this.updateTo(this.max))}setStep(e){this.step=e}roundToNearestInteger(e){const t="from"===e?this.from:this.to;if(void 0===t)return;const i=Math.round(t);let r=i;"from"===e&&i<this.min&&(r=Math.ceil(t)),"to"===e&&i>this.max&&(r=Math.floor(t));("from"===e?this.isValidFromValue(r):this.isValidToValue(r))&&("from"===e?(this.inputValues.from=r.toFixed(2),this.updateFrom(r)):(this.inputValues.to=r.toFixed(2),this.updateTo(r)))}getAvailableSteps(){return this.availableSteps.filter(e=>{const t=void 0!==this.from&&(this.isValidFromValue(this.from+e)||this.isValidFromValue(this.from-e)),i=void 0!==this.to&&(this.isValidToValue(this.to+e)||this.isValidToValue(this.to-e));return t||i})}isWholeNumber(e){return void 0!==e&&Math.round(e)===e}getClosestValidValue(e,t){if(!e.trim())return"from"===t?this.from:this.to;const i=parseFloat(e);if(isNaN(i))return"from"===t?this.from:this.to;if("from"===t){const e=this.min??Number.NEGATIVE_INFINITY,t=this.to??Number.POSITIVE_INFINITY;return i<e?e:i>t?t:i}{const e=this.from??Number.NEGATIVE_INFINITY,t=this.max??Number.POSITIVE_INFINITY;return i<e?e:i>t?t:i}}handleInputBlur(e,t){const i=this.getClosestValidValue(t,e);void 0!==i&&(this.inputValues={...this.inputValues,[e]:i.toFixed(2)},"from"===e?this.updateFrom(i):this.updateTo(i))}renderInput(e,t=void 0,i=void 0){const r="from"===e?this.from:this.to,s=this.inputValues[e],o="from"===e?this.canStepFrom("down"):this.canStepTo("down"),a="from"===e?this.canStepFrom("up"):this.canStepTo("up"),n=this.getAvailableSteps(),l=this.isWholeNumber(r);return qe`
        <div class="input-group ${l?"is-whole-number":""}">
            <div class="input-group-outer input-group-outer__top">
                ${n.map(e=>qe`
                    <button 
                        class="step-button ${e===this.step?"active":""}"
                        ?disabled=${!n.includes(e)}
                        @click=${()=>this.setStep(e)}
                    >
                        ${e}
                    </button>
                `)}
            </div>
            <div class="input-group-inner">
                ${t}
                <button 
                    class="left"
                    ?disabled=${!o}
                    @click=${()=>"from"===e?this.stepFrom("down"):this.stepTo("down")}
                >-</button>
                <input
                    .value=${s}
                    type="number"
                    step=${this.step}
                    min=${"from"===e?this.min:this.from}
                    max=${"from"===e?this.to:this.max}
                    @input=${t=>{const i=t.target;this.inputValues={...this.inputValues,[e]:i.value},this.debouncedUpdate(e,i.value)}}
                    @blur=${t=>{const i=t.target;this.handleInputBlur(e,i.value)}}
                    @keydown=${t=>{if("ArrowUp"===t.key||"ArrowDown"===t.key){t.preventDefault();const i="ArrowUp"===t.key?"up":"down";"from"===e?this.stepFrom(i):this.stepTo(i)}}}
                ></input>
                <aside>°C</aside>
                <button 
                    class="right"
                    ?disabled=${!a}
                    @click=${()=>"from"===e?this.stepFrom("up"):this.stepTo("up")}
                >+</button>
                ${i}
            </div>
            <div class="input-group-outer input-group-outer__bottom">
                <button 
                    class="round-button"
                    @click=${()=>this.roundToNearestInteger(e)}
                >
                    Zaokrouhlit
                </button>
            </div>
        </div>
        `}render(){return qe`
        <div class="fields">

            ${this.renderInput("from",qe`<button 
                    class="left"
                    ?disabled=${!this.canSetMin()}
                    @click=${()=>this.setMinValue()}
                >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="5" y1="2" x2="5" y2="14" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="10" y2="4" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="10" y2="12" stroke="currentColor" stroke-width="1"/>
                        <line x1="5" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </button>`,void 0)}
            <div class="separator separator__line"></div>
            ${this.renderInput("to",void 0,qe`<button 
                    class="right"
                    ?disabled=${!this.canSetMax()}
                    @click=${()=>this.setMaxValue()}
                >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <line x1="15" y1="2" x2="15" y2="14" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="10" y2="4" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="10" y2="12" stroke="currentColor" stroke-width="1"/>
                        <line x1="15" y1="8" x2="4" y2="8" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </button>`)}

        </div>

        <div class="fields fields__separated fields__buttons">
            <thermal-btn
                tooltip=${se(li.fullrange)}
                @click=${()=>{this.registry.range.applyMinmax()}}
                style="padding: 0 0.5em; display: flex; align-items: center; justify-content: center;"
                disabled="${this.canSetMin()||this.canSetMax()?"false":"true"}"
            >
                <svg width="35" height="16" viewBox="0 0 35 16" fill="none" style="display: block;" stroke-linecap="butt" stroke-linejoin="miter">
                    <!-- Levý symbol (min) -->
                    <line x1="3" y1="2" x2="3" y2="14" stroke="currentColor" stroke-width="1"/>
                    <line x1="3" y1="8" x2="8" y2="3" stroke="currentColor" stroke-width="1"/>
                    <line x1="3" y1="8" x2="8" y2="13" stroke="currentColor" stroke-width="1"/>
                    <!-- Spojitá čára se šipkami na koncích -->
                    <line x1="3" y1="8" x2="32" y2="8" stroke="currentColor" stroke-width="1"/>
                    <!-- Pravý symbol (max) -->
                    <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="1"/>
                    <line x1="32" y1="8" x2="27" y2="3" stroke="currentColor" stroke-width="1"/>
                    <line x1="32" y1="8" x2="27" y2="13" stroke="currentColor" stroke-width="1"/>
                </svg>
            </thermal-btn>
            
            <thermal-btn
                tooltip=${se(li.automaticrange)}
                @click=${()=>{this.registry.range.applyAuto()}}
                disabled="${this.hasHistogram?"false":"true"}"
                style="padding: 0 0.5em; display: flex; align-items: center; justify-content: center;"
            >
                <svg width="56" height="16" viewBox="0 0 56 16" fill="none" style="display: block;">
                    <!-- All bars sorted by X coordinate - background (slate color) -->
                    <rect x="2" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="4" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="6" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="8" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="10" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="12" y="9" width="2" height="5" fill="var(--thermal-slate)"/>
                    <rect x="14" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="16" y="11" width="2" height="3" fill="var(--thermal-slate)"/>
                    <rect x="18" y="6" width="2" height="8" fill="var(--thermal-slate)"/>
                    <rect x="20" y="2" width="2" height="12" fill="var(--thermal-slate)"/>
                    <rect x="22" y="3" width="2" height="11" fill="var(--thermal-slate)"/>
                    <rect x="24" y="1" width="2" height="13" fill="var(--thermal-slate)"/>
                    <rect x="26" y="2" width="2" height="12" fill="var(--thermal-slate)"/>
                    <rect x="28" y="4" width="2" height="10" fill="var(--thermal-slate)"/>
                    <rect x="30" y="8" width="2" height="6" fill="var(--thermal-slate)"/>
                    <rect x="32" y="10" width="2" height="4" fill="var(--thermal-slate)"/>
                    <rect x="34" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="36" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="38" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="40" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="42" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="44" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="46" y="11" width="2" height="3" fill="var(--thermal-slate)"/>
                    <rect x="48" y="12" width="2" height="2" fill="var(--thermal-slate)"/>
                    <rect x="50" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <rect x="52" y="13" width="2" height="1" fill="var(--thermal-slate)"/>
                    <!-- Highlighted section - foreground color (sorted by X) -->
                    <rect x="18" y="6" width="2" height="8" fill="var(--thermal-foreground)"/>
                    <rect x="20" y="2" width="2" height="12" fill="var(--thermal-foreground)"/>
                    <rect x="22" y="3" width="2" height="11" fill="var(--thermal-foreground)"/>
                    <rect x="24" y="1" width="2" height="13" fill="var(--thermal-foreground)"/>
                    <rect x="26" y="2" width="2" height="12" fill="var(--thermal-foreground)"/>
                    <rect x="28" y="4" width="2" height="10" fill="var(--thermal-foreground)"/>
                    <!-- Bottom line with offset -->
                    <line x1="17" y1="15.5" x2="31" y2="15.5" stroke="currentColor" stroke-width="1"/>
                </svg>
            </thermal-btn>
        </div>

        `}};Rd.styles=ce`

        :host {
            font-family: inherit;
            font-style: normal;
            font-size: var(--font-size);
            display: flex !important;
            flex-wrap: wrap;
            flex-direction: var( --thermal-direction, row );
            gap: .5em;
        }

        .fields {

            display: flex;
            flex-wrap: no-wrap;
            gap: 0em;
        
        }

        .fields__buttons {

            thermal-btn {
                min-height: 2em;
                flex-grow: var(--thermal-collapsible-grow, 0);
            }
        
        }

        .fields__separated {
            gap: .5em;
        }


        .separator {
            width: .5em;
            &.separator__line {
                display: flex;
                align-items: center;
                &::after {
                    content: "";
                    display: block;
                    height: var(--thermal-border-width);
                    width: 100%;
                    background: var( --thermal-slate );
                }
            }
        }

        .input-group {
            position: relative;
        }
    
        .input-group-inner {
            display: flex;
            align-items: stretch;
            height: 2em;
            position: relative;
            z-index: 1;
        }


        .input-group-outer {
            position: absolute;
            z-index: 0;
            text-align: center;
            width: 100%;

            font-size: .75em;
            height: 2em;
            background: var( --thermal-slate-light );

            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );

            opacity: 0;

            transition: all .25s ease-in-out;

            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .25em;

            &.input-group-outer__top {
                top: 3px;
                padding-bottom: .5em;
                border-radius: var( --thermal-radius ) var( --thermal-radius ) 0 0;
            }

            &.input-group-outer__bottom {
                bottom: 3px;
                padding-top: .5em;
                border-radius: 0 0 var( --thermal-radius ) var( --thermal-radius );
            }
        }

        .input-group:focus-within .input-group-outer {

            opacity: 1;

            &.input-group-outer__top {
                top: -1.5em;
            }

            &.input-group-outer__bottom {
                bottom: -1.5em;
            }
        }

        .input-group.is-whole-number .input-group-outer__bottom {
            opacity: 0;
            bottom: 3px;
        }

        .input-group button,
        .input-group aside,
        .input-group input {

            border: 0;
            border-top: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            border-bottom: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );

            color: var( --thermal-foreground );
            background: var( --thermal-background );
            
            font-family: inherit;
            font-size: 1em;
            line-height: 1em;

            transition: all .25s ease-in-out;
        
        }

        .input-group-inner input, 
        .input-group-inner aside {
            display: block;
            vertical-align: middle;
        }

        .input-group-inner aside {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: .3em;
        }

        .input-group-inner input {

            outline: 0;
            padding: 0;
            margin: 0;

            text-align: right;

            width: 3.5em;

            &:hover,
            &:focus {
                color: var( --thermal-primary );
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                /* display: none; <- Crashes Chrome on hover */
                -webkit-appearance: none;
                margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
            }

            &[type=number] {
                -moz-appearance:textfield; /* Firefox */
            }
            
        }

        .input-group-inner > button {

            cursor: pointer;

            outline: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            &.left {
                border-right: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            }

            &.right {
                border-left: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
            }

            &:hover,
            &:focus {
                background: var( --thermal-slate-light );
            }

            &:disabled {
                
                cursor: not-allowed;
                color: var( --thermal-slate-light );
                
                &:hover,
                &:focus {
                    background: var( --thermal-background );
                }
            }

            &:first-child {
                border-left: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
                border-radius: var( --thermal-radius ) 0 0 var( --thermal-radius );
            }

            &:last-child {
                border-right: var(--thermal-border-width)var(--thermal-border-style) var( --thermal-slate );
                border-radius: 0 var( --thermal-radius ) var( --thermal-radius ) 0;
            }

            svg {
                display: block;
            }
        
        }

        .step-button {
            
            color: var( --thermal-slate ) !important;
            cursor: pointer;
            font-size: .7em;
            padding: .2em .3em;
            transition: all .25s ease-in-out;

            background: transparent !important;
            border: none !important;

            &:hover:not(:disabled) {
                color: var( --thermal-primary );
            }

            &.active {
                font-weight: bold;
                color: var( --thermal-foreground ) !important;
            }

            &:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
        }

        .round-button {
            
            color: var( --thermal-foreground );
            cursor: pointer;
            font-size: .8em;
            padding: .3em .6em;
            transition: all .25s ease-in-out;
            border: 0 !important;
            background: transparent !important;

            &:hover:not(:disabled) {
                color: var( --thermal-primary );
            }

            &:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
        }
    
    `;let Ld=Rd;$d([vt({reflect:!0,converter:Pa(!0)})],Ld.prototype,"stacked"),$d([bt()],Ld.prototype,"min"),$d([bt()],Ld.prototype,"max"),$d([bt()],Ld.prototype,"from"),$d([bt()],Ld.prototype,"to"),$d([bt()],Ld.prototype,"step"),$d([bt()],Ld.prototype,"availableSteps"),$d([bt()],Ld.prototype,"inputValues"),$d([bt()],Ld.prototype,"isUpdatingFromRegistry"),$d([bt()],Ld.prototype,"hasHistogram");var Dd=Object.defineProperty,Od=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Dd(t,i,o),o};const Md=(t=class extends Wh{constructor(){super(...arguments),this.ticksRef=Wt(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=Wt()}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,e=>{this.minmax=e,this.ticksRef.value&&this.calculateTicks(e,this.ticksRef.value.clientWidth)})}firstUpdated(e){super.firstUpdated(e),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(e,t,i){return e<t?t:e>i?i:e}map(e,t,i,r,s){const o=(e-t)*(s-r)/(i-t)+r;return this.clamp(o,r,s)}calculateTicks(e,i){if(void 0===e)this.ticks=[];else{const r=[0],s=Math.floor(i/t.TICK_WIDTH)-2,o=100/s;for(let e=1;e<s;e++)r.push(o*e);r.push(100),this.ticks=r.map(t=>this.calculateOneTick(e,t)).filter(e=>void 0!==e)}}calculateOneTick(e,t){if(void 0!==e){return{percentage:t,value:this.map(t,0,100,e.min,e.max)}}}render(){let e,i;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,r=this.registry.minmax.value.max-t;e=(this.highlight.from-t)/r*100,i=(this.highlight.to-t)/r*100-e}return qe`

            <div class="container ${void 0!==this.minmax?"ready":"loading"} placement-${this.placement}" ${Yt(this.containerRef)}>

                <div class="skeleton" data-video-ignore></div>

                <div class="ticks" ${Yt(this.ticksRef)}>

                    ${void 0!==e&&void 0!==i?qe`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${e}%; width: ${i}%; background-color: var(--thermal-foreground)"></div>`:Ze}

                    ${this.ticks.map(e=>qe`
                    <div class="tick" >
                        <div class="tick-value">
                            ${e.value.toFixed(t.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
        
        `}},t.TICK_WIDTH=40,t.TICK_FIXED=2,t.styles=ce`

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            height: var( --thermal-fs );
            
        }

        .skeleton {
            height: 100%;
            background: var( --thermal-slate-light );
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
            height: 1em;
        }

        .tick {

            position: relative;

            &::before {
                display: block;
                content: "";
                width: 1px;
                height: 10px;
                background: var(--thermal-slate);
            }
        
        }

        .placement-top {
            margin-top: 10x;
            padding-bottom: var( --thermal-gap );
            .tick {
                &::before {
                    background: var(--thermal-slate);
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


    `,t);Od([p({context:Xa,subscribe:!0})],Md.prototype,"highlight"),Od([vt({type:String,reflect:!0})],Md.prototype,"placement"),Od([bt()],Md.prototype,"minmax"),Od([bt()],Md.prototype,"ticks");let Id=Md;const Ud="important",zd=" !"+Ud,Fd=It(class extends Ut{constructor(e){if(super(e),e.type!==$t||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const r=e[i];return null==r?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)null==t[r]&&(this.ft.delete(r),r.includes("-")?i.removeProperty(r):i[r]=null);for(const r in t){const e=t[r];if(null!=e){this.ft.add(r);const t="string"==typeof e&&e.endsWith(zd);r.includes("-")||t?i.setProperty(r,t?e.slice(0,-11):e,t?Ud:""):i[r]=e}}return Ye}});var Bd=Object.defineProperty,Nd=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Bd(t,i,o),o};const jd=class extends Wh{constructor(){super(...arguments),this.loading=!1,this.activeHandle="from"}getClassName(){return"RangeSliderElement"}disconnectedCallback(){this.cancelDrag(),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),["min","max","from","to","loading","registryController"].some(t=>e.has(t))&&(this.cancelDrag(),void 0===this.min||void 0===this.max||void 0===this.from||void 0===this.to||this.values||this.log("Invalid range slider values",{min:this.min,max:this.max,from:this.from,to:this.to}))}get values(){const{min:e,max:t,from:i,to:r}=this;if(void 0!==e&&void 0!==t&&void 0!==i&&void 0!==r&&!(![e,t,i,r,t-e].every(Number.isFinite)||e>t||i<e||r>t||i>r))return{min:e,max:t,from:i,to:r}}percent(e,t){return t.max===t.min?0:(e-t.min)/(t.max-t.min)*100}constrain(e,t,i,r){return"from"===e?{from:Math.max(i.min,Math.min(r.to,t)),to:r.to}:{from:r.from,to:Math.min(i.max,Math.max(r.from,t))}}commit(e){this.cancelDrag(),e.from===this.from&&e.to===this.to||(this.registryController.setRange(e.from,e.to),this.from=this.registryController.from,this.to=this.registryController.to)}cancelDrag(){const e=this.drag;this.drag=void 0,this.draft=void 0,e?.element.hasPointerCapture(e.pointerId)&&e.element.releasePointerCapture(e.pointerId)}pointerDown(e){const t=this.values;if(!t||this.loading||t.min===t.max||this.drag||0!==e.button)return;const i=e.currentTarget,r=e.target;if(!(i instanceof HTMLElement&&r instanceof HTMLElement))return;const s=i.getBoundingClientRect();if(0===s.width)return;const o=(e.clientX-s.left)/s.width*100,a=r.closest("[data-handle]")?.dataset.handle;let n;if("from"===a||"to"===a)n=a;else{const e=Math.abs(o-this.percent(t.from,t)),i=Math.abs(o-this.percent(t.to,t));n=e===i?this.activeHandle:e<i?"from":"to"}e.preventDefault(),this.activeHandle=n,i.querySelector(`[data-handle="${n}"]`)?.focus({preventScroll:!0}),this.draft={from:t.from,to:t.to};const l=a?e.clientX-s.left-this.percent(t[n],t)/100*s.width:0;this.drag={pointerId:e.pointerId,handle:n,offset:l,element:i,values:t,controller:this.registryController},i.setPointerCapture(e.pointerId),this.pointerMove(e)}pointerMove(e){const t=this.drag,i=this.values;if(!t||e.pointerId!==t.pointerId)return;if(!i||!this.draft||this.loading||this.registryController!==t.controller||i.min!==t.values.min||i.max!==t.values.max||i.from!==t.values.from||i.to!==t.values.to)return void this.cancelDrag();const r=t.element.getBoundingClientRect();if(0===r.width)return;const s=Math.max(0,Math.min(1,(e.clientX-r.left-t.offset)/r.width)),o=0===s?i.min:1===s?i.max:i.min+s*(i.max-i.min);this.draft=this.constrain(t.handle,o,i,this.draft)}pointerUp(e){if(this.drag?.pointerId!==e.pointerId)return;this.pointerMove(e);const t=this.draft;t?this.commit(t):this.cancelDrag()}pointerCancel(e){this.drag?.pointerId===e.pointerId&&this.cancelDrag()}keyDown(e,t){const i=this.values;if(!i||this.loading||i.min===i.max)return;let r;switch(e.key){case"ArrowLeft":r=Number((i[t]-(i.max-i.min)/100).toPrecision(15));break;case"ArrowRight":r=Number((i[t]+(i.max-i.min)/100).toPrecision(15));break;case"ArrowUp":case"Home":r=i.min;break;case"ArrowDown":case"End":r=i.max;break;default:return}e.preventDefault(),e.stopPropagation(),this.activeHandle=t,this.commit(this.constrain(t,r,i,i))}wheel(e,t){const i=this.values;if(!i||this.loading||i.min===i.max||0===e.deltaY||this.drag)return;e.preventDefault(),e.stopPropagation(),this.activeHandle=t;const r=Number((i[t]+Math.sign(e.deltaY)*(i.max-i.min)/100).toPrecision(15));this.commit(this.constrain(t,r,i,i))}renderHandle(e,t,i){const r=t.min===t.max;return qe`
            <div class="handle-position ${this.activeHandle===e?"active":""}"
                style=${Fd({left:`${this.percent(i[e],t)}%`})}>
                <button type="button" class="handle" data-handle=${e} role="slider"
                    aria-label=${this.t("from"===e?"minimaltemperature":"maximaltemperature")}
                    aria-orientation="horizontal"
                    aria-valuemin=${"from"===e?t.min:i.from}
                    aria-valuemax=${"from"===e?i.to:t.max}
                    aria-valuenow=${i[e]}
                    aria-valuetext=${`${i[e].toFixed(2)} °C`}
                    ?disabled=${r}
                    style=${Fd({background:"from"===e?this.palette?.data.pixels[0]:this.palette?.data.pixels[this.palette.data.pixels.length-1]})}
                    @focus=${()=>{this.activeHandle=e}}
                    @keydown=${t=>this.keyDown(t,e)}
                    @wheel=${t=>this.wheel(t,e)}>
                </button>
                <span class="tooltip" aria-hidden="true">${i[e].toFixed(2)}</span>
            </div>`}render(){const e=this.values;if(this.loading||!e)return qe`<div class="container loading" aria-busy=${this.loading}><div class="skeleton"></div></div><slot></slot>`;const t=this.draft??e,i=this.percent(t.from,e),r=this.percent(t.to,e);return qe`
            <div class="container ready">
                <div class="slider-row">
                    <div class="track"
                        @pointerdown=${this.pointerDown}
                        @pointermove=${this.pointerMove}
                        @pointerup=${this.pointerUp}
                        @pointercancel=${this.pointerCancel}
                        @lostpointercapture=${this.pointerCancel}
                        @wheel=${e=>this.wheel(e,this.activeHandle)}>
                        <div class="fill" style=${Fd({left:`${i}%`,width:r-i+"%",background:this.palette?.data.gradient})}></div>
                        ${this.renderHandle("from",e,t)}
                        ${this.renderHandle("to",e,t)}
                    </div>
                </div>
            </div>
            <slot></slot>`}};jd.styles=ce`
        :host { display: block; }
        .container {
            height: var(--thermal-gap);
            padding: 0 calc(var(--thermal-gap) * .5);
            margin-bottom: -6px;
            color: var(--thermal-slate-dark);
            font-size: 12px;
        }
        .slider-row { display: flex; align-items: center; }
        .track {
            position: relative; flex: 1; min-width: 0; height: 15px;
            background: var(--thermal-slate); cursor: pointer; touch-action: none;
        }
        .fill { position: absolute; height: 100%; pointer-events: none; }
        .handle-position { position: absolute; top: 50%; z-index: 20; }
        .handle-position.active { z-index: 21; }
        .handle {
            position: absolute; transform: translate(-50%, -50%);
            box-sizing: border-box; width: 14px; height: 20px; padding: 0; border-radius: 0;
            border: 2px solid var(--thermal-primary); background: var(--thermal-background);
            box-shadow: 0 0 5px var(--thermal-primary); cursor: grab; touch-action: none;
        }
        .handle:hover, .handle:focus-visible { box-shadow: 0 0 10px var(--thermal-primary); }
        .handle:focus-visible { outline: 2px solid var(--thermal-primary); outline-offset: 2px; }
        .handle:active { cursor: grabbing; }
        .handle:disabled { cursor: default; }
        .tooltip {
            position: absolute; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none;
            top: 22px; min-width: 40px; height: 20px; line-height: 20px; text-align: center;
            padding: 0 3px; background: var(--thermal-slate-dark); color: var(--thermal-background);
            border: 1px solid var(--thermal-slate-dark); border-radius: 3px;
        }
        .tooltip::before {
            content: ""; position: absolute; top: -4px; left: calc(50% - 4px);
            width: 7px; height: 7px; transform: rotate(45deg);
            background: var(--thermal-slate-dark);
        }
        .skeleton { height: calc(var(--thermal-fs) * .9); background: var(--thermal-slate); }
    `;let Vd=jd;Nd([p({context:Ya,subscribe:!0}),bt()],Vd.prototype,"min"),Nd([p({context:Za,subscribe:!0}),bt()],Vd.prototype,"max"),Nd([p({context:Wa,subscribe:!0}),bt()],Vd.prototype,"from"),Nd([p({context:Ga,subscribe:!0}),bt()],Vd.prototype,"to"),Nd([p({context:Qa,subscribe:!0}),bt()],Vd.prototype,"palette"),Nd([p({context:qa,subscribe:!0}),bt()],Vd.prototype,"loading"),Nd([bt()],Vd.prototype,"draft"),Nd([bt()],Vd.prototype,"activeHandle");var Hd=Object.defineProperty;class Wd extends Wh{constructor(){super(...arguments),this.buttonRef=Wt()}doAction(){this.registry.range.applyMinmax()}mouseenter(){void 0!==this.registry.minmax.value&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return qe`<thermal-btn 
    ${Yt(this.buttonRef)} 
    @click=${this.doAction} 
    @mouseenter="${this.mouseenter}" 
    @mouseleave="${this.mouseleave}"
    @focus="${this.mouseenter}"
    @blur="${this.mouseleave}"
>${se(li.fullrange)}</thermal-btn>`}}((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Hd(t,i,s)})([p({context:Ka,subscribe:!0})],Wd.prototype,"setter");var Gd=Object.defineProperty,qd=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Gd(t,i,o),o};class Yd extends Wh{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){return void 0===this.from||void 0===this.to?Ze:qe`
            <div>
                <span>${this.from?.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${this.to?.toFixed(this.fixed)} °C</span>
            </div>
        `}}qd([p({context:Wa,subscribe:!0})],Yd.prototype,"from"),qd([p({context:Ga,subscribe:!0})],Yd.prototype,"to"),qd([vt({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:e=>Math.round(parseFloat(e)),toAttribute:e=>e.toString()}})],Yd.prototype,"fixed"),qd([vt({type:String,reflect:!0,attribute:!0})],Yd.prototype,"separator");var Zd=Object.defineProperty;const Xd=class extends Wh{constructor(){super(...arguments),this.containerRef=Wt()}connectedCallback(){super.connectedCallback();this.registry.opacity.addListener(this.UUID,(e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())}).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(e){const t=parseFloat(e.target.value);this.registry.opacity.imposeOpacity(t)}render(){return qe`
            <div ${Yt(this.containerRef)}>
                <input
                    id="handler"
                    class="thermal-opacity-handler"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value="${this.value}"
                    @input="${this.handleUserChangeEvent}"
                />
                <div class="thermal-opacity-container">
                    <div>VIS</div>
                    <div>${this.value}</div>
                    <div>IR</div>
                </div>
            </div>
            <slot></slot>
        `}};Xd.styles=ce`

        :host {
        }

        .thermal-opacity-handler {
            display: block;
            width: 100%;
            max-width: 100px;
            min-width: 75px;
            cursor: pointer;
            accent-color: var(--thermal-primary);
            
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
            max-width: 100px;
            min-width: 75px;
        }
    
    `;let Kd=Xd;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Zd(t,i,s)})([p({context:Ha,subscribe:!0})],Kd.prototype,"value");const Qd={};function Jd(e){return Object.isFrozen(e)&&Object.isFrozen(e.raw)}function ep(e){return-1===e.toString().indexOf("`")}ep(e=>e``)||ep(e=>e`\0`)||ep(e=>e`\n`)||ep(e=>e`\u0000`),Jd``&&Jd`\0`&&Jd`\n`&&Jd`\u0000`;let tp;function ip(){var e;return null!==(e=function(){if("undefined"!=typeof window)return window.trustedTypes}())&&void 0!==e?e:null}class rp{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function sp(e){var t;const i=e,r=null===(t=function(){var e,t;if(void 0===tp)try{tp=null!==(t=null===(e=ip())||void 0===e?void 0:e.createPolicy("google#safe",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e}))&&void 0!==t?t:null}catch(i){tp=null}return tp}())||void 0===t?void 0:t.createScriptURL(i);return null!=r?r:new rp(i,Qd)}function op(e,...t){if(0===t.length)return sp(e[0]);e[0].toLowerCase();let i=e[0];for(let r=0;r<t.length;r++)i+=encodeURIComponent(t[r])+e[r+1];return sp(i)}function ap(e,t,i){e.src=function(e){var t;if(null===(t=ip())||void 0===t?void 0:t.isScriptURL(e))return e;if(e instanceof rp)return e.privateDoNotAccessOrElseWrappedResourceUrl;throw new Error("")}(t),function(e){const t=function(e){var t;const i=e.document,r=null===(t=i.querySelector)||void 0===t?void 0:t.call(i,"script[nonce]");return r&&(r.nonce||r.getAttribute("nonce"))||""}(e.ownerDocument&&e.ownerDocument.defaultView||window);t&&e.setAttribute("nonce",t)}(e)}const np=new Promise((e,t)=>{if("undefined"!=typeof google&&google.charts&&"function"==typeof google.charts.load)e();else{let i=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');i||(i=document.createElement("script"),ap(i,op`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(i)),i.addEventListener("load",e),i.addEventListener("error",t)}});async function lp(e={}){await np;const{version:t="current",packages:i=["corechart"],language:r=document.documentElement.lang||"en",mapsApiKey:s}=e;return google.charts.load(t,{packages:i,language:r,mapsApiKey:s})}async function hp(e){if(await lp(),null==e)return new google.visualization.DataTable;if(e.getNumberOfRows)return e;if(e.cols)return new google.visualization.DataTable(e);if(e.length>0)return google.visualization.arrayToDataTable(e);if(0===e.length)throw new Error("Data was empty.");throw new Error("Data format was not recognized.")}var cp=function(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const dp=["ready","select"],pp={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class up extends ut{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return qe`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){(async function(e){return await lp(),new google.visualization.ChartWrapper({container:e})})(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(dp,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(null==this.chartWrapper)return;this.chartWrapper.setChartType(pp[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(e=>!dp.includes(e)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,e=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:e}}))})}selectionChanged(){if(null==this.chartWrapper)return;const e=this.chartWrapper.getChart();if(null!=e&&e.setSelection){if("timeline"===this.type){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){null!=this.chartWrapper&&null!=this._data&&(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,void 0!==this.redrawTimeoutId&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(null==this.chartWrapper)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(e&&t)try{const i=await hp({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e,t=this.data;if(!t)return;let i=!1;try{t=JSON.parse(t)}catch(r){i="string"==typeof t||t instanceof String}e=i?fetch(t).then(e=>e.json()):Promise.resolve(t),e.then(hp).then(e=>{this._data=e})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",i.getAttribute("href")),e.appendChild(t)}}}up.styles=ce`
    :host {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin: 0;
      padding: 0;
      width: 400px;
      height: 300px;
    }

    :host([hidden]) {
      display: none;
    }

    :host([type="gauge"]) {
      width: 300px;
      height: 300px;
    }

    #chartdiv {
      width: 100%;
    }

    /* Workaround for slow initial ready event for tables. */
    .google-visualization-table-loadtest {
      padding-left: 6px;
    }
  `,cp([vt({type:String,reflect:!0})],up.prototype,"type",void 0),cp([vt({type:Array})],up.prototype,"events",void 0),cp([vt({type:Object,hasChanged:()=>!0})],up.prototype,"options",void 0),cp([vt({type:Array})],up.prototype,"cols",void 0),cp([vt({type:Array})],up.prototype,"rows",void 0),cp([vt({type:String})],up.prototype,"data",void 0),cp([vt({type:Object})],up.prototype,"view",void 0),cp([vt({type:Array})],up.prototype,"selection",void 0),cp([vt({type:Object})],up.prototype,"_data",void 0),customElements.define("google-chart",up);var mp=Object.defineProperty,gp=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&mp(t,i,o),o};const fp=class extends qh{constructor(){super(...arguments),this.instances=[],this.on=!1}firstUpdated(e){super.firstUpdated(e),this.group.files.addListener(this.UUID,()=>{this.group.analysisGraph.turnOn()}),this.group.analysisGraph.addListener(this.UUID,e=>{void 0!==e?(this.data=e.data,this.colors=e.colors,this.on=!0):(this.data=void 0,this.colors=void 0,this.on=!1)})}download(){const e=this.shadowRoot?.querySelectorAll("google-chart");console.log(e)}render(){return qe`
            <div class="wrapper ${this.on?"on":"off"}">

                ${!0===this.on?qe`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{colors:this.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},chartArea:{width:"90%"}}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                `:Ze}
                
            </div>
        `}};fp.styles=ce`
    
        .wrapper {
            transition: all 0.3s ease-in-out;
            width: 100%;
            overflow: hidden;
        }

        .on {
            height: 300px;
            border-bottom: 1px solid var( --thermalforeground );
        }

        .off {
            height: 0px;
        }

    `;let yp=fp;gp([bt()],yp.prototype,"instances"),gp([bt()],yp.prototype,"timeout"),gp([bt()],yp.prototype,"data"),gp([bt()],yp.prototype,"colors"),gp([bt()],yp.prototype,"on");var vp=Object.defineProperty;const bp=class extends qh{connectedCallback(){if(super.connectedCallback(),this.on){const e=this.UUID+"__initial";this.group.files.addListener(e,t=>{t.length>0&&(this.group.analysisSync.turnOn(t[0]),this.group.files.removeListener(e))})}else this.on=this.group.analysisSync.value;this.group.analysisSync.addListener(this.UUID,e=>{this.on=e}),this.addEventListener("click",()=>{this.toggle()})}turnOn(){this.group.files.value.length>0&&this.group.analysisSync.turnOn(this.group.files.value[0])}turnOff(){this.group.analysisSync.turnOff()}toggle(){this.on?this.turnOff():this.turnOn()}render(){return qe`  
        <span><i></i></span>      
        <div>${se(li.analysissync)}</div>
        `}};bp.styles=ce`
    
        :host {
            font-size: var(--thermal-fs);
            cursor: pointer;
        }

        :host(:hover) {
            span {
                
            }
        }

        :host([on=true]) {
            span i {
                background: var(--thermal-primary);
            }
        }

        :host([on=false]) {
            span i {
                background: var(--thermal-slate);
            }
        }

        span {
            transition: all .3s ease-in-out;
            display: inline-block;
            width: .8em;
            height: .8em;
            border-radius: 50%;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            position: relative;
            overflow: hidden;
        }

        i {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid var(--thermal-background);
            box-sizing: border-box;
        }

        input {
            display: none;
        }

        div {
            font-size: .9em;
            pointer-events: visible;
            display: inline-block;
        }
    
    `;let wp=bp;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&vp(t,i,s)})([vt({type:Boolean,reflect:!0,converter:Pa(!1)})],wp.prototype,"on");var xp=Object.defineProperty,Sp=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&xp(t,i,o),o};const kp=class extends qh{constructor(){super(...arguments),this.pngColumns=3,this.pngGroupName=!1,this.pngFontSize=12,this.pngShowAnalysis=!0,this.pngFileDate=!0,this.pngFileName=!1,this.pngWidth=800,this.pngShowScale=!0}render(){const e=this.classList.contains("small")?"small":"";return qe`
        
            <thermal-dropdown class="download ${e}">
            
                <span slot="invoker">${se(li.download)}</span>
            
                <thermal-btn 
                    slot="option" 
                    pre="LRC" 
                    @click=${()=>this.group.files.downloadAllFiles()}
                    tooltip=${se(li.downloadoriginalfileshint)}
                    tooltip-placement="right"
                >
                    ${se(li.downloadoriginalfiles)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="PNG" 
                    @click=${()=>this.group.forEveryInstance(e=>e.export.downloadPng())}
                    tooltip=${se(li.pngofindividualimageshint)}
                    tooltip-placement="right"
                >
                    ${se(li.pngofindividualimages)}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    pre="PNG" 
                    @click=${()=>this.group.analysisSync.png.downloadPng({columns:this.pngColumns,showGroupName:this.pngGroupName,fontSize:this.pngFontSize,showAnalysis:this.pngShowAnalysis,showFileDate:this.pngFileDate,showFileName:this.pngFileName,showThermalScale:this.pngShowScale,width:this.pngWidth})}
                    tooltip="${se(li.pngofentiregrouphint)}"
                    tooltip-placement="right"
                >
                    ${se(li.pngofentiregroup)}
                </thermal-btn>

                <thermal-btn 
                    slot="option" 
                    pre="CSV" 
                    @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}
                    tooltip=${se(li.csvofanalysisdatahint)}
                    tooltip-placement="right"
                >
                    ${se(li.csvofanalysisdata)}
                </thermal-btn>
            
            </thermal-dropdown>
        
        `}};kp.styles=ce`
        thermal-btn {
            text-align: left;
        }
    `;let Cp=kp;Sp([bt(),p({context:sd,subscribe:!0})],Cp.prototype,"pngColumns"),Sp([bt(),p({context:ad,subscribe:!0})],Cp.prototype,"pngGroupName"),Sp([bt(),p({context:Gc,subscribe:!0})],Cp.prototype,"pngFontSize"),Sp([bt(),p({context:Yc,subscribe:!0})],Cp.prototype,"pngShowAnalysis"),Sp([bt(),p({context:ed,subscribe:!0})],Cp.prototype,"pngFileDate"),Sp([bt(),p({context:Qc,subscribe:!0})],Cp.prototype,"pngFileName"),Sp([bt(),p({context:Hc,subscribe:!0})],Cp.prototype,"pngWidth"),Sp([bt(),p({context:Xc,subscribe:!0})],Cp.prototype,"pngShowScale");var Ep=Object.defineProperty,Tp=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Ep(t,i,o),o};const _p=class extends qh{constructor(){super(...arguments),this.pngWidth=1350}render(){return qe`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${se(li.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(e=>e.export.downloadPng())}>${se(li.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({columns:this.pngColumns,showAnalysis:this.pngAnalyses,showFileDate:this.pngFileDate,showFileName:this.pngFileName,showThermalScale:this.pngExportScale,showGroupName:this.pngExportGroupName,label:this.label,fontSize:this.pngFs})}>${se(li.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${se(li.csvofanalysisdata)}</button>
        
        `}};_p.styles=ce`

        :host {
        
            display: flex;
            flex-direction: column;
            gap: 5px;

        }

        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            white-space: preserve nowrap;
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }
    
    `;let Ap=_p;Tp([vt({type:String})],Ap.prototype,"label"),Tp([p({context:Hc,subscribe:!0})],Ap.prototype,"pngWidth"),Tp([p({context:Gc,subscribe:!0})],Ap.prototype,"pngFs"),Tp([bt(),p({context:Yc,subscribe:!0})],Ap.prototype,"pngAnalyses"),Tp([bt(),p({context:Xc,subscribe:!0})],Ap.prototype,"pngExportScale"),Tp([bt(),p({context:Qc,subscribe:!0})],Ap.prototype,"pngFileName"),Tp([bt(),p({context:ed,subscribe:!0})],Ap.prototype,"pngFileDate"),Tp([bt(),p({context:sd,subscribe:!0})],Ap.prototype,"pngColumns"),Tp([bt(),p({context:ad,subscribe:!0})],Ap.prototype,"pngExportGroupName");class Pp extends Error{constructor(e){super("Could not get the public IP address",e),this.name="IpNotFoundError"}}const $p=async(e,t,i={})=>{const r=[...t,...i.fallbackUrls??[]].map(async t=>{const i=await fetch(t);if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);const r=(await i.text()).trim();if(((e,t)=>{if(!e||"string"!=typeof e)return!1;if("v6"===t)return/^[\da-f:]+$/i.test(e)&&e.includes(":");const i=e.split(".");return 4===i.length&&i.every(e=>{const t=Number(e);return!Number.isNaN(t)&&t>=0&&t<=255})})(r,e))return r;throw new Error("Invalid IP")});try{return await Promise.any(r)}catch(s){const e=s.errors??[],t=e.at?.(-1)??s;throw new Pp({cause:t})}},Rp=(e,t,i)=>{const r=((e,t)=>{if(t&&t.throwIfAborted(),!e&&!t)return;const i=[];return e&&i.push(AbortSignal.timeout(e)),t&&i.push(t),1===i.length?i[0]:AbortSignal.any(i)})(i.timeout,i.signal);return(async(e,t)=>{if(!t)return e;t.throwIfAborted();const i=new Promise((e,i)=>{t.addEventListener("abort",()=>i(t.reason),{once:!0})});return Promise.race([e,i])})(t(),r)},Lp={timeout:5e3,onlyHttps:!1},Dp={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},Op=(Mp="v4",Ip=(e,t)=>$p(e,Dp[e],t),(e={})=>{const t={...Lp,...e};return Rp(0,()=>Ip(Mp,t),t)});var Mp,Ip,Up=Object.defineProperty;class zp extends qh{connectedCallback(){super.connectedCallback(),Op().then(e=>this.ip=e)}emitUpload(e,t){const i=window.navigator.userAgent,r=window.innerWidth,s=window.innerHeight,o=(new Date).getTime(),a=new CustomEvent("uploaded",{bubbles:!0,cancelable:!1,detail:{ip:this.ip,userAgent:i,windowWidth:r,windowHeight:s,time:o,fileName:e,fileSize:t}});this.dispatchEvent(a)}}((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Up(t,i,s)})([bt()],zp.prototype,"ip");var Fp=Object.defineProperty,Bp=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Fp(t,i,o),o};const Np=class extends zp{constructor(){super(...arguments),this.container=Wt(),this.hover=!1,this.uploading=!1}firstUpdated(e){if(super.firstUpdated(e),void 0!==this.container.value){const e=this.manager.service.handleDropzone(this.container.value,!1);e.onMouseEnter.add(this.UUID,()=>{console.log("mouseenter"),this.hover=!0}),e.onMouseLeave.add(this.UUID,()=>{console.log("mouseleave"),this.hover=!1}),e.onDrop.set(this.UUID,()=>{this.uploading=!0}),e.onProcessingEnd.add(this.UUID,async e=>{await Promise.all(e.map(async e=>{if(e instanceof Ao){const t=await e.createInstance(this.group);this.emitUpload(t.fileName,t.bytesize)}})),this.uploading=!1})}}render(){const e={dropin:!0,hover:this.hover,uploading:this.uploading};return qe`

            <div class="container">
            
                <div ${Yt(this.container)} class="${Vl(e)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${se(li.dragorselectfile)}</div>
                        <thermal-btn variant="foreground">${se(li.selectfile)}</thermal-btn>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>
        
        `}};Np.styles=ce`

        .container {
            color: var(--thermal-foreground);
        }

        .dropin {
            width: 100%;
            aspect-ratio: 4 / 3;
            max-height: 700px;
            transition: background .5s ease-in-out;
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;
            background: var( --thermal-slate );
            position: relative;
            overflow: hidden;

        }

        .dropin-gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, var(--thermal-slate-light) 0%, var(--thermal-slate) 100%);
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }

        .hover,
        .dropin:hover {
            .dropin-gradient {
                opacity: .5;
            }
        }

        .dropin-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var( --thermal-gap );
            transition: all .3s ease-in-out;
        }

        @-webkit-keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        @keyframes action {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }

        .dropin-uploading {
            transition: all .3s ease-in-out;
            position: absolute;
            
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            transform: translateY(100px);
            opacity: 0;

            color: var(--thermal-foreground);

            svg {
                width: 100px;
                -webkit-animation: action .5s infinite  alternate;
                animation: action .5s infinite  alternate;
            }

        }

        .dropin.uploading {
            .dropin-content {
                opacity: 0;
                transform: translateY( -100px );
            }
            .dropin-uploading {
                opacity: 1;
                transform: translateY(0);
            }
        }

    `;let jp=Np;Bp([bt()],jp.prototype,"container"),Bp([bt()],jp.prototype,"hover"),Bp([bt()],jp.prototype,"uploading");var Vp=Object.defineProperty,Hp=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Vp(t,i,o),o};const Wp=class extends zp{constructor(){super(...arguments),this.container=Wt(),this.hover=!1,this.uploading=!1}firstUpdated(e){super.firstUpdated(e),void 0!==this.container.value&&(this.listener=this.manager.service.handleDropzone(this.container.value,!1),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1}),this.listener.onDrop.set(this.UUID,()=>{this.uploading=!0}),this.listener.onProcessingEnd.add(this.UUID,async e=>{this.group.files.removeAllInstances(),await Promise.all(e.map(async e=>{if(e instanceof Ao){const t=await e.createInstance(this.group);this.emitUpload(t.fileName,t.bytesize)}})),this.uploading=!1}))}render(){const e=!1===this.uploading?se(li.uploadafile):qe`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;return qe`


            <thermal-btn @click="${()=>{this.listener&&this.listener.openFileDialog(!1)}}"><slot>${e}</slot></thermal-btn>

            <div class="container">
            
                <div ${Yt(this.container)}></div>

            </div>
        
        `}};Wp.styles=ce`

        .container {
            display: none;
        }

        .dropin {
            background: var( --thermal-slate );
            width: 100%;
            aspect-ratio: 4 / 3;
        }

        .hover {
            background: var( --thermal-slate-light );
        }

        svg {
            width: 1em;
        }



.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 21px;
  height: 1em;
}
.lds-ellipsis div {
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 0px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 7px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 14px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 21px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0px, 0);
  }
}


    
    `;let Gp=Wp;Hp([bt()],Gp.prototype,"container"),Hp([bt()],Gp.prototype,"hover"),Hp([bt()],Gp.prototype,"uploading");var qp=Object.defineProperty,Yp=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&qp(t,i,o),o};const Zp=class extends mc{constructor(){super(...arguments),this.size="sm",this.ref=Wt()}onInstanceCreated(e){}onFailure(){}render(){return qe`<slot 
    @click=${this.action} 
    @mouseenter=${this.enter}
    @focus=${this.enter}
    @mouseleave=${this.leave}
    @blur=${this.leave}
    ${Yt(this.ref)}
>
    <thermal-btn 
        variant=${this.variant||"default"}
        size=${this.size||"sm"}
        plain="${this.plain||!1}"
        class="default"
        tooltip=${this.tooltip}
        icon=${xt(this.icon)}
        iconStyle=${xt(this.iconStyle)}
    >${this.getDefaultLabel()}</thermal-btn>
</slot>`}};Zp.styles=ce`
slot {
    display: content;
}`;let Xp=Zp;Yp([vt({type:String,reflect:!1})],Xp.prototype,"variant"),Yp([vt({type:String,reflect:!0})],Xp.prototype,"size"),Yp([vt({type:String})],Xp.prototype,"icon"),Yp([vt({type:String})],Xp.prototype,"iconStyle"),Yp([vt({type:Boolean})],Xp.prototype,"plain");var Kp=Object.defineProperty;const Qp=class extends qh{connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return qe`
            <slot>
                <button class="default">${se(li.range).toLowerCase()}</button>
            </slot>
        `}};Qp.styles=Xp.styles;let Jp=Qp;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Kp(t,i,s)})([p({context:Ka,subscribe:!0})],Jp.prototype,"setter");const eu=(e,t,i)=>({ms:e,percent:e/t*100,type:i,label:ms(e,"m:ss")}),tu=(e,t,i,r)=>{const s=[];let o=1;const a=(t-e)/i;for(;o<i;){const t=e+o*a;t<r&&s.push(eu(t,r,"minor")),o+=1}return t<r&&s.push(eu(t,r,"major")),s},iu=6e4,ru=50,su=(e,t)=>{const i=Math.floor(e/ru)/Math.floor(t/6e4);let r=2;i>=2&&(r=4),i>=6&&(r=6),i>=12&&(r=12),i>=30&&(r=30);const s=[];let o=0,a=iu;for(;o<t;)tu(o,a,r,t).forEach(e=>s.push(e)),o+=iu,a+=iu;return s.push(eu(0,t,"bound")),s.push(eu(t,t,"bound")),s},ou=e=>qe`<div
        class="tick tick-${e.type}"
        style="left: ${e.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${e.label}</div>
    </div>`,au=(e,t,i)=>qe`<div 
        class="indicator-cursor indicator-cursor__${i}"
        style="left: ${e}%;"
        data-video-rerender
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${t}</div>
    </div>`,nu=(e,t,i,r)=>{const s=i/e*100,o=void 0!==r?r/e*100:void 0;return qe`<div class="ticks">
        
        ${t.map(ou)}

        ${au(s,ms(i,"m:ss:SSS"),"primary")}

        ${void 0!==r&&void 0!==o?au(o,ms(r,"m:ss:SSS"),"pointer"):Ze}

    </div>`},lu=ce`

    :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

    }

    .indicator-cursor {
        position: absolute;
        width: 0px;
        right: 0;
        font-size: var( --fs-sm );
        z-index: 11;        
    }

        .indicator-cursor__primary {
            --cursor-bg: var( --thermal-primary );
            --cursor-color: white;
        }

        .indicator-cursor__pointer {
            --cursor-bg: var( --thermal-foreground );
            --cursor-color: white;

            .indicator-cursor-arrow {
                position: absolute;
                top: calc( var( --thermal-fs ) * -1 - 6px);
            }

            .indicator-cursor-label {
                position: absolute;
                top: calc( var( --thermal-fs ) * -2 - 3px );
            }
        }

        .indicator-cursor-arrow {
            position: relative;
            width: 6px;
            height: 6px;
            content: "";
            background: var( --cursor-bg );
            left: -4px;
            rotate: 45deg;
        }

        .indicator-cursor-label {
            position: relative;
            top: -3px;
            width: ${ru}px;
            left: -${25}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${3}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${25}px;
            padding-right: ${25}px;
            box-sizing: border-box;
            width: 100%;
        }

        .tick {
            position: absolute;
            width: 0;
            color: var( --tick-color );
            opacity: var( --tick-opacity );
            font-size: var( --fs-sm );
        }

        .tick-bound {

            --tick-color: var( --thermal-foreground );

            .tick-label {
                background: var(--thermal-slate-dark);
                color: var(--thermal-background);
                position: relative;
                top: -${3}px;
            }

            .tick-pointer {
                width: ${6}px;
                height: ${6}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${3}px;
                rotate: 45deg;
            }
            
        }

    .tick-major {
        --tick-color: var( --thermal-slate-dark );
    }

    .tick-minor {
        --tick-color: var( --thermal-slate );
    }


    .tick-pointer {
            height: ${3}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${ru}px;
            position: relative;
            left: -${25}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var hu=Object.defineProperty,cu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&hu(t,i,o),o};const du=class extends qh{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=Wt(),this.indicatorRef=Wt()}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.files.addListener(this.UUID,e=>{void 0!==this.listener&&clearTimeout(this.listener),this.listener=setTimeout(async()=>{this.onRegistryBatchEnded(e)},0)}),this.group.playback.addListener(this.UUID,e=>this.ms=e),this.group.playback.onPlayingStatusChange.set(this.UUID,e=>this.playing=e),this.group.playback.onHasAnyCallback.set(this.UUID,e=>this.has=e)}updated(e){super.updated(e),e.has("ms")&&void 0!==this.ms&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(e){let t=0;this.forEveryAffectedInstance(e=>e.unmountFromDom()),this.instances=e.filter(e=>!(e instanceof Os)&&e.group.id===this.group.id),this.instances.forEach(e=>{e.timeline.duration>t&&(t=e.timeline.duration)}),this.longestDurationInMs=t,setTimeout(()=>{const e=this.getTimelineElement();if(e&&void 0!==this.longestDurationInMs){this.calculateTicks(e.clientWidth,this.longestDurationInMs);new ResizeObserver(e=>{const t=e[0];this.longestDurationInMs&&this.calculateTicks(t.contentRect.width,this.longestDurationInMs)}).observe(e)}},0)}calculateTicks(e,t){this.ticks=su(e,t)}forEveryAffectedInstance(e){this.instances.forEach(e)}percentToMs(e){if(void 0!==this.longestDurationInMs)return Math.floor(this.longestDurationInMs*(e/100))}msToPercent(e){if(void 0!==this.longestDurationInMs)return e/this.longestDurationInMs*100}getValueFromEvent(e){const t=e.layerX/e.target.clientWidth*100;return{percent:t,ms:this.percentToMs(t)}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(e){const t=e.layerX/e.target.clientWidth*100,i=this.percentToMs(t);i&&(this.ms=i)}handleTimelineEnter(e){const{ms:t}=this.getValueFromEvent(e);this.pointerMs=t}handleTimelineMove(e){const{ms:t}=this.getValueFromEvent(e);this.pointerMs=t}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return!1===this.has?Ze:qe`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${Yt(this.timelineRef)}
                @click=${e=>this.handleTimelineClick(e)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${Yt(this.indicatorRef)}></div>
            </div>

            ${void 0!==this.longestDurationInMs?nu(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):Ze}

        </div>`}};du.TICK_WIDTH=50,du.TICK_POINTER_HEIGHT=3,du.styles=ce`


        :host {

            --tick-color: var( --thermal-slate );
            --tick-opacity: 1;

            --cursor-color: var( --thermal-primary );
            --cursor-bg: var( --thermal-background );

            --fs-sm: calc( var(--thermal-fs) * .7 );

        }

        .container {

            padding-top: calc( var(--thermal-fs) + 6px);

        }

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
        }

        .background {
            width: 100%;
            height: 100%;
            background-color: var( --thermal-slate );
            pointer-events: none;
        }

        .indicator {
            height: 100%;
            position: absolute;
            content:"";
            top: 0;
            left: 0;
            background-color: var( --thermal-primary );
            pointer-events: none;
        }


        ${lu}
    
    `;let pu=du;cu([bt()],pu.prototype,"longestDurationInMs"),cu([bt()],pu.prototype,"ms"),cu([bt()],pu.prototype,"pointerMs"),cu([bt()],pu.prototype,"playing"),cu([bt()],pu.prototype,"instances"),cu([bt()],pu.prototype,"has"),cu([bt()],pu.prototype,"ticks"),cu([bt()],pu.prototype,"listener");var uu=Object.defineProperty,mu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&uu(t,i,o),o};class gu extends pi{constructor(){super(...arguments),this.showFullscreen=!1}}mu([d({context:si}),vt({reflect:!0,converter:ni})],gu.prototype,"locale"),mu([vt({type:String,reflect:!0,attribute:"label"})],gu.prototype,"label"),mu([vt({type:String,reflect:!0,attribute:"author"})],gu.prototype,"author"),mu([vt({type:String,reflect:!0,attribute:"license"})],gu.prototype,"license"),mu([vt({type:Boolean,converter:Pa(!1),attribute:"show-fullscreen"})],gu.prototype,"showFullscreen");var fu=Object.defineProperty,yu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&fu(t,i,o),o};class vu extends gu{constructor(){super(...arguments),this.pngExportController=new Aa(this),this.pngExportWidth=1200,this.pngExportFontSize=14,this.pngExportsAnalysis=!0,this.pngExportsFileName=!0,this.pngExportsThermalScale=!0,this.pngExportsFileDate=!0,this.pngExportLicense=void 0,this.advancedPalettes=!1}}yu([d({context:"config-png-export-controller"})],vu.prototype,"pngExportController"),yu([bt()],vu.prototype,"pngExportWidth"),yu([bt()],vu.prototype,"pngExportFontSize"),yu([bt()],vu.prototype,"pngExportsAnalysis"),yu([bt()],vu.prototype,"pngExportsFileName"),yu([bt()],vu.prototype,"pngExportsThermalScale"),yu([bt()],vu.prototype,"pngExportsFileDate"),yu([bt()],vu.prototype,"pngExportLicense"),yu([vt({type:Boolean,reflect:!0,attribute:"advanced-palettes"})],vu.prototype,"advancedPalettes"),yu([vt({type:String})],vu.prototype,"author"),yu([vt({type:String})],vu.prototype,"license");var bu=Object.defineProperty,wu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&bu(t,i,o),o};const xu=(i=class extends vu{constructor(){super(...arguments),this.fileProviderRef=Wt(),this.palette="jet",this.opacity=1,this.showHistogram=!0,this.showThermalScale=!0,this.UUID_INTERNAL=this.getUUID("internal")}firstUpdated(e){super.firstUpdated(e),oi(this),this.hydrateInternalListeners()}hydrateInternalListeners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID_INTERNAL,()=>this.hydrateInstanceAfterLoad(this.instance))}hydrateInstanceAfterLoad(e){e.group.registry.range.addListener(this.UUID_INTERNAL,e=>{void 0===e?(this.from=void 0,this.to=void 0):this.from===e.from&&this.to===e.to||(this.from=e.from,this.to=e.to)}),e.group.registry.opacity.addListener(this.UUID_INTERNAL,e=>{e!==this.opacity&&(this.opacity=e)}),e.group.registry.palette.addListener(this.UUID_INTERNAL,e=>{e!==this.palette&&(this.palette=e)}),e.slots.onSlot1Serialize.set(this.UUID,e=>{this.analysis1!==e&&(this.analysis1=e)}),e.slots.onSlot2Serialize.set(this.UUID,e=>{this.analysis2!==e&&(this.analysis2=e)}),e.slots.onSlot3Serialize.set(this.UUID,e=>{this.analysis3!==e&&(this.analysis3=e)}),e.slots.onSlot4Serialize.set(this.UUID,e=>{this.analysis4!==e&&(this.analysis4=e)}),e.slots.onSlot5Serialize.set(this.UUID,e=>{this.analysis5!==e&&(this.analysis5=e)}),e.slots.onSlot6Serialize.set(this.UUID,e=>{this.analysis6!==e&&(this.analysis6=e)}),e.slots.onSlot7Serialize.set(this.UUID,e=>{this.analysis7!==e&&(this.analysis7=e)})}beforeUpdate(e){const t=e.has("from"),r=e.has("to");(t||r)&&this.projectRangeToInternalRegistryIfDiffers(this.from,this.to),this.whenPropertyChanged(e,"opacity",e=>{this.opacity!==e&&this.instance.group.registry.opacity.imposeOpacity(this.opacity)}),this.whenPropertyChanged(e,"palette",e=>{this.palette!==e&&void 0!==this.palette&&this.instance.group.registry.palette.setPalette(this.palette)}),i.ANALYSIS_SLOTS.forEach((t,i)=>{this.beforeUpdatedAnalysisSlot(e,t,i)})}whenPropertyChanged(e,t,i){e.has(t)&&i(e.get(t))}beforeUpdatedAnalysisSlot(e,t,i){this.whenPropertyChanged(e,t,e=>{if(!this.instance)return;const r=i+1,s=this[t],o=this.instance.slots.getSlot(i)?.serialized;if(s!==o){const e=this.instance.slots.getSlot(r);void 0===s?this.instance.slots.removeSlotAndAnalysis(r):e?e.recieveSerialized(s):this.instance.slots.createAnalysisFromSerialized(s,r)}})}projectRangeToInternalRegistryIfDiffers(e,t){const i=this.instance.group.registry.range;void 0!==e&&void 0!==t?e===i.value?.from&&t===i.value?.to||i.imposeRange({from:e,to:t}):void 0!==i.value&&i.imposeRange(void 0)}renderScale(){return qe`${this.renderHistogram()}${this.renderThermalScale()}${this.renderTicksBar()}`}renderThermalScale(){return this.showThermalScale?qe`<registry-range-slider></registry-range-slider>`:Ze}renderHistogram(){return this.showHistogram?qe`<registry-histogram expandable="true"></registry-histogram>`:Ze}renderTicksBar(){return this.showThermalScale&&this.showHistogram?qe`<registry-ticks-bar></registry-ticks-bar>`:Ze}renderProviders(e){return qe`<manager-provider 
    slug="${this.UUID}"
    palette="${this.palette}"
>
    <registry-provider 
        slug="${this.UUID}"
        from="${xt(this.from)}"
        to="${xt(this.to)}"
        opacity="${this.opacity}"
    >
        <group-provider slug="${this.UUID}">
        
            <file-provider 
                ${Yt(this.fileProviderRef)} 
                thermal="${this.url}"
                visible="${xt(this.visible)}"
                batch="true"
                analysis1="${xt(this.analysis1)}"
                analysis2="${xt(this.analysis2)}"
                analysis3="${xt(this.analysis3)}"
                analysis4="${xt(this.analysis4)}"
                analysis5="${xt(this.analysis5)}"
                analysis6="${xt(this.analysis6)}"
                analysis7="${xt(this.analysis7)}"
                autoclear="true"
            >
                <notation-provider>
        
                    <slot name="notation" slot="notation"></slot>
        
                    ${e}
        
                </notation-provider>
        
            </file-provider>
        
        </group-provider>
    </registry-provider>
</manager-provider>`}},i.ANALYSIS_SLOTS=["analysis1","analysis2","analysis3","analysis4","analysis5","analysis6","analysis7"],i);wu([vt({type:String})],xu.prototype,"url"),wu([vt({type:String})],xu.prototype,"visible"),wu([vt({type:String})],xu.prototype,"palette"),wu([vt({type:Number})],xu.prototype,"from"),wu([vt({type:Number})],xu.prototype,"to"),wu([vt({type:Number})],xu.prototype,"opacity"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis1"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis2"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis3"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis4"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis5"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis6"),wu([vt({type:String,reflect:!0})],xu.prototype,"analysis7"),wu([vt({type:Boolean,reflect:!0,attribute:"show-histogram",converter:Pa(!0)})],xu.prototype,"showHistogram"),wu([vt({type:Boolean,reflect:!0,attribute:"show-thermal-scale",converter:Pa(!0)})],xu.prototype,"showThermalScale");let Su=xu;const ku=class extends Su{get instance(){if(!this.fileProviderRef.value)throw new Error("FileProviderElement not found. Make sure to include a <thermal-file-provider> element in the DOM.");if(!this.fileProviderRef.value.file)throw new Error("FileProviderElement does not have a file. Make sure to set the 'url' property of the <thermal-file-provider> element to a valid thermal file URL.");return this.fileProviderRef.value?.file}get manager(){return this.instance.group.registry.manager}renderProviders(e){return qe`<manager-provider
            slug=${this.UUID}
            .palette=${this.palette}
        >
            <registry-provider
                slug=${this.UUID}
                from=${xt(this.from)}
                to=${xt(this.to)}
                opacity=${this.opacity}
            >
                <group-provider slug=${this.UUID}>
                    <file-provider
                        ${Yt(this.fileProviderRef)}
                        thermal=${this.url}
                        visible=${xt(this.visible)}
                        batch=${!0}
                        .autoclear=${!0}
                        analysis1="${xt(this.analysis1)}"
                        analysis2="${xt(this.analysis2)}"
                        analysis3="${xt(this.analysis3)}"
                        analysis4="${xt(this.analysis4)}"
                        analysis5="${xt(this.analysis5)}"
                        analysis6="${xt(this.analysis6)}"
                        analysis7="${xt(this.analysis7)}"
                    >
                        ${e}
                    </file-provider>
                </group-provider>
            </registry-provider>    
        </manager-provider>`}render(){return this.renderProviders(qe`<thermal-app label="something">
        
            <file-canvas></file-canvas>
            
        </thermal-app>`)}};ku.styles=ce`

        manager-provider,
        registry-provider,
        group-provider,
        file-provider {
            display: contents;
        }
    
    `;let Cu=ku;var Eu=Object.defineProperty,Tu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Eu(t,i,o),o};const _u=class extends ld{constructor(){super(...arguments),this.dropinRef=Wt(),this.groupRef=Wt(),this.loaded=!1,this.files=[],this.pngExportWidth=1200,this.pngExportWidthSetterContext=e=>{this.pngExportWidth=e},this.pngExportFs=20,this.pngExportFsSetterContext=e=>{this.pngExportFs=e}}get manager(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),Op().then(e=>this.ip=e)}firstUpdated(e){super.firstUpdated(e),oi(this),void 0!==this.groupRef.value&&this.groupRef.value.group.files.addListener(this.UUID,e=>{void 0!==this.groupRef.value&&(this.groupRef.value.group.analysisSync.turnOff(),e.length>0&&this.groupRef.value.group.analysisSync.turnOn(e[0])),e.forEach(e=>{e.analysis.reset(),e.analysis.layers.clear();const t={ip:this.ip,fileName:e.fileName,fileSize:e.bytesize,fileIsSequence:e.timeline.isSequence,fileNumFrames:e.timeline.frameCount,fileWidth:e.width,fileHeight:e.height,fileTimestamp:e.timeline.frames[0].absolute,fileDataType:e.fileDataType,userAgent:window.navigator.userAgent,windowWidth:window.innerWidth,windowHeight:window.innerHeight,time:(new Date).getTime(),url:window.location.href};this.dispatchEvent(new CustomEvent("uploaded",{detail:t,bubbles:!0,composed:!0}))}),void 0!==this.listener&&clearTimeout(this.listener),0===e.length?this.files=[]:this.files=[e[0]],this.listener=setTimeout(async()=>{const e=this.groupRef.value?.group.registry;void 0!==e&&(await e.postLoadedProcessing(),void 0!==e.minmax.value&&e.range.imposeRange({from:e.minmax.value.min,to:e.minmax.value.max}))},0)})}handleClear(){void 0!==this.groupRef.value&&this.groupRef.value.group.files.removeAllInstances()}renderIntroScene(){return qe`
            <group-dropin></group-dropin>
        `}renderBrowserScene(){return qe`
        <div class="browser-bar" slot="pre">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
            
        </div>

        <div class="browser">
            
            <div class="browser-tools">
                <manager-tool-bar></manager-tool-bar>
            </div>
            <div class="browser-content">
                ${1===this.files.length?this.renderOneFile():this.renderMultipleFiles()}
            </div>
        </div>
        `}renderOneFile(){return qe`
        ${this.files.map(e=>this.renderDetail(e))}
        `}renderDetail(e){return qe`
            <article class="file">
                <file-mirror .file="${e}" autoclear="true">

                    <file-detail .onback=${()=>e.group.files.removeFile(e)}></file-detail>
                
                </file-mirror>
            </article>
        `}renderMultipleFiles(){return qe`
        <div class="files-multiple">
        ${this.files.map(e=>this.renderDetail(e))}
        </div>
        `}render(){try{return qe`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${Yt(this.groupRef)} slug="${this.UUID}">

                        <thermal-app 
                            label="LabIR Edu Analyser"
                            showfullscreen="true"
                        >

                            <group-dropin-input slot="bar-pre"></group-dropin-input>

                            ${this.files.length>0?qe`
                                <thermal-btn slot="bar-pre" @click="${()=>this.handleClear()}" tooltip="Odstranit tento soubor a nahrát nový">${se(li.clear)}</thermal-btn>

                                <manager-palette-dropdown slot="bar-pre"></manager-palette-dropdown>

                                <registry-range-form stacked="false" slot="bar-pre"></registry-range-form>

                                        
                                `:Ze}

                            ${this.files.length>1?qe`
                                    <group-download-dropdown slot="bar-pre"></group-download-dropdown><registry-range-full-button slot="bar-pre"></registry-range-full-button>`:Ze}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${se(li.config)}" slot="bar-pre">
                                <thermal-btn slot="invoker" tooltip="${se(li.config)}" icon="settings" iconStyle="solid">
                                </thermal-btn>
                                <div slot="content">
                                    <table>
                                        <manager-export-panel></manager-export-panel>
                                        <display-panel></display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            <slot name="bar-pre" slot="bar-pre"></slot>

                            ${0===this.files.length?this.renderIntroScene():this.renderBrowserScene()}
                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}catch(e){return qe`Stala se chyba`}}};_u.styles=ce`
    
        .browser {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: var(--thermal-gap);
            padding-top: var(--thermal-gap);
        }

        .file {
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            background: var(--thermal-background);

            file-analysis-graph {
                height: 300px;
            }

            header {
                display: flex;
                align-items: center;
            }

            .file-label {
                display: flex;
                flex-grow: 1;
                gap: 5px;
                align-items: center;
                padding-bottom: var(--thermal-gap);
                div {
                    opacity: .5;
                }
            }

            h1, h2 {
                margin: 0;
                padding: 0;
                font-size: var(--thermal-fs);
                line-height: 1em;
            }

            .file-expanded {
                display: grid;
                grid-template-columns: 50% calc( 50%  - var(--thermal-gap));
                gap: var(--thermal-gap);
            }

        }

        .files-multiple {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(calc(100% / 4), 1fr));
            gap: var(--thermal-gap);
        }

    `;let Au=_u;Tu([bt()],Au.prototype,"dropinRef"),Tu([bt()],Au.prototype,"groupRef"),Tu([bt()],Au.prototype,"loaded"),Tu([bt()],Au.prototype,"listener"),Tu([bt()],Au.prototype,"files"),Tu([bt()],Au.prototype,"ip"),Tu([d({context:Hc})],Au.prototype,"pngExportWidth"),Tu([d({context:Wc})],Au.prototype,"pngExportWidthSetterContext"),Tu([d({context:Gc})],Au.prototype,"pngExportFs"),Tu([d({context:qc})],Au.prototype,"pngExportFsSetterContext"),Tu([d({context:si}),vt({reflect:!0,converter:ni})],Au.prototype,"locale");var Pu=Object.defineProperty;const $u=class extends gu{constructor(){super(...arguments),this.interactiveanalysis=!0,this.managerController=new zh(this),this.palette="jet",this.advancedPalettes=!1,this.smoothThermograms=!1,this.smoothGraph=!1,this.tool="inspect",this.registryController=new Vh(this),this.opacity=1,this.loading=!1,this.groupController=new Lh(this),this.autoclearGroup=!0,this.fileController=new Jh(this),this.ms=0,this.playbackSpeed=1,this.autoHighlight=!1,this.fileLoadController=new zc(this)}updated(e){super.updated(e),this.managerController.hostUpdatedWatcher(e),this.registryController.hostUpdatedWatcher(e),this.groupController.hostUpdatedWatcher(e),this.fileLoadController.hostUpdatedWatcher(e),this.fileController.hostUpdatedWatcher(e)}render(){return qe`<thermal-app 
            label="${this.label}" 
            author="${this.author}" 
            license="${this.license}"
            .show-fullscreen=${this.showFullscreen}
        >

            <file-download-dropdown slot="bar-pre"></file-download-dropdown>
            <file-info-button slot="bar-pre"></file-info-button>

            <manager-palette-dropdown slot="bar-pre"></manager-palette-dropdown>
            <registry-range-form slot="bar-pre"></registry-range-form>
            <registry-opacity-slider slot="bar-pre"></registry-opacity-slider>

            <registry-histogram slot="pre" interactive="true"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre"></registry-ticks-bar>

            
            <div class="layout">
                <manager-tool-bar></manager-tool-bar>
                <div>
                    <file-canvas></file-canvas>
                    <file-timeline></file-timeline>
                </div>
                <file-analysis-complex></file-analysis-complex>
            </div>
            
        </thermal-app>`}};$u.properties={...gu.properties,...zh.HOST_PROPERTIES,...Vh.HOST_PROPERTIES,...Lh.HOST_PROPERTIES,...Jh.HOST_PROPERTIES,...zc.HOST_PROPERTIES},$u.styles=ce`
    
        .layout {
            display: grid;
            grid-template-columns: min-content 1fr 1fr;
            gap: 1em;
            margin-top: 1em;
        }
    
    `;let Ru=$u;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&Pu(t,i,s)})([d({context:rn}),vt({type:String,reflect:!0,converter:Pa(!0)})],Ru.prototype,"interactiveanalysis");var Lu=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,Ou=(e,t,i,r)=>{for(var s,o=r>1?void 0:r?Du(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r?s(t,i,o):s(o))||o);return r&&o&&Lu(t,i,o),o};let Mu=class extends pi{render(){return Ze}};Mu.styles=ce`
        :host {
            display: none;
        }
    `,Ou([vt({type:String})],Mu.prototype,"lrc",2),Ou([vt({type:String})],Mu.prototype,"png",2),Ou([vt({type:String})],Mu.prototype,"label",2),Mu=Ou([gt("thermal-file")],Mu);class Iu{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){let t;this.flush(),e.forEach(e=>{const i=async t=>{if(t instanceof Os)return;const i=e.innerHTML.trim(),r=i.length>0?i:void 0;this.records.push({instance:t,innerHtml:r,label:e.label})};void 0!==e.lrc&&(void 0===t?(t=this.group.registry.batch.request(e.lrc,e.png,this.group,i,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(e.lrc,e.png,this.group,i))})}processParsedFiles(e){let t;this.flush(),e.forEach(e=>{const i=async t=>{if(t instanceof Os)return;const i=e.note??"",r=i.length>0?i:void 0;this.records.push({instance:t,innerHtml:r,label:e.label})};void 0===t?(t=this.group.registry.batch.request(e.thermal,e.visible,this.group,i,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(e.thermal,e.visible,this.group,i)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let r=this.groups.get(i);if(!r){const e=this.getGroupToTimestamp(t),{label:s,info:o}=this.getGroupLabels(t),a={label:s??"",info:o,from:i,to:e,files:[]};r=a,this.groups.set(i,a)}e.time=this.getItemLabel(e.instance.timestamp),r.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((e,t)=>e.instance.timestamp-t.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return"none"===this.grouping?-1/0:"hour"===this.grouping?function(e,t){const i=wr(e,t?.in);return i.setMinutes(0,0,0),i}(e).getTime():"day"===this.grouping?_r(e).getTime():"week"===this.grouping?kr(e).getTime():"month"===this.grouping?Rr(e).getTime():"year"===this.grouping?Lr(e).getTime():NaN}getGroupToTimestamp(e){return"none"===this.grouping?1/0:"hour"===this.grouping?function(e,t){const i=wr(e,t?.in);return i.setMinutes(59,59,999),i}(e).getTime():"day"===this.grouping?function(e,t){const i=wr(e,t?.in);return i.setHours(23,59,59,999),i}(e).getTime():"week"===this.grouping?Dr(e).getTime():"month"===this.grouping?$r(e).getTime():"year"===this.grouping?function(e,t){const i=wr(e,t?.in),r=i.getFullYear();return i.setFullYear(r+1,0,0),i.setHours(23,59,59,999),i}(e).getTime():NaN}getGroupLabels(e){return"none"===this.grouping?{}:"hour"===this.grouping?{label:ms(e,"H:00 d. M. yyyy")}:"day"===this.grouping?{label:ms(e,"d.M.yyyy")}:"week"===this.grouping?{label:"Week "+ms(e,"w")+" of "+ms(e,"yyyy"),info:[Eo.humanDate(kr(e).getTime()),Eo.humanDate(Dr(e).getTime())].join(" - ")}:"month"===this.grouping?{label:ms(e,"MMMM yyyy"),info:[Eo.humanDate(Rr(e).getTime()),Eo.humanDate($r(e).getTime())].join(" - ")}:"year"===this.grouping?{label:ms(e,"yyyy")}:{}}getItemLabel(e){return"none"===this.grouping?Eo.human(e):"hour"===this.grouping||"day"===this.grouping?ms(e,"H:mm:ss"):("week"===this.grouping||"month"===this.grouping||this.grouping,Eo.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var Uu=Object.defineProperty,zu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Uu(t,i,o),o};const Fu=(r=class extends ld{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=e=>{this.pngExportWidth=e},this.pngExportFs=20,this.pngExportFsSetterContext=e=>{this.pngExportFs=e}}parseFilesProperty(e){return e.split(r.FILE_RECORD_SEPARATOR).map(e=>{let t,i,s,o;return e.trim().split(r.FILE_SEGMENT_SEPAROATOR).forEach(e=>{const a=e.trim().split(r.FILE_COMPONENT_SEPAROATOR);if(a.length>2)return;const[n,l]=a,h=n.trim(),c=l.trim();switch(h){case r.FILE_THERMAL_KEY:t=c;break;case r.FILE_VISIBLE_KEY:i=c;break;case r.FILE_LABEL_KEY:s=c;break;case r.FILE_NOTE_KEY:o=c}}),void 0===t?void 0:{thermal:t,visible:i,note:o,label:s}}).filter(e=>void 0!==e)}},r.FILE_RECORD_SEPARATOR=";",r.FILE_SEGMENT_SEPAROATOR="|",r.FILE_COMPONENT_SEPAROATOR="~",r.FILE_THERMAL_KEY="thermal",r.FILE_VISIBLE_KEY="visible",r.FILE_LABEL_KEY="label",r.FILE_NOTE_KEY="note",r);zu([vt({type:String,reflect:!1,attribute:!0,converter:Pa(!1)})],Fu.prototype,"showembed"),zu([vt({type:String,reflect:!1,attribute:!0,converter:Pa(!1)})],Fu.prototype,"showabout"),zu([vt({type:String,reflect:!1,attribute:!0,converter:Pa(!1)})],Fu.prototype,"showtutorial"),zu([vt({type:String,reflect:!1,converter:Pa(!0)})],Fu.prototype,"showfullscreen"),zu([vt({type:String,reflect:!0,converter:Pa(!0)})],Fu.prototype,"showhistogram"),zu([d({context:rn}),vt({type:String,reflect:!0,converter:Pa(!0)})],Fu.prototype,"interactiveanalysis"),zu([d({context:Hc})],Fu.prototype,"pngExportWidth"),zu([d({context:Wc})],Fu.prototype,"pngExportWidthSetterContext"),zu([d({context:Gc})],Fu.prototype,"pngExportFs"),zu([d({context:qc})],Fu.prototype,"pngExportFsSetterContext"),zu([d({context:si}),vt({reflect:!0,converter:ni})],Fu.prototype,"locale");let Bu=Fu;var Nu=Object.defineProperty,ju=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Nu(t,i,o),o};const Vu=class extends Bu{constructor(){super(...arguments),this.groupRef=Wt(),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new xs,this.onColumns=new xs,this.preservetime=!0,this.state=0,this.detail=void 0,this.loading=!1}get manager(){return this.groupRef.value.group.registry.manager}connectedCallback(){super.connectedCallback();const e=Oh(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);e.files.addListener(this.UUID,t=>{if(!1===e.analysisSync.value){const i=t[0];i&&e.analysisSync.turnOn(i)}}),this.group=e,this.grouper=new Iu(this,e),this.onGroupInit.call(this.group)}async load(){this.loading=!0;const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(e=>e instanceof Mu)),this.group.files.addListener(this.UUID,e=>{this.loading=!1,e.length<4?this.columns=e.length:this.columns=4})}firstUpdated(e){super.firstUpdated(e),oi(this),this.group.registry.manager.palette.setPalette(this.palette),void 0!==this.from&&void 0!==this.to&&this.group.registry.range.imposeRange({from:this.from,to:this.to}),setTimeout(()=>this.load(),0)}updated(e){if(super.updated(e),e.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),e.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),e.has("columns")&&this.onColumns.call(this.columns),e.has("files")&&this.files&&void 0!==e.get("files")){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}e.has("analysis1")&&this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),e.has("analysis2")&&this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),e.has("analysis3")&&this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),e.has("analysis4")&&this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),e.has("analysis5")&&this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),e.has("analysis6")&&this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),e.has("analysis7")&&this.group.analysisSync.recieveSlotSerialized(this.analysis7,7)}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}async showDetail(e,t){this.detail={lrc:e,png:t},this.group.files.removeAllInstances(),this.group.registry.range.reset(),this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.state=1,this.scrollToComponent()}async closeDetail(){delete this.detail,this.detail=void 0,this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.group.registry.range.reset(),this.load(),this.state=0,this.scrollToComponent()}renderGroup(){return qe`${this.groups.map(e=>qe`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${e.files.map(e=>qe`<div class="file">
                    <file-mirror .file=${e.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${()=>{this.showDetail(e.instance.thermalUrl,e.instance.visibleUrl)}}
                            label=${xt(e.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `}renderDetail(){return void 0===this.detail?Ze:qe`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${()=>this.closeDetail()}></file-detail>
            </file-provider>
        </div>`}render(){return qe`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${xt(this.from)}" to="${xt(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${Yt(this.groupRef)}>

                        <thermal-app
                            author=${xt(this.author)}
                            license=${xt(this.license)}
                            showfullscreen="true"
                            label=${xt(this.label)}
                        >

                            ${!1===this.loading?qe`                                

                                <manager-palette-dropdown slot="bar-post"></manager-palette-dropdown>
                                
                                <registry-range-form slot="bar-pre"></registry-range-form>
                                        

                                ${0===this.state?qe`
                                        ${this.grouper.numFiles>0?qe`<group-download-dropdown slot="bar-pre"></group-download-dropdown>`:Ze}
                                        <div slot="bar-pre">
                                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${e=>{const t=e.target,i=t?.value;void 0!==i&&(this.columns=parseInt(i))}}
                                            ></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${se(li.columns,{num:this.columns})}</div>
                                    </div>

                            <group-analysis-sync-button slot="bar-pre"></group-analysis-sync-button>
                                        `:Ze}
                                    

                            ${!0===this.showabout?qe`<app-info-button slot="bar-pre"></app-info-button>`:Ze}

                                        `:Ze}

                            <thermal-dialog label="${se(li.config)}" slot="close">
                                
                                <thermal-btn slot="invoker" icon="settings" iconStyle="solid" tooltip="${se(li.config)}"></thermal-btn>

                                <div slot="content">
                                    <table>
                                        <manager-export-panel></manager-export-panel>
                                        <display-panel></display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            ${!1===this.loading?qe`
                                    ${!0===this.showhistogram?qe`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:Ze}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                `:Ze}
                            

                            ${0===this.state?qe`
                                <group-chart slot="pre"></group-chart>
                            `:Ze}

                            ${!0===this.loading?qe`<thermal-poster message="${se(li.loading)}"></thermal-poster>`:qe`<div class="app-content">

                                    <slot></slot>

                                    <manager-tool-bar></manager-tool-bar>

                                    <div class="app-content-main">
                                    ${0===this.state?this.renderGroup():this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${0===this.state?qe`
                                <group-timeline></group-timeline>
                            `:Ze}
                            `}
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};Vu.styles=ce`


        :host {
            --gap: calc(var(--thermal-gap) * .5);
        }

        .app-content {
            box-sizing: border-box;
            display: grid;
            width: 100%;
            gap: var(--thermal-gap);
            grid-template-columns: 30px 1fr;
        }


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            margin-top: calc( var( --thermal-gap ) * .5 );
            background-color: color-mix(in srgb, var( --thermal-slate-light ), #fff);
        }

        .group__bordered .group-files {
            padding: calc( var( --thermal-gap ) * .5 );
        }

        

        .group-files {
            display: flex;
            flex-wrap: wrap;

            div file-mirror {
                padding: calc( var(--gap) * .5);
                display: block;
            }
        }

        .group-files-1 div { width: 100%; }
        .group-files-2 div { width: 50%; }
        .group-files-3 div { width: calc(100% / 3); }
        .group-files-4 div { width: calc(100% / 4); }
        .group-files-5 div { width: calc(100% / 5); }
        .group-files-6 div { width: calc(100% / 6); }
        .group-files-7 div { width: calc(100% / 7); }
        .group-files-8 div { width: calc(100% / 8); }
        .group-files-9 div { width: calc(100% / 9); }
        .group-files-10 div { width: calc(100% / 10); }

        .group-header {

            display: flex;
            gap: var(--thermal-gap);
            align-items: center;
            padding: calc( var( --thermal-gap ) * .5 );
            border-bottom: 1px solid var( --thermal-slate-light );
        }

        .group-title {
            margin: 0;
            padding: 0;
            font-size: calc( var(--thermal-fs) * 1.2 );
            color: var( --thermal-foreground );
        }

        .group-info {
            color: var( --thermal-slate );
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
        }

        .detail {
            padding: var(--thermal-gap);
            background: var(--thermal-background);
            box-sizing: border-box;
            border-radius: var(--thermal-radius);
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            width: 100%;
        }

        manager-tool-bar {
            position: sticky;
            top: 0px;
            z-index: 999;
        }


    
    `;let Hu=Vu;ju([vt({type:String,reflect:!0,attribute:!0})],Hu.prototype,"palette"),ju([vt({type:Number,reflect:!0})],Hu.prototype,"from"),ju([vt({type:Number,reflect:!0})],Hu.prototype,"to"),ju([vt({type:String,reflect:!0})],Hu.prototype,"author"),ju([vt({type:String,reflect:!0})],Hu.prototype,"label"),ju([vt({type:String,reflect:!1})],Hu.prototype,"description"),ju([vt({type:String,reflect:!0})],Hu.prototype,"license"),ju([bt(),wt({flatten:!0})],Hu.prototype,"entries"),ju([vt({type:String,reflect:!0})],Hu.prototype,"slug"),ju([vt()],Hu.prototype,"columns"),ju([vt()],Hu.prototype,"breakpoint"),ju([vt({type:String,reflect:!0})],Hu.prototype,"grouping"),ju([bt()],Hu.prototype,"groups"),ju([vt({type:String})],Hu.prototype,"files"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis1"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis2"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis3"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis4"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis5"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis6"),ju([vt({type:String,reflect:!0})],Hu.prototype,"analysis7"),ju([vt({type:String,reflect:!0,converter:Pa(!1)})],Hu.prototype,"preservetime"),ju([bt()],Hu.prototype,"state"),ju([bt()],Hu.prototype,"detail"),ju([bt()],Hu.prototype,"loading");const Wu=new Promise((e,t)=>{if("undefined"!=typeof google&&google.charts&&"function"==typeof google.charts.load)e();else{let i=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');i||(i=document.createElement("script"),i.src="https://www.gstatic.com/charts/loader.js",document.head.appendChild(i)),i.addEventListener("load",e),i.addEventListener("error",t)}});async function Gu(e={}){await Wu;const{version:t="current",packages:i=["corechart"],language:r=document.documentElement.lang||"en",mapsApiKey:s}=e;return google.charts.load(t,{packages:i,language:r,mapsApiKey:s})}async function qu(e){if(await Gu(),null==e)return new google.visualization.DataTable;if(e.getNumberOfRows)return e;if(e.cols)return new google.visualization.DataTable(e);if(e.length>0)return google.visualization.arrayToDataTable(e);if(0===e.length)throw new Error("Data was empty.");throw new Error("Data format was not recognized.")}var Yu=Object.defineProperty,Zu=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Yu(t,i,o),o};const Xu=["ready","select"],Ku={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},Qu=class extends ut{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.chartRef=Wt(),this.onWrapper=new xs,this.left=0,this.top=0,this.w=0,this.h=0}render(){return qe`
      <div id="styles"></div>
      <div ${Yt(this.chartRef)} id="chartdiv"></div>
    `}getRef(){return this.chartRef.value}firstUpdated(){(async function(e){return await Gu(),new google.visualization.ChartWrapper({container:e})})(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.onWrapper.call(e),this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Xu,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(null==this.chartWrapper)return;this.chartWrapper.setChartType(Ku[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(e=>!Xu.includes(e)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,e=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:e}}))})}selectionChanged(){if(null==this.chartWrapper)return;const e=this.chartWrapper.getChart();if(null!=e&&e.setSelection){if("timeline"===this.type){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){null!=this.chartWrapper&&null!=this._data&&(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,void 0!==this.redrawTimeoutId&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const e=this.chartWrapper.visualization.ha.O;this.left=e.left,this.top=e.top,this.w=e.width,this.h=e.height},5))}get imageURI(){if(null==this.chartWrapper)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(e&&t)try{const i=await qu({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e,t=this.data;if(!t)return;let i=!1;try{t=JSON.parse(t)}catch(r){i="string"==typeof t||t instanceof String}e=i?fetch(t).then(e=>e.json()):Promise.resolve(t),e.then(qu).then(e=>{this._data=e})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",i.getAttribute("href")),e.appendChild(t)}}};Qu.styles=ce`
    :host {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin: 0;
      padding: 0;
      width: 400px;
      height: 300px;
    }

    :host([hidden]) {
      display: none;
    }

    :host([type="gauge"]) {
      width: 300px;
      height: 300px;
    }

    #chartdiv {
      width: 100%;
    }

    /* Workaround for slow initial ready event for tables. */
    .google-visualization-table-loadtest {
      padding-left: 6px;
    }
  `;let Ju=Qu;Zu([vt({type:String,reflect:!0})],Ju.prototype,"type"),Zu([vt({type:Array})],Ju.prototype,"events"),Zu([vt({type:Object,hasChanged:()=>!0})],Ju.prototype,"options"),Zu([vt({type:Array})],Ju.prototype,"cols"),Zu([vt({type:Array})],Ju.prototype,"rows"),Zu([vt({type:String})],Ju.prototype,"data"),Zu([vt({type:Object})],Ju.prototype,"view"),Zu([vt({type:Array})],Ju.prototype,"selection"),Zu([vt({type:Object})],Ju.prototype,"_data"),Zu([vt({type:Number,reflect:!0})],Ju.prototype,"left"),Zu([vt({type:Number,reflect:!0})],Ju.prototype,"top"),Zu([vt({type:Number,reflect:!0})],Ju.prototype,"w"),Zu([vt({type:Number,reflect:!0})],Ju.prototype,"h");var em=Object.defineProperty,tm=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&em(t,i,o),o};const im=class extends pi{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetInitialColor.delete(this.UUID);const i=this.analysis;this.color=i.initialColor,i.onSetInitialColor.set(this.UUID,e=>{this.color=e})}}renderColor(e){return qe`<i style="background-color: ${e};" aria-hidden></i><span>${e}</span>`}render(){return void 0===this.color?Ze:qe`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${an(Ks,e=>qe`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(e)}}>
                        ${this.renderColor(e)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};im.styles=ce`

        thermal-dropdown div {
            display: flex;
            gap: 0.5em;
            border-radius: var( --thermal-radius );
            cursor: pointer;
            align-items: center;
        }

        thermal-dropdown .option {
            margin-bottom: 0px;
            padding: 5px;
        }

        thermal-dropdown div i {
            width: 1em;
            height: 1em;
            border-radius: 50%;
        }

        thermal-dropdown .option:hover {
            background-color: var( --thermal-slate );
        }
    
    `;let rm=im;tm([vt()],rm.prototype,"analysis"),tm([bt()],rm.prototype,"color");var sm=Object.defineProperty,om=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&sm(t,i,o),o};const am=class extends pi{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,e=>{this.name=e})}}render(){return qe`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=""!==t.value?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};am.styles=ce`

    
    `;let nm=am;om([vt()],nm.prototype,"analysis"),om([bt()],nm.prototype,"name");var lm=Object.defineProperty,hm=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&lm(t,i,o),o};const cm=class extends pi{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSerializableChange.delete(this.UUID);const i=this.analysis;this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height,this.maxX=i.file.width,this.maxY=i.file.height,i.onSerializableChange.set(this.UUID,e=>{this.top=e.top,this.left=e.left,this.width=e.width,this.height=e.height,this.right=e.left+e.width,this.bottom=e.top+e.height})}}handleInput(e,t){const i=e.target,r=parseInt(i.value);isNaN(r)||(t(r),this.analysis.onMoveOrResize.call(this.analysis))}render(){return qe`

            <div class="table">

                <thermal-field label=${se(li.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${se(li.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${se(li.left)}>
                    <input 
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${void 0!==this.right?this.right-1:this.maxX}
                        @change=${e=>this.handleInput(e,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

                <thermal-field label=${se(li.right)}>
                    <input 
                        name="right" 
                        value=${this.right} 
                        type="number" 
                        step="1" 
                        min=${void 0!==this.left?this.left+1:0} 
                        max=${this.maxX}
                        @change=${e=>this.handleInput(e,e=>{this.analysis.setRight(e)})}
                    />
                </thermal-field>

                <thermal-field label=${se(li.top)}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0"
                        max=${void 0!==this.bottom?this.bottom-1:this.maxY}
                        @change=${e=>this.handleInput(e,e=>{this.analysis.setTop(e)})}
                    />
                </thermal-field>

                <thermal-field label=${se(li.bottom)}>
                    <input 
                        name="bottom" 
                        value=${this.bottom} 
                        type="number" 
                        step="1" 
                        min=${void 0!==this.top?this.top+1:0}
                        max=${this.maxY}
                        @change=${e=>this.handleInput(e,e=>{this.analysis.setBottom(e)})}
                    />
                </thermal-field>
                

            </div>
    
        
        `}};cm.styles=ce`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;let dm=cm;hm([vt()],dm.prototype,"analysis"),hm([bt()],dm.prototype,"color"),hm([bt()],dm.prototype,"top"),hm([bt()],dm.prototype,"left"),hm([bt()],dm.prototype,"width"),hm([bt()],dm.prototype,"height"),hm([bt()],dm.prototype,"type"),hm([bt()],dm.prototype,"right"),hm([bt()],dm.prototype,"bottom"),hm([bt()],dm.prototype,"maxX"),hm([bt()],dm.prototype,"maxY");var pm=Object.defineProperty,um=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&pm(t,i,o),o};const mm=class extends pi{constructor(){super(...arguments),this.topInputRef=Wt(),this.leftInputRef=Wt()}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSerializableChange.delete(this.UUID);const i=this.analysis;this.top=i.top,this.left=i.left,this.maxX=i.file.width,this.maxY=i.file.height,i.onSerializableChange.set(this.UUID,e=>{this.top=e.top,this.left=e.left})}}handleInput(e,t){const i=e.target,r=parseInt(i.value);isNaN(r)||(t(r),this.analysis.onMoveOrResize.call(this.analysis))}render(){return qe`

            <div class="table">

                <thermal-field label=${se(li.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${se(li.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${se(li.top)} hint=${se(li.fromto,{from:0,to:this.maxX})}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxY}
                        @change=${e=>this.handleInput(e,e=>{this.analysis.setTop(e)})}
                    />
                </thermal-field>

                <thermal-field label=${se(li.left)} hint=${se(li.fromto,{from:0,to:this.maxX})}>
                    <input
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxX}
                        @change=${e=>this.handleInput(e,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

            </div>
        
        `}};mm.styles=ce`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;let gm=mm;um([vt()],gm.prototype,"analysis"),um([bt()],gm.prototype,"top"),um([bt()],gm.prototype,"left"),um([bt()],gm.prototype,"maxX"),um([bt()],gm.prototype,"maxY");var fm=Object.defineProperty,ym=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&fm(t,i,o),o};const vm=class extends mc{constructor(){super(...arguments),this.mayHaveGraph=!1,this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1,this.graphRef=Wt(),this.graphWidth=0,this.graphHeight=0,this.hydrated=!1,this.showhint=!0,this.pointerUpListener=()=>{this.isDrawingAnalysis=!1}}connectedCallback(){super.connectedCallback(),this.hydrate()}disconnectedCallback(){super.disconnectedCallback(),this.dehydrate()}onInstanceCreated(){this.hydrate()}onFailure(){}hydrate(){const e=this.file;e&&!this.hydrated&&(this.mayHaveGraph=e.timeline.isSequence,e.analysis.value.length>0&&(this.hasAnalysis=!0),e.analysis.layers.onAdd.set(this.UUID,e=>this.watchAnalysis(e)),e.analysis.value.forEach(e=>this.watchAnalysis(e)),this.hasGraph=e.analysisData.hasActiveGraphs,e.analysis.layers.onRemove.set(this.UUID,()=>{!0===this.hasAnalysis&&0===e.analysis.layers.size&&(this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1)}),this.hydrated=!0)}watchAnalysis(e){!1===this.hasAnalysis&&(this.hasAnalysis=!0);const t=e.file.dom?.listenerLayer?.getLayerRoot();t?.removeEventListener("pointerup",this.pointerUpListener),t?.addEventListener("pointerup",this.pointerUpListener),e.graph.onGraphActivation.set(this.UUID,(t,i,r)=>{if(t||i||r)this.hasGraph=!0;else{const t=e.file.analysis.value.reduce((e,t)=>!0===e?e:t.graph.state.MIN||t.graph.state.MAX||t.graph.state.AVG,!1);this.hasGraph=t}})}dehydrate(){const e=this.file;e&&(e.analysis.layers.onAdd.delete(this.UUID),e.analysis.layers.onRemove.delete(this.UUID))}updated(e){super.updated(e),e.has("hasGraph")&&(this.observer&&this.graphRef.value&&(this.observer.unobserve(this.graphRef.value),delete this.observer),this.graphRef.value&&!0===this.hasGraph&&(this.observer=new ResizeObserver(e=>{const t=e[0];void 0!==t&&(this.graphWidth=t.contentRect.width,this.graphHeight=t.contentRect.height)}),this.observer.observe(this.graphRef.value)))}renderButtons(){const e=void 0!==this.file?Object.values(this.file.group.tool.tools).filter(e=>e instanceof wa):[];return qe`
            <div class="buttons">
                ${e.map(e=>qe`<thermal-btn @click=${()=>{this.isDrawingAnalysis=!0,this.file?.group.tool.selectTool(e)}}>
                    <div style="display: flex; align-items: center; gap: 10px">
                        <div style="width: 1.5em; display: inline-block;">
                            ${Xt(e.icon)}
                        </div>
                        <div>
                            ${se(li[e.name])}
                        </div>
                    </div>
                </thermal-btn>`)}
            </div>

            <slot></slot>
        
        `}renderCurrentTooltip(){return qe`${se(li[this.manager.tool.value.description])}`}renderAddAnalysis(){return qe`<div class="addanalysis">

            ${this.showhint?qe`<div>
                    <strong>${se(li.analysis)}</strong>
                </div>

                <div>${se(li.analysishint)}</div>`:Ze}


            ${!0===this.isDrawingAnalysis?this.renderCurrentTooltip():this.renderButtons()}
        </div>`}renderGraph(){return this.mayHaveGraph?!0===this.hasGraph?qe`
            
            <div class="graph" ${Yt(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`:!0===this.hasAnalysis?qe`<div class="graph graph-prompt">
                    <div>
                        <strong>${se(li.graph)}</strong>
                    </div>
                    <div class="hint">${Xt(se(li.graphhint2))}</div>
                </div>`:qe`<div class="graph graph-prompt">
                    <div>
                        <strong>${se(li.graph)}</strong>
                    </div>
                    <div class="hint">${se(li.graphhint1)}</div>
                </div>`:Ze}render(){return qe`
            <div class="container ${!0===this.mayHaveGraph?"may":"may-not"}">

            <div class="analysis">
                ${!1===this.hasAnalysis||!0===this.isDrawingAnalysis?this.renderAddAnalysis():qe`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `}};vm.styles=ce`

        .container {
            height: 100%;
            width: 100%;
            color: var(--thermal-foreground);
        }

        .container.may {
            display: flex;
            flex-direction: column;
            gap: var(--thermal-gap);

            > * {
                width: 100%;
            }

            .analysis {
                height: calc( 50% - var(--thermal-gap));
            }

        }

        .container.may-not {
            .analysis {
                height: 100%;
            }
        }

        .analysis {
            min-width: 0;
        }
    
        .addanalysis {
            padding: var(--thermal-gap);
            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            text-align: center;
        }

        .graph {
            height: 50%;
        }

        .graph-prompt {
            padding: var(--thermal-gap);
            border: var(--thermal-border-width) dashed var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
        }

        .hint {
            thermal-btn {
                display: inline-block;
                cursor: help;
            }
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
        }

        file-analysis-table {
        }
    
    `;let bm=vm;ym([bt()],bm.prototype,"mayHaveGraph"),ym([bt()],bm.prototype,"hasAnalysis"),ym([bt()],bm.prototype,"isDrawingAnalysis"),ym([bt()],bm.prototype,"hasGraph"),ym([bt()],bm.prototype,"graphRef"),ym([bt()],bm.prototype,"graphWidth"),ym([bt()],bm.prototype,"graphHeight"),ym([bt()],bm.prototype,"observer"),ym([bt()],bm.prototype,"hydrated"),ym([vt({type:Boolean,reflect:!0,converter:Pa(!0)})],bm.prototype,"showhint");var wm=Object.defineProperty;const xm=class extends mc{constructor(){super(...arguments),this.container=Wt(),this.analysis=[]}onFailure(e){}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,e=>{this.analysis=e}),this.analysis=e.analysis.value,this.file?.timeline.onFrame.add(this.UUID,()=>{this.requestUpdate()}),this.file?.analysisData.addListener(this.UUID,()=>{})}render(){return 0===this.analysis.length||void 0===this.file?Ze:qe`

        <div class="overflow" ${Yt(this.container)}>

            <table>

                <caption data-video-ignore>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th></th>
                        <th>${se(li.avg)}</th>
                        <th>${se(li.min)}</th>
                        <th>${se(li.max)}</th>
                        <th>${se(li.size)}</th>
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>this.renderAnalysisRow(e))}
                
                </tbody>

                </table>

            </div>
            
        `}renderAnalysisRow(e){const t=e.graph.state,{MIN:i,MAX:r,AVG:s}=t;return qe`<tr>
            <td class="analysis-name">
                <strong style="background: ${e.color};"></strong>
                <span>${e.name}</span>
            </td>
            ${this.renderAnalysisRowTemperatureCell(e.color,s,e.avg)}
            ${this.renderAnalysisRowTemperatureCell(e.color,i,e.min)}
            ${this.renderAnalysisRowTemperatureCell(e.color,r,e.max)}
            <td>${e.width} x ${e.height} px</td>
        </tr>`}renderAnalysisRowTemperatureCell(e,t,i){const r={padding:"4px 0px"};t&&(r.borderColor=e,r.borderStyle="solid",r.borderWidth="2px",r.padding="2px 6px");let s="-";return void 0!==i&&(s=i.toFixed(2)+" °C"),qe`
            <td>
                <span style=${Fd(r)} data-video-dynamic>
                    ${s}
                </span>
            </td>
        `}};xm.styles=ce`
    
        .overflow {
            overflow-x:auto;
            width: 100%;
        }

        table {
            display: table;
            min-width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }

            td {
                border-top: var(--thermal-slate-light ) 1px solid;
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

        .analysis-name {
            display: flex;
            align-items: center;
            gap: .5em;
            strong,
            span {
                display: inline-block;
            }

            strong {
                width: 1.5em;
                height: 2px;
            }
        }



    `;let Sm=xm;((e,t,i)=>{for(var r,s=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);s&&wm(t,i,s)})([bt()],Sm.prototype,"analysis");var km=Object.defineProperty,Cm=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&km(t,i,o),o};const Em=class extends pi{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,this.type=i.getType(),i.onSetName.set(this.UUID,e=>{this.name=e})}}render(){return qe`

            <thermal-dialog label="${se(li.editsth,{what:se(li[this.type])})}">
                <slot name="invoker" slot="invoker">
                    <thermal-btn 
                        icon="settings" 
                        iconStyle="solid" 
                        size="md" 
                        tooltip="${se(li.editsth,{what:this.analysis.name})}"
                    >
                    </thermal-btn>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof Bs?qe`<edit-point .analysis=${this.analysis}></edit-point>`:qe`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Em.styles=ce`
    
        :host {
        
            display: inline-block;

        }

    `;let Tm=Em;Cm([vt()],Tm.prototype,"analysis"),Cm([bt()],Tm.prototype,"name"),Cm([bt()],Tm.prototype,"type");var _m=Object.defineProperty,Am=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&_m(t,i,o),o};const Pm=class extends mc{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.hasDownloads=!0,this.container=Wt(),this.graphRef=Wt(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1,this.downloadSVG=(e,t)=>{e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg");const i=e.outerHTML,r=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)},this.downloadPNG=(e,t)=>{e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg");const i=e.outerHTML,r=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(r),o=new Image;o.onload=()=>{const e=document.createElement("canvas");e.width=o.width,e.height=o.height;const i=e.getContext("2d");i?.drawImage(o,0,0);const r=e.toDataURL("image/png"),a=document.createElement("a");a.href=r,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(s)},o.src=s}}onInstanceCreated(e){if(this.graphs=e.analysisData.value,e.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.container.value){this.graphWidth=this.container.value.clientWidth;new ResizeObserver(e=>{this.graphWidth=e[0].contentRect.width,this.graphHeight=e[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)}this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.graphs=this.file.analysisData.value,this.file.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.hydrated=!0)}onFailure(){}update(e){super.update(e),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return!1===this.file?.timeline.isSequence?Ze:qe`

            <div style="position: relative; background-color: white; border-radius: var(--thermal-radius); height: 100%;">

            

            <div data-video-style style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&qe`
                <div data-video-style style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&qe`
                    <div data-video-style style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Yt(this.container)}">
                ${this.graphs.colors.length>0?qe`<thermal-chart 
                        ${Yt(this.graphRef)}
                        data-video-svg
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:se(li.time),format:"m:ss:SSS"},vAxis:{title:se(li.temperature)+" °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:Ze}
            </div>

            ${this.renderDownloads()}
            

            

            </div>
        
        `}renderDownloads(){return this.hasDownloads?qe`<div class="download">
                <thermal-icon icon="download" variant="micro"></thermal-icon>
                <thermal-btn
                    size="sm"
                    @click=${()=>{if(this.graphRef.value){const e=this.graphRef.value.getRef()?.querySelector("svg");e&&this.downloadSVG(e,"graph.svg")}}}
                    variant="background"
                    plain="true"
                    tooltip="Stáhnout graf jako obrázek SVG"
                >SVG</thermal-btn>
                <thermal-btn
                    size="sm"
                    @click=${()=>{if(this.graphRef.value){const e=this.graphRef.value.getRef()?.querySelector("svg");e&&this.downloadPNG(e,"graph.png")}}}
                    variant="background"
                    plain="true"
                    tooltip="Stáhnout graf jako obrázek PNG"
                >PNG</thermal-btn>
                <thermal-btn
                    size="sm"
                    @click=${()=>this.file?.analysisData.downloadData()}
                    variant="background"
                    plain="true"
                    tooltip="${se(li.downloadgraphdataascsv)}"
                >CSV</thermal-btn>
            </div>`:Ze}};Pm.styles=ce`

        :host {
            position: relative;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }

        .download {
            position: absolute;
            right: 0;
            top: 0;
            display: flex;
            gap: 0.25em;
        }

        thermal-icon {
            width: .8em;
            height: .8em;
            vertical-align: middle;
            margin-top: 1px;
        }
    `;let $m=Pm;Am([bt()],$m.prototype,"hydrated"),Am([vt({reflect:!0})],$m.prototype,"graphWidth"),Am([vt({reflect:!0})],$m.prototype,"graphHeight"),Am([vt({type:Boolean,reflect:!0})],$m.prototype,"hasDownloads"),Am([bt()],$m.prototype,"graphs"),Am([p({context:za,subscribe:!0})],$m.prototype,"currentFrame"),Am([p({context:Ia,subscribe:!0})],$m.prototype,"cursor"),Am([p({context:Ua,subscribe:!0})],$m.prototype,"cursorSetter"),Am([bt()],$m.prototype,"shadowLeft"),Am([bt()],$m.prototype,"shadowTop"),Am([bt()],$m.prototype,"shadowWidth"),Am([bt()],$m.prototype,"shadowHeight"),Am([p({context:en,subscribe:!0})],$m.prototype,"graphSmooth");var Rm=Object.defineProperty,Lm=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Rm(t,i,o),o};const Dm=class extends mc{constructor(){super(...arguments),this.container=Wt(),this.interactiveanalysis=!1,this.forceinteractiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,e=>{this.analysis=e}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}renderHeader(){return qe`<tr>
            <td>${se(li.analysis)}</td>
            <td>${se(li.min)}</td>
            <td>${se(li.max)}</td>
            <td>${se(li.avg)}</td>
        </tr>`}renderRow(e){return qe`<tr>
            <td>
                ${e.name}
                <file-analysis-edit .analysis=${e}></file-analysis-edit>
            </td>
            <td>${e.min?.toFixed(2)}</td>
            <td>${e.max?.toFixed(2)}</td>
            <td>${e.avg?.toFixed(2)}</td>
        </tr>`}render(){return 0===this.analysis.length||void 0===this.file?Ze:(!0===this.interactiveanalysis||this.forceinteractiveanalysis,qe`

        <div class="overflow" ${Yt(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>qe`
                    <file-analysis-overview-row
                        .analysis=${e}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>
        `)}};Dm.styles=ce`
    
        .overflow {
            overflow-x:auto;
            width: 100%;
        }

        table {
            display: table;
            min-width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

        



    `;let Om=Dm;Lm([p({context:rn,subscribe:!0}),vt()],Om.prototype,"interactiveanalysis"),Lm([vt({type:Boolean,converter:Pa(!1)})],Om.prototype,"forceinteractiveanalysis"),Lm([bt()],Om.prototype,"analysis"),Lm([bt()],Om.prototype,"allSelected"),Lm([bt()],Om.prototype,"hasHighlightedData");var Mm=Object.defineProperty,Im=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Mm(t,i,o),o};const Um=class extends pi{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const r=e=>e instanceof Hs?i.width+"x"+i.height:"1x1";this.dimension=r(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof Bs?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,e=>{this.dimension=r(e)}),i.onValues.set(this.UUID,(e,t,i)=>{this.value={min:e,max:t,avg:i}}),i.graph.onGraphActivation.set(this.UUID,(e,t,i)=>{this.graph={min:e,max:t,avg:i}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,e=>{this.color=e}),i.onSetName.set(this.UUID,e=>{this.name=e})}}valueOrNothing(e){return void 0===e?"-":e.toFixed(2)+" °C"}renderCell(e,t,i,r){return qe`
            <td class="${t?"may":"mayNot"} ${i?"active":"inactive"}">

                ${t?qe`
                        <button
                            @click=${r}
                            style="background-color: ${i?this.color:"transparent"};"
                            title="${i?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(e)}
                        </button>
                    `:this.valueOrNothing(e)}

            </td>
        `}render(){return qe`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
        >
            <span
                class="name-text"
                @click=${()=>{!1!==this.interactiveanalysis&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
            >

                ${!0===this.interactiveanalysis?qe`<u aria-hidden="true"></u>`:Ze}
                <b aria-hidden="true" style="background-color: ${this.color}"></b>

            </span>

            <file-analysis-edit .analysis=${this.analysis}>

                <svg slot="invoker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>

            </file-analysis-edit>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>

        </td>
        ${this.renderCell(this.value.min,this.analysis instanceof Hs,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),this.log("Graph analysis min",this.graph.min)})}
        ${this.renderCell(this.value.max,this.analysis instanceof Hs,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}

         ${this.renderCell(this.value.avg,!0,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}

        <!--
        <td>${this.dimension}</td>
        ${!0===this.interactiveanalysis?qe`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-btn @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${se(li.remove)}</thermal-btn>
        </td>`:Ze}

        -->
        
        `}};Um.styles=ce`
    
        :host {
            display: table-row;
            white-space: nowrap;
        }

        button, td {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
            color: var( --thermal-foreground);
            white-space: nowrap;
        }

        .may button {
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover,
            &:focus {
                border-color: var( --thermal-slate-dark );
                color: var( --thermal-foreground );
            }
        }

        td {
            padding: 0.25em 0.5em;
        }

        

        .selected {
        }

        .name {

            &.interactive .name-text {
                cursor: pointer;
            }

            &.interactive:hover .name-text {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }
            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }
            b {
                width: 1em;
                height: 1em;
            }

            &.selected u {
                background-color: var( --thermal-slate-dark );
            }

            &.notSelected span {
                text-decoration: line-through;
            }
        }

        svg {
            width: calc( var(--thermal-gap) * .8 );
            color: var(--thermal-slate);
            transition: color .2s ease-in-out;
            cursor: pointer;

            &:hover {
                color: var( --thermal-foreground );
            }
        }

    `;let zm=Um;Im([vt()],zm.prototype,"analysis"),Im([p({context:rn,subscribe:!0})],zm.prototype,"interactiveanalysis"),Im([bt()],zm.prototype,"value"),Im([bt()],zm.prototype,"graph"),Im([bt()],zm.prototype,"may"),Im([bt()],zm.prototype,"dimension"),Im([bt()],zm.prototype,"color"),Im([vt({type:Boolean,reflect:!0,attribute:!0})],zm.prototype,"selected"),Im([bt()],zm.prototype,"name");var Fm=Object.defineProperty,Bm=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Fm(t,i,o),o};const Nm=class extends pi{constructor(){super(...arguments),this.interactiveanalysis=!0,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const r=e=>e instanceof Hs?i.width+"x"+i.height:"1x1";this.dimension=r(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof Bs?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,e=>{this.dimension=r(e)}),i.onValues.set(this.UUID,(e,t,i)=>{this.value={min:e,max:t,avg:i}}),i.graph.onGraphActivation.set(this.UUID,(e,t,i)=>{this.graph={min:e,max:t,avg:i}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,e=>{this.color=e}),i.onSetName.set(this.UUID,e=>{this.name=e})}e.has("setRegistryHighlight")&&(this.addEventListener("mouseover",this.handleMouseOver.bind(this)),this.addEventListener("focus",this.handleMouseOver.bind(this)),this.addEventListener("mouseout",this.handleMouseOut.bind(this)),this.addEventListener("blur",this.handleMouseOut.bind(this)))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseover",this.handleMouseOver.bind(this)),this.removeEventListener("focus",this.handleMouseOver.bind(this)),this.removeEventListener("mouseout",this.handleMouseOut.bind(this)),this.removeEventListener("blur",this.handleMouseOut.bind(this))}handleMouseOver(){this.setRegistryHighlight&&void 0!==this.analysis.min&&void 0!==this.analysis.max&&this.setRegistryHighlight({from:this.analysis.min,to:this.analysis.max})}handleMouseOut(){this.setRegistryHighlight&&this.setRegistryHighlight(void 0)}valueOrNothing(e){return void 0===e?"-":e.toFixed(2)+" °C"}renderFirstCell(){const e={name:!0,selected:this.selected,interactive:this.interactiveanalysis},t=!0===this.interactiveanalysis?qe`<u aria-hidden="true"></u>`:Ze;return qe`<td
            class=${Vl(e)}
            @click=${()=>{this.interactiveanalysis&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${t}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>`}renderCell(e,t,i,r){const s=i?this.color:"white";return qe`
            <td class="${t?"may":"mayNot"} ${i?"active":"inactive"}">

                ${t?qe`
                        <thermal-btn
                            size="md"
                            @click=${r}
                            style="background-color: ${s};"
                            tooltip="${i?"Skrýt v grafu":"Zobrazit graf"}"
                        >
                            <span style="">${this.valueOrNothing(e)}</span>
                        </thermal-btn>
                    `:this.valueOrNothing(e)}

            </td>
        `}renderLastCell(){if(!1===this.interactiveanalysis)return Ze;let e=Ze;return this.analysis instanceof Bs||(e=qe`<thermal-btn
                size="md"
                @click=${()=>{void 0!==this.analysis.min&&void 0!==this.analysis.max&&this.analysis.file.group.registry.range.imposeRange({from:this.analysis.min,to:this.analysis.max})}}
                icon="range"
                iconStyle="outline"
            ></thermal-btn>`),qe`<td>
            <div style="display: flex; gap: .5em;">
                <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
                <thermal-btn
                    icon="trash"
                    iconStyle="micro"
                    tooltip="${se(li.delete)} ${this.analysis.name}"
                    @click=${()=>this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}
                ></thermal-btn>
                ${e}
            </div>
        </td>`}render(){return[this.renderFirstCell(),this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)}),this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)}),this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)}),qe`<td>${this.dimension}</td>`,this.renderLastCell()]}};Nm.styles=ce`
    
        :host {
            display: table-row;
            white-space: nowrap;
            margin: 0;
            padding: 0;
        }

        button, td {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
            color: var( --thermal-foreground);
            white-space: nowrap;
        }

        .may button {
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            border-radius: var( --thermal-radius );
            cursor: pointer;

            transition: all .2s ease-in-out;

            &:hover,
            &:focus {
                border-color: var( --thermal-slate-dark );
                color: var( --thermal-foreground );
            }
        }

        td {
            padding: 0.25em 0.5em;
        }

        

        .selected {
        }

        .name {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }
            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }
            b {
                width: 1em;
                height: 1em;
            }

            &.selected u {
                background-color: var( --thermal-slate-dark );
            }

            &.notSelected span {
                text-decoration: line-through;
            }
        }

        .edit-buttons {
            
        }

    `;let jm=Nm;Bm([vt()],jm.prototype,"analysis"),Bm([vt({type:Boolean})],jm.prototype,"interactiveanalysis"),Bm([bt()],jm.prototype,"value"),Bm([bt()],jm.prototype,"graph"),Bm([bt()],jm.prototype,"may"),Bm([bt()],jm.prototype,"dimension"),Bm([bt()],jm.prototype,"color"),Bm([vt({type:Boolean,reflect:!0,attribute:!0})],jm.prototype,"selected"),Bm([bt()],jm.prototype,"name"),Bm([bt(),p({context:Ka,subscribe:!0})],jm.prototype,"setRegistryHighlight");var Vm=Object.defineProperty,Hm=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Vm(t,i,o),o};const Wm=class extends mc{constructor(){super(...arguments),this.interactiveanalysis=!1,this.forceinteractiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,e=>{this.analysis=e}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}renderTableRows(){return 0===this.analysis.length||void 0===this.file?Ze:this.analysis.map(e=>qe`<file-analysis-table-row
            .analysis=${e}
            .interactiveanalysis=${!0===this.interactiveanalysis||!0===this.forceinteractiveanalysis}
        ></file-analysis-table-row>`)}render(){if(0===this.analysis.length||void 0===this.file)return Ze;const e=!0===this.interactiveanalysis||!0===this.forceinteractiveanalysis;return qe`

            <table>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${e?"interactive":""}"
                            @click=${()=>{this.allSelected?this.file?.analysis.layers.deselectAll():this.file?.analysis.layers.selectAll()}}
                        >
                            ${e?qe`<u aria-hidden="true"></u>`:Ze}
                            <thermal-btn variant="text" tooltip="${this.allSelected?"Deaktivovat všechny":"Aktivovat všechny"}" tooltip-placement="right">${se(li.analysis)}</thermal-btn>
                        </th>
                        <th>${se(li.avg)}</th>
                        <th>${se(li.min)}</th>
                        <th>${se(li.max)}</th>
                        <th>${se(li.size)}</th>
                        <th></th>
                    </tr>
                
                </thead>

                <tbody>${this.renderTableRows()}</tbody>

            </table>
            
        `}};Wm.styles=ce`
    
        :host {

            display: block;
            width: 100%;
            min-width: 0;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;

            margin: 0;
            padding: 0;

            position: relative;

            box-sizing: border-box;
        
        }

        table {

            display: table;

            min-width: 100%;
            
            position: relative;

            table-layout: fixed;

            
            margin: 0;
            padding: 0;
            
            border-collapse: collapse;

            color: var( --thermal-foreground );
            border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            box-sizing: border-box;

            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-btn {
            font-size: var( --thermal-fs-sm );
            font-size: 14px;
        }

        caption {
            display: none !important;
        }

        file-analysis-table-row {
            color: var( --thermal-foreground );
            transition: background-color .2s ease-in-out;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            &.interactive {
                cursor: pointer;
            }

            &.interactive:hover {
                color: var( --thermal-primary );
            }

            u, b, span, thermal-btn {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: var(--thermal-border-width) var(--thermal-border-style) var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

            button {
                margin: 0;
                padding: 0;
                border: 0;
                background: transparent;
                color: var( --thermal-primary );
                text-transform: lowercase;
                cursor: pointer;

                &:hover,
                &:focus {
                    color: var( --thermal-primary-dark );
                }
            }

        }

    `;let Gm=Wm;Hm([p({context:rn,subscribe:!0})],Gm.prototype,"interactiveanalysis"),Hm([vt({type:Boolean,converter:Pa(!1)})],Gm.prototype,"forceinteractiveanalysis"),Hm([bt()],Gm.prototype,"analysis"),Hm([bt()],Gm.prototype,"allSelected"),Hm([bt()],Gm.prototype,"hasHighlightedData");var qm=Object.defineProperty,Ym=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&qm(t,i,o),o};class Zm extends Xp{constructor(){super(...arguments),this.tooltip=void 0}enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}}Ym([vt({type:String})],Zm.prototype,"label"),Ym([vt({type:Object})],Zm.prototype,"onEnter"),Ym([vt({type:Object})],Zm.prototype,"onLeave"),Ym([vt({type:Object})],Zm.prototype,"onAction");var Xm=Object.defineProperty,Km=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Xm(t,i,o),o};const Qm=class extends pi{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(e){super.updated(e),e.has("expanded")&&(!0===this.expanded?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return qe`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <thermal-btn variant="default" size="sm" icon="ellipsis" iconStyle="micro" @click=${()=>{this.toggle()}}>${this.label??Ze}</thermal-btn>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};Qm.styles=ce`
        :host {
            
        }

        .container {
            display: block;
            position: relative;
        }

        .dropdown {

            z-index: 999;

            position: absolute;
            right: 0px;
            
            box-sizing: border-box;
            
            overflow: hidden;
            max-height: 0px;

            > div {
                padding: 5px; 
                background-color: var(--thermal-background);
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);

                display: flex;
                flex-direction: column;
                gap: 5px;
                align-items: flex-end;
                justify-content: flex-end;

            }

        }

        .backdrop {
            display: none;
            cursor: pointer;
        }


        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }


        :host(.expanded) .dropdown {

            max-height: 500px;

        }

        :host(.expanded) .backdrop {

            display: block;
            position: fixed;
            top: -100vh;
            left: -100vw;
            height: 200vh;
            width: 200vw;
            z-index: 998;

        }



    `;let Jm=Qm;Km([vt({type:String,reflect:!0})],Jm.prototype,"label"),Km([bt()],Jm.prototype,"expanded");var eg=Object.defineProperty,tg=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&eg(t,i,o),o};class ig extends Xp{constructor(){super(...arguments),this.tooltip=void 0}enter(){}leave(){}action(){this.file&&this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs,showAnalysis:this.pngAnalyses,showThermalScale:this.pngExportScale,showFileName:this.pngFileName,showFileDate:this.pngFileDate})}getDefaultLabel(){return"png"}}tg([bt(),p({context:Hc,subscribe:!0})],ig.prototype,"pngWidth"),tg([bt(),p({context:Gc,subscribe:!0})],ig.prototype,"pngFs"),tg([bt(),p({context:Yc,subscribe:!0})],ig.prototype,"pngAnalyses"),tg([bt(),p({context:Xc,subscribe:!0})],ig.prototype,"pngExportScale"),tg([bt(),p({context:Qc,subscribe:!0})],ig.prototype,"pngFileName"),tg([bt(),p({context:ed,subscribe:!0})],ig.prototype,"pngFileDate");var rg=Object.defineProperty,sg=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&rg(t,i,o),o};class og extends Xp{constructor(){super(...arguments),this.tooltip=se(li.range),this.hideLabel=!1}onInstanceCreated(e){this.tooltip=[e.min.toFixed(2),"—",e.max.toFixed(2),"°C"].join(" ")}enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&(this.log(this.file.min,this.file.max),this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max}))}getDefaultLabel(){return this.hideLabel?"":se(li.range).toLowerCase()}}sg([p({context:Ka,subscribe:!0})],og.prototype,"setter"),sg([vt({type:String,converter:Pa(!1)})],og.prototype,"hideLabel");var ag=Object.defineProperty,ng=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&ag(t,i,o),o};const lg=class extends mc{constructor(){super(...arguments),this.container=Wt(),this.prefersGpu=!0,this.norender=!1}onInstanceCreated(e){this.remountInstance(void 0,e)}onFailure(){}updated(e){if(super.updated(e),e.has("file")){if(!(void 0===e.get("file")&&void 0!==this.file)){const t=e.get("file");this.remountInstance(t,this.file)}}e.has("prefers-gpu")&&this.file&&(this.file.setPreferWebGl(this.prefersGpu),this.file.draw())}remountInstance(e,t){e!==t&&(void 0!==e&&e.unmountFromDom(),void 0!==t&&this.container.value&&(t.mountToDom(this.container.value),t.setPreferWebGl(this.prefersGpu),t.draw()))}disconnectedCallback(){super.disconnectedCallback(),void 0!==this.file&&(this.file.unmountFromDom(),this.fileController.onSuccess.delete(this.UUID),this.fileController.onFailure.delete(this.UUID),this.fileController.onLoadingStart.delete(this.UUID))}renderPlaceholder(){return!1===this.loading?Ze:qe`<div class="file-canvas-loading">
    <thermal-spinner color="var(--thermal-background)"></thermal-spinner>
</div>`}renderError(){return void 0===this.failure?Ze:qe`<div class="error-wrapper">
    <thermal-icon 
        icon="warning"
        variant="outline"
    ></thermal-icon>

    <div class="error-title">
        ${se(li.fileloadingerror)}
    </div>
    <div class="error-url">
        ${this.failure?.thermalUrl}
    </div>
    <div class="error-message">
        ${this.failure?.message}
    </div>
</div>`}render(){const e=!1===this.loading&&void 0!==this.failure,t=!1===this.loading&&void 0!==this.file,i={"canvas-container":!0,"is-loading":this.loading,"is-loaded":!1===this.loading,"is-success":t,"is-error":e};return qe`<div ${Yt(this.container)} class=${Vl(i)} part="file-canvas-container">
    ${this.renderPlaceholder()}
    ${this.renderError()}
</div>`}};lg.styles=ce`

        :host {
            display: block;
            width: 100%;
            font-size: var( --thermal-fs );
        }

        :host,
        .canvas-container {
            box-sizing: border-box;
        }

        .canvas-container {

            width: 100%;

            background-color: var( --thermal-slate );
            color: var( --thermal-background );

            transition: color .3s ease-in-out, background-color .3s ease-in-out;

            &.is-loading {

                aspect-ratio: 4 / 3;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            &.is-loaded {
        
            }

            &.is-success {

            }

            &.is-error {

                display: flex;
                align-items: center;
                justify-content: center;
                padding: var( --thermal-gap );
                box-sizing: border-box;
            }

        }

        

        .error-wrapper {

            display: flex;
            gap: calc( var( --thermal-gap ) * 0.5 );
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            box-sizing: border-box;
            width: 100%;
            height: 100%;

            border: 2px dashed currentcolor;
            border-radius: var( --thermal-radius );

            padding: var( --thermal-gap );

            thermal-icon {
                width: 2em;
                height: 2em;
            }

            .error-message {
                font-size: small;
                opacity: .5;
            }

        }
    `;let hg=lg;ng([vt({type:Boolean,attribute:"prefers-gpu"})],hg.prototype,"prefersGpu"),ng([vt({converter:Pa(!1)})],hg.prototype,"norender");var cg=Object.defineProperty,dg=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&cg(t,i,o),o};class pg extends mc{constructor(){super(...arguments),this.pngWidth=1350,this.hasGraphs=!1,this.recordingGraphRef=Wt(),this.dropdownRef=Wt()}onInstanceCreated(e){e.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasGraphs=e}),this.hasGraphs=e.analysisData.hasActiveGraphs}onFailure(){}render(){return void 0===this.file?Ze:qe`

            <thermal-dropdown ${Yt(this.dropdownRef)} class="download">

                <slot name="invoker" slot="invoker">
                    <div class="button">
                        ${this.file?se(li.download):"..."}
                    </div>
                </slot>

                <thermal-btn 
                    slot="option"
                    @click="${()=>window.open(this.file.thermalUrl)}"
                    pre="LRC"
                    align="left"
                >
                    ${se(li.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}
                </thermal-btn>

                <thermal-btn 
                    slot="option"
                    @click=${()=>this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs,showAnalysis:this.pngAnalyses,showThermalScale:this.pngExportScale,showFileDate:this.pngFileDate,showFileName:this.pngFileName})}
                    pre="PNG"
                    align="left"
                >
                    ${se(li.exportcurrentframeaspng)}
                </thermal-btn>

                <file-video-export-button 
                    pre="${this.file.timeline.isSequence?"MP4 / PNG":"PNG"}" 
                    label="Pokročilý export" 
                    slot="option"
                    style="width: 100%"
                ></file-video-export-button>



                    ${!0===this.hasGraphs?qe`<thermal-btn 
                            slot="option"
                            @click=${()=>this.file?.analysisData.downloadData()}
                            pre="CSV"
                            align="left"
                    >
                        ${se(li.csvofanalysisdata)}
                    </thermal-btn>`:Ze}
            
            </thermal-dropdown>

            <thermal-dialog 
                ${Yt(this.recordingGraphRef)}
                label="Export souboru do videa"
                button="Začít nahrávat"
                .beforeClose=${async()=>(this.file?.recording.recordEntireFile(),!0)}
            >

                <div slot="content">

                    <p>Export probíhá tak, že sekvenci ve Vašem prohlížeči přehrajeme a zaznamenáme do video souboru.</p>

                    <p>Součástí exportu <i>nejsou analýzy ani teplotní škála</i>.</p>

                    <p><strong>Při nahrávání bude použito aktuální nastavení:</strong></p>

                    <table>

                        <tr>
                            <td>Barevná paleta</td>
                            <td>
                                <manager-palette-dropdown></manager-palette-dropdown>
                            </td>
                        </tr>

                        <tr>
                            <td>Teplotní rozsah</td>
                            <td>
                                <registry-range-form></registry-range-form>
                            </td>
                        </tr>

                        <tr>
                            <td>Rychlost přehrávání</td>
                            <td>
                                <file-playback-speed-dropdown></file-playback-speed-dropdown>
                            </td>
                        </tr>

                    </table>

                    <p>Chcete zahájit nahrávání?</p>


                </div>

                <thermal-btn slot="button" @click=${()=>this.dropdownRef.value?.setClose()}>
                    Zrušit
                </thermal-btn>

            </thermal-dialog>

        
        `}}dg([p({context:Hc,subscribe:!0})],pg.prototype,"pngWidth"),dg([p({context:Gc,subscribe:!0})],pg.prototype,"pngFs"),dg([bt(),p({context:Yc,subscribe:!0})],pg.prototype,"pngAnalyses"),dg([bt(),p({context:Xc,subscribe:!0})],pg.prototype,"pngExportScale"),dg([bt(),p({context:Qc,subscribe:!0})],pg.prototype,"pngFileName"),dg([bt(),p({context:ed,subscribe:!0})],pg.prototype,"pngFileDate"),dg([bt()],pg.prototype,"hasGraphs");const ug=class extends mc{onFileLoaded(){}onInstanceCreated(){}onFailure(){}renderRow(e,t){return`<tr>\n            <td style="width: 110px">${e}</td>\n            <td>${t}</td>\n        </tr>`}renderNumericalRow(e,t,i=4,r){const s=t.toFixed(i),o=void 0!==r?s+" "+r:s;return this.renderRow(e,o)}renderDownloadRow(e,t,i,r){return this.renderRow(e,`<span>${t}</span>\n            <a href=${i} target="_blank" title="${r}" class="download">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">\n                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />\n                </svg>\n            </a>`)}render(){return this.file?qe`
            <thermal-dialog label=${se(li.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-btn
                        tooltip=${se(li.fileinfo)}
                        icon="info"
                        iconStyle="mini"
                    >
                    </thermal-btn>
                </slot>
                <div slot="content">

                    <table>

                        ${Xt(this.renderRow(se(li.thermalfilename),this.file.fileName))}

                        ${Xt(this.renderDownloadRow(se(li.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,se(li.thermalfiledownload)))}

                        ${this.file.visibleUrl?Xt(this.renderDownloadRow(se(li.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,se(li.visiblefiledownload))):Ze}

                        ${Xt(this.renderRow(se(li.time),Eo.human(this.file.timestamp)))}

                        ${Xt(this.renderNumericalRow(se(li.duration),this.file.duration,0,"ms"))}

                        ${Xt(this.renderRow(se(li.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Xt(this.renderNumericalRow(se(li.bytesize),this.file.bytesize,0))}
                        
                        ${Xt(this.renderNumericalRow(se(li.minimaltemperature),this.file.min,10,"°C"))}

                        ${Xt(this.renderNumericalRow(se(li.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${se(li.filetype)}</h2>
                    <table>
                    ${Xt(this.renderRow(se(li.type),this.file.reader.parser.name))}
                    ${Xt(this.renderRow(se(li.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${se(li.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(e=>qe`<li>
                            <h3><a href="${e.deviceUrl}" target="_blank">${e.deviceName}</a></h3>
                            <div class="small">${e.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${e.manufacturerUrl}" target="_blank">${e.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:Ze}};ug.styles=ce`

        table {
            width: 100%;
        }

        td {
            padding: calc( var( --thermal-gap ) * .5 ) 0;
        }

        tr:not(:last-child) {
            td {
                border-bottom: var(--thermal-border-width) solid var( --thermal-slate );
            }
        }

        .small,
        small {
            font-size: calc( var( --thermal-fs-sm ) * .8 );
        }

        .opaque {
            opacity: .5;
        }

        h2 {
            font-size: calc( var( --thermal-fs ) * 1.4 );
        }

        h3 {
            font-size: var( --thermal-fs-small );
            margin: .2rem 0 .1rem 0;
            padding: 0;
            font-weight: normal;    
        }

        ul {
            margin: 0;
            padding: 0;
            padding-left: var( --thermal-fs-small );
        }

        a {
            color: var( --thermal-primary );
        }

        .download {
            width: var( --thermal-fs );
            display: inline-block;
            margin-left: var( --thermal-gap );
            transition: color .2s ease-in-out;

            &:hover {
                color: var( --thermal-foreground );
            }
        }
    
    `;let mg=ug,gg=function(e){return e.HOUR="hour",e.DAY="day",e.WEEK="week",e.MONTH="month",e.YEAR="year",e}({});var fg=Object.defineProperty,yg=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&fg(t,i,o),o};const vg=class extends mc{onInstanceCreated(){}onFailure(){}render(){if(void 0===this.file)return Ze;if(void 0!==this.label)return this.label;if(void 0!==this.grouping)switch(this.grouping){case gg.HOUR:case gg.DAY:return ms(this.file.timestamp,"HH:mm");case gg.WEEK:case gg.MONTH:case gg.YEAR:default:return Eo.human(this.file.timestamp)}return this.file.fileName}};vg.styles=ce`
        :host {
            display: contents;
        }
    `;let bg=vg;yg([vt({type:String})],bg.prototype,"grouping"),yg([vt({type:String})],bg.prototype,"label");var wg=Object.defineProperty,xg=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&wg(t,i,o),o};class Sg extends mc{constructor(){super(...arguments),this.enabled="on",this.playbackSpeed=1}onInstanceCreated(){}onFailure(){}handleEntryClick(e,t){this.file&&(this.file.timeline.playbackSpeed=parseFloat(t));const i=e.target;i&&i.parentElement&&i.parentElement instanceof ql&&i.parentElement.setClose()}renderEntry(e){return qe`<thermal-btn
            style="width: 100%;"
            slot="option"
            variant="${this.playbackSpeed.toString()===e?"background":"default"}"
            @click="${t=>this.handleEntryClick(t,e)}"
        >
            ${e}x
        </thermal-btn>`}render(){return void 0===this.file?Ze:qe`<thermal-dropdown 
            interactive="${this.enabled}" 
            .tooltip=${se(li.playbackspeed)}
        >

            <div slot="invoker" class="button">
                ${this.playbackSpeed}x
            </div>

            ${Object.entries(no).map(([e])=>this.renderEntry(e))}
            
        </thermal-dropdown>`}}xg([vt({type:String,reflect:!0})],Sg.prototype,"enabled"),xg([bt(),p({context:Na,subscribe:!0})],Sg.prototype,"playbackSpeed");var kg=Object.defineProperty,Cg=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&kg(t,i,o),o};const Eg=(s=class extends mc{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=Wt(),this.barRef=Wt(),this.containerRef=Wt(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.collapsed=!1,this.ticks=[]}onInstanceCreated(e){this.containerRef.value&&(this.ticks=su(this.containerRef.value.clientWidth,e.duration))}onFailure(){this.file?.timeline.removeListener(this.UUID)}update(e){super.update(e),void 0===this.observer&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=su(t.contentRect.width,this.file.duration)),t.contentRect.width<s.collapseWidth?!1===this.collapsed&&(this.collapsed=!0):!0===this.collapsed&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){!0===this.playing&&!1===this.mayStop||(this.playing?this.file?.timeline.stop():this.file?.timeline.play())}handleBarClick(e){if(e.preventDefault(),!1!==this.mayStop&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(e.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(e){if(this.timelineRef.value&&this.file){const t=(e.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;return{percent:t,ms:this.file.duration*(t/100)}}}handleBarEnter(e){const t=this.getValueFromEvent(e);t&&(this.pointerMs=t.ms),this.cursorSetter&&t&&this.cursorSetter(t.percent)}handleBarHover(e){e.preventDefault();const t=this.getValueFromEvent(e);t&&(this.pointerMs=t.ms),this.cursorSetter&&t&&this.cursorSetter(t.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}renderControls(e,t,i){return qe`<nav class="controls">

    <thermal-btn 
        disabled="${t}"
        @click=${()=>{e.timeline.prev()}}
    >${se(li.prev)}</thermal-btn>


    <thermal-btn 
        class="${Vl(i)}" 
        @click=${this.handlePlayButtonClick.bind(this)}
        icon="${this.playing?"pause":"play"}"
        iconStyle="solid"
        disabled="${t}"
    ></thermal-btn>

    <thermal-btn 
        @click=${()=>e.timeline.next()}
        disabled="${t}"
    >${se(li.next)}</thermal-btn>

    <thermal-btn 
        @click=${()=>e.timeline.setRelativeTime(0)}
        disabled="${t}"
    >${se(li.back)}</thermal-btn>

    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

</nav>`}render(){const e=this.file;if(void 0===e)return Ze;if(0===e.duration)return Ze;const t={container:!0,collapsed:this.collapsed},i={may:!0===this.mayStop,mayNot:!1===this.mayStop},r={item:!0,button:!0,playback:!0,...i},s={item:!0,timeline:!0,...i},o=this.mayStop?"false":"true";return qe`
<section class="${Vl(t)}" ${Yt(this.containerRef)}>

    <aside class="ticks-horizontal-indent">

        <notation-timeline></notation-timeline>

        <div class="${Vl(s)}"  ${Yt(this.timelineRef)}>

            <div 
                class="timeline-bar" 
                @click=${this.handleBarClick}
                @mouseenter=${this.handleBarEnter.bind(this)}
                @mousemove=${this.handleBarHover} 
                @mouseleave=${this.handleBarMouseLeave.bind(this)}
            >
                <div class="bar" data-video-rerender style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Yt(this.barRef)}></div>
                    ${this.cursor?qe`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                </div>

            </div>


${this.currentFrame?nu(e.duration,this.ticks,this.currentFrame.ms,this.pointerMs):Ze}


${!0===this.hasPlayButton?this.renderControls(e,o,r):Ze}

        </div>

    </aside>

</section>



${void 0!==this.currentFrame&&!0===this.hasInfo?qe`<div class="small real ${this.collapsed?"collapsed":""}">
        <div>
            <span class="label">${se(li.date)}:</span> 
            <span class="inline" data-video-dynamic>${ms(this.currentFrame.absolute,"d. L. y")}</span>
        </div>
        <div>
            <span class="label">${se(li.time)}:</span> 
            <span class="inline" data-video-dynamic>${ms(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
        </div>
        <div>
            <span class="label">${se(li.frame)}:</span> 
            <span class="inline" data-video-dynamic>${this.currentFrame.index+1} / ${this.file?.frameCount}</span>
        </div>
    </div>`:Ze}
    `}},s.collapseWidth=500,s.styles=ce`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

            color: var( --thermal-foreground );

        }

        .cursor {
            width: 70px;
        }

        .duration {
        
        }

        .small {
            font-size: calc( var( --thermal-fs ) * .7 );
            color: var( --thermal-foreground );
        }

        .real {
            display: flex;
            gap: var( --thermal-fs-small );
            align-items: center;
            padding-top: 5px;
            justify-content: space-between;
            width: 100%;

            .label { opacity: .5; }
        }

        .inline {
            white-space: nowrap;
        }

        .timeline {
            flex-grow: 1;
            cursor: pointer;
        }

        .timeline-bar {
            width: 100%;
            height: var( --thermal-fs );
            background: var( --thermal-slate );
            transition: background-color .2s ease-in-out;
            position: relative;
        }

        .timeline-marks {
            width: 100%;
        }

        .mark {
            background: red;
            height: 5px;
            position: relative;
        }

        .bar {
            height: 100%;
            background: var( --thermal-primary-dark );
            content: "";
            border-right: 1px solid var( --thermal-foreground );
            transition: background-color .3s ease-in-out;
            &:hover {
                background: var(--thermal-primary);
            }
        }

        .mayNot {
            opacity: .5;
            cursor: not-allowed;
        }

        .pointer {
            position: absolute;
            width: 1px;
            background: var( --thermal-background );
            height: 100%;
            top: 0;
        }

        ${lu}


        .controls {

            display: flex;
            align-items: stretch;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }

        .chrome {
            width: 1em;
            color: var(--thermal-primary-dark);
            transition: all .3s ease-in-out;
            cursor: pointer;
            &:hover {
                color: var(--thermal-primary);
            }
        }
    
    `,s);Cg([p({context:Ba,subscribe:!0}),bt()],Eg.prototype,"playing"),Cg([p({context:za,subscribe:!0}),bt()],Eg.prototype,"currentFrame"),Cg([p({context:Fa,subscribe:!0}),bt()],Eg.prototype,"duration"),Cg([p({context:Va,subscribe:!0}),bt()],Eg.prototype,"mayStop"),Cg([p({context:Ia,subscribe:!0})],Eg.prototype,"cursor"),Cg([p({context:Ua,subscribe:!0})],Eg.prototype,"cursorSetter"),Cg([vt({type:String,reflect:!0})],Eg.prototype,"hasPlayButton"),Cg([vt({type:String,reflect:!0})],Eg.prototype,"hasInfo"),Cg([vt({type:String,reflect:!0})],Eg.prototype,"interactive"),Cg([bt()],Eg.prototype,"collapsed"),Cg([bt()],Eg.prototype,"ticks"),Cg([bt()],Eg.prototype,"pointerMs");let Tg=Eg;var _g=Object.defineProperty,Ag=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&_g(t,i,o),o};class Pg extends mc{constructor(){super(...arguments),this.size="md",this.label="Exportovat video",this.dialogRef=Wt(),this.panelRef=Wt(),this.slug=this.UUID+"__file-export",this.isOpen=!1}onInstanceCreated(e){}onFailure(e){}renderDialog(){const e=function(e,t,i){return e?t(e):i?.(e)}(this.isOpen,()=>qe`<file-video-export-panel ${Yt(this.panelRef)}></file-video-export-panel>`,()=>Ze);return qe`<thermal-dialog
            ${Yt(this.dialogRef)}
            label="${this.t("export")}"
            is-fullscreen="true"
            .onCloseEveryTime=${()=>(this.isOpen=!1,!0)}
        >

            <div slot="content" style="height: 100%;">
                ${e}
            </div>

            ${this.renderCurrentFrameExportButton()}

            ${this.renderVideoExportButton()}
        
        </thermal-dialog>`}renderVideoExportButton(){return!this.file||this.file&&!1===this.file.timeline.isSequence?Ze:qe`<thermal-btn
                variant="primary"
                slot="button"
                icon="download"
                iconStyle="micro"
                @click=${()=>{this.panelRef?.value&&(this.panelRef?.value).record()}}
            >${this.t(li.exportvideo)} (MP4)</thermal-btn>`}renderCurrentFrameExportButton(){if(!this.file)return Ze;const e=this.file.timeline.isSequence?"Současný snímek":this.t(li.exportpng);return qe`<thermal-btn
                variant="primary"
                slot="button"
                icon="download"
                iconStyle="micro"
                @click=${()=>{this.panelRef?.value&&(this.panelRef?.value).currentFrame()}}
            >${e} (PNG)</thermal-btn>`}renderTriggerButton(){return qe`<thermal-btn
            @click=${()=>{this.dialogRef.value?.setOpen(),this.isOpen=!0}}
            variant=${this.variant||"default"}
            size=${this.size||"md"}
            plain="${this.plain||!1}"
            icon=${xt(this.icon)}
            iconStyle=${xt(this.iconStyle)}
            tooltip=${xt(this.tooltip)}
            pre=${xt(this.pre)}
            style="width: 100%; justify-content: flex-start;"
        >
            ${this.label}
        </thermal-btn>`}render(){return qe`
            ${this.renderDialog()}
            ${this.renderTriggerButton()}
        `}}function $g(e){if(!e)throw new Error("Assertion failed.")}Ag([vt({type:String,reflect:!0})],Pg.prototype,"variant"),Ag([vt({type:String,reflect:!0})],Pg.prototype,"size"),Ag([vt({type:String})],Pg.prototype,"icon"),Ag([vt({type:String})],Pg.prototype,"iconStyle"),Ag([vt({type:Boolean})],Pg.prototype,"plain"),Ag([vt({type:String,reflect:!0})],Pg.prototype,"tooltip"),Ag([vt({type:String,reflect:!0})],Pg.prototype,"label"),Ag([vt({type:String,reflect:!0})],Pg.prototype,"pre"),Ag([bt()],Pg.prototype,"isOpen");const Rg=e=>e&&e[e.length-1],Lg=e=>e>=0&&e<2**32;class Dg{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){const e=Math.floor(this.pos/8),t=this.bytes[e]??0,i=7-(7&this.pos),r=(t&1<<i)>>i;return this.pos++,r}readBits(e){if(1===e)return this.readBit();let t=0;for(let i=0;i<e;i++)t<<=1,t|=this.readBit();return t}writeBits(e,t){const i=this.pos+e;for(let r=this.pos;r<i;r++){const e=Math.floor(r/8);let s=this.bytes[e];const o=7-(7&r);s&=~(1<<o),s|=(t&1<<i-r-1)>>i-r-1<<o,this.bytes[e]=s}this.pos=i}readAlignedByte(){if(this.pos%8!=0)throw new Error("Bitstream is not byte-aligned.");const e=this.pos/8,t=this.bytes[e]??0;return this.pos+=8,t}skipBits(e){this.pos+=e}getBitsLeft(){return 8*this.bytes.length-this.pos}clone(){const e=new Dg(this.bytes);return e.pos=this.pos,e}}const Og=e=>{let t=0;for(;0===e.readBits(1)&&t<32;)t++;if(t>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<t)-1+e.readBits(t)},Mg=e=>{const t=Og(e);return 1&t?t+1>>1:-(t>>1)},Ig=e=>e.constructor===Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e),Ug=e=>e.constructor===DataView?e:ArrayBuffer.isView(e)?new DataView(e.buffer,e.byteOffset,e.byteLength):new DataView(e),zg=new TextEncoder,Fg={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},Bg={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},Ng={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},jg=e=>e instanceof ArrayBuffer||"undefined"!=typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e);class Vg{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e;const t=new Promise(t=>{let i=!1;e=()=>{i||(t(),this.pending--,i=!0)}}),i=this.currentPromise;return this.currentPromise=t,this.pending++,await i,e}}const Hg=e=>{throw new Error(`Unexpected value: ${e}`)},Wg=(e,t,i,r)=>{i>>>=0,i&=16777215,e.setUint8(t,i>>>16&255),e.setUint8(t+1,i>>>8&255),e.setUint8(t+2,255&i)},Gg=/^[a-z]{3}$/,qg=1e6*(1+Number.EPSILON);class Yg{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}}let Zg=null;const Xg=()=>null!==Zg?Zg:Zg="undefined"!=typeof navigator&&navigator.userAgent?.includes("Firefox"),Kg=function*(e){for(const t in e){const i=e[t];void 0!==i&&(yield{key:t,value:i})}},Qg=e=>{$g(0!==e.den);let t=Math.abs(e.num),i=Math.abs(e.den);for(;0!==i;){const e=t%i;t=i,i=e}const r=t||1;return{num:e.num/r,den:e.den/r}},Jg=(e,t)=>{if("object"!=typeof e||!e)throw new TypeError(`${t} must be an object.`);if(!Number.isInteger(e.left)||e.left<0)throw new TypeError(`${t}.left must be a non-negative integer.`);if(!Number.isInteger(e.top)||e.top<0)throw new TypeError(`${t}.top must be a non-negative integer.`);if(!Number.isInteger(e.width)||e.width<0)throw new TypeError(`${t}.width must be a non-negative integer.`);if(!Number.isInteger(e.height)||e.height<0)throw new TypeError(`${t}.height must be a non-negative integer.`)};class ef{constructor(e,t){if(this.data=e,this.mimeType=t,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("string"!=typeof t)throw new TypeError("mimeType must be a string.")}}class tf{constructor(e,t,i,r){if(this.data=e,this.mimeType=t,this.name=i,this.description=r,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(void 0!==t&&"string"!=typeof t)throw new TypeError("mimeType, when provided, must be a string.");if(void 0!==i&&"string"!=typeof i)throw new TypeError("name, when provided, must be a string.");if(void 0!==r&&"string"!=typeof r)throw new TypeError("description, when provided, must be a string.")}}const rf=["avc","hevc","vp9","av1","vp8"],sf=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],of=["aac","opus","mp3","vorbis","flac","ac3","eac3"],af=[...of,...sf],nf=["webvtt"],lf=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],hf=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],cf=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],df=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],pf=(e,t,i,r)=>{if("avc"===e){const e=100,s=Math.ceil(t/16)*Math.ceil(i/16),o=lf.find(e=>s<=e.maxMacroblocks&&r<=e.maxBitrate)??Rg(lf),a=o?o.level:0;return`avc1.${e.toString(16).padStart(2,"0")}${"00"}${a.toString(16).padStart(2,"0")}`}if("hevc"===e){const e="",s=1,o="6",a=t*i,n=hf.find(e=>a<=e.maxPictureSize&&r<=e.maxBitrate)??Rg(hf),l="B0";return`hev1.${e}${s}.${o}.${n.tier}${n.level}.${l}`}if("vp8"===e)return"vp8";if("vp9"===e){const e=t*i,s="08";return`vp09.${"00"}.${(cf.find(t=>e<=t.maxPictureSize&&r<=t.maxBitrate)??Rg(cf)).level.toString().padStart(2,"0")}.${s}`}if("av1"===e){const e=0,s=t*i,o=df.find(e=>s<=e.maxPictureSize&&r<=e.maxBitrate)??Rg(df),a="08";return`av01.${e}.${o.level.toString().padStart(2,"0")}${o.tier}.${a}`}throw new TypeError(`Unhandled codec '${e}'.`)},uf=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],mf=[-1,1,2,3,4,5,6,8],gf=/^pcm-([usf])(\d+)+(be)?$/,ff=e=>{if($g(sf.includes(e)),"ulaw"===e)return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if("alaw"===e)return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};const t=gf.exec(e);let i;$g(t),i="u"===t[1]?"unsigned":"s"===t[1]?"signed":"float";return{dataType:i,sampleSize:Number(t[2])/8,littleEndian:"be"!==t[3],silentValue:"pcm-u8"===e?128:0}},yf=["avc1","avc3","hev1","hvc1","vp8","vp09","av01"],vf=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,bf=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,wf=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,xf=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,Sf=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3"],kf=[48e3,44100,32e3],Cf=[24e3,22050,16e3];var Ef,Tf,_f,Af;(Tf=Ef||(Ef={}))[Tf.NON_IDR_SLICE=1]="NON_IDR_SLICE",Tf[Tf.SLICE_DPA=2]="SLICE_DPA",Tf[Tf.SLICE_DPB=3]="SLICE_DPB",Tf[Tf.SLICE_DPC=4]="SLICE_DPC",Tf[Tf.IDR=5]="IDR",Tf[Tf.SEI=6]="SEI",Tf[Tf.SPS=7]="SPS",Tf[Tf.PPS=8]="PPS",Tf[Tf.AUD=9]="AUD",Tf[Tf.SPS_EXT=13]="SPS_EXT",(Af=_f||(_f={}))[Af.RASL_N=8]="RASL_N",Af[Af.RASL_R=9]="RASL_R",Af[Af.BLA_W_LP=16]="BLA_W_LP",Af[Af.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",Af[Af.VPS_NUT=32]="VPS_NUT",Af[Af.SPS_NUT=33]="SPS_NUT",Af[Af.PPS_NUT=34]="PPS_NUT",Af[Af.AUD_NUT=35]="AUD_NUT",Af[Af.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",Af[Af.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT";const Pf=function*(e){let t=0,i=-1;for(;t<e.length-2;){const r=e.indexOf(0,t);if(-1===r||r>=e.length-2)break;t=r;let s=0;t+3<e.length&&0===e[t+1]&&0===e[t+2]&&1===e[t+3]?s=4:0===e[t+1]&&1===e[t+2]&&(s=3),0!==s?(-1!==i&&t>i&&(yield{offset:i,length:t-i}),i=t+s,t=i):t++}-1!==i&&i<e.length&&(yield{offset:i,length:e.length-i})},$f=e=>31&e,Rf=e=>{const t=[],i=e.length;for(let r=0;r<i;r++)r+2<i&&0===e[r]&&0===e[r+1]&&3===e[r+2]?(t.push(0,0),r+=2):t.push(e[r]);return new Uint8Array(t)},Lf={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Df=e=>{try{const t=new Dg(Rf(e));t.skipBits(1),t.skipBits(2);if(7!==t.readBits(5))return null;const i=t.readAlignedByte(),r=t.readAlignedByte(),s=t.readAlignedByte();Og(t);let o=1,a=0,n=0,l=0;if(100===i||110===i||122===i||244===i||44===i||83===i||86===i||118===i||128===i){o=Og(t),3===o&&(l=t.readBits(1)),a=Og(t),n=Og(t),t.skipBits(1);if(t.readBits(1))for(let e=0;e<(3!==o?8:12);e++){if(t.readBits(1)){const i=e<6?16:64;let r=8,s=8;for(let e=0;e<i;e++){if(0!==s){s=(r+Mg(t)+256)%256}r=0===s?r:s}}}}Og(t);const h=Og(t);if(0===h)Og(t);else if(1===h){t.skipBits(1),Mg(t),Mg(t);const e=Og(t);for(let i=0;i<e;i++)Mg(t)}Og(t),t.skipBits(1);const c=Og(t),d=Og(t),p=16*(c+1),u=16*(d+1);let m=p,g=u;const f=t.readBits(1);f||t.skipBits(1),t.skipBits(1);if(t.readBits(1)){const e=Og(t),i=Og(t),r=Og(t),s=Og(t);let a,n;if(0===(0===l?o:0))a=1,n=2-f;else{a=3===o?1:2,n=(1===o?2:1)*(2-f)}m-=a*(e+i),g-=n*(r+s)}let y=2,v=2,b=2,w=0,x={num:1,den:1},S=null,k=null;if(t.readBits(1)){if(t.readBits(1)){const e=t.readBits(8);if(255===e)x={num:t.readBits(16),den:t.readBits(16)};else{const t=Lf[e];t&&(x=t)}}t.readBits(1)&&t.skipBits(1);if(t.readBits(1)){t.skipBits(3),w=t.readBits(1);t.readBits(1)&&(y=t.readBits(8),v=t.readBits(8),b=t.readBits(8))}t.readBits(1)&&(Og(t),Og(t));t.readBits(1)&&(t.skipBits(32),t.skipBits(32),t.skipBits(1));const e=t.readBits(1);e&&Of(t);const i=t.readBits(1);i&&Of(t),(e||i)&&t.skipBits(1),t.skipBits(1);t.readBits(1)&&(t.skipBits(1),Og(t),Og(t),Og(t),Og(t),S=Og(t),k=Og(t))}if(null===S){$g(null===k);if(44!==i&&86!==i&&100!==i&&110!==i&&122!==i&&244!==i||!(16&r)){const e=c+1,t=(2-f)*(d+1),i=lf.find(e=>e.level>=s)??Rg(lf),r=Math.min(Math.floor(i.maxDpbMbs/(e*t)),16);S=r,k=r}else S=0,k=0}return $g(null!==k),{profileIdc:i,constraintFlags:r,levelIdc:s,frameMbsOnlyFlag:f,chromaFormatIdc:o,bitDepthLumaMinus8:a,bitDepthChromaMinus8:n,codedWidth:p,codedHeight:u,displayWidth:m,displayHeight:g,pixelAspectRatio:x,colourPrimaries:y,matrixCoefficients:b,transferCharacteristics:v,fullRangeFlag:w,numReorderFrames:S,maxDecFrameBuffering:k}}catch(t){return console.error("Error parsing AVC SPS:",t),null}},Of=e=>{const t=Og(e);e.skipBits(4),e.skipBits(4);for(let i=0;i<=t;i++)Og(e),Og(e),e.skipBits(1);e.skipBits(5),e.skipBits(5),e.skipBits(5),e.skipBits(5)},Mf=e=>e>>1&63,If=e=>{try{const t=[],i=[],r=[],s=[];for(const l of Pf(e)){const o=e.subarray(l.offset,l.offset+l.length),a=Mf(o[0]);a===_f.VPS_NUT?t.push(o):a===_f.SPS_NUT?i.push(o):a===_f.PPS_NUT?r.push(o):a!==_f.PREFIX_SEI_NUT&&a!==_f.SUFFIX_SEI_NUT||s.push(o)}if(0===i.length||0===r.length)return null;const o=(e=>{try{const t=new Dg(Rf(e));t.skipBits(16),t.readBits(4);const i=t.readBits(3),r=t.readBits(1),{general_profile_space:s,general_tier_flag:o,general_profile_idc:a,general_profile_compatibility_flags:n,general_constraint_indicator_flags:l,general_level_idc:h}=Uf(t,i);Og(t);const c=Og(t);let d=0;3===c&&(d=t.readBits(1));const p=Og(t),u=Og(t);let m=p,g=u;if(t.readBits(1)){const e=Og(t),i=Og(t),r=Og(t),s=Og(t);let o=1,a=1;const n=0===d?c:0;1===n?(o=2,a=2):2===n&&(o=2,a=1),m-=(e+i)*o,g-=(r+s)*a}const f=Og(t),y=Og(t);Og(t);const v=t.readBits(1);let b=0;for(let e=v?0:i;e<=i;e++)Og(t),b=Og(t),Og(t);Og(t),Og(t),Og(t),Og(t),Og(t),Og(t),t.readBits(1)&&t.readBits(1)&&zf(t),t.skipBits(1),t.skipBits(1),t.readBits(1)&&(t.skipBits(4),t.skipBits(4),Og(t),Og(t),t.skipBits(1));const w=Og(t);if(Ff(t,w),t.readBits(1)){const e=Og(t);for(let i=0;i<e;i++)Og(t),t.skipBits(1)}t.skipBits(1),t.skipBits(1);let x=2,S=2,k=2,C=0,E=0,T={num:1,den:1};if(t.readBits(1)){const e=Nf(t,i);T=e.pixelAspectRatio,x=e.colourPrimaries,S=e.transferCharacteristics,k=e.matrixCoefficients,C=e.fullRangeFlag,E=e.minSpatialSegmentationIdc}return{displayWidth:m,displayHeight:g,pixelAspectRatio:T,colourPrimaries:x,transferCharacteristics:S,matrixCoefficients:k,fullRangeFlag:C,maxDecFrameBuffering:b+1,spsMaxSubLayersMinus1:i,spsTemporalIdNestingFlag:r,generalProfileSpace:s,generalTierFlag:o,generalProfileIdc:a,generalProfileCompatibilityFlags:n,generalConstraintIndicatorFlags:l,generalLevelIdc:h,chromaFormatIdc:c,bitDepthLumaMinus8:f,bitDepthChromaMinus8:y,minSpatialSegmentationIdc:E}}catch(t){return console.error("Error parsing HEVC SPS:",t),null}})(i[0]);if(!o)return null;let a=0;if(r.length>0){const e=r[0],t=new Dg(Rf(e));t.skipBits(16),Og(t),Og(t),t.skipBits(1),t.skipBits(1),t.skipBits(3),t.skipBits(1),t.skipBits(1),Og(t),Og(t),Mg(t),t.skipBits(1),t.skipBits(1),t.readBits(1)&&Og(t),Mg(t),Mg(t),t.skipBits(1),t.skipBits(1),t.skipBits(1),t.skipBits(1);const i=t.readBits(1),s=t.readBits(1);a=i||s?i&&!s?2:!i&&s?3:0:0}const n=[...t.length?[{arrayCompleteness:1,nalUnitType:_f.VPS_NUT,nalUnits:t}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:_f.SPS_NUT,nalUnits:i}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:_f.PPS_NUT,nalUnits:r}]:[],...s.length?[{arrayCompleteness:1,nalUnitType:Mf(s[0][0]),nalUnits:s}]:[]];return{configurationVersion:1,generalProfileSpace:o.generalProfileSpace,generalTierFlag:o.generalTierFlag,generalProfileIdc:o.generalProfileIdc,generalProfileCompatibilityFlags:o.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:o.generalConstraintIndicatorFlags,generalLevelIdc:o.generalLevelIdc,minSpatialSegmentationIdc:o.minSpatialSegmentationIdc,parallelismType:a,chromaFormatIdc:o.chromaFormatIdc,bitDepthLumaMinus8:o.bitDepthLumaMinus8,bitDepthChromaMinus8:o.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:o.spsMaxSubLayersMinus1+1,temporalIdNested:o.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:n}}catch(t){return console.error("Error building HEVC Decoder Configuration Record:",t),null}},Uf=(e,t)=>{const i=e.readBits(2),r=e.readBits(1),s=e.readBits(5);let o=0;for(let c=0;c<32;c++)o=o<<1|e.readBits(1);const a=new Uint8Array(6);for(let c=0;c<6;c++)a[c]=e.readBits(8);const n=e.readBits(8),l=[],h=[];for(let c=0;c<t;c++)l.push(e.readBits(1)),h.push(e.readBits(1));if(t>0)for(let c=t;c<8;c++)e.skipBits(2);for(let c=0;c<t;c++)l[c]&&e.skipBits(88),h[c]&&e.skipBits(8);return{general_profile_space:i,general_tier_flag:r,general_profile_idc:s,general_profile_compatibility_flags:o,general_constraint_indicator_flags:a,general_level_idc:n}},zf=e=>{for(let t=0;t<4;t++)for(let i=0;i<(3===t?2:6);i++){if(e.readBits(1)){const i=Math.min(64,1<<4+(t<<1));t>1&&Mg(e);for(let t=0;t<i;t++)Mg(e)}else Og(e)}},Ff=(e,t)=>{const i=[];for(let r=0;r<t;r++)i[r]=Bf(e,r,t,i)},Bf=(e,t,i,r)=>{let s=0,o=0,a=0;if(0!==t&&(o=e.readBits(1)),o){if(t===i){a=t-(Og(e)+1)}else a=t-1;e.readBits(1),Og(e);const o=r[a]??0;for(let t=0;t<=o;t++){e.readBits(1)||e.readBits(1)}s=r[a]}else{const t=Og(e),i=Og(e);for(let r=0;r<t;r++)Og(e),e.readBits(1);for(let r=0;r<i;r++)Og(e),e.readBits(1);s=t+i}return s},Nf=(e,t)=>{let i=2,r=2,s=2,o=0,a=0,n={num:1,den:1};if(e.readBits(1)){const t=e.readBits(8);if(255===t)n={num:e.readBits(16),den:e.readBits(16)};else{const e=Lf[t];e&&(n=e)}}return e.readBits(1)&&e.readBits(1),e.readBits(1)&&(e.readBits(3),o=e.readBits(1),e.readBits(1)&&(i=e.readBits(8),r=e.readBits(8),s=e.readBits(8))),e.readBits(1)&&(Og(e),Og(e)),e.readBits(1),e.readBits(1),e.readBits(1),e.readBits(1)&&(Og(e),Og(e),Og(e),Og(e)),e.readBits(1)&&(e.readBits(32),e.readBits(32),e.readBits(1)&&Og(e),e.readBits(1)&&jf(e,!0,t)),e.readBits(1)&&(e.readBits(1),e.readBits(1),e.readBits(1),a=Og(e),Og(e),Og(e),Og(e),Og(e)),{pixelAspectRatio:n,colourPrimaries:i,transferCharacteristics:r,matrixCoefficients:s,fullRangeFlag:o,minSpatialSegmentationIdc:a}},jf=(e,t,i)=>{let r=!1,s=!1,o=!1;r=1===e.readBits(1),s=1===e.readBits(1),(r||s)&&(o=1===e.readBits(1),o&&(e.readBits(8),e.readBits(5),e.readBits(1),e.readBits(5)),e.readBits(4),e.readBits(4),o&&e.readBits(4),e.readBits(5),e.readBits(5),e.readBits(5));for(let a=0;a<=i;a++){let t=!0;1===e.readBits(1)||(t=1===e.readBits(1));let i=!1;t?Og(e):i=1===e.readBits(1);let a=1;if(!i){a=Og(e)+1}r&&Vf(e,a,o),s&&Vf(e,a,o)}},Vf=(e,t,i)=>{for(let r=0;r<t;r++)Og(e),Og(e),i&&(Og(e),Og(e)),e.readBits(1)};var Hf,Wf;(Wf=Hf||(Hf={}))[Wf.STREAMINFO=0]="STREAMINFO",Wf[Wf.VORBIS_COMMENT=4]="VORBIS_COMMENT",Wf[Wf.PICTURE=6]="PICTURE";const Gf=[1,2,3,6],qf=[],Yf=new Uint8Array(0);class Zf{constructor(e,t,i,r,s=-1,o,a){if(this.data=e,this.type=t,this.timestamp=i,this.duration=r,this.sequenceNumber=s,e===Yf&&void 0===o)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(void 0===o&&(o=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if("key"!==t&&"delta"!==t)throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(i))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(r)||r<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(s))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(o)||o<0)throw new TypeError("byteLength must be a non-negative integer.");if(void 0!==a&&("object"!=typeof a||!a))throw new TypeError("sideData, when provided, must be an object.");if(void 0!==a?.alpha&&!(a.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(void 0!==a?.alphaByteLength&&(!Number.isInteger(a.alphaByteLength)||a.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=o,this.sideData=a??{},this.sideData.alpha&&void 0===this.sideData.alphaByteLength&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===Yf}get microsecondTimestamp(){return Math.trunc(qg*this.timestamp)}get microsecondDuration(){return Math.trunc(qg*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"==typeof EncodedVideoChunk)throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if("undefined"==typeof EncodedVideoChunk)throw new Error("Your browser does not support EncodedVideoChunk.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if("undefined"==typeof EncodedAudioChunk)throw new Error("Your browser does not support EncodedAudioChunk.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,t){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");const i=new Uint8Array(e.byteLength);return e.copyTo(i),new Zf(i,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,t)}clone(e){if(void 0!==e&&("object"!=typeof e||null===e))throw new TypeError("options, when provided, must be an object.");if(void 0!==e?.data&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(void 0!==e?.type&&"key"!==e.type&&"delta"!==e.type)throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(void 0!==e?.timestamp&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(void 0!==e?.duration&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(void 0!==e?.sequenceNumber&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(void 0!==e?.sideData&&("object"!=typeof e.sideData||null===e.sideData))throw new TypeError("options.sideData, when provided, must be an object.");return new Zf(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}}Symbol.dispose??=Symbol("Symbol.dispose");let Xf=-1/0,Kf=-1/0,Qf=null;"undefined"!=typeof FinalizationRegistry&&(Qf=new FinalizationRegistry(e=>{const t=Date.now();"video"===e.type?(t-Xf>=1e3&&(console.error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),Xf=t),"undefined"!=typeof VideoFrame&&e.data instanceof VideoFrame&&e.data.close()):(t-Kf>=1e3&&(console.error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),Kf=t),"undefined"!=typeof AudioData&&e.data instanceof AudioData&&e.data.close())}));const Jf=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],ey=new Set(Jf);class ty{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180==0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180==0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(qg*this.timestamp)}get microsecondDuration(){return Math.trunc(qg*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,t){if(this._closed=!1,e instanceof ArrayBuffer||"undefined"!=typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!t||"object"!=typeof t)throw new TypeError("init must be an object.");if(void 0===t.format||!ey.has(t.format))throw new TypeError("init.format must be one of: "+Jf.join(", "));if(!Number.isInteger(t.codedWidth)||t.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(t.codedHeight)||t.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(void 0!==t.rotation&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(t.timestamp))throw new TypeError("init.timestamp must be a number.");if(void 0!==t.duration&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(void 0!==t.layout){if(!Array.isArray(t.layout))throw new TypeError("init.layout, when provided, must be an array.");for(const e of t.layout){if(!e||"object"!=typeof e||Array.isArray(e))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(void 0!==t.visibleRect&&Jg(t.visibleRect,"init.visibleRect"),void 0!==t.displayWidth&&(!Number.isInteger(t.displayWidth)||t.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(void 0!==t.displayHeight&&(!Number.isInteger(t.displayHeight)||t.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(void 0!==t.displayWidth!=(void 0!==t.displayHeight))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this._data=Ig(e).slice(),this._layout=t.layout??ny(t.format,t.codedWidth,t.codedHeight),this.format=t.format,this.rotation=t.rotation??0,this.timestamp=t.timestamp,this.duration=t.duration??0,this.colorSpace=new iy(t.colorSpace),this.visibleRect={left:t.visibleRect?.left??0,top:t.visibleRect?.top??0,width:t.visibleRect?.width??t.codedWidth,height:t.visibleRect?.height??t.codedHeight},void 0!==t.displayWidth?(this.squarePixelWidth=this.rotation%180==0?t.displayWidth:t.displayHeight,this.squarePixelHeight=this.rotation%180==0?t.displayHeight:t.displayWidth):(this.squarePixelWidth=this.codedWidth,this.squarePixelHeight=this.codedHeight)}else if("undefined"!=typeof VideoFrame&&e instanceof VideoFrame){if(void 0!==t?.rotation&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(void 0!==t?.timestamp&&!Number.isFinite(t?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(void 0!==t?.duration&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");void 0!==t?.visibleRect&&Jg(t.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=t?.rotation??0,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=t?.timestamp??e.timestamp/1e6,this.duration=t?.duration??(e.duration??0)/1e6,this.colorSpace=new iy(e.colorSpace)}else{if(!("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof SVGImageElement&&e instanceof SVGImageElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas))throw new TypeError("Invalid data type: Must be a BufferSource or CanvasImageSource.");{if(!t||"object"!=typeof t)throw new TypeError("init must be an object.");if(void 0!==t.rotation&&![0,90,180,270].includes(t.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(!Number.isFinite(t.timestamp))throw new TypeError("init.timestamp must be a number.");if(void 0!==t.duration&&(!Number.isFinite(t.duration)||t.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if("undefined"!=typeof VideoFrame)return new ty(new VideoFrame(e,{timestamp:Math.trunc(t.timestamp*qg),duration:Math.trunc((t.duration??0)*qg)||void 0}),t);let i=0,r=0;if("naturalWidth"in e?(i=e.naturalWidth,r=e.naturalHeight):"videoWidth"in e?(i=e.videoWidth,r=e.videoHeight):"width"in e&&(i=Number(e.width),r=Number(e.height)),!i||!r)throw new TypeError("Could not determine dimensions.");const s=new OffscreenCanvas(i,r),o=s.getContext("2d",{alpha:Xg(),willReadFrequently:!0});$g(o),o.drawImage(e,0,0),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:i,height:r},this.squarePixelWidth=i,this.squarePixelHeight=r,this.rotation=t.rotation??0,this.timestamp=t.timestamp,this.duration=t.duration??0,this.colorSpace=new iy({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}}this.pixelAspectRatio=Qg({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Qf?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return $g(null!==this._data),ry(this._data)?new ty(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation}):this._data instanceof Uint8Array?($g(this._layout),new ty(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight})):new ty(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight})}close(){this._closed||(Qf?.unregister(this),ry(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(ay(e),this._closed)throw new Error("VideoSample is closed.");if(null===this.format)throw new Error("Cannot get allocation size when format is null. Sorry!");if($g(null!==this._data),!ry(this._data)&&(e.colorSpace||e.format&&e.format!==this.format||e.layout||e.rect)){const t=this.toVideoFrame(),i=t.allocationSize(e);return t.close(),i}return ry(this._data)?this._data.allocationSize(e):this._data instanceof Uint8Array?this._data.byteLength:this.codedWidth*this.codedHeight*4}async copyTo(e,t={}){if(!jg(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(ay(t),this._closed)throw new Error("VideoSample is closed.");if(null===this.format)throw new Error("Cannot copy video sample data when format is null. Sorry!");if($g(null!==this._data),!ry(this._data)&&(t.colorSpace||t.format&&t.format!==this.format||t.layout||t.rect)){const i=this.toVideoFrame(),r=await i.copyTo(e,t);return i.close(),r}if(ry(this._data))return this._data.copyTo(e,t);if(this._data instanceof Uint8Array){$g(this._layout);return Ig(e).set(this._data),this._layout}{const t=this._data.getContext("2d");$g(t);const i=t.getImageData(0,0,this.codedWidth,this.codedHeight);return Ig(e).set(i.data),[{offset:0,stride:4*this.codedWidth}]}}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");return $g(null!==this._data),ry(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace}):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,t,i,r,s,o,a,n,l){let h=0,c=0,d=this.displayWidth,p=this.displayHeight,u=0,m=0,g=this.displayWidth,f=this.displayHeight;if(void 0!==o?(h=t,c=i,d=r,p=s,u=o,m=a,void 0!==n?(g=n,f=l):(g=d,f=p)):(u=t,m=i,void 0!==r&&(g=r,f=s)),!("undefined"!=typeof CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof OffscreenCanvasRenderingContext2D&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(h))throw new TypeError("sx must be a number.");if(!Number.isFinite(c))throw new TypeError("sy must be a number.");if(!Number.isFinite(d)||d<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(p)||p<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(u))throw new TypeError("dx must be a number.");if(!Number.isFinite(m))throw new TypeError("dy must be a number.");if(!Number.isFinite(g)||g<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(f)||f<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:h,sy:c,sWidth:d,sHeight:p}=this._rotateSourceRegion(h,c,d,p,this.rotation));const y=this.toCanvasImageSource();e.save();const v=u+g/2,b=m+f/2;e.translate(v,b),e.rotate(this.rotation*Math.PI/180);const w=this.rotation%180==0?1:g/f;e.scale(1/w,w),e.drawImage(y,h,c,d,p,-g/2,-f/2,g,f),e.restore()}drawWithFit(e,t){if(!("undefined"!=typeof CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof OffscreenCanvasRenderingContext2D&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!t||"object"!=typeof t)throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(t.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(void 0!==t.rotation&&![0,90,180,270].includes(t.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");void 0!==t.crop&&oy(t.crop,"options.");const i=e.canvas.width,r=e.canvas.height,s=t.rotation??this.rotation,[o,a]=s%180==0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth];let n,l,h,c;t.crop&&sy(t.crop,o,a);const{sx:d,sy:p,sWidth:u,sHeight:m}=this._rotateSourceRegion(t.crop?.left??0,t.crop?.top??0,t.crop?.width??o,t.crop?.height??a,s);if("fill"===t.fit)n=0,l=0,h=i,c=r;else{const[e,s]=t.crop?[t.crop.width,t.crop.height]:[o,a],d="contain"===t.fit?Math.min(i/e,r/s):Math.max(i/e,r/s);h=e*d,c=s*d,n=(i-h)/2,l=(r-c)/2}e.save();const g=s%180==0?1:h/c;e.translate(i/2,r/2),e.rotate(s*Math.PI/180),e.scale(1/g,g),e.translate(-i/2,-r/2),e.drawImage(this.toCanvasImageSource(),d,p,u,m,n,l,h,c),e.restore()}_rotateSourceRegion(e,t,i,r,s){return 90===s?[e,t,i,r]=[t,this.squarePixelHeight-e-i,r,i]:180===s?[e,t]=[this.squarePixelWidth-e-i,this.squarePixelHeight-t-r]:270===s&&([e,t,i,r]=[this.squarePixelWidth-t-r,e,r,i]),{sx:e,sy:t,sWidth:i,sHeight:r}}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if($g(null!==this._data),this._data instanceof Uint8Array){const e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}return this._data}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}[Symbol.dispose](){this.close()}}class iy{constructor(e){if(void 0!==e){if(!e||"object"!=typeof e)throw new TypeError("init.colorSpace, when provided, must be an object.");const t=Object.keys(Fg);if(null!=e.primaries&&!t.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${t.join(", ")}.`);const i=Object.keys(Bg);if(null!=e.transfer&&!i.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${i.join(", ")}.`);const r=Object.keys(Ng);if(null!=e.matrix&&!r.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${r.join(", ")}.`);if(null!=e.fullRange&&"boolean"!=typeof e.fullRange)throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}}const ry=e=>"undefined"!=typeof VideoFrame&&e instanceof VideoFrame,sy=(e,t,i)=>{e.left=Math.min(e.left,t),e.top=Math.min(e.top,i),e.width=Math.min(e.width,t-e.left),e.height=Math.min(e.height,i-e.top),$g(e.width>=0),$g(e.height>=0)},oy=(e,t)=>{if(!e||"object"!=typeof e)throw new TypeError(t+"crop, when provided, must be an object.");if(!Number.isInteger(e.left)||e.left<0)throw new TypeError(t+"crop.left must be a non-negative integer.");if(!Number.isInteger(e.top)||e.top<0)throw new TypeError(t+"crop.top must be a non-negative integer.");if(!Number.isInteger(e.width)||e.width<0)throw new TypeError(t+"crop.width must be a non-negative integer.");if(!Number.isInteger(e.height)||e.height<0)throw new TypeError(t+"crop.height must be a non-negative integer.")},ay=e=>{if(!e||"object"!=typeof e)throw new TypeError("options must be an object.");if(void 0!==e.colorSpace&&!["display-p3","srgb"].includes(e.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(void 0!==e.format&&"string"!=typeof e.format)throw new TypeError("options.format, when provided, must be a string.");if(void 0!==e.layout){if(!Array.isArray(e.layout))throw new TypeError("options.layout, when provided, must be an array.");for(const t of e.layout){if(!t||"object"!=typeof t)throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(t.offset)||t.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(t.stride)||t.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(void 0!==e.rect){if(!e.rect||"object"!=typeof e.rect)throw new TypeError("options.rect, when provided, must be an object.");if(void 0!==e.rect.x&&(!Number.isInteger(e.rect.x)||e.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(void 0!==e.rect.y&&(!Number.isInteger(e.rect.y)||e.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(void 0!==e.rect.width&&(!Number.isInteger(e.rect.width)||e.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(void 0!==e.rect.height&&(!Number.isInteger(e.rect.height)||e.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},ny=(e,t,i)=>{const r=ly(e),s=[];let o=0;for(const a of r){const e=Math.ceil(t/a.widthDivisor),r=Math.ceil(i/a.heightDivisor),n=e*a.sampleBytes,l=n*r;s.push({offset:o,stride:n}),o+=l}return s},ly=e=>{const t=(e,t,i,r,s)=>{const o=[{sampleBytes:e,widthDivisor:1,heightDivisor:1},{sampleBytes:t,widthDivisor:i,heightDivisor:r},{sampleBytes:t,widthDivisor:i,heightDivisor:r}];return s&&o.push({sampleBytes:e,widthDivisor:1,heightDivisor:1}),o};switch(e){case"I420":return t(1,1,2,2,!1);case"I420P10":case"I420P12":return t(2,2,2,2,!1);case"I420A":return t(1,1,2,2,!0);case"I420AP10":case"I420AP12":return t(2,2,2,2,!0);case"I422":return t(1,1,2,1,!1);case"I422P10":case"I422P12":return t(2,2,2,1,!1);case"I422A":return t(1,1,2,1,!0);case"I422AP10":case"I422AP12":return t(2,2,2,1,!0);case"I444":return t(1,1,1,1,!1);case"I444P10":case"I444P12":return t(2,2,1,1,!1);case"I444A":return t(1,1,1,1,!0);case"I444AP10":case"I444AP12":return t(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Hg(e),$g(!1)}},hy=e=>{const t=e.filePos,i=dy(e,9),r=new Dg(i);if(4095!==r.readBits(12))return null;r.skipBits(1);if(0!==r.readBits(2))return null;const s=r.readBits(1),o=r.readBits(2)+1,a=r.readBits(4);if(15===a)return null;r.skipBits(1);const n=r.readBits(3);if(0===n)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);const l=r.readBits(13);r.skipBits(11);const h=r.readBits(2)+1;if(1!==h)throw new Error("ADTS frames with more than one AAC frame are not supported.");let c=null;return 1===s?e.filePos-=2:c=r.readBits(16),{objectType:o,samplingFrequencyIndex:a,channelConfiguration:n,frameLength:l,numberOfAacFrames:h,crcCheck:c,startPos:t}};class cy{constructor(e,t,i,r,s){this.bytes=e,this.view=t,this.offset=i,this.start=r,this.end=s,this.bufferPos=r-i}static tempFromBytes(e){return new cy(e,Ug(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,t=this.end-e){if(e<this.start||e+t>this.end)throw new RangeError("Slicing outside of original slice.");return new cy(this.bytes,this.view,this.offset,e,e+t)}}const dy=(e,t)=>{((e,t)=>{if(e.filePos<e.start||e.filePos+t>e.end)throw new RangeError(`Tried reading [${e.filePos}, ${e.filePos+t}), but slice is [${e.start}, ${e.end}). This is likely an internal error, please report it alongside the file that caused it.`)})(e,t);const i=e.bytes.subarray(e.bufferPos,e.bufferPos+t);return e.bufferPos+=t,i};class py{constructor(e){this.mutex=new Vg,this.firstMediaStreamTimestamp=null,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateAndNormalizeTimestamp(e,t,i){t+=e.source._timestampOffset;let r=this.trackTimestampInfo.get(e);if(!r){if(!i)throw new Error("First packet must be a key packet.");r={maxTimestamp:t,maxTimestampBeforeLastKeyPacket:t},this.trackTimestampInfo.set(e,r)}if(t<0)throw new Error(`Timestamps must be non-negative (got ${t}s).`);if(i&&(r.maxTimestampBeforeLastKeyPacket=r.maxTimestamp),t<r.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${r.maxTimestampBeforeLastKeyPacket}s.`);return r.maxTimestamp=Math.max(r.maxTimestamp,t),t}}const uy=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g,my=e=>{const t=Math.floor(e/36e5),i=Math.floor(e%36e5/6e4),r=Math.floor(e%6e4/1e3),s=e%1e3;return t.toString().padStart(2,"0")+":"+i.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+s.toString().padStart(3,"0")};class gy{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let t=0;t<e.length;t++)this.helperView.setUint8(t%8,e.charCodeAt(t)),t%8==7&&this.writer.write(this.helper);e.length%8!=0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{const t=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(const s of e.children)s&&this.writeBox(s);const i=this.writer.getPos(),r=e.size??i-t;this.writer.seek(t),this.writeBoxHeader(e,r),this.writer.seek(i)}}writeBoxHeader(e,t){this.writeU32(e.largeSize?1:t),this.writeAscii(e.type),e.largeSize&&this.writeU64(t)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){const t=this.offsets.get(e);$g(void 0!==t);const i=this.writer.getPos();this.writer.seek(t),this.writeBox(e),this.writer.seek(i)}measureBox(e){if(e.contents&&!e.children){return this.measureBoxHeader(e)+e.contents.byteLength}{let t=this.measureBoxHeader(e);if(e.contents&&(t+=e.contents.byteLength),e.children)for(const i of e.children)i&&(t+=this.measureBox(i));return t}}}const fy=new Uint8Array(8),yy=new DataView(fy.buffer),vy=e=>[(e%256+256)%256],by=e=>(yy.setUint16(0,e,!1),[fy[0],fy[1]]),wy=e=>(yy.setInt16(0,e,!1),[fy[0],fy[1]]),xy=e=>(yy.setUint32(0,e,!1),[fy[1],fy[2],fy[3]]),Sy=e=>(yy.setUint32(0,e,!1),[fy[0],fy[1],fy[2],fy[3]]),ky=e=>(yy.setInt32(0,e,!1),[fy[0],fy[1],fy[2],fy[3]]),Cy=e=>(yy.setUint32(0,Math.floor(e/2**32),!1),yy.setUint32(4,e,!1),[fy[0],fy[1],fy[2],fy[3],fy[4],fy[5],fy[6],fy[7]]),Ey=e=>(yy.setInt16(0,256*e,!1),[fy[0],fy[1]]),Ty=e=>(yy.setInt32(0,65536*e,!1),[fy[0],fy[1],fy[2],fy[3]]),_y=e=>(yy.setInt32(0,2**30*e,!1),[fy[0],fy[1],fy[2],fy[3]]),Ay=(e,t)=>{const i=[];let r=e;do{let e=127&r;r>>=7,i.length>0&&(e|=128),i.push(e)}while(r>0||t);return i.reverse()},Py=(e,t=!1)=>{const i=Array(e.length).fill(null).map((t,i)=>e.charCodeAt(i));return t&&i.push(0),i},$y=e=>{let t=null;for(const i of e)(!t||i.timestamp>t.timestamp)&&(t=i);return t},Ry=e=>{const t=e*(Math.PI/180),i=Math.round(Math.cos(t)),r=Math.round(Math.sin(t));return[i,r,0,-r,i,0,0,0,1]},Ly=Ry(0),Dy=e=>[Ty(e[0]),Ty(e[1]),_y(e[2]),Ty(e[3]),Ty(e[4]),_y(e[5]),Ty(e[6]),Ty(e[7]),_y(e[8])],Oy=(e,t,i)=>({type:e,contents:t&&new Uint8Array(t.flat(10)),children:i}),My=(e,t,i,r,s)=>Oy(e,[vy(t),xy(i),r??[]],s),Iy=e=>({type:"mdat",largeSize:e}),Uy=e=>Oy("moov",void 0,[zy(e.creationTime,e.trackDatas),...e.trackDatas.map(t=>Fy(t,e.creationTime)),e.isFragmented?xv(e.trackDatas):null,Mv(e)]),zy=(e,t)=>{const i=sb(Math.max(0,...t.filter(e=>e.samples.length>0).map(e=>{const t=$y(e.samples);return t.timestamp+t.duration})),ib),r=Math.max(0,...t.map(e=>e.track.id))+1,s=!Lg(e)||!Lg(i),o=s?Cy:Sy;return My("mvhd",+s,0,[o(e),o(e),Sy(ib),o(i),Ty(1),Ey(1),Array(10).fill(0),Dy(Ly),Array(24).fill(0),Sy(r)])},Fy=(e,t)=>{const i=rb(e);return Oy("trak",void 0,[By(e,t),Ny(e,t),void 0!==i.name?Oy("udta",void 0,[Oy("name",[...zg.encode(i.name)])]):null])},By=(e,t)=>{const i=$y(e.samples),r=sb(i?i.timestamp+i.duration:0,ib),s=!Lg(t)||!Lg(r),o=s?Cy:Sy;let a;if("video"===e.type){const t=e.track.metadata.rotation;a=Ry(t??0)}else a=Ly;let n=2;return!1!==e.track.metadata.disposition?.default&&(n|=1),My("tkhd",+s,n,[o(t),o(t),Sy(e.track.id),Sy(0),o(r),Array(8).fill(0),by(0),by(e.track.id),Ey("audio"===e.type?1:0),by(0),Dy(a),Ty("video"===e.type?e.info.width:0),Ty("video"===e.type?e.info.height:0)])},Ny=(e,t)=>Oy("mdia",void 0,[jy(e,t),Wy(!0,Vy[e.type],Hy[e.type]),Gy(e)]),jy=(e,t)=>{const i=$y(e.samples),r=sb(i?i.timestamp+i.duration:0,e.timescale),s=!Lg(t)||!Lg(r),o=s?Cy:Sy;return My("mdhd",+s,0,[o(t),o(t),Sy(e.timescale),o(r),by(Zv(e.track.metadata.languageCode??"und")),by(0)])},Vy={video:"vide",audio:"soun",subtitle:"text"},Hy={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},Wy=(e,t,i,r="\0\0\0\0")=>My("hdlr",0,0,[e?Py("mhlr"):Sy(0),Py(t),Py(r),Sy(0),Sy(0),Py(i,!0)]),Gy=e=>Oy("minf",void 0,[qy[e.type](),Yy(),Ky(e)]),qy={video:()=>My("vmhd",0,1,[by(0),by(0),by(0),by(0)]),audio:()=>My("smhd",0,0,[by(0),by(0)]),subtitle:()=>My("nmhd",0,0)},Yy=()=>Oy("dinf",void 0,[Zy()]),Zy=()=>My("dref",0,0,[Sy(1)],[Xy()]),Xy=()=>My("url ",0,1),Ky=e=>{const t=e.compositionTimeOffsetTable.length>1||e.compositionTimeOffsetTable.some(e=>0!==e.sampleCompositionTimeOffset);return Oy("stbl",void 0,[Qy(e),mv(e),t?bv(e):null,t?wv(e):null,fv(e),yv(e),vv(e),gv(e)])},Qy=e=>{let t;if("video"===e.type)t=Jy(Vv(e.track.source._codec,e.info.decoderConfig.codec),e);else if("audio"===e.type){const i=Wv(e.track.source._codec,e.muxer.isQuickTime);$g(i),t=rv(i,e)}else"subtitle"===e.type&&(t=uv(qv[e.track.source._codec],e));return $g(t),My("stsd",0,0,[Sy(1)],[t])},Jy=(e,t)=>{return Oy(e,[Array(6).fill(0),by(1),by(0),by(0),Array(12).fill(0),by(t.info.width),by(t.info.height),Sy(4718592),Sy(4718592),Sy(0),by(1),Array(32).fill(0),by(24),wy(65535)],[Hv[t.track.source._codec](t),ev(t),(i=t.info.decoderConfig.colorSpace,i&&i.primaries&&i.transfer&&i.matrix&&void 0!==i.fullRange?tv(t):null)]);var i},ev=e=>e.info.pixelAspectRatio.num===e.info.pixelAspectRatio.den?null:Oy("pasp",[Sy(e.info.pixelAspectRatio.num),Sy(e.info.pixelAspectRatio.den)]),tv=e=>Oy("colr",[Py("nclx"),by(Fg[e.info.decoderConfig.colorSpace.primaries]),by(Bg[e.info.decoderConfig.colorSpace.transfer]),by(Ng[e.info.decoderConfig.colorSpace.matrix]),vy((e.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),iv=e=>{if(!e.info.decoderConfig)return null;const t=e.info.decoderConfig,i=t.codec.split("."),r=Number(i[1]),s=Number(i[2]),o=(Number(i[3])<<4)+((i[4]?Number(i[4]):1)<<1)+(i[8]?Number(i[8]):Number(t.colorSpace?.fullRange??0)),a=i[5]?Number(i[5]):t.colorSpace?.primaries?Fg[t.colorSpace.primaries]:2,n=i[6]?Number(i[6]):t.colorSpace?.transfer?Bg[t.colorSpace.transfer]:2,l=i[7]?Number(i[7]):t.colorSpace?.matrix?Ng[t.colorSpace.matrix]:2;return My("vpcC",1,0,[vy(r),vy(s),vy(o),vy(a),vy(n),vy(l),by(0)])},rv=(e,t)=>{let i,r=0,s=16;const o=sf.includes(t.track.source._codec);if(o){const e=t.track.source._codec,{sampleSize:i}=ff(e);s=8*i,s>16&&(r=1)}if(t.muxer.isQuickTime&&(r=1),0===r)i=[Array(6).fill(0),by(1),by(r),by(0),Sy(0),by(t.info.numberOfChannels),by(s),by(0),by(0),by(t.info.sampleRate<65536?t.info.sampleRate:0),by(0)];else{const e=o?0:-2;i=[Array(6).fill(0),by(1),by(r),by(0),Sy(0),by(t.info.numberOfChannels),by(Math.min(s,16)),wy(e),by(0),by(t.info.sampleRate<65536?t.info.sampleRate:0),by(0),o?[Sy(1),Sy(s/8),Sy(t.info.numberOfChannels*s/8)]:[Sy(0),Sy(0),Sy(0)],Sy(2)]}return Oy(e,i,[Gv(t.track.source._codec,t.muxer.isQuickTime)?.(t)??null])},sv=e=>{let t;switch(e.track.source._codec){case"aac":t=64;break;case"mp3":t=107;break;case"vorbis":t=221;break;default:throw new Error(`Unhandled audio codec: ${e.track.source._codec}`)}let i=[...vy(t),...vy(21),...xy(0),...Sy(0),...Sy(0)];if(e.info.decoderConfig.description){const t=Ig(e.info.decoderConfig.description);i=[...i,...vy(5),...Ay(t.byteLength),...t]}return i=[...by(1),...vy(0),...vy(4),...Ay(i.length),...i,...vy(6),...vy(1),...vy(2)],i=[...vy(3),...Ay(i.length),...i],My("esds",0,0,i)},ov=e=>Oy("wave",void 0,[av(e),nv(e),Oy("\0\0\0\0")]),av=e=>Oy("frma",[Py(Wv(e.track.source._codec,e.muxer.isQuickTime))]),nv=e=>{const{littleEndian:t}=ff(e.track.source._codec);return Oy("enda",[by(+t)])},lv=e=>{let t=e.info.numberOfChannels,i=3840,r=e.info.sampleRate,s=0,o=0,a=new Uint8Array(0);const n=e.info.decoderConfig?.description;if(n){$g(n.byteLength>=18);const e=(e=>{const t=Ug(e),i=t.getUint8(9),r=t.getUint16(10,!0),s=t.getUint32(12,!0),o=t.getInt16(16,!0),a=t.getUint8(18);let n=null;return a&&(n=e.subarray(19,21+i)),{outputChannelCount:i,preSkip:r,inputSampleRate:s,outputGain:o,channelMappingFamily:a,channelMappingTable:n}})(Ig(n));t=e.outputChannelCount,i=e.preSkip,r=e.inputSampleRate,s=e.outputGain,o=e.channelMappingFamily,e.channelMappingTable&&(a=e.channelMappingTable)}return Oy("dOps",[vy(0),vy(t),by(i),Sy(r),wy(s),vy(o),...a])},hv=e=>{const t=e.info.decoderConfig?.description;$g(t);const i=Ig(t);return My("dfLa",0,0,[...i.subarray(4)])},cv=e=>{const{littleEndian:t,sampleSize:i}=ff(e.track.source._codec);return My("pcmC",0,0,[vy(+t),vy(8*i)])},dv=e=>{const t=(e=>{if(e.length<7)return null;if(11!==e[0]||119!==e[1])return null;const t=new Dg(e);t.skipBits(16),t.skipBits(16);const i=t.readBits(2);if(3===i)return null;const r=t.readBits(6),s=t.readBits(5);if(s>8)return null;const o=t.readBits(3),a=t.readBits(3);return 1&a&&1!==a&&t.skipBits(2),4&a&&t.skipBits(2),2===a&&t.skipBits(2),{fscod:i,bsid:s,bsmod:o,acmod:a,lfeon:t.readBits(1),bitRateCode:Math.floor(r/2)}})(e.info.firstPacket.data);if(!t)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");const i=new Uint8Array(3),r=new Dg(i);return r.writeBits(2,t.fscod),r.writeBits(5,t.bsid),r.writeBits(3,t.bsmod),r.writeBits(3,t.acmod),r.writeBits(1,t.lfeon),r.writeBits(5,t.bitRateCode),r.writeBits(5,0),Oy("dac3",[...i])},pv=e=>{const t=(e=>{if(e.length<6)return null;if(11!==e[0]||119!==e[1])return null;const t=new Dg(e);t.skipBits(16);const i=t.readBits(2);if(t.skipBits(3),0!==i&&2!==i)return null;const r=t.readBits(11),s=t.readBits(2);let o,a=0;3===s?(a=t.readBits(2),o=3):o=t.readBits(2);const n=t.readBits(3),l=t.readBits(1),h=t.readBits(5);if(h<11||h>16)return null;const c=Gf[o];let d;return d=s<3?kf[s]/1e3:Cf[a]/1e3,{dataRate:Math.round((r+1)*d/(16*c)),substreams:[{fscod:s,fscod2:a,bsid:h,bsmod:0,acmod:n,lfeon:l,numDepSub:0,chanLoc:0}]}})(e.info.firstPacket.data);if(!t)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let i=16;for(const a of t.substreams)i+=23,a.numDepSub>0?i+=9:i+=1;const r=Math.ceil(i/8),s=new Uint8Array(r),o=new Dg(s);o.writeBits(13,t.dataRate),o.writeBits(3,t.substreams.length-1);for(const a of t.substreams)o.writeBits(2,a.fscod),o.writeBits(5,a.bsid),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(3,a.bsmod),o.writeBits(3,a.acmod),o.writeBits(1,a.lfeon),o.writeBits(3,0),o.writeBits(4,a.numDepSub),a.numDepSub>0?o.writeBits(9,a.chanLoc):o.writeBits(1,0);return Oy("dec3",[...s])},uv=(e,t)=>Oy(e,[Array(6).fill(0),by(1)],[Yv[t.track.source._codec](t)]),mv=e=>My("stts",0,0,[Sy(e.timeToSampleTable.length),e.timeToSampleTable.map(e=>[Sy(e.sampleCount),Sy(e.sampleDelta)])]),gv=e=>{if(e.samples.every(e=>"key"===e.type))return null;const t=[...e.samples.entries()].filter(([,e])=>"key"===e.type);return My("stss",0,0,[Sy(t.length),t.map(([e])=>Sy(e+1))])},fv=e=>My("stsc",0,0,[Sy(e.compactlyCodedChunkTable.length),e.compactlyCodedChunkTable.map(e=>[Sy(e.firstChunk),Sy(e.samplesPerChunk),Sy(1)])]),yv=e=>{if("audio"===e.type&&e.info.requiresPcmTransformation){const{sampleSize:t}=ff(e.track.source._codec);return My("stsz",0,0,[Sy(t*e.info.numberOfChannels),Sy(e.samples.reduce((t,i)=>t+sb(i.duration,e.timescale),0))])}return My("stsz",0,0,[Sy(0),Sy(e.samples.length),e.samples.map(e=>Sy(e.size))])},vv=e=>e.finalizedChunks.length>0&&Rg(e.finalizedChunks).offset>=2**32?My("co64",0,0,[Sy(e.finalizedChunks.length),e.finalizedChunks.map(e=>Cy(e.offset))]):My("stco",0,0,[Sy(e.finalizedChunks.length),e.finalizedChunks.map(e=>Sy(e.offset))]),bv=e=>My("ctts",1,0,[Sy(e.compositionTimeOffsetTable.length),e.compositionTimeOffsetTable.map(e=>[Sy(e.sampleCount),ky(e.sampleCompositionTimeOffset)])]),wv=e=>{let t=1/0,i=-1/0,r=1/0,s=-1/0;$g(e.compositionTimeOffsetTable.length>0),$g(e.samples.length>0);for(let a=0;a<e.compositionTimeOffsetTable.length;a++){const r=e.compositionTimeOffsetTable[a];t=Math.min(t,r.sampleCompositionTimeOffset),i=Math.max(i,r.sampleCompositionTimeOffset)}for(let a=0;a<e.samples.length;a++){const t=e.samples[a];r=Math.min(r,sb(t.timestamp,e.timescale)),s=Math.max(s,sb(t.timestamp+t.duration,e.timescale))}const o=Math.max(-t,0);return s>=2**31?null:My("cslg",0,0,[ky(o),ky(t),ky(i),ky(r),ky(s)])},xv=e=>Oy("mvex",void 0,e.map(Sv)),Sv=e=>My("trex",0,0,[Sy(e.track.id),Sy(1),Sy(0),Sy(0),Sy(0)]),kv=(e,t)=>Oy("moof",void 0,[Cv(e),...t.map(Tv)]),Cv=e=>My("mfhd",0,0,[Sy(e)]),Ev=e=>{let t=0,i=0;const r="delta"===e.type;return i|=+r,t|=r?1:2,t<<24|i<<16},Tv=e=>Oy("traf",void 0,[_v(e),Av(e),Pv(e)]),_v=e=>{$g(e.currentChunk);let t=0;t|=8,t|=16,t|=32,t|=131072;const i=e.currentChunk.samples[1]??e.currentChunk.samples[0],r={duration:i.timescaleUnitsToNextSample,size:i.size,flags:Ev(i)};return My("tfhd",0,131128,[Sy(e.track.id),Sy(r.duration),Sy(r.size),Sy(r.flags)])},Av=e=>($g(e.currentChunk),My("tfdt",1,0,[Cy(sb(e.currentChunk.startTimestamp,e.timescale))])),Pv=e=>{$g(e.currentChunk);const t=e.currentChunk.samples.map(e=>e.timescaleUnitsToNextSample),i=e.currentChunk.samples.map(e=>e.size),r=e.currentChunk.samples.map(Ev),s=e.currentChunk.samples.map(t=>sb(t.timestamp-t.decodeTimestamp,e.timescale)),o=new Set(t),a=new Set(i),n=new Set(r),l=new Set(s),h=2===n.size&&r[0]!==r[1],c=o.size>1,d=a.size>1,p=!h&&n.size>1,u=l.size>1||[...l].some(e=>0!==e);let m=0;return m|=1,m|=4*+h,m|=256*+c,m|=512*+d,m|=1024*+p,m|=2048*+u,My("trun",1,m,[Sy(e.currentChunk.samples.length),Sy(e.currentChunk.offset-e.currentChunk.moofOffset||0),h?Sy(r[0]):[],e.currentChunk.samples.map((e,o)=>[c?Sy(t[o]):[],d?Sy(i[o]):[],p?Sy(r[o]):[],u?ky(s[o]):[]])])},$v=(e,t)=>My("tfra",1,0,[Sy(e.track.id),Sy(63),Sy(e.finalizedChunks.length),e.finalizedChunks.map(i=>[Cy(sb(i.samples[0].timestamp,e.timescale)),Cy(i.moofOffset),Sy(t+1),Sy(1),Sy(1)])]),Rv=()=>My("mfro",0,0,[Sy(0)]),Lv=()=>Oy("vtte"),Dv=(e,t,i,r,s)=>Oy("vttc",void 0,[null!==s?Oy("vsid",[ky(s)]):null,null!==i?Oy("iden",[...zg.encode(i)]):null,null!==t?Oy("ctim",[...zg.encode(my(t))]):null,null!==r?Oy("sttg",[...zg.encode(r)]):null,Oy("payl",[...zg.encode(e)])]),Ov=e=>Oy("vtta",[...zg.encode(e)]),Mv=e=>{const t=[],i=e.format._options.metadataFormat??"auto",r=e.output._metadataTags;if("mdir"===i||"auto"===i&&!e.isQuickTime){const e=Bv(r);e&&t.push(e)}else if("mdta"===i){const e=Nv(r);e&&t.push(e)}else("udta"===i||"auto"===i&&e.isQuickTime)&&Iv(t,e.output._metadataTags);return 0===t.length?null:Oy("udta",void 0,t)},Iv=(e,t)=>{for(const{key:i,value:r}of Kg(t))switch(i){case"title":e.push(Uv("©nam",r));break;case"description":e.push(Uv("©des",r));break;case"artist":e.push(Uv("©ART",r));break;case"album":e.push(Uv("©alb",r));break;case"albumArtist":e.push(Uv("albr",r));break;case"genre":e.push(Uv("©gen",r));break;case"date":e.push(Uv("©day",r.toISOString().slice(0,10)));break;case"comment":e.push(Uv("©cmt",r));break;case"lyrics":e.push(Uv("©lyr",r));break;case"raw":case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"images":break;default:Hg(i)}if(t.raw)for(const i in t.raw){const r=t.raw[i];null==r||4!==i.length||e.some(e=>e.type===i)||("string"==typeof r?e.push(Uv(i,r)):r instanceof Uint8Array&&e.push(Oy(i,Array.from(r))))}},Uv=(e,t)=>{const i=zg.encode(t);return Oy(e,[by(i.length),by(Zv("und")),Array.from(i)])},zv={"image/jpeg":13,"image/png":14,"image/bmp":27},Fv=(e,t)=>{const i=[];for(const{key:r,value:s}of Kg(e))switch(r){case"title":i.push({key:t?"title":"©nam",value:jv(s)});break;case"description":i.push({key:t?"description":"©des",value:jv(s)});break;case"artist":i.push({key:t?"artist":"©ART",value:jv(s)});break;case"album":i.push({key:t?"album":"©alb",value:jv(s)});break;case"albumArtist":i.push({key:t?"album_artist":"aART",value:jv(s)});break;case"comment":i.push({key:t?"comment":"©cmt",value:jv(s)});break;case"genre":i.push({key:t?"genre":"©gen",value:jv(s)});break;case"lyrics":i.push({key:t?"lyrics":"©lyr",value:jv(s)});break;case"date":i.push({key:t?"date":"©day",value:jv(s.toISOString().slice(0,10))});break;case"images":for(const e of s)"coverFront"===e.kind&&i.push({key:"covr",value:Oy("data",[Sy(zv[e.mimeType]??0),Sy(0),Array.from(e.data)])});break;case"trackNumber":if(t){const t=void 0!==e.tracksTotal?`${s}/${e.tracksTotal}`:s.toString();i.push({key:"track",value:jv(t)})}else i.push({key:"trkn",value:Oy("data",[Sy(0),Sy(0),by(0),by(s),by(e.tracksTotal??0),by(0)])});break;case"discNumber":t||i.push({key:"disc",value:Oy("data",[Sy(0),Sy(0),by(0),by(s),by(e.discsTotal??0),by(0)])});break;case"tracksTotal":case"discsTotal":case"raw":break;default:Hg(r)}if(e.raw)for(const r in e.raw){const s=e.raw[r];null==s||!t&&4!==r.length||i.some(e=>e.key===r)||("string"==typeof s?i.push({key:r,value:jv(s)}):s instanceof Uint8Array?i.push({key:r,value:Oy("data",[Sy(0),Sy(0),Array.from(s)])}):s instanceof ef&&i.push({key:r,value:Oy("data",[Sy(zv[s.mimeType]??0),Sy(0),Array.from(s.data)])}))}return i},Bv=e=>{const t=Fv(e,!1);return 0===t.length?null:My("meta",0,0,void 0,[Wy(!1,"mdir","","appl"),Oy("ilst",void 0,t.map(e=>Oy(e.key,void 0,[e.value])))])},Nv=e=>{const t=Fv(e,!0);return 0===t.length?null:Oy("meta",void 0,[Wy(!1,"mdta",""),My("keys",0,0,[Sy(t.length)],t.map(e=>Oy("mdta",[...zg.encode(e.key)]))),Oy("ilst",void 0,t.map((e,t)=>{const i=String.fromCharCode(...Sy(t+1));return Oy(i,void 0,[e.value])}))])},jv=e=>Oy("data",[Sy(1),Sy(0),...zg.encode(e)]),Vv=(e,t)=>{switch(e){case"avc":return t.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01"}},Hv={avc:e=>e.info.decoderConfig&&Oy("avcC",[...Ig(e.info.decoderConfig.description)]),hevc:e=>e.info.decoderConfig&&Oy("hvcC",[...Ig(e.info.decoderConfig.description)]),vp8:iv,vp9:iv,av1:e=>Oy("av1C",(e=>{const t=e.split("."),i=Number(t[1]),r=t[2];return[129,(i<<5)+Number(r.slice(0,-1)),(("H"===r.slice(-1)?1:0)<<7)+((8===Number(t[3])?0:1)<<6)+0+((t[4]?Number(t[4]):0)<<4)+((t[5]?Number(t[5][0]):1)<<3)+((t[5]?Number(t[5][1]):1)<<2)+(t[5]?Number(t[5][2]):0),0]})(e.info.decoderConfig.codec))},Wv=(e,t)=>{switch(e){case"aac":case"mp3":case"vorbis":return"mp4a";case"opus":return"Opus";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3"}if(t)switch(e){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":case"pcm-s24be":return"in24";case"pcm-s32":case"pcm-s32be":return"in32";case"pcm-f32":case"pcm-f32be":return"fl32";case"pcm-f64":case"pcm-f64be":return"fl64"}else switch(e){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":return"ipcm";case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return"fpcm"}},Gv=(e,t)=>{switch(e){case"aac":case"mp3":case"vorbis":return sv;case"opus":return lv;case"flac":return hv;case"ac3":return dv;case"eac3":return pv}if(t)switch(e){case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return ov}else switch(e){case"pcm-s16":case"pcm-s16be":case"pcm-s24":case"pcm-s24be":case"pcm-s32":case"pcm-s32be":case"pcm-f32":case"pcm-f32be":case"pcm-f64":case"pcm-f64be":return cv}return null},qv={webvtt:"wvtt"},Yv={webvtt:e=>Oy("vttC",[...zg.encode(e.info.config.description)])},Zv=e=>{$g(3===e.length);let t=0;for(let i=0;i<3;i++)t<<=5,t+=e.charCodeAt(i)-96;return t};class Xv{constructor(){this.ensureMonotonicity=!1,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1}start(){}maybeTrackWrites(e){if(!this.trackedWrites)return;let t=this.getPos();if(t<this.trackedStart){if(t+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-t),t=0}const i=t+e.byteLength-this.trackedStart;let r=this.trackedWrites.byteLength;for(;r<i;)r*=2;if(r!==this.trackedWrites.byteLength){const e=new Uint8Array(r);e.set(this.trackedWrites,0),this.trackedWrites=e}this.trackedWrites.set(e,t-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,t+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(1024),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");const e={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,e}}const Kv=65536,Qv=2**32;class Jv extends Xv{constructor(e){if(super(),this.pos=0,this.maxPos=0,this.target=e,this.supportsResize="resize"in new ArrayBuffer(0),this.supportsResize)try{this.buffer=new ArrayBuffer(Kv,{maxByteLength:Qv})}catch{this.buffer=new ArrayBuffer(Kv),this.supportsResize=!1}else this.buffer=new ArrayBuffer(Kv);this.bytes=new Uint8Array(this.buffer)}ensureSize(e){let t=this.buffer.byteLength;for(;t<e;)t*=2;if(t!==this.buffer.byteLength){if(t>Qv)throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");if(this.supportsResize)this.buffer.resize(t);else{const e=new ArrayBuffer(t),i=new Uint8Array(e);i.set(this.bytes,0),this.buffer=e,this.bytes=i}}}write(e){this.maybeTrackWrites(e),this.ensureSize(this.pos+e.byteLength),this.bytes.set(e,this.pos),this.target.onwrite?.(this.pos,this.pos+e.byteLength),this.pos+=e.byteLength,this.maxPos=Math.max(this.maxPos,this.pos)}seek(e){this.pos=e}getPos(){return this.pos}async flush(){}async finalize(){this.ensureSize(this.pos),this.target.buffer=this.buffer.slice(0,Math.max(this.maxPos,this.pos))}async close(){}getSlice(e,t){return this.bytes.slice(e,t)}}class eb{constructor(){this._output=null,this.onwrite=null}}class tb extends eb{constructor(){super(...arguments),this.buffer=null}_createWriter(){return new Jv(this)}}const ib=1e3,rb=e=>{const t={},i=e.track;return void 0!==i.metadata.name&&(t.name=i.metadata.name),t},sb=(e,t,i=!0)=>{const r=e*t;return i?Math.round(r):r};class ob extends py{constructor(e,t){super(e),this.auxTarget=new tb,this.auxWriter=this.auxTarget._createWriter(),this.auxBoxWriter=new gy(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=(()=>{let e,t;return{promise:new Promise((i,r)=>{e=i,t=r}),resolve:e,reject:t}})(),this.creationTime=Math.floor(Date.now()/1e3)+2082844800,this.finalizedChunks=[],this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.format=t,this.writer=e._writer,this.boxWriter=new gy(this.writer),this.isQuickTime=t instanceof hb;const i=this.writer instanceof Jv&&"in-memory";this.fastStart=t._options.fastStart??i,this.isFragmented="fragmented"===this.fastStart,("in-memory"===this.fastStart||this.isFragmented)&&(this.writer.ensureMonotonicity=!0),this.minimumFragmentDuration=t._options.minimumFragmentDuration??1}async start(){const e=await this.mutex.acquire(),t=this.output._tracks.some(e=>"video"===e.type&&"avc"===e.source._codec);if(this.format._options.onFtyp&&this.writer.startTrackingWrites(),this.boxWriter.writeBox((i={isQuickTime:this.isQuickTime,holdsAvc:t,fragmented:this.isFragmented}).isQuickTime?Oy("ftyp",[Py("qt  "),Sy(512),Py("qt  ")]):i.fragmented?Oy("ftyp",[Py("iso5"),Sy(512),Py("iso5"),Py("iso6"),Py("mp41")]):Oy("ftyp",[Py("isom"),Sy(512),Py("isom"),i.holdsAvc?Py("avc1"):[],Py("mp41")])),this.format._options.onFtyp){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onFtyp(e,t)}var i;if(this.ftypSize=this.writer.getPos(),"in-memory"===this.fastStart);else if("reserve"===this.fastStart){for(const r of this.output._tracks)if(void 0===r.metadata.maximumPacketCount)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat=Iy(!0),this.boxWriter.writeBox(this.mdat));await this.writer.flush(),e()}allTracksAreKnown(){for(const e of this.output._tracks)if(!e.source._closed&&!this.trackDatas.some(t=>t.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;const e=this.trackDatas.map(e=>{if("video"===e.type)return e.info.decoderConfig.codec;if("audio"===e.type)return e.info.decoderConfig.codec;return{webvtt:"wvtt"}[e.track.source._codec]});return(e=>{let t=(e.hasVideo?"video/":e.hasAudio?"audio/":"application/")+(e.isQuickTime?"quicktime":"mp4");e.codecStrings.length>0&&(t+=`; codecs="${[...new Set(e.codecStrings)].join(", ")}"`);return t})({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(e=>"video"===e.type),hasAudio:this.trackDatas.some(e=>"audio"===e.type),codecStrings:e})}getVideoTrackData(e,t,i){const r=this.trackDatas.find(t=>t.track===e);if(r)return r;(e=>{if(!e)throw new TypeError("Video chunk metadata must be provided.");if("object"!=typeof e)throw new TypeError("Video chunk metadata must be an object.");if(!e.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if("object"!=typeof e.decoderConfig)throw new TypeError("Video chunk metadata decoder configuration must be an object.");if("string"!=typeof e.decoderConfig.codec)throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!yf.some(t=>e.decoderConfig.codec.startsWith(t)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(e.decoderConfig.codedWidth)||e.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(e.decoderConfig.codedHeight)||e.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(void 0!==e.decoderConfig.description&&!jg(e.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(void 0!==e.decoderConfig.colorSpace){const{colorSpace:t}=e.decoderConfig;if("object"!=typeof t)throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");const i=Object.keys(Fg);if(null!=t.primaries&&!i.includes(t.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${i.join(", ")}.`);const r=Object.keys(Bg);if(null!=t.transfer&&!r.includes(t.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${r.join(", ")}.`);const s=Object.keys(Ng);if(null!=t.matrix&&!s.includes(t.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${s.join(", ")}.`);if(null!=t.fullRange&&"boolean"!=typeof t.fullRange)throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(e.decoderConfig.codec.startsWith("avc1")||e.decoderConfig.codec.startsWith("avc3")){if(!vf.test(e.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(e.decoderConfig.codec.startsWith("hev1")||e.decoderConfig.codec.startsWith("hvc1")){if(!bf.test(e.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(e.decoderConfig.codec.startsWith("vp8")){if("vp8"!==e.decoderConfig.codec)throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(e.decoderConfig.codec.startsWith("vp09")){if(!wf.test(e.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(e.decoderConfig.codec.startsWith("av01")&&!xf.test(e.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')})(i),$g(i),$g(i.decoderConfig);const s={...i.decoderConfig};$g(void 0!==s.codedWidth),$g(void 0!==s.codedHeight);let o=!1;if("avc"!==e.source._codec||s.description){if("hevc"===e.source._codec&&!s.description){const e=If(t.data);if(!e)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");s.description=(e=>{const t=[];t.push(e.configurationVersion),t.push((3&e.generalProfileSpace)<<6|(1&e.generalTierFlag)<<5|31&e.generalProfileIdc),t.push(e.generalProfileCompatibilityFlags>>>24&255),t.push(e.generalProfileCompatibilityFlags>>>16&255),t.push(e.generalProfileCompatibilityFlags>>>8&255),t.push(255&e.generalProfileCompatibilityFlags),t.push(...e.generalConstraintIndicatorFlags),t.push(255&e.generalLevelIdc),t.push(240|e.minSpatialSegmentationIdc>>8&15),t.push(255&e.minSpatialSegmentationIdc),t.push(252|3&e.parallelismType),t.push(252|3&e.chromaFormatIdc),t.push(248|7&e.bitDepthLumaMinus8),t.push(248|7&e.bitDepthChromaMinus8),t.push(e.avgFrameRate>>8&255),t.push(255&e.avgFrameRate),t.push((3&e.constantFrameRate)<<6|(7&e.numTemporalLayers)<<3|(1&e.temporalIdNested)<<2|3&e.lengthSizeMinusOne),t.push(255&e.arrays.length);for(const i of e.arrays){t.push((1&i.arrayCompleteness)<<7|63&i.nalUnitType),t.push(i.nalUnits.length>>8&255),t.push(255&i.nalUnits.length);for(const e of i.nalUnits){t.push(e.length>>8&255),t.push(255&e.length);for(let i=0;i<e.length;i++)t.push(e[i])}}return new Uint8Array(t)})(e),o=!0}}else{const e=(e=>{try{const t=[],i=[],r=[];for(const n of Pf(e)){const s=e.subarray(n.offset,n.offset+n.length),o=$f(s[0]);o===Ef.SPS?t.push(s):o===Ef.PPS?i.push(s):o===Ef.SPS_EXT&&r.push(s)}if(0===t.length)return null;if(0===i.length)return null;const s=t[0],o=Df(s);$g(null!==o);const a=100===o.profileIdc||110===o.profileIdc||122===o.profileIdc||144===o.profileIdc;return{configurationVersion:1,avcProfileIndication:o.profileIdc,profileCompatibility:o.constraintFlags,avcLevelIndication:o.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:t,pictureParameterSets:i,chromaFormat:a?o.chromaFormatIdc:null,bitDepthLumaMinus8:a?o.bitDepthLumaMinus8:null,bitDepthChromaMinus8:a?o.bitDepthChromaMinus8:null,sequenceParameterSetExt:a?r:null}}catch(t){return console.error("Error building AVC Decoder Configuration Record:",t),null}})(t.data);if(!e)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");s.description=(e=>{const t=[];t.push(e.configurationVersion),t.push(e.avcProfileIndication),t.push(e.profileCompatibility),t.push(e.avcLevelIndication),t.push(252|3&e.lengthSizeMinusOne),t.push(224|31&e.sequenceParameterSets.length);for(const i of e.sequenceParameterSets){const e=i.byteLength;t.push(e>>8),t.push(255&e);for(let r=0;r<e;r++)t.push(i[r])}t.push(e.pictureParameterSets.length);for(const i of e.pictureParameterSets){const e=i.byteLength;t.push(e>>8),t.push(255&e);for(let r=0;r<e;r++)t.push(i[r])}if(100===e.avcProfileIndication||110===e.avcProfileIndication||122===e.avcProfileIndication||144===e.avcProfileIndication){$g(null!==e.chromaFormat),$g(null!==e.bitDepthLumaMinus8),$g(null!==e.bitDepthChromaMinus8),$g(null!==e.sequenceParameterSetExt),t.push(252|3&e.chromaFormat),t.push(248|7&e.bitDepthLumaMinus8),t.push(248|7&e.bitDepthChromaMinus8),t.push(e.sequenceParameterSetExt.length);for(const i of e.sequenceParameterSetExt){const e=i.byteLength;t.push(e>>8),t.push(255&e);for(let r=0;r<e;r++)t.push(i[r])}}return new Uint8Array(t)})(e),o=!0}const a=((e,t)=>{const i=e<0?-1:1;let r=0,s=1,o=1,a=0,n=e=Math.abs(e);for(;;){const e=Math.floor(n),l=e*o+r,h=e*a+s;if(h>t)return{numerator:i*o,denominator:a};if(r=o,s=a,o=l,a=h,n=1/(n-e),!isFinite(n))break}return{numerator:i*o,denominator:a}})(1/(e.metadata.frameRate??57600),1e6).denominator,n=s.displayAspectWidth,l=s.displayAspectHeight,h=void 0===n||void 0===l?{num:1,den:1}:Qg({num:n*s.codedHeight,den:l*s.codedWidth}),c={muxer:this,track:e,type:"video",info:{width:s.codedWidth,height:s.codedHeight,pixelAspectRatio:h,decoderConfig:s,requiresAnnexBTransformation:o},timescale:a,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[]};return this.trackDatas.push(c),this.trackDatas.sort((e,t)=>e.track.id-t.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),c}getAudioTrackData(e,t,i){const r=this.trackDatas.find(t=>t.track===e);if(r)return r;(e=>{if(!e)throw new TypeError("Audio chunk metadata must be provided.");if("object"!=typeof e)throw new TypeError("Audio chunk metadata must be an object.");if(!e.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if("object"!=typeof e.decoderConfig)throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if("string"!=typeof e.decoderConfig.codec)throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!Sf.some(t=>e.decoderConfig.codec.startsWith(t)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(e.decoderConfig.sampleRate)||e.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(e.decoderConfig.numberOfChannels)||e.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(void 0!==e.decoderConfig.description&&!jg(e.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(e.decoderConfig.codec.startsWith("mp4a")&&"mp4a.69"!==e.decoderConfig.codec&&"mp4a.6B"!==e.decoderConfig.codec&&"mp4a.6b"!==e.decoderConfig.codec){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(e.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(e.decoderConfig.codec.startsWith("mp3")||e.decoderConfig.codec.startsWith("mp4a")){if("mp3"!==e.decoderConfig.codec&&"mp4a.69"!==e.decoderConfig.codec&&"mp4a.6B"!==e.decoderConfig.codec&&"mp4a.6b"!==e.decoderConfig.codec)throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(e.decoderConfig.codec.startsWith("opus")){if("opus"!==e.decoderConfig.codec)throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(e.decoderConfig.description&&e.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(e.decoderConfig.codec.startsWith("vorbis")){if("vorbis"!==e.decoderConfig.codec)throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!e.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(e.decoderConfig.codec.startsWith("flac")){if("flac"!==e.decoderConfig.codec)throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');const t=42;if(!e.decoderConfig.description||e.decoderConfig.description.byteLength<t)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(e.decoderConfig.codec.startsWith("ac-3")||e.decoderConfig.codec.startsWith("ac3")){if("ac-3"!==e.decoderConfig.codec)throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(e.decoderConfig.codec.startsWith("ec-3")||e.decoderConfig.codec.startsWith("eac3")){if("ec-3"!==e.decoderConfig.codec)throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if((e.decoderConfig.codec.startsWith("pcm")||e.decoderConfig.codec.startsWith("ulaw")||e.decoderConfig.codec.startsWith("alaw"))&&!sf.includes(e.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${sf.join(", ")}).`)})(i),$g(i),$g(i.decoderConfig);const s={...i.decoderConfig};let o=!1;if("aac"===e.source._codec&&!s.description){const e=hy(cy.tempFromBytes(t.data));if(!e)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");const i=uf[e.samplingFrequencyIndex],r=mf[e.channelConfiguration];if(void 0===i||void 0===r)throw new Error("Invalid ADTS frame header.");s.description=(e=>{let t=uf.indexOf(e.sampleRate),i=null;-1===t&&(t=15,i=e.sampleRate);const r=mf.indexOf(e.numberOfChannels);if(-1===r)throw new TypeError(`Unsupported number of channels: ${e.numberOfChannels}`);let s=13;e.objectType>=32&&(s+=6),15===t&&(s+=24);const o=Math.ceil(s/8),a=new Uint8Array(o),n=new Dg(a);return e.objectType<32?n.writeBits(5,e.objectType):(n.writeBits(5,31),n.writeBits(6,e.objectType-32)),n.writeBits(4,t),15===t&&n.writeBits(24,i),n.writeBits(4,r),a})({objectType:e.objectType,sampleRate:i,numberOfChannels:r}),o=!0}const a={muxer:this,track:e,type:"audio",info:{numberOfChannels:i.decoderConfig.numberOfChannels,sampleRate:i.decoderConfig.sampleRate,decoderConfig:s,requiresPcmTransformation:!this.isFragmented&&sf.includes(e.source._codec),requiresAdtsStripping:o,firstPacket:t},timescale:s.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[]};return this.trackDatas.push(a),this.trackDatas.sort((e,t)=>e.track.id-t.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),a}getSubtitleTrackData(e,t){const i=this.trackDatas.find(t=>t.track===e);if(i)return i;(e=>{if(!e)throw new TypeError("Subtitle metadata must be provided.");if("object"!=typeof e)throw new TypeError("Subtitle metadata must be an object.");if(!e.config)throw new TypeError("Subtitle metadata must include a config object.");if("object"!=typeof e.config)throw new TypeError("Subtitle metadata config must be an object.");if("string"!=typeof e.config.description)throw new TypeError("Subtitle metadata config description must be a string.")})(t),$g(t),$g(t.config);const r={muxer:this,track:e,type:"subtitle",info:{config:t.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],lastCueEndTimestamp:0,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(r),this.trackDatas.sort((e,t)=>e.track.id-t.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),r}async addEncodedVideoPacket(e,t,i){const r=await this.mutex.acquire();try{const r=this.getVideoTrackData(e,t,i);let s=t.data;if(r.info.requiresAnnexBTransformation){const e=[...Pf(s)].map(e=>s.subarray(e.offset,e.offset+e.length));if(0===e.length)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=((e,t)=>{const i=e.reduce((e,i)=>e+t+i.byteLength,0),r=new Uint8Array(i);let s=0;for(const o of e){const e=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(t){case 1:e.setUint8(s,o.byteLength);break;case 2:e.setUint16(s,o.byteLength,!1);break;case 3:Wg(e,s,o.byteLength);break;case 4:e.setUint32(s,o.byteLength,!1)}s+=t,r.set(o,s),s+=o.byteLength}return r})(e,4)}const o=this.validateAndNormalizeTimestamp(r.track,t.timestamp,"key"===t.type),a=this.createSampleForTrack(r,s,o,t.duration,t.type);await this.registerSample(r,a)}finally{r()}}async addEncodedAudioPacket(e,t,i){const r=await this.mutex.acquire();try{const r=this.getAudioTrackData(e,t,i);let s=t.data;if(r.info.requiresAdtsStripping){const e=hy(cy.tempFromBytes(s));if(!e)throw new Error("Expected ADTS frame, didn't get one.");const t=null===e.crcCheck?7:9;s=s.subarray(t)}const o=this.validateAndNormalizeTimestamp(r.track,t.timestamp,"key"===t.type),a=this.createSampleForTrack(r,s,o,t.duration,t.type);r.info.requiresPcmTransformation&&await this.maybePadWithSilence(r,o),await this.registerSample(r,a)}finally{r()}}async maybePadWithSilence(e,t){const i=Rg(e.samples),r=i?i.timestamp+i.duration:0,s=t-r,o=sb(s,e.timescale);if(o>0){const{sampleSize:t,silentValue:i}=ff(e.info.decoderConfig.codec),a=o*e.info.numberOfChannels,n=new Uint8Array(t*a).fill(i),l=this.createSampleForTrack(e,new Uint8Array(n.buffer),r,s,"key");await this.registerSample(e,l)}}async addSubtitleCue(e,t,i){const r=await this.mutex.acquire();try{const r=this.getSubtitleTrackData(e,i);this.validateAndNormalizeTimestamp(r.track,t.timestamp,!0),"webvtt"===e.source._codec&&(r.cueQueue.push(t),await this.processWebVTTCues(r,t.timestamp))}finally{r()}}async processWebVTTCues(e,t){for(;e.cueQueue.length>0;){const i=new Set([]);for(const l of e.cueQueue)$g(l.timestamp<=t),$g(e.lastCueEndTimestamp<=l.timestamp+l.duration),i.add(Math.max(l.timestamp,e.lastCueEndTimestamp)),i.add(l.timestamp+l.duration);const r=[...i].sort((e,t)=>e-t),s=r[0],o=r[1]??s;if(t<o)break;if(e.lastCueEndTimestamp<s){this.auxWriter.seek(0);const t=Lv();this.auxBoxWriter.writeBox(t);const i=this.auxWriter.getSlice(0,this.auxWriter.getPos()),r=this.createSampleForTrack(e,i,e.lastCueEndTimestamp,s-e.lastCueEndTimestamp,"key");await this.registerSample(e,r),e.lastCueEndTimestamp=s}this.auxWriter.seek(0);for(let t=0;t<e.cueQueue.length;t++){const i=e.cueQueue[t];if(i.timestamp>=o)break;uy.lastIndex=0;const r=uy.test(i.text),a=i.timestamp+i.duration;let n=e.cueToSourceId.get(i);if(void 0===n&&o<a&&(n=e.nextSourceId++,e.cueToSourceId.set(i,n)),i.notes){const e=Ov(i.notes);this.auxBoxWriter.writeBox(e)}const l=Dv(i.text,r?s:null,i.identifier??null,i.settings??null,n??null);this.auxBoxWriter.writeBox(l),a===o&&e.cueQueue.splice(t--,1)}const a=this.auxWriter.getSlice(0,this.auxWriter.getPos()),n=this.createSampleForTrack(e,a,s,o-s,"key");await this.registerSample(e,n),e.lastCueEndTimestamp=o}}createSampleForTrack(e,t,i,r,s){return{timestamp:i,decodeTimestamp:i,duration:r,data:t,size:t.byteLength,type:s,timescaleUnitsToNextSample:sb(r,e.timescale)}}processTimestamps(e,t){if(0===e.timestampProcessingQueue.length)return;if("audio"===e.type&&e.info.requiresPcmTransformation){let t=0;for(let i=0;i<e.timestampProcessingQueue.length;i++){const r=e.timestampProcessingQueue[i];t+=sb(r.duration,e.timescale)}if(0===e.timeToSampleTable.length)e.timeToSampleTable.push({sampleCount:t,sampleDelta:1});else{Rg(e.timeToSampleTable).sampleCount+=t}return void(e.timestampProcessingQueue.length=0)}const i=e.timestampProcessingQueue.map(e=>e.timestamp).sort((e,t)=>e-t);for(let r=0;r<e.timestampProcessingQueue.length;r++){const t=e.timestampProcessingQueue[r];t.decodeTimestamp=i[r],this.isFragmented||null!==e.lastTimescaleUnits||(t.decodeTimestamp=0);const s=sb(t.timestamp-t.decodeTimestamp,e.timescale),o=sb(t.duration,e.timescale);if(null!==e.lastTimescaleUnits){$g(e.lastSample);const i=sb(t.decodeTimestamp,e.timescale,!1),r=Math.round(i-e.lastTimescaleUnits);if($g(r>=0),e.lastTimescaleUnits+=r,e.lastSample.timescaleUnitsToNextSample=r,!this.isFragmented){let t=Rg(e.timeToSampleTable);if($g(t),1===t.sampleCount){t.sampleDelta=r;const i=e.timeToSampleTable[e.timeToSampleTable.length-2];i&&i.sampleDelta===r&&(i.sampleCount++,e.timeToSampleTable.pop(),t=i)}else t.sampleDelta!==r&&(t.sampleCount--,e.timeToSampleTable.push(t={sampleCount:1,sampleDelta:r}));t.sampleDelta===o?t.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:o});const i=Rg(e.compositionTimeOffsetTable);$g(i),i.sampleCompositionTimeOffset===s?i.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=sb(t.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:o}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=t}if(e.timestampProcessingQueue.length=0,$g(e.lastSample),$g(null!==e.lastTimescaleUnits),void 0!==t&&0===e.lastSample.timescaleUnitsToNextSample){$g("key"===t.type);const i=sb(t.timestamp,e.timescale,!1),r=Math.round(i-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=r}}async registerSample(e,t){"key"===t.type&&this.processTimestamps(e,t),e.timestampProcessingQueue.push(t),this.isFragmented?(e.sampleQueue.push(t),await this.interleaveSamples()):"reserve"===this.fastStart?await this.registerSampleFastStartReserve(e,t):await this.addSampleToTrack(e,t)}async addSampleToTrack(e,t){if(!this.isFragmented&&(e.samples.push(t),"reserve"===this.fastStart)){const t=e.track.metadata.maximumPacketCount;if($g(void 0!==t),e.samples.length>t)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${t}). Either add less packets or increase the maximum packet count.`)}let i=!1;if(e.currentChunk){e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,t.timestamp);const r=t.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){const s=this.trackDatas.every(i=>{if(e===i)return"key"===t.type;const r=i.sampleQueue[0];return r?"key"===r.type:i.track.source._closed});r>=this.minimumFragmentDuration&&s&&t.timestamp>this.maxWrittenTimestamp&&(i=!0,await this.finalizeFragment())}else i=r>=.5}else i=!0;i&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:t.timestamp,samples:[],offset:null,moofOffset:null}),$g(e.currentChunk),e.currentChunk.samples.push(t),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,t.timestamp))}async finalizeCurrentChunk(e){if($g(!this.isFragmented),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let t=e.currentChunk.samples.length;if("audio"===e.type&&e.info.requiresPcmTransformation&&(t=e.currentChunk.samples.reduce((t,i)=>t+sb(i.duration,e.timescale),0)),0!==e.compactlyCodedChunkTable.length&&Rg(e.compactlyCodedChunkTable).samplesPerChunk===t||e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:t}),"in-memory"!==this.fastStart){e.currentChunk.offset=this.writer.getPos();for(const t of e.currentChunk.samples)$g(t.data),this.writer.write(t.data),t.data=null;await this.writer.flush()}else e.currentChunk.offset=0}async interleaveSamples(e=!1){if($g(this.isFragmented),e||this.allTracksAreKnown())e:for(;;){let t=null,i=1/0;for(const s of this.trackDatas){if(!e&&0===s.sampleQueue.length&&!s.track.source._closed)break e;s.sampleQueue.length>0&&s.sampleQueue[0].timestamp<i&&(t=s,i=s.sampleQueue[0].timestamp)}if(!t)break;const r=t.sampleQueue.shift();await this.addSampleToTrack(t,r)}}async finalizeFragment(e=!0){$g(this.isFragmented);const t=this.nextFragmentNumber++;if(1===t){this.format._options.onMoov&&this.writer.startTrackingWrites();const e=Uy(this);if(this.boxWriter.writeBox(e),this.format._options.onMoov){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMoov(e,t)}}const i=this.trackDatas.filter(e=>e.currentChunk),r=kv(t,i),s=this.writer.getPos(),o=s+this.boxWriter.measureBox(r);let a=o+8,n=1/0;for(const p of i){p.currentChunk.offset=a,p.currentChunk.moofOffset=s;for(const e of p.currentChunk.samples)a+=e.size;n=Math.min(n,p.currentChunk.startTimestamp)}const l=a-o,h=l>=2**32;if(h)for(const p of i)p.currentChunk.offset+=8;this.format._options.onMoof&&this.writer.startTrackingWrites();const c=kv(t,i);if(this.boxWriter.writeBox(c),this.format._options.onMoof){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMoof(e,t,n)}$g(this.writer.getPos()===o),this.format._options.onMdat&&this.writer.startTrackingWrites();const d=Iy(h);d.size=l,this.boxWriter.writeBox(d),this.writer.seek(o+(h?16:8));for(const p of i)for(const e of p.currentChunk.samples)this.writer.write(e.data),e.data=null;if(this.format._options.onMdat){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMdat(e,t)}for(const p of i)p.finalizedChunks.push(p.currentChunk),this.finalizedChunks.push(p.currentChunk),p.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,t){if(this.allTracksAreKnown()){if(!this.mdat){const e=Uy(this),t=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;$g(null!==this.ftypSize),this.writer.seek(this.ftypSize+t),this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat=Iy(!0),this.boxWriter.writeBox(this.mdat);for(const i of this.trackDatas){for(const e of i.sampleQueue)await this.addSampleToTrack(i,e);i.sampleQueue.length=0}}await this.addSampleToTrack(e,t)}else e.sampleQueue.push(t)}computeSampleTableSizeUpperBound(){$g("reserve"===this.fastStart);let e=0;for(const t of this.trackDatas){const i=t.track.metadata.maximumPacketCount;$g(void 0!==i),e+=8*Math.ceil(2/3*i),e+=4*i,e+=8*Math.ceil(2/3*i),e+=12*Math.ceil(2/3*i),e+=4*i,e+=8*i}return e}async onTrackClose(e){const t=await this.mutex.acquire();if("subtitle"===e.type&&"webvtt"===e.source._codec){const t=this.trackDatas.find(t=>t.track===e);t&&await this.processWebVTTCues(t,1/0)}this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),t()}async finalize(){const e=await this.mutex.acquire();this.allTracksKnown.resolve();for(const i of this.trackDatas)"subtitle"===i.type&&"webvtt"===i.track.source._codec&&await this.processWebVTTCues(i,1/0);if(this.isFragmented){await this.interleaveSamples(!0);for(const e of this.trackDatas)this.processTimestamps(e);await this.finalizeFragment(!1)}else for(const i of this.trackDatas)this.processTimestamps(i),await this.finalizeCurrentChunk(i);if("in-memory"===this.fastStart){let e;this.mdat=Iy(!1);for(let i=0;i<2;i++){const t=Uy(this),i=this.boxWriter.measureBox(t);e=this.boxWriter.measureBox(this.mdat);let r=this.writer.getPos()+i+e;for(const s of this.finalizedChunks){s.offset=r;for(const{data:t}of s.samples)$g(t),r+=t.byteLength,e+=t.byteLength}if(r<2**32)break;e>=2**32&&(this.mdat.largeSize=!0)}this.format._options.onMoov&&this.writer.startTrackingWrites();const t=Uy(this);if(this.boxWriter.writeBox(t),this.format._options.onMoov){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMoov(e,t)}this.format._options.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=e,this.boxWriter.writeBox(this.mdat);for(const i of this.finalizedChunks)for(const e of i.samples)$g(e.data),this.writer.write(e.data),e.data=null;if(this.format._options.onMdat){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMdat(e,t)}}else if(this.isFragmented){const e=this.writer.getPos(),i=(t=this.trackDatas,Oy("mfra",void 0,[...t.map($v),Rv()]));this.boxWriter.writeBox(i);const r=this.writer.getPos()-e;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(r)}else{$g(this.mdat);const e=this.boxWriter.offsets.get(this.mdat);$g(void 0!==e);const t=this.writer.getPos()-e;if(this.mdat.size=t,this.mdat.largeSize=t>=2**32,this.boxWriter.patchBox(this.mdat),this.format._options.onMdat){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMdat(e,t)}const i=Uy(this);if("reserve"===this.fastStart){$g(null!==this.ftypSize),this.writer.seek(this.ftypSize),this.format._options.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(i);const e=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox({type:"free",size:e})}else this.format._options.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(i);if(this.format._options.onMoov){const{data:e,start:t}=this.writer.stopTrackingWrites();this.format._options.onMoov(e,t)}}var t;e()}}class ab{getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>rf.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>af.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>nf.includes(e))}_codecUnsupportedHint(e){return""}}class nb extends ab{constructor(e={}){if(!e||"object"!=typeof e)throw new TypeError("options must be an object.");if(void 0!==e.fastStart&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(void 0!==e.minimumFragmentDuration&&(!Number.isFinite(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(void 0!==e.onFtyp&&"function"!=typeof e.onFtyp)throw new TypeError("options.onFtyp, when provided, must be a function.");if(void 0!==e.onMoov&&"function"!=typeof e.onMoov)throw new TypeError("options.onMoov, when provided, must be a function.");if(void 0!==e.onMdat&&"function"!=typeof e.onMdat)throw new TypeError("options.onMdat, when provided, must be a function.");if(void 0!==e.onMoof&&"function"!=typeof e.onMoof)throw new TypeError("options.onMoof, when provided, must be a function.");if(void 0!==e.metadataFormat&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){const e=2**32-1;return{video:{min:0,max:e},audio:{min:0,max:e},subtitle:{min:0,max:e},total:{min:1,max:e}}}get supportsVideoRotationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}_createMuxer(e){return new ob(e,this)}}class lb extends nb{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...rf,...of,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...nf]}_codecUnsupportedHint(e){return(new hb).getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}}class hb extends nb{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...rf,...af]}_codecUnsupportedHint(e){return(new lb).getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}}const cb=(e,t)=>{if(!t||"object"!=typeof t)throw new TypeError("Encoding options must be an object.");if(void 0!==t.alpha&&!["discard","keep"].includes(t.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");if(void 0!==t.bitrateMode&&!["constant","variable"].includes(t.bitrateMode))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(void 0!==t.latencyMode&&!["quality","realtime"].includes(t.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(void 0!==t.fullCodecString&&"string"!=typeof t.fullCodecString)throw new TypeError("fullCodecString, when provided, must be a string.");if(void 0!==t.fullCodecString&&((i=t.fullCodecString).startsWith("avc1")||i.startsWith("avc3")?"avc":i.startsWith("hev1")||i.startsWith("hvc1")?"hevc":"vp8"===i?"vp8":i.startsWith("vp09")?"vp9":i.startsWith("av01")?"av1":i.startsWith("mp4a.40")||"mp4a.67"===i?"aac":"mp3"===i||"mp4a.69"===i||"mp4a.6B"===i||"mp4a.6b"===i?"mp3":"opus"===i?"opus":"vorbis"===i?"vorbis":"flac"===i?"flac":"ac-3"===i||"ac3"===i?"ac3":"ec-3"===i||"eac3"===i?"eac3":"ulaw"===i?"ulaw":"alaw"===i?"alaw":gf.test(i)?i:"webvtt"===i?"webvtt":null)!==e)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${e}).`);var i;if(void 0!==t.hardwareAcceleration&&!["no-preference","prefer-hardware","prefer-software"].includes(t.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(void 0!==t.scalabilityMode&&"string"!=typeof t.scalabilityMode)throw new TypeError("scalabilityMode, when provided, must be a string.");if(void 0!==t.contentHint&&"string"!=typeof t.contentHint)throw new TypeError("contentHint, when provided, must be a string.")};class db{constructor(e){this._factor=e}_toVideoBitrate(e,t,i){const r=t*i,s=3e6*Math.pow(r/2073600,.95)*{avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2}[e]*this._factor;return 1e3*Math.ceil(s/1e3)}_toAudioBitrate(e){if(sf.includes(e)||"flac"===e)return;const t={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3}[e];if(!t)throw new Error(`Unhandled codec: ${e}`);let i=t*this._factor;if("aac"===e){i=[96e3,128e3,16e4,192e3].reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e)}else if("opus"===e||"vorbis"===e)i=Math.max(6e3,i);else if("mp3"===e){i=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e)}return 1e3*Math.round(i/1e3)}}const pb=new db(.3),ub=new db(.6),mb=new db(1),gb=new db(2),fb=new db(4);class yb{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._timestampOffset=0}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if("canceled"===this._connectedTrack.output.state)throw new Error("Output has been canceled.");if("finalizing"===this._connectedTrack.output.state||"finalized"===this._connectedTrack.output.state)throw new Error("Output has been finalized.");if("pending"===this._connectedTrack.output.state)throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;const e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if("pending"===e.output.state)throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,"finalizing"!==e.output.state&&"finalized"!==e.output.state&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}}class vb extends yb{constructor(e){if(super(),this._connectedTrack=null,!rf.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${rf.join(", ")}.`);this._codec=e}}class bb{constructor(e,t){this.source=e,this.encodingConfig=t,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.codedWidth=null,this.codedHeight=null,this.resizeCanvas=null,this.customEncoder=null,this.customEncoderCallSerializer=new Yg,this.customEncoderQueueSize=0,this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null}async add(e,t,i){try{if(this.checkForEncoderError(),this.source._ensureValidAdd(),null!==this.codedWidth&&null!==this.codedHeight){if(e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight){const i=this.encodingConfig.sizeChangeBehavior??"deny";if("passThrough"===i);else{if("deny"===i)throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'strict' in the encoding options.`);{let r=!1;this.resizeCanvas||("undefined"!=typeof document?(this.resizeCanvas=document.createElement("canvas"),this.resizeCanvas.width=this.codedWidth,this.resizeCanvas.height=this.codedHeight):this.resizeCanvas=new OffscreenCanvas(this.codedWidth,this.codedHeight),r=!0);const s=this.resizeCanvas.getContext("2d",{alpha:Xg()});$g(s),r||(Xg()?(s.fillStyle="black",s.fillRect(0,0,this.codedWidth,this.codedHeight)):s.clearRect(0,0,this.codedWidth,this.codedHeight)),e.drawWithFit(s,{fit:i}),t&&e.close(),e=new ty(this.resizeCanvas,{timestamp:e.timestamp,duration:e.duration,rotation:e.rotation}),t=!0}}}}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(e),this.encoderInitialized||await this.ensureEncoderPromise),$g(this.encoderInitialized);const s=this.encodingConfig.keyFrameInterval??5,o=Math.floor(e.timestamp/s),a={...i,keyFrame:i?.keyFrame||0===s||o!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=o,this.customEncoder){this.customEncoderQueueSize++;const t=e.clone(),i=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(t,a)).then(()=>this.customEncoderQueueSize--).catch(e=>this.error??=e).finally(()=>{t.close()});this.customEncoderQueueSize>=4&&await i}else{$g(this.encoder);const i=e.toVideoFrame();if(this.alphaEncoder){if(!!i.format&&!i.format.includes("A")||this.splitterCreationFailed)this.alphaFrameQueue.push(null),this.encoder.encode(i,a),i.close();else{const e=i.displayWidth,t=i.displayHeight;if(!this.splitter)try{this.splitter=new wb(e,t)}catch(r){console.error("Due to an error, only color data will be encoded.",r),this.splitterCreationFailed=!0,this.alphaFrameQueue.push(null),this.encoder.encode(i,a),i.close()}if(this.splitter){const e=this.splitter.extractColor(i),t=this.splitter.extractAlpha(i);this.alphaFrameQueue.push(t),this.encoder.encode(e,a),e.close(),i.close()}}}else this.encoder.encode(i,a),i.close();t&&e.close(),this.encoder.encodeQueueSize>=4&&await new Promise(e=>this.encoder.addEventListener("dequeue",e,{once:!0}))}await this.muxer.mutex.currentPromise}finally{t&&e.close()}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{const t=(e=>{const t=e.bitrate instanceof db?e.bitrate._toVideoBitrate(e.codec,e.width,e.height):e.bitrate;return{codec:e.fullCodecString??pf(e.codec,e.width,e.height,t),width:e.width,height:e.height,displayWidth:e.squarePixelWidth,displayHeight:e.squarePixelHeight,bitrate:t,bitrateMode:e.bitrateMode,alpha:e.alpha??"discard",framerate:e.framerate,latencyMode:e.latencyMode,hardwareAcceleration:e.hardwareAcceleration,scalabilityMode:e.scalabilityMode,contentHint:e.contentHint,...(i=e.codec,"avc"===i?{avc:{format:"avc"}}:"hevc"===i?{hevc:{format:"hevc"}}:{})};var i})({width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,...this.encodingConfig,framerate:this.source._connectedTrack?.metadata.frameRate});this.encodingConfig.onEncoderConfig?.(t);const i=qf.find(e=>e.supports(this.encodingConfig.codec,t));if(i)this.customEncoder=new i,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=t,this.customEncoder.onPacket=(e,t)=>{if(!(e instanceof Zf))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(void 0!==t&&(!t||"object"!=typeof t))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");this.encodingConfig.onEncodedPacket?.(e,t),this.muxer.addEncodedVideoPacket(this.source._connectedTrack,e,t).catch(e=>{this.error??=e})},await this.customEncoder.init();else{if("undefined"==typeof VideoEncoder)throw new Error("VideoEncoder is not supported by this browser.");t.alpha="discard","keep"===this.encodingConfig.alpha&&(t.latencyMode="quality");if((t.width%2==1||t.height%2==1)&&("avc"===this.encodingConfig.codec||"hevc"===this.encodingConfig.codec))throw new Error(`The dimensions ${t.width}x${t.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);if(!(await VideoEncoder.isConfigSupported(t)).supported)throw new Error(`This specific encoder configuration (${t.codec}, ${t.bitrate} bps, ${t.width}x${t.height}, hardware acceleration: ${t.hardwareAcceleration??"no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`);const e=[],i=[];let r=0,s=0;const o=(e,t,i)=>{const r={};if(t){const e=new Uint8Array(t.byteLength);t.copyTo(e),r.alpha=e}const s=Zf.fromEncodedChunk(e,r);this.encodingConfig.onEncodedPacket?.(s,i),this.muxer.addEncodedVideoPacket(this.source._connectedTrack,s,i).catch(e=>{this.error??=e})},a=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(t,a)=>{if(!this.alphaEncoder)return void o(t,null,a);const n=this.alphaFrameQueue.shift();$g(void 0!==n),n?(this.alphaEncoder.encode(n,{keyFrame:"key"===t.type}),s++,n.close(),e.push({chunk:t,meta:a})):0===s?o(t,null,a):(i.push(r+s),e.push({chunk:t,meta:a}))},error:e=>{e.stack=a,this.error??=e}}),this.encoder.configure(t),"keep"===this.encodingConfig.alpha){const a=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(t,a)=>{s--;const n=e.shift();for($g(void 0!==n),o(n.chunk,t,n.meta),r++;i.length>0&&i[0]===r;){i.shift();const t=e.shift();$g(void 0!==t),o(t.chunk,null,t.meta)}},error:e=>{e.stack=a,this.error??=e}}),this.alphaEncoder.configure(t)}}$g(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){e||this.checkForEncoderError(),this.customEncoder?(e||this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()),await this.customEncoderCallSerializer.call(()=>this.customEncoder.close())):this.encoder&&(e||(await this.encoder.flush(),await(this.alphaEncoder?.flush())),"closed"!==this.encoder.state&&this.encoder.close(),this.alphaEncoder&&"closed"!==this.alphaEncoder.state&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(e=>e?.close()),this.splitter?.close()),e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.error)throw this.error}}class wb{constructor(e,t){this.lastFrame=null,"undefined"!=typeof OffscreenCanvas?this.canvas=new OffscreenCanvas(e,t):(this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=t);const i=this.canvas.getContext("webgl2",{alpha:!0});if(!i)throw new Error("Couldn't acquire WebGL 2 context.");this.gl=i,this.colorProgram=this.createColorProgram(),this.alphaProgram=this.createAlphaProgram(),this.vao=this.createVAO(),this.sourceTexture=this.createTexture(),this.alphaResolutionLocation=this.gl.getUniformLocation(this.alphaProgram,"u_resolution"),this.gl.useProgram(this.colorProgram),this.gl.uniform1i(this.gl.getUniformLocation(this.colorProgram,"u_sourceTexture"),0),this.gl.useProgram(this.alphaProgram),this.gl.uniform1i(this.gl.getUniformLocation(this.alphaProgram,"u_sourceTexture"),0)}createVertexShader(){return this.createShader(this.gl.VERTEX_SHADER,"#version 300 es\n\t\t\tin vec2 a_position;\n\t\t\tin vec2 a_texCoord;\n\t\t\tout vec2 v_texCoord;\n\t\t\t\n\t\t\tvoid main() {\n\t\t\t\tgl_Position = vec4(a_position, 0.0, 1.0);\n\t\t\t\tv_texCoord = a_texCoord;\n\t\t\t}\n\t\t")}createColorProgram(){const e=this.createVertexShader(),t=this.createShader(this.gl.FRAGMENT_SHADER,"#version 300 es\n\t\t\tprecision highp float;\n\t\t\t\n\t\t\tuniform sampler2D u_sourceTexture;\n\t\t\tin vec2 v_texCoord;\n\t\t\tout vec4 fragColor;\n\t\t\t\n\t\t\tvoid main() {\n\t\t\t\tvec4 source = texture(u_sourceTexture, v_texCoord);\n\t\t\t\tfragColor = vec4(source.rgb, 1.0);\n\t\t\t}\n\t\t"),i=this.gl.createProgram();return this.gl.attachShader(i,e),this.gl.attachShader(i,t),this.gl.linkProgram(i),i}createAlphaProgram(){const e=this.createVertexShader(),t=this.createShader(this.gl.FRAGMENT_SHADER,"#version 300 es\n\t\t\tprecision highp float;\n\t\t\t\n\t\t\tuniform sampler2D u_sourceTexture;\n\t\t\tuniform vec2 u_resolution; // The width and height of the canvas\n\t\t\tin vec2 v_texCoord;\n\t\t\tout vec4 fragColor;\n\n\t\t\t// This function determines the value for a single byte in the YUV stream\n\t\t\tfloat getByteValue(float byteOffset) {\n\t\t\t\tfloat width = u_resolution.x;\n\t\t\t\tfloat height = u_resolution.y;\n\n\t\t\t\tfloat yPlaneSize = width * height;\n\n\t\t\t\tif (byteOffset < yPlaneSize) {\n\t\t\t\t\t// This byte is in the luma plane. Find the corresponding pixel coordinates to sample from\n\t\t\t\t\tfloat y = floor(byteOffset / width);\n\t\t\t\t\tfloat x = mod(byteOffset, width);\n\t\t\t\t\t\n\t\t\t\t\t// Add 0.5 to sample the center of the texel\n\t\t\t\t\tvec2 sampleCoord = (vec2(x, y) + 0.5) / u_resolution;\n\t\t\t\t\t\n\t\t\t\t\t// The luma value is the alpha from the source texture\n\t\t\t\t\treturn texture(u_sourceTexture, sampleCoord).a;\n\t\t\t\t} else {\n\t\t\t\t\t// Write a fixed value for chroma and beyond\n\t\t\t\t\treturn 128.0 / 255.0;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tvoid main() {\n\t\t\t\t// Each fragment writes 4 bytes (R, G, B, A)\n\t\t\t\tfloat pixelIndex = floor(gl_FragCoord.y) * u_resolution.x + floor(gl_FragCoord.x);\n\t\t\t\tfloat baseByteOffset = pixelIndex * 4.0;\n\n\t\t\t\tvec4 result;\n\t\t\t\tfor (int i = 0; i < 4; i++) {\n\t\t\t\t\tfloat currentByteOffset = baseByteOffset + float(i);\n\t\t\t\t\tresult[i] = getByteValue(currentByteOffset);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tfragColor = result;\n\t\t\t}\n\t\t"),i=this.gl.createProgram();return this.gl.attachShader(i,e),this.gl.attachShader(i,t),this.gl.linkProgram(i),i}createShader(e,t){const i=this.gl.createShader(e);return this.gl.shaderSource(i,t),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)||console.error("Shader compile error:",this.gl.getShaderInfoLog(i)),i}createVAO(){const e=this.gl.createVertexArray();this.gl.bindVertexArray(e);const t=new Float32Array([-1,-1,0,1,1,-1,1,1,-1,1,0,0,1,1,1,0]),i=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW);const r=this.gl.getAttribLocation(this.colorProgram,"a_position"),s=this.gl.getAttribLocation(this.colorProgram,"a_texCoord");return this.gl.enableVertexAttribArray(r),this.gl.vertexAttribPointer(r,2,this.gl.FLOAT,!1,16,0),this.gl.enableVertexAttribArray(s),this.gl.vertexAttribPointer(s,2,this.gl.FLOAT,!1,16,8),e}createTexture(){const e=this.gl.createTexture();return this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),e}updateTexture(e){this.lastFrame!==e&&(e.displayWidth===this.canvas.width&&e.displayHeight===this.canvas.height||(this.canvas.width=e.displayWidth,this.canvas.height=e.displayHeight),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.sourceTexture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.lastFrame=e)}extractColor(e){return this.updateTexture(e),this.gl.useProgram(this.colorProgram),this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.bindVertexArray(this.vao),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),new VideoFrame(this.canvas,{timestamp:e.timestamp,duration:e.duration??void 0,alpha:"discard"})}extractAlpha(e){this.updateTexture(e),this.gl.useProgram(this.alphaProgram),this.gl.uniform2f(this.alphaResolutionLocation,this.canvas.width,this.canvas.height),this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.bindVertexArray(this.vao),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4);const{width:t,height:i}=this.canvas,r=t*i+2*(Math.ceil(t/2)*Math.ceil(i/2)),s=Math.ceil(r/(4*t));let o=new Uint8Array(4*t*s);this.gl.readPixels(0,0,t,s,this.gl.RGBA,this.gl.UNSIGNED_BYTE,o),o=o.subarray(0,r),$g(128===o[t*i]),$g(128===o[o.length-1]);const a={format:"I420",codedWidth:t,codedHeight:i,timestamp:e.timestamp,duration:e.duration??void 0,transfer:[o.buffer]};return new VideoFrame(o,a)}close(){this.gl.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}}class xb extends vb{constructor(e){(e=>{if(!e||"object"!=typeof e)throw new TypeError("Encoding config must be an object.");if(!rf.includes(e.codec))throw new TypeError(`Invalid video codec '${e.codec}'. Must be one of: ${rf.join(", ")}.`);if(!(e.bitrate instanceof db)&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("config.bitrate must be a positive integer or a quality.");if(void 0!==e.keyFrameInterval&&(!Number.isFinite(e.keyFrameInterval)||e.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(void 0!==e.sizeChangeBehavior&&!["deny","passThrough","fill","contain","cover"].includes(e.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(void 0!==e.onEncodedPacket&&"function"!=typeof e.onEncodedPacket)throw new TypeError("config.onEncodedChunk, when provided, must be a function.");if(void 0!==e.onEncoderConfig&&"function"!=typeof e.onEncoderConfig)throw new TypeError("config.onEncoderConfig, when provided, must be a function.");cb(e.codec,e)})(e),super(e.codec),this._encoder=new bb(this,e)}add(e,t){if(!(e instanceof ty))throw new TypeError("videoSample must be a VideoSample.");return this._encoder.add(e,!1,t)}_flushAndClose(e){return this._encoder.flushAndClose(e)}}class Sb extends yb{constructor(e){if(super(),this._connectedTrack=null,!af.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${af.join(", ")}.`);this._codec=e}}class kb extends yb{constructor(e){if(super(),this._connectedTrack=null,!nf.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${nf.join(", ")}.`);this._codec=e}}const Cb=["video","audio","subtitle"],Eb=e=>{if(!e||"object"!=typeof e)throw new TypeError("metadata must be an object.");if(void 0!==e.languageCode&&!(e=>Gg.test(e))(e.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(void 0!==e.name&&"string"!=typeof e.name)throw new TypeError("metadata.name, when provided, must be a string.");if(void 0!==e.disposition&&(e=>{if(!e||"object"!=typeof e)throw new TypeError("disposition must be an object.");if(void 0!==e.default&&"boolean"!=typeof e.default)throw new TypeError("disposition.default must be a boolean.");if(void 0!==e.forced&&"boolean"!=typeof e.forced)throw new TypeError("disposition.forced must be a boolean.");if(void 0!==e.original&&"boolean"!=typeof e.original)throw new TypeError("disposition.original must be a boolean.");if(void 0!==e.commentary&&"boolean"!=typeof e.commentary)throw new TypeError("disposition.commentary must be a boolean.");if(void 0!==e.hearingImpaired&&"boolean"!=typeof e.hearingImpaired)throw new TypeError("disposition.hearingImpaired must be a boolean.");if(void 0!==e.visuallyImpaired&&"boolean"!=typeof e.visuallyImpaired)throw new TypeError("disposition.visuallyImpaired must be a boolean.")})(e.disposition),void 0!==e.maximumPacketCount&&(!Number.isInteger(e.maximumPacketCount)||e.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.")};class Tb{constructor(e){if(this.state="pending",this._tracks=[],this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Vg,this._metadataTags={},!e||"object"!=typeof e)throw new TypeError("options must be an object.");if(!(e.format instanceof ab))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof eb))throw new TypeError("options.target must be a Target.");if(e.target._output)throw new Error("Target is already used for another output.");e.target._output=this,this.format=e.format,this.target=e.target,this._writer=e.target._createWriter(),this._muxer=e.format._createMuxer(this)}addVideoTrack(e,t={}){if(!(e instanceof vb))throw new TypeError("source must be a VideoSource.");if(Eb(t),void 0!==t.rotation&&![0,90,180,270].includes(t.rotation))throw new TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);if(!this.format.supportsVideoRotationMetadata&&t.rotation)throw new Error(`${this.format._name} does not support video rotation metadata.`);if(void 0!==t.frameRate&&(!Number.isFinite(t.frameRate)||t.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);this._addTrack("video",e,t)}addAudioTrack(e,t={}){if(!(e instanceof Sb))throw new TypeError("source must be an AudioSource.");Eb(t),this._addTrack("audio",e,t)}addSubtitleTrack(e,t={}){if(!(e instanceof kb))throw new TypeError("source must be a SubtitleSource.");Eb(t),this._addTrack("subtitle",e,t)}setMetadataTags(e){if((e=>{if(!e||"object"!=typeof e)throw new TypeError("tags must be an object.");if(void 0!==e.title&&"string"!=typeof e.title)throw new TypeError("tags.title, when provided, must be a string.");if(void 0!==e.description&&"string"!=typeof e.description)throw new TypeError("tags.description, when provided, must be a string.");if(void 0!==e.artist&&"string"!=typeof e.artist)throw new TypeError("tags.artist, when provided, must be a string.");if(void 0!==e.album&&"string"!=typeof e.album)throw new TypeError("tags.album, when provided, must be a string.");if(void 0!==e.albumArtist&&"string"!=typeof e.albumArtist)throw new TypeError("tags.albumArtist, when provided, must be a string.");if(void 0!==e.trackNumber&&(!Number.isInteger(e.trackNumber)||e.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(void 0!==e.tracksTotal&&(!Number.isInteger(e.tracksTotal)||e.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(void 0!==e.discNumber&&(!Number.isInteger(e.discNumber)||e.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(void 0!==e.discsTotal&&(!Number.isInteger(e.discsTotal)||e.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(void 0!==e.genre&&"string"!=typeof e.genre)throw new TypeError("tags.genre, when provided, must be a string.");if(void 0!==e.date&&(!(e.date instanceof Date)||Number.isNaN(e.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(void 0!==e.lyrics&&"string"!=typeof e.lyrics)throw new TypeError("tags.lyrics, when provided, must be a string.");if(void 0!==e.images){if(!Array.isArray(e.images))throw new TypeError("tags.images, when provided, must be an array.");for(const t of e.images){if(!t||"object"!=typeof t)throw new TypeError("Each image in tags.images must be an object.");if(!(t.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if("string"!=typeof t.mimeType)throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(t.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(void 0!==e.comment&&"string"!=typeof e.comment)throw new TypeError("tags.comment, when provided, must be a string.");if(void 0!==e.raw){if(!e.raw||"object"!=typeof e.raw)throw new TypeError("tags.raw, when provided, must be an object.");for(const t of Object.values(e.raw))if(!(null===t||"string"==typeof t||t instanceof Uint8Array||t instanceof ef||t instanceof tf))throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, or null.")}})(e),"pending"!==this.state)throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e,t,i){if("pending"!==this.state)throw new Error("Cannot add track after output has been started or canceled.");if(t._connectedTrack)throw new Error("Source is already used for a track.");const r=this.format.getSupportedTrackCounts(),s=this._tracks.reduce((t,i)=>t+(i.type===e?1:0),0),o=r[e].max;if(s===o)throw new Error(0===o?`${this.format._name} does not support ${e} tracks.`:`${this.format._name} does not support more than ${o} ${e} track${1===o?"":"s"}.`);const a=r.total.max;if(this._tracks.length===a)throw new Error(`${this.format._name} does not support more than ${a} tracks${1===a?"":"s"} in total.`);const n={id:this._tracks.length+1,output:this,type:e,source:t,metadata:i};if("video"===n.type){const e=this.format.getSupportedVideoCodecs();if(0===e.length)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(n.source._codec));if(!e.includes(n.source._codec))throw new Error(`Codec '${n.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${e.map(e=>`'${e}'`).join(", ")}.`+this.format._codecUnsupportedHint(n.source._codec))}else if("audio"===n.type){const e=this.format.getSupportedAudioCodecs();if(0===e.length)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(n.source._codec));if(!e.includes(n.source._codec))throw new Error(`Codec '${n.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${e.map(e=>`'${e}'`).join(", ")}.`+this.format._codecUnsupportedHint(n.source._codec))}else if("subtitle"===n.type){const e=this.format.getSupportedSubtitleCodecs();if(0===e.length)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(n.source._codec));if(!e.includes(n.source._codec))throw new Error(`Codec '${n.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${e.map(e=>`'${e}'`).join(", ")}.`+this.format._codecUnsupportedHint(n.source._codec))}this._tracks.push(n),t._connectedTrack=n}async start(){const e=this.format.getSupportedTrackCounts();for(const i of Cb){const t=this._tracks.reduce((e,t)=>e+(t.type===i?1:0),0),r=e[i].min;if(t<r)throw new Error(r===e[i].max?`${this.format._name} requires exactly ${r} ${i} track${1===r?"":"s"}.`:`${this.format._name} requires at least ${r} ${i} track${1===r?"":"s"}.`)}const t=e.total.min;if(this._tracks.length<t)throw new Error(t===e.total.max?`${this.format._name} requires exactly ${t} track${1===t?"":"s"}.`:`${this.format._name} requires at least ${t} track${1===t?"":"s"}.`);if("canceled"===this.state)throw new Error("Output has been canceled.");return this._startPromise?(console.warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started",this._writer.start();const e=await this._mutex.acquire();await this._muxer.start();const t=this._tracks.map(e=>e.source._start());await Promise.all(t),e()})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){return this._cancelPromise?(console.warn("Output has already been canceled."),this._cancelPromise):"finalizing"!==this.state&&"finalized"!==this.state?this._cancelPromise=(async()=>{this.state="canceled";const e=await this._mutex.acquire(),t=this._tracks.map(e=>e.source._flushOrWaitForOngoingClose(!0));await Promise.all(t),await this._writer.close(),e()})():void console.warn("Output has already been finalized.")}async finalize(){if("pending"===this.state)throw new Error("Cannot finalize before starting.");if("canceled"===this.state)throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(console.warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";const e=await this._mutex.acquire(),t=this._tracks.map(e=>e.source._flushOrWaitForOngoingClose(!1));await Promise.all(t),await this._muxer.finalize(),await this._writer.flush(),await this._writer.finalize(),this.state="finalized",e()})()}}var _b=(e=>(e.LIGHT="light",e.DARK="dark",e.SOLARIZED="solarized",e))(_b||{}),Ab=(e=>(e[e.IDLE=0]="IDLE",e[e.RECORDING=1]="RECORDING",e[e.ENCODING=2]="ENCODING",e[e.CLEANUP=3]="CLEANUP",e))(Ab||{});const Pb="data-video-dynamic",$b="data-video-svg",Rb="data-video-style",Lb="data-video-rerender";class Db{constructor(e){this.app=e,this.exportWidth=0,this.exportHeight=0,this.canvasToImageMap=new Map,this.dynamicElementMap=new Map,this.dynamicSvgMap=new Map,this.rerenderMap=new Map,this.dynamicStyleMap=new Map,this.file=e.innerFile,this.exportedElement=e.exportedElement}getMuxingCanvas(){if(this.muxingCanvas)return this.muxingCanvas;const e=this.exportedElement.getBoundingClientRect(),t=new OffscreenCanvas(e.width,e.height);return this.muxingCanvas=t,this.muxingCanvas}getMuxingContext(){return this.muxingContext||(void 0===this.muxingCanvas&&this.getMuxingCanvas(),this.muxingContext=this.muxingCanvas.getContext("2d",{alpha:!1}),this.muxingContext.imageSmoothingEnabled=!1),this.muxingContext}async prepareExport(){const e=this.exportedElement;this.exportWidth=e.clientWidth,this.exportHeight=e.clientHeight,console.log("[VideoRecorder] Preparing export...",this.exportWidth,"x",this.exportHeight);const t=e.cloneNode(!0);console.log("[VideoRecorder] Inlining styles..."),this.inlineStylesRecursive(e,t),console.log("[VideoRecorder] Flattening custom elements..."),this.flattenCustomElements(e,t),console.log("[VideoRecorder] Removing ignored elements..."),this.removeIgnoredElements(t),console.log("[VideoRecorder] Embedding images..."),await this.embedImages(t),console.log("[VideoRecorder] Cleaning up clone..."),this.removeLitComments(t),this.ensureXmlnsAttributes(t),console.log("[VideoRecorder] Mapping canvases..."),this.createCanvasMap(e,t),console.log("[VideoRecorder] Mapping dynamic elements..."),this.createDynamicElementMap(e,t),console.log("[VideoRecorder] Mapping dynamic SVGs..."),this.createDynamicSvgMap(e,t),console.log("[VideoRecorder] Mapping dynamic style elements..."),this.createDynamicStyleMap(e,t),console.log("[VideoRecorder] Mapping rerender elements..."),this.createRerenderMap(e,t),console.log("[VideoRecorder] Creating SVG wrapper...");const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("width",String(this.exportWidth)),i.setAttribute("height",String(this.exportHeight));const r=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("x","0"),r.setAttribute("y","0"),t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),r.appendChild(t),i.appendChild(r),this.preparedSvgWrapper=i,this.preparedClone=t,console.log("[VideoRecorder] Export prepared. Canvas count:",this.canvasToImageMap.size,"Dynamic elements:",this.dynamicElementMap.size,"Rerender elements:",this.rerenderMap.size)}removeIgnoredElements(e){const t=e.querySelectorAll("[data-video-ignore]");console.log("[VideoRecorder] Removing ignored elements:",t.length);for(const i of t)i.parentNode?.removeChild(i)}inlineStylesRecursive(e,t){if(!(e instanceof HTMLElement&&t instanceof HTMLElement))return;const i=getComputedStyle(e),r=["display","position","top","left","right","bottom","width","height","min-width","min-height","max-width","max-height","margin","margin-top","margin-right","margin-bottom","margin-left","padding","padding-top","padding-right","padding-bottom","padding-left","box-sizing","overflow","overflow-x","overflow-y","flex","flex-direction","flex-wrap","justify-content","align-items","align-content","flex-grow","flex-shrink","flex-basis","order","gap","grid","grid-template-columns","grid-template-rows","grid-gap","grid-column","grid-row","background","background-color","background-image","background-size","background-position","border","border-width","border-style","border-color","border-radius","border-top","border-right","border-bottom","border-left","color","font","font-family","font-size","font-weight","font-style","line-height","text-align","text-decoration","text-transform","white-space","letter-spacing","word-spacing","opacity","visibility","z-index","transform","box-shadow","text-shadow","table-layout","border-collapse","border-spacing"];for(const a of r){const e=i.getPropertyValue(a);e&&"none"!==e&&"normal"!==e&&"auto"!==e&&t.style.setProperty(a,e)}const s=Array.from(e.children),o=Array.from(t.children);for(let a=0;a<s.length&&a<o.length;a++)this.inlineStylesRecursive(s[a],o[a])}flattenCustomElements(e,t){const i=this.querySelectorAllDeep(e,"canvas");i.forEach((e,t)=>{e.setAttribute("data-canvas-index",String(t))}),console.log("[VideoRecorder] Marked canvases with index (including shadow DOM):",i.length);const r=Array.from(e.querySelectorAll("*")),s=Array.from(t.querySelectorAll("*"));for(let o=r.length-1;o>=0;o--){const e=r[o],t=s[o];if(!t)continue;if(e.tagName.includes("-")&&e instanceof HTMLElement){const i=document.createElement("div");i.setAttribute("data-flattened-from",e.tagName.toLowerCase());const r=getComputedStyle(e);if(i.style.display=r.display,i.style.width=r.width,i.style.height=r.height,i.style.position=r.position,i.style.margin=r.margin,i.style.padding=r.padding,i.style.boxSizing=r.boxSizing,i.style.background=r.background,i.style.backgroundColor=r.backgroundColor,e.shadowRoot){for(const t of e.shadowRoot.children)if("STYLE"!==t.tagName){const e=t.cloneNode(!0);this.inlineStylesRecursive(t,e),i.appendChild(e)}}else for(const t of e.children){const e=t.cloneNode(!0);this.inlineStylesRecursive(t,e),i.appendChild(e)}const s=i.querySelectorAll("*");for(const t of s)if(t.tagName.includes("-")){const i=e.shadowRoot?.querySelector(t.tagName.toLowerCase())||e.querySelector(t.tagName.toLowerCase());i&&this.flattenSingleElement(i,t)}t.parentNode?.replaceChild(i,t),console.log(`[VideoRecorder] Flattened: <${e.tagName.toLowerCase()}>`)}}}flattenSingleElement(e,t){const i=document.createElement("div");i.setAttribute("data-flattened-from",e.tagName.toLowerCase());const r=getComputedStyle(e);if(i.style.display=r.display,i.style.width=r.width,i.style.height=r.height,e.shadowRoot)for(const s of e.shadowRoot.children)if("STYLE"!==s.tagName){const e=s.cloneNode(!0);this.inlineStylesRecursive(s,e),i.appendChild(e)}t.parentNode?.replaceChild(i,t)}async embedImages(e){const t=e.querySelectorAll("img"),i=[];for(const s of t)s.src&&!s.src.startsWith("data:")&&i.push(this.fetchAsDataUri(s.src).then(e=>{s.src=e}).catch(e=>console.warn("[VideoRecorder] Failed to embed image:",s.src,e)));const r=e.querySelectorAll("*");for(const s of r){const e=s.style.background||"",t=s.style.backgroundImage||"",r=[e,t].filter(Boolean).join(" ");if(!r.includes("url("))continue;const o=Array.from(r.matchAll(/url\((['"]?)(.*?)\1\)/g)).map(e=>e[2]).filter(e=>e&&!e.startsWith("data:"));0!==o.length&&i.push((async()=>{let i=e,r=t;for(const e of o){const t=await this.fetchAsDataUri(e);i=i.replaceAll(e,t),r=r.replaceAll(e,t)}e&&(s.style.background=i),t&&(s.style.backgroundImage=r)})().catch(e=>console.warn("[VideoRecorder] Failed to embed background:",e)))}await Promise.all(i)}async fetchAsDataUri(e){const t=await fetch(e),i=await t.blob();return new Promise((e,t)=>{const r=new FileReader;r.onloadend=()=>e(r.result),r.onerror=t,r.readAsDataURL(i)})}createCanvasMap(e,t){this.canvasToImageMap.clear();const i=this.querySelectorAllDeep(e,"canvas"),r=t.querySelectorAll("canvas");console.log("[VideoRecorder] Found canvases in original:",i.length),console.log("[VideoRecorder] Found canvases in clone:",r.length);for(const o of i){const e=o.getAttribute("data-canvas-index");if(null===e)continue;const i=t.querySelector(`canvas[data-canvas-index="${e}"]`);if(!i){console.warn(`[VideoRecorder] Canvas with index ${e} not found in clone`);continue}const r=o,a=document.createElement("img");a.width=r.width,a.height=r.height,a.style.width=i.style.width||`${r.width}px`,a.style.height=i.style.height||`${r.height}px`,a.style.display="block",a.style.imageRendering="pixelated",a.setAttribute("data-canvas-index",e);try{const t=this.getCanvasDataUrl(r);t?(a.src=t,console.log(`[VideoRecorder] Canvas ${e} converted to data URL (${t.length} chars)`)):console.warn(`[VideoRecorder][taint] Canvas ${e} returned null dataURL - possibly tainted!`,r)}catch(s){console.warn(`[VideoRecorder][taint] Canvas ${e} TAINTED - cannot get dataURL:`,s,r)}i.parentNode?.replaceChild(a,i),this.canvasToImageMap.set(r,a),console.log(`[VideoRecorder] Mapped canvas ${e}: ${r.width}x${r.height}`)}console.log("[VideoRecorder] Total canvas mappings:",this.canvasToImageMap.size)}createDynamicElementMap(e,t){this.dynamicElementMap.clear();const i=this.querySelectorAllDeep(e,`[${Pb}]`),r=t.querySelectorAll(`[${Pb}]`);console.log("[VideoRecorder] Found dynamic elements (including shadow DOM):",i.length),console.log("[VideoRecorder] Found dynamic elements in clone:",r.length),i.forEach((e,t)=>{e.setAttribute("data-dynamic-index",String(t))});for(let s=0;s<i.length&&s<r.length;s++)this.dynamicElementMap.set(i[s],r[s])}createDynamicSvgMap(e,t){this.dynamicSvgMap.clear();const i=this.querySelectorAllDeep(e,`svg[${$b}]`),r=t.querySelectorAll(`svg[${$b}]`);console.log("[VideoRecorder] Found dynamic SVGs (including shadow DOM):",i.length);for(let s=0;s<i.length&&s<r.length;s++)this.dynamicSvgMap.set(i[s],r[s])}createDynamicStyleMap(e,t){this.dynamicStyleMap.clear();const i=this.querySelectorAllDeep(e,`[${Rb}]`),r=t.querySelectorAll(`[${Rb}]`);console.log("[VideoRecorder] Found dynamic style elements (including shadow DOM):",i.length);for(let s=0;s<i.length&&s<r.length;s++)this.dynamicStyleMap.set(i[s],r[s])}createRerenderMap(e,t){this.rerenderMap.clear();const i=this.querySelectorAllDeep(e,`[${Lb}]`),r=t.querySelectorAll(`[${Lb}]`);console.log("[VideoRecorder] Found rerender elements (including shadow DOM):",i.length);for(let s=0;s<i.length&&s<r.length;s++)this.rerenderMap.set(i[s],r[s])}querySelectorAllDeep(e,t){const i=[],r=e.querySelectorAll(t);i.push(...Array.from(r));const s=e.querySelectorAll("*");for(const o of s)if(o.shadowRoot){const e=o.shadowRoot.querySelectorAll(t);i.push(...Array.from(e));const r=this.querySelectorAllDeepInShadow(o.shadowRoot,t);i.push(...r)}return i}querySelectorAllDeepInShadow(e,t){const i=[],r=e.querySelectorAll("*");for(const s of r)if(s.shadowRoot){const e=s.shadowRoot.querySelectorAll(t);i.push(...Array.from(e));const r=this.querySelectorAllDeepInShadow(s.shadowRoot,t);i.push(...r)}return i}updateDynamicContent(){for(const[t,i]of this.canvasToImageMap)try{const e=this.getCanvasDataUrl(t);e&&(i.src=e)}catch(e){console.warn("[VideoRecorder] Failed to update canvas image:",e)}for(const[t,i]of this.dynamicElementMap)i.textContent!==t.textContent&&(i.textContent=t.textContent);for(const[t,i]of this.dynamicSvgMap)i.innerHTML!==t.innerHTML&&(i.innerHTML=t.innerHTML);for(const[t,i]of this.dynamicStyleMap){const e=t.getAttribute("style")||"";(i.getAttribute("style")||"")!==e&&i.setAttribute("style",e)}for(const[t,i]of this.rerenderMap)this.rerenderElement(t,i)}rerenderElement(e,t){if(e instanceof HTMLElement&&e.tagName.includes("-")){if(e.shadowRoot){for(;t.firstChild;)t.removeChild(t.firstChild);for(const i of e.shadowRoot.children)if("STYLE"!==i.tagName){const e=i.cloneNode(!0);this.inlineStylesRecursive(i,e),t.appendChild(e)}}}else if(t.innerHTML!==e.innerHTML&&(t.innerHTML=e.innerHTML),e instanceof HTMLElement&&t instanceof HTMLElement){const i=e.getAttribute("style")||"";t.setAttribute("style",i),this.inlineStylesRecursive(e,t)}}removeLitComments(e){const t=document.createTreeWalker(e,NodeFilter.SHOW_COMMENT,null),i=[];let r;for(;r=t.nextNode();)i.push(r);for(const s of i)s.parentNode?.removeChild(s)}ensureXmlnsAttributes(e){const t="http://www.w3.org/1999/xhtml",i=e=>{if(e instanceof HTMLElement){const i=e.getAttribute("xmlns");i&&i===t||e.setAttribute("xmlns",t)}for(const t of e.children)i(t)};i(e)}getCanvasDataUrl(e){const t=e.getContext("webgl2"),i=e.getContext("webgl"),r=e.getContext("2d");if(t||i)try{return this.webglCanvasToDataUrl(e,t||i)}catch(s){return console.warn("[VideoRecorder] WebGL canvas unreadable:",s),null}else if(r)try{return e.toDataURL("image/png")}catch(s){return console.warn("[VideoRecorder] 2D canvas unreadable:",s),null}else try{return e.toDataURL("image/png")}catch(s){return console.warn("[VideoRecorder] Canvas unreadable:",s),null}}webglCanvasToDataUrl(e,t){const i=e.width,r=e.height,s=new Uint8Array(i*r*4);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,s);const o=document.createElement("canvas");o.width=i,o.height=r;const a=o.getContext("2d"),n=a.createImageData(i,r);for(let l=0;l<r;l++)for(let e=0;e<i;e++){const t=4*((r-l-1)*i+e),o=4*(l*i+e);n.data[o]=s[t],n.data[o+1]=s[t+1],n.data[o+2]=s[t+2],n.data[o+3]=s[t+3]}return a.putImageData(n,0,0),o.toDataURL("image/png")}async recordAndEncode(){this.app.setRecordingPhase(Ab.RECORDING),await this.prepareExport();const e=new Tb({target:new tb,format:new lb});console.log("[VideoRecorder] Supported video codecs:",e.format.getSupportedVideoCodecs());const t=new xb({codec:"vp9",bitrate:this.app.renderProps.mp4Quality});e.addVideoTrack(t),e.start();const i=this.file.timeline.frames.length;console.log("[VideoRecorder] Starting recording & encoding. Total frames:",i);let r=0;for(const s of this.file.timeline.frames){await this.file.timeline.setRelativeTime(s.relative),await this.file.draw(),this.updateDynamicContent();if(!(await this.rasterizeToCanvas())){console.warn("[VideoRecorder] Failed to rasterize frame:",s.index);continue}const e=new VideoFrame(this.getMuxingCanvas(),{timestamp:1e3*s.relative}),o=new ty(e);await t.add(o,{keyFrame:r%30==0}),e.close(),o.close(),r++,r%10==0&&console.log(`[VideoRecorder] Progress: ${r}/${i} frames`);const a=r/i*100;this.app.setRecordingPhaseProgress(a)}return this.app.setRecordingPhase(Ab.ENCODING),console.log("[VideoRecorder] Recording & encoding complete."),t.close(),await e.finalize(),this.app.setRecordingPhase(Ab.IDLE),new Blob([e.target.buffer],{type:"video/mp4"})}async rasterizeToCanvas(){if(!this.preparedSvgWrapper)return console.error("[VideoRecorder] SVG wrapper not prepared!"),!1;const e=(new XMLSerializer).serializeToString(this.preparedSvgWrapper),t=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;try{let e;e=await new Promise((e,i)=>{const r=new Image;r.width=this.exportWidth,r.height=this.exportHeight,r.onload=()=>e(r),r.onerror=e=>{console.error("[VideoRecorder] Image load error:",e),i(new Error("Failed to load SVG image"))},r.src=t});const i=this.getMuxingCanvas();i.width=this.exportWidth,i.height=this.exportHeight;const r=this.getMuxingContext();return r.clearRect(0,0,this.exportWidth,this.exportHeight),r.drawImage(e,0,0),!0}catch(i){return console.error("[VideoRecorder] Rasterization error:",i),!1}}cleanup(){for(const e of this.canvasToImageMap.keys())e.removeAttribute("data-canvas-index");for(const e of this.dynamicElementMap.keys())e.removeAttribute("data-dynamic-index");this.canvasToImageMap.clear(),this.dynamicElementMap.clear(),this.dynamicSvgMap.clear(),this.dynamicStyleMap.clear(),this.rerenderMap.clear(),this.preparedSvgWrapper=void 0,this.preparedClone=void 0,this.muxingCanvas=void 0,this.muxingContext=void 0,this.exportWidth=0,this.exportHeight=0,console.log("[VideoRecorder] Cleanup complete.")}async captureVideo(){const e=this.app.renderProps.previewScale;this.app.setPreviewScale(1),await Promise.resolve();const t=performance.now();try{const e=await this.recordAndEncode(),i=performance.now();console.log("[VideoRecorder] Total export time:",i-t,"ms");const r=URL.createObjectURL(e),s=document.createElement("a");s.href=r;const o=this.app.renderProps.fileName||"exported-video";s.download=o.endsWith(".mp4")?o:`${o}.mp4`,s.click(),s.remove(),setTimeout(()=>{URL.revokeObjectURL(r),console.log("[VideoRecorder] Video blob URL revoked.")},1e3)}finally{this.cleanup(),this.app.setPreviewScale(e)}}async captureCurrentFrameAsPng(){const e=this.app.renderProps.previewScale;await Promise.resolve();try{await this.prepareExport(),await this.file.draw(),this.updateDynamicContent(),await this.rasterizeToCanvas();const e=this.getMuxingCanvas(),t=await e.convertToBlob({type:"image/png"});if(t){const e=URL.createObjectURL(t),i=document.createElement("a");i.href=e;const r=this.app.renderProps.fileName||"exported-frame",s=[r,"frame",this.file.timeline.currentFrameIndex+1].join("_");i.download=s.endsWith(".png")?r:`${s}.png`,i.click(),i.remove(),setTimeout(()=>{URL.revokeObjectURL(e),console.log("[VideoRecorder] PNG blob URL revoked.")},1e3)}}finally{this.cleanup(),this.app.setPreviewScale(e)}}}var Ob=Object.defineProperty,Mb=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Ob(t,i,o),o};class Ib extends mc{constructor(){super(...arguments),this.fileCopyElementRef=Wt(),this.exportedDivRef=Wt(),this.parentHasAnalyses=!1,this.recordingPhase=Ab.IDLE,this.recordingPhaseProgress=0,this.renderProps={hasHistogram:!0,hasThermalScale:!0,hasAnalysis:!1,hasTimeline:!1,isVertical:!1,exportFrameWidth:1200,exportFramePadding:15,exportFrameGap:30,exportGraphHeight:300,fileName:"exported-video",mp4Quality:fb,skin:_b.LIGHT,previewScale:.45,autoScale:!0}}get slug(){return["single-video-export",this.file?.fileName??"no-file",this.UUID].join("__")}get outerFile(){return this.file}get innerFile(){return this.fileCopyElementRef.value?.file}get exportedElement(){return this.exportedDivRef.value}setRecordingPhase(e){this.recordingPhase=e}setRecordingPhaseProgress(e){this.recordingPhaseProgress=e}onLayoutAffectingPropertyChanged(){}setHasHistogram(e){this.renderProps.hasHistogram=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setHasThermalScale(e){this.renderProps.hasThermalScale=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setPreviewScale(e){this.renderProps.previewScale=e,this.requestUpdate()}setAutoScale(e){this.renderProps.autoScale=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setHasAnalysis(e){this.renderProps.hasAnalysis=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setHasTimeline(e){this.renderProps.hasTimeline=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setIsVertical(e){this.renderProps.isVertical=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setExportFramePadding(e){this.renderProps.exportFramePadding=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setExportFrameGap(e){this.renderProps.exportFrameGap=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setExportFrameWidth(e){this.renderProps.exportFrameWidth=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setExportGraphHeight(e){this.renderProps.exportGraphHeight=e,this.requestUpdate(),this.onLayoutAffectingPropertyChanged()}setFileName(e){this.renderProps.fileName=e,this.requestUpdate()}setMp4Quality(e){this.renderProps.mp4Quality=e,this.requestUpdate()}setSkin(e){this.renderProps.skin=e,this.requestUpdate()}updated(e){if(super.updated(e),e.has("file")&&this.file){this.parentHasAnalyses=this.file.analysis.value.length>0;const e=this.file.fileName.replace(/\.lrc$/i,"");this.renderProps.fileName=e,this.requestUpdate()}}async record(){const e=new Db(this);await e.captureVideo()}async currentFrame(){const e=new Db(this);await e.captureCurrentFrameAsPng()}}Mb([vt({type:Boolean,reflect:!0})],Ib.prototype,"parentHasAnalyses"),Mb([bt()],Ib.prototype,"recordingPhase"),Mb([bt()],Ib.prototype,"recordingPhaseProgress"),Mb([bt()],Ib.prototype,"renderProps");class Ub{static unknownContainsSomething(e){if(e===Ze||null==e)return!1;if("string"==typeof e&&0===e.trim().length)return!1;if(Array.isArray(e)){if(0===e.length)return!1;if(!e.some(e=>this.unknownContainsSomething(e)))return!1}return!0}static userMayEditFolder(e,t){return!!e.isRoot||(t.may_manage_folders_in||t.may_manage_files_in)}static userMayEditFile(e,t){return!!e.isRoot||t.may_manage_files_in}static userMaySwithFolderContentMode(e,t){return!(!e.may_manage_files_in||!e.may_manage_folders_in)&&(e.may_have_files?e.lrc_count<=0:!e.may_have_files&&(Array.isArray(t)&&t.length>0))}static userMayDeleteFolder(e,t,i,r){return!(!1===e.isLoggedIn||!t.may_manage_folders_in&&!t.may_manage_files_in)&&(t.may_have_files?!!t.may_have_files&&(Array.isArray(r)&&0===r.length&&0===t.lrc_count):Array.isArray(i)&&0===i.length)}static folderContainsFiles(e,t){return Array.isArray(t)&&t.length>0&&e.lrc_count>0}static userIsRoot(e){return e.isRoot}static userIsLoggedIn(e){return e.isLoggedIn}}class zb extends Ut{t(e){return se(li[e])}update(e,t){return this.render(...t)}unknownContainsSomething(e){return Ub.unknownContainsSomething(e)}renderThermalScale(){return qe`<div>
        <registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
    </div>`}renderDef(...e){const t=[],i=e.shift();return i&&t.push(qe`<dt>${i}</dt>`),e.forEach(e=>{t.push(qe`<dd>${e}</dd>`)}),t}}const Fb=It(class extends zb{render(e,t){return this.unknownContainsSomething(t)?qe`<thermal-slot
            label=${se(li[e])}
        >${t}</thermal-slot>`:Ze}}),Bb=class extends Ut{renderRadio(e,t,i){return qe`<thermal-radio
            .checked=${t}
            .onChange=${i}
        >${e}</thermal-radio>`}renderText(e,t,i,r){return qe`<div class="export-config-field export-config-field--text">

            <div class="export-config-field--label">
                <label>${e}</label>
            </div>

            <div class="export-config-field--value">

                <div class="">
                    <input
                        type="text"
                        .value=${i}
                        @input=${e=>{const t=e.target;r(t.value)}}
                    />
                    <span class="unit">${t}</span>
                </div>

            </div>

        </div>`}renderDropdown(e,t,i){const r=t.map(e=>qe`<thermal-btn
            slot="option"
            @click=${()=>i(e)}
        >${e}</thermal-btn>`);return qe`<thermal-dropdown>
            <span slot="invoker">${e}</span>
            ${r}
        </thermal-dropdown>`}renderNumber(e,t,i,r,s,o,a){return qe`<div class="export-config-field">

            <div class="export-config-field--label">
                <label>${e}</label>
            </div>

            <div class="export-config-field--value">

                <div class="">
                    <input
                        type="number"
                        .value=${null==i?"":String(i)}
                        min=${xt(s)}
                        max=${xt(o)}
                        step=${xt(a)}
                        @input=${e=>{const t=e.target.value.trim();if(""===t)return void r(NaN);let i=parseFloat(t);void 0!==s&&!isNaN(i)&&i<s&&(i=s),void 0!==o&&!isNaN(i)&&i>o&&(i=o),r(i)}}
                    />
                    <span class="unit">${t}</span>
                </div>

            </div>

        </div>`}renderConfigHeader(e){const t=e.innerFile?.timeline.isSequence,i=e.parentHasAnalyses,r=[],s=[qe`<manager-palette-dropdown ></manager-palette-dropdown>`,qe`<registry-range-form></registry-range-form>`];r.push(Fb("thermalscale",s));const o=[this.renderRadio(e.t(li.histogram),e.renderProps.hasHistogram,e.setHasHistogram.bind(e)),this.renderRadio(e.t(li.thermalscale),e.renderProps.hasThermalScale,e.setHasThermalScale.bind(e))];i&&o.push(this.renderRadio(e.t(li.analysis),e.renderProps.hasAnalysis,e.setHasAnalysis.bind(e))),t&&o.push(this.renderRadio(e.t(li.timeline),e.renderProps.hasTimeline,e.setHasTimeline.bind(e))),r.push(Fb("exportcontent",o));const a=[];i&&e.renderProps.hasAnalysis&&a.push(this.renderRadio("Is Vertical",e.renderProps.isVertical,e.setIsVertical.bind(e))),a.push(this.renderDropdown(e.renderProps.skin,["light","dark","solarized"],t=>e.setSkin(t))),r.push(Fb("display",a)),r.push(this.renderNumber(e.t(li.exportwidth),"px",e.renderProps.exportFrameWidth,e.setExportFrameWidth.bind(e),500,1920,10)),r.push(this.renderNumber(e.t(li.exportmargin),"px",e.renderProps.exportFramePadding,e.setExportFramePadding.bind(e),0,100,1)),i&&e.renderProps.hasAnalysis&&(r.push(this.renderNumber(e.t(li.exportgap),"px",e.renderProps.exportFrameGap,e.setExportFrameGap.bind(e),0,100,1)),r.push(this.renderNumber(e.t(li.exportgrahpheight),"px",e.renderProps.exportGraphHeight,e.setExportGraphHeight.bind(e),200,700,1)));const n=t?".mp4 / .png":".png";if(r.push(this.renderText(e.t(li.name),n,e.renderProps.fileName,e.setFileName.bind(e))),t){const t=[{label:"VERY_HIGH",value:fb},{label:"HIGH",value:gb},{label:"MEDIUM",value:mb},{label:"LOW",value:ub},{label:"VERY_LOW",value:pb}],i=t.map(e=>e.label),s=i=>{const r=t.find(e=>e.label===i);r&&(e.setMp4Quality(r.value),console.log(r.value))},o=t.find(t=>t.value===e.renderProps.mp4Quality)?.label??"UNKNOWN",a=[this.renderDropdown(o,i,s.bind(this))];r.push(Fb(li.videoquality,a))}return r}render(e){return qe`<div class="export-bar">

            <div class="export-bar-part export-bar-part--config">
                ${this.renderConfigHeader(e)}
            </div>
        
        </div>`}};Bb.styles=ce`
    
        .export-bar {

            width: 100%;

            .export-bar-part {
            }

            .export-bar-part--config {
                display: flex;
                flex-wrap: wrap;
                gap: 1em 2em;

                background: var( --thermal-background );
                padding: 1em;

                border-radius: var( --thermal-radius );

                thermal-slot {
                    box-sizing: border-box;
                }
            }

            .export-bar-part--actions {
            }
        

            .export-config-field {

                &:hover,
                &:focus-within {
                    .export-config-field--label {
                        color: var( --thermal-foreground );
                        &::after {
                            background: var( --thermal-foreground );
                        }
                    }
                }
                
                .export-config-field--label {

                    margin: 0px 0px 0.5em;
                    padding: 0px;
                    font-weight: normal;
                    font-size: 0.7em;
                    text-transform: uppercase;
                    color: var(--thermal-slate);
                    display: flex;
                    align-items: center;
                    gap: 0.5em;

                    &::after {
                        content: "";
                        flex-grow: 1;
                        height: 1px;
                        background: var( --thermal-slate-light );
                    }

                }

                .export-config-field--value {

                    input {
                        border: var( --thermal-slate-light ) solid 1px;
                        text-align: right;
                        font-family: var( --thermal-ff );
                        padding: .3em .1em .3em .3em;
                        width: 5em;
                        display: inline-block;
                    }

                    .unit {
                        font-size: 0.7em;
                    }

                }

                &.export-config-field--text {
                    .export-config-field--value input {
                        width: 200px;
                        text-align: left;
                    }
                }
            
            }

        
        }
    
    `;let Nb=Bb;const jb=It(Nb),Vb=class extends Ut{constructor(){super(...arguments),this.innerHeight=0}renderHistogram(e){return qe`<registry-histogram style="display: ${e.hasHistogram?"block":"none"};"></registry-histogram>`}renderThermalScale(e){return qe`<div style="display: ${e.hasThermalScale?"block":"none"};">
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
        </div>`}renderAnalyses(e){if(!e.hasAnalysis)return Ze;const t=e.exportFrameWidth/2-2*e.exportFramePadding-e.exportFrameGap,i=e.exportGraphHeight;return qe`<div class="export-element-content--analyses">
            <!-- Analysis content here -->
            <file-analysis-display></file-analysis-display>
            <file-analysis-graph 
                graphWidth=${t} 
                graphHeight=${i}
                .hasDownloads=${!1}
                style="height: ${i}px; width: ${t}px; display: block;"
            ></file-analysis-graph>
        </div>`}renderMainContent(e){const t=[qe`<file-canvas
                .prefers-gpu=${!1}
            ></file-canvas>`];return e.hasTimeline&&t.push(qe`<file-timeline hasplaybutton="false"></file-timeline>`),qe`<div>
            ${t}
        </div>`}initObserver(e){if(this.observer)return;const t=e?.querySelector(".export-element-content");t&&(this.observer=new ResizeObserver(t=>{for(const i of t)this.innerHeight=i.borderBoxSize[0].blockSize,e.setAttribute("height",String(this.innerHeight))}),this.observer.observe(t))}render(e){const t=e.exportedDivRef,i=e.renderProps;t.value&&this.initObserver(t.value);const r={"export-element":!0,vertical:i.isVertical,horizontal:!i.isVertical,hasAnalysis:i.hasAnalysis,hasHistogram:i.hasHistogram,hasTimeline:i.hasTimeline,hasThermalScale:i.hasThermalScale,["skin-"+i.skin]:!0},s=e.recordingPhase!==Ab.IDLE?1:i.previewScale,o={width:`calc( ${i.exportFrameWidth}px + var( --thermal-crop ) * 2 )`,scale:String(s)},a={width:i.exportFrameWidth+"px",gap:i.exportFrameGap+"px",padding:i.exportFramePadding+"px"},n=[this.renderHistogram(i),this.renderThermalScale(i),this.renderMainContent(i)],l=this.renderAnalyses(i);return qe`<!-- The main content rendered through the SingleVideoExportLayoutDirective -->
        <main
            class=${Vl(r)}
            style=${Fd(o)}
        >
            <b class="crop crop-t crop-l"></b>
            <b class="crop crop-t crop-r"></b>
            <b class="crop crop-b crop-l"></b>
            <b class="crop crop-b crop-r"></b>

            <section 
                ${Yt(t)}
                class="export-element-content" 
                style=${Fd(a)}
            >

                <div class="export-element-content--main">
                    ${n}
                </div>

                ${l}

            </section>

            <aside class="export-overlay">
                <span>
                    <strong>Náhled</strong>
                </span>
            </aside>

        </main>
        
        `}};Vb.styles=ce`
    
        .export-element {

            position: relative;


            --thermal-export-bg: white;
            --thermal-export-fg: black;

            --thermal-crop: 2em;

            padding: var( --thermal-crop );

            box-sizing: border-box;

            .crop {
                position: absolute;
                width: var( --thermal-crop );
                height: var( --thermal-crop );
                box-sizing: border-box;

                &.crop-t {
                    top: 0;
                }

                &.crop-b {
                    bottom: 0;
                }

                &.crop-l {
                    left: 0;
                }

                &.crop-r {
                    right: 0;
                }

                --thermal-export-crop-border-width: 3px;
                --thermal-export-border-color: var( --thermal-background );

                &.crop-t.crop-l {
                    border-bottom: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-right: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }

                &.crop-t.crop-r {
                    border-bottom: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-left: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }

                &.crop-b.crop-l {
                    border-top: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-right: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }

                &.crop-b.crop-r {
                    border-top: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                    border-left: var(--thermal-export-crop-border-width) solid var(--thermal-export-border-color);
                }
            }


            .export-overlay {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 99;
                cursor: help;

                box-sizing: border-box;
                padding: var( --thermal-crop );

                transition: all .3s ease;

                display: flex;
                align-items: stretch;
                justify-content: stretch;

                

                span {

                    font-size: 3em;
                    font-weight: normal !important;

                    width: 100%;
                    padding: 1em;
                
                    opacity: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    box-sizing: outline-box;

                    transition: opacity .3s ease;
                    
                    color: var( --thermal-export-bg );
                    
                }

                &:hover {
                    span {
                        background: color-mix(in srgb, var( --thermal-export-fg ) 50%, transparent);
                        opacity: 1;
                    }
                }
            }

            .export-element-content {
                display: grid;
                box-sizing: border-box;
                background-color: var( --thermal-export-bg );

                .export-element-content--analyses {

                    display: grid;
                    gap: 1em;
                    grid-template-columns: 100%;
                    grid-template-rows: 1fr auto;
                
                }

            }



            &.vertical {
                &.hasAnalysis {

                    .export-element-content {
                        grid-template-columns: auto;
                        grid-template-rows: auto auto;
                    }
        
                }
            }

            &.horizontal {
                &.hasAnalysis {

                    .export-element-content {
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: auto;
                    }
                }
            }

            &.hasAnalysis {

            }

            &.hasTimeline {
            
            }

            &.hasHistogram {
            
            }

            &.hasThermalScale {
            
            }

            

            &.skin-light {
                --thermal-export-bg: white;
                --thermal-export-fg: black;
                --thermal-slate: var( --thermal-slate-base );
                --thermal-slate-dark: var( --thermal-slate-base-dark );
                --thermal-slate-light: var( --thermal-slate-base-light );
                --thermal-foreground: black;
                --thermal-background: white;
                --thermal-primary: var( --thermal-primary-base );
            }

            &.skin-dark {
                --thermal-export-bg: black;
                --thermal-export-fg: white;
                --thermal-background: black;
                --thermal-foreground: white;
                --thermal-slate: gray;
                --thermal-slate-dark: darkgray;
                --thermal-slate-light: lightgray;
            }

            &.skin-solarized {
                --thermal-export-bg: #1d5766ff;
                --thermal-export-fg: white;
                --thermal-background: #1d5766ff;
                --thermal-foreground: white;
                --thermal-slate: #27888bff;
                --thermal-slate-dark: #39aaa1ff;
                --thermal-slate-light: #073642;
            }

        
        }
    
    `;let Hb=Vb;const Wb=It(Hb);const Gb=It(class extends Ut{renderWrappedWithNestedProviders(e,t){const i=e.registry,r=e.group;return i&&r?qe`<registry-provider 
            slug="${e.slug}"
            style="display: contents;"
        >
            <group-provider 
                slug=${e.slug}
                style="display: contents;"
            >
                <file-copy 
                    .originalFile=${e.outerFile} 
                    .withAnalyses=${e.renderProps.hasAnalysis}
                    ${Yt(e.fileCopyElementRef)}
                >
                    ${t}
                </file-copy>
            </group-provider>
        </registry-provider>`:Ze}render(e,t){return this.renderWrappedWithNestedProviders(e,t)}});var qb=Object.defineProperty,Yb=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&qb(t,i,o),o};const Zb=class extends Ib{constructor(){super(...arguments),this.previewSectionRef=Wt(),this.exportRealWidth=0,this.exportRealHeight=0}onInstanceCreated(e){this.parentHasAnalyses=e.analysis.value.length>0}onFailure(e){}connectedCallback(){super.connectedCallback(),this.setupResizeObserver()}disconnectedCallback(){super.disconnectedCallback(),this.previewResizeObserver?.disconnect(),this.exportSizeObserver?.disconnect()}updated(e){super.updated(e),this.setupResizeObserver(),this.setupExportSizeObserver()}setupResizeObserver(){!this.previewResizeObserver&&this.previewSectionRef.value&&(this.previewResizeObserver=new ResizeObserver(e=>{if(this.renderProps.autoScale)for(const t of e)this.calculateAutoScale(t.contentRect.height)}),this.previewResizeObserver.observe(this.previewSectionRef.value))}setupExportSizeObserver(){if(this.exportSizeObserver||!this.exportedDivRef.value)return;const e=this.exportedDivRef.value.parentElement;e&&(this.exportSizeObserver=new ResizeObserver(e=>{for(const t of e)this.exportRealWidth=Math.round(t.contentRect.width),this.exportRealHeight=Math.round(t.contentRect.height)}),this.exportSizeObserver.observe(e))}onLayoutAffectingPropertyChanged(){this.renderProps.autoScale&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.triggerAutoScaleRecalculation()})})}triggerAutoScaleRecalculation(){if(!this.previewSectionRef.value)return;const e=this.previewSectionRef.value.clientHeight;this.calculateAutoScale(e)}calculateAutoScale(e){const t=this.exportedDivRef.value;if(!t)return;const i=this.renderProps.previewScale,r=t.getBoundingClientRect().height/i;if(r<=0||e<=0)return;const s=Math.min(1,(e-20)/r),o=Math.max(.1,Math.min(1,s));Math.abs(o-this.renderProps.previewScale)>.01&&(this.renderProps.previewScale=o,this.requestUpdate())}renderHeader(){return qe`<header class="controls">
            ${jb(this)}
        </header>`}renderPreview(){const e=this.recordingPhase!==Ab.IDLE;return qe`<section class="preview" ${Yt(this.previewSectionRef)}>
            ${Wb(this)}

            ${e?qe``:qe`
                <div class="preview-size">
                    <div class="preview-size--export">
                        <div class="preview-label">Export</div>
                        <div class="preview-value">${this.exportRealWidth} × ${this.exportRealHeight} px</div>
                    </div>
                    <div class="preview-size--preview">
                        <div class="preview-label">Náhled</div>

                        <div class="preview-value">Zoom: ${(100*this.renderProps.previewScale).toFixed(0)}%</div>


                        ${this.renderProps.autoScale?Ze:qe`
                            <input 
                                type="range" 
                                min="0.1" 
                                max="1" 
                                step="0.01" 
                                .value=${String(this.renderProps.previewScale)} 
                                @input=${e=>{const t=e.target,i=parseFloat(t.value);this.setPreviewScale(i)}}
                            />
                        `}

                        <thermal-radio
                            .checked=${this.renderProps.autoScale} 
                            .onChange=${e=>{this.setAutoScale(e)}}
                        >Automatické přiblížení</thermal-radio>
                        
                        
                        
                        
                    </div>
                </div>
            `}

        </section>`}renderOverview(){if(this.recordingPhase===Ab.IDLE)return Ze;let e=this.t(li.exportencodingfile);return this.recordingPhase===Ab.RECORDING&&(e=`${this.t(li.exportrecordingframes)} ${this.recordingPhaseProgress.toFixed(2)}%`),qe`<div
            class="progress-overlay"
        >

            <div class="progress-overlay-content">

                <thermal-spinner
                    .message=${e}
                ></thermal-spinner>

                <div>${this.t(li.exportdonotclosewindowhint)}</div>

            </div>
            
        </div>`}renderFooter(){return qe`<footer class="footer">
            <file-timeline></file-timeline>
        </footer>`}render(){return Gb(this,[this.renderHeader(),this.renderPreview(),this.renderFooter(),this.renderOverview()])}};Zb.styles=[Hb.styles,Nb.styles,ce`
            :host {
                font-size: var( --thermal-fs );
                color: var( --thermal-foreground );
                display: grid;
                grid-template-rows: auto 1fr auto;
                gap: 1em;
                height: 100%;
                min-height: 0;
                max-height: 100%;
            }

            .controls {
            }

            .preview {
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 0; /* klíčové - povolí zmenšení pod velikost obsahu */
                position: relative;

                background: var( --thermal-slate );

                border-radius: var( --thermal-radius );

                & > * {
                
                }


                .preview-size {
                
                    position: absolute;
                    bottom: 1em;
                    right: 1em;

                    z-index: 10000;

                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 0.5em;

                    

                    & > * {
                        background: var( --thermal-slate-light );
                        border-radius: var( --thermal-radius );
                        box-sizing: border-box;
                        padding: 0.5em 0.75em;
                        text-align: right;
                        font-size: .8em;

                        .preview-label {
                            text-transform: uppercase;
                            
                            font-weight: normal;
                            margin-bottom: .25em;
                            text-align: right;
                            opacity: .8;
                        }

                        .preview-value {
                            font-weight: bold;
                        }
                    }

                    .preview-size--preview {
                    }

                    .preview-size--export {
                        thermal-radio {
                            display: inline-block;
                        }
                    }
                
                }




            }

            .footer {
            }

            .progress-overlay {
            
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                z-index: 100000;

                display: flex;
                align-items: center;
                justify-content: center;

                text-align: center;

                background: color-mix(in srgb, var( --thermal-slate-light ) 90%, transparent);

                .progress-overlay-content {
                
                    display: flex;
                    flex-direction: column;
                    gap: 1em;

                    div {
                        color: var( --thermal-slate-dark );
                    }
                }
            
            }
        `];let Xb=Zb;Yb([bt()],Xb.prototype,"exportRealWidth"),Yb([bt()],Xb.prototype,"exportRealHeight");var Kb=Object.defineProperty,Qb=(e,t,i,r)=>{for(var s,o=void 0,a=e.length-1;a>=0;a--)(s=e[a])&&(o=s(t,i,o)||o);return o&&Kb(t,i,o),o};const Jb=class extends Wh{constructor(){super(...arguments),this.histogram=[],this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.loading=!1,this.error=!1}getClassName(){return"HistogramElement"}connectedCallback(){super.connectedCallback(),this.loading=this.registry.histogram.loading,this.registry.histogram.onCalculationStart.set(this.UUID,()=>{this.loading=!0,this.error=!1}),this.registry.histogram.onCalculationEnd.set(this.UUID,e=>{this.loading=!1,this.error=!e}),this.registry.loading.addListener(this.UUID,e=>{!0===e&&(this.loading=!0)})}firstUpdated(e){super.firstUpdated(e),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.loading.removeListener(this.UUID),this.registry.histogram.removeListener(this.UUID),this.registry.histogram.onCalculationStart.delete(this.UUID),this.registry.histogram.onCalculationEnd.delete(this.UUID)}render(){const e=this.histogram.length>0&&!1===this.loading;return qe`

            <div class="container ${e?"ready":"loading"} ${this.error?"has-error":"is-ok"}">

                <div class="histogram ${!0===this.expandable?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{!0===this.expandable&&(this.expanded=!this.expanded)}}>

                    ${this.histogram.map(e=>qe`
                            <div class="histogram-bar" data-height="${e.height}" data-percentage="${e.percentage}" data-count="${e.count}" data-from="${e.from}" data-to="${e.to}">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

                ${!0===this.error?qe`<div class="error">Unable to calculate the histogram</div>`:Ze}

                <div class="spinner">
                    <span></span>
                </div>

            </div>
        
        `}};Jb.styles=ce`

        @keyframes spinner {
            0% {left: 0px; width: 0%;}
            50% {left: 25%; width: 50%;}
            100% {left: 100%; width: 0%;}
        }

        .container {
            padding: 0 calc( var( --thermal-gap ) * .5 );
            position: relative;

            .spinner {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: none;
                align-items: center;
                justify-content: center;
                

                span {
                    width: calc( 100% - var(--thermal-gap) );
                    height: 6px;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border-radius: 3px;

                    &::after {
                        content: "";
                        display: block;
                        background: var(--thermal-slate-dark);
                        position: absolute;
                        opacity: .2;
                        height: 100%;
                        animation-name: spinner;
                        animation-duration: 1s;
                        animation-iteration-count: infinite;
                        animation-timing-function: linear
                    }
                }

            }

            &.loading:not(.has-error) {

                .spinner {
                    display: flex;
                }

                .histogram {
                    opacity: .8;
                }
            }

        }

        .histogram {
            display: flex;
            width: 100%;
            background:  transparent;
            transition: opacity .3s ease-in-out;

            &.expandable {
                transition: all .2s ease-in-out;
                cursor: pointer;
                &:hover {
                    background: var(--thermal-background);
                }
            }
        }

        .histogram-bar {
            flex-grow: 1;
            position: relative;
            height: 100%;

            &:hover {
                .histogram-bar-inner {
                    background: var(--thermal-foreground);
                }
            }
        }

        .histogram-bar-inner {
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            background: var(--thermal-slate-dark);
            transition: height .5s ease-in-out;
        }

        .error {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--thermal-slate-light);
            color: var(--thermal-slate);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
        }


    `;let ew=Jb;Qb([bt()],ew.prototype,"histogram"),Qb([vt({type:String,reflect:!0})],ew.prototype,"height"),Qb([vt({type:String,reflect:!0})],ew.prototype,"heightExpanded"),Qb([vt({type:Boolean,reflect:!0,converter:Pa(!1)})],ew.prototype,"expandable"),Qb([bt()],ew.prototype,"expanded"),Qb([bt()],ew.prototype,"loading"),Qb([bt()],ew.prototype,"error");const tw={"thermal-app":cn,"thermal-bar":mn,"thermal-btn":zl,"thermal-dialog":jl,"thermal-dropdown":ql,"thermal-dropin":Xl,"thermal-expandable":eh,"thermal-field":sh,"thermal-icon":nh,"thermal-loading":dh,"thermal-radio":gh,"thermal-slot":bh,"thermal-spinner":kh,"thermal-tip":_h},iw={"file-provider":class extends ic{constructor(){super(...arguments),this.fileLoadController=new zc(this)}},"group-provider":class extends sc{},"registry-provider":class extends dc{},"manager-provider":Nc,"file-copy":Dc,"file-mirror":Ic},rw={"manager-image-smooth-switch":vd,"manager-graph-smooth-switch":gd,"manager-palette-dropdown":Ed,"manager-palette-buttons":kd,"manager-tool-bar":Ad,"manager-export-panel":pd},sw={"registry-histogram":ew,"registry-opacity-slider":Kd,"registry-range-auto-button":class extends Wh{doAction(){this.registry.range.applyAuto()}render(){return qe`<thermal-btn @click=${this.doAction}>${se(li.automaticrange)}</thermal-btn>`}},"registry-range-full-button":Wd,"registry-range-display":Yd,"registry-range-form":Ld,"registry-range-slider":Vd,"registry-ticks-bar":Id},ow={"group-analysis-sync-button":wp,"group-chart":yp,"group-download-buttons":Ap,"group-download-dropdown":Cp,"group-dropin-element":jp,"group-dropin-input":Gp,"group-range-propagator":Jp,"group-timeline":pu},aw={"file-canvas":hg,"file-download-dropdown":pg,"file-info-button":mg,"file-playback-speed-dropdown":Sg,"file-timeline":Tg,"file-video-export-button":Pg,"file-video-export-panel":Xb,"file-label":bg,"file-button":Zm,"file-dropdown-elt":Jm,"file-download-lrc":class extends Xp{constructor(){super(...arguments),this.tooltip=void 0}enter(){}leave(){}action(){if(this.file){const e=document.createElement("a");e.href=this.file.thermalUrl,e.download=this.file.fileName,e.click()}}getDefaultLabel(){return"lrc"}},"file-download-png":ig,"file-range-propagator":og,"file-analysis-complex":bm,"file-analysis-display":Sm,"file-analysis-edit":Tm,"file-analysis-graph":$m,"file-analysis-oveerview":Om,"file-analysis-overview-row":zm,"file-analysis-table-row":jm,"file-analysis-table":Gm,"analysis-color":rm,"analysis-name":nm,"edit-area":dm,"edit-point":gm,"thermal-chart":Ju},nw={...tw,...iw,...rw,...sw,...ow,...aw,...{"apparent-temperature-aat":yi,"thermal-dropin-app":Au,"thermal-file-app":Cu,"thermal-group-app":Hu,"thermal-new-app":Ru}},lw=(e,t)=>{customElements.get(e)?console.warn(gc,fc,"🟥",...hw(e,t)):(customElements.define(e,t),console.info(gc,fc,"✅",...hw(e,t)))},hw=(e,t)=>{const i=e.length;return i>30&&(e=e.substring(0,27)+"..."),[e,".....................................".substring(0,30-i),t.name]};let cw=null,dw=()=>{};new Promise(e=>{dw=e});const pw={type:"3rdParty",init(e){uw(e)}},uw=e=>{cw=e,dw(cw)},mw=new Map;setInterval(()=>{mw.forEach((e,t)=>{!1!==t.isConnected&&!1!==gw(t)||mw.delete(t)})},1e4);const gw=e=>{const t=e.part;if(t.type===$t)return t.element.isConnected;if(t.type===Rt)return!!t.parentNode&&t.parentNode.isConnected;if(t.type===Lt)return t.element.isConnected;if(t.type===Dt)return t.element.isConnected;if(t.type===Ot)return t.element.isConnected;if(t.type===Mt)return t.element.isConnected;throw new Error("Unsupported Part")},{slice:fw,forEach:yw}=[];const vw=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,bw={create(e,t,i,r){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};i&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+60*i*1e3)),r&&(s.domain=r),document.cookie=function(e,t){const i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};let r=`${e}=${encodeURIComponent(t)}`;if(i.maxAge>0){const e=i.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(e)}`}if(i.domain){if(!vw.test(i.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${i.domain}`}if(i.path){if(!vw.test(i.path))throw new TypeError("option path is invalid");r+=`; Path=${i.path}`}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");r+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(r+="; Partitioned"),r}(e,t,s)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let r=0;r<i.length;r++){let e=i[r];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var ww={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!=typeof document)return bw.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:r,cookieDomain:s,cookieOptions:o}=t;i&&"undefined"!=typeof document&&bw.create(i,e,r,s,o)}},xw={name:"querystring",lookup(e){let t,{lookupQuerystring:i}=e;if("undefined"!=typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const r=e.substring(1).split("&");for(let s=0;s<r.length;s++){const e=r[s].indexOf("=");if(e>0){r[s].substring(0,e)===i&&(t=r[s].substring(e+1))}}}return t}},Sw={name:"hash",lookup(e){let t,{lookupHash:i,lookupFromHashIndex:r}=e;if("undefined"!=typeof window){const{hash:e}=window.location;if(e&&e.length>2){const s=e.substring(1);if(i){const e=s.split("&");for(let r=0;r<e.length;r++){const s=e[r].indexOf("=");if(s>0){e[r].substring(0,s)===i&&(t=e[r].substring(s+1))}}}if(t)return t;if(!t&&r>-1){const t=e.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(t))return;const i="number"==typeof r?r:0;return t[i]?.replace("/","")}}}return t}};let kw=null;const Cw=()=>{if(null!==kw)return kw;try{if(kw="undefined"!=typeof window&&null!==window.localStorage,!kw)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){kw=!1}return kw};var Ew={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Cw())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&Cw()&&window.localStorage.setItem(i,e)}};let Tw=null;const _w=()=>{if(null!==Tw)return Tw;try{if(Tw="undefined"!=typeof window&&null!==window.sessionStorage,!Tw)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){Tw=!1}return Tw};var Aw={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&_w())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&_w()&&window.sessionStorage.setItem(i,e)}},Pw={name:"navigator",lookup(e){const t=[];if("undefined"!=typeof navigator){const{languages:e,userLanguage:i,language:r}=navigator;if(e)for(let s=0;s<e.length;s++)t.push(e[s]);i&&t.push(i),r&&t.push(r)}return t.length>0?t:void 0}},$w={name:"htmlTag",lookup(e){let t,{htmlTag:i}=e;const r=i||("undefined"!=typeof document?document.documentElement:null);return r&&"function"==typeof r.getAttribute&&(t=r.getAttribute("lang")),t}},Rw={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if("undefined"==typeof window)return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(i))return;const r="number"==typeof t?t:0;return i[r]?.replace("/","")}},Lw={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e;const i="number"==typeof t?t+1:1,r="undefined"!=typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[i]}};let Dw=!1;try{document.cookie,Dw=!0}catch(Fw){}const Ow=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Dw||Ow.splice(1,1);class Mw{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{languageUtils:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return yw.call(fw.call(arguments,1),t=>{if(t)for(const i in t)void 0===e[i]&&(e[i]=t[i])}),e}(t,this.options||{},{order:Ow,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(ww),this.addDetector(xw),this.addDetector(Ew),this.addDetector(Aw),this.addDetector(Pw),this.addDetector($w),this.addDetector(Rw),this.addDetector(Lw),this.addDetector(Sw)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let i=this.detectors[e].lookup(this.options);i&&"string"==typeof i&&(i=[i]),i&&(t=t.concat(i))}}),t=t.filter(e=>{return null!=e&&!("string"==typeof(t=e)&&[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(e=>e.test(t)));var t}).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}Mw.type="languageDetector";re.use(pw).use(Mw).init({fallbackLng:"en",resources:{cs:{translation:{moreoptions:"Více možností",delete:"Smazat",create:"Vytvořit",createfolder:"Vytvořit složku",createsubfolder:"Vytvořit podsložku",subfolder:"Podsložka",display:"Zobrazení",syncanalyses:"Synchronizovat analýzy",uploadedby:"Nahráno uživatelem",uploadeddat:"Nahráno dne",overviewofyourfolders:"Přehled vašich složek",content:"Obsah",palette:"Paleta",loading:"Načítám",config:"Nastavení",layout_simple:"Jednoduché rozvržení",layout_advanced:"Analytické rozvržení",layout_nogui:"Bez GUI",layout_lesson:"Rozvržení lekce",share:"Sdílet",fileloadingerror:"Chyba při načítání souboru",embedhint:"Chcete-li vložit tento blok na jinou webovou stránku, použijte následující kód:",embedlibrary:"Vložte knihovnu – jednou v HTML hlavičce",embedcomponent:"Použijte následující kód kdekoli v HTML těle",copy:"Kopírovat",remotefoldersbrowseraddfolderhint:"Pokud v úložišti přidáte další složku, uvidíte zde další možnosti vyhodnocení.",temperature:"Teplota",upload:"Nahrát",uploadafile:"Nahrát soubor",selectfile:"Vybrat soubor",addfiles:"Přidat soubor(y)",clear:"Smazat",dragorselectfile:"Přetáhněte LRC soubor nebo jej vyberte z disku",file:"soubor",detail:"Detail",showeverything:"Zobrazit vše",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",open:"Otevřít",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"Informace o souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",togglevisibleimage:"Přepnout IR / VIS obraz",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"- jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"- Původní IR soubor {{type}}",exportcurrentframeaspng:"- Aktuální snímek",convertentiresequencetovideo:"- Převést celou sekvenci do videa",pngofindividualimages:"- jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"- skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"- data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",exportimagewidth:"Šířka exportovaných obrázků",exportimagefontsize:"Velikost písma v exportovaných obrázcích",exportgroupname:"Název skupiny",exportfilenames:"Názvy souborů",exportdimensions:"Rozměry exportu",exportgroup:"Export skupiny",exportcontent:"Obsah exportu",numberofcolumns:"Počet sloupců",thermalscale:"Teplotní škála",thermalrange:"Teplotní rozsah",analyses:"Analýzy",filedate:"File date",folder:"Složka",folders:"Složky",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na <thermal-btn variant='background' interactive='false' tooltip='Najdete je v tabulce výše...'>hodnotu</thermal-btn> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",analysissync:"Synchronizovat analýzy",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek",server:"Server",networklog:"Síťový záznam",editfile:"Upravit soubor",editfolder:"Upravit složku",editcomment:"Upravit komentář",user:"Uživatel",griddisplay:"Zobrazit jako mřížku",tabledisplay:"Zobrazit jako tabulku",deletefile:"Smazat soubor",deletefolder:"Smazat složku",comments:"Komentáře",deletecomment:"Smazat komentář",savecomment:"Uložit komentář",addcomment:"Přidat komentář",nocomments:"Žádné komentáře",savechanges:"Uložit změny",uploadfile:"Nahrát soubor",compactview:"Kompaktní zobrazení",showdiscussion:"Zobrazit diskuzi",edittags:"Upravit štítky",availabletags:"Dostupné štítky",assignedtags:"Přiřazené štítky",connectioninformation:"Informace o připojení",serverurl:"URL serveru",servername:"Název serveru",login:"Přihlášení",logout:"Odhlášení",password:"Heslo",logoutmessage:"Opravdu se chcete odhlásit?",loginerror:"Nelze se přihlásit.",accessibletologgedinusers:"Tato stránka je přístupná pouze přihlášeným uživatelům.",export:"Export",exportvideo:"Exportovat video",exportpng:"Exportovat obrázek",exportdonotclosewindowhint:"Nezavírejte toto okno, soubor se stáhne automaticky.",exportencodingfile:"Enkóduji video soubor...",exportrecordingframes:"Zaznamenávám snímky...",histogram:"Histogram",timeline:"Časová osa",exportwidth:"Šířka ",exportmargin:"Okraje",exportgap:"Mezera",exportgrahpheight:"Výška grafu",videoquality:"Kvalita videa",imagecompression:"Komprese obrázku",theme:"Motiv",light:"Světlý",dark:"Tmavý",foldermayhavefiles:"Složka pro soubory",foldermayhavesubfolders:"Složka pro podsložky"}},cy:{translation:{moreoptions:"Mwy o opsiynau",delete:"Dileu",create:"Creu",createfolder:"Creu ffolder",createsubfolder:"Creu is-ffolder",subfolder:"Is-ffolder",display:"Arddangos",syncanalyses:"Cydamseru dadansoddiadau",uploadedby:"Wedi'i lwytho i fyny gan",uploadeddat:"Wedi'i lwytho i fyny ar",overviewofyourfolders:"Trosolwg o'ch ffolderi",content:"Cynnwys",palette:"Palet",loading:"Llwytho",config:"Gosodiadau",temperature:"Tymheredd",upload:"Llwytho i fyny",uploadafile:"Llwytho ffeil i fyny",selectfile:"Dewis ffeil",addfiles:"Ychwanegu ffeil(iau)",clear:"Clirio",dragorselectfile:"Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",share:"Rhannu",fileloadingerror:"Gwall wrth lwytho'r ffeil",embedhint:"I fewnosod y bloc hwn mewn gwefan arall, defnyddiwch y cod canlynol:",embedlibrary:"Mewnosodwch y llyfrgell – unwaith yn pennyn HTML",embedcomponent:"Defnyddiwch y cod canlynol yn unrhyw le yn y corff HTML",copy:"Copïo",remotefoldersbrowseraddfolderhint:"Os ychwanegwch ffolder arall yn y gadwrfa, fe welwch opsiynau gwerthuso ychwanegol yma.",analysissync:"Cydamseru dadansoddiadau",file:"ffeil",detail:"Manylder",open:"Agor",showeverything:"Dangos popeth",layout_simple:"Cynllun syml",layout_advanced:"Cynllun dadansoddi",layout_nogui:"Dim GUI",layout_lesson:"Cynllun gwers",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",togglevisibleimage:"Newid delwedd IR/VIS",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"- ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"- Ffeil thermol wreiddiol {{type}}",exportcurrentframeaspng:"- Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"- Trosi dilyniant cyfan i fideo",pngofindividualimages:"- ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"- grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"- data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",exportimagewidth:"Lled delwedd wedi'i hallforio",exportimagefontsize:"Maint ffont delwedd wedi'i hallforio",exportgroupname:"Enw'r grŵp allforio",exportfilenames:"Enwau'r ffeiliau allforio",exportdimensions:"Dimensiynau allforio",exportgroup:"Allforio'r grŵp",exportcontent:"Allforio'r cynnwys",numberofcolumns:"Nifer y colofnau",thermalscale:"Graddfa thermol",thermalrange:"Ystod thermol",analyses:"Dadansoddiadau",filedate:"Dyddiad y ffeil",folder:"Ffolder",folders:"Ffolderi",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <thermal-btn variant='background' interactive='false'  tooltip='Fe welwch nhw yn y tabl uchod...'>werth</thermal-btn> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell",server:"Gweinydd",networklog:"Log rhwydwaith",editfile:"Golygu ffeil",editfolder:"Golygu ffolder",editcomment:"Golygu sylw",user:"Defnyddiwr",griddisplay:"Dangos fel grid",tabledisplay:"Dangos fel tabl",deletefile:"Dileu ffeil",deletefolder:"Dileu ffolder",comments:"Sylwadau",deletecomment:"Dileu sylw",savecomment:"Cadw sylw",addcomment:"Ychwanegu sylw",nocomments:"Dim sylwadau",savechanges:"Cadw newidiadau",uploadfile:"Uwchlwytho ffeil",compactview:"Golwg gryno",showdiscussion:"Dangos trafodaeth",edittags:"Golygu tagiau",availabletags:"Tagiau ar gael",assignedtags:"Tagiau a neilltuwyd",connectioninformation:"Gwybodaeth cysylltiad",serverurl:"URL y gweinydd",servername:"Enw'r gweinydd",login:"Mewngofnodi",logout:"Allgofnodi",password:"Cyfrinair",logoutmessage:"Ydych chi’n siŵr eich bod eisiau allgofnodi?",loginerror:"Methu mewngofnodi.",accessibletologgedinusers:"Mae'r dudalen hon ar gael i ddefnyddwyr sydd wedi mewngofnodi yn unig.",export:"Allforio",exportvideo:"Allforio fideo",exportpng:"Allforio delwedd",exportdonotclosewindowhint:"Peidiwch â chau'r ffenestr hon, bydd y ffeil yn cael ei lawrlwytho'n awtomatig.",exportencodingfile:"Wrthi'n amgodio'r ffeil fideo...",exportrecordingframes:"Wrthi'n cofnodi fframiau...",histogram:"Histogram",timeline:"Llinell amser",exportwidth:"Lled",exportmargin:"Ymylon",exportgap:"Bwlch",exportgrahpheight:"Uchder y graff",videoquality:"Ansawdd fideo",imagecompression:"Cywasgu delwedd",theme:"Thema",light:"Golau",dark:"Tywyll",foldermayhavefiles:"Ffolder ar gyfer ffeiliau",foldermayhavesubfolders:"Ffolder ar gyfer is-ffolderi"}},de:{translation:{moreoptions:"Mehr Optionen",delete:"Löschen",create:"Erstellen",createfolder:"Einen Ordner erstellen",createsubfolder:"Einen Unterordner erstellen",subfolder:"Unterordner",display:"Anzeige",syncanalyses:"Analysen synchronisieren",uploadedby:"Hochgeladen von",uploadeddat:"Hochgeladen am",overviewofyourfolders:"Übersicht Ihrer Ordner",content:"Inhalt",palette:"Palette",loading:"Loading",config:"Paramètres",layout_simple:"Einfaches Layout",layout_advanced:"Analyse-Layout",layout_nogui:"Kein GUI",layout_lesson:"Lektions-Layout",share:"Teilen",fileloadingerror:"Fehler beim Laden der Datei",embedhint:"Um diesen Block in eine andere Website einzubetten, verwenden Sie den folgenden Code:",embedlibrary:"Bibliothek einfügen – einmal im HTML-Head",embedcomponent:"Verwenden Sie den folgenden Code überall im HTML-Body",copy:"Kopieren",remotefoldersbrowseraddfolderhint:"Wenn Sie einen weiteren Ordner im Repository hinzufügen, werden Ihnen hier zusätzliche Auswertungsmöglichkeiten angezeigt.",temperature:"Temperatur",upload:"Hochladen",uploadafile:"Datei hochladen",selectfile:"Datei auswählen",addfiles:"Datei(en) hinzufügen",clear:"Löschen",dragorselectfile:"Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",analysissync:"Analysen synchronisieren",file:"Datei",detail:"Detail",showeverything:"Alles anzeigen",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",open:"Öffnen",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",togglevisibleimage:"IR/VIS-Bild umschalten",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"- Einzelne Dateien",downloadoriginalfileshint:"Laden Sie alle Original-IR-Dateien herunter",downloadoriginalfile:"- Original-IR-Datei {{type}}",exportcurrentframeaspng:"- Aktuelles Bild",convertentiresequencetovideo:"- Gesamte Sequenz in Video umwandeln",pngofindividualimages:"- Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"- Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"- Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",exportimagewidth:"Exportierte Bildbreite",exportimagefontsize:"Exportierte Bildschriftgröße",exportgroupname:"Exportgruppenname",exportfilenames:"Dateinamen exportieren",exportdimensions:"Exportabmessungen",exportgroup:"Gruppe exportieren",exportcontent:"Inhalt exportieren",numberofcolumns:"Anzahl der Spalten",thermalscale:"Thermische Skala",thermalrange:"Temperaturbereich",analyses:"Analysen",filedate:"Dateidatum",folder:"Ordner",folders:"Ordner",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <thermal-btn variant='background' interactive='false' tooltip='Sie finden sie in der obigen Tabelle...'>Wert</thermal-btn> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner",server:"Server",networklog:"Netzwerkprotokoll",editfile:"Datei bearbeiten",editfolder:"Ordner bearbeiten",editcomment:"Kommentar bearbeiten",user:"Benutzer",griddisplay:"Als Raster anzeigen",tabledisplay:"Als Tabelle anzeigen",deletefile:"Datei löschen",deletefolder:"Ordner löschen",comments:"Kommentare",deletecomment:"Kommentar löschen",savecomment:"Kommentar speichern",addcomment:"Kommentar hinzufügen",nocomments:"Keine Kommentare",savechanges:"Änderungen speichern",uploadfile:"Datei hochladen",compactview:"Kompaktansicht",showdiscussion:"Diskussion anzeigen",edittags:"Tags bearbeiten",availabletags:"Verfügbare Tags",assignedtags:"Zugewiesene Tags",connectioninformation:"Verbindungsinformationen",serverurl:"Server-URL",servername:"Servername",login:"Anmelden",logout:"Abmelden",password:"Passwort",logoutmessage:"Möchten Sie sich wirklich abmelden?",loginerror:"Anmeldung nicht möglich.",accessibletologgedinusers:"Diese Seite ist nur für angemeldete Benutzer zugänglich.",export:"Export",exportvideo:"Video exportieren",exportpng:"Bild exportieren",exportdonotclosewindowhint:"Schließen Sie dieses Fenster nicht, die Datei wird automatisch heruntergeladen.",exportencodingfile:"Videodatei wird kodiert...",exportrecordingframes:"Frames werden aufgezeichnet...",histogram:"Histogramm",timeline:"Zeitleiste",exportwidth:"Breite",exportmargin:"Ränder",exportgap:"Abstand",exportgrahpheight:"Grafikhöhe",videoquality:"Videoqualität",imagecompression:"Bildkompression",theme:"Design",light:"Hell",dark:"Dunkel",foldermayhavefiles:"Ordner für Dateien",foldermayhavesubfolders:"Ordner für Unterordner"}},en:{translation:{moreoptions:"More options",delete:"Delete",create:"Create",createfolder:"Create a folder",createsubfolder:"Create a subfolder",subfolder:"Subfolder",display:"Display",syncanalyses:"Synchronise analyses",uploadedby:"Uploaded by",uploadeddat:"Uploaded at",overviewofyourfolders:"Overview of your folders",content:"Content",palette:"Palette",layout_simple:"Simple layout",layout_advanced:"Evaluation layout",layout_nogui:"No GUI",layout_lesson:"Lesson layout",share:"Share",fileloadingerror:"File loading error",embedhint:"To embed this block in another website, use the following code:",embedlibrary:"Insert the library - once in HTML head",embedcomponent:"Use the following code anywhere in HTML body",copy:"Copy",remotefoldersbrowseraddfolderhint:"If you add another folder in the storage, you will see additional evaluation options here.",loading:"Loading",config:"Settings",temperature:"Temperature",file:"File",upload:"Upload",uploadafile:"Upload a file",selectfile:"Select a file",addfiles:"Add file(s)",clear:"Clear",dragorselectfile:"Drag and drop an LRC file or select it from disk",detail:"Detail",showeverything:"Show everything",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",open:"Open",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automatic range",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",togglevisibleimage:"Switch IR / VIS image",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"- individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"- Original thermal file {{type}}",exportcurrentframeaspng:"- Current frame",convertentiresequencetovideo:"- Convert entire sequence to video",pngofindividualimages:"- individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"- group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"- analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",exportimagewidth:"Exported image width",exportimagefontsize:"Exported image font size",exportgroupname:"Export group name",exportfilenames:"Export file names",exportdimensions:"Export dimensions",exportgroup:"Export group",exportcontent:"Export content",numberofcolumns:"Number of columns",thermalscale:"Thermal scale",thermalrange:"Thermal range",filedate:"File date",folder:"Folder",folders:"Folders",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",analyses:"Analyses",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <thermal-btn variant='background' interactive='false' tooltip='You can see them in the table above...'>value</thermal-btn> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",analysissync:"Synchronise analyses",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser",server:"Server",networklog:"Network Log",editfile:"Edit File",editfolder:"Edit Folder",editcomment:"Edit Comment",user:"User",griddisplay:"Grid display",tabledisplay:"Table display",deletefile:"Delete File",deletefolder:"Delete Folder",comments:"Comments",deletecomment:"Delete Comment",savecomment:"Save Comment",addcomment:"Add Comment",nocomments:"No comments",savechanges:"Save Changes",uploadfile:"Upload File",compactview:"Compact View",showdiscussion:"Show Discussion",edittags:"Edit Tags",availabletags:"Available Tags",assignedtags:"Assigned Tags",connectioninformation:"Connection Information",serverurl:"Server URL",servername:"Server Name",login:"Login",logout:"Logout",password:"Password",logoutmessage:"Are you sure you want to log out?",loginerror:"Unable to log in.",accessibletologgedinusers:"This page is accessible only to logged-in users.",export:"Export",exportvideo:"Export Video",exportpng:"Export Image",exportdonotclosewindowhint:"Do not close this window, the file will download automatically.",exportencodingfile:"Encoding video file...",exportrecordingframes:"Recording frames...",histogram:"Histogram",timeline:"Timeline",exportwidth:"Width",exportmargin:"Margins",exportgap:"Gap",exportgrahpheight:"Graph height",videoquality:"Video quality",imagecompression:"Image compression",theme:"Theme",light:"Light",dark:"Dark",foldermayhavefiles:"Folder for files",foldermayhavesubfolders:"Folder for subfolders"}},fr:{translation:{moreoptions:"Plus d'options",delete:"Supprimer",create:"Créer",createfolder:"Créer un dossier",createsubfolder:"Créer un sous-dossier",subfolder:"Sous-dossier",display:"Affichage",syncanalyses:"Synchroniser les analyses",uploadedby:"Téléversé par",uploadeddat:"Téléversé le",overviewofyourfolders:"Aperçu de vos dossiers",content:"Contenu",palette:"Palette",loading:"Chargement",config:"Einstellungen",temperature:"Temperature",upload:"Téléverser",uploadafile:"Téléverser un fichier",selectfile:"Sélectionner un fichier",addfiles:"Ajouter un/des fichier(s)",clear:"Effacer",dragorselectfile:"Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",share:"Partager",fileloadingerror:"Erreur de chargement du fichier",embedhint:"Pour intégrer ce bloc dans un autre site Web, utilisez le code suivant :",embedlibrary:"Insérez la bibliothèque – une seule fois dans l'en-tête HTML",embedcomponent:"Utilisez le code suivant n'importe où dans le corps HTML",copy:"Copier",remotefoldersbrowseraddfolderhint:"Si vous ajoutez un autre dossier dans le référentiel, vous verrez ici des options d'évaluation supplémentaires.",file:"fichier",detail:"Détail",showeverything:"Montrer tout",analysissync:"Synchroniser les analyses",layout_simple:"Disposition simple",layout_advanced:"Disposition d'analyse",layout_nogui:"Pas d'interface graphique",layout_lesson:"Disposition de leçon",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",open:"Ouvrir",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",togglevisibleimage:"Commuter l'image IR / VIS",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"- fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"- Fichier thermique original {{type}}",exportcurrentframeaspng:"- Cadre actuel en tant qu'image",convertentiresequencetovideo:"- Convertir la séquence entière en vidéo",pngofindividualimages:"- fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"- groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"- données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",exportimagewidth:"Largeur de l'image exportée",exportimagefontsize:"Taille de la police de l'image exportée",exportgroupname:"Nom du groupe exporté",exportfilenames:"Noms de fichiers exportés",exportdimensions:"Dimensions d'exportation",exportgroup:"Exporter le groupe",exportcontent:"Exporter le contenu",numberofcolumns:"Nombre de colonnes",thermalscale:"Échelle thermique",thermalrange:"Plage thermique",analyses:"Analyses",filedate:"Date du fichier",folder:"Dossier",folders:"Dossiers",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <thermal-btn variant='background' interactive='false' tooltip='Vous pouvez les voir dans le tableau ci-dessus...'>valeur</thermal-btn> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants",server:"Serveur",networklog:"Journal réseau",editfile:"Modifier le fichier",editfolder:"Modifier le dossier",editcomment:"Modifier le commentaire",user:"Utilisateur",griddisplay:"Afficher en grille",tabledisplay:"Afficher en tableau",deletefile:"Supprimer le fichier",deletefolder:"Supprimer le dossier",comments:"Commentaires",deletecomment:"Supprimer le commentaire",savecomment:"Enregistrer le commentaire",addcomment:"Ajouter un commentaire",nocomments:"Aucun commentaire",savechanges:"Enregistrer les modifications",uploadfile:"Téléverser un fichier",compactview:"Vue compacte",showdiscussion:"Afficher la discussion",edittags:"Modifier les tags",assignedtags:"Tags assignés",availabletags:"Tags disponibles",connectioninformation:"Informations de connexion",serverurl:"URL du serveur",servername:"Nom du serveur",login:"Connexion",logout:"Déconnexion",password:"Mot de passe",logoutmessage:"Êtes-vous sûr de vouloir vous déconnecter ?",loginerror:"Impossible de se connecter.",accessibletologgedinusers:"Cette page est accessible uniquement aux utilisateurs connectés.",export:"Exporter",exportvideo:"Exporter la vidéo",exportpng:"Exporter l'image",exportdonotclosewindowhint:"Ne fermez pas cette fenêtre, le fichier sera téléchargé automatiquement.",exportencodingfile:"Encodage du fichier vidéo...",exportrecordingframes:"Enregistrement des images...",histogram:"Histogramme",timeline:"Chronologie",exportwidth:"Largeur",exportmargin:"Marges",exportgap:"Espace",exportgrahpheight:"Hauteur du graphique",videoquality:"Qualité vidéo",imagecompression:"Compression d'image",theme:"Thème",light:"Clair",dark:"Sombre",foldermayhavefiles:"Dossier pour les fichiers",foldermayhavesubfolders:"Dossier pour les sous-dossiers"}}}}),window.i18next=re,window.matchMedia("(prefers-color-scheme: dark)");const Iw=fc.toString().replaceAll(".","-"),Uw=e=>`labirthermal__${e}__${Iw}`,zw=(e,t)=>{if(!(e=>null!==document.getElementById(Uw(e)))(e)){const i=document.createElement("style");i.setAttribute("id",Uw(e)),i.innerHTML=t,document.head.appendChild(i)}};console.info(gc,fc),zw("rootVariables","\n\n        :root {\n\n            /** Colors */\n            --thermal-foreground: black;\n            --thermal-background: white;\n\n            /** Primary - base */\n            --thermal-primary-base: blue;\n            --thermal-primary-base-dark: navy;\n            --thermal-primary-base-light: lightblue;\n\n            /** Primary */\n            --thermal-primary: var( --thermal-primary-base );\n            --thermal-primary-light: var( --thermal-primary-base-light );\n            --thermal-primary-dark: var( --thermal-primary-base-dark );\n\n            /** Slate -base */\n            --thermal-slate-base: #8e8c8f;\n            --thermal-slate-base-light: #dad7db;\n            --thermal-slate-base-dark: #49474a;\n\n            /** Slate */\n            --thermal-slate: var( --thermal-slate-base );\n            --thermal-slate-light: var( --thermal-slate-base-light );\n            --thermal-slate-dark: var( --thermal-slate-base-dark );\n\n            /** Gaps */\n            --thermal-gap-base: 16px;\n            --thermal-gap-sm: 17px;\n            --thermal-gap-md: 18px;\n            --thermal-gap-lg: 19px;\n            --thermal-gap-xl: 20px; \n            --thermal-gap: var( --thermal-gap-base );\n\n            /** Font sizes */\n            --thermal-fs-base: 16px;\n            --thermal-fs-sm: 16px;\n            --thermal-fs-md: 16px;\n            --thermal-fs-lg: 16px;\n            --thermal-fs-xl: 16px; \n            --thermal-fs: var( --thermal-fs-base );\n            --thermal-fs-small: calc( var( --thermal-fs ) * 0.9 );\n            --thermal-fs-large: calc( var( --thermal-fs ) * 1.2 );\n\n            /** Round corners */\n            --thermal-radius-base: 5px;\n            --thermal-radius-sm: 6px;\n            --thermal-radius-md: 7px;\n            --thermal-radius-lg: 8px;\n            --thermal-radius-xl: 9px;\n            --thermal-radius: var( --thermal-radius-base );\n\n            /** Shadows */\n            --thermal-shadow: 0px 0px 5px var( --thermal-slate-dark );\n            --thermal-shadow-none: 0px 0px 0px transparent;\n\n            --thermal-border-width: 1px;\n            --thermal-border-style: solid;\n        \n        }\n\n        :root {\n        \n            @media ( min-width: 640px ) {\n                --thermal-gap: var( --thermal-gap-sm );\n                --thermal-fs: var( --thermal-fs-sm );\n                --thermal-radius: var( --thermal-radius-sm );\n            }\n\n            @media ( min-width: 960px ) {\n                --thermal-gap: var( --thermal-gap-md );\n                --thermal-fs: var( --thermal-fs-md );\n                --thermal-radius: var( --thermal-radius-md );\n            }\n            \n            @media ( min-width: 1250px ) {\n                --thermal-gap: var( --thermal-gap-lg );\n                --thermal-fs: var( --thermal-fs-lg );\n                --thermal-radius: var( --thermal-radius-lg );\n            }\n\n            @media ( min-width: 1440px ) {\n                --thermal-gap: var( --thermal-gap-xl );\n                --thermal-fs: var( --thermal-fs-xl );\n                --thermal-radius: var( --thermal-radius-xl );\n            }\n        \n        }\n\n\n            \n        \n        "),zw("darkModeOverrides","\n        \n            body.thermal-dark-mode {\n\n                --thermal-primary: aqua;\n                --thermal-foreground: white;\n                --thermal-background: black;\n            \n                --thermal-primary-light: var( --thermal-primary-base-dark );\n                --thermal-primary-dark: var( --thermal-primary-base-light );\n\n                --thermal-slate-light: var( --thermal-slate-base-dark );\n                --thermal-slate-dark: var( --thermal-slate-base-light );\n            \n            }\n            \n        "),zw("solarizedSkin",'*[skin="solarized"] {\n--thermal-foreground: #cef0faff;\n--thermal-background: #1d5766ff;\n\n--thermal-slate-dark: #39aaa1ff;\n--thermal-slate: #27888bff;\n--thermal-slate-light: #073642;\n\n--thermal-primary-dark: #defdffff;\n--thermal-primary: #9de9f3ff;\n--thermal-primary-light: #67bcddff;\n}'),zw("systemSkin",'*[skin="system"] {\n--thermal-foreground: buttontext;\n--thermal-background: field;\n        \n--thermal-slate: ButtonBorder;\n--thermal-slate-dark: GrayText;\n--thermal-slate-light: ButtonFace;\n\n--thermal-primary: accentcolor;\n--thermal-primary-dark: linktext;\n--thermal-primary-light: selecteditem;\n}'),zw("darkSkin",'*[skin="dark"] {\n--thermal-primary: aqua;\n--thermal-foreground: white;\n--thermal-background: black;\n\n--thermal-primary-light: var( --thermal-primary-base-dark );\n--thermal-primary-dark: var( --thermal-primary-base-light );\n\n--thermal-slate-light: var( --thermal-slate-base-dark );\n--thermal-slate-dark: var( --thermal-slate-base-light );\n}'),zw("darkHC",'*[skin="darkhc"] {\n--thermal-foreground: black;\n--thermal-background: white;\n        \n--thermal-slate: gray;\n--thermal-slate-dark: #454545;\n--thermal-slate-light: lightgray;\n\n--thermal-primary: blue;\n--thermal-primary-dark: navy;\n--thermal-primary-light: lightblue;\n\n}'),zw("narrowCorners",'*[corners="narrow"] {\n--thermal-radius: 0px;\n'),zw("lineStyles",'*[lines="big"] {\n--thermal-border-width: 3px;\n'),(e=>{for(const[t,i]of Object.entries(e))lw(t,i)})(nw),console.info(gc,fc,"All webcomponents defined.")}();
