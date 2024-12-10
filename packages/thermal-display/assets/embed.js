var yu=Object.defineProperty;var vu=(r,e,t)=>e in r?yu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(vu(r,typeof e!="symbol"?e+"":e,t),t);const ho="1.2.61",bu="Jan Jáchim <jachim5@gmail.com>",Se=r=>typeof r=="string",us=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},wl=r=>r==null?"":""+r,wu=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},xu=/###/g,xl=r=>r&&r.indexOf("###")>-1?r.replace(xu,"."):r,Sl=r=>!r||Se(r),ys=(r,e,t)=>{const i=Se(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Sl(r))return{};const n=xl(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return Sl(r)?{}:{obj:r,k:xl(i[s])}},$l=(r,e,t)=>{const{obj:i,k:s}=ys(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=ys(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=ys(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Su=(r,e,t,i)=>{const{obj:s,k:n}=ys(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Sn=(r,e)=>{const{obj:t,k:i}=ys(r,e);if(t)return t[i]},$u=(r,e,t)=>{const i=Sn(r,t);return i!==void 0?i:Sn(e,t)},$h=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Se(r[i])||r[i]instanceof String||Se(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):$h(r[i],e[i],t):r[i]=e[i]);return r},Li=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var _u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Cu=r=>Se(r)?r.replace(/[&<>"'\/]/g,e=>_u[e]):r;class Pu{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const ku=[" ",",","?","!",";"],Au=new Pu(20),Ou=(r,e,t)=>{e=e||"",t=t||"";const i=ku.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=Au.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Xa=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return r[e];const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},$n=r=>r==null?void 0:r.replace("_","-"),Eu={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class _n{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Eu,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Se(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new _n(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new _n(this.logger,e)}}var Ar=new _n;class Hn{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class _l extends Hn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Se(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Sn(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Se(i)?l:Xa((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),$l(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Se(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Sn(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?$h(l,i,n):l={...l,...i},$l(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var _h={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const Cl={};class Cn extends Hn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),wu(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ar.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Ou(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Se(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Se(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const z=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${z}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${z}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let f=d==null?void 0:d.res;const b=(d==null?void 0:d.usedKey)||a,v=(d==null?void 0:d.exactUsedKey)||a,w=Object.prototype.toString.apply(f),$=["[object Number]","[object Function]","[object RegExp]"],W=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,A=!this.i18nFormat||this.i18nFormat.handleAsObject,N=!Se(f)&&typeof f!="boolean"&&typeof f!="number";if(A&&f&&N&&$.indexOf(w)<0&&!(Se(W)&&Array.isArray(f))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const z=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,f,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(d.res=z,d.usedParams=this.getUsedParamsDetails(t),d):z}if(n){const z=Array.isArray(f),T=z?[]:{},Z=z?v:b;for(const S in f)if(Object.prototype.hasOwnProperty.call(f,S)){const C=`${Z}${n}${S}`;T[S]=this.translate(C,{...t,joinArrays:!1,ns:o}),T[S]===C&&(T[S]=f[S])}f=T}}else if(A&&Se(W)&&Array.isArray(f))f=f.join(W),f&&(f=this.extendTranslation(f,e,t,i));else{let z=!1,T=!1;const Z=t.count!==void 0&&!Se(t.count),S=Cn.hasDefaultValue(t),C=Z?this.pluralResolver.getSuffix(h,t.count,t):"",R=t.ordinal&&Z?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",O=Z&&!t.ordinal&&t.count===0,B=O&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${C}`]||t[`defaultValue${R}`]||t.defaultValue;!this.isValidLookup(f)&&S&&(z=!0,f=B),this.isValidLookup(f)||(T=!0,f=a);const U=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:f,k=S&&B!==f&&this.options.updateMissing;if(T||z||k){if(this.logger.log(k?"updateKey":"missingKey",h,l,a,k?B:f),n){const re=this.resolve(a,{...t,keySeparator:!1});re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Y=[];const ae=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ae&&ae[0])for(let re=0;re<ae.length;re++)Y.push(ae[re]);else this.options.saveMissingTo==="all"?Y=this.languageUtils.toResolveHierarchy(t.lng||this.language):Y.push(t.lng||this.language);const se=(re,ke,Pe)=>{var st;const Ze=S&&Pe!==f?Pe:U;this.options.missingKeyHandler?this.options.missingKeyHandler(re,l,ke,Ze,k,t):(st=this.backendConnector)!=null&&st.saveMissing&&this.backendConnector.saveMissing(re,l,ke,Ze,k,t),this.emit("missingKey",re,l,ke,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&Z?Y.forEach(re=>{const ke=this.pluralResolver.getSuffixes(re,t);O&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ke.indexOf(`${this.options.pluralSeparator}zero`)<0&&ke.push(`${this.options.pluralSeparator}zero`),ke.forEach(Pe=>{se([re],a+Pe,t[`defaultValue${Pe}`]||B)})}):se(Y,a,B))}f=this.extendTranslation(f,e,t,d,i),T&&f===a&&this.options.appendNamespaceToMissingKey&&(f=`${l}:${a}`),(T||z)&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,z?f:void 0))}return s?(d.res=f,d.usedParams=this.getUsedParamsDetails(t),d):f}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=Se(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(d){const v=e.match(this.interpolator.nestingRegexp);f=v&&v.length}let b=i.replace&&!Se(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),e=this.interpolator.interpolate(e,b,i.lng||this.language||s.usedLng,i),d){const v=e.match(this.interpolator.nestingRegexp),w=v&&v.length;f<w&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var v=arguments.length,w=new Array(v),$=0;$<v;$++)w[$]=arguments[$];return(n==null?void 0:n[0])===w[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${t[0]}`),null):a.translate(...w,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Se(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=_h.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Se(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let d=h.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const f=t.count!==void 0&&!Se(t.count),b=f&&!t.ordinal&&t.count===0,v=t.context!==void 0&&(Se(t.context)||typeof t.context=="number")&&t.context!=="",w=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach($=>{var W,A;this.isValidLookup(i)||(o=$,!Cl[`${w[0]}-${$}`]&&((W=this.utils)!=null&&W.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(o))&&(Cl[`${w[0]}-${$}`]=!0,this.logger.warn(`key "${s}" for languages "${w.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(N=>{var Z;if(this.isValidLookup(i))return;a=N;const z=[u];if((Z=this.i18nFormat)!=null&&Z.addLookupKeys)this.i18nFormat.addLookupKeys(z,u,N,$,t);else{let S;f&&(S=this.pluralResolver.getSuffix(N,t.count,t));const C=`${this.options.pluralSeparator}zero`,R=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(z.push(u+S),t.ordinal&&S.indexOf(R)===0&&z.push(u+S.replace(R,this.options.pluralSeparator)),b&&z.push(u+C)),v){const O=`${u}${this.options.contextSeparator}${t.context}`;z.push(O),f&&(z.push(O+S),t.ordinal&&S.indexOf(R)===0&&z.push(O+S.replace(R,this.options.pluralSeparator)),b&&z.push(O+C))}}let T;for(;T=z.pop();)this.isValidLookup(i)||(n=T,i=this.getResource(N,$,T,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Se(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class Pl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ar.create("languageUtils")}getScriptPartFromCode(e){if(e=$n(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=$n(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Se(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Se(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Se(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Se(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const kl={zero:0,one:1,two:2,few:3,many:4,other:5},Al={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Lu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Ar.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=$n(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Al;if(!e.match(/-|_/))return Al;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>kl[s]-kl[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Ol=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=$u(r,e,t);return!n&&s&&Se(t)&&(n=Xa(r,t,i),n===void 0&&(n=Xa(e,t,i))),n},Fa=r=>r.replace(/\$/g,"$$$$");class Ru{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ar.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:f,nestingPrefixEscaped:b,nestingSuffix:v,nestingSuffixEscaped:w,nestingOptionsSeparator:$,maxReplaces:W,alwaysFormat:A}=e.interpolation;this.escape=t!==void 0?t:Cu,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Li(n):a||"{{",this.suffix=o?Li(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=f?Li(f):b||Li("$t("),this.nestingSuffix=v?Li(v):w||Li(")"),this.nestingOptionsSeparator=$||",",this.maxReplaces=W||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var b;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=v=>{if(v.indexOf(this.formatSeparator)<0){const A=Ol(t,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...s,...t,interpolationkey:v}):A}const w=v.split(this.formatSeparator),$=w.shift().trim(),W=w.join(this.formatSeparator).trim();return this.format(Ol(t,l,$,this.options.keySeparator,this.options.ignoreJSONStructure),W,i,{...s,...t,interpolationkey:$})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((b=s==null?void 0:s.interpolation)==null?void 0:b.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>Fa(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?Fa(this.escape(v)):Fa(v)}].forEach(v=>{for(o=0;n=v.regex.exec(e);){const w=n[1].trim();if(a=h(w),a===void 0)if(typeof u=="function"){const W=u(e,n,s);a=Se(W)?W:""}else if(s&&Object.prototype.hasOwnProperty.call(s,w))a="";else if(d){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${e}`),a="";else!Se(a)&&!this.useRawValueToEscape&&(a=wl(a));const $=v.safeValue(a);if(e=e.replace(n[0],$),d?(v.regex.lastIndex+=a.length,v.regex.lastIndex-=n[0].length):v.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let f=`{${d[1]}`;l=d[0],f=this.interpolate(f,a);const b=f.match(/'/g),v=f.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!v||v.length%2!==0)&&(f=f.replace(/'/g,'"'));try{a=JSON.parse(f),h&&(a={...h,...a})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${u}${f}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Se(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Se(n))return n;Se(n)||(n=wl(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Du=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},Ri=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r($n(i),s),e[a]=o),o(t)}};class Tu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ar.create("formatter"),this.options=e,this.formats={number:Ri((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:Ri((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:Ri((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:Ri((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:Ri((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ri(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var d;const{formatName:h,formatOptions:u}=Du(l);if(this.formats[h]){let f=o;try{const b=((d=s==null?void 0:s.formatParams)==null?void 0:d[s.interpolationkey])||{},v=b.locale||b.lng||s.locale||s.lng||i;f=this.formats[h](o,v,{...u,...s,...b})}catch(b){this.logger.warn(b)}return f}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Iu=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Mu extends Hn{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Ar.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(d=>{const f=`${h}|${d}`;!i.reload&&this.store.hasResourceBundle(h,d)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?a[f]===void 0&&(a[f]=!0):(this.state[f]=1,u=!1,a[f]===void 0&&(a[f]=!0),n[f]===void 0&&(n[f]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Su(l.loaded,[n],a),Iu(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(d=>{o[h][d]===void 0&&(o[h][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Se(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Se(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,d,f;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((f=this.backend)!=null&&f.create){const b={...a,isUpdate:n},v=this.backend.create.bind(this.backend);if(v.length<6)try{let w;v.length===5?w=v(e,t,i,s,b):w=v(e,t,i,s),w&&typeof w.then=="function"?w.then($=>o(null,$)).catch(o):o(null,w)}catch(w){o(w)}else v(e,t,i,s,o,b)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const El=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Se(r[1])&&(e.defaultValue=r[1]),Se(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ll=r=>{var e,t;return Se(r.ns)&&(r.ns=[r.ns]),Se(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Se(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},dn=()=>{},Uu=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Ss extends Hn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ll(e),this.services={},this.logger=Ar,this.modules={external:[]},Uu(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(Se(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=El();this.options={...s,...this.options,...Ll(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Ar.init(n(this.modules.logger),this.options):Ar.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=Tu;const d=new Pl(this.options);this.store=new _l(this.options.resources,this.options);const f=this.services;f.logger=Ar,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new Lu(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(f.formatter=n(u),f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new Ru(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new Mu(n(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",function(b){for(var v=arguments.length,w=new Array(v>1?v-1:0),$=1;$<v;$++)w[$-1]=arguments[$];e.emit(b,...w)}),this.modules.languageDetector&&(f.languageDetector=n(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=n(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Cn(this.services,this.options),this.translator.on("*",function(b){for(var v=arguments.length,w=new Array(v>1?v-1:0),$=1;$<v;$++)w[$-1]=arguments[$];e.emit(b,...w)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=dn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=us(),h=()=>{const u=(d,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(f),i(d,f)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dn;const s=Se(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=us();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=dn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&_h.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=us();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Se(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,h)),this.loadResources(h,f=>{a(f,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),d=2;d<h;d++)u[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const f=s.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(v=>`${l.keyPrefix}${f}${v}`):b=l.keyPrefix?`${l.keyPrefix}${f}${a}`:a,s.t(b,l)};return Se(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=us();return this.options.ns?(Se(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=us();Se(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new Pl(El());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Ss(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Ss(s);return(e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i&&(n.store=new _l(this.store.data,s),n.services.resourceStore=n.store),n.translator=new Cn(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const bt=Ss.createInstance();bt.createInstance=Ss.createInstance;bt.createInstance;bt.dir;bt.init;bt.loadResources;bt.reloadResources;bt.use;bt.changeLanguage;bt.getFixedT;const L=bt.t;bt.exists;bt.setDefaultNamespace;bt.hasLoadedNamespace;bt.loadNamespaces;bt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=globalThis,Pn=vs.trustedTypes,Rl=Pn?Pn.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ch="$lit$",ri=`lit$${Math.random().toFixed(9).slice(2)}$`,Ph="?"+ri,Fu=`<${Ph}>`,$i=document,$s=()=>$i.createComment(""),_s=r=>r===null||typeof r!="object"&&typeof r!="function",kh=Array.isArray,Nu=r=>kh(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Na=`[ 	
\f\r]`,ds=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dl=/-->/g,Tl=/>/g,wi=RegExp(`>|${Na}(?:([^\\s"'>=/]+)(${Na}*=${Na}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Il=/'/g,Ml=/"/g,Ah=/^(?:script|style|textarea|title)$/i,zu=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),x=zu(1),ni=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Ul=new WeakMap,Si=$i.createTreeWalker($i,129);function Oh(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rl!==void 0?Rl.createHTML(e):e}const ju=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=ds;for(let o=0;o<t;o++){const l=r[o];let h,u,d=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===ds?u[1]==="!--"?a=Dl:u[1]!==void 0?a=Tl:u[2]!==void 0?(Ah.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=wi):u[3]!==void 0&&(a=wi):a===wi?u[0]===">"?(a=s??ds,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?wi:u[3]==='"'?Ml:Il):a===Ml||a===Il?a=wi:a===Dl||a===Tl?a=ds:(a=wi,s=void 0);const b=a===wi&&r[o+1].startsWith("/>")?" ":"";n+=a===ds?l+Fu:d>=0?(i.push(h),l.slice(0,d)+Ch+l.slice(d)+ri+b):l+ri+(d===-2?o:b)}return[Oh(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};let Ka=class Eh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=ju(e,t);if(this.el=Eh.createElement(h,i),Si.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Si.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Ch)){const f=u[a++],b=s.getAttribute(d).split(ri),v=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:v[2],strings:b,ctor:v[1]==="."?Hu:v[1]==="?"?Wu:v[1]==="@"?Gu:Wn}),s.removeAttribute(d)}else d.startsWith(ri)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(Ah.test(s.tagName)){const d=s.textContent.split(ri),f=d.length-1;if(f>0){s.textContent=Pn?Pn.emptyScript:"";for(let b=0;b<f;b++)s.append(d[b],$s()),Si.nextNode(),l.push({type:2,index:++n});s.append(d[f],$s())}}}else if(s.nodeType===8)if(s.data===Ph)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(ri,d+1))!==-1;)l.push({type:7,index:n}),d+=ri.length-1}n++}}static createElement(e,t){const i=$i.createElement("template");return i.innerHTML=e,i}};function Fi(r,e,t=r,i){var a,o;if(e===ni)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=_s(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Fi(r,s._$AS(r,e.values),s,i)),e}let Bu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??$i).importNode(t,!0);Si.currentNode=s;let n=Si.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Us(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Vu(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=Si.nextNode(),a++)}return Si.currentNode=$i,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class Us{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Fi(this,e,t),_s(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==ni&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nu(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==j&&_s(this._$AH)?this._$AA.nextSibling.data=e:this.T($i.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ka.createElement(Oh(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Bu(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Ul.get(e.strings);return t===void 0&&Ul.set(e.strings,t=new Ka(e)),t}k(e){kh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Us(this.S($s()),this.S($s()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let Wn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Fi(this,e,t,0),a=!_s(e)||e!==this._$AH&&e!==ni,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Fi(this,o[i+l],t,l),h===ni&&(h=this._$AH[l]),a||(a=!_s(h)||h!==this._$AH[l]),h===j?e=j:e!==j&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Hu=class extends Wn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}};class Wu extends Wn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class Gu extends Wn{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Fi(this,e,t,0)??j)===ni)return;const i=this._$AH,s=e===j&&i!==j||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==j&&(i===j||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let Vu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Fi(this,e)}};const za=vs.litHtmlPolyfillSupport;za==null||za(Ka,Us),(vs.litHtmlVersions??(vs.litHtmlVersions=[])).push("3.1.4");const Yu=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Us(e.insertBefore($s(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qu=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ur={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gn=r=>(...e)=>({_$litDirective$:r,values:e});let co=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),bs(s,e);return!0},kn=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Lh=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Zu(e)}};function Xu(r){this._$AN!==void 0?(kn(this),this._$AM=r,Lh(this)):this._$AM=r}function Ku(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)bs(i[n],!1),kn(i[n]);else i!=null&&(bs(i,!1),kn(i));else bs(this,r)}const Zu=r=>{r.type==Ur.CHILD&&(r._$AP??(r._$AP=Ku),r._$AQ??(r._$AQ=Xu))};let Qu=class extends co{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Lh(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(bs(this,e),kn(this))}setValue(e){if(qu(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Fl=null,Rh=()=>{};new Promise(r=>{Rh=r});const Ju={type:"3rdParty",init(r){ed(r)}},ed=r=>{Fl=r,Rh(Fl)},Nl=new Map,td=()=>{Nl.forEach((r,e)=>{(e.isConnected===!1||rd(e)===!1)&&Nl.delete(e)})};setInterval(td,1e4);const rd=r=>{const e=r.part;if(e.type===Ur.ATTRIBUTE)return e.element.isConnected;if(e.type===Ur.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===Ur.PROPERTY||e.type===Ur.BOOLEAN_ATTRIBUTE||e.type===Ur.EVENT||e.type===Ur.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:id,forEach:sd}=[];function nd(r){return sd.call(id.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const zl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,ad=(r,e,t)=>{const i=t||{};i.path=i.path||"/";const s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!zl.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!zl.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},jl={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=ad(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var od={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return jl.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&jl.create(t,r,i,s,n)}},ld={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let ps=null;const Bl=()=>{if(ps!==null)return ps;try{ps=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{ps=!1}return ps};var hd={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Bl())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Bl()&&window.localStorage.setItem(t,r)}};let fs=null;const Hl=()=>{if(fs!==null)return fs;try{fs=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{fs=!1}return fs};var cd={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&Hl())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&Hl()&&window.sessionStorage.setItem(t,r)}},ud={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},dd={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},pd={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},fd={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};function gd(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r}}class Dh{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=nd(t,this.options||{},gd()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(od),this.addDetector(ld),this.addDetector(hd),this.addDetector(cd),this.addDetector(ud),this.addDetector(dd),this.addDetector(pd),this.addDetector(fd)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e,t){t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Dh.type="languageDetector";const md={next:"Next",prev:"Previous",back:"Back",close:"Close",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automaticrange",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visible file name",visiblefileurl:"Visible file URL",visiblefiledownload:"Visible file download",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",download:"Download",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",byday:"by day",byhour:"by hour",byweek:"by week",bymonth:"by month",byyear:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",youfeelwarmer:"You see {{t}} °C on the thermometer, but you feel {{diff}} °C warmer outside.",youfeelcolder:"You see {{t}} °C on the thermometer, but you feel {{diff}} °C colder outside.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette."},yd={next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visible",visiblefileurl:"URL de l'image visible",visiblefiledownload:"Télécharger l'image visible",time:"Temps",duration:"Duration",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Type du fichier",type:"Type",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",download:"Télécharger",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",byday:"par jour",byhour:"par heure",byweek:"par semaine",bymonth:"par mois",byyear:"par année",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Cadre",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes douces",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieur",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieur",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format csv",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",youfeelwarmer:"Vous voyez {{t}} °C sur le thermomètre, mais vous vous sentez {{diff}} °C plus chaud dehors.",youfeelcolder:"Vous voyez {{t}} °C sur le thermomètre, mais vous vous sentez {{diff}} °C plus froid dehors.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette."},vd={next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",byday:"po dnech",byhour:"po hodinách",byweek:"po týdnech",bymonth:"po měsících",byyear:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",youfeelwarmer:"Na teploměru vidíte {{t}} °C, ale venku se cítíte  o {{diff}} °C tepleji.",youfeelcolder:"Na teploměru vidíte {{t}} °C, ale venku se cítíte  o {{diff}} °C chladněji.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety."},bd={next:"Nesaf",prev:"Blaenorol",back:"Yn ol",close:"Cau",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r thermogram ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Amrediad awtomatig",fullrange:"Amrediad llawn",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangosfa thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil IR",thermalfileurl:"URL ffeil IR",thermalfiledownload:"Lawrlwythwch y ffeil IR",visiblefilename:"Enw ffeil weladwy",visiblefileurl:"URL ffeil weladwy",visiblefiledownload:"Lawrlwythwch y ffeil weladwy",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Bytesize",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",download:"Lawrlwythwch",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",range:"Amrediad",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"Group {{era}}",byday:"Grŵp yn ystod y dydd",byhour:"Grŵp fesul awr",byweek:"Grŵp fesul wythnos",bymonth:"Grwpio fesul mis",byyear:"Grŵp yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y thermogram, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",youfeelwarmer:"Rydych chi'n gweld {{t}} °C ar y thermomedr, ond rydych chi'n teimlo'n {{diff}} °C yn gynhesach y tu allan.",youfeelcolder:"Rydych chi'n gweld {{t}} °C ar y thermomedr, ond rydych chi'n teimlo'n {{diff}} °C yn oerach y tu allan.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet."};bt.use(Ju).use(Dh).init({fallbackLng:"en",resources:{en:{translation:md},fr:{translation:yd},cs:{translation:vd},cy:{translation:bd}}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=globalThis,uo=yn.ShadowRoot&&(yn.ShadyCSS===void 0||yn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,po=Symbol(),Wl=new WeakMap;let Th=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==po)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(uo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Wl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Wl.set(t,e))}return e}toString(){return this.cssText}};const wd=r=>new Th(typeof r=="string"?r:r+"",void 0,po),fe=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Th(t,r,po)},xd=(r,e)=>{if(uo)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=yn.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Gl=uo?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return wd(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sd,defineProperty:$d,getOwnPropertyDescriptor:_d,getOwnPropertyNames:Cd,getOwnPropertySymbols:Pd,getPrototypeOf:kd}=Object,ii=globalThis,Vl=ii.trustedTypes,Ad=Vl?Vl.emptyScript:"",ja=ii.reactiveElementPolyfillSupport,ws=(r,e)=>r,An={toAttribute(r,e){switch(e){case Boolean:r=r?Ad:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},fo=(r,e)=>!Sd(r,e),Yl={attribute:!0,type:String,converter:An,reflect:!1,hasChanged:fo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ii.litPropertyMetadata??(ii.litPropertyMetadata=new WeakMap);let Ii=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Yl){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&$d(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=_d(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Yl}static _$Ei(){if(this.hasOwnProperty(ws("elementProperties")))return;const e=kd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ws("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ws("properties"))){const t=this.properties,i=[...Cd(t),...Pd(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Gl(s))}else e!==void 0&&t.push(Gl(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xd(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:An).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:An;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??fo)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Ii.elementStyles=[],Ii.shadowRootOptions={mode:"open"},Ii[ws("elementProperties")]=new Map,Ii[ws("finalized")]=new Map,ja==null||ja({ReactiveElement:Ii}),(ii.reactiveElementVersions??(ii.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let er=class extends Ii{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ni}};var Sh;er._$litElement$=!0,er.finalized=!0,(Sh=globalThis.litElementHydrateSupport)==null||Sh.call(globalThis,{LitElement:er});const Ba=globalThis.litElementPolyfillSupport;Ba==null||Ba({LitElement:er});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Od={attribute:!0,type:String,converter:An,reflect:!1,hasChanged:fo},Ed=(r=Od,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function y(r){return(e,t)=>typeof t=="object"?Ed(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(r){return y({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ld=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pi(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Ld(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Rd={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function pn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function fn(r){return r.toString().indexOf("`")===-1}fn(r=>r``)||fn(r=>r`\0`)||fn(r=>r`\n`)||fn(r=>r`\u0000`);pn``&&pn`\0`&&pn`\n`&&pn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Dd="google#safe";function Td(){if(typeof window<"u")return window.trustedTypes}function Ih(){var r;return(r=Td())!==null&&r!==void 0?r:null}let gn;function Id(){var r,e;if(gn===void 0)try{gn=(e=(r=Ih())===null||r===void 0?void 0:r.createPolicy(Dd,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{gn=null}return gn}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Mh{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function ql(r){var e;const t=r,i=(e=Id())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Mh(t,Rd)}function Md(r){var e;if(!((e=Ih())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Mh)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ud(r,...e){if(e.length===0)return ql(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return ql(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Fd(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Nd(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Fd(e||window);t&&r.setAttribute("nonce",t)}function zd(r,e,t){r.src=Md(e),Nd(r)}/**
 * @license
 * Copyright 2014-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),zd(t,Ud`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Uh(r={}){await jd;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Xl(r){if(await Uh(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Bd(r){return await Uh(),new google.visualization.ChartWrapper({container:r})}function wt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function _i(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const Fh=6048e5,Hd=864e5;let Wd={};function Fs(){return Wd}function Nr(r,e){var o,l,h,u;const t=Fs(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=wt(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function On(r){return Nr(r,{weekStartsOn:1})}function Nh(r){const e=wt(r),t=e.getFullYear(),i=_i(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=On(i),n=_i(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=On(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function En(r){const e=wt(r);return e.setHours(0,0,0,0),e}function Kl(r){const e=wt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Gd(r,e){const t=En(r),i=En(e),s=+t-Kl(t),n=+i-Kl(i);return Math.round((s-n)/Hd)}function Vd(r){const e=Nh(r),t=_i(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),On(t)}function Yd(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function zh(r){if(!Yd(r)&&typeof r!="number")return!1;const e=wt(r);return!isNaN(Number(e))}function jh(r){const e=wt(r);return e.setHours(23,59,59,999),e}function Ln(r){const e=wt(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function Rn(r){const e=wt(r);return e.setDate(1),e.setHours(0,0,0,0),e}function Bh(r){const e=wt(r),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function go(r){const e=wt(r),t=_i(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Hh(r){const e=wt(r);return e.setMinutes(59,59,999),e}function Dn(r,e){var o,l;const t=Fs(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=wt(r),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const qd={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xd=(r,e,t)=>{let i;const s=qd[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ha(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Kd={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Zd={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qd={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Jd={date:Ha({formats:Kd,defaultWidth:"full"}),time:Ha({formats:Zd,defaultWidth:"full"}),dateTime:Ha({formats:Qd,defaultWidth:"full"})},ep={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},tp=(r,e,t,i)=>ep[r];function gs(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const rp={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ip={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},sp={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},np={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ap={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},op={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lp=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},hp={ordinalNumber:lp,era:gs({values:rp,defaultWidth:"wide"}),quarter:gs({values:ip,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gs({values:sp,defaultWidth:"wide"}),day:gs({values:np,defaultWidth:"wide"}),dayPeriod:gs({values:ap,defaultWidth:"wide",formattingValues:op,defaultFormattingWidth:"wide"})};function ms(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?up(o,d=>d.test(a)):cp(o,d=>d.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function cp(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function up(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function dp(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const pp=/^(\d+)(th|st|nd|rd)?/i,fp=/\d+/i,gp={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mp={any:[/^b/i,/^(a|c)/i]},yp={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vp={any:[/1/i,/2/i,/3/i,/4/i]},bp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xp={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Sp={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$p={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},_p={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Cp={ordinalNumber:dp({matchPattern:pp,parsePattern:fp,valueCallback:r=>parseInt(r,10)}),era:ms({matchPatterns:gp,defaultMatchWidth:"wide",parsePatterns:mp,defaultParseWidth:"any"}),quarter:ms({matchPatterns:yp,defaultMatchWidth:"wide",parsePatterns:vp,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ms({matchPatterns:bp,defaultMatchWidth:"wide",parsePatterns:wp,defaultParseWidth:"any"}),day:ms({matchPatterns:xp,defaultMatchWidth:"wide",parsePatterns:Sp,defaultParseWidth:"any"}),dayPeriod:ms({matchPatterns:$p,defaultMatchWidth:"any",parsePatterns:_p,defaultParseWidth:"any"})},Pp={code:"en-US",formatDistance:Xd,formatLong:Jd,formatRelative:tp,localize:hp,match:Cp,options:{weekStartsOn:0,firstWeekContainsDate:1}};function kp(r){const e=wt(r);return Gd(e,go(e))+1}function Ap(r){const e=wt(r),t=+On(e)-+Vd(e);return Math.round(t/Fh)+1}function Wh(r,e){var u,d,f,b;const t=wt(r),i=t.getFullYear(),s=Fs(),n=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(f=s.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,a=_i(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Nr(a,e),l=_i(r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=Nr(l,e);return t.getTime()>=o.getTime()?i+1:t.getTime()>=h.getTime()?i:i-1}function Op(r,e){var o,l,h,u;const t=Fs(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=Wh(r,e),n=_i(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Nr(n,e)}function Ep(r,e){const t=wt(r),i=+Nr(t,e)-+Op(t,e);return Math.round(i/Fh)+1}function Fe(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const ti={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return Fe(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):Fe(t+1,2)},d(r,e){return Fe(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return Fe(r.getHours()%12||12,e.length)},H(r,e){return Fe(r.getHours(),e.length)},m(r,e){return Fe(r.getMinutes(),e.length)},s(r,e){return Fe(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return Fe(s,e.length)}},Di={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Zl={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return ti.y(r,e)},Y:function(r,e,t,i){const s=Wh(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return Fe(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):Fe(n,e.length)},R:function(r,e){const t=Nh(r);return Fe(t,e.length)},u:function(r,e){const t=r.getFullYear();return Fe(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Fe(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Fe(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return ti.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return Fe(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Ep(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):Fe(s,e.length)},I:function(r,e,t){const i=Ap(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):Fe(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):ti.d(r,e)},D:function(r,e,t){const i=kp(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):Fe(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Fe(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Fe(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return Fe(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=Di.noon:i===0?s=Di.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=Di.evening:i>=12?s=Di.afternoon:i>=4?s=Di.morning:s=Di.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return ti.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):ti.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):Fe(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):Fe(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):ti.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):ti.s(r,e)},S:function(r,e){return ti.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Jl(i);case"XXXX":case"XX":return xi(i);case"XXXXX":case"XXX":default:return xi(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Jl(i);case"xxxx":case"xx":return xi(i);case"xxxxx":case"xxx":default:return xi(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ql(i,":");case"OOOO":default:return"GMT"+xi(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ql(i,":");case"zzzz":default:return"GMT"+xi(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return Fe(i,e.length)},T:function(r,e,t){const i=r.getTime();return Fe(i,e.length)}};function Ql(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+Fe(n,2)}function Jl(r,e){return r%60===0?(r>0?"-":"+")+Fe(Math.abs(r)/60,2):xi(r,e)}function xi(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Fe(Math.trunc(i/60),2),n=Fe(i%60,2);return t+s+e+n}const eh=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Gh=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Lp=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return eh(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",eh(i,e)).replace("{{time}}",Gh(s,e))},Rp={p:Gh,P:Lp},Dp=/^D+$/,Tp=/^Y+$/,Ip=["D","DD","YY","YYYY"];function Mp(r){return Dp.test(r)}function Up(r){return Tp.test(r)}function Fp(r,e,t){const i=Np(r,e,t);if(console.warn(i),Ip.includes(r))throw new RangeError(i)}function Np(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const zp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bp=/^'([^]*?)'?$/,Hp=/''/g,Wp=/[a-zA-Z]/;function rt(r,e,t){var u,d,f,b;const i=Fs(),s=i.locale??Pp,n=i.firstWeekContainsDate??((d=(u=i.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,a=i.weekStartsOn??((b=(f=i.locale)==null?void 0:f.options)==null?void 0:b.weekStartsOn)??0,o=wt(r);if(!zh(o))throw new RangeError("Invalid time value");let l=e.match(jp).map(v=>{const w=v[0];if(w==="p"||w==="P"){const $=Rp[w];return $(v,s.formatLong)}return v}).join("").match(zp).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const w=v[0];if(w==="'")return{isToken:!1,value:Gp(v)};if(Zl[w])return{isToken:!0,value:v};if(w.match(Wp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:v}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(v=>{if(!v.isToken)return v.value;const w=v.value;(Up(w)||Mp(w))&&Fp(w,e,String(r));const $=Zl[w[0]];return $(o,w,s.localize,h)}).join("")}function Gp(r){const e=r.match(Bp);return e?e[1].replace(Hp,"'"):r}function Wa(r,e){const t=wt(r);if(!zh(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=Fe(t.getDate(),2),h=Fe(t.getMonth()+1,2);n=`${Fe(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=Fe(t.getHours(),2),h=Fe(t.getMinutes(),2),u=Fe(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function Vh(r){const e=wt(r);return e.setMinutes(0,0,0),e}var Vp={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Yp=`\r
`,qp="\uFEFF",Ns=r=>Object.assign({},Vp,r);class Xp extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let Kp=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class Zp extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Qp extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var Zi=r=>r,rr=r=>r,xs=Zi,Vn=Zi,Ni=Zi,th=Zi,rh=Zi,Jp=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},ef=r=>th(typeof r=="object"?r.key:r),tf=r=>rh(typeof r=="object"?r.displayLabel:r),rf=(r,...e)=>e.reduce((t,i)=>i(t),r),sf=r=>e=>r.useBom?Vn(rr(e)+qp):e,nf=r=>e=>r.showTitle?mo(Vn(rr(e)+r.title))(Ni("")):e,mo=r=>e=>Vn(rr(r)+rr(e)+Yp),Yh=r=>(e,t)=>af(r)(Ni(rr(e)+rr(t))),af=r=>e=>Zi(rr(e)+r.fieldSeparator),of=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Kp("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Ni("");for(let s=0;s<e.length;s++){const n=tf(e[s]);i=Yh(r)(i,qh(r,rr(n)))}return i=Ni(rr(i).slice(0,-1)),mo(t)(i)},lf=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=Ni("");for(let o=0;o<e.length;o++){const l=ef(e[o]),h=t[n][rr(l)];a=Yh(r)(a,qh(r,h))}a=Ni(rr(a).slice(0,-1)),s=mo(s)(a)}return s},hf=r=>+r===r&&(!isFinite(r)||!!(r%1)),cf=(r,e)=>{if(hf(e)){if(r.decimalSeparator==="locale")return xs(e.toLocaleString());if(r.decimalSeparator)return xs(e.toString().replace(".",r.decimalSeparator))}return xs(e.toString())},vn=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+Jp(e,r.quoteCharacter)+r.quoteCharacter),xs(t)},uf=(r,e)=>{const t=e?"true":"false";return xs(r.boolDisplay[t])},df=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?vn(r,r.replaceUndefinedWith+""):e===null?vn(r,"null"):vn(r,""),qh=(r,e)=>{if(typeof e=="number")return cf(r,e);if(typeof e=="string")return vn(r,e);if(typeof e=="boolean"&&r.boolDisplay)return uf(r,e);if(e===null||typeof e>"u")return df(r,e);throw new Qp(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Xh=r=>e=>{const t=Ns(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=rf(Vn(""),sf(t),nf(t),of(t,i),lf(t,i,e));if(rr(s).length<1)throw new Xp("Output is empty. Is your data formatted correctly?");return s},pf=r=>e=>{const t=Ns(r),i=rr(e),s=t.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Kh=r=>e=>{if(!window)throw new Zp("Downloading only supported in a browser environment.");const t=pf(r)(e),i=Ns(r),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function mf(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Zh={exports:{}};(function(r){(function(e){var t=N(),i=z(),s=T(),n=Z(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:d,toBlob:f,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(S,C){return C=C||{},b(C),Promise.resolve(S).then(function(O){return w(O,C.filter,!0)}).then($).then(W).then(R).then(function(O){return A(O,C.width||t.width(S),C.height||t.height(S))});function R(O){return C.bgcolor&&(O.style.backgroundColor=C.bgcolor),C.width&&(O.style.width=C.width+"px"),C.height&&(O.style.height=C.height+"px"),C.style&&Object.keys(C.style).forEach(function(B){O.style[B]=C.style[B]}),O}}function h(S,C){return v(S,C||{}).then(function(R){return R.getContext("2d").getImageData(0,0,t.width(S),t.height(S)).data})}function u(S,C){return v(S,C||{}).then(function(R){return R.toDataURL()})}function d(S,C){return C=C||{},v(S,C).then(function(R){return R.toDataURL("image/jpeg",C.quality||1)})}function f(S,C){return v(S,C||{}).then(t.canvasToBlob)}function b(S){typeof S.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=S.imagePlaceholder,typeof S.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=S.cacheBust}function v(S,C){return l(S,C).then(t.makeImage).then(t.delay(100)).then(function(O){var B=R(S);return B.getContext("2d").drawImage(O,0,0),B});function R(O){var B=document.createElement("canvas");if(B.width=C.width||t.width(O),B.height=C.height||t.height(O),C.bgcolor){var I=B.getContext("2d");I.fillStyle=C.bgcolor,I.fillRect(0,0,B.width,B.height)}return B}}function w(S,C,R){if(!R&&C&&!C(S))return Promise.resolve();return Promise.resolve(S).then(O).then(function(U){return B(S,U,C)}).then(function(U){return I(S,U)});function O(U){return U instanceof HTMLCanvasElement?t.makeImage(U.toDataURL()):U.cloneNode(!1)}function B(U,k,Y){var ae=U.childNodes;if(ae.length===0)return Promise.resolve(k);return se(k,t.asArray(ae),Y).then(function(){return k});function se(re,ke,Pe){var Ze=Promise.resolve();return ke.forEach(function(st){Ze=Ze.then(function(){return w(st,Pe)}).then(function(nt){nt&&re.appendChild(nt)})}),Ze}}function I(U,k){if(!(k instanceof Element))return k;return Promise.resolve().then(Y).then(ae).then(se).then(re).then(function(){return k});function Y(){ke(window.getComputedStyle(U),k.style);function ke(Pe,Ze){Pe.cssText?Ze.cssText=Pe.cssText:st(Pe,Ze);function st(nt,ut){t.asArray(nt).forEach(function(ie){ut.setProperty(ie,nt.getPropertyValue(ie),nt.getPropertyPriority(ie))})}}}function ae(){[":before",":after"].forEach(function(Pe){ke(Pe)});function ke(Pe){var Ze=window.getComputedStyle(U,Pe),st=Ze.getPropertyValue("content");if(st===""||st==="none")return;var nt=t.uid();k.className=k.className+" "+nt;var ut=document.createElement("style");ut.appendChild(ie(nt,Pe,Ze)),k.appendChild(ut);function ie(le,$e,Le){var Ye="."+le+":"+$e,Te=Le.cssText?Qr(Le):yi(Le);return document.createTextNode(Ye+"{"+Te+"}");function Qr(qe){var Qt=qe.getPropertyValue("content");return qe.cssText+" content: "+Qt+";"}function yi(qe){return t.asArray(qe).map(Qt).join("; ")+";";function Qt(Mr){return Mr+": "+qe.getPropertyValue(Mr)+(qe.getPropertyPriority(Mr)?" !important":"")}}}}}function se(){U instanceof HTMLTextAreaElement&&(k.innerHTML=U.value),U instanceof HTMLInputElement&&k.setAttribute("value",U.value)}function re(){k instanceof SVGElement&&(k.setAttribute("xmlns","http://www.w3.org/2000/svg"),k instanceof SVGRectElement&&["width","height"].forEach(function(ke){var Pe=k.getAttribute(ke);Pe&&k.style.setProperty(ke,Pe)}))}}}function $(S){return s.resolveAll().then(function(C){var R=document.createElement("style");return S.appendChild(R),R.appendChild(document.createTextNode(C)),S})}function W(S){return n.inlineAll(S).then(function(){return S})}function A(S,C,R){return Promise.resolve(S).then(function(O){return O.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(O)}).then(t.escapeXhtml).then(function(O){return'<foreignObject x="0" y="0" width="100%" height="100%">'+O+"</foreignObject>"}).then(function(O){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+C+'" height="'+R+'">'+O+"</svg>"}).then(function(O){return"data:image/svg+xml;charset=utf-8,"+O})}function N(){return{escape:re,parseExtension:C,mimeType:R,dataAsUrl:se,isDataUrl:O,canvasToBlob:I,resolveUrl:U,getAndEncode:ae,uid:k(),delay:ke,asArray:Pe,escapeXhtml:Ze,makeImage:Y,width:st,height:nt};function S(){var ie="application/font-woff",le="image/jpeg";return{woff:ie,woff2:ie,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:le,jpeg:le,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function C(ie){var le=/\.([^\.\/]*?)$/g.exec(ie);return le?le[1]:""}function R(ie){var le=C(ie).toLowerCase();return S()[le]||""}function O(ie){return ie.search(/^(data:)/)!==-1}function B(ie){return new Promise(function(le){for(var $e=window.atob(ie.toDataURL().split(",")[1]),Le=$e.length,Ye=new Uint8Array(Le),Te=0;Te<Le;Te++)Ye[Te]=$e.charCodeAt(Te);le(new Blob([Ye],{type:"image/png"}))})}function I(ie){return ie.toBlob?new Promise(function(le){ie.toBlob(le)}):B(ie)}function U(ie,le){var $e=document.implementation.createHTMLDocument(),Le=$e.createElement("base");$e.head.appendChild(Le);var Ye=$e.createElement("a");return $e.body.appendChild(Ye),Le.href=le,Ye.href=ie,Ye.href}function k(){var ie=0;return function(){return"u"+le()+ie++;function le(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function Y(ie){return new Promise(function(le,$e){var Le=new Image;Le.onload=function(){le(Le)},Le.onerror=$e,Le.src=ie})}function ae(ie){var le=3e4;return o.impl.options.cacheBust&&(ie+=(/\?/.test(ie)?"&":"?")+new Date().getTime()),new Promise(function($e){var Le=new XMLHttpRequest;Le.onreadystatechange=Qr,Le.ontimeout=yi,Le.responseType="blob",Le.timeout=le,Le.open("GET",ie,!0),Le.send();var Ye;if(o.impl.options.imagePlaceholder){var Te=o.impl.options.imagePlaceholder.split(/,/);Te&&Te[1]&&(Ye=Te[1])}function Qr(){if(Le.readyState===4){if(Le.status!==200){Ye?$e(Ye):qe("cannot fetch resource: "+ie+", status: "+Le.status);return}var Qt=new FileReader;Qt.onloadend=function(){var Mr=Qt.result.split(/,/)[1];$e(Mr)},Qt.readAsDataURL(Le.response)}}function yi(){Ye?$e(Ye):qe("timeout of "+le+"ms occured while fetching resource: "+ie)}function qe(Qt){console.error(Qt),$e("")}})}function se(ie,le){return"data:"+le+";base64,"+ie}function re(ie){return ie.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function ke(ie){return function(le){return new Promise(function($e){setTimeout(function(){$e(le)},ie)})}}function Pe(ie){for(var le=[],$e=ie.length,Le=0;Le<$e;Le++)le.push(ie[Le]);return le}function Ze(ie){return ie.replace(/#/g,"%23").replace(/\n/g,"%0A")}function st(ie){var le=ut(ie,"border-left-width"),$e=ut(ie,"border-right-width");return ie.scrollWidth+le+$e}function nt(ie){var le=ut(ie,"border-top-width"),$e=ut(ie,"border-bottom-width");return ie.scrollHeight+le+$e}function ut(ie,le){var $e=window.getComputedStyle(ie).getPropertyValue(le);return parseFloat($e.replace("px",""))}}function z(){var S=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:B,shouldProcess:C,impl:{readUrls:R,inline:O}};function C(I){return I.search(S)!==-1}function R(I){for(var U=[],k;(k=S.exec(I))!==null;)U.push(k[1]);return U.filter(function(Y){return!t.isDataUrl(Y)})}function O(I,U,k,Y){return Promise.resolve(U).then(function(se){return k?t.resolveUrl(se,k):se}).then(Y||t.getAndEncode).then(function(se){return t.dataAsUrl(se,t.mimeType(U))}).then(function(se){return I.replace(ae(U),"$1"+se+"$3")});function ae(se){return new RegExp(`(url\\(['"]?)(`+t.escape(se)+`)(['"]?\\))`,"g")}}function B(I,U,k){if(Y())return Promise.resolve(I);return Promise.resolve(I).then(R).then(function(ae){var se=Promise.resolve(I);return ae.forEach(function(re){se=se.then(function(ke){return O(ke,re,U,k)})}),se});function Y(){return!C(I)}}}function T(){return{resolveAll:S,impl:{readAll:C}};function S(){return C().then(function(R){return Promise.all(R.map(function(O){return O.resolve()}))}).then(function(R){return R.join(`
`)})}function C(){return Promise.resolve(t.asArray(document.styleSheets)).then(O).then(R).then(function(I){return I.map(B)});function R(I){return I.filter(function(U){return U.type===CSSRule.FONT_FACE_RULE}).filter(function(U){return i.shouldProcess(U.style.getPropertyValue("src"))})}function O(I){var U=[];return I.forEach(function(k){try{t.asArray(k.cssRules||[]).forEach(U.push.bind(U))}catch(Y){console.log("Error while reading CSS rules from "+k.href,Y.toString())}}),U}function B(I){return{resolve:function(){var k=(I.parentStyleSheet||{}).href;return i.inlineAll(I.cssText,k)},src:function(){return I.style.getPropertyValue("src")}}}}}function Z(){return{inlineAll:C,impl:{newImage:S}};function S(R){return{inline:O};function O(B){return t.isDataUrl(R.src)?Promise.resolve():Promise.resolve(R.src).then(B||t.getAndEncode).then(function(I){return t.dataAsUrl(I,t.mimeType(R.src))}).then(function(I){return new Promise(function(U,k){R.onload=U,R.onerror=k,R.src=I})})}}function C(R){if(!(R instanceof Element))return Promise.resolve(R);return O(R).then(function(){return R instanceof HTMLImageElement?S(R).inline():Promise.all(t.asArray(R.childNodes).map(function(B){return C(B)}))});function O(B){var I=B.style.getPropertyValue("background");return I?i.inlineAll(I).then(function(U){B.style.setProperty("background",U,B.style.getPropertyPriority("background"))}).then(function(){return B}):Promise.resolve(B)}}}})()})(Zh);var yf=Zh.exports;const vf=gf(yf);var Za={exports:{}};const bf={},wf=Object.freeze(Object.defineProperty({__proto__:null,default:bf},Symbol.toStringTag,{value:"Module"})),Ti=mf(wf);/**
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
 */(function(r,e){(function(t,i){i(e)})(ff,function(t){var i={},s={exports:{}};(function(H){var q=function(ge){return typeof ge<"u"&&ge.versions!=null&&ge.versions.node!=null&&ge+""=="[object process]"};H.exports.isNode=q,H.exports.platform=typeof process<"u"&&q(process)?"node":"browser";var X=H.exports.platform==="node"&&Ti;H.exports.isMainThread=H.exports.platform==="node"?(!X||X.isMainThread)&&!process.connected:typeof Window<"u",H.exports.cpus=H.exports.platform==="browser"?self.navigator.hardwareConcurrency:Ti.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function H(ge,Be){var _e=this;if(!(this instanceof H))throw new SyntaxError("Constructor must be called with the new operator");if(typeof ge!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var Qe=[],Ne=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var oe=function(Ae,Ie){Qe.push(Ae),Ne.push(Ie)};this.then=function(G,Ae){return new H(function(Ie,dt){var Pt=G?q(G,Ie,dt):Ie,_r=Ae?q(Ae,Ie,dt):dt;oe(Pt,_r)},_e)};var ze=function(Ae){return _e.resolved=!0,_e.rejected=!1,_e.pending=!1,Qe.forEach(function(Ie){Ie(Ae)}),oe=function(dt,Pt){dt(Ae)},ze=F=function(){},_e},F=function(Ae){return _e.resolved=!1,_e.rejected=!0,_e.pending=!1,Ne.forEach(function(Ie){Ie(Ae)}),oe=function(dt,Pt){Pt(Ae)},ze=F=function(){},_e};this.cancel=function(){return Be?Be.cancel():F(new X),_e},this.timeout=function(G){if(Be)Be.timeout(G);else{var Ae=setTimeout(function(){F(new K("Promise timed out after "+G+" ms"))},G);_e.always(function(){clearTimeout(Ae)})}return _e},ge(function(G){ze(G)},function(G){F(G)})}function q(ge,Be,_e){return function(Qe){try{var Ne=ge(Qe);Ne&&typeof Ne.then=="function"&&typeof Ne.catch=="function"?Ne.then(Be,_e):Be(Ne)}catch(oe){_e(oe)}}}H.prototype.catch=function(ge){return this.then(null,ge)},H.prototype.always=function(ge){return this.then(ge,ge)},H.all=function(ge){return new H(function(Be,_e){var Qe=ge.length,Ne=[];Qe?ge.forEach(function(oe,ze){oe.then(function(F){Ne[ze]=F,Qe--,Qe==0&&Be(Ne)},function(F){Qe=0,_e(F)})}):Be(Ne)})},H.defer=function(){var ge={};return ge.promise=new H(function(Be,_e){ge.resolve=Be,ge.reject=_e}),ge};function X(ge){this.message=ge||"promise cancelled",this.stack=new Error().stack}X.prototype=new Error,X.prototype.constructor=Error,X.prototype.name="CancellationError",H.CancellationError=X;function K(ge){this.message=ge||"timeout exceeded",this.stack=new Error().stack}return K.prototype=new Error,K.prototype.constructor=Error,K.prototype.name="TimeoutError",H.TimeoutError=K,a.Promise=H,a}function h(H,q){(q==null||q>H.length)&&(q=H.length);for(var X=0,K=Array(q);X<q;X++)K[X]=H[X];return K}function u(H,q){var X=typeof Symbol<"u"&&H[Symbol.iterator]||H["@@iterator"];if(!X){if(Array.isArray(H)||(X=W(H))||q){X&&(H=X);var K=0,ge=function(){};return{s:ge,n:function(){return K>=H.length?{done:!0}:{done:!1,value:H[K++]}},e:function(Ne){throw Ne},f:ge}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Be,_e=!0,Qe=!1;return{s:function(){X=X.call(H)},n:function(){var Ne=X.next();return _e=Ne.done,Ne},e:function(Ne){Qe=!0,Be=Ne},f:function(){try{_e||X.return==null||X.return()}finally{if(Qe)throw Be}}}}function d(H,q,X){return(q=w(q))in H?Object.defineProperty(H,q,{value:X,enumerable:!0,configurable:!0,writable:!0}):H[q]=X,H}function f(H,q){var X=Object.keys(H);if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(H);q&&(K=K.filter(function(ge){return Object.getOwnPropertyDescriptor(H,ge).enumerable})),X.push.apply(X,K)}return X}function b(H){for(var q=1;q<arguments.length;q++){var X=arguments[q]!=null?arguments[q]:{};q%2?f(Object(X),!0).forEach(function(K){d(H,K,X[K])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(X)):f(Object(X)).forEach(function(K){Object.defineProperty(H,K,Object.getOwnPropertyDescriptor(X,K))})}return H}function v(H,q){if(typeof H!="object"||!H)return H;var X=H[Symbol.toPrimitive];if(X!==void 0){var K=X.call(H,q||"default");if(typeof K!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return(q==="string"?String:Number)(H)}function w(H){var q=v(H,"string");return typeof q=="symbol"?q:q+""}function $(H){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},$(H)}function W(H,q){if(H){if(typeof H=="string")return h(H,q);var X={}.toString.call(H).slice(8,-1);return X==="Object"&&H.constructor&&(X=H.constructor.name),X==="Map"||X==="Set"?Array.from(H):X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X)?h(H,q):void 0}}var A={exports:{}},N={},z;function T(){return z||(z=1,N.validateOptions=function(q,X,K){if(q){var ge=q?Object.keys(q):[],Be=ge.find(function(Qe){return!X.includes(Qe)});if(Be)throw new Error('Object "'+K+'" contains an unknown option "'+Be+'"');var _e=X.find(function(Qe){return Object.prototype[Qe]&&!ge.includes(Qe)});if(_e)throw new Error('Object "'+K+'" contains an inherited option "'+_e+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return q}},N.workerOptsNames=["credentials","name","type"],N.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],N.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),N}var Z,S;function C(){return S||(S=1,Z=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),Z}var R;function O(){if(R)return A.exports;R=1;var H=l(),q=H.Promise,X=n,K=T(),ge=K.validateOptions,Be=K.forkOptsNames,_e=K.workerThreadOptsNames,Qe=K.workerOptsNames,Ne="__workerpool-terminate__";function oe(){var pe=F();if(!pe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return pe}function ze(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":$(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function F(){try{return Ti}catch(pe){if($(pe)==="object"&&pe!==null&&pe.code==="MODULE_NOT_FOUND")return null;throw pe}}function G(){if(X.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var pe=new Blob([C()],{type:"text/javascript"});return window.URL.createObjectURL(pe)}else return __dirname+"/worker.js"}function Ae(pe,Oe){if(Oe.workerType==="web")return ze(),Ie(pe,Oe.workerOpts,Worker);if(Oe.workerType==="thread")return V=oe(),dt(pe,V,Oe);if(Oe.workerType==="process"||!Oe.workerType)return Pt(pe,_r(Oe),Ti);if(X.platform==="browser")return ze(),Ie(pe,Oe.workerOpts,Worker);var V=F();return V?dt(pe,V,Oe):Pt(pe,_r(Oe),Ti)}function Ie(pe,Oe,V){ge(Oe,Qe,"workerOpts");var xe=new V(pe,Oe);return xe.isBrowserWorker=!0,xe.on=function(He,je){this.addEventListener(He,function(it){je(it.data)})},xe.send=function(He,je){this.postMessage(He,je)},xe}function dt(pe,Oe,V){var xe,He;ge(V==null?void 0:V.workerThreadOpts,_e,"workerThreadOpts");var je=new Oe.Worker(pe,b({stdout:(xe=V==null?void 0:V.emitStdStreams)!==null&&xe!==void 0?xe:!1,stderr:(He=V==null?void 0:V.emitStdStreams)!==null&&He!==void 0?He:!1},V==null?void 0:V.workerThreadOpts));return je.isWorkerThread=!0,je.send=function(it,Me){this.postMessage(it,Me)},je.kill=function(){return this.terminate(),!0},je.disconnect=function(){this.terminate()},V!=null&&V.emitStdStreams&&(je.stdout.on("data",function(it){return je.emit("stdout",it)}),je.stderr.on("data",function(it){return je.emit("stderr",it)})),je}function Pt(pe,Oe,V){ge(Oe.forkOpts,Be,"forkOpts");var xe=V.fork(pe,Oe.forkArgs,Oe.forkOpts),He=xe.send;return xe.send=function(je){return He.call(xe,je)},Oe.emitStdStreams&&(xe.stdout.on("data",function(je){return xe.emit("stdout",je)}),xe.stderr.on("data",function(je){return xe.emit("stderr",je)})),xe.isChildProcess=!0,xe}function _r(pe){pe=pe||{};var Oe=process.execArgv.join(" "),V=Oe.indexOf("--inspect")!==-1,xe=Oe.indexOf("--debug-brk")!==-1,He=[];return V&&(He.push("--inspect="+pe.debugPort),xe&&He.push("--debug-brk")),process.execArgv.forEach(function(je){je.indexOf("--max-old-space-size")>-1&&He.push(je)}),Object.assign({},pe,{forkArgs:pe.forkArgs,forkOpts:Object.assign({},pe.forkOpts,{execArgv:(pe.forkOpts&&pe.forkOpts.execArgv||[]).concat(He),stdio:pe.emitStdStreams?"pipe":void 0})})}function Jt(pe){for(var Oe=new Error(""),V=Object.keys(pe),xe=0;xe<V.length;xe++)Oe[V[xe]]=pe[V[xe]];return Oe}function hr(pe,Oe){if(Object.keys(pe.processing).length===1){var V=Object.values(pe.processing)[0];V.options&&typeof V.options.on=="function"&&V.options.on(Oe)}}function Jr(pe,Oe){var V=this,xe=Oe||{};this.script=pe||G(),this.worker=Ae(this.script,xe),this.debugPort=xe.debugPort,this.forkOpts=xe.forkOpts,this.forkArgs=xe.forkArgs,this.workerOpts=xe.workerOpts,this.workerThreadOpts=xe.workerThreadOpts,this.workerTerminateTimeout=xe.workerTerminateTimeout,pe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Me){hr(V,{stdout:Me.toString()})}),this.worker.on("stderr",function(Me){hr(V,{stderr:Me.toString()})}),this.worker.on("message",function(Me){if(!V.terminated)if(typeof Me=="string"&&Me==="ready")V.worker.ready=!0,je();else{var zt=Me.id,pt=V.processing[zt];pt!==void 0&&(Me.isEvent?pt.options&&typeof pt.options.on=="function"&&pt.options.on(Me.payload):(delete V.processing[zt],V.terminating===!0&&V.terminate(),Me.error?pt.resolver.reject(Jt(Me.error)):pt.resolver.resolve(Me.result)))}});function He(Me){V.terminated=!0;for(var zt in V.processing)V.processing[zt]!==void 0&&V.processing[zt].resolver.reject(Me);V.processing=Object.create(null)}function je(){var Me=u(V.requestQueue.splice(0)),zt;try{for(Me.s();!(zt=Me.n()).done;){var pt=zt.value;V.worker.send(pt.message,pt.transfer)}}catch(Js){Me.e(Js)}finally{Me.f()}}var it=this.worker;this.worker.on("error",He),this.worker.on("exit",function(Me,zt){var pt=`Workerpool Worker terminated Unexpectedly
`;pt+="    exitCode: `"+Me+"`\n",pt+="    signalCode: `"+zt+"`\n",pt+="    workerpool.script: `"+V.script+"`\n",pt+="    spawnArgs: `"+it.spawnargs+"`\n",pt+="    spawnfile: `"+it.spawnfile+"`\n",pt+="    stdout: `"+it.stdout+"`\n",pt+="    stderr: `"+it.stderr+"`\n",He(new Error(pt))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Jr.prototype.methods=function(){return this.exec("methods")},Jr.prototype.exec=function(pe,Oe,V,xe){V||(V=q.defer());var He=++this.lastId;this.processing[He]={id:He,resolver:V,options:xe};var je={message:{id:He,method:pe,params:Oe},transfer:xe&&xe.transfer};this.terminated?V.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(je.message,je.transfer):this.requestQueue.push(je);var it=this;return V.promise.catch(function(Me){if(Me instanceof q.CancellationError||Me instanceof q.TimeoutError)return delete it.processing[He],it.terminateAndNotify(!0).then(function(){throw Me},function(zt){throw zt});throw Me})},Jr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Jr.prototype.terminate=function(pe,Oe){var V=this;if(pe){for(var xe in this.processing)this.processing[xe]!==void 0&&this.processing[xe].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Oe=="function"&&(this.terminationHandler=Oe),this.busy())this.terminating=!0;else{var He=function(Me){if(V.terminated=!0,V.cleaning=!1,V.worker!=null&&V.worker.removeAllListeners&&V.worker.removeAllListeners("message"),V.worker=null,V.terminating=!1,V.terminationHandler)V.terminationHandler(Me,V);else if(Me)throw Me};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){He(new Error("worker already killed!"));return}var je=setTimeout(function(){V.worker&&V.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(je),V.worker&&(V.worker.killed=!0),He()}),this.worker.ready?this.worker.send(Ne):this.requestQueue.push({message:Ne}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");He()}},Jr.prototype.terminateAndNotify=function(pe,Oe){var V=q.defer();return Oe&&V.promise.timeout(Oe),this.terminate(pe,function(xe,He){xe?V.reject(xe):V.resolve(He)}),V.promise},A.exports=Jr,A.exports._tryRequireWorkerThreads=F,A.exports._setupProcessWorker=Pt,A.exports._setupBrowserWorker=Ie,A.exports._setupWorkerThreadWorker=dt,A.exports.ensureWorkerThreads=oe,A.exports}var B,I;function U(){if(I)return B;I=1;var H=65535;B=q;function q(){this.ports=Object.create(null),this.length=0}return q.prototype.nextAvailableStartingAt=function(X){for(;this.ports[X]===!0;)X++;if(X>=H)throw new Error("WorkerPool debug port limit reached: "+X+">= "+H);return this.ports[X]=!0,this.length++,X},q.prototype.releasePort=function(X){delete this.ports[X],this.length--},B}var k,Y;function ae(){if(Y)return k;Y=1;var H=l(),q=H.Promise,X=O(),K=n,ge=U(),Be=new ge;function _e(F,G){typeof F=="string"?this.script=F||null:(this.script=null,G=F),this.workers=[],this.tasks=[],G=G||{},this.forkArgs=Object.freeze(G.forkArgs||[]),this.forkOpts=Object.freeze(G.forkOpts||{}),this.workerOpts=Object.freeze(G.workerOpts||{}),this.workerThreadOpts=Object.freeze(G.workerThreadOpts||{}),this.debugPortStart=G.debugPortStart||43210,this.nodeWorker=G.nodeWorker,this.workerType=G.workerType||G.nodeWorker||"auto",this.maxQueueSize=G.maxQueueSize||1/0,this.workerTerminateTimeout=G.workerTerminateTimeout||1e3,this.onCreateWorker=G.onCreateWorker||function(){return null},this.onTerminateWorker=G.onTerminateWorker||function(){return null},this.emitStdStreams=G.emitStdStreams||!1,G&&"maxWorkers"in G?(Qe(G.maxWorkers),this.maxWorkers=G.maxWorkers):this.maxWorkers=Math.max((K.cpus||4)-1,1),G&&"minWorkers"in G&&(G.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ne(G.minWorkers),this.minWorkers=G.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&X.ensureWorkerThreads()}_e.prototype.exec=function(F,G,Ae){if(G&&!Array.isArray(G))throw new TypeError('Array expected as argument "params"');if(typeof F=="string"){var Ie=q.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var dt=this.tasks,Pt={method:F,params:G,resolver:Ie,timeout:null,options:Ae};dt.push(Pt);var _r=Ie.promise.timeout;return Ie.promise.timeout=function(hr){return dt.indexOf(Pt)!==-1?(Pt.timeout=hr,Ie.promise):_r.call(Ie.promise,hr)},this._next(),Ie.promise}else{if(typeof F=="function")return this.exec("run",[String(F),G],Ae);throw new TypeError('Function or string expected as argument "method"')}},_e.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var F=this;return this.exec("methods").then(function(G){var Ae={};return G.forEach(function(Ie){Ae[Ie]=function(){return F.exec(Ie,Array.prototype.slice.call(arguments))}}),Ae})},_e.prototype._next=function(){if(this.tasks.length>0){var F=this._getWorker();if(F){var G=this,Ae=this.tasks.shift();if(Ae.resolver.promise.pending){var Ie=F.exec(Ae.method,Ae.params,Ae.resolver,Ae.options).then(G._boundNext).catch(function(){if(F.terminated)return G._removeWorker(F)}).then(function(){G._next()});typeof Ae.timeout=="number"&&Ie.timeout(Ae.timeout)}else G._next()}}},_e.prototype._getWorker=function(){for(var F=this.workers,G=0;G<F.length;G++){var Ae=F[G];if(Ae.busy()===!1)return Ae}return F.length<this.maxWorkers?(Ae=this._createWorkerHandler(),F.push(Ae),Ae):null},_e.prototype._removeWorker=function(F){var G=this;return Be.releasePort(F.debugPort),this._removeWorkerFromList(F),this._ensureMinWorkers(),new q(function(Ae,Ie){F.terminate(!1,function(dt){G.onTerminateWorker({forkArgs:F.forkArgs,forkOpts:F.forkOpts,workerThreadOpts:F.workerThreadOpts,script:F.script}),dt?Ie(dt):Ae(F)})})},_e.prototype._removeWorkerFromList=function(F){var G=this.workers.indexOf(F);G!==-1&&this.workers.splice(G,1)},_e.prototype.terminate=function(F,G){var Ae=this;this.tasks.forEach(function(Jt){Jt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var Ie=function(hr){Be.releasePort(hr.debugPort),this._removeWorkerFromList(hr)},dt=Ie.bind(this),Pt=[],_r=this.workers.slice();return _r.forEach(function(Jt){var hr=Jt.terminateAndNotify(F,G).then(dt).always(function(){Ae.onTerminateWorker({forkArgs:Jt.forkArgs,forkOpts:Jt.forkOpts,workerThreadOpts:Jt.workerThreadOpts,script:Jt.script})});Pt.push(hr)}),q.all(Pt)},_e.prototype.stats=function(){var F=this.workers.length,G=this.workers.filter(function(Ae){return Ae.busy()}).length;return{totalWorkers:F,busyWorkers:G,idleWorkers:F-G,pendingTasks:this.tasks.length,activeTasks:G}},_e.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var F=this.workers.length;F<this.minWorkers;F++)this.workers.push(this._createWorkerHandler())},_e.prototype._createWorkerHandler=function(){var F=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new X(F.script||this.script,{forkArgs:F.forkArgs||this.forkArgs,forkOpts:F.forkOpts||this.forkOpts,workerOpts:F.workerOpts||this.workerOpts,workerThreadOpts:F.workerThreadOpts||this.workerThreadOpts,debugPort:Be.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function Qe(F){if(!oe(F)||!ze(F)||F<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ne(F){if(!oe(F)||!ze(F)||F<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function oe(F){return typeof F=="number"}function ze(F){return Math.round(F)==F}return k=_e,k}var se={},re,ke;function Pe(){if(ke)return re;ke=1;function H(q,X){this.message=q,this.transfer=X}return re=H,re}var Ze;function st(){return Ze||(Ze=1,function(H){var q=Pe(),X="__workerpool-terminate__",K={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")K.on=function(oe,ze){addEventListener(oe,function(F){ze(F.data)})},K.send=function(oe,ze){ze?postMessage(oe,ze):postMessage(oe)};else if(typeof process<"u"){var ge;try{ge=Ti}catch(oe){if(!($(oe)==="object"&&oe!==null&&oe.code==="MODULE_NOT_FOUND"))throw oe}if(ge&&ge.parentPort!==null){var Be=ge.parentPort;K.send=Be.postMessage.bind(Be),K.on=Be.on.bind(Be),K.exit=process.exit.bind(process)}else K.on=process.on.bind(process),K.send=function(oe){process.send(oe)},K.on("disconnect",function(){process.exit(1)}),K.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function _e(oe){return Object.getOwnPropertyNames(oe).reduce(function(ze,F){return Object.defineProperty(ze,F,{value:oe[F],enumerable:!0})},{})}function Qe(oe){return oe&&typeof oe.then=="function"&&typeof oe.catch=="function"}K.methods={},K.methods.run=function(ze,F){var G=new Function("return ("+ze+").apply(null, arguments);");return G.apply(G,F)},K.methods.methods=function(){return Object.keys(K.methods)},K.terminationHandler=void 0,K.cleanupAndExit=function(oe){var ze=function(){K.exit(oe)};if(!K.terminationHandler)return ze();var F=K.terminationHandler(oe);Qe(F)?F.then(ze,ze):ze()};var Ne=null;K.on("message",function(oe){if(oe===X)return K.cleanupAndExit(0);try{var ze=K.methods[oe.method];if(ze){Ne=oe.id;var F=ze.apply(ze,oe.params);Qe(F)?F.then(function(G){G instanceof q?K.send({id:oe.id,result:G.message,error:null},G.transfer):K.send({id:oe.id,result:G,error:null}),Ne=null}).catch(function(G){K.send({id:oe.id,result:null,error:_e(G)}),Ne=null}):(F instanceof q?K.send({id:oe.id,result:F.message,error:null},F.transfer):K.send({id:oe.id,result:F,error:null}),Ne=null)}else throw new Error('Unknown method "'+oe.method+'"')}catch(G){K.send({id:oe.id,result:null,error:_e(G)})}}),K.register=function(oe,ze){if(oe)for(var F in oe)oe.hasOwnProperty(F)&&(K.methods[F]=oe[F]);ze&&(K.terminationHandler=ze.onTerminate),K.send("ready")},K.emit=function(oe){if(Ne){if(oe instanceof q){K.send({id:Ne,isEvent:!0,payload:oe.message},oe.transfer);return}K.send({id:Ne,isEvent:!0,payload:oe})}},H.add=K.register,H.emit=K.emit}(se)),se}var nt=n.platform,ut=n.isMainThread,ie=n.cpus;function le(H,q){var X=ae();return new X(H,q)}var $e=i.pool=le;function Le(H,q){var X=st();X.add(H,q)}var Ye=i.worker=Le;function Te(H){var q=st();q.emit(H)}var Qr=i.workerEmit=Te,yi=l(),qe=yi.Promise,Qt=i.Promise=qe,Mr=i.Transfer=Pe(),ua=i.platform=nt,da=i.isMainThread=ut,pa=i.cpus=ie;t.Promise=Qt,t.Transfer=Mr,t.cpus=pa,t.default=i,t.isMainThread=da,t.platform=ua,t.pool=$e,t.worker=Ye,t.workerEmit=Qr,Object.defineProperty(t,"__esModule",{value:!0})})})(Za,Za.exports);var xf=Za.exports,gt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},Qh=class extends gt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Sf=class extends gt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},$f=class extends gt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},_f=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Cf=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],Pf=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],kf=_f(),vr={iron:{pixels:Pf,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Cf,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:kf,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Af=class extends gt{get availablePalettes(){return vr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},qa,Of=(qa=class{},c(qa,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),qa),ct,tt=(ct=class extends Of{static humanRangeDates(e,t){return e=ct.inputToDate(e),t=ct.inputToDate(t),e.getUTCDate()===t.getUTCDate()?ct.humanDate(e):[ct.humanDate(e),ct.humanDate(t)].join(" - ")}static human(e){return`${ct.humanDate(e)} ${ct.humanTime(e,!0)} `}},c(ct,"isoDate",e=>(e=ct.inputToDate(e),Wa(e,{representation:"date"}))),c(ct,"isoTime",e=>(e=ct.inputToDate(e),Wa(e,{representation:"time"}))),c(ct,"isoComplete",e=>(e=ct.inputToDate(e),Wa(e))),c(ct,"humanTime",(e,t=!1)=>(e=ct.inputToDate(e),rt(e,t?"HH:mm:ss":"HH:mm"))),c(ct,"humanDate",(e,t=!1)=>(e=ct.inputToDate(e),rt(e,t?"d. M.":"d. M. yyyy"))),ct),Q=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},Yn=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new Q);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},at=class{constructor(r,e,t){c(this,"onSerializableChange",new Q);c(this,"_selected",!1);c(this,"onSelected",new Q);c(this,"onDeselected",new Q);c(this,"onValues",new Q);c(this,"onMoveOrResize",new Q);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new Q);c(this,"_initialColor");c(this,"onSetInitialColor",new Q);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new Q);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{console.log("Serializovatelná změna"),this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Jh=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new Q);c(this,"pxY");c(this,"_y");c(this,"onY",new Q);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new Q);c(this,"onMouseLeave",new Q);c(this,"onActivate",new Q);c(this,"onDeactivate",new Q);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Wt,Ef=(Wt=class extends Jh{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(Wt.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Wt.sizePx(-.5),t.style.left=Wt.sizePx(-.5),t.style.width=Wt.sizePx(),t.style.height=Wt.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Wt.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Wt.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Wt.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Wt.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(Wt,"size",20),Wt),ur=class ec extends at{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Ef("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new tc(this)),this._graph}static addAtPoint(t,i,s,n,a){return new ec(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=at.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=at.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=at.serializedGetNumericalValueByKey(i,"top"),h=at.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},tc=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new Q);c(this,"onGraphData",new Q);c(this,"onAnalysisSelection",new Q);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof ur)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof ur)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof ur?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof ur)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Lf=class extends Jh{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Rf=class extends Lf{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Pr=class extends at{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new tc(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Rf(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(b=>b.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=at.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=at.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=at.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=at.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=at.serializedGetNumericalValueByKey(t,"top"),u=at.serializedGetNumericalValueByKey(t,"left"),d=at.serializedGetNumericalValueByKey(t,"width"),f=at.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),d!==void 0&&d!==this.width&&(this.setWidth(d),i=!0),f!==void 0&&f!==this.height&&(this.setHeight(f),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},rc=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},ih=class extends rc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},sh=class bn extends Pr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new bn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=bn.calculateDimensionsFromCorners(s,n,a,o),f=new bn(e,t,i,l,h,u,d);return f.recalculateValues(),f}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new ih(this,e,t,e+i,t+s):new ih(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++)if(this.isWithin(d,h)){const f=this.file.pixels[u+d];f<n&&(n=f),f>a&&(a=f),l+=f,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},nh=class extends rc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},ah=class wn extends Pr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new wn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=wn.calculateDimensionsFromCorners(s,n,a,o),f=new wn(e,t,i,l,h,u,d);return f.recalculateValues(),f}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new nh(this,e,t,e+i,t+s):new nh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++){const f=this.file.pixels[u+d];f<n&&(n=f),f>a&&(a=f),l+=f,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},xn=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Df=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new Q);c(this,"onRemove",new Q);c(this,"onSelectionChange",new Q);c(this,"colors",xn);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=ah.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=ah.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=sh.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=sh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=ur.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=ur.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=xn.filter(i=>!e.includes(i));return t.length>0?t[0]:xn[0]}getNextName(e){return`${e} ${this.all.length}`}},Tf=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},If=class extends gt{constructor(){super(...arguments);c(this,"layers",new Df(this));c(this,"points",new Tf(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Mf=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new Q);c(this,"onAddGraph",new Q);c(this,"onRemoveGraph",new Q);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:rt(a,"m:ss:SSS")+" ",[e[1].key]:rt(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Uf=class extends gt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new Q);c(this,"listeners",new Mf(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=Ns({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Xh(i)(e);Kh(i)(s)}},Ff=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new Q);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Ui,ic=(Ui=class extends gt{constructor(){super(...arguments);c(this,"onSlotInit",new Q);c(this,"onSlotRemove",new Q);c(this,"onSlot1Assignement",new Q);c(this,"onSlot2Assignement",new Q);c(this,"onSlot3Assignement",new Q);c(this,"onSlot4Assignement",new Q);c(this,"onSlot5Assignement",new Q);c(this,"onSlot6Assignement",new Q);c(this,"onSlot7Assignement",new Q);c(this,"onSlot1Serialize",new Q);c(this,"onSlot2Serialize",new Q);c(this,"onSlot3Serialize",new Q);c(this,"onSlot4Serialize",new Q);c(this,"onSlot5Serialize",new Q);c(this,"onSlot6Serialize",new Q);c(this,"onSlot7Serialize",new Q)}getNextFreeSlotNumber(){for(let t=1;t<=Ui.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Ff(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map($=>$.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=at.serializedGetNumericalValueByKey(s,"top"),l=at.serializedGetNumericalValueByKey(s,"left");const h=at.serializedGetStringValueByKey(s,"color");let u=at.serializedGetNumericalValueByKey(s,"width"),d=at.serializedGetNumericalValueByKey(s,"height");const f=at.serializedSegmentsHasExact(s,"avg"),b=at.serializedSegmentsHasExact(s,"min"),v=at.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let w;if(a==="point"){if(o===void 0||l===void 0)return;w=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||d===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),d<0&&(d=0),d+o>this.parent.height-1&&(d=this.parent.height-o-1),w=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,d+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,d+o,h,!1)}if(w!==void 0){if(w instanceof ur?f&&w.graph.setAvgActivation(!0):w instanceof Pr&&(f&&w.graph.setAvgActivation(!0),b&&w.graph.setMinActivation(!0),v&&w.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const $=this.getNextFreeSlotNumber();$!==void 0&&this.assignSlot($,w)}else i!==void 0&&this.assignSlot(i,w);return w}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(Ui,"MAX_SLOTS",7),Ui),Nf=class extends gt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},zf=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",1);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},sc={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},jf=class extends gt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new Q);c(this,"callbacksPlay",new Q);c(this,"callbacksPause",new Q);c(this,"callbacksStop",new Q);c(this,"callbacksEnd",new Q);c(this,"callbacksChangeFrame",new Q);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new zf(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return sc[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),rt(t,"mm:ss:SSS")}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<=e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Bf=class extends gt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new Q)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},qn=class{},vt,Hf=(vt=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(vt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(vt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(vt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(vt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(vt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(vt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(vt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(vt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(vt,"CLASS_BASE","thermalImageRoot"),c(vt,"CLASS_BUILT",vt.CLASS_BASE+"__built"),c(vt,"CLASS_HYDRATED",vt.CLASS_BASE+"__mounted"),c(vt,"CLASS_HOVER",vt.CLASS_BASE+"__hover"),vt),Wf=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new Q),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Gf=class extends qn{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Wf(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new Hf(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&(this.dom.canvasLayer.opacity=e)}},Xn=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},kr=class Qa{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Qa.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Qa.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Vf=class extends Xn{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=kr.createVisibleLayer(),this._url&&(this.image=kr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Yf=class extends Xn{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=kr.createCanvasContainer(),this.canvas=kr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof ur?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const f=new OffscreenCanvas(a,o).getContext("2d"),b=n-s,v=u.map(A=>({id:A[1],type:A[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let A=0;A<a;A++)for(let N=0;N<o;N++){const z=A+N*a,T=l[z];let Z=T;Z<s&&(Z=s),Z>n&&(Z=n);const C=(Z-s)/b,R=Math.round(255*C),O=h[R];f.fillStyle=O,f.fillRect(A,N,1,1);const B=(I,U,k,Y,ae,se)=>{const re=k+ae/2,ke=Y+se/2,Pe=(I-re)/(ae/2),Ze=(U-ke)/(se/2);return Pe*Pe+Ze*Ze<=1};u.forEach((I,U)=>{const k=v[U],[Y,ae,se,re,ke,Pe]=I;Y==="point"?A===re&&N===se&&(k.avg.value=T):Y==="rectangle"?A>=re&&A<re+ke&&N>=se&&N<se+Pe&&(T<k.min.value&&(k.min.value=T),T>k.max.value&&(k.max.value=T),k.avg.count=k.avg.count+1,k.avg.sum=k.avg.sum+T):Y==="ellipsis"&&B(A,N,re,se,a,o)&&(T<k.min.value&&(k.min.value=T),T>k.max.value&&(k.max.value=T),k.avg.count=k.avg.count+1,k.avg.sum=k.avg.sum+T)})}const w=v.map(A=>({id:A.id,min:A.min.value!==1/0?A.min.value:void 0,max:A.max.value!==-1/0?A.max.value:void 0,avg:A.type==="point"?A.avg.value:A.avg.sum/A.avg.count})),$=f.getImageData(0,0,a,o);return{image:await createImageBitmap($),stats:w}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},qf=class extends Xn{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=kr.createCursorLayerRoot(),this.center=kr.createCursorLayerCenter(),this.axisX=kr.createCursorLayerX(),this.axisY=kr.createCursorLayerY(),this.label=kr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Xf=class extends Xn{constructor(e){super(e);c(this,"container");this.container=kr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},nc=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},ai=class extends nc{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=zs.fromService(t,i,s,n);return t.files.addFile(a),a}},ft,ac=(ft=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new Q)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=ft.FONT_SIZE_NORMAL,s="normal",n=ft.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=ft.FONT_SIZE_NORMAL,i.style.fontFamily=ft.FONT_FAMILY,i.style.color=ft.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){vf.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,d=60,b=u/(d+40),v=document.createElement("div");v.style.width="100%",v.style.position="relative",v.style.paddingLeft=d/2+"px",v.style.paddingRight=d/2+"px",v.style.boxSizing="border-box";const w=document.createElement("div");w.style.width="100%",w.style.position="relative",w.style.backgroundColor=o,w.style.height="30px";const $=i-t,W=s-t,A=n-t,N=W/$*100,z=A/$*100,T=document.createElement("div");T.style.position="absolute",T.style.backgroundImage=a,T.style.height="100%",T.style.top="0px",T.style.left=N+"%",T.style.width=z-N+"%",w.appendChild(T),v.appendChild(w);const Z=document.createElement("div");Z.style.width="100%",Z.style.height="40px",Z.style.position="relative";const S=(O,B=!1,I,U)=>{const k=O/$*100,Y=document.createElement("div");Y.style.position="absolute",Y.style.top="0px",Y.style.left=`calc( ${k}% - ${d/2}px )`,Y.style.width=d+"px",Y.style.textAlign="center",Y.style.lineHeight="0px";const ae=document.createElement("div"),se=document.createElement("div"),re=document.createElement("div"),ke=7,Pe=ke+"px";ae.innerHTML=(t+O).toFixed(2)+" °C",ae.style.display="inline-block",ae.style.fontSize=ft.FONT_SIZE_SMALL,ae.style.lineHeight="1em",ae.style.padding="3px",ae.style.position="relative",se.style.width="100%",se.style.height=Pe,se.style.textAlign="center",se.style.position="relative",se.style.lineHeight="0px",re.style.content="",re.style.display="inline-block",B?(re.style.width=ke*2+"px",re.style.height=ke*2+"px",re.style.rotate="45deg",re.style.backgroundColor=U,ae.style.backgroundColor=U,ae.style.zIndex="99",ae.style.color=I):(re.style.width="1px",re.style.height=Pe,re.style.backgroundColor=I),se.appendChild(re),Y.appendChild(se),Y.appendChild(ae),Z.appendChild(Y)};if(h){const O=document.createElement("div");O.style.position="absolute",O.style.border=`2px solid ${l}`,O.style.height="100%",O.style.boxSizing="border-box";const B=(h.from-t)/$*100,I=(h.to-t)/$*100-B;O.style.left=B+"%",O.style.width=I+"%",w.appendChild(O),S(h.from-t,!0,"white",o),S(h.to-t,!0,"white",o)}const C=$/b;let R=0;for(;R<=$;)S(R,!1,l,"transparent"),R=R+C;return S(W,!0,"white",l),S(A,!0,"white",l),v.appendChild(Z),v}},c(ft,"FONT_SIZE_NORMAL","16px"),c(ft,"FONT_SIZE_SMALL","12px"),c(ft,"COLOR_BASE","black"),c(ft,"COLOR_GRAY","gray"),c(ft,"COLOR_LIGHT","lightgray"),c(ft,"WIDTH","1600px"),c(ft,"FONT_FAMILY","sans-serif"),c(ft,"GAP_BASE","10px"),c(ft,"GAP_SMALL","5px"),c(ft,"DEBUG",!1),ft),At,Kf=(At=class extends ac{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...At.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof ai){this.localInstance=await o.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,d=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",d)),this.localInstance.mountToDom(this.container);const f=this.localInstance;if(f.dom&&f.dom.visibleLayer&&(f.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const b=document.createElement("table");b.style.width="100%",b.style.borderCollapse="collapse";const v=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(w=>{const $=this.createElementWithText("th",w,At.FONT_SIZE_SMALL,void 0,At.COLOR_GRAY);$.style.padding=At.GAP_SMALL+"px",$.style.textAlign="left",v.appendChild($)}),b.appendChild(v),this.container.appendChild(b),this.file.slots.forEveryExistingSlot((w,$)=>{var A;const W=(A=this.localInstance)==null?void 0:A.slots.createFromSerialized(w.serialized,$);if(W){const N=document.createElement("tr"),z=this.createElementWithText("td",w.analysis.name,At.FONT_SIZE_SMALL,void 0,w.analysis.initialColor);z.style.borderTop=`1px solid ${At.COLOR_LIGHT}`,z.style.padding=`${At.GAP_SMALL}px 0px ${At.GAP_SMALL} 0px`,N.appendChild(z);const T=(Z,S)=>{const C=this.createElementWithText("td",S?S.toFixed(3)+" °C":"",At.FONT_SIZE_SMALL,void 0);C.style.borderTop=`1px solid ${At.COLOR_LIGHT}`,C.style.paddingTop=`${At.GAP_SMALL}px`,C.style.paddingBottom=`${At.GAP_SMALL}px`,N.appendChild(C)};w.analysis instanceof Pr?(T(w.analysis.initialColor,W.avg),T(w.analysis.initialColor,W.min),T(w.analysis.initialColor,W.max)):w.analysis instanceof ur&&(T(w.analysis.initialColor,W.avg),T(w.analysis.initialColor),T(w.analysis.initialColor)),b.appendChild(N)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}}})}},c(At,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),At),zs=class oc extends Gf{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new Yn(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Kf(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Yf(this),visibleLayer:new Vf(this,this.visibleUrl),cursorLayer:new qf(this),listenerLayer:new Xf(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Nf(this,void 0),this.timeline=new jf(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Bf(this,!1),this.analysis=new If(this,[]),this.analysisData=new Uf(this),this.slots=new ic(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new oc(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){this.getAllApplicableFilters();const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Zf=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof Pr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof Pr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof Pr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Pr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:tt.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof Pr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=Ns({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=Xh(s)(i);Kh(s)(n)}},Ve,Qf=(Ve=class extends ac{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=Ve.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,Ve.FONT_SIZE_SMALL,"normal",Ve.COLOR_BASE);l.style.paddingTop=Ve.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,Ve.FONT_SIZE_SMALL,void 0,Ve.COLOR_GRAY);s.style.paddingTop=Ve.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${tt.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,Ve.FONT_SIZE_SMALL,void 0,Ve.COLOR_GRAY);return n.style.paddingTop=Ve.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=Ve.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${tt.human(t.timeline.currentStep.absolute)}`,Ve.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(d=>{const f=this.createElementWithText("th",d,Ve.FONT_SIZE_SMALL,void 0,Ve.COLOR_GRAY);f.style.padding=Ve.GAP_SMALL+"px",f.style.textAlign="left",u.appendChild(f)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((d,f)=>{const b=t.slots.createFromSerialized(d.serialized,f);if(b){const v=document.createElement("tr"),w=this.createElementWithText("td",d.analysis.name,Ve.FONT_SIZE_SMALL,void 0,d.analysis.initialColor);w.style.borderTop=`1px solid ${Ve.COLOR_LIGHT}`,w.style.padding=`${Ve.GAP_SMALL}px 0px ${Ve.GAP_SMALL} 0px`,v.appendChild(w);const $=(W,A)=>{const N=this.createElementWithText("td",A?A.toFixed(3)+" °C":"",Ve.FONT_SIZE_SMALL,void 0);N.style.borderTop=`1px solid ${Ve.COLOR_LIGHT}`,N.style.paddingTop=`${Ve.GAP_SMALL}px`,N.style.paddingBottom=`${Ve.GAP_SMALL}px`,v.appendChild(N)};d.analysis instanceof Pr?($(d.analysis.initialColor,b.avg),$(d.analysis.initialColor,b.min),$(d.analysis.initialColor,b.max)):d.analysis instanceof ur&&($(d.analysis.initialColor,b.avg),$(d.analysis.initialColor),$(d.analysis.initialColor)),h.appendChild(v)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const d=100/t.columns;u.forEach(f=>{f instanceof zs&&this.buildInstance(f,d,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Ve.DEFAULT_PROPS,fileName:i}:{...Ve.DEFAULT_PROPS,...t,fileName:i}}},c(Ve,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),Ve),si,Jf=(si=class extends gt{constructor(){super(...arguments);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(si.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?a.recieveSerialized(n):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(si.LISTENER_KEY),n.delete(si.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,d=h.serialized;if(u!==d)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(d);else{const f=n.slots.createFromSerialized(d,l);f==null||f.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Zf(this)),this._csv}get png(){return this._png||(this._png=new Qf(this)),this._png}},c(si,"LISTENER_KEY","__analysis__sync"),si),eg=class extends gt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof zs?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}},tg=class extends Qh{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},rg=class extends gt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new Q);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new Q);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new Q);c(this,"_duration",0);c(this,"onDurationChanged",new Q);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof zs);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},Kn=class{constructor(r){c(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},lc=class extends Kn{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","Inspect temperatures");c(this,"description","Use mouse to inspect temperature values.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},yo=class extends Kn{},ig=class extends yo{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","Add an elyptical analysis");c(this,"description","Click and drag on the thermogram to add an elyptical analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=ic.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},sg=class extends yo{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","Add a point analysis");c(this,"description","Click on the thermogram to add a point analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},ng=class extends yo{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","Add a rectangular analysis");c(this,"description","Click and drag on the thermogram to add a rectangular analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},ag=class extends Kn{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","Edit analysis");c(this,"description","Drag corners of any selected analysis.");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},og=[lc,sg,ng,ig,ag],lg=r=>{const e=og.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},hg=class extends gt{constructor(e,t){super(e,t);c(this,"_tools",lg(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof Kn?this.value=e:this.value=this.tools[e]}},cg=class extends qn{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new tg(this,void 0));c(this,"tool",new hg(this,new lc(this)));c(this,"files",new eg(this,[]));c(this,"cursorPosition",new Sf(this,void 0));c(this,"analysisSync",new Jf(this,!0));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new Yn(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get playback(){return this._playback||(this._playback=new rg(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},zr=class hc extends nc{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new hc(e.url,e.code,e.message)}},cc=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},ug=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(R,O)=>{const B=R.getBigInt64(O,!0),I=62135596800000n,U=10000n,k=24n*60n*60n*1000n*U,Y=0x4000000000000000n,ae=0x8000000000000000n;let re=B&0x3fffffffffffffffn;B&ae&&(re>Y-k&&(re-=Y),re<0&&(re+=k));const Pe=re/U-I;return Number(Pe)};n(e,5);const a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,d=r.slice(25),f=d.byteLength/u,b=R=>{const O=R*u,B=O+u,I=d.slice(O,B),U=new DataView(I),k=U.getFloat32(8,!0),Y=U.getFloat32(12,!0),ae=n(U,0),se=U.getFloat32(24,!0),re=U.getFloat32(28,!0);return{timestamp:ae,min:k,max:Y,emissivity:se,reflectedKelvins:re}},v=[];for(let R=0;R<f;R++){const O=b(R);v.push(O)}const w={emissivity:0,reflectedKelvins:0};let $=1/0,W=-1/0;const A=[];v.forEach(R=>{w.emissivity=w.emissivity+R.emissivity,w.reflectedKelvins=w.reflectedKelvins+R.reflectedKelvins,R.min<$&&($=R.min),R.max>W&&(W=R.max),A.push(R.timestamp)});const N=A[0],z=[];A.forEach((R,O)=>{const B=A[O+1];let I=0;B===void 0&&(I=0),I=B-R;const U=R-N;z.push({absolute:R,relative:U,offset:isNaN(I)?0:I,index:O})});const T=v[v.length-1].timestamp-v[0].timestamp,Z=T/f,S=1e3/Z,C=v[0].timestamp;return{width:t,height:i,timestamp:C,bytesize:s,frameCount:f,duration:T,frameInterval:Z,fps:S,timeline:z,min:$,max:W,averageEmissivity:w.emissivity/v.length,averageReflectedKelvins:w.reflectedKelvins/v.length}},dg=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),d=e*h,f=d+h;return{array:u.slice(d,f),dataType:i}},pg=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const f=u/n-s,b=Number(f),v=t.getFloat32(8,!0),w=t.getFloat32(12,!0),$=t.getFloat32(24,!0),W=t.getFloat32(28,!0),A=r.slice(57);let N=[];if(e===0){const z=new Uint16Array(A),T=Math.abs(v-w),Z=65535;z.forEach(S=>{const C=S/Z;N.push(v+T*C)})}else e===1&&(N=Array.from(new Float32Array(A)));return{timestamp:b,min:v,max:w,emissivity:$,reflectedKelvins:W,pixels:N}},fg=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(W,A)=>{const N=W.getBigInt64(A,!0),z=62135596800000n,T=10000n,Z=24n*60n*60n*1000n*T,S=0x4000000000000000n,C=0x8000000000000000n;let O=N&0x3fffffffffffffffn;N&C&&(O>S-Z&&(O-=S),O<0&&(O+=Z));const I=O/T-z;return Number(I)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,d=h+u,f=r.slice(25),b=f.byteLength/d,v={},w=W=>{const A=W*d,N=A+d,z=f.slice(A,N),T=new DataView(z),Z=a(T,0),S=T.getFloat32(8,!0),R=T.getFloat32(12,!0)-S,B=57+t*l*s+e*l;let I=0;if(o===1)I=T.getFloat32(B,!0);else if(o===0){const Y=T.getInt16(B,!0)/65535;I=S+R*Y}return{timestamp:Z,temperature:I}};let $=0;for(let W=0;W<b;W++){const A=w(W);$===0&&($=A.timestamp),v[A.timestamp-$]=A.temperature}return v},gg=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(N,z)=>{const T=N.getBigInt64(z,!0),Z=62135596800000n,S=10000n,C=24n*60n*60n*1000n*S,R=0x4000000000000000n,O=0x8000000000000000n;let I=T&0x3fffffffffffffffn;T&O&&(I>R-C&&(I-=R),I<0&&(I+=C));const k=I/S-Z;return Number(k)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,f=a*o*u,b=d+f,v=r.slice(25),w=v.byteLength/b,$={},W=N=>{const z=N*b,T=z+b,Z=v.slice(z,T),S=new DataView(Z),C=l(S,0),R=S.getFloat32(8,!0),B=S.getFloat32(12,!0)-R,I=57,U=e,k=e+i,Y=t,ae=t+s;let se=1/0,re=-1/0,ke=0,Pe=0;for(let st=Y;st<=ae;st++){const nt=st*a;for(let ut=U;ut<=k;ut++){const ie=I+(nt+ut)*u;let le=NaN;if(h===1)le=S.getFloat32(ie,!0);else{const Ye=S.getInt16(ie,!0)/65535;le=R+B*Ye}le<se&&(se=le),le>re&&(re=le),Pe+=le,ke++}}const Ze={min:se,max:re,avg:Pe/ke,count:ke};return{timestamp:C,result:Ze}};let A=0;for(let N=0;N<w;N++){const z=W(N);A===0&&(A=z.timestamp),$[z.timestamp-A]=z.result}return $},mg=async r=>{let e=[];const t=async $=>{const W=new DataView($.slice(0,25)),A=W.getUint8(15),N=W.getUint16(17,!0),z=W.getUint16(19,!0),T=A===1?4:2,Z=57,S=N*z*T,C=Z+S,R=$.slice(25),O=R.byteLength/C;let B=[];for(let I=0;I<O;I++){const k=I*C+57,Y=k+S,ae=R.slice(k,Y);A===0||A===1&&(B=B.concat(Array.from(new Float32Array(ae))))}return B};(await Promise.all(r.map($=>t($)))).forEach($=>{e=e.concat($)}),e.sort(($,W)=>$-W);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,l=a/o,h=[];let u=[...e];for(let $=0;$<o;$++){const W=s+l*$,A=W+l,N=u.findIndex(C=>C>A),T=u.slice(0,N-1).length,Z=T/e.length*100,S={from:W,to:A,count:T,percentage:Z};h.push(S),u=u.slice(N)}const d=[...h].sort(($,W)=>$.percentage-W.percentage),f=d[0].percentage,b=d[d.length-1].percentage,v=Math.abs(f-b);return h.map($=>({...$,height:$.percentage/v*100}))},yg=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},vg=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(z,T)=>{const Z=z.getBigInt64(T,!0),S=62135596800000n,C=10000n,R=24n*60n*60n*1000n*C,O=0x4000000000000000n,B=0x8000000000000000n;let U=Z&0x3fffffffffffffffn;Z&B&&(U>O-R&&(U-=O),U<0&&(U+=R));const Y=U/C-S;return Number(Y)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,f=a*o*u,b=d+f,v=r.slice(25),w=v.byteLength/b,$={},W=(z,T)=>{const Z=e+i/2,S=t+s/2,C=(z-Z)/(i/2),R=(T-S)/(s/2);return C*C+R*R<=1},A=z=>{const T=z*b,Z=T+b,S=v.slice(T,Z),C=new DataView(S),R=l(C,0),O=C.getFloat32(8,!0),I=C.getFloat32(12,!0)-O,U=57,k=e,Y=e+i,ae=t,se=t+s;let re=1/0,ke=-1/0,Pe=0,Ze=0;for(let nt=ae;nt<=se;nt++){const ut=nt*a;for(let ie=k;ie<=Y;ie++)if(W(ie,nt)){const le=U+(ut+ie)*u;let $e=NaN;if(h===1)$e=C.getFloat32(le,!0);else{const Te=C.getInt16(le,!0)/65535;$e=O+I*Te}$e<re&&(re=$e),$e>ke&&(ke=$e),Ze+=$e,Pe++}}const st={min:re,max:ke,avg:Ze/Pe,count:Pe};return{timestamp:R,result:st}};let N=0;for(let z=0;z<w;z++){const T=A(z);N===0&&(N=T.timestamp),$[T.timestamp-N]=T.result}return $},bg=[{extension:"lrc",minme:"application/octet-stream"}],wg={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:bg,is:yg,baseInfo:ug,getFrameSubset:dg,frameData:pg,registryHistogram:mg,pointAnalysisData:fg,rectAnalysisData:gg,ellipsisAnalysisData:vg},uc=Object.freeze(wg),xg={LrcParser:uc},dc=Object.values(xg),pc=(r,e)=>{const t=dc.find(i=>i.is(r,e));if(t===void 0)throw new cc(2,e,`No parser found for '${e}'.`);return t},fc=dc.map(r=>r.extensions),Sg=fc.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),$g=class gc{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new gc(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new zr(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=pc(i,this.thermalUrl);return this.pocessTheService(new ai(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof cc)return this.pocessTheService(zr.fromError(s));throw s}}pocessTheService(e){return e}},_g=class mc{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new Q);c(this,"onMouseLeave",new Q);c(this,"onDrop",new Q);c(this,"onProcessingEnd",new Q);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new mc(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Sg,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},Cg=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new vo(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=pc(e,r.name);return new ai(this,e,t,r.name)}catch(e){return new zr(r.name,3,e.message)}}handleDropzone(r){return _g.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=$g.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},Pg=class extends gt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},kg=class extends gt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},oh=class Ja{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new Q);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Ja(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Ja(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof ai?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},Ag=class{constructor(r){c(this,"onBatchComplete",new Q);c(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=oh.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=oh.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Og=class extends gt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},Eg=class extends gt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new cg(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Lg=class extends gt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((b,v)=>{const w=v.reduce(($,W)=>[...$,...W],[]);return[...b,...w]},[]).sort((b,v)=>b-v);const h=n/a;let u=i+h;const d=new Map;let f=0;for(;u!==!1;){const b=l.findIndex($=>$>u),v=l.slice(0,b).length;d.set(u-h/2,v),f+=v,l=l.slice(b);const w=u+h;u=w<s?w:!1}return{result:d,resultCount:f}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(uc.registryHistogram,[t]);this.value=i}},Rg=class extends gt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},Dg=class extends Qh{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Tg=class extends qn{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Eg(this,[]));c(this,"_batch");c(this,"onProcessingStart",new Q);c(this,"onProcessingEnd",new Q);c(this,"opacity",new Og(this,1));c(this,"minmax",new Dg(this,void 0));c(this,"loading",new Rg(this,!1));c(this,"range",new $f(this,void 0));c(this,"histogram",new Lg(this,[]));c(this,"palette");c(this,"filters",new Yn(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof ai?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof ai&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new Ag(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},vo=class extends qn{constructor(e,t){super();c(this,"id");c(this,"service",new Cg(this));c(this,"registries",{});c(this,"palette",new Af(this,"jet"));c(this,"smooth",new kg(this,!1));c(this,"graphSmooth",new Pg(this,!1));c(this,"pool");c(this,"filters",new Yn(this));this.pool=e||xf.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Tg(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}},Ig=Object.defineProperty,Mg=Object.getOwnPropertyDescriptor,Xt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ig(e,t,s),s};const lh=["ready","select"],Ug={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Tt=class extends er{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new Q,this.left=0,this.top=0,this.w=0,this.h=0}render(){return x`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Bd(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(lh,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Ug[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!lh.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Xl({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Xl).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Tt.styles=fe`
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
  `;Xt([y({type:String,reflect:!0})],Tt.prototype,"type",2);Xt([y({type:Array})],Tt.prototype,"events",2);Xt([y({type:Object,hasChanged:()=>!0})],Tt.prototype,"options",2);Xt([y({type:Array})],Tt.prototype,"cols",2);Xt([y({type:Array})],Tt.prototype,"rows",2);Xt([y({type:String})],Tt.prototype,"data",2);Xt([y({type:Object})],Tt.prototype,"view",2);Xt([y({type:Array})],Tt.prototype,"selection",2);Xt([y({type:Object})],Tt.prototype,"_data",2);Xt([y({type:Number,reflect:!0})],Tt.prototype,"left",2);Xt([y({type:Number,reflect:!0})],Tt.prototype,"top",2);Xt([y({type:Number,reflect:!0})],Tt.prototype,"w",2);Xt([y({type:Number,reflect:!0})],Tt.prototype,"h",2);Tt=Xt([ne("thermal-chart")],Tt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>new Fg;class Fg{}const Ga=new WeakMap,Ce=Gn(class extends Qu{render(r){return j}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),j}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=Ga.get(e);t===void 0&&(t=new WeakMap,Ga.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=Ga.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var E=(r=>(r.next="next",r.prev="prev",r.back="back",r.close="close",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.download="download",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.byday="by day",r.byhour="by hour",r.byweek="by week",r.bymonth="by month",r.byyear="by year",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r))(E||{}),Ng=Object.defineProperty,zg=Object.getOwnPropertyDescriptor,yc=(r,e,t,i)=>{for(var s=i>1?void 0:i?zg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ng(e,t,s),s};let Cs=class extends er{constructor(){super(),this.dialogRef=ue(),this.closeButtonRef=ue(),this.invokerRef=ue()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return x`
            <slot name="invoker" ${Ce(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ce(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ce(this.closeButtonRef)} @click=${this.setClose}>

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
                    <thermal-button variant="foreground" @click=${this.setClose}>
                        ${L(E.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};Cs.shadowRootOptions={...er.shadowRootOptions,mode:"open"};Cs.styles=fe`

        .dialog {
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );
            border-radius: var( --thermal-radius );
            border-color: var( --thermal-slate );
            border-width: 1px;
            padding: calc( var( --thermal-gap ) * 1.5 );
            font-size: var( --thermal-fs-small );

            &::backdrop {
                backdrop-filter: blur(3px);
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
            flex-wrap: nowrap;
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

        
    
    `;yc([y({type:String,reflect:!0})],Cs.prototype,"label",2);Cs=yc([ne("thermal-dialog")],Cs);let mn;const jg=new Uint8Array(16);function Bg(){if(!mn&&(mn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!mn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return mn(jg)}const kt=[];for(let r=0;r<256;++r)kt.push((r+256).toString(16).slice(1));function Hg(r,e=0){return kt[r[e+0]]+kt[r[e+1]]+kt[r[e+2]]+kt[r[e+3]]+"-"+kt[r[e+4]]+kt[r[e+5]]+"-"+kt[r[e+6]]+kt[r[e+7]]+"-"+kt[r[e+8]]+kt[r[e+9]]+"-"+kt[r[e+10]]+kt[r[e+11]]+kt[r[e+12]]+kt[r[e+13]]+kt[r[e+14]]+kt[r[e+15]]}const Wg=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),hh={randomUUID:Wg};function Gg(r,e,t){if(hh.randomUUID&&!e&&!r)return hh.randomUUID();r=r||{};const i=r.random||(r.rng||Bg)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Hg(i)}const Zo=class Zo extends er{get UUID(){return this._UUID===void 0&&(this._UUID=Gg()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),bt.on("languageChanged",()=>{this.requestUpdate()})}};Zo.shadowRootOptions={...er.shadowRootOptions,mode:"open"};let _t=Zo;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vc=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ch=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new vc(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vg{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yg=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class uh extends Vg{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new vc(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Yg(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new uh(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new uh(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ve({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new ch(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new ch(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const bc="tour-context",wc="tour-step",xc="tourable-element";var qg=Object.defineProperty,Sc=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&qg(e,t,s),s};class fi extends _t{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}Sc([y({type:String})],fi.prototype,"tour");Sc([de({context:xc})],fi.prototype,"tourableElement");var Xg=Object.defineProperty,Kg=Object.getOwnPropertyDescriptor,Zn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kg(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xg(e,t,s),s};let jr=class extends fi{constructor(){super(...arguments),this.tourableElementRef=ue(),this.variant="slate",this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return x`
            <button class="${this.variant}" ${Ce(this.tourableElementRef)}>
                <slot></slot>
            </button>
        `}};jr.VARIANTS=["slate","primary","foreground","background"];jr.shadowRootOptions={...er.shadowRootOptions,mode:"open"};jr.styles=fe`

    :host([interactive="true"]) button:hover {
        box-shadow: var( --thermal-shadow );
    }

    :host([interactive="false"]) button:hover {
        cursor: default;
    }

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
    
    `;Zn([y({type:String,converter:{fromAttribute:r=>jr.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],jr.prototype,"variant",2);Zn([y({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],jr.prototype,"interactive",2);Zn([y({type:String})],jr.prototype,"size",2);jr=Zn([ne("thermal-button")],jr);const oi=Math.min,Fr=Math.max,Tn=Math.round,li=r=>({x:r,y:r}),Zg={left:"right",right:"left",bottom:"top",top:"bottom"},Qg={start:"end",end:"start"};function eo(r,e,t){return Fr(r,oi(e,t))}function Qi(r,e){return typeof r=="function"?r(e):r}function Br(r){return r.split("-")[0]}function js(r){return r.split("-")[1]}function $c(r){return r==="x"?"y":"x"}function bo(r){return r==="y"?"height":"width"}function Bs(r){return["top","bottom"].includes(Br(r))?"y":"x"}function wo(r){return $c(Bs(r))}function Jg(r,e,t){t===void 0&&(t=!1);const i=js(r),s=wo(r),n=bo(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=In(a)),[a,In(a)]}function em(r){const e=In(r);return[to(r),e,to(e)]}function to(r){return r.replace(/start|end/g,e=>Qg[e])}function tm(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function rm(r,e,t,i){const s=js(r);let n=tm(Br(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(to)))),n}function In(r){return r.replace(/left|right|bottom|top/g,e=>Zg[e])}function im(r){return{top:0,right:0,bottom:0,left:0,...r}}function xo(r){return typeof r!="number"?im(r):{top:r,right:r,bottom:r,left:r}}function zi(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function dh(r,e,t){let{reference:i,floating:s}=r;const n=Bs(e),a=wo(e),o=bo(a),l=Br(e),h=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,f=i[o]/2-s[o]/2;let b;switch(l){case"top":b={x:u,y:i.y-s.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:d};break;case"left":b={x:i.x-s.width,y:d};break;default:b={x:i.x,y:i.y}}switch(js(e)){case"start":b[a]-=f*(t&&h?-1:1);break;case"end":b[a]+=f*(t&&h?-1:1);break}return b}const sm=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:d}=dh(h,i,l),f=i,b={},v=0;for(let w=0;w<o.length;w++){const{name:$,fn:W}=o[w],{x:A,y:N,data:z,reset:T}=await W({x:u,y:d,initialPlacement:i,placement:f,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:r,floating:e}});u=A??u,d=N??d,b={...b,[$]:{...b[$],...z}},T&&v<=50&&(v++,typeof T=="object"&&(T.placement&&(f=T.placement),T.rects&&(h=T.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):T.rects),{x:u,y:d}=dh(h,f,l)),w=-1)}return{x:u,y:d,placement:f,strategy:s,middlewareData:b}};async function _c(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:b=0}=Qi(e,r),v=xo(b),$=o[f?d==="floating"?"reference":"floating":d],W=zi(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement($)))==null||t?$:$.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),A=d==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,N=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),z=await(n.isElement==null?void 0:n.isElement(N))?await(n.getScale==null?void 0:n.getScale(N))||{x:1,y:1}:{x:1,y:1},T=zi(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:A,offsetParent:N,strategy:l}):A);return{top:(W.top-T.top+v.top)/z.y,bottom:(T.bottom-W.bottom+v.bottom)/z.y,left:(W.left-T.left+v.left)/z.x,right:(T.right-W.right+v.right)/z.x}}const nm=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:u=0}=Qi(r,e)||{};if(h==null)return{};const d=xo(u),f={x:t,y:i},b=wo(s),v=bo(b),w=await a.getDimensions(h),$=b==="y",W=$?"top":"left",A=$?"bottom":"right",N=$?"clientHeight":"clientWidth",z=n.reference[v]+n.reference[b]-f[b]-n.floating[v],T=f[b]-n.reference[b],Z=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let S=Z?Z[N]:0;(!S||!await(a.isElement==null?void 0:a.isElement(Z)))&&(S=o.floating[N]||n.floating[v]);const C=z/2-T/2,R=S/2-w[v]/2-1,O=oi(d[W],R),B=oi(d[A],R),I=O,U=S-w[v]-B,k=S/2-w[v]/2+C,Y=eo(I,k,U),ae=!l.arrow&&js(s)!=null&&k!==Y&&n.reference[v]/2-(k<I?O:B)-w[v]/2<0,se=ae?k<I?k-I:k-U:0;return{[b]:f[b]+se,data:{[b]:Y,centerOffset:k-Y-se,...ae&&{alignmentOffset:se}},reset:ae}}}),am=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...$}=Qi(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const W=Br(s),A=Br(o)===o,N=await(l.isRTL==null?void 0:l.isRTL(h.floating)),z=f||(A||!w?[In(o)]:em(o));!f&&v!=="none"&&z.push(...rm(o,w,v,N));const T=[o,...z],Z=await _c(e,$),S=[];let C=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&S.push(Z[W]),d){const I=Jg(s,a,N);S.push(Z[I[0]],Z[I[1]])}if(C=[...C,{placement:s,overflows:S}],!S.every(I=>I<=0)){var R,O;const I=(((R=n.flip)==null?void 0:R.index)||0)+1,U=T[I];if(U)return{data:{index:I,overflows:C},reset:{placement:U}};let k=(O=C.filter(Y=>Y.overflows[0]<=0).sort((Y,ae)=>Y.overflows[1]-ae.overflows[1])[0])==null?void 0:O.placement;if(!k)switch(b){case"bestFit":{var B;const Y=(B=C.map(ae=>[ae.placement,ae.overflows.filter(se=>se>0).reduce((se,re)=>se+re,0)]).sort((ae,se)=>ae[1]-se[1])[0])==null?void 0:B[0];Y&&(k=Y);break}case"initialPlacement":k=o;break}if(s!==k)return{reset:{placement:k}}}return{}}}};function Cc(r){const e=oi(...r.map(n=>n.left)),t=oi(...r.map(n=>n.top)),i=Fr(...r.map(n=>n.right)),s=Fr(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function om(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>zi(Cc(s)))}const lm=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=Qi(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),d=om(u),f=zi(Cc(u)),b=xo(o);function v(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&h!=null)return d.find($=>l>$.left-b.left&&l<$.right+b.right&&h>$.top-b.top&&h<$.bottom+b.bottom)||f;if(d.length>=2){if(Bs(t)==="y"){const O=d[0],B=d[d.length-1],I=Br(t)==="top",U=O.top,k=B.bottom,Y=I?O.left:B.left,ae=I?O.right:B.right,se=ae-Y,re=k-U;return{top:U,bottom:k,left:Y,right:ae,width:se,height:re,x:Y,y:U}}const $=Br(t)==="left",W=Fr(...d.map(O=>O.right)),A=oi(...d.map(O=>O.left)),N=d.filter(O=>$?O.left===A:O.right===W),z=N[0].top,T=N[N.length-1].bottom,Z=A,S=W,C=S-Z,R=T-z;return{top:z,bottom:T,left:Z,right:S,width:C,height:R,x:Z,y:z}}return f}const w=await n.getElementRects({reference:{getBoundingClientRect:v},floating:i.floating,strategy:a});return s.reference.x!==w.reference.x||s.reference.y!==w.reference.y||s.reference.width!==w.reference.width||s.reference.height!==w.reference.height?{reset:{rects:w}}:{}}}};async function hm(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Br(t),o=js(t),l=Bs(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,d=Qi(e,r);let{mainAxis:f,crossAxis:b,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof v=="number"&&(b=o==="end"?v*-1:v),l?{x:b*u,y:f*h}:{x:f*h,y:b*u}}const cm=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await hm(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},um=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:$=>{let{x:W,y:A}=$;return{x:W,y:A}}},...l}=Qi(r,e),h={x:t,y:i},u=await _c(e,l),d=Bs(Br(s)),f=$c(d);let b=h[f],v=h[d];if(n){const $=f==="y"?"top":"left",W=f==="y"?"bottom":"right",A=b+u[$],N=b-u[W];b=eo(A,b,N)}if(a){const $=d==="y"?"top":"left",W=d==="y"?"bottom":"right",A=v+u[$],N=v-u[W];v=eo(A,v,N)}const w=o.fn({...e,[f]:b,[d]:v});return{...w,data:{x:w.x-t,y:w.y-i}}}}};function Ji(r){return Pc(r)?(r.nodeName||"").toLowerCase():"#document"}function tr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function gi(r){var e;return(e=(Pc(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Pc(r){return r instanceof Node||r instanceof tr(r).Node}function Or(r){return r instanceof Element||r instanceof tr(r).Element}function Er(r){return r instanceof HTMLElement||r instanceof tr(r).HTMLElement}function ph(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof tr(r).ShadowRoot}function Hs(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=br(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function dm(r){return["table","td","th"].includes(Ji(r))}function Qn(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function So(r){const e=$o(),t=br(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function pm(r){let e=hi(r);for(;Er(e)&&!ji(e);){if(Qn(e))return null;if(So(e))return e;e=hi(e)}return null}function $o(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ji(r){return["html","body","#document"].includes(Ji(r))}function br(r){return tr(r).getComputedStyle(r)}function Jn(r){return Or(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function hi(r){if(Ji(r)==="html")return r;const e=r.assignedSlot||r.parentNode||ph(r)&&r.host||gi(r);return ph(e)?e.host:e}function kc(r){const e=hi(r);return ji(e)?r.ownerDocument?r.ownerDocument.body:r.body:Er(e)&&Hs(e)?e:kc(e)}function ro(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=kc(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=tr(s);return n?e.concat(a,a.visualViewport||[],Hs(s)?s:[],a.frameElement&&t?ro(a.frameElement):[]):e.concat(s,ro(s,[],t))}function Ac(r){const e=br(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Er(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=Tn(t)!==n||Tn(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function Oc(r){return Or(r)?r:r.contextElement}function Mi(r){const e=Oc(r);if(!Er(e))return li(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=Ac(e);let a=(n?Tn(t.width):t.width)/i,o=(n?Tn(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const fm=li(0);function Ec(r){const e=tr(r);return!$o()||!e.visualViewport?fm:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gm(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==tr(r)?!1:e}function Ps(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=Oc(r);let a=li(1);e&&(i?Or(i)&&(a=Mi(i)):a=Mi(r));const o=gm(n,t,i)?Ec(n):li(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(n){const f=tr(n),b=i&&Or(i)?tr(i):i;let v=f,w=v.frameElement;for(;w&&i&&b!==v;){const $=Mi(w),W=w.getBoundingClientRect(),A=br(w),N=W.left+(w.clientLeft+parseFloat(A.paddingLeft))*$.x,z=W.top+(w.clientTop+parseFloat(A.paddingTop))*$.y;l*=$.x,h*=$.y,u*=$.x,d*=$.y,l+=N,h+=z,v=tr(w),w=v.frameElement}}return zi({width:u,height:d,x:l,y:h})}function mm(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=gi(i),o=e?Qn(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=li(1);const u=li(0),d=Er(i);if((d||!d&&!n)&&((Ji(i)!=="body"||Hs(a))&&(l=Jn(i)),Er(i))){const f=Ps(i);h=Mi(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x,y:t.y*h.y-l.scrollTop*h.y+u.y}}function ym(r){return Array.from(r.getClientRects())}function Lc(r){return Ps(gi(r)).left+Jn(r).scrollLeft}function vm(r){const e=gi(r),t=Jn(r),i=r.ownerDocument.body,s=Fr(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Fr(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+Lc(r);const o=-t.scrollTop;return br(i).direction==="rtl"&&(a+=Fr(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function bm(r,e){const t=tr(r),i=gi(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=$o();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function wm(r,e){const t=Ps(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Er(r)?Mi(r):li(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function fh(r,e,t){let i;if(e==="viewport")i=bm(r,t);else if(e==="document")i=vm(gi(r));else if(Or(e))i=wm(e,t);else{const s=Ec(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return zi(i)}function Rc(r,e){const t=hi(r);return t===e||!Or(t)||ji(t)?!1:br(t).position==="fixed"||Rc(t,e)}function xm(r,e){const t=e.get(r);if(t)return t;let i=ro(r,[],!1).filter(o=>Or(o)&&Ji(o)!=="body"),s=null;const n=br(r).position==="fixed";let a=n?hi(r):r;for(;Or(a)&&!ji(a);){const o=br(a),l=So(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Hs(a)&&!l&&Rc(r,a))?i=i.filter(u=>u!==a):s=o,a=hi(a)}return e.set(r,i),i}function Sm(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?Qn(e)?[]:xm(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const d=fh(e,u,s);return h.top=Fr(d.top,h.top),h.right=oi(d.right,h.right),h.bottom=oi(d.bottom,h.bottom),h.left=Fr(d.left,h.left),h},fh(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function $m(r){const{width:e,height:t}=Ac(r);return{width:e,height:t}}function _m(r,e,t){const i=Er(e),s=gi(e),n=t==="fixed",a=Ps(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=li(0);if(i||!i&&!n)if((Ji(e)!=="body"||Hs(s))&&(o=Jn(e)),i){const d=Ps(e,!0,n,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=Lc(s));const h=a.left+o.scrollLeft-l.x,u=a.top+o.scrollTop-l.y;return{x:h,y:u,width:a.width,height:a.height}}function Va(r){return br(r).position==="static"}function gh(r,e){return!Er(r)||br(r).position==="fixed"?null:e?e(r):r.offsetParent}function Dc(r,e){const t=tr(r);if(Qn(r))return t;if(!Er(r)){let s=hi(r);for(;s&&!ji(s);){if(Or(s)&&!Va(s))return s;s=hi(s)}return t}let i=gh(r,e);for(;i&&dm(i)&&Va(i);)i=gh(i,e);return i&&ji(i)&&Va(i)&&!So(i)?t:i||pm(r)||t}const Cm=async function(r){const e=this.getOffsetParent||Dc,t=this.getDimensions,i=await t(r.floating);return{reference:_m(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Pm(r){return br(r).direction==="rtl"}const km={convertOffsetParentRelativeRectToViewportRelativeRect:mm,getDocumentElement:gi,getClippingRect:Sm,getOffsetParent:Dc,getElementRects:Cm,getClientRects:ym,getDimensions:$m,getScale:Mi,isElement:Or,isRTL:Pm},Tc=cm,Am=um,Om=am,Em=nm,Lm=lm,Ic=(r,e,t)=>{const i=new Map,s={platform:km,...t},n={...s.platform,_c:i};return sm(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=Gn(class extends co{constructor(r){var e;if(super(r),r.type!==Ur.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return ni}});var Rm=Object.defineProperty,Dm=Object.getOwnPropertyDescriptor,Ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rm(e,t,s),s};let Hr=class extends fi{constructor(){super(...arguments),this.dropdownRef=ue(),this.invokerRef=ue(),this.optionsRef=ue(),this.open="close",this.interactive="on",this.variant="slate"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Ic(this.invokerRef.value,this.optionsRef.value,{middleware:[Tc(2),Om(),Lm(),Am()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return x`

            <div class="dropdown" ${Ce(this.dropdownRef)}>

                <thermal-button class="${Dt(r)}" ${Ce(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?x`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:x`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Ce(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};Hr.shadowRootOptions={...er.shadowRootOptions,mode:"open"};Hr.styles=fe`

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
    
    `;Ws([pi({slot:"option"})],Hr.prototype,"_options",2);Ws([y({type:String,reflect:!0})],Hr.prototype,"open",2);Ws([y({type:String,reflect:!0,attribute:!0}),P()],Hr.prototype,"interactive",2);Ws([y({type:String,reflect:!0})],Hr.prototype,"variant",2);Hr=Ws([ne("thermal-dropdown")],Hr);var Tm=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,ea=(r,e,t,i)=>{for(var s=i>1?void 0:i?Im(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tm(e,t,s),s};let Bi=class extends er{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=ue(),this.contentRef=ue(),this.rulerContentRef=ue()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return x`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ce(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ce(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ce(this.contentRef)}>

                    ${this.collapsed===!1?x`
                        <slot></slot>    
                    `:j}
                
                </div>

            </div>

            ${this.collapsed?x`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:j}
        
        `}};Bi.styles=fe`

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

    `;ea([P()],Bi.prototype,"collapsed",2);ea([P()],Bi.prototype,"lastContentWidth",2);ea([P()],Bi.prototype,"drawerRef",2);Bi=ea([ne("thermal-bar")],Bi);var Mm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Um(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mm(e,t,s),s};let Gt=class extends _t{constructor(){super(...arguments),this.language=bt.language,this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=ue(),this.contentRef=ue()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,l=a-0,h=this.contentRef.value.offsetHeight,u=4/3;let d=0,f=0;h<o?(console.log("priorita šířky"),d=l,f=d/u):(console.log("priorita výšky"),f=o,d=f*u),this.contentRef.value.setAttribute("style",`width: ${d}px !important; height: ${f}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return x`

        <div class="container ${this.dark?"dark":"normal"}" ${Ce(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?x`
            <div class="bar">

                <slot name="label">
                    ${this.label?x`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:j}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                <thermal-dropdown >

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","fr","cy"].map(r=>x`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{bt.changeLanguage(r),this.language=r}}
                            >${r.toUpperCase()}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>

                <!--
                ${this.showfullscreen===!0?x`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?x`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:x`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:j}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?x`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${Ce(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?x`<div class="credits">

                    ${this.recorded?x`<div>
                            <div class="credits-field">${L(E.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:j}

                    ${this.author?x`<div>
                            <div class="credits-field">${L(E.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:j}

                    ${this.license?x`<div>
                            <div class="credits-field">${L(E.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:j}

                </div>`:j}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};Gt.styles=fe`

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );            

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        :host([fullscreen="on"]) .container {
            border: 0;
            border-radius: 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;

            header {
                width: 100%;
            }

            .content {
                background: red;
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
            color: var( --thermal-foreground );
            &::before {
                opacity: .5;
                font-size: calc( var(--thermal-fs-sm) * 0.8 );
                display: block;
                padding-bottom: calc( var(--thermal-gap) * .5);
            }
        }
    
    `;pr([P()],Gt.prototype,"language",2);pr([pi({slot:"bar",flatten:!0})],Gt.prototype,"barElements",2);pr([pi({slot:"pre",flatten:!0})],Gt.prototype,"preElements",2);pr([pi({slot:"content",flatten:!0})],Gt.prototype,"contentElements",2);pr([y({type:String,reflect:!0})],Gt.prototype,"fullscreen",2);pr([y({type:String,reflect:!0,attribute:!0})],Gt.prototype,"showfullscreen",2);pr([y({type:String,reflect:!0,attribute:!0})],Gt.prototype,"dark",2);pr([y()],Gt.prototype,"author",2);pr([y()],Gt.prototype,"recorded",2);pr([y()],Gt.prototype,"license",2);pr([y()],Gt.prototype,"label",2);Gt=pr([ne("thermal-app")],Gt);var Fm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,_o=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fm(e,t,s),s};let ks=class extends er{render(){return x`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&x`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};ks.styles=fe`
    
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

    `;_o([y({type:String})],ks.prototype,"label",2);_o([y({type:String})],ks.prototype,"hint",2);ks=_o([ne("thermal-field")],ks);var zm=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,es=(r,e,t,i)=>{for(var s=i>1?void 0:i?jm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zm(e,t,s),s};let Wr=class extends _t{render(){return j}};es([y({type:String,reflect:!0,attribute:!0})],Wr.prototype,"thermal",2);es([y({type:String,reflect:!0,attribute:!0})],Wr.prototype,"visible",2);es([y({type:String,reflect:!0,attribute:!0})],Wr.prototype,"author",2);es([y({type:String,reflect:!0,attribute:!0})],Wr.prototype,"note",2);es([y({type:String,reflect:!0,attribute:!0})],Wr.prototype,"label",2);Wr=es([ne("time-entry")],Wr);const Bm=new vo;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Bm);const Gs=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new vo(void 0,e);return window.Thermal.managers.set(r,t),t}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mn extends co{constructor(e){if(super(e),this.it=j,e.type!==Ur.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===ni)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Mn.directiveName="unsafeHTML",Mn.resultType=1;const Ut=Gn(Mn),Qo=class Qo{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?j:x`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${L(E.note).toLocaleLowerCase()}</button>
            <div slot="content">${Ut(t)}</div>
        </thermal-dialog>`}renderInstance(e,t,i,s,n,a){return x`<div class="file">

            <article
                @mouseenter=${()=>t(e)}
                @mouseleave=${()=>i(e)}
            >

                <file-mirror  .file=${e}>
                
                    <div class="file-title">
                    
                        <h3>
                            <span>${n}</span>
                            <span>${s}</span>
                        </h3>

                        <div>

                            ${this.renderInfo(n,a)}

                            <button
                                class="file-info-button"
                                @click=${()=>e.export.downloadPng()}
                            >png</button>

                            <file-info-button>
                                <button 
                                    slot="invoker"
                                    class="file-info-button"
                                >${L(E.info).toLocaleLowerCase()}</button>
                            </file-info-button>

                            <button
                                class="file-info-button"
                                @click=${()=>{e.group.registry.range.imposeRange({from:e.min,to:e.max})}}
                                @focus=${()=>t(e)}
                                @blur=${()=>i(e)}
                            >${L(E.range).toLocaleLowerCase()}</button>
                        
                        
                        </div>

                    </div>

                    <file-canvas></file-canvas>
                    ${e.timeline.isSequence?x`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:j}
                    
                    <file-analysis-table></file-analysis-table>

                </file-mirror>

            </article>
        
        </div>`}};Qo.styles=fe`


        .file {
            box-sizing: border-box;
            padding: 2.5px;
        }

        .file article {
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            background-color: var(--thermal-slate-light);
        }

        .file thermal-file-mirror {
            display: block;
        }

        .file-title {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var( --thermal-foreground );
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
            padding: calc( var(--thermal-fs) * .5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .file-title > h3 {
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .file-title > h3 > span {
            white-space: nowrap;
        }

        .file-title > div {
            flex-grow: 1;
            display: flex;
            gap: 5px;
            justify-content: flex-end;
        }

        .file-info-button {
            cursor: pointer;
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
        }

        .file-info-button:hover {
            color: var(--thermal-background);
            background-color: var(--thermal-primary);
        }

        .timeline {
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
        }

    `;let Hi=Qo;const Jo=class Jo{constructor(e){this.element=e,this.instanceRenderer=new Hi(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?x`
                <div class="group-header">
                
                    ${e?x`<h2 class="group-title">${e}</h2>`:j}

                    ${t?x`<p class="group-info">${t}</p>`:j}

                </div>
            `:j}renderGroup(e,t,i,s,n){const a=this.trimmedString(e.label),o=this.trimmedString(e.info),l={"group-files":!0,[`group-files-${t}`]:!0};return x`

            <section class="${Dt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(a,o)}

                <div class=${Dt(l)}>


                    ${e.files.map(({instance:u,innerHtml:d,label:f,time:b})=>this.instanceRenderer.renderInstance(u,s,n,b,f,d))}


                </div>

            </section>

        `}renderGroupStart(e,t,i){const s=this.trimmedString(e.label),n=this.trimmedString(e.info),a={"group-files":!0,[`group-files-${t}`]:!0};return x`

            <section class="${Dt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(s,n)}

                <div class=${Dt(a)}>
        
        `}renderGroupEnd(){return x`
            </div>
        </section>
        `}};Jo.styles=fe`


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: 1px solid var( --thermal-slate );
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
            width: calc( 100%  + 5px);
            margin: 0 -2.5px;
        }

        .group-files-1 .file { width: 100%; }
        
        .group-files-2 .file { width: 50%; }

        .group-files-3 .file { width: 33%; }

        .group-files-4 .file { width: 25%; }

        .group-files-5 .file { width: 20%; }

        .group-files-6 .file { width: calc( 100% / 6 ); }

        .group-files-7 .file { width: calc( 100% / 7 ); }

        .group-files-8 .file { width: calc( 100% / 8 ); }

        .group-files-9 .file { width: calc( 100% / 9 ); }

        .group-files-10 .file { width: calc( 100% / 10 ); }

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

    `;let As=Jo,Hm=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof zr)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Vh(e).getTime():this.grouping==="day"?En(e).getTime():this.grouping==="week"?Nr(e).getTime():this.grouping==="month"?Rn(e).getTime():this.grouping==="year"?go(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Hh(e).getTime():this.grouping==="day"?jh(e).getTime():this.grouping==="week"?Dn(e).getTime():this.grouping==="month"?Ln(e).getTime():this.grouping==="year"?Bh(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:rt(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:rt(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+rt(e,"w")+" of "+rt(e,"yyyy"),info:[tt.humanDate(Nr(e).getTime()),tt.humanDate(Dn(e).getTime())].join(" - ")}:this.grouping==="month"?{label:rt(e,"MMMM yyyy"),info:[tt.humanDate(Rn(e).getTime()),tt.humanDate(Ln(e).getTime())].join(" - ")}:this.grouping==="year"?{label:rt(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?tt.human(e):this.grouping==="hour"||this.grouping==="day"?rt(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",tt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var Wm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,Kt=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wm(e,t,s),s};let Ot=class extends _t{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=Gs(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Hm(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof Wr))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return x`
            <slot name="entry"></slot>

            ${this.scopeSlug?x`<manager-mirror slug=${this.scopeSlug}>

                    <registry-mirror slug="${this.scopeSlug}">

                        <group-mirror slug="${this.slug}">

                                <div class="grp">

                                    <div class="grp-inner">

                                        <div class="grp-header">

                                            <h2>${this.name??this.slug}</h2>

                                            <div>

                                                <button
                                                    class="file-info-button"
                                                    @click=${()=>{var r;return(r=this.grouper)==null?void 0:r.group.analysisSync.png.downloadPng({columns:this.columns})}}
                                                >png</button>

                                                <button
                                                    class="file-info-button"
                                                    @click=${()=>{var r;return(r=this.grouper)==null?void 0:r.group.analysisSync.csv.downloadAsCsv()}}
                                                >csv</button>


                                                <button
                                                    class="file-info-button"
                                                    @click=${()=>{this.grouper&&this.grouper.group.registry.range.imposeRange({from:this.grouper.group.minmax.value.min,to:this.grouper.group.minmax.value.max})}}
                                                >range</button>

                                            </div>
                                        
                                        </div>



                                        <slot></slot>

                                        <group-tool-buttons></group-tool-buttons>

                                        ${this.groups.map(r=>{var e;return(e=this.groupRenderer)==null?void 0:e.renderGroup(r,this.columns,this.grouping,t=>{this.onInstanceEnter&&this.onInstanceEnter(t)},t=>{this.onInstanceLeave&&this.onInstanceLeave(t)})})}

                                    </div>

                                </div>

                        </group-mirror>
                    
                    </registry-mirror>

                </manager-mirror>

                `:j}

        `}};Ot.styles=[Hi.styles,As.styles,fe`

        :host([width="1"]) {
            width: 100%;
        }
        :host([width="2"]) {
            width: 50%;
        }
        :host([width="3"]) {
            width: 33%;
        }
        :host([width="4"]) {
            width: 25%;
        }
        :host([width="5"]) {
            width: 20%;
        }
        :host([width="6"]) {
            width: calc( 100% / 6  - 5px);
        }
        :host([width="7"]) {
            width: calc( 100% / 7  - 5px);
        }

        .grp {

            padding: calc( var( --thermal-gap ) * 0.3 );
        
        }

        .grp-inner {

            width: 100%;
            box-sizing: border-box;
            padding: calc( var( --thermal-gap ) * 0.3 );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
        
        }

        .grp-header {

            display: flex;
            justify-content: space-between;
            align-items: center;
        
        }

        .grp-header h2 {
            margin: 0;
            padding: 0;
            padding-bottom: calc( var( --thermal-gap ) * .8 );
            font-size: calc( var( --thermal-fs ) * 1.3);
            line-height: 1em;
        }
    
    `];Kt([P(),pi({slot:"entry",flatten:!0})],Ot.prototype,"entries",2);Kt([P()],Ot.prototype,"groups",2);Kt([P()],Ot.prototype,"instances",2);Kt([y()],Ot.prototype,"columns",2);Kt([y()],Ot.prototype,"breakpoint",2);Kt([y({type:Number,reflect:!0})],Ot.prototype,"width",2);Kt([y({type:String,reflect:!0})],Ot.prototype,"grouping",2);Kt([y()],Ot.prototype,"name",2);Kt([y()],Ot.prototype,"slug",2);Kt([P()],Ot.prototype,"scopeSlug",2);Kt([y({type:Object})],Ot.prototype,"onInstanceEnter",2);Kt([y({type:Object})],Ot.prototype,"onInstanceLeave",2);Kt([y({type:Object})],Ot.prototype,"groupRenderer",2);Ot=Kt([ne("time-group")],Ot);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=r=>r??j;var Vm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,Vs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ym(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vm(e,t,s),s};let Ci=class extends _t{constructor(){super(...arguments),this.tRef=ue(),this.vRef=ue(),this.haRef=ue()}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}updated(r){if(super.updated(r),this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,this.v);this.ta=t}this.t===void 0&&this.tRef.value&&(this.tRef.value.value=""),this.ha===void 0&&this.haRef.value&&(this.haRef.value.value=""),this.v===void 0&&this.vRef.value&&(this.vRef.value.value="")}renderNumberField(r,e,t,i,s,n,a,o,l){return x`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${Ce(r)} 
                            id=${e}
                            name=${e}
                            value=${me(s)}
                            min=${me(n)}
                            max=${me(a)}
                            step=${me(o)}
                            type="number"
                        ></input>
                        <span>${Ut(i)}</span>
                    </div>

                    ${l?x`<label for=${e}>${l}</label>`:j}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),t:e},s=t<0?L(E.youfeelcolder,i):L(E.youfeelwarmer,i),n=r.toFixed(2);return x`<div class="result">

            <p class="result_label">${L(E.apparenttemperature)}</p>

            <p class="result_value">
                ${n} °C
            </p>

            <p class="result_comment">${s}</p>
        
        </div>`}render(){return x`
            <thermal-app label=${L(E.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${L(E.info)}>
                    <thermal-button slot="invoker">${L(E.info)}</thermal-button>
                    <div slot="content">
                        ${Ut(L(E.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?x`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:j}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,this.UUID+"aat_air_temperature",L(E.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,this.UUID+"aat_wind_speed",L(E.windspeed),"m/s<sup>2</sup>",this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,this.UUID+"aat_air_humidity",L(E.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):j}
                </div>
                

            </thermal-app>
        `}};Ci.styles=fe`

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
            border-bottom: 1px solid var( --thermal-slate-light );

            -moz-appearance: textfield;

            &:focus {
                outline: 0;
                border-bottom: 1px solid var( --thermal-primary );
            }
        
        }



        .result {

            padding: calc(var(--thermal-gap) * .7);
            border: 1px solid var( --thermal-slate );
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
                outline: 3px solid var(--thermal-primary);
            }
        }


    `;Vs([y({type:Number,reflect:!0,attribute:!0})],Ci.prototype,"t",2);Vs([y({type:Number,reflect:!0,attribute:!0})],Ci.prototype,"v",2);Vs([y({type:Number,reflect:!0,attribute:!0})],Ci.prototype,"ha",2);Vs([P()],Ci.prototype,"ta",2);Ci=Vs([ne("apparent-temperature-aat")],Ci);var qm=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,Km=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qm(e,t,s),s};let io=class extends fi{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}render(){return x`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker" ${Ce(this.tourableElementRef)}>About</thermal-button>
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
                        <p>version ${ho}</p>
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

            <slot name="tour"></slot>
        `}};io.styles=fe`

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
    
    `;io=Km([ne("app-info-button")],io);const Co="manager-instance",ts="manager-palette-context",Po="manager-smooth-context",ta="manager-graph-function-context";var Zm=Object.defineProperty,Qm=Object.getOwnPropertyDescriptor,rs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zm(e,t,s),s};let Gr=class extends fi{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:vr.jet},this.smooth=!1,this.graphSmooth=!1}getTourableRoot(){}connectedCallback(){super.connectedCallback();const e={},t=Gr.sanitizeStringPalette(this.palette.key);e.palette=t;const i=Gs(this.slug,e);this.manager=i}updated(e){super.updated(e),e.has("palette")&&(e.get("palette"),this.palette)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=Gr.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}static sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(vr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:vr[e]}}render(){return x`<slot></slot>`}};rs([de({context:Co})],Gr.prototype,"manager",2);rs([y({type:String,reflect:!0,attribute:!0})],Gr.prototype,"slug",2);rs([de({context:ts}),y({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:vr[r]}),toAttribute:r=>r.key.toString()}})],Gr.prototype,"palette",2);rs([de({context:Po}),y({type:String,reflect:!0,attribute:!0})],Gr.prototype,"smooth",2);rs([de({context:ta}),y({type:String,reflect:!0,attribute:!0})],Gr.prototype,"graphSmooth",2);Gr=rs([ne("manager-provider")],Gr);var Jm=Object.defineProperty,ey=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Jm(e,t,s),s};class is extends fi{connectedCallback(){super.connectedCallback(),this.manager}}ey([ve({context:Co,subscribe:!0}),P()],is.prototype,"manager");const ko="registry-instance",Ao="registry-opacity",ra="registry-range-from",ia="registry-range-to",Mc="registry-loading",Oo="registry-min",Eo="registry-max";var ty=Object.defineProperty,ry=Object.getOwnPropertyDescriptor,qr=(r,e,t,i)=>{for(var s=i>1?void 0:i?ry(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ty(e,t,s),s};let Lr=class extends is{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}getTourableRoot(){}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return x`<slot></slot>`}};qr([y({type:String,reflect:!0,attribute:!0})],Lr.prototype,"slug",2);qr([de({context:ko})],Lr.prototype,"registry",2);qr([de({context:Ao}),y({type:Number,reflect:!0,attribute:!0})],Lr.prototype,"opacity",2);qr([de({context:Oo}),P()],Lr.prototype,"min",2);qr([de({context:Eo}),P()],Lr.prototype,"max",2);qr([de({context:ra}),y({type:Number,reflect:!0,attribute:!0})],Lr.prototype,"from",2);qr([de({context:ia}),y({type:Number,reflect:!0,attribute:!0})],Lr.prototype,"to",2);qr([de({context:Mc}),y({type:String,reflect:!0,attribute:!0})],Lr.prototype,"loading",2);Lr=qr([ne("registry-provider")],Lr);var iy=Object.defineProperty,sy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&iy(e,t,s),s};class Zt extends is{connectedCallback(){super.connectedCallback(),this.registry}}sy([ve({context:ko,subscribe:!0})],Zt.prototype,"registry");const Lo="group-instance",sa="tool-context",na="tools-context";var ny=Object.defineProperty,ay=Object.getOwnPropertyDescriptor,Ys=(r,e,t,i)=>{for(var s=i>1?void 0:i?ay(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ny(e,t,s),s};let Wi=class extends Zt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug),this.slug,this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,e=>{this.tool=e})}render(){return x`<slot></slot>`}};Ys([y({type:String,attribute:!0,reflect:!0})],Wi.prototype,"slug",2);Ys([de({context:Lo})],Wi.prototype,"group",2);Ys([de({context:sa})],Wi.prototype,"tool",2);Ys([de({context:na})],Wi.prototype,"tools",2);Wi=Ys([ne("group-provider")],Wi);var oy=Object.defineProperty,ly=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&oy(e,t,s),s};class Pi extends Zt{constructor(){super()}connectedCallback(){super.connectedCallback()}}ly([ve({context:Lo,subscribe:!0})],Pi.prototype,"group");const Ro="file",Uc="failure",Fc="file-loading",hy="file-loaded",aa="file-provider-element",Do="file-ms-context",To="file-cursor",Io="file-cursor-setter",qs="playback",Mo="duration",Uo="playing",Nc="playbackSpeed",zc="recording",jc="mayStop",cy="analysislist",Fo="file-markers-context";var uy=Object.defineProperty,It=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&uy(e,t,s),s};class xt extends Pi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.playing=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new Q,this.onSuccess=new Q,this.onFailure=new Q,this.onInstanceCreated=new Q}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("playbackspeed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}}It([de({context:Ro}),P()],xt.prototype,"file");It([de({context:Uc}),P()],xt.prototype,"failure");It([de({context:Fc}),P()],xt.prototype,"loading");It([de({context:hy}),P()],xt.prototype,"ready");It([de({context:Uo}),y({type:String,reflect:!0,attribute:!0})],xt.prototype,"playing");It([de({context:Mo}),P()],xt.prototype,"duration");It([de({context:qs}),P()],xt.prototype,"currentFrame");It([de({context:To})],xt.prototype,"cursor");It([de({context:Io})],xt.prototype,"cursorSetter");It([de({context:Do}),y({type:Number,reflect:!0,attribute:!0})],xt.prototype,"ms");It([de({context:Nc}),y({type:Number,reflect:!0,attribute:!0})],xt.prototype,"speed");It([de({context:zc}),y({type:String,reflect:!0,attribute:!0})],xt.prototype,"recording");It([de({context:jc}),P()],xt.prototype,"mayStop");It([pi({slot:"mark",flatten:!0})],xt.prototype,"marksQueriedInternally");It([de({context:Fo})],xt.prototype,"marksProvidedBelow");It([de({context:cy})],xt.prototype,"analysis");var dy=Object.defineProperty,py=Object.getOwnPropertyDescriptor,fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?py(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dy(e,t,s),s};let ir=class extends xt{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.log("loading sync"),this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof ai?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.log("loading async",this.thermal,this),this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof zs?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof zr&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}createInitialAnalysis(r,e,t){if(t!==void 0&&t.trim().length>0){const i=r.slots.createFromSerialized(t,e);i==null||i.setSelected(!1,!0)}}handleLoaded(r){r.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),r.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),r.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),r.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),r.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),r.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),r.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(r,1,this.analysis1),this.createInitialAnalysis(r,2,this.analysis2),this.createInitialAnalysis(r,3,this.analysis3),this.createInitialAnalysis(r,4,this.analysis4),this.createInitialAnalysis(r,5,this.analysis5),this.createInitialAnalysis(r,6,this.analysis6),this.createInitialAnalysis(r,7,this.analysis7)}assignAppropriateField(r,e){r===1?this.analysis1=e:r===2?this.analysis2=e:r===3?this.analysis3=e:r===4?this.analysis4=e:r===5?this.analysis5=e:r===6?this.analysis6=e:r===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}this.handleAnalysisUpdate(1,r),this.handleAnalysisUpdate(2,r),this.handleAnalysisUpdate(3,r),this.handleAnalysisUpdate(4,r),this.handleAnalysisUpdate(5,r),this.handleAnalysisUpdate(6,r),this.handleAnalysisUpdate(7,r)}handleAnalysisUpdate(r,e){const t=`analysis${r}`;if(e.has(t)){const i=e.get(t),s=this[t];if(this.file){const n=this.file.slots.getSlot(r);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,r);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(r):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return x`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};fr([de({context:aa})],ir.prototype,"providedSelf",2);fr([y({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],ir.prototype,"batch",2);fr([y({type:String,attribute:!0,reflect:!0})],ir.prototype,"thermal",2);fr([y({type:String,attribute:!0,reflect:!0})],ir.prototype,"visible",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis1",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis2",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis3",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis4",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis5",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis6",2);fr([y({type:String,reflect:!0,attribute:!0})],ir.prototype,"analysis7",2);ir=fr([ne("file-provider")],ir);var fy=Object.defineProperty,gy=Object.getOwnPropertyDescriptor,ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?gy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fy(e,t,s),s};let ci=class extends xt{constructor(){super(...arguments),this.providedSelf=this,this.container=ue(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof ai){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof zr&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return x`

                    <div class="container">
                        <div ${Ce(this.container)} class="${Dt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${fc.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return x`
            ${this.ready?x`<slot></slot>`:j}
            <slot name="mark"></slot>
        `}};ci.styles=fe`

        .container {

            

        }

        .dropin {
            
            width: 100%;
            aspect-ratio: 4 / 3;
            transition: all .3s ease-in-out;
            cursor: pointer;

            border-radius: var( --thermal-radius );
            padding: var( --thermal-gap );
            box-sizing: border-box;

            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;

            background: var( --thermal-slate );
            color: var( --thermal-foreground );

        }

        .dropin-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .dropin-title {
            font-weight: bold;
        }

        .dropin-supported-files {

            font-size: small !important;

        }

        .hover {
            opacity: .7;
        }

        thermal-button {
            cursor: pointer;
        }
    
    `;ss([de({context:aa})],ci.prototype,"providedSelf",2);ss([P()],ci.prototype,"container",2);ss([P()],ci.prototype,"ready",2);ss([P()],ci.prototype,"hover",2);ss([P()],ci.prototype,"listener",2);ci=ss([ne("file-dropin")],ci);var my=Object.defineProperty,yy=Object.getOwnPropertyDescriptor,No=(r,e,t,i)=>{for(var s=i>1?void 0:i?yy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&my(e,t,s),s};let Os=class extends Pi{constructor(){super(...arguments),this.container=ue(),this.hover=!1,this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")})}}render(){const r={dropin:!0,hover:this.hover};return x`

            <div class="container" ${Ce(this.tourableElementRef)}>
            
                <div ${Ce(this.container)} class="${Dt(r)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Os.styles=fe`

        .container {

        }

        .dropin {
            background: var( --thermal-slate );
            width: 100%;
            aspect-ratio: 4 / 3;
        }

        .hover {
            background: var( --thermal-slate-light );
        }
    
    `;No([P()],Os.prototype,"container",2);No([P()],Os.prototype,"hover",2);Os=No([ne("group-dropin")],Os);var vy=Object.defineProperty,by=Object.getOwnPropertyDescriptor,ns=(r,e,t,i)=>{for(var s=i>1?void 0:i?by(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vy(e,t,s),s};let Vr=class extends fi{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:vr.jet},this.smooth=!1,this.graphSmooth=!1}getTourableRoot(){}connectedCallback(){super.connectedCallback();const r={},e=Vr.sanitizeStringPalette(this.palette.key);r.palette=e;const t=Gs(this.slug,r);this.manager=t}updated(r){super.updated(r),r.has("palette")&&(r.get("palette"),this.palette)}firstUpdated(r){super.firstUpdated(r),this.manager.palette.addListener(this.UUIDManagerListeners,e=>{this.setPalette(e)}),this.manager.smooth.addListener(this.UUIDManagerListeners,e=>{this.smooth=e}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,e=>{this.graphSmooth=e})}attributeChangedCallback(r,e,t){if(super.attributeChangedCallback(r,e,t),r==="palette"&&this.manager){const i=Vr.sanitizeStringPalette(t);this.manager.palette.setPalette(i)}}static sanitizeStringPalette(r){let e=!0;return r==null?e=!1:Object.keys(vr).includes(r)||(e=!1),e?r:"jet"}setPalette(r){this.palette={key:r,data:vr[r]}}render(){return x`<slot></slot>`}};ns([de({context:Co})],Vr.prototype,"manager",2);ns([y({type:String})],Vr.prototype,"slug",2);ns([de({context:ts}),y({type:String,converter:{fromAttribute:r=>({key:r,data:vr[r]}),toAttribute:r=>r.key.toString()}})],Vr.prototype,"palette",2);ns([de({context:Po}),y({type:String})],Vr.prototype,"smooth",2);ns([de({context:ta}),y({type:String})],Vr.prototype,"graphSmooth",2);Vr=ns([ne("manager-mirror")],Vr);var wy=Object.defineProperty,xy=Object.getOwnPropertyDescriptor,Xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?xy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wy(e,t,s),s};let Rr=class extends is{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1}getTourableRoot(){}connectedCallback(){super.connectedCallback();const r=this.manager.addOrGetRegistry(this.slug);this.registry=r,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}firstUpdated(r){super.firstUpdated(r),this.registry.opacity.addListener(this.UUIDRegistryListeners,e=>{this.opacity=e}),this.registry.minmax.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.min=void 0,this.max=void 0):(this.min=e.min,this.max=e.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from=e.from,this.to=e.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,e=>{this.loading=e})}updated(r){if(super.updated(r),(r.has("from")||r.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),r.has("opacity")){const e=Math.min(1,Math.max(0,this.opacity));e!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(e)}}render(){return x`<slot></slot>`}};Xr([y({type:String,reflect:!0,attribute:!0})],Rr.prototype,"slug",2);Xr([de({context:ko})],Rr.prototype,"registry",2);Xr([de({context:Ao}),y({type:Number,reflect:!0,attribute:!0})],Rr.prototype,"opacity",2);Xr([de({context:Oo}),P()],Rr.prototype,"min",2);Xr([de({context:Eo}),P()],Rr.prototype,"max",2);Xr([de({context:ra}),y({type:Number})],Rr.prototype,"from",2);Xr([de({context:ia}),y({type:Number})],Rr.prototype,"to",2);Xr([de({context:Mc}),y({type:String})],Rr.prototype,"loading",2);Rr=Xr([ne("registry-mirror")],Rr);var Sy=Object.defineProperty,$y=Object.getOwnPropertyDescriptor,Xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?$y(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sy(e,t,s),s};let Gi=class extends Zt{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener"}getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug),this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,r=>{this.tool=r})}render(){return x`<slot></slot>`}};Xs([y({type:String})],Gi.prototype,"slug",2);Xs([de({context:Lo})],Gi.prototype,"group",2);Xs([de({context:sa})],Gi.prototype,"tool",2);Xs([de({context:na})],Gi.prototype,"tools",2);Gi=Xs([ne("group-mirror")],Gi);var _y=Object.defineProperty,Cy=Object.getOwnPropertyDescriptor,ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_y(e,t,s),s};let Vt=class extends xt{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}createInitialAnalysis(r,e,t){if(t!==void 0&&t.trim().length>0){const i=r.slots.createFromSerialized(t,e);i==null||i.setSelected(!1,!0)}}handleLoaded(r){r.slots.onSlot1Serialize.set(this.UUID,e=>this.analysis1=e),r.slots.onSlot2Serialize.set(this.UUID,e=>this.analysis2=e),r.slots.onSlot3Serialize.set(this.UUID,e=>this.analysis3=e),r.slots.onSlot4Serialize.set(this.UUID,e=>this.analysis4=e),r.slots.onSlot5Serialize.set(this.UUID,e=>this.analysis5=e),r.slots.onSlot6Serialize.set(this.UUID,e=>this.analysis6=e),r.slots.onSlot7Serialize.set(this.UUID,e=>this.analysis7=e),this.createInitialAnalysis(r,1,this.analysis1),this.createInitialAnalysis(r,2,this.analysis2),this.createInitialAnalysis(r,3,this.analysis3),this.createInitialAnalysis(r,4,this.analysis4),this.createInitialAnalysis(r,5,this.analysis5),this.createInitialAnalysis(r,6,this.analysis6),this.createInitialAnalysis(r,7,this.analysis7)}assignAppropriateField(r,e){r===1?this.analysis1=e:r===2?this.analysis2=e:r===3?this.analysis3=e:r===4?this.analysis4=e:r===5?this.analysis5=e:r===6?this.analysis6=e:r===7&&(this.analysis7=e)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.file}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}this.handleAnalysisUpdate(1,r),this.handleAnalysisUpdate(2,r),this.handleAnalysisUpdate(3,r),this.handleAnalysisUpdate(4,r),this.handleAnalysisUpdate(5,r),this.handleAnalysisUpdate(6,r),this.handleAnalysisUpdate(7,r),r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}handleAnalysisUpdate(r,e){const t=`analysis${r}`;if(e.has(t)){const i=e.get(t),s=this[t];if(this.file){const n=this.file.slots.getSlot(r);if(n===void 0&&s&&s.trim().length>0&&(!i||(i==null?void 0:i.trim().length)>0)){const a=this.file.slots.createFromSerialized(s,r);a==null||a.setSelected(!1,!0)}else n!==void 0&&i&&(!s||(s==null?void 0:s.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(r):n&&s&&(n==null||n.recieveSerialized(s))}}}render(){return x`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}};ar([de({context:aa})],Vt.prototype,"providedSelf",2);ar([de({context:Ro}),y()],Vt.prototype,"file",2);ar([y({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Vt.prototype,"batch",2);ar([y({type:String})],Vt.prototype,"thermal",2);ar([y({type:String})],Vt.prototype,"visible",2);ar([y({type:String})],Vt.prototype,"analysis1",2);ar([y({type:String})],Vt.prototype,"analysis2",2);ar([y({type:String})],Vt.prototype,"analysis3",2);ar([y({type:String})],Vt.prototype,"analysis4",2);ar([y({type:String})],Vt.prototype,"analysis5",2);ar([y({type:String})],Vt.prototype,"analysis6",2);ar([y({type:String})],Vt.prototype,"analysis7",2);Vt=ar([ne("file-mirror")],Vt);var Py=Object.defineProperty,ky=Object.getOwnPropertyDescriptor,Bc=(r,e,t,i)=>{for(var s=i>1?void 0:i?ky(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Py(e,t,s),s};let Un=class extends Zt{constructor(){super(...arguments),this.tourableElemtnRef=ue()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return x`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return x`

            <thermal-dropdown variant="foreground" ${Ce(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(vr).map(([r,e])=>x`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};Un.styles=fe`

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
        border-radius: var( --thermal-fs-small );
    }

    `;Bc([ve({context:ts,subscribe:!0})],Un.prototype,"value",2);Un=Bc([ne("registry-palette-dropdown")],Un);var Ay=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,Hc=(r,e,t,i)=>{for(var s=i>1?void 0:i?Oy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ay(e,t,s),s};let Fn=class extends Zt{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return x`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${L(E.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return x`
            <div class="container" ${Ce(this.tourableElementRef)}>
                ${Object.entries(vr).map(([r,e])=>x`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};Fn.styles=fe`

    .container {
        display: flex;
        width: content-width;
        gap: 5px;
    }

    .button {
        margin: 0;
        border: 0;
        line-height: 0;
        display: flex;
        align-items: center;
        gap: 3px;
    }

    .palette {
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        border-radius: var( --thermal-fs-small );
    }

    `;Hc([ve({context:ts,subscribe:!0}),P()],Fn.prototype,"value",2);Fn=Hc([ne("registry-palette-buttons")],Fn);var Ey=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,Wc=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ly(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ey(e,t,s),s};let Nn=class extends is{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}render(){return x`

            <div ${Ce(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${L(E.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${L(E.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};Nn.styles=fe`
    
        :host {}

    `;Wc([ve({context:Po,subscribe:!0})],Nn.prototype,"smooth",2);Nn=Wc([ne("manager-smooth-switch")],Nn);var Ry=Object.defineProperty,Dy=Object.getOwnPropertyDescriptor,Gc=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ry(e,t,s),s};let zn=class extends is{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}render(){return x`

            <div ${Ce(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${L(E.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${L(E.smoothlines)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};zn.styles=fe`
    
        :host {}

    `;Gc([ve({context:ta,subscribe:!0})],zn.prototype,"smooth",2);zn=Gc([ne("manager-graph-smooth-switch")],zn);var Ty=Object.defineProperty,Iy=Object.getOwnPropertyDescriptor,Vc=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ty(e,t,s),s};let jn=class extends Zt{constructor(){super(...arguments),this.containerRef=ue()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return x`
            <div ${Ce(this.containerRef)}>
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
            <slot name="tour"></slot>
        `}};jn.styles=fe`

        :host {
        }

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
            display: block;
            width: 100%;
            cursor: pointer;
        }
        
        .thermal-opacity-container {
            display: flex;
            width: 100%;
            align-items: space-between;
            justify-content: space-between;
            color: var( --thermal-slate-dark );
            font-size: calc( var( --thermal-fs-sm ) * .7 );
        }
    
    `;Vc([ve({context:Ao,subscribe:!0})],jn.prototype,"value",2);jn=Vc([ne("registry-opacity-slider")],jn);var My=Object.defineProperty,Uy=Object.getOwnPropertyDescriptor,Fy=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&My(e,t,s),s};let mh=class extends Zt{constructor(){super(...arguments),this.buttonRef=ue()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return x`
            <thermal-button ${Ce(this.buttonRef)} @click=${this.doAction}>${L(E.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};mh=Fy([ne("registry-range-auto-button")],mh);var Ny=Object.defineProperty,zy=Object.getOwnPropertyDescriptor,jy=(r,e,t,i)=>{for(var s=i>1?void 0:i?zy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ny(e,t,s),s};let yh=class extends Zt{constructor(){super(...arguments),this.buttonRef=ue()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}render(){return x`
            <thermal-button ${Ce(this.buttonRef)} @click=${this.doAction}>${L(E.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};yh=jy([ne("registry-range-full-button")],yh);var By=Object.defineProperty,Hy=Object.getOwnPropertyDescriptor,ki=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&By(e,t,s),s};let sr=class extends Zt{constructor(){super(...arguments),this.ticksRef=ue(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=ue()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/sr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){const r=this.highlightFrom!==void 0&&this.highlightTo!==void 0;let e,t;if(this.registry.minmax.value&&r&&this.highlightFrom!==void 0&&this.highlightTo!==void 0){const i=this.registry.minmax.value.min,s=this.registry.minmax.value.max-i;e=(this.highlightFrom-i)/s*100,t=(this.highlightTo-i)/s*100-e}return x`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${Ce(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${Ce(this.ticksRef)}>

                    ${r?x`<div class="highlight" style="position: absolute; top: 2px; height: 3px; left:${e}%; width: ${t}%; background-color: var(--thermal-foreground)"></div>`:j}

                    ${this.ticks.map(i=>x`
                            <div class="tick" >
                                <div class="tick-value">
                                ${i.value.toFixed(sr.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                    

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};sr.TICK_WIDTH=40;sr.TICK_FIXED=2;sr.styles=fe`

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
                height: 7px;
                //background: currentcolor;
            }
        
        }

        .placement-top {
            margin-top: 10x;
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


    `;ki([y({type:String,reflect:!0})],sr.prototype,"placement",2);ki([P()],sr.prototype,"minmax",2);ki([P()],sr.prototype,"ticks",2);ki([y({type:Number,reflect:!0})],sr.prototype,"highlightFrom",2);ki([y({type:Number,reflect:!0})],sr.prototype,"highlightTo",2);ki([ve({context:ts,subscribe:!0}),P()],sr.prototype,"palette",2);sr=ki([ne("registry-ticks-bar")],sr);var Wy=Object.defineProperty,Gy=Object.getOwnPropertyDescriptor,Ks=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wy(e,t,s),s};let Vi=class extends Zt{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return x`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return x`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};Ks([P()],Vi.prototype,"minmax",2);Ks([P()],Vi.prototype,"range",2);Ks([P()],Vi.prototype,"opacity",2);Ks([P()],Vi.prototype,"palette",2);Vi=Ks([ne("registry-log")],Vi);(()=>{var r=Object.defineProperty,e=Math.pow,t=(p,m,D)=>m in p?r(p,m,{enumerable:!0,configurable:!0,writable:!0,value:D}):p[m]=D,i=(p,m,D)=>(t(p,typeof m!="symbol"?m+"":m,D),D),s=(p,m)=>` ${m&&m.length>0?m.map(D=>`<link rel="stylesheet" href="${D}" />`).join(""):""} <style> ${p} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",d="min",f="max",b="step",v="round",w="type",$="theme",W="rtl",A="btt",N="disabled",z="keyboard-disabled",T="mousewheel-disabled",Z="slider-width",S="slider-height",C="slider-radius",R="slider-bg",O="slider-bg-hover",B="slider-bg-fill",I="pointer-width",U="pointer-height",k="pointer-radius",Y="pointer-bg",ae="pointer-bg-hover",se="pointer-bg-focus",re="pointer-shadow",ke="pointer-shadow-hover",Pe="pointer-shadow-focus",Ze="pointer-border",st="pointer-border-hover",nt="pointer-border-focus",ut="animate-onclick",ie="css-links",le="vertical",$e="horizontal",Le=(p,m,D,_,J)=>{let ye=m-p;return ye===0?D:(_-D)*(J-p)/ye+D},Ye=p=>!isNaN(parseFloat(p))&&isFinite(p),Te=(p,m)=>Ye(p)?Number(p):m,Qr=(p,m)=>m===0?0:Math.round(p/m)*m,yi=(p,m=1/0)=>{if(m===1/0)return p;let D=e(10,m);return Math.round(p*D)/D},qe=p=>p==null?!1:typeof p=="boolean"?p:p.trim().toLowerCase()==="true",Qt=(p,m)=>{p.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:m}}))},Mr=(p,m)=>{p.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:m}}))},ua=(p,m)=>{p.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:m}}))},da=(p,m)=>{p.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:m}}))},pa=(p,m)=>{if(!m||m.length<=0)return;let D=m.map(J=>Ye(J)?Te(J,J):J),_={values:D||[]};_.value=D[0],_.value0=D[0],_.value1=D[0];for(let J=1;J<D.length;J++)_[`value${J+1}`]=D[J];p.dispatchEvent(new CustomEvent("change",{detail:_}))},H=(p,m,D)=>{let _=0,J,ye,Ee,ee,te=!1,Re=(we,Je,$t,mt,ot,lt)=>{let jt=_;$t!==void 0&&we>$t&&(we=$t),Je!==void 0&&we<Je&&(we=Je),_=we;let Bt=_;return(mt===le&&lt||mt===$e&&ot)&&(Bt=100-Bt),mt===le?m.style.top=`${Bt}%`:m.style.left=`${Bt}%`,jt!==_},Ue=we=>we===m||m.contains(we),ce=(we,Je,$t,mt)=>{J=we,ye=Je,Ee=$t,ee=mt},Ge=we=>{te=we,m.classList.toggle("disabled",te),te?m.setAttribute("aria-disabled","true"):m.hasAttribute("aria-disabled")&&m.removeAttribute("aria-disabled")},cr=(we,Je)=>{Je==null?m.removeAttribute(we):m.setAttribute(we,Je)},Rt=we=>m.getAttribute(we),be=we=>{if(!te){switch(we.key){case"ArrowLeft":{we.preventDefault(),typeof J=="function"&&J(D);break}case"ArrowRight":{we.preventDefault(),typeof ye=="function"&&ye(D);break}case"ArrowUp":{we.preventDefault(),typeof Ee=="function"&&Ee(D);break}case"ArrowDown":{we.preventDefault(),typeof ee=="function"&&ee(D);break}}da(p,we)}},De=()=>{te||Qt(p,m)};return m.className=`pointer pointer-${D}`,m.addEventListener("keydown",be),m.addEventListener("click",De),{$pointer:m,get percent(){return _},get disabled(){return te},set disabled(we){Ge(we)},updatePosition:Re,isClicked:Ue,setCallbacks:ce,setAttr:cr,getAttr:Rt,destroy:()=>{m.removeEventListener("keydown",be),m.removeEventListener("click",De),m.remove()}}},q=p=>{if(p==null)return;if(Array.isArray(p))return p;if(p.trim()==="")return;let m=p.split(","),D=[],_=!0;for(let J=0;J<m.length;J++){let ye=m[J].trim();ye!==""&&(D.push(ye),Ye(ye)||(_=!1))}return _?D.map(J=>Number(J)):D},X=(p,m)=>m?m.findIndex(D=>D===p||D.toString().trim()===p.toString().trim()):-1,K=p=>({updatePosition:(m,D,_,J)=>{if(D.length<=0)return;let ye=D.length===1,Ee=D[0],ee=D[D.length-1];m===le?(p.style.removeProperty("width"),p.style.removeProperty("right"),p.style.removeProperty("left"),ye?p.style.height=`${Ee}%`:p.style.height=`${Math.abs(Ee-ee)}%`,J?(p.style.bottom="0%",ye?p.style.top="auto":p.style.top=`${Math.min(100-ee,100-Ee)}%`):(p.style.bottom="auto",ye?p.style.top="0%":p.style.top=`${Math.min(Ee,ee)}%`)):(p.style.removeProperty("height"),p.style.removeProperty("top"),p.style.removeProperty("bottom"),ye?p.style.width=`${Ee}%`:p.style.width=`${Math.abs(Ee-ee)}%`,_?(p.style.right="0%",ye?p.style.left="auto":p.style.left=`${Math.min(100-ee,100-Ee)}%`):(p.style.right="auto",ye?p.style.left="0%":p.style.left=`${Math.min(Ee,ee)}%`))}}),ge="--animate-onclick",Be="--width",_e="--height",Qe="--panel-bg-border-radius",Ne="--panel-bg",oe="--panel-bg-hover",ze="--panel-bg-fill",F="--pointer-width",G="--pointer-height",Ae="--pointer-border-radius",Ie="--pointer-bg",dt="--pointer-bg-hover",Pt="--pointer-bg-focus",_r="--pointer-shadow",Jt="--pointer-shadow-hover",hr="--pointer-shadow-focus",Jr="--pointer-border",pe="--pointer-border-hover",Oe="--pointer-border-focus",V=(p,m,D)=>{let _=new Map;for(let J of p.attributes){let ye=J.nodeName.trim().toLowerCase();if(!m.test(ye))continue;let Ee=ye.replace(/\D/g,"").trim(),ee=Ee===""||Ee==="0"||Ee==="1"?0:Te(Ee,0)-1,te=D&&typeof D=="function"?D(J.value):J.value;_.set(ee,te)}return _},xe=p=>{if(!p)return null;let m=p.getAttribute(ie);if(!m)return null;let D=m.split(";"),_=[];for(let J of D)J.trim()!==""&&_.push(J.trim());return _},He=[[Be,Z,"sliderWidth",null],[_e,S,"sliderHeight",null],[Qe,C,"sliderRadius",null],[Ne,R,"sliderBg",null],[oe,O,"sliderBgHover",null],[ze,B,"sliderBgFill",null],[F,I,"pointer#Width",/^pointer([0-9]*)-width$/],[G,U,"pointer#Height",/^pointer([0-9]*)-height$/],[Ae,k,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Ie,Y,"pointer#Bg",/^pointer([0-9]*)-bg$/],[dt,ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Pt,se,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[_r,re,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Jt,ke,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[hr,Pe,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Jr,Ze,"pointer#Border",/^pointer([0-9]*)-border$/],[pe,st,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Oe,nt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],je=(p,m,D)=>{let _=null,J=[],ye=new Map,Ee=(be,De=m)=>{let we=[...De.classList];for(let Je of we)Je.startsWith(be)&&m.classList.remove(Je)},ee=()=>{Ee("shape");let be=m.querySelectorAll(".pointer");for(let De of be)Ee("shape",De)},te=be=>{_=be,Ee("theme-"),typeof be=="string"&&m.classList.add(`theme-${be}`)},Re=()=>{if(ee(),!(J.length<=0)){m.classList.add("shape",`shape-${J[0]}`);for(let be=1;be<J.length;be++){let De=J[be];if(!De)continue;let we=m.querySelector(`.pointer-${be}`);!we||we.classList.add("shape",`shape-${De}`)}}},Ue=(be,De)=>{J[be]=De,Re()},ce=()=>{ee();let be=V(p,/^pointer([0-9]*)-shape$/);if(!(be.size<=0)){for(let De of be){let we=De[0];J[we]=De[1]}Re()}},Ge=(be,De)=>`${be}-${De}`,cr=(be,De,we)=>{let Je=D[we];if(!Je)return;let $t=we===0?m:Je.$pointer;if(De==null){ye.has(Ge(be,we))&&ye.delete(Ge(be,we)),$t.style.removeProperty(be);return}ye.set(Ge(be,we),De),$t.style.setProperty(be,De)},Rt=(be,De)=>ye.get(Ge(be,De));return(()=>{for(let be of He){let[De,we,Je,$t]=be;if($t){let ot=V(p,$t);for(let lt of ot){let jt=lt[0],Bt=lt[1];cr(De,Bt,jt)}}else{let ot=p.getAttribute(we);cr(De,ot,0)}let mt=[];if(Je.indexOf("#")===-1)mt.push([Je,0]);else{mt.push([Je.replace("#",""),0]),mt.push([Je.replace("#","0"),0]),mt.push([Je.replace("#","1"),0]);for(let ot=1;ot<D.length;ot++)mt.push([Je.replace("#",(ot+1).toString()),ot])}for(let ot of mt)try{let lt=ot[0],jt=ot[1];Object.prototype.hasOwnProperty.call(p,lt)||Object.defineProperty(p,lt,{get(){return Rt(De,jt)},set:Bt=>{cr(De,Bt,jt)}})}catch(lt){console.error(lt)}}te(p.getAttribute($)),ce()})(),{setStyle:cr,getStyle:Rt,get theme(){return _},set theme(be){te(be)},get pointerShapes(){return J},setPointerShape:Ue}},it="animate-on-click",Me="range-dragging",zt=(p,m,D,_)=>{let J=[],ye=Ue=>{for(let ce of J)ce.update&&typeof ce.update=="function"&&ce.update(Ue)},Ee=()=>{for(let Ue of J)Ue.destroy&&typeof Ue.destroy=="function"&&Ue.destroy()},ee=(Ue,ce)=>{for(let Ge of J)Ge.onAttrChange&&typeof Ge.onAttrChange=="function"&&Ge.onAttrChange(Ue,ce)},te=Ue=>{if(Ue.gettersAndSetters){for(let ce of Ue.gettersAndSetters)if(!(!ce.name||!ce.attributes))try{Object.prototype.hasOwnProperty.call(p,ce.name)||Object.defineProperty(p,ce.name,ce.attributes)}catch(Ge){console.error("defineSettersGetters error:",Ge)}}},Re=Ue=>{var ce;if(!Ue.css)return;let Ge=(ce=p.shadowRoot)==null?void 0:ce.querySelector("style");!Ge||(Ge.innerHTML+=Ue.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Ue of window.tcRangeSliderPlugins){let ce=Ue();J.push(ce),ce.init&&typeof ce.init=="function"&&(ce.init(p,m,D,_),te(ce),Re(ce))}},update:ye,onAttrChange:ee,destroy:Ee}},pt=10,Js=20,Kc=(p,m)=>{let D=new Map,_=/^value([0-9]*)$/;for(let ee of p.attributes){let te=ee.nodeName.trim().toLowerCase();if(!_.test(te))continue;let Re=te.replace("value","").trim(),Ue=Re===""||Re==="0"||Re==="1"?0:Te(Re,0)-1,ce=Ye(ee.value)?Te(ee.value,0):ee.value;D.set(Ue,ce)}let J=Math.max(...Array.from(D.keys())),ye=[];ye.push([H(p,m,0),D.get(0)]);let Ee=m;for(let ee=1;ee<=J;ee++){let te=m.cloneNode(!0);Ee.after(te),Ee=te,ye.push([H(p,te,ee),D.get(ee)])}return ye},el=(p,m,D,_,J,ye,Ee)=>{try{Object.defineProperty(p,_,{configurable:!0,get(){if(!m)return;let ee=m.pointers[D];if(!ee)return;let te=m.getTextValue(ee.percent);return Ye(te)?Te(te,te):te},set:ee=>{m.pointers[D]?m==null||m.setValue(ee,D):m==null||m.addPointer(ee)}}),Object.defineProperty(p,J,{configurable:!0,get(){var ee,te;return(te=(ee=m==null?void 0:m.pointers[D])==null?void 0:ee.getAttr("aria-label"))!=null?te:void 0},set:ee=>{!m||m.setAriaLabel(D,ee)}}),Object.defineProperty(p,ye,{configurable:!0,get(){var ee,te;return(te=(ee=m==null?void 0:m.styles)==null?void 0:ee.pointerShapes[D])!=null?te:null},set:ee=>{!m||!m.styles||m.styles.setPointerShape(D,ee)}}),Object.defineProperty(p,Ee,{configurable:!0,get(){var ee;return(ee=m==null?void 0:m.pointers[D].disabled)!=null?ee:!1},set:ee=>{if(!m)return;let te=m==null?void 0:m.pointers[D];!te||(te.disabled=ee)}})}catch(ee){console.error(ee)}},Zc=(p,m)=>{let D=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let _=2;_<pt;_++)D.push([`value${_}`,`ariaLabel${_}`,`pointer${_}Shape`,`pointer${_}Disabled`,_-1]);for(let _ of D)el(p,m,_[4],_[0],_[1],_[2],_[3])},tl=(p,m,D)=>{var _;let J=(_=D.shadowRoot)==null?void 0:_.querySelector(".container");if(J)for(let ye of p)m?J.prepend(ye.$pointer):J.append(ye.$pointer)},Qc=(p,m)=>{if(!(!m||p.length<=1)){for(let D of p)D.$pointer.style.zIndex=Js.toString();m.$pointer.style.zIndex=(Js*2).toString()}},fa=0,ls=100,Oi=2,rl="0.3s",Jc=(p,m,D)=>{let _=D.map(g=>g[0]),J=null,ye=null,Ee=null,ee=null,te=fa,Re=ls,Ue,ce,Ge=$e,cr=Oi,Rt=!1,be=!1,De=!1,we=0,Je=1/0,$t=!1,mt,ot,lt=!1,jt=!1,Bt=!1,ei=rl,il=[],sl=g=>{lt||(g.preventDefault&&g.preventDefault(),vi(g),window.addEventListener("mousemove",vi),window.addEventListener("mouseup",en),Mr(p,g))},en=g=>{lt||(mt=void 0,ot=void 0,window.removeEventListener("mousemove",vi),window.removeEventListener("mouseup",en),ei&&m.classList.add(it),ua(p,g))},ru=(g,M)=>{if(_.length<=0)return;if(_.length===1)return _[0].isClicked(g)&&ei&&m.classList.remove(it),_[0];let he=su(g);if($t){let We=M,yr=rn(We);yr!==void 0&&(We=Qr(We,yr)),he?(mt=We,ot=0,ei&&m.classList.remove(it)):mt!==void 0&&(ot=We-mt,mt=We)}if(!iu(g)&&!he){for(let We of _)if(!(!We.isClicked(g)||We.disabled))return ei&&m.classList.remove(it),We;for(let We of _)if(J===We)return We}let Xe=1/0,ht=null;for(let We of _){if(We.disabled)continue;let yr=Math.abs(M-We.percent);yr<Xe&&(Xe=yr,ht=We)}return ht},nl=()=>_.findIndex(g=>J===g&&!g.disabled),vi=g=>{let M;if(Ge===le){let{height:Xe,top:ht}=m.getBoundingClientRect(),We=g.type.indexOf("mouse")!==-1?g.clientY:g.touches[0].clientY;M=Math.min(Math.max(0,We-ht),Xe)*100/Xe}else{let{width:Xe,left:ht}=m.getBoundingClientRect(),We=g.type.indexOf("mouse")!==-1?g.clientX:g.touches[0].clientX;M=Math.min(Math.max(0,We-ht),Xe)*100/Xe}if((Rt||be)&&(M=100-M),J=ru(g.target,M),J&&Qc(_,J),$t&&_.length>1&&ot!==void 0){let Xe=_[0],ht=_[_.length-1],We=Xe.percent+ot<0,yr=ht.percent+ot>100;if(We||yr)return;for(let un=0;un<_.length;un++)Ht(un,_[un].percent+ot);return}let he=nl();he!==-1&&(Ht(he,M),J==null||J.$pointer.focus())},tn=g=>{if(lt||document.activeElement!==p||J!=null&&J.disabled)return;g.stopPropagation(),g.preventDefault();let M=g.deltaY<0,he=Rt||be,Xe=M?!he:he,ht=nl();ht!==-1&&(Xe?hs(ht,_[ht].percent):cs(ht,_[ht].percent))},al=g=>{lt||jt||(Ge===le?be?Ht(g,100):Ht(g,0):Rt?cs(g,_[g].percent):hs(g,_[g].percent))},ol=g=>{lt||jt||(Ge===le?be?Ht(g,0):Ht(g,100):Rt?hs(g,_[g].percent):cs(g,_[g].percent))},ll=g=>{lt||jt||(Ge===le?be?cs(g,_[g].percent):hs(g,_[g].percent):Rt?Ht(g,100):Ht(g,0))},hl=g=>{lt||jt||(Ge===le?be?hs(g,_[g].percent):cs(g,_[g].percent):Rt?Ht(g,0):Ht(g,100))},iu=g=>g.classList.contains("panel"),su=g=>g.classList.contains("panel-fill"),hs=(g,M)=>{if(M===void 0)return;let he=rn(M);he==null&&(he=1),M-=he,M<0&&(M=0),Ht(g,M)},cs=(g,M)=>{if(M===void 0)return;let he=rn(M);he==null&&(he=1),M+=he,M>100&&(M=100),Ht(g,M)},bi=()=>{!ee||ee.update({percents:cl(),values:ul(),$pointers:dl(),min:pl(),max:fl(),data:ya(),step:ma(),round:ba(),type:va(),textMin:sn(),textMax:nn(),rightToLeft:Sa(),bottomToTop:$a(),pointersOverlap:ka(),pointersMinDistance:wa(),pointersMaxDistance:xa(),rangeDragging:Aa(),disabled:_a(),keyboardDisabled:Ca(),mousewheelDisabled:Pa()})},nu=()=>{bi()},au=g=>{if(!(De||_.length<=1||Re===te))if(g===0){let M=Je*100/(Re-te);return Math.max(0,_[g+1].percent-M)}else{let M=we*100/(Re-te);return Math.min(_[g-1].percent+M,100)}},ou=g=>{if(!(De||_.length<=1||Re===te))if(g===_.length-1){let M=Je*100/(Re-te);return Math.min(_[g-1].percent+M,100)}else{let M=we*100/(Re-te);return Math.max(0,_[g+1].percent-M)}},rn=g=>{let M;if(typeof Ue=="function"){let he=Le(0,100,te,Re,g);M=Ue(he,g)}else M=Ue;if(Ye(M)){let he=Re-te;return M=he===0?0:M*100/he,M}},Ei=g=>{if(g===void 0)return;let M=Le(0,100,te,Re,g);return ce!==void 0?ce[Math.round(M)]:yi(M,cr)},sn=()=>ce!==void 0?ce[te]:te,nn=()=>ce!==void 0?ce[Re]:Re,ma=()=>Ue,lu=g=>{var M;return g<=0||De?sn():(M=Ei(_[g-1].percent))!=null?M:""},hu=g=>{var M;return _.length<=1||g>=_.length-1||De?nn():(M=Ei(_[g+1].percent))!=null?M:""},cl=()=>_.map(g=>g.percent),ul=()=>_.map(g=>Ei(g.percent)),dl=()=>_.map(g=>g.$pointer),pl=()=>te,fl=()=>Re,ya=()=>ce,va=()=>Ge,ba=()=>cr,wa=()=>we,xa=()=>Je,cu=g=>il[g],Sa=()=>Rt,$a=()=>be,_a=()=>lt,Ca=()=>jt,Pa=()=>Bt,ka=()=>De,Aa=()=>$t,Ht=(g,M)=>{if(M===void 0)return;let he=rn(M);he!==void 0&&(M=Qr(M,he));let Xe=_[g];if(!Xe)return;let ht=Xe.updatePosition(M,au(g),ou(g),Ge,Rt,be);ye==null||ye.updatePosition(Ge,_.map(We=>We.percent),Rt,be),bi();for(let We of _){let yr=Ei(We.percent);yr!==void 0&&(We.setAttr("aria-valuenow",yr.toString()),We.setAttr("aria-valuetext",yr.toString()))}du(),ht&&pa(p,_.map(We=>Ei(We.percent)))},Cr=()=>{for(let g=0;g<_.length;g++)Ht(g,_[g].percent)},uu=(g,M)=>{te=ce!==void 0?0:Te(g,fa),Re=ce!==void 0?ce.length-1:Te(M,ls),an(te),on(Re)},du=()=>{var g,M;for(let he=0;he<_.length;he++){let Xe=_[he];Xe.setAttr("aria-valuemin",((g=lu(he))!=null?g:"").toString()),Xe.setAttr("aria-valuemax",((M=hu(he))!=null?M:"").toString())}},an=g=>{te=Te(g,fa),te>Re&&(Re=te+ls),Cr()},on=g=>{Re=Te(g,ls),Re<te&&(Re=te+ls),Cr()},gl=g=>{De=!0;for(let M=0;M<g.length;M++)ln(g[M],M);De=!1;for(let M=0;M<g.length;M++)ln(g[M],M)},ln=(g,M)=>{let he;ce!==void 0?(he=g==null?0:X(g,ce),he===-1&&(he=0)):(he=Te(g,te),he<te&&(he=te),he>Re&&(he=Re));let Xe=Le(te,Re,0,100,he);Ht(M,Xe)},hn=g=>{if(g==null){Ue=void 0;return}if(typeof g=="function"){Ue=g,Cr();return}if(Ye(g)){Ue=Te(g,1);let M=Math.abs(Re-te);Ue>M&&(Ue=void 0),Cr();return}Ue=void 0},Oa=g=>{De=g,Cr()},Ea=g=>{(!Ye(g)||g<0)&&(g=0),we=g},La=g=>{(!Ye(g)||g<0)&&(g=1/0),Je=g},Ra=g=>{lt=g,m.classList.toggle("disabled",lt),lt?m.setAttribute("aria-disabled","true"):m.hasAttribute("aria-disabled")&&m.removeAttribute("aria-disabled")},ml=g=>{jt=g},yl=g=>{Bt=g,Bt?document.removeEventListener("wheel",tn):document.addEventListener("wheel",tn,{passive:!1})},Da=g=>{if(g==null){ce=void 0;return}if(ce=q(g),ce===void 0||ce.length<=0){ce=void 0;return}an(0),on(ce.length-1),Ue===void 0&&hn(1)},Ta=g=>{var M;typeof g=="string"?Ge=g.trim().toLowerCase()===le?le:$e:Ge=$e;let he=(M=p.shadowRoot)==null?void 0:M.querySelector(".range-slider-box");if(!he)return;he.className=`range-slider-box type-${Ge}`,Cr();let Xe=Ge===le?"vertical":"horizontal";for(let ht of _)ht.setAttr("aria-orientation",Xe)},Ia=g=>{Rt=g,_.length>1&&tl(_,Rt,p),Cr(),bi()},Ma=g=>{be=g,_.length>1&&tl(_,be,p),Cr(),bi()},Ua=g=>{cr=Te(g,Oi),cr<0&&(cr=Oi),bi()},vl=g=>{g==null||g.toString().trim().toLowerCase()==="false"?(ei=void 0,m.style.removeProperty(ge),m.classList.remove(it)):(ei=g.toString(),m.style.setProperty(ge,ei),m.classList.add(it))},bl=(g,M)=>{let he=_[g];!he||(he.setAttr("aria-label",M),il[g]=M)},cn=g=>{if(mt=void 0,_.length<=1){$t=!1,m.classList.remove(Me);return}$t=g,m.classList.toggle(Me,$t)},pu=()=>{Ra(qe(p.getAttribute(N))),jt=qe(p.getAttribute(z)),Bt=qe(p.getAttribute(T));let g=V(p,/^pointer([0-9]*)-disabled$/,M=>qe(M));for(let M of g){let he=M[0];!_[he]||(_[he].disabled=M[1])}},fu=()=>{let g=V(p,/^aria-label([0-9]*)$/);for(let M of g){let he=M[0];bl(he,M[1])}},gu=g=>{let M=_.length,he=_[M-1].$pointer,Xe=he.cloneNode(!0);he.after(Xe);let ht=H(p,Xe,M);return ht.setCallbacks(al,ol,ll,hl),_.push(ht),ln(g,M),Cr(),bi(),M},mu=()=>{let g=_.length,M=_[g-1];return M?(M.destroy(),_.pop(),_.length<=1&&cn(!1),Cr(),bi(),g-1):-1};return(()=>{var g,M;for(let Xe of _)Xe.setCallbacks(al,ol,ll,hl);let he=(g=p.shadowRoot)==null?void 0:g.querySelector(".panel-fill");he&&(ye=K(he)),Ta(p.getAttribute(w)),Ia(qe(p.getAttribute(W))),Ma(qe(p.getAttribute(A))),uu(p.getAttribute(d),p.getAttribute(f)),hn(p.getAttribute(b)),Da(p.getAttribute(u)),gl(D.map(Xe=>Xe[1])),Oa(qe(p.getAttribute(a))),Ea(Te(p.getAttribute(o),0)),La(Te(p.getAttribute(l),1/0)),cn(qe(p.getAttribute(h))),Ua(Te(p.getAttribute(v),Oi)),pu(),fu(),Ee=je(p,m,_),vl((M=p.getAttribute(ut))!=null?M:rl),m.addEventListener("mousedown",sl),m.addEventListener("mouseup",en),m.addEventListener("touchmove",vi),m.addEventListener("touchstart",vi),Bt||document.addEventListener("wheel",tn,{passive:!1}),ee=zt(p,nu,{setValues:gl,setMin:an,setMax:on,setStep:hn,setPointersOverlap:Oa,setPointersMinDistance:Ea,setPointersMaxDistance:La,setDisabled:Ra,setType:Ta,setRightToLeft:Ia,setBottomToTop:Ma,setRound:Ua,setKeyboardDisabled:ml,setMousewheelDisabled:yl,setRangeDragging:cn,setData:Da},{getPercents:cl,getValues:ul,getPointerElements:dl,getMin:pl,getMax:fl,getStep:ma,getData:ya,getType:va,getRound:ba,getTextMin:sn,getTextMax:nn,isRightToLeft:Sa,isBottomToTop:$a,isDisabled:_a,isKeyboardDisabled:Ca,isMousewheelDisabled:Pa,isPointersOverlap:ka,isRangeDraggingEnabled:Aa,getPointersMinDistance:wa,getPointersMaxDistance:xa}),ee.init()})(),{get pointers(){return _},get styles(){return Ee},get pluginsManager(){return ee},get min(){return sn()},get max(){return nn()},get step(){return ma()},get pointersOverlap(){return ka()},set pointersOverlap(g){Oa(g)},get pointersMinDistance(){return wa()},set pointersMinDistance(g){Ea(g)},get pointersMaxDistance(){return xa()},set pointersMaxDistance(g){La(g)},get disabled(){return _a()},set disabled(g){Ra(g)},get data(){return ya()},get type(){return va()},set type(g){Ta(g)},get rightToLeft(){return Sa()},set rightToLeft(g){Ia(g)},get bottomToTop(){return $a()},set bottomToTop(g){Ma(g)},get round(){return ba()},set round(g){Ua(g)},get animateOnClick(){return ei},set animateOnClick(g){vl(g)},get keyboardDisabled(){return Ca()},set keyboardDisabled(g){ml(g)},get mousewheelDisabled(){return Pa()},set mousewheelDisabled(g){yl(g)},get rangeDragging(){return Aa()},set rangeDragging(g){cn(g)},setMin:an,setMax:on,setValue:ln,setStep:hn,setData:Da,getTextValue:Ei,setAriaLabel:bl,getAriaLabel:cu,addPointer:gu,removePointer:mu,destroy:()=>{m.removeEventListener("mousedown",sl),m.removeEventListener("mouseup",en),m.removeEventListener("touchmove",vi),m.removeEventListener("touchstart",vi),document.removeEventListener("wheel",tn);for(let g of _)g.destroy();ee==null||ee.destroy()}}},eu=(p,m,D)=>{let _=He.find(([ee,te,Re,Ue])=>te.replace("#","")===m.replace(/\d+/g,""));if(_&&p.styles){let[ee,te,Re,Ue]=_,ce=m.replace(/\D/g,"").trim(),Ge=ce===""||ce==="0"||ce==="1"?0:Te(ce,0)-1;p.styles.setStyle(ee,D,Ge);return}switch(p&&p.pluginsManager&&p.pluginsManager.onAttrChange(m,D),m){case d:{p.setMin(D);break}case f:{p.setMax(D);break}case b:{p.setStep(D);break}case a:{p.pointersOverlap=qe(D);break}case o:{p.pointersMinDistance=Te(D,0);break}case h:{p.rangeDragging=qe(D);break}case l:{p.pointersMaxDistance=Te(D,1/0);break}case N:{p.disabled=qe(D);break}case z:{p.keyboardDisabled=qe(D);break}case T:{p.mousewheelDisabled=qe(D);break}case u:{p.setData(D);break}case w:{p.type=D;break}case W:{p.rightToLeft=qe(D);break}case A:{p.bottomToTop=qe(D);break}case v:{p.round=Te(D,Oi);break}case $:{p.styles&&(p.styles.theme=D);break}case ut:{p.animateOnClick=D;break}}let J=null;if(/^value([0-9]*)$/.test(m)&&(J="value"),/^pointer([0-9]*)-disabled$/.test(m)&&(J="pointer-disabled"),/^aria-label([0-9]*)$/.test(m)&&(J="aria-label"),/^pointer([0-9]*)-shape$/.test(m)&&(J="pointer-shape"),!J)return;let ye=m.replace(/\D/g,"").trim(),Ee=ye===""||ye==="0"||ye==="1"?0:Te(ye,0)-1;switch(J){case"value":{p.setValue(D,Ee);break}case"pointer-disabled":{let ee=p==null?void 0:p.pointers[Ee];if(!ee)return;ee.disabled=qe(D);break}case"aria-label":{p.setAriaLabel(Ee,D);break}case"pointer-shape":{p.styles&&p.styles.setPointerShape(Ee,D);break}}},tu=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(p){this.slider&&this.slider.setStep(p)}get step(){var p;return(p=this.slider)==null?void 0:p.step}set disabled(p){this.slider&&(this.slider.disabled=p)}get disabled(){var p,m;return(m=(p=this.slider)==null?void 0:p.disabled)!=null?m:!1}set data(p){var m;(m=this.slider)==null||m.setData(p)}get data(){var p;return(p=this.slider)==null?void 0:p.data}set min(p){var m;(m=this.slider)==null||m.setMin(p)}get min(){var p;return(p=this.slider)==null?void 0:p.min}set max(p){var m;(m=this.slider)==null||m.setMax(p)}get max(){var p;return(p=this.slider)==null?void 0:p.max}set round(p){!this.slider||(this.slider.round=p)}get round(){var p,m;return(m=(p=this.slider)==null?void 0:p.round)!=null?m:Oi}set type(p){!this.slider||(this.slider.type=p??$e)}get type(){var p;return((p=this.slider)==null?void 0:p.type)||$e}set pointersOverlap(p){!this.slider||(this.slider.pointersOverlap=p)}get pointersOverlap(){var p,m;return(m=(p=this.slider)==null?void 0:p.pointersOverlap)!=null?m:!1}set pointersMinDistance(p){!this.slider||(this.slider.pointersMinDistance=p)}get pointersMinDistance(){var p,m;return(m=(p=this.slider)==null?void 0:p.pointersMinDistance)!=null?m:0}set pointersMaxDistance(p){!this.slider||(this.slider.pointersMaxDistance=p)}get pointersMaxDistance(){var p,m;return(m=(p=this.slider)==null?void 0:p.pointersMaxDistance)!=null?m:1/0}set theme(p){!this.slider||!this.slider.styles||(this.slider.styles.theme=p)}get theme(){var p,m,D;return(D=(m=(p=this.slider)==null?void 0:p.styles)==null?void 0:m.theme)!=null?D:null}set rtl(p){!this.slider||(this.slider.rightToLeft=p)}get rtl(){var p,m;return(m=(p=this.slider)==null?void 0:p.rightToLeft)!=null?m:!1}set btt(p){!this.slider||(this.slider.bottomToTop=p)}get btt(){var p,m;return(m=(p=this.slider)==null?void 0:p.bottomToTop)!=null?m:!1}set keyboardDisabled(p){!this.slider||(this.slider.keyboardDisabled=p)}get keyboardDisabled(){var p,m;return(m=(p=this.slider)==null?void 0:p.keyboardDisabled)!=null?m:!1}set mousewheelDisabled(p){!this.slider||(this.slider.mousewheelDisabled=p)}get mousewheelDisabled(){var p,m;return(m=(p=this.slider)==null?void 0:p.mousewheelDisabled)!=null?m:!1}set animateOnClick(p){!this.slider||(this.slider.animateOnClick=p)}get animateOnClick(){var p;return(p=this.slider)==null?void 0:p.animateOnClick}get rangeDragging(){var p,m;return(m=(p=this.slider)==null?void 0:p.rangeDragging)!=null?m:!1}set rangeDragging(p){this.slider&&(this.slider.rangeDragging=qe(p))}get externalCSSList(){return this._externalCSSList}addPointer(p){var m,D;if(!this.slider)return;let _=(D=(m=this.slider)==null?void 0:m.addPointer(p))!=null?D:0;el(this,this.slider,_,`value${_+1}`,`ariaLabel${_+1}`,`pointerShape${_+1}`,`pointer${_+1}Disabled`)}removePointer(){var p;!this.slider||(p=this.slider)==null||p.removePointer()}addCSS(p){if(!this.shadowRoot)return;let m=document.createElement("style");m.textContent=p,this.shadowRoot.appendChild(m)}connectedCallback(){var p,m;if(!this.shadowRoot)return;this._externalCSSList=xe(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let D=(p=this.shadowRoot)==null?void 0:p.querySelector(".pointer");if(!D)return;let _=(m=this.shadowRoot)==null?void 0:m.getElementById("range-slider");if(!_)return;let J=Kc(this,D);this.slider=Jc(this,_,J),Zc(this,this.slider),this._observer=new MutationObserver(ye=>{ye.forEach(Ee=>{var ee;if(!this.slider||Ee.type!=="attributes")return;let te=Ee.attributeName;!te||eu(this.slider,te,(ee=this.getAttribute(te))!=null?ee:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},ga=tu;window.tcRangeSlider=ga,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",ga),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends ga{})})();(()=>{var r=(o,l,h,u,d)=>{let f=l-o;return f===0?h:(u-h)*(d-o)/f+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,d=null,f=!1,b=s,v=n,w=()=>{var S;let C=(S=o==null?void 0:o.shadowRoot)==null?void 0:S.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),d=document.createElement("div"),d.classList.add("mark-values"),h.append(d),C.append(h)},$=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},W=()=>{var S;if(!h||!l)return;let C=l.getMin(),R=l.getMax(),O=l.getType()==="vertical",B=l.isRightToLeft()||l.isBottomToTop();for(let U=0;U<b;U++){let k=document.createElement("div");k.classList.add("mark",`mark-${U}`);let Y=b===0?0:U*100/(b-1);O?B?k.style.top=`${100-Y}%`:k.style.top=`${Y}%`:B?k.style.left=`${100-Y}%`:k.style.left=`${Y}%`,u==null||u.append(k)}let I=l.getData();for(let U=0;U<v;U++){let k=document.createElement("div");k.classList.add("mark-value",`mark-value-${U}`);let Y=v===0?0:U*100/(v-1),ae=r(0,v-1,C,R,U);k.textContent=(I?(S=I[Math.round(ae)])!=null?S:"":ae).toString(),O?B?k.style.top=`${100-Y}%`:k.style.top=`${Y}%`:B?k.style.left=`${100-Y}%`:k.style.left=`${Y}%`,d==null||d.append(k)}},A=(S,C)=>{Z(),b=S,v=C,b<=0&&(b=s),v<=0&&(v=n),w(),W(),$()},N=S=>{f=S,f?(w(),W(),$()):Z()},z=S=>{!h||h.style.setProperty("--marks-color",S)},T=S=>{!h||h.style.setProperty("--values-color",S)},Z=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(S,C,R,O)=>{var B,I;l=O,o=S,f=i(o.getAttribute("marks")),f&&(A(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),z((B=o.getAttribute("marks-color"))!=null?B:"#cbd5e1"),T((I=o.getAttribute("marks-values-color"))!=null?I:"#475569"))},onAttrChange:(S,C)=>{S==="marks"&&N(i(C)),S==="marks-count"&&A(t(C,s),v),S==="marks-values-count"&&A(b,t(C,n)),S==="marks-color"&&z(C),S==="marks-values-color"&&T(C)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return f??!1},set:S=>{N(i(S))}}},{name:"marksCount",attributes:{get(){return b??s},set:S=>{A(t(S,s),v)}}},{name:"marksValuesCount",attributes:{get(){return b??s},set:S=>{A(b,t(S,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:S=>{z(S)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:S=>{T(S)}}}],destroy:Z,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Vy=Object.defineProperty,Yy=Object.getOwnPropertyDescriptor,Tr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vy(e,t,s),s};let dr=class extends Zt{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=ue(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?x`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:x`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Ce(this.sliderRef)}
                slider-width="100%"
                slider-height="calc( var( --thermal-fs-sm ) * 0.9)"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-radius="0"

                slider-bg="var( --thermal-slate )"
                slider-bg-hover="var( --thermal-slate )"
                slider-bg-fill="${this.palette.data.gradient}"

                pointer-bg="${this.palette.data.pixels[0]}"
                pointer2-bg="${this.palette.data.pixels[this.palette.data.pixels.length-1]}"
                
                generate-labels="true"
                
            ></tc-range-slider>

        </div>

        <slot name="tour"></slot>
        <slot></slot>

        `}};dr.styles=fe`

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
                height: calc( var( --thermal-fs ) * .9 );
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
    
    `;Tr([ve({context:Oo,subscribe:!0}),P()],dr.prototype,"min",2);Tr([ve({context:Eo,subscribe:!0}),P()],dr.prototype,"max",2);Tr([ve({context:ra,subscribe:!0}),P()],dr.prototype,"from",2);Tr([ve({context:ia,subscribe:!0}),P()],dr.prototype,"to",2);Tr([P()],dr.prototype,"hasFixedFrom",2);Tr([P()],dr.prototype,"hasFixedTo",2);Tr([ve({context:ts,subscribe:!0}),P()],dr.prototype,"palette",2);Tr([P()],dr.prototype,"sliderRef",2);Tr([P()],dr.prototype,"initialised",2);dr=Tr([ne("registry-range-slider")],dr);var qy=Object.defineProperty,Xy=Object.getOwnPropertyDescriptor,Zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qy(e,t,s),s};let Yi=class extends Zt{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=ue()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?j:x`
            <div ${Ce(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};Zs([ve({context:ra,subscribe:!0})],Yi.prototype,"from",2);Zs([ve({context:ia,subscribe:!0})],Yi.prototype,"to",2);Zs([y({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Yi.prototype,"fixed",2);Zs([y({type:String,reflect:!0,attribute:!0})],Yi.prototype,"separator",2);Yi=Zs([ne("registry-range-display")],Yi);var Ky=Object.defineProperty,Zy=Object.getOwnPropertyDescriptor,oa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ky(e,t,s),s};let qi=class extends Zt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return x`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":j}" ${Ce(this.tourableElementRef)}>

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>x`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():x`
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
        `}};qi.styles=fe`

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


    `;oa([P()],qi.prototype,"histogram",2);oa([y({type:Boolean,reflect:!0})],qi.prototype,"interactive",2);oa([y({type:String,reflect:!0})],qi.prototype,"height",2);qi=oa([ne("registry-histogram")],qi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class so extends Mn{}so.directiveName="unsafeSVG",so.resultType=2;const Yc=Gn(so);var Qy=Object.defineProperty,Jy=Object.getOwnPropertyDescriptor,la=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qy(e,t,s),s};let Xi=class extends Pi{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?j:x`
                <div class="switchers" ${Ce(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:t.key===this.value.key};return x`
                        
                        <button 
                            class=${Dt(i)} 
                            @click=${()=>{this.group.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Yc(t.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${this.hint}</div>
                </div>

                <slot name="tour"></slot>
        `}};Xi.styles=fe`

    :host {
        width: 100%;
        display: flex;
        gap: var( --thermal-gap );
    }

    .switchers {
        display: flex;
        width: content-width;
        gap: 5px;
        aligni-items: center;
    }

    .button {

        margin: 0;
        border: 1px solid var(--thermal-slate);
        background-color: var(--thermal-slate-light );
        color: var( --thermal-foreground );
        border-radius: var( --thermal-radius );
        padding: 3px;
    
    }

    .switch {

        line-height: 0;
        cursor: pointer;

        transition: all .25s ease-in-out;

        width: calc( var( --thermal-gap ) * 1.2 + 6px);
        height: calc( var( --thermal-gap ) * 1.2 + 6px);

        &:hover,
        &.active {
            color: var( --thermal-primary );
        }

    }

    .current {
        flex-grow: 1;
        font-size: var( --thermal-fs-small );
        display: flex;
        align-items: center;
        gap: 7px;
        color: var( --thermal-foreground );
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .thermal-tool-icon {
        width: calc( var( --thermal-gap ) * 1.2 );
        margin: 0;
        padding: 0;
    }

    .tool-name {
        font-weight: bold;
    }
    
    .tool-description {
        opacity: .5;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    `;la([ve({context:sa,subscribe:!0}),P()],Xi.prototype,"value",2);la([ve({context:na,subscribe:!0}),P()],Xi.prototype,"tools",2);la([P()],Xi.prototype,"hint",2);Xi=la([ne("group-tool-buttons")],Xi);var ev=Object.defineProperty,tv=Object.getOwnPropertyDescriptor,zo=(r,e,t,i)=>{for(var s=i>1?void 0:i?tv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ev(e,t,s),s};let Es=class extends Pi{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?j:x`

            <aside ${Ce(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return x`
                        
                        <button 
                            class=${Dt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${e.name}
                            
                        >
                            ${Yc(e.icon)}
                        </button>
                        
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};Es.styles=fe`

    aside {
        display: flex;
        flex-direction: column;
        gap: 5px;
        aligni-items: center;
    }

    .button {

        margin: 0;
        border: 1px solid var(--thermal-slate);
        background-color: var(--thermal-slate-light );
        color: var( --thermal-foreground );
        border-radius: var( --thermal-radius );
        padding: 3px;
    
    }

    .switch {

        line-height: 0;
        cursor: pointer;

        transition: all .25s ease-in-out;

        width: calc( var( --thermal-gap ) * 1.2 + 6px);
        height: calc( var( --thermal-gap ) * 1.2 + 6px);

        &:hover,
        &.active {
            color: var( --thermal-primary );
        }

    }

    .current {
        flex-grow: 1;
        font-size: var( --thermal-fs-small );
        display: flex;
        align-items: center;
        gap: 7px;
        color: var( --thermal-foreground );
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .thermal-tool-icon {
        width: calc( var( --thermal-gap ) * 1.2 );
        margin: 0;
        padding: 0;
    }

    .tool-name {
        font-weight: bold;
    }

    `;zo([ve({context:sa,subscribe:!0}),P()],Es.prototype,"value",2);zo([ve({context:na,subscribe:!0}),P()],Es.prototype,"tools",2);Es=zo([ne("group-tool-bar")],Es);var rv=Object.defineProperty,Qs=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&rv(e,t,s),s};class St extends Pi{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Qs([ve({context:aa,subscribe:!0}),P()],St.prototype,"parentFileProviderElement");Qs([ve({context:Fc,subscribe:!0}),P()],St.prototype,"loading");Qs([ve({context:Ro,subscribe:!0}),P()],St.prototype,"file");Qs([ve({context:Uc,subscribe:!0}),P()],St.prototype,"failure");Qs([ve({context:zc,subscribe:!0}),P()],St.prototype,"recording");var iv=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,nv=(r,e,t,i)=>{for(var s=i>1?void 0:i?sv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iv(e,t,s),s};let no=class extends St{constructor(){super(...arguments),this.container=ue()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return x`
            <div ${Ce(this.container)} class=${Dt(t)} part="file-canvas-container">
            
                ${this.loading===!0?x`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?x`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                File loading error
                            </div>

                            <div class="error-url">
                                ${(i=this.failure)==null?void 0:i.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(s=this.failure)==null?void 0:s.message}
                            </div>
                        </div>`:j}
            
            </div>

            <slot name="tour"></slot>
        
        `}};no.styles=fe`

        .canvas-container {

            max-width: 100vw;
            /** max-height: 100vh; */

            aspect-ratio: 4 / 3;
            width: 100%;

            background-color: var( --thermal-slate );
            color: var( --thermal-background );

            transition: color .3s ease-in-out, background-color .3s ease-in-out;

        }

        .is-loaded {
        
        }

        .is-loading {
        
        }

        .is-success {

        }

        .is-error {

            display: flex;
            align-items: center;
            justify-content: center;
            padding: var( --thermal-gap );
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
            border-radius: calc( var( --thermal-radius ) * 2 );

            padding: var( --thermal-gap );

        }

        .error-icon {
            width: calc( var( --thermal-fs ) * 2 );
        }

        .error-message {
            font-size: small;
            opacity: .5;    
        }


        .loading-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background: var( --thermal-slate ); */
        }
        .loading-loader {
            width: calc( var( --thermal-gap ) * 2);
            aspect-ratio: 1;
            --c: no-repeat linear-gradient(var(--thermal-background) calc(50% - 10px),#0000 0 calc(50% + 10px),var(--thermal-background) 0);
            background: 
                var(--c) 0%   100%,
                var(--c) 50%  100%,
                var(--c) 100% 100%;
            background-size: 20% calc(200% + 20px);
            animation: loading-animation 1s infinite linear;
        }
        @keyframes loading-animation {
            33%  {background-position: 0% 50%,50% 100%,100% 100%}
            50%  {background-position: 0%  0%,50%  50%,100% 100%}
            66%  {background-position: 0%  0%,50%   0%,100%  50%}
            100% {background-position: 0%  0%,50%   0%,100%   0%}
        }
    `;no=nv([ne("file-canvas")],no);var av=Object.defineProperty,ov=Object.getOwnPropertyDescriptor,lv=(r,e,t,i)=>{for(var s=i>1?void 0:i?ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&av(e,t,s),s};let ao=class extends St{onInstanceCreated(r){}onFailure(r){}render(){return this.file?x`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this.file.url}&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `:j}};ao.styles=fe`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;ao=lv([ne("file-share-button")],ao);var hv=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,uv=(r,e,t,i)=>{for(var s=i>1?void 0:i?cv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hv(e,t,s),s};let oo=class extends St{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?x`
            <thermal-dialog label=${L(E.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${L(E.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Ut(this.renderRow(L(E.thermalfilename),this.file.fileName))}

                        ${Ut(this.renderDownloadRow(L(E.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,L(E.thermalfiledownload)))}

                        ${this.file.visibleUrl?Ut(this.renderDownloadRow(L(E.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,L(E.visiblefiledownload))):j}

                        ${Ut(this.renderRow(L(E.time),tt.human(this.file.timestamp)))}

                        ${Ut(this.renderNumericalRow(L(E.duration),this.file.duration,0,"ms"))}

                        ${Ut(this.renderRow(L(E.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Ut(this.renderNumericalRow(L(E.bytesize),this.file.bytesize,0))}
                        
                        ${Ut(this.renderNumericalRow(L(E.minimaltemperature),this.file.max,10,"°C"))}

                        ${Ut(this.renderNumericalRow(L(E.maximaltemperature),this.file.min,10,"°C"))}

                        

                    </table>

                    <h2>${L(E.filetype)}</h2>
                    <table>
                    ${Ut(this.renderRow(L(E.type),this.file.reader.parser.name))}
                    ${Ut(this.renderRow(L(E.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${L(E.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>x`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:j}};oo.styles=fe`

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
    
    `;oo=uv([ne("file-info-button")],oo);var dv=Object.defineProperty,pv=Object.getOwnPropertyDescriptor,fv=(r,e,t,i)=>{for(var s=i>1?void 0:i?pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dv(e,t,s),s};let lo=class extends St{constructor(){super(...arguments),this.tourableElementRef=ue()}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?j:x`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${Ce(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file?L(E.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${L(E.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng()}>${L(E.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?x`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${L(E.convertentiresequencetovideo)}</thermal-button>
                        </div>`:j}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};lo.styles=fe`

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
    
    `;lo=fv([ne("file-download-dropdown")],lo);var gv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,or=(r,e,t,i)=>{for(var s=i>1?void 0:i?mv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gv(e,t,s),s};let Et=class extends St{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=ue(),this.barRef=ue(),this.containerRef=ue(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.hasSpeedButton=!0,this.collapsed=!1}getTourableRoot(){return this.containerRef.value}onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{e[0].contentRect.width<Et.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}handleBarHover(r){if(this.cursorSetter&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.cursorSetter(t)}}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0)}render(){var n,a,o;const r=this.file;if(r===void 0)return j;if(r.duration===0)return j;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return x`
            <div class="${Dt(e)}" ${Ce(this.containerRef)}>


                ${r!==void 0?x`
                        <div class="container">

                            ${this.hasPlayButton===!0?x`

                                    <div class="${Dt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                    ${this.playing?x`
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                        </svg>
                                        `:x`
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                        </svg>
                                        `}

                                </div>

                                `:j}

                            


                            <div class="item cursor inline small">
                                ${(n=this.currentFrame)==null?void 0:n.time}
                            </div>


                            <div class="${Dt(s)}"  ${Ce(this.timelineRef)}>
                                <div class="timeline-bar" @click=${this.handleBarClick.bind(this)} @mousemove=${this.handleBarHover.bind(this)} @mouseleave=${this.handleBarMouseLeave.bind(this)}>
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${Ce(this.barRef)}></div>
                                    ${this.cursor?x`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(l=>x`<file-marker-timeline start=${l.fromMs} end=${l.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>

                            <div class="item inline small">${(a=this.duration)==null?void 0:a.time}</div>

                            ${this.hasSpeedButton===!0?x`<file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>`:j}

                            
                        </div>
                    `:j}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?x`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${L(E.date)}:</span> 
                            <span class="inline">${rt(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${L(E.time)}:</span> 
                            <span class="inline">${rt(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${L(E.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(o=this.file)==null?void 0:o.frameCount}</span>
                        </div>
                    </div>`:j}

            <slot name="tour"></slot>

          `}};Et.collapseWidth=500;Et.styles=fe`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

            color: var( --thermal-foreground );

        }

        .item {
            font-size: var( --thermal-fs );
            order: 2;
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
            width: 70px;
        }

        .duration {
        
        }

        .small {
            font-size: var( --thermal-fs-small );
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
            height: var( --thermal-gap );
            background: var( --thermal-slate );
            transition: background-color .2s ease-in-out;
            position: relative;

            &:hover {
                /** background: var( --thermal-slate-light ); */
            }
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
            background: var( --thermal-primary );
            content: "";
            border-right: 1px solid var( --thermal-foreground );
        }

        .collapsed {
            .container {
                flex-wrap: wrap;
            }
            .timeline {
                order: 1;
                width: 100%;
                height: 10px;
            }

            .cursor {
                flex-grow: 1;
            }
            &.real {
                flex-wrap: wrap;
                gap: 2px;
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
    
    `;or([ve({context:Uo,subscribe:!0}),P()],Et.prototype,"playing",2);or([ve({context:qs,subscribe:!0}),P()],Et.prototype,"currentFrame",2);or([ve({context:Mo,subscribe:!0}),P()],Et.prototype,"duration",2);or([ve({context:jc,subscribe:!0}),P()],Et.prototype,"mayStop",2);or([ve({context:To,subscribe:!0})],Et.prototype,"cursor",2);or([ve({context:Io,subscribe:!0})],Et.prototype,"cursorSetter",2);or([y({type:String,reflect:!0})],Et.prototype,"hasPlayButton",2);or([y({type:String,reflect:!0})],Et.prototype,"hasInfo",2);or([y({type:String,reflect:!0})],Et.prototype,"interactive",2);or([y({type:String,reflect:!0})],Et.prototype,"hasSpeedButton",2);or([ve({context:Fo,subscribe:!0})],Et.prototype,"markers",2);or([P()],Et.prototype,"collapsed",2);Et=or([ne("file-timeline")],Et);var yv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,jo=(r,e,t,i)=>{for(var s=i>1?void 0:i?vv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yv(e,t,s),s};let Ls=class extends St{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?j:x`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(sc).map(([r])=>x`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof Hr&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Ls.styles=fe`

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
    
    `;jo([y({type:String,reflect:!0})],Ls.prototype,"enabled",2);jo([ve({context:Nc,subscribe:!0}),P()],Ls.prototype,"playbackSpeed",2);Ls=jo([ne("file-playback-speed-dropdown")],Ls);var bv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,Bo=(r,e,t,i)=>{for(var s=i>1?void 0:i?wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bv(e,t,s),s};let Rs=class extends St{constructor(){super(...arguments),this.container=ue()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return x`
            <div class="container">
            
                <video ${Ce(this.container)} preload="metadata">

                    ${this.url===void 0?j:x`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Rs.styles=fe`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Bo([ve({context:qs,subscribe:!0}),P()],Rs.prototype,"currentFrame",2);Bo([y({type:String,reflect:!0,attribute:!0})],Rs.prototype,"url",2);Rs=Bo([ne("file-video")],Rs);const xv=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),rt(t,"mm:ss:SSS")},Sv=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var $v=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?_v(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$v(e,t,s),s};const Ho={fromAttribute:r=>r===null?null:Sv(r),toAttribute:r=>r===null?null:xv(r)};let wr=class extends St{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return j}};Ir([ve({context:Uo,subscribe:!0}),P()],wr.prototype,"playing",2);Ir([ve({context:Do,subscribe:!0}),P()],wr.prototype,"ms",2);Ir([y({type:String,reflect:!0,attribute:!0})],wr.prototype,"label",2);Ir([y({type:String,reflect:!0,attribute:!0,converter:Ho})],wr.prototype,"start",2);Ir([y({type:String,reflect:!0,attribute:!0,converter:Ho})],wr.prototype,"end",2);Ir([y({type:String,reflect:!0,attribute:!0,converter:Ho})],wr.prototype,"dur",2);Ir([y({type:String,reflect:!0,attribute:!0})],wr.prototype,"active",2);Ir([y({type:String,reflect:!0,attribute:!0})],wr.prototype,"pauseOnActivate",2);Ir([y({type:String,reflect:!0,attribute:!0})],wr.prototype,"say",2);wr=Ir([ne("file-marker")],wr);var Cv=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,Ai=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cv(e,t,s),s};let Yr=class extends St{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return x`

            <div class="${Dt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Yr.styles=fe`
        .container {
            position: relative;
            height: 10px;
            background: var( --thermal-slate );
            width: 100%;
            cursor: pointer;
            border-top: 1px dotted var( --thermal-slate-light );

            transition: background-color .2s ease-in-out;

            &:hover {
                background: var( --thermal-slate-light );
                .bar {
                    background: var( --thermal-primary );
                }
            }
        }

        .bar {
            transition: background-color .2s ease-in-out;
            position: relative;
            height: 100%;
            background: var( --thermal-primary-dark );
        }

        .active {
            .bar {
                background: var( --thermal-primary );
            }

            .cursor {
                background: red;
            }
            
        }


        .cursor {

        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background: var( --thermal-foreground );
        
        }


    `;Ai([ve({context:Mo,subscribe:!0}),P()],Yr.prototype,"duration",2);Ai([ve({context:qs,subscribe:!0}),P()],Yr.prototype,"currentFrame",2);Ai([ve({context:Do,subscribe:!0}),P()],Yr.prototype,"ms",2);Ai([y({type:Number,reflect:!0,attribute:!0})],Yr.prototype,"start",2);Ai([y({type:Number,reflect:!0,attribute:!0})],Yr.prototype,"end",2);Ai([P()],Yr.prototype,"active",2);Yr=Ai([ne("file-marker-timeline")],Yr);var kv=Object.defineProperty,Av=Object.getOwnPropertyDescriptor,qc=(r,e,t,i)=>{for(var s=i>1?void 0:i?Av(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kv(e,t,s),s};let Bn=class extends St{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return x`
            <div>


            ${this.markers.map(r=>r.active?x`<div class="item">
                    <h2>${r.label}</h2>
                    ${Ut(r.innerHTML)}
                    </div>`:j)}

            
            
            </div>

          `}};Bn.styles=fe`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;qc([ve({context:Fo,subscribe:!0})],Bn.prototype,"markers",2);Bn=qc([ne("file-marks-content")],Bn);var Ov=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,Wo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ov(e,t,s),s};let Ds=class extends _t{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return x`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Ds.styles=fe`

    
    `;Wo([y()],Ds.prototype,"analysis",2);Wo([P()],Ds.prototype,"name",2);Ds=Wo([ne("analysis-name")],Ds);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Lv(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Rv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,Go=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rv(e,t,s),s};let Ts=class extends _t{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return x`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?j:x`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Lv(xn,r=>x`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Ts.styles=fe`

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
    
    `;Go([y()],Ts.prototype,"analysis",2);Go([P()],Ts.prototype,"color",2);Ts=Go([ne("analysis-color")],Ts);var Tv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tv(e,t,s),s};let Yt=class extends _t{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return x`

            <div class="table">

                <thermal-field label=${L(E.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${L(E.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${L(E.left)}>
                    <input 
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.right!==void 0?this.right-1:this.maxX}
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

                <thermal-field label=${L(E.right)}>
                    <input 
                        name="right" 
                        value=${this.right} 
                        type="number" 
                        step="1" 
                        min=${this.left!==void 0?this.left+1:0} 
                        max=${this.maxX}
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setRight(e)})}
                    />
                </thermal-field>

                <thermal-field label=${L(E.top)}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0"
                        max=${this.bottom!==void 0?this.bottom-1:this.maxY}
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setTop(e)})}
                    />
                </thermal-field>

                <thermal-field label=${L(E.bottom)}>
                    <input 
                        name="bottom" 
                        value=${this.bottom} 
                        type="number" 
                        step="1" 
                        min=${this.top!==void 0?this.top+1:0}
                        max=${this.maxY}
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setBottom(e)})}
                    />
                </thermal-field>
                

            </div>
    
        
        `}};Yt.styles=fe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;gr([y()],Yt.prototype,"analysis",2);gr([P()],Yt.prototype,"color",2);gr([P()],Yt.prototype,"top",2);gr([P()],Yt.prototype,"left",2);gr([P()],Yt.prototype,"width",2);gr([P()],Yt.prototype,"height",2);gr([P()],Yt.prototype,"type",2);gr([P()],Yt.prototype,"right",2);gr([P()],Yt.prototype,"bottom",2);gr([P()],Yt.prototype,"maxX",2);gr([P()],Yt.prototype,"maxY",2);Yt=gr([ne("edit-area")],Yt);var Mv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,as=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mv(e,t,s),s};let ui=class extends _t{constructor(){super(...arguments),this.topInputRef=ue(),this.leftInputRef=ue()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return x`

            <div class="table">

                <thermal-field label=${L(E.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${L(E.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${L(E.top)} hint=${L(E.fromto,{from:0,to:this.maxX})}>
                    <input 
                        name="top" 
                        value=${this.top} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxY}
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setTop(e)})}
                    />
                </thermal-field>

                <thermal-field label=${L(E.left)} hint=${L(E.fromto,{from:0,to:this.maxX})}>
                    <input
                        name="left" 
                        value=${this.left} 
                        type="number" 
                        step="1" 
                        min="0" 
                        max=${this.maxX}
                        @change=${r=>this.handleInput(r,e=>{this.analysis.setLeft(e)})}
                    />
                </thermal-field>

            </div>
        
        `}};ui.styles=fe`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;as([y()],ui.prototype,"analysis",2);as([P()],ui.prototype,"top",2);as([P()],ui.prototype,"left",2);as([P()],ui.prototype,"maxX",2);as([P()],ui.prototype,"maxY",2);ui=as([ne("edit-point")],ui);var Fv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,ha=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fv(e,t,s),s};let Is=class extends _t{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return x`

            <thermal-dialog label="${L(E.editsth,{what:L(E[this.type])})}">

                <thermal-button slot="invoker">${L(E.edit)}</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof ur?x`<edit-point .analysis=${this.analysis}></edit-point>`:x`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};ha([y()],Is.prototype,"analysis",2);ha([P()],Is.prototype,"name",2);ha([P()],Is.prototype,"type",2);Is=ha([ne("file-analysis-edit")],Is);var zv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?jv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zv(e,t,s),s};let Ft=class extends St{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=ue(),this.graphRef=ue(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return x`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&x`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&x`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${Ce(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?x`<thermal-chart 
                        ${Ce(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:j}
            </div>

            

            </div>
        
        `}};Ft.styles=fe`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;lr([P()],Ft.prototype,"hydrated",2);lr([y({reflect:!0})],Ft.prototype,"graphWidth",2);lr([y({reflect:!0})],Ft.prototype,"graphHeight",2);lr([P()],Ft.prototype,"graphs",2);lr([ve({context:qs,subscribe:!0})],Ft.prototype,"currentFrame",2);lr([ve({context:To,subscribe:!0})],Ft.prototype,"cursor",2);lr([ve({context:Io,subscribe:!0})],Ft.prototype,"cursorSetter",2);lr([P()],Ft.prototype,"shadowLeft",2);lr([P()],Ft.prototype,"shadowTop",2);lr([P()],Ft.prototype,"shadowWidth",2);lr([P()],Ft.prototype,"shadowHeight",2);lr([ve({context:ta,subscribe:!0})],Ft.prototype,"graphSmooth",2);Ft=lr([ne("file-analysis-graph")],Ft);var Bv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,Kr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bv(e,t,s),s};let xr=class extends _t{constructor(){super(...arguments),this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor,this.dimension=t.width+"x"+t.height,this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof ur?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,i=>{this.dimension=i.width+"x"+i.height}),t.onValues.set(this.UUID,(i,s,n)=>{this.value={min:i,max:s,avg:n}}),t.graph.onGraphActivation.set(this.UUID,(i,s,n)=>{this.graph={min:i,max:s,avg:n}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,i=>{this.color=i}),t.onSetName.set(this.UUID,i=>{this.name=i})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return x`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?x`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return x`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"}"
            @click=${()=>{this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0)}}
        >
            <u aria-hidden="true"></u>
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        <td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${L(E.remove)}</thermal-button>
        </td>
        
        `}};xr.styles=fe`
    
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
            border: 1px solid var( --thermal-slate );
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

            cursor: pointer;

            &:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }
            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid var( --thermal-slate );
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

    `;Kr([y()],xr.prototype,"analysis",2);Kr([P()],xr.prototype,"value",2);Kr([P()],xr.prototype,"graph",2);Kr([P()],xr.prototype,"may",2);Kr([P()],xr.prototype,"dimension",2);Kr([P()],xr.prototype,"color",2);Kr([y({type:Boolean,reflect:!0,attribute:!0})],xr.prototype,"selected",2);Kr([P()],xr.prototype,"name",2);xr=Kr([ne("file-analysis-table-row")],xr);var Wv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,ca=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wv(e,t,s),s};let Ki=class extends St{constructor(){super(...arguments),this.container=ue(),this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?j:x`

        <div class="overflow" ${Ce(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            <u aria-hidden="true"></u>
                            <span>${L(E.analysis)}</span>
                        </th>
                        <th>${L(E.avg)}</th>
                        <th>${L(E.min)}</th>
                        <th>${L(E.max)}</th>
                        <th>${L(E.size)}</th>
                        <th style="padding-top: 0; padding-bottom: 0;">
                            ${this.hasHighlightedData?x`<thermal-button variant="foreground" @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${L(E.downloadgraphdataascsv)}>CSV</thermal-button>`:j}
                        </th>
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(r=>x`
                            <file-analysis-table-row
                                .analysis=${r}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};Ki.styles=fe`
    
        .overflow {
            overflow-x:auto;
            width: 100%;
        }

        table {
            display: table;
            min-width: 100%;
            border-collapse: collapse;
            color: var( --thermal-foreground );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            td, th {
                padding: calc( var( --thermal-fs ) * .5 )
            }
        }

        th {
            text-align: left;
        }

        th, td, button, thermal-button {
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
            border-bottom: 1px dotted var( --thermal-foreground );
        }

        file-analysis-table-row[selected] {
            background-color: var( --thermal-background );
        }

        .all {

            cursor: pointer;

            &:hover {
                color: var( --thermal-primary );
            }

            u, b, span {
                display: inline-block;
            }

            u {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid var( --thermal-slate );
            }

            &.yes u {
                background-color: var( --thermal-slate-dark );
            }

        }

        



    `;ca([P()],Ki.prototype,"analysis",2);ca([P()],Ki.prototype,"allSelected",2);ca([P()],Ki.prototype,"hasHighlightedData",2);Ki=ca([ne("file-analysis-table")],Ki);var Vv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vv(e,t,s),s};let Dr=class extends St{constructor(){super(...arguments),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0}getTourableRoot(){}onInstanceCreated(r){this.recorded=tt.human(r.timestamp)}onFailure(){}render(){return x`
        <thermal-app author=${me(this.author)} recorded=${me(this.recorded)} license=${me(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?x`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:j}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${L(E.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${L(E.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${L(E.filerendering)} 
                    hint=${L(E.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${L(E.adjusttimescale)}
                    hint=${L(E.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${L(E.colourpalette)}
                    hint=${L(E.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?x` <thermal-field 
                    label="${L(E.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:j}

                  ${this.file&&this.file.timeline.isSequence?x` <thermal-field 
                    label="${L(E.graphlines)}"
                    hint=${L(E.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:j}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?x`<file-share-button ></file-share-button>`:j}
            
              ${this.showabout===!0?x`<app-info-button ></app-info-button>`:j}

            </thermal-bar>
          </div>
            <group-tool-buttons slot="pre"></group-tool-buttons>
            <registry-histogram slot="pre"></registry-histogram>
            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?x`<file-analysis-graph slot="post"></file-analysis-graph>`:j}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Dr.styles=fe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;mi([y({type:String,reflect:!0,attribute:!0})],Dr.prototype,"showembed",2);mi([y({type:String,reflect:!0,attribute:!0})],Dr.prototype,"showabout",2);mi([y({type:String,reflect:!0,attribute:!0})],Dr.prototype,"showfullscreen",2);mi([y()],Dr.prototype,"author",2);mi([y()],Dr.prototype,"recorded",2);mi([y()],Dr.prototype,"license",2);mi([y()],Dr.prototype,"label",2);Dr=mi([ne("file-app")],Dr);var qv=Object.defineProperty,et=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&qv(e,t,s),s};class Ke extends _t{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=ue()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}et([y({type:String,reflect:!0})],Ke.prototype,"url");et([y({type:String,reflect:!0})],Ke.prototype,"visible");et([y({type:String,reflect:!0,attribute:!0})],Ke.prototype,"palette");et([y({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"opacity");et([y({type:Number,reflect:!0})],Ke.prototype,"from");et([y({type:Number,reflect:!0})],Ke.prototype,"to");et([y()],Ke.prototype,"author");et([y()],Ke.prototype,"recorded");et([y()],Ke.prototype,"license");et([y()],Ke.prototype,"label");et([y({type:String,reflect:!1,attribute:!0})],Ke.prototype,"showembed");et([y({type:String,reflect:!1,attribute:!0})],Ke.prototype,"showabout");et([y({type:String,reflect:!1,attribute:!0})],Ke.prototype,"showtutorial");et([y({type:String,reflect:!1})],Ke.prototype,"showfullscreen");et([y({type:String,reflect:!0})],Ke.prototype,"analysis1");et([y({type:String,reflect:!0})],Ke.prototype,"analysis2");et([y({type:String,reflect:!0})],Ke.prototype,"analysis3");et([y({type:String,reflect:!0})],Ke.prototype,"analysis4");et([y({type:String,reflect:!0})],Ke.prototype,"analysis5");et([y({type:String,reflect:!0})],Ke.prototype,"analysis6");et([y({type:String,reflect:!0})],Ke.prototype,"analysis7");et([y({type:String,reflect:!0})],Ke.prototype,"ms");et([y({type:String,reflect:!0})],Ke.prototype,"speed");et([P()],Ke.prototype,"hasGraph");et([P()],Ke.prototype,"hasAnalysis");et([P()],Ke.prototype,"isSequence");var Xv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,Zv=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xv(e,t,s),s};let vh=class extends Ke{render(){return this.url===""?j:x`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${me(this.from)}
        to=${me(this.to)}
        opacity=${me(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            thermal="${this.url}" 
            visible=${me(this.visible)}
            analysis1=${me(this.analysis1)}
            analysis2=${me(this.analysis2)}
            analysis3=${me(this.analysis3)}
            analysis4=${me(this.analysis4)}
            analysis5=${me(this.analysis5)}
            analysis6=${me(this.analysis6)}
            analysis7=${me(this.analysis7)}
            speed=${me(this.speed)}
          >

              <file-app 
                author=${me(this.author)} 
                recorded=${me(this.recorded)} 
                license=${me(this.license)}
                label=${me(this.label)}  
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};vh=Zv([ne("thermal-file-app")],vh);class Qv{constructor(e){this.steps=e,this.onStepInternalActivation=new Q}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class Vo{constructor(e){this._active=!1,this.onTourActivationStatus=new Q,this.onStepActivation=new Q,this.storage=new Qv(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new Vo(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var Jv=Object.defineProperty,eb=Object.getOwnPropertyDescriptor,Mt=(r,e,t,i)=>{for(var s=i>1?void 0:i?eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jv(e,t,s),s};let Ct=class extends St{constructor(){super(),this.showembed=!0,this.showabout=!0,this.showfullscreen=!0,this.showtutorial=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=ue(),this.contentContainerWidth=1e3,this.tourController=Vo.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.log("změnil se krok",r),this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=tt.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return x`
        <thermal-app author=${me(this.author)} recorded=${me(this.recorded)} license=${me(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${L(E.colourpalette)}>
              ${L(E.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?x`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:j}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${L(E.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${L(E.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${L(E.filerendering)} 
                    hint=${L(E.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${L(E.adjusttimescale)}
                    hint=${L(E.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${L(E.colourpalette)}
                    hint=${L(E.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?x` <thermal-field 
                    label="${L(E.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:j}

                  ${this.file&&this.file.timeline.isSequence?x` <thermal-field 
                    label="${L(E.graphlines)}"
                    hint=${L(E.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:j}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?x`<app-info-button></app-info-button>`:j}

              ${this.showtutorial===!0?x`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${L(E.tutorial)}
              </thermal-button>`:j}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${Ce(this.contentContainerRef)}>

                <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?x`<group-tool-bar tour="tools">
                    <tour-step slot="tour" placement="right-top" label="Analysis tools">
                        Select a tool and draw an analysis on the IR image.
                    </tour-step>
                  </group-tool-bar>`:x`<group-tool-buttons tour="tools">
                    <tour-step slot="tour" placement="right-top">
                      Select a tool and draw an analysis on the IR image.
                    </tour-step>
        </group-tool-buttons>`}
                </div>

                <div class="content-container__part content-container__left">

                  <registry-histogram slot="pre"></registry-histogram>
                  <registry-range-slider slot="pre" tour="range">
                    <tour-step label="Thermal range" placement="bottom" slot="tour">
                      <p>Move the left and right handle to adjust the thermal range.</p>
                      <p>Current temperature scale:</p>
                      <div style="border: 1px dotted var(--thermal-background);padding: 5px; border-radius: var(--thermal-radius)">
                      <registry-range-display></registry-range-display>
                      </div>
                    </tour-step>
                  </registry-range-slider>
                  <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
                  <!--<registry-range-display></registry-range-display>-->

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>
                </div>

                <div class="content-container__part content-container__right ${this.isSequence?"content-container__right__sequence":""}">

                  <div class="part analysis">
                    ${this.hasAnalysis?x`<file-analysis-table></file-analysis-table>`:x`<div class="placeholder">
                        <div class="placeholder-title">Analysis</div>
                        <div>You may select areas or points on the thermogram to see statistics here!</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?x`
                      <div>${(e=this.tool)==null?void 0:e.description}</div>
                    `:x`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>Add a point analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>Add a rectangle analysis</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>Add a ellipsis analysis</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?x`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?x`<div class="placeholder">
                      <div class="placeholder-title">Graph</div>
                      <div>${this.hasAnalysis===!1?"Add analysis first to see the graph!":x`Click on an analysis <span style="display: inline-block;padding: 1px 4px; border-radius: var(--thermal-gap); border: 1px solid var(--thermal-slate);">value</span> to see its graph here!`}</div>
                    </div>`:j}
                  
                  </div>
                  `:j}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};Ct.styles=fe`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }

    .content-container {

      width: 100%;
      font-size: var(--thermal-fs-sm );
    
    }

    .content-container__expanded {
      display: flex;
      gap: calc( var( --thermal-gap ) * .5 );
    }

    .content-container__expanded .content-container__part {

      flex-grow: 1;
      width: 50%;
    
    }

    .content-container:not(.content-container__expanded) .graph {
      height: 300px;
    }

    .content-container__expanded .content-container__tools {
      flex-basis: 1rem;
    }

    .part {

      height: 100%;
    
    }

    .content-container__right__sequence .part {

      height: 50%;
      position: relative;
      overflow: auto;
    
    }

    .content-container__right__sequence .analysis {
      height: calc( 50% - var( --thermal-gap ) );
      margin-bottom: var( --thermal-gap );
    }

    .placeholder {

      padding: var( --thermal-gap );
      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: var( --thermal-gap );

      border: 1px dashed var( --thermal-slate );
      border-radius: var( --thermal-radius );

      height: 100%;

      color: var( --thermal-slate-dark );
      font-size: var(--thermal-fs-sm );
    
    }

    .placeholder-title {
      font-weight: bold;
      font-size: var(--thermal-fs-sm );
    }

    file-analysis-graph {
      
      width: 100%;
      height: 100%;
      
      top: 0;
      left: 0;

      position: absolute;
      overflow: hidden;

    }
  
  `;Mt([y({type:String,reflect:!0,attribute:!0})],Ct.prototype,"showembed",2);Mt([y({type:String,reflect:!0,attribute:!0})],Ct.prototype,"showabout",2);Mt([y({type:String,reflect:!0,attribute:!0})],Ct.prototype,"showfullscreen",2);Mt([y({type:String,reflect:!1,attribute:!0})],Ct.prototype,"showtutorial",2);Mt([P()],Ct.prototype,"hasAnalysis",2);Mt([P()],Ct.prototype,"hasGraph",2);Mt([P()],Ct.prototype,"tool",2);Mt([P()],Ct.prototype,"isSequence",2);Mt([y()],Ct.prototype,"author",2);Mt([y()],Ct.prototype,"recorded",2);Mt([y()],Ct.prototype,"license",2);Mt([y()],Ct.prototype,"label",2);Mt([de({context:bc})],Ct.prototype,"tourController",2);Mt([de({context:wc})],Ct.prototype,"tourStep",2);Mt([P()],Ct.prototype,"contentContainerWidth",2);Ct=Mt([ne("desktop-app")],Ct);var tb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,ib=(r,e,t,i)=>{for(var s=i>1?void 0:i?rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tb(e,t,s),s};let bh=class extends Ke{render(){return this.url===""?j:x`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${me(this.from)}
        to=${me(this.to)}
        opacity=${me(this.opacity)}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${Ce(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${me(this.visible)}
            analysis1=${me(this.analysis1)}
            analysis2=${me(this.analysis2)}
            analysis3=${me(this.analysis3)}
            analysis4=${me(this.analysis4)}
            analysis5=${me(this.analysis5)}
            analysis6=${me(this.analysis6)}
            analysis7=${me(this.analysis7)}
            speed=${me(this.speed)}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${me(this.author)} 
              recorded=${me(this.recorded)} 
              license=${me(this.license)}
              label=${me(this.label)}
              showtutorial=${this.showtutorial}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};bh=ib([ne("thermal-file-analyser")],bh);var sb=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,Yo=(r,e,t,i)=>{for(var s=i>1?void 0:i?nb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sb(e,t,s),s};let Ms=class extends _t{constructor(){super(...arguments),this.dropinRef=ue(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return x`

            <manager-provider slug="dropin">

                <registry-provider slug="dropin">

                    <group-provider slug="dropin">

                        <thermal-app showfullscreen="false">

                            <thermal-button slot="bar" variant="foreground" @click=${this.handleOpenClick.bind(this)}>Open file</thermal-button>

                            <div slot="bar" style="flex-grow: 1;">
                                <thermal-bar slot="bar">
                                    <app-info-button></app-info-button>
                                </thermal-bar>
                            </div>

                            ${this.loaded===!0?x`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:j}

                            <file-dropin ${Ce(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Ms.styles=fe`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Yo([P()],Ms.prototype,"dropinRef",2);Yo([P()],Ms.prototype,"loaded",2);Ms=Yo([ne("thermal-dropin-app")],Ms);var ab=Object.defineProperty,ob=Object.getOwnPropertyDescriptor,$r=(r,e,t,i)=>{for(var s=i>1?void 0:i?ob(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ab(e,t,s),s};let nr=class extends _t{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return x`

            ${e?x`<h3 class="row-title">${e}</h3>`:j}

            ${t?x`<p>${t}</p>`:j}

            <section class=${Dt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>x`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};nr.styles=fe`

        :host {
            display: block;
        }
    
        .row-title {}

        .row-files {}

        .row-files {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 5px;
        }

        
            .file-list-1 time-group-item { width: 100%; }
        
            .file-list-2 time-group-item { width: calc( 50%  - 5px); }

            .file-list-3 time-group-item { width: calc( 33%  - 5px); }

            .file-list-4 time-group-item { width: calc( 25%  - 5px); }

            .file-list-5 time-group-item { width: calc( 20%  - 5px); }

            .file-list-6 time-group-item { width: calc( 100% / 6  - 5px); }

            .file-list-7 time-group-item { width: calc( 100% / 7  - 5px); }

            .file-list-8 time-group-item { width: calc( 100% / 8  - 5px); }

            .file-list-9 time-group-item { width: calc( 100% / 9  - 5px); }

            .file-list-10 time-group-item { width: calc( 100% / 10  - 5px); }


        .file-list-collapsed time-group-item { width: 100% !important; }

    `;$r([y()],nr.prototype,"columns",2);$r([y()],nr.prototype,"breakpoint",2);$r([y({type:Object})],nr.prototype,"files",2);$r([y({type:String})],nr.prototype,"label",2);$r([y({type:String})],nr.prototype,"info",2);$r([y({type:Number})],nr.prototype,"from",2);$r([y({type:Number})],nr.prototype,"to",2);$r([y({type:Number})],nr.prototype,"cursor",2);$r([y({type:String})],nr.prototype,"grouping",2);$r([P()],nr.prototype,"collapsed",2);nr=$r([ne("time-group-row")],nr);var lb=Object.defineProperty,Xc=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&lb(e,t,s),s},yt;const qo=(yt=class extends _t{constructor(){super(...arguments),this.instanceRenderer=new Hi(this),this.groupRenderer=new As(this)}parseFilesProperty(e){return e.split(yt.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(yt.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(yt.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,d]=h,f=u.trim(),b=d.trim();switch(f){case yt.FILE_THERMAL_KEY:s=b;break;case yt.FILE_VISIBLE_KEY:n=b;break;case yt.FILE_LABEL_KEY:a=b;break;case yt.FILE_NOTE_KEY:o=b;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},yt.styles=[Hi.styles,As.styles,fe`
    
        `],yt.FILE_RECORD_SEPARATOR=";",yt.FILE_SEGMENT_SEPAROATOR="|",yt.FILE_COMPONENT_SEPAROATOR="~",yt.FILE_THERMAL_KEY="thermal",yt.FILE_VISIBLE_KEY="visible",yt.FILE_LABEL_KEY="label",yt.FILE_NOTE_KEY="note",yt);Xc([P()],qo.prototype,"highlightFrom");Xc([P()],qo.prototype,"highlightTo");let Xo=qo;class hb{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof zr)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{console.log("hotovost...",this.records),this.processGroups()})):t.request(i.thermal,i.visible,this.group,s),console.log("registering",i)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof zr)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{console.log("hotovost...",this.records),this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Vh(e).getTime():this.grouping==="day"?En(e).getTime():this.grouping==="week"?Nr(e).getTime():this.grouping==="month"?Rn(e).getTime():this.grouping==="year"?go(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Hh(e).getTime():this.grouping==="day"?jh(e).getTime():this.grouping==="week"?Dn(e).getTime():this.grouping==="month"?Ln(e).getTime():this.grouping==="year"?Bh(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:rt(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:rt(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+rt(e,"w")+" of "+rt(e,"yyyy"),info:[tt.humanDate(Nr(e).getTime()),tt.humanDate(Dn(e).getTime())].join(" - ")}:this.grouping==="month"?{label:rt(e,"MMMM yyyy"),info:[tt.humanDate(Rn(e).getTime()),tt.humanDate(Ln(e).getTime())].join(" - ")}:this.grouping==="year"?{label:rt(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?tt.human(e):this.grouping==="hour"||this.grouping==="day"?rt(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",tt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var cb=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cb(e,t,s),s};let Lt=class extends Xo{constructor(){super(...arguments),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[]}connectedCallback(){super.connectedCallback();const t=Gs(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);this.group=t,this.grouper=new hb(this,t)}firstUpdated(r){super.firstUpdated(r),this.log(this.palette,this.group.registry.manager.id),this.group.registry.palette.addListener(this.UUID+"paleta",console.log),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to});const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(t=>t instanceof Wr))}updated(r){super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return x`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${me(this.author)}
                            license=${me(this.license)}
                        >
                        
                            <thermal-button 
                                variant="foreground" 
                                interactive="false" 
                                slot="bar"
                            >
                                ${this.label}
                            </thermal-button>

                            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                                    <registry-palette-dropdown></registry-palette-dropdown>

                                    <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>

                                    <thermal-dropdown>
                                        <span slot="invoker">${this.grouping==="none"?L(E.donotgroup):L(E["by"+this.grouping])}</span>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="none"}">${L(E.donotgroup)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="hour"}">${L(E.byhour)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="day"}">${L(E.byday)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="week"}">${L(E.byweek)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="month"}">${L(E.bymonth)}</thermal-button>
                                        </div>

                                        <div slot="option">
                                            <thermal-button @click="${()=>this.grouping="year"}">${L(E.byyear)}</thermal-button>
                                        </div>

                                    </thermal-dropdown>

                                    ${this.grouper.numFiles>0?x`
                                            <thermal-dropdown class="download">

                                                <span slot="invoker">${L(E.download)}</span>

                                                <div slot="option">
                                                    <thermal-button @click=${()=>this.grouper.forEveryInstance(r=>r.export.downloadPng())}>${L(E.pngofindividualimages)}</thermal-button>
                                                    <small>${L(E.pngofindividualimageshint)}</small>
                                                </div>

                                                <div slot="option">

                                                    <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({columns:this.columns})}>${L(E.pngofentiregroup)}</thermal-button>
                                                    <small>${L(E.pngofentiregrouphint)}</small>
                                                </div>


                                                <div slot="option">
                                                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${L(E.csvofanalysisdata)}</thermal-button>
                                                    <small>${L(E.csvofanalysisdatahint)}</small>
                                                </div>

                                            </thermal-dropdown>

                                            <registry-range-full-button
                                                @mouseenter=${()=>{var r,e;this.highlightFrom=(r=this.group.registry.minmax.value)==null?void 0:r.min,this.highlightTo=(e=this.group.registry.minmax.value)==null?void 0:e.max}}
                                                @focus=${()=>{var r,e;this.highlightFrom=(r=this.group.registry.minmax.value)==null?void 0:r.min,this.highlightTo=(e=this.group.registry.minmax.value)==null?void 0:e.max}}
                                                @mouseleave=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                                @blur=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                            ></registry-range-full-button>
                                        `:j}

                                </thermal-bar>

                            </div>


                            <registry-histogram></registry-histogram>
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar highlightFrom=${me(this.highlightFrom)} highlightTo=${me(this.highlightTo)}></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>

                            <div class="app-content">

                                    <slot></slot>


                                    ${this.groups.map(r=>this.groupRenderer.renderGroup(r,this.columns,this.grouping,e=>{this.highlightFrom=e.min,this.highlightTo=e.max},()=>{this.highlightFrom=void 0,this.highlightTo=void 0}))}


                                
                            
                            </div>

                            <group-timeline></group-timeline>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};Lt.styles=[Xo.styles,fe`


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: 1px solid var( --thermal-slate );
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
            width: calc( 100%  + 5px);
            margin: 0 -2.5px;
        }

        .group-files-1 .file { width: 100%; }
        
        .group-files-2 .file { width: 50%; }

        .group-files-3 .file { width: 33%; }

        .group-files-4 .file { width: 25%; }

        .group-files-5 .file { width: 20%; }

        .group-files-6 .file { width: calc( 100% / 6 ); }

        .group-files-7 .file { width: calc( 100% / 7 ); }

        .group-files-8 .file { width: calc( 100% / 8 ); }

        .group-files-9 .file { width: calc( 100% / 9 ); }

        .group-files-10 .file { width: calc( 100% / 10 ); }

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


    
    `];Nt([y({type:String,reflect:!0,attribute:!0})],Lt.prototype,"palette",2);Nt([y({type:Number,reflect:!0})],Lt.prototype,"from",2);Nt([y({type:Number,reflect:!0})],Lt.prototype,"to",2);Nt([y({type:String,reflect:!0})],Lt.prototype,"author",2);Nt([y({type:String,reflect:!0})],Lt.prototype,"label",2);Nt([y({type:String,reflect:!1})],Lt.prototype,"description",2);Nt([y({type:String,reflect:!0})],Lt.prototype,"license",2);Nt([P(),pi({slot:"entry",flatten:!0})],Lt.prototype,"entries",2);Nt([y()],Lt.prototype,"slug",2);Nt([y()],Lt.prototype,"columns",2);Nt([y()],Lt.prototype,"breakpoint",2);Nt([y({type:String,reflect:!0})],Lt.prototype,"grouping",2);Nt([P()],Lt.prototype,"groups",2);Nt([y({type:String})],Lt.prototype,"files",2);Lt=Nt([ne("thermal-group-app")],Lt);var db=Object.defineProperty,pb=Object.getOwnPropertyDescriptor,os=(r,e,t,i)=>{for(var s=i>1?void 0:i?pb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&db(e,t,s),s};let di=class extends Pi{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.timelineRef=ue(),this.indicatorRef=ue()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,r=>{this.onRegistryBatchEnded(r)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof zr?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,this.timelineRef.value&&this.timelineRef.value.addEventListener("click",t=>{const i=t.layerX,n=t.target.clientWidth,a=i/n*100,o=this.percentToMs(a);o&&(this.ms=o)})}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}render(){return this.has===!1?j:x`<div>

            <div 
                class="timeline" 
                @click=${r=>{const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}}
            >
                <div class="background"></div>
                <div class="indicator" ${Ce(this.indicatorRef)}></div>
            </div>

            <thermal-button @click=${()=>this.handlePlayButtonClick()}>
                ${this.playing===!0?"Stop":"Play"}
            </thermal-button>
        </div>`}};di.styles=fe`

        .timeline {
            width: 100%;
            height: var( --thermal-fs );
            position: relative;
            cursor: pointer;
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

    
    `;os([P()],di.prototype,"longestDurationInMs",2);os([P()],di.prototype,"ms",2);os([P()],di.prototype,"playing",2);os([P()],di.prototype,"instances",2);os([P()],di.prototype,"has",2);di=os([ne("group-timeline")],di);var fb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fb(e,t,s),s};let qt=class extends Xo{constructor(){super(...arguments),this.registryProviderRef=ue(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=Gs(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Ot){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return x`
        <manager-provider slug="${this.slug}">

            <registry-provider slug="${this.slug}">
                <thermal-app>

                    <thermal-button variant="foreground" interactive="false" slot="bar">Skupinové zobrazení</thermal-button>

                    <div slot="bar" style="flex-grow: 4;">
                        
                        <thermal-bar slot="bar">
                            <registry-palette-dropdown></registry-palette-dropdown>

                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const t=r.target.value;this.columns=parseInt(t)}}></input>

                            <input type="range" min="1" max="10" step="1" value=${this.groups} @input=${r=>{const t=r.target.value;this.groups=parseInt(t)}}></input>
                        

                            <thermal-dropdown>
                                <span slot="invoker">${this.grouping==="none"?"Do not grop":"Group by "+this.grouping}</span>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="none"}">Do not group</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="hour"}">Group by hour</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="day"}">Group by day</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="week"}">Group by week</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="month"}">Group by month</thermal-button>
                                </div>

                                <div slot="option">
                                    <thermal-button @click="${()=>this.grouping="year"}">Group by year</thermal-button>
                                </div>

                            </thermal-dropdown>

                            <registry-range-full-button
                                                @mouseenter=${()=>{var r,e,t,i;this.highlightFrom=(e=(r=this.registry)==null?void 0:r.minmax.value)==null?void 0:e.min,this.highlightTo=(i=(t=this.registry)==null?void 0:t.minmax.value)==null?void 0:i.max}}
                                                @focus=${()=>{var r,e,t,i;this.highlightFrom=(e=(r=this.registry)==null?void 0:r.minmax.value)==null?void 0:e.min,this.highlightTo=(i=(t=this.registry)==null?void 0:t.minmax.value)==null?void 0:i.max}}
                                                @mouseleave=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                                @blur=${()=>{this.highlightFrom=void 0,this.highlightTo=void 0}}
                                            ></registry-range-full-button>

                        </thermal-bar>
                        
                    </div>

                    <registry-histogram></registry-histogram>
                    <registry-range-slider></registry-range-slider>
                    <registry-ticks-bar highlightFrom=${me(this.highlightFrom)} highlightTo=${me(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};qt.styles=fe`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;mr([y({type:String,reflect:!0,attribute:!0})],qt.prototype,"palette",2);mr([y({type:Number,reflect:!0})],qt.prototype,"from",2);mr([y({type:Number,reflect:!0})],qt.prototype,"to",2);mr([y()],qt.prototype,"slug",2);mr([y({type:String,reflect:!0})],qt.prototype,"grouping",2);mr([y({type:String,reflect:!0})],qt.prototype,"columns",2);mr([y({type:Number,reflect:!0})],qt.prototype,"breakpoint",2);mr([y({type:String,reflect:!0})],qt.prototype,"groups",2);mr([y({type:String,reflect:!0})],qt.prototype,"autogroups",2);mr([pi({flatten:!0}),P()],qt.prototype,"entries",2);mr([P()],qt.prototype,"registry",2);qt=mr([ne("thermal-registry-app")],qt);var mb=Object.defineProperty,yb=Object.getOwnPropertyDescriptor,Zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mb(e,t,s),s};let Sr=class extends _t{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=ue()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await Ic(this.elementContext.element.getTourableRoot(),this,{middleware:[Tc(20),Em({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return x`<div class=${Dt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?x`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:j}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?x`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${L(E.back)}</thermal-button>`:j} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?x`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${L(E.next)}</thermal-button>`:j}          
            
            </div>

            

        </div>
        `}};Sr.styles=fe`

        :host {
            background: var( --thermal-primary );
            color: var( --thermal-background );
            padding: var( --thermal-gap );
            /* border: 3px solid var( --thermal-foreground ); */
            z-index: 9999;
            border-radius: var( --thermal-radius );

            font-size: var( --thermal-fs );
            line-height: 1em;
            box-shadow: 0 0 10px var(--thermal-foreground);

        }

        :host( [displayed="false"] ) {
            display: none;
            width: 0px;
            height: 0px;
            overflow: hidden;
        }

        h1 {
            font-size: var( --thermal-fs );
            border-bottom: 1px solid var( --thermal-primary-light );
            margin: 0;
            margin-bottom: 15px;
            padding: 0;
            padding-bottom: 5px;
            display: inline-block;
        }

        .content {
            padding: 0;
            padding-bottom: 15px;
        }

        .buttons {
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-end;
            gap: 5px;
        }

        .header {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }

        .close {
            color: var(--thermal-background);
            background: transparent;
            border: 0;
            padding: 0;
            margin: 0;
            cursor: pointer;
            justify-self: end;

            &:hover {
                color: var( --thermal-primary-light );
            }
        }

        /*
        .arrow {
            width: 20px;
            height: 20px;
            content: "";
            background: red;
            position: absolute;
        }
        */
    
    `;Zr([y({type:String})],Sr.prototype,"label",2);Zr([P()],Sr.prototype,"active",2);Zr([y({type:String,reflect:!0})],Sr.prototype,"displayed",2);Zr([y({type:String})],Sr.prototype,"placement",2);Zr([ve({context:bc,subscribe:!0})],Sr.prototype,"tour",2);Zr([ve({context:wc,subscribe:!0})],Sr.prototype,"definition",2);Zr([ve({context:xc,subscribe:!0})],Sr.prototype,"elementContext",2);Zr([y({type:String})],Sr.prototype,"youtube",2);Sr=Zr([ne("tour-step")],Sr);const Ya=window.matchMedia("(prefers-color-scheme: dark)"),Ko="thermal-dark-mode",wh=()=>{document.body.classList.add(Ko)},vb=()=>{document.body.classList.remove(Ko)},bb=()=>{Ya.matches&&wh();const r=e=>{e.matches?wh():vb()};Ya.addEventListener("change",r),Ya.addListener(r)},wb=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},xb=ho.toString().replaceAll(".","-"),Sb=r=>`thermal__${r}__${xb}`,xh=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",Sb(r)),t.innerHTML=e,document.head.appendChild(t)},$b=()=>{xh("rootVariables",`

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


            
        
        `),xh("darkModeOverrides",`
        
            body.${Ko} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};wb();console.info(`@labir/embed ${ho}
Author: ${bu}`);bb();$b();
