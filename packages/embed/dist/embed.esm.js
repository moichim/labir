var hd=Object.defineProperty;var cd=(r,e,t)=>e in r?hd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(cd(r,typeof e!="symbol"?e+"":e,t),t);const Wo="1.2.64",ud="Jan Jáchim <jachim5@gmail.com>",Ce=r=>typeof r=="string",Os=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},Ql=r=>r==null?"":""+r,dd=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},pd=/###/g,Jl=r=>r&&r.indexOf("###")>-1?r.replace(pd,"."):r,eh=r=>!r||Ce(r),Is=(r,e,t)=>{const i=Ce(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(eh(r))return{};const n=Jl(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return eh(r)?{}:{obj:r,k:Jl(i[s])}},th=(r,e,t)=>{const{obj:i,k:s}=Is(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=Is(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=Is(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},fd=(r,e,t,i)=>{const{obj:s,k:n}=Is(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Gn=(r,e)=>{const{obj:t,k:i}=Is(r,e);if(t)return t[i]},gd=(r,e,t)=>{const i=Gn(r,t);return i!==void 0?i:Gn(e,t)},lc=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Ce(r[i])||r[i]instanceof String||Ce(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):lc(r[i],e[i],t):r[i]=e[i]);return r},Xi=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var md={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const vd=r=>Ce(r)?r.replace(/[&<>"'\/]/g,e=>md[e]):r;class yd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const bd=[" ",",","?","!",";"],wd=new yd(20),xd=(r,e,t)=>{e=e||"",t=t||"";const i=bd.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=wd.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Po=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return r[e];const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Vn=r=>r==null?void 0:r.replace("_","-"),Sd={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Yn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Sd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Ce(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Yn(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Yn(this.logger,e)}}var zr=new Yn;class fa{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class rh extends fa{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Ce(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Gn(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Ce(i)?l:Po((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),th(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Ce(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Gn(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?lc(l,i,n):l={...l,...i},th(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var hc={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const ih={};class qn extends fa{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),dd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=zr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!xd(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Ce(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Ce(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const H=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${H}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${H}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let p=d==null?void 0:d.res;const w=(d==null?void 0:d.usedKey)||a,b=(d==null?void 0:d.exactUsedKey)||a,x=Object.prototype.toString.apply(p),_=["[object Number]","[object Function]","[object RegExp]"],W=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,R=!this.i18nFormat||this.i18nFormat.handleAsObject,U=!Ce(p)&&typeof p!="boolean"&&typeof p!="number";if(R&&p&&U&&_.indexOf(x)<0&&!(Ce(W)&&Array.isArray(p))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const H=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,p,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(d.res=H,d.usedParams=this.getUsedParamsDetails(t),d):H}if(n){const H=Array.isArray(p),I=H?[]:{},K=H?b:w;for(const S in p)if(Object.prototype.hasOwnProperty.call(p,S)){const A=`${K}${n}${S}`;I[S]=this.translate(A,{...t,joinArrays:!1,ns:o}),I[S]===A&&(I[S]=p[S])}p=I}}else if(R&&Ce(W)&&Array.isArray(p))p=p.join(W),p&&(p=this.extendTranslation(p,e,t,i));else{let H=!1,I=!1;const K=t.count!==void 0&&!Ce(t.count),S=qn.hasDefaultValue(t),A=K?this.pluralResolver.getSuffix(h,t.count,t):"",T=t.ordinal&&K?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",D=K&&!t.ordinal&&t.count===0,G=D&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${A}`]||t[`defaultValue${T}`]||t.defaultValue;!this.isValidLookup(p)&&S&&(H=!0,p=G),this.isValidLookup(p)||(I=!0,p=a);const N=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:p,L=S&&G!==p&&this.options.updateMissing;if(I||H||L){if(this.logger.log(L?"updateKey":"missingKey",h,l,a,L?G:p),n){const z=this.resolve(a,{...t,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let q=[];const le=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&le&&le[0])for(let z=0;z<le.length;z++)q.push(le[z]);else this.options.saveMissingTo==="all"?q=this.languageUtils.toResolveHierarchy(t.lng||this.language):q.push(t.lng||this.language);const $=(z,pe,ie)=>{var We;const Re=S&&ie!==p?ie:N;this.options.missingKeyHandler?this.options.missingKeyHandler(z,l,pe,Re,L,t):(We=this.backendConnector)!=null&&We.saveMissing&&this.backendConnector.saveMissing(z,l,pe,Re,L,t),this.emit("missingKey",z,l,pe,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&K?q.forEach(z=>{const pe=this.pluralResolver.getSuffixes(z,t);D&&t[`defaultValue${this.options.pluralSeparator}zero`]&&pe.indexOf(`${this.options.pluralSeparator}zero`)<0&&pe.push(`${this.options.pluralSeparator}zero`),pe.forEach(ie=>{$([z],a+ie,t[`defaultValue${ie}`]||G)})}):$(q,a,G))}p=this.extendTranslation(p,e,t,d,i),I&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(I||H)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,H?p:void 0))}return s?(d.res=p,d.usedParams=this.getUsedParamsDetails(t),d):p}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=Ce(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const b=e.match(this.interpolator.nestingRegexp);p=b&&b.length}let w=i.replace&&!Ce(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(w={...this.options.interpolation.defaultVariables,...w}),e=this.interpolator.interpolate(e,w,i.lng||this.language||s.usedLng,i),d){const b=e.match(this.interpolator.nestingRegexp),x=b&&b.length;p<x&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var b=arguments.length,x=new Array(b),_=0;_<b;_++)x[_]=arguments[_];return(n==null?void 0:n[0])===x[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${t[0]}`),null):a.translate(...x,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Ce(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=hc.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Ce(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let d=h.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const p=t.count!==void 0&&!Ce(t.count),w=p&&!t.ordinal&&t.count===0,b=t.context!==void 0&&(Ce(t.context)||typeof t.context=="number")&&t.context!=="",x=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(_=>{var W,R;this.isValidLookup(i)||(o=_,!ih[`${x[0]}-${_}`]&&((W=this.utils)!=null&&W.hasLoadedNamespace)&&!((R=this.utils)!=null&&R.hasLoadedNamespace(o))&&(ih[`${x[0]}-${_}`]=!0,this.logger.warn(`key "${s}" for languages "${x.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(U=>{var K;if(this.isValidLookup(i))return;a=U;const H=[u];if((K=this.i18nFormat)!=null&&K.addLookupKeys)this.i18nFormat.addLookupKeys(H,u,U,_,t);else{let S;p&&(S=this.pluralResolver.getSuffix(U,t.count,t));const A=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(H.push(u+S),t.ordinal&&S.indexOf(T)===0&&H.push(u+S.replace(T,this.options.pluralSeparator)),w&&H.push(u+A)),b){const D=`${u}${this.options.contextSeparator}${t.context}`;H.push(D),p&&(H.push(D+S),t.ordinal&&S.indexOf(T)===0&&H.push(D+S.replace(T,this.options.pluralSeparator)),w&&H.push(D+A))}}let I;for(;I=H.pop();)this.isValidLookup(i)||(n=I,i=this.getResource(U,_,I,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Ce(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class sh{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=zr.create("languageUtils")}getScriptPartFromCode(e){if(e=Vn(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Vn(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Ce(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Ce(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Ce(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Ce(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const nh={zero:0,one:1,two:2,few:3,many:4,other:5},ah={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class $d{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=zr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Vn(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),ah;if(!e.match(/-|_/))return ah;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>nh[s]-nh[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const oh=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=gd(r,e,t);return!n&&s&&Ce(t)&&(n=Po(r,t,i),n===void 0&&(n=Po(e,t,i))),n},fo=r=>r.replace(/\$/g,"$$$$");class _d{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:w,nestingSuffix:b,nestingSuffixEscaped:x,nestingOptionsSeparator:_,maxReplaces:W,alwaysFormat:R}=e.interpolation;this.escape=t!==void 0?t:vd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Xi(n):a||"{{",this.suffix=o?Xi(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?Xi(p):w||Xi("$t("),this.nestingSuffix=b?Xi(b):x||Xi(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=W||1e3,this.alwaysFormat=R!==void 0?R:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var w;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=b=>{if(b.indexOf(this.formatSeparator)<0){const R=oh(t,l,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,i,{...s,...t,interpolationkey:b}):R}const x=b.split(this.formatSeparator),_=x.shift().trim(),W=x.join(this.formatSeparator).trim();return this.format(oh(t,l,_,this.options.keySeparator,this.options.ignoreJSONStructure),W,i,{...s,...t,interpolationkey:_})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((w=s==null?void 0:s.interpolation)==null?void 0:w.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>fo(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?fo(this.escape(b)):fo(b)}].forEach(b=>{for(o=0;n=b.regex.exec(e);){const x=n[1].trim();if(a=h(x),a===void 0)if(typeof u=="function"){const W=u(e,n,s);a=Ce(W)?W:""}else if(s&&Object.prototype.hasOwnProperty.call(s,x))a="";else if(d){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),a="";else!Ce(a)&&!this.useRawValueToEscape&&(a=Ql(a));const _=b.safeValue(a);if(e=e.replace(n[0],_),d?(b.regex.lastIndex+=a.length,b.regex.lastIndex-=n[0].length):b.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let p=`{${d[1]}`;l=d[0],p=this.interpolate(p,a);const w=p.match(/'/g),b=p.match(/"/g);(((w==null?void 0:w.length)??0)%2===0&&!b||b.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),h&&(a={...h,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${u}${p}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Ce(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Ce(n))return n;Ce(n)||(n=Ql(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Cd=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},Ki=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Vn(i),s),e[a]=o),o(t)}};class kd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=zr.create("formatter"),this.options=e,this.formats={number:Ki((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:Ki((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:Ki((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:Ki((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:Ki((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ki(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var d;const{formatName:h,formatOptions:u}=Cd(l);if(this.formats[h]){let p=o;try{const w=((d=s==null?void 0:s.formatParams)==null?void 0:d[s.interpolationkey])||{},b=w.locale||w.lng||s.locale||s.lng||i;p=this.formats[h](o,b,{...u,...s,...w})}catch(w){this.logger.warn(w)}return p}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Pd=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Ad extends fa{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=zr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(d=>{const p=`${h}|${d}`;!i.reload&&this.store.hasResourceBundle(h,d)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,u=!1,a[p]===void 0&&(a[p]=!0),n[p]===void 0&&(n[p]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{fd(l.loaded,[n],a),Pd(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(d=>{o[h][d]===void 0&&(o[h][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Ce(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Ce(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,d,p;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((p=this.backend)!=null&&p.create){const w={...a,isUpdate:n},b=this.backend.create.bind(this.backend);if(b.length<6)try{let x;b.length===5?x=b(e,t,i,s,w):x=b(e,t,i,s),x&&typeof x.then=="function"?x.then(_=>o(null,_)).catch(o):o(null,x)}catch(x){o(x)}else b(e,t,i,s,o,w)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const lh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Ce(r[1])&&(e.defaultValue=r[1]),Ce(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),hh=r=>{var e,t;return Ce(r.ns)&&(r.ns=[r.ns]),Ce(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Ce(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Rn=()=>{},Od=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Ns extends fa{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=hh(e),this.services={},this.logger=zr,this.modules={external:[]},Od(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(Ce(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=lh();this.options={...s,...this.options,...hh(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?zr.init(n(this.modules.logger),this.options):zr.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=kd;const d=new sh(this.options);this.store=new rh(this.options.resources,this.options);const p=this.services;p.logger=zr,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new $d(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(p.formatter=n(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new _d(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Ad(n(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(w){for(var b=arguments.length,x=new Array(b>1?b-1:0),_=1;_<b;_++)x[_-1]=arguments[_];e.emit(w,...x)}),this.modules.languageDetector&&(p.languageDetector=n(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=n(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new qn(this.services,this.options),this.translator.on("*",function(w){for(var b=arguments.length,x=new Array(b>1?b-1:0),_=1;_<b;_++)x[_-1]=arguments[_];e.emit(w,...x)}),this.modules.external.forEach(w=>{w.init&&w.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Rn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=Os(),h=()=>{const u=(d,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),i(d,p)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn;const s=Ce(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=Os();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Rn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&hc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=Os();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Ce(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,h)),this.loadResources(h,p=>{a(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),d=2;d<h;d++)u[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const p=s.options.keySeparator||".";let w;return l.keyPrefix&&Array.isArray(a)?w=a.map(b=>`${l.keyPrefix}${p}${b}`):w=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,s.t(w,l)};return Ce(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=Os();return this.options.ns?(Ce(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Os();Ce(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new sh(lh());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Ns(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Ns(s);return(e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i&&(n.store=new rh(this.store.data,s),n.services.resourceStore=n.store),n.translator=new qn(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const gt=Ns.createInstance();gt.createInstance=Ns.createInstance;gt.createInstance;gt.dir;gt.init;gt.loadResources;gt.reloadResources;gt.use;gt.changeLanguage;gt.getFixedT;const O=gt.t;gt.exists;gt.setDefaultNamespace;gt.hasLoadedNamespace;gt.loadNamespaces;gt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=globalThis,Xn=Ms.trustedTypes,ch=Xn?Xn.createPolicy("lit-html",{createHTML:r=>r}):void 0,cc="$lit$",di=`lit$${Math.random().toFixed(9).slice(2)}$`,uc="?"+di,Ed=`<${uc}>`,Mi=document,js=()=>Mi.createComment(""),Bs=r=>r===null||typeof r!="object"&&typeof r!="function",dc=Array.isArray,Ld=r=>dc(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",go=`[ 	
\f\r]`,Es=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uh=/-->/g,dh=/>/g,Li=RegExp(`>|${go}(?:([^\\s"'>=/]+)(${go}*=${go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ph=/'/g,fh=/"/g,pc=/^(?:script|style|textarea|title)$/i,Rd=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Rd(1),gi=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),gh=new WeakMap,Ii=Mi.createTreeWalker(Mi,129);function fc(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ch!==void 0?ch.createHTML(e):e}const Dd=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=Es;for(let o=0;o<t;o++){const l=r[o];let h,u,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,u=a.exec(l),u!==null);)p=a.lastIndex,a===Es?u[1]==="!--"?a=uh:u[1]!==void 0?a=dh:u[2]!==void 0?(pc.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=Li):u[3]!==void 0&&(a=Li):a===Li?u[0]===">"?(a=s??Es,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Li:u[3]==='"'?fh:ph):a===fh||a===ph?a=Li:a===uh||a===dh?a=Es:(a=Li,s=void 0);const w=a===Li&&r[o+1].startsWith("/>")?" ":"";n+=a===Es?l+Ed:d>=0?(i.push(h),l.slice(0,d)+cc+l.slice(d)+di+w):l+di+(d===-2?o:w)}return[fc(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};let Ao=class gc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=Dd(e,t);if(this.el=gc.createElement(h,i),Ii.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=Ii.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(cc)){const p=u[a++],w=s.getAttribute(d).split(di),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:b[2],strings:w,ctor:b[1]==="."?Id:b[1]==="?"?Md:b[1]==="@"?Ud:ga}),s.removeAttribute(d)}else d.startsWith(di)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(pc.test(s.tagName)){const d=s.textContent.split(di),p=d.length-1;if(p>0){s.textContent=Xn?Xn.emptyScript:"";for(let w=0;w<p;w++)s.append(d[w],js()),Ii.nextNode(),l.push({type:2,index:++n});s.append(d[p],js())}}}else if(s.nodeType===8)if(s.data===uc)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(di,d+1))!==-1;)l.push({type:7,index:n}),d+=di.length-1}n++}}static createElement(e,t){const i=Mi.createElement("template");return i.innerHTML=e,i}};function is(r,e,t=r,i){var a,o;if(e===gi)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Bs(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=is(r,s._$AS(r,e.values),s,i)),e}let Td=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Mi).importNode(t,!0);Ii.currentNode=s;let n=Ii.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new tn(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Fd(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=Ii.nextNode(),a++)}return Ii.currentNode=Mi,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class tn{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=is(this,e,t),Bs(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==gi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ld(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==E&&Bs(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mi.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ao.createElement(fc(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Td(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=gh.get(e.strings);return t===void 0&&gh.set(e.strings,t=new Ao(e)),t}k(e){dc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new tn(this.S(js()),this.S(js()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let ga=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=is(this,e,t,0),a=!Bs(e)||e!==this._$AH&&e!==gi,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=is(this,o[i+l],t,l),h===gi&&(h=this._$AH[l]),a||(a=!Bs(h)||h!==this._$AH[l]),h===E?e=E:e!==E&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Id=class extends ga{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}};class Md extends ga{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class Ud extends ga{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=is(this,e,t,0)??E)===gi)return;const i=this._$AH,s=e===E&&i!==E||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==E&&(i===E||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let Fd=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){is(this,e)}};const mo=Ms.litHtmlPolyfillSupport;mo==null||mo(Ao,tn),(Ms.litHtmlVersions??(Ms.litHtmlVersions=[])).push("3.1.4");const zd=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new tn(e.insertBefore(js(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nd=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ma=r=>(...e)=>({_$litDirective$:r,values:e});let Go=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Us(s,e);return!0},Kn=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},mc=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Hd(e)}};function jd(r){this._$AN!==void 0?(Kn(this),this._$AM=r,mc(this)):this._$AM=r}function Bd(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Us(i[n],!1),Kn(i[n]);else i!=null&&(Us(i,!1),Kn(i));else Us(this,r)}const Hd=r=>{r.type==Kr.CHILD&&(r._$AP??(r._$AP=Bd),r._$AQ??(r._$AQ=jd))};let Wd=class extends Go{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),mc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Us(this,e),Kn(this))}setValue(e){if(Nd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},mh=null,vc=()=>{};new Promise(r=>{vc=r});const Gd={type:"3rdParty",init(r){Vd(r)}},Vd=r=>{mh=r,vc(mh)},vh=new Map,Yd=()=>{vh.forEach((r,e)=>{(e.isConnected===!1||qd(e)===!1)&&vh.delete(e)})};setInterval(Yd,1e4);const qd=r=>{const e=r.part;if(e.type===Kr.ATTRIBUTE)return e.element.isConnected;if(e.type===Kr.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===Kr.PROPERTY||e.type===Kr.BOOLEAN_ATTRIBUTE||e.type===Kr.EVENT||e.type===Kr.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:Xd,forEach:Kd}=[];function Zd(r){return Kd.call(Xd.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const yh=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Qd=(r,e,t)=>{const i=t||{};i.path=i.path||"/";const s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!yh.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!yh.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},bh={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=Qd(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var Jd={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return bh.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&bh.create(t,r,i,s,n)}},ep={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let Ls=null;const wh=()=>{if(Ls!==null)return Ls;try{Ls=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Ls=!1}return Ls};var tp={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&wh())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&wh()&&window.localStorage.setItem(t,r)}};let Rs=null;const xh=()=>{if(Rs!==null)return Rs;try{Rs=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Rs=!1}return Rs};var rp={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&xh())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&xh()&&window.sessionStorage.setItem(t,r)}},ip={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},sp={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},np={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},ap={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};function op(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r}}class yc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=Zd(t,this.options||{},op()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Jd),this.addDetector(ep),this.addDetector(tp),this.addDetector(rp),this.addDetector(ip),this.addDetector(sp),this.addDetector(np),this.addDetector(ap)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e,t){t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}yc.type="languageDetector";const lp={loading:"Loading",next:"Next",prev:"Previous",back:"Back",close:"Close",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automaticrange",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visible file name",visiblefileurl:"Visible file URL",visiblefiledownload:"Visible file download",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",byday:"by day",byhour:"by hour",byweek:"by week",bymonth:"by month",byyear:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette."},hp={loading:"Loading",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visible",visiblefileurl:"URL de l'image visible",visiblefiledownload:"Télécharger l'image visible",time:"Temps",duration:"Duration",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Type du fichier",type:"Type",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",byday:"par jour",byhour:"par heure",byweek:"par semaine",bymonth:"par mois",byyear:"par année",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Cadre",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes douces",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieur",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieur",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format csv",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette."},cp={loading:"Načítám",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",byday:"po dnech",byhour:"po hodinách",byweek:"po týdnech",bymonth:"po měsících",byyear:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety."},up={loading:"Loading",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r llun isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Band awtomatig",fullrange:"Band llawn",adjusttimescalehint:"Addaswch y wraddfa thermol yn awtomatig neu cyflewch y wraddfa i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangosfa thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weladwy",visiblefileurl:"URL ffeil weladwy",visiblefiledownload:"Lawrlwythwch y ffeil weladwy",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",range:"Band",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"Group {{era}}",byday:"Grŵp yn ystod y dydd",byhour:"Grŵp fesul awr",byweek:"Grŵp fesul wythnos",bymonth:"Grwpio fesul mis",byyear:"Grŵp yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y llun isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet."},dp={loading:"Loading",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",byday:"nach Tagen",byhour:"nach Stunden",byweek:"nach Wochen",bymonth:"nach Monaten",byyear:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette."};gt.use(Gd).use(yc).init({fallbackLng:"en",resources:{cs:{translation:cp},cy:{translation:up},de:{translation:dp},en:{translation:lp},fr:{translation:hp}}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,Vo=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yo=Symbol(),Sh=new WeakMap;let bc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Vo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Sh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Sh.set(t,e))}return e}toString(){return this.cssText}};const pp=r=>new bc(typeof r=="string"?r:r+"",void 0,Yo),ge=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new bc(t,r,Yo)},fp=(r,e)=>{if(Vo)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Nn.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},$h=Vo?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return pp(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gp,defineProperty:mp,getOwnPropertyDescriptor:vp,getOwnPropertyNames:yp,getOwnPropertySymbols:bp,getPrototypeOf:wp}=Object,pi=globalThis,_h=pi.trustedTypes,xp=_h?_h.emptyScript:"",vo=pi.reactiveElementPolyfillSupport,Fs=(r,e)=>r,Zn={toAttribute(r,e){switch(e){case Boolean:r=r?xp:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},qo=(r,e)=>!gp(r,e),Ch={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:qo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pi.litPropertyMetadata??(pi.litPropertyMetadata=new WeakMap);let es=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ch){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&mp(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=vp(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ch}static _$Ei(){if(this.hasOwnProperty(Fs("elementProperties")))return;const e=wp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fs("properties"))){const t=this.properties,i=[...yp(t),...bp(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift($h(s))}else e!==void 0&&t.push($h(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fp(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Zn).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Zn;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??qo)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};es.elementStyles=[],es.shadowRootOptions={mode:"open"},es[Fs("elementProperties")]=new Map,es[Fs("finalized")]=new Map,vo==null||vo({ReactiveElement:es}),(pi.reactiveElementVersions??(pi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let or=class extends es{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return gi}};var oc;or._$litElement$=!0,or.finalized=!0,(oc=globalThis.litElementHydrateSupport)==null||oc.call(globalThis,{LitElement:or});const yo=globalThis.litElementPolyfillSupport;yo==null||yo({LitElement:or});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sp={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:qo},$p=(r=Sp,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(e,t)=>typeof t=="object"?$p(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _p=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ci(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return _p(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Cp={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Dn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Tn(r){return r.toString().indexOf("`")===-1}Tn(r=>r``)||Tn(r=>r`\0`)||Tn(r=>r`\n`)||Tn(r=>r`\u0000`);Dn``&&Dn`\0`&&Dn`\n`&&Dn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let kp="google#safe";function Pp(){if(typeof window<"u")return window.trustedTypes}function wc(){var r;return(r=Pp())!==null&&r!==void 0?r:null}let In;function Ap(){var r,e;if(In===void 0)try{In=(e=(r=wc())===null||r===void 0?void 0:r.createPolicy(kp,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{In=null}return In}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class xc{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function kh(r){var e;const t=r,i=(e=Ap())===null||e===void 0?void 0:e.createScriptURL(t);return i??new xc(t,Cp)}function Op(r){var e;if(!((e=wc())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof xc)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ep(r,...e){if(e.length===0)return kh(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return kh(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Lp(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Rp(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Lp(e||window);t&&r.setAttribute("nonce",t)}function Dp(r,e,t){r.src=Op(e),Rp(r)}/**
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
 */const Tp=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Dp(t,Ep`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Sc(r={}){await Tp;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Ph(r){if(await Sc(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Ip(r){return await Sc(),new google.visualization.ChartWrapper({container:r})}function Pt(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function Ui(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const $c=6048e5,Mp=864e5;let Up={};function rn(){return Up}function Qr(r,e){var o,l,h,u;const t=rn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=Pt(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Qn(r){return Qr(r,{weekStartsOn:1})}function _c(r){const e=Pt(r),t=e.getFullYear(),i=Ui(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Qn(i),n=Ui(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=Qn(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function Jn(r){const e=Pt(r);return e.setHours(0,0,0,0),e}function Ah(r){const e=Pt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Fp(r,e){const t=Jn(r),i=Jn(e),s=+t-Ah(t),n=+i-Ah(i);return Math.round((s-n)/Mp)}function zp(r){const e=_c(r),t=Ui(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Qn(t)}function Np(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Cc(r){if(!Np(r)&&typeof r!="number")return!1;const e=Pt(r);return!isNaN(Number(e))}function kc(r){const e=Pt(r);return e.setHours(23,59,59,999),e}function ea(r){const e=Pt(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function ta(r){const e=Pt(r);return e.setDate(1),e.setHours(0,0,0,0),e}function Pc(r){const e=Pt(r),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Xo(r){const e=Pt(r),t=Ui(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Ac(r){const e=Pt(r);return e.setMinutes(59,59,999),e}function ra(r,e){var o,l;const t=rn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=Pt(r),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const jp={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Bp=(r,e,t)=>{let i;const s=jp[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function bo(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Hp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Wp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Gp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Vp={date:bo({formats:Hp,defaultWidth:"full"}),time:bo({formats:Wp,defaultWidth:"full"}),dateTime:bo({formats:Gp,defaultWidth:"full"})},Yp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qp=(r,e,t,i)=>Yp[r];function Ds(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Xp={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Kp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Zp={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qp={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Jp={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ef={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},tf=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},rf={ordinalNumber:tf,era:Ds({values:Xp,defaultWidth:"wide"}),quarter:Ds({values:Kp,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Ds({values:Zp,defaultWidth:"wide"}),day:Ds({values:Qp,defaultWidth:"wide"}),dayPeriod:Ds({values:Jp,defaultWidth:"wide",formattingValues:ef,defaultFormattingWidth:"wide"})};function Ts(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?nf(o,d=>d.test(a)):sf(o,d=>d.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function sf(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function nf(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function af(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const of=/^(\d+)(th|st|nd|rd)?/i,lf=/\d+/i,hf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},cf={any:[/^b/i,/^(a|c)/i]},uf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},df={any:[/1/i,/2/i,/3/i,/4/i]},pf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ff={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gf={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},mf={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vf={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yf={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},bf={ordinalNumber:af({matchPattern:of,parsePattern:lf,valueCallback:r=>parseInt(r,10)}),era:Ts({matchPatterns:hf,defaultMatchWidth:"wide",parsePatterns:cf,defaultParseWidth:"any"}),quarter:Ts({matchPatterns:uf,defaultMatchWidth:"wide",parsePatterns:df,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Ts({matchPatterns:pf,defaultMatchWidth:"wide",parsePatterns:ff,defaultParseWidth:"any"}),day:Ts({matchPatterns:gf,defaultMatchWidth:"wide",parsePatterns:mf,defaultParseWidth:"any"}),dayPeriod:Ts({matchPatterns:vf,defaultMatchWidth:"any",parsePatterns:yf,defaultParseWidth:"any"})},wf={code:"en-US",formatDistance:Bp,formatLong:Vp,formatRelative:qp,localize:rf,match:bf,options:{weekStartsOn:0,firstWeekContainsDate:1}};function xf(r){const e=Pt(r);return Fp(e,Xo(e))+1}function Sf(r){const e=Pt(r),t=+Qn(e)-+zp(e);return Math.round(t/$c)+1}function Oc(r,e){var u,d,p,w;const t=Pt(r),i=t.getFullYear(),s=rn(),n=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((w=(p=s.locale)==null?void 0:p.options)==null?void 0:w.firstWeekContainsDate)??1,a=Ui(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Qr(a,e),l=Ui(r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=Qr(l,e);return t.getTime()>=o.getTime()?i+1:t.getTime()>=h.getTime()?i:i-1}function $f(r,e){var o,l,h,u;const t=rn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=Oc(r,e),n=Ui(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Qr(n,e)}function _f(r,e){const t=Pt(r),i=+Qr(t,e)-+$f(t,e);return Math.round(i/$c)+1}function Ne(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const ci={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return Ne(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):Ne(t+1,2)},d(r,e){return Ne(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return Ne(r.getHours()%12||12,e.length)},H(r,e){return Ne(r.getHours(),e.length)},m(r,e){return Ne(r.getMinutes(),e.length)},s(r,e){return Ne(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return Ne(s,e.length)}},Zi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Oh={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return ci.y(r,e)},Y:function(r,e,t,i){const s=Oc(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return Ne(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):Ne(n,e.length)},R:function(r,e){const t=_c(r);return Ne(t,e.length)},u:function(r,e){const t=r.getFullYear();return Ne(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Ne(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Ne(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return ci.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return Ne(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=_f(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):Ne(s,e.length)},I:function(r,e,t){const i=Sf(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):Ne(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):ci.d(r,e)},D:function(r,e,t){const i=xf(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):Ne(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Ne(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Ne(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return Ne(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=Zi.noon:i===0?s=Zi.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=Zi.evening:i>=12?s=Zi.afternoon:i>=4?s=Zi.morning:s=Zi.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return ci.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):ci.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):Ne(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):Ne(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):ci.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):ci.s(r,e)},S:function(r,e){return ci.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Lh(i);case"XXXX":case"XX":return Ri(i);case"XXXXX":case"XXX":default:return Ri(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Lh(i);case"xxxx":case"xx":return Ri(i);case"xxxxx":case"xxx":default:return Ri(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Eh(i,":");case"OOOO":default:return"GMT"+Ri(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Eh(i,":");case"zzzz":default:return"GMT"+Ri(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return Ne(i,e.length)},T:function(r,e,t){const i=r.getTime();return Ne(i,e.length)}};function Eh(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+Ne(n,2)}function Lh(r,e){return r%60===0?(r>0?"-":"+")+Ne(Math.abs(r)/60,2):Ri(r,e)}function Ri(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Ne(Math.trunc(i/60),2),n=Ne(i%60,2);return t+s+e+n}const Rh=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ec=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Cf=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Rh(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Rh(i,e)).replace("{{time}}",Ec(s,e))},kf={p:Ec,P:Cf},Pf=/^D+$/,Af=/^Y+$/,Of=["D","DD","YY","YYYY"];function Ef(r){return Pf.test(r)}function Lf(r){return Af.test(r)}function Rf(r,e,t){const i=Df(r,e,t);if(console.warn(i),Of.includes(r))throw new RangeError(i)}function Df(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Tf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,If=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mf=/^'([^]*?)'?$/,Uf=/''/g,Ff=/[a-zA-Z]/;function Le(r,e,t){var u,d,p,w;const i=rn(),s=i.locale??wf,n=i.firstWeekContainsDate??((d=(u=i.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,a=i.weekStartsOn??((w=(p=i.locale)==null?void 0:p.options)==null?void 0:w.weekStartsOn)??0,o=Pt(r);if(!Cc(o))throw new RangeError("Invalid time value");let l=e.match(If).map(b=>{const x=b[0];if(x==="p"||x==="P"){const _=kf[x];return _(b,s.formatLong)}return b}).join("").match(Tf).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const x=b[0];if(x==="'")return{isToken:!1,value:zf(b)};if(Oh[x])return{isToken:!0,value:b};if(x.match(Ff))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:b}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(b=>{if(!b.isToken)return b.value;const x=b.value;(Lf(x)||Ef(x))&&Rf(x,e,String(r));const _=Oh[x[0]];return _(o,x,s.localize,h)}).join("")}function zf(r){const e=r.match(Mf);return e?e[1].replace(Uf,"'"):r}function wo(r,e){const t=Pt(r);if(!Cc(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=Ne(t.getDate(),2),h=Ne(t.getMonth()+1,2);n=`${Ne(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=Ne(t.getHours(),2),h=Ne(t.getMinutes(),2),u=Ne(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function Lc(r){const e=Pt(r);return e.setMinutes(0,0,0),e}var Nf={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},jf=`\r
`,Bf="\uFEFF",sn=r=>Object.assign({},Nf,r);class Hf extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let Wf=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class Gf extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Vf extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var fs=r=>r,hr=r=>r,zs=fs,va=fs,ss=fs,Dh=fs,Th=fs,Yf=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},qf=r=>Dh(typeof r=="object"?r.key:r),Xf=r=>Th(typeof r=="object"?r.displayLabel:r),Kf=(r,...e)=>e.reduce((t,i)=>i(t),r),Zf=r=>e=>r.useBom?va(hr(e)+Bf):e,Qf=r=>e=>r.showTitle?Ko(va(hr(e)+r.title))(ss("")):e,Ko=r=>e=>va(hr(r)+hr(e)+jf),Rc=r=>(e,t)=>Jf(r)(ss(hr(e)+hr(t))),Jf=r=>e=>fs(hr(e)+r.fieldSeparator),eg=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Wf("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=ss("");for(let s=0;s<e.length;s++){const n=Xf(e[s]);i=Rc(r)(i,Dc(r,hr(n)))}return i=ss(hr(i).slice(0,-1)),Ko(t)(i)},tg=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=ss("");for(let o=0;o<e.length;o++){const l=qf(e[o]),h=t[n][hr(l)];a=Rc(r)(a,Dc(r,h))}a=ss(hr(a).slice(0,-1)),s=Ko(s)(a)}return s},rg=r=>+r===r&&(!isFinite(r)||!!(r%1)),ig=(r,e)=>{if(rg(e)){if(r.decimalSeparator==="locale")return zs(e.toLocaleString());if(r.decimalSeparator)return zs(e.toString().replace(".",r.decimalSeparator))}return zs(e.toString())},jn=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+Yf(e,r.quoteCharacter)+r.quoteCharacter),zs(t)},sg=(r,e)=>{const t=e?"true":"false";return zs(r.boolDisplay[t])},ng=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?jn(r,r.replaceUndefinedWith+""):e===null?jn(r,"null"):jn(r,""),Dc=(r,e)=>{if(typeof e=="number")return ig(r,e);if(typeof e=="string")return jn(r,e);if(typeof e=="boolean"&&r.boolDisplay)return sg(r,e);if(e===null||typeof e>"u")return ng(r,e);throw new Vf(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Tc=r=>e=>{const t=sn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=Kf(va(""),Zf(t),Qf(t),eg(t,i),tg(t,i,e));if(hr(s).length<1)throw new Hf("Output is empty. Is your data formatted correctly?");return s},ag=r=>e=>{const t=sn(r),i=hr(e),s=t.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Ic=r=>e=>{if(!window)throw new Gf("Downloading only supported in a browser environment.");const t=ag(r)(e),i=sn(r),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function hg(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Mc={exports:{}};(function(r){(function(e){var t=U(),i=H(),s=I(),n=K(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:d,toBlob:p,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(S,A){return A=A||{},w(A),Promise.resolve(S).then(function(D){return x(D,A.filter,!0)}).then(_).then(W).then(T).then(function(D){return R(D,A.width||t.width(S),A.height||t.height(S))});function T(D){return A.bgcolor&&(D.style.backgroundColor=A.bgcolor),A.width&&(D.style.width=A.width+"px"),A.height&&(D.style.height=A.height+"px"),A.style&&Object.keys(A.style).forEach(function(G){D.style[G]=A.style[G]}),D}}function h(S,A){return b(S,A||{}).then(function(T){return T.getContext("2d").getImageData(0,0,t.width(S),t.height(S)).data})}function u(S,A){return b(S,A||{}).then(function(T){return T.toDataURL()})}function d(S,A){return A=A||{},b(S,A).then(function(T){return T.toDataURL("image/jpeg",A.quality||1)})}function p(S,A){return b(S,A||{}).then(t.canvasToBlob)}function w(S){typeof S.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=S.imagePlaceholder,typeof S.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=S.cacheBust}function b(S,A){return l(S,A).then(t.makeImage).then(t.delay(100)).then(function(D){var G=T(S);return G.getContext("2d").drawImage(D,0,0),G});function T(D){var G=document.createElement("canvas");if(G.width=A.width||t.width(D),G.height=A.height||t.height(D),A.bgcolor){var F=G.getContext("2d");F.fillStyle=A.bgcolor,F.fillRect(0,0,G.width,G.height)}return G}}function x(S,A,T){if(!T&&A&&!A(S))return Promise.resolve();return Promise.resolve(S).then(D).then(function(N){return G(S,N,A)}).then(function(N){return F(S,N)});function D(N){return N instanceof HTMLCanvasElement?t.makeImage(N.toDataURL()):N.cloneNode(!1)}function G(N,L,q){var le=N.childNodes;if(le.length===0)return Promise.resolve(L);return $(L,t.asArray(le),q).then(function(){return L});function $(z,pe,ie){var Re=Promise.resolve();return pe.forEach(function(We){Re=Re.then(function(){return x(We,ie)}).then(function(at){at&&z.appendChild(at)})}),Re}}function F(N,L){if(!(L instanceof Element))return L;return Promise.resolve().then(q).then(le).then($).then(z).then(function(){return L});function q(){pe(window.getComputedStyle(N),L.style);function pe(ie,Re){ie.cssText?Re.cssText=ie.cssText:We(ie,Re);function We(at,tt){t.asArray(at).forEach(function(ne){tt.setProperty(ne,at.getPropertyValue(ne),at.getPropertyPriority(ne))})}}}function le(){[":before",":after"].forEach(function(ie){pe(ie)});function pe(ie){var Re=window.getComputedStyle(N,ie),We=Re.getPropertyValue("content");if(We===""||We==="none")return;var at=t.uid();L.className=L.className+" "+at;var tt=document.createElement("style");tt.appendChild(ne(at,ie,Re)),L.appendChild(tt);function ne(ce,ke,De){var Ze="."+ce+":"+ke,Me=De.cssText?oi(De):Ai(De);return document.createTextNode(Ze+"{"+Me+"}");function oi(Qe){var nr=Qe.getPropertyValue("content");return Qe.cssText+" content: "+nr+";"}function Ai(Qe){return t.asArray(Qe).map(nr).join("; ")+";";function nr(qr){return qr+": "+Qe.getPropertyValue(qr)+(Qe.getPropertyPriority(qr)?" !important":"")}}}}}function $(){N instanceof HTMLTextAreaElement&&(L.innerHTML=N.value),N instanceof HTMLInputElement&&L.setAttribute("value",N.value)}function z(){L instanceof SVGElement&&(L.setAttribute("xmlns","http://www.w3.org/2000/svg"),L instanceof SVGRectElement&&["width","height"].forEach(function(pe){var ie=L.getAttribute(pe);ie&&L.style.setProperty(pe,ie)}))}}}function _(S){return s.resolveAll().then(function(A){var T=document.createElement("style");return S.appendChild(T),T.appendChild(document.createTextNode(A)),S})}function W(S){return n.inlineAll(S).then(function(){return S})}function R(S,A,T){return Promise.resolve(S).then(function(D){return D.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(D)}).then(t.escapeXhtml).then(function(D){return'<foreignObject x="0" y="0" width="100%" height="100%">'+D+"</foreignObject>"}).then(function(D){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+A+'" height="'+T+'">'+D+"</svg>"}).then(function(D){return"data:image/svg+xml;charset=utf-8,"+D})}function U(){return{escape:z,parseExtension:A,mimeType:T,dataAsUrl:$,isDataUrl:D,canvasToBlob:F,resolveUrl:N,getAndEncode:le,uid:L(),delay:pe,asArray:ie,escapeXhtml:Re,makeImage:q,width:We,height:at};function S(){var ne="application/font-woff",ce="image/jpeg";return{woff:ne,woff2:ne,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ce,jpeg:ce,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function A(ne){var ce=/\.([^\.\/]*?)$/g.exec(ne);return ce?ce[1]:""}function T(ne){var ce=A(ne).toLowerCase();return S()[ce]||""}function D(ne){return ne.search(/^(data:)/)!==-1}function G(ne){return new Promise(function(ce){for(var ke=window.atob(ne.toDataURL().split(",")[1]),De=ke.length,Ze=new Uint8Array(De),Me=0;Me<De;Me++)Ze[Me]=ke.charCodeAt(Me);ce(new Blob([Ze],{type:"image/png"}))})}function F(ne){return ne.toBlob?new Promise(function(ce){ne.toBlob(ce)}):G(ne)}function N(ne,ce){var ke=document.implementation.createHTMLDocument(),De=ke.createElement("base");ke.head.appendChild(De);var Ze=ke.createElement("a");return ke.body.appendChild(Ze),De.href=ce,Ze.href=ne,Ze.href}function L(){var ne=0;return function(){return"u"+ce()+ne++;function ce(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function q(ne){return new Promise(function(ce,ke){var De=new Image;De.onload=function(){ce(De)},De.onerror=ke,De.src=ne})}function le(ne){var ce=3e4;return o.impl.options.cacheBust&&(ne+=(/\?/.test(ne)?"&":"?")+new Date().getTime()),new Promise(function(ke){var De=new XMLHttpRequest;De.onreadystatechange=oi,De.ontimeout=Ai,De.responseType="blob",De.timeout=ce,De.open("GET",ne,!0),De.send();var Ze;if(o.impl.options.imagePlaceholder){var Me=o.impl.options.imagePlaceholder.split(/,/);Me&&Me[1]&&(Ze=Me[1])}function oi(){if(De.readyState===4){if(De.status!==200){Ze?ke(Ze):Qe("cannot fetch resource: "+ne+", status: "+De.status);return}var nr=new FileReader;nr.onloadend=function(){var qr=nr.result.split(/,/)[1];ke(qr)},nr.readAsDataURL(De.response)}}function Ai(){Ze?ke(Ze):Qe("timeout of "+ce+"ms occured while fetching resource: "+ne)}function Qe(nr){console.error(nr),ke("")}})}function $(ne,ce){return"data:"+ce+";base64,"+ne}function z(ne){return ne.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function pe(ne){return function(ce){return new Promise(function(ke){setTimeout(function(){ke(ce)},ne)})}}function ie(ne){for(var ce=[],ke=ne.length,De=0;De<ke;De++)ce.push(ne[De]);return ce}function Re(ne){return ne.replace(/#/g,"%23").replace(/\n/g,"%0A")}function We(ne){var ce=tt(ne,"border-left-width"),ke=tt(ne,"border-right-width");return ne.scrollWidth+ce+ke}function at(ne){var ce=tt(ne,"border-top-width"),ke=tt(ne,"border-bottom-width");return ne.scrollHeight+ce+ke}function tt(ne,ce){var ke=window.getComputedStyle(ne).getPropertyValue(ce);return parseFloat(ke.replace("px",""))}}function H(){var S=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:G,shouldProcess:A,impl:{readUrls:T,inline:D}};function A(F){return F.search(S)!==-1}function T(F){for(var N=[],L;(L=S.exec(F))!==null;)N.push(L[1]);return N.filter(function(q){return!t.isDataUrl(q)})}function D(F,N,L,q){return Promise.resolve(N).then(function($){return L?t.resolveUrl($,L):$}).then(q||t.getAndEncode).then(function($){return t.dataAsUrl($,t.mimeType(N))}).then(function($){return F.replace(le(N),"$1"+$+"$3")});function le($){return new RegExp(`(url\\(['"]?)(`+t.escape($)+`)(['"]?\\))`,"g")}}function G(F,N,L){if(q())return Promise.resolve(F);return Promise.resolve(F).then(T).then(function(le){var $=Promise.resolve(F);return le.forEach(function(z){$=$.then(function(pe){return D(pe,z,N,L)})}),$});function q(){return!A(F)}}}function I(){return{resolveAll:S,impl:{readAll:A}};function S(){return A().then(function(T){return Promise.all(T.map(function(D){return D.resolve()}))}).then(function(T){return T.join(`
`)})}function A(){return Promise.resolve(t.asArray(document.styleSheets)).then(D).then(T).then(function(F){return F.map(G)});function T(F){return F.filter(function(N){return N.type===CSSRule.FONT_FACE_RULE}).filter(function(N){return i.shouldProcess(N.style.getPropertyValue("src"))})}function D(F){var N=[];return F.forEach(function(L){try{t.asArray(L.cssRules||[]).forEach(N.push.bind(N))}catch(q){console.log("Error while reading CSS rules from "+L.href,q.toString())}}),N}function G(F){return{resolve:function(){var L=(F.parentStyleSheet||{}).href;return i.inlineAll(F.cssText,L)},src:function(){return F.style.getPropertyValue("src")}}}}}function K(){return{inlineAll:A,impl:{newImage:S}};function S(T){return{inline:D};function D(G){return t.isDataUrl(T.src)?Promise.resolve():Promise.resolve(T.src).then(G||t.getAndEncode).then(function(F){return t.dataAsUrl(F,t.mimeType(T.src))}).then(function(F){return new Promise(function(N,L){T.onload=N,T.onerror=L,T.src=F})})}}function A(T){if(!(T instanceof Element))return Promise.resolve(T);return D(T).then(function(){return T instanceof HTMLImageElement?S(T).inline():Promise.all(t.asArray(T.childNodes).map(function(G){return A(G)}))});function D(G){var F=G.style.getPropertyValue("background");return F?i.inlineAll(F).then(function(N){G.style.setProperty("background",N,G.style.getPropertyPriority("background"))}).then(function(){return G}):Promise.resolve(G)}}}})()})(Mc);var cg=Mc.exports;const ug=lg(cg);var Oo={exports:{}};const dg={},pg=Object.freeze(Object.defineProperty({__proto__:null,default:dg},Symbol.toStringTag,{value:"Module"})),Qi=hg(pg);/**
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
 */(function(r,e){(function(t,i){i(e)})(og,function(t){var i={},s={exports:{}};(function(V){var Z=function(we){return typeof we<"u"&&we.versions!=null&&we.versions.node!=null&&we+""=="[object process]"};V.exports.isNode=Z,V.exports.platform=typeof process<"u"&&Z(process)?"node":"browser";var Q=V.exports.platform==="node"&&Qi;V.exports.isMainThread=V.exports.platform==="node"?(!Q||Q.isMainThread)&&!process.connected:typeof Window<"u",V.exports.cpus=V.exports.platform==="browser"?self.navigator.hardwareConcurrency:Qi.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function V(we,Ge){var Pe=this;if(!(this instanceof V))throw new SyntaxError("Constructor must be called with the new operator");if(typeof we!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var rt=[],je=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var he=function(Ae,Ue){rt.push(Ae),je.push(Ue)};this.then=function(Y,Ae){return new V(function(Ue,mt){var Rt=Y?Z(Y,Ue,mt):Ue,Mr=Ae?Z(Ae,Ue,mt):mt;he(Rt,Mr)},Pe)};var Be=function(Ae){return Pe.resolved=!0,Pe.rejected=!1,Pe.pending=!1,rt.forEach(function(Ue){Ue(Ae)}),he=function(mt,Rt){mt(Ae)},Be=B=function(){},Pe},B=function(Ae){return Pe.resolved=!1,Pe.rejected=!0,Pe.pending=!1,je.forEach(function(Ue){Ue(Ae)}),he=function(mt,Rt){Rt(Ae)},Be=B=function(){},Pe};this.cancel=function(){return Ge?Ge.cancel():B(new Q),Pe},this.timeout=function(Y){if(Ge)Ge.timeout(Y);else{var Ae=setTimeout(function(){B(new J("Promise timed out after "+Y+" ms"))},Y);Pe.always(function(){clearTimeout(Ae)})}return Pe},we(function(Y){Be(Y)},function(Y){B(Y)})}function Z(we,Ge,Pe){return function(rt){try{var je=we(rt);je&&typeof je.then=="function"&&typeof je.catch=="function"?je.then(Ge,Pe):Ge(je)}catch(he){Pe(he)}}}V.prototype.catch=function(we){return this.then(null,we)},V.prototype.always=function(we){return this.then(we,we)},V.all=function(we){return new V(function(Ge,Pe){var rt=we.length,je=[];rt?we.forEach(function(he,Be){he.then(function(B){je[Be]=B,rt--,rt==0&&Ge(je)},function(B){rt=0,Pe(B)})}):Ge(je)})},V.defer=function(){var we={};return we.promise=new V(function(Ge,Pe){we.resolve=Ge,we.reject=Pe}),we};function Q(we){this.message=we||"promise cancelled",this.stack=new Error().stack}Q.prototype=new Error,Q.prototype.constructor=Error,Q.prototype.name="CancellationError",V.CancellationError=Q;function J(we){this.message=we||"timeout exceeded",this.stack=new Error().stack}return J.prototype=new Error,J.prototype.constructor=Error,J.prototype.name="TimeoutError",V.TimeoutError=J,a.Promise=V,a}function h(V,Z){(Z==null||Z>V.length)&&(Z=V.length);for(var Q=0,J=Array(Z);Q<Z;Q++)J[Q]=V[Q];return J}function u(V,Z){var Q=typeof Symbol<"u"&&V[Symbol.iterator]||V["@@iterator"];if(!Q){if(Array.isArray(V)||(Q=W(V))||Z){Q&&(V=Q);var J=0,we=function(){};return{s:we,n:function(){return J>=V.length?{done:!0}:{done:!1,value:V[J++]}},e:function(je){throw je},f:we}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ge,Pe=!0,rt=!1;return{s:function(){Q=Q.call(V)},n:function(){var je=Q.next();return Pe=je.done,je},e:function(je){rt=!0,Ge=je},f:function(){try{Pe||Q.return==null||Q.return()}finally{if(rt)throw Ge}}}}function d(V,Z,Q){return(Z=x(Z))in V?Object.defineProperty(V,Z,{value:Q,enumerable:!0,configurable:!0,writable:!0}):V[Z]=Q,V}function p(V,Z){var Q=Object.keys(V);if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(V);Z&&(J=J.filter(function(we){return Object.getOwnPropertyDescriptor(V,we).enumerable})),Q.push.apply(Q,J)}return Q}function w(V){for(var Z=1;Z<arguments.length;Z++){var Q=arguments[Z]!=null?arguments[Z]:{};Z%2?p(Object(Q),!0).forEach(function(J){d(V,J,Q[J])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(Q)):p(Object(Q)).forEach(function(J){Object.defineProperty(V,J,Object.getOwnPropertyDescriptor(Q,J))})}return V}function b(V,Z){if(typeof V!="object"||!V)return V;var Q=V[Symbol.toPrimitive];if(Q!==void 0){var J=Q.call(V,Z||"default");if(typeof J!="object")return J;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Z==="string"?String:Number)(V)}function x(V){var Z=b(V,"string");return typeof Z=="symbol"?Z:Z+""}function _(V){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},_(V)}function W(V,Z){if(V){if(typeof V=="string")return h(V,Z);var Q={}.toString.call(V).slice(8,-1);return Q==="Object"&&V.constructor&&(Q=V.constructor.name),Q==="Map"||Q==="Set"?Array.from(V):Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)?h(V,Z):void 0}}var R={exports:{}},U={},H;function I(){return H||(H=1,U.validateOptions=function(Z,Q,J){if(Z){var we=Z?Object.keys(Z):[],Ge=we.find(function(rt){return!Q.includes(rt)});if(Ge)throw new Error('Object "'+J+'" contains an unknown option "'+Ge+'"');var Pe=Q.find(function(rt){return Object.prototype[rt]&&!we.includes(rt)});if(Pe)throw new Error('Object "'+J+'" contains an inherited option "'+Pe+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return Z}},U.workerOptsNames=["credentials","name","type"],U.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],U.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),U}var K,S;function A(){return S||(S=1,K=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),K}var T;function D(){if(T)return R.exports;T=1;var V=l(),Z=V.Promise,Q=n,J=I(),we=J.validateOptions,Ge=J.forkOptsNames,Pe=J.workerThreadOptsNames,rt=J.workerOptsNames,je="__workerpool-terminate__";function he(){var ye=B();if(!ye)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return ye}function Be(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":_(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function B(){try{return Qi}catch(ye){if(_(ye)==="object"&&ye!==null&&ye.code==="MODULE_NOT_FOUND")return null;throw ye}}function Y(){if(Q.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var ye=new Blob([A()],{type:"text/javascript"});return window.URL.createObjectURL(ye)}else return __dirname+"/worker.js"}function Ae(ye,Oe){if(Oe.workerType==="web")return Be(),Ue(ye,Oe.workerOpts,Worker);if(Oe.workerType==="thread")return X=he(),mt(ye,X,Oe);if(Oe.workerType==="process"||!Oe.workerType)return Rt(ye,Mr(Oe),Qi);if(Q.platform==="browser")return Be(),Ue(ye,Oe.workerOpts,Worker);var X=B();return X?mt(ye,X,Oe):Rt(ye,Mr(Oe),Qi)}function Ue(ye,Oe,X){we(Oe,rt,"workerOpts");var _e=new X(ye,Oe);return _e.isBrowserWorker=!0,_e.on=function(Ve,He){this.addEventListener(Ve,function(ot){He(ot.data)})},_e.send=function(Ve,He){this.postMessage(Ve,He)},_e}function mt(ye,Oe,X){var _e,Ve;we(X==null?void 0:X.workerThreadOpts,Pe,"workerThreadOpts");var He=new Oe.Worker(ye,w({stdout:(_e=X==null?void 0:X.emitStdStreams)!==null&&_e!==void 0?_e:!1,stderr:(Ve=X==null?void 0:X.emitStdStreams)!==null&&Ve!==void 0?Ve:!1},X==null?void 0:X.workerThreadOpts));return He.isWorkerThread=!0,He.send=function(ot,Fe){this.postMessage(ot,Fe)},He.kill=function(){return this.terminate(),!0},He.disconnect=function(){this.terminate()},X!=null&&X.emitStdStreams&&(He.stdout.on("data",function(ot){return He.emit("stdout",ot)}),He.stderr.on("data",function(ot){return He.emit("stderr",ot)})),He}function Rt(ye,Oe,X){we(Oe.forkOpts,Ge,"forkOpts");var _e=X.fork(ye,Oe.forkArgs,Oe.forkOpts),Ve=_e.send;return _e.send=function(He){return Ve.call(_e,He)},Oe.emitStdStreams&&(_e.stdout.on("data",function(He){return _e.emit("stdout",He)}),_e.stderr.on("data",function(He){return _e.emit("stderr",He)})),_e.isChildProcess=!0,_e}function Mr(ye){ye=ye||{};var Oe=process.execArgv.join(" "),X=Oe.indexOf("--inspect")!==-1,_e=Oe.indexOf("--debug-brk")!==-1,Ve=[];return X&&(Ve.push("--inspect="+ye.debugPort),_e&&Ve.push("--debug-brk")),process.execArgv.forEach(function(He){He.indexOf("--max-old-space-size")>-1&&Ve.push(He)}),Object.assign({},ye,{forkArgs:ye.forkArgs,forkOpts:Object.assign({},ye.forkOpts,{execArgv:(ye.forkOpts&&ye.forkOpts.execArgv||[]).concat(Ve),stdio:ye.emitStdStreams?"pipe":void 0})})}function ar(ye){for(var Oe=new Error(""),X=Object.keys(ye),_e=0;_e<X.length;_e++)Oe[X[_e]]=ye[X[_e]];return Oe}function gr(ye,Oe){if(Object.keys(ye.processing).length===1){var X=Object.values(ye.processing)[0];X.options&&typeof X.options.on=="function"&&X.options.on(Oe)}}function li(ye,Oe){var X=this,_e=Oe||{};this.script=ye||Y(),this.worker=Ae(this.script,_e),this.debugPort=_e.debugPort,this.forkOpts=_e.forkOpts,this.forkArgs=_e.forkArgs,this.workerOpts=_e.workerOpts,this.workerThreadOpts=_e.workerThreadOpts,this.workerTerminateTimeout=_e.workerTerminateTimeout,ye||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Fe){gr(X,{stdout:Fe.toString()})}),this.worker.on("stderr",function(Fe){gr(X,{stderr:Fe.toString()})}),this.worker.on("message",function(Fe){if(!X.terminated)if(typeof Fe=="string"&&Fe==="ready")X.worker.ready=!0,He();else{var Gt=Fe.id,vt=X.processing[Gt];vt!==void 0&&(Fe.isEvent?vt.options&&typeof vt.options.on=="function"&&vt.options.on(Fe.payload):(delete X.processing[Gt],X.terminating===!0&&X.terminate(),Fe.error?vt.resolver.reject(ar(Fe.error)):vt.resolver.resolve(Fe.result)))}});function Ve(Fe){X.terminated=!0;for(var Gt in X.processing)X.processing[Gt]!==void 0&&X.processing[Gt].resolver.reject(Fe);X.processing=Object.create(null)}function He(){var Fe=u(X.requestQueue.splice(0)),Gt;try{for(Fe.s();!(Gt=Fe.n()).done;){var vt=Gt.value;X.worker.send(vt.message,vt.transfer)}}catch(wn){Fe.e(wn)}finally{Fe.f()}}var ot=this.worker;this.worker.on("error",Ve),this.worker.on("exit",function(Fe,Gt){var vt=`Workerpool Worker terminated Unexpectedly
`;vt+="    exitCode: `"+Fe+"`\n",vt+="    signalCode: `"+Gt+"`\n",vt+="    workerpool.script: `"+X.script+"`\n",vt+="    spawnArgs: `"+ot.spawnargs+"`\n",vt+="    spawnfile: `"+ot.spawnfile+"`\n",vt+="    stdout: `"+ot.stdout+"`\n",vt+="    stderr: `"+ot.stderr+"`\n",Ve(new Error(vt))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return li.prototype.methods=function(){return this.exec("methods")},li.prototype.exec=function(ye,Oe,X,_e){X||(X=Z.defer());var Ve=++this.lastId;this.processing[Ve]={id:Ve,resolver:X,options:_e};var He={message:{id:Ve,method:ye,params:Oe},transfer:_e&&_e.transfer};this.terminated?X.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(He.message,He.transfer):this.requestQueue.push(He);var ot=this;return X.promise.catch(function(Fe){if(Fe instanceof Z.CancellationError||Fe instanceof Z.TimeoutError)return delete ot.processing[Ve],ot.terminateAndNotify(!0).then(function(){throw Fe},function(Gt){throw Gt});throw Fe})},li.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},li.prototype.terminate=function(ye,Oe){var X=this;if(ye){for(var _e in this.processing)this.processing[_e]!==void 0&&this.processing[_e].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Oe=="function"&&(this.terminationHandler=Oe),this.busy())this.terminating=!0;else{var Ve=function(Fe){if(X.terminated=!0,X.cleaning=!1,X.worker!=null&&X.worker.removeAllListeners&&X.worker.removeAllListeners("message"),X.worker=null,X.terminating=!1,X.terminationHandler)X.terminationHandler(Fe,X);else if(Fe)throw Fe};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ve(new Error("worker already killed!"));return}var He=setTimeout(function(){X.worker&&X.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(He),X.worker&&(X.worker.killed=!0),Ve()}),this.worker.ready?this.worker.send(je):this.requestQueue.push({message:je}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ve()}},li.prototype.terminateAndNotify=function(ye,Oe){var X=Z.defer();return Oe&&X.promise.timeout(Oe),this.terminate(ye,function(_e,Ve){_e?X.reject(_e):X.resolve(Ve)}),X.promise},R.exports=li,R.exports._tryRequireWorkerThreads=B,R.exports._setupProcessWorker=Rt,R.exports._setupBrowserWorker=Ue,R.exports._setupWorkerThreadWorker=mt,R.exports.ensureWorkerThreads=he,R.exports}var G,F;function N(){if(F)return G;F=1;var V=65535;G=Z;function Z(){this.ports=Object.create(null),this.length=0}return Z.prototype.nextAvailableStartingAt=function(Q){for(;this.ports[Q]===!0;)Q++;if(Q>=V)throw new Error("WorkerPool debug port limit reached: "+Q+">= "+V);return this.ports[Q]=!0,this.length++,Q},Z.prototype.releasePort=function(Q){delete this.ports[Q],this.length--},G}var L,q;function le(){if(q)return L;q=1;var V=l(),Z=V.Promise,Q=D(),J=n,we=N(),Ge=new we;function Pe(B,Y){typeof B=="string"?this.script=B||null:(this.script=null,Y=B),this.workers=[],this.tasks=[],Y=Y||{},this.forkArgs=Object.freeze(Y.forkArgs||[]),this.forkOpts=Object.freeze(Y.forkOpts||{}),this.workerOpts=Object.freeze(Y.workerOpts||{}),this.workerThreadOpts=Object.freeze(Y.workerThreadOpts||{}),this.debugPortStart=Y.debugPortStart||43210,this.nodeWorker=Y.nodeWorker,this.workerType=Y.workerType||Y.nodeWorker||"auto",this.maxQueueSize=Y.maxQueueSize||1/0,this.workerTerminateTimeout=Y.workerTerminateTimeout||1e3,this.onCreateWorker=Y.onCreateWorker||function(){return null},this.onTerminateWorker=Y.onTerminateWorker||function(){return null},this.emitStdStreams=Y.emitStdStreams||!1,Y&&"maxWorkers"in Y?(rt(Y.maxWorkers),this.maxWorkers=Y.maxWorkers):this.maxWorkers=Math.max((J.cpus||4)-1,1),Y&&"minWorkers"in Y&&(Y.minWorkers==="max"?this.minWorkers=this.maxWorkers:(je(Y.minWorkers),this.minWorkers=Y.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&Q.ensureWorkerThreads()}Pe.prototype.exec=function(B,Y,Ae){if(Y&&!Array.isArray(Y))throw new TypeError('Array expected as argument "params"');if(typeof B=="string"){var Ue=Z.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var mt=this.tasks,Rt={method:B,params:Y,resolver:Ue,timeout:null,options:Ae};mt.push(Rt);var Mr=Ue.promise.timeout;return Ue.promise.timeout=function(gr){return mt.indexOf(Rt)!==-1?(Rt.timeout=gr,Ue.promise):Mr.call(Ue.promise,gr)},this._next(),Ue.promise}else{if(typeof B=="function")return this.exec("run",[String(B),Y],Ae);throw new TypeError('Function or string expected as argument "method"')}},Pe.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var B=this;return this.exec("methods").then(function(Y){var Ae={};return Y.forEach(function(Ue){Ae[Ue]=function(){return B.exec(Ue,Array.prototype.slice.call(arguments))}}),Ae})},Pe.prototype._next=function(){if(this.tasks.length>0){var B=this._getWorker();if(B){var Y=this,Ae=this.tasks.shift();if(Ae.resolver.promise.pending){var Ue=B.exec(Ae.method,Ae.params,Ae.resolver,Ae.options).then(Y._boundNext).catch(function(){if(B.terminated)return Y._removeWorker(B)}).then(function(){Y._next()});typeof Ae.timeout=="number"&&Ue.timeout(Ae.timeout)}else Y._next()}}},Pe.prototype._getWorker=function(){for(var B=this.workers,Y=0;Y<B.length;Y++){var Ae=B[Y];if(Ae.busy()===!1)return Ae}return B.length<this.maxWorkers?(Ae=this._createWorkerHandler(),B.push(Ae),Ae):null},Pe.prototype._removeWorker=function(B){var Y=this;return Ge.releasePort(B.debugPort),this._removeWorkerFromList(B),this._ensureMinWorkers(),new Z(function(Ae,Ue){B.terminate(!1,function(mt){Y.onTerminateWorker({forkArgs:B.forkArgs,forkOpts:B.forkOpts,workerThreadOpts:B.workerThreadOpts,script:B.script}),mt?Ue(mt):Ae(B)})})},Pe.prototype._removeWorkerFromList=function(B){var Y=this.workers.indexOf(B);Y!==-1&&this.workers.splice(Y,1)},Pe.prototype.terminate=function(B,Y){var Ae=this;this.tasks.forEach(function(ar){ar.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var Ue=function(gr){Ge.releasePort(gr.debugPort),this._removeWorkerFromList(gr)},mt=Ue.bind(this),Rt=[],Mr=this.workers.slice();return Mr.forEach(function(ar){var gr=ar.terminateAndNotify(B,Y).then(mt).always(function(){Ae.onTerminateWorker({forkArgs:ar.forkArgs,forkOpts:ar.forkOpts,workerThreadOpts:ar.workerThreadOpts,script:ar.script})});Rt.push(gr)}),Z.all(Rt)},Pe.prototype.stats=function(){var B=this.workers.length,Y=this.workers.filter(function(Ae){return Ae.busy()}).length;return{totalWorkers:B,busyWorkers:Y,idleWorkers:B-Y,pendingTasks:this.tasks.length,activeTasks:Y}},Pe.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var B=this.workers.length;B<this.minWorkers;B++)this.workers.push(this._createWorkerHandler())},Pe.prototype._createWorkerHandler=function(){var B=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new Q(B.script||this.script,{forkArgs:B.forkArgs||this.forkArgs,forkOpts:B.forkOpts||this.forkOpts,workerOpts:B.workerOpts||this.workerOpts,workerThreadOpts:B.workerThreadOpts||this.workerThreadOpts,debugPort:Ge.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function rt(B){if(!he(B)||!Be(B)||B<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function je(B){if(!he(B)||!Be(B)||B<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function he(B){return typeof B=="number"}function Be(B){return Math.round(B)==B}return L=Pe,L}var $={},z,pe;function ie(){if(pe)return z;pe=1;function V(Z,Q){this.message=Z,this.transfer=Q}return z=V,z}var Re;function We(){return Re||(Re=1,function(V){var Z=ie(),Q="__workerpool-terminate__",J={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")J.on=function(he,Be){addEventListener(he,function(B){Be(B.data)})},J.send=function(he,Be){Be?postMessage(he,Be):postMessage(he)};else if(typeof process<"u"){var we;try{we=Qi}catch(he){if(!(_(he)==="object"&&he!==null&&he.code==="MODULE_NOT_FOUND"))throw he}if(we&&we.parentPort!==null){var Ge=we.parentPort;J.send=Ge.postMessage.bind(Ge),J.on=Ge.on.bind(Ge),J.exit=process.exit.bind(process)}else J.on=process.on.bind(process),J.send=function(he){process.send(he)},J.on("disconnect",function(){process.exit(1)}),J.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Pe(he){return Object.getOwnPropertyNames(he).reduce(function(Be,B){return Object.defineProperty(Be,B,{value:he[B],enumerable:!0})},{})}function rt(he){return he&&typeof he.then=="function"&&typeof he.catch=="function"}J.methods={},J.methods.run=function(Be,B){var Y=new Function("return ("+Be+").apply(null, arguments);");return Y.apply(Y,B)},J.methods.methods=function(){return Object.keys(J.methods)},J.terminationHandler=void 0,J.cleanupAndExit=function(he){var Be=function(){J.exit(he)};if(!J.terminationHandler)return Be();var B=J.terminationHandler(he);rt(B)?B.then(Be,Be):Be()};var je=null;J.on("message",function(he){if(he===Q)return J.cleanupAndExit(0);try{var Be=J.methods[he.method];if(Be){je=he.id;var B=Be.apply(Be,he.params);rt(B)?B.then(function(Y){Y instanceof Z?J.send({id:he.id,result:Y.message,error:null},Y.transfer):J.send({id:he.id,result:Y,error:null}),je=null}).catch(function(Y){J.send({id:he.id,result:null,error:Pe(Y)}),je=null}):(B instanceof Z?J.send({id:he.id,result:B.message,error:null},B.transfer):J.send({id:he.id,result:B,error:null}),je=null)}else throw new Error('Unknown method "'+he.method+'"')}catch(Y){J.send({id:he.id,result:null,error:Pe(Y)})}}),J.register=function(he,Be){if(he)for(var B in he)he.hasOwnProperty(B)&&(J.methods[B]=he[B]);Be&&(J.terminationHandler=Be.onTerminate),J.send("ready")},J.emit=function(he){if(je){if(he instanceof Z){J.send({id:je,isEvent:!0,payload:he.message},he.transfer);return}J.send({id:je,isEvent:!0,payload:he})}},V.add=J.register,V.emit=J.emit}($)),$}var at=n.platform,tt=n.isMainThread,ne=n.cpus;function ce(V,Z){var Q=le();return new Q(V,Z)}var ke=i.pool=ce;function De(V,Z){var Q=We();Q.add(V,Z)}var Ze=i.worker=De;function Me(V){var Z=We();Z.emit(V)}var oi=i.workerEmit=Me,Ai=l(),Qe=Ai.Promise,nr=i.Promise=Qe,qr=i.Transfer=ie(),Na=i.platform=at,ja=i.isMainThread=tt,Ba=i.cpus=ne;t.Promise=nr,t.Transfer=qr,t.cpus=Ba,t.default=i,t.isMainThread=ja,t.platform=Na,t.pool=ke,t.worker=Ze,t.workerEmit=oi,Object.defineProperty(t,"__esModule",{value:!0})})})(Oo,Oo.exports);var fg=Oo.exports,xt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},Uc=class extends xt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},gg=class extends xt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},mg=class extends xt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},vg=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},yg=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],bg=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],wg=vg(),yr={iron:{pixels:bg,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:yg,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:wg,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},xg=class extends xt{get availablePalettes(){return yr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},ko,Sg=(ko=class{},c(ko,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),ko),ft,st=(ft=class extends Sg{static humanRangeDates(e,t){return e=ft.inputToDate(e),t=ft.inputToDate(t),e.getUTCDate()===t.getUTCDate()?ft.humanDate(e):[ft.humanDate(e),ft.humanDate(t)].join(" - ")}static human(e){return`${ft.humanDate(e)} ${ft.humanTime(e,!0)} `}},c(ft,"isoDate",e=>(e=ft.inputToDate(e),wo(e,{representation:"date"}))),c(ft,"isoTime",e=>(e=ft.inputToDate(e),wo(e,{representation:"time"}))),c(ft,"isoComplete",e=>(e=ft.inputToDate(e),wo(e))),c(ft,"humanTime",(e,t=!1)=>(e=ft.inputToDate(e),Le(e,t?"HH:mm:ss":"HH:mm"))),c(ft,"humanDate",(e,t=!1)=>(e=ft.inputToDate(e),Le(e,t?"d. M.":"d. M. yyyy"))),ft),ee=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},ya=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new ee);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},ht=class{constructor(r,e,t){c(this,"onSerializableChange",new ee);c(this,"_selected",!1);c(this,"onSelected",new ee);c(this,"onDeselected",new ee);c(this,"onValues",new ee);c(this,"onMoveOrResize",new ee);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new ee);c(this,"_initialColor");c(this,"onSetInitialColor",new ee);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new ee);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Fc=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new ee);c(this,"pxY");c(this,"_y");c(this,"onY",new ee);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onActivate",new ee);c(this,"onDeactivate",new ee);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Xt,$g=(Xt=class extends Fc{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(Xt.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Xt.sizePx(-.5),t.style.left=Xt.sizePx(-.5),t.style.width=Xt.sizePx(),t.style.height=Xt.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Xt.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Xt.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Xt.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Xt.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(Xt,"size",20),Xt),vr=class zc extends ht{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new $g("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Nc(this)),this._graph}static addAtPoint(t,i,s,n,a){return new zc(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=ht.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=ht.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=ht.serializedGetNumericalValueByKey(i,"top"),h=ht.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Nc=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new ee);c(this,"onGraphData",new ee);c(this,"onAnalysisSelection",new ee);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof vr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof vr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof vr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof vr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},_g=class extends Fc{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Cg=class extends _g{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Or=class extends ht{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Nc(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Cg(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(w=>w.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=ht.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=ht.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=ht.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=ht.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=ht.serializedGetNumericalValueByKey(t,"top"),u=ht.serializedGetNumericalValueByKey(t,"left"),d=ht.serializedGetNumericalValueByKey(t,"width"),p=ht.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),d!==void 0&&d!==this.width&&(this.setWidth(d),i=!0),p!==void 0&&p!==this.height&&(this.setHeight(p),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},jc=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Ih=class extends jc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},Mh=class Bn extends Or{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Bn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Bn.calculateDimensionsFromCorners(s,n,a,o),p=new Bn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Ih(this,e,t,e+i,t+s):new Ih(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++)if(this.isWithin(d,h)){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Uh=class extends jc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},Fh=class Hn extends Or{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Hn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Hn.calculateDimensionsFromCorners(s,n,a,o),p=new Hn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Uh(this,e,t,e+i,t+s):new Uh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Wn=["Orange","Lightblue","Green","Brown","Yellow","Blue","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],kg=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new ee);c(this,"onRemove",new ee);c(this,"onSelectionChange",new ee);c(this,"colors",Wn);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=Fh.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=Fh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=Mh.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=Mh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=vr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=vr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Wn.filter(i=>!e.includes(i));return t.length>0?t[0]:Wn[0]}getNextName(e){return`${e} ${this.all.length}`}},Pg=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Ag=class extends xt{constructor(){super(...arguments);c(this,"layers",new kg(this));c(this,"points",new Pg(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Og=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new ee);c(this,"onAddGraph",new ee);c(this,"onRemoveGraph",new ee);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:Le(a,"m:ss:SSS")+" ",[e[1].key]:Le(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Eg=class extends xt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new ee);c(this,"listeners",new Og(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=sn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Tc(i)(e);Ic(i)(s)}},Lg=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new ee);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},rs,Bc=(rs=class extends xt{constructor(){super(...arguments);c(this,"onSlotInit",new ee);c(this,"onSlotRemove",new ee);c(this,"onSlot1Assignement",new ee);c(this,"onSlot2Assignement",new ee);c(this,"onSlot3Assignement",new ee);c(this,"onSlot4Assignement",new ee);c(this,"onSlot5Assignement",new ee);c(this,"onSlot6Assignement",new ee);c(this,"onSlot7Assignement",new ee);c(this,"onSlot1Serialize",new ee);c(this,"onSlot2Serialize",new ee);c(this,"onSlot3Serialize",new ee);c(this,"onSlot4Serialize",new ee);c(this,"onSlot5Serialize",new ee);c(this,"onSlot6Serialize",new ee);c(this,"onSlot7Serialize",new ee)}getNextFreeSlotNumber(){for(let t=1;t<=rs.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Lg(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(_=>_.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=ht.serializedGetNumericalValueByKey(s,"top"),l=ht.serializedGetNumericalValueByKey(s,"left");const h=ht.serializedGetStringValueByKey(s,"color");let u=ht.serializedGetNumericalValueByKey(s,"width"),d=ht.serializedGetNumericalValueByKey(s,"height");const p=ht.serializedSegmentsHasExact(s,"avg"),w=ht.serializedSegmentsHasExact(s,"min"),b=ht.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let x;if(a==="point"){if(o===void 0||l===void 0)return;x=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||d===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),d<0&&(d=0),d+o>this.parent.height-1&&(d=this.parent.height-o-1),x=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,d+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,d+o,h,!1)}if(x!==void 0){if(x instanceof vr?p&&x.graph.setAvgActivation(!0):x instanceof Or&&(p&&x.graph.setAvgActivation(!0),w&&x.graph.setMinActivation(!0),b&&x.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const _=this.getNextFreeSlotNumber();_!==void 0&&this.assignSlot(_,x)}else i!==void 0&&this.assignSlot(i,x);return x}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(rs,"MAX_SLOTS",7),rs),Rg=class extends xt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Dg=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",1);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Hc={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Tg=class extends xt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new ee);c(this,"callbacksPlay",new ee);c(this,"callbacksPause",new ee);c(this,"callbacksStop",new ee);c(this,"callbacksEnd",new ee);c(this,"callbacksChangeFrame",new ee);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Dg(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Hc[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),Le(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);console.log(e),this.setRelativeTime(e.relative)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Ig=class extends xt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new ee)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},ba=class{},Ct,Mg=(Ct=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Ct.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Ct.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Ct.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Ct.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Ct.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Ct.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Ct.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Ct.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Ct,"CLASS_BASE","thermalImageRoot"),c(Ct,"CLASS_BUILT",Ct.CLASS_BASE+"__built"),c(Ct,"CLASS_HYDRATED",Ct.CLASS_BASE+"__mounted"),c(Ct,"CLASS_HOVER",Ct.CLASS_BASE+"__hover"),Ct),Ug=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new ee),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},Fg=class extends ba{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Ug(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new Mg(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},wa=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},Fr=class Eo{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Eo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Eo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},zg=class extends wa{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=Fr.createVisibleLayer(),this._url&&(this.image=Fr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Ng=class extends wa{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=Fr.createCanvasContainer(),this.canvas=Fr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof vr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const p=new OffscreenCanvas(a,o).getContext("2d"),w=n-s,b=u.map(R=>({id:R[1],type:R[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let R=0;R<a;R++)for(let U=0;U<o;U++){const H=R+U*a,I=l[H];let K=I;K<s&&(K=s),K>n&&(K=n);const A=(K-s)/w,T=Math.round(255*A),D=h[T];p.fillStyle=D,p.fillRect(R,U,1,1);const G=(F,N,L,q,le,$)=>{const z=L+le/2,pe=q+$/2,ie=(F-z)/(le/2),Re=(N-pe)/($/2);return ie*ie+Re*Re<=1};u.forEach((F,N)=>{const L=b[N],[q,le,$,z,pe,ie]=F;q==="point"?R===z&&U===$&&(L.avg.value=I):q==="rectangle"?R>=z&&R<z+pe&&U>=$&&U<$+ie&&(I<L.min.value&&(L.min.value=I),I>L.max.value&&(L.max.value=I),L.avg.count=L.avg.count+1,L.avg.sum=L.avg.sum+I):q==="ellipsis"&&G(R,U,z,$,a,o)&&(I<L.min.value&&(L.min.value=I),I>L.max.value&&(L.max.value=I),L.avg.count=L.avg.count+1,L.avg.sum=L.avg.sum+I)})}const x=b.map(R=>({id:R.id,min:R.min.value!==1/0?R.min.value:void 0,max:R.max.value!==-1/0?R.max.value:void 0,avg:R.type==="point"?R.avg.value:R.avg.sum/R.avg.count})),_=p.getImageData(0,0,a,o);return{image:await createImageBitmap(_),stats:x}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},jg=class extends wa{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=Fr.createCursorLayerRoot(),this.center=Fr.createCursorLayerCenter(),this.axisX=Fr.createCursorLayerX(),this.axisY=Fr.createCursorLayerY(),this.label=Fr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Bg=class extends wa{constructor(e){super(e);c(this,"container");this.container=Fr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Wc=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},mi=class extends Wc{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=nn.fromService(t,i,s,n);return t.files.addFile(a),a}},yt,Gc=(yt=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new ee)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=yt.FONT_SIZE_NORMAL,s="normal",n=yt.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=yt.FONT_SIZE_NORMAL,i.style.fontFamily=yt.FONT_FAMILY,i.style.color=yt.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){ug.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,d=60,w=u/(d+40),b=document.createElement("div");b.style.width="100%",b.style.position="relative",b.style.paddingLeft=d/2+"px",b.style.paddingRight=d/2+"px",b.style.boxSizing="border-box";const x=document.createElement("div");x.style.width="100%",x.style.position="relative",x.style.backgroundColor=o,x.style.height="30px";const _=i-t,W=s-t,R=n-t,U=W/_*100,H=R/_*100,I=document.createElement("div");I.style.position="absolute",I.style.backgroundImage=a,I.style.height="100%",I.style.top="0px",I.style.left=U+"%",I.style.width=H-U+"%",x.appendChild(I),b.appendChild(x);const K=document.createElement("div");K.style.width="100%",K.style.height="40px",K.style.position="relative";const S=(D,G=!1,F,N)=>{const L=D/_*100,q=document.createElement("div");q.style.position="absolute",q.style.top="0px",q.style.left=`calc( ${L}% - ${d/2}px )`,q.style.width=d+"px",q.style.textAlign="center",q.style.lineHeight="0px";const le=document.createElement("div"),$=document.createElement("div"),z=document.createElement("div"),pe=7,ie=pe+"px";le.innerHTML=(t+D).toFixed(2)+" °C",le.style.display="inline-block",le.style.fontSize=yt.FONT_SIZE_SMALL,le.style.lineHeight="1em",le.style.padding="3px",le.style.position="relative",$.style.width="100%",$.style.height=ie,$.style.textAlign="center",$.style.position="relative",$.style.lineHeight="0px",z.style.content="",z.style.display="inline-block",G?(z.style.width=pe*2+"px",z.style.height=pe*2+"px",z.style.rotate="45deg",z.style.backgroundColor=N,le.style.backgroundColor=N,le.style.zIndex="99",le.style.color=F):(z.style.width="1px",z.style.height=ie,z.style.backgroundColor=F),$.appendChild(z),q.appendChild($),q.appendChild(le),K.appendChild(q)};if(h){const D=document.createElement("div");D.style.position="absolute",D.style.border=`2px solid ${l}`,D.style.height="100%",D.style.boxSizing="border-box";const G=(h.from-t)/_*100,F=(h.to-t)/_*100-G;D.style.left=G+"%",D.style.width=F+"%",x.appendChild(D),S(h.from-t,!0,"white",o),S(h.to-t,!0,"white",o)}const A=_/w;let T=0;for(;T<=_;)S(T,!1,l,"transparent"),T=T+A;return S(W,!0,"white",l),S(R,!0,"white",l),b.appendChild(K),b}},c(yt,"FONT_SIZE_NORMAL","16px"),c(yt,"FONT_SIZE_SMALL","12px"),c(yt,"COLOR_BASE","black"),c(yt,"COLOR_GRAY","gray"),c(yt,"COLOR_LIGHT","lightgray"),c(yt,"WIDTH","1600px"),c(yt,"FONT_FAMILY","sans-serif"),c(yt,"GAP_BASE","10px"),c(yt,"GAP_SMALL","5px"),c(yt,"DEBUG",!1),yt),Tt,Hg=(Tt=class extends Gc{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...Tt.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof mi){this.localInstance=await o.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,d=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",d)),this.localInstance.mountToDom(this.container);const p=this.localInstance;if(p.dom&&p.dom.visibleLayer&&(p.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const w=document.createElement("table");w.style.width="100%",w.style.borderCollapse="collapse";const b=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(x=>{const _=this.createElementWithText("th",x,Tt.FONT_SIZE_SMALL,void 0,Tt.COLOR_GRAY);_.style.padding=Tt.GAP_SMALL+"px",_.style.textAlign="left",b.appendChild(_)}),w.appendChild(b),this.container.appendChild(w),this.file.slots.forEveryExistingSlot((x,_)=>{var R;const W=(R=this.localInstance)==null?void 0:R.slots.createFromSerialized(x.serialized,_);if(W){const U=document.createElement("tr"),H=this.createElementWithText("td",x.analysis.name,Tt.FONT_SIZE_SMALL,void 0,x.analysis.initialColor);H.style.borderTop=`1px solid ${Tt.COLOR_LIGHT}`,H.style.padding=`${Tt.GAP_SMALL}px 0px ${Tt.GAP_SMALL} 0px`,U.appendChild(H);const I=(K,S)=>{const A=this.createElementWithText("td",S?S.toFixed(3)+" °C":"",Tt.FONT_SIZE_SMALL,void 0);A.style.borderTop=`1px solid ${Tt.COLOR_LIGHT}`,A.style.paddingTop=`${Tt.GAP_SMALL}px`,A.style.paddingBottom=`${Tt.GAP_SMALL}px`,U.appendChild(A)};x.analysis instanceof Or?(I(x.analysis.initialColor,W.avg),I(x.analysis.initialColor,W.min),I(x.analysis.initialColor,W.max)):x.analysis instanceof vr&&(I(x.analysis.initialColor,W.avg),I(x.analysis.initialColor),I(x.analysis.initialColor)),w.appendChild(U)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}}})}},c(Tt,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),Tt),nn=class Vc extends Fg{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new ya(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Hg(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Ng(this),visibleLayer:new zg(this,this.visibleUrl),cursorLayer:new jg(this),listenerLayer:new Bg(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Rg(this,void 0),this.timeline=new Tg(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Ig(this,!1),this.analysis=new Ag(this,[]),this.analysisData=new Eg(this),this.slots=new Bc(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Vc(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){this.getAllApplicableFilters();const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Wg=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof Or&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof Or&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof Or&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Or?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:st.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof Or){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=sn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=Tc(s)(i);Ic(s)(n)}},Ke,Gg=(Ke=class extends Gc{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=Ke.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,Ke.FONT_SIZE_SMALL,"normal",Ke.COLOR_BASE);l.style.paddingTop=Ke.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,Ke.FONT_SIZE_SMALL,void 0,Ke.COLOR_GRAY);s.style.paddingTop=Ke.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${st.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,Ke.FONT_SIZE_SMALL,void 0,Ke.COLOR_GRAY);return n.style.paddingTop=Ke.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=Ke.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${st.human(t.timeline.currentStep.absolute)}`,Ke.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(d=>{const p=this.createElementWithText("th",d,Ke.FONT_SIZE_SMALL,void 0,Ke.COLOR_GRAY);p.style.padding=Ke.GAP_SMALL+"px",p.style.textAlign="left",u.appendChild(p)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((d,p)=>{const w=t.slots.createFromSerialized(d.serialized,p);if(w){const b=document.createElement("tr"),x=this.createElementWithText("td",d.analysis.name,Ke.FONT_SIZE_SMALL,void 0,d.analysis.initialColor);x.style.borderTop=`1px solid ${Ke.COLOR_LIGHT}`,x.style.padding=`${Ke.GAP_SMALL}px 0px ${Ke.GAP_SMALL} 0px`,b.appendChild(x);const _=(W,R)=>{const U=this.createElementWithText("td",R?R.toFixed(3)+" °C":"",Ke.FONT_SIZE_SMALL,void 0);U.style.borderTop=`1px solid ${Ke.COLOR_LIGHT}`,U.style.paddingTop=`${Ke.GAP_SMALL}px`,U.style.paddingBottom=`${Ke.GAP_SMALL}px`,b.appendChild(U)};d.analysis instanceof Or?(_(d.analysis.initialColor,w.avg),_(d.analysis.initialColor,w.min),_(d.analysis.initialColor,w.max)):d.analysis instanceof vr&&(_(d.analysis.initialColor,w.avg),_(d.analysis.initialColor),_(d.analysis.initialColor)),h.appendChild(b)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const d=100/t.columns;u.forEach(p=>{p instanceof nn&&this.buildInstance(p,d,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Ke.DEFAULT_PROPS,fileName:i}:{...Ke.DEFAULT_PROPS,...t,fileName:i}}},c(Ke,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),Ke),fi,Vg=(fi=class extends xt{constructor(){super(...arguments);c(this,"onSlotSync",new ee);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(fi.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(fi.LISTENER_KEY),n.delete(fi.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,d=h.serialized;if(u!==d)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(d);else{const p=n.slots.createFromSerialized(d,l);p==null||p.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Wg(this)),this._csv}get png(){return this._png||(this._png=new Gg(this)),this._png}},c(fi,"LISTENER_KEY","__analysis__sync"),fi),Yg=class extends xt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof nn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},qg=class extends Uc{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},Xg=class extends xt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new ee);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new ee);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new ee);c(this,"_duration",0);c(this,"onDurationChanged",new ee);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof nn);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},xa=class{constructor(r){c(this,"active",!1);this.group=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Yc=class extends xa{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Zo=class extends xa{},Kg=class extends Zo{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Bc.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Zg=class extends Zo{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},Qg=class extends Zo{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.group.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Jg=class extends xa{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},em=[Yc,Zg,Qg,Kg,Jg],tm=r=>{const e=em.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},rm=class extends xt{constructor(e,t){super(e,t);c(this,"_tools",tm(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof xa?this.value=e:this.value=this.tools[e]}},im=class extends ba{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new qg(this,void 0));c(this,"tool",new rm(this,new Yc(this)));c(this,"files",new Yg(this,[]));c(this,"cursorPosition",new gg(this,void 0));c(this,"analysisSync",new Vg(this,!1));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new ya(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get playback(){return this._playback||(this._playback=new Xg(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},Jr=class qc extends Wc{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new qc(e.url,e.code,e.message)}},Xc=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},sm=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(T,D)=>{const G=T.getBigInt64(D,!0),F=62135596800000n,N=10000n,L=24n*60n*60n*1000n*N,q=0x4000000000000000n,le=0x8000000000000000n;let z=G&0x3fffffffffffffffn;G&le&&(z>q-L&&(z-=q),z<0&&(z+=L));const ie=z/N-F;return Number(ie)};n(e,5);const a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,d=r.slice(25),p=d.byteLength/u,w=T=>{const D=T*u,G=D+u,F=d.slice(D,G),N=new DataView(F),L=N.getFloat32(8,!0),q=N.getFloat32(12,!0),le=n(N,0),$=N.getFloat32(24,!0),z=N.getFloat32(28,!0);return{timestamp:le,min:L,max:q,emissivity:$,reflectedKelvins:z}},b=[];for(let T=0;T<p;T++){const D=w(T);b.push(D)}const x={emissivity:0,reflectedKelvins:0};let _=1/0,W=-1/0;const R=[];b.forEach(T=>{x.emissivity=x.emissivity+T.emissivity,x.reflectedKelvins=x.reflectedKelvins+T.reflectedKelvins,T.min<_&&(_=T.min),T.max>W&&(W=T.max),R.push(T.timestamp)});const U=R[0],H=[];R.forEach((T,D)=>{const G=R[D+1];let F=0;G===void 0&&(F=0),F=G-T;const N=T-U;H.push({absolute:T,relative:N,offset:isNaN(F)?0:F,index:D})});const I=b[b.length-1].timestamp-b[0].timestamp,K=I/p,S=1e3/K,A=b[0].timestamp;return{width:t,height:i,timestamp:A,bytesize:s,frameCount:p,duration:I,frameInterval:K,fps:S,timeline:H,min:_,max:W,averageEmissivity:x.emissivity/b.length,averageReflectedKelvins:x.reflectedKelvins/b.length}},nm=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),d=e*h,p=d+h;return{array:u.slice(d,p),dataType:i}},am=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const p=u/n-s,w=Number(p),b=t.getFloat32(8,!0),x=t.getFloat32(12,!0),_=t.getFloat32(24,!0),W=t.getFloat32(28,!0),R=r.slice(57);let U=[];if(e===0){const H=new Uint16Array(R),I=Math.abs(b-x),K=65535;H.forEach(S=>{const A=S/K;U.push(b+I*A)})}else e===1&&(U=Array.from(new Float32Array(R)));return{timestamp:w,min:b,max:x,emissivity:_,reflectedKelvins:W,pixels:U}},om=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(W,R)=>{const U=W.getBigInt64(R,!0),H=62135596800000n,I=10000n,K=24n*60n*60n*1000n*I,S=0x4000000000000000n,A=0x8000000000000000n;let D=U&0x3fffffffffffffffn;U&A&&(D>S-K&&(D-=S),D<0&&(D+=K));const F=D/I-H;return Number(F)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,d=h+u,p=r.slice(25),w=p.byteLength/d,b={},x=W=>{const R=W*d,U=R+d,H=p.slice(R,U),I=new DataView(H),K=a(I,0),S=I.getFloat32(8,!0),T=I.getFloat32(12,!0)-S,G=57+t*l*s+e*l;let F=0;if(o===1)F=I.getFloat32(G,!0);else if(o===0){const q=I.getInt16(G,!0)/65535;F=S+T*q}return{timestamp:K,temperature:F}};let _=0;for(let W=0;W<w;W++){const R=x(W);_===0&&(_=R.timestamp),b[R.timestamp-_]=R.temperature}return b},lm=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(U,H)=>{const I=U.getBigInt64(H,!0),K=62135596800000n,S=10000n,A=24n*60n*60n*1000n*S,T=0x4000000000000000n,D=0x8000000000000000n;let F=I&0x3fffffffffffffffn;I&D&&(F>T-A&&(F-=T),F<0&&(F+=A));const L=F/S-K;return Number(L)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,w=d+p,b=r.slice(25),x=b.byteLength/w,_={},W=U=>{const H=U*w,I=H+w,K=b.slice(H,I),S=new DataView(K),A=l(S,0),T=S.getFloat32(8,!0),G=S.getFloat32(12,!0)-T,F=57,N=e,L=e+i,q=t,le=t+s;let $=1/0,z=-1/0,pe=0,ie=0;for(let We=q;We<=le;We++){const at=We*a;for(let tt=N;tt<=L;tt++){const ne=F+(at+tt)*u;let ce=NaN;if(h===1)ce=S.getFloat32(ne,!0);else{const Ze=S.getInt16(ne,!0)/65535;ce=T+G*Ze}ce<$&&($=ce),ce>z&&(z=ce),ie+=ce,pe++}}const Re={min:$,max:z,avg:ie/pe,count:pe};return{timestamp:A,result:Re}};let R=0;for(let U=0;U<x;U++){const H=W(U);R===0&&(R=H.timestamp),_[H.timestamp-R]=H.result}return _},hm=async r=>{let e=[];const t=async _=>{const W=new DataView(_.slice(0,25)),R=W.getUint8(15),U=W.getUint16(17,!0),H=W.getUint16(19,!0),I=R===1?4:2,K=57,S=U*H*I,A=K+S,T=_.slice(25),D=T.byteLength/A;let G=[];for(let F=0;F<D;F++){const L=F*A+57,q=L+S,le=T.slice(L,q);R===0||R===1&&(G=G.concat(Array.from(new Float32Array(le))))}return G};(await Promise.all(r.map(_=>t(_)))).forEach(_=>{e=e.concat(_)}),e.sort((_,W)=>_-W);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,l=a/o,h=[];let u=[...e];for(let _=0;_<o;_++){const W=s+l*_,R=W+l,U=u.findIndex(A=>A>R),I=u.slice(0,U-1).length,K=I/e.length*100,S={from:W,to:R,count:I,percentage:K};h.push(S),u=u.slice(U)}const d=[...h].sort((_,W)=>_.percentage-W.percentage),p=d[0].percentage,w=d[d.length-1].percentage,b=Math.abs(p-w);return h.map(_=>({..._,height:_.percentage/b*100}))},cm=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},um=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(H,I)=>{const K=H.getBigInt64(I,!0),S=62135596800000n,A=10000n,T=24n*60n*60n*1000n*A,D=0x4000000000000000n,G=0x8000000000000000n;let N=K&0x3fffffffffffffffn;K&G&&(N>D-T&&(N-=D),N<0&&(N+=T));const q=N/A-S;return Number(q)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,w=d+p,b=r.slice(25),x=b.byteLength/w,_={},W=(H,I)=>{const K=e+i/2,S=t+s/2,A=(H-K)/(i/2),T=(I-S)/(s/2);return A*A+T*T<=1},R=H=>{const I=H*w,K=I+w,S=b.slice(I,K),A=new DataView(S),T=l(A,0),D=A.getFloat32(8,!0),F=A.getFloat32(12,!0)-D,N=57,L=e,q=e+i,le=t,$=t+s;let z=1/0,pe=-1/0,ie=0,Re=0;for(let at=le;at<=$;at++){const tt=at*a;for(let ne=L;ne<=q;ne++)if(W(ne,at)){const ce=N+(tt+ne)*u;let ke=NaN;if(h===1)ke=A.getFloat32(ce,!0);else{const Me=A.getInt16(ce,!0)/65535;ke=D+F*Me}ke<z&&(z=ke),ke>pe&&(pe=ke),Re+=ke,ie++}}const We={min:z,max:pe,avg:Re/ie,count:ie};return{timestamp:T,result:We}};let U=0;for(let H=0;H<x;H++){const I=R(H);U===0&&(U=I.timestamp),_[I.timestamp-U]=I.result}return _},dm=[{extension:"lrc",minme:"application/octet-stream"}],pm={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:dm,is:cm,baseInfo:sm,getFrameSubset:nm,frameData:am,registryHistogram:hm,pointAnalysisData:om,rectAnalysisData:lm,ellipsisAnalysisData:um},Kc=Object.freeze(pm),fm={LrcParser:Kc},Zc=Object.values(fm),Qc=(r,e)=>{const t=Zc.find(i=>i.is(r,e));if(t===void 0)throw new Xc(2,e,`No parser found for '${e}'.`);return t},Jc=Zc.map(r=>r.extensions),gm=Jc.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),mm=class eu{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new eu(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new Jr(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Qc(i,this.thermalUrl);return this.pocessTheService(new mi(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Xc)return this.pocessTheService(Jr.fromError(s));throw s}}pocessTheService(e){return e}},vm=class tu{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onDrop",new ee);c(this,"onProcessingEnd",new ee);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new tu(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=gm,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},ym=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new Qo(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Qc(e,r.name);return new mi(this,e,t,r.name)}catch(e){return new Jr(r.name,3,e.message)}}handleDropzone(r){return vm.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=mm.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},bm=class extends xt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},wm=class extends xt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},zh=class Lo{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new ee);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Lo(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Lo(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof mi?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},xm=class{constructor(r){c(this,"onBatchComplete",new ee);c(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=zh.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=zh.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},Sm=class extends xt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},$m=class extends xt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new im(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},_m=class extends xt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((w,b)=>{const x=b.reduce((_,W)=>[..._,...W],[]);return[...w,...x]},[]).sort((w,b)=>w-b);const h=n/a;let u=i+h;const d=new Map;let p=0;for(;u!==!1;){const w=l.findIndex(_=>_>u),b=l.slice(0,w).length;d.set(u-h/2,b),p+=b,l=l.slice(w);const x=u+h;u=x<s?x:!1}return{result:d,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(Kc.registryHistogram,[t]);this.value=i}},Cm=class extends xt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},km=class extends Uc{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Pm=class extends ba{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new $m(this,[]));c(this,"_batch");c(this,"onProcessingStart",new ee);c(this,"onProcessingEnd",new ee);c(this,"opacity",new Sm(this,1));c(this,"minmax",new km(this,void 0));c(this,"loading",new Cm(this,!1));c(this,"range",new mg(this,void 0));c(this,"histogram",new _m(this,[]));c(this,"palette");c(this,"filters",new ya(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof mi?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof mi&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new xm(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},Qo=class extends ba{constructor(e,t){super();c(this,"id");c(this,"service",new ym(this));c(this,"registries",{});c(this,"palette",new xg(this,"jet"));c(this,"smooth",new wm(this,!1));c(this,"graphSmooth",new bm(this,!1));c(this,"pool");c(this,"filters",new ya(this));this.pool=e||fg.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Pm(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}},Am=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Om(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Am(e,t,s),s};const Nh=["ready","select"],Em={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Nt=class extends or{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new ee,this.left=0,this.top=0,this.w=0,this.h=0}render(){return m`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Ip(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(Nh,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Em[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!Nh.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Ph({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Ph).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Nt.styles=ge`
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
  `;rr([g({type:String,reflect:!0})],Nt.prototype,"type",2);rr([g({type:Array})],Nt.prototype,"events",2);rr([g({type:Object,hasChanged:()=>!0})],Nt.prototype,"options",2);rr([g({type:Array})],Nt.prototype,"cols",2);rr([g({type:Array})],Nt.prototype,"rows",2);rr([g({type:String})],Nt.prototype,"data",2);rr([g({type:Object})],Nt.prototype,"view",2);rr([g({type:Array})],Nt.prototype,"selection",2);rr([g({type:Object})],Nt.prototype,"_data",2);rr([g({type:Number,reflect:!0})],Nt.prototype,"left",2);rr([g({type:Number,reflect:!0})],Nt.prototype,"top",2);rr([g({type:Number,reflect:!0})],Nt.prototype,"w",2);rr([g({type:Number,reflect:!0})],Nt.prototype,"h",2);Nt=rr([te("thermal-chart")],Nt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=()=>new Lm;class Lm{}const xo=new WeakMap,be=ma(class extends Wd{render(r){return E}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),E}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=xo.get(e);t===void 0&&(t=new WeakMap,xo.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=xo.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var P=(r=>(r.loading="loading",r.next="next",r.prev="prev",r.back="back",r.close="close",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.byday="by day",r.byhour="by hour",r.byweek="by week",r.bymonth="by month",r.byyear="by year",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r))(P||{});const Rm=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],jh=Object.fromEntries(Rm.map(r=>[r.code,r]));var Dm=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,ru=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dm(e,t,s),s};let Hs=class extends or{constructor(){super(),this.dialogRef=de(),this.closeButtonRef=de(),this.invokerRef=de()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return m`
            <slot name="invoker" ${be(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${be(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${be(this.closeButtonRef)} @click=${this.setClose}>

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
                        ${O(P.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};Hs.shadowRootOptions={...or.shadowRootOptions,mode:"open"};Hs.styles=ge`

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

        
    
    `;ru([g({type:String,reflect:!0})],Hs.prototype,"label",2);Hs=ru([te("thermal-dialog")],Hs);let Mn;const Im=new Uint8Array(16);function Mm(){if(!Mn&&(Mn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Mn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Mn(Im)}const Dt=[];for(let r=0;r<256;++r)Dt.push((r+256).toString(16).slice(1));function Um(r,e=0){return Dt[r[e+0]]+Dt[r[e+1]]+Dt[r[e+2]]+Dt[r[e+3]]+"-"+Dt[r[e+4]]+Dt[r[e+5]]+"-"+Dt[r[e+6]]+Dt[r[e+7]]+"-"+Dt[r[e+8]]+Dt[r[e+9]]+"-"+Dt[r[e+10]]+Dt[r[e+11]]+Dt[r[e+12]]+Dt[r[e+13]]+Dt[r[e+14]]+Dt[r[e+15]]}const Fm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Bh={randomUUID:Fm};function zm(r,e,t){if(Bh.randomUUID&&!e&&!r)return Bh.randomUUID();r=r||{};const i=r.random||(r.rng||Mm)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Um(i)}const Al=class Al extends or{get UUID(){return this._UUID===void 0&&(this._UUID=zm()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),gt.on("languageChanged",()=>{this.requestUpdate()})}};Al.shadowRootOptions={...or.shadowRootOptions,mode:"open"};let bt=Al;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let iu=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hh=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new iu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Nm{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jm=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Wh extends Nm{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new iu(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new jm(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Wh(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Wh(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Hh(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Hh(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const su="tour-context",nu="tour-step",au="tourable-element";var Bm=Object.defineProperty,ou=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Bm(e,t,s),s};class Bi extends bt{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}ou([g({type:String})],Bi.prototype,"tour");ou([se({context:au})],Bi.prototype,"tourableElement");var Hm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,Sa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hm(e,t,s),s};let ei=class extends Bi{constructor(){super(...arguments),this.tourableElementRef=de(),this.variant="slate",this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <button class="${this.variant}" ${be(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};ei.VARIANTS=["slate","primary","foreground","background"];ei.shadowRootOptions={...or.shadowRootOptions,mode:"open"};ei.styles=ge`

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
    
    `;Sa([g({type:String,converter:{fromAttribute:r=>ei.VARIANTS.includes(r)?r:"slate",toAttribute:r=>r}})],ei.prototype,"variant",2);Sa([g({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],ei.prototype,"interactive",2);Sa([g({type:String})],ei.prototype,"size",2);ei=Sa([te("thermal-button")],ei);const vi=Math.min,Zr=Math.max,ia=Math.round,yi=r=>({x:r,y:r}),Gm={left:"right",right:"left",bottom:"top",top:"bottom"},Vm={start:"end",end:"start"};function Ro(r,e,t){return Zr(r,vi(e,t))}function gs(r,e){return typeof r=="function"?r(e):r}function ti(r){return r.split("-")[0]}function an(r){return r.split("-")[1]}function lu(r){return r==="x"?"y":"x"}function Jo(r){return r==="y"?"height":"width"}function on(r){return["top","bottom"].includes(ti(r))?"y":"x"}function el(r){return lu(on(r))}function Ym(r,e,t){t===void 0&&(t=!1);const i=an(r),s=el(r),n=Jo(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=sa(a)),[a,sa(a)]}function qm(r){const e=sa(r);return[Do(r),e,Do(e)]}function Do(r){return r.replace(/start|end/g,e=>Vm[e])}function Xm(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Km(r,e,t,i){const s=an(r);let n=Xm(ti(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Do)))),n}function sa(r){return r.replace(/left|right|bottom|top/g,e=>Gm[e])}function Zm(r){return{top:0,right:0,bottom:0,left:0,...r}}function tl(r){return typeof r!="number"?Zm(r):{top:r,right:r,bottom:r,left:r}}function ns(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Gh(r,e,t){let{reference:i,floating:s}=r;const n=on(e),a=el(e),o=Jo(a),l=ti(e),h=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,p=i[o]/2-s[o]/2;let w;switch(l){case"top":w={x:u,y:i.y-s.height};break;case"bottom":w={x:u,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:d};break;case"left":w={x:i.x-s.width,y:d};break;default:w={x:i.x,y:i.y}}switch(an(e)){case"start":w[a]-=p*(t&&h?-1:1);break;case"end":w[a]+=p*(t&&h?-1:1);break}return w}const Qm=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:d}=Gh(h,i,l),p=i,w={},b=0;for(let x=0;x<o.length;x++){const{name:_,fn:W}=o[x],{x:R,y:U,data:H,reset:I}=await W({x:u,y:d,initialPlacement:i,placement:p,strategy:s,middlewareData:w,rects:h,platform:a,elements:{reference:r,floating:e}});u=R??u,d=U??d,w={...w,[_]:{...w[_],...H}},I&&b<=50&&(b++,typeof I=="object"&&(I.placement&&(p=I.placement),I.rects&&(h=I.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):I.rects),{x:u,y:d}=Gh(h,p,l)),x=-1)}return{x:u,y:d,placement:p,strategy:s,middlewareData:w}};async function hu(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:w=0}=gs(e,r),b=tl(w),_=o[p?d==="floating"?"reference":"floating":d],W=ns(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(_)))==null||t?_:_.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),R=d==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,U=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),H=await(n.isElement==null?void 0:n.isElement(U))?await(n.getScale==null?void 0:n.getScale(U))||{x:1,y:1}:{x:1,y:1},I=ns(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:R,offsetParent:U,strategy:l}):R);return{top:(W.top-I.top+b.top)/H.y,bottom:(I.bottom-W.bottom+b.bottom)/H.y,left:(W.left-I.left+b.left)/H.x,right:(I.right-W.right+b.right)/H.x}}const Jm=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:u=0}=gs(r,e)||{};if(h==null)return{};const d=tl(u),p={x:t,y:i},w=el(s),b=Jo(w),x=await a.getDimensions(h),_=w==="y",W=_?"top":"left",R=_?"bottom":"right",U=_?"clientHeight":"clientWidth",H=n.reference[b]+n.reference[w]-p[w]-n.floating[b],I=p[w]-n.reference[w],K=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let S=K?K[U]:0;(!S||!await(a.isElement==null?void 0:a.isElement(K)))&&(S=o.floating[U]||n.floating[b]);const A=H/2-I/2,T=S/2-x[b]/2-1,D=vi(d[W],T),G=vi(d[R],T),F=D,N=S-x[b]-G,L=S/2-x[b]/2+A,q=Ro(F,L,N),le=!l.arrow&&an(s)!=null&&L!==q&&n.reference[b]/2-(L<F?D:G)-x[b]/2<0,$=le?L<F?L-F:L-N:0;return{[w]:p[w]+$,data:{[w]:q,centerOffset:L-q-$,...le&&{alignmentOffset:$}},reset:le}}}),ev=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:x=!0,..._}=gs(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const W=ti(s),R=ti(o)===o,U=await(l.isRTL==null?void 0:l.isRTL(h.floating)),H=p||(R||!x?[sa(o)]:qm(o));!p&&b!=="none"&&H.push(...Km(o,x,b,U));const I=[o,...H],K=await hu(e,_),S=[];let A=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&S.push(K[W]),d){const F=Ym(s,a,U);S.push(K[F[0]],K[F[1]])}if(A=[...A,{placement:s,overflows:S}],!S.every(F=>F<=0)){var T,D;const F=(((T=n.flip)==null?void 0:T.index)||0)+1,N=I[F];if(N)return{data:{index:F,overflows:A},reset:{placement:N}};let L=(D=A.filter(q=>q.overflows[0]<=0).sort((q,le)=>q.overflows[1]-le.overflows[1])[0])==null?void 0:D.placement;if(!L)switch(w){case"bestFit":{var G;const q=(G=A.map(le=>[le.placement,le.overflows.filter($=>$>0).reduce(($,z)=>$+z,0)]).sort((le,$)=>le[1]-$[1])[0])==null?void 0:G[0];q&&(L=q);break}case"initialPlacement":L=o;break}if(s!==L)return{reset:{placement:L}}}return{}}}};function cu(r){const e=vi(...r.map(n=>n.left)),t=vi(...r.map(n=>n.top)),i=Zr(...r.map(n=>n.right)),s=Zr(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function tv(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>ns(cu(s)))}const rv=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=gs(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),d=tv(u),p=ns(cu(u)),w=tl(o);function b(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&h!=null)return d.find(_=>l>_.left-w.left&&l<_.right+w.right&&h>_.top-w.top&&h<_.bottom+w.bottom)||p;if(d.length>=2){if(on(t)==="y"){const D=d[0],G=d[d.length-1],F=ti(t)==="top",N=D.top,L=G.bottom,q=F?D.left:G.left,le=F?D.right:G.right,$=le-q,z=L-N;return{top:N,bottom:L,left:q,right:le,width:$,height:z,x:q,y:N}}const _=ti(t)==="left",W=Zr(...d.map(D=>D.right)),R=vi(...d.map(D=>D.left)),U=d.filter(D=>_?D.left===R:D.right===W),H=U[0].top,I=U[U.length-1].bottom,K=R,S=W,A=S-K,T=I-H;return{top:H,bottom:I,left:K,right:S,width:A,height:T,x:K,y:H}}return p}const x=await n.getElementRects({reference:{getBoundingClientRect:b},floating:i.floating,strategy:a});return s.reference.x!==x.reference.x||s.reference.y!==x.reference.y||s.reference.width!==x.reference.width||s.reference.height!==x.reference.height?{reset:{rects:x}}:{}}}};async function iv(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=ti(t),o=an(t),l=on(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,d=gs(e,r);let{mainAxis:p,crossAxis:w,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof b=="number"&&(w=o==="end"?b*-1:b),l?{x:w*u,y:p*h}:{x:p*h,y:w*u}}const sv=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await iv(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},nv=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:_=>{let{x:W,y:R}=_;return{x:W,y:R}}},...l}=gs(r,e),h={x:t,y:i},u=await hu(e,l),d=on(ti(s)),p=lu(d);let w=h[p],b=h[d];if(n){const _=p==="y"?"top":"left",W=p==="y"?"bottom":"right",R=w+u[_],U=w-u[W];w=Ro(R,w,U)}if(a){const _=d==="y"?"top":"left",W=d==="y"?"bottom":"right",R=b+u[_],U=b-u[W];b=Ro(R,b,U)}const x=o.fn({...e,[p]:w,[d]:b});return{...x,data:{x:x.x-t,y:x.y-i}}}}};function ms(r){return uu(r)?(r.nodeName||"").toLowerCase():"#document"}function lr(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function ki(r){var e;return(e=(uu(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function uu(r){return r instanceof Node||r instanceof lr(r).Node}function Nr(r){return r instanceof Element||r instanceof lr(r).Element}function jr(r){return r instanceof HTMLElement||r instanceof lr(r).HTMLElement}function Vh(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof lr(r).ShadowRoot}function ln(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Er(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function av(r){return["table","td","th"].includes(ms(r))}function $a(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function rl(r){const e=il(),t=Er(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function ov(r){let e=bi(r);for(;jr(e)&&!as(e);){if($a(e))return null;if(rl(e))return e;e=bi(e)}return null}function il(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function as(r){return["html","body","#document"].includes(ms(r))}function Er(r){return lr(r).getComputedStyle(r)}function _a(r){return Nr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function bi(r){if(ms(r)==="html")return r;const e=r.assignedSlot||r.parentNode||Vh(r)&&r.host||ki(r);return Vh(e)?e.host:e}function du(r){const e=bi(r);return as(e)?r.ownerDocument?r.ownerDocument.body:r.body:jr(e)&&ln(e)?e:du(e)}function To(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=du(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=lr(s);return n?e.concat(a,a.visualViewport||[],ln(s)?s:[],a.frameElement&&t?To(a.frameElement):[]):e.concat(s,To(s,[],t))}function pu(r){const e=Er(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=jr(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=ia(t)!==n||ia(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function fu(r){return Nr(r)?r:r.contextElement}function ts(r){const e=fu(r);if(!jr(e))return yi(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=pu(e);let a=(n?ia(t.width):t.width)/i,o=(n?ia(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const lv=yi(0);function gu(r){const e=lr(r);return!il()||!e.visualViewport?lv:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function hv(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==lr(r)?!1:e}function Ws(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=fu(r);let a=yi(1);e&&(i?Nr(i)&&(a=ts(i)):a=ts(r));const o=hv(n,t,i)?gu(n):yi(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(n){const p=lr(n),w=i&&Nr(i)?lr(i):i;let b=p,x=b.frameElement;for(;x&&i&&w!==b;){const _=ts(x),W=x.getBoundingClientRect(),R=Er(x),U=W.left+(x.clientLeft+parseFloat(R.paddingLeft))*_.x,H=W.top+(x.clientTop+parseFloat(R.paddingTop))*_.y;l*=_.x,h*=_.y,u*=_.x,d*=_.y,l+=U,h+=H,b=lr(x),x=b.frameElement}}return ns({width:u,height:d,x:l,y:h})}function cv(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=ki(i),o=e?$a(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=yi(1);const u=yi(0),d=jr(i);if((d||!d&&!n)&&((ms(i)!=="body"||ln(a))&&(l=_a(i)),jr(i))){const p=Ws(i);h=ts(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x,y:t.y*h.y-l.scrollTop*h.y+u.y}}function uv(r){return Array.from(r.getClientRects())}function mu(r){return Ws(ki(r)).left+_a(r).scrollLeft}function dv(r){const e=ki(r),t=_a(r),i=r.ownerDocument.body,s=Zr(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Zr(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+mu(r);const o=-t.scrollTop;return Er(i).direction==="rtl"&&(a+=Zr(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function pv(r,e){const t=lr(r),i=ki(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=il();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function fv(r,e){const t=Ws(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=jr(r)?ts(r):yi(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function Yh(r,e,t){let i;if(e==="viewport")i=pv(r,t);else if(e==="document")i=dv(ki(r));else if(Nr(e))i=fv(e,t);else{const s=gu(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return ns(i)}function vu(r,e){const t=bi(r);return t===e||!Nr(t)||as(t)?!1:Er(t).position==="fixed"||vu(t,e)}function gv(r,e){const t=e.get(r);if(t)return t;let i=To(r,[],!1).filter(o=>Nr(o)&&ms(o)!=="body"),s=null;const n=Er(r).position==="fixed";let a=n?bi(r):r;for(;Nr(a)&&!as(a);){const o=Er(a),l=rl(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ln(a)&&!l&&vu(r,a))?i=i.filter(u=>u!==a):s=o,a=bi(a)}return e.set(r,i),i}function mv(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?$a(e)?[]:gv(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const d=Yh(e,u,s);return h.top=Zr(d.top,h.top),h.right=vi(d.right,h.right),h.bottom=vi(d.bottom,h.bottom),h.left=Zr(d.left,h.left),h},Yh(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function vv(r){const{width:e,height:t}=pu(r);return{width:e,height:t}}function yv(r,e,t){const i=jr(e),s=ki(e),n=t==="fixed",a=Ws(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=yi(0);if(i||!i&&!n)if((ms(e)!=="body"||ln(s))&&(o=_a(e)),i){const d=Ws(e,!0,n,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=mu(s));const h=a.left+o.scrollLeft-l.x,u=a.top+o.scrollTop-l.y;return{x:h,y:u,width:a.width,height:a.height}}function So(r){return Er(r).position==="static"}function qh(r,e){return!jr(r)||Er(r).position==="fixed"?null:e?e(r):r.offsetParent}function yu(r,e){const t=lr(r);if($a(r))return t;if(!jr(r)){let s=bi(r);for(;s&&!as(s);){if(Nr(s)&&!So(s))return s;s=bi(s)}return t}let i=qh(r,e);for(;i&&av(i)&&So(i);)i=qh(i,e);return i&&as(i)&&So(i)&&!rl(i)?t:i||ov(r)||t}const bv=async function(r){const e=this.getOffsetParent||yu,t=this.getDimensions,i=await t(r.floating);return{reference:yv(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function wv(r){return Er(r).direction==="rtl"}const xv={convertOffsetParentRelativeRectToViewportRelativeRect:cv,getDocumentElement:ki,getClippingRect:mv,getOffsetParent:yu,getElementRects:bv,getClientRects:uv,getDimensions:vv,getScale:ts,isElement:Nr,isRTL:wv},bu=sv,Sv=nv,$v=ev,_v=Jm,Cv=rv,wu=(r,e,t)=>{const i=new Map,s={platform:xv,...t},n={...s.platform,_c:i};return Qm(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=ma(class extends Go{constructor(r){var e;if(super(r),r.type!==Kr.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return gi}});var kv=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,hn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kv(e,t,s),s};let ri=class extends Bi{constructor(){super(...arguments),this.dropdownRef=de(),this.invokerRef=de(),this.optionsRef=de(),this.open="close",this.interactive="on",this.variant="slate"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){wu(this.invokerRef.value,this.optionsRef.value,{middleware:[bu(2),$v(),Cv(),Sv()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return m`

            <div class="dropdown" ${be(this.dropdownRef)}>

                <thermal-button class="${Kt(r)}" ${be(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}" interactive="${this.interactive==="on"?"true":"false"}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?m`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:m`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${be(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};ri.shadowRootOptions={...or.shadowRootOptions,mode:"open"};ri.styles=ge`

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
    
    `;hn([Ci({slot:"option"})],ri.prototype,"_options",2);hn([g({type:String,reflect:!0})],ri.prototype,"open",2);hn([g({type:String,reflect:!0,attribute:!0}),C()],ri.prototype,"interactive",2);hn([g({type:String,reflect:!0})],ri.prototype,"variant",2);ri=hn([te("thermal-dropdown")],ri);var Av=Object.defineProperty,Ov=Object.getOwnPropertyDescriptor,Ca=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Av(e,t,s),s};let os=class extends or{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=de(),this.contentRef=de(),this.rulerContentRef=de()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return m`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${be(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${be(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${be(this.contentRef)}>

                    ${this.collapsed===!1?m`
                        <slot></slot>    
                    `:E}
                
                </div>

            </div>

            ${this.collapsed?m`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:E}
        
        `}};os.styles=ge`

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

    `;Ca([C()],os.prototype,"collapsed",2);Ca([C()],os.prototype,"lastContentWidth",2);Ca([C()],os.prototype,"drawerRef",2);os=Ca([te("thermal-bar")],os);var Ev=Object.defineProperty,Lv=Object.getOwnPropertyDescriptor,_r=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ev(e,t,s),s};let Zt=class extends bt{constructor(){super(...arguments),this.language=gt.language,this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=de(),this.contentRef=de()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),gt.on("languageChanged",()=>{this.language=gt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,l=a-0,h=this.contentRef.value.offsetHeight,u=4/3;let d=0,p=0;h<o?(console.log("priorita šířky"),d=l,p=d/u):(console.log("priorita výšky"),p=o,d=p*u),this.contentRef.value.setAttribute("style",`width: ${d}px !important; height: ${p}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return m`

        <div class="container ${this.dark?"dark":"normal"}" ${be(this.appRef)}>

        <header>
            
        ${this.barElements.length>=0?m`
            <div class="bar">

                <slot name="label">
                    ${this.label?m`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:E}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                <thermal-dropdown >

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(r=>m`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{gt.changeLanguage(r),this.language=r}}
                            >${jh[r].flag} ${jh[r].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>

                <!--
                ${this.showfullscreen===!0?m`
                    <thermal-button @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?m`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                        </svg>`:m`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>`}
                        </div>
                    </thermal-button>
                `:E}

                -->
                
            </div> 
        `:""}

        ${this.preElements.length>=0?m`
            <div class="pre" class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}

        </header>


            <div class="content" part="app-content" ${be(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?m`<div class="credits">

                    ${this.recorded?m`<div>
                            <div class="credits-field">${O(P.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:E}

                    ${this.author?m`<div>
                            <div class="credits-field">${O(P.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:E}

                    ${this.license?m`<div>
                            <div class="credits-field">${O(P.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:E}

                </div>`:E}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};Zt.styles=ge`

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
    
    `;_r([C()],Zt.prototype,"language",2);_r([Ci({slot:"bar",flatten:!0})],Zt.prototype,"barElements",2);_r([Ci({slot:"pre",flatten:!0})],Zt.prototype,"preElements",2);_r([Ci({slot:"content",flatten:!0})],Zt.prototype,"contentElements",2);_r([g({type:String,reflect:!0})],Zt.prototype,"fullscreen",2);_r([g({type:String,reflect:!0,attribute:!0})],Zt.prototype,"showfullscreen",2);_r([g({type:String,reflect:!0,attribute:!0})],Zt.prototype,"dark",2);_r([g()],Zt.prototype,"author",2);_r([g()],Zt.prototype,"recorded",2);_r([g()],Zt.prototype,"license",2);_r([g()],Zt.prototype,"label",2);Zt=_r([te("thermal-app")],Zt);var Rv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,sl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rv(e,t,s),s};let Gs=class extends or{render(){return m`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&m`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Gs.styles=ge`
    
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

    `;sl([g({type:String})],Gs.prototype,"label",2);sl([g({type:String})],Gs.prototype,"hint",2);Gs=sl([te("thermal-field")],Gs);var Tv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,vs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tv(e,t,s),s};let ii=class extends bt{render(){return E}};vs([g({type:String,reflect:!0,attribute:!0})],ii.prototype,"thermal",2);vs([g({type:String,reflect:!0,attribute:!0})],ii.prototype,"visible",2);vs([g({type:String,reflect:!0,attribute:!0})],ii.prototype,"author",2);vs([g({type:String,reflect:!0,attribute:!0})],ii.prototype,"note",2);vs([g({type:String,reflect:!0,attribute:!0})],ii.prototype,"label",2);ii=vs([te("time-entry")],ii);const Mv=new Qo;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Mv);const cn=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new Qo(void 0,e);return window.Thermal.managers.set(r,t),t}},Uv=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class na extends Go{constructor(e){if(super(e),this.it=E,e.type!==Kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this._t=void 0,this.it=e;if(e===gi)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}na.directiveName="unsafeHTML",na.resultType=1;const It=ma(na),Ol=class Ol{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?E:m`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${O(P.note).toLocaleLowerCase()}</button>
            <div slot="content">${It(t)}</div>
        </thermal-dialog>`}renderHeaderContent(e,t,i){return i===void 0||i.trim().length===0?m`<strong>${t}</strong>`:e===!0?m`<strong>${i}</strong><span>${t}</span>`:m`<strong>${i}</strong>`}renderInstance(e,t,i,s,n){return m`<div class="file">

            <article>

                <file-mirror  .file=${e}>
                
                    <div class="file-title">
                    
                        <h3>
                            ${this.renderHeaderContent(i,t,s)}
                        </h3>

                        <div>

                            ${this.renderInfo(s,n)}

                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${O(P.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>
                        
                        </div>

                    </div>

                    <file-canvas></file-canvas>
                    ${e.timeline.isSequence?m`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:E}
                    
                    <file-analysis-table></file-analysis-table>

                </file-mirror>

            </article>
        
        </div>`}};Ol.styles=ge`


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

            strong {
                font-weight: bold;
            }
            span {
                opacity: .5;
                padding-left: 10px;
            }
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

    `;let ls=Ol;const El=class El{constructor(e){this.element=e,this.instanceRenderer=new ls(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?m`
                <div class="group-header">
                
                    ${e?m`<h2 class="group-title">${e}</h2>`:E}

                    ${t?m`<p class="group-info">${t}</p>`:E}

                </div>
            `:E}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return m`

            <section class="${Kt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Kt(o)}>

                    ${e.files.map(({instance:h,innerHtml:u,label:d,time:p})=>this.instanceRenderer.renderInstance(h,p,s,d,u))}

                </div>

            </section>

        `}};El.styles=ge`


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

    `;let Vs=El,Fv=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Jr)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Lc(e).getTime():this.grouping==="day"?Jn(e).getTime():this.grouping==="week"?Qr(e).getTime():this.grouping==="month"?ta(e).getTime():this.grouping==="year"?Xo(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Ac(e).getTime():this.grouping==="day"?kc(e).getTime():this.grouping==="week"?ra(e).getTime():this.grouping==="month"?ea(e).getTime():this.grouping==="year"?Pc(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Le(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Le(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Le(e,"w")+" of "+Le(e,"yyyy"),info:[st.humanDate(Qr(e).getTime()),st.humanDate(ra(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Le(e,"MMMM yyyy"),info:[st.humanDate(ta(e).getTime()),st.humanDate(ea(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Le(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?st.human(e):this.grouping==="hour"||this.grouping==="day"?Le(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",st.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var zv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zv(e,t,s),s};let Mt=class extends bt{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=cn(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Fv(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof ii))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return m`
            <slot name="entry"></slot>

            ${this.scopeSlug?m`<manager-mirror slug=${this.scopeSlug}>

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

                `:E}

        `}};Mt.styles=[ls.styles,Vs.styles,ge`

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
    
    `];ir([C(),Ci({slot:"entry",flatten:!0})],Mt.prototype,"entries",2);ir([C()],Mt.prototype,"groups",2);ir([C()],Mt.prototype,"instances",2);ir([g()],Mt.prototype,"columns",2);ir([g()],Mt.prototype,"breakpoint",2);ir([g({type:Number,reflect:!0})],Mt.prototype,"width",2);ir([g({type:String,reflect:!0})],Mt.prototype,"grouping",2);ir([g()],Mt.prototype,"name",2);ir([g()],Mt.prototype,"slug",2);ir([C()],Mt.prototype,"scopeSlug",2);ir([g({type:Object})],Mt.prototype,"onInstanceEnter",2);ir([g({type:Object})],Mt.prototype,"onInstanceLeave",2);ir([g({type:Object})],Mt.prototype,"groupRenderer",2);Mt=ir([te("time-group")],Mt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=r=>r??E;var jv=Object.defineProperty,Bv=Object.getOwnPropertyDescriptor,ys=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jv(e,t,s),s};const nl={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let wi=class extends bt{constructor(){super(...arguments),this.tRef=de(),this.vRef=de(),this.vunitsRef=de(),this.haRef=de(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){let t=this[e];const i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?It(i):i;return m`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${be(r)} 
                            id=${e}
                            name=${e}
                            value=${fe(s)}
                            min=${fe(n)}
                            max=${fe(a)}
                            step=${fe(o)}
                            type="number"
                            @blur=${u=>{const d=u.target,p=d.value.trim();p===""||p===void 0||p===null?this[e]=void 0:this[e]=parseFloat(d.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?m`<label for=${e}>${l}</label>`:E}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=O(P.apparenttemperatureverbose,i),n=t<0?O(P.youfeelcolder,i):O(P.youfeelwarmer,i),a=r.toFixed(2);return m`<div class="result">

            <p class="result_label">${O(P.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return m`
            <thermal-app label=${O(P.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${O(P.info)}>
                    <thermal-button slot="invoker">${O(P.info)}</thermal-button>
                    <div slot="content">
                        ${It(O(P.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?m`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:E}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",O(P.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",O(P.windspeed),m`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${be(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",O(P.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):E}
                </div>
                

            </thermal-app>
        `}};wi.styles=ge`

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


    `;ys([g({type:String,reflect:!0,attribute:!0,converter:nl})],wi.prototype,"t",2);ys([g({type:String,reflect:!0,attribute:!0,converter:nl})],wi.prototype,"v",2);ys([g({type:String,reflect:!0,attribute:!0,converter:nl})],wi.prototype,"ha",2);ys([C()],wi.prototype,"ta",2);ys([g({type:String,reflect:!0,attribute:!0})],wi.prototype,"vunits",2);wi=ys([te("apparent-temperature-aat")],wi);var Hv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,Gv=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hv(e,t,s),s};let Io=class extends Bi{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker" ${be(this.tourableElementRef)}>About</thermal-button>
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
                        <p>version ${Wo}</p>
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
        `}};Io.styles=ge`

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
    
    `;Io=Gv([te("app-info-button")],Io);class xu extends Bi{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:yr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=cn(this.slug,e);this.manager=i}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&Uv(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(yr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:yr[e]}}render(){return m`<slot></slot>`}}const ka="manager-instance",bs="manager-palette-context",Pa="manager-smooth-context",un="manager-graph-function-context";var Vv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,Hi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vv(e,t,s),s};let xi=class extends xu{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:yr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Hi([se({context:ka})],xi.prototype,"manager",2);Hi([g({type:String,reflect:!0,attribute:!0})],xi.prototype,"slug",2);Hi([se({context:bs}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:yr[r]}),toAttribute:r=>r.key.toString()}})],xi.prototype,"palette",2);Hi([se({context:Pa}),g({type:String,reflect:!0,attribute:!0})],xi.prototype,"smooth",2);Hi([se({context:un}),g({type:String,reflect:!0,attribute:!0})],xi.prototype,"graphSmooth",2);Hi([g({type:Boolean,reflect:!0})],xi.prototype,"autoclear",2);xi=Hi([te("manager-provider")],xi);var qv=Object.defineProperty,Xv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&qv(e,t,s),s};class dn extends Bi{connectedCallback(){super.connectedCallback(),this.manager}}Xv([me({context:ka,subscribe:!0}),C()],dn.prototype,"manager");const al="registry-instance",ol="registry-opacity",Aa="registry-range-from",Oa="registry-range-to",Su="registry-loading",ll="registry-min",hl="registry-max",$u="registry-highlight",Ea="registry-highlight-setter";var Kv=Object.defineProperty,_u=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Kv(e,t,s),s};class La extends dn{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return m`<slot></slot>`}}_u([se({context:$u})],La.prototype,"highlight");_u([se({context:Ea})],La.prototype,"setHighlight");var Zv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,Br=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zv(e,t,s),s};let br=class extends La{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Br([g({type:String,reflect:!0,attribute:!0})],br.prototype,"slug",2);Br([se({context:al})],br.prototype,"registry",2);Br([se({context:ol}),g({type:Number,reflect:!0,attribute:!0})],br.prototype,"opacity",2);Br([se({context:ll}),C()],br.prototype,"min",2);Br([se({context:hl}),C()],br.prototype,"max",2);Br([se({context:Aa}),g({type:Number,reflect:!0,attribute:!0})],br.prototype,"from",2);Br([se({context:Oa}),g({type:Number,reflect:!0,attribute:!0})],br.prototype,"to",2);Br([se({context:Su}),g({type:String,reflect:!0,attribute:!0})],br.prototype,"loading",2);Br([g({type:Boolean,reflect:!0})],br.prototype,"autoclear",2);br=Br([te("registry-provider")],br);var Jv=Object.defineProperty,ey=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Jv(e,t,s),s};class ur extends dn{connectedCallback(){super.connectedCallback(),this.registry}}ey([me({context:al,subscribe:!0})],ur.prototype,"registry");class Cu extends ur{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug),this.slug,this.tool=this.group.tool.value,this.tools=this.group.tool.tools,this.group.tool.addListener(this.UUIDGroupListeners,e=>{this.tool=e})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return m`<slot></slot>`}}const cl="group-instance",Ra="tool-context",Da="tools-context";var ty=Object.defineProperty,ry=Object.getOwnPropertyDescriptor,ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?ry(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ty(e,t,s),s};let Fi=class extends Cu{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};ws([g({type:String,attribute:!0,reflect:!0})],Fi.prototype,"slug",2);ws([se({context:cl})],Fi.prototype,"group",2);ws([se({context:Ra})],Fi.prototype,"tool",2);ws([se({context:Da})],Fi.prototype,"tools",2);ws([g({type:Boolean,reflect:!0})],Fi.prototype,"autoclear",2);Fi=ws([te("group-provider")],Fi);var iy=Object.defineProperty,sy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&iy(e,t,s),s};class ni extends ur{constructor(){super()}connectedCallback(){super.connectedCallback()}}sy([me({context:cl,subscribe:!0})],ni.prototype,"group");const ul="file",ku="failure",Pu="file-loading",ny="file-loaded",Ta="file-provider-element",Ia="file-ms-context",dl="file-cursor",Au="file-cursor-setter",pn="playback",pl="duration",Ma="playing",fl="playbackSpeed",gl="recording",Ou="mayStop",ay="analysislist",ml="file-markers-context";var oy=Object.defineProperty,Wt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&oy(e,t,s),s};class Et extends ni{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new ee,this.onSuccess=new ee,this.onFailure=new ee,this.onInstanceCreated=new ee}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return m`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}Wt([se({context:ul}),C()],Et.prototype,"file");Wt([se({context:ku}),C()],Et.prototype,"failure");Wt([se({context:Pu}),C()],Et.prototype,"loading");Wt([se({context:ny})],Et.prototype,"ready");Wt([se({context:pl}),C()],Et.prototype,"duration");Wt([se({context:pn})],Et.prototype,"currentFrame");Wt([se({context:dl})],Et.prototype,"cursor");Wt([se({context:Ia})],Et.prototype,"ms");Wt([se({context:fl})],Et.prototype,"speed");Wt([se({context:gl})],Et.prototype,"recording");Wt([se({context:Ma})],Et.prototype,"playing");Wt([se({context:Ou}),C()],Et.prototype,"mayStop");Wt([Ci({slot:"mark",flatten:!0})],Et.prototype,"marksQueriedInternally");Wt([se({context:ml})],Et.prototype,"marksProvidedBelow");Wt([se({context:ay})],Et.prototype,"analysis");var ly=Object.defineProperty,hy=Object.getOwnPropertyDescriptor,jt=(r,e,t,i)=>{for(var s=i>1?void 0:i?hy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ly(e,t,s),s};let Ut=class extends Et{constructor(){super(...arguments),this.ms=0,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof mi?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof nn?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof Jr&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};jt([g({type:Number,reflect:!0,attribute:!0}),se({context:Ia})],Ut.prototype,"ms",2);jt([g({type:Number,reflect:!0,attribute:!0}),se({context:fl})],Ut.prototype,"speed",2);jt([se({context:Ta})],Ut.prototype,"providedSelf",2);jt([g({type:String,reflect:!0,attribute:!0}),se({context:gl})],Ut.prototype,"recording",2);jt([g({type:String,reflect:!0,attribute:!0}),se({context:Ma})],Ut.prototype,"playing",2);jt([g({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Ut.prototype,"batch",2);jt([g({type:String,attribute:!0,reflect:!0})],Ut.prototype,"thermal",2);jt([g({type:String,attribute:!0,reflect:!0})],Ut.prototype,"visible",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis1",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis2",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis3",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis4",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis5",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis6",2);jt([g({type:String,reflect:!0,attribute:!0})],Ut.prototype,"analysis7",2);Ut=jt([te("file-provider")],Ut);var cy=Object.defineProperty,uy=Object.getOwnPropertyDescriptor,xs=(r,e,t,i)=>{for(var s=i>1?void 0:i?uy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cy(e,t,s),s};let Si=class extends Et{constructor(){super(...arguments),this.providedSelf=this,this.container=de(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof mi){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Jr&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return m`

                    <div class="container">
                        <div ${be(this.container)} class="${Kt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${Jc.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return m`
            ${this.ready?m`<slot></slot>`:E}
            <slot name="mark"></slot>
        `}};Si.styles=ge`

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
    
    `;xs([se({context:Ta})],Si.prototype,"providedSelf",2);xs([C()],Si.prototype,"container",2);xs([C()],Si.prototype,"ready",2);xs([C()],Si.prototype,"hover",2);xs([C()],Si.prototype,"listener",2);Si=xs([te("file-dropin")],Si);var dy=Object.defineProperty,py=Object.getOwnPropertyDescriptor,vl=(r,e,t,i)=>{for(var s=i>1?void 0:i?py(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&dy(e,t,s),s};let Ys=class extends ni{constructor(){super(...arguments),this.container=de(),this.hover=!1,this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1})}}render(){const r={dropin:!0,hover:this.hover};return m`

            <div class="container" ${be(this.tourableElementRef)}>
            
                <div ${be(this.container)} class="${Kt(r)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Ys.styles=ge`

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
    
    `;vl([C()],Ys.prototype,"container",2);vl([C()],Ys.prototype,"hover",2);Ys=vl([te("group-dropin")],Ys);var fy=Object.defineProperty,gy=Object.getOwnPropertyDescriptor,Wi=(r,e,t,i)=>{for(var s=i>1?void 0:i?gy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fy(e,t,s),s};let $i=class extends xu{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:yr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Wi([se({context:ka})],$i.prototype,"manager",2);Wi([g({type:String})],$i.prototype,"slug",2);Wi([se({context:bs}),g({type:String,converter:{fromAttribute:r=>({key:r,data:yr[r]}),toAttribute:r=>r.key.toString()}})],$i.prototype,"palette",2);Wi([se({context:Pa}),g({type:String})],$i.prototype,"smooth",2);Wi([se({context:un}),g({type:String})],$i.prototype,"graphSmooth",2);Wi([g({type:Boolean})],$i.prototype,"autoclear",2);$i=Wi([te("manager-mirror")],$i);var my=Object.defineProperty,vy=Object.getOwnPropertyDescriptor,Hr=(r,e,t,i)=>{for(var s=i>1?void 0:i?vy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&my(e,t,s),s};let Lr=class extends La{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Hr([g({type:String,reflect:!0,attribute:!0})],Lr.prototype,"slug",2);Hr([se({context:al})],Lr.prototype,"registry",2);Hr([se({context:ol}),g({type:Number,reflect:!0,attribute:!0})],Lr.prototype,"opacity",2);Hr([se({context:ll}),C()],Lr.prototype,"min",2);Hr([se({context:hl}),C()],Lr.prototype,"max",2);Hr([se({context:Aa}),g({type:Number})],Lr.prototype,"from",2);Hr([se({context:Oa}),g({type:Number})],Lr.prototype,"to",2);Hr([se({context:Su}),g({type:String})],Lr.prototype,"loading",2);Hr([g({type:Boolean})],Lr.prototype,"autoclear",2);Lr=Hr([te("registry-mirror")],Lr);var yy=Object.defineProperty,by=Object.getOwnPropertyDescriptor,Ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?by(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yy(e,t,s),s};let zi=class extends Cu{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Ss([g({type:String})],zi.prototype,"slug",2);Ss([se({context:cl})],zi.prototype,"group",2);Ss([se({context:Ra})],zi.prototype,"tool",2);Ss([se({context:Da})],zi.prototype,"tools",2);Ss([g({type:Boolean})],zi.prototype,"autoclear",2);zi=Ss([te("group-mirror")],zi);var wy=Object.defineProperty,xy=Object.getOwnPropertyDescriptor,dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?xy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wy(e,t,s),s};let Qt=class extends Et{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};dr([se({context:Ta})],Qt.prototype,"providedSelf",2);dr([se({context:ul}),g()],Qt.prototype,"file",2);dr([g({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Qt.prototype,"batch",2);dr([g({type:String})],Qt.prototype,"thermal",2);dr([g({type:String})],Qt.prototype,"visible",2);dr([g({type:String})],Qt.prototype,"analysis1",2);dr([g({type:String})],Qt.prototype,"analysis2",2);dr([g({type:String})],Qt.prototype,"analysis3",2);dr([g({type:String})],Qt.prototype,"analysis4",2);dr([g({type:String})],Qt.prototype,"analysis5",2);dr([g({type:String})],Qt.prototype,"analysis6",2);dr([g({type:String})],Qt.prototype,"analysis7",2);Qt=dr([te("file-mirror")],Qt);var Sy=Object.defineProperty,$y=Object.getOwnPropertyDescriptor,Eu=(r,e,t,i)=>{for(var s=i>1?void 0:i?$y(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sy(e,t,s),s};let aa=class extends ur{constructor(){super(...arguments),this.tourableElemtnRef=de()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return m`

            <thermal-dropdown variant="foreground" ${be(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(yr).map(([r,e])=>m`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};aa.styles=ge`

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

    `;Eu([me({context:bs,subscribe:!0})],aa.prototype,"value",2);aa=Eu([te("registry-palette-dropdown")],aa);var _y=Object.defineProperty,Cy=Object.getOwnPropertyDescriptor,Lu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_y(e,t,s),s};let oa=class extends ur{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${O(P.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return m`
            <div class="container" ${be(this.tourableElementRef)}>
                ${Object.entries(yr).map(([r,e])=>m`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};oa.styles=ge`

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

    `;Lu([me({context:bs,subscribe:!0}),C()],oa.prototype,"value",2);oa=Lu([te("registry-palette-buttons")],oa);var ky=Object.defineProperty,Py=Object.getOwnPropertyDescriptor,Ru=(r,e,t,i)=>{for(var s=i>1?void 0:i?Py(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ky(e,t,s),s};let la=class extends dn{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${be(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${O(P.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${O(P.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};la.styles=ge`
    
        :host {}

    `;Ru([me({context:Pa,subscribe:!0})],la.prototype,"smooth",2);la=Ru([te("manager-smooth-switch")],la);var Ay=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,Du=(r,e,t,i)=>{for(var s=i>1?void 0:i?Oy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ay(e,t,s),s};let ha=class extends dn{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${be(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${O(P.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${O(P.smoothlines)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};ha.styles=ge`
    
        :host {}

    `;Du([me({context:un,subscribe:!0})],ha.prototype,"smooth",2);ha=Du([te("manager-graph-smooth-switch")],ha);var Ey=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,Tu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ly(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ey(e,t,s),s};let ca=class extends ur{constructor(){super(...arguments),this.containerRef=de()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return m`
            <div ${be(this.containerRef)}>
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
        `}};ca.styles=ge`

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
    
    `;Tu([me({context:ol,subscribe:!0})],ca.prototype,"value",2);ca=Tu([te("registry-opacity-slider")],ca);var Ry=Object.defineProperty,Dy=Object.getOwnPropertyDescriptor,Ty=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ry(e,t,s),s};let Xh=class extends ur{constructor(){super(...arguments),this.buttonRef=de()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return m`
            <thermal-button ${be(this.buttonRef)} @click=${this.doAction}>${O(P.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Xh=Ty([te("registry-range-auto-button")],Xh);var Iy=Object.defineProperty,My=Object.getOwnPropertyDescriptor,Iu=(r,e,t,i)=>{for(var s=i>1?void 0:i?My(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iy(e,t,s),s};let Mo=class extends ur{constructor(){super(...arguments),this.buttonRef=de()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return m`
            <thermal-button 
                ${be(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${O(P.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Iu([me({context:Ea,subscribe:!0})],Mo.prototype,"setter",2);Mo=Iu([te("registry-range-full-button")],Mo);var Uy=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,fn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uy(e,t,s),s};let Rr=class extends ur{constructor(){super(...arguments),this.ticksRef=de(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=de()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Rr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return m`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${be(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${be(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?m`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:E}

                    ${this.ticks.map(t=>m`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Rr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};Rr.TICK_WIDTH=40;Rr.TICK_FIXED=2;Rr.styles=ge`

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
                height: 10px;
                background: var(--thermal-slate);
            }
        
        }

        .placement-top {
            margin-top: 10x;
            margin-bottom: calc( var( --thermal-gap ) * .5 );
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


    `;fn([me({context:$u,subscribe:!0})],Rr.prototype,"highlight",2);fn([g({type:String,reflect:!0})],Rr.prototype,"placement",2);fn([C()],Rr.prototype,"minmax",2);fn([C()],Rr.prototype,"ticks",2);Rr=fn([te("registry-ticks-bar")],Rr);var zy=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,gn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ny(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zy(e,t,s),s};let hs=class extends ur{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return m`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return m`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};gn([C()],hs.prototype,"minmax",2);gn([C()],hs.prototype,"range",2);gn([C()],hs.prototype,"opacity",2);gn([C()],hs.prototype,"palette",2);hs=gn([te("registry-log")],hs);(()=>{var r=Object.defineProperty,e=Math.pow,t=(f,y,M)=>y in f?r(f,y,{enumerable:!0,configurable:!0,writable:!0,value:M}):f[y]=M,i=(f,y,M)=>(t(f,typeof y!="symbol"?y+"":y,M),M),s=(f,y)=>` ${y&&y.length>0?y.map(M=>`<link rel="stylesheet" href="${M}" />`).join(""):""} <style> ${f} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",d="min",p="max",w="step",b="round",x="type",_="theme",W="rtl",R="btt",U="disabled",H="keyboard-disabled",I="mousewheel-disabled",K="slider-width",S="slider-height",A="slider-radius",T="slider-bg",D="slider-bg-hover",G="slider-bg-fill",F="pointer-width",N="pointer-height",L="pointer-radius",q="pointer-bg",le="pointer-bg-hover",$="pointer-bg-focus",z="pointer-shadow",pe="pointer-shadow-hover",ie="pointer-shadow-focus",Re="pointer-border",We="pointer-border-hover",at="pointer-border-focus",tt="animate-onclick",ne="css-links",ce="vertical",ke="horizontal",De=(f,y,M,k,re)=>{let xe=y-f;return xe===0?M:(k-M)*(re-f)/xe+M},Ze=f=>!isNaN(parseFloat(f))&&isFinite(f),Me=(f,y)=>Ze(f)?Number(f):y,oi=(f,y)=>y===0?0:Math.round(f/y)*y,Ai=(f,y=1/0)=>{if(y===1/0)return f;let M=e(10,y);return Math.round(f*M)/M},Qe=f=>f==null?!1:typeof f=="boolean"?f:f.trim().toLowerCase()==="true",nr=(f,y)=>{f.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:y}}))},qr=(f,y)=>{f.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:y}}))},Na=(f,y)=>{f.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:y}}))},ja=(f,y)=>{f.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:y}}))},Ba=(f,y)=>{if(!y||y.length<=0)return;let M=y.map(re=>Ze(re)?Me(re,re):re),k={values:M||[]};k.value=M[0],k.value0=M[0],k.value1=M[0];for(let re=1;re<M.length;re++)k[`value${re+1}`]=M[re];f.dispatchEvent(new CustomEvent("change",{detail:k}))},V=(f,y,M)=>{let k=0,re,xe,Ee,ae,oe=!1,Te=($e,it,At,$t,ut,dt)=>{let Vt=k;At!==void 0&&$e>At&&($e=At),it!==void 0&&$e<it&&($e=it),k=$e;let Yt=k;return($t===ce&&dt||$t===ke&&ut)&&(Yt=100-Yt),$t===ce?y.style.top=`${Yt}%`:y.style.left=`${Yt}%`,Vt!==k},ze=$e=>$e===y||y.contains($e),ve=($e,it,At,$t)=>{re=$e,xe=it,Ee=At,ae=$t},Xe=$e=>{oe=$e,y.classList.toggle("disabled",oe),oe?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},mr=($e,it)=>{it==null?y.removeAttribute($e):y.setAttribute($e,it)},zt=$e=>y.getAttribute($e),Se=$e=>{if(!oe){switch($e.key){case"ArrowLeft":{$e.preventDefault(),typeof re=="function"&&re(M);break}case"ArrowRight":{$e.preventDefault(),typeof xe=="function"&&xe(M);break}case"ArrowUp":{$e.preventDefault(),typeof Ee=="function"&&Ee(M);break}case"ArrowDown":{$e.preventDefault(),typeof ae=="function"&&ae(M);break}}ja(f,$e)}},Ie=()=>{oe||nr(f,y)};return y.className=`pointer pointer-${M}`,y.addEventListener("keydown",Se),y.addEventListener("click",Ie),{$pointer:y,get percent(){return k},get disabled(){return oe},set disabled($e){Xe($e)},updatePosition:Te,isClicked:ze,setCallbacks:ve,setAttr:mr,getAttr:zt,destroy:()=>{y.removeEventListener("keydown",Se),y.removeEventListener("click",Ie),y.remove()}}},Z=f=>{if(f==null)return;if(Array.isArray(f))return f;if(f.trim()==="")return;let y=f.split(","),M=[],k=!0;for(let re=0;re<y.length;re++){let xe=y[re].trim();xe!==""&&(M.push(xe),Ze(xe)||(k=!1))}return k?M.map(re=>Number(re)):M},Q=(f,y)=>y?y.findIndex(M=>M===f||M.toString().trim()===f.toString().trim()):-1,J=f=>({updatePosition:(y,M,k,re)=>{if(M.length<=0)return;let xe=M.length===1,Ee=M[0],ae=M[M.length-1];y===ce?(f.style.removeProperty("width"),f.style.removeProperty("right"),f.style.removeProperty("left"),xe?f.style.height=`${Ee}%`:f.style.height=`${Math.abs(Ee-ae)}%`,re?(f.style.bottom="0%",xe?f.style.top="auto":f.style.top=`${Math.min(100-ae,100-Ee)}%`):(f.style.bottom="auto",xe?f.style.top="0%":f.style.top=`${Math.min(Ee,ae)}%`)):(f.style.removeProperty("height"),f.style.removeProperty("top"),f.style.removeProperty("bottom"),xe?f.style.width=`${Ee}%`:f.style.width=`${Math.abs(Ee-ae)}%`,k?(f.style.right="0%",xe?f.style.left="auto":f.style.left=`${Math.min(100-ae,100-Ee)}%`):(f.style.right="auto",xe?f.style.left="0%":f.style.left=`${Math.min(Ee,ae)}%`))}}),we="--animate-onclick",Ge="--width",Pe="--height",rt="--panel-bg-border-radius",je="--panel-bg",he="--panel-bg-hover",Be="--panel-bg-fill",B="--pointer-width",Y="--pointer-height",Ae="--pointer-border-radius",Ue="--pointer-bg",mt="--pointer-bg-hover",Rt="--pointer-bg-focus",Mr="--pointer-shadow",ar="--pointer-shadow-hover",gr="--pointer-shadow-focus",li="--pointer-border",ye="--pointer-border-hover",Oe="--pointer-border-focus",X=(f,y,M)=>{let k=new Map;for(let re of f.attributes){let xe=re.nodeName.trim().toLowerCase();if(!y.test(xe))continue;let Ee=xe.replace(/\D/g,"").trim(),ae=Ee===""||Ee==="0"||Ee==="1"?0:Me(Ee,0)-1,oe=M&&typeof M=="function"?M(re.value):re.value;k.set(ae,oe)}return k},_e=f=>{if(!f)return null;let y=f.getAttribute(ne);if(!y)return null;let M=y.split(";"),k=[];for(let re of M)re.trim()!==""&&k.push(re.trim());return k},Ve=[[Ge,K,"sliderWidth",null],[Pe,S,"sliderHeight",null],[rt,A,"sliderRadius",null],[je,T,"sliderBg",null],[he,D,"sliderBgHover",null],[Be,G,"sliderBgFill",null],[B,F,"pointer#Width",/^pointer([0-9]*)-width$/],[Y,N,"pointer#Height",/^pointer([0-9]*)-height$/],[Ae,L,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Ue,q,"pointer#Bg",/^pointer([0-9]*)-bg$/],[mt,le,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Rt,$,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Mr,z,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[ar,pe,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[gr,ie,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[li,Re,"pointer#Border",/^pointer([0-9]*)-border$/],[ye,We,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Oe,at,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],He=(f,y,M)=>{let k=null,re=[],xe=new Map,Ee=(Se,Ie=y)=>{let $e=[...Ie.classList];for(let it of $e)it.startsWith(Se)&&y.classList.remove(it)},ae=()=>{Ee("shape");let Se=y.querySelectorAll(".pointer");for(let Ie of Se)Ee("shape",Ie)},oe=Se=>{k=Se,Ee("theme-"),typeof Se=="string"&&y.classList.add(`theme-${Se}`)},Te=()=>{if(ae(),!(re.length<=0)){y.classList.add("shape",`shape-${re[0]}`);for(let Se=1;Se<re.length;Se++){let Ie=re[Se];if(!Ie)continue;let $e=y.querySelector(`.pointer-${Se}`);!$e||$e.classList.add("shape",`shape-${Ie}`)}}},ze=(Se,Ie)=>{re[Se]=Ie,Te()},ve=()=>{ae();let Se=X(f,/^pointer([0-9]*)-shape$/);if(!(Se.size<=0)){for(let Ie of Se){let $e=Ie[0];re[$e]=Ie[1]}Te()}},Xe=(Se,Ie)=>`${Se}-${Ie}`,mr=(Se,Ie,$e)=>{let it=M[$e];if(!it)return;let At=$e===0?y:it.$pointer;if(Ie==null){xe.has(Xe(Se,$e))&&xe.delete(Xe(Se,$e)),At.style.removeProperty(Se);return}xe.set(Xe(Se,$e),Ie),At.style.setProperty(Se,Ie)},zt=(Se,Ie)=>xe.get(Xe(Se,Ie));return(()=>{for(let Se of Ve){let[Ie,$e,it,At]=Se;if(At){let ut=X(f,At);for(let dt of ut){let Vt=dt[0],Yt=dt[1];mr(Ie,Yt,Vt)}}else{let ut=f.getAttribute($e);mr(Ie,ut,0)}let $t=[];if(it.indexOf("#")===-1)$t.push([it,0]);else{$t.push([it.replace("#",""),0]),$t.push([it.replace("#","0"),0]),$t.push([it.replace("#","1"),0]);for(let ut=1;ut<M.length;ut++)$t.push([it.replace("#",(ut+1).toString()),ut])}for(let ut of $t)try{let dt=ut[0],Vt=ut[1];Object.prototype.hasOwnProperty.call(f,dt)||Object.defineProperty(f,dt,{get(){return zt(Ie,Vt)},set:Yt=>{mr(Ie,Yt,Vt)}})}catch(dt){console.error(dt)}}oe(f.getAttribute(_)),ve()})(),{setStyle:mr,getStyle:zt,get theme(){return k},set theme(Se){oe(Se)},get pointerShapes(){return re},setPointerShape:ze}},ot="animate-on-click",Fe="range-dragging",Gt=(f,y,M,k)=>{let re=[],xe=ze=>{for(let ve of re)ve.update&&typeof ve.update=="function"&&ve.update(ze)},Ee=()=>{for(let ze of re)ze.destroy&&typeof ze.destroy=="function"&&ze.destroy()},ae=(ze,ve)=>{for(let Xe of re)Xe.onAttrChange&&typeof Xe.onAttrChange=="function"&&Xe.onAttrChange(ze,ve)},oe=ze=>{if(ze.gettersAndSetters){for(let ve of ze.gettersAndSetters)if(!(!ve.name||!ve.attributes))try{Object.prototype.hasOwnProperty.call(f,ve.name)||Object.defineProperty(f,ve.name,ve.attributes)}catch(Xe){console.error("defineSettersGetters error:",Xe)}}},Te=ze=>{var ve;if(!ze.css)return;let Xe=(ve=f.shadowRoot)==null?void 0:ve.querySelector("style");!Xe||(Xe.innerHTML+=ze.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let ze of window.tcRangeSliderPlugins){let ve=ze();re.push(ve),ve.init&&typeof ve.init=="function"&&(ve.init(f,y,M,k),oe(ve),Te(ve))}},update:xe,onAttrChange:ae,destroy:Ee}},vt=10,wn=20,Bu=(f,y)=>{let M=new Map,k=/^value([0-9]*)$/;for(let ae of f.attributes){let oe=ae.nodeName.trim().toLowerCase();if(!k.test(oe))continue;let Te=oe.replace("value","").trim(),ze=Te===""||Te==="0"||Te==="1"?0:Me(Te,0)-1,ve=Ze(ae.value)?Me(ae.value,0):ae.value;M.set(ze,ve)}let re=Math.max(...Array.from(M.keys())),xe=[];xe.push([V(f,y,0),M.get(0)]);let Ee=y;for(let ae=1;ae<=re;ae++){let oe=y.cloneNode(!0);Ee.after(oe),Ee=oe,xe.push([V(f,oe,ae),M.get(ae)])}return xe},Rl=(f,y,M,k,re,xe,Ee)=>{try{Object.defineProperty(f,k,{configurable:!0,get(){if(!y)return;let ae=y.pointers[M];if(!ae)return;let oe=y.getTextValue(ae.percent);return Ze(oe)?Me(oe,oe):oe},set:ae=>{y.pointers[M]?y==null||y.setValue(ae,M):y==null||y.addPointer(ae)}}),Object.defineProperty(f,re,{configurable:!0,get(){var ae,oe;return(oe=(ae=y==null?void 0:y.pointers[M])==null?void 0:ae.getAttr("aria-label"))!=null?oe:void 0},set:ae=>{!y||y.setAriaLabel(M,ae)}}),Object.defineProperty(f,xe,{configurable:!0,get(){var ae,oe;return(oe=(ae=y==null?void 0:y.styles)==null?void 0:ae.pointerShapes[M])!=null?oe:null},set:ae=>{!y||!y.styles||y.styles.setPointerShape(M,ae)}}),Object.defineProperty(f,Ee,{configurable:!0,get(){var ae;return(ae=y==null?void 0:y.pointers[M].disabled)!=null?ae:!1},set:ae=>{if(!y)return;let oe=y==null?void 0:y.pointers[M];!oe||(oe.disabled=ae)}})}catch(ae){console.error(ae)}},Hu=(f,y)=>{let M=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let k=2;k<vt;k++)M.push([`value${k}`,`ariaLabel${k}`,`pointer${k}Shape`,`pointer${k}Disabled`,k-1]);for(let k of M)Rl(f,y,k[4],k[0],k[1],k[2],k[3])},Dl=(f,y,M)=>{var k;let re=(k=M.shadowRoot)==null?void 0:k.querySelector(".container");if(re)for(let xe of f)y?re.prepend(xe.$pointer):re.append(xe.$pointer)},Wu=(f,y)=>{if(!(!y||f.length<=1)){for(let M of f)M.$pointer.style.zIndex=wn.toString();y.$pointer.style.zIndex=(wn*2).toString()}},Ha=0,ks=100,Yi=2,Tl="0.3s",Gu=(f,y,M)=>{let k=M.map(v=>v[0]),re=null,xe=null,Ee=null,ae=null,oe=Ha,Te=ks,ze,ve,Xe=ke,mr=Yi,zt=!1,Se=!1,Ie=!1,$e=0,it=1/0,At=!1,$t,ut,dt=!1,Vt=!1,Yt=!1,hi=Tl,Il=[],Ml=v=>{dt||(v.preventDefault&&v.preventDefault(),Oi(v),window.addEventListener("mousemove",Oi),window.addEventListener("mouseup",xn),qr(f,v))},xn=v=>{dt||($t=void 0,ut=void 0,window.removeEventListener("mousemove",Oi),window.removeEventListener("mouseup",xn),hi&&y.classList.add(ot),Na(f,v))},qu=(v,j)=>{if(k.length<=0)return;if(k.length===1)return k[0].isClicked(v)&&hi&&y.classList.remove(ot),k[0];let ue=Ku(v);if(At){let Ye=j,Ar=$n(Ye);Ar!==void 0&&(Ye=oi(Ye,Ar)),ue?($t=Ye,ut=0,hi&&y.classList.remove(ot)):$t!==void 0&&(ut=Ye-$t,$t=Ye)}if(!Xu(v)&&!ue){for(let Ye of k)if(!(!Ye.isClicked(v)||Ye.disabled))return hi&&y.classList.remove(ot),Ye;for(let Ye of k)if(re===Ye)return Ye}let Je=1/0,pt=null;for(let Ye of k){if(Ye.disabled)continue;let Ar=Math.abs(j-Ye.percent);Ar<Je&&(Je=Ar,pt=Ye)}return pt},Ul=()=>k.findIndex(v=>re===v&&!v.disabled),Oi=v=>{let j;if(Xe===ce){let{height:Je,top:pt}=y.getBoundingClientRect(),Ye=v.type.indexOf("mouse")!==-1?v.clientY:v.touches[0].clientY;j=Math.min(Math.max(0,Ye-pt),Je)*100/Je}else{let{width:Je,left:pt}=y.getBoundingClientRect(),Ye=v.type.indexOf("mouse")!==-1?v.clientX:v.touches[0].clientX;j=Math.min(Math.max(0,Ye-pt),Je)*100/Je}if((zt||Se)&&(j=100-j),re=qu(v.target,j),re&&Wu(k,re),At&&k.length>1&&ut!==void 0){let Je=k[0],pt=k[k.length-1],Ye=Je.percent+ut<0,Ar=pt.percent+ut>100;if(Ye||Ar)return;for(let Ln=0;Ln<k.length;Ln++)qt(Ln,k[Ln].percent+ut);return}let ue=Ul();ue!==-1&&(qt(ue,j),re==null||re.$pointer.focus())},Sn=v=>{if(dt||document.activeElement!==f||re!=null&&re.disabled)return;v.stopPropagation(),v.preventDefault();let j=v.deltaY<0,ue=zt||Se,Je=j?!ue:ue,pt=Ul();pt!==-1&&(Je?Ps(pt,k[pt].percent):As(pt,k[pt].percent))},Fl=v=>{dt||Vt||(Xe===ce?Se?qt(v,100):qt(v,0):zt?As(v,k[v].percent):Ps(v,k[v].percent))},zl=v=>{dt||Vt||(Xe===ce?Se?qt(v,0):qt(v,100):zt?Ps(v,k[v].percent):As(v,k[v].percent))},Nl=v=>{dt||Vt||(Xe===ce?Se?As(v,k[v].percent):Ps(v,k[v].percent):zt?qt(v,100):qt(v,0))},jl=v=>{dt||Vt||(Xe===ce?Se?Ps(v,k[v].percent):As(v,k[v].percent):zt?qt(v,0):qt(v,100))},Xu=v=>v.classList.contains("panel"),Ku=v=>v.classList.contains("panel-fill"),Ps=(v,j)=>{if(j===void 0)return;let ue=$n(j);ue==null&&(ue=1),j-=ue,j<0&&(j=0),qt(v,j)},As=(v,j)=>{if(j===void 0)return;let ue=$n(j);ue==null&&(ue=1),j+=ue,j>100&&(j=100),qt(v,j)},Ei=()=>{!ae||ae.update({percents:Bl(),values:Hl(),$pointers:Wl(),min:Gl(),max:Vl(),data:Va(),step:Ga(),round:qa(),type:Ya(),textMin:_n(),textMax:Cn(),rightToLeft:Za(),bottomToTop:Qa(),pointersOverlap:ro(),pointersMinDistance:Xa(),pointersMaxDistance:Ka(),rangeDragging:io(),disabled:Ja(),keyboardDisabled:eo(),mousewheelDisabled:to()})},Zu=()=>{Ei()},Qu=v=>{if(!(Ie||k.length<=1||Te===oe))if(v===0){let j=it*100/(Te-oe);return Math.max(0,k[v+1].percent-j)}else{let j=$e*100/(Te-oe);return Math.min(k[v-1].percent+j,100)}},Ju=v=>{if(!(Ie||k.length<=1||Te===oe))if(v===k.length-1){let j=it*100/(Te-oe);return Math.min(k[v-1].percent+j,100)}else{let j=$e*100/(Te-oe);return Math.max(0,k[v+1].percent-j)}},$n=v=>{let j;if(typeof ze=="function"){let ue=De(0,100,oe,Te,v);j=ze(ue,v)}else j=ze;if(Ze(j)){let ue=Te-oe;return j=ue===0?0:j*100/ue,j}},qi=v=>{if(v===void 0)return;let j=De(0,100,oe,Te,v);return ve!==void 0?ve[Math.round(j)]:Ai(j,mr)},_n=()=>ve!==void 0?ve[oe]:oe,Cn=()=>ve!==void 0?ve[Te]:Te,Ga=()=>ze,ed=v=>{var j;return v<=0||Ie?_n():(j=qi(k[v-1].percent))!=null?j:""},td=v=>{var j;return k.length<=1||v>=k.length-1||Ie?Cn():(j=qi(k[v+1].percent))!=null?j:""},Bl=()=>k.map(v=>v.percent),Hl=()=>k.map(v=>qi(v.percent)),Wl=()=>k.map(v=>v.$pointer),Gl=()=>oe,Vl=()=>Te,Va=()=>ve,Ya=()=>Xe,qa=()=>mr,Xa=()=>$e,Ka=()=>it,rd=v=>Il[v],Za=()=>zt,Qa=()=>Se,Ja=()=>dt,eo=()=>Vt,to=()=>Yt,ro=()=>Ie,io=()=>At,qt=(v,j)=>{if(j===void 0)return;let ue=$n(j);ue!==void 0&&(j=oi(j,ue));let Je=k[v];if(!Je)return;let pt=Je.updatePosition(j,Qu(v),Ju(v),Xe,zt,Se);xe==null||xe.updatePosition(Xe,k.map(Ye=>Ye.percent),zt,Se),Ei();for(let Ye of k){let Ar=qi(Ye.percent);Ar!==void 0&&(Ye.setAttr("aria-valuenow",Ar.toString()),Ye.setAttr("aria-valuetext",Ar.toString()))}sd(),pt&&Ba(f,k.map(Ye=>qi(Ye.percent)))},Ur=()=>{for(let v=0;v<k.length;v++)qt(v,k[v].percent)},id=(v,j)=>{oe=ve!==void 0?0:Me(v,Ha),Te=ve!==void 0?ve.length-1:Me(j,ks),kn(oe),Pn(Te)},sd=()=>{var v,j;for(let ue=0;ue<k.length;ue++){let Je=k[ue];Je.setAttr("aria-valuemin",((v=ed(ue))!=null?v:"").toString()),Je.setAttr("aria-valuemax",((j=td(ue))!=null?j:"").toString())}},kn=v=>{oe=Me(v,Ha),oe>Te&&(Te=oe+ks),Ur()},Pn=v=>{Te=Me(v,ks),Te<oe&&(Te=oe+ks),Ur()},Yl=v=>{Ie=!0;for(let j=0;j<v.length;j++)An(v[j],j);Ie=!1;for(let j=0;j<v.length;j++)An(v[j],j)},An=(v,j)=>{let ue;ve!==void 0?(ue=v==null?0:Q(v,ve),ue===-1&&(ue=0)):(ue=Me(v,oe),ue<oe&&(ue=oe),ue>Te&&(ue=Te));let Je=De(oe,Te,0,100,ue);qt(j,Je)},On=v=>{if(v==null){ze=void 0;return}if(typeof v=="function"){ze=v,Ur();return}if(Ze(v)){ze=Me(v,1);let j=Math.abs(Te-oe);ze>j&&(ze=void 0),Ur();return}ze=void 0},so=v=>{Ie=v,Ur()},no=v=>{(!Ze(v)||v<0)&&(v=0),$e=v},ao=v=>{(!Ze(v)||v<0)&&(v=1/0),it=v},oo=v=>{dt=v,y.classList.toggle("disabled",dt),dt?y.setAttribute("aria-disabled","true"):y.hasAttribute("aria-disabled")&&y.removeAttribute("aria-disabled")},ql=v=>{Vt=v},Xl=v=>{Yt=v,Yt?document.removeEventListener("wheel",Sn):document.addEventListener("wheel",Sn,{passive:!1})},lo=v=>{if(v==null){ve=void 0;return}if(ve=Z(v),ve===void 0||ve.length<=0){ve=void 0;return}kn(0),Pn(ve.length-1),ze===void 0&&On(1)},ho=v=>{var j;typeof v=="string"?Xe=v.trim().toLowerCase()===ce?ce:ke:Xe=ke;let ue=(j=f.shadowRoot)==null?void 0:j.querySelector(".range-slider-box");if(!ue)return;ue.className=`range-slider-box type-${Xe}`,Ur();let Je=Xe===ce?"vertical":"horizontal";for(let pt of k)pt.setAttr("aria-orientation",Je)},co=v=>{zt=v,k.length>1&&Dl(k,zt,f),Ur(),Ei()},uo=v=>{Se=v,k.length>1&&Dl(k,Se,f),Ur(),Ei()},po=v=>{mr=Me(v,Yi),mr<0&&(mr=Yi),Ei()},Kl=v=>{v==null||v.toString().trim().toLowerCase()==="false"?(hi=void 0,y.style.removeProperty(we),y.classList.remove(ot)):(hi=v.toString(),y.style.setProperty(we,hi),y.classList.add(ot))},Zl=(v,j)=>{let ue=k[v];!ue||(ue.setAttr("aria-label",j),Il[v]=j)},En=v=>{if($t=void 0,k.length<=1){At=!1,y.classList.remove(Fe);return}At=v,y.classList.toggle(Fe,At)},nd=()=>{oo(Qe(f.getAttribute(U))),Vt=Qe(f.getAttribute(H)),Yt=Qe(f.getAttribute(I));let v=X(f,/^pointer([0-9]*)-disabled$/,j=>Qe(j));for(let j of v){let ue=j[0];!k[ue]||(k[ue].disabled=j[1])}},ad=()=>{let v=X(f,/^aria-label([0-9]*)$/);for(let j of v){let ue=j[0];Zl(ue,j[1])}},od=v=>{let j=k.length,ue=k[j-1].$pointer,Je=ue.cloneNode(!0);ue.after(Je);let pt=V(f,Je,j);return pt.setCallbacks(Fl,zl,Nl,jl),k.push(pt),An(v,j),Ur(),Ei(),j},ld=()=>{let v=k.length,j=k[v-1];return j?(j.destroy(),k.pop(),k.length<=1&&En(!1),Ur(),Ei(),v-1):-1};return(()=>{var v,j;for(let Je of k)Je.setCallbacks(Fl,zl,Nl,jl);let ue=(v=f.shadowRoot)==null?void 0:v.querySelector(".panel-fill");ue&&(xe=J(ue)),ho(f.getAttribute(x)),co(Qe(f.getAttribute(W))),uo(Qe(f.getAttribute(R))),id(f.getAttribute(d),f.getAttribute(p)),On(f.getAttribute(w)),lo(f.getAttribute(u)),Yl(M.map(Je=>Je[1])),so(Qe(f.getAttribute(a))),no(Me(f.getAttribute(o),0)),ao(Me(f.getAttribute(l),1/0)),En(Qe(f.getAttribute(h))),po(Me(f.getAttribute(b),Yi)),nd(),ad(),Ee=He(f,y,k),Kl((j=f.getAttribute(tt))!=null?j:Tl),y.addEventListener("mousedown",Ml),y.addEventListener("mouseup",xn),y.addEventListener("touchmove",Oi),y.addEventListener("touchstart",Oi),Yt||document.addEventListener("wheel",Sn,{passive:!1}),ae=Gt(f,Zu,{setValues:Yl,setMin:kn,setMax:Pn,setStep:On,setPointersOverlap:so,setPointersMinDistance:no,setPointersMaxDistance:ao,setDisabled:oo,setType:ho,setRightToLeft:co,setBottomToTop:uo,setRound:po,setKeyboardDisabled:ql,setMousewheelDisabled:Xl,setRangeDragging:En,setData:lo},{getPercents:Bl,getValues:Hl,getPointerElements:Wl,getMin:Gl,getMax:Vl,getStep:Ga,getData:Va,getType:Ya,getRound:qa,getTextMin:_n,getTextMax:Cn,isRightToLeft:Za,isBottomToTop:Qa,isDisabled:Ja,isKeyboardDisabled:eo,isMousewheelDisabled:to,isPointersOverlap:ro,isRangeDraggingEnabled:io,getPointersMinDistance:Xa,getPointersMaxDistance:Ka}),ae.init()})(),{get pointers(){return k},get styles(){return Ee},get pluginsManager(){return ae},get min(){return _n()},get max(){return Cn()},get step(){return Ga()},get pointersOverlap(){return ro()},set pointersOverlap(v){so(v)},get pointersMinDistance(){return Xa()},set pointersMinDistance(v){no(v)},get pointersMaxDistance(){return Ka()},set pointersMaxDistance(v){ao(v)},get disabled(){return Ja()},set disabled(v){oo(v)},get data(){return Va()},get type(){return Ya()},set type(v){ho(v)},get rightToLeft(){return Za()},set rightToLeft(v){co(v)},get bottomToTop(){return Qa()},set bottomToTop(v){uo(v)},get round(){return qa()},set round(v){po(v)},get animateOnClick(){return hi},set animateOnClick(v){Kl(v)},get keyboardDisabled(){return eo()},set keyboardDisabled(v){ql(v)},get mousewheelDisabled(){return to()},set mousewheelDisabled(v){Xl(v)},get rangeDragging(){return io()},set rangeDragging(v){En(v)},setMin:kn,setMax:Pn,setValue:An,setStep:On,setData:lo,getTextValue:qi,setAriaLabel:Zl,getAriaLabel:rd,addPointer:od,removePointer:ld,destroy:()=>{y.removeEventListener("mousedown",Ml),y.removeEventListener("mouseup",xn),y.removeEventListener("touchmove",Oi),y.removeEventListener("touchstart",Oi),document.removeEventListener("wheel",Sn);for(let v of k)v.destroy();ae==null||ae.destroy()}}},Vu=(f,y,M)=>{let k=Ve.find(([ae,oe,Te,ze])=>oe.replace("#","")===y.replace(/\d+/g,""));if(k&&f.styles){let[ae,oe,Te,ze]=k,ve=y.replace(/\D/g,"").trim(),Xe=ve===""||ve==="0"||ve==="1"?0:Me(ve,0)-1;f.styles.setStyle(ae,M,Xe);return}switch(f&&f.pluginsManager&&f.pluginsManager.onAttrChange(y,M),y){case d:{f.setMin(M);break}case p:{f.setMax(M);break}case w:{f.setStep(M);break}case a:{f.pointersOverlap=Qe(M);break}case o:{f.pointersMinDistance=Me(M,0);break}case h:{f.rangeDragging=Qe(M);break}case l:{f.pointersMaxDistance=Me(M,1/0);break}case U:{f.disabled=Qe(M);break}case H:{f.keyboardDisabled=Qe(M);break}case I:{f.mousewheelDisabled=Qe(M);break}case u:{f.setData(M);break}case x:{f.type=M;break}case W:{f.rightToLeft=Qe(M);break}case R:{f.bottomToTop=Qe(M);break}case b:{f.round=Me(M,Yi);break}case _:{f.styles&&(f.styles.theme=M);break}case tt:{f.animateOnClick=M;break}}let re=null;if(/^value([0-9]*)$/.test(y)&&(re="value"),/^pointer([0-9]*)-disabled$/.test(y)&&(re="pointer-disabled"),/^aria-label([0-9]*)$/.test(y)&&(re="aria-label"),/^pointer([0-9]*)-shape$/.test(y)&&(re="pointer-shape"),!re)return;let xe=y.replace(/\D/g,"").trim(),Ee=xe===""||xe==="0"||xe==="1"?0:Me(xe,0)-1;switch(re){case"value":{f.setValue(M,Ee);break}case"pointer-disabled":{let ae=f==null?void 0:f.pointers[Ee];if(!ae)return;ae.disabled=Qe(M);break}case"aria-label":{f.setAriaLabel(Ee,M);break}case"pointer-shape":{f.styles&&f.styles.setPointerShape(Ee,M);break}}},Yu=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(f){this.slider&&this.slider.setStep(f)}get step(){var f;return(f=this.slider)==null?void 0:f.step}set disabled(f){this.slider&&(this.slider.disabled=f)}get disabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.disabled)!=null?y:!1}set data(f){var y;(y=this.slider)==null||y.setData(f)}get data(){var f;return(f=this.slider)==null?void 0:f.data}set min(f){var y;(y=this.slider)==null||y.setMin(f)}get min(){var f;return(f=this.slider)==null?void 0:f.min}set max(f){var y;(y=this.slider)==null||y.setMax(f)}get max(){var f;return(f=this.slider)==null?void 0:f.max}set round(f){!this.slider||(this.slider.round=f)}get round(){var f,y;return(y=(f=this.slider)==null?void 0:f.round)!=null?y:Yi}set type(f){!this.slider||(this.slider.type=f??ke)}get type(){var f;return((f=this.slider)==null?void 0:f.type)||ke}set pointersOverlap(f){!this.slider||(this.slider.pointersOverlap=f)}get pointersOverlap(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersOverlap)!=null?y:!1}set pointersMinDistance(f){!this.slider||(this.slider.pointersMinDistance=f)}get pointersMinDistance(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersMinDistance)!=null?y:0}set pointersMaxDistance(f){!this.slider||(this.slider.pointersMaxDistance=f)}get pointersMaxDistance(){var f,y;return(y=(f=this.slider)==null?void 0:f.pointersMaxDistance)!=null?y:1/0}set theme(f){!this.slider||!this.slider.styles||(this.slider.styles.theme=f)}get theme(){var f,y,M;return(M=(y=(f=this.slider)==null?void 0:f.styles)==null?void 0:y.theme)!=null?M:null}set rtl(f){!this.slider||(this.slider.rightToLeft=f)}get rtl(){var f,y;return(y=(f=this.slider)==null?void 0:f.rightToLeft)!=null?y:!1}set btt(f){!this.slider||(this.slider.bottomToTop=f)}get btt(){var f,y;return(y=(f=this.slider)==null?void 0:f.bottomToTop)!=null?y:!1}set keyboardDisabled(f){!this.slider||(this.slider.keyboardDisabled=f)}get keyboardDisabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.keyboardDisabled)!=null?y:!1}set mousewheelDisabled(f){!this.slider||(this.slider.mousewheelDisabled=f)}get mousewheelDisabled(){var f,y;return(y=(f=this.slider)==null?void 0:f.mousewheelDisabled)!=null?y:!1}set animateOnClick(f){!this.slider||(this.slider.animateOnClick=f)}get animateOnClick(){var f;return(f=this.slider)==null?void 0:f.animateOnClick}get rangeDragging(){var f,y;return(y=(f=this.slider)==null?void 0:f.rangeDragging)!=null?y:!1}set rangeDragging(f){this.slider&&(this.slider.rangeDragging=Qe(f))}get externalCSSList(){return this._externalCSSList}addPointer(f){var y,M;if(!this.slider)return;let k=(M=(y=this.slider)==null?void 0:y.addPointer(f))!=null?M:0;Rl(this,this.slider,k,`value${k+1}`,`ariaLabel${k+1}`,`pointerShape${k+1}`,`pointer${k+1}Disabled`)}removePointer(){var f;!this.slider||(f=this.slider)==null||f.removePointer()}addCSS(f){if(!this.shadowRoot)return;let y=document.createElement("style");y.textContent=f,this.shadowRoot.appendChild(y)}connectedCallback(){var f,y;if(!this.shadowRoot)return;this._externalCSSList=_e(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let M=(f=this.shadowRoot)==null?void 0:f.querySelector(".pointer");if(!M)return;let k=(y=this.shadowRoot)==null?void 0:y.getElementById("range-slider");if(!k)return;let re=Bu(this,M);this.slider=Gu(this,k,re),Hu(this,this.slider),this._observer=new MutationObserver(xe=>{xe.forEach(Ee=>{var ae;if(!this.slider||Ee.type!=="attributes")return;let oe=Ee.attributeName;!oe||Vu(this.slider,oe,(ae=this.getAttribute(oe))!=null?ae:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Wa=Yu;window.tcRangeSlider=Wa,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Wa),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Wa{})})();const jy=r=>!isNaN(parseFloat(r))&&isFinite(r),Xr=(r,e)=>jy(r)?Number(r):e,$o=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const Un=40,Fn=35,zn=30,Kh="#475569",Zh="#fff",Qh=20,By=()=>{let r=null,e=null,t=!1,i=Un,s=Fn,n=zn,a=Kh,o=Zh,l="",h="",u,d=[],p=null,w=null;const b=()=>{p==null||p.classList.toggle("is-after",i<=0)},x=()=>{var z;const $=(z=r==null?void 0:r.shadowRoot)==null?void 0:z.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("tooltips"),$.prepend(p),b()},_=$=>{const z=document.createElement("div");return z.style.zIndex=Qh.toString(),z.className=$,z},W=($,z,pe,ie,Re)=>{$&&(z==="vertical"?($.style.left=`${-i}px`,$.style.top=ie??"0"):($.style.left=pe??"0",$.style.top=`${-i}px`),$.style.width=`${s}px`,$.style.height=`${n}px`,$.style.background=a,$.style.color=o,$.style.zIndex=Re.toString())},R=$=>{let z=$;return typeof u=="function"&&(z=u($)),h==="prefix"?`${l}${z}`:`${z}${l}`},U=()=>{const $=(e==null?void 0:e.getValues())??[],z=(e==null?void 0:e.getPointerElements())??[],pe=(e==null?void 0:e.getType())??"horizontal";if($)for(let ie=0;ie<$.length;ie++){const Re=d[ie];if(!Re)continue;const We=($[ie]??"").toString();Re.textContent=R(We),W(Re,pe,z[ie].style.left,z[ie].style.top,z[ie].style.zIndex)}},H=()=>{const $=(e==null?void 0:e.getValues())??[];if($){for(let z=0;z<$.length;z++){const pe=_(`tooltip tooltip-${z+1}`);pe.style.position="absolute",d.push(pe),p==null||p.prepend(pe)}U()}},I=()=>{r&&(w=new ResizeObserver($=>{for(const z of $)U()}),w.observe(r))},K=$=>{t=$,t?(x(),H(),I()):le()},S=$=>{i=$,U()},A=$=>{s=$,U()},T=$=>{n=$,U()},D=$=>{a=$,U()},G=$=>{o=$,U()},F=$=>{l=$,U()},N=$=>{h=$,U()},L=$=>{u=$,U()},q=$=>{if(!t||!$.values)return;const z=(e==null?void 0:e.getPointerElements())??[],pe=(e==null?void 0:e.getType())??"horizontal";for(let ie=0;ie<$.values.length;ie++){const Re=$.values[ie],We=d[ie];if(Re===void 0&&We){We.remove(),d[ie]=void 0;continue}if(Re!==void 0&&!We){const tt=_(`tooltip tooltip-${ie+1}`),ne=(Re??"").toString();tt.textContent=R(ne),tt.style.position="absolute",W(tt,pe,z[ie].style.left,z[ie].style.top,z[ie].style.zIndex),d[ie]=tt,p==null||p.append(tt)}if(!We)continue;const at=(Re??"").toString();We.textContent=R(at),W(We,pe,z[ie].style.left,z[ie].style.top,z[ie].style.zIndex)}},le=()=>{p==null||p.remove();for(const $ of d)$&&$.remove();d=[],w==null||w.disconnect()};return{get name(){return"Moving Tooltip"},init:($,z,pe,ie)=>{r=$,e=ie,i=Xr($.getAttribute("moving-tooltip-distance-to-pointer"),Un),s=Xr($.getAttribute("moving-tooltip-width"),Fn),n=Xr($.getAttribute("moving-tooltip-height"),zn),a=$.getAttribute("moving-tooltip-bg")||Kh,o=$.getAttribute("moving-tooltip-text-color")||Zh,l=$.getAttribute("moving-tooltip-units")||"",h=$.getAttribute("moving-tooltip-units-type")||"",K($o($.getAttribute("moving-tooltip")))},update:q,onAttrChange:($,z)=>{$==="moving-tooltip"&&K($o(z)),$==="moving-tooltip-distance-to-pointer"&&S(Xr(z,Un)),$==="moving-tooltip-width"&&A(Xr(z,Fn)),$==="moving-tooltip-height"&&T(Xr(z,zn)),$==="moving-tooltip-bg"&&D(z),$==="moving-tooltip-text-color"&&G(z),$==="moving-tooltip-units"&&F(z),$==="moving-tooltip-units-type"&&N(z)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:$=>{K($o($))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:$=>{S(Xr($,Un))}}},{name:"tooltipWidth",attributes:{get(){return s},set:$=>{A(Xr($,Fn))}}},{name:"tooltipHeight",attributes:{get(){return n},set:$=>{T(Xr($,zn))}}},{name:"tooltipBg",attributes:{get(){return a},set:$=>{D($)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:$=>{G($)}}},{name:"tooltipUnits",attributes:{get(){return l},set:$=>{F($)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:$=>{N($)}}},{name:"formatTooltipValue",attributes:{get(){return u},set:$=>{L($)}}}],css:`
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
  z-index: ${Qh};
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
    `,destroy:le}};window.tcRangeSliderPlugins.push(By);(()=>{var r=(o,l,h,u,d)=>{let p=l-o;return p===0?h:(u-h)*(d-o)/p+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,d=null,p=!1,w=s,b=n,x=()=>{var S;let A=(S=o==null?void 0:o.shadowRoot)==null?void 0:S.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),d=document.createElement("div"),d.classList.add("mark-values"),h.append(d),A.append(h)},_=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},W=()=>{var S;if(!h||!l)return;let A=l.getMin(),T=l.getMax(),D=l.getType()==="vertical",G=l.isRightToLeft()||l.isBottomToTop();for(let N=0;N<w;N++){let L=document.createElement("div");L.classList.add("mark",`mark-${N}`);let q=w===0?0:N*100/(w-1);D?G?L.style.top=`${100-q}%`:L.style.top=`${q}%`:G?L.style.left=`${100-q}%`:L.style.left=`${q}%`,u==null||u.append(L)}let F=l.getData();for(let N=0;N<b;N++){let L=document.createElement("div");L.classList.add("mark-value",`mark-value-${N}`);let q=b===0?0:N*100/(b-1),le=r(0,b-1,A,T,N);L.textContent=(F?(S=F[Math.round(le)])!=null?S:"":le).toString(),D?G?L.style.top=`${100-q}%`:L.style.top=`${q}%`:G?L.style.left=`${100-q}%`:L.style.left=`${q}%`,d==null||d.append(L)}},R=(S,A)=>{K(),w=S,b=A,w<=0&&(w=s),b<=0&&(b=n),x(),W(),_()},U=S=>{p=S,p?(x(),W(),_()):K()},H=S=>{!h||h.style.setProperty("--marks-color",S)},I=S=>{!h||h.style.setProperty("--values-color",S)},K=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(S,A,T,D)=>{var G,F;l=D,o=S,p=i(o.getAttribute("marks")),p&&(R(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),H((G=o.getAttribute("marks-color"))!=null?G:"#cbd5e1"),I((F=o.getAttribute("marks-values-color"))!=null?F:"#475569"))},onAttrChange:(S,A)=>{S==="marks"&&U(i(A)),S==="marks-count"&&R(t(A,s),b),S==="marks-values-count"&&R(w,t(A,n)),S==="marks-color"&&H(A),S==="marks-values-color"&&I(A)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return p??!1},set:S=>{U(i(S))}}},{name:"marksCount",attributes:{get(){return w??s},set:S=>{R(t(S,s),b)}}},{name:"marksValuesCount",attributes:{get(){return w??s},set:S=>{R(w,t(S,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:S=>{H(S)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:S=>{I(S)}}}],destroy:K,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Hy=Object.defineProperty,Wy=Object.getOwnPropertyDescriptor,Wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hy(e,t,s),s};let wr=class extends ur{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=de(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)})}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .tooltip {
                    font-size: 12px;
                }
                .pointer-shape {
                    border-radius: 0;
                    width: 10px;
                }
        `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return this.canRanderSlider()===!1?m`
                <div class="container loading">
                    <div class="skeleton"></div>
                </div>
            `:m`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${be(this.sliderRef)}
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

        <slot name="tour"></slot>
        <slot></slot>

        `}};wr.styles=ge`

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
    
    `;Wr([me({context:ll,subscribe:!0}),C()],wr.prototype,"min",2);Wr([me({context:hl,subscribe:!0}),C()],wr.prototype,"max",2);Wr([me({context:Aa,subscribe:!0}),C()],wr.prototype,"from",2);Wr([me({context:Oa,subscribe:!0}),C()],wr.prototype,"to",2);Wr([C()],wr.prototype,"hasFixedFrom",2);Wr([C()],wr.prototype,"hasFixedTo",2);Wr([me({context:bs,subscribe:!0}),C()],wr.prototype,"palette",2);Wr([C()],wr.prototype,"sliderRef",2);Wr([C()],wr.prototype,"initialised",2);wr=Wr([te("registry-range-slider")],wr);var Gy=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gy(e,t,s),s};let cs=class extends ur{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=de()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?E:m`
            <div ${be(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};mn([me({context:Aa,subscribe:!0})],cs.prototype,"from",2);mn([me({context:Oa,subscribe:!0})],cs.prototype,"to",2);mn([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],cs.prototype,"fixed",2);mn([g({type:String,reflect:!0,attribute:!0})],cs.prototype,"separator",2);cs=mn([te("registry-range-display")],cs);var Yy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,Ua=(r,e,t,i)=>{for(var s=i>1?void 0:i?qy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yy(e,t,s),s};let us=class extends ur{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return m`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":E}" ${be(this.tourableElementRef)}>

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(r=>m`
                            <div class="histogram-bar">
                                <div style="height: ${r.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():m`
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
        `}};us.styles=ge`

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


    `;Ua([C()],us.prototype,"histogram",2);Ua([g({type:Boolean,reflect:!0})],us.prototype,"interactive",2);Ua([g({type:String,reflect:!0})],us.prototype,"height",2);us=Ua([te("registry-histogram")],us);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Uo extends na{}Uo.directiveName="unsafeSVG",Uo.resultType=2;const Mu=ma(Uo);var Xy=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,Fa=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ky(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xy(e,t,s),s};let ds=class extends ni{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.group.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.group.tool.selectTool(e)}render(){return this.group===void 0?E:m`
                <div class="switchers" ${be(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:t.key===this.value.key};return m`
                        
                        <button 
                            class=${Kt(i)} 
                            @click=${()=>{this.group.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Mu(t.icon)}
                        </button>
                        
                    `})}
                </div>

                <div class="current">
                    <div class="tool-description">${O(P[this.hint])}</div>
                </div>

                <slot name="tour"></slot>
        `}};ds.styles=ge`

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

    `;Fa([me({context:Ra,subscribe:!0}),C()],ds.prototype,"value",2);Fa([me({context:Da,subscribe:!0}),C()],ds.prototype,"tools",2);Fa([C()],ds.prototype,"hint",2);ds=Fa([te("group-tool-buttons")],ds);var Zy=Object.defineProperty,Qy=Object.getOwnPropertyDescriptor,yl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zy(e,t,s),s};let qs=class extends ni{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?E:m`

            <aside ${be(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return m`
                        
                        <button 
                            class=${Kt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${O(P[e.name])}
                            
                        >
                            ${Mu(e.icon)}
                        </button>
                        
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};qs.styles=ge`

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

    `;yl([me({context:Ra,subscribe:!0}),C()],qs.prototype,"value",2);yl([me({context:Da,subscribe:!0}),C()],qs.prototype,"tools",2);qs=yl([te("group-tool-bar")],qs);var Jy=Object.defineProperty,eb=Object.getOwnPropertyDescriptor,tb=(r,e,t,i)=>{for(var s=i>1?void 0:i?eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jy(e,t,s),s};let Jh=class extends ni{getTourableRoot(){}render(){return m`
        
            <thermal-dropdown class="download">
            
                <span slot="invoker">${O(P.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${O(P.downloadoriginalfiles)}</thermal-button>
                    <small>${O(P.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${O(P.pngofindividualimages)}</thermal-button>
                    <small>${O(P.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${O(P.pngofentiregroup)}</thermal-button>
                    <small>${O(P.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${O(P.csvofanalysisdata)}</thermal-button>
                    <small>${O(P.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};Jh=tb([te("group-download-dropdown")],Jh);var rb=Object.defineProperty,vn=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&rb(e,t,s),s};class St extends ni{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}vn([me({context:Ta,subscribe:!0}),C()],St.prototype,"parentFileProviderElement");vn([me({context:Pu,subscribe:!0}),C()],St.prototype,"loading");vn([me({context:ul,subscribe:!0}),C()],St.prototype,"file");vn([me({context:ku,subscribe:!0}),C()],St.prototype,"failure");vn([me({context:gl,subscribe:!0}),C()],St.prototype,"recording");const Ll=class Ll extends St{constructor(){super(...arguments),this.ref=de()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return m`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${be(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};Ll.styles=ge`
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
            &:hover {
                cursor: pointer;
                background: var(--thermal-background);
            }
        }

    `;let Ni=Ll;var ib=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,Uu=(r,e,t,i)=>{for(var s=i>1?void 0:i?sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ib(e,t,s),s};let ua=class extends ni{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return m`
            <slot>
                <button class="default">${O(P.range).toLowerCase()}</button>
            </slot>
        `}};ua.styles=Ni.styles;Uu([me({context:Ea,subscribe:!0})],ua.prototype,"setter",2);ua=Uu([te("group-range-propagator")],ua);var nb=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,ob=(r,e,t,i)=>{for(var s=i>1?void 0:i?ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nb(e,t,s),s};let Fo=class extends St{constructor(){super(...arguments),this.container=de()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return m`
            <div ${be(this.container)} class=${Kt(t)} part="file-canvas-container">
            
                ${this.loading===!0?m`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:r===!0?m`<div class="error-wrapper">
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
                        </div>`:E}
            
            </div>

            <slot name="tour"></slot>
        
        `}};Fo.styles=ge`

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
    `;Fo=ob([te("file-canvas")],Fo);var lb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,cb=(r,e,t,i)=>{for(var s=i>1?void 0:i?hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lb(e,t,s),s};let zo=class extends St{onInstanceCreated(r){}onFailure(r){}render(){return this.file?m`
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
        `:E}};zo.styles=ge`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;zo=cb([te("file-share-button")],zo);var ub=Object.defineProperty,db=Object.getOwnPropertyDescriptor,pb=(r,e,t,i)=>{for(var s=i>1?void 0:i?db(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ub(e,t,s),s};let No=class extends St{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?m`
            <thermal-dialog label=${O(P.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${O(P.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${It(this.renderRow(O(P.thermalfilename),this.file.fileName))}

                        ${It(this.renderDownloadRow(O(P.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,O(P.thermalfiledownload)))}

                        ${this.file.visibleUrl?It(this.renderDownloadRow(O(P.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,O(P.visiblefiledownload))):E}

                        ${It(this.renderRow(O(P.time),st.human(this.file.timestamp)))}

                        ${It(this.renderNumericalRow(O(P.duration),this.file.duration,0,"ms"))}

                        ${It(this.renderRow(O(P.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${It(this.renderNumericalRow(O(P.bytesize),this.file.bytesize,0))}
                        
                        ${It(this.renderNumericalRow(O(P.minimaltemperature),this.file.min,10,"°C"))}

                        ${It(this.renderNumericalRow(O(P.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${O(P.filetype)}</h2>
                    <table>
                    ${It(this.renderRow(O(P.type),this.file.reader.parser.name))}
                    ${It(this.renderRow(O(P.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${O(P.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>m`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:E}};No.styles=ge`

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
    
    `;No=pb([te("file-info-button")],No);var fb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,mb=(r,e,t,i)=>{for(var s=i>1?void 0:i?gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fb(e,t,s),s};let jo=class extends St{constructor(){super(...arguments),this.tourableElementRef=de()}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?E:m`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${be(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file?O(P.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${O(P.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng()}>${O(P.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?m`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${O(P.convertentiresequencetovideo)}</thermal-button>
                        </div>`:E}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};jo.styles=ge`

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
    
    `;jo=mb([te("file-download-dropdown")],jo);const da=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:Le(r,"m:ss")}),vb=(r,e,t,i)=>{const s=[];let n=1,a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(da(o,i,"minor")),n+=1}return e<i&&s.push(da(e,i,"major")),s},_o=60*1e3,Di=50,Ji=3,Bo=(r,e)=>{const t=Math.floor(r/Di),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=_o;for(;o<e;)vb(o,l,n,e).forEach(h=>a.push(h)),o+=_o,l+=_o;return a.push(da(0,e,"bound")),a.push(da(e,e,"bound")),a},yb=r=>m`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,ec=(r,e,t)=>m`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,Fu=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return m`<div class="ticks">
        
        ${e.map(yb)}

        ${ec(s,Le(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?ec(n,Le(i,"m:ss:SSS"),"pointer"):E}

    </div>`},zu=ge`

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
            width: ${Di}px;
            left: -${Di/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${Ji}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${Di/2}px;
            padding-right: ${Di/2}px;
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
                top: -${Ji}px;
            }

            .tick-pointer {
                width: ${Ji*2}px;
                height: ${Ji*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${Ji}px;
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
            height: ${Ji}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${Di}px;
            position: relative;
            left: -${Di/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var bb=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,sr=(r,e,t,i)=>{for(var s=i>1?void 0:i?wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bb(e,t,s),s};let Ot=class extends St{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=de(),this.barRef=de(),this.containerRef=de(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=Bo(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=Bo(t.contentRect.width,this.file.duration)),t.contentRect.width<Ot.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return E;if(r.duration===0)return E;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return m`
            <div class="${Kt(e)}" ${be(this.containerRef)}>


                ${r!==void 0?m`
                        <div class="ticks-horizontal-indent">


                            <div class="${Kt(s)}"  ${be(this.timelineRef)}>
                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${be(this.barRef)}></div>
                                    ${this.cursor?m`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(a=>m`<file-marker-timeline start=${a.fromMs} end=${a.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>


                            ${this.currentFrame?Fu(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):E}

                            


                            ${this.hasPlayButton===!0?m`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${O(P.prev)}</thermal-button>


                                        <button class="${Kt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                        ${this.playing?m`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                            </svg>
                                            `:m`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                            </svg>
                                            `}

                                    </button>

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${O(P.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${O(P.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `:E}

                            
                        </div>
                    `:E}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?m`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${O(P.date)}:</span> 
                            <span class="inline">${Le(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${O(P.time)}:</span> 
                            <span class="inline">${Le(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${O(P.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:E}

            <slot name="tour"></slot>

          `}};Ot.collapseWidth=500;Ot.styles=ge`
    
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
            background: var( --thermal-primary );
            content: "";
            border-right: 1px solid var( --thermal-foreground );
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

        ${zu}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;sr([me({context:Ma,subscribe:!0}),C()],Ot.prototype,"playing",2);sr([me({context:pn,subscribe:!0}),C()],Ot.prototype,"currentFrame",2);sr([me({context:pl,subscribe:!0}),C()],Ot.prototype,"duration",2);sr([me({context:Ou,subscribe:!0}),C()],Ot.prototype,"mayStop",2);sr([me({context:dl,subscribe:!0})],Ot.prototype,"cursor",2);sr([me({context:Au,subscribe:!0})],Ot.prototype,"cursorSetter",2);sr([g({type:String,reflect:!0})],Ot.prototype,"hasPlayButton",2);sr([g({type:String,reflect:!0})],Ot.prototype,"hasInfo",2);sr([g({type:String,reflect:!0})],Ot.prototype,"interactive",2);sr([me({context:ml,subscribe:!0})],Ot.prototype,"markers",2);sr([C()],Ot.prototype,"collapsed",2);sr([C()],Ot.prototype,"ticks",2);sr([C()],Ot.prototype,"pointerMs",2);Ot=sr([te("file-timeline")],Ot);var xb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,bl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xb(e,t,s),s};let Xs=class extends St{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?E:m`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Hc).map(([r])=>m`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof ri&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Xs.styles=ge`

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
    
    `;bl([g({type:String,reflect:!0})],Xs.prototype,"enabled",2);bl([me({context:fl,subscribe:!0}),C()],Xs.prototype,"playbackSpeed",2);Xs=bl([te("file-playback-speed-dropdown")],Xs);var $b=Object.defineProperty,_b=Object.getOwnPropertyDescriptor,wl=(r,e,t,i)=>{for(var s=i>1?void 0:i?_b(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$b(e,t,s),s};let Ks=class extends St{constructor(){super(...arguments),this.container=de()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return m`
            <div class="container">
            
                <video ${be(this.container)} preload="metadata">

                    ${this.url===void 0?E:m`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Ks.styles=ge`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;wl([me({context:pn,subscribe:!0}),C()],Ks.prototype,"currentFrame",2);wl([g({type:String,reflect:!0,attribute:!0})],Ks.prototype,"url",2);Ks=wl([te("file-video")],Ks);const Cb=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),Le(t,"mm:ss:SSS")},kb=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var Pb=Object.defineProperty,Ab=Object.getOwnPropertyDescriptor,Gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pb(e,t,s),s};const xl={fromAttribute:r=>r===null?null:kb(r),toAttribute:r=>r===null?null:Cb(r)};let Dr=class extends St{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return E}};Gr([me({context:Ma,subscribe:!0}),C()],Dr.prototype,"playing",2);Gr([me({context:Ia,subscribe:!0}),C()],Dr.prototype,"ms",2);Gr([g({type:String,reflect:!0,attribute:!0})],Dr.prototype,"label",2);Gr([g({type:String,reflect:!0,attribute:!0,converter:xl})],Dr.prototype,"start",2);Gr([g({type:String,reflect:!0,attribute:!0,converter:xl})],Dr.prototype,"end",2);Gr([g({type:String,reflect:!0,attribute:!0,converter:xl})],Dr.prototype,"dur",2);Gr([g({type:String,reflect:!0,attribute:!0})],Dr.prototype,"active",2);Gr([g({type:String,reflect:!0,attribute:!0})],Dr.prototype,"pauseOnActivate",2);Gr([g({type:String,reflect:!0,attribute:!0})],Dr.prototype,"say",2);Dr=Gr([te("file-marker")],Dr);var Ob=Object.defineProperty,Eb=Object.getOwnPropertyDescriptor,Gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Eb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ob(e,t,s),s};let si=class extends St{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return m`

            <div class="${Kt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};si.styles=ge`
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


    `;Gi([me({context:pl,subscribe:!0}),C()],si.prototype,"duration",2);Gi([me({context:pn,subscribe:!0}),C()],si.prototype,"currentFrame",2);Gi([me({context:Ia,subscribe:!0}),C()],si.prototype,"ms",2);Gi([g({type:Number,reflect:!0,attribute:!0})],si.prototype,"start",2);Gi([g({type:Number,reflect:!0,attribute:!0})],si.prototype,"end",2);Gi([C()],si.prototype,"active",2);si=Gi([te("file-marker-timeline")],si);var Lb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,Nu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lb(e,t,s),s};let pa=class extends St{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return m`
            <div>


            ${this.markers.map(r=>r.active?m`<div class="item">
                    <h2>${r.label}</h2>
                    ${It(r.innerHTML)}
                    </div>`:E)}

            
            
            </div>

          `}};pa.styles=ge`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Nu([me({context:ml,subscribe:!0})],pa.prototype,"markers",2);pa=Nu([te("file-marks-content")],pa);var Db=Object.defineProperty,Tb=Object.getOwnPropertyDescriptor,Sl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Db(e,t,s),s};let Zs=class extends bt{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return m`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Zs.styles=ge`

    
    `;Sl([g()],Zs.prototype,"analysis",2);Sl([C()],Zs.prototype,"name",2);Zs=Sl([te("analysis-name")],Zs);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ib(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Mb=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,$l=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mb(e,t,s),s};let Qs=class extends bt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return m`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?E:m`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Ib(Wn,r=>m`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Qs.styles=ge`

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
    
    `;$l([g()],Qs.prototype,"analysis",2);$l([C()],Qs.prototype,"color",2);Qs=$l([te("analysis-color")],Qs);var Fb=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,Cr=(r,e,t,i)=>{for(var s=i>1?void 0:i?zb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fb(e,t,s),s};let Jt=class extends bt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

            <div class="table">

                <thermal-field label=${O(P.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${O(P.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${O(P.left)}>
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

                <thermal-field label=${O(P.right)}>
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

                <thermal-field label=${O(P.top)}>
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

                <thermal-field label=${O(P.bottom)}>
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
    
        
        `}};Jt.styles=ge`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Cr([g()],Jt.prototype,"analysis",2);Cr([C()],Jt.prototype,"color",2);Cr([C()],Jt.prototype,"top",2);Cr([C()],Jt.prototype,"left",2);Cr([C()],Jt.prototype,"width",2);Cr([C()],Jt.prototype,"height",2);Cr([C()],Jt.prototype,"type",2);Cr([C()],Jt.prototype,"right",2);Cr([C()],Jt.prototype,"bottom",2);Cr([C()],Jt.prototype,"maxX",2);Cr([C()],Jt.prototype,"maxY",2);Jt=Cr([te("edit-area")],Jt);var Nb=Object.defineProperty,jb=Object.getOwnPropertyDescriptor,$s=(r,e,t,i)=>{for(var s=i>1?void 0:i?jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nb(e,t,s),s};let _i=class extends bt{constructor(){super(...arguments),this.topInputRef=de(),this.leftInputRef=de()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

            <div class="table">

                <thermal-field label=${O(P.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${O(P.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${O(P.top)} hint=${O(P.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${O(P.left)} hint=${O(P.fromto,{from:0,to:this.maxX})}>
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
        
        `}};_i.styles=ge`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;$s([g()],_i.prototype,"analysis",2);$s([C()],_i.prototype,"top",2);$s([C()],_i.prototype,"left",2);$s([C()],_i.prototype,"maxX",2);$s([C()],_i.prototype,"maxY",2);_i=$s([te("edit-point")],_i);var Bb=Object.defineProperty,Hb=Object.getOwnPropertyDescriptor,za=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bb(e,t,s),s};let Js=class extends bt{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return m`

            <thermal-dialog label="${O(P.editsth,{what:O(P[this.type])})}">

                <thermal-button slot="invoker">${O(P.edit)}</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof vr?m`<edit-point .analysis=${this.analysis}></edit-point>`:m`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};za([g()],Js.prototype,"analysis",2);za([C()],Js.prototype,"name",2);za([C()],Js.prototype,"type",2);Js=za([te("file-analysis-edit")],Js);var Wb=Object.defineProperty,Gb=Object.getOwnPropertyDescriptor,pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wb(e,t,s),s};let Bt=class extends St{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=de(),this.graphRef=de(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return m`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&m`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&m`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${be(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?m`<thermal-chart 
                        ${be(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:E}
            </div>

            

            </div>
        
        `}};Bt.styles=ge`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;pr([C()],Bt.prototype,"hydrated",2);pr([g({reflect:!0})],Bt.prototype,"graphWidth",2);pr([g({reflect:!0})],Bt.prototype,"graphHeight",2);pr([C()],Bt.prototype,"graphs",2);pr([me({context:pn,subscribe:!0})],Bt.prototype,"currentFrame",2);pr([me({context:dl,subscribe:!0})],Bt.prototype,"cursor",2);pr([me({context:Au,subscribe:!0})],Bt.prototype,"cursorSetter",2);pr([C()],Bt.prototype,"shadowLeft",2);pr([C()],Bt.prototype,"shadowTop",2);pr([C()],Bt.prototype,"shadowWidth",2);pr([C()],Bt.prototype,"shadowHeight",2);pr([me({context:un,subscribe:!0})],Bt.prototype,"graphSmooth",2);Bt=pr([te("file-analysis-graph")],Bt);const _s="interactive-analysis-context";var Vb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,Vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vb(e,t,s),s};let xr=class extends bt{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof Or?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof vr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return m`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?m`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return m`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
            @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${this.interactiveanalysis===!0?m`<u aria-hidden="true"></u>`:E}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?m`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${O(P.remove)}</thermal-button>
        </td>`:E}
        
        `}};xr.styles=ge`
    
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

    `;Vr([g()],xr.prototype,"analysis",2);Vr([me({context:_s,subscribe:!0})],xr.prototype,"interactiveanalysis",2);Vr([C()],xr.prototype,"value",2);Vr([C()],xr.prototype,"graph",2);Vr([C()],xr.prototype,"may",2);Vr([C()],xr.prototype,"dimension",2);Vr([C()],xr.prototype,"color",2);Vr([g({type:Boolean,reflect:!0,attribute:!0})],xr.prototype,"selected",2);Vr([C()],xr.prototype,"name",2);xr=Vr([te("file-analysis-table-row")],xr);var qb=Object.defineProperty,Xb=Object.getOwnPropertyDescriptor,yn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qb(e,t,s),s};let ji=class extends St{constructor(){super(...arguments),this.container=de(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?E:m`

        <div class="overflow" ${be(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?m`<u aria-hidden="true"></u>`:E}
                            <span>${O(P.analysis)}</span>
                            ${this.hasHighlightedData?m`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${O(P.downloadgraphdataascsv)}>CSV</button>`:E}
                        </th>
                        <th>${O(P.avg)}</th>
                        <th>${O(P.min)}</th>
                        <th>${O(P.max)}</th>
                        <th>${O(P.size)}</th>
                        ${this.interactiveanalysis===!0?m`<th></th>`:E}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(r=>m`
                            <file-analysis-table-row
                                .analysis=${r}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};ji.styles=ge`
    
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

        



    `;yn([me({context:_s,subscribe:!0})],ji.prototype,"interactiveanalysis",2);yn([C()],ji.prototype,"analysis",2);yn([C()],ji.prototype,"allSelected",2);yn([C()],ji.prototype,"hasHighlightedData",2);ji=yn([te("file-analysis-table")],ji);var Kb=Object.defineProperty,Zb=Object.getOwnPropertyDescriptor,Qb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Kb(e,t,s),s};let tc=class extends Ni{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};tc=Qb([te("file-download-lrc")],tc);var Jb=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,t0=(r,e,t,i)=>{for(var s=i>1?void 0:i?e0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jb(e,t,s),s};let rc=class extends Ni{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng()}getDefaultLabel(){return"png"}};rc=t0([te("file-download-png")],rc);var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,bn=(r,e,t,i)=>{for(var s=i>1?void 0:i?i0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r0(e,t,s),s};let ps=class extends Ni{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};bn([g({type:String})],ps.prototype,"label",2);bn([g({type:Object})],ps.prototype,"onEnter",2);bn([g({type:Object})],ps.prototype,"onLeave",2);bn([g({type:Object})],ps.prototype,"onAction",2);ps=bn([te("file-button")],ps);var s0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,ju=(r,e,t,i)=>{for(var s=i>1?void 0:i?n0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&s0(e,t,s),s};let Ho=class extends Ni{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max})}getDefaultLabel(){return O(P.range).toLowerCase()}};ju([me({context:Ea,subscribe:!0})],Ho.prototype,"setter",2);Ho=ju([te("file-range-propagator")],Ho);const ct=r=>({fromAttribute:(i,s)=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:(i,s)=>i===!0?"true":"false"});var a0=Object.defineProperty,o0=Object.getOwnPropertyDescriptor,Yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?o0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&a0(e,t,s),s};let Sr=class extends St{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=st.human(r.timestamp)}onFailure(){}render(){return m`
        <thermal-app author=${fe(this.author)} recorded=${fe(this.recorded)} license=${fe(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:E}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${O(P.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${O(P.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${O(P.filerendering)} 
                    hint=${O(P.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${O(P.adjusttimescale)}
                    hint=${O(P.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${O(P.colourpalette)}
                    hint=${O(P.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${O(P.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:E}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${O(P.graphlines)}"
                    hint=${O(P.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:E}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?m`<file-share-button ></file-share-button>`:E}
            
              ${this.showabout===!0?m`<app-info-button ></app-info-button>`:E}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?m`<group-tool-buttons slot="pre"></group-tool-buttons>`:E}
            
            ${this.showhistogram===!0?m`<registry-histogram slot="pre"></registry-histogram>`:E}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?m`<file-analysis-graph slot="post"></file-analysis-graph>`:E}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Sr.styles=ge`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Yr([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],Sr.prototype,"showembed",2);Yr([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],Sr.prototype,"showabout",2);Yr([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],Sr.prototype,"showfullscreen",2);Yr([g({type:String,reflect:!0,converter:ct(!0)})],Sr.prototype,"showhistogram",2);Yr([me({context:_s,subscribe:!0})],Sr.prototype,"interactiveanalysis",2);Yr([g()],Sr.prototype,"author",2);Yr([g()],Sr.prototype,"recorded",2);Yr([g()],Sr.prototype,"license",2);Yr([g()],Sr.prototype,"label",2);Sr=Yr([te("file-app")],Sr);var l0=Object.defineProperty,et=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&l0(e,t,s),s};class qe extends bt{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=de()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}disconnectedCallback(){super.disconnectedCallback(),this.fileProviderRef.value&&this.fileProviderRef.value}}et([g({type:String,reflect:!0})],qe.prototype,"url");et([g({type:String,reflect:!0})],qe.prototype,"visible");et([g({type:String,reflect:!0,attribute:!0})],qe.prototype,"palette");et([g({type:Number,reflect:!0,attribute:!0})],qe.prototype,"opacity");et([g({type:Number,reflect:!0})],qe.prototype,"from");et([g({type:Number,reflect:!0})],qe.prototype,"to");et([g()],qe.prototype,"author");et([g()],qe.prototype,"recorded");et([g()],qe.prototype,"license");et([g()],qe.prototype,"label");et([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],qe.prototype,"showembed");et([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],qe.prototype,"showabout");et([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],qe.prototype,"showtutorial");et([g({type:String,reflect:!1,converter:ct(!0)})],qe.prototype,"showfullscreen");et([g({type:String,reflect:!0,converter:ct(!0)})],qe.prototype,"showhistogram");et([se({context:_s}),g({type:String,reflect:!0,converter:ct(!0)})],qe.prototype,"interactiveanalysis");et([g({type:String,reflect:!0})],qe.prototype,"analysis1");et([g({type:String,reflect:!0})],qe.prototype,"analysis2");et([g({type:String,reflect:!0})],qe.prototype,"analysis3");et([g({type:String,reflect:!0})],qe.prototype,"analysis4");et([g({type:String,reflect:!0})],qe.prototype,"analysis5");et([g({type:String,reflect:!0})],qe.prototype,"analysis6");et([g({type:String,reflect:!0})],qe.prototype,"analysis7");et([g({type:String,reflect:!0})],qe.prototype,"ms");et([g({type:String,reflect:!0})],qe.prototype,"speed");et([g({type:String,reflect:!0})],qe.prototype,"autoclear");et([C()],qe.prototype,"hasGraph");et([C()],qe.prototype,"hasAnalysis");et([C()],qe.prototype,"isSequence");var h0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,u0=(r,e,t,i)=>{for(var s=i>1?void 0:i?c0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h0(e,t,s),s};let ic=class extends qe{render(){return this.url===""?E:m`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${fe(this.from)}
        to=${fe(this.to)}
        opacity=${fe(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${fe(this.visible)}
            analysis1=${fe(this.analysis1)}
            analysis2=${fe(this.analysis2)}
            analysis3=${fe(this.analysis3)}
            analysis4=${fe(this.analysis4)}
            analysis5=${fe(this.analysis5)}
            analysis6=${fe(this.analysis6)}
            analysis7=${fe(this.analysis7)}
            speed=${fe(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${fe(this.author)} 
                recorded=${fe(this.recorded)} 
                license=${fe(this.license)}
                label=${fe(this.label)}  
                showabout=${this.showabout}
                showembed=${this.showembed}
                showfullscreen=${this.showfullscreen}
                showhistogram=${this.showhistogram}
              >
                <slot name="content" slot="content"></slot>  
              </file-app>
          
            </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};ic=u0([te("thermal-file-app")],ic);class d0{constructor(e){this.steps=e,this.onStepInternalActivation=new ee}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class _l{constructor(e){this._active=!1,this.onTourActivationStatus=new ee,this.onStepActivation=new ee,this.storage=new d0(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new _l(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var p0=Object.defineProperty,f0=Object.getOwnPropertyDescriptor,Lt=(r,e,t,i)=>{for(var s=i>1?void 0:i?f0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&p0(e,t,s),s};let wt=class extends St{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=de(),this.contentContainerWidth=1e3,this.tourController=_l.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=st.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return m`
        <thermal-app author=${fe(this.author)} recorded=${fe(this.recorded)} license=${fe(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${O(P.colourpalette)}>
              ${O(P.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:E}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${O(P.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${O(P.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${O(P.filerendering)} 
                    hint=${O(P.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${O(P.adjusttimescale)}
                    hint=${O(P.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${O(P.colourpalette)}
                    hint=${O(P.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${O(P.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:E}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${O(P.graphlines)}"
                    hint=${O(P.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:E}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?m`<app-info-button></app-info-button>`:E}

              ${this.showtutorial===!0?m`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${O(P.tutorial)}
              </thermal-button>`:E}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${be(this.contentContainerRef)}>

                ${this.interactiveanalysis===!0?m`
                  <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?m`<group-tool-bar tour="tools">
                    <tour-step slot="tour" placement="right-top" label="Analysis tools">
                        Select a tool and draw an analysis on the IR image.
                    </tour-step>
                  </group-tool-bar>`:m`<group-tool-buttons tour="tools">
                    <tour-step slot="tour" placement="right-top">
                      Select a tool and draw an analysis on the IR image.
                    </tour-step>
        </group-tool-buttons>`}
                </div>
                `:E}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?m`<registry-histogram slot="pre"></registry-histogram>`:E}
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
                    ${this.hasAnalysis?m`<file-analysis-table></file-analysis-table>`:m`<div class="placeholder">
                        <div class="placeholder-title">${O(P.analysis)}</div>
                        <div>${O(P.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?m`
                      <div>${O(P[(e=this.tool)==null?void 0:e.description])}</div>
                    `:m`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${O(P.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${O(P.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${O(P.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?m`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?m`<div class="placeholder">
                      <div class="placeholder-title">${O(P.graph)}</div>
                      <div>${this.hasAnalysis===!1?O(P.graphhint1):It(O(P.graphhint2))}</div>
                    </div>`:E}
                  
                  </div>
                  `:E}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};wt.styles=ge`


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

    .hintbtn {
      display: inline-block;
      padding: 1px 4px; 
      border-radius: var(--thermal-gap); 
      border: 1px solid var(--thermal-slate);
    }
  
  `;Lt([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],wt.prototype,"showembed",2);Lt([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],wt.prototype,"showabout",2);Lt([g({type:String,reflect:!0,attribute:!0,converter:ct(!1)})],wt.prototype,"showfullscreen",2);Lt([g({type:Boolean,reflect:!0,converter:ct(!0)})],wt.prototype,"showhistogram",2);Lt([g({type:String,reflect:!1,attribute:!0})],wt.prototype,"showtutorial",2);Lt([me({context:_s,subscribe:!0})],wt.prototype,"interactiveanalysis",2);Lt([C()],wt.prototype,"hasAnalysis",2);Lt([C()],wt.prototype,"hasGraph",2);Lt([C()],wt.prototype,"tool",2);Lt([C()],wt.prototype,"isSequence",2);Lt([g()],wt.prototype,"author",2);Lt([g()],wt.prototype,"recorded",2);Lt([g()],wt.prototype,"license",2);Lt([g()],wt.prototype,"label",2);Lt([se({context:su})],wt.prototype,"tourController",2);Lt([se({context:nu})],wt.prototype,"tourStep",2);Lt([C()],wt.prototype,"contentContainerWidth",2);wt=Lt([te("desktop-app")],wt);var g0=Object.defineProperty,m0=Object.getOwnPropertyDescriptor,v0=(r,e,t,i)=>{for(var s=i>1?void 0:i?m0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&g0(e,t,s),s};let sc=class extends qe{render(){return this.url===""?E:m`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${fe(this.from)}
        to=${fe(this.to)}
        opacity=${fe(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${be(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${fe(this.visible)}
            analysis1=${fe(this.analysis1)}
            analysis2=${fe(this.analysis2)}
            analysis3=${fe(this.analysis3)}
            analysis4=${fe(this.analysis4)}
            analysis5=${fe(this.analysis5)}
            analysis6=${fe(this.analysis6)}
            analysis7=${fe(this.analysis7)}
            speed=${fe(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${fe(this.author)} 
              recorded=${fe(this.recorded)} 
              license=${fe(this.license)}
              label=${fe(this.label)}
              showtutorial=${this.showtutorial}
              showembed=${this.showembed}
              showabout=${this.showabout}
              showfullscreen=${this.showfullscreen}
              showhistogram=${this.showhistogram}
            >
              <slot name="content" slot="content"></slot>
            </desktop-app>
          
          </file-provider>

        </group-provider>

      </registry-provider>

    </manager-provider>


    
    `}};sc=v0([te("thermal-file-analyser")],sc);var y0=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,Cl=(r,e,t,i)=>{for(var s=i>1?void 0:i?b0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&y0(e,t,s),s};let en=class extends bt{constructor(){super(...arguments),this.dropinRef=de(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return m`

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

                            ${this.loaded===!0?m`<thermal-button slot="bar" @click=${this.handleCloseFile.bind(this)} variant="foreground">Close</thermal-button>`:E}

                            <file-dropin ${be(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};en.styles=ge`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Cl([C()],en.prototype,"dropinRef",2);Cl([C()],en.prototype,"loaded",2);en=Cl([te("thermal-dropin-app")],en);var w0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,Ir=(r,e,t,i)=>{for(var s=i>1?void 0:i?x0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&w0(e,t,s),s};let cr=class extends bt{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return m`

            ${e?m`<h3 class="row-title">${e}</h3>`:E}

            ${t?m`<p>${t}</p>`:E}

            <section class=${Kt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>m`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};cr.styles=ge`

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

    `;Ir([g()],cr.prototype,"columns",2);Ir([g()],cr.prototype,"breakpoint",2);Ir([g({type:Object})],cr.prototype,"files",2);Ir([g({type:String})],cr.prototype,"label",2);Ir([g({type:String})],cr.prototype,"info",2);Ir([g({type:Number})],cr.prototype,"from",2);Ir([g({type:Number})],cr.prototype,"to",2);Ir([g({type:Number})],cr.prototype,"cursor",2);Ir([g({type:String})],cr.prototype,"grouping",2);Ir([C()],cr.prototype,"collapsed",2);cr=Ir([te("time-group-row")],cr);var S0=Object.defineProperty,Cs=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&S0(e,t,s),s},_t;const Vi=(_t=class extends bt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new ls(this),this.groupRenderer=new Vs(this)}parseFilesProperty(e){return e.split(_t.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(_t.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(_t.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,d]=h,p=u.trim(),w=d.trim();switch(p){case _t.FILE_THERMAL_KEY:s=w;break;case _t.FILE_VISIBLE_KEY:n=w;break;case _t.FILE_LABEL_KEY:a=w;break;case _t.FILE_NOTE_KEY:o=w;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},_t.styles=[ls.styles,Vs.styles,ge`
    
        `],_t.FILE_RECORD_SEPARATOR=";",_t.FILE_SEGMENT_SEPAROATOR="|",_t.FILE_COMPONENT_SEPAROATOR="~",_t.FILE_THERMAL_KEY="thermal",_t.FILE_VISIBLE_KEY="visible",_t.FILE_LABEL_KEY="label",_t.FILE_NOTE_KEY="note",_t);Cs([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],Vi.prototype,"showembed");Cs([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],Vi.prototype,"showabout");Cs([g({type:String,reflect:!1,attribute:!0,converter:ct(!1)})],Vi.prototype,"showtutorial");Cs([g({type:String,reflect:!1,converter:ct(!0)})],Vi.prototype,"showfullscreen");Cs([g({type:String,reflect:!0,converter:ct(!0)})],Vi.prototype,"showhistogram");Cs([se({context:_s}),g({type:String,reflect:!0,converter:ct(!0)})],Vi.prototype,"interactiveanalysis");let kl=Vi;class $0{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Jr)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Jr)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?Lc(e).getTime():this.grouping==="day"?Jn(e).getTime():this.grouping==="week"?Qr(e).getTime():this.grouping==="month"?ta(e).getTime():this.grouping==="year"?Xo(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Ac(e).getTime():this.grouping==="day"?kc(e).getTime():this.grouping==="week"?ra(e).getTime():this.grouping==="month"?ea(e).getTime():this.grouping==="year"?Pc(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:Le(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:Le(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+Le(e,"w")+" of "+Le(e,"yyyy"),info:[st.humanDate(Qr(e).getTime()),st.humanDate(ra(e).getTime())].join(" - ")}:this.grouping==="month"?{label:Le(e,"MMMM yyyy"),info:[st.humanDate(ta(e).getTime()),st.humanDate(ea(e).getTime())].join(" - ")}:this.grouping==="year"?{label:Le(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?st.human(e):this.grouping==="hour"||this.grouping==="day"?Le(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",st.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var _0=Object.defineProperty,C0=Object.getOwnPropertyDescriptor,lt=(r,e,t,i)=>{for(var s=i>1?void 0:i?C0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_0(e,t,s),s};let nt=class extends kl{constructor(){super(...arguments),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new ee,this.onColumns=new ee,this.preservetime=!0}connectedCallback(){super.connectedCallback();const t=cn(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(this.log(t,i),t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new $0(this,t),this.onGroupInit.call(this.group)}firstUpdated(r){super.firstUpdated(r),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to});const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(t=>t instanceof ii))}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}render(){return m`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${fe(this.author)}
                            license=${fe(this.license)}
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
                                    <div>
                                        <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${O(P.columns,{num:this.columns})}</div>
                                    </div>

                                    ${this.grouper.numFiles>0?m`

                                        <group-download-dropdown></group-download-dropdown>

                                        <registry-range-full-button></registry-range-full-button>
                                        `:E}

                                ${this.showabout===!0?m`<app-info-button ></app-info-button>`:E}

                                </thermal-bar>

                            </div>


                            ${this.showhistogram===!0?m`<registry-histogram></registry-histogram>`:E}

                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            ${this.interactiveanalysis===!0?m`<group-tool-buttons></group-tool-buttons>`:E}

                            <div class="app-content">

                                    <slot></slot>


                                    ${this.groups.map(r=>this.groupRenderer.renderGroup(r,this.columns,this.grouping,this.preservetime))}            
                            
                            </div>

                            <group-timeline></group-timeline>

                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};nt.styles=[kl.styles,ge`


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


    
    `];lt([g({type:String,reflect:!0,attribute:!0})],nt.prototype,"palette",2);lt([g({type:Number,reflect:!0})],nt.prototype,"from",2);lt([g({type:Number,reflect:!0})],nt.prototype,"to",2);lt([g({type:String,reflect:!0})],nt.prototype,"author",2);lt([g({type:String,reflect:!0})],nt.prototype,"label",2);lt([g({type:String,reflect:!1})],nt.prototype,"description",2);lt([g({type:String,reflect:!0})],nt.prototype,"license",2);lt([C(),Ci({slot:"entry",flatten:!0})],nt.prototype,"entries",2);lt([g({type:String,reflect:!0})],nt.prototype,"slug",2);lt([g()],nt.prototype,"columns",2);lt([g()],nt.prototype,"breakpoint",2);lt([g({type:String,reflect:!0})],nt.prototype,"grouping",2);lt([C()],nt.prototype,"groups",2);lt([g({type:String})],nt.prototype,"files",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis1",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis2",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis3",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis4",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis5",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis6",2);lt([g({type:String,reflect:!0})],nt.prototype,"analysis7",2);lt([g({type:String,reflect:!0,converter:ct(!1)})],nt.prototype,"preservetime",2);nt=lt([te("thermal-group-app")],nt);var k0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,Pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?P0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&k0(e,t,s),s};let $r=class extends ni{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=de(),this.indicatorRef=de()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof Jr?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=Bo(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?E:m`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${be(this.timelineRef)}
                @click=${r=>this.handleTimelineClick(r)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${be(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs!==void 0?Fu(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):E}

        </div>`}};$r.TICK_WIDTH=50;$r.TICK_POINTER_HEIGHT=3;$r.styles=ge`


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


        ${zu}
    
    `;Pi([C()],$r.prototype,"longestDurationInMs",2);Pi([C()],$r.prototype,"ms",2);Pi([C()],$r.prototype,"pointerMs",2);Pi([C()],$r.prototype,"playing",2);Pi([C()],$r.prototype,"instances",2);Pi([C()],$r.prototype,"has",2);Pi([C()],$r.prototype,"ticks",2);$r=Pi([te("group-timeline")],$r);var A0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,kr=(r,e,t,i)=>{for(var s=i>1?void 0:i?O0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&A0(e,t,s),s};let er=class extends kl{constructor(){super(...arguments),this.registryProviderRef=de(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=cn(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Mt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return m`
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
                    <registry-ticks-bar highlightFrom=${fe(this.highlightFrom)} highlightTo=${fe(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};er.styles=ge`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;kr([g({type:String,reflect:!0,attribute:!0})],er.prototype,"palette",2);kr([g({type:Number,reflect:!0})],er.prototype,"from",2);kr([g({type:Number,reflect:!0})],er.prototype,"to",2);kr([g()],er.prototype,"slug",2);kr([g({type:String,reflect:!0})],er.prototype,"grouping",2);kr([g({type:String,reflect:!0})],er.prototype,"columns",2);kr([g({type:Number,reflect:!0})],er.prototype,"breakpoint",2);kr([g({type:String,reflect:!0})],er.prototype,"groups",2);kr([g({type:String,reflect:!0})],er.prototype,"autogroups",2);kr([Ci({flatten:!0}),C()],er.prototype,"entries",2);kr([C()],er.prototype,"registry",2);er=kr([te("thermal-registry-app")],er);var E0=Object.defineProperty,L0=Object.getOwnPropertyDescriptor,ai=(r,e,t,i)=>{for(var s=i>1?void 0:i?L0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&E0(e,t,s),s};let Tr=class extends bt{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=de()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await wu(this.elementContext.element.getTourableRoot(),this,{middleware:[bu(20),_v({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return m`<div class=${Kt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?m`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:E}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${O(P.back)}</thermal-button>`:E} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${O(P.next)}</thermal-button>`:E}          
            
            </div>

            

        </div>
        `}};Tr.styles=ge`

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
    
    `;ai([g({type:String})],Tr.prototype,"label",2);ai([C()],Tr.prototype,"active",2);ai([g({type:String,reflect:!0})],Tr.prototype,"displayed",2);ai([g({type:String})],Tr.prototype,"placement",2);ai([me({context:su,subscribe:!0})],Tr.prototype,"tour",2);ai([me({context:nu,subscribe:!0})],Tr.prototype,"definition",2);ai([me({context:au,subscribe:!0})],Tr.prototype,"elementContext",2);ai([g({type:String})],Tr.prototype,"youtube",2);Tr=ai([te("tour-step")],Tr);var R0=Object.defineProperty,D0=Object.getOwnPropertyDescriptor,fr=(r,e,t,i)=>{for(var s=i>1?void 0:i?D0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&R0(e,t,s),s};let Ht=class extends bt{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=de(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return m`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`}renderData(r){return m`
            <div class="files ${this.cls}">
                ${r.files.map(e=>this.renderFile(e))}
            </div>
        `}renderFile(r){return m`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${r.lrc}" 
                    visible=${fe(r.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${st.human(r.timestamp*1e3)}</span></h2>
                        <div>
                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${O(P.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>

                        </div>
                    </div>
                    
                    <file-canvas></file-canvas>
                    <file-timeline hasPlayButton="false" hasInfo="false"></file-timeline>
                    <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                </file-provider>
            </div>
        </div>`}clsToStr(r){return O(P.columns,{num:this.clsx[r]})}renderColumnsSwitch(){return m`<thermal-dropdown>
            <span slot="invoker">${this.clsToStr(this.cls)}</span>
            <thermal-button slot="option" @click=${()=>this.cls="xs"}>${this.clsx.xs}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="sm"}>${this.clsx.sm}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="md"}>${this.clsx.md}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="lg"}>${this.clsx.lg}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="xl"}>${this.clsx.xl}</thermal-button>
        </thermal-dropdown>`}renderInfo(){if(this.data){const r=this.getUrl(this.url,this.folder,this.subfolder),e="Request",t={"API Root":this.url,Subfolder:this.subfolder,Folder:this.folder,[e]:r};return st.human(this.data.time),m`
                <thermal-dialog label="Remote folder info">

                    <slot name="invoker" slot="invoker">
                        <thermal-button>Remote folder info</thermal-button>
                    </slot>

                    <div slot="content">

                        ${this.data.info.description?m`<p>${this.data.info.description}</p>`:E}

                        <table>
                            
                            <caption>Request information</caption>

                            <tbody>

                                ${Object.entries(t).map(([i,s])=>{const a=i===e?m`<a href="${s}" target="_blank">${s}</a>`:s;return m`<tr>
                                        <td>${i}</td>
                                        <td>${a}</td>
                                    </tr>`})}
                            
                            </tbody>

                        </table>
                    
                    </div>
                
                </thermal-dialog>
            `}return E}render(){var e;let r=O(P.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),m`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${be(this.groupRef)}>
        
                        <thermal-app
                            author=${fe(this.author)}
                            license=${fe(this.license)}
                        >

                            <thermal-button variant="foreground" interactive="false" slot="bar">
                                ${r}
                            </thermal-button>

                            ${this.error===void 0?m`

                                <div slot="bar" style="flex-grow: 4;">

                                    <thermal-bar>
                                        <registry-palette-dropdown></registry-palette-dropdown>

                                        <registry-opacity-slider></registry-opacity-slider>

                                        <registry-range-full-button></registry-range-full-button>

                                        ${this.renderColumnsSwitch()}

                                        <group-download-dropdown></group-download-dropdown>

                                        ${this.renderInfo()}

                                    </thermal-bar>

                                </div>

                            ${this.showhistogram?m`<registry-histogram></registry-histogram>`:E}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`:E}
                            
                        ${this.error?It(this.error):E}

                        ${this.error===void 0&&this.data?this.renderData(this.data):E}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};Ht.styles=ge`


        group-tool-buttons {
            padding-top: 10px;
        }
    
        .files {
            display: grid;
            grid-template-columns: auto auto auto;
            margin: 0 -6px;
            padding-top: var(--thermal-fs);
        }


        .files.xs {
            grid-template-columns: 1fr; /* 1 sloupec */
        }

        .files.sm {
            grid-template-columns: repeat(2, 50%); /* 2 sloupce */
        }

        .files.md {
            grid-template-columns: repeat(3, 33%); /* 3 sloupce */
        }

        .files.lg {
            grid-template-columns: repeat(4, 25%); /* 4 sloupce */
        }

        .files.xl {
            grid-template-columns: repeat(5, 20%); /* 4 sloupce */
        }


        .file {
            box-sizing: border-box;
            padding: 6px;
        }

        .file-inner {
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius) var(--thermal-radius) 0 0;
        }

        .file-header {
            display: flex;
            width: 100%;
            align-items: center;
            padding: 5px;
            box-sizing: border-box;
            
            h2 {
                flex-grow: 1;
                font-size: calc( var(--thermal-fs) * .9 );
                margin: 0;
                padding: 0;

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

            }
            div {
                white-space: nowrap;
            }
        }

        table {
            border: 1px solid var(--thermal-slate);
            border-collapse: collapse;
        }

        td, th {
            border: 1px solid var( --thermal-slate );
            padding: 5px;
        }

        caption {
            text-align: left;
            padding: 5px;
            font-weight: bold;
        }

    `;fr([g({type:String,reflect:!0})],Ht.prototype,"url",2);fr([g({type:String,reflect:!0})],Ht.prototype,"subfolder",2);fr([g({type:String,reflect:!0})],Ht.prototype,"folder",2);fr([C()],Ht.prototype,"error",2);fr([C()],Ht.prototype,"loading",2);fr([C()],Ht.prototype,"data",2);fr([C()],Ht.prototype,"label",2);fr([C()],Ht.prototype,"cls",2);fr([g({type:String,reflect:!0})],Ht.prototype,"license",2);fr([g({type:String,reflect:!0})],Ht.prototype,"author",2);fr([g({type:String,reflect:!0,attribute:!0})],Ht.prototype,"palette",2);fr([g({type:String,reflect:!0,converter:ct(!0)})],Ht.prototype,"showhistogram",2);Ht=fr([te("remote-folder-app")],Ht);var ui=(r=>(r[r.LOADING=0]="LOADING",r[r.INTRO=1]="INTRO",r[r.GROUPS=2]="GROUPS",r[r.FILE=3]="FILE",r))(ui||{}),Ti=(r=>(r.FOLDERS="everything",r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(Ti||{});const T0="folder-api-info",I0="folder-current-state",M0="folder-current-state-setter",U0="folder-current-groupping",F0="folder-current-groupping-setter",z0="folder-only",N0="folder-only-settings";var j0=Object.defineProperty,B0=Object.getOwnPropertyDescriptor,Ft=(r,e,t,i)=>{for(var s=i>1?void 0:i?B0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j0(e,t,s),s};let kt=class extends br{constructor(){super(...arguments),this.palette={key:"jet",data:yr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1,this.mode=ui.INTRO,this.modeSetter=this.setMode.bind(this),this.grouping=Ti.DAYS,this.grouppingSetter=this.setGrouping.bind(this),this.only=[],this.data=[],this.dataLoading=!1,this.onlySet={all:this.allGroups.bind(this),add:r=>{this.only.includes(r)||(this.only=[...this.only,r])},remove:r=>{this.only.includes(r)&&(this.only=this.only.filter(e=>e!==r))},only:r=>{this.only=r}}}allGroups(){this.only=this.info?Object.keys(this.info.folders):[]}connectedCallback(){this.slug==null&&(this.slug=this.UUID),this.manager=cn(this.slug),super.connectedCallback(),this.url&&this.fetchMainInfo(this.url)}updated(r){super.updated(r),r.has("mode")||r.has("groupping")}async fetchMainInfo(r){const t=await(await fetch(r)).json();t.success===!0?this.info=t:this.info=void 0}async fetchFolders(){this.dataLoading=!0;let r=this.url+"?everything";if(this.only.length>0){const i=this.only.join(",");r+="&only="+i}const t=await(await fetch(r)).json();if(t.success){const i=[];Object.entries(t.folders).forEach(([s,n])=>{const a={key:s,label:n.name,files:n.files,description:n.description};i.push(a)}),this.data=i,this.dataLoading=!1}}setMode(r){this.mode=r}setGrouping(r){this.grouping=r}renderInfo(r,e){return m`
            ${Object.values(r.folders).map(t=>e!==void 0?m`<thermal-button @click=${()=>e(t)}>
                        ${this.renderFolderInfoWithoutContainer(t)}
                    </thermal-button>`:this.renderFolderInfoWithoutContainer(t))}
        `}renderFolderInfoWithoutContainer(r){return m`<div class="folder-info">
            <h2>${r.name}</h2>
            <div>${r.lrc_count}</div>
        </div>`}renderLoading(r){return m`<div>Loading: ${r}</div>`}renderTimeButtonsRow(){const r={Hours:Ti.HOURS,Days:Ti.DAYS,Weeks:Ti.WEEKS,Months:Ti.MONTHS,Years:Ti.YEARS};return m`<div>
            ${Object.entries(r).map(([e,t])=>m`<thermal-button
                @click=${()=>{this.mode=ui.GROUPS,this.grouping=t}}
                >${e}</thermal-button>`)}
        </div>`}renderCloseButton(r="Close"){return m`<thermal-button
            @click=${()=>{this.mode=ui.INTRO,this.onlySet.only([]),this.data=[]}}
        >${r}</thermal-button>`}screenInfo(){return this.info===void 0?this.renderLoading("Načítám informace o složce"):m`
            <div class="screen-info">

                <h1>Folders</h1>

                <div class="folders-list">

            ${this.renderInfo(this.info,r=>{this.mode=ui.GROUPS,this.onlySet.add(r.folder),this.fetchFolders()})}

                </div>

            <div>
                
                ${this.renderTimeButtonsRow()}

            </div>
            
            </div>
        `}renderData(r,e,t){return m`<div class="data">
        
            ${e?m`<h2 class="data-label"><${e}/h2>`:E}

            ${t?m`<div class="data-description">${t}</div>`:E}

            <div class="data-content">
                ${r.map(i=>this.renderDataGroup(i))}
            </div>
        
        </div>`}renderDataGroup(r,e=!0,t=!0){return m`<div class="data-group">


            <div class="data-group-header">
    
                ${e?m`<h3>${r.label}</h3>`:E}
                    
                ${t&&r.description?m`<p>${r.description}</p>`:E}
                
                ${this.renderCloseButton()}

            </div>

            <group-provider slug="${r.key}">

            <div class="data-group-content">
                ${Object.values(r.files).map(i=>this.renderSingleFile(i))}
            </div>

            </group-provider>
        
        </div>`}renderSingleFile(r){return m`<div class="data-group-content-file">
        <file-provider thermal="${r.lrc}" batch="true">
            <file-canvas></file-canvas>
        </file-provider>
            ${r.lrc}
        </div>`}renderFoldersOnlyControl(r){return m`<div class="grouping-folders">
        
            ${Object.values(r.folders).map(e=>{const t=this.only.includes(e.folder);return m`<thermal-button 
                variant="${t?"foreground":"default"}"
                @click=${()=>{t?(this.onlySet.remove(e.folder),this.only.length===0?this.mode=ui.INTRO:this.fetchFolders()):(this.onlySet.add(e.folder),this.fetchFolders())}}>${e.name}</thermal-button>`})}

        </div>`}screenGroups(){return this.info===void 0?this.renderLoading("Načítám složku"):m`<div class="screen-groups">

            <registry-histogram></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>

            <div class="group-screen-max">

                ${this.dataLoading===!0?this.renderLoading("Načítám soubory..."):E}

                ${this.dataLoading===!1?this.renderData(this.data):E}
            
            </div>

        </div>`}render(){return m`
            <thermal-app>

            <thermal-button variant="foreground" interactive="false" slot="bar">
                Folder
            </thermal-button>

            ${this.mode===ui.INTRO?this.screenInfo():E}

            ${this.mode===ui.GROUPS?this.screenGroups():E}

            </thermal-app>`}};kt.styles=ge`
        .info {
            padding: calc( var(--thermal-gap) * .5);
            display: grid;
            
        }

        .folders-list {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: var(--thermal-gap);

            > thermal-button::part(btn) {
                width: 100%;
                height: 100%; 
                text-align: left;
            }
        }

        h2 {
            font-size: var(--thermal-fs);
            margin: 0;
            padding: 0;
        }

        .folder_info {
            h2 {
                color: red;
            }
        }






    .data {
        width: 100%;
    }

    .data-content {
        width: 100%;
        display: grid;
        padding-top: var(--thermal-radius);
    }

    .data-group {
        box-sizing: border-box;
        border: 1px solid var(--thermal-slate);
        border-radius: var(--thermal-radius);
        padding: calc( var( --thermal-gap ) * .5 );
    }

    .data-group-header {
        h3 {}
        p {}
    }

    .data-group-content {
    
    }

    .data-group-content-file {

    }



    `;Ft([se({context:ka})],kt.prototype,"manager",2);Ft([se({context:bs}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:yr[r]}),toAttribute:r=>r.key.toString()}})],kt.prototype,"palette",2);Ft([se({context:Pa}),g({type:String,reflect:!0,attribute:!0})],kt.prototype,"smooth",2);Ft([se({context:un}),g({type:String,reflect:!0,attribute:!0})],kt.prototype,"graphSmooth",2);Ft([g({type:Boolean,reflect:!0})],kt.prototype,"autoclear",2);Ft([g({type:String,reflect:!0,attribute:!0})],kt.prototype,"url",2);Ft([g({type:String})],kt.prototype,"slug",2);Ft([se({context:T0}),C()],kt.prototype,"info",2);Ft([se({context:I0}),C()],kt.prototype,"mode",2);Ft([se({context:M0})],kt.prototype,"modeSetter",2);Ft([se({context:U0}),C()],kt.prototype,"grouping",2);Ft([se({context:F0})],kt.prototype,"grouppingSetter",2);Ft([se({context:z0}),C()],kt.prototype,"only",2);Ft([C()],kt.prototype,"data",2);Ft([C()],kt.prototype,"dataLoading",2);Ft([se({context:N0})],kt.prototype,"onlySet",2);kt=Ft([te("remote-browser-app")],kt);var H0=Object.defineProperty,W0=Object.getOwnPropertyDescriptor,Pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?W0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&H0(e,t,s),s};let tr=class extends bt{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=de(),this.palette="jet"}connectedCallback(){super.connectedCallback()}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((d,p)=>d[0]<p[0]?-1:1);const u=Object.fromEntries(h);return[o,u]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?Le(r,"d. M.yyyy - mm:ss"):this.by==="days"?Le(r,"d. M. yyyy"):this.by==="weeks"?Le(r,"I")+" roku "+Le(r,"yyyy"):this.by==="months"?Le(r,"M"):this.by==="years"?Le(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?Le(r,"h:mm:ss"):this.by==="days"?Le(r,"H:mm:ss"):this.by==="weeks"?Le(r,"I")+" roku "+Le(r,"yyyy"):this.by==="months"?Le(r,"M"):this.by==="years"?Le(r,"yyyy"):r.toString()}renderFile(r){return m`
            <file-provider
                batch="true"
                thermal="${r.lrc}"
                visible="${fe(r.png)}"
            >

                <article class="file">

                    <header>

                        <h4>${this.getItemLabel(r.timestamp*1e3)}</h4>

                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${O(P.info).toLowerCase()}"></file-button>
                        </file-info-button>

                    </header>

                    <main>

                        <file-canvas></file-canvas>

                        <file-analysis-table></file-analysis-table>

                    </main>

                </article>

            </file-provider>
        `}renderGrid(r){const t=Object.values(Object.values(r.data)[0]).map(i=>i.name).length;return m`


            <div slot="bar" style="flex-grow: 4;">

                <thermal-bar>

                    <registry-palette-dropdown></registry-palette-dropdown>
                    <registry-opacity-slider></registry-opacity-slider>
                    <registry-range-full-button></registry-range-full-button>

                </thermal-bar>

            </div>


            <table>


                <tr id="range" class="sticky bg" style="top: 0px;">
                    <td colspan="${t}" style="padding-bottom: var(--thermal-gap); padding-top:var(--offset)">

                        <registry-histogram></registry-histogram>

                        <registry-range-slider></registry-range-slider>
                        <registry-ticks-bar></registry-ticks-bar>
                    
                    </td>
                </tr>


                <tr id="folders" class="sticky" style="top: ${this.heightRange}px;">
                    ${Object.values(Object.values(r.data)[0]).map(i=>m`<td>
                            <div class="cell-folder-header">
                                <h1>${i.name}</h1>
                            </div>
                    </td>`)}
                </tr>
            
                ${Object.entries(r.data).map(([i,s])=>{const n=Object.keys(s).length;return m`

                        <tr><td class="separator"></td></tr>

                        <tr class="group-header">
                            <td colspan="${n}">
                                <div class="cell-divider">
                                    <group-provider slug=${fe(i)}>
                                        <h2>${this.getGroupLabel(parseInt(i)*1e3)}</h2>
                                        
                                        <group-download-dropdown></group-download-dropdown>

                                        <group-range-propagator>
                                            <thermal-button class="default">Rozsah skupiny</thermal-button>
                                        </group-range-propagator>

                                        <registry-range-full-button></registry-range-full-button>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>

                        <group-provider class="group-files" slug=${fe(i)}>
                            ${Object.entries(s).map(([a,o])=>m`<td>
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):E}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?O(P.loading)+"":this.label??"Remote folder";return m`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${be(this.registryRef)}>
            
                            <thermal-app
                                author=${fe(this.author)}
                                license=${fe(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):E}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};tr.styles=ge`
    
        :host {
            --offset: calc( var(--thermal-gap) * .5 );
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border:0;
        }

        tr, td {
            border: 0;
            padding: 0;
            margin: 0;
        }

        .sticky {
            position: sticky;
            z-index: 12;
        }

        .bg {
            background-color: var(--thermal-slate-light);
        }

        .label-folder {
            font-size: 16px;
        }

        .label-time {
            font-size: 16px;
        }

        h1, h2, h3, h4 {
            margin: 0;
            padding: 0;
            line-height: 1em;
            font-size: var(--thermal-fs);
        }



        .cell-folder-header {
            
            border-radius: var(--thermal-radius);
            
            margin-left: var(--offset);
            margin-right: var(--offset);

            padding: var(--thermal-gap);

            color: var(--thermal-foreground);
            background-color: var(--thermal-background);
            border: 1px solid var(--thermal-slate-light);

            box-shadow: 0px 0px 50px var(--thermal-slate-light);
        }

        .cell-divider {
            margin-left: var(--offset);
            margin-right: var(--offset);

            group-provider {
                display: flex;
                width: 100%;
                align-items: center;
                box-sizing: border-box;
                padding: var(--thermal-gap);
                gap: 3px;

                h2 {
                    flex-grow: 1;
                }
            }

        }

        .cell-group {
            margin-left: var(--offset);
            margin-right: var(--offset);
        }

        td.separator {
            height: calc( var(--thermal-gap) * 1.5);
        }

        tr.group-header {
            border-left: 1px solid var(--thermal-slate);
            border-right: 1px solid var(--thermal-slate);
            border-top: 1px solid var(--thermal-slate);
        }


        group-provider.group-files {

            display: table-row;

            border-left: 1px solid var(--thermal-slate);
            border-right: 1px solid var(--thermal-slate);
            border-bottom: 1px solid var(--thermal-slate);

            td {
                padding-bottom: var(--offset);
            }
        
        }

        file-provider {

            &:not(:last-child ) {
                .file {
                    margin-bottom: var(--thermal-gap);
                }
            }
        
        }
        

        .file {

            padding: var(--thermal-gap);
            border-radius: var(--thermal-radius);

            color: var(--thermal-foreground);
            background-color: var(--thermal-background);
        
            header {
                display: flex;
                width: 100%;
                align-items: center;
                padding-bottom: var(--offset);
                gap: 3px;
                h4 {
                    flex-grow: 1;
                }
            }

        }
    
    `;Pr([g({type:String,reflect:!0})],tr.prototype,"url",2);Pr([g({type:String,reflect:!0})],tr.prototype,"subfolder",2);Pr([g({type:String,reflect:!0})],tr.prototype,"by",2);Pr([C()],tr.prototype,"loading",2);Pr([g({type:String,reflect:!0})],tr.prototype,"license",2);Pr([g({type:String,reflect:!0})],tr.prototype,"label",2);Pr([g({type:String,reflect:!0})],tr.prototype,"author",2);Pr([C()],tr.prototype,"data",2);Pr([C()],tr.prototype,"heightRange",2);Pr([C()],tr.prototype,"heightFolders",2);Pr([g({type:String,reflect:!0,attribute:!0})],tr.prototype,"palette",2);tr=Pr([te("remote-grid-app")],tr);const Co=window.matchMedia("(prefers-color-scheme: dark)"),Pl="thermal-dark-mode",nc=()=>{document.body.classList.add(Pl)},G0=()=>{document.body.classList.remove(Pl)},V0=()=>{Co.matches&&nc();const r=e=>{e.matches?nc():G0()};Co.addEventListener("change",r),Co.addListener(r)},Y0=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},q0=Wo.toString().replaceAll(".","-"),X0=r=>`thermal__${r}__${q0}`,ac=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",X0(r)),t.innerHTML=e,document.head.appendChild(t)},K0=()=>{ac("rootVariables",`

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


            
        
        `),ac("darkModeOverrides",`
        
            body.${Pl} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};Y0();console.info(`@labir/embed ${Wo}
Author: ${ud}`);V0();K0();
