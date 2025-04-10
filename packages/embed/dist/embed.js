var wp=Object.defineProperty;var xp=(r,e,t)=>e in r?wp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(xp(r,typeof e!="symbol"?e+"":e,t),t);const fs="1.2.67",Sp="Jan Jáchim <jachim5@gmail.com>",ke=r=>typeof r=="string",Bs=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},Oh=r=>r==null?"":""+r,$p=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},kp=/###/g,Eh=r=>r&&r.indexOf("###")>-1?r.replace(kp,"."):r,Dh=r=>!r||ke(r),qs=(r,e,t)=>{const i=ke(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Dh(r))return{};const n=Eh(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return Dh(r)?{}:{obj:r,k:Eh(i[s])}},Mh=(r,e,t)=>{const{obj:i,k:s}=qs(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=qs(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=qs(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},Cp=(r,e,t,i)=>{const{obj:s,k:n}=qs(r,e,Object);s[n]=s[n]||[],s[n].push(t)},da=(r,e)=>{const{obj:t,k:i}=qs(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},_p=(r,e,t)=>{const i=da(r,t);return i!==void 0?i:da(e,t)},ed=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?ke(r[i])||r[i]instanceof String||ke(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):ed(r[i],e[i],t):r[i]=e[i]);return r},ls=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Pp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ap=r=>ke(r)?r.replace(/[&<>"'\/]/g,e=>Pp[e]):r;class Lp{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Op=[" ",",","?","!",";"],Ep=new Lp(20),Dp=(r,e,t)=>{e=e||"",t=t||"";const i=Op.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=Ep.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Jo=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},ua=r=>r==null?void 0:r.replace("_","-"),Mp={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class pa{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Mp,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(ke(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new pa(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new pa(this.logger,e)}}var Wr=new pa;class Ma{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class Rh extends Ma{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):ke(i)&&n?o.push(...i.split(n)):o.push(i)));const l=da(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!ke(i)?l:Jo((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),Mh(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(ke(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=da(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?ed(l,i,n):l={...l,...i},Mh(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var td={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const Th={},Ih=r=>!ke(r)&&typeof r!="boolean"&&typeof r!="number";class fa extends Ma{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),$p(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Wr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Dp(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:ke(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:ke(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const j=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${j}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${j}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let g=d==null?void 0:d.res;const b=(d==null?void 0:d.usedKey)||a,x=(d==null?void 0:d.exactUsedKey)||a,A=["[object Number]","[object Function]","[object RegExp]"],_=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,V=!this.i18nFormat||this.i18nFormat.handleAsObject,L=t.count!==void 0&&!ke(t.count),D=fa.hasDefaultValue(t),q=L?this.pluralResolver.getSuffix(h,t.count,t):"",B=t.ordinal&&L?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",se=L&&!t.ordinal&&t.count===0,C=se&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${q}`]||t[`defaultValue${B}`]||t.defaultValue;let E=g;V&&!g&&D&&(E=C);const R=Ih(E),T=Object.prototype.toString.apply(E);if(V&&E&&R&&A.indexOf(T)<0&&!(ke(_)&&Array.isArray(E))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const j=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,E,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(d.res=j,d.usedParams=this.getUsedParamsDetails(t),d):j}if(n){const j=Array.isArray(E),I=j?[]:{},U=j?x:b;for(const M in E)if(Object.prototype.hasOwnProperty.call(E,M)){const K=`${U}${n}${M}`;D&&!g?I[M]=this.translate(K,{...t,defaultValue:Ih(C)?C[M]:void 0,joinArrays:!1,ns:o}):I[M]=this.translate(K,{...t,joinArrays:!1,ns:o}),I[M]===K&&(I[M]=E[M])}g=I}}else if(V&&ke(_)&&Array.isArray(g))g=g.join(_),g&&(g=this.extendTranslation(g,e,t,i));else{let j=!1,I=!1;!this.isValidLookup(g)&&D&&(j=!0,g=C),this.isValidLookup(g)||(I=!0,g=a);const M=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:g,K=D&&C!==g&&this.options.updateMissing;if(I||j||K){if(this.logger.log(K?"updateKey":"missingKey",h,l,a,K?C:g),n){const de=this.resolve(a,{...t,keySeparator:!1});de&&de.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const k=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&k&&k[0])for(let de=0;de<k.length;de++)he.push(k[de]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(t.lng||this.language):he.push(t.lng||this.language);const W=(de,ie,Pe)=>{var Qe;const Be=D&&Pe!==g?Pe:M;this.options.missingKeyHandler?this.options.missingKeyHandler(de,l,ie,Be,K,t):(Qe=this.backendConnector)!=null&&Qe.saveMissing&&this.backendConnector.saveMissing(de,l,ie,Be,K,t),this.emit("missingKey",de,l,ie,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?he.forEach(de=>{const ie=this.pluralResolver.getSuffixes(de,t);se&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ie.indexOf(`${this.options.pluralSeparator}zero`)<0&&ie.push(`${this.options.pluralSeparator}zero`),ie.forEach(Pe=>{W([de],a+Pe,t[`defaultValue${Pe}`]||C)})}):W(he,a,C))}g=this.extendTranslation(g,e,t,d,i),I&&g===a&&this.options.appendNamespaceToMissingKey&&(g=`${l}:${a}`),(I||j)&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,j?g:void 0))}return s?(d.res=g,d.usedParams=this.getUsedParamsDetails(t),d):g}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=ke(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(d){const x=e.match(this.interpolator.nestingRegexp);g=x&&x.length}let b=i.replace&&!ke(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),e=this.interpolator.interpolate(e,b,i.lng||this.language||s.usedLng,i),d){const x=e.match(this.interpolator.nestingRegexp),A=x&&x.length;g<A&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var x=arguments.length,A=new Array(x),_=0;_<x;_++)A[_]=arguments[_];return(n==null?void 0:n[0])===A[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${A[0]} in key: ${t[0]}`),null):a.translate(...A,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=ke(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=td.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return ke(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let d=h.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const g=t.count!==void 0&&!ke(t.count),b=g&&!t.ordinal&&t.count===0,x=t.context!==void 0&&(ke(t.context)||typeof t.context=="number")&&t.context!=="",A=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(_=>{var V,L;this.isValidLookup(i)||(o=_,!Th[`${A[0]}-${_}`]&&((V=this.utils)!=null&&V.hasLoadedNamespace)&&!((L=this.utils)!=null&&L.hasLoadedNamespace(o))&&(Th[`${A[0]}-${_}`]=!0,this.logger.warn(`key "${s}" for languages "${A.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),A.forEach(D=>{var se;if(this.isValidLookup(i))return;a=D;const q=[u];if((se=this.i18nFormat)!=null&&se.addLookupKeys)this.i18nFormat.addLookupKeys(q,u,D,_,t);else{let C;g&&(C=this.pluralResolver.getSuffix(D,t.count,t));const E=`${this.options.pluralSeparator}zero`,R=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(q.push(u+C),t.ordinal&&C.indexOf(R)===0&&q.push(u+C.replace(R,this.options.pluralSeparator)),b&&q.push(u+E)),x){const T=`${u}${this.options.contextSeparator}${t.context}`;q.push(T),g&&(q.push(T+C),t.ordinal&&C.indexOf(R)===0&&q.push(T+C.replace(R,this.options.pluralSeparator)),b&&q.push(T+E))}}let B;for(;B=q.pop();)this.isValidLookup(i)||(n=B,i=this.getResource(D,_,B,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!ke(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class zh{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Wr.create("languageUtils")}getScriptPartFromCode(e){if(e=ua(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=ua(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(ke(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),ke(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return ke(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):ke(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const Uh={zero:0,one:1,two:2,few:3,many:4,other:5},Fh={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Rp{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Wr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=ua(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Fh;if(!e.match(/-|_/))return Fh;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>Uh[s]-Uh[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const jh=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=_p(r,e,t);return!n&&s&&ke(t)&&(n=Jo(r,t,i),n===void 0&&(n=Jo(e,t,i))),n},Uo=r=>r.replace(/\$/g,"$$$$");class Tp{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Wr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:g,nestingPrefixEscaped:b,nestingSuffix:x,nestingSuffixEscaped:A,nestingOptionsSeparator:_,maxReplaces:V,alwaysFormat:L}=e.interpolation;this.escape=t!==void 0?t:Ap,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?ls(n):a||"{{",this.suffix=o?ls(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=g?ls(g):b||ls("$t("),this.nestingSuffix=x?ls(x):A||ls(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=V||1e3,this.alwaysFormat=L!==void 0?L:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var b;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=x=>{if(x.indexOf(this.formatSeparator)<0){const L=jh(t,l,x,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(L,void 0,i,{...s,...t,interpolationkey:x}):L}const A=x.split(this.formatSeparator),_=A.shift().trim(),V=A.join(this.formatSeparator).trim();return this.format(jh(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),V,i,{...s,...t,interpolationkey:_})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((b=s==null?void 0:s.interpolation)==null?void 0:b.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:x=>Uo(x)},{regex:this.regexp,safeValue:x=>this.escapeValue?Uo(this.escape(x)):Uo(x)}].forEach(x=>{for(o=0;n=x.regex.exec(e);){const A=n[1].trim();if(a=h(A),a===void 0)if(typeof u=="function"){const V=u(e,n,s);a=ke(V)?V:""}else if(s&&Object.prototype.hasOwnProperty.call(s,A))a="";else if(d){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${A} for interpolating ${e}`),a="";else!ke(a)&&!this.useRawValueToEscape&&(a=Oh(a));const _=x.safeValue(a);if(e=e.replace(n[0],_),d?(x.regex.lastIndex+=a.length,x.regex.lastIndex-=n[0].length):x.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let g=`{${d[1]}`;l=d[0],g=this.interpolate(g,a);const b=g.match(/'/g),x=g.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!x||x.length%2!==0)&&(g=g.replace(/'/g,'"'));try{a=JSON.parse(g),h&&(a={...h,...a})}catch(A){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,A),`${l}${u}${g}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!ke(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!ke(n))return n;ke(n)||(n=Oh(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Ip=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},hs=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(ua(i),s),e[a]=o),o(t)}};class zp{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Wr.create("formatter"),this.options=e,this.formats={number:hs((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:hs((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:hs((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:hs((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:hs((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=hs(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var d;const{formatName:h,formatOptions:u}=Ip(l);if(this.formats[h]){let g=o;try{const b=((d=s==null?void 0:s.formatParams)==null?void 0:d[s.interpolationkey])||{},x=b.locale||b.lng||s.locale||s.lng||i;g=this.formats[h](o,x,{...u,...s,...b})}catch(b){this.logger.warn(b)}return g}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Up=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Fp extends Ma{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Wr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(d=>{const g=`${h}|${d}`;!i.reload&&this.store.hasResourceBundle(h,d)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?a[g]===void 0&&(a[g]=!0):(this.state[g]=1,u=!1,a[g]===void 0&&(a[g]=!0),n[g]===void 0&&(n[g]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{Cp(l.loaded,[n],a),Up(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(d=>{o[h][d]===void 0&&(o[h][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ke(e)&&(e=this.languageUtils.toResolveHierarchy(e)),ke(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,d,g;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((g=this.backend)!=null&&g.create){const b={...a,isUpdate:n},x=this.backend.create.bind(this.backend);if(x.length<6)try{let A;x.length===5?A=x(e,t,i,s,b):A=x(e,t,i,s),A&&typeof A.then=="function"?A.then(_=>o(null,_)).catch(o):o(null,A)}catch(A){o(A)}else x(e,t,i,s,o,b)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const Nh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),ke(r[1])&&(e.defaultValue=r[1]),ke(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Wh=r=>{var e,t;return ke(r.ns)&&(r.ns=[r.ns]),ke(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),ke(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Kn=()=>{},jp=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Qs extends Ma{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Wh(e),this.services={},this.logger=Wr,this.modules={external:[]},jp(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(ke(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=Nh();this.options={...s,...this.options,...Wh(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Wr.init(n(this.modules.logger),this.options):Wr.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=zp;const d=new zh(this.options);this.store=new Rh(this.options.resources,this.options);const g=this.services;g.logger=Wr,g.resourceStore=this.store,g.languageUtils=d,g.pluralResolver=new Rp(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(g.formatter=n(u),g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new Tp(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new Fp(n(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",function(b){for(var x=arguments.length,A=new Array(x>1?x-1:0),_=1;_<x;_++)A[_-1]=arguments[_];e.emit(b,...A)}),this.modules.languageDetector&&(g.languageDetector=n(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=n(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new fa(this.services,this.options),this.translator.on("*",function(b){for(var x=arguments.length,A=new Array(x>1?x-1:0),_=1;_<x;_++)A[_-1]=arguments[_];e.emit(b,...A)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Kn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Bs(),h=()=>{const u=(d,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(g),i(d,g)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Kn;const s=ke(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=Bs();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Kn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&td.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=Bs();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const h=ke(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,h)),this.loadResources(h,g=>{a(g,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),d=2;d<h;d++)u[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const g=s.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(x=>`${l.keyPrefix}${g}${x}`):b=l.keyPrefix?`${l.keyPrefix}${g}${a}`:a,s.t(b,l)};return ke(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=Bs();return this.options.ns?(ke(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Bs();ke(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new zh(Nh());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Qs(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Kn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Qs(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((u,d)=>(u[d]={...l[h][d]},u),{})),{});n.store=new Rh(o,s),n.services.resourceStore=n.store}return n.translator=new fa(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const pt=Qs.createInstance();pt.createInstance=Qs.createInstance;pt.createInstance;pt.dir;pt.init;pt.loadResources;pt.reloadResources;pt.use;pt.changeLanguage;pt.getFixedT;const $=pt.t;pt.exists;pt.setDefaultNamespace;pt.hasLoadedNamespace;pt.loadNamespaces;pt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=globalThis,ga=Xs.trustedTypes,Hh=ga?ga.createPolicy("lit-html",{createHTML:r=>r}):void 0,xl="$lit$",si=`lit$${Math.random().toFixed(9).slice(2)}$`,Sl="?"+si,Np=`<${Sl}>`,Yi=document,en=()=>Yi.createComment(""),tn=r=>r===null||typeof r!="object"&&typeof r!="function",$l=Array.isArray,rd=r=>$l(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Fo=`[ 	
\f\r]`,Vs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bh=/-->/g,Vh=/>/g,Ni=RegExp(`>|${Fo}(?:([^\\s"'>=/]+)(${Fo}*=${Fo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gh=/'/g,Yh=/"/g,id=/^(?:script|style|textarea|title)$/i,Wp=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Wp(1),ki=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),qh=new WeakMap,Vi=Yi.createTreeWalker(Yi,129);function sd(r,e){if(!$l(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hh!==void 0?Hh.createHTML(e):e}const nd=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=Vs;for(let o=0;o<t;o++){const l=r[o];let h,u,d=-1,g=0;for(;g<l.length&&(a.lastIndex=g,u=a.exec(l),u!==null);)g=a.lastIndex,a===Vs?u[1]==="!--"?a=Bh:u[1]!==void 0?a=Vh:u[2]!==void 0?(id.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=Ni):u[3]!==void 0&&(a=Ni):a===Ni?u[0]===">"?(a=s??Vs,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Ni:u[3]==='"'?Yh:Gh):a===Yh||a===Gh?a=Ni:a===Bh||a===Vh?a=Vs:(a=Ni,s=void 0);const b=a===Ni&&r[o+1].startsWith("/>")?" ":"";n+=a===Vs?l+Np:d>=0?(i.push(h),l.slice(0,d)+xl+l.slice(d)+si+b):l+si+(d===-2?o:b)}return[sd(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Qo=class ad{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=nd(e,t);if(this.el=ad.createElement(h,i),Vi.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Vi.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(xl)){const g=u[a++],b=s.getAttribute(d).split(si),x=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:x[2],strings:b,ctor:x[1]==="."?hd:x[1]==="?"?cd:x[1]==="@"?dd:yn}),s.removeAttribute(d)}else d.startsWith(si)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(id.test(s.tagName)){const d=s.textContent.split(si),g=d.length-1;if(g>0){s.textContent=ga?ga.emptyScript:"";for(let b=0;b<g;b++)s.append(d[b],en()),Vi.nextNode(),l.push({type:2,index:++n});s.append(d[g],en())}}}else if(s.nodeType===8)if(s.data===Sl)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(si,d+1))!==-1;)l.push({type:7,index:n}),d+=si.length-1}n++}}static createElement(e,t){const i=Yi.createElement("template");return i.innerHTML=e,i}};function qi(r,e,t=r,i){var a,o;if(e===ki)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=tn(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=qi(r,s._$AS(r,e.values),s,i)),e}let od=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Yi).importNode(t,!0);Vi.currentNode=s;let n=Vi.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Ra(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new ud(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=Vi.nextNode(),a++)}return Vi.currentNode=Yi,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ra=class ld{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qi(this,e,t),tn(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==ki&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&tn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Qo.createElement(sd(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new od(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=qh.get(e.strings);return t===void 0&&qh.set(e.strings,t=new Qo(e)),t}k(e){$l(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new ld(this.O(en()),this.O(en()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class yn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=qi(this,e,t,0),a=!tn(e)||e!==this._$AH&&e!==ki,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=qi(this,o[i+l],t,l),h===ki&&(h=this._$AH[l]),a||(a=!tn(h)||h!==this._$AH[l]),h===P?e=P:e!==P&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class hd extends yn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class cd extends yn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}let dd=class extends yn{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=qi(this,e,t,0)??P)===ki)return;const i=this._$AH,s=e===P&&i!==P||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==P&&(i===P||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},ud=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){qi(this,e)}};const Hp={M:xl,P:si,A:Sl,C:1,L:nd,R:od,D:rd,V:qi,I:Ra,H:yn,N:cd,U:dd,B:hd,F:ud},jo=Xs.litHtmlPolyfillSupport;jo==null||jo(Qo,Ra),(Xs.litHtmlVersions??(Xs.litHtmlVersions=[])).push("3.2.1");const pd=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Ra(e.insertBefore(en(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Bp}=Hp,Xh=(r,e)=>(r==null?void 0:r._$litType$)!==void 0,Vp=r=>{var e;return((e=r==null?void 0:r._$litType$)==null?void 0:e.h)!=null},Gp=r=>r.strings===void 0,Kh=()=>document.createComment(""),Zh=(r,e,t)=>{var n;const i=r._$AA.parentNode,s=r._$AB;if(t===void 0){const a=i.insertBefore(Kh(),s),o=i.insertBefore(Kh(),s);t=new Bp(a,o,r,r.options)}else{const a=t._$AB.nextSibling,o=t._$AM,l=o!==r;if(l){let h;(n=t._$AQ)==null||n.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==o._$AU&&t._$AP(h)}if(a!==s||l){let h=t._$AA;for(;h!==a;){const u=h.nextSibling;i.insertBefore(h,s),h=u}}}return t},Yp={},Jh=(r,e=Yp)=>r._$AH=e,Qh=r=>r._$AH,qp=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bn=r=>(...e)=>({_$litDirective$:r,values:e});let Ta=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Ks(s,e);return!0},ma=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},fd=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Zp(e)}};function Xp(r){this._$AN!==void 0?(ma(this),this._$AM=r,fd(this)):this._$AM=r}function Kp(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Ks(i[n],!1),ma(i[n]);else i!=null&&(Ks(i,!1),ma(i));else Ks(this,r)}const Zp=r=>{r.type==ii.CHILD&&(r._$AP??(r._$AP=Kp),r._$AQ??(r._$AQ=Xp))};let Jp=class extends Ta{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),fd(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Ks(this,e),ma(this))}setValue(e){if(Gp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ec=null,gd=()=>{};new Promise(r=>{gd=r});const Qp={type:"3rdParty",init(r){ef(r)}},ef=r=>{ec=r,gd(ec)},tc=new Map,tf=()=>{tc.forEach((r,e)=>{(e.isConnected===!1||rf(e)===!1)&&tc.delete(e)})};setInterval(tf,1e4);const rf=r=>{const e=r.part;if(e.type===ii.ATTRIBUTE)return e.element.isConnected;if(e.type===ii.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===ii.PROPERTY||e.type===ii.BOOLEAN_ATTRIBUTE||e.type===ii.EVENT||e.type===ii.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:sf,forEach:nf}=[];function af(r){return nf.call(sf.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const rc=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,of=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!rc.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!rc.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},ic={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=of(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var lf={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return ic.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&ic.create(t,r,i,s,n)}},hf={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let Gs=null;const sc=()=>{if(Gs!==null)return Gs;try{Gs=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Gs=!1}return Gs};var cf={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&sc())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&sc()&&window.localStorage.setItem(t,r)}};let Ys=null;const nc=()=>{if(Ys!==null)return Ys;try{Ys=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Ys=!1}return Ys};var df={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&nc())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&nc()&&window.sessionStorage.setItem(t,r)}},uf={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},pf={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},ff={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},gf={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let md=!1;try{document.cookie,md=!0}catch{}const vd=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];md||vd.splice(1,1);const mf=()=>({order:vd,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class yd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=af(t,this.options||{},mf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(lf),this.addDetector(hf),this.addDetector(cf),this.addDetector(df),this.addDetector(uf),this.addDetector(pf),this.addDetector(ff),this.addDetector(gf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}yd.type="languageDetector";const vf={layout_simple:"Simple layout",layout_advanced:"Evaluation layout",layout_nogui:"No GUI",layout_lesson:"Lesson layout",share:"Share",fileloadingerror:"File loading error",embedhint:"To embed this block in another website, use the following code:",embedlibrary:"Insert the library - once in HTML head",embedcomponent:"Use the following code anywhere in HTML body",copy:"Copy",remotefoldersbrowseraddfolderhint:"If you add another folder in the storage, you will see additional evaluation options here.",loading:"Loading",config:"Settings",temperature:"Temperature",file:"File",upload:"Upload",uploadafile:"Upload a file",selectfile:"Select a file",addfiles:"Add file(s)",clear:"Clear",dragorselectfile:"Drag and drop an LRC file or select it from disk",detail:"Detail",showeverything:"Show everything",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",open:"Open",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automatic range",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",togglevisibleimage:"Switch IR / VIS image",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",exportimagewidth:"Exported image width",exportimagefontsize:"Exported image font size",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",analysissync:"Synchronise analyses",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},yf={loading:"Chargement",config:"Einstellungen",temperature:"Temperature",upload:"Téléverser",uploadafile:"Téléverser un fichier",selectfile:"Sélectionner un fichier",addfiles:"Ajouter un/des fichier(s)",clear:"Effacer",dragorselectfile:"Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",share:"Partager",fileloadingerror:"Erreur de chargement du fichier",embedhint:"Pour intégrer ce bloc dans un autre site Web, utilisez le code suivant :",embedlibrary:"Insérez la bibliothèque – une seule fois dans l'en-tête HTML",embedcomponent:"Utilisez le code suivant n'importe où dans le corps HTML",copy:"Copier",remotefoldersbrowseraddfolderhint:"Si vous ajoutez un autre dossier dans le référentiel, vous verrez ici des options d'évaluation supplémentaires.",file:"fichier",detail:"Détail",showeverything:"Montrer tout",analysissync:"Synchroniser les analyses",layout_simple:"Disposition simple",layout_advanced:"Disposition d'analyse",layout_nogui:"Pas d'interface graphique",layout_lesson:"Disposition de leçon",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",open:"Ouvrir",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",togglevisibleimage:"Commuter l'image IR / VIS",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",exportimagewidth:"Largeur de l'image exportée",exportimagefontsize:"Taille de la police de l'image exportée",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},bf={loading:"Načítám",config:"Nastavení",layout_simple:"Jednoduché rozvržení",layout_advanced:"Analytické rozvržení",layout_nogui:"Bez GUI",layout_lesson:"Rozvržení lekce",share:"Sdílet",fileloadingerror:"Chyba při načítání souboru",embedhint:"Chcete-li vložit tento blok na jinou webovou stránku, použijte následující kód:",embedlibrary:"Vložte knihovnu – jednou v HTML hlavičce",embedcomponent:"Použijte následující kód kdekoli v HTML těle",copy:"Kopírovat",remotefoldersbrowseraddfolderhint:"Pokud v úložišti přidáte další složku, uvidíte zde další možnosti vyhodnocení.",temperature:"Teplota",upload:"Nahrát",uploadafile:"Nahrát soubor",selectfile:"Vybrat soubor",addfiles:"Přidat soubor(y)",clear:"Smazat",dragorselectfile:"Přetáhněte LRC soubor nebo jej vyberte z disku",file:"soubor",detail:"Detail",showeverything:"Zobrazit vše",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",open:"Otevřít",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",togglevisibleimage:"Přepnout IR / VIS obraz",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",exportimagewidth:"Šířka exportovaných obrázků",exportimagefontsize:"Velikost písma v exportovaných obrázcích",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",analysissync:"Synchronizovat analýzy",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},wf={loading:"Llwytho",config:"Gosodiadau",temperature:"Tymheredd",upload:"Llwytho i fyny",uploadafile:"Llwytho ffeil i fyny",selectfile:"Dewis ffeil",addfiles:"Ychwanegu ffeil(iau)",clear:"Clirio",dragorselectfile:"Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",share:"Rhannu",fileloadingerror:"Gwall wrth lwytho'r ffeil",embedhint:"I fewnosod y bloc hwn mewn gwefan arall, defnyddiwch y cod canlynol:",embedlibrary:"Mewnosodwch y llyfrgell – unwaith yn pennyn HTML",embedcomponent:"Defnyddiwch y cod canlynol yn unrhyw le yn y corff HTML",copy:"Copïo",remotefoldersbrowseraddfolderhint:"Os ychwanegwch ffolder arall yn y gadwrfa, fe welwch opsiynau gwerthuso ychwanegol yma.",analysissync:"Cydamseru dadansoddiadau",file:"ffeil",detail:"Manylder",open:"Agor",showeverything:"Dangos popeth",layout_simple:"Cynllun syml",layout_advanced:"Cynllun dadansoddi",layout_nogui:"Dim GUI",layout_lesson:"Cynllun gwers",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",togglevisibleimage:"Newid delwedd IR/VIS",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",exportimagewidth:"Lled delwedd wedi'i hallforio",exportimagefontsize:"Maint ffont delwedd wedi'i hallforio",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},xf={loading:"Loading",config:"Paramètres",layout_simple:"Einfaches Layout",layout_advanced:"Analyse-Layout",layout_nogui:"Kein GUI",layout_lesson:"Lektions-Layout",share:"Teilen",fileloadingerror:"Fehler beim Laden der Datei",embedhint:"Um diesen Block in eine andere Website einzubetten, verwenden Sie den folgenden Code:",embedlibrary:"Bibliothek einfügen – einmal im HTML-Head",embedcomponent:"Verwenden Sie den folgenden Code überall im HTML-Body",copy:"Kopieren",remotefoldersbrowseraddfolderhint:"Wenn Sie einen weiteren Ordner im Repository hinzufügen, werden Ihnen hier zusätzliche Auswertungsmöglichkeiten angezeigt.",temperature:"Temperatur",upload:"Hochladen",uploadafile:"Datei hochladen",selectfile:"Datei auswählen",addfiles:"Datei(en) hinzufügen",clear:"Löschen",dragorselectfile:"Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",analysissync:"Analysen synchronisieren",file:"Datei",detail:"Detail",showeverything:"Alles anzeigen",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",open:"Öffnen",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",togglevisibleimage:"IR/VIS-Bild umschalten",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",exportimagewidth:"Exportierte Bildbreite",exportimagefontsize:"Exportierte Bildschriftgröße",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};pt.use(Qp).use(yd).init({fallbackLng:"en",resources:{cs:{translation:bf},cy:{translation:wf},de:{translation:xf},en:{translation:vf},fr:{translation:yf}}});window.i18next=pt;const No=window.matchMedia("(prefers-color-scheme: dark)"),bd="thermal-dark-mode",ac=()=>{document.body.classList.add(bd)},Sf=()=>{document.body.classList.remove(bd)},$f=()=>{No.matches&&ac();const r=e=>{e.matches?ac():Sf()};No.addEventListener("change",r),No.addListener(r)},kf=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const aa=globalThis,kl=aa.ShadowRoot&&(aa.ShadyCSS===void 0||aa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cl=Symbol(),oc=new WeakMap;let wd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Cl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(kl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=oc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&oc.set(t,e))}return e}toString(){return this.cssText}};const Cf=r=>new wd(typeof r=="string"?r:r+"",void 0,Cl),ce=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new wd(t,r,Cl)},_f=(r,e)=>{if(kl)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=aa.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},lc=kl?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Cf(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pf,defineProperty:Af,getOwnPropertyDescriptor:Lf,getOwnPropertyNames:Of,getOwnPropertySymbols:Ef,getPrototypeOf:Df}=Object,Si=globalThis,hc=Si.trustedTypes,Mf=hc?hc.emptyScript:"",Wo=Si.reactiveElementPolyfillSupport,Zs=(r,e)=>r,va={toAttribute(r,e){switch(e){case Boolean:r=r?Mf:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},_l=(r,e)=>!Pf(r,e),cc={attribute:!0,type:String,converter:va,reflect:!1,hasChanged:_l};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Si.litPropertyMetadata??(Si.litPropertyMetadata=new WeakMap);let ps=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=cc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Af(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Lf(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??cc}static _$Ei(){if(this.hasOwnProperty(Zs("elementProperties")))return;const e=Df(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Zs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zs("properties"))){const t=this.properties,i=[...Of(t),...Ef(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(lc(s))}else e!==void 0&&t.push(lc(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _f(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:va).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:va;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??_l)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};ps.elementStyles=[],ps.shadowRootOptions={mode:"open"},ps[Zs("elementProperties")]=new Map,ps[Zs("finalized")]=new Map,Wo==null||Wo({ReactiveElement:ps}),(Si.reactiveElementVersions??(Si.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let nr=class extends ps{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ki}};var Qc;nr._$litElement$=!0,nr.finalized=!0,(Qc=globalThis.litElementHydrateSupport)==null||Qc.call(globalThis,{LitElement:nr});const Ho=globalThis.litElementPolyfillSupport;Ho==null||Ho({LitElement:nr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rf={attribute:!0,type:String,converter:va,reflect:!1,hasChanged:_l},Tf=(r=Rf,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function m(r){return(e,t)=>typeof t=="object"?Tf(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(r){return m({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const If=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function di(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return If(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const zf={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Zn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Jn(r){return r.toString().indexOf("`")===-1}Jn(r=>r``)||Jn(r=>r`\0`)||Jn(r=>r`\n`)||Jn(r=>r`\u0000`);Zn``&&Zn`\0`&&Zn`\n`&&Zn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Uf="google#safe";function Ff(){if(typeof window<"u")return window.trustedTypes}function xd(){var r;return(r=Ff())!==null&&r!==void 0?r:null}let Qn;function jf(){var r,e;if(Qn===void 0)try{Qn=(e=(r=xd())===null||r===void 0?void 0:r.createPolicy(Uf,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{Qn=null}return Qn}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Sd{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function dc(r){var e;const t=r,i=(e=jf())===null||e===void 0?void 0:e.createScriptURL(t);return i??new Sd(t,zf)}function Nf(r){var e;if(!((e=xd())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof Sd)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function $d(r,...e){if(e.length===0)return dc(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return dc(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Wf(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Hf(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Wf(e||window);t&&r.setAttribute("nonce",t)}function kd(r,e,t){r.src=Nf(e),Hf(r)}/**
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
 */const Bf=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),kd(t,$d`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Cd(r={}){await Bf;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function uc(r){if(await Cd(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Vf(r){return await Cd(),new google.visualization.ChartWrapper({container:r})}const _d=6048e5,Gf=864e5,pc=Symbol.for("constructDateFrom");function Ci(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&pc in r?r[pc](e):r instanceof Date?new r.constructor(e):new Date(e)}function At(r,e){return Ci(e||r,r)}let Yf={};function wn(){return Yf}function Xi(r,e){var o,l,h,u;const t=wn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=At(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function ya(r,e){return Xi(r,{...e,weekStartsOn:1})}function Pd(r,e){const t=At(r,e==null?void 0:e.in),i=t.getFullYear(),s=Ci(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=ya(s),a=Ci(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=ya(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function fc(r){const e=At(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function qf(r,...e){const t=Ci.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function el(r,e){const t=At(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function Xf(r,e,t){const[i,s]=qf(t==null?void 0:t.in,r,e),n=el(i),a=el(s),o=+n-fc(n),l=+a-fc(a);return Math.round((o-l)/Gf)}function Kf(r,e){const t=Pd(r,e),i=Ci(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),ya(i)}function Zf(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Ad(r){return!(!Zf(r)&&typeof r!="number"||isNaN(+At(r)))}function Jf(r,e){const t=At(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function gc(r,e){const t=At(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function mc(r,e){const t=At(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Qf(r,e){const t=At(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function Ld(r,e){const t=At(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function eg(r,e){const t=At(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function vc(r,e){var o,l;const t=wn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=At(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const tg={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Od=(r,e,t)=>{let i;const s=tg[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Mt(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const rg={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ig={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sg={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ng={date:Mt({formats:rg,defaultWidth:"full"}),time:Mt({formats:ig,defaultWidth:"full"}),dateTime:Mt({formats:sg,defaultWidth:"full"})},ag={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ed=(r,e,t,i)=>ag[r];function dt(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const og={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},lg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},hg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},cg={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ug={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},pg=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Dd={ordinalNumber:pg,era:dt({values:og,defaultWidth:"wide"}),quarter:dt({values:lg,defaultWidth:"wide",argumentCallback:r=>r-1}),month:dt({values:hg,defaultWidth:"wide"}),day:dt({values:cg,defaultWidth:"wide"}),dayPeriod:dt({values:dg,defaultWidth:"wide",formattingValues:ug,defaultFormattingWidth:"wide"})};function ut(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?gg(o,d=>d.test(a)):fg(o,d=>d.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function fg(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function gg(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function xn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const mg=/^(\d+)(th|st|nd|rd)?/i,vg=/\d+/i,yg={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bg={any:[/^b/i,/^(a|c)/i]},wg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},xg={any:[/1/i,/2/i,/3/i,/4/i]},Sg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$g={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kg={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Cg={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_g={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Pg={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Md={ordinalNumber:xn({matchPattern:mg,parsePattern:vg,valueCallback:r=>parseInt(r,10)}),era:ut({matchPatterns:yg,defaultMatchWidth:"wide",parsePatterns:bg,defaultParseWidth:"any"}),quarter:ut({matchPatterns:wg,defaultMatchWidth:"wide",parsePatterns:xg,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ut({matchPatterns:Sg,defaultMatchWidth:"wide",parsePatterns:$g,defaultParseWidth:"any"}),day:ut({matchPatterns:kg,defaultMatchWidth:"wide",parsePatterns:Cg,defaultParseWidth:"any"}),dayPeriod:ut({matchPatterns:_g,defaultMatchWidth:"any",parsePatterns:Pg,defaultParseWidth:"any"})},Ag={code:"en-US",formatDistance:Od,formatLong:ng,formatRelative:Ed,localize:Dd,match:Md,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Lg(r,e){const t=At(r,e==null?void 0:e.in);return Xf(t,Ld(t))+1}function Og(r,e){const t=At(r,e==null?void 0:e.in),i=+ya(t)-+Kf(t);return Math.round(i/_d)+1}function Rd(r,e){var u,d,g,b;const t=At(r,e==null?void 0:e.in),i=t.getFullYear(),s=wn(),n=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(g=s.locale)==null?void 0:g.options)==null?void 0:b.firstWeekContainsDate)??1,a=Ci((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Xi(a,e),l=Ci((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=Xi(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function Eg(r,e){var o,l,h,u;const t=wn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=Rd(r,e),n=Ci((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Xi(n,e)}function Dg(r,e){const t=At(r,e==null?void 0:e.in),i=+Xi(t,e)-+Eg(t,e);return Math.round(i/_d)+1}function Ne(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const wi={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return Ne(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):Ne(t+1,2)},d(r,e){return Ne(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return Ne(r.getHours()%12||12,e.length)},H(r,e){return Ne(r.getHours(),e.length)},m(r,e){return Ne(r.getMinutes(),e.length)},s(r,e){return Ne(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return Ne(s,e.length)}},cs={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},yc={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return wi.y(r,e)},Y:function(r,e,t,i){const s=Rd(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return Ne(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):Ne(n,e.length)},R:function(r,e){const t=Pd(r);return Ne(t,e.length)},u:function(r,e){const t=r.getFullYear();return Ne(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Ne(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Ne(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return wi.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return Ne(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=Dg(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):Ne(s,e.length)},I:function(r,e,t){const i=Og(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):Ne(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):wi.d(r,e)},D:function(r,e,t){const i=Lg(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):Ne(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Ne(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Ne(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return Ne(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=cs.noon:i===0?s=cs.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=cs.evening:i>=12?s=cs.afternoon:i>=4?s=cs.morning:s=cs.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return wi.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):wi.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):Ne(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):Ne(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):wi.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):wi.s(r,e)},S:function(r,e){return wi.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return wc(i);case"XXXX":case"XX":return Wi(i);case"XXXXX":case"XXX":default:return Wi(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return wc(i);case"xxxx":case"xx":return Wi(i);case"xxxxx":case"xxx":default:return Wi(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+bc(i,":");case"OOOO":default:return"GMT"+Wi(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+bc(i,":");case"zzzz":default:return"GMT"+Wi(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return Ne(i,e.length)},T:function(r,e,t){return Ne(+r,e.length)}};function bc(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+Ne(n,2)}function wc(r,e){return r%60===0?(r>0?"-":"+")+Ne(Math.abs(r)/60,2):Wi(r,e)}function Wi(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Ne(Math.trunc(i/60),2),n=Ne(i%60,2);return t+s+e+n}const xc=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Td=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Mg=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return xc(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",xc(i,e)).replace("{{time}}",Td(s,e))},Rg={p:Td,P:Mg},Tg=/^D+$/,Ig=/^Y+$/,zg=["D","DD","YY","YYYY"];function Ug(r){return Tg.test(r)}function Fg(r){return Ig.test(r)}function jg(r,e,t){const i=Ng(r,e,t);if(console.warn(i),zg.includes(r))throw new RangeError(i)}function Ng(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Wg=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Hg=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bg=/^'([^]*?)'?$/,Vg=/''/g,Gg=/[a-zA-Z]/;function ht(r,e,t){var u,d,g,b,x,A,_,V;const i=wn(),s=(t==null?void 0:t.locale)??i.locale??Ag,n=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(g=i.locale)==null?void 0:g.options)==null?void 0:b.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((A=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:A.weekStartsOn)??i.weekStartsOn??((V=(_=i.locale)==null?void 0:_.options)==null?void 0:V.weekStartsOn)??0,o=At(r,t==null?void 0:t.in);if(!Ad(o))throw new RangeError("Invalid time value");let l=e.match(Hg).map(L=>{const D=L[0];if(D==="p"||D==="P"){const q=Rg[D];return q(L,s.formatLong)}return L}).join("").match(Wg).map(L=>{if(L==="''")return{isToken:!1,value:"'"};const D=L[0];if(D==="'")return{isToken:!1,value:Yg(L)};if(yc[D])return{isToken:!0,value:L};if(D.match(Gg))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:L}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(L=>{if(!L.isToken)return L.value;const D=L.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Fg(D)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Ug(D))&&jg(D,e,String(r));const q=yc[D[0]];return q(o,D,s.localize,h)}).join("")}function Yg(r){const e=r.match(Bg);return e?e[1].replace(Vg,"'"):r}function Bo(r,e){const t=At(r,e==null?void 0:e.in);if(!Ad(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=Ne(t.getDate(),2),h=Ne(t.getMonth()+1,2);n=`${Ne(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=Ne(t.getHours(),2),h=Ne(t.getMinutes(),2),u=Ne(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function qg(r,e){const t=At(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var tl;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(tl||(tl={}));var As=r=>r,pr=r=>r,Js=As,Ia=As,vs=As,Sc=As,$c=As,Xg={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:tl.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Kg=`\r
`,Zg="\uFEFF",Sn=r=>Object.assign({},Xg,r);class Jg extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Qg extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class em extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class tm extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var rm=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},im=r=>Sc(typeof r=="object"?r.key:r),sm=r=>$c(typeof r=="object"?r.displayLabel:r),nm=(r,...e)=>e.reduce((t,i)=>i(t),r),am=r=>e=>r.useBom?Ia(pr(e)+Zg):e,om=r=>e=>r.showTitle?Pl(Ia(pr(e)+r.title))(vs("")):e,Pl=r=>e=>Ia(pr(r)+pr(e)+Kg),Id=r=>(e,t)=>lm(r)(vs(pr(e)+pr(t))),lm=r=>e=>As(pr(e)+r.fieldSeparator),hm=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Qg("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=vs("");for(let s=0;s<e.length;s++){const n=sm(e[s]);i=Id(r)(i,zd(r,pr(n)))}return i=vs(pr(i).slice(0,-1)),Pl(t)(i)},cm=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=vs("");for(let o=0;o<e.length;o++){const l=im(e[o]),h=t[n][pr(l)];a=Id(r)(a,zd(r,h))}a=vs(pr(a).slice(0,-1)),s=Pl(s)(a)}return s},dm=r=>+r===r&&(!isFinite(r)||!!(r%1)),um=(r,e)=>{if(dm(e)){if(r.decimalSeparator==="locale")return Js(e.toLocaleString());if(r.decimalSeparator)return Js(e.toString().replace(".",r.decimalSeparator))}return Js(e.toString())},oa=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+rm(e,r.quoteCharacter)+r.quoteCharacter),Js(t)},pm=(r,e)=>{const t=e?"true":"false";return Js(r.boolDisplay[t])},fm=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?oa(r,r.replaceUndefinedWith+""):e===null?oa(r,"null"):oa(r,""),zd=(r,e)=>{if(typeof e=="number")return um(r,e);if(typeof e=="string")return oa(r,e);if(typeof e=="boolean"&&r.boolDisplay)return pm(r,e);if(e===null||typeof e>"u")return fm(r,e);throw new tm(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Ud=r=>e=>{const t=Sn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=nm(Ia(""),am(t),om(t),hm(t,i),cm(t,i,e));if(pr(s).length<1)throw new Jg("Output is empty. Is your data formatted correctly?");return s},gm=r=>e=>{const t=Sn(r),i=pr(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},Fd=r=>e=>{if(!window)throw new em("Downloading only supported in a browser environment.");const t=gm(r)(e),i=Sn(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function ym(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var jd={exports:{}};(function(r){(function(e){var t=D(),i=q(),s=B(),n=se(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:d,toBlob:g,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(C,E){return E=E||{},b(E),Promise.resolve(C).then(function(T){return A(T,E.filter,!0)}).then(_).then(V).then(R).then(function(T){return L(T,E.width||t.width(C),E.height||t.height(C))});function R(T){return E.bgcolor&&(T.style.backgroundColor=E.bgcolor),E.width&&(T.style.width=E.width+"px"),E.height&&(T.style.height=E.height+"px"),E.style&&Object.keys(E.style).forEach(function(j){T.style[j]=E.style[j]}),T}}function h(C,E){return x(C,E||{}).then(function(R){return R.getContext("2d").getImageData(0,0,t.width(C),t.height(C)).data})}function u(C,E){return x(C,E||{}).then(function(R){return R.toDataURL()})}function d(C,E){return E=E||{},x(C,E).then(function(R){return R.toDataURL("image/jpeg",E.quality||1)})}function g(C,E){return x(C,E||{}).then(t.canvasToBlob)}function b(C){typeof C.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=C.imagePlaceholder,typeof C.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=C.cacheBust}function x(C,E){return l(C,E).then(t.makeImage).then(t.delay(100)).then(function(T){var j=R(C);return j.getContext("2d").drawImage(T,0,0),j});function R(T){var j=document.createElement("canvas");if(j.width=E.width||t.width(T),j.height=E.height||t.height(T),E.bgcolor){var I=j.getContext("2d");I.fillStyle=E.bgcolor,I.fillRect(0,0,j.width,j.height)}return j}}function A(C,E,R){if(!R&&E&&!E(C))return Promise.resolve();return Promise.resolve(C).then(T).then(function(U){return j(C,U,E)}).then(function(U){return I(C,U)});function T(U){return U instanceof HTMLCanvasElement?t.makeImage(U.toDataURL()):U.cloneNode(!1)}function j(U,M,K){var he=U.childNodes;if(he.length===0)return Promise.resolve(M);return k(M,t.asArray(he),K).then(function(){return M});function k(W,de,ie){var Pe=Promise.resolve();return de.forEach(function(Be){Pe=Pe.then(function(){return A(Be,ie)}).then(function(Qe){Qe&&W.appendChild(Qe)})}),Pe}}function I(U,M){if(!(M instanceof Element))return M;return Promise.resolve().then(K).then(he).then(k).then(W).then(function(){return M});function K(){de(window.getComputedStyle(U),M.style);function de(ie,Pe){ie.cssText?Pe.cssText=ie.cssText:Be(ie,Pe);function Be(Qe,it){t.asArray(Qe).forEach(function(ae){it.setProperty(ae,Qe.getPropertyValue(ae),Qe.getPropertyPriority(ae))})}}}function he(){[":before",":after"].forEach(function(ie){de(ie)});function de(ie){var Pe=window.getComputedStyle(U,ie),Be=Pe.getPropertyValue("content");if(Be===""||Be==="none")return;var Qe=t.uid();M.className=M.className+" "+Qe;var it=document.createElement("style");it.appendChild(ae(Qe,ie,Pe)),M.appendChild(it);function ae(ue,Ce,Te){var et="."+ue+":"+Ce,Fe=Te.cssText?yi(Te):Ui(Te);return document.createTextNode(et+"{"+Fe+"}");function yi(tt){var cr=tt.getPropertyValue("content");return tt.cssText+" content: "+cr+";"}function Ui(tt){return t.asArray(tt).map(cr).join("; ")+";";function cr(ti){return ti+": "+tt.getPropertyValue(ti)+(tt.getPropertyPriority(ti)?" !important":"")}}}}}function k(){U instanceof HTMLTextAreaElement&&(M.innerHTML=U.value),U instanceof HTMLInputElement&&M.setAttribute("value",U.value)}function W(){M instanceof SVGElement&&(M.setAttribute("xmlns","http://www.w3.org/2000/svg"),M instanceof SVGRectElement&&["width","height"].forEach(function(de){var ie=M.getAttribute(de);ie&&M.style.setProperty(de,ie)}))}}}function _(C){return s.resolveAll().then(function(E){var R=document.createElement("style");return C.appendChild(R),R.appendChild(document.createTextNode(E)),C})}function V(C){return n.inlineAll(C).then(function(){return C})}function L(C,E,R){return Promise.resolve(C).then(function(T){return T.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(T)}).then(t.escapeXhtml).then(function(T){return'<foreignObject x="0" y="0" width="100%" height="100%">'+T+"</foreignObject>"}).then(function(T){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+E+'" height="'+R+'">'+T+"</svg>"}).then(function(T){return"data:image/svg+xml;charset=utf-8,"+T})}function D(){return{escape:W,parseExtension:E,mimeType:R,dataAsUrl:k,isDataUrl:T,canvasToBlob:I,resolveUrl:U,getAndEncode:he,uid:M(),delay:de,asArray:ie,escapeXhtml:Pe,makeImage:K,width:Be,height:Qe};function C(){var ae="application/font-woff",ue="image/jpeg";return{woff:ae,woff2:ae,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ue,jpeg:ue,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function E(ae){var ue=/\.([^\.\/]*?)$/g.exec(ae);return ue?ue[1]:""}function R(ae){var ue=E(ae).toLowerCase();return C()[ue]||""}function T(ae){return ae.search(/^(data:)/)!==-1}function j(ae){return new Promise(function(ue){for(var Ce=window.atob(ae.toDataURL().split(",")[1]),Te=Ce.length,et=new Uint8Array(Te),Fe=0;Fe<Te;Fe++)et[Fe]=Ce.charCodeAt(Fe);ue(new Blob([et],{type:"image/png"}))})}function I(ae){return ae.toBlob?new Promise(function(ue){ae.toBlob(ue)}):j(ae)}function U(ae,ue){var Ce=document.implementation.createHTMLDocument(),Te=Ce.createElement("base");Ce.head.appendChild(Te);var et=Ce.createElement("a");return Ce.body.appendChild(et),Te.href=ue,et.href=ae,et.href}function M(){var ae=0;return function(){return"u"+ue()+ae++;function ue(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function K(ae){return new Promise(function(ue,Ce){var Te=new Image;Te.onload=function(){ue(Te)},Te.onerror=Ce,Te.src=ae})}function he(ae){var ue=3e4;return o.impl.options.cacheBust&&(ae+=(/\?/.test(ae)?"&":"?")+new Date().getTime()),new Promise(function(Ce){var Te=new XMLHttpRequest;Te.onreadystatechange=yi,Te.ontimeout=Ui,Te.responseType="blob",Te.timeout=ue,Te.open("GET",ae,!0),Te.send();var et;if(o.impl.options.imagePlaceholder){var Fe=o.impl.options.imagePlaceholder.split(/,/);Fe&&Fe[1]&&(et=Fe[1])}function yi(){if(Te.readyState===4){if(Te.status!==200){et?Ce(et):tt("cannot fetch resource: "+ae+", status: "+Te.status);return}var cr=new FileReader;cr.onloadend=function(){var ti=cr.result.split(/,/)[1];Ce(ti)},cr.readAsDataURL(Te.response)}}function Ui(){et?Ce(et):tt("timeout of "+ue+"ms occured while fetching resource: "+ae)}function tt(cr){console.error(cr),Ce("")}})}function k(ae,ue){return"data:"+ue+";base64,"+ae}function W(ae){return ae.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function de(ae){return function(ue){return new Promise(function(Ce){setTimeout(function(){Ce(ue)},ae)})}}function ie(ae){for(var ue=[],Ce=ae.length,Te=0;Te<Ce;Te++)ue.push(ae[Te]);return ue}function Pe(ae){return ae.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Be(ae){var ue=it(ae,"border-left-width"),Ce=it(ae,"border-right-width");return ae.scrollWidth+ue+Ce}function Qe(ae){var ue=it(ae,"border-top-width"),Ce=it(ae,"border-bottom-width");return ae.scrollHeight+ue+Ce}function it(ae,ue){var Ce=window.getComputedStyle(ae).getPropertyValue(ue);return parseFloat(Ce.replace("px",""))}}function q(){var C=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:j,shouldProcess:E,impl:{readUrls:R,inline:T}};function E(I){return I.search(C)!==-1}function R(I){for(var U=[],M;(M=C.exec(I))!==null;)U.push(M[1]);return U.filter(function(K){return!t.isDataUrl(K)})}function T(I,U,M,K){return Promise.resolve(U).then(function(k){return M?t.resolveUrl(k,M):k}).then(K||t.getAndEncode).then(function(k){return t.dataAsUrl(k,t.mimeType(U))}).then(function(k){return I.replace(he(U),"$1"+k+"$3")});function he(k){return new RegExp(`(url\\(['"]?)(`+t.escape(k)+`)(['"]?\\))`,"g")}}function j(I,U,M){if(K())return Promise.resolve(I);return Promise.resolve(I).then(R).then(function(he){var k=Promise.resolve(I);return he.forEach(function(W){k=k.then(function(de){return T(de,W,U,M)})}),k});function K(){return!E(I)}}}function B(){return{resolveAll:C,impl:{readAll:E}};function C(){return E().then(function(R){return Promise.all(R.map(function(T){return T.resolve()}))}).then(function(R){return R.join(`
`)})}function E(){return Promise.resolve(t.asArray(document.styleSheets)).then(T).then(R).then(function(I){return I.map(j)});function R(I){return I.filter(function(U){return U.type===CSSRule.FONT_FACE_RULE}).filter(function(U){return i.shouldProcess(U.style.getPropertyValue("src"))})}function T(I){var U=[];return I.forEach(function(M){try{t.asArray(M.cssRules||[]).forEach(U.push.bind(U))}catch(K){console.log("Error while reading CSS rules from "+M.href,K.toString())}}),U}function j(I){return{resolve:function(){var M=(I.parentStyleSheet||{}).href;return i.inlineAll(I.cssText,M)},src:function(){return I.style.getPropertyValue("src")}}}}}function se(){return{inlineAll:E,impl:{newImage:C}};function C(R){return{inline:T};function T(j){return t.isDataUrl(R.src)?Promise.resolve():Promise.resolve(R.src).then(j||t.getAndEncode).then(function(I){return t.dataAsUrl(I,t.mimeType(R.src))}).then(function(I){return new Promise(function(U,M){R.onload=U,R.onerror=M,R.src=I})})}}function E(R){if(!(R instanceof Element))return Promise.resolve(R);return T(R).then(function(){return R instanceof HTMLImageElement?C(R).inline():Promise.all(t.asArray(R.childNodes).map(function(j){return E(j)}))});function T(j){var I=j.style.getPropertyValue("background");return I?i.inlineAll(I).then(function(U){j.style.setProperty("background",U,j.style.getPropertyPriority("background"))}).then(function(){return j}):Promise.resolve(j)}}}})()})(jd);var bm=jd.exports;const wm=vm(bm);var rl={exports:{}};const xm={},Sm=Object.freeze(Object.defineProperty({__proto__:null,default:xm},Symbol.toStringTag,{value:"Module"})),ds=ym(Sm);/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 9.2.0
 * @date    2024-10-11
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
 */(function(r,e){(function(t,i){i(e)})(mm,function(t){var i={},s={exports:{}};(function(G){var ee=function(ve){return typeof ve<"u"&&ve.versions!=null&&ve.versions.node!=null&&ve+""=="[object process]"};G.exports.isNode=ee,G.exports.platform=typeof process<"u"&&ee(process)?"node":"browser";var Q=G.exports.platform==="node"&&ds;G.exports.isMainThread=G.exports.platform==="node"?(!Q||Q.isMainThread)&&!process.connected:typeof Window<"u",G.exports.cpus=G.exports.platform==="browser"?self.navigator.hardwareConcurrency:ds.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function G(ve,Ye){var N=this;if(!(this instanceof G))throw new SyntaxError("Constructor must be called with the new operator");if(typeof ve!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var at=[],Ve=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var $t=function(H,pe){at.push(H),Ve.push(pe)};this.then=function(J,H){return new G(function(pe,$e){var We=J?ee(J,pe,$e):pe,It=H?ee(H,pe,$e):$e;$t(We,It)},N)};var Lt=function(H){return N.resolved=!0,N.rejected=!1,N.pending=!1,at.forEach(function(pe){pe(H)}),$t=function($e,We){$e(H)},Lt=te=function(){},N},te=function(H){return N.resolved=!1,N.rejected=!0,N.pending=!1,Ve.forEach(function(pe){pe(H)}),$t=function($e,We){We(H)},Lt=te=function(){},N};this.cancel=function(){return Ye?Ye.cancel():te(new Q),N},this.timeout=function(J){if(Ye)Ye.timeout(J);else{var H=setTimeout(function(){te(new Le("Promise timed out after "+J+" ms"))},J);N.always(function(){clearTimeout(H)})}return N},ve(function(J){Lt(J)},function(J){te(J)})}function ee(ve,Ye,N){return function(at){try{var Ve=ve(at);Ve&&typeof Ve.then=="function"&&typeof Ve.catch=="function"?Ve.then(Ye,N):Ye(Ve)}catch($t){N($t)}}}G.prototype.catch=function(ve){return this.then(null,ve)},G.prototype.always=function(ve){return this.then(ve,ve)},G.prototype.finally=function(ve){var Ye=this,N=function(){return new G(function(Ve){return Ve()}).then(ve).then(function(){return Ye})};return this.then(N,N)},G.all=function(ve){return new G(function(Ye,N){var at=ve.length,Ve=[];at?ve.forEach(function($t,Lt){$t.then(function(te){Ve[Lt]=te,at--,at==0&&Ye(Ve)},function(te){at=0,N(te)})}):Ye(Ve)})},G.defer=function(){var ve={};return ve.promise=new G(function(Ye,N){ve.resolve=Ye,ve.reject=N}),ve};function Q(ve){this.message=ve||"promise cancelled",this.stack=new Error().stack}Q.prototype=new Error,Q.prototype.constructor=Error,Q.prototype.name="CancellationError",G.CancellationError=Q;function Le(ve){this.message=ve||"timeout exceeded",this.stack=new Error().stack}return Le.prototype=new Error,Le.prototype.constructor=Error,Le.prototype.name="TimeoutError",G.TimeoutError=Le,a.Promise=G,a}function h(G,ee){(ee==null||ee>G.length)&&(ee=G.length);for(var Q=0,Le=Array(ee);Q<ee;Q++)Le[Q]=G[Q];return Le}function u(G,ee){var Q=typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(!Q){if(Array.isArray(G)||(Q=V(G))||ee){Q&&(G=Q);var Le=0,ve=function(){};return{s:ve,n:function(){return Le>=G.length?{done:!0}:{done:!1,value:G[Le++]}},e:function(Ve){throw Ve},f:ve}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ye,N=!0,at=!1;return{s:function(){Q=Q.call(G)},n:function(){var Ve=Q.next();return N=Ve.done,Ve},e:function(Ve){at=!0,Ye=Ve},f:function(){try{N||Q.return==null||Q.return()}finally{if(at)throw Ye}}}}function d(G,ee,Q){return(ee=A(ee))in G?Object.defineProperty(G,ee,{value:Q,enumerable:!0,configurable:!0,writable:!0}):G[ee]=Q,G}function g(G,ee){var Q=Object.keys(G);if(Object.getOwnPropertySymbols){var Le=Object.getOwnPropertySymbols(G);ee&&(Le=Le.filter(function(ve){return Object.getOwnPropertyDescriptor(G,ve).enumerable})),Q.push.apply(Q,Le)}return Q}function b(G){for(var ee=1;ee<arguments.length;ee++){var Q=arguments[ee]!=null?arguments[ee]:{};ee%2?g(Object(Q),!0).forEach(function(Le){d(G,Le,Q[Le])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(Q)):g(Object(Q)).forEach(function(Le){Object.defineProperty(G,Le,Object.getOwnPropertyDescriptor(Q,Le))})}return G}function x(G,ee){if(typeof G!="object"||!G)return G;var Q=G[Symbol.toPrimitive];if(Q!==void 0){var Le=Q.call(G,ee||"default");if(typeof Le!="object")return Le;throw new TypeError("@@toPrimitive must return a primitive value.")}return(ee==="string"?String:Number)(G)}function A(G){var ee=x(G,"string");return typeof ee=="symbol"?ee:ee+""}function _(G){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},_(G)}function V(G,ee){if(G){if(typeof G=="string")return h(G,ee);var Q={}.toString.call(G).slice(8,-1);return Q==="Object"&&G.constructor&&(Q=G.constructor.name),Q==="Map"||Q==="Set"?Array.from(G):Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)?h(G,ee):void 0}}var L={exports:{}},D={},q;function B(){return q||(q=1,D.validateOptions=function(ee,Q,Le){if(ee){var ve=ee?Object.keys(ee):[],Ye=ve.find(function(at){return!Q.includes(at)});if(Ye)throw new Error('Object "'+Le+'" contains an unknown option "'+Ye+'"');var N=Q.find(function(at){return Object.prototype[at]&&!ve.includes(at)});if(N)throw new Error('Object "'+Le+'" contains an inherited option "'+N+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return ee}},D.workerOptsNames=["credentials","name","type"],D.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],D.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),D}var se,C;function E(){return C||(C=1,se=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return i.all([o,r]).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),se}var R;function T(){if(R)return L.exports;R=1;var G=l(),ee=G.Promise,Q=n,Le=B(),ve=Le.validateOptions,Ye=Le.forkOptsNames,N=Le.workerThreadOptsNames,at=Le.workerOptsNames,Ve="__workerpool-terminate__",$t="__workerpool-cleanup__";function Lt(){var ye=J();if(!ye)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return ye}function te(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":_(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function J(){try{return ds}catch(ye){if(_(ye)==="object"&&ye!==null&&ye.code==="MODULE_NOT_FOUND")return null;throw ye}}function H(){if(Q.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var ye=new Blob([E()],{type:"text/javascript"});return window.URL.createObjectURL(ye)}else return __dirname+"/worker.js"}function pe(ye,Ae){if(Ae.workerType==="web")return te(),$e(ye,Ae.workerOpts,Worker);if(Ae.workerType==="thread")return X=Lt(),We(ye,X,Ae);if(Ae.workerType==="process"||!Ae.workerType)return It(ye,Wt(Ae),ds);if(Q.platform==="browser")return te(),$e(ye,Ae.workerOpts,Worker);var X=J();return X?We(ye,X,Ae):It(ye,Wt(Ae),ds)}function $e(ye,Ae,X){ve(Ae,at,"workerOpts");var we=new X(ye,Ae);return we.isBrowserWorker=!0,we.on=function(Oe,Me){this.addEventListener(Oe,function(Ke){Me(Ke.data)})},we.send=function(Oe,Me){this.postMessage(Oe,Me)},we}function We(ye,Ae,X){var we,Oe;ve(X==null?void 0:X.workerThreadOpts,N,"workerThreadOpts");var Me=new Ae.Worker(ye,b({stdout:(we=X==null?void 0:X.emitStdStreams)!==null&&we!==void 0?we:!1,stderr:(Oe=X==null?void 0:X.emitStdStreams)!==null&&Oe!==void 0?Oe:!1},X==null?void 0:X.workerThreadOpts));return Me.isWorkerThread=!0,Me.send=function(Ke,Re){this.postMessage(Ke,Re)},Me.kill=function(){return this.terminate(),!0},Me.disconnect=function(){this.terminate()},X!=null&&X.emitStdStreams&&(Me.stdout.on("data",function(Ke){return Me.emit("stdout",Ke)}),Me.stderr.on("data",function(Ke){return Me.emit("stderr",Ke)})),Me}function It(ye,Ae,X){ve(Ae.forkOpts,Ye,"forkOpts");var we=X.fork(ye,Ae.forkArgs,Ae.forkOpts),Oe=we.send;return we.send=function(Me){return Oe.call(we,Me)},Ae.emitStdStreams&&(we.stdout.on("data",function(Me){return we.emit("stdout",Me)}),we.stderr.on("data",function(Me){return we.emit("stderr",Me)})),we.isChildProcess=!0,we}function Wt(ye){ye=ye||{};var Ae=process.execArgv.join(" "),X=Ae.indexOf("--inspect")!==-1,we=Ae.indexOf("--debug-brk")!==-1,Oe=[];return X&&(Oe.push("--inspect="+ye.debugPort),we&&Oe.push("--debug-brk")),process.execArgv.forEach(function(Me){Me.indexOf("--max-old-space-size")>-1&&Oe.push(Me)}),Object.assign({},ye,{forkArgs:ye.forkArgs,forkOpts:Object.assign({},ye.forkOpts,{execArgv:(ye.forkOpts&&ye.forkOpts.execArgv||[]).concat(Oe),stdio:ye.emitStdStreams?"pipe":void 0})})}function Jt(ye){for(var Ae=new Error(""),X=Object.keys(ye),we=0;we<X.length;we++)Ae[X[we]]=ye[X[we]];return Ae}function Qt(ye,Ae){if(Object.keys(ye.processing).length===1){var X=Object.values(ye.processing)[0];X.options&&typeof X.options.on=="function"&&X.options.on(Ae)}}function Fr(ye,Ae){var X=this,we=Ae||{};this.script=ye||H(),this.worker=pe(this.script,we),this.debugPort=we.debugPort,this.forkOpts=we.forkOpts,this.forkArgs=we.forkArgs,this.workerOpts=we.workerOpts,this.workerThreadOpts=we.workerThreadOpts,this.workerTerminateTimeout=we.workerTerminateTimeout,ye||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Re){Qt(X,{stdout:Re.toString()})}),this.worker.on("stderr",function(Re){Qt(X,{stderr:Re.toString()})}),this.worker.on("message",function(Re){if(!X.terminated)if(typeof Re=="string"&&Re==="ready")X.worker.ready=!0,Me();else{var zt=Re.id,gt=X.processing[zt];if(gt!==void 0&&(Re.isEvent?gt.options&&typeof gt.options.on=="function"&&gt.options.on(Re.payload):(delete X.processing[zt],X.terminating===!0&&X.terminate(),Re.error?gt.resolver.reject(Jt(Re.error)):gt.resolver.resolve(Re.result))),Re.method===$t){var Ht=X.tracking[Re.id];Ht!==void 0&&(Re.error?(clearTimeout(Ht.timeoutId),Ht.resolver.reject(Jt(Re.error))):(X.tracking&&clearTimeout(Ht.timeoutId),Ht.resolver.resolve(Ht.result))),delete X.tracking[zt]}}});function Oe(Re){X.terminated=!0;for(var zt in X.processing)X.processing[zt]!==void 0&&X.processing[zt].resolver.reject(Re);X.processing=Object.create(null)}function Me(){var Re=u(X.requestQueue.splice(0)),zt;try{for(Re.s();!(zt=Re.n()).done;){var gt=zt.value;X.worker.send(gt.message,gt.transfer)}}catch(Ht){Re.e(Ht)}finally{Re.f()}}var Ke=this.worker;this.worker.on("error",Oe),this.worker.on("exit",function(Re,zt){var gt=`Workerpool Worker terminated Unexpectedly
`;gt+="    exitCode: `"+Re+"`\n",gt+="    signalCode: `"+zt+"`\n",gt+="    workerpool.script: `"+X.script+"`\n",gt+="    spawnArgs: `"+Ke.spawnargs+"`\n",gt+="    spawnfile: `"+Ke.spawnfile+"`\n",gt+="    stdout: `"+Ke.stdout+"`\n",gt+="    stderr: `"+Ke.stderr+"`\n",Oe(new Error(gt))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return Fr.prototype.methods=function(){return this.exec("methods")},Fr.prototype.exec=function(ye,Ae,X,we){X||(X=ee.defer());var Oe=++this.lastId;this.processing[Oe]={id:Oe,resolver:X,options:we};var Me={message:{id:Oe,method:ye,params:Ae},transfer:we&&we.transfer};this.terminated?X.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Me.message,Me.transfer):this.requestQueue.push(Me);var Ke=this;return X.promise.catch(function(Re){if(Re instanceof ee.CancellationError||Re instanceof ee.TimeoutError)return Ke.tracking[Oe]={id:Oe,resolver:ee.defer()},delete Ke.processing[Oe],Ke.tracking[Oe].resolver.promise=Ke.tracking[Oe].resolver.promise.catch(function(zt){delete Ke.tracking[Oe];var gt=Ke.terminateAndNotify(!0).then(function(){throw zt},function(Ht){throw Ht});return gt}),Ke.worker.send({id:Oe,method:$t}),Ke.tracking[Oe].timeoutId=setTimeout(function(){Ke.tracking[Oe].resolver.reject(Re)},Ke.workerTerminateTimeout),Ke.tracking[Oe].resolver.promise;throw Re})},Fr.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},Fr.prototype.terminate=function(ye,Ae){var X=this;if(ye){for(var we in this.processing)this.processing[we]!==void 0&&this.processing[we].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var Oe=0,Me=Object.values(X.tracking);Oe<Me.length;Oe++){var Ke=Me[Oe];clearTimeout(Ke.timeoutId),Ke.resolver.reject(new Error("Worker Terminating"))}if(X.tracking=Object.create(null),typeof Ae=="function"&&(this.terminationHandler=Ae),this.busy())this.terminating=!0;else{var Re=function(Ht){if(X.terminated=!0,X.cleaning=!1,X.worker!=null&&X.worker.removeAllListeners&&X.worker.removeAllListeners("message"),X.worker=null,X.terminating=!1,X.terminationHandler)X.terminationHandler(Ht,X);else if(Ht)throw Ht};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Re(new Error("worker already killed!"));return}var zt=setTimeout(function(){X.worker&&X.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(zt),X.worker&&(X.worker.killed=!0),Re()}),this.worker.ready?this.worker.send(Ve):this.requestQueue.push({message:Ve}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Re()}},Fr.prototype.terminateAndNotify=function(ye,Ae){var X=ee.defer();return Ae&&X.promise.timeout(Ae),this.terminate(ye,function(we,Oe){we?X.reject(we):X.resolve(Oe)}),X.promise},L.exports=Fr,L.exports._tryRequireWorkerThreads=J,L.exports._setupProcessWorker=It,L.exports._setupBrowserWorker=$e,L.exports._setupWorkerThreadWorker=We,L.exports.ensureWorkerThreads=Lt,L.exports}var j,I;function U(){if(I)return j;I=1;var G=65535;j=ee;function ee(){this.ports=Object.create(null),this.length=0}return ee.prototype.nextAvailableStartingAt=function(Q){for(;this.ports[Q]===!0;)Q++;if(Q>=G)throw new Error("WorkerPool debug port limit reached: "+Q+">= "+G);return this.ports[Q]=!0,this.length++,Q},ee.prototype.releasePort=function(Q){delete this.ports[Q],this.length--},j}var M,K;function he(){if(K)return M;K=1;var G=l(),ee=G.Promise,Q=T(),Le=n,ve=U(),Ye=new ve;function N(te,J){typeof te=="string"?this.script=te||null:(this.script=null,J=te),this.workers=[],this.tasks=[],J=J||{},this.forkArgs=Object.freeze(J.forkArgs||[]),this.forkOpts=Object.freeze(J.forkOpts||{}),this.workerOpts=Object.freeze(J.workerOpts||{}),this.workerThreadOpts=Object.freeze(J.workerThreadOpts||{}),this.debugPortStart=J.debugPortStart||43210,this.nodeWorker=J.nodeWorker,this.workerType=J.workerType||J.nodeWorker||"auto",this.maxQueueSize=J.maxQueueSize||1/0,this.workerTerminateTimeout=J.workerTerminateTimeout||1e3,this.onCreateWorker=J.onCreateWorker||function(){return null},this.onTerminateWorker=J.onTerminateWorker||function(){return null},this.emitStdStreams=J.emitStdStreams||!1,J&&"maxWorkers"in J?(at(J.maxWorkers),this.maxWorkers=J.maxWorkers):this.maxWorkers=Math.max((Le.cpus||4)-1,1),J&&"minWorkers"in J&&(J.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ve(J.minWorkers),this.minWorkers=J.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&Q.ensureWorkerThreads()}N.prototype.exec=function(te,J,H){if(J&&!Array.isArray(J))throw new TypeError('Array expected as argument "params"');if(typeof te=="string"){var pe=ee.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var $e=this.tasks,We={method:te,params:J,resolver:pe,timeout:null,options:H};$e.push(We);var It=pe.promise.timeout;return pe.promise.timeout=function(Jt){return $e.indexOf(We)!==-1?(We.timeout=Jt,pe.promise):It.call(pe.promise,Jt)},this._next(),pe.promise}else{if(typeof te=="function")return this.exec("run",[String(te),J],H);throw new TypeError('Function or string expected as argument "method"')}},N.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var te=this;return this.exec("methods").then(function(J){var H={};return J.forEach(function(pe){H[pe]=function(){return te.exec(pe,Array.prototype.slice.call(arguments))}}),H})},N.prototype._next=function(){if(this.tasks.length>0){var te=this._getWorker();if(te){var J=this,H=this.tasks.shift();if(H.resolver.promise.pending){var pe=te.exec(H.method,H.params,H.resolver,H.options).then(J._boundNext).catch(function(){if(te.terminated)return J._removeWorker(te)}).then(function(){J._next()});typeof H.timeout=="number"&&pe.timeout(H.timeout)}else J._next()}}},N.prototype._getWorker=function(){for(var te=this.workers,J=0;J<te.length;J++){var H=te[J];if(H.busy()===!1)return H}return te.length<this.maxWorkers?(H=this._createWorkerHandler(),te.push(H),H):null},N.prototype._removeWorker=function(te){var J=this;return Ye.releasePort(te.debugPort),this._removeWorkerFromList(te),this._ensureMinWorkers(),new ee(function(H,pe){te.terminate(!1,function($e){J.onTerminateWorker({forkArgs:te.forkArgs,forkOpts:te.forkOpts,workerThreadOpts:te.workerThreadOpts,script:te.script}),$e?pe($e):H(te)})})},N.prototype._removeWorkerFromList=function(te){var J=this.workers.indexOf(te);J!==-1&&this.workers.splice(J,1)},N.prototype.terminate=function(te,J){var H=this;this.tasks.forEach(function(Wt){Wt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var pe=function(Jt){Ye.releasePort(Jt.debugPort),this._removeWorkerFromList(Jt)},$e=pe.bind(this),We=[],It=this.workers.slice();return It.forEach(function(Wt){var Jt=Wt.terminateAndNotify(te,J).then($e).always(function(){H.onTerminateWorker({forkArgs:Wt.forkArgs,forkOpts:Wt.forkOpts,workerThreadOpts:Wt.workerThreadOpts,script:Wt.script})});We.push(Jt)}),ee.all(We)},N.prototype.stats=function(){var te=this.workers.length,J=this.workers.filter(function(H){return H.busy()}).length;return{totalWorkers:te,busyWorkers:J,idleWorkers:te-J,pendingTasks:this.tasks.length,activeTasks:J}},N.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var te=this.workers.length;te<this.minWorkers;te++)this.workers.push(this._createWorkerHandler())},N.prototype._createWorkerHandler=function(){var te=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new Q(te.script||this.script,{forkArgs:te.forkArgs||this.forkArgs,forkOpts:te.forkOpts||this.forkOpts,workerOpts:te.workerOpts||this.workerOpts,workerThreadOpts:te.workerThreadOpts||this.workerThreadOpts,debugPort:Ye.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function at(te){if(!$t(te)||!Lt(te)||te<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ve(te){if(!$t(te)||!Lt(te)||te<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function $t(te){return typeof te=="number"}function Lt(te){return Math.round(te)==te}return M=N,M}var k={},W,de;function ie(){if(de)return W;de=1;function G(ee,Q){this.message=ee,this.transfer=Q}return W=G,W}var Pe;function Be(){return Pe||(Pe=1,function(G){var ee=ie(),Q=l().Promise,Le="__workerpool-terminate__",ve="__workerpool-cleanup__",Ye=1e3,N={exit:function(){}},at={addAbortListener:function(pe){N.abortListeners.push(pe)},emit:N.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")N.on=function(H,pe){addEventListener(H,function($e){pe($e.data)})},N.send=function(H,pe){pe?postMessage(H,pe):postMessage(H)};else if(typeof process<"u"){var Ve;try{Ve=ds}catch(H){if(!(_(H)==="object"&&H!==null&&H.code==="MODULE_NOT_FOUND"))throw H}if(Ve&&Ve.parentPort!==null){var $t=Ve.parentPort;N.send=$t.postMessage.bind($t),N.on=$t.on.bind($t),N.exit=process.exit.bind(process)}else N.on=process.on.bind(process),N.send=function(H){process.send(H)},N.on("disconnect",function(){process.exit(1)}),N.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Lt(H){return Object.getOwnPropertyNames(H).reduce(function(pe,$e){return Object.defineProperty(pe,$e,{value:H[$e],enumerable:!0})},{})}function te(H){return H&&typeof H.then=="function"&&typeof H.catch=="function"}N.methods={},N.methods.run=function(pe,$e){var We=new Function("return ("+pe+").apply(this, arguments);");return We.worker=at,We.apply(We,$e)},N.methods.methods=function(){return Object.keys(N.methods)},N.terminationHandler=void 0,N.abortListenerTimeout=Ye,N.abortListeners=[],N.terminateAndExit=function(H){var pe=function(){N.exit(H)};if(!N.terminationHandler)return pe();var $e=N.terminationHandler(H);return te($e)?($e.then(pe,pe),$e):(pe(),new Q(function(We,It){It(new Error("Worker terminating"))}))},N.cleanup=function(H){if(!N.abortListeners.length)return N.send({id:H,method:ve,error:Lt(new Error("Worker terminating"))}),new Q(function(Qt){Qt()});var pe=function(){N.exit()},$e=function(){N.abortListeners.length||(N.abortListeners=[])},We=N.abortListeners.map(function(Qt){return Qt()}),It,Wt=new Q(function(Qt,Fr){It=setTimeout(function(){Fr(new Error("Timeout occured waiting for abort handler, killing worker"))},N.abortListenerTimeout)}),Jt=Q.all(We).then(function(){clearTimeout(It),$e()},function(){clearTimeout(It),pe()});return Q.all([Jt,Wt]).then(function(){N.send({id:H,method:ve,error:null})},function(Qt){N.send({id:H,method:ve,error:Qt?Lt(Qt):null})})};var J=null;N.on("message",function(H){if(H===Le)return N.terminateAndExit(0);if(H.method===ve)return N.cleanup(H.id);try{var pe=N.methods[H.method];if(pe){J=H.id;var $e=pe.apply(pe,H.params);te($e)?$e.then(function(We){We instanceof ee?N.send({id:H.id,result:We.message,error:null},We.transfer):N.send({id:H.id,result:We,error:null}),J=null}).catch(function(We){N.send({id:H.id,result:null,error:Lt(We)}),J=null}):($e instanceof ee?N.send({id:H.id,result:$e.message,error:null},$e.transfer):N.send({id:H.id,result:$e,error:null}),J=null)}else throw new Error('Unknown method "'+H.method+'"')}catch(We){N.send({id:H.id,result:null,error:Lt(We)})}}),N.register=function(H,pe){if(H)for(var $e in H)H.hasOwnProperty($e)&&(N.methods[$e]=H[$e],N.methods[$e].worker=at);pe&&(N.terminationHandler=pe.onTerminate,N.abortListenerTimeout=pe.abortListenerTimeout||Ye),N.send("ready")},N.emit=function(H){if(J){if(H instanceof ee){N.send({id:J,isEvent:!0,payload:H.message},H.transfer);return}N.send({id:J,isEvent:!0,payload:H})}},G.add=N.register,G.emit=N.emit}(k)),k}var Qe=n.platform,it=n.isMainThread,ae=n.cpus;function ue(G,ee){var Q=he();return new Q(G,ee)}var Ce=i.pool=ue;function Te(G,ee){var Q=Be();Q.add(G,ee)}var et=i.worker=Te;function Fe(G){var ee=Be();ee.emit(G)}var yi=i.workerEmit=Fe,Ui=l(),tt=Ui.Promise,cr=i.Promise=tt,ti=i.Transfer=ie(),co=i.platform=Qe,uo=i.isMainThread=it,po=i.cpus=ae;t.Promise=cr,t.Transfer=ti,t.cpus=po,t.default=i,t.isMainThread=uo,t.platform=co,t.pool=Ce,t.worker=et,t.workerEmit=yi,Object.defineProperty(t,"__esModule",{value:!0})})})(rl,rl.exports);var $m=rl.exports,km=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},Cm=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],_m=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Pm=km(),Hr={iron:{pixels:_m,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:Cm,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Pm,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Zo,Am=(Zo=class{},c(Zo,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),Zo),xt,Dt=(xt=class extends Am{static humanRangeDates(e,t){return e=xt.inputToDate(e),t=xt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?xt.humanDate(e):[xt.humanDate(e),xt.humanDate(t)].join(" - ")}static human(e){return`${xt.humanDate(e)} ${xt.humanTime(e,!0)} `}},c(xt,"isoDate",e=>(e=xt.inputToDate(e),Bo(e,{representation:"date"}))),c(xt,"isoTime",e=>(e=xt.inputToDate(e),Bo(e,{representation:"time"}))),c(xt,"isoComplete",e=>(e=xt.inputToDate(e),Bo(e))),c(xt,"humanTime",(e,t=!1)=>(e=xt.inputToDate(e),ht(e,t?"HH:mm:ss":"HH:mm"))),c(xt,"humanDate",(e,t=!1)=>(e=xt.inputToDate(e),ht(e,t?"d. M.":"d. M. yyyy"))),xt),re=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},za=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new re);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},St=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},vt=class{constructor(r,e,t){c(this,"onSerializableChange",new re);c(this,"_selected",!1);c(this,"onSelected",new re);c(this,"onDeselected",new re);c(this,"onValues",new re);c(this,"onMoveOrResize",new re);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new re);c(this,"_initialColor");c(this,"onSetInitialColor",new re);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new re);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Nd=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new re);c(this,"pxY");c(this,"_y");c(this,"onY",new re);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new re);c(this,"onMouseLeave",new re);c(this,"onActivate",new re);c(this,"onDeactivate",new re);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},ir,Lm=(ir=class extends Nd{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(ir.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=ir.sizePx(-.5),t.style.left=ir.sizePx(-.5),t.style.width=ir.sizePx(),t.style.height=ir.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=ir.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=ir.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${ir.sizePx(.5)} - 3px )`,t.style.left=`calc( ${ir.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(ir,"size",20),ir),dr=class Wd extends vt{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Lm("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Hd(this)),this._graph}static addAtPoint(t,i,s,n,a){return new Wd(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=vt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=vt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=vt.serializedGetNumericalValueByKey(i,"top"),h=vt.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Hd=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new re);c(this,"onGraphData",new re);c(this,"onAnalysisSelection",new re);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof dr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof dr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof dr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof dr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},Om=class extends Nd{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Em=class extends Om{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},sr=class extends vt{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Hd(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Em(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(b=>b.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=vt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=vt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=vt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=vt.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=vt.serializedGetNumericalValueByKey(t,"top"),u=vt.serializedGetNumericalValueByKey(t,"left"),d=vt.serializedGetNumericalValueByKey(t,"width"),g=vt.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),d!==void 0&&d!==this.width&&(this.setWidth(d),i=!0),g!==void 0&&g!==this.height&&(this.setHeight(g),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},Bd=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},kc=class extends Bd{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},Cc=class la extends sr{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new la(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=la.calculateDimensionsFromCorners(s,n,a,o),g=new la(e,t,i,l,h,u,d);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new kc(this,e,t,e+i,t+s):new kc(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++)if(this.isWithin(d,h)){const g=this.file.pixels[u+d];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},_c=class extends Bd{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},Pc=class ha extends sr{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new ha(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=ha.calculateDimensionsFromCorners(s,n,a,o),g=new ha(e,t,i,l,h,u,d);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new _c(this,e,t,e+i,t+s):new _c(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++){const g=this.file.pixels[u+d];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},ca=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Dm=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new re);c(this,"onRemove",new re);c(this,"onSelectionChange",new re);c(this,"colors",ca);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=Pc.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=Pc.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=Cc.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=Cc.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=dr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=dr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=ca.filter(i=>!e.includes(i));return t.length>0?t[0]:ca[0]}getNextName(e){return`${e} ${this.all.length}`}},Mm=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Rm=class extends St{constructor(){super(...arguments);c(this,"layers",new Dm(this));c(this,"points",new Mm(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Tm=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new re);c(this,"onAddGraph",new re);c(this,"onRemoveGraph",new re);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:ht(a,"m:ss:SSS")+" ",[e[1].key]:ht(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Im=class extends St{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new re);c(this,"listeners",new Tm(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=Sn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Ud(i)(e);Fd(i)(s)}},zm=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new re);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},ms,Vd=(ms=class extends St{constructor(){super(...arguments);c(this,"onSlotInit",new re);c(this,"onSlotRemove",new re);c(this,"onSlot1Assignement",new re);c(this,"onSlot2Assignement",new re);c(this,"onSlot3Assignement",new re);c(this,"onSlot4Assignement",new re);c(this,"onSlot5Assignement",new re);c(this,"onSlot6Assignement",new re);c(this,"onSlot7Assignement",new re);c(this,"onSlot1Serialize",new re);c(this,"onSlot2Serialize",new re);c(this,"onSlot3Serialize",new re);c(this,"onSlot4Serialize",new re);c(this,"onSlot5Serialize",new re);c(this,"onSlot6Serialize",new re);c(this,"onSlot7Serialize",new re)}getNextFreeSlotNumber(){for(let t=1;t<=ms.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new zm(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(_=>_.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=vt.serializedGetNumericalValueByKey(s,"top"),l=vt.serializedGetNumericalValueByKey(s,"left");const h=vt.serializedGetStringValueByKey(s,"color");let u=vt.serializedGetNumericalValueByKey(s,"width"),d=vt.serializedGetNumericalValueByKey(s,"height");const g=vt.serializedSegmentsHasExact(s,"avg"),b=vt.serializedSegmentsHasExact(s,"min"),x=vt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let A;if(a==="point"){if(o===void 0||l===void 0)return;A=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||d===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),d<0&&(d=0),d+o>this.parent.height-1&&(d=this.parent.height-o-1),A=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,d+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,d+o,h,!1)}if(A!==void 0){if(A instanceof dr?g&&A.graph.setAvgActivation(!0):A instanceof sr&&(g&&A.graph.setAvgActivation(!0),b&&A.graph.setMinActivation(!0),x&&A.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const _=this.getNextFreeSlotNumber();_!==void 0&&this.assignSlot(_,A)}else i!==void 0&&this.assignSlot(i,A);return A}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(ms,"MAX_SLOTS",7),ms),Um=class extends St{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Fm=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",3);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t||e===t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Gd={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},jm=class extends St{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"onFrame",new re);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new re);c(this,"callbacksPlay",new re);c(this,"callbacksPause",new re);c(this,"callbacksStop",new re);c(this,"callbacksEnd",new re);c(this,"callbacksChangeFrame",new re);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Fm(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Gd[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.onFrame.call(this._currentStep),this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),ht(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);this.setRelativeTime(e.relative)}findPreviousOrThis(e){return this.stepsByRelative.has(e)?this.stepsByRelative.get(e):this.findPreviousRelative(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e);let i=Math.max(Math.ceil(t*this.steps.length)+5,this.steps.length),s;for(;i>=0&&s===void 0;){const a=this.stepsByIndex.get(i);a!==void 0&&a.relative<e&&(s=a),i=i-1}return s!==void 0?s:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousOrThis(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Nm=class extends St{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new re)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},Ua=class{},Pt,Wm=(Pt=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Pt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Pt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Pt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Pt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Pt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Pt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Pt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Pt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Pt,"CLASS_BASE","thermalImageRoot"),c(Pt,"CLASS_BUILT",Pt.CLASS_BASE+"__built"),c(Pt,"CLASS_HYDRATED",Pt.CLASS_BASE+"__mounted"),c(Pt,"CLASS_HOVER",Pt.CLASS_BASE+"__hover"),Pt),Hm=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new re),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Bm=class extends Ua{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Hm(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new Wm(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},Fa=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Nr=class il{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=il.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=il.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Vm=class extends Fa{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Nr.createVisibleLayer(),this._url&&(this.image=Nr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Gm=class extends Fa{constructor(e){super(e);c(this,"renderCount",0);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Nr.createCanvasContainer(),this.canvas=Nr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){this.renderCount+=1,console.log("Rendering",this.instance.fileName,this.renderCount);const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof dr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const g=new OffscreenCanvas(a,o).getContext("2d"),b=n-s,x=u.map(L=>({id:L[1],type:L[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let L=0;L<a;L++)for(let D=0;D<o;D++){const q=L+D*a,B=l[q];let se=B;se<s&&(se=s),se>n&&(se=n);const E=(se-s)/b,R=Math.round(255*E),T=h[R];g.fillStyle=T,g.fillRect(L,D,1,1);const j=(I,U,M,K,he,k)=>{const W=M+he/2,de=K+k/2,ie=(I-W)/(he/2),Pe=(U-de)/(k/2);return ie*ie+Pe*Pe<=1};u.forEach((I,U)=>{const M=x[U],[K,he,k,W,de,ie]=I;K==="point"?L===W&&D===k&&(M.avg.value=B):K==="rectangle"?L>=W&&L<W+de&&D>=k&&D<k+ie&&(B<M.min.value&&(M.min.value=B),B>M.max.value&&(M.max.value=B),M.avg.count=M.avg.count+1,M.avg.sum=M.avg.sum+B):K==="ellipsis"&&j(L,D,W,k,a,o)&&(B<M.min.value&&(M.min.value=B),B>M.max.value&&(M.max.value=B),M.avg.count=M.avg.count+1,M.avg.sum=M.avg.sum+B)})}const A=x.map(L=>({id:L.id,min:L.min.value!==1/0?L.min.value:void 0,max:L.max.value!==-1/0?L.max.value:void 0,avg:L.type==="point"?L.avg.value:L.avg.sum/L.avg.count})),_=g.getImageData(0,0,a,o);return{image:await createImageBitmap(_),stats:A}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Ym=class extends Fa{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Nr.createCursorLayerRoot(),this.center=Nr.createCursorLayerCenter(),this.axisX=Nr.createCursorLayerX(),this.axisY=Nr.createCursorLayerY(),this.label=Nr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},qm=class extends Fa{constructor(e){super(e);c(this,"container");this.container=Nr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Ct,Yd=(Ct=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new re)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=Ct.FONT_SIZE_NORMAL,s="normal",n=Ct.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=Ct.FONT_SIZE_NORMAL,i.style.fontFamily=Ct.FONT_FAMILY,i.style.color=Ct.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){wm.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,d=60,b=u/(d+40),x=document.createElement("div");x.style.width="100%",x.style.position="relative",x.style.paddingLeft=d/2+"px",x.style.paddingRight=d/2+"px",x.style.boxSizing="border-box";const A=document.createElement("div");A.style.width="100%",A.style.position="relative",A.style.backgroundColor=o,A.style.height="30px";const _=i-t,V=s-t,L=n-t,D=V/_*100,q=L/_*100,B=document.createElement("div");B.style.position="absolute",B.style.backgroundImage=a,B.style.height="100%",B.style.top="0px",B.style.left=D+"%",B.style.width=q-D+"%",A.appendChild(B),x.appendChild(A);const se=document.createElement("div");se.style.width="100%",se.style.height="40px",se.style.position="relative";const C=(T,j=!1,I,U)=>{const M=T/_*100,K=document.createElement("div");K.style.position="absolute",K.style.top="0px",K.style.left=`calc( ${M}% - ${d/2}px )`,K.style.width=d+"px",K.style.textAlign="center",K.style.lineHeight="0px";const he=document.createElement("div"),k=document.createElement("div"),W=document.createElement("div"),de=7,ie=de+"px";he.innerHTML=(t+T).toFixed(2)+" °C",he.style.display="inline-block",he.style.fontSize=Ct.FONT_SIZE_SMALL,he.style.lineHeight="1em",he.style.padding="3px",he.style.position="relative",k.style.width="100%",k.style.height=ie,k.style.textAlign="center",k.style.position="relative",k.style.lineHeight="0px",W.style.content="",W.style.display="inline-block",j?(W.style.width=de*2+"px",W.style.height=de*2+"px",W.style.rotate="45deg",W.style.backgroundColor=U,he.style.backgroundColor=U,he.style.zIndex="99",he.style.color=I):(W.style.width="1px",W.style.height=ie,W.style.backgroundColor=I),k.appendChild(W),K.appendChild(k),K.appendChild(he),se.appendChild(K)};if(h){const T=document.createElement("div");T.style.position="absolute",T.style.border=`2px solid ${l}`,T.style.height="100%",T.style.boxSizing="border-box";const j=(h.from-t)/_*100,I=(h.to-t)/_*100-j;T.style.left=j+"%",T.style.width=I+"%",A.appendChild(T),C(h.from-t,!0,"white",o),C(h.to-t,!0,"white",o)}const E=_/b;let R=0;for(;R<=_;)C(R,!1,l,"transparent"),R=R+E;return C(V,!0,"white",l),C(L,!0,"white",l),x.appendChild(se),x}},c(Ct,"FONT_SIZE_NORMAL","16px"),c(Ct,"FONT_SIZE_SMALL","12px"),c(Ct,"COLOR_BASE","black"),c(Ct,"COLOR_GRAY","gray"),c(Ct,"COLOR_LIGHT","lightgray"),c(Ct,"WIDTH","1600px"),c(Ct,"FONT_FAMILY","sans-serif"),c(Ct,"GAP_BASE","10px"),c(Ct,"GAP_SMALL","5px"),c(Ct,"DEBUG",!1),Ct),xr,Xm=(xr=class extends Yd{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...xr.DEFAULT_PARAMS,...t,fileName:i}}async onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i),o=`${t.fontSize}px`;s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),this.localInstance=await this.file.reader.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){this.container.style.lineHeight=`${t.fontSize*1.5}px`;const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max;if(t.showFileInfo){const d=document.createElement("div");d.style.paddingBottom=`${t.fontSize/3}px`,d.appendChild(this.createElementWithText("div",this.file.fileName,o,"bold",t.textColor)),this.container.appendChild(d)}if(t.showThermalScale){const d=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",d))}if(this.localInstance.mountToDom(this.container),this.localInstance.dom&&this.localInstance.dom.visibleLayer&&(this.localInstance.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const d=document.createElement("table");d.style.width="100%",d.style.borderCollapse="collapse",d.style.marginTop=`${t.fontSize/3}px`;const g=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(b=>{const x=this.createElementWithText("th",b,o,void 0,xr.COLOR_GRAY);x.style.textAlign="left",x.style.borderBottom=`1px solid ${xr.COLOR_LIGHT}`,x.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,g.appendChild(x)}),d.appendChild(g),this.container.appendChild(d),this.file.slots.forEveryExistingSlot((b,x)=>{var _;const A=(_=this.localInstance)==null?void 0:_.slots.createFromSerialized(b.serialized,x);if(A){const V=document.createElement("tr"),L=this.createElementWithText("td",b.analysis.name,o,void 0,b.analysis.initialColor);L.style.borderBottom=`1px solid ${xr.COLOR_LIGHT}`,L.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,V.appendChild(L);const D=(q,B)=>{const se=this.createElementWithText("td",B?B.toFixed(3)+" °C":"",o,void 0);se.style.borderBottom=`1px solid ${xr.COLOR_LIGHT}`,se.style.paddingTop=`${t.fontSize/3}px`,se.style.paddingBottom=`${t.fontSize/3}px`,V.appendChild(se)};b.analysis instanceof sr?(D(b.analysis.initialColor,A.avg),D(b.analysis.initialColor,A.min),D(b.analysis.initialColor,A.max)):b.analysis instanceof dr&&(D(b.analysis.initialColor,A.avg),D(b.analysis.initialColor),D(b.analysis.initialColor)),d.appendChild(V)}})}if(t.author||t.license){const d=document.createElement("div");d.style.lineHeight="1.5em",d.style.color=xr.COLOR_GRAY,d.style.paddingTop=`${t.fontSize/3}px`,t.author&&d.appendChild(this.createElementWithText("span",t.author,o)),t.author&&t.license&&d.appendChild(this.createElementWithText("span"," - ",o)),t.license&&d.appendChild(this.createElementWithText("span",t.license,o)),this.container.appendChild(d)}if(t.showSource){const d=document.createElement("div");d.style.lineHeight="1.5em",d.style.paddingTop=`${t.fontSize/3}px`;const g=Dt.human(new Date),b=window.location.href;d.appendChild(this.createElementWithText("span",`${g} - ${b}`,o,void 0,xr.COLOR_GRAY)),this.container.appendChild(d)}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},0)}}},c(xr,"DEFAULT_PARAMS",{fileName:"sth",width:1200,fontSize:20,textColor:"black",backgroundColor:"white",showAnalysis:!0,showFileInfo:!1,showThermalScale:!0,showSource:!1}),xr),$n=class qd extends Bm{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new za(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Xm(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Gm(this),visibleLayer:new Vm(this,this.visibleUrl),cursorLayer:new Ym(this),listenerLayer:new qm(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Um(this,void 0),this.timeline=new jm(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Nm(this,!1),this.analysis=new Rm(this,[]),this.analysisData=new Im(this),this.slots=new Vd(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new qd(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Km=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof sr&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof sr&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof sr&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof sr?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:Dt.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof sr){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=Sn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=Ud(s)(i);Fd(s)(n)}},Je,Zm=(Je=class extends Yd{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=Je.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,Je.FONT_SIZE_SMALL,"normal",Je.COLOR_BASE);l.style.paddingTop=Je.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,Je.FONT_SIZE_SMALL,void 0,Je.COLOR_GRAY);s.style.paddingTop=Je.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${Dt.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,Je.FONT_SIZE_SMALL,void 0,Je.COLOR_GRAY);return n.style.paddingTop=Je.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=Je.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${Dt.human(t.timeline.currentStep.absolute)}`,Je.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(d=>{const g=this.createElementWithText("th",d,Je.FONT_SIZE_SMALL,void 0,Je.COLOR_GRAY);g.style.padding=Je.GAP_SMALL+"px",g.style.textAlign="left",u.appendChild(g)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((d,g)=>{const b=t.slots.createFromSerialized(d.serialized,g);if(b){const x=document.createElement("tr"),A=this.createElementWithText("td",d.analysis.name,Je.FONT_SIZE_SMALL,void 0,d.analysis.initialColor);A.style.borderTop=`1px solid ${Je.COLOR_LIGHT}`,A.style.padding=`${Je.GAP_SMALL}px 0px ${Je.GAP_SMALL} 0px`,x.appendChild(A);const _=(V,L)=>{const D=this.createElementWithText("td",L?L.toFixed(3)+" °C":"",Je.FONT_SIZE_SMALL,void 0);D.style.borderTop=`1px solid ${Je.COLOR_LIGHT}`,D.style.paddingTop=`${Je.GAP_SMALL}px`,D.style.paddingBottom=`${Je.GAP_SMALL}px`,x.appendChild(D)};d.analysis instanceof sr?(_(d.analysis.initialColor,b.avg),_(d.analysis.initialColor,b.min),_(d.analysis.initialColor,b.max)):d.analysis instanceof dr&&(_(d.analysis.initialColor,b.avg),_(d.analysis.initialColor),_(d.analysis.initialColor)),h.appendChild(x)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const d=100/t.columns;u.forEach(g=>{g instanceof $n&&this.buildInstance(g,d,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Je.DEFAULT_PROPS,fileName:i}:{...Je.DEFAULT_PROPS,...t,fileName:i}}},c(Je,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),Je),$i,Jm=($i=class extends St{constructor(){super(...arguments);c(this,"onSlotSync",new re);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}get currentPointer(){return this._currentPointer}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){const s=t.slots.getSlot(i);if(i===1)return{slot:s,serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:s,serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:s,serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:s,serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:s,serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:s,serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:s,serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set($i.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete($i.LISTENER_KEY),n.delete($i.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(s!==this.currentPointer)if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,d=h.serialized;if(u!==d)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(d);else{const g=n.slots.createFromSerialized(d,l);g==null||g.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Km(this)),this._csv}get png(){return this._png||(this._png=new Zm(this)),this._png}},c($i,"LISTENER_KEY","__analysis__sync"),$i),Qm=class extends St{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},ev=class extends St{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e.sort((t,i)=>t.timestamp-i.timestamp)}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof $n?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},Xd=class extends St{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},tv=class extends Xd{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},rv=class extends St{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new re);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new re);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new re);c(this,"_duration",0);c(this,"onDurationChanged",new re);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof $n);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},Gi,iv=(Gi=class extends St{constructor(t){super(t,void 0);c(this,"timeout")}calculateData(){let t=[],i=[];const s=[],n=this.parent.files.value.sort((o,l)=>o.timestamp-l.timestamp);i=n[0].analysisData.value.values[0],t=n[0].analysisData.value.colors,this.parent.files.forEveryInstance(o=>{const l=[new Date(o.timestamp)];o.analysis.value.forEach(async h=>{h.graph.state.MIN===!0&&h.min&&l.push(h.min),h.graph.state.MAX===!0&&h.max&&l.push(h.max),h.graph.state.AVG===!0&&h.avg&&l.push(h.avg)}),l.length>1&&s.push(l)}),t.length>0?this.value={colors:t,data:[i,...s]}:this.value=void 0,console.log("Přepočítal jsem data",this.value)}turnOn(){this.parent.files.forEveryInstance(t=>{t.analysisData.addListener(Gi.LISTENER_ID,()=>{this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.calculateData()},0)})})}turnOff(){this.parent.files.forEveryInstance(t=>{t.analysisData.removeListener(Gi.LISTENER_ID)})}_wtf(){this.parent.files.forEveryInstance(t=>{t.analysis.layers.forEach(i=>{i.graph.setAvgActivation(!0)})})}validate(t){return t}afterSetEffect(){}},c(Gi,"LISTENER_ID","AnalysisGroupGraph"),Gi),sv=class extends Ua{constructor(t,i,s,n){super();c(this,"hash",Math.random());c(this,"minmax",new tv(this,void 0));c(this,"files",new ev(this,[]));c(this,"cursorPosition",new Qm(this,void 0));c(this,"analysisSync",new Jm(this,!1));c(this,"analysisGraph",new iv(this));c(this,"_playback");c(this,"forEveryInstance",t=>{this.files.value.forEach(i=>t(i))});c(this,"filters",new za(this));this.registry=t,this.id=i,this.name=s,this.description=n}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new rv(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(t){return this.registry.batch.getBatchById(t)}},Kd=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Ki=class Zd extends Kd{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Zd(e.url,e.code,e.message)}},Jd=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},_i=class extends Kd{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=$n.fromService(t,i,s,n);return t.files.addFile(a),a}},nv=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(R,T)=>{const j=R.getBigInt64(T,!0),I=62135596800000n,U=10000n,M=24n*60n*60n*1000n*U,K=0x4000000000000000n,he=0x8000000000000000n;let W=j&0x3fffffffffffffffn;j&he&&(W>K-M&&(W-=K),W<0&&(W+=M));const ie=W/U-I;return Number(ie)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,d=r.slice(25),g=d.byteLength/u,b=R=>{const T=R*u,j=T+u,I=d.slice(T,j),U=new DataView(I),M=U.getFloat32(8,!0),K=U.getFloat32(12,!0),he=n(U,0),k=U.getFloat32(24,!0),W=U.getFloat32(28,!0);return{timestamp:he,min:M,max:K,emissivity:k,reflectedKelvins:W}},x=[];for(let R=0;R<g;R++){const T=b(R);x.push(T)}const A={emissivity:0,reflectedKelvins:0};let _=1/0,V=-1/0;const L=[];x.forEach(R=>{A.emissivity=A.emissivity+R.emissivity,A.reflectedKelvins=A.reflectedKelvins+R.reflectedKelvins,R.min<_&&(_=R.min),R.max>V&&(V=R.max),L.push(R.timestamp)});const D=L[0],q=[];L.forEach((R,T)=>{const j=L[T+1];let I=0;j===void 0&&(I=0),I=j-R;const U=R-D;q.push({absolute:R,relative:U,offset:isNaN(I)?0:I,index:T})});const B=x[x.length-1].timestamp-x[0].timestamp,se=B/g,C=1e3/se,E=x[0].timestamp;return{width:t,height:i,timestamp:E,bytesize:s,frameCount:g,duration:B,frameInterval:se,fps:C,timeline:q,min:_,max:V,averageEmissivity:A.emissivity/x.length,averageReflectedKelvins:A.reflectedKelvins/x.length}},av=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),d=e*h,g=d+h;return{array:u.slice(d,g),dataType:i}},ov=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const g=u/n-s,b=Number(g),x=t.getFloat32(8,!0),A=t.getFloat32(12,!0),_=t.getFloat32(24,!0),V=t.getFloat32(28,!0),L=r.slice(57);let D=[];if(e===0){const q=new Uint16Array(L),B=Math.abs(x-A),se=65535;q.forEach(C=>{const E=C/se;D.push(x+B*E)})}else e===1&&(D=Array.from(new Float32Array(L)));return{timestamp:b,min:x,max:A,emissivity:_,reflectedKelvins:V,pixels:D}},lv=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(V,L)=>{const D=V.getBigInt64(L,!0),q=62135596800000n,B=10000n,se=24n*60n*60n*1000n*B,C=0x4000000000000000n,E=0x8000000000000000n;let T=D&0x3fffffffffffffffn;D&E&&(T>C-se&&(T-=C),T<0&&(T+=se));const I=T/B-q;return Number(I)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,d=h+u,g=r.slice(25),b=g.byteLength/d,x={},A=V=>{const L=V*d,D=L+d,q=g.slice(L,D),B=new DataView(q),se=a(B,0),C=B.getFloat32(8,!0),R=B.getFloat32(12,!0)-C,j=57+t*l*s+e*l;let I=0;if(o===1)I=B.getFloat32(j,!0);else if(o===0){const K=B.getInt16(j,!0)/65535;I=C+R*K}return{timestamp:se,temperature:I}};let _=0;for(let V=0;V<b;V++){const L=A(V);_===0&&(_=L.timestamp),x[L.timestamp-_]=L.temperature}return x},hv=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(D,q)=>{const B=D.getBigInt64(q,!0),se=62135596800000n,C=10000n,E=24n*60n*60n*1000n*C,R=0x4000000000000000n,T=0x8000000000000000n;let I=B&0x3fffffffffffffffn;B&T&&(I>R-E&&(I-=R),I<0&&(I+=E));const M=I/C-se;return Number(M)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,g=a*o*u,b=d+g,x=r.slice(25),A=x.byteLength/b,_={},V=D=>{const q=D*b,B=q+b,se=x.slice(q,B),C=new DataView(se),E=l(C,0),R=C.getFloat32(8,!0),j=C.getFloat32(12,!0)-R,I=57,U=e,M=e+i,K=t,he=t+s;let k=1/0,W=-1/0,de=0,ie=0;for(let Be=K;Be<=he;Be++){const Qe=Be*a;for(let it=U;it<=M;it++){const ae=I+(Qe+it)*u;let ue=NaN;if(h===1)ue=C.getFloat32(ae,!0);else{const et=C.getInt16(ae,!0)/65535;ue=R+j*et}ue<k&&(k=ue),ue>W&&(W=ue),ie+=ue,de++}}const Pe={min:k,max:W,avg:ie/de,count:de};return{timestamp:E,result:Pe}};let L=0;for(let D=0;D<A;D++){const q=V(D);L===0&&(L=q.timestamp),_[q.timestamp-L]=q.result}return _},cv=async r=>{console.log("Reading histogram");let e=[];const t=async _=>{const V=new DataView(_.slice(0,25)),L=V.getUint8(15),D=V.getUint16(17,!0),q=V.getUint16(19,!0),B=L===1?4:2,se=57,C=D*q*B,E=se+C,R=_.slice(25),T=R.byteLength/E;let j=[];for(let I=0;I<T;I++){const U=I*E,M=U+57,K=M+C,he=R.slice(M,K);if(L===0){const k=new DataView(R.slice(U,56)),W=k.getFloat32(8,!0),de=k.getFloat32(12,!0),ie=new Uint16Array(he),Pe=Math.abs(W-de),Be=65535;ie.forEach(Qe=>{const it=Qe/Be;j.push(W+Pe*it)})}else L===1&&(j=j.concat(Array.from(new Float32Array(he))))}return j};(await Promise.all(r.map(_=>t(_)))).forEach(_=>{e=e.concat(_)}),e.sort((_,V)=>_-V);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=255,l=a/o,h=[];let u=[...e];for(let _=0;_<o;_++){const V=s+l*_,L=V+l,D=u.findIndex(q=>q>L);if(D===0){const q={from:V,to:L,count:0,percentage:0};h.push(q)}else{const B=u.slice(0,D-1).length,se=B/e.length*100,C={from:V,to:L,count:B,percentage:se};h.push(C),u=u.slice(D)}}const d=[...h].sort((_,V)=>_.percentage-V.percentage),g=d[0].percentage,b=d[d.length-1].percentage,x=Math.abs(g-b);return h.map(_=>({..._,height:_.percentage/x*100}))},dv=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},uv=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(q,B)=>{const se=q.getBigInt64(B,!0),C=62135596800000n,E=10000n,R=24n*60n*60n*1000n*E,T=0x4000000000000000n,j=0x8000000000000000n;let U=se&0x3fffffffffffffffn;se&j&&(U>T-R&&(U-=T),U<0&&(U+=R));const K=U/E-C;return Number(K)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,g=a*o*u,b=d+g,x=r.slice(25),A=x.byteLength/b,_={},V=(q,B)=>{const se=e+i/2,C=t+s/2,E=(q-se)/(i/2),R=(B-C)/(s/2);return E*E+R*R<=1},L=q=>{const B=q*b,se=B+b,C=x.slice(B,se),E=new DataView(C),R=l(E,0),T=E.getFloat32(8,!0),I=E.getFloat32(12,!0)-T,U=57,M=e,K=e+i,he=t,k=t+s;let W=1/0,de=-1/0,ie=0,Pe=0;for(let Qe=he;Qe<=k;Qe++){const it=Qe*a;for(let ae=M;ae<=K;ae++)if(V(ae,Qe)){const ue=U+(it+ae)*u;let Ce=NaN;if(h===1)Ce=E.getFloat32(ue,!0);else{const Fe=E.getInt16(ue,!0)/65535;Ce=T+I*Fe}Ce<W&&(W=Ce),Ce>de&&(de=Ce),Pe+=Ce,ie++}}const Be={min:W,max:de,avg:Pe/ie,count:ie};return{timestamp:R,result:Be}};let D=0;for(let q=0;q<A;q++){const B=L(q);D===0&&(D=B.timestamp),_[B.timestamp-D]=B.result}return _},pv=[{extension:"lrc",minme:"application/octet-stream"}],fv={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:pv,is:dv,baseInfo:nv,getFrameSubset:av,frameData:ov,registryHistogram:cv,pointAnalysisData:lv,rectAnalysisData:hv,ellipsisAnalysisData:uv},Qd=Object.freeze(fv),gv={LrcParser:Qd},eu=Object.values(gv),tu=(r,e)=>{const t=eu.find(i=>i.is(r,e));if(t===void 0)throw new Jd(2,e,`No parser found for '${e}'.`);return t},mv=eu.map(r=>r.extensions),vv=mv.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),yv=class ru{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new ru(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(await fetch(this.thermalUrl))),this.response}async processResponse(e){const t=e;if(t.status!==200)return this.pocessTheService(new Ki(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=tu(i,this.thermalUrl);return this.pocessTheService(new _i(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Jd)return this.pocessTheService(Ki.fromError(s));throw s}}pocessTheService(e){return e}},bv=class iu{constructor(e,t,i=!0){c(this,"_hover",!1);c(this,"onMouseEnter",new re);c(this,"onMouseLeave",new re);c(this,"onDrop",new re);c(this,"onProcessingEnd",new re);c(this,"input");c(this,"hydrated",!1);c(this,"multiple");c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.multiple=i,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t,i=!0){const s=new iu(e,t,i);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleFiles(e){let t=[];if(this.multiple)t=await Promise.all(e.map(async i=>await this.service.loadUploadedFile(i)));else{const i=e[0];i&&t.push(await this.service.loadUploadedFile(i))}return t}async handleDrop(e){e.preventDefault(),this.onDrop.call();let t=[];const i=e.dataTransfer;return i&&i.files&&(t=await this.handleFiles(Array.from(i.files))),this.onProcessingEnd.call(t,e),this.handleLeave(),{results:t,event:e}}async handleInputChange(e){e.preventDefault(),this.onDrop.call();const t=e.target;let i=[];return t.files&&(i=await this.handleFiles(Array.from(t.files)),this.onProcessingEnd.call(i,e),this.handleLeave()),{results:i,event:e}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=vv,this.multiple&&(e.multiple=!0),e}openFileDialog(e=!0){this.input!==void 0&&(this.input.multiple=e,this.input.click())}},wv=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new Al(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=tu(e,r.name);return new _i(this,e,t,r.name)}catch(e){return new Ki(r.name,3,e.message)}}handleDropzone(r,e=!0){return bv.listenOnElement(this,r,e)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=yv.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}async loadFiles(r){return r}},xv=class extends St{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},Sv=class extends St{get availablePalettes(){return Hr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},$v=class extends St{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},Ac=class sl{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new re);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new sl(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new sl(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof _i?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},kv=class{constructor(r){c(this,"onBatchStart",new re);c(this,"onBatchComplete",new re);c(this,"set",new Set);this.registry=r}get numberOfBatches(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=Ac.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=Ac.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.numberOfBatches===0&&this.registry.loading.markAsLoaded()}},Cv=class extends St{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},_v=class extends St{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=this.parent.histogram.value.filter(i=>i.height>=10),t={from:e[0].from,to:e[e.length-1].to};this.imposeRange(t)}}},Pv=class extends St{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addExistingGroup(e){this.value.map(t=>t.hash).includes(e.hash)||(this.value=[...this.value,e])}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new sv(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Av=class extends St{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3);c(this,"_loading",!1);c(this,"onCalculationStart",new re);c(this,"onCalculationEnd",new re)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}get loading(){return this._loading}set loading(e){this._loading=e}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((b,x)=>{const A=x.reduce((_,V)=>[..._,...V],[]);return[...b,...A]},[]).sort((b,x)=>b-x);const h=n/a;let u=i+h;const d=new Map;let g=0;for(;u!==!1;){const b=l.findIndex(_=>_>u),x=l.slice(0,b).length;d.set(u-h/2,x),g+=x,l=l.slice(b);const A=u+h;u=A<s?A:!1}return{result:d,resultCount:g}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateHistogram()})}}async recalculateHistogram(){this.onCalculationStart.call(),this.loading=!0;const t=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.reader.buffer);try{const i=await this.parent.pool.exec(Qd.registryHistogram,[t]);this.value=i,this.loading=!1,this.onCalculationEnd.call(!0)}catch{this.loading=!1,this.onCalculationEnd.call(!1)}}},Lv=class extends St{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},Ov=class extends Xd{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Ev=class extends Ua{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new Pv(this,[]));c(this,"_batch");c(this,"onProcessingStart",new re);c(this,"onProcessingEnd",new re);c(this,"opacity",new Cv(this,1));c(this,"minmax",new Ov(this,void 0));c(this,"loading",new Lv(this,!1));c(this,"range",new _v(this,void 0));c(this,"histogram",new Av(this,[]));c(this,"palette");c(this,"filters",new za(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([s,n])=>{const a=this.groups.addOrGetGroup(s),o=await Promise.all(n.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:a,groupFiles:o}})),i=await Promise.all(t.map(async({group:s,groupFiles:n})=>await Promise.all(n.map(async o=>o instanceof _i?await o.createInstance(s):!1))));return this.postLoadedProcessing(),i}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl),n=s instanceof _i?await s.createInstance(i):s;return this.loading.markAsLoaded(),this.postLoadedProcessing(),n}get batch(){return this._batch||(this._batch=new kv(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},ja=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Na=class extends ja{},Dv=class extends Na{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Vd.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Mv=class extends Na{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Rv=class extends Na{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},Tv=class extends ja{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},su=class extends ja{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Iv=[su,Rv,Mv,Dv,Tv],zv=r=>{const e=Iv.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},Uv=class extends St{constructor(e,t){super(e,t);c(this,"_tools",zv(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof ja?this.value=e:this.value=this.tools[e]}},nu="chrome"in window;console.log("is chromium",nu);var Fv=nu?{maxWorkers:4}:{},jv=$m.pool(Fv),Al=class extends Ua{constructor(e,t){super();c(this,"id");c(this,"service",new wv(this));c(this,"registries",{});c(this,"palette",new Sv(this,"jet"));c(this,"smooth",new $v(this,!1));c(this,"graphSmooth",new xv(this,!1));c(this,"tool",new Uv(this,new su(this)));c(this,"pool");c(this,"filters",new za(this));this.pool=e||jv,this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Ev(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},Nv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nv(e,t,s),s};const Lc=["ready","select"],Hv={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Vt=class extends nr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new re,this.left=0,this.top=0,this.w=0,this.h=0}render(){return p`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Vf(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(Lc,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Hv[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!Lc.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await uc({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(uc).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Vt.styles=ce`
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
  `;lr([m({type:String,reflect:!0})],Vt.prototype,"type",2);lr([m({type:Array})],Vt.prototype,"events",2);lr([m({type:Object,hasChanged:()=>!0})],Vt.prototype,"options",2);lr([m({type:Array})],Vt.prototype,"cols",2);lr([m({type:Array})],Vt.prototype,"rows",2);lr([m({type:String})],Vt.prototype,"data",2);lr([m({type:Object})],Vt.prototype,"view",2);lr([m({type:Array})],Vt.prototype,"selection",2);lr([m({type:Object})],Vt.prototype,"_data",2);lr([m({type:Number,reflect:!0})],Vt.prototype,"left",2);lr([m({type:Number,reflect:!0})],Vt.prototype,"top",2);lr([m({type:Number,reflect:!0})],Vt.prototype,"w",2);lr([m({type:Number,reflect:!0})],Vt.prototype,"h",2);Vt=lr([Z("thermal-chart")],Vt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=()=>new Bv;let Bv=class{};const Vo=new WeakMap,De=bn(class extends Jp{render(r){return P}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),P}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=Vo.get(e);t===void 0&&(t=new WeakMap,Vo.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=Vo.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var S=(r=>(r.loading="loading",r.config="config",r.temperature="temperature",r.upload="upload",r.uploadafile="uploadafile",r.selectfile="selectfile",r.addfiles="addfiles",r.clear="clear",r.dragorselectfile="dragorselectfile",r.share="share",r.fileloadingerror="fileloadingerror",r.embedhint="embedhint",r.embedlibrary="embedlibrary",r.embedcomponent="embedcomponent",r.copy="copy",r.remotefoldersbrowseraddfolderhint="remotefoldersbrowseraddfolderhint",r.file="file",r.layout_simple="layout_simple",r.layout_advanced="layout_advanced",r.layout_nogui="layout_nogui",r.layout_lesson="layout_lesson",r.next="next",r.prev="prev",r.back="back",r.close="close",r.open="open",r.detail="detail",r.showeverything="showeverything",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.togglevisibleimage="togglevisibleimage",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.exportimagewidth="exportimagewidth",r.exportimagefontsize="exportimagefontsize",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.analysissync="analysissync",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(S||{});const Vv=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],Oc=Object.fromEntries(Vv.map(r=>[r.code,r]));var Gv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,au=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gv(e,t,s),s};let rn=class extends nr{constructor(){super(),this.dialogRef=_e(),this.closeButtonRef=_e(),this.invokerRef=_e()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return p`
            <slot name="invoker" ${De(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${De(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${De(this.closeButtonRef)} @click=${this.setClose}>

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
                        ${$(S.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};rn.shadowRootOptions={...nr.shadowRootOptions,mode:"open"};rn.styles=ce`

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
            white-space: normal;
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

        
    
    `;au([m({type:String,reflect:!0})],rn.prototype,"label",2);rn=au([Z("thermal-dialog")],rn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ou=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ec=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ou(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qv{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xv=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Dc extends qv{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new ou(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Xv(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Dc(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Dc(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Ec(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Ec(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let ea;const Kv=new Uint8Array(16);function Zv(){if(!ea&&(ea=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ea))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ea(Kv)}const Ut=[];for(let r=0;r<256;++r)Ut.push((r+256).toString(16).slice(1));function Jv(r,e=0){return Ut[r[e+0]]+Ut[r[e+1]]+Ut[r[e+2]]+Ut[r[e+3]]+"-"+Ut[r[e+4]]+Ut[r[e+5]]+"-"+Ut[r[e+6]]+Ut[r[e+7]]+"-"+Ut[r[e+8]]+Ut[r[e+9]]+"-"+Ut[r[e+10]]+Ut[r[e+11]]+Ut[r[e+12]]+Ut[r[e+13]]+Ut[r[e+14]]+Ut[r[e+15]]}const Qv=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Mc={randomUUID:Qv};function ey(r,e,t){if(Mc.randomUUID&&!e&&!r)return Mc.randomUUID();r=r||{};const i=r.random||(r.rng||Zv)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Jv(i)}const rs="localeContext",Ls=r=>{pt.on("languageChanged",e=>{r.locale=e}),r.locale===void 0?r.locale=pt.language:pt.changeLanguage(r.locale)},Go={cs:["cs","cz","cs_CZ","cs_CS"],fr:["fr","fr_FR","fr_CA"],de:["de","de_DE","de_AT","de_CH"],cy:["cy","cy_GB","cy"],en:["en","en_US","en_GB","en_CA","en_AU","en_NZ","en_IE","en_ZA"]},Os={fromAttribute:r=>{let e,t=0;for(;t<Object.keys(Go).length&&e===void 0;){const i=Object.keys(Go)[t];Go[i].includes(r)&&(e=i),t++}return e??"en"},toAttribute:r=>r};var ty=Object.defineProperty,ry=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&ty(e,t,s),s};const oh=class oh extends nr{get UUID(){return this._UUID===void 0&&(this._UUID=ey()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),pt.on("languageChanged",e=>{this._locale=e})}};oh.shadowRootOptions={...nr.shadowRootOptions,mode:"open"};let Xe=oh;ry([ge({context:rs,subscribe:!0})],Xe.prototype,"_locale");var iy=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,Wa=(r,e,t,i)=>{for(var s=i>1?void 0:i?sy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iy(e,t,s),s};let oi=class extends Xe{constructor(){super(...arguments),this.interactive=!0,this.size="sm"}render(){return p`
            <button class="${this.variant}" part="btn">
                <slot></slot>
            </button>
        `}};oi.VARIANTS=["slate","primary","foreground","background","plain"];oi.shadowRootOptions={...nr.shadowRootOptions,mode:"open"};oi.styles=ce`

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

        white-space: nowrap;
        
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

        &.plain {
            background: transparent;
            color: var(--thermal-slate);
            border: 0;
            box-shadow: none !important;
            padding-left: 0;
            padding-right: 0;

            &:hover {
                color: var(--thermal-primary);
            }
        }
    }
    
    `;Wa([m({type:String,converter:{fromAttribute:r=>{if(oi.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],oi.prototype,"variant",2);Wa([m({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],oi.prototype,"interactive",2);Wa([m({type:String})],oi.prototype,"size",2);oi=Wa([Z("thermal-button")],oi);const ys=Math.min,ni=Math.max,ba=Math.round,Br=r=>({x:r,y:r}),ny={left:"right",right:"left",bottom:"top",top:"bottom"},ay={start:"end",end:"start"};function Rc(r,e,t){return ni(r,ys(e,t))}function kn(r,e){return typeof r=="function"?r(e):r}function li(r){return r.split("-")[0]}function Ha(r){return r.split("-")[1]}function lu(r){return r==="x"?"y":"x"}function hu(r){return r==="y"?"height":"width"}function Cn(r){return["top","bottom"].includes(li(r))?"y":"x"}function cu(r){return lu(Cn(r))}function oy(r,e,t){t===void 0&&(t=!1);const i=Ha(r),s=cu(r),n=hu(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=wa(a)),[a,wa(a)]}function ly(r){const e=wa(r);return[nl(r),e,nl(e)]}function nl(r){return r.replace(/start|end/g,e=>ay[e])}function hy(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function cy(r,e,t,i){const s=Ha(r);let n=hy(li(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(nl)))),n}function wa(r){return r.replace(/left|right|bottom|top/g,e=>ny[e])}function dy(r){return{top:0,right:0,bottom:0,left:0,...r}}function du(r){return typeof r!="number"?dy(r):{top:r,right:r,bottom:r,left:r}}function bs(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Tc(r,e,t){let{reference:i,floating:s}=r;const n=Cn(e),a=cu(e),o=hu(a),l=li(e),h=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,g=i[o]/2-s[o]/2;let b;switch(l){case"top":b={x:u,y:i.y-s.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:d};break;case"left":b={x:i.x-s.width,y:d};break;default:b={x:i.x,y:i.y}}switch(Ha(e)){case"start":b[a]-=g*(t&&h?-1:1);break;case"end":b[a]+=g*(t&&h?-1:1);break}return b}const uy=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:d}=Tc(h,i,l),g=i,b={},x=0;for(let A=0;A<o.length;A++){const{name:_,fn:V}=o[A],{x:L,y:D,data:q,reset:B}=await V({x:u,y:d,initialPlacement:i,placement:g,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:r,floating:e}});u=L??u,d=D??d,b={...b,[_]:{...b[_],...q}},B&&x<=50&&(x++,typeof B=="object"&&(B.placement&&(g=B.placement),B.rects&&(h=B.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):B.rects),{x:u,y:d}=Tc(h,g,l)),A=-1)}return{x:u,y:d,placement:g,strategy:s,middlewareData:b}};async function uu(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:b=0}=kn(e,r),x=du(b),_=o[g?d==="floating"?"reference":"floating":d],V=bs(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(_)))==null||t?_:_.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),L=d==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),q=await(n.isElement==null?void 0:n.isElement(D))?await(n.getScale==null?void 0:n.getScale(D))||{x:1,y:1}:{x:1,y:1},B=bs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:L,offsetParent:D,strategy:l}):L);return{top:(V.top-B.top+x.top)/q.y,bottom:(B.bottom-V.bottom+x.bottom)/q.y,left:(V.left-B.left+x.left)/q.x,right:(B.right-V.right+x.right)/q.x}}const py=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:A=!0,..._}=kn(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const V=li(s),L=li(o)===o,D=await(l.isRTL==null?void 0:l.isRTL(h.floating)),q=g||(L||!A?[wa(o)]:ly(o));!g&&x!=="none"&&q.push(...cy(o,A,x,D));const B=[o,...q],se=await uu(e,_),C=[];let E=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&C.push(se[V]),d){const I=oy(s,a,D);C.push(se[I[0]],se[I[1]])}if(E=[...E,{placement:s,overflows:C}],!C.every(I=>I<=0)){var R,T;const I=(((R=n.flip)==null?void 0:R.index)||0)+1,U=B[I];if(U)return{data:{index:I,overflows:E},reset:{placement:U}};let M=(T=E.filter(K=>K.overflows[0]<=0).sort((K,he)=>K.overflows[1]-he.overflows[1])[0])==null?void 0:T.placement;if(!M)switch(b){case"bestFit":{var j;const K=(j=E.map(he=>[he.placement,he.overflows.filter(k=>k>0).reduce((k,W)=>k+W,0)]).sort((he,k)=>he[1]-k[1])[0])==null?void 0:j[0];K&&(M=K);break}case"initialPlacement":M=o;break}if(s!==M)return{reset:{placement:M}}}return{}}}};function pu(r){const e=ys(...r.map(n=>n.left)),t=ys(...r.map(n=>n.top)),i=ni(...r.map(n=>n.right)),s=ni(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function fy(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>bs(pu(s)))}const gy=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=kn(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),d=fy(u),g=bs(pu(u)),b=du(o);function x(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&h!=null)return d.find(_=>l>_.left-b.left&&l<_.right+b.right&&h>_.top-b.top&&h<_.bottom+b.bottom)||g;if(d.length>=2){if(Cn(t)==="y"){const T=d[0],j=d[d.length-1],I=li(t)==="top",U=T.top,M=j.bottom,K=I?T.left:j.left,he=I?T.right:j.right,k=he-K,W=M-U;return{top:U,bottom:M,left:K,right:he,width:k,height:W,x:K,y:U}}const _=li(t)==="left",V=ni(...d.map(T=>T.right)),L=ys(...d.map(T=>T.left)),D=d.filter(T=>_?T.left===L:T.right===V),q=D[0].top,B=D[D.length-1].bottom,se=L,C=V,E=C-se,R=B-q;return{top:q,bottom:B,left:se,right:C,width:E,height:R,x:se,y:q}}return g}const A=await n.getElementRects({reference:{getBoundingClientRect:x},floating:i.floating,strategy:a});return s.reference.x!==A.reference.x||s.reference.y!==A.reference.y||s.reference.width!==A.reference.width||s.reference.height!==A.reference.height?{reset:{rects:A}}:{}}}};async function my(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=li(t),o=Ha(t),l=Cn(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,d=kn(e,r);let{mainAxis:g,crossAxis:b,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof x=="number"&&(b=o==="end"?x*-1:x),l?{x:b*u,y:g*h}:{x:g*h,y:b*u}}const vy=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await my(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},yy=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:_=>{let{x:V,y:L}=_;return{x:V,y:L}}},...l}=kn(r,e),h={x:t,y:i},u=await uu(e,l),d=Cn(li(s)),g=lu(d);let b=h[g],x=h[d];if(n){const _=g==="y"?"top":"left",V=g==="y"?"bottom":"right",L=b+u[_],D=b-u[V];b=Rc(L,b,D)}if(a){const _=d==="y"?"top":"left",V=d==="y"?"bottom":"right",L=x+u[_],D=x-u[V];x=Rc(L,x,D)}const A=o.fn({...e,[g]:b,[d]:x});return{...A,data:{x:A.x-t,y:A.y-i}}}}};function Ba(){return typeof window<"u"}function Es(r){return fu(r)?(r.nodeName||"").toLowerCase():"#document"}function ur(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function ui(r){var e;return(e=(fu(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function fu(r){return Ba()?r instanceof Node||r instanceof ur(r).Node:!1}function Or(r){return Ba()?r instanceof Element||r instanceof ur(r).Element:!1}function Vr(r){return Ba()?r instanceof HTMLElement||r instanceof ur(r).HTMLElement:!1}function Ic(r){return!Ba()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof ur(r).ShadowRoot}function _n(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Er(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function by(r){return["table","td","th"].includes(Es(r))}function Va(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function Ll(r){const e=Ol(),t=Or(r)?Er(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function wy(r){let e=Pi(r);for(;Vr(e)&&!ws(e);){if(Ll(e))return e;if(Va(e))return null;e=Pi(e)}return null}function Ol(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ws(r){return["html","body","#document"].includes(Es(r))}function Er(r){return ur(r).getComputedStyle(r)}function Ga(r){return Or(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function Pi(r){if(Es(r)==="html")return r;const e=r.assignedSlot||r.parentNode||Ic(r)&&r.host||ui(r);return Ic(e)?e.host:e}function gu(r){const e=Pi(r);return ws(e)?r.ownerDocument?r.ownerDocument.body:r.body:Vr(e)&&_n(e)?e:gu(e)}function al(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=gu(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=ur(s);if(n){const o=ol(a);return e.concat(a,a.visualViewport||[],_n(s)?s:[],o&&t?al(o):[])}return e.concat(s,al(s,[],t))}function ol(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function mu(r){const e=Er(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Vr(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=ba(t)!==n||ba(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function vu(r){return Or(r)?r:r.contextElement}function gs(r){const e=vu(r);if(!Vr(e))return Br(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=mu(e);let a=(n?ba(t.width):t.width)/i,o=(n?ba(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const xy=Br(0);function yu(r){const e=ur(r);return!Ol()||!e.visualViewport?xy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Sy(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==ur(r)?!1:e}function sn(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=vu(r);let a=Br(1);e&&(i?Or(i)&&(a=gs(i)):a=gs(r));const o=Sy(n,t,i)?yu(n):Br(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(n){const g=ur(n),b=i&&Or(i)?ur(i):i;let x=g,A=ol(x);for(;A&&i&&b!==x;){const _=gs(A),V=A.getBoundingClientRect(),L=Er(A),D=V.left+(A.clientLeft+parseFloat(L.paddingLeft))*_.x,q=V.top+(A.clientTop+parseFloat(L.paddingTop))*_.y;l*=_.x,h*=_.y,u*=_.x,d*=_.y,l+=D,h+=q,x=ur(A),A=ol(x)}}return bs({width:u,height:d,x:l,y:h})}function El(r,e){const t=Ga(r).scrollLeft;return e?e.left+t:sn(ui(r)).left+t}function bu(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:El(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function $y(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=ui(i),o=e?Va(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=Br(1);const u=Br(0),d=Vr(i);if((d||!d&&!n)&&((Es(i)!=="body"||_n(a))&&(l=Ga(i)),Vr(i))){const b=sn(i);h=gs(i),u.x=b.x+i.clientLeft,u.y=b.y+i.clientTop}const g=a&&!d&&!n?bu(a,l,!0):Br(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x+g.x,y:t.y*h.y-l.scrollTop*h.y+u.y+g.y}}function ky(r){return Array.from(r.getClientRects())}function Cy(r){const e=ui(r),t=Ga(r),i=r.ownerDocument.body,s=ni(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=ni(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+El(r);const o=-t.scrollTop;return Er(i).direction==="rtl"&&(a+=ni(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function _y(r,e){const t=ur(r),i=ui(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=Ol();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function Py(r,e){const t=sn(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Vr(r)?gs(r):Br(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function zc(r,e,t){let i;if(e==="viewport")i=_y(r,t);else if(e==="document")i=Cy(ui(r));else if(Or(e))i=Py(e,t);else{const s=yu(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return bs(i)}function wu(r,e){const t=Pi(r);return t===e||!Or(t)||ws(t)?!1:Er(t).position==="fixed"||wu(t,e)}function Ay(r,e){const t=e.get(r);if(t)return t;let i=al(r,[],!1).filter(o=>Or(o)&&Es(o)!=="body"),s=null;const n=Er(r).position==="fixed";let a=n?Pi(r):r;for(;Or(a)&&!ws(a);){const o=Er(a),l=Ll(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||_n(a)&&!l&&wu(r,a))?i=i.filter(u=>u!==a):s=o,a=Pi(a)}return e.set(r,i),i}function Ly(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?Va(e)?[]:Ay(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const d=zc(e,u,s);return h.top=ni(d.top,h.top),h.right=ys(d.right,h.right),h.bottom=ys(d.bottom,h.bottom),h.left=ni(d.left,h.left),h},zc(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Oy(r){const{width:e,height:t}=mu(r);return{width:e,height:t}}function Ey(r,e,t){const i=Vr(e),s=ui(e),n=t==="fixed",a=sn(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=Br(0);if(i||!i&&!n)if((Es(e)!=="body"||_n(s))&&(o=Ga(e)),i){const g=sn(e,!0,n,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else s&&(l.x=El(s));const h=s&&!i&&!n?bu(s,o):Br(0),u=a.left+o.scrollLeft-l.x-h.x,d=a.top+o.scrollTop-l.y-h.y;return{x:u,y:d,width:a.width,height:a.height}}function Yo(r){return Er(r).position==="static"}function Uc(r,e){if(!Vr(r)||Er(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return ui(r)===t&&(t=t.ownerDocument.body),t}function xu(r,e){const t=ur(r);if(Va(r))return t;if(!Vr(r)){let s=Pi(r);for(;s&&!ws(s);){if(Or(s)&&!Yo(s))return s;s=Pi(s)}return t}let i=Uc(r,e);for(;i&&by(i)&&Yo(i);)i=Uc(i,e);return i&&ws(i)&&Yo(i)&&!Ll(i)?t:i||wy(r)||t}const Dy=async function(r){const e=this.getOffsetParent||xu,t=this.getDimensions,i=await t(r.floating);return{reference:Ey(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function My(r){return Er(r).direction==="rtl"}const Ry={convertOffsetParentRelativeRectToViewportRelativeRect:$y,getDocumentElement:ui,getClippingRect:Ly,getOffsetParent:xu,getElementRects:Dy,getClientRects:ky,getDimensions:Oy,getScale:gs,isElement:Or,isRTL:My},Ty=vy,Iy=yy,zy=py,Uy=gy,Fy=(r,e,t)=>{const i=new Map,s={platform:Ry,...t},n={...s.platform,_c:i};return uy(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=bn(class extends Ta{constructor(r){var e;if(super(r),r.type!==ii.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return ki}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=r=>r??P;var jy=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,Pn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ny(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jy(e,t,s),s};let hi=class extends Xe{constructor(){super(...arguments),this.dropdownRef=_e(),this.invokerRef=_e(),this.optionsRef=_e(),this.open="close",this.interactive="on"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Fy(this.invokerRef.value,this.optionsRef.value,{middleware:[Ty(2),zy(),Uy(),Iy()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return p`

            <div class="dropdown" ${De(this.dropdownRef)}>

                <thermal-button 
                    class="${ai(r)}" 
                    ${De(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${Ge(this.variant)}" 
                    interactive="${this.interactive==="on"?"true":"false"}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?p`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:p`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${De(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};hi.shadowRootOptions={...nr.shadowRootOptions,mode:"open"};hi.styles=ce`

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
            }
        }

        slot[name="option"]::slotted(*) {

            display: block;
            width: 100%;

            margin-top: 5px;
            margin-bottom: 5px;
            width: 100%;

        }


    
    `;Pn([di({slot:"option"})],hi.prototype,"_options",2);Pn([m({type:String,reflect:!0})],hi.prototype,"open",2);Pn([m({type:String,reflect:!0,attribute:!0}),w()],hi.prototype,"interactive",2);Pn([w(),m({type:String,reflect:!0,attribute:!0})],hi.prototype,"variant",2);hi=Pn([Z("thermal-dropdown")],hi);var Wy=Object.defineProperty,Hy=Object.getOwnPropertyDescriptor,Ya=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wy(e,t,s),s};let xs=class extends nr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=_e(),this.contentRef=_e(),this.rulerContentRef=_e()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}disconnectedCallback(){super.disconnectedCallback(),this.drawerRef.value&&this.observer.unobserve(this.drawerRef.value),this.observer.disconnect()}render(){return p`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${De(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${De(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${De(this.contentRef)}>

                    ${this.collapsed===!1?p`
                        <slot></slot>    
                    `:P}
                
                </div>

            </div>

            ${this.collapsed?p`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:P}
        
        `}};xs.styles=ce`

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

    `;Ya([w()],xs.prototype,"collapsed",2);Ya([w()],xs.prototype,"lastContentWidth",2);Ya([w()],xs.prototype,"drawerRef",2);xs=Ya([Z("thermal-bar")],xs);const nt=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var By=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,hr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&By(e,t,s),s};const Gy="chrome"in window;let Gt=class extends Xe{constructor(){super(...arguments),this.language=pt.language,this.fullscreen="off",this.showfullscreen=!1,this.dark=!1,this.chromiumwarning=!1,this.appRef=_e(),this.headerRef=_e(),this.contentRef=_e()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),pt.on("languageChanged",()=>{this.language=pt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const s=t.contentRect.height;t.contentRect.width;const n=s-175;this.contentRef.value.offsetHeight<n?console.log("priorita šířky"):console.log("priorita výšky")}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){const r=Gy===!0&&this.chromiumwarning===!0;return p`

    <div class="container ${this.dark?"dark":"normal"}" ${De(this.appRef)}>

        <header ${De(this.headerRef)} class="app-header">
            
            <div class="bar ${this.barElements.length>0?"has-bar":"no-bar"}">

                <slot name="label">
                    ${this.label?p`<thermal-button variant="foreground" interactive="${this.onlabel!==void 0}" @click=${Ge(this.onlabel)}>${this.label}</thermal-button>`:P}
                </slot>

                <slot name="bar-persistent"></slot>

                <div class="bar-content">

                    <thermal-bar>

                        <slot name="bar-pre"></slot>

                        <div class="bar-separator"></div>

                        <slot name="bar-post"></slot>

                    </thermal-bar>
                
                </div>

                <slot name="close"></slot>

                
                ${this.showfullscreen===!0?p`
                    <thermal-button class="app-fullscreen-button" @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V2.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L2.22 3.28a.75.75 0 0 1 0-1.06Zm10.5 0a.75.75 0 1 1 1.06 1.06L11.56 5.5h1.69a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 6.25v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22ZM2.75 9h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H2.75a.75.75 0 0 1 0-1.5ZM9 9.75A.75.75 0 0 1 9.75 9h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0v-3.5Z" clip-rule="evenodd" />
                            </svg>`:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd" />
                            </svg>`}
                        </div>
                    </thermal-button>
                `:P}

                <thermal-dropdown>

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(e=>p`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{pt.changeLanguage(e),this.language=e}}
                            >${Oc[e].flag} ${Oc[e].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>
                
            </div>

        ${this.preElements.length>=0?p`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${De(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?p`<div class="credits">

                    ${this.recorded?p`<div>
                            <div class="credits-field">${$(S.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:P}

                    ${this.author?p`<div>
                            <div class="credits-field">${$(S.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:P}

                    ${this.license?p`<div>
                            <div class="credits-field">${$(S.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:P}

                </div>`:P}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

            ${r===!0?p`<footer class="chromium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>

                    <span>Chromium-based browsers provide a slightly worse performance during the playback. Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</span>
                </footer>`:P}

    </div>
        
        `}};Gt.styles=ce`

        :host {
            font-family: sans-serif;
            font-weight: normal;
            font-size: var( --thermal-fs );
            line-height: 1em;
        }

        .dark {
            background-color: var( --thermal-slate ) !important;
        }

        .container {

            padding: calc( var( --thermal-gap ) / 3 );
            background-color: var( --thermal-slate-light );
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );    
            position: relative;        

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;

            .bar-content {
                flex-grow: 1;
            }

            .bar-separator {
                flex-grow: 100;
                content: "";
            }


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

        .app-fullscreen-button {
            svg {
                width: 1em;
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

        .app-header {
            position: sticky;
            top: 0;
            z-index: 9999;
            background: var(--thermal-slate-light);
            background: linear-gradient(var(--thermal-slate-light) calc(100% - 10px), transparent);
        }

        footer.chromium {
            color: var(--thermal-foreground);
            font-size: 12px;
            opacity: .5;
            display: flex;
            gap: 5px;
            margin-top: 10px;
            svg {
                width: 1em;
            }
            a {
                color: var(--thermal-foreground);
            }
        }
    
    `;hr([w()],Gt.prototype,"language",2);hr([di({slot:"bar",flatten:!0})],Gt.prototype,"barElements",2);hr([di({slot:"pre",flatten:!0})],Gt.prototype,"preElements",2);hr([di({slot:"content",flatten:!0})],Gt.prototype,"contentElements",2);hr([m({type:String,reflect:!0})],Gt.prototype,"fullscreen",2);hr([m({type:String,reflect:!0,attribute:!0,converter:nt(!1)})],Gt.prototype,"showfullscreen",2);hr([m({type:String,reflect:!0,attribute:!0})],Gt.prototype,"dark",2);hr([m()],Gt.prototype,"author",2);hr([m()],Gt.prototype,"recorded",2);hr([m()],Gt.prototype,"license",2);hr([m()],Gt.prototype,"label",2);hr([m({type:Object})],Gt.prototype,"onlabel",2);hr([m({converter:nt(!1)})],Gt.prototype,"chromiumwarning",2);Gt=hr([Z("thermal-app")],Gt);var Yy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,Dl=(r,e,t,i)=>{for(var s=i>1?void 0:i?qy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yy(e,t,s),s};let nn=class extends nr{render(){return p`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&p`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};nn.styles=ce`
    
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

    `;Dl([m({type:String})],nn.prototype,"label",2);Dl([m({type:String})],nn.prototype,"hint",2);nn=Dl([Z("thermal-field")],nn);var Xy=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,Ds=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ky(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xy(e,t,s),s};let Ai=class extends Xe{constructor(){super(...arguments),this.loaded=!1,this.bordercolor="var(--thermal-slate)",this.bgcolor="var(--thermal-slate-light)",this.textcolor="var(--thermal-slate-dark)"}updated(r){super.updated(r),this.style.borderColor=this.bordercolor,this.style.backgroundColor=this.bgcolor,this.style.color=this.textcolor}render(){return p`
            <div class="lds-facebook" style="color: ${this.textcolor}">
                <div></div>
                <div></div>
                <div></div>
            </div>
            ${this.message?p`<div>${this.message}</div>`:P}
        `}};Ai.styles=ce`
    
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            
            box-sizing: border-box;
            padding: var(--thermal-gap);
            color: var(--thermal-slate-dark);
            background: var(--thermal-slate-light);

            --width: 60px;
            --height: 80px;
            --bar: 10px;
            --gap: 8px;
        }

        .lds-facebook {
            /* change color here */
            color: var(--thermal-slate-dark);
        }
        .lds-facebook,
        .lds-facebook div {
            box-sizing: border-box;
        }
        .lds-facebook {
            display: inline-block;
            position: relative;
            width: var(--width);
            height: var(--height);
        }
        .lds-facebook div {
            display: inline-block;
            position: absolute;
            left: var(--gap);
            width: var(--bar);
            background: currentColor;
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .lds-facebook div:nth-child(1) {
            left: var(--gap);
            animation-delay: -0.24s;
        }
        .lds-facebook div:nth-child(2) {
            left: calc(var(--bar) * 2);
            animation-delay: -0.12s;
        }
        .lds-facebook div:nth-child(3) {
            left: calc( var(--bar) * 3 + var(--gap) * .3 ); 
            animation-delay: 0s;
        }
        @keyframes lds-facebook {
            0% {
                top: 8px;
                height: 64px;
            }
            50%, 100% {
                top: 24px;
                height: 32px;
            }
        }
    
    `;Ds([w()],Ai.prototype,"loaded",2);Ds([m({type:String})],Ai.prototype,"message",2);Ds([m({type:String})],Ai.prototype,"bordercolor",2);Ds([m({type:String})],Ai.prototype,"bgcolor",2);Ds([m({type:String})],Ai.prototype,"textcolor",2);Ai=Ds([Z("thermal-loading")],Ai);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xa extends Ta{constructor(e){if(super(e),this.it=P,e.type!==ii.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===P||e==null)return this._t=void 0,this.it=e;if(e===ki)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}xa.directiveName="unsafeHTML",xa.resultType=1;const qt=bn(xa);var Zy=Object.defineProperty,Jy=Object.getOwnPropertyDescriptor,is=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zy(e,t,s),s};const Ml={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let ci=class extends Xe{constructor(){super(...arguments),this.tRef=_e(),this.vRef=_e(),this.vunitsRef=_e(),this.haRef=_e(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),Ls(this),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?qt(i):i;return p`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${De(r)} 
                            id=${e}
                            name=${e}
                            value=${Ge(s)}
                            min=${Ge(n)}
                            max=${Ge(a)}
                            step=${Ge(o)}
                            type="number"
                            @blur=${u=>{const d=u.target,g=d.value.trim();g===""||g===void 0||g===null?this[e]=void 0:this[e]=parseFloat(d.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?p`<label for=${e}>${l}</label>`:P}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=$(S.apparenttemperatureverbose,i),n=t<0?$(S.youfeelcolder,i):$(S.youfeelwarmer,i),a=r.toFixed(2);return p`<div class="result">

            <p class="result_label">${$(S.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return p`
            <thermal-app label=${$(S.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

                <thermal-dialog label=${$(S.info)} slot="bar-pre">
                    <thermal-button slot="invoker">${$(S.info)}</thermal-button>
                    <div slot="content">
                        ${qt($(S.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?p`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:P}


                <section class="table">

                ${this.renderNumberField(this.tRef,"t",$(S.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",$(S.windspeed),p`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${De(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",$(S.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):P}
                </div>
                

            </thermal-app>
        `}};ci.styles=ce`

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

        select, option, input {
            font-size: var(--thermal-fs);
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


    `;is([m({type:String,reflect:!0,attribute:!0,converter:Ml})],ci.prototype,"t",2);is([m({type:String,reflect:!0,attribute:!0,converter:Ml})],ci.prototype,"v",2);is([m({type:String,reflect:!0,attribute:!0,converter:Ml})],ci.prototype,"ha",2);is([w()],ci.prototype,"ta",2);is([m({type:String,reflect:!0,attribute:!0})],ci.prototype,"vunits",2);is([Y({context:rs}),m({reflect:!0,converter:Os})],ci.prototype,"locale",2);ci=is([Z("apparent-temperature-aat")],ci);var Qy=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,t0=(r,e,t,i)=>{for(var s=i>1?void 0:i?e0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qy(e,t,s),s};let ll=class extends Xe{render(){return p`
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
                        <p>version ${fs}</p>
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

        `}};ll.styles=ce`

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
    
    `;ll=t0([Z("app-info-button")],ll);const Ti="pngExportWidthContext",Ms="pngExportWidthSetterContext",Ii="png-export-width-context",Rs="png-export-width-setter-context";var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,An=(r,e,t,i)=>{for(var s=i>1?void 0:i?i0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r0(e,t,s),s};let Zi=class extends Xe{renderRow(r,e,t){return p`<thermal-field label="${r}">
                <div>${e}</div>
                ${t||P}
            </thermal-field>`}renderSlider(r,e,t,i,s,n,a,o){const l=p`<input 
                name="${r}"
                value="${e}"
                min="${i}"
                max="${s}"
                step="${n}"
                type="range"
                @input="${u=>{const d=Math.min(s,Math.max(0,parseFloat(u.target.value)));a(d)}}"
            ></input>`,h=p`<div class="hint"><strong>${e} ${t}</strong> (${i} - ${s} ${t})${o?p`<br />${o}</div>`:P}`;return this.renderRow(r,l,h)}render(){return this.pngFs===void 0||this.pngWidth===void 0||this.pngWidthSetter===void 0||this.pngFsSetter===void 0?P:p`

        ${this.renderSlider($(S.exportimagewidth),this.pngWidth,"px",300,2e3,50,this.pngWidthSetter.bind(this))}

        ${this.renderSlider($(S.exportimagefontsize),this.pngFs,"px",10,50,1,this.pngFsSetter.bind(this))}
        
        `}};Zi.styles=ce`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }
        
        `;An([w(),ge({context:Ti,subscribe:!0})],Zi.prototype,"pngWidth",2);An([ge({context:Ms,subscribe:!0})],Zi.prototype,"pngWidthSetter",2);An([ge({context:Ii,subscribe:!0})],Zi.prototype,"pngFs",2);An([ge({context:Rs,subscribe:!0})],Zi.prototype,"pngFsSetter",2);Zi=An([Z("png-export-panel")],Zi);var s0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,a0=(r,e,t,i)=>{for(var s=i>1?void 0:i?n0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&s0(e,t,s),s};let hl=class extends Xe{render(){return p`
        <thermal-field label="${$(S.filerendering)}" hint="${$(S.filerenderinghint)}">
            <manager-smooth-switch></manager-smooth-switch>
        </thermal-field>
        <thermal-field label="${$(S.graphlines)}" hint="${$(S.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `}};hl.styles=ce`
    
        :host {
            display: contents;
        }
    
    `;hl=a0([Z("registry-display-panel")],hl);var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,qa=(r,e,t,i)=>{for(var s=i>1?void 0:i?l0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o0(e,t,s),s};let Li=class extends Xe{render(){return P}};Li.styles=ce`
        :host {
            display: none;
        }
    `;qa([m({type:String})],Li.prototype,"lrc",2);qa([m({type:String})],Li.prototype,"png",2);qa([m({type:String})],Li.prototype,"label",2);Li=qa([Z("thermal-file")],Li);var h0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,Su=(r,e,t,i)=>{for(var s=i>1?void 0:i?c0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h0(e,t,s),s};let an=class extends Xe{render(){return p`<slot></slot>`}};an.styles=ce`
        :host {
            display: none;
        }
    `;Su([m()],an.prototype,"name",2);an=Su([Z("thermal-group")],an);var d0=Object.defineProperty,u0=Object.getOwnPropertyDescriptor,Yt=(r,e,t,i)=>{for(var s=i>1?void 0:i?u0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&d0(e,t,s),s};let Rt=class extends Xe{constructor(){super(...arguments),this.label="Gallery of IR images",this.palette="jet",this.state="main",this.registryRef=_e(),this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r},this.columns=3}connectedCallback(){super.connectedCallback(),Ls(this),this.addEventListener("slotchange",()=>{this.processSlots()})}firstUpdated(r){var e;super.firstUpdated(r),this.processSlots(),this.resetRegistry(),this.registryRef.value&&((e=this.registryRef.value)==null||e.registry.palette.setPalette(this.palette),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}),this.registryRef.value.registry.groups.addListener(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}))}processSlots(){setTimeout(()=>{this.structure=this.slottedElements.filter(r=>r instanceof an).map(r=>({label:r.getAttribute("label"),description:r.getAttribute("description"),lat:r.getAttribute("lat"),lon:r.getAttribute("lon"),files:Array.from(r.children).filter(e=>e instanceof Li&&e.hasAttribute("lrc")).map(e=>({lrc:e.getAttribute("lrc"),png:e.getAttribute("png"),label:e.getAttribute("label")}))})).filter(r=>r.files.length>0)},1e3)}actionMainOpen(){this.state="main",this.resetRegistry(),setTimeout(()=>{this.group=void 0,this.file=void 0},0)}actionGroupOpen(r){this.resetRegistry(),setTimeout(()=>{this.group=r,this.columns=Math.min(4,r.files.length),r.files.length>1?this.state="group":(this.state="file",this.file=r.files[0])},0)}actionDetailOpen(r){if(this.group===void 0)throw new Error("Group not yet set");this.state="file",this.resetRegistry(),setTimeout(()=>{this.file=r},0)}actionDetailClose(){this.state="group",this.resetRegistry(),setTimeout(()=>{this.file=void 0},0)}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var r;(r=this.registryRef.value)==null||r.registry.range.applyMinmax()}))}renderMain(){if(this.structure===void 0)return p`<thermal-loading label="Načítám data"></thermal-loading>`;const e=this.structure.map(t=>{const{files:i,...s}=t;return{...s,file:i[0],group:t}}).map((t,i)=>{const s=t.label??`group_preview_${i}`;return p`<group-provider slug="${s}" autoclear="true">
                <button class="group-thumbnail" @click="${()=>this.actionGroupOpen(t.group)}">
                    <div class="header">
                        <div class="info">
                            <div class="title">${t.label}</div>
                            <div class="count">${$(S.numfiles,{num:t.group.files.length})}</div>
                        </div>
                        <div class="button">
                            ${t.group.files.length>1?p`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`:p`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`}
                        </div>
                    </div>
                    <file-provider thermal="${t.file.lrc}" batch="true" autoclear="true">
                        <file-canvas></file-canvas>
                    </file-provider>
                </button>
            </group-provider>`});return p`
            <div class="main">
                ${e}
            </div>
        `}renderGroup(){return this.structure===void 0||this.group===void 0?p`<thermal-loading></thermal-loading`:this.renderBrowser(p`
            <group-provider slug="${this.group.label??`group_detail_${Math.random()}`}" autoclear="true">

                <group-chart slot="pre"></group-chart>

                <header>

                    <thermal-button variant="foreground" @click="${()=>this.actionMainOpen()}">x</thermal-button>

                    <thermal-dropdown>
                        <span slot="invoker">${this.group.label}</span>
                        ${this.structure.filter(r=>{var e;return r.label!==((e=this.group)==null?void 0:e.label)}).map(r=>p`<div slot="option">
                                <thermal-button @click="${()=>this.actionGroupOpen(r)}">${r.label}</thermal-button>
                            </div>`)}
                    </thermal-dropdown>

                    <group-download-dropdown></group-download-dropdown>

                    <div>
                        <input type="range" min="1" max="4" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${$(S.columns,{num:this.columns})}</div>
                    </div>
                    
                    <group-analysis-sync-button></group-analysis-sync-button>

                </header>

                ${this.group.description?p`<section class="group-description">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>${this.group.description}</p>
                    </section>`:P}

                <section class="files columns_${this.columns}">
            
                    ${this.group.files.map(r=>p`<file-provider thermal="${r.lrc}" batch="true" autoclear="true">
                        <file-thumbnail .ondetail="${()=>this.actionDetailOpen(r)}"></file-thumbnail>
                    </file-provider>`)}
            
                </section>

            </group-provider>
        `)}renderFile(){return this.structure===void 0||this.group===void 0||this.file===void 0?p`<thermal-loading></thermal-loading`:this.renderBrowser(p`<group-provider slug="${this.file.lrc}" autoclear="true">

            <file-provider batch="true" autoclear="true" thermal="${this.file.lrc}">
                <file-detail label="${this.group.label}" .onback="${()=>{var r;((r=this.group)==null?void 0:r.files.length)===1?this.actionMainOpen():this.actionDetailClose()}}"></file-detail>
            </file-provider>

        </group-provider>`)}renderBrowser(r){return p`<div class="browser state_${this.state}">
            <section>
                <group-tool-bar></group-tool-bar>
            </section>
            <section>
                ${r}
            </section>
        </div>`}render(){return p`<manager-provider slug="${this.UUID}">
            <registry-provider slug="${this.UUID}" ${De(this.registryRef)} palette="${this.palette}">
                <thermal-app 
                    author="${Ge(this.author)}" 
                    license="${this.license}" 
                    showfullscreen="true"
                    label="${this.label}"
                    .onlabel="${()=>this.actionMainOpen()}"
                >

                    ${this.structure!==void 0?p`
                        <registry-histogram slot="pre" expandable="true"></registry-histogram>
                        <registry-range-slider slot="pre"></registry-range-slider>
                        <registry-ticks-bar slot="pre"></registry-ticks-bar>
                        `:P}
                    <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                    <registry-range-full-button slot="bar-pre"></registry-range-full-button>
                    <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>

                    <thermal-dialog label="${$(S.config)}" slot="bar-post">
                        <thermal-button slot="invoker" variant="plain">
                            <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                            </svg>
                        </thermal-button>
                        <div slot="content">
                            <table>
                                <png-export-panel></png-export-panel>
                                <registry-display-panel></registry-display-panel>
                            </table>
                        </div>
                    </thermal-dialog>

                    ${this.state==="main"?this.renderMain():P}
                    ${this.state==="group"?this.renderGroup():P}
                    ${this.state==="file"?this.renderFile():P}

                    <slot></slot>


                </thermal-app>
            </registry-provider>
        </manager-provider>`}};Rt.styles=ce`
        .group-thumbnail {
            
            margin: 0;
            padding: 0;
            cursor: pointer;

            overflow: hidden;
            width: 100%;

            border-radius: var(--thermal-radius);
            border: 1px solid var(--thermal-slate);

            background: var(--thermal-slate-light);
            color: var(--thermal-foreground);

            transition: all .4s ease-in-out;

            box-shadow: 0 0 5px var(--thermal-slate);

            div.header {

                display: grid;
                grid-template-columns: auto 1.5em;
                padding: var(--thermal-gap);
                gap: var(--thermal-gap);
                text-align: left;

                .title {
                    font-weight: bold;
                    font-size: 1.2em;
                    margin-bottom: .5em;
                }

                .count {
                    font-size: .9em;
                    opacity: .8;
                }

                .button {
                    opacity: .8;
                }
            }

            file-provider {
                overflow: hidden;
                display: block;
            }

            file-canvas {
                overflow: hidden;
                display: block;
                transition: all .4s ease-in-out;
            }

            &:hover,
            &:focus {
                background: var(--thermal-background);
                box-shadow: 0 0 15px var(--thermal-slate-dark);
                file-canvas {
                    transform: scale(1.1);
                }
            }
        }

        .browser {
            display: grid;
            grid-template-columns: 3em 1fr;

            &.state_file {
                file-provider {
                    display: block;
                    background: var(--thermal-background);
                    padding: var(--thermal-gap);
                    border-radius: var(--thermal-radius);
                    border: 1px solid var(--thermal-slate);
                }
            }
        
            &.state_group {
                group-provider {

                    display: block;
                    width: 100%;
                    box-sizing: border-box;
                    padding: var(--thermal-gap);
                    border: 1px solid var(--thermal-slate);
                    border-radius: var(--thermal-radius);

                    header {
                        display: flex;
                        gap: 5px;
                        margin-bottom: var(--thermal-gap);
                    }

                    .group-description {
                        border: 1px solid var(--thermal-slate);
                        border-radius: var(--thermal-radius);
                        padding: var(--thermal-gap);
                        box-sizing: border-box;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: var(--thermal-gap);
                        margin-bottom: var(--thermal-gap);

                        svg {
                            opacity: .8;
                            width: 1em;
                        }

                        p {
                            margin: 0;
                            padding: 0;
                            font-size: calc(var(--thermal-gap) * .8);
                        }
                    }

                    .files {

                        display: grid;
                        margin: calc( var(--thermal-gap) * .5 * -1);

                        &.columns_1 { grid-template-columns: 100%; }
                        &.columns_2 { grid-template-columns: repeat( 2, 50% ); }
                        &.columns_3 { grid-template-columns: repeat( 3, calc(100% / 3) ); }
                        &.columns_4 { grid-template-columns: repeat( 4, calc(100% / 4) ); }
                        &.columns_5 { grid-template-columns: repeat( 5, calc(100% / 5) ); }
                        &.columns_6 { grid-template-columns: repeat( 6, calc(100% / 6) ); }
                        &.columns_7 { grid-template-columns: repeat( 7, calc(100% / 7) ); }
                        &.columns_8 { grid-template-columns: repeat( 8, calc(100% / 8) ); }
                        &.columns_9 { grid-template-columns: repeat( 9, calc(100% / 9) ); }
                        &.columns_10 { grid-template-columns: repeat( 10, calc(100% / 10) ); }

                        file-thumbnail {
                            padding: calc( var(--thermal-gap) * .5);
                        }
                    }
                }
            }
        }


        .main {

            display: grid;
            grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
            gap: var(--thermal-gap);

            group-provider {
                width: 100%;
            }
        }
    `;Yt([m({type:String,reflect:!0})],Rt.prototype,"author",2);Yt([m({type:String,reflect:!0})],Rt.prototype,"label",2);Yt([m({type:String,reflect:!0})],Rt.prototype,"license",2);Yt([m({type:String,reflect:!0,attribute:!0})],Rt.prototype,"palette",2);Yt([w(),di({flatten:!0})],Rt.prototype,"slottedElements",2);Yt([w()],Rt.prototype,"structure",2);Yt([w()],Rt.prototype,"state",2);Yt([w()],Rt.prototype,"group",2);Yt([w()],Rt.prototype,"file",2);Yt([Y({context:Ti})],Rt.prototype,"pngExportWidth",2);Yt([Y({context:Ms})],Rt.prototype,"pngExportWidthSetterContext",2);Yt([Y({context:Ii})],Rt.prototype,"pngExportFs",2);Yt([Y({context:Rs})],Rt.prototype,"pngExportFsSetterContext",2);Yt([Y({context:rs}),m({reflect:!0,converter:Os})],Rt.prototype,"locale",2);Yt([w()],Rt.prototype,"columns",2);Rt=Yt([Z("thermal-gallery-app")],Rt);const Rl="manager-instance",Ln="manager-palette-context",Tl="manager-smooth-context",Xa="manager-graph-function-context",On="tool-context",En="tools-context",p0=new Al;window.Thermal={managers:new Map};window.Thermal.managers.set("default",p0);const $u=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new Al(void 0,e);return window.Thermal.managers.set(r,t),t}},f0=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};var g0=Object.defineProperty,ku=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&g0(e,t,s),s};class Ka extends Xe{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Hr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=$u(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&f0(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(Hr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:Hr[e]}}render(){return p`<slot></slot>`}}ku([Y({context:On})],Ka.prototype,"tool");ku([Y({context:En})],Ka.prototype,"tools");var m0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?v0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&m0(e,t,s),s};let Gr=class extends Ka{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Hr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}};pi([Y({context:Rl})],Gr.prototype,"manager",2);pi([m({type:String,reflect:!0,attribute:!0})],Gr.prototype,"slug",2);pi([Y({context:Ln}),m({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:Hr[r]}),toAttribute:r=>r.key.toString()}})],Gr.prototype,"palette",2);pi([Y({context:Tl}),m({type:String,reflect:!0,attribute:!0})],Gr.prototype,"smooth",2);pi([Y({context:Xa}),m({type:String,reflect:!0,attribute:!0})],Gr.prototype,"graphSmooth",2);pi([m({type:Boolean,reflect:!0})],Gr.prototype,"autoclear",2);pi([Y({context:On})],Gr.prototype,"tool",2);pi([Y({context:En})],Gr.prototype,"tools",2);Gr=pi([Z("manager-provider")],Gr);var y0=Object.defineProperty,b0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&y0(e,t,s),s};class ss extends Xe{connectedCallback(){super.connectedCallback(),this.manager}}b0([ge({context:Rl,subscribe:!0}),w()],ss.prototype,"manager");const Il="registry-instance",zl="registry-opacity",Za="registry-range-from",Ja="registry-range-to",Cu="registry-loading",Ul="registry-min",Fl="registry-max",_u="registry-highlight",Dn="registry-highlight-setter";var w0=Object.defineProperty,Pu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&w0(e,t,s),s};class Qa extends ss{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return p`<slot></slot>`}}Pu([Y({context:_u})],Qa.prototype,"highlight");Pu([Y({context:Dn})],Qa.prototype,"setHighlight");var x0=Object.defineProperty,S0=Object.getOwnPropertyDescriptor,Xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?S0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&x0(e,t,s),s};let Dr=class extends Qa{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}};Xr([m({type:String,reflect:!0,attribute:!0})],Dr.prototype,"slug",2);Xr([Y({context:Il})],Dr.prototype,"registry",2);Xr([Y({context:zl}),m({type:Number,reflect:!0,attribute:!0})],Dr.prototype,"opacity",2);Xr([Y({context:Ul}),w()],Dr.prototype,"min",2);Xr([Y({context:Fl}),w()],Dr.prototype,"max",2);Xr([Y({context:Za}),m({type:Number,reflect:!0,attribute:!0})],Dr.prototype,"from",2);Xr([Y({context:Ja}),m({type:Number,reflect:!0,attribute:!0})],Dr.prototype,"to",2);Xr([Y({context:Cu}),m({type:String,reflect:!0,attribute:!0})],Dr.prototype,"loading",2);Xr([m({type:Boolean,reflect:!0})],Dr.prototype,"autoclear",2);Dr=Xr([Z("registry-provider")],Dr);var $0=Object.defineProperty,k0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&$0(e,t,s),s};class Cr extends ss{connectedCallback(){super.connectedCallback(),this.registry}}k0([ge({context:Il,subscribe:!0})],Cr.prototype,"registry");class Au extends Cr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return p`<slot></slot>`}}const jl="group-instance";var C0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,eo=(r,e,t,i)=>{for(var s=i>1?void 0:i?_0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C0(e,t,s),s};let on=class extends Au{constructor(){super(...arguments),this.autoclear=!1}};eo([m({type:String,attribute:!0,reflect:!0})],on.prototype,"slug",2);eo([Y({context:jl})],on.prototype,"group",2);eo([m({type:Boolean,reflect:!0})],on.prototype,"autoclear",2);on=eo([Z("group-provider")],on);var P0=Object.defineProperty,A0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&P0(e,t,s),s};class Kr extends Cr{constructor(){super()}connectedCallback(){super.connectedCallback()}}A0([ge({context:jl,subscribe:!0})],Kr.prototype,"group");const Nl="file",Lu="failure",Wl="file-loading",L0="file-loaded",Hl="file-provider-element",Ou="file-ms-context",Bl="file-cursor",Eu="file-cursor-setter",to="playback",Du="duration",Vl="playing",Gl="playbackSpeed",Yl="recording",Mu="mayStop",O0="analysislist",E0="file-markers-context";var D0=Object.defineProperty,Zt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&D0(e,t,s),s};class jt extends Kr{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.speed=1,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new re,this.onSuccess=new re,this.onFailure=new re,this.onInstanceCreated=new re}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e)}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!=null&&i.trim().length>0)if(e.slots.hasSlot(t)){const s=e.slots.getSlot(t);s==null||s.recieveSerialized(i),s==null||s.analysis.setSelected(!1,!0)}else{const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return p`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}Zt([Y({context:Nl}),w()],jt.prototype,"file");Zt([Y({context:Lu}),w()],jt.prototype,"failure");Zt([Y({context:Wl}),w()],jt.prototype,"loading");Zt([Y({context:L0})],jt.prototype,"ready");Zt([Y({context:Du}),w()],jt.prototype,"duration");Zt([Y({context:to})],jt.prototype,"currentFrame");Zt([Y({context:Bl})],jt.prototype,"cursor");Zt([Y({context:Ou})],jt.prototype,"ms");Zt([Y({context:Gl})],jt.prototype,"speed");Zt([Y({context:Yl})],jt.prototype,"recording");Zt([Y({context:Vl})],jt.prototype,"playing");Zt([Y({context:Mu}),w()],jt.prototype,"mayStop");Zt([di({slot:"mark",flatten:!0})],jt.prototype,"marksQueriedInternally");Zt([Y({context:E0})],jt.prototype,"marksProvidedBelow");Zt([Y({context:O0})],jt.prototype,"analysis");var M0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?R0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&M0(e,t,s),s};let Tt=class extends jt{constructor(){super(...arguments),this.keepinitialhistogram=!1,this.ms=0,this.speed=1,this.providedSelf=this,this.recording=!1,this.playing=!1}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof _i?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async redraw(){this.loading=!0,this.onLoadingStart.call(),this.file&&this.removeInstance(this.file),await this.load()}async asyncLoadCallback(r){r instanceof $n?(this.file!==void 0&&(this.file.unmountFromDom(),delete this.file),this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof Ki&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};Nt([m({type:Boolean,reflect:!0,converter:nt(!1)})],Tt.prototype,"keepinitialhistogram",2);Nt([m({type:Number,reflect:!0,attribute:!0}),Y({context:Ou})],Tt.prototype,"ms",2);Nt([m({type:Number,reflect:!0,attribute:!0}),Y({context:Gl})],Tt.prototype,"speed",2);Nt([Y({context:Hl})],Tt.prototype,"providedSelf",2);Nt([m({type:String,reflect:!0,attribute:!0}),Y({context:Yl})],Tt.prototype,"recording",2);Nt([m({type:String,reflect:!0,attribute:!0}),Y({context:Vl})],Tt.prototype,"playing",2);Nt([m({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Tt.prototype,"batch",2);Nt([m({type:String,attribute:!0,reflect:!0})],Tt.prototype,"thermal",2);Nt([m({type:String,attribute:!0,reflect:!0})],Tt.prototype,"visible",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis1",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis2",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis3",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis4",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis5",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis6",2);Nt([m({type:String,reflect:!0,attribute:!0})],Tt.prototype,"analysis7",2);Tt=Nt([Z("file-provider")],Tt);const Fc="[a-fA-F\\d:]",xi=r=>r&&r.includeBoundaries?`(?:(?<=\\s|^)(?=${Fc})|(?<=${Fc})(?=\\s|$))`:"",Lr="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",kt="[a-fA-F\\d]{1,4}",ro=`
(?:
(?:${kt}:){7}(?:${kt}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${kt}:){6}(?:${Lr}|:${kt}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${kt}:){5}(?::${Lr}|(?::${kt}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${kt}:){4}(?:(?::${kt}){0,1}:${Lr}|(?::${kt}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${kt}:){3}(?:(?::${kt}){0,2}:${Lr}|(?::${kt}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${kt}:){2}(?:(?::${kt}){0,3}:${Lr}|(?::${kt}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${kt}:){1}(?:(?::${kt}){0,4}:${Lr}|(?::${kt}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${kt}){0,5}:${Lr}|(?::${kt}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),T0=new RegExp(`(?:^${Lr}$)|(?:^${ro}$)`),I0=new RegExp(`^${Lr}$`),z0=new RegExp(`^${ro}$`),ql=r=>r&&r.exact?T0:new RegExp(`(?:${xi(r)}${Lr}${xi(r)})|(?:${xi(r)}${ro}${xi(r)})`,"g");ql.v4=r=>r&&r.exact?I0:new RegExp(`${xi(r)}${Lr}${xi(r)}`,"g");ql.v6=r=>r&&r.exact?z0:new RegExp(`${xi(r)}${ro}${xi(r)}`,"g");function U0(r){const e=(...t)=>r(...t);return Object.defineProperty(e,"name",{value:`functionTimeout(${r.name||"<anonymous>"})`,configurable:!0}),e}const{toString:F0}=Object.prototype;function j0(r){return F0.call(r)==="[object RegExp]"}const jc={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function N0(r,e={}){if(!j0(r))throw new TypeError("Expected a RegExp instance");const t=Object.keys(jc).map(s=>(typeof e[s]=="boolean"?e[s]:r[s])?jc[s]:"").join(""),i=new RegExp(e.source||r.source,t);return i.lastIndex=typeof e.lastIndex=="number"?e.lastIndex:r.lastIndex,i}function W0(r,e,{timeout:t}={}){try{return U0(()=>N0(r).test(e),{timeout:t})()}catch(i){throw i}}const H0=15,B0={timeout:400};function V0(r){return r.length>H0?!1:W0(ql.v4({exact:!0}),r,B0)}class G0 extends Error{constructor(e){super("Could not get the public IP address",e),this.name="IpNotFoundError"}}class Ru extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}const Y0={timeout:5e3},q0={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},X0=(r,e,t)=>{const i=new XMLHttpRequest;let s;const n=new Promise((a,o)=>{s=o,i.addEventListener("error",o,{once:!0}),i.addEventListener("timeout",o,{once:!0}),i.addEventListener("load",()=>{const l=i.responseText.trim();if(!l||!V0(l)){o();return}a(l)},{once:!0}),i.open("GET",r),i.timeout=e.timeout,i.send()});return n.cancel=()=>{i.abort(),s(new Ru)},n},K0=(r,e)=>{let t;const i=async function(){const s=[...q0[r],...e.fallbackUrls??[]];let n;for(const a of s)try{return t=X0(a,e,r),await t}catch(o){if(n=o,o instanceof Ru)throw o}throw new G0({cause:n})}();return i.cancel=()=>{t.cancel()},i};function Tu(r){return K0("v4",{...Y0,...r})}var Z0=Object.defineProperty,J0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Z0(e,t,s),s};class Xl extends Kr{connectedCallback(){super.connectedCallback(),Tu().then(e=>this.ip=e)}emitUpload(e,t){const i=window.navigator.userAgent,s=window.innerWidth,n=window.innerHeight,a=new Date().getTime(),o=new CustomEvent("uploaded",{bubbles:!0,cancelable:!1,detail:{ip:this.ip,userAgent:i,windowWidth:s,windowHeight:n,time:a,fileName:e,fileSize:t}});this.dispatchEvent(o)}}J0([w()],Xl.prototype,"ip");var Q0=Object.defineProperty,eb=Object.getOwnPropertyDescriptor,io=(r,e,t,i)=>{for(var s=i>1?void 0:i?eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Q0(e,t,s),s};let Ss=class extends Xl{constructor(){super(...arguments),this.container=_e(),this.hover=!1,this.uploading=!1}firstUpdated(e){if(super.firstUpdated(e),this.container.value!==void 0){const t=this.manager.service.handleDropzone(this.container.value,!1);t.onMouseEnter.add(this.UUID,()=>{console.log("mouseenter"),this.hover=!0}),t.onMouseLeave.add(this.UUID,()=>{console.log("mouseleave"),this.hover=!1}),t.onDrop.set(this.UUID,()=>{this.uploading=!0}),t.onProcessingEnd.add(this.UUID,async i=>{await Promise.all(i.map(async s=>{if(s instanceof _i){const n=await s.createInstance(this.group);this.emitUpload(n.fileName,n.bytesize)}})),this.uploading=!1})}}render(){const e={dropin:!0,hover:this.hover,uploading:this.uploading};return p`

            <div class="container">
            
                <div ${De(this.container)} class="${ai(e)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${$(S.dragorselectfile)}</div>
                        <thermal-button variant="foreground">${$(S.selectfile)}</thermal-button>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>
        
        `}};Ss.styles=ce`

        .container {
            color: var(--thermal-foreground);
        }

        .dropin {
            width: 100%;
            aspect-ratio: 4 / 3;
            max-height: 700px;
            transition: background .5s ease-in-out;
            border: 1px solid var( --thermal-slate-dark );
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

    `;io([w()],Ss.prototype,"container",2);io([w()],Ss.prototype,"hover",2);io([w()],Ss.prototype,"uploading",2);Ss=io([Z("group-dropin")],Ss);var tb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,so=(r,e,t,i)=>{for(var s=i>1?void 0:i?rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tb(e,t,s),s};let $s=class extends Xl{constructor(){super(...arguments),this.container=_e(),this.hover=!1,this.uploading=!1}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.listener=this.manager.service.handleDropzone(this.container.value,!1),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1}),this.listener.onDrop.set(this.UUID,()=>{this.uploading=!0}),this.listener.onProcessingEnd.add(this.UUID,async e=>{this.group.files.removeAllInstances(),await Promise.all(e.map(async t=>{if(t instanceof _i){const i=await t.createInstance(this.group);this.emitUpload(i.fileName,i.bytesize)}})),this.uploading=!1}))}render(){const r=this.uploading===!1?$(S.uploadafile):p`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;return p`


            <thermal-button @click="${()=>{this.listener&&this.listener.openFileDialog(!1)}}"><slot>${r}</slot></thermal-button>

            <div class="container">
            
                <div ${De(this.container)}></div>

            </div>
        
        `}};$s.styles=ce`

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


    
    `;so([w()],$s.prototype,"container",2);so([w()],$s.prototype,"hover",2);so([w()],$s.prototype,"uploading",2);$s=so([Z("group-dropin-input")],$s);var ib=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ib(e,t,s),s};let Yr=class extends Ka{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Hr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}};fi([Y({context:Rl})],Yr.prototype,"manager",2);fi([m({type:String})],Yr.prototype,"slug",2);fi([Y({context:Ln}),m({type:String,converter:{fromAttribute:r=>({key:r,data:Hr[r]}),toAttribute:r=>r.key.toString()}})],Yr.prototype,"palette",2);fi([Y({context:Tl}),m({type:String})],Yr.prototype,"smooth",2);fi([Y({context:Xa}),m({type:String})],Yr.prototype,"graphSmooth",2);fi([m({type:Boolean})],Yr.prototype,"autoclear",2);fi([Y({context:On})],Yr.prototype,"tool",2);fi([Y({context:En})],Yr.prototype,"tools",2);Yr=fi([Z("manager-mirror")],Yr);var nb=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,Zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nb(e,t,s),s};let Mr=class extends Qa{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}};Zr([m({type:String,reflect:!0,attribute:!0})],Mr.prototype,"slug",2);Zr([Y({context:Il})],Mr.prototype,"registry",2);Zr([Y({context:zl}),m({type:Number,reflect:!0,attribute:!0})],Mr.prototype,"opacity",2);Zr([Y({context:Ul}),w()],Mr.prototype,"min",2);Zr([Y({context:Fl}),w()],Mr.prototype,"max",2);Zr([Y({context:Za}),m({type:Number})],Mr.prototype,"from",2);Zr([Y({context:Ja}),m({type:Number})],Mr.prototype,"to",2);Zr([Y({context:Cu}),m({type:String})],Mr.prototype,"loading",2);Zr([m({type:Boolean})],Mr.prototype,"autoclear",2);Mr=Zr([Z("registry-mirror")],Mr);var ob=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,no=(r,e,t,i)=>{for(var s=i>1?void 0:i?lb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ob(e,t,s),s};let ln=class extends Au{constructor(){super(...arguments),this.autoclear=!1}};no([m({type:String})],ln.prototype,"slug",2);no([Y({context:jl})],ln.prototype,"group",2);no([m({type:Boolean})],ln.prototype,"autoclear",2);ln=no([Z("group-mirror")],ln);var hb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hb(e,t,s),s};let ar=class extends jt{constructor(){super(...arguments),this.providedSelf=this}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};mr([Y({context:Hl})],ar.prototype,"providedSelf",2);mr([Y({context:Nl}),m()],ar.prototype,"file",2);mr([m({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],ar.prototype,"batch",2);mr([m({type:String})],ar.prototype,"thermal",2);mr([m({type:String})],ar.prototype,"visible",2);mr([m({type:String})],ar.prototype,"analysis1",2);mr([m({type:String})],ar.prototype,"analysis2",2);mr([m({type:String})],ar.prototype,"analysis3",2);mr([m({type:String})],ar.prototype,"analysis4",2);mr([m({type:String})],ar.prototype,"analysis5",2);mr([m({type:String})],ar.prototype,"analysis6",2);mr([m({type:String})],ar.prototype,"analysis7",2);ar=mr([Z("file-mirror")],ar);var db=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,Iu=(r,e,t,i)=>{for(var s=i>1?void 0:i?ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&db(e,t,s),s};let Sa=class extends Cr{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return p`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return p`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Hr).map(([r,e])=>p`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};Sa.styles=ce`

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

    `;Iu([ge({context:Ln,subscribe:!0})],Sa.prototype,"value",2);Sa=Iu([Z("registry-palette-dropdown")],Sa);var pb=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,zu=(r,e,t,i)=>{for(var s=i>1?void 0:i?fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pb(e,t,s),s};let $a=class extends Cr{onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return p`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${$(S.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return p`
            <div class="container">
                ${Object.entries(Hr).map(([r,e])=>p`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

        `}};$a.styles=ce`

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

    `;zu([ge({context:Ln,subscribe:!0}),w()],$a.prototype,"value",2);$a=zu([Z("registry-palette-buttons")],$a);var gb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,Uu=(r,e,t,i)=>{for(var s=i>1?void 0:i?mb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gb(e,t,s),s};let ka=class extends ss{render(){return p`

            <div>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${$(S.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${$(S.smooth)}</thermal-button>

            </div>

        `}};ka.styles=ce`
    
        :host {}

    `;Uu([ge({context:Tl,subscribe:!0})],ka.prototype,"smooth",2);ka=Uu([Z("manager-smooth-switch")],ka);var vb=Object.defineProperty,yb=Object.getOwnPropertyDescriptor,Fu=(r,e,t,i)=>{for(var s=i>1?void 0:i?yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vb(e,t,s),s};let Ca=class extends ss{render(){return p`

            <div>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${$(S.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${$(S.smoothlines)}</thermal-button>

            </div>
        `}};Ca.styles=ce`
    
        :host {}

    `;Fu([ge({context:Xa,subscribe:!0})],Ca.prototype,"smooth",2);Ca=Fu([Z("manager-graph-smooth-switch")],Ca);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class cl extends xa{}cl.directiveName="unsafeSVG",cl.resultType=2;const Kl=bn(cl);var bb=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,Ts=(r,e,t,i)=>{for(var s=i>1?void 0:i?wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bb(e,t,s),s};let Oi=class extends ss{constructor(){super(...arguments),this.showhint=!0,this.showpopup=!1}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?P:p`
                <div class="switchers">
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return p`
                        
                        <button 
                            class=${ai(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Kl(t.icon)}

                            ${this.showpopup===!0?p`<div>${$(S[t.name])}</div>`:P}

                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?p` <div class="current">
                        <div class="tool-description">${$(S[this.hint])}</div>
                    </div>`:P}

        `}};Oi.styles=ce`

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

        position: relative;
    
    }

    .switch {

        line-height: 0;
        cursor: pointer;

        transition: all .2s ease-in-out;

        width: calc( var( --thermal-gap ) * 1.2 + 6px);
        height: calc( var( --thermal-gap ) * 1.2 + 6px);

        &.active {
            background: var(--thermal-background);
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


    .button > div {
        display: none;
        position: absolute;
        top: 2rem;
        padding: 7px 10px;
        background: var(--thermal-primary);
        color: var(--thermal-background);
        border: 1px solid var(--thermal-slate);
        border-radius: var(--thermal-radius);
        white-space: preserve nowrap;
        font-size: 12px;
        line-height: 16px;
    }

    .button:hover {
        color: var(--thermal-primary);
        border-color: var(--thermal-primary);
    }

    .button:hover > div {
        display: block;
    }

    `;Ts([ge({context:On,subscribe:!0}),w()],Oi.prototype,"value",2);Ts([ge({context:En,subscribe:!0}),w()],Oi.prototype,"tools",2);Ts([w()],Oi.prototype,"hint",2);Ts([m({type:String,reflect:!0,converter:nt(!1)})],Oi.prototype,"showhint",2);Ts([m({reflect:!0,converter:nt(!1)})],Oi.prototype,"showpopup",2);Oi=Ts([Z("group-tool-buttons")],Oi);var xb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,Zl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xb(e,t,s),s};let hn=class extends ss{connectedCallback(){super.connectedCallback()}onSelect(r){this.manager.tool.selectTool(r)}render(){return this.manager===void 0?P:p`

            <aside>
                    ${Object.entries(this.manager.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return p`
                        <div class="item">
                            <button 
                                class=${ai(t)} 
                                @click=${()=>{this.manager.tool.selectTool(e)}}
                            >
                                ${Kl(e.icon)}
                            </button>
                            <div class="tooltip">${$(S[e.name])}</div>
                        </div>
                        

                    `})}

            </aside>

        `}};hn.styles=ce`

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
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .tool-name {
        font-weight: bold;
    }


    .item {
        position: relative;
        .tooltip {
            display: none;
        }

        &:hover {
            .tooltip {
                display: block;
            }
        }
    }

    .tooltip {
        position: absolute;
        top: 0;
        left: calc( var( --thermal-gap ) * 1.2 + 15px );
        min-width: 100px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid var(--thermal-slate);
        background: var(--thermal-primary);
        border-radius: var(--thermal-radius);
        color: white;
        z-index: 9999999;
        white-space: preserve nowrap;
        font-size: calc( var(--thermal-fs) * .8 );
    }

    `;Zl([ge({context:On,subscribe:!0}),w()],hn.prototype,"value",2);Zl([ge({context:En,subscribe:!0}),w()],hn.prototype,"tools",2);hn=Zl([Z("group-tool-bar")],hn);var $b=Object.defineProperty,kb=Object.getOwnPropertyDescriptor,Cb=(r,e,t,i)=>{for(var s=i>1?void 0:i?kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$b(e,t,s),s};let Nc=class extends Xe{render(){return p`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                <png-export-panel></png-export-panel>
            </div>
        </thermal-dialog>`}};Nc=Cb([Z("png-export-config")],Nc);var _b=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,ju=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_b(e,t,s),s};let _a=class extends Cr{constructor(){super(...arguments),this.containerRef=_e()}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return p`
            <div ${De(this.containerRef)}>
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
        `}};_a.styles=ce`

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
    
    `;ju([ge({context:zl,subscribe:!0})],_a.prototype,"value",2);_a=ju([Z("registry-opacity-slider")],_a);var Ab=Object.defineProperty,Lb=Object.getOwnPropertyDescriptor,Ob=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ab(e,t,s),s};let Wc=class extends Cr{doAction(){this.registry.range.applyAuto()}render(){return p`
            <thermal-button @click=${this.doAction}>${$(S.automaticrange)}</thermal-button>
        `}};Wc=Ob([Z("registry-range-auto-button")],Wc);var Eb=Object.defineProperty,Db=Object.getOwnPropertyDescriptor,Nu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Db(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Eb(e,t,s),s};let dl=class extends Cr{constructor(){super(...arguments),this.buttonRef=_e()}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return p`
            <thermal-button 
                ${De(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${$(S.fullrange)}</thermal-button>
        `}};Nu([ge({context:Dn,subscribe:!0})],dl.prototype,"setter",2);dl=Nu([Z("registry-range-full-button")],dl);var Mb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,Mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mb(e,t,s),s};let Rr=class extends Cr{constructor(){super(...arguments),this.ticksRef=_e(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=_e()}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Rr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return p`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${De(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${De(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?p`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:P}

                    ${this.ticks.map(t=>p`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Rr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
        
        `}};Rr.TICK_WIDTH=40;Rr.TICK_FIXED=2;Rr.styles=ce`

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


    `;Mn([ge({context:_u,subscribe:!0})],Rr.prototype,"highlight",2);Mn([m({type:String,reflect:!0})],Rr.prototype,"placement",2);Mn([w()],Rr.prototype,"minmax",2);Mn([w()],Rr.prototype,"ticks",2);Rr=Mn([Z("registry-ticks-bar")],Rr);(()=>{var r=Object.defineProperty,e=Math.pow,t=(f,y,z)=>y in f?r(f,y,{enumerable:!0,configurable:!0,writable:!0,value:z}):f[y]=z,i=(f,y,z)=>(t(f,typeof y!="symbol"?y+"":y,z),z),s=(f,y)=>` ${y&&y.length>0?y.map(z=>`<link rel="stylesheet" href="${z}" />`).join(""):""} <style> ${f} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",d="min",g="max",b="step",x="round",A="type",_="theme",V="rtl",L="btt",D="disabled",q="keyboard-disabled",B="mousewheel-disabled",se="slider-width",C="slider-height",E="slider-radius",R="slider-bg",T="slider-bg-hover",j="slider-bg-fill",I="pointer-width",U="pointer-height",M="pointer-radius",K="pointer-bg",he="pointer-bg-hover",k="pointer-bg-focus",W="pointer-shadow",de="pointer-shadow-hover",ie="pointer-shadow-focus",Pe="pointer-border",Be="pointer-border-hover",Qe="pointer-border-focus",it="animate-onclick",ae="css-links",ue="vertical",Ce="horizontal",Te=(f,y,z,O,ne)=>{let be=y-f;return be===0?z:(O-z)*(ne-f)/be+z},et=f=>!isNaN(parseFloat(f))&&isFinite(f),Fe=(f,y)=>et(f)?Number(f):y,yi=(f,y)=>y===0?0:Math.round(f/y)*y,Ui=(f,y=1/0)=>{if(y===1/0)return f;let z=e(10,y);return Math.round(f*z)/z},tt=f=>f==null?!1:typeof f=="boolean"?f:f.trim().toLowerCase()==="true",cr=(f,y)=>{f.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:y}}))},ti=(f,y)=>{f.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:y}}))},co=(f,y)=>{f.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:y}}))},uo=(f,y)=>{f.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:y}}))},po=(f,y)=>{if(!y||y.length<=0)return;let z=y.map(ne=>et(ne)?Fe(ne,ne):ne),O={values:z||[]};O.value=z[0],O.value0=z[0],O.value1=z[0];for(let ne=1;ne<z.length;ne++)O[`value${ne+1}`]=z[ne];f.dispatchEvent(new CustomEvent("change",{detail:O}))},G=(f,y,z)=>{let O=0,ne,be,Ee,oe,le=!1,Ie=(Se,lt,Ot,_t,yt,bt)=>{let er=O;Ot!==void 0&&Se>Ot&&(Se=Ot),lt!==void 0&&Se<lt&&(Se=lt),O=Se;let tr=O;return(_t===ue&&bt||_t===Ce&&yt)&&(tr=100-tr),_t===ue?y.style.top=`${tr}%`:y.style.left=`${tr}%`,er!==O},je=Se=>Se===y||y.contains(Se),me=(Se,lt,Ot,_t)=>{ne=Se,be=lt,Ee=Ot,oe=_t},Ze=Se=>{le=Se,y.classList.toggle("disabled",le),le?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},wr=(Se,lt)=>{lt==null?y.removeAttribute(Se):y.setAttribute(Se,lt)},Bt=Se=>y.getAttribute(Se),xe=Se=>{if(!le){switch(Se.key){case"ArrowLeft":{Se.preventDefault(),typeof ne=="function"&&ne(z);break}case"ArrowRight":{Se.preventDefault(),typeof be=="function"&&be(z);break}case"ArrowUp":{Se.preventDefault(),typeof Ee=="function"&&Ee(z);break}case"ArrowDown":{Se.preventDefault(),typeof oe=="function"&&oe(z);break}}uo(f,Se)}},ze=()=>{le||cr(f,y)};return y.className=`pointer pointer-${z}`,y.addEventListener("keydown",xe),y.addEventListener("click",ze),{$pointer:y,get percent(){return O},get disabled(){return le},set disabled(Se){Ze(Se)},updatePosition:Ie,isClicked:je,setCallbacks:me,setAttr:wr,getAttr:Bt,destroy:()=>{y.removeEventListener("keydown",xe),y.removeEventListener("click",ze),y.remove()}}},ee=f=>{if(f==null)return;if(Array.isArray(f))return f;if(f.trim()==="")return;let y=f.split(","),z=[],O=!0;for(let ne=0;ne<y.length;ne++){let be=y[ne].trim();be!==""&&(z.push(be),et(be)||(O=!1))}return O?z.map(ne=>Number(ne)):z},Q=(f,y)=>y?y.findIndex(z=>z===f||z.toString().trim()===f.toString().trim()):-1,Le=f=>({updatePosition:(y,z,O,ne)=>{if(z.length<=0)return;let be=z.length===1,Ee=z[0],oe=z[z.length-1];y===ue?(f.style.removeProperty("width"),f.style.removeProperty("right"),f.style.removeProperty("left"),be?f.style.height=`${Ee}%`:f.style.height=`${Math.abs(Ee-oe)}%`,ne?(f.style.bottom="0%",be?f.style.top="auto":f.style.top=`${Math.min(100-oe,100-Ee)}%`):(f.style.bottom="auto",be?f.style.top="0%":f.style.top=`${Math.min(Ee,oe)}%`)):(f.style.removeProperty("height"),f.style.removeProperty("top"),f.style.removeProperty("bottom"),be?f.style.width=`${Ee}%`:f.style.width=`${Math.abs(Ee-oe)}%`,O?(f.style.right="0%",be?f.style.left="auto":f.style.left=`${Math.min(100-oe,100-Ee)}%`):(f.style.right="auto",be?f.style.left="0%":f.style.left=`${Math.min(Ee,oe)}%`))}}),ve="--animate-onclick",Ye="--width",N="--height",at="--panel-bg-border-radius",Ve="--panel-bg",$t="--panel-bg-hover",Lt="--panel-bg-fill",te="--pointer-width",J="--pointer-height",H="--pointer-border-radius",pe="--pointer-bg",$e="--pointer-bg-hover",We="--pointer-bg-focus",It="--pointer-shadow",Wt="--pointer-shadow-hover",Jt="--pointer-shadow-focus",Qt="--pointer-border",Fr="--pointer-border-hover",ye="--pointer-border-focus",Ae=(f,y,z)=>{let O=new Map;for(let ne of f.attributes){let be=ne.nodeName.trim().toLowerCase();if(!y.test(be))continue;let Ee=be.replace(/\D/g,"").trim(),oe=Ee===""||Ee==="0"||Ee==="1"?0:Fe(Ee,0)-1,le=z&&typeof z=="function"?z(ne.value):ne.value;O.set(oe,le)}return O},X=f=>{if(!f)return null;let y=f.getAttribute(ae);if(!y)return null;let z=y.split(";"),O=[];for(let ne of z)ne.trim()!==""&&O.push(ne.trim());return O},we=[[Ye,se,"sliderWidth",null],[N,C,"sliderHeight",null],[at,E,"sliderRadius",null],[Ve,R,"sliderBg",null],[$t,T,"sliderBgHover",null],[Lt,j,"sliderBgFill",null],[te,I,"pointer#Width",/^pointer([0-9]*)-width$/],[J,U,"pointer#Height",/^pointer([0-9]*)-height$/],[H,M,"pointer#Radius",/^pointer([0-9]*)-radius$/],[pe,K,"pointer#Bg",/^pointer([0-9]*)-bg$/],[$e,he,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[We,k,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[It,W,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Wt,de,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Jt,ie,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Qt,Pe,"pointer#Border",/^pointer([0-9]*)-border$/],[Fr,Be,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[ye,Qe,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Oe=(f,y,z)=>{let O=null,ne=[],be=new Map,Ee=(xe,ze=y)=>{let Se=[...ze.classList];for(let lt of Se)lt.startsWith(xe)&&y.classList.remove(lt)},oe=()=>{Ee("shape");let xe=y.querySelectorAll(".pointer");for(let ze of xe)Ee("shape",ze)},le=xe=>{O=xe,Ee("theme-"),typeof xe=="string"&&y.classList.add(`theme-${xe}`)},Ie=()=>{if(oe(),!(ne.length<=0)){y.classList.add("shape",`shape-${ne[0]}`);for(let xe=1;xe<ne.length;xe++){let ze=ne[xe];if(!ze)continue;let Se=y.querySelector(`.pointer-${xe}`);!Se||Se.classList.add("shape",`shape-${ze}`)}}},je=(xe,ze)=>{ne[xe]=ze,Ie()},me=()=>{oe();let xe=Ae(f,/^pointer([0-9]*)-shape$/);if(!(xe.size<=0)){for(let ze of xe){let Se=ze[0];ne[Se]=ze[1]}Ie()}},Ze=(xe,ze)=>`${xe}-${ze}`,wr=(xe,ze,Se)=>{let lt=z[Se];if(!lt)return;let Ot=Se===0?y:lt.$pointer;if(ze==null){be.has(Ze(xe,Se))&&be.delete(Ze(xe,Se)),Ot.style.removeProperty(xe);return}be.set(Ze(xe,Se),ze),Ot.style.setProperty(xe,ze)},Bt=(xe,ze)=>be.get(Ze(xe,ze));return(()=>{for(let xe of we){let[ze,Se,lt,Ot]=xe;if(Ot){let yt=Ae(f,Ot);for(let bt of yt){let er=bt[0],tr=bt[1];wr(ze,tr,er)}}else{let yt=f.getAttribute(Se);wr(ze,yt,0)}let _t=[];if(lt.indexOf("#")===-1)_t.push([lt,0]);else{_t.push([lt.replace("#",""),0]),_t.push([lt.replace("#","0"),0]),_t.push([lt.replace("#","1"),0]);for(let yt=1;yt<z.length;yt++)_t.push([lt.replace("#",(yt+1).toString()),yt])}for(let yt of _t)try{let bt=yt[0],er=yt[1];Object.prototype.hasOwnProperty.call(f,bt)||Object.defineProperty(f,bt,{get(){return Bt(ze,er)},set:tr=>{wr(ze,tr,er)}})}catch(bt){console.error(bt)}}le(f.getAttribute(_)),me()})(),{setStyle:wr,getStyle:Bt,get theme(){return O},set theme(xe){le(xe)},get pointerShapes(){return ne},setPointerShape:je}},Me="animate-on-click",Ke="range-dragging",Re=(f,y,z,O)=>{let ne=[],be=je=>{for(let me of ne)me.update&&typeof me.update=="function"&&me.update(je)},Ee=()=>{for(let je of ne)je.destroy&&typeof je.destroy=="function"&&je.destroy()},oe=(je,me)=>{for(let Ze of ne)Ze.onAttrChange&&typeof Ze.onAttrChange=="function"&&Ze.onAttrChange(je,me)},le=je=>{if(je.gettersAndSetters){for(let me of je.gettersAndSetters)if(!(!me.name||!me.attributes))try{Object.prototype.hasOwnProperty.call(f,me.name)||Object.defineProperty(f,me.name,me.attributes)}catch(Ze){console.error("defineSettersGetters error:",Ze)}}},Ie=je=>{var me;if(!je.css)return;let Ze=(me=f.shadowRoot)==null?void 0:me.querySelector("style");!Ze||(Ze.innerHTML+=je.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let je of window.tcRangeSliderPlugins){let me=je();ne.push(me),me.init&&typeof me.init=="function"&&(me.init(f,y,z,O),le(me),Ie(me))}},update:be,onAttrChange:oe,destroy:Ee}},zt=10,gt=20,Ht=(f,y)=>{let z=new Map,O=/^value([0-9]*)$/;for(let oe of f.attributes){let le=oe.nodeName.trim().toLowerCase();if(!O.test(le))continue;let Ie=le.replace("value","").trim(),je=Ie===""||Ie==="0"||Ie==="1"?0:Fe(Ie,0)-1,me=et(oe.value)?Fe(oe.value,0):oe.value;z.set(je,me)}let ne=Math.max(...Array.from(z.keys())),be=[];be.push([G(f,y,0),z.get(0)]);let Ee=y;for(let oe=1;oe<=ne;oe++){let le=y.cloneNode(!0);Ee.after(le),Ee=le,be.push([G(f,le,oe),z.get(oe)])}return be},ch=(f,y,z,O,ne,be,Ee)=>{try{Object.defineProperty(f,O,{configurable:!0,get(){if(!y)return;let oe=y.pointers[z];if(!oe)return;let le=y.getTextValue(oe.percent);return et(le)?Fe(le,le):le},set:oe=>{y.pointers[z]?y==null||y.setValue(oe,z):y==null||y.addPointer(oe)}}),Object.defineProperty(f,ne,{configurable:!0,get(){var oe,le;return(le=(oe=y==null?void 0:y.pointers[z])==null?void 0:oe.getAttr("aria-label"))!=null?le:void 0},set:oe=>{!y||y.setAriaLabel(z,oe)}}),Object.defineProperty(f,be,{configurable:!0,get(){var oe,le;return(le=(oe=y==null?void 0:y.styles)==null?void 0:oe.pointerShapes[z])!=null?le:null},set:oe=>{!y||!y.styles||y.styles.setPointerShape(z,oe)}}),Object.defineProperty(f,Ee,{configurable:!0,get(){var oe;return(oe=y==null?void 0:y.pointers[z].disabled)!=null?oe:!1},set:oe=>{if(!y)return;let le=y==null?void 0:y.pointers[z];!le||(le.disabled=oe)}})}catch(oe){console.error(oe)}},ep=(f,y)=>{let z=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let O=2;O<zt;O++)z.push([`value${O}`,`ariaLabel${O}`,`pointer${O}Shape`,`pointer${O}Disabled`,O-1]);for(let O of z)ch(f,y,O[4],O[0],O[1],O[2],O[3])},dh=(f,y,z)=>{var O;let ne=(O=z.shadowRoot)==null?void 0:O.querySelector(".container");if(ne)for(let be of f)y?ne.prepend(be.$pointer):ne.append(be.$pointer)},tp=(f,y)=>{if(!(!y||f.length<=1)){for(let z of f)z.$pointer.style.zIndex=gt.toString();y.$pointer.style.zIndex=(gt*2).toString()}},fo=0,Ns=100,as=2,uh="0.3s",rp=(f,y,z)=>{let O=z.map(v=>v[0]),ne=null,be=null,Ee=null,oe=null,le=fo,Ie=Ns,je,me,Ze=Ce,wr=as,Bt=!1,xe=!1,ze=!1,Se=0,lt=1/0,Ot=!1,_t,yt,bt=!1,er=!1,tr=!1,bi=uh,ph=[],fh=v=>{bt||(v.preventDefault&&v.preventDefault(),Fi(v),window.addEventListener("mousemove",Fi),window.addEventListener("mouseup",Fn),ti(f,v))},Fn=v=>{bt||(_t=void 0,yt=void 0,window.removeEventListener("mousemove",Fi),window.removeEventListener("mouseup",Fn),bi&&y.classList.add(Me),co(f,v))},np=(v,F)=>{if(O.length<=0)return;if(O.length===1)return O[0].isClicked(v)&&bi&&y.classList.remove(Me),O[0];let fe=op(v);if(Ot){let qe=F,Ar=Nn(qe);Ar!==void 0&&(qe=yi(qe,Ar)),fe?(_t=qe,yt=0,bi&&y.classList.remove(Me)):_t!==void 0&&(yt=qe-_t,_t=qe)}if(!ap(v)&&!fe){for(let qe of O)if(!(!qe.isClicked(v)||qe.disabled))return bi&&y.classList.remove(Me),qe;for(let qe of O)if(ne===qe)return qe}let rt=1/0,wt=null;for(let qe of O){if(qe.disabled)continue;let Ar=Math.abs(F-qe.percent);Ar<rt&&(rt=Ar,wt=qe)}return wt},gh=()=>O.findIndex(v=>ne===v&&!v.disabled),Fi=v=>{let F;if(Ze===ue){let{height:rt,top:wt}=y.getBoundingClientRect(),qe=v.type.indexOf("mouse")!==-1?v.clientY:v.touches[0].clientY;F=Math.min(Math.max(0,qe-wt),rt)*100/rt}else{let{width:rt,left:wt}=y.getBoundingClientRect(),qe=v.type.indexOf("mouse")!==-1?v.clientX:v.touches[0].clientX;F=Math.min(Math.max(0,qe-wt),rt)*100/rt}if((Bt||xe)&&(F=100-F),ne=np(v.target,F),ne&&tp(O,ne),Ot&&O.length>1&&yt!==void 0){let rt=O[0],wt=O[O.length-1],qe=rt.percent+yt<0,Ar=wt.percent+yt>100;if(qe||Ar)return;for(let Xn=0;Xn<O.length;Xn++)rr(Xn,O[Xn].percent+yt);return}let fe=gh();fe!==-1&&(rr(fe,F),ne==null||ne.$pointer.focus())},jn=v=>{if(bt||document.activeElement!==f||ne!=null&&ne.disabled)return;v.stopPropagation(),v.preventDefault();let F=v.deltaY<0,fe=Bt||xe,rt=F?!fe:fe,wt=gh();wt!==-1&&(rt?Ws(wt,O[wt].percent):Hs(wt,O[wt].percent))},mh=v=>{bt||er||(Ze===ue?xe?rr(v,100):rr(v,0):Bt?Hs(v,O[v].percent):Ws(v,O[v].percent))},vh=v=>{bt||er||(Ze===ue?xe?rr(v,0):rr(v,100):Bt?Ws(v,O[v].percent):Hs(v,O[v].percent))},yh=v=>{bt||er||(Ze===ue?xe?Hs(v,O[v].percent):Ws(v,O[v].percent):Bt?rr(v,100):rr(v,0))},bh=v=>{bt||er||(Ze===ue?xe?Ws(v,O[v].percent):Hs(v,O[v].percent):Bt?rr(v,0):rr(v,100))},ap=v=>v.classList.contains("panel"),op=v=>v.classList.contains("panel-fill"),Ws=(v,F)=>{if(F===void 0)return;let fe=Nn(F);fe==null&&(fe=1),F-=fe,F<0&&(F=0),rr(v,F)},Hs=(v,F)=>{if(F===void 0)return;let fe=Nn(F);fe==null&&(fe=1),F+=fe,F>100&&(F=100),rr(v,F)},ji=()=>{!oe||oe.update({percents:wh(),values:xh(),$pointers:Sh(),min:$h(),max:kh(),data:vo(),step:mo(),round:bo(),type:yo(),textMin:Wn(),textMax:Hn(),rightToLeft:So(),bottomToTop:$o(),pointersOverlap:Po(),pointersMinDistance:wo(),pointersMaxDistance:xo(),rangeDragging:Ao(),disabled:ko(),keyboardDisabled:Co(),mousewheelDisabled:_o()})},lp=()=>{ji()},hp=v=>{if(!(ze||O.length<=1||Ie===le))if(v===0){let F=lt*100/(Ie-le);return Math.max(0,O[v+1].percent-F)}else{let F=Se*100/(Ie-le);return Math.min(O[v-1].percent+F,100)}},cp=v=>{if(!(ze||O.length<=1||Ie===le))if(v===O.length-1){let F=lt*100/(Ie-le);return Math.min(O[v-1].percent+F,100)}else{let F=Se*100/(Ie-le);return Math.max(0,O[v+1].percent-F)}},Nn=v=>{let F;if(typeof je=="function"){let fe=Te(0,100,le,Ie,v);F=je(fe,v)}else F=je;if(et(F)){let fe=Ie-le;return F=fe===0?0:F*100/fe,F}},os=v=>{if(v===void 0)return;let F=Te(0,100,le,Ie,v);return me!==void 0?me[Math.round(F)]:Ui(F,wr)},Wn=()=>me!==void 0?me[le]:le,Hn=()=>me!==void 0?me[Ie]:Ie,mo=()=>je,dp=v=>{var F;return v<=0||ze?Wn():(F=os(O[v-1].percent))!=null?F:""},up=v=>{var F;return O.length<=1||v>=O.length-1||ze?Hn():(F=os(O[v+1].percent))!=null?F:""},wh=()=>O.map(v=>v.percent),xh=()=>O.map(v=>os(v.percent)),Sh=()=>O.map(v=>v.$pointer),$h=()=>le,kh=()=>Ie,vo=()=>me,yo=()=>Ze,bo=()=>wr,wo=()=>Se,xo=()=>lt,pp=v=>ph[v],So=()=>Bt,$o=()=>xe,ko=()=>bt,Co=()=>er,_o=()=>tr,Po=()=>ze,Ao=()=>Ot,rr=(v,F)=>{if(F===void 0)return;let fe=Nn(F);fe!==void 0&&(F=yi(F,fe));let rt=O[v];if(!rt)return;let wt=rt.updatePosition(F,hp(v),cp(v),Ze,Bt,xe);be==null||be.updatePosition(Ze,O.map(qe=>qe.percent),Bt,xe),ji();for(let qe of O){let Ar=os(qe.percent);Ar!==void 0&&(qe.setAttr("aria-valuenow",Ar.toString()),qe.setAttr("aria-valuetext",Ar.toString()))}gp(),wt&&po(f,O.map(qe=>os(qe.percent)))},jr=()=>{for(let v=0;v<O.length;v++)rr(v,O[v].percent)},fp=(v,F)=>{le=me!==void 0?0:Fe(v,fo),Ie=me!==void 0?me.length-1:Fe(F,Ns),Bn(le),Vn(Ie)},gp=()=>{var v,F;for(let fe=0;fe<O.length;fe++){let rt=O[fe];rt.setAttr("aria-valuemin",((v=dp(fe))!=null?v:"").toString()),rt.setAttr("aria-valuemax",((F=up(fe))!=null?F:"").toString())}},Bn=v=>{le=Fe(v,fo),le>Ie&&(Ie=le+Ns),jr()},Vn=v=>{Ie=Fe(v,Ns),Ie<le&&(Ie=le+Ns),jr()},Ch=v=>{ze=!0;for(let F=0;F<v.length;F++)Gn(v[F],F);ze=!1;for(let F=0;F<v.length;F++)Gn(v[F],F)},Gn=(v,F)=>{let fe;me!==void 0?(fe=v==null?0:Q(v,me),fe===-1&&(fe=0)):(fe=Fe(v,le),fe<le&&(fe=le),fe>Ie&&(fe=Ie));let rt=Te(le,Ie,0,100,fe);rr(F,rt)},Yn=v=>{if(v==null){je=void 0;return}if(typeof v=="function"){je=v,jr();return}if(et(v)){je=Fe(v,1);let F=Math.abs(Ie-le);je>F&&(je=void 0),jr();return}je=void 0},Lo=v=>{ze=v,jr()},Oo=v=>{(!et(v)||v<0)&&(v=0),Se=v},Eo=v=>{(!et(v)||v<0)&&(v=1/0),lt=v},Do=v=>{bt=v,y.classList.toggle("disabled",bt),bt?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},_h=v=>{er=v},Ph=v=>{tr=v,tr?document.removeEventListener("wheel",jn):document.addEventListener("wheel",jn,{passive:!1})},Mo=v=>{if(v==null){me=void 0;return}if(me=ee(v),me===void 0||me.length<=0){me=void 0;return}Bn(0),Vn(me.length-1),je===void 0&&Yn(1)},Ro=v=>{var F;typeof v=="string"?Ze=v.trim().toLowerCase()===ue?ue:Ce:Ze=Ce;let fe=(F=f.shadowRoot)==null?void 0:F.querySelector(".range-slider-box");if(!fe)return;fe.className=`range-slider-box type-${Ze}`,jr();let rt=Ze===ue?"vertical":"horizontal";for(let wt of O)wt.setAttr("aria-orientation",rt)},To=v=>{Bt=v,O.length>1&&dh(O,Bt,f),jr(),ji()},Io=v=>{xe=v,O.length>1&&dh(O,xe,f),jr(),ji()},zo=v=>{wr=Fe(v,as),wr<0&&(wr=as),ji()},Ah=v=>{v==null||v.toString().trim().toLowerCase()==="false"?(bi=void 0,y.style.removeProperty(ve),y.classList.remove(Me)):(bi=v.toString(),y.style.setProperty(ve,bi),y.classList.add(Me))},Lh=(v,F)=>{let fe=O[v];!fe||(fe.setAttr("aria-label",F),ph[v]=F)},qn=v=>{if(_t=void 0,O.length<=1){Ot=!1,y.classList.remove(Ke);return}Ot=v,y.classList.toggle(Ke,Ot)},mp=()=>{Do(tt(f.getAttribute(D))),er=tt(f.getAttribute(q)),tr=tt(f.getAttribute(B));let v=Ae(f,/^pointer([0-9]*)-disabled$/,F=>tt(F));for(let F of v){let fe=F[0];!O[fe]||(O[fe].disabled=F[1])}},vp=()=>{let v=Ae(f,/^aria-label([0-9]*)$/);for(let F of v){let fe=F[0];Lh(fe,F[1])}},yp=v=>{let F=O.length,fe=O[F-1].$pointer,rt=fe.cloneNode(!0);fe.after(rt);let wt=G(f,rt,F);return wt.setCallbacks(mh,vh,yh,bh),O.push(wt),Gn(v,F),jr(),ji(),F},bp=()=>{let v=O.length,F=O[v-1];return F?(F.destroy(),O.pop(),O.length<=1&&qn(!1),jr(),ji(),v-1):-1};return(()=>{var v,F;for(let rt of O)rt.setCallbacks(mh,vh,yh,bh);let fe=(v=f.shadowRoot)==null?void 0:v.querySelector(".panel-fill");fe&&(be=Le(fe)),Ro(f.getAttribute(A)),To(tt(f.getAttribute(V))),Io(tt(f.getAttribute(L))),fp(f.getAttribute(d),f.getAttribute(g)),Yn(f.getAttribute(b)),Mo(f.getAttribute(u)),Ch(z.map(rt=>rt[1])),Lo(tt(f.getAttribute(a))),Oo(Fe(f.getAttribute(o),0)),Eo(Fe(f.getAttribute(l),1/0)),qn(tt(f.getAttribute(h))),zo(Fe(f.getAttribute(x),as)),mp(),vp(),Ee=Oe(f,y,O),Ah((F=f.getAttribute(it))!=null?F:uh),y.addEventListener("mousedown",fh),y.addEventListener("mouseup",Fn),y.addEventListener("touchmove",Fi),y.addEventListener("touchstart",Fi),tr||document.addEventListener("wheel",jn,{passive:!1}),oe=Re(f,lp,{setValues:Ch,setMin:Bn,setMax:Vn,setStep:Yn,setPointersOverlap:Lo,setPointersMinDistance:Oo,setPointersMaxDistance:Eo,setDisabled:Do,setType:Ro,setRightToLeft:To,setBottomToTop:Io,setRound:zo,setKeyboardDisabled:_h,setMousewheelDisabled:Ph,setRangeDragging:qn,setData:Mo},{getPercents:wh,getValues:xh,getPointerElements:Sh,getMin:$h,getMax:kh,getStep:mo,getData:vo,getType:yo,getRound:bo,getTextMin:Wn,getTextMax:Hn,isRightToLeft:So,isBottomToTop:$o,isDisabled:ko,isKeyboardDisabled:Co,isMousewheelDisabled:_o,isPointersOverlap:Po,isRangeDraggingEnabled:Ao,getPointersMinDistance:wo,getPointersMaxDistance:xo}),oe.init()})(),{get pointers(){return O},get styles(){return Ee},get pluginsManager(){return oe},get min(){return Wn()},get max(){return Hn()},get step(){return mo()},get pointersOverlap(){return Po()},set pointersOverlap(v){Lo(v)},get pointersMinDistance(){return wo()},set pointersMinDistance(v){Oo(v)},get pointersMaxDistance(){return xo()},set pointersMaxDistance(v){Eo(v)},get disabled(){return ko()},set disabled(v){Do(v)},get data(){return vo()},get type(){return yo()},set type(v){Ro(v)},get rightToLeft(){return So()},set rightToLeft(v){To(v)},get bottomToTop(){return $o()},set bottomToTop(v){Io(v)},get round(){return bo()},set round(v){zo(v)},get animateOnClick(){return bi},set animateOnClick(v){Ah(v)},get keyboardDisabled(){return Co()},set keyboardDisabled(v){_h(v)},get mousewheelDisabled(){return _o()},set mousewheelDisabled(v){Ph(v)},get rangeDragging(){return Ao()},set rangeDragging(v){qn(v)},setMin:Bn,setMax:Vn,setValue:Gn,setStep:Yn,setData:Mo,getTextValue:os,setAriaLabel:Lh,getAriaLabel:pp,addPointer:yp,removePointer:bp,destroy:()=>{y.removeEventListener("mousedown",fh),y.removeEventListener("mouseup",Fn),y.removeEventListener("touchmove",Fi),y.removeEventListener("touchstart",Fi),document.removeEventListener("wheel",jn);for(let v of O)v.destroy();oe==null||oe.destroy()}}},ip=(f,y,z)=>{let O=we.find(([oe,le,Ie,je])=>le.replace("#","")===y.replace(/\d+/g,""));if(O&&f.styles){let[oe,le,Ie,je]=O,me=y.replace(/\D/g,"").trim(),Ze=me===""||me==="0"||me==="1"?0:Fe(me,0)-1;f.styles.setStyle(oe,z,Ze);return}switch(f&&f.pluginsManager&&f.pluginsManager.onAttrChange(y,z),y){case d:{f.setMin(z);break}case g:{f.setMax(z);break}case b:{f.setStep(z);break}case a:{f.pointersOverlap=tt(z);break}case o:{f.pointersMinDistance=Fe(z,0);break}case h:{f.rangeDragging=tt(z);break}case l:{f.pointersMaxDistance=Fe(z,1/0);break}case D:{f.disabled=tt(z);break}case q:{f.keyboardDisabled=tt(z);break}case B:{f.mousewheelDisabled=tt(z);break}case u:{f.setData(z);break}case A:{f.type=z;break}case V:{f.rightToLeft=tt(z);break}case L:{f.bottomToTop=tt(z);break}case x:{f.round=Fe(z,as);break}case _:{f.styles&&(f.styles.theme=z);break}case it:{f.animateOnClick=z;break}}let ne=null;if(/^value([0-9]*)$/.test(y)&&(ne="value"),/^pointer([0-9]*)-disabled$/.test(y)&&(ne="pointer-disabled"),/^aria-label([0-9]*)$/.test(y)&&(ne="aria-label"),/^pointer([0-9]*)-shape$/.test(y)&&(ne="pointer-shape"),!ne)return;let be=y.replace(/\D/g,"").trim(),Ee=be===""||be==="0"||be==="1"?0:Fe(be,0)-1;switch(ne){case"value":{f.setValue(z,Ee);break}case"pointer-disabled":{let oe=f==null?void 0:f.pointers[Ee];if(!oe)return;oe.disabled=tt(z);break}case"aria-label":{f.setAriaLabel(Ee,z);break}case"pointer-shape":{f.styles&&f.styles.setPointerShape(Ee,z);break}}},sp=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(f){this.slider&&this.slider.setStep(f)}get step(){var f;return(f=this.slider)==null?void 0:f.step}set disabled(f){this.slider&&(this.slider.disabled=f)}get disabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.disabled)!=null?y:!1}set data(f){var y;(y=this.slider)==null||y.setData(f)}get data(){var f;return(f=this.slider)==null?void 0:f.data}set min(f){var y;(y=this.slider)==null||y.setMin(f)}get min(){var f;return(f=this.slider)==null?void 0:f.min}set max(f){var y;(y=this.slider)==null||y.setMax(f)}get max(){var f;return(f=this.slider)==null?void 0:f.max}set round(f){!this.slider||(this.slider.round=f)}get round(){var f,y;return(y=(f=this.slider)==null?void 0:f.round)!=null?y:as}set type(f){!this.slider||(this.slider.type=f??Ce)}get type(){var f;return((f=this.slider)==null?void 0:f.type)||Ce}set pointersOverlap(f){!this.slider||(this.slider.pointersOverlap=f)}get pointersOverlap(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersOverlap)!=null?y:!1}set pointersMinDistance(f){!this.slider||(this.slider.pointersMinDistance=f)}get pointersMinDistance(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersMinDistance)!=null?y:0}set pointersMaxDistance(f){!this.slider||(this.slider.pointersMaxDistance=f)}get pointersMaxDistance(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersMaxDistance)!=null?y:1/0}set theme(f){!this.slider||!this.slider.styles||(this.slider.styles.theme=f)}get theme(){var f,y,z;return(z=(y=(f=this.slider)==null?void 0:f.styles)==null?void 0:y.theme)!=null?z:null}set rtl(f){!this.slider||(this.slider.rightToLeft=f)}get rtl(){var f,y;return(y=(f=this.slider)==null?void 0:f.rightToLeft)!=null?y:!1}set btt(f){!this.slider||(this.slider.bottomToTop=f)}get btt(){var f,y;return(y=(f=this.slider)==null?void 0:f.bottomToTop)!=null?y:!1}set keyboardDisabled(f){!this.slider||(this.slider.keyboardDisabled=f)}get keyboardDisabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.keyboardDisabled)!=null?y:!1}set mousewheelDisabled(f){!this.slider||(this.slider.mousewheelDisabled=f)}get mousewheelDisabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.mousewheelDisabled)!=null?y:!1}set animateOnClick(f){!this.slider||(this.slider.animateOnClick=f)}get animateOnClick(){var f;return(f=this.slider)==null?void 0:f.animateOnClick}get rangeDragging(){var f,y;return(y=(f=this.slider)==null?void 0:f.rangeDragging)!=null?y:!1}set rangeDragging(f){this.slider&&(this.slider.rangeDragging=tt(f))}get externalCSSList(){return this._externalCSSList}addPointer(f){var y,z;if(!this.slider)return;let O=(z=(y=this.slider)==null?void 0:y.addPointer(f))!=null?z:0;ch(this,this.slider,O,`value${O+1}`,`ariaLabel${O+1}`,`pointerShape${O+1}`,`pointer${O+1}Disabled`)}removePointer(){var f;!this.slider||(f=this.slider)==null||f.removePointer()}addCSS(f){if(!this.shadowRoot)return;let y=document.createElement("style");y.textContent=f,this.shadowRoot.appendChild(y)}connectedCallback(){var f,y;if(!this.shadowRoot)return;this._externalCSSList=X(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let z=(f=this.shadowRoot)==null?void 0:f.querySelector(".pointer");if(!z)return;let O=(y=this.shadowRoot)==null?void 0:y.getElementById("range-slider");if(!O)return;let ne=Ht(this,z);this.slider=rp(this,O,ne),ep(this,this.slider),this._observer=new MutationObserver(be=>{be.forEach(Ee=>{var oe;if(!this.slider||Ee.type!=="attributes")return;let le=Ee.attributeName;!le||ip(this.slider,le,(oe=this.getAttribute(le))!=null?oe:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},go=sp;window.tcRangeSlider=go,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",go),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends go{})})();const Tb=r=>!isNaN(parseFloat(r))&&isFinite(r),ri=(r,e)=>Tb(r)?Number(r):e,qo=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const ta=40,ra=35,ia=30,Hc="#475569",Bc="#fff",Vc=20,Ib=()=>{let r=null,e=null,t=!1,i=ta,s=ra,n=ia,a=Hc,o=Bc,l="",h="",u,d=[],g=null,b=null;const x=()=>{g==null||g.classList.toggle("is-after",i<=0)},A=()=>{var W;const k=(W=r==null?void 0:r.shadowRoot)==null?void 0:W.querySelector("#range-slider");g=document.createElement("div"),g.classList.add("tooltips"),k.prepend(g),x()},_=k=>{const W=document.createElement("div");return W.style.zIndex=Vc.toString(),W.className=k,W},V=(k,W,de,ie,Pe)=>{k&&(W==="vertical"?(k.style.left=`${-i}px`,k.style.top=ie??"0"):(k.style.left=de??"0",k.style.top=`${-i}px`),k.style.width=`${s}px`,k.style.height=`${n}px`,k.style.background=a,k.style.color=o,k.style.zIndex=Pe.toString())},L=k=>{let W=k;return typeof u=="function"&&(W=u(k)),h==="prefix"?`${l}${W}`:`${W}${l}`},D=()=>{const k=(e==null?void 0:e.getValues())??[],W=(e==null?void 0:e.getPointerElements())??[],de=(e==null?void 0:e.getType())??"horizontal";if(k)for(let ie=0;ie<k.length;ie++){const Pe=d[ie];if(!Pe)continue;const Be=(k[ie]??"").toString();Pe.textContent=L(Be),V(Pe,de,W[ie].style.left,W[ie].style.top,W[ie].style.zIndex)}},q=()=>{const k=(e==null?void 0:e.getValues())??[];if(k){for(let W=0;W<k.length;W++){const de=_(`tooltip tooltip-${W+1}`);de.style.position="absolute",d.push(de),g==null||g.prepend(de)}D()}},B=()=>{r&&(b=new ResizeObserver(k=>{for(const W of k)D()}),b.observe(r))},se=k=>{t=k,t?(A(),q(),B()):he()},C=k=>{i=k,D()},E=k=>{s=k,D()},R=k=>{n=k,D()},T=k=>{a=k,D()},j=k=>{o=k,D()},I=k=>{l=k,D()},U=k=>{h=k,D()},M=k=>{u=k,D()},K=k=>{if(!t||!k.values)return;const W=(e==null?void 0:e.getPointerElements())??[],de=(e==null?void 0:e.getType())??"horizontal";for(let ie=0;ie<k.values.length;ie++){const Pe=k.values[ie],Be=d[ie];if(Pe===void 0&&Be){Be.remove(),d[ie]=void 0;continue}if(Pe!==void 0&&!Be){const it=_(`tooltip tooltip-${ie+1}`),ae=(Pe??"").toString();it.textContent=L(ae),it.style.position="absolute",V(it,de,W[ie].style.left,W[ie].style.top,W[ie].style.zIndex),d[ie]=it,g==null||g.append(it)}if(!Be)continue;const Qe=(Pe??"").toString();Be.textContent=L(Qe),V(Be,de,W[ie].style.left,W[ie].style.top,W[ie].style.zIndex)}},he=()=>{g==null||g.remove();for(const k of d)k&&k.remove();d=[],b==null||b.disconnect()};return{get name(){return"Moving Tooltip"},init:(k,W,de,ie)=>{r=k,e=ie,i=ri(k.getAttribute("moving-tooltip-distance-to-pointer"),ta),s=ri(k.getAttribute("moving-tooltip-width"),ra),n=ri(k.getAttribute("moving-tooltip-height"),ia),a=k.getAttribute("moving-tooltip-bg")||Hc,o=k.getAttribute("moving-tooltip-text-color")||Bc,l=k.getAttribute("moving-tooltip-units")||"",h=k.getAttribute("moving-tooltip-units-type")||"",se(qo(k.getAttribute("moving-tooltip")))},update:K,onAttrChange:(k,W)=>{k==="moving-tooltip"&&se(qo(W)),k==="moving-tooltip-distance-to-pointer"&&C(ri(W,ta)),k==="moving-tooltip-width"&&E(ri(W,ra)),k==="moving-tooltip-height"&&R(ri(W,ia)),k==="moving-tooltip-bg"&&T(W),k==="moving-tooltip-text-color"&&j(W),k==="moving-tooltip-units"&&I(W),k==="moving-tooltip-units-type"&&U(W)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:k=>{se(qo(k))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:k=>{C(ri(k,ta))}}},{name:"tooltipWidth",attributes:{get(){return s},set:k=>{E(ri(k,ra))}}},{name:"tooltipHeight",attributes:{get(){return n},set:k=>{R(ri(k,ia))}}},{name:"tooltipBg",attributes:{get(){return a},set:k=>{T(k)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:k=>{j(k)}}},{name:"tooltipUnits",attributes:{get(){return l},set:k=>{I(k)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:k=>{U(k)}}},{name:"formatTooltipValue",attributes:{get(){return u},set:k=>{M(k)}}}],css:`
.tooltip{
  background: #475569;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: ${Vc};
}  

.tooltip::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 6px;
    transform: translate(0%, -50%) rotate(45deg);
    background-color: inherit;
    z-index: -1;
    top: 100%;
}

.is-after .tooltip::after {
  top: 0;
}

.type-vertical .tooltip::after{
  transform: translate(-50%, 0%) rotate(45deg);
  left: 100%;
  top: auto;
}

.type-vertical .is-after .tooltip::after{
  left: 0%;
}

.animate-on-click .tooltip{
    transition: all var(--animate-onclick);
}
    `,destroy:he}};window.tcRangeSliderPlugins.push(Ib);(()=>{var r=(o,l,h,u,d)=>{let g=l-o;return g===0?h:(u-h)*(d-o)/g+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,d=null,g=!1,b=s,x=n,A=()=>{var C;let E=(C=o==null?void 0:o.shadowRoot)==null?void 0:C.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),d=document.createElement("div"),d.classList.add("mark-values"),h.append(d),E.append(h)},_=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},V=()=>{var C;if(!h||!l)return;let E=l.getMin(),R=l.getMax(),T=l.getType()==="vertical",j=l.isRightToLeft()||l.isBottomToTop();for(let U=0;U<b;U++){let M=document.createElement("div");M.classList.add("mark",`mark-${U}`);let K=b===0?0:U*100/(b-1);T?j?M.style.top=`${100-K}%`:M.style.top=`${K}%`:j?M.style.left=`${100-K}%`:M.style.left=`${K}%`,u==null||u.append(M)}let I=l.getData();for(let U=0;U<x;U++){let M=document.createElement("div");M.classList.add("mark-value",`mark-value-${U}`);let K=x===0?0:U*100/(x-1),he=r(0,x-1,E,R,U);M.textContent=(I?(C=I[Math.round(he)])!=null?C:"":he).toString(),T?j?M.style.top=`${100-K}%`:M.style.top=`${K}%`:j?M.style.left=`${100-K}%`:M.style.left=`${K}%`,d==null||d.append(M)}},L=(C,E)=>{se(),b=C,x=E,b<=0&&(b=s),x<=0&&(x=n),A(),V(),_()},D=C=>{g=C,g?(A(),V(),_()):se()},q=C=>{!h||h.style.setProperty("--marks-color",C)},B=C=>{!h||h.style.setProperty("--values-color",C)},se=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(C,E,R,T)=>{var j,I;l=T,o=C,g=i(o.getAttribute("marks")),g&&(L(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),q((j=o.getAttribute("marks-color"))!=null?j:"#cbd5e1"),B((I=o.getAttribute("marks-values-color"))!=null?I:"#475569"))},onAttrChange:(C,E)=>{C==="marks"&&D(i(E)),C==="marks-count"&&L(t(E,s),x),C==="marks-values-count"&&L(b,t(E,n)),C==="marks-color"&&q(E),C==="marks-values-color"&&B(E)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return g??!1},set:C=>{D(i(C))}}},{name:"marksCount",attributes:{get(){return b??s},set:C=>{L(t(C,s),x)}}},{name:"marksValuesCount",attributes:{get(){return b??s},set:C=>{L(b,t(C,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:C=>{q(C)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:C=>{B(C)}}}],destroy:se,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var zb=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,Jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let Sr=class extends Cr{constructor(){super(...arguments),this.hasInitialValues=!1,this.sliderRef=_e(),this.initialised=!1,this.loading=!1}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}getSlider(){var r;return(r=this.renderRoot)==null?void 0:r.querySelector("tc-range-slider")}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("loading")&&this.loading===!1&&(this.log("should initialise now"),this.initialiseSlider())}initialiseSlider(){this.initialised=!0,setTimeout(()=>{const r=this.sliderRef.value;r&&(r.addCSS(`
                    .tooltip {
                        font-size: 12px;
                    }
                    .pointer-shape {
                        border-radius: 0;
                        width: 10px;
                    }
                `),r.addEventListener("change",e=>{const i=e.detail;this.from=i.value1,this.to=i.value2}),r.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),r.addEventListener("onMouseDown",e=>{this.log(e)}))},0),this.registry.range.addListener(this.UUID,r=>{r&&(this.log("přišla hodnota",r),this.from!==void 0&&this.to!==void 0?this.max<r.from?(this.to=r.to,this.from=r.from):(this.from=r.from,this.to=r.to):(this.from=r.from,this.to=r.to),this.sliderRef.value&&(r.from&&this.from&&this.sliderRef.value.setAttribute("value1",this.from.toString()),r.to&&this.to&&this.sliderRef.value.setAttribute("value2",this.to.toString())))})}render(){return this.loading===!0?p`<div class="container loading">
                <div class"skeleton"></div>    
            </div>`:p`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${De(this.sliderRef)}
                slider-width="100%"
                slider-height="15px"
                animate-onclick="false"
                min="${this.min}"
                max="${this.max}"

                value1="${this.from}"
                value2="${this.to}"

                slider-radius="0"

                slider-bg="var( --thermal-slate )"
                slider-bg-hover="var( --thermal-slate )"
                slider-bg-fill="${this.palette.data.gradient}"
                pointer-shadow="0 0 5px var(--thermal-primary)"
                pointer-shadow-hover="0 0 10px var(--thermal-primary)"
                pointer-shadow-hover="0 0 10px var(--thermal-primary)"

                pointer-border="2px solid var(--thermal-primary)"
                pointer-border-hover="2px solid var(--thermal-primary)"
                pointer-border-focus="2px solid var(--thermal-primary)"
                pointer-bg="${this.palette.data.pixels[0]}"
                
                pointer2-border="2px solid var(--thermal-primary)"
                pointer2-border-hover="2px solid var(--thermal-primary)"
                pointer2-border-focus="2px solid var(--thermal-primary)"
                pointer2-bg="${this.palette.data.pixels[this.palette.data.pixels.length-1]}"
                
                generate-labels="true"

                moving-tooltip="true"
                moving-tooltip-distance-to-pointer="-30"
                moving-tooltip-width="40"
                moving-tooltip-height="20"
                moving-tooltip-bg="var(--thermal-slate-dark)"
                moving-tooltip-text-color="var(--thermal-background)"
                
            ></tc-range-slider>

        </div>

        <slot></slot>

        `}};Sr.styles=ce`

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
    
    `;Jr([ge({context:Ul,subscribe:!0}),w()],Sr.prototype,"min",2);Jr([ge({context:Fl,subscribe:!0}),w()],Sr.prototype,"max",2);Jr([ge({context:Za,subscribe:!0}),w()],Sr.prototype,"from",2);Jr([ge({context:Ja,subscribe:!0}),w()],Sr.prototype,"to",2);Jr([w()],Sr.prototype,"hasInitialValues",2);Jr([ge({context:Ln,subscribe:!0}),w()],Sr.prototype,"palette",2);Jr([w()],Sr.prototype,"sliderRef",2);Jr([w()],Sr.prototype,"initialised",2);Jr([w(),ge({context:Wl,subscribe:!0})],Sr.prototype,"loading",2);Sr=Jr([Z("registry-range-slider")],Sr);var Fb=Object.defineProperty,jb=Object.getOwnPropertyDescriptor,Rn=(r,e,t,i)=>{for(var s=i>1?void 0:i?jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fb(e,t,s),s};let ks=class extends Cr{constructor(){super(...arguments),this.fixed=2,this.separator="-"}render(){var r,e;return this.from===void 0||this.to===void 0?P:p`
            <div>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
        `}};Rn([ge({context:Za,subscribe:!0})],ks.prototype,"from",2);Rn([ge({context:Ja,subscribe:!0})],ks.prototype,"to",2);Rn([m({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],ks.prototype,"fixed",2);Rn([m({type:String,reflect:!0,attribute:!0})],ks.prototype,"separator",2);ks=Rn([Z("registry-range-display")],ks);var Nb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,zi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nb(e,t,s),s};let qr=class extends Cr{constructor(){super(...arguments),this.histogram=[],this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.loading=!1,this.error=!1}getClassName(){return"HistogramElement"}connectedCallback(){super.connectedCallback(),this.loading=this.registry.histogram.loading,this.registry.histogram.onCalculationStart.set(this.UUID,()=>{this.loading=!0,this.error=!1}),this.registry.histogram.onCalculationEnd.set(this.UUID,r=>{this.loading=!1,this.error=!r}),this.registry.loading.addListener(this.UUID,r=>{r===!0&&(this.loading=!0)})}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.loading.removeListener(this.UUID),this.registry.histogram.removeListener(this.UUID),this.registry.histogram.onCalculationStart.delete(this.UUID),this.registry.histogram.onCalculationEnd.delete(this.UUID)}render(){const r=this.histogram.length>0&&this.loading===!1;return p`

            <div class="container ${r?"ready":"loading"} ${this.error?"has-error":"is-ok"}">

                <div class="histogram ${this.expandable===!0?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{this.expandable===!0&&(this.expanded=!this.expanded)}}>

                    ${this.histogram.map(e=>p`
                            <div class="histogram-bar" data-height="${e.height}" data-percentage="${e.percentage}" data-count="${e.count}" data-from="${e.from}" data-to="${e.to}">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

                ${this.error===!0?p`<div class="error">Unable to calculate the histogram</div>`:P}

                <div class="spinner">
                    <span></span>
                </div>

            </div>
        
        `}};qr.styles=ce`

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


    `;zi([w()],qr.prototype,"histogram",2);zi([m({type:String,reflect:!0})],qr.prototype,"height",2);zi([m({type:String,reflect:!0})],qr.prototype,"heightExpanded",2);zi([m({type:Boolean,reflect:!0,converter:nt(!1)})],qr.prototype,"expandable",2);zi([w()],qr.prototype,"expanded",2);zi([w()],qr.prototype,"loading",2);zi([w()],qr.prototype,"error",2);qr=zi([Z("registry-histogram")],qr);var Hb=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,Vb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hb(e,t,s),s};let ul=class extends Kr{render(){const e=this.classList.contains("small")?"small":"";return p`
        
            <thermal-dropdown class="download ${e}">
            
                <span slot="invoker">${$(S.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${$(S.downloadoriginalfiles)}</thermal-button>
                    <small>${$(S.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(t=>t.export.downloadPng())}>${$(S.pngofindividualimages)}</thermal-button>
                    <small>${$(S.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${$(S.pngofentiregroup)}</thermal-button>
                    <small>${$(S.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${$(S.csvofanalysisdata)}</thermal-button>
                    <small>${$(S.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};ul.styles=ce`
    
    `;ul=Vb([Z("group-download-dropdown")],ul);var Gb=Object.defineProperty,Tn=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Gb(e,t,s),s};class mt extends Kr{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}Tn([ge({context:Hl,subscribe:!0}),w()],mt.prototype,"parentFileProviderElement");Tn([ge({context:Wl,subscribe:!0}),w()],mt.prototype,"loading");Tn([ge({context:Nl,subscribe:!0}),w()],mt.prototype,"file");Tn([ge({context:Lu,subscribe:!0}),w()],mt.prototype,"failure");Tn([ge({context:Yl,subscribe:!0}),w()],mt.prototype,"recording");const lh=class lh extends mt{constructor(){super(...arguments),this.ref=_e()}onInstanceCreated(){}onFailure(){}render(){return p`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${De(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};lh.styles=ce`
        slot {
            display: content;
        }

        button.default {
            font-size: calc( var(--thermal-fs) * .8 );
            color: var(--thermal-foreground);
            border-color: var(--thermal-slate);
            border-style: solid;
            border-width: 1px;
            border-radius: var( --thermal-radius );
            background-color: var(--thermal-slate-light);
            white-space: nowrap;
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }

    `;let Ji=lh;var Yb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,Wu=(r,e,t,i)=>{for(var s=i>1?void 0:i?qb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yb(e,t,s),s};let Pa=class extends Kr{connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return p`
            <slot>
                <button class="default">${$(S.range).toLowerCase()}</button>
            </slot>
        `}};Pa.styles=Ji.styles;Wu([ge({context:Dn,subscribe:!0})],Pa.prototype,"setter",2);Pa=Wu([Z("group-range-propagator")],Pa);var Xb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,Zb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xb(e,t,s),s};let pl=class extends Kr{render(){return p`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${$(S.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${$(S.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({})}>${$(S.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${$(S.csvofanalysisdata)}</button>
        
        `}};pl.styles=ce`

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
    
    `;pl=Zb([Z("group-download-buttons")],pl);/**
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
 */const Jb=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),kd(t,$d`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Hu(r={}){await Jb;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Gc(r){if(await Hu(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Qb(r){return await Hu(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var gi=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var o=r.length-1;o>=0;o--)(a=r[o])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const Yc=["ready","select"],e1={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class Ir extends nr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return p`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Qb(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Yc,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(e1[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!Yc.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await Gc({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(Gc).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}Ir.styles=ce`
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
  `;gi([m({type:String,reflect:!0})],Ir.prototype,"type",void 0);gi([m({type:Array})],Ir.prototype,"events",void 0);gi([m({type:Object,hasChanged:()=>!0})],Ir.prototype,"options",void 0);gi([m({type:Array})],Ir.prototype,"cols",void 0);gi([m({type:Array})],Ir.prototype,"rows",void 0);gi([m({type:String})],Ir.prototype,"data",void 0);gi([m({type:Object})],Ir.prototype,"view",void 0);gi([m({type:Array})],Ir.prototype,"selection",void 0);gi([m({type:Object})],Ir.prototype,"_data",void 0);customElements.define("google-chart",Ir);var t1=Object.defineProperty,r1=Object.getOwnPropertyDescriptor,Is=(r,e,t,i)=>{for(var s=i>1?void 0:i?r1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&t1(e,t,s),s};let Ei=class extends Kr{constructor(){super(...arguments),this.instances=[],this.on=!1}firstUpdated(r){super.firstUpdated(r),this.group.files.addListener(this.UUID,()=>{this.group.analysisGraph.turnOn()}),this.group.analysisGraph.addListener(this.UUID,e=>{e!==void 0?(this.data=e.data,this.colors=e.colors,this.on=!0):(this.data=void 0,this.colors=void 0,this.on=!1)})}download(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("google-chart");console.log(r)}render(){return p`
            <div class="wrapper ${this.on?"on":"off"}">

                ${this.on===!0?p`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{colors:this.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},chartArea:{width:"90%"}}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                `:P}
                
            </div>
        `}};Ei.styles=ce`
    
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

    `;Is([w()],Ei.prototype,"instances",2);Is([w()],Ei.prototype,"timeout",2);Is([w()],Ei.prototype,"data",2);Is([w()],Ei.prototype,"colors",2);Is([w()],Ei.prototype,"on",2);Ei=Is([Z("group-chart")],Ei);var i1=Object.defineProperty,s1=Object.getOwnPropertyDescriptor,Bu=(r,e,t,i)=>{for(var s=i>1?void 0:i?s1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&i1(e,t,s),s};let Aa=class extends Kr{connectedCallback(){if(super.connectedCallback(),this.on){const r=this.UUID+"__initial";this.group.files.addListener(r,e=>{e.length>0&&(this.group.analysisSync.turnOn(e[0]),this.group.files.removeListener(r))})}else this.on=this.group.analysisSync.value;this.group.analysisSync.addListener(this.UUID,r=>{this.on=r}),this.addEventListener("click",()=>{this.toggle()})}turnOn(){this.group.files.value.length>0&&this.group.analysisSync.turnOn(this.group.files.value[0])}turnOff(){this.group.analysisSync.turnOff()}toggle(){this.on?this.turnOff():this.turnOn()}render(){return p`  
        <span><i></i></span>      
        <div>${$(S.analysissync)}</div>
        `}};Aa.styles=ce`
    
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
            border: 1px solid var(--thermal-slate);
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
    
    `;Bu([m({type:Boolean,reflect:!0,converter:nt(!1)})],Aa.prototype,"on",2);Aa=Bu([Z("group-analysis-sync-button")],Aa);const La=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:ht(r,"m:ss")}),n1=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(La(o,i,"minor")),n+=1}return e<i&&s.push(La(e,i,"major")),s},Xo=60*1e3,Hi=50,us=3,fl=(r,e)=>{const t=Math.floor(r/Hi),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=Xo;for(;o<e;)n1(o,l,n,e).forEach(h=>a.push(h)),o+=Xo,l+=Xo;return a.push(La(0,e,"bound")),a.push(La(e,e,"bound")),a},a1=r=>p`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,qc=(r,e,t)=>p`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,Vu=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return p`<div class="ticks">
        
        ${e.map(a1)}

        ${qc(s,ht(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?qc(n,ht(i,"m:ss:SSS"),"pointer"):P}

    </div>`},Gu=ce`

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
            width: ${Hi}px;
            left: -${Hi/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${us}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${Hi/2}px;
            padding-right: ${Hi/2}px;
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
                top: -${us}px;
            }

            .tick-pointer {
                width: ${us*2}px;
                height: ${us*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${us}px;
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
            height: ${us}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${Hi}px;
            position: relative;
            left: -${Hi/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var o1=Object.defineProperty,l1=Object.getOwnPropertyDescriptor,mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?l1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o1(e,t,s),s};let fr=class extends Kr{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=_e(),this.indicatorRef=_e()}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.files.addListener(this.UUID,r=>{this.listener!==void 0&&clearTimeout(this.listener),this.listener=setTimeout(async()=>{this.onRegistryBatchEnded(r)},0)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof Ki?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=fl(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?P:p`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${De(this.timelineRef)}
                @click=${r=>this.handleTimelineClick(r)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${De(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs!==void 0?Vu(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):P}

        </div>`}};fr.TICK_WIDTH=50;fr.TICK_POINTER_HEIGHT=3;fr.styles=ce`


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


        ${Gu}
    
    `;mi([w()],fr.prototype,"longestDurationInMs",2);mi([w()],fr.prototype,"ms",2);mi([w()],fr.prototype,"pointerMs",2);mi([w()],fr.prototype,"playing",2);mi([w()],fr.prototype,"instances",2);mi([w()],fr.prototype,"has",2);mi([w()],fr.prototype,"ticks",2);mi([w()],fr.prototype,"listener",2);fr=mi([Z("group-timeline")],fr);var h1=Object.defineProperty,c1=Object.getOwnPropertyDescriptor,Yu=(r,e,t,i)=>{for(var s=i>1?void 0:i?c1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h1(e,t,s),s};let Oa=class extends mt{constructor(){super(...arguments),this.container=_e(),this.norender=!1}getContainer(){return this.container.value}onInstanceCreated(e){const t=this.getContainer();if(t!==void 0)e.mountToDom(t),this.norender===!1&&e.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(e){var t;if(super.updated(e),e.has("file")){const i=e.get("file"),s=this.file;i===void 0&&s!==void 0&&this.container.value&&this.file&&((t=this.file.dom)==null?void 0:t.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}disconnectedCallback(){var e,t,i,s;super.disconnectedCallback(),this.log("unmount"),this.file!==void 0&&(this.file.unmountFromDom(),(e=this.parentFileProviderElement)==null||e.onSuccess.delete(this.UUID),(t=this.parentFileProviderElement)==null||t.onInstanceCreated.delete(this.UUID),(i=this.parentFileProviderElement)==null||i.onLoadingStart.delete(this.UUID),(s=this.parentFileProviderElement)==null||s.onFailure.delete(this.UUID))}render(){var s,n;const e=this.loading===!1&&this.failure!==void 0,t=this.loading===!1&&this.file!==void 0,i={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":t,"is-error":e};return p`
            <div ${De(this.container)} class=${ai(i)} part="file-canvas-container">
            
                ${this.loading===!0?p`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:e===!0?p`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                ${$(S.fileloadingerror)}
                            </div>

                            <div class="error-url">
                                ${(s=this.failure)==null?void 0:s.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(n=this.failure)==null?void 0:n.message}
                            </div>
                        </div>`:P}
            
            </div>
        
        `}};Oa.styles=ce`

        :host {
            display: inline-block;
            width: 100%;
        }

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
            box-sizing: border-box;
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
    `;Yu([m({converter:nt(!1)})],Oa.prototype,"norender",2);Oa=Yu([Z("file-canvas")],Oa);var d1=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,p1=(r,e,t,i)=>{for(var s=i>1?void 0:i?u1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&d1(e,t,s),s};let gl=class extends mt{onInstanceCreated(){}onFailure(){}render(){return this.file?p`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this.file.thermalUrl}&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `:P}};gl.styles=ce`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;gl=p1([Z("file-share-button")],gl);var f1=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,m1=(r,e,t,i)=>{for(var s=i>1?void 0:i?g1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&f1(e,t,s),s};let ml=class extends mt{onFileLoaded(){}onInstanceCreated(){}onFailure(){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?p`
            <thermal-dialog label=${$(S.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${$(S.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${qt(this.renderRow($(S.thermalfilename),this.file.fileName))}

                        ${qt(this.renderDownloadRow($(S.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,$(S.thermalfiledownload)))}

                        ${this.file.visibleUrl?qt(this.renderDownloadRow($(S.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,$(S.visiblefiledownload))):P}

                        ${qt(this.renderRow($(S.time),Dt.human(this.file.timestamp)))}

                        ${qt(this.renderNumericalRow($(S.duration),this.file.duration,0,"ms"))}

                        ${qt(this.renderRow($(S.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${qt(this.renderNumericalRow($(S.bytesize),this.file.bytesize,0))}
                        
                        ${qt(this.renderNumericalRow($(S.minimaltemperature),this.file.min,10,"°C"))}

                        ${qt(this.renderNumericalRow($(S.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${$(S.filetype)}</h2>
                    <table>
                    ${qt(this.renderRow($(S.type),this.file.reader.parser.name))}
                    ${qt(this.renderRow($(S.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${$(S.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>p`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:P}};ml.styles=ce`

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
    
    `;ml=m1([Z("file-info-button")],ml);var v1=Object.defineProperty,y1=Object.getOwnPropertyDescriptor,ao=(r,e,t,i)=>{for(var s=i>1?void 0:i?y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&v1(e,t,s),s};let Cs=class extends mt{constructor(){super(...arguments),this.pngWidth=1350,this.hasGraphs=!1}onInstanceCreated(r){r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasGraphs=e})}onFailure(){}render(){return this.file===void 0?P:p`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker">
                    <div class="button">
                        ${this.file?$(S.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${$(S.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}>${$(S.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?p`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${$(S.convertentiresequencetovideo)}</thermal-button>
                        </div>`:P}

                    ${this.hasGraphs===!0?p`<div slot="option">
                            <thermal-button @click=${()=>{var r;return(r=this.file)==null?void 0:r.analysisData.downloadData()}}>${$(S.csvofanalysisdata)}</thermal-button>
                        </div>`:P}
            
            </thermal-dropdown>

        
        `}};Cs.styles=ce`

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
    
    `;ao([ge({context:Ti,subscribe:!0})],Cs.prototype,"pngWidth",2);ao([ge({context:Ii,subscribe:!0})],Cs.prototype,"pngFs",2);ao([w()],Cs.prototype,"hasGraphs",2);Cs=ao([Z("file-download-dropdown")],Cs);var b1=Object.defineProperty,w1=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?w1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b1(e,t,s),s};const x1="chrome"in window;let Ft=class extends mt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=_e(),this.barRef=_e(),this.containerRef=_e(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.collapsed=!1,this.ticks=[]}onInstanceCreated(r){this.containerRef.value&&(this.ticks=fl(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=fl(t.contentRect.width,this.file.duration)),t.contentRect.width<Ft.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return P;if(r.duration===0)return P;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,playback:!0,...t},s={item:!0,timeline:!0,...t};return p`
            <div class="${ai(e)}" ${De(this.containerRef)}>


                ${r!==void 0?p`

                        <div class="ticks-horizontal-indent">

                            <notation-timeline></notation-timeline>


                            <div class="${ai(s)}"  ${De(this.timelineRef)}>

                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${De(this.barRef)}></div>
                                    ${this.cursor?p`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                            </div>


                            ${this.currentFrame?Vu(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):P}

                            


                            ${this.hasPlayButton===!0?p`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${$(S.prev)}</thermal-button>


                                        <button class="${ai(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                        ${this.playing?p`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                            </svg>
                                            `:p`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                            </svg>
                                            `}

                                    </button>

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${$(S.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${$(S.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                ${x1===!0?p`<thermal-dialog label="Performance">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="chrome" slot="invoker">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>

                                        <div slot="content" style="max-width: 500px;">

                                            <p>Your browser is based on Chromium and might have slightly worse performance during playback.</p>

                                            <p>Consider using <a href="https://mozilla.org/firefox" target="_blank">Firefox</a>.</p>

                                            <p style="opacity: .5">Reason of lagging in Chromium is its aggressive resources optimisation. Firefox will enable you to use more of your system's power.</p>
                                        
                                        </div>

                                    </thermal-dialog>`:P}

                                </div>

                                `:P}

                            
                        </div>
                    `:P}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?p`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${$(S.date)}:</span> 
                            <span class="inline">${ht(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${$(S.time)}:</span> 
                            <span class="inline">${ht(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${$(S.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:P}

          `}};Ft.collapseWidth=500;Ft.styles=ce`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

            color: var( --thermal-foreground );

        }


        .button {
            width: calc( var( --thermal-gap ) * 1.5 );

            font-size: var( --thermal-fs );
            line-height: var(--thermal-fs );

            cursor: pointer;
            transition: color .3 ease-in-out;

            color: var( --thermal-foreground );
            background-color: var(--thermal-slate-light);
            
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);

            padding: 4px;

            &:hover {
                color: var( --thermal-primary );
            }

            &.playback {
                svg {
                    min-width: 1em;
                }
            }
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

        ${Gu}


        .controls {

            display: flex;
            align-items: center;
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
    
    `;vr([ge({context:Vl,subscribe:!0}),w()],Ft.prototype,"playing",2);vr([ge({context:to,subscribe:!0}),w()],Ft.prototype,"currentFrame",2);vr([ge({context:Du,subscribe:!0}),w()],Ft.prototype,"duration",2);vr([ge({context:Mu,subscribe:!0}),w()],Ft.prototype,"mayStop",2);vr([ge({context:Bl,subscribe:!0})],Ft.prototype,"cursor",2);vr([ge({context:Eu,subscribe:!0})],Ft.prototype,"cursorSetter",2);vr([m({type:String,reflect:!0})],Ft.prototype,"hasPlayButton",2);vr([m({type:String,reflect:!0})],Ft.prototype,"hasInfo",2);vr([m({type:String,reflect:!0})],Ft.prototype,"interactive",2);vr([w()],Ft.prototype,"collapsed",2);vr([w()],Ft.prototype,"ticks",2);vr([w()],Ft.prototype,"pointerMs",2);Ft=vr([Z("file-timeline")],Ft);var S1=Object.defineProperty,$1=Object.getOwnPropertyDescriptor,Jl=(r,e,t,i)=>{for(var s=i>1?void 0:i?$1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&S1(e,t,s),s};let cn=class extends mt{constructor(){super(...arguments),this.enabled="on",this.playbackSpeed=1}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?P:p`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${$(S.playbackspeed)}</div>

                    ${Object.entries(Gd).map(([r])=>p`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof hi&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};cn.styles=ce`

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
    
    `;Jl([m({type:String,reflect:!0})],cn.prototype,"enabled",2);Jl([ge({context:Gl,subscribe:!0}),w()],cn.prototype,"playbackSpeed",2);cn=Jl([Z("file-playback-speed-dropdown")],cn);var k1=Object.defineProperty,C1=Object.getOwnPropertyDescriptor,Ql=(r,e,t,i)=>{for(var s=i>1?void 0:i?C1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&k1(e,t,s),s};let dn=class extends mt{constructor(){super(...arguments),this.container=_e()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return p`
            <div class="container">
            
                <video ${De(this.container)} preload="metadata">

                    ${this.url===void 0?P:p`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};dn.styles=ce`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Ql([ge({context:to,subscribe:!0}),w()],dn.prototype,"currentFrame",2);Ql([m({type:String,reflect:!0,attribute:!0})],dn.prototype,"url",2);dn=Ql([Z("file-video")],dn);var _1=Object.defineProperty,P1=Object.getOwnPropertyDescriptor,eh=(r,e,t,i)=>{for(var s=i>1?void 0:i?P1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_1(e,t,s),s};let un=class extends mt{onInstanceCreated(){}onFailure(){}render(){if(this.file===void 0)return P;if(this.label!==void 0)return this.label;if(this.grouping!==void 0)switch(this.grouping){case"hours":case"days":return ht(this.file.timestamp,"HH:mm");case"weeks":case"months":case"years":return Dt.human(this.file.timestamp);default:return Dt.human(this.file.timestamp)}return this.file.fileName}};un.styles=ce`
        :host {
            display: contents;
        }
    `;eh([m({type:String})],un.prototype,"grouping",2);eh([m({type:String})],un.prototype,"label",2);un=eh([Z("file-label")],un);var A1=Object.defineProperty,L1=Object.getOwnPropertyDescriptor,th=(r,e,t,i)=>{for(var s=i>1?void 0:i?L1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&A1(e,t,s),s};let pn=class extends Xe{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return p`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};pn.styles=ce`

    
    `;th([m()],pn.prototype,"analysis",2);th([w()],pn.prototype,"name",2);pn=th([Z("analysis-name")],pn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*rh(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var O1=Object.defineProperty,E1=Object.getOwnPropertyDescriptor,ih=(r,e,t,i)=>{for(var s=i>1?void 0:i?E1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O1(e,t,s),s};let fn=class extends Xe{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return p`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?P:p`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${rh(ca,r=>p`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};fn.styles=ce`

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
    
    `;ih([m()],fn.prototype,"analysis",2);ih([w()],fn.prototype,"color",2);fn=ih([Z("analysis-color")],fn);var D1=Object.defineProperty,M1=Object.getOwnPropertyDescriptor,_r=(r,e,t,i)=>{for(var s=i>1?void 0:i?M1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&D1(e,t,s),s};let or=class extends Xe{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return p`

            <div class="table">

                <thermal-field label=${$(S.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${$(S.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${$(S.left)}>
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

                <thermal-field label=${$(S.right)}>
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

                <thermal-field label=${$(S.top)}>
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

                <thermal-field label=${$(S.bottom)}>
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
    
        
        `}};or.styles=ce`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;_r([m()],or.prototype,"analysis",2);_r([w()],or.prototype,"color",2);_r([w()],or.prototype,"top",2);_r([w()],or.prototype,"left",2);_r([w()],or.prototype,"width",2);_r([w()],or.prototype,"height",2);_r([w()],or.prototype,"type",2);_r([w()],or.prototype,"right",2);_r([w()],or.prototype,"bottom",2);_r([w()],or.prototype,"maxX",2);_r([w()],or.prototype,"maxY",2);or=_r([Z("edit-area")],or);var R1=Object.defineProperty,T1=Object.getOwnPropertyDescriptor,zs=(r,e,t,i)=>{for(var s=i>1?void 0:i?T1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&R1(e,t,s),s};let Di=class extends Xe{constructor(){super(...arguments),this.topInputRef=_e(),this.leftInputRef=_e()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return p`

            <div class="table">

                <thermal-field label=${$(S.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${$(S.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${$(S.top)} hint=${$(S.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${$(S.left)} hint=${$(S.fromto,{from:0,to:this.maxX})}>
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
        
        `}};Di.styles=ce`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;zs([m()],Di.prototype,"analysis",2);zs([w()],Di.prototype,"top",2);zs([w()],Di.prototype,"left",2);zs([w()],Di.prototype,"maxX",2);zs([w()],Di.prototype,"maxY",2);Di=zs([Z("edit-point")],Di);var I1=Object.defineProperty,z1=Object.getOwnPropertyDescriptor,oo=(r,e,t,i)=>{for(var s=i>1?void 0:i?z1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&I1(e,t,s),s};let gn=class extends Xe{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return p`

            <thermal-dialog label="${$(S.editsth,{what:$(S[this.type])})}">
                <slot name="invoker" slot="invoker">
                    <thermal-button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                            <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </thermal-button>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof dr?p`<edit-point .analysis=${this.analysis}></edit-point>`:p`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};oo([m()],gn.prototype,"analysis",2);oo([w()],gn.prototype,"name",2);oo([w()],gn.prototype,"type",2);gn=oo([Z("file-analysis-edit")],gn);var U1=Object.defineProperty,F1=Object.getOwnPropertyDescriptor,yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?F1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&U1(e,t,s),s};let Xt=class extends mt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=_e(),this.graphRef=_e(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){this.graphs=r.analysisData.value,r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.graphs=this.file.analysisData.value,this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){var r;return((r=this.file)==null?void 0:r.timeline.isSequence)===!1?P:p`

            <div style="position: relative; background-color: white; border-radius: var(--thermal-radius); height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&p`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&p`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${De(this.container)} style="height: 100%; ">
                ${this.graphs.colors.length>0?p`<thermal-chart 
                        ${De(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:$(S.time),format:"m:ss:SSS"},vAxis:{title:$(S.temperature)+" °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:P}
            </div>

            

            </div>
        
        `}};Xt.styles=ce`

        :host {
            // background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;yr([w()],Xt.prototype,"hydrated",2);yr([m({reflect:!0})],Xt.prototype,"graphWidth",2);yr([m({reflect:!0})],Xt.prototype,"graphHeight",2);yr([w()],Xt.prototype,"graphs",2);yr([ge({context:to,subscribe:!0})],Xt.prototype,"currentFrame",2);yr([ge({context:Bl,subscribe:!0})],Xt.prototype,"cursor",2);yr([ge({context:Eu,subscribe:!0})],Xt.prototype,"cursorSetter",2);yr([w()],Xt.prototype,"shadowLeft",2);yr([w()],Xt.prototype,"shadowTop",2);yr([w()],Xt.prototype,"shadowWidth",2);yr([w()],Xt.prototype,"shadowHeight",2);yr([ge({context:Xa,subscribe:!0})],Xt.prototype,"graphSmooth",2);Xt=yr([Z("file-analysis-graph")],Xt);var j1=Object.defineProperty,N1=Object.getOwnPropertyDescriptor,zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?N1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j1(e,t,s),s};let gr=class extends Xe{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const s=n=>n instanceof sr?i.width+"x"+i.height:"1x1";this.dimension=s(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof dr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,n=>{this.dimension=s(n)}),i.onValues.set(this.UUID,(n,a,o)=>{this.value={min:n,max:a,avg:o}}),i.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{this.graph={min:n,max:a,avg:o}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,n=>{this.color=n}),i.onSetName.set(this.UUID,n=>{this.name=n})}}valueOrNothing(e){return e===void 0?"-":e.toFixed(2)+" °C"}renderCell(e,t,i,s){return p`
            <td class="${t?"may":"mayNot"} ${i?"active":"inactive"}">

                ${t?p`
                        <button
                            @click=${s}
                            style="background-color: ${i?this.color:"transparent"};"
                            title="${i?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(e)}
                        </button>
                    `:this.valueOrNothing(e)}

            </td>
        `}render(){return p`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
            @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${this.interactiveanalysis===!0?p`<u aria-hidden="true"></u>`:P}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?p`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>
            </thermal-button>

            <!--

            ${this.analysis.getType()!=="point"?p`<thermal-button 
                    @click=${()=>{}}
                    @mouseenter=${()=>{this.analysis.min&&this.analysis.max&&this.setRegistryHighlight&&this.setRegistryHighlight({from:this.analysis.min,to:this.analysis.max})}}
                    @mouseleave=${()=>{this.setRegistryHighlight&&this.setRegistryHighlight(void 0)}}
                    >
                            ${$(S.range)}
                        </thermal-button>`:P}

            -->
            

        
        </td>`:P}
        
        `}};gr.styles=ce`
    
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

    `;zr([m()],gr.prototype,"analysis",2);zr([m({type:Boolean})],gr.prototype,"interactiveanalysis",2);zr([w()],gr.prototype,"value",2);zr([w()],gr.prototype,"graph",2);zr([w()],gr.prototype,"may",2);zr([w()],gr.prototype,"dimension",2);zr([w()],gr.prototype,"color",2);zr([m({type:Boolean,reflect:!0,attribute:!0})],gr.prototype,"selected",2);zr([w()],gr.prototype,"name",2);zr([ge({context:Dn,subscribe:!0})],gr.prototype,"setRegistryHighlight",2);gr=zr([Z("file-analysis-table-row")],gr);const ns="interactive-analysis-context";var W1=Object.defineProperty,H1=Object.getOwnPropertyDescriptor,Us=(r,e,t,i)=>{for(var s=i>1?void 0:i?H1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&W1(e,t,s),s};let Mi=class extends mt{constructor(){super(...arguments),this.container=_e(),this.interactiveanalysis=!1,this.forceinteractiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,t=>{this.analysis=t}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,t=>{this.hasHighlightedData=t}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}render(){if(this.analysis.length===0||this.file===void 0)return P;const e=this.interactiveanalysis===!0||this.forceinteractiveanalysis===!0;return p`

        <div class="overflow" ${De(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${e?"interactive":""}"
                            @click=${()=>{var t,i;this.allSelected?(t=this.file)==null||t.analysis.layers.deselectAll():(i=this.file)==null||i.analysis.layers.selectAll()}}
                        >
                            ${e?p`<u aria-hidden="true"></u>`:P}
                            <span>${$(S.analysis)}</span>
                            ${this.hasHighlightedData?p`<button @click=${()=>{var t;(t=this.file)==null||t.analysisData.downloadData()}} title=${$(S.downloadgraphdataascsv)}>CSV</button>`:P}
                        </th>
                        <th>${$(S.avg)}</th>
                        <th>${$(S.min)}</th>
                        <th>${$(S.max)}</th>
                        <th>${$(S.size)}</th>
                        ${e===!0?p`<th></th>`:P}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(t=>p`
                            <file-analysis-table-row
                                .analysis=${t}
                                interactiveanalysis=${e}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>
            
        `}};Mi.styles=ce`
    
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
                border: 1px solid var( --thermal-slate );
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

        



    `;Us([ge({context:ns,subscribe:!0})],Mi.prototype,"interactiveanalysis",2);Us([m({type:Boolean,converter:nt(!1)})],Mi.prototype,"forceinteractiveanalysis",2);Us([w()],Mi.prototype,"analysis",2);Us([w()],Mi.prototype,"allSelected",2);Us([w()],Mi.prototype,"hasHighlightedData",2);Mi=Us([Z("file-analysis-table")],Mi);var B1=Object.defineProperty,V1=Object.getOwnPropertyDescriptor,Fs=(r,e,t,i)=>{for(var s=i>1?void 0:i?V1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&B1(e,t,s),s};let Ri=class extends mt{constructor(){super(...arguments),this.container=_e(),this.interactiveanalysis=!1,this.forceinteractiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}renderHeader(){return p`<tr>
            <td>${$(S.analysis)}</td>
            <td>${$(S.min)}</td>
            <td>${$(S.max)}</td>
            <td>${$(S.avg)}</td>
        </tr>`}renderRow(r){var e,t,i;return p`<tr>
            <td>
                ${r.name}
                <file-analysis-edit .analysis=${r}></file-analysis-edit>
            </td>
            <td>${(e=r.min)==null?void 0:e.toFixed(2)}</td>
            <td>${(t=r.max)==null?void 0:t.toFixed(2)}</td>
            <td>${(i=r.avg)==null?void 0:i.toFixed(2)}</td>
        </tr>`}render(){if(this.analysis.length===0||this.file===void 0)return P;const r=this.interactiveanalysis===!0||this.forceinteractiveanalysis===!0;return p`

        <div class="overflow" ${De(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <!--

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${r?"interactive":""}"
                            @click=${()=>{var e,t;this.allSelected?(e=this.file)==null||e.analysis.layers.deselectAll():(t=this.file)==null||t.analysis.layers.selectAll()}}
                        >
                            ${r?p`<u aria-hidden="true"></u>`:P}
                            <span>${$(S.analysis)}</span>
                            ${this.hasHighlightedData?p`<button @click=${()=>{var e;(e=this.file)==null||e.analysisData.downloadData()}} title=${$(S.downloadgraphdataascsv)}>CSV</button>`:P}
                        </th>
                        <th>${$(S.avg)}</th>
                        <th>${$(S.min)}</th>
                        <th>${$(S.max)}</th>
                        <th>${$(S.size)}</th>
                        ${r===!0?p`<th></th>`:P}
                    </tr>

                    -->

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>p`
                    <file-analysis-overview-row
                        .analysis=${e}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>
        `}};Ri.styles=ce`
    
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
                border: 1px solid var( --thermal-slate );
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

        



    `;Fs([ge({context:ns,subscribe:!0}),m()],Ri.prototype,"interactiveanalysis",2);Fs([m({type:Boolean,converter:nt(!1)})],Ri.prototype,"forceinteractiveanalysis",2);Fs([w()],Ri.prototype,"analysis",2);Fs([w()],Ri.prototype,"allSelected",2);Fs([w()],Ri.prototype,"hasHighlightedData",2);Ri=Fs([Z("file-analysis-overview")],Ri);var G1=Object.defineProperty,Y1=Object.getOwnPropertyDescriptor,Qr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&G1(e,t,s),s};let $r=class extends Xe{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof sr?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof dr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return p`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?p`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return p`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
        >
            <span
                class="name-text"
                @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
            >

                ${this.interactiveanalysis===!0?p`<u aria-hidden="true"></u>`:P}
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
        ${this.renderCell(this.value.min,this.analysis instanceof sr,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),this.log("Graph analysis min",this.graph.min)})}
        ${this.renderCell(this.value.max,this.analysis instanceof sr,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}

         ${this.renderCell(this.value.avg,!0,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?p`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${$(S.remove)}</thermal-button>
        </td>`:P}

        -->
        
        `}};$r.styles=ce`
    
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

        svg {
            width: calc( var(--thermal-gap) * .8 );
            color: var(--thermal-slate);
            transition: color .2s ease-in-out;
            cursor: pointer;

            &:hover {
                color: var( --thermal-foreground );
            }
        }

    `;Qr([m()],$r.prototype,"analysis",2);Qr([ge({context:ns,subscribe:!0})],$r.prototype,"interactiveanalysis",2);Qr([w()],$r.prototype,"value",2);Qr([w()],$r.prototype,"graph",2);Qr([w()],$r.prototype,"may",2);Qr([w()],$r.prototype,"dimension",2);Qr([w()],$r.prototype,"color",2);Qr([m({type:Boolean,reflect:!0,attribute:!0})],$r.prototype,"selected",2);Qr([w()],$r.prototype,"name",2);$r=Qr([Z("file-analysis-overview-row")],$r);var q1=Object.defineProperty,X1=Object.getOwnPropertyDescriptor,vi=(r,e,t,i)=>{for(var s=i>1?void 0:i?X1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&q1(e,t,s),s};let Tr=class extends mt{constructor(){super(...arguments),this.mayHaveGraph=!1,this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1,this.graphRef=_e(),this.graphWidth=0,this.graphHeight=0}onInstanceCreated(r){this.mayHaveGraph=r.timeline.isSequence,r.analysis.layers.onAdd.set(this.UUID,e=>{var i,s;this.hasAnalysis===!1&&(this.hasAnalysis=!0);const t=()=>{this.isDrawingAnalysis=!1};(s=(i=e.file.dom)==null?void 0:i.listenerLayer)==null||s.getLayerRoot().addEventListener("pointerup",t),e.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{if(n||a||o)this.hasGraph=!0;else{const l=e.file.analysis.value.reduce((h,u)=>h===!0?h:u.graph.state.MIN||u.graph.state.MAX||u.graph.state.AVG,!1);this.hasGraph=l}})}),r.analysis.layers.onRemove.set(this.UUID,()=>{this.hasAnalysis===!0&&r.analysis.layers.size===0&&(this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1)})}onFailure(){}updated(r){super.updated(r),r.has("hasGraph")&&(this.observer&&this.graphRef.value&&(this.observer.unobserve(this.graphRef.value),delete this.observer),this.graphRef.value&&this.hasGraph===!0&&(this.observer=new ResizeObserver(e=>{const t=e[0];t!==void 0&&(this.graphWidth=t.contentRect.width,this.graphHeight=t.contentRect.height)}),this.observer.observe(this.graphRef.value)))}renderButtons(){const r=this.file!==void 0?Object.values(this.file.group.tool.tools).filter(e=>e instanceof Na):[];return p`
            <div class="buttons">
                ${r.map(e=>p`
                            <thermal-button @click=${()=>{var t;this.isDrawingAnalysis=!0,(t=this.file)==null||t.group.tool.selectTool(e)}}>
                                <div style="display: flex; align-items: center; gap: 10px">
                                    <div style="width: 1.5em; display: inline-block;">${qt(e.icon)}</div>
                                    <div>${$(S[e.name])}</div>
                                </div>
                            </thermal-button>
                        `)}
            </div>
        
        `}renderCurrentTooltip(){return p`${$(S[this.manager.tool.value.description])}`}renderAddAnalysis(){return p`<div class="addanalysis">

            <div>
                <strong>${$(S.analysis)}</strong>
            </div>

            <div>${$(S.analysishint)}</div>

            ${this.isDrawingAnalysis===!0?this.renderCurrentTooltip():this.renderButtons()}
        </div>`}renderGraph(){return this.mayHaveGraph?this.hasGraph===!0?p`<div class="graph" ${De(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`:this.hasAnalysis===!0?p`<div class="graph graph-prompt">
                    <div>
                        <strong>${$(S.graph)}</strong>
                    </div>
                    <div class="hint">${qt($(S.graphhint2))}</div>
                </div>`:p`<div class="graph graph-prompt">
                    <div>
                        <strong>${$(S.graph)}</strong>
                    </div>
                    <div class="hint">${$(S.graphhint1)}</div>
                </div>`:P}render(){return p`
            <div class="container ${this.mayHaveGraph===!0?"may":"may-not"}">

            <div class="analysis">
                ${this.hasAnalysis===!1||this.isDrawingAnalysis===!0?this.renderAddAnalysis():p`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `}};Tr.styles=ce`

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
            max-width: 100%;
            overflow-y: auto;
        }
    
        .addanalysis {
            padding: var(--thermal-gap);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }

        .graph {
            height: 50%;
        }

        .graph-prompt {
            padding: var(--thermal-gap);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--thermal-gap);
        }

        .hint {
            span {
                display: inline-block;
                padding: 5px;
                margin: 0 5px;
                border: 1px solid var(--thermal-slate);
                border-radius: 5px;
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
            overflow-y: auto;
        }
    
    `;vi([w()],Tr.prototype,"mayHaveGraph",2);vi([w()],Tr.prototype,"hasAnalysis",2);vi([w()],Tr.prototype,"isDrawingAnalysis",2);vi([w()],Tr.prototype,"hasGraph",2);vi([w()],Tr.prototype,"graphRef",2);vi([w()],Tr.prototype,"graphWidth",2);vi([w()],Tr.prototype,"graphHeight",2);vi([w()],Tr.prototype,"observer",2);Tr=vi([Z("file-analysis-complex")],Tr);var K1=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,J1=(r,e,t,i)=>{for(var s=i>1?void 0:i?Z1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&K1(e,t,s),s};let Xc=class extends Ji{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};Xc=J1([Z("file-download-lrc")],Xc);var Q1=Object.defineProperty,ew=Object.getOwnPropertyDescriptor,sh=(r,e,t,i)=>{for(var s=i>1?void 0:i?ew(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Q1(e,t,s),s};let Ea=class extends Ji{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}getDefaultLabel(){return"png"}};sh([ge({context:Ti,subscribe:!0})],Ea.prototype,"pngWidth",2);sh([ge({context:Ii,subscribe:!0})],Ea.prototype,"pngFs",2);Ea=sh([Z("file-download-png")],Ea);var tw=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,In=(r,e,t,i)=>{for(var s=i>1?void 0:i?rw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tw(e,t,s),s};let _s=class extends Ji{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};In([m({type:String})],_s.prototype,"label",2);In([m({type:Object})],_s.prototype,"onEnter",2);In([m({type:Object})],_s.prototype,"onLeave",2);In([m({type:Object})],_s.prototype,"onAction",2);_s=In([Z("file-button")],_s);var iw=Object.defineProperty,sw=Object.getOwnPropertyDescriptor,qu=(r,e,t,i)=>{for(var s=i>1?void 0:i?sw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iw(e,t,s),s};let vl=class extends Ji{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&(this.log(this.file.min,this.file.max),this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max}))}getDefaultLabel(){return $(S.range).toLowerCase()}};qu([ge({context:Dn,subscribe:!0})],vl.prototype,"setter",2);vl=qu([Z("file-range-propagator")],vl);var nw=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,nh=(r,e,t,i)=>{for(var s=i>1?void 0:i?aw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nw(e,t,s),s};let mn=class extends Xe{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(r){super.updated(r),r.has("expanded")&&(this.expanded===!0?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return p`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <button class="default" @click=${()=>{this.toggle()}}>${this.label??"..."}</button>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};mn.styles=ce`
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
                border: 1px solid var(--thermal-slate);
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



    `;nh([m({type:String,reflect:!0})],mn.prototype,"label",2);nh([w()],mn.prototype,"expanded",2);mn=nh([Z("file-dropdown")],mn);const hh=class hh extends mt{constructor(){super(...arguments),this.tabIndex=1}onInstanceCreated(){}onFailure(){}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.action.bind(this)),this.addEventListener("mouseenter",this.enter.bind(this)),this.addEventListener("mouseleave",this.leave.bind(this)),this.addEventListener("focus",this.enter.bind(this)),this.addEventListener("blur",this.leave.bind(this))}render(){return p`
            <button id="${this.UUID}" tabindex="0">${this.getIcon()}</button>
            <div class="label">
                <label class="label-inner" for="#${this.UUID}">${this.getLabel()}</label>
            </div>
        `}};hh.styles=ce`
        :host {
            display: content;
            position: relative;
            cursor: pointer;
        }

        svg {
            width: 1em;
            color: currentcolor;
            transition: all .3s ease-in-out;
            cursor: pointer;
            transform: translateY(3px);
        }

        :host,
        button {
            margin: 0;
            padding: 0;
            background: transparent;
            color: currentcolor;
            border: none;
        }

        .label {
            display: none;
            position: absolute;
            z-index: 9999;
            top: -30px;
            left: 0;
            width: 0;
        }

        .label-inner {
            padding: 5px 10px;
            border-radius: var(--thermal-radius);
            border: 1px solid var(--thermal-slate);
            background: var(--thermal-primary);
            color: var(--thermal-background);
            width: fit-content;
            white-space: preserve nowrap;
            font-size: 12px;
        }

        :host(:hover) {
            svg {
                color: var(--thermal-primary);
            }
            .label {
                display: block;
            }
        }

    `;let Da=hh;var ow=Object.defineProperty,lw=Object.getOwnPropertyDescriptor,Xu=(r,e,t,i)=>{for(var s=i>1?void 0:i?lw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ow(e,t,s),s};let yl=class extends Da{enter(){}action(){this.onaction&&this.file&&this.onaction(this.file)}leave(){}getLabel(){return $(S.detail)}getIcon(){return p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`}};Xu([m({type:Object})],yl.prototype,"onaction",2);yl=Xu([Z("file-detail-icon")],yl);var hw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,Ku=(r,e,t,i)=>{for(var s=i>1?void 0:i?cw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&hw(e,t,s),s};let bl=class extends Da{enter(){}action(){this.file&&(this.file.group.registry.opacity.value===1?this.file.group.registry.opacity.imposeOpacity(0):this.file.group.registry.opacity.imposeOpacity(1))}leave(){}getLabel(){return $(S.togglevisibleimage)}getIcon(){return p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </svg>`}render(){return this.file===void 0||this.file.visibleUrl===void 0?P:super.render()}};Ku([m({type:Object})],bl.prototype,"onaction",2);bl=Ku([Z("file-opacity-icon")],bl);var dw=Object.defineProperty,uw=Object.getOwnPropertyDescriptor,zn=(r,e,t,i)=>{for(var s=i>1?void 0:i?uw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dw(e,t,s),s};let Qi=class extends mt{constructor(){super(...arguments),this.norender=!1}onInstanceCreated(){}onFailure(){}render(){return p`

            <header>
                <h2><file-label label="${Ge(this.label)}" grouping="${Ge(this.grouping)}"></file-label></h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <file-detail-icon .onaction=${Ge(this.ondetail)}></file-detail-icon>
                    <file-range-propagator></file-range-propagator>
                    <file-dropdown label="...">
                        <file-info-button>
                            <file-button slot="invoker" label=${$(S.info).toLowerCase()}></file-button>
                        </file-info-button>
                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                    </file-dropdown>
                </div>
            </header>

            <main>
                <file-canvas norender="${this.norender}"></file-canvas>
                <file-timeline></file-timeline>
                <file-analysis-overview></file-analysis-overview>
            </main>
        
    `}};Qi.styles=ce`
    
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        header {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding-bottom: 5px;
            color: var(--thermal-foreground);
            
            h2 {
                margin: 0;
                padding: 0;
                flex-grow: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: var( --thermal-fs-sm );
                file-label {
                    white-space: preserve nowrap;
                }
            }

            & > div {
                display: flex;
                flex-wrap: nowrap;
                gap: 5px;
            }

        }

        main {

        }
    
    `;zn([m({type:Object})],Qi.prototype,"ondetail",2);zn([m({converter:nt(!1)})],Qi.prototype,"norender",2);zn([m({type:String})],Qi.prototype,"label",2);zn([m({type:String})],Qi.prototype,"grouping",2);Qi=zn([Z("file-thumbnail")],Qi);var pw=Object.defineProperty,fw=Object.getOwnPropertyDescriptor,Un=(r,e,t,i)=>{for(var s=i>1?void 0:i?fw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pw(e,t,s),s};let es=class extends mt{constructor(){super(...arguments),this.norender=!1}onInstanceCreated(){}onFailure(){}render(){return p`

            <header>
                <thermal-button variant="foreground" @click=${()=>{this.onback&&this.onback()}}>x</thermal-button>

                ${this.label!==void 0?p`
                    <thermal-button variant="background" interactive="false">${this.label}</thermal-button>
                `:P}

                <thermal-button variant="background" interactive="false">
                    <file-label></file-label>
                </thermal-button>

                <file-info-button></file-info-button>
                <file-download-dropdown></file-download-dropdown>
            </header>

            <main>
                <section>
                    <file-canvas norender="${this.norender}"></file-canvas>
                    <file-timeline></file-timeline>
                </section>
                <section>
                    <file-analysis-complex></file-analysis-complex>
                </section>
            </main> 
        
    `}};es.styles=ce`
    
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        main {
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: 1fr;
            @media ( min-width: 900px ) {
                grid-template-columns: 2fr 1fr;
            }
            @media ( min-width: 1300px ) {
                grid-template-columns: 1fr 1fr;
            }
        }

        header {
            width: 100%;
            display: flex;
            gap: 5px;
            margin-bottom: var(--thermal-gap);
            align-items: center;
        }
    
    `;Un([m({type:Object})],es.prototype,"onback",2);Un([m({converter:nt(!1)})],es.prototype,"norender",2);Un([m({type:String})],es.prototype,"label",2);Un([m({type:String})],es.prototype,"grouping",2);es=Un([Z("file-detail")],es);const lo={fromAttribute:r=>{if(r){const e=r.split(":").map(Number);if(e.some(isNaN))return;if(e.length===3){const[t,i,s]=e;return t*6e4+i*1e3+s}else if(e.length===4){const[t,i,s,n]=e;return t*36e5+i*6e4+s*1e3+n}}},toAttribute:r=>{if(r!==void 0){const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),i=Math.floor(r%6e4/1e3),s=r%1e3,n=String(i).padStart(2,"0"),a=String(s).padStart(3,"0");return e>0?`${e}:${t}:${n}:${a}`:`${t}:${n}:${a}`}}};var gw=Object.defineProperty,mw=Object.getOwnPropertyDescriptor,ei=(r,e,t,i)=>{for(var s=i>1?void 0:i?mw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gw(e,t,s),s};let kr=class extends Xe{constructor(){super(...arguments),this._active=!1}get active(){return this._active}willUpdate(r){super.willUpdate(r),r.has("duration")&&this.from!==void 0&&this.duration!==void 0&&(this.to=this.from+this.duration),r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),r.has("from")&&!r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),(r.has("from")||r.has("to")||r.has("duration"))&&this.dispatchEvent(new CustomEvent("modified",{bubbles:!0,cancelable:!1,composed:!0}))}activate(){this._active===!1&&(this._active=!0)}deactivate(){this._active===!0&&(this._active=!1)}setMs(r){this.from!==void 0&&this.to!==void 0&&(r>=this.from&&r<this.to?this.activate():this.deactivate())}getRenderContent(){return Array.from(this.slotContent)}getTTSString(){}render(){return p`
            <slot style="display: none;"></slot>
        `}};ei([m({type:Number,reflect:!0,converter:lo})],kr.prototype,"from",2);ei([m({type:Number,reflect:!0,converter:lo})],kr.prototype,"to",2);ei([m({type:Number,reflect:!0,converter:lo})],kr.prototype,"duration",2);ei([m({type:String,reflect:!0})],kr.prototype,"label",2);ei([m({type:String})],kr.prototype,"image",2);ei([m({type:String,reflect:!0})],kr.prototype,"say",2);ei([m({type:String,reflect:!0})],kr.prototype,"color",2);ei([w()],kr.prototype,"_active",2);ei([di()],kr.prototype,"slotContent",2);kr=ei([Z("notation-entry")],kr);const Zu="NotationListContext",Ju="NotationCurrentContext",Qu="NotationDurationContext",sa=r=>r.filter(e=>e instanceof kr),vw=(r,e)=>{const t=[];for(const i of e.notationList)i.from!==void 0&&i.to!==void 0&&(i.from<=r&&i.to>r?(t.push(i),i.activate()):i.deactivate());return t};var yw=Object.defineProperty,bw=Object.getOwnPropertyDescriptor,ho=(r,e,t,i)=>{for(var s=i>1?void 0:i?bw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yw(e,t,s),s};let Ps=class extends Xe{constructor(){super(...arguments),this.showlabel=!0,this.showTime=!0}renderEntry(e){const t=this.showlabel===!0?e.label:P,i=this.showTime===!0&&e.from!==void 0&&e.to!==void 0?[ht(e.from,"mm:ss.SSS"),ht(e.to,"mm:ss.SSS")].join(" - "):P,s=e.getRenderContent(),n=e.image!==void 0?p`<img src="${e.image}" class="builtin-image" />`:P;return p`<article>
            ${i!==P?p`<div class="time">${i}</div>`:P}${t!==P?p`<h1 style="${e.color?`background-color:${e.color}`:""}">${t}</h1>`:P}${n}

            ${s.length>0?p`<div class="content">
                    ${s}
                </div>`:P}
        </article>`}render(){return p`${rh(this.entries,this.renderEntry.bind(this))}`}};Ps.styles=ce`
    
        article {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            line-height: 1em;

            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0px;
        }

        h1, .time {
            line-height: 1em;
            margin: 0;
            padding: 7px 10px;
            color: var(--thermal-background);
            display: inline-block;
            border: 0;
            outline: 0;
        }

        .content {
            
        }

        h1 {
            font-weight: bold;
            font-size: var(--thermal-fs);
            background: var(--thermal-primary-dark);
            border-radius: 0px var(--thermal-radius) var(--thermal-radius) 0px;
            border-left: 1px solid var(--thermal-foreground);
        }

        .time {
            font-size: 0.7em;
            background: var(--thermal-foreground);
            border-radius: var(--thermal-radius) var(--thermal-radius) var(--thermal-radius) 0px;
            border-left: 1px solid var(--thermal-foreground);
        }

        img {
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 0px var(--thermal-radius) var(--thermal-radius) var(--thermal-radius);
        }
    
    `;ho([w(),ge({context:Ju,subscribe:!0})],Ps.prototype,"entries",2);ho([m({converter:nt(!0)})],Ps.prototype,"showlabel",2);ho([m({converter:nt(!0)})],Ps.prototype,"showTime",2);Ps=ho([Z("notation-content")],Ps);var ww=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,ah=(r,e,t,i)=>{for(var s=i>1?void 0:i?xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ww(e,t,s),s};let vn=class extends mt{constructor(){super(...arguments),this.durationConverter=lo}onInstanceCreated(){}onFailure(){}renderEntry(r){if(r.from!==void 0&&r.to!==void 0){const e=r.from/this.duration*100,i=r.to/this.duration*100-e;return p`<button class="entry" style="left: ${e}%; width: ${i}%; ${r.color?`background-color: ${r.color};`:""}}" @click=${()=>{var s;return(s=this.file)==null?void 0:s.timeline.setRelativeTime(r.from+1)}}>
                ${r.label!==void 0?p`<div class="entry-tooltip">
                    <div class="time">${this.durationConverter.toAttribute(r.from)} - ${this.durationConverter.toAttribute(r.to)}</div>
                    <div class="label">${r.label}</div>
                </div>`:P}
            </button>`}return P}render(){return p`<div class="container">
            ${rh(this.entries,this.renderEntry.bind(this))}
        </div>`}};vn.styles=ce`
    
        ::host {
            width: 100%;
            box-sizing: border-box;
            height: 5px;
            position: relative;
            margin-bottom: 5px;
            margin-top: 3px;
            display: block;
            overflow: hidden;
        }

        .container {
            width: 100%;
            position: relative;
            height: 5px;
            top: 0px;
        }

        .entry {
            height: 7px;
            background: var(--thermal-foreground);
            position: absolute;
            top: -2px;
            cursor: pointer;
            border: 0;
            border-left: 1px solid var(--thermal-foreground);
            box-sizing: border-box;
        }

        .entry:nth-child(2n) {
            background-color: var(--thermal-slate-dark);
        }

        .entry-tooltip {
            display: none;
            z-index: 99999;
        }

        .entry:hover,
        .entry:focus {

            background: var(--thermal-primary);
            box-shadow: var(--thermal-shadow);

            .entry-tooltip {

                display: block;
                position: absolute;
                left: -1px;
                bottom: 7px;
                width: 0px;
                text-align: center;

                > div {

                    display: inline-block;
                    padding: 5px 7px;
                    white-space: preserve nowrap;
                    background: var(--thermal-primary-dark);
                    color: var(--thermal-background);
                    text-align: center;
                    
                    border-left: 1px solid var(--thermal-foreground);

                    &.time {
                        border-radius: var(--thermal-radius) var(--thermal-radius) var(--thermal-radius) 0px;
                        font-size: 0.7em;
                        background: var(--thermal-foreground);
                        color: var(--thermal-background);
                    }
                    &.label {
                        border-radius: 0px var(--thermal-radius) var(--thermal-radius) 0px;
                        border-bottom: 1px solid var(--thermal-foreground);
                    }

                    

                }
            }

        }

    `;ah([w(),ge({context:Zu,subscribe:!0})],vn.prototype,"entries",2);ah([ge({context:Qu,subscribe:!0})],vn.prototype,"duration",2);vn=ah([Z("notation-timeline")],vn);var Sw=Object.defineProperty,$w=Object.getOwnPropertyDescriptor,js=(r,e,t,i)=>{for(var s=i>1?void 0:i?$w(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sw(e,t,s),s};let ts=class extends mt{constructor(){super(...arguments),this.ms=0,this.duration=0,this.notationList=[],this.observer=null}onInstanceCreated(r){var e;this.duration=r.timeline.duration,setTimeout(()=>{this.observeSlotChanges(),this.updateNotationsMs(this.ms)},0),r.timeline.addListener(this.UUID,t=>this.ms=t),(e=this.shadowRoot)==null||e.addEventListener("modified",()=>{this.notationList=sa(this._notationSlot)})}onFailure(){}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector("slot");r&&(this.notationList=sa(this._notationSlot),this.observer=new MutationObserver(()=>{this.notationList=sa(this._notationSlot)}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=sa(this._notationSlot)}))}update(r){super.update(r),r.has("ms")&&this.ms&&this.updateNotationsMs(this.ms)}updateNotationsMs(r){this.notationCurrent=vw(r,this)}render(){return p`<slot name="notation"></slot>
        <slot></slot>`}};js([w(),di({slot:"notation",flatten:!0})],ts.prototype,"_notationSlot",2);js([w()],ts.prototype,"ms",2);js([w(),Y({context:Qu})],ts.prototype,"duration",2);js([w(),Y({context:Zu})],ts.prototype,"notationList",2);js([w(),Y({context:Ju})],ts.prototype,"notationCurrent",2);ts=js([Z("notation-provider")],ts);var kw=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,br=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kw(e,t,s),s};let Kt=class extends Xe{constructor(){super(...arguments),this.dropinRef=_e(),this.groupRef=_e(),this.loaded=!1,this.files=[],this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback(),Tu().then(r=>this.ip=r)}firstUpdated(r){super.firstUpdated(r),Ls(this),this.groupRef.value!==void 0&&this.groupRef.value.group.files.addListener(this.UUID,e=>{this.groupRef.value!==void 0&&(this.groupRef.value.group.analysisSync.turnOff(),e.length>0&&this.groupRef.value.group.analysisSync.turnOn(e[0])),e.forEach(t=>{t.analysis.reset(),t.analysis.layers.clear();const i={ip:this.ip,fileName:t.fileName,fileSize:t.bytesize,fileIsSequence:t.timeline.isSequence,fileNumFrames:t.timeline.frameCount,fileWidth:t.width,fileHeight:t.height,fileTimestamp:t.timeline.frames[0].absolute,fileDataType:t.fileDataType,userAgent:window.navigator.userAgent,windowWidth:window.innerWidth,windowHeight:window.innerHeight,time:new Date().getTime(),url:window.location.href};this.dispatchEvent(new CustomEvent("uploaded",{detail:i,bubbles:!0,composed:!0}))}),this.listener!==void 0&&clearTimeout(this.listener),e.length===0?this.files=[]:this.files=[e[0]],this.listener=setTimeout(async()=>{var i;const t=(i=this.groupRef.value)==null?void 0:i.group.registry;t!==void 0&&(await t.postLoadedProcessing(),t.minmax.value!==void 0&&t.range.imposeRange({from:t.minmax.value.min,to:t.minmax.value.max}))},0),this.log("files",e)})}handleClear(){this.groupRef.value!==void 0&&this.groupRef.value.group.files.removeAllInstances()}renderIntroScene(){return p`
            <group-dropin></group-dropin>
        `}renderBrowserScene(){return p`
        <div class="browser-bar" slot="pre">
            <registry-histogram expandable="true"></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
            
        </div>

        <div class="browser">
            
            <div class="browser-tools">
                <group-tool-bar></group-tool-bar>
            </div>
            <div class="browser-content">
                ${this.files.length===1?this.renderOneFile():this.renderMultipleFiles()}
            </div>
        </div>
        `}renderOneFile(){return p`
        ${this.files.map(r=>this.renderDetail(r,!0))}
        `}renderFileHeader(r){return p`
            <header>
                <div class="file-label">

                    <thermal-button
                        @click=${()=>r.group.files.removeFile(r)}
                        variant="foreground"
                    >x</thermal-button>

                    <file-info-button>
                        <thermal-button slot="invoker">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" height="1.5em" style="margin-bottom: -5px;">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
                            </svg>


                            ${r.fileName}

                        </thermal-button>
                    </file-info-button>

                    <file-download-dropdown></file-download-dropdown>

                    <div>${Dt.human(r.timestamp)}</div>
                </div>
            </header>
        `}renderDetail(r,e=!1){return p`
            <article class="file">
                <file-mirror .file="${r}" autoclear="true">

                    ${this.renderFileHeader(r)}

                    ${e===!0?p`
                        <div class="file-expanded">
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                            </div>
                            <div>
                                <file-analysis-complex></file-analysis-complex>
                            </div>
                        </div>
                        `:p`
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                                <file-analysis-overview></file-analysis-overview>
                                <file-analysis-graph></file-analysis-graph>
                            </div>
                        `}
                
                </file-mirror>
            </article>
        `}renderMultipleFiles(){return p`
        <div class="files-multiple">
        ${this.files.map(r=>this.renderDetail(r,!1))}
        </div>
        `}render(){try{return p`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${De(this.groupRef)} slug="${this.UUID}">

                        <thermal-app 
                            label="LabIR Edu Analyser"
                            showfullscreen="true"
                        >

                            <group-dropin-input slot="bar-pre"></group-dropin-input>

                            ${this.files.length>0?p`
                                <thermal-button slot="bar-pre" @click="${()=>this.handleClear()}">${$(S.clear)}</thermal-button>

                                <registry-palette-dropdown slot="bar-pre"></registry-palette-dropdown>

                                <registry-range-full-button slot="bar-pre"></registry-range-full-button>

                                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                                        
                                `:P}

                            ${this.files.length>1?p`
                                    <group-download-dropdown slot="bar-pre"></group-download-dropdown><registry-range-full-button slot="bar-pre"></registry-range-full-button>`:P}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${$(S.config)}" slot="bar-pre">
                                <thermal-button slot="invoker">
                                    <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                        <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                                    </svg>
                                </thermal-button>
                                <div slot="content">
                                    <table>
                                        <png-export-panel></png-export-panel>
                                        <registry-display-panel></registry-display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            <slot name="bar-pre" slot="bar-pre"></slot>

                            ${this.files.length===0?this.renderIntroScene():this.renderBrowserScene()}
                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}catch{return p`Stala se chyba`}}};Kt.styles=ce`
    
        .browser {
            display: grid;
            grid-template-columns: 2rem 1fr;
            gap: var(--thermal-gap);
            padding-top: var(--thermal-gap);
        }

        .file {
            border: 1px solid var(--thermal-slate);
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

    `;br([w()],Kt.prototype,"dropinRef",2);br([w()],Kt.prototype,"groupRef",2);br([w()],Kt.prototype,"loaded",2);br([w()],Kt.prototype,"listener",2);br([w()],Kt.prototype,"files",2);br([w()],Kt.prototype,"ip",2);br([Y({context:ns})],Kt.prototype,"interactiveanalysis",2);br([Y({context:Ti})],Kt.prototype,"pngExportWidth",2);br([Y({context:Ms})],Kt.prototype,"pngExportWidthSetterContext",2);br([Y({context:Ii})],Kt.prototype,"pngExportFs",2);br([Y({context:Rs})],Kt.prototype,"pngExportFsSetterContext",2);br([Y({context:rs}),m({reflect:!0,converter:Os})],Kt.prototype,"locale",2);Kt=br([Z("thermal-dropin-app")],Kt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=r=>Vp(r)?r._$litType$.h:r.strings,na=bn(class extends Ta{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){const t=Xh(this.it)?Kc(this.it):null,i=Xh(e)?Kc(e):null;if(t!==null&&(i===null||t!==i)){const s=Qh(r).pop();let n=this.et.get(t);if(n===void 0){const a=document.createDocumentFragment();n=pd(P,a),n.setConnected(!1),this.et.set(t,n)}Jh(n,[s]),Zh(n,void 0,s)}if(i!==null){if(t===null||t!==i){const s=this.et.get(i);if(s!==void 0){const n=Qh(s).pop();qp(r),Zh(r,void 0,n),Jh(r,[n])}}this.it=e}else this.it=void 0;return this.render(e)}});var _w=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,He=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_w(e,t,s),s};const Zc=[{key:"simple",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},{key:"advanced",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12L21 12M12 3L12 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},{key:"lesson",icon:'<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentcolor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>layout_11_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Design" transform="translate(-48.000000, -288.000000)"> <g id="layout_11_line" transform="translate(48.000000, 288.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3,5 C3,3.89543 3.89543,3 5,3 L19,3 C20.1046,3 21,3.89543 21,5 L21,19 C21,20.1046 20.1046,21 19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,5 Z M8,5 L5,5 L5,19 L8,19 L8,5 Z M10,5 L10,8 L19,8 L19,5 L10,5 Z M10,10 L10,19 L19,19 L19,10 L10,10 Z" id="形状" fill="currentcolor"> </path> </g> </g> </g> </g></svg>'}],Aw=["analysis1","analysis2","analysis3","analysis4","analysis5","analysis6","analysis7"];let Ue=class extends Xe{constructor(){super(...arguments),this.fileProviderRef=_e(),this.layout="simple",this.palette="jet",this.opacity=1,this.showfullscreen=!0,this.showscale=!0,this.showhistogram=!0,this.showlayout=!1,this.showshare=!1,this.interactiveanalysis=!0,this.loading=!0,this.hasVisible=!1,this.ms=0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}get file(){if(this.fileProviderRef.value!==void 0)return this.fileProviderRef.value.file}firstUpdated(r){super.firstUpdated(r),Ls(this),this.hydrateInternalListeners()}hydrateInternalListeners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,r=>{this.loading=!1,this.recorded=Dt.human(r.timestamp),this.hasVisible=r.visibleUrl!==void 0,r.group.registry.range.addListener(this.UUID+"mirror_changes",e=>{e===void 0?(this.from=void 0,this.to=void 0):(this.from!==e.from&&(this.from=e.from),this.to!==e.to&&(this.to=e.to))}),r.group.registry.opacity.addListener(this.UUID+"mirror_changes",e=>{e!==this.opacity&&(this.opacity=e)}),r.group.registry.manager.palette.addListener(this.UUID+"mirror_changes",e=>{this.palette!==e&&(this.palette=e)}),r.slots.onSlot1Serialize.set(this.UUID,e=>{this.analysis1!==e&&(this.analysis1=e)}),r.slots.onSlot2Serialize.set(this.UUID,e=>{this.analysis2!==e&&(this.analysis2=e)}),r.slots.onSlot3Serialize.set(this.UUID,e=>{this.analysis3!==e&&(this.analysis3=e)}),r.slots.onSlot4Serialize.set(this.UUID,e=>{this.analysis4!==e&&(this.analysis4=e)}),r.slots.onSlot5Serialize.set(this.UUID,e=>{this.analysis5!==e&&(this.analysis5=e)}),r.slots.onSlot6Serialize.set(this.UUID,e=>{this.analysis6!==e&&(this.analysis6=e)}),r.slots.onSlot7Serialize.set(this.UUID,e=>{this.analysis7!==e&&(this.analysis7=e)})})}updated(r){if(super.updated(r),this.file!==void 0){const t=this.file.group.registry,i=t.manager;r.has("from")&&r.has("to")&&(this.from!==void 0&&this.to!==void 0?this.file.group.registry.range.imposeRange({from:this.from,to:this.to}):this.file.group.registry.range.imposeRange(void 0)),r.has("opacity")&&this.opacity!==void 0&&this.opacity!==t.opacity.value&&this.file.group.registry.opacity.imposeOpacity(this.opacity),r.has("palette")&&this.palette!==i.palette.value&&i.palette.setPalette(this.palette),Aw.forEach((s,n)=>{var a;if(this.file!==void 0&&r.has(s)){const o=n+1,l=this[s],h=(a=this.file.slots.getSlot(o))==null?void 0:a.serialized;if(l!==h){const u=this.file.slots.getSlot(o);l!==void 0?u!==void 0?u.recieveSerialized(l):this.file.slots.createFromSerialized(l,o):this.file.slots.hasSlot(o)&&this.file.slots.removeSlotAndAnalysis(o)}}})}this.outerHTMLSnapshot=this.outerHTML}getLabel(){return this.loading===!0?$(S.loading):this.label!==void 0?this.label:this.label===void 0&&this.file!==void 0?this.file.fileName:$(S.file)}setLayout(r){this.layout=r,setTimeout(()=>{this.fileProviderRef.value&&this.file&&this.fileProviderRef.value.redraw()},0)}renderNogui(){return p`
            ${this.renderScale()}
            <file-canvas></file-canvas>
            <file-timeline></file-timeline>
            <file-analysis-table ></file-analysis-table>
            <file-analysis-graph></file-analysis-graph>
    `}renderApp(){return p`
        
            <thermal-app
                label="${this.getLabel()}"
                author="${Ge(this.author)}"
                license="${Ge(this.license)}"
                showfullscreen="${this.showfullscreen}"
                recorded="${Ge(this.recorded)}"
            >

                ${this.showlayout?this.renderLayoutSwitch():P}

                ${na(p`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                <registry-range-full-button slot="bar-pre"></registry-range-full-button>
                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                <file-info-button slot="bar-pre"></file-info-button>
                <file-download-dropdown slot="bar-pre"></file-download-dropdown>
                ${this.hasVisible?p`<registry-opacity-slider  slot="bar-pre"></registry-opacity-slider>`:P}
                `)}

                ${this.showshare?p`<thermal-dialog label="${$(S.share)}" slot="bar-post" class="share">
                    <thermal-button slot="invoker">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12 6a2 2 0 1 0-1.994-1.842L5.323 6.5a2 2 0 1 0 0 3l4.683 2.342a2 2 0 1 0 .67-1.342L5.995 8.158a2.03 2.03 0 0 0 0-.316L10.677 5.5c.353.311.816.5 1.323.5Z" />
                        </svg>
                    </thermal-button>
                    <div slot="content">
                        <p>${$(S.embedhint)}</p>
                        <h2>1. ${$(S.embedlibrary)} <thermal-button @click="${()=>navigator.clipboard.writeText(`<script src="https://cdn.jsdelivr.net/npm/@labir/embed@${fs}/dist/embed.min.js"><\/script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@${fs}/dist/embed.min.css">`)}">${$(S.copy)}</thermal-button></h2>
                        <pre>&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${fs}/dist/embed.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/npm/@labir/embed@${fs}/dist/embed.min.css&quot;&gt;</pre>
                        <h2>2. ${$(S.embedcomponent)} <thermal-button @click="${()=>navigator.clipboard.writeText(this.outerHTMLSnapshot)}">${$(S.copy)}</thermal-button></h2>
                        <pre>${this.outerHTMLSnapshot}</pre>
                    </div>
                </thermal-dialog>`:P}

                ${na(p`<thermal-dialog label="${$(S.config)}" slot="bar-post">
                    <thermal-button slot="invoker">
                        <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                        </svg>

                    </thermal-button>
                    <div slot="content">
                        <table>
                        <png-export-panel></png-export-panel>
                        <registry-display-panel></registry-display-panel>
                        </table>
                    </div>
                </thermal-dialog> `)}
                
    
                <div class="layout layout__${this.layout}">
                    <aside class="toolbar">
                        <group-tool-bar></group-tool-bar>
                    </aside>
                    <main class="thermogram">
                        ${this.layout==="advanced"||this.layout==="lesson"?this.renderScale():P}
                        ${na(p`<file-canvas></file-canvas>`)}
                        <file-timeline></file-timeline>
                    </main>
                    <notation-content class="notations"></notation-content>

                    ${this.layout==="advanced"?p`<file-analysis-complex class="complex"></file-abnalysis-complex>`:p`<file-analysis-table class="analysis"></file-analysis-table>
                        <file-analysis-graph class="graph"></file-analysis-graph>`}
                </div>


                ${this.layout==="simple"?p`<aside slot="pre">${this.renderScale()}</aside>`:P}


            </thermal-app>`}renderScale(){return p`${this.showhistogram?na(p`<registry-histogram expandable="true"></registry-histogram>`):P}
    ${this.showscale?p`<registry-range-slider></registry-range-slider>`:P}
    ${this.showhistogram||this.showscale?p`<registry-ticks-bar placement="top"></registry-ticks-bar>`:P}`}renderOneLayoutItem(r,e,t=!1){return p`<div class="layout-item">
        ${Kl(r)}
        ${t?p`<span>${$(S[`layout_${e}`])}</span>`:P}
    </div>`}renderLayoutSwitch(){const r=Zc.find(t=>t.key===this.layout);if(!r)return P;const e=Zc.map(t=>({...t,action:t.key!==this.layout?()=>this.setLayout(t.key):void 0}));return p`<thermal-dropdown slot="bar-post">
        <div slot="invoker">
            ${this.renderOneLayoutItem(r.icon,r.key,!1)}
        </div>
        
        ${e.map(t=>p`<div 
            slot="option" 
            class="layout-option ${t.action?"current":"available"}"
            @click=${t.action}
        >${this.renderOneLayoutItem(t.icon,t.key,!0)}</div>`)}

    </thermal-dropdown>`}render(){return p`

    <manager-provider 
        slug="${this.UUID}"
        palette="${this.palette}"
    >
        <registry-provider 
            slug="${this.UUID}"
            from="${Ge(this.from)}"
            to="${Ge(this.to)}"
            opacity="${this.opacity}"
        >
            <group-provider slug="${this.UUID}">

                <file-provider 
                    ${De(this.fileProviderRef)} 
                    thermal="${this.url}"
                    visible="${Ge(this.visible)}"
                    batch="true"
                    analysis1="${Ge(this.analysis1)}"
                    analysis2="${Ge(this.analysis2)}"
                    analysis3="${Ge(this.analysis3)}"
                    analysis4="${Ge(this.analysis4)}"
                    analysis5="${Ge(this.analysis5)}"
                    analysis6="${Ge(this.analysis6)}"
                    analysis7="${Ge(this.analysis7)}"
                    autoclear="true"
                >
                    <notation-provider>

                        <slot name="notation" slot="notation"></slot>

                        ${this.layout==="nogui"?this.renderNogui():this.renderApp()}

                    </notation-provider>

                </file-provider>

            </group-provider>
        </registry-provider>
    </manager-provider>`}};Ue.styles=ce`

    .layout-option {

        &.current {

            .layout-item {
                cursor: pointer;
                color: var(--thermal-foreground);
                &:hover {
                    color: var(--thermal-primary);
                }
            }
        
        }
        &.available {
            .layout-item {
                opacity: .5;
            }
        }
    }

    .layout-item {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 5px;
        
        svg {
            width: 1em;
        }
        span {
            font-size: 12px;
        }

        
    }

    .layout {

        display: grid;
        gap: var(--thermal-gap);

        .toolbar { grid-area: toolbar; }
        .thermogram { grid-area: thermogram; }
        .complex { grid-area: complex; }
        .notations { grid-area: notations; }
        .graph { grid-area: graph; }
        .analysis { grid-area: analysis; }
    
        &.layout__advanced {

            grid-template-columns: 2em 1fr calc(50% - var(--thermal-gap) );

            grid-template-areas:
                "toolbar thermogram complex"
                "toolbar thermogram complex"
                "notations notations notations";

                @media(max-width: 800px) {
                grid-template-columns: 2em calc(100% - 3em);
                grid-template-areas: 
                    "toolbar thermogram"
                    "toolbar notations"
                    "toolbar complex";
            }

        }

        &.layout__simple {

            gap: 0px;
            grid-template-columns: 2.5em 1fr;
            grid-template-rows: auto;

            grid-template-areas: 
                "toolbar thermogram" 
                "toolbar analysis" 
                "toolbar graph" 
                "toolbar notations" 
                "toolbar complex";

            .analysis,
            .graph,
            .complex,
            .notations {
                // border: 10px solid red;
            }
        }


        &.layout__lesson {
            grid-template-columns: 2em 1fr calc(40% - var(--thermal-gap) );

            grid-template-areas: 
                "toolbar thermogram notations" 
                "toolbar analysis graph";

            @media(max-width: 800px) {
                grid-template-columns: 2em calc(100% - 3em);
                grid-template-areas: 
                    "toolbar thermogram"
                    "toolbar notations"
                    "toolbar analysis"
                    "toolbar graph";
            }

            .thermogram {
                padding: var(--thermal-gap);
                border: 1px solid var(--thermal-slate);
                border-radius: var(--thermal-radius);
                background: var(--thermal-background);
            }
        }

    }

    .share {
        svg {
            width: 1em;
            translateY: 3px;
        }

        pre {
            padding: var(--thermal-gap);
            border-radius: var(--thermal-radius);
            background: var(--thermal-background);
            color: var(--thermal-foreground);
            border: 1px solid var(--thermal-slate);
            white-space: pre-wrap;
        }
    }

`;He([m({type:String,reflect:!0})],Ue.prototype,"layout",2);He([m({type:String,reflect:!0})],Ue.prototype,"url",2);He([m({type:String,reflect:!0})],Ue.prototype,"visible",2);He([m({type:String,reflect:!0,attribute:!0})],Ue.prototype,"palette",2);He([m({type:Number,reflect:!0})],Ue.prototype,"from",2);He([m({type:Number,reflect:!0})],Ue.prototype,"to",2);He([m({type:Number,reflect:!0})],Ue.prototype,"opacity",2);He([m()],Ue.prototype,"author",2);He([w()],Ue.prototype,"recorded",2);He([m()],Ue.prototype,"license",2);He([m()],Ue.prototype,"label",2);He([m({type:String,reflect:!1,converter:nt(!0)})],Ue.prototype,"showfullscreen",2);He([m({type:Boolean,reflect:!0,converter:nt(!0)})],Ue.prototype,"showscale",2);He([m({type:Boolean,reflect:!0,converter:nt(!0)})],Ue.prototype,"showhistogram",2);He([m({type:Boolean,reflect:!0,converter:nt(!1)})],Ue.prototype,"showlayout",2);He([m({type:Boolean,reflect:!0,converter:nt(!1)})],Ue.prototype,"showshare",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis1",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis2",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis3",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis4",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis5",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis6",2);He([m({type:String,reflect:!0})],Ue.prototype,"analysis7",2);He([Y({context:rs}),m({reflect:!0,converter:Os})],Ue.prototype,"locale",2);He([Y({context:ns}),m({type:String,reflect:!0,converter:nt(!0)})],Ue.prototype,"interactiveanalysis",2);He([w()],Ue.prototype,"loading",2);He([w()],Ue.prototype,"hasVisible",2);He([w()],Ue.prototype,"ms",2);He([Y({context:Ti})],Ue.prototype,"pngExportWidth",2);He([Y({context:Ms})],Ue.prototype,"pngExportWidthSetterContext",2);He([Y({context:Ii})],Ue.prototype,"pngExportFs",2);He([Y({context:Rs})],Ue.prototype,"pngExportFsSetterContext",2);He([w()],Ue.prototype,"outerHTMLSnapshot",2);Ue=He([Z("thermal-file-app")],Ue);var Lw=Object.defineProperty,Ur=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Lw(e,t,s),s},Et;const Pr=(Et=class extends Xe{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=e=>{this.pngExportWidth=e},this.pngExportFs=20,this.pngExportFsSetterContext=e=>{this.pngExportFs=e}}parseFilesProperty(e){return e.split(Et.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(Et.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(Et.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,d]=h,g=u.trim(),b=d.trim();switch(g){case Et.FILE_THERMAL_KEY:s=b;break;case Et.FILE_VISIBLE_KEY:n=b;break;case Et.FILE_LABEL_KEY:a=b;break;case Et.FILE_NOTE_KEY:o=b;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},Et.FILE_RECORD_SEPARATOR=";",Et.FILE_SEGMENT_SEPAROATOR="|",Et.FILE_COMPONENT_SEPAROATOR="~",Et.FILE_THERMAL_KEY="thermal",Et.FILE_VISIBLE_KEY="visible",Et.FILE_LABEL_KEY="label",Et.FILE_NOTE_KEY="note",Et);Ur([m({type:String,reflect:!1,attribute:!0,converter:nt(!1)})],Pr.prototype,"showembed");Ur([m({type:String,reflect:!1,attribute:!0,converter:nt(!1)})],Pr.prototype,"showabout");Ur([m({type:String,reflect:!1,attribute:!0,converter:nt(!1)})],Pr.prototype,"showtutorial");Ur([m({type:String,reflect:!1,converter:nt(!0)})],Pr.prototype,"showfullscreen");Ur([m({type:String,reflect:!0,converter:nt(!0)})],Pr.prototype,"showhistogram");Ur([Y({context:ns}),m({type:String,reflect:!0,converter:nt(!0)})],Pr.prototype,"interactiveanalysis");Ur([Y({context:Ti})],Pr.prototype,"pngExportWidth");Ur([Y({context:Ms})],Pr.prototype,"pngExportWidthSetterContext");Ur([Y({context:Ii})],Pr.prototype,"pngExportFs");Ur([Y({context:Rs})],Pr.prototype,"pngExportFsSetterContext");Ur([Y({context:rs}),m({reflect:!0,converter:Os})],Pr.prototype,"locale");let Ow=Pr;class Ew{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ki)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};i.lrc!==void 0&&(t===void 0?(t=this.group.registry.batch.request(i.lrc,i.png,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.lrc,i.png,this.group,s))})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ki)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?qg(e).getTime():this.grouping==="day"?el(e).getTime():this.grouping==="week"?Xi(e).getTime():this.grouping==="month"?mc(e).getTime():this.grouping==="year"?Ld(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?eg(e).getTime():this.grouping==="day"?Jf(e).getTime():this.grouping==="week"?vc(e).getTime():this.grouping==="month"?gc(e).getTime():this.grouping==="year"?Qf(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:ht(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:ht(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+ht(e,"w")+" of "+ht(e,"yyyy"),info:[Dt.humanDate(Xi(e).getTime()),Dt.humanDate(vc(e).getTime())].join(" - ")}:this.grouping==="month"?{label:ht(e,"MMMM yyyy"),info:[Dt.humanDate(mc(e).getTime()),Dt.humanDate(gc(e).getTime())].join(" - ")}:this.grouping==="year"?{label:ht(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?Dt.human(e):this.grouping==="hour"||this.grouping==="day"?ht(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",Dt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var Dw=Object.defineProperty,Mw=Object.getOwnPropertyDescriptor,ct=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dw(e,t,s),s};let st=class extends Ow{constructor(){super(...arguments),this.groupRef=_e(),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new re,this.onColumns=new re,this.preservetime=!0,this.state=0,this.detail=void 0,this.loading=!1}connectedCallback(){super.connectedCallback();const t=$u(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new Ew(this,t),this.onGroupInit.call(this.group)}async load(){this.loading=!0;const r=this.files?this.parseFilesProperty(this.files):[];r.length>0?this.grouper.processParsedFiles(r):this.grouper.processEntries(this.entries.filter(e=>e instanceof Li)),this.group.files.addListener(this.UUID,e=>{this.loading=!1,e.length<4?this.columns=e.length:this.columns=4})}firstUpdated(r){super.firstUpdated(r),Ls(this),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to}),setTimeout(()=>this.load(),0)}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&(this.log(this.files),this.files&&r.get("files")!==void 0)){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}async showDetail(r,e){this.detail={lrc:r,png:e},this.group.files.removeAllInstances(),this.group.registry.range.reset(),this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.state=1,this.scrollToComponent()}async closeDetail(){delete this.detail,this.detail=void 0,this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.group.registry.range.reset(),this.load(),this.state=0,this.scrollToComponent()}renderGroup(){return p`${this.groups.map(r=>p`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${r.files.map(e=>p`<div class="file">
                    <file-mirror .file=${e.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${()=>{this.showDetail(e.instance.thermalUrl,e.instance.visibleUrl)}}
                            label=${Ge(e.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `}renderDetail(){return this.detail===void 0?P:p`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${()=>this.closeDetail()}></file-detail>
            </file-provider>
        </div>`}render(){return p`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${Ge(this.from)}" to="${Ge(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${De(this.groupRef)}>

                        <thermal-app
                            author=${Ge(this.author)}
                            license=${Ge(this.license)}
                            showfullscreen="true"
                            label=${Ge(this.label)}
                        >

                            ${this.loading===!1?p`

                                <registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>

                                <registry-range-full-button slot="bar-pre"></registry-range-full-button>

                                <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>
                                        

                                ${this.state===0?p`
                                        ${this.grouper.numFiles>0?p`<group-download-dropdown slot="bar-pre"></group-download-dropdown>`:P}
                                        <div slot="bar-pre">
                                            <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}
                                            ></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${$(S.columns,{num:this.columns})}</div>
                                    </div>

                            <group-analysis-sync-button slot="bar-pre"></group-analysis-sync-button>
                                        `:P}
                                    

                            ${this.showabout===!0?p`<app-info-button slot="bar-pre"></app-info-button>`:P}

                                        `:P}

                            <thermal-dialog label="${$(S.config)}" slot="close">
                                <thermal-button slot="invoker" variant="plain">
                                    <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                        <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                                    </svg>

                                </thermal-button>
                                <div slot="content">
                                    <table>
                                        <png-export-panel></png-export-panel>
                                        <registry-display-panel></registry-display-panel>
                                    </table>
                                </div>
                            </thermal-dialog>

                            ${this.loading===!1?p`
                                    ${this.showhistogram===!0?p`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:P}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                `:P}
                            

                            ${this.state===0?p`
                                <group-chart slot="pre"></group-chart>
                            `:P}

                            ${this.loading===!0?p`<thermal-loading message="${$(S.loading)}"></thermal-loading>`:p`<div class="app-content">

                                    <slot></slot>

                                    <group-tool-bar></group-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state===0?this.renderGroup():this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${this.state===0?p`
                                <group-timeline></group-timeline>
                            `:P}
                            `}
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};st.styles=ce`


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
            border-radius: var(--thermal-gap);
            border: 1px solid var(--thermal-slate);
            width: 100%;
        }

        group-tool-bar {
            position: sticky;
            top: 0px;
            z-index: 999;
        }


    
    `;ct([m({type:String,reflect:!0,attribute:!0})],st.prototype,"palette",2);ct([m({type:Number,reflect:!0})],st.prototype,"from",2);ct([m({type:Number,reflect:!0})],st.prototype,"to",2);ct([m({type:String,reflect:!0})],st.prototype,"author",2);ct([m({type:String,reflect:!0})],st.prototype,"label",2);ct([m({type:String,reflect:!1})],st.prototype,"description",2);ct([m({type:String,reflect:!0})],st.prototype,"license",2);ct([w(),di({flatten:!0})],st.prototype,"entries",2);ct([m({type:String,reflect:!0})],st.prototype,"slug",2);ct([m()],st.prototype,"columns",2);ct([m()],st.prototype,"breakpoint",2);ct([m({type:String,reflect:!0})],st.prototype,"grouping",2);ct([w()],st.prototype,"groups",2);ct([m({type:String})],st.prototype,"files",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis1",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis2",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis3",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis4",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis5",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis6",2);ct([m({type:String,reflect:!0})],st.prototype,"analysis7",2);ct([m({type:String,reflect:!0,converter:nt(!1)})],st.prototype,"preservetime",2);ct([w()],st.prototype,"state",2);ct([w()],st.prototype,"detail",2);ct([w()],st.prototype,"loading",2);st=ct([Z("thermal-group-app")],st);var Bi=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(Bi||{});class Ko{constructor(e,t){c(this,"url");c(this,"query");this.api_endpoint=e,this.subfolder=t,this.url=new URL(this.api_endpoint),this.query=this.url.searchParams,this.subfolder!==void 0&&this.query.set("scope",this.subfolder)}setOnly(e){return this.query.set("only",e),this}setExclude(e){return this.query.set("exclude",e),this}setGrid(e){e===!0?this.query.set("grid","true"):this.query.delete("grid")}async info(){return this.fetch()}async folder(e){return this.query.set("folder",e),this.fetch()}async everything(){return this.query.set("everything","true"),this.fetch()}async hours(){return this.query.set("hours","true"),this.fetch()}async days(){return this.query.set("days","true"),this.fetch()}async weeks(){return this.query.set("weeks","true"),this.fetch()}async months(){return this.query.set("months","true"),this.fetch()}async years(){return this.query.set("years","true"),this.fetch()}async grid(e){switch(e){case"hours":return await this.hours();case"days":return await this.days();case"weeks":return await this.days();case"months":return await this.months();case"years":return await this.years();default:return await this.hours()}}async fetch(){return await(await fetch(this.url)).json()}get object(){return this.url}}const Rw={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},Tw=(r,e,t)=>{let i;const s=Rw[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},Iw={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},zw={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Uw={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Fw={date:Mt({formats:Iw,defaultWidth:"full"}),time:Mt({formats:zw,defaultWidth:"full"}),dateTime:Mt({formats:Uw,defaultWidth:"full"})},jw=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],Nw={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+jw[e]+" o' p"},other:"P"},Ww=(r,e)=>{const t=Nw[r];return typeof t=="function"?t(e):t},Hw={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},Bw={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},Vw={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},Gw={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},Yw={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},qw={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Xw={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},Kw=(r,e)=>Number(r)+".",Zw={ordinalNumber:Kw,era:dt({values:Hw,defaultWidth:"wide"}),quarter:dt({values:Bw,defaultWidth:"wide",argumentCallback:r=>r-1}),month:dt({values:Vw,defaultWidth:"wide",formattingValues:Gw,defaultFormattingWidth:"wide"}),day:dt({values:Yw,defaultWidth:"wide"}),dayPeriod:dt({values:qw,defaultWidth:"wide",formattingValues:Xw,defaultFormattingWidth:"wide"})},Jw=/^(\d+)\.?/i,Qw=/\d+/i,e2={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},t2={any:[/^p[řr]/i,/^(po|n)/i]},r2={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},i2={any:[/1/i,/2/i,/3/i,/4/i]},s2={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},n2={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},a2={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},o2={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},l2={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},h2={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},c2={ordinalNumber:xn({matchPattern:Jw,parsePattern:Qw,valueCallback:r=>parseInt(r,10)}),era:ut({matchPatterns:e2,defaultMatchWidth:"wide",parsePatterns:t2,defaultParseWidth:"any"}),quarter:ut({matchPatterns:r2,defaultMatchWidth:"wide",parsePatterns:i2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ut({matchPatterns:s2,defaultMatchWidth:"wide",parsePatterns:n2,defaultParseWidth:"any"}),day:ut({matchPatterns:a2,defaultMatchWidth:"wide",parsePatterns:o2,defaultParseWidth:"any"}),dayPeriod:ut({matchPatterns:l2,defaultMatchWidth:"any",parsePatterns:h2,defaultParseWidth:"any"})},d2={code:"cs",formatDistance:Tw,formatLong:Fw,formatRelative:Ww,localize:Zw,match:c2,options:{weekStartsOn:1,firstWeekContainsDate:4}},u2={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},p2=(r,e,t)=>{let i;const s=u2[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},f2={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},g2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},m2={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v2={date:Mt({formats:f2,defaultWidth:"full"}),time:Mt({formats:g2,defaultWidth:"full"}),dateTime:Mt({formats:m2,defaultWidth:"full"})},y2={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},b2=(r,e,t,i)=>y2[r],w2={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},x2={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},S2={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},$2={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},k2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},C2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},_2=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},P2={ordinalNumber:_2,era:dt({values:w2,defaultWidth:"wide"}),quarter:dt({values:x2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:dt({values:S2,defaultWidth:"wide"}),day:dt({values:$2,defaultWidth:"wide"}),dayPeriod:dt({values:k2,defaultWidth:"wide",formattingValues:C2,defaultFormattingWidth:"wide"})},A2=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,L2=/\d+/i,O2={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},E2={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},D2={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},M2={any:[/1/i,/2/i,/3/i,/4/i]},R2={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},T2={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},I2={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},z2={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},U2={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},F2={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},j2={ordinalNumber:xn({matchPattern:A2,parsePattern:L2,valueCallback:r=>parseInt(r,10)}),era:ut({matchPatterns:O2,defaultMatchWidth:"wide",parsePatterns:E2,defaultParseWidth:"any"}),quarter:ut({matchPatterns:D2,defaultMatchWidth:"wide",parsePatterns:M2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ut({matchPatterns:R2,defaultMatchWidth:"wide",parsePatterns:T2,defaultParseWidth:"any"}),day:ut({matchPatterns:I2,defaultMatchWidth:"wide",parsePatterns:z2,defaultParseWidth:"any"}),dayPeriod:ut({matchPatterns:U2,defaultMatchWidth:"any",parsePatterns:F2,defaultParseWidth:"any"})},N2={code:"cy",formatDistance:p2,formatLong:v2,formatRelative:b2,localize:P2,match:j2,options:{weekStartsOn:0,firstWeekContainsDate:1}},Jc={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},W2=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?Jc[r].withPreposition:Jc[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},H2={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},B2={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},V2={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},G2={date:Mt({formats:H2,defaultWidth:"full"}),time:Mt({formats:B2,defaultWidth:"full"}),dateTime:Mt({formats:V2,defaultWidth:"full"})},Y2={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},q2=(r,e,t,i)=>Y2[r],X2={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},K2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},wl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Z2={narrow:wl.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:wl.wide},J2={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Q2={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},ex={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},tx=r=>Number(r)+".",rx={ordinalNumber:tx,era:dt({values:X2,defaultWidth:"wide"}),quarter:dt({values:K2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:dt({values:wl,formattingValues:Z2,defaultWidth:"wide"}),day:dt({values:J2,defaultWidth:"wide"}),dayPeriod:dt({values:Q2,defaultWidth:"wide",formattingValues:ex,defaultFormattingWidth:"wide"})},ix=/^(\d+)(\.)?/i,sx=/\d+/i,nx={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ax={any:[/^v/i,/^n/i]},ox={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},lx={any:[/1/i,/2/i,/3/i,/4/i]},hx={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},cx={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},dx={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},ux={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},px={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},fx={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},gx={ordinalNumber:xn({matchPattern:ix,parsePattern:sx,valueCallback:r=>parseInt(r)}),era:ut({matchPatterns:nx,defaultMatchWidth:"wide",parsePatterns:ax,defaultParseWidth:"any"}),quarter:ut({matchPatterns:ox,defaultMatchWidth:"wide",parsePatterns:lx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ut({matchPatterns:hx,defaultMatchWidth:"wide",parsePatterns:cx,defaultParseWidth:"any"}),day:ut({matchPatterns:dx,defaultMatchWidth:"wide",parsePatterns:ux,defaultParseWidth:"any"}),dayPeriod:ut({matchPatterns:px,defaultMatchWidth:"wide",parsePatterns:fx,defaultParseWidth:"any"})},mx={code:"de",formatDistance:W2,formatLong:G2,formatRelative:q2,localize:rx,match:gx,options:{weekStartsOn:1,firstWeekContainsDate:4}},vx={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},yx={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},bx={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wx={date:Mt({formats:vx,defaultWidth:"full"}),time:Mt({formats:yx,defaultWidth:"full"}),dateTime:Mt({formats:bx,defaultWidth:"full"})},xx={code:"en-GB",formatDistance:Od,formatLong:wx,formatRelative:Ed,localize:Dd,match:Md,options:{weekStartsOn:1,firstWeekContainsDate:4}},Sx={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},$x=(r,e,t)=>{let i;const s=Sx[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},kx={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},Cx={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},_x={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Px={date:Mt({formats:kx,defaultWidth:"full"}),time:Mt({formats:Cx,defaultWidth:"full"}),dateTime:Mt({formats:_x,defaultWidth:"full"})},Ax={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},Lx=(r,e,t,i)=>Ax[r],Ox={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},Ex={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},Dx={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},Mx={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},Rx={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},Tx=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},Ix=["MMM","MMMM"],zx={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&Ix.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:Tx,era:dt({values:Ox,defaultWidth:"wide"}),quarter:dt({values:Ex,defaultWidth:"wide",argumentCallback:r=>r-1}),month:dt({values:Dx,defaultWidth:"wide"}),day:dt({values:Mx,defaultWidth:"wide"}),dayPeriod:dt({values:Rx,defaultWidth:"wide"})},Ux=/^(\d+)(ième|ère|ème|er|e)?/i,Fx=/\d+/i,jx={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},Nx={any:[/^av/i,/^ap/i]},Wx={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},Hx={any:[/1/i,/2/i,/3/i,/4/i]},Bx={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},Vx={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gx={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},Yx={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},qx={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},Xx={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},Kx={ordinalNumber:xn({matchPattern:Ux,parsePattern:Fx,valueCallback:r=>parseInt(r)}),era:ut({matchPatterns:jx,defaultMatchWidth:"wide",parsePatterns:Nx,defaultParseWidth:"any"}),quarter:ut({matchPatterns:Wx,defaultMatchWidth:"wide",parsePatterns:Hx,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ut({matchPatterns:Bx,defaultMatchWidth:"wide",parsePatterns:Vx,defaultParseWidth:"any"}),day:ut({matchPatterns:Gx,defaultMatchWidth:"wide",parsePatterns:Yx,defaultParseWidth:"any"}),dayPeriod:ut({matchPatterns:qx,defaultMatchWidth:"any",parsePatterns:Xx,defaultParseWidth:"any"})},Zx={code:"fr",formatDistance:$x,formatLong:Px,formatRelative:Lx,localize:zx,match:Kx,options:{weekStartsOn:1,firstWeekContainsDate:4}};var Jx=Object.defineProperty,Qx=Object.getOwnPropertyDescriptor,ft=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jx(e,t,s),s};const e5={en:xx,fr:Zx,de:mx,cy:N2,cs:d2};let ot=class extends Xe{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=Bi.HOURS,this.folders={},this.registryRef=_e(),this.interactiveAnalysis=!0,this.detail=void 0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback();const r=()=>{this.getBoundingClientRect().top<-50?this.classList.add("is-pinned"):this.classList.remove("is-pinned")};window.addEventListener("scroll",r),window.addEventListener("resize",r)}firstUpdated(r){super.firstUpdated(r),Ls(this)}updated(r){if(super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder),r.has("folders")){const e=Object.keys(this.folders);e.length===1&&this.actionOpenOneFolder(e[0])}this.registryRef.value&&this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var e;(e=this.registryRef.value)==null||e.registry.range.applyMinmax()})}async showDetail(r,e,t){this.detail={folder:r,lrc:e,png:t},this.state=3,this.resetRegistry(),this.scrollToComponent()}async closeDetail(){switch(delete this.detail,this.detail=void 0,typeof(this.dataMultiple??this.dataOnly)){case"undefined":this.state=0;break;case typeof this.dataOnly:this.state=1;break;case typeof this.dataMultiple:this.state=2;break}this.scrollToComponent()}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;try{const i=await new Ko(r,e).info();this.info=i,this.folders=i.folders,this.loadingInfo=!1}catch{this.error="There was an error loading info"}}async loadDataOne(r,e,t){this.loadingData=!1,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=await new Ko(e,t).folder(r);this.log("folder",r,s),this.scrollToComponent(),this.dataOnly=s,this.loadingData=!1,this.registryRef.value&&this.registryRef.value.registry.groups.addListener(this.UUID,n=>{n.forEach(a=>a.files.addListener(this.UUID,o=>{o[0]&&a.analysisSync.turnOn(o[0])}))})}async loadDataMultiple(r,e,t,i){var a;this.loadingData=!0,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=new Ko(t,i);s.setOnly(r.join(",")),s.setGrid(!0);const n=await s.grid(e);this.scrollToComponent(),this.dataMultiple=n,this.loadingData=!1,(a=this.registryRef.value)==null||a.registry.groups.removeListener(this.UUID)}async loadData(r,e,t,i){r.length>1?this.loadDataMultiple(r,e,t,i):r.length===1&&this.loadDataOne(r[0],t,i)}renderMainScreen(){return p`
<group-provider class="screen screen-main" autoclear="true" slug="main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>p`
        <button class="folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>

            <div class="folder-header">
                <div class="folder-header-text">
                    <h1>${r.name}</h1>
                    ${r.description!==void 0?p`<p>${r.description}</p>`:P}
                    <div>${$(S.numfiles,{num:r.lrc_count})}</div>
                </div>
                <div class="folder-header-icon">
                    ${r.lrc_count>1?p`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`:p`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`}
                </div>
            </div>

            <file-provider thermal="${r.preview.lrc}" batch="true" autoclear="true">
                <file-canvas style="pointer-events: none;"></file-canvas>
                <div class="open-button">
                    <thermal-button variant="primary">${$(S.open)}</thermal-button>
                </div>
            </file-provider>
            
        </button>
            `)}
    </nav>


</group-provider>

        `}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.reset(),this.registryRef.value.registry.minmax.reset(),this.registryRef.value.registry.range.reset(),this.registryRef.value.registry.opacity.imposeOpacity(1))}actionCloseToHomepage(){this.state=0,this.only=[],delete this.dataOnly,delete this.dataMultiple,this.resetRegistry()}actionOpenOneFolder(r){!this.only.includes(r)&&Object.keys(this.folders).includes(r)&&(this.state=1,this.only=[r],this.resetRegistry())}actionToggleFolder(r){this.only.includes(r)?(this.only=this.only.filter(e=>e!==r),this.resetRegistry(),this.only.length===0?this.actionCloseToHomepage():this.only.length===1?this.state=1:this.only.length>1&&(this.state=2)):Object.keys(this.folders).includes(r)&&(this.only=[...this.only,r],this.resetRegistry(),this.only.length>0&&(this.state=2))}actionShowEverything(){this.only=Object.keys(this.folders),this.resetRegistry(),this.state=2}renderLoading(r){return p`<div class="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            <div>${r}</div>
        </div>`}renderOne(){return this.loadingData||this.dataOnly===void 0?this.renderLoading("Loading folder data"):p`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(r=>p`<div>
                    <file-provider 
                        batch="true" 
                        thermal="${r.lrc}" 
                        visible="${r.png}"
                    >
                        <file-thumbnail
                            grouping="years"
                            .ondetail=${()=>{this.showDetail(this.dataOnly.info.name,r.lrc,r.png)}}
                        ></file-thumbnail>
                    </file-provider>
                    
                    </div>`)}
            
            </group-provider>
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0||this.dataMultiple.data===void 0)return this.renderLoading("Loading selected folders' data");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([s,n])=>({name:n.name,key:s})).length,i=Object.keys(Object.values(r)[0]).sort((s,n)=>s<n?-1:1);return p`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([s,n])=>{let a;const o=parseInt(s);return this.by===Bi.HOURS?a=ht(o*1e3,"d. M. yyyy - HH")+":00":this.by===Bi.DAYS?a=ht(o*1e3,"d. M. yyyy"):this.by===Bi.WEEKS?a=ht(o*1e3,"wo"):this.by===Bi.MONTHS?a=ht(o*1e3,"LLLL yyyy",{locale:e5[this._locale]}):this.by===Bi.YEARS&&(a=ht(o*1e3,"yyyy")),p`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${t}">
                                <div>
                                    <h2>${a}</h2>
                                    <group-provider slug="${s}" class="buttons">
                                        <group-range-propagator></group-range-propagator>

                                        <file-dropdown label="${$(S.download).toLowerCase()}">
                                            <group-download-buttons></group-download-buttons>
                                        </file-dropdown>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${s}" class="row">
                            ${i.map(l=>{const h=n[l];return p`<td class="cell-content" data-name="${h.name}">
                                    ${Object.values(h.files).map(u=>p`
                                    <div style="background-color: var(--thermal-background); padding: var(--thermal-gap); border-radius: var(--thermal-radius);">
                                        <file-provider
                                            batch="true"
                                            thermal="${u.lrc}"
                                            visible="${u.png}"
                                        >
                                            
                                            <file-thumbnail
                                                grouping="${this.by}"
                                                .ondetail=${()=>{this.showDetail(h.name,u.lrc,u.png)}}
                                            ></file-thumbnail>
                                        </file-provider>
                                    </div>
                                `)}
                                    
                                </td>`})}
                        </group-provider>
                    `})}
                </tbody>
            
            </table>

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return p`
<thermal-dropdown>
    <span slot="invoker">${$(S[`by${this.by}`])}</span>
    ${r.map(e=>p`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${$(S[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return P;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=t.length>0?p`<thermal-dropdown variant="background" class="selector">
                    <span slot="invoker">${e.name}</span>

                    ${t.map(n=>p`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                        <thermal-button>${n.name}</thermal-button>
                    </div>`)}

                </thermal-dropdown>`:p`<thermal-button variant="background" interactive="false">${e.name}</thermal-button>`,s=t.length>0?t.map((n,a)=>p`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                    <span class="button-inline-icon">+</span> ${n.name}
                </thermal-button> ${a!==t.length-1?` ${$(S.or)} `:P}`):p`<span>${$(S.remotefoldersbrowseraddfolderhint)}</span>`;r=p`${$(S.showingfolder)} ${i}. 
            
            ${t.length>0?p` ${$(S.doyouwanttoadd)} ${s}?`:s}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=p`

                ${$(S.showingfolders)}
                ${e.map((i,s)=>p`<thermal-button 
                    title="${$(S.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${$(S.and)} `:P}`)}
                ${$(S.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?p`${$(S.youmayalsoadd)} ${t.map((i,s)=>p`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${$(S.or)} `:P}
                `)}.`:P}

            `}return r===void 0?P:p`<div class="info">
            ${r}
        </div>`}renderBrowser(){return p`<section>
            ${this.state===1?this.renderOne():P}
            ${this.state===2?this.renderMultiple():P}
            ${this.state===3?this.renderDetail():P}
        </section>`}renderDetail(){var r,e;return this.detail===void 0?this.renderLoading("Loading the IR image"):p`
        <group-provider slug="detail" autoclear="true">
            <file-provider thermal="${(r=this.detail)==null?void 0:r.lrc}" visible="${(e=this.detail)==null?void 0:e.png}" batch="true" autoclear="true">
                <article class="detail">
                    <header class="detail-header">
                        <thermal-button @click=${()=>this.closeDetail()} variant="foreground">${$(S.close)}</thermal-button>

                        <thermal-button variant="background" interactive="false">
                            ${this.detail.folder}
                        </thermal-button>
                        <thermal-button variant="background" interactive="false">
                            <file-label></file-label>
                        </thermal-button>

                        <file-info-button>
                        </file-info-button>
                        <file-download-dropdown></file-download-dropdown>
                    </header>

                    <main>
                        <section>
                            <file-canvas></file-canvas>
                            <file-timeline></file-timeline>
                        </section>
                        <section>
                            <file-analysis-complex></file-analysis-complex>
                        </section>
                    </main>    
                    
                </article>
            </file-provider>
        </group-provider>
        `}renderApp(){return this.info===void 0?this.renderLoading($(S.loading)):this.state===0?this.renderMainScreen():this.renderBrowser()}renderHeader(){return this.state===0?P:p`

            <registry-range-full-button slot="bar-pre"></registry-range-full-button>
            <registry-range-auto-button slot="bar-pre"></registry-range-auto-button>

            ${this.state===1&&this.dataOnly!==void 0?p`<group-provider slug="${this.dataOnly.info.folder}" slot="bar-pre">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`:P}
            <registry-opacity-slider slot="bar-pre"></registry-opacity-slider>
            <group-tool-buttons showhint="false" showpopup="true" slot="bar-pre"></group-tool-buttons>       
        `}renderHistogram(){return this.state===0?P:p`<registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
        
        <nav id="graf">
        ${this.dataOnly!==void 0?p`<group-provider slug="${this.dataOnly.info.folder}">

                    <div style="width:100%">
                        <group-chart></group-chart>
                    </div>

                </group-provider>`:P}
        </nav>
        `}renderTableHeader(){if(this.state!==2)return P;const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return p`<table class="affected">
                <thead>
                    <tr>
                        ${r.map(e=>p`<th>
                            <div class="cell-header">
                                ${e.name}
                            </div>
                        </th>`)}
                    </tr>
                </thead>
            </table>
            `}render(){let r=$(S.remotefoldersbrowser),e;return this.info===void 0?r=$(S.loading)+"...":Object.keys(this.folders).length===1&&this.label?r=this.label:this.state===0&&this.label?r=this.label:this.state!==0&&(r=$(S.close),e=()=>this.actionCloseToHomepage()),p`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${De(this.registryRef)}>

        <thermal-app 
            author="${Ge(this.author)}" 
            license="${Ge(this.license)}" 
            showfullscreen="true" 
            label=${r} 
            .onlabel=${Ge(e)}
        >

            ${this.state!==0?p`<registry-palette-dropdown slot="bar-persistent"></registry-palette-dropdown>`:P}

            ${this.state===0&&Object.keys(this.folders).length>1?p`<thermal-button slot="bar-pre" @click=${()=>{this.actionShowEverything()}}>${$(S.showeverything)}</thermal-button>`:P}

            ${this.renderHeader()}
            
            <div slot="pre">
                ${this.renderInfo()}
                ${this.renderHistogram()}
                ${this.renderTableHeader()}
            </div>
        
            <div class=${ai({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2,"screen-detail":this.state===3})}>
                ${this.renderApp()}
            </div>

             <thermal-dialog label="${$(S.config)}" slot="close">
                <thermal-button slot="invoker">
                    <svg style="width: 1em; transform: translateY(2px)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clip-rule="evenodd" />
                    </svg>

                </thermal-button>
                <div slot="content">
                    <table>
                    <png-export-panel></png-export-panel>
                    <registry-display-panel></registry-display-panel>
                    </table>
                </div>
            </thermal-dialog>

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `}};ot.styles=ce`

:host {
    font-size: var(--thermal-fs);
    line-height: 1em;

    --table-gap: calc( var( --thermal-gap ) * .8 );
    --table-gap-sm: calc( var( --thermal-gap ) * .4 );

    --thermal-browser-width: 150px;

    

    @media(min-width: 400px) {
        --thermal-browser-width: 300px;
    }
}

.reset-text,
h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-size: var(--thermal-fs);
    line-height: 1em;
}

.screen {

}

.screen-main {

}



.screen-main-folders {

    display: grid;
    width: 100%;
    grid-template-columns: repeat( auto-fill, minmax(var(--thermal-browser-width), 1fr) );
    gap: var(--thermal-gap);

    .folder {

        padding: 0;
        overflow: hidden;

        border-radius: var(--thermal-radius);
        border: 1px solid var( --thermal-slate );

        background: var(--thermal-background);
        color: var(--thermal-foreground);

        cursor: pointer;
        flex-grow: 1;

        transition: all .2s ease-in-out;

        file-canvas,
        file-provider {
            displaY: block;
        }

        file-provider {
            overflow: hidden;
            position: relative;
        }

        file-canvas {
            transition: all .4s ease-in-out;
        }

        .open-button {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
            transition: all .4s ease-in-out;
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px);
        }


        .folder-header {
            padding: var(--thermal-gap);
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: auto 2rem;
            text-align: left;
        }

        .folder-header-icon {
            color: var(--thermal-slate-light);
            transition: all .4s ease-in-out;
        }


        &:hover,
        &:focus {
            background: var(--thermal-background);
            box-shadow: var(--thermal-shadow);
            file-canvas {
                transform: scale(1.2);
            }

            .open-button {
                opacity: 1;
                transform: translateY(0px);
            }

            .folder-header-icon {
                color: var(--thermal-primary);
            }
        }

    }

    

}

.screen-browser {
}

.screen-browser-header {
    flex-grow: 1;
}

.screen-browser-header-buttons {
    > * {
        display: inline-block;
    }
}



.screen-browser__one {

    group-provider {

        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(var(--thermal-browser-width), 1fr) );
        gap: var(--thermal-gap);

    }

}


table.affected {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    color: var(--thermal-foreground);

    th, td {
        padding: var(--table-gap-sm);
    }

    .cell-header {
        background: var(--thermal-background);
        color: var(--thermal-foreground);
        text-align: left;
        padding: var(--table-gap);
        border-radius: var(--thermal-radius);
    }

    .cell-label {
        border-left: 1px solid var(--thermal-slate);
        border-right: 1px solid var(--thermal-slate);
        border-top: 1px solid var(--thermal-slate);
        padding: var(--table-gap);
        font-weight: bold;
        > div {
            display: flex;
            gap: var(--thermal-gap);
            h2 {
                // flex-grow: 1;
            }
        }
    }

    .cell-content {

        border-bottom: 1px solid var(--thermal-slate);

        &:first-child {
            border-left: 1px solid var(--thermal-slate);
        }

        &:last-child {
            border-right: 1px solid var(--thermal-slate);
        }

        .file {
            background: var(--thermal-background);
            padding: var(--table-gap);
            border-radius: var(--thermal-radius);
        }

        .file:not(:last-child) {
            margin-bottom: var( --table-gap-sm );
        }

    }

    .cell-separator {
        height: 1rem;
    }

}




.screen-browser__multiple {

    group-provider.row {
        display: table-row;
    }

    group-provider.buttons {
        display: flex;
        gap: 5px;
        align-items: center;
    }
    

}


.info {

    padding: var(--thermal-gap);
    border: 1px solid var(--thermal-slate);
    border-radius: var(--thermal-radius);
    background-color: var(--thermal-slate-light);

    margin-bottom: 1em;

    thermal-button,
    thermal-dropdown {
        display: inline-block;
    }

    .button-inline-icon {
        opacity: .5;
    }

}

thermal-dropdown.selector::part(invoker) {

    --thermal-slate-light: var( --thermal-background );

}



    .detail {
        padding: var(--thermal-gap);
        border-radius: var(--thermal-radius);
        border: 1px solid var( --thermal-slate );
        background-color: var(--thermal-background);
        box-sizing: border-box;
        width: 100%;

        main {
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: 1fr;
            @media ( min-width: 900px ) {
                grid-template-columns: 2fr 1fr;
            }
            @media ( min-width: 1300px ) {
                grid-template-columns: 1fr 1fr;
            }
        }

        header {
            width: 100%;
            display: flex;
            gap: 5px;
            margin-bottom: var(--thermal-gap);
            align-items: center;
        }

    }

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: 1px solid var(--thermal-slate);
        border-radius: var(--thermal-radius);
        box-sizing: border-box;
        padding: var(--thermal-gap);
        min-height: 30vh;
        color: var(--thermal-slate-dark);
        background: var(--thermal-slate-light);
    }


    .lds-facebook {
  /* change color here */
  color: var(--thermal-slate-dark);
}
.lds-facebook,
.lds-facebook div {
  box-sizing: border-box;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: currentColor;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0s;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}


    `;ft([m({type:String,reflect:!0})],ot.prototype,"label",2);ft([m({type:String,reflect:!0})],ot.prototype,"license",2);ft([m({type:String,reflect:!0})],ot.prototype,"author",2);ft([m({type:String,reflect:!0,attribute:!0})],ot.prototype,"palette",2);ft([m({type:Boolean,reflect:!0,converter:nt(!0)})],ot.prototype,"enablegrouping",2);ft([m({type:String,reflect:!0})],ot.prototype,"url",2);ft([m({type:String,reflect:!0})],ot.prototype,"subfolder",2);ft([w()],ot.prototype,"info",2);ft([w()],ot.prototype,"error",2);ft([w()],ot.prototype,"loadingInfo",2);ft([w()],ot.prototype,"loadingData",2);ft([w()],ot.prototype,"only",2);ft([w()],ot.prototype,"state",2);ft([w()],ot.prototype,"by",2);ft([w()],ot.prototype,"dataOnly",2);ft([w()],ot.prototype,"dataMultiple",2);ft([w()],ot.prototype,"folders",2);ft([Y({context:ns})],ot.prototype,"interactiveAnalysis",2);ft([w()],ot.prototype,"detail",2);ft([Y({context:Ti})],ot.prototype,"pngExportWidth",2);ft([Y({context:Ms})],ot.prototype,"pngExportWidthSetterContext",2);ft([Y({context:Ii})],ot.prototype,"pngExportFs",2);ft([Y({context:Rs})],ot.prototype,"pngExportFsSetterContext",2);ft([Y({context:rs}),m({reflect:!0,converter:Os})],ot.prototype,"locale",2);ot=ft([Z("remote-browser-app")],ot);$f();kf();console.info(`@labir/embed ${fs}
Author: ${Sp}`);
