var sf=Object.defineProperty;var nf=(r,e,t)=>e in r?sf(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(nf(r,typeof e!="symbol"?e+"":e,t),t);const zd="1.2.66",af="Jan Jáchim <jachim5@gmail.com>",Oe=r=>typeof r=="string",yn=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},_c=r=>r==null?"":""+r,of=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},lf=/###/g,Cc=r=>r&&r.indexOf("###")>-1?r.replace(lf,"."):r,kc=r=>!r||Oe(r),Sn=(r,e,t)=>{const i=Oe(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(kc(r))return{};const n=Cc(i[s]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++s}return kc(r)?{}:{obj:r,k:Cc(i[s])}},Pc=(r,e,t)=>{const{obj:i,k:s}=Sn(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let n=e[e.length-1],a=e.slice(0,e.length-1),o=Sn(r,a,Object);for(;o.obj===void 0&&a.length;)n=`${a[a.length-1]}.${n}`,a=a.slice(0,a.length-1),o=Sn(r,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${n}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${n}`]=t},hf=(r,e,t,i)=>{const{obj:s,k:n}=Sn(r,e,Object);s[n]=s[n]||[],s[n].push(t)},za=(r,e)=>{const{obj:t,k:i}=Sn(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},cf=(r,e,t)=>{const i=za(r,t);return i!==void 0?i:za(e,t)},Fd=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?Oe(r[i])||r[i]instanceof String||Oe(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):Fd(r[i],e[i],t):r[i]=e[i]);return r},Is=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var df={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const uf=r=>Oe(r)?r.replace(/[&<>"'\/]/g,e=>df[e]):r;class pf{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const ff=[" ",",","?","!",";"],gf=new pf(20),mf=(r,e,t)=>{e=e||"",t=t||"";const i=ff.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(i.length===0)return!0;const s=gf.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let n=!s.test(r);if(!n){const a=r.indexOf(t);a>0&&!s.test(r.substring(0,a))&&(n=!0)}return n},Ul=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let s=r;for(let n=0;n<i.length;){if(!s||typeof s!="object")return;let a,o="";for(let l=n;l<i.length;++l)if(l!==n&&(o+=t),o+=i[l],a=s[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;n+=l-n+1;break}s=a}return s},Fa=r=>r==null?void 0:r.replace("_","-"),vf={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class ja{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||vf,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(Oe(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ja(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ja(this.logger,e)}}var li=new ja;class po{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[o,l]=a;for(let h=0;h<l;h++)o.apply(o,[e,...i])})}}class Oc extends po{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){var h,f;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,a=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],i&&(Array.isArray(i)?o.push(...i):Oe(i)&&n?o.push(...i.split(n)):o.push(i)));const l=za(this.data,o);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=o[0],t=o[1],i=o.slice(2).join(".")),l||!a||!Oe(i)?l:Ul((f=(h=this.data)==null?void 0:h[e])==null?void 0:f[t],i,n)}addResource(e,t,i,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=[e,t];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),s=t,t=o[1]),this.addNamespaces(t),Pc(this.data,o,s),n.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const n in i)(Oe(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,n){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),s=i,i=t,t=o[1]),this.addNamespaces(t);let l=za(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Fd(l,i,n):l={...l,...i},Pc(this.data,o,l),a.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var jd={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(n=>{var a;e=((a=this.processors[n])==null?void 0:a.process(e,t,i,s))??e}),e}};const Ac={},Ec=r=>!Oe(r)&&typeof r!="boolean"&&typeof r!="number";class Na extends po{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),of(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=li.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!mf(e,i,s);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:Oe(n)?[n]:n};const h=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(h[0])>-1)&&(n=h.shift()),e=h.join(s)}return{key:e,namespaces:Oe(n)?[n]:n}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:a,namespaces:o}=this.extractFromKey(e[e.length-1],t),l=o[o.length-1],h=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(f){const F=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${F}${a}`,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${F}${a}`}return s?{res:a,usedKey:a,exactUsedKey:a,usedLng:h,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:a}const p=this.resolve(e,t);let g=p==null?void 0:p.res;const S=(p==null?void 0:p.usedKey)||a,$=(p==null?void 0:p.exactUsedKey)||a,O=["[object Number]","[object Function]","[object RegExp]"],P=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,Y=!this.i18nFormat||this.i18nFormat.handleAsObject,A=t.count!==void 0&&!Oe(t.count),D=Na.hasDefaultValue(t),X=A?this.pluralResolver.getSuffix(h,t.count,t):"",W=t.ordinal&&A?this.pluralResolver.getSuffix(h,t.count,{ordinal:!1}):"",se=A&&!t.ordinal&&t.count===0,k=se&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${X}`]||t[`defaultValue${W}`]||t.defaultValue;let L=g;Y&&!g&&D&&(L=k);const T=Ec(L),M=Object.prototype.toString.apply(L);if(Y&&L&&T&&O.indexOf(M)<0&&!(Oe(P)&&Array.isArray(L))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,L,{...t,ns:o}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(p.res=F,p.usedParams=this.getUsedParamsDetails(t),p):F}if(n){const F=Array.isArray(L),I=F?[]:{},z=F?$:S;for(const R in L)if(Object.prototype.hasOwnProperty.call(L,R)){const K=`${z}${n}${R}`;D&&!g?I[R]=this.translate(K,{...t,defaultValue:Ec(k)?k[R]:void 0,joinArrays:!1,ns:o}):I[R]=this.translate(K,{...t,joinArrays:!1,ns:o}),I[R]===K&&(I[R]=L[R])}g=I}}else if(Y&&Oe(P)&&Array.isArray(g))g=g.join(P),g&&(g=this.extendTranslation(g,e,t,i));else{let F=!1,I=!1;!this.isValidLookup(g)&&D&&(F=!0,g=k),this.isValidLookup(g)||(I=!0,g=a);const R=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&I?void 0:g,K=D&&k!==g&&this.options.updateMissing;if(I||F||K){if(this.logger.log(K?"updateKey":"missingKey",h,l,a,K?k:g),n){const fe=this.resolve(a,{...t,keySeparator:!1});fe&&fe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let he=[];const C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&C&&C[0])for(let fe=0;fe<C.length;fe++)he.push(C[fe]);else this.options.saveMissingTo==="all"?he=this.languageUtils.toResolveHierarchy(t.lng||this.language):he.push(t.lng||this.language);const B=(fe,ae,Ee)=>{var it;const Ye=D&&Ee!==g?Ee:R;this.options.missingKeyHandler?this.options.missingKeyHandler(fe,l,ae,Ye,K,t):(it=this.backendConnector)!=null&&it.saveMissing&&this.backendConnector.saveMissing(fe,l,ae,Ye,K,t),this.emit("missingKey",fe,l,ae,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?he.forEach(fe=>{const ae=this.pluralResolver.getSuffixes(fe,t);se&&t[`defaultValue${this.options.pluralSeparator}zero`]&&ae.indexOf(`${this.options.pluralSeparator}zero`)<0&&ae.push(`${this.options.pluralSeparator}zero`),ae.forEach(Ee=>{B([fe],a+Ee,t[`defaultValue${Ee}`]||k)})}):B(he,a,k))}g=this.extendTranslation(g,e,t,p,i),I&&g===a&&this.options.appendNamespaceToMissingKey&&(g=`${l}:${a}`),(I||F)&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,F?g:void 0))}return s?(p.res=g,p.usedParams=this.getUsedParamsDetails(t),p):g}extendTranslation(e,t,i,s,n){var h,f;var a=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=Oe(e)&&(((f=i==null?void 0:i.interpolation)==null?void 0:f.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(p){const $=e.match(this.interpolator.nestingRegexp);g=$&&$.length}let S=i.replace&&!Oe(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),e=this.interpolator.interpolate(e,S,i.lng||this.language||s.usedLng,i),p){const $=e.match(this.interpolator.nestingRegexp),O=$&&$.length;g<O&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var $=arguments.length,O=new Array($),P=0;P<$;P++)O[P]=arguments[P];return(n==null?void 0:n[0])===O[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${t[0]}`),null):a.translate(...O,t)},i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,l=Oe(o)?[o]:o;return e!=null&&(l!=null&&l.length)&&i.applyPostProcessor!==!1&&(e=jd.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,n,a,o;return Oe(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(l,t),f=h.key;s=f;let p=h.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const g=t.count!==void 0&&!Oe(t.count),S=g&&!t.ordinal&&t.count===0,$=t.context!==void 0&&(Oe(t.context)||typeof t.context=="number")&&t.context!=="",O=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(P=>{var Y,A;this.isValidLookup(i)||(o=P,!Ac[`${O[0]}-${P}`]&&((Y=this.utils)!=null&&Y.hasLoadedNamespace)&&!((A=this.utils)!=null&&A.hasLoadedNamespace(o))&&(Ac[`${O[0]}-${P}`]=!0,this.logger.warn(`key "${s}" for languages "${O.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),O.forEach(D=>{var se;if(this.isValidLookup(i))return;a=D;const X=[f];if((se=this.i18nFormat)!=null&&se.addLookupKeys)this.i18nFormat.addLookupKeys(X,f,D,P,t);else{let k;g&&(k=this.pluralResolver.getSuffix(D,t.count,t));const L=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(g&&(X.push(f+k),t.ordinal&&k.indexOf(T)===0&&X.push(f+k.replace(T,this.options.pluralSeparator)),S&&X.push(f+L)),$){const M=`${f}${this.options.contextSeparator}${t.context}`;X.push(M),g&&(X.push(M+k),t.ordinal&&k.indexOf(T)===0&&X.push(M+k.replace(T,this.options.pluralSeparator)),S&&X.push(M+L))}}let W;for(;W=X.pop();)this.isValidLookup(i)||(n=W,i=this.getResource(D,P,W,t))}))})}),{res:i,usedKey:s,exactUsedKey:n,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){var n;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Oe(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const n of t)delete s[n]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class Dc{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=li.create("languageUtils")}getScriptPartFromCode(e){if(e=Fa(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Fa(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Oe(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>{if(n===s)return n;if(!(n.indexOf("-")<0&&s.indexOf("-")<0)&&(n.indexOf("-")>0&&s.indexOf("-")<0&&n.substring(0,n.indexOf("-"))===s||n.indexOf(s)===0&&s.length>1))return n})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Oe(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],n=a=>{a&&(this.isSupportedCode(a)?s.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Oe(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):Oe(e)&&n(this.formatLanguageCode(e)),i.forEach(a=>{s.indexOf(a)<0&&n(this.formatLanguageCode(a))}),s}}const Lc={zero:0,one:1,two:2,few:3,many:4,other:5},Rc={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class yf{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=li.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Fa(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let a;try{a=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Rc;if(!e.match(/-|_/))return Rc;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,t)}return this.pluralRulesCache[n]=a,a}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,n)=>Lc[s]-Lc[n]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Tc=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,n=cf(r,e,t);return!n&&s&&Oe(t)&&(n=Ul(r,t,i),n===void 0&&(n=Ul(e,t,i))),n},$l=r=>r.replace(/\$/g,"$$$$");class bf{constructor(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=li.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:h,unescapeSuffix:f,unescapePrefix:p,nestingPrefix:g,nestingPrefixEscaped:S,nestingSuffix:$,nestingSuffixEscaped:O,nestingOptionsSeparator:P,maxReplaces:Y,alwaysFormat:A}=e.interpolation;this.escape=t!==void 0?t:uf,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=n?Is(n):a||"{{",this.suffix=o?Is(o):l||"}}",this.formatSeparator=h||",",this.unescapePrefix=f?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":f||"",this.nestingPrefix=g?Is(g):S||Is("$t("),this.nestingSuffix=$?Is($):O||Is(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=Y||1e3,this.alwaysFormat=A!==void 0?A:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){var S;let n,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=$=>{if($.indexOf(this.formatSeparator)<0){const A=Tc(t,l,$,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...s,...t,interpolationkey:$}):A}const O=$.split(this.formatSeparator),P=O.shift().trim(),Y=O.join(this.formatSeparator).trim();return this.format(Tc(t,l,P,this.options.keySeparator,this.options.ignoreJSONStructure),Y,i,{...s,...t,interpolationkey:P})};this.resetRegExp();const f=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=((S=s==null?void 0:s.interpolation)==null?void 0:S.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:$=>$l($)},{regex:this.regexp,safeValue:$=>this.escapeValue?$l(this.escape($)):$l($)}].forEach($=>{for(o=0;n=$.regex.exec(e);){const O=n[1].trim();if(a=h(O),a===void 0)if(typeof f=="function"){const Y=f(e,n,s);a=Oe(Y)?Y:""}else if(s&&Object.prototype.hasOwnProperty.call(s,O))a="";else if(p){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${O} for interpolating ${e}`),a="";else!Oe(a)&&!this.useRawValueToEscape&&(a=_c(a));const P=$.safeValue(a);if(e=e.replace(n[0],P),p?($.regex.lastIndex+=a.length,$.regex.lastIndex-=n[0].length):$.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,n,a;const o=(l,h)=>{const f=this.nestingOptionsSeparator;if(l.indexOf(f)<0)return l;const p=l.split(new RegExp(`${f}[ ]*{`));let g=`{${p[1]}`;l=p[0],g=this.interpolate(g,a);const S=g.match(/'/g),$=g.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!$||$.length%2!==0)&&(g=g.replace(/'/g,'"'));try{a=JSON.parse(g),h&&(a={...h,...a})}catch(O){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,O),`${l}${f}${g}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!Oe(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const f=s[1].split(this.formatSeparator).map(p=>p.trim());s[1]=f.shift(),l=f,h=!0}if(n=t(o.call(this,s[1].trim(),a),a),n&&s[0]===e&&!Oe(n))return n;Oe(n)||(n=_c(n)),n||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),n=""),h&&(n=l.reduce((f,p)=>this.format(f,p,i.lng,{...i,interpolationkey:s[1].trim()}),n.trim())),e=e.replace(s[0],n),this.regexp.lastIndex=0}return e}}const wf=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),h=l.join(":").trim().replace(/^'+|'+$/g,""),f=o.trim();t[f]||(t[f]=h),h==="false"&&(t[f]=!1),h==="true"&&(t[f]=!0),isNaN(h)||(t[f]=parseInt(h,10))}})}return{formatName:e,formatOptions:t}},Us=r=>{const e={};return(t,i,s)=>{let n=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(n={...n,[s.interpolationkey]:void 0});const a=i+JSON.stringify(n);let o=e[a];return o||(o=r(Fa(i),s),e[a]=o),o(t)}};class xf{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=li.create("formatter"),this.options=e,this.formats={number:Us((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return n=>s.format(n)}),currency:Us((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return n=>s.format(n)}),datetime:Us((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return n=>s.format(n)}),relativetime:Us((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return n=>s.format(n,i.range||"day")}),list:Us((t,i)=>{const s=new Intl.ListFormat(t,{...i});return n=>s.format(n)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Us(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find(o=>o.indexOf(")")>-1)){const o=n.findIndex(l=>l.indexOf(")")>-1);n[0]=[n[0],...n.splice(1,o)].join(this.formatSeparator)}return n.reduce((o,l)=>{var p;const{formatName:h,formatOptions:f}=wf(l);if(this.formats[h]){let g=o;try{const S=((p=s==null?void 0:s.formatParams)==null?void 0:p[s.interpolationkey])||{},$=S.locale||S.lng||s.locale||s.lng||i;g=this.formats[h](o,$,{...f,...s,...S})}catch(S){this.logger.warn(S)}return g}else this.logger.warn(`there was no format function for ${h}`);return o},e)}}const Sf=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class $f extends po{constructor(e,t,i){var n,a;let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=li.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(a=(n=this.backend)==null?void 0:n.init)==null||a.call(n,i,s.backend,s)}queueLoad(e,t,i,s){const n={},a={},o={},l={};return e.forEach(h=>{let f=!0;t.forEach(p=>{const g=`${h}|${p}`;!i.reload&&this.store.hasResourceBundle(h,p)?this.state[g]=2:this.state[g]<0||(this.state[g]===1?a[g]===void 0&&(a[g]=!0):(this.state[g]=1,f=!1,a[g]===void 0&&(a[g]=!0),n[g]===void 0&&(n[g]=!0),l[p]===void 0&&(l[p]=!0)))}),f||(o[h]=!0)}),(Object.keys(n).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),n=s[0],a=s[1];t&&this.emit("failedLoading",n,a,t),!t&&i&&this.store.addResourceBundle(n,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{hf(l.loaded,[n],a),Sf(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(h=>{o[h]||(o[h]={});const f=l.loaded[h];f.length&&f.forEach(p=>{o[h][p]===void 0&&(o[h][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:n,callback:a});return}this.readingCalls++;const o=(h,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(h&&f&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,n*2,a)},n);return}a(h,f)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const h=l(e,t);h&&typeof h.then=="function"?h.then(f=>o(null,f)).catch(o):o(null,h)}catch(h){o(h)}return}return l(e,t,o)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Oe(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Oe(t)&&(t=[t]);const n=this.queueLoad(e,t,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${n} for language ${s} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${n} for language ${s}`,o),this.loaded(e,a,o)})}saveMissing(e,t,i,s,n){var l,h,f,p,g;let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(l=this.services)==null?void 0:l.utils)!=null&&h.hasLoadedNamespace&&!((p=(f=this.services)==null?void 0:f.utils)!=null&&p.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((g=this.backend)!=null&&g.create){const S={...a,isUpdate:n},$=this.backend.create.bind(this.backend);if($.length<6)try{let O;$.length===5?O=$(e,t,i,s,S):O=$(e,t,i,s),O&&typeof O.then=="function"?O.then(P=>o(null,P)).catch(o):o(null,O)}catch(O){o(O)}else $(e,t,i,s,o,S)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const Mc=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),Oe(r[1])&&(e.defaultValue=r[1]),Oe(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ic=r=>{var e,t;return Oe(r.ns)&&(r.ns=[r.ns]),Oe(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),Oe(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),((t=(e=r.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),typeof r.initImmediate=="boolean"&&(r.initAsync=r.initImmediate),r},Ca=()=>{},_f=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Pn extends po{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ic(e),this.services={},this.logger=li,this.modules={external:[]},_f(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),t.defaultNS==null&&t.ns&&(Oe(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=Mc();this.options={...s,...this.options,...Ic(t)},this.options.interpolation={...s.interpolation,...this.options.interpolation},t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const n=f=>f?typeof f=="function"?new f:f:null;if(!this.options.isClone){this.modules.logger?li.init(n(this.modules.logger),this.options):li.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:f=xf;const p=new Dc(this.options);this.store=new Oc(this.options.resources,this.options);const g=this.services;g.logger=li,g.resourceStore=this.store,g.languageUtils=p,g.pluralResolver=new yf(p,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(g.formatter=n(f),g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new bf(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new $f(n(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",function(S){for(var $=arguments.length,O=new Array($>1?$-1:0),P=1;P<$;P++)O[P-1]=arguments[P];e.emit(S,...O)}),this.modules.languageDetector&&(g.languageDetector=n(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=n(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new Na(this.services,this.options),this.translator.on("*",function(S){for(var $=arguments.length,O=new Array($>1?$-1:0),P=1;P<$;P++)O[P-1]=arguments[P];e.emit(S,...O)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Ca),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return e.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return e.store[f](...arguments),e}});const l=yn(),h=()=>{const f=(p,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(g),i(p,g)};if(this.languages&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),l}loadResources(e){var n,a;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ca;const s=Oe(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((s==null?void 0:s.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(p=>{p!=="cimode"&&o.indexOf(p)<0&&o.push(p)})};s?l(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(f=>l(f)),(a=(n=this.options.preload)==null?void 0:n.forEach)==null||a.call(n,h=>l(h)),this.services.backendConnector.load(o,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,t,i){const s=yn();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Ca),this.services.backendConnector.reload(e,t,n=>{s.resolve(),i(n)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&jd.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=yn();this.emit("languageChanging",e);const n=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,h)=>{h?(n(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},o=l=>{var f,p;!e&&!l&&this.services.languageDetector&&(l=[]);const h=Oe(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);h&&(this.language||n(h),this.translator.language||this.translator.changeLanguage(h),(p=(f=this.services.languageDetector)==null?void 0:f.cacheUserLanguage)==null||p.call(f,h)),this.loadResources(h,g=>{a(g,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),s}getFixedT(e,t,i){var s=this;const n=function(a,o){let l;if(typeof o!="object"){for(var h=arguments.length,f=new Array(h>2?h-2:0),p=2;p<h;p++)f[p-2]=arguments[p];l=s.options.overloadTranslationOptionHandler([a,o].concat(f))}else l={...o};l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||n.keyPrefix);const g=s.options.keySeparator||".";let S;return l.keyPrefix&&Array.isArray(a)?S=a.map($=>`${l.keyPrefix}${g}${$}`):S=l.keyPrefix?`${l.keyPrefix}${g}${a}`:a,s.t(S,l)};return Oe(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.translate(...t)}exists(){var s;for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(s=this.translator)==null?void 0:s.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const h=this.services.backendConnector.state[`${o}|${l}`];return h===-1||h===0||h===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!s||a(n,e)))}loadNamespaces(e,t){const i=yn();return this.options.ns?(Oe(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=yn();Oe(e)&&(e=[e]);const s=this.options.preload||[],n=e.filter(a=>s.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return n.length?(this.options.preload=s.concat(n),this.loadResources(a=>{i.resolve(),t&&t(a)}),i):(t&&t(),Promise.resolve())}dir(e){var s,n;if(e||(e=this.resolvedLanguage||(((s=this.languages)==null?void 0:s.length)>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new Dc(Mc());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Pn(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ca;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},n=new Pn(s);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(o=>{n[o]=this[o]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const o=Object.keys(this.store.data).reduce((l,h)=>(l[h]={...this.store.data[h]},Object.keys(l[h]).reduce((f,p)=>(f[p]={...l[h][p]},f),{})),{});n.store=new Oc(o,s),n.services.resourceStore=n.store}return n.translator=new Na(n.services,s),n.translator.on("*",function(o){for(var l=arguments.length,h=new Array(l>1?l-1:0),f=1;f<l;f++)h[f-1]=arguments[f];n.emit(o,...h)}),n.init(s,t),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const vt=Pn.createInstance();vt.createInstance=Pn.createInstance;vt.createInstance;vt.dir;vt.init;vt.loadResources;vt.reloadResources;vt.use;vt.changeLanguage;vt.getFixedT;const x=vt.t;vt.exists;vt.setDefaultNamespace;vt.hasLoadedNamespace;vt.loadNamespaces;vt.loadLanguages;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=globalThis,Wa=$n.trustedTypes,Uc=Wa?Wa.createPolicy("lit-html",{createHTML:r=>r}):void 0,Nd="$lit$",Ki=`lit$${Math.random().toFixed(9).slice(2)}$`,Wd="?"+Ki,Cf=`<${Wd}>`,xs=document,On=()=>xs.createComment(""),An=r=>r===null||typeof r!="object"&&typeof r!="function",oh=Array.isArray,kf=r=>oh(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",_l=`[ 	
\f\r]`,bn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zc=/-->/g,Fc=/>/g,gs=RegExp(`>|${_l}(?:([^\\s"'>=/]+)(${_l}*=${_l}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jc=/'/g,Nc=/"/g,Hd=/^(?:script|style|textarea|title)$/i,Pf=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=Pf(1),es=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Wc=new WeakMap,bs=xs.createTreeWalker(xs,129);function Bd(r,e){if(!oh(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Uc!==void 0?Uc.createHTML(e):e}const Of=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",a=bn;for(let o=0;o<t;o++){const l=r[o];let h,f,p=-1,g=0;for(;g<l.length&&(a.lastIndex=g,f=a.exec(l),f!==null);)g=a.lastIndex,a===bn?f[1]==="!--"?a=zc:f[1]!==void 0?a=Fc:f[2]!==void 0?(Hd.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=gs):f[3]!==void 0&&(a=gs):a===gs?f[0]===">"?(a=s??bn,p=-1):f[1]===void 0?p=-2:(p=a.lastIndex-f[2].length,h=f[1],a=f[3]===void 0?gs:f[3]==='"'?Nc:jc):a===Nc||a===jc?a=gs:a===zc||a===Fc?a=bn:(a=gs,s=void 0);const S=a===gs&&r[o+1].startsWith("/>")?" ":"";n+=a===bn?l+Cf:p>=0?(i.push(h),l.slice(0,p)+Nd+l.slice(p)+Ki+S):l+Ki+(p===-2?o:S)}return[Bd(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let zl=class Gd{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[h,f]=Of(e,t);if(this.el=Gd.createElement(h,i),bs.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=bs.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Nd)){const g=f[a++],S=s.getAttribute(p).split(Ki),$=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:$[2],strings:S,ctor:$[1]==="."?Ef:$[1]==="?"?Df:$[1]==="@"?Lf:fo}),s.removeAttribute(p)}else p.startsWith(Ki)&&(l.push({type:6,index:n}),s.removeAttribute(p));if(Hd.test(s.tagName)){const p=s.textContent.split(Ki),g=p.length-1;if(g>0){s.textContent=Wa?Wa.emptyScript:"";for(let S=0;S<g;S++)s.append(p[S],On()),bs.nextNode(),l.push({type:2,index:++n});s.append(p[g],On())}}}else if(s.nodeType===8)if(s.data===Wd)l.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(Ki,p+1))!==-1;)l.push({type:7,index:n}),p+=Ki.length-1}n++}}static createElement(e,t){const i=xs.createElement("template");return i.innerHTML=e,i}};function Bs(r,e,t=r,i){var a,o;if(e===es)return e;let s=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const n=An(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=Bs(r,s._$AS(r,e.values),s,i)),e}let Af=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??xs).importNode(t,!0);bs.currentNode=s;let n=bs.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new lh(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Rf(n,this,e)),this._$AV.push(h),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=bs.nextNode(),a++)}return bs.currentNode=xs,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},lh=class Vd{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Bs(this,e,t),An(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==es&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):kf(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&An(this._$AH)?this._$AA.nextSibling.data=e:this.T(xs.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=zl.createElement(Bd(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const a=new Af(s,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Wc.get(e.strings);return t===void 0&&Wc.set(e.strings,t=new zl(e)),t}k(e){oh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Vd(this.O(On()),this.O(On()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}};class fo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Bs(this,e,t,0),a=!An(e)||e!==this._$AH&&e!==es,a&&(this._$AH=e);else{const o=e;let l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Bs(this,o[i+l],t,l),h===es&&(h=this._$AH[l]),a||(a=!An(h)||h!==this._$AH[l]),h===_?e=_:e!==_&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ef extends fo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class Df extends fo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}let Lf=class extends fo{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Bs(this,e,t,0)??_)===es)return;const i=this._$AH,s=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Rf=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Bs(this,e)}};const Cl=$n.litHtmlPolyfillSupport;Cl==null||Cl(zl,lh),($n.litHtmlVersions??($n.litHtmlVersions=[])).push("3.2.1");const Tf=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new lh(e.insertBefore(On(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mf=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},go=r=>(...e)=>({_$litDirective$:r,values:e});let hh=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),_n(s,e);return!0},Ha=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},Yd=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),zf(e)}};function If(r){this._$AN!==void 0?(Ha(this),this._$AM=r,Yd(this)):this._$AM=r}function Uf(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=t;n<i.length;n++)_n(i[n],!1),Ha(i[n]);else i!=null&&(_n(i,!1),Ha(i));else _n(this,r)}const zf=r=>{r.type==ki.CHILD&&(r._$AP??(r._$AP=Uf),r._$AQ??(r._$AQ=If))};let Ff=class extends hh{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Yd(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(_n(this,e),Ha(this))}setValue(e){if(Mf(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Hc=null,qd=()=>{};new Promise(r=>{qd=r});const jf={type:"3rdParty",init(r){Nf(r)}},Nf=r=>{Hc=r,qd(Hc)},Bc=new Map,Wf=()=>{Bc.forEach((r,e)=>{(e.isConnected===!1||Hf(e)===!1)&&Bc.delete(e)})};setInterval(Wf,1e4);const Hf=r=>{const e=r.part;if(e.type===ki.ATTRIBUTE)return e.element.isConnected;if(e.type===ki.CHILD)return e.parentNode?e.parentNode.isConnected:!1;if(e.type===ki.PROPERTY||e.type===ki.BOOLEAN_ATTRIBUTE||e.type===ki.EVENT||e.type===ki.ELEMENT)return e.element.isConnected;throw new Error("Unsupported Part")},{slice:Bf,forEach:Gf}=[];function Vf(r){return Gf.call(Bf.call(arguments,1),e=>{if(e)for(const t in e)r[t]===void 0&&(r[t]=e[t])}),r}const Gc=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Yf=function(r,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(e);let n=`${r}=${s}`;if(i.maxAge>0){const a=i.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");n+=`; Max-Age=${Math.floor(a)}`}if(i.domain){if(!Gc.test(i.domain))throw new TypeError("option domain is invalid");n+=`; Domain=${i.domain}`}if(i.path){if(!Gc.test(i.path))throw new TypeError("option path is invalid");n+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");n+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(n+="; HttpOnly"),i.secure&&(n+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n},Vc={create(r,e,t,i){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+t*60*1e3)),i&&(s.domain=i),document.cookie=Yf(r,encodeURIComponent(e),s)},read(r){const e=`${r}=`,t=document.cookie.split(";");for(let i=0;i<t.length;i++){let s=t[i];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(e)===0)return s.substring(e.length,s.length)}return null},remove(r){this.create(r,"",-1)}};var qf={name:"cookie",lookup(r){let{lookupCookie:e}=r;if(e&&typeof document<"u")return Vc.read(e)||void 0},cacheUserLanguage(r,e){let{lookupCookie:t,cookieMinutes:i,cookieDomain:s,cookieOptions:n}=e;t&&typeof document<"u"&&Vc.create(t,r,i,s,n)}},Xf={name:"querystring",lookup(r){var i;let{lookupQuerystring:e}=r,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const a=s.substring(1).split("&");for(let o=0;o<a.length;o++){const l=a[o].indexOf("=");l>0&&a[o].substring(0,l)===e&&(t=a[o].substring(l+1))}}return t}};let wn=null;const Yc=()=>{if(wn!==null)return wn;try{wn=window!=="undefined"&&window.localStorage!==null;const r="i18next.translate.boo";window.localStorage.setItem(r,"foo"),window.localStorage.removeItem(r)}catch{wn=!1}return wn};var Kf={name:"localStorage",lookup(r){let{lookupLocalStorage:e}=r;if(e&&Yc())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupLocalStorage:t}=e;t&&Yc()&&window.localStorage.setItem(t,r)}};let xn=null;const qc=()=>{if(xn!==null)return xn;try{xn=window!=="undefined"&&window.sessionStorage!==null;const r="i18next.translate.boo";window.sessionStorage.setItem(r,"foo"),window.sessionStorage.removeItem(r)}catch{xn=!1}return xn};var Zf={name:"sessionStorage",lookup(r){let{lookupSessionStorage:e}=r;if(e&&qc())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(r,e){let{lookupSessionStorage:t}=e;t&&qc()&&window.sessionStorage.setItem(t,r)}},Jf={name:"navigator",lookup(r){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:i,language:s}=navigator;if(t)for(let n=0;n<t.length;n++)e.push(t[n]);i&&e.push(i),s&&e.push(s)}return e.length>0?e:void 0}},Qf={name:"htmlTag",lookup(r){let{htmlTag:e}=r,t;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(t=i.getAttribute("lang")),t}},eg={name:"path",lookup(r){var s;let{lookupFromPathIndex:e}=r;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(s=t[typeof e=="number"?e:0])==null?void 0:s.replace("/",""):void 0}},tg={name:"subdomain",lookup(r){var s,n;let{lookupFromSubdomainIndex:e}=r;const t=typeof e=="number"?e+1:1,i=typeof window<"u"&&((n=(s=window.location)==null?void 0:s.hostname)==null?void 0:n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[t]}};let Xd=!1;try{document.cookie,Xd=!0}catch{}const Kd=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Xd||Kd.splice(1,1);const rg=()=>({order:Kd,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:r=>r});class Zd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Vf(t,this.options||{},rg()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(qf),this.addDetector(Xf),this.addDetector(Kf),this.addDetector(Zf),this.addDetector(Jf),this.addDetector(Qf),this.addDetector(eg),this.addDetector(tg)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(i=>{if(this.detectors[i]){let s=this.detectors[i].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(t=t.concat(s))}}),t=t.map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}Zd.type="languageDetector";const ig={loading:"Loading",config:"Settings",temperature:"Temperature",file:"File",upload:"Upload",uploadafile:"Upload a file",selectfile:"Select a file",addfiles:"Add file(s)",clear:"Clear",dragorselectfile:"Drag and drop an LRC file or select it from disk",detail:"Detail",showeverything:"Show everything",next:"Next",prev:"Previous",back:"Back",close:"Close",reload:"Reload",description:"Description",author:"Author",license:"License",recordedat:"Recorded at",displaysettings:"Display settings",filerendering:"File rendering",pixelated:"Pixelated",smooth:"Smooth",filerenderinghint:"'Pixelated' mode disables antialising of the thermogram and enables you to see its pixels as they are.",adjusttimescale:"Adjust temperature scale",automaticrange:"Automatic range",fullrange:"Full range",adjusttimescalehint:"Adjust the time scale automatically (based on histogram) or set its values to the full range (min and max).",palettename:"{{name}} palette",colourpalettehint:"Select colour palette of thermal display.",fileinfo:"File info",thermalfilename:"IR file name",thermalfileurl:"IR file URL",thermalfiledownload:"Download the IR file",visiblefilename:"Visual file name",visiblefileurl:"Visual file URL",visiblefiledownload:"Visual file download",togglevisibleimage:"Switch IR / VIS image",time:"Time",duration:"Duration",resolution:"Resolution",bytesize:"Bytesize",minimaltemperature:"Minimal temperature",maximaltemperature:"Maximal temperature",filetype:"File type",type:"Type",supporteddevices:"Supported devices",numfiles:"{{num}} files",download:"Download",downloadoriginalfiles:"LRC - individual files",downloadoriginalfileshint:"Download all source IR files",downloadoriginalfile:"{{type}} - Original thermal file",exportcurrentframeaspng:"PNG - Current frame as PNG",convertentiresequencetovideo:"WEBM - Convert entire sequence to video",pngofindividualimages:"PNG - individual files",pngofindividualimageshint:"Export all files individually.",pngofentiregroup:"PNG - group",pngofentiregrouphint:"Export the entire group as one image",csvofanalysisdata:"CSV - analysis data",csvofanalysisdatahint:"Table of temperatures in analyses",exportimagewidth:"Exported image width",exportimagefontsize:"Exported image font size",range:"Range",info:"Info",note:"Note",group:"Group",donotgroup:"Do not group",groupby:"Group {{era}}",groupped:"groupped",showingfolder:"Displaying the folder",showingfolders:"Displaying folders",and:"and",or:"or",doyouwanttoadd:"Do you want to diaplay also",youmayalsoadd:"You may also display",bydays:"by day",byhours:"by hour",byweeks:"by week",bymonths:"by month",byyears:"by year",play:"Play",pause:"Pause",stop:"Stop",date:"Date",frame:"Frame",playbackspeed:"Playback speed",graphlines:"Graph lines",straightlines:"Straight lines",smoothlines:"Smooth lines",graphlineshint:"'Smooth lines' can illustrate trends better, but are less precise. If you need to see exactly what is in the thermogram, use 'Straight lines'.",analysis:"Analysis",avg:"AVG",min:"MIN",max:"MAX",size:"Size",edit:"Edit",editsth:"Edit {{what}}",remove:"Remove",addpoint:"Add point",addellipsis:"Add ellipsis",addrectangle:"Add rectangle",analysishint:"You may select area in the IR image to see its temperatures.",graph:"Graph",graphhint1:"Add analysis first to see the graph!",graphhint2:"Click on an analysis <span class='hintbtn'>value</span> to see its graph here!",rectangle:"rectangle",ellipsis:"ellipsis",point:"point",name:"Name",color:"Color",top:"Top",left:"Left",right:"Right",bottom:"Bottom",columns:"{{num}} images in a row",fromto:"From {{from}} to {{to}}",downloadgraphdataascsv:"Download graph data as CSV",apparenttemperature:"Apparent temperature",apparenttemperaturehint:"This converter uses the apparent temperature model <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Air temperature",relativeairhumidity:"Relative air humidity",windspeed:"Wind speed",inpercent:"in percent",analysissync:"Synchronise analyses",apparenttemperatureverbose:"The thermometer shows {{t}} °C, but due to humidity and wind, it feels like {{app}} °C outside.",youfeelwarmer:"The apparent temperature is {{diff}} °C higher than the air temperature.",youfeelcolder:"The apparent temperature is {{diff}} °C lower than the air temperature.",inspecttemperatures:"Inspect temperatures",usemousetoinspecttemperaturevalues:"Use mouse to inspect temperature values.",editanalysis:"Edit analysis",dragcornersofselectedanalysis:"Drag corners of any selected analysis.",addpointanalysis:"Add a point analysis",clickandaddpoint:"Click on the IR image to add a point analysis",addrectangleanalysis:"Add a rectangular analysis",clickandaddrectangle:"Click and drag on the IR image to add a rectangular analysis.",addellipsisanalysis:"Add an elyptical analysis",clickandaddellipsis:"Click and drag on the thermogram to add an elyptical analysis.",tutorial:"Tutorial",colourpalette:"Colour palette",palettehint:"Use the menu to change the colour palette.",remotefoldersbrowser:"Remote folders browser"},sg={loading:"Chargement",config:"Einstellungen",temperature:"Temperature",upload:"Téléverser",uploadafile:"Téléverser un fichier",selectfile:"Sélectionner un fichier",addfiles:"Ajouter un/des fichier(s)",clear:"Effacer",dragorselectfile:"Glissez-déposez un fichier LRC ou sélectionnez-le depuis le disque",file:"fichier",detail:"Détail",showeverything:"Montrer tout",analysissync:"Synchroniser les analyses",next:"Avancer",prev:"Rétourner",back:"Au derriére",close:"Fermer",reload:"Recharger",description:"Description",author:"Auteur",license:"License",recordedat:"Enrégistré à",displaysettings:"Paramètres d'affichage",filerendering:"Rendu de l'image",pixelated:"Pixelisé",smooth:"Lisse",filerenderinghint:"Le mode 'Pixelisé' désactives le anticrénelage de l'image et monttres les pixels tels qu'ils sont.",adjusttimescale:"Ajuster l'échelle de température",automaticrange:"Gamme automatique",fullrange:"Gamme compléte",adjusttimescalehint:"Ajustez l'échelle de temps automatiquement (en fonction de l'histogramme) ou définissez ses valeurs sur la plage complète (min et max).",palettename:"Palette {{name}}",colourpalettehint:"Sélectionnez la palette de couleurs de l'affichage thermique.",fileinfo:"Informations sur le fichier",thermalfilename:"Nom du fichier IR",thermalfileurl:"URL du fichier IR",thermalfiledownload:"Télécharger le fichier IR",visiblefilename:"Nom de l'image visuel",visiblefileurl:"URL de l'image visuel",visiblefiledownload:"Télécharger l'image visuel",togglevisibleimage:"Commuter l'image IR / VIS",time:"Temps",duration:"Durée",resolution:"Résolution",minimaltemperature:"Température minimale",maximaltemperature:"Température maximale",filetype:"Genre du fichier",type:"Genre",supporteddevices:"Appareils compatibles",bytesize:"Taille en octets",numfiles:"{{num}} fichiers",download:"Télécharger",downloadoriginalfiles:"LRC - fichiers individuels",downloadoriginalfileshint:"Téléchargez tous les fichiers IR sources",downloadoriginalfile:"{{type}} - Fichier thermique original",exportcurrentframeaspng:"PNG - Cadre actuel en tant qu'image",convertentiresequencetovideo:"WEBM - Convertir la séquence entière en vidéo",pngofindividualimages:"PNG - fichiers individuels",pngofindividualimageshint:"Exporter tous les fichiers individuellement.",pngofentiregroup:"PNG - groupe",pngofentiregrouphint:"Exporter l'ensemble du groupe sous forme d'une seule image",csvofanalysisdata:"CSV - données d'analyse",csvofanalysisdatahint:"Tableau des températures dans les analyses",exportimagewidth:"Largeur de l'image exportée",exportimagefontsize:"Taille de la police de l'image exportée",range:"Gamme",info:"Info",note:"Note",group:"Groupe",donotgroup:"Ne pas groupper",groupby:"Groupe {{era}}",groupped:"groupés",showingfolder:"Affichage du dossier",showingfolders:"Affichage des dossiers",and:"et",or:"ou",doyouwanttoadd:"Voulez-vous afficher aussi",youmayalsoadd:"Vous pouvez afficher aussi",bydays:"par jour",byhours:"par heure",byweeks:"par semaine",bymonths:"par mois",byyears:"par année",play:"Lecture",pause:"Pause",stop:"Arrêter",date:"Date",frame:"Image",playbackspeed:"Vitesse de lecture",graphlines:"Lignes graphiques",straightlines:"Lignes droites",smoothlines:"Lignes lisses",graphlineshint:"Les « lignes lisses » peuvent mieux illustrer les tendances, mais sont moins précises. Si vous avez besoin de voir exactement ce qui se trouve sur le thermogramme, utilisez « Lignes droites ».",analysis:"Analyse",avg:"AVG",min:"MIN",max:"MAX",size:"Taille",edit:"Modifier",editsth:"Modifier {{what}}",remove:"Retirer",addpoint:"Ajouter un point",addellipsis:"Ajouter une ellipse",addrectangle:"Ajouter un rectangle",analysishint:"Vous pouvez sélectionner une zone dans l'image IR pour voir ses températures.",graph:"Graphique",graphhint1:"Ajoutez d'abord une analyse pour voir le graphique !",graphhint2:"Cliquez sur une <span class='hintbtn'>valeur</span> d'analyse pour voir son graphique ici !",rectangle:"rectangle",ellipsis:"ellipse",point:"point",name:"Nom",color:"Couleur",top:"Côté supérieure",left:"Côté gauche",right:"Côté droite",bottom:"Côté inférieure",columns:"{{num}} images par ligne",fromto:"De {{from}} à {{to}}",downloadgraphdataascsv:"Télécharger les données graphiques au format CSV",apparenttemperature:"Température ressentie",apparenttemperaturehint:"Ce convertisseur utilise le modèle de température ressentie <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Température de l'air",relativeairhumidity:"Humidité relative de l'air",windspeed:"Vitesse du vent",inpercent:"en pourcentage",apparenttemperatureverbose:"Le thermomètre indique {{t}} °C, mais en raison de l'humidité et du vent, la température ressentie est de {{app}} °C.",youfeelwarmer:"La température ressentie est de {{diff}} °C supérieure à la température de l'air.",youfeelcolder:"La température ressentie est de {{diff}} °C inférieure à la température de l'air.",inspecttemperatures:"Inspecter les températures",usemousetoinspecttemperaturevalues:"Utilisez la souris pour inspecter les valeurs de température.",editanalysis:"Modifier l'analyse",dragcornersofselectedanalysis:"Faites glisser les coins de l'analyse sélectionnée.",addpointanalysis:"Ajouter une analyse de point",clickandaddpoint:"Cliquez sur le thermogramme pour ajouter une analyse de point.",addrectangleanalysis:"Ajouter une analyse rectangulaire",clickandaddrectangle:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse rectangulaire.",addellipsisanalysis:"Ajouter une analyse elliptique",clickandaddellipsis:"Cliquez et faites glisser sur le thermogramme pour ajouter une analyse elliptique.",tutorial:"Tutoriel",colourpalette:"Palette",palettehint:"Utilisez le menu pour changer le palette.",remotefoldersbrowser:"Navigateur de dossiers distants"},ng={loading:"Načítám",config:"Nastavení",temperature:"Teplota",upload:"Nahrát",uploadafile:"Nahrát soubor",selectfile:"Vybrat soubor",addfiles:"Přidat soubor(y)",clear:"Smazat",dragorselectfile:"Přetáhněte LRC soubor nebo jej vyberte z disku",file:"soubor",detail:"Detail",showeverything:"Zobrazit vše",next:"Další",prev:"Předchozí",back:"Zpět",close:"Zavřít",reload:"Načíst znovu",description:"Popis",author:"Autor",license:"Licence",recordedat:"Nahráno",displaysettings:"Nastavení zobrazení",filerendering:"Vykreslování termogramu",pixelated:"Pixelované",smooth:"Vyhlazené",filerenderinghint:"Režim 'Pixelované' vypne vyhlazování a zobrazí pixely termogramu přesně tak, jak jsou",adjusttimescale:"Teplotní rozsah",automaticrange:"Automatický rozsah",fullrange:"Plný rozsah",adjusttimescalehint:"Nastavit teplotní škálu automaticky (nejčastější teploty z histogramu) anebo ji roztáhnout na minimální a maximální teploty.",palettename:"Paleta {{name}}",colourpalettehint:"Zvolte barevnou paletu",numfiles:"{{num}} souborů",fileinfo:"O souboru",thermalfilename:"Název IR souboru",thermalfileurl:"URL IR souboru",thermalfiledownload:"Stáhnout IR soubor",visiblefilename:"Název visible souboru",visiblefileurl:"URL visible souboru",visiblefiledownload:"Stáhnout visible obrázek",togglevisibleimage:"Přepnout IR / VIS obraz",time:"Čas",duration:"Délka sekvence",resolution:"Rozlišení",bytesize:"Bytů",minimaltemperature:"Minimální teplota",maximaltemperature:"Maximální teplota",filetype:"Typ souboru",type:"Typ",supporteddevices:"Kompatibilní zařízení",download:"Stáhnout",downloadoriginalfiles:"LRC - jednotlivé soubory",downloadoriginalfileshint:"Stáhnout jednotlivé zdrojové termogramy",downloadoriginalfile:"{{type}} - Původní IR soubor",exportcurrentframeaspng:"PNG - Aktuální snímek jako PNG",convertentiresequencetovideo:"WEBM - Převést celou sekvenci do videa",pngofindividualimages:"PNG - jednotlivé soubory",pngofindividualimageshint:"Exportovat všechny soubor po jednom, každý do samostatného obrázku.",pngofentiregroup:"PNG - skupina",pngofentiregrouphint:"Exportovat celou skupinu do 1 obrázku.",csvofanalysisdata:"CSV - data analýz",csvofanalysisdatahint:"Tabulka s teplotami v aktuálně nastavených analýzách",exportimagewidth:"Šířka exportovaných obrázků",exportimagefontsize:"Velikost písma v exportovaných obrázcích",range:"Rozsah",info:"Info",note:"Pozn.",group:"Skupina",donotgroup:"Neseskupovat",groupby:"Seskupit {{era}}",groupped:"seskupené",showingfolder:"Zobrazuji složku",showingfolders:"Zobrazuji složky",and:"a",or:"či",doyouwanttoadd:"Chcete přidat ještě",youmayalsoadd:"Můžete přidat ještě",bydays:"po dnech",byhours:"po hodinách",byweeks:"po týdnech",bymonths:"po měsících",byyears:"po rocích",play:"Přehrát",pause:"Pozastavit",stop:"Stop",date:"Datum",frame:"Snímek",playbackspeed:"Rychlost přehrávání",graphlines:"Čáry v grafu",straightlines:"Přímé linie",smoothlines:"Hladké linie",graphlineshint:"'Hladké linie' mohou lépe ilustrovat trendy, ale jsou méně přesné. Potřebujete-li vidět přesně to, co v termogramu je, zvolte 'Přímé linie'.",analysis:"Analýza",avg:"PRŮM",min:"MIN",max:"MAX",size:"Velikost",edit:"Upravit",editsth:"Upravit {{what}}",remove:"Odstranit",addpoint:"Přidat bod",addellipsis:"Přidat elipsu",addrectangle:"Přidat obdélník",analysishint:"Vyznačte oblast v termogramu a zde uvidíte přehled jejích teplot.",graph:"Graf",graphhint1:"Nejprve přidejte analýzu!",graphhint2:"Pro zobrazení grafu klikněte na<span class='hintbtn'>hodnotu</span> některé analýzy!",rectangle:"obdélník",ellipsis:"elipsu",point:"bod",name:"Název",color:"Barva",top:"Horní strana",left:"Levá strana",right:"Pravá strana",bottom:"Spodní strana",columns:"{{num}} souborů na řádku",fromto:"Od {{from}} do {{to}}",downloadgraphdataascsv:"Stáhnout data grafu jako CSV",analysissync:"Synchronizovat analýzy",apparenttemperature:"Pocitová teplota",apparenttemperaturehint:"Tento převodník využívá model pocitové teploty <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Teplota vzduchu",relativeairhumidity:"Relativní vlhkost vzduchu",windspeed:"Rychlost větru",inpercent:"v procentech",apparenttemperatureverbose:"Na teploměru vidíte {{t}} °C, ale vlivem vlhkosti a větru se venku cítíte jako by bylo {{app}} °C.",youfeelwarmer:"Pocitová teplota je o {{diff}} °C vyšší než teplota vzduchu.",youfeelcolder:"Pocitová teplota je o {{diff}} °C nižší než teplota vzduchu.",inspecttemperatures:"Prohlížet teploty",usemousetoinspecttemperaturevalues:"S pomocí kurzoru prohlížejte teploty v termogramu.",editanalysis:"Upravit analýzu",dragcornersofselectedanalysis:"Klikněte a táhněte roh aktivní analýzy.",addpointanalysis:"Přidat bodovou analýzu",clickandaddpoint:"Klikněte na termogram a přidejte bodovou analýzu.",addrectangleanalysis:"Přidat obdélníkovou analýzu",clickandaddrectangle:"Klikněte a táhněte na termogramu pro přidání obdélníkové analýzy.",addellipsisanalysis:"Přidat eliptickou analýzu",clickandaddellipsis:"Klikněte a táhněte na termogramu pro přidání eliptické analýzy.",tutorial:"Tutorial",colourpalette:"Barevná paleta",palettehint:"Rozbalovací nabídka pro přepínání barevné palety.",remotefoldersbrowser:"Prohlížeč vzdálených složek"},ag={loading:"Llwytho",config:"Gosodiadau",temperature:"Tymheredd",upload:"Llwytho i fyny",uploadafile:"Llwytho ffeil i fyny",selectfile:"Dewis ffeil",addfiles:"Ychwanegu ffeil(iau)",clear:"Clirio",dragorselectfile:"Llusgwch ffeil LRC neu dewiswch hi o'r ddisg",analysissync:"Cydamseru dadansoddiadau",file:"ffeil",detail:"Manylder",showeverything:"Dangos popeth",next:"Nesaf",prev:"Blaenorol",back:"Yn ôl",close:"Cau",reload:"Ail-lwytho",description:"Disgrifiad",author:"Awdur",license:"Trwydded",recordedat:"Wedi recordio yn",displaysettings:"Gosodiadau arddangos",filerendering:"Rendro ffeil",pixelated:"Picselaidd",smooth:"Llyfn",filerenderinghint:"Mae modd 'Picselaidd' yn analluogi gwrth-alwio'r delwedd isgoch ac yn eich galluogi i weld ei bicseli fel ag y maent.",adjusttimescale:"Graddfa tymheredd",automaticrange:"Ystod awtomatig",fullrange:"Ystod llawn",adjusttimescalehint:"Addaswch yr ystod thermol yn awtomatig neu cyflewch yr ystod i fand lawn.",palettename:"Palet {{name}}",colourpalettehint:"Dewiswch balet lliw o arddangos thermol.",fileinfo:"Gwybodaeth ffeil",thermalfilename:"Enw ffeil isgoch",thermalfileurl:"URL ffeil isgoch",thermalfiledownload:"Lawrlwythwch y ffeil isgoch",visiblefilename:"Enw ffeil weledol",visiblefileurl:"URL ffeil weledol",visiblefiledownload:"Lawrlwythwch y ffeil weledol",togglevisibleimage:"Newid delwedd IR/VIS",time:"Amser",duration:"Hyd",resolution:"Datrysiad",bytesize:"Maint",minimaltemperature:"Tymheredd lleiaf",maximaltemperature:"Tymheredd uchaf",filetype:"Math o ffeil",type:"Math",supporteddevices:"Dyfeisiau a gefnogir",numfiles:"{{num}} ffeil",download:"Lawrlwythwch",downloadoriginalfiles:"LRC - ffeiliau thermol wreiddiol unigol",downloadoriginalfileshint:"Lawrlwythwch ffeiliau isgoch unigol.",downloadoriginalfile:"{{type}} - Ffeil thermol wreiddiol",exportcurrentframeaspng:"PNG - Ffrâm gyfredol fel delwedd",convertentiresequencetovideo:"WEBM - Trosi dilyniant cyfan i fideo",pngofindividualimages:"PNG - ffeiliau unigol",pngofindividualimageshint:"Allforio pob ffeil yn unigol.",pngofentiregroup:"PNG - grwp",pngofentiregrouphint:"Allforio'r grŵp cyfan fel un ddelwedd",csvofanalysisdata:"CSV - data dadansoddi",csvofanalysisdatahint:"Tabl tymheredd mewn dadansoddiadau",exportimagewidth:"Lled delwedd wedi'i hallforio",exportimagefontsize:"Maint ffont delwedd wedi'i hallforio",range:"Ystod",info:"Gwybodaeth",note:"Nodyn",group:"Grwp",donotgroup:"Peidiwch â grwpio",groupby:"grwpio {{era}}",groupped:"wedi'u cetegoreiddio",showingfolder:"Yn dangos y ffolder",showingfolders:"Yn dangos y ffolderi",and:"a",or:"neu",doyouwanttoadd:"Ydych chi eisiau arddangos hefyd",youmayalsoadd:"Gallwch hefyd ddangos",bydays:"yn ôl dydd",byhours:"yn ôl awr",byweeks:"yn ôl wythnos",bymonths:"yn ôl mis",byyears:"yn ôl blwyddyn",play:"Chwarae",pause:"Oedwch",stop:"Stopio",date:"Dyddiad",frame:"Ffrâm",playbackspeed:"Cyflymder chwarae",graphlines:"Llinellau graff",straightlines:"Llinellau syth",smoothlines:"Llinellau llyfn",graphlineshint:"Gall 'llinellau llyfn' ddangos tueddiadau'n well, ond maent yn llai manwl gywir. Os oes angen i chi weld yn union beth sydd yn y lliw thermol, defnyddiwch 'Llinellau syth'.",analysis:"Dadansoddi",avg:"Cyfartaledd",min:"Lleiaf",max:"Uchafswm",size:"Maint",edit:"Golygu",editsth:"Golygu {{what}}",remove:"Dileu",addpoint:"Addio pwynt",addellipsis:"Addio elips",addrectangle:"Addio petryal",analysishint:"Gallwch ddewis ardal yn y ddelwedd IR i weld ei thymhereddau.",graph:"Graff",graphhint1:"Addio ddadansoddiad yn gyntaf i weld y graff!",graphhint2:"Cliciwch ar <span class='hintbtn'>werth</span> dadansoddiad i weld ei graff yma!",rectangle:"petryal",ellipsis:"elipsis",point:"pwynt",name:"Enw",color:"Lliw",top:"Ochr uchaf",left:"Ochr chwith",right:"Ochr dde",bottom:"Ochr gwaelod",columns:"{{num}} delwedd mewn rhes",fromto:"O {{from}} i {{to}}",downloadgraphdataascsv:"Lawrlwythwch data graff fel CSV",apparenttemperature:"Tymheredd tebygol",apparenttemperaturehint:"Mae'r trawsnewidydd hwn yn defnyddio'r model tymheredd tebygol <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Tymheredd aer",relativeairhumidity:"Lleithder cymharol aer",windspeed:"Cyflymder gwynt",inpercent:"mewn canran",apparenttemperatureverbose:"Mae'r thermomedr yn dangos {{t}} °C, ond oherwydd lleithder a gwynt, mae'n teimlo fel {{app}} °C y tu allan.",youfeelwarmer:"Mae'r tymheredd teimladol yn {{diff}} °C yn uwch na thymheredd yr aer.",youfeelcolder:"Mae'r tymheredd teimladol yn {{diff}} °C yn is na thymheredd yr aer.",inspecttemperatures:"Archwilio'r tymheredd",usemousetoinspecttemperaturevalues:"Defnyddiwch y llygoden i archwilio gwerthoedd tymheredd.",editanalysis:"Golygu dadansoddiad",dragcornersofselectedanalysis:"Llusgwch gorneli'r dadansoddiad a ddewiswyd.",addpointanalysis:"Adio dadansoddiad pwynt",clickandaddpoint:"Cliciwch ar y delwedd isgoch i ychwanegu dadansoddiad pwynt.",addrectangleanalysis:"Adio dadansoddiad petryal",clickandaddrectangle:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad petryal.",addellipsisanalysis:"Adio dadansoddiad eliptig",clickandaddellipsis:"Cliciwch a dragiwuch ar y delwedd isgoch i ychwanegu dadansoddiad eliptig.",tutorial:"Tiwtorial",colourpalette:"Palet lliw",palettehint:"Defnyddiwch y gwymplen i newid y palet.",remotefoldersbrowser:"Porwr o ffolderi anghysbell"},og={loading:"Loading",config:"Paramètres",temperature:"Temperatur",upload:"Hochladen",uploadafile:"Datei hochladen",selectfile:"Datei auswählen",addfiles:"Datei(en) hinzufügen",clear:"Löschen",dragorselectfile:"Ziehen Sie eine LRC-Datei hierher oder wählen Sie sie von der Festplatte aus",analysissync:"Analysen synchronisieren",file:"Datei",detail:"Detail",showeverything:"Alles anzeigen",next:"Weiter",prev:"Zurück",back:"Zurück",close:"Schließen",reload:"Neu laden",description:"Beschreibung",author:"Autor",license:"Lizenz",recordedat:"Aufgenommen am",displaysettings:"Anzeigeeinstellungen",filerendering:"Thermogramm-Wiedergabe",pixelated:"Pixelig",smooth:"Glatt",filerenderinghint:"Der Modus 'Pixelig' deaktiviert das Glätten und zeigt die Pixel des Thermogramms exakt so, wie sie sind.",adjusttimescale:"Temperaturbereich",automaticrange:"Automatischer Bereich",fullrange:"Voller Bereich",adjusttimescalehint:"Temperaturskala automatisch (häufigste Temperaturen im Histogramm) oder auf die minimalen und maximalen Temperaturen erweitern.",palettename:"Palette {{name}}",colourpalettehint:"Wählen Sie eine Farbpalette",numfiles:"{{num}} Dateien",fileinfo:"Dateiinformationen",thermalfilename:"Name der IR-Datei",thermalfileurl:"URL der IR-Datei",thermalfiledownload:"IR-Datei herunterladen",visiblefilename:"Name der sichtbaren Datei",visiblefileurl:"URL der sichtbaren Datei",visiblefiledownload:"Sichtbares Bild herunterladen",togglevisibleimage:"IR/VIS-Bild umschalten",time:"Zeit",duration:"Sequenzdauer",resolution:"Auflösung",bytesize:"Bytes",minimaltemperature:"Minimale Temperatur",maximaltemperature:"Maximale Temperatur",filetype:"Dateityp",type:"Typ",supporteddevices:"Kompatible Geräte",download:"Herunterladen",downloadoriginalfiles:"LRC - ffeiliau unigol",downloadoriginalfileshint:"Lawrlwythwch yr holl ffeiliau IR gwreiddiol",downloadoriginalfile:"{{type}} - Original-IR-Datei",exportcurrentframeaspng:"PNG - Aktuelles Bild als PNG",convertentiresequencetovideo:"WEBM - Gesamte Sequenz in Video umwandeln",pngofindividualimages:"PNG - Einzelne Dateien",pngofindividualimageshint:"Exportieren Sie jede Datei einzeln als Bild.",pngofentiregroup:"PNG - Gruppe",pngofentiregrouphint:"Exportieren Sie die gesamte Gruppe in eine einzelne Datei.",csvofanalysisdata:"CSV - Analysedaten",csvofanalysisdatahint:"Tabelle mit Temperaturen aus den aktuell festgelegten Analysen",exportimagewidth:"Exportierte Bildbreite",exportimagefontsize:"Exportierte Bildschriftgröße",range:"Bereich",info:"Info",note:"Hinweis",group:"Gruppe",donotgroup:"Nicht gruppieren",groupby:"Gruppieren nach {{era}}",groupped:"grupiert",showingfolder:"Ordner anzeigen",showingfolders:"Ordner anzeigen",and:"und",or:"oder",doyouwanttoadd:"Möchten Sie auch anzeigen",youmayalsoadd:"Sie können auch anzeigen",bydays:"nach Tagen",byhours:"nach Stunden",byweeks:"nach Wochen",bymonths:"nach Monaten",byyears:"nach Jahren",play:"Abspielen",pause:"Pause",stop:"Stopp",date:"Datum",frame:"Bild",playbackspeed:"Abspielgeschwindigkeit",graphlines:"Grafiklinien",straightlines:"Gerade Linien",smoothlines:"Glatte Linien",graphlineshint:"'Glatte Linien' können Trends besser darstellen, sind jedoch weniger präzise. Wenn Sie genau sehen möchten, was im Thermogramm ist, wählen Sie 'Gerade Linien'.",analysis:"Analyse",avg:"MITTL",min:"MIN",max:"MAX",size:"Größe",edit:"Bearbeiten",editsth:"{{what}} bearbeiten",remove:"Entfernen",addpoint:"Punkt hinzufügen",addellipsis:"Ellipse hinzufügen",addrectangle:"Rechteck hinzufügen",analysishint:"Markieren Sie einen Bereich im Thermogramm, um hier eine Übersicht seiner Temperaturen zu sehen.",graph:"Grafik",graphhint1:"Fügen Sie zuerst eine Analyse hinzu!",graphhint2:"Klicken Sie auf einen <span class='hintbtn'>Wert</span> einer Analyse, um hier die Grafik zu sehen!",rectangle:"Rechteck",ellipsis:"Ellipse",point:"Punkt",name:"Name",color:"Farbe",top:"Oben",left:"Links",right:"Rechts",bottom:"Unten",columns:"{{num}} Bilder in einer Reihe",fromto:"Von {{from}} bis {{to}}",downloadgraphdataascsv:"Grafikdaten als CSV herunterladen",apparenttemperature:"Gefühlte Temperatur",apparenttemperaturehint:"Dieser Konverter verwendet das Modell der gefühlten Temperatur <a href='{{href}}' target='_blank'>Australian Apparent Temperature</a>.",airtemperature:"Lufttemperatur",relativeairhumidity:"Relative Luftfeuchtigkeit",windspeed:"Windgeschwindigkeit",inpercent:"in Prozent",apparenttemperatureverbose:"Das Thermometer zeigt {{t}} °C, aber durch Feuchtigkeit und Wind fühlt es sich wie {{app}} °C an.",youfeelwarmer:"Die gefühlte Temperatur ist {{diff}} °C höher als die Lufttemperatur.",youfeelcolder:"Die gefühlte Temperatur ist {{diff}} °C niedriger als die Lufttemperatur.",inspecttemperatures:"Temperaturen inspizieren",usemousetoinspecttemperaturevalues:"Verwenden Sie die Maus, um Temperaturwerte zu inspizieren.",editanalysis:"Analyse bearbeiten",dragcornersofselectedanalysis:"Ziehen Sie die Ecken der ausgewählten Analyse.",addpointanalysis:"Punktanalyse hinzufügen",clickandaddpoint:"Klicken Sie auf das Thermogramm, um eine Punktanalyse hinzuzufügen.",addrectangleanalysis:"Rechteckanalyse hinzufügen",clickandaddrectangle:"Klicken und ziehen Sie auf dem Thermogramm, um eine Rechteckanalyse hinzuzufügen.",addellipsisanalysis:"Elliptische Analyse hinzufügen",clickandaddellipsis:"Klicken und ziehen Sie auf dem Thermogramm, um eine elliptische Analyse hinzuzufügen.",tutorial:"Tutorial",colourpalette:"Farbpalette",palettehint:"Dropdown-Menü zum Wechseln der Farbpalette.",remotefoldersbrowser:"Browser für Remote-Ordner"};vt.use(jf).use(Zd).init({fallbackLng:"en",resources:{cs:{translation:ng},cy:{translation:ag},de:{translation:og},en:{translation:ig},fr:{translation:sg}}});window.i18next=vt;const kl=window.matchMedia("(prefers-color-scheme: dark)"),Jd="thermal-dark-mode",Xc=()=>{document.body.classList.add(Jd)},lg=()=>{document.body.classList.remove(Jd)},hg=()=>{kl.matches&&Xc();const r=e=>{e.matches?Xc():lg()};kl.addEventListener("change",r),kl.addListener(r)},cg=()=>{const r=document.createElement("link");r.href="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.css",document.head.appendChild(r)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=globalThis,ch=Ra.ShadowRoot&&(Ra.ShadyCSS===void 0||Ra.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dh=Symbol(),Kc=new WeakMap;let Qd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==dh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ch&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Kc.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Kc.set(t,e))}return e}toString(){return this.cssText}};const dg=r=>new Qd(typeof r=="string"?r:r+"",void 0,dh),ne=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Qd(t,r,dh)},ug=(r,e)=>{if(ch)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=Ra.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},Zc=ch?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return dg(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pg,defineProperty:fg,getOwnPropertyDescriptor:gg,getOwnPropertyNames:mg,getOwnPropertySymbols:vg,getPrototypeOf:yg}=Object,Ji=globalThis,Jc=Ji.trustedTypes,bg=Jc?Jc.emptyScript:"",Pl=Ji.reactiveElementPolyfillSupport,Cn=(r,e)=>r,Ba={toAttribute(r,e){switch(e){case Boolean:r=r?bg:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},uh=(r,e)=>!pg(r,e),Qc={attribute:!0,type:String,converter:Ba,reflect:!1,hasChanged:uh};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ji.litPropertyMetadata??(Ji.litPropertyMetadata=new WeakMap);let Ns=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&fg(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=gg(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qc}static _$Ei(){if(this.hasOwnProperty(Cn("elementProperties")))return;const e=yg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cn("properties"))){const t=this.properties,i=[...mg(t),...vg(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Zc(s))}else e!==void 0&&t.push(Zc(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ug(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Ba).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Ba;this._$Em=s,this[s]=o.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??uh)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};Ns.elementStyles=[],Ns.shadowRootOptions={mode:"open"},Ns[Cn("elementProperties")]=new Map,Ns[Cn("finalized")]=new Map,Pl==null||Pl({ReactiveElement:Ns}),(Ji.reactiveElementVersions??(Ji.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pr=class extends Ns{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Tf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return es}};var Ud;pr._$litElement$=!0,pr.finalized=!0,(Ud=globalThis.litElementHydrateSupport)==null||Ud.call(globalThis,{LitElement:pr});const Ol=globalThis.litElementPolyfillSupport;Ol==null||Ol({LitElement:pr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wg={attribute:!0,type:String,converter:Ba,reflect:!1,hasChanged:uh},xg=(r=wg,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(t.name,r),i==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.P(a,void 0,r),o}}}if(i==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function d(r){return(e,t)=>typeof t=="object"?xg(r,e,t):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(r){return d({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sg=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Or(r){return(e,t)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Sg(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(n),o=(a==null?void 0:a.assignedElements(r))??[];return s===void 0?o:o.filter(h=>h.matches(s))}})}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const $g={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ka(r){return Object.isFrozen(r)&&Object.isFrozen(r.raw)}function Pa(r){return r.toString().indexOf("`")===-1}Pa(r=>r``)||Pa(r=>r`\0`)||Pa(r=>r`\n`)||Pa(r=>r`\u0000`);ka``&&ka`\0`&&ka`\n`&&ka`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let _g="google#safe";function Cg(){if(typeof window<"u")return window.trustedTypes}function eu(){var r;return(r=Cg())!==null&&r!==void 0?r:null}let Oa;function kg(){var r,e;if(Oa===void 0)try{Oa=(e=(r=eu())===null||r===void 0?void 0:r.createPolicy(_g,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))!==null&&e!==void 0?e:null}catch{Oa=null}return Oa}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class tu{constructor(e,t){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function ed(r){var e;const t=r,i=(e=kg())===null||e===void 0?void 0:e.createScriptURL(t);return i??new tu(t,$g)}function Pg(r){var e;if(!((e=eu())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof tu)return r.privateDoNotAccessOrElseWrappedResourceUrl;{let t="";throw new Error(t)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function ru(r,...e){if(e.length===0)return ed(r[0]);r[0].toLowerCase();let t=r[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+r[i+1];return ed(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Og(r){var e;const t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function Ag(r){const e=r.ownerDocument&&r.ownerDocument.defaultView,t=Og(e||window);t&&r.setAttribute("nonce",t)}function iu(r,e,t){r.src=Pg(e),Ag(r)}/**
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
 */const Eg=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),iu(t,ru`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function su(r={}){await Eg;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function td(r){if(await su(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Dg(r){return await su(),new google.visualization.ChartWrapper({container:r})}const nu=6048e5,Lg=864e5,rd=Symbol.for("constructDateFrom");function ts(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&rd in r?r[rd](e):r instanceof Date?new r.constructor(e):new Date(e)}function Rt(r,e){return ts(e||r,r)}let Rg={};function Gn(){return Rg}function Ai(r,e){var o,l,h,f;const t=Gn(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.weekStartsOn)??0,s=Rt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function Ga(r,e){return Ai(r,{...e,weekStartsOn:1})}function au(r,e){const t=Rt(r,e==null?void 0:e.in),i=t.getFullYear(),s=ts(t,0);s.setFullYear(i+1,0,4),s.setHours(0,0,0,0);const n=Ga(s),a=ts(t,0);a.setFullYear(i,0,4),a.setHours(0,0,0,0);const o=Ga(a);return t.getTime()>=n.getTime()?i+1:t.getTime()>=o.getTime()?i:i-1}function id(r){const e=Rt(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function Tg(r,...e){const t=ts.bind(null,e.find(i=>typeof i=="object"));return e.map(t)}function Va(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function Mg(r,e,t){const[i,s]=Tg(t==null?void 0:t.in,r,e),n=Va(i),a=Va(s),o=+n-id(n),l=+a-id(a);return Math.round((o-l)/Lg)}function Ig(r,e){const t=au(r,e),i=ts(r,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),Ga(i)}function Ug(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function ou(r){return!(!Ug(r)&&typeof r!="number"||isNaN(+Rt(r)))}function lu(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function Ya(r,e){const t=Rt(r,e==null?void 0:e.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function qa(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setDate(1),t.setHours(0,0,0,0),t}function hu(r,e){const t=Rt(r,e==null?void 0:e.in),i=t.getFullYear();return t.setFullYear(i+1,0,0),t.setHours(23,59,59,999),t}function ph(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function cu(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setMinutes(59,59,999),t}function Xa(r,e){var o,l;const t=Gn(),i=t.weekStartsOn??((l=(o=t.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??0,s=Rt(r,e==null?void 0:e.in),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const zg={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},du=(r,e,t)=>{let i;const s=zg[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ut(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const Fg={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},jg={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ng={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Wg={date:Ut({formats:Fg,defaultWidth:"full"}),time:Ut({formats:jg,defaultWidth:"full"}),dateTime:Ut({formats:Ng,defaultWidth:"full"})},Hg={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},uu=(r,e,t,i)=>Hg[r];function gt(r){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let s;if(i==="formatting"&&r.formattingValues){const a=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):a;s=r.formattingValues[o]||r.formattingValues[a]}else{const a=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[a]}const n=r.argumentCallback?r.argumentCallback(e):e;return s[n]}}const Bg={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Gg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Vg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Yg={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Xg={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Kg=(r,e)=>{const t=Number(r),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},pu={ordinalNumber:Kg,era:gt({values:Bg,defaultWidth:"wide"}),quarter:gt({values:Gg,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:Vg,defaultWidth:"wide"}),day:gt({values:Yg,defaultWidth:"wide"}),dayPeriod:gt({values:qg,defaultWidth:"wide",formattingValues:Xg,defaultFormattingWidth:"wide"})};function mt(r){return(e,t={})=>{const i=t.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],o=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(o)?Jg(o,p=>p.test(a)):Zg(o,p=>p.test(a));let h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const f=e.slice(a.length);return{value:h,rest:f}}}function Zg(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Jg(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Vn(r){return(e,t={})=>{const i=e.match(r.matchPattern);if(!i)return null;const s=i[0],n=e.match(r.parsePattern);if(!n)return null;let a=r.valueCallback?r.valueCallback(n[0]):n[0];a=t.valueCallback?t.valueCallback(a):a;const o=e.slice(s.length);return{value:a,rest:o}}}const Qg=/^(\d+)(th|st|nd|rd)?/i,em=/\d+/i,tm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rm={any:[/^b/i,/^(a|c)/i]},im={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},sm={any:[/1/i,/2/i,/3/i,/4/i]},nm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},am={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},om={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},lm={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},cm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},fu={ordinalNumber:Vn({matchPattern:Qg,parsePattern:em,valueCallback:r=>parseInt(r,10)}),era:mt({matchPatterns:tm,defaultMatchWidth:"wide",parsePatterns:rm,defaultParseWidth:"any"}),quarter:mt({matchPatterns:im,defaultMatchWidth:"wide",parsePatterns:sm,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:nm,defaultMatchWidth:"wide",parsePatterns:am,defaultParseWidth:"any"}),day:mt({matchPatterns:om,defaultMatchWidth:"wide",parsePatterns:lm,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:hm,defaultMatchWidth:"any",parsePatterns:cm,defaultParseWidth:"any"})},dm={code:"en-US",formatDistance:du,formatLong:Wg,formatRelative:uu,localize:pu,match:fu,options:{weekStartsOn:0,firstWeekContainsDate:1}};function um(r,e){const t=Rt(r,e==null?void 0:e.in);return Mg(t,ph(t))+1}function pm(r,e){const t=Rt(r,e==null?void 0:e.in),i=+Ga(t)-+Ig(t);return Math.round(i/nu)+1}function gu(r,e){var f,p,g,S;const t=Rt(r,e==null?void 0:e.in),i=t.getFullYear(),s=Gn(),n=(e==null?void 0:e.firstWeekContainsDate)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((S=(g=s.locale)==null?void 0:g.options)==null?void 0:S.firstWeekContainsDate)??1,a=ts((e==null?void 0:e.in)||r,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const o=Ai(a,e),l=ts((e==null?void 0:e.in)||r,0);l.setFullYear(i,0,n),l.setHours(0,0,0,0);const h=Ai(l,e);return+t>=+o?i+1:+t>=+h?i:i-1}function fm(r,e){var o,l,h,f;const t=Gn(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(h=t.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??1,s=gu(r,e),n=ts((e==null?void 0:e.in)||r,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Ai(n,e)}function gm(r,e){const t=Rt(r,e==null?void 0:e.in),i=+Ai(t,e)-+fm(t,e);return Math.round(i/nu)+1}function Be(r,e){const t=r<0?"-":"",i=Math.abs(r).toString().padStart(e,"0");return t+i}const Xi={y(r,e){const t=r.getFullYear(),i=t>0?t:1-t;return Be(e==="yy"?i%100:i,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):Be(t+1,2)},d(r,e){return Be(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return Be(r.getHours()%12||12,e.length)},H(r,e){return Be(r.getHours(),e.length)},m(r,e){return Be(r.getMinutes(),e.length)},s(r,e){return Be(r.getSeconds(),e.length)},S(r,e){const t=e.length,i=r.getMilliseconds(),s=Math.trunc(i*Math.pow(10,t-3));return Be(s,e.length)}},zs={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},sd={G:function(r,e,t){const i=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const i=r.getFullYear(),s=i>0?i:1-i;return t.ordinalNumber(s,{unit:"year"})}return Xi.y(r,e)},Y:function(r,e,t,i){const s=gu(r,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return Be(a,2)}return e==="Yo"?t.ordinalNumber(n,{unit:"year"}):Be(n,e.length)},R:function(r,e){const t=au(r);return Be(t,e.length)},u:function(r,e){const t=r.getFullYear();return Be(t,e.length)},Q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Be(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,e,t){const i=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Be(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,e,t){const i=r.getMonth();switch(e){case"M":case"MM":return Xi.M(r,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(r,e,t){const i=r.getMonth();switch(e){case"L":return String(i+1);case"LL":return Be(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(r,e,t,i){const s=gm(r,i);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):Be(s,e.length)},I:function(r,e,t){const i=pm(r);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):Be(i,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Xi.d(r,e)},D:function(r,e,t){const i=um(r);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):Be(i,e.length)},E:function(r,e,t){const i=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return Be(n,2);case"eo":return t.ordinalNumber(n,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,i){const s=r.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return Be(n,e.length);case"co":return t.ordinalNumber(n,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const i=r.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return Be(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const i=r.getHours();let s;switch(i===12?s=zs.noon:i===0?s=zs.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const i=r.getHours();let s;switch(i>=17?s=zs.evening:i>=12?s=zs.afternoon:i>=4?s=zs.morning:s=zs.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let i=r.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Xi.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Xi.H(r,e)},K:function(r,e,t){const i=r.getHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):Be(i,e.length)},k:function(r,e,t){let i=r.getHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):Be(i,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Xi.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Xi.s(r,e)},S:function(r,e){return Xi.S(r,e)},X:function(r,e,t){const i=r.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return ad(i);case"XXXX":case"XX":return ms(i);case"XXXXX":case"XXX":default:return ms(i,":")}},x:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"x":return ad(i);case"xxxx":case"xx":return ms(i);case"xxxxx":case"xxx":default:return ms(i,":")}},O:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+nd(i,":");case"OOOO":default:return"GMT"+ms(i,":")}},z:function(r,e,t){const i=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+nd(i,":");case"zzzz":default:return"GMT"+ms(i,":")}},t:function(r,e,t){const i=Math.trunc(+r/1e3);return Be(i,e.length)},T:function(r,e,t){return Be(+r,e.length)}};function nd(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Math.trunc(i/60),n=i%60;return n===0?t+String(s):t+String(s)+e+Be(n,2)}function ad(r,e){return r%60===0?(r>0?"-":"+")+Be(Math.abs(r)/60,2):ms(r,e)}function ms(r,e=""){const t=r>0?"-":"+",i=Math.abs(r),s=Be(Math.trunc(i/60),2),n=Be(i%60,2);return t+s+e+n}const od=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},mu=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},mm=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],i=t[1],s=t[2];if(!s)return od(r,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",od(i,e)).replace("{{time}}",mu(s,e))},vm={p:mu,P:mm},ym=/^D+$/,bm=/^Y+$/,wm=["D","DD","YY","YYYY"];function xm(r){return ym.test(r)}function Sm(r){return bm.test(r)}function $m(r,e,t){const i=_m(r,e,t);if(console.warn(i),wm.includes(r))throw new RangeError(i)}function _m(r,e,t){const i=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Cm=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,km=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Pm=/^'([^]*?)'?$/,Om=/''/g,Am=/[a-zA-Z]/;function $e(r,e,t){var f,p,g,S,$,O,P,Y;const i=Gn(),s=(t==null?void 0:t.locale)??i.locale??dm,n=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((S=(g=i.locale)==null?void 0:g.options)==null?void 0:S.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((O=($=t==null?void 0:t.locale)==null?void 0:$.options)==null?void 0:O.weekStartsOn)??i.weekStartsOn??((Y=(P=i.locale)==null?void 0:P.options)==null?void 0:Y.weekStartsOn)??0,o=Rt(r,t==null?void 0:t.in);if(!ou(o))throw new RangeError("Invalid time value");let l=e.match(km).map(A=>{const D=A[0];if(D==="p"||D==="P"){const X=vm[D];return X(A,s.formatLong)}return A}).join("").match(Cm).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const D=A[0];if(D==="'")return{isToken:!1,value:Em(A)};if(sd[D])return{isToken:!0,value:A};if(D.match(Am))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const h={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return l.map(A=>{if(!A.isToken)return A.value;const D=A.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Sm(D)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&xm(D))&&$m(D,e,String(r));const X=sd[D[0]];return X(o,D,s.localize,h)}).join("")}function Em(r){const e=r.match(Pm);return e?e[1].replace(Om,"'"):r}function Al(r,e){const t=Rt(r,e==null?void 0:e.in);if(!ou(t))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",o=i==="extended"?":":"";if(s!=="time"){const l=Be(t.getDate(),2),h=Be(t.getMonth()+1,2);n=`${Be(t.getFullYear(),4)}${a}${h}${a}${l}`}if(s!=="date"){const l=Be(t.getHours(),2),h=Be(t.getMinutes(),2),f=Be(t.getSeconds(),2);n=`${n}${n===""?"":" "}${l}${o}${h}${o}${f}`}return n}function vu(r,e){const t=Rt(r,e==null?void 0:e.in);return t.setMinutes(0,0,0),t}var Fl;(function(r){r.csv="text/csv",r.tsv="text/tab-separated-values",r.plain="text/plain"})(Fl||(Fl={}));var an=r=>r,_r=r=>r,kn=an,mo=an,Gs=an,ld=an,hd=an,Dm={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:Fl.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},Lm=`\r
`,Rm="\uFEFF",Yn=r=>Object.assign({},Dm,r);class Tm extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}class Mm extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}}class Im extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}class Um extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}}var zm=function(r,e){return e=='"'&&r.indexOf('"')>-1?r.replace(/"/g,'""'):r},Fm=r=>ld(typeof r=="object"?r.key:r),jm=r=>hd(typeof r=="object"?r.displayLabel:r),Nm=(r,...e)=>e.reduce((t,i)=>i(t),r),Wm=r=>e=>r.useBom?mo(_r(e)+Rm):e,Hm=r=>e=>r.showTitle?fh(mo(_r(e)+r.title))(Gs("")):e,fh=r=>e=>mo(_r(r)+_r(e)+Lm),yu=r=>(e,t)=>Bm(r)(Gs(_r(e)+_r(t))),Bm=r=>e=>an(_r(e)+r.fieldSeparator),Gm=(r,e)=>t=>{if(!r.showColumnHeaders)return t;if(e.length<1)throw new Mm("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=Gs("");for(let s=0;s<e.length;s++){const n=jm(e[s]);i=yu(r)(i,bu(r,_r(n)))}return i=Gs(_r(i).slice(0,-1)),fh(t)(i)},Vm=(r,e,t)=>i=>{let s=i;for(var n=0;n<t.length;n++){let a=Gs("");for(let o=0;o<e.length;o++){const l=Fm(e[o]),h=t[n][_r(l)];a=yu(r)(a,bu(r,h))}a=Gs(_r(a).slice(0,-1)),s=fh(s)(a)}return s},Ym=r=>+r===r&&(!isFinite(r)||!!(r%1)),qm=(r,e)=>{if(Ym(e)){if(r.decimalSeparator==="locale")return kn(e.toLocaleString());if(r.decimalSeparator)return kn(e.toString().replace(".",r.decimalSeparator))}return kn(e.toString())},Ta=(r,e)=>{let t=e;return(r.quoteStrings||r.fieldSeparator&&e.indexOf(r.fieldSeparator)>-1||r.quoteCharacter&&e.indexOf(r.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(t=r.quoteCharacter+zm(e,r.quoteCharacter)+r.quoteCharacter),kn(t)},Xm=(r,e)=>{const t=e?"true":"false";return kn(r.boolDisplay[t])},Km=(r,e)=>typeof e>"u"&&r.replaceUndefinedWith!==void 0?Ta(r,r.replaceUndefinedWith+""):e===null?Ta(r,"null"):Ta(r,""),bu=(r,e)=>{if(typeof e=="number")return qm(r,e);if(typeof e=="string")return Ta(r,e);if(typeof e=="boolean"&&r.boolDisplay)return Xm(r,e);if(e===null||typeof e>"u")return Km(r,e);throw new Um(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},wu=r=>e=>{const t=Yn(r),i=t.useKeysAsHeaders?Object.keys(e[0]):t.columnHeaders;let s=Nm(mo(""),Wm(t),Hm(t),Gm(t,i),Vm(t,i,e));if(_r(s).length<1)throw new Tm("Output is empty. Is your data formatted correctly?");return s},Zm=r=>e=>{const t=Yn(r),i=_r(e),s=t.useTextFile?"text/plain":t.mediaType;return new Blob([i],{type:`${s};charset=utf8;`})},xu=r=>e=>{if(!window)throw new Im("Downloading only supported in a browser environment.");const t=Zm(r)(e),i=Yn(r),s=i.useTextFile?"txt":i.fileExtension,n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(t),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},Jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function ev(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var s=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:function(){return r[i]}})}),t}var Su={exports:{}};(function(r){(function(e){var t=D(),i=X(),s=W(),n=se(),a={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:l,toPng:f,toJpeg:p,toBlob:g,toPixelData:h,impl:{fontFaces:s,images:n,util:t,inliner:i,options:{}}};r.exports=o;function l(k,L){return L=L||{},S(L),Promise.resolve(k).then(function(M){return O(M,L.filter,!0)}).then(P).then(Y).then(T).then(function(M){return A(M,L.width||t.width(k),L.height||t.height(k))});function T(M){return L.bgcolor&&(M.style.backgroundColor=L.bgcolor),L.width&&(M.style.width=L.width+"px"),L.height&&(M.style.height=L.height+"px"),L.style&&Object.keys(L.style).forEach(function(F){M.style[F]=L.style[F]}),M}}function h(k,L){return $(k,L||{}).then(function(T){return T.getContext("2d").getImageData(0,0,t.width(k),t.height(k)).data})}function f(k,L){return $(k,L||{}).then(function(T){return T.toDataURL()})}function p(k,L){return L=L||{},$(k,L).then(function(T){return T.toDataURL("image/jpeg",L.quality||1)})}function g(k,L){return $(k,L||{}).then(t.canvasToBlob)}function S(k){typeof k.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=a.imagePlaceholder:o.impl.options.imagePlaceholder=k.imagePlaceholder,typeof k.cacheBust>"u"?o.impl.options.cacheBust=a.cacheBust:o.impl.options.cacheBust=k.cacheBust}function $(k,L){return l(k,L).then(t.makeImage).then(t.delay(100)).then(function(M){var F=T(k);return F.getContext("2d").drawImage(M,0,0),F});function T(M){var F=document.createElement("canvas");if(F.width=L.width||t.width(M),F.height=L.height||t.height(M),L.bgcolor){var I=F.getContext("2d");I.fillStyle=L.bgcolor,I.fillRect(0,0,F.width,F.height)}return F}}function O(k,L,T){if(!T&&L&&!L(k))return Promise.resolve();return Promise.resolve(k).then(M).then(function(z){return F(k,z,L)}).then(function(z){return I(k,z)});function M(z){return z instanceof HTMLCanvasElement?t.makeImage(z.toDataURL()):z.cloneNode(!1)}function F(z,R,K){var he=z.childNodes;if(he.length===0)return Promise.resolve(R);return C(R,t.asArray(he),K).then(function(){return R});function C(B,fe,ae){var Ee=Promise.resolve();return fe.forEach(function(Ye){Ee=Ee.then(function(){return O(Ye,ae)}).then(function(it){it&&B.appendChild(it)})}),Ee}}function I(z,R){if(!(R instanceof Element))return R;return Promise.resolve().then(K).then(he).then(C).then(B).then(function(){return R});function K(){fe(window.getComputedStyle(z),R.style);function fe(ae,Ee){ae.cssText?Ee.cssText=ae.cssText:Ye(ae,Ee);function Ye(it,lt){t.asArray(it).forEach(function(ce){lt.setProperty(ce,it.getPropertyValue(ce),it.getPropertyPriority(ce))})}}}function he(){[":before",":after"].forEach(function(ae){fe(ae)});function fe(ae){var Ee=window.getComputedStyle(z,ae),Ye=Ee.getPropertyValue("content");if(Ye===""||Ye==="none")return;var it=t.uid();R.className=R.className+" "+it;var lt=document.createElement("style");lt.appendChild(ce(it,ae,Ee)),R.appendChild(lt);function ce(ge,Ae,Ue){var st="."+ge+":"+Ae,We=Ue.cssText?Yi(Ue):us(Ue);return document.createTextNode(st+"{"+We+"}");function Yi(nt){var xr=nt.getPropertyValue("content");return nt.cssText+" content: "+xr+";"}function us(nt){return t.asArray(nt).map(xr).join("; ")+";";function xr(_i){return _i+": "+nt.getPropertyValue(_i)+(nt.getPropertyPriority(_i)?" !important":"")}}}}}function C(){z instanceof HTMLTextAreaElement&&(R.innerHTML=z.value),z instanceof HTMLInputElement&&R.setAttribute("value",z.value)}function B(){R instanceof SVGElement&&(R.setAttribute("xmlns","http://www.w3.org/2000/svg"),R instanceof SVGRectElement&&["width","height"].forEach(function(fe){var ae=R.getAttribute(fe);ae&&R.style.setProperty(fe,ae)}))}}}function P(k){return s.resolveAll().then(function(L){var T=document.createElement("style");return k.appendChild(T),T.appendChild(document.createTextNode(L)),k})}function Y(k){return n.inlineAll(k).then(function(){return k})}function A(k,L,T){return Promise.resolve(k).then(function(M){return M.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(M)}).then(t.escapeXhtml).then(function(M){return'<foreignObject x="0" y="0" width="100%" height="100%">'+M+"</foreignObject>"}).then(function(M){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+L+'" height="'+T+'">'+M+"</svg>"}).then(function(M){return"data:image/svg+xml;charset=utf-8,"+M})}function D(){return{escape:B,parseExtension:L,mimeType:T,dataAsUrl:C,isDataUrl:M,canvasToBlob:I,resolveUrl:z,getAndEncode:he,uid:R(),delay:fe,asArray:ae,escapeXhtml:Ee,makeImage:K,width:Ye,height:it};function k(){var ce="application/font-woff",ge="image/jpeg";return{woff:ce,woff2:ce,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:ge,jpeg:ge,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function L(ce){var ge=/\.([^\.\/]*?)$/g.exec(ce);return ge?ge[1]:""}function T(ce){var ge=L(ce).toLowerCase();return k()[ge]||""}function M(ce){return ce.search(/^(data:)/)!==-1}function F(ce){return new Promise(function(ge){for(var Ae=window.atob(ce.toDataURL().split(",")[1]),Ue=Ae.length,st=new Uint8Array(Ue),We=0;We<Ue;We++)st[We]=Ae.charCodeAt(We);ge(new Blob([st],{type:"image/png"}))})}function I(ce){return ce.toBlob?new Promise(function(ge){ce.toBlob(ge)}):F(ce)}function z(ce,ge){var Ae=document.implementation.createHTMLDocument(),Ue=Ae.createElement("base");Ae.head.appendChild(Ue);var st=Ae.createElement("a");return Ae.body.appendChild(st),Ue.href=ge,st.href=ce,st.href}function R(){var ce=0;return function(){return"u"+ge()+ce++;function ge(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function K(ce){return new Promise(function(ge,Ae){var Ue=new Image;Ue.onload=function(){ge(Ue)},Ue.onerror=Ae,Ue.src=ce})}function he(ce){var ge=3e4;return o.impl.options.cacheBust&&(ce+=(/\?/.test(ce)?"&":"?")+new Date().getTime()),new Promise(function(Ae){var Ue=new XMLHttpRequest;Ue.onreadystatechange=Yi,Ue.ontimeout=us,Ue.responseType="blob",Ue.timeout=ge,Ue.open("GET",ce,!0),Ue.send();var st;if(o.impl.options.imagePlaceholder){var We=o.impl.options.imagePlaceholder.split(/,/);We&&We[1]&&(st=We[1])}function Yi(){if(Ue.readyState===4){if(Ue.status!==200){st?Ae(st):nt("cannot fetch resource: "+ce+", status: "+Ue.status);return}var xr=new FileReader;xr.onloadend=function(){var _i=xr.result.split(/,/)[1];Ae(_i)},xr.readAsDataURL(Ue.response)}}function us(){st?Ae(st):nt("timeout of "+ge+"ms occured while fetching resource: "+ce)}function nt(xr){console.error(xr),Ae("")}})}function C(ce,ge){return"data:"+ge+";base64,"+ce}function B(ce){return ce.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function fe(ce){return function(ge){return new Promise(function(Ae){setTimeout(function(){Ae(ge)},ce)})}}function ae(ce){for(var ge=[],Ae=ce.length,Ue=0;Ue<Ae;Ue++)ge.push(ce[Ue]);return ge}function Ee(ce){return ce.replace(/#/g,"%23").replace(/\n/g,"%0A")}function Ye(ce){var ge=lt(ce,"border-left-width"),Ae=lt(ce,"border-right-width");return ce.scrollWidth+ge+Ae}function it(ce){var ge=lt(ce,"border-top-width"),Ae=lt(ce,"border-bottom-width");return ce.scrollHeight+ge+Ae}function lt(ce,ge){var Ae=window.getComputedStyle(ce).getPropertyValue(ge);return parseFloat(Ae.replace("px",""))}}function X(){var k=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:F,shouldProcess:L,impl:{readUrls:T,inline:M}};function L(I){return I.search(k)!==-1}function T(I){for(var z=[],R;(R=k.exec(I))!==null;)z.push(R[1]);return z.filter(function(K){return!t.isDataUrl(K)})}function M(I,z,R,K){return Promise.resolve(z).then(function(C){return R?t.resolveUrl(C,R):C}).then(K||t.getAndEncode).then(function(C){return t.dataAsUrl(C,t.mimeType(z))}).then(function(C){return I.replace(he(z),"$1"+C+"$3")});function he(C){return new RegExp(`(url\\(['"]?)(`+t.escape(C)+`)(['"]?\\))`,"g")}}function F(I,z,R){if(K())return Promise.resolve(I);return Promise.resolve(I).then(T).then(function(he){var C=Promise.resolve(I);return he.forEach(function(B){C=C.then(function(fe){return M(fe,B,z,R)})}),C});function K(){return!L(I)}}}function W(){return{resolveAll:k,impl:{readAll:L}};function k(){return L().then(function(T){return Promise.all(T.map(function(M){return M.resolve()}))}).then(function(T){return T.join(`
`)})}function L(){return Promise.resolve(t.asArray(document.styleSheets)).then(M).then(T).then(function(I){return I.map(F)});function T(I){return I.filter(function(z){return z.type===CSSRule.FONT_FACE_RULE}).filter(function(z){return i.shouldProcess(z.style.getPropertyValue("src"))})}function M(I){var z=[];return I.forEach(function(R){try{t.asArray(R.cssRules||[]).forEach(z.push.bind(z))}catch(K){console.log("Error while reading CSS rules from "+R.href,K.toString())}}),z}function F(I){return{resolve:function(){var R=(I.parentStyleSheet||{}).href;return i.inlineAll(I.cssText,R)},src:function(){return I.style.getPropertyValue("src")}}}}}function se(){return{inlineAll:L,impl:{newImage:k}};function k(T){return{inline:M};function M(F){return t.isDataUrl(T.src)?Promise.resolve():Promise.resolve(T.src).then(F||t.getAndEncode).then(function(I){return t.dataAsUrl(I,t.mimeType(T.src))}).then(function(I){return new Promise(function(z,R){T.onload=z,T.onerror=R,T.src=I})})}}function L(T){if(!(T instanceof Element))return Promise.resolve(T);return M(T).then(function(){return T instanceof HTMLImageElement?k(T).inline():Promise.all(t.asArray(T.childNodes).map(function(F){return L(F)}))});function M(F){var I=F.style.getPropertyValue("background");return I?i.inlineAll(I).then(function(z){F.style.setProperty("background",z,F.style.getPropertyPriority("background"))}).then(function(){return F}):Promise.resolve(F)}}}})()})(Su);var tv=Su.exports;const rv=Qm(tv);var jl={exports:{}};const iv={},sv=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),Fs=ev(sv);/**
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
 */(function(r,e){(function(t,i){i(e)})(Jm,function(t){var i={},s={exports:{}};(function(q){var te=function(we){return typeof we<"u"&&we.versions!=null&&we.versions.node!=null&&we+""=="[object process]"};q.exports.isNode=te,q.exports.platform=typeof process<"u"&&te(process)?"node":"browser";var ee=q.exports.platform==="node"&&Fs;q.exports.isMainThread=q.exports.platform==="node"?(!ee||ee.isMainThread)&&!process.connected:typeof Window<"u",q.exports.cpus=q.exports.platform==="browser"?self.navigator.hardwareConcurrency:Fs.cpus().length})(s);var n=s.exports,a={},o;function l(){if(o)return a;o=1;function q(we,Ze){var N=this;if(!(this instanceof q))throw new SyntaxError("Constructor must be called with the new operator");if(typeof we!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var ct=[],qe=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var kt=function(G,me){ct.push(G),qe.push(me)};this.then=function(J,G){return new q(function(me,Pe){var Ve=J?te(J,me,Pe):me,Wt=G?te(G,me,Pe):Pe;kt(Ve,Wt)},N)};var Tt=function(G){return N.resolved=!0,N.rejected=!1,N.pending=!1,ct.forEach(function(me){me(G)}),kt=function(Pe,Ve){Pe(G)},Tt=re=function(){},N},re=function(G){return N.resolved=!1,N.rejected=!0,N.pending=!1,qe.forEach(function(me){me(G)}),kt=function(Pe,Ve){Ve(G)},Tt=re=function(){},N};this.cancel=function(){return Ze?Ze.cancel():re(new ee),N},this.timeout=function(J){if(Ze)Ze.timeout(J);else{var G=setTimeout(function(){re(new Le("Promise timed out after "+J+" ms"))},J);N.always(function(){clearTimeout(G)})}return N},we(function(J){Tt(J)},function(J){re(J)})}function te(we,Ze,N){return function(ct){try{var qe=we(ct);qe&&typeof qe.then=="function"&&typeof qe.catch=="function"?qe.then(Ze,N):Ze(qe)}catch(kt){N(kt)}}}q.prototype.catch=function(we){return this.then(null,we)},q.prototype.always=function(we){return this.then(we,we)},q.prototype.finally=function(we){var Ze=this,N=function(){return new q(function(qe){return qe()}).then(we).then(function(){return Ze})};return this.then(N,N)},q.all=function(we){return new q(function(Ze,N){var ct=we.length,qe=[];ct?we.forEach(function(kt,Tt){kt.then(function(re){qe[Tt]=re,ct--,ct==0&&Ze(qe)},function(re){ct=0,N(re)})}):Ze(qe)})},q.defer=function(){var we={};return we.promise=new q(function(Ze,N){we.resolve=Ze,we.reject=N}),we};function ee(we){this.message=we||"promise cancelled",this.stack=new Error().stack}ee.prototype=new Error,ee.prototype.constructor=Error,ee.prototype.name="CancellationError",q.CancellationError=ee;function Le(we){this.message=we||"timeout exceeded",this.stack=new Error().stack}return Le.prototype=new Error,Le.prototype.constructor=Error,Le.prototype.name="TimeoutError",q.TimeoutError=Le,a.Promise=q,a}function h(q,te){(te==null||te>q.length)&&(te=q.length);for(var ee=0,Le=Array(te);ee<te;ee++)Le[ee]=q[ee];return Le}function f(q,te){var ee=typeof Symbol<"u"&&q[Symbol.iterator]||q["@@iterator"];if(!ee){if(Array.isArray(q)||(ee=Y(q))||te){ee&&(q=ee);var Le=0,we=function(){};return{s:we,n:function(){return Le>=q.length?{done:!0}:{done:!1,value:q[Le++]}},e:function(qe){throw qe},f:we}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ze,N=!0,ct=!1;return{s:function(){ee=ee.call(q)},n:function(){var qe=ee.next();return N=qe.done,qe},e:function(qe){ct=!0,Ze=qe},f:function(){try{N||ee.return==null||ee.return()}finally{if(ct)throw Ze}}}}function p(q,te,ee){return(te=O(te))in q?Object.defineProperty(q,te,{value:ee,enumerable:!0,configurable:!0,writable:!0}):q[te]=ee,q}function g(q,te){var ee=Object.keys(q);if(Object.getOwnPropertySymbols){var Le=Object.getOwnPropertySymbols(q);te&&(Le=Le.filter(function(we){return Object.getOwnPropertyDescriptor(q,we).enumerable})),ee.push.apply(ee,Le)}return ee}function S(q){for(var te=1;te<arguments.length;te++){var ee=arguments[te]!=null?arguments[te]:{};te%2?g(Object(ee),!0).forEach(function(Le){p(q,Le,ee[Le])}):Object.getOwnPropertyDescriptors?Object.defineProperties(q,Object.getOwnPropertyDescriptors(ee)):g(Object(ee)).forEach(function(Le){Object.defineProperty(q,Le,Object.getOwnPropertyDescriptor(ee,Le))})}return q}function $(q,te){if(typeof q!="object"||!q)return q;var ee=q[Symbol.toPrimitive];if(ee!==void 0){var Le=ee.call(q,te||"default");if(typeof Le!="object")return Le;throw new TypeError("@@toPrimitive must return a primitive value.")}return(te==="string"?String:Number)(q)}function O(q){var te=$(q,"string");return typeof te=="symbol"?te:te+""}function P(q){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(te){return typeof te}:function(te){return te&&typeof Symbol=="function"&&te.constructor===Symbol&&te!==Symbol.prototype?"symbol":typeof te},P(q)}function Y(q,te){if(q){if(typeof q=="string")return h(q,te);var ee={}.toString.call(q).slice(8,-1);return ee==="Object"&&q.constructor&&(ee=q.constructor.name),ee==="Map"||ee==="Set"?Array.from(q):ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee)?h(q,te):void 0}}var A={exports:{}},D={},X;function W(){return X||(X=1,D.validateOptions=function(te,ee,Le){if(te){var we=te?Object.keys(te):[],Ze=we.find(function(ct){return!ee.includes(ct)});if(Ze)throw new Error('Object "'+Le+'" contains an unknown option "'+Ze+'"');var N=ee.find(function(ct){return Object.prototype[ct]&&!we.includes(ct)});if(N)throw new Error('Object "'+Le+'" contains an inherited option "'+N+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return te}},D.workerOptsNames=["credentials","name","type"],D.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],D.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),D}var se,k;function L(){return k||(k=1,se=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n},o={};function i(e,n){var t=this;if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if("function"!=typeof e)throw new SyntaxError("Function parameter handler(resolve, reject) missing");var r=[],o=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var a=function(e,n){r.push(e),o.push(n)};this.then=function(e,n){return new i((function(t,r){var o=e?u(e,t,r):t,i=n?u(n,t,r):r;a(o,i)}),t)};var f=function(e){return t.resolved=!0,t.rejected=!1,t.pending=!1,r.forEach((function(n){n(e)})),a=function(n,t){n(e)},f=d=function(){},t},d=function(e){return t.resolved=!1,t.rejected=!0,t.pending=!1,o.forEach((function(n){n(e)})),a=function(n,t){t(e)},f=d=function(){},t};this.cancel=function(){return n?n.cancel():d(new s),t},this.timeout=function(e){if(n)n.timeout(e);else{var r=setTimeout((function(){d(new c("Promise timed out after "+e+" ms"))}),e);t.always((function(){clearTimeout(r)}))}return t},e((function(e){f(e)}),(function(e){d(e)}))}function u(e,n,t){return function(r){try{var o=e(r);o&&"function"==typeof o.then&&"function"==typeof o.catch?o.then(n,t):n(o)}catch(e){t(e)}}}function s(e){this.message=e||"promise cancelled",this.stack=(new Error).stack}function c(e){this.message=e||"timeout exceeded",this.stack=(new Error).stack}return i.prototype.catch=function(e){return this.then(null,e)},i.prototype.always=function(e){return this.then(e,e)},i.prototype.finally=function(e){var n=this,t=function(){return new i((function(e){return e()})).then(e).then((function(){return n}))};return this.then(t,t)},i.all=function(e){return new i((function(n,t){var r=e.length,o=[];r?e.forEach((function(e,i){e.then((function(e){o[i]=e,0==--r&&n(o)}),(function(e){r=0,t(e)}))})):n(o)}))},i.defer=function(){var e={};return e.promise=new i((function(n,t){e.resolve=n,e.reject=t})),e},s.prototype=new Error,s.prototype.constructor=Error,s.prototype.name="CancellationError",i.CancellationError=s,c.prototype=new Error,c.prototype.constructor=Error,c.prototype.name="TimeoutError",i.TimeoutError=c,o.Promise=i,function(n){var t=r,i=o.Promise,u="__workerpool-cleanup__",s={exit:function(){}},c={addAbortListener:function(e){s.abortListeners.push(e)},emit:s.emit};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)s.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},s.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var a;try{a=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(a&&null!==a.parentPort){var f=a.parentPort;s.send=f.postMessage.bind(f),s.on=f.on.bind(f),s.exit=process.exit.bind(process)}else s.on=process.on.bind(process),s.send=function(e){process.send(e)},s.on("disconnect",(function(){process.exit(1)})),s.exit=process.exit.bind(process)}function d(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function l(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}s.methods={},s.methods.run=function(e,n){var t=new Function("return ("+e+").apply(this, arguments);");return t.worker=c,t.apply(t,n)},s.methods.methods=function(){return Object.keys(s.methods)},s.terminationHandler=void 0,s.abortListenerTimeout=1e3,s.abortListeners=[],s.terminateAndExit=function(e){var n=function(){s.exit(e)};if(!s.terminationHandler)return n();var t=s.terminationHandler(e);return l(t)?(t.then(n,n),t):(n(),new i((function(e,n){n(new Error("Worker terminating"))})))},s.cleanup=function(e){if(!s.abortListeners.length)return s.send({id:e,method:u,error:d(new Error("Worker terminating"))}),new i((function(e){e()}));var n,t=s.abortListeners.map((function(e){return e()})),r=new i((function(e,t){n=setTimeout((function(){t(new Error("Timeout occured waiting for abort handler, killing worker"))}),s.abortListenerTimeout)})),o=i.all(t).then((function(){clearTimeout(n),s.abortListeners.length||(s.abortListeners=[])}),(function(){clearTimeout(n),s.exit()}));return i.all([o,r]).then((function(){s.send({id:e,method:u,error:null})}),(function(n){s.send({id:e,method:u,error:n?d(n):null})}))};var p=null;s.on("message",(function(e){if("__workerpool-terminate__"===e)return s.terminateAndExit(0);if(e.method===u)return s.cleanup(e.id);try{var n=s.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');p=e.id;var r=n.apply(n,e.params);l(r)?r.then((function(n){n instanceof t?s.send({id:e.id,result:n.message,error:null},n.transfer):s.send({id:e.id,result:n,error:null}),p=null})).catch((function(n){s.send({id:e.id,result:null,error:d(n)}),p=null})):(r instanceof t?s.send({id:e.id,result:r.message,error:null},r.transfer):s.send({id:e.id,result:r,error:null}),p=null)}catch(n){s.send({id:e.id,result:null,error:d(n)})}})),s.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(s.methods[t]=e[t],s.methods[t].worker=c);n&&(s.terminationHandler=n.onTerminate,s.abortListenerTimeout=n.abortListenerTimeout||1e3),s.send("ready")},s.emit=function(e){if(p){if(e instanceof t)return void s.send({id:p,isEvent:!0,payload:e.message},e.transfer);s.send({id:p,isEvent:!0,payload:e})}},n.add=s.register,n.emit=s.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),se}var T;function M(){if(T)return A.exports;T=1;var q=l(),te=q.Promise,ee=n,Le=W(),we=Le.validateOptions,Ze=Le.forkOptsNames,N=Le.workerThreadOptsNames,ct=Le.workerOptsNames,qe="__workerpool-terminate__",kt="__workerpool-cleanup__";function Tt(){var xe=J();if(!xe)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return xe}function re(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":P(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function J(){try{return Fs}catch(xe){if(P(xe)==="object"&&xe!==null&&xe.code==="MODULE_NOT_FOUND")return null;throw xe}}function G(){if(ee.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var xe=new Blob([L()],{type:"text/javascript"});return window.URL.createObjectURL(xe)}else return __dirname+"/worker.js"}function me(xe,De){if(De.workerType==="web")return re(),Pe(xe,De.workerOpts,Worker);if(De.workerType==="thread")return Z=Tt(),Ve(xe,Z,De);if(De.workerType==="process"||!De.workerType)return Wt(xe,Yt(De),Fs);if(ee.platform==="browser")return re(),Pe(xe,De.workerOpts,Worker);var Z=J();return Z?Ve(xe,Z,De):Wt(xe,Yt(De),Fs)}function Pe(xe,De,Z){we(De,ct,"workerOpts");var _e=new Z(xe,De);return _e.isBrowserWorker=!0,_e.on=function(Re,Me){this.addEventListener(Re,function(Qe){Me(Qe.data)})},_e.send=function(Re,Me){this.postMessage(Re,Me)},_e}function Ve(xe,De,Z){var _e,Re;we(Z==null?void 0:Z.workerThreadOpts,N,"workerThreadOpts");var Me=new De.Worker(xe,S({stdout:(_e=Z==null?void 0:Z.emitStdStreams)!==null&&_e!==void 0?_e:!1,stderr:(Re=Z==null?void 0:Z.emitStdStreams)!==null&&Re!==void 0?Re:!1},Z==null?void 0:Z.workerThreadOpts));return Me.isWorkerThread=!0,Me.send=function(Qe,Ie){this.postMessage(Qe,Ie)},Me.kill=function(){return this.terminate(),!0},Me.disconnect=function(){this.terminate()},Z!=null&&Z.emitStdStreams&&(Me.stdout.on("data",function(Qe){return Me.emit("stdout",Qe)}),Me.stderr.on("data",function(Qe){return Me.emit("stderr",Qe)})),Me}function Wt(xe,De,Z){we(De.forkOpts,Ze,"forkOpts");var _e=Z.fork(xe,De.forkArgs,De.forkOpts),Re=_e.send;return _e.send=function(Me){return Re.call(_e,Me)},De.emitStdStreams&&(_e.stdout.on("data",function(Me){return _e.emit("stdout",Me)}),_e.stderr.on("data",function(Me){return _e.emit("stderr",Me)})),_e.isChildProcess=!0,_e}function Yt(xe){xe=xe||{};var De=process.execArgv.join(" "),Z=De.indexOf("--inspect")!==-1,_e=De.indexOf("--debug-brk")!==-1,Re=[];return Z&&(Re.push("--inspect="+xe.debugPort),_e&&Re.push("--debug-brk")),process.execArgv.forEach(function(Me){Me.indexOf("--max-old-space-size")>-1&&Re.push(Me)}),Object.assign({},xe,{forkArgs:xe.forkArgs,forkOpts:Object.assign({},xe.forkOpts,{execArgv:(xe.forkOpts&&xe.forkOpts.execArgv||[]).concat(Re),stdio:xe.emitStdStreams?"pipe":void 0})})}function ar(xe){for(var De=new Error(""),Z=Object.keys(xe),_e=0;_e<Z.length;_e++)De[Z[_e]]=xe[Z[_e]];return De}function or(xe,De){if(Object.keys(xe.processing).length===1){var Z=Object.values(xe.processing)[0];Z.options&&typeof Z.options.on=="function"&&Z.options.on(De)}}function ni(xe,De){var Z=this,_e=De||{};this.script=xe||G(),this.worker=me(this.script,_e),this.debugPort=_e.debugPort,this.forkOpts=_e.forkOpts,this.forkArgs=_e.forkArgs,this.workerOpts=_e.workerOpts,this.workerThreadOpts=_e.workerThreadOpts,this.workerTerminateTimeout=_e.workerTerminateTimeout,xe||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(Ie){or(Z,{stdout:Ie.toString()})}),this.worker.on("stderr",function(Ie){or(Z,{stderr:Ie.toString()})}),this.worker.on("message",function(Ie){if(!Z.terminated)if(typeof Ie=="string"&&Ie==="ready")Z.worker.ready=!0,Me();else{var Ht=Ie.id,bt=Z.processing[Ht];if(bt!==void 0&&(Ie.isEvent?bt.options&&typeof bt.options.on=="function"&&bt.options.on(Ie.payload):(delete Z.processing[Ht],Z.terminating===!0&&Z.terminate(),Ie.error?bt.resolver.reject(ar(Ie.error)):bt.resolver.resolve(Ie.result))),Ie.method===kt){var qt=Z.tracking[Ie.id];qt!==void 0&&(Ie.error?(clearTimeout(qt.timeoutId),qt.resolver.reject(ar(Ie.error))):(Z.tracking&&clearTimeout(qt.timeoutId),qt.resolver.resolve(qt.result))),delete Z.tracking[Ht]}}});function Re(Ie){Z.terminated=!0;for(var Ht in Z.processing)Z.processing[Ht]!==void 0&&Z.processing[Ht].resolver.reject(Ie);Z.processing=Object.create(null)}function Me(){var Ie=f(Z.requestQueue.splice(0)),Ht;try{for(Ie.s();!(Ht=Ie.n()).done;){var bt=Ht.value;Z.worker.send(bt.message,bt.transfer)}}catch(qt){Ie.e(qt)}finally{Ie.f()}}var Qe=this.worker;this.worker.on("error",Re),this.worker.on("exit",function(Ie,Ht){var bt=`Workerpool Worker terminated Unexpectedly
`;bt+="    exitCode: `"+Ie+"`\n",bt+="    signalCode: `"+Ht+"`\n",bt+="    workerpool.script: `"+Z.script+"`\n",bt+="    spawnArgs: `"+Qe.spawnargs+"`\n",bt+="    spawnfile: `"+Qe.spawnfile+"`\n",bt+="    stdout: `"+Qe.stdout+"`\n",bt+="    stderr: `"+Qe.stderr+"`\n",Re(new Error(bt))}),this.processing=Object.create(null),this.tracking=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return ni.prototype.methods=function(){return this.exec("methods")},ni.prototype.exec=function(xe,De,Z,_e){Z||(Z=te.defer());var Re=++this.lastId;this.processing[Re]={id:Re,resolver:Z,options:_e};var Me={message:{id:Re,method:xe,params:De},transfer:_e&&_e.transfer};this.terminated?Z.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(Me.message,Me.transfer):this.requestQueue.push(Me);var Qe=this;return Z.promise.catch(function(Ie){if(Ie instanceof te.CancellationError||Ie instanceof te.TimeoutError)return Qe.tracking[Re]={id:Re,resolver:te.defer()},delete Qe.processing[Re],Qe.tracking[Re].resolver.promise=Qe.tracking[Re].resolver.promise.catch(function(Ht){delete Qe.tracking[Re];var bt=Qe.terminateAndNotify(!0).then(function(){throw Ht},function(qt){throw qt});return bt}),Qe.worker.send({id:Re,method:kt}),Qe.tracking[Re].timeoutId=setTimeout(function(){Qe.tracking[Re].resolver.reject(Ie)},Qe.workerTerminateTimeout),Qe.tracking[Re].resolver.promise;throw Ie})},ni.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},ni.prototype.terminate=function(xe,De){var Z=this;if(xe){for(var _e in this.processing)this.processing[_e]!==void 0&&this.processing[_e].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}for(var Re=0,Me=Object.values(Z.tracking);Re<Me.length;Re++){var Qe=Me[Re];clearTimeout(Qe.timeoutId),Qe.resolver.reject(new Error("Worker Terminating"))}if(Z.tracking=Object.create(null),typeof De=="function"&&(this.terminationHandler=De),this.busy())this.terminating=!0;else{var Ie=function(qt){if(Z.terminated=!0,Z.cleaning=!1,Z.worker!=null&&Z.worker.removeAllListeners&&Z.worker.removeAllListeners("message"),Z.worker=null,Z.terminating=!1,Z.terminationHandler)Z.terminationHandler(qt,Z);else if(qt)throw qt};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){Ie(new Error("worker already killed!"));return}var Ht=setTimeout(function(){Z.worker&&Z.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(Ht),Z.worker&&(Z.worker.killed=!0),Ie()}),this.worker.ready?this.worker.send(qe):this.requestQueue.push({message:qe}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");Ie()}},ni.prototype.terminateAndNotify=function(xe,De){var Z=te.defer();return De&&Z.promise.timeout(De),this.terminate(xe,function(_e,Re){_e?Z.reject(_e):Z.resolve(Re)}),Z.promise},A.exports=ni,A.exports._tryRequireWorkerThreads=J,A.exports._setupProcessWorker=Wt,A.exports._setupBrowserWorker=Pe,A.exports._setupWorkerThreadWorker=Ve,A.exports.ensureWorkerThreads=Tt,A.exports}var F,I;function z(){if(I)return F;I=1;var q=65535;F=te;function te(){this.ports=Object.create(null),this.length=0}return te.prototype.nextAvailableStartingAt=function(ee){for(;this.ports[ee]===!0;)ee++;if(ee>=q)throw new Error("WorkerPool debug port limit reached: "+ee+">= "+q);return this.ports[ee]=!0,this.length++,ee},te.prototype.releasePort=function(ee){delete this.ports[ee],this.length--},F}var R,K;function he(){if(K)return R;K=1;var q=l(),te=q.Promise,ee=M(),Le=n,we=z(),Ze=new we;function N(re,J){typeof re=="string"?this.script=re||null:(this.script=null,J=re),this.workers=[],this.tasks=[],J=J||{},this.forkArgs=Object.freeze(J.forkArgs||[]),this.forkOpts=Object.freeze(J.forkOpts||{}),this.workerOpts=Object.freeze(J.workerOpts||{}),this.workerThreadOpts=Object.freeze(J.workerThreadOpts||{}),this.debugPortStart=J.debugPortStart||43210,this.nodeWorker=J.nodeWorker,this.workerType=J.workerType||J.nodeWorker||"auto",this.maxQueueSize=J.maxQueueSize||1/0,this.workerTerminateTimeout=J.workerTerminateTimeout||1e3,this.onCreateWorker=J.onCreateWorker||function(){return null},this.onTerminateWorker=J.onTerminateWorker||function(){return null},this.emitStdStreams=J.emitStdStreams||!1,J&&"maxWorkers"in J?(ct(J.maxWorkers),this.maxWorkers=J.maxWorkers):this.maxWorkers=Math.max((Le.cpus||4)-1,1),J&&"minWorkers"in J&&(J.minWorkers==="max"?this.minWorkers=this.maxWorkers:(qe(J.minWorkers),this.minWorkers=J.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&ee.ensureWorkerThreads()}N.prototype.exec=function(re,J,G){if(J&&!Array.isArray(J))throw new TypeError('Array expected as argument "params"');if(typeof re=="string"){var me=te.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var Pe=this.tasks,Ve={method:re,params:J,resolver:me,timeout:null,options:G};Pe.push(Ve);var Wt=me.promise.timeout;return me.promise.timeout=function(ar){return Pe.indexOf(Ve)!==-1?(Ve.timeout=ar,me.promise):Wt.call(me.promise,ar)},this._next(),me.promise}else{if(typeof re=="function")return this.exec("run",[String(re),J],G);throw new TypeError('Function or string expected as argument "method"')}},N.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var re=this;return this.exec("methods").then(function(J){var G={};return J.forEach(function(me){G[me]=function(){return re.exec(me,Array.prototype.slice.call(arguments))}}),G})},N.prototype._next=function(){if(this.tasks.length>0){var re=this._getWorker();if(re){var J=this,G=this.tasks.shift();if(G.resolver.promise.pending){var me=re.exec(G.method,G.params,G.resolver,G.options).then(J._boundNext).catch(function(){if(re.terminated)return J._removeWorker(re)}).then(function(){J._next()});typeof G.timeout=="number"&&me.timeout(G.timeout)}else J._next()}}},N.prototype._getWorker=function(){for(var re=this.workers,J=0;J<re.length;J++){var G=re[J];if(G.busy()===!1)return G}return re.length<this.maxWorkers?(G=this._createWorkerHandler(),re.push(G),G):null},N.prototype._removeWorker=function(re){var J=this;return Ze.releasePort(re.debugPort),this._removeWorkerFromList(re),this._ensureMinWorkers(),new te(function(G,me){re.terminate(!1,function(Pe){J.onTerminateWorker({forkArgs:re.forkArgs,forkOpts:re.forkOpts,workerThreadOpts:re.workerThreadOpts,script:re.script}),Pe?me(Pe):G(re)})})},N.prototype._removeWorkerFromList=function(re){var J=this.workers.indexOf(re);J!==-1&&this.workers.splice(J,1)},N.prototype.terminate=function(re,J){var G=this;this.tasks.forEach(function(Yt){Yt.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var me=function(ar){Ze.releasePort(ar.debugPort),this._removeWorkerFromList(ar)},Pe=me.bind(this),Ve=[],Wt=this.workers.slice();return Wt.forEach(function(Yt){var ar=Yt.terminateAndNotify(re,J).then(Pe).always(function(){G.onTerminateWorker({forkArgs:Yt.forkArgs,forkOpts:Yt.forkOpts,workerThreadOpts:Yt.workerThreadOpts,script:Yt.script})});Ve.push(ar)}),te.all(Ve)},N.prototype.stats=function(){var re=this.workers.length,J=this.workers.filter(function(G){return G.busy()}).length;return{totalWorkers:re,busyWorkers:J,idleWorkers:re-J,pendingTasks:this.tasks.length,activeTasks:J}},N.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var re=this.workers.length;re<this.minWorkers;re++)this.workers.push(this._createWorkerHandler())},N.prototype._createWorkerHandler=function(){var re=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new ee(re.script||this.script,{forkArgs:re.forkArgs||this.forkArgs,forkOpts:re.forkOpts||this.forkOpts,workerOpts:re.workerOpts||this.workerOpts,workerThreadOpts:re.workerThreadOpts||this.workerThreadOpts,debugPort:Ze.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function ct(re){if(!kt(re)||!Tt(re)||re<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function qe(re){if(!kt(re)||!Tt(re)||re<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function kt(re){return typeof re=="number"}function Tt(re){return Math.round(re)==re}return R=N,R}var C={},B,fe;function ae(){if(fe)return B;fe=1;function q(te,ee){this.message=te,this.transfer=ee}return B=q,B}var Ee;function Ye(){return Ee||(Ee=1,function(q){var te=ae(),ee=l().Promise,Le="__workerpool-terminate__",we="__workerpool-cleanup__",Ze=1e3,N={exit:function(){}},ct={addAbortListener:function(me){N.abortListeners.push(me)},emit:N.emit};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")N.on=function(G,me){addEventListener(G,function(Pe){me(Pe.data)})},N.send=function(G,me){me?postMessage(G,me):postMessage(G)};else if(typeof process<"u"){var qe;try{qe=Fs}catch(G){if(!(P(G)==="object"&&G!==null&&G.code==="MODULE_NOT_FOUND"))throw G}if(qe&&qe.parentPort!==null){var kt=qe.parentPort;N.send=kt.postMessage.bind(kt),N.on=kt.on.bind(kt),N.exit=process.exit.bind(process)}else N.on=process.on.bind(process),N.send=function(G){process.send(G)},N.on("disconnect",function(){process.exit(1)}),N.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function Tt(G){return Object.getOwnPropertyNames(G).reduce(function(me,Pe){return Object.defineProperty(me,Pe,{value:G[Pe],enumerable:!0})},{})}function re(G){return G&&typeof G.then=="function"&&typeof G.catch=="function"}N.methods={},N.methods.run=function(me,Pe){var Ve=new Function("return ("+me+").apply(this, arguments);");return Ve.worker=ct,Ve.apply(Ve,Pe)},N.methods.methods=function(){return Object.keys(N.methods)},N.terminationHandler=void 0,N.abortListenerTimeout=Ze,N.abortListeners=[],N.terminateAndExit=function(G){var me=function(){N.exit(G)};if(!N.terminationHandler)return me();var Pe=N.terminationHandler(G);return re(Pe)?(Pe.then(me,me),Pe):(me(),new ee(function(Ve,Wt){Wt(new Error("Worker terminating"))}))},N.cleanup=function(G){if(!N.abortListeners.length)return N.send({id:G,method:we,error:Tt(new Error("Worker terminating"))}),new ee(function(or){or()});var me=function(){N.exit()},Pe=function(){N.abortListeners.length||(N.abortListeners=[])},Ve=N.abortListeners.map(function(or){return or()}),Wt,Yt=new ee(function(or,ni){Wt=setTimeout(function(){ni(new Error("Timeout occured waiting for abort handler, killing worker"))},N.abortListenerTimeout)}),ar=ee.all(Ve).then(function(){clearTimeout(Wt),Pe()},function(){clearTimeout(Wt),me()});return ee.all([ar,Yt]).then(function(){N.send({id:G,method:we,error:null})},function(or){N.send({id:G,method:we,error:or?Tt(or):null})})};var J=null;N.on("message",function(G){if(G===Le)return N.terminateAndExit(0);if(G.method===we)return N.cleanup(G.id);try{var me=N.methods[G.method];if(me){J=G.id;var Pe=me.apply(me,G.params);re(Pe)?Pe.then(function(Ve){Ve instanceof te?N.send({id:G.id,result:Ve.message,error:null},Ve.transfer):N.send({id:G.id,result:Ve,error:null}),J=null}).catch(function(Ve){N.send({id:G.id,result:null,error:Tt(Ve)}),J=null}):(Pe instanceof te?N.send({id:G.id,result:Pe.message,error:null},Pe.transfer):N.send({id:G.id,result:Pe,error:null}),J=null)}else throw new Error('Unknown method "'+G.method+'"')}catch(Ve){N.send({id:G.id,result:null,error:Tt(Ve)})}}),N.register=function(G,me){if(G)for(var Pe in G)G.hasOwnProperty(Pe)&&(N.methods[Pe]=G[Pe],N.methods[Pe].worker=ct);me&&(N.terminationHandler=me.onTerminate,N.abortListenerTimeout=me.abortListenerTimeout||Ze),N.send("ready")},N.emit=function(G){if(J){if(G instanceof te){N.send({id:J,isEvent:!0,payload:G.message},G.transfer);return}N.send({id:J,isEvent:!0,payload:G})}},q.add=N.register,q.emit=N.emit}(C)),C}var it=n.platform,lt=n.isMainThread,ce=n.cpus;function ge(q,te){var ee=he();return new ee(q,te)}var Ae=i.pool=ge;function Ue(q,te){var ee=Ye();ee.add(q,te)}var st=i.worker=Ue;function We(q){var te=Ye();te.emit(q)}var Yi=i.workerEmit=We,us=l(),nt=us.Promise,xr=i.Promise=nt,_i=i.Transfer=ae(),Ko=i.platform=it,Zo=i.isMainThread=lt,Jo=i.cpus=ce;t.Promise=xr,t.Transfer=_i,t.cpus=Jo,t.default=i,t.isMainThread=Zo,t.platform=Ko,t.pool=Ae,t.worker=st,t.workerEmit=Yi,Object.defineProperty(t,"__esModule",{value:!0})})})(jl,jl.exports);var nv=jl.exports,av=()=>{const r=[];for(let e=0;e<=255;e++)r.push(`rgb(${e},${e},${e})`);return r},ov=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],lv=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],hv=av(),hi={iron:{pixels:lv,name:"IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)",slug:"iron"},jet:{pixels:ov,name:"JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)",slug:"jet"},grayscale:{pixels:hv,name:"Grayscale",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)",slug:"grayscale"}},Il,cv=(Il=class{},c(Il,"inputToDate",r=>{if(typeof r=="number"){const e=new Date;return e.setTime(r),e}return r}),Il),_t,ot=(_t=class extends cv{static humanRangeDates(e,t){return e=_t.inputToDate(e),t=_t.inputToDate(t),e.getUTCDate()===t.getUTCDate()?_t.humanDate(e):[_t.humanDate(e),_t.humanDate(t)].join(" - ")}static human(e){return`${_t.humanDate(e)} ${_t.humanTime(e,!0)} `}},c(_t,"isoDate",e=>(e=_t.inputToDate(e),Al(e,{representation:"date"}))),c(_t,"isoTime",e=>(e=_t.inputToDate(e),Al(e,{representation:"time"}))),c(_t,"isoComplete",e=>(e=_t.inputToDate(e),Al(e))),c(_t,"humanTime",(e,t=!1)=>(e=_t.inputToDate(e),$e(e,t?"HH:mm:ss":"HH:mm"))),c(_t,"humanDate",(e,t=!1)=>(e=_t.inputToDate(e),$e(e,t?"d. M.":"d. M. yyyy"))),_t),ie=class extends Map{add(r,e){this.set(r,e)}call(...r){this.forEach(e=>e(...r))}},vo=class{constructor(r){c(this,"_layers",[]);c(this,"onLayers",new ie);this.parent=r}get layers(){return this._layers}setLayers(r){r.length!==this._layers.length&&(this._layers=r,this.onLayers.call(this.layers))}getActiveFilters(){return this.layers.filter(r=>r.bypass===!1)}addFilter(r){this.layers.includes(r)&&console.error(`filter ${r} is already in ${this.parent}`),this._layers.push(r),this.onLayers.call(this.layers)}removeFilter(r){this.layers.includes(r)&&(this._layers=this.layers.filter(e=>e!==r),this.onLayers.call(this.layers))}applyFilters(){this.parent.getInstances().forEach(r=>{r.applyAllAvailableFilters()})}getFiltersArray(){}},Ct=class{constructor(r,e){c(this,"_value");c(this,"_listeners",{});this.parent=r,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(r){this._value=this.validate(r),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(r,e){r in this._listeners&&delete this._listeners[r],this._listeners[r]=e}removeListener(r){r in this._listeners&&delete this._listeners[r]}clearAllListeners(){this._listeners={}}},wt=class{constructor(r,e,t){c(this,"onSerializableChange",new ie);c(this,"_selected",!1);c(this,"onSelected",new ie);c(this,"onDeselected",new ie);c(this,"onValues",new ie);c(this,"onMoveOrResize",new ie);c(this,"layerRoot");c(this,"points",new Map);c(this,"_top");c(this,"_left");c(this,"_width");c(this,"_height");c(this,"_min");c(this,"_max");c(this,"_avg");c(this,"_color","black");c(this,"onSetColor",new ie);c(this,"_initialColor");c(this,"onSetInitialColor",new ie);c(this,"activeColor","yellow");c(this,"inactiveColor","black");c(this,"ready",!1);c(this,"nameInitial");c(this,"_name");c(this,"onSetName",new ie);this.key=r,this.file=e,this._initialColor=t,this.nameInitial=r,this._name=r,this.layerRoot=document.createElement("div"),this.layerRoot.style.position="absolute",this.layerRoot.style.top="0px",this.layerRoot.style.left="0px",this.layerRoot.style.width="100%",this.layerRoot.style.height="100%",this.layerRoot.style.overflow="hidden",this.layerRoot.id=`analysis_${this.key}`,this.renderRoot.appendChild(this.layerRoot),this.onMoveOrResize.set("call recalculate values when a control point moves",()=>{this.recalculateValues(),this.onSerializableChange.call(this,"moveOrResize")}),this.onSerializableChange.set("sync slots",()=>{this.file.group.analysisSync.syncSlots(this.file)})}serializedIsValid(r){const e=r.split(";").map(t=>t.trim());return!(e.length<2||!["point","ellipsis","rectangle"].includes(e[1])||e[1]!==this.getType())}get selected(){return this._selected}get renderRoot(){return this.file.canvasLayer.getLayerRoot()}get left(){return this._left}get top(){return this._top}get width(){return this._width}get height(){return this._height}get right(){return this._left+this._width}get bottom(){return this._top+this._height}setTop(r){if(isNaN(r)||r===this.top)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"top");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"top")}setLeft(r){if(isNaN(r)||r===this.left)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"left");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"left")}setWidth(r){if(r===this.height)return;const e=this.validateWidth(r);!isNaN(e)&&e!==this.width&&(this._width=e,this.onSetWidth(e),this.onSerializableChange.call(this,"width"))}setHeight(r){if(r===this.height)return;const e=this.validateHeight(r);!isNaN(e)&&e!==this.height&&(this._height=e,this.onSetHeight(e),this.onSerializableChange.call(this,"height"))}setBottom(r){if(isNaN(r)||r===this.bottom)return;const{top:e,height:t}=this.getVerticalDimensionFromNewValue(r,"bottom");let i=!1;e!==this.top&&(this._top=e,this.onSetTop(e),i=!0),t!==this.height&&(this._height=t,this.onSetHeight(t),i=!0),i&&this.onSerializableChange.call(this,"bottom")}setRight(r){if(isNaN(r)||r===this.right)return;const{left:e,width:t}=this.getHorizontalDimensionsFromNewValue(r,"right");let i=!1;e!==this.left&&(this._left=e,this.onSetLeft(e),i=!0),t!==this.width&&(this._width=t,this.onSetWidth(t),i=!0),i&&this.onSerializableChange.call(this,"right")}get layers(){return this.file.analysis.layers}get min(){return this._min}get max(){return this._max}get avg(){return this._avg}dangerouslySetValues(r,e=void 0,t=void 0){this._avg=r,this._min=e,this._max=t,this.onValues.call(this.min,this.max,this.avg)}get arrayOfPoints(){return Array.from(this.points.values())}get arrayOfActivePoints(){return this.arrayOfPoints.filter(r=>r.active)}get color(){return this._color}setColor(r){this._color=r,this.setColorCallback(r),this.onSetColor.call(r)}get initialColor(){return this._initialColor}setInitialColor(r){r!==this.initialColor&&(this._initialColor=r,this.onSetInitialColor.call(r),this.onSerializableChange.call(this,"color"),this.selected===!0&&this.setColor(r))}get onGraphActivation(){return this.graph.onGraphActivation}get name(){return this._name}setName(r){r!==this.name&&(this._name=r,this.onSerializableChange.call(this,"name"),this.onSetName.call(r))}remove(){this.setDeselected(),this.renderRoot.removeChild(this.layerRoot)}setSelected(r=!1,e=!0){if(this.selected===!0)return;this._selected=!0,this.onSelected.call(this),this.setColor(this.initialColor),r===!0&&this.layers.all.filter(i=>i.key!==this.key).forEach(i=>{i.selected&&i.setDeselected(!1)}),e===!0&&this.layers.onSelectionChange.call(this.layers.selectedOnly);const t=this.file.slots.getAnalysisSlot(this);t&&this.file.group.analysisSync.setSlotSelected(this.file,t)}setDeselected(r=!0){if(this.selected===!1)return;this._selected=!1,this.onDeselected.call(this),this.setColor(this.inactiveColor),this.arrayOfActivePoints.forEach(t=>t.deactivate()),r===!0&&this.file.analysis.layers.onSelectionChange.call(this.file.analysis.layers.selectedOnly);const e=this.file.slots.getAnalysisSlot(this);e&&this.file.group.analysisSync.setSlotDeselected(this.file,e)}recalculateValues(){const{min:r,max:e,avg:t}=this.getValues();this._min=r,this._max=e,this._avg=t,this.onValues.call(this.min,this.max,this.avg)}static serializedSegmentsHasExact(r,e){return!!r.find(t=>t===e)}static serializedGetStringValueByKey(r,e){const t=new RegExp(`${e}:*`),i=r.find(s=>{if(s.match(t))return isNaN(parseInt(s.split(":")[1]))});return i==null?void 0:i.split(":")[1].trim()}static serializedGetNumericalValueByKey(r,e){const t=new RegExp(`${e}:\\d+`),i=r.find(s=>s.match(t));if(i!==void 0)return parseInt(i.split(":")[1])}},$u=class{constructor(r,e,t,i,s,n,a){c(this,"pxX");c(this,"_x");c(this,"onX",new ie);c(this,"pxY");c(this,"_y");c(this,"onY",new ie);c(this,"_color");c(this,"_active",!1);c(this,"_isHover",!1);c(this,"_isDragging",!1);c(this,"container");c(this,"innerElement");c(this,"onMouseEnter",new ie);c(this,"onMouseLeave",new ie);c(this,"onActivate",new ie);c(this,"onDeactivate",new ie);this.key=r,this.analysis=i,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this._x=t,this._y=e,this._color=s,this.container=document.createElement("div"),this.container.style.position="absolute",this.container.id=`analysis_${this.analysis.key}_${this.key}_${this.file.id}`,this.innerElement=this.createInnerElement(),this.container.appendChild(this.innerElement),this.setColor(s),this.setXDirectly(t,n),this.setYDirectly(e,a),this.root.appendChild(this.container)}get file(){return this.analysis.file}get x(){return this._x}get y(){return this._y}setXFromTool(r){const{x:e,placement:t}=this.analyzeXFromTool(r);if(this.mayMoveToX(e)){const i=this.x;this._x=e;const s=this.getXStyle(e,t);this.container.style.left=s,this.sideEffectOnXFromTool(e,t),this.onX.call(this.x,i)}}setXDirectly(r,e){if(this.mayMoveToX(r)){const t=this.x;this._x=r;const i=this.getXStyle(r,e);this.container.style.left=i,this.onX.call(this.x,t)}}setYFromTool(r){const{y:e,placement:t}=this.analyzeYFromTool(r);if(this.mayMoveToY(e)){const i=this.y;this._y=e;const s=this.getYStyle(e,t);this.container.style.top=s,this.sideEffectOnYFromTool(e,t),this.onY.call(this.y,i)}}setYDirectly(r,e){if(this.mayMoveToY(r)){const t=this.y;this._y=r;const i=this.getYStyle(r,e);this.container.style.top=i,this.onY.call(this.y,t)}}getXStyle(r,e){const t=this.calculatePercentageX(r),i=e===1?0:e===3?this.pxX:this.pxX/2;return this.formatPositionStyle(t,i)}getYStyle(r,e){const t=this.calculatePercentageY(r),i=e===1?0:e===3?this.pxY:this.pxY/2;return this.formatPositionStyle(t,i)}formatPositionStyle(r,e){return e===0||isNaN(e)?`${r}%`:`calc( ${r}% + ${e}% )`}get color(){return this._color}setColor(r){this._color=r,this.onSetColor(r)}get initialColor(){return this.analysis.initialColor}get activeColor(){return this.analysis.activeColor}get inactiveColor(){return this.analysis.inactiveColor}get active(){return this._active}get isHover(){return this._isHover}get isDragging(){return this._isDragging}get root(){return this.analysis.layerRoot}isWithin(r,e){const t=this.getRadius()/2,i=this.x-t,s=this.x+t,n=this.y-t,a=this.y+t;return e>=i&&e<=s&&r>=n&&r<=a}isInSelectedLayer(){return this.analysis.selected}calculatePercentageX(r){return r/this.analysis.file.width*100}calculatePercentageY(r){return r/this.analysis.file.height*100}getPercentageX(){return this.x/this.analysis.file.width*100}getPercentageY(){return this.y/this.analysis.file.height*100}getPercentageCoordinates(){const r=this.getPercentageX(),e=this.getPercentageY();return{x:r,y:e}}mouseEnter(){this.isHover===!1&&(this._isHover=!0,this.actionOnMouseEnter(),this.onMouseEnter.call(this))}mouseLeave(){this.isHover===!0&&(this._isHover=!1,this.actionOnMouseLeave(),this.onMouseLeave.call(this))}activate(){this._active=!0,this.actionOnActivate()}deactivate(){this._active=!1,this.actionOnDeactivate()}},dr,dv=(dr=class extends $u{constructor(t,i,s,n,a){super(t,i,s,n,a,2,2);c(this,"axisX");c(this,"axisY");c(this,"center");this.axisX=this.buildAxisX(),this.axisY=this.buildAxisY(),this.center=this.buildCenter(),this.innerElement.appendChild(this.axisX),this.innerElement.appendChild(this.axisY),this.innerElement.appendChild(this.center),this.analysis.onValues.set(this.key,()=>{const o=this.analysis.file.getColorAtPoint(this.x,this.y);this.center&&o&&(this.center.style.backgroundColor=o)})}static sizePx(t=1){return Math.round(dr.size*t).toString()+"px"}analyzeXFromTool(t){return{x:t,placement:2}}analyzeYFromTool(t){return{y:t,placement:2}}sideEffectOnXFromTool(){this.analysis.setLeft(this.x)}sideEffectOnYFromTool(){this.analysis.setTop(this.y)}mayMoveToX(t){return t<=this.file.width&&t>=0}mayMoveToY(t){return t<=this.file.height&&t>=0}createInnerElement(){const t=document.createElement("div");return t.classList.add("innerElement"),t.style.position="absolute",t.style.top=dr.sizePx(-.5),t.style.left=dr.sizePx(-.5),t.style.width=dr.sizePx(),t.style.height=dr.sizePx(),t}buildAxisX(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="100%",t.style.height="1px",t.style.left="0px",t.style.top=dr.sizePx(.5),t}buildAxisY(){const t=document.createElement("div");return t.style.position="absolute",t.style.width="1px",t.style.height="100%",t.style.left=dr.sizePx(.5),t.style.top="0px",t}buildCenter(){const t=document.createElement("div");t.style.position="absolute",t.style.top=`calc( ${dr.sizePx(.5)} - 3px )`,t.style.left=`calc( ${dr.sizePx(.5)} - 3px )`,t.style.width="5px",t.style.height="5px",t.style.borderStyle="solid",t.style.borderWidth="1px";const i=this.analysis.file.getColorAtPoint(this.x,this.y);return i&&(t.style.backgroundColor=i),t}onSetColor(t){this.axisX&&(this.axisX.style.backgroundColor=t),this.axisY&&(this.axisY.style.backgroundColor=t),this.center&&(this.center.style.borderColor=t)}actionOnMouseEnter(){this.isInSelectedLayer()&&(this.setColor(this.activeColor),this.setBoxShadow("white"))}actionOnMouseLeave(){this.isInSelectedLayer()?this.setColor(this.analysis.initialColor):this.setColor(this.inactiveColor),this.setBoxShadow(void 0)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.inactiveColor)}getRadius(){return 10}setBoxShadow(t=void 0){var i,s,n;if(t===void 0)(i=this.axisX)==null||i.style.removeProperty("box-shadow"),(s=this.axisY)==null||s.style.removeProperty("box-shadow"),(n=this.center)==null||n.style.removeProperty("box-shadow");else{const a=`0 0 5px 2px ${t}`;this.axisX&&(this.axisX.style.boxShadow=a),this.axisY&&(this.axisY.style.boxShadow=a),this.center&&(this.center.style.boxShadow=a)}}},c(dr,"size",20),dr),Sr=class _u extends wt{constructor(t,i,s,n,a){super(t,s,i);c(this,"center");c(this,"_graph");this._top=n,this._left=a,this._width=0,this._height=0,this.center=new dv("center",n,a,this,i),this.points.set("center",this.center),this.recalculateValues()}getType(){return"point"}get graph(){return this._graph||(this._graph=new Cu(this)),this._graph}static addAtPoint(t,i,s,n,a){return new _u(t,i,s,n,a)}setColorCallback(t){this.center.setColor(t)}isWithin(t,i){return this.center.isWithin(i,t)}getValues(){const t=this.file.getTemperatureAtPoint(this.center.x,this.center.y);return{min:t,max:t,avg:t}}async getAnalysisData(){return await this.file.reader.pointAnalysisData(this.center.x,this.center.y)}validateWidth(){return 0}validateHeight(){return 0}onSetLeft(t){this.center.setXDirectly(t,2),this.onSerializableChange.call(this,"left")}onSetTop(t){this.center.setYDirectly(t,2),this.onSerializableChange.call(this,"top")}onSetWidth(){}onSetHeight(){}getVerticalDimensionFromNewValue(t){const i=Math.min(this.file.height-1,Math.max(0,Math.round(t)));return{top:i,bottom:i,height:0}}getHorizontalDimensionsFromNewValue(t){const i=Math.min(this.file.width-1,Math.max(0,Math.round(t)));return{left:i,right:i,width:0}}recievedSerialized(t){if(!this.serializedIsValid(t))return;const i=t.split(";").map(f=>f.trim());let s=!1;const n=i[0];n!==this.name&&this.setName(n);const a=wt.serializedSegmentsHasExact(i,"avg");a!==this.graph.state.AVG&&(this.graph.setAvgActivation(a),s=!0);const o=wt.serializedGetStringValueByKey(i,"color");o===void 0||o!==this.initialColor&&this.setInitialColor(o);const l=wt.serializedGetNumericalValueByKey(i,"top"),h=wt.serializedGetNumericalValueByKey(i,"left");l!==void 0&&(this.setTop(l),s=!0),h!==void 0&&(this.setLeft(h),s=!0),s&&this.recalculateValues()}toSerialized(){const t=[];return t.push(this.name),t.push("point"),t.push(`top:${this.top}`),t.push(`left:${this.left}`),t.push(`color:${this.initialColor}`),this.graph.state.AVG&&t.push("avg"),t.join(";")}},Cu=class{constructor(r){c(this,"_min",!1);c(this,"_max",!1);c(this,"_avg",!1);c(this,"_value");c(this,"onGraphActivation",new ie);c(this,"onGraphData",new ie);c(this,"onAnalysisSelection",new ie);this.analysis=r,this.hydrate()}get state(){return{MIN:this._min,MAX:this._max,AVG:this._avg}}get value(){return this._value}set value(r){this._value=r,this.onGraphData.call(r,this.analysis)}setMinActivation(r){this._min!==r&&(this._min=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"min"))}setMaxActivation(r){this._max!==r&&(this._max=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"max"))}setAvgActivation(r){this._avg!==r&&(this._avg=r,this.emitGraphActivation(),this.analysis.onSerializableChange.call(this.analysis,"avg"))}emitGraphActivation(){this.onGraphActivation.call(this._min,this._max,this._avg)}async hydrate(){this.analysis.onSetInitialColor.set("__graphs",()=>{this.analysis.file.analysisData.listeners.refreshOutput()}),this.analysis.onSelected.set("__graphs",e=>{this.onAnalysisSelection.call(!0,e)}),this.analysis.onMoveOrResize.set("__graphs",async e=>{const t=await e.getAnalysisData();this.value=t});const r=await this.getGraphData();this.value=r}async getGraphData(){return await this.analysis.getAnalysisData()}getGraphColors(){if(this.analysis instanceof Sr)return this._avg?[this.analysis.initialColor]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(this.analysis.initialColor)}),r}getGraphLabels(){if(this.analysis instanceof Sr)return this._avg?[this.analysis.name]:[];const r=[];return Object.entries(this.state).forEach(([e,t])=>{t&&r.push(`${this.analysis.name} ${e}`)}),r}hasDataToPrint(){return this.analysis instanceof Sr?this._avg:this._min||this._max||this._avg}getDtaAtTime(r){if(this.analysis instanceof Sr)return this._avg?[this.value[r]]:[];const e=[],t=this.value;return this._min&&e.push(t[r].min),this._max&&e.push(t[r].max),this._avg&&e.push(t[r].avg),e}},uv=class extends $u{constructor(r,e,t,i,s,n,a){super(r,e,t,i,s,n,a)}createInnerElement(){const r=document.createElement("div");return r.style.position="absolute",r.style.top="-5px",r.style.left="-5px",r.style.width="10px",r.style.height="10px",r.style.position="absolute",r.style.backgroundColor=this.color,r}actionOnMouseEnter(){this.innerElement&&this.isInSelectedLayer()&&(this.innerElement.style.boxShadow="0px 0px 10px 2px white",this.innerElement.style.borderWidth="1px",this.innerElement.style.borderStyle="solid",this.innerElement.style.borderColor="white")}actionOnMouseLeave(){this.innerElement&&(this.innerElement.style.removeProperty("box-shadow"),this.innerElement.style.removeProperty("border-width"),this.innerElement.style.removeProperty("border-style"),this.innerElement.style.removeProperty("border-color"))}},pv=class extends uv{constructor(){super(...arguments);c(this,"_pairX");c(this,"_pairY");c(this,"isMoving",!1)}get pairX(){return this._pairX}get pairY(){return this._pairY}setPairX(e){this._pairX=e}setPairY(e){this._pairY=e}getRadius(){return 10}mayMoveToX(e){return e<=this.file.width&&e>=0}mayMoveToY(e){return e<=this.file.height&&e>=0}getCenterX(){return this.analysis.left+this.analysis.width/2}getCenterY(){return this.analysis.top+this.analysis.height/2}get isLeftSide(){return this.x<=this.getCenterX()}get isTopSide(){return this.y<=this.getCenterY()}get isRightSide(){return this.x>this.getCenterX()}get isBottomSide(){return this.y>this.getCenterY()}analyzeXFromTool(e){const t=this.isLeftSide?1:3;return{x:e,placement:t}}analyzeYFromTool(e){const t=this.isTopSide?1:3;return{y:e,placement:t}}sideEffectOnXFromTool(e,t){this.pairX.setXDirectly(e,t),e>this.pairY.x?this.analysis.leftSidePoints.forEach(i=>{i.setXDirectly(i.x,1)}):this.analysis.rightSidePoints.forEach(i=>{i.setXDirectly(i.x,3)})}sideEffectOnYFromTool(e,t){this.pairY.setYDirectly(e,t),e>this.pairX.y?this.analysis.topSidePoints.forEach(i=>{i.setYDirectly(i.y,1)}):this.analysis.bottomSidePoints.forEach(i=>{i.setYDirectly(i.y,3)})}onSetColor(e){this.innerElement&&(this.innerElement.style.backgroundColor=e)}actionOnActivate(){this.innerElement&&this.setColor(this.activeColor)}actionOnDeactivate(){this.innerElement&&this.setColor(this.isInSelectedLayer()?this.initialColor:this.inactiveColor)}},ur=class extends wt{constructor(e,t,i,s,n,a,o){super(e,i,t);c(this,"wPx",(100/this.file.width/2).toString()+"%");c(this,"hPx",(100/this.file.height/2).toString()+"%");c(this,"tl");c(this,"tr");c(this,"bl");c(this,"br");c(this,"area");c(this,"_graph");let l=n,h=s;a!==void 0&&o!==void 0&&(l=n+a,h=s+o),this.area=this.buildArea(s,n,a,o),this.tl=this.addPoint("tl",s,n,1,1),this.tr=this.addPoint("tr",s,l,3,1),this.bl=this.addPoint("bl",h,n,1,3),this.br=this.addPoint("br",h,l,3,3),this.tl.setPairX(this.bl),this.tl.setPairY(this.tr),this.tr.setPairX(this.br),this.tr.setPairY(this.tl),this.bl.setPairX(this.tl),this.bl.setPairY(this.br),this.br.setPairX(this.tr),this.br.setPairY(this.bl),this.calculateBounds(),this.onMoveOrResize.set("sync the area",()=>{this.calculateBounds()})}get graph(){return this._graph||(this._graph=new Cu(this)),this._graph}isWithin(e,t){return e>=this.left&&e<=this.left+this.width&&t>=this.top&&t<=this.top+this.height}static calculateDimensionsFromCorners(e,t,i,s){const n=Math.min(e,s),a=Math.max(e,s),o=Math.min(t,i),h=Math.max(t,i)-o,f=a-n;return{top:n,left:o,width:h,height:f}}setColorCallback(e){this.points.forEach(t=>t.setColor(e)),this.area.setColor(e)}calculateBounds(){let e=this.file.width,t=0,i=this.file.height,s=0;this.points.forEach(n=>{n.x>t&&(t=n.x),n.x<e&&(e=n.x),n.y<i&&(i=n.y),n.y>s&&(s=n.y)}),this._left=e,this._top=i,this._width=t-e,this._height=s-i,this.area.left=this.left,this.area.top=this.top,this.area.height=this.height,this.area.width=this.width}addPoint(e,t,i,s,n){const a=new pv(e,t,i,this,this.color,s,n);return this.points.set(e,a),a}validateWidth(e){const t=this.file.width-1-this.left;return Math.max(0,Math.min(t,Math.round(e)))}validateHeight(e){const t=this.file.height-1-this.top;return Math.max(0,Math.min(t,Math.round(e)))}onSetLeft(e){this.area.left=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(e,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetTop(e){this.area.top=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(e,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}onSetWidth(e){this.area.width=e,this.forPoints(this.leftSidePoints,t=>{t.setXDirectly(this.left,1)}),this.forPoints(this.rightSidePoints,t=>{t.setXDirectly(this.right,3)})}onSetHeight(e){this.area.height=e,this.forPoints(this.topSidePoints,t=>{t.setYDirectly(this.top,1)}),this.forPoints(this.bottomSidePoints,t=>{t.setYDirectly(this.bottom,3)})}getVerticalDimensionFromNewValue(e,t){const i=Math.round(e),s=this.file.height-1,n=t==="top"?this.bottom:this.top;return i<=0?{top:0,bottom:n,height:n}:i>s?{top:n,bottom:s,height:s-n}:t==="bottom"?i<=this.top?{top:i,bottom:this.top,height:this.top-i}:{top:this.top,bottom:i,height:i-this.top}:i>=this.bottom?{top:this.bottom,bottom:i,height:i-this.bottom}:{top:i,bottom:this.bottom,height:this.bottom-i}}getHorizontalDimensionsFromNewValue(e,t){const i=Math.round(e),s=this.file.width-1,n=t==="left"?this.right:this.left;return i<=0?{left:0,right:n,width:n}:i>s?{left:n,right:s,width:s-n}:t==="right"?i<=this.left?{left:i,right:this.left,width:this.left-i}:{left:this.left,right:i,width:i-this.left}:i>=this.right?{left:this.right,right:i,width:i-this.right}:{left:i,right:this.right,width:this.right-i}}get leftSidePoints(){return Array.from(this.points.values()).filter(e=>e.isLeftSide)}get rightSidePoints(){return Array.from(this.points.values()).filter(e=>e.isRightSide)}get topSidePoints(){return Array.from(this.points.values()).filter(e=>e.isTopSide)}get bottomSidePoints(){return Array.from(this.points.values()).filter(e=>e.isBottomSide)}forPoints(e,t){e.forEach(i=>t(i))}recievedSerialized(e){if(!this.serializedIsValid(e))return;const t=e.split(";").map(S=>S.trim());let i=!1;const s=t[0];s!==this.name&&this.setName(s);const n=wt.serializedSegmentsHasExact(t,"avg");n!==this.graph.state.AVG&&this.graph.setAvgActivation(n);const a=wt.serializedSegmentsHasExact(t,"min");a!==this.graph.state.MIN&&this.graph.setMinActivation(a);const o=wt.serializedSegmentsHasExact(t,"max");o!==this.graph.state.MAX&&this.graph.setMaxActivation(o);const l=wt.serializedGetStringValueByKey(t,"color");l===void 0||l!==this.initialColor&&this.setInitialColor(l);const h=wt.serializedGetNumericalValueByKey(t,"top"),f=wt.serializedGetNumericalValueByKey(t,"left"),p=wt.serializedGetNumericalValueByKey(t,"width"),g=wt.serializedGetNumericalValueByKey(t,"height");h!==void 0&&h!==this.top&&(this.setTop(h),i=!0),f!==void 0&&f!==this.left&&(this.setLeft(f),i=!0),p!==void 0&&p!==this.width&&(this.setWidth(p),i=!0),g!==void 0&&g!==this.height&&(this.setHeight(g),i=!0),i&&this.recalculateValues()}toSerialized(){const e=[];return e.push(this.name),e.push(this.getType()),e.push(`color:${this.initialColor}`),e.push(`top:${this.top}`),e.push(`left:${this.left}`),e.push(`width:${this.width}`),e.push(`height:${this.height}`),this.graph.state.AVG&&e.push("avg"),this.graph.state.MIN&&e.push("min"),this.graph.state.MAX&&e.push("max"),e.join(";")}},ku=class{constructor(r,e,t,i,s){c(this,"pxX");c(this,"pxY");c(this,"element");c(this,"_top");c(this,"_width");c(this,"_left");c(this,"_height");this.analysis=r,this.pxX=100/this.analysis.file.width,this.pxY=100/this.analysis.file.height,this.build(),this.top=e,this.left=i,this.width=t,this.height=s}get fileWidth(){return this.analysis.file.width}get fileHeight(){return this.analysis.file.height}get root(){return this.analysis.layerRoot}get top(){return this._top}set top(r){this._top=r,this.element&&(this.element.style.top=`${this._top/this.fileHeight*100}%`)}get left(){return this._left}set left(r){this._left=r,this.element&&(this.element.style.left=`${this._left/this.fileWidth*100}%`)}get height(){return this._height}set height(r){this._height=r,this.element&&(this.element.style.height=`calc( ${this.height/this.fileHeight*100}% + ${this.pxY}% )`)}get width(){return this._width}set width(r){this._width=r,this.element&&(this.element.style.width=`calc( ${this.width/this.fileWidth*100}% + ${this.pxX}% )`)}get center(){return{x:this.left+this.width/2,y:this.top+this.height/2}}build(){this.element=document.createElement("div"),this.element.style.position="absolute",this.onBuild(),this.root.appendChild(this.element)}setColor(r){this.onSetColor(r)}},cd=class extends ku{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid",this.element.style.borderRadius="50%"}onSetColor(r){this.element.style.borderColor=r}},dd=class Ma extends ur{getType(){return"ellipsis"}static startAddingAtPoint(e,t,i,s,n){const a=new Ma(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:f,height:p}=Ma.calculateDimensionsFromCorners(s,n,a,o),g=new Ma(e,t,i,l,h,f,p);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new cd(this,e,t,e+i,t+s):new cd(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const f=this.file.width*h;for(let p=e;p<=t;p++)if(this.isWithin(p,h)){const g=this.file.pixels[f+p];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}isWithin(e,t){const i=this.left+this.width/2,s=this.top+this.height/2,n=(e-i)/(this.width/2),a=(t-s)/(this.height/2);return n*n+a*a<=1}async getAnalysisData(){return await this.file.reader.ellipsisAnalysisData(this.left,this.top,this.width,this.height)}},ud=class extends ku{onBuild(){this.element.style.borderWidth="1px",this.element.style.borderColor=this.analysis.color,this.element.style.borderStyle="solid"}onSetColor(r){this.element.style.borderColor=r}},pd=class Ia extends ur{getType(){return"rectangle"}static startAddingAtPoint(e,t,i,s,n){const a=new Ia(e,t,i,s,n);return a.br.activate(),a}static build(e,t,i,s,n,a,o){const{top:l,left:h,width:f,height:p}=Ia.calculateDimensionsFromCorners(s,n,a,o),g=new Ia(e,t,i,l,h,f,p);return g.recalculateValues(),g}buildArea(e,t,i,s){return i!==void 0&&s!==void 0?new ud(this,e,t,e+i,t+s):new ud(this,e,t,e,t)}getValues(){const e=this.left,t=this.left+this.width,i=this.top,s=this.top+this.height;let n=1/0,a=-1/0,o=0,l=0;for(let h=i;h<s;h++){const f=this.file.width*h;for(let p=e;p<=t;p++){const g=this.file.pixels[f+p];g<n&&(n=g),g>a&&(a=g),l+=g,o++}}return{min:n,max:a,avg:l/o}}async getAnalysisData(){return await this.file.reader.rectAnalysisData(this.left,this.top,this.width,this.height)}},Ua=["Blue","Red","Lightblue","Green","Brown","Yellow","Navy","Pink","DarkGoldenRod","GreenYellow","SpringGreen","SkyBlue"],fv=class extends Map{constructor(e){super();c(this,"layers",[]);c(this,"onAdd",new ie);c(this,"onRemove",new ie);c(this,"onSelectionChange",new ie);c(this,"colors",Ua);this.drive=e}get slots(){return this.drive.parent.slots}addAnalysis(e,t){this.has(e.key)&&this.removeAnalysis(e.key),e.setColor(e.initialColor),this.set(e.key,e),this.layers=[...this.layers,e];const i=t===!0?this.slots.getNextFreeSlotNumber():t===!1?void 0:t;return i!==void 0&&this.slots.assignSlot(i,e),this.onAdd.call(e,this.all),this.drive.dangerouslySetValueFromStorage(this.all),this}removeAnalysis(e){if(this.has(e)){const t=this.get(e);t&&(this.slots.unassignAnalysisFromItsSlot(t),t.remove(),this.delete(e),this.layers=this.layers.filter(i=>i.key!==e),this.drive.dangerouslySetValueFromStorage(this.all),this.onRemove.call(e))}}createRectFrom(e,t){const i=pd.startAddingAtPoint(this.getNextName("Rectangle"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeRectAt(e,t,i,s,n,a,o){const l=pd.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createEllipsisFrom(e,t){const i=dd.startAddingAtPoint(this.getNextName("Ellipsis"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!1),i}placeEllipsisAt(e,t,i,s,n,a,o){const l=dd.build(e,a??this.getNextColor(),this.drive.parent,t,i,s,n);return l.ready=!0,this.addAnalysis(l,o),l}createPointAt(e,t){const i=Sr.addAtPoint(this.getNextName("Point"),this.getNextColor(),this.drive.parent,e,t);return this.addAnalysis(i,!0),i}placePointAt(e,t,i,s,n){const a=Sr.addAtPoint(e,s??this.getNextColor(),this.drive.parent,t,i);return a.ready=!0,this.addAnalysis(a,n),a}selectAll(){this.all.filter(e=>{e.selected===!1&&e.setSelected(!1,!1)}),this.onSelectionChange.call(this.selectedOnly)}deselectAll(){this.selectedOnly.forEach(e=>{e.setDeselected(!1)}),this.onSelectionChange.call(this.selectedOnly)}get all(){return this.layers}get selectedOnly(){return this.all.filter(e=>e.selected===!0)}getNextColor(){const e=this.all.map(i=>i.initialColor),t=Ua.filter(i=>!e.includes(i));return t.length>0?t[0]:Ua[0]}getNextName(e){return`${e} ${this.all.length}`}},gv=class{constructor(r){this.drive=r}get all(){return this.extractPointsFromLayers(this.drive.layers.all)}get allInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly)}get activeInSelectedLayers(){return this.extractPointsFromLayers(this.drive.layers.selectedOnly,!0)}extractPointsFromLayers(r,e=!1){return r.reduce((t,i)=>{const s=e?i.arrayOfActivePoints:i.arrayOfPoints;return[...t,...s]},[])}},mv=class extends Ct{constructor(){super(...arguments);c(this,"layers",new fv(this));c(this,"points",new gv(this));c(this,"listener");c(this,"bindedPointerMoveListener");c(this,"bindedPointerDownListener");c(this,"bindedPointerUpListener")}get currentTool(){return this.parent.group.tool.value}dangerouslySetValueFromStorage(e){this.value=e}validate(e){return e}afterSetEffect(){}getRelativePosition(e){if(!this.listener)return{top:0,left:0};const t=this.listener.clientWidth,i=this.parent.width,n=e.layerX/t,a=Math.round(i*n),o=this.listener.clientHeight,l=this.parent.height,f=e.layerY/o;return{top:Math.round(l*f),left:a}}activateListeners(e){this.listener=e,this.bindedPointerMoveListener=t=>{const i=this.getRelativePosition(t);this.points.all.forEach(s=>{s.active&&this.currentTool.onPointMove(s,i.top,i.left);const n=s.isWithin(i.top,i.left);n?this.currentTool.onPointEnter(s):n||this.currentTool.onPointLeave(s)})},this.bindedPointerDownListener=t=>{const i=this.getRelativePosition(t);this.currentTool.onCanvasClick(i.top,i.left,this.parent),this.points.all.forEach(s=>{s.isWithin(i.top,i.left)&&this.currentTool.onPointDown(s)})},this.bindedPointerUpListener=()=>{this.points.all.forEach(t=>{this.currentTool.onPointUp(t)})},this.listener.addEventListener("pointermove",this.bindedPointerMoveListener),this.listener.addEventListener("pointerdown",this.bindedPointerDownListener),this.listener.addEventListener("pointerup",this.bindedPointerUpListener)}deactivateListeners(){this.bindedPointerMoveListener&&this.listener&&this.listener.removeEventListener("pointermove",this.bindedPointerMoveListener),this.bindedPointerDownListener&&this.listener&&this.listener.removeEventListener("pointerdown",this.bindedPointerDownListener),this.bindedPointerUpListener&&this.listener&&this.listener.removeEventListener("pointerup",this.bindedPointerUpListener)}},vv=class{constructor(r){c(this,"listenerKey","___listen-to-graphs___");c(this,"_graphs",new Map);c(this,"_output",{values:[[]],colors:[]});c(this,"onOutput",new ie);c(this,"onAddGraph",new ie);c(this,"onRemoveGraph",new ie);this.drive=r,this.layers.onAdd.set(this.listenerKey,async e=>{const t=e.graph;this.addGraph(t),t.onAnalysisSelection.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphActivation.set(this.listenerKey,async()=>{this.refreshOutput()}),t.onGraphData.set(this.listenerKey,async()=>{this.refreshOutput()}),t.analysis.onSetName.set(this.listenerKey,()=>{this.refreshOutput()})}),this.layers.onRemove.set(this.listenerKey,async e=>{this.removeGraph(e),this.refreshOutput()})}get layers(){return this.drive.parent.analysis.layers}get graphs(){return this._graphs}addGraph(r){this._graphs.set(r.analysis.key,r),this.onAddGraph.call(r)}removeGraph(r){this._graphs.delete(r),this.onRemoveGraph.call(r)}get output(){return this._output}set output(r){this._output=r,this.onOutput.call(r)}refreshOutput(){const r={values:[["Time"]],colors:[]};return this.graphs.forEach(e=>{r.values[0].push(...e.getGraphLabels()),r.colors.push(...e.getGraphColors())}),this.graphs.forEach(e=>{e.hasDataToPrint()&&e.value&&Object.keys(e.value).forEach((t,i)=>{let s=r.values[i+1];if(s===void 0){const a=new Date;a.setTime(parseInt(t)),s=[a],r.values[i+1]=s}s.push(...e.getDtaAtTime(parseInt(t)))})}),this.output=r,r}hasGraph(){return Object.values(this.graphs).find(r=>r.hasDataToPrint()).length>0}generateExportData(){const r={},e=[{key:"time_relative",displayLabel:"Relative Time"},{key:"time_absolute",displayLabel:"Absolute Time"},{key:"millisecondy",displayLabel:"Milliseconds"},{key:"timestamp",displayLabel:"Timestamp"}];for(const t of this.graphs.values()){const i=t.getGraphLabels();for(const s of i)e.push({key:s,displayLabel:`${s} (${t.analysis.initialColor}, ${t.analysis.width} x ${t.analysis.height} px)`});t.value&&Object.keys(t.value).forEach(s=>{if(!Object.keys(r).includes(s)){const a=parseInt(s),o=a+t.analysis.file.timestamp;r[s]={[e[0].key]:$e(a,"m:ss:SSS")+" ",[e[1].key]:$e(o,"d. M.y m:ss:SSS")+" ",[e[2].key]:a,[e[3].key]:o}}const n=t.getDtaAtTime(parseInt(s));i.forEach((a,o)=>{r[s][a]=n[o]})})}return{header:e,data:Object.values(r)}}},yv=class extends Ct{constructor(e){super(e,{values:[[]],colors:[]});c(this,"_hasActiveGraphs",!1);c(this,"onGraphsPresence",new ie);c(this,"listeners",new vv(this));this.listeners.onOutput.set("__mirror_output_to_local_state",async t=>{this.value=t,t.colors.length>0?this.hasActiveGraphs||(this._hasActiveGraphs=!0,this.onGraphsPresence.call(!0)):this.hasActiveGraphs&&(this._hasActiveGraphs=!1,this.onGraphsPresence.call(!1))})}get hasActiveGraphs(){return this._hasActiveGraphs}validate(e){return e}afterSetEffect(){}dangerouslyUpdateValue(e){this.value=e}downloadData(){const{data:e,header:t}=this.listeners.generateExportData(),i=Yn({fieldSeparator:";",filename:`analysis_${this.parent.fileName}_${Date.now()}.csv`,columnHeaders:t}),s=wu(i)(e);xu(i)(s)}},bv=class{constructor(r,e){c(this,"_analysis");c(this,"_serialized");c(this,"onSerialize",new ie);c(this,"enqueuedSerialisation");this.slot=r,this._analysis=e,this.hydrate(e),this._serialized=this.analysis.toSerialized(),this.propagateSerialisationUp(this._serialized)}get analysis(){return this._analysis}get serialized(){return this._serialized}listenerKey(r){return`slot ${this.slot} ${r}`}dehydrate(r){r.onSerializableChange.delete(this.listenerKey("serializable change"))}hydrate(r){r.onSerializableChange.set(this.listenerKey("serializable change"),()=>{this.enqueueSerialisation()})}enqueueSerialisation(){this.enqueuedSerialisation||(this.enqueuedSerialisation=setTimeout(()=>{this.serialize(),this.enqueuedSerialisation=void 0},0))}serialize(){this._serialized=this.analysis.toSerialized(),this.onSerialize.call(this._serialized,this.analysis),this.propagateSerialisationUp(this._serialized)}recieveSerialized(r){this.analysis.recievedSerialized(r);const e=this.analysis.toSerialized();e!==r&&(this._serialized=e,this.onSerialize.call(this._serialized,this.analysis))}propagateSerialisationUp(r){const e=this.analysis.file.slots.getOnSerializeManager(this.slot);e&&e.call(r)}},Hs,Pu=(Hs=class extends Ct{constructor(){super(...arguments);c(this,"onSlotInit",new ie);c(this,"onSlotRemove",new ie);c(this,"onSlot1Assignement",new ie);c(this,"onSlot2Assignement",new ie);c(this,"onSlot3Assignement",new ie);c(this,"onSlot4Assignement",new ie);c(this,"onSlot5Assignement",new ie);c(this,"onSlot6Assignement",new ie);c(this,"onSlot7Assignement",new ie);c(this,"onSlot1Serialize",new ie);c(this,"onSlot2Serialize",new ie);c(this,"onSlot3Serialize",new ie);c(this,"onSlot4Serialize",new ie);c(this,"onSlot5Serialize",new ie);c(this,"onSlot6Serialize",new ie);c(this,"onSlot7Serialize",new ie)}getNextFreeSlotNumber(){for(let t=1;t<=Hs.MAX_SLOTS;t++)if(!this.hasSlot(t))return t}assignSlot(t,i){this.getSlot(t)!==void 0&&this.removeSlotAndAnalysis(t);const n=this.getAnalysisSlot(i);n!==void 0&&this.unassignAnalysisFromItsSlot(this.getSlot(n).analysis);const a=new bv(t,i);this.value.set(t,a);const o=this.getOnAssignementManager(t),l=this.getOnSerializeManager(t);return o&&o.call(a),l&&l.call(a.serialized),this.onSlotInit.call(t,a),this.callEffectsAndListeners(),a}hasSlot(t){return this.value.has(t)}getSlot(t){return this.value.get(t)}getSlotMap(){const t=new Map;return[1,2,3,4,5,6,7].forEach(i=>{this.hasSlot(i)?t.set(i,this.getSlot(i)):t.set(i,void 0)}),t}getAnalysisSlot(t){for(const i of this.value.values())if(i.analysis.key===t.key)return i.slot}removeSlotAndAnalysis(t){const i=this.value.get(t);if(i){const s=i.analysis;this.emitOnAssignement(t,void 0),this.value.delete(t),this.parent.analysis.layers.removeAnalysis(s.key),this.callEffectsAndListeners()}}unassignAnalysisFromItsSlot(t){for(const i of this.value.values())i.analysis.key===t.key&&(this.emitOnAssignement(i.slot,void 0),this.value.delete(i.slot),this.parent.group.analysisSync.deleteSlot(this.parent,i.slot),this.callEffectsAndListeners())}createFromSerialized(t,i){const s=t.split(";").map(P=>P.trim());if(s.length<2)return;const n=s[0]!==void 0&&s[0].length>0?s[0]:void 0;if(n===void 0)return;const a=s[1];if(!["rectangle","ellipsis","point"].includes(a))return;let o=wt.serializedGetNumericalValueByKey(s,"top"),l=wt.serializedGetNumericalValueByKey(s,"left");const h=wt.serializedGetStringValueByKey(s,"color");let f=wt.serializedGetNumericalValueByKey(s,"width"),p=wt.serializedGetNumericalValueByKey(s,"height");const g=wt.serializedSegmentsHasExact(s,"avg"),S=wt.serializedSegmentsHasExact(s,"min"),$=wt.serializedSegmentsHasExact(s,"max");o!==void 0&&(o<0&&(o=0),o>this.parent.height-1&&(o=this.parent.height-1)),l!==void 0&&(l<0&&(l=0),l>this.parent.width-1&&(l=this.parent.width-1));let O;if(a==="point"){if(o===void 0||l===void 0)return;O=this.parent.analysis.layers.placePointAt(n,o,l,h,!1)}else{if(o===void 0||l===void 0||f===void 0||p===void 0)return;f<0&&(f=0),f+l>this.parent.width-1&&(f=this.parent.width-l-1),p<0&&(p=0),p+o>this.parent.height-1&&(p=this.parent.height-o-1),O=a==="rectangle"?this.parent.analysis.layers.placeRectAt(n,o,l,f+l,p+o,h,!1):this.parent.analysis.layers.placeEllipsisAt(n,o,l,f+l,p+o,h,!1)}if(O!==void 0){if(O instanceof Sr?g&&O.graph.setAvgActivation(!0):O instanceof ur&&(g&&O.graph.setAvgActivation(!0),S&&O.graph.setMinActivation(!0),$&&O.graph.setMaxActivation(!0)),i!==!1)if(i===!0){const P=this.getNextFreeSlotNumber();P!==void 0&&this.assignSlot(P,O)}else i!==void 0&&this.assignSlot(i,O);return O}}validate(t){return t}afterSetEffect(){}callEffectsAndListeners(){Object.values(this._listeners).forEach(t=>t(this.value))}emitOnAssignement(t,i){const s=this.getOnAssignementManager(t);s&&s.call(i);const n=this.getOnSerializeManager(t);n&&n.call(i?i.serialized:void 0),i?this.onSlotInit.call(t,i):this.onSlotRemove.call(t)}emitSerializedValue(t,i){const s=this.getOnSerializeManager(t);s&&s.call(i)}getOnSerializeManager(t){if(t===1)return this.onSlot1Serialize;if(t===2)return this.onSlot2Serialize;if(t===3)return this.onSlot3Serialize;if(t===4)return this.onSlot4Serialize;if(t===5)return this.onSlot5Serialize;if(t===6)return this.onSlot6Serialize;if(t===7)return this.onSlot7Serialize}getOnAssignementManager(t){if(t===1)return this.onSlot1Assignement;if(t===2)return this.onSlot2Assignement;if(t===3)return this.onSlot3Assignement;if(t===4)return this.onSlot4Assignement;if(t===5)return this.onSlot5Assignement;if(t===6)return this.onSlot6Assignement;if(t===7)return this.onSlot7Assignement}getSlotValue(t){var i;if(this.hasSlot(t))return(i=this.getSlot(t))==null?void 0:i.serialized}forEveryExistingSlot(t){const i=s=>{const n=this.getSlot(s);n&&t(n,s)};for(let s=1;s<=7;s++)i(s)}},c(Hs,"MAX_SLOTS",7),Hs),wv=class extends Ct{validate(r){return r}afterSetEffect(){}recalculateFromCursor(r){r&&(this.value=this._getValueAtCoordinate(r.x,r.y))}_getValueAtCoordinate(r,e){if(r===void 0||e===void 0||r===this.parent.meta.width||e===this.parent.meta.height)return;const t=r+e*this.parent.meta.width;return this.parent.pixels[t]}},xv=class{constructor(r,e){c(this,"_currentFrame");c(this,"bufferSize",3);c(this,"buffer",new Map);this.drive=r,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(r){this._currentFrame=r,this.drive.parent.setPixels(this.currentFrame.pixels)}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(r=>r.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(r){let e=this.buffer.get(r);return e===void 0&&(e=await this.drive.parent.reader.frameData(r.index)),this.currentFrame=e,await this.preloadAfterFrameSet(r)}async preloadAfterFrameSet(r){const e=r.index+1<this.drive.relativeSteps.length?r.index+1:NaN,t=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(t)||e>t||e===t)return r.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<t),s=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(s.map(a=>this.drive.parent.reader.frameData(a.index)))).forEach((a,o)=>{const l=s[o];this.buffer.set(l,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Ou={1:1,.5:2,2:.5,3:.333333333333,5:.25,10:.1},Sv=class extends Ct{constructor(e,t,i,s){super(e,Math.max(Math.min(t,i.length),0));c(this,"_playbackSpeed",1);c(this,"startTimestampRelative");c(this,"endTimestampRelative");c(this,"stepsByAbsolute",new Map);c(this,"stepsByRelative",new Map);c(this,"stepsByIndex",new Map);c(this,"relativeSteps",[]);c(this,"_currentStep");c(this,"isSequence");c(this,"_isPlaying",!1);c(this,"timer");c(this,"buffer");c(this,"callbackdPlaybackSpeed",new ie);c(this,"callbacksPlay",new ie);c(this,"callbacksPause",new ie);c(this,"callbacksStop",new ie);c(this,"callbacksEnd",new ie);c(this,"callbacksChangeFrame",new ie);this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(n=>{this.stepsByIndex.set(n.index,n),this.stepsByAbsolute.set(n.absolute,n),this.stepsByRelative.set(n.relative,n),this.relativeSteps.push(n.relative)}),this.buffer=new xv(this,s)}get playbackSpeed(){return this._playbackSpeed}set playbackSpeed(e){this._playbackSpeed=e,this.callbackdPlaybackSpeed.call(this._playbackSpeed)}get playbackSpeedAspect(){return Ou[this.playbackSpeed]}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlaying}get currentMs(){return this.currentStep.relative}get currentPercentage(){return this._convertRelativeToPercent(this.currentStep.relative)}get currentFrameIndex(){return this.currentStep.index}get currentTime(){return this.formatDuration(this.currentStep.relative)}get frames(){return this.parent.meta.current.timeline}init(){this.buffer.init()}afterSetEffect(){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}formatDuration(e){const t=new Date(0);return t.setMilliseconds(e),$e(t,"mm:ss:SSS")}next(){const e=this.findNextRelative(this.value);e&&this.setRelativeTime(e.relative)}prev(){const e=this.findPreviousRelative(this.value);this.setRelativeTime(e.relative)}findPreviousOrThis(e){return this.stepsByRelative.has(e)?this.stepsByRelative.get(e):this.findPreviousRelative(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const t=this._convertRelativeToAspect(e);let i=Math.max(Math.ceil(t*this.steps.length)+5,this.steps.length),s;for(;i>=0&&s===void 0;){const a=this.stepsByIndex.get(i);a!==void 0&&a.relative<e&&(s=a),i=i-1}return s!==void 0?s:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const t=this._convertRelativeToAspect(e),i=Math.floor(t*this.steps.length)-5,s=this._validateIndex(i),n=this._validateIndex(i+40),o=this.steps.slice(s,n).find(l=>l.relative>e);return o!==void 0?o:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const t=this.findPreviousOrThis(this.value);if(t!==this._currentStep){this._currentStep=t;const i=await this.buffer.recieveStep(this._currentStep);return this.callbacksChangeFrame.call(this._currentStep),i}return{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const t=this._convertPercenttRelative(e);return await this.setRelativeTime(t)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlaying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlaying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.callbacksChangeFrame.call(e),this.createNextStepTimer())):(this._isPlaying=!1,this.callbacksEnd.call())},this._currentStep.offset*this.playbackSpeedAspect))}play(){this.steps.length>1&&(this._isPlaying=!0,this.createNextStepTimer(),this.callbacksPlay.call())}pause(){this._isPlaying=!1,clearTimeout(this.timer),this.callbacksPause.call()}stop(){this.pause(),this.value=0,this.callbacksStop.call()}},$v=class extends Ct{constructor(){super(...arguments);c(this,"stream");c(this,"recorder");c(this,"mimeType");c(this,"_isRecording",!1);c(this,"_mayStop",!0);c(this,"recordedChunks",[]);c(this,"callbackMayStop",new ie)}get mayStop(){return this._mayStop}set mayStop(e){this._mayStop=e,this.callbackMayStop.call(this.mayStop)}validate(e){return e}afterSetEffect(e){}start(){if(this.value===!0)throw new Error("Recording already in process - can not start another one");const{stream:e,recorder:t}=this.initRecording();this.stream=e,this.recorder=t,this.value=!0,this.recorder.addEventListener("dataavailable",i=>{i.data.size>0&&(this.recordedChunks.push(i.data),this.download(),this.clearRecording())}),this.recorder.start()}end(){if(this.value===!1)throw new Error("Recording has not started yet - can not end it!");if(this.recorder===void 0)throw new Error("Error ending recording - no MediaRecorder instance created.");this.recorder.stop(),this.value=!1,this.mayStop=!0}async recordEntireFile(){if(this.value===!0)throw new Error("Already recording the entire file. Can not start until the current recording ends.");await this.parent.timeline.setValueByPercent(0),this.mayStop=!1;const e="recording entire file";this.parent.timeline.callbacksEnd.add(e,()=>{this.end(),this.parent.timeline.callbacksEnd.delete(e)}),this.parent.timeline.play(),this.start()}initRecording(){if(this.stream||this.recorder)throw new Error("Recording was already initialised! Can not initialise it again until it stops!");const e=this.parent.canvasLayer.canvas.captureStream(25);["video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm;codecs=daala","video/webm"].forEach(n=>{this.mimeType===void 0&&MediaRecorder.isTypeSupported(n)&&(this.mimeType=n)});const i={mimeType:this.mimeType},s=new MediaRecorder(e,i);return{stream:e,recorder:s,options:i}}download(){const e=new Blob(this.recordedChunks,{type:this.mimeType}),t=URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=t,i.download=this.parent.fileName.replace(".lrc",`__${this.parent.group.registry.palette.value}__from-${this.parent.group.registry.range.value.from.toFixed(2)}_to-${this.parent.group.registry.range.value.to.toFixed(2)}.webm`),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(t)}clearRecording(){this.recorder&&(this.recorder.stop(),delete this.recorder),this.stream&&delete this.stream,this.recordedChunks.length>0&&(this.recordedChunks=[]),this.value=!1,this.mimeType=void 0}},yo=class{},Lt,_v=(Lt=class{constructor(e,t){c(this,"_built",!1);c(this,"_hydrated",!1);c(this,"_hover",!1);c(this,"_canvasLayer");c(this,"_visibleLayer");c(this,"_cursorLayer");c(this,"_listenerLayer");this.parent=e,this.root=t,this.root.classList.add(Lt.CLASS_BASE),this.root.dataset.thermalInstanceId=this.parent.id,this.root.dataset.thermalInstanceUrl=this.parent.thermalUrl}get built(){return this._built}setBuilt(e){this._built=e,e===!0?(this.root.classList.add(Lt.CLASS_BUILT),this.root.dataset.built="true",this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0"):(this.root.classList.remove(Lt.CLASS_BUILT),delete this.root.dataset.built,this.root.style.removeProperty("transition"),this.root.style.removeProperty("zIndex"),this.root.style.removeProperty("position"),this.root.style.removeProperty("lineHeight"))}get hydrated(){return this._hydrated}setHydrated(e){this._hydrated=e,e===!0?(this.root.classList.add(Lt.CLASS_HYDRATED),this.root.dataset.hydrated="true"):(this.root.classList.remove(Lt.CLASS_HYDRATED),delete this.root.dataset.hydrated)}get hover(){return this._hover}setHover(e){this._hover=e,e===!0?(this.root.classList.add(Lt.CLASS_HOVER),this.root.dataset.hover="true"):(this.root.classList.remove(Lt.CLASS_HOVER),delete this.root.dataset.hover)}get canvasLayer(){return this._canvasLayer}get visibleLayer(){return this._visibleLayer}get cursorLayer(){return this._cursorLayer}get listenerLayer(){return this._listenerLayer}build(){this.root!==null&&this.built===!0&&(console.info(`Building instance ${this.parent.id} which is already built. Destroying any previous DOM and creating a new one in a new container ${this.root.nodeName}`),this.destroy());const e=this.parent.createInnerDom();this._canvasLayer=e.canvasLayer,this._visibleLayer=e.visibleLayer,this._cursorLayer=e.cursorLayer,this._listenerLayer=e.listenerLayer,this._canvasLayer.mount(),this._visibleLayer.mount(),this._cursorLayer.mount(),this._listenerLayer.mount(),this.root.appendChild(this._visibleLayer.getLayerRoot()),this.root.appendChild(this._canvasLayer.getLayerRoot()),this.root.appendChild(this._cursorLayer.getLayerRoot()),this.root.appendChild(this._listenerLayer.getLayerRoot()),this.setBuilt(!0)}destroy(){this.built===!0&&(this._canvasLayer&&(this._canvasLayer.unmount(),delete this._canvasLayer,this._canvasLayer=void 0),this._visibleLayer&&(this._visibleLayer.unmount(),delete this._visibleLayer,this._visibleLayer=void 0),this._cursorLayer&&(this._cursorLayer.unmount(),delete this._cursorLayer,this._cursorLayer=void 0),this._listenerLayer&&(this.hydrated===!0&&this.dehydrate(),this._listenerLayer.unmount(),delete this._listenerLayer,this._listenerLayer=void 0),this.setBuilt(!1),this.root.classList.remove(Lt.CLASS_BASE),delete this.root.dataset.thermalInstanceId,delete this.root.dataset.thermalInstanceUrl,this.root.innerHTML="")}hydrate(){if(this.listenerLayer===void 0){console.error(`Instance ${this.parent.thermalUrl} does not have a listener layer yet when trying to hydrate! Stopping hydration.`);return}this.hydrated===!0&&this.dehydrate(),this.parent.hydrateListener(this),this.setHydrated(!0)}dehydrate(){if(this.hydrated===!1){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which is not yet hydrated!}`);return}if(this.listenerLayer===void 0){console.error(`Trying to dehydrate the instance ${this.parent.thermalUrl} which does not have a listener layer yet!`);return}this.parent.dehydrateListener(this),this.setHydrated(!1)}},c(Lt,"CLASS_BASE","thermalImageRoot"),c(Lt,"CLASS_BUILT",Lt.CLASS_BASE+"__built"),c(Lt,"CLASS_HYDRATED",Lt.CLASS_BASE+"__mounted"),c(Lt,"CLASS_HOVER",Lt.CLASS_BASE+"__hover"),Lt),Cv=class{constructor(r){c(this,"_current");c(this,"_onChange");this._current=r}get current(){return this._current}get onChange(){return this._onChange||(this._onChange=new ie),this._onChange}get width(){return this.current.width}get height(){return this.current.height}set(r){this._current=r,this.onChange.call(this.current)}},kv=class extends yo{constructor(e,t,i,s,n){super();c(this,"id");c(this,"horizontalLimit");c(this,"verticalLimit");c(this,"group");c(this,"thermalUrl");c(this,"visibleUrl");c(this,"fileName");c(this,"signature","unknown");c(this,"version",-1);c(this,"streamCount",-1);c(this,"fileDataType",-1);c(this,"unit",-1);c(this,"meta");c(this,"_dom");c(this,"timeline");c(this,"cursorValue");c(this,"analysis");c(this,"recording");c(this,"_mounted",!1);c(this,"_built",!1);c(this,"_pixels");this.group=e,this.id=this.formatId(s),this.meta=new Cv(t),this.thermalUrl=s,this.visibleUrl=n,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=i}get pool(){return this.group.registry.manager.pool}get width(){return this.meta.current.width}get height(){return this.meta.current.height}get timestamp(){return this.meta.current.timestamp}get duration(){return this.meta.current.duration}get min(){return this.meta.current.min}get max(){return this.meta.current.max}get bytesize(){return this.meta.current.bytesize}get averageEmissivity(){return this.meta.current.averageEmissivity}get averageReflectedKelvins(){return this.meta.current.averageReflectedKelvins}get timelineData(){return this.meta.current.timeline}get fps(){return this.meta.current.fps}get frameCount(){return this.meta.current.frameCount}get dom(){return this._dom}get hover(){return this.dom?this.dom.hover:!1}get root(){return this.dom?this.dom.root:null}get canvasLayer(){return this.dom.canvasLayer}get visibleLayer(){return this.dom.visibleLayer}get cursorLayer(){return this.dom.cursorLayer}get listenerLayer(){return this.dom.listenerLayer}get mounted(){return this._mounted}set mounted(e){this._mounted=e}get built(){return this._built}set built(e){this._built=e}get pixels(){return this._pixels}setPixels(e){this._pixels=e,this.onSetPixels(e)}mountToDom(e){this._dom!==void 0&&(this._dom.destroy(),this._dom=void 0),this._dom=new _v(this,e),this._dom.build(),this._dom.hydrate()}unmountFromDom(){this.dom&&this.dom.destroy(),delete this._dom,this._dom=void 0}async draw(){if(this.dom&&this.dom.canvasLayer)return await this.dom.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.dom&&this.dom.destroy()}removeAllChildren(){this.dom&&this.dom.destroy()}getTemperatureAtPoint(e,t){const i=Math.min(this.meta.width-1,Math.max(0,e)),n=Math.min(this.meta.height-1,Math.max(0,t))*this.width+i;return this.pixels[n]}getColorAtPoint(e,t){var a,o;const i=this.getTemperatureAtPoint(e,t),s=(a=this.group.registry.range.value)==null?void 0:a.from,n=(o=this.group.registry.range.value)==null?void 0:o.to;if(s!==void 0&&n!==void 0){const h=(i-s)/(n-s),f=Math.round(255*h);return this.group.registry.palette.currentPalette.pixels[f]}}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.dom&&this.dom.visibleLayer&&this.dom.canvasLayer&&this.visibleUrl&&(this.dom.canvasLayer.opacity=e)}},bo=class{constructor(r){c(this,"_mounted",!1);this.instance=r}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){var r,e;this._mounted&&((r=this.instance.dom)==null?void 0:r.root)!==null&&(this._mounted=!1,(e=this.instance.dom)==null||e.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},oi=class Nl{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e.style.userSelect="none",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.imageRendering="pixelated",e.style.userSelect="none",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e.style.userSelect="none",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.userSelect="none",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e.style.userSelect="none",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.style.touchAction="none",e.style.userSelect="none",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e.style.userSelect="none",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e.style.userSelect="none",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e.style.userSelect="none",e}static createCursorLayerX(){const e=Nl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e.style.userSelect="none",e}static createCursorLayerY(){const e=Nl.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e.style.userSelect="none",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e.style.userSelect="none",e}},Pv=class extends bo{constructor(e,t){super(e);c(this,"container");c(this,"image");this._url=t,this.container=oi.createVisibleLayer(),this._url&&(this.image=oi.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Ov=class extends bo{constructor(e){super(e);c(this,"container");c(this,"canvas");c(this,"context");c(this,"_opacity",1);this.container=oi.createCanvasContainer(),this.canvas=oi.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.container.appendChild(this.canvas),this.opacity=this.instance.group.registry.opacity.value}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.from:this.instance.min}get to(){return this.instance.group.registry.range.currentRange?this.instance.group.registry.range.currentRange.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.canvas.style.opacity=this._opacity.toString():this.canvas.style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette();try{const t=this.instance.analysis.value.map(s=>s instanceof Sr?[s.getType(),s.key,s.top,s.left,1,1]:[s.getType(),s.key,s.top,s.left,s.width,s.height]),i=await this.pool.exec(async(s,n,a,o,l,h,f)=>{const g=new OffscreenCanvas(a,o).getContext("2d"),S=n-s,$=f.map(A=>({id:A[1],type:A[0],min:{value:1/0},max:{value:-1/0},avg:{value:0,sum:0,count:0}}));for(let A=0;A<a;A++)for(let D=0;D<o;D++){const X=A+D*a,W=l[X];let se=W;se<s&&(se=s),se>n&&(se=n);const L=(se-s)/S,T=Math.round(255*L),M=h[T];g.fillStyle=M,g.fillRect(A,D,1,1);const F=(I,z,R,K,he,C)=>{const B=R+he/2,fe=K+C/2,ae=(I-B)/(he/2),Ee=(z-fe)/(C/2);return ae*ae+Ee*Ee<=1};f.forEach((I,z)=>{const R=$[z],[K,he,C,B,fe,ae]=I;K==="point"?A===B&&D===C&&(R.avg.value=W):K==="rectangle"?A>=B&&A<B+fe&&D>=C&&D<C+ae&&(W<R.min.value&&(R.min.value=W),W>R.max.value&&(R.max.value=W),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+W):K==="ellipsis"&&F(A,D,B,C,a,o)&&(W<R.min.value&&(R.min.value=W),W>R.max.value&&(R.max.value=W),R.avg.count=R.avg.count+1,R.avg.sum=R.avg.sum+W)})}const O=$.map(A=>({id:A.id,min:A.min.value!==1/0?A.min.value:void 0,max:A.max.value!==-1/0?A.max.value:void 0,avg:A.type==="point"?A.avg.value:A.avg.sum/A.avg.count})),P=g.getImageData(0,0,a,o);return{image:await createImageBitmap(P),stats:O}},[this.from,this.to,this.width,this.height,this.pixels,e,t],{});return i.stats.forEach(s=>{const n=this.instance.analysis.layers.get(s.id);n==null||n.dangerouslySetValues(s.avg,s.min,s.max)}),this.context.drawImage(i.image,0,0),!0}catch(t){if(t instanceof Error){if(t.message==="OffscreenCanvas is not defined")return!1;console.error(t)}}return!1}exportAsPng(){const e=this.canvas.toDataURL(),t=document.createElement("a");t.download=this.instance.fileName.replace(".lrc","_exported.png"),t.href=e,t.click()}},Av=class extends bo{constructor(e){super(e);c(this,"layerRoot");c(this,"center");c(this,"axisX");c(this,"axisY");c(this,"label");c(this,"_show",!1);c(this,"_hover",!1);this.layerRoot=oi.createCursorLayerRoot(),this.center=oi.createCursorLayerCenter(),this.axisX=oi.createCursorLayerX(),this.axisY=oi.createCursorLayerY(),this.label=oi.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}setShow(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}recalculateLabelPosition(e,t){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*i),n=Math.round(t*i),a=100/this.instance.width/2,o=100/this.instance.height/2;this.center.style.left=`calc( ${this.px(s)} + ${a}%)`,this.center.style.top=`calc( ${this.px(n)} + ${o}%)`,e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),t>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom"))}}setCursor(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=`${i.toFixed(3)} °C`)}setLabel(e,t,i){this.instance.root===null||(this.recalculateLabelPosition(e,t),this.label.innerHTML=i)}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Ev=class extends bo{constructor(e){super(e);c(this,"container");this.container=oi.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Ot,Au=(Ot=class{constructor(){c(this,"wrapper");c(this,"container");c(this,"_exporting",!1);c(this,"onExportingStatusChange",new ie)}get exporting(){return this._exporting}setExporting(e){this._exporting=e,this.onExportingStatusChange.call(this._exporting)}createElementWithText(e,t,i=Ot.FONT_SIZE_NORMAL,s="normal",n=Ot.COLOR_BASE){const a=document.createElement(e);return a.innerHTML=t,a.style.fontSize=i,a.style.lineHeight="1em",a.style.fontWeight=s,a.style.color=n,a}buildWrapper(){const e=document.createElement("div");return e.style.position="absolute",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e}buildContainer(e,t){const i=document.createElement("div");return i.style.width=e.toFixed(0)+"px",i.style.fontSize=Ot.FONT_SIZE_NORMAL,i.style.fontFamily=Ot.FONT_FAMILY,i.style.color=Ot.COLOR_BASE,i.style.backgroundColor=t,i}clear(){this.beforeDomRemoved(),this.wrapper&&document.body.removeChild(this.wrapper),this.afterDomRemoved(),delete this.container,delete this.wrapper}buildDom(e){this.wrapper=this.buildWrapper(),this.container=this.buildContainer(e.width,e.backgroundColor),this.wrapper.appendChild(this.container),this.onBuildDom(e),document.body.prepend(this.wrapper)}makeSureFileNameIsValid(e){return e.endsWith(".PNG")&&(e=e.replaceAll(".PNG",".png")),e.endsWith(".png")||(e=e+".png"),e}async downloadPng(e){const t=this.getFinalParams(e);if(t.fileName=this.makeSureFileNameIsValid(t.fileName),this.exporting===!0){console.warn(`PNG export of ${t.fileName} is already working. New requests are allowed after the export finishes.`);return}this.setExporting(!0),this.buildDom(t),this.onDownload(t)}downloadImage(e,t){rv.toPng(t).then(i=>{const s=document.createElement("a");s.download=e,s.href=i,s.click(),this.clear(),this.setExporting(!1)})}buildHorizontalScale(e,t,i,s,n,a,o,l,h){const f=e.clientWidth,p=60,S=f/(p+40),$=document.createElement("div");$.style.width="100%",$.style.position="relative",$.style.paddingLeft=p/2+"px",$.style.paddingRight=p/2+"px",$.style.boxSizing="border-box";const O=document.createElement("div");O.style.width="100%",O.style.position="relative",O.style.backgroundColor=o,O.style.height="30px";const P=i-t,Y=s-t,A=n-t,D=Y/P*100,X=A/P*100,W=document.createElement("div");W.style.position="absolute",W.style.backgroundImage=a,W.style.height="100%",W.style.top="0px",W.style.left=D+"%",W.style.width=X-D+"%",O.appendChild(W),$.appendChild(O);const se=document.createElement("div");se.style.width="100%",se.style.height="40px",se.style.position="relative";const k=(M,F=!1,I,z)=>{const R=M/P*100,K=document.createElement("div");K.style.position="absolute",K.style.top="0px",K.style.left=`calc( ${R}% - ${p/2}px )`,K.style.width=p+"px",K.style.textAlign="center",K.style.lineHeight="0px";const he=document.createElement("div"),C=document.createElement("div"),B=document.createElement("div"),fe=7,ae=fe+"px";he.innerHTML=(t+M).toFixed(2)+" °C",he.style.display="inline-block",he.style.fontSize=Ot.FONT_SIZE_SMALL,he.style.lineHeight="1em",he.style.padding="3px",he.style.position="relative",C.style.width="100%",C.style.height=ae,C.style.textAlign="center",C.style.position="relative",C.style.lineHeight="0px",B.style.content="",B.style.display="inline-block",F?(B.style.width=fe*2+"px",B.style.height=fe*2+"px",B.style.rotate="45deg",B.style.backgroundColor=z,he.style.backgroundColor=z,he.style.zIndex="99",he.style.color=I):(B.style.width="1px",B.style.height=ae,B.style.backgroundColor=I),C.appendChild(B),K.appendChild(C),K.appendChild(he),se.appendChild(K)};if(h){const M=document.createElement("div");M.style.position="absolute",M.style.border=`2px solid ${l}`,M.style.height="100%",M.style.boxSizing="border-box";const F=(h.from-t)/P*100,I=(h.to-t)/P*100-F;M.style.left=F+"%",M.style.width=I+"%",O.appendChild(M),k(h.from-t,!0,"white",o),k(h.to-t,!0,"white",o)}const L=P/S;let T=0;for(;T<=P;)k(T,!1,l,"transparent"),T=T+L;return k(Y,!0,"white",l),k(A,!0,"white",l),$.appendChild(se),$}},c(Ot,"FONT_SIZE_NORMAL","16px"),c(Ot,"FONT_SIZE_SMALL","12px"),c(Ot,"COLOR_BASE","black"),c(Ot,"COLOR_GRAY","gray"),c(Ot,"COLOR_LIGHT","lightgray"),c(Ot,"WIDTH","1600px"),c(Ot,"FONT_FAMILY","sans-serif"),c(Ot,"GAP_BASE","10px"),c(Ot,"GAP_SMALL","5px"),c(Ot,"DEBUG",!1),Ot),Ir,Dv=(Ir=class extends Au{constructor(t){super();c(this,"localInstance");this.file=t}get canvas(){return this.file.canvasLayer.canvas}onBuildDom(){}beforeDomRemoved(){}afterDomRemoved(){var t;(t=this.localInstance)==null||t.group.registry.manager.removeRegistry(this.localInstance.group.registry.id),delete this.localInstance}getFinalParams(t){const i=t&&t.fileName?t.fileName:`${this.file.fileName}__export`;return{...Ir.DEFAULT_PARAMS,...t,fileName:i}}async onDownload(t){const i=Math.random().toString(),s=this.file.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(i),o=`${t.fontSize}px`;s.palette.setPalette(this.file.group.registry.manager.palette.value),n.range.imposeRange(this.file.group.registry.range.value),this.localInstance=await this.file.reader.createInstance(a);const l=this.file.timeline.currentStep.relative;if(l!==0&&this.localInstance.timeline.setRelativeTime(l),this.container){this.container.style.lineHeight=`${t.fontSize*1.5}px`;const h=this.file.group.registry.minmax.value.min,f=this.file.group.registry.minmax.value.max;if(t.showFileInfo){const p=document.createElement("div");p.style.paddingBottom=`${t.fontSize/3}px`,p.appendChild(this.createElementWithText("div",this.file.fileName,o,"bold",t.textColor)),this.container.appendChild(p)}if(t.showThermalScale){const p=h!==this.file.meta.current.min||f!==this.file.meta.current.max?{from:this.file.meta.current.min,to:this.file.meta.current.max}:void 0;this.container.appendChild(this.buildHorizontalScale(this.container,h,f,this.file.group.registry.range.value.from,this.file.group.registry.range.value.to,this.file.group.registry.palette.currentPalette.gradient,"gray","black",p))}if(this.localInstance.mountToDom(this.container),this.localInstance.dom&&this.localInstance.dom.visibleLayer&&(this.localInstance.dom.visibleLayer.getLayerRoot().style.display="none"),await this.localInstance.draw(),t.showAnalysis&&this.file.analysis.value.length>0){const p=document.createElement("table");p.style.width="100%",p.style.borderCollapse="collapse",p.style.marginTop=`${t.fontSize/3}px`;const g=document.createElement("tr");["Analysis","AVG","MIN","MAX"].forEach(S=>{const $=this.createElementWithText("th",S,o,void 0,Ir.COLOR_GRAY);$.style.textAlign="left",$.style.borderBottom=`1px solid ${Ir.COLOR_LIGHT}`,$.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,g.appendChild($)}),p.appendChild(g),this.container.appendChild(p),this.file.slots.forEveryExistingSlot((S,$)=>{var P;const O=(P=this.localInstance)==null?void 0:P.slots.createFromSerialized(S.serialized,$);if(O){const Y=document.createElement("tr"),A=this.createElementWithText("td",S.analysis.name,o,void 0,S.analysis.initialColor);A.style.borderBottom=`1px solid ${Ir.COLOR_LIGHT}`,A.style.padding=`${t.fontSize/3}px 0px ${t.fontSize/3} 0px`,Y.appendChild(A);const D=(X,W)=>{const se=this.createElementWithText("td",W?W.toFixed(3)+" °C":"",o,void 0);se.style.borderBottom=`1px solid ${Ir.COLOR_LIGHT}`,se.style.paddingTop=`${t.fontSize/3}px`,se.style.paddingBottom=`${t.fontSize/3}px`,Y.appendChild(se)};S.analysis instanceof ur?(D(S.analysis.initialColor,O.avg),D(S.analysis.initialColor,O.min),D(S.analysis.initialColor,O.max)):S.analysis instanceof Sr&&(D(S.analysis.initialColor,O.avg),D(S.analysis.initialColor),D(S.analysis.initialColor)),p.appendChild(Y)}})}if(t.author||t.license){const p=document.createElement("div");p.style.lineHeight="1.5em",p.style.color=Ir.COLOR_GRAY,p.style.paddingTop=`${t.fontSize/3}px`,t.author&&p.appendChild(this.createElementWithText("span",t.author,o)),t.author&&t.license&&p.appendChild(this.createElementWithText("span"," - ",o)),t.license&&p.appendChild(this.createElementWithText("span",t.license,o)),this.container.appendChild(p)}if(t.showSource){const p=document.createElement("div");p.style.lineHeight="1.5em",p.style.paddingTop=`${t.fontSize/3}px`;const g=ot.human(new Date),S=window.location.href;p.appendChild(this.createElementWithText("span",`${g} - ${S}`,o,void 0,Ir.COLOR_GRAY)),this.container.appendChild(p)}setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},0)}}},c(Ir,"DEFAULT_PARAMS",{fileName:"sth",width:1200,fontSize:20,textColor:"black",backgroundColor:"white",showAnalysis:!0,showFileInfo:!1,showThermalScale:!0,showSource:!1}),Ir),qn=class Eu extends kv{constructor(t,i,s,n){super(t,s,n.pixels,i.thermalUrl,i.visibleUrl);c(this,"slots");c(this,"_export");c(this,"filters",new vo(this));this.group=t,this.reader=i,this.firstFrame=n,this.setPixels(n.pixels)}get export(){if(!this._export){const t=new Dv(this);this._export=t}return this._export}createInnerDom(){return{canvasLayer:new Ov(this),visibleLayer:new Pv(this,this.visibleUrl),cursorLayer:new Av(this),listenerLayer:new Ev(this)}}hydrateListener(t){if(!t.listenerLayer||!t.cursorLayer)return;const i=t.listenerLayer.getLayerRoot();i&&(t.parent.analysis.activateListeners(i),t.listenerLayer.getLayerRoot().onmousemove=s=>{t.cursorLayer&&t.cursorLayer.setShow(!0),t.setHover(!0);const n=t.parent.meta.width,a=t.root.clientWidth,o=n/a,l=Math.round(s.offsetX*o),h=Math.round(s.offsetY*o);t.parent.group.cursorPosition.recieveCursorPosition({x:l,y:h})},t.listenerLayer.getLayerRoot().onmouseleave=()=>{t.cursorLayer&&t.cursorLayer.setShow(!1),t.setHover(!1),t.parent.group.cursorPosition.recieveCursorPosition(void 0)})}dehydrateListener(t){t.parent.analysis.deactivateListeners()}buildServices(){return this.cursorValue=new wv(this,void 0),this.timeline=new Sv(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this.recording=new $v(this,!1),this.analysis=new mv(this,[]),this.analysisData=new yv(this),this.slots=new Pu(this,new Map),this}formatId(t){return`instance_${this.group.id}_${t}`}onSetPixels(t){var i;if(this.dom&&this.dom.built&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const s=this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,this);(i=this.dom.cursorLayer)==null||i.setLabel(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y,s)}}getPixelsForHistogram(){return[]}static fromService(t,i,s,n){return new Eu(t,i,s,n).buildServices()}recieveCursorPosition(t){var i,s,n;if(t!==void 0){const a=Math.min(this.meta.width,Math.max(0,t.x)),o=Math.min(this.meta.height,Math.max(0,t.y)),l=this.group.tool.value.getLabelValue(a,o,this);this.dom&&((i=this.dom.cursorLayer)==null||i.setLabel(a,o,l),this.dom.cursorLayer&&this.dom.cursorLayer.setShow(!0))}else this.dom&&((s=this.dom.cursorLayer)==null||s.resetCursor(),(n=this.dom.cursorLayer)==null||n.setShow(!1));this.cursorValue.recalculateFromCursor(t)}getInstances(){return[this]}getAllApplicableFilters(){const t=this.group.registry.manager.filters.getActiveFilters(),i=this.group.registry.filters.getActiveFilters(),s=this.group.filters.getActiveFilters(),n=this.filters.getActiveFilters();return[...t,...i,...s,...n]}async applyAllAvailableFilters(){const t=await this.reader.baseInfo(),i=await this.reader.frameData(this.timeline.currentStep.index);if(this.root){const s=this.root;this.unmountFromDom(),this.mountToDom(s)}this.meta.set(t),this.setPixels(i.pixels)}},Lv=class{constructor(r){this.drive=r}formatAnalysisDisplayName(r,e){const t=`${r.name} (${r.getType()}, ${r.initialColor}})`;return r instanceof ur&&e?t+" "+e.toUpperCase():t}formatAnalysisKey(r,e){const t=r.key;return r instanceof ur&&e?t+"_"+e:t}formatFrameSlotValue(r,e){if(r.analysis instanceof ur&&e){let t=r.analysis.avg;return e==="min"&&(t=r.analysis.min),e==="max"&&(t=r.analysis.max),{key:this.formatAnalysisKey(r.analysis,e),value:t.toString()}}return{key:this.formatAnalysisKey(r.analysis),value:r.analysis.avg.toString()}}getData(){const r=[{key:"file",displayLabel:"File name"},{key:"timestamp",displayLabel:"Frame time"},{key:"frame",displayLabel:"Frame ID"}];this.drive.forEveryExistingSlot(t=>{t.analysis instanceof ur?(r.push({key:this.formatAnalysisKey(t.analysis,"min"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"min")}),r.push({key:this.formatAnalysisKey(t.analysis,"max"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"max")}),r.push({key:this.formatAnalysisKey(t.analysis,"avg"),displayLabel:this.formatAnalysisDisplayName(t.analysis,"avg")})):r.push({key:this.formatAnalysisKey(t.analysis),displayLabel:this.formatAnalysisDisplayName(t.analysis)})});const e=[];return this.drive.parent.files.value.sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const i={file:t.fileName,timestamp:ot.human(t.timeline.currentStep.absolute),frame:t.timeline.currentStep.index};t.slots.forEveryExistingSlot(s=>{if(s.analysis instanceof ur){const n=this.formatFrameSlotValue(s,"min"),a=this.formatFrameSlotValue(s,"max"),o=this.formatFrameSlotValue(s,"avg");i[n.key]=n.value,i[a.key]=a.value,i[o.key]=o.value}else{const n=this.formatFrameSlotValue(s);i[n.key]=n.value}}),e.push(i)}),{header:r,data:e}}downloadAsCsv(){const r=this.drive.parent,e=r.name??r.id??r.hash,{header:t,data:i}=this.getData(),s=Yn({fieldSeparator:";",filename:`group_${e}`,columnHeaders:t}),n=wu(s)(i);xu(s)(n)}},tt,Rv=(tt=class extends Au{constructor(t){super();c(this,"localGroup");c(this,"header");c(this,"list");this.drive=t}get group(){return this.drive.parent}buildHeader(){var a,o;const t=document.createElement("div");t.style.padding=tt.GAP_BASE,t.style.border="1px lightgray solid";const i=this.createElementWithText("div",this.group.label,void 0,"bold");if(t.appendChild(i),this.group.description){const l=this.createElementWithText("div",this.group.description,tt.FONT_SIZE_SMALL,"normal",tt.COLOR_BASE);l.style.paddingTop=tt.GAP_SMALL,t.appendChild(l)}const s=this.createElementWithText("div",`${this.group.files.value.length} files. MIN: ${(a=this.group.registry.minmax.value)==null?void 0:a.min.toFixed(3)} °C. MAX: ${(o=this.group.registry.minmax.value)==null?void 0:o.max.toFixed(3)} °C.`,tt.FONT_SIZE_SMALL,void 0,tt.COLOR_GRAY);s.style.paddingTop=tt.GAP_SMALL,t.appendChild(s);const n=this.createElementWithText("div",`Image exported at ${ot.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,tt.FONT_SIZE_SMALL,void 0,tt.COLOR_GRAY);return n.style.paddingTop=tt.GAP_SMALL,t}buildList(){const t=document.createElement("div");return t.style.boxSizing="border-box",t.style.width="100%",t.style.display="flex",t.style.flexWrap="wrap",t}buildInstance(t,i,s){const n=document.createElement("div");n.style.width=i.toString()+"%",n.style.padding=tt.GAP_SMALL,n.style.boxSizing="border-box";const a=document.createElement("div");n.appendChild(a);const o=this.createElementWithText("div",`${ot.human(t.timeline.currentStep.absolute)}`,tt.FONT_SIZE_SMALL,"bold");if(a.appendChild(o),this.list&&(this.group.files.forEveryInstance(l=>{if(this.localGroup){const h=this.localGroup.files.value.find(f=>f.fileName===l.fileName);h&&h.timeline.setRelativeTime(l.timeline.value)}}),this.list.appendChild(n),t.mountToDom(a),t.draw(),t.dom&&t.dom.visibleLayer&&(t.dom.visibleLayer.getLayerRoot().style.display="none"),s)){const l=this.group.files.value[0];if(l&&l.analysis.value.length>0){const h=document.createElement("table");h.style.width="100%",h.style.borderCollapse="collapse";const f=document.createElement("tr");["","AVG","MIN","MAX"].forEach(p=>{const g=this.createElementWithText("th",p,tt.FONT_SIZE_SMALL,void 0,tt.COLOR_GRAY);g.style.padding=tt.GAP_SMALL+"px",g.style.textAlign="left",f.appendChild(g)}),h.appendChild(f),a.appendChild(h),l.slots.forEveryExistingSlot((p,g)=>{const S=t.slots.createFromSerialized(p.serialized,g);if(S){const $=document.createElement("tr"),O=this.createElementWithText("td",p.analysis.name,tt.FONT_SIZE_SMALL,void 0,p.analysis.initialColor);O.style.borderTop=`1px solid ${tt.COLOR_LIGHT}`,O.style.padding=`${tt.GAP_SMALL}px 0px ${tt.GAP_SMALL} 0px`,$.appendChild(O);const P=(Y,A)=>{const D=this.createElementWithText("td",A?A.toFixed(3)+" °C":"",tt.FONT_SIZE_SMALL,void 0);D.style.borderTop=`1px solid ${tt.COLOR_LIGHT}`,D.style.paddingTop=`${tt.GAP_SMALL}px`,D.style.paddingBottom=`${tt.GAP_SMALL}px`,$.appendChild(D)};p.analysis instanceof ur?(P(p.analysis.initialColor,S.avg),P(p.analysis.initialColor,S.min),P(p.analysis.initialColor,S.max)):p.analysis instanceof Sr&&(P(p.analysis.initialColor,S.avg),P(p.analysis.initialColor),P(p.analysis.initialColor)),h.appendChild($)}})}}}onBuildDom(){var t,i;this.header=this.buildHeader(),this.list=this.buildList(),(t=this.container)==null||t.appendChild(this.header),(i=this.container)==null||i.appendChild(this.list)}beforeDomRemoved(){this.localGroup&&(this.localGroup.files.forEveryInstance(t=>t.unmountFromDom()),this.localGroup.files.removeAllInstances())}afterDomRemoved(){delete this.header,delete this.list,delete this.localGroup}onDownload(t){var h;const i=Math.random().toFixed(),s=this.group.registry.manager,n=s.addOrGetRegistry(i),a=n.groups.addOrGetGroup(this.group.id);(h=this.list)==null||h.appendChild(this.buildHorizontalScale(this.list,this.group.registry.minmax.value.min,this.group.registry.minmax.value.max,this.group.registry.range.value.from,this.group.registry.range.value.to,this.group.registry.palette.currentPalette.gradient,"gray","black")),this.localGroup=a,s.palette.setPalette(this.group.registry.manager.palette.value),n.range.imposeRange(this.group.registry.range.value);const o=this.group.files.sortedFiles.map(f=>f.thermalUrl);let l;o.forEach(f=>{l=n.batch.request(f,void 0,a,async()=>{})}),l.onResolve.set("temporary export listener",f=>{const p=100/t.columns;f.forEach(g=>{g instanceof qn&&this.buildInstance(g,p,t.showAnalysis)}),setTimeout(()=>{this.container&&this.downloadImage(t.fileName,this.container)},2e3)})}getFinalParams(t){const i=t!=null&&t.fileName?t.fileName:`group__${this.group.label}__export`;return t===void 0?{...tt.DEFAULT_PROPS,fileName:i}:{...tt.DEFAULT_PROPS,...t,fileName:i}}},c(tt,"DEFAULT_PROPS",{columns:3,width:1600,showAnalysis:!0,backgroundColor:"white"}),tt),Qi,Tv=(Qi=class extends Ct{constructor(){super(...arguments);c(this,"onSlotSync",new ie);c(this,"_currentPointer");c(this,"_csv");c(this,"_png")}validate(t){return t}afterSetEffect(){}turnOn(t){this.value=!0,this.setCurrentPointer(t),this.syncSlots(t)}turnOff(){this.value=!1,this.setCurrentPointer(void 0)}get currentPointer(){return this._currentPointer}forEveryExistingSlot(t){this._currentPointer!==void 0&&this._currentPointer.slots.forEveryExistingSlot(t)}setCurrentPointer(t){t===void 0&&this._currentPointer&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),t!==this._currentPointer&&(this._currentPointer!==void 0&&(this.endSyncingSlot(this._currentPointer,1),this.endSyncingSlot(this._currentPointer,2),this.endSyncingSlot(this._currentPointer,3),this.endSyncingSlot(this._currentPointer,4),this.endSyncingSlot(this._currentPointer,5),this.endSyncingSlot(this._currentPointer,6),this.endSyncingSlot(this._currentPointer,7)),this._currentPointer=t,this._currentPointer!==void 0&&(this.startSyncingSlot(this._currentPointer,1),this.startSyncingSlot(this._currentPointer,2),this.startSyncingSlot(this._currentPointer,3),this.startSyncingSlot(this._currentPointer,4),this.startSyncingSlot(this._currentPointer,5),this.startSyncingSlot(this._currentPointer,6),this.startSyncingSlot(this._currentPointer,7)))}getSlotListeners(t,i){const s=t.slots.getSlot(i);if(i===1)return{slot:s,serialise:t.slots.onSlot1Serialize,assign:t.slots.onSlot1Assignement};if(i===2)return{slot:s,serialise:t.slots.onSlot2Serialize,assign:t.slots.onSlot2Assignement};if(i===3)return{slot:s,serialise:t.slots.onSlot3Serialize,assign:t.slots.onSlot3Assignement};if(i===4)return{slot:s,serialise:t.slots.onSlot4Serialize,assign:t.slots.onSlot4Assignement};if(i===5)return{slot:s,serialise:t.slots.onSlot5Serialize,assign:t.slots.onSlot5Assignement};if(i===6)return{slot:s,serialise:t.slots.onSlot6Serialize,assign:t.slots.onSlot6Assignement};if(i===7)return{slot:s,serialise:t.slots.onSlot7Serialize,assign:t.slots.onSlot7Assignement}}startSyncingSlot(t,i){const{serialise:s}=this.getSlotListeners(t,i);s.set(Qi.LISTENER_KEY,n=>{this.forEveryOtherSlot(t,i,(a,o)=>{if(this.onSlotSync.call(n,i),a===void 0&&n){const l=o.slots.createFromSerialized(n,i);l==null||l.setSelected()}else a!==void 0&&n?(a.recieveSerialized(n),this.onSlotSync.call(a?a.serialized:void 0,i)):a!==void 0&&n===void 0&&a.analysis.file.slots.removeSlotAndAnalysis(i)})})}endSyncingSlot(t,i){this.forEveryOtherSlot(t,i,()=>{const{assign:s,serialise:n}=this.getSlotListeners(t,i);s.delete(Qi.LISTENER_KEY),n.delete(Qi.LISTENER_KEY)})}deleteSlot(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.file.slots.removeSlotAndAnalysis(i)})}setSlotSelected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setSelected(!1)})}setSlotDeselected(t,i){this.forEveryOtherSlot(t,i,s=>{s==null||s.analysis.setDeselected()})}allExceptOne(t){return this.parent.files.value.filter(i=>i!==t)}forEveryOtherSlot(t,i,s){this.allExceptOne(t).forEach(n=>{const a=n.slots.getSlot(i);s(a,n)})}recieveSlotSerialized(t,i){this.parent.files.forEveryInstance(s=>{if(s!==this.currentPointer)if(t){const n=s.slots.getSlot(i);n?n.recieveSerialized(t):s.slots.createFromSerialized(t,i)}else s.slots.removeSlotAndAnalysis(i)})}syncSlots(t){if(this.value===!1)return;this.setCurrentPointer(t);const i=this.parent.files.value.filter(n=>n!==t),s=t.slots.getSlotMap();i.forEach(n=>{var a,o;for(const[l,h]of s)if(h===void 0)n.slots.removeSlotAndAnalysis(l);else{const f=(a=n.slots.getSlot(l))==null?void 0:a.serialized,p=h.serialized;if(f!==p)if(n.slots.hasSlot(l))(o=n.slots.getSlot(l))==null||o.recieveSerialized(p);else{const g=n.slots.createFromSerialized(p,l);g==null||g.setSelected(!1)}}})}get csv(){return this._csv||(this._csv=new Lv(this)),this._csv}get png(){return this._png||(this._png=new Rv(this)),this._png}},c(Qi,"LISTENER_KEY","__analysis__sync"),Qi),Mv=class extends Ct{constructor(){super(...arguments);c(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(t=>t.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},Iv=class extends Ct{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e.sort((t,i)=>t.timestamp-i.timestamp)}get sortedFiles(){return this.value.sort((e,t)=>e.timestamp-t.timestamp)}afterSetEffect(e){this.map.clear(),e.forEach(t=>this._map.set(t.thermalUrl,t))}addFile(e){return this._map.has(e.thermalUrl)?this._map.get(e.thermalUrl):(this.value=[...this.value,e],e)}removeFile(e){const t=e instanceof qn?e:this.map.get(e);t&&(t.unmountFromDom(),this.value=this.value.filter(i=>i.thermalUrl!==t.thermalUrl))}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(t=>e(t))}downloadAllFiles(){this.forEveryInstance(e=>{const t=document.createElement("a");t.download=e.fileName,t.href=e.thermalUrl,t.click()})}},Du=class extends Ct{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},Uv=class extends Du{validate(r){return r}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const r=this.parent.files.value;if(r.length!==0)return r.reduce((e,t)=>t.min<e.min||t.max>e.max?{min:t.min<e.min?t.min:e.min,max:t.max>e.max?t.max:e.max}:e,{min:1/0,max:-1/0})}},zv=class extends Ct{constructor(e,t){super(e,t);c(this,"_hasAnyPlayback",!1);c(this,"onHasAnyCallback",new ie);c(this,"_playing",!1);c(this,"onPlayingStatusChange",new ie);c(this,"loopStep",0);c(this,"loopTimer");c(this,"_loopInterval",20);c(this,"onLoopIntervalChanged",new ie);c(this,"_duration",0);c(this,"onDurationChanged",new ie);c(this,"UUID",this.parent.id+"__listener");this.recalculateDuration(this.parent.files.value),this.recalculateHasAnyPlayback(this.parent.files.value),this.parent.registry.batch.onBatchComplete.set(this.UUID,i=>{const s=i.filter(a=>a instanceof qn);this.recalculateDuration(s),this.recalculateHasAnyPlayback(s);const n=this.value;this.value=n})}get hasAnyPlayback(){return this._hasAnyPlayback}set hasAnyPlayback(e){this._hasAnyPlayback!==e&&(this._hasAnyPlayback=e,this.onHasAnyCallback.call(e))}recalculateHasAnyPlayback(e){let t=!1;e.forEach(i=>{i.timeline.isSequence&&(t=!0)}),this.hasAnyPlayback=t}get playing(){return this._playing}set playing(e){this._playing!==e&&(this._playing=e,this.onPlayingStatusChange.call(this._playing))}get loopInterval(){return this._loopInterval}setLoopInterval(e){this._loopInterval=Math.round(e),this.onLoopIntervalChanged.call(this._loopInterval)}get duration(){return this._duration}set duration(e){e!==this._duration&&(this._duration=e,this.onDurationChanged.call(this._duration))}recalculateDuration(e){let t=0;e.forEach(i=>{i.timeline.duration>t&&(t=i.timeline.duration)}),this.duration=t}validate(e){return Math.min(Math.max(e,0),this.duration)}afterSetEffect(e){this.parent.files.forEveryInstance(t=>t.timeline.setRelativeTime(e))}setValueByPercent(e){const t=this.percentToMs(e);t!==this.value&&(this.value=t,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0))}setValueByRelativeMs(e){this.value=e,this.loopStep=Math.floor(this.duration/this.value),this.playing&&this.createTimerStep(!0)}percentToMs(e){return Math.floor(this.duration*(e/100))}msToPercent(e){return e/this.duration*100}createTimerStep(e=!1){if(this.duration===void 0||this.playing===!1)return;const t=this.loopStep+1,i=t*this.loopInterval;this.loopStep=t,i<=this.duration?(this.loopTimer&&clearTimeout(this.loopTimer),this.loopTimer=setTimeout(()=>{this.createTimerStep(e),this.value=i},this.loopInterval)):this.playing=!1}play(){this.playing===!1&&(this.playing=!0,this.createTimerStep(!0))}stop(){this.playing===!0&&(this.playing=!1,this.loopTimer&&clearTimeout(this.loopTimer))}reset(){this.value!==0&&(this.value=0,this.loopStep=0)}},ws,Fv=(ws=class extends Ct{constructor(t){super(t,void 0);c(this,"timeout")}calculateData(){let t=[],i=[];const s=[],n=this.parent.files.value.sort((o,l)=>o.timestamp-l.timestamp);i=n[0].analysisData.value.values[0],t=n[0].analysisData.value.colors,this.parent.files.forEveryInstance(o=>{const l=[new Date(o.timestamp)];o.analysis.value.forEach(async h=>{h.graph.state.MIN===!0&&h.min&&l.push(h.min),h.graph.state.MAX===!0&&h.max&&l.push(h.max),h.graph.state.AVG===!0&&h.avg&&l.push(h.avg)}),l.length>1&&s.push(l)}),t.length>0?this.value={colors:t,data:[i,...s]}:this.value=void 0,console.log("Přepočítal jsem data",this.value)}turnOn(){this.parent.files.forEveryInstance(t=>{t.analysisData.addListener(ws.LISTENER_ID,()=>{this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.calculateData()},0)})})}turnOff(){this.parent.files.forEveryInstance(t=>{t.analysisData.removeListener(ws.LISTENER_ID)})}_wtf(){this.parent.files.forEveryInstance(t=>{t.analysis.layers.forEach(i=>{i.graph.setAvgActivation(!0)})})}validate(t){return t}afterSetEffect(){}},c(ws,"LISTENER_ID","AnalysisGroupGraph"),ws),jv=class extends yo{constructor(t,i,s,n){super();c(this,"hash",Math.random());c(this,"minmax",new Uv(this,void 0));c(this,"files",new Iv(this,[]));c(this,"cursorPosition",new Mv(this,void 0));c(this,"analysisSync",new Tv(this,!1));c(this,"analysisGraph",new Fv(this));c(this,"_playback");c(this,"forEveryInstance",t=>{this.files.value.forEach(i=>t(i))});c(this,"filters",new vo(this));this.registry=t,this.id=i,this.name=s,this.description=n}get label(){return this.name??this.id??this.hash}get pool(){return this.registry.manager.pool}get tool(){return this.registry.manager.tool}get playback(){return this._playback||(this._playback=new zv(this,0)),this._playback}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset(),this.analysisSync.reset()}getInstances(){return this.files.value}startBatch(t){return this.registry.batch.getBatchById(t)}},Lu=class{constructor(r,e){this.thermalUrl=r,this.visibleUrl=e}},Ei=class Ru extends Lu{constructor(e,t,i){super(e),this.code=t,this.message=i}isSuccess(){return!1}static fromError(e){return new Ru(e.url,e.code,e.message)}},Tu=class extends Error{constructor(r,e,t){super(t),this.code=r,this.url=e}},Di=class extends Lu{constructor(t,i,s,n,a,o){super(n,a);c(this,"id",Math.random());c(this,"baseInfoCache");c(this,"fileName");c(this,"originalBuffer");c(this,"_buffer");this.service=t,this.parser=s,this._buffer=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),o===!0&&(this.originalBuffer=this.copyBuffer(this.buffer))}get pool(){return this.service.pool}get buffer(){return this._buffer}set buffer(t){this._buffer=t}isSuccess(){return!0}copyBuffer(t){const i=new ArrayBuffer(t.byteLength),s=new Uint8Array(i);return s.set(new Uint8Array(t)),s.buffer}cloneForInstance(){return this}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const t=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=t,t}getFrameSubset(t){return this.parser.getFrameSubset(this.buffer,t)}async frameData(t){const i=this.getFrameSubset(t);return await this.parser.frameData(i.array,i.dataType)}async pointAnalysisData(t,i){return await this.parser.pointAnalysisData(this.buffer,t,i)}async rectAnalysisData(t,i,s,n){return await this.parser.rectAnalysisData(this.buffer,t,i,s,n)}async ellipsisAnalysisData(t,i,s,n){return await this.parser.ellipsisAnalysisData(this.buffer,t,i,s,n)}async applyFilters(t){if(this.originalBuffer===void 0)return console.error("trying to apply filters on a filereader template"),this;this.buffer=this.copyBuffer(this.originalBuffer);for(const i of t)this.buffer=await i.apply(this.buffer);return this.baseInfoCache=void 0,await this.baseInfo(),this}async createInstance(t){const i=this.cloneForInstance(),s=await i.baseInfo(),n=await i.frameData(0),a=qn.fromService(t,i,s,n);return t.files.addFile(a),a}},Nv=async r=>{const e=new DataView(r),t=e.getUint16(17,!0),i=e.getUint16(19,!0),s=r.byteLength,n=(T,M)=>{const F=T.getBigInt64(M,!0),I=62135596800000n,z=10000n,R=24n*60n*60n*1000n*z,K=0x4000000000000000n,he=0x8000000000000000n;let B=F&0x3fffffffffffffffn;F&he&&(B>K-R&&(B-=K),B<0&&(B+=R));const ae=B/z-I;return Number(ae)},a=e.getUint8(15);let o=2;a===1&&(o=4);const l=57,h=t*i*o,f=l+h,p=r.slice(25),g=p.byteLength/f,S=T=>{const M=T*f,F=M+f,I=p.slice(M,F),z=new DataView(I),R=z.getFloat32(8,!0),K=z.getFloat32(12,!0),he=n(z,0),C=z.getFloat32(24,!0),B=z.getFloat32(28,!0);return{timestamp:he,min:R,max:K,emissivity:C,reflectedKelvins:B}},$=[];for(let T=0;T<g;T++){const M=S(T);$.push(M)}const O={emissivity:0,reflectedKelvins:0};let P=1/0,Y=-1/0;const A=[];$.forEach(T=>{O.emissivity=O.emissivity+T.emissivity,O.reflectedKelvins=O.reflectedKelvins+T.reflectedKelvins,T.min<P&&(P=T.min),T.max>Y&&(Y=T.max),A.push(T.timestamp)});const D=A[0],X=[];A.forEach((T,M)=>{const F=A[M+1];let I=0;F===void 0&&(I=0),I=F-T;const z=T-D;X.push({absolute:T,relative:z,offset:isNaN(I)?0:I,index:M})});const W=$[$.length-1].timestamp-$[0].timestamp,se=W/g,k=1e3/se,L=$[0].timestamp;return{width:t,height:i,timestamp:L,bytesize:s,frameCount:g,duration:W,frameInterval:se,fps:k,timeline:X,min:P,max:Y,averageEmissivity:O.emissivity/$.length,averageReflectedKelvins:O.reflectedKelvins/$.length}},Wv=(r,e)=>{const t=new DataView(r.slice(0,25)),i=t.getUint8(15),s=t.getUint16(17,!0),n=t.getUint16(19,!0),a=i===1?4:2,o=57,l=s*n*a,h=o+l,f=r.slice(25),p=e*h,g=p+h;return{array:f.slice(p,g),dataType:i}},Hv=async(r,e)=>{const t=new DataView(r),i=t.getBigInt64(0,!0),s=62135596800000n,n=10000n,a=24n*60n*60n*1000n*n,o=0x4000000000000000n,l=0x8000000000000000n;let f=i&0x3fffffffffffffffn;i&l&&(f>o-a&&(f-=o),f<0&&(f+=a));const g=f/n-s,S=Number(g),$=t.getFloat32(8,!0),O=t.getFloat32(12,!0),P=t.getFloat32(24,!0),Y=t.getFloat32(28,!0),A=r.slice(57);let D=[];if(e===0){const X=new Uint16Array(A),W=Math.abs($-O),se=65535;X.forEach(k=>{const L=k/se;D.push($+W*L)})}else e===1&&(D=Array.from(new Float32Array(A)));return{timestamp:S,min:$,max:O,emissivity:P,reflectedKelvins:Y,pixels:D}},Bv=async(r,e,t)=>{const i=new DataView(r),s=i.getUint16(17,!0),n=i.getUint16(19,!0),a=(Y,A)=>{const D=Y.getBigInt64(A,!0),X=62135596800000n,W=10000n,se=24n*60n*60n*1000n*W,k=0x4000000000000000n,L=0x8000000000000000n;let M=D&0x3fffffffffffffffn;D&L&&(M>k-se&&(M-=k),M<0&&(M+=se));const I=M/W-X;return Number(I)},o=i.getUint8(15);let l=2;o===1&&(l=4);const h=57,f=s*n*l,p=h+f,g=r.slice(25),S=g.byteLength/p,$={},O=Y=>{const A=Y*p,D=A+p,X=g.slice(A,D),W=new DataView(X),se=a(W,0),k=W.getFloat32(8,!0),T=W.getFloat32(12,!0)-k,F=57+t*l*s+e*l;let I=0;if(o===1)I=W.getFloat32(F,!0);else if(o===0){const K=W.getInt16(F,!0)/65535;I=k+T*K}return{timestamp:se,temperature:I}};let P=0;for(let Y=0;Y<S;Y++){const A=O(Y);P===0&&(P=A.timestamp),$[A.timestamp-P]=A.temperature}return $},Gv=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(D,X)=>{const W=D.getBigInt64(X,!0),se=62135596800000n,k=10000n,L=24n*60n*60n*1000n*k,T=0x4000000000000000n,M=0x8000000000000000n;let I=W&0x3fffffffffffffffn;W&M&&(I>T-L&&(I-=T),I<0&&(I+=L));const R=I/k-se;return Number(R)},h=n.getUint8(15);let f=2;h===1&&(f=4);const p=57,g=a*o*f,S=p+g,$=r.slice(25),O=$.byteLength/S,P={},Y=D=>{const X=D*S,W=X+S,se=$.slice(X,W),k=new DataView(se),L=l(k,0),T=k.getFloat32(8,!0),F=k.getFloat32(12,!0)-T,I=57,z=e,R=e+i,K=t,he=t+s;let C=1/0,B=-1/0,fe=0,ae=0;for(let Ye=K;Ye<=he;Ye++){const it=Ye*a;for(let lt=z;lt<=R;lt++){const ce=I+(it+lt)*f;let ge=NaN;if(h===1)ge=k.getFloat32(ce,!0);else{const st=k.getInt16(ce,!0)/65535;ge=T+F*st}ge<C&&(C=ge),ge>B&&(B=ge),ae+=ge,fe++}}const Ee={min:C,max:B,avg:ae/fe,count:fe};return{timestamp:L,result:Ee}};let A=0;for(let D=0;D<O;D++){const X=Y(D);A===0&&(A=X.timestamp),P[X.timestamp-A]=X.result}return P},Vv=async r=>{console.log("Reading histogram");let e=[];const t=async P=>{const Y=new DataView(P.slice(0,25)),A=Y.getUint8(15),D=Y.getUint16(17,!0),X=Y.getUint16(19,!0),W=A===1?4:2,se=57,k=D*X*W,L=se+k,T=P.slice(25),M=T.byteLength/L;let F=[];for(let I=0;I<M;I++){const z=I*L,R=z+57,K=R+k,he=T.slice(R,K);if(A===0){const C=new DataView(T.slice(z,56)),B=C.getFloat32(8,!0),fe=C.getFloat32(12,!0),ae=new Uint16Array(he),Ee=Math.abs(B-fe),Ye=65535;ae.forEach(it=>{const lt=it/Ye;F.push(B+Ee*lt)})}else A===1&&(F=F.concat(Array.from(new Float32Array(he))))}return F};(await Promise.all(r.map(P=>t(P)))).forEach(P=>{e=e.concat(P)}),e.sort((P,Y)=>P-Y);const s=e[0],n=e[e.length-1],a=Math.abs(s-n),o=255,l=a/o,h=[];let f=[...e];for(let P=0;P<o;P++){const Y=s+l*P,A=Y+l,D=f.findIndex(X=>X>A);if(D===0){const X={from:Y,to:A,count:0,percentage:0};h.push(X)}else{const W=f.slice(0,D-1).length,se=W/e.length*100,k={from:Y,to:A,count:W,percentage:se};h.push(k),f=f.slice(D)}}const p=[...h].sort((P,Y)=>P.percentage-Y.percentage),g=p[0].percentage,S=p[p.length-1].percentage,$=Math.abs(g-S);return h.map(P=>({...P,height:P.percentage/$*100}))},Yv=(r,e)=>{const t=e.endsWith("lrc"),s=new TextDecoder().decode(r.slice(0,4))==="LRC\0";return t&&s},qv=async(r,e,t,i,s)=>{const n=new DataView(r),a=n.getUint16(17,!0),o=n.getUint16(19,!0),l=(X,W)=>{const se=X.getBigInt64(W,!0),k=62135596800000n,L=10000n,T=24n*60n*60n*1000n*L,M=0x4000000000000000n,F=0x8000000000000000n;let z=se&0x3fffffffffffffffn;se&F&&(z>M-T&&(z-=M),z<0&&(z+=T));const K=z/L-k;return Number(K)},h=n.getUint8(15);let f=2;h===1&&(f=4);const p=57,g=a*o*f,S=p+g,$=r.slice(25),O=$.byteLength/S,P={},Y=(X,W)=>{const se=e+i/2,k=t+s/2,L=(X-se)/(i/2),T=(W-k)/(s/2);return L*L+T*T<=1},A=X=>{const W=X*S,se=W+S,k=$.slice(W,se),L=new DataView(k),T=l(L,0),M=L.getFloat32(8,!0),I=L.getFloat32(12,!0)-M,z=57,R=e,K=e+i,he=t,C=t+s;let B=1/0,fe=-1/0,ae=0,Ee=0;for(let it=he;it<=C;it++){const lt=it*a;for(let ce=R;ce<=K;ce++)if(Y(ce,it)){const ge=z+(lt+ce)*f;let Ae=NaN;if(h===1)Ae=L.getFloat32(ge,!0);else{const We=L.getInt16(ge,!0)/65535;Ae=M+I*We}Ae<B&&(B=Ae),Ae>fe&&(fe=Ae),Ee+=Ae,ae++}}const Ye={min:B,max:fe,avg:Ee/ae,count:ae};return{timestamp:T,result:Ye}};let D=0;for(let X=0;X<O;X++){const W=A(X);D===0&&(D=W.timestamp),P[W.timestamp-D]=W.result}return P},Xv=[{extension:"lrc",minme:"application/octet-stream"}],Kv={name:"LabIR Recording (.lrc)",description:"Radiometric data developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",deviceDescription:"A thermal camera designed for school education.",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"},{deviceName:"Custom measurement systems by IRT UWB in Pilsen (CZ)",deviceUrl:"https://irt.zcu.cz",deviceDescription:"Specialised applications of IR diagnostics in the field of industry, research, medicine, security or education.",manufacturer:"IRT UWB in Pilsen (CZ)",manufacturerUrl:"https://irt.zcu.cz"}],extensions:Xv,is:Yv,baseInfo:Nv,getFrameSubset:Wv,frameData:Hv,registryHistogram:Vv,pointAnalysisData:Bv,rectAnalysisData:Gv,ellipsisAnalysisData:qv},Mu=Object.freeze(Kv),Zv={LrcParser:Mu},Iu=Object.values(Zv),Uu=(r,e)=>{const t=Iu.find(i=>i.is(r,e));if(t===void 0)throw new Tu(2,e,`No parser found for '${e}'.`);return t},zu=Iu.map(r=>r.extensions),Jv=zu.map(r=>r.map(e=>e.minme+", ."+e.extension).join(", ")).join(", "),Qv=class Fu{constructor(e,t,i){c(this,"response");this.service=e,this.thermalUrl=t,this.visibleUrl=i}static fromUrl(e,t,i){return new Fu(e,t,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(await fetch(this.thermalUrl))),this.response}async processResponse(e){const t=e;if(t.status!==200)return this.pocessTheService(new Ei(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await t.arrayBuffer();try{const s=Uu(i,this.thermalUrl);return this.pocessTheService(new Di(this.service,i,s,this.thermalUrl,this.visibleUrl))}catch(s){if(s instanceof Tu)return this.pocessTheService(Ei.fromError(s));throw s}}pocessTheService(e){return e}},ey=class ju{constructor(e,t,i=!0){c(this,"_hover",!1);c(this,"onMouseEnter",new ie);c(this,"onMouseLeave",new ie);c(this,"onDrop",new ie);c(this,"onProcessingEnd",new ie);c(this,"input");c(this,"hydrated",!1);c(this,"multiple");c(this,"bindedEnterListener");c(this,"bindedLeaveListener");c(this,"bindedDropListener");c(this,"bindedInputChangeListener");c(this,"bindedDragoverListener");c(this,"bindedClickListener");this.service=e,this.element=t,this.multiple=i,this.bindedLeaveListener=this.handleLeave.bind(this),this.bindedEnterListener=this.handleEnter.bind(this),this.bindedDropListener=this.handleDrop.bind(this),this.bindedInputChangeListener=this.handleInputChange.bind(this),this.bindedDragoverListener=this.handleDragover.bind(this),this.bindedClickListener=this.handleClick.bind(this)}get hover(){return this._hover}static listenOnElement(e,t,i=!0){const s=new ju(e,t,i);return s.hydrate(),s}hydrate(){this.hydrated===!1&&(this.hydrated=!0,this.input=this.getInput(),this.element.addEventListener("dragover",this.bindedDragoverListener),this.element.addEventListener("dragleave",this.bindedLeaveListener),this.element.addEventListener("dragend",this.bindedLeaveListener),this.element.addEventListener("pointerdown",this.bindedClickListener),this.element.addEventListener("drop",this.bindedDropListener),this.input.addEventListener("change",this.bindedInputChangeListener))}dehydrate(){this.hydrated===!0&&(this.hydrated=!1,this.input&&this.input.remove(),this.element.removeEventListener("dragover",this.bindedDragoverListener),this.element.removeEventListener("dragleave",this.bindedLeaveListener),this.element.removeEventListener("dragend",this.bindedLeaveListener),this.element.removeEventListener("pointerdown",this.bindedClickListener),this.element.removeEventListener("drop",this.bindedDropListener))}handleClick(e){e.preventDefault(),this.input&&this.input.click()}handleDragover(e){e.preventDefault(),this.handleEnter()}async handleFiles(e){let t=[];if(this.multiple)t=await Promise.all(e.map(async i=>await this.service.loadUploadedFile(i)));else{const i=e[0];i&&t.push(await this.service.loadUploadedFile(i))}return t}async handleDrop(e){e.preventDefault(),this.onDrop.call();let t=[];const i=e.dataTransfer;return i&&i.files&&(t=await this.handleFiles(Array.from(i.files))),this.onProcessingEnd.call(t,e),this.handleLeave(),{results:t,event:e}}async handleInputChange(e){e.preventDefault(),this.onDrop.call();const t=e.target;let i=[];return t.files&&(i=await this.handleFiles(Array.from(t.files)),this.onProcessingEnd.call(i,e),this.handleLeave()),{results:i,event:e}}handleEnter(){this._hover===!1&&(this._hover=!0,this.onMouseEnter.call())}handleLeave(){this._hover===!0&&(this._hover=!1,this.onMouseLeave.call())}getInput(){const e=document.createElement("input");return e.type="file",e.accept=Jv,this.multiple&&(e.multiple=!0),e}openFileDialog(e=!0){this.input!==void 0&&(this.input.multiple=e,this.input.click())}},ty=class{constructor(r){c(this,"requestsByUrl",new Map);c(this,"cacheByUrl",new Map);this.manager=r}get pool(){return this.manager.pool}static isolatedInstance(r,e="isolated_registry"){const i=new gh(r).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(r){return this.requestsByUrl.has(r)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(r){return this.cacheByUrl.has(r)}async loadUploadedFile(r){try{const e=await r.arrayBuffer(),t=Uu(e,r.name);return new Di(this,e,t,r.name)}catch(e){return new Ei(r.name,3,e.message)}}handleDropzone(r,e=!0){return ey.listenOnElement(this,r,e)}async loadFile(r,e){if(this.cacheByUrl.has(r))return this.cacheByUrl.get(r);if(this.requestsByUrl.has(r))return this.requestsByUrl.get(r).load();{const t=Qv.fromUrl(this,r,e);this.requestsByUrl.set(r,t);const i=await t.load();return this.requestsByUrl.delete(r),this.cacheByUrl.set(r,i),i}}async loadFiles(r){return r}},ry=class extends Ct{validate(r){return r}afterSetEffect(){}setGraphSmooth(r){this.value=r}},iy=class extends Ct{get availablePalettes(){return hi}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>{e.forEveryInstance(t=>t.recievePalette(r))})}setPalette(r){this.value=r}},sy=class extends Ct{validate(r){return r}afterSetEffect(r){this.parent.forEveryRegistry(e=>e.forEveryInstance(t=>{t.canvasLayer.canvas.style.imageRendering=r===!0?"auto":"pixelated"}))}setSmooth(r){this.value=r}},fd=class Wl{constructor(e,t){c(this,"_loading",!1);c(this,"onResolve",new ie);c(this,"timeout");c(this,"queue",[]);this.loader=e,this.id=t}get loading(){return this._loading}get size(){return this.queue.length}static init(e,t){return new Wl(e,t)}static initWithRequest(e,t,i=void 0,s,n){const a=new Wl(e);return a.request(t,i,s,n),a}request(e,t,i,s){this.queue.push({thermalUrl:e,visibleUrl:t,group:i,callback:s}),this.timeout!==void 0&&clearTimeout(this.timeout),this.timeout=setTimeout(async()=>{this._loading=!0;const n=await Promise.all(this.queue.map(async l=>({result:await this.loader.registry.service.loadFile(l.thermalUrl,l.visibleUrl),callback:l.callback,group:l.group}))),a=await Promise.all(n.map(async l=>({result:l.result instanceof Di?await l.result.createInstance(l.group):await l.result,callback:l.callback})));this.loader.registry.postLoadedProcessing();const o=await Promise.all(a.map(async l=>(await l.callback(l.result),l.result)));this.loader.onBatchComplete.call(o),this.loader.batchFinished(this),this.onResolve.call(o)},0)}close(){this._loading=!0}},ny=class{constructor(r){c(this,"onBatchComplete",new ie);c(this,"set",new Set);this.registry=r}get numberOfBatches(){return this.set.size}get currentOpenBatch(){return Array.from(this.set).find(r=>r.loading===!1)}get hasLoadingBatches(){return Array.from(this.set).some(r=>r.loading===!0)}get numLoadingBatches(){return Array.from(this.set).filter(r=>r.loading===!0).length}getBatchById(r){const e=Array.from(this.set).find(i=>i.id===r);if(e)return e;const t=fd.init(this,r);return this.set.add(t),t}request(r,e,t,i,s){let n=s?this.getBatchById(s):this.currentOpenBatch;return n===void 0&&(n=fd.init(this),this.set.add(n),this.registry.loading.markAsLoading()),n.request(r,e,t,i),n}closeBatch(){this.currentOpenBatch!==void 0&&this.currentOpenBatch.close()}batchFinished(r){this.set.delete(r),this.numberOfBatches===0&&this.registry.loading.markAsLoaded()}},ay=class extends Ct{validate(r){return Math.min(Math.max(0,r),1)}afterSetEffect(r){this.parent.forEveryInstance(e=>e.recieveOpacity(r))}imposeOpacity(r){return this.value=r,this.value}},oy=class extends Ct{get currentRange(){return this.value}validate(r){if(r===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return r;const t={...r};return r.from<e.min&&(t.from=e.min),r.to>e.max&&(t.to=e.max),t}afterSetEffect(r){r&&this.parent.forEveryInstance(e=>e.recieveRange(r))}imposeRange(r){return r===void 0&&this.value===void 0||r===void 0&&this.value!==void 0&&(this.value=r),r!==void 0&&this.value===void 0?this.value=r:r!==void 0&&this.value!==void 0&&(this.value.from!==r.from||this.value.to!==r.to)&&(this.value=r),this.value}applyMinmax(){if(this.parent.minmax.value){const r={from:this.parent.minmax.value.min,to:this.parent.minmax.value.max};this.imposeRange(r)}}applyAuto(){if(this.parent.histogram.value){const e=this.parent.histogram.value.filter(i=>i.height>=10),t={from:e[0].from,to:e[e.length-1].to};this.imposeRange(t)}}},ly=class extends Ct{constructor(){super(...arguments);c(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(t=>this._map.set(t.id,t))}addExistingGroup(e){this.value.map(t=>t.hash).includes(e.hash)||(this.value=[...this.value,e])}addOrGetGroup(e,t,i){if(this._map.has(e))return this._map.get(e);const s=new jv(this.parent,e,t,i);return this._map.set(e,s),this.value.push(s),this.value=[...this.value],s}removeGroup(e){var t;this._map.has(e)&&((t=this._map.get(e))==null||t.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},hy=class extends Ct{constructor(){super(...arguments);c(this,"_resolution",150);c(this,"buffer",new Map);c(this,"bufferPixelsCount",0);c(this,"_bufferResolution",1e3);c(this,"_loading",!1);c(this,"onCalculationStart",new ie);c(this,"onCalculationEnd",new ie)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}get loading(){return this._loading}set loading(e){this._loading=e}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),1e3))}validate(e){return e}afterSetEffect(){}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(t=>t.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((t,i,s,n,a)=>{let l=t.reduce((S,$)=>{const O=$.reduce((P,Y)=>[...P,...Y],[]);return[...S,...O]},[]).sort((S,$)=>S-$);const h=n/a;let f=i+h;const p=new Map;let g=0;for(;f!==!1;){const S=l.findIndex(P=>P>f),$=l.slice(0,S).length;p.set(f-h/2,$),g+=$,l=l.slice(S);const O=f+h;f=O<s?O:!1}return{result:p,resultCount:g}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(t=>{this.buffer=t.result,this.bufferPixelsCount=t.resultCount,this.recalculateHistogram()})}}async recalculateHistogram(){this.onCalculationStart.call(),this.loading=!0;const t=this.parent.groups.value.map(i=>i.files.value).reduce((i,s)=>(i=i.concat(s),i),[]).map(i=>i.reader.buffer);try{const i=await this.parent.pool.exec(Mu.registryHistogram,[t]);this.value=i,this.loading=!1,this.onCalculationEnd.call(!0)}catch{this.loading=!1,this.onCalculationEnd.call(!1)}}},cy=class extends Ct{validate(r){return r}afterSetEffect(){}markAsLoading(){this.value===!1&&(this.value=!0)}markAsLoaded(){this.value===!0&&(this.value=!1)}},dy=class extends Du{validate(r){return r}afterSetEffect(){}recalculateFromGroups(){const r=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(r),this.value}_getMinmaxFromAllGroups(r){return r.length===0?void 0:r.reduce((t,i)=>i.minmax.value===void 0?t:{min:i.minmax.value.min<t.min?i.minmax.value.min:t.min,max:i.minmax.value.max>t.max?i.minmax.value.max:t.max},{min:1/0,max:-1/0})}},uy=class extends yo{constructor(e,t,i){super();c(this,"hash",Math.random());c(this,"groups",new ly(this,[]));c(this,"_batch");c(this,"onProcessingStart",new ie);c(this,"onProcessingEnd",new ie);c(this,"opacity",new ay(this,1));c(this,"minmax",new dy(this,void 0));c(this,"loading",new cy(this,!1));c(this,"range",new oy(this,void 0));c(this,"histogram",new hy(this,[]));c(this,"palette");c(this,"filters",new vo(this));this.id=e,this.manager=t,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(t=>t.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const t=await Promise.all(Object.entries(e).map(async([s,n])=>{const a=this.groups.addOrGetGroup(s),o=await Promise.all(n.map(l=>this.service.loadFile(l.thermalUrl,l.visibleUrl)));return{group:a,groupFiles:o}})),i=await Promise.all(t.map(async({group:s,groupFiles:n})=>await Promise.all(n.map(async o=>o instanceof Di?await o.createInstance(s):!1))));return this.postLoadedProcessing(),i}async loadFullOneFile(e,t){this.reset(),this.loading.markAsLoading();const i=this.groups.addOrGetGroup(t),s=await this.service.loadFile(e.thermalUrl,e.visibleUrl),n=s instanceof Di?await s.createInstance(i):s;return this.loading.markAsLoaded(),this.postLoadedProcessing(),n}get batch(){return this._batch||(this._batch=new ny(this)),this._batch}registerRequest(e,t=void 0,i,s){this.batch.request(e,t,i,s)}async postLoadedProcessing(){if(this.onProcessingStart.call(),this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value)if(this.range.value===void 0)this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max});else{const e=Math.max(this.range.value.from,this.minmax.value.min),t=Math.min(this.range.value.to,this.minmax.value.max);(e!==this.range.value.from||t!==this.range.value.to)&&this.range.imposeRange({from:Math.max(this.range.value.from,this.minmax.value.min),to:Math.min(this.range.value.to,this.minmax.value.max)})}this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded(),this.onProcessingEnd.call()}reset(){this.groups.removeAllGroups(),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}getInstances(){let e=[];return this.groups.value.forEach(t=>{e=[...e,...t.getInstances()]}),e}},wo=class{constructor(r){c(this,"active",!1);this.manager=r}activate(){this.onActivate()}deactivate(){this.onDeactivate()}},xo=class extends wo{},py=class extends xo{constructor(){super(...arguments);c(this,"key","add-ellipsis");c(this,"name","addellipsisanalysis");c(this,"description","clickandaddellipsis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M48.87,21.96C47.6,9.62,37.17,0,24.5,0,10.97,0,0,10.97,0,24.5h0c0,12.67,9.62,23.1,21.96,24.37,2.71,8.76,10.88,15.13,20.54,15.13,11.87,0,21.5-9.63,21.5-21.5,0-9.66-6.37-17.82-15.13-20.54ZM4,24.5C4,13.2,13.2,4,24.5,4c10.15,0,18.57,7.42,20.2,17.11-.72-.07-1.45-.11-2.2-.11-11.87,0-21.5,9.63-21.5,21.5,0,.74.04,1.47.11,2.2-9.69-1.62-17.11-10.05-17.11-20.2ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createEllipsisFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer()){if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else if(e.analysis.file.slots.value.size<=Pu.MAX_SLOTS){const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},fy=class extends xo{constructor(){super(...arguments);c(this,"key","add-rect");c(this,"name","addrectangleanalysis");c(this,"description","clickandaddrectangle");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M49,22.01V0H0v49h22.01c2.76,8.7,10.89,15,20.49,15,11.87,0,21.5-9.63,21.5-21.5,0-9.61-6.3-17.74-15-20.49ZM4,45V4h41v17.16c-.82-.1-1.65-.16-2.5-.16-11.87,0-21.5,9.63-21.5,21.5,0,.85.06,1.68.16,2.5H4ZM55.23,44.5h-10.65v10.65h-4v-10.65h-10.65v-4h10.65v-10.65h4v10.65h10.65v4Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createRectFrom(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){if(e.isInSelectedLayer())if(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.width<=0||e.analysis.height<=0)e.analysis.layers.removeAnalysis(e.analysis.key);else{const t=e.analysis.file.slots.getNextFreeSlotNumber();t!==void 0&&e.file.slots.assignSlot(t,e.analysis)}}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointLeave(){}onPointEnter(){}},gy=class extends xo{constructor(){super(...arguments);c(this,"key","add-point");c(this,"name","addpointanalysis");c(this,"description","clickandaddpoint");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path fill="currentcolor" d="M34,19h-15v15h-4v-15H0v-4h15V0h4v15h15v4ZM64,42.5c0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5,21.5,9.63,21.5,21.5ZM55.23,40.5h-10.65v-10.65h-4v10.65h-10.65v4h10.65v10.65h4v-10.65h10.65v-4Z"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{const s=i.group.tool.tools.inspect.getLabelValue(e,t,i);return`X:${e}<br />Y:${t}<br />${s}`})}onActivate(){this.manager.forEveryInstance(e=>{e.analysis.layers.selectedOnly.forEach(t=>{t.setDeselected()})})}onDeactivate(){}onCanvasLeave(){}onCanvasClick(e,t,i){i.analysis.layers.createPointAt(e,t).setSelected(!0)}onPointDown(){}onPointUp(e){e.isInSelectedLayer()&&(e.deactivate(),e.analysis.file.group.tool.selectTool("edit"),e.analysis.ready=!0,e.analysis.onMoveOrResize.call(e.analysis))}onPointMove(){}onPointLeave(){}onPointEnter(){}},my=class extends wo{constructor(){super(...arguments);c(this,"key","edit");c(this,"name","editanalysis");c(this,"description","dragcornersofselectedanalysis");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <polygon points="34 17.03 34 -.02 30 -.02 30 17.03 17 17.03 17 32 0 32 0 36 17 36 17 47 46.97 47 46.97 17.03 34 17.03" fill="currentcolor"/>
</svg>`)}onActivate(){}onDeactivate(){}onCanvasLeave(){}onCanvasClick(){}onPointEnter(e){e.mouseEnter()}onPointLeave(e){e.active===!1&&e.mouseLeave()}onPointMove(e,t,i){e.isInSelectedLayer()&&e.active&&(e.setXFromTool(i),e.setYFromTool(t),e.analysis.onMoveOrResize.call(e.analysis))}onPointDown(e){e.isInSelectedLayer()&&e.active===!1&&e.activate()}onPointUp(e){e.active===!0&&e.deactivate()}getLabelValue(e,t,i){const s=i.getTemperatureAtPoint(e,t),n=i.analysis.layers.all.filter(o=>o.isWithin(e,t)).map(o=>{const l=o.selected?"span":"s";return`<${l} style="color: ${o.initialColor};">
                    ${o.name}
                </${l}>`});return`${n.length>0?n.join("<br />")+"<br />":""}${s&&s.toFixed(2)+" °C<br />"}X: ${e}<br />Y: ${t}`}},Nu=class extends wo{constructor(){super(...arguments);c(this,"key","inspect");c(this,"name","inspecttemperatures");c(this,"description","usemousetoinspecttemperaturevalues");c(this,"icon",`<?xml version="1.0" encoding="UTF-8"?>
<svg class="thermal-tool-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M17.58,42.03c-1.39,0-2.65-.34-3.79-1.01-1.14-.68-2.04-1.58-2.72-2.72-.68-1.14-1.01-2.4-1.01-3.78s.34-2.65,1.01-3.79c.67-1.14,1.58-2.04,2.72-2.72,1.14-.68,2.4-1.01,3.79-1.01s2.65.34,3.79,1.01c1.14.68,2.04,1.58,2.72,2.72s1.01,2.4,1.01,3.79-.34,2.64-1.01,3.78c-.68,1.14-1.58,2.05-2.72,2.72-1.14.68-2.4,1.01-3.79,1.01ZM17.58,37.04c.47,0,.9-.11,1.28-.34.38-.23.69-.53.91-.92.22-.39.34-.81.34-1.27s-.11-.9-.34-1.28c-.23-.38-.53-.69-.91-.91s-.81-.34-1.28-.34-.88.11-1.27.34c-.39.23-.69.53-.92.91-.23.38-.34.81-.34,1.28s.11.88.34,1.27c.22.39.53.69.92.92.39.23.81.34,1.27.34ZM56.24,38.45h-8.28c-.06-.69-.21-1.31-.46-1.87-.25-.56-.59-1.04-1.03-1.45-.44-.41-.96-.72-1.58-.94s-1.32-.33-2.1-.33c-1.37,0-2.53.33-3.47,1s-1.66,1.62-2.14,2.86-.73,2.74-.73,4.48c0,1.84.25,3.38.74,4.62s1.21,2.17,2.15,2.79c.94.62,2.07.93,3.39.93.75,0,1.43-.1,2.03-.29.6-.19,1.12-.47,1.56-.83.44-.36.8-.8,1.08-1.31.28-.51.47-1.09.57-1.74l8.28.06c-.1,1.27-.46,2.57-1.07,3.88-.62,1.32-1.49,2.53-2.62,3.64s-2.53,2-4.19,2.68c-1.67.68-3.6,1.01-5.8,1.01-2.76,0-5.24-.59-7.43-1.78-2.19-1.18-3.92-2.93-5.18-5.23-1.27-2.3-1.9-5.12-1.9-8.45s.65-6.17,1.94-8.47c1.29-2.3,3.04-4.03,5.23-5.21,2.19-1.18,4.64-1.77,7.34-1.77,1.9,0,3.65.26,5.24.78,1.6.52,3,1.28,4.2,2.27,1.2.99,2.17,2.22,2.91,3.66s1.18,3.11,1.34,4.98ZM30,0H0v30L30,0Z" fill="currentcolor"/>
</svg>`);c(this,"getLabelValue",(e,t,i)=>{if(i===void 0)return"";try{return i.getTemperatureAtPoint(e,t).toFixed(2)+" °C"}catch{return""}})}onActivate(){}onDeactivate(){}onCanvasClick(){}onCanvasLeave(){}onPointEnter(){}onPointLeave(){}onPointMove(){}onPointDown(){}onPointUp(){}},vy=[Nu,gy,fy,py,my],yy=r=>{const e=vy.map(t=>{const i=new t(r);return[i.key,i]});return Object.fromEntries(e)},by=class extends Ct{constructor(e,t){super(e,t);c(this,"_tools",yy(this.parent))}get tools(){return this._tools}validate(e){return e}afterSetEffect(e){e&&(e.activate(),Object.values(this.tools).forEach(t=>{t.key!==e.key&&t.deactivate()}))}selectTool(e){e instanceof wo?this.value=e:this.value=this.tools[e]}},Wu="chrome"in window;console.log("is chromium",Wu);var wy=Wu?{maxWorkers:4}:{},xy=nv.pool(wy),gh=class extends yo{constructor(e,t){super();c(this,"id");c(this,"service",new ty(this));c(this,"registries",{});c(this,"palette",new iy(this,"jet"));c(this,"smooth",new sy(this,!1));c(this,"graphSmooth",new ry(this,!1));c(this,"tool",new by(this,new Nu(this)));c(this,"pool");c(this,"filters",new vo(this));this.pool=e||xy,this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(t=>e(t))}addOrGetRegistry(e,t){return this.registries[e]===void 0&&(this.registries[e]=new uy(e,this,t)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}getInstances(){let e=[];return this.forEveryRegistry(t=>{e=[...e,...t.getInstances()]}),e}forEveryInstance(e){this.forEveryRegistry(t=>t.forEveryInstance(e))}},Sy=Object.defineProperty,$y=Object.getOwnPropertyDescriptor,vr=(r,e,t,i)=>{for(var s=i>1?void 0:i?$y(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sy(e,t,s),s};const gd=["ready","select"],_y={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};let Zt=class extends pr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0,this.onWrapper=new ie,this.left=0,this.top=0,this.w=0,this.h=0}render(){return u`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Dg(this.shadowRoot.getElementById("chartdiv")).then(r=>{this.chartWrapper=r,this.onWrapper.call(r),this.typeChanged(),google.visualization.events.addListener(r,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(r,"select",()=>{this.selection=r.getChart().getSelection()}),this.propagateEvents(gd,r)})}updated(r){r.has("type")&&this.typeChanged(),(r.has("rows")||r.has("cols"))&&this.rowsOrColumnsChanged(),r.has("data")&&this.dataChanged(),r.has("view")&&this.viewChanged(),(r.has("_data")||r.has("options"))&&this.redraw(),r.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(_y[this.type]||this.type);const r=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const e=this.chartWrapper.getChart();e!==r&&this.propagateEvents(this.events.filter(i=>!gd.includes(i)),e);const t=this.shadowRoot.getElementById("styles");t.children.length||this.localizeGlobalStylesheets(t)}),this.redraw()}propagateEvents(r,e){for(const t of r)google.visualization.events.addListener(e,t,i=>{this.dispatchEvent(new CustomEvent(`google-chart-${t}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:i}}))})}selectionChanged(){if(this.chartWrapper==null)return;const r=this.chartWrapper.getChart();if(r!=null&&r.setSelection){if(this.type==="timeline"){const e=JSON.stringify(r.getSelection());if(JSON.stringify(this.selection)===e)return}r.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw();const r=this.chartWrapper.visualization.ha.O;this.left=r.left,this.top=r.top,this.w=r.width,this.h=r.height},5))}get imageURI(){if(this.chartWrapper==null)return null;const r=this.chartWrapper.getChart();return r&&r.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:r,cols:e}=this;if(!(!r||!e))try{const t=await td({cols:e});t.addRows(r),this._data=t}catch(t){this.shadowRoot.getElementById("chartdiv").textContent=String(t)}}dataChanged(){let r=this.data,e;if(!r)return;let t=!1;try{r=JSON.parse(r)}catch{t=typeof r=="string"||r instanceof String}t?e=fetch(r).then(i=>i.json()):e=Promise.resolve(r),e.then(td).then(i=>{this._data=i})}localizeGlobalStylesheets(r){const e=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const t of e){const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",t.getAttribute("href")),r.appendChild(i)}}};Zt.styles=ne`
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
  `;vr([d({type:String,reflect:!0})],Zt.prototype,"type",2);vr([d({type:Array})],Zt.prototype,"events",2);vr([d({type:Object,hasChanged:()=>!0})],Zt.prototype,"options",2);vr([d({type:Array})],Zt.prototype,"cols",2);vr([d({type:Array})],Zt.prototype,"rows",2);vr([d({type:String})],Zt.prototype,"data",2);vr([d({type:Object})],Zt.prototype,"view",2);vr([d({type:Array})],Zt.prototype,"selection",2);vr([d({type:Object})],Zt.prototype,"_data",2);vr([d({type:Number,reflect:!0})],Zt.prototype,"left",2);vr([d({type:Number,reflect:!0})],Zt.prototype,"top",2);vr([d({type:Number,reflect:!0})],Zt.prototype,"w",2);vr([d({type:Number,reflect:!0})],Zt.prototype,"h",2);Zt=vr([H("thermal-chart")],Zt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=()=>new Cy;class Cy{}const El=new WeakMap,ve=go(class extends Ff{render(r){return _}update(r,[e]){var i;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),_}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let t=El.get(e);t===void 0&&(t=new WeakMap,El.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,e;return typeof this.Y=="function"?(r=El.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var w=(r=>(r.loading="loading",r.config="config",r.temperature="temperature",r.upload="upload",r.uploadafile="uploadafile",r.selectfile="selectfile",r.addfiles="addfiles",r.clear="clear",r.dragorselectfile="dragorselectfile",r.file="file",r.next="next",r.prev="prev",r.back="back",r.close="close",r.detail="detail",r.showeverything="showeverything",r.description="description",r.author="author",r.license="license",r.recordedat="recordedat",r.displaysettings="displaysettings",r.filerendering="filerendering",r.pixelated="pixelated",r.smooth="smooth",r.filerenderinghint="filerenderinghint",r.adjusttimescale="adjusttimescale",r.automaticrange="automaticrange",r.fullrange="fullrange",r.adjusttimescalehint="adjusttimescalehint",r.colourpalettehint="colourpalettehint",r.palettename="palettename",r.fileinfo="fileinfo",r.thermalfilename="thermalfilename",r.thermalfileurl="thermalfileurl",r.thermalfiledownload="thermalfiledownload",r.visiblefilename="visiblefilename",r.visiblefileurl="visiblefileurl",r.visiblefiledownload="visiblefiledownload",r.togglevisibleimage="togglevisibleimage",r.time="time",r.duration="duration",r.resolution="resolution",r.bytesize="bytesize",r.minimaltemperature="minimaltemperature",r.maximaltemperature="maximaltemperature",r.filetype="filetype",r.type="type",r.supporteddevices="supporteddevices",r.numfiles="numfiles",r.download="download",r.downloadoriginalfiles="downloadoriginalfiles",r.downloadoriginalfileshint="downloadoriginalfileshint",r.downloadoriginalfile="downloadoriginalfile",r.exportcurrentframeaspng="exportcurrentframeaspng",r.convertentiresequencetovideo="convertentiresequencetovideo",r.pngofindividualimages="pngofindividualimages",r.pngofindividualimageshint="pngofindividualimageshint",r.pngofentiregroup="pngofentiregroup",r.pngofentiregrouphint="pngofentiregrouphint",r.csvofanalysisdata="csvofanalysisdata",r.csvofanalysisdatahint="csvofanalysisdatahint",r.exportimagewidth="exportimagewidth",r.exportimagefontsize="exportimagefontsize",r.showingfolder="showingfolder",r.showingfolders="showingfolders",r.and="and",r.or="or",r.doyouwanttoadd="doyouwanttoadd",r.youmayalsoadd="youmayalsoadd",r.range="range",r.info="info",r.note="note",r.group="group",r.donotgroup="donotgroup",r.groupby="groupby",r.groupped="groupped",r.bydays="bydays",r.byhours="byhours",r.byweeks="byweeks",r.bymonths="bymonths",r.byyears="byyears",r.play="play",r.pause="pause",r.stop="stop",r.date="date",r.frame="frame",r.playbackspeed="playbackspeed",r.graphlines="graphlines",r.straightlines="straightlines",r.smoothlines="smoothlines",r.graphlineshint="graphlineshint",r.reload="reload",r.analysis="analysis",r.avg="avg",r.min="min",r.max="max",r.size="size",r.edit="edit",r.editsth="editsth",r.remove="remove",r.addpoint="addpoint",r.addrectangle="addrectangle",r.addellipsis="addellipsis",r.analysishint="analysishint",r.graph="graph",r.graphhint1="graphhint1",r.graphhint2="graphhint2",r.rectangle="rectangle",r.ellipsis="ellipsis",r.point="point",r.name="name",r.color="color",r.top="top",r.left="left",r.right="right",r.bottom="bottom",r.columns="columns",r.fromto="fromto",r.downloadgraphdataascsv="downloadgraphdataascsv",r.apparenttemperature="apparenttemperature",r.airtemperature="airtemperature",r.relativeairhumidity="relativeairhumidity",r.windspeed="windspeed",r.inpercent="inpercent",r.apparenttemperatureverbose="apparenttemperatureverbose",r.youfeelwarmer="youfeelwarmer",r.youfeelcolder="youfeelcolder",r.apparenttemperaturehint="apparenttemperaturehint",r.analysissync="analysissync",r.inspecttemperatures="inspecttemperatures",r.usemousetoinspecttemperaturevalues="usemousetoinspecttemperaturevalues",r.editanalysis="editanalysis",r.dragcornersofselectedanalysis="dragcornersofselectedanalysis",r.addpointanalysis="addpointanalysis",r.clickandaddpoint="clickandaddpoint",r.addrectangleanalysis="addrectangleanalysis",r.clickandaddrectangle="clickandaddrectangle",r.addellipsisanalysis="addellipsisanalysis",r.clickandaddellipsis="clickandaddellipsis",r.tutorial="tutorial",r.colourpalette="colourpalette",r.palettehint="palettehint",r.remotefoldersbrowser="remotefoldersbrowser",r))(w||{});const ky=[{code:"cs",name:"Čeština",flag:"🇨🇿"},{code:"cy",name:"Cymraeg",flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",disabled:!0},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"}],md=Object.fromEntries(ky.map(r=>[r.code,r]));var Py=Object.defineProperty,Oy=Object.getOwnPropertyDescriptor,Hu=(r,e,t,i)=>{for(var s=i>1?void 0:i?Oy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Py(e,t,s),s};let En=class extends pr{constructor(){super(),this.dialogRef=pe(),this.closeButtonRef=pe(),this.invokerRef=pe()}setClose(){var r;(r=this.dialogRef.value)==null||r.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var r;(r=this.dialogRef.value)==null||r.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(r,e,t){super.attributeChangedCallback(r,e,t),r==="open"&&(t==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return u`
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
                        ${x(w.close)}
                    </thermal-button>
                </div>
                
            
            </dialog>
        `}};En.shadowRootOptions={...pr.shadowRootOptions,mode:"open"};En.styles=ne`

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

        
    
    `;Hu([d({type:String,reflect:!0})],En.prototype,"label",2);En=Hu([H("thermal-dialog")],En);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bu=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vd=class{constructor(e,t,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){const n=t;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Bu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ay{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ey=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class yd extends Ay{constructor(e,t,i){var s,n;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=a=>{const o=a.composedPath()[0];a.context===this.context&&o!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,o,a.subscribe))},this.onProviderRequest=a=>{const o=a.composedPath()[0];if(a.context!==this.context||o===this.host)return;const l=new Set;for(const[h,{consumerHost:f}]of this.subscriptions)l.has(h)||(l.add(h),f.dispatchEvent(new Bu(this.context,h,!0)));a.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Ey(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V({context:r}){return(e,t)=>{const i=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){i.set(this,new yd(this,{context:r}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new yd(a,{context:r}))});const s=Object.getOwnPropertyDescriptor(e,t);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(o){i.get(this).setValue(o),a.set(this,o)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(o){i.get(this).setValue(o),a==null||a.call(this,o)}}}return void Object.defineProperty(e,t,n)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le({context:r,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new vd(this,{context:r,callback:s=>{t.set.call(this,s)},subscribe:e})}):t.constructor.addInitializer(s=>{new vd(s,{context:r,callback:n=>{s[i]=n},subscribe:e})})}}let Aa;const Dy=new Uint8Array(16);function Ly(){if(!Aa&&(Aa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Aa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Aa(Dy)}const Bt=[];for(let r=0;r<256;++r)Bt.push((r+256).toString(16).slice(1));function Ry(r,e=0){return Bt[r[e+0]]+Bt[r[e+1]]+Bt[r[e+2]]+Bt[r[e+3]]+"-"+Bt[r[e+4]]+Bt[r[e+5]]+"-"+Bt[r[e+6]]+Bt[r[e+7]]+"-"+Bt[r[e+8]]+Bt[r[e+9]]+"-"+Bt[r[e+10]]+Bt[r[e+11]]+Bt[r[e+12]]+Bt[r[e+13]]+Bt[r[e+14]]+Bt[r[e+15]]}const Ty=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),bd={randomUUID:Ty};function My(r,e,t){if(bd.randomUUID&&!e&&!r)return bd.randomUUID();r=r||{};const i=r.random||(r.rng||Ly)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Ry(i)}const gi="localeContext",zi=r=>{vt.on("languageChanged",e=>{r.locale=e}),r.locale===void 0?r.locale=vt.language:vt.changeLanguage(r.locale)},Dl={cs:["cs","cz","cs_CZ","cs_CS"],fr:["fr","fr_FR","fr_CA"],de:["de","de_DE","de_AT","de_CH"],cy:["cy","cy_GB","cy"],en:["en","en_US","en_GB","en_CA","en_AU","en_NZ","en_IE","en_ZA"]},Fi={fromAttribute:r=>{let e,t=0;for(;t<Object.keys(Dl).length&&e===void 0;){const i=Object.keys(Dl)[t];Dl[i].includes(r)&&(e=i),t++}return e??"en"},toAttribute:r=>r};var Iy=Object.defineProperty,Uy=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&Iy(e,t,s),s};const Qh=class Qh extends pr{get UUID(){return this._UUID===void 0&&(this._UUID=My()),this._UUID}log(...e){console.log(this.tagName,this.UUID.substring(0,5),...e)}connectedCallback(){super.connectedCallback(),vt.on("languageChanged",e=>{this._locale=e})}};Qh.shadowRootOptions={...pr.shadowRootOptions,mode:"open"};let je=Qh;Uy([le({context:gi,subscribe:!0})],je.prototype,"_locale");const Gu="tour-context",Vu="tour-step",Yu="tourable-element";var zy=Object.defineProperty,qu=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&zy(e,t,s),s};class ks extends je{connectedCallback(){super.connectedCallback(),this.tour&&(this.tourableElement={element:this,step:this.tour})}}qu([d({type:String})],ks.prototype,"tour");qu([V({context:Yu})],ks.prototype,"tourableElement");var Fy=Object.defineProperty,jy=Object.getOwnPropertyDescriptor,So=(r,e,t,i)=>{for(var s=i>1?void 0:i?jy(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fy(e,t,s),s};let Li=class extends ks{constructor(){super(...arguments),this.tourableElementRef=pe(),this.interactive=!0,this.size="sm"}getTourableRoot(){return this.tourableElementRef.value}render(){return u`
            <button class="${this.variant}" ${ve(this.tourableElementRef)} part="btn">
                <slot></slot>
            </button>
        `}};Li.VARIANTS=["slate","primary","foreground","background"];Li.shadowRootOptions={...pr.shadowRootOptions,mode:"open"};Li.styles=ne`

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
    
    `;So([d({type:String,converter:{fromAttribute:r=>{if(Li.VARIANTS.includes(r))return r},toAttribute:r=>r},reflect:!1})],Li.prototype,"variant",2);So([d({type:Boolean,reflect:!0,converter:{fromAttribute:r=>r==="true",toAttribute:r=>r?"true":"false"}})],Li.prototype,"interactive",2);So([d({type:String})],Li.prototype,"size",2);Li=So([H("thermal-button")],Li);const rs=Math.min,Pi=Math.max,Ka=Math.round,ci=r=>({x:r,y:r}),Ny={left:"right",right:"left",bottom:"top",top:"bottom"},Wy={start:"end",end:"start"};function Hl(r,e,t){return Pi(r,rs(e,t))}function on(r,e){return typeof r=="function"?r(e):r}function Ri(r){return r.split("-")[0]}function Xn(r){return r.split("-")[1]}function Xu(r){return r==="x"?"y":"x"}function mh(r){return r==="y"?"height":"width"}function Kn(r){return["top","bottom"].includes(Ri(r))?"y":"x"}function vh(r){return Xu(Kn(r))}function Hy(r,e,t){t===void 0&&(t=!1);const i=Xn(r),s=vh(r),n=mh(s);let a=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Za(a)),[a,Za(a)]}function By(r){const e=Za(r);return[Bl(r),e,Bl(e)]}function Bl(r){return r.replace(/start|end/g,e=>Wy[e])}function Gy(r,e,t){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(r){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function Vy(r,e,t,i){const s=Xn(r);let n=Gy(Ri(r),t==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Bl)))),n}function Za(r){return r.replace(/left|right|bottom|top/g,e=>Ny[e])}function Yy(r){return{top:0,right:0,bottom:0,left:0,...r}}function yh(r){return typeof r!="number"?Yy(r):{top:r,right:r,bottom:r,left:r}}function Vs(r){const{x:e,y:t,width:i,height:s}=r;return{width:i,height:s,top:t,left:e,right:e+i,bottom:t+s,x:e,y:t}}function wd(r,e,t){let{reference:i,floating:s}=r;const n=Kn(e),a=vh(e),o=mh(a),l=Ri(e),h=n==="y",f=i.x+i.width/2-s.width/2,p=i.y+i.height/2-s.height/2,g=i[o]/2-s[o]/2;let S;switch(l){case"top":S={x:f,y:i.y-s.height};break;case"bottom":S={x:f,y:i.y+i.height};break;case"right":S={x:i.x+i.width,y:p};break;case"left":S={x:i.x-s.width,y:p};break;default:S={x:i.x,y:i.y}}switch(Xn(e)){case"start":S[a]-=g*(t&&h?-1:1);break;case"end":S[a]+=g*(t&&h?-1:1);break}return S}const qy=async(r,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=t,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:r,floating:e,strategy:s}),{x:f,y:p}=wd(h,i,l),g=i,S={},$=0;for(let O=0;O<o.length;O++){const{name:P,fn:Y}=o[O],{x:A,y:D,data:X,reset:W}=await Y({x:f,y:p,initialPlacement:i,placement:g,strategy:s,middlewareData:S,rects:h,platform:a,elements:{reference:r,floating:e}});f=A??f,p=D??p,S={...S,[P]:{...S[P],...X}},W&&$<=50&&($++,typeof W=="object"&&(W.placement&&(g=W.placement),W.rects&&(h=W.rects===!0?await a.getElementRects({reference:r,floating:e,strategy:s}):W.rects),{x:f,y:p}=wd(h,g,l)),O=-1)}return{x:f,y:p,placement:g,strategy:s,middlewareData:S}};async function Ku(r,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:S=0}=on(e,r),$=yh(S),P=o[g?p==="floating"?"reference":"floating":p],Y=Vs(await n.getClippingRect({element:(t=await(n.isElement==null?void 0:n.isElement(P)))==null||t?P:P.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:f,strategy:l})),A=p==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,D=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),X=await(n.isElement==null?void 0:n.isElement(D))?await(n.getScale==null?void 0:n.getScale(D))||{x:1,y:1}:{x:1,y:1},W=Vs(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:A,offsetParent:D,strategy:l}):A);return{top:(Y.top-W.top+$.top)/X.y,bottom:(W.bottom-Y.bottom+$.bottom)/X.y,left:(Y.left-W.left+$.left)/X.x,right:(W.right-Y.right+$.right)/X.x}}const Xy=r=>({name:"arrow",options:r,async fn(e){const{x:t,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=e,{element:h,padding:f=0}=on(r,e)||{};if(h==null)return{};const p=yh(f),g={x:t,y:i},S=vh(s),$=mh(S),O=await a.getDimensions(h),P=S==="y",Y=P?"top":"left",A=P?"bottom":"right",D=P?"clientHeight":"clientWidth",X=n.reference[$]+n.reference[S]-g[S]-n.floating[$],W=g[S]-n.reference[S],se=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let k=se?se[D]:0;(!k||!await(a.isElement==null?void 0:a.isElement(se)))&&(k=o.floating[D]||n.floating[$]);const L=X/2-W/2,T=k/2-O[$]/2-1,M=rs(p[Y],T),F=rs(p[A],T),I=M,z=k-O[$]-F,R=k/2-O[$]/2+L,K=Hl(I,R,z),he=!l.arrow&&Xn(s)!=null&&R!==K&&n.reference[$]/2-(R<I?M:F)-O[$]/2<0,C=he?R<I?R-I:R-z:0;return{[S]:g[S]+C,data:{[S]:K,centerOffset:R-K-C,...he&&{alignmentOffset:C}},reset:he}}}),Ky=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(e){var t,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=e,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:O=!0,...P}=on(r,e);if((t=n.arrow)!=null&&t.alignmentOffset)return{};const Y=Ri(s),A=Ri(o)===o,D=await(l.isRTL==null?void 0:l.isRTL(h.floating)),X=g||(A||!O?[Za(o)]:By(o));!g&&$!=="none"&&X.push(...Vy(o,O,$,D));const W=[o,...X],se=await Ku(e,P),k=[];let L=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&k.push(se[Y]),p){const I=Hy(s,a,D);k.push(se[I[0]],se[I[1]])}if(L=[...L,{placement:s,overflows:k}],!k.every(I=>I<=0)){var T,M;const I=(((T=n.flip)==null?void 0:T.index)||0)+1,z=W[I];if(z)return{data:{index:I,overflows:L},reset:{placement:z}};let R=(M=L.filter(K=>K.overflows[0]<=0).sort((K,he)=>K.overflows[1]-he.overflows[1])[0])==null?void 0:M.placement;if(!R)switch(S){case"bestFit":{var F;const K=(F=L.map(he=>[he.placement,he.overflows.filter(C=>C>0).reduce((C,B)=>C+B,0)]).sort((he,C)=>he[1]-C[1])[0])==null?void 0:F[0];K&&(R=K);break}case"initialPlacement":R=o;break}if(s!==R)return{reset:{placement:R}}}return{}}}};function Zu(r){const e=rs(...r.map(n=>n.left)),t=rs(...r.map(n=>n.top)),i=Pi(...r.map(n=>n.right)),s=Pi(...r.map(n=>n.bottom));return{x:e,y:t,width:i-e,height:s-t}}function Zy(r){const e=r.slice().sort((s,n)=>s.y-n.y),t=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?t.push([n]):t[t.length-1].push(n),i=n}return t.map(s=>Vs(Zu(s)))}const Jy=function(r){return r===void 0&&(r={}),{name:"inline",options:r,async fn(e){const{placement:t,elements:i,rects:s,platform:n,strategy:a}=e,{padding:o=2,x:l,y:h}=on(r,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),p=Zy(f),g=Vs(Zu(f)),S=yh(o);function $(){if(p.length===2&&p[0].left>p[1].right&&l!=null&&h!=null)return p.find(P=>l>P.left-S.left&&l<P.right+S.right&&h>P.top-S.top&&h<P.bottom+S.bottom)||g;if(p.length>=2){if(Kn(t)==="y"){const M=p[0],F=p[p.length-1],I=Ri(t)==="top",z=M.top,R=F.bottom,K=I?M.left:F.left,he=I?M.right:F.right,C=he-K,B=R-z;return{top:z,bottom:R,left:K,right:he,width:C,height:B,x:K,y:z}}const P=Ri(t)==="left",Y=Pi(...p.map(M=>M.right)),A=rs(...p.map(M=>M.left)),D=p.filter(M=>P?M.left===A:M.right===Y),X=D[0].top,W=D[D.length-1].bottom,se=A,k=Y,L=k-se,T=W-X;return{top:X,bottom:W,left:se,right:k,width:L,height:T,x:se,y:X}}return g}const O=await n.getElementRects({reference:{getBoundingClientRect:$},floating:i.floating,strategy:a});return s.reference.x!==O.reference.x||s.reference.y!==O.reference.y||s.reference.width!==O.reference.width||s.reference.height!==O.reference.height?{reset:{rects:O}}:{}}}};async function Qy(r,e){const{placement:t,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Ri(t),o=Xn(t),l=Kn(t)==="y",h=["left","top"].includes(a)?-1:1,f=n&&l?-1:1,p=on(e,r);let{mainAxis:g,crossAxis:S,alignmentAxis:$}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return o&&typeof $=="number"&&(S=o==="end"?$*-1:$),l?{x:S*f,y:g*h}:{x:g*h,y:S*f}}const eb=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(e){var t,i;const{x:s,y:n,placement:a,middlewareData:o}=e,l=await Qy(e,r);return a===((t=o.offset)==null?void 0:t.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},tb=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:P=>{let{x:Y,y:A}=P;return{x:Y,y:A}}},...l}=on(r,e),h={x:t,y:i},f=await Ku(e,l),p=Kn(Ri(s)),g=Xu(p);let S=h[g],$=h[p];if(n){const P=g==="y"?"top":"left",Y=g==="y"?"bottom":"right",A=S+f[P],D=S-f[Y];S=Hl(A,S,D)}if(a){const P=p==="y"?"top":"left",Y=p==="y"?"bottom":"right",A=$+f[P],D=$-f[Y];$=Hl(A,$,D)}const O=o.fn({...e,[g]:S,[p]:$});return{...O,data:{x:O.x-t,y:O.y-i}}}}};function $o(){return typeof window<"u"}function ln(r){return Ju(r)?(r.nodeName||"").toLowerCase():"#document"}function $r(r){var e;return(r==null||(e=r.ownerDocument)==null?void 0:e.defaultView)||window}function ji(r){var e;return(e=(Ju(r)?r.ownerDocument:r.document)||window.document)==null?void 0:e.documentElement}function Ju(r){return $o()?r instanceof Node||r instanceof $r(r).Node:!1}function Vr(r){return $o()?r instanceof Element||r instanceof $r(r).Element:!1}function di(r){return $o()?r instanceof HTMLElement||r instanceof $r(r).HTMLElement:!1}function xd(r){return!$o()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof $r(r).ShadowRoot}function Zn(r){const{overflow:e,overflowX:t,overflowY:i,display:s}=Yr(r);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function rb(r){return["table","td","th"].includes(ln(r))}function _o(r){return[":popover-open",":modal"].some(e=>{try{return r.matches(e)}catch{return!1}})}function bh(r){const e=wh(),t=Vr(r)?Yr(r):r;return["transform","translate","scale","rotate","perspective"].some(i=>t[i]?t[i]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function ib(r){let e=is(r);for(;di(e)&&!Ys(e);){if(bh(e))return e;if(_o(e))return null;e=is(e)}return null}function wh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ys(r){return["html","body","#document"].includes(ln(r))}function Yr(r){return $r(r).getComputedStyle(r)}function Co(r){return Vr(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function is(r){if(ln(r)==="html")return r;const e=r.assignedSlot||r.parentNode||xd(r)&&r.host||ji(r);return xd(e)?e.host:e}function Qu(r){const e=is(r);return Ys(e)?r.ownerDocument?r.ownerDocument.body:r.body:di(e)&&Zn(e)?e:Qu(e)}function Gl(r,e,t){var i;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Qu(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=$r(s);if(n){const o=Vl(a);return e.concat(a,a.visualViewport||[],Zn(s)?s:[],o&&t?Gl(o):[])}return e.concat(s,Gl(s,[],t))}function Vl(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function ep(r){const e=Yr(r);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=di(r),n=s?r.offsetWidth:t,a=s?r.offsetHeight:i,o=Ka(t)!==n||Ka(i)!==a;return o&&(t=n,i=a),{width:t,height:i,$:o}}function tp(r){return Vr(r)?r:r.contextElement}function Ws(r){const e=tp(r);if(!di(e))return ci(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:n}=ep(e);let a=(n?Ka(t.width):t.width)/i,o=(n?Ka(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const sb=ci(0);function rp(r){const e=$r(r);return!wh()||!e.visualViewport?sb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function nb(r,e,t){return e===void 0&&(e=!1),!t||e&&t!==$r(r)?!1:e}function Dn(r,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=r.getBoundingClientRect(),n=tp(r);let a=ci(1);e&&(i?Vr(i)&&(a=Ws(i)):a=Ws(r));const o=nb(n,t,i)?rp(n):ci(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,f=s.width/a.x,p=s.height/a.y;if(n){const g=$r(n),S=i&&Vr(i)?$r(i):i;let $=g,O=Vl($);for(;O&&i&&S!==$;){const P=Ws(O),Y=O.getBoundingClientRect(),A=Yr(O),D=Y.left+(O.clientLeft+parseFloat(A.paddingLeft))*P.x,X=Y.top+(O.clientTop+parseFloat(A.paddingTop))*P.y;l*=P.x,h*=P.y,f*=P.x,p*=P.y,l+=D,h+=X,$=$r(O),O=Vl($)}}return Vs({width:f,height:p,x:l,y:h})}function xh(r,e){const t=Co(r).scrollLeft;return e?e.left+t:Dn(ji(r)).left+t}function ip(r,e,t){t===void 0&&(t=!1);const i=r.getBoundingClientRect(),s=i.left+e.scrollLeft-(t?0:xh(r,i)),n=i.top+e.scrollTop;return{x:s,y:n}}function ab(r){let{elements:e,rect:t,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=ji(i),o=e?_o(e.floating):!1;if(i===a||o&&n)return t;let l={scrollLeft:0,scrollTop:0},h=ci(1);const f=ci(0),p=di(i);if((p||!p&&!n)&&((ln(i)!=="body"||Zn(a))&&(l=Co(i)),di(i))){const S=Dn(i);h=Ws(i),f.x=S.x+i.clientLeft,f.y=S.y+i.clientTop}const g=a&&!p&&!n?ip(a,l,!0):ci(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-l.scrollLeft*h.x+f.x+g.x,y:t.y*h.y-l.scrollTop*h.y+f.y+g.y}}function ob(r){return Array.from(r.getClientRects())}function lb(r){const e=ji(r),t=Co(r),i=r.ownerDocument.body,s=Pi(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Pi(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+xh(r);const o=-t.scrollTop;return Yr(i).direction==="rtl"&&(a+=Pi(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}function hb(r,e){const t=$r(r),i=ji(r),s=t.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const h=wh();(!h||h&&e==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:n,height:a,x:o,y:l}}function cb(r,e){const t=Dn(r,!0,e==="fixed"),i=t.top+r.clientTop,s=t.left+r.clientLeft,n=di(r)?Ws(r):ci(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function Sd(r,e,t){let i;if(e==="viewport")i=hb(r,t);else if(e==="document")i=lb(ji(r));else if(Vr(e))i=cb(e,t);else{const s=rp(r);i={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Vs(i)}function sp(r,e){const t=is(r);return t===e||!Vr(t)||Ys(t)?!1:Yr(t).position==="fixed"||sp(t,e)}function db(r,e){const t=e.get(r);if(t)return t;let i=Gl(r,[],!1).filter(o=>Vr(o)&&ln(o)!=="body"),s=null;const n=Yr(r).position==="fixed";let a=n?is(r):r;for(;Vr(a)&&!Ys(a);){const o=Yr(a),l=bh(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Zn(a)&&!l&&sp(r,a))?i=i.filter(f=>f!==a):s=o,a=is(a)}return e.set(r,i),i}function ub(r){let{element:e,boundary:t,rootBoundary:i,strategy:s}=r;const a=[...t==="clippingAncestors"?_o(e)?[]:db(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((h,f)=>{const p=Sd(e,f,s);return h.top=Pi(p.top,h.top),h.right=rs(p.right,h.right),h.bottom=rs(p.bottom,h.bottom),h.left=Pi(p.left,h.left),h},Sd(e,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function pb(r){const{width:e,height:t}=ep(r);return{width:e,height:t}}function fb(r,e,t){const i=di(e),s=ji(e),n=t==="fixed",a=Dn(r,!0,n,e);let o={scrollLeft:0,scrollTop:0};const l=ci(0);if(i||!i&&!n)if((ln(e)!=="body"||Zn(s))&&(o=Co(e)),i){const g=Dn(e,!0,n,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else s&&(l.x=xh(s));const h=s&&!i&&!n?ip(s,o):ci(0),f=a.left+o.scrollLeft-l.x-h.x,p=a.top+o.scrollTop-l.y-h.y;return{x:f,y:p,width:a.width,height:a.height}}function Ll(r){return Yr(r).position==="static"}function $d(r,e){if(!di(r)||Yr(r).position==="fixed")return null;if(e)return e(r);let t=r.offsetParent;return ji(r)===t&&(t=t.ownerDocument.body),t}function np(r,e){const t=$r(r);if(_o(r))return t;if(!di(r)){let s=is(r);for(;s&&!Ys(s);){if(Vr(s)&&!Ll(s))return s;s=is(s)}return t}let i=$d(r,e);for(;i&&rb(i)&&Ll(i);)i=$d(i,e);return i&&Ys(i)&&Ll(i)&&!bh(i)?t:i||ib(r)||t}const gb=async function(r){const e=this.getOffsetParent||np,t=this.getDimensions,i=await t(r.floating);return{reference:fb(r.reference,await e(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function mb(r){return Yr(r).direction==="rtl"}const vb={convertOffsetParentRelativeRectToViewportRelativeRect:ab,getDocumentElement:ji,getClippingRect:ub,getOffsetParent:np,getElementRects:gb,getClientRects:ob,getDimensions:pb,getScale:Ws,isElement:Vr,isRTL:mb},ap=eb,yb=tb,bb=Ky,wb=Xy,xb=Jy,op=(r,e,t)=>{const i=new Map,s={platform:vb,...t},n={...s.platform,_c:i};return qy(r,e,{...s,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=go(class extends hh{constructor(r){var e;if(super(r),r.type!==ki.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const t=r.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return es}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=r=>r??_;var Sb=Object.defineProperty,$b=Object.getOwnPropertyDescriptor,Jn=(r,e,t,i)=>{for(var s=i>1?void 0:i?$b(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sb(e,t,s),s};let Ti=class extends ks{constructor(){super(...arguments),this.dropdownRef=pe(),this.invokerRef=pe(),this.optionsRef=pe(),this.open="close",this.interactive="on"}getTourableRoot(){return this.dropdownRef.value}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.interactive!=="off"&&(this.open==="open"?this.open="close":this.open="open")}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){op(this.invokerRef.value,this.optionsRef.value,{middleware:[ap(2),bb(),xb(),yb()],placement:"bottom-start",strategy:"fixed"}).then(({x:r,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${r}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(r){super.updated(r),this.placeOptions()}firstUpdated(r){super.firstUpdated(r),this._options.forEach(e=>{e.childNodes.forEach(t=>t.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(r,e,t){var i,s,n,a;r==="open"&&(t==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){const r={"dropdown-invoker":!0,may:this.interactive==="on",mayNot:this.interactive==="off"};return u`

            <div class="dropdown" ${ve(this.dropdownRef)}>

                <thermal-button 
                    class="${Kt(r)}" 
                    ${ve(this.invokerRef)} 
                    @click=${this.toggle.bind(this)} 
                    variant="${Q(this.variant)}" 
                    interactive="${this.interactive==="on"?"true":"false"}"
                    part="invoker"
                >
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?u`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:u`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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
        
        `}};Ti.shadowRootOptions={...pr.shadowRootOptions,mode:"open"};Ti.styles=ne`

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

        :host(.small) {
            .dropdown-invoker {
                // background-color: red !important;
            }
        }
    
    `;Jn([Or({slot:"option"})],Ti.prototype,"_options",2);Jn([d({type:String,reflect:!0})],Ti.prototype,"open",2);Jn([d({type:String,reflect:!0,attribute:!0}),v()],Ti.prototype,"interactive",2);Jn([v(),d({type:String,reflect:!0,attribute:!0})],Ti.prototype,"variant",2);Ti=Jn([H("thermal-dropdown")],Ti);var _b=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,ko=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_b(e,t,s),s};let qs=class extends pr{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=pe(),this.contentRef=pe(),this.rulerContentRef=pe()}connectedCallback(){super.connectedCallback()}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const t=e[0];this.lastContentWidth<t.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return u`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${ve(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${ve(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${ve(this.contentRef)}>

                    ${this.collapsed===!1?u`
                        <slot></slot>    
                    `:_}
                
                </div>

            </div>

            ${this.collapsed?u`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:_}
        
        `}};qs.styles=ne`

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

    `;ko([v()],qs.prototype,"collapsed",2);ko([v()],qs.prototype,"lastContentWidth",2);ko([v()],qs.prototype,"drawerRef",2);qs=ko([H("thermal-bar")],qs);const Ne=r=>({fromAttribute:i=>i==null||(i==null?void 0:i.trim().length)===0?r:i==="true",toAttribute:i=>i===!0?"true":"false"});var kb=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,Nr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kb(e,t,s),s};let fr=class extends je{constructor(){super(...arguments),this.language=vt.language,this.fullscreen="off",this.showfullscreen=!1,this.dark=!1,this.appRef=pe(),this.headerRef=pe(),this.contentRef=pe()}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")}),vt.on("languageChanged",()=>{this.language=vt.language})}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}update(r){super.update(r),this.observer===void 0&&this.appRef.value instanceof Element&&this.contentRef.value!==void 0&&(this.observer=new ResizeObserver(e=>{const t=e[0];if(this.fullscreen==="on"&&this.contentRef.value){const s=t.contentRect.height;t.contentRect.width;const n=s-175;this.contentRef.value.offsetHeight<n?console.log("priorita šířky"):console.log("priorita výšky")}else this.fullscreen==="off"&&this.contentRef.value&&this.contentRef.value.removeAttribute("style")}),this.observer.observe(this.appRef.value))}attributeChangedCallback(r,e,t){var i;super.attributeChangedCallback(r,e,t),r==="fullscreen"&&(t==="on"?(i=this.appRef.value)==null||i.requestFullscreen():t==="off"&&document.fullscreenElement&&document.exitFullscreen())}render(){return u`

    <div class="container ${this.dark?"dark":"normal"}" ${ve(this.appRef)}>

        <header ${ve(this.headerRef)} class="app-header">
            
        ${this.barElements.length>=0?u`
            <div class="bar">

                <slot name="label">
                    ${this.label?u`<thermal-button variant="foreground" interactive="false">${this.label}</thermal-button>`:_}
                </slot>

                <slot name="bar"></slot>

                <slot name="close"></slot>

                
                ${this.showfullscreen===!0?u`
                    <thermal-button class="app-fullscreen-button" @click=${this.toggleFullscreen.bind(this)}>
                        ${this.fullscreen==="on"?u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0L5.5 4.44V2.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L2.22 3.28a.75.75 0 0 1 0-1.06Zm10.5 0a.75.75 0 1 1 1.06 1.06L11.56 5.5h1.69a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9 6.25v-3.5a.75.75 0 0 1 1.5 0v1.69l2.22-2.22ZM2.75 9h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.22-2.22H2.75a.75.75 0 0 1 0-1.5ZM9 9.75A.75.75 0 0 1 9.75 9h3.5a.75.75 0 0 1 0 1.5h-1.69l2.22 2.22a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.69a.75.75 0 0 1-1.5 0v-3.5Z" clip-rule="evenodd" />
                            </svg>`:u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M2.75 9a.75.75 0 0 1 .75.75v1.69l2.22-2.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h1.69a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 2.75 9ZM2.75 7a.75.75 0 0 0 .75-.75V4.56l2.22 2.22a.75.75 0 0 0 1.06-1.06L4.56 3.5h1.69a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75ZM13.25 9a.75.75 0 0 0-.75.75v1.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l2.22 2.22H9.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75ZM13.25 7a.75.75 0 0 1-.75-.75V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H9.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd" />
                            </svg>`}
                        </div>
                    </thermal-button>
                `:_}

                <thermal-dropdown>

                    <span slot="invoker">${this.language.toUpperCase()}</span>

                    ${["en","cs","de","fr","cy"].map(r=>u`
                        <div slot="option">
                            <thermal-button
                                @click=${()=>{vt.changeLanguage(r),this.language=r}}
                            >${md[r].flag} ${md[r].name}</thermal-button>
                        </div>
                    `)}
                </thermal-dropdown>
                
            </div> 
        `:""}

        ${this.preElements.length>=0?u`
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

            ${this.author||this.license||this.recorded?u`<div class="credits">

                    ${this.recorded?u`<div>
                            <div class="credits-field">${x(w.recordedat)}:</div>
                            <div class="credit-value">${this.recorded}</div>
                        </div>`:_}

                    ${this.author?u`<div>
                            <div class="credits-field">${x(w.author)}:</div>
                            <div class="credit-value">${this.author}</div>
                        </div>`:_}

                    ${this.license?u`<div>
                            <div class="credits-field">${x(w.license)}:</div>
                            <div class="credit-value">${this.license}</div>
                        </div>`:_}

                </div>`:_}

            <div class="content ${this.contentElements.length>0?"has-content":""}">
                <slot name="content"></slot>
            </div>

    </div>
        
        `}};fr.styles=ne`

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
    
    `;Nr([v()],fr.prototype,"language",2);Nr([Or({slot:"bar",flatten:!0})],fr.prototype,"barElements",2);Nr([Or({slot:"pre",flatten:!0})],fr.prototype,"preElements",2);Nr([Or({slot:"content",flatten:!0})],fr.prototype,"contentElements",2);Nr([d({type:String,reflect:!0})],fr.prototype,"fullscreen",2);Nr([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],fr.prototype,"showfullscreen",2);Nr([d({type:String,reflect:!0,attribute:!0})],fr.prototype,"dark",2);Nr([d()],fr.prototype,"author",2);Nr([d()],fr.prototype,"recorded",2);Nr([d()],fr.prototype,"license",2);Nr([d()],fr.prototype,"label",2);fr=Nr([H("thermal-app")],fr);var Ob=Object.defineProperty,Ab=Object.getOwnPropertyDescriptor,Sh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ab(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ob(e,t,s),s};let Ln=class extends pr{render(){return u`

            <div class="cell">${this.label}</div>

            <div class="cell">

                <div class="content">
                    <slot></slot>
                </div>

                ${this.hint&&u`
                <div class="hint">
                    ${this.hint}
                </div>`}

            </div>
        
        `}};Ln.styles=ne`
    
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

    `;Sh([d({type:String})],Ln.prototype,"label",2);Sh([d({type:String})],Ln.prototype,"hint",2);Ln=Sh([H("thermal-field")],Ln);var Eb=Object.defineProperty,Db=Object.getOwnPropertyDescriptor,hn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Db(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Eb(e,t,s),s};let ss=class extends je{constructor(){super(...arguments),this.loaded=!1,this.bordercolor="var(--thermal-slate)",this.bgcolor="var(--thermal-slate-light)",this.textcolor="var(--thermal-slate-dark)"}updated(r){super.updated(r),this.style.borderColor=this.bordercolor,this.style.backgroundColor=this.bgcolor,this.style.color=this.textcolor}render(){return u`
            <div class="lds-facebook" style="color: ${this.textcolor}">
                <div></div>
                <div></div>
                <div></div>
            </div>
            ${this.message?u`<div>${this.message}</div>`:_}
        `}};ss.styles=ne`
    
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
    
    `;hn([v()],ss.prototype,"loaded",2);hn([d({type:String})],ss.prototype,"message",2);hn([d({type:String})],ss.prototype,"bordercolor",2);hn([d({type:String})],ss.prototype,"bgcolor",2);hn([d({type:String})],ss.prototype,"textcolor",2);ss=hn([H("thermal-loading")],ss);var Lb=Object.defineProperty,Rb=Object.getOwnPropertyDescriptor,cn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lb(e,t,s),s};let Mi=class extends je{render(){return _}};cn([d({type:String,reflect:!0,attribute:!0})],Mi.prototype,"thermal",2);cn([d({type:String,reflect:!0,attribute:!0})],Mi.prototype,"visible",2);cn([d({type:String,reflect:!0,attribute:!0})],Mi.prototype,"author",2);cn([d({type:String,reflect:!0,attribute:!0})],Mi.prototype,"note",2);cn([d({type:String,reflect:!0,attribute:!0})],Mi.prototype,"label",2);Mi=cn([H("time-entry")],Mi);const Tb=new gh;window.Thermal={managers:new Map};window.Thermal.managers.set("default",Tb);const Po=(r,e)=>{if(r===void 0)return window.Thermal.managers.get("default");if(window.Thermal.managers.has(r))return window.Thermal.managers.get(r);{const t=new gh(void 0,e);return window.Thermal.managers.set(r,t),t}},Mb=r=>{let e;if(window.Thermal.managers.forEach((t,i)=>{t.id===r.id&&(e=i)}),console.log("removing",r),e!==void 0){console.log("found and removing",e);const t=window.Thermal.managers.get(e);t&&(t.forEveryRegistry(i=>t.removeRegistry(i.id)),window.Thermal.managers.delete(e))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ja extends hh{constructor(e){if(super(e),this.it=_,e.type!==ki.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===es)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ja.directiveName="unsafeHTML",Ja.resultType=1;const Dt=go(Ja),ec=class ec{constructor(e){this.element=e}renderInfo(e,t){return!t||t.trim().length===0?_:u`<thermal-dialog label="Note for ${e}">
            <button 
                slot="invoker"
                class="file-info-button"
            >${x(w.note).toLocaleLowerCase()}</button>
            <div slot="content">${Dt(t)}</div>
        </thermal-dialog>`}renderHeaderContent(e,t,i){return i===void 0||i.trim().length===0?u`<strong>${t}</strong>`:e===!0?u`<strong>${i}</strong><span>${t}</span>`:u`<strong>${i}</strong>`}renderInstance(e,t,i,s,n){return u`<div class="file">

            <article>

                <file-mirror .file=${e}>
                
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
                                <file-button slot="invoker" label="${x(w.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>
                        
                        </div>

                    </div>

                    <file-canvas></file-canvas>
                    ${e.timeline.isSequence?u`<div class="timeline">
                            <file-timeline hasInfo="false" hasSpeedButton="false" hasPlayButton="false"></file-timeline>
                        </div>`:_}
                    
                    <file-analysis-overview></file-analysis-overview>

                </file-mirror>

            </article>
        
        </div>`}};ec.styles=ne`


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

    `;let Rn=ec;const tc=class tc{constructor(e){this.element=e,this.instanceRenderer=new Rn(this.element)}trimmedString(e){if(e)return e.trim().length>0?e.trim():void 0}renderHeader(e,t){return e||t?u`
                <div class="group-header">
                
                    ${e?u`<h2 class="group-title">${e}</h2>`:_}

                    ${t?u`<p class="group-info">${t}</p>`:_}

                </div>
            `:_}renderGroup(e,t,i,s){const n=this.trimmedString(e.label),a=this.trimmedString(e.info),o={"group-files":!0,[`group-files-${t}`]:!0};return u`

            <section class="${Kt({group:!0,group__bordered:i!=="none"})}">

                ${this.renderHeader(n,a)}

                <div class=${Kt(o)}>

                    ${e.files.map(({instance:h,innerHtml:f,label:p,time:g})=>this.instanceRenderer.renderInstance(h,g,s,p,f))}

                </div>

            </section>

        `}};tc.styles=ne`


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

    `;let Qa=tc,Ib=class{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ei)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.manager.palette.setPalette(this.element.parentElement.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.label=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?vu(e).getTime():this.grouping==="day"?Va(e).getTime():this.grouping==="week"?Ai(e).getTime():this.grouping==="month"?qa(e).getTime():this.grouping==="year"?ph(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?cu(e).getTime():this.grouping==="day"?lu(e).getTime():this.grouping==="week"?Xa(e).getTime():this.grouping==="month"?Ya(e).getTime():this.grouping==="year"?hu(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:$e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:$e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+$e(e,"w")+" of "+$e(e,"yyyy"),info:[ot.humanDate(Ai(e).getTime()),ot.humanDate(Xa(e).getTime())].join(" - ")}:this.grouping==="month"?{label:$e(e,"MMMM yyyy"),info:[ot.humanDate(qa(e).getTime()),ot.humanDate(Ya(e).getTime())].join(" - ")}:this.grouping==="year"?{label:$e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?ot.human(e):this.grouping==="hour"||this.grouping==="day"?$e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",ot.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}};var Ub=Object.defineProperty,zb=Object.getOwnPropertyDescriptor,yr=(r,e,t,i)=>{for(var s=i>1?void 0:i?zb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ub(e,t,s),s};let Gt=class extends je{constructor(){super(...arguments),this.groups=[],this.instances=[],this.columns=3,this.breakpoint=700,this.width=1,this.grouping="none"}connectedCallback(){super.connectedCallback()}setManagerSlug(r){this.scopeSlug=r;const i=Po(r).addOrGetRegistry(r).groups.addOrGetGroup(this.slug);this.grouper=new Ib(this,i),setTimeout(()=>{this.grouper&&this.grouper.processEntries(this.entries.filter(s=>s instanceof Mi))},0),this.scopeSlug=r}updated(r){super.updated(r),r.has("groups"),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping)}render(){return u`
            <slot name="entry"></slot>

            ${this.scopeSlug?u`<manager-mirror slug=${this.scopeSlug}>

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

                `:_}

        `}};Gt.styles=[Rn.styles,Qa.styles,ne`

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
    
    `];yr([v(),Or({slot:"entry",flatten:!0})],Gt.prototype,"entries",2);yr([v()],Gt.prototype,"groups",2);yr([v()],Gt.prototype,"instances",2);yr([d()],Gt.prototype,"columns",2);yr([d()],Gt.prototype,"breakpoint",2);yr([d({type:Number,reflect:!0})],Gt.prototype,"width",2);yr([d({type:String,reflect:!0})],Gt.prototype,"grouping",2);yr([d()],Gt.prototype,"name",2);yr([d()],Gt.prototype,"slug",2);yr([v()],Gt.prototype,"scopeSlug",2);yr([d({type:Object})],Gt.prototype,"onInstanceEnter",2);yr([d({type:Object})],Gt.prototype,"onInstanceLeave",2);yr([d({type:Object})],Gt.prototype,"groupRenderer",2);Gt=yr([H("time-group")],Gt);var Fb=Object.defineProperty,jb=Object.getOwnPropertyDescriptor,Ps=(r,e,t,i)=>{for(var s=i>1?void 0:i?jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fb(e,t,s),s};const $h={fromAttribute(r){if(typeof r=="string"){const e=r.trim();return e.length>0?parseFloat(e):void 0}else return},toAttribute(r){if(r!==void 0)return r.toString()}};let Ii=class extends je{constructor(){super(...arguments),this.tRef=pe(),this.vRef=pe(),this.vunitsRef=pe(),this.haRef=pe(),this.vunits="mps"}kphToMps(r){return r*.2778}calculateE(r,e){return r*(6.105/100)*Math.exp(17.27*e/(237.7+e))}calculateTa(r,e,t){return r+.33*e-.7*t-4}firstUpdated(r){super.firstUpdated(r),zi(this),this.tRef.value&&this.tRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.t=Math.min(100,Math.max(-275.4,i)))}),this.haRef.value&&this.haRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.ha=Math.min(100,Math.max(0,i)))}),this.vRef.value&&this.vRef.value.addEventListener("change",e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this.v=Math.max(0,i))})}processValueChange(r,e){if(r.has(e)){const t=this[e],i=this[`${e}Ref`];i.value&&(t!=null?i.value.value=t.toString():i.value.value=""),this.recalculateVa()}}recalculateVa(){if(this.t!==void 0&&this.ha!==void 0&&this.v!==void 0){const r=this.vunits==="mps"?this.v:this.kphToMps(this.v),e=this.calculateE(this.ha,this.t),t=this.calculateTa(this.t,e,r);this.ta=t}else this.ta=void 0}shouldUpdate(r){return super.shouldUpdate(r),this.ha&&(this.ha<0&&(this.ha=0,this.haRef.value&&(this.haRef.value.value="0")),this.ha>100&&(this.ha=100,this.haRef.value&&(this.haRef.value.value="100"))),!0}updated(r){super.updated(r),this.processValueChange(r,"t"),this.processValueChange(r,"v"),this.processValueChange(r,"ha"),r.has("vunits")&&this.vunitsRef.value&&(this.vunitsRef.value.value=this.vunits,this.recalculateVa())}renderNumberField(r,e,t,i,s,n,a,o,l){const h=typeof i=="string"?Dt(i):i;return u`
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
                            value=${Q(s)}
                            min=${Q(n)}
                            max=${Q(a)}
                            step=${Q(o)}
                            type="number"
                            @blur=${f=>{const p=f.target,g=p.value.trim();g===""||g===void 0||g===null?this[e]=void 0:this[e]=parseFloat(p.value)}}
                        ></input>
                        <span>${h}</span>
                    </div>

                    ${l?u`<label for=${e}>${l}</label>`:_}

                </div>

            </div>

            
        `}renderResult(r,e){const t=r-e,i={diff:Math.abs(t).toFixed(2),app:r.toFixed(2),t:e},s=x(w.apparenttemperatureverbose,i),n=t<0?x(w.youfeelcolder,i):x(w.youfeelwarmer,i),a=r.toFixed(2);return u`<div class="result">

            <p class="result_label">${x(w.apparenttemperature)}</p>

            <p class="result_value">
                ${a} °C
            </p>

            <p class="result_comment">${s}</p>

            <p class="result_comment">${n}</p>
        
        </div>`}render(){return u`
            <thermal-app label=${x(w.apparenttemperature)} author="LabIR Edu" license="CC BY-SA 4.0">

            <div slot="bar" style="flex-grow: 4;">

                                <thermal-bar>

                <thermal-dialog label=${x(w.info)}>
                    <thermal-button slot="invoker">${x(w.info)}</thermal-button>
                    <div slot="content">
                        ${Dt(x(w.apparenttemperaturehint,{href:"https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature"}))}
                    </div>
                </thermal-dialog>

                ${this.t!==void 0||this.v!==void 0||this.ha!==void 0?u`<thermal-button @click=${()=>{this.t=void 0,this.ha=void 0,this.ta=void 0,this.v=void 0}}>Reset</thermal-button>`:_}

                </thermal-bar>

                </div>

                <section class="table">

                ${this.renderNumberField(this.tRef,"t",x(w.airtemperature),"°C",this.t,-273.15,100,.1)}

                ${this.renderNumberField(this.vRef,"v",x(w.windspeed),u`<select 
                    @change=${r=>{const t=r.target.value;this.vunits=t}} 
                    value=${this.vunits}
                    ${ve(this.vunitsRef)}
                >
                    <option value="mps">m/s</option>
                    <option value="kph">km/h</option>
                </select>`,this.v,0,void 0,.1)}

                ${this.renderNumberField(this.haRef,"ha",x(w.relativeairhumidity),"%",this.ha,0,100,.1)}

                </section>
                <div  class="tabindex" tabindex="0">
                ${this.ta!==void 0&&this.t!==void 0?this.renderResult(this.ta,this.t):_}
                </div>
                

            </thermal-app>
        `}};Ii.styles=ne`

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


    `;Ps([d({type:String,reflect:!0,attribute:!0,converter:$h})],Ii.prototype,"t",2);Ps([d({type:String,reflect:!0,attribute:!0,converter:$h})],Ii.prototype,"v",2);Ps([d({type:String,reflect:!0,attribute:!0,converter:$h})],Ii.prototype,"ha",2);Ps([v()],Ii.prototype,"ta",2);Ps([d({type:String,reflect:!0,attribute:!0})],Ii.prototype,"vunits",2);Ps([V({context:gi}),d({reflect:!0,converter:Fi})],Ii.prototype,"locale",2);Ii=Ps([H("apparent-temperature-aat")],Ii);var Nb=Object.defineProperty,Wb=Object.getOwnPropertyDescriptor,Hb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Wb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Nb(e,t,s),s};let Yl=class extends ks{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return u`
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
                        <p>version ${zd}</p>
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
        `}};Yl.styles=ne`

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
    
    `;Yl=Hb([H("app-info-button")],Yl);const Os="pngExportWidthContext",Qn="pngExportWidthSetterContext",As="png-export-width-context",ea="png-export-width-setter-context";var Bb=Object.defineProperty,Gb=Object.getOwnPropertyDescriptor,ta=(r,e,t,i)=>{for(var s=i>1?void 0:i?Gb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Bb(e,t,s),s};let Ss=class extends je{renderRow(r,e,t){return u`<thermal-field label="${r}">
                <div>${e}</div>
                ${t||_}
            </thermal-field>`}renderSlider(r,e,t,i,s,n,a,o){const l=u`<input 
                value=${e}
                min=${i}
                max=${s}
                step=${n}
                type="range"
                @input=${f=>{const p=Math.min(s,Math.max(0,parseFloat(f.target.value)));a(p)}}
            ></input>`,h=u`<div class="hint"><strong>${e} ${t}</strong> (${i} - ${s} ${t})${o?u`<br />${o}</div>`:_}`;return this.renderRow(r,l,h)}render(){return u`
        ${this.renderSlider(x(w.exportimagewidth),this.pngWidth,"px",300,1920,20,this.pngWidthSetter.bind(this))}

        ${this.renderSlider(x(w.exportimagefontsize),this.pngFs,"px",10,50,1,this.pngFsSetter.bind(this))}
        `}};Ss.styles=ne`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }
        
        `;ta([v(),le({context:Os,subscribe:!0})],Ss.prototype,"pngWidth",2);ta([le({context:Qn,subscribe:!0})],Ss.prototype,"pngWidthSetter",2);ta([le({context:As,subscribe:!0})],Ss.prototype,"pngFs",2);ta([le({context:ea,subscribe:!0})],Ss.prototype,"pngFsSetter",2);Ss=ta([H("png-export-panel")],Ss);var Vb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,qb=(r,e,t,i)=>{for(var s=i>1?void 0:i?Yb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Vb(e,t,s),s};let ql=class extends je{render(){return u`
        <thermal-field label="${x(w.filerendering)}" hint="${x(w.filerenderinghint)}">
            <manager-smooth-switch></manager-smooth-switch>
        </thermal-field>
        <thermal-field label="${x(w.graphlines)}" hint="${x(w.graphlineshint)}">
            <manager-graph-smooth-switch></manager-graph-smooth-switch>
        </thermal-field>
        `}};ql.styles=ne`
    
        :host {
            display: contents;
        }
    
    `;ql=qb([H("registry-display-panel")],ql);var Xb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,Oo=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xb(e,t,s),s};let Xs=class extends je{render(){return _}};Oo([d({type:String})],Xs.prototype,"lrc",2);Oo([d({type:String})],Xs.prototype,"png",2);Oo([d({type:String})],Xs.prototype,"label",2);Xs=Oo([H("thermal-file")],Xs);var Zb=Object.defineProperty,Jb=Object.getOwnPropertyDescriptor,lp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jb(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zb(e,t,s),s};let eo=class extends je{render(){return u`<slot></slot>`}};lp([d()],eo.prototype,"name",2);eo=lp([H("thermal-group")],eo);var Qb=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,Qt=(r,e,t,i)=>{for(var s=i>1?void 0:i?e0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qb(e,t,s),s};let zt=class extends je{constructor(){super(...arguments),this.label="Gallery of IR images",this.palette="jet",this.state="main",this.registryRef=pe(),this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r},this.columns=3}connectedCallback(){super.connectedCallback(),zi(this),this.addEventListener("slotchange",()=>{this.processSlots()})}firstUpdated(r){var e;super.firstUpdated(r),this.processSlots(),this.resetRegistry(),this.registryRef.value&&((e=this.registryRef.value)==null||e.registry.palette.setPalette(this.palette),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}),this.registryRef.value.registry.groups.addListener(this.UUID,()=>{this.registryRef.value&&this.registryRef.value.registry.range.applyMinmax()}))}processSlots(){setTimeout(()=>{this.structure=this.slottedElements.filter(r=>r instanceof eo).map(r=>({label:r.getAttribute("label"),description:r.getAttribute("description"),lat:r.getAttribute("lat"),lon:r.getAttribute("lon"),files:Array.from(r.children).filter(e=>e instanceof Xs&&e.hasAttribute("lrc")).map(e=>({lrc:e.getAttribute("lrc"),png:e.getAttribute("png"),label:e.getAttribute("label")}))})).filter(r=>r.files.length>0)},1e3)}actionMainOpen(){this.state="main",this.resetRegistry(),setTimeout(()=>{this.group=void 0,this.file=void 0},0)}actionGroupOpen(r){this.resetRegistry(),setTimeout(()=>{this.group=r,this.columns=Math.min(4,r.files.length),r.files.length>1?this.state="group":(this.state="file",this.file=r.files[0])},0)}actionDetailOpen(r){if(this.group===void 0)throw new Error("Group not yet set");this.state="file",this.resetRegistry(),setTimeout(()=>{this.file=r},0)}actionDetailClose(){this.state="group",this.resetRegistry(),setTimeout(()=>{this.file=void 0},0)}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var r;(r=this.registryRef.value)==null||r.registry.range.applyMinmax()}))}renderMain(){if(this.structure===void 0)return u`<thermal-loading label="Načítám data"></thermal-loading>`;const e=this.structure.map(t=>{const{files:i,...s}=t;return{...s,file:i[0],group:t}}).map((t,i)=>{const s=t.label??`group_preview_${i}`;return u`<group-provider slug="${s}" autoclear="true">
                <button class="group-thumbnail" @click="${()=>this.actionGroupOpen(t.group)}">
                    <div class="header">
                        <div class="info">
                            <div class="title">${t.label}</div>
                            <div class="count">${x(w.numfiles,{num:t.group.files.length})}</div>
                        </div>
                        <div class="button">
                            ${t.group.files.length>1?u`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>`:u`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>`}
                        </div>
                    </div>
                    <file-provider thermal="${t.file.lrc}" batch="true" autoclear="true">
                        <file-canvas></file-canvas>
                    </file-provider>
                </button>
            </group-provider>`});return u`
            <div class="main">
                ${e}
            </div>
        `}renderGroup(){return this.structure===void 0||this.group===void 0?u`<thermal-loading></thermal-loading`:this.renderBrowser(u`
            <group-provider slug="${this.group.label??`group_detail_${Math.random()}`}" autoclear="true">

                <group-chart slot="pre"></group-chart>

                <header>

                    <thermal-button variant="foreground" @click="${()=>this.actionMainOpen()}">x</thermal-button>

                    <thermal-dropdown>
                        <span slot="invoker">${this.group.label}</span>
                        ${this.structure.filter(r=>{var e;return r.label!==((e=this.group)==null?void 0:e.label)}).map(r=>u`<div slot="option">
                                <thermal-button @click="${()=>this.actionGroupOpen(r)}">${r.label}</thermal-button>
                            </div>`)}
                    </thermal-dropdown>

                    <group-download-dropdown></group-download-dropdown>

                    <div>
                        <input type="range" min="1" max="4" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${x(w.columns,{num:this.columns})}</div>
                    </div>
                    
                    <group-analysis-sync-button></group-analysis-sync-button>

                </header>

                ${this.group.description?u`<section class="group-description">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p>${this.group.description}</p>
                    </section>`:_}

                <section class="files columns_${this.columns}">
            
                    ${this.group.files.map(r=>u`<file-provider thermal="${r.lrc}" batch="true" autoclear="true">
                        <file-thumbnail .ondetail="${()=>this.actionDetailOpen(r)}"></file-thumbnail>
                    </file-provider>`)}
            
                </section>

            </group-provider>
        `)}renderFile(){return this.structure===void 0||this.group===void 0||this.file===void 0?u`<thermal-loading></thermal-loading`:this.renderBrowser(u`<group-provider slug="${this.file.lrc}" autoclear="true">

            <file-provider batch="true" autoclear="true" thermal="${this.file.lrc}">
                <file-detail label="${this.group.label}" .onback="${()=>{var r;((r=this.group)==null?void 0:r.files.length)===1?this.actionMainOpen():this.actionDetailClose()}}"></file-detail>
            </file-provider>

        </group-provider>`)}renderBrowser(r){return u`<div class="browser state_${this.state}">
            <section>
                <group-tool-bar></group-tool-bar>
            </section>
            <section>
                ${r}
            </section>
        </div>`}render(){return u`<manager-provider slug="${this.UUID}">
            <registry-provider slug="${this.UUID}" ${ve(this.registryRef)} palette="${this.palette}">
                <thermal-app author="${Q(this.author)}" license="${this.license}" showfullscreen="true">

                    <thermal-button variant="foreground" slot="label" @click="${()=>this.actionMainOpen()}">${this.label}</thermal-button>

                    ${this.structure!==void 0?u`
                            <registry-histogram slot="pre" expandable="true"></registry-histogram>
                            <registry-range-slider slot="pre"></registry-range-slider>
                            <registry-ticks-bar slot="pre"></registry-ticks-bar>
                            
                        `:_}

                    <div slot="bar" style="flex-grow: 4;">
                        <thermal-bar>
                            <registry-palette-dropdown></registry-palette-dropdown>
                            <registry-range-full-button></registry-range-full-button>
                            <registry-range-auto-button></registry-range-auto-button>
                        </thermal-bar>
                    </div>

                    <thermal-dialog label="${x(w.config)}" slot="close">
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

                    ${this.state==="main"?this.renderMain():_}
                    ${this.state==="group"?this.renderGroup():_}
                    ${this.state==="file"?this.renderFile():_}

                    <slot></slot>


                </thermal-app>
            </registry-provider>
        </manager-provider>`}};zt.styles=ne`
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
    `;Qt([d({type:String,reflect:!0})],zt.prototype,"author",2);Qt([d({type:String,reflect:!0})],zt.prototype,"label",2);Qt([d({type:String,reflect:!0})],zt.prototype,"license",2);Qt([d({type:String,reflect:!0,attribute:!0})],zt.prototype,"palette",2);Qt([v(),Or({flatten:!0})],zt.prototype,"slottedElements",2);Qt([v()],zt.prototype,"structure",2);Qt([v()],zt.prototype,"state",2);Qt([v()],zt.prototype,"group",2);Qt([v()],zt.prototype,"file",2);Qt([V({context:Os})],zt.prototype,"pngExportWidth",2);Qt([V({context:Qn})],zt.prototype,"pngExportWidthSetterContext",2);Qt([V({context:As})],zt.prototype,"pngExportFs",2);Qt([V({context:ea})],zt.prototype,"pngExportFsSetterContext",2);Qt([V({context:gi}),d({reflect:!0,converter:Fi})],zt.prototype,"locale",2);Qt([v()],zt.prototype,"columns",2);zt=Qt([H("thermal-gallery-app")],zt);const _h="manager-instance",ra="manager-palette-context",Ch="manager-smooth-context",Ao="manager-graph-function-context",ia="tool-context",sa="tools-context";var t0=Object.defineProperty,hp=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&t0(e,t,s),s};class Eo extends ks{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:hi.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}connectedCallback(){super.connectedCallback();const e={},t=this.sanitizeStringPalette(this.palette.key);e.palette=t;const i=Po(this.slug,e);this.manager=i,this.tool=this.manager.tool.value,this.tools=this.manager.tool.tools}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.manager!==void 0&&Mb(this.manager)}firstUpdated(e){super.firstUpdated(e),this.manager.palette.addListener(this.UUIDManagerListeners,t=>{this.setPalette(t)}),this.manager.smooth.addListener(this.UUIDManagerListeners,t=>{this.smooth=t}),this.manager.graphSmooth.addListener(this.UUIDManagerListeners,t=>{this.graphSmooth=t}),this.manager.tool.addListener(this.UUIDManagerListeners,t=>{this.tool=t})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e==="palette"&&this.manager){const s=this.sanitizeStringPalette(i);this.manager.palette.setPalette(s)}}sanitizeStringPalette(e){let t=!0;return e==null?t=!1:Object.keys(hi).includes(e)||(t=!1),t?e:"jet"}setPalette(e){this.palette={key:e,data:hi[e]}}render(){return u`<slot></slot>`}}hp([V({context:ia})],Eo.prototype,"tool");hp([V({context:sa})],Eo.prototype,"tools");var r0=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,Ni=(r,e,t,i)=>{for(var s=i>1?void 0:i?i0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r0(e,t,s),s};let ui=class extends Eo{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:hi.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Ni([V({context:_h})],ui.prototype,"manager",2);Ni([d({type:String,reflect:!0,attribute:!0})],ui.prototype,"slug",2);Ni([V({context:ra}),d({type:String,attribute:!0,reflect:!0,converter:{fromAttribute:r=>({key:r,data:hi[r]}),toAttribute:r=>r.key.toString()}})],ui.prototype,"palette",2);Ni([V({context:Ch}),d({type:String,reflect:!0,attribute:!0})],ui.prototype,"smooth",2);Ni([V({context:Ao}),d({type:String,reflect:!0,attribute:!0})],ui.prototype,"graphSmooth",2);Ni([d({type:Boolean,reflect:!0})],ui.prototype,"autoclear",2);Ni([V({context:ia})],ui.prototype,"tool",2);Ni([V({context:sa})],ui.prototype,"tools",2);ui=Ni([H("manager-provider")],ui);var s0=Object.defineProperty,n0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&s0(e,t,s),s};class Es extends ks{connectedCallback(){super.connectedCallback(),this.manager}}n0([le({context:_h,subscribe:!0}),v()],Es.prototype,"manager");const kh="registry-instance",Ph="registry-opacity",Do="registry-range-from",Lo="registry-range-to",cp="registry-loading",Oh="registry-min",Ah="registry-max",dp="registry-highlight",na="registry-highlight-setter";var a0=Object.defineProperty,up=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&a0(e,t,s),s};class Ro extends Es{constructor(){super(...arguments),this.UUIDRegistryListeners=this.UUID+"__registry-listener",this.opacity=1,this.loading=!1,this.autoclear=!1,this.setHighlight=e=>{this.highlight=e}}connectedCallback(){super.connectedCallback();const e=this.manager.addOrGetRegistry(this.slug);this.registry=e,this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.registry!==void 0&&this.manager.removeRegistry(this.registry.id)}firstUpdated(e){super.firstUpdated(e),this.registry.opacity.addListener(this.UUIDRegistryListeners,t=>{this.opacity=t}),this.registry.minmax.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.min=void 0,this.max=void 0):(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.UUIDRegistryListeners,t=>{t===void 0?(this.from=void 0,this.to=void 0):(this.from=t.from,this.to=t.to)}),this.registry.loading.addListener(this.UUIDRegistryListeners,t=>{this.loading=t})}updated(e){if(super.updated(e),(e.has("from")||e.has("to"))&&this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to}),e.has("opacity")){const t=Math.min(1,Math.max(0,this.opacity));t!==this.registry.opacity.value&&this.registry.opacity.imposeOpacity(t)}}render(){return u`<slot></slot>`}}up([V({context:dp})],Ro.prototype,"highlight");up([V({context:na})],Ro.prototype,"setHighlight");var o0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,mi=(r,e,t,i)=>{for(var s=i>1?void 0:i?l0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&o0(e,t,s),s};let qr=class extends Ro{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};mi([d({type:String,reflect:!0,attribute:!0})],qr.prototype,"slug",2);mi([V({context:kh})],qr.prototype,"registry",2);mi([V({context:Ph}),d({type:Number,reflect:!0,attribute:!0})],qr.prototype,"opacity",2);mi([V({context:Oh}),v()],qr.prototype,"min",2);mi([V({context:Ah}),v()],qr.prototype,"max",2);mi([V({context:Do}),d({type:Number,reflect:!0,attribute:!0})],qr.prototype,"from",2);mi([V({context:Lo}),d({type:Number,reflect:!0,attribute:!0})],qr.prototype,"to",2);mi([V({context:cp}),d({type:String,reflect:!0,attribute:!0})],qr.prototype,"loading",2);mi([d({type:Boolean,reflect:!0})],qr.prototype,"autoclear",2);qr=mi([H("registry-provider")],qr);var h0=Object.defineProperty,c0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&h0(e,t,s),s};class Ar extends Es{connectedCallback(){super.connectedCallback(),this.registry}}c0([le({context:kh,subscribe:!0})],Ar.prototype,"registry");class pp extends Ar{constructor(){super(...arguments),this.UUIDGroupListeners=this.UUID+"__group-listener",this.autoclear=!1}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.slug)}disconnectedCallback(){super.disconnectedCallback(),this.autoclear===!0&&this.group!==void 0&&this.registry.groups.removeGroup(this.group.id)}render(){return u`<slot></slot>`}}const Eh="group-instance";var d0=Object.defineProperty,u0=Object.getOwnPropertyDescriptor,To=(r,e,t,i)=>{for(var s=i>1?void 0:i?u0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&d0(e,t,s),s};let Tn=class extends pp{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};To([d({type:String,attribute:!0,reflect:!0})],Tn.prototype,"slug",2);To([V({context:Eh})],Tn.prototype,"group",2);To([d({type:Boolean,reflect:!0})],Tn.prototype,"autoclear",2);Tn=To([H("group-provider")],Tn);var p0=Object.defineProperty,f0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&p0(e,t,s),s};class vi extends Ar{constructor(){super()}connectedCallback(){super.connectedCallback()}}f0([le({context:Eh,subscribe:!0})],vi.prototype,"group");const Dh="file",fp="failure",gp="file-loading",g0="file-loaded",Mo="file-provider-element",Io="file-ms-context",Lh="file-cursor",mp="file-cursor-setter",aa="playback",Rh="duration",Uo="playing",Th="playbackSpeed",Mh="recording",vp="mayStop",m0="analysislist",Ih="file-markers-context";var v0=Object.defineProperty,nr=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&v0(e,t,s),s};class jt extends vi{constructor(){super(...arguments),this.loading=!1,this.ready=!1,this.cursor=void 0,this.cursorSetter=e=>{if(e===void 0)this.cursor!==void 0&&(this.cursor=void 0);else if(this.file){const t=this.file.timeline._convertPercenttRelative(e),i=this.file.timeline.findPreviousRelative(t);this.cursor={absolute:i.absolute,ms:i.relative,percentage:e}}},this.ms=0,this.speed=1,this.recording=!1,this.playing=!1,this.mayStop=!0,this.marksProvidedBelow=[],this.analysis=[],this.onLoadingStart=new ie,this.onSuccess=new ie,this.onFailure=new ie,this.onInstanceCreated=new ie}firstUpdated(e){super.firstUpdated(e),this.marksProvidedBelow=this.marksQueriedInternally,this.marksProvidedBelow.forEach(t=>console.log(t.innerHTML))}updated(e){if(super.updated(e),e.has("ms")&&this.file&&this.duration&&this.currentFrame){const t=Math.min(this.duration.ms,Math.max(0,this.ms));t!==this.currentFrame.ms&&this.file.timeline.setRelativeTime(t)}e.has("speed")&&this.file&&this.speed&&this.speed!==this.file.timeline.playbackSpeed&&(this.file.timeline.playbackSpeed=this.speed),e.has("playing")&&this.file&&(this.playing&&!this.file.timeline.isPlaying?this.file.timeline.play():!this.playing&&this.file.timeline.isPlaying&&this.file.timeline.pause()),this.handleAnalysisUpdate(1,e),this.handleAnalysisUpdate(2,e),this.handleAnalysisUpdate(3,e),this.handleAnalysisUpdate(4,e),this.handleAnalysisUpdate(5,e),this.handleAnalysisUpdate(6,e),this.handleAnalysisUpdate(7,e)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="recording"&&this.file&&(this.recording===!0&&i==="false"?this.file.recording.end():this.recording===!1&&i==="true"&&this.file.recording.start())}recieveInstance(e){this.file=e,this.failure=void 0,this.loading=!1,this.ready=!0,this.duration={ms:e.timeline.duration,time:e.timeline.formatDuration(e.timeline.duration)},this.currentFrame={ms:e.timeline.currentMs,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:e.timeline.currentStep.index,absolute:e.timeline.currentStep.absolute},this.analysis=e.analysis.layers.all,this.speed&&(e.timeline.playbackSpeed=this.speed),this.playCallback=()=>{this.playing=!0},this.stopCallback=()=>{this.playing=!1},this.currentFrameChangeCallback=t=>{this.currentFrame={ms:t.relative,time:e.timeline.currentTime,percentage:e.timeline.currentPercentage,index:t.index,absolute:t.absolute},this.ms=t.relative},this.playbackSpeedCallback=t=>{this.speed=t},this.recordingCallback=t=>{this.recording=t},this.mayStopCallback=t=>{this.mayStop=t},this.analysisCallback=t=>{this.analysis=t},e.timeline.callbacksPlay.add(this.UUID,this.playCallback),e.timeline.callbacksPause.add(this.UUID,this.stopCallback),e.timeline.callbacksStop.add(this.UUID,this.stopCallback),e.timeline.callbacksEnd.add(this.UUID,this.stopCallback),e.timeline.callbacksChangeFrame.add(this.UUID,this.currentFrameChangeCallback),e.timeline.callbackdPlaybackSpeed.add(this.UUID,this.playbackSpeedCallback),e.recording.addListener(this.UUID,this.recordingCallback),e.recording.callbackMayStop.add(this.UUID,this.mayStopCallback),e.analysis.addListener(this.UUID,this.analysisCallback),this.onInstanceCreated.call(e),e.draw()}removeInstance(e){e.unmountFromDom(),this.file=void 0,this.loading=!1,this.ready=!1,this.duration=void 0,this.currentFrame=void 0,this.analysis=[],e.timeline.callbacksPlay.delete(this.UUID),e.timeline.callbacksPause.delete(this.UUID),e.timeline.callbacksStop.delete(this.UUID),e.timeline.callbacksEnd.delete(this.UUID),e.timeline.callbacksChangeFrame.delete(this.UUID),e.timeline.callbackdPlaybackSpeed.delete(this.UUID),e.recording.removeListener(this.UUID),e.analysis.removeListener(this.UUID)}deleteFile(){this.file&&this.removeInstance(this.file)}handleLoaded(e){e.slots.onSlot1Serialize.set(this.UUID,t=>this.analysis1=t),e.slots.onSlot2Serialize.set(this.UUID,t=>this.analysis2=t),e.slots.onSlot3Serialize.set(this.UUID,t=>this.analysis3=t),e.slots.onSlot4Serialize.set(this.UUID,t=>this.analysis4=t),e.slots.onSlot5Serialize.set(this.UUID,t=>this.analysis5=t),e.slots.onSlot6Serialize.set(this.UUID,t=>this.analysis6=t),e.slots.onSlot7Serialize.set(this.UUID,t=>this.analysis7=t),this.createInitialAnalysis(e,1,this.analysis1),this.createInitialAnalysis(e,2,this.analysis2),this.createInitialAnalysis(e,3,this.analysis3),this.createInitialAnalysis(e,4,this.analysis4),this.createInitialAnalysis(e,5,this.analysis5),this.createInitialAnalysis(e,6,this.analysis6),this.createInitialAnalysis(e,7,this.analysis7)}handleAnalysisUpdate(e,t){const i=`analysis${e}`;if(t.has(i)){const s=t.get(i),n=this[i];if(this.file){const a=this.file.slots.getSlot(e);if(a===void 0&&n&&n.trim().length>0&&(!s||(s==null?void 0:s.trim().length)>0)){const o=this.file.slots.createFromSerialized(n,e);o==null||o.setSelected(!1,!0)}else a!==void 0&&s&&(!n||(n==null?void 0:n.trim().length)===0)?this.file.slots.removeSlotAndAnalysis(e):a&&n&&(a==null||a.recieveSerialized(n))}}}createInitialAnalysis(e,t,i){if(i!==void 0&&i.trim().length>0){const s=e.slots.createFromSerialized(i,t);s==null||s.setSelected(!1,!0)}}render(){return u`
            <slot></slot>
            <slot name="mark"></slot>
            <slot name="analysis"></slot>
        `}}nr([V({context:Dh}),v()],jt.prototype,"file");nr([V({context:fp}),v()],jt.prototype,"failure");nr([V({context:gp}),v()],jt.prototype,"loading");nr([V({context:g0})],jt.prototype,"ready");nr([V({context:Rh}),v()],jt.prototype,"duration");nr([V({context:aa})],jt.prototype,"currentFrame");nr([V({context:Lh})],jt.prototype,"cursor");nr([V({context:Io})],jt.prototype,"ms");nr([V({context:Th})],jt.prototype,"speed");nr([V({context:Mh})],jt.prototype,"recording");nr([V({context:Uo})],jt.prototype,"playing");nr([V({context:vp}),v()],jt.prototype,"mayStop");nr([Or({slot:"mark",flatten:!0})],jt.prototype,"marksQueriedInternally");nr([V({context:Ih})],jt.prototype,"marksProvidedBelow");nr([V({context:m0})],jt.prototype,"analysis");var y0=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,er=(r,e,t,i)=>{for(var s=i>1?void 0:i?b0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&y0(e,t,s),s};let Vt=class extends jt{constructor(){super(...arguments),this.ms=0,this.speed=1,this.providedSelf=this,this.recording=!1,this.playing=!1}getTourableRoot(){}async load(){return this.batch===!0?this.loadAsync():this.loadSync()}async loadSync(){return this.loading=!0,this.onLoadingStart.call(),await this.registry.service.loadFile(this.thermal,this.visible).then(async e=>e instanceof Di?await e.createInstance(this.group).then(t=>(this.file=t,this.onSuccess.call(t),this.handleLoaded(t),t.group.registry.postLoadedProcessing(),this.loading=!1,this.recieveInstance(t),t)):(this.failure=e,this.onFailure.call(this.failure),this.loading=!1,e))}loadAsync(){return this.loading=!0,this.onLoadingStart.call(),this.registry.batch.request(this.thermal,this.visible,this.group,this.asyncLoadCallback.bind(this))}async asyncLoadCallback(r){r instanceof qn?(this.file!==void 0&&(this.file.unmountFromDom(),delete this.file),this.log(this.file,r),this.file=r,this.onSuccess.call(r),this.handleLoaded(r),this.loading=!1,this.recieveInstance(r)):r instanceof Ei&&(this.failure=r,this.onFailure.call(this.failure),this.loading=!1)}connectedCallback(){super.connectedCallback(),this.load()}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0,this.load())}}};er([d({type:Number,reflect:!0,attribute:!0}),V({context:Io})],Vt.prototype,"ms",2);er([d({type:Number,reflect:!0,attribute:!0}),V({context:Th})],Vt.prototype,"speed",2);er([V({context:Mo})],Vt.prototype,"providedSelf",2);er([d({type:String,reflect:!0,attribute:!0}),V({context:Mh})],Vt.prototype,"recording",2);er([d({type:String,reflect:!0,attribute:!0}),V({context:Uo})],Vt.prototype,"playing",2);er([d({type:Boolean,reflect:!0,attribute:!0,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],Vt.prototype,"batch",2);er([d({type:String,attribute:!0,reflect:!0})],Vt.prototype,"thermal",2);er([d({type:String,attribute:!0,reflect:!0})],Vt.prototype,"visible",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis1",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis2",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis3",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis4",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis5",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis6",2);er([d({type:String,reflect:!0,attribute:!0})],Vt.prototype,"analysis7",2);Vt=er([H("file-provider")],Vt);var w0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,dn=(r,e,t,i)=>{for(var s=i>1?void 0:i?x0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&w0(e,t,s),s};let ns=class extends jt{constructor(){super(...arguments),this.providedSelf=this,this.container=pe(),this.ready=!1,this.hover=!1}getTourableRoot(){return this.container.value}connectedCallback(){super.connectedCallback(),this.providedSelf=this}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.container.value.addEventListener("mouseenter",()=>{}),this.container.value.addEventListener("mouseleave",()=>{}),this.listener=this.manager.service.handleDropzone(this.container.value),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0,this.log("enter")}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1,this.log("leave")}),this.listener.onDrop.add(this.UUID,this.handleDrop.bind(this)))}async handleDrop(r){this.onLoadingStart.call();const e=r[0];if(e)if(e instanceof Di){const t=await e.createInstance(this.group);this.file=t,this.onSuccess.call(t),this.recieveInstance(t),t.group.registry.postLoadedProcessing()}else e instanceof Ei&&(this.failure=e,this.onFailure.call(e));this.ready=!0,this.loading=!1}render(){if(this.ready===!1){const r={dropin:!0,hover:this.hover};return u`

                    <div class="container">
                        <div ${ve(this.container)} class="${Kt(r)}">

                            <div class="dropin-wrapper">

                                <div class="dropin-title">Upload a thermal file from your computer</div>

                                <div class="dropin-supported-files">
                                    <p>Drag and drop a file here from your computer or click the button to browse local files.</p>
                                    <p>Supported formats:${zu.map(e=>e.map(t=>"."+t.extension))}</p>
                                </div>

                                <div class="dropin-input">
                                    <thermal-button @click=${()=>{var e,t;(t=(e=this.listener)==null?void 0:e.input)==null||t.click()}}>Choose from your computer</thermal-button>
                                </div>

                            </div>
                        
                        </div>
                    </div>
            `}return u`
            ${this.ready?u`<slot></slot>`:_}
            <slot name="mark"></slot>
        `}};ns.styles=ne`

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
    
    `;dn([V({context:Mo})],ns.prototype,"providedSelf",2);dn([v()],ns.prototype,"container",2);dn([v()],ns.prototype,"ready",2);dn([v()],ns.prototype,"hover",2);dn([v()],ns.prototype,"listener",2);ns=dn([H("file-dropin")],ns);const _d="[a-fA-F\\d:]",Zi=r=>r&&r.includeBoundaries?`(?:(?<=\\s|^)(?=${_d})|(?<=${_d})(?=\\s|$))`:"",Gr="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",Pt="[a-fA-F\\d]{1,4}",zo=`
(?:
(?:${Pt}:){7}(?:${Pt}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${Pt}:){6}(?:${Gr}|:${Pt}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${Pt}:){5}(?::${Gr}|(?::${Pt}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${Pt}:){4}(?:(?::${Pt}){0,1}:${Gr}|(?::${Pt}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${Pt}:){3}(?:(?::${Pt}){0,2}:${Gr}|(?::${Pt}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${Pt}:){2}(?:(?::${Pt}){0,3}:${Gr}|(?::${Pt}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${Pt}:){1}(?:(?::${Pt}){0,4}:${Gr}|(?::${Pt}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${Pt}){0,5}:${Gr}|(?::${Pt}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),S0=new RegExp(`(?:^${Gr}$)|(?:^${zo}$)`),$0=new RegExp(`^${Gr}$`),_0=new RegExp(`^${zo}$`),Uh=r=>r&&r.exact?S0:new RegExp(`(?:${Zi(r)}${Gr}${Zi(r)})|(?:${Zi(r)}${zo}${Zi(r)})`,"g");Uh.v4=r=>r&&r.exact?$0:new RegExp(`${Zi(r)}${Gr}${Zi(r)}`,"g");Uh.v6=r=>r&&r.exact?_0:new RegExp(`${Zi(r)}${zo}${Zi(r)}`,"g");function C0(r){const e=(...t)=>r(...t);return Object.defineProperty(e,"name",{value:`functionTimeout(${r.name||"<anonymous>"})`,configurable:!0}),e}const{toString:k0}=Object.prototype;function P0(r){return k0.call(r)==="[object RegExp]"}const Cd={global:"g",ignoreCase:"i",multiline:"m",dotAll:"s",sticky:"y",unicode:"u"};function O0(r,e={}){if(!P0(r))throw new TypeError("Expected a RegExp instance");const t=Object.keys(Cd).map(s=>(typeof e[s]=="boolean"?e[s]:r[s])?Cd[s]:"").join(""),i=new RegExp(e.source||r.source,t);return i.lastIndex=typeof e.lastIndex=="number"?e.lastIndex:r.lastIndex,i}function A0(r,e,{timeout:t}={}){try{return C0(()=>O0(r).test(e),{timeout:t})()}catch(i){throw i}}const E0=15,D0={timeout:400};function L0(r){return r.length>E0?!1:A0(Uh.v4({exact:!0}),r,D0)}class R0 extends Error{constructor(e){super("Could not get the public IP address",e),this.name="IpNotFoundError"}}class yp extends Error{constructor(){super("Request was cancelled"),this.name="CancelError"}get isCanceled(){return!0}}const T0={timeout:5e3},M0={v4:["https://ipv4.icanhazip.com/","https://api.ipify.org/"],v6:["https://ipv6.icanhazip.com/","https://api6.ipify.org/"]},I0=(r,e,t)=>{const i=new XMLHttpRequest;let s;const n=new Promise((a,o)=>{s=o,i.addEventListener("error",o,{once:!0}),i.addEventListener("timeout",o,{once:!0}),i.addEventListener("load",()=>{const l=i.responseText.trim();if(!l||!L0(l)){o();return}a(l)},{once:!0}),i.open("GET",r),i.timeout=e.timeout,i.send()});return n.cancel=()=>{i.abort(),s(new yp)},n},U0=(r,e)=>{let t;const i=async function(){const s=[...M0[r],...e.fallbackUrls??[]];let n;for(const a of s)try{return t=I0(a,e,r),await t}catch(o){if(n=o,o instanceof yp)throw o}throw new R0({cause:n})}();return i.cancel=()=>{t.cancel()},i};function bp(r){return U0("v4",{...T0,...r})}var z0=Object.defineProperty,F0=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&z0(e,t,s),s};class zh extends vi{connectedCallback(){super.connectedCallback(),bp().then(e=>this.ip=e)}emitUpload(e,t){const i=window.navigator.userAgent,s=window.innerWidth,n=window.innerHeight,a=new Date().getTime(),o=new CustomEvent("uploaded",{bubbles:!0,cancelable:!1,detail:{ip:this.ip,userAgent:i,windowWidth:s,windowHeight:n,time:a,fileName:e,fileSize:t}});this.dispatchEvent(o)}}F0([v()],zh.prototype,"ip");var j0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,Fo=(r,e,t,i)=>{for(var s=i>1?void 0:i?N0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&j0(e,t,s),s};let Ks=class extends zh{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.uploading=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(e){if(super.firstUpdated(e),this.container.value!==void 0){const t=this.manager.service.handleDropzone(this.container.value,!1);t.onMouseEnter.add(this.UUID,()=>{console.log("mouseenter"),this.hover=!0}),t.onMouseLeave.add(this.UUID,()=>{console.log("mouseleave"),this.hover=!1}),t.onDrop.set(this.UUID,()=>{this.uploading=!0}),t.onProcessingEnd.add(this.UUID,async i=>{await Promise.all(i.map(async s=>{if(s instanceof Di){const n=await s.createInstance(this.group);this.emitUpload(n.fileName,n.bytesize)}})),this.uploading=!1})}}render(){const e={dropin:!0,hover:this.hover,uploading:this.uploading};return u`

            <div class="container" ${ve(this.tourableElementRef)}>
            
                <div ${ve(this.container)} class="${Kt(e)}">

                    <div class="dropin-gradient"></div>

                    <div class="dropin-content">
                        <div>${x(w.dragorselectfile)}</div>
                        <thermal-button variant="foreground">${x(w.selectfile)}</thermal-button>
                    </div>

                    <div class="dropin-uploading">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                
                </div>

            </div>

            <slot name="tour"></slot>
        
        `}};Ks.styles=ne`

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

    `;Fo([v()],Ks.prototype,"container",2);Fo([v()],Ks.prototype,"hover",2);Fo([v()],Ks.prototype,"uploading",2);Ks=Fo([H("group-dropin")],Ks);var W0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,jo=(r,e,t,i)=>{for(var s=i>1?void 0:i?H0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&W0(e,t,s),s};let Zs=class extends zh{constructor(){super(...arguments),this.container=pe(),this.hover=!1,this.uploading=!1,this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}firstUpdated(r){super.firstUpdated(r),this.container.value!==void 0&&(this.listener=this.manager.service.handleDropzone(this.container.value,!1),this.listener.onMouseEnter.add(this.UUID,()=>{this.hover=!0}),this.listener.onMouseLeave.add(this.UUID,()=>{this.hover=!1}),this.listener.onDrop.set(this.UUID,()=>{this.uploading=!0}),this.listener.onProcessingEnd.add(this.UUID,async e=>{this.group.files.removeAllInstances(),await Promise.all(e.map(async t=>{if(t instanceof Di){const i=await t.createInstance(this.group);this.emitUpload(i.fileName,i.bytesize)}})),this.uploading=!1}))}render(){const r=this.uploading===!1?x(w.uploadafile):u`<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;return u`


            <thermal-button @click="${()=>{this.listener&&this.listener.openFileDialog(!1)}}"><slot>${r}</slot></thermal-button>

            <div class="container" ${ve(this.tourableElementRef)}>
            
                <div ${ve(this.container)}></div>

            </div>

            <slot name="tour"></slot>
        
        `}};Zs.styles=ne`

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


    
    `;jo([v()],Zs.prototype,"container",2);jo([v()],Zs.prototype,"hover",2);jo([v()],Zs.prototype,"uploading",2);Zs=jo([H("group-dropin-input")],Zs);var B0=Object.defineProperty,G0=Object.getOwnPropertyDescriptor,Wi=(r,e,t,i)=>{for(var s=i>1?void 0:i?G0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&B0(e,t,s),s};let pi=class extends Eo{constructor(){super(...arguments),this.UUIDManagerListeners=this.UUID+"__manager-listener",this.palette={key:"jet",data:hi.jet},this.smooth=!1,this.graphSmooth=!1,this.autoclear=!1}getTourableRoot(){}};Wi([V({context:_h})],pi.prototype,"manager",2);Wi([d({type:String})],pi.prototype,"slug",2);Wi([V({context:ra}),d({type:String,converter:{fromAttribute:r=>({key:r,data:hi[r]}),toAttribute:r=>r.key.toString()}})],pi.prototype,"palette",2);Wi([V({context:Ch}),d({type:String})],pi.prototype,"smooth",2);Wi([V({context:Ao}),d({type:String})],pi.prototype,"graphSmooth",2);Wi([d({type:Boolean})],pi.prototype,"autoclear",2);Wi([V({context:ia})],pi.prototype,"tool",2);Wi([V({context:sa})],pi.prototype,"tools",2);pi=Wi([H("manager-mirror")],pi);var V0=Object.defineProperty,Y0=Object.getOwnPropertyDescriptor,yi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Y0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&V0(e,t,s),s};let Xr=class extends Ro{constructor(){super(...arguments),this.opacity=1,this.loading=!1,this.autoclear=!1}getTourableRoot(){}};yi([d({type:String,reflect:!0,attribute:!0})],Xr.prototype,"slug",2);yi([V({context:kh})],Xr.prototype,"registry",2);yi([V({context:Ph}),d({type:Number,reflect:!0,attribute:!0})],Xr.prototype,"opacity",2);yi([V({context:Oh}),v()],Xr.prototype,"min",2);yi([V({context:Ah}),v()],Xr.prototype,"max",2);yi([V({context:Do}),d({type:Number})],Xr.prototype,"from",2);yi([V({context:Lo}),d({type:Number})],Xr.prototype,"to",2);yi([V({context:cp}),d({type:String})],Xr.prototype,"loading",2);yi([d({type:Boolean})],Xr.prototype,"autoclear",2);Xr=yi([H("registry-mirror")],Xr);var q0=Object.defineProperty,X0=Object.getOwnPropertyDescriptor,No=(r,e,t,i)=>{for(var s=i>1?void 0:i?X0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&q0(e,t,s),s};let Mn=class extends pp{constructor(){super(...arguments),this.autoclear=!1}getTourableRoot(){}};No([d({type:String})],Mn.prototype,"slug",2);No([V({context:Eh})],Mn.prototype,"group",2);No([d({type:Boolean})],Mn.prototype,"autoclear",2);Mn=No([H("group-mirror")],Mn);var K0=Object.defineProperty,Z0=Object.getOwnPropertyDescriptor,Er=(r,e,t,i)=>{for(var s=i>1?void 0:i?Z0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&K0(e,t,s),s};let gr=class extends jt{constructor(){super(...arguments),this.providedSelf=this}getTourableRoot(){}updated(r){if(super.updated(r),r.has("thermal")){const e=r.get("thermal");e&&(this.group.files.removeFile(e),this.file=void 0)}r.has("file")&&this.file&&(this.loading=!1,this.recieveInstance(this.file),setTimeout(()=>this.file&&this.onSuccess.call(this.file),0))}};Er([V({context:Mo})],gr.prototype,"providedSelf",2);Er([V({context:Dh}),d()],gr.prototype,"file",2);Er([d({type:Boolean,converter:{fromAttribute(r){return r==="true"},toAttribute(r){return r===!0?"true":"false"}}})],gr.prototype,"batch",2);Er([d({type:String})],gr.prototype,"thermal",2);Er([d({type:String})],gr.prototype,"visible",2);Er([d({type:String})],gr.prototype,"analysis1",2);Er([d({type:String})],gr.prototype,"analysis2",2);Er([d({type:String})],gr.prototype,"analysis3",2);Er([d({type:String})],gr.prototype,"analysis4",2);Er([d({type:String})],gr.prototype,"analysis5",2);Er([d({type:String})],gr.prototype,"analysis6",2);Er([d({type:String})],gr.prototype,"analysis7",2);gr=Er([H("file-mirror")],gr);var J0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,wp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Q0(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&J0(e,t,s),s};let to=class extends Ar{constructor(){super(...arguments),this.tourableElemtnRef=pe()}getTourableRoot(){return this.tourableElemtnRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return u`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <!-- <span>${r.name}</span> -->
            </div>
        
        `}render(){return u`

            <thermal-dropdown variant="foreground" ${ve(this.tourableElemtnRef)}>

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.registry.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(hi).map(([r,e])=>u`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

            <slot></slot>

        `}};to.styles=ne`

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

    `;wp([le({context:ra,subscribe:!0})],to.prototype,"value",2);to=wp([H("registry-palette-dropdown")],to);var e1=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,xp=(r,e,t,i)=>{for(var s=i>1?void 0:i?t1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&e1(e,t,s),s};let ro=class extends Ar{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}onSelect(r){this.registry.palette.setPalette(r)}paletteTemplate(r,e){return u`

            <div class="button ${e}">
                <span class="palette" style="background:${r.gradient}"></span>
                <span>${x(w.palettename,{name:r.name})}</span>
            </div>
        
        `}render(){return u`
            <div class="container" ${ve(this.tourableElementRef)}>
                ${Object.entries(hi).map(([r,e])=>u`
                    
                    <thermal-button @click=${()=>this.onSelect(r)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button>
                    
                `)}
            </div>

            <slot name="tour"></slot>
        `}};ro.styles=ne`

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

    `;xp([le({context:ra,subscribe:!0}),v()],ro.prototype,"value",2);ro=xp([H("registry-palette-buttons")],ro);var r1=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,Sp=(r,e,t,i)=>{for(var s=i>1?void 0:i?i1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&r1(e,t,s),s};let io=class extends Es{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return u`

            <div ${ve(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.smooth.setSmooth(!1)}
                >${x(w.pixelated)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.smooth.setSmooth(!0)}
                >${x(w.smooth)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};io.styles=ne`
    
        :host {}

    `;Sp([le({context:Ch,subscribe:!0})],io.prototype,"smooth",2);io=Sp([H("manager-smooth-switch")],io);var s1=Object.defineProperty,n1=Object.getOwnPropertyDescriptor,$p=(r,e,t,i)=>{for(var s=i>1?void 0:i?n1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&s1(e,t,s),s};let so=class extends Es{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}render(){return u`

            <div ${ve(this.tourableElementRef)}>

                <thermal-button
                    variant=${this.smooth?"default":"foreground"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!1)}
                >${x(w.straightlines)}</thermal-button>

                <thermal-button
                    variant=${this.smooth?"foreground":"default"}
                    @click=${()=>this.manager.graphSmooth.setGraphSmooth(!0)}
                >${x(w.smoothlines)}</thermal-button>

            </div>

            <slot name="tour"></slot>
        `}};so.styles=ne`
    
        :host {}

    `;$p([le({context:Ao,subscribe:!0})],so.prototype,"smooth",2);so=$p([H("manager-graph-smooth-switch")],so);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xl extends Ja{}Xl.directiveName="unsafeSVG",Xl.resultType=2;const _p=go(Xl);var a1=Object.defineProperty,o1=Object.getOwnPropertyDescriptor,un=(r,e,t,i)=>{for(var s=i>1?void 0:i?o1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&a1(e,t,s),s};let as=class extends Es{constructor(){super(...arguments),this.tourableElementRef=pe(),this.showhint=!0,this.showpopup=!1}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback(),this.hint=this.value.description,this.manager.tool.addListener(this.UUID+"spying on hints",e=>{this.hint=e.description})}onSelect(e){this.manager.tool.selectTool(e)}render(){return this.manager===void 0?_:u`
                <div class="switchers" ${ve(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([e,t])=>{const i={[e]:!0,button:!0,switch:!0,active:this.value!==void 0?t.key===this.value.key:!1};return u`
                        
                        <button 
                            class=${Kt(i)} 
                            @click=${()=>{this.manager.tool.selectTool(t)}}
                            @mouseenter=${()=>{this.hint=t.name}}
                            @mouseleave=${()=>{this.hint=this.value.description}}
                        >
                            ${_p(t.icon)}

                            ${this.showpopup===!0?u`<div>${x(w[t.name])}</div>`:_}

                        </button>
                        
                    `})}
                </div>

                ${this.showhint===!0?u` <div class="current">
                        <div class="tool-description">${x(w[this.hint])}</div>
                    </div>`:_}

                <slot name="tour"></slot>
        `}};as.styles=ne`

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

    `;un([le({context:ia,subscribe:!0}),v()],as.prototype,"value",2);un([le({context:sa,subscribe:!0}),v()],as.prototype,"tools",2);un([v()],as.prototype,"hint",2);un([d({type:String,reflect:!0,converter:Ne(!1)})],as.prototype,"showhint",2);un([d({reflect:!0,converter:Ne(!1)})],as.prototype,"showpopup",2);as=un([H("group-tool-buttons")],as);var l1=Object.defineProperty,h1=Object.getOwnPropertyDescriptor,Fh=(r,e,t,i)=>{for(var s=i>1?void 0:i?h1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&l1(e,t,s),s};let In=class extends Es{constructor(){super(...arguments),this.tourableElementRef=pe()}getTourableRoot(){return this.tourableElementRef.value}connectedCallback(){super.connectedCallback()}onSelect(r){this.manager.tool.selectTool(r)}render(){return this.manager===void 0?_:u`

            <aside ${ve(this.tourableElementRef)}>
                    ${Object.entries(this.manager.tool.tools).map(([r,e])=>{const t={[r]:!0,button:!0,switch:!0,active:e.key===this.value.key};return u`
                        <div class="item">
                            <button 
                                class=${Kt(t)} 
                                @click=${()=>{this.manager.tool.selectTool(e)}}
                            >
                                ${_p(e.icon)}
                            </button>
                            <div class="tooltip">${x(w[e.name])}</div>
                        </div>
                        

                    `})}

            </aside>

            <slot name="tour"></slot>
        `}};In.styles=ne`

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

    `;Fh([le({context:ia,subscribe:!0}),v()],In.prototype,"value",2);Fh([le({context:sa,subscribe:!0}),v()],In.prototype,"tools",2);In=Fh([H("group-tool-bar")],In);var c1=Object.defineProperty,d1=Object.getOwnPropertyDescriptor,Cp=(r,e,t,i)=>{for(var s=i>1?void 0:i?d1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&c1(e,t,s),s};let no=class extends Ar{constructor(){super(...arguments),this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback();const r=e=>{this.value!==e&&(this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.UUID,r.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.UUID)}handleUserChangeEvent(r){const e=parseFloat(r.target.value);this.registry.opacity.imposeOpacity(e)}render(){return u`
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
        `}};no.styles=ne`

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
    
    `;Cp([le({context:Ph,subscribe:!0})],no.prototype,"value",2);no=Cp([H("registry-opacity-slider")],no);var u1=Object.defineProperty,p1=Object.getOwnPropertyDescriptor,f1=(r,e,t,i)=>{for(var s=i>1?void 0:i?p1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&u1(e,t,s),s};let kd=class extends Ar{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyAuto()}render(){return u`
            <thermal-button ${ve(this.buttonRef)} @click=${this.doAction}>${x(w.automaticrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};kd=f1([H("registry-range-auto-button")],kd);var g1=Object.defineProperty,m1=Object.getOwnPropertyDescriptor,kp=(r,e,t,i)=>{for(var s=i>1?void 0:i?m1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&g1(e,t,s),s};let Kl=class extends Ar{constructor(){super(...arguments),this.buttonRef=pe()}getTourableRoot(){return this.buttonRef.value}doAction(){this.registry.range.applyMinmax()}mouseenter(){this.registry.minmax.value!==void 0&&this.setter&&this.setter({from:this.registry.minmax.value.min,to:this.registry.minmax.value.max})}mouseleave(){this.setter&&this.setter(void 0)}render(){return u`
            <thermal-button 
                ${ve(this.buttonRef)} 
                @click=${this.doAction} 
                @mouseenter="${this.mouseenter}" 
                @mouseleave="${this.mouseleave}"
                @focus="${this.mouseenter}"
                @blur="${this.mouseleave}"
            >${x(w.fullrange)}</thermal-button>
            <slot name="tour"></slot>
        `}};kp([le({context:na,subscribe:!0})],Kl.prototype,"setter",2);Kl=kp([H("registry-range-full-button")],Kl);var v1=Object.defineProperty,y1=Object.getOwnPropertyDescriptor,oa=(r,e,t,i)=>{for(var s=i>1?void 0:i?y1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&v1(e,t,s),s};let Kr=class extends Ar{constructor(){super(...arguments),this.ticksRef=pe(),this.placement="top",this.minmax=void 0,this.ticks=[],this.containerRef=pe()}getTourableRoot(){return this.containerRef.value}connectedCallback(){super.connectedCallback(),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r,this.ticksRef.value&&this.calculateTicks(r,this.ticksRef.value.clientWidth)})}firstUpdated(r){super.firstUpdated(r),this.observer=new ResizeObserver(e=>{const t=e[0];this.calculateTicks(this.minmax,t.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(r,e,t){return r<e?e:r>t?t:r}map(r,e,t,i,s){const n=(r-e)*(s-i)/(t-e)+i;return this.clamp(n,i,s)}calculateTicks(r,e){if(r===void 0)this.ticks=[];else{const t=[0],i=Math.floor(e/Kr.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)t.push(s*n);t.push(100),this.ticks=t.map(n=>this.calculateOneTick(r,n)).filter(n=>n!==void 0)}}calculateOneTick(r,e){if(r!==void 0){const t=this.map(e,0,100,r.min,r.max);return{percentage:e,value:t}}}render(){let r,e;if(this.registry.minmax.value&&this.highlight){const t=this.registry.minmax.value.min,i=this.registry.minmax.value.max-t;r=(this.highlight.from-t)/i*100,e=(this.highlight.to-t)/i*100-r}return u`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement}" ${ve(this.containerRef)}>

                <div class="skeleton"></div>

                <div class="ticks" ${ve(this.ticksRef)}>

                    ${r!==void 0&&e!==void 0?u`<div class="highlight" style="position: absolute; top: 0px; height: 5px; left:${r}%; width: ${e}%; background-color: var(--thermal-foreground)"></div>`:_}

                    ${this.ticks.map(t=>u`
                    <div class="tick" >
                        <div class="tick-value">
                            ${t.value.toFixed(Kr.TICK_FIXED)}
                        </div>
                    </div>
                        `)}

                </div>                

            </div>
            <slot name="tour"></slot>
        
        `}};Kr.TICK_WIDTH=40;Kr.TICK_FIXED=2;Kr.styles=ne`

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


    `;oa([le({context:dp,subscribe:!0})],Kr.prototype,"highlight",2);oa([d({type:String,reflect:!0})],Kr.prototype,"placement",2);oa([v()],Kr.prototype,"minmax",2);oa([v()],Kr.prototype,"ticks",2);Kr=oa([H("registry-ticks-bar")],Kr);var b1=Object.defineProperty,w1=Object.getOwnPropertyDescriptor,la=(r,e,t,i)=>{for(var s=i>1?void 0:i?w1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&b1(e,t,s),s};let Js=class extends Ar{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.registry.opacity.addListener(this.UUID,r=>{this.opacity=r}),this.registry.range.addListener(this.UUID,r=>{this.range=r}),this.registry.minmax.addListener(this.UUID,r=>{this.minmax=r}),this.registry.palette.addListener(this.UUID,r=>{this.palette=r.toString()})}renderRow(r,e){return u`<tr>
            <td>${r}</td>
            <td>${e??"undefined"}</td>
        </tr>`}getTableData(){const r={};return r.ID=this.registry.id,r.OPACITY=this.registry.opacity.value.toString(),r["GROUP COUNT"]=this.registry.groups.value.length.toString(),r.PALETTE=this.palette,r.RANGE=this.range===void 0?"undefined":Object.values(this.range).join(" - "),r.MINMAX=this.minmax===void 0?"undefined":Object.values(this.minmax).join(" - "),r}render(){return u`<div>
        
            <h2>Registry log: ${this.registry.id}</h2>

            <div>
                <table>

                ${Object.entries(this.getTableData()).map(([r,e])=>this.renderRow(r,e))}
                
                </table>
            </div>
        
        </div>`}};la([v()],Js.prototype,"minmax",2);la([v()],Js.prototype,"range",2);la([v()],Js.prototype,"opacity",2);la([v()],Js.prototype,"palette",2);Js=la([H("registry-log")],Js);(()=>{var r=Object.defineProperty,e=Math.pow,t=(m,b,U)=>b in m?r(m,b,{enumerable:!0,configurable:!0,writable:!0,value:U}):m[b]=U,i=(m,b,U)=>(t(m,typeof b!="symbol"?b+"":b,U),U),s=(m,b)=>` ${b&&b.length>0?b.map(U=>`<link rel="stylesheet" href="${U}" />`).join(""):""} <style> ${m} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",o="pointers-min-distance",l="pointers-max-distance",h="range-dragging",f="data",p="min",g="max",S="step",$="round",O="type",P="theme",Y="rtl",A="btt",D="disabled",X="keyboard-disabled",W="mousewheel-disabled",se="slider-width",k="slider-height",L="slider-radius",T="slider-bg",M="slider-bg-hover",F="slider-bg-fill",I="pointer-width",z="pointer-height",R="pointer-radius",K="pointer-bg",he="pointer-bg-hover",C="pointer-bg-focus",B="pointer-shadow",fe="pointer-shadow-hover",ae="pointer-shadow-focus",Ee="pointer-border",Ye="pointer-border-hover",it="pointer-border-focus",lt="animate-onclick",ce="css-links",ge="vertical",Ae="horizontal",Ue=(m,b,U,E,oe)=>{let Se=b-m;return Se===0?U:(E-U)*(oe-m)/Se+U},st=m=>!isNaN(parseFloat(m))&&isFinite(m),We=(m,b)=>st(m)?Number(m):b,Yi=(m,b)=>b===0?0:Math.round(m/b)*b,us=(m,b=1/0)=>{if(b===1/0)return m;let U=e(10,b);return Math.round(m*U)/U},nt=m=>m==null?!1:typeof m=="boolean"?m:m.trim().toLowerCase()==="true",xr=(m,b)=>{m.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:b}}))},_i=(m,b)=>{m.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:b}}))},Ko=(m,b)=>{m.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:b}}))},Zo=(m,b)=>{m.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:b}}))},Jo=(m,b)=>{if(!b||b.length<=0)return;let U=b.map(oe=>st(oe)?We(oe,oe):oe),E={values:U||[]};E.value=U[0],E.value0=U[0],E.value1=U[0];for(let oe=1;oe<U.length;oe++)E[`value${oe+1}`]=U[oe];m.dispatchEvent(new CustomEvent("change",{detail:E}))},q=(m,b,U)=>{let E=0,oe,Se,Te,de,ue=!1,ze=(ke,ut,Mt,Et,xt,St)=>{let lr=E;Mt!==void 0&&ke>Mt&&(ke=Mt),ut!==void 0&&ke<ut&&(ke=ut),E=ke;let hr=E;return(Et===ge&&St||Et===Ae&&xt)&&(hr=100-hr),Et===ge?b.style.top=`${hr}%`:b.style.left=`${hr}%`,lr!==E},He=ke=>ke===b||b.contains(ke),be=(ke,ut,Mt,Et)=>{oe=ke,Se=ut,Te=Mt,de=Et},et=ke=>{ue=ke,b.classList.toggle("disabled",ue),ue?b.setAttribute("aria-disabled","true"):b.hasAttribute("aria-disabled")&&b.removeAttribute("aria-disabled")},Mr=(ke,ut)=>{ut==null?b.removeAttribute(ke):b.setAttribute(ke,ut)},Xt=ke=>b.getAttribute(ke),Ce=ke=>{if(!ue){switch(ke.key){case"ArrowLeft":{ke.preventDefault(),typeof oe=="function"&&oe(U);break}case"ArrowRight":{ke.preventDefault(),typeof Se=="function"&&Se(U);break}case"ArrowUp":{ke.preventDefault(),typeof Te=="function"&&Te(U);break}case"ArrowDown":{ke.preventDefault(),typeof de=="function"&&de(U);break}}Zo(m,ke)}},Fe=()=>{ue||xr(m,b)};return b.className=`pointer pointer-${U}`,b.addEventListener("keydown",Ce),b.addEventListener("click",Fe),{$pointer:b,get percent(){return E},get disabled(){return ue},set disabled(ke){et(ke)},updatePosition:ze,isClicked:He,setCallbacks:be,setAttr:Mr,getAttr:Xt,destroy:()=>{b.removeEventListener("keydown",Ce),b.removeEventListener("click",Fe),b.remove()}}},te=m=>{if(m==null)return;if(Array.isArray(m))return m;if(m.trim()==="")return;let b=m.split(","),U=[],E=!0;for(let oe=0;oe<b.length;oe++){let Se=b[oe].trim();Se!==""&&(U.push(Se),st(Se)||(E=!1))}return E?U.map(oe=>Number(oe)):U},ee=(m,b)=>b?b.findIndex(U=>U===m||U.toString().trim()===m.toString().trim()):-1,Le=m=>({updatePosition:(b,U,E,oe)=>{if(U.length<=0)return;let Se=U.length===1,Te=U[0],de=U[U.length-1];b===ge?(m.style.removeProperty("width"),m.style.removeProperty("right"),m.style.removeProperty("left"),Se?m.style.height=`${Te}%`:m.style.height=`${Math.abs(Te-de)}%`,oe?(m.style.bottom="0%",Se?m.style.top="auto":m.style.top=`${Math.min(100-de,100-Te)}%`):(m.style.bottom="auto",Se?m.style.top="0%":m.style.top=`${Math.min(Te,de)}%`)):(m.style.removeProperty("height"),m.style.removeProperty("top"),m.style.removeProperty("bottom"),Se?m.style.width=`${Te}%`:m.style.width=`${Math.abs(Te-de)}%`,E?(m.style.right="0%",Se?m.style.left="auto":m.style.left=`${Math.min(100-de,100-Te)}%`):(m.style.right="auto",Se?m.style.left="0%":m.style.left=`${Math.min(Te,de)}%`))}}),we="--animate-onclick",Ze="--width",N="--height",ct="--panel-bg-border-radius",qe="--panel-bg",kt="--panel-bg-hover",Tt="--panel-bg-fill",re="--pointer-width",J="--pointer-height",G="--pointer-border-radius",me="--pointer-bg",Pe="--pointer-bg-hover",Ve="--pointer-bg-focus",Wt="--pointer-shadow",Yt="--pointer-shadow-hover",ar="--pointer-shadow-focus",or="--pointer-border",ni="--pointer-border-hover",xe="--pointer-border-focus",De=(m,b,U)=>{let E=new Map;for(let oe of m.attributes){let Se=oe.nodeName.trim().toLowerCase();if(!b.test(Se))continue;let Te=Se.replace(/\D/g,"").trim(),de=Te===""||Te==="0"||Te==="1"?0:We(Te,0)-1,ue=U&&typeof U=="function"?U(oe.value):oe.value;E.set(de,ue)}return E},Z=m=>{if(!m)return null;let b=m.getAttribute(ce);if(!b)return null;let U=b.split(";"),E=[];for(let oe of U)oe.trim()!==""&&E.push(oe.trim());return E},_e=[[Ze,se,"sliderWidth",null],[N,k,"sliderHeight",null],[ct,L,"sliderRadius",null],[qe,T,"sliderBg",null],[kt,M,"sliderBgHover",null],[Tt,F,"sliderBgFill",null],[re,I,"pointer#Width",/^pointer([0-9]*)-width$/],[J,z,"pointer#Height",/^pointer([0-9]*)-height$/],[G,R,"pointer#Radius",/^pointer([0-9]*)-radius$/],[me,K,"pointer#Bg",/^pointer([0-9]*)-bg$/],[Pe,he,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ve,C,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Wt,B,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Yt,fe,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ar,ae,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[or,Ee,"pointer#Border",/^pointer([0-9]*)-border$/],[ni,Ye,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[xe,it,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Re=(m,b,U)=>{let E=null,oe=[],Se=new Map,Te=(Ce,Fe=b)=>{let ke=[...Fe.classList];for(let ut of ke)ut.startsWith(Ce)&&b.classList.remove(ut)},de=()=>{Te("shape");let Ce=b.querySelectorAll(".pointer");for(let Fe of Ce)Te("shape",Fe)},ue=Ce=>{E=Ce,Te("theme-"),typeof Ce=="string"&&b.classList.add(`theme-${Ce}`)},ze=()=>{if(de(),!(oe.length<=0)){b.classList.add("shape",`shape-${oe[0]}`);for(let Ce=1;Ce<oe.length;Ce++){let Fe=oe[Ce];if(!Fe)continue;let ke=b.querySelector(`.pointer-${Ce}`);!ke||ke.classList.add("shape",`shape-${Fe}`)}}},He=(Ce,Fe)=>{oe[Ce]=Fe,ze()},be=()=>{de();let Ce=De(m,/^pointer([0-9]*)-shape$/);if(!(Ce.size<=0)){for(let Fe of Ce){let ke=Fe[0];oe[ke]=Fe[1]}ze()}},et=(Ce,Fe)=>`${Ce}-${Fe}`,Mr=(Ce,Fe,ke)=>{let ut=U[ke];if(!ut)return;let Mt=ke===0?b:ut.$pointer;if(Fe==null){Se.has(et(Ce,ke))&&Se.delete(et(Ce,ke)),Mt.style.removeProperty(Ce);return}Se.set(et(Ce,ke),Fe),Mt.style.setProperty(Ce,Fe)},Xt=(Ce,Fe)=>Se.get(et(Ce,Fe));return(()=>{for(let Ce of _e){let[Fe,ke,ut,Mt]=Ce;if(Mt){let xt=De(m,Mt);for(let St of xt){let lr=St[0],hr=St[1];Mr(Fe,hr,lr)}}else{let xt=m.getAttribute(ke);Mr(Fe,xt,0)}let Et=[];if(ut.indexOf("#")===-1)Et.push([ut,0]);else{Et.push([ut.replace("#",""),0]),Et.push([ut.replace("#","0"),0]),Et.push([ut.replace("#","1"),0]);for(let xt=1;xt<U.length;xt++)Et.push([ut.replace("#",(xt+1).toString()),xt])}for(let xt of Et)try{let St=xt[0],lr=xt[1];Object.prototype.hasOwnProperty.call(m,St)||Object.defineProperty(m,St,{get(){return Xt(Fe,lr)},set:hr=>{Mr(Fe,hr,lr)}})}catch(St){console.error(St)}}ue(m.getAttribute(P)),be()})(),{setStyle:Mr,getStyle:Xt,get theme(){return E},set theme(Ce){ue(Ce)},get pointerShapes(){return oe},setPointerShape:He}},Me="animate-on-click",Qe="range-dragging",Ie=(m,b,U,E)=>{let oe=[],Se=He=>{for(let be of oe)be.update&&typeof be.update=="function"&&be.update(He)},Te=()=>{for(let He of oe)He.destroy&&typeof He.destroy=="function"&&He.destroy()},de=(He,be)=>{for(let et of oe)et.onAttrChange&&typeof et.onAttrChange=="function"&&et.onAttrChange(He,be)},ue=He=>{if(He.gettersAndSetters){for(let be of He.gettersAndSetters)if(!(!be.name||!be.attributes))try{Object.prototype.hasOwnProperty.call(m,be.name)||Object.defineProperty(m,be.name,be.attributes)}catch(et){console.error("defineSettersGetters error:",et)}}},ze=He=>{var be;if(!He.css)return;let et=(be=m.shadowRoot)==null?void 0:be.querySelector("style");!et||(et.innerHTML+=He.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let He of window.tcRangeSliderPlugins){let be=He();oe.push(be),be.init&&typeof be.init=="function"&&(be.init(m,b,U,E),ue(be),ze(be))}},update:Se,onAttrChange:de,destroy:Te}},Ht=10,bt=20,qt=(m,b)=>{let U=new Map,E=/^value([0-9]*)$/;for(let de of m.attributes){let ue=de.nodeName.trim().toLowerCase();if(!E.test(ue))continue;let ze=ue.replace("value","").trim(),He=ze===""||ze==="0"||ze==="1"?0:We(ze,0)-1,be=st(de.value)?We(de.value,0):de.value;U.set(He,be)}let oe=Math.max(...Array.from(U.keys())),Se=[];Se.push([q(m,b,0),U.get(0)]);let Te=b;for(let de=1;de<=oe;de++){let ue=b.cloneNode(!0);Te.after(ue),Te=ue,Se.push([q(m,ue,de),U.get(de)])}return Se},sc=(m,b,U,E,oe,Se,Te)=>{try{Object.defineProperty(m,E,{configurable:!0,get(){if(!b)return;let de=b.pointers[U];if(!de)return;let ue=b.getTextValue(de.percent);return st(ue)?We(ue,ue):ue},set:de=>{b.pointers[U]?b==null||b.setValue(de,U):b==null||b.addPointer(de)}}),Object.defineProperty(m,oe,{configurable:!0,get(){var de,ue;return(ue=(de=b==null?void 0:b.pointers[U])==null?void 0:de.getAttr("aria-label"))!=null?ue:void 0},set:de=>{!b||b.setAriaLabel(U,de)}}),Object.defineProperty(m,Se,{configurable:!0,get(){var de,ue;return(ue=(de=b==null?void 0:b.styles)==null?void 0:de.pointerShapes[U])!=null?ue:null},set:de=>{!b||!b.styles||b.styles.setPointerShape(U,de)}}),Object.defineProperty(m,Te,{configurable:!0,get(){var de;return(de=b==null?void 0:b.pointers[U].disabled)!=null?de:!1},set:de=>{if(!b)return;let ue=b==null?void 0:b.pointers[U];!ue||(ue.disabled=de)}})}catch(de){console.error(de)}},Up=(m,b)=>{let U=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let E=2;E<Ht;E++)U.push([`value${E}`,`ariaLabel${E}`,`pointer${E}Shape`,`pointer${E}Disabled`,E-1]);for(let E of U)sc(m,b,E[4],E[0],E[1],E[2],E[3])},nc=(m,b,U)=>{var E;let oe=(E=U.shadowRoot)==null?void 0:E.querySelector(".container");if(oe)for(let Se of m)b?oe.prepend(Se.$pointer):oe.append(Se.$pointer)},zp=(m,b)=>{if(!(!b||m.length<=1)){for(let U of m)U.$pointer.style.zIndex=bt.toString();b.$pointer.style.zIndex=(bt*2).toString()}},Qo=0,gn=100,Ts=2,ac="0.3s",Fp=(m,b,U)=>{let E=U.map(y=>y[0]),oe=null,Se=null,Te=null,de=null,ue=Qo,ze=gn,He,be,et=Ae,Mr=Ts,Xt=!1,Ce=!1,Fe=!1,ke=0,ut=1/0,Mt=!1,Et,xt,St=!1,lr=!1,hr=!1,qi=ac,oc=[],lc=y=>{St||(y.preventDefault&&y.preventDefault(),ps(y),window.addEventListener("mousemove",ps),window.addEventListener("mouseup",fa),_i(m,y))},fa=y=>{St||(Et=void 0,xt=void 0,window.removeEventListener("mousemove",ps),window.removeEventListener("mouseup",fa),qi&&b.classList.add(Me),Ko(m,y))},Wp=(y,j)=>{if(E.length<=0)return;if(E.length===1)return E[0].isClicked(y)&&qi&&b.classList.remove(Me),E[0];let ye=Bp(y);if(Mt){let Je=j,Br=ma(Je);Br!==void 0&&(Je=Yi(Je,Br)),ye?(Et=Je,xt=0,qi&&b.classList.remove(Me)):Et!==void 0&&(xt=Je-Et,Et=Je)}if(!Hp(y)&&!ye){for(let Je of E)if(!(!Je.isClicked(y)||Je.disabled))return qi&&b.classList.remove(Me),Je;for(let Je of E)if(oe===Je)return Je}let at=1/0,$t=null;for(let Je of E){if(Je.disabled)continue;let Br=Math.abs(j-Je.percent);Br<at&&(at=Br,$t=Je)}return $t},hc=()=>E.findIndex(y=>oe===y&&!y.disabled),ps=y=>{let j;if(et===ge){let{height:at,top:$t}=b.getBoundingClientRect(),Je=y.type.indexOf("mouse")!==-1?y.clientY:y.touches[0].clientY;j=Math.min(Math.max(0,Je-$t),at)*100/at}else{let{width:at,left:$t}=b.getBoundingClientRect(),Je=y.type.indexOf("mouse")!==-1?y.clientX:y.touches[0].clientX;j=Math.min(Math.max(0,Je-$t),at)*100/at}if((Xt||Ce)&&(j=100-j),oe=Wp(y.target,j),oe&&zp(E,oe),Mt&&E.length>1&&xt!==void 0){let at=E[0],$t=E[E.length-1],Je=at.percent+xt<0,Br=$t.percent+xt>100;if(Je||Br)return;for(let _a=0;_a<E.length;_a++)cr(_a,E[_a].percent+xt);return}let ye=hc();ye!==-1&&(cr(ye,j),oe==null||oe.$pointer.focus())},ga=y=>{if(St||document.activeElement!==m||oe!=null&&oe.disabled)return;y.stopPropagation(),y.preventDefault();let j=y.deltaY<0,ye=Xt||Ce,at=j?!ye:ye,$t=hc();$t!==-1&&(at?mn($t,E[$t].percent):vn($t,E[$t].percent))},cc=y=>{St||lr||(et===ge?Ce?cr(y,100):cr(y,0):Xt?vn(y,E[y].percent):mn(y,E[y].percent))},dc=y=>{St||lr||(et===ge?Ce?cr(y,0):cr(y,100):Xt?mn(y,E[y].percent):vn(y,E[y].percent))},uc=y=>{St||lr||(et===ge?Ce?vn(y,E[y].percent):mn(y,E[y].percent):Xt?cr(y,100):cr(y,0))},pc=y=>{St||lr||(et===ge?Ce?mn(y,E[y].percent):vn(y,E[y].percent):Xt?cr(y,0):cr(y,100))},Hp=y=>y.classList.contains("panel"),Bp=y=>y.classList.contains("panel-fill"),mn=(y,j)=>{if(j===void 0)return;let ye=ma(j);ye==null&&(ye=1),j-=ye,j<0&&(j=0),cr(y,j)},vn=(y,j)=>{if(j===void 0)return;let ye=ma(j);ye==null&&(ye=1),j+=ye,j>100&&(j=100),cr(y,j)},fs=()=>{!de||de.update({percents:fc(),values:gc(),$pointers:mc(),min:vc(),max:yc(),data:rl(),step:tl(),round:sl(),type:il(),textMin:va(),textMax:ya(),rightToLeft:ol(),bottomToTop:ll(),pointersOverlap:ul(),pointersMinDistance:nl(),pointersMaxDistance:al(),rangeDragging:pl(),disabled:hl(),keyboardDisabled:cl(),mousewheelDisabled:dl()})},Gp=()=>{fs()},Vp=y=>{if(!(Fe||E.length<=1||ze===ue))if(y===0){let j=ut*100/(ze-ue);return Math.max(0,E[y+1].percent-j)}else{let j=ke*100/(ze-ue);return Math.min(E[y-1].percent+j,100)}},Yp=y=>{if(!(Fe||E.length<=1||ze===ue))if(y===E.length-1){let j=ut*100/(ze-ue);return Math.min(E[y-1].percent+j,100)}else{let j=ke*100/(ze-ue);return Math.max(0,E[y+1].percent-j)}},ma=y=>{let j;if(typeof He=="function"){let ye=Ue(0,100,ue,ze,y);j=He(ye,y)}else j=He;if(st(j)){let ye=ze-ue;return j=ye===0?0:j*100/ye,j}},Ms=y=>{if(y===void 0)return;let j=Ue(0,100,ue,ze,y);return be!==void 0?be[Math.round(j)]:us(j,Mr)},va=()=>be!==void 0?be[ue]:ue,ya=()=>be!==void 0?be[ze]:ze,tl=()=>He,qp=y=>{var j;return y<=0||Fe?va():(j=Ms(E[y-1].percent))!=null?j:""},Xp=y=>{var j;return E.length<=1||y>=E.length-1||Fe?ya():(j=Ms(E[y+1].percent))!=null?j:""},fc=()=>E.map(y=>y.percent),gc=()=>E.map(y=>Ms(y.percent)),mc=()=>E.map(y=>y.$pointer),vc=()=>ue,yc=()=>ze,rl=()=>be,il=()=>et,sl=()=>Mr,nl=()=>ke,al=()=>ut,Kp=y=>oc[y],ol=()=>Xt,ll=()=>Ce,hl=()=>St,cl=()=>lr,dl=()=>hr,ul=()=>Fe,pl=()=>Mt,cr=(y,j)=>{if(j===void 0)return;let ye=ma(j);ye!==void 0&&(j=Yi(j,ye));let at=E[y];if(!at)return;let $t=at.updatePosition(j,Vp(y),Yp(y),et,Xt,Ce);Se==null||Se.updatePosition(et,E.map(Je=>Je.percent),Xt,Ce),fs();for(let Je of E){let Br=Ms(Je.percent);Br!==void 0&&(Je.setAttr("aria-valuenow",Br.toString()),Je.setAttr("aria-valuetext",Br.toString()))}Jp(),$t&&Jo(m,E.map(Je=>Ms(Je.percent)))},ai=()=>{for(let y=0;y<E.length;y++)cr(y,E[y].percent)},Zp=(y,j)=>{ue=be!==void 0?0:We(y,Qo),ze=be!==void 0?be.length-1:We(j,gn),ba(ue),wa(ze)},Jp=()=>{var y,j;for(let ye=0;ye<E.length;ye++){let at=E[ye];at.setAttr("aria-valuemin",((y=qp(ye))!=null?y:"").toString()),at.setAttr("aria-valuemax",((j=Xp(ye))!=null?j:"").toString())}},ba=y=>{ue=We(y,Qo),ue>ze&&(ze=ue+gn),ai()},wa=y=>{ze=We(y,gn),ze<ue&&(ze=ue+gn),ai()},bc=y=>{Fe=!0;for(let j=0;j<y.length;j++)xa(y[j],j);Fe=!1;for(let j=0;j<y.length;j++)xa(y[j],j)},xa=(y,j)=>{let ye;be!==void 0?(ye=y==null?0:ee(y,be),ye===-1&&(ye=0)):(ye=We(y,ue),ye<ue&&(ye=ue),ye>ze&&(ye=ze));let at=Ue(ue,ze,0,100,ye);cr(j,at)},Sa=y=>{if(y==null){He=void 0;return}if(typeof y=="function"){He=y,ai();return}if(st(y)){He=We(y,1);let j=Math.abs(ze-ue);He>j&&(He=void 0),ai();return}He=void 0},fl=y=>{Fe=y,ai()},gl=y=>{(!st(y)||y<0)&&(y=0),ke=y},ml=y=>{(!st(y)||y<0)&&(y=1/0),ut=y},vl=y=>{St=y,b.classList.toggle("disabled",St),St?b.setAttribute("aria-disabled","true"):b.hasAttribute("aria-disabled")&&b.removeAttribute("aria-disabled")},wc=y=>{lr=y},xc=y=>{hr=y,hr?document.removeEventListener("wheel",ga):document.addEventListener("wheel",ga,{passive:!1})},yl=y=>{if(y==null){be=void 0;return}if(be=te(y),be===void 0||be.length<=0){be=void 0;return}ba(0),wa(be.length-1),He===void 0&&Sa(1)},bl=y=>{var j;typeof y=="string"?et=y.trim().toLowerCase()===ge?ge:Ae:et=Ae;let ye=(j=m.shadowRoot)==null?void 0:j.querySelector(".range-slider-box");if(!ye)return;ye.className=`range-slider-box type-${et}`,ai();let at=et===ge?"vertical":"horizontal";for(let $t of E)$t.setAttr("aria-orientation",at)},wl=y=>{Xt=y,E.length>1&&nc(E,Xt,m),ai(),fs()},xl=y=>{Ce=y,E.length>1&&nc(E,Ce,m),ai(),fs()},Sl=y=>{Mr=We(y,Ts),Mr<0&&(Mr=Ts),fs()},Sc=y=>{y==null||y.toString().trim().toLowerCase()==="false"?(qi=void 0,b.style.removeProperty(we),b.classList.remove(Me)):(qi=y.toString(),b.style.setProperty(we,qi),b.classList.add(Me))},$c=(y,j)=>{let ye=E[y];!ye||(ye.setAttr("aria-label",j),oc[y]=j)},$a=y=>{if(Et=void 0,E.length<=1){Mt=!1,b.classList.remove(Qe);return}Mt=y,b.classList.toggle(Qe,Mt)},Qp=()=>{vl(nt(m.getAttribute(D))),lr=nt(m.getAttribute(X)),hr=nt(m.getAttribute(W));let y=De(m,/^pointer([0-9]*)-disabled$/,j=>nt(j));for(let j of y){let ye=j[0];!E[ye]||(E[ye].disabled=j[1])}},ef=()=>{let y=De(m,/^aria-label([0-9]*)$/);for(let j of y){let ye=j[0];$c(ye,j[1])}},tf=y=>{let j=E.length,ye=E[j-1].$pointer,at=ye.cloneNode(!0);ye.after(at);let $t=q(m,at,j);return $t.setCallbacks(cc,dc,uc,pc),E.push($t),xa(y,j),ai(),fs(),j},rf=()=>{let y=E.length,j=E[y-1];return j?(j.destroy(),E.pop(),E.length<=1&&$a(!1),ai(),fs(),y-1):-1};return(()=>{var y,j;for(let at of E)at.setCallbacks(cc,dc,uc,pc);let ye=(y=m.shadowRoot)==null?void 0:y.querySelector(".panel-fill");ye&&(Se=Le(ye)),bl(m.getAttribute(O)),wl(nt(m.getAttribute(Y))),xl(nt(m.getAttribute(A))),Zp(m.getAttribute(p),m.getAttribute(g)),Sa(m.getAttribute(S)),yl(m.getAttribute(f)),bc(U.map(at=>at[1])),fl(nt(m.getAttribute(a))),gl(We(m.getAttribute(o),0)),ml(We(m.getAttribute(l),1/0)),$a(nt(m.getAttribute(h))),Sl(We(m.getAttribute($),Ts)),Qp(),ef(),Te=Re(m,b,E),Sc((j=m.getAttribute(lt))!=null?j:ac),b.addEventListener("mousedown",lc),b.addEventListener("mouseup",fa),b.addEventListener("touchmove",ps),b.addEventListener("touchstart",ps),hr||document.addEventListener("wheel",ga,{passive:!1}),de=Ie(m,Gp,{setValues:bc,setMin:ba,setMax:wa,setStep:Sa,setPointersOverlap:fl,setPointersMinDistance:gl,setPointersMaxDistance:ml,setDisabled:vl,setType:bl,setRightToLeft:wl,setBottomToTop:xl,setRound:Sl,setKeyboardDisabled:wc,setMousewheelDisabled:xc,setRangeDragging:$a,setData:yl},{getPercents:fc,getValues:gc,getPointerElements:mc,getMin:vc,getMax:yc,getStep:tl,getData:rl,getType:il,getRound:sl,getTextMin:va,getTextMax:ya,isRightToLeft:ol,isBottomToTop:ll,isDisabled:hl,isKeyboardDisabled:cl,isMousewheelDisabled:dl,isPointersOverlap:ul,isRangeDraggingEnabled:pl,getPointersMinDistance:nl,getPointersMaxDistance:al}),de.init()})(),{get pointers(){return E},get styles(){return Te},get pluginsManager(){return de},get min(){return va()},get max(){return ya()},get step(){return tl()},get pointersOverlap(){return ul()},set pointersOverlap(y){fl(y)},get pointersMinDistance(){return nl()},set pointersMinDistance(y){gl(y)},get pointersMaxDistance(){return al()},set pointersMaxDistance(y){ml(y)},get disabled(){return hl()},set disabled(y){vl(y)},get data(){return rl()},get type(){return il()},set type(y){bl(y)},get rightToLeft(){return ol()},set rightToLeft(y){wl(y)},get bottomToTop(){return ll()},set bottomToTop(y){xl(y)},get round(){return sl()},set round(y){Sl(y)},get animateOnClick(){return qi},set animateOnClick(y){Sc(y)},get keyboardDisabled(){return cl()},set keyboardDisabled(y){wc(y)},get mousewheelDisabled(){return dl()},set mousewheelDisabled(y){xc(y)},get rangeDragging(){return pl()},set rangeDragging(y){$a(y)},setMin:ba,setMax:wa,setValue:xa,setStep:Sa,setData:yl,getTextValue:Ms,setAriaLabel:$c,getAriaLabel:Kp,addPointer:tf,removePointer:rf,destroy:()=>{b.removeEventListener("mousedown",lc),b.removeEventListener("mouseup",fa),b.removeEventListener("touchmove",ps),b.removeEventListener("touchstart",ps),document.removeEventListener("wheel",ga);for(let y of E)y.destroy();de==null||de.destroy()}}},jp=(m,b,U)=>{let E=_e.find(([de,ue,ze,He])=>ue.replace("#","")===b.replace(/\d+/g,""));if(E&&m.styles){let[de,ue,ze,He]=E,be=b.replace(/\D/g,"").trim(),et=be===""||be==="0"||be==="1"?0:We(be,0)-1;m.styles.setStyle(de,U,et);return}switch(m&&m.pluginsManager&&m.pluginsManager.onAttrChange(b,U),b){case p:{m.setMin(U);break}case g:{m.setMax(U);break}case S:{m.setStep(U);break}case a:{m.pointersOverlap=nt(U);break}case o:{m.pointersMinDistance=We(U,0);break}case h:{m.rangeDragging=nt(U);break}case l:{m.pointersMaxDistance=We(U,1/0);break}case D:{m.disabled=nt(U);break}case X:{m.keyboardDisabled=nt(U);break}case W:{m.mousewheelDisabled=nt(U);break}case f:{m.setData(U);break}case O:{m.type=U;break}case Y:{m.rightToLeft=nt(U);break}case A:{m.bottomToTop=nt(U);break}case $:{m.round=We(U,Ts);break}case P:{m.styles&&(m.styles.theme=U);break}case lt:{m.animateOnClick=U;break}}let oe=null;if(/^value([0-9]*)$/.test(b)&&(oe="value"),/^pointer([0-9]*)-disabled$/.test(b)&&(oe="pointer-disabled"),/^aria-label([0-9]*)$/.test(b)&&(oe="aria-label"),/^pointer([0-9]*)-shape$/.test(b)&&(oe="pointer-shape"),!oe)return;let Se=b.replace(/\D/g,"").trim(),Te=Se===""||Se==="0"||Se==="1"?0:We(Se,0)-1;switch(oe){case"value":{m.setValue(U,Te);break}case"pointer-disabled":{let de=m==null?void 0:m.pointers[Te];if(!de)return;de.disabled=nt(U);break}case"aria-label":{m.setAriaLabel(Te,U);break}case"pointer-shape":{m.styles&&m.styles.setPointerShape(Te,U);break}}},Np=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(m){this.slider&&this.slider.setStep(m)}get step(){var m;return(m=this.slider)==null?void 0:m.step}set disabled(m){this.slider&&(this.slider.disabled=m)}get disabled(){var m,b;return(b=(m=this.slider)==null?void 0:m.disabled)!=null?b:!1}set data(m){var b;(b=this.slider)==null||b.setData(m)}get data(){var m;return(m=this.slider)==null?void 0:m.data}set min(m){var b;(b=this.slider)==null||b.setMin(m)}get min(){var m;return(m=this.slider)==null?void 0:m.min}set max(m){var b;(b=this.slider)==null||b.setMax(m)}get max(){var m;return(m=this.slider)==null?void 0:m.max}set round(m){!this.slider||(this.slider.round=m)}get round(){var m,b;return(b=(m=this.slider)==null?void 0:m.round)!=null?b:Ts}set type(m){!this.slider||(this.slider.type=m??Ae)}get type(){var m;return((m=this.slider)==null?void 0:m.type)||Ae}set pointersOverlap(m){!this.slider||(this.slider.pointersOverlap=m)}get pointersOverlap(){var m,b;return(b=(m=this.slider)==null?void 0:m.pointersOverlap)!=null?b:!1}set pointersMinDistance(m){!this.slider||(this.slider.pointersMinDistance=m)}get pointersMinDistance(){var m,b;return(b=(m=this.slider)==null?void 0:m.pointersMinDistance)!=null?b:0}set pointersMaxDistance(m){!this.slider||(this.slider.pointersMaxDistance=m)}get pointersMaxDistance(){var m,b;return(b=(m=this.slider)==null?void 0:m.pointersMaxDistance)!=null?b:1/0}set theme(m){!this.slider||!this.slider.styles||(this.slider.styles.theme=m)}get theme(){var m,b,U;return(U=(b=(m=this.slider)==null?void 0:m.styles)==null?void 0:b.theme)!=null?U:null}set rtl(m){!this.slider||(this.slider.rightToLeft=m)}get rtl(){var m,b;return(b=(m=this.slider)==null?void 0:m.rightToLeft)!=null?b:!1}set btt(m){!this.slider||(this.slider.bottomToTop=m)}get btt(){var m,b;return(b=(m=this.slider)==null?void 0:m.bottomToTop)!=null?b:!1}set keyboardDisabled(m){!this.slider||(this.slider.keyboardDisabled=m)}get keyboardDisabled(){var m,b;return(b=(m=this.slider)==null?void 0:m.keyboardDisabled)!=null?b:!1}set mousewheelDisabled(m){!this.slider||(this.slider.mousewheelDisabled=m)}get mousewheelDisabled(){var m,b;return(b=(m=this.slider)==null?void 0:m.mousewheelDisabled)!=null?b:!1}set animateOnClick(m){!this.slider||(this.slider.animateOnClick=m)}get animateOnClick(){var m;return(m=this.slider)==null?void 0:m.animateOnClick}get rangeDragging(){var m,b;return(b=(m=this.slider)==null?void 0:m.rangeDragging)!=null?b:!1}set rangeDragging(m){this.slider&&(this.slider.rangeDragging=nt(m))}get externalCSSList(){return this._externalCSSList}addPointer(m){var b,U;if(!this.slider)return;let E=(U=(b=this.slider)==null?void 0:b.addPointer(m))!=null?U:0;sc(this,this.slider,E,`value${E+1}`,`ariaLabel${E+1}`,`pointerShape${E+1}`,`pointer${E+1}Disabled`)}removePointer(){var m;!this.slider||(m=this.slider)==null||m.removePointer()}addCSS(m){if(!this.shadowRoot)return;let b=document.createElement("style");b.textContent=m,this.shadowRoot.appendChild(b)}connectedCallback(){var m,b;if(!this.shadowRoot)return;this._externalCSSList=Z(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let U=(m=this.shadowRoot)==null?void 0:m.querySelector(".pointer");if(!U)return;let E=(b=this.shadowRoot)==null?void 0:b.getElementById("range-slider");if(!E)return;let oe=qt(this,U);this.slider=Fp(this,E,oe),Up(this,this.slider),this._observer=new MutationObserver(Se=>{Se.forEach(Te=>{var de;if(!this.slider||Te.type!=="attributes")return;let ue=Te.attributeName;!ue||jp(this.slider,ue,(de=this.getAttribute(ue))!=null?de:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},el=Np;window.tcRangeSlider=el,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",el),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends el{})})();const x1=r=>!isNaN(parseFloat(r))&&isFinite(r),Ci=(r,e)=>x1(r)?Number(r):e,Rl=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];const Ea=40,Da=35,La=30,Pd="#475569",Od="#fff",Ad=20,S1=()=>{let r=null,e=null,t=!1,i=Ea,s=Da,n=La,a=Pd,o=Od,l="",h="",f,p=[],g=null,S=null;const $=()=>{g==null||g.classList.toggle("is-after",i<=0)},O=()=>{var B;const C=(B=r==null?void 0:r.shadowRoot)==null?void 0:B.querySelector("#range-slider");g=document.createElement("div"),g.classList.add("tooltips"),C.prepend(g),$()},P=C=>{const B=document.createElement("div");return B.style.zIndex=Ad.toString(),B.className=C,B},Y=(C,B,fe,ae,Ee)=>{C&&(B==="vertical"?(C.style.left=`${-i}px`,C.style.top=ae??"0"):(C.style.left=fe??"0",C.style.top=`${-i}px`),C.style.width=`${s}px`,C.style.height=`${n}px`,C.style.background=a,C.style.color=o,C.style.zIndex=Ee.toString())},A=C=>{let B=C;return typeof f=="function"&&(B=f(C)),h==="prefix"?`${l}${B}`:`${B}${l}`},D=()=>{const C=(e==null?void 0:e.getValues())??[],B=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";if(C)for(let ae=0;ae<C.length;ae++){const Ee=p[ae];if(!Ee)continue;const Ye=(C[ae]??"").toString();Ee.textContent=A(Ye),Y(Ee,fe,B[ae].style.left,B[ae].style.top,B[ae].style.zIndex)}},X=()=>{const C=(e==null?void 0:e.getValues())??[];if(C){for(let B=0;B<C.length;B++){const fe=P(`tooltip tooltip-${B+1}`);fe.style.position="absolute",p.push(fe),g==null||g.prepend(fe)}D()}},W=()=>{r&&(S=new ResizeObserver(C=>{for(const B of C)D()}),S.observe(r))},se=C=>{t=C,t?(O(),X(),W()):he()},k=C=>{i=C,D()},L=C=>{s=C,D()},T=C=>{n=C,D()},M=C=>{a=C,D()},F=C=>{o=C,D()},I=C=>{l=C,D()},z=C=>{h=C,D()},R=C=>{f=C,D()},K=C=>{if(!t||!C.values)return;const B=(e==null?void 0:e.getPointerElements())??[],fe=(e==null?void 0:e.getType())??"horizontal";for(let ae=0;ae<C.values.length;ae++){const Ee=C.values[ae],Ye=p[ae];if(Ee===void 0&&Ye){Ye.remove(),p[ae]=void 0;continue}if(Ee!==void 0&&!Ye){const lt=P(`tooltip tooltip-${ae+1}`),ce=(Ee??"").toString();lt.textContent=A(ce),lt.style.position="absolute",Y(lt,fe,B[ae].style.left,B[ae].style.top,B[ae].style.zIndex),p[ae]=lt,g==null||g.append(lt)}if(!Ye)continue;const it=(Ee??"").toString();Ye.textContent=A(it),Y(Ye,fe,B[ae].style.left,B[ae].style.top,B[ae].style.zIndex)}},he=()=>{g==null||g.remove();for(const C of p)C&&C.remove();p=[],S==null||S.disconnect()};return{get name(){return"Moving Tooltip"},init:(C,B,fe,ae)=>{r=C,e=ae,i=Ci(C.getAttribute("moving-tooltip-distance-to-pointer"),Ea),s=Ci(C.getAttribute("moving-tooltip-width"),Da),n=Ci(C.getAttribute("moving-tooltip-height"),La),a=C.getAttribute("moving-tooltip-bg")||Pd,o=C.getAttribute("moving-tooltip-text-color")||Od,l=C.getAttribute("moving-tooltip-units")||"",h=C.getAttribute("moving-tooltip-units-type")||"",se(Rl(C.getAttribute("moving-tooltip")))},update:K,onAttrChange:(C,B)=>{C==="moving-tooltip"&&se(Rl(B)),C==="moving-tooltip-distance-to-pointer"&&k(Ci(B,Ea)),C==="moving-tooltip-width"&&L(Ci(B,Da)),C==="moving-tooltip-height"&&T(Ci(B,La)),C==="moving-tooltip-bg"&&M(B),C==="moving-tooltip-text-color"&&F(B),C==="moving-tooltip-units"&&I(B),C==="moving-tooltip-units-type"&&z(B)},gettersAndSetters:[{name:"movingTooltip",attributes:{get(){return t??!1},set:C=>{se(Rl(C))}}},{name:"distanceToPointer",attributes:{get(){return i??!1},set:C=>{k(Ci(C,Ea))}}},{name:"tooltipWidth",attributes:{get(){return s},set:C=>{L(Ci(C,Da))}}},{name:"tooltipHeight",attributes:{get(){return n},set:C=>{T(Ci(C,La))}}},{name:"tooltipBg",attributes:{get(){return a},set:C=>{M(C)}}},{name:"tooltipTextColor",attributes:{get(){return o},set:C=>{F(C)}}},{name:"tooltipUnits",attributes:{get(){return l},set:C=>{I(C)}}},{name:"tooltipUnitType",attributes:{get(){return h},set:C=>{z(C)}}},{name:"formatTooltipValue",attributes:{get(){return f},set:C=>{R(C)}}}],css:`
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
  z-index: ${Ad};
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
    `,destroy:he}};window.tcRangeSliderPlugins.push(S1);(()=>{var r=(o,l,h,f,p)=>{let g=l-o;return g===0?h:(f-h)*(p-o)/g+h},e=o=>!isNaN(parseFloat(o))&&isFinite(o),t=(o,l)=>e(o)?Number(o):l,i=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let o=null,l=null,h=null,f=null,p=null,g=!1,S=s,$=n,O=()=>{var k;let L=(k=o==null?void 0:o.shadowRoot)==null?void 0:k.querySelector("#range-slider");h=document.createElement("div"),h.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),h.append(f),p=document.createElement("div"),p.classList.add("mark-values"),h.append(p),L.append(h)},P=()=>{!l||!h||h.classList.toggle("is-reversed",l.isRightToLeft()||l.isBottomToTop())},Y=()=>{var k;if(!h||!l)return;let L=l.getMin(),T=l.getMax(),M=l.getType()==="vertical",F=l.isRightToLeft()||l.isBottomToTop();for(let z=0;z<S;z++){let R=document.createElement("div");R.classList.add("mark",`mark-${z}`);let K=S===0?0:z*100/(S-1);M?F?R.style.top=`${100-K}%`:R.style.top=`${K}%`:F?R.style.left=`${100-K}%`:R.style.left=`${K}%`,f==null||f.append(R)}let I=l.getData();for(let z=0;z<$;z++){let R=document.createElement("div");R.classList.add("mark-value",`mark-value-${z}`);let K=$===0?0:z*100/($-1),he=r(0,$-1,L,T,z);R.textContent=(I?(k=I[Math.round(he)])!=null?k:"":he).toString(),M?F?R.style.top=`${100-K}%`:R.style.top=`${K}%`:F?R.style.left=`${100-K}%`:R.style.left=`${K}%`,p==null||p.append(R)}},A=(k,L)=>{se(),S=k,$=L,S<=0&&(S=s),$<=0&&($=n),O(),Y(),P()},D=k=>{g=k,g?(O(),Y(),P()):se()},X=k=>{!h||h.style.setProperty("--marks-color",k)},W=k=>{!h||h.style.setProperty("--values-color",k)},se=()=>{h==null||h.remove()};return{get name(){return"Marks"},init:(k,L,T,M)=>{var F,I;l=M,o=k,g=i(o.getAttribute("marks")),g&&(A(t(o.getAttribute("marks-count"),s),t(o.getAttribute("marks-values-count"),n)),X((F=o.getAttribute("marks-color"))!=null?F:"#cbd5e1"),W((I=o.getAttribute("marks-values-color"))!=null?I:"#475569"))},onAttrChange:(k,L)=>{k==="marks"&&D(i(L)),k==="marks-count"&&A(t(L,s),$),k==="marks-values-count"&&A(S,t(L,n)),k==="marks-color"&&X(L),k==="marks-values-color"&&W(L)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return g??!1},set:k=>{D(i(k))}}},{name:"marksCount",attributes:{get(){return S??s},set:k=>{A(t(k,s),$)}}},{name:"marksValuesCount",attributes:{get(){return S??s},set:k=>{A(S,t(k,n))}}},{name:"marksColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--marks-color")},set:k=>{X(k)}}},{name:"markValuesColor",attributes:{get(){return h==null?void 0:h.style.getPropertyValue("--values-color")},set:k=>{W(k)}}}],destroy:se,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var $1=Object.defineProperty,_1=Object.getOwnPropertyDescriptor,bi=(r,e,t,i)=>{for(var s=i>1?void 0:i?_1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$1(e,t,s),s};let Ur=class extends Ar{constructor(){super(...arguments),this.hasFixedFrom=!1,this.hasFixedTo=!1,this.sliderRef=pe(),this.initialised=!1}getClassName(){return"RangeSliderElement"}getTourableRoot(){return this.sliderRef.value}connectedCallback(){super.connectedCallback(),this.registry.range.addListener(this.UUID,r=>{r&&(this.from!==void 0&&this.to!==void 0?this.max<r.from?(this.to=r.to,this.from=r.from):(this.from=r.from,this.to=r.to):(this.from=r.from,this.to=r.to))}),this.registry.minmax.addListener(this.UUID,r=>{r&&(this.from=r.min,this.to=r.max)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.range.removeListener(this.UUID),this.registry.minmax.removeListener(this.UUID),this.initialised=!1}firstUpdated(r){super.firstUpdated(r)}willUpdate(r){super.willUpdate(r),"from"in r&&"to"in r&&this.registry.range.imposeRange({from:r.from,to:r.to})}sliderDownListener(r){const t=r.detail;this.from=t.value1,this.to=t.value2}sliderUpListener(){this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r);const e=this.sliderRef.value;e&&this.initialised===!1&&(this.initialised=!0,e.addCSS(`
                .tooltip {
                    font-size: 12px;
                }
                .pointer-shape {
                    border-radius: 0;
                    width: 10px;
                }
            `),e.addEventListener("change",t=>{const s=t.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}),e.addEventListener("onMouseDown",t=>{this.log(t)}))}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return u`

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

        `}};Ur.styles=ne`

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
    
    `;bi([le({context:Oh,subscribe:!0}),v()],Ur.prototype,"min",2);bi([le({context:Ah,subscribe:!0}),v()],Ur.prototype,"max",2);bi([le({context:Do,subscribe:!0}),v()],Ur.prototype,"from",2);bi([le({context:Lo,subscribe:!0}),v()],Ur.prototype,"to",2);bi([v()],Ur.prototype,"hasFixedFrom",2);bi([v()],Ur.prototype,"hasFixedTo",2);bi([le({context:ra,subscribe:!0}),v()],Ur.prototype,"palette",2);bi([v()],Ur.prototype,"sliderRef",2);bi([v()],Ur.prototype,"initialised",2);Ur=bi([H("registry-range-slider")],Ur);var C1=Object.defineProperty,k1=Object.getOwnPropertyDescriptor,ha=(r,e,t,i)=>{for(var s=i>1?void 0:i?k1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&C1(e,t,s),s};let Qs=class extends Ar{constructor(){super(...arguments),this.fixed=2,this.separator="-",this.tourableRef=pe()}getTourableRoot(){return this.tourableRef.value}render(){var r,e;return this.from===void 0||this.to===void 0?_:u`
            <div ${ve(this.tourableRef)}>
                <span>${(r=this.from)==null?void 0:r.toFixed(this.fixed)} °C</span>
                <span>${this.separator}</span>
                <span>${(e=this.to)==null?void 0:e.toFixed(this.fixed)} °C</span>
            </div>
            <slot name="tour"></slot>
        `}};ha([le({context:Do,subscribe:!0})],Qs.prototype,"from",2);ha([le({context:Lo,subscribe:!0})],Qs.prototype,"to",2);ha([d({type:String,reflect:!0,attribute:!0,converter:{fromAttribute:r=>Math.round(parseFloat(r)),toAttribute:r=>r.toString()}})],Qs.prototype,"fixed",2);ha([d({type:String,reflect:!0,attribute:!0})],Qs.prototype,"separator",2);Qs=ha([H("registry-range-display")],Qs);var P1=Object.defineProperty,O1=Object.getOwnPropertyDescriptor,ds=(r,e,t,i)=>{for(var s=i>1?void 0:i?O1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&P1(e,t,s),s};let fi=class extends Ar{constructor(){super(...arguments),this.histogram=[],this.height="calc( var( --thermal-gap ) * 1.5 )",this.heightExpanded="400px",this.expandable=!1,this.expanded=!1,this.tourableElementRef=pe(),this.loading=!1,this.error=!1}getTourableRoot(){return this.tourableElementRef.value}getClassName(){return"HistogramElement"}connectedCallback(){super.connectedCallback(),this.loading=this.registry.histogram.loading,this.registry.histogram.onCalculationStart.set(this.UUID,()=>{this.loading=!0,this.error=!1}),this.registry.histogram.onCalculationEnd.set(this.UUID,r=>{this.loading=!1,this.error=!r}),this.registry.loading.addListener(this.UUID,r=>{r===!0&&(this.loading=!0)})}firstUpdated(r){super.firstUpdated(r),this.registry.histogram.addListener(this.UUID,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.loading.removeListener(this.UUID),this.registry.histogram.removeListener(this.UUID),this.registry.histogram.onCalculationStart.delete(this.UUID),this.registry.histogram.onCalculationEnd.delete(this.UUID)}renderHistogram(){const r=this.histogram.length>0&&this.loading===!1;return u`

            <div class="container ${r?"ready":"loading"}" ${ve(this.tourableElementRef)}>

                <div class="histogram ${this.expandable===!0?"expandable":""}" style="height: ${this.expanded?this.heightExpanded:this.height}" part="bg" @click=${()=>{this.expandable===!0&&(this.expanded=!this.expanded)}}>

                    ${this.histogram.map(e=>u`
                            <div class="histogram-bar" data-height="${e.height}" data-percentage="${e.percentage}" data-count="${e.count}" data-from="${e.from}" data-to="${e.to}">
                                <div style="height: ${e.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

                ${this.error===!0?u`<div class="error">Unable to calculate the histogram</div>`:_}

                <div class="spinner">
                    <span></span>
                </div>

            </div>
        
        `}render(){return this.renderHistogram()}};fi.styles=ne`

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

            &.loading {

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
            background:  var(--thermal-slate-light);
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
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
        }


    `;ds([v()],fi.prototype,"histogram",2);ds([d({type:String,reflect:!0})],fi.prototype,"height",2);ds([d({type:String,reflect:!0})],fi.prototype,"heightExpanded",2);ds([d({type:Boolean,reflect:!0,converter:Ne(!1)})],fi.prototype,"expandable",2);ds([v()],fi.prototype,"expanded",2);ds([v()],fi.prototype,"loading",2);ds([v()],fi.prototype,"error",2);fi=ds([H("registry-histogram")],fi);var A1=Object.defineProperty,E1=Object.getOwnPropertyDescriptor,D1=(r,e,t,i)=>{for(var s=i>1?void 0:i?E1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&A1(e,t,s),s};let Zl=class extends vi{getTourableRoot(){}render(){const e=this.classList.contains("small")?"small":"";return u`
        
            <thermal-dropdown class="download ${e}">
            
                <span slot="invoker">${x(w.download)}</span>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.files.downloadAllFiles()}>${x(w.downloadoriginalfiles)}</thermal-button>
                    <small>${x(w.downloadoriginalfileshint)}</small>
                </div>
            
                <div slot="option">
                    <thermal-button @click=${()=>this.group.forEveryInstance(t=>t.export.downloadPng())}>${x(w.pngofindividualimages)}</thermal-button>
                    <small>${x(w.pngofindividualimageshint)}</small>
                </div>
            
                <div slot="option">
            
                <thermal-button @click=${()=>this.group.analysisSync.png.downloadPng({})}>${x(w.pngofentiregroup)}</thermal-button>
                    <small>${x(w.pngofentiregrouphint)}</small>
                </div>
            
            
                <div slot="option">
                    <thermal-button @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${x(w.csvofanalysisdata)}</thermal-button>
                    <small>${x(w.csvofanalysisdatahint)}</small>
                </div>
            
            </thermal-dropdown>
        
        `}};Zl.styles=ne`
    
    `;Zl=D1([H("group-download-dropdown")],Zl);var L1=Object.defineProperty,ca=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&L1(e,t,s),s};class pt extends vi{constructor(){super(...arguments),this.loading=!0,this.recording=!1}getUUID(){return`${this.UUID}__internal_callback`}get internalCallbackUUID(){return`${this.UUID}__internal_callback`}connectedCallback(){super.connectedCallback(),this.hookCallbacks()}hookCallbacks(){if(this.parentFileProviderElement)this.parentFileProviderElement.onSuccess.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onFailure.set(this.getUUID(),()=>{this.loading=!1}),this.parentFileProviderElement.onSuccess.set(this.UUID,this.onInstanceCreated.bind(this)),this.parentFileProviderElement.onFailure.set(this.UUID,this.onFailure.bind(this));else throw new Error("Tento komponent není v souboru!")}}ca([le({context:Mo,subscribe:!0}),v()],pt.prototype,"parentFileProviderElement");ca([le({context:gp,subscribe:!0}),v()],pt.prototype,"loading");ca([le({context:Dh,subscribe:!0}),v()],pt.prototype,"file");ca([le({context:fp,subscribe:!0}),v()],pt.prototype,"failure");ca([le({context:Mh,subscribe:!0}),v()],pt.prototype,"recording");const rc=class rc extends pt{constructor(){super(...arguments),this.ref=pe()}onInstanceCreated(){}onFailure(){}getTourableRoot(){return this.ref.value}render(){return u`<slot 
                @click=${this.action} 
                @mouseenter=${this.enter}
                @focus=${this.enter}
                @mouseleave=${this.leave}
                @blur=${this.leave}
                ${ve(this.ref)}
            >
                <button class="default">${this.getDefaultLabel()}</button>
            </slot>`}};rc.styles=ne`
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

    `;let $s=rc;var R1=Object.defineProperty,T1=Object.getOwnPropertyDescriptor,Pp=(r,e,t,i)=>{for(var s=i>1?void 0:i?T1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&R1(e,t,s),s};let ao=class extends vi{getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.onmouseenter=()=>{this.group&&this.group.minmax.value&&this.setter&&this.setter({from:this.group.minmax.value.min,to:this.group.minmax.value.max})},this.onmouseleave=()=>{this.setter&&this.setter(void 0)},this.onclick=()=>{this.group&&this.group.minmax.value&&this.group.registry.range.imposeRange({from:this.group.minmax.value.min,to:this.group.minmax.value.max})}}render(){return u`
            <slot>
                <button class="default">${x(w.range).toLowerCase()}</button>
            </slot>
        `}};ao.styles=$s.styles;Pp([le({context:na,subscribe:!0})],ao.prototype,"setter",2);ao=Pp([H("group-range-propagator")],ao);var M1=Object.defineProperty,I1=Object.getOwnPropertyDescriptor,U1=(r,e,t,i)=>{for(var s=i>1?void 0:i?I1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&M1(e,t,s),s};let Jl=class extends vi{getTourableRoot(){}render(){return u`
        
                <button class="default" @click=${()=>this.group.files.downloadAllFiles()}>${x(w.downloadoriginalfiles)}</button>
            
                <button class="default" @click=${()=>this.group.forEveryInstance(r=>r.export.downloadPng())}>${x(w.pngofindividualimages)}</button>
            
            
                <button class="default" @click=${()=>this.group.analysisSync.png.downloadPng({})}>${x(w.pngofentiregroup)}</button>
            
                <button class="default" @click=${()=>{this.group.analysisSync.csv.downloadAsCsv()}}>${x(w.csvofanalysisdata)}</button>
        
        `}};Jl.styles=ne`

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
    
    `;Jl=U1([H("group-download-buttons")],Jl);/**
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
 */const z1=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),iu(t,ru`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Op(r={}){await z1;const{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:s}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:s})}async function Ed(r){if(await Op(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function F1(r){return await Op(),new google.visualization.ChartWrapper({container:r})}/**
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
 */var Hi=function(r,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,t,i);else for(var o=r.length-1;o>=0;o--)(a=r[o])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const Dd=["ready","select"],j1={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"};class ei extends pr{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return u`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){F1(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Dd,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(j1[this.type]||this.type);const e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{const t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(s=>!Dd.includes(s)),t);const i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(const i of e)google.visualization.events.addListener(t,i,s=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:s}}))})}selectionChanged(){if(this.chartWrapper==null)return;const e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){const t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;const e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){const{rows:e,cols:t}=this;if(!(!e||!t))try{const i=await Ed({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(s=>s.json()):t=Promise.resolve(e),t.then(Ed).then(s=>{this._data=s})}localizeGlobalStylesheets(e){const t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(const i of t){const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",i.getAttribute("href")),e.appendChild(s)}}}ei.styles=ne`
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
  `;Hi([d({type:String,reflect:!0})],ei.prototype,"type",void 0);Hi([d({type:Array})],ei.prototype,"events",void 0);Hi([d({type:Object,hasChanged:()=>!0})],ei.prototype,"options",void 0);Hi([d({type:Array})],ei.prototype,"cols",void 0);Hi([d({type:Array})],ei.prototype,"rows",void 0);Hi([d({type:String})],ei.prototype,"data",void 0);Hi([d({type:Object})],ei.prototype,"view",void 0);Hi([d({type:Array})],ei.prototype,"selection",void 0);Hi([d({type:Object})],ei.prototype,"_data",void 0);customElements.define("google-chart",ei);var N1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,pn=(r,e,t,i)=>{for(var s=i>1?void 0:i?W1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&N1(e,t,s),s};let os=class extends vi{constructor(){super(...arguments),this.instances=[],this.on=!1}getTourableRoot(){throw new Error("Method not implemented.")}firstUpdated(r){super.firstUpdated(r),this.group.files.addListener(this.UUID,()=>{this.group.analysisGraph.turnOn()}),this.group.analysisGraph.addListener(this.UUID,e=>{e!==void 0?(this.data=e.data,this.colors=e.colors,this.on=!0):(this.data=void 0,this.colors=void 0,this.on=!1)})}download(){var e;const r=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("google-chart");console.log(r)}render(){return u`
            <div class="wrapper ${this.on?"on":"off"}">

                ${this.on===!0?u`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{colors:this.colors,legend:{position:"bottom"},hAxis:{title:"Time"},vAxis:{title:"Temperature °C"},chartArea:{width:"90%"}}}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                `:_}
                
            </div>
        `}};os.styles=ne`
    
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

    `;pn([v()],os.prototype,"instances",2);pn([v()],os.prototype,"timeout",2);pn([v()],os.prototype,"data",2);pn([v()],os.prototype,"colors",2);pn([v()],os.prototype,"on",2);os=pn([H("group-chart")],os);var H1=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,Ap=(r,e,t,i)=>{for(var s=i>1?void 0:i?B1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&H1(e,t,s),s};let oo=class extends vi{getTourableRoot(){}connectedCallback(){if(super.connectedCallback(),this.on){const r=this.UUID+"__initial";this.group.files.addListener(r,e=>{e.length>0&&(this.group.analysisSync.turnOn(e[0]),this.group.files.removeListener(r))})}else this.on=this.group.analysisSync.value;this.group.analysisSync.addListener(this.UUID,r=>{this.on=r}),this.addEventListener("click",()=>{this.toggle()})}turnOn(){this.group.files.value.length>0&&this.group.analysisSync.turnOn(this.group.files.value[0])}turnOff(){this.group.analysisSync.turnOff()}toggle(){this.on?this.turnOff():this.turnOn()}render(){return u`  
        <span><i></i></span>      
        <div>${x(w.analysissync)}</div>
        `}};oo.styles=ne`
    
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
    
    `;Ap([d({type:Boolean,reflect:!0,converter:Ne(!1)})],oo.prototype,"on",2);oo=Ap([H("group-analysis-sync-button")],oo);var G1=Object.defineProperty,V1=Object.getOwnPropertyDescriptor,Y1=(r,e,t,i)=>{for(var s=i>1?void 0:i?V1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&G1(e,t,s),s};let Ql=class extends pt{constructor(){super(...arguments),this.container=pe()}getContainer(){return this.container.value}getTourableRoot(){return this.container.value}onInstanceCreated(e){const t=this.getContainer();if(t!==void 0)e.mountToDom(t),e.draw();else throw new Error("Error mounting the instance to the canvas!")}onFailure(){}updated(e){var t;if(super.updated(e),e.has("file")){const i=e.get("file"),s=this.file;i===void 0&&s!==void 0&&this.container.value&&this.file&&((t=this.file.dom)==null?void 0:t.built)===!1&&(this.file.mountToDom(this.container.value),this.file.draw())}}disconnectedCallback(){super.disconnectedCallback(),this.file!==void 0&&this.file.unmountFromDom()}render(){var s,n;const e=this.loading===!1&&this.failure!==void 0,t=this.loading===!1&&this.file!==void 0,i={"canvas-container":!0,"is-loading":this.loading,"is-loaded":this.loading===!1,"is-success":t,"is-error":e};return u`
            <div ${ve(this.container)} class=${Kt(i)} part="file-canvas-container">
            
                ${this.loading===!0?u`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`:e===!0?u`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                File loading error
                            </div>

                            <div class="error-url">
                                ${(s=this.failure)==null?void 0:s.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${(n=this.failure)==null?void 0:n.message}
                            </div>
                        </div>`:_}
            
            </div>

            <slot name="tour"></slot>
        
        `}};Ql.styles=ne`

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
    `;Ql=Y1([H("file-canvas")],Ql);var q1=Object.defineProperty,X1=Object.getOwnPropertyDescriptor,K1=(r,e,t,i)=>{for(var s=i>1?void 0:i?X1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&q1(e,t,s),s};let eh=class extends pt{onInstanceCreated(r){}onFailure(r){}render(){return this.file?u`
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
        `:_}};eh.styles=ne`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;eh=K1([H("file-share-button")],eh);var Z1=Object.defineProperty,J1=Object.getOwnPropertyDescriptor,Q1=(r,e,t,i)=>{for(var s=i>1?void 0:i?J1(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Z1(e,t,s),s};let th=class extends pt{getTourableRoot(){}onFileLoaded(){}onInstanceCreated(r){}onFailure(r){}renderRow(r,e){return`<tr>
            <td style="width: 110px">${r}</td>
            <td>${e}</td>
        </tr>`}renderNumericalRow(r,e,t=4,i){const s=e.toFixed(t),n=i!==void 0?s+" "+i:s;return this.renderRow(r,n)}renderDownloadRow(r,e,t,i){return this.renderRow(r,`<span>${e}</span>
            <a href=${t} target="_blank" title="${i}" class="download">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </a>`)}render(){return this.file?u`
            <thermal-dialog label=${x(w.fileinfo)}>
                <slot name="invoker" slot="invoker">
                    <thermal-button>${x(w.fileinfo)}</thermal-button>
                </slot>
                <div slot="content">

                    <table>

                        ${Dt(this.renderRow(x(w.thermalfilename),this.file.fileName))}

                        ${Dt(this.renderDownloadRow(x(w.thermalfileurl),this.file.thermalUrl,this.file.thermalUrl,x(w.thermalfiledownload)))}

                        ${this.file.visibleUrl?Dt(this.renderDownloadRow(x(w.visiblefileurl),this.file.visibleUrl,this.file.visibleUrl,x(w.visiblefiledownload))):_}

                        ${Dt(this.renderRow(x(w.time),ot.human(this.file.timestamp)))}

                        ${Dt(this.renderNumericalRow(x(w.duration),this.file.duration,0,"ms"))}

                        ${Dt(this.renderRow(x(w.resolution),`${this.file.width} x ${this.file.height}<small class="opaque">${this.file.pixels.length} pixels</small>`))}

                        ${Dt(this.renderNumericalRow(x(w.bytesize),this.file.bytesize,0))}
                        
                        ${Dt(this.renderNumericalRow(x(w.minimaltemperature),this.file.min,10,"°C"))}

                        ${Dt(this.renderNumericalRow(x(w.maximaltemperature),this.file.max,10,"°C"))}

                        

                    </table>

                    <h2>${x(w.filetype)}</h2>
                    <table>
                    ${Dt(this.renderRow(x(w.type),this.file.reader.parser.name))}
                    ${Dt(this.renderRow(x(w.description),this.file.reader.parser.description))}

                    <tr>
                        <td>${x(w.supporteddevices)}</td>
                        <td><ul>${this.file.reader.parser.devices.map(r=>u`<li>
                            <h3><a href="${r.deviceUrl}" target="_blank">${r.deviceName}</a></h3>
                            <div class="small">${r.deviceDescription}</div>
                            <div class="small">Manufactured by <a href="${r.manufacturerUrl}" target="_blank">${r.manufacturer}</a></div>
                        </li>`)}</ul></td>
                    </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `:_}};th.styles=ne`

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
    
    `;th=Q1([H("file-info-button")],th);var ew=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,Wo=(r,e,t,i)=>{for(var s=i>1?void 0:i?tw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ew(e,t,s),s};let en=class extends pt{constructor(){super(...arguments),this.tourableElementRef=pe(),this.pngWidth=1350,this.hasGraphs=!1}getTourableRoot(){return this.tourableElementRef.value}onInstanceCreated(r){r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasGraphs=e})}onFailure(){}render(){return this.file===void 0?_:u`

            <thermal-dropdown variant="foreground" >

                <slot name="invoker" slot="invoker" ${ve(this.tourableElementRef)}>
                    <div class="button">
                        ${this.file?x(w.download):"..."}
                    </div>
                </slot>

                    <div slot="option">
                        <thermal-button @click="${()=>window.open(this.file.thermalUrl)}">${x(w.downloadoriginalfile,{type:this.file.reader.parser.extensions[0].extension.toUpperCase()})}</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}>${x(w.exportcurrentframeaspng)}</thermal-button>
                    </div>

                    ${this.file.timeline.isSequence?u`<div slot="option">
                            <thermal-button @click="${()=>{var r;return(r=this.file)==null?void 0:r.recording.recordEntireFile()}}">${x(w.convertentiresequencetovideo)}</thermal-button>
                        </div>`:_}

                    ${this.hasGraphs===!0?u`<div slot="option">
                            <thermal-button @click=${()=>{var r;return(r=this.file)==null?void 0:r.analysisData.downloadData()}}>${x(w.csvofanalysisdata)}</thermal-button>
                        </div>`:_}
            
            </thermal-dropdown>

            <slot name="tour"></slot>

        
        `}};en.styles=ne`

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
    
    `;Wo([le({context:Os,subscribe:!0})],en.prototype,"pngWidth",2);Wo([le({context:As,subscribe:!0})],en.prototype,"pngFs",2);Wo([v()],en.prototype,"hasGraphs",2);en=Wo([H("file-download-dropdown")],en);const lo=(r,e,t)=>({ms:r,percent:r/e*100,type:t,label:$e(r,"m:ss")}),rw=(r,e,t,i)=>{const s=[];let n=1;const a=(e-r)/t;for(;n<t;){const o=r+n*a;o<i&&s.push(lo(o,i,"minor")),n+=1}return e<i&&s.push(lo(e,i,"major")),s},Tl=60*1e3,vs=50,js=3,rh=(r,e)=>{const t=Math.floor(r/vs),i=Math.floor(e/(60*1e3)),s=t/i;let n=2;s>=2&&(n=4),s>=6&&(n=6),s>=12&&(n=12),s>=30&&(n=30);const a=[];let o=0,l=Tl;for(;o<e;)rw(o,l,n,e).forEach(h=>a.push(h)),o+=Tl,l+=Tl;return a.push(lo(0,e,"bound")),a.push(lo(e,e,"bound")),a},iw=r=>u`<div
        class="tick tick-${r.type}"
        style="left: ${r.percent}%;"
    >
        <div class="tick-pointer"></div>
        <div class="tick-label">${r.label}</div>
    </div>`,Ld=(r,e,t)=>u`<div 
        class="indicator-cursor indicator-cursor__${t}"
        style="left: ${r}%;"
    >
        <div class="indicator-cursor-arrow"></div>
        <div class="indicator-cursor-label">${e}</div>
    </div>`,Ep=(r,e,t,i)=>{const s=t/r*100,n=i!==void 0?i/r*100:void 0;return u`<div class="ticks">
        
        ${e.map(iw)}

        ${Ld(s,$e(t,"m:ss:SSS"),"primary")}

        ${i!==void 0&&n!==void 0?Ld(n,$e(i,"m:ss:SSS"),"pointer"):_}

    </div>`},Dp=ne`

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
            width: ${vs}px;
            left: -${vs/2}px;
            background: var( --cursor-bg );
            color: var(--cursor-color);
            text-align: center;
        }

        .ticks {
            width: 100%;
            height: calc( var(--thermal-fs) + ${js}px);
            position: relative;
        }


        .ticks-horizontal-indent {
            padding-left: ${vs/2}px;
            padding-right: ${vs/2}px;
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
                top: -${js}px;
            }

            .tick-pointer {
                width: ${js*2}px;
                height: ${js*2}px;
                background: var( --thermal-slate-dark );
                position: relative;
                left: -${js}px;
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
            height: ${js}px;
            width: 1px;
            content: "";
            background-color: currentcolor;
    }

    .tick-label {
            width: ${vs}px;
            position: relative;
            left: -${vs/2}px;
            text-align: center;
            color: currentcolor;
    }

    

`;var sw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,br=(r,e,t,i)=>{for(var s=i>1?void 0:i?nw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&sw(e,t,s),s};let Ft=class extends pt{constructor(){super(...arguments),this.playing=!1,this.mayStop=!0,this.timelineRef=pe(),this.barRef=pe(),this.containerRef=pe(),this.hasPlayButton=!0,this.hasInfo=!0,this.interactive=!0,this.markers=[],this.collapsed=!1,this.ticks=[]}getTourableRoot(){return this.containerRef.value}onInstanceCreated(r){this.containerRef.value&&(this.ticks=rh(this.containerRef.value.clientWidth,r.duration))}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}update(r){super.update(r),this.observer===void 0&&this.containerRef.value instanceof Element&&(this.observer=new ResizeObserver(e=>{const t=e[0];this.file&&(this.ticks=rh(t.contentRect.width,this.file.duration)),t.contentRect.width<Ft.collapseWidth?this.collapsed===!1&&(this.collapsed=!0):this.collapsed===!0&&(this.collapsed=!1)}),this.observer.observe(this.containerRef.value))}handlePlayButtonClick(){var r,e;this.playing===!0&&this.mayStop===!1||(this.playing?(r=this.file)==null||r.timeline.stop():(e=this.file)==null||e.timeline.play())}handleBarClick(r){if(r.preventDefault(),this.mayStop!==!1&&this.timelineRef.value&&this.barRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this.file.timeline.setValueByPercent(t)}}getValueFromEvent(r){if(this.timelineRef.value&&this.file){const t=(r.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100,i=this.file.duration*(t/100);return{percent:t,ms:i}}}handleBarEnter(r){const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarHover(r){r.preventDefault();const e=this.getValueFromEvent(r);e&&(this.pointerMs=e.ms),this.cursorSetter&&e&&this.cursorSetter(e.percent)}handleBarMouseLeave(){this.cursorSetter&&this.cursorSetter(void 0),this.pointerMs=void 0}render(){var n;const r=this.file;if(r===void 0)return _;if(r.duration===0)return _;const e={container:!0,collapsed:this.collapsed},t={may:this.mayStop===!0,mayNot:this.mayStop===!1},i={item:!0,button:!0,...t},s={item:!0,timeline:!0,...t};return u`
            <div class="${Kt(e)}" ${ve(this.containerRef)}>


                ${r!==void 0?u`

                        <div class="ticks-horizontal-indent">

                            <notation-timeline></notation-timeline>


                            <div class="${Kt(s)}"  ${ve(this.timelineRef)}>

                                <div 
                                    class="timeline-bar" 
                                    @click=${this.handleBarClick}
                                    @mouseenter=${this.handleBarEnter.bind(this)}
                                    @mousemove=${this.handleBarHover} 
                                    @mouseleave=${this.handleBarMouseLeave.bind(this)}
                                >
                                    <div class="bar" style="width: ${this.currentFrame?this.currentFrame.percentage:0}%" ${ve(this.barRef)}></div>
                                    ${this.cursor?u`<div class="pointer" style="left: ${this.cursor.percentage}%"></div>`:""}
                                </div>

                                <div>
                                    ${this.markers.map(a=>u`<file-marker-timeline start=${a.fromMs} end=${a.endMs} ></file-marker-timeline>`)}
                                </div>

                            </div>


                            ${this.currentFrame?Ep(r.duration,this.ticks,this.currentFrame.ms,this.pointerMs):_}

                            


                            ${this.hasPlayButton===!0?u`

                                    <div class="controls">

                                        <thermal-button @click=${()=>{r.timeline.prev()}}>${x(w.prev)}</thermal-button>


                                        <button class="${Kt(i)}" @click=${this.handlePlayButtonClick.bind(this)}>


                                        ${this.playing?u`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                            </svg>
                                            `:u`
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                            </svg>
                                            `}

                                    </button>

                                    

                                    <thermal-button @click=${()=>{r.timeline.next()}}>${x(w.next)}</thermal-button>

                                    <thermal-button @click=${()=>r.timeline.setRelativeTime(0)}>${x(w.back)}</thermal-button>

                                    <file-playback-speed-dropdown enabled="${this.mayStop?"on":"off"}" class="item"></file-playback-speed-dropdown>

                                </div>

                                `:_}

                            
                        </div>
                    `:_}

            
            
            </div>

            ${this.currentFrame!==void 0&&this.hasInfo===!0?u`<div class="small real ${this.collapsed?"collapsed":""}">
                        <div>
                            <span class="label">${x(w.date)}:</span> 
                            <span class="inline">${$e(this.currentFrame.absolute,"d. L. y")}</span>
                        </div>
                        <div>
                            <span class="label">${x(w.time)}:</span> 
                            <span class="inline">${$e(this.currentFrame.absolute,"H'h' mm'm' ss:SSS")}</span>
                        </div>
                        <div>
                            <span class="label">${x(w.frame)}:</span> 
                            <span class="inline">${this.currentFrame.index+1} / ${(n=this.file)==null?void 0:n.frameCount}</span>
                        </div>
                    </div>`:_}

            <slot name="tour"></slot>

          `}};Ft.collapseWidth=500;Ft.styles=ne`
    
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

        ${Dp}


        .controls {

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            padding-top: 5px;

        }
    
    `;br([le({context:Uo,subscribe:!0}),v()],Ft.prototype,"playing",2);br([le({context:aa,subscribe:!0}),v()],Ft.prototype,"currentFrame",2);br([le({context:Rh,subscribe:!0}),v()],Ft.prototype,"duration",2);br([le({context:vp,subscribe:!0}),v()],Ft.prototype,"mayStop",2);br([le({context:Lh,subscribe:!0})],Ft.prototype,"cursor",2);br([le({context:mp,subscribe:!0})],Ft.prototype,"cursorSetter",2);br([d({type:String,reflect:!0})],Ft.prototype,"hasPlayButton",2);br([d({type:String,reflect:!0})],Ft.prototype,"hasInfo",2);br([d({type:String,reflect:!0})],Ft.prototype,"interactive",2);br([le({context:Ih,subscribe:!0})],Ft.prototype,"markers",2);br([v()],Ft.prototype,"collapsed",2);br([v()],Ft.prototype,"ticks",2);br([v()],Ft.prototype,"pointerMs",2);Ft=br([H("file-timeline")],Ft);var aw=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,jh=(r,e,t,i)=>{for(var s=i>1?void 0:i?ow(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&aw(e,t,s),s};let Un=class extends pt{constructor(){super(...arguments),this.enabled="on",this.playbackSpeed=1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}render(){return this.file===void 0?_:u`

            <thermal-dropdown variant="foreground" interactive="${this.enabled}">

                <div slot="invoker" class="button">
                ${this.playbackSpeed}x
                </div>

                <div slot="option" style="font-size: calc( var(--thermal-fs-sm) * .9);">${x(w.playbackspeed)}</div>

                    ${Object.entries(Ou).map(([r])=>u`<thermal-button slot="option" @click="${e=>{this.file&&(this.file.timeline.playbackSpeed=parseFloat(r));const t=e.target;t&&t.parentElement instanceof Ti&&t.parentElement.setClose()}}">${r}x</thermal-button>`)}
            
            </thermal-dropdown>

        
        `}};Un.styles=ne`

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
    
    `;jh([d({type:String,reflect:!0})],Un.prototype,"enabled",2);jh([le({context:Th,subscribe:!0}),v()],Un.prototype,"playbackSpeed",2);Un=jh([H("file-playback-speed-dropdown")],Un);var lw=Object.defineProperty,hw=Object.getOwnPropertyDescriptor,Nh=(r,e,t,i)=>{for(var s=i>1?void 0:i?hw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lw(e,t,s),s};let zn=class extends pt{constructor(){super(...arguments),this.container=pe()}onInstanceCreated(){}onFailure(){}shouldUpdate(r){if(this.container.value!==void 0&&this.currentFrame!==void 0){const e=parseFloat((this.currentFrame.ms/1e3).toFixed(3));this.container.value.fastSeek(e)}return super.shouldUpdate(r)}render(){return u`
            <div class="container">
            
                <video ${ve(this.container)} preload="metadata">

                    ${this.url===void 0?_:u`<source src="${this.url}" type="video/mp4"></source>`}

                </video>
            
            </div>
        
        `}};zn.styles=ne`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;Nh([le({context:aa,subscribe:!0}),v()],zn.prototype,"currentFrame",2);Nh([d({type:String,reflect:!0,attribute:!0})],zn.prototype,"url",2);zn=Nh([H("file-video")],zn);const cw=r=>{const e=Math.max(0,Math.round(r)),t=new Date;return t.setTime(e),$e(t,"mm:ss:SSS")},dw=r=>{const e=r.replaceAll(" ","").replaceAll(".","").replaceAll("-",""),t=e.split(":");if(t.length!==3)throw new Error(`Invalid time format! ${e}`);const i=parseInt(t[0]),s=parseInt(t[1]),n=parseInt(t[2]);return i*60*1e3+s*1e3+n};var uw=Object.defineProperty,pw=Object.getOwnPropertyDescriptor,wi=(r,e,t,i)=>{for(var s=i>1?void 0:i?pw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uw(e,t,s),s};const Wh={fromAttribute:r=>r===null?null:dw(r),toAttribute:r=>r===null?null:cw(r)};let Zr=class extends pt{constructor(){super(),this.playing=!1,this.ms=0,this.active=!1,this.pauseOnActivate=!0,this.isSpeaking=!1,window.speechSynthesis.getVoices()}onInstanceCreated(){}onFailure(){}get fromMs(){return this.start}get endMs(){return this.end!==void 0?this.end:this.dur!==void 0?this.fromMs+this.dur:this.fromMs+300}willUpdate(e){super.willUpdate(e),e.has("ms")&&(this.fromMs<=this.ms&&this.endMs>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}attributeChangedCallback(e,t,i){var s;super.attributeChangedCallback(e,t,i),e==="active"&&i==="true"?this.say!==void 0&&(this.speak(),this.playing&&this.pauseOnActivate&&((s=this.file)==null||s.timeline.pause())):e==="active"&&i==="false"&&this.say!==void 0&&this.isSpeaking&&window.speechSynthesis.cancel()}async speak(){if(this.say!==void 0){this.utterance=new SpeechSynthesisUtterance(this.say);const e=await this.getVoice();e&&(this.utterance.voice=e),this.utterance.voice=e,this.isSpeaking=!0,window.speechSynthesis.speak(this.utterance),this.utterance.onend=()=>{var t;this.utterance=void 0,this.isSpeaking=!1,this.playing===!1&&this.pauseOnActivate&&((t=this.file)==null||t.timeline.play())}}}async getVoice(){const e=await window.speechSynthesis.getVoices(),t=e.find(s=>s.lang==="cs-CZ");if(t)return t;const i=e.find(s=>s.default===!0);return i||null}render(){return _}};wi([le({context:Uo,subscribe:!0}),v()],Zr.prototype,"playing",2);wi([le({context:Io,subscribe:!0}),v()],Zr.prototype,"ms",2);wi([d({type:String,reflect:!0,attribute:!0})],Zr.prototype,"label",2);wi([d({type:String,reflect:!0,attribute:!0,converter:Wh})],Zr.prototype,"start",2);wi([d({type:String,reflect:!0,attribute:!0,converter:Wh})],Zr.prototype,"end",2);wi([d({type:String,reflect:!0,attribute:!0,converter:Wh})],Zr.prototype,"dur",2);wi([d({type:String,reflect:!0,attribute:!0})],Zr.prototype,"active",2);wi([d({type:String,reflect:!0,attribute:!0})],Zr.prototype,"pauseOnActivate",2);wi([d({type:String,reflect:!0,attribute:!0})],Zr.prototype,"say",2);Zr=wi([H("file-marker")],Zr);var fw=Object.defineProperty,gw=Object.getOwnPropertyDescriptor,Ds=(r,e,t,i)=>{for(var s=i>1?void 0:i?gw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fw(e,t,s),s};let Ui=class extends pt{constructor(){super(...arguments),this.ms=0,this.active=!1}onInstanceCreated(){}onFailure(){}get durationInMs(){return this.end-this.start}get percentageStart(){return this.duration?this.start/this.duration.ms*100:0}get percentageDuration(){return this.duration?this.durationInMs/this.duration.ms*100:0}get percentageCursor(){return this.currentFrame===void 0?0:this.currentFrame.percentage}willUpdate(r){super.willUpdate(r),r.has("ms")&&(this.start<=this.ms&&this.end>=this.ms?this.active===!1&&(this.active=!0):this.active===!0&&(this.active=!1))}render(){const r={container:!0,active:this.active};return u`

            <div class="${Kt(r)}" @click=${async()=>{var e;if(this.file){const t=await this.file.timeline.findNextRelative(this.start);t&&((e=this.file)==null||e.timeline.setRelativeTime(t.relative))}}}>

                <div class="bar" style="width:${this.percentageDuration}%; left: ${this.percentageStart}%">
                </div>

                
                <div class="cursor" style="left:${this.percentageCursor}%"></div>
            
            </div>
        
        `}};Ui.styles=ne`
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


    `;Ds([le({context:Rh,subscribe:!0}),v()],Ui.prototype,"duration",2);Ds([le({context:aa,subscribe:!0}),v()],Ui.prototype,"currentFrame",2);Ds([le({context:Io,subscribe:!0}),v()],Ui.prototype,"ms",2);Ds([d({type:Number,reflect:!0,attribute:!0})],Ui.prototype,"start",2);Ds([d({type:Number,reflect:!0,attribute:!0})],Ui.prototype,"end",2);Ds([v()],Ui.prototype,"active",2);Ui=Ds([H("file-marker-timeline")],Ui);var mw=Object.defineProperty,vw=Object.getOwnPropertyDescriptor,Lp=(r,e,t,i)=>{for(var s=i>1?void 0:i?vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mw(e,t,s),s};let ho=class extends pt{onInstanceCreated(){}onFailure(){var r;(r=this.file)==null||r.timeline.removeListener(this.UUID)}render(){return u`
            <div>


            ${this.markers.map(r=>r.active?u`<div class="item">
                    <h2>${r.label}</h2>
                    ${Dt(r.innerHTML)}
                    </div>`:_)}

            
            
            </div>

          `}};ho.styles=ne`
        .item {
            padding: var( --thermal-gap );
            border-radius: var( --thermal-radius );
            border: 1px solid var( --thermal-slate );
        }
    `;Lp([le({context:Ih,subscribe:!0})],ho.prototype,"markers",2);ho=Lp([H("file-marks-content")],ho);var yw=Object.defineProperty,bw=Object.getOwnPropertyDescriptor,Hh=(r,e,t,i)=>{for(var s=i>1?void 0:i?bw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yw(e,t,s),s};let Fn=class extends pt{getTourableRoot(){}onInstanceCreated(){}onFailure(){}render(){if(this.file===void 0)return _;if(this.label!==void 0)return this.label;if(this.grouping!==void 0)switch(this.grouping){case"hours":case"days":return $e(this.file.timestamp,"HH:mm");case"weeks":case"months":case"years":return ot.human(this.file.timestamp);default:return ot.human(this.file.timestamp)}return this.file.fileName}};Fn.styles=ne`
        :host {
            display: contents;
        }
    `;Hh([d({type:String})],Fn.prototype,"grouping",2);Hh([d({type:String})],Fn.prototype,"label",2);Fn=Hh([H("file-label")],Fn);var ww=Object.defineProperty,xw=Object.getOwnPropertyDescriptor,Bh=(r,e,t,i)=>{for(var s=i>1?void 0:i?xw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ww(e,t,s),s};let jn=class extends je{updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&t.onSetName.delete(this.UUID);const i=this.analysis;this.name=i.name,i.onSetName.set(this.UUID,s=>{this.name=s})}}render(){return u`

            <input 
                type="text"
                value="${this.name}" 
                @change=${e=>{const t=e.target,i=t.value!==""?t.value:this.analysis.nameInitial;this.analysis.setName(i)}}
            />

        `}};jn.styles=ne`

    
    `;Bh([d()],jn.prototype,"analysis",2);Bh([v()],jn.prototype,"name",2);jn=Bh([H("analysis-name")],jn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Gh(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}var Sw=Object.defineProperty,$w=Object.getOwnPropertyDescriptor,Vh=(r,e,t,i)=>{for(var s=i>1?void 0:i?$w(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sw(e,t,s),s};let Nn=class extends je{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetInitialColor.delete(this.UUID);const t=this.analysis;this.color=t.initialColor,t.onSetInitialColor.set(this.UUID,i=>{this.color=i})}}renderColor(r){return u`<i style="background-color: ${r};" aria-hidden></i><span>${r}</span>`}render(){return this.color===void 0?_:u`

            <thermal-dropdown>
                <div slot="invoker">
                    ${this.renderColor(this.color)}
                </div>

                ${Gh(Ua,r=>u`
                    <div class="option" slot="option" @click=${()=>{this.analysis.setInitialColor(r)}}>
                        ${this.renderColor(r)}
                    </div>
                `)}
                    
            </thermal-dropdown>

        `}};Nn.styles=ne`

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
    
    `;Vh([d()],Nn.prototype,"analysis",2);Vh([v()],Nn.prototype,"color",2);Nn=Vh([H("analysis-color")],Nn);var _w=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,Wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Cw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_w(e,t,s),s};let mr=class extends je{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.right=t.left+t.width,this.bottom=t.top+t.height,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left,this.width=i.width,this.height=i.height,this.right=i.left+i.width,this.bottom=i.top+i.height})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return u`

            <div class="table">

                <thermal-field label=${x(w.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${x(w.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${x(w.left)}>
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

                <thermal-field label=${x(w.right)}>
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

                <thermal-field label=${x(w.top)}>
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

                <thermal-field label=${x(w.bottom)}>
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
    
        
        `}};mr.styles=ne`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;Wr([d()],mr.prototype,"analysis",2);Wr([v()],mr.prototype,"color",2);Wr([v()],mr.prototype,"top",2);Wr([v()],mr.prototype,"left",2);Wr([v()],mr.prototype,"width",2);Wr([v()],mr.prototype,"height",2);Wr([v()],mr.prototype,"type",2);Wr([v()],mr.prototype,"right",2);Wr([v()],mr.prototype,"bottom",2);Wr([v()],mr.prototype,"maxX",2);Wr([v()],mr.prototype,"maxY",2);mr=Wr([H("edit-area")],mr);var kw=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,fn=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kw(e,t,s),s};let ls=class extends je{constructor(){super(...arguments),this.topInputRef=pe(),this.leftInputRef=pe()}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSerializableChange.delete(this.UUID);const t=this.analysis;this.top=t.top,this.left=t.left,this.maxX=t.file.width,this.maxY=t.file.height,t.onSerializableChange.set(this.UUID,i=>{this.top=i.top,this.left=i.left})}}handleInput(r,e){const t=r.target,i=parseInt(t.value);isNaN(i)||(e(i),this.analysis.onMoveOrResize.call(this.analysis))}render(){return u`

            <div class="table">

                <thermal-field label=${x(w.name)}>
                    <analysis-name .analysis=${this.analysis}></analysis-name>
                </thermal-field>

                <thermal-field label=${x(w.color)}>
                    <analysis-color .analysis=${this.analysis}></analysis-color>
                </thermal-field>

                <thermal-field label=${x(w.top)} hint=${x(w.fromto,{from:0,to:this.maxX})}>
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

                <thermal-field label=${x(w.left)} hint=${x(w.fromto,{from:0,to:this.maxX})}>
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
        
        `}};ls.styles=ne`
    
        .table {

            display: table;
            width: 100%;
        
        }
    
    `;fn([d()],ls.prototype,"analysis",2);fn([v()],ls.prototype,"top",2);fn([v()],ls.prototype,"left",2);fn([v()],ls.prototype,"maxX",2);fn([v()],ls.prototype,"maxY",2);ls=fn([H("edit-point")],ls);var Ow=Object.defineProperty,Aw=Object.getOwnPropertyDescriptor,Ho=(r,e,t,i)=>{for(var s=i>1?void 0:i?Aw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ow(e,t,s),s};let Wn=class extends je{updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&e.onSetName.delete(this.UUID);const t=this.analysis;this.name=t.name,this.type=t.getType(),t.onSetName.set(this.UUID,i=>{this.name=i})}}render(){return u`

            <thermal-dialog label="${x(w.editsth,{what:x(w[this.type])})}">
                <slot name="invoker" slot="invoker">
                    <thermal-button>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                            <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </thermal-button>
                </slot>

                <div slot="content">
                    ${this.analysis instanceof Sr?u`<edit-point .analysis=${this.analysis}></edit-point>`:u`<edit-area .analysis=${this.analysis}></edit-area>`}
                </div>

            </thermal-dialog>
        
        `}};Ho([d()],Wn.prototype,"analysis",2);Ho([v()],Wn.prototype,"name",2);Ho([v()],Wn.prototype,"type",2);Wn=Ho([H("file-analysis-edit")],Wn);var Ew=Object.defineProperty,Dw=Object.getOwnPropertyDescriptor,Dr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ew(e,t,s),s};let tr=class extends pt{constructor(){super(...arguments),this.hydrated=!1,this.graphWidth=0,this.graphHeight=0,this.container=pe(),this.graphRef=pe(),this.graphs={values:[[]],colors:[]},this.shadowLeft=0,this.shadowTop=0,this.shadowWidth=0,this.shadowHeight=0,this.graphSmooth=!1}getTourableRoot(){throw new Error("Method not implemented.")}onInstanceCreated(r){this.graphs=r.analysisData.value,r.analysisData.addListener(this.UUID,e=>{this.graphs=e}),this.container.value&&(this.graphWidth=this.container.value.clientWidth,new ResizeObserver(t=>{this.graphWidth=t[0].contentRect.width,this.graphHeight=t[0].contentRect.height,this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}).observe(this.container.value)),this.hydrated=!0}connectedCallback(){super.connectedCallback(),this.file&&(this.graphs=this.file.analysisData.value,this.file.analysisData.addListener(this.UUID,r=>{this.graphs=r}),this.hydrated=!0)}onFailure(){}update(r){super.update(r),this.graphRef.value&&(this.shadowLeft=this.graphRef.value.left,this.shadowTop=this.graphRef.value.top,this.shadowWidth=this.graphRef.value.w,this.shadowHeight=this.graphRef.value.h)}render(){var r;return((r=this.file)==null?void 0:r.timeline.isSequence)===!1?_:u`

            <div style="position: relative; background-color: white; height: 100%;">

            <div style="position: absolute; top:${this.shadowTop}px; left: ${this.shadowLeft}px; width: ${this.shadowWidth}px; height: ${this.shadowHeight}px;">
            ${this.currentFrame&&u`
                <div style="position: absolute; height: 100%; background-color: #eee; left: 0px; width: ${this.currentFrame.percentage}%"></div>
            `}

                ${this.cursor&&u`
                    <div style="position: absolute; height: 100%; width: 1px; background-color: black; left: ${this.cursor.percentage}%"></div>
                `}
            </div>
        
            <div ${ve(this.container)} style="height: 100%; ">
                ${this.graphs.colors.length>0?u`<thermal-chart 
                        ${ve(this.graphRef)}
                        type="line" 
                        .data=${this.graphs.values} 
                        .options=${{colors:this.graphs.colors,curveType:this.graphSmooth?"function":"default",legend:{position:"bottom"},hAxis:{title:x(w.time),format:"m:ss:SSS"},vAxis:{title:x(w.temperature)+" °C"},width:this.graphWidth,height:this.graphHeight,chartArea:{width:"80%"},backgroundColor:{fill:"transparent"}}}
                        ></thermal-chart>`:_}
            </div>

            

            </div>
        
        `}};tr.styles=ne`

        :host {
            background: white;
        }
    
        google-chart {
            width: 100%;
            height: 100%;
        }
    `;Dr([v()],tr.prototype,"hydrated",2);Dr([d({reflect:!0})],tr.prototype,"graphWidth",2);Dr([d({reflect:!0})],tr.prototype,"graphHeight",2);Dr([v()],tr.prototype,"graphs",2);Dr([le({context:aa,subscribe:!0})],tr.prototype,"currentFrame",2);Dr([le({context:Lh,subscribe:!0})],tr.prototype,"cursor",2);Dr([le({context:mp,subscribe:!0})],tr.prototype,"cursorSetter",2);Dr([v()],tr.prototype,"shadowLeft",2);Dr([v()],tr.prototype,"shadowTop",2);Dr([v()],tr.prototype,"shadowWidth",2);Dr([v()],tr.prototype,"shadowHeight",2);Dr([le({context:Ao,subscribe:!0})],tr.prototype,"graphSmooth",2);tr=Dr([H("file-analysis-graph")],tr);const ti="interactive-analysis-context";var Lw=Object.defineProperty,Rw=Object.getOwnPropertyDescriptor,ri=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lw(e,t,s),s};let Cr=class extends je{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(e){if(super.updated(e),e.has("analysis")){const t=e.get("analysis");t&&(t.onDeselected.delete(this.UUID),t.onSelected.delete(this.UUID),t.onValues.delete(this.UUID),t.onMoveOrResize.delete(this.UUID),t.graph.onGraphActivation.delete(this.UUID),t.onSetInitialColor.delete(this.UUID),t.onSetName.delete(this.UUID));const i=this.analysis;this.name=i.name,this.selected=i.selected,this.color=i.initialColor;const s=n=>n instanceof ur?i.width+"x"+i.height:"1x1";this.dimension=s(i),this.value={min:i.min,max:i.max,avg:i.avg},i.file.timeline.isSequence?this.may=i instanceof Sr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:i.graph.state.MIN,max:i.graph.state.MAX,avg:i.graph.state.AVG},i.onSerializableChange.set(this.UUID,n=>{this.dimension=s(n)}),i.onValues.set(this.UUID,(n,a,o)=>{this.value={min:n,max:a,avg:o}}),i.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{this.graph={min:n,max:a,avg:o}}),i.onSelected.set(this.UUID,()=>{this.selected=!0}),i.onDeselected.set(this.UUID,()=>{this.selected=!1}),i.onSetInitialColor.set(this.UUID,n=>{this.color=n}),i.onSetName.set(this.UUID,n=>{this.name=n})}}valueOrNothing(e){return e===void 0?"-":e.toFixed(2)+" °C"}renderCell(e,t,i,s){return u`
            <td class="${t?"may":"mayNot"} ${i?"active":"inactive"}">

                ${t?u`
                        <button
                            @click=${s}
                            style="background-color: ${i?this.color:"transparent"};"
                            title="${i?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(e)}
                        </button>
                    `:this.valueOrNothing(e)}

            </td>
        `}render(){return u`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
            @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
        >
            ${this.interactiveanalysis===!0?u`<u aria-hidden="true"></u>`:_}
            <b aria-hidden="true" style="background-color: ${this.color}"></b>
            <span>${this.analysis.name}</span>
        </td>

        ${this.renderCell(this.value.avg,this.may.avg,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}
        ${this.renderCell(this.value.min,this.may.min,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min)})}
        ${this.renderCell(this.value.max,this.may.max,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?u`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5" style="width: 1em; translateY:.5em">
                <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
            </svg>
            </thermal-button>

            <!--

            ${this.analysis.getType()!=="point"?u`<thermal-button 
                    @click=${()=>{}}
                    @mouseenter=${()=>{this.analysis.min&&this.analysis.max&&this.setRegistryHighlight&&this.setRegistryHighlight({from:this.analysis.min,to:this.analysis.max})}}
                    @mouseleave=${()=>{this.setRegistryHighlight&&this.setRegistryHighlight(void 0)}}
                    >
                            ${x(w.range)}
                        </thermal-button>`:_}

            -->
            

        
        </td>`:_}
        
        `}};Cr.styles=ne`
    
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

    `;ri([d()],Cr.prototype,"analysis",2);ri([le({context:ti,subscribe:!0})],Cr.prototype,"interactiveanalysis",2);ri([v()],Cr.prototype,"value",2);ri([v()],Cr.prototype,"graph",2);ri([v()],Cr.prototype,"may",2);ri([v()],Cr.prototype,"dimension",2);ri([v()],Cr.prototype,"color",2);ri([d({type:Boolean,reflect:!0,attribute:!0})],Cr.prototype,"selected",2);ri([v()],Cr.prototype,"name",2);ri([le({context:na,subscribe:!0})],Cr.prototype,"setRegistryHighlight",2);Cr=ri([H("file-analysis-table-row")],Cr);var Tw=Object.defineProperty,Mw=Object.getOwnPropertyDescriptor,da=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tw(e,t,s),s};let _s=class extends pt{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(e){console.log(e)}onInstanceCreated(e){this.hydrate(e)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(e){super.updated(e),e.has("file")&&this.file&&this.hydrate(this.file)}hydrate(e){e.analysis.addListener(this.UUID,t=>{this.analysis=t}),e.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length}),e.analysisData.onGraphsPresence.set(this.UUID,t=>{this.hasHighlightedData=t}),this.allSelected=e.analysis.layers.all.length===e.analysis.layers.selectedOnly.length,this.analysis=e.analysis.value,this.hasHighlightedData=e.analysisData.hasActiveGraphs}render(){return this.analysis.length===0||this.file===void 0?_:u`

        <div class="overflow" ${ve(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var e,t;this.allSelected?(e=this.file)==null||e.analysis.layers.deselectAll():(t=this.file)==null||t.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?u`<u aria-hidden="true"></u>`:_}
                            <span>${x(w.analysis)}</span>
                            ${this.hasHighlightedData?u`<button @click=${()=>{var e;(e=this.file)==null||e.analysisData.downloadData()}} title=${x(w.downloadgraphdataascsv)}>CSV</button>`:_}
                        </th>
                        <th>${x(w.avg)}</th>
                        <th>${x(w.min)}</th>
                        <th>${x(w.max)}</th>
                        <th>${x(w.size)}</th>
                        ${this.interactiveanalysis===!0?u`<th></th>`:_}
                    </tr>
                
                </thead>

                <tbody>

                    ${this.analysis.map(e=>u`
                            <file-analysis-table-row
                                .analysis=${e}
                            ></file-analysis-table-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};_s.styles=ne`
    
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

        



    `;da([le({context:ti,subscribe:!0}),d()],_s.prototype,"interactiveanalysis",2);da([v()],_s.prototype,"analysis",2);da([v()],_s.prototype,"allSelected",2);da([v()],_s.prototype,"hasHighlightedData",2);_s=da([H("file-analysis-table")],_s);var Iw=Object.defineProperty,Uw=Object.getOwnPropertyDescriptor,ua=(r,e,t,i)=>{for(var s=i>1?void 0:i?Uw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Iw(e,t,s),s};let Cs=class extends pt{constructor(){super(...arguments),this.container=pe(),this.interactiveanalysis=!1,this.analysis=[],this.allSelected=!1,this.hasHighlightedData=!1}getTourableRoot(){return this.container.value}onFailure(r){console.log(r)}onInstanceCreated(r){this.hydrate(r)}connectedCallback(){super.connectedCallback(),this.file&&this.hydrate(this.file)}updated(r){super.updated(r),r.has("file")&&this.file&&this.hydrate(this.file)}hydrate(r){r.analysis.addListener(this.UUID,e=>{this.analysis=e}),r.analysis.layers.onSelectionChange.add(this.UUID,()=>{this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length}),r.analysisData.onGraphsPresence.set(this.UUID,e=>{this.hasHighlightedData=e}),this.allSelected=r.analysis.layers.all.length===r.analysis.layers.selectedOnly.length,this.analysis=r.analysis.value,this.hasHighlightedData=r.analysisData.hasActiveGraphs}renderHeader(){return u`<tr>
            <td>${x(w.analysis)}</td>
            <td>${x(w.min)}</td>
            <td>${x(w.max)}</td>
            <td>${x(w.avg)}</td>
        </tr>`}renderRow(r){var e,t,i;return u`<tr>
            <td>
                ${r.name}
                <file-analysis-edit .analysis=${r}></file-analysis-edit>
            </td>
            <td>${(e=r.min)==null?void 0:e.toFixed(2)}</td>
            <td>${(t=r.max)==null?void 0:t.toFixed(2)}</td>
            <td>${(i=r.avg)==null?void 0:i.toFixed(2)}</td>
        </tr>`}render(){return this.analysis.length===0||this.file===void 0?_:u`

        <div class="overflow" ${ve(this.container)}>

            <table>


                <caption>Table of analysis currently set on the file ${this.file.fileName}.</caption>

                <thead>

                    <!--

                    <tr>
                        <th
                            class="all ${this.allSelected?"yes":"no"} ${this.interactiveanalysis?"interactive":""}"
                            @click=${()=>{var r,e;this.allSelected?(r=this.file)==null||r.analysis.layers.deselectAll():(e=this.file)==null||e.analysis.layers.selectAll()}}
                        >
                            ${this.interactiveanalysis?u`<u aria-hidden="true"></u>`:_}
                            <span>${x(w.analysis)}</span>
                            ${this.hasHighlightedData?u`<button @click=${()=>{var r;(r=this.file)==null||r.analysisData.downloadData()}} title=${x(w.downloadgraphdataascsv)}>CSV</button>`:_}
                        </th>
                        <th>${x(w.avg)}</th>
                        <th>${x(w.min)}</th>
                        <th>${x(w.max)}</th>
                        <th>${x(w.size)}</th>
                        ${this.interactiveanalysis===!0?u`<th></th>`:_}
                    </tr>

                    -->

                    ${this.renderHeader()}
                
                </thead>

                <tbody>

                    ${this.analysis.map(r=>u`
                    <file-analysis-overview-row
                        .analysis=${r}
                    ></file-analysis-overview-row>
                        `)}
                
                </tbody>

                </table>

            </div>

        <slot name="tour"></slot>
        `}};Cs.styles=ne`
    
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

        



    `;ua([le({context:ti,subscribe:!0}),d()],Cs.prototype,"interactiveanalysis",2);ua([v()],Cs.prototype,"analysis",2);ua([v()],Cs.prototype,"allSelected",2);ua([v()],Cs.prototype,"hasHighlightedData",2);Cs=ua([H("file-analysis-overview")],Cs);var zw=Object.defineProperty,Fw=Object.getOwnPropertyDescriptor,xi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zw(e,t,s),s};let zr=class extends je{constructor(){super(...arguments),this.interactiveanalysis=!1,this.value={min:void 0,max:void 0,avg:void 0},this.graph={min:!1,max:!1,avg:!1},this.may={min:!1,max:!1,avg:!1},this.selected=!1}updated(r){if(super.updated(r),r.has("analysis")){const e=r.get("analysis");e&&(e.onDeselected.delete(this.UUID),e.onSelected.delete(this.UUID),e.onValues.delete(this.UUID),e.onMoveOrResize.delete(this.UUID),e.graph.onGraphActivation.delete(this.UUID),e.onSetInitialColor.delete(this.UUID),e.onSetName.delete(this.UUID));const t=this.analysis;this.name=t.name,this.selected=t.selected,this.color=t.initialColor;const i=s=>s instanceof ur?t.width+"x"+t.height:"1x1";this.dimension=i(t),this.value={min:t.min,max:t.max,avg:t.avg},t.file.timeline.isSequence?this.may=t instanceof Sr?{avg:!0,min:!1,max:!1}:{avg:!0,min:!0,max:!0}:this.may={avg:!1,min:!1,max:!1},this.graph={min:t.graph.state.MIN,max:t.graph.state.MAX,avg:t.graph.state.AVG},t.onSerializableChange.set(this.UUID,s=>{this.dimension=i(s)}),t.onValues.set(this.UUID,(s,n,a)=>{this.value={min:s,max:n,avg:a}}),t.graph.onGraphActivation.set(this.UUID,(s,n,a)=>{this.graph={min:s,max:n,avg:a}}),t.onSelected.set(this.UUID,()=>{this.selected=!0}),t.onDeselected.set(this.UUID,()=>{this.selected=!1}),t.onSetInitialColor.set(this.UUID,s=>{this.color=s}),t.onSetName.set(this.UUID,s=>{this.name=s})}}valueOrNothing(r){return r===void 0?"-":r.toFixed(2)+" °C"}renderCell(r,e,t,i){return u`
            <td class="${e?"may":"mayNot"} ${t?"active":"inactive"}">

                ${e?u`
                        <button
                            @click=${i}
                            style="background-color: ${t?this.color:"transparent"};"
                            title="${t?"Hide graph":"Show graph"}"
                        >
                            ${this.valueOrNothing(r)}
                        </button>
                    `:this.valueOrNothing(r)}

            </td>
        `}render(){return u`
        
        <td 
            class="name ${this.selected?"selected":"notSelected"} ${this.interactiveanalysis?"interactive":""}"
        >
            <span
                class="name-text"
                @click=${()=>{this.interactiveanalysis!==!1&&(this.selected?this.analysis.setDeselected(!0):this.analysis.setSelected(!1,!0))}}
            >

                ${this.interactiveanalysis===!0?u`<u aria-hidden="true"></u>`:_}
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
        ${this.renderCell(this.value.min,this.analysis instanceof ur,this.graph.min,()=>{this.analysis.graph.setMinActivation(!this.graph.min),this.log("Graph analysis min",this.graph.min)})}
        ${this.renderCell(this.value.max,this.analysis instanceof ur,this.graph.max,()=>{this.analysis.graph.setMaxActivation(!this.graph.max)})}

         ${this.renderCell(this.value.avg,!0,this.graph.avg,()=>{this.analysis.graph.setAvgActivation(!this.graph.avg)})}

        <!--
        <td>${this.dimension}</td>
        ${this.interactiveanalysis===!0?u`<td>
            <file-analysis-edit .analysis=${this.analysis}></file-analysis-edit>
            <thermal-button @click=${()=>{this.analysis.file.analysis.layers.removeAnalysis(this.analysis.key)}}>${x(w.remove)}</thermal-button>
        </td>`:_}

        -->
        
        `}};zr.styles=ne`
    
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

    `;xi([d()],zr.prototype,"analysis",2);xi([le({context:ti,subscribe:!0})],zr.prototype,"interactiveanalysis",2);xi([v()],zr.prototype,"value",2);xi([v()],zr.prototype,"graph",2);xi([v()],zr.prototype,"may",2);xi([v()],zr.prototype,"dimension",2);xi([v()],zr.prototype,"color",2);xi([d({type:Boolean,reflect:!0,attribute:!0})],zr.prototype,"selected",2);xi([v()],zr.prototype,"name",2);zr=xi([H("file-analysis-overview-row")],zr);var jw=Object.defineProperty,Nw=Object.getOwnPropertyDescriptor,Bi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Nw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&jw(e,t,s),s};let Jr=class extends pt{constructor(){super(...arguments),this.mayHaveGraph=!1,this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1,this.graphRef=pe(),this.graphWidth=0,this.graphHeight=0}onInstanceCreated(r){this.mayHaveGraph=r.timeline.isSequence,r.analysis.layers.onAdd.set(this.UUID,e=>{var i,s;this.hasAnalysis===!1&&(this.hasAnalysis=!0);const t=()=>{this.isDrawingAnalysis=!1};(s=(i=e.file.dom)==null?void 0:i.listenerLayer)==null||s.getLayerRoot().addEventListener("pointerup",t),e.graph.onGraphActivation.set(this.UUID,(n,a,o)=>{if(n||a||o)this.hasGraph=!0;else{const l=e.file.analysis.value.reduce((h,f)=>h===!0?h:f.graph.state.MIN||f.graph.state.MAX||f.graph.state.AVG,!1);this.hasGraph=l}})}),r.analysis.layers.onRemove.set(this.UUID,()=>{this.hasAnalysis===!0&&r.analysis.layers.size===0&&(this.hasAnalysis=!1,this.isDrawingAnalysis=!1,this.hasGraph=!1)})}onFailure(){}getTourableRoot(){}updated(r){super.updated(r),r.has("hasGraph")&&(this.observer&&this.graphRef.value&&(this.observer.unobserve(this.graphRef.value),delete this.observer),this.graphRef.value&&this.hasGraph===!0&&(this.observer=new ResizeObserver(e=>{const t=e[0];t!==void 0&&(this.graphWidth=t.contentRect.width,this.graphHeight=t.contentRect.height)}),this.observer.observe(this.graphRef.value)))}renderButtons(){const r=this.file!==void 0?Object.values(this.file.group.tool.tools).filter(e=>e instanceof xo):[];return u`
            <div class="buttons">
                ${r.map(e=>u`
                            <thermal-button @click=${()=>{var t;this.isDrawingAnalysis=!0,(t=this.file)==null||t.group.tool.selectTool(e)}}>
                                <div style="display: flex; align-items: center; gap: 10px">
                                    <div style="width: 1.5em; display: inline-block;">${Dt(e.icon)}</div>
                                    <div>${x(w[e.name])}</div>
                                </div>
                            </thermal-button>
                        `)}
            </div>
        
        `}renderCurrentTooltip(){return u`${x(w[this.manager.tool.value.description])}`}renderAddAnalysis(){return u`<div class="addanalysis">

            <div>
                <strong>${x(w.analysis)}</strong>
            </div>

            <div>${x(w.analysishint)}</div>

            ${this.isDrawingAnalysis===!0?this.renderCurrentTooltip():this.renderButtons()}
        </div>`}renderGraph(){return this.mayHaveGraph?this.hasGraph===!0?u`<div class="graph" ${ve(this.graphRef)}>
                <file-analysis-graph graphWidth=${this.graphWidth} graphHeight=${this.graphHeight}></file-analysis-graph>
            </div>`:this.hasAnalysis===!0?u`<div class="graph graph-prompt">
                    <div>
                        <strong>${x(w.graph)}</strong>
                    </div>
                    <div class="hint">${Dt(x(w.graphhint2))}</div>
                </div>`:u`<div class="graph graph-prompt">
                    <div>
                        <strong>${x(w.graph)}</strong>
                    </div>
                    <div class="hint">${x(w.graphhint1)}</div>
                </div>`:_}render(){return u`
            <div class="container ${this.mayHaveGraph===!0?"may":"may-not"}">

            <div class="analysis">
                ${this.hasAnalysis===!1||this.isDrawingAnalysis===!0?this.renderAddAnalysis():u`<file-analysis-table></file-analysis-table>`}
            </div>
            ${this.renderGraph()}

            </div>

        `}};Jr.styles=ne`

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
    
    `;Bi([v()],Jr.prototype,"mayHaveGraph",2);Bi([v()],Jr.prototype,"hasAnalysis",2);Bi([v()],Jr.prototype,"isDrawingAnalysis",2);Bi([v()],Jr.prototype,"hasGraph",2);Bi([v()],Jr.prototype,"graphRef",2);Bi([v()],Jr.prototype,"graphWidth",2);Bi([v()],Jr.prototype,"graphHeight",2);Bi([v()],Jr.prototype,"observer",2);Jr=Bi([H("file-analysis-complex")],Jr);var Ww=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,Bw=(r,e,t,i)=>{for(var s=i>1?void 0:i?Hw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ww(e,t,s),s};let Rd=class extends $s{enter(){}leave(){}action(){if(this.file){const r=document.createElement("a");r.href=this.file.thermalUrl,r.download=this.file.fileName,r.click()}}getDefaultLabel(){return"lrc"}};Rd=Bw([H("file-download-lrc")],Rd);var Gw=Object.defineProperty,Vw=Object.getOwnPropertyDescriptor,Yh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Vw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gw(e,t,s),s};let co=class extends $s{enter(){}leave(){}action(){this.file&&this.file.export.downloadPng({width:this.pngWidth,fontSize:this.pngFs})}getDefaultLabel(){return"png"}};Yh([le({context:Os,subscribe:!0})],co.prototype,"pngWidth",2);Yh([le({context:As,subscribe:!0})],co.prototype,"pngFs",2);co=Yh([H("file-download-png")],co);var Yw=Object.defineProperty,qw=Object.getOwnPropertyDescriptor,pa=(r,e,t,i)=>{for(var s=i>1?void 0:i?qw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Yw(e,t,s),s};let tn=class extends $s{enter(){this.onEnter&&this.file&&this.onEnter(this.file)}leave(){this.onLeave&&this.file&&this.onLeave(this.file)}action(){this.onAction&&this.file&&this.onAction(this.file)}getDefaultLabel(){return this.label}};pa([d({type:String})],tn.prototype,"label",2);pa([d({type:Object})],tn.prototype,"onEnter",2);pa([d({type:Object})],tn.prototype,"onLeave",2);pa([d({type:Object})],tn.prototype,"onAction",2);tn=pa([H("file-button")],tn);var Xw=Object.defineProperty,Kw=Object.getOwnPropertyDescriptor,Rp=(r,e,t,i)=>{for(var s=i>1?void 0:i?Kw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Xw(e,t,s),s};let ih=class extends $s{enter(){this.setter&&this.file&&this.setter({from:this.file.min,to:this.file.max})}leave(){this.setter&&this.setter(void 0)}action(){this.file&&(this.log(this.file.min,this.file.max),this.file.group.registry.range.imposeRange({from:this.file.min,to:this.file.max}))}getDefaultLabel(){return x(w.range).toLowerCase()}};Rp([le({context:na,subscribe:!0})],ih.prototype,"setter",2);ih=Rp([H("file-range-propagator")],ih);var Zw=Object.defineProperty,Jw=Object.getOwnPropertyDescriptor,qh=(r,e,t,i)=>{for(var s=i>1?void 0:i?Jw(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Zw(e,t,s),s};let Hn=class extends je{constructor(){super(...arguments),this.expanded=!1}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}updated(r){super.updated(r),r.has("expanded")&&(this.expanded===!0?this.classList.add("expanded"):this.classList.remove("expanded"))}render(){return u`
            <div class="backdrop" @click=${()=>this.collapse()}></div>
            <div class="container">
                <button class="default" @click=${()=>{this.toggle()}}>${this.label??"..."}</button>
                <nav class="dropdown">
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
        `}};Hn.styles=ne`
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



    `;qh([d({type:String,reflect:!0})],Hn.prototype,"label",2);qh([v()],Hn.prototype,"expanded",2);Hn=qh([H("file-dropdown")],Hn);const ic=class ic extends pt{constructor(){super(...arguments),this.tabIndex=1}onInstanceCreated(){}onFailure(){}getTourableRoot(){}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.action.bind(this)),this.addEventListener("mouseenter",this.enter.bind(this)),this.addEventListener("mouseleave",this.leave.bind(this)),this.addEventListener("focus",this.enter.bind(this)),this.addEventListener("blur",this.leave.bind(this))}render(){return u`
            <button id="${this.UUID}" tabindex="0">${this.getIcon()}</button>
            <div class="label">
                <label class="label-inner" for="#${this.UUID}">${this.getLabel()}</label>
            </div>
        `}};ic.styles=ne`
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

    `;let uo=ic;var Qw=Object.defineProperty,ex=Object.getOwnPropertyDescriptor,Tp=(r,e,t,i)=>{for(var s=i>1?void 0:i?ex(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qw(e,t,s),s};let sh=class extends uo{enter(){}action(){this.onaction&&this.file&&this.onaction(this.file)}leave(){}getLabel(){return x(w.detail)}getIcon(){return u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
            <path fill-rule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd" />
        </svg>`}};Tp([d({type:Object})],sh.prototype,"onaction",2);sh=Tp([H("file-detail-icon")],sh);var tx=Object.defineProperty,rx=Object.getOwnPropertyDescriptor,Mp=(r,e,t,i)=>{for(var s=i>1?void 0:i?rx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&tx(e,t,s),s};let nh=class extends uo{enter(){}action(){this.file&&(this.file.group.registry.opacity.value===1?this.file.group.registry.opacity.imposeOpacity(0):this.file.group.registry.opacity.imposeOpacity(1))}leave(){}getLabel(){return x(w.togglevisibleimage)}getIcon(){return u`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
        </svg>`}render(){return this.file===void 0||this.file.visibleUrl===void 0?_:super.render()}};Mp([d({type:Object})],nh.prototype,"onaction",2);nh=Mp([H("file-opacity-icon")],nh);var ix=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,Bo=(r,e,t,i)=>{for(var s=i>1?void 0:i?sx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ix(e,t,s),s};let rn=class extends pt{onInstanceCreated(e){}onFailure(e){}getTourableRoot(){}render(){return u`

            <header>
                <h2><file-label label="${Q(this.label)}" grouping="${Q(this.grouping)}"></file-label></h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <file-detail-icon .onaction=${Q(this.ondetail)}></file-detail-icon>
                    <file-range-propagator></file-range-propagator>
                    <file-dropdown label="...">
                        <file-info-button>
                            <file-button slot="invoker" label=${x(w.info).toLowerCase()}></file-button>
                        </file-info-button>
                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                    </file-dropdown>
                </div>
            </header>

            <main>
                <file-canvas></file-canvas>
                <file-timeline></file-timeline>
                <file-analysis-overview></file-analysis-overview>
            </main>
        
    `}};rn.styles=ne`
    
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
    
    `;Bo([d({type:Object})],rn.prototype,"ondetail",2);Bo([d({type:String})],rn.prototype,"label",2);Bo([d({type:String})],rn.prototype,"grouping",2);rn=Bo([H("file-thumbnail")],rn);var nx=Object.defineProperty,ax=Object.getOwnPropertyDescriptor,Go=(r,e,t,i)=>{for(var s=i>1?void 0:i?ax(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&nx(e,t,s),s};let sn=class extends pt{onInstanceCreated(r){}onFailure(r){}getTourableRoot(){}render(){return u`

            <header>
                <thermal-button variant="foreground" @click=${()=>{this.onback&&this.onback()}}>x</thermal-button>

                ${this.label!==void 0?u`
                    <thermal-button variant="background" interactive="false">${this.label}</thermal-button>
                `:_}

                <thermal-button variant="background" interactive="false">
                    <file-label></file-label>
                </thermal-button>

                <file-info-button></file-info-button>
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
        
    `}};sn.styles=ne`
    
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
    
    `;Go([d({type:Object})],sn.prototype,"onback",2);Go([d({type:String})],sn.prototype,"label",2);Go([d({type:String})],sn.prototype,"grouping",2);sn=Go([H("file-detail")],sn);var ox=Object.defineProperty,lx=Object.getOwnPropertyDescriptor,Si=(r,e,t,i)=>{for(var s=i>1?void 0:i?lx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ox(e,t,s),s};let Fr=class extends pt{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!1}getTourableRoot(){}onInstanceCreated(r){this.recorded=ot.human(r.timestamp)}onFailure(){}render(){return u`
        <thermal-app author=${Q(this.author)} recorded=${Q(this.recorded)} license=${Q(this.license)} showfullscreen="true">

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>
  
          <registry-palette-dropdown slot="bar"></registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?u`<registry-opacity-slider slot="bar" style="width:4rem"></registry-opacity-slider>`:_}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${x(w.displaysettings)}>
                <thermal-button slot="invoker" tourstepid="sth3">${x(w.displaysettings)}</thermal-button>
                <div slot="content">
                  
                  <thermal-field 
                    label=${x(w.filerendering)} 
                    hint=${x(w.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${x(w.adjusttimescale)}
                    hint=${x(w.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${x(w.colourpalette)}
                    hint=${x(w.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?u` <thermal-field 
                    label="${x(w.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:_}

                  ${this.file&&this.file.timeline.isSequence?u` <thermal-field 
                    label="${x(w.graphlines)}"
                    hint=${x(w.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:_}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown ></file-download-dropdown>
              ${this.showembed===!0?u`<file-share-button ></file-share-button>`:_}
            
              ${this.showabout===!0?u`<app-info-button ></app-info-button>`:_}

            </thermal-bar>
          </div>
            ${this.interactiveanalysis===!0?u`<group-tool-buttons slot="pre"></group-tool-buttons>`:_}
            
            ${this.showhistogram===!0?u`<registry-histogram slot="pre"></registry-histogram>`:_}

            <registry-range-slider slot="pre"></registry-range-slider>
            <registry-ticks-bar slot="pre" placement="top"></registry-ticks-bar>
            

            <file-canvas></file-canvas>
            <file-timeline slot="post"></file-timeline>
            <file-analysis-table slot="post"></file-analysis-table>
            
            ${this.file&&this.file.timeline.isSequence?u`<file-analysis-graph slot="post"></file-analysis-graph>`:_}

          <slot name="content" slot="content"></slot>

        </thermal-app>
    `}};Fr.styles=ne`

    thermal-app[fullscreen="on"]::part(app-content) {
      
      box-sizing: border-box;
      width: 100%;
      
    }

    group-tool-buttons {
      padding-bottom: calc( var(--thermal-gap) / 2 );
    }
  
  `;Si([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],Fr.prototype,"showembed",2);Si([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],Fr.prototype,"showabout",2);Si([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],Fr.prototype,"showfullscreen",2);Si([d({type:String,reflect:!0,converter:Ne(!0)})],Fr.prototype,"showhistogram",2);Si([le({context:ti,subscribe:!0})],Fr.prototype,"interactiveanalysis",2);Si([d()],Fr.prototype,"author",2);Si([d()],Fr.prototype,"recorded",2);Si([d()],Fr.prototype,"license",2);Si([d()],Fr.prototype,"label",2);Fr=Si([H("file-app")],Fr);var hx=Object.defineProperty,rt=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&hx(e,t,s),s};class Ke extends je{constructor(){super(...arguments),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.hasGraph=!1,this.hasAnalysis=!1,this.isSequence=!1,this.fileProviderRef=pe()}firstUpdated(e){super.firstUpdated(e),this.hydrateApplisteners(),zi(this)}hydrateApplisteners(){this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.set(this.UUID,e=>{e.timeline.isSequence!==this.isSequence&&(this.isSequence=e.timeline.isSequence);const t=e.analysisData.value.values.length>1;t!==this.hasGraph&&(this.hasGraph=t);const i=e.analysis.layers.all.length>0;i!==this.hasAnalysis&&(this.hasAnalysis=i),e.timeline.callbackdPlaybackSpeed.set(this.UUID,s=>{this.speed!==s&&(this.speed=s)}),e.group.registry.range.addListener(this.UUID+"mirror_changes",s=>{s!==void 0?(this.from!==s.from&&(this.from=s.from),this.to!==s.to&&(this.to=s.to)):s===void 0&&(this.from!==void 0&&(this.from=void 0),this.to!==void 0&&(this.to=void 0))}),e.group.registry.opacity.addListener(this.UUID+"mirror_changes",s=>{s!==this.opacity&&(this.opacity=s)}),e.group.registry.palette.addListener(this.UUID+"mirror_changes",s=>{s!==this.palette&&(this.palette=s)}),e.slots.onSlot1Serialize.set(this.UUID,s=>{s!==this.analysis1&&(this.analysis1=s)}),e.slots.onSlot2Serialize.set(this.UUID,s=>{s!==this.analysis2&&(this.analysis2=s)}),e.slots.onSlot3Serialize.set(this.UUID,s=>{s!==this.analysis3&&(this.analysis3=s)}),e.slots.onSlot4Serialize.set(this.UUID,s=>{s!==this.analysis4&&(this.analysis4=s)}),e.slots.onSlot5Serialize.set(this.UUID,s=>{s!==this.analysis5&&(this.analysis5=s)}),e.slots.onSlot6Serialize.set(this.UUID,s=>{s!==this.analysis6&&(this.analysis6=s)}),e.slots.onSlot7Serialize.set(this.UUID,s=>{s!==this.analysis7&&(this.analysis7=s)}),e.analysisData.addListener(this.UUID,s=>{const n=s.values.length>1;this.hasGraph!==n&&(this.hasGraph=n)}),e.analysis.addListener(this.UUID,s=>{const n=s.length>0;this.hasAnalysis!==n&&(this.hasAnalysis=n)})})}}rt([d({type:String,reflect:!0})],Ke.prototype,"url");rt([d({type:String,reflect:!0})],Ke.prototype,"visible");rt([d({type:String,reflect:!0,attribute:!0})],Ke.prototype,"palette");rt([d({type:Number,reflect:!0,attribute:!0})],Ke.prototype,"opacity");rt([d({type:Number,reflect:!0})],Ke.prototype,"from");rt([d({type:Number,reflect:!0})],Ke.prototype,"to");rt([d()],Ke.prototype,"author");rt([d()],Ke.prototype,"recorded");rt([d()],Ke.prototype,"license");rt([d()],Ke.prototype,"label");rt([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Ke.prototype,"showembed");rt([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Ke.prototype,"showabout");rt([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Ke.prototype,"showtutorial");rt([d({type:String,reflect:!1,converter:Ne(!0)})],Ke.prototype,"showfullscreen");rt([d({type:String,reflect:!0,converter:Ne(!0)})],Ke.prototype,"showhistogram");rt([V({context:ti}),d({type:String,reflect:!0,converter:Ne(!0)})],Ke.prototype,"interactiveanalysis");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis1");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis2");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis3");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis4");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis5");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis6");rt([d({type:String,reflect:!0})],Ke.prototype,"analysis7");rt([d({type:String,reflect:!0})],Ke.prototype,"ms");rt([d({type:String,reflect:!0})],Ke.prototype,"speed");rt([d({type:String,reflect:!0})],Ke.prototype,"autoclear");rt([v()],Ke.prototype,"hasGraph");rt([v()],Ke.prototype,"hasAnalysis");rt([v()],Ke.prototype,"isSequence");rt([V({context:gi}),d({reflect:!0,converter:Fi})],Ke.prototype,"locale");var cx=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,ux=(r,e,t,i)=>{for(var s=i>1?void 0:i?dx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cx(e,t,s),s};let Td=class extends Ke{render(){return this.url===""?_:u`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}"
        from=${Q(this.from)}
        to=${Q(this.to)}
        opacity=${Q(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}" autoclear=${this.autoclear}>

          <file-provider 
            thermal="${this.url}" 
            visible=${Q(this.visible)}
            analysis1=${Q(this.analysis1)}
            analysis2=${Q(this.analysis2)}
            analysis3=${Q(this.analysis3)}
            analysis4=${Q(this.analysis4)}
            analysis5=${Q(this.analysis5)}
            analysis6=${Q(this.analysis6)}
            analysis7=${Q(this.analysis7)}
            speed=${Q(this.speed)}
            autoclear=${this.autoclear}
          >

              <file-app 
                author=${Q(this.author)} 
                recorded=${Q(this.recorded)} 
                license=${Q(this.license)}
                label=${Q(this.label)}  
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


    
    `}};Td=ux([H("thermal-file-app")],Td);class px{constructor(e){this.steps=e,this.onStepInternalActivation=new ie}get currentStepId(){return this._currentStepId}get currentStepIndex(){if(this._currentStepId!==void 0)return this.steps.findIndex(e=>e.ID===this._currentStepId)}get currentStepObject(){if(this._currentStepId===void 0)return;const e=this.currentStepIndex;if(e!==void 0)return this.steps[e]}get nextStepIndex(){const e=this.currentStepIndex;if(e!==void 0&&e<this.steps.length)return e+1}get previousStepIndex(){const e=this.currentStepIndex;if(e&&e>0)return e-1}get nextStep(){const e=this.nextStepIndex;if(e!==void 0)return this.steps[e]}get previousStep(){const e=this.previousStepIndex;if(e!==void 0)return this.steps[e]}setStepById(e){e!==this._currentStepId&&(this._currentStepId=e,this.onStepInternalActivation.call(this.currentStepObject))}setStepByDefinition(e){e==null||e.ID,this.currentStepId,this._currentStepId=e==null?void 0:e.ID,this.onStepInternalActivation.call(e)}next(){this.setStepByDefinition(this.nextStep)}previous(){this.setStepByDefinition(this.previousStep)}first(){this.setStepByDefinition(this.steps[0])}hasNextStep(e){const t=this.steps.indexOf(e);return t===-1?!1:t+1<this.steps.length}hasPrevStep(e){return!(this.steps.indexOf(e)<=0)}stepIndex(e){return{index:this.steps.indexOf(e)+1,of:this.steps.length}}}class Xh{constructor(e){this._active=!1,this.onTourActivationStatus=new ie,this.onStepActivation=new ie,this.storage=new px(e),this.storage.onStepInternalActivation.set("__internal_observer",t=>{var i;this._active===!0&&(t==null?void 0:t.ID)!==((i=this.current)==null?void 0:i.ID)&&(t&&(t.props={hasNext:this.storage.hasNextStep(t),hasPrev:this.storage.hasPrevStep(t),num:this.storage.stepIndex(t).index}),this._current=t,this.onStepActivation.call(t))})}get active(){return this._active}get current(){return this._current}get steps(){return this.storage.steps}static create(e){return new Xh(e)}activate(e=!1){this.active!==!0&&(this._active=!0,this.onTourActivationStatus.call(!0),e===!0||this.current===void 0?this.storage.first():this.storage.setStepByDefinition(this.current))}deactivate(){this.active!==!1&&(this._active=!1,this.onTourActivationStatus.call(!1),this._current=void 0,this.onStepActivation.call(void 0))}reset(){return this.storage.first(),this}next(){return this.storage.next(),this}previous(){return this.storage.previous(),this}}var fx=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,Nt=(r,e,t,i)=>{for(var s=i>1?void 0:i?gx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fx(e,t,s),s};let At=class extends pt{constructor(){super(),this.showembed=!1,this.showabout=!1,this.showfullscreen=!1,this.showhistogram=!0,this.showtutorial=!1,this.interactiveanalysis=!1,this.hasAnalysis=!1,this.hasGraph=!1,this.isSequence=!0,this.contentContainerRef=pe(),this.contentContainerWidth=1e3,this.tourController=Xh.create([{ID:"palette"},{ID:"range"},{ID:"opacity"},{ID:"tools"},{ID:"download"}]),this.tourController.onStepActivation.set("___tour_controller_mirror",r=>{this.tourStep=r})}getTourableRoot(){}onInstanceCreated(r){this.recorded=ot.human(r.timestamp),this.hasAnalysis=r.analysis.layers.all.length>0,this.hasGraph=r.analysisData.value.values.length>1,this.isSequence=r.timeline.isSequence,r.timeline.addListener(this.UUID,()=>{this.isSequence=r.timeline.isSequence}),r.analysis.addListener(this.UUID,e=>{this.hasAnalysis=e.length>0}),r.analysisData.addListener(this.UUID,e=>{this.hasGraph=e.values.length>1}),this.tool=this.group.tool.value,this.group.tool.addListener(this.UUID,e=>{this.tool=e})}onFailure(){}firstUpdated(r){super.firstUpdated(r),this.contentContainerRef.value&&(this.contentContainerWidth=this.contentContainerRef.value.clientWidth,new ResizeObserver(t=>{this.contentContainerWidth=t[0].contentRect.width}).observe(this.contentContainerRef.value))}render(){var r,e;return u`


        <thermal-app author=${Q(this.author)} recorded=${Q(this.recorded)} license=${Q(this.license)} showfullscreen="true">

          <thermal-button variant="foreground" interactive="false" slot="bar">${this.file?this.label&&this.label.trim().length>0?this.label.trim():this.file.fileName:"Loading..."}</thermal-button>

          
  
          <registry-palette-dropdown slot="bar" tour="palette">
            <tour-step placement="right-start" label=${x(w.colourpalette)}>
              ${x(w.palettehint)}
            </tour-step>
          </registry-palette-dropdown>

          ${this.file&&this.file.visibleUrl?u`<registry-opacity-slider slot="bar" style="width:4rem" tour="opacity">
            <tour-step slot="tour" label="Visible image">
              Use the slider to show the visible image.
            </tour-step>
            </registry-opacity-slider>`:_}
          
          <div slot="bar" style="flex-grow: 4;">
            <thermal-bar>


                <thermal-dialog label=${x(w.displaysettings)}>
                  <thermal-button slot="invoker" tourstepid="sth3">${x(w.displaysettings)}</thermal-button>
                  <div slot="content">
                  
                  <thermal-field 
                    label=${x(w.filerendering)} 
                    hint=${x(w.filerenderinghint)}
                  >
                    <manager-smooth-switch></manager-smooth-switch>
                  </thermal-field>

                  <thermal-field 
                    label=${x(w.adjusttimescale)}
                    hint=${x(w.adjusttimescalehint)}
                  "
                  >
                    <registry-range-auto-button ></registry-range-auto-button>
                    <registry-range-full-button ></registry-range-full-button>
                  </thermal-field>

                  <thermal-field 
                    label=${x(w.colourpalette)}
                    hint=${x(w.colourpalettehint)}
                  "
                  >
                    <registry-palette-buttons></registry-palette-buttons>
                  </thermal-field>

                  ${this.file&&this.file.timeline.isSequence?u` <thermal-field 
                    label="${x(w.playbackspeed)}"
                  >
                    <file-playback-speed-dropdown></file-playback-speed-dropdown>
                  </thermal-field>
                  `:_}

                  ${this.file&&this.file.timeline.isSequence?u` <thermal-field 
                    label="${x(w.graphlines)}"
                    hint=${x(w.graphlineshint)}
                  >
                    <manager-graph-smooth-switch></manager-graph-smooth-switch>
                  </thermal-field>
                  `:_}


                </div>
              </thermal-dialog>
            
              <file-info-button></file-info-button>
            
              <file-download-dropdown tour="download">
                <tour-step slot="tour" placement="left" label="Downloads">Zde si to stáhněte, vy volové</tour-step>
              </file-download-dropdown>
            
              ${this.showabout===!0?u`<app-info-button></app-info-button>`:_}

              ${this.showtutorial===!0?u`<thermal-button @click=${()=>this.tourController.activate(!1)}>
                ${x(w.tutorial)}
              </thermal-button>`:_}

            </thermal-bar>
          </div>
            
            <div class="content-container ${this.contentContainerWidth>700?"content-container__expanded":""}" ${ve(this.contentContainerRef)}>

                ${this.interactiveanalysis===!0?u`
                  <div class="content-container-part content-container__tools">
                  ${this.contentContainerWidth>700?u`<group-tool-bar tour="tools">
                    <tour-step slot="tour" placement="right-top" label="Analysis tools">
                        Select a tool and draw an analysis on the IR image.
                    </tour-step>
                  </group-tool-bar>`:u`<group-tool-buttons tour="tools">
                    <tour-step slot="tour" placement="right-top">
                      Select a tool and draw an analysis on the IR image.
                    </tour-step>
        </group-tool-buttons>`}
                </div>
                `:_}

                <div class="content-container__part content-container__left">

                ${this.showhistogram===!0?u`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:_}
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
                    ${this.hasAnalysis?u`<file-analysis-table></file-analysis-table>`:u`<div class="placeholder">
                        <div class="placeholder-title">${x(w.analysis)}</div>
                        <div>${x(w.analysishint)}</div>
                    ${["add-point","add-rect","add-ellipsis"].includes(((r=this.tool)==null?void 0:r.key)??"")?u`
                      <div>${x(w[(e=this.tool)==null?void 0:e.description])}</div>
                    `:u`
                      <div>
                        <thermal-button tourstepid="sth4" @click=${()=>this.group.tool.selectTool("add-point")}>${x(w.addpoint)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-rect")}>${x(w.addrectangle)}</thermal-button>
                        <thermal-button @click=${()=>this.group.tool.selectTool("add-ellipsis")}>${x(w.addellipsis)}</thermal-button>
                      </div>
                    `}
          
                      </div>`}
                  </div>

                  ${this.isSequence?u`
                    <div class="part graph">
                    <file-analysis-graph style="opacity: ${this.hasGraph?1:0}"></file-analysis-graph>
                  ${this.hasGraph===!1?u`<div class="placeholder">
                      <div class="placeholder-title">${x(w.graph)}</div>
                      <div>${this.hasAnalysis===!1?x(w.graphhint1):Dt(x(w.graphhint2))}</div>
                    </div>`:_}
                  
                  </div>
                  `:_}
                  
                  
                </div>
              
            </div>
            
            <slot name="content" slot="content"></slot>
            
        </thermal-app>

        <notation-content></notation-content>
    `}};At.styles=ne`


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
  
  `;Nt([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],At.prototype,"showembed",2);Nt([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],At.prototype,"showabout",2);Nt([d({type:String,reflect:!0,attribute:!0,converter:Ne(!1)})],At.prototype,"showfullscreen",2);Nt([d({type:Boolean,reflect:!0,converter:Ne(!0)})],At.prototype,"showhistogram",2);Nt([d({type:String,reflect:!1,attribute:!0})],At.prototype,"showtutorial",2);Nt([le({context:ti,subscribe:!0})],At.prototype,"interactiveanalysis",2);Nt([v()],At.prototype,"hasAnalysis",2);Nt([v()],At.prototype,"hasGraph",2);Nt([v()],At.prototype,"tool",2);Nt([v()],At.prototype,"isSequence",2);Nt([d()],At.prototype,"author",2);Nt([d()],At.prototype,"recorded",2);Nt([d()],At.prototype,"license",2);Nt([d()],At.prototype,"label",2);Nt([V({context:Gu})],At.prototype,"tourController",2);Nt([V({context:Vu})],At.prototype,"tourStep",2);Nt([v()],At.prototype,"contentContainerWidth",2);At=Nt([H("desktop-app")],At);const Kh={fromAttribute:r=>{if(r){const e=r.split(":").map(Number);if(e.some(isNaN))return;if(e.length===3){const[t,i,s]=e;return t*6e4+i*1e3+s}else if(e.length===4){const[t,i,s,n]=e;return t*36e5+i*6e4+s*1e3+n}}},toAttribute:r=>{if(r!==void 0){const e=Math.floor(r/36e5),t=Math.floor(r%36e5/6e4),i=Math.floor(r%6e4/1e3),s=r%1e3,n=String(i).padStart(2,"0"),a=String(s).padStart(3,"0");return e>0?`${e}:${t}:${n}:${a}`:`${t}:${n}:${a}`}}};var mx=Object.defineProperty,vx=Object.getOwnPropertyDescriptor,$i=(r,e,t,i)=>{for(var s=i>1?void 0:i?vx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&mx(e,t,s),s};let jr=class extends je{constructor(){super(...arguments),this._active=!1}get active(){return this._active}willUpdate(r){super.willUpdate(r),r.has("duration")&&this.from!==void 0&&this.duration!==void 0&&(this.to=this.from+this.duration),r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from),r.has("from")&&!r.has("to")&&!r.has("duration")&&this.from!==void 0&&this.to!==void 0&&(this.duration=this.to-this.from)}activate(){this._active===!1&&(this._active=!0)}deactivate(){this._active===!0&&(this._active=!1)}setMs(r){this.from!==void 0&&this.to!==void 0&&(r>=this.from&&r<this.to?this.activate():this.deactivate())}getRenderContent(){return Array.from(this.slotContent)}getTTSString(){}render(){return u`
            <slot style="display: none;"></slot>
        `}};$i([d({type:Number,reflect:!0,converter:Kh})],jr.prototype,"from",2);$i([d({type:Number,reflect:!0,converter:Kh})],jr.prototype,"to",2);$i([d({type:Number,reflect:!0,converter:Kh})],jr.prototype,"duration",2);$i([d({type:String,reflect:!0})],jr.prototype,"label",2);$i([d({type:String})],jr.prototype,"image",2);$i([d({type:String,reflect:!0})],jr.prototype,"say",2);$i([d({type:String,reflect:!0})],jr.prototype,"color",2);$i([v()],jr.prototype,"_active",2);$i([Or()],jr.prototype,"slotContent",2);jr=$i([H("notation-entry")],jr);const Vo="NotationListContext",Yo="NotationCurrentContext",qo="NotationDurationContext",Oi=r=>r.filter(e=>e instanceof jr),Zh=(r,e)=>{const t=[];for(const i of e.notationList)i.from!==void 0&&i.to!==void 0&&(i.from<=r&&i.to>r?(t.push(i),i.activate()):i.deactivate());return t};var yx=Object.defineProperty,bx=Object.getOwnPropertyDescriptor,Ls=(r,e,t,i)=>{for(var s=i>1?void 0:i?bx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&yx(e,t,s),s};let hs=class extends Ke{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=Oi(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=Oi(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=Oi(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=Zh(r,this)}render(){return this.url===""?_:u`

    <manager-provider slug="manager_${this.UUID}" palette=${this.palette} autoclear=${this.autoclear}>

      <registry-provider 
        slug="registry_${this.UUID}" 
        from=${Q(this.from)}
        to=${Q(this.to)}
        opacity=${Q(this.opacity)}
        autoclear=${this.autoclear}
      >

        <group-provider slug="group_${this.UUID}">

          <file-provider 
            ${ve(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${Q(this.visible)}
            analysis1=${Q(this.analysis1)}
            analysis2=${Q(this.analysis2)}
            analysis3=${Q(this.analysis3)}
            analysis4=${Q(this.analysis4)}
            analysis5=${Q(this.analysis5)}
            analysis6=${Q(this.analysis6)}
            analysis7=${Q(this.analysis7)}
            speed=${Q(this.speed)}
            autoclear=${this.autoclear}
          >

            <slot name="mark" slot="mark"></slot>
            <slot name="analysis"></slot>

            <desktop-app 
              author=${Q(this.author)} 
              recorded=${Q(this.recorded)} 
              license=${Q(this.license)}
              label=${Q(this.label)}
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

    <slot name="notation"></slot>


    
    `}};Ls([v()],hs.prototype,"ms",2);Ls([v(),Or({flatten:!0})],hs.prototype,"_notationSlot",2);Ls([v()],hs.prototype,"notations",2);Ls([v(),V({context:qo})],hs.prototype,"duration",2);Ls([v(),V({context:Vo})],hs.prototype,"notationList",2);Ls([v(),V({context:Yo})],hs.prototype,"notationCurrent",2);hs=Ls([H("thermal-file-analyser")],hs);var wx=Object.defineProperty,xx=Object.getOwnPropertyDescriptor,Lr=(r,e,t,i)=>{for(var s=i>1?void 0:i?xx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&wx(e,t,s),s};let rr=class extends je{constructor(){super(...arguments),this.dropinRef=pe(),this.groupRef=pe(),this.loaded=!1,this.files=[],this.interactiveanalysis=!0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback(),bp().then(r=>this.ip=r)}firstUpdated(r){super.firstUpdated(r),zi(this),this.groupRef.value!==void 0&&this.groupRef.value.group.files.addListener(this.UUID,e=>{this.groupRef.value!==void 0&&(this.groupRef.value.group.analysisSync.turnOff(),e.length>0&&this.groupRef.value.group.analysisSync.turnOn(e[0])),e.forEach(t=>{t.analysis.reset(),t.analysis.layers.clear();const i={ip:this.ip,fileName:t.fileName,fileSize:t.bytesize,fileIsSequence:t.timeline.isSequence,fileNumFrames:t.timeline.frameCount,fileWidth:t.width,fileHeight:t.height,fileTimestamp:t.timeline.frames[0].absolute,fileDataType:t.fileDataType,userAgent:window.navigator.userAgent,windowWidth:window.innerWidth,windowHeight:window.innerHeight,time:new Date().getTime(),url:window.location.href};this.dispatchEvent(new CustomEvent("uploaded",{detail:i,bubbles:!0,composed:!0}))}),this.listener!==void 0&&clearTimeout(this.listener),e.length===0?this.files=[]:this.files=[e[0]],this.listener=setTimeout(async()=>{var i;const t=(i=this.groupRef.value)==null?void 0:i.group.registry;t!==void 0&&(await t.postLoadedProcessing(),t.minmax.value!==void 0&&t.range.imposeRange({from:t.minmax.value.min,to:t.minmax.value.max}))},0),this.log("files",e)})}handleClear(){this.groupRef.value!==void 0&&this.groupRef.value.group.files.removeAllInstances()}renderIntroScene(){return u`
            <group-dropin></group-dropin>
        `}renderBrowserScene(){return u`
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
        `}renderOneFile(){return u`
        ${this.files.map(r=>this.renderDetail(r,!0))}
        `}renderFileHeader(r){return u`
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

                    <div>${ot.human(r.timestamp)}</div>
                </div>
            </header>
        `}renderDetail(r,e=!1){return u`
            <article class="file">
                <file-mirror .file="${r}" autoclear="true">

                    ${this.renderFileHeader(r)}

                    ${e===!0?u`
                        <div class="file-expanded">
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                            </div>
                            <div>
                                <file-analysis-complex></file-analysis-complex>
                            </div>
                        </div>
                        `:u`
                            <div>
                                <file-canvas></file-canvas>
                                <file-timeline></file-timeline>
                                <file-analysis-overview></file-analysis-overview>
                                <file-analysis-graph></file-analysis-graph>
                            </div>
                        `}
                
                </file-mirror>
            </article>
        `}renderMultipleFiles(){return u`
        <div class="files-multiple">
        ${this.files.map(r=>this.renderDetail(r,!1))}
        </div>
        `}render(){return u`

            <manager-provider slug="${this.UUID}" palette="iron">

                <registry-provider slug="${this.UUID}" palette="iron">

                    <group-provider ${ve(this.groupRef)} slug="${this.UUID}">

                        <thermal-app label="LabIR Edu Analyser" showfullscreen="true">
                            <div slot="bar" style="flex-grow: 1;">
                                <thermal-bar>

                                    <group-dropin-input></group-dropin-input>

                                    ${this.files.length>0?u`
                                        <thermal-button @click="${()=>this.handleClear()}">${x(w.clear)}</thermal-button>
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                        <registry-range-full-button></registry-range-full-button>
                                        <registry-range-auto-button></registry-range-auto-button>
                                        
                                    `:_}

                                    ${this.files.length>1?u`<group-download-dropdown></group-download-dropdown><registry-range-full-button></registry-range-full-button>`:_}

                                    <slot name="header"></slot>
                                </thermal-bar>
                            </div>

                            <thermal-dialog label="${x(w.config)}" slot="close">
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

                            ${this.files.length===0?this.renderIntroScene():this.renderBrowserScene()}
                        
                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>

        `}};rr.styles=ne`
    
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

    `;Lr([v()],rr.prototype,"dropinRef",2);Lr([v()],rr.prototype,"groupRef",2);Lr([v()],rr.prototype,"loaded",2);Lr([v()],rr.prototype,"listener",2);Lr([v()],rr.prototype,"files",2);Lr([v()],rr.prototype,"ip",2);Lr([V({context:ti})],rr.prototype,"interactiveanalysis",2);Lr([V({context:Os})],rr.prototype,"pngExportWidth",2);Lr([V({context:Qn})],rr.prototype,"pngExportWidthSetterContext",2);Lr([V({context:As})],rr.prototype,"pngExportFs",2);Lr([V({context:ea})],rr.prototype,"pngExportFsSetterContext",2);Lr([V({context:gi}),d({reflect:!0,converter:Fi})],rr.prototype,"locale",2);rr=Lr([H("thermal-dropin-app")],rr);var Sx=Object.defineProperty,$x=Object.getOwnPropertyDescriptor,ii=(r,e,t,i)=>{for(var s=i>1?void 0:i?$x(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Sx(e,t,s),s};let kr=class extends je{constructor(){super(...arguments),this.columns=3,this.breakpoint=700,this.files=[]}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(r=>{const[e]=r,i=e.contentRect.width<this.breakpoint;this.collapsed!==i&&(this.collapsed=i)}),this.observer.observe(this)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}render(){var s,n;this.files.length;const r=this.files.sort((a,o)=>a.instance.timestamp-o.instance.timestamp),e=((s=this.label)==null?void 0:s.trim())!==""?this.label:void 0,t=((n=this.info)==null?void 0:n.trim())!==""?this.info:void 0,i={"row-files":!0,"row-files__collapsed":this.collapsed,[`file-list-${this.columns}`]:!0};return u`

            ${e?u`<h3 class="row-title">${e}</h3>`:_}

            ${t?u`<p>${t}</p>`:_}

            <section class=${Kt(i)}>
            
                ${r.map(({instance:a,innerHtml:o,label:l})=>u`<time-group-item .file=${a} .innerHtml=${o} .label=${l}></time-group-item>`)}
            
            </section>
        
        `}};kr.styles=ne`

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

    `;ii([d()],kr.prototype,"columns",2);ii([d()],kr.prototype,"breakpoint",2);ii([d({type:Object})],kr.prototype,"files",2);ii([d({type:String})],kr.prototype,"label",2);ii([d({type:String})],kr.prototype,"info",2);ii([d({type:Number})],kr.prototype,"from",2);ii([d({type:Number})],kr.prototype,"to",2);ii([d({type:Number})],kr.prototype,"cursor",2);ii([d({type:String})],kr.prototype,"grouping",2);ii([v()],kr.prototype,"collapsed",2);kr=ii([H("time-group-row")],kr);var _x=Object.defineProperty,si=(r,e,t,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(e,t,s)||s);return s&&_x(e,t,s),s},It;const Hr=(It=class extends je{constructor(){super(...arguments),this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.instanceRenderer=new Rn(this),this.groupRenderer=new Qa(this),this.pngExportWidth=1200,this.pngExportWidthSetterContext=e=>{this.pngExportWidth=e},this.pngExportFs=20,this.pngExportFsSetterContext=e=>{this.pngExportFs=e}}parseFilesProperty(e){return e.split(It.FILE_RECORD_SEPARATOR).map(i=>{let s,n,a,o;if(i.trim().split(It.FILE_SEGMENT_SEPAROATOR).forEach(l=>{const h=l.trim().split(It.FILE_COMPONENT_SEPAROATOR);if(h.length>2)return;const[f,p]=h,g=f.trim(),S=p.trim();switch(g){case It.FILE_THERMAL_KEY:s=S;break;case It.FILE_VISIBLE_KEY:n=S;break;case It.FILE_LABEL_KEY:a=S;break;case It.FILE_NOTE_KEY:o=S;break}}),s!==void 0)return{thermal:s,visible:n,note:o,label:a}}).filter(i=>i!==void 0)}},It.FILE_RECORD_SEPARATOR=";",It.FILE_SEGMENT_SEPAROATOR="|",It.FILE_COMPONENT_SEPAROATOR="~",It.FILE_THERMAL_KEY="thermal",It.FILE_VISIBLE_KEY="visible",It.FILE_LABEL_KEY="label",It.FILE_NOTE_KEY="note",It);si([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Hr.prototype,"showembed");si([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Hr.prototype,"showabout");si([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Hr.prototype,"showtutorial");si([d({type:String,reflect:!1,converter:Ne(!0)})],Hr.prototype,"showfullscreen");si([d({type:String,reflect:!0,converter:Ne(!0)})],Hr.prototype,"showhistogram");si([V({context:ti}),d({type:String,reflect:!0,converter:Ne(!0)})],Hr.prototype,"interactiveanalysis");si([V({context:Os})],Hr.prototype,"pngExportWidth");si([V({context:Qn})],Hr.prototype,"pngExportWidthSetterContext");si([V({context:As})],Hr.prototype,"pngExportFs");si([V({context:ea})],Hr.prototype,"pngExportFsSetterContext");si([V({context:gi}),d({reflect:!0,converter:Fi})],Hr.prototype,"locale");let Ip=Hr;class Cx{constructor(e,t){this.element=e,this.group=t,this.records=[],this.groups=new Map,this.grouping="none"}get numFiles(){return this.records.length}forEveryInstance(e){this.records.forEach(t=>{e(t.instance)})}flush(){this.records.forEach(e=>{e.instance.unmountFromDom()}),this.group.removeAllChildren(),this.records=[],this.groups.clear(),this.element.groups=[]}processEntries(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ei)return;const a=i.innerHTML.trim(),o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups()})):t.request(i.thermal,i.visible,this.group,s)})}processParsedFiles(e){this.flush();let t;e.forEach(i=>{const s=async n=>{if(n instanceof Ei)return;const a=i.note??"",o=a.length>0?a:void 0;this.records.push({instance:n,innerHtml:o,label:i.label})};t===void 0?(t=this.group.registry.batch.request(i.thermal,i.visible,this.group,s,this.element.UUID),t.onResolve.set(this.element.UUID+"___something",()=>{this.processGroups(),this.group.analysisSync.recieveSlotSerialized(this.element.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.element.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.element.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.element.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.element.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.element.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.element.analysis7,7)})):t.request(i.thermal,i.visible,this.group,s)})}processGroups(){this.element.groups=[],this.groups.clear(),this.group.registry.palette.setPalette(this.element.palette),this.records.sort((e,t)=>e.instance.timestamp-t.instance.timestamp).forEach(e=>{const t=e.instance.timestamp,i=this.getGroupFromTimestamp(t);let s=this.groups.get(i);if(!s){const n=this.getGroupToTimestamp(t),{label:a,info:o}=this.getGroupLabels(t),l={label:a??"",info:o,from:i,to:n,files:[]};s=l,this.groups.set(i,l)}e.time=this.getItemLabel(e.instance.timestamp),s.files.push(e)}),this.groups.forEach(e=>{e.files=e.files.sort((t,i)=>t.instance.timestamp-i.instance.timestamp)}),this.element.groups=Array.from(this.groups.values())}getGroupFromTimestamp(e){return this.grouping==="none"?-1/0:this.grouping==="hour"?vu(e).getTime():this.grouping==="day"?Va(e).getTime():this.grouping==="week"?Ai(e).getTime():this.grouping==="month"?qa(e).getTime():this.grouping==="year"?ph(e).getTime():NaN}getGroupToTimestamp(e){return this.grouping==="none"?1/0:this.grouping==="hour"?cu(e).getTime():this.grouping==="day"?lu(e).getTime():this.grouping==="week"?Xa(e).getTime():this.grouping==="month"?Ya(e).getTime():this.grouping==="year"?hu(e).getTime():NaN}getGroupLabels(e){return this.grouping==="none"?{}:this.grouping==="hour"?{label:$e(e,"H:00 d. M. yyyy")}:this.grouping==="day"?{label:$e(e,"d.M.yyyy")}:this.grouping==="week"?{label:"Week "+$e(e,"w")+" of "+$e(e,"yyyy"),info:[ot.humanDate(Ai(e).getTime()),ot.humanDate(Xa(e).getTime())].join(" - ")}:this.grouping==="month"?{label:$e(e,"MMMM yyyy"),info:[ot.humanDate(qa(e).getTime()),ot.humanDate(Ya(e).getTime())].join(" - ")}:this.grouping==="year"?{label:$e(e,"yyyy")}:{}}getItemLabel(e){return this.grouping==="none"?ot.human(e):this.grouping==="hour"||this.grouping==="day"?$e(e,"H:mm:ss"):(this.grouping==="week"||this.grouping==="month"||this.grouping==="year",ot.human(e))}setGrouping(e){this.grouping=e,this.processGroups()}}var kx=Object.defineProperty,Px=Object.getOwnPropertyDescriptor,ft=(r,e,t,i)=>{for(var s=i>1?void 0:i?Px(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&kx(e,t,s),s};let ht=class extends Ip{constructor(){super(...arguments),this.groupRef=pe(),this.palette="jet",this.label="Group of IR images",this.slug=Math.random().toFixed(5),this.columns=3,this.breakpoint=700,this.grouping="none",this.groups=[],this.onGroupInit=new ie,this.onColumns=new ie,this.preservetime=!0,this.state=0,this.detail=void 0,this.loading=!1}connectedCallback(){super.connectedCallback();const t=Po(this.slug).addOrGetRegistry(this.slug).groups.addOrGetGroup(this.slug,this.label,this.description);t.files.addListener(this.UUID,i=>{if(t.analysisSync.value===!1){const s=i[0];s&&t.analysisSync.turnOn(s)}}),this.group=t,this.grouper=new Cx(this,t),this.onGroupInit.call(this.group)}async load(){this.loading=!0;const r=this.files?this.parseFilesProperty(this.files):[];r.length>0?this.grouper.processParsedFiles(r):this.grouper.processEntries(this.entries.filter(e=>e instanceof Mi)),this.group.files.addListener(this.UUID,e=>{this.loading=!1,e.length<4?this.columns=e.length:this.columns=4})}firstUpdated(r){super.firstUpdated(r),zi(this),this.group.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.group.registry.range.imposeRange({from:this.from,to:this.to}),this.load()}updated(r){if(super.updated(r),r.has("grouping")&&this.grouper&&this.grouper.setGrouping(this.grouping),r.has("palette")&&this.palette&&this.grouper&&this.grouper.group.registry.palette.setPalette(this.palette),r.has("columns")&&this.onColumns.call(this.columns),r.has("files")&&this.files&&r.get("files")!==void 0){const e=this.parseFilesProperty(this.files);e.length>0&&this.grouper.processParsedFiles(e)}r.has("analysis1")&&(this.group.analysisSync.recieveSlotSerialized(this.analysis1,1),this.group.analysisSync.recieveSlotSerialized(this.analysis2,2),this.group.analysisSync.recieveSlotSerialized(this.analysis3,3),this.group.analysisSync.recieveSlotSerialized(this.analysis4,4),this.group.analysisSync.recieveSlotSerialized(this.analysis5,5),this.group.analysisSync.recieveSlotSerialized(this.analysis6,6),this.group.analysisSync.recieveSlotSerialized(this.analysis7,7))}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}async showDetail(r,e){this.detail={lrc:r,png:e},this.group.files.removeAllInstances(),this.group.registry.range.reset(),this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.state=1,this.scrollToComponent()}async closeDetail(){delete this.detail,this.detail=void 0,this.group.analysisSync.reset(),this.group.analysisGraph.reset(),this.group.registry.range.reset(),this.load(),this.state=0,this.scrollToComponent()}renderGroup(){return u`${this.groups.map(r=>u`<section class="group">
                                        
            <div class="group-files group-files-${this.columns}">
                ${r.files.map(e=>u`<div class="file">
                    <file-mirror .file=${e.instance} autoclear="true">
                        <file-thumbnail
                            .ondetail=${()=>{this.showDetail(e.instance.thermalUrl,e.instance.visibleUrl)}}
                            label=${Q(e.label)}
                        ></file-thumbnail>
                    </file-mirror>
                </div>`)}
            </div>
        </section>`)} `}renderDetail(){return this.detail===void 0?_:u`<div class="detail">
            <file-provider thermal="${this.detail.lrc}" visible="${this.detail.png}">
                <file-detail label="${this.label}" .onback=${()=>this.closeDetail()}></file-detail>
            </file-provider>
        </div>`}render(){return u`

            <slot name="entry"></slot>

            <manager-provider slug="${this.slug}">

                <registry-provider slug="${this.slug}" from="${Q(this.from)}" to="${Q(this.to)}">

                    <group-provider slug="${this.slug}" autoclear="true" ${ve(this.groupRef)}>

                        <thermal-app
                            author=${Q(this.author)}
                            license=${Q(this.license)}
                            showfullscreen="true"
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

                                    ${this.loading===!1?u`
                                        <registry-palette-dropdown></registry-palette-dropdown>
                                        <registry-range-full-button></registry-range-full-button>
                                        <registry-range-auto-button></registry-range-auto-button>
                                        

                                        ${this.state===0?u`
                    ${this.grouper.numFiles>0?u`<group-download-dropdown></group-download-dropdown>`:_}
                                        <div>
                                        <input type="range" min="1" max="10" step="1" value=${this.columns} @input=${r=>{const e=r.target,t=e==null?void 0:e.value;t!==void 0&&(this.columns=parseInt(t))}}></input>
                                        <div style="color: var( --thermal-slate-dark );font-size: calc( var( --thermal-fs-sm ) * .7 ); line-height: 1em;">${x(w.columns,{num:this.columns})}</div>
                                    </div>
                                    <group-analysis-sync-button></group-analysis-sync-button>
                                        `:_}
                                    

                                        ${this.showabout===!0?u`<app-info-button ></app-info-button>`:_}

                                        `:_}

                                </thermal-bar>

                            </div>

                            <thermal-dialog label="${x(w.config)}" slot="close">
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

                            ${this.loading===!1?u`
                                    ${this.showhistogram===!0?u`<registry-histogram expandable="true" slot="pre"></registry-histogram>`:_}

                                    <registry-range-slider slot="pre"></registry-range-slider>
                                    <registry-ticks-bar slot="pre"></registry-ticks-bar>
                                `:_}
                            

                            ${this.state===0?u`
                                <group-chart slot="pre"></group-chart>
                            `:_}

                            ${this.loading===!0?u`<thermal-loading message="${x(w.loading)}"></thermal-loading>`:u`<div class="app-content">

                                    <slot></slot>

                                    <group-tool-bar></group-tool-bar>

                                    <div class="app-content-main">
                                    ${this.state===0?this.renderGroup():this.renderDetail()}
                                    </div>
                            
                            </div>

                            ${this.state===0?u`
                                <group-timeline></group-timeline>
                            `:_}
                            `}
                            

                        </thermal-app>

                    </group-provider>

                </registry-provider>

            </manager-provider>
        
        `}};ht.styles=ne`

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

        :host {
            --gap: calc(var(--thermal-gap) * .5);
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


    
    `;ft([d({type:String,reflect:!0,attribute:!0})],ht.prototype,"palette",2);ft([d({type:Number,reflect:!0})],ht.prototype,"from",2);ft([d({type:Number,reflect:!0})],ht.prototype,"to",2);ft([d({type:String,reflect:!0})],ht.prototype,"author",2);ft([d({type:String,reflect:!0})],ht.prototype,"label",2);ft([d({type:String,reflect:!1})],ht.prototype,"description",2);ft([d({type:String,reflect:!0})],ht.prototype,"license",2);ft([v(),Or({slot:"entry",flatten:!0})],ht.prototype,"entries",2);ft([d({type:String,reflect:!0})],ht.prototype,"slug",2);ft([d()],ht.prototype,"columns",2);ft([d()],ht.prototype,"breakpoint",2);ft([d({type:String,reflect:!0})],ht.prototype,"grouping",2);ft([v()],ht.prototype,"groups",2);ft([d({type:String})],ht.prototype,"files",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis1",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis2",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis3",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis4",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis5",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis6",2);ft([d({type:String,reflect:!0})],ht.prototype,"analysis7",2);ft([d({type:String,reflect:!0,converter:Ne(!1)})],ht.prototype,"preservetime",2);ft([v()],ht.prototype,"state",2);ft([v()],ht.prototype,"detail",2);ft([v()],ht.prototype,"loading",2);ht=ft([H("thermal-group-app")],ht);var Ox=Object.defineProperty,Ax=Object.getOwnPropertyDescriptor,Gi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ax(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ox(e,t,s),s};let Pr=class extends vi{constructor(){super(...arguments),this.ms=0,this.playing=!1,this.instances=[],this.has=!1,this.ticks=[],this.timelineRef=pe(),this.indicatorRef=pe()}getTourableRoot(){throw new Error("Method not implemented.")}connectedCallback(){super.connectedCallback(),this.group.registry.batch.onBatchComplete.set(this.UUID,this.onRegistryBatchEnded.bind(this)),this.group.files.addListener(this.UUID,r=>{this.listener!==void 0&&clearTimeout(this.listener),this.listener=setTimeout(async()=>{this.onRegistryBatchEnded(r)},0)}),this.group.playback.addListener(this.UUID,r=>this.ms=r),this.group.playback.onPlayingStatusChange.set(this.UUID,r=>this.playing=r),this.group.playback.onHasAnyCallback.set(this.UUID,r=>this.has=r)}updated(r){super.updated(r),r.has("ms")&&this.ms!==void 0&&(this.ms!==this.group.playback.value&&this.group.playback.setValueByRelativeMs(this.ms),this.indicatorRef.value&&(this.indicatorRef.value.style.width=this.msToPercent(this.ms)+"%"))}onRegistryBatchEnded(r){let e=0;this.forEveryAffectedInstance(t=>t.unmountFromDom()),this.instances=r.filter(t=>t instanceof Ei?!1:t.group.id===this.group.id),this.instances.forEach(t=>{t.timeline.duration>e&&(e=t.timeline.duration)}),this.longestDurationInMs=e,setTimeout(()=>{const t=this.getTimelineElement();t&&this.longestDurationInMs!==void 0&&(this.calculateTicks(t.clientWidth,this.longestDurationInMs),new ResizeObserver(s=>{const n=s[0];this.longestDurationInMs&&this.calculateTicks(n.contentRect.width,this.longestDurationInMs)}).observe(t))},0)}calculateTicks(r,e){this.ticks=rh(r,e)}forEveryAffectedInstance(r){this.instances.forEach(r)}percentToMs(r){if(this.longestDurationInMs!==void 0)return Math.floor(this.longestDurationInMs*(r/100))}msToPercent(r){if(this.longestDurationInMs!==void 0)return r/this.longestDurationInMs*100}getValueFromEvent(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);return{percent:s,ms:n}}handlePlayButtonClick(){this.group.playback.playing?this.group.playback.stop():this.group.playback.play()}handleTimelineClick(r){const e=r.layerX,i=r.target.clientWidth,s=e/i*100,n=this.percentToMs(s);n&&(this.ms=n)}handleTimelineEnter(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineMove(r){const{ms:e}=this.getValueFromEvent(r);this.pointerMs=e}handleTimelineLeave(){this.pointerMs=void 0}getTimelineElement(){return this.renderRoot.querySelector(".timeline")}render(){return this.has===!1?_:u`<div class="container ticks-horizontal-indent">

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

            ${this.longestDurationInMs!==void 0?Ep(this.longestDurationInMs,this.ticks,this.ms,this.pointerMs):_}

        </div>`}};Pr.TICK_WIDTH=50;Pr.TICK_POINTER_HEIGHT=3;Pr.styles=ne`


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


        ${Dp}
    
    `;Gi([v()],Pr.prototype,"longestDurationInMs",2);Gi([v()],Pr.prototype,"ms",2);Gi([v()],Pr.prototype,"pointerMs",2);Gi([v()],Pr.prototype,"playing",2);Gi([v()],Pr.prototype,"instances",2);Gi([v()],Pr.prototype,"has",2);Gi([v()],Pr.prototype,"ticks",2);Gi([v()],Pr.prototype,"listener",2);Pr=Gi([H("group-timeline")],Pr);var Ex=Object.defineProperty,Dx=Object.getOwnPropertyDescriptor,Rr=(r,e,t,i)=>{for(var s=i>1?void 0:i?Dx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ex(e,t,s),s};let ir=class extends Ip{constructor(){super(...arguments),this.registryProviderRef=pe(),this.palette="jet",this.grouping="none",this.columns=3,this.breakpoint=700,this.groups=3,this.autogroups=!0}connectedCallback(){super.connectedCallback();const r=Po(this.slug);this.registry=r.addOrGetRegistry(this.slug),this.registry.manager.palette.setPalette(this.palette),this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})}updated(r){super.updated(r),r.has("entries")&&console.log("Změnily se mi entrýz, budu je připínat.",this.entries),r.has("grouping")&&this.grouping&&this.forEveryGroup(e=>e.grouping=this.grouping),r.has("columns")&&this.columns&&this.forEveryGroup(e=>e.columns=this.columns),r.has("breakpoint")&&this.breakpoint&&this.forEveryGroup(e=>e.breakpoint=this.breakpoint),r.has("groups")&&this.autogroups&&this.forEveryGroup(e=>e.width=this.groups)}firstUpdated(r){super.firstUpdated(r),zi(this),this.forEveryGroup(e=>{e.setManagerSlug(this.slug),e.width=this.groups,e.onInstanceEnter=t=>{this.highlightFrom=t.min,this.highlightTo=t.max},e.onInstanceLeave=()=>{this.highlightFrom=void 0,this.highlightTo=void 0},e.groupRenderer=this.groupRenderer})}forEveryGroup(r){const e=(t,i)=>{if(t instanceof Gt){i(t);return}else{t.hasChildNodes()&&Array.from(t.childNodes).forEach(n=>{if(n instanceof Element){e(n,i);return}});return}};this.entries.forEach(t=>e(t,r))}render(){return u`
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
                    <registry-ticks-bar highlightFrom=${Q(this.highlightFrom)} highlightTo=${Q(this.highlightTo)}></registry-ticks-bar>
            
                    <div class="app-content">
                        <slot></slot>
                    </div>

            </thermal-app>
            </registry-provider>

        </manager-provider>
        `}};ir.styles=ne`
    
        .app-content {

            display: flex;
            flex-wrap: wrap;
        
        }
    
    `;Rr([d({type:String,reflect:!0,attribute:!0})],ir.prototype,"palette",2);Rr([d({type:Number,reflect:!0})],ir.prototype,"from",2);Rr([d({type:Number,reflect:!0})],ir.prototype,"to",2);Rr([d()],ir.prototype,"slug",2);Rr([d({type:String,reflect:!0})],ir.prototype,"grouping",2);Rr([d({type:String,reflect:!0})],ir.prototype,"columns",2);Rr([d({type:Number,reflect:!0})],ir.prototype,"breakpoint",2);Rr([d({type:String,reflect:!0})],ir.prototype,"groups",2);Rr([d({type:String,reflect:!0})],ir.prototype,"autogroups",2);Rr([V({context:gi}),d({reflect:!0,converter:Fi})],ir.prototype,"locale",2);Rr([Or({flatten:!0}),v()],ir.prototype,"entries",2);Rr([v()],ir.prototype,"registry",2);ir=Rr([H("thermal-registry-app")],ir);var Lx=Object.defineProperty,Rx=Object.getOwnPropertyDescriptor,Vi=(r,e,t,i)=>{for(var s=i>1?void 0:i?Rx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lx(e,t,s),s};let Qr=class extends je{constructor(){super(...arguments),this.active=!1,this.displayed=!1,this.placement="bottom",this.arrowRef=pe()}connectedCallback(){var r;super.connectedCallback(),this.elementContext||this.log("Expecting some ancestor tourable element but recieved none"),(r=this.tour)==null||r.onStepActivation.set("what",console.log)}updated(r){super.update(r),this.definition&&this.elementContext?this.definition.ID===this.elementContext.step?this.activate():this.deactivate():this.deactivate()}async activate(){if(!(!this.definition||!this.elementContext)&&this.active===!1){this.active=!0,this.displayed=!0,this.elementContext.element.style.outline="4px var( --thermal-primary ) solid",this.elementContext.element.style.borderRadius="var(--thermal-radius)",this.elementContext.element.style.boxShadow="0 0 10px var(--thermal-primary)";const r=await op(this.elementContext.element.getTourableRoot(),this,{middleware:[ap(20),wb({element:this.arrowRef.value,padding:10})],placement:this.placement}),e=r.middlewareData.arrow;e&&this.arrowRef.value&&(this.arrowRef.value.style.top=e.y+"px",this.arrowRef.value.style.left=e.x+"px"),this.style.position="absolute",this.style.left=r.x+"px",this.style.top=r.y+"px"}}async deactivate(){this.active===!0&&this.elementContext&&(this.active=!1,this.displayed=!1,this.elementContext.element.style.removeProperty("outline"),this.elementContext.element.style.removeProperty("border-radius"),this.elementContext.element.style.removeProperty("box-shadow"),this.style.removeProperty("position"),this.style.removeProperty("top"),this.style.removeProperty("left"))}render(){var e,t,i,s;const r={"tour-step":!0,"tour-step__inactive":this.displayed===!1,"tour-step__active":this.displayed===!0};return u`<div class=${Kt(r)}>

            <div id="arrow" ${this.arrowRef} class="arrow" style="position:absolute;"></div>

            <div class="header">
                <h1>${this.label}</h1>
                <button class="close" @click=${()=>{var n;return(n=this.tour)==null?void 0:n.deactivate()}}>X</button> 
            </div>
            <div class="content">
                
                <slot></slot>

                ${this.youtube?u`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    `:_}

            </div>

            <div class="buttons">

            ${(t=(e=this.definition)==null?void 0:e.props)!=null&&t.hasPrev?u`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.previous()}} variant="primary">${x(w.back)}</thermal-button>`:_} 
            
                ${(s=(i=this.definition)==null?void 0:i.props)!=null&&s.hasNext?u`<thermal-button @click=${()=>{var n;return(n=this.tour)==null?void 0:n.next()}} variant="background">${x(w.next)}</thermal-button>`:_}          
            
            </div>

            

        </div>
        `}};Qr.styles=ne`

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
    
    `;Vi([d({type:String})],Qr.prototype,"label",2);Vi([v()],Qr.prototype,"active",2);Vi([d({type:String,reflect:!0})],Qr.prototype,"displayed",2);Vi([d({type:String})],Qr.prototype,"placement",2);Vi([le({context:Gu,subscribe:!0})],Qr.prototype,"tour",2);Vi([le({context:Vu,subscribe:!0})],Qr.prototype,"definition",2);Vi([le({context:Yu,subscribe:!0})],Qr.prototype,"elementContext",2);Vi([d({type:String})],Qr.prototype,"youtube",2);Qr=Vi([H("tour-step")],Qr);var Tx=Object.defineProperty,Mx=Object.getOwnPropertyDescriptor,Ix=(r,e,t,i)=>{for(var s=i>1?void 0:i?Mx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tx(e,t,s),s};let Md=class extends je{render(){return u`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                <png-export-panel></png-export-panel>
            </div>
        </thermal-dialog>`}};Md=Ix([H("png-export-config")],Md);var Ux=Object.defineProperty,zx=Object.getOwnPropertyDescriptor,wr=(r,e,t,i)=>{for(var s=i>1?void 0:i?zx(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ux(e,t,s),s};let Jt=class extends je{constructor(){super(...arguments),this.loading=!0,this.cls="md",this.palette="jet",this.showhistogram=!1,this.groupRef=pe(),this.group=void 0,this.clsx={xs:1,sm:2,md:3,lg:4,xl:5}}connectedCallback(){super.connectedCallback(),this.url!==void 0&&this.folder}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.resizeObserver)==null||r.disconnect(),this.resizeObserver=void 0}firstUpdated(r){super.firstUpdated(r),zi(this),this.groupRef.value&&(this.group=this.groupRef.value.group)}updated(r){var e;if(super.updated(r),(r.has("folder")||r.has("url")||r.has("subfolder"))&&(this.folder,this.url&&this.loadData(this.url,this.folder,this.subfolder)),r.has("data")){(e=this.resizeObserver)==null||e.disconnect(),delete this.resizeObserver,this.resizeObserver=new ResizeObserver(i=>{const n=i[0].contentRect.width;if(this.lastWidth!==n){let a="xs";n>500&&(a="sm"),n>900&&(a="md"),n>1300&&(a="lg"),n>1600&&(a="xl"),this.cls=a,this.lastWidth=n}});const t=this.renderRoot.querySelector(".files");t&&this.resizeObserver.observe(t)}}getUrl(r,e,t){return t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e}async loadData(r,e,t){try{this.loading=!0,this.group&&this.group.files.clearAllListeners();const i=t!==void 0?`${r}?scope=${t}&${e}`:r+"?"+e,s=await fetch(i,{});s.ok?(this.data=await s.json(),this.loading=!1,this.data.success===!1&&(this.error=`The remote folder <code>${i}</code> was not found!`)):(this.error=`The remote folder <code>${i}</code> was not found!`,this.loading=!1)}catch{this.error=`The remote folder <code>${r}</code> was not found!`,this.loading=!1}}renderloading(){return u`<div>

            Načítám vzdálenou složku ${this.folder} from ${this.url} 
        
        </div>`}renderData(r){return u`
            <div class="files ${this.cls}">
                ${r.files.map(e=>this.renderFile(e))}
            </div>
        `}renderFile(r){return u`<div class="file">
            <div class="file-inner">
                <file-provider 
                    thermal="${r.lrc}" 
                    visible=${Q(r.png)}
                    batch="true"
                >

                    <div class="file-header">
                        <h2><span>${ot.human(r.timestamp*1e3)}</span></h2>
                        <div>
                            <file-download-lrc></file-download-lrc>
                            <file-download-png></file-download-png>
                            <file-range-propagator></file-range-propagator>
                            <file-info-button>
                                <file-button slot="invoker" label="${x(w.info).toLocaleLowerCase()}"></file-button>
                            </file-info-button>

                        </div>
                    </div>
                    
                    <file-canvas></file-canvas>
                    <file-timeline hasPlayButton="false" hasInfo="false"></file-timeline>
                    <file-analysis-table interactiveanalysis="true"></file-analysis-table>
                </file-provider>
            </div>
        </div>`}clsToStr(r){return x(w.columns,{num:this.clsx[r]})}renderColumnsSwitch(){return u`<thermal-dropdown>
            <span slot="invoker">${this.clsToStr(this.cls)}</span>
            <thermal-button slot="option" @click=${()=>this.cls="xs"}>${this.clsx.xs}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="sm"}>${this.clsx.sm}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="md"}>${this.clsx.md}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="lg"}>${this.clsx.lg}</thermal-button>
            <thermal-button slot="option" @click=${()=>this.cls="xl"}>${this.clsx.xl}</thermal-button>
        </thermal-dropdown>`}renderInfo(){if(this.data){const r=this.getUrl(this.url,this.folder,this.subfolder),e="Request",t={"API Root":this.url,Subfolder:this.subfolder,Folder:this.folder,[e]:r};return u`
                <thermal-dialog label="Remote folder info">

                    <slot name="invoker" slot="invoker">
                        <thermal-button>Remote folder info</thermal-button>
                    </slot>

                    <div slot="content">

                        ${this.data.info.description?u`<p>${this.data.info.description}</p>`:_}

                        <table>
                            
                            <caption>Request information</caption>

                            <tbody>

                                ${Object.entries(t).map(([i,s])=>{const a=i===e?u`<a href="${s}" target="_blank">${s}</a>`:s;return u`<tr>
                                        <td>${i}</td>
                                        <td>${a}</td>
                                    </tr>`})}
                            
                            </tbody>

                        </table>
                    
                    </div>
                
                </thermal-dialog>
            `}return _}render(){var e;let r=x(w.loading)+"...";return((e=this.data)==null?void 0:e.info)!==void 0&&(r=this.data.info.name),this.error!==void 0&&(r="Error"),u`
            <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                <registry-provider slug="folders_app_registry">
                    <group-provider slug="folders_app_group" ${ve(this.groupRef)}>
        
                        <thermal-app
                            author=${Q(this.author)}
                            license=${Q(this.license)}
                        >

                            <thermal-button variant="foreground" interactive="false" slot="bar">
                                ${r}
                            </thermal-button>

                            ${this.error===void 0?u`

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

                            ${this.showhistogram?u`<registry-histogram></registry-histogram>`:_}
                            <registry-range-slider></registry-range-slider>
                            <registry-ticks-bar></registry-ticks-bar>

                            <group-tool-buttons></group-tool-buttons>`:_}
                            
                        ${this.error?Dt(this.error):_}

                        ${this.error===void 0&&this.data?this.renderData(this.data):_}

                        <group-timeline></group-timeline>

                
                    </thermal-app>
                </group-provider>
            </registry-provider>
        </manager-provider>`}};Jt.styles=ne`


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

    `;wr([d({type:String,reflect:!0})],Jt.prototype,"url",2);wr([d({type:String,reflect:!0})],Jt.prototype,"subfolder",2);wr([d({type:String,reflect:!0})],Jt.prototype,"folder",2);wr([v()],Jt.prototype,"error",2);wr([v()],Jt.prototype,"loading",2);wr([v()],Jt.prototype,"data",2);wr([v()],Jt.prototype,"label",2);wr([v()],Jt.prototype,"cls",2);wr([d({type:String,reflect:!0})],Jt.prototype,"license",2);wr([d({type:String,reflect:!0})],Jt.prototype,"author",2);wr([d({type:String,reflect:!0,attribute:!0})],Jt.prototype,"palette",2);wr([d({type:String,reflect:!0,converter:Ne(!0)})],Jt.prototype,"showhistogram",2);wr([V({context:gi}),d({reflect:!0,converter:Fi})],Jt.prototype,"locale",2);Jt=wr([H("remote-folder-app")],Jt);var ys=(r=>(r.HOURS="hours",r.DAYS="days",r.WEEKS="weeks",r.MONTHS="months",r.YEARS="years",r))(ys||{});class Ml{constructor(e,t){c(this,"url");c(this,"query");this.api_endpoint=e,this.subfolder=t,this.url=new URL(this.api_endpoint),this.query=this.url.searchParams,this.subfolder!==void 0&&this.query.set("scope",this.subfolder)}setOnly(e){return this.query.set("only",e),this}setExclude(e){return this.query.set("exclude",e),this}setGrid(e){e===!0?this.query.set("grid","true"):this.query.delete("grid")}async info(){return this.fetch()}async folder(e){return this.query.set("folder",e),this.fetch()}async everything(){return this.query.set("everything","true"),this.fetch()}async hours(){return this.query.set("hours","true"),this.fetch()}async days(){return this.query.set("days","true"),this.fetch()}async weeks(){return this.query.set("weeks","true"),this.fetch()}async months(){return this.query.set("months","true"),this.fetch()}async years(){return this.query.set("years","true"),this.fetch()}async grid(e){switch(e){case"hours":return await this.hours();case"days":return await this.days();case"weeks":return await this.days();case"months":return await this.months();case"years":return await this.years();default:return await this.hours()}}async fetch(){return console.info("Fetching",this.url),await(await fetch(this.url)).json()}get object(){return this.url}}const Fx={lessThanXSeconds:{one:{regular:"méně než 1 sekunda",past:"před méně než 1 sekundou",future:"za méně než 1 sekundu"},few:{regular:"méně než {{count}} sekundy",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekundy"},many:{regular:"méně než {{count}} sekund",past:"před méně než {{count}} sekundami",future:"za méně než {{count}} sekund"}},xSeconds:{one:{regular:"1 sekunda",past:"před 1 sekundou",future:"za 1 sekundu"},few:{regular:"{{count}} sekundy",past:"před {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"před {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"půl minuty",past:"před půl minutou",future:"za půl minuty"}},lessThanXMinutes:{one:{regular:"méně než 1 minuta",past:"před méně než 1 minutou",future:"za méně než 1 minutu"},few:{regular:"méně než {{count}} minuty",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minuty"},many:{regular:"méně než {{count}} minut",past:"před méně než {{count}} minutami",future:"za méně než {{count}} minut"}},xMinutes:{one:{regular:"1 minuta",past:"před 1 minutou",future:"za 1 minutu"},few:{regular:"{{count}} minuty",past:"před {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"před {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"přibližně 1 hodina",past:"přibližně před 1 hodinou",future:"přibližně za 1 hodinu"},few:{regular:"přibližně {{count}} hodiny",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodiny"},many:{regular:"přibližně {{count}} hodin",past:"přibližně před {{count}} hodinami",future:"přibližně za {{count}} hodin"}},xHours:{one:{regular:"1 hodina",past:"před 1 hodinou",future:"za 1 hodinu"},few:{regular:"{{count}} hodiny",past:"před {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"před {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"1 den",past:"před 1 dnem",future:"za 1 den"},few:{regular:"{{count}} dny",past:"před {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dní",past:"před {{count}} dny",future:"za {{count}} dní"}},aboutXWeeks:{one:{regular:"přibližně 1 týden",past:"přibližně před 1 týdnem",future:"přibližně za 1 týden"},few:{regular:"přibližně {{count}} týdny",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdny"},many:{regular:"přibližně {{count}} týdnů",past:"přibližně před {{count}} týdny",future:"přibližně za {{count}} týdnů"}},xWeeks:{one:{regular:"1 týden",past:"před 1 týdnem",future:"za 1 týden"},few:{regular:"{{count}} týdny",past:"před {{count}} týdny",future:"za {{count}} týdny"},many:{regular:"{{count}} týdnů",past:"před {{count}} týdny",future:"za {{count}} týdnů"}},aboutXMonths:{one:{regular:"přibližně 1 měsíc",past:"přibližně před 1 měsícem",future:"přibližně za 1 měsíc"},few:{regular:"přibližně {{count}} měsíce",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíce"},many:{regular:"přibližně {{count}} měsíců",past:"přibližně před {{count}} měsíci",future:"přibližně za {{count}} měsíců"}},xMonths:{one:{regular:"1 měsíc",past:"před 1 měsícem",future:"za 1 měsíc"},few:{regular:"{{count}} měsíce",past:"před {{count}} měsíci",future:"za {{count}} měsíce"},many:{regular:"{{count}} měsíců",past:"před {{count}} měsíci",future:"za {{count}} měsíců"}},aboutXYears:{one:{regular:"přibližně 1 rok",past:"přibližně před 1 rokem",future:"přibližně za 1 rok"},few:{regular:"přibližně {{count}} roky",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roky"},many:{regular:"přibližně {{count}} roků",past:"přibližně před {{count}} roky",future:"přibližně za {{count}} roků"}},xYears:{one:{regular:"1 rok",past:"před 1 rokem",future:"za 1 rok"},few:{regular:"{{count}} roky",past:"před {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} roků",past:"před {{count}} roky",future:"za {{count}} roků"}},overXYears:{one:{regular:"více než 1 rok",past:"před více než 1 rokem",future:"za více než 1 rok"},few:{regular:"více než {{count}} roky",past:"před více než {{count}} roky",future:"za více než {{count}} roky"},many:{regular:"více než {{count}} roků",past:"před více než {{count}} roky",future:"za více než {{count}} roků"}},almostXYears:{one:{regular:"skoro 1 rok",past:"skoro před 1 rokem",future:"skoro za 1 rok"},few:{regular:"skoro {{count}} roky",past:"skoro před {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} roků",past:"skoro před {{count}} roky",future:"skoro za {{count}} roků"}}},jx=(r,e,t)=>{let i;const s=Fx[r];s.type==="other"?i=s.other:e===1?i=s.one:e>1&&e<5?i=s.few:i=s.many;const n=(t==null?void 0:t.addSuffix)===!0,a=t==null?void 0:t.comparison;let o;return n&&a===-1?o=i.past:n&&a===1?o=i.future:o=i.regular,o.replace("{{count}}",String(e))},Nx={full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},Wx={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Hx={full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Bx={date:Ut({formats:Nx,defaultWidth:"full"}),time:Ut({formats:Wx,defaultWidth:"full"}),dateTime:Ut({formats:Hx,defaultWidth:"full"})},Gx=["neděli","pondělí","úterý","středu","čtvrtek","pátek","sobotu"],Vx={lastWeek:"'poslední' eeee 've' p",yesterday:"'včera v' p",today:"'dnes v' p",tomorrow:"'zítra v' p",nextWeek:r=>{const e=r.getDay();return"'v "+Gx[e]+" o' p"},other:"P"},Yx=(r,e)=>{const t=Vx[r];return typeof t=="function"?t(e):t},qx={narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},Xx={narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},Kx={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},Zx={narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},Jx={narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},Qx={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},e2={narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},t2=(r,e)=>Number(r)+".",r2={ordinalNumber:t2,era:gt({values:qx,defaultWidth:"wide"}),quarter:gt({values:Xx,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:Kx,defaultWidth:"wide",formattingValues:Zx,defaultFormattingWidth:"wide"}),day:gt({values:Jx,defaultWidth:"wide"}),dayPeriod:gt({values:Qx,defaultWidth:"wide",formattingValues:e2,defaultFormattingWidth:"wide"})},i2=/^(\d+)\.?/i,s2=/\d+/i,n2={narrow:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i},a2={any:[/^p[řr]/i,/^(po|n)/i]},o2={narrow:/^[1234]/i,abbreviated:/^[1234]\. [čc]tvrtlet[íi]/i,wide:/^[1234]\. [čc]tvrtlet[íi]/i},l2={any:[/1/i,/2/i,/3/i,/4/i]},h2={narrow:/^[lúubdkčcszřrlp]/i,abbreviated:/^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,wide:/^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i},c2={narrow:[/^l/i,/^[úu]/i,/^b/i,/^d/i,/^k/i,/^[čc]/i,/^[čc]/i,/^s/i,/^z/i,/^[řr]/i,/^l/i,/^p/i],any:[/^led/i,/^[úu]n/i,/^b[řr]e/i,/^dub/i,/^kv[ěe]/i,/^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,/^[čc]vc|[čc]erven(ec|ce)/i,/^srp/i,/^z[áa][řr]/i,/^[řr][íi]j/i,/^lis/i,/^pro/i]},d2={narrow:/^[npuúsčps]/i,short:/^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,abbreviated:/^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,wide:/^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i},u2={narrow:[/^n/i,/^p/i,/^[úu]/i,/^s/i,/^[čc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[úu]t/i,/^st/i,/^[čc]t/i,/^p[áa]/i,/^so/i]},p2={any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i},f2={any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[ůu]lnoc/i,noon:/^poledne/i,morning:/r[áa]no/i,afternoon:/odpoledne/i,evening:/ve[čc]er/i,night:/noc/i}},g2={ordinalNumber:Vn({matchPattern:i2,parsePattern:s2,valueCallback:r=>parseInt(r,10)}),era:mt({matchPatterns:n2,defaultMatchWidth:"wide",parsePatterns:a2,defaultParseWidth:"any"}),quarter:mt({matchPatterns:o2,defaultMatchWidth:"wide",parsePatterns:l2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:h2,defaultMatchWidth:"wide",parsePatterns:c2,defaultParseWidth:"any"}),day:mt({matchPatterns:d2,defaultMatchWidth:"wide",parsePatterns:u2,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:p2,defaultMatchWidth:"any",parsePatterns:f2,defaultParseWidth:"any"})},m2={code:"cs",formatDistance:jx,formatLong:Bx,formatRelative:Yx,localize:r2,match:g2,options:{weekStartsOn:1,firstWeekContainsDate:4}},v2={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}},y2=(r,e,t)=>{let i;const s=v2[r];return typeof s=="string"?i=s:e===1?i=s.one:e===2&&s.two?i=s.two:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"mewn "+i:i+" yn ôl":i},b2={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},w2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},x2={full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},S2={date:Ut({formats:b2,defaultWidth:"full"}),time:Ut({formats:w2,defaultWidth:"full"}),dateTime:Ut({formats:x2,defaultWidth:"full"})},$2={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"},_2=(r,e,t,i)=>$2[r],C2={narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},k2={narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},P2={narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},O2={narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},A2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},E2={narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},D2=(r,e)=>{const t=Number(r);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||t===80||t>=100)return t+"fed";return t+"ain"},L2={ordinalNumber:D2,era:gt({values:C2,defaultWidth:"wide"}),quarter:gt({values:k2,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:P2,defaultWidth:"wide"}),day:gt({values:O2,defaultWidth:"wide"}),dayPeriod:gt({values:A2,defaultWidth:"wide",formattingValues:E2,defaultFormattingWidth:"wide"})},R2=/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,T2=/\d+/i,M2={narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},I2={wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},U2={narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},z2={any:[/1/i,/2/i,/3/i,/4/i]},F2={narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},j2={narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},N2={narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},W2={narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},H2={narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},B2={any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},G2={ordinalNumber:Vn({matchPattern:R2,parsePattern:T2,valueCallback:r=>parseInt(r,10)}),era:mt({matchPatterns:M2,defaultMatchWidth:"wide",parsePatterns:I2,defaultParseWidth:"any"}),quarter:mt({matchPatterns:U2,defaultMatchWidth:"wide",parsePatterns:z2,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:F2,defaultMatchWidth:"wide",parsePatterns:j2,defaultParseWidth:"any"}),day:mt({matchPatterns:N2,defaultMatchWidth:"wide",parsePatterns:W2,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:H2,defaultMatchWidth:"any",parsePatterns:B2,defaultParseWidth:"any"})},V2={code:"cy",formatDistance:y2,formatLong:S2,formatRelative:_2,localize:L2,match:G2,options:{weekStartsOn:0,firstWeekContainsDate:1}},Id={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},Y2=(r,e,t)=>{let i;const s=t!=null&&t.addSuffix?Id[r].withPreposition:Id[r].standalone;return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:"vor "+i:i},q2={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},X2={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},K2={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Z2={date:Ut({formats:q2,defaultWidth:"full"}),time:Ut({formats:X2,defaultWidth:"full"}),dateTime:Ut({formats:K2,defaultWidth:"full"})},J2={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Q2=(r,e,t,i)=>J2[r],e5={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},t5={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ah={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},r5={narrow:ah.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ah.wide},i5={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},s5={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},n5={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},a5=r=>Number(r)+".",o5={ordinalNumber:a5,era:gt({values:e5,defaultWidth:"wide"}),quarter:gt({values:t5,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:ah,formattingValues:r5,defaultWidth:"wide"}),day:gt({values:i5,defaultWidth:"wide"}),dayPeriod:gt({values:s5,defaultWidth:"wide",formattingValues:n5,defaultFormattingWidth:"wide"})},l5=/^(\d+)(\.)?/i,h5=/\d+/i,c5={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},d5={any:[/^v/i,/^n/i]},u5={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},p5={any:[/1/i,/2/i,/3/i,/4/i]},f5={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},g5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},m5={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},v5={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},y5={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},b5={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},w5={ordinalNumber:Vn({matchPattern:l5,parsePattern:h5,valueCallback:r=>parseInt(r)}),era:mt({matchPatterns:c5,defaultMatchWidth:"wide",parsePatterns:d5,defaultParseWidth:"any"}),quarter:mt({matchPatterns:u5,defaultMatchWidth:"wide",parsePatterns:p5,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:f5,defaultMatchWidth:"wide",parsePatterns:g5,defaultParseWidth:"any"}),day:mt({matchPatterns:m5,defaultMatchWidth:"wide",parsePatterns:v5,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:y5,defaultMatchWidth:"wide",parsePatterns:b5,defaultParseWidth:"any"})},x5={code:"de",formatDistance:Y2,formatLong:Z2,formatRelative:Q2,localize:o5,match:w5,options:{weekStartsOn:1,firstWeekContainsDate:4}},S5={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},$5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},_5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},C5={date:Ut({formats:S5,defaultWidth:"full"}),time:Ut({formats:$5,defaultWidth:"full"}),dateTime:Ut({formats:_5,defaultWidth:"full"})},k5={code:"en-GB",formatDistance:du,formatLong:C5,formatRelative:uu,localize:pu,match:fu,options:{weekStartsOn:1,firstWeekContainsDate:4}},P5={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},O5=(r,e,t)=>{let i;const s=P5[r];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"dans "+i:"il y a "+i:i},A5={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},E5={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},D5={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},L5={date:Ut({formats:A5,defaultWidth:"full"}),time:Ut({formats:E5,defaultWidth:"full"}),dateTime:Ut({formats:D5,defaultWidth:"full"})},R5={lastWeek:"eeee 'dernier à' p",yesterday:"'hier à' p",today:"'aujourd’hui à' p",tomorrow:"'demain à' p'",nextWeek:"eeee 'prochain à' p",other:"P"},T5=(r,e,t,i)=>R5[r],M5={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},I5={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},U5={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},z5={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},F5={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},j5=(r,e)=>{const t=Number(r),i=e==null?void 0:e.unit;if(t===0)return"0";const s=["year","week","hour","minute","second"];let n;return t===1?n=i&&s.includes(i)?"ère":"er":n="ème",t+n},N5=["MMM","MMMM"],W5={preprocessor:(r,e)=>r.getDate()===1||!e.some(i=>i.isToken&&N5.includes(i.value))?e:e.map(i=>i.isToken&&i.value==="do"?{isToken:!0,value:"d"}:i),ordinalNumber:j5,era:gt({values:M5,defaultWidth:"wide"}),quarter:gt({values:I5,defaultWidth:"wide",argumentCallback:r=>r-1}),month:gt({values:U5,defaultWidth:"wide"}),day:gt({values:z5,defaultWidth:"wide"}),dayPeriod:gt({values:F5,defaultWidth:"wide"})},H5=/^(\d+)(ième|ère|ème|er|e)?/i,B5=/\d+/i,G5={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},V5={any:[/^av/i,/^ap/i]},Y5={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},q5={any:[/1/i,/2/i,/3/i,/4/i]},X5={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},K5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},Z5={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},J5={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},Q5={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},eS={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},tS={ordinalNumber:Vn({matchPattern:H5,parsePattern:B5,valueCallback:r=>parseInt(r)}),era:mt({matchPatterns:G5,defaultMatchWidth:"wide",parsePatterns:V5,defaultParseWidth:"any"}),quarter:mt({matchPatterns:Y5,defaultMatchWidth:"wide",parsePatterns:q5,defaultParseWidth:"any",valueCallback:r=>r+1}),month:mt({matchPatterns:X5,defaultMatchWidth:"wide",parsePatterns:K5,defaultParseWidth:"any"}),day:mt({matchPatterns:Z5,defaultMatchWidth:"wide",parsePatterns:J5,defaultParseWidth:"any"}),dayPeriod:mt({matchPatterns:Q5,defaultMatchWidth:"any",parsePatterns:eS,defaultParseWidth:"any"})},rS={code:"fr",formatDistance:O5,formatLong:L5,formatRelative:T5,localize:W5,match:tS,options:{weekStartsOn:1,firstWeekContainsDate:4}};var iS=Object.defineProperty,sS=Object.getOwnPropertyDescriptor,yt=(r,e,t,i)=>{for(var s=i>1?void 0:i?sS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&iS(e,t,s),s};const nS={en:k5,fr:rS,de:x5,cy:V2,cs:m2};let dt=class extends je{constructor(){super(...arguments),this.palette="jet",this.enablegrouping=!1,this.loadingInfo=!1,this.loadingData=!1,this.only=[],this.state=0,this.by=ys.HOURS,this.folders={},this.registryRef=pe(),this.interactiveAnalysis=!0,this.detail=void 0,this.pngExportWidth=1200,this.pngExportWidthSetterContext=r=>{this.pngExportWidth=r},this.pngExportFs=20,this.pngExportFsSetterContext=r=>{this.pngExportFs=r}}connectedCallback(){super.connectedCallback();const r=()=>{this.getBoundingClientRect().top<-50?this.classList.add("is-pinned"):this.classList.remove("is-pinned")};window.addEventListener("scroll",r),window.addEventListener("resize",r)}firstUpdated(r){super.firstUpdated(r),zi(this)}updated(r){super.updated(r),(r.has("url")||r.has("subfolder"))&&this.loadInfo(this.url,this.subfolder),(r.has("only")||r.has("by"))&&this.url!==void 0&&this.loadData(this.only,this.by,this.url,this.subfolder),this.registryRef.value&&this.registryRef.value.registry.batch.onBatchComplete.set(this.UUID,()=>{var e;(e=this.registryRef.value)==null||e.registry.range.applyMinmax()})}async showDetail(r,e,t){this.detail={folder:r,lrc:e,png:t},this.state=3,this.resetRegistry(),this.scrollToComponent()}async closeDetail(){switch(delete this.detail,this.detail=void 0,typeof(this.dataMultiple??this.dataOnly)){case"undefined":this.state=0;break;case typeof this.dataOnly:this.state=1;break;case typeof this.dataMultiple:this.state=2;break}this.scrollToComponent()}scrollToComponent(){this.scrollIntoView({behavior:"smooth",block:"start"})}getApiUrl(r,e){return e!==void 0?`${r}?subfolder="${e}"`:r}async loadInfo(r,e){this.loadingInfo=!0;try{const i=await new Ml(r,e).info();this.info=i,this.folders=i.folders,this.loadingInfo=!1}catch{this.error="There was an error loading info"}}async loadDataOne(r,e,t){this.loadingData=!1,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=await new Ml(e,t).folder(r);this.log("folder",r,s),this.scrollToComponent(),this.dataOnly=s,this.loadingData=!1,this.registryRef.value&&this.registryRef.value.registry.groups.addListener(this.UUID,n=>{n.forEach(a=>a.files.addListener(this.UUID,o=>{o[0]&&a.analysisSync.turnOn(o[0])}))})}async loadDataMultiple(r,e,t,i){var a;this.loadingData=!0,this.dataOnly=void 0,this.dataMultiple=void 0,this.scrollToComponent();const s=new Ml(t,i);s.setOnly(r.join(",")),s.setGrid(!0);const n=await s.grid(e);this.scrollToComponent(),this.dataMultiple=n,this.loadingData=!1,(a=this.registryRef.value)==null||a.registry.groups.removeListener(this.UUID)}async loadData(r,e,t,i){r.length>1?this.loadDataMultiple(r,e,t,i):r.length===1&&this.loadDataOne(r[0],t,i)}renderMainScreen(){return u`
<div class="screen screen-main">

    <main>
        <slot></slot>
    </main>


    <nav class="screen-main-folders">
        ${Object.values(this.folders).map(r=>u`
        <button class="screen-main-folder" @click=${()=>this.actionOpenOneFolder(r.folder)}>
            <h1>${r.name}</h1>
            ${r.description!==void 0?u`<p>${r.description}</p>`:_}
            <div>${x(w.numfiles,{num:r.lrc_count})}</div>
        </button>
            `)}
    </nav>


</div>
        `}resetRegistry(){this.registryRef.value&&(this.registryRef.value.registry.forEveryInstance(r=>r.unmountFromDom()),this.registryRef.value.registry.reset(),this.registryRef.value.registry.minmax.reset(),this.registryRef.value.registry.range.reset(),this.registryRef.value.registry.opacity.imposeOpacity(1))}actionCloseToHomepage(){this.state=0,this.only=[],delete this.dataOnly,delete this.dataMultiple,this.resetRegistry()}actionOpenOneFolder(r){!this.only.includes(r)&&Object.keys(this.folders).includes(r)&&(this.state=1,this.only=[r],this.resetRegistry())}actionToggleFolder(r){this.only.includes(r)?(this.only=this.only.filter(e=>e!==r),this.resetRegistry(),this.only.length===0?this.actionCloseToHomepage():this.only.length===1?this.state=1:this.only.length>1&&(this.state=2)):Object.keys(this.folders).includes(r)&&(this.only=[...this.only,r],this.resetRegistry(),this.only.length>0&&(this.state=2))}actionShowEverything(){this.only=Object.keys(this.folders),this.resetRegistry(),this.state=2}renderLoading(r){return u`<div class="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
            <div>${r}</div>
        </div>`}renderOne(){return this.loadingData||this.dataOnly===void 0?this.renderLoading("Loading folder data"):u`
            <group-provider slug="${this.dataOnly.info.folder}">

                ${Object.values(this.dataOnly.files).map(r=>u`<div>
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
        `}renderMultiple(){if(this.loadingData||this.dataMultiple===void 0||this.dataMultiple.data===void 0)return this.renderLoading("Loading selected folders' data");const r=this.dataMultiple.data,t=Object.entries(Object.values(Object.values(this.dataMultiple.data))[0]).map(([s,n])=>({name:n.name,key:s})).length,i=Object.keys(Object.values(r)[0]).sort((s,n)=>s<n?-1:1);return u`

            <table class="affected">

                <tbody>
                ${Object.entries(r).map(([s,n])=>{let a;const o=parseInt(s);return this.by===ys.HOURS?a=$e(o*1e3,"d. M. yyyy - HH")+":00":this.by===ys.DAYS?a=$e(o*1e3,"d. M. yyyy"):this.by===ys.WEEKS?a=$e(o*1e3,"wo"):this.by===ys.MONTHS?a=$e(o*1e3,"LLLL yyyy",{locale:nS[this._locale]}):this.by===ys.YEARS&&(a=$e(o*1e3,"yyyy")),u`
                        <tr><td class="cell-separator"></td></tr>
                        <tr>
                            <td class="cell-label" colspan="${t}">
                                <div>
                                    <h2>${a}</h2>
                                    <group-provider slug="${s}" class="buttons">
                                        <group-range-propagator></group-range-propagator>

                                        <file-dropdown label="${x(w.download).toLowerCase()}">
                                            <group-download-buttons></group-download-buttons>
                                        </file-dropdown>

                                    </group-provider>
                                </div>
                            </td>
                        </tr>
                        <group-provider slug="${s}" class="row">
                            ${i.map(l=>{const h=n[l];return u`<td class="cell-content" data-name="${h.name}">
                                    ${Object.values(h.files).map(f=>u`
                                    <div style="background-color: var(--thermal-background); padding: var(--thermal-gap); border-radius: var(--thermal-radius);">
                                        <file-provider
                                            batch="true"
                                            thermal="${f.lrc}"
                                            visible="${f.png}"
                                        >
                                            
                                            <file-thumbnail
                                                grouping="${this.by}"
                                                .ondetail=${()=>{this.showDetail(h.name,f.lrc,f.png)}}
                                            ></file-thumbnail>
                                        </file-provider>
                                    </div>
                                `)}
                                    
                                </td>`})}
                        </group-provider>
                    `})}
                </tbody>
            
            </table>

        `}renderTimeToggle(){const r=["hours","days","weeks","months","years"];return u`
<thermal-dropdown>
    <span slot="invoker">${x(w[`by${this.by}`])}</span>
    ${r.map(e=>u`
    <div slot="option" @click=${()=>this.by=e}>
        <thermal-button>${x(w[`by${e}`])}</thermal-button>
    </div>
    `)}
</thermal-dropdown>
        `}renderInfo(){if(this.state===0)return _;let r;if(this.state===1){const e=this.folders[this.only[0]],t=Object.values(this.folders).filter(n=>n.folder!==e.folder),i=u`<thermal-dropdown variant="background" class="selector">
                <span slot="invoker">${e.name}</span>

                ${t.map(n=>u`<div slot="option" @click=${()=>this.actionOpenOneFolder(n.folder)}>
                    <thermal-button>${n.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`,s=t.map((n,a)=>u`<thermal-button @click=${()=>this.actionToggleFolder(n.folder)}>
                <span class="button-inline-icon">+</span> ${n.name}
            </thermal-button> ${a!==t.length-1?` ${x(w.or)} `:_}`);r=u`${x(w.showingfolder)} ${i}. 
            
            ${t.length>0?u` ${x(w.doyouwanttoadd)} ${s}?`:_}
            `}else if(this.state===2){const e=[],t=[];Object.values(this.folders).forEach(i=>{this.only.includes(i.folder)?e.push(i):t.push(i)}),r=u`

                ${x(w.showingfolders)}
                ${e.map((i,s)=>u`<thermal-button 
                    title="${x(w.remove)}" 
                    variant="background"
                    @click=${()=>this.actionToggleFolder(i.folder)}
                >
                    ${i.name} <span class="button-inline-icon">✕</span>
                </thermal-button>${s!==e.length-1?` ${x(w.and)} `:_}`)}
                ${x(w.groupped)} ${this.renderTimeToggle()}.
            

            ${t.length>0?u`${x(w.youmayalsoadd)} ${t.map((i,s)=>u`
                    <thermal-button 
                        @click=${()=>this.actionToggleFolder(i.folder)}
                    >
                        <span class="button-inline-icon">+</span> ${i.name}
                    </thermal-button>
                    ${s!==t.length-1?` ${x(w.or)} `:_}
                `)}.`:_}

            `}return r===void 0?_:u`<div class="info">
            ${r}
        </div>`}renderBrowser(){return u`<section>
            ${this.state===1?this.renderOne():_}
            ${this.state===2?this.renderMultiple():_}
            ${this.state===3?this.renderDetail():_}
        </section>`}renderDetail(){var r,e;return this.detail===void 0?this.renderLoading("Loading the IR image"):u`
        <group-provider slug="detail" autoclear="true">
            <file-provider thermal="${(r=this.detail)==null?void 0:r.lrc}" visible="${(e=this.detail)==null?void 0:e.png}" batch="true" autoclear="true">
                <article class="detail">
                    <header class="detail-header">
                        <thermal-button @click=${()=>this.closeDetail()} variant="foreground">${x(w.close)}</thermal-button>

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
        `}renderApp(){return this.info===void 0?this.renderLoading("Loading data"):this.state===0?this.renderMainScreen():this.renderBrowser()}renderHeader(){return u`


        ${this.state===0&&this.info!==void 0?u`<thermal-button @click=${()=>{this.actionShowEverything()}}>${x(w.showeverything)}</thermal-button>`:_}
        
        ${this.state!==0?u`<thermal-button 
                    @click=${this.actionCloseToHomepage.bind(this)}
                    variant="foreground"
                >
                ${x(w.close)}
            </thermal-button>

            ${this.state===1&&this.enablegrouping===!1?u`
            <thermal-dropdown variant="background" class="selector">

                <span slot="invoker">${this.folders[this.only[0]].name}</span>

                ${Object.values(this.folders).filter(r=>!this.only.includes(r.folder)).map(r=>u`<div slot="option" @click=${()=>this.actionOpenOneFolder(r.folder)}>
                <thermal-button>${r.name}</thermal-button>
                </div>`)}

            </thermal-dropdown>`:_}

            <registry-palette-dropdown></registry-palette-dropdown>
            <registry-range-full-button></registry-range-full-button>
            <registry-range-auto-button></registry-range-auto-button>

            ${this.state===1&&this.dataOnly!==void 0?u`<group-provider slug="${this.dataOnly.info.folder}">
                    <group-download-dropdown></group-download-dropdown>
                </group-provider>`:_}
            <registry-opacity-slider></registry-opacity-slider>
            <group-tool-buttons showhint="false" showpopup="true"></group-tool-buttons>
            `:_}
        
        `}renderHistogram(){return this.state===0?_:u`<registry-histogram expandable="true"></registry-histogram>
        <registry-range-slider></registry-range-slider>
        <registry-ticks-bar></registry-ticks-bar>
        
        <nav id="graf">
        ${this.dataOnly!==void 0?u`<group-provider slug="${this.dataOnly.info.folder}">

                    <div style="width:100%">
                        <group-chart></group-chart>
                    </div>

                </group-provider>`:_}
        </nav>
        `}renderTableHeader(){if(this.state!==2)return _;const r=Object.values(this.folders).filter(e=>this.only.includes(e.folder));return u`<table class="affected">
                <thead>
                    <tr>
                        ${r.map(e=>u`<th>
                            <div class="cell-header">
                                ${e.name}
                            </div>
                        </th>`)}
                    </tr>
                </thead>
            </table>
            `}render(){const r=this.loadingInfo===!0?x(w.loading)+"...":this.label&&this.label.trim().length>0?this.label:x(w.remotefoldersbrowser);return u`

<manager-provider slug=${this.UUID} palette="${this.palette}">
    <registry-provider ref=${ve(this.registryRef)}>

        <thermal-app author="${Q(this.author)}" license="${Q(this.license)}" showfullscreen="true">

        ${this.state===0?u`
            <thermal-button variant="foreground" slot="bar" @click=${this.actionCloseToHomepage.bind(this)}>${r}</thermal-button>
            `:_}

            <header class="screen-browser-header" slot="bar">
                <thermal-bar>

                    ${this.renderHeader()}
                
                </thermal-bar>
            </header>

            <div slot="pre">
                ${this.renderInfo()}
                ${this.renderHistogram()}
                ${this.renderTableHeader()}
            </div>
        
            <div class=${Kt({screen:!0,"screen-main":this.state===0,"screen-browser":[1,2].includes(this.state),"screen-browser__one":this.state===1,"screen-browser__multiple":this.state===2,"screen-detail":this.state===3})}>
                ${this.renderApp()}
            </div>

             <thermal-dialog label="${x(w.config)}" slot="close">
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
        
        `}};dt.styles=ne`

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
            background: var(--thermal-background);
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
            width: 33.3333%;
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


    `;yt([d({type:String,reflect:!0})],dt.prototype,"label",2);yt([d({type:String,reflect:!0})],dt.prototype,"license",2);yt([d({type:String,reflect:!0})],dt.prototype,"author",2);yt([d({type:String,reflect:!0,attribute:!0})],dt.prototype,"palette",2);yt([d({type:Boolean,reflect:!0,converter:Ne(!0)})],dt.prototype,"enablegrouping",2);yt([d({type:String,reflect:!0})],dt.prototype,"url",2);yt([d({type:String,reflect:!0})],dt.prototype,"subfolder",2);yt([v()],dt.prototype,"info",2);yt([v()],dt.prototype,"error",2);yt([v()],dt.prototype,"loadingInfo",2);yt([v()],dt.prototype,"loadingData",2);yt([v()],dt.prototype,"only",2);yt([v()],dt.prototype,"state",2);yt([v()],dt.prototype,"by",2);yt([v()],dt.prototype,"dataOnly",2);yt([v()],dt.prototype,"dataMultiple",2);yt([v()],dt.prototype,"folders",2);yt([V({context:ti})],dt.prototype,"interactiveAnalysis",2);yt([v()],dt.prototype,"detail",2);yt([V({context:Os})],dt.prototype,"pngExportWidth",2);yt([V({context:Qn})],dt.prototype,"pngExportWidthSetterContext",2);yt([V({context:As})],dt.prototype,"pngExportFs",2);yt([V({context:ea})],dt.prototype,"pngExportFsSetterContext",2);yt([V({context:gi}),d({reflect:!0,converter:Fi})],dt.prototype,"locale",2);dt=yt([H("remote-browser-app")],dt);var aS=Object.defineProperty,oS=Object.getOwnPropertyDescriptor,Tr=(r,e,t,i)=>{for(var s=i>1?void 0:i?oS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&aS(e,t,s),s};let sr=class extends je{constructor(){super(...arguments),this.by="days",this.loading=!1,this.heightRange=0,this.heightFolders=0,this.registryRef=pe(),this.palette="jet"}firstUpdated(r){super.firstUpdated(r),zi(this)}updated(r){super.updated(r),(r.has("by")||r.has("url")||r.has("subfolder"))&&this.loadData(this.by,this.url,this.subfolder)}getUrl(r,e,t){let i=e+`?${r}&grid`;return t&&(i+=`&scope=${t}`),i}async loadData(r,e,t){this.loading=!0,this.data=void 0,this.registryRef.value&&this.registryRef.value.registry.groups.removeAllGroups();try{const i=this.getUrl(r,e,t),s=await fetch(i,{});if(s.ok){const n=await s.json(),a=Object.entries(n.data).map(([o,l])=>{const h=Object.entries(l);h.sort((p,g)=>p[0]<g[0]?-1:1);const f=Object.fromEntries(h);return[o,f]});n.data=Object.fromEntries(a),this.data=n,this.loading=!1,this.log(this.data),this.observer=new ResizeObserver(o=>{this.log(o),o[0]&&(this.heightFolders=this.getFoldersHeight(),this.heightRange=this.getRangeHeight())}),this.observer.observe(this)}else throw new Error("Data not OK!")}catch{this.loading=!1}}getRangeHeight(){const r=this.renderRoot.querySelector("#range");return console.log(r),r!==null?r.clientHeight:0}getFoldersHeight(){const r=this.renderRoot.querySelector("#folders");return r!==null?r.clientHeight:0}getGroupLabel(r){return this.by==="hours"?$e(r,"d. M.yyyy - mm:ss"):this.by==="days"?$e(r,"d. M. yyyy"):this.by==="weeks"?$e(r,"I")+" roku "+$e(r,"yyyy"):this.by==="months"?$e(r,"M"):this.by==="years"?$e(r,"yyyy"):r.toString()}getItemLabel(r){return this.by==="hours"?$e(r,"h:mm:ss"):this.by==="days"?$e(r,"H:mm:ss"):this.by==="weeks"?$e(r,"I")+" roku "+$e(r,"yyyy"):this.by==="months"?$e(r,"M"):this.by==="years"?$e(r,"yyyy"):r.toString()}renderFile(r){return u`
            <file-provider
                batch="true"
                thermal="${r.lrc}"
                visible="${Q(r.png)}"
            >

                <article class="file">

                    <header>

                        <h4>${this.getItemLabel(r.timestamp*1e3)}</h4>

                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                        <file-range-propagator></file-range-propagator>
                        <file-info-button>
                            <file-button slot="invoker" label="${x(w.info).toLowerCase()}"></file-button>
                        </file-info-button>

                    </header>

                    <main>

                        <file-canvas></file-canvas>

                        <file-analysis-table></file-analysis-table>

                    </main>

                </article>

            </file-provider>
        `}renderGrid(r){const e=Object.values(Object.values(r.data)[0]).map(s=>s.name),t=e.length,i=100/e.length+"%";return u`


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
                    ${Object.values(Object.values(r.data)[0]).map(s=>u`<td>
                            <div class="cell-folder-header">
                                <h1>${s.name}</h1>
                            </div>
                    </td>`)}
                </tr>
            
                ${Object.entries(r.data).map(([s,n])=>{const a=Object.keys(n).length;return u`

                        <tr><td class="separator"></td></tr>

                        <tr class="group-header">
                            <td colspan="${a}">
                                <div class="cell-divider">
                                    <group-provider slug=${Q(s)}>
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

                        <group-provider class="group-files" slug=${Q(s)}>
                            ${Object.values(n).map(o=>u`<td style="width: ${i};">
                                        <div class="cell-group">

                                        ${o.count>0?Object.values(o.files).map(this.renderFile.bind(this)):_}

                                        </div>
                                </td>`)}
                        </group-provider>
                    `})}

            </table>
            
        `}render(){const r=this.loading?x(w.loading)+"":this.label??"Remote folder";return u`
                <manager-provider slug="folders_app___uuid__${this.UUID}" palette=${this.palette}>
                    <registry-provider slug="folders_app_registry" ${ve(this.registryRef)}>
            
                            <thermal-app
                                author=${Q(this.author)}
                                license=${Q(this.license)}
                            >
    
                                <thermal-button variant="foreground" interactive="false" slot="bar">
                                    ${r}
                                </thermal-button>


                                ${this.data?this.renderGrid(this.data):_}
    
                    
                        </thermal-app>
                </registry-provider>
            </manager-provider>`}};sr.styles=ne`
    
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
    
    `;Tr([d({type:String,reflect:!0})],sr.prototype,"url",2);Tr([d({type:String,reflect:!0})],sr.prototype,"subfolder",2);Tr([d({type:String,reflect:!0})],sr.prototype,"by",2);Tr([v()],sr.prototype,"loading",2);Tr([d({type:String,reflect:!0})],sr.prototype,"license",2);Tr([d({type:String,reflect:!0})],sr.prototype,"label",2);Tr([d({type:String,reflect:!0})],sr.prototype,"author",2);Tr([v()],sr.prototype,"data",2);Tr([v()],sr.prototype,"heightRange",2);Tr([v()],sr.prototype,"heightFolders",2);Tr([d({type:String,reflect:!0,attribute:!0})],sr.prototype,"palette",2);Tr([V({context:gi}),d({reflect:!0,converter:Fi})],sr.prototype,"locale",2);sr=Tr([H("remote-grid-app")],sr);var lS=Object.defineProperty,hS=Object.getOwnPropertyDescriptor,Xo=(r,e,t,i)=>{for(var s=i>1?void 0:i?hS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&lS(e,t,s),s};let nn=class extends je{constructor(){super(...arguments),this.showlabel=!0,this.showTime=!0}renderEntry(e){const t=this.showlabel===!0?e.label:_,i=this.showTime===!0&&e.from!==void 0&&e.to!==void 0?[$e(e.from,"mm:ss.SSS"),$e(e.to,"mm:ss.SSS")].join(" - "):_,s=e.getRenderContent(),n=e.image!==void 0?u`<img src="${e.image}" class="builtin-image" />`:_;return u`<article>

            ${t!==_?u`<h1>${t}</h1>`:_}

            ${i!==_?u`<div class="time">${i}</div>`:_}

            ${n}

            ${s.length>0?u`<div class="content">
                    ${s}
                </div>`:_}
        </article>`}render(){return u`${Gh(this.entries,this.renderEntry.bind(this))}`}};nn.styles=ne`
    
        article {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            line-height: 1em;

            width: 100%;
            box-sizing: border-box;
            padding: var(--thermal-gap);
            
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
        }

        h1, .time {
            font-size: var(--thermal-fs);
            font-weight: bold;
            line-height: 1em;
            margin: 0;
            padding: 0;
            margin-bottom: calc( var( --thermal-gap ) * .5);
        }

        .content {
            
        }

        img {
            max-width: 100%;
            height: auto;
        }
    
    `;Xo([v(),le({context:Yo,subscribe:!0})],nn.prototype,"entries",2);Xo([d({converter:Ne(!0)})],nn.prototype,"showlabel",2);Xo([d({converter:Ne(!0)})],nn.prototype,"showTime",2);nn=Xo([H("notation-content")],nn);var cS=Object.defineProperty,dS=Object.getOwnPropertyDescriptor,Rs=(r,e,t,i)=>{for(var s=i>1?void 0:i?dS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cS(e,t,s),s};let cs=class extends je{constructor(){super(...arguments),this.ms=0,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observer=null}connectedCallback(){super.connectedCallback()}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');this.log("SLOT",r),r&&(this.log("SLOT",r.assignedElements()),this.notationList=Oi(r.assignedElements()),this.observer=new MutationObserver(()=>{this.notationList=Oi(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observer)==null||t.disconnect(),this.notationList=Oi(r.assignedElements())}))}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges()}willUpdate(r){super.willUpdate(r),this.log("Changed",r)}updateNotationsMs(r){this.notationCurrent=Zh(r,this)}render(){return u`
        
            <div>Toto je test notatora</div>

            <div>
                Počet ${this.notationList.length}
            </div>

            <div>${[1,20,1e3,1e3*15,1e3*60,1e3*1e3].map(r=>u`<button @click=${()=>this.updateNotationsMs(r)}>${r}</button>`)}</div>

            <div>
                <h2>Aktivní</h2>

                <slot name="notation"></slot>
            </div>

            <notation-timeline></notation-timeline>

            <notation-content></notation-content>
        
        `}};Rs([v()],cs.prototype,"ms",2);Rs([v(),Or({flatten:!0})],cs.prototype,"_notationSlot",2);Rs([v()],cs.prototype,"notations",2);Rs([v(),V({context:qo})],cs.prototype,"duration",2);Rs([v(),V({context:Vo})],cs.prototype,"notationList",2);Rs([v(),V({context:Yo})],cs.prototype,"notationCurrent",2);cs=Rs([H("notation-test")],cs);var uS=Object.defineProperty,pS=Object.getOwnPropertyDescriptor,Jh=(r,e,t,i)=>{for(var s=i>1?void 0:i?pS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&uS(e,t,s),s};let Bn=class extends je{renderEntry(r){if(r.from!==void 0&&r.to!==void 0){const e=r.from/this.duration*100,i=r.to/this.duration*100-e;return u`<div class="entry" style="left: ${e}%; width: ${i}%;">
                ${r.label!==void 0?u`<div class="entry-tooltip">
                    <div>${r.label}</div>
                </div>`:_}
            </div>`}return _}render(){return u`<div class="container">
            ${Gh(this.entries,this.renderEntry.bind(this))}
        </div>`}};Bn.styles=ne`
    
        ::host {
            width: 100%;
            box-sizing: border-box;
            height: 5px;
            position: relative;
            margin-bottom: 5px;
            margin-top: 3px;
            display: block;
        }

        .container {
            width: 100%;
            position: relative;
            height: 5px;
            top: 0px;
        }

        .entry {
            height: 5px;
            border-radius: 5px;
            background: var(--thermal-foreground);
            position: absolute;
            top: 0px;
            cursor: pointer;
            border-left: 1px solid var(--thermal-foreground);
        }

        .entry:nth-child(2n) {
            background-color: var(--thermal-slate-dark);
        }

        .entry-tooltip {
            display: none;
        }

        .entry:hover {

            background: green;

            .entry-tooltip {

                display: block;
                position: absolute;
                left: 50%;
                bottom: 1em;
                width: 0px;
                text-align: center;

                > div {

                    display: inline;
                    padding: 3px;
                    white-space: preserve nowrap;
                    background: gray;
                    text-align: center;

                    

                }
            }

        }

    `;Jh([v(),le({context:Vo,subscribe:!0})],Bn.prototype,"entries",2);Jh([le({context:qo,subscribe:!0})],Bn.prototype,"duration",2);Bn=Jh([H("notation-timeline")],Bn);var fS=Object.defineProperty,gS=Object.getOwnPropertyDescriptor,Xe=(r,e,t,i)=>{for(var s=i>1?void 0:i?gS(e,t):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fS(e,t,s),s};let Ge=class extends je{constructor(){super(...arguments),this.fileProviderRef=pe(),this.palette="jet",this.opacity=1,this.showembed=!1,this.showabout=!1,this.showtutorial=!1,this.showfullscreen=!1,this.showhistogram=!0,this.interactiveanalysis=!0,this.autoclear=!1,this.collapsed=!1,this.notations=[],this.duration=1e3*1e3,this.notationList=[],this.observerMutation=null}connectedCallback(){super.connectedCallback(),this.observerResize=new ResizeObserver(r=>{const e=r[0];e&&(e.contentRect.width>1e3?this.collapsed===!0&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0))}),this.observerResize.observe(this)}firstUpdated(r){super.firstUpdated(r),this.observeSlotChanges(),this.fileProviderRef.value&&this.fileProviderRef.value.onSuccess.add(this.UUID,e=>{this.duration=e.timeline.duration,e.timeline.addListener(this.UUID,t=>{this.ms=t,this.updateNotationsMs(t)})})}observeSlotChanges(){var e;const r=(e=this.renderRoot)==null?void 0:e.querySelector('slot[name="notation"]');r&&(this.notationList=Oi(r.assignedElements()),this.observerMutation=new MutationObserver(()=>{this.notationList=Oi(r.assignedElements())}),r.addEventListener("slotchange",()=>{var t;(t=this.observerMutation)==null||t.disconnect(),this.notationList=Oi(r.assignedElements())}))}updateNotationsMs(r){this.notationCurrent=Zh(r,this)}render(){var t;const r=this.fileProviderRef.value===void 0?x(w.loading):this.label??((t=this.fileProviderRef.value.file)==null?void 0:t.fileName)??x(w.file),e={content:!0,content__collapsed:this.collapsed,content__expanded:!this.collapsed};return u`<manager-provider
      slug="manager_${this.UUID}"
      palette=${this.palette}
      autoclear=${this.autoclear}
    >
      <registry-provider 
        slug="registry_${this.UUID}"
        from=${Q(this.from)}
        to=${Q(this.to)}
        opacity=${Q(this.opacity)}
        autoclear=${this.autoclear}
      >
        <group-provider 
          slug="group_${this.UUID}"
        >
          
          <file-provider
            ${ve(this.fileProviderRef)}
            thermal="${this.url}"
            visible=${Q(this.visible)}
            analysis1=${Q(this.analysis1)}
            analysis2=${Q(this.analysis2)}
            analysis3=${Q(this.analysis3)}
            analysis4=${Q(this.analysis4)}
            analysis5=${Q(this.analysis5)}
            analysis6=${Q(this.analysis6)}
            analysis7=${Q(this.analysis7)}
            speed=${Q(this.speed)}
            autoclear=${this.autoclear}
          >
            
            <thermal-app
              author=${Q(this.author)} 
              recorded=${Q(this.recorded)} 
              license=${Q(this.license)}
              label="${r}"
            >

              <div class="${Kt(e)}">

                <div class="content-part content-part__tools">
                  <group-tool-bar></group-tool-bar>
                </div>

                <div class="content-part content-part__left">
                  
                  <registry-histogram expandable="true"></registry-histogram>
                  <registry-range-slider></registry-range-slider>
                  <registry-ticks-bar></registry-ticks-bar>

                  <file-canvas></file-canvas>
                  <file-timeline></file-timeline>

                </div>

                <div class="content-part content-part__right">
                  <file-analysis-table></file-analysis-table>
                  <notation-content></notation-content>
                </div>

              </div>
            
            </thermal-app>
          
          </file-provider>
        
        </group-provider>
      </registry-provider>
    </manager-provider>
    
    <slot name="notation"></slot>
    
    `}};Ge.styles=ne`
  
    :host {
      width: 100%;
      display: block;
    }


    .content {

      width: 100%;
      box-sizing: border-box;

      &.content__collapsed {

        display: grid;
        grid-template-columns: 25px calc(100% - 25px);

      }

      &.content__expanded {
        display: grid;
        grid-template-columns: 25px 1fr 1fr;
        gap: var(--thermal-gap);

      }

    }
  
  `;Xe([d({type:String,reflect:!0})],Ge.prototype,"url",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"visible",2);Xe([d({type:String,reflect:!0,attribute:!0})],Ge.prototype,"palette",2);Xe([d({type:Number,reflect:!0,attribute:!0})],Ge.prototype,"opacity",2);Xe([d({type:Number,reflect:!0})],Ge.prototype,"from",2);Xe([d({type:Number,reflect:!0})],Ge.prototype,"to",2);Xe([d()],Ge.prototype,"author",2);Xe([d()],Ge.prototype,"recorded",2);Xe([d()],Ge.prototype,"license",2);Xe([d()],Ge.prototype,"label",2);Xe([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Ge.prototype,"showembed",2);Xe([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Ge.prototype,"showabout",2);Xe([d({type:String,reflect:!1,attribute:!0,converter:Ne(!1)})],Ge.prototype,"showtutorial",2);Xe([d({type:String,reflect:!1,converter:Ne(!0)})],Ge.prototype,"showfullscreen",2);Xe([d({type:String,reflect:!0,converter:Ne(!0)})],Ge.prototype,"showhistogram",2);Xe([V({context:ti}),d({type:String,reflect:!0,converter:Ne(!0)})],Ge.prototype,"interactiveanalysis",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis1",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis2",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis3",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis4",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis5",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis6",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"analysis7",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"ms",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"speed",2);Xe([d({type:String,reflect:!0})],Ge.prototype,"autoclear",2);Xe([v()],Ge.prototype,"collapsed",2);Xe([v(),Or({flatten:!0})],Ge.prototype,"_notationSlot",2);Xe([v()],Ge.prototype,"notations",2);Xe([v(),V({context:qo})],Ge.prototype,"duration",2);Xe([v(),V({context:Vo})],Ge.prototype,"notationList",2);Xe([v(),V({context:Yo})],Ge.prototype,"notationCurrent",2);Ge=Xe([H("thermal-lesson-app")],Ge);hg();cg();console.info(`@labir/embed ${zd}
Author: ${af}`);
