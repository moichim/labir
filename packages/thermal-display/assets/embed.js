var md=Object.defineProperty;var yd=(r,e,t)=>e in r?md(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(yd(r,typeof e!="symbol"?e+"":e,t),t);const Bo="1.2.64",vd="Jan Jáchim <jachim5@gmail.com>",_e=r=>typeof r=="string",As=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},eh=r=>r==null?"":""+r,bd=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},wd=/###/g,th=r=>r&&r.indexOf("###")>-1?r.replace(wd,"."):r,rh=r=>!r||_e(r),Ds=(r,e,t)=>{const i=_e(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(rh(r))return{};const n=th(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return rh(r)?{}:{obj:r,k:th(i[s])}},ih=(r,e,t)=>{const{obj:i,k:s}=Ds(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=Ds(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=Ds(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},xd=(r,e,t,i)=>{const{obj:s,k:n}=Ds(r,e,Object);s[n]=s[n]||[],s[n].push(t)},Gn=(r,e)=>{const{obj:t,k:i}=Ds(r,e);if(t)return t[i]},Sd=(r,e,t)=>{const i=Gn(r,t);return i!==void 0?i:Gn(e,t)},uc=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?_e(r[i])||r[i]instanceof String||_e(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):uc(r[i],e[i],t):r[i]=e[i]);return r},Qi=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var $d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const kd=r=>_e(r)?r.replace(/[&<>"'\/]/g,e=>$d[e]):r;class Pd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const _d=[" ",",","?","!",";"],Cd=new Pd(20),Ad=(r,e,t)=>{e=e||"",t=t||"";const i=_d.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=Cd.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},_o=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return r[e];const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Yn=r=>r==null?void 0:r.replace("_","-"),Od={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class qn{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Od,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(_e(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new qn(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new qn(this.logger,e)}}var Nr=new qn;class ga{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class sh extends ga{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,u;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):_e(i)&&n?o.push(...i.split(n)):o.push(i)));const l=Gn(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!_e(i)?l:_o((u=(h=this.data)==null?void 0:h[e])==null?void 0:u[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),ih(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(_e(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=Gn(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?uc(l,i,n):l={...l,...i},ih(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var dc={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const nh={};class Xn extends ga{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),bd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Nr.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Ad(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:_e(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:_e(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,u=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(u){const W=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${W}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${W}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const d=this.resolve(e,t);let p=d==null?void 0:d.res;const b=(d==null?void 0:d.usedKey)||a,w=(d==null?void 0:d.exactUsedKey)||a,S=Object.prototype.toString.apply(p),k=["[object Number]","[object Function]","[object RegExp]"],H=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,A=!this.i18nFormat||this.i18nFormat.handleAsObject,D=!_e(p)&&typeof p!="boolean"&&typeof p!="number";if(A&&p&&D&&k.indexOf(S)<0&&!(_e(H)&&Array.isArray(p))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const W=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,p,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(d.res=W,d.usedParams=this.getUsedParamsDetails(t),d):W}if(n){const W=Array.isArray(p),I=W?[]:{},K=W?w:b;for(const x in p)if(Object.prototype.hasOwnProperty.call(p,x)){const L=`${K}${n}${x}`;I[x]=this.translate(L,{...t,joinArrays:!1,ns:o}),I[x]===L&&(I[x]=p[x])}p=I}}else if(A&&_e(H)&&Array.isArray(p))p=p.join(H),p&&(p=this.extendTranslation(p,e,t,i));else{let W=!1,I=!1;const K=t.count!==void 0&&!_e(t.count),x=Xn.hasDefaultValue(t),L=K?this.pluralResolver.getSuffix(h,t.count,t):"",T=t.ordinal&&K?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",M=K&&!t.ordinal&&t.count===0,V=M&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${L}`]||t[`defaultValue${T}`]||t.defaultValue;!this.isValidLookup(p)&&x&&(W=!0,p=V),this.isValidLookup(p)||(I=!0,p=a);const j=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:p,R=x&&V!==p&&this.options.updateMissing;if(I||W||R){if(this.logger.log(R?"updateKey":"missingKey",h,l,a,R?V:p),n){const F=this.resolve(a,{...t,keySeparator:!1});F&&F.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let q=[];const oe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&oe&&oe[0])for(let F=0;F<oe.length;F++)q.push(oe[F]);else this.options.saveMissingTo==="all"?q=this.languageUtils.toResolveHierarchy(t.lng||this.language):q.push(t.lng||this.language);const $=(F,fe,ie)=>{var Be;const De=x&&ie!==p?ie:j;this.options.missingKeyHandler?this.options.missingKeyHandler(F,l,fe,De,R,t):(Be=this.backendConnector)!=null&&Be.saveMissing&&this.backendConnector.saveMissing(F,l,fe,De,R,t),this.emit("missingKey",F,l,fe,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&K?q.forEach(F=>{const fe=this.pluralResolver.getSuffixes(F,t);M&&t[`defaultValue${this.options.pluralSeparator}zero`]&&fe.indexOf(`${this.options.pluralSeparator}zero`)<0&&fe.push(`${this.options.pluralSeparator}zero`),fe.forEach(ie=>{$([F],a+ie,t[`defaultValue${ie}`]||V)})}):$(q,a,V))}p=this.extendTranslation(p,e,t,d,i),I&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${l}:${a}`),(I||W)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,W?p:void 0))}return s?(d.res=p,d.usedParams=this.getUsedParamsDetails(t),d):p}extendTranslation(e,t,i,s,n){var h,u;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=_e(e)&&(((u=i==null?void 0:i.interpolation)==null?void 0:u.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const w=e.match(this.interpolator.nestingRegexp);p=w&&w.length}let b=i.replace&&!_e(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),e=this.interpolator.interpolate(e,b,i.lng||this.language||s.usedLng,i),d){const w=e.match(this.interpolator.nestingRegexp),S=w&&w.length;p<S&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var w=arguments.length,S=new Array(w),k=0;k<w;k++)S[k]=arguments[k];return(n==null?void 0:n[0])===S[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`),null):a.translate(...S,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=_e(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=dc.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return _e(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),u=h.key;s=u;let d=h.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const p=t.count!==void 0&&!_e(t.count),b=p&&!t.ordinal&&t.count===0,w=t.context!==void 0&&(_e(t.context)||typeof t.context=="number")&&t.context!=="",S=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);d.forEach(k=>{var H,A;this.isValidLookup(i)||(o=k,!nh[`${S[0]}-${k}`]&&((H=this.utils)!=null&&H.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(o))&&(nh[`${S[0]}-${k}`]=!0,this.logger.warn(`key "${s}" for languages "${S.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(D=>{var K;if(this.isValidLookup(i))return;a=D;const W=[u];if((K=this.i18nFormat)!=null&&K.addLookupKeys)this.i18nFormat.addLookupKeys(W,u,D,k,t);else{let x;p&&(x=this.pluralResolver.getSuffix(D,t.count,t));const L=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(W.push(u+x),t.ordinal&&x.indexOf(T)===0&&W.push(u+x.replace(T,this.options.pluralSeparator)),b&&W.push(u+L)),w){const M=`${u}${this.options.contextSeparator}${t.context}`;W.push(M),p&&(W.push(M+x),t.ordinal&&x.indexOf(T)===0&&W.push(M+x.replace(T,this.options.pluralSeparator)),b&&W.push(M+L))}}let I;for(;I=W.pop();)this.isValidLookup(i)||(n=I,i=this.getResource(D,k,I,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!_e(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class ah{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Nr.create("languageUtils")}getScriptPartFromCode(e){if(e=Yn(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Yn(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(_e(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),_e(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return _e(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):_e(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const oh={zero:0,one:1,two:2,few:3,many:4,other:5},lh={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Ed{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Nr.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Yn(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),lh;if(!e.match(/-|_/))return lh;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>oh[s]-oh[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const hh=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=Sd(r,e,t);return!n&&s&&_e(t)&&(n=_o(r,t,i),n===void 0&&(n=_o(e,t,i))),n},fo=r=>r.replace(/\$/g,"$$$$");class Ld{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Nr.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:p,nestingPrefixEscaped:b,nestingSuffix:w,nestingSuffixEscaped:S,nestingOptionsSeparator:k,maxReplaces:H,alwaysFormat:A}=e.interpolation;this.escape=t!==void 0?t:kd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Qi(n):a||"{{",this.suffix=o?Qi(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?Qi(p):b||Qi("$t("),this.nestingSuffix=w?Qi(w):S||Qi(")"),this.nestingOptionsSeparator=k||",",this.maxReplaces=H||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var b;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=w=>{if(w.indexOf(this.formatSeparator)<0){const A=hh(t,l,w,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...s,...t,interpolationkey:w}):A}const S=w.split(this.formatSeparator),k=S.shift().trim(),H=S.join(this.formatSeparator).trim();return this.format(hh(t,l,k,this.options.keySeparator,this.options.ignoreJSONStructure),H,i,{...s,...t,interpolationkey:k})};this.resetRegExp();const u=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,d=((b=s==null?void 0:s.interpolation)==null?void 0:b.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:w=>fo(w)},{regex:this.regexp,safeValue:w=>this.escapeValue?fo(this.escape(w)):fo(w)}].forEach(w=>{for(o=0;n=w.regex.exec(e);){const S=n[1].trim();if(a=h(S),a===void 0)if(typeof u=="function"){const H=u(e,n,s);a=_e(H)?H:""}else if(s&&Object.prototype.hasOwnProperty.call(s,S))a="";else if(d){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${e}`),a="";else!_e(a)&&!this.useRawValueToEscape&&(a=eh(a));const k=w.safeValue(a);if(e=e.replace(n[0],k),d?(w.regex.lastIndex+=a.length,w.regex.lastIndex-=n[0].length):w.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let p=`{${d[1]}`;l=d[0],p=this.interpolate(p,a);const b=p.match(/'/g),w=p.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!w||w.length%2!==0)&&(p=p.replace(/'/g,'"'));try{a=JSON.parse(p),h&&(a={...h,...a})}catch(S){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,S),`${l}${u}${p}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!_e(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const u=s[1].split(this.formatSeparator).map(d=>d.trim());s[1]=u.shift(),l=u,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!_e(n))return n;_e(n)||(n=eh(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((u,d)=>this.format(u,d,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const Dd=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=h),h==="false"&&(t[u]=!1),h==="true"&&(t[u]=!0),isNaN(h)||(t[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},es=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Yn(i),s),e[a]=o),o(t)}};class Rd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Nr.create("formatter"),this.options=e,this.formats={number:es((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:es((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:es((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:es((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:es((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=es(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var d;const{formatName:h,formatOptions:u}=Dd(l);if(this.formats[h]){let p=o;try{const b=((d=s==null?void 0:s.formatParams)==null?void 0:d[s.interpolationkey])||{},w=b.locale||b.lng||s.locale||s.lng||i;p=this.formats[h](o,w,{...u,...s,...b})}catch(b){this.logger.warn(b)}return p}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Md=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Td extends ga{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Nr.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let u=!0;t.forEach(d=>{const p=`${h}|${d}`;!i.reload&&this.store.hasResourceBundle(h,d)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?a[p]===void 0&&(a[p]=!0):(this.state[p]=1,u=!1,a[p]===void 0&&(a[p]=!0),n[p]===void 0&&(n[p]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{xd(l.loaded,[n],a),Md(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const u=l.loaded[h];u.length&&u.forEach(d=>{o[h][d]===void 0&&(o[h][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(h&&u&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(u=>o(null,u)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();_e(e)&&(e=this.languageUtils.toResolveHierarchy(e)),_e(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,u,d,p;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((d=(u=this.services)==null?void 0:u.utils)!=null&&d.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((p=this.backend)!=null&&p.create){const b={...a,isUpdate:n},w=this.backend.create.bind(this.backend);if(w.length<6)try{let S;w.length===5?S=w(e,t,i,s,b):S=w(e,t,i,s),S&&typeof S.then=="function"?S.then(k=>o(null,k)).catch(o):o(null,S)}catch(S){o(S)}else w(e,t,i,s,o,b)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const ch=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),_e(r[1])&&(e.defaultValue=r[1]),_e(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),uh=r=>{var e,t;return _e(r.ns)&&(r.ns=[r.ns]),_e(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),_e(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Rn=()=>{},Id=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Us extends ga{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=uh(e),this.services={},this.logger=Nr,this.modules={external:[]},Id(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(_e(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=ch();this.options={...s,...this.options,...uh(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Nr.init(n(this.modules.logger),this.options):Nr.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=Rd;const d=new ah(this.options);this.store=new sh(this.options.resources,this.options);const p=this.services;p.logger=Nr,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new Ed(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(p.formatter=n(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Ld(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Td(n(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(b){for(var w=arguments.length,S=new Array(w>1?w-1:0),k=1;k<w;k++)S[k-1]=arguments[k];e.emit(b,...S)}),this.modules.languageDetector&&(p.languageDetector=n(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=n(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Xn(this.services,this.options),this.translator.on("*",function(b){for(var w=arguments.length,S=new Array(w>1?w-1:0),k=1;k<w;k++)S[k-1]=arguments[k];e.emit(b,...S)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Rn),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=As(),h=()=>{const u=(d,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(p),i(d,p)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn;const s=_e(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>l(u)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=As();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Rn),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&dc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=As();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var u,d;!e&&!l&&this.services.languageDetector&&(l=[]);const h=_e(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(d=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||d.call(u,h)),this.loadResources(h,p=>{a(p,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),d=2;d<h;d++)u[d-2]=arguments[d];l=s.options.overloadTranslationOptionHandler([a,o].concat(u))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const p=s.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(w=>`${l.keyPrefix}${p}${w}`):b=l.keyPrefix?`${l.keyPrefix}${p}${a}`:a,s.t(b,l)};return _e(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=As();return this.options.ns?(_e(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=As();_e(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new ah(ch());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Us(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rn;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Us(s);return(e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i&&(n.store=new sh(this.store.data,s),n.services.resourceStore=n.store),n.translator=new Xn(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),u=1;u<l;u++)h[u-1]=arguments[u];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ut=Us.createInstance();ut.createInstance=Us.createInstance;ut.createInstance;ut.dir;ut.init;ut.loadResources;ut.reloadResources;ut.use;ut.changeLanguage;ut.getFixedT;const _=ut.t;ut.exists;ut.setDefaultNamespace;ut.hasLoadedNamespace;ut.loadNamespaces;ut.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=globalThis,Kn=Rs.trustedTypes,dh=Kn?Kn.createPolicy("lit-html",{createHTML:r=>r}):void 0,pc="$lit$",bi=`lit$${Math.random().toFixed(9).slice(2)}$`,fc="?"+bi,Ud=`<${fc}>`,Ni=document,zs=()=>Ni.createComment(""),Fs=r=>r===null||typeof r!="object"&&typeof r!="function",gc=Array.isArray,zd=r=>gc(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",go=`[ 	
\f\r]`,Os=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ph=/-->/g,fh=/>/g,Ui=RegExp(`>|${go}(?:([^\\s"'>=/]+)(${go}*=${go}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gh=/'/g,mh=/"/g,mc=/^(?:script|style|textarea|title)$/i,Fd=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Fd(1),Si=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),yh=new WeakMap,ji=Ni.createTreeWalker(Ni,129);function yc(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return dh!==void 0?dh.createHTML(e):e}const jd=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":"",a=Os;for(let o=0;o<t;o++){const l=r[o];let h,u,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,u=a.exec(l),u!==null);)p=a.lastIndex,a===Os?u[1]==="!--"?a=ph:u[1]!==void 0?a=fh:u[2]!==void 0?(mc.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=Ui):u[3]!==void 0&&(a=Ui):a===Ui?u[0]===">"?(a=s??Os,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?Ui:u[3]==='"'?mh:gh):a===mh||a===gh?a=Ui:a===ph||a===fh?a=Os:(a=Ui,s=void 0);const b=a===Ui&&r[o+1].startsWith("/>")?" ":"";n+=a===Os?l+Ud:d>=0?(i.push(h),l.slice(0,d)+pc+l.slice(d)+bi+b):l+bi+(d===-2?o:b)}return[yc(r,n+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};let Co=class vc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,u]=jd(e,t);if(this.el=vc.createElement(h,i),ji.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=ji.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(pc)){const p=u[a++],b=s.getAttribute(d).split(bi),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:w[2],strings:b,ctor:w[1]==="."?Wd:w[1]==="?"?Hd:w[1]==="@"?Bd:ma}),s.removeAttribute(d)}else d.startsWith(bi)&&(l.push({type:6,index:n}),s.removeAttribute(d));if(mc.test(s.tagName)){const d=s.textContent.split(bi),p=d.length-1;if(p>0){s.textContent=Kn?Kn.emptyScript:"";for(let b=0;b<p;b++)s.append(d[b],zs()),ji.nextNode(),l.push({type:2,index:++n});s.append(d[p],zs())}}}else if(s.nodeType===8)if(s.data===fc)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(bi,d+1))!==-1;)l.push({type:7,index:n}),d+=bi.length-1}n++}}static createElement(e,t){const i=Ni.createElement("template");return i.innerHTML=e,i}};function os(r,e,t=r,i){var a,o;if(e===Si)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=Fs(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=os(r,s._$AS(r,e.values),s,i)),e}let Nd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Ni).importNode(t,!0);ji.currentNode=s;let n=ji.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new en(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Vd(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=ji.nextNode(),a++)}return ji.currentNode=Ni,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class en{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=os(this,e,t),Fs(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==Si&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zd(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==E&&Fs(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ni.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Co.createElement(yc(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Nd(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=yh.get(e.strings);return t===void 0&&yh.set(e.strings,t=new Co(e)),t}k(e){gc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new en(this.S(zs()),this.S(zs()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}let ma=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=os(this,e,t,0),a=!Fs(e)||e!==this._$AH&&e!==Si,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=os(this,o[i+l],t,l),h===Si&&(h=this._$AH[l]),a||(a=!Fs(h)||h!==this._$AH[l]),h===E?e=E:e!==E&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Wd=class extends ma{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}};class Hd extends ma{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}}class Bd extends ma{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=os(this,e,t,0)??E)===Si)return;const i=this._$AH,s=e===E&&i!==E||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==E&&(i===E||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}let Vd=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){os(this,e)}};const mo=Rs.litHtmlPolyfillSupport;mo==null||mo(Co,en),(Rs.litHtmlVersions??(Rs.litHtmlVersions=[])).push("3.1.4");const Gd=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new en(e.insertBefore(zs(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yd=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ri={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ya=r=>(...e)=>({_$litDirective$:r,values:e});let Vo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Ms(s,e);return!0},Jn=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},bc=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),Kd(e)}};function qd(r){this._$AN!==void 0?(Jn(this),this._$AM=r,bc(this)):this._$AM=r}function Xd(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)Ms(i[n],!1),Jn(i[n]);else i!=null&&(Ms(i,!1),Jn(i));else Ms(this,r)}const Kd=r=>{r.type==ri.CHILD&&(r._$AP??(r._$AP=Xd),r._$AQ??(r._$AQ=qd))};let Jd=class extends Vo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),bc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Ms(this,e),Jn(this))}setValue(e){if(Yd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},vh=null,wc=()=>{};new Promise(r=>{wc=r});const Zd={type:"3rdParty",init(r){Qd(r)}},Qd=r=>{vh=r,wc(vh)},bh=new Map,ep=()=>{bh.forEach((r,e)=>{(e.isConnected===!1||tp(e)===!1)&&bh.delete(e)})};setInterval(ep,1e4);const tp=r=>{const e=r.part;if(e.type===ri.ATTRIBUTE)return e.element.isConnected;if(e.type===ri.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===ri.PROPERTY||e.type===ri.BOOLEAN_ATTRIBUTE||e.type===ri.EVENT||e.type===ri.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:rp,forEach:ip}=[];function sp(r){return ip.call(rp.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const wh=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,np=(r,e,t)=>{const i=t||{};i.path=i.path||"/";const s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!wh.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!wh.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},xh={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=np(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var ap={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return xh.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&xh.create(t,r,i,s,n)}},op={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let Es=null;const Sh=()=>{if(Es!==null)return Es;try{Es=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{Es=!1}return Es};var lp={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Sh())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Sh()&&window.localStorage.setItem(t,r)}};let Ls=null;const $h=()=>{if(Ls!==null)return Ls;try{Ls=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{Ls=!1}return Ls};var hp={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&$h())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&$h()&&window.sessionStorage.setItem(t,r)}},cp={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},up={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},dp={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},pp={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};function fp(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r}}class xc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=sp(t,this.options||{},fp()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(ap),this.addDetector(op),this.addDetector(lp),this.addDetector(hp),this.addDetector(cp),this.addDetector(up),this.addDetector(dp),this.addDetector(pp)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e,t){t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}xc.type="languageDetector";const gp={loading:"Loading",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automaticrange",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visible file name",visiblefileurl:"Visible file URL",visiblefiledownload:"Visible file download",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},mp={loading:"Loading",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visible",visiblefileurl:"URL de l'image visible",visiblefiledownload:"Télécharger l'image visible",time:"Temps",duration:"Duration",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Type du fichier",type:"Type",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous également afficher",youmayalsoadd:"Vous pouvez également afficher",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Cadre",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes douces",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieur",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieur",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format csv",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},yp={loading:"Načítám",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},vp={loading:"Loading",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r llun isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch y wraddfa thermol yn awtomatig neu cyflewch y wraddfa i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangosfa thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weladwy",visiblefileurl:"URL ffeil weladwy",visiblefiledownload:"Lawrlwythwch y ffeil weladwy",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"grwpio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau dangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"fesul dydd",byhours:"fesul awr",byweeks:"fesul wythnos",bymonths:"fesul mis",byyears:"fesul blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y llun isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y llun isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},bp={loading:"Loading",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};ut.use(Zd).use(xc).init({fallbackLng:"en",resources:{cs:{translation:yp},cy:{translation:vp},de:{translation:bp},en:{translation:gp},fr:{translation:mp}}});window.i18next=ut;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,Go=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yo=Symbol(),kh=new WeakMap;let Sc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Go&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=kh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&kh.set(t,e))}return e}toString(){return this.cssText}};const wp=r=>new Sc(typeof r=="string"?r:r+"",void 0,Yo),ge=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Sc(t,r,Yo)},xp=(r,e)=>{if(Go)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Nn.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Ph=Go?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return wp(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sp,defineProperty:$p,getOwnPropertyDescriptor:kp,getOwnPropertyNames:Pp,getOwnPropertySymbols:_p,getPrototypeOf:Cp}=Object,wi=globalThis,_h=wi.trustedTypes,Ap=_h?_h.emptyScript:"",yo=wi.reactiveElementPolyfillSupport,Ts=(r,e)=>r,Zn={toAttribute(r,e){switch(e){case Boolean:r=r?Ap:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},qo=(r,e)=>!Sp(r,e),Ch={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:qo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),wi.litPropertyMetadata??(wi.litPropertyMetadata=new WeakMap);let ss=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ch){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&$p(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=kp(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ch}static _$Ei(){if(this.hasOwnProperty(Ts("elementProperties")))return;const e=Cp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ts("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ts("properties"))){const t=this.properties,i=[...Pp(t),..._p(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Ph(s))}else e!==void 0&&t.push(Ph(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xp(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Zn).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Zn;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??qo)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};ss.elementStyles=[],ss.shadowRootOptions={mode:"open"},ss[Ts("elementProperties")]=new Map,ss[Ts("finalized")]=new Map,yo==null||yo({ReactiveElement:ss}),(wi.reactiveElementVersions??(wi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cr=class extends ss{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Si}};var cc;cr._$litElement$=!0,cr.finalized=!0,(cc=globalThis.litElementHydrateSupport)==null||cc.call(globalThis,{LitElement:cr});const vo=globalThis.litElementPolyfillSupport;vo==null||vo({LitElement:cr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Op={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:qo},Ep=(r=Op,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(e,t)=>typeof t=="object"?Ep(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lp=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ei(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Lp(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Dp={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Mn(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Tn(r){return r.toString().indexOf("`")===-1}Tn(r=>r``)||Tn(r=>r`\0`)||Tn(r=>r`\n`)||Tn(r=>r`\u0000`);Mn``&&Mn`\0`&&Mn`\n`&&Mn`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Rp="google#safe";function Mp(){if(typeof window<"u")return window.trustedTypes}function $c(){var r;return(r=Mp())!==null&&r!==void 0?r:null}let In;function Tp(){var r,e;if(In===void 0)try{In=(e=(r=$c())===null||r===void 0?void 0:r.createPolicy(Rp,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{In=null}return In}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class kc{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Ah(r){var e;const t=r,i=(e=Tp())===null||e===void 0?void 0:e.createScriptURL(t);return i??new kc(t,Dp)}function Ip(r){var e;if(!((e=$c())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof kc)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Up(r,...e){if(e.length===0)return Ah(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return Ah(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function zp(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Fp(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=zp(e||window);t&&r.setAttribute("nonce",t)}function jp(r,e,t){r.src=Ip(e),Fp(r)}/**
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
 */const Np=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),jp(t,Up`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Pc(r={}){await Np;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Oh(r){if(await Pc(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Wp(r){return await Pc(),new google.visualization.ChartWrapper({container:r})}function Ot(r){const e=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&e==="[object Date]"?new r.constructor(+r):typeof r=="number"||e==="[object Number]"||typeof r=="string"||e==="[object String]"?new Date(r):new Date(NaN)}function Wi(r,e){return r instanceof Date?new r.constructor(e):new Date(e)}const _c=6048e5,Hp=864e5;let Bp={};function tn(){return Bp}function si(r,e){var o,l,h,u;const t=tn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,s=Ot(r),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Qn(r){return si(r,{weekStartsOn:1})}function Cc(r){const e=Ot(r),t=e.getFullYear(),i=Wi(r,0);i.setFullYear(t+1,0,4),i.setHours(0,0,0,0);const s=Qn(i),n=Wi(r,0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);const a=Qn(n);return e.getTime()>=s.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function ea(r){const e=Ot(r);return e.setHours(0,0,0,0),e}function Eh(r){const e=Ot(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Vp(r,e){const t=ea(r),i=ea(e),s=+t-Eh(t),n=+i-Eh(i);return Math.round((s-n)/Hp)}function Gp(r){const e=Cc(r),t=Wi(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),Qn(t)}function Yp(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Ac(r){if(!Yp(r)&&typeof r!="number")return!1;const e=Ot(r);return!isNaN(Number(e))}function Oc(r){const e=Ot(r);return e.setHours(23,59,59,999),e}function ta(r){const e=Ot(r),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function ra(r){const e=Ot(r);return e.setDate(1),e.setHours(0,0,0,0),e}function Ec(r){const e=Ot(r),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Xo(r){const e=Ot(r),t=Wi(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Lc(r){const e=Ot(r);return e.setMinutes(59,59,999),e}function ia(r,e){var o,l;const t=tn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=Ot(r),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const qp={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Dc=(r,e,t)=>{let i;const s=qp[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Dt(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Xp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Zp={date:Dt({formats:Xp,defaultWidth:"full"}),time:Dt({formats:Kp,defaultWidth:"full"}),dateTime:Dt({formats:Jp,defaultWidth:"full"})},Qp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Rc=(r,e,t,i)=>Qp[r];function nt(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const ef={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},tf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},rf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sf={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},af={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},of=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Mc={ordinalNumber:of,era:nt({values:ef,defaultWidth:"wide"}),quarter:nt({values:tf,defaultWidth:"wide",argumentCallback:r=>r-1}),month:nt({values:rf,defaultWidth:"wide"}),day:nt({values:sf,defaultWidth:"wide"}),dayPeriod:nt({values:nf,defaultWidth:"wide",formattingValues:af,defaultFormattingWidth:"wide"})};function at(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?hf(o,d=>d.test(a)):lf(o,d=>d.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const u=e.slice(a.length);return{value:h,rest:u}}}function lf(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function hf(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function rn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const cf=/^(\d+)(th|st|nd|rd)?/i,uf=/\d+/i,df={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pf={any:[/^b/i,/^(a|c)/i]},ff={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gf={any:[/1/i,/2/i,/3/i,/4/i]},mf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vf={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bf={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wf={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xf={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Tc={ordinalNumber:rn({matchPattern:cf,parsePattern:uf,valueCallback:r=>parseInt(r,10)}),era:at({matchPatterns:df,defaultMatchWidth:"wide",parsePatterns:pf,defaultParseWidth:"any"}),quarter:at({matchPatterns:ff,defaultMatchWidth:"wide",parsePatterns:gf,defaultParseWidth:"any",valueCallback:r=>r+1}),month:at({matchPatterns:mf,defaultMatchWidth:"wide",parsePatterns:yf,defaultParseWidth:"any"}),day:at({matchPatterns:vf,defaultMatchWidth:"wide",parsePatterns:bf,defaultParseWidth:"any"}),dayPeriod:at({matchPatterns:wf,defaultMatchWidth:"any",parsePatterns:xf,defaultParseWidth:"any"})},Sf={code:"en-US",formatDistance:Dc,formatLong:Zp,formatRelative:Rc,localize:Mc,match:Tc,options:{weekStartsOn:0,firstWeekContainsDate:1}};function $f(r){const e=Ot(r);return Vp(e,Xo(e))+1}function kf(r){const e=Ot(r),t=+Qn(e)-+Gp(e);return Math.round(t/_c)+1}function Ic(r,e){var u,d,p,b;const t=Ot(r),i=t.getFullYear(),s=tn(),n=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(p=s.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,a=Wi(r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=si(a,e),l=Wi(r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=si(l,e);return t.getTime()>=o.getTime()?i+1:t.getTime()>=h.getTime()?i:i-1}function Pf(r,e){var o,l,h,u;const t=tn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(h=t.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,s=Ic(r,e),n=Wi(r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),si(n,e)}function _f(r,e){const t=Ot(r),i=+si(t,e)-+Pf(t,e);return Math.round(i/_c)+1}function je(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const vi={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return je(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):je(t+1,2)},d(r,e){return je(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return je(r.getHours()%12||12,e.length)},H(r,e){return je(r.getHours(),e.length)},m(r,e){return je(r.getMinutes(),e.length)},s(r,e){return je(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return je(s,e.length)}},ts={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Lh={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return vi.y(r,e)},Y:function(r,e,t,i){const s=Ic(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return je(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):je(n,e.length)},R:function(r,e){const t=Cc(r);return je(t,e.length)},u:function(r,e){const t=r.getFullYear();return je(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return je(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return je(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return vi.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return je(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=_f(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):je(s,e.length)},I:function(r,e,t){const i=kf(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):je(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):vi.d(r,e)},D:function(r,e,t){const i=$f(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):je(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return je(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return je(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return je(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=ts.noon:i===0?s=ts.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=ts.evening:i>=12?s=ts.afternoon:i>=4?s=ts.morning:s=ts.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return vi.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):vi.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):je(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):je(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):vi.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):vi.s(r,e)},S:function(r,e){return vi.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Rh(i);case"XXXX":case"XX":return zi(i);case"XXXXX":case"XXX":default:return zi(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return Rh(i);case"xxxx":case"xx":return zi(i);case"xxxxx":case"xxx":default:return zi(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Dh(i,":");case"OOOO":default:return"GMT"+zi(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Dh(i,":");case"zzzz":default:return"GMT"+zi(i,":")}},t:function(r,e,t){const i=Math.trunc(r.getTime()/1e3);return je(i,e.length)},T:function(r,e,t){const i=r.getTime();return je(i,e.length)}};function Dh(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+je(n,2)}function Rh(r,e){return r%60===0?(r>0?"-":"+")+je(Math.abs(r)/60,2):zi(r,e)}function zi(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=je(Math.trunc(i/60),2),n=je(i%60,2);return t+s+e+n}const Mh=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Uc=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Cf=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return Mh(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Mh(i,e)).replace("{{time}}",Uc(s,e))},Af={p:Uc,P:Cf},Of=/^D+$/,Ef=/^Y+$/,Lf=["D","DD","YY","YYYY"];function Df(r){return Of.test(r)}function Rf(r){return Ef.test(r)}function Mf(r,e,t){const i=Tf(r,e,t);if(console.warn(i),Lf.includes(r))throw new RangeError(i)}function Tf(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const If=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Uf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zf=/^'([^]*?)'?$/,Ff=/''/g,jf=/[a-zA-Z]/;function ke(r,e,t){var u,d,p,b,w,S,k,H;const i=tn(),s=(t==null?void 0:t.locale)??i.locale??Sf,n=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(p=i.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((S=(w=t==null?void 0:t.locale)==null?void 0:w.options)==null?void 0:S.weekStartsOn)??i.weekStartsOn??((H=(k=i.locale)==null?void 0:k.options)==null?void 0:H.weekStartsOn)??0,o=Ot(r);if(!Ac(o))throw new RangeError("Invalid time value");let l=e.match(Uf).map(A=>{const D=A[0];if(D==="p"||D==="P"){const W=Af[D];return W(A,s.formatLong)}return A}).join("").match(If).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const D=A[0];if(D==="'")return{isToken:!1,value:Nf(A)};if(Lh[D])return{isToken:!0,value:A};if(D.match(jf))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(A=>{if(!A.isToken)return A.value;const D=A.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Rf(D)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Df(D))&&Mf(D,e,String(r));const W=Lh[D[0]];return W(o,D,s.localize,h)}).join("")}function Nf(r){const e=r.match(zf);return e?e[1].replace(Ff,"'"):r}function bo(r,e){const t=Ot(r);if(!Ac(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=je(t.getDate(),2),h=je(t.getMonth()+1,2);n=`${je(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=je(t.getHours(),2),h=je(t.getMinutes(),2),u=je(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${u}`}return n}function zc(r){const e=Ot(r);return e.setMinutes(0,0,0),e}var Wf={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Hf=`\r
`,Bf="\uFEFF",sn=r=>Object.assign({},Wf,r);class Vf extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let Gf=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class Yf extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class qf extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var ms=r=>r,dr=r=>r,Is=ms,va=ms,ls=ms,Th=ms,Ih=ms,Xf=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},Kf=r=>Th(typeof r=="object"?r.key:r),Jf=r=>Ih(typeof r=="object"?r.displayLabel:r),Zf=(r,...e)=>e.reduce((t,i)=>i(t),r),Qf=r=>e=>r.useBom?va(dr(e)+Bf):e,eg=r=>e=>r.showTitle?Ko(va(dr(e)+r.title))(ls("")):e,Ko=r=>e=>va(dr(r)+dr(e)+Hf),Fc=r=>(e,t)=>tg(r)(ls(dr(e)+dr(t))),tg=r=>e=>ms(dr(e)+r.fieldSeparator),rg=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Gf("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=ls("");for(let s=0;s<e.length;s++){const n=Jf(e[s]);i=Fc(r)(i,jc(r,dr(n)))}return i=ls(dr(i).slice(0,-1)),Ko(t)(i)},ig=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=ls("");for(let o=0;o<e.length;o++){const l=Kf(e[o]),h=t[n][dr(l)];a=Fc(r)(a,jc(r,h))}a=ls(dr(a).slice(0,-1)),s=Ko(s)(a)}return s},sg=r=>+r===r&&(!isFinite(r)||!!(r%1)),ng=(r,e)=>{if(sg(e)){if(r.decimalSeparator==="locale")return Is(e.toLocaleString());if(r.decimalSeparator)return Is(e.toString().replace(".",r.decimalSeparator))}return Is(e.toString())},Wn=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+Xf(e,r.quoteCharacter)+r.quoteCharacter),Is(t)},ag=(r,e)=>{const t=e?"true":"false";return Is(r.boolDisplay[t])},og=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Wn(r,r.replaceUndefinedWith+""):e===null?Wn(r,"null"):Wn(r,""),jc=(r,e)=>{if(typeof e=="number")return ng(r,e);if(typeof e=="string")return Wn(r,e);if(typeof e=="boolean"&&r.boolDisplay)return ag(r,e);if(e===null||typeof e>"u")return og(r,e);throw new qf(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},Nc=r=>e=>{const t=sn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=Zf(va(""),Qf(t),eg(t),rg(t,i),ig(t,i,e));if(dr(s).length<1)throw new Vf("Output is empty. Is your data formatted correctly?");return s},lg=r=>e=>{const t=sn(r),i=dr(e),s=t.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Wc=r=>e=>{if(!window)throw new Yf("Downloading only supported in a browser environment.");const t=lg(r)(e),i=sn(r),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},hg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function ug(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Hc={exports:{}};(function(r){(function(e){var t=D(),i=W(),s=I(),n=K(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:u,toJpeg:d,toBlob:p,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(x,L){return L=L||{},b(L),Promise.resolve(x).then(function(M){return S(M,L.filter,!0)}).then(k).then(H).then(T).then(function(M){return A(M,L.width||t.width(x),L.height||t.height(x))});function T(M){return L.bgcolor&&(M.style.backgroundColor=L.bgcolor),L.width&&(M.style.width=L.width+"px"),L.height&&(M.style.height=L.height+"px"),L.style&&Object.keys(L.style).forEach(function(V){M.style[V]=L.style[V]}),M}}function h(x,L){return w(x,L||{}).then(function(T){return T.getContext("2d").getImageData(0,0,t.width(x),t.height(x)).data})}function u(x,L){return w(x,L||{}).then(function(T){return T.toDataURL()})}function d(x,L){return L=L||{},w(x,L).then(function(T){return T.toDataURL("image/jpeg",L.quality||1)})}function p(x,L){return w(x,L||{}).then(t.canvasToBlob)}function b(x){typeof x.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=x.imagePlaceholder,typeof x.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=x.cacheBust}function w(x,L){return l(x,L).then(t.makeImage).then(t.delay(100)).then(function(M){var V=T(x);return V.getContext("2d").drawImage(M,0,0),V});function T(M){var V=document.createElement("canvas");if(V.width=L.width||t.width(M),V.height=L.height||t.height(M),L.bgcolor){var z=V.getContext("2d");z.fillStyle=L.bgcolor,z.fillRect(0,0,V.width,V.height)}return V}}function S(x,L,T){if(!T&&L&&!L(x))return Promise.resolve();return Promise.resolve(x).then(M).then(function(j){return V(x,j,L)}).then(function(j){return z(x,j)});function M(j){return j instanceof HTMLCanvasElement?t.makeImage(j.toDataURL()):j.cloneNode(!1)}function V(j,R,q){var oe=j.childNodes;if(oe.length===0)return Promise.resolve(R);return $(R,t.asArray(oe),q).then(function(){return R});function $(F,fe,ie){var De=Promise.resolve();return fe.forEach(function(Be){De=De.then(function(){return S(Be,ie)}).then(function(ht){ht&&F.appendChild(ht)})}),De}}function z(j,R){if(!(R instanceof Element))return R;return Promise.resolve().then(q).then(oe).then($).then(F).then(function(){return R});function q(){fe(window.getComputedStyle(j),R.style);function fe(ie,De){ie.cssText?De.cssText=ie.cssText:Be(ie,De);function Be(ht,rt){t.asArray(ht).forEach(function(se){rt.setProperty(se,ht.getPropertyValue(se),ht.getPropertyPriority(se))})}}}function oe(){[":before",":after"].forEach(function(ie){fe(ie)});function fe(ie){var De=window.getComputedStyle(j,ie),Be=De.getPropertyValue("content");if(Be===""||Be==="none")return;var ht=t.uid();R.className=R.className+" "+ht;var rt=document.createElement("style");rt.appendChild(se(ht,ie,De)),R.appendChild(rt);function se(he,Ce,Re){var Je="."+he+":"+Ce,Ie=Re.cssText?gi(Re):Mi(Re);return document.createTextNode(Je+"{"+Ie+"}");function gi(Ze){var lr=Ze.getPropertyValue("content");return Ze.cssText+" content: "+lr+";"}function Mi(Ze){return t.asArray(Ze).map(lr).join("; ")+";";function lr(Qr){return Qr+": "+Ze.getPropertyValue(Qr)+(Ze.getPropertyPriority(Qr)?" !important":"")}}}}}function $(){j instanceof HTMLTextAreaElement&&(R.innerHTML=j.value),j instanceof HTMLInputElement&&R.setAttribute("value",j.value)}function F(){R instanceof SVGElement&&(R.setAttribute("xmlns","http://www.w3.org/2000/svg"),R instanceof SVGRectElement&&["width","height"].forEach(function(fe){var ie=R.getAttribute(fe);ie&&R.style.setProperty(fe,ie)}))}}}function k(x){return s.resolveAll().then(function(L){var T=document.createElement("style");return x.appendChild(T),T.appendChild(document.createTextNode(L)),x})}function H(x){return n.inlineAll(x).then(function(){return x})}function A(x,L,T){return Promise.resolve(x).then(function(M){return M.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(M)}).then(t.escapeXhtml).then(function(M){return'<foreignObject x="0" y="0" width="100%" height="100%">'+M+"</foreignObject>"}).then(function(M){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+L+'" height="'+T+'">'+M+"</svg>"}).then(function(M){return"data:image/svg+xml;charset=utf-8,"+M})}function D(){return{escape:F,parseExtension:L,mimeType:T,dataAsUrl:$,isDataUrl:M,canvasToBlob:z,resolveUrl:j,getAndEncode:oe,uid:R(),delay:fe,asArray:ie,escapeXhtml:De,makeImage:q,width:Be,height:ht};function x(){var se="application/font-woff",he="image/jpeg";return{woff:se,woff2:se,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:he,jpeg:he,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function L(se){var he=/\.([^\.\/]*?)$/g.exec(se);return he?he[1]:""}function T(se){var he=L(se).toLowerCase();return x()[he]||""}function M(se){return se.search(/^(data:)/)!==-1}function V(se){return new Promise(function(he){for(var Ce=window.atob(se.toDataURL().split(",")[1]),Re=Ce.length,Je=new Uint8Array(Re),Ie=0;Ie<Re;Ie++)Je[Ie]=Ce.charCodeAt(Ie);he(new Blob([Je],{type:"image/png"}))})}function z(se){return se.toBlob?new Promise(function(he){se.toBlob(he)}):V(se)}function j(se,he){var Ce=document.implementation.createHTMLDocument(),Re=Ce.createElement("base");Ce.head.appendChild(Re);var Je=Ce.createElement("a");return Ce.body.appendChild(Je),Re.href=he,Je.href=se,Je.href}function R(){var se=0;return function(){return"u"+he()+se++;function he(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function q(se){return new Promise(function(he,Ce){var Re=new Image;Re.onload=function(){he(Re)},Re.onerror=Ce,Re.src=se})}function oe(se){var he=3e4;return o.impl.options.cacheBust&&(se+=(/\?/.test(se)?"&":"?")+new Date().getTime()),new Promise(function(Ce){var Re=new XMLHttpRequest;Re.onreadystatechange=gi,Re.ontimeout=Mi,Re.responseType="blob",Re.timeout=he,Re.open("GET",se,!0),Re.send();var Je;if(o.impl.options.imagePlaceholder){var Ie=o.impl.options.imagePlaceholder.split(/,/);Ie&&Ie[1]&&(Je=Ie[1])}function gi(){if(Re.readyState===4){if(Re.status!==200){Je?Ce(Je):Ze("cannot fetch resource: "+se+", status: "+Re.status);return}var lr=new FileReader;lr.onloadend=function(){var Qr=lr.result.split(/,/)[1];Ce(Qr)},lr.readAsDataURL(Re.response)}}function Mi(){Je?Ce(Je):Ze("timeout of "+he+"ms occured while fetching resource: "+se)}function Ze(lr){console.error(lr),Ce("")}})}function $(se,he){return"data:"+he+";base64,"+se}function F(se){return se.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function fe(se){return function(he){return new Promise(function(Ce){setTimeout(function(){Ce(he)},se)})}}function ie(se){for(var he=[],Ce=se.length,Re=0;Re<Ce;Re++)he.push(se[Re]);return he}function De(se){return se.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Be(se){var he=rt(se,"border-left-width"),Ce=rt(se,"border-right-width");return se.scrollWidth+he+Ce}function ht(se){var he=rt(se,"border-top-width"),Ce=rt(se,"border-bottom-width");return se.scrollHeight+he+Ce}function rt(se,he){var Ce=window.getComputedStyle(se).getPropertyValue(he);return parseFloat(Ce.replace("px",""))}}function W(){var x=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:V,shouldProcess:L,impl:{readUrls:T,inline:M}};function L(z){return z.search(x)!==-1}function T(z){for(var j=[],R;(R=x.exec(z))!==null;)j.push(R[1]);return j.filter(function(q){return!t.isDataUrl(q)})}function M(z,j,R,q){return Promise.resolve(j).then(function($){return R?t.resolveUrl($,R):$}).then(q||t.getAndEncode).then(function($){return t.dataAsUrl($,t.mimeType(j))}).then(function($){return z.replace(oe(j),"$1"+$+"$3")});function oe($){return new RegExp(`(url\\(['"]?)(`+t.escape($)+`)(['"]?\\))`,"g")}}function V(z,j,R){if(q())return Promise.resolve(z);return Promise.resolve(z).then(T).then(function(oe){var $=Promise.resolve(z);return oe.forEach(function(F){$=$.then(function(fe){return M(fe,F,j,R)})}),$});function q(){return!L(z)}}}function I(){return{resolveAll:x,impl:{readAll:L}};function x(){return L().then(function(T){return Promise.all(T.map(function(M){return M.resolve()}))}).then(function(T){return T.join(`
`)})}function L(){return Promise.resolve(t.asArray(document.styleSheets)).then(M).then(T).then(function(z){return z.map(V)});function T(z){return z.filter(function(j){return j.type===CSSRule.FONT_FACE_RULE}).filter(function(j){return i.shouldProcess(j.style.getPropertyValue("src"))})}function M(z){var j=[];return z.forEach(function(R){try{t.asArray(R.cssRules||[]).forEach(j.push.bind(j))}catch(q){console.log("Error while reading CSS rules from "+R.href,q.toString())}}),j}function V(z){return{resolve:function(){var R=(z.parentStyleSheet||{}).href;return i.inlineAll(z.cssText,R)},src:function(){return z.style.getPropertyValue("src")}}}}}function K(){return{inlineAll:L,impl:{newImage:x}};function x(T){return{inline:M};function M(V){return t.isDataUrl(T.src)?Promise.resolve():Promise.resolve(T.src).then(V||t.getAndEncode).then(function(z){return t.dataAsUrl(z,t.mimeType(T.src))}).then(function(z){return new Promise(function(j,R){T.onload=j,T.onerror=R,T.src=z})})}}function L(T){if(!(T instanceof Element))return Promise.resolve(T);return M(T).then(function(){return T instanceof HTMLImageElement?x(T).inline():Promise.all(t.asArray(T.childNodes).map(function(V){return L(V)}))});function M(V){var z=V.style.getPropertyValue("background");return z?i.inlineAll(z).then(function(j){V.style.setProperty("background",j,V.style.getPropertyPriority("background"))}).then(function(){return V}):Promise.resolve(V)}}}})()})(Hc);var dg=Hc.exports;const pg=cg(dg);var Ao={exports:{}};const fg={},gg=Object.freeze(Object.defineProperty({__proto__:null,default:fg},Symbol.toStringTag,{value:"Module"})),rs=ug(gg);/**
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
 */(function(r,e){(function(t,i){i(e)})(hg,function(t){var i={},s={exports:{}};(function(G){var J=function(we){return typeof we<"u"&&we.versions!=null&&we.versions.node!=null&&we+""=="[object process]"};G.exports.isNode=J,G.exports.platform=typeof process<"u"&&J(process)?"node":"browser";var Z=G.exports.platform==="node"&&rs;G.exports.isMainThread=G.exports.platform==="node"?(!Z||Z.isMainThread)&&!process.connected:typeof Window<"u",G.exports.cpus=G.exports.platform==="browser"?self.navigator.hardwareConcurrency:rs.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function G(we,Ve){var Ae=this;if(!(this instanceof G))throw new SyntaxError("Constructor must be called with the new operator");if(typeof we!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var it=[],Ne=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var le=function(Oe,Ue){it.push(Oe),Ne.push(Ue)};this.then=function(Y,Oe){return new G(function(Ue,wt){var It=Y?J(Y,Ue,wt):Ue,zr=Oe?J(Oe,Ue,wt):wt;le(It,zr)},Ae)};var We=function(Oe){return Ae.resolved=!0,Ae.rejected=!1,Ae.pending=!1,it.forEach(function(Ue){Ue(Oe)}),le=function(wt,It){wt(Oe)},We=B=function(){},Ae},B=function(Oe){return Ae.resolved=!1,Ae.rejected=!0,Ae.pending=!1,Ne.forEach(function(Ue){Ue(Oe)}),le=function(wt,It){It(Oe)},We=B=function(){},Ae};this.cancel=function(){return Ve?Ve.cancel():B(new Z),Ae},this.timeout=function(Y){if(Ve)Ve.timeout(Y);else{var Oe=setTimeout(function(){B(new Q("Promise timed out after "+Y+" ms"))},Y);Ae.always(function(){clearTimeout(Oe)})}return Ae},we(function(Y){We(Y)},function(Y){B(Y)})}function J(we,Ve,Ae){return function(it){try{var Ne=we(it);Ne&&typeof Ne.then=="function"&&typeof Ne.catch=="function"?Ne.then(Ve,Ae):Ve(Ne)}catch(le){Ae(le)}}}G.prototype.catch=function(we){return this.then(null,we)},G.prototype.always=function(we){return this.then(we,we)},G.all=function(we){return new G(function(Ve,Ae){var it=we.length,Ne=[];it?we.forEach(function(le,We){le.then(function(B){Ne[We]=B,it--,it==0&&Ve(Ne)},function(B){it=0,Ae(B)})}):Ve(Ne)})},G.defer=function(){var we={};return we.promise=new G(function(Ve,Ae){we.resolve=Ve,we.reject=Ae}),we};function Z(we){this.message=we||"promise cancelled",this.stack=new Error().stack}Z.prototype=new Error,Z.prototype.constructor=Error,Z.prototype.name="CancellationError",G.CancellationError=Z;function Q(we){this.message=we||"timeout exceeded",this.stack=new Error().stack}return Q.prototype=new Error,Q.prototype.constructor=Error,Q.prototype.name="TimeoutError",G.TimeoutError=Q,a.Promise=G,a}function h(G,J){(J==null||J>G.length)&&(J=G.length);for(var Z=0,Q=Array(J);Z<J;Z++)Q[Z]=G[Z];return Q}function u(G,J){var Z=typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(!Z){if(Array.isArray(G)||(Z=H(G))||J){Z&&(G=Z);var Q=0,we=function(){};return{s:we,n:function(){return Q>=G.length?{done:!0}:{done:!1,value:G[Q++]}},e:function(Ne){throw Ne},f:we}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ve,Ae=!0,it=!1;return{s:function(){Z=Z.call(G)},n:function(){var Ne=Z.next();return Ae=Ne.done,Ne},e:function(Ne){it=!0,Ve=Ne},f:function(){try{Ae||Z.return==null||Z.return()}finally{if(it)throw Ve}}}}function d(G,J,Z){return(J=S(J))in G?Object.defineProperty(G,J,{value:Z,enumerable:!0,configurable:!0,writable:!0}):G[J]=Z,G}function p(G,J){var Z=Object.keys(G);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(G);J&&(Q=Q.filter(function(we){return Object.getOwnPropertyDescriptor(G,we).enumerable})),Z.push.apply(Z,Q)}return Z}function b(G){for(var J=1;J<arguments.length;J++){var Z=arguments[J]!=null?arguments[J]:{};J%2?p(Object(Z),!0).forEach(function(Q){d(G,Q,Z[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(Z)):p(Object(Z)).forEach(function(Q){Object.defineProperty(G,Q,Object.getOwnPropertyDescriptor(Z,Q))})}return G}function w(G,J){if(typeof G!="object"||!G)return G;var Z=G[Symbol.toPrimitive];if(Z!==void 0){var Q=Z.call(G,J||"default");if(typeof Q!="object")return Q;throw new TypeError("@@toPrimitive must return a primitive value.")}return(J==="string"?String:Number)(G)}function S(G){var J=w(G,"string");return typeof J=="symbol"?J:J+""}function k(G){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(J){return typeof J}:function(J){return J&&typeof Symbol=="function"&&J.constructor===Symbol&&J!==Symbol.prototype?"symbol":typeof J},k(G)}function H(G,J){if(G){if(typeof G=="string")return h(G,J);var Z={}.toString.call(G).slice(8,-1);return Z==="Object"&&G.constructor&&(Z=G.constructor.name),Z==="Map"||Z==="Set"?Array.from(G):Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z)?h(G,J):void 0}}var A={exports:{}},D={},W;function I(){return W||(W=1,D.validateOptions=function(J,Z,Q){if(J){var we=J?Object.keys(J):[],Ve=we.find(function(it){return!Z.includes(it)});if(Ve)throw new Error('Object "'+Q+'" contains an unknown option "'+Ve+'"');var Ae=Z.find(function(it){return Object.prototype[it]&&!we.includes(it)});if(Ae)throw new Error('Object "'+Q+'" contains an inherited option "'+Ae+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return J}},D.workerOptsNames=["credentials","name","type"],D.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],D.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),D}var K,x;function L(){return x||(x=1,K=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),K}var T;function M(){if(T)return A.exports;T=1;var G=l(),J=G.Promise,Z=n,Q=I(),we=Q.validateOptions,Ve=Q.forkOptsNames,Ae=Q.workerThreadOptsNames,it=Q.workerOptsNames,Ne="__workerpool-terminate__";function le(){var be=B();if(!be)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return be}function We(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":k(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function B(){try{return rs}catch(be){if(k(be)==="object"&&be!==null&&be.code==="MODULE_NOT_FOUND")return null;throw be}}function Y(){if(Z.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var be=new Blob([L()],{type:"text/javascript"});return window.URL.createObjectURL(be)}else return __dirname+"/worker.js"}function Oe(be,Ee){if(Ee.workerType==="web")return We(),Ue(be,Ee.workerOpts,Worker);if(Ee.workerType==="thread")return X=le(),wt(be,X,Ee);if(Ee.workerType==="process"||!Ee.workerType)return It(be,zr(Ee),rs);if(Z.platform==="browser")return We(),Ue(be,Ee.workerOpts,Worker);var X=B();return X?wt(be,X,Ee):It(be,zr(Ee),rs)}function Ue(be,Ee,X){we(Ee,it,"workerOpts");var Pe=new X(be,Ee);return Pe.isBrowserWorker=!0,Pe.on=function(Ge,He){this.addEventListener(Ge,function(ct){He(ct.data)})},Pe.send=function(Ge,He){this.postMessage(Ge,He)},Pe}function wt(be,Ee,X){var Pe,Ge;we(X==null?void 0:X.workerThreadOpts,Ae,"workerThreadOpts");var He=new Ee.Worker(be,b({stdout:(Pe=X==null?void 0:X.emitStdStreams)!==null&&Pe!==void 0?Pe:!1,stderr:(Ge=X==null?void 0:X.emitStdStreams)!==null&&Ge!==void 0?Ge:!1},X==null?void 0:X.workerThreadOpts));return He.isWorkerThread=!0,He.send=function(ct,ze){this.postMessage(ct,ze)},He.kill=function(){return this.terminate(),!0},He.disconnect=function(){this.terminate()},X!=null&&X.emitStdStreams&&(He.stdout.on("data",function(ct){return He.emit("stdout",ct)}),He.stderr.on("data",function(ct){return He.emit("stderr",ct)})),He}function It(be,Ee,X){we(Ee.forkOpts,Ve,"forkOpts");var Pe=X.fork(be,Ee.forkArgs,Ee.forkOpts),Ge=Pe.send;return Pe.send=function(He){return Ge.call(Pe,He)},Ee.emitStdStreams&&(Pe.stdout.on("data",function(He){return Pe.emit("stdout",He)}),Pe.stderr.on("data",function(He){return Pe.emit("stderr",He)})),Pe.isChildProcess=!0,Pe}function zr(be){be=be||{};var Ee=process.execArgv.join(" "),X=Ee.indexOf("--inspect")!==-1,Pe=Ee.indexOf("--debug-brk")!==-1,Ge=[];return X&&(Ge.push("--inspect="+be.debugPort),Pe&&Ge.push("--debug-brk")),process.execArgv.forEach(function(He){He.indexOf("--max-old-space-size")>-1&&Ge.push(He)}),Object.assign({},be,{forkArgs:be.forkArgs,forkOpts:Object.assign({},be.forkOpts,{execArgv:(be.forkOpts&&be.forkOpts.execArgv||[]).concat(Ge),stdio:be.emitStdStreams?"pipe":void 0})})}function hr(be){for(var Ee=new Error(""),X=Object.keys(be),Pe=0;Pe<X.length;Pe++)Ee[X[Pe]]=be[X[Pe]];return Ee}function vr(be,Ee){if(Object.keys(be.processing).length===1){var X=Object.values(be.processing)[0];X.options&&typeof X.options.on=="function"&&X.options.on(Ee)}}function mi(be,Ee){var X=this,Pe=Ee||{};this.script=be||Y(),this.worker=Oe(this.script,Pe),this.debugPort=Pe.debugPort,this.forkOpts=Pe.forkOpts,this.forkArgs=Pe.forkArgs,this.workerOpts=Pe.workerOpts,this.workerThreadOpts=Pe.workerThreadOpts,this.workerTerminateTimeout=Pe.workerTerminateTimeout,be||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(ze){vr(X,{stdout:ze.toString()})}),this.worker.on("stderr",function(ze){vr(X,{stderr:ze.toString()})}),this.worker.on("message",function(ze){if(!X.terminated)if(typeof ze=="string"&&ze==="ready")X.worker.ready=!0,He();else{var Xt=ze.id,xt=X.processing[Xt];xt!==void 0&&(ze.isEvent?xt.options&&typeof xt.options.on=="function"&&xt.options.on(ze.payload):(delete X.processing[Xt],X.terminating===!0&&X.terminate(),ze.error?xt.resolver.reject(hr(ze.error)):xt.resolver.resolve(ze.result)))}});function Ge(ze){X.terminated=!0;for(var Xt in X.processing)X.processing[Xt]!==void 0&&X.processing[Xt].resolver.reject(ze);X.processing=Object.create(null)}function He(){var ze=u(X.requestQueue.splice(0)),Xt;try{for(ze.s();!(Xt=ze.n()).done;){var xt=Xt.value;X.worker.send(xt.message,xt.transfer)}}catch(xn){ze.e(xn)}finally{ze.f()}}var ct=this.worker;this.worker.on("error",Ge),this.worker.on("exit",function(ze,Xt){var xt=`Workerpool Worker terminated Unexpectedly
`;xt+="    exitCode: `"+ze+"`\n",xt+="    signalCode: `"+Xt+"`\n",xt+="    workerpool.script: `"+X.script+"`\n",xt+="    spawnArgs: `"+ct.spawnargs+"`\n",xt+="    spawnfile: `"+ct.spawnfile+"`\n",xt+="    stdout: `"+ct.stdout+"`\n",xt+="    stderr: `"+ct.stderr+"`\n",Ge(new Error(xt))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return mi.prototype.methods=function(){return this.exec("methods")},mi.prototype.exec=function(be,Ee,X,Pe){X||(X=J.defer());var Ge=++this.lastId;this.processing[Ge]={id:Ge,resolver:X,options:Pe};var He={message:{id:Ge,method:be,params:Ee},transfer:Pe&&Pe.transfer};this.terminated?X.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(He.message,He.transfer):this.requestQueue.push(He);var ct=this;return X.promise.catch(function(ze){if(ze instanceof J.CancellationError||ze instanceof J.TimeoutError)return delete ct.processing[Ge],ct.terminateAndNotify(!0).then(function(){throw ze},function(Xt){throw Xt});throw ze})},mi.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},mi.prototype.terminate=function(be,Ee){var X=this;if(be){for(var Pe in this.processing)this.processing[Pe]!==void 0&&this.processing[Pe].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Ee=="function"&&(this.terminationHandler=Ee),this.busy())this.terminating=!0;else{var Ge=function(ze){if(X.terminated=!0,X.cleaning=!1,X.worker!=null&&X.worker.removeAllListeners&&X.worker.removeAllListeners("message"),X.worker=null,X.terminating=!1,X.terminationHandler)X.terminationHandler(ze,X);else if(ze)throw ze};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ge(new Error("worker already killed!"));return}var He=setTimeout(function(){X.worker&&X.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(He),X.worker&&(X.worker.killed=!0),Ge()}),this.worker.ready?this.worker.send(Ne):this.requestQueue.push({message:Ne}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ge()}},mi.prototype.terminateAndNotify=function(be,Ee){var X=J.defer();return Ee&&X.promise.timeout(Ee),this.terminate(be,function(Pe,Ge){Pe?X.reject(Pe):X.resolve(Ge)}),X.promise},A.exports=mi,A.exports._tryRequireWorkerThreads=B,A.exports._setupProcessWorker=It,A.exports._setupBrowserWorker=Ue,A.exports._setupWorkerThreadWorker=wt,A.exports.ensureWorkerThreads=le,A.exports}var V,z;function j(){if(z)return V;z=1;var G=65535;V=J;function J(){this.ports=Object.create(null),this.length=0}return J.prototype.nextAvailableStartingAt=function(Z){for(;this.ports[Z]===!0;)Z++;if(Z>=G)throw new Error("WorkerPool debug port limit reached: "+Z+">= "+G);return this.ports[Z]=!0,this.length++,Z},J.prototype.releasePort=function(Z){delete this.ports[Z],this.length--},V}var R,q;function oe(){if(q)return R;q=1;var G=l(),J=G.Promise,Z=M(),Q=n,we=j(),Ve=new we;function Ae(B,Y){typeof B=="string"?this.script=B||null:(this.script=null,Y=B),this.workers=[],this.tasks=[],Y=Y||{},this.forkArgs=Object.freeze(Y.forkArgs||[]),this.forkOpts=Object.freeze(Y.forkOpts||{}),this.workerOpts=Object.freeze(Y.workerOpts||{}),this.workerThreadOpts=Object.freeze(Y.workerThreadOpts||{}),this.debugPortStart=Y.debugPortStart||43210,this.nodeWorker=Y.nodeWorker,this.workerType=Y.workerType||Y.nodeWorker||"auto",this.maxQueueSize=Y.maxQueueSize||1/0,this.workerTerminateTimeout=Y.workerTerminateTimeout||1e3,this.onCreateWorker=Y.onCreateWorker||function(){return null},this.onTerminateWorker=Y.onTerminateWorker||function(){return null},this.emitStdStreams=Y.emitStdStreams||!1,Y&&"maxWorkers"in Y?(it(Y.maxWorkers),this.maxWorkers=Y.maxWorkers):this.maxWorkers=Math.max((Q.cpus||4)-1,1),Y&&"minWorkers"in Y&&(Y.minWorkers==="max"?this.minWorkers=this.maxWorkers:(Ne(Y.minWorkers),this.minWorkers=Y.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&Z.ensureWorkerThreads()}Ae.prototype.exec=function(B,Y,Oe){if(Y&&!Array.isArray(Y))throw new TypeError('Array expected as argument "params"');if(typeof B=="string"){var Ue=J.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var wt=this.tasks,It={method:B,params:Y,resolver:Ue,timeout:null,options:Oe};wt.push(It);var zr=Ue.promise.timeout;return Ue.promise.timeout=function(vr){return wt.indexOf(It)!==-1?(It.timeout=vr,Ue.promise):zr.call(Ue.promise,vr)},this._next(),Ue.promise}else{if(typeof B=="function")return this.exec("run",[String(B),Y],Oe);throw new TypeError('Function or string expected as argument "method"')}},Ae.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var B=this;return this.exec("methods").then(function(Y){var Oe={};return Y.forEach(function(Ue){Oe[Ue]=function(){return B.exec(Ue,Array.prototype.slice.call(arguments))}}),Oe})},Ae.prototype._next=function(){if(this.tasks.length>0){var B=this._getWorker();if(B){var Y=this,Oe=this.tasks.shift();if(Oe.resolver.promise.pending){var Ue=B.exec(Oe.method,Oe.params,Oe.resolver,Oe.options).then(Y._boundNext).catch(function(){if(B.terminated)return Y._removeWorker(B)}).then(function(){Y._next()});typeof Oe.timeout=="number"&&Ue.timeout(Oe.timeout)}else Y._next()}}},Ae.prototype._getWorker=function(){for(var B=this.workers,Y=0;Y<B.length;Y++){var Oe=B[Y];if(Oe.busy()===!1)return Oe}return B.length<this.maxWorkers?(Oe=this._createWorkerHandler(),B.push(Oe),Oe):null},Ae.prototype._removeWorker=function(B){var Y=this;return Ve.releasePort(B.debugPort),this._removeWorkerFromList(B),this._ensureMinWorkers(),new J(function(Oe,Ue){B.terminate(!1,function(wt){Y.onTerminateWorker({forkArgs:B.forkArgs,forkOpts:B.forkOpts,workerThreadOpts:B.workerThreadOpts,script:B.script}),wt?Ue(wt):Oe(B)})})},Ae.prototype._removeWorkerFromList=function(B){var Y=this.workers.indexOf(B);Y!==-1&&this.workers.splice(Y,1)},Ae.prototype.terminate=function(B,Y){var Oe=this;this.tasks.forEach(function(hr){hr.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var Ue=function(vr){Ve.releasePort(vr.debugPort),this._removeWorkerFromList(vr)},wt=Ue.bind(this),It=[],zr=this.workers.slice();return zr.forEach(function(hr){var vr=hr.terminateAndNotify(B,Y).then(wt).always(function(){Oe.onTerminateWorker({forkArgs:hr.forkArgs,forkOpts:hr.forkOpts,workerThreadOpts:hr.workerThreadOpts,script:hr.script})});It.push(vr)}),J.all(It)},Ae.prototype.stats=function(){var B=this.workers.length,Y=this.workers.filter(function(Oe){return Oe.busy()}).length;return{totalWorkers:B,busyWorkers:Y,idleWorkers:B-Y,pendingTasks:this.tasks.length,activeTasks:Y}},Ae.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var B=this.workers.length;B<this.minWorkers;B++)this.workers.push(this._createWorkerHandler())},Ae.prototype._createWorkerHandler=function(){var B=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new Z(B.script||this.script,{forkArgs:B.forkArgs||this.forkArgs,forkOpts:B.forkOpts||this.forkOpts,workerOpts:B.workerOpts||this.workerOpts,workerThreadOpts:B.workerThreadOpts||this.workerThreadOpts,debugPort:Ve.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function it(B){if(!le(B)||!We(B)||B<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function Ne(B){if(!le(B)||!We(B)||B<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function le(B){return typeof B=="number"}function We(B){return Math.round(B)==B}return R=Ae,R}var $={},F,fe;function ie(){if(fe)return F;fe=1;function G(J,Z){this.message=J,this.transfer=Z}return F=G,F}var De;function Be(){return De||(De=1,function(G){var J=ie(),Z="__workerpool-terminate__",Q={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")Q.on=function(le,We){addEventListener(le,function(B){We(B.data)})},Q.send=function(le,We){We?postMessage(le,We):postMessage(le)};else if(typeof process<"u"){var we;try{we=rs}catch(le){if(!(k(le)==="object"&&le!==null&&le.code==="MODULE_NOT_FOUND"))throw le}if(we&&we.parentPort!==null){var Ve=we.parentPort;Q.send=Ve.postMessage.bind(Ve),Q.on=Ve.on.bind(Ve),Q.exit=process.exit.bind(process)}else Q.on=process.on.bind(process),Q.send=function(le){process.send(le)},Q.on("disconnect",function(){process.exit(1)}),Q.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Ae(le){return Object.getOwnPropertyNames(le).reduce(function(We,B){return Object.defineProperty(We,B,{value:le[B],enumerable:!0})},{})}function it(le){return le&&typeof le.then=="function"&&typeof le.catch=="function"}Q.methods={},Q.methods.run=function(We,B){var Y=new Function("return ("+We+").apply(null, arguments);");return Y.apply(Y,B)},Q.methods.methods=function(){return Object.keys(Q.methods)},Q.terminationHandler=void 0,Q.cleanupAndExit=function(le){var We=function(){Q.exit(le)};if(!Q.terminationHandler)return We();var B=Q.terminationHandler(le);it(B)?B.then(We,We):We()};var Ne=null;Q.on("message",function(le){if(le===Z)return Q.cleanupAndExit(0);try{var We=Q.methods[le.method];if(We){Ne=le.id;var B=We.apply(We,le.params);it(B)?B.then(function(Y){Y instanceof J?Q.send({id:le.id,result:Y.message,error:null},Y.transfer):Q.send({id:le.id,result:Y,error:null}),Ne=null}).catch(function(Y){Q.send({id:le.id,result:null,error:Ae(Y)}),Ne=null}):(B instanceof J?Q.send({id:le.id,result:B.message,error:null},B.transfer):Q.send({id:le.id,result:B,error:null}),Ne=null)}else throw new Error('Unknown method "'+le.method+'"')}catch(Y){Q.send({id:le.id,result:null,error:Ae(Y)})}}),Q.register=function(le,We){if(le)for(var B in le)le.hasOwnProperty(B)&&(Q.methods[B]=le[B]);We&&(Q.terminationHandler=We.onTerminate),Q.send("ready")},Q.emit=function(le){if(Ne){if(le instanceof J){Q.send({id:Ne,isEvent:!0,payload:le.message},le.transfer);return}Q.send({id:Ne,isEvent:!0,payload:le})}},G.add=Q.register,G.emit=Q.emit}($)),$}var ht=n.platform,rt=n.isMainThread,se=n.cpus;function he(G,J){var Z=oe();return new Z(G,J)}var Ce=i.pool=he;function Re(G,J){var Z=Be();Z.add(G,J)}var Je=i.worker=Re;function Ie(G){var J=Be();J.emit(G)}var gi=i.workerEmit=Ie,Mi=l(),Ze=Mi.Promise,lr=i.Promise=Ze,Qr=i.Transfer=ie(),ja=i.platform=ht,Na=i.isMainThread=rt,Wa=i.cpus=se;t.Promise=lr,t.Transfer=Qr,t.cpus=Wa,t.default=i,t.isMainThread=Na,t.platform=ja,t.pool=Ce,t.worker=Je,t.workerEmit=gi,Object.defineProperty(t,"__esModule",{value:!0})})})(Ao,Ao.exports);var mg=Ao.exports,kt=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},Bc=class extends kt{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},yg=class extends kt{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},vg=class extends kt{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,t=this.parent.histogram.value.filter(s=>s.height>=e),i={from:t[0].from,to:t[t.length-1].to};this.imposeRange(i)}}},bg=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},wg=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],xg=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],Sg=bg(),Wr={iron:{pixels:xg,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:wg,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:Sg,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},$g=class extends kt{get availablePalettes(){return Wr}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},Po,kg=(Po=class{},c(Po,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),Po),vt,tt=(vt=class extends kg{static humanRangeDates(e,t){return e=vt.inputToDate(e),t=vt.inputToDate(t),e.getUTCDate()===t.getUTCDate()?vt.humanDate(e):[vt.humanDate(e),vt.humanDate(t)].join(" - ")}static human(e){return`${vt.humanDate(e)} ${vt.humanTime(e,!0)} `}},c(vt,"isoDate",e=>(e=vt.inputToDate(e),bo(e,{representation:"date"}))),c(vt,"isoTime",e=>(e=vt.inputToDate(e),bo(e,{representation:"time"}))),c(vt,"isoComplete",e=>(e=vt.inputToDate(e),bo(e))),c(vt,"humanTime",(e,t=!1)=>(e=vt.inputToDate(e),ke(e,t?"HH:mm:ss":"HH:mm"))),c(vt,"humanDate",(e,t=!1)=>(e=vt.inputToDate(e),ke(e,t?"d. M.":"d. M. yyyy"))),vt),ee=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},ba=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new ee);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},pt=class{constructor(r,e,t){c(this,"onSerializableChange",new ee);c(this,"_selected",!1);c(this,"onSelected",new ee);c(this,"onDeselected",new ee);c(this,"onValues",new ee);c(this,"onMoveOrResize",new ee);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new ee);c(this,"_initialColor");c(this,"onSetInitialColor",new ee);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new ee);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},Vc=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new ee);c(this,"pxY");c(this,"_y");c(this,"onY",new ee);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onActivate",new ee);c(this,"onDeactivate",new ee);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},Qt,Pg=(Qt=class extends Vc{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(Qt.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=Qt.sizePx(-.5),t.style.left=Qt.sizePx(-.5),t.style.width=Qt.sizePx(),t.style.height=Qt.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=Qt.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=Qt.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${Qt.sizePx(.5)} - 3px )`,t.style.left=`calc( ${Qt.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(Qt,"size",20),Qt),wr=class Gc extends pt{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new Pg("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Yc(this)),this._graph}static addAtPoint(t,i,s,n,a){return new Gc(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(u=>u.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=pt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=pt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=pt.serializedGetNumericalValueByKey(i,"top"),h=pt.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Yc=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new ee);c(this,"onGraphData",new ee);c(this,"onAnalysisSelection",new ee);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof wr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof wr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof wr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof wr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},_g=class extends Vc{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},Cg=class extends _g{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},Er=class extends pt{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Yc(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,u=a-n;return{top:n,left:o,width:h,height:u}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new Cg(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(b=>b.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=pt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=pt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=pt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=pt.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=pt.serializedGetNumericalValueByKey(t,"top"),u=pt.serializedGetNumericalValueByKey(t,"left"),d=pt.serializedGetNumericalValueByKey(t,"width"),p=pt.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),u!==void 0&&u!==this.left&&(this.setLeft(u),i=!0),d!==void 0&&d!==this.width&&(this.setWidth(d),i=!0),p!==void 0&&p!==this.height&&(this.setHeight(p),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},qc=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},Uh=class extends qc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},zh=class Hn extends Er{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Hn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Hn.calculateDimensionsFromCorners(s,n,a,o),p=new Hn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Uh(this,e,t,e+i,t+s):new Uh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++)if(this.isWithin(d,h)){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},Fh=class extends qc{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},jh=class Bn extends Er{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Bn(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:u,height:d}=Bn.calculateDimensionsFromCorners(s,n,a,o),p=new Bn(e,t,i,l,h,u,d);return p.recalculateValues(),p}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new Fh(this,e,t,e+i,t+s):new Fh(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const u=this.file.width*h;for(let d=e;d<=t;d++){const p=this.file.pixels[u+d];p<n&&(n=p),p>a&&(a=p),l+=p,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Vn=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],Ag=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new ee);c(this,"onRemove",new ee);c(this,"onSelectionChange",new ee);c(this,"colors",Vn);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=jh.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=jh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=zh.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=zh.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=wr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=wr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Vn.filter(i=>!e.includes(i));return t.length>0?t[0]:Vn[0]}getNextName(e){return`${e} ${this.all.length}`}},Og=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},Eg=class extends kt{constructor(){super(...arguments);c(this,"layers",new Ag(this));c(this,"points",new Og(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,u=e.layerY/o;return{top:Math.round(l*u),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},Lg=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new ee);c(this,"onAddGraph",new ee);c(this,"onRemoveGraph",new ee);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:ke(a,"m:ss:SSS")+" ",[e[1].key]:ke(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},Dg=class extends kt{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new ee);c(this,"listeners",new Lg(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=sn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=Nc(i)(e);Wc(i)(s)}},Rg=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new ee);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},as,Xc=(as=class extends kt{constructor(){super(...arguments);c(this,"onSlotInit",new ee);c(this,"onSlotRemove",new ee);c(this,"onSlot1Assignement",new ee);c(this,"onSlot2Assignement",new ee);c(this,"onSlot3Assignement",new ee);c(this,"onSlot4Assignement",new ee);c(this,"onSlot5Assignement",new ee);c(this,"onSlot6Assignement",new ee);c(this,"onSlot7Assignement",new ee);c(this,"onSlot1Serialize",new ee);c(this,"onSlot2Serialize",new ee);c(this,"onSlot3Serialize",new ee);c(this,"onSlot4Serialize",new ee);c(this,"onSlot5Serialize",new ee);c(this,"onSlot6Serialize",new ee);c(this,"onSlot7Serialize",new ee)}getNextFreeSlotNumber(){for(let t=1;t<=as.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new Rg(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(k=>k.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=pt.serializedGetNumericalValueByKey(s,"top"),l=pt.serializedGetNumericalValueByKey(s,"left");const h=pt.serializedGetStringValueByKey(s,"color");let u=pt.serializedGetNumericalValueByKey(s,"width"),d=pt.serializedGetNumericalValueByKey(s,"height");const p=pt.serializedSegmentsHasExact(s,"avg"),b=pt.serializedSegmentsHasExact(s,"min"),w=pt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let S;if(a==="point"){if(o===void 0||l===void 0)return;S=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||u===void 0||d===void 0)return;u<0&&(u=0),u+l>this.parent.width-1&&(u=this.parent.width-l-1),d<0&&(d=0),d+o>this.parent.height-1&&(d=this.parent.height-o-1),S=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,u+l,d+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,u+l,d+o,h,!1)}if(S!==void 0){if(S instanceof wr?p&&S.graph.setAvgActivation(!0):S instanceof Er&&(p&&S.graph.setAvgActivation(!0),b&&S.graph.setMinActivation(!0),w&&S.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const k=this.getNextFreeSlotNumber();k!==void 0&&this.assignSlot(k,S)}else i!==void 0&&this.assignSlot(i,S);return S}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(as,"MAX_SLOTS",7),as),Mg=class extends kt{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},Tg=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",1);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Kc={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Ig=class extends kt{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new ee);c(this,"callbacksPlay",new ee);c(this,"callbacksPause",new ee);c(this,"callbacksStop",new ee);c(this,"callbacksEnd",new ee);c(this,"callbacksChangeFrame",new ee);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new Tg(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Kc[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),ke(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);console.log(e),this.setRelativeTime(e.relative)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e),i=Math.ceil(t*this.steps.length)+5,s=this._validateIndex(i-40),n=this._validateIndex(i),o=this.steps.slice(s,n).reverse().find(l=>l.relative<e);return o!==void 0?o:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousRelative(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},Ug=class extends kt{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new ee)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},wa=class{},At,zg=(At=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(At.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(At.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(At.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(At.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(At.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(At.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(At.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(At.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl)}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(At,"CLASS_BASE","thermalImageRoot"),c(At,"CLASS_BUILT",At.CLASS_BASE+"__built"),c(At,"CLASS_HYDRATED",At.CLASS_BASE+"__mounted"),c(At,"CLASS_HOVER",At.CLASS_BASE+"__hover"),At),Fg=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new ee),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},jg=class extends wa{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Fg(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new zg(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),u=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[u]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},xa=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},jr=class Oo{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Oo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Oo.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Ng=class extends xa{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=jr.createVisibleLayer(),this._url&&(this.image=jr.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Wg=class extends xa{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=jr.createCanvasContainer(),this.canvas=jr.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof wr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,u)=>{const p=new OffscreenCanvas(a,o).getContext("2d"),b=n-s,w=u.map(A=>({id:A[1],type:A[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let A=0;A<a;A++)for(let D=0;D<o;D++){const W=A+D*a,I=l[W];let K=I;K<s&&(K=s),K>n&&(K=n);const L=(K-s)/b,T=Math.round(255*L),M=h[T];p.fillStyle=M,p.fillRect(A,D,1,1);const V=(z,j,R,q,oe,$)=>{const F=R+oe/2,fe=q+$/2,ie=(z-F)/(oe/2),De=(j-fe)/($/2);return ie*ie+De*De<=1};u.forEach((z,j)=>{const R=w[j],[q,oe,$,F,fe,ie]=z;q==="point"?A===F&&D===$&&(R.avg.value=I):q==="rectangle"?A>=F&&A<F+fe&&D>=$&&D<$+ie&&(I<R.min.value&&(R.min.value=I),I>R.max.value&&(R.max.value=I),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+I):q==="ellipsis"&&V(A,D,F,$,a,o)&&(I<R.min.value&&(R.min.value=I),I>R.max.value&&(R.max.value=I),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+I)})}const S=w.map(A=>({id:A.id,min:A.min.value!==1/0?A.min.value:void 0,max:A.max.value!==-1/0?A.max.value:void 0,avg:A.type==="point"?A.avg.value:A.avg.sum/A.avg.count})),k=p.getImageData(0,0,a,o);return{image:await createImageBitmap(k),stats:S}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Hg=class extends xa{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=jr.createCursorLayerRoot(),this.center=jr.createCursorLayerCenter(),this.axisX=jr.createCursorLayerX(),this.axisY=jr.createCursorLayerY(),this.label=jr.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Bg=class extends xa{constructor(e){super(e);c(this,"container");this.container=jr.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Jc=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},$i=class extends Jc{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=nn.fromService(t,i,s,n);return t.files.addFile(a),a}},St,Zc=(St=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new ee)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=St.FONT_SIZE_NORMAL,s="normal",n=St.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=St.FONT_SIZE_NORMAL,i.style.fontFamily=St.FONT_FAMILY,i.style.color=St.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){pg.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const u=e.clientWidth,d=60,b=u/(d+40),w=document.createElement("div");w.style.width="100%",w.style.position="relative",w.style.paddingLeft=d/2+"px",w.style.paddingRight=d/2+"px",w.style.boxSizing="border-box";const S=document.createElement("div");S.style.width="100%",S.style.position="relative",S.style.backgroundColor=o,S.style.height="30px";const k=i-t,H=s-t,A=n-t,D=H/k*100,W=A/k*100,I=document.createElement("div");I.style.position="absolute",I.style.backgroundImage=a,I.style.height="100%",I.style.top="0px",I.style.left=D+"%",I.style.width=W-D+"%",S.appendChild(I),w.appendChild(S);const K=document.createElement("div");K.style.width="100%",K.style.height="40px",K.style.position="relative";const x=(M,V=!1,z,j)=>{const R=M/k*100,q=document.createElement("div");q.style.position="absolute",q.style.top="0px",q.style.left=`calc( ${R}% - ${d/2}px )`,q.style.width=d+"px",q.style.textAlign="center",q.style.lineHeight="0px";const oe=document.createElement("div"),$=document.createElement("div"),F=document.createElement("div"),fe=7,ie=fe+"px";oe.innerHTML=(t+M).toFixed(2)+" °C",oe.style.display="inline-block",oe.style.fontSize=St.FONT_SIZE_SMALL,oe.style.lineHeight="1em",oe.style.padding="3px",oe.style.position="relative",$.style.width="100%",$.style.height=ie,$.style.textAlign="center",$.style.position="relative",$.style.lineHeight="0px",F.style.content="",F.style.display="inline-block",V?(F.style.width=fe*2+"px",F.style.height=fe*2+"px",F.style.rotate="45deg",F.style.backgroundColor=j,oe.style.backgroundColor=j,oe.style.zIndex="99",oe.style.color=z):(F.style.width="1px",F.style.height=ie,F.style.backgroundColor=z),$.appendChild(F),q.appendChild($),q.appendChild(oe),K.appendChild(q)};if(h){const M=document.createElement("div");M.style.position="absolute",M.style.border=`2px solid ${l}`,M.style.height="100%",M.style.boxSizing="border-box";const V=(h.from-t)/k*100,z=(h.to-t)/k*100-V;M.style.left=V+"%",M.style.width=z+"%",S.appendChild(M),x(h.from-t,!0,"white",o),x(h.to-t,!0,"white",o)}const L=k/b;let T=0;for(;T<=k;)x(T,!1,l,"transparent"),T=T+L;return x(H,!0,"white",l),x(A,!0,"white",l),w.appendChild(K),w}},c(St,"FONT_SIZE_NORMAL","16px"),c(St,"FONT_SIZE_SMALL","12px"),c(St,"COLOR_BASE","black"),c(St,"COLOR_GRAY","gray"),c(St,"COLOR_LIGHT","lightgray"),c(St,"WIDTH","1600px"),c(St,"FONT_FAMILY","sans-serif"),c(St,"GAP_BASE","10px"),c(St,"GAP_SMALL","5px"),c(St,"DEBUG",!1),St),zt,Vg=(zt=class extends Zc{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...zt.DEFAULT_PARAMS,...t,fileName:i}}onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i);s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),n.service.loadFile(this.file.thermalUrl).then(async o=>{if(o instanceof $i){this.localInstance=await o.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){const h=this.file.group.registry.minmax.value.min,u=this.file.group.registry.minmax.value.max,d=h!==this.file.meta.current.min||u!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,u,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",d)),this.localInstance.mountToDom(this.container);const p=this.localInstance;if(p.dom&&p.dom.visibleLayer&&(p.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const b=document.createElement("table");b.style.width="100%",b.style.borderCollapse="collapse";const w=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(S=>{const k=this.createElementWithText("th",S,zt.FONT_SIZE_SMALL,void 0,zt.COLOR_GRAY);k.style.padding=zt.GAP_SMALL+"px",k.style.textAlign="left",w.appendChild(k)}),b.appendChild(w),this.container.appendChild(b),this.file.slots.forEveryExistingSlot((S,k)=>{var A;const H=(A=this.localInstance)==null?void 0:A.slots.createFromSerialized(S.serialized,k);if(H){const D=document.createElement("tr"),W=this.createElementWithText("td",S.analysis.name,zt.FONT_SIZE_SMALL,void 0,S.analysis.initialColor);W.style.borderTop=`1px solid ${zt.COLOR_LIGHT}`,W.style.padding=`${zt.GAP_SMALL}px 0px ${zt.GAP_SMALL} 0px`,D.appendChild(W);const I=(K,x)=>{const L=this.createElementWithText("td",x?x.toFixed(3)+" °C":"",zt.FONT_SIZE_SMALL,void 0);L.style.borderTop=`1px solid ${zt.COLOR_LIGHT}`,L.style.paddingTop=`${zt.GAP_SMALL}px`,L.style.paddingBottom=`${zt.GAP_SMALL}px`,D.appendChild(L)};S.analysis instanceof Er?(I(S.analysis.initialColor,H.avg),I(S.analysis.initialColor,H.min),I(S.analysis.initialColor,H.max)):S.analysis instanceof wr&&(I(S.analysis.initialColor,H.avg),I(S.analysis.initialColor),I(S.analysis.initialColor)),b.appendChild(D)}})}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},1e3)}}})}},c(zt,"DEFAULT_PARAMS",{fileName:"sth",width:1200,showAnalysis:!0,backgroundColor:"white"}),zt),nn=class Qc extends jg{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new ba(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Vg(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Wg(this),visibleLayer:new Ng(this,this.visibleUrl),cursorLayer:new Hg(this),listenerLayer:new Bg(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new Mg(this,void 0),this.timeline=new Ig(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new Ug(this,!1),this.analysis=new Eg(this,[]),this.analysisData=new Dg(this),this.slots=new Xc(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Qc(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Gg=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof Er&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof Er&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof Er&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof Er?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:tt.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof Er){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=sn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=Nc(s)(i);Wc(s)(n)}},Ke,Yg=(Ke=class extends Zc{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=Ke.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,Ke.FONT_SIZE_SMALL,"normal",Ke.COLOR_BASE);l.style.paddingTop=Ke.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,Ke.FONT_SIZE_SMALL,void 0,Ke.COLOR_GRAY);s.style.paddingTop=Ke.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${tt.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,Ke.FONT_SIZE_SMALL,void 0,Ke.COLOR_GRAY);return n.style.paddingTop=Ke.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=Ke.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${tt.human(t.timeline.currentStep.absolute)}`,Ke.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(u=>u.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const u=document.createElement("tr");["","AVG","MIN","MAX"].forEach(d=>{const p=this.createElementWithText("th",d,Ke.FONT_SIZE_SMALL,void 0,Ke.COLOR_GRAY);p.style.padding=Ke.GAP_SMALL+"px",p.style.textAlign="left",u.appendChild(p)}),h.appendChild(u),a.appendChild(h),l.slots.forEveryExistingSlot((d,p)=>{const b=t.slots.createFromSerialized(d.serialized,p);if(b){const w=document.createElement("tr"),S=this.createElementWithText("td",d.analysis.name,Ke.FONT_SIZE_SMALL,void 0,d.analysis.initialColor);S.style.borderTop=`1px solid ${Ke.COLOR_LIGHT}`,S.style.padding=`${Ke.GAP_SMALL}px 0px ${Ke.GAP_SMALL} 0px`,w.appendChild(S);const k=(H,A)=>{const D=this.createElementWithText("td",A?A.toFixed(3)+" °C":"",Ke.FONT_SIZE_SMALL,void 0);D.style.borderTop=`1px solid ${Ke.COLOR_LIGHT}`,D.style.paddingTop=`${Ke.GAP_SMALL}px`,D.style.paddingBottom=`${Ke.GAP_SMALL}px`,w.appendChild(D)};d.analysis instanceof Er?(k(d.analysis.initialColor,b.avg),k(d.analysis.initialColor,b.min),k(d.analysis.initialColor,b.max)):d.analysis instanceof wr&&(k(d.analysis.initialColor,b.avg),k(d.analysis.initialColor),k(d.analysis.initialColor)),h.appendChild(w)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(u=>u.thermalUrl);let l;o.forEach(u=>{l=n.batch.request(u,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",u=>{const d=100/t.columns;u.forEach(p=>{p instanceof nn&&this.buildInstance(p,d,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...Ke.DEFAULT_PROPS,fileName:i}:{...Ke.DEFAULT_PROPS,...t,fileName:i}}},c(Ke,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),Ke),xi,qg=(xi=class extends kt{constructor(){super(...arguments);c(this,"onSlotSync",new ee);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){if(i===1)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:t.slots.getSlot(i),serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(xi.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(xi.LISTENER_KEY),n.delete(xi.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const u=(a=n.slots.getSlot(l))==null?void 0:a.serialized,d=h.serialized;if(u!==d)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(d);else{const p=n.slots.createFromSerialized(d,l);p==null||p.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Gg(this)),this._csv}get png(){return this._png||(this._png=new Yg(this)),this._png}},c(xi,"LISTENER_KEY","__analysis__sync"),xi),Xg=class extends kt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof nn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},Kg=class extends Bc{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},Jg=class extends kt{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new ee);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new ee);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new ee);c(this,"_duration",0);c(this,"onDurationChanged",new ee);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof nn);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},Zg=class extends wa{constructor(e,t,i,s){super();c(this,"hash",Math.random());c(this,"minmax",new Kg(this,void 0));c(this,"files",new Xg(this,[]));c(this,"cursorPosition",new yg(this,void 0));c(this,"analysisSync",new qg(this,!1));c(this,"_playback");c(this,"forEveryInstance",e=>{this.files.value.forEach(t=>e(t))});c(this,"filters",new ba(this));this.registry=e,this.id=t,this.name=i,this.description=s}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new Jg(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(e){return this.registry.batch.getBatchById(e)}},ni=class eu extends Jc{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new eu(e.url,e.code,e.message)}},tu=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Qg=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(T,M)=>{const V=T.getBigInt64(M,!0),z=62135596800000n,j=10000n,R=24n*60n*60n*1000n*j,q=0x4000000000000000n,oe=0x8000000000000000n;let F=V&0x3fffffffffffffffn;V&oe&&(F>q-R&&(F-=q),F<0&&(F+=R));const ie=F/j-z;return Number(ie)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,u=l+h,d=r.slice(25),p=d.byteLength/u,b=T=>{const M=T*u,V=M+u,z=d.slice(M,V),j=new DataView(z),R=j.getFloat32(8,!0),q=j.getFloat32(12,!0),oe=n(j,0),$=j.getFloat32(24,!0),F=j.getFloat32(28,!0);return{timestamp:oe,min:R,max:q,emissivity:$,reflectedKelvins:F}},w=[];for(let T=0;T<p;T++){const M=b(T);w.push(M)}const S={emissivity:0,reflectedKelvins:0};let k=1/0,H=-1/0;const A=[];w.forEach(T=>{S.emissivity=S.emissivity+T.emissivity,S.reflectedKelvins=S.reflectedKelvins+T.reflectedKelvins,T.min<k&&(k=T.min),T.max>H&&(H=T.max),A.push(T.timestamp)});const D=A[0],W=[];A.forEach((T,M)=>{const V=A[M+1];let z=0;V===void 0&&(z=0),z=V-T;const j=T-D;W.push({absolute:T,relative:j,offset:isNaN(z)?0:z,index:M})});const I=w[w.length-1].timestamp-w[0].timestamp,K=I/p,x=1e3/K,L=w[0].timestamp;return{width:t,height:i,timestamp:L,bytesize:s,frameCount:p,duration:I,frameInterval:K,fps:x,timeline:W,min:k,max:H,averageEmissivity:S.emissivity/w.length,averageReflectedKelvins:S.reflectedKelvins/w.length}},em=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,u=r.slice(25),d=e*h,p=d+h;return{array:u.slice(d,p),dataType:i}},tm=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let u=i&0x3fffffffffffffffn;i&l&&(u>o-a&&(u-=o),u<0&&(u+=a));const p=u/n-s,b=Number(p),w=t.getFloat32(8,!0),S=t.getFloat32(12,!0),k=t.getFloat32(24,!0),H=t.getFloat32(28,!0),A=r.slice(57);let D=[];if(e===0){const W=new Uint16Array(A),I=Math.abs(w-S),K=65535;W.forEach(x=>{const L=x/K;D.push(w+I*L)})}else e===1&&(D=Array.from(new Float32Array(A)));return{timestamp:b,min:w,max:S,emissivity:k,reflectedKelvins:H,pixels:D}},rm=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(H,A)=>{const D=H.getBigInt64(A,!0),W=62135596800000n,I=10000n,K=24n*60n*60n*1000n*I,x=0x4000000000000000n,L=0x8000000000000000n;let M=D&0x3fffffffffffffffn;D&L&&(M>x-K&&(M-=x),M<0&&(M+=K));const z=M/I-W;return Number(z)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,u=s*n*l,d=h+u,p=r.slice(25),b=p.byteLength/d,w={},S=H=>{const A=H*d,D=A+d,W=p.slice(A,D),I=new DataView(W),K=a(I,0),x=I.getFloat32(8,!0),T=I.getFloat32(12,!0)-x,V=57+t*l*s+e*l;let z=0;if(o===1)z=I.getFloat32(V,!0);else if(o===0){const q=I.getInt16(V,!0)/65535;z=x+T*q}return{timestamp:K,temperature:z}};let k=0;for(let H=0;H<b;H++){const A=S(H);k===0&&(k=A.timestamp),w[A.timestamp-k]=A.temperature}return w},im=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(D,W)=>{const I=D.getBigInt64(W,!0),K=62135596800000n,x=10000n,L=24n*60n*60n*1000n*x,T=0x4000000000000000n,M=0x8000000000000000n;let z=I&0x3fffffffffffffffn;I&M&&(z>T-L&&(z-=T),z<0&&(z+=L));const R=z/x-K;return Number(R)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,b=d+p,w=r.slice(25),S=w.byteLength/b,k={},H=D=>{const W=D*b,I=W+b,K=w.slice(W,I),x=new DataView(K),L=l(x,0),T=x.getFloat32(8,!0),V=x.getFloat32(12,!0)-T,z=57,j=e,R=e+i,q=t,oe=t+s;let $=1/0,F=-1/0,fe=0,ie=0;for(let Be=q;Be<=oe;Be++){const ht=Be*a;for(let rt=j;rt<=R;rt++){const se=z+(ht+rt)*u;let he=NaN;if(h===1)he=x.getFloat32(se,!0);else{const Je=x.getInt16(se,!0)/65535;he=T+V*Je}he<$&&($=he),he>F&&(F=he),ie+=he,fe++}}const De={min:$,max:F,avg:ie/fe,count:fe};return{timestamp:L,result:De}};let A=0;for(let D=0;D<S;D++){const W=H(D);A===0&&(A=W.timestamp),k[W.timestamp-A]=W.result}return k},sm=async r=>{let e=[];const t=async k=>{const H=new DataView(k.slice(0,25)),A=H.getUint8(15),D=H.getUint16(17,!0),W=H.getUint16(19,!0),I=A===1?4:2,K=57,x=D*W*I,L=K+x,T=k.slice(25),M=T.byteLength/L;let V=[];for(let z=0;z<M;z++){const R=z*L+57,q=R+x,oe=T.slice(R,q);A===0||A===1&&(V=V.concat(Array.from(new Float32Array(oe))))}return V};(await Promise.all(r.map(k=>t(k)))).forEach(k=>{e=e.concat(k)}),e.sort((k,H)=>k-H);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=200,l=a/o,h=[];let u=[...e];for(let k=0;k<o;k++){const H=s+l*k,A=H+l,D=u.findIndex(L=>L>A),I=u.slice(0,D-1).length,K=I/e.length*100,x={from:H,to:A,count:I,percentage:K};h.push(x),u=u.slice(D)}const d=[...h].sort((k,H)=>k.percentage-H.percentage),p=d[0].percentage,b=d[d.length-1].percentage,w=Math.abs(p-b);return h.map(k=>({...k,height:k.percentage/w*100}))},nm=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},am=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(W,I)=>{const K=W.getBigInt64(I,!0),x=62135596800000n,L=10000n,T=24n*60n*60n*1000n*L,M=0x4000000000000000n,V=0x8000000000000000n;let j=K&0x3fffffffffffffffn;K&V&&(j>M-T&&(j-=M),j<0&&(j+=T));const q=j/L-x;return Number(q)},h=n.getUint8(15);let u=2;h===1&&(u=4);const d=57,p=a*o*u,b=d+p,w=r.slice(25),S=w.byteLength/b,k={},H=(W,I)=>{const K=e+i/2,x=t+s/2,L=(W-K)/(i/2),T=(I-x)/(s/2);return L*L+T*T<=1},A=W=>{const I=W*b,K=I+b,x=w.slice(I,K),L=new DataView(x),T=l(L,0),M=L.getFloat32(8,!0),z=L.getFloat32(12,!0)-M,j=57,R=e,q=e+i,oe=t,$=t+s;let F=1/0,fe=-1/0,ie=0,De=0;for(let ht=oe;ht<=$;ht++){const rt=ht*a;for(let se=R;se<=q;se++)if(H(se,ht)){const he=j+(rt+se)*u;let Ce=NaN;if(h===1)Ce=L.getFloat32(he,!0);else{const Ie=L.getInt16(he,!0)/65535;Ce=M+z*Ie}Ce<F&&(F=Ce),Ce>fe&&(fe=Ce),De+=Ce,ie++}}const Be={min:F,max:fe,avg:De/ie,count:ie};return{timestamp:T,result:Be}};let D=0;for(let W=0;W<S;W++){const I=A(W);D===0&&(D=I.timestamp),k[I.timestamp-D]=I.result}return k},om=[{extension:"lrc",minme:"application/octet-stream"}],lm={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:om,is:nm,baseInfo:Qg,getFrameSubset:em,frameData:tm,registryHistogram:sm,pointAnalysisData:rm,rectAnalysisData:im,ellipsisAnalysisData:am},ru=Object.freeze(lm),hm={LrcParser:ru},iu=Object.values(hm),su=(r,e)=>{const t=iu.find(i=>i.is(r,e));if(t===void 0)throw new tu(2,e,`No parser found for '${e}'.`);return t},nu=iu.map(r=>r.extensions),cm=nu.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),um=class au{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new au(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const t=await e;if(t.status!==200)return this.pocessTheService(new ni(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=su(i,this.thermalUrl);return this.pocessTheService(new $i(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof tu)return this.pocessTheService(ni.fromError(s));throw s}}pocessTheService(e){return e}},dm=class ou{constructor(e,t){c(this,"_hover",!1);c(this,"onMouseEnter",new ee);c(this,"onMouseLeave",new ee);c(this,"onDrop",new ee);c(this,"onProcessingEnd",new ee);c(this,"input");c(this,"hydrated",!1);c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t){const i=new ou(e,t);return i.hydrate(),i}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleDrop(e){e.preventDefault();const t=[],i=e.dataTransfer;if(i&&i.files){for(const s of Array.from(i.files))if(s){const n=await this.service.loadUploadedFile(s);t.push(n)}}return this.onDrop.call(t),this.handleLeave(),t}async handleInputChange(e){e.preventDefault();const t=e.target;if(t.files){const i=t.files[0],s=await this.service.loadUploadedFile(i);this.onDrop.call([s]),this.handleLeave()}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=cm,e}openFileDialog(){var e;(e=this.input)==null||e.click()}},pm=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new Zo(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=su(e,r.name);return new $i(this,e,t,r.name)}catch(e){return new ni(r.name,3,e.message)}}handleDropzone(r){return dm.listenOnElement(this,r)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=um.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}},fm=class extends kt{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},gm=class extends kt{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},Nh=class Eo{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new ee);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Eo(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Eo(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof $i?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},mm=class{constructor(r){c(this,"onBatchComplete",new ee);c(this,"set",new Set);this.registry=r}get size(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=Nh.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=Nh.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.size===0&&this.registry.loading.markAsLoaded()}},ym=class extends kt{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},vm=class extends kt{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new Zg(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},bm=class extends kt{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((b,w)=>{const S=w.reduce((k,H)=>[...k,...H],[]);return[...b,...S]},[]).sort((b,w)=>b-w);const h=n/a;let u=i+h;const d=new Map;let p=0;for(;u!==!1;){const b=l.findIndex(k=>k>u),w=l.slice(0,b).length;d.set(u-h/2,w),p+=w,l=l.slice(b);const S=u+h;u=S<s?S:!1}return{result:d,resultCount:p}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const t=this.parent.groups.value.map(s=>s.files.value).reduce((s,n)=>(s=s.concat(n),s),[]).map(s=>s.reader.buffer),i=await this.parent.pool.exec(ru.registryHistogram,[t]);this.value=i}},wm=class extends kt{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},xm=class extends Bc{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},Sm=class extends wa{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new vm(this,[]));c(this,"_batch");c(this,"onProcessingStart",new ee);c(this,"onProcessingEnd",new ee);c(this,"opacity",new ym(this,1));c(this,"minmax",new xm(this,void 0));c(this,"loading",new wm(this,!1));c(this,"range",new vg(this,void 0));c(this,"histogram",new bm(this,[]));c(this,"palette");c(this,"filters",new ba(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([i,s])=>{const n=this.groups.addOrGetGroup(i),a=await Promise.all(s.map(o=>this.service.loadFile(o.thermalUrl,o.visibleUrl)));return{group:n,groupFiles:a}}));await Promise.all(t.map(async({group:i,groupFiles:s})=>await Promise.all(s.map(async a=>a instanceof $i?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,t){this.reset();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl);s instanceof $i&&await s.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}get batch(){return this._batch||(this._batch=new mm(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},Sa=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},Jo=class extends Sa{},$m=class extends Jo{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Xc.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},km=class extends Jo{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},Pm=class extends Jo{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},_m=class extends Sa{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},lu=class extends Sa{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},Cm=[lu,Pm,km,$m,_m],Am=r=>{const e=Cm.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},Om=class extends kt{constructor(e,t){super(e,t);c(this,"_tools",Am(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof Sa?this.value=e:this.value=this.tools[e]}},Zo=class extends wa{constructor(e,t){super();c(this,"id");c(this,"service",new pm(this));c(this,"registries",{});c(this,"palette",new $g(this,"jet"));c(this,"smooth",new gm(this,!1));c(this,"graphSmooth",new fm(this,!1));c(this,"tool",new Om(this,new lu(this)));c(this,"pool");c(this,"filters",new ba(this));this.pool=e||mg.pool(),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new Sm(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},Em=Object.defineProperty,Lm=Object.getOwnPropertyDescriptor,nr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Lm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Em(e,t,s),s};const Wh=["ready","select"],Dm={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Ht=class extends cr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new ee,this.left=0,this.top=0,this.w=0,this.h=0}render(){return m`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Wp(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(Wh,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Dm[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{console.log("ready",this.chartWrapper.visualization.ha.O);const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!Wh.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await Oh({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(Oh).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Ht.styles=ge`
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
  `;nr([g({type:String,reflect:!0})],Ht.prototype,"type",2);nr([g({type:Array})],Ht.prototype,"events",2);nr([g({type:Object,hasChanged:()=>!0})],Ht.prototype,"options",2);nr([g({type:Array})],Ht.prototype,"cols",2);nr([g({type:Array})],Ht.prototype,"rows",2);nr([g({type:String})],Ht.prototype,"data",2);nr([g({type:Object})],Ht.prototype,"view",2);nr([g({type:Array})],Ht.prototype,"selection",2);nr([g({type:Object})],Ht.prototype,"_data",2);nr([g({type:Number,reflect:!0})],Ht.prototype,"left",2);nr([g({type:Number,reflect:!0})],Ht.prototype,"top",2);nr([g({type:Number,reflect:!0})],Ht.prototype,"w",2);nr([g({type:Number,reflect:!0})],Ht.prototype,"h",2);Ht=nr([te("thermal-chart")],Ht);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=()=>new Rm;class Rm{}const wo=new WeakMap,ve=ya(class extends Jd{render(r){return E}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),E}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=wo.get(e);t===void 0&&(t=new WeakMap,wo.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=wo.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var P=(r=>(r.loading="loading",r.next="next",r.prev="prev",r.back="back",r.close="close",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(P||{});const Mm=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],Hh=Object.fromEntries(Mm.map(r=>[r.code,r]));var Tm=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,hu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Im(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tm(e,t,s),s};let js=class extends cr{constructor(){super(),this.dialogRef=pe(),this.closeButtonRef=pe(),this.invokerRef=pe()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return m`
            <slot name="invoker" ${ve(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${ve(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${ve(this.closeButtonRef)} @click=${this.setClose}>

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
                        ${_(P.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};js.shadowRootOptions={...cr.shadowRootOptions,mode:"open"};js.styles=ge`

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

        
    
    `;hu([g({type:String,reflect:!0})],js.prototype,"label",2);js=hu([te("thermal-dialog")],js);let Un;const Um=new Uint8Array(16);function zm(){if(!Un&&(Un=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Un))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Un(Um)}const Ut=[];for(let r=0;r<256;++r)Ut.push((r+256).toString(16).slice(1));function Fm(r,e=0){return Ut[r[e+0]]+Ut[r[e+1]]+Ut[r[e+2]]+Ut[r[e+3]]+"-"+Ut[r[e+4]]+Ut[r[e+5]]+"-"+Ut[r[e+6]]+Ut[r[e+7]]+"-"+Ut[r[e+8]]+Ut[r[e+9]]+"-"+Ut[r[e+10]]+Ut[r[e+11]]+Ut[r[e+12]]+Ut[r[e+13]]+Ut[r[e+14]]+Ut[r[e+15]]}const jm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Bh={randomUUID:jm};function Nm(r,e,t){if(Bh.randomUUID&&!e&&!r)return Bh.randomUUID();r=r||{};const i=r.random||(r.rng||zm)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Fm(i)}var Wm=Object.defineProperty,Hm=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Wm(e,t,s),s};const El=class El extends cr{constructor(){super(...arguments),this.locale=ut.language}get UUID(){return this._UUID===void 0&&(this._UUID=Nm()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),ut.on("languageChanged",e=>{this.locale=e})}};El.shadowRootOptions={...cr.shadowRootOptions,mode:"open"};let ft=El;Hm([C()],ft.prototype,"locale");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cu=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vh=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new cu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bm{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vm=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class Gh extends Bm{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:u}]of this.subscriptions)l.has(h)||(l.add(h),u.dispatchEvent(new cu(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Vm(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new Gh(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Gh(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new Vh(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new Vh(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}const uu="tour-context",du="tour-step",pu="tourable-element";var Gm=Object.defineProperty,fu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Gm(e,t,s),s};class Gi extends ft{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}fu([g({type:String})],Gi.prototype,"tour");fu([ce({context:pu})],Gi.prototype,"tourableElement");var Ym=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,$a=(r,e,t,i)=>{for(var s=i>1?void 0:i?qm(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ym(e,t,s),s};let ai=class extends Gi{constructor(){super(...arguments),this.tourableElementRef=pe(),this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <button class="${this.variant}" ${ve(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};ai.VARIANTS=["slate","primary","foreground","background"];ai.shadowRootOptions={...cr.shadowRootOptions,mode:"open"};ai.styles=ge`

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
    }
    
    `;$a([g({type:String,converter:{fromAttribute:r=>{if(ai.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],ai.prototype,"variant",2);$a([g({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],ai.prototype,"interactive",2);$a([g({type:String})],ai.prototype,"size",2);ai=$a([te("thermal-button")],ai);const ki=Math.min,ii=Math.max,sa=Math.round,Pi=r=>({x:r,y:r}),Xm={left:"right",right:"left",bottom:"top",top:"bottom"},Km={start:"end",end:"start"};function Lo(r,e,t){return ii(r,ki(e,t))}function ys(r,e){return typeof r=="function"?r(e):r}function oi(r){return r.split("-")[0]}function an(r){return r.split("-")[1]}function gu(r){return r==="x"?"y":"x"}function Qo(r){return r==="y"?"height":"width"}function on(r){return["top","bottom"].includes(oi(r))?"y":"x"}function el(r){return gu(on(r))}function Jm(r,e,t){t===void 0&&(t=!1);const i=an(r),s=el(r),n=Qo(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=na(a)),[a,na(a)]}function Zm(r){const e=na(r);return[Do(r),e,Do(e)]}function Do(r){return r.replace(/start|end/g,e=>Km[e])}function Qm(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function ey(r,e,t,i){const s=an(r);let n=Qm(oi(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Do)))),n}function na(r){return r.replace(/left|right|bottom|top/g,e=>Xm[e])}function ty(r){return{top:0,right:0,bottom:0,left:0,...r}}function tl(r){return typeof r!="number"?ty(r):{top:r,right:r,bottom:r,left:r}}function hs(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function Yh(r,e,t){let{reference:i,floating:s}=r;const n=on(e),a=el(e),o=Qo(a),l=oi(e),h=n==="y",u=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,p=i[o]/2-s[o]/2;let b;switch(l){case"top":b={x:u,y:i.y-s.height};break;case"bottom":b={x:u,y:i.y+i.height};break;case"right":b={x:i.x+i.width,y:d};break;case"left":b={x:i.x-s.width,y:d};break;default:b={x:i.x,y:i.y}}switch(an(e)){case"start":b[a]-=p*(t&&h?-1:1);break;case"end":b[a]+=p*(t&&h?-1:1);break}return b}const ry=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:u,y:d}=Yh(h,i,l),p=i,b={},w=0;for(let S=0;S<o.length;S++){const{name:k,fn:H}=o[S],{x:A,y:D,data:W,reset:I}=await H({x:u,y:d,initialPlacement:i,placement:p,strategy:s,middlewareData:b,rects:h,platform:a,elements:{reference:r,floating:e}});u=A??u,d=D??d,b={...b,[k]:{...b[k],...W}},I&&w<=50&&(w++,typeof I=="object"&&(I.placement&&(p=I.placement),I.rects&&(h=I.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):I.rects),{x:u,y:d}=Yh(h,p,l)),S=-1)}return{x:u,y:d,placement:p,strategy:s,middlewareData:b}};async function mu(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:b=0}=ys(e,r),w=tl(b),k=o[p?d==="floating"?"reference":"floating":d],H=hs(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(k)))==null||t?k:k.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:u,strategy:l})),A=d==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),W=await(n.isElement==null?void 0:n.isElement(D))?await(n.getScale==null?void 0:n.getScale(D))||{x:1,y:1}:{x:1,y:1},I=hs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:A,offsetParent:D,strategy:l}):A);return{top:(H.top-I.top+w.top)/W.y,bottom:(I.bottom-H.bottom+w.bottom)/W.y,left:(H.left-I.left+w.left)/W.x,right:(I.right-H.right+w.right)/W.x}}const iy=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:u=0}=ys(r,e)||{};if(h==null)return{};const d=tl(u),p={x:t,y:i},b=el(s),w=Qo(b),S=await a.getDimensions(h),k=b==="y",H=k?"top":"left",A=k?"bottom":"right",D=k?"clientHeight":"clientWidth",W=n.reference[w]+n.reference[b]-p[b]-n.floating[w],I=p[b]-n.reference[b],K=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let x=K?K[D]:0;(!x||!await(a.isElement==null?void 0:a.isElement(K)))&&(x=o.floating[D]||n.floating[w]);const L=W/2-I/2,T=x/2-S[w]/2-1,M=ki(d[H],T),V=ki(d[A],T),z=M,j=x-S[w]-V,R=x/2-S[w]/2+L,q=Lo(z,R,j),oe=!l.arrow&&an(s)!=null&&R!==q&&n.reference[w]/2-(R<z?M:V)-S[w]/2<0,$=oe?R<z?R-z:R-j:0;return{[b]:p[b]+$,data:{[b]:q,centerOffset:R-q-$,...oe&&{alignmentOffset:$}},reset:oe}}}),sy=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:S=!0,...k}=ys(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const H=oi(s),A=oi(o)===o,D=await(l.isRTL==null?void 0:l.isRTL(h.floating)),W=p||(A||!S?[na(o)]:Zm(o));!p&&w!=="none"&&W.push(...ey(o,S,w,D));const I=[o,...W],K=await mu(e,k),x=[];let L=((i=n.flip)==null?void 0:i.overflows)||[];if(u&&x.push(K[H]),d){const z=Jm(s,a,D);x.push(K[z[0]],K[z[1]])}if(L=[...L,{placement:s,overflows:x}],!x.every(z=>z<=0)){var T,M;const z=(((T=n.flip)==null?void 0:T.index)||0)+1,j=I[z];if(j)return{data:{index:z,overflows:L},reset:{placement:j}};let R=(M=L.filter(q=>q.overflows[0]<=0).sort((q,oe)=>q.overflows[1]-oe.overflows[1])[0])==null?void 0:M.placement;if(!R)switch(b){case"bestFit":{var V;const q=(V=L.map(oe=>[oe.placement,oe.overflows.filter($=>$>0).reduce(($,F)=>$+F,0)]).sort((oe,$)=>oe[1]-$[1])[0])==null?void 0:V[0];q&&(R=q);break}case"initialPlacement":R=o;break}if(s!==R)return{reset:{placement:R}}}return{}}}};function yu(r){const e=ki(...r.map(n=>n.left)),t=ki(...r.map(n=>n.top)),i=ii(...r.map(n=>n.right)),s=ii(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function ny(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>hs(yu(s)))}const ay=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=ys(r,e),u=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),d=ny(u),p=hs(yu(u)),b=tl(o);function w(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&h!=null)return d.find(k=>l>k.left-b.left&&l<k.right+b.right&&h>k.top-b.top&&h<k.bottom+b.bottom)||p;if(d.length>=2){if(on(t)==="y"){const M=d[0],V=d[d.length-1],z=oi(t)==="top",j=M.top,R=V.bottom,q=z?M.left:V.left,oe=z?M.right:V.right,$=oe-q,F=R-j;return{top:j,bottom:R,left:q,right:oe,width:$,height:F,x:q,y:j}}const k=oi(t)==="left",H=ii(...d.map(M=>M.right)),A=ki(...d.map(M=>M.left)),D=d.filter(M=>k?M.left===A:M.right===H),W=D[0].top,I=D[D.length-1].bottom,K=A,x=H,L=x-K,T=I-W;return{top:W,bottom:I,left:K,right:x,width:L,height:T,x:K,y:W}}return p}const S=await n.getElementRects({reference:{getBoundingClientRect:w},floating:i.floating,strategy:a});return s.reference.x!==S.reference.x||s.reference.y!==S.reference.y||s.reference.width!==S.reference.width||s.reference.height!==S.reference.height?{reset:{rects:S}}:{}}}};async function oy(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=oi(t),o=an(t),l=on(t)==="y",h=["left","top"].includes(a)?-1:1,u=n&&l?-1:1,d=ys(e,r);let{mainAxis:p,crossAxis:b,alignmentAxis:w}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return o&&typeof w=="number"&&(b=o==="end"?w*-1:w),l?{x:b*u,y:p*h}:{x:p*h,y:b*u}}const ly=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await oy(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},hy=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:k=>{let{x:H,y:A}=k;return{x:H,y:A}}},...l}=ys(r,e),h={x:t,y:i},u=await mu(e,l),d=on(oi(s)),p=gu(d);let b=h[p],w=h[d];if(n){const k=p==="y"?"top":"left",H=p==="y"?"bottom":"right",A=b+u[k],D=b-u[H];b=Lo(A,b,D)}if(a){const k=d==="y"?"top":"left",H=d==="y"?"bottom":"right",A=w+u[k],D=w-u[H];w=Lo(A,w,D)}const S=o.fn({...e,[p]:b,[d]:w});return{...S,data:{x:S.x-t,y:S.y-i}}}}};function vs(r){return vu(r)?(r.nodeName||"").toLowerCase():"#document"}function ur(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function Li(r){var e;return(e=(vu(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function vu(r){return r instanceof Node||r instanceof ur(r).Node}function Hr(r){return r instanceof Element||r instanceof ur(r).Element}function Br(r){return r instanceof HTMLElement||r instanceof ur(r).HTMLElement}function qh(r){return typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof ur(r).ShadowRoot}function ln(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Lr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function cy(r){return["table","td","th"].includes(vs(r))}function ka(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function rl(r){const e=il(),t=Lr(r);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function uy(r){let e=_i(r);for(;Br(e)&&!cs(e);){if(ka(e))return null;if(rl(e))return e;e=_i(e)}return null}function il(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cs(r){return["html","body","#document"].includes(vs(r))}function Lr(r){return ur(r).getComputedStyle(r)}function Pa(r){return Hr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function _i(r){if(vs(r)==="html")return r;const e=r.assignedSlot||r.parentNode||qh(r)&&r.host||Li(r);return qh(e)?e.host:e}function bu(r){const e=_i(r);return cs(e)?r.ownerDocument?r.ownerDocument.body:r.body:Br(e)&&ln(e)?e:bu(e)}function Ro(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=bu(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=ur(s);return n?e.concat(a,a.visualViewport||[],ln(s)?s:[],a.frameElement&&t?Ro(a.frameElement):[]):e.concat(s,Ro(s,[],t))}function wu(r){const e=Lr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Br(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=sa(t)!==n||sa(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function xu(r){return Hr(r)?r:r.contextElement}function ns(r){const e=xu(r);if(!Br(e))return Pi(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=wu(e);let a=(n?sa(t.width):t.width)/i,o=(n?sa(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const dy=Pi(0);function Su(r){const e=ur(r);return!il()||!e.visualViewport?dy:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function py(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==ur(r)?!1:e}function Ns(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=xu(r);let a=Pi(1);e&&(i?Hr(i)&&(a=ns(i)):a=ns(r));const o=py(n,t,i)?Su(n):Pi(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(n){const p=ur(n),b=i&&Hr(i)?ur(i):i;let w=p,S=w.frameElement;for(;S&&i&&b!==w;){const k=ns(S),H=S.getBoundingClientRect(),A=Lr(S),D=H.left+(S.clientLeft+parseFloat(A.paddingLeft))*k.x,W=H.top+(S.clientTop+parseFloat(A.paddingTop))*k.y;l*=k.x,h*=k.y,u*=k.x,d*=k.y,l+=D,h+=W,w=ur(S),S=w.frameElement}}return hs({width:u,height:d,x:l,y:h})}function fy(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=Li(i),o=e?ka(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=Pi(1);const u=Pi(0),d=Br(i);if((d||!d&&!n)&&((vs(i)!=="body"||ln(a))&&(l=Pa(i)),Br(i))){const p=Ns(i);h=ns(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+u.x,y:t.y*h.y-l.scrollTop*h.y+u.y}}function gy(r){return Array.from(r.getClientRects())}function $u(r){return Ns(Li(r)).left+Pa(r).scrollLeft}function my(r){const e=Li(r),t=Pa(r),i=r.ownerDocument.body,s=ii(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=ii(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+$u(r);const o=-t.scrollTop;return Lr(i).direction==="rtl"&&(a+=ii(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function yy(r,e){const t=ur(r),i=Li(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=il();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function vy(r,e){const t=Ns(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=Br(r)?ns(r):Pi(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function Xh(r,e,t){let i;if(e==="viewport")i=yy(r,t);else if(e==="document")i=my(Li(r));else if(Hr(e))i=vy(e,t);else{const s=Su(r);i={...e,x:e.x-s.x,y:e.y-s.y}}return hs(i)}function ku(r,e){const t=_i(r);return t===e||!Hr(t)||cs(t)?!1:Lr(t).position==="fixed"||ku(t,e)}function by(r,e){const t=e.get(r);if(t)return t;let i=Ro(r,[],!1).filter(o=>Hr(o)&&vs(o)!=="body"),s=null;const n=Lr(r).position==="fixed";let a=n?_i(r):r;for(;Hr(a)&&!cs(a);){const o=Lr(a),l=rl(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ln(a)&&!l&&ku(r,a))?i=i.filter(u=>u!==a):s=o,a=_i(a)}return e.set(r,i),i}function wy(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?ka(e)?[]:by(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,u)=>{const d=Xh(e,u,s);return h.top=ii(d.top,h.top),h.right=ki(d.right,h.right),h.bottom=ki(d.bottom,h.bottom),h.left=ii(d.left,h.left),h},Xh(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xy(r){const{width:e,height:t}=wu(r);return{width:e,height:t}}function Sy(r,e,t){const i=Br(e),s=Li(e),n=t==="fixed",a=Ns(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=Pi(0);if(i||!i&&!n)if((vs(e)!=="body"||ln(s))&&(o=Pa(e)),i){const d=Ns(e,!0,n,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=$u(s));const h=a.left+o.scrollLeft-l.x,u=a.top+o.scrollTop-l.y;return{x:h,y:u,width:a.width,height:a.height}}function xo(r){return Lr(r).position==="static"}function Kh(r,e){return!Br(r)||Lr(r).position==="fixed"?null:e?e(r):r.offsetParent}function Pu(r,e){const t=ur(r);if(ka(r))return t;if(!Br(r)){let s=_i(r);for(;s&&!cs(s);){if(Hr(s)&&!xo(s))return s;s=_i(s)}return t}let i=Kh(r,e);for(;i&&cy(i)&&xo(i);)i=Kh(i,e);return i&&cs(i)&&xo(i)&&!rl(i)?t:i||uy(r)||t}const $y=async function(r){const e=this.getOffsetParent||Pu,t=this.getDimensions,i=await t(r.floating);return{reference:Sy(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ky(r){return Lr(r).direction==="rtl"}const Py={convertOffsetParentRelativeRectToViewportRelativeRect:fy,getDocumentElement:Li,getClippingRect:wy,getOffsetParent:Pu,getElementRects:$y,getClientRects:gy,getDimensions:xy,getScale:ns,isElement:Hr,isRTL:ky},_u=ly,_y=hy,Cy=sy,Ay=iy,Oy=ay,Cu=(r,e,t)=>{const i=new Map,s={platform:Py,...t},n={...s.platform,_c:i};return ry(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=ya(class extends Vo{constructor(r){var e;if(super(r),r.type!==ri.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Si}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=r=>r??E;var Ey=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,hn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ly(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ey(e,t,s),s};let li=class extends Gi{constructor(){super(...arguments),this.dropdownRef=pe(),this.invokerRef=pe(),this.optionsRef=pe(),this.open="close",this.interactive="on"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Cu(this.invokerRef.value,this.optionsRef.value,{middleware:[_u(2),Cy(),Oy(),_y()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return m`

            <div class="dropdown" ${ve(this.dropdownRef)}>

                <thermal-button 
                    class="${Vt(r)}" 
                    ${ve(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${de(this.variant)}" 
                    interactive="${this.interactive==="on"?"true":"false"}"
                    part="invoker"
                >
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
                <div class="dropdown-options" ${ve(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>

            <slot> name="tour"</slot>
        
        `}};li.shadowRootOptions={...cr.shadowRootOptions,mode:"open"};li.styles=ge`

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
    
    `;hn([Ei({slot:"option"})],li.prototype,"_options",2);hn([g({type:String,reflect:!0})],li.prototype,"open",2);hn([g({type:String,reflect:!0,attribute:!0}),C()],li.prototype,"interactive",2);hn([C(),g({type:String,reflect:!0,attribute:!0})],li.prototype,"variant",2);li=hn([te("thermal-dropdown")],li);var Dy=Object.defineProperty,Ry=Object.getOwnPropertyDescriptor,_a=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ry(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dy(e,t,s),s};let us=class extends cr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=pe(),this.contentRef=pe(),this.rulerContentRef=pe()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return m`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${ve(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${ve(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${ve(this.contentRef)}>

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
        
        `}};us.styles=ge`

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

    `;_a([C()],us.prototype,"collapsed",2);_a([C()],us.prototype,"lastContentWidth",2);_a([C()],us.prototype,"drawerRef",2);us=_a([te("thermal-bar")],us);var My=Object.defineProperty,Ty=Object.getOwnPropertyDescriptor,Pr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ty(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&My(e,t,s),s};let er=class extends ft{constructor(){super(...arguments),this.language=ut.language,this.fullscreen="off",this.showfullscreen=!0,this.dark=!1,this.appRef=pe(),this.contentRef=pe()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),ut.on("languageChanged",()=>{this.language=ut.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const n=t.contentRect.height,a=t.contentRect.width,o=n-175,l=a-0,h=this.contentRef.value.offsetHeight,u=4/3;let d=0,p=0;h<o?(console.log("priorita šířky"),d=l,p=d/u):(console.log("priorita výšky"),p=o,d=p*u),this.contentRef.value.setAttribute("style",`width: ${d}px !important; height: ${p}px !important; align-self: center; justify-self: center;`)}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return m`

        <div class="container ${this.dark?"dark":"normal"}" ${ve(this.appRef)}>

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
                                @click=${()=>{ut.changeLanguage(r),this.language=r}}
                            >${Hh[r].flag} ${Hh[r].name}</thermal-button>
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


            <div class="content" part="app-content" ${ve(this.contentRef)}>
                <slot></slot>
            </div>

            <div class="post">
                <slot name="post"></slot>
            </div>

            ${this.author||this.license||this.recorded?m`<div class="credits">

                    ${this.recorded?m`<div>
                            <div class="credits-field">${_(P.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:E}

                    ${this.author?m`<div>
                            <div class="credits-field">${_(P.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:E}

                    ${this.license?m`<div>
                            <div class="credits-field">${_(P.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:E}

                </div>`:E}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

        </div>
        
        `}};er.styles=ge`

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
    
    `;Pr([C()],er.prototype,"language",2);Pr([Ei({slot:"bar",flatten:!0})],er.prototype,"barElements",2);Pr([Ei({slot:"pre",flatten:!0})],er.prototype,"preElements",2);Pr([Ei({slot:"content",flatten:!0})],er.prototype,"contentElements",2);Pr([g({type:String,reflect:!0})],er.prototype,"fullscreen",2);Pr([g({type:String,reflect:!0,attribute:!0})],er.prototype,"showfullscreen",2);Pr([g({type:String,reflect:!0,attribute:!0})],er.prototype,"dark",2);Pr([g()],er.prototype,"author",2);Pr([g()],er.prototype,"recorded",2);Pr([g()],er.prototype,"license",2);Pr([g()],er.prototype,"label",2);er=Pr([te("thermal-app")],er);var Iy=Object.defineProperty,Uy=Object.getOwnPropertyDescriptor,sl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iy(e,t,s),s};let Ws=class extends cr{render(){return m`

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
        
        `}};Ws.styles=ge`
    
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

    `;sl([g({type:String})],Ws.prototype,"label",2);sl([g({type:String})],Ws.prototype,"hint",2);Ws=sl([te("thermal-field")],Ws);var zy=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,bs=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zy(e,t,s),s};let hi=class extends ft{render(){return E}};bs([g({type:String,reflect:!0,attribute:!0})],hi.prototype,"thermal",2);bs([g({type:String,reflect:!0,attribute:!0})],hi.prototype,"visible",2);bs([g({type:String,reflect:!0,attribute:!0})],hi.prototype,"author",2);bs([g({type:String,reflect:!0,attribute:!0})],hi.prototype,"note",2);bs([g({type:String,reflect:!0,attribute:!0})],hi.prototype,"label",2);hi=bs([te("time-entry")],hi);const jy=new Zo;window.Thermal={managers:new Map};window.Thermal.managers.set("default",jy);const Ca=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new Zo(void 0,e);return window.Thermal.managers.set(r,t),t}},Ny=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class aa extends Vo{constructor(e){if(super(e),this.it=E,e.type!==ri.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this._t=void 0,this.it=e;if(e===Si)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}aa.directiveName="unsafeHTML",aa.resultType=1;const Ft=ya(aa),Ll=class Ll{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?E:m`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${_(P.note).toLocaleLowerCase()}</button>
            <div slot="content">${Ft(t)}</div>
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
                                <file-button slot="invoker" label="${_(P.info).toLocaleLowerCase()}"></file-button>
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
        
        </div>`}};Ll.styles=ge`


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

    `;let ds=Ll;const Dl=class Dl{constructor(e){this.element=e,this.instanceRenderer=new ds(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?m`
                <div class="group-header">
                
                    ${e?m`<h2 class="group-title">${e}</h2>`:E}

                    ${t?m`<p class="group-info">${t}</p>`:E}

                </div>
            `:E}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return m`

            <section class="${Vt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Vt(o)}>

                    ${e.files.map(({instance:h,innerHtml:u,label:d,time:p})=>this.instanceRenderer.renderInstance(h,p,s,d,u))}

                </div>

            </section>

        `}};Dl.styles=ge`


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

    `;let Hs=Dl,Wy=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof ni)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?zc(e).getTime():this.grouping==="day"?ea(e).getTime():this.grouping==="week"?si(e).getTime():this.grouping==="month"?ra(e).getTime():this.grouping==="year"?Xo(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Lc(e).getTime():this.grouping==="day"?Oc(e).getTime():this.grouping==="week"?ia(e).getTime():this.grouping==="month"?ta(e).getTime():this.grouping==="year"?Ec(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:ke(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:ke(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+ke(e,"w")+" of "+ke(e,"yyyy"),info:[tt.humanDate(si(e).getTime()),tt.humanDate(ia(e).getTime())].join(" - ")}:this.grouping==="month"?{label:ke(e,"MMMM yyyy"),info:[tt.humanDate(ra(e).getTime()),tt.humanDate(ta(e).getTime())].join(" - ")}:this.grouping==="year"?{label:ke(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?tt.human(e):this.grouping==="hour"||this.grouping==="day"?ke(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",tt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var Hy=Object.defineProperty,By=Object.getOwnPropertyDescriptor,ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?By(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hy(e,t,s),s};let jt=class extends ft{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=Ca(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Wy(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof hi))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return m`
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

        `}};jt.styles=[ds.styles,Hs.styles,ge`

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
    
    `];ar([C(),Ei({slot:"entry",flatten:!0})],jt.prototype,"entries",2);ar([C()],jt.prototype,"groups",2);ar([C()],jt.prototype,"instances",2);ar([g()],jt.prototype,"columns",2);ar([g()],jt.prototype,"breakpoint",2);ar([g({type:Number,reflect:!0})],jt.prototype,"width",2);ar([g({type:String,reflect:!0})],jt.prototype,"grouping",2);ar([g()],jt.prototype,"name",2);ar([g()],jt.prototype,"slug",2);ar([C()],jt.prototype,"scopeSlug",2);ar([g({type:Object})],jt.prototype,"onInstanceEnter",2);ar([g({type:Object})],jt.prototype,"onInstanceLeave",2);ar([g({type:Object})],jt.prototype,"groupRenderer",2);jt=ar([te("time-group")],jt);var Vy=Object.defineProperty,Gy=Object.getOwnPropertyDescriptor,ws=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vy(e,t,s),s};const nl={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let Ci=class extends ft{constructor(){super(...arguments),this.tRef=pe(),this.vRef=pe(),this.vunitsRef=pe(),this.haRef=pe(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?Ft(i):i;return m`
            <div class="field">

                <div class="column column__label">
                    <label for=${e}>
                        ${t}
                    </label>
                </div>
                <div class="column column__value">

                    <div class="input_wrapper">
                        <input 
                            ${ve(r)} 
                            id=${e}
                            name=${e}
                            value=${de(s)}
                            min=${de(n)}
                            max=${de(a)}
                            step=${de(o)}
                            type="number"
                            @blur=${u=>{const d=u.target,p=d.value.trim();p===""||p===void 0||p===null?this[e]=void 0:this[e]=parseFloat(d.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?m`<label for=${e}>${l}</label>`:E}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=_(P.apparenttemperatureverbose,i),n=t<0?_(P.youfeelcolder,i):_(P.youfeelwarmer,i),a=r.toFixed(2);return m`<div class="result">

            <p class="result_label">${_(P.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return m`
            <thermal-app label=${_(P.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${_(P.info)}>
                    <thermal-button slot="invoker">${_(P.info)}</thermal-button>
                    <div slot="content">
                        ${Ft(_(P.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?m`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:E}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",_(P.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",_(P.windspeed),m`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${ve(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",_(P.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):E}
                </div>
                

            </thermal-app>
        `}};Ci.styles=ge`

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


    `;ws([g({type:String,reflect:!0,attribute:!0,converter:nl})],Ci.prototype,"t",2);ws([g({type:String,reflect:!0,attribute:!0,converter:nl})],Ci.prototype,"v",2);ws([g({type:String,reflect:!0,attribute:!0,converter:nl})],Ci.prototype,"ha",2);ws([C()],Ci.prototype,"ta",2);ws([g({type:String,reflect:!0,attribute:!0})],Ci.prototype,"vunits",2);Ci=ws([te("apparent-temperature-aat")],Ci);var Yy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,Xy=(r,e,t,i)=>{for(var s=i>1?void 0:i?qy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yy(e,t,s),s};let Mo=class extends Gi{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`
            <thermal-dialog label="Thermal images in the browser">
                <thermal-button slot="invoker" ${ve(this.tourableElementRef)}>About</thermal-button>
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
                        <p>version ${Bo}</p>
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
        `}};Mo.styles=ge`

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
    
    `;Mo=Xy([te("app-info-button")],Mo);const al="manager-instance",cn="manager-palette-context",ol="manager-smooth-context",Aa="manager-graph-function-context",un="tool-context",dn="tools-context";var Ky=Object.defineProperty,Au=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Ky(e,t,s),s};class Oa extends Gi{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Wr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=Ca(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&Ny(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(Wr).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:Wr[e]}}render(){return m`<slot></slot>`}}Au([ce({context:un})],Oa.prototype,"tool");Au([ce({context:dn})],Oa.prototype,"tools");var Jy=Object.defineProperty,Zy=Object.getOwnPropertyDescriptor,di=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jy(e,t,s),s};let Vr=class extends Oa{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Wr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};di([ce({context:al})],Vr.prototype,"manager",2);di([g({type:String,reflect:!0,attribute:!0})],Vr.prototype,"slug",2);di([ce({context:cn}),g({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:Wr[r]}),toAttribute:r=>r.key.toString()}})],Vr.prototype,"palette",2);di([ce({context:ol}),g({type:String,reflect:!0,attribute:!0})],Vr.prototype,"smooth",2);di([ce({context:Aa}),g({type:String,reflect:!0,attribute:!0})],Vr.prototype,"graphSmooth",2);di([g({type:Boolean,reflect:!0})],Vr.prototype,"autoclear",2);di([ce({context:un})],Vr.prototype,"tool",2);di([ce({context:dn})],Vr.prototype,"tools",2);Vr=di([te("manager-provider")],Vr);var Qy=Object.defineProperty,ev=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Qy(e,t,s),s};class xs extends Gi{connectedCallback(){super.connectedCallback(),this.manager}}ev([me({context:al,subscribe:!0}),C()],xs.prototype,"manager");const ll="registry-instance",hl="registry-opacity",Ea="registry-range-from",La="registry-range-to",Ou="registry-loading",cl="registry-min",ul="registry-max",Eu="registry-highlight",Da="registry-highlight-setter";var tv=Object.defineProperty,Lu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&tv(e,t,s),s};class Ra extends xs{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return m`<slot></slot>`}}Lu([ce({context:Eu})],Ra.prototype,"highlight");Lu([ce({context:Da})],Ra.prototype,"setHighlight");var rv=Object.defineProperty,iv=Object.getOwnPropertyDescriptor,Yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rv(e,t,s),s};let Dr=class extends Ra{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};Yr([g({type:String,reflect:!0,attribute:!0})],Dr.prototype,"slug",2);Yr([ce({context:ll})],Dr.prototype,"registry",2);Yr([ce({context:hl}),g({type:Number,reflect:!0,attribute:!0})],Dr.prototype,"opacity",2);Yr([ce({context:cl}),C()],Dr.prototype,"min",2);Yr([ce({context:ul}),C()],Dr.prototype,"max",2);Yr([ce({context:Ea}),g({type:Number,reflect:!0,attribute:!0})],Dr.prototype,"from",2);Yr([ce({context:La}),g({type:Number,reflect:!0,attribute:!0})],Dr.prototype,"to",2);Yr([ce({context:Ou}),g({type:String,reflect:!0,attribute:!0})],Dr.prototype,"loading",2);Yr([g({type:Boolean,reflect:!0})],Dr.prototype,"autoclear",2);Dr=Yr([te("registry-provider")],Dr);var sv=Object.defineProperty,nv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&sv(e,t,s),s};class fr extends xs{connectedCallback(){super.connectedCallback(),this.registry}}nv([me({context:ll,subscribe:!0})],fr.prototype,"registry");class Du extends fr{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return m`<slot></slot>`}}const dl="group-instance";var av=Object.defineProperty,ov=Object.getOwnPropertyDescriptor,Ma=(r,e,t,i)=>{for(var s=i>1?void 0:i?ov(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&av(e,t,s),s};let Bs=class extends Du{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};Ma([g({type:String,attribute:!0,reflect:!0})],Bs.prototype,"slug",2);Ma([ce({context:dl})],Bs.prototype,"group",2);Ma([g({type:Boolean,reflect:!0})],Bs.prototype,"autoclear",2);Bs=Ma([te("group-provider")],Bs);var lv=Object.defineProperty,hv=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&lv(e,t,s),s};class Di extends fr{constructor(){super()}connectedCallback(){super.connectedCallback()}}hv([me({context:dl,subscribe:!0})],Di.prototype,"group");const pl="file",Ru="failure",Mu="file-loading",cv="file-loaded",Ta="file-provider-element",Ia="file-ms-context",fl="file-cursor",Tu="file-cursor-setter",pn="playback",gl="duration",Ua="playing",ml="playbackSpeed",yl="recording",Iu="mayStop",uv="analysislist",vl="file-markers-context";var dv=Object.defineProperty,qt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&dv(e,t,s),s};class Mt extends Di{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new ee,this.onSuccess=new ee,this.onFailure=new ee,this.onInstanceCreated=new ee}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return m`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}qt([ce({context:pl}),C()],Mt.prototype,"file");qt([ce({context:Ru}),C()],Mt.prototype,"failure");qt([ce({context:Mu}),C()],Mt.prototype,"loading");qt([ce({context:cv})],Mt.prototype,"ready");qt([ce({context:gl}),C()],Mt.prototype,"duration");qt([ce({context:pn})],Mt.prototype,"currentFrame");qt([ce({context:fl})],Mt.prototype,"cursor");qt([ce({context:Ia})],Mt.prototype,"ms");qt([ce({context:ml})],Mt.prototype,"speed");qt([ce({context:yl})],Mt.prototype,"recording");qt([ce({context:Ua})],Mt.prototype,"playing");qt([ce({context:Iu}),C()],Mt.prototype,"mayStop");qt([Ei({slot:"mark",flatten:!0})],Mt.prototype,"marksQueriedInternally");qt([ce({context:vl})],Mt.prototype,"marksProvidedBelow");qt([ce({context:uv})],Mt.prototype,"analysis");var pv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,Bt=(r,e,t,i)=>{for(var s=i>1?void 0:i?fv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pv(e,t,s),s};let Nt=class extends Mt{constructor(){super(...arguments),this.ms=0,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof $i?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof nn?(this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof ni&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};Bt([g({type:Number,reflect:!0,attribute:!0}),ce({context:Ia})],Nt.prototype,"ms",2);Bt([g({type:Number,reflect:!0,attribute:!0}),ce({context:ml})],Nt.prototype,"speed",2);Bt([ce({context:Ta})],Nt.prototype,"providedSelf",2);Bt([g({type:String,reflect:!0,attribute:!0}),ce({context:yl})],Nt.prototype,"recording",2);Bt([g({type:String,reflect:!0,attribute:!0}),ce({context:Ua})],Nt.prototype,"playing",2);Bt([g({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Nt.prototype,"batch",2);Bt([g({type:String,attribute:!0,reflect:!0})],Nt.prototype,"thermal",2);Bt([g({type:String,attribute:!0,reflect:!0})],Nt.prototype,"visible",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis1",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis2",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis3",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis4",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis5",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis6",2);Bt([g({type:String,reflect:!0,attribute:!0})],Nt.prototype,"analysis7",2);Nt=Bt([te("file-provider")],Nt);var gv=Object.defineProperty,mv=Object.getOwnPropertyDescriptor,Ss=(r,e,t,i)=>{for(var s=i>1?void 0:i?mv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&gv(e,t,s),s};let Ai=class extends Mt{constructor(){super(...arguments),this.providedSelf=this,this.container=pe(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof $i){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof ni&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return m`

                    <div class="container">
                        <div ${ve(this.container)} class="${Vt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${nu.map(e=>e.map(t=>"."+t.extension))}</p>
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
        `}};Ai.styles=ge`

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
    
    `;Ss([ce({context:Ta})],Ai.prototype,"providedSelf",2);Ss([C()],Ai.prototype,"container",2);Ss([C()],Ai.prototype,"ready",2);Ss([C()],Ai.prototype,"hover",2);Ss([C()],Ai.prototype,"listener",2);Ai=Ss([te("file-dropin")],Ai);var yv=Object.defineProperty,vv=Object.getOwnPropertyDescriptor,bl=(r,e,t,i)=>{for(var s=i>1?void 0:i?vv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yv(e,t,s),s};let Vs=class extends Di{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){if(super.firstUpdated(r),this.log(this.container.value),this.container.value!==void 0){const e=this.manager.service.handleDropzone(this.container.value);e.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),e.onMouseLeave.add(this.UUID,()=>{this.hover=!1})}}render(){const r={dropin:!0,hover:this.hover};return m`

            <div class="container" ${ve(this.tourableElementRef)}>
            
                <div ${ve(this.container)} class="${Vt(r)}"></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Vs.styles=ge`

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
    
    `;bl([C()],Vs.prototype,"container",2);bl([C()],Vs.prototype,"hover",2);Vs=bl([te("group-dropin")],Vs);var bv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,pi=(r,e,t,i)=>{for(var s=i>1?void 0:i?wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bv(e,t,s),s};let Gr=class extends Oa{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:Wr.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};pi([ce({context:al})],Gr.prototype,"manager",2);pi([g({type:String})],Gr.prototype,"slug",2);pi([ce({context:cn}),g({type:String,converter:{fromAttribute:r=>({key:r,data:Wr[r]}),toAttribute:r=>r.key.toString()}})],Gr.prototype,"palette",2);pi([ce({context:ol}),g({type:String})],Gr.prototype,"smooth",2);pi([ce({context:Aa}),g({type:String})],Gr.prototype,"graphSmooth",2);pi([g({type:Boolean})],Gr.prototype,"autoclear",2);pi([ce({context:un})],Gr.prototype,"tool",2);pi([ce({context:dn})],Gr.prototype,"tools",2);Gr=pi([te("manager-mirror")],Gr);var xv=Object.defineProperty,Sv=Object.getOwnPropertyDescriptor,qr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Sv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&xv(e,t,s),s};let Rr=class extends Ra{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};qr([g({type:String,reflect:!0,attribute:!0})],Rr.prototype,"slug",2);qr([ce({context:ll})],Rr.prototype,"registry",2);qr([ce({context:hl}),g({type:Number,reflect:!0,attribute:!0})],Rr.prototype,"opacity",2);qr([ce({context:cl}),C()],Rr.prototype,"min",2);qr([ce({context:ul}),C()],Rr.prototype,"max",2);qr([ce({context:Ea}),g({type:Number})],Rr.prototype,"from",2);qr([ce({context:La}),g({type:Number})],Rr.prototype,"to",2);qr([ce({context:Ou}),g({type:String})],Rr.prototype,"loading",2);qr([g({type:Boolean})],Rr.prototype,"autoclear",2);Rr=qr([te("registry-mirror")],Rr);var $v=Object.defineProperty,kv=Object.getOwnPropertyDescriptor,za=(r,e,t,i)=>{for(var s=i>1?void 0:i?kv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$v(e,t,s),s};let Gs=class extends Du{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};za([g({type:String})],Gs.prototype,"slug",2);za([ce({context:dl})],Gs.prototype,"group",2);za([g({type:Boolean})],Gs.prototype,"autoclear",2);Gs=za([te("group-mirror")],Gs);var Pv=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,gr=(r,e,t,i)=>{for(var s=i>1?void 0:i?_v(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Pv(e,t,s),s};let tr=class extends Mt{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};gr([ce({context:Ta})],tr.prototype,"providedSelf",2);gr([ce({context:pl}),g()],tr.prototype,"file",2);gr([g({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],tr.prototype,"batch",2);gr([g({type:String})],tr.prototype,"thermal",2);gr([g({type:String})],tr.prototype,"visible",2);gr([g({type:String})],tr.prototype,"analysis1",2);gr([g({type:String})],tr.prototype,"analysis2",2);gr([g({type:String})],tr.prototype,"analysis3",2);gr([g({type:String})],tr.prototype,"analysis4",2);gr([g({type:String})],tr.prototype,"analysis5",2);gr([g({type:String})],tr.prototype,"analysis6",2);gr([g({type:String})],tr.prototype,"analysis7",2);tr=gr([te("file-mirror")],tr);var Cv=Object.defineProperty,Av=Object.getOwnPropertyDescriptor,Uu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Av(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Cv(e,t,s),s};let oa=class extends fr{constructor(){super(...arguments),this.tourableElemtnRef=pe()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return m`

            <thermal-dropdown variant="foreground" ${ve(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Wr).map(([r,e])=>m`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

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
    }

    .palette {
        display: block;
        width: calc( var( --thermal-gap ) * 2 );
        height: calc( var( --thermal-fs ) * .8 );
        // height: .9em;
        border-radius: var( --thermal-fs-small );
    }

    `;Uu([me({context:cn,subscribe:!0})],oa.prototype,"value",2);oa=Uu([te("registry-palette-dropdown")],oa);var Ov=Object.defineProperty,Ev=Object.getOwnPropertyDescriptor,zu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ev(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ov(e,t,s),s};let la=class extends fr{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return m`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${_(P.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return m`
            <div class="container" ${ve(this.tourableElementRef)}>
                ${Object.entries(Wr).map(([r,e])=>m`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};la.styles=ge`

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

    `;zu([me({context:cn,subscribe:!0}),C()],la.prototype,"value",2);la=zu([te("registry-palette-buttons")],la);var Lv=Object.defineProperty,Dv=Object.getOwnPropertyDescriptor,Fu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lv(e,t,s),s};let ha=class extends xs{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${ve(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${_(P.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${_(P.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};ha.styles=ge`
    
        :host {}

    `;Fu([me({context:ol,subscribe:!0})],ha.prototype,"smooth",2);ha=Fu([te("manager-smooth-switch")],ha);var Rv=Object.defineProperty,Mv=Object.getOwnPropertyDescriptor,ju=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rv(e,t,s),s};let ca=class extends xs{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return m`

            <div ${ve(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${_(P.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${_(P.smoothlines)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};ca.styles=ge`
    
        :host {}

    `;ju([me({context:Aa,subscribe:!0})],ca.prototype,"smooth",2);ca=ju([te("manager-graph-smooth-switch")],ca);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class To extends aa{}To.directiveName="unsafeSVG",To.resultType=2;const Nu=ya(To),lt=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var Tv=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,fn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Iv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tv(e,t,s),s};let Hi=class extends xs{constructor(){super(...arguments),this.tourableElementRef=pe(),this.showhint=!0}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?E:m`
                <div class="switchers" ${ve(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return m`
                        
                        <button 
                            class=${Vt(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${Nu(t.icon)}
                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?m` <div class="current">
                        <div class="tool-description">${_(P[this.hint])}</div>
                    </div>`:E}

                <slot name="tour"></slot>
        `}};Hi.styles=ge`

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

    `;fn([me({context:un,subscribe:!0}),C()],Hi.prototype,"value",2);fn([me({context:dn,subscribe:!0}),C()],Hi.prototype,"tools",2);fn([C()],Hi.prototype,"hint",2);fn([g({type:String,reflect:!0,converter:lt(!1)})],Hi.prototype,"showhint",2);Hi=fn([te("group-tool-buttons")],Hi);var Uv=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,wl=(r,e,t,i)=>{for(var s=i>1?void 0:i?zv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Uv(e,t,s),s};let Ys=class extends Di{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.group.tool.selectTool(r)}render(){return this.group===void 0?E:m`

            <aside ${ve(this.tourableElementRef)}>
                    ${Object.entries(this.group.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return m`
                        
                        <button 
                            class=${Vt(t)} 
                            @click=${()=>{this.group.tool.selectTool(e)}}
                            title=${_(P[e.name])}
                            
                        >
                            ${Nu(e.icon)}
                        </button>
                        
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};Ys.styles=ge`

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

    `;wl([me({context:un,subscribe:!0}),C()],Ys.prototype,"value",2);wl([me({context:dn,subscribe:!0}),C()],Ys.prototype,"tools",2);Ys=wl([te("group-tool-bar")],Ys);var Fv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,Wu=(r,e,t,i)=>{for(var s=i>1?void 0:i?jv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fv(e,t,s),s};let ua=class extends fr{constructor(){super(...arguments),this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return m`
            <div ${ve(this.containerRef)}>
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
        `}};ua.styles=ge`

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
    
    `;Wu([me({context:hl,subscribe:!0})],ua.prototype,"value",2);ua=Wu([te("registry-opacity-slider")],ua);var Nv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,Hv=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nv(e,t,s),s};let Jh=class extends fr{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return m`
            <thermal-button ${ve(this.buttonRef)} @click=${this.doAction}>${_(P.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Jh=Hv([te("registry-range-auto-button")],Jh);var Bv=Object.defineProperty,Vv=Object.getOwnPropertyDescriptor,Hu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bv(e,t,s),s};let Io=class extends fr{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return m`
            <thermal-button 
                ${ve(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${_(P.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};Hu([me({context:Da,subscribe:!0})],Io.prototype,"setter",2);Io=Hu([te("registry-range-full-button")],Io);var Gv=Object.defineProperty,Yv=Object.getOwnPropertyDescriptor,gn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gv(e,t,s),s};let Mr=class extends fr{constructor(){super(...arguments),this.ticksRef=pe(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Mr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return m`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${ve(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${ve(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?m`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:E}

                    ${this.ticks.map(t=>m`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Mr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};Mr.TICK_WIDTH=40;Mr.TICK_FIXED=2;Mr.styles=ge`

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


    `;gn([me({context:Eu,subscribe:!0})],Mr.prototype,"highlight",2);gn([g({type:String,reflect:!0})],Mr.prototype,"placement",2);gn([C()],Mr.prototype,"minmax",2);gn([C()],Mr.prototype,"ticks",2);Mr=gn([te("registry-ticks-bar")],Mr);var qv=Object.defineProperty,Xv=Object.getOwnPropertyDescriptor,mn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Xv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qv(e,t,s),s};let ps=class extends fr{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return m`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return m`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};mn([C()],ps.prototype,"minmax",2);mn([C()],ps.prototype,"range",2);mn([C()],ps.prototype,"opacity",2);mn([C()],ps.prototype,"palette",2);ps=mn([te("registry-log")],ps);(()=>{var r=Object.defineProperty,e=Math.pow,t=(f,v,U)=>v in f?r(f,v,{enumerable:!0,configurable:!0,writable:!0,value:U}):f[v]=U,i=(f,v,U)=>(t(f,typeof v!="symbol"?v+"":v,U),U),s=(f,v)=>` ${v&&v.length>0?v.map(U=>`<link rel="stylesheet" href="${U}" />`).join(""):""} <style> ${f} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",u="data",d="min",p="max",b="step",w="round",S="type",k="theme",H="rtl",A="btt",D="disabled",W="keyboard-disabled",I="mousewheel-disabled",K="slider-width",x="slider-height",L="slider-radius",T="slider-bg",M="slider-bg-hover",V="slider-bg-fill",z="pointer-width",j="pointer-height",R="pointer-radius",q="pointer-bg",oe="pointer-bg-hover",$="pointer-bg-focus",F="pointer-shadow",fe="pointer-shadow-hover",ie="pointer-shadow-focus",De="pointer-border",Be="pointer-border-hover",ht="pointer-border-focus",rt="animate-onclick",se="css-links",he="vertical",Ce="horizontal",Re=(f,v,U,O,re)=>{let xe=v-f;return xe===0?U:(O-U)*(re-f)/xe+U},Je=f=>!isNaN(parseFloat(f))&&isFinite(f),Ie=(f,v)=>Je(f)?Number(f):v,gi=(f,v)=>v===0?0:Math.round(f/v)*v,Mi=(f,v=1/0)=>{if(v===1/0)return f;let U=e(10,v);return Math.round(f*U)/U},Ze=f=>f==null?!1:typeof f=="boolean"?f:f.trim().toLowerCase()==="true",lr=(f,v)=>{f.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:v}}))},Qr=(f,v)=>{f.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:v}}))},ja=(f,v)=>{f.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:v}}))},Na=(f,v)=>{f.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:v}}))},Wa=(f,v)=>{if(!v||v.length<=0)return;let U=v.map(re=>Je(re)?Ie(re,re):re),O={values:U||[]};O.value=U[0],O.value0=U[0],O.value1=U[0];for(let re=1;re<U.length;re++)O[`value${re+1}`]=U[re];f.dispatchEvent(new CustomEvent("change",{detail:O}))},G=(f,v,U)=>{let O=0,re,xe,Le,ne,ae=!1,Me=($e,st,Lt,_t,gt,mt)=>{let Kt=O;Lt!==void 0&&$e>Lt&&($e=Lt),st!==void 0&&$e<st&&($e=st),O=$e;let Jt=O;return(_t===he&&mt||_t===Ce&&gt)&&(Jt=100-Jt),_t===he?v.style.top=`${Jt}%`:v.style.left=`${Jt}%`,Kt!==O},Fe=$e=>$e===v||v.contains($e),ye=($e,st,Lt,_t)=>{re=$e,xe=st,Le=Lt,ne=_t},Xe=$e=>{ae=$e,v.classList.toggle("disabled",ae),ae?v.setAttribute("aria-disabled","true"):v.hasAttribute("aria-disabled")&&v.removeAttribute("aria-disabled")},br=($e,st)=>{st==null?v.removeAttribute($e):v.setAttribute($e,st)},Wt=$e=>v.getAttribute($e),Se=$e=>{if(!ae){switch($e.key){case"ArrowLeft":{$e.preventDefault(),typeof re=="function"&&re(U);break}case"ArrowRight":{$e.preventDefault(),typeof xe=="function"&&xe(U);break}case"ArrowUp":{$e.preventDefault(),typeof Le=="function"&&Le(U);break}case"ArrowDown":{$e.preventDefault(),typeof ne=="function"&&ne(U);break}}Na(f,$e)}},Te=()=>{ae||lr(f,v)};return v.className=`pointer pointer-${U}`,v.addEventListener("keydown",Se),v.addEventListener("click",Te),{$pointer:v,get percent(){return O},get disabled(){return ae},set disabled($e){Xe($e)},updatePosition:Me,isClicked:Fe,setCallbacks:ye,setAttr:br,getAttr:Wt,destroy:()=>{v.removeEventListener("keydown",Se),v.removeEventListener("click",Te),v.remove()}}},J=f=>{if(f==null)return;if(Array.isArray(f))return f;if(f.trim()==="")return;let v=f.split(","),U=[],O=!0;for(let re=0;re<v.length;re++){let xe=v[re].trim();xe!==""&&(U.push(xe),Je(xe)||(O=!1))}return O?U.map(re=>Number(re)):U},Z=(f,v)=>v?v.findIndex(U=>U===f||U.toString().trim()===f.toString().trim()):-1,Q=f=>({updatePosition:(v,U,O,re)=>{if(U.length<=0)return;let xe=U.length===1,Le=U[0],ne=U[U.length-1];v===he?(f.style.removeProperty("width"),f.style.removeProperty("right"),f.style.removeProperty("left"),xe?f.style.height=`${Le}%`:f.style.height=`${Math.abs(Le-ne)}%`,re?(f.style.bottom="0%",xe?f.style.top="auto":f.style.top=`${Math.min(100-ne,100-Le)}%`):(f.style.bottom="auto",xe?f.style.top="0%":f.style.top=`${Math.min(Le,ne)}%`)):(f.style.removeProperty("height"),f.style.removeProperty("top"),f.style.removeProperty("bottom"),xe?f.style.width=`${Le}%`:f.style.width=`${Math.abs(Le-ne)}%`,O?(f.style.right="0%",xe?f.style.left="auto":f.style.left=`${Math.min(100-ne,100-Le)}%`):(f.style.right="auto",xe?f.style.left="0%":f.style.left=`${Math.min(Le,ne)}%`))}}),we="--animate-onclick",Ve="--width",Ae="--height",it="--panel-bg-border-radius",Ne="--panel-bg",le="--panel-bg-hover",We="--panel-bg-fill",B="--pointer-width",Y="--pointer-height",Oe="--pointer-border-radius",Ue="--pointer-bg",wt="--pointer-bg-hover",It="--pointer-bg-focus",zr="--pointer-shadow",hr="--pointer-shadow-hover",vr="--pointer-shadow-focus",mi="--pointer-border",be="--pointer-border-hover",Ee="--pointer-border-focus",X=(f,v,U)=>{let O=new Map;for(let re of f.attributes){let xe=re.nodeName.trim().toLowerCase();if(!v.test(xe))continue;let Le=xe.replace(/\D/g,"").trim(),ne=Le===""||Le==="0"||Le==="1"?0:Ie(Le,0)-1,ae=U&&typeof U=="function"?U(re.value):re.value;O.set(ne,ae)}return O},Pe=f=>{if(!f)return null;let v=f.getAttribute(se);if(!v)return null;let U=v.split(";"),O=[];for(let re of U)re.trim()!==""&&O.push(re.trim());return O},Ge=[[Ve,K,"sliderWidth",null],[Ae,x,"sliderHeight",null],[it,L,"sliderRadius",null],[Ne,T,"sliderBg",null],[le,M,"sliderBgHover",null],[We,V,"sliderBgFill",null],[B,z,"pointer#Width",/^pointer([0-9]*)-width$/],[Y,j,"pointer#Height",/^pointer([0-9]*)-height$/],[Oe,R,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Ue,q,"pointer#Bg",/^pointer([0-9]*)-bg$/],[wt,oe,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[It,$,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[zr,F,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[hr,fe,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[vr,ie,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[mi,De,"pointer#Border",/^pointer([0-9]*)-border$/],[be,Be,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Ee,ht,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],He=(f,v,U)=>{let O=null,re=[],xe=new Map,Le=(Se,Te=v)=>{let $e=[...Te.classList];for(let st of $e)st.startsWith(Se)&&v.classList.remove(st)},ne=()=>{Le("shape");let Se=v.querySelectorAll(".pointer");for(let Te of Se)Le("shape",Te)},ae=Se=>{O=Se,Le("theme-"),typeof Se=="string"&&v.classList.add(`theme-${Se}`)},Me=()=>{if(ne(),!(re.length<=0)){v.classList.add("shape",`shape-${re[0]}`);for(let Se=1;Se<re.length;Se++){let Te=re[Se];if(!Te)continue;let $e=v.querySelector(`.pointer-${Se}`);!$e||$e.classList.add("shape",`shape-${Te}`)}}},Fe=(Se,Te)=>{re[Se]=Te,Me()},ye=()=>{ne();let Se=X(f,/^pointer([0-9]*)-shape$/);if(!(Se.size<=0)){for(let Te of Se){let $e=Te[0];re[$e]=Te[1]}Me()}},Xe=(Se,Te)=>`${Se}-${Te}`,br=(Se,Te,$e)=>{let st=U[$e];if(!st)return;let Lt=$e===0?v:st.$pointer;if(Te==null){xe.has(Xe(Se,$e))&&xe.delete(Xe(Se,$e)),Lt.style.removeProperty(Se);return}xe.set(Xe(Se,$e),Te),Lt.style.setProperty(Se,Te)},Wt=(Se,Te)=>xe.get(Xe(Se,Te));return(()=>{for(let Se of Ge){let[Te,$e,st,Lt]=Se;if(Lt){let gt=X(f,Lt);for(let mt of gt){let Kt=mt[0],Jt=mt[1];br(Te,Jt,Kt)}}else{let gt=f.getAttribute($e);br(Te,gt,0)}let _t=[];if(st.indexOf("#")===-1)_t.push([st,0]);else{_t.push([st.replace("#",""),0]),_t.push([st.replace("#","0"),0]),_t.push([st.replace("#","1"),0]);for(let gt=1;gt<U.length;gt++)_t.push([st.replace("#",(gt+1).toString()),gt])}for(let gt of _t)try{let mt=gt[0],Kt=gt[1];Object.prototype.hasOwnProperty.call(f,mt)||Object.defineProperty(f,mt,{get(){return Wt(Te,Kt)},set:Jt=>{br(Te,Jt,Kt)}})}catch(mt){console.error(mt)}}ae(f.getAttribute(k)),ye()})(),{setStyle:br,getStyle:Wt,get theme(){return O},set theme(Se){ae(Se)},get pointerShapes(){return re},setPointerShape:Fe}},ct="animate-on-click",ze="range-dragging",Xt=(f,v,U,O)=>{let re=[],xe=Fe=>{for(let ye of re)ye.update&&typeof ye.update=="function"&&ye.update(Fe)},Le=()=>{for(let Fe of re)Fe.destroy&&typeof Fe.destroy=="function"&&Fe.destroy()},ne=(Fe,ye)=>{for(let Xe of re)Xe.onAttrChange&&typeof Xe.onAttrChange=="function"&&Xe.onAttrChange(Fe,ye)},ae=Fe=>{if(Fe.gettersAndSetters){for(let ye of Fe.gettersAndSetters)if(!(!ye.name||!ye.attributes))try{Object.prototype.hasOwnProperty.call(f,ye.name)||Object.defineProperty(f,ye.name,ye.attributes)}catch(Xe){console.error("defineSettersGetters error:",Xe)}}},Me=Fe=>{var ye;if(!Fe.css)return;let Xe=(ye=f.shadowRoot)==null?void 0:ye.querySelector("style");!Xe||(Xe.innerHTML+=Fe.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let Fe of window.tcRangeSliderPlugins){let ye=Fe();re.push(ye),ye.init&&typeof ye.init=="function"&&(ye.init(f,v,U,O),ae(ye),Me(ye))}},update:xe,onAttrChange:ne,destroy:Le}},xt=10,xn=20,Xu=(f,v)=>{let U=new Map,O=/^value([0-9]*)$/;for(let ne of f.attributes){let ae=ne.nodeName.trim().toLowerCase();if(!O.test(ae))continue;let Me=ae.replace("value","").trim(),Fe=Me===""||Me==="0"||Me==="1"?0:Ie(Me,0)-1,ye=Je(ne.value)?Ie(ne.value,0):ne.value;U.set(Fe,ye)}let re=Math.max(...Array.from(U.keys())),xe=[];xe.push([G(f,v,0),U.get(0)]);let Le=v;for(let ne=1;ne<=re;ne++){let ae=v.cloneNode(!0);Le.after(ae),Le=ae,xe.push([G(f,ae,ne),U.get(ne)])}return xe},Ml=(f,v,U,O,re,xe,Le)=>{try{Object.defineProperty(f,O,{configurable:!0,get(){if(!v)return;let ne=v.pointers[U];if(!ne)return;let ae=v.getTextValue(ne.percent);return Je(ae)?Ie(ae,ae):ae},set:ne=>{v.pointers[U]?v==null||v.setValue(ne,U):v==null||v.addPointer(ne)}}),Object.defineProperty(f,re,{configurable:!0,get(){var ne,ae;return(ae=(ne=v==null?void 0:v.pointers[U])==null?void 0:ne.getAttr("aria-label"))!=null?ae:void 0},set:ne=>{!v||v.setAriaLabel(U,ne)}}),Object.defineProperty(f,xe,{configurable:!0,get(){var ne,ae;return(ae=(ne=v==null?void 0:v.styles)==null?void 0:ne.pointerShapes[U])!=null?ae:null},set:ne=>{!v||!v.styles||v.styles.setPointerShape(U,ne)}}),Object.defineProperty(f,Le,{configurable:!0,get(){var ne;return(ne=v==null?void 0:v.pointers[U].disabled)!=null?ne:!1},set:ne=>{if(!v)return;let ae=v==null?void 0:v.pointers[U];!ae||(ae.disabled=ne)}})}catch(ne){console.error(ne)}},Ku=(f,v)=>{let U=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let O=2;O<xt;O++)U.push([`value${O}`,`ariaLabel${O}`,`pointer${O}Shape`,`pointer${O}Disabled`,O-1]);for(let O of U)Ml(f,v,O[4],O[0],O[1],O[2],O[3])},Tl=(f,v,U)=>{var O;let re=(O=U.shadowRoot)==null?void 0:O.querySelector(".container");if(re)for(let xe of f)v?re.prepend(xe.$pointer):re.append(xe.$pointer)},Ju=(f,v)=>{if(!(!v||f.length<=1)){for(let U of f)U.$pointer.style.zIndex=xn.toString();v.$pointer.style.zIndex=(xn*2).toString()}},Ha=0,Ps=100,Ji=2,Il="0.3s",Zu=(f,v,U)=>{let O=U.map(y=>y[0]),re=null,xe=null,Le=null,ne=null,ae=Ha,Me=Ps,Fe,ye,Xe=Ce,br=Ji,Wt=!1,Se=!1,Te=!1,$e=0,st=1/0,Lt=!1,_t,gt,mt=!1,Kt=!1,Jt=!1,yi=Il,Ul=[],zl=y=>{mt||(y.preventDefault&&y.preventDefault(),Ti(y),window.addEventListener("mousemove",Ti),window.addEventListener("mouseup",Sn),Qr(f,y))},Sn=y=>{mt||(_t=void 0,gt=void 0,window.removeEventListener("mousemove",Ti),window.removeEventListener("mouseup",Sn),yi&&v.classList.add(ct),ja(f,y))},td=(y,N)=>{if(O.length<=0)return;if(O.length===1)return O[0].isClicked(y)&&yi&&v.classList.remove(ct),O[0];let ue=id(y);if(Lt){let Ye=N,Or=kn(Ye);Or!==void 0&&(Ye=gi(Ye,Or)),ue?(_t=Ye,gt=0,yi&&v.classList.remove(ct)):_t!==void 0&&(gt=Ye-_t,_t=Ye)}if(!rd(y)&&!ue){for(let Ye of O)if(!(!Ye.isClicked(y)||Ye.disabled))return yi&&v.classList.remove(ct),Ye;for(let Ye of O)if(re===Ye)return Ye}let Qe=1/0,yt=null;for(let Ye of O){if(Ye.disabled)continue;let Or=Math.abs(N-Ye.percent);Or<Qe&&(Qe=Or,yt=Ye)}return yt},Fl=()=>O.findIndex(y=>re===y&&!y.disabled),Ti=y=>{let N;if(Xe===he){let{height:Qe,top:yt}=v.getBoundingClientRect(),Ye=y.type.indexOf("mouse")!==-1?y.clientY:y.touches[0].clientY;N=Math.min(Math.max(0,Ye-yt),Qe)*100/Qe}else{let{width:Qe,left:yt}=v.getBoundingClientRect(),Ye=y.type.indexOf("mouse")!==-1?y.clientX:y.touches[0].clientX;N=Math.min(Math.max(0,Ye-yt),Qe)*100/Qe}if((Wt||Se)&&(N=100-N),re=td(y.target,N),re&&Ju(O,re),Lt&&O.length>1&&gt!==void 0){let Qe=O[0],yt=O[O.length-1],Ye=Qe.percent+gt<0,Or=yt.percent+gt>100;if(Ye||Or)return;for(let Dn=0;Dn<O.length;Dn++)Zt(Dn,O[Dn].percent+gt);return}let ue=Fl();ue!==-1&&(Zt(ue,N),re==null||re.$pointer.focus())},$n=y=>{if(mt||document.activeElement!==f||re!=null&&re.disabled)return;y.stopPropagation(),y.preventDefault();let N=y.deltaY<0,ue=Wt||Se,Qe=N?!ue:ue,yt=Fl();yt!==-1&&(Qe?_s(yt,O[yt].percent):Cs(yt,O[yt].percent))},jl=y=>{mt||Kt||(Xe===he?Se?Zt(y,100):Zt(y,0):Wt?Cs(y,O[y].percent):_s(y,O[y].percent))},Nl=y=>{mt||Kt||(Xe===he?Se?Zt(y,0):Zt(y,100):Wt?_s(y,O[y].percent):Cs(y,O[y].percent))},Wl=y=>{mt||Kt||(Xe===he?Se?Cs(y,O[y].percent):_s(y,O[y].percent):Wt?Zt(y,100):Zt(y,0))},Hl=y=>{mt||Kt||(Xe===he?Se?_s(y,O[y].percent):Cs(y,O[y].percent):Wt?Zt(y,0):Zt(y,100))},rd=y=>y.classList.contains("panel"),id=y=>y.classList.contains("panel-fill"),_s=(y,N)=>{if(N===void 0)return;let ue=kn(N);ue==null&&(ue=1),N-=ue,N<0&&(N=0),Zt(y,N)},Cs=(y,N)=>{if(N===void 0)return;let ue=kn(N);ue==null&&(ue=1),N+=ue,N>100&&(N=100),Zt(y,N)},Ii=()=>{!ne||ne.update({percents:Bl(),values:Vl(),$pointers:Gl(),min:Yl(),max:ql(),data:Ga(),step:Va(),round:qa(),type:Ya(),textMin:Pn(),textMax:_n(),rightToLeft:Ja(),bottomToTop:Za(),pointersOverlap:ro(),pointersMinDistance:Xa(),pointersMaxDistance:Ka(),rangeDragging:io(),disabled:Qa(),keyboardDisabled:eo(),mousewheelDisabled:to()})},sd=()=>{Ii()},nd=y=>{if(!(Te||O.length<=1||Me===ae))if(y===0){let N=st*100/(Me-ae);return Math.max(0,O[y+1].percent-N)}else{let N=$e*100/(Me-ae);return Math.min(O[y-1].percent+N,100)}},ad=y=>{if(!(Te||O.length<=1||Me===ae))if(y===O.length-1){let N=st*100/(Me-ae);return Math.min(O[y-1].percent+N,100)}else{let N=$e*100/(Me-ae);return Math.max(0,O[y+1].percent-N)}},kn=y=>{let N;if(typeof Fe=="function"){let ue=Re(0,100,ae,Me,y);N=Fe(ue,y)}else N=Fe;if(Je(N)){let ue=Me-ae;return N=ue===0?0:N*100/ue,N}},Zi=y=>{if(y===void 0)return;let N=Re(0,100,ae,Me,y);return ye!==void 0?ye[Math.round(N)]:Mi(N,br)},Pn=()=>ye!==void 0?ye[ae]:ae,_n=()=>ye!==void 0?ye[Me]:Me,Va=()=>Fe,od=y=>{var N;return y<=0||Te?Pn():(N=Zi(O[y-1].percent))!=null?N:""},ld=y=>{var N;return O.length<=1||y>=O.length-1||Te?_n():(N=Zi(O[y+1].percent))!=null?N:""},Bl=()=>O.map(y=>y.percent),Vl=()=>O.map(y=>Zi(y.percent)),Gl=()=>O.map(y=>y.$pointer),Yl=()=>ae,ql=()=>Me,Ga=()=>ye,Ya=()=>Xe,qa=()=>br,Xa=()=>$e,Ka=()=>st,hd=y=>Ul[y],Ja=()=>Wt,Za=()=>Se,Qa=()=>mt,eo=()=>Kt,to=()=>Jt,ro=()=>Te,io=()=>Lt,Zt=(y,N)=>{if(N===void 0)return;let ue=kn(N);ue!==void 0&&(N=gi(N,ue));let Qe=O[y];if(!Qe)return;let yt=Qe.updatePosition(N,nd(y),ad(y),Xe,Wt,Se);xe==null||xe.updatePosition(Xe,O.map(Ye=>Ye.percent),Wt,Se),Ii();for(let Ye of O){let Or=Zi(Ye.percent);Or!==void 0&&(Ye.setAttr("aria-valuenow",Or.toString()),Ye.setAttr("aria-valuetext",Or.toString()))}ud(),yt&&Wa(f,O.map(Ye=>Zi(Ye.percent)))},Fr=()=>{for(let y=0;y<O.length;y++)Zt(y,O[y].percent)},cd=(y,N)=>{ae=ye!==void 0?0:Ie(y,Ha),Me=ye!==void 0?ye.length-1:Ie(N,Ps),Cn(ae),An(Me)},ud=()=>{var y,N;for(let ue=0;ue<O.length;ue++){let Qe=O[ue];Qe.setAttr("aria-valuemin",((y=od(ue))!=null?y:"").toString()),Qe.setAttr("aria-valuemax",((N=ld(ue))!=null?N:"").toString())}},Cn=y=>{ae=Ie(y,Ha),ae>Me&&(Me=ae+Ps),Fr()},An=y=>{Me=Ie(y,Ps),Me<ae&&(Me=ae+Ps),Fr()},Xl=y=>{Te=!0;for(let N=0;N<y.length;N++)On(y[N],N);Te=!1;for(let N=0;N<y.length;N++)On(y[N],N)},On=(y,N)=>{let ue;ye!==void 0?(ue=y==null?0:Z(y,ye),ue===-1&&(ue=0)):(ue=Ie(y,ae),ue<ae&&(ue=ae),ue>Me&&(ue=Me));let Qe=Re(ae,Me,0,100,ue);Zt(N,Qe)},En=y=>{if(y==null){Fe=void 0;return}if(typeof y=="function"){Fe=y,Fr();return}if(Je(y)){Fe=Ie(y,1);let N=Math.abs(Me-ae);Fe>N&&(Fe=void 0),Fr();return}Fe=void 0},so=y=>{Te=y,Fr()},no=y=>{(!Je(y)||y<0)&&(y=0),$e=y},ao=y=>{(!Je(y)||y<0)&&(y=1/0),st=y},oo=y=>{mt=y,v.classList.toggle("disabled",mt),mt?v.setAttribute("aria-disabled","true"):v.hasAttribute("aria-disabled")&&v.removeAttribute("aria-disabled")},Kl=y=>{Kt=y},Jl=y=>{Jt=y,Jt?document.removeEventListener("wheel",$n):document.addEventListener("wheel",$n,{passive:!1})},lo=y=>{if(y==null){ye=void 0;return}if(ye=J(y),ye===void 0||ye.length<=0){ye=void 0;return}Cn(0),An(ye.length-1),Fe===void 0&&En(1)},ho=y=>{var N;typeof y=="string"?Xe=y.trim().toLowerCase()===he?he:Ce:Xe=Ce;let ue=(N=f.shadowRoot)==null?void 0:N.querySelector(".range-slider-box");if(!ue)return;ue.className=`range-slider-box type-${Xe}`,Fr();let Qe=Xe===he?"vertical":"horizontal";for(let yt of O)yt.setAttr("aria-orientation",Qe)},co=y=>{Wt=y,O.length>1&&Tl(O,Wt,f),Fr(),Ii()},uo=y=>{Se=y,O.length>1&&Tl(O,Se,f),Fr(),Ii()},po=y=>{br=Ie(y,Ji),br<0&&(br=Ji),Ii()},Zl=y=>{y==null||y.toString().trim().toLowerCase()==="false"?(yi=void 0,v.style.removeProperty(we),v.classList.remove(ct)):(yi=y.toString(),v.style.setProperty(we,yi),v.classList.add(ct))},Ql=(y,N)=>{let ue=O[y];!ue||(ue.setAttr("aria-label",N),Ul[y]=N)},Ln=y=>{if(_t=void 0,O.length<=1){Lt=!1,v.classList.remove(ze);return}Lt=y,v.classList.toggle(ze,Lt)},dd=()=>{oo(Ze(f.getAttribute(D))),Kt=Ze(f.getAttribute(W)),Jt=Ze(f.getAttribute(I));let y=X(f,/^pointer([0-9]*)-disabled$/,N=>Ze(N));for(let N of y){let ue=N[0];!O[ue]||(O[ue].disabled=N[1])}},pd=()=>{let y=X(f,/^aria-label([0-9]*)$/);for(let N of y){let ue=N[0];Ql(ue,N[1])}},fd=y=>{let N=O.length,ue=O[N-1].$pointer,Qe=ue.cloneNode(!0);ue.after(Qe);let yt=G(f,Qe,N);return yt.setCallbacks(jl,Nl,Wl,Hl),O.push(yt),On(y,N),Fr(),Ii(),N},gd=()=>{let y=O.length,N=O[y-1];return N?(N.destroy(),O.pop(),O.length<=1&&Ln(!1),Fr(),Ii(),y-1):-1};return(()=>{var y,N;for(let Qe of O)Qe.setCallbacks(jl,Nl,Wl,Hl);let ue=(y=f.shadowRoot)==null?void 0:y.querySelector(".panel-fill");ue&&(xe=Q(ue)),ho(f.getAttribute(S)),co(Ze(f.getAttribute(H))),uo(Ze(f.getAttribute(A))),cd(f.getAttribute(d),f.getAttribute(p)),En(f.getAttribute(b)),lo(f.getAttribute(u)),Xl(U.map(Qe=>Qe[1])),so(Ze(f.getAttribute(a))),no(Ie(f.getAttribute(o),0)),ao(Ie(f.getAttribute(l),1/0)),Ln(Ze(f.getAttribute(h))),po(Ie(f.getAttribute(w),Ji)),dd(),pd(),Le=He(f,v,O),Zl((N=f.getAttribute(rt))!=null?N:Il),v.addEventListener("mousedown",zl),v.addEventListener("mouseup",Sn),v.addEventListener("touchmove",Ti),v.addEventListener("touchstart",Ti),Jt||document.addEventListener("wheel",$n,{passive:!1}),ne=Xt(f,sd,{setValues:Xl,setMin:Cn,setMax:An,setStep:En,setPointersOverlap:so,setPointersMinDistance:no,setPointersMaxDistance:ao,setDisabled:oo,setType:ho,setRightToLeft:co,setBottomToTop:uo,setRound:po,setKeyboardDisabled:Kl,setMousewheelDisabled:Jl,setRangeDragging:Ln,setData:lo},{getPercents:Bl,getValues:Vl,getPointerElements:Gl,getMin:Yl,getMax:ql,getStep:Va,getData:Ga,getType:Ya,getRound:qa,getTextMin:Pn,getTextMax:_n,isRightToLeft:Ja,isBottomToTop:Za,isDisabled:Qa,isKeyboardDisabled:eo,isMousewheelDisabled:to,isPointersOverlap:ro,isRangeDraggingEnabled:io,getPointersMinDistance:Xa,getPointersMaxDistance:Ka}),ne.init()})(),{get pointers(){return O},get styles(){return Le},get pluginsManager(){return ne},get min(){return Pn()},get max(){return _n()},get step(){return Va()},get pointersOverlap(){return ro()},set pointersOverlap(y){so(y)},get pointersMinDistance(){return Xa()},set pointersMinDistance(y){no(y)},get pointersMaxDistance(){return Ka()},set pointersMaxDistance(y){ao(y)},get disabled(){return Qa()},set disabled(y){oo(y)},get data(){return Ga()},get type(){return Ya()},set type(y){ho(y)},get rightToLeft(){return Ja()},set rightToLeft(y){co(y)},get bottomToTop(){return Za()},set bottomToTop(y){uo(y)},get round(){return qa()},set round(y){po(y)},get animateOnClick(){return yi},set animateOnClick(y){Zl(y)},get keyboardDisabled(){return eo()},set keyboardDisabled(y){Kl(y)},get mousewheelDisabled(){return to()},set mousewheelDisabled(y){Jl(y)},get rangeDragging(){return io()},set rangeDragging(y){Ln(y)},setMin:Cn,setMax:An,setValue:On,setStep:En,setData:lo,getTextValue:Zi,setAriaLabel:Ql,getAriaLabel:hd,addPointer:fd,removePointer:gd,destroy:()=>{v.removeEventListener("mousedown",zl),v.removeEventListener("mouseup",Sn),v.removeEventListener("touchmove",Ti),v.removeEventListener("touchstart",Ti),document.removeEventListener("wheel",$n);for(let y of O)y.destroy();ne==null||ne.destroy()}}},Qu=(f,v,U)=>{let O=Ge.find(([ne,ae,Me,Fe])=>ae.replace("#","")===v.replace(/\d+/g,""));if(O&&f.styles){let[ne,ae,Me,Fe]=O,ye=v.replace(/\D/g,"").trim(),Xe=ye===""||ye==="0"||ye==="1"?0:Ie(ye,0)-1;f.styles.setStyle(ne,U,Xe);return}switch(f&&f.pluginsManager&&f.pluginsManager.onAttrChange(v,U),v){case d:{f.setMin(U);break}case p:{f.setMax(U);break}case b:{f.setStep(U);break}case a:{f.pointersOverlap=Ze(U);break}case o:{f.pointersMinDistance=Ie(U,0);break}case h:{f.rangeDragging=Ze(U);break}case l:{f.pointersMaxDistance=Ie(U,1/0);break}case D:{f.disabled=Ze(U);break}case W:{f.keyboardDisabled=Ze(U);break}case I:{f.mousewheelDisabled=Ze(U);break}case u:{f.setData(U);break}case S:{f.type=U;break}case H:{f.rightToLeft=Ze(U);break}case A:{f.bottomToTop=Ze(U);break}case w:{f.round=Ie(U,Ji);break}case k:{f.styles&&(f.styles.theme=U);break}case rt:{f.animateOnClick=U;break}}let re=null;if(/^value([0-9]*)$/.test(v)&&(re="value"),/^pointer([0-9]*)-disabled$/.test(v)&&(re="pointer-disabled"),/^aria-label([0-9]*)$/.test(v)&&(re="aria-label"),/^pointer([0-9]*)-shape$/.test(v)&&(re="pointer-shape"),!re)return;let xe=v.replace(/\D/g,"").trim(),Le=xe===""||xe==="0"||xe==="1"?0:Ie(xe,0)-1;switch(re){case"value":{f.setValue(U,Le);break}case"pointer-disabled":{let ne=f==null?void 0:f.pointers[Le];if(!ne)return;ne.disabled=Ze(U);break}case"aria-label":{f.setAriaLabel(Le,U);break}case"pointer-shape":{f.styles&&f.styles.setPointerShape(Le,U);break}}},ed=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(f){this.slider&&this.slider.setStep(f)}get step(){var f;return(f=this.slider)==null?void 0:f.step}set disabled(f){this.slider&&(this.slider.disabled=f)}get disabled(){var f,v;return(v=(f=this.slider)==null?void 0:f.disabled)!=null?v:!1}set data(f){var v;(v=this.slider)==null||v.setData(f)}get data(){var f;return(f=this.slider)==null?void 0:f.data}set min(f){var v;(v=this.slider)==null||v.setMin(f)}get min(){var f;return(f=this.slider)==null?void 0:f.min}set max(f){var v;(v=this.slider)==null||v.setMax(f)}get max(){var f;return(f=this.slider)==null?void 0:f.max}set round(f){!this.slider||(this.slider.round=f)}get round(){var f,v;return(v=(f=this.slider)==null?void 0:f.round)!=null?v:Ji}set type(f){!this.slider||(this.slider.type=f??Ce)}get type(){var f;return((f=this.slider)==null?void 0:f.type)||Ce}set pointersOverlap(f){!this.slider||(this.slider.pointersOverlap=f)}get pointersOverlap(){var f,v;return(v=(f=this.slider)==null?void 0:f.pointersOverlap)!=null?v:!1}set pointersMinDistance(f){!this.slider||(this.slider.pointersMinDistance=f)}get pointersMinDistance(){var f,v;return(v=(f=this.slider)==null?void 0:f.pointersMinDistance)!=null?v:0}set pointersMaxDistance(f){!this.slider||(this.slider.pointersMaxDistance=f)}get pointersMaxDistance(){var f,v;return(v=(f=this.slider)==null?void 0:f.pointersMaxDistance)!=null?v:1/0}set theme(f){!this.slider||!this.slider.styles||(this.slider.styles.theme=f)}get theme(){var f,v,U;return(U=(v=(f=this.slider)==null?void 0:f.styles)==null?void 0:v.theme)!=null?U:null}set rtl(f){!this.slider||(this.slider.rightToLeft=f)}get rtl(){var f,v;return(v=(f=this.slider)==null?void 0:f.rightToLeft)!=null?v:!1}set btt(f){!this.slider||(this.slider.bottomToTop=f)}get btt(){var f,v;return(v=(f=this.slider)==null?void 0:f.bottomToTop)!=null?v:!1}set keyboardDisabled(f){!this.slider||(this.slider.keyboardDisabled=f)}get keyboardDisabled(){var f,v;return(v=(f=this.slider)==null?void 0:f.keyboardDisabled)!=null?v:!1}set mousewheelDisabled(f){!this.slider||(this.slider.mousewheelDisabled=f)}get mousewheelDisabled(){var f,v;return(v=(f=this.slider)==null?void 0:f.mousewheelDisabled)!=null?v:!1}set animateOnClick(f){!this.slider||(this.slider.animateOnClick=f)}get animateOnClick(){var f;return(f=this.slider)==null?void 0:f.animateOnClick}get rangeDragging(){var f,v;return(v=(f=this.slider)==null?void 0:f.rangeDragging)!=null?v:!1}set rangeDragging(f){this.slider&&(this.slider.rangeDragging=Ze(f))}get externalCSSList(){return this._externalCSSList}addPointer(f){var v,U;if(!this.slider)return;let O=(U=(v=this.slider)==null?void 0:v.addPointer(f))!=null?U:0;Ml(this,this.slider,O,`value${O+1}`,`ariaLabel${O+1}`,`pointerShape${O+1}`,`pointer${O+1}Disabled`)}removePointer(){var f;!this.slider||(f=this.slider)==null||f.removePointer()}addCSS(f){if(!this.shadowRoot)return;let v=document.createElement("style");v.textContent=f,this.shadowRoot.appendChild(v)}connectedCallback(){var f,v;if(!this.shadowRoot)return;this._externalCSSList=Pe(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let U=(f=this.shadowRoot)==null?void 0:f.querySelector(".pointer");if(!U)return;let O=(v=this.shadowRoot)==null?void 0:v.getElementById("range-slider");if(!O)return;let re=Xu(this,U);this.slider=Zu(this,O,re),Ku(this,this.slider),this._observer=new MutationObserver(xe=>{xe.forEach(Le=>{var ne;if(!this.slider||Le.type!=="attributes")return;let ae=Le.attributeName;!ae||Qu(this.slider,ae,(ne=this.getAttribute(ae))!=null?ne:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ba=ed;window.tcRangeSlider=Ba,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ba),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ba{})})();const Kv=r=>!isNaN(parseFloat(r))&&isFinite(r),ei=(r,e)=>Kv(r)?Number(r):e,So=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const zn=40,Fn=35,jn=30,Zh="#475569",Qh="#fff",ec=20,Jv=()=>{let r=null,e=null,t=!1,i=zn,s=Fn,n=jn,a=Zh,o=Qh,l="",h="",u,d=[],p=null,b=null;const w=()=>{p==null||p.classList.toggle("is-after",i<=0)},S=()=>{var F;const $=(F=r==null?void 0:r.shadowRoot)==null?void 0:F.querySelector("#range-slider");p=document.createElement("div"),p.classList.add("tooltips"),$.prepend(p),w()},k=$=>{const F=document.createElement("div");return F.style.zIndex=ec.toString(),F.className=$,F},H=($,F,fe,ie,De)=>{$&&(F==="vertical"?($.style.left=`${-i}px`,$.style.top=ie??"0"):($.style.left=fe??"0",$.style.top=`${-i}px`),$.style.width=`${s}px`,$.style.height=`${n}px`,$.style.background=a,$.style.color=o,$.style.zIndex=De.toString())},A=$=>{let F=$;return typeof u=="function"&&(F=u($)),h==="prefix"?`${l}${F}`:`${F}${l}`},D=()=>{const $=(e==null?void 0:e.getValues())??[],F=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";if($)for(let ie=0;ie<$.length;ie++){const De=d[ie];if(!De)continue;const Be=($[ie]??"").toString();De.textContent=A(Be),H(De,fe,F[ie].style.left,F[ie].style.top,F[ie].style.zIndex)}},W=()=>{const $=(e==null?void 0:e.getValues())??[];if($){for(let F=0;F<$.length;F++){const fe=k(`tooltip tooltip-${F+1}`);fe.style.position="absolute",d.push(fe),p==null||p.prepend(fe)}D()}},I=()=>{r&&(b=new ResizeObserver($=>{for(const F of $)D()}),b.observe(r))},K=$=>{t=$,t?(S(),W(),I()):oe()},x=$=>{i=$,D()},L=$=>{s=$,D()},T=$=>{n=$,D()},M=$=>{a=$,D()},V=$=>{o=$,D()},z=$=>{l=$,D()},j=$=>{h=$,D()},R=$=>{u=$,D()},q=$=>{if(!t||!$.values)return;const F=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";for(let ie=0;ie<$.values.length;ie++){const De=$.values[ie],Be=d[ie];if(De===void 0&&Be){Be.remove(),d[ie]=void 0;continue}if(De!==void 0&&!Be){const rt=k(`tooltip tooltip-${ie+1}`),se=(De??"").toString();rt.textContent=A(se),rt.style.position="absolute",H(rt,fe,F[ie].style.left,F[ie].style.top,F[ie].style.zIndex),d[ie]=rt,p==null||p.append(rt)}if(!Be)continue;const ht=(De??"").toString();Be.textContent=A(ht),H(Be,fe,F[ie].style.left,F[ie].style.top,F[ie].style.zIndex)}},oe=()=>{p==null||p.remove();for(const $ of d)$&&$.remove();d=[],b==null||b.disconnect()};return{get name(){return"Moving Tooltip"},init:($,F,fe,ie)=>{r=$,e=ie,i=ei($.getAttribute("moving-tooltip-distance-to-pointer"),zn),s=ei($.getAttribute("moving-tooltip-width"),Fn),n=ei($.getAttribute("moving-tooltip-height"),jn),a=$.getAttribute("moving-tooltip-bg")||Zh,o=$.getAttribute("moving-tooltip-text-color")||Qh,l=$.getAttribute("moving-tooltip-units")||"",h=$.getAttribute("moving-tooltip-units-type")||"",K(So($.getAttribute("moving-tooltip")))},update:q,onAttrChange:($,F)=>{$==="moving-tooltip"&&K(So(F)),$==="moving-tooltip-distance-to-pointer"&&x(ei(F,zn)),$==="moving-tooltip-width"&&L(ei(F,Fn)),$==="moving-tooltip-height"&&T(ei(F,jn)),$==="moving-tooltip-bg"&&M(F),$==="moving-tooltip-text-color"&&V(F),$==="moving-tooltip-units"&&z(F),$==="moving-tooltip-units-type"&&j(F)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:$=>{K(So($))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:$=>{x(ei($,zn))}}},{name:"tooltipWidth",attributes:{get(){return s},set:$=>{L(ei($,Fn))}}},{name:"tooltipHeight",attributes:{get(){return n},set:$=>{T(ei($,jn))}}},{name:"tooltipBg",attributes:{get(){return a},set:$=>{M($)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:$=>{V($)}}},{name:"tooltipUnits",attributes:{get(){return l},set:$=>{z($)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:$=>{j($)}}},{name:"formatTooltipValue",attributes:{get(){return u},set:$=>{R($)}}}],css:`
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
  z-index: ${ec};
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
    `,destroy:oe}};window.tcRangeSliderPlugins.push(Jv);(()=>{var r=(o,l,h,u,d)=>{let p=l-o;return p===0?h:(u-h)*(d-o)/p+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,u=null,d=null,p=!1,b=s,w=n,S=()=>{var x;let L=(x=o==null?void 0:o.shadowRoot)==null?void 0:x.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),u=document.createElement("div"),u.classList.add("mark-points"),h.append(u),d=document.createElement("div"),d.classList.add("mark-values"),h.append(d),L.append(h)},k=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},H=()=>{var x;if(!h||!l)return;let L=l.getMin(),T=l.getMax(),M=l.getType()==="vertical",V=l.isRightToLeft()||l.isBottomToTop();for(let j=0;j<b;j++){let R=document.createElement("div");R.classList.add("mark",`mark-${j}`);let q=b===0?0:j*100/(b-1);M?V?R.style.top=`${100-q}%`:R.style.top=`${q}%`:V?R.style.left=`${100-q}%`:R.style.left=`${q}%`,u==null||u.append(R)}let z=l.getData();for(let j=0;j<w;j++){let R=document.createElement("div");R.classList.add("mark-value",`mark-value-${j}`);let q=w===0?0:j*100/(w-1),oe=r(0,w-1,L,T,j);R.textContent=(z?(x=z[Math.round(oe)])!=null?x:"":oe).toString(),M?V?R.style.top=`${100-q}%`:R.style.top=`${q}%`:V?R.style.left=`${100-q}%`:R.style.left=`${q}%`,d==null||d.append(R)}},A=(x,L)=>{K(),b=x,w=L,b<=0&&(b=s),w<=0&&(w=n),S(),H(),k()},D=x=>{p=x,p?(S(),H(),k()):K()},W=x=>{!h||h.style.setProperty("--marks-color",x)},I=x=>{!h||h.style.setProperty("--values-color",x)},K=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(x,L,T,M)=>{var V,z;l=M,o=x,p=i(o.getAttribute("marks")),p&&(A(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),W((V=o.getAttribute("marks-color"))!=null?V:"#cbd5e1"),I((z=o.getAttribute("marks-values-color"))!=null?z:"#475569"))},onAttrChange:(x,L)=>{x==="marks"&&D(i(L)),x==="marks-count"&&A(t(L,s),w),x==="marks-values-count"&&A(b,t(L,n)),x==="marks-color"&&W(L),x==="marks-values-color"&&I(L)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return p??!1},set:x=>{D(i(x))}}},{name:"marksCount",attributes:{get(){return b??s},set:x=>{A(t(x,s),w)}}},{name:"marksValuesCount",attributes:{get(){return b??s},set:x=>{A(b,t(x,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:x=>{W(x)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:x=>{I(x)}}}],destroy:K,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Zv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,Xr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qv(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zv(e,t,s),s};let xr=class extends fr{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=pe(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from=r.from,this.to=r.to)}),this.registry.minmax.addListener(this.UUID,r=>{r&&(this.from=r.min,this.to=r.max)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}firstUpdated(r){super.firstUpdated(r)}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .tooltip {
                    font-size: 12px;
                }
                .pointer-shape {
                    border-radius: 0;
                    width: 10px;
                }
            `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return m`

        <div class="container ready">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${ve(this.sliderRef)}
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

        `}};xr.styles=ge`

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
    
    `;Xr([me({context:cl,subscribe:!0}),C()],xr.prototype,"min",2);Xr([me({context:ul,subscribe:!0}),C()],xr.prototype,"max",2);Xr([me({context:Ea,subscribe:!0}),C()],xr.prototype,"from",2);Xr([me({context:La,subscribe:!0}),C()],xr.prototype,"to",2);Xr([C()],xr.prototype,"hasFixedFrom",2);Xr([C()],xr.prototype,"hasFixedTo",2);Xr([me({context:cn,subscribe:!0}),C()],xr.prototype,"palette",2);Xr([C()],xr.prototype,"sliderRef",2);Xr([C()],xr.prototype,"initialised",2);xr=Xr([te("registry-range-slider")],xr);var eb=Object.defineProperty,tb=Object.getOwnPropertyDescriptor,yn=(r,e,t,i)=>{for(var s=i>1?void 0:i?tb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&eb(e,t,s),s};let fs=class extends fr{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=pe()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?E:m`
            <div ${ve(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};yn([me({context:Ea,subscribe:!0})],fs.prototype,"from",2);yn([me({context:La,subscribe:!0})],fs.prototype,"to",2);yn([g({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],fs.prototype,"fixed",2);yn([g({type:String,reflect:!0,attribute:!0})],fs.prototype,"separator",2);fs=yn([te("registry-range-display")],fs);var rb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,Yi=(r,e,t,i)=>{for(var s=i>1?void 0:i?ib(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&rb(e,t,s),s};let ci=class extends fr{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.UUID)}renderHistogram(){return m`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":E}" ${ve(this.tourableElementRef)}>

                <div class="histogram ${this.expandable===!0?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{this.expandable===!0&&(this.expanded=!this.expanded)}}>

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
        `}};ci.styles=ge`

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
            background:  var(--thermal-slate-light);
            // height: calc( var( --thermal-gap ) * 1.5);

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

        .interactive {
            cursor: pointer;
            &:hover {
                opacity: .8;
            }
        }


    `;Yi([C()],ci.prototype,"histogram",2);Yi([g({type:Boolean,reflect:!0})],ci.prototype,"interactive",2);Yi([g({type:String,reflect:!0})],ci.prototype,"height",2);Yi([g({type:String,reflect:!0})],ci.prototype,"heightExpanded",2);Yi([g({type:Boolean,reflect:!0,converter:lt(!1)})],ci.prototype,"expandable",2);Yi([C()],ci.prototype,"expanded",2);ci=Yi([te("registry-histogram")],ci);var sb=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,ab=(r,e,t,i)=>{for(var s=i>1?void 0:i?nb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sb(e,t,s),s};let tc=class extends Di{getTourableRoot(){}render(){return m`
        
            <thermal-dropdown class="download">
            
                <span slot="invoker">${_(P.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${_(P.downloadoriginalfiles)}</thermal-button>
                    <small>${_(P.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${_(P.pngofindividualimages)}</thermal-button>
                    <small>${_(P.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${_(P.pngofentiregroup)}</thermal-button>
                    <small>${_(P.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${_(P.csvofanalysisdata)}</thermal-button>
                    <small>${_(P.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};tc=ab([te("group-download-dropdown")],tc);var ob=Object.defineProperty,vn=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&ob(e,t,s),s};class Pt extends Di{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}vn([me({context:Ta,subscribe:!0}),C()],Pt.prototype,"parentFileProviderElement");vn([me({context:Mu,subscribe:!0}),C()],Pt.prototype,"loading");vn([me({context:pl,subscribe:!0}),C()],Pt.prototype,"file");vn([me({context:Ru,subscribe:!0}),C()],Pt.prototype,"failure");vn([me({context:yl,subscribe:!0}),C()],Pt.prototype,"recording");const Rl=class Rl extends Pt{constructor(){super(...arguments),this.ref=pe()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return m`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${ve(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};Rl.styles=ge`
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

    `;let Bi=Rl;var lb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,Bu=(r,e,t,i)=>{for(var s=i>1?void 0:i?hb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lb(e,t,s),s};let da=class extends Di{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return m`
            <slot>
                <button class="default">${_(P.range).toLowerCase()}</button>
            </slot>
        `}};da.styles=Bi.styles;Bu([me({context:Da,subscribe:!0})],da.prototype,"setter",2);da=Bu([te("group-range-propagator")],da);var cb=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,db=(r,e,t,i)=>{for(var s=i>1?void 0:i?ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cb(e,t,s),s};let Uo=class extends Pt{constructor(){super(...arguments),this.container=pe()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(r){const e=this.getContainer();if(e!==void 0)r.mountToDom(e),r.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(r){var e;if(super.updated(r),r.has("file")){const t=r.get("file"),i=this.file;t===void 0&&i!==void 0&&this.container.value&&this.file&&((e=this.file.dom)==null?void 0:e.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}render(){var i,s;const r=this.loading===!1&&this.failure!==void 0,e=this.loading===!1&&this.file!==void 0,t={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":e,"is-error":r};return m`
            <div ${ve(this.container)} class=${Vt(t)} part="file-canvas-container">
            
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
        
        `}};Uo.styles=ge`

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
    `;Uo=db([te("file-canvas")],Uo);var pb=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,gb=(r,e,t,i)=>{for(var s=i>1?void 0:i?fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pb(e,t,s),s};let zo=class extends Pt{onInstanceCreated(r){}onFailure(r){}render(){return this.file?m`
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
    
    `;zo=gb([te("file-share-button")],zo);var mb=Object.defineProperty,yb=Object.getOwnPropertyDescriptor,vb=(r,e,t,i)=>{for(var s=i>1?void 0:i?yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mb(e,t,s),s};let Fo=class extends Pt{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?m`
            <thermal-dialog label=${_(P.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${_(P.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Ft(this.renderRow(_(P.thermalfilename),this.file.fileName))}

                        ${Ft(this.renderDownloadRow(_(P.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,_(P.thermalfiledownload)))}

                        ${this.file.visibleUrl?Ft(this.renderDownloadRow(_(P.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,_(P.visiblefiledownload))):E}

                        ${Ft(this.renderRow(_(P.time),tt.human(this.file.timestamp)))}

                        ${Ft(this.renderNumericalRow(_(P.duration),this.file.duration,0,"ms"))}

                        ${Ft(this.renderRow(_(P.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Ft(this.renderNumericalRow(_(P.bytesize),this.file.bytesize,0))}
                        
                        ${Ft(this.renderNumericalRow(_(P.minimaltemperature),this.file.min,10,"°C"))}

                        ${Ft(this.renderNumericalRow(_(P.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${_(P.filetype)}</h2>
                    <table>
                    ${Ft(this.renderRow(_(P.type),this.file.reader.parser.name))}
                    ${Ft(this.renderRow(_(P.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${_(P.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>m`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:E}};Fo.styles=ge`

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
    
    `;Fo=vb([te("file-info-button")],Fo);var bb=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,xb=(r,e,t,i)=>{for(var s=i>1?void 0:i?wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bb(e,t,s),s};let jo=class extends Pt{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(){}onFailure(){}render(){return this.file===void 0?E:m`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${ve(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file?_(P.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${_(P.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng()}>${_(P.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?m`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${_(P.convertentiresequencetovideo)}</thermal-button>
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
    
    `;jo=xb([te("file-download-dropdown")],jo);const pa=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:ke(r,"m:ss")}),Sb=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(pa(o,i,"minor")),n+=1}return e<i&&s.push(pa(e,i,"major")),s},$o=60*1e3,Fi=50,is=3,No=(r,e)=>{const t=Math.floor(r/Fi),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=$o;for(;o<e;)Sb(o,l,n,e).forEach(h=>a.push(h)),o+=$o,l+=$o;return a.push(pa(0,e,"bound")),a.push(pa(e,e,"bound")),a},$b=r=>m`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,rc=(r,e,t)=>m`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,Vu=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return m`<div class="ticks">
        
        ${e.map($b)}

        ${rc(s,ke(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?rc(n,ke(i,"m:ss:SSS"),"pointer"):E}

    </div>`},Gu=ge`

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
            width: ${Fi}px;
            left: -${Fi/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${is}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${Fi/2}px;
            padding-right: ${Fi/2}px;
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
                top: -${is}px;
            }

            .tick-pointer {
                width: ${is*2}px;
                height: ${is*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${is}px;
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
            height: ${is}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${Fi}px;
            position: relative;
            left: -${Fi/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var kb=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,or=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kb(e,t,s),s};let Rt=class extends Pt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=pe(),this.barRef=pe(),this.containerRef=pe(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=No(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=No(t.contentRect.width,this.file.duration)),t.contentRect.width<Rt.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return E;if(r.duration===0)return E;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return m`
            <div class="${Vt(e)}" ${ve(this.containerRef)}>


                ${r!==void 0?m`
                        <div class="ticks-horizontal-indent">


                            <div class="${Vt(s)}"  ${ve(this.timelineRef)}>
                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${ve(this.barRef)}></div>
                                    ${this.cursor?m`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(a=>m`<file-marker-timeline start=${a.fromMs} end=${a.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>


                            ${this.currentFrame?Vu(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):E}

                            


                            ${this.hasPlayButton===!0?m`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${_(P.prev)}</thermal-button>


                                        <button class="${Vt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


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

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${_(P.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${_(P.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `:E}

                            
                        </div>
                    `:E}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?m`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${_(P.date)}:</span> 
                            <span class="inline">${ke(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${_(P.time)}:</span> 
                            <span class="inline">${ke(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${_(P.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:E}

            <slot name="tour"></slot>

          `}};Rt.collapseWidth=500;Rt.styles=ge`
    
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

        ${Gu}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;or([me({context:Ua,subscribe:!0}),C()],Rt.prototype,"playing",2);or([me({context:pn,subscribe:!0}),C()],Rt.prototype,"currentFrame",2);or([me({context:gl,subscribe:!0}),C()],Rt.prototype,"duration",2);or([me({context:Iu,subscribe:!0}),C()],Rt.prototype,"mayStop",2);or([me({context:fl,subscribe:!0})],Rt.prototype,"cursor",2);or([me({context:Tu,subscribe:!0})],Rt.prototype,"cursorSetter",2);or([g({type:String,reflect:!0})],Rt.prototype,"hasPlayButton",2);or([g({type:String,reflect:!0})],Rt.prototype,"hasInfo",2);or([g({type:String,reflect:!0})],Rt.prototype,"interactive",2);or([me({context:vl,subscribe:!0})],Rt.prototype,"markers",2);or([C()],Rt.prototype,"collapsed",2);or([C()],Rt.prototype,"ticks",2);or([C()],Rt.prototype,"pointerMs",2);Rt=or([te("file-timeline")],Rt);var _b=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,xl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_b(e,t,s),s};let qs=class extends Pt{constructor(){super(...arguments),this.enabled="on"}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?E:m`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option">Adjust playback speed</div>

                    ${Object.entries(Kc).map(([r])=>m`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof li&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};qs.styles=ge`

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
    
    `;xl([g({type:String,reflect:!0})],qs.prototype,"enabled",2);xl([me({context:ml,subscribe:!0}),C()],qs.prototype,"playbackSpeed",2);qs=xl([te("file-playback-speed-dropdown")],qs);var Ab=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,Sl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ob(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ab(e,t,s),s};let Xs=class extends Pt{constructor(){super(...arguments),this.container=pe()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return m`
            <div class="container">
            
                <video ${ve(this.container)} preload="metadata">

                    ${this.url===void 0?E:m`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};Xs.styles=ge`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Sl([me({context:pn,subscribe:!0}),C()],Xs.prototype,"currentFrame",2);Sl([g({type:String,reflect:!0,attribute:!0})],Xs.prototype,"url",2);Xs=Sl([te("file-video")],Xs);const Eb=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),ke(t,"mm:ss:SSS")},Lb=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var Db=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,Kr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Db(e,t,s),s};const $l={fromAttribute:r=>r===null?null:Lb(r),toAttribute:r=>r===null?null:Eb(r)};let Tr=class extends Pt{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return E}};Kr([me({context:Ua,subscribe:!0}),C()],Tr.prototype,"playing",2);Kr([me({context:Ia,subscribe:!0}),C()],Tr.prototype,"ms",2);Kr([g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"label",2);Kr([g({type:String,reflect:!0,attribute:!0,converter:$l})],Tr.prototype,"start",2);Kr([g({type:String,reflect:!0,attribute:!0,converter:$l})],Tr.prototype,"end",2);Kr([g({type:String,reflect:!0,attribute:!0,converter:$l})],Tr.prototype,"dur",2);Kr([g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"active",2);Kr([g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"pauseOnActivate",2);Kr([g({type:String,reflect:!0,attribute:!0})],Tr.prototype,"say",2);Tr=Kr([te("file-marker")],Tr);var Mb=Object.defineProperty,Tb=Object.getOwnPropertyDescriptor,qi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Tb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Mb(e,t,s),s};let ui=class extends Pt{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return m`

            <div class="${Vt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};ui.styles=ge`
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


    `;qi([me({context:gl,subscribe:!0}),C()],ui.prototype,"duration",2);qi([me({context:pn,subscribe:!0}),C()],ui.prototype,"currentFrame",2);qi([me({context:Ia,subscribe:!0}),C()],ui.prototype,"ms",2);qi([g({type:Number,reflect:!0,attribute:!0})],ui.prototype,"start",2);qi([g({type:Number,reflect:!0,attribute:!0})],ui.prototype,"end",2);qi([C()],ui.prototype,"active",2);ui=qi([te("file-marker-timeline")],ui);var Ib=Object.defineProperty,Ub=Object.getOwnPropertyDescriptor,Yu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ub(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ib(e,t,s),s};let fa=class extends Pt{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return m`
            <div>


            ${this.markers.map(r=>r.active?m`<div class="item">
                    <h2>${r.label}</h2>
                    ${Ft(r.innerHTML)}
                    </div>`:E)}

            
            
            </div>

          `}};fa.styles=ge`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Yu([me({context:vl,subscribe:!0})],fa.prototype,"markers",2);fa=Yu([te("file-marks-content")],fa);var zb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,kl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zb(e,t,s),s};let Ks=class extends ft{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return m`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};Ks.styles=ge`

    
    `;kl([g()],Ks.prototype,"analysis",2);kl([C()],Ks.prototype,"name",2);Ks=kl([te("analysis-name")],Ks);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*jb(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Nb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,Pl=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nb(e,t,s),s};let Js=class extends ft{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return m`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?E:m`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${jb(Vn,r=>m`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Js.styles=ge`

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
    
    `;Pl([g()],Js.prototype,"analysis",2);Pl([C()],Js.prototype,"color",2);Js=Pl([te("analysis-color")],Js);var Hb=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,_r=(r,e,t,i)=>{for(var s=i>1?void 0:i?Bb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Hb(e,t,s),s};let rr=class extends ft{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

            <div class="table">

                <thermal-field label=${_(P.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${_(P.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${_(P.left)}>
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

                <thermal-field label=${_(P.right)}>
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

                <thermal-field label=${_(P.top)}>
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

                <thermal-field label=${_(P.bottom)}>
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
    
        
        `}};rr.styles=ge`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;_r([g()],rr.prototype,"analysis",2);_r([C()],rr.prototype,"color",2);_r([C()],rr.prototype,"top",2);_r([C()],rr.prototype,"left",2);_r([C()],rr.prototype,"width",2);_r([C()],rr.prototype,"height",2);_r([C()],rr.prototype,"type",2);_r([C()],rr.prototype,"right",2);_r([C()],rr.prototype,"bottom",2);_r([C()],rr.prototype,"maxX",2);_r([C()],rr.prototype,"maxY",2);rr=_r([te("edit-area")],rr);var Vb=Object.defineProperty,Gb=Object.getOwnPropertyDescriptor,$s=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vb(e,t,s),s};let Oi=class extends ft{constructor(){super(...arguments),this.topInputRef=pe(),this.leftInputRef=pe()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return m`

            <div class="table">

                <thermal-field label=${_(P.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${_(P.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${_(P.top)} hint=${_(P.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${_(P.left)} hint=${_(P.fromto,{from:0,to:this.maxX})}>
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
        
        `}};Oi.styles=ge`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;$s([g()],Oi.prototype,"analysis",2);$s([C()],Oi.prototype,"top",2);$s([C()],Oi.prototype,"left",2);$s([C()],Oi.prototype,"maxX",2);$s([C()],Oi.prototype,"maxY",2);Oi=$s([te("edit-point")],Oi);var Yb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,Fa=(r,e,t,i)=>{for(var s=i>1?void 0:i?qb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yb(e,t,s),s};let Zs=class extends ft{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return m`

            <thermal-dialog label="${_(P.editsth,{what:_(P[this.type])})}">

                <thermal-button slot="invoker">${_(P.edit)}</thermal-button>

                <div slot="content">
                    ${this.analysis instanceof wr?m`<edit-point .analysis=${this.analysis}></edit-point>`:m`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Fa([g()],Zs.prototype,"analysis",2);Fa([C()],Zs.prototype,"name",2);Fa([C()],Zs.prototype,"type",2);Zs=Fa([te("file-analysis-edit")],Zs);var Xb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xb(e,t,s),s};let Gt=class extends Pt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=pe(),this.graphRef=pe(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}onInstanceCreated(r){r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.graphs=r.analysisData.value,this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){return m`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&m`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&m`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ve(this.container)} style="height: 100%">
                ${this.graphs.colors.length>0?m`<thermal-chart 
                        ${ve(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:"Time",format:"m:ss:SSS"},vAxis:{title:"Temperature °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:E}
            </div>

            

            </div>
        
        `}};Gt.styles=ge`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;mr([C()],Gt.prototype,"hydrated",2);mr([g({reflect:!0})],Gt.prototype,"graphWidth",2);mr([g({reflect:!0})],Gt.prototype,"graphHeight",2);mr([C()],Gt.prototype,"graphs",2);mr([me({context:pn,subscribe:!0})],Gt.prototype,"currentFrame",2);mr([me({context:fl,subscribe:!0})],Gt.prototype,"cursor",2);mr([me({context:Tu,subscribe:!0})],Gt.prototype,"cursorSetter",2);mr([C()],Gt.prototype,"shadowLeft",2);mr([C()],Gt.prototype,"shadowTop",2);mr([C()],Gt.prototype,"shadowWidth",2);mr([C()],Gt.prototype,"shadowHeight",2);mr([me({context:Aa,subscribe:!0})],Gt.prototype,"graphSmooth",2);Gt=mr([te("file-analysis-graph")],Gt);const Xi="interactive-analysis-context";var Jb=Object.defineProperty,Zb=Object.getOwnPropertyDescriptor,Jr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Zb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Jb(e,t,s),s};let Sr=class extends ft{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof Er?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof wr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return m`
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
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${_(P.remove)}</thermal-button>
        </td>`:E}
        
        `}};Sr.styles=ge`
    
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

    `;Jr([g()],Sr.prototype,"analysis",2);Jr([me({context:Xi,subscribe:!0})],Sr.prototype,"interactiveanalysis",2);Jr([C()],Sr.prototype,"value",2);Jr([C()],Sr.prototype,"graph",2);Jr([C()],Sr.prototype,"may",2);Jr([C()],Sr.prototype,"dimension",2);Jr([C()],Sr.prototype,"color",2);Jr([g({type:Boolean,reflect:!0,attribute:!0})],Sr.prototype,"selected",2);Jr([C()],Sr.prototype,"name",2);Sr=Jr([te("file-analysis-table-row")],Sr);var Qb=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,bn=(r,e,t,i)=>{for(var s=i>1?void 0:i?e0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qb(e,t,s),s};let Vi=class extends Pt{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?E:m`

        <div class="overflow" ${ve(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?m`<u aria-hidden="true"></u>`:E}
                            <span>${_(P.analysis)}</span>
                            ${this.hasHighlightedData?m`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${_(P.downloadgraphdataascsv)}>CSV</button>`:E}
                        </th>
                        <th>${_(P.avg)}</th>
                        <th>${_(P.min)}</th>
                        <th>${_(P.max)}</th>
                        <th>${_(P.size)}</th>
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
        `}};Vi.styles=ge`
    
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

        



    `;bn([me({context:Xi,subscribe:!0}),g()],Vi.prototype,"interactiveanalysis",2);bn([C()],Vi.prototype,"analysis",2);bn([C()],Vi.prototype,"allSelected",2);bn([C()],Vi.prototype,"hasHighlightedData",2);Vi=bn([te("file-analysis-table")],Vi);var t0=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,i0=(r,e,t,i)=>{for(var s=i>1?void 0:i?r0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&t0(e,t,s),s};let ic=class extends Bi{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};ic=i0([te("file-download-lrc")],ic);var s0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,a0=(r,e,t,i)=>{for(var s=i>1?void 0:i?n0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&s0(e,t,s),s};let sc=class extends Bi{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng()}getDefaultLabel(){return"png"}};sc=a0([te("file-download-png")],sc);var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,wn=(r,e,t,i)=>{for(var s=i>1?void 0:i?l0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o0(e,t,s),s};let gs=class extends Bi{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};wn([g({type:String})],gs.prototype,"label",2);wn([g({type:Object})],gs.prototype,"onEnter",2);wn([g({type:Object})],gs.prototype,"onLeave",2);wn([g({type:Object})],gs.prototype,"onAction",2);gs=wn([te("file-button")],gs);var h0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,qu=(r,e,t,i)=>{for(var s=i>1?void 0:i?c0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&h0(e,t,s),s};let Wo=class extends Bi{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max})}getDefaultLabel(){return _(P.range).toLowerCase()}};qu([me({context:Da,subscribe:!0})],Wo.prototype,"setter",2);Wo=qu([te("file-range-propagator")],Wo);var u0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,Zr=(r,e,t,i)=>{for(var s=i>1?void 0:i?d0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&u0(e,t,s),s};let $r=class extends Pt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=tt.human(r.timestamp)}onFailure(){}render(){return m`
        <thermal-app author=${de(this.author)} recorded=${de(this.recorded)} license=${de(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:E}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${_(P.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${_(P.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${_(P.filerendering)} 
                    hint=${_(P.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${_(P.adjusttimescale)}
                    hint=${_(P.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${_(P.colourpalette)}
                    hint=${_(P.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(P.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:E}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(P.graphlines)}"
                    hint=${_(P.graphlineshint)}
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
    `}};$r.styles=ge`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Zr([g({type:String,reflect:!0,attribute:!0,converter:lt(!1)})],$r.prototype,"showembed",2);Zr([g({type:String,reflect:!0,attribute:!0,converter:lt(!1)})],$r.prototype,"showabout",2);Zr([g({type:String,reflect:!0,attribute:!0,converter:lt(!1)})],$r.prototype,"showfullscreen",2);Zr([g({type:String,reflect:!0,converter:lt(!0)})],$r.prototype,"showhistogram",2);Zr([me({context:Xi,subscribe:!0})],$r.prototype,"interactiveanalysis",2);Zr([g()],$r.prototype,"author",2);Zr([g()],$r.prototype,"recorded",2);Zr([g()],$r.prototype,"license",2);Zr([g()],$r.prototype,"label",2);$r=Zr([te("file-app")],$r);var p0=Object.defineProperty,et=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&p0(e,t,s),s};class qe extends ft{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=pe()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners()}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}et([g({type:String,reflect:!0})],qe.prototype,"url");et([g({type:String,reflect:!0})],qe.prototype,"visible");et([g({type:String,reflect:!0,attribute:!0})],qe.prototype,"palette");et([g({type:Number,reflect:!0,attribute:!0})],qe.prototype,"opacity");et([g({type:Number,reflect:!0})],qe.prototype,"from");et([g({type:Number,reflect:!0})],qe.prototype,"to");et([g()],qe.prototype,"author");et([g()],qe.prototype,"recorded");et([g()],qe.prototype,"license");et([g()],qe.prototype,"label");et([g({type:String,reflect:!1,attribute:!0,converter:lt(!1)})],qe.prototype,"showembed");et([g({type:String,reflect:!1,attribute:!0,converter:lt(!1)})],qe.prototype,"showabout");et([g({type:String,reflect:!1,attribute:!0,converter:lt(!1)})],qe.prototype,"showtutorial");et([g({type:String,reflect:!1,converter:lt(!0)})],qe.prototype,"showfullscreen");et([g({type:String,reflect:!0,converter:lt(!0)})],qe.prototype,"showhistogram");et([ce({context:Xi}),g({type:String,reflect:!0,converter:lt(!0)})],qe.prototype,"interactiveanalysis");et([g({type:String,reflect:!0})],qe.prototype,"analysis1");et([g({type:String,reflect:!0})],qe.prototype,"analysis2");et([g({type:String,reflect:!0})],qe.prototype,"analysis3");et([g({type:String,reflect:!0})],qe.prototype,"analysis4");et([g({type:String,reflect:!0})],qe.prototype,"analysis5");et([g({type:String,reflect:!0})],qe.prototype,"analysis6");et([g({type:String,reflect:!0})],qe.prototype,"analysis7");et([g({type:String,reflect:!0})],qe.prototype,"ms");et([g({type:String,reflect:!0})],qe.prototype,"speed");et([g({type:String,reflect:!0})],qe.prototype,"autoclear");et([C()],qe.prototype,"hasGraph");et([C()],qe.prototype,"hasAnalysis");et([C()],qe.prototype,"isSequence");var f0=Object.defineProperty,g0=Object.getOwnPropertyDescriptor,m0=(r,e,t,i)=>{for(var s=i>1?void 0:i?g0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&f0(e,t,s),s};let nc=class extends qe{render(){return this.url===""?E:m`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${de(this.from)}
        to=${de(this.to)}
        opacity=${de(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${de(this.visible)}
            analysis1=${de(this.analysis1)}
            analysis2=${de(this.analysis2)}
            analysis3=${de(this.analysis3)}
            analysis4=${de(this.analysis4)}
            analysis5=${de(this.analysis5)}
            analysis6=${de(this.analysis6)}
            analysis7=${de(this.analysis7)}
            speed=${de(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${de(this.author)} 
                recorded=${de(this.recorded)} 
                license=${de(this.license)}
                label=${de(this.label)}  
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


    
    `}};nc=m0([te("thermal-file-app")],nc);class y0{constructor(e){this.steps=e,this.onStepInternalActivation=new ee}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class _l{constructor(e){this._active=!1,this.onTourActivationStatus=new ee,this.onStepActivation=new ee,this.storage=new y0(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new _l(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var v0=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,Tt=(r,e,t,i)=>{for(var s=i>1?void 0:i?b0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&v0(e,t,s),s};let $t=class extends Pt{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=pe(),this.contentContainerWidth=1e3,this.tourController=_l.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=tt.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return m`
        <thermal-app author=${de(this.author)} recorded=${de(this.recorded)} license=${de(this.license)}>

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${_(P.colourpalette)}>
              ${_(P.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?m`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:E}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${_(P.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${_(P.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${_(P.filerendering)} 
                    hint=${_(P.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${_(P.adjusttimescale)}
                    hint=${_(P.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${_(P.colourpalette)}
                    hint=${_(P.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(P.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:E}

                  ${this.file&&this.file.timeline.isSequence?m` <thermal-field 
                    label="${_(P.graphlines)}"
                    hint=${_(P.graphlineshint)}
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
                ${_(P.tutorial)}
              </thermal-button>`:E}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${ve(this.contentContainerRef)}>

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
                        <div class="placeholder-title">${_(P.analysis)}</div>
                        <div>${_(P.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?m`
                      <div>${_(P[(e=this.tool)==null?void 0:e.description])}</div>
                    `:m`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${_(P.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${_(P.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${_(P.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?m`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?m`<div class="placeholder">
                      <div class="placeholder-title">${_(P.graph)}</div>
                      <div>${this.hasAnalysis===!1?_(P.graphhint1):Ft(_(P.graphhint2))}</div>
                    </div>`:E}
                  
                  </div>
                  `:E}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>
    `}};$t.styles=ge`


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
  
  `;Tt([g({type:String,reflect:!0,attribute:!0,converter:lt(!1)})],$t.prototype,"showembed",2);Tt([g({type:String,reflect:!0,attribute:!0,converter:lt(!1)})],$t.prototype,"showabout",2);Tt([g({type:String,reflect:!0,attribute:!0,converter:lt(!1)})],$t.prototype,"showfullscreen",2);Tt([g({type:Boolean,reflect:!0,converter:lt(!0)})],$t.prototype,"showhistogram",2);Tt([g({type:String,reflect:!1,attribute:!0})],$t.prototype,"showtutorial",2);Tt([me({context:Xi,subscribe:!0})],$t.prototype,"interactiveanalysis",2);Tt([C()],$t.prototype,"hasAnalysis",2);Tt([C()],$t.prototype,"hasGraph",2);Tt([C()],$t.prototype,"tool",2);Tt([C()],$t.prototype,"isSequence",2);Tt([g()],$t.prototype,"author",2);Tt([g()],$t.prototype,"recorded",2);Tt([g()],$t.prototype,"license",2);Tt([g()],$t.prototype,"label",2);Tt([ce({context:uu})],$t.prototype,"tourController",2);Tt([ce({context:du})],$t.prototype,"tourStep",2);Tt([C()],$t.prototype,"contentContainerWidth",2);$t=Tt([te("desktop-app")],$t);var w0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,S0=(r,e,t,i)=>{for(var s=i>1?void 0:i?x0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&w0(e,t,s),s};let ac=class extends qe{render(){return this.url===""?E:m`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${de(this.from)}
        to=${de(this.to)}
        opacity=${de(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${ve(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${de(this.visible)}
            analysis1=${de(this.analysis1)}
            analysis2=${de(this.analysis2)}
            analysis3=${de(this.analysis3)}
            analysis4=${de(this.analysis4)}
            analysis5=${de(this.analysis5)}
            analysis6=${de(this.analysis6)}
            analysis7=${de(this.analysis7)}
            speed=${de(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${de(this.author)} 
              recorded=${de(this.recorded)} 
              license=${de(this.license)}
              label=${de(this.label)}
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


    
    `}};ac=S0([te("thermal-file-analyser")],ac);var $0=Object.defineProperty,k0=Object.getOwnPropertyDescriptor,Cl=(r,e,t,i)=>{for(var s=i>1?void 0:i?k0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$0(e,t,s),s};let Qs=class extends ft{constructor(){super(...arguments),this.dropinRef=pe(),this.loaded=!1}connectedCallback(){super.connectedCallback(),console.log(this.dropinRef.value)}firstUpdated(r){var e;super.firstUpdated(r),console.log(this.dropinRef.value,(e=this.dropinRef.value)==null?void 0:e.listener,"______"),setTimeout(()=>{this.dropinRef.value&&this.dropinRef.value.listener&&this.dropinRef.value.listener.onDrop.set(this.UUID,()=>{var t;(t=this.dropinRef.value)==null||t.deleteFile(),this.loaded=!0})},0)}handleOpenClick(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.dropinRef.value.group.files.reset(),this.dropinRef.value.listener.openFileDialog())}handleCloseFile(){this.dropinRef.value&&this.dropinRef.value.listener&&(this.loaded=!1,this.dropinRef.value.deleteFile(),this.dropinRef.value.listener.hydrate())}render(){return m`

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

                            <file-dropin ${ve(this.dropinRef)}>

                                <desktop-app showembed="false" showabout="false"></desktop-app>

                            </file-dropin>

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};Qs.styles=ge`
    
        file-app,
        desktop-app {

            --thermal-slate-light: #e8e8e8;


        }
    `;Cl([C()],Qs.prototype,"dropinRef",2);Cl([C()],Qs.prototype,"loaded",2);Qs=Cl([te("thermal-dropin-app")],Qs);var P0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,Ur=(r,e,t,i)=>{for(var s=i>1?void 0:i?_0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&P0(e,t,s),s};let pr=class extends ft{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return m`

            ${e?m`<h3 class="row-title">${e}</h3>`:E}

            ${t?m`<p>${t}</p>`:E}

            <section class=${Vt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>m`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};pr.styles=ge`

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

    `;Ur([g()],pr.prototype,"columns",2);Ur([g()],pr.prototype,"breakpoint",2);Ur([g({type:Object})],pr.prototype,"files",2);Ur([g({type:String})],pr.prototype,"label",2);Ur([g({type:String})],pr.prototype,"info",2);Ur([g({type:Number})],pr.prototype,"from",2);Ur([g({type:Number})],pr.prototype,"to",2);Ur([g({type:Number})],pr.prototype,"cursor",2);Ur([g({type:String})],pr.prototype,"grouping",2);Ur([C()],pr.prototype,"collapsed",2);pr=Ur([te("time-group-row")],pr);var C0=Object.defineProperty,ks=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&C0(e,t,s),s},Ct;const Ki=(Ct=class extends ft{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new ds(this),this.groupRenderer=new Hs(this)}parseFilesProperty(e){return e.split(Ct.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(Ct.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(Ct.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[u,d]=h,p=u.trim(),b=d.trim();switch(p){case Ct.FILE_THERMAL_KEY:s=b;break;case Ct.FILE_VISIBLE_KEY:n=b;break;case Ct.FILE_LABEL_KEY:a=b;break;case Ct.FILE_NOTE_KEY:o=b;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},Ct.styles=[ds.styles,Hs.styles,ge`
    
        `],Ct.FILE_RECORD_SEPARATOR=";",Ct.FILE_SEGMENT_SEPAROATOR="|",Ct.FILE_COMPONENT_SEPAROATOR="~",Ct.FILE_THERMAL_KEY="thermal",Ct.FILE_VISIBLE_KEY="visible",Ct.FILE_LABEL_KEY="label",Ct.FILE_NOTE_KEY="note",Ct);ks([g({type:String,reflect:!1,attribute:!0,converter:lt(!1)})],Ki.prototype,"showembed");ks([g({type:String,reflect:!1,attribute:!0,converter:lt(!1)})],Ki.prototype,"showabout");ks([g({type:String,reflect:!1,attribute:!0,converter:lt(!1)})],Ki.prototype,"showtutorial");ks([g({type:String,reflect:!1,converter:lt(!0)})],Ki.prototype,"showfullscreen");ks([g({type:String,reflect:!0,converter:lt(!0)})],Ki.prototype,"showhistogram");ks([ce({context:Xi}),g({type:String,reflect:!0,converter:lt(!0)})],Ki.prototype,"interactiveanalysis");let Al=Ki;class A0{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof ni)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof ni)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?zc(e).getTime():this.grouping==="day"?ea(e).getTime():this.grouping==="week"?si(e).getTime():this.grouping==="month"?ra(e).getTime():this.grouping==="year"?Xo(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?Lc(e).getTime():this.grouping==="day"?Oc(e).getTime():this.grouping==="week"?ia(e).getTime():this.grouping==="month"?ta(e).getTime():this.grouping==="year"?Ec(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:ke(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:ke(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+ke(e,"w")+" of "+ke(e,"yyyy"),info:[tt.humanDate(si(e).getTime()),tt.humanDate(ia(e).getTime())].join(" - ")}:this.grouping==="month"?{label:ke(e,"MMMM yyyy"),info:[tt.humanDate(ra(e).getTime()),tt.humanDate(ta(e).getTime())].join(" - ")}:this.grouping==="year"?{label:ke(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?tt.human(e):this.grouping==="hour"||this.grouping==="day"?ke(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",tt.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var O0=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,dt=(r,e,t,i)=>{for(var s=i>1?void 0:i?E0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&O0(e,t,s),s};let ot=class extends Al{constructor(){super(...arguments),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new ee,this.onColumns=new ee,this.preservetime=!0}connectedCallback(){super.connectedCallback();const t=Ca(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(this.log(t,i),t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new A0(this,t),this.onGroupInit.call(this.group)}firstUpdated(r){super.firstUpdated(r),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to});const e=this.files?this.parseFilesProperty(this.files):[];e.length>0?this.grouper.processParsedFiles(e):this.grouper.processEntries(this.entries.filter(t=>t instanceof hi))}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}render(){return m`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}">

                    <group-provider slug="${this.slug}">

                        <thermal-app
                            author=${de(this.author)}
                            license=${de(this.license)}
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
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${_(P.columns,{num:this.columns})}</div>
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
        
        `}};ot.styles=[Al.styles,ge`


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


    
    `];dt([g({type:String,reflect:!0,attribute:!0})],ot.prototype,"palette",2);dt([g({type:Number,reflect:!0})],ot.prototype,"from",2);dt([g({type:Number,reflect:!0})],ot.prototype,"to",2);dt([g({type:String,reflect:!0})],ot.prototype,"author",2);dt([g({type:String,reflect:!0})],ot.prototype,"label",2);dt([g({type:String,reflect:!1})],ot.prototype,"description",2);dt([g({type:String,reflect:!0})],ot.prototype,"license",2);dt([C(),Ei({slot:"entry",flatten:!0})],ot.prototype,"entries",2);dt([g({type:String,reflect:!0})],ot.prototype,"slug",2);dt([g()],ot.prototype,"columns",2);dt([g()],ot.prototype,"breakpoint",2);dt([g({type:String,reflect:!0})],ot.prototype,"grouping",2);dt([C()],ot.prototype,"groups",2);dt([g({type:String})],ot.prototype,"files",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis1",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis2",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis3",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis4",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis5",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis6",2);dt([g({type:String,reflect:!0})],ot.prototype,"analysis7",2);dt([g({type:String,reflect:!0,converter:lt(!1)})],ot.prototype,"preservetime",2);ot=dt([te("thermal-group-app")],ot);var L0=Object.defineProperty,D0=Object.getOwnPropertyDescriptor,Ri=(r,e,t,i)=>{for(var s=i>1?void 0:i?D0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&L0(e,t,s),s};let kr=class extends Di{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=pe(),this.indicatorRef=pe()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof ni?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=No(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?E:m`<div class="container ticks-horizontal-indent">

            <div 
                class="timeline" 
                ${ve(this.timelineRef)}
                @click=${r=>this.handleTimelineClick(r)}
                @mouseenter=${this.handleTimelineEnter}
                @mouseleave=${this.handleTimelineLeave}
                @mousemove=${this.handleTimelineMove}
            >
                <div class="background"></div>
                <div class="indicator" ${ve(this.indicatorRef)}></div>
            </div>

            ${this.longestDurationInMs!==void 0?Vu(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):E}

        </div>`}};kr.TICK_WIDTH=50;kr.TICK_POINTER_HEIGHT=3;kr.styles=ge`


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
    
    `;Ri([C()],kr.prototype,"longestDurationInMs",2);Ri([C()],kr.prototype,"ms",2);Ri([C()],kr.prototype,"pointerMs",2);Ri([C()],kr.prototype,"playing",2);Ri([C()],kr.prototype,"instances",2);Ri([C()],kr.prototype,"has",2);Ri([C()],kr.prototype,"ticks",2);kr=Ri([te("group-timeline")],kr);var R0=Object.defineProperty,M0=Object.getOwnPropertyDescriptor,Cr=(r,e,t,i)=>{for(var s=i>1?void 0:i?M0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&R0(e,t,s),s};let ir=class extends Al{constructor(){super(...arguments),this.registryProviderRef=pe(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=Ca(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof jt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return m`
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
                    <registry-ticks-bar highlightFrom=${de(this.highlightFrom)} highlightTo=${de(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};ir.styles=ge`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;Cr([g({type:String,reflect:!0,attribute:!0})],ir.prototype,"palette",2);Cr([g({type:Number,reflect:!0})],ir.prototype,"from",2);Cr([g({type:Number,reflect:!0})],ir.prototype,"to",2);Cr([g()],ir.prototype,"slug",2);Cr([g({type:String,reflect:!0})],ir.prototype,"grouping",2);Cr([g({type:String,reflect:!0})],ir.prototype,"columns",2);Cr([g({type:Number,reflect:!0})],ir.prototype,"breakpoint",2);Cr([g({type:String,reflect:!0})],ir.prototype,"groups",2);Cr([g({type:String,reflect:!0})],ir.prototype,"autogroups",2);Cr([Ei({flatten:!0}),C()],ir.prototype,"entries",2);Cr([C()],ir.prototype,"registry",2);ir=Cr([te("thermal-registry-app")],ir);var T0=Object.defineProperty,I0=Object.getOwnPropertyDescriptor,fi=(r,e,t,i)=>{for(var s=i>1?void 0:i?I0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&T0(e,t,s),s};let Ir=class extends ft{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=pe()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await Cu(this.elementContext.element.getTourableRoot(),this,{middleware:[_u(20),Ay({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return m`<div class=${Vt(r)}>

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

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${_(P.back)}</thermal-button>`:E} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?m`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${_(P.next)}</thermal-button>`:E}          
            
            </div>

            

        </div>
        `}};Ir.styles=ge`

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
    
    `;fi([g({type:String})],Ir.prototype,"label",2);fi([C()],Ir.prototype,"active",2);fi([g({type:String,reflect:!0})],Ir.prototype,"displayed",2);fi([g({type:String})],Ir.prototype,"placement",2);fi([me({context:uu,subscribe:!0})],Ir.prototype,"tour",2);fi([me({context:du,subscribe:!0})],Ir.prototype,"definition",2);fi([me({context:pu,subscribe:!0})],Ir.prototype,"elementContext",2);fi([g({type:String})],Ir.prototype,"youtube",2);Ir=fi([te("tour-step")],Ir);var U0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?z0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&U0(e,t,s),s};let Yt=class extends ft{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=pe(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return m`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`}renderData(r){return m`
            <div class="files ${this.cls}">
                ${r.files.map(e=>this.renderFile(e))}
            </div>
        `}renderFile(r){return m`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${r.lrc}" 
                    visible=${de(r.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${tt.human(r.timestamp*1e3)}</span></h2>
                        <div>
                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${_(P.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>

                        </div>
                    </div>
                    
                    <file-canvas></file-canvas>
                    <file-timeline hasPlayButton="false" hasInfo="false"></file-timeline>
                    <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                </file-provider>
            </div>
        </div>`}clsToStr(r){return _(P.columns,{num:this.clsx[r]})}renderColumnsSwitch(){return m`<thermal-dropdown>
            <span slot="invoker">${this.clsToStr(this.cls)}</span>
            <thermal-button slot="option" @click=${()=>this.cls="xs"}>${this.clsx.xs}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="sm"}>${this.clsx.sm}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="md"}>${this.clsx.md}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="lg"}>${this.clsx.lg}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="xl"}>${this.clsx.xl}</thermal-button>
        </thermal-dropdown>`}renderInfo(){if(this.data){const r=this.getUrl(this.url,this.folder,this.subfolder),e="Request",t={"API Root":this.url,Subfolder:this.subfolder,Folder:this.folder,[e]:r};return m`
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
            `}return E}render(){var e;let r=_(P.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),m`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${ve(this.groupRef)}>
        
                        <thermal-app
                            author=${de(this.author)}
                            license=${de(this.license)}
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
                            
                        ${this.error?Ft(this.error):E}

                        ${this.error===void 0&&this.data?this.renderData(this.data):E}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};Yt.styles=ge`


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

    `;yr([g({type:String,reflect:!0})],Yt.prototype,"url",2);yr([g({type:String,reflect:!0})],Yt.prototype,"subfolder",2);yr([g({type:String,reflect:!0})],Yt.prototype,"folder",2);yr([C()],Yt.prototype,"error",2);yr([C()],Yt.prototype,"loading",2);yr([C()],Yt.prototype,"data",2);yr([C()],Yt.prototype,"label",2);yr([C()],Yt.prototype,"cls",2);yr([g({type:String,reflect:!0})],Yt.prototype,"license",2);yr([g({type:String,reflect:!0})],Yt.prototype,"author",2);yr([g({type:String,reflect:!0,attribute:!0})],Yt.prototype,"palette",2);yr([g({type:String,reflect:!0,converter:lt(!0)})],Yt.prototype,"showhistogram",2);Yt=yr([te("remote-folder-app")],Yt);var ti=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(ti||{});const F0={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},j0=(r,e,t)=>{let i;const s=F0[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},N0={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},W0={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},H0={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},B0={date:Dt({formats:N0,defaultWidth:"full"}),time:Dt({formats:W0,defaultWidth:"full"}),dateTime:Dt({formats:H0,defaultWidth:"full"})},V0=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],G0={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+V0[e]+" o' p"},other:"P"},Y0=(r,e)=>{const t=G0[r];return typeof t=="function"?t(e):t},q0={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},X0={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},K0={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},J0={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},Z0={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},Q0={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},ew={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},tw=(r,e)=>Number(r)+".",rw={ordinalNumber:tw,era:nt({values:q0,defaultWidth:"wide"}),quarter:nt({values:X0,defaultWidth:"wide",argumentCallback:r=>r-1}),month:nt({values:K0,defaultWidth:"wide",formattingValues:J0,defaultFormattingWidth:"wide"}),day:nt({values:Z0,defaultWidth:"wide"}),dayPeriod:nt({values:Q0,defaultWidth:"wide",formattingValues:ew,defaultFormattingWidth:"wide"})},iw=/^(\d+)\.?/i,sw=/\d+/i,nw={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},aw={any:[/^p[řr]/i,/^(po|n)/i]},ow={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},lw={any:[/1/i,/2/i,/3/i,/4/i]},hw={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},cw={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},uw={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},dw={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},pw={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},fw={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},gw={ordinalNumber:rn({matchPattern:iw,parsePattern:sw,valueCallback:r=>parseInt(r,10)}),era:at({matchPatterns:nw,defaultMatchWidth:"wide",parsePatterns:aw,defaultParseWidth:"any"}),quarter:at({matchPatterns:ow,defaultMatchWidth:"wide",parsePatterns:lw,defaultParseWidth:"any",valueCallback:r=>r+1}),month:at({matchPatterns:hw,defaultMatchWidth:"wide",parsePatterns:cw,defaultParseWidth:"any"}),day:at({matchPatterns:uw,defaultMatchWidth:"wide",parsePatterns:dw,defaultParseWidth:"any"}),dayPeriod:at({matchPatterns:pw,defaultMatchWidth:"any",parsePatterns:fw,defaultParseWidth:"any"})},mw={code:"cs",formatDistance:j0,formatLong:B0,formatRelative:Y0,localize:rw,match:gw,options:{weekStartsOn:1,firstWeekContainsDate:4}},yw={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},vw=(r,e,t)=>{let i;const s=yw[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},bw={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},ww={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xw={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Sw={date:Dt({formats:bw,defaultWidth:"full"}),time:Dt({formats:ww,defaultWidth:"full"}),dateTime:Dt({formats:xw,defaultWidth:"full"})},$w={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},kw=(r,e,t,i)=>$w[r],Pw={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},_w={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},Cw={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},Aw={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},Ow={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},Ew={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},Lw=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},Dw={ordinalNumber:Lw,era:nt({values:Pw,defaultWidth:"wide"}),quarter:nt({values:_w,defaultWidth:"wide",argumentCallback:r=>r-1}),month:nt({values:Cw,defaultWidth:"wide"}),day:nt({values:Aw,defaultWidth:"wide"}),dayPeriod:nt({values:Ow,defaultWidth:"wide",formattingValues:Ew,defaultFormattingWidth:"wide"})},Rw=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,Mw=/\d+/i,Tw={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},Iw={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},Uw={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},zw={any:[/1/i,/2/i,/3/i,/4/i]},Fw={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},jw={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},Nw={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},Ww={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},Hw={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},Bw={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},Vw={ordinalNumber:rn({matchPattern:Rw,parsePattern:Mw,valueCallback:r=>parseInt(r,10)}),era:at({matchPatterns:Tw,defaultMatchWidth:"wide",parsePatterns:Iw,defaultParseWidth:"any"}),quarter:at({matchPatterns:Uw,defaultMatchWidth:"wide",parsePatterns:zw,defaultParseWidth:"any",valueCallback:r=>r+1}),month:at({matchPatterns:Fw,defaultMatchWidth:"wide",parsePatterns:jw,defaultParseWidth:"any"}),day:at({matchPatterns:Nw,defaultMatchWidth:"wide",parsePatterns:Ww,defaultParseWidth:"any"}),dayPeriod:at({matchPatterns:Hw,defaultMatchWidth:"any",parsePatterns:Bw,defaultParseWidth:"any"})},Gw={code:"cy",formatDistance:vw,formatLong:Sw,formatRelative:kw,localize:Dw,match:Vw,options:{weekStartsOn:0,firstWeekContainsDate:1}},oc={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Yw=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?oc[r].withPreposition:oc[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},qw={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Xw={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Kw={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Jw={date:Dt({formats:qw,defaultWidth:"full"}),time:Dt({formats:Xw,defaultWidth:"full"}),dateTime:Dt({formats:Kw,defaultWidth:"full"})},Zw={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Qw=(r,e,t,i)=>Zw[r],e1={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},t1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Ho={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},r1={narrow:Ho.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Ho.wide},i1={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},s1={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},n1={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},a1=r=>Number(r)+".",o1={ordinalNumber:a1,era:nt({values:e1,defaultWidth:"wide"}),quarter:nt({values:t1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:nt({values:Ho,formattingValues:r1,defaultWidth:"wide"}),day:nt({values:i1,defaultWidth:"wide"}),dayPeriod:nt({values:s1,defaultWidth:"wide",formattingValues:n1,defaultFormattingWidth:"wide"})},l1=/^(\d+)(\.)?/i,h1=/\d+/i,c1={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},u1={any:[/^v/i,/^n/i]},d1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},p1={any:[/1/i,/2/i,/3/i,/4/i]},f1={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},g1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},m1={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},y1={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},v1={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},b1={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},w1={ordinalNumber:rn({matchPattern:l1,parsePattern:h1,valueCallback:r=>parseInt(r)}),era:at({matchPatterns:c1,defaultMatchWidth:"wide",parsePatterns:u1,defaultParseWidth:"any"}),quarter:at({matchPatterns:d1,defaultMatchWidth:"wide",parsePatterns:p1,defaultParseWidth:"any",valueCallback:r=>r+1}),month:at({matchPatterns:f1,defaultMatchWidth:"wide",parsePatterns:g1,defaultParseWidth:"any"}),day:at({matchPatterns:m1,defaultMatchWidth:"wide",parsePatterns:y1,defaultParseWidth:"any"}),dayPeriod:at({matchPatterns:v1,defaultMatchWidth:"wide",parsePatterns:b1,defaultParseWidth:"any"})},x1={code:"de",formatDistance:Yw,formatLong:Jw,formatRelative:Qw,localize:o1,match:w1,options:{weekStartsOn:1,firstWeekContainsDate:4}},S1={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},$1={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},k1={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},P1={date:Dt({formats:S1,defaultWidth:"full"}),time:Dt({formats:$1,defaultWidth:"full"}),dateTime:Dt({formats:k1,defaultWidth:"full"})},_1={code:"en-GB",formatDistance:Dc,formatLong:P1,formatRelative:Rc,localize:Mc,match:Tc,options:{weekStartsOn:1,firstWeekContainsDate:4}},C1={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},A1=(r,e,t)=>{let i;const s=C1[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},O1={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},E1={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},L1={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},D1={date:Dt({formats:O1,defaultWidth:"full"}),time:Dt({formats:E1,defaultWidth:"full"}),dateTime:Dt({formats:L1,defaultWidth:"full"})},R1={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},M1=(r,e,t,i)=>R1[r],T1={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},I1={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},U1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},z1={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},F1={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},j1=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},N1=["MMM","MMMM"],W1={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&N1.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:j1,era:nt({values:T1,defaultWidth:"wide"}),quarter:nt({values:I1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:nt({values:U1,defaultWidth:"wide"}),day:nt({values:z1,defaultWidth:"wide"}),dayPeriod:nt({values:F1,defaultWidth:"wide"})},H1=/^(\d+)(ième|ère|ème|er|e)?/i,B1=/\d+/i,V1={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},G1={any:[/^av/i,/^ap/i]},Y1={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},q1={any:[/1/i,/2/i,/3/i,/4/i]},X1={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},K1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},J1={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},Z1={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},Q1={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},ex={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},tx={ordinalNumber:rn({matchPattern:H1,parsePattern:B1,valueCallback:r=>parseInt(r)}),era:at({matchPatterns:V1,defaultMatchWidth:"wide",parsePatterns:G1,defaultParseWidth:"any"}),quarter:at({matchPatterns:Y1,defaultMatchWidth:"wide",parsePatterns:q1,defaultParseWidth:"any",valueCallback:r=>r+1}),month:at({matchPatterns:X1,defaultMatchWidth:"wide",parsePatterns:K1,defaultParseWidth:"any"}),day:at({matchPatterns:J1,defaultMatchWidth:"wide",parsePatterns:Z1,defaultParseWidth:"any"}),dayPeriod:at({matchPatterns:Q1,defaultMatchWidth:"any",parsePatterns:ex,defaultParseWidth:"any"})},rx={code:"fr",formatDistance:A1,formatLong:D1,formatRelative:M1,localize:W1,match:tx,options:{weekStartsOn:1,firstWeekContainsDate:4}};var ix=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,Et=(r,e,t,i)=>{for(var s=i>1?void 0:i?sx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ix(e,t,s),s};const nx={en:_1,fr:rx,de:x1,cy:Gw,cs:mw};let bt=class extends ft{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=ti.HOURS,this.folders={},this.registryRef=pe(),this.interactiveAnalysis=!0}updated(r){super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder)}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;const t=e!==void 0?`${r}?scope=${e}`:r,i=await fetch(t);if(i.ok){const s=await i.json();this.info=s,this.folders=s.folders,this.loadingInfo=!1}}async loadData(r,e,t,i){if(this.dataOnly=void 0,this.dataMultiple=void 0,r.length===0)return;this.loadingData=!0;const s=[];i&&s.push(`scope=${i}`);const n=r.length===1;n?s.push(r[0]):(s.push(e),s.push(`only=${r.join(",")}`),s.push("grid"));const a=t+"?"+s.join("&"),o=async h=>{const u=await fetch(h);if(u.ok){const d=await u.json();if("data"in d){const p=Object.entries(d.data).map(([b,w])=>{const S=Object.entries(w);S.sort((H,A)=>H[0]<A[0]?-1:1);const k=Object.fromEntries(S);return[b,k]});d.data=Object.fromEntries(p)}return d}return!1},l=n?await o(a):await o(a);this.registryRef.value&&(this.state===1?this.registryRef.value.registry.groups.addListener(this.UUID,h=>{h.forEach(u=>u.files.addListener(this.UUID,d=>{d[0]&&u.analysisSync.turnOn(d[0])}))}):this.registryRef.value.registry.groups.removeListener(this.UUID)),l===!1?this.error="There was an error loading data":"files"in l?this.dataOnly=l:"folders"in l&&(this.dataMultiple=l),this.loadingData=!1}renderMainScreen(){return m`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>m`
        <button class="screen-main-folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>
            <h1>${r.name}</h1>
            ${r.description!==void 0?m`<p>${r.description}</p>`:E}
            <div>${_(P.numfiles,{num:r.lrc_count})}</div>
        </button>
            `)}
    </nav>


</div>
        `}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.reset(),this.registryRef.value.registry.minmax.reset(),this.registryRef.value.registry.range.reset())}actionCloseToHomepage(){this.state=0,this.only=[],delete this.dataOnly,delete this.dataMultiple,this.resetRegistry()}actionOpenOneFolder(r){!this.only.includes(r)&&Object.keys(this.folders).includes(r)&&(this.state=1,this.only=[r],this.resetRegistry())}actionToggleFolder(r){this.only.includes(r)?(this.only=this.only.filter(e=>e!==r),this.resetRegistry(),this.only.length===0?this.actionCloseToHomepage():this.only.length===1?this.state=1:this.only.length>1&&(this.state=2)):Object.keys(this.folders).includes(r)&&(this.only=[...this.only,r],this.resetRegistry(),this.only.length>0&&(this.state=2))}renderLoading(r){return m`<div class="loading">${r}</div>`}renderFileInner(r,e){return m`
<article class="file">
    <file-provider batch="true" thermal=${r.lrc} visible="${r.png}">

        <header>
            <h2>
                <span>${e(r)}</span>
            </h2>
            <div>
                <file-download-lrc></file-download-lrc>
                <file-download-png></file-download-png>
                <file-range-propagator></file-range-propagator>
            </div>
        </header>

        <main>
            <file-canvas></file-canvas>
            <file-analysis-table></file-analysis-table>
        </main>

    </file-provider>
</article>
        `}renderOne(){return this.loadingData||this.dataOnly===void 0?this.renderLoading("Načítám data..."):m`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(r=>m`<div>
                    ${this.renderFileInner(r,()=>tt.human(r.timestamp*1e3))}
                    </div>`)}
            
            </group-provider>   
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0)return this.renderLoading("Načítám data...");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([i,s])=>({name:s.name,key:i})).length;return m`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([i,s])=>{let n;const a=parseInt(i)*1e3;return this.by===ti.HOURS?n=ke(a,"d. M. yyyy - HH")+":00":this.by===ti.DAYS?n=ke(a,"d. M. yyyy"):this.by===ti.WEEKS?n=ke(a,"wo"):this.by===ti.MONTHS?n=ke(a,"LLLL yyyy",{locale:nx[this.locale]}):this.by===ti.YEARS&&(n=ke(a,"yyyy")),m`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${t}">
                                <div>
                                    <h2>${n}</h2>
                                    <group-provider slug="${i}" class="buttons">
                                        <group-range-propagator></group-range-propagator>
                                        <group-download-dropdown></group-download-dropdown>
                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${i}" class="row">
                            ${Object.values(s).map(o=>m`<td class="cell-content">
                                    ${Object.values(o.files).map(l=>this.renderFileInner(l,h=>{const u=h.timestamp*1e3;return this.by===ti.HOURS||this.by===ti.DAYS?ke(u,"HH:ii"):tt.human(u)}))}
                                </td>`)}
                        </group-provider>
                    `})}
                </tbody>
            
            </table>

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return m`
<thermal-dropdown>
    <span slot="invoker">${_(P[`by${this.by}`])}</span>
    ${r.map(e=>m`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${_(P[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return E;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=m`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${e.name}</span>

                ${t.map(n=>m`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                    <thermal-button>${n.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`,s=t.map((n,a)=>m`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                <span class="button-inline-icon">+</span> ${n.name}
            </thermal-button> ${a!==t.length-1?` ${_(P.or)} `:E}`);r=m`${_(P.showingfolder)} ${i}. 
            
            ${t.length>0?m` ${_(P.doyouwanttoadd)} ${s}?`:E}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=m`

                ${_(P.showingfolders)}
                ${e.map((i,s)=>m`<thermal-button 
                    title="${_(P.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${_(P.and)} `:E}`)}
                ${_(P.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?m`${_(P.youmayalsoadd)} ${t.map((i,s)=>m`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${_(P.or)} `:E}
                `)}.`:E}

            `}return r===void 0?E:m`<div class="info">
            ${r}
        </div>`}renderBrowser(){const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return m`

        <nav class="info-sticky-content">

            <div class="info-sticky-content-wrapper">

                ${this.enablegrouping?this.renderInfo():E}
                <registry-histogram expandable="true"></registry-histogram>
                <registry-range-slider></registry-range-slider>
                <registry-ticks-bar></registry-ticks-bar>

            </div>
            ${this.state===2?m`<table class="affected">
                <thead>
                    <tr>
                        ${r.map(e=>m`<th>
                            <div class="cell-header">
                                ${e.name}
                            </div>
                        </th>`)}
                    </tr>
                </thead>
            </table>`:E}

        </nav>

        

        <section>
            ${this.state===1?this.renderOne():E}
            ${this.state===2?this.renderMultiple():E}
        </section>
        
`}renderApp(){return this.info===void 0?this.renderLoading("Načítám základní informaci"):this.state===0?this.renderMainScreen():this.renderBrowser()}render(){var e;const r=this.loadingInfo===!0?_(P.loading)+"...":this.label&&this.label.trim().length>0?this.label:_(P.remotefoldersbrowser);return m`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${ve(this.registryRef)}>

        <thermal-app author="${de(this.author)}" license="${de(this.license)}">

            <thermal-button variant="${this.state===0?"foreground":"default"}" slot="bar" @click=${this.actionCloseToHomepage.bind(this)}>${r}</thermal-button>

            <header class="screen-browser-header" slot="bar">

            <thermal-bar>

                ${this.state!==0?m`<thermal-button 
                        @click=${this.actionCloseToHomepage.bind(this)}
                        variant="foreground"
                    >
                    ${_(P.close)}
                </thermal-button>

                ${this.state===1&&this.enablegrouping===!1?m`
                <thermal-dropdown variant="background" class="selector">

                    <span slot="invoker">${this.folders[this.only[0]].name}</span>

                    ${Object.values(this.folders).filter(t=>!this.only.includes(t.folder)).map(t=>m`<div slot="option" @click=${()=>this.actionOpenOneFolder(t.folder)}>
                    <thermal-button>${t.name}</thermal-button>
                    </div>`)}

                </thermal-dropdown>`:E}

                <registry-palette-dropdown></registry-palette-dropdown>
                <registry-range-full-button></registry-range-full-button>
                <group-tool-buttons showhint="false"></group-tool-buttons>
                <thermal-dialog label="${_(P.info)}">
                    <thermal-button slot="invoker">${_(P.info)}</thermal-button>
                    <div slot="content">

                        <ul class="tree">
                            <li>${(e=this.info)==null?void 0:e.url_host}</li>
                            <ul>

                                ${this.state===1&&this.dataOnly!==void 0?m`<li>/${this.only[0]}/
                                        <ul>
                                            ${this.dataOnly.files.map(t=>m`<li>${t.file_name}</li>`)}
                                        </ul>
                                    </li>`:E}

                                ${this.state===2&&this.dataMultiple!==void 0?m`
                                        ${Object.values(this.dataMultiple.data).map(t=>m`<li>${t}</li>`)}
                                    `:E}
                                
                            </ul>
                        </ul>   
                    
                    </div>
                </thermal-dialog>
                ${this.state===1&&this.dataOnly!==void 0?m`<group-provider slug="${this.dataOnly.info.folder}">
                        <group-download-dropdown></group-download-dropdown>
                    </group-provider>`:E}
                <registry-opacity-slider></registry-opacity-slider>
                `:E}
            
            </thermal-bar>
        
        </header>
        
            <div class=${Vt({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2})}>
                ${this.renderApp()}
            </div>

        </thermal-app>

    </registry-provider>
</manager-provider>
        
        `}};bt.styles=ge`

:host {
    font-size: var(--thermal-fs);
    line-height: 1em;

    --table-gap: calc( var( --thermal-gap ) * .8 );
    --table-gap-sm: calc( var( --thermal-gap ) * .4 );

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
    display: flex;
    gap: var(--thermal-gap);
    flex-wrap: wrap;

    > button {

        background: red;
        padding: var(--thermal-gap);

        border-radius: var(--thermal-radius);
        border: 1px solid var( --thermal-slate );

        background: var(--thermal-slate-light);
        color: var(--thermal-foreground);

        cursor: pointer;
        flex-grow: 1;

        transition: all .2s ease-in-out;

        &:hover,
        &:focus {
            background: var(--thermal-slate-light);
            box-shadow: var(--thermal-shadow);
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
        display: flex;
        flex-wrap: wrap;

        > div {
            width: 25%;
            box-sizing: border-box;
            padding: calc(var(--thermal-gap) * .5);
        }
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
                flex-grow: 1;
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

    .info-sticky-content-wrapper {
        box-shadow: 0px 40px 20px var(--thermal-slate-light);
    }
    

}

article.file {

    width: 100%;
    box-sizing: border-box;

    header {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding-bottom: 5px;
        color: var(--thermal-foreground);

        h2 {
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            text-size: var(--thermal-fs-sm);

            span {
                white-space: nowrap;
            }
        }

        div {
            display: flex;
            flex-wrap: nowrap;
            gap: 5px;
        }
    }

}

.info-sticky-content {
    position: sticky;
    top: 0px;
    z-index: 12;
    color: var(--thermal-foreground);
    
}

.info-sticky-content-wrapper {
    background: var(--thermal-slate-light);
    padding-bottom: var(--thermal-gap);
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


.tree {
    .item {
        padding-left: var(--thermal-gap);
        &::before {
            content: "";
            background: red;
        }
    }
}
    
    `;Et([g({type:String,reflect:!0})],bt.prototype,"label",2);Et([g({type:String,reflect:!0})],bt.prototype,"license",2);Et([g({type:String,reflect:!0})],bt.prototype,"author",2);Et([g({type:String,reflect:!0,attribute:!0})],bt.prototype,"palette",2);Et([g({type:Boolean,reflect:!0,converter:lt(!0)})],bt.prototype,"enablegrouping",2);Et([g({type:String,reflect:!0})],bt.prototype,"url",2);Et([g({type:String,reflect:!0})],bt.prototype,"subfolder",2);Et([C()],bt.prototype,"info",2);Et([C()],bt.prototype,"error",2);Et([C()],bt.prototype,"loadingInfo",2);Et([C()],bt.prototype,"loadingData",2);Et([C()],bt.prototype,"only",2);Et([C()],bt.prototype,"state",2);Et([C()],bt.prototype,"by",2);Et([C()],bt.prototype,"dataOnly",2);Et([C()],bt.prototype,"dataMultiple",2);Et([C()],bt.prototype,"folders",2);Et([ce({context:Xi})],bt.prototype,"interactiveAnalysis",2);bt=Et([te("remote-browser-app")],bt);var ax=Object.defineProperty,ox=Object.getOwnPropertyDescriptor,Ar=(r,e,t,i)=>{for(var s=i>1?void 0:i?ox(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ax(e,t,s),s};let sr=class extends ft{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=pe(),this.palette="jet"}connectedCallback(){super.connectedCallback()}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((d,p)=>d[0]<p[0]?-1:1);const u=Object.fromEntries(h);return[o,u]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?ke(r,"d. M.yyyy - mm:ss"):this.by==="days"?ke(r,"d. M. yyyy"):this.by==="weeks"?ke(r,"I")+" roku "+ke(r,"yyyy"):this.by==="months"?ke(r,"M"):this.by==="years"?ke(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?ke(r,"h:mm:ss"):this.by==="days"?ke(r,"H:mm:ss"):this.by==="weeks"?ke(r,"I")+" roku "+ke(r,"yyyy"):this.by==="months"?ke(r,"M"):this.by==="years"?ke(r,"yyyy"):r.toString()}renderFile(r){return m`
            <file-provider
                batch="true"
                thermal="${r.lrc}"
                visible="${de(r.png)}"
            >

                <article class="file">

                    <header>

                        <h4>${this.getItemLabel(r.timestamp*1e3)}</h4>

                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${_(P.info).toLowerCase()}"></file-button>
                        </file-info-button>

                    </header>

                    <main>

                        <file-canvas></file-canvas>

                        <file-analysis-table></file-analysis-table>

                    </main>

                </article>

            </file-provider>
        `}renderGrid(r){const e=Object.values(Object.values(r.data)[0]).map(s=>s.name),t=e.length,i=100/e.length+"%";return m`


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

                        <group-tool-buttons></group-tool-buttons>
                    
                    </td>
                </tr>


                <tr id="folders" class="sticky" style="top: ${this.heightRange}px;">
                    ${Object.values(Object.values(r.data)[0]).map(s=>m`<td>
                            <div class="cell-folder-header">
                                <h1>${s.name}</h1>
                            </div>
                    </td>`)}
                </tr>
            
                ${Object.entries(r.data).map(([s,n])=>{const a=Object.keys(n).length;return m`

                        <tr><td class="separator"></td></tr>

                        <tr class="group-header">
                            <td colspan="${a}">
                                <div class="cell-divider">
                                    <group-provider slug=${de(s)}>
                                        <h2>${this.getGroupLabel(parseInt(s)*1e3)}</h2>
                                        
                                        <group-download-dropdown></group-download-dropdown>

                                        <group-range-propagator>
                                            <thermal-button class="default">Rozsah skupiny</thermal-button>
                                        </group-range-propagator>

                                        <registry-range-full-button></registry-range-full-button>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>

                        <group-provider class="group-files" slug=${de(s)}>
                            ${Object.values(n).map(o=>m`<td style="width: ${i};">
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):E}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?_(P.loading)+"":this.label??"Remote folder";return m`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${ve(this.registryRef)}>
            
                            <thermal-app
                                author=${de(this.author)}
                                license=${de(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):E}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};sr.styles=ge`
    
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
    
    `;Ar([g({type:String,reflect:!0})],sr.prototype,"url",2);Ar([g({type:String,reflect:!0})],sr.prototype,"subfolder",2);Ar([g({type:String,reflect:!0})],sr.prototype,"by",2);Ar([C()],sr.prototype,"loading",2);Ar([g({type:String,reflect:!0})],sr.prototype,"license",2);Ar([g({type:String,reflect:!0})],sr.prototype,"label",2);Ar([g({type:String,reflect:!0})],sr.prototype,"author",2);Ar([C()],sr.prototype,"data",2);Ar([C()],sr.prototype,"heightRange",2);Ar([C()],sr.prototype,"heightFolders",2);Ar([g({type:String,reflect:!0,attribute:!0})],sr.prototype,"palette",2);sr=Ar([te("remote-grid-app")],sr);const ko=window.matchMedia("(prefers-color-scheme: dark)"),Ol="thermal-dark-mode",lc=()=>{document.body.classList.add(Ol)},lx=()=>{document.body.classList.remove(Ol)},hx=()=>{ko.matches&&lc();const r=e=>{e.matches?lc():lx()};ko.addEventListener("change",r),ko.addListener(r)},cx=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)},ux=Bo.toString().replaceAll(".","-"),dx=r=>`thermal__${r}__${ux}`,hc=(r,e)=>{const t=document.createElement("style");t.setAttribute("id",dx(r)),t.innerHTML=e,document.head.appendChild(t)},px=()=>{hc("rootVariables",`

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


            
        
        `),hc("darkModeOverrides",`
        
            body.${Ol} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};cx();console.info(`@labir/embed ${Bo}
Author: ${vd}`);hx();px();
